---
Description: Your Golem wallet and Yagna setup for Mainnet payments.
---



!!! Prerequisites
Yagna daemon is up and running

# Your Golem wallet

Golem's wallet is automatically initialized for you the first time you start your `yagna` daemon and thus, an address associated with it is also generated automatically.

To have any kind of funds transferred to your Golem's wallet, you'll need its address. You may obtain it using the `id` command:

```bash
yagna id show
```

The value described as `nodeId` in the output is the Ethereum address of your Golem node and it's also the address of its wallet. Note it down so you can use it to supply your node with funds.

## Sending funds to your account

### Goerli testnet

You can top up your wallet with test GLMs by running:

```bach
yagna payment fund
```

Golem will transfer test tokens from our custom faucet (a service that transfers test tokens to an address that asks for them).
Note, you also need to enable your accounts' sender mode, which is done using `yagna payment init`. 


### ERC-20 / Ethereum mainnet

To be able to pay the providers and run tasks on the mainnet (be it Ethereum or Polygon), you'll first need to supply your address with some actual GLM tokens, plus some ETH/MATIC to pay for all the gas fees. Just use your regular wallet to send some GLM and ETH/MATIC tokens to the node's address.

You'll get the instructions plus your mainnet address if you run:

=== "Polygon"
    ```bash
    yagna payment fund --network=polygon --driver=erc20
    ```

=== "Ethereum mainnet"
    ```bash
    yagna payment fund --network=mainnet --driver=erc20
    ```

## Enable the mainnet account

In the current version of the requestor's set-up, the daemon is configured to use the Goerli testnet by default. Also, all accounts are initialized in the receiver mode by default so you need to enable them as a sender (that's the reason we're adding the `--sender` flag below).

To enable the daemon to use the mainnet, you'll need to instruct it to use a command appropriate to your desired mainnet payment platform.
=== "Polygon"
    ```bash
    yagna payment init --sender --network=polygon --driver=erc20
    ```
=== "Ethereum mainnet"
    ```bash
    yagna payment init --sender --network=mainnet --driver=erc20
    ```


!!! Warning
Again, unless you have good reasons not to, we recommend using Polygon for the lowest transaction fees.

!!! Info
The initialization must be performed after every restart of the `yagna` daemon.

## Checking the status of your accounts

Depending on whether you're mainly running a provider node or a requestor one, your default network (blockchain) may be different.

Because of that, when you run `yagna payment status` to verify the state of your payment account and the amount of GLM tokens you have at your disposal, you may need to add the specific `network` and `driver` parameters to point to the network/driver combination that you're interested in.

In the context of running Golem on mainnet, here are the commands for each of the supported mainnet platforms:

=== "Polygon"
    ```bash
    yagna payment status --sender --network=polygon --driver=erc20
    ```

=== "Ethereum mainnet"
    ```bash
    yagna payment status --sender --network=mainnet --driver=erc20
    ```

## Getting your funds out of the Golem node

### Polygon

If you'd like to convert your GLM tokens on Polygon back to regular ERC-20 GLM tokens on the Ethereum blockchain, you need to exit the Polygon.

There are two ways you may perform this operation. In the first case, you may exit from Polygon to the same address. As a result, your GLM tokens will once more become regular ERC-20 tokens and will stay within the same wallet they were in. To do that, just issue the following command:

```bash
yagna payment exit --network=mainnet
```

The alternative option is to provide an address to which the exit should be performed. That way, instead of sending the tokens to the address the request was signed by, Polygon will send them to the address you have provided. This is especially useful if you no longer need to use the GLM tokens within the Golem network and would rather have them back on your regular cryptocurrency wallet which may be completely independent of Golem. The command you need is:

```bash
yagna payment exit --to-address=YOUR-ETHEREUM-ADDRESS --network=mainnet
```

!!! Warning
Be careful though, as Golem does not perform any validation of the supplied address.


### ERC-20

It is easiest to access your ERC-20 tokens by using the functionality described below to export your wallet (in Ethereum wallet v3 format) and then import it into MetaMask. Once you import your private key to MetaMask you'll be able to withdraw your ERC-20 tokens.