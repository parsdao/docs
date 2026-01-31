# Committee Treasuries (خزانه‌های کمیته)

Each of the Ten Committees maintains a dedicated treasury for its domain operations. This document details how Committee treasuries are structured, funded, and governed.

## Committee Treasury Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    COMMITTEE TREASURY SYSTEM                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  MAIN TREASURY (خزانه اصلی)                                                   │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                          ┌─────────────┐                                ││
│  │                          │  Quarterly  │                                ││
│  │                          │ Allocation  │                                ││
│  │                          └──────┬──────┘                                ││
│  └─────────────────────────────────┼───────────────────────────────────────┘│
│                                    │                                        │
│        ┌───────────┬───────────┬───┴────┬───────────┬───────────┐          │
│        │           │           │        │           │           │          │
│        ▼           ▼           ▼        ▼           ▼           ▼          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │  KHAZ   │ │   AMN   │ │   SAL   │ │  FARH   │ │   DAN   │              │
│  │   25%   │ │   10%   │ │   10%   │ │   10%   │ │   10%   │              │
│  │  خزانه   │ │  امنیّت  │ │  سلامت  │ │  فرهنگ  │ │  دانش   │              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
│                                                                            │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │   SAZ   │ │   DAD   │ │   PAY   │ │  WAQF   │ │   MIZ   │              │
│  │   10%   │ │    5%   │ │    5%   │ │   10%   │ │    5%   │              │
│  │ سازندگی │ │   داد   │ │  پیام   │ │  وقف    │ │  میزان  │              │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Allocation Summary

| Committee | Symbol | Persian | Annual Allocation | Vault Threshold |
|:----------|:-------|:--------|:------------------|:----------------|
| Treasury | KHAZ | خزانه | 25% | 3-of-5 |
| Security | AMN | امنیّت | 10% | 3-of-5 |
| Health | SAL | سلامت | 10% | 2-of-5 |
| Culture | FARH | فرهنگ | 10% | 2-of-5 |
| Research | DAN | دانش | 10% | 2-of-5 |
| Infrastructure | SAZ | سازندگی | 10% | 3-of-5 |
| Governance | DAD | داد | 5% | 2-of-5 |
| Consular | PAY | پیام | 5% | 2-of-5 |
| Endowment | WAQF | وقف | 10% | 4-of-5 |
| Integrity | MIZ | میزان | 5% | 3-of-5 |

## Committee Treasury Details

### KHAZ | خزانه | Treasury Committee

**Domain**: Financial Infrastructure

The Treasury Committee manages the main protocol treasury and coordinates cross-Committee funding.

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 25% of protocol revenue |
| Vault Threshold | 3-of-5 signers |
| Strategy | Diversified reserves |

**Responsibilities**:
- Main treasury management
- Reserve diversification
- Cross-Committee funding coordination
- Financial reporting

---

### AMN | امنیّت | Security Committee

**Domain**: Safety & Protection

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 10% of protocol revenue |
| Vault Threshold | 3-of-5 signers |
| Strategy | Stablecoin-only holdings |

**Spending Focus**:
- Smart contract audits
- Bug bounty rewards
- Security infrastructure
- Threat response

---

### SAL | سلامت | Health Committee

**Domain**: Healthcare Access

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 10% of protocol revenue |
| Vault Threshold | 2-of-5 signers |
| Strategy | Stablecoin + yield positions |

**Spending Focus**:
- Healthcare network grants
- Mental health programs
- Medical professional support
- Health education

---

### FARH | فرهنگ | Culture Committee

**Domain**: Heritage & Arts

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 10% of protocol revenue |
| Vault Threshold | 2-of-5 signers |
| Strategy | Creator grants |

**Spending Focus**:
- Persian language preservation
- Cultural heritage documentation
- Artist grants and residencies
- Nowruz event funding

---

### DAN | دانش | Research Committee

**Domain**: Knowledge & Education

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 10% of protocol revenue |
| Vault Threshold | 2-of-5 signers |
| Strategy | Research grants |

**Spending Focus**:
- Diaspora research grants
- Academic partnerships
- Policy research
- Technology R&D

---

### SAZ | سازندگی | Infrastructure Committee

**Domain**: Technical Systems

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 10% of protocol revenue |
| Vault Threshold | 3-of-5 signers |
| Strategy | Technical procurement |

**Spending Focus**:
- Multi-chain infrastructure
- Bridge maintenance
- Developer tooling
- Scaling operations

---

### DAD | داد | Governance Committee

**Domain**: Coordination

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 5% of protocol revenue |
| Vault Threshold | 2-of-5 signers |
| Strategy | Minimal holdings |

**Spending Focus**:
- Governance tooling
- PIP system maintenance
- Documentation
- Cross-Committee coordination

---

### PAY | پیام | Consular Committee

**Domain**: Community Relations

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 5% of protocol revenue |
| Vault Threshold | 2-of-5 signers |
| Strategy | Chapter support |

**Spending Focus**:
- Chapter coordination
- Community events
- Diaspora networking
- Cross-border communication

---

### WAQF | وقف | Endowment Committee

**Domain**: Long-term Wealth

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 10% of protocol revenue |
| Vault Threshold | 4-of-5 signers |
| Strategy | Long-horizon investments |

**Spending Focus**:
- Endowment management
- Long-term investments
- Perpetual grant programs
- Legacy planning

**Special Rules**:
- 25-year minimum investment horizon
- Cannot spend principal without super-majority vote
- Only yield distributed quarterly

---

### MIZ | میزان | Integrity Committee

**Domain**: Accountability

| Parameter | Value |
|:----------|:------|
| Annual Allocation | 5% of protocol revenue |
| Vault Threshold | 3-of-5 signers |
| Strategy | Impact audits |

**Spending Focus**:
- Impact measurement
- Financial audits
- Accountability reporting
- Whistleblower protection

## Funding Mechanism

### Quarterly Allocations

Funds flow from Main Treasury to Committees quarterly:

```
┌─────────────────────────────────────────────────────────────────┐
│                    QUARTERLY FLOW                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Protocol Revenue (Q1)                                          │
│         │                                                        │
│         ▼                                                        │
│  Main Treasury                                                  │
│         │                                                        │
│         ├──► 70% retained as reserves                           │
│         │                                                        │
│         └──► 30% distributed to Committees                      │
│                    │                                             │
│                    ├──► KHAZ: 25% × 30% = 7.5%                  │
│                    ├──► AMN:  10% × 30% = 3.0%                  │
│                    ├──► SAL:  10% × 30% = 3.0%                  │
│                    └──► ... (per allocation table)              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Streaming Distribution

Allocations stream via Sablier:
- Continuous fund availability
- No lump-sum management burden
- Automatic distribution
- Claimable at any time

## Committee Spending Authority

### Standard Operations

| Committee Tier | Spending Limit | Approval |
|:---------------|:---------------|:---------|
| Small (DAD, PAY, MIZ) | Up to $5,000 | Committee lead |
| Medium (SAL, FARH, DAN) | Up to $10,000 | Committee lead |
| Large (KHAZ, AMN, SAZ, WAQF) | Up to $25,000 | 2-of-3 Committee members |

### Large Expenditures

Above standard limits:
- Requires Committee resolution
- Committee-level voting
- 7-day approval process

### Cross-Committee Funding

Large initiatives requiring multi-Committee coordination:
- Requires Council resolution
- Standard governance process
- Coordination via DAD Committee

## Committee Vault Management

### Signer Rotation

- Committee leads serve as signers
- 6-month terms (staggered with elections)
- Outgoing leads removed within 7 days
- New leads added upon election

### Security Requirements

All Committee signers must:
- Use hardware wallets
- Complete security training
- Report suspicious activity to AMN Committee

### Emergency Access

In Committee emergency:
- Main Treasury can provide emergency funding
- Requires 3-of-5 Main Treasury signers
- AMN Committee notified

## Reporting Requirements

### Monthly Reports

Each Committee submits monthly:
- Transaction summary
- Active grants/streams
- Budget utilization
- Upcoming obligations

### Quarterly Reviews

MIZ Committee audits:
- Spending compliance
- Impact assessment
- Budget accuracy
- Process adherence

### Annual Reports

Comprehensive review including:
- Full financial statements
- Impact metrics
- Governance compliance
- Strategic recommendations

## Cross-Committee Coordination

### Liaison System

Each Committee designates a liaison:
- Attends cross-Committee meetings
- Represents Committee interests
- Coordinates joint initiatives

### Quarterly Summits

All Committee leads meet via Town Hall:
- Review protocol status
- Coordinate initiatives
- Resolve conflicts
- Plan next quarter

### Joint Initiatives

Multi-Committee projects:
1. Lead Committee designated
2. Budget allocated from relevant Committees
3. Joint oversight committee formed
4. Shared reporting requirements

## Accountability

### Fund Misuse

If Committee misuses funds:
1. MIZ Committee investigates
2. Findings presented to Council
3. Council can freeze Committee treasury
4. Committee leads subject to removal

### Unused Funds

At quarter end:
- Unused funds roll over
- Excessive accumulation reviewed
- Council can reallocate if necessary

## Contract Addresses

| Committee | Safe Address |
|:----------|:-------------|
| KHAZ | `0x...` (TBD) |
| AMN | `0x...` (TBD) |
| SAL | `0x...` (TBD) |
| FARH | `0x...` (TBD) |
| DAN | `0x...` (TBD) |
| SAZ | `0x...` (TBD) |
| DAD | `0x...` (TBD) |
| PAY | `0x...` (TBD) |
| WAQF | `0x...` (TBD) |
| MIZ | `0x...` (TBD) |

## Related Documentation

- [Treasury Overview](/treasury/overview) – Main treasury structure
- [Committees](/governance/committees) – Committee governance
- [Pars Council](/governance/council) – Top-level governance
