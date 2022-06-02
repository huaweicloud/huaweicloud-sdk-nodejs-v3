# 3.0.43-rc 2022-06-02

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `words_block_count`, `words_block_list` to the interface `RecognizeHealthCode`
  - Modify the type `float` -> `object` of the response parameter `confidence` of the interface `RecognizePcrTestRecord`

# 3.0.42-rc 2022-05-26

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameters `volume_type`, `hw:passthrough` to the interface `AttachServerVolume`

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `ocr_text`, `error_code`, `error_msg` to the interface `RunCheckResult`
  - Changes of the interface `RunImageBatchModeration`:
    - Add the request parameters `moderation_rule`, `ad_categories`, `show_ocr_text`
    - Add the response parameters `ocr_text`, `error_code`, `error_msg`
  - Add the request parameters `moderation_rule`, `ad_categories`, `show_ocr_text` to the interface `RunTaskSumbit`

# 3.0.41-rc 2022-05-19

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `dry_run` to the interface `ResizeServer`
  - Add the request parameter `dry_run` to the interface `ResizePostPaidServer`
  - Add the request parameter `dry_run` to the interface `AttachServerVolume`

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `M3U8` to the request parameter `video_type` to the interface `UploadMetaDataByUrl`
  - Add the response parameter `sign_url` to the interface `PublishAssets`
  - Add the response parameter `sign_url` to the interface `UnpublishAssets`
  - Add the response parameter `sign_url` to the interface `ShowAssetMeta`
  - Add the response parameter `sign_url` to the interface `ShowAssetDetail`
  - Add the response parameter `sign_url` to the interface `ShowTakeOverTaskDetails`
  - Add the response parameter `sign_url` to the interface `ShowTakeOverAssetDetails`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `neutron:VIP_PORT`, Remove the enum values `network:VIP_PORT` from the response parameter `device_owner` to the interface `ListPorts`
  - Add the enum values `neutron:VIP_PORT`, Remove the enum values `network:VIP_PORT` from the response parameter `device_owner` to the interface `UpdatePort`
  - Add the enum values `neutron:VIP_PORT`, Remove the enum values `network:VIP_PORT` from the response parameter `device_owner` to the interface `ShowPort`

# 3.0.40-rc 2022-05-12

### HuaweiCloud SDK FRS

- _Features_
  - Support the following interfaces:
    - `DetectLiveByUrlIntl`
    - `DetectLiveByFileIntl`
    - `DetectLiveByBase64Intl`
    - `DetectFaceByFileIntl`
    - `DetectFaceByUrlIntl`
    - `DetectFaceByBase64Intl`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IAM

- _Features_
  - Support the interface `ShowDomainRoleAssignments`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `RunImageModeration`:
    - Add the request parameter `show_ocr_text`
    - Add the response parameter `ocr_text`

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `RecognizeHealthCode`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.39-rc 2022-05-05

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type `byte` -> `string` of the request parameter `image` of the interface `RunImageModeration`

# 3.0.38-rc 2022-04-28

### HuaweiCloud SDK DevStar

- _Features_
  - Support the interface `ConfirmDeploymentJob`
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `cci` to the interface `CreateDeploymentJobs`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the interfaces `CancelAsyncInvocation`, `StartSyncWorkflowExecution`
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListFunctionStatistics`:
    - Modify the type `int32` -> `int64` of the response parameter `timestamp`
    - Modify the type `int32` -> `double` of the response parameter `value`
  - Changes of the interface `ListStatistics`:
    - Modify the type `int32` -> `int64` of the response parameter `timestamp`
    - Modify the type `int32` -> `double` of the response parameter `value`
  - Add the response parameter `enable_async_status_log` to the interface `ListFunctionAsyncInvokeConfig`
  - Add the response parameter `enable_async_status_log` to the interface `ShowFunctionAsyncInvokeConfig`
  - Changes of the interface `UpdateFunctionAsyncInvokeConfig`:
    - Add the request parameter `enable_async_status_log`
    - Add the response parameter `enable_async_status_log`
  - Changes of the interface `CreateWorkflow`:
    - Add the request parameters `mode`, `express_config`
    - Add the enum values `End` to the request parameter `type`
  - Changes of the interface `ShowWorkFlow`:
    - Add the response parameters `mode`, `express_config`
    - Add the enum values `End` to the response parameter `type`
  - Changes of the interface `UpdateWorkFlow`:
    - Add the request parameters `mode`, `express_config`
    - Add the enum values `End` to the request parameter `type`
  - Changes of the interface `ShowTenantMetric`:
    - Add the request parameters `start_time`, `end_time`
    - Modify the type `int32` -> `int64` of the response parameter `timestamp`
    - Modify the type `int32` -> `double` of the response parameter `value`
  - Changes of the interface `ShowWorkFlowMetric`:
    - Add the request parameters `start_time`, `end_time`
    - Modify the type `int32` -> `int64` of the response parameter `timestamp`
    - Modify the type `int32` -> `double` of the response parameter `value`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - Fix the problem that the response body's type of the interface `RecognizeMyanmarDriverLicense` is incorrect.
- _Change_
  - None

# 3.0.37-rc 2022-04-14

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `ip_eq` to the interface `ListServersDetails`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `encrypted_user_data` to the interface `UpdateFunctionConfig`

### HuaweiCloud SDK Moderation

- _Features_
  - Support the interface `RunModerationAudio`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.36-rc 2022-04-07

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the request parameters `kind`, `apiVersion`, `status` from the interface `UpdateNodePool`

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `RecognizeWaybillElectronic`
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `print_code` to the interface `RecognizeVatInvoice`
  - Changes of the interface `RecognizeVehicleLicense`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`
  - Changes of the interface `RecognizeTaxiInvoice`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`
  - Add the response parameters `type`, `accumulated_scores`, `status`, `generation_date`, `current_time` to the interface `RecognizeDriverLicense`
  - Changes of the interface `RecognizeTrainTicket`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`
  - Changes of the interface `RecognizeBankcard`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`

# 3.0.35-rc 2022-03-25

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the following interfaces:
    - `ListWorkflows`
    - `CreateWorkflow`
    - `BatchDeleteWorkflows`
    - `ListWorkflowExecutions`
    - `StartWorkflowExecution`
    - `ShowWorkflowExecution`
    - `ShowWorkFlow`
    - `UpdateWorkFlow`
    - `ShowTenantMetric`
    - `ShowWorkFlowMetric`
    - `RetryWorkFlow`
    - `StopWorkFlow`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IMS

- _Features_
  - Support the interfaces `ListVersions`, `ShowVersion`
- _Bug Fix_
  - None
- _Change_
  - The request parameter `os_type` changed to not required of the interface `CreateDataImage`

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the interface `ResetFingerprint`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `RecognizeVatInvoice`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`
  - Changes of the interface `RecognizeIdCard`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`
  - Changes of the interface `RecognizeDriverLicense`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`

### HuaweiCloud SDK SWR

- _Features_
  - Support `Software Repository for Container` service.
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.34-rc 2022-03-10

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - The request parameter `cluster_id` changed to not required of the interface `DeleteAddonInstance`

# 3.0.33-rc 2022-03-07

### HuaweiCloud SDK CCE

- _Features_
  - Support the interfaces `UpdateClusterEip`, `ShowClusterEndpoints`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type of the request parameter `ip_version` of the interface `CreatePrePaidPublicip`: `integer` -> `enum`

# 3.0.32-rc 2022-02-25

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime` to the interface `ListFunctions`
  - Changes of the interface `CreateFunction`:
    - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the request parameter `runtime`
    - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime`
  - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime` to the interface `ShowFunctionCode`
  - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime` to the interface `UpdateFunctionCode`
  - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime` to the interface `ShowFunctionConfig`
  - Changes of the interface `UpdateFunctionConfig`:
    - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the request parameter `runtime`
    - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime`
  - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime` to the interface `ListFunctionVersions`
  - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime` to the interface `CreateFunctionVersion`
  - Add the enum values `Java11`, `Node.js14.18`, `Python3.9` to the request parameter `runtime` to the interface `CreateDependency`
  - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `PHP 7.3` from the request parameter `runtime` to the interface `UpdateDependency`
  - Add the enum values `Java8`, `Java11`, `Node.js6.10`, `Node.js8.10`, `Node.js10.16`, `Node.js12.13`, `Node.js14.18`, `Python2.7`, `Python3.6`, `Python3.9`, `Go1.8`, `Go1.x`, `PHP7.3`, Remove the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3` from the response parameter `runtime` to the interface `ImportFunction`

### HuaweiCloud SDK VOD

- _Features_
  - Support the interface `ListDomainLogs`
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `delete_type` to the interface `DeleteAssets`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `subnetpool_id` to the interface `NeutronListSubnets`

# 3.0.31-rc 2022-02-10

### HuaweiCloud SDK CCE

- _Features_
  - Support the interface `ShowVersion`
- _Bug Fix_
  - None
- _Change_
  - Remove the response parameters `kind`, `apiVersion`, `metadata`, `spec`, `status` from the interface `CreateAddonInstance`
  - Add the response parameters `isStatic`, `privateIPv6IP` to the interface `ListNodes`
  - Add the request parameter `isStatic` to the interface `CreateNode`
  - Add the response parameters `isStatic`, `privateIPv6IP` to the interface `DeleteNode`
  - Add the response parameters `isStatic`, `privateIPv6IP` to the interface `ShowNode`
  - Add the response parameters `isStatic`, `privateIPv6IP` to the interface `UpdateNode`
  - Changes of the interface `RemoveNode`:
    - The request parameter `uid` changed to required
    - The response parameter `uid` changed to required
  - Changes of the interface `MigrateNode`:
    - The request parameter `uid` changed to required
    - The response parameter `uid` changed to required
  - Add the response parameter `isStatic` to the interface `ListNodePools`
  - Add the request parameter `isStatic` to the interface `CreateNodePool`
  - Add the response parameter `isStatic` to the interface `DeleteNodePool`
  - Add the response parameter `isStatic` to the interface `ShowNodePool`
  - Changes of the interface `UpdateNodePool`:
    - Add the request parameter `isStatic`
    - Add the response parameter `isStatic`

### HuaweiCloud SDK DevStar

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ShowApplicationDependentResources`:
    - Add the request parameters `X-Auth-Token`, `limit`, `offset`
    - Add the response parameter `count`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `CreateFunction`:
    - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the request parameter `runtime`
    - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime`
  - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime` to the interface `ListFunctions`
  - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime` to the interface `UpdateFunctionCode`
  - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime` to the interface `ShowFunctionCode`
  - Changes of the interface `UpdateFunctionConfig`:
    - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the request parameter `runtime`
    - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime`
  - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime` to the interface `ShowFunctionConfig`
  - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime` to the interface `CreateFunctionVersion`
  - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime` to the interface `ListFunctionVersions`
  - Add the enum values `Go1.x` to the request parameter `runtime` to the interface `CreateDependency`
  - Add the enum values `Go1.x` to the request parameter `runtime` to the interface `UpdateDependency`
  - Add the enum values `Java 8`, `Node.js 6.10`, `Node.js 8.10`, `Node.js 10.16`, `Node.js 12.13`, `Python 2.7`, `Python 3.6`, `Go 1.8`, `Go 1.x`, `PHP 7.3`, Remove the enum values `Python2.7`, `Python3.6`, `Go1.8`, `Java8`, `Node.js6.10`, `Node.js8.10`, `Custom`, `PHP7.3` from the response parameter `runtime` to the interface `ImportFunction`

# 3.0.30-rc 2022-01-25

### HuaweiCloud SDK DevStar

- _Features_
  - Support the interfaces `ShowRepositoryByCloudIde`, `ListTemplates`
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
  - Add the response parameter `session_user_id` to the interface `CreateLoginToken`

# 3.0.29-beta 2022-01-17

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - Fix the problem that the request body structure of the interface `CreateNodePool` is incorrect
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the interface `ListFunctionAsyncInvocations`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.28-beta 2022-01-10

### HuaweiCloud SDK CCE

- _Features_
  - Support the interface `ShowQuotas`
- _Bug Fix_
  - None
- _Change_
  - Add the request parameters `customSan`, `offloadCluster`, `cidrs`, `flavor`, `faultDomain` to the interface `CreateCluster`
  - Add the response parameters `customSan`, `offloadCluster`, `cidrs`, `flavor`, `faultDomain` to the interface `ListClusters`
  - Changes of the interface `UpdateCluster`:
    - Add the request parameters `customSan`, `containerNetwork`
    - Add the response parameters `customSan`, `offloadCluster`, `cidrs`, `flavor`, `faultDomain`
  - Add the response parameters `customSan`, `offloadCluster`, `cidrs`, `flavor`, `faultDomain` to the interface `ShowCluster`
  - Add the response parameters `customSan`, `offloadCluster`, `cidrs`, `flavor`, `faultDomain` to the interface `DeleteCluster`
  - Add the request parameters `faultDomain`, `offloadNode`, `offloadNode` to the interface `CreateNode`
  - Add the response parameters `faultDomain`, `offloadNode`, `offloadNode` to the interface `ListNodes`
  - Add the response parameters `faultDomain`, `offloadNode`, `offloadNode` to the interface `UpdateNode`
  - Add the response parameters `faultDomain`, `offloadNode`, `offloadNode` to the interface `ShowNode`
  - Add the response parameters `faultDomain`, `offloadNode`, `offloadNode` to the interface `DeleteNode`
  - Add the request parameters `podSecurityGroups`, `faultDomain`, `offloadNode`, `offloadNode` to the interface `CreateNodePool`
  - Add the response parameters `podSecurityGroups`, `faultDomain`, `offloadNode`, `offloadNode` to the interface `ListNodePools`
  - Changes of the interface `UpdateNodePool`:
    - Add the request parameters `podSecurityGroups`, `faultDomain`, `offloadNode`, `offloadNode`
    - Add the response parameters `podSecurityGroups`, `faultDomain`, `offloadNode`, `offloadNode`
  - Add the response parameters `podSecurityGroups`, `faultDomain`, `offloadNode`, `offloadNode` to the interface `ShowNodePool`
  - Add the response parameters `podSecurityGroups`, `faultDomain`, `offloadNode`, `offloadNode` to the interface `DeleteNodePool`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `delete_on_termination` to the interface `CreateServers`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `UpdateFunctionConfig`:
    - Add the request parameter `is_stateful_function`
    - Add the response parameter `is_stateful_function`

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - The response parameter `active_at` changed to not required of the interface `GlanceListImages`
  - The response parameter `active_at` changed to not required of the interface `GlanceShowImage`
  - The response parameter `active_at` changed to not required of the interface `GlanceUpdateImage`

# 3.0.27-beta 2021-12-25

### HuaweiCloud SDK DevStar

- _Features_
  - Support the following interfaces:
    - `ShowApplicationV3`
    - `UpdateApplication`
    - `ShowApplicationDependentResources`
    - `DeleteApplicationV4`
    - `ShowApplicationResDeleteStatus`
    - `ListApplicationsV6`
    - `ShowDeploymentJobs`
    - `CreateDeploymentJobs`
    - `ShowPipelineLastStatusV2`
    - `ListPipelineTemplates`
    - `StartPipeline`
    - `ListProjectsV4`
    - `ShowRepositoryStatisticalDataV2`
    - `CheckRepositoryDuplicateName`
    - `ShowApplicationReleaseRepositories`
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `dependents` to the interface `ShowTemplateV3`
  - Add the response parameters `dependents`, `dependent_services` to the interface `ListTemplatesV2`
  - Add the response parameter `show_type` to the interface `ShowJobDetail`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the response parameter `updated_at` from the interface `NovaListServerActions`

# 3.0.26-beta 2021-12-17

### HuaweiCloud SDK CCE

- _Features_
  - Support the interface `ShowVersion`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK OCR

- _Features_
  - Support the following interfaces:
    - `RecognizeThailandIdcard`
    - `RecognizeMyanmarIdcard`
    - `RecognizeMyanmarDriverLicense`
    - `RecognizeChileIdCard`
    - `RecognizeThailandLicensePlate`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.25-beta 2021-12-10

### HuaweiCloud SDK FRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the response parameters `landmark`, `gender`, `yaw_angle`, `roll_angle`, `pitch_angle`, `headpose`, `smile`, `skin`, `ethnic` from the interface `DetectFaceByFile`
  - Remove the response parameters `landmark`, `gender`, `yaw_angle`, `roll_angle`, `pitch_angle`, `headpose`, `smile`, `skin`, `ethnic` from the interface `DetectFaceByUrl`
  - Remove the response parameters `landmark`, `gender`, `yaw_angle`, `roll_angle`, `pitch_angle`, `headpose`, `smile`, `skin`, `ethnic` from the interface `DetectFaceByBase64`

# 3.0.24-beta 2021-11-29

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `cidrs` to the interface `ShowCluster`.

### HuaweiCloud SDK EVS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the interface `CinderExportToImage`.

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `os:scheduler_hints` to the interfaces `NovaShowServer` and `NovaListServersDetails`.

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `ListVersionAliases` to the interface `ListVersionAliases`.
  - Update the request parameter `name` to required of the interfaces  `CreateDependency` and `UpdateDependency`.
  - Update the request parameters `name` and `content` to required of the interface `CreateEvent`.

# 3.0.23-beta 2021-11-25

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `platformVersion` to the interface `ShowCluster`.
  - Add the enumeration values `RollingBack` and `RollbackFailed` to the request parameter `status` of the interface `ListClusters`.

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request and response parameter `alias` to the interfaces `CreatePrePaidPublicip` and `CreatePublicip`.
  - Add the response parameter `alias` to the interfaces `ShowPublicip` and `UpdatePublicip`.

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the response parameter `extracted_data` of the interface `RecognizeHandwriting`.

# 3.0.22-beta 2021-11-12

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `customSan` to the interface `UpdateNode`.

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `confidence` to the interface `RecognizeGeneralTable`.

### HuaweiCloud SDK VPC

- _Features_
  - Support interfaces(V3): `AddVpcExtendCidr`,`RemoveVpcExtendCidr`,`ListVpcs`,`ShowVpc`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.21-beta 2021-10-25

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `bandwidth_type` to the interface `CreateSharedBandwidth`.

### HuaweiCloud SDK FRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `single` to the interfaces `AddFacesByFile`, `AddFacesByBase64` and `AddFacesByUrl`.

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `current_task`, `image_name` and `process_percent` to the interface `ShowJob`.

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `status` to the interface `ListDevices`.
  - Add the request parameter `file_path` to the interface `CreateRuleAction`.

### HuaweiCloud SDK OCR

- _Features_
  - Support the interfaces `RecognizeInsurancePolicy`, `RecognizeFinancialStatement` and `RecognizeQualificationCertificate`.
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.20-beta 2021-10-19

### HuaweiCloud SDK EIP

- _Features_
  - Support the following interfaces:
    - `ListCommonPools`
    - `ListPublicBorderGroups`
    - `ListPublicipPool`
    - `ShowPublicipPool`
    - `ListShareBandwidthTypes`
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `allow_share_bandwidth_type_any` to the interface `ListPublicips`.
  - Modify the type of the request parameter `limit` of the interface `NeutronListFloatingIps`.
  - Modify the name of the request body of the interface `NeutronUpdateFloatingIp`: `floatingip` -> `NeutronUpdateFloatingIpRequestBody`
  - Add the response parameter `allow_share_bandwidth_types` to the interface `ShowPublicip`.

# 3.0.19-beta 2021-10-11

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Set the request parameter `reverse_binding` to `optional` of the interface `DisassociateServerVirtualIp`.

### HuaweiCloud SDK FRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the optional value to `2,4,6,7,8,11,12,13,21` of the request parameter `attributes` of the interfaces `DetectFaceByFile`,`DetectFaceByBase64` and `DetectFaceByUrl`.

# 3.0.18-beta 2021-09-29

### HuaweiCloud SDK ECS

- _Features_
  - Support the following interfaces:
    - `ListServerTags`
    - `BatchAttachSharableVolumes`
    - `ShowServerAutoRecovery`
    - `BatchResetServersPassword`
    - `ReinstallServerWithoutCloudInit`
    - `ChangeServerOsWithoutCloudInit`
    - `BatchUpdateServersName`
    - `ShowServerPassword`
    - `AssociateServerVirtualIp`
    - `MigrateServer`
    - `ShowServerBlockDevice`
    - `DisassociateServerVirtualIp`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.17-beta 2021-09-26

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the service `FunctionGraph`.
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.16-beta 2021-09-24

### HuaweiCloud SDK CCE

- _Features_
  - Support the interface `ShowQuotas`.
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IVS

- _Features_
  - Support the service `Identity Verification Solution`.
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.15-beta 2021-09-16

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `platformVersion` to the interface `ShowCluster`.

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the optional request parameter `__support_amd` to the interface `CreateDataImage`.
  - Add the response parameter `__support_amd` to the interface `ListImages`.

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `RecognizeInvoiceVerification`.
- _Bug Fix_
  - None
- _Change_
  - None

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
