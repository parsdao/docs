# xPARS Token (Staked PARS)

xPARS is the liquid staking receipt token for PARS. When you stake PARS, you receive xPARS representing your share of the staking pool and its accrued yield.

## Token Specifications

| Property | Value |
|:---------|:------|
| **Name** | Staked Pars |
| **Symbol** | xPARS |
| **Network** | Pars Network (EVM) |
| **Standard** | ERC-20 (rebasing variant) |
| **Decimals** | 18 |

## How xPARS Works

### Staking Mechanism

When you stake PARS, you deposit into the staking contract and receive xPARS:

```
┌─────────────────────────────────────────────────────────────────┐
│                    STAKING FLOW                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   User              Staking Contract          xPARS Token        │
│     │                     │                        │             │
│     │  1. Stake PARS      │                        │             │
│     │ ───────────────────►│                        │             │
│     │                     │  2. Mint xPARS         │             │
│     │                     │───────────────────────►│             │
│     │                     │                        │             │
│     │  3. Receive xPARS   │                        │             │
│     │ ◄────────────────────────────────────────────│             │
│     │                     │                        │             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Exchange Rate

xPARS appreciates against PARS as yield accrues:

```
xPARS_value = PARS_in_staking_pool / xPARS_total_supply
```

| Time | PARS in Pool | xPARS Supply | 1 xPARS = |
|:-----|:-------------|:-------------|:----------|
| Day 0 | 1,000,000 | 1,000,000 | 1.00 PARS |
| Day 30 | 1,005,000 | 1,000,000 | 1.005 PARS |
| Day 365 | 1,061,800 | 1,000,000 | 1.0618 PARS |

### Yield Sources

xPARS holders earn yield from:

| Source | Description |
|:-------|:------------|
| **Protocol fees** | Trading fees from PARS swaps |
| **Bond premiums** | Profit from bond sales above backing |
| **Treasury yield** | Income from treasury investments |
| **Advance interest** | Fees from Advance facility |

## Staking vs. Historical Rebasing

### Legacy Context

The original implementation of similar protocols used rebasing tokens (like sOHM) that increased token count to reflect staking growth. This caused confusion as price charts showed misleading declines.

### xPARS Approach

xPARS uses the **exchange rate model** instead:

| Aspect | Rebasing (legacy) | xPARS |
|:-------|:------------------|:------|
| Your token count | Increases | Stays constant |
| Token value | Stays constant | Increases |
| Price charts | Misleading | Accurate |
| DeFi compatibility | Limited | Full |
| Tax events | Every rebase | Only on unstake |

### Index-Adjusted Metrics

For historical comparison with rebasing systems:

```
index = xPARS_to_PARS_rate × historical_conversion_factor
```

This allows comparison of returns across different time periods.

## Staking Operations

### Stake (Mint xPARS)

```solidity
interface IStaking {
    /// @notice Stake PARS and receive xPARS
    /// @param amount Amount of PARS to stake
    /// @return xPARSAmount Amount of xPARS received
    function stake(uint256 amount) external returns (uint256 xPARSAmount);
}
```

**Steps**:
1. Approve PARS spending on staking contract
2. Call `stake()` with desired amount
3. Receive xPARS at current exchange rate

### Unstake (Redeem PARS)

```solidity
interface IStaking {
    /// @notice Unstake xPARS and receive PARS
    /// @param xPARSAmount Amount of xPARS to redeem
    /// @return parsAmount Amount of PARS received
    function unstake(uint256 xPARSAmount) external returns (uint256 parsAmount);
}
```

**Steps**:
1. Call `unstake()` with xPARS amount
2. Receive PARS at current exchange rate
3. xPARS is burned

### No Lock-Up Period

xPARS has no mandatory lock:
- Stake and unstake at any time
- No penalties for early withdrawal
- Yield accrues immediately upon staking

## xPARS Use Cases

### Liquid Collateral

Use xPARS as collateral for Advances:

- Deposit xPARS into Advance facility
- Borrow stablecoins against position
- Yield continues accruing while collateralized
- No price-based liquidations

### DeFi Composability

xPARS is a standard ERC-20 and works with:

| Protocol Type | Usage |
|:--------------|:------|
| **DEXs** | Provide liquidity in xPARS pairs |
| **Lending** | Use as collateral on lending markets |
| **Vaults** | Deposit into yield strategies |
| **Bridges** | Bridge to other networks |

### Governance Participation

While xPARS itself has no voting power, it can be:
- Wrapped to vePARS for governance
- Used in MIGA governance on Solana (via bridge)

## Yield Calculation

### Current APY

Yield is distributed continuously and compounds automatically:

```
APY = (yearly_protocol_revenue / total_staked_PARS) × 100%
```

View current APY on the [protocol dashboard](https://app.pars.network).

### Historical Returns

| Period | Average APY | Notes |
|:-------|:------------|:------|
| Launch | TBD | Protocol launch |

### Yield Distribution

Yield is distributed to the staking pool:
- No manual claiming required
- Automatically reflected in exchange rate
- Compounds continuously

## Risk Considerations

### Smart Contract Risk

- Staking contract is audited
- Bug bounty program active
- Users should review contracts

### Yield Variability

- APY fluctuates with protocol activity
- No guaranteed returns
- Historical returns don't predict future

### Price Risk

- xPARS value tied to PARS price
- Protocol stability mechanisms mitigate but don't eliminate volatility

## Contract Addresses

| Network | Contract | Address |
|:--------|:---------|:--------|
| Pars Network | xPARS Token | `0x...` (TBD) |
| Pars Network | Staking Contract | `0x...` (TBD) |

## Related Documentation

- [PARS Token](/tokens/pars) – Native token overview
- [vePARS Token](/tokens/vepars) – Governance token
- [Treasury](/treasury/overview) – Yield sources
