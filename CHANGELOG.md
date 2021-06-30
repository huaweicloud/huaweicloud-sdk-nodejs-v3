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
