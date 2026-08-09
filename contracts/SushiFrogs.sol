// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/// @title SushiFrogs (burn-to-mint)
/// @notice Burn 20,000 $SHIFROGS per frog, mint one directly.
///         No allowlist, no phases, no per-wallet cap — first come, first minted.
contract SushiFrogs is ERC721, ERC721Enumerable, Ownable {
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 3333;

    IERC20 public immutable paymentToken;
    uint256 public burnAmount; // $SHIFROGS burned per frog

    bool public isOpen;

    string public baseURI;
    uint256 public totalMinted;

    address public constant DEAD = address(0x000000000000000000000000000000000000dEaD);

    event FrogMinted(address indexed minter, uint256 startTokenId, uint256 qty);
    event BurnAmountChanged(uint256 oldAmount, uint256 newAmount);

    constructor(address _token) ERC721("SushiFrogs", "SHIFROGS") {
        paymentToken = IERC20(_token);
        burnAmount = 20000 * 10 ** 18; // 20,000 $SHIFROGS (18 decimals) per frog
    }

    modifier mintOpenCheck() { require(isOpen, "mint closed"); _; }

    /// @notice Burn `qty * burnAmount` $SHIFROGS and mint `qty` frogs directly.
    ///         Unlimited per wallet; supply-capped at 3,333 total.
    function mint(uint256 qty) external mintOpenCheck {
        require(qty >= 1, "qty >= 1");
        require(totalMinted + qty <= MAX_SUPPLY, "supply exhausted");
        uint256 cost = burnAmount * qty;
        require(paymentToken.transferFrom(msg.sender, DEAD, cost), "transfer failed");

        uint256 startId = totalMinted;
        for (uint256 i = 0; i < qty; i++) {
            _safeMint(msg.sender, startId + i);
        }
        totalMinted += qty;
        emit FrogMinted(msg.sender, startId, qty);
    }

    // ---------- admin ----------
    function setMintOpen(bool v) external onlyOwner { isOpen = v; }
    function setBurnAmount(uint256 v) external onlyOwner {
        emit BurnAmountChanged(burnAmount, v);
        burnAmount = v;
    }
    function setBaseURI(string calldata uri) external onlyOwner { baseURI = uri; }

    /// @notice Withdraw any native tokens accidentally sent to this contract.
    function withdraw() external onlyOwner {
        (bool ok, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(ok);
    }
    receive() external payable {}

    // ---------- overrides ----------
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "nonexistent");
        string memory base = baseURI;
        return bytes(base).length > 0
            ? string(abi.encodePacked(base, tokenId.toString(), ".json"))
            : "";
    }

    function supportsInterface(bytes4 iface) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(iface);
    }

    function _beforeTokenTransfer(address from, address to, uint256 firstTokenId, uint256 batchSize)
        internal override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    }
}