# How Bonds Work

This document provides detailed technical information about bond mechanics in Pars Protocol.

## Bond Purchase Flow

### Step 1: Select Market

Choose a bond market based on:
- Available discount
- Asset you want to bond
- Vesting duration

### Step 2: Approve Assets

Approve the bond contract to spend your assets:

```solidity
// Example: Approve USDC for bonding
USDC.approve(bondDepository, amount);
```

### Step 3: Purchase Bond

Execute the bond purchase:

```solidity
interface IBondDepository {
    /// @notice Purchase a bond
    /// @param id Bond market ID
    /// @param amount Amount of asset to bond
    /// @param maxPrice Maximum acceptable price (slippage protection)
    /// @return payout PARS to be received
    /// @return expiry Timestamp when bond fully vests
    function deposit(
        uint256 id,
        uint256 amount,
        uint256 maxPrice
    ) external returns (uint256 payout, uint256 expiry);
}
```

### Step 4: Wait for Vesting

PARS vests linearly over the vesting period:

```
┌─────────────────────────────────────────────────────────────────┐
│                    VESTING CURVE                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  % Vested                                                       │
│    ▲                                                            │
│ 100│                              ────────────────              │
│    │                         ─────                              │
│    │                    ─────                                   │
│ 50 │               ─────                                        │
│    │          ─────                                             │
│    │     ─────                                                  │
│   0│─────────────────────────────────────────────────► Time     │
│    │    Day 1    Day 2    Day 3    Day 4    Day 5              │
│    │                                (fully vested)              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Step 5: Claim

Claim vested PARS at any time:

```solidity
interface IBondDepository {
    /// @notice Claim vested PARS
    /// @param indexes Array of bond indexes to claim
    function redeem(uint256[] memory indexes) external;
}
```

## Sequential Dutch Auction (SDA)

### Mechanism

The SDA automatically adjusts bond prices based on demand:

1. **Target**: Sell X PARS over Y hours
2. **If demand high**: Price increases (discount decreases)
3. **If demand low**: Price decreases (discount increases)
4. **Goal**: Sell capacity evenly over the period

### Control Variable

The control variable determines price adjustment speed:

```
price_change = control_variable × time_elapsed × debt_ratio
```

| Control Variable | Effect |
|:-----------------|:-------|
| Higher | Faster price adjustment |
| Lower | Slower price adjustment |

### Debt Ratio

Tracks how much capacity has been used:

```
debt_ratio = current_debt / total_supply
```

Higher debt ratio = higher prices = lower discounts

## Bond Profitability

### When Bonds Are Profitable

Bonds are profitable when:

```
bond_price < market_price × (1 + staking_yield × vesting_days)
```

Consider:
- Current discount percentage
- Vesting period opportunity cost
- Alternative yield (staking)

### Example Calculation

| Parameter | Value |
|:----------|:------|
| Market price | $100 |
| Bond discount | 5% |
| Bond price | $95 |
| Vesting | 5 days |
| Daily staking yield | 0.02% |

**Opportunity cost**: $100 × 0.02% × 5 = $0.10

**Bond profit**: $100 - $95 = $5.00

**Net benefit**: $5.00 - $0.10 = $4.90 ✓ Profitable

## Bond Market Parameters

### Capacity

Maximum PARS available in the market:

| Type | Description |
|:-----|:------------|
| **Total capacity** | Maximum PARS for entire market |
| **Per-block capacity** | Maximum PARS per block (rate limit) |

### Price Bounds

Governance sets min/max prices:

| Bound | Purpose |
|:------|:--------|
| **Min price** | Floor price for PARS |
| **Max price** | Ceiling price for PARS |

### Conclusion

Market closes when:
- Capacity exhausted
- Governance deactivates market
- Price hits bounds

## Reserve Bond Details

### Flow

```
User provides reserve asset (USDC/DAI/ETH)
    │
    ▼
Asset transferred to Treasury
    │
    ▼
Treasury backs new PARS
    │
    ▼
PARS minted to Depository
    │
    ▼
Bond created for user (vesting)
```

### Treasury Impact

Each reserve bond:
- Increases treasury reserves
- Increases PARS supply
- Maintains/increases backing ratio

## Inverse Bond Details

### Flow

```
User provides PARS
    │
    ▼
PARS burned (supply decreases)
    │
    ▼
Treasury withdraws reserves
    │
    ▼
Reserve asset transferred to user (instant)
```

### Treasury Impact

Each inverse bond:
- Decreases treasury reserves
- Decreases PARS supply
- Maintains backing ratio

### Price Support

Inverse bonds activate when PARS trades below target range:
- Protocol buys PARS with reserves
- Burns purchased PARS
- Supports price floor

## Liquidity Bond Details

### Flow

```
User provides LP tokens (e.g., PARS/ETH)
    │
    ▼
LP tokens transferred to Treasury
    │
    ▼
Treasury gains Protocol-Owned Liquidity
    │
    ▼
PARS minted for bond (vesting)
```

### Why LP Bonds?

Protocol-Owned Liquidity (POL) provides:
- Permanent liquidity (not rented)
- No liquidity mining costs
- Trading fees to treasury
- Price stability through deep liquidity

## PARS Bonds

### Mechanism

Exchange PARS today for more PARS later:

```
User locks PARS
    │
    ▼
Bond created with future PARS payout
    │
    ▼
PARS vests over chosen duration
    │
    ▼
User receives more PARS than locked
```

### Use Case

Convert liquid PARS to time-locked position with bonus:
- Longer lock = larger bonus
- Alternative to vePARS
- Predictable yield

## Integration with RBS

### Range-Bound Stability

Bonds integrate with price stabilization:

```
┌─────────────────────────────────────────────────────────────────┐
│                    RBS + BONDS                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Price                                                          │
│    ▲                                                            │
│    │  ┌───────────────────────────────┐  Reserve Bonds          │
│    │  │      Upper Wall               │  (sell PARS)            │
│    │  ├───────────────────────────────┤                         │
│    │  │      Upper Cushion            │                         │
│    │  ├───────────────────────────────┤                         │
│    │  │                               │                         │
│    │  │      Target Range             │  No bonds active        │
│    │  │                               │                         │
│    │  ├───────────────────────────────┤                         │
│    │  │      Lower Cushion            │                         │
│    │  ├───────────────────────────────┤                         │
│    │  │      Lower Wall               │  Inverse Bonds          │
│    │  └───────────────────────────────┘  (buy PARS)             │
│    │                                                            │
│    └───────────────────────────────────────────────► Time       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Best Practices

### For Bonders

1. **Compare discount to opportunity cost** (staking yield × vesting)
2. **Set appropriate max price** for slippage protection
3. **Monitor market capacity** before large bonds
4. **Consider vesting timing** for liquidity needs

### For Governance

1. **Calibrate control variable** for market conditions
2. **Set appropriate capacity** based on treasury needs
3. **Monitor backing ratio** impact
4. **Coordinate with RBS** parameters

## Contract Addresses

| Contract | Address |
|:---------|:--------|
| Bond Depository | `0x...` (TBD) |
| Bond Teller | `0x...` (TBD) |
| Treasury | `0x...` (TBD) |

## Related Documentation

- [Bonds Overview](/bonds/overview) – Bond types and concepts
- [Treasury](/treasury/overview) – Where assets go
- [PARS Token](/tokens/pars) – Token mechanics
