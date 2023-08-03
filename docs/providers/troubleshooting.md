

 ---
Description: Guides to help you troubleshoot a faulty provider.
---

# Provider Troubleshooting

## Invalid VM

In case the `golemsp status` command returns a status other than `valid`:

a\) If: `the user has no access to /dev/kvm` run

```text
curl -o setup-kvm.sh https://join.golem.network/setup-kvm.sh && chmod +x ./setup-kvm.sh && ./setup-kvm.sh
```

Afterwards, log out and log in again into your OS and then, rerun `golemsp run`

b\) If: `running inside Docker without access to /dev/kvm` run

```text
docker run --privileged
```

**or** mount the `/dev/kvm` device to the Docker container.

  
c\) If: `unsupported virtualization type: XEN` We do not support **XEN hypervisor**

* In any other case with the virtualization we recommend the:

`sudo apt install cpu-checker && sudo kvm-ok` command and follow the steps as given in the terminal interface.

