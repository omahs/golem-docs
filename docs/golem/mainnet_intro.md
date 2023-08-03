---
Description: How to move and ensure the safety of your funds when operating on mainnet
---

# Using Golem on Mainnet

!!! Warning
This section is aimed mainly at **requestors** wishing to switch from running simple test tasks on our development subnet (testnet) to launching production payloads utilizing the vast number of providers on the public subnet.

If you're a provider, most likely your node is already configured to run on the mainnet and using the public subnet.

If you are a provider, you need to configure your requestor agent to negotiate Polygon or Ethereum as a payment platform. You can find a JS example [here](../Ncreators/javascript/examples/mainnet.md).

Okay, so while technically we now know how to hand out tasks to providers on paid networks, in the context of running **Golem on the mainnet**, a few important questions remain largely unanswered:

* How do you **get funds to your requestor** so you can use them to pay for the tasks?
* How do you **get funds out of a Golem node** if you don't need them there anymore?
* How to **secure access to the funds** in your Golem wallet if things go haywire?

## ERC-20 vs Layer2

The most important distinction in basically every piece of payment-related activity, both when you consider transactions between the network's nodes but also when talking about getting funds in and out of Golem is whether you're using the regular ERC-20 token directly on the Ethereum blockchain or whether you're using Polygon.

While direct, on-chain transactions using ERC-20-based tokens have long become the daily bread for the Ethereum mainnet and constitute a significant part of more than a million transactions passing through the chain each day, the ETH's price and the average gas prices make it almost completely useless as a means of exchange in Golem where the values paid will usually be orders of magnitude smaller than the transaction fees.

Of course, if you're willing to accept that disproportion, you may continue to use the Ethereum mainnet payments but for the majority of Golem node users, **Polygon** will be the main platform both when paying for tasks and receiving payments for their execution.

For more information regarding Layer 2 and Polygon, please refer to our introduction to [Layer 2 payments](payment-layer-2.md):

Next steps:

[Getting funds to your requestor](missing-link-getting-funds.md)