# 3.0.39-rc 2022-05-05

### HuaweiCloud SDK Moderation

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`RunImageModeration`请求参数`image`类型调整 `byte` -> `string`

# 3.0.38-rc 2022-04-28

### HuaweiCloud SDK DevStar

- _新增特性_
  - 支持接口`ConfirmDeploymentJob`
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateDeploymentJobs`新增请求参数 `cci`

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 支持接口`CancelAsyncInvocation`、`StartSyncWorkflowExecution`
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListFunctionStatistics`:
    - 响应参数`timestamp`类型调整 `int32` -> `int64`
    - 响应参数`value`类型调整 `int32` -> `double`
  - 接口`ListStatistics`:
    - 响应参数`timestamp`类型调整 `int32` -> `int64`
    - 响应参数`value`类型调整 `int32` -> `double`
  - 接口`ListFunctionAsyncInvokeConfig`新增响应参数 `enable_async_status_log`
  - 接口`ShowFunctionAsyncInvokeConfig`新增响应参数 `enable_async_status_log`
  - 接口`UpdateFunctionAsyncInvokeConfig`:
    - 新增请求参数 `enable_async_status_log`
    - 新增响应参数 `enable_async_status_log`
  - 接口`CreateWorkflow`:
    - 新增请求参数 `mode`、`express_config`
    - 请求参数`type`新增枚举值`End`
  - 接口`ShowWorkFlow`:
    - 新增响应参数 `mode`、`express_config`
    - 响应参数`type`新增枚举值`End`
  - 接口`UpdateWorkFlow`:
    - 新增请求参数 `mode`、`express_config`
    - 请求参数`type`新增枚举值`End`
  - 接口`ShowTenantMetric`:
    - 新增请求参数 `start_time`、`end_time`
    - 响应参数`timestamp`类型调整 `int32` -> `int64`
    - 响应参数`value`类型调整 `int32` -> `double`
  - 接口`ShowWorkFlowMetric`:
    - 新增请求参数 `start_time`、`end_time`
    - 响应参数`timestamp`类型调整 `int32` -> `int64`
    - 响应参数`value`类型调整 `int32` -> `double`

### HuaweiCloud SDK OCR

- _新增特性_
  - 无
- _解决问题_
  - 修复接口`RecognizeMyanmarDriverLicense`的响应体类型错误的问题
- _特性变更_
  - 无

# 3.0.37-rc 2022-04-14

### HuaweiCloud SDK ECS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListServersDetails`新增请求参数 `ip_eq`

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`UpdateFunctionConfig`新增请求参数 `encrypted_user_data`

### HuaweiCloud SDK Moderation

- _新增特性_
  - 支持接口`RunModerationAudio`
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.36-rc 2022-04-07

### HuaweiCloud SDK CCE

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`UpdateNodePool`移除请求参数 `kind`、`apiVersion`、`status`

### HuaweiCloud SDK OCR

- _新增特性_
  - 支持接口`RecognizeWaybillElectronic`
- _解决问题_
  - 无
- _特性变更_
  - 接口`RecognizeVatInvoice`新增响应参数 `print_code`
  - 接口`RecognizeVehicleLicense`:
    - 新增请求参数 `return_text_location`
    - 新增响应参数 `text_location`
  - 接口`RecognizeTaxiInvoice`:
    - 新增请求参数 `return_text_location`
    - 新增响应参数 `text_location`
  - 接口`RecognizeDriverLicense`新增响应参数 `type`、`accumulated_scores`、`status`、`generation_date`、`current_time`
  - 接口`RecognizeTrainTicket`:
    - 新增请求参数 `return_text_location`
    - 新增响应参数 `text_location`
  - 接口`RecognizeBankcard`:
    - 新增请求参数 `return_text_location`
    - 新增响应参数 `text_location`

# 3.0.35-rc 2022-03-25

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 支持以下接口：
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
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK IMS

- _新增特性_
  - 支持接口`ListVersions`、`ShowVersion`
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateDataImage`请求参数`os_type`改为非必填

### HuaweiCloud SDK IoTDA

- _新增特性_
  - 支持接口 `ResetFingerprint`
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK OCR

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`RecognizeVatInvoice`:
    - 新增请求参数 `return_text_location`
    - 新增响应参数 `text_location`
  - 接口`RecognizeIdCard`:
    - 新增请求参数 `return_text_location`
    - 新增响应参数 `text_location`
  - 接口`RecognizeDriverLicense`:
    - 新增请求参数 `return_text_location`
    - 新增响应参数 `text_location`

### HuaweiCloud SDK SWR

- _新增特性_
  - 支持容器镜像服务
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.34-rc 2022-03-10

### HuaweiCloud SDK CCE

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`DeleteAddonInstance`请求参数`cluster_id`改为非必填

# 3.0.33-rc 2022-03-07

### HuaweiCloud SDK CCE

- _新增特性_
  - 支持接口`UpdateClusterEip`、`ShowClusterEndpoints`
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK EIP

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreatePrePaidPublicip`的请求参数`ip_version`类型变更： `integer` -> `enum`

# 3.0.32-rc 2022-02-25

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListFunctions`响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
  - 接口`CreateFunction`:
    - 请求参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
    - 响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
  - 接口`ShowFunctionCode`响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
  - 接口`UpdateFunctionCode`响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
  - 接口`ShowFunctionConfig`响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
  - 接口`UpdateFunctionConfig`:
    - 请求参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
    - 响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
  - 接口`ListFunctionVersions`响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
  - 接口`CreateFunctionVersion`响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`
  - 接口`CreateDependency`请求参数`runtime`新增枚举值`Java11`、`Node.js14.18`、`Python3.9`
  - 接口`UpdateDependency`请求参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`PHP 7.3`
  - 接口`ImportFunction`响应参数`runtime`新增枚举值`Java8`、`Java11`、`Node.js6.10`、`Node.js8.10`、`Node.js10.16`、`Node.js12.13`、`Node.js14.18`、`Python2.7`、`Python3.6`、`Python3.9`、`Go1.8`、`Go1.x`、`PHP7.3`, 移除枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`

### HuaweiCloud SDK VOD

- _新增特性_
  - 支持接口`ListDomainLogs`
- _解决问题_
  - 无
- _特性变更_
  - 接口`DeleteAssets`新增请求参数 `delete_type`

### HuaweiCloud SDK VPC

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`NeutronListSubnets`新增响应参数`subnetpool_id`

# 3.0.31-rc 2022-02-10

### HuaweiCloud SDK CCE

- _新增特性_
  - 支持接口`ShowVersion`
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateAddonInstance`移除响应参数 `kind`、`apiVersion`、`metadata`、`spec`、`status`
  - 接口`ListNodes`新增响应参数 `isStatic`、`privateIPv6IP`
  - 接口`CreateNode`新增请求参数 `isStatic`
  - 接口`DeleteNode`新增响应参数 `isStatic`、`privateIPv6IP`
  - 接口`ShowNode`新增响应参数 `isStatic`、`privateIPv6IP`
  - 接口`UpdateNode`新增响应参数 `isStatic`、`privateIPv6IP`
  - 接口`RemoveNode`:
    - 请求参数`uid`改为必填
    - 响应参数`uid`改为必填
  - 接口`MigrateNode`:
    - 请求参数`uid`改为必填
    - 响应参数`uid`改为必填
  - 接口`ListNodePools`新增响应参数 `isStatic`
  - 接口`CreateNodePool`新增请求参数 `isStatic`
  - 接口`DeleteNodePool`新增响应参数 `isStatic`
  - 接口`ShowNodePool`新增响应参数 `isStatic`
  - 接口`UpdateNodePool`:
    - 新增请求参数 `isStatic`
    - 新增响应参数 `isStatic`

### HuaweiCloud SDK DevStar

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ShowApplicationDependentResources`:
    - 新增请求参数 `X-Auth-Token`、`limit`、`offset`
    - 新增响应参数 `count`

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateFunction`:
    - 请求参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
    - 响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
  - 接口`ListFunctions`响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
  - 接口`UpdateFunctionCode`响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
  - 接口`ShowFunctionCode`响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
  - 接口`UpdateFunctionConfig`:
    - 请求参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
    - 响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
  - 接口`ShowFunctionConfig`响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
  - 接口`CreateFunctionVersion`响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
  - 接口`ListFunctionVersions`响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`
  - 接口`CreateDependency`请求参数`runtime`新增枚举值`Go1.x`
  - 接口`UpdateDependency`请求参数`runtime`新增枚举值`Go1.x`
  - 接口`ImportFunction`响应参数`runtime`新增枚举值`Java 8`、`Node.js 6.10`、`Node.js 8.10`、`Node.js 10.16`、`Node.js 12.13`、`Python 2.7`、`Python 3.6`、`Go 1.8`、`Go 1.x`、`PHP 7.3`, 移除枚举值`Python2.7`、`Python3.6`、`Go1.8`、`Java8`、`Node.js6.10`、`Node.js8.10`、`Custom`、`PHP7.3`

# 3.0.30-rc 2022-01-25

### HuaweiCloud SDK DevStar

- _新增特性_
  - 支持接口`ShowRepositoryByCloudIde`、`ListTemplates`
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK IAM

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateLoginToken`新增响应参数`session_user_id`

# 3.0.29-beta 2022-01-17

### HuaweiCloud SDK CCE

- _新增特性_
  - 无
- _解决问题_
  - 修复接口`CreateNodePool`的请求体结构错误的问题
- _特性变更_
  - 无

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 支持接口`ListFunctionAsyncInvocations`
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.28-beta 2022-01-10

### HuaweiCloud SDK CCE

- _新增特性_
  - 支持接口`ShowQuotas`
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateCluster`新增请求参数 `customSan`、`offloadCluster`、`cidrs`、`flavor`、`faultDomain`
  - 接口`ListClusters`新增响应参数 `customSan`、`offloadCluster`、`cidrs`、`flavor`、`faultDomain`
  - 接口`UpdateCluster`:
    - 新增请求参数 `customSan`、`containerNetwork`
    - 新增响应参数 `customSan`、`offloadCluster`、`cidrs`、`flavor`、`faultDomain`
  - 接口`ShowCluster`新增响应参数 `customSan`、`offloadCluster`、`cidrs`、`flavor`、`faultDomain`
  - 接口`DeleteCluster`新增响应参数 `customSan`、`offloadCluster`、`cidrs`、`flavor`、`faultDomain`
  - 接口`CreateNode`新增请求参数 `faultDomain`、`offloadNode`、`offloadNode`
  - 接口`ListNodes`新增响应参数 `faultDomain`、`offloadNode`、`offloadNode`
  - 接口`UpdateNode`新增响应参数 `faultDomain`、`offloadNode`、`offloadNode`
  - 接口`ShowNode`新增响应参数 `faultDomain`、`offloadNode`、`offloadNode`
  - 接口`DeleteNode`新增响应参数 `faultDomain`、`offloadNode`、`offloadNode`
  - 接口`CreateNodePool`新增请求参数 `podSecurityGroups`、`faultDomain`、`offloadNode`、`offloadNode`
  - 接口`ListNodePools`新增响应参数 `podSecurityGroups`、`faultDomain`、`offloadNode`、`offloadNode`
  - 接口`UpdateNodePool`:
    - 新增请求参数 `podSecurityGroups`、`faultDomain`、`offloadNode`、`offloadNode`
    - 新增响应参数 `podSecurityGroups`、`faultDomain`、`offloadNode`、`offloadNode`
  - 接口`ShowNodePool`新增响应参数 `podSecurityGroups`、`faultDomain`、`offloadNode`、`offloadNode`
  - 接口`DeleteNodePool`新增响应参数 `podSecurityGroups`、`faultDomain`、`offloadNode`、`offloadNode`

### HuaweiCloud SDK ECS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateServers`新增请求参数 `delete_on_termination`

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`UpdateFunctionConfig`:
    - 新增请求参数 `is_stateful_function`
    - 新增响应参数 `is_stateful_function`

### HuaweiCloud SDK IMS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`GlanceListImages`响应参数`active_at`改为非必填
  - 接口`GlanceShowImage`响应参数`active_at`改为非必填
  - 接口`GlanceUpdateImage`响应参数`active_at`改为非必填

# 3.0.27-beta 2021-12-25

### HuaweiCloud SDK DevStar

- _新增特性_
  - 支持以下接口：
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
- _解决问题_
  - 无
- _特性变更_
  - 接口`ShowTemplateV3`新增响应参数 `dependents`
  - 接口`ListTemplatesV2`新增响应参数 `dependents`、`dependent_services`
  - 接口`ShowJobDetail`新增响应参数 `show_type`

### HuaweiCloud SDK ECS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`NovaListServerActions`移除响应参数`updated_at`

# 3.0.26-beta 2021-12-17

### HuaweiCloud SDK CCE

- _新增特性_
  - 支持接口`ShowVersion`
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK OCR

- _新增特性_
  - 支持以下接口：
    - `RecognizeThailandIdcard`
    - `RecognizeMyanmarIdcard`
    - `RecognizeMyanmarDriverLicense`
    - `RecognizeChileIdCard`
    - `RecognizeThailandLicensePlate`
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.25-beta 2021-12-10

### HuaweiCloud SDK FRS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`DetectFaceByFile`移除响应参数 `landmark`、`gender`、`yaw_angle`、`roll_angle`、`pitch_angle`、`headpose`、`smile`、`skin`、`ethnic`
  - 接口`DetectFaceByUrl`移除响应参数 `landmark`、`gender`、`yaw_angle`、`roll_angle`、`pitch_angle`、`headpose`、`smile`、`skin`、`ethnic`
  - 接口`DetectFaceByBase64`移除响应参数 `landmark`、`gender`、`yaw_angle`、`roll_angle`、`pitch_angle`、`headpose`、`smile`、`skin`、`ethnic`

# 3.0.24-beta 2021-11-29

### HuaweiCloud SDK CCE

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ShowCluster`新增响应参数`cidrs`

### HuaweiCloud SDK EVS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 移除接口`CinderExportToImage`

### HuaweiCloud SDK ECS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`NovaShowServer`和`NovaListServersDetails`新增响应参数`os:scheduler_hints`

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListVersionAliases`新增响应参数`ListVersionAliases`
  - 接口`CreateDependency`和`UpdateDependency`的请求参数`name`改为必填
  - 接口`CreateEvent`的请求参数`name`和`content`改为必填

# 3.0.23-beta 2021-11-25

### HuaweiCloud SDK CCE

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ShowCluster`新增响应参数`platformVersion`
  - 接口`ListClusters`的请求参数`status`新增枚举值`RollingBack`和`RollbackFailed`

### HuaweiCloud SDK EIP

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreatePrePaidPublicip`、`CreatePublicip`新增请求和响应参数`alias`
  - 接口`ShowPublicip`、`UpdatePublicip`新增响应参数`alias`

### HuaweiCloud SDK OCR

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`RecognizeHandwriting`移除响应参数`extracted_data`

# 3.0.22-beta 2021-11-12

### HuaweiCloud SDK CCE

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`UpdateNode`新增请求参数`customSan`

### HuaweiCloud SDK OCR

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`RecognizeGeneralTable`新增响应参数`confidence`

### HuaweiCloud SDK VPC

- _新增特性_
  - 支持接口（V3）: `AddVpcExtendCidr`、`RemoveVpcExtendCidr`、`ListVpcs`、`ShowVpc`
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.21-beta 2021-10-25

### HuaweiCloud SDK EIP

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateSharedBandwidth`新增请求参数`bandwidth_type`

### HuaweiCloud SDK FRS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`AddFacesByFile`、`AddFacesByBase64`、`AddFacesByUrl`新增请求参数`single`

### HuaweiCloud SDK IMS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ShowJob`新增响应参数`current_task`、`image_name`、`process_percent`

### HuaweiCloud SDK IoTDA

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListDevices`新增请求参数`status`
  - 接口`CreateRuleAction`新增请求参数`file_path`

### HuaweiCloud SDK OCR

- _新增特性_
  - 新增接口`RecognizeInsurancePolicy`、`RecognizeFinancialStatement`、`RecognizeQualificationCertificate`
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.20-beta 2021-10-19

### HuaweiCloud SDK EIP

- _新增特性_
  - 支持以下接口：
    - `ListCommonPools`
    - `ListPublicBorderGroups`
    - `ListPublicipPool`
    - `ShowPublicipPool`
    - `ListShareBandwidthTypes`
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListPublicips`新增请求参数`allow_share_bandwidth_type_any`
  - 接口`NeutronListFloatingIps`的请求参数`limit`的类型调整： `string` -> `integer`
  - 接口`NeutronUpdateFloatingIp`请求体的名称调整： `floatingip` -> `NeutronUpdateFloatingIpRequestBody`
  - 接口`ShowPublicip`新增响应参数`allow_share_bandwidth_types`

# 3.0.19-beta 2021-10-11

### HuaweiCloud SDK ECS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`DisassociateServerVirtualIp`的请求参数`reverse_binding`改为非必填

### HuaweiCloud SDK FRS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`DetectFaceByFile`、`DetectFaceByBase64`、`DetectFaceByUrl`的请求参数`attributes`可选值调整为`2,4,6,7,8,11,12,13,21`

# 3.0.18-beta 2021-09-29

### HuaweiCloud SDK ECS

- _新增特性_
  - 支持以下接口:
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
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.17-beta 2021-09-26

### HuaweiCloud SDK FunctionGraph

- _新增特性_
  - 支持函数工作流服务
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.16-beta 2021-09-24

### HuaweiCloud SDK CCE

- _新增特性_
  - 支持接口`ShowQuotas`
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK IVS

- _新增特性_
  - 支持人证核身服务
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.15-beta 2021-09-16

### HuaweiCloud SDK CCE

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ShowCluster`新增响应参数`platformVersion`

### HuaweiCloud SDK IMS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateDataImage`新增非必填的请求参数`__support_amd`
  - 接口`ListImages`新增响应参数`__support_amd`

### HuaweiCloud SDK OCR

- _新增特性_
  - 支持接口`RecognizeInvoiceVerification`
- _解决问题_
  - 无
- _特性变更_
  - 无

# 3.0.14-beta 2021-09-10

### HuaweiCloud SDK Core

- _新增特性_
    - 支持Region管理
- _解决问题_
    - 无
- _特性变更_
    - 无
    
### HuaweiCloud SDK CCE
- _新增特性_
  - 支持接口`AddNode`和`ResetNode`
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK EVS
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateVolume`的请求参数`size`改为必填

# 3.0.13-beta 2021-08-25

### HuaweiCloud SDK ECS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListServerInterfaces`新增以下响应参数:
    - `delete_on_termination`
    - `driver_mode`
    - `min_rate`
    - `multiqueue_num`
    - `pci_address`
  - 接口`ListServersDetails`新增响应参数`cpu_options`和`hypervisor`
  
### HuaweiCloud SDK EIP

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`BatchCreateSharedBandwidths`新增请求参数和响应参数`public_border_group`
  - 接口`AddPublicipsIntoSharedBandwidth`新增响应参数`public_border_group`



# 3.0.12-beta 2021-08-10

### HuaweiCloud SDK EIP
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListBandwidths`、`ShowPublicip`的响应参数名称调整：`publicip_border_group` -> `public_border_group`

### HuaweiCloud SDK EVS
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListVolumes`新增请求参数`server_id`

### HuaweiCloud SDK IAM
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateDeployment`移除响应参数`order_id`

### HuaweiCloud SDK IMS
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 修改接口`UpdateImage`的请求参数`value`为必填参数

### HuaweiCloud SDK VPC
- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`NeutronListSubnets`新增请求参数`enable_dhcp`
  - 接口`NeutronListSecurityGroups`新增响应参数`security_groups_links`

# 3.0.11-beta 2021-7-30

### HuaweiCloud SDK IMS

- _新增特性_
    - 无
- _解决问题_
    - [Issue 40](https://github.com/huaweicloud/huaweicloud-sdk-java-v3/issues/40): 修复响应参数`__lazyloading`类型定义错误的问题
- _特性变更_
    - 无

# 3.0.10-beta 2021-07-09

### HuaweiCloud SDK Core
- _新增特性_
  - 无
- _解决问题_
  - 修复 Response 返回层级错误
- _特性变更_
  - 优化异常信息

  
### HuaweiCloud SDK CCE

- _新增特性_
  - 支持接口`RemoveNode`、`MigrateNode`
- _解决问题_
  - 无
- _特性变更_
  - 接口`DeleteCluster`新增请求参数`tobedeleted`

### HuaweiCloud SDK EIP

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`CreateSharedBandwidth`、`ListBandwidths`新增响应参数`publicip_border_group`

### HuaweiCloud SDK IMS

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`GlanceCreateImageMetadata`新增响应参数`__root_origin`、`checksum`、`size`
  - 接口`GlanceAddImageMember`移除请求参数`deleted`、`deleted_at`,新增以下请求参数：
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

- _新增特性_
  - 无
- _解决问题_
  - 无
- _特性变更_
  - 接口`ListRules`新增响应参数`edge_node_ids`、`last_update_time`

# 3.0.9-beta 2021-06-29

### HuaweiCloud SDK Core
- _新增特性_
  - 支持 multipart/form-data
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK ECS

- _新增特性_
    - 无
- _解决问题_
    - 解决了使用接口`NovaShowKeypair`获取秘钥，结果解析异常的问题
- _特性变更_
    - 无

### HuaweiCloud SDK CCE

- _新增特性_
    - 无
- _解决问题_
    - [Issue 20](https://github.com/huaweicloud/huaweicloud-sdk-go-v3/issues/20): 修复`extendParam`类型定义错误的问题
    - [Issue 22](https://github.com/huaweicloud/huaweicloud-sdk-go-v3/issues/22): 修正接口`ListAddonInstances`的响应参数`status`可选值
- _特性变更_
    - 接口`DeleteCluster`新增请求参数`tobedeleted`
    - 接口`CreateNodePool`、`ShowNodePool`、`UpdateNodePool`、`DeleteNodePool`新增请求参数`storage`

### HuaweiCloud SDK IoTDA

- _新增特性_
  - 新增支持接口:
      - `ListComplexQueryDevice`
      - `UploadBatchTaskFile`
  - 下线订阅管理相关接口：
        - `ListSubscriptions`
        - `CreateSubscription`
        - `UpdateSubscription`
        - `ShowSubscription`
        - `DeleteSubscription`
- _解决问题_
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK IAM

- _新增特性_
    - 无
- _解决问题_
    - 无
- _特性变更_
    - 接口 `CreateUsers` 新增请求体参数和响应体参数 _access_mode_
    - 接口 `DeleteBindingDevice` 将请求体参数 _authentication_code_ 设置为必填参数
    - 查询账号配额接口`ShowDomainQuota`的请求参数`type`增加可选值：
        - `assigment_group_mp`
        - `assigment_agency_mp`
        - `assigment_group_ep`
        - `assigment_user_ep`
    - 接口`KeystoneListPermissions`新增请求参数`permission_type`、`display_name`、`catalog`、`type`

# 3.0.8-beta 2021-04-15

### HuaweiCloud SDK Core

- _新增特性_
  - 无
- _解决问题_
  - 日志优化
  - 升级axios版本,解决安全问题
- _特性变更_
  - 无

### HuaweiCloud SDK ECS

- _新增特性_
  - 支持ECS弹性云服务器服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK CCE

- _新增特性_
  - 支持CCE云容器引擎服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK EVS

- _新增特性_
  - 支持EVS云硬盘服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK VPC

- _新增特性_
  - 支持VPC虚拟私有云服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

### HuaweiCloud SDK EIP

- _新增特性_
  - 支持EIP弹性公网IP服务
- _解决问题_
  - 日志优化
  - 无
- _特性变更_
  - 无

# 3.0.7-beta 2021-03-15

### HuaweiCloud SDK Core

- _新增特性_
    - 无
- _解决问题_
    - 修复代码请求路径缺失的问题
- _特性变更_
    - 无

### HuaweiCloud SDK IAM

- _新增特性_
    - 新增支持接口：
        - 查询身份提供商详情 `KeystoneShowIdentityProvider`
        - 注册身份提供商 `KeystoneCreateIdentityProvider`
        - 更新身份提供商 `KeystoneUpdateIdentityProvider`
        - 删除身份提供商 `KeystoneDeleteIdentityProvider`
        - 获取联邦认证token(OpenId Connect Id token方式) `CreateTokenWithIdToken`
- _解决问题_
    - 无
- _特性变更_
    - 下线接口：获取联邦认证unscoped token `CreateUnscopeTokenByIdpInitiated`

### HuaweiCloud SDK IoTDA

- _新增特性_
    - 支持设备接入服务
- _解决问题_
    - 无
- _特性变更_
    - 无

# 3.0.6-beta 2021-02-27

### HuaweiCloud SDK Core

- _新增特性_
    - 无
- _解决问题_
    - 无
- _特性变更_
    - 优化 README 文档描述及 CHANGELOG 日志格式

### HuaweiCloud SDK IAM

- _新增特性_
    - 无
- _解决问题_
    - 修复 `KeystoneUserResult` 类中属性名的错误定义问题：`pwd_stength` → `pwd_strength`
- _特性变更_
    - 无

# 3.0.5-beta 2021-01-30

### HuaweiCloud SDK IAM

- _新增特性_
    - 支持统一身份认证服务
- _解决问题_
    - 无
- _特性变更_
    - 无

# 3.0.4-beta 2020-12-07

# 3.0.3-beta 2020-10-31

### HuaweiCloud SDK DevStar

- _新增特性_
    - 增加README.MD文件
- _解决问题_
    - 无
- _特性变更_
    - 无

# 3.0.2-beta 2020-10-20

### HuaweiCloud SDK DevStar

- _新增特性_
    - 增加模块主入口文件
- _解决问题_
    - 无
- _特性变更_
    - 无

# 3.0.1-beta 2020-10-16

### 首次发布

- _已支持服务_
    - 模板引擎（DevStar）
