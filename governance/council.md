# Pars Council (شورا)

The Pars Council (شورا - _Shura_) is the decentralized governance body that controls Pars Protocol. All protocol parameters, treasury allocations, and system upgrades require Council approval through on-chain voting.

## Governance Architecture

The Council operates through three layers:

1. **veASHA Token** – Vote-escrowed ASHA for governance participation
2. **Governor Module** – On-chain proposal and voting system
3. **Safe Multisig** – Execution layer with threshold signing

```
┌─────────────────────────────────────────────────────────────────┐
│                        PARS COUNCIL (شورا)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TOKEN LAYER                                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  ASHA ──► Lock ──► veASHA (vote-escrowed)                 │  │
│  │                                                           │  │
│  │  Lock Duration     Voting Weight                          │  │
│  │  ─────────────     ─────────────                          │  │
│  │  1 week            0.0048x                                │  │
│  │  1 month           0.021x                                 │  │
│  │  6 months          0.125x                                 │  │
│  │  1 year            0.25x                                  │  │
│  │  2 years           0.50x                                  │  │
│  │  4 years           1.00x (maximum)                        │  │
│  └───────────────────────────────────────────────────────────┘  │
│                               │                                  │
│                               ▼                                  │
│  PROPOSAL LAYER (Governor Module)                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Draft ──► Active (7 days) ──► Queued (48h) ──► Executed  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                               │                                  │
│                               ▼                                  │
│  EXECUTION LAYER (Safe 3-of-5)                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Threshold signers execute approved resolutions            │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Token Architecture

### ASHA Reserve Token

ASHA (آشا) is the sole reserve token of Pars Protocol:

- **Role**: Reserve currency backed by treasury assets
- **Mintable**: Only through bonding collateral
- **Backing**: Protocol treasury (stables, ETH, PARS, LP tokens)

Users obtain ASHA by bonding collateral assets at a discount:

| Collateral Tier | Assets | Discount Range |
|:----------------|:-------|:---------------|
| **S** | USDC, USDT, DAI | 3-8% |
| **A** | ETH, WETH | 5-12% |
| **B** | PARS | 8-18% |
| **C** | CYRUS, MIGA | 10-22% |
| **D** | LP Tokens | 12-25% |

### veASHA Governance Token

veASHA is obtained by locking ASHA and is the only way to participate in governance:

- **Minimum lock**: 1 week
- **Maximum lock**: 4 years
- **Voting power**: Linear weighting based on lock duration, decays over time

```
veASHA_weight = ASHA_amount × (lock_duration / max_duration)
```

| Lock Duration | Weight Multiplier |
|:--------------|:------------------|
| 1 week | 0.0048x |
| 1 month | 0.021x |
| 6 months | 0.125x |
| 1 year | 0.25x |
| 2 years | 0.50x |
| 4 years | 1.00x |

### Delegation

veASHA holders can delegate voting rights to any address:

- Delegate to only one address at a time
- Entire balance is delegated (no partial delegation)
- Changes to token balance automatically adjust delegatee's power
- Delegation persists until explicitly changed

## Governor Module

The Governor Module implements on-chain voting with these key features:

### Percent-Based Thresholds

Thresholds scale with veASHA supply to prevent governance capture:

| Parameter | Value | Description |
|:----------|:------|:------------|
| Proposal Threshold | 0.25% | Minimum veASHA to submit a resolution |
| Quorum | 10% | Minimum participation for valid vote |
| Approval Threshold | 50% | Percentage of votes required to pass |
| Super-majority | 67% | Required for treasury >$100K |

### Voting Parameters

| Parameter | Value | Description |
|:----------|:------|:------------|
| Voting Delay | 3 days | Review period before voting begins |
| Voting Period | 7 days | Duration of active voting |
| Timelock | 48 hours | Delay before execution |
| Grace Period | 24 hours | Window for activation/execution |

### Pessimistic Vote Casting

The Council uses pessimistic vote casting to prevent manipulation:

- Votes counted as minimum of balance at proposal start and current balance
- Prevents voters from buying influence after proposal submission
- Ensures consistent voting power throughout the process

## Safe Multisig Execution

Approved resolutions are executed by a Safe multisig:

- **Standard operations**: 3-of-5 signers
- **Large transfers (>$100K)**: 4-of-5 signers
- **Emergency freeze**: 2-of-5 signers can pause for 72 hours

### Signer Elections

Signers are elected by veASHA holders:

- 6-month terms with staggered rotation
- Any signer can be removed by governance vote
- Hardware wallet requirement for all signers

## Fractal Governance

Pars DAO uses fractal governance where the same patterns repeat at every level:

### Hierarchy

```
L1 PARS DAO (Sovereign)
├── L2 COMMITTEES (Standing)
│   ├── Security (AMN)     → SECURITY identity token
│   ├── Treasury (KHAZ)    → TREASURY identity token
│   ├── Governance (DAD)   → GOVERN identity token
│   ├── Health (SAL)       → HEALTH identity token
│   ├── Culture (FARH)     → CULTURE identity token
│   ├── Research (DAN)     → RESEARCH identity token
│   ├── Infrastructure (SAZ) → INFRA identity token
│   ├── Consular (PAY)     → CONSULAR identity token
│   ├── Venture (WAQF)     → VENTURE identity token
│   └── Impact (MIZ)       → IMPACT identity token
├── L2 WORKING GROUPS (Temporary)
│   └── Task-specific, time-limited, all funds recallable
└── L2 SUB-DAOs (Independent)
    ├── MIGA DAO → MIGA token
    └── CYRUS DAO → CYRUS token
```

### Fund Source Rules

| Source | Description | Parent Recallable? |
|:-------|:------------|:-------------------|
| **ALLOCATED** | Budget from parent DAO | Yes |
| **BONDED** | User-purchased via bonds | No |

This preserves community sovereignty while maintaining parent oversight.

## Veto and Sanction

Parent DAOs have limited oversight over children:

### Veto Power

- Parent can veto child proposals during timelock period
- Requires threshold of parent veASHA voters
- Must provide public rationale

### Sanction Guard

- Blocks execution of vetoed proposals
- Can implement temporary freeze (max 7 days)
- Child continues with bonded funds after sanction

## Censorship Resistance

The Council is designed to function under adversarial conditions:

### On-Chain Governance

- All resolutions and votes recorded on Pars Network
- No dependence on centralized governance portals
- Direct contract interaction always available

### Mesh Network Access

- Governance portal accessible via Pars mesh (PIP-0001)
- Functions during internet blackouts
- Gossip protocol distributes proposals to isolated nodes

### Post-Quantum Signatures

- ML-DSA signatures supported for all governance actions
- Protects against quantum key extraction
- Future-proof against cryptographic advances

## Coercion-Resistant Voting

For voters in high-threat environments, anonymous voting is available:

1. **ZK Proof of Eligibility**: Prove veASHA holdings without revealing address
2. **Anonymous Ballot**: Cast vote via zero-knowledge proof
3. **Nullifier**: Prevents double-voting without revealing identity
4. **Deniability**: Generate fake receipts showing any vote direction

## Governance Portal

The official governance interface is available at [pars.vote](https://pars.vote):

- Browse and create resolutions
- Manage ASHA locks and veASHA
- Delegate voting power
- View voting history
- Access via mesh network during censorship events

## Emergency Procedures

### Emergency Freeze

Any 2-of-5 Safe signers can trigger an emergency freeze:

- Duration: 72 hours maximum
- Effect: All pending transactions paused
- Extension: Requires governance vote

### Veto Guardian

The Emergency Multisig serves as Veto Guardian:

- Can veto malicious resolutions within timelock period
- Prevents governance attacks during review period
- Accountability to Council for any veto

## Related Documentation

- [Charter](/governance/charter) – Constitutional document
- [veASHA Token](/tokens/veasha) – Vote-escrow mechanics
- [Committees](/governance/committees) – Ten specialized working groups
- [Resolutions](/governance/resolutions) – Resolution lifecycle
- [Voting](/governance/voting) – Detailed voting mechanics
- [PIP-7006: ASHA Reserve Token](/pips/pip-7006-asha-reserve-token)
- [PIP-7007: Fractal Governance](/pips/pip-7007-fractal-governance)
