---
description: The provider actor in the Golem
---

# Provider architecture

[gap here]

The provider logic is implemented as a **provider agent** which is a piece of code that runs on the provider's machine and communicates via REST with the Golem daemon.

The provider can make its resources available to the requestors with the help of many types of **execution units** \(exe-unit for short\). Currently, Golem supports:

* VM exe unit \(or VM runtime\) that runs Docker images and allows for an interaction with the running container,
* and WASM exe unit \(or WASM runtime\) that runs WASM code

_Please note the "ALT" frames in the diagram above: the provider uses only one exe unit at the same time out of the two available._

You can learn more about Golem providers here:

{% page-ref page="provider.md" %}

{% page-ref page="../provider-tutorials/provider-tutorial.md" %}
