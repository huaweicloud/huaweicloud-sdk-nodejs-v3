import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddAuditAgentNewRequest } from './model/AddAuditAgentNewRequest';
import { AddAuditAgentNewResponse } from './model/AddAuditAgentNewResponse';
import { AddAuditAgentRequest } from './model/AddAuditAgentRequest';
import { AddAuditAgentResponse } from './model/AddAuditAgentResponse';
import { AddAuditDatabaseNewRequest } from './model/AddAuditDatabaseNewRequest';
import { AddAuditDatabaseNewResponse } from './model/AddAuditDatabaseNewResponse';
import { AddAuditDatabaseRequest } from './model/AddAuditDatabaseRequest';
import { AddAuditDatabaseResponse } from './model/AddAuditDatabaseResponse';
import { AddRdsDatabaseNewRequest } from './model/AddRdsDatabaseNewRequest';
import { AddRdsDatabaseNewResponse } from './model/AddRdsDatabaseNewResponse';
import { AddRdsDatabaseRequest } from './model/AddRdsDatabaseRequest';
import { AddRdsDatabaseResponse } from './model/AddRdsDatabaseResponse';
import { AddRdsNoAgentDatabaseRequest } from './model/AddRdsNoAgentDatabaseRequest';
import { AddRdsNoAgentDatabaseResponse } from './model/AddRdsNoAgentDatabaseResponse';
import { AddWhitelistRequest } from './model/AddWhitelistRequest';
import { AgentEditRequest } from './model/AgentEditRequest';
import { AgentSwitchRequest } from './model/AgentSwitchRequest';
import { AlarmLogRequest } from './model/AlarmLogRequest';
import { AlarmLogRequestTime } from './model/AlarmLogRequestTime';
import { AlarmLogResponseAlarmLog } from './model/AlarmLogResponseAlarmLog';
import { AlarmLogResponseNewAlarmLog } from './model/AlarmLogResponseNewAlarmLog';
import { AuditAgentRequest } from './model/AuditAgentRequest';
import { AuditAgentRespoonseAgents } from './model/AuditAgentRespoonseAgents';
import { AuditInstanceListBean } from './model/AuditInstanceListBean';
import { AuditInstanceRiskCount } from './model/AuditInstanceRiskCount';
import { AuditScopeRequestNew } from './model/AuditScopeRequestNew';
import { AuditScopeSwitchRequestNew } from './model/AuditScopeSwitchRequestNew';
import { AuditSqlRequest } from './model/AuditSqlRequest';
import { AuditSqlRequestTime } from './model/AuditSqlRequestTime';
import { AuditSqlResponseSql } from './model/AuditSqlResponseSql';
import { AuditSqlResponseSqlOperatedObjInfo } from './model/AuditSqlResponseSqlOperatedObjInfo';
import { AuditSqlResponseSqls } from './model/AuditSqlResponseSqls';
import { AuditSummaryResponseDataList } from './model/AuditSummaryResponseDataList';
import { AuditSummaryStatusRequest } from './model/AuditSummaryStatusRequest';
import { AuditUpgradeStatus } from './model/AuditUpgradeStatus';
import { AuditUpgradeStep } from './model/AuditUpgradeStep';
import { AzInfo } from './model/AzInfo';
import { BackupInfo } from './model/BackupInfo';
import { BackupPageRequest } from './model/BackupPageRequest';
import { BackupSwitchRequest } from './model/BackupSwitchRequest';
import { BandWidth } from './model/BandWidth';
import { BatchAddAuditWhitelistRequest } from './model/BatchAddAuditWhitelistRequest';
import { BatchAddAuditWhitelistResponse } from './model/BatchAddAuditWhitelistResponse';
import { BatchAddResourceTagRequest } from './model/BatchAddResourceTagRequest';
import { BatchAddResourceTagResponse } from './model/BatchAddResourceTagResponse';
import { BatchDeleteAuditScopeRequest } from './model/BatchDeleteAuditScopeRequest';
import { BatchDeleteAuditScopeResponse } from './model/BatchDeleteAuditScopeResponse';
import { BatchDeleteResourceTagRequest } from './model/BatchDeleteResourceTagRequest';
import { BatchDeleteResourceTagResponse } from './model/BatchDeleteResourceTagResponse';
import { BatchSetAuditAlarmLogStatusRequest } from './model/BatchSetAuditAlarmLogStatusRequest';
import { BatchSetAuditAlarmLogStatusResponse } from './model/BatchSetAuditAlarmLogStatusResponse';
import { BatchSwitchesRequest } from './model/BatchSwitchesRequest';
import { BatchSwitchesRequestNew } from './model/BatchSwitchesRequestNew';
import { BindDbEncryptEipRequest } from './model/BindDbEncryptEipRequest';
import { BindDbEncryptEipResponse } from './model/BindDbEncryptEipResponse';
import { BindDbOmEipRequest } from './model/BindDbOmEipRequest';
import { BindDbOmEipResponse } from './model/BindDbOmEipResponse';
import { BindEIPRequest } from './model/BindEIPRequest';
import { ChangeDbEncryptSecurityGroupRequest } from './model/ChangeDbEncryptSecurityGroupRequest';
import { ChangeDbEncryptSecurityGroupResponse } from './model/ChangeDbEncryptSecurityGroupResponse';
import { ChangeDbOmSecurityGroupRequest } from './model/ChangeDbOmSecurityGroupRequest';
import { ChangeDbOmSecurityGroupResponse } from './model/ChangeDbOmSecurityGroupResponse';
import { ChangeNameRequest } from './model/ChangeNameRequest';
import { ChangePasswordRequest } from './model/ChangePasswordRequest';
import { ChangeSecurityGroupRequest } from './model/ChangeSecurityGroupRequest';
import { ChargeOrderDbssNew } from './model/ChargeOrderDbssNew';
import { Cluster } from './model/Cluster';
import { ConfigAlarmTopicRequest } from './model/ConfigAlarmTopicRequest';
import { ConfigReportTopicRequest } from './model/ConfigReportTopicRequest';
import { ConfirmUpgradeAuditRequest } from './model/ConfirmUpgradeAuditRequest';
import { ConfirmUpgradeAuditResponse } from './model/ConfirmUpgradeAuditResponse';
import { CountDbAccountSessionRequest } from './model/CountDbAccountSessionRequest';
import { CountDbAccountSessionResponse } from './model/CountDbAccountSessionResponse';
import { CountDbClientSessionRequest } from './model/CountDbClientSessionRequest';
import { CountDbClientSessionResponse } from './model/CountDbClientSessionResponse';
import { CountInjectionStatisticsRequest } from './model/CountInjectionStatisticsRequest';
import { CountInjectionStatisticsResponse } from './model/CountInjectionStatisticsResponse';
import { CountOperationStatisticsRequest } from './model/CountOperationStatisticsRequest';
import { CountOperationStatisticsResponse } from './model/CountOperationStatisticsResponse';
import { CountResourceInstanceByTagRequest } from './model/CountResourceInstanceByTagRequest';
import { CountResourceInstanceByTagResponse } from './model/CountResourceInstanceByTagResponse';
import { CountRiskTrendStatisticsRequest } from './model/CountRiskTrendStatisticsRequest';
import { CountRiskTrendStatisticsResponse } from './model/CountRiskTrendStatisticsResponse';
import { CountSessionStatisticsRequest } from './model/CountSessionStatisticsRequest';
import { CountSessionStatisticsResponse } from './model/CountSessionStatisticsResponse';
import { CountSqlStatisticsRequest } from './model/CountSqlStatisticsRequest';
import { CountSqlStatisticsResponse } from './model/CountSqlStatisticsResponse';
import { CountSqlTrendStatisticsRequest } from './model/CountSqlTrendStatisticsRequest';
import { CountSqlTrendStatisticsResponse } from './model/CountSqlTrendStatisticsResponse';
import { CountStatisticsBean } from './model/CountStatisticsBean';
import { CreateAuditDbAgentRequest } from './model/CreateAuditDbAgentRequest';
import { CreateAuditDbAgentResponse } from './model/CreateAuditDbAgentResponse';
import { CreateAuditRiskRuleRequest } from './model/CreateAuditRiskRuleRequest';
import { CreateAuditRiskRuleResponse } from './model/CreateAuditRiskRuleResponse';
import { CreateAuditScopeRuleRequest } from './model/CreateAuditScopeRuleRequest';
import { CreateAuditScopeRuleResponse } from './model/CreateAuditScopeRuleResponse';
import { CreateAuditSqlRuleRequest } from './model/CreateAuditSqlRuleRequest';
import { CreateAuditSqlRuleResponse } from './model/CreateAuditSqlRuleResponse';
import { CreateDatabaseRequest } from './model/CreateDatabaseRequest';
import { CreateDatabaseRequestDatabase } from './model/CreateDatabaseRequestDatabase';
import { CreateDbEncryptInstancePeriodRequest } from './model/CreateDbEncryptInstancePeriodRequest';
import { CreateDbEncryptInstancePeriodResponse } from './model/CreateDbEncryptInstancePeriodResponse';
import { CreateDbOmInstancePeriodRequest } from './model/CreateDbOmInstancePeriodRequest';
import { CreateDbOmInstancePeriodResponse } from './model/CreateDbOmInstancePeriodResponse';
import { CreateInstancePeriodRequest } from './model/CreateInstancePeriodRequest';
import { CreateInstancePeriodRequestNics } from './model/CreateInstancePeriodRequestNics';
import { CreateInstancePeriodRequestProductInfos } from './model/CreateInstancePeriodRequestProductInfos';
import { CreateInstancePeriodRequestSecurityGroups } from './model/CreateInstancePeriodRequestSecurityGroups';
import { CreateInstancesPeriodOrderNewRequest } from './model/CreateInstancesPeriodOrderNewRequest';
import { CreateInstancesPeriodOrderNewResponse } from './model/CreateInstancesPeriodOrderNewResponse';
import { CreateInstancesPeriodOrderRequest } from './model/CreateInstancesPeriodOrderRequest';
import { CreateInstancesPeriodOrderResponse } from './model/CreateInstancesPeriodOrderResponse';
import { CreateReportRequest } from './model/CreateReportRequest';
import { CreateReportRequestBody } from './model/CreateReportRequestBody';
import { CreateReportResponse } from './model/CreateReportResponse';
import { CreateSensitiveMaskRuleRequest } from './model/CreateSensitiveMaskRuleRequest';
import { CreateSensitiveMaskRuleResponse } from './model/CreateSensitiveMaskRuleResponse';
import { DataBase } from './model/DataBase';
import { DataBaseBean } from './model/DataBaseBean';
import { DatabaseRiskStatisticsDto } from './model/DatabaseRiskStatisticsDto';
import { DeleteAuditAgentNewRequest } from './model/DeleteAuditAgentNewRequest';
import { DeleteAuditAgentNewResponse } from './model/DeleteAuditAgentNewResponse';
import { DeleteAuditAgentRequest } from './model/DeleteAuditAgentRequest';
import { DeleteAuditAgentResponse } from './model/DeleteAuditAgentResponse';
import { DeleteAuditAlarmLogRequest } from './model/DeleteAuditAlarmLogRequest';
import { DeleteAuditAlarmLogResponse } from './model/DeleteAuditAlarmLogResponse';
import { DeleteAuditBackupTaskRequest } from './model/DeleteAuditBackupTaskRequest';
import { DeleteAuditBackupTaskResponse } from './model/DeleteAuditBackupTaskResponse';
import { DeleteAuditDatabaseNewRequest } from './model/DeleteAuditDatabaseNewRequest';
import { DeleteAuditDatabaseNewResponse } from './model/DeleteAuditDatabaseNewResponse';
import { DeleteAuditDatabaseRequest } from './model/DeleteAuditDatabaseRequest';
import { DeleteAuditDatabaseResponse } from './model/DeleteAuditDatabaseResponse';
import { DeleteAuditReportRequest } from './model/DeleteAuditReportRequest';
import { DeleteAuditReportResponse } from './model/DeleteAuditReportResponse';
import { DeleteAuditRuleRiskRequest } from './model/DeleteAuditRuleRiskRequest';
import { DeleteAuditRuleRiskResponse } from './model/DeleteAuditRuleRiskResponse';
import { DeleteAuditRuleSqlRequest } from './model/DeleteAuditRuleSqlRequest';
import { DeleteAuditRuleSqlResponse } from './model/DeleteAuditRuleSqlResponse';
import { DeleteAuditScopeRequest } from './model/DeleteAuditScopeRequest';
import { DeleteAuditScopeResponse } from './model/DeleteAuditScopeResponse';
import { DeleteAuditWhitelistRequest } from './model/DeleteAuditWhitelistRequest';
import { DeleteAuditWhitelistResponse } from './model/DeleteAuditWhitelistResponse';
import { DeleteDbEncryptInstanceRequest } from './model/DeleteDbEncryptInstanceRequest';
import { DeleteDbEncryptInstanceResponse } from './model/DeleteDbEncryptInstanceResponse';
import { DeleteDbOmInstanceRequest } from './model/DeleteDbOmInstanceRequest';
import { DeleteDbOmInstanceResponse } from './model/DeleteDbOmInstanceResponse';
import { DeleteInstanceDemandRequest } from './model/DeleteInstanceDemandRequest';
import { DeleteInstancesNewRequest } from './model/DeleteInstancesNewRequest';
import { DeleteInstancesNewResponse } from './model/DeleteInstancesNewResponse';
import { DeleteInstancesRequest } from './model/DeleteInstancesRequest';
import { DeleteInstancesResponse } from './model/DeleteInstancesResponse';
import { DeleteSensitiveRulesRequest } from './model/DeleteSensitiveRulesRequest';
import { DeleteSensitiveRulesResponse } from './model/DeleteSensitiveRulesResponse';
import { DiskInfo } from './model/DiskInfo';
import { DownloadAuditAgentNewRequest } from './model/DownloadAuditAgentNewRequest';
import { DownloadAuditAgentNewResponse } from './model/DownloadAuditAgentNewResponse';
import { DownloadAuditAgentRequest } from './model/DownloadAuditAgentRequest';
import { DownloadAuditAgentResponse } from './model/DownloadAuditAgentResponse';
import { DownloadAuditReportRequest } from './model/DownloadAuditReportRequest';
import { DownloadAuditReportResponse } from './model/DownloadAuditReportResponse';
import { Duration } from './model/Duration';
import { EcsSpecificationBean } from './model/EcsSpecificationBean';
import { Eip } from './model/Eip';
import { GeneralRequest } from './model/GeneralRequest';
import { InjectionStatisticsBean } from './model/InjectionStatisticsBean';
import { InstanceActivateInfo } from './model/InstanceActivateInfo';
import { JobBean } from './model/JobBean';
import { KeyValueBean } from './model/KeyValueBean';
import { ListAlarmTopicConfigInfoNewRequest } from './model/ListAlarmTopicConfigInfoNewRequest';
import { ListAlarmTopicConfigInfoNewResponse } from './model/ListAlarmTopicConfigInfoNewResponse';
import { ListAlarmTopicConfigInfoRequest } from './model/ListAlarmTopicConfigInfoRequest';
import { ListAlarmTopicConfigInfoResponse } from './model/ListAlarmTopicConfigInfoResponse';
import { ListAuditAgentNewRequest } from './model/ListAuditAgentNewRequest';
import { ListAuditAgentNewResponse } from './model/ListAuditAgentNewResponse';
import { ListAuditAgentRequest } from './model/ListAuditAgentRequest';
import { ListAuditAgentResponse } from './model/ListAuditAgentResponse';
import { ListAuditAlarmLogNewRequest } from './model/ListAuditAlarmLogNewRequest';
import { ListAuditAlarmLogNewResponse } from './model/ListAuditAlarmLogNewResponse';
import { ListAuditAlarmLogRequest } from './model/ListAuditAlarmLogRequest';
import { ListAuditAlarmLogResponse } from './model/ListAuditAlarmLogResponse';
import { ListAuditBackupInfoRequest } from './model/ListAuditBackupInfoRequest';
import { ListAuditBackupInfoResponse } from './model/ListAuditBackupInfoResponse';
import { ListAuditBackupRiskTemplatesRequest } from './model/ListAuditBackupRiskTemplatesRequest';
import { ListAuditBackupRiskTemplatesResponse } from './model/ListAuditBackupRiskTemplatesResponse';
import { ListAuditDatabasesNewRequest } from './model/ListAuditDatabasesNewRequest';
import { ListAuditDatabasesNewResponse } from './model/ListAuditDatabasesNewResponse';
import { ListAuditDatabasesRequest } from './model/ListAuditDatabasesRequest';
import { ListAuditDatabasesResponse } from './model/ListAuditDatabasesResponse';
import { ListAuditInstanceJobsNewRequest } from './model/ListAuditInstanceJobsNewRequest';
import { ListAuditInstanceJobsNewResponse } from './model/ListAuditInstanceJobsNewResponse';
import { ListAuditInstanceJobsRequest } from './model/ListAuditInstanceJobsRequest';
import { ListAuditInstanceJobsResponse } from './model/ListAuditInstanceJobsResponse';
import { ListAuditInstancesNewRequest } from './model/ListAuditInstancesNewRequest';
import { ListAuditInstancesNewResponse } from './model/ListAuditInstancesNewResponse';
import { ListAuditInstancesRequest } from './model/ListAuditInstancesRequest';
import { ListAuditInstancesResponse } from './model/ListAuditInstancesResponse';
import { ListAuditObsBucketsRequest } from './model/ListAuditObsBucketsRequest';
import { ListAuditObsBucketsResponse } from './model/ListAuditObsBucketsResponse';
import { ListAuditOperateLogsNewRequest } from './model/ListAuditOperateLogsNewRequest';
import { ListAuditOperateLogsNewResponse } from './model/ListAuditOperateLogsNewResponse';
import { ListAuditOperateLogsRequest } from './model/ListAuditOperateLogsRequest';
import { ListAuditOperateLogsResponse } from './model/ListAuditOperateLogsResponse';
import { ListAuditReportTemplatesRequest } from './model/ListAuditReportTemplatesRequest';
import { ListAuditReportTemplatesResponse } from './model/ListAuditReportTemplatesResponse';
import { ListAuditReportsRequest } from './model/ListAuditReportsRequest';
import { ListAuditReportsResponse } from './model/ListAuditReportsResponse';
import { ListAuditRuleRisksNewRequest } from './model/ListAuditRuleRisksNewRequest';
import { ListAuditRuleRisksNewResponse } from './model/ListAuditRuleRisksNewResponse';
import { ListAuditRuleRisksRequest } from './model/ListAuditRuleRisksRequest';
import { ListAuditRuleRisksResponse } from './model/ListAuditRuleRisksResponse';
import { ListAuditRuleScopesNewRequest } from './model/ListAuditRuleScopesNewRequest';
import { ListAuditRuleScopesNewResponse } from './model/ListAuditRuleScopesNewResponse';
import { ListAuditRuleScopesRequest } from './model/ListAuditRuleScopesRequest';
import { ListAuditRuleScopesResponse } from './model/ListAuditRuleScopesResponse';
import { ListAuditSensitiveMasksNewRequest } from './model/ListAuditSensitiveMasksNewRequest';
import { ListAuditSensitiveMasksNewResponse } from './model/ListAuditSensitiveMasksNewResponse';
import { ListAuditSensitiveMasksRequest } from './model/ListAuditSensitiveMasksRequest';
import { ListAuditSensitiveMasksResponse } from './model/ListAuditSensitiveMasksResponse';
import { ListAuditSqlsNewRequest } from './model/ListAuditSqlsNewRequest';
import { ListAuditSqlsNewResponse } from './model/ListAuditSqlsNewResponse';
import { ListAuditSqlsRequest } from './model/ListAuditSqlsRequest';
import { ListAuditSqlsResponse } from './model/ListAuditSqlsResponse';
import { ListAuditSummaryInfosRequest } from './model/ListAuditSummaryInfosRequest';
import { ListAuditSummaryInfosResponse } from './model/ListAuditSummaryInfosResponse';
import { ListAuditTagsRequest } from './model/ListAuditTagsRequest';
import { ListAuditTagsResponse } from './model/ListAuditTagsResponse';
import { ListAuditTrendHistoryRequest } from './model/ListAuditTrendHistoryRequest';
import { ListAuditTrendHistoryResponse } from './model/ListAuditTrendHistoryResponse';
import { ListAvailabilityZoneInfosNewRequest } from './model/ListAvailabilityZoneInfosNewRequest';
import { ListAvailabilityZoneInfosNewResponse } from './model/ListAvailabilityZoneInfosNewResponse';
import { ListAvailabilityZoneInfosRequest } from './model/ListAvailabilityZoneInfosRequest';
import { ListAvailabilityZoneInfosResponse } from './model/ListAvailabilityZoneInfosResponse';
import { ListDbEncryptInstancesRequest } from './model/ListDbEncryptInstancesRequest';
import { ListDbEncryptInstancesResponse } from './model/ListDbEncryptInstancesResponse';
import { ListEcsSpecificationNewRequest } from './model/ListEcsSpecificationNewRequest';
import { ListEcsSpecificationNewResponse } from './model/ListEcsSpecificationNewResponse';
import { ListEcsSpecificationRequest } from './model/ListEcsSpecificationRequest';
import { ListEcsSpecificationResponse } from './model/ListEcsSpecificationResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListProjectResourceTagsRequest } from './model/ListProjectResourceTagsRequest';
import { ListProjectResourceTagsResponse } from './model/ListProjectResourceTagsResponse';
import { ListRdsDatabasesRequest } from './model/ListRdsDatabasesRequest';
import { ListRdsDatabasesResponse } from './model/ListRdsDatabasesResponse';
import { ListResourceInstanceByTagRequest } from './model/ListResourceInstanceByTagRequest';
import { ListResourceInstanceByTagResponse } from './model/ListResourceInstanceByTagResponse';
import { ListSqlInjectionRulesNewRequest } from './model/ListSqlInjectionRulesNewRequest';
import { ListSqlInjectionRulesNewResponse } from './model/ListSqlInjectionRulesNewResponse';
import { ListSqlInjectionRulesRequest } from './model/ListSqlInjectionRulesRequest';
import { ListSqlInjectionRulesResponse } from './model/ListSqlInjectionRulesResponse';
import { ListWhitelistsRequest } from './model/ListWhitelistsRequest';
import { ListWhitelistsResponse } from './model/ListWhitelistsResponse';
import { MarkAlarmLog } from './model/MarkAlarmLog';
import { MaskRuleRequest } from './model/MaskRuleRequest';
import { MonitorInfoRequest } from './model/MonitorInfoRequest';
import { Nic } from './model/Nic';
import { ObjWhitelist } from './model/ObjWhitelist';
import { ObsBucketObject } from './model/ObsBucketObject';
import { OperateLogGetRequest } from './model/OperateLogGetRequest';
import { OperateLogInfo } from './model/OperateLogInfo';
import { OperationStatisticsBean } from './model/OperationStatisticsBean';
import { OutsideInsConfig } from './model/OutsideInsConfig';
import { ProductInfoBeanNew } from './model/ProductInfoBeanNew';
import { ProjectResourceTagResponseTags } from './model/ProjectResourceTagResponseTags';
import { PublicIp } from './model/PublicIp';
import { RankRiskRuleNew } from './model/RankRiskRuleNew';
import { RdsDbListResponseDatabases } from './model/RdsDbListResponseDatabases';
import { RdsDbRequest } from './model/RdsDbRequest';
import { RdsDbRequestDatabases } from './model/RdsDbRequestDatabases';
import { RdsDbResponseRetList } from './model/RdsDbResponseRetList';
import { RdsNoAgentDbRequest } from './model/RdsNoAgentDbRequest';
import { RdsNoAgentDbRequestDatabases } from './model/RdsNoAgentDbRequestDatabases';
import { RebootAuditInstanceNewRequest } from './model/RebootAuditInstanceNewRequest';
import { RebootAuditInstanceNewResponse } from './model/RebootAuditInstanceNewResponse';
import { RebootAuditInstanceRequest } from './model/RebootAuditInstanceRequest';
import { RebootAuditInstanceResponse } from './model/RebootAuditInstanceResponse';
import { RebootDbEncryptInstanceRequest } from './model/RebootDbEncryptInstanceRequest';
import { RebootDbEncryptInstanceResponse } from './model/RebootDbEncryptInstanceResponse';
import { RebootDbOmInstanceRequest } from './model/RebootDbOmInstanceRequest';
import { RebootDbOmInstanceResponse } from './model/RebootDbOmInstanceResponse';
import { ReportAccountSessionNew } from './model/ReportAccountSessionNew';
import { ReportBean } from './model/ReportBean';
import { ReportClientSessionNew } from './model/ReportClientSessionNew';
import { ReportGetReportsRequest } from './model/ReportGetReportsRequest';
import { ReportInfo } from './model/ReportInfo';
import { ResetDbEncryptPasswordRequest } from './model/ResetDbEncryptPasswordRequest';
import { ResetDbEncryptPasswordResponse } from './model/ResetDbEncryptPasswordResponse';
import { ResetDbOmPasswordRequest } from './model/ResetDbOmPasswordRequest';
import { ResetDbOmPasswordResponse } from './model/ResetDbOmPasswordResponse';
import { ResourceInstanceResponseResources } from './model/ResourceInstanceResponseResources';
import { ResourceInstanceResponseSysTags } from './model/ResourceInstanceResponseSysTags';
import { ResourceInstanceResponseTags } from './model/ResourceInstanceResponseTags';
import { ResourceInstanceTagRequest } from './model/ResourceInstanceTagRequest';
import { ResourceInstanceTagRequestMatches } from './model/ResourceInstanceTagRequestMatches';
import { ResourceTagDeleteRequest } from './model/ResourceTagDeleteRequest';
import { ResourceTagDeleteRequestTags } from './model/ResourceTagDeleteRequestTags';
import { ResourceTagInfoBean } from './model/ResourceTagInfoBean';
import { ResourceTagRequest } from './model/ResourceTagRequest';
import { ResourceTagRequestTags } from './model/ResourceTagRequestTags';
import { ResponseServer } from './model/ResponseServer';
import { RestoreAuditBackupRequest } from './model/RestoreAuditBackupRequest';
import { RestoreAuditBackupResponse } from './model/RestoreAuditBackupResponse';
import { RetryAuditBackupTaskRequest } from './model/RetryAuditBackupTaskRequest';
import { RetryAuditBackupTaskResponse } from './model/RetryAuditBackupTaskResponse';
import { RiskBackupConfig } from './model/RiskBackupConfig';
import { RiskBackupTemplate } from './model/RiskBackupTemplate';
import { RiskBackupTemplateBean } from './model/RiskBackupTemplateBean';
import { RiskRuleStatistic } from './model/RiskRuleStatistic';
import { RiskStatisticsBean } from './model/RiskStatisticsBean';
import { RuleAddRiskRuleRequest } from './model/RuleAddRiskRuleRequest';
import { RuleAddSqlRequest } from './model/RuleAddSqlRequest';
import { RuleRiskInfoBeanSchemas } from './model/RuleRiskInfoBeanSchemas';
import { RuleRiskResponseRules } from './model/RuleRiskResponseRules';
import { RuleRiskStatisticsDto } from './model/RuleRiskStatisticsDto';
import { RuleScopeInfo } from './model/RuleScopeInfo';
import { RuleScopeRequest } from './model/RuleScopeRequest';
import { RuleSqlIdRequest } from './model/RuleSqlIdRequest';
import { RuleSqlIdsRequestNew } from './model/RuleSqlIdsRequestNew';
import { SQLStatisticsBean } from './model/SQLStatisticsBean';
import { SchedulerBean } from './model/SchedulerBean';
import { SchedulerConfigBase } from './model/SchedulerConfigBase';
import { SchemaBean } from './model/SchemaBean';
import { SecurityGroup } from './model/SecurityGroup';
import { SecurityGroupRequest } from './model/SecurityGroupRequest';
import { SensitiveMaskResponseRules } from './model/SensitiveMaskResponseRules';
import { ServerIdBean } from './model/ServerIdBean';
import { ServerList } from './model/ServerList';
import { SessionStatisticsBean } from './model/SessionStatisticsBean';
import { SetAlarmTopicConfigInfoNewRequest } from './model/SetAlarmTopicConfigInfoNewRequest';
import { SetAlarmTopicConfigInfoNewResponse } from './model/SetAlarmTopicConfigInfoNewResponse';
import { SetAlarmTopicConfigInfoRequest } from './model/SetAlarmTopicConfigInfoRequest';
import { SetAlarmTopicConfigInfoResponse } from './model/SetAlarmTopicConfigInfoResponse';
import { SetAuditAlarmLogStatusRequest } from './model/SetAuditAlarmLogStatusRequest';
import { SetAuditAlarmLogStatusResponse } from './model/SetAuditAlarmLogStatusResponse';
import { SetAuditAutoBackupTemplateRequest } from './model/SetAuditAutoBackupTemplateRequest';
import { SetAuditAutoBackupTemplateResponse } from './model/SetAuditAutoBackupTemplateResponse';
import { SetAuditBackupRiskSwitchRequest } from './model/SetAuditBackupRiskSwitchRequest';
import { SetAuditBackupRiskSwitchResponse } from './model/SetAuditBackupRiskSwitchResponse';
import { SetAuditBackupSwitchRequest } from './model/SetAuditBackupSwitchRequest';
import { SetAuditBackupSwitchResponse } from './model/SetAuditBackupSwitchResponse';
import { SetAuditInstanceTimeZoneRequest } from './model/SetAuditInstanceTimeZoneRequest';
import { SetAuditInstanceTimeZoneResponse } from './model/SetAuditInstanceTimeZoneResponse';
import { SetAuditScopeRuleSwitchRequest } from './model/SetAuditScopeRuleSwitchRequest';
import { SetAuditScopeRuleSwitchResponse } from './model/SetAuditScopeRuleSwitchResponse';
import { SetAuditSqlRuleSwitchRequest } from './model/SetAuditSqlRuleSwitchRequest';
import { SetAuditSqlRuleSwitchResponse } from './model/SetAuditSqlRuleSwitchResponse';
import { SetRiskOperationPolicyRequest } from './model/SetRiskOperationPolicyRequest';
import { SetRiskOperationPolicyResponse } from './model/SetRiskOperationPolicyResponse';
import { SetRiskRuleRankRequest } from './model/SetRiskRuleRankRequest';
import { SetRiskRuleRankResponse } from './model/SetRiskRuleRankResponse';
import { SetSensitiveMaskRuleSwitchRequest } from './model/SetSensitiveMaskRuleSwitchRequest';
import { SetSensitiveMaskRuleSwitchResponse } from './model/SetSensitiveMaskRuleSwitchResponse';
import { SetSensitiveResultSwitchRequest } from './model/SetSensitiveResultSwitchRequest';
import { SetSensitiveResultSwitchResponse } from './model/SetSensitiveResultSwitchResponse';
import { SetSensitiveSwitchRequest } from './model/SetSensitiveSwitchRequest';
import { SetSensitiveSwitchResponse } from './model/SetSensitiveSwitchResponse';
import { SetSqlRuleRankRequest } from './model/SetSqlRuleRankRequest';
import { SetSqlRuleRankResponse } from './model/SetSqlRuleRankResponse';
import { ShowAuditBackRiskTemplateRequest } from './model/ShowAuditBackRiskTemplateRequest';
import { ShowAuditBackRiskTemplateResponse } from './model/ShowAuditBackRiskTemplateResponse';
import { ShowAuditBackupStatusRequest } from './model/ShowAuditBackupStatusRequest';
import { ShowAuditBackupStatusResponse } from './model/ShowAuditBackupStatusResponse';
import { ShowAuditQuotaNewRequest } from './model/ShowAuditQuotaNewRequest';
import { ShowAuditQuotaNewResponse } from './model/ShowAuditQuotaNewResponse';
import { ShowAuditQuotaRequest } from './model/ShowAuditQuotaRequest';
import { ShowAuditQuotaResponse } from './model/ShowAuditQuotaResponse';
import { ShowAuditRuleRiskNewRequest } from './model/ShowAuditRuleRiskNewRequest';
import { ShowAuditRuleRiskNewResponse } from './model/ShowAuditRuleRiskNewResponse';
import { ShowAuditRuleRiskRequest } from './model/ShowAuditRuleRiskRequest';
import { ShowAuditRuleRiskResponse } from './model/ShowAuditRuleRiskResponse';
import { ShowAuditStatisticsRequest } from './model/ShowAuditStatisticsRequest';
import { ShowAuditStatisticsResponse } from './model/ShowAuditStatisticsResponse';
import { ShowAuditTaskStatusRequest } from './model/ShowAuditTaskStatusRequest';
import { ShowAuditTaskStatusResponse } from './model/ShowAuditTaskStatusResponse';
import { ShowAuditTopicReportSchedulerConfigRequest } from './model/ShowAuditTopicReportSchedulerConfigRequest';
import { ShowAuditTopicReportSchedulerConfigResponse } from './model/ShowAuditTopicReportSchedulerConfigResponse';
import { ShowAuditUpgradeStatusRequest } from './model/ShowAuditUpgradeStatusRequest';
import { ShowAuditUpgradeStatusResponse } from './model/ShowAuditUpgradeStatusResponse';
import { ShowBackupRiskBucketPathRequest } from './model/ShowBackupRiskBucketPathRequest';
import { ShowBackupRiskBucketPathResponse } from './model/ShowBackupRiskBucketPathResponse';
import { ShowInstanceMonitorInfoRequest } from './model/ShowInstanceMonitorInfoRequest';
import { ShowInstanceMonitorInfoResponse } from './model/ShowInstanceMonitorInfoResponse';
import { ShowInstanceQuotaRequest } from './model/ShowInstanceQuotaRequest';
import { ShowInstanceQuotaResponse } from './model/ShowInstanceQuotaResponse';
import { ShowSensitiveMaskSwitchRequest } from './model/ShowSensitiveMaskSwitchRequest';
import { ShowSensitiveMaskSwitchResponse } from './model/ShowSensitiveMaskSwitchResponse';
import { ShowSensitiveResultSwitchRequest } from './model/ShowSensitiveResultSwitchRequest';
import { ShowSensitiveResultSwitchResponse } from './model/ShowSensitiveResultSwitchResponse';
import { ShowServerVersionRequest } from './model/ShowServerVersionRequest';
import { ShowServerVersionResponse } from './model/ShowServerVersionResponse';
import { ShowSqlDetailRequest } from './model/ShowSqlDetailRequest';
import { ShowSqlDetailResponse } from './model/ShowSqlDetailResponse';
import { SqlDetailBean } from './model/SqlDetailBean';
import { SqlRuleRequest } from './model/SqlRuleRequest';
import { SqlRuleResponseRules } from './model/SqlRuleResponseRules';
import { SqlSessionStatisticsRequest } from './model/SqlSessionStatisticsRequest';
import { StartAuditInstanceNewRequest } from './model/StartAuditInstanceNewRequest';
import { StartAuditInstanceNewResponse } from './model/StartAuditInstanceNewResponse';
import { StartAuditInstanceRequest } from './model/StartAuditInstanceRequest';
import { StartAuditInstanceResponse } from './model/StartAuditInstanceResponse';
import { StartDbEncryptInstanceRequest } from './model/StartDbEncryptInstanceRequest';
import { StartDbEncryptInstanceResponse } from './model/StartDbEncryptInstanceResponse';
import { StartDbOmInstanceRequest } from './model/StartDbOmInstanceRequest';
import { StartDbOmInstanceResponse } from './model/StartDbOmInstanceResponse';
import { StopAuditInstanceNewRequest } from './model/StopAuditInstanceNewRequest';
import { StopAuditInstanceNewResponse } from './model/StopAuditInstanceNewResponse';
import { StopAuditInstanceRequest } from './model/StopAuditInstanceRequest';
import { StopAuditInstanceResponse } from './model/StopAuditInstanceResponse';
import { StopDbEncryptInstanceRequest } from './model/StopDbEncryptInstanceRequest';
import { StopDbEncryptInstanceResponse } from './model/StopDbEncryptInstanceResponse';
import { StopDbOmInstanceRequest } from './model/StopDbOmInstanceRequest';
import { StopDbOmInstanceResponse } from './model/StopDbOmInstanceResponse';
import { SwitchAgentNewRequest } from './model/SwitchAgentNewRequest';
import { SwitchAgentNewResponse } from './model/SwitchAgentNewResponse';
import { SwitchAgentRequest } from './model/SwitchAgentRequest';
import { SwitchAgentResponse } from './model/SwitchAgentResponse';
import { SwitchAuditDatabaseNewRequest } from './model/SwitchAuditDatabaseNewRequest';
import { SwitchAuditDatabaseNewResponse } from './model/SwitchAuditDatabaseNewResponse';
import { SwitchAuditDatabaseRequest } from './model/SwitchAuditDatabaseRequest';
import { SwitchAuditDatabaseResponse } from './model/SwitchAuditDatabaseResponse';
import { SwitchAuditDbRequest } from './model/SwitchAuditDbRequest';
import { SwitchRiskRuleNewRequest } from './model/SwitchRiskRuleNewRequest';
import { SwitchRiskRuleNewResponse } from './model/SwitchRiskRuleNewResponse';
import { SwitchRiskRuleRequest } from './model/SwitchRiskRuleRequest';
import { SwitchRiskRuleResponse } from './model/SwitchRiskRuleResponse';
import { SwitchStatus } from './model/SwitchStatus';
import { SystemInfo } from './model/SystemInfo';
import { TagKeyValuesBean } from './model/TagKeyValuesBean';
import { TemplateBean } from './model/TemplateBean';
import { TemplateInfo } from './model/TemplateInfo';
import { TimeRangeBean } from './model/TimeRangeBean';
import { TimezoneRequest } from './model/TimezoneRequest';
import { TrafficInfo } from './model/TrafficInfo';
import { TrendStatusResponse } from './model/TrendStatusResponse';
import { UnbindDbEncryptEipRequest } from './model/UnbindDbEncryptEipRequest';
import { UnbindDbEncryptEipResponse } from './model/UnbindDbEncryptEipResponse';
import { UnbindDbOmEipRequest } from './model/UnbindDbOmEipRequest';
import { UnbindDbOmEipResponse } from './model/UnbindDbOmEipResponse';
import { UnsupportedAuditInfo } from './model/UnsupportedAuditInfo';
import { UnsupportedAuditInfoResponse } from './model/UnsupportedAuditInfoResponse';
import { UpdateAuditBean } from './model/UpdateAuditBean';
import { UpdateAuditInstanceNewRequest } from './model/UpdateAuditInstanceNewRequest';
import { UpdateAuditInstanceNewResponse } from './model/UpdateAuditInstanceNewResponse';
import { UpdateAuditInstanceRequest } from './model/UpdateAuditInstanceRequest';
import { UpdateAuditInstanceResponse } from './model/UpdateAuditInstanceResponse';
import { UpdateAuditRiskBucketPathRequest } from './model/UpdateAuditRiskBucketPathRequest';
import { UpdateAuditRiskBucketPathResponse } from './model/UpdateAuditRiskBucketPathResponse';
import { UpdateAuditScopeRuleRequest } from './model/UpdateAuditScopeRuleRequest';
import { UpdateAuditScopeRuleResponse } from './model/UpdateAuditScopeRuleResponse';
import { UpdateAuditSecurityGroupNewRequest } from './model/UpdateAuditSecurityGroupNewRequest';
import { UpdateAuditSecurityGroupNewResponse } from './model/UpdateAuditSecurityGroupNewResponse';
import { UpdateAuditSecurityGroupRequest } from './model/UpdateAuditSecurityGroupRequest';
import { UpdateAuditSecurityGroupResponse } from './model/UpdateAuditSecurityGroupResponse';
import { UpdateAuditSqlRuleRequest } from './model/UpdateAuditSqlRuleRequest';
import { UpdateAuditSqlRuleResponse } from './model/UpdateAuditSqlRuleResponse';
import { UpdateAuditTaskStatusRequest } from './model/UpdateAuditTaskStatusRequest';
import { UpdateAuditTaskStatusResponse } from './model/UpdateAuditTaskStatusResponse';
import { UpdateAuditTopicReportSchedulerConfigRequest } from './model/UpdateAuditTopicReportSchedulerConfigRequest';
import { UpdateAuditTopicReportSchedulerConfigResponse } from './model/UpdateAuditTopicReportSchedulerConfigResponse';
import { UpdateAuditWhitelistRequest } from './model/UpdateAuditWhitelistRequest';
import { UpdateAuditWhitelistResponse } from './model/UpdateAuditWhitelistResponse';
import { UpdateDbEncryptInstanceNameRequest } from './model/UpdateDbEncryptInstanceNameRequest';
import { UpdateDbEncryptInstanceNameResponse } from './model/UpdateDbEncryptInstanceNameResponse';
import { UpdateDbOmInstanceNameRequest } from './model/UpdateDbOmInstanceNameRequest';
import { UpdateDbOmInstanceNameResponse } from './model/UpdateDbOmInstanceNameResponse';
import { UpdateSensitiveMaskRuleRequest } from './model/UpdateSensitiveMaskRuleRequest';
import { UpdateSensitiveMaskRuleResponse } from './model/UpdateSensitiveMaskRuleResponse';
import { UpdateWhitelistRequest } from './model/UpdateWhitelistRequest';
import { UploadAuditDbConfigRequest } from './model/UploadAuditDbConfigRequest';
import { UploadAuditDbConfigResponse } from './model/UploadAuditDbConfigResponse';
import { WhitelistBatchDeleteRequest } from './model/WhitelistBatchDeleteRequest';
import { WhitelistBean } from './model/WhitelistBean';

export class DbssClient {
    public static newBuilder(): ClientBuilder<DbssClient> {
            let client = new ClientBuilder<DbssClient>(newClient);
            return client;
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 添加审计数据库Agent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加审计数据库Agent[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AuditAgentRequest} addAuditAgentRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAuditAgent(addAuditAgentRequest?: AddAuditAgentRequest): Promise<AddAuditAgentResponse> {
        const options = ParamCreater().addAuditAgent(addAuditAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加自建数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加自建数据库[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {CreateDatabaseRequest} addAuditDatabaseRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAuditDatabase(addAuditDatabaseRequest?: AddAuditDatabaseRequest): Promise<AddAuditDatabaseResponse> {
        const options = ParamCreater().addAuditDatabase(addAuditDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加自建数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加自建数据库
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {CreateDatabaseRequest} addAuditDatabaseNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAuditDatabaseNew(addAuditDatabaseNewRequest?: AddAuditDatabaseNewRequest): Promise<AddAuditDatabaseNewResponse> {
        const options = ParamCreater().addAuditDatabaseNew(addAuditDatabaseNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加RDS数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加RDS数据库[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RdsDbRequest} addRdsDatabaseRequestBody 添加免agent数据库信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRdsDatabase(addRdsDatabaseRequest?: AddRdsDatabaseRequest): Promise<AddRdsDatabaseResponse> {
        const options = ParamCreater().addRdsDatabase(addRdsDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加RDS数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加RDS数据库
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RdsDbRequest} addRdsDatabaseNewRequestBody 添加免agent数据库信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRdsDatabaseNew(addRdsDatabaseNewRequest?: AddRdsDatabaseNewRequest): Promise<AddRdsDatabaseNewResponse> {
        const options = ParamCreater().addRdsDatabaseNew(addRdsDatabaseNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加RDS数据库。V1版本已不再维护，待下线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加RDS数据库[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RdsNoAgentDbRequest} addRdsNoAgentDatabaseRequestBody 添加免agent数据库信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRdsNoAgentDatabase(addRdsNoAgentDatabaseRequest?: AddRdsNoAgentDatabaseRequest): Promise<AddRdsNoAgentDatabaseResponse> {
        const options = ParamCreater().addRdsNoAgentDatabase(addRdsNoAgentDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 审计范围规则操作-删除策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 审计范围规则操作-删除策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AuditScopeRequestNew} batchDeleteAuditScopeRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAuditScope(batchDeleteAuditScopeRequest?: BatchDeleteAuditScopeRequest): Promise<BatchDeleteAuditScopeResponse> {
        const options = ParamCreater().batchDeleteAuditScope(batchDeleteAuditScopeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量标记
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量标记
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {MarkAlarmLog} batchSetAuditAlarmLogStatusRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetAuditAlarmLogStatus(batchSetAuditAlarmLogStatusRequest?: BatchSetAuditAlarmLogStatusRequest): Promise<BatchSetAuditAlarmLogStatusResponse> {
        const options = ParamCreater().batchSetAuditAlarmLogStatus(batchSetAuditAlarmLogStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定数据库加密实例的EIP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定数据库加密实例的EIP
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {BindEIPRequest} bindDbEncryptEipRequestBody 绑定数据库加密实例eip请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public bindDbEncryptEip(bindDbEncryptEipRequest?: BindDbEncryptEipRequest): Promise<BindDbEncryptEipResponse> {
        const options = ParamCreater().bindDbEncryptEip(bindDbEncryptEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定数据库运维实例的EIP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定数据库运维实例的EIP
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {BindEIPRequest} bindDbOmEipRequestBody 绑定数据库运维实例EIP请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public bindDbOmEip(bindDbOmEipRequest?: BindDbOmEipRequest): Promise<BindDbOmEipResponse> {
        const options = ParamCreater().bindDbOmEip(bindDbOmEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改数据库加密实例的安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改数据库加密实例的安全组
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ChangeSecurityGroupRequest} changeDbEncryptSecurityGroupRequestBody 更改数据库加密实例安全组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeDbEncryptSecurityGroup(changeDbEncryptSecurityGroupRequest?: ChangeDbEncryptSecurityGroupRequest): Promise<ChangeDbEncryptSecurityGroupResponse> {
        const options = ParamCreater().changeDbEncryptSecurityGroup(changeDbEncryptSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改数据库运维实例的安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改数据库运维实例的安全组
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ChangeSecurityGroupRequest} changeDbOmSecurityGroupRequestBody 更改数据库运维实例安全组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeDbOmSecurityGroup(changeDbOmSecurityGroupRequest?: ChangeDbOmSecurityGroupRequest): Promise<ChangeDbOmSecurityGroupResponse> {
        const options = ParamCreater().changeDbOmSecurityGroup(changeDbOmSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 触发审计实例升级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 触发审计实例升级
     * @param {string} resourceId **参数解释**：  资源ID。可在查询实例列表接口的resource_id字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口获取值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmUpgradeAudit(confirmUpgradeAuditRequest?: ConfirmUpgradeAuditRequest): Promise<ConfirmUpgradeAuditResponse> {
        const options = ParamCreater().confirmUpgradeAudit(confirmUpgradeAuditRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库用户会话分布
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库用户会话分布
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {SqlSessionStatisticsRequest} countDbAccountSessionRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countDbAccountSession(countDbAccountSessionRequest?: CountDbAccountSessionRequest): Promise<CountDbAccountSessionResponse> {
        const options = ParamCreater().countDbAccountSession(countDbAccountSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询客户端会话分布
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询客户端会话分布
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {SqlSessionStatisticsRequest} countDbClientSessionRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countDbClientSession(countDbClientSessionRequest?: CountDbClientSessionRequest): Promise<CountDbClientSessionResponse> {
        const options = ParamCreater().countDbClientSession(countDbClientSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定时间段内的sql注入分布统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定时间段内的sql注入分布统计
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {GeneralRequest} countInjectionStatisticsRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countInjectionStatistics(countInjectionStatisticsRequest?: CountInjectionStatisticsRequest): Promise<CountInjectionStatisticsResponse> {
        const options = ParamCreater().countInjectionStatistics(countInjectionStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定时间段内的风险操作数量分布统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定时间段内的风险操作数量分布统计
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {GeneralRequest} countOperationStatisticsRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countOperationStatistics(countOperationStatisticsRequest?: CountOperationStatisticsRequest): Promise<CountOperationStatisticsResponse> {
        const options = ParamCreater().countOperationStatistics(countOperationStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定时间段内的风险分布统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定时间段内的风险分布统计
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {GeneralRequest} countRiskTrendStatisticsRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countRiskTrendStatistics(countRiskTrendStatisticsRequest?: CountRiskTrendStatisticsRequest): Promise<CountRiskTrendStatisticsResponse> {
        const options = ParamCreater().countRiskTrendStatistics(countRiskTrendStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定时间段内的查询会话统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定时间段内的查询会话统计
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {GeneralRequest} countSessionStatisticsRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countSessionStatistics(countSessionStatisticsRequest?: CountSessionStatisticsRequest): Promise<CountSessionStatisticsResponse> {
        const options = ParamCreater().countSessionStatistics(countSessionStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定时间段内的SQL分布统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定时间段内的SQL分布统计
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {GeneralRequest} countSqlStatisticsRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countSqlStatistics(countSqlStatisticsRequest?: CountSqlStatisticsRequest): Promise<CountSqlStatisticsResponse> {
        const options = ParamCreater().countSqlStatistics(countSqlStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定时间段内的sql数量分布统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定时间段内的sql数量分布统计
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {GeneralRequest} countSqlTrendStatisticsRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countSqlTrendStatistics(countSqlTrendStatisticsRequest?: CountSqlTrendStatisticsRequest): Promise<CountSqlTrendStatisticsResponse> {
        const options = ParamCreater().countSqlTrendStatistics(countSqlTrendStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加风险规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加风险规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RuleAddRiskRuleRequest} createAuditRiskRuleRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuditRiskRule(createAuditRiskRuleRequest?: CreateAuditRiskRuleRequest): Promise<CreateAuditRiskRuleResponse> {
        const options = ParamCreater().createAuditRiskRule(createAuditRiskRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加审计范围策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加审计范围策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RuleScopeRequest} createAuditScopeRuleRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuditScopeRule(createAuditScopeRuleRequest?: CreateAuditScopeRuleRequest): Promise<CreateAuditScopeRuleResponse> {
        const options = ParamCreater().createAuditScopeRule(createAuditScopeRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按包周期方式购买数据库加密实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按包周期方式购买数据库加密实例
     * @param {ChargeOrderDbssNew} createDbEncryptInstancePeriodRequestBody 按需方式购买数据库加密实例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbEncryptInstancePeriod(createDbEncryptInstancePeriodRequest?: CreateDbEncryptInstancePeriodRequest): Promise<CreateDbEncryptInstancePeriodResponse> {
        const options = ParamCreater().createDbEncryptInstancePeriod(createDbEncryptInstancePeriodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期购买数据库运维实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期购买数据库运维实例
     * @param {ChargeOrderDbssNew} createDbOmInstancePeriodRequestBody 包周期购买数据库运维实例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbOmInstancePeriod(createDbOmInstancePeriodRequest?: CreateDbOmInstancePeriodRequest): Promise<CreateDbOmInstancePeriodResponse> {
        const options = ParamCreater().createDbOmInstancePeriod(createDbOmInstancePeriodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包年包月计费模式创建审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包年包月计费模式创建审计实例[待下线]
     * @param {CreateInstancePeriodRequest} createInstancesPeriodOrderRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstancesPeriodOrder(createInstancesPeriodOrderRequest?: CreateInstancesPeriodOrderRequest): Promise<CreateInstancesPeriodOrderResponse> {
        const options = ParamCreater().createInstancesPeriodOrder(createInstancesPeriodOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包年包月计费模式创建审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包年包月计费模式创建审计实例
     * @param {CreateInstancePeriodRequest} createInstancesPeriodOrderNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstancesPeriodOrderNew(createInstancesPeriodOrderNewRequest?: CreateInstancesPeriodOrderNewRequest): Promise<CreateInstancesPeriodOrderNewResponse> {
        const options = ParamCreater().createInstancesPeriodOrderNew(createInstancesPeriodOrderNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即生成报表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 立即生成报表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {CreateReportRequestBody} createReportRequestBody 立即生成报表的请求对象体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createReport(createReportRequest?: CreateReportRequest): Promise<CreateReportResponse> {
        const options = ParamCreater().createReport(createReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 增加隐私数据脱敏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 增加隐私数据脱敏规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {MaskRuleRequest} createSensitiveMaskRuleRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSensitiveMaskRule(createSensitiveMaskRuleRequest?: CreateSensitiveMaskRuleRequest): Promise<CreateSensitiveMaskRuleResponse> {
        const options = ParamCreater().createSensitiveMaskRule(createSensitiveMaskRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库Agent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库Agent[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} agentId agent ID。可在查询数据库agent列表接口ID字段获取。
     * @param {string} dbId 数据库ID, 可在查询数据库列表接口ID字段获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditAgent(deleteAuditAgentRequest?: DeleteAuditAgentRequest): Promise<DeleteAuditAgentResponse> {
        const options = ParamCreater().deleteAuditAgent(deleteAuditAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除告警监控记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警监控记录
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 告警记录ID。可通过[查询审计告警信息]接口的ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询审计告警信息接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditAlarmLog(deleteAuditAlarmLogRequest?: DeleteAuditAlarmLogRequest): Promise<DeleteAuditAlarmLogResponse> {
        const options = ParamCreater().deleteAuditAlarmLog(deleteAuditAlarmLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定备份任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定备份任务
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 备份ID。可通过获取所有备份接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以获取所有备份接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditBackupTask(deleteAuditBackupTaskRequest?: DeleteAuditBackupTaskRequest): Promise<DeleteAuditBackupTaskResponse> {
        const options = ParamCreater().deleteAuditBackupTask(deleteAuditBackupTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} dbId 数据库ID，可在查询数据库列表接口ID字段获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditDatabase(deleteAuditDatabaseRequest?: DeleteAuditDatabaseRequest): Promise<DeleteAuditDatabaseResponse> {
        const options = ParamCreater().deleteAuditDatabase(deleteAuditDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 数据库ID。可在查询数据库列表接口ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询数据库列表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditDatabaseNew(deleteAuditDatabaseNewRequest?: DeleteAuditDatabaseNewRequest): Promise<DeleteAuditDatabaseNewResponse> {
        const options = ParamCreater().deleteAuditDatabaseNew(deleteAuditDatabaseNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除报表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除报表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 报表ID。可通过查询报表接口ID值获取。 **约束限制**： 不涉及 **取值范围**： 以查询报表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditReport(deleteAuditReportRequest?: DeleteAuditReportRequest): Promise<DeleteAuditReportResponse> {
        const options = ParamCreater().deleteAuditReport(deleteAuditReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除风险策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除风险策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 风险策略ID。可通过查询风险规则策略接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询风险规则策略接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditRuleRisk(deleteAuditRuleRiskRequest?: DeleteAuditRuleRiskRequest): Promise<DeleteAuditRuleRiskResponse> {
        const options = ParamCreater().deleteAuditRuleRisk(deleteAuditRuleRiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除审计范围策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除审计范围策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 审计范围ID。可通过查询审计范围策略列表接口ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询审计范围策略列表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditScope(deleteAuditScopeRequest?: DeleteAuditScopeRequest): Promise<DeleteAuditScopeResponse> {
        const options = ParamCreater().deleteAuditScope(deleteAuditScopeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库加密实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库加密实例
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDbEncryptInstance(deleteDbEncryptInstanceRequest?: DeleteDbEncryptInstanceRequest): Promise<DeleteDbEncryptInstanceResponse> {
        const options = ParamCreater().deleteDbEncryptInstance(deleteDbEncryptInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库运维实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库运维实例
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDbOmInstance(deleteDbOmInstanceRequest?: DeleteDbOmInstanceRequest): Promise<DeleteDbOmInstanceResponse> {
        const options = ParamCreater().deleteDbOmInstance(deleteDbOmInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 只有按需计费模式实例没有任务时 或 包周期模式实例状态为故障时，才能执行此操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除审计实例[待下线]
     * @param {DeleteInstanceDemandRequest} deleteInstancesRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstances(deleteInstancesRequest?: DeleteInstancesRequest): Promise<DeleteInstancesResponse> {
        const options = ParamCreater().deleteInstances(deleteInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 只有按需计费模式实例没有任务时 或 包周期模式实例状态为故障时，才能执行此操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除审计实例
     * @param {DeleteInstanceDemandRequest} deleteInstancesNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstancesNew(deleteInstancesNewRequest?: DeleteInstancesNewRequest): Promise<DeleteInstancesNewResponse> {
        const options = ParamCreater().deleteInstancesNew(deleteInstancesNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除隐私数据脱敏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除隐私数据脱敏规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 隐私规则ID。可通过查询隐私数据脱敏规则列表ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询隐私数据脱敏规则列表值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSensitiveRules(deleteSensitiveRulesRequest?: DeleteSensitiveRulesRequest): Promise<DeleteSensitiveRulesResponse> {
        const options = ParamCreater().deleteSensitiveRules(deleteSensitiveRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载审计Agent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载审计Agent[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} agentId agent ID。可在查询数据库agent列表接口ID字段获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadAuditAgent(downloadAuditAgentRequest?: DownloadAuditAgentRequest): Promise<DownloadAuditAgentResponse> {
        const options = ParamCreater().downloadAuditAgent(downloadAuditAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载报表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载报表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 报表ID。可通过查询报表接口ID值获取。 **约束限制**： 不涉及 **取值范围**： 以查询报表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {string} [local] **参数解释**： 语言区域。 **约束限制**： 仅支持取值范围约定的值 **取值范围**： - en-us : 英语 - zh-cn : 中文 **默认取值**： en-us 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadAuditReport(downloadAuditReportRequest?: DownloadAuditReportRequest): Promise<DownloadAuditReportResponse> {
        const options = ParamCreater().downloadAuditReport(downloadAuditReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例告警配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例告警配置[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmTopicConfigInfo(listAlarmTopicConfigInfoRequest?: ListAlarmTopicConfigInfoRequest): Promise<ListAlarmTopicConfigInfoResponse> {
        const options = ParamCreater().listAlarmTopicConfigInfo(listAlarmTopicConfigInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例告警配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例告警配置
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmTopicConfigInfoNew(listAlarmTopicConfigInfoNewRequest?: ListAlarmTopicConfigInfoNewRequest): Promise<ListAlarmTopicConfigInfoNewResponse> {
        const options = ParamCreater().listAlarmTopicConfigInfoNew(listAlarmTopicConfigInfoNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库Agent列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库Agent列表[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} dbId 数据库ID,可在查询数据库列表接口ID字段获取。
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于10000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditAgent(listAuditAgentRequest?: ListAuditAgentRequest): Promise<ListAuditAgentResponse> {
        const options = ParamCreater().listAuditAgent(listAuditAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计告警信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计告警信息[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AlarmLogRequest} listAuditAlarmLogRequestBody 查询告警日志信息Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditAlarmLog(listAuditAlarmLogRequest?: ListAuditAlarmLogRequest): Promise<ListAuditAlarmLogResponse> {
        const options = ParamCreater().listAuditAlarmLog(listAuditAlarmLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计告警信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计告警信息
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AlarmLogRequest} listAuditAlarmLogNewRequestBody 查询告警日志信息Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditAlarmLogNew(listAuditAlarmLogNewRequest?: ListAuditAlarmLogNewRequest): Promise<ListAuditAlarmLogNewResponse> {
        const options = ParamCreater().listAuditAlarmLogNew(listAuditAlarmLogNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所有备份信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有备份信息
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {BackupPageRequest} listAuditBackupInfoRequestBody 获取所有备份信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditBackupInfo(listAuditBackupInfoRequest?: ListAuditBackupInfoRequest): Promise<ListAuditBackupInfoResponse> {
        const options = ParamCreater().listAuditBackupInfo(listAuditBackupInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取风险导出配置列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取风险导出配置列表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditBackupRiskTemplates(listAuditBackupRiskTemplatesRequest?: ListAuditBackupRiskTemplatesRequest): Promise<ListAuditBackupRiskTemplatesResponse> {
        const options = ParamCreater().listAuditBackupRiskTemplates(listAuditBackupRiskTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库列表[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} [status] 实例状态 - ON :开启 - OFF : 关闭
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于10000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditDatabases(listAuditDatabasesRequest?: ListAuditDatabasesRequest): Promise<ListAuditDatabasesResponse> {
        const options = ParamCreater().listAuditDatabases(listAuditDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库列表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} [status] 实例状态 - ON :开启 - OFF : 关闭
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于10000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditDatabasesNew(listAuditDatabasesNewRequest?: ListAuditDatabasesNewRequest): Promise<ListAuditDatabasesNewResponse> {
        const options = ParamCreater().listAuditDatabasesNew(listAuditDatabasesNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例创建任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例创建任务信息[待下线]
     * @param {string} resourceId 资源ID。可在查询实例列表接口的resource_id获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditInstanceJobs(listAuditInstanceJobsRequest?: ListAuditInstanceJobsRequest): Promise<ListAuditInstanceJobsResponse> {
        const options = ParamCreater().listAuditInstanceJobs(listAuditInstanceJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例创建任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例创建任务信息
     * @param {string} resourceId 资源ID。可在查询实例列表接口的resource_id获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditInstanceJobsNew(listAuditInstanceJobsNewRequest?: ListAuditInstanceJobsNewRequest): Promise<ListAuditInstanceJobsNewResponse> {
        const options = ParamCreater().listAuditInstanceJobsNew(listAuditInstanceJobsNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计实例列表[待下线]
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] 查询记录数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditInstances(listAuditInstancesRequest?: ListAuditInstancesRequest): Promise<ListAuditInstancesResponse> {
        const options = ParamCreater().listAuditInstances(listAuditInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计实例列表
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于1000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditInstancesNew(listAuditInstancesNewRequest?: ListAuditInstancesNewRequest): Promise<ListAuditInstancesNewResponse> {
        const options = ParamCreater().listAuditInstancesNew(listAuditInstancesNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 备份或风险导出时，选择obs桶
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备份或风险导出时，选择obs桶
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditObsBuckets(listAuditObsBucketsRequest?: ListAuditObsBucketsRequest): Promise<ListAuditObsBucketsResponse> {
        const options = ParamCreater().listAuditObsBuckets();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户操作日志信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户操作日志信息[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {OperateLogGetRequest} listAuditOperateLogsRequestBody 查询用户操作日志信息Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditOperateLogs(listAuditOperateLogsRequest?: ListAuditOperateLogsRequest): Promise<ListAuditOperateLogsResponse> {
        const options = ParamCreater().listAuditOperateLogs(listAuditOperateLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户操作日志信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户操作日志信息
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {OperateLogGetRequest} listAuditOperateLogsNewRequestBody 查询用户操作日志信息Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditOperateLogsNew(listAuditOperateLogsNewRequest?: ListAuditOperateLogsNewRequest): Promise<ListAuditOperateLogsNewResponse> {
        const options = ParamCreater().listAuditOperateLogsNew(listAuditOperateLogsNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取报表模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取报表模板
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditReportTemplates(listAuditReportTemplatesRequest?: ListAuditReportTemplatesRequest): Promise<ListAuditReportTemplatesResponse> {
        const options = ParamCreater().listAuditReportTemplates(listAuditReportTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询报表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询报表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ReportGetReportsRequest} listAuditReportsRequestBody 查询报表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditReports(listAuditReportsRequest?: ListAuditReportsRequest): Promise<ListAuditReportsResponse> {
        const options = ParamCreater().listAuditReports(listAuditReportsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询风险规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询风险规则策略[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} [name] 风险名称
     * @param {'LOW' | 'MEDIUM' | 'HIGH' | 'NO_RISK'} [riskLevels] 风险级别 - LOW：低 - MEDIUM：中 - HIGH：高 - NO_RISK：无风险
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditRuleRisks(listAuditRuleRisksRequest?: ListAuditRuleRisksRequest): Promise<ListAuditRuleRisksResponse> {
        const options = ParamCreater().listAuditRuleRisks(listAuditRuleRisksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询风险规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询风险规则策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} [name] 风险名称
     * @param {string} [riskLevels] **参数解释**： 风险级别 **约束限制**： 以取值范围为准 **取值范围**： - LOW：低风险 - MEDIUM：中风险 - HIGH：高风险 - NO_RISK：无风险 **默认取值**： 不涉及 
     * @param {boolean} [supportDbClassifyRule] **参数解释**： 实例前端是否支持按数据库类型展示风险规则 **约束限制**： 以取值范围为准 **取值范围**： - true: 支持 - false: 不支持 **默认取值**： false: 不支持 
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于1000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditRuleRisksNew(listAuditRuleRisksNewRequest?: ListAuditRuleRisksNewRequest): Promise<ListAuditRuleRisksNewResponse> {
        const options = ParamCreater().listAuditRuleRisksNew(listAuditRuleRisksNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计范围策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计范围策略列表[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于10000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditRuleScopes(listAuditRuleScopesRequest?: ListAuditRuleScopesRequest): Promise<ListAuditRuleScopesResponse> {
        const options = ParamCreater().listAuditRuleScopes(listAuditRuleScopesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计范围策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计范围策略列表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于1000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditRuleScopesNew(listAuditRuleScopesNewRequest?: ListAuditRuleScopesNewRequest): Promise<ListAuditRuleScopesNewResponse> {
        const options = ParamCreater().listAuditRuleScopesNew(listAuditRuleScopesNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询隐私数据脱敏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询隐私数据脱敏规则[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于10000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditSensitiveMasks(listAuditSensitiveMasksRequest?: ListAuditSensitiveMasksRequest): Promise<ListAuditSensitiveMasksResponse> {
        const options = ParamCreater().listAuditSensitiveMasks(listAuditSensitiveMasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询隐私数据脱敏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询隐私数据脱敏规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于1000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditSensitiveMasksNew(listAuditSensitiveMasksNewRequest?: ListAuditSensitiveMasksNewRequest): Promise<ListAuditSensitiveMasksNewResponse> {
        const options = ParamCreater().listAuditSensitiveMasksNew(listAuditSensitiveMasksNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计SQL语句
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计SQL语句[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AuditSqlRequest} listAuditSqlsRequestBody 查询告警日志信息Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditSqls(listAuditSqlsRequest?: ListAuditSqlsRequest): Promise<ListAuditSqlsResponse> {
        const options = ParamCreater().listAuditSqls(listAuditSqlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计SQL语句
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计SQL语句
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AuditSqlRequest} listAuditSqlsNewRequestBody 查询告警日志信息Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditSqlsNew(listAuditSqlsNewRequest?: ListAuditSqlsNewRequest): Promise<ListAuditSqlsNewResponse> {
        const options = ParamCreater().listAuditSqlsNew(listAuditSqlsNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计汇总信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计汇总信息
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于10000 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditSummaryInfos(listAuditSummaryInfosRequest?: ListAuditSummaryInfosRequest): Promise<ListAuditSummaryInfosResponse> {
        const options = ParamCreater().listAuditSummaryInfos(listAuditSummaryInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询趋势历史数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询趋势历史数据
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditTrendHistory(listAuditTrendHistoryRequest?: ListAuditTrendHistoryRequest): Promise<ListAuditTrendHistoryResponse> {
        const options = ParamCreater().listAuditTrendHistory(listAuditTrendHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用区信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区信息[待下线]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZoneInfos(listAvailabilityZoneInfosRequest?: ListAvailabilityZoneInfosRequest): Promise<ListAvailabilityZoneInfosResponse> {
        const options = ParamCreater().listAvailabilityZoneInfos();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用区信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZoneInfosNew(listAvailabilityZoneInfosNewRequest?: ListAvailabilityZoneInfosNewRequest): Promise<ListAvailabilityZoneInfosNewResponse> {
        const options = ParamCreater().listAvailabilityZoneInfosNew();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举数据库加密实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举数据库加密实例
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbEncryptInstances(listDbEncryptInstancesRequest?: ListDbEncryptInstancesRequest): Promise<ListDbEncryptInstancesResponse> {
        const options = ParamCreater().listDbEncryptInstances();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询ECS服务器规格信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ECS服务器规格信息[待下线]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEcsSpecification(listEcsSpecificationRequest?: ListEcsSpecificationRequest): Promise<ListEcsSpecificationResponse> {
        const options = ParamCreater().listEcsSpecification();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询ECS服务器规格信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ECS服务器规格信息
     * @param {number} [imageBusinessType] **参数解释**： 镜像类型。 **约束限制**： 以取值范围为准 **取值范围**： - 1：运维 - 2：加密 - 3：审计 **默认取值**：   不传则默认为审计 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEcsSpecificationNew(listEcsSpecificationNewRequest?: ListEcsSpecificationNewRequest): Promise<ListEcsSpecificationNewResponse> {
        const options = ParamCreater().listEcsSpecificationNew(listEcsSpecificationNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取数据库运维集群实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取数据库运维集群实例
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstances(listInstancesRequest?: ListInstancesRequest): Promise<ListInstancesResponse> {
        const options = ParamCreater().listInstances();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询RDS数据库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询RDS数据库列表
     * @param {'MYSQL' | 'ORACLE' | 'POSTGRESQL' | 'SQLSERVER' | 'DAMENG' | 'TAURUS' | 'DWS' | 'KINGBASE' | 'MARIADB' | 'GAUSSDBOPENGAUSS'} dbType **参数解释**： 数据库类型 **约束限制**： 区分大小写，只能传递取值范围内的值 **取值范围**：   - MYSQL: Mysql   - ORACLE: Oracle   - POSTGRESQL: PostgreSQL   - SQLSERVER: SQL Server   - DAMENG: DAMENG   - TAURUS: TaurusDB   - DWS: GaussDB DWS   - KINGBASE: KINGBASE   - MARIADB: MariaDB   - GAUSSDBOPENGAUSS: GaussDB/openGauss **默认取值**： 不涉及 
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于100 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRdsDatabases(listRdsDatabasesRequest?: ListRdsDatabasesRequest): Promise<ListRdsDatabasesResponse> {
        const options = ParamCreater().listRdsDatabases(listRdsDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL注入规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL注入规则策略[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {SqlRuleRequest} listSqlInjectionRulesRequestBody sql风险级别
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlInjectionRules(listSqlInjectionRulesRequest?: ListSqlInjectionRulesRequest): Promise<ListSqlInjectionRulesResponse> {
        const options = ParamCreater().listSqlInjectionRules(listSqlInjectionRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启审计实例[待下线]
     * @param {ServerIdBean} rebootAuditInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebootAuditInstance(rebootAuditInstanceRequest?: RebootAuditInstanceRequest): Promise<RebootAuditInstanceResponse> {
        const options = ParamCreater().rebootAuditInstance(rebootAuditInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启审计实例
     * @param {ServerIdBean} rebootAuditInstanceNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebootAuditInstanceNew(rebootAuditInstanceNewRequest?: RebootAuditInstanceNewRequest): Promise<RebootAuditInstanceNewResponse> {
        const options = ParamCreater().rebootAuditInstanceNew(rebootAuditInstanceNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启数据库加密实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启数据库加密实例
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebootDbEncryptInstance(rebootDbEncryptInstanceRequest?: RebootDbEncryptInstanceRequest): Promise<RebootDbEncryptInstanceResponse> {
        const options = ParamCreater().rebootDbEncryptInstance(rebootDbEncryptInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启数据库运维实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启数据库运维实例
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebootDbOmInstance(rebootDbOmInstanceRequest?: RebootDbOmInstanceRequest): Promise<RebootDbOmInstanceResponse> {
        const options = ParamCreater().rebootDbOmInstance(rebootDbOmInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置数据库加密实例的密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置数据库加密实例的密码
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ChangePasswordRequest} resetDbEncryptPasswordRequestBody 重置数据库加密实例密码请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetDbEncryptPassword(resetDbEncryptPasswordRequest?: ResetDbEncryptPasswordRequest): Promise<ResetDbEncryptPasswordResponse> {
        const options = ParamCreater().resetDbEncryptPassword(resetDbEncryptPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置数据库运维实例的密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置数据库运维实例的密码
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ChangePasswordRequest} resetDbOmPasswordRequestBody 重置数据库运维实例密码请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetDbOmPassword(resetDbOmPasswordRequest?: ResetDbOmPasswordRequest): Promise<ResetDbOmPasswordResponse> {
        const options = ParamCreater().resetDbOmPassword(resetDbOmPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复备份信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复备份信息
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 备份ID。可通过获取所有备份接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以获取所有备份接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreAuditBackup(restoreAuditBackupRequest?: RestoreAuditBackupRequest): Promise<RestoreAuditBackupResponse> {
        const options = ParamCreater().restoreAuditBackup(restoreAuditBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重试备份任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试备份任务
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 备份ID。可通过获取所有备份接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以获取所有备份接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryAuditBackupTask(retryAuditBackupTaskRequest?: RetryAuditBackupTaskRequest): Promise<RetryAuditBackupTaskResponse> {
        const options = ParamCreater().retryAuditBackupTask(retryAuditBackupTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置实例告警配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置实例告警配置[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ConfigAlarmTopicRequest} setAlarmTopicConfigInfoRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAlarmTopicConfigInfo(setAlarmTopicConfigInfoRequest?: SetAlarmTopicConfigInfoRequest): Promise<SetAlarmTopicConfigInfoResponse> {
        const options = ParamCreater().setAlarmTopicConfigInfo(setAlarmTopicConfigInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置实例告警配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置实例告警配置
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ConfigAlarmTopicRequest} setAlarmTopicConfigInfoNewRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAlarmTopicConfigInfoNew(setAlarmTopicConfigInfoNewRequest?: SetAlarmTopicConfigInfoNewRequest): Promise<SetAlarmTopicConfigInfoNewResponse> {
        const options = ParamCreater().setAlarmTopicConfigInfoNew(setAlarmTopicConfigInfoNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 标记监控告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 标记监控告警
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 告警记录ID。可通过[查询审计告警信息]接口的ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询审计告警信息接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAuditAlarmLogStatus(setAuditAlarmLogStatusRequest?: SetAuditAlarmLogStatusRequest): Promise<SetAuditAlarmLogStatusResponse> {
        const options = ParamCreater().setAuditAlarmLogStatus(setAuditAlarmLogStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置备份配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份配置信息
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAuditAutoBackupTemplate(setAuditAutoBackupTemplateRequest?: SetAuditAutoBackupTemplateRequest): Promise<SetAuditAutoBackupTemplateResponse> {
        const options = ParamCreater().setAuditAutoBackupTemplate(setAuditAutoBackupTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 风险导出开关(按DomainId)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 风险导出开关(按DomainId)
     * @param {string} domainId **参数解释**： 账户ID。 通过调用IAM服务[查询IAM用户详情]接口获取 **约束限制**： 不涉及 **取值范围**： 以IAM服务[查询IAM用户详情]接口值为准。 **默认取值**： 不涉及 
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RiskBackupTemplate} setAuditBackupRiskSwitchRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAuditBackupRiskSwitch(setAuditBackupRiskSwitchRequest?: SetAuditBackupRiskSwitchRequest): Promise<SetAuditBackupRiskSwitchResponse> {
        const options = ParamCreater().setAuditBackupRiskSwitch(setAuditBackupRiskSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/关闭备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭备份
     * @param {string} domainId **参数解释**： 账户ID。 通过调用IAM服务[查询IAM用户详情]接口获取 **约束限制**： 不涉及 **取值范围**： 以IAM服务[查询IAM用户详情]接口值为准。 **默认取值**： 不涉及 
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {BackupSwitchRequest} setAuditBackupSwitchRequestBody 开启关闭备份请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAuditBackupSwitch(setAuditBackupSwitchRequest?: SetAuditBackupSwitchRequest): Promise<SetAuditBackupSwitchResponse> {
        const options = ParamCreater().setAuditBackupSwitch(setAuditBackupSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置审计实例时区信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置审计实例时区信息
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {TimezoneRequest} setAuditInstanceTimeZoneRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAuditInstanceTimeZone(setAuditInstanceTimeZoneRequest?: SetAuditInstanceTimeZoneRequest): Promise<SetAuditInstanceTimeZoneResponse> {
        const options = ParamCreater().setAuditInstanceTimeZone(setAuditInstanceTimeZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用禁用策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用禁用策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AuditScopeSwitchRequestNew} setAuditScopeRuleSwitchRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAuditScopeRuleSwitch(setAuditScopeRuleSwitchRequest?: SetAuditScopeRuleSwitchRequest): Promise<SetAuditScopeRuleSwitchResponse> {
        const options = ParamCreater().setAuditScopeRuleSwitch(setAuditScopeRuleSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑风险操作策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑风险操作策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 风险策略ID。可通过查询风险规则策略接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询风险规则策略接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {RuleAddRiskRuleRequest} setRiskOperationPolicyRequestBody 编辑风险操作策略请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRiskOperationPolicy(setRiskOperationPolicyRequest?: SetRiskOperationPolicyRequest): Promise<SetRiskOperationPolicyResponse> {
        const options = ParamCreater().setRiskOperationPolicy(setRiskOperationPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 审计实例风险规则排序
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 审计实例风险规则排序
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RankRiskRuleNew} setRiskRuleRankRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRiskRuleRank(setRiskRuleRankRequest?: SetRiskRuleRankRequest): Promise<SetRiskRuleRankResponse> {
        const options = ParamCreater().setRiskRuleRank(setRiskRuleRankRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用禁用隐私数据脱敏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用禁用单条隐私数据脱敏规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {BatchSwitchesRequestNew} setSensitiveMaskRuleSwitchRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSensitiveMaskRuleSwitch(setSensitiveMaskRuleSwitchRequest?: SetSensitiveMaskRuleSwitchRequest): Promise<SetSensitiveMaskRuleSwitchResponse> {
        const options = ParamCreater().setSensitiveMaskRuleSwitch(setSensitiveMaskRuleSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭结果集存储
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭结果集存储
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {SwitchStatus} setSensitiveResultSwitchRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSensitiveResultSwitch(setSensitiveResultSwitchRequest?: SetSensitiveResultSwitchRequest): Promise<SetSensitiveResultSwitchResponse> {
        const options = ParamCreater().setSensitiveResultSwitch(setSensitiveResultSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭隐私数据脱敏
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭隐私数据脱敏功能
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {SwitchStatus} setSensitiveSwitchRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSensitiveSwitch(setSensitiveSwitchRequest?: SetSensitiveSwitchRequest): Promise<SetSensitiveSwitchResponse> {
        const options = ParamCreater().setSensitiveSwitch(setSensitiveSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取单个风险导出配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单个风险导出配置
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} dbId **参数解释**： 数据库ID。可通过获取风险导出配置列表db_id字段获取。 **约束限制**： 不涉及 **取值范围**： 以获取风险导出配置列表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditBackRiskTemplate(showAuditBackRiskTemplateRequest?: ShowAuditBackRiskTemplateRequest): Promise<ShowAuditBackRiskTemplateResponse> {
        const options = ParamCreater().showAuditBackRiskTemplate(showAuditBackRiskTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份状态
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditBackupStatus(showAuditBackupStatusRequest?: ShowAuditBackupStatusRequest): Promise<ShowAuditBackupStatusResponse> {
        const options = ParamCreater().showAuditBackupStatus(showAuditBackupStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账户配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户配额信息[待下线]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditQuota(showAuditQuotaRequest?: ShowAuditQuotaRequest): Promise<ShowAuditQuotaResponse> {
        const options = ParamCreater().showAuditQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账户配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户配额信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditQuotaNew(showAuditQuotaNewRequest?: ShowAuditQuotaNewRequest): Promise<ShowAuditQuotaNewResponse> {
        const options = ParamCreater().showAuditQuotaNew();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定风险规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定风险规则策略[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} riskId 风险规则ID。可在查询风险规则策略接口的ID字段获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditRuleRisk(showAuditRuleRiskRequest?: ShowAuditRuleRiskRequest): Promise<ShowAuditRuleRiskResponse> {
        const options = ParamCreater().showAuditRuleRisk(showAuditRuleRiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定风险规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定风险规则策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 风险策略ID。可通过查询风险规则策略接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询风险规则策略接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditRuleRiskNew(showAuditRuleRiskNewRequest?: ShowAuditRuleRiskNewRequest): Promise<ShowAuditRuleRiskNewResponse> {
        const options = ParamCreater().showAuditRuleRiskNew(showAuditRuleRiskNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户下所有实例的风险汇总信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户下所有实例的风险汇总信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditStatistics(showAuditStatisticsRequest?: ShowAuditStatisticsRequest): Promise<ShowAuditStatisticsResponse> {
        const options = ParamCreater().showAuditStatistics();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户审计信息汇总任务状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户审计信息汇总任务状态
     * @param {string} busiType **参数解释**： 业务类型。 **约束限制**： 不涉及 **取值范围**：   - audit：审计实例    - risk：风险 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditTaskStatus(showAuditTaskStatusRequest?: ShowAuditTaskStatusRequest): Promise<ShowAuditTaskStatusResponse> {
        const options = ParamCreater().showAuditTaskStatus(showAuditTaskStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取报表的计划任务配置信息（topic方式）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取报表的计划任务配置信息（topic方式）
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 模板ID。可通过获取报表模板接口ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以获取报表模板接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditTopicReportSchedulerConfig(showAuditTopicReportSchedulerConfigRequest?: ShowAuditTopicReportSchedulerConfigRequest): Promise<ShowAuditTopicReportSchedulerConfigResponse> {
        const options = ParamCreater().showAuditTopicReportSchedulerConfig(showAuditTopicReportSchedulerConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的实例是否可升级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的实例是否可升级
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditUpgradeStatus(showAuditUpgradeStatusRequest?: ShowAuditUpgradeStatusRequest): Promise<ShowAuditUpgradeStatusResponse> {
        const options = ParamCreater().showAuditUpgradeStatus();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取风险导出桶名和路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取风险导出桶名和路径
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupRiskBucketPath(showBackupRiskBucketPathRequest?: ShowBackupRiskBucketPathRequest): Promise<ShowBackupRiskBucketPathResponse> {
        const options = ParamCreater().showBackupRiskBucketPath(showBackupRiskBucketPathRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例监控数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例监控数据
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {MonitorInfoRequest} showInstanceMonitorInfoRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceMonitorInfo(showInstanceMonitorInfoRequest?: ShowInstanceMonitorInfoRequest): Promise<ShowInstanceMonitorInfoResponse> {
        const options = ParamCreater().showInstanceMonitorInfo(showInstanceMonitorInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询加密/运维增强配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加密/运维增强配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceQuota(showInstanceQuotaRequest?: ShowInstanceQuotaRequest): Promise<ShowInstanceQuotaResponse> {
        const options = ParamCreater().showInstanceQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取隐私数据脱敏开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取隐私数据脱敏开关
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSensitiveMaskSwitch(showSensitiveMaskSwitchRequest?: ShowSensitiveMaskSwitchRequest): Promise<ShowSensitiveMaskSwitchResponse> {
        const options = ParamCreater().showSensitiveMaskSwitch(showSensitiveMaskSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取隐私数据结果集开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取隐私数据结果集开关
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSensitiveResultSwitch(showSensitiveResultSwitchRequest?: ShowSensitiveResultSwitchRequest): Promise<ShowSensitiveResultSwitchResponse> {
        const options = ParamCreater().showSensitiveResultSwitch(showSensitiveResultSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取管理侧版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取管理侧版本信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerVersion(showServerVersionRequest?: ShowServerVersionRequest): Promise<ShowServerVersionResponse> {
        const options = ParamCreater().showServerVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定SQL语句的详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定SQL语句的详细信息
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**：  SQL语句ID。可在SQL列表查询接口ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以SQL列表查询接口获取值为准。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlDetail(showSqlDetailRequest?: ShowSqlDetailRequest): Promise<ShowSqlDetailResponse> {
        const options = ParamCreater().showSqlDetail(showSqlDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启审计实例[待下线]
     * @param {ServerIdBean} startAuditInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startAuditInstance(startAuditInstanceRequest?: StartAuditInstanceRequest): Promise<StartAuditInstanceResponse> {
        const options = ParamCreater().startAuditInstance(startAuditInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启审计实例
     * @param {ServerIdBean} startAuditInstanceNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startAuditInstanceNew(startAuditInstanceNewRequest?: StartAuditInstanceNewRequest): Promise<StartAuditInstanceNewResponse> {
        const options = ParamCreater().startAuditInstanceNew(startAuditInstanceNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动数据库加密实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动数据库加密实例
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startDbEncryptInstance(startDbEncryptInstanceRequest?: StartDbEncryptInstanceRequest): Promise<StartDbEncryptInstanceResponse> {
        const options = ParamCreater().startDbEncryptInstance(startDbEncryptInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动数据库运维实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动数据库运维实例
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startDbOmInstance(startDbOmInstanceRequest?: StartDbOmInstanceRequest): Promise<StartDbOmInstanceResponse> {
        const options = ParamCreater().startDbOmInstance(startDbOmInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭审计实例[待下线]
     * @param {ServerIdBean} stopAuditInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopAuditInstance(stopAuditInstanceRequest?: StopAuditInstanceRequest): Promise<StopAuditInstanceResponse> {
        const options = ParamCreater().stopAuditInstance(stopAuditInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭审计实例
     * @param {ServerIdBean} stopAuditInstanceNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopAuditInstanceNew(stopAuditInstanceNewRequest?: StopAuditInstanceNewRequest): Promise<StopAuditInstanceNewResponse> {
        const options = ParamCreater().stopAuditInstanceNew(stopAuditInstanceNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止数据库加密实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止数据库加密实例
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopDbEncryptInstance(stopDbEncryptInstanceRequest?: StopDbEncryptInstanceRequest): Promise<StopDbEncryptInstanceResponse> {
        const options = ParamCreater().stopDbEncryptInstance(stopDbEncryptInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止数据库运维实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止数据库运维实例
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopDbOmInstance(stopDbOmInstanceRequest?: StopDbOmInstanceRequest): Promise<StopDbOmInstanceResponse> {
        const options = ParamCreater().stopDbOmInstance(stopDbOmInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于开启和关闭Agent审计的功能，当开启后，开始抓取用户的访问信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭Agent[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AgentSwitchRequest} switchAgentRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchAgent(switchAgentRequest?: SwitchAgentRequest): Promise<SwitchAgentResponse> {
        const options = ParamCreater().switchAgent(switchAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭数据库[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {SwitchAuditDbRequest} switchAuditDatabaseRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchAuditDatabase(switchAuditDatabaseRequest?: SwitchAuditDatabaseRequest): Promise<SwitchAuditDatabaseResponse> {
        const options = ParamCreater().switchAuditDatabase(switchAuditDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭数据库
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {SwitchAuditDbRequest} switchAuditDatabaseNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchAuditDatabaseNew(switchAuditDatabaseNewRequest?: SwitchAuditDatabaseNewRequest): Promise<SwitchAuditDatabaseNewResponse> {
        const options = ParamCreater().switchAuditDatabaseNew(switchAuditDatabaseNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭风险规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭风险规则[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {BatchSwitchesRequest} switchRiskRuleRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchRiskRule(switchRiskRuleRequest?: SwitchRiskRuleRequest): Promise<SwitchRiskRuleResponse> {
        const options = ParamCreater().switchRiskRule(switchRiskRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/关闭风险规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭风险规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {BatchSwitchesRequest} switchRiskRuleNewRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchRiskRuleNew(switchRiskRuleNewRequest?: SwitchRiskRuleNewRequest): Promise<SwitchRiskRuleNewResponse> {
        const options = ParamCreater().switchRiskRuleNew(switchRiskRuleNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑数据库加密实例的EIP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑数据库加密实例的EIP
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unbindDbEncryptEip(unbindDbEncryptEipRequest?: UnbindDbEncryptEipRequest): Promise<UnbindDbEncryptEipResponse> {
        const options = ParamCreater().unbindDbEncryptEip(unbindDbEncryptEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑数据库运维实例的EIP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑数据库运维实例的EIP
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unbindDbOmEip(unbindDbOmEipRequest?: UnbindDbOmEipRequest): Promise<UnbindDbOmEipResponse> {
        const options = ParamCreater().unbindDbOmEip(unbindDbOmEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新审计实例信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新审计实例信息[待下线]
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {UpdateAuditBean} updateAuditInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditInstance(updateAuditInstanceRequest?: UpdateAuditInstanceRequest): Promise<UpdateAuditInstanceResponse> {
        const options = ParamCreater().updateAuditInstance(updateAuditInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新审计实例信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新审计实例信息
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {UpdateAuditBean} updateAuditInstanceNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditInstanceNew(updateAuditInstanceNewRequest?: UpdateAuditInstanceNewRequest): Promise<UpdateAuditInstanceNewResponse> {
        const options = ParamCreater().updateAuditInstanceNew(updateAuditInstanceNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改风险导出桶名和路径(按DomainId)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改风险导出桶名和路径(按DomainId)
     * @param {string} domainId **参数解释**： 账户ID。 通过调用IAM服务[查询IAM用户详情]接口获取 **约束限制**： 不涉及 **取值范围**： 以IAM服务[查询IAM用户详情]接口值为准。 **默认取值**： 不涉及 
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RiskBackupConfig} updateAuditRiskBucketPathRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditRiskBucketPath(updateAuditRiskBucketPathRequest?: UpdateAuditRiskBucketPathRequest): Promise<UpdateAuditRiskBucketPathResponse> {
        const options = ParamCreater().updateAuditRiskBucketPath(updateAuditRiskBucketPathRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑审计范围规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑审计范围规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 审计范围ID。可通过查询审计范围策略列表接口ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询审计范围策略列表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {RuleScopeRequest} updateAuditScopeRuleRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditScopeRule(updateAuditScopeRuleRequest?: UpdateAuditScopeRuleRequest): Promise<UpdateAuditScopeRuleResponse> {
        const options = ParamCreater().updateAuditScopeRule(updateAuditScopeRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例安全组[待下线]
     * @param {SecurityGroupRequest} updateAuditSecurityGroupRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditSecurityGroup(updateAuditSecurityGroupRequest?: UpdateAuditSecurityGroupRequest): Promise<UpdateAuditSecurityGroupResponse> {
        const options = ParamCreater().updateAuditSecurityGroup(updateAuditSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例安全组
     * @param {SecurityGroupRequest} updateAuditSecurityGroupNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditSecurityGroupNew(updateAuditSecurityGroupNewRequest?: UpdateAuditSecurityGroupNewRequest): Promise<UpdateAuditSecurityGroupNewResponse> {
        const options = ParamCreater().updateAuditSecurityGroupNew(updateAuditSecurityGroupNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新租户审计信息汇总任务状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新租户审计信息汇总任务状态
     * @param {string} busiType **参数解释**： 业务类型。 **约束限制**： 区分大小写，以取值范围为准 **取值范围**： - risk：风险  - audit：审计实例 **默认取值**： 不涉及
     * @param {AuditSummaryStatusRequest} updateAuditTaskStatusRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditTaskStatus(updateAuditTaskStatusRequest?: UpdateAuditTaskStatusRequest): Promise<UpdateAuditTaskStatusResponse> {
        const options = ParamCreater().updateAuditTaskStatus(updateAuditTaskStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改报表的计划任务配置信息（topic方式）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改报表的计划任务配置信息（topic方式）
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ConfigReportTopicRequest} updateAuditTopicReportSchedulerConfigRequestBody 更改topic报表的计划任务配置信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditTopicReportSchedulerConfig(updateAuditTopicReportSchedulerConfigRequest?: UpdateAuditTopicReportSchedulerConfigRequest): Promise<UpdateAuditTopicReportSchedulerConfigResponse> {
        const options = ParamCreater().updateAuditTopicReportSchedulerConfig(updateAuditTopicReportSchedulerConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改数据库加密实例的名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改数据库加密实例的名称
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ChangeNameRequest} updateDbEncryptInstanceNameRequestBody 更改数据库加密实例名称请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDbEncryptInstanceName(updateDbEncryptInstanceNameRequest?: UpdateDbEncryptInstanceNameRequest): Promise<UpdateDbEncryptInstanceNameResponse> {
        const options = ParamCreater().updateDbEncryptInstanceName(updateDbEncryptInstanceNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改数据库运维实例的名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改数据库运维实例的名称
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ChangeNameRequest} updateDbOmInstanceNameRequestBody 更改数据库运维实例名称请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDbOmInstanceName(updateDbOmInstanceNameRequest?: UpdateDbOmInstanceNameRequest): Promise<UpdateDbOmInstanceNameResponse> {
        const options = ParamCreater().updateDbOmInstanceName(updateDbOmInstanceNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改编辑隐私数据脱敏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改编辑隐私数据脱敏规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 隐私规则ID。可通过查询隐私数据脱敏规则列表ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询隐私数据脱敏规则列表值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {MaskRuleRequest} updateSensitiveMaskRuleRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSensitiveMaskRule(updateSensitiveMaskRuleRequest?: UpdateSensitiveMaskRuleRequest): Promise<UpdateSensitiveMaskRuleResponse> {
        const options = ParamCreater().updateSensitiveMaskRule(updateSensitiveMaskRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 往OBS导出审计数据库配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 往OBS导出审计数据库配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadAuditDbConfig(uploadAuditDbConfigRequest?: UploadAuditDbConfigRequest): Promise<UploadAuditDbConfigResponse> {
        const options = ParamCreater().uploadAuditDbConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加审计数据库Agent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加审计数据库Agent
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AuditAgentRequest} addAuditAgentNewRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAuditAgentNew(addAuditAgentNewRequest?: AddAuditAgentNewRequest): Promise<AddAuditAgentNewResponse> {
        const options = ParamCreater().addAuditAgentNew(addAuditAgentNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定agent_id方式添加agent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 指定agent_id方式添加agent
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} agentId **参数解释**： 审计Agent ID。可通过获取agent列表接口agent_id字段获取 **约束限制**： 不涉及 **取值范围**： 以获取agent列表接口agent_id值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {AgentEditRequest} createAuditDbAgentRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuditDbAgent(createAuditDbAgentRequest?: CreateAuditDbAgentRequest): Promise<CreateAuditDbAgentResponse> {
        const options = ParamCreater().createAuditDbAgent(createAuditDbAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库Agent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库Agent
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} agentId **参数解释**： 审计Agent ID。可通过获取agent列表接口agent_id字段获取 **约束限制**： 不涉及 **取值范围**： 以获取agent列表接口agent_id值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {string} dbId **参数解释**： 数据库ID, 可在查询数据库列表接口ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询数据库列表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditAgentNew(deleteAuditAgentNewRequest?: DeleteAuditAgentNewRequest): Promise<DeleteAuditAgentNewResponse> {
        const options = ParamCreater().deleteAuditAgentNew(deleteAuditAgentNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载审计Agent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载审计Agent
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} agentId **参数解释**： 审计Agent ID。可通过获取agent列表接口agent_id字段获取 **约束限制**： 不涉及 **取值范围**： 以获取agent列表接口agent_id值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadAuditAgentNew(downloadAuditAgentNewRequest?: DownloadAuditAgentNewRequest): Promise<DownloadAuditAgentNewResponse> {
        const options = ParamCreater().downloadAuditAgentNew(downloadAuditAgentNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库Agent列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库Agent列表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} dbId **参数解释**： 数据库ID, 可在查询数据库列表接口ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询数据库列表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditAgentNew(listAuditAgentNewRequest?: ListAuditAgentNewRequest): Promise<ListAuditAgentNewResponse> {
        const options = ParamCreater().listAuditAgentNew(listAuditAgentNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于开启和关闭Agent审计的功能，当开启后，开始抓取用户的访问信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭Agent
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AgentSwitchRequest} switchAgentNewRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchAgentNew(switchAgentNewRequest?: SwitchAgentNewRequest): Promise<SwitchAgentNewResponse> {
        const options = ParamCreater().switchAgentNew(switchAgentNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加白名单
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {AddWhitelistRequest} batchAddAuditWhitelistRequestBody 批量添加白名单请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddAuditWhitelist(batchAddAuditWhitelistRequest?: BatchAddAuditWhitelistRequest): Promise<BatchAddAuditWhitelistResponse> {
        const options = ParamCreater().batchAddAuditWhitelist(batchAddAuditWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加sql自定义规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加sql自定义规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RuleAddSqlRequest} createAuditSqlRuleRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuditSqlRule(createAuditSqlRuleRequest?: CreateAuditSqlRuleRequest): Promise<CreateAuditSqlRuleResponse> {
        const options = ParamCreater().createAuditSqlRule(createAuditSqlRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除sql自定义规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除sql自定义规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： SQL规则ID。可通过查询SQL注入规则策略接口的ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询SQL注入规则策略接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditRuleSql(deleteAuditRuleSqlRequest?: DeleteAuditRuleSqlRequest): Promise<DeleteAuditRuleSqlResponse> {
        const options = ParamCreater().deleteAuditRuleSql(deleteAuditRuleSqlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除白名单
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {WhitelistBatchDeleteRequest} deleteAuditWhitelistRequestBody 批量删除白名单请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditWhitelist(deleteAuditWhitelistRequest?: DeleteAuditWhitelistRequest): Promise<DeleteAuditWhitelistResponse> {
        const options = ParamCreater().deleteAuditWhitelist(deleteAuditWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL注入规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL注入规则策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {SqlRuleRequest} listSqlInjectionRulesNewRequestBody sql风险级别
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlInjectionRulesNew(listSqlInjectionRulesNewRequest?: ListSqlInjectionRulesNewRequest): Promise<ListSqlInjectionRulesNewResponse> {
        const options = ParamCreater().listSqlInjectionRulesNew(listSqlInjectionRulesNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询白名单列表
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {number} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {number} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于等于10的整数 **取值范围**： 大于等于10小于等于100 **默认取值**： 默认值为100 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWhitelists(listWhitelistsRequest?: ListWhitelistsRequest): Promise<ListWhitelistsResponse> {
        const options = ParamCreater().listWhitelists(listWhitelistsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭sql注入策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭sql注入策略
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RuleSqlIdRequest} setAuditSqlRuleSwitchRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAuditSqlRuleSwitch(setAuditSqlRuleSwitchRequest?: SetAuditSqlRuleSwitchRequest): Promise<SetAuditSqlRuleSwitchResponse> {
        const options = ParamCreater().setAuditSqlRuleSwitch(setAuditSqlRuleSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * sql规则优先级排序
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary sql规则优先级排序
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {RuleSqlIdsRequestNew} setSqlRuleRankRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSqlRuleRank(setSqlRuleRankRequest?: SetSqlRuleRankRequest): Promise<SetSqlRuleRankResponse> {
        const options = ParamCreater().setSqlRuleRank(setSqlRuleRankRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑sql自定义规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑sql自定义规则
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： SQL规则ID。可通过查询SQL注入规则策略接口的ID字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询SQL注入规则策略接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {RuleAddSqlRequest} updateAuditSqlRuleRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditSqlRule(updateAuditSqlRuleRequest?: UpdateAuditSqlRuleRequest): Promise<UpdateAuditSqlRuleResponse> {
        const options = ParamCreater().updateAuditSqlRule(updateAuditSqlRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改白名单
     * @param {string} instanceId **参数解释**： 实例ID。可通过查询实例列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {string} id **参数解释**： 白名单ID。可通过查询白名单列表接口ID字段获取 **约束限制**： 不涉及 **取值范围**： 以查询白名单列表接口值为准，字符长度16-64。 **默认取值**： 不涉及 
     * @param {UpdateWhitelistRequest} updateAuditWhitelistRequestBody 修改白名单请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditWhitelist(updateAuditWhitelistRequest?: UpdateAuditWhitelistRequest): Promise<UpdateAuditWhitelistResponse> {
        const options = ParamCreater().updateAuditWhitelist(updateAuditWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加资源标签
     * @param {'auditInstance'} resourceType **参数解释**：  资源类型。 **约束限制**： 不涉及 **取值范围**：  - auditInstance：审计  **默认取值**： 不涉及 
     * @param {string} resourceId **参数解释**：  资源ID。可在查询实例列表接口的resource_id字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口获取值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ResourceTagRequest} batchAddResourceTagRequestBody 添加Tag请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddResourceTag(batchAddResourceTagRequest?: BatchAddResourceTagRequest): Promise<BatchAddResourceTagResponse> {
        const options = ParamCreater().batchAddResourceTag(batchAddResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除资源标签
     * @param {'auditInstance'} resourceType **参数解释**：  资源类型。 **约束限制**： 不涉及 **取值范围**：  - auditInstance：审计  **默认取值**： 不涉及 
     * @param {string} resourceId **参数解释**：  资源ID。可在查询实例列表接口的resource_id字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口获取值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {ResourceTagDeleteRequest} batchDeleteResourceTagRequestBody 添加Tag请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteResourceTag(batchDeleteResourceTagRequest?: BatchDeleteResourceTagRequest): Promise<BatchDeleteResourceTagResponse> {
        const options = ParamCreater().batchDeleteResourceTag(batchDeleteResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询资源实例数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询资源实例数量
     * @param {'auditInstance'} resourceType **参数解释**：  资源类型。 **约束限制**： 不涉及 **取值范围**：  - auditInstance：审计  **默认取值**： 不涉及 
     * @param {ResourceInstanceTagRequest} countResourceInstanceByTagRequestBody Tag请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countResourceInstanceByTag(countResourceInstanceByTagRequest?: CountResourceInstanceByTagRequest): Promise<CountResourceInstanceByTagResponse> {
        const options = ParamCreater().countResourceInstanceByTag(countResourceInstanceByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例标签
     * @param {string} resourceType **参数解释**：  资源类型。 **约束限制**： 不涉及 **取值范围**：  - auditInstance：审计 **默认取值**： 不涉及 
     * @param {string} resourceId **参数解释**：  资源ID。可在查询实例列表接口的resource_id字段获取。 **约束限制**： 不涉及 **取值范围**： 以查询实例列表接口获取值为准，字符长度32-64。 **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditTags(listAuditTagsRequest?: ListAuditTagsRequest): Promise<ListAuditTagsResponse> {
        const options = ParamCreater().listAuditTags(listAuditTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {'auditInstance'} resourceType **参数解释**：  资源类型。 **约束限制**： 不涉及 **取值范围**：  - auditInstance：审计  **默认取值**： 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectResourceTags(listProjectResourceTagsRequest?: ListProjectResourceTagsRequest): Promise<ListProjectResourceTagsResponse> {
        const options = ParamCreater().listProjectResourceTags(listProjectResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询资源实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询资源实例列表
     * @param {'auditInstance'} resourceType **参数解释**：  资源类型。 **约束限制**： 不涉及 **取值范围**：  - auditInstance：审计  **默认取值**： 不涉及 
     * @param {ResourceInstanceTagRequest} listResourceInstanceByTagRequestBody Tag请求Body体
     * @param {string} [limit] **参数解释**： 每页查询记录数。 **约束限制**： 仅支持大于0的整数 **取值范围**： 大于0小于等于10000 **默认取值**： 默认值为1000 
     * @param {string} [offset] **参数解释**： 分页偏移量，从第一条数据偏移offset条数据后开始查询 **约束限制**： 仅支持大于等于0的整数 **取值范围**： 大于等于0 **默认取值**： 默认值为0 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstanceByTag(listResourceInstanceByTagRequest?: ListResourceInstanceByTagRequest): Promise<ListResourceInstanceByTagResponse> {
        const options = ParamCreater().listResourceInstanceByTag(listResourceInstanceByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加审计数据库Agent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAuditAgent(addAuditAgentRequest?: AddAuditAgentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{instance_id}/audit/agents",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addAuditAgentRequest !== null && addAuditAgentRequest !== undefined) {
                if (addAuditAgentRequest instanceof AddAuditAgentRequest) {
                    instanceId = addAuditAgentRequest.instanceId;
                    body = addAuditAgentRequest.body
                } else {
                    instanceId = addAuditAgentRequest['instance_id'];
                    body = addAuditAgentRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addAuditAgent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加自建数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAuditDatabase(addAuditDatabaseRequest?: AddAuditDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/audit/databases",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addAuditDatabaseRequest !== null && addAuditDatabaseRequest !== undefined) {
                if (addAuditDatabaseRequest instanceof AddAuditDatabaseRequest) {
                    instanceId = addAuditDatabaseRequest.instanceId;
                    body = addAuditDatabaseRequest.body
                } else {
                    instanceId = addAuditDatabaseRequest['instance_id'];
                    body = addAuditDatabaseRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addAuditDatabase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加自建数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAuditDatabaseNew(addAuditDatabaseNewRequest?: AddAuditDatabaseNewRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/databases",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addAuditDatabaseNewRequest !== null && addAuditDatabaseNewRequest !== undefined) {
                if (addAuditDatabaseNewRequest instanceof AddAuditDatabaseNewRequest) {
                    instanceId = addAuditDatabaseNewRequest.instanceId;
                    body = addAuditDatabaseNewRequest.body
                } else {
                    instanceId = addAuditDatabaseNewRequest['instance_id'];
                    body = addAuditDatabaseNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addAuditDatabaseNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加RDS数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRdsDatabase(addRdsDatabaseRequest?: AddRdsDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{instance_id}/audit/databases/rds",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addRdsDatabaseRequest !== null && addRdsDatabaseRequest !== undefined) {
                if (addRdsDatabaseRequest instanceof AddRdsDatabaseRequest) {
                    instanceId = addRdsDatabaseRequest.instanceId;
                    body = addRdsDatabaseRequest.body
                } else {
                    instanceId = addRdsDatabaseRequest['instance_id'];
                    body = addRdsDatabaseRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addRdsDatabase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加RDS数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRdsDatabaseNew(addRdsDatabaseNewRequest?: AddRdsDatabaseNewRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/audit/{instance_id}/databases/rds",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addRdsDatabaseNewRequest !== null && addRdsDatabaseNewRequest !== undefined) {
                if (addRdsDatabaseNewRequest instanceof AddRdsDatabaseNewRequest) {
                    instanceId = addRdsDatabaseNewRequest.instanceId;
                    body = addRdsDatabaseNewRequest.body
                } else {
                    instanceId = addRdsDatabaseNewRequest['instance_id'];
                    body = addRdsDatabaseNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addRdsDatabaseNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加RDS数据库。V1版本已不再维护，待下线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRdsNoAgentDatabase(addRdsNoAgentDatabaseRequest?: AddRdsNoAgentDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/databases/rds",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addRdsNoAgentDatabaseRequest !== null && addRdsNoAgentDatabaseRequest !== undefined) {
                if (addRdsNoAgentDatabaseRequest instanceof AddRdsNoAgentDatabaseRequest) {
                    instanceId = addRdsNoAgentDatabaseRequest.instanceId;
                    body = addRdsNoAgentDatabaseRequest.body
                } else {
                    instanceId = addRdsNoAgentDatabaseRequest['instance_id'];
                    body = addRdsNoAgentDatabaseRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addRdsNoAgentDatabase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 审计范围规则操作-删除策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAuditScope(batchDeleteAuditScopeRequest?: BatchDeleteAuditScopeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/rule/scopes/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteAuditScopeRequest !== null && batchDeleteAuditScopeRequest !== undefined) {
                if (batchDeleteAuditScopeRequest instanceof BatchDeleteAuditScopeRequest) {
                    instanceId = batchDeleteAuditScopeRequest.instanceId;
                    body = batchDeleteAuditScopeRequest.body
                } else {
                    instanceId = batchDeleteAuditScopeRequest['instance_id'];
                    body = batchDeleteAuditScopeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteAuditScope.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量标记
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetAuditAlarmLogStatus(batchSetAuditAlarmLogStatusRequest?: BatchSetAuditAlarmLogStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/alarm-log/mark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchSetAuditAlarmLogStatusRequest !== null && batchSetAuditAlarmLogStatusRequest !== undefined) {
                if (batchSetAuditAlarmLogStatusRequest instanceof BatchSetAuditAlarmLogStatusRequest) {
                    instanceId = batchSetAuditAlarmLogStatusRequest.instanceId;
                    body = batchSetAuditAlarmLogStatusRequest.body
                } else {
                    instanceId = batchSetAuditAlarmLogStatusRequest['instance_id'];
                    body = batchSetAuditAlarmLogStatusRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchSetAuditAlarmLogStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 绑定数据库加密实例的EIP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        bindDbEncryptEip(bindDbEncryptEipRequest?: BindDbEncryptEipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-encrypt/{instance_id}/eip/bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (bindDbEncryptEipRequest !== null && bindDbEncryptEipRequest !== undefined) {
                if (bindDbEncryptEipRequest instanceof BindDbEncryptEipRequest) {
                    instanceId = bindDbEncryptEipRequest.instanceId;
                    body = bindDbEncryptEipRequest.body
                } else {
                    instanceId = bindDbEncryptEipRequest['instance_id'];
                    body = bindDbEncryptEipRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling bindDbEncryptEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 绑定数据库运维实例的EIP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        bindDbOmEip(bindDbOmEipRequest?: BindDbOmEipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-om/{instance_id}/eip/bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (bindDbOmEipRequest !== null && bindDbOmEipRequest !== undefined) {
                if (bindDbOmEipRequest instanceof BindDbOmEipRequest) {
                    instanceId = bindDbOmEipRequest.instanceId;
                    body = bindDbOmEipRequest.body
                } else {
                    instanceId = bindDbOmEipRequest['instance_id'];
                    body = bindDbOmEipRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling bindDbOmEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改数据库加密实例的安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeDbEncryptSecurityGroup(changeDbEncryptSecurityGroupRequest?: ChangeDbEncryptSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/db-encrypt/{instance_id}/security-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (changeDbEncryptSecurityGroupRequest !== null && changeDbEncryptSecurityGroupRequest !== undefined) {
                if (changeDbEncryptSecurityGroupRequest instanceof ChangeDbEncryptSecurityGroupRequest) {
                    instanceId = changeDbEncryptSecurityGroupRequest.instanceId;
                    body = changeDbEncryptSecurityGroupRequest.body
                } else {
                    instanceId = changeDbEncryptSecurityGroupRequest['instance_id'];
                    body = changeDbEncryptSecurityGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeDbEncryptSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改数据库运维实例的安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeDbOmSecurityGroup(changeDbOmSecurityGroupRequest?: ChangeDbOmSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/db-om/{instance_id}/security-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (changeDbOmSecurityGroupRequest !== null && changeDbOmSecurityGroupRequest !== undefined) {
                if (changeDbOmSecurityGroupRequest instanceof ChangeDbOmSecurityGroupRequest) {
                    instanceId = changeDbOmSecurityGroupRequest.instanceId;
                    body = changeDbOmSecurityGroupRequest.body
                } else {
                    instanceId = changeDbOmSecurityGroupRequest['instance_id'];
                    body = changeDbOmSecurityGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeDbOmSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 触发审计实例升级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmUpgradeAudit(confirmUpgradeAuditRequest?: ConfirmUpgradeAuditRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{resource_id}/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (confirmUpgradeAuditRequest !== null && confirmUpgradeAuditRequest !== undefined) {
                if (confirmUpgradeAuditRequest instanceof ConfirmUpgradeAuditRequest) {
                    resourceId = confirmUpgradeAuditRequest.resourceId;
                } else {
                    resourceId = confirmUpgradeAuditRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling confirmUpgradeAudit.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库用户会话分布
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countDbAccountSession(countDbAccountSessionRequest?: CountDbAccountSessionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/statistics/session/db-account",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (countDbAccountSessionRequest !== null && countDbAccountSessionRequest !== undefined) {
                if (countDbAccountSessionRequest instanceof CountDbAccountSessionRequest) {
                    instanceId = countDbAccountSessionRequest.instanceId;
                    body = countDbAccountSessionRequest.body
                } else {
                    instanceId = countDbAccountSessionRequest['instance_id'];
                    body = countDbAccountSessionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling countDbAccountSession.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询客户端会话分布
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countDbClientSession(countDbClientSessionRequest?: CountDbClientSessionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/statistics/session/db-client",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (countDbClientSessionRequest !== null && countDbClientSessionRequest !== undefined) {
                if (countDbClientSessionRequest instanceof CountDbClientSessionRequest) {
                    instanceId = countDbClientSessionRequest.instanceId;
                    body = countDbClientSessionRequest.body
                } else {
                    instanceId = countDbClientSessionRequest['instance_id'];
                    body = countDbClientSessionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling countDbClientSession.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定时间段内的sql注入分布统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countInjectionStatistics(countInjectionStatisticsRequest?: CountInjectionStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/statistics/trend/sql-injection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (countInjectionStatisticsRequest !== null && countInjectionStatisticsRequest !== undefined) {
                if (countInjectionStatisticsRequest instanceof CountInjectionStatisticsRequest) {
                    instanceId = countInjectionStatisticsRequest.instanceId;
                    body = countInjectionStatisticsRequest.body
                } else {
                    instanceId = countInjectionStatisticsRequest['instance_id'];
                    body = countInjectionStatisticsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling countInjectionStatistics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定时间段内的风险操作数量分布统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countOperationStatistics(countOperationStatisticsRequest?: CountOperationStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/statistics/trend/risk-operation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (countOperationStatisticsRequest !== null && countOperationStatisticsRequest !== undefined) {
                if (countOperationStatisticsRequest instanceof CountOperationStatisticsRequest) {
                    instanceId = countOperationStatisticsRequest.instanceId;
                    body = countOperationStatisticsRequest.body
                } else {
                    instanceId = countOperationStatisticsRequest['instance_id'];
                    body = countOperationStatisticsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling countOperationStatistics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定时间段内的风险分布统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countRiskTrendStatistics(countRiskTrendStatisticsRequest?: CountRiskTrendStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/statistics/trend/risk-level",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (countRiskTrendStatisticsRequest !== null && countRiskTrendStatisticsRequest !== undefined) {
                if (countRiskTrendStatisticsRequest instanceof CountRiskTrendStatisticsRequest) {
                    instanceId = countRiskTrendStatisticsRequest.instanceId;
                    body = countRiskTrendStatisticsRequest.body
                } else {
                    instanceId = countRiskTrendStatisticsRequest['instance_id'];
                    body = countRiskTrendStatisticsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling countRiskTrendStatistics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定时间段内的查询会话统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countSessionStatistics(countSessionStatisticsRequest?: CountSessionStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/statistics/trend/session",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (countSessionStatisticsRequest !== null && countSessionStatisticsRequest !== undefined) {
                if (countSessionStatisticsRequest instanceof CountSessionStatisticsRequest) {
                    instanceId = countSessionStatisticsRequest.instanceId;
                    body = countSessionStatisticsRequest.body
                } else {
                    instanceId = countSessionStatisticsRequest['instance_id'];
                    body = countSessionStatisticsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling countSessionStatistics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定时间段内的SQL分布统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countSqlStatistics(countSqlStatisticsRequest?: CountSqlStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/statistics/trend/sql-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (countSqlStatisticsRequest !== null && countSqlStatisticsRequest !== undefined) {
                if (countSqlStatisticsRequest instanceof CountSqlStatisticsRequest) {
                    instanceId = countSqlStatisticsRequest.instanceId;
                    body = countSqlStatisticsRequest.body
                } else {
                    instanceId = countSqlStatisticsRequest['instance_id'];
                    body = countSqlStatisticsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling countSqlStatistics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定时间段内的sql数量分布统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countSqlTrendStatistics(countSqlTrendStatisticsRequest?: CountSqlTrendStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/statistics/trend/sql-count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (countSqlTrendStatisticsRequest !== null && countSqlTrendStatisticsRequest !== undefined) {
                if (countSqlTrendStatisticsRequest instanceof CountSqlTrendStatisticsRequest) {
                    instanceId = countSqlTrendStatisticsRequest.instanceId;
                    body = countSqlTrendStatisticsRequest.body
                } else {
                    instanceId = countSqlTrendStatisticsRequest['instance_id'];
                    body = countSqlTrendStatisticsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling countSqlTrendStatistics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加风险规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuditRiskRule(createAuditRiskRuleRequest?: CreateAuditRiskRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/rule/risk",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAuditRiskRuleRequest !== null && createAuditRiskRuleRequest !== undefined) {
                if (createAuditRiskRuleRequest instanceof CreateAuditRiskRuleRequest) {
                    instanceId = createAuditRiskRuleRequest.instanceId;
                    body = createAuditRiskRuleRequest.body
                } else {
                    instanceId = createAuditRiskRuleRequest['instance_id'];
                    body = createAuditRiskRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAuditRiskRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加审计范围策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuditScopeRule(createAuditScopeRuleRequest?: CreateAuditScopeRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/rule/scopes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAuditScopeRuleRequest !== null && createAuditScopeRuleRequest !== undefined) {
                if (createAuditScopeRuleRequest instanceof CreateAuditScopeRuleRequest) {
                    instanceId = createAuditScopeRuleRequest.instanceId;
                    body = createAuditScopeRuleRequest.body
                } else {
                    instanceId = createAuditScopeRuleRequest['instance_id'];
                    body = createAuditScopeRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAuditScopeRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按包周期方式购买数据库加密实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbEncryptInstancePeriod(createDbEncryptInstancePeriodRequest?: CreateDbEncryptInstancePeriodRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/db-encrypt/charge/period/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDbEncryptInstancePeriodRequest !== null && createDbEncryptInstancePeriodRequest !== undefined) {
                if (createDbEncryptInstancePeriodRequest instanceof CreateDbEncryptInstancePeriodRequest) {
                    body = createDbEncryptInstancePeriodRequest.body
                } else {
                    body = createDbEncryptInstancePeriodRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 包周期购买数据库运维实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbOmInstancePeriod(createDbOmInstancePeriodRequest?: CreateDbOmInstancePeriodRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/db-om/charge/period/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDbOmInstancePeriodRequest !== null && createDbOmInstancePeriodRequest !== undefined) {
                if (createDbOmInstancePeriodRequest instanceof CreateDbOmInstancePeriodRequest) {
                    body = createDbOmInstancePeriodRequest.body
                } else {
                    body = createDbOmInstancePeriodRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 包年包月计费模式创建审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstancesPeriodOrder(createInstancesPeriodOrderRequest?: CreateInstancesPeriodOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dbss/audit/charge/period/order",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstancesPeriodOrderRequest !== null && createInstancesPeriodOrderRequest !== undefined) {
                if (createInstancesPeriodOrderRequest instanceof CreateInstancesPeriodOrderRequest) {
                    body = createInstancesPeriodOrderRequest.body
                } else {
                    body = createInstancesPeriodOrderRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 包年包月计费模式创建审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstancesPeriodOrderNew(createInstancesPeriodOrderNewRequest?: CreateInstancesPeriodOrderNewRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/charge/period/order",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstancesPeriodOrderNewRequest !== null && createInstancesPeriodOrderNewRequest !== undefined) {
                if (createInstancesPeriodOrderNewRequest instanceof CreateInstancesPeriodOrderNewRequest) {
                    body = createInstancesPeriodOrderNewRequest.body
                } else {
                    body = createInstancesPeriodOrderNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即生成报表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createReport(createReportRequest?: CreateReportRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/reports/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createReportRequest !== null && createReportRequest !== undefined) {
                if (createReportRequest instanceof CreateReportRequest) {
                    instanceId = createReportRequest.instanceId;
                    body = createReportRequest.body
                } else {
                    instanceId = createReportRequest['instance_id'];
                    body = createReportRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createReport.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 增加隐私数据脱敏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSensitiveMaskRule(createSensitiveMaskRuleRequest?: CreateSensitiveMaskRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/sensitive/mask/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createSensitiveMaskRuleRequest !== null && createSensitiveMaskRuleRequest !== undefined) {
                if (createSensitiveMaskRuleRequest instanceof CreateSensitiveMaskRuleRequest) {
                    instanceId = createSensitiveMaskRuleRequest.instanceId;
                    body = createSensitiveMaskRuleRequest.body
                } else {
                    instanceId = createSensitiveMaskRuleRequest['instance_id'];
                    body = createSensitiveMaskRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSensitiveMaskRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库Agent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditAgent(deleteAuditAgentRequest?: DeleteAuditAgentRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/{instance_id}/audit/agents/{agent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let agentId;
            
            let dbId;

            if (deleteAuditAgentRequest !== null && deleteAuditAgentRequest !== undefined) {
                if (deleteAuditAgentRequest instanceof DeleteAuditAgentRequest) {
                    instanceId = deleteAuditAgentRequest.instanceId;
                    agentId = deleteAuditAgentRequest.agentId;
                    dbId = deleteAuditAgentRequest.dbId;
                } else {
                    instanceId = deleteAuditAgentRequest['instance_id'];
                    agentId = deleteAuditAgentRequest['agent_id'];
                    dbId = deleteAuditAgentRequest['db_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditAgent.');
            }
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling deleteAuditAgent.');
            }
            if (dbId === null || dbId === undefined) {
                throw new RequiredError('dbId','Required parameter dbId was null or undefined when calling deleteAuditAgent.');
            }
            if (dbId !== null && dbId !== undefined) {
                localVarQueryParameter['db_id'] = dbId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除告警监控记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditAlarmLog(deleteAuditAlarmLogRequest?: DeleteAuditAlarmLogRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audit/{instance_id}/alarm-log/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (deleteAuditAlarmLogRequest !== null && deleteAuditAlarmLogRequest !== undefined) {
                if (deleteAuditAlarmLogRequest instanceof DeleteAuditAlarmLogRequest) {
                    instanceId = deleteAuditAlarmLogRequest.instanceId;
                    id = deleteAuditAlarmLogRequest.id;
                } else {
                    instanceId = deleteAuditAlarmLogRequest['instance_id'];
                    id = deleteAuditAlarmLogRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditAlarmLog.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuditAlarmLog.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定备份任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditBackupTask(deleteAuditBackupTaskRequest?: DeleteAuditBackupTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audit/{instance_id}/backups/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (deleteAuditBackupTaskRequest !== null && deleteAuditBackupTaskRequest !== undefined) {
                if (deleteAuditBackupTaskRequest instanceof DeleteAuditBackupTaskRequest) {
                    instanceId = deleteAuditBackupTaskRequest.instanceId;
                    id = deleteAuditBackupTaskRequest.id;
                } else {
                    instanceId = deleteAuditBackupTaskRequest['instance_id'];
                    id = deleteAuditBackupTaskRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditBackupTask.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuditBackupTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditDatabase(deleteAuditDatabaseRequest?: DeleteAuditDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/{instance_id}/audit/databases/{db_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let dbId;

            if (deleteAuditDatabaseRequest !== null && deleteAuditDatabaseRequest !== undefined) {
                if (deleteAuditDatabaseRequest instanceof DeleteAuditDatabaseRequest) {
                    instanceId = deleteAuditDatabaseRequest.instanceId;
                    dbId = deleteAuditDatabaseRequest.dbId;
                } else {
                    instanceId = deleteAuditDatabaseRequest['instance_id'];
                    dbId = deleteAuditDatabaseRequest['db_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditDatabase.');
            }
            if (dbId === null || dbId === undefined) {
            throw new RequiredError('dbId','Required parameter dbId was null or undefined when calling deleteAuditDatabase.');
            }

            options.pathParams = { 'instance_id': instanceId,'db_id': dbId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditDatabaseNew(deleteAuditDatabaseNewRequest?: DeleteAuditDatabaseNewRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/audit/{instance_id}/databases/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (deleteAuditDatabaseNewRequest !== null && deleteAuditDatabaseNewRequest !== undefined) {
                if (deleteAuditDatabaseNewRequest instanceof DeleteAuditDatabaseNewRequest) {
                    instanceId = deleteAuditDatabaseNewRequest.instanceId;
                    id = deleteAuditDatabaseNewRequest.id;
                } else {
                    instanceId = deleteAuditDatabaseNewRequest['instance_id'];
                    id = deleteAuditDatabaseNewRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditDatabaseNew.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuditDatabaseNew.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除报表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditReport(deleteAuditReportRequest?: DeleteAuditReportRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audit/{instance_id}/reports/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (deleteAuditReportRequest !== null && deleteAuditReportRequest !== undefined) {
                if (deleteAuditReportRequest instanceof DeleteAuditReportRequest) {
                    instanceId = deleteAuditReportRequest.instanceId;
                    id = deleteAuditReportRequest.id;
                } else {
                    instanceId = deleteAuditReportRequest['instance_id'];
                    id = deleteAuditReportRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditReport.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuditReport.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除风险策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditRuleRisk(deleteAuditRuleRiskRequest?: DeleteAuditRuleRiskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audit/{instance_id}/rule/risk/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (deleteAuditRuleRiskRequest !== null && deleteAuditRuleRiskRequest !== undefined) {
                if (deleteAuditRuleRiskRequest instanceof DeleteAuditRuleRiskRequest) {
                    instanceId = deleteAuditRuleRiskRequest.instanceId;
                    id = deleteAuditRuleRiskRequest.id;
                } else {
                    instanceId = deleteAuditRuleRiskRequest['instance_id'];
                    id = deleteAuditRuleRiskRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditRuleRisk.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuditRuleRisk.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除审计范围策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditScope(deleteAuditScopeRequest?: DeleteAuditScopeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audit/{instance_id}/rule/scopes/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (deleteAuditScopeRequest !== null && deleteAuditScopeRequest !== undefined) {
                if (deleteAuditScopeRequest instanceof DeleteAuditScopeRequest) {
                    instanceId = deleteAuditScopeRequest.instanceId;
                    id = deleteAuditScopeRequest.id;
                } else {
                    instanceId = deleteAuditScopeRequest['instance_id'];
                    id = deleteAuditScopeRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditScope.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuditScope.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库加密实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDbEncryptInstance(deleteDbEncryptInstanceRequest?: DeleteDbEncryptInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/db-encrypt/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteDbEncryptInstanceRequest !== null && deleteDbEncryptInstanceRequest !== undefined) {
                if (deleteDbEncryptInstanceRequest instanceof DeleteDbEncryptInstanceRequest) {
                    instanceId = deleteDbEncryptInstanceRequest.instanceId;
                } else {
                    instanceId = deleteDbEncryptInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDbEncryptInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库运维实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDbOmInstance(deleteDbOmInstanceRequest?: DeleteDbOmInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/db-om/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteDbOmInstanceRequest !== null && deleteDbOmInstanceRequest !== undefined) {
                if (deleteDbOmInstanceRequest instanceof DeleteDbOmInstanceRequest) {
                    instanceId = deleteDbOmInstanceRequest.instanceId;
                } else {
                    instanceId = deleteDbOmInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDbOmInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 只有按需计费模式实例没有任务时 或 包周期模式实例状态为故障时，才能执行此操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstances(deleteInstancesRequest?: DeleteInstancesRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dbss/audit/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteInstancesRequest !== null && deleteInstancesRequest !== undefined) {
                if (deleteInstancesRequest instanceof DeleteInstancesRequest) {
                    body = deleteInstancesRequest.body
                } else {
                    body = deleteInstancesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 只有按需计费模式实例没有任务时 或 包周期模式实例状态为故障时，才能执行此操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstancesNew(deleteInstancesNewRequest?: DeleteInstancesNewRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audit/instance",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteInstancesNewRequest !== null && deleteInstancesNewRequest !== undefined) {
                if (deleteInstancesNewRequest instanceof DeleteInstancesNewRequest) {
                    body = deleteInstancesNewRequest.body
                } else {
                    body = deleteInstancesNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除隐私数据脱敏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSensitiveRules(deleteSensitiveRulesRequest?: DeleteSensitiveRulesRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audit/{instance_id}/sensitive/mask/rule/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (deleteSensitiveRulesRequest !== null && deleteSensitiveRulesRequest !== undefined) {
                if (deleteSensitiveRulesRequest instanceof DeleteSensitiveRulesRequest) {
                    instanceId = deleteSensitiveRulesRequest.instanceId;
                    id = deleteSensitiveRulesRequest.id;
                } else {
                    instanceId = deleteSensitiveRulesRequest['instance_id'];
                    id = deleteSensitiveRulesRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSensitiveRules.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSensitiveRules.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载审计Agent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadAuditAgent(downloadAuditAgentRequest?: DownloadAuditAgentRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{instance_id}/audit/agents/{agent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let agentId;

            if (downloadAuditAgentRequest !== null && downloadAuditAgentRequest !== undefined) {
                if (downloadAuditAgentRequest instanceof DownloadAuditAgentRequest) {
                    instanceId = downloadAuditAgentRequest.instanceId;
                    agentId = downloadAuditAgentRequest.agentId;
                } else {
                    instanceId = downloadAuditAgentRequest['instance_id'];
                    agentId = downloadAuditAgentRequest['agent_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling downloadAuditAgent.');
            }
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling downloadAuditAgent.');
            }

            options.pathParams = { 'instance_id': instanceId,'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载报表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadAuditReport(downloadAuditReportRequest?: DownloadAuditReportRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/reports/{id}/download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let id;
            
            let local;

            if (downloadAuditReportRequest !== null && downloadAuditReportRequest !== undefined) {
                if (downloadAuditReportRequest instanceof DownloadAuditReportRequest) {
                    instanceId = downloadAuditReportRequest.instanceId;
                    id = downloadAuditReportRequest.id;
                    local = downloadAuditReportRequest.local;
                } else {
                    instanceId = downloadAuditReportRequest['instance_id'];
                    id = downloadAuditReportRequest['id'];
                    local = downloadAuditReportRequest['local'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling downloadAuditReport.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling downloadAuditReport.');
            }
            if (local !== null && local !== undefined) {
                localVarQueryParameter['local'] = local;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例告警配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmTopicConfigInfo(listAlarmTopicConfigInfoRequest?: ListAlarmTopicConfigInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/audit/alarm/topic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listAlarmTopicConfigInfoRequest !== null && listAlarmTopicConfigInfoRequest !== undefined) {
                if (listAlarmTopicConfigInfoRequest instanceof ListAlarmTopicConfigInfoRequest) {
                    instanceId = listAlarmTopicConfigInfoRequest.instanceId;
                } else {
                    instanceId = listAlarmTopicConfigInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAlarmTopicConfigInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例告警配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmTopicConfigInfoNew(listAlarmTopicConfigInfoNewRequest?: ListAlarmTopicConfigInfoNewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/{instance_id}/alarm/topic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listAlarmTopicConfigInfoNewRequest !== null && listAlarmTopicConfigInfoNewRequest !== undefined) {
                if (listAlarmTopicConfigInfoNewRequest instanceof ListAlarmTopicConfigInfoNewRequest) {
                    instanceId = listAlarmTopicConfigInfoNewRequest.instanceId;
                } else {
                    instanceId = listAlarmTopicConfigInfoNewRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAlarmTopicConfigInfoNew.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库Agent列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditAgent(listAuditAgentRequest?: ListAuditAgentRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{instance_id}/audit/agents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbId;
            
            let offset;
            
            let limit;

            if (listAuditAgentRequest !== null && listAuditAgentRequest !== undefined) {
                if (listAuditAgentRequest instanceof ListAuditAgentRequest) {
                    instanceId = listAuditAgentRequest.instanceId;
                    dbId = listAuditAgentRequest.dbId;
                    offset = listAuditAgentRequest.offset;
                    limit = listAuditAgentRequest.limit;
                } else {
                    instanceId = listAuditAgentRequest['instance_id'];
                    dbId = listAuditAgentRequest['db_id'];
                    offset = listAuditAgentRequest['offset'];
                    limit = listAuditAgentRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditAgent.');
            }
            if (dbId === null || dbId === undefined) {
                throw new RequiredError('dbId','Required parameter dbId was null or undefined when calling listAuditAgent.');
            }
            if (dbId !== null && dbId !== undefined) {
                localVarQueryParameter['db_id'] = dbId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计告警信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditAlarmLog(listAuditAlarmLogRequest?: ListAuditAlarmLogRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/audit/alarm-log",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditAlarmLogRequest !== null && listAuditAlarmLogRequest !== undefined) {
                if (listAuditAlarmLogRequest instanceof ListAuditAlarmLogRequest) {
                    instanceId = listAuditAlarmLogRequest.instanceId;
                    body = listAuditAlarmLogRequest.body
                } else {
                    instanceId = listAuditAlarmLogRequest['instance_id'];
                    body = listAuditAlarmLogRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditAlarmLog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计告警信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditAlarmLogNew(listAuditAlarmLogNewRequest?: ListAuditAlarmLogNewRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/alarm-log",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditAlarmLogNewRequest !== null && listAuditAlarmLogNewRequest !== undefined) {
                if (listAuditAlarmLogNewRequest instanceof ListAuditAlarmLogNewRequest) {
                    instanceId = listAuditAlarmLogNewRequest.instanceId;
                    body = listAuditAlarmLogNewRequest.body
                } else {
                    instanceId = listAuditAlarmLogNewRequest['instance_id'];
                    body = listAuditAlarmLogNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditAlarmLogNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所有备份信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditBackupInfo(listAuditBackupInfoRequest?: ListAuditBackupInfoRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditBackupInfoRequest !== null && listAuditBackupInfoRequest !== undefined) {
                if (listAuditBackupInfoRequest instanceof ListAuditBackupInfoRequest) {
                    instanceId = listAuditBackupInfoRequest.instanceId;
                    body = listAuditBackupInfoRequest.body
                } else {
                    instanceId = listAuditBackupInfoRequest['instance_id'];
                    body = listAuditBackupInfoRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditBackupInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取风险导出配置列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditBackupRiskTemplates(listAuditBackupRiskTemplatesRequest?: ListAuditBackupRiskTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/backup/risk/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listAuditBackupRiskTemplatesRequest !== null && listAuditBackupRiskTemplatesRequest !== undefined) {
                if (listAuditBackupRiskTemplatesRequest instanceof ListAuditBackupRiskTemplatesRequest) {
                    instanceId = listAuditBackupRiskTemplatesRequest.instanceId;
                } else {
                    instanceId = listAuditBackupRiskTemplatesRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditBackupRiskTemplates.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditDatabases(listAuditDatabasesRequest?: ListAuditDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let status;
            
            let offset;
            
            let limit;

            if (listAuditDatabasesRequest !== null && listAuditDatabasesRequest !== undefined) {
                if (listAuditDatabasesRequest instanceof ListAuditDatabasesRequest) {
                    instanceId = listAuditDatabasesRequest.instanceId;
                    status = listAuditDatabasesRequest.status;
                    offset = listAuditDatabasesRequest.offset;
                    limit = listAuditDatabasesRequest.limit;
                } else {
                    instanceId = listAuditDatabasesRequest['instance_id'];
                    status = listAuditDatabasesRequest['status'];
                    offset = listAuditDatabasesRequest['offset'];
                    limit = listAuditDatabasesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditDatabases.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditDatabasesNew(listAuditDatabasesNewRequest?: ListAuditDatabasesNewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/{instance_id}/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let status;
            
            let offset;
            
            let limit;

            if (listAuditDatabasesNewRequest !== null && listAuditDatabasesNewRequest !== undefined) {
                if (listAuditDatabasesNewRequest instanceof ListAuditDatabasesNewRequest) {
                    instanceId = listAuditDatabasesNewRequest.instanceId;
                    status = listAuditDatabasesNewRequest.status;
                    offset = listAuditDatabasesNewRequest.offset;
                    limit = listAuditDatabasesNewRequest.limit;
                } else {
                    instanceId = listAuditDatabasesNewRequest['instance_id'];
                    status = listAuditDatabasesNewRequest['status'];
                    offset = listAuditDatabasesNewRequest['offset'];
                    limit = listAuditDatabasesNewRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditDatabasesNew.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例创建任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditInstanceJobs(listAuditInstanceJobsRequest?: ListAuditInstanceJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dbss/audit/jobs/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (listAuditInstanceJobsRequest !== null && listAuditInstanceJobsRequest !== undefined) {
                if (listAuditInstanceJobsRequest instanceof ListAuditInstanceJobsRequest) {
                    resourceId = listAuditInstanceJobsRequest.resourceId;
                } else {
                    resourceId = listAuditInstanceJobsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listAuditInstanceJobs.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例创建任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditInstanceJobsNew(listAuditInstanceJobsNewRequest?: ListAuditInstanceJobsNewRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{resource_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (listAuditInstanceJobsNewRequest !== null && listAuditInstanceJobsNewRequest !== undefined) {
                if (listAuditInstanceJobsNewRequest instanceof ListAuditInstanceJobsNewRequest) {
                    resourceId = listAuditInstanceJobsNewRequest.resourceId;
                } else {
                    resourceId = listAuditInstanceJobsNewRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listAuditInstanceJobsNew.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditInstances(listAuditInstancesRequest?: ListAuditInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dbss/audit/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAuditInstancesRequest !== null && listAuditInstancesRequest !== undefined) {
                if (listAuditInstancesRequest instanceof ListAuditInstancesRequest) {
                    offset = listAuditInstancesRequest.offset;
                    limit = listAuditInstancesRequest.limit;
                } else {
                    offset = listAuditInstancesRequest['offset'];
                    limit = listAuditInstancesRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditInstancesNew(listAuditInstancesNewRequest?: ListAuditInstancesNewRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAuditInstancesNewRequest !== null && listAuditInstancesNewRequest !== undefined) {
                if (listAuditInstancesNewRequest instanceof ListAuditInstancesNewRequest) {
                    offset = listAuditInstancesNewRequest.offset;
                    limit = listAuditInstancesNewRequest.limit;
                } else {
                    offset = listAuditInstancesNewRequest['offset'];
                    limit = listAuditInstancesNewRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 备份或风险导出时，选择obs桶
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditObsBuckets() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/backup/obs-buckets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户操作日志信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditOperateLogs(listAuditOperateLogsRequest?: ListAuditOperateLogsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/operate-log",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditOperateLogsRequest !== null && listAuditOperateLogsRequest !== undefined) {
                if (listAuditOperateLogsRequest instanceof ListAuditOperateLogsRequest) {
                    instanceId = listAuditOperateLogsRequest.instanceId;
                    body = listAuditOperateLogsRequest.body
                } else {
                    instanceId = listAuditOperateLogsRequest['instance_id'];
                    body = listAuditOperateLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditOperateLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户操作日志信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditOperateLogsNew(listAuditOperateLogsNewRequest?: ListAuditOperateLogsNewRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/operation-log",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditOperateLogsNewRequest !== null && listAuditOperateLogsNewRequest !== undefined) {
                if (listAuditOperateLogsNewRequest instanceof ListAuditOperateLogsNewRequest) {
                    instanceId = listAuditOperateLogsNewRequest.instanceId;
                    body = listAuditOperateLogsNewRequest.body
                } else {
                    instanceId = listAuditOperateLogsNewRequest['instance_id'];
                    body = listAuditOperateLogsNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditOperateLogsNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取报表模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditReportTemplates(listAuditReportTemplatesRequest?: ListAuditReportTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/{instance_id}/reports/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listAuditReportTemplatesRequest !== null && listAuditReportTemplatesRequest !== undefined) {
                if (listAuditReportTemplatesRequest instanceof ListAuditReportTemplatesRequest) {
                    instanceId = listAuditReportTemplatesRequest.instanceId;
                } else {
                    instanceId = listAuditReportTemplatesRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditReportTemplates.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询报表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditReports(listAuditReportsRequest?: ListAuditReportsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/reports/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditReportsRequest !== null && listAuditReportsRequest !== undefined) {
                if (listAuditReportsRequest instanceof ListAuditReportsRequest) {
                    instanceId = listAuditReportsRequest.instanceId;
                    body = listAuditReportsRequest.body
                } else {
                    instanceId = listAuditReportsRequest['instance_id'];
                    body = listAuditReportsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditReports.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询风险规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditRuleRisks(listAuditRuleRisksRequest?: ListAuditRuleRisksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/rule/risk",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let name;
            
            let riskLevels;

            if (listAuditRuleRisksRequest !== null && listAuditRuleRisksRequest !== undefined) {
                if (listAuditRuleRisksRequest instanceof ListAuditRuleRisksRequest) {
                    instanceId = listAuditRuleRisksRequest.instanceId;
                    name = listAuditRuleRisksRequest.name;
                    riskLevels = listAuditRuleRisksRequest.riskLevels;
                } else {
                    instanceId = listAuditRuleRisksRequest['instance_id'];
                    name = listAuditRuleRisksRequest['name'];
                    riskLevels = listAuditRuleRisksRequest['risk_levels'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditRuleRisks.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (riskLevels !== null && riskLevels !== undefined) {
                localVarQueryParameter['risk_levels'] = riskLevels;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询风险规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditRuleRisksNew(listAuditRuleRisksNewRequest?: ListAuditRuleRisksNewRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/rule/risk",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let name;
            
            let riskLevels;
            
            let supportDbClassifyRule;
            
            let offset;
            
            let limit;

            if (listAuditRuleRisksNewRequest !== null && listAuditRuleRisksNewRequest !== undefined) {
                if (listAuditRuleRisksNewRequest instanceof ListAuditRuleRisksNewRequest) {
                    instanceId = listAuditRuleRisksNewRequest.instanceId;
                    name = listAuditRuleRisksNewRequest.name;
                    riskLevels = listAuditRuleRisksNewRequest.riskLevels;
                    supportDbClassifyRule = listAuditRuleRisksNewRequest.supportDbClassifyRule;
                    offset = listAuditRuleRisksNewRequest.offset;
                    limit = listAuditRuleRisksNewRequest.limit;
                } else {
                    instanceId = listAuditRuleRisksNewRequest['instance_id'];
                    name = listAuditRuleRisksNewRequest['name'];
                    riskLevels = listAuditRuleRisksNewRequest['risk_levels'];
                    supportDbClassifyRule = listAuditRuleRisksNewRequest['support_db_classify_rule'];
                    offset = listAuditRuleRisksNewRequest['offset'];
                    limit = listAuditRuleRisksNewRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditRuleRisksNew.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (riskLevels !== null && riskLevels !== undefined) {
                localVarQueryParameter['risk_levels'] = riskLevels;
            }
            if (supportDbClassifyRule !== null && supportDbClassifyRule !== undefined) {
                localVarQueryParameter['support_db_classify_rule'] = supportDbClassifyRule;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计范围策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditRuleScopes(listAuditRuleScopesRequest?: ListAuditRuleScopesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/rule/scopes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listAuditRuleScopesRequest !== null && listAuditRuleScopesRequest !== undefined) {
                if (listAuditRuleScopesRequest instanceof ListAuditRuleScopesRequest) {
                    instanceId = listAuditRuleScopesRequest.instanceId;
                    offset = listAuditRuleScopesRequest.offset;
                    limit = listAuditRuleScopesRequest.limit;
                } else {
                    instanceId = listAuditRuleScopesRequest['instance_id'];
                    offset = listAuditRuleScopesRequest['offset'];
                    limit = listAuditRuleScopesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditRuleScopes.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计范围策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditRuleScopesNew(listAuditRuleScopesNewRequest?: ListAuditRuleScopesNewRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/rule/scopes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listAuditRuleScopesNewRequest !== null && listAuditRuleScopesNewRequest !== undefined) {
                if (listAuditRuleScopesNewRequest instanceof ListAuditRuleScopesNewRequest) {
                    instanceId = listAuditRuleScopesNewRequest.instanceId;
                    offset = listAuditRuleScopesNewRequest.offset;
                    limit = listAuditRuleScopesNewRequest.limit;
                } else {
                    instanceId = listAuditRuleScopesNewRequest['instance_id'];
                    offset = listAuditRuleScopesNewRequest['offset'];
                    limit = listAuditRuleScopesNewRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditRuleScopesNew.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询隐私数据脱敏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditSensitiveMasks(listAuditSensitiveMasksRequest?: ListAuditSensitiveMasksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/sensitive/masks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listAuditSensitiveMasksRequest !== null && listAuditSensitiveMasksRequest !== undefined) {
                if (listAuditSensitiveMasksRequest instanceof ListAuditSensitiveMasksRequest) {
                    instanceId = listAuditSensitiveMasksRequest.instanceId;
                    offset = listAuditSensitiveMasksRequest.offset;
                    limit = listAuditSensitiveMasksRequest.limit;
                } else {
                    instanceId = listAuditSensitiveMasksRequest['instance_id'];
                    offset = listAuditSensitiveMasksRequest['offset'];
                    limit = listAuditSensitiveMasksRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditSensitiveMasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询隐私数据脱敏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditSensitiveMasksNew(listAuditSensitiveMasksNewRequest?: ListAuditSensitiveMasksNewRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/sensitive/mask/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listAuditSensitiveMasksNewRequest !== null && listAuditSensitiveMasksNewRequest !== undefined) {
                if (listAuditSensitiveMasksNewRequest instanceof ListAuditSensitiveMasksNewRequest) {
                    instanceId = listAuditSensitiveMasksNewRequest.instanceId;
                    offset = listAuditSensitiveMasksNewRequest.offset;
                    limit = listAuditSensitiveMasksNewRequest.limit;
                } else {
                    instanceId = listAuditSensitiveMasksNewRequest['instance_id'];
                    offset = listAuditSensitiveMasksNewRequest['offset'];
                    limit = listAuditSensitiveMasksNewRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditSensitiveMasksNew.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计SQL语句
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditSqls(listAuditSqlsRequest?: ListAuditSqlsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/audit/sqls",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditSqlsRequest !== null && listAuditSqlsRequest !== undefined) {
                if (listAuditSqlsRequest instanceof ListAuditSqlsRequest) {
                    instanceId = listAuditSqlsRequest.instanceId;
                    body = listAuditSqlsRequest.body
                } else {
                    instanceId = listAuditSqlsRequest['instance_id'];
                    body = listAuditSqlsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditSqls.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计SQL语句
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditSqlsNew(listAuditSqlsNewRequest?: ListAuditSqlsNewRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/sqls",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditSqlsNewRequest !== null && listAuditSqlsNewRequest !== undefined) {
                if (listAuditSqlsNewRequest instanceof ListAuditSqlsNewRequest) {
                    instanceId = listAuditSqlsNewRequest.instanceId;
                    body = listAuditSqlsNewRequest.body
                } else {
                    instanceId = listAuditSqlsNewRequest['instance_id'];
                    body = listAuditSqlsNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditSqlsNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计汇总信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditSummaryInfos(listAuditSummaryInfosRequest?: ListAuditSummaryInfosRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/summary/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAuditSummaryInfosRequest !== null && listAuditSummaryInfosRequest !== undefined) {
                if (listAuditSummaryInfosRequest instanceof ListAuditSummaryInfosRequest) {
                    offset = listAuditSummaryInfosRequest.offset;
                    limit = listAuditSummaryInfosRequest.limit;
                } else {
                    offset = listAuditSummaryInfosRequest['offset'];
                    limit = listAuditSummaryInfosRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询趋势历史数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditTrendHistory(listAuditTrendHistoryRequest?: ListAuditTrendHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/{instance_id}/statistics/trend/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listAuditTrendHistoryRequest !== null && listAuditTrendHistoryRequest !== undefined) {
                if (listAuditTrendHistoryRequest instanceof ListAuditTrendHistoryRequest) {
                    instanceId = listAuditTrendHistoryRequest.instanceId;
                } else {
                    instanceId = listAuditTrendHistoryRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditTrendHistory.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可用区信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZoneInfos() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dbss/audit/availability-zone",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可用区信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZoneInfosNew() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/availability-zone",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举数据库加密实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbEncryptInstances() {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/db-encrypt/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询ECS服务器规格信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEcsSpecification() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dbss/audit/specification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询ECS服务器规格信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEcsSpecificationNew(listEcsSpecificationNewRequest?: ListEcsSpecificationNewRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/specification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageBusinessType;

            if (listEcsSpecificationNewRequest !== null && listEcsSpecificationNewRequest !== undefined) {
                if (listEcsSpecificationNewRequest instanceof ListEcsSpecificationNewRequest) {
                    imageBusinessType = listEcsSpecificationNewRequest.imageBusinessType;
                } else {
                    imageBusinessType = listEcsSpecificationNewRequest['image_business_type'];
                }
            }

        
            if (imageBusinessType !== null && imageBusinessType !== undefined) {
                localVarQueryParameter['image_business_type'] = imageBusinessType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取数据库运维集群实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances() {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/db-om/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询RDS数据库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRdsDatabases(listRdsDatabasesRequest?: ListRdsDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/databases/rds",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dbType;
            
            let offset;
            
            let limit;

            if (listRdsDatabasesRequest !== null && listRdsDatabasesRequest !== undefined) {
                if (listRdsDatabasesRequest instanceof ListRdsDatabasesRequest) {
                    dbType = listRdsDatabasesRequest.dbType;
                    offset = listRdsDatabasesRequest.offset;
                    limit = listRdsDatabasesRequest.limit;
                } else {
                    dbType = listRdsDatabasesRequest['db_type'];
                    offset = listRdsDatabasesRequest['offset'];
                    limit = listRdsDatabasesRequest['limit'];
                }
            }

        
            if (dbType === null || dbType === undefined) {
                throw new RequiredError('dbType','Required parameter dbType was null or undefined when calling listRdsDatabases.');
            }
            if (dbType !== null && dbType !== undefined) {
                localVarQueryParameter['db_type'] = dbType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL注入规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlInjectionRules(listSqlInjectionRulesRequest?: ListSqlInjectionRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/rule/sql-injections",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listSqlInjectionRulesRequest !== null && listSqlInjectionRulesRequest !== undefined) {
                if (listSqlInjectionRulesRequest instanceof ListSqlInjectionRulesRequest) {
                    instanceId = listSqlInjectionRulesRequest.instanceId;
                    body = listSqlInjectionRulesRequest.body
                } else {
                    instanceId = listSqlInjectionRulesRequest['instance_id'];
                    body = listSqlInjectionRulesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSqlInjectionRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebootAuditInstance(rebootAuditInstanceRequest?: RebootAuditInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dbss/audit/instance/reboot",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (rebootAuditInstanceRequest !== null && rebootAuditInstanceRequest !== undefined) {
                if (rebootAuditInstanceRequest instanceof RebootAuditInstanceRequest) {
                    body = rebootAuditInstanceRequest.body
                } else {
                    body = rebootAuditInstanceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebootAuditInstanceNew(rebootAuditInstanceNewRequest?: RebootAuditInstanceNewRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/instance/reboot",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (rebootAuditInstanceNewRequest !== null && rebootAuditInstanceNewRequest !== undefined) {
                if (rebootAuditInstanceNewRequest instanceof RebootAuditInstanceNewRequest) {
                    body = rebootAuditInstanceNewRequest.body
                } else {
                    body = rebootAuditInstanceNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启数据库加密实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebootDbEncryptInstance(rebootDbEncryptInstanceRequest?: RebootDbEncryptInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-encrypt/{instance_id}/reboot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (rebootDbEncryptInstanceRequest !== null && rebootDbEncryptInstanceRequest !== undefined) {
                if (rebootDbEncryptInstanceRequest instanceof RebootDbEncryptInstanceRequest) {
                    instanceId = rebootDbEncryptInstanceRequest.instanceId;
                } else {
                    instanceId = rebootDbEncryptInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling rebootDbEncryptInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启数据库运维实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebootDbOmInstance(rebootDbOmInstanceRequest?: RebootDbOmInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-om/{instance_id}/reboot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (rebootDbOmInstanceRequest !== null && rebootDbOmInstanceRequest !== undefined) {
                if (rebootDbOmInstanceRequest instanceof RebootDbOmInstanceRequest) {
                    instanceId = rebootDbOmInstanceRequest.instanceId;
                } else {
                    instanceId = rebootDbOmInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling rebootDbOmInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置数据库加密实例的密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetDbEncryptPassword(resetDbEncryptPasswordRequest?: ResetDbEncryptPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-encrypt/{instance_id}/password/reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetDbEncryptPasswordRequest !== null && resetDbEncryptPasswordRequest !== undefined) {
                if (resetDbEncryptPasswordRequest instanceof ResetDbEncryptPasswordRequest) {
                    instanceId = resetDbEncryptPasswordRequest.instanceId;
                    body = resetDbEncryptPasswordRequest.body
                } else {
                    instanceId = resetDbEncryptPasswordRequest['instance_id'];
                    body = resetDbEncryptPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetDbEncryptPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置数据库运维实例的密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetDbOmPassword(resetDbOmPasswordRequest?: ResetDbOmPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-om/{instance_id}/password/reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetDbOmPasswordRequest !== null && resetDbOmPasswordRequest !== undefined) {
                if (resetDbOmPasswordRequest instanceof ResetDbOmPasswordRequest) {
                    instanceId = resetDbOmPasswordRequest.instanceId;
                    body = resetDbOmPasswordRequest.body
                } else {
                    instanceId = resetDbOmPasswordRequest['instance_id'];
                    body = resetDbOmPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetDbOmPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复备份信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreAuditBackup(restoreAuditBackupRequest?: RestoreAuditBackupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/backup/{id}/restore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (restoreAuditBackupRequest !== null && restoreAuditBackupRequest !== undefined) {
                if (restoreAuditBackupRequest instanceof RestoreAuditBackupRequest) {
                    instanceId = restoreAuditBackupRequest.instanceId;
                    id = restoreAuditBackupRequest.id;
                } else {
                    instanceId = restoreAuditBackupRequest['instance_id'];
                    id = restoreAuditBackupRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restoreAuditBackup.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling restoreAuditBackup.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重试备份任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryAuditBackupTask(retryAuditBackupTaskRequest?: RetryAuditBackupTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/backup/{id}/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (retryAuditBackupTaskRequest !== null && retryAuditBackupTaskRequest !== undefined) {
                if (retryAuditBackupTaskRequest instanceof RetryAuditBackupTaskRequest) {
                    instanceId = retryAuditBackupTaskRequest.instanceId;
                    id = retryAuditBackupTaskRequest.id;
                } else {
                    instanceId = retryAuditBackupTaskRequest['instance_id'];
                    id = retryAuditBackupTaskRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling retryAuditBackupTask.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling retryAuditBackupTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置实例告警配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAlarmTopicConfigInfo(setAlarmTopicConfigInfoRequest?: SetAlarmTopicConfigInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/audit/alarm/topic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setAlarmTopicConfigInfoRequest !== null && setAlarmTopicConfigInfoRequest !== undefined) {
                if (setAlarmTopicConfigInfoRequest instanceof SetAlarmTopicConfigInfoRequest) {
                    instanceId = setAlarmTopicConfigInfoRequest.instanceId;
                    body = setAlarmTopicConfigInfoRequest.body
                } else {
                    instanceId = setAlarmTopicConfigInfoRequest['instance_id'];
                    body = setAlarmTopicConfigInfoRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAlarmTopicConfigInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置实例告警配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAlarmTopicConfigInfoNew(setAlarmTopicConfigInfoNewRequest?: SetAlarmTopicConfigInfoNewRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/alarm/topic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setAlarmTopicConfigInfoNewRequest !== null && setAlarmTopicConfigInfoNewRequest !== undefined) {
                if (setAlarmTopicConfigInfoNewRequest instanceof SetAlarmTopicConfigInfoNewRequest) {
                    instanceId = setAlarmTopicConfigInfoNewRequest.instanceId;
                    body = setAlarmTopicConfigInfoNewRequest.body
                } else {
                    instanceId = setAlarmTopicConfigInfoNewRequest['instance_id'];
                    body = setAlarmTopicConfigInfoNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAlarmTopicConfigInfoNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 标记监控告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditAlarmLogStatus(setAuditAlarmLogStatusRequest?: SetAuditAlarmLogStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/audit/{instance_id}/alarm-log/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (setAuditAlarmLogStatusRequest !== null && setAuditAlarmLogStatusRequest !== undefined) {
                if (setAuditAlarmLogStatusRequest instanceof SetAuditAlarmLogStatusRequest) {
                    instanceId = setAuditAlarmLogStatusRequest.instanceId;
                    id = setAuditAlarmLogStatusRequest.id;
                } else {
                    instanceId = setAuditAlarmLogStatusRequest['instance_id'];
                    id = setAuditAlarmLogStatusRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditAlarmLogStatus.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling setAuditAlarmLogStatus.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置备份配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditAutoBackupTemplate(setAuditAutoBackupTemplateRequest?: SetAuditAutoBackupTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/backup/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (setAuditAutoBackupTemplateRequest !== null && setAuditAutoBackupTemplateRequest !== undefined) {
                if (setAuditAutoBackupTemplateRequest instanceof SetAuditAutoBackupTemplateRequest) {
                    instanceId = setAuditAutoBackupTemplateRequest.instanceId;
                } else {
                    instanceId = setAuditAutoBackupTemplateRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditAutoBackupTemplate.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 风险导出开关(按DomainId)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditBackupRiskSwitch(setAuditBackupRiskSwitchRequest?: SetAuditBackupRiskSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/audit/{instance_id}/backup/risk/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let instanceId;

            if (setAuditBackupRiskSwitchRequest !== null && setAuditBackupRiskSwitchRequest !== undefined) {
                if (setAuditBackupRiskSwitchRequest instanceof SetAuditBackupRiskSwitchRequest) {
                    domainId = setAuditBackupRiskSwitchRequest.domainId;
                    instanceId = setAuditBackupRiskSwitchRequest.instanceId;
                    body = setAuditBackupRiskSwitchRequest.body
                } else {
                    domainId = setAuditBackupRiskSwitchRequest['domain_id'];
                    instanceId = setAuditBackupRiskSwitchRequest['instance_id'];
                    body = setAuditBackupRiskSwitchRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling setAuditBackupRiskSwitch.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditBackupRiskSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启/关闭备份
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditBackupSwitch(setAuditBackupSwitchRequest?: SetAuditBackupSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/audit/{instance_id}/backup/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let instanceId;

            if (setAuditBackupSwitchRequest !== null && setAuditBackupSwitchRequest !== undefined) {
                if (setAuditBackupSwitchRequest instanceof SetAuditBackupSwitchRequest) {
                    domainId = setAuditBackupSwitchRequest.domainId;
                    instanceId = setAuditBackupSwitchRequest.instanceId;
                    body = setAuditBackupSwitchRequest.body
                } else {
                    domainId = setAuditBackupSwitchRequest['domain_id'];
                    instanceId = setAuditBackupSwitchRequest['instance_id'];
                    body = setAuditBackupSwitchRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling setAuditBackupSwitch.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditBackupSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置审计实例时区信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditInstanceTimeZone(setAuditInstanceTimeZoneRequest?: SetAuditInstanceTimeZoneRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/timezone",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setAuditInstanceTimeZoneRequest !== null && setAuditInstanceTimeZoneRequest !== undefined) {
                if (setAuditInstanceTimeZoneRequest instanceof SetAuditInstanceTimeZoneRequest) {
                    instanceId = setAuditInstanceTimeZoneRequest.instanceId;
                    body = setAuditInstanceTimeZoneRequest.body
                } else {
                    instanceId = setAuditInstanceTimeZoneRequest['instance_id'];
                    body = setAuditInstanceTimeZoneRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditInstanceTimeZone.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用禁用策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditScopeRuleSwitch(setAuditScopeRuleSwitchRequest?: SetAuditScopeRuleSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/rule/scopes/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setAuditScopeRuleSwitchRequest !== null && setAuditScopeRuleSwitchRequest !== undefined) {
                if (setAuditScopeRuleSwitchRequest instanceof SetAuditScopeRuleSwitchRequest) {
                    instanceId = setAuditScopeRuleSwitchRequest.instanceId;
                    body = setAuditScopeRuleSwitchRequest.body
                } else {
                    instanceId = setAuditScopeRuleSwitchRequest['instance_id'];
                    body = setAuditScopeRuleSwitchRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditScopeRuleSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑风险操作策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRiskOperationPolicy(setRiskOperationPolicyRequest?: SetRiskOperationPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/audit/{instance_id}/rule/risk/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let id;

            if (setRiskOperationPolicyRequest !== null && setRiskOperationPolicyRequest !== undefined) {
                if (setRiskOperationPolicyRequest instanceof SetRiskOperationPolicyRequest) {
                    instanceId = setRiskOperationPolicyRequest.instanceId;
                    id = setRiskOperationPolicyRequest.id;
                    body = setRiskOperationPolicyRequest.body
                } else {
                    instanceId = setRiskOperationPolicyRequest['instance_id'];
                    id = setRiskOperationPolicyRequest['id'];
                    body = setRiskOperationPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setRiskOperationPolicy.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling setRiskOperationPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 审计实例风险规则排序
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRiskRuleRank(setRiskRuleRankRequest?: SetRiskRuleRankRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/rule/risk/rank",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setRiskRuleRankRequest !== null && setRiskRuleRankRequest !== undefined) {
                if (setRiskRuleRankRequest instanceof SetRiskRuleRankRequest) {
                    instanceId = setRiskRuleRankRequest.instanceId;
                    body = setRiskRuleRankRequest.body
                } else {
                    instanceId = setRiskRuleRankRequest['instance_id'];
                    body = setRiskRuleRankRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setRiskRuleRank.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用禁用隐私数据脱敏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSensitiveMaskRuleSwitch(setSensitiveMaskRuleSwitchRequest?: SetSensitiveMaskRuleSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/sensitive/mask/rule/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setSensitiveMaskRuleSwitchRequest !== null && setSensitiveMaskRuleSwitchRequest !== undefined) {
                if (setSensitiveMaskRuleSwitchRequest instanceof SetSensitiveMaskRuleSwitchRequest) {
                    instanceId = setSensitiveMaskRuleSwitchRequest.instanceId;
                    body = setSensitiveMaskRuleSwitchRequest.body
                } else {
                    instanceId = setSensitiveMaskRuleSwitchRequest['instance_id'];
                    body = setSensitiveMaskRuleSwitchRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setSensitiveMaskRuleSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启关闭结果集存储
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSensitiveResultSwitch(setSensitiveResultSwitchRequest?: SetSensitiveResultSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/sensitive/result/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setSensitiveResultSwitchRequest !== null && setSensitiveResultSwitchRequest !== undefined) {
                if (setSensitiveResultSwitchRequest instanceof SetSensitiveResultSwitchRequest) {
                    instanceId = setSensitiveResultSwitchRequest.instanceId;
                    body = setSensitiveResultSwitchRequest.body
                } else {
                    instanceId = setSensitiveResultSwitchRequest['instance_id'];
                    body = setSensitiveResultSwitchRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setSensitiveResultSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启关闭隐私数据脱敏
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSensitiveSwitch(setSensitiveSwitchRequest?: SetSensitiveSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/sensitive/mask/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setSensitiveSwitchRequest !== null && setSensitiveSwitchRequest !== undefined) {
                if (setSensitiveSwitchRequest instanceof SetSensitiveSwitchRequest) {
                    instanceId = setSensitiveSwitchRequest.instanceId;
                    body = setSensitiveSwitchRequest.body
                } else {
                    instanceId = setSensitiveSwitchRequest['instance_id'];
                    body = setSensitiveSwitchRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setSensitiveSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取单个风险导出配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditBackRiskTemplate(showAuditBackRiskTemplateRequest?: ShowAuditBackRiskTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/backup/risk/template/{db_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let dbId;

            if (showAuditBackRiskTemplateRequest !== null && showAuditBackRiskTemplateRequest !== undefined) {
                if (showAuditBackRiskTemplateRequest instanceof ShowAuditBackRiskTemplateRequest) {
                    instanceId = showAuditBackRiskTemplateRequest.instanceId;
                    dbId = showAuditBackRiskTemplateRequest.dbId;
                } else {
                    instanceId = showAuditBackRiskTemplateRequest['instance_id'];
                    dbId = showAuditBackRiskTemplateRequest['db_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditBackRiskTemplate.');
            }
            if (dbId === null || dbId === undefined) {
            throw new RequiredError('dbId','Required parameter dbId was null or undefined when calling showAuditBackRiskTemplate.');
            }

            options.pathParams = { 'instance_id': instanceId,'db_id': dbId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditBackupStatus(showAuditBackupStatusRequest?: ShowAuditBackupStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/backup/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showAuditBackupStatusRequest !== null && showAuditBackupStatusRequest !== undefined) {
                if (showAuditBackupStatusRequest instanceof ShowAuditBackupStatusRequest) {
                    instanceId = showAuditBackupStatusRequest.instanceId;
                } else {
                    instanceId = showAuditBackupStatusRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditBackupStatus.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账户配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditQuota() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dbss/audit/quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账户配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditQuotaNew() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定风险规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditRuleRisk(showAuditRuleRiskRequest?: ShowAuditRuleRiskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/rule/risk/{risk_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let riskId;

            if (showAuditRuleRiskRequest !== null && showAuditRuleRiskRequest !== undefined) {
                if (showAuditRuleRiskRequest instanceof ShowAuditRuleRiskRequest) {
                    instanceId = showAuditRuleRiskRequest.instanceId;
                    riskId = showAuditRuleRiskRequest.riskId;
                } else {
                    instanceId = showAuditRuleRiskRequest['instance_id'];
                    riskId = showAuditRuleRiskRequest['risk_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditRuleRisk.');
            }
            if (riskId === null || riskId === undefined) {
            throw new RequiredError('riskId','Required parameter riskId was null or undefined when calling showAuditRuleRisk.');
            }

            options.pathParams = { 'instance_id': instanceId,'risk_id': riskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定风险规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditRuleRiskNew(showAuditRuleRiskNewRequest?: ShowAuditRuleRiskNewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/{instance_id}/rule/risk/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (showAuditRuleRiskNewRequest !== null && showAuditRuleRiskNewRequest !== undefined) {
                if (showAuditRuleRiskNewRequest instanceof ShowAuditRuleRiskNewRequest) {
                    instanceId = showAuditRuleRiskNewRequest.instanceId;
                    id = showAuditRuleRiskNewRequest.id;
                } else {
                    instanceId = showAuditRuleRiskNewRequest['instance_id'];
                    id = showAuditRuleRiskNewRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditRuleRiskNew.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showAuditRuleRiskNew.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取租户下所有实例的风险汇总信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditStatistics() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/summary/risk/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取租户审计信息汇总任务状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditTaskStatus(showAuditTaskStatusRequest?: ShowAuditTaskStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/audit/summary/{busi_type}/task-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let busiType;

            if (showAuditTaskStatusRequest !== null && showAuditTaskStatusRequest !== undefined) {
                if (showAuditTaskStatusRequest instanceof ShowAuditTaskStatusRequest) {
                    busiType = showAuditTaskStatusRequest.busiType;
                } else {
                    busiType = showAuditTaskStatusRequest['busi_type'];
                }
            }

        
            if (busiType === null || busiType === undefined) {
            throw new RequiredError('busiType','Required parameter busiType was null or undefined when calling showAuditTaskStatus.');
            }

            options.pathParams = { 'busi_type': busiType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取报表的计划任务配置信息（topic方式）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditTopicReportSchedulerConfig(showAuditTopicReportSchedulerConfigRequest?: ShowAuditTopicReportSchedulerConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/{instance_id}/reports/tasks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (showAuditTopicReportSchedulerConfigRequest !== null && showAuditTopicReportSchedulerConfigRequest !== undefined) {
                if (showAuditTopicReportSchedulerConfigRequest instanceof ShowAuditTopicReportSchedulerConfigRequest) {
                    instanceId = showAuditTopicReportSchedulerConfigRequest.instanceId;
                    id = showAuditTopicReportSchedulerConfigRequest.id;
                } else {
                    instanceId = showAuditTopicReportSchedulerConfigRequest['instance_id'];
                    id = showAuditTopicReportSchedulerConfigRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditTopicReportSchedulerConfig.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showAuditTopicReportSchedulerConfig.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的实例是否可升级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditUpgradeStatus() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/upgrade/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取风险导出桶名和路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupRiskBucketPath(showBackupRiskBucketPathRequest?: ShowBackupRiskBucketPathRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/backup/risk/bucket-path",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showBackupRiskBucketPathRequest !== null && showBackupRiskBucketPathRequest !== undefined) {
                if (showBackupRiskBucketPathRequest instanceof ShowBackupRiskBucketPathRequest) {
                    instanceId = showBackupRiskBucketPathRequest.instanceId;
                } else {
                    instanceId = showBackupRiskBucketPathRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackupRiskBucketPath.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例监控数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceMonitorInfo(showInstanceMonitorInfoRequest?: ShowInstanceMonitorInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/system/monitorinfo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (showInstanceMonitorInfoRequest !== null && showInstanceMonitorInfoRequest !== undefined) {
                if (showInstanceMonitorInfoRequest instanceof ShowInstanceMonitorInfoRequest) {
                    instanceId = showInstanceMonitorInfoRequest.instanceId;
                    body = showInstanceMonitorInfoRequest.body
                } else {
                    instanceId = showInstanceMonitorInfoRequest['instance_id'];
                    body = showInstanceMonitorInfoRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceMonitorInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询加密/运维增强配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceQuota() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instance/quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取隐私数据脱敏开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSensitiveMaskSwitch(showSensitiveMaskSwitchRequest?: ShowSensitiveMaskSwitchRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/sensitive/mask/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showSensitiveMaskSwitchRequest !== null && showSensitiveMaskSwitchRequest !== undefined) {
                if (showSensitiveMaskSwitchRequest instanceof ShowSensitiveMaskSwitchRequest) {
                    instanceId = showSensitiveMaskSwitchRequest.instanceId;
                } else {
                    instanceId = showSensitiveMaskSwitchRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSensitiveMaskSwitch.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取隐私数据结果集开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSensitiveResultSwitch(showSensitiveResultSwitchRequest?: ShowSensitiveResultSwitchRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/sensitive/result/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showSensitiveResultSwitchRequest !== null && showSensitiveResultSwitchRequest !== undefined) {
                if (showSensitiveResultSwitchRequest instanceof ShowSensitiveResultSwitchRequest) {
                    instanceId = showSensitiveResultSwitchRequest.instanceId;
                } else {
                    instanceId = showSensitiveResultSwitchRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSensitiveResultSwitch.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取管理侧版本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerVersion() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定SQL语句的详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlDetail(showSqlDetailRequest?: ShowSqlDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/{instance_id}/sqls/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (showSqlDetailRequest !== null && showSqlDetailRequest !== undefined) {
                if (showSqlDetailRequest instanceof ShowSqlDetailRequest) {
                    instanceId = showSqlDetailRequest.instanceId;
                    id = showSqlDetailRequest.id;
                } else {
                    instanceId = showSqlDetailRequest['instance_id'];
                    id = showSqlDetailRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSqlDetail.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showSqlDetail.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startAuditInstance(startAuditInstanceRequest?: StartAuditInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dbss/audit/instance/start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (startAuditInstanceRequest !== null && startAuditInstanceRequest !== undefined) {
                if (startAuditInstanceRequest instanceof StartAuditInstanceRequest) {
                    body = startAuditInstanceRequest.body
                } else {
                    body = startAuditInstanceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startAuditInstanceNew(startAuditInstanceNewRequest?: StartAuditInstanceNewRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/instance/start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (startAuditInstanceNewRequest !== null && startAuditInstanceNewRequest !== undefined) {
                if (startAuditInstanceNewRequest instanceof StartAuditInstanceNewRequest) {
                    body = startAuditInstanceNewRequest.body
                } else {
                    body = startAuditInstanceNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动数据库加密实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startDbEncryptInstance(startDbEncryptInstanceRequest?: StartDbEncryptInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-encrypt/{instance_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (startDbEncryptInstanceRequest !== null && startDbEncryptInstanceRequest !== undefined) {
                if (startDbEncryptInstanceRequest instanceof StartDbEncryptInstanceRequest) {
                    instanceId = startDbEncryptInstanceRequest.instanceId;
                } else {
                    instanceId = startDbEncryptInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startDbEncryptInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动数据库运维实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startDbOmInstance(startDbOmInstanceRequest?: StartDbOmInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-om/{instance_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (startDbOmInstanceRequest !== null && startDbOmInstanceRequest !== undefined) {
                if (startDbOmInstanceRequest instanceof StartDbOmInstanceRequest) {
                    instanceId = startDbOmInstanceRequest.instanceId;
                } else {
                    instanceId = startDbOmInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startDbOmInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopAuditInstance(stopAuditInstanceRequest?: StopAuditInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dbss/audit/instance/stop",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (stopAuditInstanceRequest !== null && stopAuditInstanceRequest !== undefined) {
                if (stopAuditInstanceRequest instanceof StopAuditInstanceRequest) {
                    body = stopAuditInstanceRequest.body
                } else {
                    body = stopAuditInstanceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopAuditInstanceNew(stopAuditInstanceNewRequest?: StopAuditInstanceNewRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/instance/stop",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (stopAuditInstanceNewRequest !== null && stopAuditInstanceNewRequest !== undefined) {
                if (stopAuditInstanceNewRequest instanceof StopAuditInstanceNewRequest) {
                    body = stopAuditInstanceNewRequest.body
                } else {
                    body = stopAuditInstanceNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止数据库加密实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopDbEncryptInstance(stopDbEncryptInstanceRequest?: StopDbEncryptInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-encrypt/{instance_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (stopDbEncryptInstanceRequest !== null && stopDbEncryptInstanceRequest !== undefined) {
                if (stopDbEncryptInstanceRequest instanceof StopDbEncryptInstanceRequest) {
                    instanceId = stopDbEncryptInstanceRequest.instanceId;
                } else {
                    instanceId = stopDbEncryptInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling stopDbEncryptInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止数据库运维实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopDbOmInstance(stopDbOmInstanceRequest?: StopDbOmInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-om/{instance_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (stopDbOmInstanceRequest !== null && stopDbOmInstanceRequest !== undefined) {
                if (stopDbOmInstanceRequest instanceof StopDbOmInstanceRequest) {
                    instanceId = stopDbOmInstanceRequest.instanceId;
                } else {
                    instanceId = stopDbOmInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling stopDbOmInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于开启和关闭Agent审计的功能，当开启后，开始抓取用户的访问信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchAgent(switchAgentRequest?: SwitchAgentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/audit/agent/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchAgentRequest !== null && switchAgentRequest !== undefined) {
                if (switchAgentRequest instanceof SwitchAgentRequest) {
                    instanceId = switchAgentRequest.instanceId;
                    body = switchAgentRequest.body
                } else {
                    instanceId = switchAgentRequest['instance_id'];
                    body = switchAgentRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchAgent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启关闭数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchAuditDatabase(switchAuditDatabaseRequest?: SwitchAuditDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{instance_id}/audit/databases/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchAuditDatabaseRequest !== null && switchAuditDatabaseRequest !== undefined) {
                if (switchAuditDatabaseRequest instanceof SwitchAuditDatabaseRequest) {
                    instanceId = switchAuditDatabaseRequest.instanceId;
                    body = switchAuditDatabaseRequest.body
                } else {
                    instanceId = switchAuditDatabaseRequest['instance_id'];
                    body = switchAuditDatabaseRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchAuditDatabase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启关闭数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchAuditDatabaseNew(switchAuditDatabaseNewRequest?: SwitchAuditDatabaseNewRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/audit/{instance_id}/databases/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchAuditDatabaseNewRequest !== null && switchAuditDatabaseNewRequest !== undefined) {
                if (switchAuditDatabaseNewRequest instanceof SwitchAuditDatabaseNewRequest) {
                    instanceId = switchAuditDatabaseNewRequest.instanceId;
                    body = switchAuditDatabaseNewRequest.body
                } else {
                    instanceId = switchAuditDatabaseNewRequest['instance_id'];
                    body = switchAuditDatabaseNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchAuditDatabaseNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启关闭风险规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchRiskRule(switchRiskRuleRequest?: SwitchRiskRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/audit/rule/risk/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchRiskRuleRequest !== null && switchRiskRuleRequest !== undefined) {
                if (switchRiskRuleRequest instanceof SwitchRiskRuleRequest) {
                    instanceId = switchRiskRuleRequest.instanceId;
                    body = switchRiskRuleRequest.body
                } else {
                    instanceId = switchRiskRuleRequest['instance_id'];
                    body = switchRiskRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchRiskRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启/关闭风险规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchRiskRuleNew(switchRiskRuleNewRequest?: SwitchRiskRuleNewRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/rule/risk/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchRiskRuleNewRequest !== null && switchRiskRuleNewRequest !== undefined) {
                if (switchRiskRuleNewRequest instanceof SwitchRiskRuleNewRequest) {
                    instanceId = switchRiskRuleNewRequest.instanceId;
                    body = switchRiskRuleNewRequest.body
                } else {
                    instanceId = switchRiskRuleNewRequest['instance_id'];
                    body = switchRiskRuleNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchRiskRuleNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑数据库加密实例的EIP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unbindDbEncryptEip(unbindDbEncryptEipRequest?: UnbindDbEncryptEipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-encrypt/{instance_id}/eip/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (unbindDbEncryptEipRequest !== null && unbindDbEncryptEipRequest !== undefined) {
                if (unbindDbEncryptEipRequest instanceof UnbindDbEncryptEipRequest) {
                    instanceId = unbindDbEncryptEipRequest.instanceId;
                } else {
                    instanceId = unbindDbEncryptEipRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling unbindDbEncryptEip.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑数据库运维实例的EIP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unbindDbOmEip(unbindDbOmEipRequest?: UnbindDbOmEipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/db-om/{instance_id}/eip/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (unbindDbOmEipRequest !== null && unbindDbOmEipRequest !== undefined) {
                if (unbindDbOmEipRequest instanceof UnbindDbOmEipRequest) {
                    instanceId = unbindDbOmEipRequest.instanceId;
                } else {
                    instanceId = unbindDbOmEipRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling unbindDbOmEip.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新审计实例信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditInstance(updateAuditInstanceRequest?: UpdateAuditInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dbss/audit/instances/{instance_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateAuditInstanceRequest !== null && updateAuditInstanceRequest !== undefined) {
                if (updateAuditInstanceRequest instanceof UpdateAuditInstanceRequest) {
                    instanceId = updateAuditInstanceRequest.instanceId;
                    body = updateAuditInstanceRequest.body
                } else {
                    instanceId = updateAuditInstanceRequest['instance_id'];
                    body = updateAuditInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAuditInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新审计实例信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditInstanceNew(updateAuditInstanceNewRequest?: UpdateAuditInstanceNewRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/audit/instance/{instance_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateAuditInstanceNewRequest !== null && updateAuditInstanceNewRequest !== undefined) {
                if (updateAuditInstanceNewRequest instanceof UpdateAuditInstanceNewRequest) {
                    instanceId = updateAuditInstanceNewRequest.instanceId;
                    body = updateAuditInstanceNewRequest.body
                } else {
                    instanceId = updateAuditInstanceNewRequest['instance_id'];
                    body = updateAuditInstanceNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAuditInstanceNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改风险导出桶名和路径(按DomainId)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditRiskBucketPath(updateAuditRiskBucketPathRequest?: UpdateAuditRiskBucketPathRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/audit/{instance_id}/backup/risk/global/bucket-path",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let instanceId;

            if (updateAuditRiskBucketPathRequest !== null && updateAuditRiskBucketPathRequest !== undefined) {
                if (updateAuditRiskBucketPathRequest instanceof UpdateAuditRiskBucketPathRequest) {
                    domainId = updateAuditRiskBucketPathRequest.domainId;
                    instanceId = updateAuditRiskBucketPathRequest.instanceId;
                    body = updateAuditRiskBucketPathRequest.body
                } else {
                    domainId = updateAuditRiskBucketPathRequest['domain_id'];
                    instanceId = updateAuditRiskBucketPathRequest['instance_id'];
                    body = updateAuditRiskBucketPathRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateAuditRiskBucketPath.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAuditRiskBucketPath.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑审计范围规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditScopeRule(updateAuditScopeRuleRequest?: UpdateAuditScopeRuleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/audit/{instance_id}/rule/scopes/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let id;

            if (updateAuditScopeRuleRequest !== null && updateAuditScopeRuleRequest !== undefined) {
                if (updateAuditScopeRuleRequest instanceof UpdateAuditScopeRuleRequest) {
                    instanceId = updateAuditScopeRuleRequest.instanceId;
                    id = updateAuditScopeRuleRequest.id;
                    body = updateAuditScopeRuleRequest.body
                } else {
                    instanceId = updateAuditScopeRuleRequest['instance_id'];
                    id = updateAuditScopeRuleRequest['id'];
                    body = updateAuditScopeRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAuditScopeRule.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateAuditScopeRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditSecurityGroup(updateAuditSecurityGroupRequest?: UpdateAuditSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dbss/audit/security-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAuditSecurityGroupRequest !== null && updateAuditSecurityGroupRequest !== undefined) {
                if (updateAuditSecurityGroupRequest instanceof UpdateAuditSecurityGroupRequest) {
                    body = updateAuditSecurityGroupRequest.body
                } else {
                    body = updateAuditSecurityGroupRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditSecurityGroupNew(updateAuditSecurityGroupNewRequest?: UpdateAuditSecurityGroupNewRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/security-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAuditSecurityGroupNewRequest !== null && updateAuditSecurityGroupNewRequest !== undefined) {
                if (updateAuditSecurityGroupNewRequest instanceof UpdateAuditSecurityGroupNewRequest) {
                    body = updateAuditSecurityGroupNewRequest.body
                } else {
                    body = updateAuditSecurityGroupNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新租户审计信息汇总任务状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditTaskStatus(updateAuditTaskStatusRequest?: UpdateAuditTaskStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/summary/{busi_type}/task-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let busiType;

            if (updateAuditTaskStatusRequest !== null && updateAuditTaskStatusRequest !== undefined) {
                if (updateAuditTaskStatusRequest instanceof UpdateAuditTaskStatusRequest) {
                    busiType = updateAuditTaskStatusRequest.busiType;
                    body = updateAuditTaskStatusRequest.body
                } else {
                    busiType = updateAuditTaskStatusRequest['busi_type'];
                    body = updateAuditTaskStatusRequest['body'];
                }
            }

        
            if (busiType === null || busiType === undefined) {
            throw new RequiredError('busiType','Required parameter busiType was null or undefined when calling updateAuditTaskStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'busi_type': busiType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改报表的计划任务配置信息（topic方式）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditTopicReportSchedulerConfig(updateAuditTopicReportSchedulerConfigRequest?: UpdateAuditTopicReportSchedulerConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/reports/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateAuditTopicReportSchedulerConfigRequest !== null && updateAuditTopicReportSchedulerConfigRequest !== undefined) {
                if (updateAuditTopicReportSchedulerConfigRequest instanceof UpdateAuditTopicReportSchedulerConfigRequest) {
                    instanceId = updateAuditTopicReportSchedulerConfigRequest.instanceId;
                    body = updateAuditTopicReportSchedulerConfigRequest.body
                } else {
                    instanceId = updateAuditTopicReportSchedulerConfigRequest['instance_id'];
                    body = updateAuditTopicReportSchedulerConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAuditTopicReportSchedulerConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改数据库加密实例的名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDbEncryptInstanceName(updateDbEncryptInstanceNameRequest?: UpdateDbEncryptInstanceNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/db-encrypt/{instance_id}/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateDbEncryptInstanceNameRequest !== null && updateDbEncryptInstanceNameRequest !== undefined) {
                if (updateDbEncryptInstanceNameRequest instanceof UpdateDbEncryptInstanceNameRequest) {
                    instanceId = updateDbEncryptInstanceNameRequest.instanceId;
                    body = updateDbEncryptInstanceNameRequest.body
                } else {
                    instanceId = updateDbEncryptInstanceNameRequest['instance_id'];
                    body = updateDbEncryptInstanceNameRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDbEncryptInstanceName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改数据库运维实例的名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDbOmInstanceName(updateDbOmInstanceNameRequest?: UpdateDbOmInstanceNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/db-om/{instance_id}/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateDbOmInstanceNameRequest !== null && updateDbOmInstanceNameRequest !== undefined) {
                if (updateDbOmInstanceNameRequest instanceof UpdateDbOmInstanceNameRequest) {
                    instanceId = updateDbOmInstanceNameRequest.instanceId;
                    body = updateDbOmInstanceNameRequest.body
                } else {
                    instanceId = updateDbOmInstanceNameRequest['instance_id'];
                    body = updateDbOmInstanceNameRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDbOmInstanceName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改编辑隐私数据脱敏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSensitiveMaskRule(updateSensitiveMaskRuleRequest?: UpdateSensitiveMaskRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/sensitive/mask/rule/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let id;

            if (updateSensitiveMaskRuleRequest !== null && updateSensitiveMaskRuleRequest !== undefined) {
                if (updateSensitiveMaskRuleRequest instanceof UpdateSensitiveMaskRuleRequest) {
                    instanceId = updateSensitiveMaskRuleRequest.instanceId;
                    id = updateSensitiveMaskRuleRequest.id;
                    body = updateSensitiveMaskRuleRequest.body
                } else {
                    instanceId = updateSensitiveMaskRuleRequest['instance_id'];
                    id = updateSensitiveMaskRuleRequest['id'];
                    body = updateSensitiveMaskRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSensitiveMaskRule.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateSensitiveMaskRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 往OBS导出审计数据库配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadAuditDbConfig() {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/databases/configs/obs-upload",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加审计数据库Agent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAuditAgentNew(addAuditAgentNewRequest?: AddAuditAgentNewRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/audit/{instance_id}/agents",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addAuditAgentNewRequest !== null && addAuditAgentNewRequest !== undefined) {
                if (addAuditAgentNewRequest instanceof AddAuditAgentNewRequest) {
                    instanceId = addAuditAgentNewRequest.instanceId;
                    body = addAuditAgentNewRequest.body
                } else {
                    instanceId = addAuditAgentNewRequest['instance_id'];
                    body = addAuditAgentNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addAuditAgentNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定agent_id方式添加agent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuditDbAgent(createAuditDbAgentRequest?: CreateAuditDbAgentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/agents/{agent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let agentId;

            if (createAuditDbAgentRequest !== null && createAuditDbAgentRequest !== undefined) {
                if (createAuditDbAgentRequest instanceof CreateAuditDbAgentRequest) {
                    instanceId = createAuditDbAgentRequest.instanceId;
                    agentId = createAuditDbAgentRequest.agentId;
                    body = createAuditDbAgentRequest.body
                } else {
                    instanceId = createAuditDbAgentRequest['instance_id'];
                    agentId = createAuditDbAgentRequest['agent_id'];
                    body = createAuditDbAgentRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAuditDbAgent.');
            }
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling createAuditDbAgent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库Agent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditAgentNew(deleteAuditAgentNewRequest?: DeleteAuditAgentNewRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/audit/{instance_id}/agents/{agent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let agentId;
            
            let dbId;

            if (deleteAuditAgentNewRequest !== null && deleteAuditAgentNewRequest !== undefined) {
                if (deleteAuditAgentNewRequest instanceof DeleteAuditAgentNewRequest) {
                    instanceId = deleteAuditAgentNewRequest.instanceId;
                    agentId = deleteAuditAgentNewRequest.agentId;
                    dbId = deleteAuditAgentNewRequest.dbId;
                } else {
                    instanceId = deleteAuditAgentNewRequest['instance_id'];
                    agentId = deleteAuditAgentNewRequest['agent_id'];
                    dbId = deleteAuditAgentNewRequest['db_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditAgentNew.');
            }
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling deleteAuditAgentNew.');
            }
            if (dbId === null || dbId === undefined) {
                throw new RequiredError('dbId','Required parameter dbId was null or undefined when calling deleteAuditAgentNew.');
            }
            if (dbId !== null && dbId !== undefined) {
                localVarQueryParameter['db_id'] = dbId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载审计Agent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadAuditAgentNew(downloadAuditAgentNewRequest?: DownloadAuditAgentNewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/audit/{instance_id}/agents/{agent_id}/download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let agentId;

            if (downloadAuditAgentNewRequest !== null && downloadAuditAgentNewRequest !== undefined) {
                if (downloadAuditAgentNewRequest instanceof DownloadAuditAgentNewRequest) {
                    instanceId = downloadAuditAgentNewRequest.instanceId;
                    agentId = downloadAuditAgentNewRequest.agentId;
                } else {
                    instanceId = downloadAuditAgentNewRequest['instance_id'];
                    agentId = downloadAuditAgentNewRequest['agent_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling downloadAuditAgentNew.');
            }
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling downloadAuditAgentNew.');
            }

            options.pathParams = { 'instance_id': instanceId,'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库Agent列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditAgentNew(listAuditAgentNewRequest?: ListAuditAgentNewRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/audit/{instance_id}/agents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbId;

            if (listAuditAgentNewRequest !== null && listAuditAgentNewRequest !== undefined) {
                if (listAuditAgentNewRequest instanceof ListAuditAgentNewRequest) {
                    instanceId = listAuditAgentNewRequest.instanceId;
                    dbId = listAuditAgentNewRequest.dbId;
                } else {
                    instanceId = listAuditAgentNewRequest['instance_id'];
                    dbId = listAuditAgentNewRequest['db_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditAgentNew.');
            }
            if (dbId === null || dbId === undefined) {
                throw new RequiredError('dbId','Required parameter dbId was null or undefined when calling listAuditAgentNew.');
            }
            if (dbId !== null && dbId !== undefined) {
                localVarQueryParameter['db_id'] = dbId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于开启和关闭Agent审计的功能，当开启后，开始抓取用户的访问信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchAgentNew(switchAgentNewRequest?: SwitchAgentNewRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/agent/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchAgentNewRequest !== null && switchAgentNewRequest !== undefined) {
                if (switchAgentNewRequest instanceof SwitchAgentNewRequest) {
                    instanceId = switchAgentNewRequest.instanceId;
                    body = switchAgentNewRequest.body
                } else {
                    instanceId = switchAgentNewRequest['instance_id'];
                    body = switchAgentNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchAgentNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddAuditWhitelist(batchAddAuditWhitelistRequest?: BatchAddAuditWhitelistRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/whitelists",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchAddAuditWhitelistRequest !== null && batchAddAuditWhitelistRequest !== undefined) {
                if (batchAddAuditWhitelistRequest instanceof BatchAddAuditWhitelistRequest) {
                    instanceId = batchAddAuditWhitelistRequest.instanceId;
                    body = batchAddAuditWhitelistRequest.body
                } else {
                    instanceId = batchAddAuditWhitelistRequest['instance_id'];
                    body = batchAddAuditWhitelistRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchAddAuditWhitelist.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加sql自定义规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuditSqlRule(createAuditSqlRuleRequest?: CreateAuditSqlRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/rule/sql",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAuditSqlRuleRequest !== null && createAuditSqlRuleRequest !== undefined) {
                if (createAuditSqlRuleRequest instanceof CreateAuditSqlRuleRequest) {
                    instanceId = createAuditSqlRuleRequest.instanceId;
                    body = createAuditSqlRuleRequest.body
                } else {
                    instanceId = createAuditSqlRuleRequest['instance_id'];
                    body = createAuditSqlRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAuditSqlRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除sql自定义规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditRuleSql(deleteAuditRuleSqlRequest?: DeleteAuditRuleSqlRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/audit/{instance_id}/rule/sql/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (deleteAuditRuleSqlRequest !== null && deleteAuditRuleSqlRequest !== undefined) {
                if (deleteAuditRuleSqlRequest instanceof DeleteAuditRuleSqlRequest) {
                    instanceId = deleteAuditRuleSqlRequest.instanceId;
                    id = deleteAuditRuleSqlRequest.id;
                } else {
                    instanceId = deleteAuditRuleSqlRequest['instance_id'];
                    id = deleteAuditRuleSqlRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditRuleSql.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAuditRuleSql.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditWhitelist(deleteAuditWhitelistRequest?: DeleteAuditWhitelistRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/whitelists/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteAuditWhitelistRequest !== null && deleteAuditWhitelistRequest !== undefined) {
                if (deleteAuditWhitelistRequest instanceof DeleteAuditWhitelistRequest) {
                    instanceId = deleteAuditWhitelistRequest.instanceId;
                    body = deleteAuditWhitelistRequest.body
                } else {
                    instanceId = deleteAuditWhitelistRequest['instance_id'];
                    body = deleteAuditWhitelistRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditWhitelist.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL注入规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlInjectionRulesNew(listSqlInjectionRulesNewRequest?: ListSqlInjectionRulesNewRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/rule/sqls",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listSqlInjectionRulesNewRequest !== null && listSqlInjectionRulesNewRequest !== undefined) {
                if (listSqlInjectionRulesNewRequest instanceof ListSqlInjectionRulesNewRequest) {
                    instanceId = listSqlInjectionRulesNewRequest.instanceId;
                    body = listSqlInjectionRulesNewRequest.body
                } else {
                    instanceId = listSqlInjectionRulesNewRequest['instance_id'];
                    body = listSqlInjectionRulesNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSqlInjectionRulesNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWhitelists(listWhitelistsRequest?: ListWhitelistsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/audit/{instance_id}/whitelists",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listWhitelistsRequest !== null && listWhitelistsRequest !== undefined) {
                if (listWhitelistsRequest instanceof ListWhitelistsRequest) {
                    instanceId = listWhitelistsRequest.instanceId;
                    offset = listWhitelistsRequest.offset;
                    limit = listWhitelistsRequest.limit;
                } else {
                    instanceId = listWhitelistsRequest['instance_id'];
                    offset = listWhitelistsRequest['offset'];
                    limit = listWhitelistsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listWhitelists.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启关闭sql注入策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditSqlRuleSwitch(setAuditSqlRuleSwitchRequest?: SetAuditSqlRuleSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/rule/sql/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setAuditSqlRuleSwitchRequest !== null && setAuditSqlRuleSwitchRequest !== undefined) {
                if (setAuditSqlRuleSwitchRequest instanceof SetAuditSqlRuleSwitchRequest) {
                    instanceId = setAuditSqlRuleSwitchRequest.instanceId;
                    body = setAuditSqlRuleSwitchRequest.body
                } else {
                    instanceId = setAuditSqlRuleSwitchRequest['instance_id'];
                    body = setAuditSqlRuleSwitchRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditSqlRuleSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * sql规则优先级排序
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSqlRuleRank(setSqlRuleRankRequest?: SetSqlRuleRankRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/audit/{instance_id}/rule/sql/rank",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setSqlRuleRankRequest !== null && setSqlRuleRankRequest !== undefined) {
                if (setSqlRuleRankRequest instanceof SetSqlRuleRankRequest) {
                    instanceId = setSqlRuleRankRequest.instanceId;
                    body = setSqlRuleRankRequest.body
                } else {
                    instanceId = setSqlRuleRankRequest['instance_id'];
                    body = setSqlRuleRankRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setSqlRuleRank.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑sql自定义规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditSqlRule(updateAuditSqlRuleRequest?: UpdateAuditSqlRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/audit/{instance_id}/rule/sql/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let id;

            if (updateAuditSqlRuleRequest !== null && updateAuditSqlRuleRequest !== undefined) {
                if (updateAuditSqlRuleRequest instanceof UpdateAuditSqlRuleRequest) {
                    instanceId = updateAuditSqlRuleRequest.instanceId;
                    id = updateAuditSqlRuleRequest.id;
                    body = updateAuditSqlRuleRequest.body
                } else {
                    instanceId = updateAuditSqlRuleRequest['instance_id'];
                    id = updateAuditSqlRuleRequest['id'];
                    body = updateAuditSqlRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAuditSqlRule.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateAuditSqlRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditWhitelist(updateAuditWhitelistRequest?: UpdateAuditWhitelistRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/audit/{instance_id}/whitelists/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let id;

            if (updateAuditWhitelistRequest !== null && updateAuditWhitelistRequest !== undefined) {
                if (updateAuditWhitelistRequest instanceof UpdateAuditWhitelistRequest) {
                    instanceId = updateAuditWhitelistRequest.instanceId;
                    id = updateAuditWhitelistRequest.id;
                    body = updateAuditWhitelistRequest.body
                } else {
                    instanceId = updateAuditWhitelistRequest['instance_id'];
                    id = updateAuditWhitelistRequest['id'];
                    body = updateAuditWhitelistRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAuditWhitelist.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateAuditWhitelist.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddResourceTag(batchAddResourceTagRequest?: BatchAddResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (batchAddResourceTagRequest !== null && batchAddResourceTagRequest !== undefined) {
                if (batchAddResourceTagRequest instanceof BatchAddResourceTagRequest) {
                    resourceType = batchAddResourceTagRequest.resourceType;
                    resourceId = batchAddResourceTagRequest.resourceId;
                    body = batchAddResourceTagRequest.body
                } else {
                    resourceType = batchAddResourceTagRequest['resource_type'];
                    resourceId = batchAddResourceTagRequest['resource_id'];
                    body = batchAddResourceTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchAddResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchAddResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteResourceTag(batchDeleteResourceTagRequest?: BatchDeleteResourceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (batchDeleteResourceTagRequest !== null && batchDeleteResourceTagRequest !== undefined) {
                if (batchDeleteResourceTagRequest instanceof BatchDeleteResourceTagRequest) {
                    resourceType = batchDeleteResourceTagRequest.resourceType;
                    resourceId = batchDeleteResourceTagRequest.resourceId;
                    body = batchDeleteResourceTagRequest.body
                } else {
                    resourceType = batchDeleteResourceTagRequest['resource_type'];
                    resourceId = batchDeleteResourceTagRequest['resource_id'];
                    body = batchDeleteResourceTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchDeleteResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询资源实例数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countResourceInstanceByTag(countResourceInstanceByTagRequest?: CountResourceInstanceByTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/resource-instances/count",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (countResourceInstanceByTagRequest !== null && countResourceInstanceByTagRequest !== undefined) {
                if (countResourceInstanceByTagRequest instanceof CountResourceInstanceByTagRequest) {
                    resourceType = countResourceInstanceByTagRequest.resourceType;
                    body = countResourceInstanceByTagRequest.body
                } else {
                    resourceType = countResourceInstanceByTagRequest['resource_type'];
                    body = countResourceInstanceByTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling countResourceInstanceByTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditTags(listAuditTagsRequest?: ListAuditTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (listAuditTagsRequest !== null && listAuditTagsRequest !== undefined) {
                if (listAuditTagsRequest instanceof ListAuditTagsRequest) {
                    resourceType = listAuditTagsRequest.resourceType;
                    resourceId = listAuditTagsRequest.resourceId;
                } else {
                    resourceType = listAuditTagsRequest['resource_type'];
                    resourceId = listAuditTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listAuditTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listAuditTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectResourceTags(listProjectResourceTagsRequest?: ListProjectResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listProjectResourceTagsRequest !== null && listProjectResourceTagsRequest !== undefined) {
                if (listProjectResourceTagsRequest instanceof ListProjectResourceTagsRequest) {
                    resourceType = listProjectResourceTagsRequest.resourceType;
                } else {
                    resourceType = listProjectResourceTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listProjectResourceTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询资源实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstanceByTag(listResourceInstanceByTagRequest?: ListResourceInstanceByTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/resource-instances/filter",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceType;
            
            let limit;
            
            let offset;

            if (listResourceInstanceByTagRequest !== null && listResourceInstanceByTagRequest !== undefined) {
                if (listResourceInstanceByTagRequest instanceof ListResourceInstanceByTagRequest) {
                    resourceType = listResourceInstanceByTagRequest.resourceType;
                    body = listResourceInstanceByTagRequest.body
                    limit = listResourceInstanceByTagRequest.limit;
                    offset = listResourceInstanceByTagRequest.offset;
                } else {
                    resourceType = listResourceInstanceByTagRequest['resource_type'];
                    body = listResourceInstanceByTagRequest['body'];
                    limit = listResourceInstanceByTagRequest['limit'];
                    offset = listResourceInstanceByTagRequest['offset'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceInstanceByTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DbssClient {
    return new DbssClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}