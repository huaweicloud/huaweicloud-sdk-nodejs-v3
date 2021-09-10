# 3.0.14-beta 2021-09-10

### HuaweiCloud SDK Core

- _Features_
    - Support Region Management
- _Bug Fix_
    - None
- _Change_
    - None

### HuaweiCloud SDK CCE
- _Features_
  - Support the interfaces `AddNode` and `ResetNode`.
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK EVS
- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Set the request parameter `size` of the interface `CreateVolume` to `required`.


# 3.0.13-beta 2021-08-25

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the following response parameters to the interface `ListServerInterfaces`:
    - `delete_on_termination`
    - `driver_mode`
    - `min_rate`
    - `multiqueue_num`
    - `pci_address`
  - Add the response parameters `cpu_options` and `hypervisor` to the interface `ListServersDetails`.

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request and response parameter `public_border_group` to the interface `BatchCreateSharedBandwidths`.
  - Add the response parameter `public_border_group` to the interface `AddPublicipsIntoSharedBandwidth`.

# 3.0.12-beta 2021-08-10

### HuaweiCloud SDK EIP
- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the name of the response parameter of the interfaces `ListBandwidths` and `ShowPublicip`: `publicip_border_group` -> `public_border_group`

### HuaweiCloud SDK EVS
- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `server_id` to the interface `ListVolumes`.

### HuaweiCloud SDK IAM
- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the response parameter `order_id` from the interface `CreateDeployment`.

### HuaweiCloud SDK IMS
- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the request parameter `value` of the interface `UpdateImage` as a required parameter.

### HuaweiCloud SDK VPC
- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `enable_dhcp` to the interface `NeutronListSubnets`.
  - Add the response parameter `security_groups_links` to the interface `NeutronListSecurityGroups`.

# 3.0.11-beta 2021-7-30

### HuaweiCloud SDK IMS

- _Features_
    - None
- _Bug Fix_
    - [Issue 40](https://github.com/huaweicloud/huaweicloud-sdk-java-v3/issues/40): Fix the issue that the type of the response parameter `__lazyloading` is incorrectly defined.
- _Change_
    - None

# 3.0.10-beta 2021-07-09

### HuaweiCloud SDK Core
- _feature_
  - None
- _Bug Fix_
  - The response level is incorrect.
- _Change_
  - Optimize exception information.
  
### HuaweiCloud SDK CCE

- _Features_
  - Support the interfaces `RemoveNode`,`MigrateNode`.
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `tobedeleted` to the interface `DeleteCluster`.

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `publicip_border_group` to the interfaces `CreateSharedBandwidth`,`ListBandwidths`.

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `__root_origin`,`checksum`,`size` to the interfaces `GlanceCreateImageMetadata`.
  - Remove the request parameters `deleted`, `deleted_at` of the interface `GlanceAddImageMember`, and add the following request parameters:
    - `__lazyloading`
    - `__os_feature_list`
    - `__root_origin`
    - `__sequence_num`
    - `__support_agent_list`
    - `__system__cmkid`
    - `active_at`
    - `hw_vif_multiqueue_enabled`
    - `max_ram`
    - `__image_location`
    - `__is_config_init`
    - `__account_code`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `edge_node_ids`, `last_update_time` to the interface `ListRules`.

# 3.0.9-beta 2021-06-29

### HuaweiCloud SDK Core
- _feature_
  - Support multipart/form-data
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK ECS

- _Features_
    - None
- _Bug Fix_
    - Solve the issue of abnormal parsing result when using interface `NovaShowKeypair` to obtain the secret key.
- _Change_
    - None

### HuaweiCloud SDK CCE

- _Features_
    - None
- _Bug Fix_
    - [Issue 20](https://github.com/huaweicloud/huaweicloud-sdk-go-v3/issues/20): Fix the issue that the type of `extendParam`
      is defined incorrectly.
    - [Issue 22](https://github.com/huaweicloud/huaweicloud-sdk-go-v3/issues/22): Modify the optional value of response parameter `status` of interface `ListAddonInstances`.
- _Change_
    - Add the request parameter `tobedeleted` to the interface `DeleteCluster`.
    - Add a request parameter `storage` to interfaces `CreateNodePool`,`ShowNodePool`,`UpdateNodePool`,`DeleteNodePool`.

### HuaweiCloud SDK IoTDA

- _Features_
  - Support more interfaces:
      - `UploadBatchTaskFile`
      - `ListComplexQueryDevice`
  - Remove interfaces:
        - `ListSubscriptions`
        - `CreateSubscription`
        - `UpdateSubscription`
        - `ShowSubscription`
        - `DeleteSubscription`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IAM

- _Features_
    - None
- _Bug Fix_
    - None
- _Change_
    - Add the parameter `access_mode` to interface `CreateUsers`.
    - Change the parameter `authentication_code` of interface `DeleteBindingDevice` from required to optional.
    - Add optional values to request parameter `type` of the interface `ShowDomainQuota`:
        - `assigment_group_mp`
        - `assigment_agency_mp`
        - `assigment_group_ep`
        - `assigment_user_ep`
    - Add request parameters`permission_type`,`display_name`,`catalog`,`type` of interface `KeystoneListPermissions`.

# 3.0.8-beta 2021-04-15

### HuaweiCloud SDK Core

- _Features_
  - None
- _Bug Fix_
  - Optimize the log.
  - Upgrade the `axios` version to solve security problem.
- _Change_
  - None

### HuaweiCloud SDK ECS

- _Features_
  - Support `Elastic Cloud Server` service.
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CCE

- _Features_
  - Support `Cloud Container Engine` service.
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK EVS

- _Features_
  - Support `Elastic Volume Service`.
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK VPC

- _Features_
  - Support `Virtual Private Cloud` service.
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK EIP

- _Features_
  - Support `Elastic IP` service.
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.7-beta 2021-03-15

### HuaweiCloud SDK Core

- _Features_
    - None
- _Bug Fix_
    - Fix the problem of path loss when sending requests.
- _Change_
    - None

### HuaweiCloud SDK IAM

- _Features_
    - Support more interfaces:
        - `KeystoneShowIdentityProvider`
        - `KeystoneCreateIdentityProvider`
        - `KeystoneUpdateIdentityProvider`
        - `KeystoneDeleteIdentityProvider`
        - `CreateTokenWithIdToken`
- _Bug Fix_
    - None
- _Change_
    - Do not support interface `CreateUnscopeTokenByIdpInitiated` anymore.

### HuaweiCloud SDK IoTDA

- _Features_
    - Support `IoT Device Access` service.
- _Bug Fix_
    - None
- _Change_
    - None

# 3.0.6-beta 2021-02-27

### HuaweiCloud SDK Core

- _Features_
    - None
- _Bug Fix_
    - None
- _Change_
    - Optimize the description of `README` and the format of `CHANGELOG`.

### HuaweiCloud SDK IAM

- _Features_
    - None
- _Bug Fix_
    - Correct property from `pwd_stength` to `pwd_strength` in class `KeystoneUserResult`.
- _Change_
    - None

# 3.0.5-beta 2021-01-30

### HuaweiCloud SDK IAM

- _Features_
    - Support Identity and Access Management.
- _Bug Fix_
    - None
- _Change_
    - None

# 3.0.4-beta 2020-12-07

# 3.0.3-beta 2020-10-31

### HuaweiCloud SDK DevStar

- _Features_
    - Add the README.MD file.
- _Bug Fix_
    - None
- _Change_
    - None

# 3.0.2-beta 2020-10-20

### HuaweiCloud SDK DevStar

- _Features_
    - Add main entrance of module.
- _Bug Fix_
    - None
- _Change_
    - None

# 3.0.1-beta 2020-10-16

### First Release

- _Supported Services_
    - DevStar
