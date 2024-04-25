# 3.1.92 2024-04-25

### HuaweiCloud SDK AAD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowUnblockRecord**
    - changes of response param
      - `* unblock_record.block_id: string -> int64`

### HuaweiCloud SDK CodeArtsDeploy

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDeployTaskDetail**
    - changes of response param
      - `+ is_disable`
      - `+ can_disable`
  - **ListDeployTasks**
    - changes of response param
      - `+ is_disable`
      - `+ can_disable`
      - `+ result.can_disable`
      - `+ result.is_disable`
  - **ListAllApp**
    - changes of response param
      - `+ result.is_disable`
      - `+ result.can_disable`
  - **ShowAppDetailById**
    - changes of response param
      - `+ result.is_disable`
      - `+ result.can_disable`
      - `+ result.arrange_infos.can_disable`
      - `+ result.arrange_infos.is_disable`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the following APIs:
    - `ImportDataServiceExcel`
    - `ExportDataServiceExcel`
    - `ExportDataServiceZip`
    - `ExportDataServiceExcelTemplate`
    - `ListSecurityDlfDataWareHouses`
    - `BatchUpdateSecurityDlfDataWareHouses`
    - `DebugSecurityDlfDataWareHouses`
    - `ListSecuritySensitiveDataOverviews`
- _Bug Fix_
  - None
- _Change_
  - Remove the API `PublishApi`
  - **DeleteApi**
    - changes of request param
      - `* workspace: optional -> required`
  - **ListApicGroups**
    - changes of request param
      - `+ apig_type: enum value [APIG]`
  - **ListApis**
    - changes of request param
      - `+ name`
      - `+ description`
      - `+ create_user`
      - `+ start_time`
      - `+ end_time`
      - `+ tags`
      - `+ api_type`
      - `+ publish_status`
      - `+ table_name`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateMigrationTask**
    - changes of request param
      - `+ source_instance.task_status`
      - `+ source_instance.id`
      - `+ source_instance.ip`
      - `+ source_instance.port`
      - `+ source_instance.name`
      - `+ source_instance.proxy_multi_db`
      - `+ source_instance.db`
      - `+ target_instance.ip`
      - `+ target_instance.port`
      - `+ target_instance.addrs`
      - `+ target_instance.proxy_multi_db`
      - `+ target_instance.db`
  - **ShowMigrationTask**
    - changes of response param
      - `+ source_instance.task_status`
      - `+ source_instance.id`
      - `+ source_instance.ip`
      - `+ source_instance.port`
      - `+ source_instance.name`
      - `+ source_instance.proxy_multi_db`
      - `+ source_instance.db`
      - `+ target_instance.ip`
      - `+ target_instance.port`
      - `+ target_instance.addrs`
      - `+ target_instance.proxy_multi_db`
      - `+ target_instance.db`
  - **StopMigrationTask**
    - changes of response param
      - `+ source_instance.task_status`
      - `+ source_instance.id`
      - `+ source_instance.ip`
      - `+ source_instance.port`
      - `+ source_instance.name`
      - `+ source_instance.proxy_multi_db`
      - `+ source_instance.db`
      - `+ target_instance.ip`
      - `+ target_instance.port`
      - `+ target_instance.addrs`
      - `+ target_instance.proxy_multi_db`
      - `+ target_instance.db`

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListTables**
    - changes of response param
      - `* tables.create_time: int32 -> int64`
      - `* tables.last_access_time: int32 -> int64`
      - `* tables.table_size: int32 -> int64`
  - **CreateFlinkSqlJob**
    - changes of response param
      - `* is_success: boolean -> string`
  - **UpdateFlinkSqlJob**
    - changes of response param
      - `* is_success: boolean -> string`
  - **CreateFlinkJarJob**
    - changes of response param
      - `* is_success: boolean -> string`
  - **UpdateFlinkJarJob**
    - changes of response param
      - `* is_success: boolean -> string`
  - **ShowFlinkJob**
    - changes of response param
      - `* is_success: boolean -> string`

### HuaweiCloud SDK DWS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListMetricsData**
    - changes of response param
      - `* data: list<map<string, string>> -> list<map<string, object>>`

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of response param
      - `+ instances.availability_zone`

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the following APIs:
    - `ListDeviceProxies`
    - `CreateDeviceProxy`
    - `ShowDeviceProxy`
    - `UpdateDeviceProxy`
    - `DeleteDeviceProxy`
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
  - **RunCreateVideoModerationJob**
    - changes of request param
      - `+ seed`
  - **RunCreateAudioStreamModerationJob**
    - changes of request param
      - `+ seed`
  - **RunCreateDocumentModerationJob**
    - changes of request param
      - `+ seed`
  - **RunCreateVideoStreamModerationJob**
    - changes of request param
      - `+ seed`
  - **RunCreateAudioModerationJob**
    - changes of request param
      - `+ seed`

### HuaweiCloud SDK OCR

- _Features_
  - Support the API `RecognizeBankReceipt`
- _Bug Fix_
  - None
- _Change_
  - **RecognizeBusinessLicense**
    - changes of response param
      - `+ result.organization_form`
  - **RecognizeSmartDocumentRecognizer**
    - changes of request param
      - `+ formula`
    - changes of response param
      - `+ result.formula_result`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateFirewall**
    - changes of response param
      - `+ firewall.ingress_rules.enabled`
  - **ShowFirewall**
    - changes of response param
      - `+ firewall.ingress_rules.enabled`
  - **UpdateFirewall**
    - changes of response param
      - `+ firewall.ingress_rules.enabled`
  - **UpdateFirewallRules**
    - changes of request param
      - `+ firewall.ingress_rules.enabled`
    - changes of response param
      - `+ firewall.ingress_rules.enabled`
  - **AddFirewallRules**
    - changes of request param
      - `+ firewall.ingress_rules.enabled`
    - changes of response param
      - `+ firewall.ingress_rules.enabled`
  - **RemoveFirewallRules**
    - changes of response param
      - `+ firewall.ingress_rules.enabled`
  - **AssociateSubnetFirewall**
    - changes of response param
      - `+ firewall.ingress_rules.enabled`
  - **DisassociateSubnetFirewall**
    - changes of response param
      - `+ firewall.ingress_rules.enabled`

### HuaweiCloud SDK WAF

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdatePolicyRuleStatus**
    - changes of request param
      - `+ ruletype: enum value [cc]`

# 3.1.91 2024-04-18

### HuaweiCloud SDK AOM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListEvents**
    - changes of request param
      - `+ Enterprise-Project-Id`
  - **CountEvents**
    - changes of response param
      - `+ summary`
  - **UpdateAlarmRule**
    - changes of request param
      - `+ period: enum value [3600000]`
      - `- period: enum value [36000000]`
  - **AddAlarmRule**
    - changes of request param
      - `+ period: enum value [3600000]`
      - `- period: enum value [36000000]`

### HuaweiCloud SDK Config

- _Features_
  - Support the APIs `UpdateConformancePack`, `UpdateOrganizationConformancePack`
- _Bug Fix_
  - None
- _Change_
  - **ShowOrganizationPolicyAssignmentDetailedStatus**
    - changes of request param
      - `* organization_policy_assignment_name: required -> optional`
  - **ShowConformancePack**
    - changes of response param
      - `+ template_key`
      - `+ agency_name`
      - `+ template_uri`
      - `+ status: enum value [UPDATE_SUCCESSFUL,UPDATE_IN_PROGRESS,UPDATE_FAILED]`
  - **ShowOrganizationConformancePack**
    - changes of response param
      - `+ template_key`
      - `+ template_uri`
  - **ShowOrganizationConformancePackDetailedStatuses**
    - changes of request param
      - `* conformance_pack_name: required -> optional`
      - `+ state: enum value [UPDATE_SUCCESSFUL,UPDATE_IN_PROGRESS,UPDATE_FAILED]`
  - **ShowTrackerConfig**
    - changes of response param
      - `+ retention_period_in_days`
  - **CreateTrackerConfig**
    - changes of request param
      - `+ retention_period_in_days`
  - **CreateConformancePack**
    - changes of response param
      - `+ template_key`
      - `+ agency_name`
      - `+ template_uri`
      - `+ status: enum value [UPDATE_SUCCESSFUL,UPDATE_IN_PROGRESS,UPDATE_FAILED]`
  - **ListConformancePacks**
    - changes of response param
      - `+ template_key`
      - `+ agency_name`
      - `+ template_uri`
      - `+ value.template_key`
      - `+ value.template_uri`
      - `+ value.agency_name`
      - `+ value.status: enum value [UPDATE_SUCCESSFUL,UPDATE_IN_PROGRESS,UPDATE_FAILED]`

### HuaweiCloud SDK CSE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListFlavors**
    - changes of response param
      - `+ data.spec`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListMigrationTask**
    - changes of response param
      - `+ migration_tasks.description`
      - `+ migration_tasks.source_instance_status`
      - `+ migration_tasks.target_instance_status`
      - `+ migration_tasks.source_instance_subnet_id`
      - `+ migration_tasks.target_instance_subnet_id`
      - `+ migration_tasks.source_instance_spec_code`
      - `+ migration_tasks.target_instance_spec_code`
      - `+ migration_tasks.error_message`
      - `+ migration_tasks.released_at`
      - `+ migration_tasks.version`
      - `+ migration_tasks.resume_mode`
      - `+ migration_tasks.supported_features`
  - **ShowMigrationTask**
    - changes of response param
      - `+ task_status`
      - `+ tenant_security_group_id`
      - `+ tenant_vpc_id`
      - `+ released_at`
      - `+ version`
      - `+ resume_mode`
      - `+ supported_features`
      - `+ bandwidth_limit_mb`
      - `+ tenant_subnet_id`
  - **StopMigrationTask**
    - changes of response param
      - `+ task_status`
      - `+ tenant_security_group_id`
      - `+ tenant_vpc_id`
      - `+ released_at`
      - `+ version`
      - `+ resume_mode`
      - `+ supported_features`
      - `+ bandwidth_limit_mb`
      - `+ tenant_subnet_id`
  - **ListBackgroundTask**
    - changes of response param
      - `+ tasks.details.old_resource_spec_code`
      - `+ tasks.details.new_resource_spec_code`
      - `+ tasks.details.old_replica_num`
      - `+ tasks.details.new_replica_num`
      - `+ tasks.details.old_cache_type`
      - `+ tasks.details.new_cache_type`
      - `+ tasks.details.replica_ip`
      - `+ tasks.details.replica_az`
      - `+ tasks.details.group_name`
      - `+ tasks.details.old_port`
      - `+ tasks.details.new_port`
      - `+ tasks.details.is_only_adjust_charging`
      - `+ tasks.details.account_name`
      - `+ tasks.details.source_ip`
      - `+ tasks.details.target_ip`
      - `+ tasks.details.node_name`
      - `+ tasks.details.rename_commands`
      - `+ tasks.details.updated_config_length`
  - **ListCenterTask**
    - changes of response param
      - `+ tasks.details.old_resource_spec_code`
      - `+ tasks.details.new_resource_spec_code`
      - `+ tasks.details.old_replica_num`
      - `+ tasks.details.new_replica_num`
      - `+ tasks.details.old_cache_type`
      - `+ tasks.details.new_cache_type`
      - `+ tasks.details.replica_ip`
      - `+ tasks.details.replica_az`
      - `+ tasks.details.group_name`
      - `+ tasks.details.old_port`
      - `+ tasks.details.new_port`
      - `+ tasks.details.is_only_adjust_charging`
      - `+ tasks.details.account_name`
      - `+ tasks.details.source_ip`
      - `+ tasks.details.target_ip`
      - `+ tasks.details.node_name`
      - `+ tasks.details.rename_commands`
      - `+ tasks.details.updated_config_length`

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - Support the APIs `ListTopIoTraffics`, `ShowErrorLogSwitchStatus`, `ListInstanceErrorLogs`, `DeleteInstanceTag`
- _Bug Fix_
  - None
- _Change_
  - Remove the API `ShowInstancesStatistics`
  - **UpgradeInstanceVersion**
    - changes of request param
      - `+ upgrade_action`
      - `- upgrde_action`
      - `- is_parallel_upgrade`
  - **ShowBackupPolicy**
    - changes of response param
      - `* backup_policy.differential_period: string -> int32`

### HuaweiCloud SDK HSS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSecurityEvents**
    - changes of response param
      - `+ data_list.process_info_list.process_file_hash`
      - `+ data_list.process_info_list.parent_process_file_hash`
      - `+ data_list.process_info_list.block`

### HuaweiCloud SDK MetaStudio

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **Create2dModelTrainingJob**
    - changes of request param
      - `+ model_version`
  - **List2dModelTrainingJob**
    - changes of request param
      - `+ query_project_id`
      - `+ model_resolution`
    - changes of response param
      - `+ jobs.model_resolution`
      - `+ jobs.app_user_id`
      - `+ jobs.model_version: enum value [V3.2]`
  - **ShowRobot**
    - changes of response param
      - `+ room_id`
      - `- concurrency`
  - **UpdateRobot**
    - changes of request param
      - `+ room_id`
      - `- concurrency`
  - **ExecuteSmartLiveCommand**
    - changes of request param
      - `+ command: enum value [REFRESH_OUTPUT_URL]`
    - changes of response param
      - `+ command: enum value [REFRESH_OUTPUT_URL]`
  - **Update2dModelTrainingJob**
    - changes of request param
      - `* body: object<Create2dModelTrainingJobReq> -> object<Update2dModelTrainingJobReq>`
  - **Show2dModelTrainingJob**
    - changes of response param
      - `+ inference_data_process_eye_correction_mark_info`
      - `+ worker_type`
      - `+ app_user_id`
      - `+ model_version: enum value [V3.2]`
      - `+ operation_logs.log_type: enum value [SYSTEM_COMPILE_FAILED,SYSTEM_COMPILE_SUCCESS]`
  - **CreateRobot**
    - changes of request param
      - `+ room_id`
      - `- concurrency`
  - **ListRobot**
    - changes of request param
      - `+ room_id`
    - changes of response param
      - `+ room_id`
      - `- concurrency`
      - `+ data.room_id`
      - `- data.concurrency`
  - **CreateSmartChatRoom**
    - changes of request param
      - `+ background_config.background_color_config`
      - `- background_config.background_title`
      - `- background_config.human_position_2d`
      - `- background_config.human_size_2d`
      - `- background_config.background_cover_url`
      - `+ background_config.background_type: enum value [COLOR]`
  - **ShowSmartChatRoom**
    - changes of response param
      - `+ background_config.background_color_config`
      - `- background_config.background_title`
      - `- background_config.human_position_2d`
      - `- background_config.human_size_2d`
      - `- background_config.background_cover_url`
      - `+ background_config.background_type: enum value [COLOR]`
  - **UpdateSmartChatRoom**
    - changes of request param
      - `+ background_config.background_color_config`
      - `- background_config.background_title`
      - `- background_config.human_position_2d`
      - `- background_config.human_size_2d`
      - `- background_config.background_cover_url`
      - `+ background_config.background_type: enum value [COLOR]`
    - changes of response param
      - `+ background_config.background_color_config`
      - `- background_config.background_title`
      - `- background_config.human_position_2d`
      - `- background_config.human_size_2d`
      - `- background_config.background_cover_url`
      - `+ background_config.background_type: enum value [COLOR]`
  - **ShowSmartLive**
    - changes of response param
      - `+ live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
  - **ShowVideoMotionCaptureJob**
    - changes of response param
      - `+ output_info.output_data_version`
  - **StartSmartLive**
    - changes of request param
      - `+ play_policy.need_independent_capture_client`
      - `+ live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
    - changes of response param
      - `+ live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
  - **ListSmartLive**
    - changes of response param
      - `+ smart_live_jobs.live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
  - **ListSmartLiveJobs**
    - changes of response param
      - `+ smart_live_jobs.live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
  - **CreateVideoMotionCaptureJob**
    - changes of request param
      - `+ output_info.output_data_version`
  - **ListVideoMotionCaptureJobs**
    - changes of response param
      - `+ video_motion_capture_jobs.output_info.output_data_version`
  - **ShowAsset**
    - changes of response param
      - `+ asset_extra_meta.image_meta`
      - `+ asset_extra_meta.video_meta`
      - `+ asset_extra_meta.audio_meta`
  - **UpdateDigitalAsset**
    - changes of request param
      - `+ asset_extra_meta.image_meta`
      - `+ asset_extra_meta.video_meta`
      - `+ asset_extra_meta.audio_meta`
    - changes of response param
      - `+ asset_extra_meta.image_meta`
      - `+ asset_extra_meta.video_meta`
      - `+ asset_extra_meta.audio_meta`
  - **Create2DDigitalHumanVideo**
    - changes of request param
      - `+ shoot_scripts.shoot_script.background_config.background_color_config`
      - `- shoot_scripts.shoot_script.background_config.background_title`
      - `- shoot_scripts.shoot_script.background_config.human_position_2d`
      - `- shoot_scripts.shoot_script.background_config.human_size_2d`
      - `- shoot_scripts.shoot_script.background_config.background_cover_url`
      - `+ shoot_scripts.shoot_script.background_config.background_type: enum value [COLOR]`
  - **Show2DDigitalHumanVideo**
    - changes of response param
      - `+ shoot_scripts.shoot_script.background_config.background_color_config`
      - `- shoot_scripts.shoot_script.background_config.background_title`
      - `- shoot_scripts.shoot_script.background_config.human_position_2d`
      - `- shoot_scripts.shoot_script.background_config.human_size_2d`
      - `- shoot_scripts.shoot_script.background_config.background_cover_url`
      - `+ shoot_scripts.shoot_script.background_config.background_type: enum value [COLOR]`
  - **CreatePhotoDigitalHumanVideo**
    - changes of request param
      - `+ shoot_scripts.shoot_script.background_config.background_color_config`
      - `- shoot_scripts.shoot_script.background_config.background_title`
      - `- shoot_scripts.shoot_script.background_config.human_position_2d`
      - `- shoot_scripts.shoot_script.background_config.human_size_2d`
      - `- shoot_scripts.shoot_script.background_config.background_cover_url`
      - `+ shoot_scripts.shoot_script.background_config.background_type: enum value [COLOR]`
  - **ShowPhotoDigitalHumanVideo**
    - changes of response param
      - `+ shoot_scripts.shoot_script.background_config.background_color_config`
      - `- shoot_scripts.shoot_script.background_config.background_title`
      - `- shoot_scripts.shoot_script.background_config.human_position_2d`
      - `- shoot_scripts.shoot_script.background_config.human_size_2d`
      - `- shoot_scripts.shoot_script.background_config.background_cover_url`
      - `+ shoot_scripts.shoot_script.background_config.background_type: enum value [COLOR]`
  - **CreateSmartLiveRoom**
    - changes of request param
      - `+ play_policy.need_independent_capture_client`
      - `+ live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
      - `+ scene_scripts.background_config.background_color_config`
      - `- scene_scripts.background_config.background_title`
      - `- scene_scripts.background_config.human_position_2d`
      - `- scene_scripts.background_config.human_size_2d`
      - `- scene_scripts.background_config.background_cover_url`
      - `+ scene_scripts.background_config.background_type: enum value [COLOR]`
  - **ShowSmartLiveRoom**
    - changes of response param
      - `+ play_policy.need_independent_capture_client`
      - `+ live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
      - `+ scene_scripts.background_config.background_color_config`
      - `- scene_scripts.background_config.background_title`
      - `- scene_scripts.background_config.human_position_2d`
      - `- scene_scripts.background_config.human_size_2d`
      - `- scene_scripts.background_config.background_cover_url`
      - `+ scene_scripts.background_config.background_type: enum value [COLOR]`
  - **UpdateSmartLiveRoom**
    - changes of request param
      - `+ play_policy.need_independent_capture_client`
      - `+ live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
      - `+ scene_scripts.background_config.background_color_config`
      - `- scene_scripts.background_config.background_title`
      - `- scene_scripts.background_config.human_position_2d`
      - `- scene_scripts.background_config.human_size_2d`
      - `- scene_scripts.background_config.background_cover_url`
      - `+ scene_scripts.background_config.background_type: enum value [COLOR]`
    - changes of response param
      - `+ play_policy.need_independent_capture_client`
      - `+ live_event_callback_config.auth_type: enum value [RTMP_STREAM_STATE_CHANGE,MEITUAN_DEFAULT]`
      - `+ scene_scripts.background_config.background_color_config`
      - `- scene_scripts.background_config.background_title`
      - `- scene_scripts.background_config.human_position_2d`
      - `- scene_scripts.background_config.human_size_2d`
      - `- scene_scripts.background_config.background_cover_url`
      - `+ scene_scripts.background_config.background_type: enum value [COLOR]`
  - **CreateVideoScripts**
    - changes of request param
      - `+ shoot_scripts.shoot_script.background_config.background_color_config`
      - `- shoot_scripts.shoot_script.background_config.background_title`
      - `- shoot_scripts.shoot_script.background_config.human_position_2d`
      - `- shoot_scripts.shoot_script.background_config.human_size_2d`
      - `- shoot_scripts.shoot_script.background_config.background_cover_url`
      - `+ shoot_scripts.shoot_script.background_config.background_type: enum value [COLOR]`
  - **ShowVideoScript**
    - changes of response param
      - `+ shoot_scripts.shoot_script.background_config.background_color_config`
      - `- shoot_scripts.shoot_script.background_config.background_title`
      - `- shoot_scripts.shoot_script.background_config.human_position_2d`
      - `- shoot_scripts.shoot_script.background_config.human_size_2d`
      - `- shoot_scripts.shoot_script.background_config.background_cover_url`
      - `+ shoot_scripts.shoot_script.background_config.background_type: enum value [COLOR]`
  - **UpdateVideoScript**
    - changes of request param
      - `+ shoot_scripts.shoot_script.background_config.background_color_config`
      - `- shoot_scripts.shoot_script.background_config.background_title`
      - `- shoot_scripts.shoot_script.background_config.human_position_2d`
      - `- shoot_scripts.shoot_script.background_config.human_size_2d`
      - `- shoot_scripts.shoot_script.background_config.background_cover_url`
      - `+ shoot_scripts.shoot_script.background_config.background_type: enum value [COLOR]`
  - **CreateDigitalAsset**
    - changes of request param
      - `+ is_need_generate_cover`
      - `+ asset_extra_meta.image_meta`
      - `+ asset_extra_meta.video_meta`
      - `+ asset_extra_meta.audio_meta`
  - **ListAssets**
    - changes of request param
      - `- X-REAL-IP`
    - changes of response param
      - `+ assets.asset_extra_meta.image_meta`
      - `+ assets.asset_extra_meta.video_meta`
      - `+ assets.asset_extra_meta.audio_meta`

### HuaweiCloud SDK TMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **DeleteResourceTag**
    - changes of request param
      - `+ tags.value`

# 3.1.90 2024-04-12

### HuaweiCloud SDK Core

- _Features_
  - None
- _Bug Fix_
  - Fix some problems
- _Change_
  - None

# 3.1.89 2024-04-12

### HuaweiCloud SDK Core

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Upgrade `axios`: 0.21.4 -> 0.28.1

# 3.1.88 2024-04-11

### HuaweiCloud SDK AOS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowStackSetMetadata**
    - changes of response param
      - `+ managed_operation`
  - **UpdateStackSet**
    - changes of request param
      - `+ managed_operation`
  - **CreateStackSet**
    - changes of request param
      - `+ managed_operation`
  - **CreateStackInstance**
    - changes of request param
      - `+ operation_preferences`
  - **DeleteStackInstanceDeprecated**
    - changes of request param
      - `+ operation_preferences`
  - **UpdateStackInstances**
    - changes of request param
      - `+ operation_preferences`
  - **DeleteStackInstance**
    - changes of request param
      - `+ operation_preferences`
  - **DeployStackSet**
    - changes of request param
      - `+ operation_preferences`
  - **ShowStackSetOperationMetadata**
    - changes of response param
      - `+ operation_preferences`

### HuaweiCloud SDK APIG

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateGatewayResponseTypeV2**
    - changes of request param
      - `* headers.value: object -> string`

### HuaweiCloud SDK CDN

- _Features_
  - Support the API `ShowQuota`
- _Bug Fix_
  - None
- _Change_
  - **ShowDomainFullConfig**
    - changes of response param
      - `+ configs.sni`
      - `+ configs.request_url_rewrite`
      - `+ configs.browser_cache_rules`
  - **UpdateDomainFullConfig**
    - changes of request param
      - `+ configs.sni`
      - `+ configs.request_url_rewrite`
      - `+ configs.browser_cache_rules`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the following APIs:
    - `SearchFieldsForRelation`
    - `ExportDesignModels`
    - `ExportDesignResult`
    - `ExportDesignModelTableDdl`
    - `AddDesignEntityTags`
    - `RemoveDesignEntityTags`
    - `UpdateDesignTableQuality`
    - `RemoveDesignQualityInfos`
    - `DeleteDesignLatestApproval`
    - `SearchDesignLatestApprovalDiff`
    - `UpdateDesignAggregationLogicTable`
    - `CreateDesignAggregationLogicTable`
    - `DeleteDesignAggregationLogicTable`
    - `UpdateDesignAtomicIndex`
    - `CreateDesignAtomicIndex`
    - `DeleteDesignAtomicIndex`
- _Bug Fix_
  - None
- _Change_
  - **ResetLinkAttributeAndStandard**
    - changes of request param
      - `+ X-Project-Id`
  - **ListCatalogTree**
    - changes of request param
      - `+ X-Project-Id`
  - **SearchCatalogs**
    - changes of request param
      - `+ X-Project-Id`
  - **ChangeCatalog**
    - changes of request param
      - `+ X-Project-Id`
  - **CreateCatalog**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteCatalog**
    - changes of request param
      - `+ X-Project-Id`
      - `* ids: list<integer> -> list<string>`
  - **ShowBizCatalogDetail**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowStandardTemplate**
    - changes of request param
      - `+ X-Project-Id`
  - **UpdateStandardTemplate**
    - changes of request param
      - `+ X-Project-Id`
  - **CreateStandardTemplate**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteStandardTemplate**
    - changes of request param
      - `+ X-Project-Id`
  - **SearchApprovals**
    - changes of request param
      - `+ X-Project-Id`
  - **RollbackApproval**
    - changes of request param
      - `+ X-Project-Id`
  - **ConfirmApprovals**
    - changes of request param
      - `+ X-Project-Id`
  - **ListApprovers**
    - changes of request param
      - `+ X-Project-Id`
  - **CreateApprover**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteApprover**
    - changes of request param
      - `+ X-Project-Id`
  - **ListBusiness**
    - changes of request param
      - `+ X-Project-Id`
  - **CountOverviews**
    - changes of request param
      - `+ X-Project-Id`
  - **CountTableModels**
    - changes of request param
      - `+ X-Project-Id`
  - **CountAllModels**
    - changes of request param
      - `+ X-Project-Id`
  - **CountStandards**
    - changes of request param
      - `+ X-Project-Id`
  - **ListDirectories**
    - changes of request param
      - `+ X-Project-Id`
  - **UpdateDirectory**
    - changes of request param
      - `+ X-Project-Id`
      - `- type: enum value [TAG]`
  - **CreateDirectory**
    - changes of request param
      - `+ X-Project-Id`
      - `- type: enum value [TAG]`
  - **DeleteDirectory**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowBizMetricById**
    - changes of request param
      - `+ X-Project-Id`
  - **ListBizMetricDimensions**
    - changes of request param
      - `+ X-Project-Id`
  - **ListBizMetricOwners**
    - changes of request param
      - `+ X-Project-Id`
  - **ListMetricRelations**
    - changes of request param
      - `+ X-Project-Id`
  - **SearchVersions**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `+ data.value`
  - **ListDimensions**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowDimensionById**
    - changes of request param
      - `+ X-Project-Id`
  - **ListDimensionGroups**
    - changes of request param
      - `+ X-Project-Id`
  - **CheckDimensionStatus**
    - changes of request param
      - `+ X-Project-Id`
  - **ListDimensionLogicTables**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowDimensionLogicTableById**
    - changes of request param
      - `+ X-Project-Id`
  - **ListFactLogicTables**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowFactLogicTableById**
    - changes of request param
      - `+ X-Project-Id`
  - **CheckFactLogicTableStatus**
    - changes of request param
      - `+ X-Project-Id`
  - **ListAggregationLogicTables**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `+ data.value`
  - **ShowAggregationLogicTableById**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `+ data.value`
  - **ListCondition**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowConditionById**
    - changes of request param
      - `+ X-Project-Id`
  - **ListRelations**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowRelationById**
    - changes of request param
      - `+ X-Project-Id`
  - **ListTableModelRelations**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowTableModelById**
    - changes of request param
      - `+ X-Project-Id`
  - **ShowWorkspaceDetailById**
    - changes of request param
      - `+ X-Project-Id`
  - **ImportResult**
    - changes of request param
      - `+ X-Project-Id`
  - **SearchDwByType**
    - changes of request param
      - `+ X-Project-Id`
  - **ListAllTables**
    - changes of request param
      - `+ X-Project-Id`
  - **ImportCatalogs**
    - changes of request param
      - `+ X-Project-Id`
  - **ImportModels**
    - changes of request param
      - `+ X-Project-Id`
  - **RenewDataProfile**
    - changes of request param
      - `+ obsconfig.column_map`
      - `+ obsconfig.path`
      - `+ obsconfig.delimiter`
      - `+ obsconfig.quote`
      - `+ obsconfig.escape`
      - `+ obsconfig.header`
      - `+ obsconfig.data_type`
      - `+ obsconfig.date_format`
      - `+ obsconfig.timestamp_format`
      - `+ obsconfig.null_value`
      - `+ obsconfig.comment`
      - `+ obsconfig.parse_mode`
      - `+ obsconfig.join_table`
      - `* obsconfig: object -> object<OBSCommonConfig>`
  - **InitializeStandardTemplate**
    - changes of request param
      - `+ X-Project-Id`
  - **ListSubjectLevels**
    - changes of request param
      - `+ X-Project-Id`
  - **ChangeSubjects**
    - changes of request param
      - `+ X-Project-Id`
  - **ListWorkspaces**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteWorkspaces**
    - changes of request param
      - `+ X-Project-Id`
  - **UpdateWorkspace**
    - changes of request param
      - `+ X-Project-Id`
  - **CreateWorkspace**
    - changes of request param
      - `+ X-Project-Id`
  - **SearchCustomizedFields**
    - changes of request param
      - `+ X-Project-Id`
      - `+ type: enum value [METRIC]`
  - **ModifyCustomizedFields**
    - changes of request param
      - `+ X-Project-Id`
  - **SearchSubjectNew**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteSubjectNew**
    - changes of request param
      - `+ X-Project-Id`
      - `* ids: list<integer> -> list<string>`
  - **UpdateSubjectNew**
    - changes of request param
      - `+ X-Project-Id`
  - **CreateSubjectNew**
    - changes of request param
      - `+ X-Project-Id`
  - **ListAllStandards**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `+ data.value`
  - **DeleteStandard**
    - changes of request param
      - `+ X-Project-Id`
      - `* ids: list<integer> -> list<string>`
  - **CreateStandard**
    - changes of request param
      - `+ X-Project-Id`
      - `+ from_public`
      - `* approval_info.id: integer -> string`
      - `* approval_info.biz_id: integer -> string`
      - `+ approval_info.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **ShowStandardById**
    - changes of request param
      - `+ X-Project-Id`
  - **UpdateStandard**
    - changes of request param
      - `+ X-Project-Id`
      - `+ from_public`
      - `* approval_info.id: integer -> string`
      - `* approval_info.biz_id: integer -> string`
      - `+ approval_info.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **SearchCodeTables**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteCodeTable**
    - changes of request param
      - `+ X-Project-Id`
      - `* ids: list<integer> -> list<string>`
  - **CreateCodeTable**
    - changes of request param
      - `+ X-Project-Id`
      - `* approval_info.id: integer -> string`
      - `* approval_info.biz_id: integer -> string`
      - `+ approval_info.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **ShowCodeTableById**
    - changes of request param
      - `+ X-Project-Id`
  - **UpdateCodeTable**
    - changes of request param
      - `+ X-Project-Id`
      - `* approval_info.id: integer -> string`
      - `* approval_info.biz_id: integer -> string`
      - `+ approval_info.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **SearchCodeTableValues**
    - changes of request param
      - `+ X-Project-Id`
  - **UpdateCodeTableValues**
    - changes of request param
      - `+ X-Project-Id`
  - **BatchPublish**
    - changes of request param
      - `+ X-Project-Id`
      - `+ biz_infos.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **BatchOffline**
    - changes of request param
      - `+ X-Project-Id`
      - `+ biz_infos.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **ListBizMetrics**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteBizMetric**
    - changes of request param
      - `+ X-Project-Id`
      - `* ids: list<integer> -> list<string>`
  - **UpdateBizMetric**
    - changes of request param
      - `+ X-Project-Id`
      - `+ biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
      - `* approval_info.id: integer -> string`
      - `* approval_info.biz_id: integer -> string`
  - **CreateBizMetric**
    - changes of request param
      - `+ X-Project-Id`
      - `+ biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
      - `* approval_info.id: integer -> string`
      - `* approval_info.biz_id: integer -> string`
  - **SearchSubject**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteSubject**
    - changes of request param
      - `+ X-Project-Id`
      - `* ids: list<integer> -> list<string>`
  - **UpdateSubject**
    - changes of request param
      - `+ X-Project-Id`
  - **CreateSubject**
    - changes of request param
      - `+ X-Project-Id`
  - **SearchAtomicIndexes**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `* data.value.records.id: integer -> string`
      - `* data.value.records.l3_id: integer -> string`
      - `* data.value.records.table_id: integer -> string`
      - `+ data.value.records.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
      - `* data.value.records.approval_info.id: integer -> string`
      - `* data.value.records.approval_info.biz_id: integer -> string`
  - **ShowAtomicIndexById**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `* data.value.id: integer -> string`
      - `* data.value.l3_id: integer -> string`
      - `* data.value.table_id: integer -> string`
      - `+ data.value.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
      - `* data.value.approval_info.id: integer -> string`
      - `* data.value.approval_info.biz_id: integer -> string`
  - **ListCompoundMetrics**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `* data.value.records.approval_info.id: integer -> string`
      - `* data.value.records.approval_info.biz_id: integer -> string`
      - `+ data.value.records.approval_info.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **ShowCompoundMetricById**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `* data.value.approval_info.id: integer -> string`
      - `* data.value.approval_info.biz_id: integer -> string`
      - `+ data.value.approval_info.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **ListTableModels**
    - changes of request param
      - `+ X-Project-Id`
  - **DeleteTableModel**
    - changes of request param
      - `+ X-Project-Id`
      - `* ids: list<integer> -> list<string>`
  - **UpdateTableModel**
    - changes of request param
      - `+ X-Project-Id`
      - `* approval_info.id: integer -> string`
      - `* approval_info.biz_id: integer -> string`
      - `+ approval_info.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
      - `* attributes.id: integer -> string`
  - **CreateTableModel**
    - changes of request param
      - `+ X-Project-Id`
      - `* id: integer -> string`
      - `* model_id: integer -> string`
      - `* parent_table_id: integer -> string`
      - `* logic_tb_id: integer -> string`
      - `* biz_catalog_id: integer -> string`
      - `* l1_id: integer -> string`
      - `* l3_id: integer -> string`
      - `* quality_id: integer -> string`
      - `* approval_info.id: integer -> string`
      - `* approval_info.biz_id: integer -> string`
      - `+ approval_info.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
      - `* attributes.id: integer -> string`
  - **ListDerivativeIndexes**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `* data.value.records.atomic_index.id: integer -> string`
      - `* data.value.records.atomic_index.l3_id: integer -> string`
      - `* data.value.records.atomic_index.table_id: integer -> string`
      - `* data.value.records.approval_info.id: integer -> string`
      - `* data.value.records.approval_info.biz_id: integer -> string`
      - `+ data.value.records.dimension_groups.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`
  - **ShowDerivativeIndexById**
    - changes of request param
      - `+ X-Project-Id`
    - changes of response param
      - `* data.value.atomic_index.id: integer -> string`
      - `* data.value.atomic_index.l3_id: integer -> string`
      - `* data.value.atomic_index.table_id: integer -> string`
      - `* data.value.approval_info.id: integer -> string`
      - `* data.value.approval_info.biz_id: integer -> string`
      - `+ data.value.dimension_groups.biz_type: enum value [ATOMIC_METRIC,BIZ_CATALOG,COMPOSITE_METRIC,DERIVED_METRIC,DIRECTORY,FUNCTION,MODEL,SECRECY_LEVEL,STANDARD_ELEMENT_TEMPLATE,SUBJECT,SUMMARY_INDEX,TABLE_TYPE]`

### HuaweiCloud SDK DRS

- _Features_
  - Support the following APIs:
    - `ListDataLevelTableCompareJobs`
    - `CreateDataLevelTableCompareJob`
    - `DeleteCompareJob`
    - `StartPromptlyDataLevelTableCompareJob`
    - `ListDataCompareOverview`
    - `ListDataCompareDetail`
    - `ListContentCompareOverview`
    - `ListContentCompareDetail`
    - `ListsAgencyPermissions`
    - `ShowReplayResults`
- _Bug Fix_
  - None
- _Change_
  - **ShowDataFilteringResult**
    - changes of response param
      - `+ db_object_filtering_result.source`
      - `+ db_object_filtering_result.target_result`
      - `+ db_object_filtering_result.source_result`
      - `+ db_object_filtering_result.target_message`
      - `+ db_object_filtering_result.source_message`
  - **ShowDataProgress**
    - changes of response param
      - `+ data_process_info.source`
  - **UpdateDataProgress**
    - changes of request param
      - `+ data_process_info.source`
  - **CheckDataFilter**
    - changes of request param
      - `+ data_process_info.source`
  - **ExecuteJobAction**
    - changes of request param
      - `+ job.action_params.compare_task_param.data_process_info`
  - **BatchExecuteJobActions**
    - changes of request param
      - `+ jobs.action_params.compare_task_param.data_process_info`

### HuaweiCloud SDK DSC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowTopics**
    - changes of response param
      - `+ id`

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - Support the following APIs:
    - `ShowInstancesStatistics`
    - `ShowSlowLogDownload`
    - `CreateSlowLogDownload`
    - `UpgradeInstanceVersion`
    - `SearchAutoEnlargePolicy`
    - `ListCnInfosBeforeReduce`
    - `StartInstance`
    - `ShowUpgradeCandidateVersions`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the following APIs:
    - `ListRoutingBacklogPolicy`
    - `CreateRoutingBacklogPolicy`
    - `ShowRoutingBacklogPolicy`
    - `UpdateRoutingBacklogPolicy`
    - `DeleteRoutingBacklogPolicy`
    - `ListRoutingFlowControlPolicy`
    - `CreateRoutingFlowControlPolicy`
    - `ShowRoutingFlowControlPolicy`
    - `UpdateRoutingFlowControlPolicy`
    - `DeleteRoutingFlowControlPolicy`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of request param
      - `* engine: optional -> required`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstancesDetails**
    - changes of request param
      - `* engine: optional -> required`
      - `+ engine: enum value [rabbitmq]`

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the APIs `ShowReplayDelayStatus`, `SwitchLogReplay`
  - **StartResizeFlavorAction**
    - changes of request param
      - `+ resize_flavor.is_delay`
  - **ListPostgresqlDatabases**
    - changes of request param
      - `+ db`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of request param
      - `* engine: optional -> required`
      - `+ engine: enum value [rocketmq]`
      - `+ engine: enum value [reliability]`

### HuaweiCloud SDK SWR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSharedReposDetails**
    - changes of request param
      - `* center: optional -> required`

# 3.1.87 2024-04-03

### HuaweiCloud SDK CFW

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListFlowLogs**
    - changes of request param
      - `+ src_region_name`
      - `+ dst_region_name`
    - changes of response param
      - `+ data.records.dst_region_id`
      - `+ data.records.dst_region_name`
      - `+ data.records.src_region_id`
      - `+ data.records.src_region_name`
  - **ListAccessControlLogs**
    - changes of request param
      - `+ src_region_name`
      - `+ dst_region_name`
  - **ListAddressSets**
    - changes of request param
      - `+ address_set_type`
  - **ListAttackLogs**
    - changes of request param
      - `+ attack_rule_id`
      - `+ src_region_name`
      - `+ dst_region_name`
  - **UpdateAclRuleOrder**
    - changes of request param
      - `+ bottom`
  - **ListServiceSetDetail**
    - changes of request param
      - `+ query_service_set_type`
  - **AddAclRule**
    - changes of request param
      - `+ rules.applications`
      - `+ rules.applicationsJsonString`
      - `+ rules.profile`
      - `+ rules.sequence.bottom`
      - `+ rules.source.address_set_type`
      - `+ rules.source.predefined_group`
      - `- rules.source.address_group`
      - `- rules.source.address_group_names`
      - `* rules.source: object<RuleAddressDto> -> object<RuleAddressDtoForRequest>`
      - `+ rules.service.protocols`
      - `+ rules.service.predefined_group`
      - `+ rules.service.service_set_type`
      - `+ rules.service.service_group_names.protocols`
      - `+ rules.service.service_group_names.service_set_type`
  - **UpdateAclRule**
    - changes of request param
      - `+ applications`
      - `+ applicationsJsonString`
      - `+ profile`
      - `+ sequence.bottom`
      - `+ source.address_set_type`
      - `+ source.predefined_group`
      - `+ source.address_group_names.protocols`
      - `+ source.address_group_names.service_set_type`
      - `+ service.protocols`
      - `+ service.predefined_group`
      - `+ service.service_set_type`
  - **ListAclRules**
    - changes of request param
      - `+ application`
    - changes of response param
      - `+ data.records.sequence.bottom`
      - `+ data.records.source.address_set_type`
      - `+ data.records.source.predefined_group`
      - `+ data.records.source.address_group_names.protocols`
      - `+ data.records.source.address_group_names.service_set_type`
      - `+ data.records.service.protocols`
      - `+ data.records.service.predefined_group`
      - `+ data.records.service.service_set_type`
  - **ListServiceItems**
    - changes of request param
      - `+ query_service_set_type`
  - **ListAddressItems**
    - changes of request param
      - `+ query_address_set_type`
  - **ListServiceSets**
    - changes of request param
      - `+ query_service_set_type`
  - **ListDomainSets**
    - changes of response param
      - `+ data.records.rules`
  - **ListFirewallDetail**
    - changes of request param
      - `+ name`
    - changes of response param
      - `+ data.records.tags`
      - `+ data.records.flavor.default_bandwidth`
      - `+ data.records.flavor.default_eip_count`
      - `+ data.records.flavor.default_log_storage`
      - `+ data.records.flavor.default_vpc_count`
  - **ListFirewallList**
    - changes of response param
      - `+ data.records.tags`
      - `+ data.records.flavor.default_bandwidth`
      - `+ data.records.flavor.default_eip_count`
      - `+ data.records.flavor.default_log_storage`
      - `+ data.records.flavor.default_vpc_count`

### HuaweiCloud SDK Config

- _Features_
  - Support the API `UpdateOrganizationPolicyAssignment`
- _Bug Fix_
  - None
- _Change_
  - **ShowOrganizationPolicyAssignmentDetailedStatus**
    - changes of request param
      - `+ organization_policy_assignment_id`
  - **ListOrganizationConformancePackStatuses**
    - changes of request param
      - `+ organization_conformance_pack_id`
  - **ShowOrganizationConformancePackDetailedStatuses**
    - changes of request param
      - `+ organization_conformance_pack_id`
  - **ListOrganizationPolicyAssignments**
    - changes of request param
      - `+ organization_policy_assignment_id`
  - **ListOrganizationConformancePacks**
    - changes of request param
      - `+ organization_conformance_pack_id`

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowQuota**
    - changes of response param
      - `+ quotas`
      - `+ is_success`
      - `- Quotas`
  - **ListJobResources**
    - changes of response param
      - `+ groups.group_name`
      - `+ groups.status`
      - `+ groups.resources`
      - `+ groups.details`
      - `+ groups.create_time`
      - `+ groups.update_time`
      - `+ groups.owner`
      - `+ groups.is_async`
      - `* groups: list<object> -> list<PackageResourceGroup>`
  - **CreateSqlJob**
    - changes of request param
      - `+ engine_type: enum value [trino,spark]`
  - **CreateQueueProperty**
    - changes of request param
      - `* properties: object -> object<CommonQueueProperty>`
  - **ShowFlinkJob**
    - changes of response param
      - `+ job_detail.user_name`
      - `+ job_detail.duration`
      - `+ job_detail.root_id`
      - `+ job_detail.graph_editor_enabled`
      - `+ job_detail.has_savepoint`
      - `+ job_detail.edge_group_ids`
      - `+ job_detail.restart_times`
      - `+ job_detail.job_config.real_cu_number`
      - `* job_detail.job_config: object<FlinkJobConfigDetail> -> object<FlinkJobConfig>`
      - `* job_detail: object<FlinkJobDetail> -> object<FlinkJob>`
  - **ListFlinkJobs**
    - changes of response param
      - `* is_success: boolean -> string`
      - `+ job_list.jobs.queue_name`
      - `+ job_list.jobs.edge_group_ids`
      - `+ job_list.jobs.restart_times`
      - `+ job_list.jobs.savepoint_path`
      - `+ job_list.jobs.job_config.runtime_config`
      - `+ job_list.jobs.job_config.graph_editor_enabled`
      - `+ job_list.jobs.job_config.graph_editor_data`
      - `+ job_list.jobs.job_config.resume_max_num`
      - `+ job_list.jobs.job_config.checkpoint_path`
      - `+ job_list.jobs.job_config.config_url`
      - `+ job_list.jobs.job_config.tm_cus`
      - `+ job_list.jobs.job_config.tm_slot_num`
      - `+ job_list.jobs.job_config.image`
      - `+ job_list.jobs.job_config.feature`
      - `+ job_list.jobs.job_config.flink_version`
      - `+ job_list.jobs.job_config.operator_config`
      - `+ job_list.jobs.job_config.static_estimator_config`
      - `+ job_list.jobs.job_config.real_cu_number`
      - `* job_list.jobs: list<FlinkJobInfo> -> list<FlinkJob>`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the APIs `ShowServerAutoRecovery`, `RegisterServerAutoRecovery`
  - **ResizePostPaidServer**
    - changes of request param
      - `+ resize.cpu_options`
  - **ShowServer**
    - changes of response param
      - `+ server.cpu_options.hw:cpu_threads: enum value [1,2]`
  - **ListServersDetails**
    - changes of response param
      - `+ servers.cpu_options.hw:cpu_threads: enum value [1,2]`
  - **ChangeServerOsWithCloudInit**
    - changes of request param
      - `+ os-change.isAutoPay`
  - **ChangeServerOsWithoutCloudInit**
    - changes of request param
      - `+ os-change.isAutoPay`
  - **ResizeServer**
    - changes of request param
      - `+ resize.cpu_options`
  - **CreateServers**
    - changes of request param
      - `+ server.cpu_options`
  - **CreatePostPaidServers**
    - changes of request param
      - `+ server.cpu_options`

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListTenantVpcIgws**
    - changes of request param
      - `+ offset`
      - `+ marker`
  - **ListProjectGeipBindings**
    - changes of request param
      - `+ offset`
      - `+ marker`
    - changes of response param
      - `+ geip_bindings.instance_type`
      - `+ geip_bindings.instance_id`
      - `- geip_bindings.binding_instance_type`
      - `- geip_bindings.binding_instance_id`
      - `+ geip_bindings.gcbandwidth.id`
      - `+ geip_bindings.gcbandwidth.admin_status`
      - `+ geip_bindings.gcbandwidth.size`
      - `+ geip_bindings.gcbandwidth.short_id`
      - `+ geip_bindings.gcbandwidth.sla_level`
      - `+ geip_bindings.gcbandwidth.dscp`
      - `* geip_bindings.gcbandwidth: object -> object<BackboneBandwidthResp>`
      - `+ geip_bindings.vnic.private_ip_address`
      - `+ geip_bindings.vnic.device_id`
      - `+ geip_bindings.vnic.device_owner`
      - `+ geip_bindings.vnic.vpc_id`
      - `+ geip_bindings.vnic.port_id`
      - `+ geip_bindings.vnic.mac`
      - `+ geip_bindings.vnic.vtep`
      - `+ geip_bindings.vnic.vni`
      - `+ geip_bindings.vnic.instance_id`
      - `+ geip_bindings.vnic.instance_type`
      - `+ geip_bindings.vnic.port_profile`
      - `* geip_bindings.vnic: object -> object<InstanceVnicResp>`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateDependencyVersion**
    - changes of request param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
    - changes of response param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ShowDependencyVersion**
    - changes of response param
      - `+ is_shared`
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ListDependencies**
    - changes of response param
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ListDependencyVersion**
    - changes of response param
      - `+ dependencies.is_shared`
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ShowFunctionCode**
    - changes of response param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **UpdateFunctionCode**
    - changes of response param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ImportFunction**
    - changes of response param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ListFunctions**
    - changes of response param
      - `+ functions.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **CreateFunction**
    - changes of request param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0,Custom Image]`
    - changes of response param
      - `+ is_return_stream`
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ShowFunctionConfig**
    - changes of response param
      - `+ is_return_stream`
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **UpdateFunctionConfig**
    - changes of request param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0,Custom Image]`
    - changes of response param
      - `+ enable_cloud_debug`
      - `+ is_return_stream`
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **UpdateFunctionMaxInstanceConfig**
    - changes of response param
      - `+ is_return_stream`
      - `+ enable_cloud_debug`
      - `+ enable_auth_in_header`
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ListBridgeFunctions**
    - changes of response param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ListStatistics**
    - changes of response param
      - `+ gpu_gbs`
  - **CreateFunctionVersion**
    - changes of response param
      - `+ runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
      - `+ dependencies.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`
  - **ListFunctionVersions**
    - changes of response param
      - `- versions.enable_cloud_debug`
      - `+ versions.runtime: enum value [Java17,Python3.10,Node.js16.17,Node.js18.15,C#(.NET Core 6.0),Cangjie1.0]`

### HuaweiCloud SDK HSS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowProductdataOfferingInfos**
    - changes of response param
      - `* charging_mode: object -> string`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowConnectorTask**
    - changes of response param
      - `+ topics_regex`
  - **CreateConnectorTask**
    - changes of response param
      - `+ topics_regex`
  - **ListConnectorTasks**
    - changes of response param
      - `+ topics_regex`
      - `+ tasks.topics_regex`

### HuaweiCloud SDK KMS

- _Features_
  - Support the APIs `GenerateMac`, `VerifyMac`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RDS

- _Features_
  - Support the APIs `ShowReplayDelayStatus`, `SwitchLogReplay`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateConsumerGroup**
    - changes of request param
      - `- from_beginning`
  - **ListMessageTrace**
    - changes of response param
      - `+ trace.trace_type: enum value [SubBefore,SubAfter]`
      - `- trace.trace_type: enum value [Sub]`
  - **ListInstanceConsumerGroups**
    - changes of response param
      - `* max: number -> int32`
      - `* remaining: number -> int32`
      - `* next_offset: number -> int32`
      - `* previous_offset: number -> int32`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSubNetworkInterfaces**
    - changes of response param
      - `+ sub_network_interfaces.security_enabled`
  - **CreateSubNetworkInterface**
    - changes of response param
      - `+ sub_network_interface.security_enabled`
  - **BatchCreateSubNetworkInterface**
    - changes of response param
      - `+ sub_network_interfaces.security_enabled`
  - **ShowSubNetworkInterface**
    - changes of response param
      - `+ sub_network_interface.security_enabled`
  - **UpdateSubNetworkInterface**
    - changes of response param
      - `+ sub_network_interface.security_enabled`
  - **MigrateSubNetworkInterface**
    - changes of response param
      - `+ sub_network_interfaces.security_enabled`

# 3.1.86 2024-04-01

### HuaweiCloud SDK BMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListBareMetalServers**
    - changes of response param
      - `- servers.image.name`
      - `- servers.image.__os_type`
      - `- servers.image.links`
  - **ListBareMetalServerDetails**
    - changes of response param
      - `- server.image.name`
      - `- server.image.__os_type`
      - `- server.image.links`

### HuaweiCloud SDK KPS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateKeypair**
    - changes of request param
      - `+ keypair.key_protection.encryption.kms_key_id`
  - **ImportPrivateKey**
    - changes of request param
      - `+ keypair.key_protection.encryption.kms_key_id`
    - changes of response param
      - `+ keypair.key_protection.encryption.kms_key_id`

# 3.1.85 2024-03-28

### HuaweiCloud SDK APIG

- _Features_
  - Support the following APIs:
    - `UpdateSlDomainSettingV2`
    - `ExportApiDefinitionsAsync`
    - `ImportApiDefinitionsAsync`
    - `ShowAsyncTaskResult`
    - `ListInstanceFeatures`
- _Bug Fix_
  - None
- _Change_
  - **DeleteGatewayResponseTypeV2**
    - changes of request param
      - `+ response_type: enum value [ORCHESTRATION_PARAMETER_NOT_FOUND,ORCHESTRATION_FAILURE]`
  - **ShowDetailsOfGatewayResponseTypeV2**
    - changes of request param
      - `+ response_type: enum value [ORCHESTRATION_PARAMETER_NOT_FOUND,ORCHESTRATION_FAILURE]`
  - **UpdateGatewayResponseTypeV2**
    - changes of request param
      - `+ response_type: enum value [ORCHESTRATION_PARAMETER_NOT_FOUND,ORCHESTRATION_FAILURE]`
      - `+ headers`
  - **ShowDetailsOfApiGroupV2**
    - changes of response param
      - `+ sl_domain_access_enabled`
  - **UpdateApiGroupV2**
    - changes of response param
      - `+ sl_domain_access_enabled`
  - **ShowDetailsOfInstanceV2**
    - changes of response param
      - `+ public_ipv6_ips`
      - `+ unreliable_ips`
      - `+ node_ipv6_ips`
      - `+ enable_fullstack_ipv6`
      - `+ publicips.ipv6_address`
  - **UpdateInstanceV2**
    - changes of response param
      - `+ public_ipv6_ips`
      - `+ unreliable_ips`
      - `+ node_ipv6_ips`
      - `+ enable_fullstack_ipv6`
      - `+ publicips.ipv6_address`
  - **CreateApiGroupV2**
    - changes of response param
      - `+ sl_domain_access_enabled`
  - **ListApiGroupsV2**
    - changes of response param
      - `+ sl_domain_access_enabled`
      - `+ groups.sl_domain_access_enabled`
  - **ShowDetailsOfApiV2**
    - changes of response param
      - `+ func_info.req_protocol`
      - `+ api_group_info.sl_domain_access_enabled`
      - `+ policy_functions.req_protocol`
  - **UpdateApiV2**
    - changes of request param
      - `+ func_info.req_protocol`
      - `+ policy_functions.req_protocol`
    - changes of response param
      - `+ func_info.req_protocol`
      - `+ api_group_info.sl_domain_access_enabled`
      - `+ policy_functions.req_protocol`
  - **ListApiVersionDetailV2**
    - changes of response param
      - `+ func_info.req_protocol`
      - `+ api_group_info.sl_domain_access_enabled`
      - `+ policy_functions.req_protocol`
  - **CreateApiV2**
    - changes of request param
      - `+ func_info.req_protocol`
      - `+ policy_functions.req_protocol`
    - changes of response param
      - `+ func_info.req_protocol`
      - `+ api_group_info.sl_domain_access_enabled`
      - `+ policy_functions.req_protocol`
  - **ListApisV2**
    - changes of response param
      - `+ apis.api_group_info.sl_domain_access_enabled`

### HuaweiCloud SDK CBR

- _Features_
  - Support the following APIs:
    - `ListOrganizationPolicies`
    - `CreateOrganizationPolicy`
    - `ShowOrganizationPolicy`
    - `UpdateOrganizationPolicy`
    - `DeleteOrganizationPolicy`
    - `ListOrganizationPolicyDetail`
- _Bug Fix_
  - None
- _Change_
  - **ShowBackup**
    - changes of response param
      - `+ backup.incremental`
      - `- backup.extend_info.incremental`
  - **UpdateBackup**
    - changes of response param
      - `+ backup.incremental`
      - `- backup.extend_info.incremental`
  - **ListBackups**
    - changes of response param
      - `+ backups.incremental`
      - `- backups.extend_info.incremental`
  - **ListVault**
    - changes of response param
      - `- sys_lock_source_service`
  - **CreateVault**
    - changes of request param
      - `+ vault.sys_lock_source_service`
  - **ListExternalVault**
    - changes of response param
      - `- sys_lock_source_service`

### HuaweiCloud SDK CC

- _Features_
  - Support the following APIs:
    - `ListCentralNetworksByTags`
    - `ListCentralNetworkErRouteTableAttachments`
    - `CreateCentralNetworkErRouteTableAttachment`
    - `ShowCentralNetworkErRouteTableAttachment`
    - `UpdateCentralNetworkErRouteTableAttachment`
- _Bug Fix_
  - None
- _Change_
  - **ListGlobalConnectionBandwidthConfigs**
    - changes of response param
      - `+ configs.ratio_95peak_plus`
      - `+ configs.enable_area_bandwidth`
      - `+ configs.enable_change_95`
      - `+ configs.enable_spec_code`
      - `+ configs.size_range.type`
      - `- configs.size_range.charge_mode`
  - **ListGlobalConnectionBandwidths**
    - changes of response param
      - `+ globalconnection_bandwidths.local_area`
      - `+ globalconnection_bandwidths.remote_area`
      - `+ globalconnection_bandwidths.admin_state`
  - **CreateGlobalConnectionBandwidth**
    - changes of response param
      - `+ globalconnection_bandwidth.local_area`
      - `+ globalconnection_bandwidth.remote_area`
      - `+ globalconnection_bandwidth.admin_state`
  - **ShowGlobalConnectionBandwidth**
    - changes of response param
      - `+ globalconnection_bandwidth.local_area`
      - `+ globalconnection_bandwidth.remote_area`
      - `+ globalconnection_bandwidth.admin_state`
  - **UpdateGlobalConnectionBandwidth**
    - changes of response param
      - `+ globalconnection_bandwidth.local_area`
      - `+ globalconnection_bandwidth.remote_area`
      - `+ globalconnection_bandwidth.admin_state`
  - **ListSupportBindingConnectionBandwidths**
    - changes of response param
      - `+ globalconnection_bandwidths.local_area`
      - `+ globalconnection_bandwidths.remote_area`
      - `+ globalconnection_bandwidths.admin_state`

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowNodePoolConfigurationDetails**
    - changes of response param
      - `- kubelet`
  - **ShowClusterConfigurationDetails**
    - changes of response param
      - `- kube-apiserver`
  - **ShowCluster**
    - changes of response param
      - `- spec.enableAutopilot`
  - **UpdateCluster**
    - changes of response param
      - `- spec.enableAutopilot`
  - **DeleteCluster**
    - changes of request param
      - `+ lts_reclaim_policy`
    - changes of response param
      - `- spec.enableAutopilot`
  - **CreateCluster**
    - changes of request param
      - `- spec.enableAutopilot`
    - changes of response param
      - `- spec.enableAutopilot`
  - **ListClusters**
    - changes of response param
      - `- items.spec.enableAutopilot`

### HuaweiCloud SDK CFW

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListFlowLogs**
    - changes of response param
      - `* data.records.bytes: int32 -> double`

### HuaweiCloud SDK CTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateTracker**
    - changes of request param
      - `+ agency_name`
  - **CreateTracker**
    - changes of request param
      - `+ agency_name`
    - changes of response param
      - `+ agency_name`
  - **ListTrackers**
    - changes of response param
      - `+ trackers.agency_name`
  - **UpdateNotification**
    - changes of request param
      - `+ agency_name`
    - changes of response param
      - `+ agency_name`
  - **CreateNotification**
    - changes of request param
      - `+ agency_name`
    - changes of response param
      - `+ agency_name`
  - **ListNotifications**
    - changes of response param
      - `+ notifications.agency_name`

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSqlJobs**
    - changes of request param
      - `+ job-type: enum value [ALL]`
  - **ShowSqlJobDetail**
    - changes of response param
      - `+ owner`
      - `+ database_name`
      - `+ compress`
      - `+ escape_char`
      - `+ is_success`
      - `+ message`
      - `+ table_name`
      - `+ export_mode`
      - `+ data_path`
      - `+ tags`
      - `+ duration`
      - `+ with_column_header`
      - `+ quote_char`
      - `+ timestamp_format`
      - `+ start_time`
      - `+ job_id`
      - `+ delimiter`
      - `+ data_type`
      - `+ date_format`
  - **ShowSqlJobProgress**
    - changes of response param
      - `+ sub_jobs`
      - `+ job_id`
      - `+ progress`
      - `+ is_success`
      - `+ message`
      - `+ status`
      - `+ sub_job_id`
  - **ListAuthorizationPrivileges**
    - changes of response param
      - `+ privileges`
      - `+ object_type`
      - `+ object_name`
      - `+ count`
      - `+ is_success`
      - `+ message`
  - **ListPartitions**
    - changes of response param
      - `+ partitions`
      - `+ is_success`
      - `+ message`
  - **ShowEnhancedConnectionPrivilege**
    - changes of response param
      - `+ privileges`
      - `+ connection_id`
      - `+ is_success`
      - `+ message`
  - **ShowFlinkJob**
    - changes of response param
      - `+ job_detail`
      - `+ is_success`
      - `+ message`
  - **DeleteFlinkJob**
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **ListFlinkJobs**
    - changes of response param
      - `+ job_list`
      - `+ is_success`
      - `+ message`
  - **ShowFlinkJobExecutionGraph**
    - changes of response param
      - `+ is_success`
      - `+ message`
      - `+ execute_graph`
  - **ShowDliAgency**
    - changes of response param
      - `+ current_roles`
      - `+ is_success`
      - `+ message`
      - `+ version`
  - **CreateDliAgency**
    - changes of request param
      - `* body: object<CreateAgencyRequest> -> object<CreateDliAgencyRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **UpdateJobResourceOwner**
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **ShowQueue**
    - changes of response param
      - `+ owner`
      - `+ chargingMode`
      - `+ create_time`
      - `+ cu_scale_in_limit`
      - `+ resource_type`
      - `+ cu_spec`
      - `+ description`
      - `+ cuCount`
      - `+ elastic_resource_pool_name`
      - `+ is_success`
      - `+ message`
      - `+ enterprise_project_id`
      - `+ queueName`
      - `+ resource_mode`
      - `+ cu_scale_out_limit`
      - `+ queueType`
      - `+ resource_id`
      - `+ queue_id`
  - **RunQueueAction**
    - changes of response param
      - `+ queue_name`
      - `+ result`
      - `+ job_id`
      - `+ is_success`
      - `+ message`
  - **ListQueuePlans**
    - changes of response param
      - `+ plans`
      - `+ is_success`
      - `+ message`
  - **CreateQueuePlan**
    - changes of request param
      - `* body: object<SetQueuePlanReq> -> object<QueuePlanRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **BatchDeleteQueuePlans**
    - changes of request param
      - `* body: object<QueuePlanIds> -> object<BatchDeleteQueuePlansRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **DeleteQueuePlan**
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **UpdateQueuePlan**
    - changes of request param
      - `* body: object<SetQueuePlanReq> -> object<QueuePlanRequestBody>`
    - changes of response param
      - `+ queue_name`
      - `+ is_success`
      - `+ message`
      - `+ plan_id`
  - **CreateGlobalVariable**
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **UpdateGlobalVariable**
    - changes of request param
      - `* body: object<UpdateGlobalValueReq> -> object<UpdateGlobalVariableRequestBody>`
  - **DeleteFlinkSqlJobTemplate**
    - changes of response param
      - `+ template`
      - `+ is_success`
      - `+ message`
  - **UpdateFlinkSqlJobTemplate**
    - changes of request param
      - `* body: object<UpdateFlinkTemplateRequestBody> -> object<UpdateFlinkSqlJobTemplateRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **RegisterBucket**
    - changes of request param
      - `* body: object<ObsBuckets> -> object<RegisterBucketRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **UpdateFlinkSqlJob**
    - changes of response param
      - `+ is_success`
      - `+ message`
      - `+ job`
  - **UpdateFlinkJarJob**
    - changes of request param
      - `* body: object<UpdateFlinkJarRequestBody> -> object<UpdateFlinkJarJobRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
      - `+ job`
  - **BatchDeleteFlinkJobs**
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **ShowFlinkMetric**
    - changes of response param
      - `+ metrics`
      - `+ is_success`
      - `+ message`
  - **ExportFlinkJobs**
    - changes of request param
      - `* body: object<ExportFlinkJobRequestBody> -> object<ExportFlinkJobsRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
      - `+ zip_file`
  - **ImportFlinkJobs**
    - changes of response param
      - `+ job_mapping`
      - `+ is_success`
      - `+ message`
  - **CreateFlinkSqlJobGraph**
    - changes of request param
      - `+ flink_version: enum value [1.1,1.12]`
      - `+ graph_type: enum value [simple_graph,job_graph]`
      - `* body: object<GenStreamGraphReq> -> object<CreateFlinkSqlJobGraphRequestBody>`
    - changes of response param
      - `+ stream_graph`
      - `+ error_code`
      - `+ is_success`
      - `+ message`
  - **CreateIefMessageChannel**
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **ListQueueProperties**
    - changes of response param
      - `* properties: list<object> -> list<Property>`
  - **UploadJobResources**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
      - `* body: object<UploadPackageGroupReq> -> object<UploadJobResourcesRequestBody>`
  - **ListSparkJobs**
    - changes of response param
      - `+ total`
      - `+ sessions`
      - `+ create_time`
      - `+ from`
  - **CreateSparkJob**
    - changes of request param
      - `* body: object<BatchJobInfo> -> object<CreateSparkJobRequestBody>`
  - **CreateSqlJob**
    - changes of request param
      - `+ engine_type`
      - `* tags: list<TmsTagEntity> -> list<Tag>`
  - **CreateDatabase**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
  - **CreateTable**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
      - `* body: object<CreateTableReq> -> object<CreateTableRequestBody>`
  - **CreateQueue**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
      - `* body: object<CreateQueueReq> -> object<CreateQueueRequestBody>`
  - **CreateEnhancedConnection**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
      - `* body: object<CreateEnhancedConnectionsReq> -> object<CreateEnhancedConnectionRequestBody>`
  - **ListElasticResourcePools**
    - changes of response param
      - `* elastic_resource_pools: list<ElasticResourcePoolsResponse> -> list<ElasticResourcePool>`
  - **CreateElasticResourcePool**
    - changes of request param
      - `* tags: list<TmsTag> -> list<Tag>`
  - **UpdateElasticResourcePoolQueue**
    - changes of request param
      - `* queue_scaling_policies: list<QueueScalingPolicyInfo> -> list<QueueScalingPolicy>`
      - `* body: object<UpdateElasticResourcePoolQueueScalingPolicyInfo> -> object<UpdateElasticResourcePoolQueueRequestBody>`
  - **ListFlinkSqlJobTemplates**
    - changes of response param
      - `+ template_list`
      - `+ is_success`
      - `+ message`
  - **CreateFlinkSqlJobTemplate**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
      - `* body: object<CreateFlinkTemplateRequestBody> -> object<CreateFlinkSqlJobTemplateRequestBody>`
    - changes of response param
      - `+ template`
      - `+ is_success`
      - `+ message`
  - **CreateFlinkSqlJob**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
    - changes of response param
      - `+ is_success`
      - `+ message`
      - `+ job`
  - **CreateFlinkJarJob**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
      - `* body: object<CreateFlinkJarRequestBody> -> object<CreateFlinkJarJobRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
      - `+ job`
  - **UpdateFlinkJobStatusReport**
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **RunIefJobActionCallBack**
    - changes of request param
      - `* state: object<state> -> object<State>`
      - `* body: object<IefFlinkJobMessagesReq> -> object<RunIefJobActionCallBackRequestBody>`
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **CreateIefSystemEvents**
    - changes of response param
      - `+ is_success`
      - `+ message`
  - **CreateDatasourceConnection**
    - changes of request param
      - `* tags: list<TmsTagEntity> -> list<Tag>`
      - `* body: object<CreateDatasourceConnectionReq> -> object<CreateDatasourceConnectionRequestBody>`
  - **ListElasticResourcePoolQueues**
    - changes of response param
      - `* queues.queue_scaling_policies: list<QueueScalingPoliciesResponse> -> list<QueueScalingPolicy>`
      - `* queues: list<QueueInfo> -> list<ElasticResourcePoolQueue>`
  - **ShowSparkJobTemplate**
    - changes of response param
      - `* body: object<BatchJobInfo> -> object<SparkJobTemplateDetail>`
  - **ListSparkJobTemplates**
    - changes of response param
      - `* body: object<BatchJobInfo> -> object<SparkJobTemplateDetail>`
      - `* templates: list<JobTemplateInfo> -> list<SparkJobTemplate>`

### HuaweiCloud SDK DSC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the following APIs:
    - `ListRelationDb`
    - `ListRelationTable`
    - `ListRelationColumn`
    - `ListRelationBuckets`
    - `ListRelationFile`

### HuaweiCloud SDK GA

- _Features_
  - Support the APIs `ListResourcesByTag`, `CountResourcesByTag`, `ListTags`
- _Bug Fix_
  - None
- _Change_
  - **CreateAccelerator**
    - changes of request param
      - `+ accelerator.ip_sets.ip_type: enum value [IPV6]`

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RunImageMediaTagging**
    - changes of request param
      - `- use_default_tags`

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the API `UpdateApplication`
- _Bug Fix_
  - None
- _Change_
  - **CreateBatchTask**
    - changes of request param
      - `+ task_mode`
      - `+ task_ext_info`
    - changes of response param
      - `+ task_ext_info`
      - `+ task_mode`
  - **ListBatchTasks**
    - changes of response param
      - `+ task_ext_info`
      - `+ task_mode`
      - `+ batchtasks.task_mode`
      - `+ batchtasks.task_ext_info`
  - **ShowBatchTask**
    - changes of response param
      - `+ task_ext_info`
      - `+ task_mode`
      - `+ batchtask.task_mode`
      - `+ batchtask.task_ext_info`
  - **CreateOtaPackage**
    - changes of request param
      - `+ file_location.obs_location.sign`
    - changes of response param
      - `+ file_location.obs_location.sign`
  - **ShowOtaPackage**
    - changes of response param
      - `+ file_location.obs_location.sign`

### HuaweiCloud SDK Kafka

- _Features_
  - Support the following APIs:
    - `ShowDiagnosisPreCheck`
    - `ListMessageDiagnosisReports`
    - `CreateMessageDiagnosisTask`
    - `BatchDeleteMessageDiagnosisReports`
    - `ShowMessageDiagnosisReport`
- _Bug Fix_
  - None
- _Change_
  - **CreateInstanceByEngine**
    - changes of request param
      - `+ ipv6_enable`
  - **ShowInstance**
    - changes of response param
      - `+ broker_ssl_enable`
      - `+ new_auth_cert`
      - `+ available_zone_names`
  - **ShowConnectorTask**
    - changes of response param
      - `+ source_task.rename_topic_enabled`
      - `- source_task.rename_topic_enable`
  - **CreatePostPaidInstance**
    - changes of request param
      - `- ipv6_enable`
  - **ListInstances**
    - changes of response param
      - `+ broker_ssl_enable`
      - `+ new_auth_cert`
      - `+ available_zone_names`
      - `+ instances.broker_ssl_enable`
      - `+ instances.available_zone_names`
      - `+ instances.new_auth_cert`
  - **CreateConnectorTask**
    - changes of request param
      - `+ source_task.rename_topic_enabled`
      - `- source_task.rename_topic_enable`
    - changes of response param
      - `+ source_task.rename_topic_enabled`
      - `- source_task.rename_topic_enable`
  - **ListConnectorTasks**
    - changes of response param
      - `+ tasks.source_task.rename_topic_enabled`
      - `- tasks.source_task.rename_topic_enable`
  - **CreateReassignmentTask**
    - changes of request param
      - `+ time_estimate`
    - changes of response param
      - `+ reassignment_time`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeMvsInvoice**
    - changes of response param
      - `+ result.reverse_issue`
  - **RecognizeThailandLicensePlate**
    - changes of response param
      - `+ result.province`

### HuaweiCloud SDK RDS

- _Features_
  - Support the API `BatchStopInstance`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListMessageTrace**
    - changes of response param
      - `* trace.retry_times: string -> int32`
  - **CreateInstanceByEngine**
    - changes of request param
      - `+ engine_version: enum value [[4.8.0](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[5.x](tag:hcs)]`
      - `- engine_version: enum value [4.8.0]`
      - `+ product_id: enum value [[c6.4u8g.cluster.small](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.2u8g.single.x86](tag:hcs),[c6.4u8g.cluster](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.4u16g.cluster.x86](tag:hcs),[c6.8u16g.cluster](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.8u32g.cluster.x86](tag:hcs),[c6.12u24g.cluster](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.16u64g.cluster.x86](tag:hcs),[c6.16u32g.cluster](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.32u128g.cluster.x86](tag:hcs),[c6.2u8g.single.arm](tag:hcs),[c6.4u16g.cluster.arm](tag:hcs),[c6.8u32g.cluster.arm](tag:hcs),[c6.16u64g.cluster.arm](tag:hcs),[c6.32u128g.cluster.arm](tag:hcs)]`
      - `- product_id: enum value [c6.4u8g.cluster.small,c6.4u8g.cluster,c6.8u16g.cluster,c6.12u24g.cluster,c6.16u32g.cluster]`
  - **CreateConsumerGroupOrBatchDeleteConsumerGroup**
    - changes of request param
      - `- createdAt`
      - `- permissions`
  - **ListInstanceConsumerGroups**
    - changes of response param
      - `* groups.createdAt: string -> int64`
  - **BatchUpdateConsumerGroup**
    - changes of request param
      - `- groups.createdAt`
      - `- groups.permissions`
      - `* groups: list<ConsumerGroup> -> list<CreateOrUpdateConsumerGroup>`
  - **CreatePostPaidInstance**
    - changes of request param
      - `+ engine_version: enum value [[4.8.0](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[5.x](tag:hcs)]`
      - `- engine_version: enum value [4.8.0]`
      - `+ product_id: enum value [[c6.4u8g.cluster](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.4u16g.cluster.x86](tag:hcs),[c6.8u16g.cluster](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.8u32g.cluster.x86](tag:hcs),[c6.12u24g.cluster](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.16u64g.cluster.x86](tag:hcs),[c6.16u32g.cluster](tag:hws,hws_eu,hws_hk,ocb,hws_ocb,ctc,g42,hk_g42,tm,hk_tm)[c6.32u128g.cluster.x86](tag:hcs),[c6.4u16g.cluster.arm](tag:hcs),[c6.8u32g.cluster.arm](tag:hcs),[c6.16u64g.cluster.arm](tag:hcs),[c6.32u128g.cluster.arm](tag:hcs)]`
      - `- product_id: enum value [c6.4u8g.cluster,c6.8u16g.cluster,c6.12u24g.cluster,c6.16u32g.cluster]`

### HuaweiCloud SDK SMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **PublishHttpDetect**
    - changes of request param
      - `+ protocol: enum value [https]`
      - `- protocol: enum value [https;]`
  - **UpdateTaskStatus**
    - changes of request param
      - `+ operation: enum value [network_check]`
  - **UpdateCopyState**
    - changes of request param
      - `+ copystate: enum value [FINISHED]`
  - **UpdateNetworkCheckInfo**
    - changes of request param
      - `+ domain_connectivity`
      - `+ destination_connectivity`
  - **ListTasks**
    - changes of response param
      - `+ tasks.network_check_info.domain_connectivity`
      - `+ tasks.network_check_info.destination_connectivity`
  - **ShowTask**
    - changes of response param
      - `+ network_check_info.domain_connectivity`
      - `+ network_check_info.destination_connectivity`

# 3.1.84 2024-03-21

### HuaweiCloud SDK AOM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **DeletePromInstance**
    - changes of request param
      - `+ Enterprise-Project-Id`
  - **ListPromInstance**
    - changes of request param
      - `+ Enterprise-Project-Id`
      - `+ prom_type: enum value [default]`
      - `+ prom_type: enum value [DEFAULT]`
    - changes of response param
      - `+ prometheus.prom_type: enum value [default]`
      - `- prometheus.prom_type: enum value [DEFAULT]`

### HuaweiCloud SDK CCE

- _Features_
  - Support the API `ShowNodePoolConfigurationDetails`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowVerifyDomainOwnerInfo**
    - changes of response param
      - `+ file_verify_domains`

### HuaweiCloud SDK CodeArtsDeploy

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateApp**
    - changes of request param
      - `+ group_id`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the following APIs:
    - `ShowBusinessAssetsTree`
    - `RenewDataProfile`
    - `ListSecurityDatasourceConfigurations`
    - `ListSecurityDatasourceUrls`
    - `ListSecurityDatasourceActions`
    - `ListSecurityRoleActions`
    - `ListSecuritySecrecyLevels`
    - `CreateSecuritySecrecyLevel`
    - `ShowSecuritySecrecyLevel`
    - `UpdateSecuritySecrecyLevel`
    - `DeleteSecuritySecrecyLevel`
    - `BatchDeleteSecuritySecrecyLevels`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DLI

- _Features_
  - Support the APIs `ListCatalogs`, `RunCatalogAction`, `ShowCatalog`
- _Bug Fix_
  - None
- _Change_
  - **RunAuthorizationAction**
    - changes of request param
      - `+ grant_project_id`
      - `- projectId`

### HuaweiCloud SDK DRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowPositionResult**
    - changes of response param
      - `+ status`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateFunction**
    - changes of request param
      - `+ encrypted_user_data`
      - `+ mount_config`
      - `+ is_stateful_function`
      - `+ enable_dynamic_memory`
  - **UpdateVersionAlias**
    - changes of request param
      - `+ additional_version_strategy`
  - **DeleteFunctionTrigger**
    - changes of request param
      - `+ trigger_type_code: enum value [IOTDA]`
  - **ShowFunctionTrigger**
    - changes of request param
      - `+ trigger_type_code: enum value [IOTDA]`
  - **UpdateTrigger**
    - changes of request param
      - `+ trigger_type_code: enum value [IOTDA]`

### HuaweiCloud SDK HSS

- _Features_
  - Support the APIs `CreateQuotasOrder`, `ShowProductdataOfferingInfos`
- _Bug Fix_
  - None
- _Change_
  - **DeleteResourceInstanceTag**
    - changes of request param
      - `- x-auth-token`
  - **ShowAssetStatistic**
    - changes of request param
      - `- x-auth-token`
    - changes of response param
      - `- environment_num`
      - `- core_conf_file_num`
  - **StopProtection**
    - changes of request param
      - `- x-auth-token`
  - **ShowRiskConfigDetail**
    - changes of request param
      - `- x-auth-token`
  - **RunImageSynchronize**
    - changes of request param
      - `- x-auth-token`
  - **AssociatePolicyGroup**
    - changes of request param
      - `- x-auth-token`
  - **ShowVulScanPolicy**
    - changes of request param
      - `- x-auth-token`
  - **ChangeVulScanPolicy**
    - changes of request param
      - `- x-auth-token`
  - **CreateVulnerabilityScanTask**
    - changes of request param
      - `- x-auth-token`
  - **ShowVulStatics**
    - changes of request param
      - `- x-auth-token`
  - **ListJarPackageStatistics**
    - changes of request param
      - `- x-auth-token`
  - **ListJarPackageHostInfo**
    - changes of request param
      - `- x-auth-token`
  - **ListUserStatistics**
    - changes of request param
      - `- x-auth-token`
  - **ListPortStatistics**
    - changes of request param
      - `- x-auth-token`
  - **ListProcessStatistics**
    - changes of request param
      - `- x-auth-token`
  - **ListAppStatistics**
    - changes of request param
      - `- x-auth-token`
  - **ListAutoLaunchStatistics**
    - changes of request param
      - `- x-auth-token`
  - **ListUsers**
    - changes of request param
      - `- x-auth-token`
    - changes of response param
      - `- data_list.expire_time`
  - **ListPorts**
    - changes of request param
      - `- x-auth-token`
  - **ListApps**
    - changes of request param
      - `- x-auth-token`
  - **ListAutoLaunchs**
    - changes of request param
      - `- x-auth-token`
  - **ListUserChangeHistories**
    - changes of request param
      - `- x-auth-token`
  - **ListAppChangeHistories**
    - changes of request param
      - `- x-auth-token`
  - **ListAutoLaunchChangeHistories**
    - changes of request param
      - `- x-auth-token`
  - **ListProcessesHost**
    - changes of request param
      - `- x-auth-token`
  - **ListPortHost**
    - changes of request param
      - `- x-auth-token`
  - **ListProtectionServer**
    - changes of request param
      - `- x-auth-token`
  - **ListPasswordComplexity**
    - changes of request param
      - `- x-auth-token`
    - changes of response param
      - `+ data_list.private_ip`
      - `+ data_list.public_ip`
  - **ListRiskConfigs**
    - changes of request param
      - `- x-auth-token`
  - **ListRiskConfigHosts**
    - changes of request param
      - `- x-auth-token`
  - **ShowCheckRuleDetail**
    - changes of request param
      - `- x-auth-token`
  - **ListContainerNodes**
    - changes of request param
      - `- x-auth-token`
  - **ListHostStatus**
    - changes of request param
      - `- x-auth-token`
  - **SwitchHostsProtectStatus**
    - changes of request param
      - `- x-auth-token`
  - **BatchScanSwrImage**
    - changes of request param
      - `- x-auth-token`
  - **ListImageVulnerabilities**
    - changes of request param
      - `- x-auth-token`
  - **ListVulnerabilityCve**
    - changes of request param
      - `- x-auth-token`
  - **ListImageRiskConfigs**
    - changes of request param
      - `- x-auth-token`
  - **ListImageRiskConfigRules**
    - changes of request param
      - `- x-auth-token`
  - **ShowImageCheckRuleDetail**
    - changes of request param
      - `- x-auth-token`
  - **BatchCreateTags**
    - changes of request param
      - `- x-auth-token`
      - `- sys_tags`
  - **ListVulHosts**
    - changes of request param
      - `+ repair_priority`
      - `- x-auth-token`
    - changes of response param
      - `+ data_list.version`
      - `+ data_list.disabled_operate_types`
      - `+ data_list.repair_priority`
  - **ChangeVulStatus**
    - changes of request param
      - `- x-auth-token`
  - **ListHostVuls**
    - changes of request param
      - `+ repair_priority`
      - `- x-auth-token`
    - changes of response param
      - `+ data_list.disabled_operate_types`
      - `+ data_list.repair_priority`
  - **ListVulScanTask**
    - changes of request param
      - `- x-auth-token`
  - **ListVulScanTaskHost**
    - changes of request param
      - `- x-auth-token`
  - **ListWtpProtectHost**
    - changes of response param
      - `+ data_list.ipv6`
  - **ListHostProtectHistoryInfo**
    - changes of request param
      - `* host_id: required -> optional`
  - **ListHostRaspProtectHistoryInfo**
    - changes of request param
      - `* host_id: required -> optional`
  - **UpdateProtectionPolicy**
    - changes of request param
      - `- x-auth-token`
  - **ListProtectionPolicy**
    - changes of request param
      - `- x-auth-token`
  - **ShowBackupPolicyInfo**
    - changes of request param
      - `- x-auth-token`
  - **UpdateBackupPolicyInfo**
    - changes of request param
      - `- x-auth-token`
  - **ListWeakPasswordUsers**
    - changes of request param
      - `- x-auth-token`
    - changes of response param
      - `+ data_list.private_ip`
      - `+ data_list.public_ip`
  - **ListRiskConfigCheckRules**
    - changes of request param
      - `- x-auth-token`
  - **ChangeCheckRuleAction**
    - changes of request param
      - `- x-auth-token`
  - **ShowResourceQuotas**
    - changes of request param
      - `- x-auth-token`
  - **ListQuotasDetail**
    - changes of request param
      - `- x-auth-token`
  - **ListBlockedIp**
    - changes of request param
      - `- x-auth-token`
  - **ChangeBlockedIp**
    - changes of request param
      - `- x-auth-token`
  - **ListIsolatedFile**
    - changes of request param
      - `+ file_path`
      - `+ private_ip`
      - `+ public_ip`
      - `+ file_hash`
      - `+ asset_value`
      - `- x-auth-token`
      - `- last_days`
      - `- isolation_status`
    - changes of response param
      - `+ data_list.os_type`
      - `+ data_list.private_ip`
      - `+ data_list.public_ip`
      - `+ data_list.asset_value`
      - `+ data_list.agent_version`
      - `+ data_list.isolate_source`
      - `+ data_list.event_name`
      - `+ data_list.agent_event_info`
      - `+ data_list.antivirus_result_info`
  - **ChangeIsolatedFile**
    - changes of request param
      - `- x-auth-token`
  - **ListAlarmWhiteList**
    - changes of request param
      - `- x-auth-token`
  - **DeleteHostsGroup**
    - changes of request param
      - `- x-auth-token`
  - **AddHostsGroup**
    - changes of request param
      - `- x-auth-token`
  - **ChangeHostsGroup**
    - changes of request param
      - `- x-auth-token`
  - **ListHostGroups**
    - changes of request param
      - `- x-auth-token`
  - **ListSwrImageRepository**
    - changes of request param
      - `- x-auth-token`
  - **ListPolicyGroup**
    - changes of request param
      - `+ container_mode`
      - `- x-auth-token`
  - **ListVulnerabilities**
    - changes of request param
      - `- x-auth-token`
    - changes of response param
      - `+ data_list.repair_priority_list`
  - **StartProtection**
    - changes of request param
      - `- x-auth-token`
  - **ListSecurityEvents**
    - changes of request param
      - `- x-auth-token`
    - changes of response param
      - `+ data_list.process_info_list.ancestor_process_path`
      - `+ data_list.process_info_list.ancestor_process_pid`
      - `+ data_list.process_info_list.ancestor_process_cmdline`
  - **ChangeEvent**
    - changes of request param
      - `- x-auth-token`

### HuaweiCloud SDK Live

- _Features_
  - Support the following APIs:
    - `ListOttChannelInfo`
    - `CreateOttChannelInfo`
    - `DeleteOttChannelInfo`
    - `ModifyOttChannelInfoEndPoints`
    - `ModifyOttChannelInfoInput`
    - `ModifyOttChannelInfoRecordSettings`
    - `ModifyOttChannelInfoGeneral`
    - `ModifyOttChannelInfoStats`
    - `ModifyOttChannelInfoEncoderSettings`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK NAT

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListNatGatewaySnatRules**
    - changes of request param
      - `* floating_ip_address: string -> list<string>`
      - `* floating_ip_id: string -> list<string>`

### HuaweiCloud SDK OCR

- _Features_
  - Support the API `RecognizeHouseholdRegister`
- _Bug Fix_
  - None
- _Change_
  - **RecognizeSmartDocumentRecognizer**
    - changes of request param
      - `+ form`
      - `+ kv_map`
    - changes of response param
      - `+ result.form_result`
      - `+ result.layout_result.layout_block_list.table_id`
      - `+ result.layout_result.layout_block_list.form_id`

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAutoEnlargePolicy**
    - changes of response param
      - `+ step_percent`
  - **SetAutoEnlargePolicy**
    - changes of request param
      - `+ step_percent`

### HuaweiCloud SDK WAF

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateInstance**
    - changes of request param
      - `+ anti_affinity`

# 3.1.83 2024-03-14

### HuaweiCloud SDK DRS

- _Features_
  - Support the API `ListAvailableNodeTypes`
- _Bug Fix_
  - None
- _Change_
  - **BatchSetPolicy**
    - changes of request param
      - `+ jobs.ddl_topic`
  - **BatchCreateJobs**
    - changes of request param
      - `+ jobs.public_ip_list`
  - **ShowJobList**
    - changes of response param
      - `+ jobs.children.job_direction: enum value [non-dbs]`
      - `- jobs.children.job_direction: enum value [no-dbs]`
  - **BatchListJobDetails**
    - changes of response param
      - `+ results.public_ip_list`
      - `+ results.bind_public_ip_state`
      - `+ results.children`
  - **ShowUpdateObjectSavingStatus**
    - changes of response param
      - `+ job_id`
  - **CollectDbObjectsAsync**
    - changes of response param
      - `+ job_id`
  - **ShowDataProcessingRulesResult**
    - changes of response param
      - `+ job_id`
  - **CollectDbObjectsInfo**
    - changes of response param
      - `+ job_id`
  - **CollectPositionAsync**
    - changes of response param
      - `+ job_id`
  - **CollectColumns**
    - changes of response param
      - `+ job_id`
  - **CreateJob**
    - changes of request param
      - `+ job.public_ip_list`
  - **BatchCreateJobsAsync**
    - changes of request param
      - `+ jobs.public_ip_list`
  - **UpdateDataProgress**
    - changes of response param
      - `+ job_id`
  - **CheckDataFilter**
    - changes of response param
      - `+ job_id`
  - **ListAsyncJobDetail**
    - changes of response param
      - `+ jobs.public_ip_list`
      - `+ jobs.bind_public_ip_state`
      - `+ jobs.children`
  - **ShowJobDetail**
    - changes of response param
      - `+ job.public_ip_list`
      - `+ job.bind_public_ip_state`
      - `+ job.children`
  - **ExecuteJobAction**
    - changes of request param
      - `+ job.action_name: enum value [bind_eip,unbind_eip]`
      - `+ job.action_params.public_ip_config`
  - **BatchExecuteJobActions**
    - changes of request param
      - `+ jobs.action_name: enum value [bind_eip,unbind_eip]`
      - `+ jobs.action_params.public_ip_config`

### HuaweiCloud SDK DWS

- _Features_
  - Support the APIs `ListMetrics`, `ListMetricsData`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK MetaStudio

- _Features_
  - Support the following APIs:
    - `ShowAssetReplicationInfo`
    - `CreateAssetbyReplicationInfo`
    - `ListActiveCode`
    - `CreateActiveCode`
    - `ShowActiveCode`
    - `UpdateActiveCode`
    - `ResetActiveCode`
    - `DeleteActiveCode`
- _Bug Fix_
  - None
- _Change_
  - **CreateFile**
    - changes of response param
      - `+ file_id`
      - `+ upload_url`
  - **ShowJobUploadingAddress**
    - changes of response param
      - `+ package_url`
      - `+ authorization_letter_uploading_url`
      - `+ segment_url`
  - **ShowJobAuditResult**
    - changes of response param
      - `+ system_audit_result`
      - `+ admin_audit_result`
  - **ShowTrainingSegmentInfo**
    - changes of response param
      - `+ confirmed_index`
  - **ConfirmTrainingSegment**
    - changes of response param
      - `+ unmatched_index_hit`
      - `+ confirm_result`
  - **Create2dModelTrainingJob**
    - changes of response param
      - `+ cover_upload_url`
      - `+ job_id`
      - `+ grant_file_upload_url`
      - `+ training_video_upload_url`
      - `+ id_card_image2_upload_url`
      - `+ id_card_image1_upload_url`
  - **List2dModelTrainingJob**
    - changes of response param
      - `+ jobs`
      - `+ count`
  - **Execute2dModelTrainingCommandByUser**
    - changes of response param
      - `+ commond_result`
      - `+ attachment_upload_url`
      - `+ multipart_data`
  - **ExecuteSmartLiveCommand**
    - changes of request param
      - `+ command: enum value [REWRITE_INTERACTION_RULES,GET_LIVE_JOB_CONFIG_INFO]`
    - changes of response param
      - `+ command_id`
      - `+ command: enum value [REWRITE_INTERACTION_RULES,GET_LIVE_JOB_CONFIG_INFO]`
  - **CreateTrainingBasicJob**
    - changes of response param
      - `+ job_id`
      - `+ segment_uploading_url`
      - `+ authorization_letter_uploading_url`
      - `+ training_data_uploading_url`
  - **CreateTrainingMiddleJob**
    - changes of response param
      - `+ job_id`
      - `+ segment_uploading_url`
      - `+ authorization_letter_uploading_url`
      - `+ training_data_uploading_url`
  - **CreateTrainingAdvanceJob**
    - changes of response param
      - `+ job_id`
      - `+ segment_uploading_url`
      - `+ authorization_letter_uploading_url`
      - `+ training_data_uploading_url`
  - **ShowVoiceTrainingJob**
    - changes of response param
      - `+ job_type`
      - `+ create_time`
      - `+ sex`
      - `+ create_type`
      - `+ voice_name`
      - `+ language`
      - `+ voice_authorization_url`
      - `+ asset_id`
      - `+ lastupdate_time`
      - `+ job_failed_code`
      - `+ reject_times`
      - `+ app_user_id`
      - `+ job_id`
      - `+ state`
      - `+ tag`
      - `+ job_failed_reason`
      - `+ state: enum value [USER_RESULT_REVIEW,USER_REVIEW_REJECT]`
  - **Update2dModelTrainingJob**
    - changes of response param
      - `+ cover_upload_url`
      - `+ job_id`
      - `+ grant_file_upload_url`
      - `+ training_video_upload_url`
      - `+ id_card_image2_upload_url`
      - `+ id_card_image1_upload_url`
  - **Show2dModelTrainingJob**
    - changes of response param
      - `+ model_version`
      - `+ inference_data_process_action_mark_info`
      - `+ model_resolution`
      - `+ inference_data_process_video_mark_info`
      - `+ asset_id`
      - `+ training_video_download_url`
      - `+ mask_file_download_url`
      - `+ grant_file_download_url`
      - `+ project_id`
      - `+ operation_logs`
      - `+ contact`
      - `+ matting_type`
      - `+ verify_video_download_url`
      - `+ state`
      - `+ cover_download_url`
      - `+ create_time`
      - `+ is_background_replacement`
      - `+ comment_logs`
      - `+ markable_video_download_url`
      - `+ tags`
      - `+ last_update_time`
      - `+ batch_name`
      - `+ id_card_image1_download_url`
      - `+ id_card_image2_download_url`
      - `+ job_id`
      - `+ is_mask_file_uploaded`
      - `+ name`
  - **ListDigitalHumanVideo**
    - changes of response param
      - `+ jobs.state: enum value [BLOCK]`
  - **CreateDigitalHumanBusinessCard**
    - changes of response param
      - `+ job_id`
  - **ListDigitalHumanBusinessCard**
    - changes of response param
      - `+ jobs.state: enum value [BLOCK]`
  - **UpdateDigitalHumanBusinessCard**
    - changes of response param
      - `+ job_id`
  - **ShowDigitalHumanBusinessCard**
    - changes of response param
      - `+ job_info.state: enum value [BLOCK]`
  - **ListSmartChatRooms**
    - changes of response param
      - `+ count_concurrency`
      - `+ smart_chat_rooms.concurrency`
  - **ShowSmartLive**
    - changes of response param
      - `+ co_streamer_config`
      - `+ live_job_log`
  - **CreatePictureModelingJob**
    - changes of response param
      - `+ model_asset_id`
      - `+ job_id`
  - **ListVoiceTrainingJob**
    - changes of response param
      - `+ jobs`
      - `+ count`
      - `+ reject_times`
      - `+ jobs.reject_times`
      - `+ jobs.state: enum value [USER_RESULT_REVIEW,USER_REVIEW_REJECT]`
  - **StartSmartLive**
    - changes of request param
      - `+ co_streamer_config`
  - **ListSmartLive**
    - changes of response param
      - `+ co_streamer_config`
      - `+ live_job_log`
      - `+ smart_live_jobs.co_streamer_config`
      - `+ smart_live_jobs.live_job_log`
  - **ListSmartLiveJobs**
    - changes of response param
      - `+ co_streamer_config`
      - `+ live_job_log`
      - `+ smart_live_jobs.co_streamer_config`
      - `+ smart_live_jobs.live_job_log`
  - **CreateVideoMotionCaptureJob**
    - changes of response param
      - `+ rtc_room_info`
      - `+ job_id`
  - **Show2DDigitalHumanVideo**
    - changes of response param
      - `+ state: enum value [BLOCK]`
  - **ShowPhotoDigitalHumanVideo**
    - changes of response param
      - `+ state: enum value [BLOCK]`
  - **ListSmartLiveRooms**
    - changes of response param
      - `+ smart_live_rooms.view_mode`
      - `+ smart_live_rooms.thumbnail`
  - **CreateSmartLiveRoom**
    - changes of request param
      - `+ co_streamer_config`
      - `+ scene_scripts.script_id`
      - `+ interaction_rules.trigger.reply_role`
  - **ShowSmartLiveRoom**
    - changes of response param
      - `+ thumbnail`
      - `+ co_streamer_config`
      - `+ scene_scripts.script_id`
      - `+ interaction_rules.trigger.reply_role`
  - **UpdateSmartLiveRoom**
    - changes of request param
      - `+ co_streamer_config`
      - `+ scene_scripts.script_id`
      - `+ interaction_rules.trigger.reply_role`
    - changes of response param
      - `+ thumbnail`
      - `+ co_streamer_config`
      - `+ scene_scripts.script_id`
      - `+ interaction_rules.trigger.reply_role`
  - **UpdateInteractionRuleGroup**
    - changes of request param
      - `+ interaction_rules.trigger.reply_role`
    - changes of response param
      - `+ interaction_rules.trigger.reply_role`
  - **ListAssets**
    - changes of request param
      - `+ X-REAL-IP`
  - **CreateInteractionRuleGroup**
    - changes of request param
      - `+ interaction_rules.trigger.reply_role`
  - **ListInteractionRuleGroups**
    - changes of response param
      - `+ interaction_rule_groups.interaction_rules.trigger.reply_role`

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowBinlogClearPolicy**
    - changes of response param
      - `+ binlog_clear_type`

### HuaweiCloud SDK VPCEP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **AddOrRemoveServicePermissions**
    - changes of response param
      - `- permission_type: enum value [domainId,orgPath]`
  - **ListServiceDescribeDetails**
    - changes of response param
      - `- service_type: enum value [interface]`
      - `* created_at: string -> date-time`
  - **ListServiceDetails**
    - changes of response param
      - `- server_type: enum value [VM,VIP,LB]`
      - `- status: enum value [creating,available,failed]`
      - `- service_type: enum value [gataway,interface]`
      - `* created_at: string -> date-time`
      - `* updated_at: string -> date-time`
      - `- tcp_proxy: enum value [close,toa_open,proxy_open,open,proxy_vni]`
  - **UpdateEndpointService**
    - changes of response param
      - `- server_type: enum value [VM,VIP,LB]`
      - `- status: enum value [creating,available,failed]`
      - `* created_at: string -> date-time`
      - `* updated_at: string -> date-time`
      - `- tcp_proxy: enum value [close,toa_open,proxy_open,open,proxy_vni]`
  - **ListServicePermissionsDetails**
    - changes of response param
      - `- permissions.permission_type: enum value [domainId,orgPath]`
      - `* permissions.created_at: string -> date-time`
  - **ListServicePublicDetails**
    - changes of response param
      - `- endpoint_services.service_type: enum value [interface,gateway]`
      - `* endpoint_services.created_at: string -> date-time`
  - **ListEndpointInfoDetails**
    - changes of response param
      - `- service_type: enum value [interface,gateway]`
      - `- status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`
      - `- enable_status: enum value [enable,disable]`
      - `* created_at: string -> date-time`
      - `* updated_at: string -> date-time`
      - `* policy_statement: list<string> -> list<PolicyStatement>`
  - **UpdateEndpointWhite**
    - changes of response param
      - `- service_type: enum value [interface,gateway]`
      - `- status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`
      - `* created_at: string -> date-time`
      - `* updated_at: string -> date-time`
  - **BatchAddOrRemoveResourceInstance**
    - changes of request param
      - `+ resource_type: enum value [endpoint_service,endpoint]`
      - `+ action: enum value [create,delete]`
      - `* body: object<BatchAddOrRemoveResourceInstanceBody> -> object<BatchAddOrRemoveResourceInstanceRequestBody>`
  - **ListQueryProjectResourceTags**
    - changes of request param
      - `+ resource_type: enum value [endpoint_service,endpoint]`
  - **BatchAddEndpointServicePermissions**
    - changes of request param
      - `* body: object<BatchAddPermissionRequest> -> object<BatchAddEndpointServicePermissionsRequestBody>`
    - changes of response param
      - `* permissions.created_at: string -> date-time`
  - **BatchRemoveEndpointServicePermissions**
    - changes of request param
      - `* body: object<BatchRemovePermissionRequest> -> object<BatchRemoveEndpointServicePermissionsRequestBody>`
    - changes of response param
      - `* permissions.created_at: string -> date-time`
  - **UpdateEndpointServicePermissionDesc**
    - changes of request param
      - `* body: object<UpdatePermissionDescRequest> -> object<UpdateEndpointServicePermissionDescRequestBody>`
    - changes of response param
      - `* permissions.created_at: string -> date-time`
  - **UpdateEndpointPolicy**
    - changes of request param
      - `+ policy_statement.Effect: enum value [Allow,Refuse]`
    - changes of response param
      - `- enable_dns`
      - `- dns_names`
      - `- subnet_id`
      - `- service_type: enum value [interface,gateway]`
      - `- status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`
      - `* created_at: string -> date-time`
      - `* updated_at: string -> date-time`
      - `+ policy_statement.Effect: enum value [Allow,Refuse]`
  - **DeleteEndpointPolicy**
    - changes of response param
      - `- enable_dns`
      - `- dns_names`
      - `- subnet_id`
      - `- service_type: enum value [interface,gateway]`
      - `- status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`
      - `* created_at: string -> date-time`
      - `* updated_at: string -> date-time`
      - `+ policy_statement.Effect: enum value [Allow,Refuse]`
  - **CreateEndpointService**
    - changes of request param
      - `+ service_type: enum value [gateway,interface]`
    - changes of response param
      - `- server_type: enum value [VM,VIP,LB]`
      - `- status: enum value [creating,available,failed]`
      - `* created_at: string -> date-time`
      - `* updated_at: string -> date-time`
      - `- tcp_proxy: enum value [close,toa_open,proxy_open,open,proxy_vni]`
  - **ListEndpointService**
    - changes of response param
      - `- endpoint_services.status: enum value [creating,available,failed]`
      - `- endpoint_services.service_type: enum value [VM,VIP,LB]`
      - `* endpoint_services.created_at: string -> date-time`
      - `* endpoint_services.updated_at: string -> date-time`
      - `- endpoint_services.tcp_proxy: enum value [close,toa_open,proxy_open,open,proxy_vni]`
  - **ListServiceConnections**
    - changes of request param
      - `+ status: enum value [pendingAcceptance,accepted,rejected,failed]`
    - changes of response param
      - `* connections.created_at: string -> date-time`
      - `* connections.updated_at: string -> date-time`
      - `- connections.status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`
  - **AcceptOrRejectEndpoint**
    - changes of response param
      - `* connections.created_at: string -> date-time`
      - `* connections.updated_at: string -> date-time`
      - `- connections.status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`
  - **CreateEndpoint**
    - changes of response param
      - `- dns_names`
      - `- service_type: enum value [interface,gateway]`
      - `- status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`
      - `* created_at: string -> date-time`
      - `* updated_at: string -> date-time`
      - `* policy_statement: list<string> -> list<PolicyStatement>`
  - **ListEndpoints**
    - changes of request param
      - `+ sort_key: enum value [create_at,update_at]`
      - `+ sort_dir: enum value [desc,asc]`
    - changes of response param
      - `- endpoint_pool_id`
      - `- endpoint_service_id`
      - `- vpc_id`
      - `- created_at`
      - `- description`
      - `- error`
      - `- updated_at`
      - `- enable_whitelist`
      - `- project_id`
      - `- marker_id`
      - `- id`
      - `- public_border_group`
      - `- policy_statement`
      - `- routetables`
      - `- endpoint_service_name`
      - `- ip`
      - `- whitelist`
      - `- tags`
      - `- enable_dns`
      - `- service_type`
      - `- active_status`
      - `- dns_names`
      - `- subnet_id`
      - `- status`
      - `- endpoints.service_type: enum value [interface,gateway]`
      - `- endpoints.status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`
      - `* endpoints.created_at: string -> date-time`
      - `* endpoints.updated_at: string -> date-time`
      - `+ endpoints.policy_statement.Effect: enum value [Allow,Refuse]`
      - `* endpoints: list<EndpointResp> -> list<EndpointResponseBody>`
  - **ListQuotaDetails**
    - changes of response param
      - `- quotas.resources.type: enum value [endpoint_service,endpoint]`
      - `* quotas: object<ResourcesResp> -> object<ResourcesResponseBody>`
  - **ListVersionDetails**
    - changes of response param
      - `- versions.status: enum value [CURRENT,SUPPORT,DEPRECATED]`
      - `- versions.id: enum value [v1]`
      - `* versions.updated: string -> date-time`
  - **ListSpecifiedVersionDetails**
    - changes of response param
      - `- version.status: enum value [CURRENT,SUPPORT,DEPRECATED]`
      - `- version.id: enum value [v1]`
      - `* version.updated: string -> date-time`
  - **ListResourceInstances**
    - changes of request param
      - `+ resource_type: enum value [endpoint_service,endpoint]`
      - `+ action: enum value [filter,count]`
  - **UpdateEndpointConnectionsDesc**
    - changes of request param
      - `* body: object<UpdateEpConnections> -> object<UpdateEndpointConnectionsDescRequestBody>`
    - changes of response param
      - `* connections.created_at: string -> date-time`
      - `* connections.updated_at: string -> date-time`
      - `- connections.status: enum value [pendingAcceptance,creating,accepted,rejected,failed,deleting]`

# 3.1.82 2024-03-07

### HuaweiCloud SDK BMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListBareMetalServers**
    - changes of response param
      - `* servers.OS-SRV-USG:launched_at: date-time -> string`
      - `* servers.OS-SRV-USG:terminated_at: date-time -> string`
  - **ListBareMetalServerDetails**
    - changes of response param
      - `* server.OS-SRV-USG:launched_at: date-time -> string`
      - `* server.OS-SRV-USG:terminated_at: date-time -> string`

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - Support the APIs `ShowStepOutputs`, `ShowPipelineArtifacts`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Config

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowBuiltInPolicyDefinition**
    - changes of response param
      - `+ display_name`
  - **ShowOrganizationPolicyAssignmentStatuses**
    - changes of request param
      - `+ organization_policy_assignment_id`
  - **ListBuiltInPolicyDefinitions**
    - changes of response param
      - `+ display_name`
      - `+ value.display_name`
  - **ListPolicyAssignments**
    - changes of request param
      - `+ policy_assignment_name`
      - `+ limit`
      - `+ marker`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateSslSwitch**
    - changes of response param
      - `+ result`
      - `+ instance_id`
  - **ListClients**
    - changes of response param
      - `+ clients.fd`
      - `+ clients.network`
      - `+ clients.peer`
      - `+ clients.user`

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListAuthorizationPrivileges**
    - changes of response param
      - `+ privileges.object`
      - `* privileges: list<ShowDatabaseUsersPrivilege> -> list<AuthorizationPrivilege>`

### HuaweiCloud SDK DWS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListWorkloadQueue**
    - changes of request param
      - `+ logical_cluster_name`
  - **ShowWorkloadQueue**
    - changes of request param
      - `+ logical_cluster_name`

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - Support the API `UpdateDatabases`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **AddCertificate**
    - changes of response param
      - `+ template_id`
      - `+ provision_enable`
  - **ListCertificates**
    - changes of response param
      - `+ template_id`
      - `+ provision_enable`
      - `+ certificates.provision_enable`
      - `+ certificates.template_id`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the following APIs:
    - `CreateDeleteConnectorOrder`
    - `ListSinkTasks`
    - `CreateSinkTask`
    - `ShowSinkTaskDetail`
    - `DeleteSinkTask`
  - **SendKafkaMessage**
    - changes of request param
      - `+ property_list.name`
      - `+ property_list.value`
  - **ShowConnectorTask**
    - changes of response param
      - `* source_task.replication_factor: string -> int32`
      - `* source_task.task_num: string -> int32`
      - `* sink_task.target_db: string -> int32`
  - **CreatePostPaidInstance**
    - changes of request param
      - `+ ipv6_enable`
  - **CreateConnectorTask**
    - changes of request param
      - `* source_task.replication_factor: string -> int32`
      - `* source_task.task_num: string -> int32`
    - changes of response param
      - `* source_task.replication_factor: string -> int32`
      - `* source_task.task_num: string -> int32`
      - `* sink_task.target_db: string -> int32`
  - **ListConnectorTasks**
    - changes of response param
      - `* tasks.source_task.replication_factor: string -> int32`
      - `* tasks.source_task.task_num: string -> int32`
      - `* tasks.sink_task.target_db: string -> int32`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeIdCard**
    - changes of request param
      - `+ return_portrait_image`
      - `+ return_adjusted_image`
    - changes of response param
      - `+ result.portrait_image`
      - `+ result.adjusted_image`
      - `+ result.front.portrait_image`
      - `+ result.front.adjusted_image`
      - `+ result.back.adjusted_image`

### HuaweiCloud SDK RDS

- _Features_
  - Support the following APIs:
    - `ShowStorageUsedSpace`
    - `SwitchSqlLimit`
    - `UpdateSqlLimit`
    - `ListSqlLimit`
    - `CreateSqlLimit`
    - `DeleteSqlLimit`
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of response param
      - `* instances.volume: object<Volume> -> object<VolumeForInstanceResponse>`
  - **CreateRestoreInstance**
    - changes of request param
      - `- replica_of_id`
      - `- unchangeable_param`

### HuaweiCloud SDK SMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateDiskInfo**
    - changes of request param
      - `* volumegroups.logical_volumes.device_use: int32 -> string`
  - **ShowServer**
    - changes of response param
      - `* volume_groups.logical_volumes.device_use: int32 -> string`
  - **CreateTask**
    - changes of request param
      - `* target_server.volume_groups.logical_volumes.device_use: int32 -> string`
  - **ShowTask**
    - changes of response param
      - `* target_server.volume_groups.logical_volumes.device_use: int32 -> string`
  - **UpdateTask**
    - changes of request param
      - `* source_server.volume_groups.logical_volumes.device_use: int32 -> string`
  - **RegisterServer**
    - changes of request param
      - `* volume_groups.logical_volumes.device_use: int32 -> string`
  - **ListServers**
    - changes of response param
      - `* source_servers.init_target_server.volume_groups.logical_volumes.device_use: int32 -> string`

# 3.1.81 2024-02-29

### HuaweiCloud SDK CFW

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListAddressSets**
    - changes of request param
      - `+ query_address_set_type`
    - changes of response param
      - `+ data.records.object_id`
      - `+ data.records.address_set_type`
  - **UpdateAclRuleOrder**
    - changes of response param
      - `+ data.name`
  - **AddBlackWhiteList**
    - changes of response param
      - `+ data.name`
  - **UpdateBlackWhiteList**
    - changes of response param
      - `+ data.name`
  - **DeleteBlackWhiteList**
    - changes of response param
      - `+ data.name`
  - **ChangeIpsProtectMode**
    - changes of response param
      - `+ data.name`
  - **AddServiceSet**
    - changes of response param
      - `+ data.name`
  - **ListServiceSetDetail**
    - changes of response param
      - `+ data.service_set_type`
  - **UpdateServiceSet**
    - changes of response param
      - `+ data.name`
  - **DeleteServiceSet**
    - changes of response param
      - `+ data.name`
  - **DeleteServiceItem**
    - changes of response param
      - `+ data.name`
  - **CreateFirewall**
    - changes of request param
      - `- flavor.version: enum value [Platinum]`
    - changes of response param
      - `- data.flavor.version: enum value [Platinum]`
  - **ChangeEipStatus**
    - changes of response param
      - `+ data.id`
  - **DeleteAddressItem**
    - changes of response param
      - `+ data.name`
  - **AddAddressSet**
    - changes of response param
      - `+ data.name`
  - **ListAddressSetDetail**
    - changes of request param
      - `+ query_address_set_type`
    - changes of response param
      - `+ data.address_set_type`
  - **UpdateAddressSet**
    - changes of response param
      - `* data: object<IdObject> -> object<UpdateAddressSetResponseData>`
  - **DeleteAddressSet**
    - changes of response param
      - `+ data.name`
  - **CreateEastWestFirewall**
    - changes of response param
      - `+ data.name`
  - **ListEastWestFirewall**
    - changes of response param
      - `+ data.protect_infos.status`
  - **AddAclRule**
    - changes of response param
      - `+ data.rules.name`
  - **DeleteAclRule**
    - changes of response param
      - `+ data.name`
  - **UpdateAclRule**
    - changes of response param
      - `+ data.name`
  - **ListAclRules**
    - changes of response param
      - `+ data.records.created_date`
      - `+ data.records.last_open_time`
  - **AddServiceItems**
    - changes of response param
      - `+ data.items.name`
  - **AddAddressItem**
    - changes of response param
      - `+ data.items.name`
  - **ListServiceSets**
    - changes of response param
      - `+ data.records.service_set_type`
      - `+ data.records.project_id`
      - `+ data.records.protocols`
  - **ListProtectedVpcs**
    - changes of response param
      - `+ data.total_assets`
  - **ListFirewallDetail**
    - changes of response param
      - `+ data.records.is_available_obs`
      - `+ data.records.is_support_threat_tags`
  - **ListFirewallList**
    - changes of response param
      - `+ is_support_postpaid`
      - `+ is_support_buy_professional`
      - `+ has_ndr`
      - `+ is_support_basic_version`

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowPipelineDetail**
    - changes of response param
      - `+ sources.type`
      - `+ sources.params`
      - `- sources.scmType`
      - `- sources.hookFlag`
      - `- sources.defaultBranch`
      - `- sources.trigger`
      - `- sources.alias`
      - `- sources.displayName`
      - `- sources.repoName`
      - `- sources.repoId`
      - `- sources.repoOwner`
      - `- sources.gitUrl`
      - `- sources.webUrl`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the following APIs:
    - `CreateOrUpdateEntities`
    - `ListFactoryReleasePackages`
    - `ShowFactoryPackageDetail`
    - `DeployFactoryPackages`
    - `CancelFactoryPackages`
    - `ListFactoryJobInstancesByName`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **PreviewSqlJobResult**
    - changes of response param
      - `* rows: list<list<string>> -> list<list<object>>`
  - **CreateFlinkSqlJobGraph**
    - changes of request param
      - `+ flink_version`
  - **CreateSqlJob**
    - changes of response param
      - `* rows: list<list<string>> -> list<list<object>>`
  - **CreateEnhancedConnection**
    - changes of request param
      - `+ elastic_resource_pools`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateFunctionTrigger**
    - changes of response param
      - `+ event_data.triggerid`
      - `+ event_data.api_id`
      - `+ event_data.api_name`
      - `+ event_data.invoke_url`
      - `+ event_data.roma_app_id`
      - `+ event_data.db_user`
      - `+ event_data.instance_addrs`
      - `+ event_data.mode`
      - `* event_data: object<TriggerEventDataRequestBody> -> object<TriggerEventDataResponseBody>`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowRule**
    - changes of response param
      - `+ actions.smn_forwarding.message_template_name`
  - **UpdateRule**
    - changes of request param
      - `+ actions.smn_forwarding.message_template_name`
    - changes of response param
      - `+ actions.smn_forwarding.message_template_name`
  - **CreateRule**
    - changes of request param
      - `+ actions.smn_forwarding.message_template_name`
    - changes of response param
      - `+ actions.smn_forwarding.message_template_name`
  - **ListRules**
    - changes of response param
      - `+ rules.actions.smn_forwarding.message_template_name`

### HuaweiCloud SDK Kafka

- _Features_
  - Support the following APIs:
    - `ListConnectorTasks`
    - `CreateConnectorTask`
    - `ShowConnectorTask`
    - `DeleteConnectorTask`
    - `PauseConnectorTask`
    - `ResumeConnectorTask`
    - `RestartConnectorTask`
- _Bug Fix_
  - None
- _Change_
  - **ShowInstance**
    - changes of response param
      - `+ connector_node_num`
  - **CreateSinkTask**
    - changes of request param
      - `+ obs_destination_descriptor.partition_format: enum value [yyyy,yyyy/MM,yyyy/MM/dd,yyyy/MM/dd/HH,yyyy/MM/dd/HH/mm]`
  - **ListInstances**
    - changes of response param
      - `+ connector_node_num`
      - `+ instances.connector_node_num`

### HuaweiCloud SDK LTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateLogStream**
    - changes of request param
      - `+ log_stream_name_alias`
      - `+ enterprise_project_name`

# 3.1.80 2024-02-22

### HuaweiCloud SDK CES

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateDashboardWidgets**
    - changes of request param
      - `* body: list<BaseWidgetInfo> -> list<object>`

### HuaweiCloud SDK GaussDB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ModifyGaussMySqlProxyRouteMode**
    - changes of request param
      - `+ new_node_auto_add_status`
      - `+ new_node_weight`

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListRecycleInstances**
    - changes of response param
      - `+ instances.engine_name`
      - `+ instances.volume_size`
      - `+ instances.enterprise_project_name`
      - `+ instances.backup_level`

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListImages**
    - changes of response param
      - `+ images.__image_displayname`
  - **UpdateImage**
    - changes of response param
      - `+ __image_displayname`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeTrainTicket**
    - changes of response param
      - `+ result.invoice_style`
      - `+ result.issue_date`
      - `+ result.discount_mark`
      - `+ result.serial_number`
      - `+ result.tax_amount`
      - `+ result.tax_rate`
      - `+ result.air_conditioning`
      - `+ result.original_invoice_number`
      - `+ result.unified_social_credit_code`
      - `+ result.buyer_name`
      - `+ result.total_amount_excluding_tax`
      - `+ result.invoice_number`
      - `+ result.seal_mark`
      - `+ result.title`
      - `+ result.area`
      - `+ result.receipt_number`
      - `+ result.amount_in_figures`
      - `+ result.amount_in_words`

# 3.1.79 2024-02-20

### HuaweiCloud SDK DCS

- _Features_
  - Support the APIs `ListClients`, `ScanClients`, `HangUpClients`, `HangUpKillAllClients`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSqlJobs**
    - changes of response param
      - `* jobs.duration: int32 -> int64`
      - `* jobs.result_count: int32 -> int64`

# 3.1.78 2024-02-07

### HuaweiCloud SDK EIP

- _Features_
  - Support the following APIs:
    - `ListTenantVpcIgws`
    - `CreateTenantVpcIgw`
    - `ShowInternalVpcIgw`
    - `UpdateTenantVpcIgw`
    - `DeleteTenantVpcIgw`
    - `ListProjectGeipBindings`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the API `UpdateNewNodeAutoAddSwitch`
- _Bug Fix_
  - None
- _Change_
  - **CreateGaussMySqlProxy**
    - changes of request param
      - `+ new_node_auto_add_status`
      - `+ new_node_weight`
  - **ShowGaussMySqlProxyList**
    - changes of response param
      - `+ proxy_list.proxy.new_node_auto_add_status`
      - `+ proxy_list.proxy.new_node_weight`

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - Support the API `StopBackup`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Meeting

- _Features_
  - Support the APIs `SetProfileImage`, `SetUserProfileImage`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RDS

- _Features_
  - Support the following APIs:
    - `UpdateDatabaseOwner`
    - `ExecutePrivilegeDatabaseUserRole`
    - `ExecuteRevokeDatabaseUserRole`
    - `ListDatabaseUserRole`
    - `UpdatePostgresqlExtension`
- _Bug Fix_
  - None
- _Change_
  - **ListPostgresqlExtension**
    - changes of response param
      - `+ extensions.version_update`

### HuaweiCloud SDK VPN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateVgwCertificate**
    - changes of request param
      - `* certificate: object<VpnGatewayCertificateRequestBodyContent> -> object<UpdateVpnGatewayCertificateRequestBodyContent>`
      - `* body: object<VpnGatewayCertificateRequestBody> -> object<UpdateVpnGatewayCertificateRequestBody>`
  - **CreateVgw**
    - changes of response param
      - `+ vpn_gateway.tags`
  - **UpdateVgw**
    - changes of response param
      - `+ vpn_gateway.tags`

# 3.1.77 2024-02-01

### HuaweiCloud SDK AOM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListEvents**
    - changes of response param
      - `* events.annotations: map<string, string> -> map<string, object>`
      - `* events.attach_rule: map<string, string> -> map<string, object>`
  - **PushEvents**
    - changes of request param
      - `* events.annotations: map<string, string> -> map<string, object>`
      - `* events.attach_rule: map<string, string> -> map<string, object>`
  - **CreatePromInstance**
    - changes of request param
      - `+ region`

### HuaweiCloud SDK AOS

- _Features_
  - Support the APIs `CreatePrivateProvider`, `CreatePrivateProviderVersion`
- _Bug Fix_
  - None
- _Change_
  - **GetExecutionPlan**
    - changes of response param
      - `+ execution_plan_items.imported`
  - **GetExecutionPlanMetadata**
    - changes of response param
      - `+ summary.resource_import`

### HuaweiCloud SDK CC

- _Features_
  - Support the following APIs:
    - `ListGcbResourceTags`
    - `CreateGcbResourceTag`
    - `DeleteGcbResourceTag`
    - `BatchCreateGcbResourceTags`
    - `BatchDeleteGcbResourceTags`
    - `CountGcbResourceByTag`
    - `ListGcbResourceByTag`
    - `ListGcbTenantTags`
    - `ListGlobalConnectionBandwidths`
    - `CreateGlobalConnectionBandwidth`
    - `ShowGlobalConnectionBandwidth`
    - `UpdateGlobalConnectionBandwidth`
    - `DeleteGlobalConnectionBandwidth`
    - `AssociateGlobalConnectionBandwidthInstance`
    - `DisassociateGlobalConnectionBandwidthInstance`
    - `ListSupportBindingConnectionBandwidths`
    - `ListGlobalConnectionBandwidthConfigs`
    - `ListGlobalConnectionBandwidthSpecCodes`
    - `ListGlobalConnectionBandwidthSites`
    - `ListGlobalConnectionBandwidthLineLevels`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CDN

- _Features_
  - Support the API `ShowLogs`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateFactoryJob**
    - changes of request param
      - `+ single_node_job_type: enum value [NormalJob,OneClick]`
      - `- single_node_job_type: enum value [DataMigration]`
      - `+ nodes.type: enum value [DataMigration]`

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSparkJobs**
    - changes of request param
      - `+ job_name`
      - `- job-name`

### HuaweiCloud SDK DWS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDatabaseUser**
    - changes of response param
      - `+ user_type`
      - `+ name`
      - `+ logical_cluster`
      - `+ desc`
  - **ResizeClusterWithExistedNodes**
    - changes of request param
      - `- resize`
      - `- create_node_only`
      - `- is_scheduler_build_mode`
      - `- build_task_info`
      - `- order_id`
      - `- redis_conf.schedule_conf`
      - `- redis_conf.parallel_job`
      - `* redis_conf: object<RedisConf> -> object<RedisConfReq>`
  - **UpdateDatabaseAuthority**
    - changes of request param
      - `+ all_object`

### HuaweiCloud SDK GaussDB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateGaussMySqlInstance**
    - changes of request param
      - `+ tde_info`
  - **ShowGaussMySqlInstanceInfoUnifyStatus**
    - changes of response param
      - `+ instance.tde_info`
  - **ListGaussMySqlInstanceDetailInfoUnifyStatus**
    - changes of response param
      - `+ instances.tde_info`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the APIs `CreateShrinkageJob`, `ShowShrinkCheckResult`, `UpdateSinkTaskQuota`
  - **CreateInstanceTopic**
    - changes of response param
      - `- id`

### HuaweiCloud SDK MetaStudio

- _Features_
  - Support the APIs `ListSmartLiveJobs`, `CopyVideoScripts`
- _Bug Fix_
  - None
- _Change_
  - **ListRobot**
    - changes of response param
      - `+ llm_url`
      - `+ chat_rounds`
      - `+ is_stream`
      - `+ language`
      - `+ data.language`
      - `+ data.llm_url`
      - `+ data.is_stream`
      - `+ data.chat_rounds`
  - **CreateRobot**
    - changes of request param
      - `+ language`
      - `+ third_party_model_config`
  - **ShowRobot**
    - changes of response param
      - `+ llm_url`
      - `+ chat_rounds`
      - `+ is_stream`
      - `+ language`
  - **UpdateRobot**
    - changes of request param
      - `+ language`
      - `+ third_party_model_config`
  - **ListAssetSummary**
    - changes of response param
      - `+ asset_list.thumbnail_url`
  - **ListDigitalHumanVideo**
    - changes of response param
      - `+ jobs.job_type`
  - **CreateSmartChatRoom**
    - changes of request param
      - `+ layer_config.asset_id`
      - `+ layer_config.video_config.loop_count`
  - **ShowSmartChatRoom**
    - changes of response param
      - `+ layer_config.asset_id`
      - `+ layer_config.video_config.loop_count`
  - **UpdateSmartChatRoom**
    - changes of request param
      - `+ layer_config.asset_id`
      - `+ layer_config.video_config.loop_count`
    - changes of response param
      - `+ layer_config.asset_id`
      - `+ layer_config.video_config.loop_count`
  - **ShowSmartLive**
    - changes of response param
      - `+ room_id`
      - `+ cover_url`
      - `+ room_name`
  - **CheckTextLanguage**
    - changes of request param
      - `+ shoot_script.audio_config.asset_id`
  - **ShowAsset**
    - changes of response param
      - `+ app_user_id`
      - `- is_need_generate_cover`
      - `+ asset_extra_meta.voice_model_meta.order`
      - `+ asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ asset_extra_meta.human_model_2d_meta.model_version: enum value [V3_2]`
  - **UpdateDigitalAsset**
    - changes of request param
      - `+ shared_config`
      - `- is_need_generate_cover`
      - `+ asset_extra_meta.voice_model_meta.order`
      - `+ asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ asset_extra_meta.human_model_2d_meta.model_version: enum value [V3_2]`
    - changes of response param
      - `+ app_user_id`
      - `- is_need_generate_cover`
      - `+ asset_extra_meta.voice_model_meta.order`
      - `+ asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ asset_extra_meta.human_model_2d_meta.model_version: enum value [V3_2]`
  - **StartSmartLive**
    - changes of request param
      - `+ view_mode`
      - `+ play_policy.play_mode: enum value [NO_PRESET]`
  - **ListSmartLive**
    - changes of response param
      - `+ room_id`
      - `+ cover_url`
      - `+ room_name`
      - `+ smart_live_jobs.room_id`
      - `+ smart_live_jobs.room_name`
      - `+ smart_live_jobs.cover_url`
  - **CreateDigitalAsset**
    - changes of request param
      - `+ shared_config`
      - `- is_need_generate_cover`
      - `+ asset_extra_meta.voice_model_meta.order`
      - `+ asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ asset_extra_meta.human_model_2d_meta.model_version: enum value [V3_2]`
  - **ListAssets**
    - changes of request param
      - `+ is_movable`
      - `+ voice_provider`
      - `+ role`
    - changes of response param
      - `+ app_user_id`
      - `- is_need_generate_cover`
      - `+ assets.app_user_id`
      - `- assets.is_need_generate_cover`
      - `+ assets.asset_extra_meta.voice_model_meta.order`
      - `+ assets.asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ assets.asset_extra_meta.human_model_2d_meta.model_version: enum value [V3_2]`
  - **Create2DDigitalHumanVideo**
    - changes of request param
      - `+ shoot_scripts.shoot_script.layer_config.asset_id`
      - `+ shoot_scripts.shoot_script.layer_config.video_config.loop_count`
  - **Show2DDigitalHumanVideo**
    - changes of response param
      - `+ job_type`
      - `+ shoot_scripts.shoot_script.layer_config.asset_id`
      - `+ shoot_scripts.shoot_script.layer_config.video_config.loop_count`
  - **CreatePhotoDigitalHumanVideo**
    - changes of request param
      - `+ shoot_scripts.shoot_script.layer_config.asset_id`
      - `+ shoot_scripts.shoot_script.layer_config.video_config.loop_count`
  - **ShowPhotoDigitalHumanVideo**
    - changes of response param
      - `+ job_type`
      - `+ shoot_scripts.shoot_script.layer_config.asset_id`
      - `+ shoot_scripts.shoot_script.layer_config.video_config.loop_count`
  - **ListSmartLiveRooms**
    - changes of request param
      - `+ template_own_type`
    - changes of response param
      - `+ smart_live_rooms.project_id`
      - `+ smart_live_rooms.shared_config`
  - **CreateSmartLiveRoom**
    - changes of request param
      - `+ view_mode`
      - `+ play_policy.play_mode: enum value [NO_PRESET]`
      - `+ scene_scripts.layer_config.asset_id`
      - `+ scene_scripts.layer_config.video_config.loop_count`
      - `+ scene_scripts.shoot_scripts.audio_config.asset_id`
      - `+ interaction_rules.trigger.layer_config.asset_id`
  - **ShowSmartLiveRoom**
    - changes of response param
      - `+ view_mode`
      - `+ play_policy.play_mode: enum value [NO_PRESET]`
      - `+ scene_scripts.layer_config.asset_id`
      - `+ scene_scripts.layer_config.video_config.loop_count`
      - `+ scene_scripts.shoot_scripts.audio_config.asset_id`
      - `+ interaction_rules.trigger.layer_config.asset_id`
  - **UpdateSmartLiveRoom**
    - changes of request param
      - `+ view_mode`
      - `+ play_policy.play_mode: enum value [NO_PRESET]`
      - `+ scene_scripts.layer_config.asset_id`
      - `+ scene_scripts.layer_config.video_config.loop_count`
      - `+ scene_scripts.shoot_scripts.audio_config.asset_id`
      - `+ interaction_rules.trigger.layer_config.asset_id`
    - changes of response param
      - `+ view_mode`
      - `+ play_policy.play_mode: enum value [NO_PRESET]`
      - `+ scene_scripts.layer_config.asset_id`
      - `+ scene_scripts.layer_config.video_config.loop_count`
      - `+ scene_scripts.shoot_scripts.audio_config.asset_id`
      - `+ interaction_rules.trigger.layer_config.asset_id`
  - **UpdateInteractionRuleGroup**
    - changes of request param
      - `+ interaction_rules.trigger.layer_config.asset_id`
    - changes of response param
      - `+ interaction_rules.trigger.layer_config.asset_id`
  - **CreateVideoScripts**
    - changes of request param
      - `+ shoot_scripts.shoot_script.layer_config.asset_id`
      - `+ shoot_scripts.shoot_script.layer_config.video_config.loop_count`
  - **ShowVideoScript**
    - changes of response param
      - `+ shoot_scripts.shoot_script.layer_config.asset_id`
      - `+ shoot_scripts.shoot_script.layer_config.video_config.loop_count`
  - **UpdateVideoScript**
    - changes of request param
      - `+ shoot_scripts.shoot_script.layer_config.asset_id`
      - `+ shoot_scripts.shoot_script.layer_config.video_config.loop_count`
  - **CreateInteractionRuleGroup**
    - changes of request param
      - `+ interaction_rules.trigger.layer_config.asset_id`
  - **ListInteractionRuleGroups**
    - changes of response param
      - `+ interaction_rule_groups.interaction_rules.trigger.layer_config.asset_id`

### HuaweiCloud SDK NAT

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListNatGatewayDnatRules**
    - changes of request param
      - `+ marker`
  - **ListNatGatewaySnatRules**
    - changes of request param
      - `+ marker`
  - **ListNatGateways**
    - changes of request param
      - `+ marker`

### HuaweiCloud SDK OMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **StartTask**
    - changes of request param
      - `+ json_auth_file`
  - **StartTaskGroup**
    - changes of request param
      - `+ json_auth_file`
  - **RetryTaskGroup**
    - changes of request param
      - `+ json_auth_file`
  - **ShowBucketList**
    - changes of request param
      - `+ json_auth_file`
  - **ShowBucketRegion**
    - changes of request param
      - `+ json_auth_file`
  - **CheckPrefix**
    - changes of request param
      - `+ json_auth_file`
  - **ShowBucketObjects**
    - changes of request param
      - `+ json_auth_file`
  - **ShowCdnInfo**
    - changes of request param
      - `+ source_cdn.authentication_type: enum value [AZURE_SAS_TOKEN]`
  - **CreateSyncTask**
    - changes of request param
      - `+ dst_storage_policy`
      - `+ source_cdn.authentication_type: enum value [AZURE_SAS_TOKEN]`
  - **ShowTaskGroup**
    - changes of response param
      - `+ dst_storage_policy`
      - `+ src_node.cloud_type: enum value [GOOGLE]`
      - `+ src_node.list_file.list_file_num`
  - **CreateTask**
    - changes of request param
      - `+ dst_storage_policy`
      - `+ source_cdn.authentication_type: enum value [AZURE_SAS_TOKEN]`
      - `+ smn_config.message_template_name`
      - `+ src_node.json_auth_file`
      - `+ src_node.list_file.list_file_num`
  - **ListTasks**
    - changes of response param
      - `+ dst_storage_policy`
      - `+ tasks.dst_storage_policy`
      - `+ tasks.src_node.cloud_type: enum value [Google]`
      - `+ tasks.src_node.list_file.list_file_num`
  - **CreateTaskGroup**
    - changes of request param
      - `+ dst_storage_policy`
      - `+ smn_config.message_template_name`
      - `+ source_cdn.authentication_type: enum value [AZURE_SAS_TOKEN]`
      - `+ src_node.json_auth_file`
      - `+ src_node.list_file.list_file_num`
  - **ListTaskGroup**
    - changes of response param
      - `+ dst_storage_policy`
      - `+ taskgroups.dst_storage_policy`
      - `+ taskgroups.src_node.cloud_type: enum value [GOOGLE]`
      - `+ taskgroups.src_node.list_file.list_file_num`

### HuaweiCloud SDK RDS

- _Features_
  - Support the following APIs:
    - `StartInstanceReduceVolumeAction`
    - `UpdateHostPrivilege`
    - `ShowIncreBackupPolicy1`
    - `UpdateIncreBackupPolicy1`
    - `ListRdSforMySqlProxy`
    - `DeleteRdSforMySqlProxy`
    - `ModifyRdSforMySqlProxyRouteMode`
    - `RestartRdSforMysqlProxy`
    - `ListRdSforMysqlProxyFlavors`
    - `CreateRdSforMySqlProxy`
- _Bug Fix_
  - None
- _Change_
  - **SetAuditlogPolicy**
    - changes of request param
      - `+ audit_types`
  - **CreateDbUser**
    - changes of request param
      - `+ is_privilege`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowGroup**
    - changes of response param
      - `* retry_max_time: number -> int32`
  - **UpdateConsumerGroup**
    - changes of request param
      - `* retry_max_time: number -> int32`
  - **ResetConsumeOffset**
    - changes of request param
      - `* timestamp: number -> string`
  - **CreateConsumerGroupOrBatchDeleteConsumerGroup**
    - changes of request param
      - `+ createdAt`
      - `+ permissions`
      - `+ consume_orderly`
      - `- from_beginning`
      - `* retry_max_time: number -> int32`
  - **ListInstanceConsumerGroups**
    - changes of response param
      - `+ groups.createdAt`
      - `+ groups.permissions`
      - `+ groups.consume_orderly`
      - `- groups.from_beginning`
      - `* groups.retry_max_time: number -> int32`
  - **BatchUpdateConsumerGroup**
    - changes of request param
      - `+ groups.createdAt`
      - `+ groups.permissions`
      - `+ groups.consume_orderly`
      - `- groups.from_beginning`
      - `* groups.retry_max_time: number -> int32`

### HuaweiCloud SDK WAF

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListEvent**
    - changes of request param
      - `+ X-Language`
  - **ShowEvent**
    - changes of request param
      - `+ X-Language`

# 3.1.76 2024-01-25

### HuaweiCloud SDK AOM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **DeleteserviceDiscoveryRules**
    - changes of response param
      - `+ id`

### HuaweiCloud SDK APIG

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDetailsOfApiV2**
    - changes of response param
      - `+ policy_https.req_protocol: enum value [GRPC]`
      - `+ backend_api.req_protocol: enum value [GRPC]`
  - **UpdateApiV2**
    - changes of request param
      - `+ policy_https.req_protocol: enum value [GRPC]`
      - `+ backend_api.req_protocol: enum value [GRPC]`
    - changes of response param
      - `+ policy_https.req_protocol: enum value [GRPC]`
      - `+ backend_api.req_protocol: enum value [GRPC]`
  - **ListApiVersionDetailV2**
    - changes of response param
      - `+ policy_https.req_protocol: enum value [GRPC]`
      - `+ backend_api.req_protocol: enum value [GRPC]`
  - **CreateApiV2**
    - changes of request param
      - `+ policy_https.req_protocol: enum value [GRPC]`
      - `+ backend_api.req_protocol: enum value [GRPC]`
    - changes of response param
      - `+ policy_https.req_protocol: enum value [GRPC]`
      - `+ backend_api.req_protocol: enum value [GRPC]`
  - **ListApisV2**
    - changes of response param
      - `+ apis.backend_api.req_protocol: enum value [GRPC]`

### HuaweiCloud SDK CSE

- _Features_
  - Support the following APIs:
    - `ShowPlugins`
    - `CreatePlugin`
    - `ShowSinglePlugin`
    - `ModifyPlugin`
    - `DeletePlugin`
    - `ShowHttp2Rpcs`
    - `CreateHttp2Rpc`
    - `ModifyHttp2Rpc`
    - `DeleteHttp2Rpc`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateFactoryJob**
    - changes of request param
      - `+ nodes.type: enum value [MRSFlinkJob]`

### HuaweiCloud SDK GaussDB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateGaussMySqlReadonlyNode**
    - changes of request param
      - `+ availability_zones`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeAutoClassification**
    - changes of request param
      - `+ detect_seal`
    - changes of response param
      - `+ result.seal_mark`
  - **RecognizeVatInvoice**
    - changes of response param
      - `+ result.province`
      - `+ result.city`
      - `+ result.belong_buyer_name`
      - `+ result.belong_seller_name`
      - `+ result.belong_vat_code`
      - `+ result.belong_number`
      - `+ result.belong_pages`
      - `+ result.belong_current_page`
      - `+ result.belong_remarks`
      - `+ result.belong_issue_date`
      - `+ result.sales_mark`
      - `+ result.belong_sum_amount`
      - `+ result.belong_sum_tax`
      - `+ result.belong_subtotal_amount`
      - `+ result.belong_subtotal_tax`
      - `+ result.belong_discount_amount`
      - `+ result.belong_discount_tax`
      - `+ result.belong_item_list`

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListFlavors**
    - changes of request param
      - `+ is_serverless`
  - **ListInstances**
    - changes of response param
      - `+ instances.serverless_info`
  - **CreateInstance**
    - changes of request param
      - `+ serverless_info`
  - **CreateRestoreInstance**
    - changes of request param
      - `+ serverless_info`

### HuaweiCloud SDK SMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateTask**
    - changes of request param
      - `+ source_server.start_type`
  - **RegisterServer**
    - changes of request param
      - `+ start_type`

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateAssetByFileUpload**
    - changes of request param
      - `* category_id: string -> int32`
  - **CreateAssetProcessTask**
    - changes of request param
      - `+ hls_storage_type`
  - **ListTopStatistics**
    - changes of response param
      - `- top_urls.duration_ms`
  - **ListAssetList**
    - changes of response param
      - `- assets.duration_ms`
  - **ShowTakeOverAssetDetails**
    - changes of response param
      - `- base_info.meta_data.duration_ms`
  - **PublishAssets**
    - changes of response param
      - `- asset_info_array.base_info.meta_data.duration_ms`
  - **UnpublishAssets**
    - changes of response param
      - `- asset_info_array.base_info.meta_data.duration_ms`
  - **ShowAssetMeta**
    - changes of response param
      - `- asset_info_array.base_info.meta_data.duration_ms`
  - **ShowAssetDetail**
    - changes of response param
      - `- base_info.meta_data.duration_ms`
  - **ShowTakeOverTaskDetails**
    - changes of response param
      - `- assets.base_info.meta_data.duration_ms`

# 3.1.75 2024-01-18

### HuaweiCloud SDK AOM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListPromInstance**
    - changes of request param
      - `+ prom_status: enum value [DELETED,NORMAL,ALL]`
      - `+ prom_status: enum value [true,false]`
    - changes of response param
      - `- prometheus.cce_spec`
      - `- prometheus.prom_config`
      - `- prometheus.application`
      - `+ prometheus.prom_status: enum value [DELETED,NORMAL,ALL]`
  - **CreatePromInstance**
    - changes of request param
      - `- prom_id`
      - `- cce_spec`
      - `- prom_config`
      - `- prom_create_timestamp`
      - `- prom_update_timestamp`
      - `- prom_status`
      - `- is_deleted_tag`
      - `- deleted_time`
      - `- prom_spec_config`
      - `- cce_spec_config`
      - `- application`
      - `- prom_type: enum value [DEFAULT]`
      - `* body: object<PromInstanceEpsModel> -> object<PromInstanceRequestModel>`
    - changes of response param
      - `- prometheus.cce_spec`
      - `- prometheus.prom_config`
      - `- prometheus.is_deleted_tag`
      - `- prometheus.application`
      - `- prometheus.prom_type: enum value [DEFAULT]`
      - `+ prometheus.prom_status: enum value [DELETED,NORMAL,ALL]`
      - `* prometheus: list<PromInstanceEpsModel> -> list<PromInstanceEpsCreateModel>`
  - **AddOrUpdateServiceDiscoveryRules**
    - changes of response param
      - `+ id`
      - `+ results`

### HuaweiCloud SDK APIG

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDetailsOfInstanceV2**
    - changes of response param
      - `- public_ipv6_ips`
      - `- unreliable_ips`
      - `- node_ipv6_ips`
      - `- enable_fullstack_ipv6`
      - `- publicips.ipv6_address`
  - **UpdateInstanceV2**
    - changes of response param
      - `- public_ipv6_ips`
      - `- unreliable_ips`
      - `- node_ipv6_ips`
      - `- enable_fullstack_ipv6`
      - `- publicips.ipv6_address`
  - **CreateInstanceV2**
    - changes of request param
      - `+ spec_id: enum value [BASIC_IPV6,PROFESSIONAL_IPV6,ENTERPRISE_IPV6,PLATINUM_IPV6]`
  - **CreateOrder**
    - changes of request param
      - `+ instance_info.spec_id: enum value [BASIC_IPV6,PROFESSIONAL_IPV6,ENTERPRISE_IPV6,PLATINUM_IPV6]`

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowCluster**
    - changes of response param
      - `+ spec.enableAutopilot`
  - **UpdateCluster**
    - changes of response param
      - `+ spec.enableAutopilot`
  - **DeleteCluster**
    - changes of response param
      - `+ spec.enableAutopilot`
  - **CreateCluster**
    - changes of request param
      - `+ spec.enableAutopilot`
    - changes of response param
      - `+ spec.enableAutopilot`
  - **ListClusters**
    - changes of response param
      - `+ items.spec.enableAutopilot`

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowTopUrl**
    - changes of request param
      - `+ service_area: enum value [global]`

### HuaweiCloud SDK CDN

- _Features_
  - Support the API `ListCdnDomainTopRefers`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the following APIs:
    - `ShowDataDetail`
    - `ShowDatamapLineage`
    - `ShowLineageBulk`
    - `ShowNodes`
    - `ShowInstanceInfos`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DCS

- _Features_
  - Support the API `ChangeMasterStandbyAsync`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DSC

- _Features_
  - Support the API `DeleteScanJob`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DWS

- _Features_
  - Support the API `ListWorkloadPlans`
- _Bug Fix_
  - None
- _Change_
  - **ShowWorkloadPlan**
    - changes of response param
      - `* workload_plan.status: string -> int32`

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateListener**
    - changes of request param
      - `+ listener.protection_status`
      - `+ listener.protection_reason`
  - **ListLoadbalancers**
    - changes of response param
      - `+ loadbalancers.billing_info`
      - `+ loadbalancers.protection_status`
      - `+ loadbalancers.protection_reason`
  - **CreateLoadbalancer**
    - changes of response param
      - `+ loadbalancer_id`
      - `+ order_id`
      - `+ loadbalancer.billing_info`
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
  - **ShowLoadbalancer**
    - changes of response param
      - `+ loadbalancer.billing_info`
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
  - **UpdateLoadbalancer**
    - changes of response param
      - `+ loadbalancer.billing_info`
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`

### HuaweiCloud SDK MetaStudio

- _Features_
  - Support the following APIs:
    - `CreateDialogUrl`
    - `StartSmartChatJob`
    - `StopSmartChatJob`
    - `ShowSmartChatJob`
    - `CreateOnceCode`
    - `ListRobot`
    - `CreateRobot`
    - `ShowRobot`
    - `UpdateRobot`
    - `DeleteRobot`
    - `ListSmartChatRooms`
    - `CreateSmartChatRoom`
    - `ShowSmartChatRoom`
    - `UpdateSmartChatRoom`
    - `DeleteSmartChatRoom`
- _Bug Fix_
  - None
- _Change_
  - **ListDigitalHumanVideo**
    - changes of request param
      - `+ job_type`
  - **ListSmartLiveRooms**
    - changes of response param
      - `+ smart_live_rooms.last_job_status: enum value [BLOCKED]`

### HuaweiCloud SDK OCR

- _Features_
  - Support the API `RecognizeSeal`
- _Bug Fix_
  - None
- _Change_
  - **RecognizeFlightItinerary**
    - changes of response param
      - `+ result.tax`
      - `+ result.tax_rate`
      - `+ result.buyer_name`
      - `+ result.buyer_id`
      - `+ result.number`
      - `+ result.international_flag`
      - `+ result.issue_status`

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAuditlogPolicy**
    - changes of response param
      - `+ all_audit_log_action`
      - `+ audit_types`
  - **ListRecycleInstances**
    - changes of response param
      - `+ instances.is_serverless`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ValidateConsumedMessage**
    - changes of request param
      - `+ topic`

# 3.1.74 2024-01-11

### HuaweiCloud SDK APIG

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDetailsOfInstanceV2**
    - changes of response param
      - `+ public_ipv6_ips`
      - `+ unreliable_ips`
      - `+ node_ipv6_ips`
      - `+ enable_fullstack_ipv6`
      - `+ publicips.ipv6_address`
  - **UpdateInstanceV2**
    - changes of response param
      - `+ public_ipv6_ips`
      - `+ unreliable_ips`
      - `+ node_ipv6_ips`
      - `+ enable_fullstack_ipv6`
      - `+ publicips.ipv6_address`
  - **CreateInstanceV2**
    - changes of request param
      - `- spec_id: enum value [BASIC_IPV6,PROFESSIONAL_IPV6,ENTERPRISE_IPV6,PLATINUM_IPV6]`
  - **CreateOrder**
    - changes of request param
      - `- instance_info.spec_id: enum value [BASIC_IPV6,PROFESSIONAL_IPV6,ENTERPRISE_IPV6,PLATINUM_IPV6]`

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateNodePool**
    - changes of response param
      - `- status.jobId`
      - `* status: object<NodePoolStatus> -> object<UpdateNodePoolStatus>`
  - **CreateNodePool**
    - changes of response param
      - `- status.jobId`
      - `* status: object<NodePoolStatus> -> object<CreateNodePoolStatus>`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the APIs `ImportLineage`, `ListAllTables`, `ImportCatalogs`, `ImportModels`
- _Bug Fix_
  - None
- _Change_
  - **ShowEntities**
    - changes of response param
      - `* entities.connection: list<Connection> -> object<Connection>`
  - **ShowMetricAssets**
    - changes of response param
      - `* entities.connection: list<Connection> -> object<Connection>`

### HuaweiCloud SDK DRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchValidateConnections**
    - changes of request param
      - `+ jobs.customized_dns`

### HuaweiCloud SDK DRS

- _Features_
  - Support the following APIs:
    - `BatchCreateTags`
    - `BatchDeleteTags`
    - `ListInstanceByTags`
    - `CountInstanceByTags`
    - `ListInstanceTags`
    - `ListTags`
    - `UpdateJobConfigurations`
    - `ListJobParameters`
    - `ListJobHistoryParameters`
- _Bug Fix_
  - None
- _Change_
  - **ListLinks**
    - changes of response param
      - `+ job_links.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
  - **ListJobs**
    - changes of request param
      - `+ engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
    - changes of response param
      - `+ jobs.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
      - `+ jobs.children.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
  - **CreateJob**
    - changes of request param
      - `+ job.base_info.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
      - `+ job.source_endpoint.customized_dns`
      - `+ job.source_endpoint.db_type: enum value [redis,rediscluster,gaussredis]`
      - `+ job.source_endpoint.endpoint.endpoint_name: enum value [redis,ecs_redis,rediscluster,ecs_rediscluster,cloud_gaussdb_redis]`
      - `+ job.source_endpoint.config.node_num`
  - **BatchCreateJobsAsync**
    - changes of request param
      - `+ jobs.base_info.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
      - `+ jobs.source_endpoint.customized_dns`
      - `+ jobs.source_endpoint.db_type: enum value [redis,rediscluster,gaussredis]`
      - `+ jobs.source_endpoint.endpoint.endpoint_name: enum value [redis,ecs_redis,rediscluster,ecs_rediscluster,cloud_gaussdb_redis]`
      - `+ jobs.source_endpoint.config.node_num`
  - **ListAsyncJobDetail**
    - changes of response param
      - `+ jobs.base_info.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
      - `+ jobs.source_endpoint.customized_dns`
      - `+ jobs.source_endpoint.db_type: enum value [redis,rediscluster,gaussredis]`
      - `+ jobs.source_endpoint.endpoint.endpoint_name: enum value [redis,ecs_redis,rediscluster,ecs_rediscluster,cloud_gaussdb_redis]`
      - `+ jobs.source_endpoint.config.node_num`
  - **UpdateBatchAsyncJobs**
    - changes of request param
      - `+ jobs.params.base_info.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
      - `+ jobs.params.source_endpoint.customized_dns`
      - `+ jobs.params.source_endpoint.db_type: enum value [redis,rediscluster,gaussredis]`
      - `+ jobs.params.source_endpoint.endpoint.endpoint_name: enum value [redis,ecs_redis,rediscluster,ecs_rediscluster,cloud_gaussdb_redis]`
      - `+ jobs.params.source_endpoint.config.node_num`
  - **ShowJobDetail**
    - changes of response param
      - `+ job.base_info.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
      - `+ job.source_endpoint.customized_dns`
      - `+ job.source_endpoint.db_type: enum value [redis,rediscluster,gaussredis]`
      - `+ job.source_endpoint.endpoint.endpoint_name: enum value [redis,ecs_redis,rediscluster,ecs_rediscluster,cloud_gaussdb_redis]`
      - `+ job.source_endpoint.config.node_num`
  - **UpdateJob**
    - changes of request param
      - `+ job.params.base_info.engine_type: enum value [redis-to-gaussredis,rediscluster-to-gaussredis]`
      - `+ job.params.source_endpoint.customized_dns`
      - `+ job.params.source_endpoint.db_type: enum value [redis,rediscluster,gaussredis]`
      - `+ job.params.source_endpoint.endpoint.endpoint_name: enum value [redis,ecs_redis,rediscluster,ecs_rediscluster,cloud_gaussdb_redis]`
      - `+ job.params.source_endpoint.config.node_num`
  - **ExecuteJobAction**
    - changes of request param
      - `+ job.action_name: enum value [column_limit,reload_parameters]`
      - `+ job.action_params.endpoints.customized_dns`
      - `+ job.action_params.endpoints.db_type: enum value [redis,rediscluster,gaussredis]`
      - `+ job.action_params.endpoints.endpoint.endpoint_name: enum value [redis,ecs_redis,rediscluster,ecs_rediscluster,cloud_gaussdb_redis]`
      - `+ job.action_params.endpoints.config.node_num`
  - **BatchExecuteJobActions**
    - changes of request param
      - `+ jobs.action_name: enum value [column_limit,reload_parameters]`
      - `+ jobs.action_params.endpoints.customized_dns`
      - `+ jobs.action_params.endpoints.db_type: enum value [redis,rediscluster,gaussredis]`
      - `+ jobs.action_params.endpoints.endpoint.endpoint_name: enum value [redis,ecs_redis,rediscluster,ecs_rediscluster,cloud_gaussdb_redis]`
      - `+ jobs.action_params.endpoints.config.node_num`

### HuaweiCloud SDK DWS

- _Features_
  - Support the following APIs:
    - `ListWorkloadQueueUsers`
    - `ShowWorkloadQueue`
    - `ShowWorkloadPlanStage`
    - `DeleteWorkloadPlanStage`
    - `ListPlanExecLogs`
    - `DeleteQueueUserList`
    - `SwitchPlanStage`
    - `AddQueueUserList`
    - `UpdateQueueResources`
    - `ListSchemas`
    - `UpdateSchemas`
    - `ShowResourceStatistics`
    - `AddWorkloadPlanStage`
- _Bug Fix_
  - None
- _Change_
  - **CreateClusterV2**
    - changes of request param
      - `* cluster.tags: object<Tags> -> list<Tags>`

### HuaweiCloud SDK ECS

- _Features_
  - Support the API `NovaShowServerInterface`
- _Bug Fix_
  - None
- _Change_
  - **UpdateServer**
    - changes of response param
      - `+ server.OS-EXT-SRV-ATTR:user_data`

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowCertificate**
    - changes of response param
      - `+ tenant_id`
      - `+ create_time`
      - `+ certificate`
      - `+ description`
      - `+ expire_time`
      - `+ private_key`
      - `+ type`
      - `+ update_time`
      - `+ admin_state_up`
      - `+ domain`
      - `+ name`
      - `+ id`
  - **UpdateCertificate**
    - changes of response param
      - `+ tenant_id`
      - `+ create_time`
      - `+ certificate`
      - `+ description`
      - `+ expire_time`
      - `+ private_key`
      - `+ type`
      - `+ update_time`
      - `+ admin_state_up`
      - `+ domain`
      - `+ name`
      - `+ id`
  - **CreateCertificate**
    - changes of response param
      - `+ tenant_id`
      - `+ create_time`
      - `+ certificate`
      - `+ description`
      - `+ expire_time`
      - `+ private_key`
      - `+ type`
      - `+ update_time`
      - `+ admin_state_up`
      - `+ domain`
      - `+ name`
      - `+ id`
  - **ListHealthmonitors**
    - changes of response param
      - `+ healthmonitors`
  - **CreateHealthmonitor**
    - changes of response param
      - `+ healthmonitor`
  - **ShowHealthmonitors**
    - changes of response param
      - `+ healthmonitor`
  - **UpdateHealthmonitor**
    - changes of response param
      - `+ healthmonitor`
  - **ListMembers**
    - changes of response param
      - `+ members`
  - **CreateMember**
    - changes of response param
      - `+ member`
  - **ShowMember**
    - changes of response param
      - `+ member`
  - **UpdateMember**
    - changes of response param
      - `+ member`
  - **ShowLoadbalancer**
    - changes of response param
      - `+ loadbalancer`
  - **UpdateLoadbalancer**
    - changes of request param
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
    - changes of response param
      - `+ loadbalancer`
  - **ListL7rules**
    - changes of response param
      - `+ rules`
  - **CreateL7rule**
    - changes of response param
      - `+ rule`
  - **ShowL7rule**
    - changes of response param
      - `+ rule`
  - **UpdateL7rule**
    - changes of response param
      - `+ rule`
  - **ListPools**
    - changes of response param
      - `+ pools`
  - **CreatePool**
    - changes of request param
      - `+ pool.protection_status`
      - `+ pool.protection_reason`
    - changes of response param
      - `+ pool`
  - **ShowPool**
    - changes of response param
      - `+ pool`
  - **UpdatePool**
    - changes of request param
      - `+ pool.protection_status`
      - `+ pool.protection_reason`
    - changes of response param
      - `+ pool`
  - **ListListeners**
    - changes of response param
      - `+ listeners`
  - **CreateListener**
    - changes of response param
      - `+ listener`
  - **ShowListener**
    - changes of response param
      - `+ listener`
  - **UpdateListener**
    - changes of request param
      - `+ listener.protection_status`
      - `+ listener.protection_reason`
    - changes of response param
      - `+ listener`
  - **CreateLoadbalancer**
    - changes of request param
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
    - changes of response param
      - `+ loadbalancer`
  - **ListLoadbalancers**
    - changes of response param
      - `+ loadbalancers.publicips`
      - `+ loadbalancers.charge_mode`
      - `+ loadbalancers.frozen_scene`
  - **ListL7policies**
    - changes of response param
      - `+ l7policies`
  - **CreateL7policy**
    - changes of response param
      - `+ l7policy`
  - **UpdateL7policies**
    - changes of response param
      - `+ l7policy`

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListPools**
    - changes of request param
      - `+ connection_drain`
    - changes of response param
      - `+ pools.connection_drain`
  - **CreatePool**
    - changes of request param
      - `+ pool.connection_drain`
    - changes of response param
      - `+ pool.connection_drain`
  - **ShowPool**
    - changes of response param
      - `+ pool.connection_drain`
  - **UpdatePool**
    - changes of request param
      - `+ pool.connection_drain`
    - changes of response param
      - `+ pool.connection_drain`
  - **ListMasterSlavePools**
    - changes of request param
      - `+ connection_drain`
    - changes of response param
      - `+ pools.connection_drain`
  - **CreateMasterSlavePool**
    - changes of request param
      - `+ pool.connection_drain`
    - changes of response param
      - `+ pool.connection_drain`
  - **ShowMasterSlavePool**
    - changes of response param
      - `+ pool.connection_drain`

### HuaweiCloud SDK GES

- _Features_
  - Support the APIs `ExportBackup2`, `ImportBackup2`
- _Bug Fix_
  - None
- _Change_
  - **ListGraphs2**
    - changes of response param
      - `+ graphs.capacity_ratio`
  - **CreateGraph2**
    - changes of request param
      - `+ graph.capacity_ratio`
  - **ShowGraph2**
    - changes of response param
      - `+ graph.capacity_ratio`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateReassignmentTask**
    - changes of request param
      - `+ is_schedule`
      - `+ execute_at`

### HuaweiCloud SDK MPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListTranscodingTask**
    - changes of response param
      - `+ task_array.progress`
  - **ListTranscodeDetail**
    - changes of response param
      - `+ task_array.progress`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeIdCard**
    - changes of request param
      - `+ detect_tampering`
      - `+ detect_border_integrity`
      - `+ detect_blocking_within_border`
      - `+ detect_blur`
      - `+ detect_interim`
      - `+ detect_glare`
    - changes of response param
      - `+ result.detect_tampering_result`
      - `+ result.detect_border_integrity_result`
      - `+ result.detect_blocking_within_border_result`
      - `+ result.detect_blur_result`
      - `+ result.detect_interim_result`
      - `+ result.detect_glare_result`
      - `+ result.score_info`
      - `+ result.front`
      - `+ result.back`
      - `+ result.verification_result.valid_validity_period`

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of request param
      - `+ eps_id`
  - **BatchRestoreDatabase**
    - changes of request param
      - `+ instances.is_fast_restore`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAddressGroup**
    - changes of response param
      - `+ address_group.ip_extra_set`
  - **UpdateAddressGroup**
    - changes of request param
      - `+ address_group.ip_extra_set`
    - changes of response param
      - `+ address_group.ip_extra_set`
  - **ListAddressGroup**
    - changes of response param
      - `+ address_groups.ip_extra_set`
  - **CreateAddressGroup**
    - changes of request param
      - `+ address_group.ip_extra_set`
    - changes of response param
      - `+ address_group.ip_extra_set`

# 3.1.73 2024-01-04

### HuaweiCloud SDK AOM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListNotifiedHistories**
    - changes of response param
      - `+ notified_histories`
      - `- event_sn`
      - `- notifications`
  - **ListEvent2alarmRule**
    - changes of response param
      - `+ event_names`
      - `+ migrated`
      - `+ topics`
      - `+ trigger_policies.trigger_type: enum value [immediately]`
      - `- trigger_policies.trigger_type: enum value [notification]`
      - `+ alarm_type: enum value [notification,denoising]`
      - `* : list<event2alarmRuleBody> -> list<Event2alarmRuleBody>`
  - **UpdateEventRule**
    - changes of request param
      - `+ event_names`
      - `+ migrated`
      - `+ topics`
      - `+ trigger_policies.trigger_type: enum value [immediately]`
      - `- trigger_policies.trigger_type: enum value [notification]`
      - `+ alarm_type: enum value [notification,denoising]`
      - `* body: object<event2alarmRuleBody> -> object<Event2alarmRuleBody>`
  - **AddEvent2alarmRule**
    - changes of request param
      - `+ event_names`
      - `+ migrated`
      - `+ topics`
      - `+ trigger_policies.trigger_type: enum value [immediately]`
      - `- trigger_policies.trigger_type: enum value [notification]`
      - `+ alarm_type: enum value [notification,denoising]`
      - `* body: object<event2alarmRuleBody> -> object<Event2alarmRuleBody>`
  - **ListMuteRule**
    - changes of response param
      - `* mute_config.scope: list<string> -> list<integer>`
  - **UpdateMuteRule**
    - changes of request param
      - `* mute_config.scope: list<string> -> list<integer>`
  - **AddMuteRules**
    - changes of request param
      - `* mute_config.scope: list<string> -> list<integer>`
  - **ShowActionRule**
    - changes of response param
      - `+ type: enum value [1,2]`
      - `- type: enum value ["1","2"]`
  - **ListEvents**
    - changes of response param
      - `* events.metadata: object -> map<string, string>`
      - `* events.annotations: object -> map<string, string>`
      - `* events.attach_rule: object -> map<string, string>`
  - **PushEvents**
    - changes of request param
      - `* events.metadata: object -> map<string, string>`
      - `* events.annotations: object -> map<string, string>`
      - `* events.attach_rule: object -> map<string, string>`
  - **UpdateActionRule**
    - changes of request param
      - `+ type: enum value [1,2]`
      - `- type: enum value ["1","2"]`
  - **AddActionRule**
    - changes of request param
      - `+ type: enum value [1,2]`
      - `- type: enum value ["1","2"]`
  - **ListActionRule**
    - changes of response param
      - `+ action_rules.type: enum value [1,2]`
      - `- action_rules.type: enum value ["1","2"]`
  - **ListMetricItems**
    - changes of response param
      - `+ metaData.offset`
      - `+ metaData.nextToken`
      - `- metaData.start`
      - `* metaData: object<metaData> -> object<MetaDataSeries>`
  - **UpdateAlarmRule**
    - changes of request param
      - `+ is_turn_on`
      - `- id_turn_on`
      - `+ comparison_operator: enum value [<,>,<=,>=]`
      - `+ period: enum value [60000,300000,900000,36000000]`
  - **AddAlarmRule**
    - changes of request param
      - `+ is_turn_on`
      - `- id_turn_on`
      - `+ comparison_operator: enum value [<,>,<=,>=]`
      - `+ period: enum value [60000,300000,900000,36000000]`
  - **ListServiceDiscoveryRules**
    - changes of response param
      - `+ id`
      - `+ appRules.desc`
      - `+ appRules.spec.dataSource`
      - `+ appRules.spec.editable`
      - `+ appRules.spec.aom_metric_relabel_configs`
  - **AddOrUpdateServiceDiscoveryRules**
    - changes of request param
      - `+ appRules.desc`
      - `+ appRules.spec.dataSource`
      - `+ appRules.spec.editable`
      - `+ appRules.spec.aom_metric_relabel_configs`

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the following APIs:
    - `ShowProjectOpenSourceStrategy`
    - `ListProjectOpenSourceStrategy`
    - `CreateOpenSourceStrategy`
    - `UpdateOpenSourceStrategy`
    - `ShowOpenSourceStrategy`
    - `ListOpenSourceStrategy`
    - `DeleteOpenSourceStrategy`
    - `SwitchOpenSourceStrategy`

### HuaweiCloud SDK CSE

- _Features_
  - Support the API `ShowEngineQuotas`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the APIs `ListFactoryTaskOverview`, `ListFactoryTaskCompletion`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateAccessCode**
    - changes of request param
      - `+ force_disconnect`

### HuaweiCloud SDK Kafka

- _Features_
  - Support the API `ResetMessageOffsetWithEngine`
- _Bug Fix_
  - None
- _Change_
  - **ShowGroups**
    - changes of response param
      - `* group.group_message_offsets.message_current_offset: int32 -> int64`
      - `* group.group_message_offsets.message_log_end_offset: int32 -> int64`
  - **ResetMessageOffset**
    - changes of request param
      - `* message_offset: int32 -> int64`
      - `* timestamp: int32 -> int64`
  - **ShowMessages**
    - changes of response param
      - `* messages.message_offset: int32 -> int64`
  - **ShowInstanceMessages**
    - changes of response param
      - `* messages.message_offset: int32 -> int64`

### HuaweiCloud SDK MPC

- _Features_
  - Support the APIs `ShowTenantAccessInfo`, `UpdateTenantAccessInfo`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK MRS

- _Features_
  - Support the APIs `ShowMrsFlavors`, `ShowSyncIamUser`, `UpdateSyncIamUser`, `CancelSyncIamUser`
- _Bug Fix_
  - None
- _Change_
  - **CreateCluster**
    - changes of request param
      - `+ smn_notify`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchRestartOrDeleteInstances**
    - changes of request param
      - `- action: enum value [restart]`
  - **ListInstancesDetails**
    - changes of request param
      - `+ status: enum value [UPGRADING,UPGRADINGFAILED]`

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **SetOffSiteBackupPolicy**
    - changes of request param
      - `* policy_para: list<OffSiteBackupPolicy> -> object<OffSiteBackupPolicy>`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ResizeInstance**
    - changes of request param
      - `+ publicip_id`

### HuaweiCloud SDK SecMaster

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListAlerts**
    - changes of response param
      - `+ data.data_object.data_source`
      - `+ data.data_object.severity`
      - `+ data.data_object.creator`
      - `- data.data_object.datasource`
      - `- data.data_object.serverity`
      - `- data.data_object.cteator`

### HuaweiCloud SDK SFSTurbo

- _Features_
  - Support the following APIs:
    - `ShowLdapConfig`
    - `UpdateLdapConfig`
    - `CreateLdapConfig`
    - `DeleteLdapConfig`
    - `ShowJobDetail`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK SMN

- _Features_
  - Support the following APIs:
    - `PublishHttpDetect`
    - `ShowHttpDetectResult`
    - `BatchUpdateSubscriptionsFilterPolices`
    - `BatchCreateSubscriptionsFilterPolices`
    - `BatchDeleteSubscriptionsFilterPolices`
    - `AddSubscriptionFromSubscriptionUser`
- _Bug Fix_
  - None
- _Change_
  - Deprecate the following APIs:
    - `ListApplicationAttributes`
    - `UpdateApplication`
    - `DeleteApplication`
    - `ListApplicationEndpointAttributes`
    - `UpdateApplicationEndpoint`
    - `DeleteApplicationEndpoint`
    - `PublishAppMessage`
    - `CreateApplication`
    - `ListApplications`
    - `CreateApplicationEndpoint`
    - `ListApplicationEndpoints`
  - **PublishMessage**
    - changes of request param
      - `+ message_attributes`
  - **ListTopics**
    - changes of request param
      - `+ fuzzy_display_name`
  - **ListSubscriptions**
    - changes of request param
      - `+ fuzzy_remark`
    - changes of response param
      - `+ subscriptions.filter_polices`
  - **ListSubscriptionsByTopic**
    - changes of request param
      - `+ fuzzy_remark`
    - changes of response param
      - `+ subscriptions.filter_polices`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListPorts**
    - changes of response param
      - `+ ports.ipv6_bandwidth_id`
  - **CreatePort**
    - changes of response param
      - `+ port.ipv6_bandwidth_id`
  - **ShowPort**
    - changes of response param
      - `+ port.ipv6_bandwidth_id`
  - **UpdatePort**
    - changes of response param
      - `+ port.ipv6_bandwidth_id`

# 3.1.72 2023-12-27

### HuaweiCloud SDK AAD

- _Features_
  - Support the following APIs:
    - `CreateAadDomain`
    - `CreateCertificate`
    - `ModifyDomainWebSwitch`
    - `ListSourceIps`
    - `AddBlackWhiteIpList`
    - `DeleteBlackWhiteIpList`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK APIG

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListMetricData**
    - changes of response param
      - `* datapoints.timestamp: int32 -> int64`
  - **ListApisV2**
    - changes of request param
      - `+ return_data_mode: enum value [brief,include_group,include_group_backend]`

### HuaweiCloud SDK CodeArtsArtifact

- _Features_
  - Support the following APIs:
    - `BatchRestoreRepo`
    - `BatchDeleteTrashes`
    - `CreateMavenRepo`
    - `ShowProjectList`
    - `ModifyRepository`
    - `ShowRepositoryInfo`
    - `CreateDockerRepositories`
    - `DeleteRepository`
    - `ShowStorage`
    - `ShowMavenInfo`
    - `CreateProjectRelatedRepository`
    - `SearchByChecksum`
    - `SearchArtifacts`
    - `ResetUserPassword`
    - `ShowFileTree`
    - `ListArtifactoryComponent`
    - `ListAllRepositories`
    - `ShowAudit`
    - `ShowRepository`
    - `ListArtifactoryStorageStatistic`
    - `CreateAttention`
    - `ListAttentions`
    - `UpdateArtifactory`
    - `CreateArtifactory`
    - `DeleteArtifactFile`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CSMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListResourceInstances**
    - changes of response param
      - `+ resources.sys_tags`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the APIs `ListFactoryJobs`, `CreateFactoryJob`, `ListFactoryAlarmInfo`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DCS

- _Features_
  - Support the APIs `ShowInstanceSslDetail`, `UpdateSslSwitch`, `DownloadSslCert`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DDS

- _Features_
  - Support the API `ShowClientNetwork`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - Support the API `ListJobs`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK HSS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAssetStatistic**
    - changes of response param
      - `+ environment_num`
      - `+ core_conf_file_num`
  - **ListPorts**
    - changes of response param
      - `+ data_list.agent_id`
      - `+ data_list.container_id`
  - **ListSwrImageRepository**
    - changes of response param
      - `+ data_list.instance_name`
      - `+ data_list.instance_id`
      - `+ data_list.instance_url`

### HuaweiCloud SDK Kafka

- _Features_
  - Support the APIs `CreateShrinkageJob`, `ShowShrinkCheckResult`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK MetaStudio

- _Features_
  - Support the following APIs:
    - `ListDigitalHumanVideo`
    - `ListInteractionRuleGroups`
    - `CreateInteractionRuleGroup`
    - `UpdateInteractionRuleGroup`
    - `DeleteInteractionRuleGroup`
    - `CheckTextLanguage`
    - `CreateFacialAnimations`
    - `ListFacialAnimationsData`
- _Bug Fix_
  - None
- _Change_
  - **CreateFile**
    - changes of response param
      - `- file_id`
      - `- upload_url`
  - **ExecuteSmartLiveCommand**
    - changes of request param
      - `+ review_config`
      - `+ command: enum value [GET_CURRENT_PLAYING_SCRIPTS]`
  - **CreatePictureModelingByUrlJob**
    - changes of request param
      - `- X-User-Privilege`
  - **ListAssetSummary**
    - changes of response param
      - `+ asset_list.asset_type: enum value [AUDIO]`
  - **Create2DDigitalHumanVideo**
    - changes of request param
      - `+ review_config`
      - `+ callback_config`
      - `+ video_config.subtitle_config`
      - `- video_config.disable_system_watermark`
      - `+ video_config.codec: enum value [VP9]`
  - **Show2DDigitalHumanVideo**
    - changes of response param
      - `+ video_config.subtitle_config`
      - `- video_config.disable_system_watermark`
      - `+ video_config.codec: enum value [VP9]`
  - **CreatePhotoDigitalHumanVideo**
    - changes of request param
      - `+ review_config`
      - `- video_config.disable_system_watermark`
  - **ShowPhotoDigitalHumanVideo**
    - changes of response param
      - `- video_config.disable_system_watermark`
  - **LiveEventReport**
    - changes of request param
      - `+ review_config`
  - **CreateTtsa**
    - changes of request param
      - `- X-User-Privilege`
      - `+ script_type`
      - `+ audio_file_download_url`
      - `+ job_type`
      - `- parent_job_id`
      - `- auto_motion`
  - **ListTtsaJobs**
    - changes of response param
      - `+ ttsa_jobs.job_type`
  - **ListTtsaData**
    - changes of response param
      - `+ start_time`
      - `+ end_time`
      - `+ is_tail`
  - **ListStyles**
    - changes of response param
      - `- styles.extra_meta.edit_value_items`
      - `- styles.extra_meta.edit_color_items`
      - `- styles.extra_meta.edit_components`
      - `- styles.extra_meta.modelling_algorithm`
  - **CreateDigitalHumanBusinessCard**
    - changes of request param
      - `+ introduction_type`
      - `+ introduction_audio_asset_id`
      - `+ review_config`
    - changes of response param
      - `- job_id`
  - **UpdateDigitalHumanBusinessCard**
    - changes of request param
      - `+ introduction_type`
      - `+ introduction_audio_asset_id`
      - `+ review_config`
    - changes of response param
      - `- job_id`
  - **ShowDigitalHumanBusinessCard**
    - changes of response param
      - `+ introduction_audio_asset_id`
      - `+ introduction_type`
  - **ShowSmartLive**
    - changes of response param
      - `+ stream_duration`
      - `+ block_reason`
      - `+ live_event_callback_config`
      - `+ state: enum value [BLOCKED]`
      - `+ rtc_room_info.users.user_type: enum value [INFERENCE_USER,END_USER]`
  - **ListVideoScripts**
    - changes of request param
      - `+ name`
      - `+ script_catalog`
      - `+ view_mode`
    - changes of response param
      - `+ video_scripts.script_cover_url`
      - `+ video_scripts.script_type`
      - `+ video_scripts.text`
      - `- video_scripts.video_making_type`
      - `- video_scripts.human_image`
  - **ShowVideoScript**
    - changes of response param
      - `+ script_cover_url`
      - `+ review_config`
      - `- video_making_type`
      - `- human_image`
      - `+ video_config.subtitle_config`
      - `- video_config.disable_system_watermark`
      - `+ video_config.codec: enum value [VP9]`
      - `* shoot_scripts: list<ShootScriptItem> -> list<ShootScriptShowItem>`
  - **CreatePictureModelingJob**
    - changes of request param
      - `- X-User-Privilege`
    - changes of response param
      - `- model_asset_id`
      - `- job_id`
  - **ShowVideoMotionCaptureJob**
    - changes of response param
      - `+ input_info.rtc_room_info.users.user_type: enum value [INFERENCE_USER,END_USER]`
  - **ShowAsset**
    - changes of response param
      - `+ reason`
      - `+ is_need_generate_cover`
      - `+ fail_type`
      - `+ asset_type: enum value [AUDIO]`
      - `+ system_properties.key: enum value [MATERIAL_IMG,MATERIAL_VIDEO,BUSSINESS_CARD_VIDEO,TO_BE_TRANSLATED_VIDEO]`
      - `+ files.state`
      - `+ files.reason`
      - `+ asset_extra_meta.voice_model_meta.speed_ratio`
      - `+ asset_extra_meta.voice_model_meta.volume_ratio`
      - `- asset_extra_meta.voice_model_meta.tts_mode`
      - `- asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ asset_extra_meta.voice_model_meta.language: enum value [GER,fr,Kr,por,JPN,Ita,ESP,DBH,GT,GXH,HBH,SXH,SCH,YY,Russian,Filipino,Dutch,Indonesian,Vietnamese,Arabic,Turkish,Malay,Thai,Finnish]`
      - `+ asset_extra_meta.human_model_2d_meta.model_resolution`
      - `- asset_extra_meta.human_model_2d_meta.is_realtime_matting`
      - `+ asset_extra_meta.ppt_meta.error_info`
  - **UpdateDigitalAsset**
    - changes of request param
      - `+ is_need_generate_cover`
      - `+ review_config`
      - `+ asset_type: enum value [AUDIO]`
      - `+ system_properties.key: enum value [MATERIAL_IMG,MATERIAL_VIDEO,BUSSINESS_CARD_VIDEO,TO_BE_TRANSLATED_VIDEO]`
      - `+ asset_extra_meta.voice_model_meta.speed_ratio`
      - `+ asset_extra_meta.voice_model_meta.volume_ratio`
      - `- asset_extra_meta.voice_model_meta.tts_mode`
      - `- asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ asset_extra_meta.voice_model_meta.language: enum value [GER,fr,Kr,por,JPN,Ita,ESP,DBH,GT,GXH,HBH,SXH,SCH,YY,Russian,Filipino,Dutch,Indonesian,Vietnamese,Arabic,Turkish,Malay,Thai,Finnish]`
      - `+ asset_extra_meta.human_model_2d_meta.model_resolution`
      - `- asset_extra_meta.human_model_2d_meta.is_realtime_matting`
      - `+ asset_extra_meta.ppt_meta.error_info`
    - changes of response param
      - `+ reason`
      - `+ is_need_generate_cover`
      - `+ fail_type`
      - `+ asset_type: enum value [AUDIO]`
      - `+ system_properties.key: enum value [MATERIAL_IMG,MATERIAL_VIDEO,BUSSINESS_CARD_VIDEO,TO_BE_TRANSLATED_VIDEO]`
      - `+ files.state`
      - `+ files.reason`
      - `+ asset_extra_meta.voice_model_meta.speed_ratio`
      - `+ asset_extra_meta.voice_model_meta.volume_ratio`
      - `- asset_extra_meta.voice_model_meta.tts_mode`
      - `- asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ asset_extra_meta.voice_model_meta.language: enum value [GER,fr,Kr,por,JPN,Ita,ESP,DBH,GT,GXH,HBH,SXH,SCH,YY,Russian,Filipino,Dutch,Indonesian,Vietnamese,Arabic,Turkish,Malay,Thai,Finnish]`
      - `+ asset_extra_meta.human_model_2d_meta.model_resolution`
      - `- asset_extra_meta.human_model_2d_meta.is_realtime_matting`
      - `+ asset_extra_meta.ppt_meta.error_info`
  - **ListSmartLiveRooms**
    - changes of request param
      - `+ room_type`
    - changes of response param
      - `+ smart_live_rooms.room_type`
      - `+ smart_live_rooms.room_state`
      - `+ smart_live_rooms.error_info`
      - `+ smart_live_rooms.model_infos.backup_model_asset_ids`
  - **CreateSmartLiveRoom**
    - changes of request param
      - `+ stream_keys`
      - `+ backup_model_asset_ids`
      - `+ live_event_callback_config`
      - `+ review_config`
      - `+ shared_config`
      - `+ room_type: enum value [TEMPLATE]`
      - `+ play_policy.random_play_mode`
      - `+ video_config.subtitle_config`
      - `- video_config.disable_system_watermark`
      - `+ video_config.codec: enum value [VP9]`
      - `+ scene_scripts.layer_config.group_id`
      - `+ scene_scripts.layer_config.layer_type: enum value [TEXT]`
      - `+ interaction_rules.rule_index`
      - `+ interaction_rules.review_config`
      - `+ interaction_rules.trigger.layer_config`
      - `+ interaction_rules.trigger.reply_audios`
      - `+ interaction_rules.trigger.reply_mode: enum value [CALLBACK,SHOW_LAYER]`
  - **ShowSmartLiveRoom**
    - changes of response param
      - `+ backup_model_asset_ids`
      - `+ error_info`
      - `+ stream_keys`
      - `+ shared_config`
      - `+ live_event_callback_config`
      - `+ room_state`
      - `+ review_config`
      - `+ room_type: enum value [TEMPLATE]`
      - `+ play_policy.random_play_mode`
      - `+ video_config.subtitle_config`
      - `- video_config.disable_system_watermark`
      - `+ video_config.codec: enum value [VP9]`
      - `+ scene_scripts.layer_config.group_id`
      - `+ scene_scripts.layer_config.layer_type: enum value [TEXT]`
      - `+ interaction_rules.rule_index`
      - `+ interaction_rules.review_config`
      - `+ interaction_rules.trigger.layer_config`
      - `+ interaction_rules.trigger.reply_audios`
      - `+ interaction_rules.trigger.reply_mode: enum value [CALLBACK,SHOW_LAYER]`
  - **UpdateSmartLiveRoom**
    - changes of request param
      - `+ stream_keys`
      - `+ backup_model_asset_ids`
      - `+ live_event_callback_config`
      - `+ review_config`
      - `+ shared_config`
      - `+ room_type: enum value [TEMPLATE]`
      - `+ play_policy.random_play_mode`
      - `+ video_config.subtitle_config`
      - `- video_config.disable_system_watermark`
      - `+ video_config.codec: enum value [VP9]`
      - `+ scene_scripts.layer_config.group_id`
      - `+ scene_scripts.layer_config.layer_type: enum value [TEXT]`
      - `+ interaction_rules.rule_index`
      - `+ interaction_rules.review_config`
      - `+ interaction_rules.trigger.layer_config`
      - `+ interaction_rules.trigger.reply_audios`
      - `+ interaction_rules.trigger.reply_mode: enum value [CALLBACK,SHOW_LAYER]`
    - changes of response param
      - `+ backup_model_asset_ids`
      - `+ error_info`
      - `+ stream_keys`
      - `+ shared_config`
      - `+ live_event_callback_config`
      - `+ room_state`
      - `+ review_config`
      - `+ room_type: enum value [TEMPLATE]`
      - `+ play_policy.random_play_mode`
      - `+ video_config.subtitle_config`
      - `- video_config.disable_system_watermark`
      - `+ video_config.codec: enum value [VP9]`
      - `+ scene_scripts.layer_config.group_id`
      - `+ scene_scripts.layer_config.layer_type: enum value [TEXT]`
      - `+ interaction_rules.rule_index`
      - `+ interaction_rules.review_config`
      - `+ interaction_rules.trigger.layer_config`
      - `+ interaction_rules.trigger.reply_audios`
      - `+ interaction_rules.trigger.reply_mode: enum value [CALLBACK,SHOW_LAYER]`
  - **StartSmartLive**
    - changes of request param
      - `+ stream_keys`
      - `+ interaction_callback_url`
      - `+ live_event_callback_config`
      - `+ video_config.subtitle_config`
      - `- video_config.disable_system_watermark`
      - `+ video_config.codec: enum value [VP9]`
      - `+ play_policy.random_play_mode`
    - changes of response param
      - `+ live_warning_info`
      - `+ live_event_callback_config`
      - `+ rtc_room_info.users.user_type: enum value [INFERENCE_USER,END_USER]`
  - **ListSmartLive**
    - changes of response param
      - `+ stream_duration`
      - `+ block_reason`
      - `+ live_event_callback_config`
      - `+ smart_live_jobs.live_event_callback_config`
      - `+ smart_live_jobs.stream_duration`
      - `+ smart_live_jobs.block_reason`
      - `+ smart_live_jobs.state: enum value [BLOCKED]`
      - `+ smart_live_jobs.rtc_room_info.users.user_type: enum value [INFERENCE_USER,END_USER]`
  - **CreateVideoMotionCaptureJob**
    - changes of request param
      - `+ input_info.rtc_room_info.users.user_type: enum value [INFERENCE_USER,END_USER]`
    - changes of response param
      - `- rtc_room_info`
      - `- job_id`
      - `+ rtc_room_info.users.user_type: enum value [INFERENCE_USER,END_USER]`
  - **ListVideoMotionCaptureJobs**
    - changes of response param
      - `+ video_motion_capture_jobs.input_info.rtc_room_info.users.user_type: enum value [INFERENCE_USER,END_USER]`
  - **CreateDigitalAsset**
    - changes of request param
      - `+ is_need_generate_cover`
      - `+ review_config`
      - `+ asset_type: enum value [AUDIO]`
      - `+ system_properties.key: enum value [MATERIAL_IMG,MATERIAL_VIDEO,BUSSINESS_CARD_VIDEO,TO_BE_TRANSLATED_VIDEO]`
      - `+ asset_extra_meta.voice_model_meta.speed_ratio`
      - `+ asset_extra_meta.voice_model_meta.volume_ratio`
      - `- asset_extra_meta.voice_model_meta.tts_mode`
      - `- asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ asset_extra_meta.voice_model_meta.language: enum value [GER,fr,Kr,por,JPN,Ita,ESP,DBH,GT,GXH,HBH,SXH,SCH,YY,Russian,Filipino,Dutch,Indonesian,Vietnamese,Arabic,Turkish,Malay,Thai,Finnish]`
      - `+ asset_extra_meta.human_model_2d_meta.model_resolution`
      - `- asset_extra_meta.human_model_2d_meta.is_realtime_matting`
      - `+ asset_extra_meta.ppt_meta.error_info`
  - **ListAssets**
    - changes of request param
      - `- asset_manage_type`
      - `- X-User-MePrivilege`
    - changes of response param
      - `+ reason`
      - `+ is_need_generate_cover`
      - `+ fail_type`
      - `+ assets.fail_type`
      - `+ assets.reason`
      - `+ assets.is_need_generate_cover`
      - `+ assets.asset_type: enum value [AUDIO]`
      - `+ assets.system_properties.key: enum value [MATERIAL_IMG,MATERIAL_VIDEO,BUSSINESS_CARD_VIDEO,TO_BE_TRANSLATED_VIDEO]`
      - `+ assets.files.state`
      - `+ assets.files.reason`
      - `+ assets.asset_extra_meta.voice_model_meta.speed_ratio`
      - `+ assets.asset_extra_meta.voice_model_meta.volume_ratio`
      - `- assets.asset_extra_meta.voice_model_meta.tts_mode`
      - `- assets.asset_extra_meta.voice_model_meta.external_voice_meta`
      - `+ assets.asset_extra_meta.voice_model_meta.language: enum value [GER,fr,Kr,por,JPN,Ita,ESP,DBH,GT,GXH,HBH,SXH,SCH,YY,Russian,Filipino,Dutch,Indonesian,Vietnamese,Arabic,Turkish,Malay,Thai,Finnish]`
      - `+ assets.asset_extra_meta.human_model_2d_meta.model_resolution`
      - `- assets.asset_extra_meta.human_model_2d_meta.is_realtime_matting`
      - `+ assets.asset_extra_meta.ppt_meta.error_info`

### HuaweiCloud SDK RDS

- _Features_
  - Support the APIs `SetInstancesNewDbShrink`, `StopBackup`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.71 2023-12-22

### HuaweiCloud SDK Config

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowTrackerConfig**
    - changes of response param
      - `+ channel.obs.bucket_prefix`
  - **CreateTrackerConfig**
    - changes of request param
      - `+ channel.obs.bucket_prefix`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowGroups**
    - changes of response param
      - `* group.group_message_offsets.lag: int32 -> int64`
  - **ShowInstanceTopicDetail**
    - changes of response param
      - `* partitions.replicas.lag: int32 -> int64`

# 3.1.70 2023-12-21

### HuaweiCloud SDK AS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateScalingConfig**
    - changes of request param
      - `+ instance_config.disk.iops`
      - `+ instance_config.disk.throughput`
      - `+ instance_config.disk.volume_type: enum value [GPSSD2,ESSD2]`
  - **ListScalingConfigs**
    - changes of response param
      - `+ scaling_configurations.instance_config.disk.iops`
      - `+ scaling_configurations.instance_config.disk.throughput`
      - `+ scaling_configurations.instance_config.disk.volume_type: enum value [GPSSD2,ESSD2]`
  - **ShowScalingConfig**
    - changes of response param
      - `+ scaling_configuration.instance_config.disk.iops`
      - `+ scaling_configuration.instance_config.disk.throughput`
      - `+ scaling_configuration.instance_config.disk.volume_type: enum value [GPSSD2,ESSD2]`

### HuaweiCloud SDK CloudTable

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateCloudTableCluster**
    - changes of request param
      - `+ cluster_name`
      - `+ datastore`
      - `+ availability_zone`
      - `+ nics`
      - `+ cluster_info`
      - `+ enterprise_project_id`
      - `+ vpc_id`
      - `+ dbuser`
      - `+ dbuserpwd`
      - `- cluster`
      - `* body: object<CreateClusterRequestBody> -> object<CreateClusterReqBody>`
    - changes of response param
      - `+ jobId`
      - `+ getJobEndpoint`
  - **CreateCluster**
    - changes of request param
      - `* cluster.instance.nics: list<Nics> -> list<nic>`

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowPipelineRunDetail**
    - changes of response param
      - `* current_system_time: string -> int64`
      - `* stages.pre.endpoint_ids: string -> list<string>`

### HuaweiCloud SDK DC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateVifPeer**
    - changes of response param
      - `+ vif_peer.enable_nqa`
      - `+ vif_peer.enable_bfd`
  - **CreateVifPeer**
    - changes of response param
      - `+ vif_peer.enable_nqa`
      - `+ vif_peer.enable_bfd`
  - **ShowDirectConnect**
    - changes of response param
      - `+ direct_connect.signed_agreement_time`
      - `+ direct_connect.locales`
      - `+ direct_connect.support_feature`
      - `+ direct_connect.ies_id`
      - `+ direct_connect.reason`
      - `+ direct_connect.email`
      - `+ direct_connect.onestop_product_id`
      - `+ direct_connect.building_line_product_id`
      - `+ direct_connect.last_onestop_product_id`
      - `+ direct_connect.last_building_line_product_id`
      - `+ direct_connect.modified_bandwidth`
      - `+ direct_connect.change_mode`
      - `+ direct_connect.onestopdc_status`
      - `+ direct_connect.public_border_group`
      - `+ direct_connect.auto_renew`
      - `+ direct_connect.ratio_95peak`
      - `+ direct_connect.type: enum value [onestop_standard,onestop_hosted]`
      - `- direct_connect.status: enum value [ORDERING,ACCEPT,REJECTED]`
  - **UpdateDirectConnect**
    - changes of response param
      - `+ direct_connect.signed_agreement_time`
      - `+ direct_connect.locales`
      - `+ direct_connect.support_feature`
      - `+ direct_connect.ies_id`
      - `+ direct_connect.reason`
      - `+ direct_connect.email`
      - `+ direct_connect.onestop_product_id`
      - `+ direct_connect.building_line_product_id`
      - `+ direct_connect.last_onestop_product_id`
      - `+ direct_connect.last_building_line_product_id`
      - `+ direct_connect.modified_bandwidth`
      - `+ direct_connect.change_mode`
      - `+ direct_connect.onestopdc_status`
      - `+ direct_connect.public_border_group`
      - `+ direct_connect.auto_renew`
      - `+ direct_connect.ratio_95peak`
      - `+ direct_connect.type: enum value [onestop_standard,onestop_hosted]`
      - `- direct_connect.status: enum value [ORDERING,ACCEPT,REJECTED]`
  - **ListDirectConnects**
    - changes of response param
      - `+ direct_connects.signed_agreement_time`
      - `+ direct_connects.locales`
      - `+ direct_connects.support_feature`
      - `+ direct_connects.ies_id`
      - `+ direct_connects.reason`
      - `+ direct_connects.email`
      - `+ direct_connects.onestop_product_id`
      - `+ direct_connects.building_line_product_id`
      - `+ direct_connects.last_onestop_product_id`
      - `+ direct_connects.last_building_line_product_id`
      - `+ direct_connects.modified_bandwidth`
      - `+ direct_connects.change_mode`
      - `+ direct_connects.onestopdc_status`
      - `+ direct_connects.public_border_group`
      - `+ direct_connects.auto_renew`
      - `+ direct_connects.ratio_95peak`
      - `+ direct_connects.type: enum value [onestop_standard,onestop_hosted]`
      - `- direct_connects.status: enum value [ORDERING,ACCEPT,REJECTED]`
  - **ListHostedDirectConnects**
    - changes of response param
      - `+ hosted_connects.port_type`
      - `+ hosted_connects.type`
      - `+ hosted_connects.status: enum value [PENDING_UPDATE,PENDING_CREATE]`
      - `- hosted_connects.status: enum value [PAID,APPLY,PENDING_SURVEY,DELETED,DENY,PENDING_PAY,ORDERING,ACCEPT,REJECTED]`
  - **CreateHostedDirectConnect**
    - changes of response param
      - `+ hosted_connect.port_type`
      - `+ hosted_connect.type`
      - `+ hosted_connect.status: enum value [PENDING_UPDATE,PENDING_CREATE]`
      - `- hosted_connect.status: enum value [PAID,APPLY,PENDING_SURVEY,DELETED,DENY,PENDING_PAY,ORDERING,ACCEPT,REJECTED]`
  - **ShowHostedDirectConnect**
    - changes of response param
      - `+ hosted_connect.port_type`
      - `+ hosted_connect.type`
      - `+ hosted_connect.status: enum value [PENDING_UPDATE,PENDING_CREATE]`
      - `- hosted_connect.status: enum value [PAID,APPLY,PENDING_SURVEY,DELETED,DENY,PENDING_PAY,ORDERING,ACCEPT,REJECTED]`
  - **UpdateHostedDirectConnect**
    - changes of response param
      - `+ hosted_connect.port_type`
      - `+ hosted_connect.type`
      - `+ hosted_connect.status: enum value [PENDING_UPDATE,PENDING_CREATE]`
      - `- hosted_connect.status: enum value [PAID,APPLY,PENDING_SURVEY,DELETED,DENY,PENDING_PAY,ORDERING,ACCEPT,REJECTED]`
  - **ShowVirtualGateway**
    - changes of response param
      - `+ virtual_gateway.device_id`
      - `+ virtual_gateway.redundant_device_id`
      - `+ virtual_gateway.public_border_group`
  - **UpdateVirtualGateway**
    - changes of response param
      - `+ virtual_gateway.device_id`
      - `+ virtual_gateway.redundant_device_id`
      - `+ virtual_gateway.public_border_group`
  - **ListVirtualGateways**
    - changes of response param
      - `+ virtual_gateways.device_id`
      - `+ virtual_gateways.redundant_device_id`
      - `+ virtual_gateways.public_border_group`
  - **CreateVirtualGateway**
    - changes of response param
      - `+ virtual_gateway.device_id`
      - `+ virtual_gateway.redundant_device_id`
      - `+ virtual_gateway.public_border_group`
  - **ShowVirtualInterface**
    - changes of response param
      - `+ virtual_interface.local_gateway_v4_ip`
      - `+ virtual_interface.remote_gateway_v4_ip`
      - `+ virtual_interface.ies_id`
      - `+ virtual_interface.reason`
      - `+ virtual_interface.rate_limit`
      - `+ virtual_interface.address_family`
      - `+ virtual_interface.local_gateway_v6_ip`
      - `+ virtual_interface.remote_gateway_v6_ip`
      - `+ virtual_interface.lgw_id`
      - `+ virtual_interface.gateway_id`
      - `+ virtual_interface.remote_ep_group`
      - `+ virtual_interface.service_ep_group`
      - `+ virtual_interface.bgp_route_limit`
      - `+ virtual_interface.priority`
      - `+ virtual_interface.vif_peers.enable_nqa`
      - `+ virtual_interface.vif_peers.enable_bfd`
  - **UpdateVirtualInterface**
    - changes of response param
      - `+ virtual_interface.local_gateway_v4_ip`
      - `+ virtual_interface.remote_gateway_v4_ip`
      - `+ virtual_interface.ies_id`
      - `+ virtual_interface.reason`
      - `+ virtual_interface.rate_limit`
      - `+ virtual_interface.address_family`
      - `+ virtual_interface.local_gateway_v6_ip`
      - `+ virtual_interface.remote_gateway_v6_ip`
      - `+ virtual_interface.lgw_id`
      - `+ virtual_interface.gateway_id`
      - `+ virtual_interface.remote_ep_group`
      - `+ virtual_interface.service_ep_group`
      - `+ virtual_interface.bgp_route_limit`
      - `+ virtual_interface.priority`
      - `+ virtual_interface.vif_peers.enable_nqa`
      - `+ virtual_interface.vif_peers.enable_bfd`
  - **ListVirtualInterfaces**
    - changes of response param
      - `+ virtual_interfaces.local_gateway_v4_ip`
      - `+ virtual_interfaces.remote_gateway_v4_ip`
      - `+ virtual_interfaces.ies_id`
      - `+ virtual_interfaces.reason`
      - `+ virtual_interfaces.rate_limit`
      - `+ virtual_interfaces.address_family`
      - `+ virtual_interfaces.local_gateway_v6_ip`
      - `+ virtual_interfaces.remote_gateway_v6_ip`
      - `+ virtual_interfaces.lgw_id`
      - `+ virtual_interfaces.gateway_id`
      - `+ virtual_interfaces.remote_ep_group`
      - `+ virtual_interfaces.service_ep_group`
      - `+ virtual_interfaces.bgp_route_limit`
      - `+ virtual_interfaces.priority`
      - `+ virtual_interfaces.vif_peers.enable_nqa`
      - `+ virtual_interfaces.vif_peers.enable_bfd`
  - **CreateVirtualInterface**
    - changes of response param
      - `+ virtual_interface.local_gateway_v4_ip`
      - `+ virtual_interface.remote_gateway_v4_ip`
      - `+ virtual_interface.ies_id`
      - `+ virtual_interface.reason`
      - `+ virtual_interface.rate_limit`
      - `+ virtual_interface.address_family`
      - `+ virtual_interface.local_gateway_v6_ip`
      - `+ virtual_interface.remote_gateway_v6_ip`
      - `+ virtual_interface.lgw_id`
      - `+ virtual_interface.gateway_id`
      - `+ virtual_interface.remote_ep_group`
      - `+ virtual_interface.service_ep_group`
      - `+ virtual_interface.bgp_route_limit`
      - `+ virtual_interface.priority`
      - `+ virtual_interface.vif_peers.enable_nqa`
      - `+ virtual_interface.vif_peers.enable_bfd`

### HuaweiCloud SDK DCS

- _Features_
  - Support the API `ValidateDeletableReplica`
- _Bug Fix_
  - None
- _Change_
  - **ShowExpireKeyScanInfo**
    - changes of request param
      - `+ offset`
      - `+ limit`
      - `+ status`

### HuaweiCloud SDK DRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchCreateJobs**
    - changes of request param
      - `+ jobs.engine_type: enum value [mysql-to-kafka,taurus-to-kafka,gaussdbv5ha-to-kafka]`
      - `+ jobs.source_endpoint.db_type: enum value [taurus]`
  - **BatchValidateConnections**
    - changes of request param
      - `+ jobs.db_type: enum value [taurus]`
  - **ShowJobList**
    - changes of request param
      - `+ engine_type: enum value [gaussdbv5,postgresql,mysql-to-kafka,taurus-to-kafka,gaussdbv5ha-to-kafka]`
  - **BatchUpdateJob**
    - changes of request param
      - `+ jobs.engine_type: enum value [gaussdbv5,postgresql,mysql-to-kafka,taurus-to-kafka,gaussdbv5ha-to-kafka]`
      - `+ jobs.source_endpoint.db_type: enum value [taurus]`
  - **BatchListJobDetails**
    - changes of response param
      - `+ results.source_endpoint.db_type: enum value [taurus]`
      - `+ results.inst_info.engine_type: enum value [gaussdbv5,postgresql,mysql-to-kafka,taurus-to-kafka,gaussdbv5ha-to-kafka]`
  - **ShowJobDetail**
    - changes of request param
      - `+ type: enum value [compare]`
      - `+ type: enum value [comapre]`
      - `+ query_type: enum value [diff]`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchCreateServerTags**
    - changes of request param
      - `* tags: list<ServerTag> -> list<BatchAddServerTag>`
  - **UpdateServer**
    - changes of request param
      - `+ server.user_data`

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the APIs `UpdateDisassociatePublicip`, `UpdateAssociatePublicip`

### HuaweiCloud SDK HSS

- _Features_
  - Support the following APIs:
    - `ListProcessesHost`
    - `ListPortHost`
    - `ChangeCheckRuleAction`
    - `ListVulScanTask`
    - `CreateVulnerabilityScanTask`
    - `ListVulScanTaskHost`
- _Bug Fix_
  - None
- _Change_
  - **ShowAssetStatistic**
    - changes of request param
      - `+ category`
    - changes of response param
      - `+ web_app_num`
      - `+ database_num`
      - `+ web_service_num`
  - **ChangeVulScanPolicy**
    - changes of request param
      - `+ scan_vul_types`
  - **ListJarPackageHostInfo**
    - changes of request param
      - `+ part_match`
  - **ListUserStatistics**
    - changes of request param
      - `+ category`
  - **ListPortStatistics**
    - changes of request param
      - `+ category`
  - **ListProcessStatistics**
    - changes of request param
      - `+ category`
  - **ListAppStatistics**
    - changes of request param
      - `+ category`
  - **ListUsers**
    - changes of request param
      - `+ category`
      - `+ part_match`
    - changes of response param
      - `+ data_list.container_id`
      - `+ data_list.container_name`
  - **ListPorts**
    - changes of request param
      - `+ category`
  - **ListApps**
    - changes of request param
      - `+ category`
      - `+ part_match`
    - changes of response param
      - `+ data_list.container_id`
      - `+ data_list.container_name`
  - **ListAutoLaunchs**
    - changes of request param
      - `+ part_match`
  - **ListProtectionServer**
    - changes of response param
      - `+ data_list.agent_version`
  - **ListContainerNodes**
    - changes of request param
      - `+ container_tags`
    - changes of response param
      - `+ data_list.protect_interrupt`
      - `+ data_list.container_tags`
      - `+ data_list.private_ip`
      - `+ data_list.public_ip`
      - `+ data_list.resource_id`
      - `+ data_list.group_name`
      - `+ data_list.enterprise_project_name`
      - `+ data_list.detect_result`
      - `+ data_list.asset`
      - `+ data_list.vulnerability`
      - `+ data_list.intrusion`
      - `+ data_list.policy_group_id`
      - `+ data_list.policy_group_name`
  - **ListHostStatus**
    - changes of response param
      - `+ data_list.expire_time`
      - `+ data_list.protect_interrupt`
  - **BatchScanSwrImage**
    - changes of request param
      - `+ image_size`
      - `+ start_latest_update_time`
      - `+ end_latest_update_time`
      - `+ start_latest_scan_time`
      - `+ end_latest_scan_time`
      - `+ image_info_list.instance_id`
      - `+ image_info_list.instance_url`
  - **ListImageVulnerabilities**
    - changes of request param
      - `+ type`
    - changes of response param
      - `+ data_list.app_path`
  - **ListImageRiskConfigs**
    - changes of request param
      - `+ instance_id`
  - **ListImageRiskConfigRules**
    - changes of request param
      - `+ instance_id`
  - **ShowImageCheckRuleDetail**
    - changes of request param
      - `+ instance_id`
  - **ListAlarmWhiteList**
    - changes of response param
      - `+ data_list.white_field`
      - `+ data_list.field_value`
      - `+ data_list.judge_type`
  - **ListSwrImageRepository**
    - changes of request param
      - `+ instance_name`
      - `+ image_size`
      - `+ start_latest_update_time`
      - `+ end_latest_update_time`
      - `+ start_latest_scan_time`
      - `+ end_latest_scan_time`
      - `+ has_malicious_file`
      - `+ has_unsafe_setting`
      - `+ has_vul`
      - `+ instance_id`
    - changes of response param
      - `+ data_list.scan_failed_desc`
  - **ListSecurityEvents**
    - changes of request param
      - `+ public_ip`
      - `+ event_name`
    - changes of response param
      - `+ data_list.event_count`
  - **ChangeEvent**
    - changes of request param
      - `+ event_white_rule_list`

### HuaweiCloud SDK IVS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **DetectStandardByNameAndId**
    - changes of request param
      - `+ data.req_data.detail`
      - `+ data.req_data.crop`
  - **DetectStandardByIdCardImage**
    - changes of request param
      - `+ data.req_data.detail`
      - `+ data.req_data.crop`
  - **DetectStandardByVideoAndIdCardImage**
    - changes of request param
      - `+ data.req_data.detail`
  - **DetectStandardByVideoAndNameAndId**
    - changes of request param
      - `+ data.req_data.detail`

### HuaweiCloud SDK Kafka

- _Features_
  - Support the API `SendKafkaMessage`
- _Bug Fix_
  - None
- _Change_
  - Remove the API `CreatePartition`
  - **UpdateInstanceTopic**
    - changes of request param
      - `+ topics.new_partition_brokers`
  - **ListInstanceConsumerGroups**
    - changes of response param
      - `* groups.lag: int32 -> int64`
  - **ListInstances**
    - changes of request param
      - `+ status: enum value [UPGRADING,UPGRADINGFAILED]`

### HuaweiCloud SDK MPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateTranscodingTask**
    - changes of request param
      - `+ video_process.hls_storage_type`

### HuaweiCloud SDK SFSTurbo

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListFsTasks**
    - changes of response param
      - `* tasks: list<object> -> list<OneFsTaskResp>`
  - **ShowShare**
    - changes of response param
      - `+ tags`
      - `+ enterprise_project_id`
  - **DeleteBackendTarget**
    - changes of response param
      - `+ lifecycle: enum value [FAILED]`
  - **CreateShare**
    - changes of request param
      - `+ share.tags`
  - **ListShares**
    - changes of response param
      - `+ tags`
      - `+ enterprise_project_id`
      - `+ shares.enterprise_project_id`
      - `+ shares.tags`

### HuaweiCloud SDK TICS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAgentDetail**
    - changes of response param
      - `* agent_deploy.aom_flag: byte -> boolean`
      - `* agent_deploy.bcs_flag: byte -> boolean`
      - `* agent_deploy.high_avail: byte -> boolean`
      - `+ agent_deploy_detail.ief_instance_id`
      - `+ agent_deploy_node.agent_vpcep_eps_id`
      - `+ agent_deploy_node.league_server_ip_security_group_rule`
      - `+ agent_deploy_node.league_server_snat_ip`
      - `+ agent_deploy_node.server_to_agent_vpcep_epi_id`
      - `+ agent_deploy_node.server_to_agent_vpcep_epi_ip`
      - `+ agent_deploy_node.snat_rule_id`

### HuaweiCloud SDK VOD

- _Features_
  - Support the APIs `ListAssetDailySummaryLog`, `UpdateStorageMode`, `ShowVodRetrieval`
- _Bug Fix_
  - None
- _Change_
  - **ShowTakeOverAssetDetails**
    - changes of response param
      - `+ transcode_info.output.group_id`
      - `+ transcode_info.output.group_name`
  - **PublishAssets**
    - changes of response param
      - `+ asset_info_array.is_multi_transcode`
      - `+ asset_info_array.play_info_array.group_id`
      - `+ asset_info_array.play_info_array.group_name`
  - **UnpublishAssets**
    - changes of response param
      - `+ asset_info_array.is_multi_transcode`
      - `+ asset_info_array.play_info_array.group_id`
      - `+ asset_info_array.play_info_array.group_name`
  - **ShowAssetMeta**
    - changes of response param
      - `+ asset_info_array.is_multi_transcode`
      - `+ asset_info_array.play_info_array.group_id`
      - `+ asset_info_array.play_info_array.group_name`
  - **ShowAssetDetail**
    - changes of response param
      - `+ transcode_info.output.group_id`
      - `+ transcode_info.output.group_name`
  - **ShowTakeOverTaskDetails**
    - changes of response param
      - `+ assets.transcode_info.output.group_id`
      - `+ assets.transcode_info.output.group_name`

# 3.1.69 2023-12-14

### HuaweiCloud SDK BMS

- _Features_
  - Support the API `DeleteBaremetalServer`
- _Bug Fix_
  - None
- _Change_
  - **CreateBareMetalServers**
    - changes of request param
      - `+ server.root_volume.volumetype: enum value [GPSSD]`
      - `+ server.data_volumes.volumetype: enum value [GPSSD]`

### HuaweiCloud SDK CES

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListAlarmTemplates**
    - changes of request param
      - `+ template_type: enum value [system_event,custom_event,system_custom_event]`
  - **CreateAlarmTemplate**
    - changes of request param
      - `+ template_type`
      - `+ policies.period: enum value [0]`
  - **UpdateAlarmTemplate**
    - changes of request param
      - `+ policies.period: enum value [0]`

### HuaweiCloud SDK CFW

- _Features_
  - Support the APIs `CreateFirewall`, `ListJob`, `DeleteFirewall`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CloudTable

- _Features_
  - Support the API `CreateCloudTableCluster`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - Support the API `ShowPipelineDetail`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Config

- _Features_
  - Support the following APIs:
    - `ListTrackedResources`
    - `CountTrackedResources`
    - `ListTrackedResourceTags`
    - `CollectTrackedResourcesSummary`
    - `ShowTrackedResourceDetail`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DLI

- _Features_
  - Support the APIs `DeleteRouteFromEnhancedConnection`, `CreateRouteToEnhancedConnection`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DWS

- _Features_
  - Support the following APIs:
    - `ListLogicalClusterVolumes`
    - `ResizeClusterWithExistedNodes`
    - `RestartLogicalCluster`
    - `ListTopoRings`
    - `UpdateLogicalCluster`
    - `DeleteLogicalCluster`
    - `EnableLogicalCluster`
    - `ListClusterNodes`
    - `ConvertToLogicalCluster`
    - `RestoreRedistribution`
    - `StopRedistribution`
    - `ListLogicalClusterTasks`
    - `ListLogicalClusters`
    - `CreateLogicalCluster`
    - `DeleteClusterNodes`
    - `ListLogicalClusterRings`
    - `ListLtsLogs`
    - `ListQueries`
    - `ListTablesStatistic`
    - `ShowQueryDetail`
    - `DisableLtsLogs`
    - `EnableLtsLogs`
- _Bug Fix_
  - None
- _Change_
  - **ListHostDisk**
    - changes of request param
      - `+ instance_id`
    - changes of response param
      - `+ instance_id`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowResInstanceInfo**
    - changes of response param
      - `+ resources.resource_detail.detailId`
      - `- resources.resource_detail.resource_id`
      - `- resources.resource_detail.func_urn`
      - `- resources.resource_detail.func_name`
      - `- resources.resource_detail.domain_id`
      - `- resources.resource_detail.namespace`
      - `- resources.resource_detail.project_name`
      - `- resources.resource_detail.package`
      - `- resources.resource_detail.runtime`
      - `- resources.resource_detail.timeout`
      - `- resources.resource_detail.handler`
      - `- resources.resource_detail.memory_size`
      - `- resources.resource_detail.gpu_memory`
      - `- resources.resource_detail.cpu`
      - `- resources.resource_detail.code_type`
      - `- resources.resource_detail.code_url`
      - `- resources.resource_detail.code_filename`
      - `- resources.resource_detail.code_size`
      - `- resources.resource_detail.user_data`
      - `- resources.resource_detail.encrypted_user_data`
      - `- resources.resource_detail.digest`
      - `- resources.resource_detail.version`
      - `- resources.resource_detail.image_name`
      - `- resources.resource_detail.xrole`
      - `- resources.resource_detail.app_xrole`
      - `- resources.resource_detail.description`
      - `- resources.resource_detail.last_modified`
      - `- resources.resource_detail.func_vpc_id`
      - `- resources.resource_detail.strategy_config`
      - `- resources.resource_detail.extend_config`
      - `- resources.resource_detail.initializer_handler`
      - `- resources.resource_detail.initializer_timeout`
      - `- resources.resource_detail.pre_stop_handler`
      - `- resources.resource_detail.pre_stop_timeout`
      - `- resources.resource_detail.enterprise_project_id`
      - `- resources.resource_detail.long_time`
      - `- resources.resource_detail.log_group_id`
      - `- resources.resource_detail.log_stream_id`
      - `- resources.resource_detail.type`
      - `- resources.resource_detail.fail_count`
      - `- resources.resource_detail.is_bridge_function`
      - `- resources.resource_detail.bind_bridge_funcUrns`
      - `* resources.resource_detail: object<ListFunctionResult> -> object<ListEnterpriseResourceDetail>`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateAsyncCommand**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`
  - **ShowAsyncDeviceCommand**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`
  - **BroadcastMessage**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`
  - **CreateCommand**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`
  - **ListProperties**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`
    - changes of response param
      - `+ request_id`
  - **UpdateProperties**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`
    - changes of response param
      - `+ request_id`
  - **CloseDeviceTunnel**
    - changes of request param
      - `+ Sp-Auth-Token`
  - **DeleteDeviceTunnel**
    - changes of request param
      - `+ Sp-Auth-Token`
  - **ShowDeviceTunnel**
    - changes of request param
      - `+ Sp-Auth-Token`
  - **AddTunnel**
    - changes of request param
      - `+ Sp-Auth-Token`
  - **ListDeviceTunnels**
    - changes of request param
      - `+ Sp-Auth-Token`
  - **ShowDeviceMessage**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`
  - **CreateMessage**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`
  - **ListDeviceMessages**
    - changes of request param
      - `+ Stage-Auth-Token`
      - `+ Sp-Auth-Token`

### HuaweiCloud SDK Live

- _Features_
  - Support the following APIs:
    - `ListDelayConfig`
    - `UpdateDelayConfig`
    - `ShowPullSourcesConfig`
    - `UpdatePullSourcesConfig`
    - `ListGeoBlockingConfig`
    - `UpdateGeoBlockingConfig`
    - `CreateUrlAuthchain`
    - `ListIpAuthList`
    - `UpdateIpAuthList`
    - `ListPublishTemplate`
    - `UpdatePublishTemplate`
    - `DeletePublishTemplate`
- _Bug Fix_
  - None
- _Change_
  - **ListRecordContents**
    - changes of request param
      - `+ record_type: enum value [PLAN_RECORD,ON_DEMAND_RECORD]`
    - changes of response param
      - `- record_contents.record_type: enum value [PLAN_RECORD,ON_DEMAND_RECORD]`

### HuaweiCloud SDK LTS

- _Features_
  - Support the API `CreateAgencyAccess`
- _Bug Fix_
  - None
- _Change_
  - **ListSqlAlarmRules**
    - changes of response param
      - `+ sql_alarm_rules.is_css_sql`
      - `+ sql_alarm_rules.notification_frequency`
      - `+ sql_alarm_rules.alarm_action_rule_name`
      - `+ sql_alarm_rules.status: enum value [RUNNING 启用,STOPPING 停止]`
      - `- sql_alarm_rules.status: enum value [RUNNING,STOPPING]`
      - `* sql_alarm_rules.frequency: object<Frequency> -> object<FrequencyRespBody>`
  - **UpdateSqlAlarmRule**
    - changes of request param
      - `+ is_css_sql`
      - `+ notification_frequency`
      - `+ alarm_action_rule_name`
      - `* frequency: object<Frequency> -> object<CreateSqlAlarmRuleFrequency>`
    - changes of response param
      - `+ is_css_sql`
      - `+ alarm_action_rule_name`
      - `+ notification_frequency`
      - `+ language: enum value [zh-cn,en-us]`
      - `* frequency: object<Frequency> -> object<FrequencyRespBody>`
  - **CreateSqlAlarmRule**
    - changes of request param
      - `+ is_css_sql`
      - `+ notification_frequency`
      - `+ alarm_action_rule_name`
      - `* frequency: object<Frequency> -> object<CreateSqlAlarmRuleFrequency>`
  - **ListKeywordsAlarmRules**
    - changes of response param
      - `+ keywords_alarm_rules.notification_frequency`
      - `+ keywords_alarm_rules.alarm_action_rule_name`
      - `+ keywords_alarm_rules.status: enum value [RUNNING  启用,STOPPING  停止]`
      - `- keywords_alarm_rules.status: enum value [RUNNING,STOPPING]`
  - **UpdateKeywordsAlarmRule**
    - changes of request param
      - `+ notification_frequency`
      - `+ alarm_action_rule_name`
    - changes of response param
      - `+ alarm_action_rule_name`
      - `+ notification_frequency`
      - `+ language: enum value [zh-cn,en-us]`
      - `- keywords_requests.search_time_range_unit: enum value [minute]`
      - `* keywords_requests: list<KeywordsRequest> -> list<KeywordsResBody>`
      - `* frequency: object<Frequency> -> object<FrequencyRespBody>`
  - **CreateKeywordsAlarmRule**
    - changes of request param
      - `+ notification_frequency`
      - `+ alarm_action_rule_name`
      - `+ keywords_alarm_level: enum value [Critical]`
      - `- keywords_alarm_level: enum value [CRITICAL]`

### HuaweiCloud SDK MRS

- _Features_
  - Support the API `ShowMrsVersionMetadata`, `SwitchClusterTags`, `ShowTagStatus`, `ShowTagQuota`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK NAT

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateNatGatewayTag**
    - changes of request param
      - `+ tag.key`
      - `+ tag.value`
      - `* tag: object -> object<TagBody>`

### HuaweiCloud SDK RDS

- _Features_
  - Support the APIs `ListLogLtsConfigs`, `SetLogLtsConfigs`, `DeleteLogLtsConfigs`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateRocketMqMigrationTask**
    - changes of request param
      - `+ topicConfigTable`
      - `+ subscriptionGroupTable`
      - `+ vhosts`
      - `+ queues`
      - `+ exchanges`
      - `+ bindings`
      - `* body: map<string, object> -> object<CreateRocketMqMigrationTaskReq>`

### HuaweiCloud SDK SecMaster

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListAlerts**
    - changes of request param
      - `* condition.conditions.data: list<object> -> list<string>`
      - `* condition.logics: list<object> -> list<string>`
  - **ListIncidents**
    - changes of request param
      - `* condition.conditions.data: list<object> -> list<string>`
      - `* condition.logics: list<object> -> list<string>`
  - **ListIndicators**
    - changes of request param
      - `* condition: string -> object`
  - **ListDataobjectRelations**
    - changes of request param
      - `* condition.conditions.data: list<object> -> list<string>`
      - `* condition.logics: list<object> -> list<string>`

### HuaweiCloud SDK SMS

- _Features_
  - Support the APIs `ShowConsistencyResult`, `UpdateConsistencyResult`
- _Bug Fix_
  - None
- _Change_
  - **UpdateTaskStatus**
    - changes of request param
      - `+ is_need_consistency_check`
  - **ListServers**
    - changes of request param
      - `+ is_consistency_result_exist`
    - changes of response param
      - `+ source_servers.is_consistency_result_exist`

# 3.1.68 2023-12-07

### HuaweiCloud SDK AOS

- _Features_
  - Support the API `DeleteStackInstance`
- _Bug Fix_
  - None
- _Change_
  - **ListStackSetOperations**
    - changes of response param
      - `+ stack_set_operations.action: enum value [UPDATE_STACK_INSTANCES]`
  - **ShowStackSetOperationMetadata**
    - changes of response param
      - `+ action: enum value [UPDATE_STACK_INSTANCES]`

### HuaweiCloud SDK APIG

- _Features_
  - Support the API `CheckApiGroupsV2`
- _Bug Fix_
  - None
- _Change_
  - **CreatePrepayResize**
    - changes of request param
      - `+ instance_id`
  - **ListPluginAttachableApis**
    - changes of request param
      - `* env_id: optional -> required`
  - **ListApisV2**
    - changes of request param
      - `+ return_data_mode`

### HuaweiCloud SDK CBH

- _Features_
  - Support the API `LoginCbh`
- _Bug Fix_
  - None
- _Change_
  - **ShowAvailableZoneInfo**
    - changes of response param
      - `* availability_zone: object<AvailabilityZones> -> list<AvailabilityZones>`

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowPipelineLog**
    - changes of request param
      - `- level`
      - `- job_run_id`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the following APIs:
    - `SetFactoryJobTags`
    - `ListSecurityPermissionSets`
    - `CreateSecurityPermissionSet`
    - `ShowSecurityPermissionSet`
    - `UpdateSecurityPermissionSet`
    - `DeleteSecurityPermissionSet`
    - `ListSecurityPermissionSetMembers`
    - `CreateSecurityPermissionSetMember`
    - `BatchDeleteSecurityPermissionSetMembers`
    - `ListSecurityPermissionSetPermissions`
    - `CreateSecurityPermissionSetPermission`
    - `BatchDeleteSecurityPermissionSetPermissions`
    - `UpdateSecurityPermissionSetPermission`
    - `ListSecurityDataClassificationRules`
    - `CreateSecurityDataClassificationRule`
    - `ShowSecurityDataClassificationRule`
    - `UpdateSecurityDataClassificationRule`
    - `DeleteSecurityDataClassificationRule`
    - `BatchDeleteSecurityDataClassificationRule`
    - `UpdateSecurityRuleEnableStatus`
    - `ListSecurityDataClassificationRuleGroups`
    - `ShowSecurityDataClassificationRuleGroup`
- _Bug Fix_
  - None
- _Change_
  - **DeleteApi**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **PublishApi**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowApplyDetail**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowMessageDetail**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowCatalogDetail**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **UpdateCatalog**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **CreateServiceCatalog**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **DeleteServiceCatalog**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **MigrateCatalog**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **MigrateApi**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **SearchIdByPath**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowPathById**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **PublishApiToInstance**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ExecuteApiToInstance**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **AuthorizeApiToInstance**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **AuthorizeActionApiToInstance**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **DeleteApp**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowAppInfo**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **UpdateApp**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowApisOverview**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowAppsOverview**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowApisDetail**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowAppsDetail**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **UpdateFactoryJobName**
    - changes of request param
      - `- x-Auth-Token`
  - **BatchApproveApply**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListApply**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ConfirmMessage**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListMessage**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListAllCatalogList**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListCatalogList**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowPathObjectById**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **DebugApi**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **SearchPublishInfo**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListInstanceList**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **SearchDebugInfo**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListApicInstances**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListApicGroups**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **CreateApp**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListApps**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListApisTop**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListAppsTop**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowApisDashboard**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowApiDashboard**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowAppsDashboard**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListApiTopN**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListApis**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **CreateApi**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ShowApi**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **UpdateApi**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **ListApiCatalogList**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **SearchAuthorizeApp**
    - changes of request param
      - `* Dlm-Type: required -> optional`
  - **SearchBindApi**
    - changes of request param
      - `* Dlm-Type: required -> optional`

### HuaweiCloud SDK DLI

- _Features_
  - Support the APIs `ListJobAuthInfos`, `UpdateJobAuthInfo`, `CreateJobAuthInfo`, `DeleteJobAuthInfo`
- _Bug Fix_
  - None
- _Change_
  - Deprecate the following APIs:
    - `ShowDliAgency`
    - `CreateDliAgency`
    - `DeleteResource`
    - `ShowResourceInfo`
    - `UpdateGroupOrResourceOwner`
    - `ShowBatchLog`
    - `ExportTable`
    - `ImportTable`
    - `ExportSqlJobResult`
    - `UpdateDatabaseOwner`
    - `DeleteDatabase`
    - `RegisterAuthorizedQueue`
    - `UpdateTableOwner`
    - `ShowTableContent`
    - `UpdateQueueCidr`
    - `BatchDeleteQueuePlans`
    - `ChangeQueuePlan`
    - `DeleteQueuePlan`
    - `DeleteAuthInfo`
    - `DeleteEnhancedConnectionRoutes`
    - `CreateEnhancedConnectionRoutes`
    - `RegisterBucket`
    - `CreateIefMessageChannel`
    - `UploadFiles`
    - `UploadPythonFiles`
    - `ListResources`
    - `UploadResources`
    - `UploadJars`
    - `ListDatabases`
    - `CreateDatabase`
    - `ListTableUsers`
    - `ChangeAuthorization`
    - `ListTablePrivileges`
    - `ListDatabaseUsers`
    - `ListQueueUsers`
    - `ListAllTables`
    - `CreateTable`
    - `DeleteTable`
    - `ShowDescribeTable`
    - `CreateQueuePlan`
    - `ListQueuePlans`
    - `UpdateAuthInfo`
    - `CreateAuthInfo`
    - `ListAuthInfo`
    - `ChangeFlinkJobStatusReport`
    - `RunIefJobActionCallBack`
    - `CreateIefSystemEvents`
    - `ListDatasourceConnections`
    - `CreateDatasourceConnection`
    - `DeleteDatasourceConnection`
    - `ShowDatasourceConnection`
    - `ShowSqlSampleTemplates`
    - `ShowPartitions`
    - `ShowFlinkMetric`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the following APIs:
    - `ShowDependcy`
    - `UpdateDependcy`
    - `DeleteDependency`
    - `AsyncInvokeReservedFunction`
    - `CreateDependency`
  - **ShowFuncReservedInstanceMetrics**
    - changes of request param
      - `+ marker`
      - `+ limit`
  - **ListFunctionApplications**
    - changes of request param
      - `+ limit`
      - `+ marker`
  - **ListStatistics**
    - changes of request param
      - `+ limit`
      - `+ marker`

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the APIs `ListGaussMySqlInstancesUnifyStatus`, `ShowGaussMySqlInstanceInfoUnifyStatus`, `ListGaussMySqlInstanceDetailInfoUnifyStatus`, `SwitchGaussMySqlProxySsl`
- _Bug Fix_
  - None
- _Change_
  - **ShowGaussMySqlProxyList**
    - changes of response param
      - `+ proxy_list.proxy.ssl_option`

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - Support the API `OfflineNodes`
- _Bug Fix_
  - None
- _Change_
  - **ListLtsConfigs**
    - changes of response param
      - `* instance_lts_configs.instance.supported_log_types: string -> list<string>`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ResetDeviceSecret**
    - changes of request param
      - `+ secret_type`
    - changes of response param
      - `+ secret_type`
  - **ResetFingerprint**
    - changes of request param
      - `+ fingerprint_type`
    - changes of response param
      - `+ fingerprint_type`
  - **ShowDevice**
    - changes of response param
      - `+ auth_info.secondary_secret`
      - `+ auth_info.secondary_fingerprint`
      - `* auth_info: object<AuthInfo> -> object<AuthInfoRes>`
  - **UpdateDevice**
    - changes of response param
      - `+ auth_info.secondary_secret`
      - `+ auth_info.secondary_fingerprint`
      - `* auth_info: object<AuthInfo> -> object<AuthInfoRes>`
  - **AddDevice**
    - changes of response param
      - `+ auth_info.secondary_secret`
      - `+ auth_info.secondary_fingerprint`
      - `* auth_info: object<AuthInfo> -> object<AuthInfoRes>`

### HuaweiCloud SDK MRS

- _Features_
  - Support the APIs `UpdateAutoScalingPolicy`, `CreateAutoScalingPolicy`, `DeleteAutoScalingPolicy`
- _Bug Fix_
  - None
- _Change_
  - **ShowAutoScalingPolicy**
    - changes of response param
      - `+ auto_scaling_policy.tags`
      - `- auto_scaling_policy.exec_scripts`
      - `* auto_scaling_policy: object<AutoScalingPolicy> -> object<AutoScalingPolicyInfo>`

### HuaweiCloud SDK NAT

- _Features_
  - Support the following APIs:
    - `ListNatGatewayByTag`
    - `BatchCreateDeleteNatGatewayTag`
    - `ShowNatGatewayTag`
    - `CreateNatGatewayTag`
    - `DeleteNatGatewayTag`
    - `ListNatGatewayTag`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK OMS

- _Features_
  - Support the API `BatchUpdateTasks`
- _Bug Fix_
  - None
- _Change_
  - **ShowSyncTask**
    - changes of response param
      - `+ dst_storage_policy`
      - `+ object_overwrite_mode`
  - **ListSyncTasks**
    - changes of response param
      - `+ tasks.object_overwrite_mode`
      - `+ tasks.dst_storage_policy`

### HuaweiCloud SDK RocketMQ

- _Features_
  - Support the APIs `ShowRocketMqConfigs`, `UpdateRocketMqConfigs`
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of request param
      - `+ status: enum value [UPGRADING,UPGRADINGFAILED]`

### HuaweiCloud SDK SFSTurbo

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **SetHpcCacheBackend**
    - changes of request param
      - `* update_hpc_cache.data.nas.type: object -> string`
      - `* update_hpc_cache.data.nas.url: object -> string`

# 3.1.67 2023-11-30

### HuaweiCloud SDK AOM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListPermissions**
    - changes of response param
      - `* : map<string, AuthModel> -> string`
  - **ListAccessCode**
    - changes of response param
      - `- access_codes.status: enum value [enable,unenable]`

### HuaweiCloud SDK CC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListBandwidthPackageTags**
    - changes of response param
      - `+ tags.values`
      - `- tags.value`
      - `* tags: list<Tag> -> list<MultivaluedTag>`

### HuaweiCloud SDK CCE

- _Features_
  - Support the following APIs:
    - `ShowClusterConfig`
    - `UpdateClusterLogConfig`
    - `ListPartitions`
    - `CreatePartition`
    - `ShowPartition`
    - `UpdatePartition`
    - `ShowNodePoolConfigurations`
    - `UpdateNodePoolConfiguration`
    - `ShowClusterConfigurationDetails`
    - `ListCharts`
    - `UploadChart`
    - `ShowChart`
    - `UpdateChart`
    - `DeleteChart`
    - `DownloadChart`
    - `ShowChartValues`
    - `ShowUserChartsQuotas`
    - `ListReleases`
    - `CreateRelease`
    - `ShowRelease`
    - `UpdateRelease`
    - `DeleteRelease`
    - `ShowReleaseHistory`
- _Bug Fix_
  - None
- _Change_
  - **ResizeCluster**
    - changes of request param
      - `* extendParam: object<ResizeClusterRequestExtendParam> -> object`
  - **UpdateClusterEip**
    - changes of request param
      - `* spec: object -> object<MasterEIPRequestSpec>`
    - changes of response param
      - `* spec: object -> object<MasterEIPResponseSpec>`
  - **ShowClusterEndpoints**
    - changes of response param
      - `* spec: object -> object<OpenAPISpec>`
  - **ShowAddonInstance**
    - changes of response param
      - `- status.status: enum value [unknown]`
  - **UpdateAddonInstance**
    - changes of response param
      - `- status.status: enum value [unknown]`
  - **RollbackAddonInstance**
    - changes of response param
      - `- status.status: enum value [unknown]`
  - **ShowCluster**
    - changes of response param
      - `+ spec.enableMasterVolumeEncryption`
  - **UpdateCluster**
    - changes of response param
      - `+ spec.enableMasterVolumeEncryption`
  - **DeleteCluster**
    - changes of request param
      - `+ ondemand_node_policy`
      - `+ periodic_node_policy`
    - changes of response param
      - `+ spec.enableMasterVolumeEncryption`
  - **CreateAddonInstance**
    - changes of response param
      - `- status.status: enum value [unknown]`
  - **ListAddonInstances**
    - changes of response param
      - `- items.status.status: enum value [unknown]`
  - **CreateCluster**
    - changes of request param
      - `+ spec.enableMasterVolumeEncryption`
    - changes of response param
      - `+ spec.enableMasterVolumeEncryption`
  - **ListClusters**
    - changes of request param
      - `+ status: enum value [Hibernating,Hibernation,Awaking]`
    - changes of response param
      - `+ items.spec.enableMasterVolumeEncryption`
  - **ShowNode**
    - changes of response param
      - `+ spec.hostnameConfig`
      - `+ spec.extendParam.kubeReservedMem`
      - `+ spec.extendParam.systemReservedMem`
      - `+ spec.extendParam.init-node-password`
      - `- spec.extendParam.kube-reserved-mem`
      - `- spec.extendParam.system-reserved-mem`
  - **UpdateNode**
    - changes of response param
      - `+ spec.hostnameConfig`
      - `+ spec.extendParam.kubeReservedMem`
      - `+ spec.extendParam.systemReservedMem`
      - `+ spec.extendParam.init-node-password`
      - `- spec.extendParam.kube-reserved-mem`
      - `- spec.extendParam.system-reserved-mem`
  - **DeleteNode**
    - changes of response param
      - `+ spec.hostnameConfig`
      - `+ spec.extendParam.kubeReservedMem`
      - `+ spec.extendParam.systemReservedMem`
      - `+ spec.extendParam.init-node-password`
      - `- spec.extendParam.kube-reserved-mem`
      - `- spec.extendParam.system-reserved-mem`
  - **CreateNode**
    - changes of request param
      - `+ spec.hostnameConfig`
      - `+ spec.extendParam.kubeReservedMem`
      - `+ spec.extendParam.systemReservedMem`
      - `+ spec.extendParam.init-node-password`
      - `- spec.extendParam.kube-reserved-mem`
      - `- spec.extendParam.system-reserved-mem`
    - changes of response param
      - `+ spec.hostnameConfig`
      - `+ spec.extendParam.kubeReservedMem`
      - `+ spec.extendParam.systemReservedMem`
      - `+ spec.extendParam.init-node-password`
      - `- spec.extendParam.kube-reserved-mem`
      - `- spec.extendParam.system-reserved-mem`
  - **ListNodes**
    - changes of response param
      - `+ items.spec.hostnameConfig`
      - `+ items.spec.extendParam.kubeReservedMem`
      - `+ items.spec.extendParam.systemReservedMem`
      - `+ items.spec.extendParam.init-node-password`
      - `- items.spec.extendParam.kube-reserved-mem`
      - `- items.spec.extendParam.system-reserved-mem`
  - **ShowNodePool**
    - changes of response param
      - `+ spec.nodeTemplate.hostnameConfig`
      - `+ spec.nodeTemplate.extendParam.kubeReservedMem`
      - `+ spec.nodeTemplate.extendParam.systemReservedMem`
      - `+ spec.nodeTemplate.extendParam.init-node-password`
      - `- spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `- spec.nodeTemplate.extendParam.system-reserved-mem`
  - **UpdateNodePool**
    - changes of response param
      - `+ spec.nodeTemplate.hostnameConfig`
      - `+ spec.nodeTemplate.extendParam.kubeReservedMem`
      - `+ spec.nodeTemplate.extendParam.systemReservedMem`
      - `+ spec.nodeTemplate.extendParam.init-node-password`
      - `- spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `- spec.nodeTemplate.extendParam.system-reserved-mem`
  - **DeleteNodePool**
    - changes of response param
      - `+ spec.nodeTemplate.hostnameConfig`
      - `+ spec.nodeTemplate.extendParam.kubeReservedMem`
      - `+ spec.nodeTemplate.extendParam.systemReservedMem`
      - `+ spec.nodeTemplate.extendParam.init-node-password`
      - `- spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `- spec.nodeTemplate.extendParam.system-reserved-mem`
  - **AddNode**
    - changes of request param
      - `+ nodeList.spec.hostnameConfig`
  - **ResetNode**
    - changes of request param
      - `+ nodeList.spec.hostnameConfig`
  - **CreateNodePool**
    - changes of request param
      - `+ spec.nodeTemplate.hostnameConfig`
      - `+ spec.nodeTemplate.extendParam.kubeReservedMem`
      - `+ spec.nodeTemplate.extendParam.systemReservedMem`
      - `+ spec.nodeTemplate.extendParam.init-node-password`
      - `- spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `- spec.nodeTemplate.extendParam.system-reserved-mem`
    - changes of response param
      - `+ spec.nodeTemplate.hostnameConfig`
      - `+ spec.nodeTemplate.extendParam.kubeReservedMem`
      - `+ spec.nodeTemplate.extendParam.systemReservedMem`
      - `+ spec.nodeTemplate.extendParam.init-node-password`
      - `- spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `- spec.nodeTemplate.extendParam.system-reserved-mem`
  - **ListNodePools**
    - changes of response param
      - `+ items.spec.nodeTemplate.hostnameConfig`
      - `+ items.spec.nodeTemplate.extendParam.kubeReservedMem`
      - `+ items.spec.nodeTemplate.extendParam.systemReservedMem`
      - `+ items.spec.nodeTemplate.extendParam.init-node-password`
      - `- items.spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `- items.spec.nodeTemplate.extendParam.system-reserved-mem`

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - Support the API `ShowPipelineLog`
- _Bug Fix_
  - None
- _Change_
  - **UpdatePluginBaseInfo**
    - changes of request param
      - `+ plugin_composition_type`
  - **CreatePublisher**
    - changes of request param
      - `+ description`
  - **ListPublisher**
    - changes of response param
      - `+ total`
      - `+ offset`
      - `+ data`
      - `+ limit`
      - `- tenant_id`
      - `- website`
      - `- logo_url`
      - `- description`
      - `- last_update_user_id`
      - `- source_url`
      - `- is_delete`
      - `- last_update_time`
      - `- support_url`
      - `- user_id`
      - `- name`
      - `- en_name`
      - `- auth_status`
      - `- publisher_unique_id`
      - `- last_update_user_name`
  - **ListBasePluginsNewPost**
    - changes of response param
      - `+ data.business_type`
      - `+ data.display_name`
      - `+ data.unique_id`
      - `- data.businessType`
      - `- data.displayName`
      - `- data.uniqueId`
      - `+ data.plugins_list.publisher_unique_id`
      - `+ data.plugins_list.manifest_version`
      - `- data.plugins_list.publisherUniqueId`
      - `- data.plugins_list.manifestVersion`
  - **ListPlugins**
    - changes of response param
      - `+ data.plugin_name`
      - `+ data.display_name`
      - `+ data.version_description`
      - `+ data.version_attribution`
      - `+ data.unique_id`
      - `+ data.op_user`
      - `+ data.op_time`
      - `+ data.plugin_composition_type`
      - `+ data.plugin_attribution`
      - `+ data.workspace_id`
      - `+ data.business_type`
      - `+ data.business_type_display_name`
      - `+ data.icon_url`
      - `+ data.refer_count`
      - `+ data.usage_count`
      - `+ data.runtime_attribution`
      - `- data.pluginName`
      - `- data.displayName`
      - `- data.versionDescription`
      - `- data.versionAttribution`
      - `- data.uniqueId`
      - `- data.opUser`
      - `- data.opTime`
      - `- data.pluginCompositionType`
      - `- data.pluginAttribution`
      - `- data.workspaceId`
      - `- data.businessType`
      - `- data.businessTypeDisplayName`
      - `- data.iconUrl`
      - `- data.referCount`
      - `- data.usageCount`
      - `- data.runtimeAttribution`
      - `* data: list<object> -> list<PluginBasicVO>`
  - **ListPLuginVersion**
    - changes of response param
      - `+ data.plugin_name`
      - `+ data.display_name`
      - `+ data.version_description`
      - `+ data.version_attribution`
      - `+ data.unique_id`
      - `+ data.op_user`
      - `+ data.op_time`
      - `+ data.plugin_composition_type`
      - `+ data.plugin_attribution`
      - `+ data.workspace_id`
      - `+ data.business_type`
      - `+ data.business_type_display_name`
      - `+ data.icon_url`
      - `+ data.refer_count`
      - `+ data.usage_count`
      - `+ data.runtime_attribution`
      - `- data.pluginName`
      - `- data.displayName`
      - `- data.versionDescription`
      - `- data.versionAttribution`
      - `- data.uniqueId`
      - `- data.opUser`
      - `- data.opTime`
      - `- data.pluginCompositionType`
      - `- data.pluginAttribution`
      - `- data.workspaceId`
      - `- data.businessType`
      - `- data.businessTypeDisplayName`
      - `- data.iconUrl`
      - `- data.referCount`
      - `- data.usageCount`
      - `- data.runtimeAttribution`
      - `* data: list<object> -> list<PluginBasicVO>`
  - **ShowPublisher**
    - changes of response param
      - `+ publisher_detail_map`
      - `- body`
  - **CreateBasicPlugin**
    - changes of request param
      - `+ plugin_composition_type`
  - **UpdateBasicPlugin**
    - changes of request param
      - `+ plugin_composition_type`
  - **CreateStrategy**
    - changes of request param
      - `- type`
      - `- rules.type`
      - `- rules.name`
      - `- rules.layout_content`
      - `- rules.plugin_id`
      - `- rules.plugin_name`
      - `- rules.plugin_version`
      - `- rules.content`
  - **UpdateStrategy**
    - changes of request param
      - `- parent_id`
      - `- rules.type`
      - `- rules.name`
      - `- rules.layout_content`
      - `- rules.plugin_id`
      - `- rules.plugin_name`
      - `- rules.plugin_version`
      - `- rules.content`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **SearchAtomicIndexes**
    - changes of response param
      - `+ data.value`
  - **ShowAtomicIndexById**
    - changes of response param
      - `+ data.value`
  - **ListDerivativeIndexes**
    - changes of response param
      - `+ data.value`
  - **ShowDerivativeIndexById**
    - changes of response param
      - `+ data.value`
  - **ListCompoundMetrics**
    - changes of response param
      - `+ data.value`
  - **ShowCompoundMetricById**
    - changes of response param
      - `+ data.value`
  - **ListApiCatalogList**
    - changes of response param
      - `+ apis.publish_messages`
  - **ParseUserBehavior**
    - changes of request param
      - `+ params.filter.attribute: enum value [base.DataAsset.sourceType,typeName,classifications.name,tags.name,securityLevel.name,workspaceId]`
      - `+ params.filter.operator: enum value [IN,EQ]`
      - `* params.filter.value: object -> list<string>`
      - `* params.filter.condition: object<ConditionInfo> -> string`
  - **ShowDataSets**
    - changes of request param
      - `+ filter.attribute: enum value [base.DataAsset.sourceType,typeName,classifications.name,tags.name,securityLevel.name,workspaceId]`
      - `+ filter.operator: enum value [IN,EQ]`
      - `* filter.value: object -> list<string>`
      - `* filter.condition: object<ConditionInfo> -> string`
    - changes of response param
      - `* facets: object -> list<object>`
  - **ListApis**
    - changes of request param
      - `+ x-return-publish-messages`
    - changes of response param
      - `+ records.publish_messages`
  - **ShowApi**
    - changes of response param
      - `+ publish_messages`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSlowlog**
    - changes of response param
      - `+ total_num`

### HuaweiCloud SDK DLI

- _Features_
  - Support the API `ShowQuota`
- _Bug Fix_
  - None
- _Change_
  - **ListQueueProperties**
    - changes of request param
      - `+ offset`
      - `+ limit`
      - `- page`
      - `- page_size`

### HuaweiCloud SDK EIP

- _Features_
  - Support the APIs `BatchModifyBandwidth`, `ListEipBandwidths`, `ListBandwidthsLimit`, `UpdatePublicip`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - Support the API `ListInfluxdbSlowLogs`
- _Bug Fix_
  - None
- _Change_
  - **ListLtsConfigs**
    - changes of response param
      - `+ instance_lts_configs.instance.supported_log_types`

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RunQueryDocumentModerationJob**
    - changes of response param
      - `+ result.details.start_position`
      - `+ result.details.end_position`
      - `+ result.details.image_url`

### HuaweiCloud SDK RDS

- _Features_
  - Support the API `SetInstancesDbShrink`
- _Bug Fix_
  - None
- _Change_
  - **UpgradeDbMajorVersion**
    - changes of response param
      - `+ job_id`
  - **ShowUpgradeDbMajorVersionStatus**
    - changes of response param
      - `+ check_expiration_time`
      - `- report_expiration_time`
  - **StartResizeFlavorAction**
    - changes of response param
      - `+ order_id`
  - **StartInstanceEnlargeVolumeAction**
    - changes of response param
      - `+ order_id`
  - **StartInstanceSingleToHaAction**
    - changes of response param
      - `+ order_id`
  - **ListHistoryDatabase**
    - changes of request param
      - `+ engine`
      - `- database_name`

### HuaweiCloud SDK RocketMQ

- _Features_
  - Support the APIs `ShowEngineInstanceExtendProductInfo`, `ResizeInstance`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK SIS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeFlashAsr**
    - changes of request param
      - `* obs_bucket_name: optional -> required`
      - `* obs_object_key: optional -> required`

# 3.1.66 2023-11-23

### HuaweiCloud SDK CFW

- _Features_
  - Support the APIs `ListLogConfig`, `UpdateLogConfig`, `AddLogConfig`, `CreateEastWestFirewall`
- _Bug Fix_
  - None
- _Change_
  - **ListFlowLogs**
    - changes of response param
      - `* data.records.start_time: int32 -> int64`
      - `* data.records.end_time: int32 -> int64`
      - `* data.records.src_port: string -> int32`
      - `* data.records.dst_port: string -> int32`
  - **ListAccessControlLogs**
    - changes of response param
      - `* data.records.hit_time: int32 -> int64`
      - `* data.records.src_port: string -> int32`
      - `* data.records.dst_port: string -> int32`
  - **ChangeIpsSwitchStatus**
    - changes of request param
      - `+ X-Language`
  - **ListAttackLogs**
    - changes of response param
      - `* data.records.event_time: string -> int64`
      - `* data.records.attack_rule_id: int32 -> string`
      - `* data.records.packet: object<Packet> -> string`

# 3.1.65 2023-11-23

### HuaweiCloud SDK AOM

- _Features_
  - Support the following APIs:
    - `ListPromInstance`
    - `CreatePromInstance`
    - `DeletePromInstance`
    - `CreateRecordingRule`
    - `ListPermissions`
    - `ListAccessCode`
    - `ListAgents`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - Support the following APIs:
    - `UpdatePluginBaseInfo`
    - `CreatePluginDraft`
    - `PublishPluginDraft`
    - `CreatePluginVersion`
    - `UpdatePluginDraft`
    - `CreatePublisher`
- _Bug Fix_
  - None
- _Change_
  - **SwitchStrategy**
    - changes of response param
      - `+ rule_set_id`
      - `- rule_template_instance_id`
  - **SwitchOpenSourceStrategy**
    - changes of response param
      - `+ rule_set_id`
      - `- rule_template_instance_id`
  - **ShowPublisher**
    - changes of response param
      - `+ body`
  - **CreatePipelineNew**
    - changes of request param
      - `+ group_id`
      - `+ id`
      - `* schedules.days_of_week: string -> list<integer>`
  - **UpdateStrategy**
    - changes of response param
      - `+ rule_set_id`
      - `- rule_template_instance_id`
  - **UpdateOpenSourceStrategy**
    - changes of response param
      - `+ rule_set_id`
      - `- rule_template_instance_id`

### HuaweiCloud SDK CSE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpgradeEngineConfig**
    - changes of request param
      - `+ authType`
      - `- version`
  - **ShowEngine**
    - changes of response param
      - `+ specType`
      - `+ enterpriseProjectId`
      - `+ externalEntrypoint`
      - `+ beDefault`
      - `+ engineAdditionalActions`
      - `+ cceSpec`
      - `+ vmIds`
      - `+ latestVersion`
      - `+ createTime`
      - `+ createUser`
      - `+ authType`
      - `+ latestJobId`
      - `+ projectId`
      - `+ enterpriseProjectName`
      - `- auth_type`
      - `- create_time`
      - `- be_default`
      - `- enterprise_project_name`
      - `- latest_job_id`
      - `- spec_type`
      - `- external_entrypoint`
      - `- cce_spec`
      - `- enterprise_project_id`
      - `- latest_version`
      - `- project_id`
      - `- vm_ids`
      - `- engine_additional_actions`
      - `- create_user`
      - `+ reference.azList`
      - `+ reference.networkId`
      - `+ reference.subnetCidr`
      - `+ reference.subnetCidrV6`
      - `+ reference.subnetGateway`
      - `+ reference.publicIpId`
      - `+ reference.serviceLimit`
      - `+ reference.instanceLimit`
      - `- reference.az_list`
      - `- reference.network_id`
      - `- reference.subnet_cidr`
      - `- reference.subnet_cidr_v6`
      - `- reference.subnet_gateway`
      - `- reference.public_ip_id`
      - `- reference.service_limit`
      - `- reference.instance_limit`
  - **CreateEngine**
    - changes of request param
      - `+ vpcId`
  - **ListEngines**
    - changes of response param
      - `+ data.enterpriseProjectId`
      - `+ data.enterpriseProjectName`
      - `+ data.authType`
      - `+ data.externalAddress`
      - `+ data.serviceEndpoint`
      - `+ data.publicAddress`
      - `+ data.publicServiceEndpoint`
      - `+ data.totalInstance`
      - `+ data.usedInstance`
      - `+ data.availableInstance`
      - `+ data.latestVersion`
      - `+ data.createTime`
      - `+ data.dueTo`
      - `+ data.latestJobId`
      - `+ data.engineAdditionalActions`
      - `+ data.specType`
      - `- data.enterpris_project_id`
      - `- data.enterprise_project_name`
      - `- data.auth_type`
      - `- data.external_address`
      - `- data.service_endpoint`
      - `- data.public_address`
      - `- data.public_service_endpoint`
      - `- data.total_instance`
      - `- data.used_instance`
      - `- data.available_instance`
      - `- data.latest_version`
      - `- data.create_time`
      - `- data.due_to`
      - `- data.latest_job_id`
      - `- data.engine_additional_actions`
      - `- data.spec_type`
      - `+ data.reference.azList`
      - `+ data.reference.networkId`
      - `+ data.reference.subnetCidr`
      - `+ data.reference.subnetCidrV6`
      - `+ data.reference.subnetGateway`
      - `+ data.reference.publicIpId`
      - `+ data.reference.serviceLimit`
      - `+ data.reference.instanceLimit`
      - `- data.reference.az_list`
      - `- data.reference.network_id`
      - `- data.reference.subnet_cidr`
      - `- data.reference.subnet_cidr_v6`
      - `- data.reference.subnet_gateway`
      - `- data.reference.public_ip_id`
      - `- data.reference.service_limit`
      - `- data.reference.instance_limit`
  - **ShowEngineJob**
    - changes of response param
      - `+ createUser`
      - `+ startTime`
      - `+ endTime`
      - `+ engineId`
      - `- start_time`
      - `- engine_id`
      - `- end_time`
      - `- create_user`
      - `+ tasks.taskName`
      - `+ tasks.taskNames`
      - `+ tasks.startTime`
      - `+ tasks.endTime`
      - `+ tasks.taskExecutorBrief`
      - `- tasks.task_name`
      - `- tasks.task_names`
      - `- tasks.start_time`
      - `- tasks.end_time`
      - `- tasks.task_executor_brief`
      - `+ tasks.tasks.jobId`
      - `+ tasks.tasks.taskName`
      - `+ tasks.tasks.engineName`
      - `+ tasks.tasks.taskOrder`
      - `+ tasks.tasks.startTime`
      - `+ tasks.tasks.endTime`
      - `+ tasks.tasks.createTime`
      - `+ tasks.tasks.updateTime`
      - `+ tasks.tasks.taskExecutorBrief`
      - `- tasks.tasks.job_id`
      - `- tasks.tasks.task_name`
      - `- tasks.tasks.engine_name`
      - `- tasks.tasks.task_order`
      - `- tasks.tasks.start_time`
      - `- tasks.tasks.end_time`
      - `- tasks.tasks.create_time`
      - `- tasks.tasks.update_time`
      - `- tasks.tasks.task_executor_brief`
  - **CreateMicroserviceRouteRule**
    - changes of request param
      - `+ match.headers.<header>`
      - `- match.headers.aaaa`
      - `+ route.tags.<tag>`
      - `- route.tags.version`

### HuaweiCloud SDK CSS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListCerts**
    - changes of response param
      - `* defaultCerts: object<DefaultCertsResource> -> list<DefaultCertsResource>`
      - `* customCerts: object<CustomCertsResource> -> list<CustomCertsResource>`

### HuaweiCloud SDK DCS

- _Features_
  - Support the API `LogoffWebCli`
- _Bug Fix_
  - None
- _Change_
  - **ListSlowlog**
    - changes of response param
      - `+ slowlogs.database_id`
      - `+ slowlogs.username`

### HuaweiCloud SDK DDS

- _Features_
  - Support the following APIs:
    - `ListLtsConfigs`
    - `UpdateLtsConfig`
    - `DeleteLtsConfig`
    - `ListLtsErrorLogs`
    - `ShowKillOpRuleRuleList`
    - `UpdateKillOpRule`
    - `CreateKillOpRule`
    - `DeleteKillOpRuleList`
    - `SwitchInstancePrimary`
    - `DeleteReadonlyNode`
    - `StopBackup`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchDeleteJobs**
    - changes of request param
      - `+ jobs.is_show_breakpoint_position`
  - **BatchSetPolicy**
    - changes of request param
      - `+ jobs.file_and_position`
      - `+ jobs.gtid_set`
  - **BatchListProgresses**
    - changes of response param
      - `+ results.incre_trans_delay_millis`
  - **ShowJobList**
    - changes of request param
      - `+ instance_ids`
      - `+ instance_ip`

### HuaweiCloud SDK DRS

- _Features_
  - Support the APIs `UploadJdbcDriver`, `ListJdbcDrivers`, `DeleteJdbcDriver`, `SyncJdbcDriver`
- _Bug Fix_
  - None
- _Change_
  - **BatchCreateJobsAsync**
    - changes of request param
      - `+ jobs.policy_config.dml_types`
  - **ListAsyncJobDetail**
    - changes of response param
      - `+ jobs.connection_management`
      - `+ jobs.policy_config.dml_types`
  - **UpdateBatchAsyncJobs**
    - changes of request param
      - `+ jobs.params.policy_config.dml_types`
  - **ShowJobDetail**
    - changes of response param
      - `+ job.connection_management`
      - `+ job.policy_config.dml_types`
  - **UpdateJob**
    - changes of request param
      - `+ job.params.policy_config.dml_types`

### HuaweiCloud SDK ELB

- _Features_
  - Support the following APIs:
    - `BatchAddAvailableZones`
    - `BatchRemoveAvailableZones`
    - `ListMasterSlavePools`
    - `CreateMasterSlavePool`
    - `ShowMasterSlavePool`
    - `DeleteMasterSlavePool`
- _Bug Fix_
  - None
- _Change_
  - **ShowLoadBalancer**
    - changes of response param
      - `+ loadbalancer.charge_mode`
      - `+ loadbalancer.log_group_id`
      - `+ loadbalancer.log_topic_id`
  - **UpdateLoadBalancer**
    - changes of request param
      - `+ loadbalancer.charge_mode`
      - `+ loadbalancer.ipv6_vip_address`
    - changes of response param
      - `+ loadbalancer.charge_mode`
      - `+ loadbalancer.log_group_id`
      - `+ loadbalancer.log_topic_id`
  - **ListListeners**
    - changes of response param
      - `+ listeners.ssl_early_data_enable`
  - **CreateListener**
    - changes of request param
      - `+ listener.ssl_early_data_enable`
    - changes of response param
      - `+ listener.ssl_early_data_enable`
  - **ShowListener**
    - changes of response param
      - `+ listener.ssl_early_data_enable`
  - **UpdateListener**
    - changes of request param
      - `+ listener.ssl_early_data_enable`
    - changes of response param
      - `+ listener.ssl_early_data_enable`
  - **ListLoadBalancers**
    - changes of request param
      - `+ log_topic_id`
      - `+ log_group_id`
    - changes of response param
      - `+ loadbalancers.charge_mode`
      - `+ loadbalancers.log_group_id`
      - `+ loadbalancers.log_topic_id`
  - **CreateLoadBalancer**
    - changes of request param
      - `+ loadbalancer.charge_mode`
      - `+ loadbalancer.ipv6_vip_address`
    - changes of response param
      - `+ loadbalancer.charge_mode`
      - `+ loadbalancer.log_group_id`
      - `+ loadbalancer.log_topic_id`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the following APIs:
    - `ListAppTemplates`
    - `ShowAppTemplate`
    - `ListFunctionApplications`
    - `CreateFunctionApp`
    - `ShowFunctionApp`
    - `DeleteFunctionApp`
    - `CreateCallbackWorkflow`
- _Bug Fix_
  - None
- _Change_
  - **ImportFunction**
    - changes of response param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
  - **ListFunctions**
    - changes of response param
      - `+ functions.pre_stop_handler`
      - `+ functions.pre_stop_timeout`
  - **CreateFunction**
    - changes of request param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
    - changes of response param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
  - **ShowFunctionConfig**
    - changes of response param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
  - **UpdateFunctionConfig**
    - changes of request param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
    - changes of response param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
  - **UpdateFunctionMaxInstanceConfig**
    - changes of response param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
  - **ListBridgeFunctions**
    - changes of response param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
  - **ShowResInstanceInfo**
    - changes of response param
      - `+ resources.resource_detail.pre_stop_handler`
      - `+ resources.resource_detail.pre_stop_timeout`
  - **CreateFunctionVersion**
    - changes of response param
      - `+ pre_stop_handler`
      - `+ pre_stop_timeout`
  - **ListFunctionVersions**
    - changes of response param
      - `+ versions.pre_stop_handler`
      - `+ versions.pre_stop_timeout`

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the API `ShowRestoreTables`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - Support the following APIs:
    - `ShowElbIpGroup`
    - `SwitchIpGroup`
    - `ListInstancesSession`
    - `DeleteInstancesSession`
    - `ListInstancesSessionStatistics`
    - `ResetParamGroupTemplate`
    - `ListRedisSlowLogs`
    - `ListCassandraSlowLogs`
    - `ListMongodbSlowLogs`
    - `ListLtsConfigs`
    - `SaveLtsConfigs`
    - `DeleteLtsConfigs`
    - `ListRestoreDatabases`
    - `ListRestoreTables`
    - `ListMongodbErrorLogs`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Kafka

- _Features_
  - Support the APIs `ShowKafkaUserClientQuota`, `UpdateKafkaUserClientQuotaTask`, `CreateKafkaUserClientQuotaTask`, `DeleteKafkaUserClientQuotaTask`
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of request param
      - `+ status: enum value [DELETING,ERROR,CREATEFAILED,FREEZING,EXTENDING,SHRINKING,EXTENDEDFAILED,CONFIGURING,UPGRADING,UPGRADINGFAILED,ROLLBACK,ROLLBACKFAILED,VOLUMETYPECHANGING]`
      - `+ status: enum value [FAULTY,RESIZING,RESIZING FAILED]`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeIdCard**
    - changes of request param
      - `+ return_portrait_location`
    - changes of response param
      - `+ result.portrait_location`

### HuaweiCloud SDK OMS

- _Features_
  - Support the following APIs:
    - `ListSyncTasks`
    - `CreateSyncTask`
    - `ShowSyncTask`
    - `DeleteSyncTask`
    - `ListSyncTaskStatistic`
    - `StopSyncTask`
    - `StartSyncTask`
    - `ShowBucketObjects`
    - `ShowCdnInfo`
    - `ShowCloudType`
    - `ShowRegionInfo`
    - `ShowBucketList`
    - `ShowBucketRegion`
    - `CheckPrefix`
- _Bug Fix_
  - None
- _Change_
  - **ShowTask**
    - changes of response param
      - `+ source_cdn.authentication_type: enum value [TENCENT_COS_A,TENCENT_COS_B,TENCENT_COS_C,TENCENT_COS_D]`
  - **ShowTaskGroup**
    - changes of response param
      - `+ source_cdn.authentication_type: enum value [TENCENT_COS_A,TENCENT_COS_B,TENCENT_COS_C,TENCENT_COS_D]`
  - **CreateTask**
    - changes of request param
      - `+ source_cdn.authentication_type: enum value [TENCENT_COS_A,TENCENT_COS_B,TENCENT_COS_C,TENCENT_COS_D]`
  - **ListTasks**
    - changes of response param
      - `+ tasks.source_cdn.authentication_type: enum value [TENCENT_COS_A,TENCENT_COS_B,TENCENT_COS_C,TENCENT_COS_D]`
  - **CreateTaskGroup**
    - changes of request param
      - `+ source_cdn.authentication_type: enum value [TENCENT_COS_A,TENCENT_COS_B,TENCENT_COS_C,TENCENT_COS_D]`
  - **ListTaskGroup**
    - changes of response param
      - `+ taskgroups.source_cdn.authentication_type: enum value [TENCENT_COS_A,TENCENT_COS_B,TENCENT_COS_C,TENCENT_COS_D]`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstancesDetails**
    - changes of request param
      - `+ status: enum value [DELETING,FREEZING,EXTENDING,SHRINKING,EXTENDEDFAILED,CONFIGURING,UPGRADING,UPGRADINGFAILED,ROLLBACK,ROLLBACKFAILED,VOLUMETYPECHANGING]`
      - `+ status: enum value [STARTING,CLOSING]`

### HuaweiCloud SDK RDS

- _Features_
  - Support the following APIs:
    - `UpgradeDbMajorVersion`
    - `ShowAvailableVersion`
    - `UpgradeDbMajorVersionPreCheck`
    - `ListInspectionHistories`
    - `ListUpgradeHistories`
    - `ShowUpgradeDbMajorVersionStatus`
    - `UpdateTdeStatus`
    - `ShowTdeStatus`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of request param
      - `+ status: enum value [DELETING,ERROR,CREATEFAILED,FREEZING,EXTENDING,SHRINKING,EXTENDEDFAILED,CONFIGURING,UPGRADING,UPGRADINGFAILED,ROLLBACK,ROLLBACKFAILED,VOLUMETYPECHANGING]`
      - `+ status: enum value [FAULTY,RESIZING,RESIZING FAILED]`

### HuaweiCloud SDK SecMaster

- _Features_
  - Support the following APIs:
    - `ListDataclass`
    - `ListDataclassFields`
    - `ListWorkflows`
    - `CreateDataspace`
    - `CreatePipe`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK ServiceStage

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateInstance**
    - changes of request param
      - `+ configuration.container_spec`
  - **ChangeInstance**
    - changes of request param
      - `+ configuration.container_spec`

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateAssetByFileUpload**
    - changes of request param
      - `+ thumbnail.quantity`
      - `+ thumbnail.quantity_time`
      - `+ thumbnail.type: enum value [quantity]`
  - **PublishAssetFromObs**
    - changes of request param
      - `+ thumbnail.quantity`
      - `+ thumbnail.quantity_time`
      - `+ thumbnail.type: enum value [quantity]`
  - **CreateAssetProcessTask**
    - changes of request param
      - `+ thumbnail.quantity`
      - `+ thumbnail.quantity_time`
      - `+ thumbnail.type: enum value [quantity]`
  - **ListTopStatistics**
    - changes of response param
      - `+ top_urls.duration_ms`
  - **UploadMetaDataByUrl**
    - changes of request param
      - `+ upload_metadatas.thumbnail.quantity`
      - `+ upload_metadatas.thumbnail.quantity_time`
      - `+ upload_metadatas.thumbnail.type: enum value [quantity]`
  - **ListAssetList**
    - changes of response param
      - `+ assets.duration_ms`
  - **ShowTakeOverAssetDetails**
    - changes of response param
      - `+ base_info.meta_data.duration_ms`
  - **PublishAssets**
    - changes of response param
      - `+ asset_info_array.base_info.meta_data.duration_ms`
  - **UnpublishAssets**
    - changes of response param
      - `+ asset_info_array.base_info.meta_data.duration_ms`
  - **ShowAssetMeta**
    - changes of response param
      - `+ asset_info_array.base_info.meta_data.duration_ms`
  - **ShowAssetDetail**
    - changes of response param
      - `+ base_info.meta_data.duration_ms`
      - `+ thumbnail_info.quantity`
  - **ShowTakeOverTaskDetails**
    - changes of response param
      - `+ assets.base_info.meta_data.duration_ms`

# 3.1.64 2023-11-16

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDomainFullConfig**
    - changes of response param
      - `+ configs.business_type`
      - `+ configs.service_area`
      - `+ configs.remark`
      - `+ configs.flexible_origin`
      - `+ configs.slice_etag_status`
      - `+ configs.origin_receive_timeout`
      - `+ configs.remote_auth`
      - `+ configs.websocket`
      - `+ configs.video_seek`
      - `+ configs.request_limit_rules`
      - `+ configs.ip_frequency_limit`
      - `+ configs.hsts`
      - `+ configs.quic`
      - `+ configs.url_auth.sign_method`
      - `+ configs.url_auth.match_type`
      - `+ configs.url_auth.inherit_config`
      - `+ configs.url_auth.key`
      - `+ configs.url_auth.backup_key`
      - `+ configs.url_auth.sign_arg`
      - `+ configs.https.expire_time`
      - `+ configs.https.certificate_type`
      - `+ configs.https.ocsp_stapling_status`
      - `+ configs.sources.weight`
      - `+ configs.sources.obs_bucket_type`
      - `+ configs.sources.bucket_access_key`
      - `+ configs.sources.bucket_secret_key`
      - `+ configs.sources.bucket_region`
      - `+ configs.sources.bucket_name`
      - `+ configs.compress.file_type`
      - `+ configs.user_agent_filter.ua_list`
  - **UpdateDomainFullConfig**
    - changes of request param
      - `+ configs.sources.weight`
      - `+ configs.sources.obs_bucket_type`
      - `+ configs.sources.bucket_access_key`
      - `+ configs.sources.bucket_secret_key`
      - `+ configs.sources.bucket_region`
      - `+ configs.sources.bucket_name`
      - `+ configs.compress.file_type`
      - `+ configs.user_agent_filter.ua_list`

### HuaweiCloud SDK CodeArtsBuild

- _Features_
  - Support the following APIs:
    - `DownloadBuildLog`
    - `DownloadTaskLog`
    - `ShowFlowGraph`
    - `ShowRecordDetail`
    - `ShowOutputInfo`
    - `StopJob`
    - `CreateBuildJob`
    - `UpdateBuildJob`
    - `ListTemplates`
    - `CreateTemplates`
    - `DeleteTemplates`
    - `ListNotice`
    - `UpdateNotice`
    - `DisableNotice`
    - `ListJobConfig`
- _Bug Fix_
  - None
- _Change_
  - **ShowRecordInfo**
    - changes of response param
      - `+ result.duration`

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - Support the following APIs:
    - `CreatePipelineTemplate`
    - `ShowProjectOpenSourceStrategy`
    - `ListProjectStrategy`
    - `ListProjectOpenSourceStrategy`
    - `ShowProjectStrategy`
    - `ShowRule`
    - `ListRule`
    - `UpdateRule`
    - `DeleteRule`
    - `CreateRule`
    - `CreateStrategy`
    - `UpdateStrategy`
    - `ShowStrategy`
    - `ListStrategy`
    - `DeleteStrategy`
    - `SwitchStrategy`
    - `CreateOpenSourceStrategy`
    - `UpdateOpenSourceStrategy`
    - `ShowOpenSourceStrategy`
    - `ListOpenSourceStrategy`
    - `DeleteOpenSourceStrategy`
    - `SwitchOpenSourceStrategy`
    - `CreatePipelineGroup`
    - `UpdatePipelineGroup`
    - `DeletePipelineGroup`
    - `ShowPipelineGroupTree`
    - `BatchMovePipelineToGroup`
    - `PublishPlugin`
    - `PublishPluginBind`
    - `UploadPluginIcon`
    - `UploadPublisherIcon`
    - `DeletePluginDraft`
    - `ListPublisher`
    - `ListAvailablePublisher`
    - `ListStagePlugins`
    - `ListBasePlugins`
    - `ListBasePluginsNewPost`
    - `ListPlugins`
    - `ShowPluginMetrics`
    - `ShowPluginInputs`
    - `ShowPluginOutputs`
    - `ListPLuginVersion`
    - `ShowPluginVersion`
    - `ListPluginVersionNumber`
    - `DeletePublisher`
    - `ShowPublisher`
    - `CreateBasicPlugin`
    - `UpdateBasicPlugin`
    - `DeleteBasicPlugin`
    - `UploadBasicPlugin`
    - `ShowBasicPlugin`
    - `UpdatePipelineTemplate`
    - `DeletePipelineTemplate`
- _Bug Fix_
  - None
- _Change_
  - **ListPipelines**
    - changes of response param
      - `+ pipelines.project_name`
  - **CreatePipelineNew**
    - changes of request param
      - `+ variables`
      - `+ schedules`
      - `+ triggers`
      - `+ manifest_version`
      - `+ definition`
      - `+ project_name`

### HuaweiCloud SDK CSE

- _Features_
  - Support the following APIs:
    - `ListGovernancePolicy`
    - `CreateGovernancePolicy`
    - `ListGovernancePolicyByPolicyId`
    - `UpdateGovernancePolicy`
    - `DeleteGovernancePolicy`
    - `ListMicroserviceRouteRule`
    - `CreateMicroserviceRouteRule`
    - `DeleteMicroserviceRouteRule`
    - `ListGovernancePolicys`
    - `UpgradeEngineConfig`
    - `ResizeEngine`
    - `ListNacosNamespaces`
    - `UpdateNacosNamespaces`
    - `CreateNacosNamespaces`
    - `DeleteNacosNamespaces`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CSMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSecretTags**
    - changes of response param
      - `+ sys_tags.value`
      - `- sys_tags.values`
  - **ListNotificationRecords**
    - changes of request param
      - `+ limit`
      - `+ marker`

### HuaweiCloud SDK DataArtsStudio

- _Features_
  - Support the API `UpdateFactoryJobName`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateVifPeer**
    - changes of response param
      - `+ vif_peer.receive_route_num`
  - **CreateVifPeer**
    - changes of response param
      - `+ vif_peer.receive_route_num`
  - **ShowVirtualInterface**
    - changes of response param
      - `+ virtual_interface.vif_peers.receive_route_num`
  - **UpdateVirtualInterface**
    - changes of response param
      - `+ virtual_interface.vif_peers.receive_route_num`
  - **ListVirtualInterfaces**
    - changes of response param
      - `+ virtual_interfaces.vif_peers.receive_route_num`
  - **CreateVirtualInterface**
    - changes of response param
      - `+ virtual_interface.vif_peers.receive_route_num`

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowSqlJobStatus**
    - changes of response param
      - `+ result_format`
      - `+ result_path`

### HuaweiCloud SDK DNS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreatePrivateZone**
    - changes of request param
      - `+ router.status`
  - **AssociateRouter**
    - changes of request param
      - `+ router.status`
  - **DisassociateRouter**
    - changes of request param
      - `+ router.status`
  - **ShowPrivateZone**
    - changes of response param
      - `+ routers.status`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the following APIs:
    - `ListFunctionTags`
    - `ListBridgeFunctions`
    - `ListBridgeVersions`
    - `UpdateFunctionCollectState`
    - `ListFunctionTemplate`
    - `ShowFunctionTemplate`
    - `ShowFuncReservedInstanceMetrics`
    - `ShowFunctionMetrics`
    - `EnableAsyncStatusLog`
    - `ShowProjectAsyncStatusLogInfo`
- _Bug Fix_
  - None
- _Change_
  - **ListFunctions**
    - changes of response param
      - `+ functions.resource_id`
  - **ShowFunctionConfig**
    - changes of response param
      - `+ func_id`
      - `+ resource_id`
  - **UpdateFunctionConfig**
    - changes of response param
      - `+ func_id`
      - `+ resource_id`
  - **ShowResInstanceInfo**
    - changes of response param
      - `+ resources.resource_detail.resource_id`

### HuaweiCloud SDK GaussDB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateGaussMySqlInstance**
    - changes of response param
      - `* instance.volume.size: string -> int32`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowRuleAction**
    - changes of response param
      - `+ channel_detail.dms_kafka_forwarding.security_protocol`
  - **UpdateRuleAction**
    - changes of request param
      - `+ channel_detail.dms_kafka_forwarding.security_protocol`
    - changes of response param
      - `+ channel_detail.dms_kafka_forwarding.security_protocol`
  - **CreateRuleAction**
    - changes of request param
      - `+ channel_detail.dms_kafka_forwarding.security_protocol`
    - changes of response param
      - `+ channel_detail.dms_kafka_forwarding.security_protocol`
  - **ListRuleActions**
    - changes of response param
      - `+ actions.channel_detail.dms_kafka_forwarding.security_protocol`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstanceConsumerGroups**
    - changes of response param
      - `* groups.createdAt: int32 -> int64`

### HuaweiCloud SDK LTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListTopnTrafficStatistics**
    - changes of response param
      - `+ results.cold_storage`

### HuaweiCloud SDK MRS

- _Features_
  - Support the API `AddComponent`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK OCR

- _Features_
  - Support the API `RecognizePeruIdCard`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the API `ShowRabbitMqProductCores`

### HuaweiCloud SDK RDS

- _Features_
  - Support the API `RevokePostgresqlDbPrivilege`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK ServiceStage

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ChangeInstance**
    - changes of request param
      - `+ configuration.env`
      - `+ configuration.storage`
      - `+ configuration.strategy`
      - `+ configuration.lifecycle`
      - `+ configuration.scheduler`
      - `+ configuration.probes`
      - `* configuration: map<string, object> -> object<InstanceConfiguration>`

# 3.1.63 2023-11-13

### HuaweiCloud SDK DCS

- _Features_
  - Support the interfaces `ShowNodesInformation`, `DeleteCenterTask`, `DeleteDiagnosisTask`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstanceTopics**
    - changes of request param
      - `+ offset`
      - `+ limit`

### HuaweiCloud SDK LTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **Createfavorite**
    - changes of request param
      - `+ is_global`
    - changes of response param
      - `+ is_global`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - Support the interfaces `ShowRabbitMqProductCores`, `ShowCesHierarchy`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RDS

- _Features_
  - Support the interfaces `ListPostgresqlListHistoryTables`, `ListHistoryDatabase`, `BatchRestorePostgreSqlTables`, `BatchRestoreDatabase`
- _Bug Fix_
  - None
- _Change_
  - Remove the interfaces `ListInstancesResourceMetrics`, `ListInstancesRecommendation`

# 3.1.62 2023-11-09

### HuaweiCloud SDK SecMaster

- _Features_
  - Support `SecMaster`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK ServiceStage

- _Features_
  - Support `ServiceStage`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK TICS

- _Features_
  - Support `TICS`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAddonInstance**
    - changes of response param
      - `+ status.status: enum value [unknown]`
  - **UpdateAddonInstance**
    - changes of response param
      - `+ status.status: enum value [unknown]`
  - **RollbackAddonInstance**
    - changes of response param
      - `+ status.status: enum value [unknown]`
  - **ShowCluster**
    - changes of response param
      - `+ spec.serviceNetwork`
  - **UpdateCluster**
    - changes of response param
      - `+ spec.serviceNetwork`
  - **DeleteCluster**
    - changes of response param
      - `+ spec.serviceNetwork`
  - **CreateAddonInstance**
    - changes of response param
      - `+ status.status: enum value [unknown]`
  - **ListAddonInstances**
    - changes of response param
      - `+ items.status.status: enum value [unknown]`
  - **CreateCluster**
    - changes of request param
      - `+ spec.serviceNetwork`
    - changes of response param
      - `+ spec.serviceNetwork`
  - **ListClusters**
    - changes of response param
      - `+ items.spec.serviceNetwork`
  - **ShowNode**
    - changes of response param
      - `- status.phase: enum value [Installed,ShutDown]`
  - **UpdateNode**
    - changes of response param
      - `- status.phase: enum value [Installed,ShutDown]`
  - **DeleteNode**
    - changes of response param
      - `- status.phase: enum value [Installed,ShutDown]`
  - **CreateNode**
    - changes of response param
      - `- status.phase: enum value [Installed,ShutDown]`
  - **ListNodes**
    - changes of response param
      - `- items.status.phase: enum value [Installed,ShutDown]`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the interface `CheckMigrationConnectivity`
  - **ListBackupRecords**
    - changes of response param
      - `+ backup_record_response.backup_format`
      - `+ backup_record_response.execution_at`

### HuaweiCloud SDK DLI

- _Features_
  - Support the interfaces `ListQueueProperty`, `UpdateQueueProperty`, `CreateQueueProperty`, `DeleteQueueProperty`
- _Bug Fix_
  - None
- _Change_
  - **ShowSqlJobStatus**
    - changes of response param
      - `+ user_conf`

### HuaweiCloud SDK GES

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListGraphs2**
    - changes of response param
      - `+ graphs.origin_graph_size_type_index`
      - `+ graphs.expand_time`
      - `+ graphs.resize_time`
      - `+ graphs.enable_multi_label`
  - **CreateGraph2**
    - changes of request param
      - `+ graph.enable_multi_label`
  - **ShowGraph2**
    - changes of response param
      - `+ graph.origin_graph_size_type_index`
      - `+ graph.expand_time`
      - `+ graph.resize_time`
      - `+ graph.enable_multi_label`

### HuaweiCloud SDK Kafka

- _Features_
  - Support the interfaces `ShowInstanceConfigs`, `ModifyInstanceConfigs`
- _Bug Fix_
  - None
- _Change_
  - **BatchRestartOrDeleteInstances**
    - changes of request param
      - `+ all_failure`
      - `- allFailure`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchRestartOrDeleteInstances**
    - changes of request param
      - `+ all_failure`
      - `- allFailure`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchDeleteInstances**
    - changes of request param
      - `+ all_failure`
      - `- allFailure`
  - **DeleteRocketMqMigrationTask**
    - changes of request param
      - `+ task_ids`
      - `- taskIds`

# 3.1.61 2023-11-02

### HuaweiCloud SDK APIG

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListApisV2**
    - changes of request param
      - `+ vpc_channel_name`

### HuaweiCloud SDK CSMS

- _Features_
  - Support the interface `RotateSecret`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DCS

- _Features_
  - Support the following interfaces：
    - `ShowConfigHistoryDetail`
    - `UpdateClientIpTransparentTransmission`
    - `UpdateInstanceConfig`
    - `ListInstanceOperations`
    - `ExportInstancesTask`
    - `ExportExcelJob`
    - `CreateResizeOrder`
    - `ShowExpireAutoScanConfig`
    - `UpdateExpireAutoScanConfig`
- _Bug Fix_
  - None
- _Change_
  - Remove the interfaces `ShowNodesInformation`, `ShowBackUpInfo`, `CreateOrUpdateBackUpInfo`, `CreateConnectivityTest`

### HuaweiCloud SDK DNS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowPrivateZone**
    - changes of response param
      - `+ enterprise_project_id`
      - `+ proxy_pattern`

### HuaweiCloud SDK DRS

- _Features_
  - Support the interfaces `CollectPositionAsync`, `ShowPositionResult`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DWS

- _Features_
  - Support the following interfaces：
    - `ExecuteClusterUpgradeAction`
    - `ListUpdatableVersion`
    - `ListUpdateRecord`
    - `CheckTableRestore`
    - `RestoreTable`
    - `ListSnapshotCrossRegion`
    - `ListSnapshotCrossRegionPolicy`
    - `AddSnapshotCrossRegionPolicy`
    - `DeleteSnapshotCrossRegionPolicy`
    - `StopWorkloadPlan`
    - `ShowWorkloadPlan`
    - `DeleteWorkloadPlan`
    - `StartWorkloadPlan`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListListeners**
    - changes of request param
      - `+ proxy_protocol_enable`
    - changes of response param
      - `+ listeners.proxy_protocol_enable`
      - `+ listeners.insert_headers.X-Forwarded-Proto`
      - `+ listeners.insert_headers.X-Real-IP`
      - `+ listeners.insert_headers.X-Forwarded-ELB-ID`
      - `+ listeners.insert_headers.X-Forwarded-TLS-Certificate-ID`
      - `+ listeners.insert_headers.X-Forwarded-TLS-Protocol`
      - `+ listeners.insert_headers.X-Forwarded-TLS-Cipher`
  - **CreateListener**
    - changes of request param
      - `+ listener.proxy_protocol_enable`
      - `+ listener.insert_headers.X-Forwarded-Proto`
      - `+ listener.insert_headers.X-Real-IP`
      - `+ listener.insert_headers.X-Forwarded-ELB-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Certificate-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Protocol`
      - `+ listener.insert_headers.X-Forwarded-TLS-Cipher`
    - changes of response param
      - `+ listener.proxy_protocol_enable`
      - `+ listener.insert_headers.X-Forwarded-Proto`
      - `+ listener.insert_headers.X-Real-IP`
      - `+ listener.insert_headers.X-Forwarded-ELB-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Certificate-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Protocol`
      - `+ listener.insert_headers.X-Forwarded-TLS-Cipher`
  - **ShowListener**
    - changes of response param
      - `+ listener.proxy_protocol_enable`
      - `+ listener.insert_headers.X-Forwarded-Proto`
      - `+ listener.insert_headers.X-Real-IP`
      - `+ listener.insert_headers.X-Forwarded-ELB-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Certificate-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Protocol`
      - `+ listener.insert_headers.X-Forwarded-TLS-Cipher`
  - **UpdateListener**
    - changes of request param
      - `+ listener.proxy_protocol_enable`
      - `+ listener.insert_headers.X-Forwarded-Proto`
      - `+ listener.insert_headers.X-Real-IP`
      - `+ listener.insert_headers.X-Forwarded-ELB-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Certificate-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Protocol`
      - `+ listener.insert_headers.X-Forwarded-TLS-Cipher`
    - changes of response param
      - `+ listener.proxy_protocol_enable`
      - `+ listener.insert_headers.X-Forwarded-Proto`
      - `+ listener.insert_headers.X-Real-IP`
      - `+ listener.insert_headers.X-Forwarded-ELB-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Certificate-ID`
      - `+ listener.insert_headers.X-Forwarded-TLS-Protocol`
      - `+ listener.insert_headers.X-Forwarded-TLS-Cipher`
  - **CreatePool**
    - changes of request param
      - `+ pool.ip_version`
  - **UpdatePool**
    - changes of request param
      - `+ pool.any_port_enable`

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the following interfaces：
    - `ShowIntelligentDiagnosisAbnormalCountOfInstances`
    - `ShowIntelligentDiagnosisInstanceInfosPerMetric`
    - `ShrinkGaussMySqlProxy`
    - `ShowInstanceDatabaseVersion`
    - `CopyInstanceConfigurations`
    - `ShowAutoScalingPolicy`
    - `UpdateAutoScalingPolicy`
    - `CheckResource`
    - `UpdateInstanceConfigurations`
- _Bug Fix_
  - None
- _Change_
  - **DeleteGaussMySqlBackup**
    - changes of response param
      - `+ backup_id`
      - `+ backup_name`
      - `- job_id`
  - **CreateGaussMySqlProxy**
    - changes of request param
      - `+ subnet_id`
  - **ShowGaussMySqlBackupList**
    - changes of request param
      - `+ name`
      - `+ instance_name`
    - changes of response param
      - `+ backups.instance_name`
      - `- backups.status: enum value [BUILDING,COMPLETED,FAILED,AVAILABLE]`
      - `- backups.type: enum value [auto,manual]`
  - **ShowGaussMySqlProxyList**
    - changes of response param
      - `+ proxy_list.proxy.subnet_id`

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - Support the interface `DeleteDatabase`
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of request param
      - `+ charge_mode`
  - **ListInstancesDetails**
    - changes of request param
      - `+ charge_mode`

### HuaweiCloud SDK HSS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSwrImageRepository**
    - changes of response param
      - `+ data_list.scannable`
      - `- data_list.scanable`

### HuaweiCloud SDK KPS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ImportPrivateKey**
    - changes of response param
      - `+ keypair.user_id`
      - `+ keypair.key_protection`
      - `* keypair: object<KeypairBean> -> object<ImportPrivateKeyAction>`

### HuaweiCloud SDK NAT

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListNatGatewayDnatRules**
    - changes of response param
      - `+ dnat_rules.global_eip_id`
      - `+ dnat_rules.global_eip_address`
  - **CreateNatGatewayDnatRule**
    - changes of request param
      - `+ dnat_rule.global_eip_id`
    - changes of response param
      - `+ dnat_rule.global_eip_id`
      - `+ dnat_rule.global_eip_address`
  - **ShowNatGatewayDnatRule**
    - changes of response param
      - `+ dnat_rule.global_eip_id`
      - `+ dnat_rule.global_eip_address`
  - **UpdateNatGatewayDnatRule**
    - changes of request param
      - `+ dnat_rule.global_eip_id`
    - changes of response param
      - `+ dnat_rule.global_eip_id`
      - `+ dnat_rule.global_eip_address`
  - **BatchCreateNatGatewayDnatRules**
    - changes of request param
      - `+ dnat_rules.global_eip_id`
    - changes of response param
      - `+ dnat_rules.global_eip_id`
      - `+ dnat_rules.global_eip_address`
  - **ListNatGatewaySnatRules**
    - changes of response param
      - `+ snat_rules.global_eip_id`
      - `+ snat_rules.global_eip_address`
  - **CreateNatGatewaySnatRule**
    - changes of request param
      - `+ snat_rule.global_eip_id`
    - changes of response param
      - `+ snat_rule.global_eip_id`
      - `+ snat_rule.global_eip_address`
  - **ShowNatGatewaySnatRule**
    - changes of response param
      - `+ snat_rule.global_eip_id`
      - `+ snat_rule.global_eip_address`
  - **UpdateNatGatewaySnatRule**
    - changes of request param
      - `+ snat_rule.global_eip_id`
    - changes of response param
      - `+ snat_rule.global_eip_address`
      - `+ snat_rule.global_eip_id`
  - **ListNatGateways**
    - changes of response param
      - `+ nat_gateways.ngport_ip_address`
      - `+ nat_gateways.billing_info`
      - `+ nat_gateways.dnat_rules_limit`
      - `+ nat_gateways.snat_rule_public_ip_limit`
  - **CreateNatGateway**
    - changes of request param
      - `+ nat_gateway.ngport_ip_address`
    - changes of response param
      - `+ nat_gateway.ngport_ip_address`
      - `+ nat_gateway.billing_info`
      - `+ nat_gateway.dnat_rules_limit`
      - `+ nat_gateway.snat_rule_public_ip_limit`
  - **ShowNatGateway**
    - changes of response param
      - `+ nat_gateway.ngport_ip_address`
      - `+ nat_gateway.billing_info`
      - `+ nat_gateway.dnat_rules_limit`
      - `+ nat_gateway.snat_rule_public_ip_limit`
  - **UpdateNatGateway**
    - changes of response param
      - `+ nat_gateway.ngport_ip_address`
      - `+ nat_gateway.billing_info`
      - `+ nat_gateway.dnat_rules_limit`
      - `+ nat_gateway.snat_rule_public_ip_limit`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateRocketMqMigrationTask**
    - changes of request param
      - `* body: string -> map<string, object>`

# 3.1.60 2023-10-26

### HuaweiCloud SDK AOS

- _Features_
  - Support the interfaces `ShowStackInstance`, `UpdateStackInstances`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK APIG

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDetailsOfApiV2**
    - changes of response param
      - `+ policy_functions.conditions.sys_param_name`
      - `+ policy_functions.conditions.cookie_param_name`
      - `+ policy_functions.conditions.frontend_authorizer_param_name`
      - `+ policy_functions.conditions.condition_origin: enum value [system,cookie,frontend_authorizer]`
  - **UpdateApiV2**
    - changes of request param
      - `+ policy_mocks.conditions.sys_param_name`
      - `+ policy_mocks.conditions.cookie_param_name`
      - `+ policy_mocks.conditions.frontend_authorizer_param_name`
      - `+ policy_mocks.conditions.condition_origin: enum value [system,cookie,frontend_authorizer]`
    - changes of response param
      - `+ policy_functions.conditions.sys_param_name`
      - `+ policy_functions.conditions.cookie_param_name`
      - `+ policy_functions.conditions.frontend_authorizer_param_name`
      - `+ policy_functions.conditions.condition_origin: enum value [system,cookie,frontend_authorizer]`
  - **ListApiVersionDetailV2**
    - changes of response param
      - `+ policy_functions.conditions.sys_param_name`
      - `+ policy_functions.conditions.cookie_param_name`
      - `+ policy_functions.conditions.frontend_authorizer_param_name`
      - `+ policy_functions.conditions.condition_origin: enum value [system,cookie,frontend_authorizer]`
  - **CreateApiV2**
    - changes of request param
      - `+ policy_mocks.conditions.sys_param_name`
      - `+ policy_mocks.conditions.cookie_param_name`
      - `+ policy_mocks.conditions.frontend_authorizer_param_name`
      - `+ policy_mocks.conditions.condition_origin: enum value [system,cookie,frontend_authorizer]`
    - changes of response param
      - `+ policy_functions.conditions.sys_param_name`
      - `+ policy_functions.conditions.cookie_param_name`
      - `+ policy_functions.conditions.frontend_authorizer_param_name`
      - `+ policy_functions.conditions.condition_origin: enum value [system,cookie,frontend_authorizer]`

### HuaweiCloud SDK BMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateBareMetalServers**
    - changes of request param
      - `+ server.extendparam.chargingMode: enum value [postPaid]`

### HuaweiCloud SDK CC

- _Features_
  - Support the interface `ListCentralNetworkCapabilities`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CDN

- _Features_
  - Support the following interfaces：
    - `CreateRefreshTasks`
    - `CreatePreheatingTasks`
    - `ShowHistoryTasks`
    - `ShowHistoryTaskDetails`
    - `ShowUrlTaskInfo`
- _Bug Fix_
  - None
- _Change_
  - **CreateRefreshTasks**
    - changes of request param
      - `+ refresh_task.zh_url_encode`
  - **CreatePreheatingTasks**
    - changes of request param
      - `+ preheating_task.zh_url_encode`

### HuaweiCloud SDK CodeArtsPipeline

- _Features_
  - Support the interfaces `CreatePipelineNew`, `RetryPipelineRun`, `AcceptManualReview`, `RejectManualReview`
- _Bug Fix_
  - None
- _Change_
  - **ListPipelines**
    - changes of response param
      - `+ pipelines.latest_run.stage_status_list.id`
  - **CreatePipelineByTemplateId**
    - changes of request param
      - `+ variables`

### HuaweiCloud SDK DCS

- _Features_
  - Support the following interfaces：
    - `ShowBackgroundTaskProgress`
    - `ListCenterTask`
    - `StartInstanceResizeCheckJob`
    - `ShowBackUpInfo`
    - `CreateOrUpdateBackUpInfo`
    - `ShowExpireKeyScanInfo`
    - `ScanExpireKey`
    - `ListMigrationTaskLogs`
    - `CheckMigrationConnectivity`
    - `ExchangeInstanceIp`
    - `ExecuteCommandMobilization`
    - `LoginWebCli`
    - `UpdateMigrationTask`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListBatches**
    - changes of request param
      - `+ job-name`
  - **CreateBatchJob**
    - changes of response param
      - `- req_body`

### HuaweiCloud SDK HSS

- _Features_
  - Support the following interfaces：
    - `ListContainerNodes`
    - `ListBlockedIp`
    - `ChangeBlockedIp`
    - `ListIsolatedFile`
    - `ChangeIsolatedFile`
    - `ListSwrImageRepository`
    - `BatchScanSwrImage`
    - `ListImageVulnerabilities`
    - `ListVulnerabilityCve`
    - `RunImageSynchronize`
    - `ListImageRiskConfigs`
    - `ListImageRiskConfigRules`
    - `ShowImageCheckRuleDetail`
    - `ShowVulScanPolicy`
    - `ChangeVulScanPolicy`
    - `ShowVulStatics`
- _Bug Fix_
  - None
- _Change_
  - **ListPortStatistics**
    - changes of request param
      - `+ port_string`
      - `+ sort_key`
      - `+ sort_dir`
    - changes of response param
      - `+ data_list.status`
  - **ListProtectionServer**
    - changes of response param
      - `+ data_list.host_source`
  - **ListHostStatus**
    - changes of request param
      - `+ has_intrusion`
      - `+ agent_upgradable`
  - **ListVulHosts**
    - changes of response param
      - `+ data_list.support_restore`
  - **ChangeVulStatus**
    - changes of request param
      - `+ backup_info_id`
      - `+ custom_backup_hosts`
  - **ListHostVuls**
    - changes of response param
      - `+ data_list.app_name`
      - `+ data_list.app_version`
      - `+ data_list.app_path`
      - `+ data_list.version`
      - `+ data_list.support_restore`
  - **ListHostProtectHistoryInfo**
    - changes of request param
      - `+ host_name`
      - `+ host_ip`
      - `+ file_path`
      - `+ file_operation`
  - **ListProtectionPolicy**
    - changes of response param
      - `+ data_list.deploy_mode`
      - `+ data_list.default_policy`
  - **ListSecurityEvents**
    - changes of request param
      - `+ severity_list`
      - `+ attack_tag`
      - `+ asset_value`
      - `+ tag_list`
      - `+ att_ck`
    - changes of response param
      - `+ data_list.description`
      - `+ data_list.event_abstract`
      - `+ data_list.tag_list`
      - `+ data_list.resource_info.container_status`
      - `+ data_list.resource_info.pod_uid`
      - `+ data_list.resource_info.pod_name`
      - `+ data_list.resource_info.namespace`
      - `+ data_list.resource_info.cluster_id`
      - `+ data_list.resource_info.cluster_name`
  - **ChangeEvent**
    - changes of request param
      - `+ operate_event_list.operate_detail_list.container_id`
      - `+ operate_event_list.operate_detail_list.container_name`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListProducts**
    - changes of request param
      - `+ product_name`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ResizeInstance**
    - changes of request param
      - `+ tenant_ips`
      - `+ second_tenant_subnet_id`
  - **ResizeEngineInstance**
    - changes of request param
      - `+ tenant_ips`
      - `+ second_tenant_subnet_id`

### HuaweiCloud SDK Moderation

- _Features_
  - Support the interfaces `RunCreateAudioStreamModerationJob`, `RunCloseAudioStreamModerationJob`, `RunCreateVideoStreamModerationJob`, `RunCloseVideoStreamModerationJob`
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
  - **RecognizeGeneralTable**
    - changes of request param
      - `+ with_borders`

### HuaweiCloud SDK RDS

- _Features_
  - Support the interfaces `ListInstanceDiagnosis`, `ListInstancesInfoDiagnosis`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowGroup**
    - changes of response param
      - `+ group_desc`
  - **CreateConsumerGroupOrBatchDeleteConsumerGroup**
    - changes of request param
      - `+ group_desc`
  - **ListInstanceConsumerGroups**
    - changes of response param
      - `+ groups.group_desc`
  - **BatchUpdateConsumerGroup**
    - changes of request param
      - `+ groups.group_desc`

### HuaweiCloud SDK SFSTurbo

- _Features_
  - Support the following interfaces：
    - `SetHpcCacheBackend`
    - `CreateHpcCacheTask`
    - `ShowHpcCacheTask`
    - `ListHpcCacheTasks`
    - `ListFsTasks`
    - `CreateFsTask`
    - `ShowFsTask`
    - `DeleteFsTask`
    - `ListBackendTargets`
    - `CreateBackendTarget`
    - `ShowBackendTargetInfo`
    - `DeleteBackendTarget`
    - `ShowFsDirUsage`
    - `ListPermRules`
    - `CreatePermRule`
    - `ShowPermRule`
    - `UpdatePermRule`
    - `DeletePermRule`
    - `UpdateHpcShare`
- _Bug Fix_
  - None
- _Change_
  - **ListShares**
    - changes of response param
      - `* shares: list<Shares> -> list<ShareInfo>`

# 3.1.59 2023-10-19

### HuaweiCloud SDK APIG

- _Features_
  - Support the following interfaces：
    - `CheckApisV2`
    - `ShowAppBoundAppQuota`
    - `CreateOrder`
    - `CreatePrepayResize`
    - `CreatePostPayResizeOrder`
    - `ShowRestrictionOfInstanceV2`
    - `ShowDetailsOfAppAcl`
    - `UpdateAppAcl`
    - `DeleteAppAcl`
    - `ListAppQuotas`
    - `CreateAppQuota`
    - `ShowAppQuota`
    - `UpdateAppQuota`
    - `DeleteAppQuota`
    - `ListAppQuotaBoundApps`
    - `AssociateAppsForAppQuota`
    - `DisassociateAppQuotaWithApp`
    - `ListAppQuotaBindableApps`
    - `UpdateEnvironmentVariableV2`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CBR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListAgent**
    - changes of request param
      - `* agent_id: string -> list<string>`
  - **ListVault**
    - changes of request param
      - `* id: string -> list<string>`

### HuaweiCloud SDK CC

- _Features_
  - Support the following interfaces：
    - `TagCloudConnection`
    - `UntagCloudConnection`
    - `ListCloudConnectionTags`
    - `ListCloudConnectionsByTags`
    - `TagBandwidthPackage`
    - `UntagBandwidthPackage`
    - `ListBandwidthPackageTags`
    - `ListBandwidthPackagesByTags`
    - `ListCentralNetworks`
    - `CreateCentralNetwork`
    - `ShowCentralNetwork`
    - `UpdateCentralNetwork`
    - `DeleteCentralNetwork`
    - `TagCentralNetwork`
    - `UntagCentralNetwork`
    - `ListCentralNetworkTags`
    - `ListCentralNetworkPolicies`
    - `CreateCentralNetworkPolicy`
    - `ApplyCentralNetworkPolicy`
    - `DeleteCentralNetworkPolicy`
    - `ListCentralNetworkPolicyChangeSet`
    - `ListCentralNetworkConnections`
    - `UpdateCentralNetworkConnection`
    - `ListCentralNetworkGdgwAttachments`
    - `CreateCentralNetworkGdgwAttachment`
    - `ShowCentralNetworkGdgwAttachment`
    - `UpdateCentralNetworkGdgwAttachment`
    - `ListCentralNetworkAttachments`
    - `DeleteCentralNetworkAttachment`
    - `ListCentralNetworkQuotas`
- _Bug Fix_
  - None
- _Change_
  - Remove the following interfaces：
    - `ListDomainTags`
    - `DeleteTag`
    - `BatchCreateDeleteTags`
    - `ListResourceByFilterTag`
    - `ListTags`
    - `CreateTag`
  - **ListCloudConnections**
    - changes of request param
      - `* id: list<string> -> list<UUIDDef>`
  - **ListCloudConnectionRoutes**
    - changes of request param
      - `* cloud_connection_id: list<string> -> list<UUIDDef>`
  - **ListAuthorisations**
    - changes of request param
      - `* id: list<string> -> list<UUIDDef>`
      - `* cloud_connection_id: list<string> -> list<UUIDDef>`
  - **ListPermissions**
    - changes of request param
      - `* id: list<string> -> list<UUIDDef>`
      - `* cloud_connection_id: list<string> -> list<UUIDDef>`
  - **ListCloudConnectionQuotas**
    - changes of request param
      - `+ cloud_connection_id`
      - `+ region_id`
  - **ListNetworkInstances**
    - changes of request param
      - `* id: list<string> -> list<UUIDDef>`
      - `* cloud_connection_id: list<string> -> list<UUIDDef>`
  - **ListBandwidthPackages**
    - changes of request param
      - `+ cloud_connection_id`
      - `* id: list<string> -> list<UUIDDef>`
  - **ListInterRegionBandwidths**
    - changes of request param
      - `* id: list<string> -> list<UUIDDef>`
      - `* cloud_connection_id: list<string> -> list<UUIDDef>`

### HuaweiCloud SDK CFW

- _Features_
  - Support the following interfaces：
    - `ListDomainSets`
    - `AddDomainSet`
    - `UpdateDomainSet`
    - `DeleteDomainSet`
    - `ListFirewallList`
    - `BatchUpdateAclRuleActions`
    - `ListRuleAclTags`
    - `AddDomains`
    - `DeleteDomains`
    - `ListDomains`
    - `BatchDeleteAclRules`
    - `BatchDeleteServiceItems`
    - `BatchDeleteAddressItems`
- _Bug Fix_
  - None
- _Change_
  - **ListFlowLogs**
    - changes of request param
      - `+ dst_host`
    - changes of response param
      - `+ data.records.dst_host`
  - **ListAccessControlLogs**
    - changes of request param
      - `+ dst_host`
      - `+ rule_name`
      - `+ action`
    - changes of response param
      - `+ data.records.src_region_id`
      - `+ data.records.src_region_name`
      - `+ data.records.dst_region_id`
      - `+ data.records.dst_region_name`
      - `+ data.records.dst_host`
  - **ListBlackWhiteLists**
    - changes of response param
      - `+ data.records.description`
  - **ListDomainParseDetail**
    - changes of request param
      - `+ address_type`
  - **UpdateDnsServers**
    - changes of request param
      - `+ health_check_domain_name`
  - **ListDnsServers**
    - changes of response param
      - `+ data.health_check_domain_name`
  - **ListAttackLogs**
    - changes of request param
      - `+ dst_host`
      - `+ log_type`
    - changes of response param
      - `+ data.records.dst_host`
      - `+ data.records.src_region_id`
      - `+ data.records.src_region_name`
      - `+ data.records.dst_region_id`
      - `+ data.records.dst_region_name`
  - **UpdateAclRule**
    - changes of request param
      - `+ tag`
      - `+ source.region_list_json`
      - `+ source.region_list`
      - `+ source.domain_set_id`
      - `+ source.domain_set_name`
      - `+ source.ip_address`
      - `+ source.address_group`
      - `+ source.address_group_names`
      - `+ service.custom_service`
      - `+ service.service_group`
      - `+ service.service_group_names`
  - **ListAclRules**
    - changes of request param
      - `+ tags_id`
      - `+ source`
      - `+ destination`
      - `+ service`
    - changes of response param
      - `+ data.records.tag`
      - `+ data.records.source.region_list_json`
      - `+ data.records.source.region_list`
      - `+ data.records.source.domain_set_id`
      - `+ data.records.source.domain_set_name`
      - `+ data.records.source.ip_address`
      - `+ data.records.source.address_group`
      - `+ data.records.source.address_group_names`
      - `+ data.records.service.custom_service`
      - `+ data.records.service.service_group`
      - `+ data.records.service.service_group_names`
  - **AddBlackWhiteList**
    - changes of request param
      - `+ description`
  - **UpdateBlackWhiteList**
    - changes of request param
      - `+ description`
  - **ListEipCount**
    - changes of response param
      - `+ data.eip_protected_self`
  - **ChangeEipStatus**
    - changes of response param
      - `+ data.object_id`
      - `+ data.fail_eip_id_list`
      - `- data.id`
      - `* data: object<IdObject> -> object<EIPSwitchStatusVO>`
  - **ListEastWestFirewall**
    - changes of response param
      - `+ data.mode`
      - `+ data.ew_vpc_route_limit`
      - `+ data.er_associated_subnet.ipv6_enable`
      - `+ data.protect_infos.protected_resource_mode`
  - **AddAclRule**
    - changes of request param
      - `+ rules.tag`
      - `+ rules.source.region_list_json`
      - `+ rules.source.region_list`
      - `+ rules.source.domain_set_id`
      - `+ rules.source.domain_set_name`
      - `+ rules.source.ip_address`
      - `+ rules.source.address_group`
      - `+ rules.source.address_group_names`
      - `+ rules.service.custom_service`
      - `+ rules.service.service_group`
      - `+ rules.service.service_group_names`
  - **ListEips**
    - changes of request param
      - `+ tags`
    - changes of response param
      - `+ data.records.object_id`
      - `+ data.records.tags`
      - `+ data.records.domain_id`
      - `+ data.records.owner`
      - `+ data.records.fw_domain_id`
  - **AddAddressItem**
    - changes of response param
      - `+ data.covered_ip`
  - **ListFirewallDetail**
    - changes of response param
      - `+ data.records.resource_id`
      - `+ data.records.support_url_filtering`
      - `+ data.records.flavor.session_concurrent`
      - `+ data.records.flavor.session_create`
      - `+ data.records.flavor.total_rule_count`
      - `+ data.records.flavor.used_rule_count`
      - `+ data.records.flavor.vpc_bandwith`

### HuaweiCloud SDK CodeArtsBuild

- _Features_
  - Support the following interfaces：
    - `DownloadLogByRecordId`
    - `ShowRecordInfo`
    - `StopBuildJob`
    - `DeleteBuildJob`
    - `DisableBuildJob`
    - `ResumeBuildJob`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DCS

- _Features_
  - Support the following interfaces：
    - `CreateConnectivityTest`
    - `ShowReplicationStates`
    - `ListAclAccounts`
    - `CreateAclAccount`
    - `UpdateAclAccountPassWord`
    - `ResetAclAccountPassWord`
    - `UpdateAclAccountRole`
    - `UpdateAclAccountRemark`
    - `DeleteAclAccount`
    - `ShowConfigTemplate`
    - `UpdateConfigTemplate`
    - `DeleteConfigTemplate`
- _Bug Fix_
  - None
- _Change_
  - **ListConfigTemplates**
    - changes of response param
      - `+ templates`
      - `- config_templates`
  - **CreateRedislog**
    - changes of request param
      - `+ query_time: enum value [0,1,3,7]`
  - **ListInstances**
    - changes of response param
      - `+ instances.features.support_audit_log`
  - **ShowInstance**
    - changes of response param
      - `+ features.support_audit_log`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ReinstallServerWithCloudInit**
    - changes of request param
      - `+ os-reinstall.metadata.BYOL`
  - **ChangeServerOsWithCloudInit**
    - changes of request param
      - `+ os-change.metadata.BYOL`
  - **ChangeServerOsWithoutCloudInit**
    - changes of request param
      - `+ os-change.metadata.BYOL`

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the following interfaces：
    - `UpdateProxyNewConfigurations`
    - `CopyConfigurations`
    - `ListConfigurationsDifferences`
    - `ListConfigurationsInstances`
    - `ListModifyHistory`
    - `ListEnterpriseProjects`
    - `SwitchAccessControl`
    - `CreateAccessControl`
    - `DeleteScheduleTasK`
    - `ListInstanceConfigurations`
    - `ShowGaussMySqlIncrementalBackupList`
    - `UpdateBackupOffsitePolicy`
    - `CreateRestoreTables`
- _Bug Fix_
  - None
- _Change_
  - **ListGaussMySqlDatabase**
    - changes of request param
      - `+ name`
      - `+ charset`

### HuaweiCloud SDK LTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListStructuredLogsWithTimeRange**
    - changes of response param
      - `+ result`
      - `- context`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListEngineProducts**
    - changes of response param
      - `+ products.properties.product_alias`

### HuaweiCloud SDK SIS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the interfaces `RunAudioAssessment`, `RunMultiModalAssessment`

### HuaweiCloud SDK VPC

- _Features_
  - Support the interface `BatchCreateSecurityGroupRules`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.58 2023-10-12

### HuaweiCloud SDK AOS

- _Features_
  - Support the following interfaces：
    - `ListStackSets`
    - `CreateStackSet`
    - `ShowStackSetTemplate`
    - `ListStackSetOperations`
    - `ShowStackSetMetadata`
    - `ListStackInstances`
    - `CreateStackInstance`
    - `DeleteStackInstance`
    - `DeployStackSet`
    - `DeleteStackSet`
    - `UpdateStackSet`
    - `ShowStackSetOperationMetadata`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK AS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateScalingConfig**
    - changes of request param
      - `+ source_scaling_configuration_id`

### HuaweiCloud SDK BMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateBareMetalServers**
    - changes of request param
      - `* server.server_tags: map<string, list<SystemTags>> -> list<SystemTags>`

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowHistoryTasks**
    - changes of request param
      - `+ task_type`
  - **ShowUrlTaskInfo**
    - changes of response param
      - `+ result.mode`

### HuaweiCloud SDK CES

- _Features_
  - Support the following interfaces：
    - `BatchUpdateNotificationMasks`
    - `BatchUpdateNotificationMaskTime`
    - `UpdateNotificationMasks`
    - `BatchDeleteNotificationMasks`
    - `ListNotificationMasks`
    - `ListNotificationMaskResources`
    - `ListOneClickAlarms`
    - `CreateOneClickAlarm`
    - `ListOneClickAlarmRules`
    - `BatchUpdateOneClickAlarmsEnabledState`
    - `BatchDeleteOneClickAlarms`
    - `UpdateOneClickAlarmNotifications`
    - `BatchUpdateOneClickAlarmPoliciesEnabledState`
    - `UpdateAlarmNotifications`
    - `ListCesTargetProjectTags`
- _Bug Fix_
  - None
- _Change_
  - **ListAlarmHistories**
    - changes of response param
      - `+ alarm_histories.condition.suppress_duration: enum value [86400]`
  - **ListAgentInvocations**
    - changes of request param
      - `- instance_name`
      - `+ invocation_type: enum value [RETRY]`
    - changes of response param
      - `+ invocations.invocation_type: enum value [RETRY]`
  - **ListAgentStatus**
    - changes of response param
      - `+ agent_status.extensions.version`

### HuaweiCloud SDK CodeArtsDeploy

- _Features_
  - Support the interface `ShowExecutionParams`
- _Bug Fix_
  - None
- _Change_
  - **ListAllApp**
    - changes of request param
      - `+ states`
      - `+ group_id`

### HuaweiCloud SDK Config

- _Features_
  - Support the following interfaces：
    - `ListOrganizationConformancePacks`
    - `CreateOrganizationConformancePack`
    - `ShowOrganizationConformancePack`
    - `DeleteOrganizationConformancePack`
    - `ListOrganizationConformancePackStatuses`
    - `ShowOrganizationConformancePackDetailedStatuses`
- _Bug Fix_
  - None
- _Change_
  - **ShowConfigurationAggregatorSourcesStatus**
    - changes of response param
      - `+ aggregated_source_statuses.source_name`
  - **ShowConformancePack**
    - changes of response param
      - `+ created_by`
  - **CreateConformancePack**
    - changes of response param
      - `+ created_by`
  - **ListConformancePacks**
    - changes of response param
      - `+ created_by`
      - `+ value.created_by`
  - **ShowAggregatePolicyStateComplianceSummary**
    - changes of response param
      - `+ results.group_account_name`
  - **ListAggregateComplianceByPolicyAssignment**
    - changes of response param
      - `+ aggregate_policy_assignments.account_name`

### HuaweiCloud SDK CSS

- _Features_
  - Support the following interfaces：
    - `DeleteConfig`
    - `StopHotPipeline`
    - `ListCerts`
    - `ListElbs`
    - `EnableOrDisableElb`
    - `ShowElbDetail`
    - `CreateElbListener`
    - `UpdateEsListener`
    - `ListElbCerts`
    - `ListAiOps`
    - `CreateAiOps`
    - `DeleteAiOps`
    - `ListSmnTopics`
    - `UpgradeCore`
    - `ListImages`
    - `UpgradeDetail`
    - `RetryUpgradeTask`
    - `UpdateAzByInstanceType`
- _Bug Fix_
  - None
- _Change_
  - **UpdateShrinkNodes**
    - changes of request param
      - `+ migrate_data`
  - **CreateCnf**
    - changes of request param
      - `+ sensitive_words`
  - **UpdateCnf**
    - changes of request param
      - `+ sensitive_words`
  - **ShowClusterDetail**
    - changes of response param
      - `+ bandwidthResourceId`
      - `+ instances.resourceId`
      - `+ instances.volume.resourceIds`
      - `+ publicKibanaResp.bandwidthResourceId`
  - **ListClustersDetails**
    - changes of response param
      - `+ clusters.bandwidthResourceId`
      - `+ clusters.instances.resourceId`
      - `+ clusters.instances.volume.resourceIds`
      - `+ clusters.publicKibanaResp.bandwidthResourceId`

### HuaweiCloud SDK CTS

- _Features_
  - Support the following interfaces：
    - `ListOperations`
    - `BatchCreateResourceTags`
    - `BatchDeleteResourceTags`
    - `ListUserResources`
    - `CheckObsBuckets`
    - `ListTraceResources`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DC

- _Features_
  - Support the following interfaces：
    - `UpdateVifPeer`
    - `DeleteVifPeer`
    - `CreateVifPeer`
    - `ShowQuotas`
    - `ListSwitchoverTestRecords`
    - `SwitchoverTest`
- _Bug Fix_
  - None
- _Change_
  - **DeleteResourceTag**
    - changes of request param
      - `+ resource_type: enum value [dc-lag]`
  - **ListProjectTags**
    - changes of request param
      - `+ resource_type: enum value [dc-lag]`
  - **ShowResourceTag**
    - changes of request param
      - `+ resource_type: enum value [dc-lag]`
  - **CreateResourceTag**
    - changes of request param
      - `+ resource_type: enum value [dc-lag]`
  - **BatchCreateResourceTags**
    - changes of request param
      - `+ resource_type: enum value [dc-lag]`
  - **ShowDirectConnect**
    - changes of request param
      - `- limit`
      - `- marker`
    - changes of response param
      - `- direct_connect.type: enum value [onestop_standard,onestop_hosted]`
      - `- direct_connect.charge_mode: enum value [port]`
  - **UpdateDirectConnect**
    - changes of response param
      - `- direct_connect.type: enum value [onestop_standard,onestop_hosted]`
      - `- direct_connect.charge_mode: enum value [port]`
  - **ListDirectConnects**
    - changes of response param
      - `- direct_connects.type: enum value [onestop_standard,onestop_hosted]`
      - `- direct_connects.charge_mode: enum value [port]`
  - **ShowVirtualGateway**
    - changes of response param
      - `- virtual_gateway.type: enum value [default]`
  - **UpdateVirtualGateway**
    - changes of response param
      - `- virtual_gateway.type: enum value [default]`
  - **ListVirtualGateways**
    - changes of request param
      - `+ enterprise_project_id`
    - changes of response param
      - `- virtual_gateways.type: enum value [default]`
  - **CreateVirtualGateway**
    - changes of response param
      - `- virtual_gateway.type: enum value [default]`
  - **ShowVirtualInterface**
    - changes of response param
      - `+ virtual_interface.service_type: enum value [GDGW]`
      - `- virtual_interface.service_type: enum value [vpc,GDWW]`
  - **UpdateVirtualInterface**
    - changes of response param
      - `+ virtual_interface.service_type: enum value [GDGW]`
      - `- virtual_interface.service_type: enum value [vpc,GDWW]`
  - **ListVirtualInterfaces**
    - changes of response param
      - `+ virtual_interfaces.service_type: enum value [GDGW]`
      - `- virtual_interfaces.service_type: enum value [vpc,GDWW]`
  - **CreateVirtualInterface**
    - changes of request param
      - `+ virtual_interface.service_type: enum value [GDGW]`
      - `- virtual_interface.service_type: enum value [GDWW]`
    - changes of response param
      - `+ virtual_interface.service_type: enum value [GDGW]`
      - `- virtual_interface.service_type: enum value [vpc,GDWW]`
  - **ListTagResourceInstances**
    - changes of request param
      - `+ resource_type: enum value [dc-lag]`

### HuaweiCloud SDK DWS

- _Features_
  - Support the following interfaces：
    - `SaveClusterDescriptionInfo`
    - `ExecuteDatabaseOmUserAction`
    - `ShowInstance`
    - `ShowDatabaseOmUserStatus`
    - `ListConfigurationsAuditRecords`
    - `ShowClusterRedistribution`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ReinstallServerWithoutCloudInit**
    - changes of request param
      - `+ os-reinstall.metadata.BYOL`
  - **ListFlavors**
    - changes of response param
      - `+ flavors.os_extra_specs.quota:vif_max_num`
      - `+ flavors.os_extra_specs.quota:sub_network_interface_max_num`
  - **ListResizeFlavors**
    - changes of response param
      - `+ flavors.extra_specs.quota:vif_max_num`
      - `+ flavors.extra_specs.quota:sub_network_interface_max_num`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the interfaces `ShowFunctionUrl`, `UpdateFunctionUrl`, `CreateFunctionUrl`, `DeleteFunctionUrl`
  - **ListAsyncInvocations**
    - changes of response param
      - `+ next_marker`
      - `+ count`
  - **ListActiveAsyncInvocations**
    - changes of response param
      - `+ next_marker`
      - `+ count`

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of response param
      - `+ instances.datastore.complete_version`
      - `+ instances.datastore.hotfix_versions`
  - **ListInstancesDetails**
    - changes of response param
      - `+ instances.datastore.complete_version`
      - `+ instances.datastore.hotfix_versions`

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowJob**
    - changes of response param
      - `+ entities.addition_error_code`
      - `+ entities.addition_error_msg`
      - `+ entities.error_code`
      - `+ entities.error`
      - `+ entities.alarm_code`

### HuaweiCloud SDK MetaStudio

- _Features_
  - Support the interfaces `CreatePhotoDetection`, `ShowPhotoDetection`
- _Bug Fix_
  - None
- _Change_
  - **CreateSmartLiveRoom**
    - changes of request param
      - `- video_config.codec: enum value [VP9]`
  - **ShowSmartLiveRoom**
    - changes of response param
      - `- video_config.codec: enum value [VP9]`
  - **UpdateSmartLiveRoom**
    - changes of request param
      - `- video_config.codec: enum value [VP9]`
    - changes of response param
      - `- video_config.codec: enum value [VP9]`
  - **StartSmartLive**
    - changes of request param
      - `- video_config.codec: enum value [VP9]`
  - **Create2DDigitalHumanVideo**
    - changes of request param
      - `- video_config.codec: enum value [VP9]`
  - **Show2DDigitalHumanVideo**
    - changes of response param
      - `- video_config.codec: enum value [VP9]`
  - **CreateVideoScripts**
    - changes of request param
      - `- video_config.codec: enum value [VP9]`
  - **ShowVideoScript**
    - changes of response param
      - `- video_config.codec: enum value [VP9]`
  - **UpdateVideoScript**
    - changes of request param
      - `- video_config.codec: enum value [VP9]`

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `RecognizeColombiaIdCard`
- _Bug Fix_
  - None
- _Change_
  - **RecognizeVehicleLicense**
    - changes of response param
      - `+ result.energy_type`
      - `+ result.front`
      - `+ result.back`
  - **RecognizeWebImage**
    - changes of request param
      - `+ detect_text_direction`

### HuaweiCloud SDK RDS

- _Features_
  - Support the following interfaces：
    - `ListPostgresqlHbaInfo`
    - `ModifyPostgresqlHbaConf`
    - `AddPostgresqlHbaConf`
    - `DeletePostgresqlHbaConf`
    - `ListPostgresqlHbaInfoHistory`
- _Bug Fix_
  - None
- _Change_
  - **UpgradeDbVersionNew**
    - changes of request param
      - `+ is_delayed`
      - `- delay`

### HuaweiCloud SDK SMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowCertKey**
    - changes of request param
      - `+ enable_ca_cert`
    - changes of response param
      - `+ target_mgmt_private_key`
      - `+ target_data_cert`
      - `+ target_data_private_key`
      - `+ target_mgmt_cert`
      - `+ ca`

### HuaweiCloud SDK VPC

- _Features_
  - Support the following interfaces：
    - `ListTrafficMirrorSessions`
    - `CreateTrafficMirrorSession`
    - `ShowTrafficMirrorSession`
    - `UpdateTrafficMirrorSession`
    - `DeleteTrafficMirrorSession`
    - `RemoveSourcesFromTrafficMirrorSession`
    - `AddSourcesToTrafficMirrorSession`
    - `ListTrafficMirrorFilters`
    - `CreateTrafficMirrorFilter`
    - `ShowTrafficMirrorFilter`
    - `UpdateTrafficMirrorFilter`
    - `DeleteTrafficMirrorFilter`
    - `ListTrafficMirrorFilterRules`
    - `CreateTrafficMirrorFilterRule`
    - `ShowTrafficMirrorFilterRule`
    - `UpdateTrafficMirrorFilterRule`
    - `DeleteTrafficMirrorFilterRule`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.57 2023-09-19

### HuaweiCloud SDK BMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateBareMetalServers**
    - changes of request param
      - `* server.server_tags: list<SystemTags> -> map<string, list<SystemTags>>`

### HuaweiCloud SDK CTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateTracker**
    - changes of request param
      - `+ is_organization_tracker`
      - `+ management_event_selector`
  - **CreateTracker**
    - changes of request param
      - `+ is_organization_tracker`
      - `+ management_event_selector`
    - changes of response param
      - `+ is_organization_tracker`
      - `+ management_event_selector`
  - **ListTrackers**
    - changes of response param
      - `+ trackers.is_organization_tracker`
      - `+ trackers.management_event_selector`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the interface `ListActiveAsyncInvocations`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateInstance**
    - changes of request param
      - `+ availability_zone_detail`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstanceTopics**
    - changes of response param
      - `+ topic_max_partitions`

### HuaweiCloud SDK Live

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateTranscodingsTemplate**
    - changes of request param
      - `+ quality_info.bitrate_adaptive`
      - `+ quality_info.i_frame_policy`
  - **CreateTranscodingsTemplate**
    - changes of request param
      - `+ quality_info.bitrate_adaptive`
      - `+ quality_info.i_frame_policy`
  - **ShowTranscodingsTemplate**
    - changes of response param
      - `+ templates.quality_info.bitrate_adaptive`
      - `+ templates.quality_info.i_frame_policy`

### HuaweiCloud SDK LTS

- _Features_
  - Support the following interfaces：
    - `ShowLogConvergeConfig`
    - `ShowAdminConfig`
    - `UpdateSwitch`
    - `ShowMemberGroupAndStream`
    - `UpdateLogConvergeConfig`
- _Bug Fix_
  - None
- _Change_
  - **ListCharts**
    - changes of response param
      - `+ config.can_sort`
      - `+ config.can_search`
      - `+ config.page_size`
      - `* config: object -> object<ChartConfig>`
  - **ShowNotificationTemplate**
    - changes of response param
      - `+ create_time`
      - `+ project_id`
      - `+ templates`
      - `+ modify_time`
      - `+ name`
      - `+ source`
      - `+ type`
      - `+ locale`
      - `+ desc`
      - `- body`
  - **DeleteTransfer**
    - changes of response param
      - `+ log_transfer_info.log_transfer_detail.obs_period`
      - `+ log_transfer_info.log_transfer_detail.obs_encrypted_id`
      - `+ log_transfer_info.log_transfer_detail.obs_prefix_name`
      - `+ log_transfer_info.log_transfer_detail.obs_period_unit`
      - `+ log_transfer_info.log_transfer_detail.obs_transfer_path`
      - `+ log_transfer_info.log_transfer_detail.obs_eps_id`
      - `+ log_transfer_info.log_transfer_detail.obs_bucket_name`
      - `+ log_transfer_info.log_transfer_detail.obs_encrypted_enable`
      - `+ log_transfer_info.log_transfer_detail.obs_dir_pre_fix_name`
      - `+ log_transfer_info.log_transfer_detail.dis_id`
      - `+ log_transfer_info.log_transfer_detail.dis_name`
      - `+ log_transfer_info.log_transfer_detail.kafka_id`
      - `+ log_transfer_info.log_transfer_detail.kafka_topic`
      - `+ log_transfer_info.log_transfer_detail.obs_time_zone`
      - `+ log_transfer_info.log_transfer_detail.obs_time_zone_id`
      - `+ log_transfer_info.log_transfer_detail.tags`
      - `* log_transfer_info.log_transfer_detail: object -> object<TransferDetail>`
  - **ListTransfers**
    - changes of response param
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_period`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_encrypted_id`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_prefix_name`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_period_unit`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_transfer_path`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_eps_id`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_bucket_name`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_encrypted_enable`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_dir_pre_fix_name`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.dis_id`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.dis_name`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.kafka_id`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.kafka_topic`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_time_zone`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.obs_time_zone_id`
      - `+ log_transfers.log_transfer_info.log_transfer_detail.tags`
      - `* log_transfers.log_transfer_info.log_transfer_detail: object -> object<TransferDetail>`
  - **UpdateTransfer**
    - changes of response param
      - `+ log_transfer_info.log_transfer_detail.obs_period`
      - `+ log_transfer_info.log_transfer_detail.obs_encrypted_id`
      - `+ log_transfer_info.log_transfer_detail.obs_prefix_name`
      - `+ log_transfer_info.log_transfer_detail.obs_period_unit`
      - `+ log_transfer_info.log_transfer_detail.obs_transfer_path`
      - `+ log_transfer_info.log_transfer_detail.obs_eps_id`
      - `+ log_transfer_info.log_transfer_detail.obs_bucket_name`
      - `+ log_transfer_info.log_transfer_detail.obs_encrypted_enable`
      - `+ log_transfer_info.log_transfer_detail.obs_dir_pre_fix_name`
      - `+ log_transfer_info.log_transfer_detail.dis_id`
      - `+ log_transfer_info.log_transfer_detail.dis_name`
      - `+ log_transfer_info.log_transfer_detail.kafka_id`
      - `+ log_transfer_info.log_transfer_detail.kafka_topic`
      - `+ log_transfer_info.log_transfer_detail.obs_time_zone`
      - `+ log_transfer_info.log_transfer_detail.obs_time_zone_id`
      - `+ log_transfer_info.log_transfer_detail.tags`
      - `* log_transfer_info.log_transfer_detail: object -> object<TransferDetail>`
  - **CreateTransfer**
    - changes of response param
      - `+ log_transfer_info.log_transfer_detail.obs_period`
      - `+ log_transfer_info.log_transfer_detail.obs_encrypted_id`
      - `+ log_transfer_info.log_transfer_detail.obs_prefix_name`
      - `+ log_transfer_info.log_transfer_detail.obs_period_unit`
      - `+ log_transfer_info.log_transfer_detail.obs_transfer_path`
      - `+ log_transfer_info.log_transfer_detail.obs_eps_id`
      - `+ log_transfer_info.log_transfer_detail.obs_bucket_name`
      - `+ log_transfer_info.log_transfer_detail.obs_encrypted_enable`
      - `+ log_transfer_info.log_transfer_detail.obs_dir_pre_fix_name`
      - `+ log_transfer_info.log_transfer_detail.dis_id`
      - `+ log_transfer_info.log_transfer_detail.dis_name`
      - `+ log_transfer_info.log_transfer_detail.kafka_id`
      - `+ log_transfer_info.log_transfer_detail.kafka_topic`
      - `+ log_transfer_info.log_transfer_detail.obs_time_zone`
      - `+ log_transfer_info.log_transfer_detail.obs_time_zone_id`
      - `+ log_transfer_info.log_transfer_detail.tags`
      - `* log_transfer_info.log_transfer_detail: object -> object<TransferDetail>`
  - **ListNotificationTemplates**
    - changes of response param
      - `+ create_time`
      - `+ project_id`
      - `+ templates`
      - `+ modify_time`
      - `+ name`
      - `+ source`
      - `+ type`
      - `+ locale`
      - `+ desc`
      - `- body`
  - **UpdateSqlAlarmRule**
    - changes of request param
      - `+ frequency.type`
      - `+ frequency.cron_expr`
      - `+ frequency.hour_of_day`
      - `+ frequency.day_of_week`
      - `+ frequency.fixed_rate`
      - `+ frequency.fixed_rate_unit`
      - `* frequency: object -> object<Frequency>`
      - `+ notification_save_rule.language`
      - `+ notification_save_rule.timezone`
      - `+ notification_save_rule.user_name`
      - `+ notification_save_rule.topics`
      - `+ notification_save_rule.template_name`
      - `* notification_save_rule: object -> object<SqlNotificationSaveRule>`
    - changes of response param
      - `+ frequency.type`
      - `+ frequency.cron_expr`
      - `+ frequency.hour_of_day`
      - `+ frequency.day_of_week`
      - `+ frequency.fixed_rate`
      - `+ frequency.fixed_rate_unit`
      - `* frequency: object -> object<Frequency>`
  - **CreateSqlAlarmRule**
    - changes of request param
      - `+ frequency.type`
      - `+ frequency.cron_expr`
      - `+ frequency.hour_of_day`
      - `+ frequency.day_of_week`
      - `+ frequency.fixed_rate`
      - `+ frequency.fixed_rate_unit`
      - `* frequency: object -> object<Frequency>`
      - `+ notification_save_rule.language`
      - `+ notification_save_rule.timezone`
      - `+ notification_save_rule.user_name`
      - `+ notification_save_rule.topics`
      - `+ notification_save_rule.template_name`
      - `* notification_save_rule: object -> object<SqlNotificationSaveRule>`
  - **ListSqlAlarmRules**
    - changes of response param
      - `+ sql_alarm_rules.frequency.type`
      - `+ sql_alarm_rules.frequency.cron_expr`
      - `+ sql_alarm_rules.frequency.hour_of_day`
      - `+ sql_alarm_rules.frequency.day_of_week`
      - `+ sql_alarm_rules.frequency.fixed_rate`
      - `+ sql_alarm_rules.frequency.fixed_rate_unit`
      - `* sql_alarm_rules.frequency: object -> object<Frequency>`
  - **UpdateKeywordsAlarmRule**
    - changes of request param
      - `+ frequency.type`
      - `+ frequency.cron_expr`
      - `+ frequency.hour_of_day`
      - `+ frequency.day_of_week`
      - `+ frequency.fixed_rate`
      - `+ frequency.fixed_rate_unit`
      - `* frequency: object -> object<Frequency>`
      - `+ notification_save_rule.language`
      - `+ notification_save_rule.timezone`
      - `+ notification_save_rule.user_name`
      - `+ notification_save_rule.topics`
      - `+ notification_save_rule.template_name`
      - `* notification_save_rule: object -> object<SqlNotificationSaveRule>`
  - **CreateKeywordsAlarmRule**
    - changes of request param
      - `+ notification_save_rule.language`
      - `+ notification_save_rule.timezone`
      - `+ notification_save_rule.user_name`
      - `+ notification_save_rule.topics`
      - `+ notification_save_rule.template_name`
      - `* notification_save_rule: object -> object<SqlNotificationSaveRule>`
  - **ListKeywordsAlarmRules**
    - changes of response param
      - `+ keywords_alarm_rules.frequency.type`
      - `+ keywords_alarm_rules.frequency.cron_expr`
      - `+ keywords_alarm_rules.frequency.hour_of_day`
      - `+ keywords_alarm_rules.frequency.day_of_week`
      - `+ keywords_alarm_rules.frequency.fixed_rate`
      - `+ keywords_alarm_rules.frequency.fixed_rate_unit`
      - `* keywords_alarm_rules.frequency: object -> object<Frequency>`

### HuaweiCloud SDK MetaStudio

- _Features_
  - Support the following interfaces：
    - `Create2DDigitalHumanVideo`
    - `Show2DDigitalHumanVideo`
    - `Cancel2DDigitalHumanVideo`
    - `ListDigitalHumanBusinessCard`
    - `CreateDigitalHumanBusinessCard`
    - `ShowDigitalHumanBusinessCard`
    - `UpdateDigitalHumanBusinessCard`
    - `DeleteDigitalHumanBusinessCard`
    - `CreatePhotoDigitalHumanVideo`
    - `ShowPhotoDigitalHumanVideo`
    - `CancelPhotoDigitalHumanVideo`
    - `ListSmartLiveRooms`
    - `CreateSmartLiveRoom`
    - `ShowSmartLiveRoom`
    - `UpdateSmartLiveRoom`
    - `DeleteSmartLiveRoom`
    - `ListSmartLive`
    - `StartSmartLive`
    - `ShowSmartLive`
    - `StopSmartLive`
    - `ExecuteSmartLiveCommand`
    - `LiveEventReport`
    - `ListVideoScripts`
    - `CreateVideoScripts`
    - `ShowVideoScript`
    - `UpdateVideoScript`
    - `DeleteVideoScript`
- _Bug Fix_
  - None
- _Change_
  - **CreatePictureModelingByUrlJob**
    - changes of request param
      - `+ X-User-Privilege`

### HuaweiCloud SDK MRS

- _Features_
  - Support the interfaces `ExpandCluster`, `ShrinkCluster`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK OCR

- _Features_
  - Support the interfaces `RecognizeVehicleCertificate`, `RecognizeAcceptanceBill`, `RecognizeRealEstateCertificate`, `RecognizeVietnamIdCard`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateConsumerGroup**
    - changes of request param
      - `* body: object<ConsumerGroup> -> object<UpdateConsumerGroup>`
  - **CreateRocketMqMigrationTask**
    - changes of response param
      - `+ task_id`

### HuaweiCloud SDK SMS

- _Features_
  - Support the interfaces `ShowPrivacyAgreements`, `CreatePrivacyAgreements`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.56 2023-09-14

### HuaweiCloud SDK BMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateBareMetalServers**
    - changes of request param
      - `+ server.nics.allowed_address_pairs`

### HuaweiCloud SDK CBR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateVault**
    - changes of request param
      - `- vault.billing.promotion_info`
      - `- vault.billing.purchase_mode`
      - `- vault.billing.order_id`
  - **CreatePostPaidVault**
    - changes of request param
      - `- vault.billing.promotion_info`
      - `- vault.billing.purchase_mode`
      - `- vault.billing.order_id`

### HuaweiCloud SDK CES

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateEvents**
    - changes of request param
      - `- detail.dimensions`
  - **ListEventDetail**
    - changes of response param
      - `* event_info.detail.dimensions: object<MetricsDimension> -> list<MetricsDimension>`
      - `* event_info.detail: object<EventItemDetail> -> object<ShowEventItemDetail>`

### HuaweiCloud SDK CodeArtsDeploy

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAppDetailById**
    - changes of response param
      - `* result.arrange_infos: object -> list<TaskV2Info>`
  - **ListNewHosts**
    - changes of response param
      - `+ result.permission.can_copy`
      - `- result.permission.can_connection_test`
      - `* result.permission: object<PermissionHostDetail> -> object<PermissionHostDetailNew>`
  - **ShowHostDetail**
    - changes of response param
      - `* result.proxy_host: string -> object<HostInfoDetail>`
      - `+ result.permission.can_copy`
      - `- result.permission.can_connection_test`
      - `* result.permission: object<PermissionHostDetail> -> object<PermissionHostDetailNew>`

### HuaweiCloud SDK CSMS

- _Features_
  - Support the following interfaces：
    - `ListSecretEvents`
    - `CreateSecretEvent`
    - `ShowSecretEvent`
    - `UpdateSecretEvent`
    - `DeleteSecretEvent`
    - `ListNotificationRecords`
    - `UpdateVersion`
- _Bug Fix_
  - None
- _Change_
  - **ListSecrets**
    - changes of request param
      - `+ event_name`
    - changes of response param
      - `+ secrets.secret_type`
      - `+ secrets.auto_rotation`
      - `+ secrets.rotation_period`
      - `+ secrets.rotation_config`
      - `+ secrets.rotation_time`
      - `+ secrets.next_rotation_time`
      - `+ secrets.event_subscriptions`
      - `+ secrets.enterprise_project_id`
  - **CreateSecret**
    - changes of request param
      - `+ secret_type`
      - `+ auto_rotation`
      - `+ rotation_period`
      - `+ rotation_config`
      - `+ event_subscriptions`
      - `+ enterprise_project_id`
    - changes of response param
      - `+ secret.secret_type`
      - `+ secret.auto_rotation`
      - `+ secret.rotation_period`
      - `+ secret.rotation_config`
      - `+ secret.rotation_time`
      - `+ secret.next_rotation_time`
      - `+ secret.event_subscriptions`
      - `+ secret.enterprise_project_id`
  - **ShowSecret**
    - changes of response param
      - `+ secret.secret_type`
      - `+ secret.auto_rotation`
      - `+ secret.rotation_period`
      - `+ secret.rotation_config`
      - `+ secret.rotation_time`
      - `+ secret.next_rotation_time`
      - `+ secret.event_subscriptions`
      - `+ secret.enterprise_project_id`
  - **UpdateSecret**
    - changes of request param
      - `+ auto_rotation`
      - `+ rotation_period`
      - `+ event_subscriptions`
    - changes of response param
      - `+ secret.secret_type`
      - `+ secret.auto_rotation`
      - `+ secret.rotation_period`
      - `+ secret.rotation_config`
      - `+ secret.rotation_time`
      - `+ secret.next_rotation_time`
      - `+ secret.event_subscriptions`
      - `+ secret.enterprise_project_id`
  - **UploadSecretBlob**
    - changes of response param
      - `+ secret.secret_type`
      - `+ secret.auto_rotation`
      - `+ secret.rotation_period`
      - `+ secret.rotation_config`
      - `+ secret.rotation_time`
      - `+ secret.next_rotation_time`
      - `+ secret.event_subscriptions`
      - `+ secret.enterprise_project_id`
  - **ListSecretVersions**
    - changes of response param
      - `+ version_metadatas.expire_time`
  - **CreateSecretVersion**
    - changes of request param
      - `+ expire_time`
    - changes of response param
      - `+ version_metadata.expire_time`
  - **DeleteSecretForSchedule**
    - changes of response param
      - `+ secret.secret_type`
      - `+ secret.auto_rotation`
      - `+ secret.rotation_period`
      - `+ secret.rotation_config`
      - `+ secret.rotation_time`
      - `+ secret.next_rotation_time`
      - `+ secret.event_subscriptions`
      - `+ secret.enterprise_project_id`
  - **RestoreSecret**
    - changes of response param
      - `+ secret.secret_type`
      - `+ secret.auto_rotation`
      - `+ secret.rotation_period`
      - `+ secret.rotation_config`
      - `+ secret.rotation_time`
      - `+ secret.next_rotation_time`
      - `+ secret.event_subscriptions`
      - `+ secret.enterprise_project_id`
  - **ListSecretTags**
    - changes of response param
      - `* sys_tags: list<TagItem> -> list<SysTag>`
  - **ListProjectSecretsTags**
    - changes of response param
      - `* tags: list<Tag> -> list<TagResponse>`
  - **ShowSecretVersion**
    - changes of response param
      - `+ version.version_metadata.expire_time`
  - **ListResourceInstances**
    - changes of request param
      - `* matches: list<TagItem> -> list<TagMatches>`
    - changes of response param
      - `- resources.sys_tags`
      - `+ resources.resource_detail.secret_type`
      - `+ resources.resource_detail.auto_rotation`
      - `+ resources.resource_detail.rotation_period`
      - `+ resources.resource_detail.rotation_config`
      - `+ resources.resource_detail.rotation_time`
      - `+ resources.resource_detail.next_rotation_time`
      - `+ resources.resource_detail.event_subscriptions`
      - `+ resources.resource_detail.enterprise_project_id`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListFlavors**
    - changes of response param
      - `+ flavors.replica_count`

### HuaweiCloud SDK EVS

- _Features_
  - Support the interface `ModifyVolumeQoS`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the interfaces `ShowFunctionUrl`, `UpdateFunctionUrl`, `CreateFunctionUrl`, `DeleteFunctionUrl`
- _Bug Fix_
  - None
- _Change_
  - **UpdateFuncSnapshot**
    - changes of request param
      - `+ action: enum value [enable,disable]`
  - **CreateFunction**
    - changes of request param
      - `+ custom_image`
      - `+ code_type: enum value [Custom-Image-Swr]`

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the interface `ListAuditLogDownloadLink`
- _Bug Fix_
  - None
- _Change_
  - **CreateGaussMySqlInstance**
    - changes of response param
      - `+ instance.volume`

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the following interfaces：
    - `RunImageDescription`
    - `RunImageSuperResolution`
    - `CreateVideoTaggingMediaTask`
    - `ShowVideoTaggingMediaTask`
    - `CreateImageHighresolutionMattingTask`
    - `ShowImageHighresolutionMattingTask`

### HuaweiCloud SDK Kafka

- _Features_
  - Support the interfaces `UpdateInstanceConsumerGroup`, `UpdateInstanceUser`
- _Bug Fix_
  - None
- _Change_
  - **CreateKafkaConsumerGroup**
    - changes of request param
      - `+ group_desc`
  - **CreateInstanceUser**
    - changes of request param
      - `+ user_desc`
  - **ShowInstanceUsers**
    - changes of response param
      - `+ users.user_desc`
  - **ShowInstanceMessages**
    - changes of request param
      - `+ keyword`

### HuaweiCloud SDK KPS

- _Features_
  - Support the interfaces `ImportPrivateKey`, `ExportPrivateKey`, `BatchAssociateKeypair`, `ClearPrivateKey`
- _Bug Fix_
  - None
- _Change_
  - **ListKeypairDetail**
    - changes of response param
      - `+ keypair.key_id`
      - `+ keypair.algorithm`
  - **ListFailedTask**
    - changes of request param
      - `* limit: string -> int32`
      - `* offset: string -> int32`
  - **AssociateKeypair**
    - changes of request param
      - `+ server.port`
    - changes of response param
      - `+ error_msg`
      - `+ error_code`
      - `+ server_id`
      - `+ status`
  - **DisassociateKeypair**
    - changes of response param
      - `+ error_msg`
      - `+ error_code`
      - `+ server_id`
      - `+ status`

### HuaweiCloud SDK LTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListCharts**
    - changes of response param
      - `- config.can_sort`
      - `- config.can_search`
      - `- config.page_size`
  - **ShowNotificationTemplate**
    - changes of response param
      - `+ body`
      - `- create_time`
      - `- project_id`
      - `- templates`
      - `- modify_time`
      - `- name`
      - `- source`
      - `- type`
      - `- locale`
      - `- desc`
  - **ListLogStream**
    - changes of request param
      - `- tag`
    - changes of response param
      - `* log_streams: list<LogStream> -> list<LogStreamResBody>`
  - **ListStructuredLogsWithTimeRange**
    - changes of response param
      - `+ context`
      - `- body`
  - **DeleteTransfer**
    - changes of response param
      - `- log_transfer_info.log_transfer_detail.obs_period`
      - `- log_transfer_info.log_transfer_detail.obs_encrypted_id`
      - `- log_transfer_info.log_transfer_detail.obs_prefix_name`
      - `- log_transfer_info.log_transfer_detail.obs_period_unit`
      - `- log_transfer_info.log_transfer_detail.obs_transfer_path`
      - `- log_transfer_info.log_transfer_detail.obs_eps_id`
      - `- log_transfer_info.log_transfer_detail.obs_bucket_name`
      - `- log_transfer_info.log_transfer_detail.obs_encrypted_enable`
      - `- log_transfer_info.log_transfer_detail.obs_dir_pre_fix_name`
      - `- log_transfer_info.log_transfer_detail.dis_id`
      - `- log_transfer_info.log_transfer_detail.dis_name`
      - `- log_transfer_info.log_transfer_detail.kafka_id`
      - `- log_transfer_info.log_transfer_detail.kafka_topic`
      - `- log_transfer_info.log_transfer_detail.obs_time_zone`
      - `- log_transfer_info.log_transfer_detail.obs_time_zone_id`
      - `- log_transfer_info.log_transfer_detail.tags`
  - **ListTransfers**
    - changes of response param
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_period`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_encrypted_id`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_prefix_name`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_period_unit`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_transfer_path`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_eps_id`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_bucket_name`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_encrypted_enable`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_dir_pre_fix_name`
      - `- log_transfers.log_transfer_info.log_transfer_detail.dis_id`
      - `- log_transfers.log_transfer_info.log_transfer_detail.dis_name`
      - `- log_transfers.log_transfer_info.log_transfer_detail.kafka_id`
      - `- log_transfers.log_transfer_info.log_transfer_detail.kafka_topic`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_time_zone`
      - `- log_transfers.log_transfer_info.log_transfer_detail.obs_time_zone_id`
      - `- log_transfers.log_transfer_info.log_transfer_detail.tags`
  - **UpdateTransfer**
    - changes of response param
      - `- log_transfer_info.log_transfer_detail.obs_period`
      - `- log_transfer_info.log_transfer_detail.obs_encrypted_id`
      - `- log_transfer_info.log_transfer_detail.obs_prefix_name`
      - `- log_transfer_info.log_transfer_detail.obs_period_unit`
      - `- log_transfer_info.log_transfer_detail.obs_transfer_path`
      - `- log_transfer_info.log_transfer_detail.obs_eps_id`
      - `- log_transfer_info.log_transfer_detail.obs_bucket_name`
      - `- log_transfer_info.log_transfer_detail.obs_encrypted_enable`
      - `- log_transfer_info.log_transfer_detail.obs_dir_pre_fix_name`
      - `- log_transfer_info.log_transfer_detail.dis_id`
      - `- log_transfer_info.log_transfer_detail.dis_name`
      - `- log_transfer_info.log_transfer_detail.kafka_id`
      - `- log_transfer_info.log_transfer_detail.kafka_topic`
      - `- log_transfer_info.log_transfer_detail.obs_time_zone`
      - `- log_transfer_info.log_transfer_detail.obs_time_zone_id`
      - `- log_transfer_info.log_transfer_detail.tags`
  - **CreateTransfer**
    - changes of response param
      - `- log_transfer_info.log_transfer_detail.obs_period`
      - `- log_transfer_info.log_transfer_detail.obs_encrypted_id`
      - `- log_transfer_info.log_transfer_detail.obs_prefix_name`
      - `- log_transfer_info.log_transfer_detail.obs_period_unit`
      - `- log_transfer_info.log_transfer_detail.obs_transfer_path`
      - `- log_transfer_info.log_transfer_detail.obs_eps_id`
      - `- log_transfer_info.log_transfer_detail.obs_bucket_name`
      - `- log_transfer_info.log_transfer_detail.obs_encrypted_enable`
      - `- log_transfer_info.log_transfer_detail.obs_dir_pre_fix_name`
      - `- log_transfer_info.log_transfer_detail.dis_id`
      - `- log_transfer_info.log_transfer_detail.dis_name`
      - `- log_transfer_info.log_transfer_detail.kafka_id`
      - `- log_transfer_info.log_transfer_detail.kafka_topic`
      - `- log_transfer_info.log_transfer_detail.obs_time_zone`
      - `- log_transfer_info.log_transfer_detail.obs_time_zone_id`
      - `- log_transfer_info.log_transfer_detail.tags`
  - **ListNotificationTemplates**
    - changes of response param
      - `+ body`
      - `- create_time`
      - `- project_id`
      - `- templates`
      - `- modify_time`
      - `- name`
      - `- source`
      - `- type`
      - `- locale`
      - `- desc`
  - **UpdateSqlAlarmRule**
    - changes of request param
      - `- frequency.type`
      - `- frequency.cron_expr`
      - `- frequency.hour_of_day`
      - `- frequency.day_of_week`
      - `- frequency.fixed_rate`
      - `- frequency.fixed_rate_unit`
      - `- notification_save_rule.language`
      - `- notification_save_rule.timezone`
      - `- notification_save_rule.user_name`
      - `- notification_save_rule.topics`
      - `- notification_save_rule.template_name`
    - changes of response param
      - `- frequency.type`
      - `- frequency.cron_expr`
      - `- frequency.hour_of_day`
      - `- frequency.day_of_week`
      - `- frequency.fixed_rate`
      - `- frequency.fixed_rate_unit`
  - **CreateSqlAlarmRule**
    - changes of request param
      - `- frequency.type`
      - `- frequency.cron_expr`
      - `- frequency.hour_of_day`
      - `- frequency.day_of_week`
      - `- frequency.fixed_rate`
      - `- frequency.fixed_rate_unit`
      - `- notification_save_rule.language`
      - `- notification_save_rule.timezone`
      - `- notification_save_rule.user_name`
      - `- notification_save_rule.topics`
      - `- notification_save_rule.template_name`
  - **ListSqlAlarmRules**
    - changes of response param
      - `- sql_alarm_rules.frequency.type`
      - `- sql_alarm_rules.frequency.cron_expr`
      - `- sql_alarm_rules.frequency.hour_of_day`
      - `- sql_alarm_rules.frequency.day_of_week`
      - `- sql_alarm_rules.frequency.fixed_rate`
      - `- sql_alarm_rules.frequency.fixed_rate_unit`
  - **UpdateKeywordsAlarmRule**
    - changes of request param
      - `- frequency.type`
      - `- frequency.cron_expr`
      - `- frequency.hour_of_day`
      - `- frequency.day_of_week`
      - `- frequency.fixed_rate`
      - `- frequency.fixed_rate_unit`
      - `- notification_save_rule.language`
      - `- notification_save_rule.timezone`
      - `- notification_save_rule.user_name`
      - `- notification_save_rule.topics`
      - `- notification_save_rule.template_name`
  - **CreateKeywordsAlarmRule**
    - changes of request param
      - `- notification_save_rule.language`
      - `- notification_save_rule.timezone`
      - `- notification_save_rule.user_name`
      - `- notification_save_rule.topics`
      - `- notification_save_rule.template_name`
  - **ListKeywordsAlarmRules**
    - changes of response param
      - `- keywords_alarm_rules.frequency.type`
      - `- keywords_alarm_rules.frequency.cron_expr`
      - `- keywords_alarm_rules.frequency.hour_of_day`
      - `- keywords_alarm_rules.frequency.day_of_week`
      - `- keywords_alarm_rules.frequency.fixed_rate`
      - `- keywords_alarm_rules.frequency.fixed_rate_unit`

### HuaweiCloud SDK Meeting

- _Features_
  - Support the interface `DeleteToken`
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
  - **RunCreateVideoModerationJob**
    - changes of request param
      - `+ biz_type`
  - **RunCreateAudioModerationJob**
    - changes of request param
      - `+ biz_type`
  - **RunTextModeration**
    - changes of request param
      - `+ biz_type`
  - **CheckImageModeration**
    - changes of request param
      - `+ biz_type`

### HuaweiCloud SDK RDS

- _Features_
  - Support the interfaces `RestoreTablesNew`, `UpgradeDbVersionNew`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.55 2023-09-07

### HuaweiCloud SDK AOS

- _Features_
  - Support the interface `DeleteStackEnhanced`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK AS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListScalingActivityLogs**
    - changes of response param
      - `* scaling_activity_log.scaling_value: string -> int32`
  - **CreateScalingPolicy**
    - changes of request param
      - `+ scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **UpdateScalingPolicy**
    - changes of request param
      - `+ scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **ShowScalingPolicy**
    - changes of response param
      - `+ scaling_policy.scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scaling_policy.scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **ListScalingPolicies**
    - changes of response param
      - `+ scaling_policies.scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scaling_policies.scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **CreateScalingV2Policy**
    - changes of request param
      - `+ scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **ListAllScalingV2Policies**
    - changes of response param
      - `+ scaling_policies.scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scaling_policies.scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **UpdateScalingV2Policy**
    - changes of request param
      - `+ scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **ShowScalingV2Policy**
    - changes of response param
      - `+ scaling_policy.scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scaling_policy.scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **ListScalingV2Policies**
    - changes of response param
      - `+ scaling_policies.scheduled_policy.recurrence_type: enum value [Daily,Weekly,Monthly]`
      - `- scaling_policies.scheduled_policy.recurrence_type: enum value [DAILY,WEEKLY,MONTHLY]`
  - **ListScalingActivityV2Logs**
    - changes of response param
      - `* scaling_activity_log.scaling_value: string -> int32`
  - **CreateScalingGroup**
    - changes of request param
      - `+ lbaas_listeners.protocol_version`
  - **ListScalingGroups**
    - changes of response param
      - `+ scaling_groups.lbaas_listeners.protocol_version`
  - **UpdateScalingGroup**
    - changes of request param
      - `+ lbaas_listeners.protocol_version`
  - **ShowScalingGroup**
    - changes of response param
      - `+ scaling_group.lbaas_listeners.protocol_version`

### HuaweiCloud SDK CES

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateEvents**
    - changes of request param
      - `+ detail.dimensions`
  - **ListEventDetail**
    - changes of response param
      - `- dimensions`
      - `+ event_info.detail.dimensions`

### HuaweiCloud SDK DRS

- _Features_
  - Support the following interfaces：
    - `StopJobAction`
    - `ShowDataProgress`
    - `UpdateDataProgress`
    - `ShowDataProcessingRulesResult`
    - `CheckDataFilter`
    - `ShowDataFilteringResult`
    - `CollectColumns`
    - `ShowColumnInfoResult`
    - `BatchStopJobsAction`
    - `ExportOperationInfo`
    - `BatchTagAction`
    - `ListProjectTags`
    - `ShowInstanceTags`
    - `UpdateStartPosition`
    - `ShowMonitorData`
    - `ShowSupportObjectType`
    - `ShowIncrementComponentsDetail`
    - `CollectDbObjectsInfo`
    - `ShowDbObjectsList`
- _Bug Fix_
  - None
- _Change_
  - **ShowDbObjectTemplateResult**
    - changes of request param
      - `+ type: enum value [change]`
  - **ShowUpdateObjectSavingStatus**
    - changes of request param
      - `+ X-Language: enum value [en-us,zh-cn]`
  - **ShowObjectMapping**
    - changes of request param
      - `+ X-Language: enum value [en-us,zh-cn]`
  - **ListJobs**
    - changes of request param
      - `+ instance_ids`
      - `+ instance_ip`
  - **ShowDbObjectCollectionStatus**
    - changes of request param
      - `+ X-Language: enum value [en-us,zh-cn]`
  - **UpdateBatchAsyncJobs**
    - changes of request param
      - `+ jobs.type: enum value [re_create,expired_days]`
  - **UpdateJob**
    - changes of request param
      - `+ job.type: enum value [re_create,expired_days]`

### HuaweiCloud SDK RDS

- _Features_
  - Support the interfaces `ListInstancesResourceMetrics`, `ListInstancesRecommendation`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.54 2023-08-31

### HuaweiCloud SDK CCE

- _Features_
  - Support the interfaces `RollbackAddonInstance`, `ResizeCluster`, `BatchCreateClusterTags`, `BatchDeleteClusterTags`
- _Bug Fix_
  - None
- _Change_
  - **ShowAddonInstance**
    - changes of response param
      - `+ status.isRollbackable`
      - `+ status.previousVersion`
      - `+ status.status: enum value [rollbackFailed]`
  - **UpdateAddonInstance**
    - changes of response param
      - `+ status.isRollbackable`
      - `+ status.previousVersion`
      - `+ status.status: enum value [rollbackFailed]`
  - **CreateAddonInstance**
    - changes of response param
      - `+ status.isRollbackable`
      - `+ status.previousVersion`
      - `+ status.status: enum value [rollbackFailed]`
  - **ListAddonInstances**
    - changes of response param
      - `+ items.status.isRollbackable`
      - `+ items.status.previousVersion`
      - `+ items.status.status: enum value [rollbackFailed]`

### HuaweiCloud SDK CES

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowResourceGroup**
    - changes of response param
      - `+ resources.event_type`
  - **ListResourceGroup**
    - changes of response param
      - `+ resource_groups.type`
      - `+ resource_groups.relation_ids`
      - `+ resource_groups.resources`
  - **ListEventDetail**
    - changes of response param
      - `+ dimensions`

### HuaweiCloud SDK CES

- _Features_
  - Support the following interfaces：
    - `ListDashboardInfos`
    - `CreateOneDashboard`
    - `UpdateDashboard`
    - `DeleteDashboards`
    - `ListDashboardWidgets`
    - `CreateDashboardWidgets`
    - `ShowWidget`
    - `DeleteOneWidget`
    - `BatchUpdateWidgets`
- _Bug Fix_
  - None
- _Change_
  - **ListAlarmRulePolicies**
    - changes of response param
      - `+ policies.extra_info`
      - `+ policies.type`
      - `* policies: list<Policy> -> list<ListPolicy>`
  - **UpdateAlarmRulePolicies**
    - changes of request param
      - `+ policies.type`
      - `* policies: list<Policy> -> list<UpdatePolicy>`
    - changes of response param
      - `+ policies.type`
      - `* policies: list<Policy> -> list<UpdatePolicy>`
  - **ListAlarmTemplates**
    - changes of response param
      - `- alarm_templates.association_alarm_total`
      - `- alarm_templates.policy_total`
      - `- alarm_templates.policy_statistics`
      - `- alarm_templates.association_resource_groups`
  - **ShowAlarmTemplate**
    - changes of response param
      - `- association_alarm_total`

### HuaweiCloud SDK CodeArtsDeploy

- _Features_
  - Support the following interfaces：
    - `ListHostClusters`
    - `CreateHostCluster`
    - `ShowHostClusterDetail`
    - `ListNewHosts`
    - `CreateHost`
    - `ShowHostDetail`
    - `ListEnvironments`
    - `CreateEnvironment`
    - `ShowEnvironmentDetail`
    - `DeleteEnvironment`
    - `ImportHostToEnvironment`
    - `DeleteHostFromEnvironment`
    - `ListAllApp`
    - `CreateApp`
    - `ShowAppDetailById`
    - `DeleteApplication`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowInstance**
    - changes of response param
      - `+ available_zones`

### HuaweiCloud SDK DLI

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSqlJobs**
    - changes of response param
      - `+ jobs.cpu_cost`
      - `+ jobs.output_byte`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowJob**
    - changes of response param
      - `+ entities.server_id`
      - `+ entities.nic_id`
  - **CreateServers**
    - changes of request param
      - `+ server.extendparam.CB_CSBS_BACKUP`

### HuaweiCloud SDK ER

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchCreateResourceTags**
    - changes of request param
      - `- sys_tags`
  - **ShowStaticRoute**
    - changes of response param
      - `- route.attachments.priority`
  - **UpdateStaticRoute**
    - changes of response param
      - `- route.attachments.priority`
  - **ListStaticRoutes**
    - changes of response param
      - `- routes.attachments.priority`
  - **CreateStaticRoute**
    - changes of response param
      - `- route.attachments.priority`
  - **ListEffectiveRoutes**
    - changes of response param
      - `- routes.address_group_id`
      - `- routes.next_hops.priority`

### HuaweiCloud SDK FRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **DetectFaceByFile**
    - changes of response param
      - `+ faces.attributes.gender`
  - **DetectFaceByFileIntl**
    - changes of response param
      - `+ faces.attributes.gender`
  - **DetectFaceByUrl**
    - changes of response param
      - `+ faces.attributes.gender`
  - **DetectFaceByUrlIntl**
    - changes of response param
      - `+ faces.attributes.gender`
  - **DetectFaceByBase64**
    - changes of response param
      - `+ faces.attributes.gender`
  - **DetectFaceByBase64Intl**
    - changes of response param
      - `+ faces.attributes.gender`

### HuaweiCloud SDK GES

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ExportGraph2**
    - changes of request param
      - `+ paginate`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateInstanceByEngine**
    - changes of request param
      - `- engine_version: enum value [1.1.0,2.7]`
  - **CreatePostPaidInstance**
    - changes of request param
      - `- engine_version: enum value [1.1.0,2.7]`

### HuaweiCloud SDK MRS

- _Features_
  - Support the interface `ShowMrsVersionList`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `RecognizeSmartDocumentRecognizer`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of response param
      - `+ instances.public_dns_names`

# 3.1.53 2023-08-24

### HuaweiCloud SDK HSS

- _Features_
  - Support `HSS`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK MetaStudio

- _Features_
  - Support `MetaStudio`
- _Bug Fix_
  - None
- _Change_
  - None

HuaweiCloud SDK APIG

- Features
  - Support the following interfaces：
    - ListEndpointConnections
    - AcceptOrRejectEndpointConnections
    - ListEndpointPermissions
    - AddEndpointPermissions
    - DeleteEndpointPermissions
- Bug Fix
  - None
- Change
  - AssociateSignatureKeyV2
    - changes of response param
      - + bindings.req_method
  - ListSignatureKeysBindedToApiV2
    - changes of response param
      - + bindings.req_method
  - ListApisNotBoundWithSignatureKeyV2
    - changes of response param
      - + apis.req_method
  - ListApisBindedToSignatureKeyV2
    - changes of response param
      - + bindings.req_method
  - ListApisBindedToRequestThrottlingPolicyV2
    - changes of response param
      - + apis.req_method
  - ListApisUnbindedToRequestThrottlingPolicyV2
    - changes of response param
      - + apis.req_method
  - ListApiRuntimeDefinitionV2
    - changes of response param
      - + content_type: enum value [multipart/form-data]
      - - content_type: enum value [multipart/form-date]
  - ListApisBindedToAclPolicyV2
    - changes of response param
      - + apis.req_method
  - ListApisUnbindedToAclPolicyV2
    - changes of response param
      - + apis.req_method
  - ShowDetailsOfCustomAuthorizersV2
    - changes of response param
      - + network_type
  - UpdateCustomAuthorizerV2
    - changes of request param
      - + network_type
    - changes of response param
      - + network_type
  - ListInstancesV2
    - changes of response param
      - + instances.cbc_operation_locks
      - + instances.status: enum value [Resizing,ResizeFailed,ResizeTimeout]
      - + instances.instance_status: enum value [42,43,44]
      - + instances.spec: enum value [PLATINUM_X2,PLATINUM_X3,PLATINUM_X4,PLATINUM_X5,PLATINUM_X6,PLATINUM_X7,PLATINUM_X8]
  - CreateInstanceV2
    - changes of request param
      - + spec_id: enum value [PLATINUM_X2,PLATINUM_X3,PLATINUM_X4,PLATINUM_X5,PLATINUM_X6,PLATINUM_X7,PLATINUM_X8]
  - ShowDetailsOfInstanceV2
    - changes of response param
      - + cbc_operation_locks
      - + status: enum value [Resizing,ResizeFailed,ResizeTimeout]
      - + instance_status: enum value [42,43,44]
      - + spec: enum value [PLATINUM_X2,PLATINUM_X3,PLATINUM_X4,PLATINUM_X5,PLATINUM_X6,PLATINUM_X7,PLATINUM_X8]
  - UpdateInstanceV2
    - changes of response param
      - + cbc_operation_locks
      - + status: enum value [Resizing,ResizeFailed,ResizeTimeout]
      - + instance_status: enum value [42,43,44]
      - + spec: enum value [PLATINUM_X2,PLATINUM_X3,PLATINUM_X4,PLATINUM_X5,PLATINUM_X6,PLATINUM_X7,PLATINUM_X8]
  - ShowDetailsOfApiV2
    - changes of response param
      - + content_type: enum value [multipart/form-data]
      - - content_type: enum value [multipart/form-date]
  - UpdateApiV2
    - changes of request param
      - + content_type: enum value [multipart/form-data]
      - - content_type: enum value [multipart/form-date]
    - changes of response param
      - + content_type: enum value [multipart/form-data]
      - - content_type: enum value [multipart/form-date]
  - ListApiVersionDetailV2
    - changes of response param
      - + content_type: enum value [multipart/form-data]
      - - content_type: enum value [multipart/form-date]
  - CreateCustomAuthorizerV2
    - changes of request param
      - + network_type
    - changes of response param
      - + network_type
  - ListCustomAuthorizersV2
    - changes of response param
      - + network_type
      - + authorizer_list.network_type
  - CreateApiV2
    - changes of request param
      - + content_type: enum value [multipart/form-data]
      - - content_type: enum value [multipart/form-date]
    - changes of response param
      - + content_type: enum value [multipart/form-data]
      - - content_type: enum value [multipart/form-date]
  - ListApisV2
    - changes of response param
      - + apis.content_type: enum value [multipart/form-data]
      - - apis.content_type: enum value [multipart/form-date]

### HuaweiCloud SDK CBR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateSubscriptionTarget**
    - changes of request param
      - `+ detail.url`
      - `+ detail.agency_name`
      - `+ detail.invocation_http_parameters`
      - `* detail: object -> object<Detail>`
  - **UpdateSubscriptionTarget**
    - changes of request param
      - `+ detail.url`
      - `+ detail.agency_name`
      - `+ detail.invocation_http_parameters`
      - `* detail: object -> object<Detail>`
  - **UpdateSubscription**
    - changes of request param
      - `+ targets.detail.url`
      - `+ targets.detail.agency_name`
      - `+ targets.detail.invocation_http_parameters`
      - `* targets.detail: object -> object<Detail>`
  - **CreateSubscription**
    - changes of request param
      - `+ targets.detail.url`
      - `+ targets.detail.agency_name`
      - `+ targets.detail.invocation_http_parameters`
      - `* targets.detail: object -> object<Detail>`

### HuaweiCloud SDK ER

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListJarPackageHostInfo**
    - changes of response param
      - `* data_list.record_time: int32 -> int64`

### HuaweiCloud SDK IMS

- _Features_
  - Support the following interfaces：
    - `ListAimMsgTemplate`
    - `CreateAimMsgTemplate`
    - `ShowAimMsgTemplateVariable`
    - `SendAimBatchMessages`
    - `SendAimBatchDifferentMessages`
    - `DeleteAimMsgSignature`
    - `ShowAimMsgTemplateDetail`
    - `UpdateAimMsgTemplate`
    - `DeleteAimMsgTemplate`
    - `ListAimMsgSignature`
    - `AddAimMsgSignature`
    - `ListAimMsgApp`
    - `CreateSmsApp`
    - `ListAimMsgAppDetail`
    - `UpdateAimMsgApp`
    - `ShowAimMsgSignatureFileInfo`
    - `UploadAimMsgSignatureFile`
    - `ListAimMsgSignatureDetail`
    - `UpdateAimMsgSignature`
- _Bug Fix_
  - None
- _Change_
  - **ListAimResolveDetails**
    - changes of request param
      - `+ task_name`
    - changes of response param
      - `+ resolve_details.task_name`
  - **ListResolveTasks**
    - changes of request param
      - `+ task_name`
    - changes of response param
      - `+ resolve_tasks.task_name`

### HuaweiCloud SDK LTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListNatGateways**
    - changes of response param
      - `+ nat_gateways.session_conf`
  - **CreateNatGateway**
    - changes of request param
      - `+ nat_gateway.session_conf`
    - changes of response param
      - `+ nat_gateway.session_conf`
  - **ShowNatGateway**
    - changes of response param
      - `+ nat_gateway.session_conf`
  - **UpdateNatGateway**
    - changes of request param
      - `+ nat_gateway.session_conf`
    - changes of response param
      - `+ nat_gateway.session_conf`

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `ShowLoginType`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK SIS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RunTts**
    - changes of request param
      - `+ config.property: enum value [chinese_huaxiaoman_common,chinese_huaxiaofang_common,chinese_huaxiaojun_common]`

### HuaweiCloud SDK VPC

# 3.1.52 2023-08-21

### HuaweiCloud SDK LTS

- _Features_
  - Support the interface `DeleteDashboard`
- _Bug Fix_
  - None
- _Change_
  - **CreateDashBoard**
    - changes of response param
      - `* last_update_time: string -> int64`
      - `* useSystemTemplate: string -> boolean`
  - **CreateLogStream**
    - changes of request param
      - `- enterprise_project_name`
      - `- log_stream_name: enum value [lts-stream-13ci]`
      - `* ttl_in_days: string -> int32`
      - `* tags: list<tagsBody> -> object<tagsBody>`
  - **ListAccessConfig**
    - changes of response param
      - `+ cluster_id`
      - `+ result.cluster_id`
  - **UpdateAccessConfig**
    - changes of request param
      - `+ cluster_id`
    - changes of response param
      - `+ cluster_id`
  - **CreateAccessConfig**
    - changes of request param
      - `+ cluster_id`
    - changes of response param
      - `+ cluster_id`
  - **DeleteAccessConfig**
    - changes of response param
      - `+ cluster_id`
      - `+ result.cluster_id`

# 3.1.51 2023-08-17

### HuaweiCloud SDK DC

- _Features_
  - Support `DC`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK AOS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateStack**
    - changes of request param
      - `+ agencies.agency_urn`
  - **GetStackMetadata**
    - changes of response param
      - `+ agencies.agency_urn`
  - **CreateStack**
    - changes of request param
      - `+ agencies.agency_urn`

### HuaweiCloud SDK APIG

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListApiRuntimeDefinitionV2**
    - changes of response param
      - `+ req_protocol: enum value [GRPCS]`
      - `+ backend_type: enum value [GRPC]`
  - **ShowDetailsOfApiV2**
    - changes of response param
      - `+ req_protocol: enum value [GRPCS]`
      - `+ backend_type: enum value [GRPC]`
      - `+ policy_https.req_protocol: enum value [GRPCS]`
      - `+ backend_api.req_protocol: enum value [GRPCS]`
  - **UpdateApiV2**
    - changes of request param
      - `+ req_protocol: enum value [GRPCS]`
      - `+ backend_type: enum value [GRPC]`
      - `+ policy_https.req_protocol: enum value [GRPCS]`
      - `+ backend_api.req_protocol: enum value [GRPCS]`
    - changes of response param
      - `+ req_protocol: enum value [GRPCS]`
      - `+ backend_type: enum value [GRPC]`
      - `+ policy_https.req_protocol: enum value [GRPCS]`
      - `+ backend_api.req_protocol: enum value [GRPCS]`
  - **ListApiVersionDetailV2**
    - changes of response param
      - `+ req_protocol: enum value [GRPCS]`
      - `+ backend_type: enum value [GRPC]`
      - `+ policy_https.req_protocol: enum value [GRPCS]`
      - `+ backend_api.req_protocol: enum value [GRPCS]`
  - **CreateApiV2**
    - changes of request param
      - `+ req_protocol: enum value [GRPCS]`
      - `+ backend_type: enum value [GRPC]`
      - `+ policy_https.req_protocol: enum value [GRPCS]`
      - `+ backend_api.req_protocol: enum value [GRPCS]`
    - changes of response param
      - `+ req_protocol: enum value [GRPCS]`
      - `+ backend_type: enum value [GRPC]`
      - `+ policy_https.req_protocol: enum value [GRPCS]`
      - `+ backend_api.req_protocol: enum value [GRPCS]`
  - **ListApisV2**
    - changes of response param
      - `+ apis.req_protocol: enum value [GRPCS]`
      - `+ apis.backend_type: enum value [GRPC]`
      - `+ apis.backend_api.req_protocol: enum value [GRPCS]`

### HuaweiCloud SDK CloudRTC

- _Features_
  - Support the interfaces `ListRtcAbnormalEvent`, `ListRtcEvent`, `ListObsBuckets`, `ListObsBucketObjects`, `UpdateObsBucketAuthority`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DCS

- _Features_
  - Support the interface `ShowNodesInformation`
- _Bug Fix_
  - None
- _Change_
  - **ShowInstance**
    - changes of response param
      - `+ cloud_service_type_code`
      - `+ inquery_spec_code`
      - `+ cloud_resource_type_code`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateServers**
    - changes of request param
      - `+ server.root_volume.iops`
      - `+ server.root_volume.throughput`
      - `+ server.root_volume.volumetype: enum value [GPSSD2,ESSD2]`
      - `+ server.data_volumes.iops`
      - `+ server.data_volumes.throughput`
      - `+ server.data_volumes.volumetype: enum value [GPSSD2,ESSD2]`
  - **CreatePostPaidServers**
    - changes of request param
      - `+ server.data_volumes.iops`
      - `+ server.data_volumes.throughput`
      - `+ server.data_volumes.volumetype: enum value [GPSSD2,ESSD2]`
      - `+ server.root_volume.iops`
      - `+ server.root_volume.throughput`
      - `+ server.root_volume.volumetype: enum value [GPSSD2,ESSD2]`

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the interfaces `ModifyGaussMysqlDns`, `CreateGaussMysqlDns`
- _Bug Fix_
  - None
- _Change_
  - **ShowGaussMySqlInstanceInfo**
    - changes of response param
      - `+ instance.private_dns_names`
  - **ListGaussMySqlInstanceDetailInfo**
    - changes of response param
      - `+ instances.private_dns_names`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchRestartOrDeleteInstances**
    - changes of request param
      - `+ allFailure`
      - `- all_failure`
  - **CreateInstanceByEngine**
    - changes of request param
      - `- engine_version: enum value [2.3.0]`
  - **CreatePostPaidInstance**
    - changes of request param
      - `- engine_version: enum value [2.3.0]`

### HuaweiCloud SDK Live

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSnapshotConfigs**
    - changes of response param
      - `* body: object<LiveSnapshotConfig> -> list<LiveSnapshotConfig>`

### HuaweiCloud SDK MPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateThumbnailsTask**
    - changes of request param
      - `+ thumbnail_para.dots_ms`
      - `+ thumbnail_para.type: enum value [DOTS_MS]`
  - **CreateTranscodingTask**
    - changes of request param
      - `+ thumbnail.params.dots_ms`
      - `+ thumbnail.params.type: enum value [DOTS_MS]`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchRestartOrDeleteInstances**
    - changes of request param
      - `+ allFailure`
      - `- all_failure`
  - **CreatePostPaidInstanceByEngine**
    - changes of request param
      - `- engine_version: enum value [3.7.17]`
  - **CreatePostPaidInstance**
    - changes of request param
      - `- engine_version: enum value [3.7.17]`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BatchDeleteInstances**
    - changes of request param
      - `+ allFailure`
      - `- all_failure`
  - **CreatePostPaidInstance**
    - changes of request param
      - `- engine_version: enum value [5.x]`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateSecurityGroupRule**
    - changes of request param
      - `+ security_group_rule.remote_address_group_id`
  - **NeutronCreateSecurityGroupRule**
    - changes of request param
      - `+ security_group_rule.remote_address_group_id`

# 3.1.50 2023-08-10

### HuaweiCloud SDK CES

- _Features_
  - Support `CES`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DNS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListPrivateZones**
    - changes of request param
      - `* type: optional -> required`

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the interfaces `UpdateProxyPort`, `DescribeBackupEncryptStatus`, `ModifyBackupEncryptStatus`
- _Bug Fix_
  - None
- _Change_
  - **UpdateProxySessionConsistence**
    - changes of request param
      - `+ consistence_mode`
  - **CreateGaussMySqlInstance**
    - changes of request param
      - `* datastore: object<MysqlDatastore> -> object<MysqlDatastoreInReq>`
    - changes of response param
      - `* instance.datastore: object<MysqlDatastore> -> object<MysqlDatastoreInRes>`
  - **ShowGaussMySqlBackupList**
    - changes of response param
      - `- backups.datastore.kernel_version`
      - `* backups.datastore: object<MysqlDatastore> -> object<MysqlDatastoreInBackup>`
  - **ShowGaussMySqlProxyList**
    - changes of response param
      - `+ proxy_list.proxy.consistence_mode`

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstanceConsumerGroups**
    - changes of response param
      - `+ groups.createdAt`
      - `+ groups.group_desc`
      - `+ groups.lag`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeMyanmarIdcard**
    - changes of request param
      - `+ return_translation`
    - changes of response param
      - `+ result.translation_info`

### HuaweiCloud SDK RDS

- _Features_
  - Support the interfaces `ListXellogFiles`, `CreateXelLogDownload`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowOneTopic**
    - changes of response param
      - `+ message_type`
  - **ShowTopicStatus**
    - changes of response param
      - `+ max_offset`
      - `+ min_offset`
  - **ShowInstance**
    - changes of response param
      - `+ grpc_address`
      - `+ public_grpc_address`
  - **CreateTopicOrBatchDeleteTopic**
    - changes of request param
      - `+ message_type`
  - **ListRocketInstanceTopics**
    - changes of response param
      - `+ message_type`
      - `+ topics.message_type`
  - **ListMessages**
    - changes of response param
      - `* messages.reconsume_times: string -> int32`
      - `* messages.queue_id: string -> int32`
      - `* messages.queue_offset: string -> int32`
  - **ExportDlqMessage**
    - changes of response param
      - `* reconsume_times: string -> int32`
      - `* queue_id: string -> int32`
      - `* queue_offset: string -> int32`
  - **CreatePostPaidInstance**
    - changes of request param
      - `+ engine_version: enum value [5.x]`
  - **ListInstances**
    - changes of response param
      - `+ grpc_address`
      - `+ public_grpc_address`
      - `+ instances.grpc_address`
      - `+ instances.public_grpc_address`
  - **ShowConsumerListOrDetails**
    - changes of response param
      - `+ lag`
      - `+ max_offset`
      - `+ consumer_offset`

# 3.1.49 2023-08-03

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowNode**
    - changes of response param
      - `- spec.extendParam.enterprise_project_id`
  - **UpdateNode**
    - changes of response param
      - `- spec.extendParam.enterprise_project_id`
  - **DeleteNode**
    - changes of response param
      - `- spec.extendParam.enterprise_project_id`
  - **CreateNode**
    - changes of request param
      - `- spec.extendParam.enterprise_project_id`
    - changes of response param
      - `- spec.extendParam.enterprise_project_id`
  - **ListNodes**
    - changes of response param
      - `- items.spec.extendParam.enterprise_project_id`
  - **ShowNodePool**
    - changes of response param
      - `- spec.nodeTemplate.extendParam.enterprise_project_id`
  - **UpdateNodePool**
    - changes of response param
      - `- spec.nodeTemplate.extendParam.enterprise_project_id`
  - **DeleteNodePool**
    - changes of response param
      - `- spec.nodeTemplate.extendParam.enterprise_project_id`
  - **CreateNodePool**
    - changes of request param
      - `- spec.nodeTemplate.extendParam.enterprise_project_id`
    - changes of response param
      - `- spec.nodeTemplate.extendParam.enterprise_project_id`
  - **ListNodePools**
    - changes of response param
      - `- items.spec.nodeTemplate.extendParam.enterprise_project_id`

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDomainDetailByName**
    - changes of response param
      - `- domain.sources.weight`
      - `* domain.sources: list<SourcesConfig> -> list<SourcesDomainConfig>`
  - **ShowDomainFullConfig**
    - changes of response param
      - `+ configs.remark`
      - `+ configs.ip_frequency_limit`
      - `+ configs.hsts`
      - `+ configs.quic`
      - `+ configs.url_auth.inherit_config`
      - `+ configs.sources.bucket_access_key`
      - `+ configs.sources.bucket_secret_key`
      - `+ configs.sources.bucket_region`
      - `+ configs.sources.bucket_name`
      - `+ configs.request_limit_rules.priority`
      - `+ configs.request_limit_rules.match_type`
      - `+ configs.request_limit_rules.match_value`
  - **UpdateDomainFullConfig**
    - changes of request param
      - `+ configs.remark`
      - `+ configs.ip_frequency_limit`
      - `+ configs.hsts`
      - `+ configs.quic`
      - `+ configs.url_auth.inherit_config`
      - `+ configs.sources.bucket_access_key`
      - `+ configs.sources.bucket_secret_key`
      - `+ configs.sources.bucket_region`
      - `+ configs.sources.bucket_name`
      - `+ configs.request_limit_rules.priority`
      - `+ configs.request_limit_rules.match_type`
      - `+ configs.request_limit_rules.match_value`

### HuaweiCloud SDK Config

- _Features_
  - Support the following interfaces：
    - `ListConformancePacks`
    - `CreateConformancePack`
    - `ShowConformancePack`
    - `DeleteConformancePack`
    - `CollectConformancePackComplianceSummary`
    - `ListConformancePackComplianceByPackId`
    - `ListConformancePackComplianceDetailsByPackId`
    - `ListConformancePackComplianceScores`
    - `ListBuiltInConformancePackTemplates`
    - `ShowBuiltInConformancePackTemplate`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **DeleteTracker**
    - changes of request param
      - `+ tracker_type: enum value [system]`

### HuaweiCloud SDK GaussDB

- _Features_
  - Support the interface `ModifyGaussMySqlProxyRouteMode`
- _Bug Fix_
  - None
- _Change_
  - **ShowGaussMySqlEngineVersion**
    - changes of response param
      - `+ datastores.version`
      - `+ datastores.kernel_version`
  - **CreateGaussMySqlProxy**
    - changes of request param
      - `+ route_mode`
  - **CreateGaussMySqlInstance**
    - changes of request param
      - `+ datastore.kernel_version`
    - changes of response param
      - `+ instance.datastore.kernel_version`
  - **ShowGaussMySqlBackupList**
    - changes of response param
      - `+ backups.datastore.kernel_version`
  - **ShowGaussMySqlProxyList**
    - changes of response param
      - `+ proxy_list.proxy.route_mode`
      - `+ proxy_list.proxy.balance_route_mode_enabled`

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListInstances**
    - changes of response param
      - `+ instances.backup_used_space`
  - **ListComponentInfos**
    - changes of request param
      - `+ component_type`
      - `+ availability_zone_id`
    - changes of response param
      - `+ nodes.name`
      - `+ nodes.availability_zone_id`
      - `+ nodes.description`
      - `+ nodes.status`
      - `+ nodes.components.distributed_id`
  - **ListInstancesDetails**
    - changes of response param
      - `+ instances.backup_used_space`

### HuaweiCloud SDK MRS

- _Features_
  - Support the interfaces `ListDataConnector`, `CreateDataConnector`, `UpdateDataConnector`, `DeleteDataConnector`
- _Bug Fix_
  - None
- _Change_
  - **CreateCluster**
    - changes of request param
      - `+ charge_info.period_type`
      - `+ charge_info.period_num`
      - `+ charge_info.is_auto_pay`
  - **RunJobFlow**
    - changes of request param
      - `+ charge_info.period_type`
      - `+ charge_info.period_num`
      - `+ charge_info.is_auto_pay`

### HuaweiCloud SDK RDS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListDatastores**
    - changes of request param
      - `+ database_name: enum value [MariaDB]`
  - **ListConfigurations**
    - changes of response param
      - `+ configurations.datastore_name: enum value [mariadb]`
  - **CreateConfiguration**
    - changes of request param
      - `+ datastore.type: enum value [MariaDB]`
    - changes of response param
      - `+ configuration.datastore_name: enum value [mariadb]`
  - **ShowConfiguration**
    - changes of response param
      - `+ datastore_name: enum value [mariadb]`
  - **ShowInstanceConfiguration**
    - changes of response param
      - `+ datastore_name: enum value [mariadb]`
  - **ListFlavors**
    - changes of request param
      - `+ database_name: enum value [MariaDB]`
  - **ListStorageTypes**
    - changes of request param
      - `+ database_name: enum value [MariaDB]`
  - **ListInstances**
    - changes of request param
      - `+ datastore_type: enum value [MariaDB]`
    - changes of response param
      - `+ instances.datastore.type: enum value [MariaDB]`
  - **CreateInstance**
    - changes of request param
      - `+ datastore.type: enum value [MariaDB]`
    - changes of response param
      - `+ instance.datastore.type: enum value [MariaDB]`
  - **CreateRestoreInstance**
    - changes of request param
      - `+ datastore.type: enum value [MariaDB]`
    - changes of response param
      - `+ instance.datastore.type: enum value [MariaDB]`
  - **ListBackups**
    - changes of response param
      - `+ backups.datastore.type: enum value [MariaDB]`
  - **ListOffSiteBackups**
    - changes of response param
      - `+ backups.datastore.type: enum value [MariaDB]`
  - **ListOffSiteInstances**
    - changes of response param
      - `+ offsite_backup_instances.datastore.type: enum value [MariaDB]`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListMessageTrace**
    - changes of request param
      - `* msg_id: optional -> required`
  - **ListMessages**
    - changes of request param
      - `+ key`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListPorts**
    - changes of request param
      - `+ enable_efi`
    - changes of response param
      - `+ ports.enable_efi`
  - **CreatePort**
    - changes of response param
      - `+ port.enable_efi`
  - **ShowPort**
    - changes of response param
      - `+ port.enable_efi`
  - **UpdatePort**
    - changes of response param
      - `+ port.enable_efi`

# 3.1.48 2023-07-27

### HuaweiCloud SDK APIG

- _Features_
  - Support `APIG`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK BMS

- _Features_
  - Support `BMS`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DRS

- _Features_
  - Support the following interfaces：
    - `DownloadBatchCreateTemplate`
    - `ImportBatchCreateJobs`
    - `CopyJob`
    - `ShowMetering`
    - `ShowDirtyData`
    - `ShowComparePolicy`
    - `ShowHealthCompareJobList`
    - `ShowProgressData`
    - `ShowObjectMapping`
    - `ShowActions`
    - `ValidateJobName`
    - `ShowEnterpriseProject`
- _Bug Fix_
  - None
- _Change_
  - **DownloadDbObjectTemplate**
    - changes of request param
      - `+ file_import_db_level`
  - **UploadDbObjectTemplate**
    - changes of request param
      - `+ file_import_db_level`
  - **ListAsyncJobs**
    - changes of response param
      - `+ jobs.status: enum value [AUTO_PARAM_VALIDATE_SUCCESS,COMMIT_SUCCESS]`
      - `- jobs.status: enum value [ASYNC_JOB_CREATING,ASYNC_JOB_CREATE_FAILED,ASYNC_JOB_COMPLETED]`
  - **CreateJob**
    - changes of request param
      - `+ job.node_info.base_info`
    - changes of response param
      - `+ is_clone_job`
      - `+ create_time`
      - `+ name`
      - `+ id`
      - `+ status`
      - `+ job.is_clone_job`
  - **BatchCreateJobsAsync**
    - changes of request param
      - `+ jobs.node_info.base_info`
  - **ListAsyncJobDetail**
    - changes of response param
      - `+ jobs.support_import_file_resp`
      - `+ jobs.instance_features`
      - `+ jobs.task_version`
      - `+ jobs.node_info.base_info`
  - **UpdateBatchAsyncJobs**
    - changes of request param
      - `+ jobs.type: enum value [policy]`
      - `- jobs.type: enum value [policy_config]`
      - `+ jobs.params.node_info.base_info`
  - **ShowJobDetail**
    - changes of request param
      - `+ type: enum value [file]`
    - changes of response param
      - `+ job.support_import_file_resp`
      - `+ job.instance_features`
      - `+ job.task_version`
      - `+ job.node_info.base_info`
  - **UpdateJob**
    - changes of request param
      - `+ job.type: enum value [policy]`
      - `- job.type: enum value [policy_config]`
      - `+ job.params.node_info.base_info`

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **AttachShareBandwidth**
    - changes of response param
      - `+ publicip.vnic.vtep`
      - `+ publicip.vnic.vni`
      - `+ publicip.vnic.port_profile`
  - **DetachShareBandwidth**
    - changes of response param
      - `+ publicip.vnic.vtep`
      - `+ publicip.vnic.vni`
      - `+ publicip.vnic.port_profile`
  - **EnableNat64**
    - changes of response param
      - `+ publicip.vnic.vtep`
      - `+ publicip.vnic.vni`
      - `+ publicip.vnic.port_profile`
  - **DisableNat64**
    - changes of response param
      - `+ publicip.vnic.vtep`
      - `+ publicip.vnic.vni`
      - `+ publicip.vnic.port_profile`
  - **AttachBatchPublicIp**
    - changes of response param
      - `+ publicips.publicip.vnic.vtep`
      - `+ publicips.publicip.vnic.vni`
      - `+ publicips.publicip.vnic.port_profile`
  - **DetachBatchPublicIp**
    - changes of response param
      - `+ publicips.publicip.vnic.vtep`
      - `+ publicips.publicip.vnic.vni`
      - `+ publicips.publicip.vnic.port_profile`

### HuaweiCloud SDK ER

- _Features_
  - Support the following interfaces：
    - `BatchCreateResourceTags`
    - `ShowQuotas`
    - `ListFlowLogs`
    - `CreateFlowLog`
    - `ShowFlowLog`
    - `UpdateFlowLog`
    - `DeleteFlowLog`
    - `EnableFlowLog`
    - `DisableFlowLog`
- _Bug Fix_
  - None
- _Change_
  - **ListProjectTags**
    - changes of request param
      - `+ resource_type: enum value [ecn-attachment,connect-attachment,cfw-attachment]`
    - changes of response param
      - `+ tags`
  - **DeleteResourceTag**
    - changes of request param
      - `+ resource_type: enum value [ecn-attachment,connect-attachment,cfw-attachment]`
  - **ShowResourceTag**
    - changes of request param
      - `+ resource_type: enum value [ecn-attachment,connect-attachment,cfw-attachment]`
    - changes of response param
      - `+ tags`
  - **CreateResourceTag**
    - changes of request param
      - `+ resource_type: enum value [ecn-attachment,connect-attachment,cfw-attachment]`
  - **ListEnterpriseRouters**
    - changes of request param
      - `+ owned_by_self`
  - **ShowStaticRoute**
    - changes of response param
      - `+ route.attachments.priority`
  - **UpdateStaticRoute**
    - changes of response param
      - `+ route.attachments.priority`
  - **ListStaticRoutes**
    - changes of response param
      - `+ routes.attachments.priority`
  - **CreateStaticRoute**
    - changes of response param
      - `+ route.attachments.priority`
  - **ListEffectiveRoutes**
    - changes of response param
      - `+ routes.address_group_id`
      - `+ routes.next_hops.priority`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateTags**
    - changes of request param
      - `+ tags.key`
      - `+ tags.value`
      - `* tags: list<Kv> -> list<KvItem>`
  - **DeleteTags**
    - changes of request param
      - `+ tags.key`
      - `+ tags.value`
      - `* tags: list<Kv> -> list<KvItem>`
  - **ShowResInstanceInfo**
    - changes of request param
      - `+ matches.key`
      - `+ matches.value`
      - `* matches: list<Kv> -> list<KvItem>`
    - changes of response param
      - `+ resources.tags.key`
      - `+ resources.tags.value`
      - `* resources.tags: list<Kv> -> list<KvItem>`

### HuaweiCloud SDK GA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListRegions**
    - changes of response param
      - `+ regions`
      - `- area_regions`

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - Support the interface `ShowInstanceBiactiveRegions`
- _Bug Fix_
  - None
- _Change_
  - **ListConfigurations**
    - changes of response param
      - `+ quota`
      - `+ configurations.mode`
  - **ListConfigurationTemplates**
    - changes of response param
      - `+ quota`
      - `+ configurations.mode`
  - **ShowInstanceConfiguration**
    - changes of response param
      - `+ mode`
      - `+ id`
  - **ListConfigurationDatastores**
    - changes of response param
      - `+ datastores.mode`
  - **ShowQuotas**
    - changes of request param
      - `+ datastore_type`
      - `+ mode`
  - **ListInstances**
    - changes of response param
      - `+ instances.datastore.whole_version`

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - Support the interface `DownloadBackup`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the following interfaces：
    - `ListDeviceTunnels`
    - `AddTunnel`
    - `ShowDeviceTunnel`
    - `CloseDeviceTunnel`
    - `DeleteDeviceTunnel`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Kafka

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateInstanceByEngine**
    - changes of request param
      - `+ disk_encrypted_enable`
      - `+ disk_encrypted_key`

### HuaweiCloud SDK LTS

- _Features_
  - Support the interface `UpdateLogStream`
- _Bug Fix_
  - None
- _Change_
  - **UpdateLogGroup**
    - changes of request param
      - `+ tags`
  - **CreateLogGroup**
    - changes of request param
      - `+ tags`
  - **CreateLogStream**
    - changes of request param
      - `+ enterprise_project_name`
      - `+ ttl_in_days`
      - `+ tags`
      - `+ log_stream_name: enum value [lts-stream-13ci]`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowInstanceExtendProductInfo**
    - changes of response param
      - `+ monthly`
      - `+ hourly`
      - `- engine`
      - `- versions`
      - `- products`

### HuaweiCloud SDK RocketMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ValidateConsumedMessage**
    - changes of request param
      - `+ engine: enum value [reliability]`
  - **ListInstances**
    - changes of request param
      - `+ engine: enum value [reliability]`

### HuaweiCloud SDK SMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowConfigSetting**
    - changes of response param
      - `* configurations: string -> list<ConfigBody>`

# 3.1.47 2023-07-20

### HuaweiCloud SDK DLI

- _Features_
  - Support `DLI`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK GaussDBforopenGauss

- _Features_
  - Support `GaussDBforopenGauss`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK GaussDB

- _Features_
  - Support `GaussDB`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK GaussDBforNoSQL

- _Features_
  - Support `GaussDBforNoSQL`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RDS

- _Features_
  - Support `RDS`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DDS

- _Features_
  - Support `DDS`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CloudRTC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateIndividualStreamJob**
    - changes of request param
      - `- publish_param`
  - **UpdateIndividualStreamJob**
    - changes of request param
      - `- publish_param`
  - **CreateMixJob**
    - changes of request param
      - `- publish_param`

### HuaweiCloud SDK EIP

- _Features_
  - Support the following interfaces：
    - `AttachShareBandwidth`
    - `AttachBatchPublicIp`
    - `DetachShareBandwidth`
    - `DetachBatchPublicIp`
    - `EnableNat64`
    - `DisableNat64`
    - `ListBandwidth`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK ER

- _Features_
  - Support the following interfaces：
    - `BatchCreateResourceTags`
    - `ShowQuotas`
    - `ListFlowLogs`
    - `CreateFlowLog`
    - `ShowFlowLog`
    - `UpdateFlowLog`
    - `DeleteFlowLog`
    - `EnableFlowLog`
    - `DisableFlowLog`
- _Bug Fix_
  - None
- _Change_
  - **ListProjectTags**
    - changes of request param
      - `+ resource_type: enum value [ecn-attachment,connect-attachment,cfw-attachment]`
    - changes of response param
      - `+ tags`
  - **DeleteResourceTag**
    - changes of request param
      - `+ resource_type: enum value [ecn-attachment,connect-attachment,cfw-attachment]`
  - **ShowResourceTag**
    - changes of request param
      - `+ resource_type: enum value [ecn-attachment,connect-attachment,cfw-attachment]`
    - changes of response param
      - `+ tags`
  - **CreateResourceTag**
    - changes of request param
      - `+ resource_type: enum value [ecn-attachment,connect-attachment,cfw-attachment]`
  - **ListEnterpriseRouters**
    - changes of request param
      - `+ owned_by_self`
  - **ShowStaticRoute**
    - changes of response param
      - `+ route.attachments.priority`
  - **UpdateStaticRoute**
    - changes of response param
      - `+ route.attachments.priority`
  - **ListStaticRoutes**
    - changes of response param
      - `+ routes.attachments.priority`
  - **CreateStaticRoute**
    - changes of response param
      - `+ route.attachments.priority`
  - **ListEffectiveRoutes**
    - changes of response param
      - `+ routes.address_group_id`
      - `+ routes.next_hops.priority`

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the interface `DeleteBatchTask`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Kafka

- _Features_
  - Support the interfaces `ListTopicPartitions`, `ListTopicProducers`
- _Bug Fix_
  - None
- _Change_
  - **ListProducts**
    - changes of request param
      - `+ engine: enum value [kafka]`
  - **UpdateInstanceTopic**
    - changes of request param
      - `+ topics.topic_other_configs`
      - `+ topics.topic_desc`
  - **CreateInstanceTopic**
    - changes of request param
      - `+ topic_other_configs`
      - `+ topic_desc`
    - changes of response param
      - `+ id`
  - **ListInstanceTopics**
    - changes of request param
      - `- offset`
      - `- limit`
    - changes of response param
      - `+ topics.topic_other_configs`
      - `+ topics.topic_desc`
      - `+ topics.created_at`
  - **ListInstances**
    - changes of request param
      - `+ engine: enum value [kafka]`
  - **ResizeEngineInstance**
    - changes of request param
      - `+ engine: enum value [kafka]`

### HuaweiCloud SDK RabbitMQ

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowInstanceExtendProductInfo**
    - changes of request param
      - `+ engine: enum value [rabbitmq]`
    - changes of response param
      - `+ engine`
      - `+ versions`
      - `+ products`
      - `- monthly`
      - `- hourly`
  - **ListProducts**
    - changes of request param
      - `+ engine: enum value [rabbitmq]`
  - **ResizeEngineInstance**
    - changes of request param
      - `+ engine: enum value [rabbitmq]`
  - **ShowEngineInstanceExtendProductInfo**
    - changes of request param
      - `+ engine: enum value [rabbitmq]`

# 3.1.46 2023-07-13

### HuaweiCloud SDK CodeArtsBuild

- _Features_
  - Support `CodeArtsBuild`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Kafka

- _Features_
  - Support `Kafka`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RabbitMQ

- _Features_
  - Support `RabbitMQ`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK RocketMQ

- _Features_
  - Support `RocketMQ`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK SIS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **PushTranscriberJobs**
    - changes of request param
      - `+ Enterprise-Project-Id`

### HuaweiCloud SDK VPC

- _Features_
  - Support the following interfaces：
    - `ListApiVersion`
    - `NeutronListPorts`
    - `NeutronCreatePort`
    - `NeutronShowPort`
    - `NeutronUpdatePort`
    - `NeutronDeletePort`
    - `NeutronListNetworks`
    - `NeutronCreateNetwork`
    - `NeutronShowNetwork`
    - `NeutronUpdateNetwork`
    - `NeutronDeleteNetwork`
    - `NeutronListSubnets`
    - `NeutronCreateSubnet`
    - `NeutronShowSubnet`
    - `NeutronUpdateSubnet`
    - `NeutronDeleteSubnet`
    - `NeutronListRouters`
    - `NeutronCreateRouter`
    - `NeutronShowRouter`
    - `NeutronUpdateRouter`
    - `NeutronDeleteRouter`
    - `NeutronAddRouterInterface`
    - `NeutronRemoveRouterInterface`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.45 2023-07-06

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpgradeCluster**
    - changes of response param
      - `+ metadata`
      - `+ spec`
      - `- uid`

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDomainDetailByName**
    - changes of response param
      - `+ domain.sources.weight`
  - **ShowDomainFullConfig**
    - changes of response param
      - `+ configs.business_type`
      - `+ configs.service_area`
      - `+ configs.sources.weight`
  - **UpdateDomainFullConfig**
    - changes of request param
      - `+ configs.business_type`
      - `+ configs.service_area`
      - `+ configs.sources.weight`

### HuaweiCloud SDK EVS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateVolume**
    - changes of request param
      - `+ volume.iops`
      - `+ volume.throughput`
      - `+ volume.volume_type: enum value [GPSSD2,ESSD2]`

### HuaweiCloud SDK LTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateSqlAlarmRule**
    - changes of request param
      - `+ notification_save_rule.template_name`
  - **CreateSqlAlarmRule**
    - changes of request param
      - `+ notification_save_rule.template_name`
  - **UpdateKeywordsAlarmRule**
    - changes of request param
      - `+ notification_save_rule.template_name`
  - **CreateKeywordsAlarmRule**
    - changes of request param
      - `+ notification_save_rule.template_name`
  - **ListAccessConfig**
    - changes of response param
      - `+ log_split`
      - `+ binary_collect`
      - `+ result.log_split`
      - `+ result.binary_collect`
      - `+ result.access_config_type: enum value [K8S_CCE]`
      - `+ result.access_config_detail.stdout`
      - `+ result.access_config_detail.stderr`
      - `+ result.access_config_detail.pathType`
      - `+ result.access_config_detail.namespaceRegex`
      - `+ result.access_config_detail.podNameRegex`
      - `+ result.access_config_detail.containerNameRegex`
      - `+ result.access_config_detail.includeLabels`
      - `+ result.access_config_detail.excludeLabels`
      - `+ result.access_config_detail.includeEnvs`
      - `+ result.access_config_detail.excludeEnvs`
      - `+ result.access_config_detail.logLabels`
      - `+ result.access_config_detail.logEnvs`
      - `+ result.access_config_detail.includeK8sLabels`
      - `+ result.access_config_detail.excludeK8sLabels`
      - `+ result.access_config_detail.logK8s`
      - `* result.access_config_detail.format.single: object<AccessConfigFormatSingle> -> object<AccessConfigFormatSingleCreate>`
      - `* result.access_config_detail.format.multi: object<AccessConfigFormatMutil> -> object<AccessConfigFormatMutilCreate>`
      - `* result.access_config_detail.format: object<AccessConfigFormat> -> object<AccessConfigFormatCreate>`
      - `* result.access_config_detail.windows_log_info: object<AccessConfigWindowsLogInfo> -> object<AccessConfigWindowsLogInfoCreate>`
      - `* result.access_config_detail: object<AccessConfigDeatil> -> object<AccessConfigDeatilCreate>`
  - **UpdateAccessConfig**
    - changes of request param
      - `+ log_split`
      - `+ binary_collect`
      - `+ access_config_detail.stdout`
      - `+ access_config_detail.stderr`
      - `+ access_config_detail.pathType`
      - `+ access_config_detail.namespaceRegex`
      - `+ access_config_detail.podNameRegex`
      - `+ access_config_detail.containerNameRegex`
      - `+ access_config_detail.includeLabels`
      - `+ access_config_detail.excludeLabels`
      - `+ access_config_detail.includeEnvs`
      - `+ access_config_detail.excludeEnvs`
      - `+ access_config_detail.logLabels`
      - `+ access_config_detail.logEnvs`
      - `+ access_config_detail.includeK8sLabels`
      - `+ access_config_detail.excludeK8sLabels`
      - `+ access_config_detail.logK8s`
      - `* access_config_detail.format.single: object<AccessConfigFormatSingle> -> object<AccessConfigFormatSingleCreate>`
      - `* access_config_detail.format.multi: object<AccessConfigFormatMutil> -> object<AccessConfigFormatMutilCreate>`
      - `* access_config_detail.format: object<AccessConfigFormat> -> object<AccessConfigFormatCreate>`
      - `* access_config_detail.windows_log_info: object<AccessConfigWindowsLogInfo> -> object<AccessConfigWindowsLogInfoCreate>`
      - `* access_config_detail: object<AccessConfigDeatil> -> object<AccessConfigDeatilCreate>`
    - changes of response param
      - `+ log_split`
      - `+ binary_collect`
      - `+ access_config_type: enum value [K8S_CCE]`
      - `+ access_config_detail.stdout`
      - `+ access_config_detail.stderr`
      - `+ access_config_detail.pathType`
      - `+ access_config_detail.namespaceRegex`
      - `+ access_config_detail.podNameRegex`
      - `+ access_config_detail.containerNameRegex`
      - `+ access_config_detail.includeLabels`
      - `+ access_config_detail.excludeLabels`
      - `+ access_config_detail.includeEnvs`
      - `+ access_config_detail.excludeEnvs`
      - `+ access_config_detail.logLabels`
      - `+ access_config_detail.logEnvs`
      - `+ access_config_detail.includeK8sLabels`
      - `+ access_config_detail.excludeK8sLabels`
      - `+ access_config_detail.logK8s`
      - `* access_config_detail.format.single: object<AccessConfigFormatSingle> -> object<AccessConfigFormatSingleCreate>`
      - `* access_config_detail.format.multi: object<AccessConfigFormatMutil> -> object<AccessConfigFormatMutilCreate>`
      - `* access_config_detail.format: object<AccessConfigFormat> -> object<AccessConfigFormatCreate>`
      - `* access_config_detail.windows_log_info: object<AccessConfigWindowsLogInfo> -> object<AccessConfigWindowsLogInfoCreate>`
      - `* access_config_detail: object<AccessConfigDeatil> -> object<AccessConfigDeatilCreate>`
  - **CreateAccessConfig**
    - changes of request param
      - `+ binary_collect`
      - `+ log_split`
      - `+ access_config_type: enum value [K8S_CCE]`
      - `+ access_config_detail.stdout`
      - `+ access_config_detail.stderr`
      - `+ access_config_detail.pathType`
      - `+ access_config_detail.namespaceRegex`
      - `+ access_config_detail.podNameRegex`
      - `+ access_config_detail.containerNameRegex`
      - `+ access_config_detail.includeLabels`
      - `+ access_config_detail.excludeLabels`
      - `+ access_config_detail.includeEnvs`
      - `+ access_config_detail.excludeEnvs`
      - `+ access_config_detail.logLabels`
      - `+ access_config_detail.logEnvs`
      - `+ access_config_detail.includeK8sLabels`
      - `+ access_config_detail.excludeK8sLabels`
      - `+ access_config_detail.logK8s`
    - changes of response param
      - `+ log_split`
      - `+ binary_collect`
      - `+ access_config_type: enum value [K8S_CCE]`
      - `+ access_config_detail.stdout`
      - `+ access_config_detail.stderr`
      - `+ access_config_detail.pathType`
      - `+ access_config_detail.namespaceRegex`
      - `+ access_config_detail.podNameRegex`
      - `+ access_config_detail.containerNameRegex`
      - `+ access_config_detail.includeLabels`
      - `+ access_config_detail.excludeLabels`
      - `+ access_config_detail.includeEnvs`
      - `+ access_config_detail.excludeEnvs`
      - `+ access_config_detail.logLabels`
      - `+ access_config_detail.logEnvs`
      - `+ access_config_detail.includeK8sLabels`
      - `+ access_config_detail.excludeK8sLabels`
      - `+ access_config_detail.logK8s`
      - `* access_config_detail.format.single: object<AccessConfigFormatSingle> -> object<AccessConfigFormatSingleCreate>`
      - `* access_config_detail.format.multi: object<AccessConfigFormatMutil> -> object<AccessConfigFormatMutilCreate>`
      - `* access_config_detail.format: object<AccessConfigFormat> -> object<AccessConfigFormatCreate>`
      - `* access_config_detail.windows_log_info: object<AccessConfigWindowsLogInfo> -> object<AccessConfigWindowsLogInfoCreate>`
      - `* access_config_detail: object<AccessConfigDeatil> -> object<AccessConfigDeatilCreate>`
  - **DeleteAccessConfig**
    - changes of response param
      - `+ log_split`
      - `+ binary_collect`
      - `+ result.log_split`
      - `+ result.binary_collect`
      - `+ result.access_config_type: enum value [K8S_CCE]`
      - `+ result.access_config_detail.stdout`
      - `+ result.access_config_detail.stderr`
      - `+ result.access_config_detail.pathType`
      - `+ result.access_config_detail.namespaceRegex`
      - `+ result.access_config_detail.podNameRegex`
      - `+ result.access_config_detail.containerNameRegex`
      - `+ result.access_config_detail.includeLabels`
      - `+ result.access_config_detail.excludeLabels`
      - `+ result.access_config_detail.includeEnvs`
      - `+ result.access_config_detail.excludeEnvs`
      - `+ result.access_config_detail.logLabels`
      - `+ result.access_config_detail.logEnvs`
      - `+ result.access_config_detail.includeK8sLabels`
      - `+ result.access_config_detail.excludeK8sLabels`
      - `+ result.access_config_detail.logK8s`
      - `* result.access_config_detail.format.single: object<AccessConfigFormatSingle> -> object<AccessConfigFormatSingleCreate>`
      - `* result.access_config_detail.format.multi: object<AccessConfigFormatMutil> -> object<AccessConfigFormatMutilCreate>`
      - `* result.access_config_detail.format: object<AccessConfigFormat> -> object<AccessConfigFormatCreate>`
      - `* result.access_config_detail.windows_log_info: object<AccessConfigWindowsLogInfo> -> object<AccessConfigWindowsLogInfoCreate>`
      - `* result.access_config_detail: object<AccessConfigDeatil> -> object<AccessConfigDeatilCreate>`

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RunCreateVideoModerationJob**
    - changes of request param
      - `+ data.language`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListSecurityGroupRules**
    - changes of request param
      - `+ remote_ip_prefix`

# 3.1.44 2023-06-29

### HuaweiCloud SDK IdentityCenter

- _Features_
  - Support `IdentityCenter`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK WorkspaceApp

- _Features_
  - Support `WorkspaceApp`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Config

- _Features_
  - Support `Config`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK AOS

- _Features_
  - Support the interface `ListTemplateVersions`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DCS

- _Features_
  - Support the interfaces `ExecuteClusterSwitchover`, `ShowJobInfo`
- _Bug Fix_
  - None
- _Change_
  - **ListConfigTemplates**
    - changes of response param
      - `+ config_templates.created_at`
  - **CreateInstance**
    - changes of request param
      - `+ template_id`

### HuaweiCloud SDK GA

- _Features_
  - Support the following interfaces：
    - `ListIpGroups`
    - `CreateIpGroup`
    - `ShowIpGroup`
    - `UpdateIpGroup`
    - `DeleteIpGroup`
    - `AddIpGroupIp`
    - `RemoveIpGroupIp`
    - `AssociateListener`
    - `DisassociateListener`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateCommand**
    - changes of response param
      - `+ error_msg`
      - `+ error_code`
  - **ListProperties**
    - changes of response param
      - `+ error_msg`
      - `+ error_code`
  - **UpdateProperties**
    - changes of response param
      - `+ error_msg`
      - `+ error_code`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAddressGroup**
    - changes of response param
      - `+ address_group.tags`
  - **UpdateAddressGroup**
    - changes of response param
      - `+ address_group.tags`
  - **ListAddressGroup**
    - changes of response param
      - `+ address_groups.tags`
  - **CreateAddressGroup**
    - changes of response param
      - `+ address_group.tags`

### HuaweiCloud SDK VPCEP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **AddOrRemoveServicePermissions**
    - changes of request param
      - `+ permission_type`
    - changes of response param
      - `+ permission_type`
  - **UpdateEndpointService**
    - changes of response param
      - `- cidr_type`
  - **ListServicePermissionsDetails**
    - changes of response param
      - `+ permissions.permission_type`
  - **BatchAddEndpointServicePermissions**
    - changes of request param
      - `+ permission_type`
    - changes of response param
      - `+ permissions.permission_type`
  - **BatchRemoveEndpointServicePermissions**
    - changes of response param
      - `+ permissions.permission_type`
  - **UpdateEndpointServicePermissionDesc**
    - changes of response param
      - `+ permissions.permission_type`
  - **CreateEndpointService**
    - changes of response param
      - `- cidr_type`

# 3.1.43 2023-06-21

### HuaweiCloud SDK CloudRTC

- _Features_
  - Support the service `CloudRTC`.
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DNS

- _Features_
  - Support the interface `ShowDomainQuota`
- _Bug Fix_
  - None
- _Change_
  - **ShowRecordSetWithLine**
    - changes of response param
      - `+ bundle`
  - **SetRecordSetsStatus**
    - changes of response param
      - `+ bundle`
  - **BatchUpdateRecordSetWithLine**
    - changes of response param
      - `+ bundle`
      - `+ recordsets.bundle`
  - **BatchDeleteRecordSetWithLine**
    - changes of response param
      - `+ bundle`
      - `+ recordsets.bundle`
  - **CreateRecordSetWithBatchLines**
    - changes of response param
      - `+ bundle`
      - `+ recordsets.bundle`

### HuaweiCloud SDK DWS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListAvailableDisasterClusters**
    - changes of request param
      - `* primary_cluster_id: optional -> required`
      - `* standby_az_code: optional -> required`

# 3.1.42 2023-06-15

### HuaweiCloud SDK Live

- _Features_
    - Support Live service.
- _Bug Fix_
    - None
- _Change_
    - None

### HuaweiCloud SDK DWS

- _Features_
  - Support the following interfaces：
    - `ShowDatabaseAuthority`
    - `UpdateDatabaseAuthority`
    - `SyncIamUsers`
    - `ListDatabaseUsers`
    - `ShowDatabaseUser`
    - `UpdateDatabaseUserInfo`
    - `ShowDisasterProgress`
- _Bug Fix_
  - None
- _Change_
  - **UpdateAlarmSub**
    - changes of request param
      - `* enable: string -> int32`
    - changes of response param
      - `* enable: string -> int32`
  - **DeleteAlarmSub**
    - changes of response param
      - `* enable: string -> int32`
  - **ShowDisasterDetail**
    - changes of response param
      - `+ disaster_recovery`
      - `- start_time`
      - `- dr_type`
      - `- create_time`
      - `- name`
      - `- standby_cluster`
      - `- id`
      - `- dr_sync_period`
      - `- status`
      - `- primary_cluster`
  - **CreateAlarmSub**
    - changes of request param
      - `* enable: string -> int32`
    - changes of response param
      - `* enable: string -> int32`
  - **ListAlarmSubs**
    - changes of response param
      - `* alarm_subscriptions.enable: string -> int32`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateBatchTask**
    - changes of response param
      - `- task_progress.device_in_progress`
      - `- task_progress.rejected`
  - **ListBatchTasks**
    - changes of response param
      - `- batchtasks.task_progress.device_in_progress`
      - `- batchtasks.task_progress.rejected`
  - **ShowBatchTask**
    - changes of response param
      - `- batchtask.task_progress.device_in_progress`
      - `- batchtask.task_progress.rejected`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeGeneralText**
    - changes of request param
      - `+ single_orientation_mode`

### HuaweiCloud SDK SIS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowVocabularies**
    - changes of request param
      - `+ offset`
      - `+ limit`

# 3.1.41 2023-06-08

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowNode**
    - changes of response param
      - `+ spec.extendParam.kube-reserved-mem`
      - `+ spec.extendParam.system-reserved-mem`
  - **UpdateNode**
    - changes of response param
      - `+ spec.extendParam.kube-reserved-mem`
      - `+ spec.extendParam.system-reserved-mem`
  - **DeleteNode**
    - changes of response param
      - `+ spec.extendParam.kube-reserved-mem`
      - `+ spec.extendParam.system-reserved-mem`
  - **CreateNode**
    - changes of request param
      - `+ spec.extendParam.kube-reserved-mem`
      - `+ spec.extendParam.system-reserved-mem`
    - changes of response param
      - `+ spec.extendParam.kube-reserved-mem`
      - `+ spec.extendParam.system-reserved-mem`
  - **ListNodes**
    - changes of response param
      - `+ items.spec.extendParam.kube-reserved-mem`
      - `+ items.spec.extendParam.system-reserved-mem`
  - **ShowNodePool**
    - changes of response param
      - `+ spec.type: enum value [pm]`
      - `+ spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `+ spec.nodeTemplate.extendParam.system-reserved-mem`
  - **UpdateNodePool**
    - changes of response param
      - `+ spec.type: enum value [pm]`
      - `+ spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `+ spec.nodeTemplate.extendParam.system-reserved-mem`
  - **DeleteNodePool**
    - changes of response param
      - `+ spec.type: enum value [pm]`
      - `+ spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `+ spec.nodeTemplate.extendParam.system-reserved-mem`
  - **CreateNodePool**
    - changes of request param
      - `+ spec.type: enum value [pm]`
      - `+ spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `+ spec.nodeTemplate.extendParam.system-reserved-mem`
    - changes of response param
      - `+ spec.type: enum value [pm]`
      - `+ spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `+ spec.nodeTemplate.extendParam.system-reserved-mem`
  - **ListNodePools**
    - changes of response param
      - `+ items.spec.type: enum value [pm]`
      - `+ items.spec.nodeTemplate.extendParam.kube-reserved-mem`
      - `+ items.spec.nodeTemplate.extendParam.system-reserved-mem`

### HuaweiCloud SDK DNS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListRecordSetsByZone**
    - changes of request param
      - `+ search_mode`
  - **CreateRecordSet**
    - changes of request param
      - `* body: object<CreateRecordSetReq> -> object<CreateRecordSetRequestBody>`
  - **CreateRecordSetWithLine**
    - changes of request param
      - `* body: object<CreateRecordSetWithLineReq> -> object<CreateRecordSetWithLineRequestBody>`
  - **ListPublicZones**
    - changes of request param
      - `+ search_mode`
  - **ListPrivateZones**
    - changes of request param
      - `+ search_mode`
  - **ListRecordSets**
    - changes of request param
      - `+ search_mode`

### HuaweiCloud SDK ECS

- _Features_
  - Support the interface `ChangeServerChargeMode`
- _Bug Fix_
  - None
- _Change_
  - **CreateServers**
    - changes of request param
      - `+ server.nics.allowed_address_pairs`
  - **CreatePostPaidServers**
    - changes of request param
      - `+ server.nics.allowed_address_pairs`

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListListeners**
    - changes of response param
      - `+ listeners.port_ranges`
  - **CreateListener**
    - changes of request param
      - `+ listener.port_ranges`
    - changes of response param
      - `+ listener.port_ranges`
  - **ShowListener**
    - changes of response param
      - `+ listener.port_ranges`
  - **UpdateListener**
    - changes of response param
      - `+ listener.port_ranges`
  - **ListPools**
    - changes of response param
      - `+ pools.any_port_enable`
  - **CreatePool**
    - changes of request param
      - `+ pool.any_port_enable`
    - changes of response param
      - `+ pool.any_port_enable`
  - **ShowPool**
    - changes of response param
      - `+ pool.any_port_enable`
  - **UpdatePool**
    - changes of response param
      - `+ pool.any_port_enable`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the following interfaces：
    - `UpdateFuncSnapshot`
    - `ShowFuncSnapshotState`
    - `ShowResInstanceInfo`
    - `ShowProjectTagsList`
    - `CreateTags`
    - `DeleteTags`
    - `CreateVpcEndpoint`
    - `DeleteVpcEndpoint`
- _Bug Fix_
  - None
- _Change_
  - **ListStatistics**
    - changes of response param
      - `* count.value: int32 -> number`

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the interfaces `RetryBatchTask`, `StopBatchTask`
- _Bug Fix_
  - None
- _Change_
  - **CreateBatchTask**
    - changes of response param
      - `+ task_progress.removed`
      - `+ task_progress.device_in_progress`
      - `+ task_progress.rejected`
  - **ListBatchTasks**
    - changes of response param
      - `+ batchtasks.task_progress.removed`
      - `+ batchtasks.task_progress.device_in_progress`
      - `+ batchtasks.task_progress.rejected`
  - **ShowBatchTask**
    - changes of request param
      - `+ task_detail_status`
      - `+ target`
    - changes of response param
      - `+ batchtask.task_progress.removed`
      - `+ batchtask.task_progress.device_in_progress`
      - `+ batchtask.task_progress.rejected`

### HuaweiCloud SDK TMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListResource**
    - changes of response param
      - `+ resources.tags`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAddressGroup**
    - changes of response param
      - `+ address_group.enterprise_project_id`
  - **UpdateAddressGroup**
    - changes of response param
      - `+ address_group.enterprise_project_id`
  - **ListAddressGroup**
    - changes of request param
      - `+ enterprise_project_id`
    - changes of response param
      - `+ address_groups.enterprise_project_id`
  - **CreateAddressGroup**
    - changes of request param
      - `+ address_group.enterprise_project_id`
    - changes of response param
      - `+ address_group.enterprise_project_id`

# 3.1.40 2023-06-01

### HuaweiCloud SDK CBR

- _Features_
  - Support the interface `ShowSummary`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowAddonInstance**
    - changes of response param
      - `+ metadata.alias`
      - `* metadata: object<Metadata> -> object<AddonMetadata>`
  - **UpdateAddonInstance**
    - changes of request param
      - `+ metadata.alias`
      - `* metadata: object<Metadata> -> object<AddonMetadata>`
    - changes of response param
      - `+ metadata.alias`
      - `* metadata: object<Metadata> -> object<AddonMetadata>`
  - **CreateAddonInstance**
    - changes of request param
      - `+ metadata.alias`
      - `* metadata: object<Metadata> -> object<AddonMetadata>`
    - changes of response param
      - `+ metadata.alias`
      - `* metadata: object<Metadata> -> object<AddonMetadata>`
  - **ListAddonInstances**
    - changes of response param
      - `+ items.metadata.alias`
      - `* items.metadata: object<Metadata> -> object<AddonMetadata>`
  - **ListAddonTemplates**
    - changes of response param
      - `+ items.metadata.alias`
      - `* items.metadata: object<Metadata> -> object<AddonMetadata>`

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowLogs**
    - changes of request param
      - `+ start_time`
      - `+ end_time`
      - `- query_date`
  - **ShowDomainFullConfig**
    - changes of request param
      - `+ show_special_configs`
    - changes of response param
      - `- configs.error_code_cache.code: enum value [400,403,404,405,414,500,501,502,503,504]`
      - `+ configs.flexible_origin.back_sources.http_port`
      - `+ configs.flexible_origin.back_sources.https_port`
  - **UpdateDomainFullConfig**
    - changes of request param
      - `- configs.error_code_cache.code: enum value [400,403,404,405,414,500,501,502,503,504]`
      - `+ configs.flexible_origin.back_sources.http_port`
      - `+ configs.flexible_origin.back_sources.https_port`

### HuaweiCloud SDK ELB

- _Features_
  - Support the interfaces `DeleteLoadBalancerForce`, `DeleteListenerForce`, `BatchUpdateMembers`
- _Bug Fix_
  - None
- _Change_
  - **ShowQuota**
    - changes of response param
      - `+ quota.condition_per_policy`
      - `+ quota.listeners_per_pool`
      - `+ quota.listeners_per_loadbalancer`
      - `* quota.ipgroup_bindings: string -> int32`
      - `* quota.ipgroup_max_length: string -> int32`
  - **ShowLoadBalancer**
    - changes of response param
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
  - **UpdateLoadBalancer**
    - changes of request param
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
    - changes of response param
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
  - **ListListeners**
    - changes of request param
      - `+ protection_status`
    - changes of response param
      - `+ listeners.protection_status`
      - `+ listeners.protection_reason`
      - `+ listeners.gzip_enable`
  - **CreateListener**
    - changes of request param
      - `+ listener.protection_status`
      - `+ listener.protection_reason`
      - `+ listener.gzip_enable`
    - changes of response param
      - `+ listener.protection_status`
      - `+ listener.protection_reason`
      - `+ listener.gzip_enable`
  - **ShowListener**
    - changes of response param
      - `+ listener.protection_status`
      - `+ listener.protection_reason`
      - `+ listener.gzip_enable`
  - **UpdateListener**
    - changes of request param
      - `+ listener.protection_status`
      - `+ listener.protection_reason`
      - `+ listener.gzip_enable`
    - changes of response param
      - `+ listener.protection_status`
      - `+ listener.protection_reason`
      - `+ listener.gzip_enable`
  - **ListPools**
    - changes of request param
      - `+ protection_status`
    - changes of response param
      - `+ pools.protection_status`
      - `+ pools.protection_reason`
  - **CreatePool**
    - changes of request param
      - `+ pool.protection_status`
      - `+ pool.protection_reason`
    - changes of response param
      - `+ pool.protection_status`
      - `+ pool.protection_reason`
  - **ShowPool**
    - changes of response param
      - `+ pool.protection_status`
      - `+ pool.protection_reason`
  - **UpdatePool**
    - changes of request param
      - `+ pool.protection_status`
      - `+ pool.protection_reason`
    - changes of response param
      - `+ pool.protection_status`
      - `+ pool.protection_reason`
  - **UpdateMember**
    - changes of request param
      - `+ member.protocol_port`
  - **ListLoadBalancers**
    - changes of request param
      - `+ protection_status`
      - `+ global_eips`
    - changes of response param
      - `+ loadbalancers.protection_status`
      - `+ loadbalancers.protection_reason`
  - **CreateLoadBalancer**
    - changes of request param
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
    - changes of response param
      - `+ loadbalancer.protection_status`
      - `+ loadbalancer.protection_reason`
  - **ListL7Policies**
    - changes of response param
      - `+ l7policies.redirect_pools_extend_config`
      - `- l7policies.redirect_pools_config`
  - **CreateL7Policy**
    - changes of request param
      - `+ l7policy.redirect_pools_extend_config`
      - `- l7policy.redirect_pools_config`
    - changes of response param
      - `+ l7policy.redirect_pools_extend_config`
      - `- l7policy.redirect_pools_config`
  - **ShowL7Policy**
    - changes of response param
      - `+ l7policy.redirect_pools_extend_config`
      - `- l7policy.redirect_pools_config`
  - **UpdateL7Policy**
    - changes of request param
      - `+ l7policy.redirect_pools_extend_config`
      - `- l7policy.redirect_pools_config`
    - changes of response param
      - `+ l7policy.redirect_pools_extend_config`
      - `- l7policy.redirect_pools_config`

### HuaweiCloud SDK SMN

- _Features_
  - Support the following interfaces：
    - `UpdateSubscription`
    - `ListLogtank`
    - `CreateLogtank`
    - `UpdateLogtank`
    - `DeleteLogtank`
- _Bug Fix_
  - None
- _Change_
  - **ListTopicDetails**
    - changes of response param
      - `+ topic_id`
  - **ListTopics**
    - changes of request param
      - `+ topic_id`
    - changes of response param
      - `+ topics.topic_id`
  - **ListTopicAttributes**
    - changes of response param
      - `+ attributes.access_policy`
      - `+ attributes.introduction`
      - `- attributes.Version`
      - `- attributes.Id`
      - `- attributes.Statement`
  - **AddSubscription**
    - changes of request param
      - `+ extension`

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateAssetByFileUpload**
    - changes of request param
      - `+ review.interval`
      - `+ review.politics`
      - `+ review.terrorism`
      - `+ review.porn`
  - **PublishAssetFromObs**
    - changes of request param
      - `+ review.interval`
      - `+ review.politics`
      - `+ review.terrorism`
      - `+ review.porn`
  - **CreateAssetReviewTask**
    - changes of request param
      - `+ review.interval`
      - `+ review.politics`
      - `+ review.terrorism`
      - `+ review.porn`
    - changes of response param
      - `+ review.interval`
      - `+ review.politics`
      - `+ review.terrorism`
      - `+ review.porn`
  - **UploadMetaDataByUrl**
    - changes of request param
      - `+ upload_metadatas.review.interval`
      - `+ upload_metadatas.review.politics`
      - `+ upload_metadatas.review.terrorism`
      - `+ upload_metadatas.review.porn`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateVpcPeering**
    - changes of request param
      - `+ peering.description`

# 3.1.39 2023-05-25

### HuaweiCloud SDK CBR

- _Features_
  - Support the following interfaces：
    - `ImportCheckpoint`
    - `ListExternalVault`
    - `BatchUpdateVault`
    - `SetVaultResource`
    - `ShowMetadata`
    - `CheckAgent`
    - `ListProjects`
    - `ListDomainProjects`
    - `ShowDomain`
    - `ShowMigrateStatus`
    - `MigrateDomain`
    - `ShowStorageUsage`
    - `UpdateOrder`
    - `CreatePostPaidVault`
    - `UpdateBackup`
- _Bug Fix_
  - None
- _Change_
  - **CreateVault**
    - changes of request param
      - `+ vault.threshold`
      - `+ vault.smn_notify`
      - `+ vault.backup_name_prefix`
      - `+ vault.demand_billing`
    - changes of response param
      - `+ vault.backup_name_prefix`
      - `+ vault.demand_billing`
      - `+ vault.cbc_delete_count`
      - `+ vault.frozen`

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowCluster**
    - changes of response param
      - `+ metadata.alias`
  - **UpdateCluster**
    - changes of request param
      - `+ metadata`
    - changes of response param
      - `+ metadata.alias`
  - **DeleteCluster**
    - changes of response param
      - `+ metadata.alias`
  - **MigrateNode**
    - changes of request param
      - `+ spec.runtime`
    - changes of response param
      - `+ spec.runtime`
  - **CreateCluster**
    - changes of request param
      - `+ metadata.alias`
    - changes of response param
      - `+ metadata.alias`
  - **ListClusters**
    - changes of response param
      - `+ items.metadata.alias`

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDomainDetailByName**
    - changes of response param
      - `+ domain.domain_name`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListMigrationTask**
    - changes of response param
      - `- task_name`
      - `- target_instance_id`
      - `- target_instance_address`
      - `- target_instance_name`
      - `- migrate_type`
      - `- created_at`
      - `- source_instance_id`
      - `- task_id`
      - `- data_source`
      - `- migration_method`
      - `- source_instance_name`
      - `- status`
  - **ListConfigTemplates**
    - changes of response param
      - `* template_num: number -> integer`
  - **ListInstances**
    - changes of response param
      - `+ instances.updated_at`
  - **ListBackgroundTask**
    - changes of response param
      - `- updated_at`
      - `- created_at`
      - `- status`
  - **ListFlavors**
    - changes of response param
      - `+ flavors.flavors_available_zones.unit`
      - `+ flavors.flavors_available_zones.available_zones`

### HuaweiCloud SDK ECS

- _Features_
  - Support the interface `ListFlavorSellPolicies`
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
  - **ListPublicipsByTags**
    - changes of response param
      - `+ resources.resource_detail`
      - `- resources.resouce_detail`
  - **AddPublicipsIntoSharedBandwidth**
    - changes of response param
      - `+ bandwidth.enable_bandwidth_rules`
      - `+ bandwidth.rule_quota`
      - `+ bandwidth.bandwidth_rules`

### HuaweiCloud SDK IAM

- _Features_
  - Support the interfaces `AssociateRoleToAgencyOnEnterpriseProject`, `RevokeRoleFromAgencyOnEnterpriseProject`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the interfaces `CreateVideoObjectMaskingTask`, `ShowVideoObjectMaskingTask`

### HuaweiCloud SDK MSGSMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowSignatureFile**
    - changes of response param
      - `+ file_desc`
  - **UpdateApp**
    - changes of response param
      - `- app_secret`

### HuaweiCloud SDK RMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowPolicyAssignment**
    - changes of response param
      - `+ created_by`
  - **UpdatePolicyAssignment**
    - changes of response param
      - `+ created_by`
  - **ShowAggregatePolicyAssignmentDetail**
    - changes of response param
      - `+ created_by`
  - **CreatePolicyAssignments**
    - changes of response param
      - `+ created_by`
  - **ListPolicyAssignments**
    - changes of response param
      - `+ created_by`
      - `+ value.created_by`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateVpc**
    - changes of request param
      - `+ vpc.tags`
  - **CreateSubnet**
    - changes of request param
      - `+ subnet.tags`
    - **ShowAddressGroup**
    - changes of response param
      - `+ address_group.max_capacity`
      - `+ address_group.status`
      - `+ address_group.status_message`
  - **UpdateAddressGroup**
    - changes of request param
      - `+ address_group.max_capacity`
    - changes of response param
      - `+ address_group.max_capacity`
      - `+ address_group.status`
      - `+ address_group.status_message`
  - **ListAddressGroup**
    - changes of response param
      - `+ address_groups.max_capacity`
      - `+ address_groups.status`
      - `+ address_groups.status_message`
  - **CreateAddressGroup**
    - changes of request param
      - `+ address_group.max_capacity`
    - changes of response param
      - `+ address_group.max_capacity`
      - `+ address_group.status`
      - `+ address_group.status_message`

### HuaweiCloud SDK VPCEP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListServiceDescribeDetails**
    - changes of response param
      - `+ enable_policy`
  - **ListServiceDetails**
    - changes of response param
      - `- vip_port_id`
  - **UpdateEndpointService**
    - changes of request param
      - `- vip_port_id`
    - changes of response param
      - `- vip_port_id`
  - **ListServicePublicDetails**
    - changes of response param
      - `+ endpoint_services.enable_policy`
  - **CreateEndpointService**
    - changes of request param
      - `- vip_port_id`
    - changes of response param
      - `- vip_port_id`
  - **ListEndpointService**
    - changes of response param
      - `- endpoint_services.vip_port_id`

# 3.1.38 2023-05-18

### HuaweiCloud SDK CBR

- _Features_
  - Support the following interfaces：
    - `AddAgentPath`
    - `ShowAgent`
    - `UpdateAgent`
    - `UnregisterAgent`
    - `ListAgent`
    - `RegisterAgent`
    - `RemoveAgentPath`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowNode**
    - changes of response param
      - `+ status.lastProbeTime`
  - **UpdateNode**
    - changes of response param
      - `+ status.lastProbeTime`
  - **DeleteNode**
    - changes of response param
      - `+ status.lastProbeTime`
  - **CreateNode**
    - changes of response param
      - `+ status.lastProbeTime`
  - **ListNodes**
    - changes of response param
      - `+ items.status.lastProbeTime`

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateRefreshTasks**
    - changes of request param
      - `* refresh_task.mode: boolean -> string`
  - **ShowDomainFullConfig**
    - changes of response param
      - `+ configs.flexible_origin`
      - `+ configs.slice_etag_status`
      - `+ configs.origin_receive_timeout`
      - `+ configs.remote_auth`
      - `+ configs.websocket`
      - `+ configs.video_seek`
      - `+ configs.request_limit_rules`
      - `+ configs.url_auth.sign_method`
      - `+ configs.url_auth.match_type`
      - `+ configs.url_auth.key`
      - `+ configs.url_auth.backup_key`
      - `+ configs.url_auth.sign_arg`
      - `+ configs.https.expire_time`
      - `+ configs.https.certificate_type`
      - `+ configs.https.ocsp_stapling_status`
      - `+ configs.sources.obs_bucket_type`
      - `+ configs.compress.file_type`
      - `+ configs.user_agent_filter.ua_list`
  - **UpdateDomainFullConfig**
    - changes of request param
      - `+ configs.flexible_origin`
      - `+ configs.slice_etag_status`
      - `+ configs.origin_receive_timeout`
      - `+ configs.remote_auth`
      - `+ configs.websocket`
      - `+ configs.video_seek`
      - `+ configs.request_limit_rules`
      - `+ configs.url_auth.sign_method`
      - `+ configs.url_auth.match_type`
      - `+ configs.url_auth.backup_key`
      - `+ configs.url_auth.sign_arg`
      - `+ configs.https.certificate_type`
      - `+ configs.https.ocsp_stapling_status`
      - `+ configs.sources.obs_bucket_type`
      - `+ configs.compress.file_type`
      - `+ configs.user_agent_filter.ua_list`
  - **ShowDomainDetailByName**
    - changes of response param
      - `+ domain.sources.obs_bucket_type`

### HuaweiCloud SDK CSE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpgradeEngine**
    - changes of response param
      - `+ jobId`
      - `- job_id`
  - **RetryEngine**
    - changes of response param
      - `+ jobId`
      - `- job_id`
  - **DownloadKie**
    - changes of response param
      - `+ data.id`
  - **CreateEngine**
    - changes of response param
      - `+ jobId`
      - `- job_id`
  - **DeleteEngine**
    - changes of response param
      - `+ jobId`
      - `- job_id`

### HuaweiCloud SDK DWS

- _Features_
  - Support the interfaces `ListAvailableDisasterClusters`, `CheckDisasterName`, `ShowDisasterDetail`, `UpdateDisasterInfo`
- _Bug Fix_
  - None
- _Change_
  - **CreateCluster**
    - changes of request param
      - `+ cluster.tags`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateServers**
    - changes of request param
      - `+ server.root_volume.metadata`
      - `- server.root_volume.extendparam.__system__encrypted`
      - `- server.root_volume.extendparam.__system__cmkid`
      - `+ server.data_volumes.delete_on_termination`
  - **CreatePostPaidServers**
    - changes of request param
      - `+ server.data_volumes.delete_on_termination`
      - `+ server.root_volume.metadata`
      - `- server.root_volume.extendparam.__system__encrypted`
      - `- server.root_volume.extendparam.__system__cmkid`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **BroadcastMessage**
    - changes of request param
      - `+ ttl`
      - `+ message_id`
  - **ShowDeviceGroup**
    - changes of response param
      - `+ dynamic_group_rule`
      - `+ group_type`
  - **UpdateDeviceGroup**
    - changes of response param
      - `+ dynamic_group_rule`
      - `+ group_type`
  - **SearchDevices**
    - changes of response param
      - `+ devices.groups`
  - **AddDeviceGroup**
    - changes of request param
      - `+ group_type`
      - `+ dynamic_group_rule`
    - changes of response param
      - `+ dynamic_group_rule`
      - `+ group_type`
  - **ListDeviceGroups**
    - changes of request param
      - `+ group_type`
      - `+ name`
    - changes of response param
      - `+ device_groups.group_type`
      - `* device_groups: list<DeviceGroupResponsSummery> -> list<DeviceGroupResponseSummary>`

# 3.1.37 2023-05-11

### HuaweiCloud SDK MSGSMS

- _Features_
  - Support the service `MSG&SMS`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK AOS

- _Features_
  - Support the interface `ContinueDeployStack`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CBR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowVaultResourceInstances**
    - changes of response param
      - `* resources.resource_detail: list<Vault> -> object<InstancesResourceDetail>`
  - **ListPolicies**
    - changes of response param
      - `+ policies.operation_definition.full_backup_interval`
  - **CreatePolicy**
    - changes of request param
      - `+ policy.operation_definition.full_backup_interval`
    - changes of response param
      - `+ policy.operation_definition.full_backup_interval`
  - **ShowPolicy**
    - changes of response param
      - `+ policy.operation_definition.full_backup_interval`
  - **UpdatePolicy**
    - changes of request param
      - `+ policy.operation_definition.full_backup_interval`
    - changes of response param
      - `+ policy.operation_definition.full_backup_interval`
  - **CreateVault**
    - changes of request param
      - `- vault.billing.extra_info`

### HuaweiCloud SDK ECS

- _Features_
  - Support the interface `NovaAttachInterface`
- _Bug Fix_
  - None
- _Change_
  - **ReinstallServerWithoutCloudInit**
    - changes of request param
      - `+ os-reinstall.metadata`
  - **ChangeServerOsWithoutCloudInit**
    - changes of request param
      - `+ os-change.metadata`
  - **ReinstallServerWithCloudInit**
    - changes of request param
      - `+ os-reinstall.metadata.__system__encrypted`
      - `+ os-reinstall.metadata.__system__cmkid`
  - **ChangeServerOsWithCloudInit**
    - changes of request param
      - `+ os-change.metadata.__system__encrypted`
      - `+ os-change.metadata.__system__cmkid`
  - **CreateServers**
    - changes of request param
      - `+ server.root_volume.extendparam.__system__encrypted`
      - `+ server.root_volume.extendparam.__system__cmkid`
  - **CreatePostPaidServers**
    - changes of request param
      - `+ server.root_volume.extendparam.__system__encrypted`
      - `+ server.root_volume.extendparam.__system__cmkid`

### HuaweiCloud SDK Image

- _Features_
  - Support the interfaces `CreateVideoTaggingMediaTask`, `ShowVideoTaggingMediaTask`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListImages**
    - changes of request param
      - `+ __imagetype: enum value [market]`

### HuaweiCloud SDK LTS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **UpdateAomMappingRules**
    - changes of request param
      - `* body: object<AomMappingRequestInfo> -> object<UpdateAomMappingRequest>`

# 3.1.36 2023-04-27

### HuaweiCloud SDK CBR

- _Features_
    - Support Cloud Backup and Recovery service.
- _Bug Fix_
    - None
- _Change_
    - None

### HuaweiCloud SDK LTS

- _Features_
    - Support `Log Tank Service`.
- _Bug Fix_
    - None
- _Change_
    - None

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDomainFullConfig**
    - changes of response param
      - `+ configs.ipv6_accelerate`
      - `+ configs.origin_range_status`

### HuaweiCloud SDK CFW

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListIpsProtectModeUsingPost**
    - changes of response param
      - `+ data`
      - `- object_id`
      - `- status`

### HuaweiCloud SDK CSMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListResourceInstances**
    - changes of response param
      - `+ resources.sys_tags`

### HuaweiCloud SDK DCS

- _Features_
  - Support the interfaces `ResetPassword`, `UpdateInstanceBandwidth`, `ListConfigTemplates`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the interfaces `RunQueryCustomTags`, `RunDeleteCustomTags`

### HuaweiCloud SDK KMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListKeys**
    - changes of response param
      - `+ key_details.partition_type`
  - **ListKeyDetail**
    - changes of response param
      - `+ key_info.partition_type`
  - **ListRetirableGrants**
    - changes of response param
      - `+ total`
  - **ListKmsByTags**
    - changes of response param
      - `+ resources.resource_detail.partition_type`

### HuaweiCloud SDK SMS

- _Features_
  - Support the following interfaces：
    - `ListApiVersion`
    - `ShowApiVersion`
    - `ShowConfig`
    - `UpdateNetworkCheckInfo`
    - `ShowConfigSetting`
    - `UploadSpecialConfigurationSetting`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.35 2023-04-20

### HuaweiCloud SDK AOS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **GetStackTemplate**
    - changes of request param
      - `- executor`
  - **ListStackEvents**
    - changes of request param
      - `- executor`
  - **ListStackOutputs**
    - changes of request param
      - `- executor`
  - **DeleteStack**
    - changes of request param
      - `- executor`
  - **DeleteExecutionPlan**
    - changes of request param
      - `- executor`
  - **ApplyExecutionPlan**
    - changes of request param
      - `- executor`
  - **GetExecutionPlan**
    - changes of request param
      - `- executor`
  - **ListStackResources**
    - changes of request param
      - `- executor`
  - **ListExecutionPlans**
    - changes of request param
      - `- executor`
  - **CreateExecutionPlan**
    - changes of request param
      - `- executor`
  - **GetExecutionPlanMetadata**
    - changes of request param
      - `- executor`
  - **GetStackMetadata**
    - changes of request param
      - `- executor`
  - **ListStacks**
    - changes of request param
      - `- executor`
  - **CreateStack**
    - changes of request param
      - `- executor`
  - **DeployStack**
    - changes of request param
      - `- executor`

### HuaweiCloud SDK CDN

- _Features_
  - Support the interfaces `ShowDomainFullConfig`, `UpdateDomainFullConfig`
- _Bug Fix_
  - None
- _Change_
  - **ShowDomainFullConfig**
    - changes of response param
      - `+ configs.origin_follow302_status`
      - `+ configs.cache_rules`
      - `+ configs.ip_filter`
      - `+ configs.referer`
      - `+ configs.force_redirect.redirect_code`
  - **UpdateDomainFullConfig**
    - changes of request param
      - `+ configs.origin_follow302_status`
      - `+ configs.cache_rules`
      - `+ configs.ip_filter`
      - `+ configs.referer`
      - `+ configs.force_redirect.redirect_code`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateRedislogDownloadLink**
    - changes of response param
      - `+ backup_id`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ImportFunction**
    - changes of response param
      - `+ gpu_memory`
      - `+ func_vpc.security_groups`
  - **ListFunctions**
    - changes of response param
      - `+ functions.gpu_memory`
      - `+ functions.is_bridge_function`
      - `+ functions.bind_bridge_funcUrns`
  - **CreateFunction**
    - changes of request param
      - `+ gpu_memory`
      - `+ log_config`
      - `+ network_controller`
      - `+ func_vpc.security_groups`
    - changes of response param
      - `+ gpu_memory`
      - `+ func_vpc.security_groups`
  - **ShowFunctionConfig**
    - changes of response param
      - `+ gpu_memory`
      - `+ ephemeral_storage`
      - `+ func_vpc.security_groups`
  - **UpdateFunctionConfig**
    - changes of request param
      - `+ gpu_memory`
      - `+ ephemeral_storage`
      - `+ log_config`
      - `+ network_controller`
      - `+ restore_hook_handler`
      - `+ restore_hook_timeout`
      - `+ func_vpc.security_groups`
    - changes of response param
      - `+ gpu_memory`
      - `+ ephemeral_storage`
      - `+ func_vpc.security_groups`
  - **UpdateFunctionMaxInstanceConfig**
    - changes of response param
      - `+ func_vpc.security_groups`
  - **CreateFunctionVersion**
    - changes of response param
      - `+ func_vpc.security_groups`

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the following interfaces：
    - `CreateVideoTranslateTask`
    - `ShowVideoTranslateTask`
    - `CreateImageTranslateTask`
    - `ShowImageTranslateTask`
    - `CreateVideoCoverAnalysisTask`
    - `ShowVideoCoverAnalysisTask`
    - `CreateVideoSummarizationAnalysisTask`
    - `ShowVideoSummarizationAnalysisTask`
    - `CreateVideoShotSplitTask`
    - `ShowVideoShotSplitTask`
  - **CreateImageHighresolutionMattingTask**
    - changes of request param
      - `- input.data.bucket`
      - `- input.data.path`
  - **ShowImageHighresolutionMattingTask**
    - changes of response param
      - `- input.data.bucket`
      - `- input.data.path`

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the interface `BroadcastMessage`
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
  - **RecognizeDriverLicense**
    - changes of response param
      - `+ result.front`
      - `+ result.back`
  - **RecognizeThailandIdcard**
    - changes of response param
      - `+ result.type`
      - `+ result.name_en`
      - `+ result.ref_number`
      - `+ result.confidence.name_en`
      - `+ result.confidence.ref_number`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListVpcsByTags**
    - changes of response param
      - `+ resources.resource_detail`
      - `- resources.resouce_detail`
  - **ListSubnetsByTags**
    - changes of response param
      - `+ resources.resource_detail`
      - `- resources.resouce_detail`
  - **UpdateRouteTable**
    - changes of request param
      - `+ routetable.routes.add`
      - `+ routetable.routes.mod`
      - `+ routetable.routes.del`
      - `* routetable.routes: map<string, list<RouteTableRoute>> -> object<RouteTableRouteAction>`

### HuaweiCloud SDK VPCEP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListServiceDescribeDetails**
    - changes of response param
      - `+ public_border_group`
  - **ListServiceDetails**
    - changes of response param
      - `+ enable_policy`
      - `+ tcp_proxy: enum value [proxy_vni]`
  - **UpdateEndpointService**
    - changes of request param
      - `+ tcp_proxy`
    - changes of response param
      - `+ enable_policy`
      - `+ tcp_proxy: enum value [proxy_vni]`
  - **ListEndpointInfoDetails**
    - changes of response param
      - `+ endpoint_pool_id`
      - `+ public_border_group`
  - **CreateEndpointService**
    - changes of request param
      - `+ enable_policy`
      - `+ tcp_proxy: enum value [proxy_vni]`
    - changes of response param
      - `+ enable_policy`
      - `+ tcp_proxy: enum value [proxy_vni]`
  - **ListEndpointService**
    - changes of response param
      - `+ endpoint_services.enable_policy`
      - `+ endpoint_services.tcp_proxy: enum value [proxy_vni]`
  - **CreateEndpoint**
    - changes of response param
      - `+ endpoint_pool_id`
      - `+ public_border_group`
      - `+ ip`

# 3.1.34 2023-04-13

### HuaweiCloud SDK EVS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowVolume**
    - changes of response param
      - `+ volume.iops`
      - `+ volume.throughput`
  - **ListVolumes**
    - changes of response param
      - `+ volumes.iops`
      - `+ volumes.throughput`

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the following interfaces：
    - `CreateVideoSynthesisTask`
    - `ShowVideoSynthesisTask`
    - `CreateImageToVideoTask`
    - `ShowImageToVideoTask`
    - `CreateVideoCuttingTask`
    - `ShowVideoCuttingTask`
    - `RunImageWisedesignCrop`
    - `RunImageWisedesignInpainting`
  - **RunImageTagging**
    - changes of response param
      - `+ result.tags.instances.bounding_box.width`
      - `+ result.tags.instances.bounding_box.height`
      - `+ result.tags.instances.bounding_box.top_left_x`
      - `+ result.tags.instances.bounding_box.top_left_y`
      - `* result.tags.instances.bounding_box: object -> object<ImageTaggingBoundingBox>`
  - **RunImageMediaTagging**
    - changes of response param
      - `+ result.tags.instances.bounding_box.width`
      - `+ result.tags.instances.bounding_box.height`
      - `+ result.tags.instances.bounding_box.top_left_x`
      - `+ result.tags.instances.bounding_box.top_left_y`
      - `* result.tags.instances.bounding_box: object -> object<BoundingBox>`
      - `* result.tags.instances: list<ImageTaggingInstance> -> list<ImageMediaTaggingInstance>`
  - **RunImageMediaTaggingDet**
    - changes of response param
      - `+ result.tags.instances.bounding_box.width`
      - `+ result.tags.instances.bounding_box.height`
      - `+ result.tags.instances.bounding_box.top_left_x`
      - `+ result.tags.instances.bounding_box.top_left_y`
      - `* result.tags.instances.bounding_box: object -> object<BoundingBox>`
  - **ShowVideoShotSplitTask**
    - changes of response param
      - `- state: enum value [SUCCEEDED,FAILED,RUNNING]`
  - **CreateVideoTranslateTask**
    - changes of request param
      - `* body: object<VideoTranslateRequestBody> -> object<CreateVideoTranslateTaskRequestBody>`
  - **CreateImageHighresolutionMattingTask**
    - changes of request param
      - `* input.data: list<TaskInputData> -> list<ImageHighresolutionMattingInputData>`
      - `* input: object<TaskInput> -> object<ImageHighresolutionMattingInput>`
  - **ShowImageHighresolutionMattingTask**
    - changes of response param
      - `* input.data: list<TaskInputData> -> list<ImageHighresolutionMattingInputData>`
      - `* input: object<TaskInput> -> object<ImageHighresolutionMattingInput>`
  - **CreateImageTranslateTask**
    - changes of request param
      - `* input.data: list<TaskInputData> -> list<ImageTranslateTaskInputData>`
      - `* input: object<TaskInput> -> object<ImageTranslateTaskInput>`
      - `* body: object<ImageTranslateRequestBody> -> object<CreateImageTranslateRequestBody>`
  - **ShowImageTranslateTask**
    - changes of response param
      - `* input.data: list<TaskInputData> -> list<ImageTranslateTaskInputData>`
      - `* input: object<TaskInput> -> object<ImageTranslateTaskInput>`
  - **CreateVideoCoverAnalysisTask**
    - changes of request param
      - `* input.data: list<TaskInputData> -> list<VideoCoverAnalysisTaskInputData>`
      - `* input: object<TaskInput> -> object<VideoCoverAnalysisTaskInput>`
      - `* body: object<VideoCoverAnalysisCreateTaskRequestBody> -> object<CreateVideoCoverAnalysisTaskRequestBody>`
  - **ShowVideoCoverAnalysisTask**
    - changes of response param
      - `* input.data: list<TaskInputData> -> list<VideoCoverAnalysisTaskInputData>`
      - `* input: object<TaskInput> -> object<VideoCoverAnalysisTaskInput>`
  - **CreateVideoSummarizationAnalysisTask**
    - changes of request param
      - `* input.data: list<TaskInputData> -> list<VideoSummarizationTaskInputData>`
      - `* input: object<TaskInput> -> object<VideoSummarizationTaskInput>`
      - `* body: object<VideoSummarizationCreateTaskRequestBody> -> object<CreateVideoSummarizationTaskRequestBody>`
  - **ShowVideoSummarizationAnalysisTask**
    - changes of response param
      - `* input.data: list<TaskInputData> -> list<VideoSummarizationTaskInputData>`
      - `* input: object<TaskInput> -> object<VideoSummarizationTaskInput>`
  - **CreateVideoObjectMaskingTask**
    - changes of request param
      - `* input.data: list<TaskInputData> -> list<ObjectMaskingTaskInputData>`
      - `* input: object<TaskInput> -> object<ObjectMaskingTaskInput>`
  - **ShowVideoObjectMaskingTask**
    - changes of response param
      - `* input.data: list<TaskInputData> -> list<ObjectMaskingTaskInputData>`
      - `* input: object<TaskInput> -> object<ObjectMaskingTaskInput>`

### HuaweiCloud SDK SIS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeShortAudio**
    - changes of request param
      - `+ config.property: enum value [english_8k_common,english_16k_common]`
  - **CollectTranscriberJob**
    - changes of response param
      - `+ job_id`

### HuaweiCloud SDK WAF

- _Features_
  - Support the interfaces `CreateCloudWafPostPaidResource`, `DeleteCloudWafPostPaidResource`
- _Bug Fix_
  - None
- _Change_
  - **ListCustomRules**
    - changes of response param
      - `+ items.name`

# 3.1.33 2023-04-06

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateRefreshTasks**
    - changes of request param
      - `+ refresh_task.mode`

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the interfaces `CreateTextToImageTask`, `ShowTextToImageTask`, `CreateImageVariationTask`, `ShowImageVariationTask`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **RecognizeFinancialStatement**
    - changes of request param
      - `+ return_rectification_matrix`
    - changes of response param
      - `+ result.rectification_matrix`

# 3.1.32 2023-03-30

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListOtaPackageInfo**
    - changes of request param
      - `- Sp-Auth-Token`
  - **CreateOtaPackage**
    - changes of request param
      - `- Sp-Auth-Token`
  - **DeleteOtaPackage**
    - changes of request param
      - `- Sp-Auth-Token`
  - **ShowOtaPackage**
    - changes of request param
      - `- Sp-Auth-Token`
  - **ShowRuleAction**
    - changes of response param
      - `+ channel_detail.http_forwarding.signature_enable`
      - `+ channel_detail.http_forwarding.token`
  - **UpdateRuleAction**
    - changes of request param
      - `+ channel_detail.http_forwarding.signature_enable`
      - `+ channel_detail.http_forwarding.token`
    - changes of response param
      - `+ channel_detail.http_forwarding.signature_enable`
      - `+ channel_detail.http_forwarding.token`
  - **CreateRuleAction**
    - changes of request param
      - `+ channel_detail.http_forwarding.signature_enable`
      - `+ channel_detail.http_forwarding.token`
    - changes of response param
      - `+ channel_detail.http_forwarding.signature_enable`
      - `+ channel_detail.http_forwarding.token`
  - **ListRuleActions**
    - changes of response param
      - `+ actions.channel_detail.http_forwarding.signature_enable`
      - `+ actions.channel_detail.http_forwarding.token`
  - **ShowRule**
    - changes of response param
      - `+ actions.device_alarm.dimension`
      - `+ condition_group.conditions.device_linkage_status_condition`
      - `+ condition_group.conditions.device_property_condition.filters.in_values`
  - **UpdateRule**
    - changes of request param
      - `+ actions.device_alarm.dimension`
      - `+ condition_group.conditions.device_linkage_status_condition`
      - `+ condition_group.conditions.device_property_condition.filters.in_values`
    - changes of response param
      - `+ actions.device_alarm.dimension`
      - `+ condition_group.conditions.device_linkage_status_condition`
      - `+ condition_group.conditions.device_property_condition.filters.in_values`
  - **CreateRule**
    - changes of request param
      - `+ actions.device_alarm.dimension`
      - `+ condition_group.conditions.device_linkage_status_condition`
      - `+ condition_group.conditions.device_property_condition.filters.in_values`
    - changes of response param
      - `+ actions.device_alarm.dimension`
      - `+ condition_group.conditions.device_linkage_status_condition`
      - `+ condition_group.conditions.device_property_condition.filters.in_values`
  - **ListRules**
    - changes of response param
      - `+ rules.actions.device_alarm.dimension`
      - `+ rules.condition_group.conditions.device_linkage_status_condition`
      - `+ rules.condition_group.conditions.device_property_condition.filters.in_values`

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **PublishAssetFromObs**
    - changes of request param
      - `+ video_type: enum value [RMVB,WEBM]`

### HuaweiCloud SDK WAF

- _Features_
  - Support the interfaces `ShowValueList`, `ShowPrivacyRule`, `ShowAntitamperRule`, `ShowWhiteBlackIpRule`
- _Bug Fix_
  - None
- _Change_
  - **ShowCcRule**
    - changes of response param
      - `+ name`
      - `* mode: number -> int32`
  - **UpdateCcRule**
    - changes of request param
      - `+ name`
    - changes of response param
      - `+ name`
      - `* mode: number -> int32`
  - **DeleteCcRule**
    - changes of response param
      - `+ name`
      - `* mode: number -> int32`
  - **ShowCustomRule**
    - changes of response param
      - `+ time`
  - **UpdateCustomRule**
    - changes of response param
      - `+ time`
  - **DeleteCustomRule**
    - changes of response param
      - `+ time`
  - **ListAntileakageRules**
    - changes of response param
      - `+ items.description`
  - **CreateCcRule**
    - changes of request param
      - `+ name`
    - changes of response param
      - `+ name`
      - `* mode: number -> int32`
  - **ListCcRules**
    - changes of response param
      - `+ items.name`
  - **CreateCustomRule**
    - changes of response param
      - `+ time`
  - **ListCustomRules**
    - changes of response param
      - `+ items.time`

# 3.1.31 2023-03-23

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowNode**
    - changes of response param
      - `+ spec.extendParam.agency_name`
  - **UpdateNode**
    - changes of response param
      - `+ spec.extendParam.agency_name`
  - **DeleteNode**
    - changes of response param
      - `+ spec.extendParam.agency_name`
  - **CreateNode**
    - changes of request param
      - `+ spec.extendParam.agency_name`
    - changes of response param
      - `+ spec.extendParam.agency_name`
  - **ListNodes**
    - changes of response param
      - `+ items.spec.extendParam.agency_name`
  - **ShowNodePool**
    - changes of response param
      - `+ spec.nodeTemplate.extendParam.agency_name`
  - **UpdateNodePool**
    - changes of response param
      - `+ spec.nodeTemplate.extendParam.agency_name`
  - **DeleteNodePool**
    - changes of response param
      - `+ spec.nodeTemplate.extendParam.agency_name`
  - **CreateNodePool**
    - changes of request param
      - `+ spec.nodeTemplate.extendParam.agency_name`
    - changes of response param
      - `+ spec.nodeTemplate.extendParam.agency_name`
  - **ListNodePools**
    - changes of response param
      - `+ items.spec.nodeTemplate.extendParam.agency_name`

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ShowDomainDetailByName**
    - changes of response param
      - `- domain.banned_reason`
      - `- domain.locked_reason`
      - `- domain.enterprise_project_id`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **CreateMigrationTask**
    - changes of request param
      - `+ backup_files.file_source: enum value [backup_record]`
  - **ShowMigrationTask**
    - changes of response param
      - `+ backup_files.file_source: enum value [backup_record]`
  - **StopMigrationTask**
    - changes of response param
      - `+ backup_files.file_source: enum value [backup_record]`

### HuaweiCloud SDK WAF

- _Features_
  - Support the following interfaces：
    - `ListCcRules`
    - `CreateCcRule`
    - `ShowCcRule`
    - `UpdateCcRule`
    - `DeleteCcRule`
    - `ListCustomRules`
    - `CreateCustomRule`
    - `ShowCustomRule`
    - `UpdateCustomRule`
    - `DeleteCustomRule`
    - `ListAnticrawlerRules`
    - `UpdateAnticrawlerRuleType`
    - `CreateAnticrawlerRule`
    - `ShowAnticrawlerRule`
    - `UpdateAnticrawlerRule`
    - `DeleteAnticrawlerRule`
    - `ListPunishmentRules`
    - `CreatePunishmentRule`
    - `ShowPunishmentRule`
    - `UpdatePunishmentRule`
    - `DeletePunishmentRule`
    - `ListAntileakageRules`
    - `CreateAntileakageRule`
    - `ShowAntileakageRule`
    - `UpdateAntileakageRule`
    - `DeleteAntileakageRule`
    - `UpdateAntiTamperRuleRefresh`
    - `ShowGeoipRule`
    - `ShowIgnoreRule`
    - `UpdateIgnoreRule`
- _Bug Fix_
  - None
- _Change_
  - **ListHost**
    - changes of response param
      - `- items.paid_type: enum value [prePaid]`
  - **DeleteHost**
    - changes of response param
      - `- paid_type: enum value [prePaid]`

# 3.1.30 2023-03-16

### HuaweiCloud SDK CDN

- _Features_
  - Support the interfaces `ListDomains`, `ShowDomainDetailByName`
- _Bug Fix_
  - None
- _Change_
  - **ListDomains**
    - changes of request param
      - `+ show_tags`
      - `+ exact_match`
    - changes of response param
      - `+ domains.tags`

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **ListBandwidthPkg**
    - changes of request param
      - `+ limit`
      - `+ marker`
      - `+ offset`
  - **ListCommonPools**
    - changes of request param
      - `+ limit`
      - `+ offset`
  - **ListShareBandwidthTypes**
    - changes of request param
      - `+ marker`
      - `+ offset`

### HuaweiCloud SDK IAM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - **KeystoneListMappings**
    - changes of response param
      - `* mappings.rules.local.groups: object -> string`
  - **KeystoneShowMapping**
    - changes of response param
      - `* mapping.rules.local.groups: object -> string`
  - **KeystoneCreateMapping**
    - changes of request param
      - `* mapping.rules.local.groups: object -> string`
    - changes of response param
      - `* mapping.rules.local.groups: object -> string`
  - **KeystoneUpdateMapping**
    - changes of request param
      - `* mapping.rules.local.groups: object -> string`
    - changes of response param
      - `* mapping.rules.local.groups: object -> string`

### HuaweiCloud SDK Image

- _Features_
  - Support the interfaces `CreateVideoObjectMaskingTask`, `ShowVideoObjectMaskingTask`
- _Bug Fix_
  - None
- _Change_
  - **CreateTextToImageTask**
    - changes of request param
      - `+ config.common.inference.image_nums`
      - `+ config.common.inference.resolution: enum value [512*768,768*512,512*512]`
  - **ShowTextToImageTask**
    - changes of response param
      - `+ config.common.inference.image_nums`
      - `+ config.common.inference.resolution: enum value [512*768,768*512,512*512]`
  - **CreateImageVariationTask**
    - changes of request param
      - `+ config.common.inference.image_nums`
      - `+ config.common.inference.resolution: enum value [512*768,768*512,512*512]`
  - **ShowImageVariationTask**
    - changes of response param
      - `+ config.common.inference.image_nums`
      - `+ config.common.inference.resolution: enum value [512*768,768*512,512*512]`

### HuaweiCloud SDK IVS

- _Features_
  - Support the interfaces `DetectStandardByVideoAndIdCardImage`, `DetectStandardByVideoAndNameAndId`
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
  - **RecognizeMvsInvoice**
    - changes of request param
      - `+ return_text_location`
      - `+ return_confidence`
      - `+ type`
    - changes of response param
      - `+ result.buyer_address`
      - `+ result.buyer_phone`
      - `+ result.licence_plate_number`
      - `+ result.registration_number`
      - `+ result.dept_motor_vehicles`
      - `+ result.auction_org_name`
      - `+ result.auction_org_address`
      - `+ result.auction_org_id`
      - `+ result.auction_org_bank_account`
      - `+ result.auction_org_phone`
      - `+ result.used_vehicle_market_name`
      - `+ result.used_vehicle_market_id`
      - `+ result.used_vehicle_market_address`
      - `+ result.used_vehicle_market_bank_account`
      - `+ result.used_vehicle_market_phone`
      - `+ result.remark`
      - `+ result.drawer_name`
      - `+ result.type`
      - `+ result.text_location`
      - `+ result.confidence`

# 3.1.29 2023-03-14

### HuaweiCloud SDK Image

- _Features_
  - Support the interfaces `CreateTextToImageTask`, `ShowTextToImageTask`, `CreateImageVariationTask`, `ShowImageVariationTask`
- _Bug Fix_
  - None
- _Change_
  - Remove the interfaces `RunImageWisedesignColorfilter`, `RunImageWisedesignCombine`

# 3.1.28 2023-03-09

### HuaweiCloud SDK AOS

- _Features_
  - Support the following interfaces：
    - `ListTemplates`
    - `DeleteTemplate`
    - `ShowTemplateMetadata`
    - `UpdateTemplateMetadata`
    - `ShowTemplateVersionContent`
    - `DeleteTemplateVersion`
    - `ShowTemplateVersionMetadata`
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListExecutionPlans`:
    - Add the enum values `APPLY_IN_PROGRESS` to the response parameter `status`
    - The response parameter `stack_name`, `execution_plan_name` changed to required
  - Remove the enum values `IN_PLACE_UPDATE` from the response parameter `action` from the interface `GetExecutionPlan`
  - The response parameter `stack_name`, `execution_plan_name` changed to required of the interface `GetExecutionPlanMetadata`
  - Add the response parameter `resource_attributes` to the interface `ListStackResources`
  - Changes of the interface `EstimateExecutionPlanPrice`:
    - Add the response parameter `unsupported_message`
    - Modify the type `object` -> `double` of the response parameter `sale_price`
    - Modify the type `object` -> `double` of the response parameter `discount`
    - Modify the type `object` -> `double` of the response parameter `original_price`
    - Remove the enum values `WEEK` from the response parameter `period_type`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `connection_status_update_time`, `active_time` to the interface `UpdateDevice`
  - Add the response parameters `connection_status_update_time`, `active_time` to the interface `ShowDevice`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `extended_parameters` to the interface `RecognizeAutoClassification`

# 3.1.27 2023-03-07

### HuaweiCloud SDK VOD

- _Features_
  - Support the interface `ModifySubtitle`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.26 2023-03-02

### HuaweiCloud SDK CDN

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ShowDomainFullConfig`:
    - Modify the type `string` -> `int32` of the response parameter `error_code`
    - Modify the type `string` -> `int32` of the response parameter `target_code`
  - Changes of the interface `UpdateDomainFullConfig`:
    - Modify the type `string` -> `int32` of the request parameter `error_code`
    - Modify the type `string` -> `int32` of the request parameter `target_code`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `UpdateTrigger`:
    - Add the request parameter `event_data`
    - Add the response parameters `trigger_id`, `trigger_type_code`, `trigger_status`, `event_data`, `last_updated_time`, `created_time`

### HuaweiCloud SDK Image

- _Features_
  - Support the following interfaces：
    - `CreateVideoSynthesisTask`
    - `ShowVideoSynthesisTask`
    - `CreateImageToVideoTask`
    - `ShowImageToVideoTask`
    - `CreateVideoCuttingTask`
    - `ShowVideoCuttingTask`
    - `CreateVideoTranslateTask`
    - `ShowVideoTranslateTask`
    - `CreateImageHighresolutionMattingTask`
    - `ShowImageHighresolutionMattingTask`
    - `CreateImageTranslateTask`
    - `ShowImageTranslateTask`
    - `CreateVideoCoverAnalysisTask`
    - `ShowVideoCoverAnalysisTask`
    - `CreateVideoSummarizationAnalysisTask`
    - `ShowVideoSummarizationAnalysisTask`
    - `CreateVideoShotSplitTask`
    - `ShowVideoShotSplitTask`
    - `RunImageWisedesignCrop`
    - `RunImageWisedesignInpainting`
    - `RunImageWisedesignColorfilter`
    - `RunImageWisedesignCombine`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the interfaces `ListOtaPackageInfo`, `CreateOtaPackage`, `ShowOtaPackage`, `DeleteOtaPackage`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.25 2023-02-23

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `active` to the interface `ListRoutingRules`
  - Add the request parameter `mysql_forwarding` to the interface `CreateRuleAction`
  - Add the response parameter `mysql_forwarding` to the interface `ListRuleActions`
  - Changes of the interface `UpdateRuleAction`:
    - Add the request parameter `mysql_forwarding`
    - Add the response parameter `mysql_forwarding`
  - Add the response parameter `mysql_forwarding` to the interface `ShowRuleAction`

### HuaweiCloud SDK WAF

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `flag` to the interface `UpdatePremiumHost`

# 3.1.24 2023-02-16

### HuaweiCloud SDK DCS

- _Features_
  - Support the interfaces `CreateCustomTemplate`, `CreateAutoExpireScanTask`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `nod_threshold` to the interface `DetectLiveByUrl`
  - Add the request parameter `nod_threshold` to the interface `DetectLiveByUrlIntl`
  - Add the request parameter `nod_threshold` to the interface `DetectLiveByFile`
  - Add the request parameter `nod_threshold` to the interface `DetectLiveByFileIntl`
  - Add the request parameter `nod_threshold` to the interface `DetectLiveByBase64`
  - Add the request parameter `nod_threshold` to the interface `DetectLiveByBase64Intl`

### HuaweiCloud SDK Image

- _Features_
  - Support the interfaces `RunImageSuperResolution`, `RunRecaptureDetect`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK WAF

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `UpdateHost`:
    - Remove the enum values `TLS v1.3` from the request parameter `tls`
    - Remove the enum values `TLS v1.3` from the response parameter `tls`
  - Remove the enum values `TLS v1.3` from the response parameter `tls` from the interface `ShowHost`
  - Remove the enum values `TLS v1.3` from the response parameter `tls` from the interface `CreatePremiumHost`
  - Remove the enum values `TLS v1.3` from the response parameter `tls` from the interface `ShowPremiumHost`
  - Changes of the interface `UpdatePremiumHost`:
    - Remove the enum values `TLS v1.3` from the request parameter `tls`
    - Remove the enum values `TLS v1.3` from the response parameter `tls`

# 3.1.23 2023-02-09

### HuaweiCloud SDK CDN

- _Features_
  - Support the service `Content Delivery Network`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `error_code` to the interface `ListAsyncInvocations`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `roma_forwarding`, `influxdb_forwarding`, `functiongraph_forwarding`, `mrs_kafka_forwarding`, `dms_rocketmq_forwarding` to the interface `ListRuleActions`
  - Add the request parameters `roma_forwarding`, `influxdb_forwarding`, `functiongraph_forwarding`, `mrs_kafka_forwarding`, `dms_rocketmq_forwarding` to the interface `CreateRuleAction`
  - Changes of the interface `UpdateRuleAction`:
    - Add the request parameters `roma_forwarding`, `influxdb_forwarding`, `functiongraph_forwarding`, `mrs_kafka_forwarding`, `dms_rocketmq_forwarding`
    - Add the response parameters `roma_forwarding`, `influxdb_forwarding`, `functiongraph_forwarding`, `mrs_kafka_forwarding`, `dms_rocketmq_forwarding`
  - Add the response parameters `roma_forwarding`, `influxdb_forwarding`, `functiongraph_forwarding`, `mrs_kafka_forwarding`, `dms_rocketmq_forwarding` to the interface `ShowRuleAction`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `RecognizeTollInvoice`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`

# 3.1.22 2023-02-02

### HuaweiCloud SDK AOS

- _Features_
  - Support the interface `UpdateStack`
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `executor` to the interface `ApplyExecutionPlan`
  - Changes of the interface `ListStackEvents`:
    - Add the request parameters `filter`, `field`
    - Remove the response parameters `resource_id_key`, `resource_id_value`, `resource_name`, `resource_type`, `time`, `event_type`, `event_message`, `elapsed_seconds`
  - The response parameter `stack_name` changed to required of the interface `GetStackMetadata`
  - Add the request parameter `executor` to the interface `CreateStack`
  - Changes of the interface `ListStackResources`:
    - Add the response parameter `index_key`
    - Remove the enum values `DELETION_SKIPPED` from the response parameter `resource_status`
  - Add the request parameter `executor` to the interface `DeployStack`

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `IsoImage` to the request parameter `type` to the interface `CreateImage`

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `white_glossaries` to the interface `RunTextModeration`

# 3.1.21 2023-01-12

### HuaweiCloud SDK FRS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveByUrl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveByUrlIntl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveFaceByUrl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveByFile`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveByFileIntl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveFaceByFile`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveByBase64`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveByBase64Intl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectLiveFaceByBase64`
  - Add the request parameter `Enterprise-Project-Id` to the interface `SearchFaceByFaceId`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectFaceByFile`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectFaceByFileIntl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `UpdateFace`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DeleteFaceByExternalImageId`
  - Add the request parameter `Enterprise-Project-Id` to the interface `ShowFacesByLimit`
  - Add the request parameter `Enterprise-Project-Id` to the interface `CompareFaceByFile`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DeleteFaceByFaceId`
  - Add the request parameter `Enterprise-Project-Id` to the interface `ShowFacesByFaceId`
  - Add the request parameter `Enterprise-Project-Id` to the interface `AddFacesByBase64`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectFaceByUrl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectFaceByUrlIntl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DeleteFaceSet`
  - Add the request parameter `Enterprise-Project-Id` to the interface `ShowFaceSet`
  - Add the request parameter `Enterprise-Project-Id` to the interface `CompareFaceByBase64`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectFaceByBase64`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectFaceByBase64Intl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `CreateFaceSet`
  - Add the request parameter `Enterprise-Project-Id` to the interface `ShowAllFaceSets`
  - Add the request parameter `Enterprise-Project-Id` to the interface `SearchFaceByFile`
  - Add the request parameter `Enterprise-Project-Id` to the interface `AddFacesByUrl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `AddFacesByFile`
  - Add the request parameter `Enterprise-Project-Id` to the interface `SearchFaceByUrl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `SearchFaceByBase64`
  - Add the request parameter `Enterprise-Project-Id` to the interface `CompareFaceByUrl`
  - Add the request parameter `Enterprise-Project-Id` to the interface `BatchDeleteFaces`

### HuaweiCloud SDK IVS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectStandardByIdCardImage`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectStandardByNameAndId`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectExtentionByNameAndId`
  - Add the request parameter `Enterprise-Project-Id` to the interface `DetectExtentionByIdCardImage`

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `RecognizeCustomTemplate`
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `RecognizeGeneralTable`:
    - Add the request parameters `return_char_location`, `return_rectification_matrix`
    - Add the response parameter `char_list`
  - Add the request parameter `language` to the interface `RecognizeGeneralText`
  - Changes of the interface `RecognizeWebImage`:
    - Add the response parameter `extracted_data`
    - Remove the response parameters `extracted_data`, `contact_info`, `image_size`, `height`, `width`, `name`, `phone`, `province`, `city`, `district`, `detail_address`

# 3.1.20 2023-01-05

### HuaweiCloud SDK DCS

- _Features_
  - Support the interface `ListConfigHistories`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `DISABLED`, Remove the enum values `DISABLE` from the response parameter `trigger_status` to the interface `ListFunctionTriggers`
  - Add the enum values `DISABLED`, Remove the enum values `DISABLE` from the request parameter `trigger_status` to the interface `UpdateTrigger`
  - Add the enum values `DISABLED`, Remove the enum values `DISABLE` from the response parameter `trigger_status` to the interface `ShowFunctionTrigger`
  - Add the request parameter `enable_stream_response` to the interface `CreateWorkflow`
  - Add the request parameter `enable_stream_response` to the interface `UpdateWorkFlow`
  - Add the response parameter `enable_stream_response` to the interface `ShowWorkFlow`

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `white_glossary_names` to the interface `RunTextModeration`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListPorts`:
    - Add the request parameter `security_groups`
    - Modify the type `string` -> `array` of the request parameter `fixed_ips`

# 3.1.19 2022-12-29

### HuaweiCloud SDK CFW

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameters `fw_instance_id`, `enterprise_project_id` to the interface `ListDnsServers`
  - Add the request parameters `fw_instance_id`, `enterprise_project_id` to the interface `UpdateDnsServers`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListVpcProtects`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListRuleHitCount`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `DeleteAclRuleCount`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ChangeIpsSwitchUsingPost`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListIpsSwitchStatusUsingGet`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListEastWestFirewall`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ChangeEwProtectStatus`
  - Add the request parameter `enterprise_project_id` to the interface `ListFlowLogs`
  - Add the request parameter `enterprise_project_id` to the interface `ListAccessControlLogs`
  - Add the request parameter `enterprise_project_id` to the interface `ListAttackLogs`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `AddRuleAclUsingPost`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `DeleteRuleAclUsingDelete`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `UpdateRuleAclUsingPut`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListRuleAclsUsingGet`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListRuleAclUsingPut`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `AddBlackWhiteListUsingPost`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `DeleteBlackWhiteListUsingDelete`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `UpdateBlackWhiteListUsingPut`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListBlackWhiteListsUsingGet`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ChangeIpsProtectModeUsingPost`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListIpsProtectModeUsingPost`
  - Changes of the interface `ListFirewallUsingGet`:
    - Add the request parameters `enterprise_project_id`, `fw_instance_id`
    - Add the response parameters `fw_instance_name`, `enterprise_project_id`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `AddServiceSetUsingPost`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `DeleteServiceSetUsingDelete`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListServiceSetDetails`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `UpdateServiceSetUsingPut`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `AddServiceItemsUsingPost`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListServiceItemsDetails`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `DeleteServiceItemUsingDelete`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListParseDomainDetails`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `CountEips`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ChangeProtectEip`
  - Changes of the interface `ListEipResources`:
    - Add the request parameters `fw_instance_id`, `fw_key_word`, `eps_id`
    - Add the response parameters `fw_instance_name`, `fw_instance_id`, `fw_enterprise_project_id`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `DeleteAddressItemUsingDelete`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `AddAddressItemsUsingPost`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListAddressItemsUsingGet`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `AddAddressSetInfoUsingPost`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListAddressSetListUsingGet`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `DeleteAddressSetInfoUsingDelete`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListAddressSetDetailUsingGet`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `UpdateAddressSetInfoUsingPut`
  - Add the request parameters `enterprise_project_id`, `fw_instance_id` to the interface `ListServiceSet`

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type `int32` -> `int64` of the response parameter `size` of the interface `CreateBigkeyScanTask`
  - Modify the type `int32` -> `int64` of the response parameter `size` of the interface `ShowBigkeyScanTaskDetails`
  - Modify the type `int32` -> `int64` of the response parameter `size` of the interface `CreateHotkeyScanTask`
  - Modify the type `int32` -> `int64` of the response parameter `size` of the interface `ShowHotkeyTaskDetails`

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `extendParam` to the interface `ChangeBandwidthToPeriod`
  - Add the request parameter `extendParam` to the interface `ChangePublicipToPeriod`
  - Changes of the interface `ListBandwidthPkg`:
    - Add the response parameter `tenantId`
    - Remove the response parameter `tenant_id`
  - The request parameter `associate_instance_type`, `associate_instance_id` changed to required of the interface `UpdateAssociatePublicip`
  - The request parameter `associate_instance_type`, `associate_instance_id` changed to required of the interface `AssociatePublicips`

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListLoadbalancersByTags`:
    - Remove the request parameter `without_any_tag`
    - The request parameter `values` changed to required
  - Changes of the interface `ListListenersByTags`:
    - Remove the request parameter `without_any_tag`
    - The request parameter `values` changed to required
  - Add the response parameters `ipgroup_bindings`, `ipgroup_max_length` to the interface `ShowQuota`

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `sub_jobs_result`, `sub_jobs_list` to the interface `ShowJob`
  - Add the response parameters `sub_jobs_result`, `sub_jobs_list` to the interface `ShowJobProgress`

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - The request parameter `name` changed to not required of the interface `UpdateTranscodeTemplate`
  - Changes of the interface `UpdateTemplateGroupCollection`:
    - The request parameter `collection_id` changed to required
    - The request parameter `name`, `template_group_list` changed to not required

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `tenant_id`, `created_at`, `updated_at` to the interface `ListVpcs`
  - Add the response parameters `tenant_id`, `created_at`, `updated_at` to the interface `CreateVpc`
  - Add the response parameters `tenant_id`, `created_at`, `updated_at` to the interface `ShowVpc`
  - Add the response parameters `tenant_id`, `created_at`, `updated_at` to the interface `UpdateVpc`
  - Add the response parameters `tenant_id`, `created_at`, `updated_at` to the interface `ListSubnets`
  - Add the response parameters `tenant_id`, `created_at`, `updated_at` to the interface `CreateSubnet`
  - Add the response parameters `tenant_id`, `created_at`, `updated_at` to the interface `ShowSubnet`
  - Add the response parameters `created_at`, `updated_at` to the interface `ListRouteTables`
  - Add the response parameters `created_at`, `updated_at` to the interface `CreateRouteTable`
  - Add the response parameters `created_at`, `updated_at` to the interface `ShowRouteTable`
  - Add the response parameters `created_at`, `updated_at` to the interface `UpdateRouteTable`
  - Add the response parameters `created_at`, `updated_at` to the interface `AssociateRouteTable`
  - Add the response parameters `created_at`, `updated_at` to the interface `DisassociateRouteTable`

# 3.1.18 2022-12-26

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - The request parameter `group_id`, `name`, `bitrate`, `frame_rate`, `video_codec`, `format`, `hls_interval` changed to required of the interface `UpdateTranscodeTemplate`
  - The response parameter `bitrate`, `frame_rate`, `video_codec`, `format`, `hls_interval` changed to required of the interface `ListTranscodeTemplate`
  - The request parameter `name`, `bitrate`, `frame_rate`, `video_codec`, `format`, `hls_interval` changed to required of the interface `CreateTranscodeTemplate`
  - The request parameter `name`, `template_group_list` changed to required of the interface `UpdateTemplateGroupCollection`
  - The request parameter `name`, `template_group_list` changed to required of the interface `CreateTemplateGroupCollection`

# 3.1.17 2022-12-22

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ShowWorkflowExecutionForPage`:
    - Add the response parameter `created_by`
    - Remove the response parameter `create_by`

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `vault_id` to the interface `CopyImageCrossRegion`

### HuaweiCloud SDK IoTDA

- _Features_
  - Support the interface `SearchDevices`
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `device_side` to the interface `CreateRule`
  - Add the response parameter `device_side` to the interface `ListRules`
  - Add the response parameter `device_side` to the interface `ShowRule`
  - Changes of the interface `UpdateRule`:
    - Add the request parameter `device_side`
    - Add the response parameter `device_side`

# 3.1.16 2022-12-19

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `server_id` to the interface `ListServersDetails`

### HuaweiCloud SDK EIP

- _Features_
  - Support the interfaces `ShowResourcesJobDetail`, `ChangeBandwidthToPeriod`, `ChangePublicipToPeriod`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `CreateFunction`:
    - Add the request parameters `depend_version_list`, `func_vpc`
    - Add the response parameter `depend_version_list`
  - Changes of the interface `UpdateFunctionCode`:
    - Add the request parameter `depend_version_list`
    - Add the response parameter `depend_version_list`
  - Add the response parameter `depend_version_list` to the interface `ShowFunctionCode`
  - Add the response parameter `depend_version_list` to the interface `ShowFunctionConfig`
  - Changes of the interface `ListReservedInstanceConfigs`:
    - Add the request parameters `marker`, `limit`
    - Add the response parameter `reserved_instances`
    - Remove the response parameter `reservedinstances`
  - Add the response parameter `depend_version_list` to the interface `ImportFunction`
  - Changes of the interface `ListFunctionReservedInstances`:
    - Add the request parameter `limit`
    - Remove the request parameter `maxitems`
  - Changes of the interface `ShowWorkflowExecutionForPage`:
    - Add the request parameters `offset`, `limit`, `start_time`, `end_time`
    - Remove the request parameter `CreateWorkflowRequestBody`

# 3.1.15 2022-12-15

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `server_id` to the interface `ListServersDetails`

### HuaweiCloud SDK EIP

- _Features_
  - Support the interfaces `ShowResourcesJobDetail`, `ChangeBandwidthToPeriod`, `ChangePublicipToPeriod`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `CreateFunction`:
    - Add the request parameters `depend_version_list`, `func_vpc`
    - Add the response parameter `depend_version_list`
  - Changes of the interface `UpdateFunctionCode`:
    - Add the request parameter `depend_version_list`
    - Add the response parameter `depend_version_list`
  - Add the response parameter `depend_version_list` to the interface `ShowFunctionCode`
  - Add the response parameter `depend_version_list` to the interface `ShowFunctionConfig`
  - Changes of the interface `ListReservedInstanceConfigs`:
    - Add the request parameters `marker`, `limit`
    - Add the response parameter `reserved_instances`
    - Remove the response parameter `reservedinstances`
  - Add the response parameter `depend_version_list` to the interface `ImportFunction`
  - Changes of the interface `ListFunctionReservedInstances`:
    - Add the request parameter `limit`
    - Remove the request parameter `maxitems`
  - Changes of the interface `ShowWorkflowExecutionForPage`:
    - Add the request parameters `offset`, `limit`, `start_time`, `end_time`
    - Remove the request parameter `CreateWorkflowRequestBody`

# 3.1.14 2022-12-08

### HuaweiCloud SDK AOS

- _Features_
  - Support the interfaces `GetExecutionPlan`, `DeleteExecutionPlan`, `DescribeExecutionPlan`, `GetStackMetadata`
- _Bug Fix_
  - None
- _Change_
  - Remove the request parameter `executor` from the interface `ListExecutionPlans`
  - Remove the request parameter `executor` from the interface `CreateExecutionPlan`
  - Remove the request parameter `executor` from the interface `ApplyExecutionPlan`
  - Changes of the interface `ListStackEvents`:
    - Remove the request parameters `limit`, `marker`, `executor`
    - Remove the response parameter `next_marker`
  - Remove the request parameter `executor` from the interface `ListStacks`
  - Remove the request parameter `executor` from the interface `CreateStack`
  - Remove the request parameter `executor` from the interface `GetStackTemplate`
  - Changes of the interface `ListStackResources`:
    - Remove the request parameter `executor`
    - Remove the response parameters `create_time`, `update_time`
  - Changes of the interface `ListStackOutputs`:
    - Remove the request parameters `executor`, `limit`, `marker`
    - Remove the response parameter `next_marker`
  - Remove the request parameter `executor` from the interface `DeployStack`
  - Remove the request parameter `executor` from the interface `DeleteStack`

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - The request parameter `version` changed to not required of the interface `CreateAddonInstance`
  - The request parameter `version` changed to not required of the interface `UpdateAddonInstance`

### HuaweiCloud SDK CFW

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListIpsSwitchStatusUsingGet`:
    - Add the response parameters `id`, `virtual_patches_status`
    - Remove the response parameters `object_id`, `virtual_patches_stauts`
  - The request parameter `ips_type` changed to required of the interface `ChangeIpsSwitchUsingPost`
  - Remove the response parameters `fw_instance_id`, `resource_id`, `name`, `ha_type`, `charge_mode`, `service_type`, `engine_type`, `flavor`, `protect_objects`, `status`, `description`, `is_old_firewall_instance`, `support_ipv6`, `feature_toggle` from the interface `ListFirewallUsingGet`

### HuaweiCloud SDK EIP

- _Features_
  - Support the following interfaces：
    - `ListBandwidthPkg`
    - `CountPublicIp`
    - `ShowPublicIpType`
    - `CountPublicIpInstance`
    - `BatchCreatePublicips`
    - `BatchDeletePublicIp`
    - `BatchDisassociatePublicips`
    - `CountEipAvailableResources`
- _Bug Fix_
  - None
- _Change_
  - Remove the enum values `` from the request parameter `associate_instance_type` from the interface `AssociatePublicips`
  - Remove the enum values `` from the request parameter `associate_instance_type` from the interface `UpdateAssociatePublicip`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `dep_id` to the interface `CreateDependency`
  - Add the response parameter `dep_id` to the interface `CreateDependencyVersion`
  - Add the request parameters `enable_dynamic_memory`, `enable_auth_in_header` to the interface `UpdateFunctionConfig`
  - Changes of the interface `ShowWorkflowExecutionForPage`:
    - Add the request parameters `offset`, `limit`
    - Add the response parameters `total`, `size`, `executions`
    - Remove the request parameters `page`, `page_size`
    - Remove the response parameters `pager`, `hisRecords`

### HuaweiCloud SDK TMS

- _Features_
  - Support the following interfaces：
    - `ListResource`
    - `CreateResourceTag`
    - `DeleteResourceTag`
    - `ListTagKeys`
    - `ListTagValues`
    - `ShowResourceTag`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.13 2022-12-01

### HuaweiCloud SDK CFW

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListIpsSwitchStatusUsingGet`:
    - Add the response parameter `data`
    - Remove the response parameters `object_id`, `basic_defense_status`, `virtual_patches_stauts`
  - Changes of the interface `ListEastWestFirewall`:
    - Add the response parameter `protect_infos`
    - Remove the response parameter `protected_infos`
  - The request parameter `fw_instance_id` changed to not required of the interface `ListAttackLogs`
  - Add the request parameter `type` to the interface `UpdateRuleAclUsingPut`
  - Add the request parameters `list_type`, `object_id` to the interface `UpdateBlackWhiteListUsingPut`
  - Changes of the interface `ListFirewallUsingGet`:
    - Add the response parameter `data`
    - Remove the response parameters `fw_instance_id`, `resource_id`, `name`, `ha_type`, `charge_mode`, `service_type`, `engine_type`, `flavor`, `protect_objects`, `status`, `description`, `is_old_firewall_instance`, `support_ipv6`, `feature_toggle`
  - Changes of the interface `ListServiceSetDetails`:
    - Add the response parameter `data`
    - Remove the response parameters `id`, `name`, `description`
  - Changes of the interface `CountEips`:
    - Add the response parameter `data`
    - Remove the response parameters `object_id`, `eip_total`, `eip_protected`
  - Changes of the interface `ListEipResources`:
    - Add the response parameter `data`
    - Remove the response parameters `id`, `public_ip`, `status`, `public_ipv6`, `enterprise_project_id`, `device_id`, `device_name`, `device_owner`, `associate_instance_type`
  - Add the request parameter `address_type` to the interface `UpdateAddressSetInfoUsingPut`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the interface `AsyncInvokeReservedFunction`
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `http` to the response parameter `runtime` to the interface `ListDependencies`
  - Add the enum values `http` to the response parameter `runtime` to the interface `ListDependencyVersion`
  - Changes of the interface `CreateFunction`:
    - Add the enum values `http` to the request parameter `runtime`
    - Add the enum values `http` to the response parameter `runtime`
  - Add the enum values `http` to the response parameter `runtime` to the interface `ListFunctions`
  - Add the enum values `http` to the response parameter `runtime` to the interface `UpdateFunctionCode`
  - Add the enum values `http` to the response parameter `runtime` to the interface `ShowFunctionCode`
  - Changes of the interface `UpdateFunctionConfig`:
    - Add the enum values `http` to the request parameter `runtime`
    - Add the enum values `http` to the response parameter `runtime`
  - Add the enum values `http` to the response parameter `runtime` to the interface `ShowFunctionConfig`
  - Add the enum values `http` to the response parameter `runtime` to the interface `UpdateFunctionMaxInstanceConfig`
  - Changes of the interface `ListReservedInstanceConfigs`:
    - Add the response parameters `reservedinstances`, `page_info`, `count`
    - Remove the response parameters `function_urn`, `qualifier_type`, `qualifier_name`, `min_count`, `idle_mode`, `tactics_config`
  - Add the enum values `http` to the response parameter `runtime` to the interface `CreateFunctionVersion`
  - Add the enum values `http` to the response parameter `runtime` to the interface `ListFunctionVersions`
  - Add the enum values `http` to the response parameter `runtime` to the interface `ImportFunction`

### HuaweiCloud SDK Image

- _Features_
  - Support the interfaces `RunQueryCustomTags`, `RunDeleteCustomTags`, `RunImageMediaTaggingDet`
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `use_default_tags` to the interface `RunImageMediaTagging`

# 3.1.12 2022-11-30

### HuaweiCloud SDK EIP

- _Features_
  - Support the interfaces `DisassociatePublicips`, `AssociatePublicips`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `metric_type` to the interface `ShowTenantMetric`

### HuaweiCloud SDK SIS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `chinese_8k_general` to the request parameter `property` to the interface `PushTranscriberJobs`
  - Add the enum values `chinese_huaxiaoru_common`, `chinese_huaxiaohan_common`, `chinese_huaxiaoning_common`, `chinese_huaxiaozhen_common`, `english_alvin_common`, `english_amy_common` to the request parameter `property` to the interface `RunTts`

# 3.1.11 2022-11-24

### HuaweiCloud SDK AOS

- _Features_
  - Support the interfaces `ListStackEvents`, `ListStackResources`, `DeleteStack`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CFW

- _Features_
  - Support the service `Cloud Firewall`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CCE

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `configurationsOverride` to the interface `CreateCluster`
  - Add the response parameter `configurationsOverride` to the interface `ListClusters`
  - Changes of the interface `UpdateCluster`:
    - Add the request parameters `eniNetwork`, `hostNetwork`
    - Add the response parameter `configurationsOverride`
  - Changes of the interface `DeleteCluster`:
    - Add the request parameter `delete_sfs30`
    - Add the response parameter `configurationsOverride`
  - Add the response parameter `configurationsOverride` to the interface `ShowCluster`
  - Add the request parameter `initializedConditions` to the interface `CreateNode`
  - Add the response parameter `initializedConditions` to the interface `ListNodes`
  - Add the response parameter `initializedConditions` to the interface `UpdateNode`
  - Add the response parameter `initializedConditions` to the interface `DeleteNode`
  - Add the response parameter `initializedConditions` to the interface `ShowNode`
  - Add the request parameter `initializedConditions` to the interface `AddNode`
  - Add the request parameter `initializedConditions` to the interface `ResetNode`
  - Add the request parameters `customSecurityGroups`, `initializedConditions` to the interface `CreateNodePool`
  - Add the response parameters `customSecurityGroups`, `initializedConditions` to the interface `ListNodePools`
  - Changes of the interface `UpdateNodePool`:
    - Add the request parameter `initializedConditions`
    - Add the response parameters `customSecurityGroups`, `initializedConditions`
  - Add the response parameters `customSecurityGroups`, `initializedConditions` to the interface `DeleteNodePool`
  - Add the response parameters `customSecurityGroups`, `initializedConditions` to the interface `ShowNodePool`

### HuaweiCloud SDK CSE

- _Features_
  - Support the interfaces `UpgradeEngine`, `RetryEngine`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the following interfaces：
    - `CreateDependencyVersion`
    - `ListDependencyVersion`
    - `ShowDependencyVersion`
    - `DeleteDependencyVersion`
    - `ListReservedInstanceConfigs`
    - `ListFunctionReservedInstances`
    - `ListFunctionAsMetric`
- _Bug Fix_
  - None
- _Change_
  - Remove the interface `AsyncInvokeReservedFunction`
  - Add the request parameter `custom_image` to the interface `UpdateFunctionConfig`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `test_interval` to the interface `RecognizeHealthCode`

### HuaweiCloud SDK WAF

- _Features_
  - Support the interfaces `CreatePrepaidCloudWaf`, `ChangePrepaidCloudWaf`, `ShowSubscriptionInfo`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.10 2022-11-17

### HuaweiCloud SDK AOS

- _Features_
  - Support the `Application Orchestration Service`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK CSE

- _Features_
  - Support the service `Cloud Service Engine`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK SMN

- _Features_
  - Support the service `Simple Message Notification`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK DCS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type `integer` -> `int32` of the request parameter `new_capacity` of the interface `ResizeInstance`

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type `string` -> `enum` of the request parameter `monitorMetrics` of the interface `RegisterServerMonitor`

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `VPN` to the request parameter `associate_instance_type` to the interface `DisassociatePublicips`
  - Add the enum values `VPN` to the request parameter `associate_instance_type` to the interface `AssociatePublicips`

### HuaweiCloud SDK EPS

- _Features_
  - Support the interface `ListProviders`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `ttl` to the interface `CreateMessage`
  - Add the request parameters `Sp-Auth-Token`, `Stage-Auth-Token` to the interface `ListCertificates`
  - Changes of the interface `AddCertificate`:
    - Add the request parameters `Sp-Auth-Token`, `Stage-Auth-Token`, `addCertificateRequestBody`
    - Remove the request parameter `AddCertificateRequestBody`
  - Add the request parameters `Sp-Auth-Token`, `Stage-Auth-Token` to the interface `DeleteCertificate`
  - Changes of the interface `CheckCertificate`:
    - Add the request parameters `Sp-Auth-Token`, `Stage-Auth-Token`, `checkCertificateRequestBody`
    - Remove the request parameter `CheckCertificateRequestBody`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeGeneralTable`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeVatInvoice`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeInvoiceVerification`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeGeneralText`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeWebImage`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeHealthCode`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeQuotaInvoice`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeIdCard`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeHandwriting`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeVehicleLicense`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeTransportationLicense`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeTaxiInvoice`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeAutoClassification`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeTollInvoice`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeMvsInvoice`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeLicensePlate`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeFlightItinerary`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeBusinessLicense`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeDriverLicense`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeBusinessCard`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeTrainTicket`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeVin`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizePassport`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeBankcard`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeInsurancePolicy`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeFinancialStatement`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeQualificationCertificate`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeThailandIdcard`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeMyanmarIdcard`
  - Changes of the interface `RecognizeMyanmarDriverLicense`:
    - Add the request parameter `Enterprise-Project-Id`
    - Add the response parameters `birth`, `birth`
    - Remove the response parameters `Birth`, `Birth`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeChileIdCard`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeThailandLicensePlate`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeWaybillElectronic`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizePcrTestRecord`
  - Changes of the interface `RecognizeIdDocument`:
    - Add the request parameter `Enterprise-Project-Id`
    - Modify the type `object` -> `object` of the response parameter `result`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeHkIdCard`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeCambodianIdCard`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeExitEntryPermit`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeMainlandTravelPermit`
  - Add the request parameter `Enterprise-Project-Id` to the interface `RecognizeMacaoIdCard`

### HuaweiCloud SDK TMS

- _Features_
  - Support the interface `ListProviders`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `CreateSubnet`:
    - Add the enum values `addresstime` to the request parameter `opt_name`
    - Add the enum values `addresstime` to the response parameter `opt_name`
  - Add the enum values `addresstime` to the response parameter `opt_name` to the interface `ListSubnets`
  - Add the enum values `addresstime` to the response parameter `opt_name` to the interface `ShowSubnet`
  - Add the enum values `addresstime` to the request parameter `opt_name` to the interface `UpdateSubnet`

# 3.1.9 2022-11-14

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the interface `ShowWorkflowExecutionForPage`
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `enable_stream_response` to the interface `ListWorkflow`
  - Add the response parameter `enable_stream_response` to the interface `UpdateWorkFlow`

### HuaweiCloud SDK VPCEP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type `string` -> `array` of the response parameter `Action` of the interface `ListEndpoints`
  - Modify the type `string` -> `array` of the response parameter `Action` of the interface `DeleteEndpointPolicy`
  - Changes of the interface `UpdateEndpointPolicy`:
    - Modify the type `string` -> `array` of the request parameter `Action`
    - Modify the type `string` -> `array` of the response parameter `Action`

### HuaweiCloud SDK WAF

- _Features_
  - Support the interfaces `MigrateCompositeHosts`, `ShowSourceIp`, `ListNoticeConfigs`, `UpdateAlertNoticeConfig`
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `instance_name` to the interface `ListInstance`
  - Add the response parameters `enabled`, `ltsAttackStreamID` to the interface `ShowLtsInfoConfig`
  - Changes of the interface `UpdateLtsInfoConfig`:
    - Add the request parameters `enabled`, `ltsAttackStreamID`
    - Add the response parameters `enabled`, `ltsAttackStreamID`
    - The request parameter `enabale` changed to not required
  - Add the response parameter `description` to the interface `ShowIpGroup`

# 3.1.8 2022-11-03

### HuaweiCloud SDK GA

- _Features_
  - Support the service `Global accelerator`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - The request parameter `destination_type` changed to not required of the interface `NovaCreateServers`

### HuaweiCloud SDK EPS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `region_id` to the interface `MigrateResource`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `RecognizeGeneralText`:
    - Add the request parameter `character_mode`
    - Add the response parameters `confidence`, `char_list`
  - Changes of the interface `RecognizeThailandIdcard`:
    - Add the request parameter `return_text_location`
    - Add the response parameter `text_location`

### HuaweiCloud SDK WAF

- _Features_
  - Support the following interfaces：
    - `ListInstance`
    - `CreateInstance`
    - `ShowInstance`
    - `RenameInstance`
    - `DeleteInstance`
    - `ShowLtsInfoConfig`
    - `UpdateLtsInfoConfig`
    - `ListIpGroup`
    - `CreateIpGroup`
    - `ShowIpGroup`
    - `UpdateIpGroup`
    - `DeleteIpGroup`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.1.7 2022-11-02

### HuaweiCloud SDK ECS

- _Features_
  - Support the interfaces `UpdateServerBlockDevice`, `RegisterServerMonitor`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK SIS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `sichuan_8k_common` to the request parameter `property` to the interface `PushTranscriberJobs`
  - Add the enum values `chinese_huaxiaolong_common`, `chinese_huaxiaorui_common` to the request parameter `property` to the interface `RunTts`

# 3.1.6 2022-10-27

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameters `X-Client-Token`, `batch_create_in_multi_az` to the interface `CreateServers`
  - Add the request parameter `X-Client-Token` to the interface `CreatePostPaidServers`

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `tls-1-1`, `tls-1-2`, `tls-1-2-strict`, Remove the enum values ` tls-1-1`, ` tls-1-2`, ` tls-1-2-strict` from the request parameter `tls_ciphers_policy` to the interface `CreateListener`
  - Remove the request parameter `cascade` from the interface `DeleteListener`
  - Remove the request parameter `cascade` from the interface `DeleteLoadbalancer`
  - Changes of the interface `ListApiVersions`:
    - Add the response parameter `versions`
    - Remove the response parameters `id`, `status`
  - Remove the request parameter `global_eip_ids` from the interface `CreateLoadBalancer`

### HuaweiCloud SDK IMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `market` to the request parameter `__imagetype` to the interface `ListTags`
  - Changes of the interface `GlanceListImages`:
    - Add the enum values `market` to the request parameter `__imagetype`
    - Add the enum values `market` to the response parameter `__imagetype`
  - Add the enum values `market` to the response parameter `__imagetype` to the interface `GlanceShowImage`
  - Add the enum values `market` to the response parameter `__imagetype` to the interface `GlanceUpdateImage`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `properties` to the interface `CreateMessage`
  - Add the response parameter `properties` to the interface `ListDeviceMessages`
  - Add the response parameter `properties` to the interface `ShowDeviceMessage`

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type `float` -> `integer` of the request parameter `frame_interval` of the interface `RunCreateVideoModerationJob`
  - Modify the type `float` -> `integer` of the response parameters `start_time`, `end_time` of the interface `RunQueryAudioModerationJob`
  - Changes of the interface `RunQueryVideoModerationJob`:
    - Modify the type `integer` -> `float` of the response parameter `time`
    - Modify the type `integer` -> `float` of the response parameters `start_time`, `end_time`

# 3.1.5 2022-09-28

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `type`, `idcard_number`, `phone_number`, `province`, `city`, `vaccination_status`, `pcr_test_result`, `pcr_test_organization`, `pcr_test_time`, `pcr_sampling_time`, `reached_city` to the interface `RecognizeHealthCode`

### HuaweiCloud SDK VPCEP

- _Features_
  - Support the following interfaces：
    - `UpdateEndpointServiceName`
    - `UpdateEndpointConnectionsDesc`
    - `BatchAddEndpointServicePermissions`
    - `BatchRemoveEndpointServicePermissions`
    - `UpdateEndpointServicePermissionDesc`
    - `UpdateEndpointPolicy`
    - `DeleteEndpointPolicy`
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `CreateEndpointService`:
    - Add the request parameter `description`
    - Add the response parameter `description`
  - Changes of the interface `ListEndpointService`:
    - Add the request parameter `public_border_group`
    - Add the response parameters `description`, `public_border_group`
    - Modify the type `string` -> `enum` of the response parameter `service_type`
    - Modify the type `enum` -> `string` of the response parameter `server_type`
  - Changes of the interface `UpdateEndpointService`:
    - Add the request parameter `description`
    - Add the response parameter `description`
  - Changes of the interface `ListServiceDetails`:
    - Add the response parameter `description`
    - Modify the type `string` -> `enum` of the response parameter `service_type`
  - Remove the response parameters `id`, `marker_id`, `created_at`, `updated_at`, `domain_id`, `status` from the interface `ListServiceConnections`
  - Add the response parameter `description` to the interface `AcceptOrRejectEndpoint`
  - Remove the response parameters `id`, `permission`, `created_at` from the interface `ListServicePermissionsDetails`
  - Changes of the interface `CreateEndpoint`:
    - Add the request parameter `description`
    - Add the response parameters `specification_name`, `description`, `policy_statement`, `enable_status`
  - Changes of the interface `ListEndpoints`:
    - Add the request parameter `public_border_group`
    - Add the response parameters `description`, `policy_statement`, `endpoint_pool_id`, `public_border_group`
  - Add the response parameters `description`, `policy_statement` to the interface `ListEndpointInfoDetails`
  - Remove the response parameters `status`, `id`, `updated`, `version`, `min_version`, `links` from the interface `ListVersionDetails`
  - Remove the response parameters `status`, `id`, `updated`, `version`, `min_version`, `links` from the interface `ListSpecifiedVersionDetails`
  - Changes of the interface `ListResourceInstances`:
    - Add the request parameters `sys_tags`, `without_any_tag`
    - Remove the request parameters `key`, `value`, `key`, `value`, `key`, `value`, `key`, `value`

# 3.1.4 2022-09-26

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `version`, `last_modified` to the interface `CreateDependency`
  - Add the response parameters `version`, `last_modified` to the interface `ListDependencies`

### HuaweiCloud SDK Moderation

- _Features_
  - None
- _Bug Fix_
  - Fix the problem that the response parameters' type of the interface `CheckImageModeration` is incorrect
- _Change_
  - None

# 3.1.3 2022-09-22

### HuaweiCloud SDK DevStar

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the enum values `none` to the response parameter `deploy_type` to the interface `ShowApplicationV3`
  - Add the response parameter `subscribe_guide` to the interface `ShowApplicationDependentResources`
  - Add the enum values `none` to the response parameter `deploy_type` to the interface `ListApplicationsV6`
  - Add the response parameter `category_name` to the interface `ShowApplicationReleaseRepositories`
  - Add the response parameter `subscribe_guide` to the interface `ShowTemplateV3`
  - Add the response parameter `subscribe_guide` to the interface `ListTemplatesV2`
  - Add the response parameter `subscribe_guide` to the interface `ListTemplates`

### HuaweiCloud SDK EIP

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `port_id` to the interface `CreatePublicip`
  - Add the request parameter `port_id` to the interface `CreatePrePaidPublicip`

### HuaweiCloud SDK IoTDA

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `error_info` to the interface `ListDeviceMessages`
  - Add the response parameter `error_info` to the interface `ShowDeviceMessage`

### HuaweiCloud SDK Moderation

- _Features_
  - Support the interface `CheckImageModeration`
- _Bug Fix_
  - None
- _Change_
  - The request parameter `url`, `categories` changed to required of the interface `RunCreateAudioModerationJob`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `RecognizeIdCard`:
    - Add the request parameter `detect_copy`
    - Add the response parameter `detect_copy_result`

### HuaweiCloud SDK SMS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the response parameter `disks` from the interface `ListTemplates`
  - Remove the response parameter `disks` from the interface `ShowTemplate`
  - Remove the request parameter `disks` from the interface `UpdateMigproject`
  - Remove the response parameter `disks` from the interface `ShowMigproject`

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `pack_type`, `pack_type` to the interface `PublishAssets`
  - Add the response parameters `pack_type`, `pack_type` to the interface `UnpublishAssets`
  - Add the response parameters `pack_type`, `pack_type` to the interface `ShowAssetMeta`
  - Add the response parameters `pack_type`, `pack_type` to the interface `ShowAssetDetail`
  - Add the response parameters `pack_type`, `pack_type` to the interface `ShowTakeOverTaskDetails`
  - Add the response parameters `pack_type`, `pack_type` to the interface `ShowTakeOverAssetDetails`

# 3.1.2 2022-09-15

### HuaweiCloud SDK EVS

- _Features_
  - Support the following interfaces：
    - `ShowVersion`
    - `ListVersions`
    - `CinderShowVolumeTransfer`
    - `CinderDeleteVolumeTransfer`
    - `CinderListVolumeTransfers`
    - `CinderCreateVolumeTransfer`
    - `CinderAcceptVolumeTransfer`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Moderation

- _Features_
  - Support the interfaces `RunCreateVideoModerationJob`, `RunQueryVideoModerationJob`
- _Bug Fix_
  - None
- _Change_
  - The request parameter `url` changed to not required of the interface `RunCreateAudioModerationJob`

# 3.1.1 2022-09-08

### HuaweiCloud SDK EVS

- _Features_
  - Support the following interfaces：
    - `ShowVersion`
    - `ListVersions`
    - `CinderShowVolumeTransfer`
    - `CinderDeleteVolumeTransfer`
    - `CinderListVolumeTransfers`
    - `CinderCreateVolumeTransfer`
    - `CinderAcceptVolumeTransfer`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK Moderation

- _Features_
  - Support the interfaces `RunCreateVideoModerationJob`, `RunQueryVideoModerationJob`
- _Bug Fix_
  - None
- _Change_
  - The request parameter `url` changed to not required of the interface `RunCreateAudioModerationJob`

# 3.0.57 2022-09-01

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the response parameters `version`, `last_modified` from the interface `CreateDependency`
  - Remove the response parameters `version`, `last_modified` from the interface `ListDependencies`

### HuaweiCloud SDK IAM

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `UpdateDomainProtectPolicy`:
    - Add the request parameters `allow_user`, `mobile`, `admin_check`, `email`, `scene`
    - Remove the response parameter `operation_protection`
  - Remove the response parameter `operation_protection` from the interface `ShowDomainProtectPolicy`
  - The request parameter `maximum_consecutive_identical_chars`, `minimum_password_age`, `minimum_password_length`, `number_of_recent_passwords_disallowed`, `password_not_username_or_invert`, `password_validity_period`, `password_char_combination` changed to not required of the interface `UpdateDomainPasswordPolicy`
  - The request parameter `account_validity_period`, `custom_info_for_login`, `lockout_duration`, `login_failed_times`, `period_with_login_failures`, `session_timeout`, `show_recent_login_info` changed to not required of the interface `UpdateDomainLoginPolicy`
  - Add the enum values `mapping` to the request parameter `type` to the interface `ShowDomainQuota`

# 3.0.56 2022-08-29

### HuaweiCloud SDK ECS

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `batch_create_in_multi_az` to the interface `CreatePostPaidServers`

### HuaweiCloud SDK IMS

- _Features_
  - Support the interface `ShowJobProgress`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.55-rc 2022-08-25

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the following interfaces：
    - `ListMasterSlavePools`
    - `CreateMasterSlavePool`
    - `ShowMasterSlavePool`
    - `DeleteMasterSlavePool`
  - Add the response parameter `waf_failure_action` to the interface `ListLoadBalancers`
  - Add the request parameter `waf_failure_action` to the interface `CreateLoadBalancer`
  - Add the response parameter `waf_failure_action` to the interface `ShowLoadBalancer`
  - Changes of the interface `UpdateLoadBalancer`:
    - Add the request parameter `waf_failure_action`
    - Add the response parameter `waf_failure_action`
    - Remove the request parameter `cloud_service_console_url`
  - Add the response parameters `enc_certificate`, `enc_private_key` to the interface `ListCertificates`
  - Add the request parameters `enc_certificate`, `enc_private_key` to the interface `CreateCertificate`
  - Add the response parameters `enc_certificate`, `enc_private_key` to the interface `ShowCertificate`
  - Changes of the interface `UpdateCertificate`:
    - Add the request parameters `enc_certificate`, `enc_private_key`
    - Add the response parameters `enc_certificate`, `enc_private_key`
  - Add the response parameter `sni_match_algo` to the interface `ListListeners`
  - Add the request parameter `sni_match_algo` to the interface `CreateListener`
  - Add the response parameter `sni_match_algo` to the interface `ShowListener`
  - Changes of the interface `UpdateListener`:
    - Add the request parameter `sni_match_algo`
    - Add the response parameter `sni_match_algo`
  - Add the request parameter `instance_id` to the interface `ListMembers`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `RecognizeWebImage`:
    - Add the request parameter `detect_font`
    - Add the response parameters `font_list`, `font_scores`

### HuaweiCloud SDK VOD

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type `int32` -> `int64` of the request parameter `size` of the interface `CheckMd5Duplication`

# 3.0.54-rc 2022-08-18

### HuaweiCloud SDK ECS

- _Features_
  - Support the interface `ListServersByTag`
- _Bug Fix_
  - None
- _Change_
  - The request parameter `destination_type` changed to required of the interface `NovaCreateServers`

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `CreateFunction`:
    - Add the response parameters `enable_dynamic_memory`, `is_stateful_function`, `enable_auth_in_header`, `custom_image`
    - The request parameter `file`, `link` changed to required
    - Modify the type `int32` -> `string` of the response parameter `user_id`
    - Modify the type `int32` -> `string` of the response parameter `user_group_id`
    - The response parameter `concurrent_num` changed to required
    - The response parameter `mount_share_path` changed to not required
  - Changes of the interface `ListFunctions`:
    - Add the response parameter `fail_count`
    - Remove the request parameter `X-Auth-Token`
    - The response parameter `concurrent_num` changed to required
  - Changes of the interface `ShowFunctionCode`:
    - Remove the response parameter `id`
    - The response parameter `file`, `link`, `concurrent_num` changed to required
  - Changes of the interface `UpdateFunctionCode`:
    - Remove the response parameter `id`
    - The request parameter `file`, `link` changed to required
    - The response parameter `file`, `link`, `concurrent_num` changed to required
  - Changes of the interface `ShowFunctionConfig`:
    - Add the response parameters `is_stateful_function`, `enable_auth_in_header`, `custom_image`
    - Remove the response parameter `id`
    - Modify the type `int32` -> `string` of the response parameter `user_id`
    - Modify the type `int32` -> `string` of the response parameter `user_group_id`
    - The response parameter `concurrent_num` changed to required
    - The response parameter `mount_share_path` changed to not required
  - Changes of the interface `UpdateFunctionConfig`:
    - Add the response parameters `enable_auth_in_header`, `custom_image`
    - Remove the request parameter `X-Auth-Token`
    - Remove the response parameter `id`
    - Modify the type `int32` -> `string` of the request parameter `user_id`
    - Modify the type `int32` -> `string` of the request parameter `user_group_id`
    - The request parameter `concurrent_num` changed to required
    - The request parameter `mount_share_path` changed to not required
    - Modify the type `int32` -> `string` of the response parameter `user_id`
    - Modify the type `int32` -> `string` of the response parameter `user_group_id`
    - The response parameter `concurrent_num` changed to required
    - The response parameter `mount_share_path` changed to not required
  - Changes of the interface `UpdateFunctionMaxInstanceConfig`:
    - Remove the response parameter `id`
    - Modify the type `int32` -> `string` of the response parameter `user_id`
    - Modify the type `int32` -> `string` of the response parameter `user_group_id`
    - The response parameter `concurrent_num` changed to required
    - The response parameter `mount_share_path` changed to not required
  - Changes of the interface `CreateFunctionVersion`:
    - Remove the response parameter `id`
    - Modify the type `int32` -> `string` of the response parameter `user_id`
    - Modify the type `int32` -> `string` of the response parameter `user_group_id`
    - The response parameter `concurrent_num` changed to required
    - The response parameter `mount_share_path` changed to not required
  - Changes of the interface `ListFunctionVersions`:
    - Add the response parameters `is_stateful_function`, `enable_auth_in_header`, `custom_image`, `reserved_instance_idle_mode`
    - Remove the response parameters `log_group_id`, `log_stream_id`
    - The response parameter `concurrent_num` changed to required
  - Add the enum values `SMN`, `RABBITMQ`, `DEDICATEDGATEWAY`, `OPENSOURCEKAFKA`, `APIC`, `GAUSSMONGO`, `EVENTGRID` to the request parameter `trigger_type_code` to the interface `CreateFunctionTrigger`
  - Changes of the interface `ListFunctionTriggers`:
    - Add the enum values `RABBITMQ`, `DEDICATEDGATEWAY`, `OPENSOURCEKAFKA`, `APIC`, `GAUSSMONGO`, `EVENTGRID` to the response parameter `trigger_type_code`
    - Add the enum values `DISABLE`, Remove the enum values `DISABLED` from the response parameter `trigger_status`
  - Add the enum values `RABBITMQ`, `DEDICATEDGATEWAY`, `OPENSOURCEKAFKA`, `APIC`, `GAUSSMONGO`, `EVENTGRID` to the request parameter `trigger_type_code` to the interface `DeleteFunctionTrigger`
  - Changes of the interface `ShowFunctionTrigger`:
    - Add the enum values `RABBITMQ`, `DEDICATEDGATEWAY`, `OPENSOURCEKAFKA`, `APIC`, `GAUSSMONGO`, `EVENTGRID` to the request parameter `trigger_type_code`
    - Add the enum values `RABBITMQ`, `DEDICATEDGATEWAY`, `OPENSOURCEKAFKA`, `APIC`, `GAUSSMONGO`, `EVENTGRID` to the response parameter `trigger_type_code`
    - Add the enum values `DISABLE`, Remove the enum values `DISABLED` from the response parameter `trigger_status`
  - Changes of the interface `UpdateTrigger`:
    - Add the enum values `DISABLE`, Remove the enum values `DISABLED` from the request parameter `trigger_status`
    - Add the enum values `RABBITMQ`, `DEDICATEDGATEWAY`, `OPENSOURCEKAFKA`, `APIC`, `GAUSSMONGO`, `EVENTGRID` to the request parameter `trigger_type_code`
    - The request parameter `trigger_status` changed to not required
  - Modify the type `float` -> `int32` of the response parameter `value` of the interface `ListStatistics`
  - Changes of the interface `UpdateFunctionReservedInstancesCount`:
    - Add the request parameter `UpdateFunctionReservedInstancesCountRequestBody`
    - Add the response parameters `idle_mode`, `tactics_config`
    - Remove the request parameter `UpdateFunctionReservedInstancesRequestBody`
  - Changes of the interface `CreateDependency`:
    - Add the response parameters `version`, `last_modified`
    - Modify the type `enum` -> `string` of the response parameter `runtime`
  - Changes of the interface `ListDependencies`:
    - Add the request parameters `maxitems`, `ispublic`
    - Add the response parameters `version`, `last_modified`
    - Modify the type `int32` -> `int64` of the response parameter `count`
  - Changes of the interface `ShowDependcy`:
    - Add the response parameters `version`, `last_modified`
    - Modify the type `enum` -> `string` of the response parameter `runtime`
  - Changes of the interface `UpdateDependcy`:
    - Add the request parameter `UpdateDependcyRequestBody`
    - Remove the request parameter `UpdateDependencyRequestBody`
    - Modify the type `enum` -> `string` of the response parameter `runtime`
  - Remove the response parameters `content`, `last_modified` from the interface `CreateEvent`
  - Remove the response parameters `content`, `last_modified` from the interface `UpdateEvent`
  - Changes of the interface `ImportFunction`:
    - Add the request parameter `package`
    - Remove the request parameter `X-Auth-Token`
    - The response parameter `concurrent_num` changed to required
  - Add the request parameter `X-Auth-Token` to the interface `EnableLtsLogs`
  - Add the response parameter `group_name` to the interface `ShowLtsLogDetails`
  - The request parameter `request_id` changed to required of the interface `CancelAsyncInvocation`
  - Changes of the interface `CreateWorkflow`:
    - Add the request parameter `duration`
    - Add the enum values `SMN`, `APIG`, `APIG_DE` to the request parameter `trigger_type`
  - Changes of the interface `ListWorkflow`:
    - Add the request parameters `enterprise_project`, `mode`
    - Remove the response parameters `id`, `workflow_urn`, `name`, `description`, `created_time`, `updated_time`, `created_by`
  - Add the request parameter `X-WorkflowRun-MergeFnParameters` to the interface `StartWorkflowExecution`
  - Remove the response parameters `workflow_id`, `workflow_urn`, `execution_id`, `status`, `begin_time`, `end_time`, `last_update_time`, `created_by` from the interface `ListWorkflowExecutions`
  - Changes of the interface `ShowWorkflowExecution`:
    - Add the request parameter `X-Get-Workflow-Full-History-Data`
    - Modify the type `string` -> `object` of the response parameter `workflow_urn`
  - Changes of the interface `ShowWorkFlow`:
    - Remove the response parameters `name`, `description`, `triggers`, `start`, `functions`, `states`, `constants`, `retries`, `mode`, `express_config`, `enterprise_project_id`
    - Modify the type `string` -> `object` of the response parameter `workflow_urn`
    - The response parameter `id`, `workflow_urn`, `created_time`, `updated_time`, `created_by` changed to required
  - Changes of the interface `UpdateWorkFlow`:
    - Add the request parameter `duration`
    - Add the enum values `SMN`, `APIG`, `APIG_DE` to the request parameter `trigger_type`
    - Modify the type `string` -> `object` of the response parameter `workflow_urn`
    - The response parameter `id`, `workflow_urn`, `name`, `description`, `created_time`, `updated_time`, `created_by` changed to required

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `RecognizeIdCard`:
    - Add the request parameter `detect_reproduce`
    - Add the response parameter `detect_reproduce_result`

### HuaweiCloud SDK VOD

- _Features_
  - Support the following interfaces：
    - `ListTranscodeTemplate`
    - `UpdateTranscodeTemplate`
    - `CreateTranscodeTemplate`
    - `DeleteTranscodeTemplate`
    - `ListTemplateGroupCollection`
    - `UpdateTemplateGroupCollection`
    - `CreateTemplateGroupCollection`
    - `DeleteTemplateGroupCollection`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.53-rc 2022-08-11

### HuaweiCloud SDK Moderation

- _Features_
  - Support the interfaces `RunCreateAudioModerationJob`, `RunQueryAudioModerationJob`
- _Bug Fix_
  - None
- _Change_
  - Remove the request parameter `ad_glossaries` from the interface `RunImageModeration`

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `RecognizeMacaoIdCard`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK SWR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the request parameter `filter` to the interface `ListNamespaces`
  - Add the request parameters `limit`, `offset`, `order_column`, `order_type` to the interface `ListReposDetails`
  - Add the request parameter `filter` to the interface `ListRepositoryTags`
  - Add the request parameters `namespace`, `name`, `center`, `limit`, `offset`, `order_column`, `order_type` to the interface `ListSharedReposDetails`
  - Changes of the interface `ListRetentionHistories`:
    - Add the request parameter `filter`
    - Remove the request parameters `offset`, `limit`

# 3.0.52-rc 2022-08-08

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - Fix the problem that the custom Content-Type causes the signature to fail
- _Change_
  - None

# 3.0.51-rc 2022-08-02

### HuaweiCloud SDK Image

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Remove the request parameter `language` from the interface `RunImageDescription`

# 3.0.50-rc 2022-07-21

### HuaweiCloud SDK Image

- _Features_
  - Support the interface `RunImageDescription`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `security_group_rules_links` to the interface `NeutronListSecurityGroupRules`

# 3.0.49-rc 2022-07-14

### HuaweiCloud SDK Image

- _Features_
  - Support the service `Image Recognition`
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
  - Modify the type `date-time` -> `string` of the response parameter `create_time` of the interface `ListPublicips`
  - Modify the type `date-time` -> `string` of the response parameter `create_time` of the interface `ShowPublicip`

### HuaweiCloud SDK VPC

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameters `port_filter`, `ovs_hybrid_plug` to the interface `ListPorts`
  - Add the response parameters `port_filter`, `ovs_hybrid_plug` to the interface `UpdatePort`
  - Add the response parameters `port_filter`, `ovs_hybrid_plug` to the interface `ShowPort`
  - Add the response parameter `remote_address_group_id` to the interface `CreateSecurityGroup`
  - Add the response parameter `remote_address_group_id` to the interface `ListSecurityGroups`
  - Add the response parameter `remote_address_group_id` to the interface `ShowSecurityGroup`
  - Add the response parameter `remote_address_group_id` to the interface `ListSecurityGroupRules`
  - Add the response parameter `remote_address_group_id` to the interface `ShowSecurityGroupRule`
  - Add the response parameter `remote_address_group_id` to the interface `NeutronListSecurityGroups`
  - Add the response parameter `remote_address_group_id` to the interface `NeutronUpdateSecurityGroup`
  - Add the response parameter `remote_address_group_id` to the interface `NeutronShowSecurityGroup`
  - Add the response parameter `remote_address_group_id` to the interface `NeutronListSecurityGroupRules`
  - Add the response parameter `remote_address_group_id` to the interface `NeutronShowSecurityGroupRule`

# 3.0.48-rc 2022-07-07

### HuaweiCloud SDK CCE

- _Features_
  - Support the interfaces `UpdateClusterEip`, `ShowClusterEndpoints`, `ShowVersion`
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListNodes`:
    - Add the response parameters `isStatic`, `privateIPv6IP`
    - The response parameter `key`, `effect` changed to required
  - Changes of the interface `CreateNode`:
    - Add the request parameter `isStatic`
    - The request parameter `key`, `effect` changed to required
  - Changes of the interface `ShowNode`:
    - Add the response parameters `isStatic`, `privateIPv6IP`
    - The response parameter `key`, `effect` changed to required
  - Changes of the interface `DeleteNode`:
    - Add the response parameters `isStatic`, `privateIPv6IP`
    - The response parameter `key`, `effect` changed to required
  - Changes of the interface `UpdateNode`:
    - Add the response parameters `isStatic`, `privateIPv6IP`
    - The response parameter `key`, `effect` changed to required
  - The request parameter `key`, `effect` changed to required of the interface `AddNode`
  - The request parameter `key`, `effect` changed to required of the interface `ResetNode`
  - Changes of the interface `ListNodePools`:
    - Add the response parameter `isStatic`
    - The response parameter `key`, `effect` changed to required
  - Changes of the interface `CreateNodePool`:
    - Add the request parameter `isStatic`
    - The request parameter `key`, `effect` changed to required
  - Changes of the interface `ShowNodePool`:
    - Add the response parameter `isStatic`
    - The response parameter `key`, `effect` changed to required
  - Changes of the interface `DeleteNodePool`:
    - Add the response parameter `isStatic`
    - The response parameter `key`, `effect` changed to required
  - Changes of the interface `UpdateNodePool`:
    - Add the response parameter `isStatic`
    - The request parameter `key`, `effect` changed to required
    - The response parameter `key`, `effect` changed to required

### HuaweiCloud SDK ELB

- _Features_
  - Support the interfaces `ListMasterSlavePools`, `CreateMasterSlavePool`, `ShowMasterSlavePool`, `DeleteMasterSlavePool`
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListSystemSecurityPolicies`:
    - Modify the type `array` -> `string` of the response parameter `protocols`
    - Modify the type `array` -> `string` of the response parameter `ciphers`
  - Add the request parameter `X-Auth-Token` to the interface `ListQuotaDetails`
  - Add the request parameter `public_border_group` to the interface `ListAvailabilityZones`
  - Changes of the interface `CreateLoadBalancer`:
    - Add the request parameters `id`, `global_eip_ids`
    - Remove the request parameter `min_l4_flavor_id`
    - The request parameter `X-Auth-Token` changed to required
  - Changes of the interface `ListLoadBalancers`:
    - Add the response parameters `global_eips`, `public_border_group`
    - Remove the response parameter `min_l4_flavor_id`
    - The request parameter `X-Auth-Token` changed to required
  - Changes of the interface `UpdateLoadBalancer`:
    - Add the request parameter `cloud_service_console_url`
    - Add the response parameters `global_eips`, `public_border_group`
    - Remove the request parameter `min_l4_flavor_id`
    - Remove the response parameter `min_l4_flavor_id`
  - Changes of the interface `ShowLoadBalancer`:
    - Add the response parameters `global_eips`, `public_border_group`
    - Remove the response parameter `min_l4_flavor_id`
  - Add the request parameter `X-Auth-Token` to the interface `ChangeLoadbalancerChargeMode`
  - Remove the request parameters `enc_certificate`, `enc_private_key` from the interface `CreateCertificate`
  - Remove the response parameters `enc_certificate`, `enc_private_key` from the interface `ListCertificates`
  - Changes of the interface `UpdateCertificate`:
    - Remove the request parameters `enc_certificate`, `enc_private_key`
    - Remove the response parameters `enc_certificate`, `enc_private_key`
  - Remove the response parameters `enc_certificate`, `enc_private_key` from the interface `ShowCertificate`
  - Add the request parameter `quic_config` to the interface `CreateListener`
  - Add the response parameter `quic_config` to the interface `ListListeners`
  - Changes of the interface `UpdateListener`:
    - Add the request parameter `quic_config`
    - Add the response parameter `quic_config`
  - Add the response parameter `quic_config` to the interface `ShowListener`
  - Add the request parameters `vpc_id`, `type` to the interface `CreatePool`
  - Changes of the interface `ListPools`:
    - Add the request parameters `vpc_id`, `type`
    - Add the response parameters `created_at`, `updated_at`, `vpc_id`, `type`
  - Changes of the interface `UpdatePool`:
    - Add the request parameters `X-Auth-Token`, `vpc_id`, `type`
    - Add the response parameters `created_at`, `updated_at`, `vpc_id`, `type`
  - Add the response parameters `created_at`, `updated_at`, `vpc_id`, `type` to the interface `ShowPool`
  - Modify the type `enum` -> `string` of the request parameter `project_id` of the interface `CreateMember`
  - Changes of the interface `ListMembers`:
    - Add the response parameters `status`, `loadbalancers`, `created_at`, `updated_at`
    - Remove the request parameter `instance_id`
  - Add the response parameters `status`, `loadbalancers`, `created_at`, `updated_at` to the interface `UpdateMember`
  - Add the response parameters `status`, `loadbalancers`, `created_at`, `updated_at` to the interface `ShowMember`
  - Add the response parameters `status`, `loadbalancers`, `created_at`, `updated_at` to the interface `ListAllMembers`
  - Add the response parameters `created_at`, `updated_at` to the interface `ListHealthMonitors`
  - Add the response parameters `created_at`, `updated_at` to the interface `UpdateHealthMonitor`
  - Add the response parameters `created_at`, `updated_at` to the interface `ShowHealthMonitor`
  - Add the request parameter `redirect_pools_config` to the interface `CreateL7Policy`
  - Add the response parameters `redirect_pools_config`, `created_at`, `updated_at` to the interface `ListL7Policies`
  - Changes of the interface `UpdateL7Policy`:
    - Add the request parameter `redirect_pools_config`
    - Add the response parameters `redirect_pools_config`, `created_at`, `updated_at`
  - Add the response parameters `redirect_pools_config`, `created_at`, `updated_at` to the interface `ShowL7Policy`
  - Add the request parameter `X-Auth-Token` to the interface `BatchUpdatePoliciesPriority`
  - Add the response parameters `created_at`, `updated_at` to the interface `ListL7Rules`
  - Add the response parameters `created_at`, `updated_at` to the interface `UpdateL7Rule`
  - Add the response parameters `created_at`, `updated_at` to the interface `ShowL7Rule`
  - Changes of the interface `UpdateIpList`:
    - Remove the request parameters `name`, `ip_list`, `description`
    - The request parameter `X-Auth-Token` changed to required
  - Changes of the interface `BatchDeleteIpList`:
    - Add the request parameter `BatchDeleteIpListRequestBody`
    - Remove the request parameter `BatchDeleteIpGroupIpListRequestBody`
    - The request parameter `X-Auth-Token` changed to required
  - Changes of the interface `BatchCreateMembers`:
    - Add the request parameter `BatchCreateMembersRequestBody`
    - Add the response parameter `status`
    - Remove the request parameter `BatchCreateMemberRequestBody`
  - Changes of the interface `BatchDeleteMembers`:
    - Add the request parameter `BatchDeleteMembersRequestBody`
    - Remove the request parameter `BatchDeleteMemberRequestBody`
  - Changes of the interface `UpdateLogtank`:
    - Add the request parameter `UpdateLogtankRequestBody`
    - Remove the request parameter `logtank`

### HuaweiCloud SDK OCR

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Add the response parameter `title` to the interface `RecognizeVatInvoice`

# 3.0.47-rc 2022-06-30

### HuaweiCloud SDK FunctionGraph

- _Features_
  - Support the interface `UpdateFunctionMaxInstanceConfig`
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK OCR

- _Features_
  - Support the interfaces `RecognizeHkIdCard`, `RecognizeCambodianIdCard`, `RecognizeExitEntryPermit`, `RecognizeMainlandTravelPermit`
- _Bug Fix_
  - None
- _Change_
  - Modify the type `int32` -> `float` of the response parameter `direction` of the interface `RecognizeGeneralText`

# 3.0.46-rc 2022-06-23

### HuaweiCloud SDK ELB

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Changes of the interface `ListQuotaDetails`:
    - Add the request parameter `quota_key`
    - Remove the request parameter `type`
  - Changes of the interface `ListListeners`:
    - Add the request parameters `loadbalancer_id`, `connection_limit`, `admin_state_up`, `http2_enable`, `enterprise_project_id`
    - Remove the request parameters `member_timeout`, `client_timeout`, `keepalive_timeout`

# 3.0.45-rc 2022-06-19

### HuaweiCloud SDK OCR

- _Features_
  - Support the interface `RecognizeIdDocument`
- _Bug Fix_
  - None
- _Change_
  - None

# 3.0.44-rc 2022-06-09

### HuaweiCloud SDK ELB

- _Features_
  - Support Elastic Load Balance service.
- _Bug Fix_
  - None
- _Change_
  - None

### HuaweiCloud SDK FunctionGraph

- _Features_
  - None
- _Bug Fix_
  - None
- _Change_
  - Modify the type `string` -> `enum` of the response parameter `runtime` of the interface `UpdateFunctionCode`
  - Modify the type `string` -> `enum` of the response parameter `runtime` of the interface `ShowFunctionCode`
  - Changes of the interface `UpdateFunctionConfig`:
    - Add the request parameter `domain_names`
    - Add the response parameter `domain_names`
    - Modify the type `string` -> `enum` of the response parameter `runtime`
  - Modify the type `string` -> `enum` of the response parameter `runtime` of the interface `ShowFunctionConfig`
  - Modify the type `string` -> `enum` of the response parameter `runtime` of the interface `CreateFunctionVersion`
  - Add the request parameter `option` to the interface `ListStatistics`
  - Modify the type `string` -> `enum` of the response parameter `runtime` of the interface `CreateDependency`
  - Modify the type `string` -> `enum` of the response parameter `runtime` of the interface `ListDependencies`
  - Modify the type `string` -> `enum` of the response parameter `runtime` of the interface `UpdateDependency`
  - Modify the type `string` -> `enum` of the response parameter `runtime` of the interface `ShowDependency`
  - The request parameter `content` changed to required of the interface `UpdateEvent`
  - Add the request parameter `marker` to the interface `ListFunctionAsyncInvocations`
  - The request parameter `workflow_urns` changed to required of the interface `BatchDeleteWorkflows`
  - The request parameter `name`, `trigger_name`, `trigger_type`, `bucket`, `events`, `prefix`, `suffix`, `start`, `name`, `operation`, `id`, `name`, `type`, `end`, `transition`, `ref_name`, `arguments`, `constants`, `name` changed to required of the interface `CreateWorkflow`
  - The request parameter `input` changed to required of the interface `StartWorkflowExecution`
  - Add the response parameters `node_name`, `execution_id`, `request_id` to the interface `ShowWorkflowExecution`
  - The request parameter `name`, `trigger_name`, `trigger_type`, `bucket`, `events`, `prefix`, `suffix`, `start`, `name`, `operation`, `id`, `name`, `type`, `end`, `transition`, `ref_name`, `arguments`, `constants`, `name` changed to required of the interface `UpdateWorkFlow`
  - Changes of the interface `ShowWorkFlow`:
    - Add the response parameters `lts_group_id`, `lts_stream_id`
    - The response parameter `name`, `trigger_name`, `trigger_type`, `bucket`, `events`, `prefix`, `suffix`, `start`, `name`, `operation`, `id`, `name`, `type`, `end`, `transition`, `ref_name`, `arguments`, `constants`, `name` changed to required
  - The request parameter `input` changed to required of the interface `StartSyncWorkflowExecution`

### HuaweiCloud SDK Moderation

- _Features_
  - Support the interface `RunTextModeration`
- _Bug Fix_
  - None
- _Change_
  - None

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
