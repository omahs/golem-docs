# Module: market/strategy

## Table of contents

### Functions

- [acceptAllProposalFilter](market_strategy.md#acceptallproposalfilter)
- [blackListProposalIdsFilter](market_strategy.md#blacklistproposalidsfilter)
- [blackListProposalNamesFilter](market_strategy.md#blacklistproposalnamesfilter)
- [blackListProposalRegexpFilter](market_strategy.md#blacklistproposalregexpfilter)
- [whiteListProposalIdsFilter](market_strategy.md#whitelistproposalidsfilter)
- [whiteListProposalNamesFilter](market_strategy.md#whitelistproposalnamesfilter)
- [whiteListProposalRegexpFilter](market_strategy.md#whitelistproposalregexpfilter)

## Functions

### acceptAllProposalFilter

▸ **acceptAllProposalFilter**(): () => `Promise`<`boolean`\>

Default Proposal filter that accept all proposal coming from the market

#### Returns

`fn`

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/market/strategy.ts:4](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/market/strategy.ts#L4)

___

### blackListProposalIdsFilter

▸ **blackListProposalIdsFilter**(`blackListIds`): (`proposal`: [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md)) => `Promise`<`boolean`\>

Proposal filter blocking every offer coming from a provider whose id is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `blackListIds` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/market/strategy.ts:7](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/market/strategy.ts#L7)

___

### blackListProposalNamesFilter

▸ **blackListProposalNamesFilter**(`blackListNames`): (`proposal`: [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md)) => `Promise`<`boolean`\>

Proposal filter blocking every offer coming from a provider whose name is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `blackListNames` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/market/strategy.ts:11](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/market/strategy.ts#L11)

___

### blackListProposalRegexpFilter

▸ **blackListProposalRegexpFilter**(`regexp`): (`proposal`: [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md)) => `Promise`<`boolean`\>

Proposal filter blocking every offer coming from a provider whose name match to the regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/market/strategy.ts:15](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/market/strategy.ts#L15)

___

### whiteListProposalIdsFilter

▸ **whiteListProposalIdsFilter**(`whiteListIds`): (`proposal`: [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md)) => `Promise`<`boolean`\>

Proposal filter that only allows offers from a provider whose id is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `whiteListIds` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/market/strategy.ts:19](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/market/strategy.ts#L19)

___

### whiteListProposalNamesFilter

▸ **whiteListProposalNamesFilter**(`whiteListNames`): (`proposal`: [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md)) => `Promise`<`boolean`\>

Proposal filter that only allows offers from a provider whose name is in the array

#### Parameters

| Name | Type |
| :------ | :------ |
| `whiteListNames` | `string`[] |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/market/strategy.ts:23](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/market/strategy.ts#L23)

___

### whiteListProposalRegexpFilter

▸ **whiteListProposalRegexpFilter**(`regexp`): (`proposal`: [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md)) => `Promise`<`boolean`\>

Proposal filter that only allows offers from a provider whose name match to the regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`fn`

▸ (`proposal`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `proposal` | [`ProposalDTO`](../interfaces/market_proposal.ProposalDTO.md) |

##### Returns

`Promise`<`boolean`\>

#### Defined in

[yajsapi/market/strategy.ts:27](https://github.com/golemfactory/yajsapi/blob/87b4066/yajsapi/market/strategy.ts#L27)
