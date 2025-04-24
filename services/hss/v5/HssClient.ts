import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccountResponseInfo } from './model/AccountResponseInfo';
import { Action } from './model/Action';
import { AddAccountsRequestInfo } from './model/AddAccountsRequestInfo';
import { AddCceIntegrationProtectionRequest } from './model/AddCceIntegrationProtectionRequest';
import { AddCceIntegrationProtectionResponse } from './model/AddCceIntegrationProtectionResponse';
import { AddHostsGroupRequest } from './model/AddHostsGroupRequest';
import { AddHostsGroupRequestInfo } from './model/AddHostsGroupRequestInfo';
import { AddHostsGroupResponse } from './model/AddHostsGroupResponse';
import { AddLoginWhiteListRequest } from './model/AddLoginWhiteListRequest';
import { AddLoginWhiteListRequestInfo } from './model/AddLoginWhiteListRequestInfo';
import { AddLoginWhiteListResponse } from './model/AddLoginWhiteListResponse';
import { AddProtectionPolicyInfoRequestInfo } from './model/AddProtectionPolicyInfoRequestInfo';
import { AddProtectionPolicyRequest } from './model/AddProtectionPolicyRequest';
import { AddProtectionPolicyResponse } from './model/AddProtectionPolicyResponse';
import { AddSystemUserWhiteListRequest } from './model/AddSystemUserWhiteListRequest';
import { AddSystemUserWhiteListRequestInfo } from './model/AddSystemUserWhiteListRequestInfo';
import { AddSystemUserWhiteListResponse } from './model/AddSystemUserWhiteListResponse';
import { AgentId } from './model/AgentId';
import { AgentInstallScriptResponseInfo } from './model/AgentInstallScriptResponseInfo';
import { AgentPolicyInfo } from './model/AgentPolicyInfo';
import { AgentStatus } from './model/AgentStatus';
import { AgentVersion } from './model/AgentVersion';
import { AlarmWhiteListRequestInfo } from './model/AlarmWhiteListRequestInfo';
import { AlarmWhiteListResponseInfo } from './model/AlarmWhiteListResponseInfo';
import { AntiViruOperateType } from './model/AntiViruOperateType';
import { AntiVirusEventWhiteRuleListRequestInfo } from './model/AntiVirusEventWhiteRuleListRequestInfo';
import { AntiVirusHandleHistory } from './model/AntiVirusHandleHistory';
import { AntiVirusHostResponseInfo } from './model/AntiVirusHostResponseInfo';
import { AntiVirusPolicyHostResponseInfo } from './model/AntiVirusPolicyHostResponseInfo';
import { AntiVirusPolicyResponseInfo } from './model/AntiVirusPolicyResponseInfo';
import { AntiVirusResultResponseInfo } from './model/AntiVirusResultResponseInfo';
import { AntiVirusTaskHostResponseInfo } from './model/AntiVirusTaskHostResponseInfo';
import { AntiVirusTaskResponseInfo } from './model/AntiVirusTaskResponseInfo';
import { AntivirusEventType } from './model/AntivirusEventType';
import { AntivirusResultDetailInfo } from './model/AntivirusResultDetailInfo';
import { AppChangeResponseInfo } from './model/AppChangeResponseInfo';
import { AppResponseInfo } from './model/AppResponseInfo';
import { AppStatisticResponseInfo } from './model/AppStatisticResponseInfo';
import { AssetValue } from './model/AssetValue';
import { AssociateImages } from './model/AssociateImages';
import { AssociatePolicyGroupRequest } from './model/AssociatePolicyGroupRequest';
import { AssociatePolicyGroupRequestInfo } from './model/AssociatePolicyGroupRequestInfo';
import { AssociatePolicyGroupResponse } from './model/AssociatePolicyGroupResponse';
import { AttackPhase } from './model/AttackPhase';
import { AttackTag } from './model/AttackTag';
import { AutoLauchResponseInfo } from './model/AutoLauchResponseInfo';
import { AutoLaunchChangeResponseInfo } from './model/AutoLaunchChangeResponseInfo';
import { AutoLaunchStatisticsResponseInfo } from './model/AutoLaunchStatisticsResponseInfo';
import { AvailableResourceIdsInfo } from './model/AvailableResourceIdsInfo';
import { BackupResources } from './model/BackupResources';
import { BackupTriggerInfo } from './model/BackupTriggerInfo';
import { BackupTriggerPropertiesInfo } from './model/BackupTriggerPropertiesInfo';
import { BackupTriggerPropertiesRequestInfo } from './model/BackupTriggerPropertiesRequestInfo';
import { BackupTriggerPropertiesRequestInfo1 } from './model/BackupTriggerPropertiesRequestInfo1';
import { BackupTriggerRequestInfo } from './model/BackupTriggerRequestInfo';
import { BackupTriggerRequestInfo1 } from './model/BackupTriggerRequestInfo1';
import { BackupVaultInfo } from './model/BackupVaultInfo';
import { BatchAddAccountsRequest } from './model/BatchAddAccountsRequest';
import { BatchAddAccountsRequestInfo } from './model/BatchAddAccountsRequestInfo';
import { BatchAddAccountsResponse } from './model/BatchAddAccountsResponse';
import { BatchCreateTagsRequest } from './model/BatchCreateTagsRequest';
import { BatchCreateTagsRequestInfo } from './model/BatchCreateTagsRequestInfo';
import { BatchCreateTagsResponse } from './model/BatchCreateTagsResponse';
import { BatchScanPrivateImageRequestInfo } from './model/BatchScanPrivateImageRequestInfo';
import { BatchScanSwrImageInfo } from './model/BatchScanSwrImageInfo';
import { BatchScanSwrImageRequest } from './model/BatchScanSwrImageRequest';
import { BatchScanSwrImageResponse } from './model/BatchScanSwrImageResponse';
import { BlockedIpRequestInfo } from './model/BlockedIpRequestInfo';
import { BlockedIpResponseInfo } from './model/BlockedIpResponseInfo';
import { CCEClusterInfoListRequestBody } from './model/CCEClusterInfoListRequestBody';
import { CCEClusterInfoListRequestBodyClusterInfoList } from './model/CCEClusterInfoListRequestBodyClusterInfoList';
import { CceIntegrationProtectionRequestBody } from './model/CceIntegrationProtectionRequestBody';
import { ChangeAntivirusPolicyRequest } from './model/ChangeAntivirusPolicyRequest';
import { ChangeAntivirusPolicyRequestInfo } from './model/ChangeAntivirusPolicyRequestInfo';
import { ChangeAntivirusPolicyResponse } from './model/ChangeAntivirusPolicyResponse';
import { ChangeBlockedIpRequest } from './model/ChangeBlockedIpRequest';
import { ChangeBlockedIpRequestInfo } from './model/ChangeBlockedIpRequestInfo';
import { ChangeBlockedIpResponse } from './model/ChangeBlockedIpResponse';
import { ChangeCheckRuleActionRequest } from './model/ChangeCheckRuleActionRequest';
import { ChangeCheckRuleActionResponse } from './model/ChangeCheckRuleActionResponse';
import { ChangeEventRequest } from './model/ChangeEventRequest';
import { ChangeEventRequestInfo } from './model/ChangeEventRequestInfo';
import { ChangeEventResponse } from './model/ChangeEventResponse';
import { ChangeHostsGroupRequest } from './model/ChangeHostsGroupRequest';
import { ChangeHostsGroupRequestInfo } from './model/ChangeHostsGroupRequestInfo';
import { ChangeHostsGroupResponse } from './model/ChangeHostsGroupResponse';
import { ChangeIsolatedFileRequest } from './model/ChangeIsolatedFileRequest';
import { ChangeIsolatedFileRequestInfo } from './model/ChangeIsolatedFileRequestInfo';
import { ChangeIsolatedFileResponse } from './model/ChangeIsolatedFileResponse';
import { ChangeVulScanPolicyRequest } from './model/ChangeVulScanPolicyRequest';
import { ChangeVulScanPolicyRequestInfo } from './model/ChangeVulScanPolicyRequestInfo';
import { ChangeVulScanPolicyResponse } from './model/ChangeVulScanPolicyResponse';
import { ChangeVulStatusRequest } from './model/ChangeVulStatusRequest';
import { ChangeVulStatusRequestInfo } from './model/ChangeVulStatusRequestInfo';
import { ChangeVulStatusRequestInfoCustomBackupHosts } from './model/ChangeVulStatusRequestInfoCustomBackupHosts';
import { ChangeVulStatusResponse } from './model/ChangeVulStatusResponse';
import { CheckFeatureRuleInfo } from './model/CheckFeatureRuleInfo';
import { CheckRuleCheckCaseResponseInfo } from './model/CheckRuleCheckCaseResponseInfo';
import { CheckRuleFixParamInfo } from './model/CheckRuleFixParamInfo';
import { CheckRuleFixValuesInfo } from './model/CheckRuleFixValuesInfo';
import { CheckRuleIdListRequestInfo } from './model/CheckRuleIdListRequestInfo';
import { CheckRuleKeyInfoRequestInfo } from './model/CheckRuleKeyInfoRequestInfo';
import { CheckRuleRiskInfoResponseInfo } from './model/CheckRuleRiskInfoResponseInfo';
import { CloseProtectionInfoRequestInfo } from './model/CloseProtectionInfoRequestInfo';
import { ClusterConfigResponseInfo } from './model/ClusterConfigResponseInfo';
import { ContainerBaseInfo } from './model/ContainerBaseInfo';
import { ContainerName } from './model/ContainerName';
import { ContainerNodeInfo } from './model/ContainerNodeInfo';
import { CreateAntiVirusPolicyRequest } from './model/CreateAntiVirusPolicyRequest';
import { CreateAntiVirusPolicyRequestBody } from './model/CreateAntiVirusPolicyRequestBody';
import { CreateAntiVirusPolicyResponse } from './model/CreateAntiVirusPolicyResponse';
import { CreateAntiVirusTaskRequest } from './model/CreateAntiVirusTaskRequest';
import { CreateAntiVirusTaskRequestInfo } from './model/CreateAntiVirusTaskRequestInfo';
import { CreateAntiVirusTaskResponse } from './model/CreateAntiVirusTaskResponse';
import { CreateDecoyPortPolicyRequest } from './model/CreateDecoyPortPolicyRequest';
import { CreateDecoyPortPolicyResponse } from './model/CreateDecoyPortPolicyResponse';
import { CreateQuotasOrderRequest } from './model/CreateQuotasOrderRequest';
import { CreateQuotasOrderRequestInfo } from './model/CreateQuotasOrderRequestInfo';
import { CreateQuotasOrderResponse } from './model/CreateQuotasOrderResponse';
import { CreateVulnerabilityScanTaskRequest } from './model/CreateVulnerabilityScanTaskRequest';
import { CreateVulnerabilityScanTaskResponse } from './model/CreateVulnerabilityScanTaskResponse';
import { DefaultGroup } from './model/DefaultGroup';
import { DelIsolatedFileRequestInfo } from './model/DelIsolatedFileRequestInfo';
import { Deletable } from './model/Deletable';
import { DeleteAccountRequest } from './model/DeleteAccountRequest';
import { DeleteAccountRequestInfo } from './model/DeleteAccountRequestInfo';
import { DeleteAccountResponse } from './model/DeleteAccountResponse';
import { DeleteAgentDaemonsetRequest } from './model/DeleteAgentDaemonsetRequest';
import { DeleteAgentDaemonsetResponse } from './model/DeleteAgentDaemonsetResponse';
import { DeleteAntivirusPolicyRequest } from './model/DeleteAntivirusPolicyRequest';
import { DeleteAntivirusPolicyRequestInfo } from './model/DeleteAntivirusPolicyRequestInfo';
import { DeleteAntivirusPolicyResponse } from './model/DeleteAntivirusPolicyResponse';
import { DeleteDecoyPortHostPolicyRequest } from './model/DeleteDecoyPortHostPolicyRequest';
import { DeleteDecoyPortHostPolicyResponse } from './model/DeleteDecoyPortHostPolicyResponse';
import { DeleteDecoyPortPolicyRequest } from './model/DeleteDecoyPortPolicyRequest';
import { DeleteDecoyPortPolicyResponse } from './model/DeleteDecoyPortPolicyResponse';
import { DeleteHostsGroupRequest } from './model/DeleteHostsGroupRequest';
import { DeleteHostsGroupResponse } from './model/DeleteHostsGroupResponse';
import { DeleteIsolatedFileRequest } from './model/DeleteIsolatedFileRequest';
import { DeleteIsolatedFileRequestInfo } from './model/DeleteIsolatedFileRequestInfo';
import { DeleteIsolatedFileResponse } from './model/DeleteIsolatedFileResponse';
import { DeleteProtectionPolicyRequest } from './model/DeleteProtectionPolicyRequest';
import { DeleteProtectionPolicyResponse } from './model/DeleteProtectionPolicyResponse';
import { DeleteResourceInstanceTagRequest } from './model/DeleteResourceInstanceTagRequest';
import { DeleteResourceInstanceTagResponse } from './model/DeleteResourceInstanceTagResponse';
import { Deleted } from './model/Deleted';
import { Description } from './model/Description';
import { EnterpriseProjectName } from './model/EnterpriseProjectName';
import { ErrorInfo } from './model/ErrorInfo';
import { EventClassId } from './model/EventClassId';
import { EventDetailRequestInfo } from './model/EventDetailRequestInfo';
import { EventDetailResponseInfo } from './model/EventDetailResponseInfo';
import { EventFileResponseInfo } from './model/EventFileResponseInfo';
import { EventHandleHistory } from './model/EventHandleHistory';
import { EventId } from './model/EventId';
import { EventManagementResponseInfo } from './model/EventManagementResponseInfo';
import { EventName } from './model/EventName';
import { EventProcessResponseInfo } from './model/EventProcessResponseInfo';
import { EventResourceResponseInfo } from './model/EventResourceResponseInfo';
import { EventType } from './model/EventType';
import { EventUserResponseInfo } from './model/EventUserResponseInfo';
import { EventWhiteRuleListRequestInfo } from './model/EventWhiteRuleListRequestInfo';
import { ExportAntiVirusResultRequest } from './model/ExportAntiVirusResultRequest';
import { ExportAntiVirusResultRequestBody } from './model/ExportAntiVirusResultRequestBody';
import { ExportAntiVirusResultResponse } from './model/ExportAntiVirusResultResponse';
import { ExportVulRequestBody } from './model/ExportVulRequestBody';
import { ExportVulsRequest } from './model/ExportVulsRequest';
import { ExportVulsResponse } from './model/ExportVulsResponse';
import { FailReason } from './model/FailReason';
import { FeatureRuleInfo } from './model/FeatureRuleInfo';
import { FileAttr } from './model/FileAttr';
import { FileCtime } from './model/FileCtime';
import { FileHash } from './model/FileHash';
import { FileMtime } from './model/FileMtime';
import { FileOwner } from './model/FileOwner';
import { FilePath } from './model/FilePath';
import { FileSize } from './model/FileSize';
import { FileType } from './model/FileType';
import { GroupId } from './model/GroupId';
import { GroupName } from './model/GroupName';
import { HandleAntiVirusResultRequest } from './model/HandleAntiVirusResultRequest';
import { HandleAntiVirusResultResponse } from './model/HandleAntiVirusResultResponse';
import { HandleMethod } from './model/HandleMethod';
import { HandleStatus } from './model/HandleStatus';
import { HandleTime } from './model/HandleTime';
import { Handler } from './model/Handler';
import { Hash } from './model/Hash';
import { HistoryHandleMethod } from './model/HistoryHandleMethod';
import { HoneypotPortPolicyContent } from './model/HoneypotPortPolicyContent';
import { HoneypotPortPolicyContentPortsList } from './model/HoneypotPortPolicyContentPortsList';
import { Host } from './model/Host';
import { HostGroupItem } from './model/HostGroupItem';
import { HostId } from './model/HostId';
import { HostName } from './model/HostName';
import { HostNum } from './model/HostNum';
import { HostProtectHistoryResponseInfo } from './model/HostProtectHistoryResponseInfo';
import { HostRaspProtectHistoryResponseInfo } from './model/HostRaspProtectHistoryResponseInfo';
import { HostStatus } from './model/HostStatus';
import { HostTaskStatus } from './model/HostTaskStatus';
import { HostVulInfo } from './model/HostVulInfo';
import { HostVulInfoAppList } from './model/HostVulInfoAppList';
import { HostVulInfoCveList } from './model/HostVulInfoCveList';
import { HostVulInfoDisabledOperateTypes } from './model/HostVulInfoDisabledOperateTypes';
import { HostVulOperateInfo } from './model/HostVulOperateInfo';
import { IgnoreDir } from './model/IgnoreDir';
import { ImageCheckRuleCheckCaseResponseInfo } from './model/ImageCheckRuleCheckCaseResponseInfo';
import { ImageLocalInfo } from './model/ImageLocalInfo';
import { ImageName } from './model/ImageName';
import { ImageRiskConfigsCheckRulesResponseInfo } from './model/ImageRiskConfigsCheckRulesResponseInfo';
import { ImageRiskConfigsInfoResponseInfo } from './model/ImageRiskConfigsInfoResponseInfo';
import { ImageVulCveInfo } from './model/ImageVulCveInfo';
import { ImageVulInfo } from './model/ImageVulInfo';
import { Invalidate } from './model/Invalidate';
import { IsParent } from './model/IsParent';
import { IsolateEventResponseInfo } from './model/IsolateEventResponseInfo';
import { IsolateSource } from './model/IsolateSource';
import { IsolatedFileRequestInfo } from './model/IsolatedFileRequestInfo';
import { IsolatedFileResponseInfo } from './model/IsolatedFileResponseInfo';
import { IsolationStatus } from './model/IsolationStatus';
import { JarPackageHostInfo } from './model/JarPackageHostInfo';
import { JarPackageStatisticsResponseInfo } from './model/JarPackageStatisticsResponseInfo';
import { ListAccountsRequest } from './model/ListAccountsRequest';
import { ListAccountsResponse } from './model/ListAccountsResponse';
import { ListAgentInstallScriptRequest } from './model/ListAgentInstallScriptRequest';
import { ListAgentInstallScriptResponse } from './model/ListAgentInstallScriptResponse';
import { ListAlarmWhiteListRequest } from './model/ListAlarmWhiteListRequest';
import { ListAlarmWhiteListResponse } from './model/ListAlarmWhiteListResponse';
import { ListAntiVirusHostRequest } from './model/ListAntiVirusHostRequest';
import { ListAntiVirusHostResponse } from './model/ListAntiVirusHostResponse';
import { ListAntiVirusPolicyRequest } from './model/ListAntiVirusPolicyRequest';
import { ListAntiVirusPolicyResponse } from './model/ListAntiVirusPolicyResponse';
import { ListAntiVirusResultRequest } from './model/ListAntiVirusResultRequest';
import { ListAntiVirusResultResponse } from './model/ListAntiVirusResultResponse';
import { ListAntiVirusTaskRequest } from './model/ListAntiVirusTaskRequest';
import { ListAntiVirusTaskResponse } from './model/ListAntiVirusTaskResponse';
import { ListAntivirusHandleHistoryRequest } from './model/ListAntivirusHandleHistoryRequest';
import { ListAntivirusHandleHistoryResponse } from './model/ListAntivirusHandleHistoryResponse';
import { ListAppChangeHistoriesRequest } from './model/ListAppChangeHistoriesRequest';
import { ListAppChangeHistoriesResponse } from './model/ListAppChangeHistoriesResponse';
import { ListAppStatisticsRequest } from './model/ListAppStatisticsRequest';
import { ListAppStatisticsResponse } from './model/ListAppStatisticsResponse';
import { ListAppsRequest } from './model/ListAppsRequest';
import { ListAppsResponse } from './model/ListAppsResponse';
import { ListAutoLaunchChangeHistoriesRequest } from './model/ListAutoLaunchChangeHistoriesRequest';
import { ListAutoLaunchChangeHistoriesResponse } from './model/ListAutoLaunchChangeHistoriesResponse';
import { ListAutoLaunchStatisticsRequest } from './model/ListAutoLaunchStatisticsRequest';
import { ListAutoLaunchStatisticsResponse } from './model/ListAutoLaunchStatisticsResponse';
import { ListAutoLaunchsRequest } from './model/ListAutoLaunchsRequest';
import { ListAutoLaunchsResponse } from './model/ListAutoLaunchsResponse';
import { ListBackupVaultsRequest } from './model/ListBackupVaultsRequest';
import { ListBackupVaultsResponse } from './model/ListBackupVaultsResponse';
import { ListBlockedIpRequest } from './model/ListBlockedIpRequest';
import { ListBlockedIpResponse } from './model/ListBlockedIpResponse';
import { ListCceClusterConfigRequest } from './model/ListCceClusterConfigRequest';
import { ListCceClusterConfigResponse } from './model/ListCceClusterConfigResponse';
import { ListCheckFeatureRuleRequest } from './model/ListCheckFeatureRuleRequest';
import { ListCheckFeatureRuleResponse } from './model/ListCheckFeatureRuleResponse';
import { ListContainerNodesRequest } from './model/ListContainerNodesRequest';
import { ListContainerNodesResponse } from './model/ListContainerNodesResponse';
import { ListContainersRequest } from './model/ListContainersRequest';
import { ListContainersResponse } from './model/ListContainersResponse';
import { ListDecoyPortPolicyRequest } from './model/ListDecoyPortPolicyRequest';
import { ListDecoyPortPolicyResponse } from './model/ListDecoyPortPolicyResponse';
import { ListDownloadExportedFileRequest } from './model/ListDownloadExportedFileRequest';
import { ListDownloadExportedFileResponse } from './model/ListDownloadExportedFileResponse';
import { ListEventHandleHistoryRequest } from './model/ListEventHandleHistoryRequest';
import { ListEventHandleHistoryResponse } from './model/ListEventHandleHistoryResponse';
import { ListHostGroupsRequest } from './model/ListHostGroupsRequest';
import { ListHostGroupsResponse } from './model/ListHostGroupsResponse';
import { ListHostProtectHistoryInfoRequest } from './model/ListHostProtectHistoryInfoRequest';
import { ListHostProtectHistoryInfoResponse } from './model/ListHostProtectHistoryInfoResponse';
import { ListHostRaspProtectHistoryInfoRequest } from './model/ListHostRaspProtectHistoryInfoRequest';
import { ListHostRaspProtectHistoryInfoResponse } from './model/ListHostRaspProtectHistoryInfoResponse';
import { ListHostStatusRequest } from './model/ListHostStatusRequest';
import { ListHostStatusResponse } from './model/ListHostStatusResponse';
import { ListHostVulsRequest } from './model/ListHostVulsRequest';
import { ListHostVulsResponse } from './model/ListHostVulsResponse';
import { ListImageLocalRequest } from './model/ListImageLocalRequest';
import { ListImageLocalResponse } from './model/ListImageLocalResponse';
import { ListImageRiskConfigRulesRequest } from './model/ListImageRiskConfigRulesRequest';
import { ListImageRiskConfigRulesResponse } from './model/ListImageRiskConfigRulesResponse';
import { ListImageRiskConfigsRequest } from './model/ListImageRiskConfigsRequest';
import { ListImageRiskConfigsResponse } from './model/ListImageRiskConfigsResponse';
import { ListImageVulnerabilitiesRequest } from './model/ListImageVulnerabilitiesRequest';
import { ListImageVulnerabilitiesResponse } from './model/ListImageVulnerabilitiesResponse';
import { ListIsolatedFileRequest } from './model/ListIsolatedFileRequest';
import { ListIsolatedFileResponse } from './model/ListIsolatedFileResponse';
import { ListJarPackageHostInfoRequest } from './model/ListJarPackageHostInfoRequest';
import { ListJarPackageHostInfoResponse } from './model/ListJarPackageHostInfoResponse';
import { ListJarPackageStatisticsRequest } from './model/ListJarPackageStatisticsRequest';
import { ListJarPackageStatisticsResponse } from './model/ListJarPackageStatisticsResponse';
import { ListLoginCommonIpRequest } from './model/ListLoginCommonIpRequest';
import { ListLoginCommonIpResponse } from './model/ListLoginCommonIpResponse';
import { ListLoginCommonLocationRequest } from './model/ListLoginCommonLocationRequest';
import { ListLoginCommonLocationResponse } from './model/ListLoginCommonLocationResponse';
import { ListLoginWhiteIpRequest } from './model/ListLoginWhiteIpRequest';
import { ListLoginWhiteIpResponse } from './model/ListLoginWhiteIpResponse';
import { ListLoginWhiteListRequest } from './model/ListLoginWhiteListRequest';
import { ListLoginWhiteListResponse } from './model/ListLoginWhiteListResponse';
import { ListOperationLogsByVaultNameRequest } from './model/ListOperationLogsByVaultNameRequest';
import { ListOperationLogsByVaultNameResponse } from './model/ListOperationLogsByVaultNameResponse';
import { ListOrganizationTreeRequest } from './model/ListOrganizationTreeRequest';
import { ListOrganizationTreeResponse } from './model/ListOrganizationTreeResponse';
import { ListPasswordComplexityRequest } from './model/ListPasswordComplexityRequest';
import { ListPasswordComplexityResponse } from './model/ListPasswordComplexityResponse';
import { ListPoliciesRequest } from './model/ListPoliciesRequest';
import { ListPoliciesResponse } from './model/ListPoliciesResponse';
import { ListPolicyGroupRequest } from './model/ListPolicyGroupRequest';
import { ListPolicyGroupResponse } from './model/ListPolicyGroupResponse';
import { ListPortHostRequest } from './model/ListPortHostRequest';
import { ListPortHostResponse } from './model/ListPortHostResponse';
import { ListPortStatisticsRequest } from './model/ListPortStatisticsRequest';
import { ListPortStatisticsResponse } from './model/ListPortStatisticsResponse';
import { ListPortsRequest } from './model/ListPortsRequest';
import { ListPortsResponse } from './model/ListPortsResponse';
import { ListProcessStatisticsRequest } from './model/ListProcessStatisticsRequest';
import { ListProcessStatisticsResponse } from './model/ListProcessStatisticsResponse';
import { ListProcessesHostRequest } from './model/ListProcessesHostRequest';
import { ListProcessesHostResponse } from './model/ListProcessesHostResponse';
import { ListProtectionPolicyRequest } from './model/ListProtectionPolicyRequest';
import { ListProtectionPolicyResponse } from './model/ListProtectionPolicyResponse';
import { ListProtectionServerRequest } from './model/ListProtectionServerRequest';
import { ListProtectionServerResponse } from './model/ListProtectionServerResponse';
import { ListProtectionServersRequest } from './model/ListProtectionServersRequest';
import { ListProtectionServersResponse } from './model/ListProtectionServersResponse';
import { ListQueryExportTaskRequest } from './model/ListQueryExportTaskRequest';
import { ListQueryExportTaskResponse } from './model/ListQueryExportTaskResponse';
import { ListQuotasDetailRequest } from './model/ListQuotasDetailRequest';
import { ListQuotasDetailResponse } from './model/ListQuotasDetailResponse';
import { ListRansomwareProtectionNodesRequest } from './model/ListRansomwareProtectionNodesRequest';
import { ListRansomwareProtectionNodesResponse } from './model/ListRansomwareProtectionNodesResponse';
import { ListRaspEventsRequest } from './model/ListRaspEventsRequest';
import { ListRaspEventsResponse } from './model/ListRaspEventsResponse';
import { ListRaspPoliciesRequest } from './model/ListRaspPoliciesRequest';
import { ListRaspPoliciesResponse } from './model/ListRaspPoliciesResponse';
import { ListRiskConfigCheckRulesRequest } from './model/ListRiskConfigCheckRulesRequest';
import { ListRiskConfigCheckRulesResponse } from './model/ListRiskConfigCheckRulesResponse';
import { ListRiskConfigHostsRequest } from './model/ListRiskConfigHostsRequest';
import { ListRiskConfigHostsResponse } from './model/ListRiskConfigHostsResponse';
import { ListRiskConfigsRequest } from './model/ListRiskConfigsRequest';
import { ListRiskConfigsResponse } from './model/ListRiskConfigsResponse';
import { ListSecurityEventsRequest } from './model/ListSecurityEventsRequest';
import { ListSecurityEventsResponse } from './model/ListSecurityEventsResponse';
import { ListSwrImageRepositoryRequest } from './model/ListSwrImageRepositoryRequest';
import { ListSwrImageRepositoryResponse } from './model/ListSwrImageRepositoryResponse';
import { ListSystemUserWhiteListRequest } from './model/ListSystemUserWhiteListRequest';
import { ListSystemUserWhiteListResponse } from './model/ListSystemUserWhiteListResponse';
import { ListTwoFactorLoginHostRequest } from './model/ListTwoFactorLoginHostRequest';
import { ListTwoFactorLoginHostResponse } from './model/ListTwoFactorLoginHostResponse';
import { ListUserChangeHistoriesRequest } from './model/ListUserChangeHistoriesRequest';
import { ListUserChangeHistoriesResponse } from './model/ListUserChangeHistoriesResponse';
import { ListUserStatisticsRequest } from './model/ListUserStatisticsRequest';
import { ListUserStatisticsResponse } from './model/ListUserStatisticsResponse';
import { ListUsersRequest } from './model/ListUsersRequest';
import { ListUsersResponse } from './model/ListUsersResponse';
import { ListVulHandleHistoryRequest } from './model/ListVulHandleHistoryRequest';
import { ListVulHandleHistoryResponse } from './model/ListVulHandleHistoryResponse';
import { ListVulHostsRequest } from './model/ListVulHostsRequest';
import { ListVulHostsResponse } from './model/ListVulHostsResponse';
import { ListVulScanTaskHostRequest } from './model/ListVulScanTaskHostRequest';
import { ListVulScanTaskHostResponse } from './model/ListVulScanTaskHostResponse';
import { ListVulScanTaskRequest } from './model/ListVulScanTaskRequest';
import { ListVulScanTaskResponse } from './model/ListVulScanTaskResponse';
import { ListVulnerabilitiesRequest } from './model/ListVulnerabilitiesRequest';
import { ListVulnerabilitiesResponse } from './model/ListVulnerabilitiesResponse';
import { ListVulnerabilityCveRequest } from './model/ListVulnerabilityCveRequest';
import { ListVulnerabilityCveResponse } from './model/ListVulnerabilityCveResponse';
import { ListWeakPasswordUsersRequest } from './model/ListWeakPasswordUsersRequest';
import { ListWeakPasswordUsersResponse } from './model/ListWeakPasswordUsersResponse';
import { ListWtpProtectHostRequest } from './model/ListWtpProtectHostRequest';
import { ListWtpProtectHostResponse } from './model/ListWtpProtectHostResponse';
import { LoginCommonIpResponseInfo } from './model/LoginCommonIpResponseInfo';
import { LoginCommonLocationResponseInfo } from './model/LoginCommonLocationResponseInfo';
import { LoginIp } from './model/LoginIp';
import { LoginType } from './model/LoginType';
import { LoginUserName } from './model/LoginUserName';
import { LoginWhiteIpResponseInfo } from './model/LoginWhiteIpResponseInfo';
import { LoginWhiteListRequestInfo } from './model/LoginWhiteListRequestInfo';
import { LoginWhiteListResponseInfo } from './model/LoginWhiteListResponseInfo';
import { MalwareName } from './model/MalwareName';
import { MalwareType } from './model/MalwareType';
import { ManualVulScanRequestInfo } from './model/ManualVulScanRequestInfo';
import { Memo } from './model/Memo';
import { ModifyDecoyPortPolicyRequest } from './model/ModifyDecoyPortPolicyRequest';
import { ModifyDecoyPortPolicyResponse } from './model/ModifyDecoyPortPolicyResponse';
import { NextStartTime } from './model/NextStartTime';
import { OSVersion } from './model/OSVersion';
import { OccurTime } from './model/OccurTime';
import { OperateAntiVirusResultRequestInfo } from './model/OperateAntiVirusResultRequestInfo';
import { OperateEventRequestInfo } from './model/OperateEventRequestInfo';
import { OperateResultRequestInfo } from './model/OperateResultRequestInfo';
import { OperateType } from './model/OperateType';
import { OperationDefinitionInfo } from './model/OperationDefinitionInfo';
import { OperationDefinitionRequestInfo } from './model/OperationDefinitionRequestInfo';
import { OperationLogInfo } from './model/OperationLogInfo';
import { OrganizationNodeResponseInfo } from './model/OrganizationNodeResponseInfo';
import { OsName } from './model/OsName';
import { OsType } from './model/OsType';
import { PolicyDetailsPortList } from './model/PolicyDetailsPortList';
import { PolicyGroupId } from './model/PolicyGroupId';
import { PolicyGroupName } from './model/PolicyGroupName';
import { PolicyGroupResponseInfo } from './model/PolicyGroupResponseInfo';
import { PolicyId } from './model/PolicyId';
import { PolicyInfo } from './model/PolicyInfo';
import { PolicyListDataList } from './model/PolicyListDataList';
import { PolicyName } from './model/PolicyName';
import { PortHostResponseInfo } from './model/PortHostResponseInfo';
import { PortResponseInfo } from './model/PortResponseInfo';
import { PortStatisticResponseInfo } from './model/PortStatisticResponseInfo';
import { PrivateImageRepositoryInfo } from './model/PrivateImageRepositoryInfo';
import { PrivateIp } from './model/PrivateIp';
import { ProcessPid } from './model/ProcessPid';
import { ProcessStatisticResponseInfo } from './model/ProcessStatisticResponseInfo';
import { ProcessesHostResponseInfo } from './model/ProcessesHostResponseInfo';
import { ProtectStatus } from './model/ProtectStatus';
import { ProtectionInfoRequestInfo } from './model/ProtectionInfoRequestInfo';
import { ProtectionPolicyInfo } from './model/ProtectionPolicyInfo';
import { ProtectionProxyInfoRequestInfo } from './model/ProtectionProxyInfoRequestInfo';
import { ProtectionServeInfo } from './model/ProtectionServeInfo';
import { ProtectionServerInfo } from './model/ProtectionServerInfo';
import { ProtectionServerInfoBackupError } from './model/ProtectionServerInfoBackupError';
import { PublicIp } from './model/PublicIp';
import { PwdPolicyInfoResponseInfo } from './model/PwdPolicyInfoResponseInfo';
import { QuotaResourcesResponseInfo } from './model/QuotaResourcesResponseInfo';
import { QuotaStatisticsResponseInfo } from './model/QuotaStatisticsResponseInfo';
import { RaspProtectHistoryResponseInfo } from './model/RaspProtectHistoryResponseInfo';
import { RecentTime } from './model/RecentTime';
import { Remarks } from './model/Remarks';
import { RemoveAlarmWhiteListRequest } from './model/RemoveAlarmWhiteListRequest';
import { RemoveAlarmWhiteListRequestInfo } from './model/RemoveAlarmWhiteListRequestInfo';
import { RemoveAlarmWhiteListResponse } from './model/RemoveAlarmWhiteListResponse';
import { RemoveLoginWhiteListRequest } from './model/RemoveLoginWhiteListRequest';
import { RemoveLoginWhiteListRequestInfo } from './model/RemoveLoginWhiteListRequestInfo';
import { RemoveLoginWhiteListResponse } from './model/RemoveLoginWhiteListResponse';
import { RemoveSystemUserWhiteListRequest } from './model/RemoveSystemUserWhiteListRequest';
import { RemoveSystemUserWhiteListRequestInfo } from './model/RemoveSystemUserWhiteListRequestInfo';
import { RemoveSystemUserWhiteListResponse } from './model/RemoveSystemUserWhiteListResponse';
import { RepairPriorityListInfo } from './model/RepairPriorityListInfo';
import { ResourceInfo } from './model/ResourceInfo';
import { ResourceProductDataObjectInfo } from './model/ResourceProductDataObjectInfo';
import { ResourceQuotasInfo } from './model/ResourceQuotasInfo';
import { ResourceTagInfo } from './model/ResourceTagInfo';
import { ResultDetailResponseInfo } from './model/ResultDetailResponseInfo';
import { ResultFileResponseInfo } from './model/ResultFileResponseInfo';
import { ResultId } from './model/ResultId';
import { ResultResourceResponseInfo } from './model/ResultResourceResponseInfo';
import { RiskHostNum } from './model/RiskHostNum';
import { RunDuration } from './model/RunDuration';
import { RunImageSynchronizeRequest } from './model/RunImageSynchronizeRequest';
import { RunImageSynchronizeRequestInfo } from './model/RunImageSynchronizeRequestInfo';
import { RunImageSynchronizeResponse } from './model/RunImageSynchronizeResponse';
import { RuntimeRequestBody } from './model/RuntimeRequestBody';
import { ScanDir } from './model/ScanDir';
import { ScanFileNum } from './model/ScanFileNum';
import { ScanHour } from './model/ScanHour';
import { ScanMinute } from './model/ScanMinute';
import { ScanPeriod } from './model/ScanPeriod';
import { ScanPeriodDate } from './model/ScanPeriodDate';
import { ScanProgress } from './model/ScanProgress';
import { ScanTime } from './model/ScanTime';
import { ScanType } from './model/ScanType';
import { SecurityCheckHostInfoResponseInfo } from './model/SecurityCheckHostInfoResponseInfo';
import { SecurityCheckInfoResponseInfo } from './model/SecurityCheckInfoResponseInfo';
import { ServerAppStatusResponseInfo } from './model/ServerAppStatusResponseInfo';
import { SetRaspSwitchRequest } from './model/SetRaspSwitchRequest';
import { SetRaspSwitchRequestInfo } from './model/SetRaspSwitchRequestInfo';
import { SetRaspSwitchResponse } from './model/SetRaspSwitchResponse';
import { SetTwoFactorLoginConfigRequest } from './model/SetTwoFactorLoginConfigRequest';
import { SetTwoFactorLoginConfigRequestBody } from './model/SetTwoFactorLoginConfigRequestBody';
import { SetTwoFactorLoginConfigResponse } from './model/SetTwoFactorLoginConfigResponse';
import { SetWtpProtectionStatusInfoRequest } from './model/SetWtpProtectionStatusInfoRequest';
import { SetWtpProtectionStatusInfoResponse } from './model/SetWtpProtectionStatusInfoResponse';
import { SetWtpProtectionStatusRequestInfo } from './model/SetWtpProtectionStatusRequestInfo';
import { Severity } from './model/Severity';
import { ShowAntivirusStatisticRequest } from './model/ShowAntivirusStatisticRequest';
import { ShowAntivirusStatisticResponse } from './model/ShowAntivirusStatisticResponse';
import { ShowAppRaspSwitchStatusRequest } from './model/ShowAppRaspSwitchStatusRequest';
import { ShowAppRaspSwitchStatusResponse } from './model/ShowAppRaspSwitchStatusResponse';
import { ShowAssetStatisticRequest } from './model/ShowAssetStatisticRequest';
import { ShowAssetStatisticResponse } from './model/ShowAssetStatisticResponse';
import { ShowBackupPolicyInfoRequest } from './model/ShowBackupPolicyInfoRequest';
import { ShowBackupPolicyInfoResponse } from './model/ShowBackupPolicyInfoResponse';
import { ShowCheckRuleDetailRequest } from './model/ShowCheckRuleDetailRequest';
import { ShowCheckRuleDetailResponse } from './model/ShowCheckRuleDetailResponse';
import { ShowDecoyPortPolicyDetailsRequest } from './model/ShowDecoyPortPolicyDetailsRequest';
import { ShowDecoyPortPolicyDetailsResponse } from './model/ShowDecoyPortPolicyDetailsResponse';
import { ShowImageCheckRuleDetailRequest } from './model/ShowImageCheckRuleDetailRequest';
import { ShowImageCheckRuleDetailResponse } from './model/ShowImageCheckRuleDetailResponse';
import { ShowPeriodResponseInfo } from './model/ShowPeriodResponseInfo';
import { ShowProductdataOfferingInfosRequest } from './model/ShowProductdataOfferingInfosRequest';
import { ShowProductdataOfferingInfosResponse } from './model/ShowProductdataOfferingInfosResponse';
import { ShowRaspPolicyDetailRequest } from './model/ShowRaspPolicyDetailRequest';
import { ShowRaspPolicyDetailResponse } from './model/ShowRaspPolicyDetailResponse';
import { ShowRaspProtectStatisticsRequest } from './model/ShowRaspProtectStatisticsRequest';
import { ShowRaspProtectStatisticsResponse } from './model/ShowRaspProtectStatisticsResponse';
import { ShowRaspServerDetailRequest } from './model/ShowRaspServerDetailRequest';
import { ShowRaspServerDetailResponse } from './model/ShowRaspServerDetailResponse';
import { ShowResourceQuotasRequest } from './model/ShowResourceQuotasRequest';
import { ShowResourceQuotasResponse } from './model/ShowResourceQuotasResponse';
import { ShowRiskConfigDetailRequest } from './model/ShowRiskConfigDetailRequest';
import { ShowRiskConfigDetailResponse } from './model/ShowRiskConfigDetailResponse';
import { ShowSingleBackupPolicyInfoRequest } from './model/ShowSingleBackupPolicyInfoRequest';
import { ShowSingleBackupPolicyInfoResponse } from './model/ShowSingleBackupPolicyInfoResponse';
import { ShowVulScanPolicyRequest } from './model/ShowVulScanPolicyRequest';
import { ShowVulScanPolicyResponse } from './model/ShowVulScanPolicyResponse';
import { ShowVulStaticsRequest } from './model/ShowVulStaticsRequest';
import { ShowVulStaticsResponse } from './model/ShowVulStaticsResponse';
import { SrcIp } from './model/SrcIp';
import { StartProtectionRequest } from './model/StartProtectionRequest';
import { StartProtectionResponse } from './model/StartProtectionResponse';
import { StartTime } from './model/StartTime';
import { StartType } from './model/StartType';
import { StopProtectionRequest } from './model/StopProtectionRequest';
import { StopProtectionResponse } from './model/StopProtectionResponse';
import { SupportOs } from './model/SupportOs';
import { SupportVersion } from './model/SupportVersion';
import { SwitchDecoyPortHostPolicyRequest } from './model/SwitchDecoyPortHostPolicyRequest';
import { SwitchDecoyPortHostPolicyResponse } from './model/SwitchDecoyPortHostPolicyResponse';
import { SwitchHostsProtectStatusRequest } from './model/SwitchHostsProtectStatusRequest';
import { SwitchHostsProtectStatusRequestInfo } from './model/SwitchHostsProtectStatusRequestInfo';
import { SwitchHostsProtectStatusResponse } from './model/SwitchHostsProtectStatusResponse';
import { SystemUserName } from './model/SystemUserName';
import { SystemUserWhiteListRequestInfo } from './model/SystemUserWhiteListRequestInfo';
import { SystemUserWhiteListResponseInfo } from './model/SystemUserWhiteListResponseInfo';
import { TagInfo } from './model/TagInfo';
import { TaskId } from './model/TaskId';
import { TaskName } from './model/TaskName';
import { TaskStatus } from './model/TaskStatus';
import { TimezoneOffset } from './model/TimezoneOffset';
import { TotalNum } from './model/TotalNum';
import { TrustProcessInfo } from './model/TrustProcessInfo';
import { TwoFactorLoginHostResponseInfo } from './model/TwoFactorLoginHostResponseInfo';
import { UnprotectHostNum } from './model/UnprotectHostNum';
import { UpdateAgentDaemonsetRequest } from './model/UpdateAgentDaemonsetRequest';
import { UpdateAgentDaemonsetResponse } from './model/UpdateAgentDaemonsetResponse';
import { UpdateBackupPolicyInfoRequest } from './model/UpdateBackupPolicyInfoRequest';
import { UpdateBackupPolicyInfoResponse } from './model/UpdateBackupPolicyInfoResponse';
import { UpdateBackupPolicyRequestInfo } from './model/UpdateBackupPolicyRequestInfo';
import { UpdateBackupPolicyRequestInfo1 } from './model/UpdateBackupPolicyRequestInfo1';
import { UpdateDaemonsetRequestBody } from './model/UpdateDaemonsetRequestBody';
import { UpdateDaemonsetRequestBodyScheduleInfo } from './model/UpdateDaemonsetRequestBodyScheduleInfo';
import { UpdateProtectionPolicyInfoRequestInfo } from './model/UpdateProtectionPolicyInfoRequestInfo';
import { UpdateProtectionPolicyRequest } from './model/UpdateProtectionPolicyRequest';
import { UpdateProtectionPolicyResponse } from './model/UpdateProtectionPolicyResponse';
import { UpdateSystemUserWhiteListRequest } from './model/UpdateSystemUserWhiteListRequest';
import { UpdateSystemUserWhiteListRequestInfo } from './model/UpdateSystemUserWhiteListRequestInfo';
import { UpdateSystemUserWhiteListResponse } from './model/UpdateSystemUserWhiteListResponse';
import { UpdateTime } from './model/UpdateTime';
import { UserChangeHistoryResponseInfo } from './model/UserChangeHistoryResponseInfo';
import { UserName } from './model/UserName';
import { UserResponseInfo } from './model/UserResponseInfo';
import { UserStatisticInfoResponseInfo } from './model/UserStatisticInfoResponseInfo';
import { VirusNum } from './model/VirusNum';
import { VulCveInfo } from './model/VulCveInfo';
import { VulHostInfo } from './model/VulHostInfo';
import { VulInfo } from './model/VulInfo';
import { VulInfoCveList } from './model/VulInfoCveList';
import { VulOperateInfo } from './model/VulOperateInfo';
import { VulScanTaskHostInfo } from './model/VulScanTaskHostInfo';
import { VulScanTaskHostInfoFailedReasons } from './model/VulScanTaskHostInfoFailedReasons';
import { VulScanTaskHostInfoScanVulList } from './model/VulScanTaskHostInfoScanVulList';
import { VulScanTaskHostInfoVulScanDetails } from './model/VulScanTaskHostInfoVulScanDetails';
import { VulScanTaskInfo } from './model/VulScanTaskInfo';
import { VulhandleHistoryResponseInfoDataList } from './model/VulhandleHistoryResponseInfoDataList';
import { VulnerabilityHostNumberInfo } from './model/VulnerabilityHostNumberInfo';
import { WeakPwdAccountInfoResponseInfo } from './model/WeakPwdAccountInfoResponseInfo';
import { WeakPwdListInfoResponseInfo } from './model/WeakPwdListInfoResponseInfo';
import { WhetherPaidTask } from './model/WhetherPaidTask';
import { WhetherUsingQuota } from './model/WhetherUsingQuota';
import { WtpProtectHostResponseInfo } from './model/WtpProtectHostResponseInfo';
import { WtpRemoteBackupResponseInfo } from './model/WtpRemoteBackupResponseInfo';

export class HssClient {
    public static newBuilder(): ClientBuilder<HssClient> {
            let client = new ClientBuilder<HssClient>(newClient);
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
     * 新建cce集成防护配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建cce集成防护配置
     * @param {string} region Region ID
     * @param {CceIntegrationProtectionRequestBody} addCceIntegrationProtectionRequestBody 新建cce集成防护配置
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addCceIntegrationProtection(addCceIntegrationProtectionRequest?: AddCceIntegrationProtectionRequest): Promise<AddCceIntegrationProtectionResponse> {
        const options = ParamCreater().addCceIntegrationProtection(addCceIntegrationProtectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建服务器组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务器组
     * @param {string} region Region ID
     * @param {AddHostsGroupRequestInfo} addHostsGroupRequestBody 创建服务器组的请求体
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [contentType] 缺省值:application/json; charset&#x3D;utf-8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addHostsGroup(addHostsGroupRequest?: AddHostsGroupRequest): Promise<AddHostsGroupResponse> {
        const options = ParamCreater().addHostsGroup(addHostsGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加登录白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加登录白名单
     * @param {AddLoginWhiteListRequestInfo} addLoginWhiteListRequestBody 登录白名单
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addLoginWhiteList(addLoginWhiteListRequest?: AddLoginWhiteListRequest): Promise<AddLoginWhiteListResponse> {
        const options = ParamCreater().addLoginWhiteList(addLoginWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加防护策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加防护策略
     * @param {AddProtectionPolicyInfoRequestInfo} addProtectionPolicyRequestBody 需要添加的防护策略的请求体
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [region] region id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addProtectionPolicy(addProtectionPolicyRequest?: AddProtectionPolicyRequest): Promise<AddProtectionPolicyResponse> {
        const options = ParamCreater().addProtectionPolicy(addProtectionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加系统用户白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加系统用户白名单
     * @param {AddSystemUserWhiteListRequestInfo} addSystemUserWhiteListRequestBody 系统用户白名单
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addSystemUserWhiteList(addSystemUserWhiteListRequest?: AddSystemUserWhiteListRequest): Promise<AddSystemUserWhiteListResponse> {
        const options = ParamCreater().addSystemUserWhiteList(addSystemUserWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 部署策略组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部署策略组
     * @param {string} region Region ID
     * @param {AssociatePolicyGroupRequestInfo} associatePolicyGroupRequestBody request
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [contentType] 缺省值:application/json; charset&#x3D;utf-8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associatePolicyGroup(associatePolicyGroupRequest?: AssociatePolicyGroupRequest): Promise<AssociatePolicyGroupResponse> {
        const options = ParamCreater().associatePolicyGroup(associatePolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加账号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加账号
     * @param {string} region Region ID
     * @param {BatchAddAccountsRequestInfo} batchAddAccountsRequestBody Batch add Accounts
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddAccounts(batchAddAccountsRequest?: BatchAddAccountsRequest): Promise<BatchAddAccountsResponse> {
        const options = ParamCreater().batchAddAccounts(batchAddAccountsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建标签
     * @param {string} resourceType 由标签管理服务定义的资源类别，企业主机安全服务调用此接口时资源类别为hss
     * @param {string} resourceId 由标签管理服务定义的资源id，企业主机安全服务调用此接口时资源id为配额ID
     * @param {BatchCreateTagsRequestInfo} batchCreateTagsRequestBody 批量创建标签的请求体
     * @param {string} [contentType] 缺省值:application/json; charset&#x3D;utf-8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateTags(batchCreateTagsRequest?: BatchCreateTagsRequest): Promise<BatchCreateTagsResponse> {
        const options = ParamCreater().batchCreateTags(batchCreateTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 镜像仓库镜像批量扫描
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 镜像仓库镜像批量扫描
     * @param {BatchScanPrivateImageRequestInfo} batchScanSwrImageRequestBody request
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchScanSwrImage(batchScanSwrImageRequest?: BatchScanSwrImageRequest): Promise<BatchScanSwrImageResponse> {
        const options = ParamCreater().batchScanSwrImage(batchScanSwrImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑自定义查杀策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑自定义查杀策略
     * @param {ChangeAntivirusPolicyRequestInfo} changeAntivirusPolicyRequestBody 任务详情
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeAntivirusPolicy(changeAntivirusPolicyRequest?: ChangeAntivirusPolicyRequest): Promise<ChangeAntivirusPolicyResponse> {
        const options = ParamCreater().changeAntivirusPolicy(changeAntivirusPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除已拦截IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除已拦截IP
     * @param {string} region Region ID
     * @param {ChangeBlockedIpRequestInfo} changeBlockedIpRequestBody 解除拦截IP列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeBlockedIp(changeBlockedIpRequest?: ChangeBlockedIpRequest): Promise<ChangeBlockedIpResponse> {
        const options = ParamCreater().changeBlockedIp(changeBlockedIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对未通过的配置检查项进行忽略/取消忽略/修复/验证操作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对未通过的配置检查项进行忽略/取消忽略/修复/验证操作
     * @param {string} action 动作 - \&quot;ignore\&quot; - \&quot;unignore\&quot; - \&quot;fix\&quot; - \&quot;verify\&quot;
     * @param {CheckRuleIdListRequestInfo} changeCheckRuleActionRequestBody 要执行操作的检查项ID列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostId] 主机ID，不赋值时，查租户所有主机
     * @param {boolean} [checkCce] 是否校验cce
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeCheckRuleAction(changeCheckRuleActionRequest?: ChangeCheckRuleActionRequest): Promise<ChangeCheckRuleActionResponse> {
        const options = ParamCreater().changeCheckRuleAction(changeCheckRuleActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 处理告警事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 处理告警事件
     * @param {string} region Region ID
     * @param {ChangeEventRequestInfo} changeEventRequestBody 处理告警事件列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [containerName] 容器实例名称
     * @param {string} [containerId] 容器Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeEvent(changeEventRequest?: ChangeEventRequest): Promise<ChangeEventResponse> {
        const options = ParamCreater().changeEvent(changeEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑服务器组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑服务器组
     * @param {string} region Region ID
     * @param {ChangeHostsGroupRequestInfo} changeHostsGroupRequestBody request
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [contentType] 缺省值:application/json; charset&#x3D;utf-8
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeHostsGroup(changeHostsGroupRequest?: ChangeHostsGroupRequest): Promise<ChangeHostsGroupResponse> {
        const options = ParamCreater().changeHostsGroup(changeHostsGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复已隔离文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复已隔离文件
     * @param {string} region Region ID
     * @param {ChangeIsolatedFileRequestInfo} changeIsolatedFileRequestBody 恢复已隔离文件列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeIsolatedFile(changeIsolatedFileRequest?: ChangeIsolatedFileRequest): Promise<ChangeIsolatedFileResponse> {
        const options = ParamCreater().changeIsolatedFile(changeIsolatedFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改漏洞扫描策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改漏洞扫描策略
     * @param {ChangeVulScanPolicyRequestInfo} changeVulScanPolicyRequestBody 修改漏洞扫描策略的请求体
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeVulScanPolicy(changeVulScanPolicyRequest?: ChangeVulScanPolicyRequest): Promise<ChangeVulScanPolicyResponse> {
        const options = ParamCreater().changeVulScanPolicy(changeVulScanPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改漏洞的状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改漏洞的状态
     * @param {ChangeVulStatusRequestInfo} changeVulStatusRequestBody vul_operate请求体
     * @param {string} [contentType] 缺省值:application/json; charset&#x3D;utf-8
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeVulStatus(changeVulStatusRequest?: ChangeVulStatusRequest): Promise<ChangeVulStatusResponse> {
        const options = ParamCreater().changeVulStatus(changeVulStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义查杀策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义查杀策略
     * @param {CreateAntiVirusPolicyRequestBody} createAntiVirusPolicyRequestBody 任务详情
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAntiVirusPolicy(createAntiVirusPolicyRequest?: CreateAntiVirusPolicyRequest): Promise<CreateAntiVirusPolicyResponse> {
        const options = ParamCreater().createAntiVirusPolicy(createAntiVirusPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建病毒扫描任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建病毒扫描任务
     * @param {CreateAntiVirusTaskRequestInfo} createAntiVirusTaskRequestBody 任务详情
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAntiVirusTask(createAntiVirusTaskRequest?: CreateAntiVirusTaskRequest): Promise<CreateAntiVirusTaskResponse> {
        const options = ParamCreater().createAntiVirusTask(createAntiVirusTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增动态端口蜜罐策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增动态端口蜜罐策略
     * @param {HoneypotPortPolicyContent} createDecoyPortPolicyRequestBody request
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDecoyPortPolicy(createDecoyPortPolicyRequest?: CreateDecoyPortPolicyRequest): Promise<CreateDecoyPortPolicyResponse> {
        const options = ParamCreater().createDecoyPortPolicy(createDecoyPortPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * HSS服务创建订单订购配额，只支持包周期计费模式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary HSS服务创建订单订购配额
     * @param {string} region Region ID
     * @param {CreateQuotasOrderRequestInfo} createQuotasOrderRequestBody 创建订单订购配额请求体对象
     * @param {string} [contentType] 缺省值:application/json; charset&#x3D;utf-8
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createQuotasOrder(createQuotasOrderRequest?: CreateQuotasOrderRequest): Promise<CreateQuotasOrderResponse> {
        const options = ParamCreater().createQuotasOrder(createQuotasOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建漏洞扫描任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建漏洞扫描任务
     * @param {ManualVulScanRequestInfo} createVulnerabilityScanTaskRequestBody 手动检测漏洞请求体
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVulnerabilityScanTask(createVulnerabilityScanTaskRequest?: CreateVulnerabilityScanTaskRequest): Promise<CreateVulnerabilityScanTaskResponse> {
        const options = ParamCreater().createVulnerabilityScanTask(createVulnerabilityScanTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除账号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除账号
     * @param {string} region Region ID
     * @param {DeleteAccountRequestInfo} deleteAccountRequestBody Delete Account
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAccount(deleteAccountRequest?: DeleteAccountRequest): Promise<DeleteAccountResponse> {
        const options = ParamCreater().deleteAccount(deleteAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除集群daemonset
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群daemonset
     * @param {string} region Region ID
     * @param {string} clusterId 集群id
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [invokedService] 调用服务,默认hss，cce集成防护调用场景使用，包括:    - hss： hss服务    - cce： cce服务，cce集成防护调用需要传参cce
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAgentDaemonset(deleteAgentDaemonsetRequest?: DeleteAgentDaemonsetRequest): Promise<DeleteAgentDaemonsetResponse> {
        const options = ParamCreater().deleteAgentDaemonset(deleteAgentDaemonsetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义查杀策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义查杀策略
     * @param {DeleteAntivirusPolicyRequestInfo} deleteAntivirusPolicyRequestBody 任务详情
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAntivirusPolicy(deleteAntivirusPolicyRequest?: DeleteAntivirusPolicyRequest): Promise<DeleteAntivirusPolicyResponse> {
        const options = ParamCreater().deleteAntivirusPolicy(deleteAntivirusPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭主机动态端口蜜罐策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭主机动态端口蜜罐策略
     * @param {string} policyId policy ID
     * @param {string} hostId 服务器ID,可填多个，通过,分隔
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDecoyPortHostPolicy(deleteDecoyPortHostPolicyRequest?: DeleteDecoyPortHostPolicyRequest): Promise<DeleteDecoyPortHostPolicyResponse> {
        const options = ParamCreater().deleteDecoyPortHostPolicy(deleteDecoyPortHostPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除动态端口蜜罐策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除动态端口蜜罐策略
     * @param {string} policyId policy ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDecoyPortPolicy(deleteDecoyPortPolicyRequest?: DeleteDecoyPortPolicyRequest): Promise<DeleteDecoyPortPolicyResponse> {
        const options = ParamCreater().deleteDecoyPortPolicy(deleteDecoyPortPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务器组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务器组
     * @param {string} region Region ID
     * @param {string} groupId 服务器组ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHostsGroup(deleteHostsGroupRequest?: DeleteHostsGroupRequest): Promise<DeleteHostsGroupResponse> {
        const options = ParamCreater().deleteHostsGroup(deleteHostsGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除已隔离文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除已隔离文件
     * @param {DeleteIsolatedFileRequestInfo} deleteIsolatedFileRequestBody 删除已隔离文件列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIsolatedFile(deleteIsolatedFileRequest?: DeleteIsolatedFileRequest): Promise<DeleteIsolatedFileResponse> {
        const options = ParamCreater().deleteIsolatedFile(deleteIsolatedFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除防护策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除防护策略
     * @param {string} enterpriseProjectId 租户企业项目ID
     * @param {string} policyId 防护策略id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProtectionPolicy(deleteProtectionPolicyRequest?: DeleteProtectionPolicyRequest): Promise<DeleteProtectionPolicyResponse> {
        const options = ParamCreater().deleteProtectionPolicy(deleteProtectionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除单个资源下的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceType 由标签管理服务定义的资源类别，企业主机安全服务调用此接口时资源类别为hss
     * @param {string} resourceId 由标签管理服务定义的资源id，企业主机安全服务调用此接口时资源id为配额ID
     * @param {string} key 待删除的key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceInstanceTag(deleteResourceInstanceTagRequest?: DeleteResourceInstanceTagRequest): Promise<DeleteResourceInstanceTagResponse> {
        const options = ParamCreater().deleteResourceInstanceTag(deleteResourceInstanceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出病毒扫描结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出病毒扫描结果列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {ExportAntiVirusResultRequestBody} exportAntiVirusResultRequestBody 导出数据的表头字段列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 服务器名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {Array<string>} [severityList] 威胁等级，包含如下:   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 致命
     * @param {string} [assetValue] 资产重要性，包含如下3种   - important ：重要资产   - common ：一般资产   - test ：测试资产
     * @param {string} [malwareName] 病毒名称
     * @param {string} [filePath] 文件路径
     * @param {number} [exportSize] 导出条数
     * @param {string} [fileHash] 文件hash,当前为sha256
     * @param {string} [taskName] 任务名称
     * @param {boolean} [manualIsolate] 是否使用手动隔离按钮
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportAntiVirusResult(exportAntiVirusResultRequest?: ExportAntiVirusResultRequest): Promise<ExportAntiVirusResultResponse> {
        const options = ParamCreater().exportAntiVirusResult(exportAntiVirusResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出漏洞及漏洞影响的主机的相关信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出漏洞及漏洞影响的主机的相关信息
     * @param {number} exportSize 导出数据条数
     * @param {string} category 导出漏洞数据类别:   - vul ：漏洞   - host: 主机漏洞
     * @param {ExportVulRequestBody} exportVulsRequestBody 导出数据的表头字段列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [type] 漏洞类型，包含如下：   -linux_vul : linux漏洞   -windows_vul : windows漏洞   -web_cms : Web-CMS漏洞   -app_vul : 应用漏洞   -urgent_vul : 应急漏洞
     * @param {string} [vulId] 漏洞ID
     * @param {string} [vulName] 漏洞名称
     * @param {string} [hostId] 主机id，导出单台主机漏洞时会用到
     * @param {number} [limit] limit
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [repairPriority] 修复优先级 Critical 紧急 High  高 Medium 中 Low 低
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [cveId] 漏洞编号
     * @param {string} [labelList] 漏洞标签
     * @param {string} [status] 漏洞状态
     * @param {string} [assetValue] 资产重要性 important common test
     * @param {string} [groupName] 服务器组名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportVuls(exportVulsRequest?: ExportVulsRequest): Promise<ExportVulsResponse> {
        const options = ParamCreater().exportVuls(exportVulsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 处置病毒扫描结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 处置病毒扫描结果
     * @param {OperateAntiVirusResultRequestInfo} handleAntiVirusResultRequestBody 处置详情
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public handleAntiVirusResult(handleAntiVirusResultRequest?: HandleAntiVirusResultRequest): Promise<HandleAntiVirusResultResponse> {
        const options = ParamCreater().handleAntiVirusResult(handleAntiVirusResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询多账号列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询多账号列表
     * @param {string} region Region ID
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccounts(listAccountsRequest?: ListAccountsRequest): Promise<ListAccountsResponse> {
        const options = ParamCreater().listAccounts(listAccountsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询agent安装脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询agent安装脚本
     * @param {string} region Region ID
     * @param {'x86_64' | 'aarch64'} osArch 系统架构：x86_64和aarch64；当os_type为Windows时，只能选择x86_64
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {'Windows' | 'Linux'} [osType] os类型：Windows和Linux
     * @param {boolean} [outsideHost] 是否非华为云
     * @param {string} [outsideGroupId] 服务器组ID
     * @param {boolean} [batchInstall] 是否批量安装
     * @param {'password' | 'ssh_key'} [type] 类型：password和ssh_key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgentInstallScript(listAgentInstallScriptRequest?: ListAgentInstallScriptRequest): Promise<ListAgentInstallScriptResponse> {
        const options = ParamCreater().listAgentInstallScript(listAgentInstallScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警白名单列表
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hash] 事件白名单SHA256
     * @param {number} [eventType] 事件类型，包含如下:   - 1001 : 通用恶意软件   - 1002 : 病毒   - 1003 : 蠕虫   - 1004 : 木马   - 1005 : 僵尸网络   - 1006 : 后门   - 1010 : Rootkit   - 1011 : 勒索软件   - 1012 ：黑客工具   - 1015 : Webshell   - 1016 : 挖矿   - 1017 : 反弹Shell   - 2001 : 一般漏洞利用   - 2012 : 远程代码执行   - 2047 : Redis漏洞利用   - 2048 : Hadoop漏洞利用   - 2049 : MySQL漏洞利用   - 3002 : 文件提权   - 3003 : 进程提权   - 3004 : 关键文件变更   - 3005 : 文件/目录变更   - 3007 : 进程异常行为   - 3015 : 高危命令执行   - 3018 : 异常Shell   - 3027 : Crontab可疑任务   - 3029 ：系统安全防护被禁用   - 3030 ：备份删除   - 3031 ：异常注册表操作   - 3036 : 容器镜像阻断   - 4002 : 暴力破解   - 4004 : 异常登录   - 4006 : 非法系统账号   - 4014 : 用户账号添加   - 4020 : 用户密码窃取   - 6002 : 端口扫描   - 6003 : 主机扫描   - 13001 : Kubernetes事件删除   - 13002 : Pod异常行为   - 13003 : 枚举用户信息   - 13004 : 绑定集群用户角色
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmWhiteList(listAlarmWhiteListRequest?: ListAlarmWhiteListRequest): Promise<ListAlarmWhiteListResponse> {
        const options = ParamCreater().listAlarmWhiteList(listAlarmWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询病毒查杀可选服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询病毒查杀可选服务器列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} scanType 任务类型，包含如下:   - quick ：快速扫描   - full : 全盘扫描   - custom : 自定义扫描
     * @param {string} startType 启动类型，包含如下:   - now ：立即启动   - period : 周期启动
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostId] 服务器ID
     * @param {string} [hostName] 服务器名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [groupId] 服务器组ID
     * @param {string} [policyId] 策略ID
     * @param {number} [nextStartTime] 下次启动时间，毫秒
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntiVirusHost(listAntiVirusHostRequest?: ListAntiVirusHostRequest): Promise<ListAntiVirusHostResponse> {
        const options = ParamCreater().listAntiVirusHost(listAntiVirusHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义查杀策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义查杀策略列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [policyName] 策略名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntiVirusPolicy(listAntiVirusPolicyRequest?: ListAntiVirusPolicyRequest): Promise<ListAntiVirusPolicyResponse> {
        const options = ParamCreater().listAntiVirusPolicy(listAntiVirusPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询病毒扫描结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询病毒扫描结果列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 服务器名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {Array<string>} [severityList] 威胁等级，包含如下:   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 致命
     * @param {string} [assetValue] 资产重要性，包含如下3种   - important ：重要资产   - common ：一般资产   - test ：测试资产
     * @param {string} [malwareName] 病毒名称
     * @param {string} [filePath] 文件路径
     * @param {string} [fileHash] 文件hash,当前为sha256
     * @param {string} [taskName] 任务名称
     * @param {boolean} [manualIsolate] 是否使用手动隔离按钮
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntiVirusResult(listAntiVirusResultRequest?: ListAntiVirusResultRequest): Promise<ListAntiVirusResultResponse> {
        const options = ParamCreater().listAntiVirusResult(listAntiVirusResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看病毒扫描任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看病毒扫描任务列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {boolean} whetherPaidTask 此次扫描任务是否付费
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [taskName] 任务名称
     * @param {number} [lastDays] 查询时间范围天数，与自定义查询时间begin_time，end_time互斥
     * @param {string} [beginTime] 自定义查询时间，与查询时间范围天数互斥，查询时间段的起始时间，毫秒级时间戳，end_time减去begin_time小于等于2天，与查询时间范围天数互斥
     * @param {string} [endTime] 自定义时间，查询时间段的终止时间，毫秒级时间戳，end_time减去begin_time小于等于2天，与查询时间范围天数互斥
     * @param {string} [taskStatus] 任务状态，包含如下4种   - scanning ：扫描中   - cancel ：已取消   - fail ：扫描失败   - finish ：已完成
     * @param {string} [hostName] 服务器名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {Array<string>} [hostTaskStatus] 服务器扫描状态，包含如下4种   - scanning ：扫描中   - success ：扫描成功   - fail ：扫描失败   - cancel ：取消扫描
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntiVirusTask(listAntiVirusTaskRequest?: ListAntiVirusTaskRequest): Promise<ListAntiVirusTaskResponse> {
        const options = ParamCreater().listAntiVirusTask(listAntiVirusTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询病毒扫描历史处置记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询病毒扫描历史处置记录列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [malwareName] 病毒名称
     * @param {string} [filePath] 文件路径
     * @param {Array<string>} [severityList] 威胁等级，包含如下:   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 致命
     * @param {string} [hostName] 服务器名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [assetValue] 资产重要性，包含如下3种   - important ：重要资产   - common ：一般资产   - test ：测试资产
     * @param {string} [handleMethod] 处理方式，包含如下:   - mark_as_handled : 手动处理   - ignore : 忽略   - add_to_alarm_whitelist : 加入告警白名单   - isolate_and_kill : 隔离文件   - unhandle : 取消手动处理   - do_not_ignore : 取消忽略   - remove_from_alarm_whitelist : 删除告警白名单   - do_not_isolate_or_kill : 取消隔离文件
     * @param {string} [userName] 用户名
     * @param {number} [eventType] 事件类型
     * @param {string} [sortDir] 排序顺序，若sort_key不为空,设置返回结果按照sort_key升序或降序排序,默认降序排序，包含如下:   - asc : 升序   - desc : 降序
     * @param {string} [sortKey] 排序字段，包含如下:   - handle_time : 处置时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAntivirusHandleHistory(listAntivirusHandleHistoryRequest?: ListAntivirusHandleHistoryRequest): Promise<ListAntivirusHandleHistoryResponse> {
        const options = ParamCreater().listAntivirusHandleHistory(listAntivirusHandleHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取软件信息的历史变动记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取软件信息的历史变动记录
     * @param {string} [hostId] 主机id
     * @param {string} [hostIp] 主机ip
     * @param {string} [hostName] 主机名称
     * @param {string} [appName] 软件名称
     * @param {string} [variationType] 变更类型:   - add ：新建   - delete ：删除   - modify ：修改
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [sortKey] 排序的key值，目前只支持按照recent_scan_time排序，按照recent_scan_time排序时，根据sort_dir的值决定升序还是降序
     * @param {string} [sortDir] 排序方式，默认为降序，当sort_key为按照recent_scan_time排序时，根据当前值决定升序还是降序，当sort_key为其他值时均为降序   - asc ：升序   - desc ：降序
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [startTime] 变更开始时间，13位时间戳
     * @param {number} [endTime] 变更结束时间，13位时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppChangeHistories(listAppChangeHistoriesRequest?: ListAppChangeHistoriesRequest): Promise<ListAppChangeHistoriesResponse> {
        const options = ParamCreater().listAppChangeHistories(listAppChangeHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询软件列表，支持通过软件名称查询对应的服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询软件列表
     * @param {string} [appName] 软件名称
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppStatistics(listAppStatisticsRequest?: ListAppStatisticsRequest): Promise<ListAppStatisticsResponse> {
        const options = ParamCreater().listAppStatistics(listAppStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询软件的服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询软件的服务器列表
     * @param {string} [hostId] 主机id
     * @param {string} [hostName] 主机名称
     * @param {string} [appName] 软件名称
     * @param {string} [hostIp] 主机ip
     * @param {string} [version] 软件版本号
     * @param {string} [installDir] 安装目录
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {boolean} [partMatch] 是否模糊匹配，默认false表示精确匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApps(listAppsRequest?: ListAppsRequest): Promise<ListAppsResponse> {
        const options = ParamCreater().listApps(listAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取自启动项的历史变动记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自启动项的历史变动记录
     * @param {string} [hostId] 主机id
     * @param {string} [hostIp] 主机ip
     * @param {string} [hostName] 主机名称
     * @param {string} [autoLaunchName] 自启动项名称
     * @param {number} [type] 自启动项类型   - 0 ：自启动服务   - 1 ：定时任务   - 2 ：预加载动态库   - 3 ：Run注册表键   - 4 ：开机启动文件夹
     * @param {string} [variationType] 变更类型:   - add ：新建   - delete ：删除   - modify ：修改
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [sortKey] 排序的key值，目前只支持按照recent_scan_time排序，按照recent_scan_time排序时，根据sort_dir的值决定升序还是降序
     * @param {string} [sortDir] 排序方式，默认为降序，当sort_key为按照recent_scan_time排序时，根据当前值决定升序还是降序，当sort_key为其他值时均为降序   - asc ：升序   - desc ：降序
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [startTime] 变更开始时间，13位时间戳
     * @param {number} [endTime] 变更结束时间，13位时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutoLaunchChangeHistories(listAutoLaunchChangeHistoriesRequest?: ListAutoLaunchChangeHistoriesRequest): Promise<ListAutoLaunchChangeHistoriesResponse> {
        const options = ParamCreater().listAutoLaunchChangeHistories(listAutoLaunchChangeHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自启动信息，支持通过传入自启动名称查询启动类型和服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自启动项信息
     * @param {string} [name] 自启动项名称
     * @param {string} [type] 自启动项类型   - 0 ：自启动服务   - 1 ：定时任务   - 2 ：预加载动态库   - 3 ：Run注册表键   - 4 ：开机启动文件夹
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutoLaunchStatistics(listAutoLaunchStatisticsRequest?: ListAutoLaunchStatisticsRequest): Promise<ListAutoLaunchStatisticsResponse> {
        const options = ParamCreater().listAutoLaunchStatistics(listAutoLaunchStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自启动项的服务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自启动项的服务列表
     * @param {string} [hostId] 主机id
     * @param {string} [hostName] 主机名称
     * @param {string} [name] 自启动项名称
     * @param {string} [hostIp] 主机ip
     * @param {string} [type] 自启动项类型   - 0 ：自启动服务   - 1 ：定时任务   - 2 ：预加载动态库   - 3 ：Run注册表键   - 4 ：开机启动文件夹
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {boolean} [partMatch] 是否模糊匹配，默认false表示精确匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutoLaunchs(listAutoLaunchsRequest?: ListAutoLaunchsRequest): Promise<ListAutoLaunchsResponse> {
        const options = ParamCreater().listAutoLaunchs(listAutoLaunchsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询备份存储库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份存储库列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [vaultName] 备份存储库名称
     * @param {string} [vaultId] 备份存储库id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackupVaults(listBackupVaultsRequest?: ListBackupVaultsRequest): Promise<ListBackupVaultsResponse> {
        const options = ParamCreater().listBackupVaults(listBackupVaultsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已拦截IP列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已拦截IP列表
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [lastDays] 查询时间范围天数，与自定义查询时间begin_time，end_time互斥
     * @param {string} [hostName] 服务器名称
     * @param {string} [srcIp] 攻击源IP
     * @param {string} [interceptStatus] 拦截状态，包含如下:   - intercepted : 已拦截   - canceled : 已解除拦截   - cancelling : 待解除拦截
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBlockedIp(listBlockedIpRequest?: ListBlockedIpRequest): Promise<ListBlockedIpResponse> {
        const options = ParamCreater().listBlockedIp(listBlockedIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群配置
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {CCEClusterInfoListRequestBody} [listCceClusterConfigRequestBody] 集群id列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCceClusterConfig(listCceClusterConfigRequest?: ListCceClusterConfigRequest): Promise<ListCceClusterConfigResponse> {
        const options = ParamCreater().listCceClusterConfig(listCceClusterConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询检测规则列表：查询默认检测规则信息，包含14种检测规则，默认都不开启
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询检测规则列表
     * @param {string} enterpriseProjectId 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [osType] 操作系统类型，包含如下2种。 - Linux - Windows
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCheckFeatureRule(listCheckFeatureRuleRequest?: ListCheckFeatureRuleRequest): Promise<ListCheckFeatureRuleResponse> {
        const options = ParamCreater().listCheckFeatureRule(listCheckFeatureRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询容器节点列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容器节点列表
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {string} [hostName] 节点名称
     * @param {string} [agentStatus] Agent状态，包含如下3种。   - not_installed ：未安装   - online ：在线   - offline ：离线
     * @param {string} [protectStatus] 防护状态，包含如下2种。   - closed ：关闭   - opened ：开启
     * @param {string} [containerTags] 标签：用来识别cce容器节点和自建  - cce：cce节点  - self：自建节点  - other：其他节点
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listContainerNodes(listContainerNodesRequest?: ListContainerNodesRequest): Promise<ListContainerNodesResponse> {
        const options = ParamCreater().listContainerNodes(listContainerNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询容器基本信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容器基本信息列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [containerName] 容器名称
     * @param {string} [podName] 所属Pod名称
     * @param {string} [imageName] 镜像名称
     * @param {boolean} [clusterContainer] 是否是集群纳管的容器
     * @param {number} [limit] 每页显示个数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listContainers(listContainersRequest?: ListContainersRequest): Promise<ListContainersResponse> {
        const options = ParamCreater().listContainers(listContainersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看动态端口蜜罐策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看动态端口蜜罐策略
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDecoyPortPolicy(listDecoyPortPolicyRequest?: ListDecoyPortPolicyRequest): Promise<ListDecoyPortPolicyResponse> {
        const options = ParamCreater().listDecoyPortPolicy(listDecoyPortPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载导出文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载导出文件
     * @param {string} fileId 文件id
     * @param {string} region Region Id
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDownloadExportedFile(listDownloadExportedFileRequest?: ListDownloadExportedFileRequest): Promise<ListDownloadExportedFileResponse> {
        const options = ParamCreater().listDownloadExportedFile(listDownloadExportedFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警事件历史处置记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警事件历史处置记录列表
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [severity] 威胁等级，包含如下:   - Security ：安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [attackTag] 攻击标识，包含如下：   - attack_success : 攻击成功   - attack_attempt : 攻击尝试   - attack_blocked : 攻击被阻断   - abnormal_behavior : 异常行为   - collapsible_host : 主机失陷   - system_vulnerability : 系统脆弱性
     * @param {string} [assetValue] 资产重要性，包含如下3种   - important ：重要资产   - common ：一般资产   - test ：测试资产
     * @param {Array<string>} [eventClassIds] 事件标识，包含如下: - container_1001 : 容器命名空间 - container_1002 : 容器开放端口 - container_1003 : 容器安全选项 - container_1004 : 容器挂载目录 - containerescape_0001 : 容器高危系统调用 - containerescape_0002 : Shocker攻击 - containerescape_0003 : DirtCow攻击 - containerescape_0004 : 容器文件逃逸攻击 - dockerfile_001 : 用户自定义容器保护文件被修改 - dockerfile_002 : 容器文件系统可执行文件被修改 - dockerproc_001 : 容器进程异常事件上报 - fileprotect_0001 : 文件提权 - fileprotect_0002 : 关键文件变更 - fileprotect_0003 : 关键文件路径变更 - fileprotect_0004 : 文件/目录变更 - av_1002 : 病毒 - av_1003 : 蠕虫 - av_1004 : 木马 - av_1005 : 僵尸网络 - av_1006 : 后门 - av_1007 : 间谍软件 - av_1008 : 恶意广告软件 - av_1009 : 钓鱼 - av_1010 : Rootkit - av_1011 : 勒索软件 - av_1012 : 黑客工具 - av_1013 : 灰色软件 - av_1015 : Webshell - av_1016 : 挖矿软件 - login_0001 : 尝试暴力破解 - login_0002 : 爆破成功 - login_1001 : 登录成功 - login_1002 : 异地登录 - login_1003 : 弱口令 - malware_0001 : shell变更事件上报 - malware_0002 : 反弹shell事件上报 - malware_1001 : 恶意程序 - procdet_0001 : 进程异常行为检测 - procdet_0002 : 进程提权 - crontab_0001 : crontab脚本提权 - crontab_0002 : 恶意路径提权 - procreport_0001 : 危险命令 - user_1001 : 账号变更 - user_1002 : 风险账号 - vmescape_0001 : 虚拟机敏感命令执行 - vmescape_0002 : 虚拟化进程访问敏感文件 - vmescape_0003 : 虚拟机异常端口访问 - webshell_0001 : 网站后门 - network_1001 : 恶意挖矿 - network_1002 : 对外DDoS攻击 - network_1003 : 恶意扫描 - network_1004 : 敏感区域攻击 - ransomware_0001 : 勒索攻击 - ransomware_0002 : 勒索攻击 - ransomware_0003 : 勒索攻击 - fileless_0001 : 进程注入 - fileless_0002 : 动态库注入进程 - fileless_0003 : 关键配置变更 - fileless_0004 : 环境变量变更 - fileless_0005 : 内存文件进程 - fileless_0006 : vdso劫持 - crontab_1001 : Crontab可疑任务 - vul_exploit_0001 : Redis漏洞利用攻击 - vul_exploit_0002 : Hadoop漏洞利用攻击 - vul_exploit_0003 : MySQL漏洞利用攻击 - rootkit_0001 : 可疑rootkit文件 - rootkit_0002 : 可疑内核模块 - RASP_0004 : 上传Webshell - RASP_0018 : 无文件Webshell - blockexec_001 : 已知勒索攻击 - hips_0001 : Windows Defender防护被禁用 - hips_0002 : 可疑的黑客工具 - hips_0003 : 可疑的勒索加密行为 - hips_0004 : 隐藏账号创建 - hips_0005 : 读取用户密码凭据 - hips_0006 : 可疑的SAM文件导出 - hips_0007 : 可疑shadow copy删除操作 - hips_0008 : 备份文件删除 - hips_0009 : 可疑勒索病毒操作注册表 - hips_0010 : 可疑的异常进程行为 - hips_0011 : 可疑的扫描探测 - hips_0012 : 可疑的勒索病毒脚本运行 - hips_0013 : 可疑的挖矿命令执行 - hips_0014 : 可疑的禁用windows安全中心 - hips_0015 : 可疑的停止防火墙服务行为 - hips_0016 : 可疑的系统自动恢复禁用 - hips_0017 : Offies 创建可执行文件 - hips_0018 : 带宏Offies文件异常创建 - hips_0019 : 可疑的注册表操作 - hips_0020 : Confluence远程代码执行 - hips_0021 : MSDT远程代码执行 - portscan_0001 : 通用端口扫描 - portscan_0002 : 秘密端口扫描 - k8s_1001 : Kubernetes事件删除 - k8s_1002 : 创建特权Pod - k8s_1003 : Pod中使用交互式shell - k8s_1004 : 创建敏感目录Pod - k8s_1005 : 创建主机网络的Pod - k8s_1006 : 创建主机Pid空间的Pod - k8s_1007 : 普通pod访问APIserver认证失败 - k8s_1008 : 普通Pod通过Curl访问APIServer - k8s_1009 : 系统管理空间执行exec - k8s_1010 : 系统管理空间创建Pod - k8s_1011 : 创建静态Pod - k8s_1012 : 创建DaemonSet - k8s_1013 : 创建集群计划任务 - k8s_1014 : Secrets操作 - k8s_1015 : 枚举用户可执行的操作 - k8s_1016 : 高权限RoleBinding或ClusterRoleBinding - k8s_1017 : ServiceAccount创建 - k8s_1018 : 创建Cronjob - k8s_1019 : Pod中exec使用交互式shell - k8s_1020 : 无权限访问Apiserver - k8s_1021 : 使用curl访问APIServer - k8s_1022 : Ingress漏洞 - k8s_1023 : 中间人攻击 - k8s_1024 : 蠕虫挖矿木马 - k8s_1025 : K8s事件删除 - k8s_1026 : SelfSubjectRulesReview场景 - imgblock_0001 : 镜像白名单阻断 - imgblock_0002 : 镜像黑名单阻断 - imgblock_0003 : 镜像标签白名单阻断 - imgblock_0004 : 镜像标签黑名单阻断 - imgblock_0005 : 创建容器白名单阻断 - imgblock_0006 : 创建容器黑名单阻断 - imgblock_0007 : 容器mount proc阻断 - imgblock_0008 : 容器seccomp unconfined阻断 - imgblock_0009 : 容器特权阻断 - imgblock_0010 : 容器capabilities阻断
     * @param {string} [eventName] 告警名称
     * @param {number} [eventType] 事件类型，包含如下:   - 1001 : 通用恶意软件   - 1002 : 病毒   - 1003 : 蠕虫   - 1004 : 木马   - 1005 : 僵尸网络   - 1006 : 后门   - 1010 : Rootkit   - 1011 : 勒索软件   - 1012 ：黑客工具   - 1015 : Webshell   - 1016 : 挖矿   - 1017 : 反弹Shell   - 2001 : 一般漏洞利用   - 2012 : 远程代码执行   - 2047 : Redis漏洞利用   - 2048 : Hadoop漏洞利用   - 2049 : MySQL漏洞利用   - 3002 : 文件提权   - 3003 : 进程提权   - 3004 : 关键文件变更   - 3005 : 文件/目录变更   - 3007 : 进程异常行为   - 3015 : 高危命令执行   - 3018 : 异常Shell   - 3027 : Crontab可疑任务   - 3029 ：系统安全防护被禁用   - 3030 ：备份删除   - 3031 ：异常注册表操作   - 3036 : 容器镜像阻断   - 4002 : 暴力破解   - 4004 : 异常登录   - 4006 : 非法系统账号   - 4014 : 用户账号添加   - 4020 : 用户密码窃取   - 6002 : 端口扫描   - 6003 : 主机扫描   - 13001 : Kubernetes事件删除   - 13002 : Pod异常行为   - 13003 : 枚举用户信息   - 13004 : 绑定集群用户角色
     * @param {string} [hostName] 服务器名称
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [hostIp] 主机IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [sortDir] 排序顺序，若sort_key不为空,设置返回结果按照sort_key升序或降序排序,默认降序排序，包含如下:   - asc : 升序   - desc : 降序
     * @param {string} [sortKey] 排序字段，包含如下:   - handle_time : 处置时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventHandleHistory(listEventHandleHistoryRequest?: ListEventHandleHistoryRequest): Promise<ListEventHandleHistoryResponse> {
        const options = ParamCreater().listEventHandleHistory(listEventHandleHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器组列表
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {string} [groupName] 服务器组名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostGroups(listHostGroupsRequest?: ListHostGroupsRequest): Promise<ListHostGroupsResponse> {
        const options = ParamCreater().listHostGroups(listHostGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机静态网页防篡改防护动态：展示服务器名称、服务器ip、防护策略、检测时间、防护文件、事件描述信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机静态网页防篡改防护动态
     * @param {string} region Region Id
     * @param {number} startTime 起始时间(ms)
     * @param {number} endTime 终止时间(ms)
     * @param {number} limit limit
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostId] Host Id，为空时查所有主机
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器ip
     * @param {string} [filePath] 防护文件
     * @param {string} [fileOperation] 文件操作类型   - add: 新增   - delete: 删除   - modify: 修改内容   - attribute: 修改属性
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostProtectHistoryInfo(listHostProtectHistoryInfoRequest?: ListHostProtectHistoryInfoRequest): Promise<ListHostProtectHistoryInfoResponse> {
        const options = ParamCreater().listHostProtectHistoryInfo(listHostProtectHistoryInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机动态网页防篡改防护动态：包含告警级别、服务器ip、服务器名称、威胁类型、告警时间、攻击源ip、攻击源url信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机动态网页防篡改防护动态
     * @param {string} region Region Id
     * @param {number} startTime 起始时间(ms)
     * @param {number} endTime 终止时间(ms)
     * @param {number} limit limit
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostId] Host Id，为空时查所有主机
     * @param {number} [alarmLevel] 告警级别 - 1 : 低危 - 2 : 中危 - 3 : 高危 - 4 : 严重
     * @param {string} [severity] 威胁等级   - Security : 安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [protectStatus] 防护状态   - closed : 未开启   - opened : 防护中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostRaspProtectHistoryInfo(listHostRaspProtectHistoryInfoRequest?: ListHostRaspProtectHistoryInfoRequest): Promise<ListHostRaspProtectHistoryInfoResponse> {
        const options = ParamCreater().listHostRaspProtectHistoryInfo(listHostRaspProtectHistoryInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [version] 主机开通的版本，包含如下7种输入。   - hss.version.null ：无。   - hss.version.basic ：基础版。   - hss.version.advanced ：专业版。   - hss.version.enterprise ：企业版。   - hss.version.premium ：旗舰版。   - hss.version.wtp ：网页防篡改版。   - hss.version.container.enterprise：容器版。
     * @param {string} [agentStatus] Agent的状态分为两类： - installed：已安装。已安装状态包含以下四种情况：    - online：在线。表示Agent已经成功安装并且与HSS云端防护中心保持连接。    - offline：离线。表示虽然Agent已经安装，但当前与HSS云端防护中心的连接中断。    - install_failed：安装失败。表示在尝试安装过程中遇到错误或问题，导致安装未能完成。    - installing：安装中。表示当前正在进行Agent安装。 - not_installed ：未安装。表示服务器中尚未安装Agent。 如果您要筛选除在线以外所有状态的Agent，可设置not_online（仅作为查询条件）
     * @param {string} [detectResult] 检测结果，包含如下4种。   - undetected ：未检测。   - clean ：无风险。   - risk ：有风险。   - scanning ：检测中。
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostId] 服务器ID
     * @param {string} [hostStatus] 主机状态，包含如下4种。   - ACTIVE ：正在运行。   - SHUTOFF ：关机。   - BUILDING ：创建中。   - ERROR ：故障。
     * @param {string} [osType] 操作系统类型，包含如下2种。   - Linux ：Linux。   - Windows ：Windows。
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [ipAddr] 公网或私网IP
     * @param {string} [protectStatus] 防护状态，包含如下2种。   - closed ：关闭。   - opened ：开启。   - protection_exception ：防护异常。
     * @param {string} [groupId] 服务器组ID
     * @param {string} [groupName] 服务器组名称
     * @param {string} [vpcId] vpc id
     * @param {string} [region] Region ID
     * @param {boolean} [hasIntrusion] 存在告警事件
     * @param {boolean} [hasVul] 存在漏洞风险
     * @param {boolean} [hasBaseline] 存在基线风险
     * @param {string} [sortKey] 排序字段，只支持risk_num - risk_num：风险总量
     * @param {string} [sortDir] 排序的顺序 - asc: 正序 - desc: 倒序
     * @param {string} [policyGroupId] 策略组ID
     * @param {string} [policyGroupName] 策略组名称
     * @param {string} [chargingMode] 收费模式，包含如下2种。   - packet_cycle ：包年/包月。   - on_demand ：按需。
     * @param {boolean} [refresh] 是否强制从ECS同步主机
     * @param {boolean} [getCommonLoginLocations] 是否获取主机常用登录地信息
     * @param {boolean} [aboveVersion] 是否返回比当前版本高的所有版本
     * @param {boolean} [outsideHost] 是否华为云主机
     * @param {string} [assetValue] 资产重要性，包含如下4种   - important ：重要资产   - common ：一般资产   - test ：测试资产
     * @param {string} [label] 资产标签
     * @param {string} [serverGroup] 资产服务器组
     * @param {boolean} [agentUpgradable] agent是否可升级
     * @param {boolean} [installMode] 是否安装模式场景
     * @param {boolean} [bindingKey] 是否绑定DEW密钥
     * @param {boolean} [protectInterrupt] 是否防护中断
     * @param {boolean} [incluster] 是否集群内节点
     * @param {boolean} [protectDegradation] 是否防护降级
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostStatus(listHostStatusRequest?: ListHostStatusRequest): Promise<ListHostStatusResponse> {
        const options = ParamCreater().listHostStatus(listHostStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单台服务器漏洞信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单台服务器漏洞信息
     * @param {string} hostId 服务器id
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [type] 漏洞类型，默认为linux_vul，包括如下：   - linux_vul : 漏洞类型-linux漏洞   - windows_vul : 漏洞类型-windows漏洞   - web_cms : Web-CMS漏洞   - app_vul : 应用漏洞   - urgent_vul : 应急漏洞
     * @param {string} [vulName] 漏洞名称
     * @param {number} [limit] 每页显示个数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [status] 漏洞状态，包含如下：   - vul_status_unfix : 未处理   - vul_status_ignored : 已忽略   - vul_status_verified : 验证中   - vul_status_fixing : 修复中   - vul_status_fixed : 修复成功   - vul_status_reboot : 修复成功待重启   - vul_status_failed : 修复失败   - vul_status_fix_after_reboot : 请重启主机再次修复
     * @param {string} [repairPriority] 修复优先级,包含如下 - Critical 紧急  - High 高  - Medium 中  - Low 低
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostVuls(listHostVulsRequest?: ListHostVulsRequest): Promise<ListHostVulsResponse> {
        const options = ParamCreater().listHostVuls(listHostVulsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本地镜像列表查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 本地镜像列表查询
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [imageName] 镜像名称
     * @param {string} [imageVersion] 镜像版本
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示数量
     * @param {string} [scanStatus] 扫描状态，包含如下:   - unscan : 未扫描   - success : 扫描完成   - scanning : 扫描中   - failed : 扫描失败   - waiting_for_scan : 等待扫描
     * @param {string} [localImageType] 镜像类型，包含如下:  - other_image : 非SWR镜像  - swr_image : SWR镜像
     * @param {number} [imageSize] 镜像大小，单位字节
     * @param {number} [startLatestUpdateTime] 最近更新时间搜索开始日期，时间单位 毫秒（ms）
     * @param {number} [endLatestUpdateTime] 最近更新时间搜索结束日期，时间单位 毫秒（ms）
     * @param {number} [startLatestScanTime] 最近一次扫描完成时间搜索开始日期，时间单位 毫秒（ms）
     * @param {number} [endLatestScanTime] 最近一次扫描完成时间搜索结束日期，时间单位 毫秒（ms）
     * @param {boolean} [hasVul] 是否存在软件漏洞
     * @param {string} [hostName] 本地镜像所关联服务器的名称
     * @param {string} [hostId] 本地镜像所关联服务器的ID
     * @param {string} [hostIp] 本地镜像所关联服务器的IP（公网或私网）
     * @param {string} [containerId] 本地镜像所关联容器的ID
     * @param {string} [containerName] 本地镜像所关联容器的名称
     * @param {string} [podId] 本地镜像所关联Pod的ID
     * @param {string} [podName] 本地镜像所关联Pod的名称
     * @param {string} [appName] 本地镜像所关联软件的名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageLocal(listImageLocalRequest?: ListImageLocalRequest): Promise<ListImageLocalResponse> {
        const options = ParamCreater().listImageLocal(listImageLocalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像指定安全配置项的检查项列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像指定安全配置项的检查项列表
     * @param {string} imageType 镜像类型，包含如下:   - private_image : 私有镜像仓库   - shared_image : 共享镜像仓库   - local_image : 本地镜像   - instance_image : 企业镜像
     * @param {string} checkName 基线名称
     * @param {string} standard 标准类型，包含如下:   - cn_standard : 等保合规标准   - hw_standard : 云安全实践标准
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示数量
     * @param {string} [namespace] 组织名称（没有镜像相关信息时，表示查询所有镜像）
     * @param {string} [imageName] 镜像名称
     * @param {string} [imageVersion] 镜像版本名称
     * @param {string} [imageId] 镜像id
     * @param {string} [resultType] 结果类型，包含如下： - pass ： 已通过 - failed : 未通过
     * @param {string} [checkRuleName] 检查项名称，支持模糊匹配
     * @param {string} [severity] 风险等级，包含如下:   - Security : 安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [instanceId] 企业仓库实例ID，swr共享版无需使用该参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageRiskConfigRules(listImageRiskConfigRulesRequest?: ListImageRiskConfigRulesRequest): Promise<ListImageRiskConfigRulesResponse> {
        const options = ParamCreater().listImageRiskConfigRules(listImageRiskConfigRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像安全配置检测结果列表,当前支持检测CentOS 7、Debian 10、EulerOS和Ubuntu16镜像的系统配置项、SSH应用配置项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像安全配置检测结果列表
     * @param {string} imageType 镜像类型，包含如下:   - private_image : 私有镜像仓库   - shared_image : 共享镜像仓库   - local_image : 本地镜像   - instance_image : 企业镜像
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示数量
     * @param {string} [namespace] 组织名称
     * @param {string} [imageName] 镜像名称
     * @param {string} [imageVersion] 镜像版本名称
     * @param {string} [imageId] 镜像id
     * @param {string} [checkName] 基线名称
     * @param {string} [severity] 风险等级，包含如下:   - Security : 安全   - Low : 低危   - Medium : 中危   - High : 高危
     * @param {string} [standard] 标准类型，包含如下:   - cn_standard : 等保合规标准   - hw_standard : 云安全实践标准
     * @param {string} [instanceId] 企业仓库实例ID，swr共享版无需使用该参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageRiskConfigs(listImageRiskConfigsRequest?: ListImageRiskConfigsRequest): Promise<ListImageRiskConfigsResponse> {
        const options = ParamCreater().listImageRiskConfigs(listImageRiskConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像的漏洞信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像的漏洞信息
     * @param {string} imageType 镜像类型，包含如下:   - private_image : 私有镜像仓库   - shared_image : 共享镜像仓库   - local_image : 本地镜像   - instance_image : 企业镜像
     * @param {string} imageId 镜像id
     * @param {string} namespace 组织名称
     * @param {string} imageName 镜像名称
     * @param {string} tagName 镜像版本
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示数量
     * @param {string} [instanceId] 企业仓库实例ID，swr共享版无需使用该参数
     * @param {string} [repairNecessity] 危险程度，包含如下3种。   - immediate_repair ：高危。   - delay_repair ：中危。   - not_needed_repair ：低危。
     * @param {string} [vulId] 漏洞ID（支持模糊查询）
     * @param {string} [appName] 软件名
     * @param {string} [type] 漏洞类型，包含如下：   -linux_vul : linux漏洞   -app_vul : 应用漏洞
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageVulnerabilities(listImageVulnerabilitiesRequest?: ListImageVulnerabilitiesRequest): Promise<ListImageVulnerabilitiesResponse> {
        const options = ParamCreater().listImageVulnerabilities(listImageVulnerabilitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已隔离文件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已隔离文件列表
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [filePath] 文件路径
     * @param {string} [hostName] 服务器名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [fileHash] 文件hash,当前为sha256
     * @param {string} [assetValue] 资产重要性，包含如下3种   - important ：重要资产   - common ：一般资产   - test ：测试资产
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {string} [isolationStatus] 隔离状态，包含如下:   - isolated : 已隔离   - restored : 已恢复   - isolating : 已下发隔离任务   - restoring : 已下发恢复任务
     * @param {number} [lastDays] 查询时间范围天数，与自定义查询时间begin_time，end_time互斥
     * @param {number} [beginTime] 自定义查询时间，与查询时间范围天数互斥，查询时间段的起始时间，毫秒级时间戳，end_time减去begin_time小于等于2天，与查询时间范围天数互斥
     * @param {number} [endTime] 自定义时间，查询时间段的终止时间，毫秒级时间戳，end_time减去begin_time小于等于2天，与查询时间范围天数互斥
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIsolatedFile(listIsolatedFileRequest?: ListIsolatedFileRequest): Promise<ListIsolatedFileResponse> {
        const options = ParamCreater().listIsolatedFile(listIsolatedFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定中间件的服务器列表，通过传入中间件名称参数，返回对应的中间件服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定中间件的服务器列表
     * @param {string} fileName 文件名称
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [category] 类别，包含如下:   - host : 主机   - container : 容器
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {boolean} [partMatch] 是否模糊匹配，默认false表示精确匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJarPackageHostInfo(listJarPackageHostInfoRequest?: ListJarPackageHostInfoRequest): Promise<ListJarPackageHostInfoResponse> {
        const options = ParamCreater().listJarPackageHostInfo(listJarPackageHostInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中间件列表，支持通过中间件名称查询对应的服务器树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中间件列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [fileName] jar包名称
     * @param {string} [category] 类别，包含如下:   - host : 主机   - container : 容器
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJarPackageStatistics(listJarPackageStatisticsRequest?: ListJarPackageStatisticsRequest): Promise<ListJarPackageStatisticsResponse> {
        const options = ParamCreater().listJarPackageStatistics(listJarPackageStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询常用登录IP信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询常用登录IP信息
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [ipAddr] 登录IP地址+掩码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoginCommonIp(listLoginCommonIpRequest?: ListLoginCommonIpRequest): Promise<ListLoginCommonIpResponse> {
        const options = ParamCreater().listLoginCommonIp(listLoginCommonIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询常用登录地信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询常用登录地信息
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [areaCode] 国家城市的编码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoginCommonLocation(listLoginCommonLocationRequest?: ListLoginCommonLocationRequest): Promise<ListLoginCommonLocationResponse> {
        const options = ParamCreater().listLoginCommonLocation(listLoginCommonLocationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SSH登录IP白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SSH登录IP白名单列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [whiteIp] 白名单IP/IP网段,IP网段由IP地址和掩码组成,以\&#39;/\&#39;连接。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoginWhiteIp(listLoginWhiteIpRequest?: ListLoginWhiteIpRequest): Promise<ListLoginWhiteIpResponse> {
        const options = ParamCreater().listLoginWhiteIp(listLoginWhiteIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询登录白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询登录白名单列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [loginIp] 登录源IP
     * @param {string} [loginUserName] 登录用户名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoginWhiteList(listLoginWhiteListRequest?: ListLoginWhiteListRequest): Promise<ListLoginWhiteListResponse> {
        const options = ParamCreater().listLoginWhiteList(listLoginWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询备份恢复任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份恢复任务列表
     * @param {number} offset 查询起始点
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [status] 恢复状态，包含如下：   - success : 成功   - skipped : 跳过   - failed : 失败   - running : 正在运行   - timeout : 超时   - waiting : 等待
     * @param {string} [resourceName] 服务器名称
     * @param {number} [lastDays] 查询时间范围
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOperationLogsByVaultName(listOperationLogsByVaultNameRequest?: ListOperationLogsByVaultNameRequest): Promise<ListOperationLogsByVaultNameResponse> {
        const options = ParamCreater().listOperationLogsByVaultName(listOperationLogsByVaultNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账号组织
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号组织
     * @param {string} region Region ID
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {boolean} [isRefresh] 是否强制从organization同步组织信息
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOrganizationTree(listOrganizationTreeRequest?: ListOrganizationTreeRequest): Promise<ListOrganizationTreeResponse> {
        const options = ParamCreater().listOrganizationTree(listOrganizationTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询口令复杂度策略检测报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询口令复杂度策略检测报告
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP地址
     * @param {string} [hostId] 主机id，不赋值时，查租户所有主机
     * @param {string} [resultType] 结果类型  - \&quot;unhandled\&quot;#未忽略的  - \&quot;ignored\&quot;#已忽略的
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPasswordComplexity(listPasswordComplexityRequest?: ListPasswordComplexityRequest): Promise<ListPasswordComplexityResponse> {
        const options = ParamCreater().listPasswordComplexity(listPasswordComplexityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机策略列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} agentId agent ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicies(listPoliciesRequest?: ListPoliciesRequest): Promise<ListPoliciesResponse> {
        const options = ParamCreater().listPolicies(listPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询策略组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组列表
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [groupName] 策略组名
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {boolean} [containerMode] 是否查询容器版策略
     * @param {string} [groupId] 策略组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyGroup(listPolicyGroupRequest?: ListPolicyGroupRequest): Promise<ListPolicyGroupResponse> {
        const options = ParamCreater().listPolicyGroup(listPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 具备该端口的主机/容器信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产指纹-端口-服务器列表
     * @param {number} port 端口号
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 主机名称
     * @param {string} [hostIp] 主机ip
     * @param {string} [type] 端口类型：目前包括TCP，UDP两种
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPortHost(listPortHostRequest?: ListPortHostRequest): Promise<ListPortHostResponse> {
        const options = ParamCreater().listPortHost(listPortHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询开放端口列表，支持通过传入端口或协议类型查询服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询开放端口统计信息
     * @param {number} [port] 端口号，精确匹配
     * @param {string} [portString] 端口字符串，用来进行模糊匹配
     * @param {string} [type] 端口类型
     * @param {string} [status] 端口状态，包含如下： - danger：危险端口 - unknow: 无已知危险的端口
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [sortKey] 排序的key值，目前支持按照端口号port排序
     * @param {string} [sortDir] 升序还是降序，默认升序，asc
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPortStatistics(listPortStatisticsRequest?: ListPortStatisticsRequest): Promise<ListPortStatisticsResponse> {
        const options = ParamCreater().listPortStatistics(listPortStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单服务器的开放端口列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单服务器的开放端口列表
     * @param {string} hostId 主机id
     * @param {string} [hostName] 主机名称
     * @param {string} [hostIp] 主机ip
     * @param {number} [port] 端口号
     * @param {string} [type] 端口类型：目前包括TCP，UDP两种
     * @param {string} [status] 端口状态，包含如下： - danger：危险端口 - unknow: 无已知危险的端口
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPorts(listPortsRequest?: ListPortsRequest): Promise<ListPortsResponse> {
        const options = ParamCreater().listPorts(listPortsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询进程列表，通过传入进程路径参数查询对应的服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询进程列表
     * @param {string} [path] 可执行进程路径
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProcessStatistics(listProcessStatisticsRequest?: ListProcessStatisticsRequest): Promise<ListProcessStatisticsResponse> {
        const options = ParamCreater().listProcessStatistics(listProcessStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 具备该进程的主机/容器信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产指纹-进程-服务器列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 主机名称
     * @param {string} [hostIp] 主机ip
     * @param {string} [path] 进程可执行文件路径
     * @param {string} [category] 类型，默认为host，包含如下： - host：主机 - container：容器
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProcessesHost(listProcessesHostRequest?: ListProcessesHostRequest): Promise<ListProcessesHostResponse> {
        const options = ParamCreater().listProcessesHost(listProcessesHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询勒索病毒的防护策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询勒索病毒的防护策略列表
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {string} [policyName] 防护策略名称
     * @param {string} [protectPolicyId] 防护策略id
     * @param {string} [operatingSystem] 策略支持的操作系统，包含如下：   - Windows : Windows系统   - Linux : Linux系统
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectionPolicy(listProtectionPolicyRequest?: ListProtectionPolicyRequest): Promise<ListProtectionPolicyResponse> {
        const options = ParamCreater().listProtectionPolicy(listProtectionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询勒索防护服务器列表，与云备份服务配合使用。因此使用勒索相关接口之前确保该局点有云备份服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询勒索防护服务器列表
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {string} [hostName] 服务器名称
     * @param {string} [osType] 操作系统类型，包含如下2种。   - Linux ：Linux。   - Windows ：Windows。
     * @param {string} [hostIp] 服务器IP地址
     * @param {string} [hostStatus] 主机状态，包含如下3种。   - 不传参默认为全部。   - ACTIVE ：正在运行。   - SHUTOFF ：关机。
     * @param {number} [lastDays] 查询时间范围天数，最近7天为last_days&#x3D;7，若不填，则默认查询一天内的防护事件和已有备份数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectionServer(listProtectionServerRequest?: ListProtectionServerRequest): Promise<ListProtectionServerResponse> {
        const options = ParamCreater().listProtectionServer(listProtectionServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护服务器列表：查询防护服务器相关数据，包含服务器名称、ip地址、操作系统、服务器组名称、防护策略、防护状态、微服务防护状态、RASP防护状态、RASP攻击数量信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护服务器列表
     * @param {string} enterpriseProjectId 企业项目ID
     * @param {number} offset 查询起始点
     * @param {number} limit 每页显示个数
     * @param {'closed' | 'opened'} appStatus 应用防护状态，包含如下2种。   - closed ：未开启。   - opened ：防护中。
     * @param {string} [hostName] 云主机名称
     * @param {string} [osType] 操作系统类型，包含如下2种。  - linux ：linux类型应用防护。  - windows ：windows类型应用防护。
     * @param {string} [hostIp] 云主机私有IP
     * @param {'java'} [appType] 应用类型，包含如下1种。   - java ：java类型应用防护。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectionServers(listProtectionServersRequest?: ListProtectionServersRequest): Promise<ListProtectionServersResponse> {
        const options = ParamCreater().listProtectionServers(listProtectionServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询导出任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询导出任务信息
     * @param {string} taskId 任务id
     * @param {string} region Region Id
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueryExportTask(listQueryExportTaskRequest?: ListQueryExportTaskRequest): Promise<ListQueryExportTaskResponse> {
        const options = ParamCreater().listQueryExportTask(listQueryExportTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配额详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额详情
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [version] 主机开通的版本，包含如下7种输入。   - hss.version.null ：无。   - hss.version.basic ：基础版。   - hss.version.advanced ：专业版。   - hss.version.enterprise ：企业版。   - hss.version.premium ：旗舰版。   - hss.version.wtp ：网页防篡改版。   - hss.version.container.enterprise：容器版。
     * @param {string} [category] 类别，包含如下几种：   - host_resource ：HOST_RESOURCE   - container_resource ：CONTAINER_RESOURCE
     * @param {string} [quotaStatus] 配额状态，包含如下几种：   - normal ： QUOTA_STATUS_NORMAL   - expired ：QUOTA_STATUS_EXPIRED   - freeze ：QUOTA_STATUS_FREEZE
     * @param {string} [usedStatus] 使用状态，包含如下几种：   - idle ：USED_STATUS_IDLE   - used ：USED_STATUS_USED
     * @param {string} [hostName] 服务器名称
     * @param {string} [resourceId] HSS配额的资源ID
     * @param {string} [chargingMode] 收费模式，包含如下2种。   - packet_cycle ：包年/包月。   - on_demand ：按需。
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotasDetail(listQuotasDetailRequest?: ListQuotasDetailRequest): Promise<ListQuotasDetailResponse> {
        const options = ParamCreater().listQuotasDetail(listQuotasDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询勒索防护服务器列表，与云备份服务配合使用。因此使用勒索相关接口之前确保该局点有云备份服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询勒索防护服务器列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostId] 服务器ID
     * @param {string} [osType] 操作系统类型，包含如下2种。   - Linux ：Linux。   - Windows ：Windows。
     * @param {string} [hostIp] 服务器IP地址,服务器公网IP地址
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [hostStatus] 主机状态，包含如下3种。   - 不传参默认为全部。   - ACTIVE ：正在运行。   - SHUTOFF ：关机。
     * @param {string} [ransomProtectionStatus] 勒索防护状态，包含如下6种。   - closed ：未开启。   - opened ：防护中。   - opening ：开启中。   - closing ：关闭中。   - protect_failed：防护失败。   - protect_degraded：防护降级。
     * @param {string} [protectPolicyName] 勒索防护策略名称
     * @param {string} [policyName] 防护策略名称
     * @param {string} [policyId] 防护策略id
     * @param {string} [agentStatus] Agent状态
     * @param {string} [groupId] 服务器组ID
     * @param {string} [groupName] 服务器组名称
     * @param {number} [lastDays] 查询时间范围天数，1~30天，若不填，则默认查询一天
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRansomwareProtectionNodes(listRansomwareProtectionNodesRequest?: ListRansomwareProtectionNodesRequest): Promise<ListRansomwareProtectionNodesResponse> {
        const options = ParamCreater().listRansomwareProtectionNodes(listRansomwareProtectionNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用防护事件列表：展示防护事件相关信息，包含告警级别、服务器名称、告警名称、告警时间、攻击源ip、攻击源url数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用防护事件列表
     * @param {string} enterpriseProjectId 企业项目ID
     * @param {string} hostId Host Id
     * @param {number} startTime 查询时间段的起始时间，毫秒级时间戳(ms)
     * @param {number} endTime 查询时间段的终止时间，毫秒级时间戳(ms)
     * @param {number} limit 默认10
     * @param {number} offset 默认0
     * @param {'java'} [appType] 应用类型，包含如下1种。   - java ：java类型应用防护。
     * @param {string} [severity] 告警级别 |- 告警级别，包含如下1种。 - 0 ：Info级别告警 - 1 ：Low级别告警 - 2 ：Medium级别告警 - 3 ：High级别告警 - 4 ：Critical级别告警
     * @param {string} [attackTag] 攻击标识 |- 攻击标识，包含如下6种。 - 1 ：Attack Success  攻击成功 - 2 ：Attack Attempt  攻击尝试 - 3 ：Attack Blocked  攻击被阻断 - 4 ：Abnormal Behavior  异常行为 - 5 ：Collapsible Host  主机失陷 - 6 ：System Vulnerability  系统脆弱性
     * @param {'closed' | 'opened'} [protectStatus] 防护状态，包含如下2种。   - closed ：未开启。   - opened ：防护中。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRaspEvents(listRaspEventsRequest?: ListRaspEventsRequest): Promise<ListRaspEventsResponse> {
        const options = ParamCreater().listRaspEvents(listRaspEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护策略列表：查询创建的防护策略信息，包含防护策略名称、检测规则、关联服务器数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护策略列表
     * @param {string} region region id
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [osType] 操作系统类型，包含如下2种。 - Linux - Windows
     * @param {number} [limit] 每页显示个数，默认10
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [policyName] 策略名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRaspPolicies(listRaspPoliciesRequest?: ListRaspPoliciesRequest): Promise<ListRaspPoliciesResponse> {
        const options = ParamCreater().listRaspPolicies(listRaspPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定安全配置项的检查项列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定安全配置项的检查项列表
     * @param {string} checkName 配置检查（基线）的名称，例如SSH、CentOS 7、Windows
     * @param {string} standard 标准类型，包含如下: - cn_standard : 等保合规标准 - hw_standard : 云安全实践标准
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [resultType] 结果类型，包含如下： - safe ： 已通过 - unhandled : 未通过，且未忽略的 - ignored : 未通过，且已忽略的
     * @param {string} [checkRuleName] 检查项（检查规则）名称，支持模糊匹配
     * @param {string} [severity] 风险等级，包含如下:   - Security : 安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [hostId] 主机ID，不赋值时，查租户所有主机
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRiskConfigCheckRules(listRiskConfigCheckRulesRequest?: ListRiskConfigCheckRulesRequest): Promise<ListRiskConfigCheckRulesResponse> {
        const options = ParamCreater().listRiskConfigCheckRules(listRiskConfigCheckRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定安全配置项的受影响服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定安全配置项的受影响服务器列表
     * @param {string} checkName 配置检查（基线）的名称，例如SSH、CentOS 7、Windows
     * @param {string} standard 标准类型，包含如下: - cn_standard : 等保合规标准 - hw_standard : 云安全实践标准
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP地址
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRiskConfigHosts(listRiskConfigHostsRequest?: ListRiskConfigHostsRequest): Promise<ListRiskConfigHostsResponse> {
        const options = ParamCreater().listRiskConfigHosts(listRiskConfigHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的服务器安全配置检测结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的服务器安全配置检测结果列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [checkName] 配置检查（基线）的名称，例如SSH、CentOS 7、Windows
     * @param {string} [groupId] 策略组ID
     * @param {string} [severity] 风险等级，包含如下:   - Security : 安全   - Low : 低危   - Medium : 中危   - High : 高危
     * @param {string} [standard] 标准类型，包含如下:   - cn_standard : 等保合规标准   - hw_standard : 云安全实践标准
     * @param {string} [hostId] 主机id
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRiskConfigs(listRiskConfigsRequest?: ListRiskConfigsRequest): Promise<ListRiskConfigsResponse> {
        const options = ParamCreater().listRiskConfigs(listRiskConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查入侵事件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查入侵事件列表
     * @param {string} category 事件类别，包含如下:   - host : 主机安全事件   - container : 容器安全事件
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [lastDays] 查询时间范围天数，与自定义查询时间begin_time，end_time互斥
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostId] 主机ID
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [containerName] 容器实例名称
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示个数
     * @param {Array<number>} [eventTypes] 事件类型，包含如下:   - 1001 : 通用恶意软件   - 1002 : 病毒   - 1003 : 蠕虫   - 1004 : 木马   - 1005 : 僵尸网络   - 1006 : 后门   - 1010 : Rootkit   - 1011 : 勒索软件   - 1012 ：黑客工具   - 1015 : Webshell   - 1016 : 挖矿   - 1017 : 反弹Shell   - 2001 : 一般漏洞利用   - 2012 : 远程代码执行   - 2047 : Redis漏洞利用   - 2048 : Hadoop漏洞利用   - 2049 : MySQL漏洞利用   - 3002 : 文件提权   - 3003 : 进程提权   - 3004 : 关键文件变更   - 3005 : 文件/目录变更   - 3007 : 进程异常行为   - 3015 : 高危命令执行   - 3018 : 异常Shell   - 3026 : crontab提权   - 3027 : Crontab可疑任务   - 3029 ：系统安全防护被禁用   - 3030 ：备份删除   - 3031 ：异常注册表操作   - 3036 : 容器镜像阻断   - 4002 : 暴力破解   - 4004 : 异常登录   - 4006 : 非法系统账号   - 4014 : 用户账号添加   - 4020 : 用户密码窃取   - 6002 : 端口扫描   - 6003 : 主机扫描   - 13001 : Kubernetes事件删除   - 13002 : Pod异常行为   - 13003 : 枚举用户信息   - 13004 : 绑定集群用户角色
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [severity] 威胁等级，包含如下:   - Security ：安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [beginTime] 自定义查询时间，与查询时间范围天数互斥，查询时间段的起始时间，毫秒级时间戳，end_time减去begin_time小于等于2天，与查询时间范围天数互斥
     * @param {string} [endTime] 自定义时间，查询时间段的终止时间，毫秒级时间戳，end_time减去begin_time小于等于2天，与查询时间范围天数互斥
     * @param {Array<string>} [eventClassIds] 事件标识，包含如下: - container_1001 : 容器命名空间 - container_1002 : 容器开放端口 - container_1003 : 容器安全选项 - container_1004 : 容器挂载目录 - containerescape_0001 : 容器高危系统调用 - containerescape_0002 : Shocker攻击 - containerescape_0003 : DirtCow攻击 - containerescape_0004 : 容器文件逃逸攻击 - dockerfile_001 : 用户自定义容器保护文件被修改 - dockerfile_002 : 容器文件系统可执行文件被修改 - dockerproc_001 : 容器进程异常事件上报 - fileprotect_0001 : 文件提权 - fileprotect_0002 : 关键文件变更 - fileprotect_0003 : 关键文件路径变更 - fileprotect_0004 : 文件/目录变更 - av_1002 : 病毒 - av_1003 : 蠕虫 - av_1004 : 木马 - av_1005 : 僵尸网络 - av_1006 : 后门 - av_1007 : 间谍软件 - av_1008 : 恶意广告软件 - av_1009 : 钓鱼 - av_1010 : Rootkit - av_1011 : 勒索软件 - av_1012 : 黑客工具 - av_1013 : 灰色软件 - av_1015 : Webshell - av_1016 : 挖矿软件 - login_0001 : 尝试暴力破解 - login_0002 : 爆破成功 - login_1001 : 登录成功 - login_1002 : 异地登录 - login_1003 : 弱口令 - malware_0001 : shell变更事件上报 - malware_0002 : 反弹shell事件上报 - malware_1001 : 恶意程序 - procdet_0001 : 进程异常行为检测 - procdet_0002 : 进程提权 - crontab_0001 : crontab脚本提权 - crontab_0002 : 恶意路径提权 - procreport_0001 : 危险命令 - user_1001 : 账号变更 - user_1002 : 风险账号 - vmescape_0001 : 虚拟机敏感命令执行 - vmescape_0002 : 虚拟化进程访问敏感文件 - vmescape_0003 : 虚拟机异常端口访问 - webshell_0001 : 网站后门 - network_1001 : 恶意挖矿 - network_1002 : 对外DDoS攻击 - network_1003 : 恶意扫描 - network_1004 : 敏感区域攻击 - ransomware_0001 : 勒索攻击 - ransomware_0002 : 勒索攻击 - ransomware_0003 : 勒索攻击 - fileless_0001 : 进程注入 - fileless_0002 : 动态库注入进程 - fileless_0003 : 关键配置变更 - fileless_0004 : 环境变量变更 - fileless_0005 : 内存文件进程 - fileless_0006 : vdso劫持 - crontab_1001 : Crontab可疑任务 - vul_exploit_0001 : Redis漏洞利用攻击 - vul_exploit_0002 : Hadoop漏洞利用攻击 - vul_exploit_0003 : MySQL漏洞利用攻击 - rootkit_0001 : 可疑rootkit文件 - rootkit_0002 : 可疑内核模块 - RASP_0004 : 上传Webshell - RASP_0018 : 无文件Webshell - blockexec_001 : 已知勒索攻击 - hips_0001 : Windows Defender防护被禁用 - hips_0002 : 可疑的黑客工具 - hips_0003 : 可疑的勒索加密行为 - hips_0004 : 隐藏账号创建 - hips_0005 : 读取用户密码凭据 - hips_0006 : 可疑的SAM文件导出 - hips_0007 : 可疑shadow copy删除操作 - hips_0008 : 备份文件删除 - hips_0009 : 可疑勒索病毒操作注册表 - hips_0010 : 可疑的异常进程行为 - hips_0011 : 可疑的扫描探测 - hips_0012 : 可疑的勒索病毒脚本运行 - hips_0013 : 可疑的挖矿命令执行 - hips_0014 : 可疑的禁用windows安全中心 - hips_0015 : 可疑的停止防火墙服务行为 - hips_0016 : 可疑的系统自动恢复禁用 - hips_0017 : Offies 创建可执行文件 - hips_0018 : 带宏Offies文件异常创建 - hips_0019 : 可疑的注册表操作 - hips_0020 : Confluence远程代码执行 - hips_0021 : MSDT远程代码执行 - portscan_0001 : 通用端口扫描 - portscan_0002 : 秘密端口扫描 - k8s_1001 : Kubernetes事件删除 - k8s_1002 : 创建特权Pod - k8s_1003 : Pod中使用交互式shell - k8s_1004 : 创建敏感目录Pod - k8s_1005 : 创建主机网络的Pod - k8s_1006 : 创建主机Pid空间的Pod - k8s_1007 : 普通pod访问APIserver认证失败 - k8s_1008 : 普通Pod通过Curl访问APIServer - k8s_1009 : 系统管理空间执行exec - k8s_1010 : 系统管理空间创建Pod - k8s_1011 : 创建静态Pod - k8s_1012 : 创建DaemonSet - k8s_1013 : 创建集群计划任务 - k8s_1014 : Secrets操作 - k8s_1015 : 枚举用户可执行的操作 - k8s_1016 : 高权限RoleBinding或ClusterRoleBinding - k8s_1017 : ServiceAccount创建 - k8s_1018 : 创建Cronjob - k8s_1019 : Pod中exec使用交互式shell - k8s_1020 : 无权限访问Apiserver - k8s_1021 : 使用curl访问APIServer - k8s_1022 : Ingress漏洞 - k8s_1023 : 中间人攻击 - k8s_1024 : 蠕虫挖矿木马 - k8s_1025 : K8s事件删除 - k8s_1026 : SelfSubjectRulesReview场景 - imgblock_0001 : 镜像白名单阻断 - imgblock_0002 : 镜像黑名单阻断 - imgblock_0003 : 镜像标签白名单阻断 - imgblock_0004 : 镜像标签黑名单阻断 - imgblock_0005 : 创建容器白名单阻断 - imgblock_0006 : 创建容器黑名单阻断 - imgblock_0007 : 容器mount proc阻断 - imgblock_0008 : 容器seccomp unconfined阻断 - imgblock_0009 : 容器特权阻断 - imgblock_0010 : 容器capabilities阻断
     * @param {Array<string>} [severityList] 威胁等级，包含如下:   - Security ：安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [attackTag] 攻击标识，包含如下：   - attack_success : 攻击成功   - attack_attempt : 攻击尝试   - attack_blocked : 攻击被阻断   - abnormal_behavior : 异常行为   - collapsible_host : 主机失陷   - system_vulnerability : 系统脆弱性
     * @param {string} [assetValue] 资产重要性，包含如下3种   - important ：重要资产   - common ：一般资产   - test ：测试资产
     * @param {Array<string>} [tagList] 事件标签列表，例如:[\&quot;热点事件\&quot;]
     * @param {string} [attCk] ATT&amp;CK攻击阶，包含如下：   - Reconnaissance : 侦察   - Initial Access : 初始访问   - Execution : 执行   - Persistence : 持久化   - Privilege Escalation : 权限提升   - Defense Evasion : 防御绕过   - Credential Access : 凭据访问   - Command and Control : 命令与控制   - Impact : 影响破坏
     * @param {string} [eventName] 告警名称
     * @param {boolean} [autoBlock] 是否自动阻断告警
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityEvents(listSecurityEventsRequest?: ListSecurityEventsRequest): Promise<ListSecurityEventsResponse> {
        const options = ParamCreater().listSecurityEvents(listSecurityEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询swr镜像仓库镜像列表,如果需要从swr同步最新镜像，需要先调用“从swr同步镜像”接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询swr镜像仓库镜像列表
     * @param {string} region Region ID
     * @param {string} imageType 镜像类型，包含如下:   - private_image : 私有镜像仓库   - shared_image : 共享镜像仓库   - local_image : 本地镜像   - instance_image : 企业镜像
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [namespace] 组织名称
     * @param {string} [imageName] 镜像名称
     * @param {string} [imageVersion] 镜像版本
     * @param {boolean} [latestVersion] 仅关注最新版本镜像
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示数量
     * @param {string} [scanStatus] 扫描状态，包含如下:   - unscan : 未扫描   - success : 扫描完成   - scanning : 扫描中   - failed : 扫描失败   - waiting_for_scan : 等待扫描
     * @param {string} [instanceName] 企业镜像实例名称
     * @param {number} [imageSize] 镜像大小
     * @param {number} [startLatestUpdateTime] 创建时间开始日期，时间单位 毫秒（ms）
     * @param {number} [endLatestUpdateTime] 创建时间结束日期，时间单位 毫秒（ms）
     * @param {number} [startLatestScanTime] 最近一次扫描完成时间开始日期，时间单位 毫秒（ms）
     * @param {number} [endLatestScanTime] 最近一次扫描完成时间结束日期，时间单位 毫秒（ms）
     * @param {boolean} [hasMaliciousFile] 是否存在恶意文件
     * @param {boolean} [hasUnsafeSetting] 是否存在基线检查
     * @param {boolean} [hasVul] 是否存在软件漏洞
     * @param {string} [instanceId] 企业仓库实例ID，swr共享版无需使用该参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSwrImageRepository(listSwrImageRepositoryRequest?: ListSwrImageRepositoryRequest): Promise<ListSwrImageRepositoryResponse> {
        const options = ParamCreater().listSwrImageRepository(listSwrImageRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询系统用户白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询系统用白名单列表
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostId] 服务器ID
     * @param {string} [hostName] 服务器名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [systemUserName] 系统用户名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSystemUserWhiteList(listSystemUserWhiteListRequest?: ListSystemUserWhiteListRequest): Promise<ListSystemUserWhiteListResponse> {
        const options = ParamCreater().listSystemUserWhiteList(listSystemUserWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询双因子主机列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询双因子主机列表
     * @param {number} limit 默认10
     * @param {number} offset 默认0
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 主机名
     * @param {string} [displayName] 显示名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTwoFactorLoginHost(listTwoFactorLoginHostRequest?: ListTwoFactorLoginHostRequest): Promise<ListTwoFactorLoginHostResponse> {
        const options = ParamCreater().listTwoFactorLoginHost(listTwoFactorLoginHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取账户变动历史记录信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取账户变动历史信息
     * @param {string} [userName] 账号名
     * @param {string} [hostId] 主机id
     * @param {boolean} [rootPermission] 是否有root权限
     * @param {string} [hostName] 主机名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [changeType] 账号变更类型:   - ADD ：添加   - DELETE ：删除   - MODIFY ： 修改
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [startTime] 变更开始时间，13位时间戳
     * @param {number} [endTime] 变更结束时间，13位时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserChangeHistories(listUserChangeHistoriesRequest?: ListUserChangeHistoriesRequest): Promise<ListUserChangeHistoriesResponse> {
        const options = ParamCreater().listUserChangeHistories(listUserChangeHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账号信息列表，支持通过传入账号名称参数查询对应的服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号信息列表
     * @param {string} [userName] 账号名称，参考windows文件命名规则，支持字母、数字、下划线、中文，特殊字符!@.-等，不包括中文标点符号
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserStatistics(listUserStatisticsRequest?: ListUserStatisticsRequest): Promise<ListUserStatisticsResponse> {
        const options = ParamCreater().listUserStatistics(listUserStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账号的服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号的服务器列表
     * @param {string} [hostId] 主机ID
     * @param {string} [userName] 账号名称
     * @param {string} [hostName] 主机名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {boolean} [loginPermission] 是否允许登录
     * @param {boolean} [rootPermission] 是否有root权限
     * @param {string} [userGroup] 主机用户组
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {boolean} [partMatch] 是否模糊匹配，默认false表示精确匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsers(listUsersRequest?: ListUsersRequest): Promise<ListUsersResponse> {
        const options = ParamCreater().listUsers(listUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询漏洞历史处置记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询漏洞历史处置记录列表
     * @param {string} enterpriseProjectId 企业项目ID
     * @param {number} limit 每页个数
     * @param {number} offset 偏移量
     * @param {Array<string>} [status] 漏洞状态,包含如下:   - vul_status_unfix : 未处理   - vul_status_ignored : 已忽略   - vul_status_verified : 验证中   - vul_status_fixing : 修复中   - vul_status_fixed : 修复成功   - vul_status_reboot : 修复成功待重启   - vul_status_failed : 修复失败   - vul_status_fix_after_reboot : 请重启主机再次修复
     * @param {string} [vulId] 漏洞ID
     * @param {string} [vulType] 漏洞类型,包含如下:   - linux_vul : Linux漏洞   - windows_vul : Windows漏洞   - web_cms : Web-CMS漏洞   - app_vul : 应用漏洞   - urgent_vul : 应急漏洞
     * @param {string} [assetValue] 资产重要性,包含如下:   - important : 重要资产   - common  : 一般资产   - test  : 测试资产
     * @param {string} [groupName] 服务器组
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP。
     * @param {string} [clusterId] 集群ID。
     * @param {'handle_time'} [sortKey] 排序字段，包含如下:   - handle_time : 处置时间
     * @param {'asc' | 'desc'} [sortDir] 排序顺序，若sort_key不为空,设置返回结果按照sort_key升序或降序排序,默认降序排序,包含如下:   - asc : 升序   - desc : 降序
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [privateIp] 服务器私网IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVulHandleHistory(listVulHandleHistoryRequest?: ListVulHandleHistoryRequest): Promise<ListVulHandleHistoryResponse> {
        const options = ParamCreater().listVulHandleHistory(listVulHandleHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个漏洞影响的云服务器信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个漏洞影响的云服务器信息
     * @param {string} vulId 漏洞ID
     * @param {string} type 漏洞类型   - linux_vul : 漏洞类型-linux漏洞   - windows_vul : 漏洞类型-windows漏洞   - web_cms : Web-CMS漏洞   - app_vul : 应用漏洞   - urgent_vul : 应急漏洞
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 受影响主机名称
     * @param {string} [hostIp] 受影响主机ip
     * @param {string} [status] 漏洞状态   - vul_status_unfix : 未处理   - vul_status_ignored : 已忽略   - vul_status_verified : 验证中   - vul_status_fixing : 修复中   - vul_status_fixed : 修复成功   - vul_status_reboot : 修复成功待重启   - vul_status_failed : 修复失败   - vul_status_fix_after_reboot : 请重启主机再次修复
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [assetValue] 资产重要性 important:重要 common：一般 test：测试
     * @param {string} [groupName] 服务器组名称
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [severityLevel] 危险程度 ，Critical，High，Medium，Low
     * @param {boolean} [isAffectBusiness] 是否影响业务
     * @param {string} [repairPriority] 修复优先级,包含如下 - Critical 紧急  - High 高 - Medium 中 - Low 低
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVulHosts(listVulHostsRequest?: ListVulHostsRequest): Promise<ListVulHostsResponse> {
        const options = ParamCreater().listVulHosts(listVulHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询漏洞扫描任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询漏洞扫描任务列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示个数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [scanType] 扫描任务的类型，包含如下：   -manual : 手动扫描任务   -schedule : 定时扫描任务
     * @param {string} [taskId] 扫描任务ID
     * @param {number} [minStartTime] 扫描任务开始时间的最小值
     * @param {number} [maxStartTime] 扫描任务开始时间的最大值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVulScanTask(listVulScanTaskRequest?: ListVulScanTaskRequest): Promise<ListVulScanTaskResponse> {
        const options = ParamCreater().listVulScanTask(listVulScanTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询漏洞扫描任务对应的主机列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询漏洞扫描任务对应的主机列表
     * @param {string} taskId 任务ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [limit] 每页显示个数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [scanStatus] 主机的扫描状态，包含如下：   -scanning : 扫描中   -success : 扫描成功   -failed : 扫描失败
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVulScanTaskHost(listVulScanTaskHostRequest?: ListVulScanTaskHostRequest): Promise<ListVulScanTaskHostResponse> {
        const options = ParamCreater().listVulScanTaskHost(listVulScanTaskHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询漏洞列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询漏洞列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [type] 漏洞类型，包含如下：   -linux_vul : linux漏洞   -windows_vul : windows漏洞   -web_cms : Web-CMS漏洞   -app_vul : 应用漏洞
     * @param {string} [vulId] 漏洞ID
     * @param {string} [vulName] 漏洞名称
     * @param {number} [limit] 每页显示个数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {string} [repairPriority] 修复优先级 Critical 紧急 High  高 Medium 中 Low 低
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [cveId] 漏洞编号
     * @param {string} [labelList] 漏洞标签
     * @param {string} [status] 漏洞状态
     * @param {string} [assetValue] 资产重要性 important common test
     * @param {string} [groupName] 服务器组名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVulnerabilities(listVulnerabilitiesRequest?: ListVulnerabilitiesRequest): Promise<ListVulnerabilitiesResponse> {
        const options = ParamCreater().listVulnerabilities(listVulnerabilitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 漏洞对应cve信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 漏洞对应cve信息
     * @param {string} vulId 漏洞ID
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {number} [limit] 每页显示数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVulnerabilityCve(listVulnerabilityCveRequest?: ListVulnerabilityCveRequest): Promise<ListVulnerabilityCveResponse> {
        const options = ParamCreater().listVulnerabilityCve(listVulnerabilityCveRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弱口令检测结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弱口令检测结果列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP地址
     * @param {string} [userName] 弱口令账号名称
     * @param {string} [hostId] 主机ID，不赋值时，查租户所有主机
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWeakPasswordUsers(listWeakPasswordUsersRequest?: ListWeakPasswordUsersRequest): Promise<ListWeakPasswordUsersResponse> {
        const options = ParamCreater().listWeakPasswordUsers(listWeakPasswordUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护列表：查询网页防篡改主机防护状态列表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护列表
     * @param {string} region Region Id
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostId] 主机ID
     * @param {string} [publicIp] 弹性公网IP
     * @param {string} [privateIp] 私有IP
     * @param {string} [groupName] 服务器组名称
     * @param {string} [osType] 操作系统类别（linux，windows）   - linux : linux操作系统   - windows : windows操作系统
     * @param {string} [protectStatus] 配额状态   - opened : 已绑定网页防篡改配额
     * @param {string} [wtpStatus] 网页防篡改防护状态   - opened : 防护汇总   - opening : 正在开启   - open_failed : 防护失败   - partial_protection : 部分防护   - protection_interruption : 防护中断
     * @param {string} [agentStatus] 客户端状态   - not_installed : agent未安装   - online : agent在线   - offline : agent不在线
     * @param {number} [limit] 默认10
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWtpProtectHost(listWtpProtectHostRequest?: ListWtpProtectHostRequest): Promise<ListWtpProtectHostResponse> {
        const options = ParamCreater().listWtpProtectHost(listWtpProtectHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑动态端口蜜罐策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑动态端口蜜罐策略
     * @param {string} policyId policy ID
     * @param {HoneypotPortPolicyContent} modifyDecoyPortPolicyRequestBody request
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyDecoyPortPolicy(modifyDecoyPortPolicyRequest?: ModifyDecoyPortPolicyRequest): Promise<ModifyDecoyPortPolicyResponse> {
        const options = ParamCreater().modifyDecoyPortPolicy(modifyDecoyPortPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除告警白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警白名单
     * @param {RemoveAlarmWhiteListRequestInfo} removeAlarmWhiteListRequestBody request
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeAlarmWhiteList(removeAlarmWhiteListRequest?: RemoveAlarmWhiteListRequest): Promise<RemoveAlarmWhiteListResponse> {
        const options = ParamCreater().removeAlarmWhiteList(removeAlarmWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除登录白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除登录白名单
     * @param {RemoveLoginWhiteListRequestInfo} removeLoginWhiteListRequestBody request
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeLoginWhiteList(removeLoginWhiteListRequest?: RemoveLoginWhiteListRequest): Promise<RemoveLoginWhiteListResponse> {
        const options = ParamCreater().removeLoginWhiteList(removeLoginWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除系统用户白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除系统用户白名单
     * @param {RemoveSystemUserWhiteListRequestInfo} removeSystemUserWhiteListRequestBody request
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeSystemUserWhiteList(removeSystemUserWhiteListRequest?: RemoveSystemUserWhiteListRequest): Promise<RemoveSystemUserWhiteListResponse> {
        const options = ParamCreater().removeSystemUserWhiteList(removeSystemUserWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从SWR服务同步镜像列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从SWR服务同步镜像列表
     * @param {RunImageSynchronizeRequestInfo} runImageSynchronizeRequestBody request
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runImageSynchronize(runImageSynchronizeRequest?: RunImageSynchronizeRequest): Promise<RunImageSynchronizeResponse> {
        const options = ParamCreater().runImageSynchronize(runImageSynchronizeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/关闭动态网页防篡改防护，下发/清空动态网页防篡改策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭动态网页防篡改防护
     * @param {string} region Region Id
     * @param {SetRaspSwitchRequestInfo} setRaspSwitchRequestBody 请求体request
     * @param {string} [contentType] 缺省值:application/json; charset&#x3D;utf-8
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRaspSwitch(setRaspSwitchRequest?: SetRaspSwitchRequest): Promise<SetRaspSwitchResponse> {
        const options = ParamCreater().setRaspSwitch(setRaspSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置双因子登录配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置双因子登录配置
     * @param {SetTwoFactorLoginConfigRequestBody} setTwoFactorLoginConfigRequestBody set two factor login config
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setTwoFactorLoginConfig(setTwoFactorLoginConfigRequest?: SetTwoFactorLoginConfigRequest): Promise<SetTwoFactorLoginConfigResponse> {
        const options = ParamCreater().setTwoFactorLoginConfig(setTwoFactorLoginConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/关闭网页防篡改功能防护，下发/清空网页防篡改策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭网页防篡改防护
     * @param {string} region Region Id
     * @param {SetWtpProtectionStatusRequestInfo} setWtpProtectionStatusInfoRequestBody 请求体request
     * @param {string} [contentType] 缺省值:application/json; charset&#x3D;utf-8
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setWtpProtectionStatusInfo(setWtpProtectionStatusInfoRequest?: SetWtpProtectionStatusInfoRequest): Promise<SetWtpProtectionStatusInfoResponse> {
        const options = ParamCreater().setWtpProtectionStatusInfo(setWtpProtectionStatusInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询病毒查杀统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询病毒查杀统计信息
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAntivirusStatistic(showAntivirusStatisticRequest?: ShowAntivirusStatisticRequest): Promise<ShowAntivirusStatisticResponse> {
        const options = ParamCreater().showAntivirusStatistic(showAntivirusStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用防护开启状态：查询单台服务器的应用防护功能开启状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用防护开启状态
     * @param {string} enterpriseProjectId 企业项目ID
     * @param {string} hostId host id
     * @param {'java'} [appType] 应用类型，包含如下1种。   - java ：java类型应用防护。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppRaspSwitchStatus(showAppRaspSwitchStatusRequest?: ShowAppRaspSwitchStatusRequest): Promise<ShowAppRaspSwitchStatusResponse> {
        const options = ParamCreater().showAppRaspSwitchStatus(showAppRaspSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资产统计信息，账号、端口、进程等
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 统计资产信息，账号、端口、进程等
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostId] Host ID
     * @param {string} [category] 类别，默认为host，包含如下： - host：主机 - container：容器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssetStatistic(showAssetStatisticRequest?: ShowAssetStatisticRequest): Promise<ShowAssetStatisticResponse> {
        const options = ParamCreater().showAssetStatistic(showAssetStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询HSS存储库绑定的备份策略信息,确保已经购买了勒索防护存储库，可以从cbr云备份服务进行验证，确保已经存在HSS_projectid命名的存储库已经购买
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询HSS存储库绑定的备份策略信息
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupPolicyInfo(showBackupPolicyInfoRequest?: ShowBackupPolicyInfoRequest): Promise<ShowBackupPolicyInfoResponse> {
        const options = ParamCreater().showBackupPolicyInfo(showBackupPolicyInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配置检查项检测报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配置检查项检测报告
     * @param {string} checkName 配置检查（基线）的名称，例如SSH、CentOS 7、Windows
     * @param {string} checkType 配置检查（基线）的类型,Linux系统支持的基线一般check_type和check_name相同,例如SSH、CentOS 7。 Windows系统支持的基线一般check_type和check_name不相同，例如check_name为Windows的配置检查（基线），它的check_type包含Windows Server 2019 R2、Windows Server 2016 R2等。check_type的值可以通过这个接口的返回数据获得：/v5/{project_id}/baseline/risk-configs
     * @param {string} checkRuleId 检查项ID，值可以通过这个接口的返回数据获得：/v5/{project_id}/baseline/risk-config/{check_name}/check-rules
     * @param {string} standard 标准类型，包含如下:   - cn_standard : 等保合规标准   - hw_standard : 云安全实践标准
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostId] 主机ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCheckRuleDetail(showCheckRuleDetailRequest?: ShowCheckRuleDetailRequest): Promise<ShowCheckRuleDetailResponse> {
        const options = ParamCreater().showCheckRuleDetail(showCheckRuleDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看动态端口蜜罐策略详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看动态端口蜜罐策略详情
     * @param {string} policyId policy ID
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {number} limit 每页显示个数
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDecoyPortPolicyDetails(showDecoyPortPolicyDetailsRequest?: ShowDecoyPortPolicyDetailsRequest): Promise<ShowDecoyPortPolicyDetailsResponse> {
        const options = ParamCreater().showDecoyPortPolicyDetails(showDecoyPortPolicyDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像配置检查项检测报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像配置检查项检测报告
     * @param {string} imageType 镜像类型，包含如下:   - private_image : 私有镜像仓库   - shared_image : 共享镜像仓库   - local_image : 本地镜像   - instance_image : 企业镜像
     * @param {string} checkName 基线名称
     * @param {string} checkType 基线类型
     * @param {string} checkRuleId 检查项id
     * @param {string} standard 标准类型，包含如下:   - cn_standard : 等保合规标准   - hw_standard : 云安全实践标准
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [namespace] 组织名称（没有镜像相关信息时，表示查询所有镜像）
     * @param {string} [imageName] 镜像名称
     * @param {string} [imageVersion] 镜像版本名称
     * @param {string} [imageId] 镜像id
     * @param {string} [instanceId] 企业仓库实例ID，swr共享版无需使用该参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageCheckRuleDetail(showImageCheckRuleDetailRequest?: ShowImageCheckRuleDetailRequest): Promise<ShowImageCheckRuleDetailResponse> {
        const options = ParamCreater().showImageCheckRuleDetail(showImageCheckRuleDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询产商品信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产商品信息
     * @param {string} region Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [siteCode] 站点信息：   - HWC_CN ：中国站   - HWC_HK ：国际站   - HWC_EU : 欧洲站
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProductdataOfferingInfos(showProductdataOfferingInfosRequest?: ShowProductdataOfferingInfosRequest): Promise<ShowProductdataOfferingInfosResponse> {
        const options = ParamCreater().showProductdataOfferingInfos(showProductdataOfferingInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护策略详情：查询防护策略配置的相关检测规则信息，包含14种检测规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护策略详情
     * @param {string} enterpriseProjectId 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} policyId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRaspPolicyDetail(showRaspPolicyDetailRequest?: ShowRaspPolicyDetailRequest): Promise<ShowRaspPolicyDetailResponse> {
        const options = ParamCreater().showRaspPolicyDetail(showRaspPolicyDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 防护数据统计：统计已添加防护服务器的数量以及近七天微服务RASP攻击数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 防护数据统计
     * @param {string} enterpriseProjectId 企业项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRaspProtectStatistics(showRaspProtectStatisticsRequest?: ShowRaspProtectStatisticsRequest): Promise<ShowRaspProtectStatisticsResponse> {
        const options = ParamCreater().showRaspProtectStatistics(showRaspProtectStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护服务器java应用详情：查询防护服务器的java应用状态列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护服务器java应用详情
     * @param {number} limit 每页显示个数
     * @param {number} offset 偏移量：指定返回记录的开始位置
     * @param {string} hostId 服务器ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [keyword] 搜索关键词
     * @param {number} [appProtectStatus] java单个应用防护状态，包含如下3种。 - 0 ：未防护。 - 1 ：防护失败。 - 2 ：防护成功。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRaspServerDetail(showRaspServerDetailRequest?: ShowRaspServerDetailRequest): Promise<ShowRaspServerDetailResponse> {
        const options = ParamCreater().showRaspServerDetail(showRaspServerDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额信息
     * @param {string} [region] Region ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [version] 主机开通的版本，包含如下7种输入。   - hss.version.null ：无。   - hss.version.basic ：基础版。   - hss.version.advanced ：专业版。   - hss.version.enterprise ：企业版。   - hss.version.premium ：旗舰版。   - hss.version.wtp ：网页防篡改版。   - hss.version.container.enterprise：容器版。
     * @param {string} [chargingMode] 收费模式，包含如下2种。   - packet_cycle ：包年/包月。   - on_demand ：按需。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceQuotas(showResourceQuotasRequest?: ShowResourceQuotasRequest): Promise<ShowResourceQuotasResponse> {
        const options = ParamCreater().showResourceQuotas(showResourceQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定安全配置项的检查结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定安全配置项的检查结果
     * @param {string} checkName 配置检查（基线）的名称，例如SSH、CentOS 7、Windows
     * @param {string} standard 标准类型，包含如下: - cn_standard : 等保合规标准 - hw_standard : 云安全实践标准
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {string} [hostId] 主机ID，不赋值时，查租户所有主机
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRiskConfigDetail(showRiskConfigDetailRequest?: ShowRiskConfigDetailRequest): Promise<ShowRiskConfigDetailResponse> {
        const options = ParamCreater().showRiskConfigDetail(showRiskConfigDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个备份策略信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个备份策略信息
     * @param {string} policyId 备份策略ID
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSingleBackupPolicyInfo(showSingleBackupPolicyInfoRequest?: ShowSingleBackupPolicyInfoRequest): Promise<ShowSingleBackupPolicyInfoResponse> {
        const options = ParamCreater().showSingleBackupPolicyInfo(showSingleBackupPolicyInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询漏洞扫描策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询漏洞扫描策略
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVulScanPolicy(showVulScanPolicyRequest?: ShowVulScanPolicyRequest): Promise<ShowVulScanPolicyResponse> {
        const options = ParamCreater().showVulScanPolicy(showVulScanPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询漏洞管理统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询漏洞管理统计数据
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVulStatics(showVulStaticsRequest?: ShowVulStaticsRequest): Promise<ShowVulStaticsResponse> {
        const options = ParamCreater().showVulStatics(showVulStaticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启勒索病毒防护,请保证该region有cbr云备份服务，勒索服务与云备份服务有关联关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启勒索病毒防护
     * @param {string} region Region ID
     * @param {ProtectionInfoRequestInfo} startProtectionRequestBody 开启勒索病毒防护请求体
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startProtection(startProtectionRequest?: StartProtectionRequest): Promise<StartProtectionResponse> {
        const options = ParamCreater().startProtection(startProtectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭勒索病毒防护
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭勒索病毒防护
     * @param {string} region Region ID
     * @param {CloseProtectionInfoRequestInfo} stopProtectionRequestBody 关闭勒索病毒防护请求体
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopProtection(stopProtectionRequest?: StopProtectionRequest): Promise<StopProtectionResponse> {
        const options = ParamCreater().stopProtection(stopProtectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换主机动态端口蜜罐策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换主机动态端口蜜罐策略
     * @param {string} policyId policy ID
     * @param {string} hostId 服务器ID,可填多个，通过,分隔
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchDecoyPortHostPolicy(switchDecoyPortHostPolicyRequest?: SwitchDecoyPortHostPolicyRequest): Promise<SwitchDecoyPortHostPolicyResponse> {
        const options = ParamCreater().switchDecoyPortHostPolicy(switchDecoyPortHostPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换防护状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换防护状态
     * @param {string} region Region ID
     * @param {SwitchHostsProtectStatusRequestInfo} switchHostsProtectStatusRequestBody 服务器列表
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchHostsProtectStatus(switchHostsProtectStatusRequest?: SwitchHostsProtectStatusRequest): Promise<SwitchHostsProtectStatusResponse> {
        const options = ParamCreater().switchHostsProtectStatus(switchHostsProtectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新集群daemonset
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新集群daemonset
     * @param {string} region Region ID
     * @param {string} clusterId 集群id
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {UpdateDaemonsetRequestBody} [updateAgentDaemonsetRequestBody] 服务器列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAgentDaemonset(updateAgentDaemonsetRequest?: UpdateAgentDaemonsetRequest): Promise<UpdateAgentDaemonsetResponse> {
        const options = ParamCreater().updateAgentDaemonset(updateAgentDaemonsetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改存储库绑定的备份策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改存储库绑定的备份策略
     * @param {string} region Region ID
     * @param {UpdateBackupPolicyRequestInfo} updateBackupPolicyInfoRequestBody 修改备份策略请求体
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBackupPolicyInfo(updateBackupPolicyInfoRequest?: UpdateBackupPolicyInfoRequest): Promise<UpdateBackupPolicyInfoResponse> {
        const options = ParamCreater().updateBackupPolicyInfo(updateBackupPolicyInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改勒索防护策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改勒索防护策略
     * @param {string} region Region ID
     * @param {UpdateProtectionPolicyInfoRequestInfo} updateProtectionPolicyRequestBody 需要修改的防护策略的请求体
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProtectionPolicy(updateProtectionPolicyRequest?: UpdateProtectionPolicyRequest): Promise<UpdateProtectionPolicyResponse> {
        const options = ParamCreater().updateProtectionPolicy(updateProtectionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改系统用户白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改系统用户白名单
     * @param {UpdateSystemUserWhiteListRequestInfo} updateSystemUserWhiteListRequestBody 系统用户白名单
     * @param {string} [enterpriseProjectId] 主机所属的企业项目ID。 开通企业项目功能后才需要配置企业项目。 企业项目ID默认取值为“0”，表示默认企业项目。如果需要查询所有企业项目下的主机，请传参“all_granted_eps”。如果您只有某个企业项目的权限，则需要传递该企业项目ID，查询该企业项目下的主机，否则会因权限不足而报错。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSystemUserWhiteList(updateSystemUserWhiteListRequest?: UpdateSystemUserWhiteListRequest): Promise<UpdateSystemUserWhiteListResponse> {
        const options = ParamCreater().updateSystemUserWhiteList(updateSystemUserWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 新建cce集成防护配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addCceIntegrationProtection(addCceIntegrationProtectionRequest?: AddCceIntegrationProtectionRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/container/kubernetes/clusters/protection-enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (addCceIntegrationProtectionRequest !== null && addCceIntegrationProtectionRequest !== undefined) {
                if (addCceIntegrationProtectionRequest instanceof AddCceIntegrationProtectionRequest) {
                    region = addCceIntegrationProtectionRequest.region;
                    body = addCceIntegrationProtectionRequest.body
                    enterpriseProjectId = addCceIntegrationProtectionRequest.enterpriseProjectId;
                } else {
                    region = addCceIntegrationProtectionRequest['region'];
                    body = addCceIntegrationProtectionRequest['body'];
                    enterpriseProjectId = addCceIntegrationProtectionRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建服务器组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addHostsGroup(addHostsGroupRequest?: AddHostsGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/host-management/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;
            
            let contentType;

            if (addHostsGroupRequest !== null && addHostsGroupRequest !== undefined) {
                if (addHostsGroupRequest instanceof AddHostsGroupRequest) {
                    region = addHostsGroupRequest.region;
                    body = addHostsGroupRequest.body
                    enterpriseProjectId = addHostsGroupRequest.enterpriseProjectId;
                    contentType = addHostsGroupRequest.contentType;
                } else {
                    region = addHostsGroupRequest['region'];
                    body = addHostsGroupRequest['body'];
                    enterpriseProjectId = addHostsGroupRequest['enterprise_project_id'];
                    contentType = addHostsGroupRequest['Content-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加登录白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addLoginWhiteList(addLoginWhiteListRequest?: AddLoginWhiteListRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/event/white-list/login",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (addLoginWhiteListRequest !== null && addLoginWhiteListRequest !== undefined) {
                if (addLoginWhiteListRequest instanceof AddLoginWhiteListRequest) {
                    body = addLoginWhiteListRequest.body
                    enterpriseProjectId = addLoginWhiteListRequest.enterpriseProjectId;
                } else {
                    body = addLoginWhiteListRequest['body'];
                    enterpriseProjectId = addLoginWhiteListRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加防护策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addProtectionPolicy(addProtectionPolicyRequest?: AddProtectionPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/ransomware/protection/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;
            
            let region;

            if (addProtectionPolicyRequest !== null && addProtectionPolicyRequest !== undefined) {
                if (addProtectionPolicyRequest instanceof AddProtectionPolicyRequest) {
                    body = addProtectionPolicyRequest.body
                    enterpriseProjectId = addProtectionPolicyRequest.enterpriseProjectId;
                    region = addProtectionPolicyRequest.region;
                } else {
                    body = addProtectionPolicyRequest['body'];
                    enterpriseProjectId = addProtectionPolicyRequest['enterprise_project_id'];
                    region = addProtectionPolicyRequest['region'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加系统用户白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addSystemUserWhiteList(addSystemUserWhiteListRequest?: AddSystemUserWhiteListRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/event/white-list/userlist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (addSystemUserWhiteListRequest !== null && addSystemUserWhiteListRequest !== undefined) {
                if (addSystemUserWhiteListRequest instanceof AddSystemUserWhiteListRequest) {
                    body = addSystemUserWhiteListRequest.body
                    enterpriseProjectId = addSystemUserWhiteListRequest.enterpriseProjectId;
                } else {
                    body = addSystemUserWhiteListRequest['body'];
                    enterpriseProjectId = addSystemUserWhiteListRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 部署策略组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associatePolicyGroup(associatePolicyGroupRequest?: AssociatePolicyGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/policy/deploy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;
            
            let contentType;

            if (associatePolicyGroupRequest !== null && associatePolicyGroupRequest !== undefined) {
                if (associatePolicyGroupRequest instanceof AssociatePolicyGroupRequest) {
                    region = associatePolicyGroupRequest.region;
                    body = associatePolicyGroupRequest.body
                    enterpriseProjectId = associatePolicyGroupRequest.enterpriseProjectId;
                    contentType = associatePolicyGroupRequest.contentType;
                } else {
                    region = associatePolicyGroupRequest['region'];
                    body = associatePolicyGroupRequest['body'];
                    enterpriseProjectId = associatePolicyGroupRequest['enterprise_project_id'];
                    contentType = associatePolicyGroupRequest['Content-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加账号
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddAccounts(batchAddAccountsRequest?: BatchAddAccountsRequest) {
            const options = {
                method: "POST",
                url: "/v5/setting/account/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let xSecurityToken;
            
            let enterpriseProjectId;

            if (batchAddAccountsRequest !== null && batchAddAccountsRequest !== undefined) {
                if (batchAddAccountsRequest instanceof BatchAddAccountsRequest) {
                    region = batchAddAccountsRequest.region;
                    body = batchAddAccountsRequest.body
                    xSecurityToken = batchAddAccountsRequest.xSecurityToken;
                    enterpriseProjectId = batchAddAccountsRequest.enterpriseProjectId;
                } else {
                    region = batchAddAccountsRequest['region'];
                    body = batchAddAccountsRequest['body'];
                    xSecurityToken = batchAddAccountsRequest['X-Security-Token'];
                    enterpriseProjectId = batchAddAccountsRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateTags(batchCreateTagsRequest?: BatchCreateTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let contentType;

            if (batchCreateTagsRequest !== null && batchCreateTagsRequest !== undefined) {
                if (batchCreateTagsRequest instanceof BatchCreateTagsRequest) {
                    resourceType = batchCreateTagsRequest.resourceType;
                    resourceId = batchCreateTagsRequest.resourceId;
                    body = batchCreateTagsRequest.body
                    contentType = batchCreateTagsRequest.contentType;
                } else {
                    resourceType = batchCreateTagsRequest['resource_type'];
                    resourceId = batchCreateTagsRequest['resource_id'];
                    body = batchCreateTagsRequest['body'];
                    contentType = batchCreateTagsRequest['Content-Type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 镜像仓库镜像批量扫描
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchScanSwrImage(batchScanSwrImageRequest?: BatchScanSwrImageRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/image/batch-scan",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (batchScanSwrImageRequest !== null && batchScanSwrImageRequest !== undefined) {
                if (batchScanSwrImageRequest instanceof BatchScanSwrImageRequest) {
                    body = batchScanSwrImageRequest.body
                    region = batchScanSwrImageRequest.region;
                    enterpriseProjectId = batchScanSwrImageRequest.enterpriseProjectId;
                } else {
                    body = batchScanSwrImageRequest['body'];
                    region = batchScanSwrImageRequest['region'];
                    enterpriseProjectId = batchScanSwrImageRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑自定义查杀策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeAntivirusPolicy(changeAntivirusPolicyRequest?: ChangeAntivirusPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/antivirus/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (changeAntivirusPolicyRequest !== null && changeAntivirusPolicyRequest !== undefined) {
                if (changeAntivirusPolicyRequest instanceof ChangeAntivirusPolicyRequest) {
                    body = changeAntivirusPolicyRequest.body
                    enterpriseProjectId = changeAntivirusPolicyRequest.enterpriseProjectId;
                } else {
                    body = changeAntivirusPolicyRequest['body'];
                    enterpriseProjectId = changeAntivirusPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除已拦截IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeBlockedIp(changeBlockedIpRequest?: ChangeBlockedIpRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/event/blocked-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (changeBlockedIpRequest !== null && changeBlockedIpRequest !== undefined) {
                if (changeBlockedIpRequest instanceof ChangeBlockedIpRequest) {
                    region = changeBlockedIpRequest.region;
                    body = changeBlockedIpRequest.body
                    enterpriseProjectId = changeBlockedIpRequest.enterpriseProjectId;
                } else {
                    region = changeBlockedIpRequest['region'];
                    body = changeBlockedIpRequest['body'];
                    enterpriseProjectId = changeBlockedIpRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对未通过的配置检查项进行忽略/取消忽略/修复/验证操作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeCheckRuleAction(changeCheckRuleActionRequest?: ChangeCheckRuleActionRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/baseline/check-rule/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let action;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let checkCce;

            if (changeCheckRuleActionRequest !== null && changeCheckRuleActionRequest !== undefined) {
                if (changeCheckRuleActionRequest instanceof ChangeCheckRuleActionRequest) {
                    action = changeCheckRuleActionRequest.action;
                    body = changeCheckRuleActionRequest.body
                    enterpriseProjectId = changeCheckRuleActionRequest.enterpriseProjectId;
                    hostId = changeCheckRuleActionRequest.hostId;
                    checkCce = changeCheckRuleActionRequest.checkCce;
                } else {
                    action = changeCheckRuleActionRequest['action'];
                    body = changeCheckRuleActionRequest['body'];
                    enterpriseProjectId = changeCheckRuleActionRequest['enterprise_project_id'];
                    hostId = changeCheckRuleActionRequest['host_id'];
                    checkCce = changeCheckRuleActionRequest['check_cce'];
                }
            }

        
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling changeCheckRuleAction.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (checkCce !== null && checkCce !== undefined) {
                localVarQueryParameter['check_cce'] = checkCce;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 处理告警事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeEvent(changeEventRequest?: ChangeEventRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/event/operate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;
            
            let containerName;
            
            let containerId;

            if (changeEventRequest !== null && changeEventRequest !== undefined) {
                if (changeEventRequest instanceof ChangeEventRequest) {
                    region = changeEventRequest.region;
                    body = changeEventRequest.body
                    enterpriseProjectId = changeEventRequest.enterpriseProjectId;
                    containerName = changeEventRequest.containerName;
                    containerId = changeEventRequest.containerId;
                } else {
                    region = changeEventRequest['region'];
                    body = changeEventRequest['body'];
                    enterpriseProjectId = changeEventRequest['enterprise_project_id'];
                    containerName = changeEventRequest['container_name'];
                    containerId = changeEventRequest['container_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (containerName !== null && containerName !== undefined) {
                localVarQueryParameter['container_name'] = containerName;
            }
            if (containerId !== null && containerId !== undefined) {
                localVarQueryParameter['container_id'] = containerId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑服务器组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeHostsGroup(changeHostsGroupRequest?: ChangeHostsGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/host-management/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;
            
            let contentType;

            if (changeHostsGroupRequest !== null && changeHostsGroupRequest !== undefined) {
                if (changeHostsGroupRequest instanceof ChangeHostsGroupRequest) {
                    region = changeHostsGroupRequest.region;
                    body = changeHostsGroupRequest.body
                    enterpriseProjectId = changeHostsGroupRequest.enterpriseProjectId;
                    contentType = changeHostsGroupRequest.contentType;
                } else {
                    region = changeHostsGroupRequest['region'];
                    body = changeHostsGroupRequest['body'];
                    enterpriseProjectId = changeHostsGroupRequest['enterprise_project_id'];
                    contentType = changeHostsGroupRequest['Content-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复已隔离文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeIsolatedFile(changeIsolatedFileRequest?: ChangeIsolatedFileRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/event/isolated-file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (changeIsolatedFileRequest !== null && changeIsolatedFileRequest !== undefined) {
                if (changeIsolatedFileRequest instanceof ChangeIsolatedFileRequest) {
                    region = changeIsolatedFileRequest.region;
                    body = changeIsolatedFileRequest.body
                    enterpriseProjectId = changeIsolatedFileRequest.enterpriseProjectId;
                } else {
                    region = changeIsolatedFileRequest['region'];
                    body = changeIsolatedFileRequest['body'];
                    enterpriseProjectId = changeIsolatedFileRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改漏洞扫描策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeVulScanPolicy(changeVulScanPolicyRequest?: ChangeVulScanPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/vulnerability/scan-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (changeVulScanPolicyRequest !== null && changeVulScanPolicyRequest !== undefined) {
                if (changeVulScanPolicyRequest instanceof ChangeVulScanPolicyRequest) {
                    body = changeVulScanPolicyRequest.body
                    enterpriseProjectId = changeVulScanPolicyRequest.enterpriseProjectId;
                } else {
                    body = changeVulScanPolicyRequest['body'];
                    enterpriseProjectId = changeVulScanPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改漏洞的状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeVulStatus(changeVulStatusRequest?: ChangeVulStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/vulnerability/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let contentType;
            
            let enterpriseProjectId;

            if (changeVulStatusRequest !== null && changeVulStatusRequest !== undefined) {
                if (changeVulStatusRequest instanceof ChangeVulStatusRequest) {
                    body = changeVulStatusRequest.body
                    contentType = changeVulStatusRequest.contentType;
                    enterpriseProjectId = changeVulStatusRequest.enterpriseProjectId;
                } else {
                    body = changeVulStatusRequest['body'];
                    contentType = changeVulStatusRequest['Content-Type'];
                    enterpriseProjectId = changeVulStatusRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自定义查杀策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAntiVirusPolicy(createAntiVirusPolicyRequest?: CreateAntiVirusPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/antivirus/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (createAntiVirusPolicyRequest !== null && createAntiVirusPolicyRequest !== undefined) {
                if (createAntiVirusPolicyRequest instanceof CreateAntiVirusPolicyRequest) {
                    body = createAntiVirusPolicyRequest.body
                    enterpriseProjectId = createAntiVirusPolicyRequest.enterpriseProjectId;
                } else {
                    body = createAntiVirusPolicyRequest['body'];
                    enterpriseProjectId = createAntiVirusPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建病毒扫描任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAntiVirusTask(createAntiVirusTaskRequest?: CreateAntiVirusTaskRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/antivirus/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (createAntiVirusTaskRequest !== null && createAntiVirusTaskRequest !== undefined) {
                if (createAntiVirusTaskRequest instanceof CreateAntiVirusTaskRequest) {
                    body = createAntiVirusTaskRequest.body
                    enterpriseProjectId = createAntiVirusTaskRequest.enterpriseProjectId;
                } else {
                    body = createAntiVirusTaskRequest['body'];
                    enterpriseProjectId = createAntiVirusTaskRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增动态端口蜜罐策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDecoyPortPolicy(createDecoyPortPolicyRequest?: CreateDecoyPortPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/honeypot-port/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (createDecoyPortPolicyRequest !== null && createDecoyPortPolicyRequest !== undefined) {
                if (createDecoyPortPolicyRequest instanceof CreateDecoyPortPolicyRequest) {
                    body = createDecoyPortPolicyRequest.body
                    enterpriseProjectId = createDecoyPortPolicyRequest.enterpriseProjectId;
                } else {
                    body = createDecoyPortPolicyRequest['body'];
                    enterpriseProjectId = createDecoyPortPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * HSS服务创建订单订购配额，只支持包周期计费模式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createQuotasOrder(createQuotasOrderRequest?: CreateQuotasOrderRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/quotas/orders",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let contentType;
            
            let enterpriseProjectId;

            if (createQuotasOrderRequest !== null && createQuotasOrderRequest !== undefined) {
                if (createQuotasOrderRequest instanceof CreateQuotasOrderRequest) {
                    region = createQuotasOrderRequest.region;
                    body = createQuotasOrderRequest.body
                    contentType = createQuotasOrderRequest.contentType;
                    enterpriseProjectId = createQuotasOrderRequest.enterpriseProjectId;
                } else {
                    region = createQuotasOrderRequest['region'];
                    body = createQuotasOrderRequest['body'];
                    contentType = createQuotasOrderRequest['Content-Type'];
                    enterpriseProjectId = createQuotasOrderRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建漏洞扫描任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVulnerabilityScanTask(createVulnerabilityScanTaskRequest?: CreateVulnerabilityScanTaskRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/vulnerability/scan-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (createVulnerabilityScanTaskRequest !== null && createVulnerabilityScanTaskRequest !== undefined) {
                if (createVulnerabilityScanTaskRequest instanceof CreateVulnerabilityScanTaskRequest) {
                    body = createVulnerabilityScanTaskRequest.body
                    enterpriseProjectId = createVulnerabilityScanTaskRequest.enterpriseProjectId;
                } else {
                    body = createVulnerabilityScanTaskRequest['body'];
                    enterpriseProjectId = createVulnerabilityScanTaskRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除账号
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAccount(deleteAccountRequest?: DeleteAccountRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/setting/account/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let xSecurityToken;
            
            let enterpriseProjectId;

            if (deleteAccountRequest !== null && deleteAccountRequest !== undefined) {
                if (deleteAccountRequest instanceof DeleteAccountRequest) {
                    region = deleteAccountRequest.region;
                    body = deleteAccountRequest.body
                    xSecurityToken = deleteAccountRequest.xSecurityToken;
                    enterpriseProjectId = deleteAccountRequest.enterpriseProjectId;
                } else {
                    region = deleteAccountRequest['region'];
                    body = deleteAccountRequest['body'];
                    xSecurityToken = deleteAccountRequest['X-Security-Token'];
                    enterpriseProjectId = deleteAccountRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除集群daemonset
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAgentDaemonset(deleteAgentDaemonsetRequest?: DeleteAgentDaemonsetRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/container/kubernetes/clusters/{cluster_id}/daemonsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let clusterId;
            
            let enterpriseProjectId;
            
            let invokedService;

            if (deleteAgentDaemonsetRequest !== null && deleteAgentDaemonsetRequest !== undefined) {
                if (deleteAgentDaemonsetRequest instanceof DeleteAgentDaemonsetRequest) {
                    region = deleteAgentDaemonsetRequest.region;
                    clusterId = deleteAgentDaemonsetRequest.clusterId;
                    enterpriseProjectId = deleteAgentDaemonsetRequest.enterpriseProjectId;
                    invokedService = deleteAgentDaemonsetRequest.invokedService;
                } else {
                    region = deleteAgentDaemonsetRequest['region'];
                    clusterId = deleteAgentDaemonsetRequest['cluster_id'];
                    enterpriseProjectId = deleteAgentDaemonsetRequest['enterprise_project_id'];
                    invokedService = deleteAgentDaemonsetRequest['invoked_service'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteAgentDaemonset.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (invokedService !== null && invokedService !== undefined) {
                localVarQueryParameter['invoked_service'] = invokedService;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义查杀策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAntivirusPolicy(deleteAntivirusPolicyRequest?: DeleteAntivirusPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/antivirus/policy/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (deleteAntivirusPolicyRequest !== null && deleteAntivirusPolicyRequest !== undefined) {
                if (deleteAntivirusPolicyRequest instanceof DeleteAntivirusPolicyRequest) {
                    body = deleteAntivirusPolicyRequest.body
                    enterpriseProjectId = deleteAntivirusPolicyRequest.enterpriseProjectId;
                } else {
                    body = deleteAntivirusPolicyRequest['body'];
                    enterpriseProjectId = deleteAntivirusPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭主机动态端口蜜罐策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDecoyPortHostPolicy(deleteDecoyPortHostPolicyRequest?: DeleteDecoyPortHostPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/honeypot-port/host-policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyId;
            
            let hostId;
            
            let enterpriseProjectId;

            if (deleteDecoyPortHostPolicyRequest !== null && deleteDecoyPortHostPolicyRequest !== undefined) {
                if (deleteDecoyPortHostPolicyRequest instanceof DeleteDecoyPortHostPolicyRequest) {
                    policyId = deleteDecoyPortHostPolicyRequest.policyId;
                    hostId = deleteDecoyPortHostPolicyRequest.hostId;
                    enterpriseProjectId = deleteDecoyPortHostPolicyRequest.enterpriseProjectId;
                } else {
                    policyId = deleteDecoyPortHostPolicyRequest['policy_id'];
                    hostId = deleteDecoyPortHostPolicyRequest['host_id'];
                    enterpriseProjectId = deleteDecoyPortHostPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteDecoyPortHostPolicy.');
            }
            if (hostId === null || hostId === undefined) {
                throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling deleteDecoyPortHostPolicy.');
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除动态端口蜜罐策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDecoyPortPolicy(deleteDecoyPortPolicyRequest?: DeleteDecoyPortPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/honeypot-port/policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyId;
            
            let enterpriseProjectId;

            if (deleteDecoyPortPolicyRequest !== null && deleteDecoyPortPolicyRequest !== undefined) {
                if (deleteDecoyPortPolicyRequest instanceof DeleteDecoyPortPolicyRequest) {
                    policyId = deleteDecoyPortPolicyRequest.policyId;
                    enterpriseProjectId = deleteDecoyPortPolicyRequest.enterpriseProjectId;
                } else {
                    policyId = deleteDecoyPortPolicyRequest['policy_id'];
                    enterpriseProjectId = deleteDecoyPortPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteDecoyPortPolicy.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除服务器组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHostsGroup(deleteHostsGroupRequest?: DeleteHostsGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/host-management/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let groupId;
            
            let enterpriseProjectId;

            if (deleteHostsGroupRequest !== null && deleteHostsGroupRequest !== undefined) {
                if (deleteHostsGroupRequest instanceof DeleteHostsGroupRequest) {
                    region = deleteHostsGroupRequest.region;
                    groupId = deleteHostsGroupRequest.groupId;
                    enterpriseProjectId = deleteHostsGroupRequest.enterpriseProjectId;
                } else {
                    region = deleteHostsGroupRequest['region'];
                    groupId = deleteHostsGroupRequest['group_id'];
                    enterpriseProjectId = deleteHostsGroupRequest['enterprise_project_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteHostsGroup.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除已隔离文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIsolatedFile(deleteIsolatedFileRequest?: DeleteIsolatedFileRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/event/isolated-file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (deleteIsolatedFileRequest !== null && deleteIsolatedFileRequest !== undefined) {
                if (deleteIsolatedFileRequest instanceof DeleteIsolatedFileRequest) {
                    body = deleteIsolatedFileRequest.body
                    enterpriseProjectId = deleteIsolatedFileRequest.enterpriseProjectId;
                } else {
                    body = deleteIsolatedFileRequest['body'];
                    enterpriseProjectId = deleteIsolatedFileRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除防护策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteProtectionPolicy(deleteProtectionPolicyRequest?: DeleteProtectionPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/ransomware/protection/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let policyId;

            if (deleteProtectionPolicyRequest !== null && deleteProtectionPolicyRequest !== undefined) {
                if (deleteProtectionPolicyRequest instanceof DeleteProtectionPolicyRequest) {
                    enterpriseProjectId = deleteProtectionPolicyRequest.enterpriseProjectId;
                    policyId = deleteProtectionPolicyRequest.policyId;
                } else {
                    enterpriseProjectId = deleteProtectionPolicyRequest['enterprise_project_id'];
                    policyId = deleteProtectionPolicyRequest['policy_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling deleteProtectionPolicy.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (policyId === null || policyId === undefined) {
                throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteProtectionPolicy.');
            }
            if (policyId !== null && policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除单个资源下的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceInstanceTag(deleteResourceInstanceTagRequest?: DeleteResourceInstanceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/{resource_type}/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;
            
            let key;

            if (deleteResourceInstanceTagRequest !== null && deleteResourceInstanceTagRequest !== undefined) {
                if (deleteResourceInstanceTagRequest instanceof DeleteResourceInstanceTagRequest) {
                    resourceType = deleteResourceInstanceTagRequest.resourceType;
                    resourceId = deleteResourceInstanceTagRequest.resourceId;
                    key = deleteResourceInstanceTagRequest.key;
                } else {
                    resourceType = deleteResourceInstanceTagRequest['resource_type'];
                    resourceId = deleteResourceInstanceTagRequest['resource_id'];
                    key = deleteResourceInstanceTagRequest['key'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteResourceInstanceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteResourceInstanceTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteResourceInstanceTag.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出病毒扫描结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportAntiVirusResult(exportAntiVirusResultRequest?: ExportAntiVirusResultRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/antivirus/result/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let privateIp;
            
            let publicIp;
            
            let handleStatus;
            
            let severityList;
            
            let assetValue;
            
            let malwareName;
            
            let filePath;
            
            let exportSize;
            
            let fileHash;
            
            let taskName;
            
            let manualIsolate;

            if (exportAntiVirusResultRequest !== null && exportAntiVirusResultRequest !== undefined) {
                if (exportAntiVirusResultRequest instanceof ExportAntiVirusResultRequest) {
                    offset = exportAntiVirusResultRequest.offset;
                    limit = exportAntiVirusResultRequest.limit;
                    body = exportAntiVirusResultRequest.body
                    enterpriseProjectId = exportAntiVirusResultRequest.enterpriseProjectId;
                    hostName = exportAntiVirusResultRequest.hostName;
                    privateIp = exportAntiVirusResultRequest.privateIp;
                    publicIp = exportAntiVirusResultRequest.publicIp;
                    handleStatus = exportAntiVirusResultRequest.handleStatus;
                    severityList = exportAntiVirusResultRequest.severityList;
                    assetValue = exportAntiVirusResultRequest.assetValue;
                    malwareName = exportAntiVirusResultRequest.malwareName;
                    filePath = exportAntiVirusResultRequest.filePath;
                    exportSize = exportAntiVirusResultRequest.exportSize;
                    fileHash = exportAntiVirusResultRequest.fileHash;
                    taskName = exportAntiVirusResultRequest.taskName;
                    manualIsolate = exportAntiVirusResultRequest.manualIsolate;
                } else {
                    offset = exportAntiVirusResultRequest['offset'];
                    limit = exportAntiVirusResultRequest['limit'];
                    body = exportAntiVirusResultRequest['body'];
                    enterpriseProjectId = exportAntiVirusResultRequest['enterprise_project_id'];
                    hostName = exportAntiVirusResultRequest['host_name'];
                    privateIp = exportAntiVirusResultRequest['private_ip'];
                    publicIp = exportAntiVirusResultRequest['public_ip'];
                    handleStatus = exportAntiVirusResultRequest['handle_status'];
                    severityList = exportAntiVirusResultRequest['severity_list'];
                    assetValue = exportAntiVirusResultRequest['asset_value'];
                    malwareName = exportAntiVirusResultRequest['malware_name'];
                    filePath = exportAntiVirusResultRequest['file_path'];
                    exportSize = exportAntiVirusResultRequest['export_size'];
                    fileHash = exportAntiVirusResultRequest['file_hash'];
                    taskName = exportAntiVirusResultRequest['task_name'];
                    manualIsolate = exportAntiVirusResultRequest['manual_isolate'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling exportAntiVirusResult.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling exportAntiVirusResult.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (severityList !== null && severityList !== undefined) {
                localVarQueryParameter['severity_list'] = severityList;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (malwareName !== null && malwareName !== undefined) {
                localVarQueryParameter['malware_name'] = malwareName;
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (exportSize !== null && exportSize !== undefined) {
                localVarQueryParameter['export_size'] = exportSize;
            }
            if (fileHash !== null && fileHash !== undefined) {
                localVarQueryParameter['file_hash'] = fileHash;
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
            }
            if (manualIsolate !== null && manualIsolate !== undefined) {
                localVarQueryParameter['manual_isolate'] = manualIsolate;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出漏洞及漏洞影响的主机的相关信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportVuls(exportVulsRequest?: ExportVulsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/vul/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let exportSize;
            
            let category;
            
            let enterpriseProjectId;
            
            let type;
            
            let vulId;
            
            let vulName;
            
            let hostId;
            
            let limit;
            
            let offset;
            
            let repairPriority;
            
            let handleStatus;
            
            let cveId;
            
            let labelList;
            
            let status;
            
            let assetValue;
            
            let groupName;

            if (exportVulsRequest !== null && exportVulsRequest !== undefined) {
                if (exportVulsRequest instanceof ExportVulsRequest) {
                    exportSize = exportVulsRequest.exportSize;
                    category = exportVulsRequest.category;
                    body = exportVulsRequest.body
                    enterpriseProjectId = exportVulsRequest.enterpriseProjectId;
                    type = exportVulsRequest.type;
                    vulId = exportVulsRequest.vulId;
                    vulName = exportVulsRequest.vulName;
                    hostId = exportVulsRequest.hostId;
                    limit = exportVulsRequest.limit;
                    offset = exportVulsRequest.offset;
                    repairPriority = exportVulsRequest.repairPriority;
                    handleStatus = exportVulsRequest.handleStatus;
                    cveId = exportVulsRequest.cveId;
                    labelList = exportVulsRequest.labelList;
                    status = exportVulsRequest.status;
                    assetValue = exportVulsRequest.assetValue;
                    groupName = exportVulsRequest.groupName;
                } else {
                    exportSize = exportVulsRequest['export_size'];
                    category = exportVulsRequest['category'];
                    body = exportVulsRequest['body'];
                    enterpriseProjectId = exportVulsRequest['enterprise_project_id'];
                    type = exportVulsRequest['type'];
                    vulId = exportVulsRequest['vul_id'];
                    vulName = exportVulsRequest['vul_name'];
                    hostId = exportVulsRequest['host_id'];
                    limit = exportVulsRequest['limit'];
                    offset = exportVulsRequest['offset'];
                    repairPriority = exportVulsRequest['repair_priority'];
                    handleStatus = exportVulsRequest['handle_status'];
                    cveId = exportVulsRequest['cve_id'];
                    labelList = exportVulsRequest['label_list'];
                    status = exportVulsRequest['status'];
                    assetValue = exportVulsRequest['asset_value'];
                    groupName = exportVulsRequest['group_name'];
                }
            }

        
            if (exportSize === null || exportSize === undefined) {
                throw new RequiredError('exportSize','Required parameter exportSize was null or undefined when calling exportVuls.');
            }
            if (exportSize !== null && exportSize !== undefined) {
                localVarQueryParameter['export_size'] = exportSize;
            }
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling exportVuls.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (vulId !== null && vulId !== undefined) {
                localVarQueryParameter['vul_id'] = vulId;
            }
            if (vulName !== null && vulName !== undefined) {
                localVarQueryParameter['vul_name'] = vulName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (repairPriority !== null && repairPriority !== undefined) {
                localVarQueryParameter['repair_priority'] = repairPriority;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (cveId !== null && cveId !== undefined) {
                localVarQueryParameter['cve_id'] = cveId;
            }
            if (labelList !== null && labelList !== undefined) {
                localVarQueryParameter['label_list'] = labelList;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 处置病毒扫描结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        handleAntiVirusResult(handleAntiVirusResultRequest?: HandleAntiVirusResultRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/antivirus/result/operate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (handleAntiVirusResultRequest !== null && handleAntiVirusResultRequest !== undefined) {
                if (handleAntiVirusResultRequest instanceof HandleAntiVirusResultRequest) {
                    body = handleAntiVirusResultRequest.body
                    enterpriseProjectId = handleAntiVirusResultRequest.enterpriseProjectId;
                } else {
                    body = handleAntiVirusResultRequest['body'];
                    enterpriseProjectId = handleAntiVirusResultRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询多账号列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccounts(listAccountsRequest?: ListAccountsRequest) {
            const options = {
                method: "GET",
                url: "/v5/setting/account/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let xSecurityToken;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;

            if (listAccountsRequest !== null && listAccountsRequest !== undefined) {
                if (listAccountsRequest instanceof ListAccountsRequest) {
                    region = listAccountsRequest.region;
                    xSecurityToken = listAccountsRequest.xSecurityToken;
                    limit = listAccountsRequest.limit;
                    offset = listAccountsRequest.offset;
                    enterpriseProjectId = listAccountsRequest.enterpriseProjectId;
                } else {
                    region = listAccountsRequest['region'];
                    xSecurityToken = listAccountsRequest['X-Security-Token'];
                    limit = listAccountsRequest['limit'];
                    offset = listAccountsRequest['offset'];
                    enterpriseProjectId = listAccountsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询agent安装脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgentInstallScript(listAgentInstallScriptRequest?: ListAgentInstallScriptRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/setting/agent-install-script",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let osArch;
            
            let enterpriseProjectId;
            
            let osType;
            
            let outsideHost;
            
            let outsideGroupId;
            
            let batchInstall;
            
            let type;

            if (listAgentInstallScriptRequest !== null && listAgentInstallScriptRequest !== undefined) {
                if (listAgentInstallScriptRequest instanceof ListAgentInstallScriptRequest) {
                    region = listAgentInstallScriptRequest.region;
                    osArch = listAgentInstallScriptRequest.osArch;
                    enterpriseProjectId = listAgentInstallScriptRequest.enterpriseProjectId;
                    osType = listAgentInstallScriptRequest.osType;
                    outsideHost = listAgentInstallScriptRequest.outsideHost;
                    outsideGroupId = listAgentInstallScriptRequest.outsideGroupId;
                    batchInstall = listAgentInstallScriptRequest.batchInstall;
                    type = listAgentInstallScriptRequest.type;
                } else {
                    region = listAgentInstallScriptRequest['region'];
                    osArch = listAgentInstallScriptRequest['os_arch'];
                    enterpriseProjectId = listAgentInstallScriptRequest['enterprise_project_id'];
                    osType = listAgentInstallScriptRequest['os_type'];
                    outsideHost = listAgentInstallScriptRequest['outside_host'];
                    outsideGroupId = listAgentInstallScriptRequest['outside_group_id'];
                    batchInstall = listAgentInstallScriptRequest['batch_install'];
                    type = listAgentInstallScriptRequest['type'];
                }
            }

        
            if (osArch === null || osArch === undefined) {
                throw new RequiredError('osArch','Required parameter osArch was null or undefined when calling listAgentInstallScript.');
            }
            if (osArch !== null && osArch !== undefined) {
                localVarQueryParameter['os_arch'] = osArch;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (outsideHost !== null && outsideHost !== undefined) {
                localVarQueryParameter['outside_host'] = outsideHost;
            }
            if (outsideGroupId !== null && outsideGroupId !== undefined) {
                localVarQueryParameter['outside_group_id'] = outsideGroupId;
            }
            if (batchInstall !== null && batchInstall !== undefined) {
                localVarQueryParameter['batch_install'] = batchInstall;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmWhiteList(listAlarmWhiteListRequest?: ListAlarmWhiteListRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/white-list/alarm",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let hash;
            
            let eventType;
            
            let offset;
            
            let limit;

            if (listAlarmWhiteListRequest !== null && listAlarmWhiteListRequest !== undefined) {
                if (listAlarmWhiteListRequest instanceof ListAlarmWhiteListRequest) {
                    region = listAlarmWhiteListRequest.region;
                    enterpriseProjectId = listAlarmWhiteListRequest.enterpriseProjectId;
                    hash = listAlarmWhiteListRequest.hash;
                    eventType = listAlarmWhiteListRequest.eventType;
                    offset = listAlarmWhiteListRequest.offset;
                    limit = listAlarmWhiteListRequest.limit;
                } else {
                    region = listAlarmWhiteListRequest['region'];
                    enterpriseProjectId = listAlarmWhiteListRequest['enterprise_project_id'];
                    hash = listAlarmWhiteListRequest['hash'];
                    eventType = listAlarmWhiteListRequest['event_type'];
                    offset = listAlarmWhiteListRequest['offset'];
                    limit = listAlarmWhiteListRequest['limit'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hash !== null && hash !== undefined) {
                localVarQueryParameter['hash'] = hash;
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询病毒查杀可选服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntiVirusHost(listAntiVirusHostRequest?: ListAntiVirusHostRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/antivirus/host-management/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let scanType;
            
            let startType;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let hostName;
            
            let privateIp;
            
            let publicIp;
            
            let groupId;
            
            let policyId;
            
            let nextStartTime;

            if (listAntiVirusHostRequest !== null && listAntiVirusHostRequest !== undefined) {
                if (listAntiVirusHostRequest instanceof ListAntiVirusHostRequest) {
                    offset = listAntiVirusHostRequest.offset;
                    limit = listAntiVirusHostRequest.limit;
                    scanType = listAntiVirusHostRequest.scanType;
                    startType = listAntiVirusHostRequest.startType;
                    enterpriseProjectId = listAntiVirusHostRequest.enterpriseProjectId;
                    hostId = listAntiVirusHostRequest.hostId;
                    hostName = listAntiVirusHostRequest.hostName;
                    privateIp = listAntiVirusHostRequest.privateIp;
                    publicIp = listAntiVirusHostRequest.publicIp;
                    groupId = listAntiVirusHostRequest.groupId;
                    policyId = listAntiVirusHostRequest.policyId;
                    nextStartTime = listAntiVirusHostRequest.nextStartTime;
                } else {
                    offset = listAntiVirusHostRequest['offset'];
                    limit = listAntiVirusHostRequest['limit'];
                    scanType = listAntiVirusHostRequest['scan_type'];
                    startType = listAntiVirusHostRequest['start_type'];
                    enterpriseProjectId = listAntiVirusHostRequest['enterprise_project_id'];
                    hostId = listAntiVirusHostRequest['host_id'];
                    hostName = listAntiVirusHostRequest['host_name'];
                    privateIp = listAntiVirusHostRequest['private_ip'];
                    publicIp = listAntiVirusHostRequest['public_ip'];
                    groupId = listAntiVirusHostRequest['group_id'];
                    policyId = listAntiVirusHostRequest['policy_id'];
                    nextStartTime = listAntiVirusHostRequest['next_start_time'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAntiVirusHost.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAntiVirusHost.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (scanType === null || scanType === undefined) {
                throw new RequiredError('scanType','Required parameter scanType was null or undefined when calling listAntiVirusHost.');
            }
            if (scanType !== null && scanType !== undefined) {
                localVarQueryParameter['scan_type'] = scanType;
            }
            if (startType === null || startType === undefined) {
                throw new RequiredError('startType','Required parameter startType was null or undefined when calling listAntiVirusHost.');
            }
            if (startType !== null && startType !== undefined) {
                localVarQueryParameter['start_type'] = startType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (policyId !== null && policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
            }
            if (nextStartTime !== null && nextStartTime !== undefined) {
                localVarQueryParameter['next_start_time'] = nextStartTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义查杀策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntiVirusPolicy(listAntiVirusPolicyRequest?: ListAntiVirusPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/antivirus/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let policyName;

            if (listAntiVirusPolicyRequest !== null && listAntiVirusPolicyRequest !== undefined) {
                if (listAntiVirusPolicyRequest instanceof ListAntiVirusPolicyRequest) {
                    offset = listAntiVirusPolicyRequest.offset;
                    limit = listAntiVirusPolicyRequest.limit;
                    enterpriseProjectId = listAntiVirusPolicyRequest.enterpriseProjectId;
                    policyName = listAntiVirusPolicyRequest.policyName;
                } else {
                    offset = listAntiVirusPolicyRequest['offset'];
                    limit = listAntiVirusPolicyRequest['limit'];
                    enterpriseProjectId = listAntiVirusPolicyRequest['enterprise_project_id'];
                    policyName = listAntiVirusPolicyRequest['policy_name'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAntiVirusPolicy.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAntiVirusPolicy.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (policyName !== null && policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询病毒扫描结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntiVirusResult(listAntiVirusResultRequest?: ListAntiVirusResultRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/antivirus/result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let privateIp;
            
            let publicIp;
            
            let handleStatus;
            
            let severityList;
            
            let assetValue;
            
            let malwareName;
            
            let filePath;
            
            let fileHash;
            
            let taskName;
            
            let manualIsolate;

            if (listAntiVirusResultRequest !== null && listAntiVirusResultRequest !== undefined) {
                if (listAntiVirusResultRequest instanceof ListAntiVirusResultRequest) {
                    offset = listAntiVirusResultRequest.offset;
                    limit = listAntiVirusResultRequest.limit;
                    enterpriseProjectId = listAntiVirusResultRequest.enterpriseProjectId;
                    hostName = listAntiVirusResultRequest.hostName;
                    privateIp = listAntiVirusResultRequest.privateIp;
                    publicIp = listAntiVirusResultRequest.publicIp;
                    handleStatus = listAntiVirusResultRequest.handleStatus;
                    severityList = listAntiVirusResultRequest.severityList;
                    assetValue = listAntiVirusResultRequest.assetValue;
                    malwareName = listAntiVirusResultRequest.malwareName;
                    filePath = listAntiVirusResultRequest.filePath;
                    fileHash = listAntiVirusResultRequest.fileHash;
                    taskName = listAntiVirusResultRequest.taskName;
                    manualIsolate = listAntiVirusResultRequest.manualIsolate;
                } else {
                    offset = listAntiVirusResultRequest['offset'];
                    limit = listAntiVirusResultRequest['limit'];
                    enterpriseProjectId = listAntiVirusResultRequest['enterprise_project_id'];
                    hostName = listAntiVirusResultRequest['host_name'];
                    privateIp = listAntiVirusResultRequest['private_ip'];
                    publicIp = listAntiVirusResultRequest['public_ip'];
                    handleStatus = listAntiVirusResultRequest['handle_status'];
                    severityList = listAntiVirusResultRequest['severity_list'];
                    assetValue = listAntiVirusResultRequest['asset_value'];
                    malwareName = listAntiVirusResultRequest['malware_name'];
                    filePath = listAntiVirusResultRequest['file_path'];
                    fileHash = listAntiVirusResultRequest['file_hash'];
                    taskName = listAntiVirusResultRequest['task_name'];
                    manualIsolate = listAntiVirusResultRequest['manual_isolate'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAntiVirusResult.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAntiVirusResult.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (severityList !== null && severityList !== undefined) {
                localVarQueryParameter['severity_list'] = severityList;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (malwareName !== null && malwareName !== undefined) {
                localVarQueryParameter['malware_name'] = malwareName;
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (fileHash !== null && fileHash !== undefined) {
                localVarQueryParameter['file_hash'] = fileHash;
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
            }
            if (manualIsolate !== null && manualIsolate !== undefined) {
                localVarQueryParameter['manual_isolate'] = manualIsolate;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看病毒扫描任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntiVirusTask(listAntiVirusTaskRequest?: ListAntiVirusTaskRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/antivirus/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let whetherPaidTask;
            
            let enterpriseProjectId;
            
            let taskName;
            
            let lastDays;
            
            let beginTime;
            
            let endTime;
            
            let taskStatus;
            
            let hostName;
            
            let privateIp;
            
            let publicIp;
            
            let hostTaskStatus;

            if (listAntiVirusTaskRequest !== null && listAntiVirusTaskRequest !== undefined) {
                if (listAntiVirusTaskRequest instanceof ListAntiVirusTaskRequest) {
                    offset = listAntiVirusTaskRequest.offset;
                    limit = listAntiVirusTaskRequest.limit;
                    whetherPaidTask = listAntiVirusTaskRequest.whetherPaidTask;
                    enterpriseProjectId = listAntiVirusTaskRequest.enterpriseProjectId;
                    taskName = listAntiVirusTaskRequest.taskName;
                    lastDays = listAntiVirusTaskRequest.lastDays;
                    beginTime = listAntiVirusTaskRequest.beginTime;
                    endTime = listAntiVirusTaskRequest.endTime;
                    taskStatus = listAntiVirusTaskRequest.taskStatus;
                    hostName = listAntiVirusTaskRequest.hostName;
                    privateIp = listAntiVirusTaskRequest.privateIp;
                    publicIp = listAntiVirusTaskRequest.publicIp;
                    hostTaskStatus = listAntiVirusTaskRequest.hostTaskStatus;
                } else {
                    offset = listAntiVirusTaskRequest['offset'];
                    limit = listAntiVirusTaskRequest['limit'];
                    whetherPaidTask = listAntiVirusTaskRequest['whether_paid_task'];
                    enterpriseProjectId = listAntiVirusTaskRequest['enterprise_project_id'];
                    taskName = listAntiVirusTaskRequest['task_name'];
                    lastDays = listAntiVirusTaskRequest['last_days'];
                    beginTime = listAntiVirusTaskRequest['begin_time'];
                    endTime = listAntiVirusTaskRequest['end_time'];
                    taskStatus = listAntiVirusTaskRequest['task_status'];
                    hostName = listAntiVirusTaskRequest['host_name'];
                    privateIp = listAntiVirusTaskRequest['private_ip'];
                    publicIp = listAntiVirusTaskRequest['public_ip'];
                    hostTaskStatus = listAntiVirusTaskRequest['host_task_status'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAntiVirusTask.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAntiVirusTask.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (whetherPaidTask === null || whetherPaidTask === undefined) {
                throw new RequiredError('whetherPaidTask','Required parameter whetherPaidTask was null or undefined when calling listAntiVirusTask.');
            }
            if (whetherPaidTask !== null && whetherPaidTask !== undefined) {
                localVarQueryParameter['whether_paid_task'] = whetherPaidTask;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (taskStatus !== null && taskStatus !== undefined) {
                localVarQueryParameter['task_status'] = taskStatus;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (hostTaskStatus !== null && hostTaskStatus !== undefined) {
                localVarQueryParameter['host_task_status'] = hostTaskStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询病毒扫描历史处置记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAntivirusHandleHistory(listAntivirusHandleHistoryRequest?: ListAntivirusHandleHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/antivirus/handle-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let malwareName;
            
            let filePath;
            
            let severityList;
            
            let hostName;
            
            let privateIp;
            
            let publicIp;
            
            let assetValue;
            
            let handleMethod;
            
            let userName;
            
            let eventType;
            
            let sortDir;
            
            let sortKey;

            if (listAntivirusHandleHistoryRequest !== null && listAntivirusHandleHistoryRequest !== undefined) {
                if (listAntivirusHandleHistoryRequest instanceof ListAntivirusHandleHistoryRequest) {
                    offset = listAntivirusHandleHistoryRequest.offset;
                    limit = listAntivirusHandleHistoryRequest.limit;
                    enterpriseProjectId = listAntivirusHandleHistoryRequest.enterpriseProjectId;
                    malwareName = listAntivirusHandleHistoryRequest.malwareName;
                    filePath = listAntivirusHandleHistoryRequest.filePath;
                    severityList = listAntivirusHandleHistoryRequest.severityList;
                    hostName = listAntivirusHandleHistoryRequest.hostName;
                    privateIp = listAntivirusHandleHistoryRequest.privateIp;
                    publicIp = listAntivirusHandleHistoryRequest.publicIp;
                    assetValue = listAntivirusHandleHistoryRequest.assetValue;
                    handleMethod = listAntivirusHandleHistoryRequest.handleMethod;
                    userName = listAntivirusHandleHistoryRequest.userName;
                    eventType = listAntivirusHandleHistoryRequest.eventType;
                    sortDir = listAntivirusHandleHistoryRequest.sortDir;
                    sortKey = listAntivirusHandleHistoryRequest.sortKey;
                } else {
                    offset = listAntivirusHandleHistoryRequest['offset'];
                    limit = listAntivirusHandleHistoryRequest['limit'];
                    enterpriseProjectId = listAntivirusHandleHistoryRequest['enterprise_project_id'];
                    malwareName = listAntivirusHandleHistoryRequest['malware_name'];
                    filePath = listAntivirusHandleHistoryRequest['file_path'];
                    severityList = listAntivirusHandleHistoryRequest['severity_list'];
                    hostName = listAntivirusHandleHistoryRequest['host_name'];
                    privateIp = listAntivirusHandleHistoryRequest['private_ip'];
                    publicIp = listAntivirusHandleHistoryRequest['public_ip'];
                    assetValue = listAntivirusHandleHistoryRequest['asset_value'];
                    handleMethod = listAntivirusHandleHistoryRequest['handle_method'];
                    userName = listAntivirusHandleHistoryRequest['user_name'];
                    eventType = listAntivirusHandleHistoryRequest['event_type'];
                    sortDir = listAntivirusHandleHistoryRequest['sort_dir'];
                    sortKey = listAntivirusHandleHistoryRequest['sort_key'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAntivirusHandleHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAntivirusHandleHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (malwareName !== null && malwareName !== undefined) {
                localVarQueryParameter['malware_name'] = malwareName;
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (severityList !== null && severityList !== undefined) {
                localVarQueryParameter['severity_list'] = severityList;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (handleMethod !== null && handleMethod !== undefined) {
                localVarQueryParameter['handle_method'] = handleMethod;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取软件信息的历史变动记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppChangeHistories(listAppChangeHistoriesRequest?: ListAppChangeHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/app/change-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostIp;
            
            let hostName;
            
            let appName;
            
            let variationType;
            
            let enterpriseProjectId;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let startTime;
            
            let endTime;

            if (listAppChangeHistoriesRequest !== null && listAppChangeHistoriesRequest !== undefined) {
                if (listAppChangeHistoriesRequest instanceof ListAppChangeHistoriesRequest) {
                    hostId = listAppChangeHistoriesRequest.hostId;
                    hostIp = listAppChangeHistoriesRequest.hostIp;
                    hostName = listAppChangeHistoriesRequest.hostName;
                    appName = listAppChangeHistoriesRequest.appName;
                    variationType = listAppChangeHistoriesRequest.variationType;
                    enterpriseProjectId = listAppChangeHistoriesRequest.enterpriseProjectId;
                    sortKey = listAppChangeHistoriesRequest.sortKey;
                    sortDir = listAppChangeHistoriesRequest.sortDir;
                    limit = listAppChangeHistoriesRequest.limit;
                    offset = listAppChangeHistoriesRequest.offset;
                    startTime = listAppChangeHistoriesRequest.startTime;
                    endTime = listAppChangeHistoriesRequest.endTime;
                } else {
                    hostId = listAppChangeHistoriesRequest['host_id'];
                    hostIp = listAppChangeHistoriesRequest['host_ip'];
                    hostName = listAppChangeHistoriesRequest['host_name'];
                    appName = listAppChangeHistoriesRequest['app_name'];
                    variationType = listAppChangeHistoriesRequest['variation_type'];
                    enterpriseProjectId = listAppChangeHistoriesRequest['enterprise_project_id'];
                    sortKey = listAppChangeHistoriesRequest['sort_key'];
                    sortDir = listAppChangeHistoriesRequest['sort_dir'];
                    limit = listAppChangeHistoriesRequest['limit'];
                    offset = listAppChangeHistoriesRequest['offset'];
                    startTime = listAppChangeHistoriesRequest['start_time'];
                    endTime = listAppChangeHistoriesRequest['end_time'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (variationType !== null && variationType !== undefined) {
                localVarQueryParameter['variation_type'] = variationType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询软件列表，支持通过软件名称查询对应的服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppStatistics(listAppStatisticsRequest?: ListAppStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/app/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appName;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let category;

            if (listAppStatisticsRequest !== null && listAppStatisticsRequest !== undefined) {
                if (listAppStatisticsRequest instanceof ListAppStatisticsRequest) {
                    appName = listAppStatisticsRequest.appName;
                    enterpriseProjectId = listAppStatisticsRequest.enterpriseProjectId;
                    limit = listAppStatisticsRequest.limit;
                    offset = listAppStatisticsRequest.offset;
                    category = listAppStatisticsRequest.category;
                } else {
                    appName = listAppStatisticsRequest['app_name'];
                    enterpriseProjectId = listAppStatisticsRequest['enterprise_project_id'];
                    limit = listAppStatisticsRequest['limit'];
                    offset = listAppStatisticsRequest['offset'];
                    category = listAppStatisticsRequest['category'];
                }
            }

        
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询软件的服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApps(listAppsRequest?: ListAppsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostName;
            
            let appName;
            
            let hostIp;
            
            let version;
            
            let installDir;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let category;
            
            let partMatch;

            if (listAppsRequest !== null && listAppsRequest !== undefined) {
                if (listAppsRequest instanceof ListAppsRequest) {
                    hostId = listAppsRequest.hostId;
                    hostName = listAppsRequest.hostName;
                    appName = listAppsRequest.appName;
                    hostIp = listAppsRequest.hostIp;
                    version = listAppsRequest.version;
                    installDir = listAppsRequest.installDir;
                    enterpriseProjectId = listAppsRequest.enterpriseProjectId;
                    limit = listAppsRequest.limit;
                    offset = listAppsRequest.offset;
                    category = listAppsRequest.category;
                    partMatch = listAppsRequest.partMatch;
                } else {
                    hostId = listAppsRequest['host_id'];
                    hostName = listAppsRequest['host_name'];
                    appName = listAppsRequest['app_name'];
                    hostIp = listAppsRequest['host_ip'];
                    version = listAppsRequest['version'];
                    installDir = listAppsRequest['install_dir'];
                    enterpriseProjectId = listAppsRequest['enterprise_project_id'];
                    limit = listAppsRequest['limit'];
                    offset = listAppsRequest['offset'];
                    category = listAppsRequest['category'];
                    partMatch = listAppsRequest['part_match'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (installDir !== null && installDir !== undefined) {
                localVarQueryParameter['install_dir'] = installDir;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (partMatch !== null && partMatch !== undefined) {
                localVarQueryParameter['part_match'] = partMatch;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取自启动项的历史变动记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutoLaunchChangeHistories(listAutoLaunchChangeHistoriesRequest?: ListAutoLaunchChangeHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/auto-launch/change-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostIp;
            
            let hostName;
            
            let autoLaunchName;
            
            let type;
            
            let variationType;
            
            let enterpriseProjectId;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let startTime;
            
            let endTime;

            if (listAutoLaunchChangeHistoriesRequest !== null && listAutoLaunchChangeHistoriesRequest !== undefined) {
                if (listAutoLaunchChangeHistoriesRequest instanceof ListAutoLaunchChangeHistoriesRequest) {
                    hostId = listAutoLaunchChangeHistoriesRequest.hostId;
                    hostIp = listAutoLaunchChangeHistoriesRequest.hostIp;
                    hostName = listAutoLaunchChangeHistoriesRequest.hostName;
                    autoLaunchName = listAutoLaunchChangeHistoriesRequest.autoLaunchName;
                    type = listAutoLaunchChangeHistoriesRequest.type;
                    variationType = listAutoLaunchChangeHistoriesRequest.variationType;
                    enterpriseProjectId = listAutoLaunchChangeHistoriesRequest.enterpriseProjectId;
                    sortKey = listAutoLaunchChangeHistoriesRequest.sortKey;
                    sortDir = listAutoLaunchChangeHistoriesRequest.sortDir;
                    limit = listAutoLaunchChangeHistoriesRequest.limit;
                    offset = listAutoLaunchChangeHistoriesRequest.offset;
                    startTime = listAutoLaunchChangeHistoriesRequest.startTime;
                    endTime = listAutoLaunchChangeHistoriesRequest.endTime;
                } else {
                    hostId = listAutoLaunchChangeHistoriesRequest['host_id'];
                    hostIp = listAutoLaunchChangeHistoriesRequest['host_ip'];
                    hostName = listAutoLaunchChangeHistoriesRequest['host_name'];
                    autoLaunchName = listAutoLaunchChangeHistoriesRequest['auto_launch_name'];
                    type = listAutoLaunchChangeHistoriesRequest['type'];
                    variationType = listAutoLaunchChangeHistoriesRequest['variation_type'];
                    enterpriseProjectId = listAutoLaunchChangeHistoriesRequest['enterprise_project_id'];
                    sortKey = listAutoLaunchChangeHistoriesRequest['sort_key'];
                    sortDir = listAutoLaunchChangeHistoriesRequest['sort_dir'];
                    limit = listAutoLaunchChangeHistoriesRequest['limit'];
                    offset = listAutoLaunchChangeHistoriesRequest['offset'];
                    startTime = listAutoLaunchChangeHistoriesRequest['start_time'];
                    endTime = listAutoLaunchChangeHistoriesRequest['end_time'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (autoLaunchName !== null && autoLaunchName !== undefined) {
                localVarQueryParameter['auto_launch_name'] = autoLaunchName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (variationType !== null && variationType !== undefined) {
                localVarQueryParameter['variation_type'] = variationType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自启动信息，支持通过传入自启动名称查询启动类型和服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutoLaunchStatistics(listAutoLaunchStatisticsRequest?: ListAutoLaunchStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/auto-launch/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let type;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listAutoLaunchStatisticsRequest !== null && listAutoLaunchStatisticsRequest !== undefined) {
                if (listAutoLaunchStatisticsRequest instanceof ListAutoLaunchStatisticsRequest) {
                    name = listAutoLaunchStatisticsRequest.name;
                    type = listAutoLaunchStatisticsRequest.type;
                    enterpriseProjectId = listAutoLaunchStatisticsRequest.enterpriseProjectId;
                    limit = listAutoLaunchStatisticsRequest.limit;
                    offset = listAutoLaunchStatisticsRequest.offset;
                } else {
                    name = listAutoLaunchStatisticsRequest['name'];
                    type = listAutoLaunchStatisticsRequest['type'];
                    enterpriseProjectId = listAutoLaunchStatisticsRequest['enterprise_project_id'];
                    limit = listAutoLaunchStatisticsRequest['limit'];
                    offset = listAutoLaunchStatisticsRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自启动项的服务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutoLaunchs(listAutoLaunchsRequest?: ListAutoLaunchsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/auto-launchs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostName;
            
            let name;
            
            let hostIp;
            
            let type;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let partMatch;

            if (listAutoLaunchsRequest !== null && listAutoLaunchsRequest !== undefined) {
                if (listAutoLaunchsRequest instanceof ListAutoLaunchsRequest) {
                    hostId = listAutoLaunchsRequest.hostId;
                    hostName = listAutoLaunchsRequest.hostName;
                    name = listAutoLaunchsRequest.name;
                    hostIp = listAutoLaunchsRequest.hostIp;
                    type = listAutoLaunchsRequest.type;
                    enterpriseProjectId = listAutoLaunchsRequest.enterpriseProjectId;
                    limit = listAutoLaunchsRequest.limit;
                    offset = listAutoLaunchsRequest.offset;
                    partMatch = listAutoLaunchsRequest.partMatch;
                } else {
                    hostId = listAutoLaunchsRequest['host_id'];
                    hostName = listAutoLaunchsRequest['host_name'];
                    name = listAutoLaunchsRequest['name'];
                    hostIp = listAutoLaunchsRequest['host_ip'];
                    type = listAutoLaunchsRequest['type'];
                    enterpriseProjectId = listAutoLaunchsRequest['enterprise_project_id'];
                    limit = listAutoLaunchsRequest['limit'];
                    offset = listAutoLaunchsRequest['offset'];
                    partMatch = listAutoLaunchsRequest['part_match'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (partMatch !== null && partMatch !== undefined) {
                localVarQueryParameter['part_match'] = partMatch;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询备份存储库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackupVaults(listBackupVaultsRequest?: ListBackupVaultsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/ransomware/optional/vaults",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let vaultName;
            
            let vaultId;

            if (listBackupVaultsRequest !== null && listBackupVaultsRequest !== undefined) {
                if (listBackupVaultsRequest instanceof ListBackupVaultsRequest) {
                    offset = listBackupVaultsRequest.offset;
                    limit = listBackupVaultsRequest.limit;
                    vaultName = listBackupVaultsRequest.vaultName;
                    vaultId = listBackupVaultsRequest.vaultId;
                } else {
                    offset = listBackupVaultsRequest['offset'];
                    limit = listBackupVaultsRequest['limit'];
                    vaultName = listBackupVaultsRequest['vault_name'];
                    vaultId = listBackupVaultsRequest['vault_id'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listBackupVaults.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listBackupVaults.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (vaultName !== null && vaultName !== undefined) {
                localVarQueryParameter['vault_name'] = vaultName;
            }
            if (vaultId !== null && vaultId !== undefined) {
                localVarQueryParameter['vault_id'] = vaultId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已拦截IP列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBlockedIp(listBlockedIpRequest?: ListBlockedIpRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/blocked-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let lastDays;
            
            let hostName;
            
            let srcIp;
            
            let interceptStatus;
            
            let offset;
            
            let limit;

            if (listBlockedIpRequest !== null && listBlockedIpRequest !== undefined) {
                if (listBlockedIpRequest instanceof ListBlockedIpRequest) {
                    region = listBlockedIpRequest.region;
                    enterpriseProjectId = listBlockedIpRequest.enterpriseProjectId;
                    lastDays = listBlockedIpRequest.lastDays;
                    hostName = listBlockedIpRequest.hostName;
                    srcIp = listBlockedIpRequest.srcIp;
                    interceptStatus = listBlockedIpRequest.interceptStatus;
                    offset = listBlockedIpRequest.offset;
                    limit = listBlockedIpRequest.limit;
                } else {
                    region = listBlockedIpRequest['region'];
                    enterpriseProjectId = listBlockedIpRequest['enterprise_project_id'];
                    lastDays = listBlockedIpRequest['last_days'];
                    hostName = listBlockedIpRequest['host_name'];
                    srcIp = listBlockedIpRequest['src_ip'];
                    interceptStatus = listBlockedIpRequest['intercept_status'];
                    offset = listBlockedIpRequest['offset'];
                    limit = listBlockedIpRequest['limit'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (srcIp !== null && srcIp !== undefined) {
                localVarQueryParameter['src_ip'] = srcIp;
            }
            if (interceptStatus !== null && interceptStatus !== undefined) {
                localVarQueryParameter['intercept_status'] = interceptStatus;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCceClusterConfig(listCceClusterConfigRequest?: ListCceClusterConfigRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/container/kubernetes/clusters/configs/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (listCceClusterConfigRequest !== null && listCceClusterConfigRequest !== undefined) {
                if (listCceClusterConfigRequest instanceof ListCceClusterConfigRequest) {
                    region = listCceClusterConfigRequest.region;
                    enterpriseProjectId = listCceClusterConfigRequest.enterpriseProjectId;
                    body = listCceClusterConfigRequest.body
                } else {
                    region = listCceClusterConfigRequest['region'];
                    enterpriseProjectId = listCceClusterConfigRequest['enterprise_project_id'];
                    body = listCceClusterConfigRequest['body'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询检测规则列表：查询默认检测规则信息，包含14种检测规则，默认都不开启
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCheckFeatureRule(listCheckFeatureRuleRequest?: ListCheckFeatureRuleRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/rasp/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let osType;

            if (listCheckFeatureRuleRequest !== null && listCheckFeatureRuleRequest !== undefined) {
                if (listCheckFeatureRuleRequest instanceof ListCheckFeatureRuleRequest) {
                    enterpriseProjectId = listCheckFeatureRuleRequest.enterpriseProjectId;
                    osType = listCheckFeatureRuleRequest.osType;
                } else {
                    enterpriseProjectId = listCheckFeatureRuleRequest['enterprise_project_id'];
                    osType = listCheckFeatureRuleRequest['os_type'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listCheckFeatureRule.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询容器节点列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listContainerNodes(listContainerNodesRequest?: ListContainerNodesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/container/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let hostName;
            
            let agentStatus;
            
            let protectStatus;
            
            let containerTags;

            if (listContainerNodesRequest !== null && listContainerNodesRequest !== undefined) {
                if (listContainerNodesRequest instanceof ListContainerNodesRequest) {
                    region = listContainerNodesRequest.region;
                    enterpriseProjectId = listContainerNodesRequest.enterpriseProjectId;
                    offset = listContainerNodesRequest.offset;
                    limit = listContainerNodesRequest.limit;
                    hostName = listContainerNodesRequest.hostName;
                    agentStatus = listContainerNodesRequest.agentStatus;
                    protectStatus = listContainerNodesRequest.protectStatus;
                    containerTags = listContainerNodesRequest.containerTags;
                } else {
                    region = listContainerNodesRequest['region'];
                    enterpriseProjectId = listContainerNodesRequest['enterprise_project_id'];
                    offset = listContainerNodesRequest['offset'];
                    limit = listContainerNodesRequest['limit'];
                    hostName = listContainerNodesRequest['host_name'];
                    agentStatus = listContainerNodesRequest['agent_status'];
                    protectStatus = listContainerNodesRequest['protect_status'];
                    containerTags = listContainerNodesRequest['container_tags'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (agentStatus !== null && agentStatus !== undefined) {
                localVarQueryParameter['agent_status'] = agentStatus;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (containerTags !== null && containerTags !== undefined) {
                localVarQueryParameter['container_tags'] = containerTags;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询容器基本信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listContainers(listContainersRequest?: ListContainersRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/container/kubernetes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let containerName;
            
            let podName;
            
            let imageName;
            
            let clusterContainer;
            
            let limit;
            
            let offset;

            if (listContainersRequest !== null && listContainersRequest !== undefined) {
                if (listContainersRequest instanceof ListContainersRequest) {
                    enterpriseProjectId = listContainersRequest.enterpriseProjectId;
                    containerName = listContainersRequest.containerName;
                    podName = listContainersRequest.podName;
                    imageName = listContainersRequest.imageName;
                    clusterContainer = listContainersRequest.clusterContainer;
                    limit = listContainersRequest.limit;
                    offset = listContainersRequest.offset;
                } else {
                    enterpriseProjectId = listContainersRequest['enterprise_project_id'];
                    containerName = listContainersRequest['container_name'];
                    podName = listContainersRequest['pod_name'];
                    imageName = listContainersRequest['image_name'];
                    clusterContainer = listContainersRequest['cluster_container'];
                    limit = listContainersRequest['limit'];
                    offset = listContainersRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (containerName !== null && containerName !== undefined) {
                localVarQueryParameter['container_name'] = containerName;
            }
            if (podName !== null && podName !== undefined) {
                localVarQueryParameter['pod_name'] = podName;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (clusterContainer !== null && clusterContainer !== undefined) {
                localVarQueryParameter['cluster_container'] = clusterContainer;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看动态端口蜜罐策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDecoyPortPolicy(listDecoyPortPolicyRequest?: ListDecoyPortPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/honeypot-port/policy-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;

            if (listDecoyPortPolicyRequest !== null && listDecoyPortPolicyRequest !== undefined) {
                if (listDecoyPortPolicyRequest instanceof ListDecoyPortPolicyRequest) {
                    offset = listDecoyPortPolicyRequest.offset;
                    limit = listDecoyPortPolicyRequest.limit;
                    enterpriseProjectId = listDecoyPortPolicyRequest.enterpriseProjectId;
                } else {
                    offset = listDecoyPortPolicyRequest['offset'];
                    limit = listDecoyPortPolicyRequest['limit'];
                    enterpriseProjectId = listDecoyPortPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listDecoyPortPolicy.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listDecoyPortPolicy.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载导出文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDownloadExportedFile(listDownloadExportedFileRequest?: ListDownloadExportedFileRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/download/{file_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileId;
            
            let region;
            
            let enterpriseProjectId;

            if (listDownloadExportedFileRequest !== null && listDownloadExportedFileRequest !== undefined) {
                if (listDownloadExportedFileRequest instanceof ListDownloadExportedFileRequest) {
                    fileId = listDownloadExportedFileRequest.fileId;
                    region = listDownloadExportedFileRequest.region;
                    enterpriseProjectId = listDownloadExportedFileRequest.enterpriseProjectId;
                } else {
                    fileId = listDownloadExportedFileRequest['file_id'];
                    region = listDownloadExportedFileRequest['region'];
                    enterpriseProjectId = listDownloadExportedFileRequest['enterprise_project_id'];
                }
            }

        
            if (fileId === null || fileId === undefined) {
            throw new RequiredError('fileId','Required parameter fileId was null or undefined when calling listDownloadExportedFile.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'file_id': fileId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警事件历史处置记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventHandleHistory(listEventHandleHistoryRequest?: ListEventHandleHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/handle-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let severity;
            
            let attackTag;
            
            let assetValue;
            
            let eventClassIds;
            
            let eventName;
            
            let eventType;
            
            let hostName;
            
            let handleStatus;
            
            let hostIp;
            
            let publicIp;
            
            let privateIp;
            
            let sortDir;
            
            let sortKey;

            if (listEventHandleHistoryRequest !== null && listEventHandleHistoryRequest !== undefined) {
                if (listEventHandleHistoryRequest instanceof ListEventHandleHistoryRequest) {
                    limit = listEventHandleHistoryRequest.limit;
                    offset = listEventHandleHistoryRequest.offset;
                    enterpriseProjectId = listEventHandleHistoryRequest.enterpriseProjectId;
                    severity = listEventHandleHistoryRequest.severity;
                    attackTag = listEventHandleHistoryRequest.attackTag;
                    assetValue = listEventHandleHistoryRequest.assetValue;
                    eventClassIds = listEventHandleHistoryRequest.eventClassIds;
                    eventName = listEventHandleHistoryRequest.eventName;
                    eventType = listEventHandleHistoryRequest.eventType;
                    hostName = listEventHandleHistoryRequest.hostName;
                    handleStatus = listEventHandleHistoryRequest.handleStatus;
                    hostIp = listEventHandleHistoryRequest.hostIp;
                    publicIp = listEventHandleHistoryRequest.publicIp;
                    privateIp = listEventHandleHistoryRequest.privateIp;
                    sortDir = listEventHandleHistoryRequest.sortDir;
                    sortKey = listEventHandleHistoryRequest.sortKey;
                } else {
                    limit = listEventHandleHistoryRequest['limit'];
                    offset = listEventHandleHistoryRequest['offset'];
                    enterpriseProjectId = listEventHandleHistoryRequest['enterprise_project_id'];
                    severity = listEventHandleHistoryRequest['severity'];
                    attackTag = listEventHandleHistoryRequest['attack_tag'];
                    assetValue = listEventHandleHistoryRequest['asset_value'];
                    eventClassIds = listEventHandleHistoryRequest['event_class_ids'];
                    eventName = listEventHandleHistoryRequest['event_name'];
                    eventType = listEventHandleHistoryRequest['event_type'];
                    hostName = listEventHandleHistoryRequest['host_name'];
                    handleStatus = listEventHandleHistoryRequest['handle_status'];
                    hostIp = listEventHandleHistoryRequest['host_ip'];
                    publicIp = listEventHandleHistoryRequest['public_ip'];
                    privateIp = listEventHandleHistoryRequest['private_ip'];
                    sortDir = listEventHandleHistoryRequest['sort_dir'];
                    sortKey = listEventHandleHistoryRequest['sort_key'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listEventHandleHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listEventHandleHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (attackTag !== null && attackTag !== undefined) {
                localVarQueryParameter['attack_tag'] = attackTag;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (eventClassIds !== null && eventClassIds !== undefined) {
                localVarQueryParameter['event_class_ids'] = eventClassIds;
            }
            if (eventName !== null && eventName !== undefined) {
                localVarQueryParameter['event_name'] = eventName;
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务器组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostGroups(listHostGroupsRequest?: ListHostGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/host-management/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let groupName;

            if (listHostGroupsRequest !== null && listHostGroupsRequest !== undefined) {
                if (listHostGroupsRequest instanceof ListHostGroupsRequest) {
                    region = listHostGroupsRequest.region;
                    enterpriseProjectId = listHostGroupsRequest.enterpriseProjectId;
                    offset = listHostGroupsRequest.offset;
                    limit = listHostGroupsRequest.limit;
                    groupName = listHostGroupsRequest.groupName;
                } else {
                    region = listHostGroupsRequest['region'];
                    enterpriseProjectId = listHostGroupsRequest['enterprise_project_id'];
                    offset = listHostGroupsRequest['offset'];
                    limit = listHostGroupsRequest['limit'];
                    groupName = listHostGroupsRequest['group_name'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主机静态网页防篡改防护动态：展示服务器名称、服务器ip、防护策略、检测时间、防护文件、事件描述信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostProtectHistoryInfo(listHostProtectHistoryInfoRequest?: ListHostProtectHistoryInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/webtamper/static/protect-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let hostName;
            
            let hostIp;
            
            let filePath;
            
            let fileOperation;

            if (listHostProtectHistoryInfoRequest !== null && listHostProtectHistoryInfoRequest !== undefined) {
                if (listHostProtectHistoryInfoRequest instanceof ListHostProtectHistoryInfoRequest) {
                    region = listHostProtectHistoryInfoRequest.region;
                    startTime = listHostProtectHistoryInfoRequest.startTime;
                    endTime = listHostProtectHistoryInfoRequest.endTime;
                    limit = listHostProtectHistoryInfoRequest.limit;
                    offset = listHostProtectHistoryInfoRequest.offset;
                    enterpriseProjectId = listHostProtectHistoryInfoRequest.enterpriseProjectId;
                    hostId = listHostProtectHistoryInfoRequest.hostId;
                    hostName = listHostProtectHistoryInfoRequest.hostName;
                    hostIp = listHostProtectHistoryInfoRequest.hostIp;
                    filePath = listHostProtectHistoryInfoRequest.filePath;
                    fileOperation = listHostProtectHistoryInfoRequest.fileOperation;
                } else {
                    region = listHostProtectHistoryInfoRequest['region'];
                    startTime = listHostProtectHistoryInfoRequest['start_time'];
                    endTime = listHostProtectHistoryInfoRequest['end_time'];
                    limit = listHostProtectHistoryInfoRequest['limit'];
                    offset = listHostProtectHistoryInfoRequest['offset'];
                    enterpriseProjectId = listHostProtectHistoryInfoRequest['enterprise_project_id'];
                    hostId = listHostProtectHistoryInfoRequest['host_id'];
                    hostName = listHostProtectHistoryInfoRequest['host_name'];
                    hostIp = listHostProtectHistoryInfoRequest['host_ip'];
                    filePath = listHostProtectHistoryInfoRequest['file_path'];
                    fileOperation = listHostProtectHistoryInfoRequest['file_operation'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (fileOperation !== null && fileOperation !== undefined) {
                localVarQueryParameter['file_operation'] = fileOperation;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主机动态网页防篡改防护动态：包含告警级别、服务器ip、服务器名称、威胁类型、告警时间、攻击源ip、攻击源url信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostRaspProtectHistoryInfo(listHostRaspProtectHistoryInfoRequest?: ListHostRaspProtectHistoryInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/webtamper/rasp/protect-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let alarmLevel;
            
            let severity;
            
            let protectStatus;

            if (listHostRaspProtectHistoryInfoRequest !== null && listHostRaspProtectHistoryInfoRequest !== undefined) {
                if (listHostRaspProtectHistoryInfoRequest instanceof ListHostRaspProtectHistoryInfoRequest) {
                    region = listHostRaspProtectHistoryInfoRequest.region;
                    startTime = listHostRaspProtectHistoryInfoRequest.startTime;
                    endTime = listHostRaspProtectHistoryInfoRequest.endTime;
                    limit = listHostRaspProtectHistoryInfoRequest.limit;
                    offset = listHostRaspProtectHistoryInfoRequest.offset;
                    enterpriseProjectId = listHostRaspProtectHistoryInfoRequest.enterpriseProjectId;
                    hostId = listHostRaspProtectHistoryInfoRequest.hostId;
                    alarmLevel = listHostRaspProtectHistoryInfoRequest.alarmLevel;
                    severity = listHostRaspProtectHistoryInfoRequest.severity;
                    protectStatus = listHostRaspProtectHistoryInfoRequest.protectStatus;
                } else {
                    region = listHostRaspProtectHistoryInfoRequest['region'];
                    startTime = listHostRaspProtectHistoryInfoRequest['start_time'];
                    endTime = listHostRaspProtectHistoryInfoRequest['end_time'];
                    limit = listHostRaspProtectHistoryInfoRequest['limit'];
                    offset = listHostRaspProtectHistoryInfoRequest['offset'];
                    enterpriseProjectId = listHostRaspProtectHistoryInfoRequest['enterprise_project_id'];
                    hostId = listHostRaspProtectHistoryInfoRequest['host_id'];
                    alarmLevel = listHostRaspProtectHistoryInfoRequest['alarm_level'];
                    severity = listHostRaspProtectHistoryInfoRequest['severity'];
                    protectStatus = listHostRaspProtectHistoryInfoRequest['protect_status'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (alarmLevel !== null && alarmLevel !== undefined) {
                localVarQueryParameter['alarm_level'] = alarmLevel;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostStatus(listHostStatusRequest?: ListHostStatusRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/host-management/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let version;
            
            let agentStatus;
            
            let detectResult;
            
            let hostName;
            
            let hostId;
            
            let hostStatus;
            
            let osType;
            
            let privateIp;
            
            let publicIp;
            
            let ipAddr;
            
            let protectStatus;
            
            let groupId;
            
            let groupName;
            
            let vpcId;
            
            let region;
            
            let hasIntrusion;
            
            let hasVul;
            
            let hasBaseline;
            
            let sortKey;
            
            let sortDir;
            
            let policyGroupId;
            
            let policyGroupName;
            
            let chargingMode;
            
            let refresh;
            
            let getCommonLoginLocations;
            
            let aboveVersion;
            
            let outsideHost;
            
            let assetValue;
            
            let label;
            
            let serverGroup;
            
            let agentUpgradable;
            
            let installMode;
            
            let bindingKey;
            
            let protectInterrupt;
            
            let incluster;
            
            let protectDegradation;
            
            let limit;
            
            let offset;

            if (listHostStatusRequest !== null && listHostStatusRequest !== undefined) {
                if (listHostStatusRequest instanceof ListHostStatusRequest) {
                    enterpriseProjectId = listHostStatusRequest.enterpriseProjectId;
                    version = listHostStatusRequest.version;
                    agentStatus = listHostStatusRequest.agentStatus;
                    detectResult = listHostStatusRequest.detectResult;
                    hostName = listHostStatusRequest.hostName;
                    hostId = listHostStatusRequest.hostId;
                    hostStatus = listHostStatusRequest.hostStatus;
                    osType = listHostStatusRequest.osType;
                    privateIp = listHostStatusRequest.privateIp;
                    publicIp = listHostStatusRequest.publicIp;
                    ipAddr = listHostStatusRequest.ipAddr;
                    protectStatus = listHostStatusRequest.protectStatus;
                    groupId = listHostStatusRequest.groupId;
                    groupName = listHostStatusRequest.groupName;
                    vpcId = listHostStatusRequest.vpcId;
                    region = listHostStatusRequest.region;
                    hasIntrusion = listHostStatusRequest.hasIntrusion;
                    hasVul = listHostStatusRequest.hasVul;
                    hasBaseline = listHostStatusRequest.hasBaseline;
                    sortKey = listHostStatusRequest.sortKey;
                    sortDir = listHostStatusRequest.sortDir;
                    policyGroupId = listHostStatusRequest.policyGroupId;
                    policyGroupName = listHostStatusRequest.policyGroupName;
                    chargingMode = listHostStatusRequest.chargingMode;
                    refresh = listHostStatusRequest.refresh;
                    getCommonLoginLocations = listHostStatusRequest.getCommonLoginLocations;
                    aboveVersion = listHostStatusRequest.aboveVersion;
                    outsideHost = listHostStatusRequest.outsideHost;
                    assetValue = listHostStatusRequest.assetValue;
                    label = listHostStatusRequest.label;
                    serverGroup = listHostStatusRequest.serverGroup;
                    agentUpgradable = listHostStatusRequest.agentUpgradable;
                    installMode = listHostStatusRequest.installMode;
                    bindingKey = listHostStatusRequest.bindingKey;
                    protectInterrupt = listHostStatusRequest.protectInterrupt;
                    incluster = listHostStatusRequest.incluster;
                    protectDegradation = listHostStatusRequest.protectDegradation;
                    limit = listHostStatusRequest.limit;
                    offset = listHostStatusRequest.offset;
                } else {
                    enterpriseProjectId = listHostStatusRequest['enterprise_project_id'];
                    version = listHostStatusRequest['version'];
                    agentStatus = listHostStatusRequest['agent_status'];
                    detectResult = listHostStatusRequest['detect_result'];
                    hostName = listHostStatusRequest['host_name'];
                    hostId = listHostStatusRequest['host_id'];
                    hostStatus = listHostStatusRequest['host_status'];
                    osType = listHostStatusRequest['os_type'];
                    privateIp = listHostStatusRequest['private_ip'];
                    publicIp = listHostStatusRequest['public_ip'];
                    ipAddr = listHostStatusRequest['ip_addr'];
                    protectStatus = listHostStatusRequest['protect_status'];
                    groupId = listHostStatusRequest['group_id'];
                    groupName = listHostStatusRequest['group_name'];
                    vpcId = listHostStatusRequest['vpc_id'];
                    region = listHostStatusRequest['region'];
                    hasIntrusion = listHostStatusRequest['has_intrusion'];
                    hasVul = listHostStatusRequest['has_vul'];
                    hasBaseline = listHostStatusRequest['has_baseline'];
                    sortKey = listHostStatusRequest['sort_key'];
                    sortDir = listHostStatusRequest['sort_dir'];
                    policyGroupId = listHostStatusRequest['policy_group_id'];
                    policyGroupName = listHostStatusRequest['policy_group_name'];
                    chargingMode = listHostStatusRequest['charging_mode'];
                    refresh = listHostStatusRequest['refresh'];
                    getCommonLoginLocations = listHostStatusRequest['get_common_login_locations'];
                    aboveVersion = listHostStatusRequest['above_version'];
                    outsideHost = listHostStatusRequest['outside_host'];
                    assetValue = listHostStatusRequest['asset_value'];
                    label = listHostStatusRequest['label'];
                    serverGroup = listHostStatusRequest['server_group'];
                    agentUpgradable = listHostStatusRequest['agent_upgradable'];
                    installMode = listHostStatusRequest['install_mode'];
                    bindingKey = listHostStatusRequest['binding_key'];
                    protectInterrupt = listHostStatusRequest['protect_interrupt'];
                    incluster = listHostStatusRequest['incluster'];
                    protectDegradation = listHostStatusRequest['protect_degradation'];
                    limit = listHostStatusRequest['limit'];
                    offset = listHostStatusRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (agentStatus !== null && agentStatus !== undefined) {
                localVarQueryParameter['agent_status'] = agentStatus;
            }
            if (detectResult !== null && detectResult !== undefined) {
                localVarQueryParameter['detect_result'] = detectResult;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostStatus !== null && hostStatus !== undefined) {
                localVarQueryParameter['host_status'] = hostStatus;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (ipAddr !== null && ipAddr !== undefined) {
                localVarQueryParameter['ip_addr'] = ipAddr;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (hasIntrusion !== null && hasIntrusion !== undefined) {
                localVarQueryParameter['has_intrusion'] = hasIntrusion;
            }
            if (hasVul !== null && hasVul !== undefined) {
                localVarQueryParameter['has_vul'] = hasVul;
            }
            if (hasBaseline !== null && hasBaseline !== undefined) {
                localVarQueryParameter['has_baseline'] = hasBaseline;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (policyGroupId !== null && policyGroupId !== undefined) {
                localVarQueryParameter['policy_group_id'] = policyGroupId;
            }
            if (policyGroupName !== null && policyGroupName !== undefined) {
                localVarQueryParameter['policy_group_name'] = policyGroupName;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }
            if (refresh !== null && refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
            }
            if (getCommonLoginLocations !== null && getCommonLoginLocations !== undefined) {
                localVarQueryParameter['get_common_login_locations'] = getCommonLoginLocations;
            }
            if (aboveVersion !== null && aboveVersion !== undefined) {
                localVarQueryParameter['above_version'] = aboveVersion;
            }
            if (outsideHost !== null && outsideHost !== undefined) {
                localVarQueryParameter['outside_host'] = outsideHost;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (label !== null && label !== undefined) {
                localVarQueryParameter['label'] = label;
            }
            if (serverGroup !== null && serverGroup !== undefined) {
                localVarQueryParameter['server_group'] = serverGroup;
            }
            if (agentUpgradable !== null && agentUpgradable !== undefined) {
                localVarQueryParameter['agent_upgradable'] = agentUpgradable;
            }
            if (installMode !== null && installMode !== undefined) {
                localVarQueryParameter['install_mode'] = installMode;
            }
            if (bindingKey !== null && bindingKey !== undefined) {
                localVarQueryParameter['binding_key'] = bindingKey;
            }
            if (protectInterrupt !== null && protectInterrupt !== undefined) {
                localVarQueryParameter['protect_interrupt'] = protectInterrupt;
            }
            if (incluster !== null && incluster !== undefined) {
                localVarQueryParameter['incluster'] = incluster;
            }
            if (protectDegradation !== null && protectDegradation !== undefined) {
                localVarQueryParameter['protect_degradation'] = protectDegradation;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单台服务器漏洞信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostVuls(listHostVulsRequest?: ListHostVulsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/host/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let enterpriseProjectId;
            
            let type;
            
            let vulName;
            
            let limit;
            
            let offset;
            
            let handleStatus;
            
            let status;
            
            let repairPriority;

            if (listHostVulsRequest !== null && listHostVulsRequest !== undefined) {
                if (listHostVulsRequest instanceof ListHostVulsRequest) {
                    hostId = listHostVulsRequest.hostId;
                    enterpriseProjectId = listHostVulsRequest.enterpriseProjectId;
                    type = listHostVulsRequest.type;
                    vulName = listHostVulsRequest.vulName;
                    limit = listHostVulsRequest.limit;
                    offset = listHostVulsRequest.offset;
                    handleStatus = listHostVulsRequest.handleStatus;
                    status = listHostVulsRequest.status;
                    repairPriority = listHostVulsRequest.repairPriority;
                } else {
                    hostId = listHostVulsRequest['host_id'];
                    enterpriseProjectId = listHostVulsRequest['enterprise_project_id'];
                    type = listHostVulsRequest['type'];
                    vulName = listHostVulsRequest['vul_name'];
                    limit = listHostVulsRequest['limit'];
                    offset = listHostVulsRequest['offset'];
                    handleStatus = listHostVulsRequest['handle_status'];
                    status = listHostVulsRequest['status'];
                    repairPriority = listHostVulsRequest['repair_priority'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling listHostVuls.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (vulName !== null && vulName !== undefined) {
                localVarQueryParameter['vul_name'] = vulName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (repairPriority !== null && repairPriority !== undefined) {
                localVarQueryParameter['repair_priority'] = repairPriority;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本地镜像列表查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageLocal(listImageLocalRequest?: ListImageLocalRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/image/local-repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let imageName;
            
            let imageVersion;
            
            let offset;
            
            let limit;
            
            let scanStatus;
            
            let localImageType;
            
            let imageSize;
            
            let startLatestUpdateTime;
            
            let endLatestUpdateTime;
            
            let startLatestScanTime;
            
            let endLatestScanTime;
            
            let hasVul;
            
            let hostName;
            
            let hostId;
            
            let hostIp;
            
            let containerId;
            
            let containerName;
            
            let podId;
            
            let podName;
            
            let appName;

            if (listImageLocalRequest !== null && listImageLocalRequest !== undefined) {
                if (listImageLocalRequest instanceof ListImageLocalRequest) {
                    enterpriseProjectId = listImageLocalRequest.enterpriseProjectId;
                    imageName = listImageLocalRequest.imageName;
                    imageVersion = listImageLocalRequest.imageVersion;
                    offset = listImageLocalRequest.offset;
                    limit = listImageLocalRequest.limit;
                    scanStatus = listImageLocalRequest.scanStatus;
                    localImageType = listImageLocalRequest.localImageType;
                    imageSize = listImageLocalRequest.imageSize;
                    startLatestUpdateTime = listImageLocalRequest.startLatestUpdateTime;
                    endLatestUpdateTime = listImageLocalRequest.endLatestUpdateTime;
                    startLatestScanTime = listImageLocalRequest.startLatestScanTime;
                    endLatestScanTime = listImageLocalRequest.endLatestScanTime;
                    hasVul = listImageLocalRequest.hasVul;
                    hostName = listImageLocalRequest.hostName;
                    hostId = listImageLocalRequest.hostId;
                    hostIp = listImageLocalRequest.hostIp;
                    containerId = listImageLocalRequest.containerId;
                    containerName = listImageLocalRequest.containerName;
                    podId = listImageLocalRequest.podId;
                    podName = listImageLocalRequest.podName;
                    appName = listImageLocalRequest.appName;
                } else {
                    enterpriseProjectId = listImageLocalRequest['enterprise_project_id'];
                    imageName = listImageLocalRequest['image_name'];
                    imageVersion = listImageLocalRequest['image_version'];
                    offset = listImageLocalRequest['offset'];
                    limit = listImageLocalRequest['limit'];
                    scanStatus = listImageLocalRequest['scan_status'];
                    localImageType = listImageLocalRequest['local_image_type'];
                    imageSize = listImageLocalRequest['image_size'];
                    startLatestUpdateTime = listImageLocalRequest['start_latest_update_time'];
                    endLatestUpdateTime = listImageLocalRequest['end_latest_update_time'];
                    startLatestScanTime = listImageLocalRequest['start_latest_scan_time'];
                    endLatestScanTime = listImageLocalRequest['end_latest_scan_time'];
                    hasVul = listImageLocalRequest['has_vul'];
                    hostName = listImageLocalRequest['host_name'];
                    hostId = listImageLocalRequest['host_id'];
                    hostIp = listImageLocalRequest['host_ip'];
                    containerId = listImageLocalRequest['container_id'];
                    containerName = listImageLocalRequest['container_name'];
                    podId = listImageLocalRequest['pod_id'];
                    podName = listImageLocalRequest['pod_name'];
                    appName = listImageLocalRequest['app_name'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (imageVersion !== null && imageVersion !== undefined) {
                localVarQueryParameter['image_version'] = imageVersion;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (scanStatus !== null && scanStatus !== undefined) {
                localVarQueryParameter['scan_status'] = scanStatus;
            }
            if (localImageType !== null && localImageType !== undefined) {
                localVarQueryParameter['local_image_type'] = localImageType;
            }
            if (imageSize !== null && imageSize !== undefined) {
                localVarQueryParameter['image_size'] = imageSize;
            }
            if (startLatestUpdateTime !== null && startLatestUpdateTime !== undefined) {
                localVarQueryParameter['start_latest_update_time'] = startLatestUpdateTime;
            }
            if (endLatestUpdateTime !== null && endLatestUpdateTime !== undefined) {
                localVarQueryParameter['end_latest_update_time'] = endLatestUpdateTime;
            }
            if (startLatestScanTime !== null && startLatestScanTime !== undefined) {
                localVarQueryParameter['start_latest_scan_time'] = startLatestScanTime;
            }
            if (endLatestScanTime !== null && endLatestScanTime !== undefined) {
                localVarQueryParameter['end_latest_scan_time'] = endLatestScanTime;
            }
            if (hasVul !== null && hasVul !== undefined) {
                localVarQueryParameter['has_vul'] = hasVul;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (containerId !== null && containerId !== undefined) {
                localVarQueryParameter['container_id'] = containerId;
            }
            if (containerName !== null && containerName !== undefined) {
                localVarQueryParameter['container_name'] = containerName;
            }
            if (podId !== null && podId !== undefined) {
                localVarQueryParameter['pod_id'] = podId;
            }
            if (podName !== null && podName !== undefined) {
                localVarQueryParameter['pod_name'] = podName;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像指定安全配置项的检查项列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageRiskConfigRules(listImageRiskConfigRulesRequest?: ListImageRiskConfigRulesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/image/baseline/risk-configs/{check_name}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageType;
            
            let checkName;
            
            let standard;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let namespace;
            
            let imageName;
            
            let imageVersion;
            
            let imageId;
            
            let resultType;
            
            let checkRuleName;
            
            let severity;
            
            let instanceId;

            if (listImageRiskConfigRulesRequest !== null && listImageRiskConfigRulesRequest !== undefined) {
                if (listImageRiskConfigRulesRequest instanceof ListImageRiskConfigRulesRequest) {
                    imageType = listImageRiskConfigRulesRequest.imageType;
                    checkName = listImageRiskConfigRulesRequest.checkName;
                    standard = listImageRiskConfigRulesRequest.standard;
                    region = listImageRiskConfigRulesRequest.region;
                    enterpriseProjectId = listImageRiskConfigRulesRequest.enterpriseProjectId;
                    offset = listImageRiskConfigRulesRequest.offset;
                    limit = listImageRiskConfigRulesRequest.limit;
                    namespace = listImageRiskConfigRulesRequest.namespace;
                    imageName = listImageRiskConfigRulesRequest.imageName;
                    imageVersion = listImageRiskConfigRulesRequest.imageVersion;
                    imageId = listImageRiskConfigRulesRequest.imageId;
                    resultType = listImageRiskConfigRulesRequest.resultType;
                    checkRuleName = listImageRiskConfigRulesRequest.checkRuleName;
                    severity = listImageRiskConfigRulesRequest.severity;
                    instanceId = listImageRiskConfigRulesRequest.instanceId;
                } else {
                    imageType = listImageRiskConfigRulesRequest['image_type'];
                    checkName = listImageRiskConfigRulesRequest['check_name'];
                    standard = listImageRiskConfigRulesRequest['standard'];
                    region = listImageRiskConfigRulesRequest['region'];
                    enterpriseProjectId = listImageRiskConfigRulesRequest['enterprise_project_id'];
                    offset = listImageRiskConfigRulesRequest['offset'];
                    limit = listImageRiskConfigRulesRequest['limit'];
                    namespace = listImageRiskConfigRulesRequest['namespace'];
                    imageName = listImageRiskConfigRulesRequest['image_name'];
                    imageVersion = listImageRiskConfigRulesRequest['image_version'];
                    imageId = listImageRiskConfigRulesRequest['image_id'];
                    resultType = listImageRiskConfigRulesRequest['result_type'];
                    checkRuleName = listImageRiskConfigRulesRequest['check_rule_name'];
                    severity = listImageRiskConfigRulesRequest['severity'];
                    instanceId = listImageRiskConfigRulesRequest['instance_id'];
                }
            }

        
            if (imageType === null || imageType === undefined) {
                throw new RequiredError('imageType','Required parameter imageType was null or undefined when calling listImageRiskConfigRules.');
            }
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }
            if (checkName === null || checkName === undefined) {
            throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling listImageRiskConfigRules.');
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling listImageRiskConfigRules.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (imageVersion !== null && imageVersion !== undefined) {
                localVarQueryParameter['image_version'] = imageVersion;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (resultType !== null && resultType !== undefined) {
                localVarQueryParameter['result_type'] = resultType;
            }
            if (checkRuleName !== null && checkRuleName !== undefined) {
                localVarQueryParameter['check_rule_name'] = checkRuleName;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'check_name': checkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像安全配置检测结果列表,当前支持检测CentOS 7、Debian 10、EulerOS和Ubuntu16镜像的系统配置项、SSH应用配置项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageRiskConfigs(listImageRiskConfigsRequest?: ListImageRiskConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/image/baseline/risk-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageType;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let namespace;
            
            let imageName;
            
            let imageVersion;
            
            let imageId;
            
            let checkName;
            
            let severity;
            
            let standard;
            
            let instanceId;

            if (listImageRiskConfigsRequest !== null && listImageRiskConfigsRequest !== undefined) {
                if (listImageRiskConfigsRequest instanceof ListImageRiskConfigsRequest) {
                    imageType = listImageRiskConfigsRequest.imageType;
                    region = listImageRiskConfigsRequest.region;
                    enterpriseProjectId = listImageRiskConfigsRequest.enterpriseProjectId;
                    offset = listImageRiskConfigsRequest.offset;
                    limit = listImageRiskConfigsRequest.limit;
                    namespace = listImageRiskConfigsRequest.namespace;
                    imageName = listImageRiskConfigsRequest.imageName;
                    imageVersion = listImageRiskConfigsRequest.imageVersion;
                    imageId = listImageRiskConfigsRequest.imageId;
                    checkName = listImageRiskConfigsRequest.checkName;
                    severity = listImageRiskConfigsRequest.severity;
                    standard = listImageRiskConfigsRequest.standard;
                    instanceId = listImageRiskConfigsRequest.instanceId;
                } else {
                    imageType = listImageRiskConfigsRequest['image_type'];
                    region = listImageRiskConfigsRequest['region'];
                    enterpriseProjectId = listImageRiskConfigsRequest['enterprise_project_id'];
                    offset = listImageRiskConfigsRequest['offset'];
                    limit = listImageRiskConfigsRequest['limit'];
                    namespace = listImageRiskConfigsRequest['namespace'];
                    imageName = listImageRiskConfigsRequest['image_name'];
                    imageVersion = listImageRiskConfigsRequest['image_version'];
                    imageId = listImageRiskConfigsRequest['image_id'];
                    checkName = listImageRiskConfigsRequest['check_name'];
                    severity = listImageRiskConfigsRequest['severity'];
                    standard = listImageRiskConfigsRequest['standard'];
                    instanceId = listImageRiskConfigsRequest['instance_id'];
                }
            }

        
            if (imageType === null || imageType === undefined) {
                throw new RequiredError('imageType','Required parameter imageType was null or undefined when calling listImageRiskConfigs.');
            }
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (imageVersion !== null && imageVersion !== undefined) {
                localVarQueryParameter['image_version'] = imageVersion;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (checkName !== null && checkName !== undefined) {
                localVarQueryParameter['check_name'] = checkName;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像的漏洞信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageVulnerabilities(listImageVulnerabilitiesRequest?: ListImageVulnerabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/image/{image_id}/vulnerabilities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageType;
            
            let imageId;
            
            let namespace;
            
            let imageName;
            
            let tagName;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let instanceId;
            
            let repairNecessity;
            
            let vulId;
            
            let appName;
            
            let type;

            if (listImageVulnerabilitiesRequest !== null && listImageVulnerabilitiesRequest !== undefined) {
                if (listImageVulnerabilitiesRequest instanceof ListImageVulnerabilitiesRequest) {
                    imageType = listImageVulnerabilitiesRequest.imageType;
                    imageId = listImageVulnerabilitiesRequest.imageId;
                    namespace = listImageVulnerabilitiesRequest.namespace;
                    imageName = listImageVulnerabilitiesRequest.imageName;
                    tagName = listImageVulnerabilitiesRequest.tagName;
                    region = listImageVulnerabilitiesRequest.region;
                    enterpriseProjectId = listImageVulnerabilitiesRequest.enterpriseProjectId;
                    offset = listImageVulnerabilitiesRequest.offset;
                    limit = listImageVulnerabilitiesRequest.limit;
                    instanceId = listImageVulnerabilitiesRequest.instanceId;
                    repairNecessity = listImageVulnerabilitiesRequest.repairNecessity;
                    vulId = listImageVulnerabilitiesRequest.vulId;
                    appName = listImageVulnerabilitiesRequest.appName;
                    type = listImageVulnerabilitiesRequest.type;
                } else {
                    imageType = listImageVulnerabilitiesRequest['image_type'];
                    imageId = listImageVulnerabilitiesRequest['image_id'];
                    namespace = listImageVulnerabilitiesRequest['namespace'];
                    imageName = listImageVulnerabilitiesRequest['image_name'];
                    tagName = listImageVulnerabilitiesRequest['tag_name'];
                    region = listImageVulnerabilitiesRequest['region'];
                    enterpriseProjectId = listImageVulnerabilitiesRequest['enterprise_project_id'];
                    offset = listImageVulnerabilitiesRequest['offset'];
                    limit = listImageVulnerabilitiesRequest['limit'];
                    instanceId = listImageVulnerabilitiesRequest['instance_id'];
                    repairNecessity = listImageVulnerabilitiesRequest['repair_necessity'];
                    vulId = listImageVulnerabilitiesRequest['vul_id'];
                    appName = listImageVulnerabilitiesRequest['app_name'];
                    type = listImageVulnerabilitiesRequest['type'];
                }
            }

        
            if (imageType === null || imageType === undefined) {
                throw new RequiredError('imageType','Required parameter imageType was null or undefined when calling listImageVulnerabilities.');
            }
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }
            if (imageId === null || imageId === undefined) {
            throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling listImageVulnerabilities.');
            }
            if (namespace === null || namespace === undefined) {
                throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listImageVulnerabilities.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (imageName === null || imageName === undefined) {
                throw new RequiredError('imageName','Required parameter imageName was null or undefined when calling listImageVulnerabilities.');
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (tagName === null || tagName === undefined) {
                throw new RequiredError('tagName','Required parameter tagName was null or undefined when calling listImageVulnerabilities.');
            }
            if (tagName !== null && tagName !== undefined) {
                localVarQueryParameter['tag_name'] = tagName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (repairNecessity !== null && repairNecessity !== undefined) {
                localVarQueryParameter['repair_necessity'] = repairNecessity;
            }
            if (vulId !== null && vulId !== undefined) {
                localVarQueryParameter['vul_id'] = vulId;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已隔离文件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIsolatedFile(listIsolatedFileRequest?: ListIsolatedFileRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/isolated-file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let filePath;
            
            let hostName;
            
            let privateIp;
            
            let publicIp;
            
            let fileHash;
            
            let assetValue;
            
            let offset;
            
            let limit;
            
            let isolationStatus;
            
            let lastDays;
            
            let beginTime;
            
            let endTime;

            if (listIsolatedFileRequest !== null && listIsolatedFileRequest !== undefined) {
                if (listIsolatedFileRequest instanceof ListIsolatedFileRequest) {
                    region = listIsolatedFileRequest.region;
                    enterpriseProjectId = listIsolatedFileRequest.enterpriseProjectId;
                    filePath = listIsolatedFileRequest.filePath;
                    hostName = listIsolatedFileRequest.hostName;
                    privateIp = listIsolatedFileRequest.privateIp;
                    publicIp = listIsolatedFileRequest.publicIp;
                    fileHash = listIsolatedFileRequest.fileHash;
                    assetValue = listIsolatedFileRequest.assetValue;
                    offset = listIsolatedFileRequest.offset;
                    limit = listIsolatedFileRequest.limit;
                    isolationStatus = listIsolatedFileRequest.isolationStatus;
                    lastDays = listIsolatedFileRequest.lastDays;
                    beginTime = listIsolatedFileRequest.beginTime;
                    endTime = listIsolatedFileRequest.endTime;
                } else {
                    region = listIsolatedFileRequest['region'];
                    enterpriseProjectId = listIsolatedFileRequest['enterprise_project_id'];
                    filePath = listIsolatedFileRequest['file_path'];
                    hostName = listIsolatedFileRequest['host_name'];
                    privateIp = listIsolatedFileRequest['private_ip'];
                    publicIp = listIsolatedFileRequest['public_ip'];
                    fileHash = listIsolatedFileRequest['file_hash'];
                    assetValue = listIsolatedFileRequest['asset_value'];
                    offset = listIsolatedFileRequest['offset'];
                    limit = listIsolatedFileRequest['limit'];
                    isolationStatus = listIsolatedFileRequest['isolation_status'];
                    lastDays = listIsolatedFileRequest['last_days'];
                    beginTime = listIsolatedFileRequest['begin_time'];
                    endTime = listIsolatedFileRequest['end_time'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (fileHash !== null && fileHash !== undefined) {
                localVarQueryParameter['file_hash'] = fileHash;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (isolationStatus !== null && isolationStatus !== undefined) {
                localVarQueryParameter['isolation_status'] = isolationStatus;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定中间件的服务器列表，通过传入中间件名称参数，返回对应的中间件服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJarPackageHostInfo(listJarPackageHostInfoRequest?: ListJarPackageHostInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/midwares/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;
            
            let enterpriseProjectId;
            
            let category;
            
            let hostName;
            
            let hostIp;
            
            let limit;
            
            let offset;
            
            let partMatch;

            if (listJarPackageHostInfoRequest !== null && listJarPackageHostInfoRequest !== undefined) {
                if (listJarPackageHostInfoRequest instanceof ListJarPackageHostInfoRequest) {
                    fileName = listJarPackageHostInfoRequest.fileName;
                    enterpriseProjectId = listJarPackageHostInfoRequest.enterpriseProjectId;
                    category = listJarPackageHostInfoRequest.category;
                    hostName = listJarPackageHostInfoRequest.hostName;
                    hostIp = listJarPackageHostInfoRequest.hostIp;
                    limit = listJarPackageHostInfoRequest.limit;
                    offset = listJarPackageHostInfoRequest.offset;
                    partMatch = listJarPackageHostInfoRequest.partMatch;
                } else {
                    fileName = listJarPackageHostInfoRequest['file_name'];
                    enterpriseProjectId = listJarPackageHostInfoRequest['enterprise_project_id'];
                    category = listJarPackageHostInfoRequest['category'];
                    hostName = listJarPackageHostInfoRequest['host_name'];
                    hostIp = listJarPackageHostInfoRequest['host_ip'];
                    limit = listJarPackageHostInfoRequest['limit'];
                    offset = listJarPackageHostInfoRequest['offset'];
                    partMatch = listJarPackageHostInfoRequest['part_match'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling listJarPackageHostInfo.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (partMatch !== null && partMatch !== undefined) {
                localVarQueryParameter['part_match'] = partMatch;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中间件列表，支持通过中间件名称查询对应的服务器树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJarPackageStatistics(listJarPackageStatisticsRequest?: ListJarPackageStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/midwares",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let fileName;
            
            let category;
            
            let limit;
            
            let offset;

            if (listJarPackageStatisticsRequest !== null && listJarPackageStatisticsRequest !== undefined) {
                if (listJarPackageStatisticsRequest instanceof ListJarPackageStatisticsRequest) {
                    enterpriseProjectId = listJarPackageStatisticsRequest.enterpriseProjectId;
                    fileName = listJarPackageStatisticsRequest.fileName;
                    category = listJarPackageStatisticsRequest.category;
                    limit = listJarPackageStatisticsRequest.limit;
                    offset = listJarPackageStatisticsRequest.offset;
                } else {
                    enterpriseProjectId = listJarPackageStatisticsRequest['enterprise_project_id'];
                    fileName = listJarPackageStatisticsRequest['file_name'];
                    category = listJarPackageStatisticsRequest['category'];
                    limit = listJarPackageStatisticsRequest['limit'];
                    offset = listJarPackageStatisticsRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询常用登录IP信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoginCommonIp(listLoginCommonIpRequest?: ListLoginCommonIpRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/setting/login-common-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let ipAddr;

            if (listLoginCommonIpRequest !== null && listLoginCommonIpRequest !== undefined) {
                if (listLoginCommonIpRequest instanceof ListLoginCommonIpRequest) {
                    enterpriseProjectId = listLoginCommonIpRequest.enterpriseProjectId;
                    ipAddr = listLoginCommonIpRequest.ipAddr;
                } else {
                    enterpriseProjectId = listLoginCommonIpRequest['enterprise_project_id'];
                    ipAddr = listLoginCommonIpRequest['ip_addr'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (ipAddr !== null && ipAddr !== undefined) {
                localVarQueryParameter['ip_addr'] = ipAddr;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询常用登录地信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoginCommonLocation(listLoginCommonLocationRequest?: ListLoginCommonLocationRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/setting/login-common-location",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let areaCode;

            if (listLoginCommonLocationRequest !== null && listLoginCommonLocationRequest !== undefined) {
                if (listLoginCommonLocationRequest instanceof ListLoginCommonLocationRequest) {
                    enterpriseProjectId = listLoginCommonLocationRequest.enterpriseProjectId;
                    areaCode = listLoginCommonLocationRequest.areaCode;
                } else {
                    enterpriseProjectId = listLoginCommonLocationRequest['enterprise_project_id'];
                    areaCode = listLoginCommonLocationRequest['area_code'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (areaCode !== null && areaCode !== undefined) {
                localVarQueryParameter['area_code'] = areaCode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SSH登录IP白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoginWhiteIp(listLoginWhiteIpRequest?: ListLoginWhiteIpRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/setting/login-white-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let whiteIp;

            if (listLoginWhiteIpRequest !== null && listLoginWhiteIpRequest !== undefined) {
                if (listLoginWhiteIpRequest instanceof ListLoginWhiteIpRequest) {
                    enterpriseProjectId = listLoginWhiteIpRequest.enterpriseProjectId;
                    whiteIp = listLoginWhiteIpRequest.whiteIp;
                } else {
                    enterpriseProjectId = listLoginWhiteIpRequest['enterprise_project_id'];
                    whiteIp = listLoginWhiteIpRequest['white_ip'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (whiteIp !== null && whiteIp !== undefined) {
                localVarQueryParameter['white_ip'] = whiteIp;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询登录白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoginWhiteList(listLoginWhiteListRequest?: ListLoginWhiteListRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/white-list/login",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let privateIp;
            
            let loginIp;
            
            let loginUserName;

            if (listLoginWhiteListRequest !== null && listLoginWhiteListRequest !== undefined) {
                if (listLoginWhiteListRequest instanceof ListLoginWhiteListRequest) {
                    offset = listLoginWhiteListRequest.offset;
                    limit = listLoginWhiteListRequest.limit;
                    enterpriseProjectId = listLoginWhiteListRequest.enterpriseProjectId;
                    privateIp = listLoginWhiteListRequest.privateIp;
                    loginIp = listLoginWhiteListRequest.loginIp;
                    loginUserName = listLoginWhiteListRequest.loginUserName;
                } else {
                    offset = listLoginWhiteListRequest['offset'];
                    limit = listLoginWhiteListRequest['limit'];
                    enterpriseProjectId = listLoginWhiteListRequest['enterprise_project_id'];
                    privateIp = listLoginWhiteListRequest['private_ip'];
                    loginIp = listLoginWhiteListRequest['login_ip'];
                    loginUserName = listLoginWhiteListRequest['login_user_name'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listLoginWhiteList.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listLoginWhiteList.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (loginIp !== null && loginIp !== undefined) {
                localVarQueryParameter['login_ip'] = loginIp;
            }
            if (loginUserName !== null && loginUserName !== undefined) {
                localVarQueryParameter['login_user_name'] = loginUserName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询备份恢复任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOperationLogsByVaultName(listOperationLogsByVaultNameRequest?: ListOperationLogsByVaultNameRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/ransomware/backup/operation-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let status;
            
            let resourceName;
            
            let lastDays;

            if (listOperationLogsByVaultNameRequest !== null && listOperationLogsByVaultNameRequest !== undefined) {
                if (listOperationLogsByVaultNameRequest instanceof ListOperationLogsByVaultNameRequest) {
                    offset = listOperationLogsByVaultNameRequest.offset;
                    limit = listOperationLogsByVaultNameRequest.limit;
                    enterpriseProjectId = listOperationLogsByVaultNameRequest.enterpriseProjectId;
                    status = listOperationLogsByVaultNameRequest.status;
                    resourceName = listOperationLogsByVaultNameRequest.resourceName;
                    lastDays = listOperationLogsByVaultNameRequest.lastDays;
                } else {
                    offset = listOperationLogsByVaultNameRequest['offset'];
                    limit = listOperationLogsByVaultNameRequest['limit'];
                    enterpriseProjectId = listOperationLogsByVaultNameRequest['enterprise_project_id'];
                    status = listOperationLogsByVaultNameRequest['status'];
                    resourceName = listOperationLogsByVaultNameRequest['resource_name'];
                    lastDays = listOperationLogsByVaultNameRequest['last_days'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listOperationLogsByVaultName.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listOperationLogsByVaultName.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账号组织
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOrganizationTree(listOrganizationTreeRequest?: ListOrganizationTreeRequest) {
            const options = {
                method: "GET",
                url: "/v5/setting/account/organization-tree",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let xSecurityToken;
            
            let isRefresh;
            
            let enterpriseProjectId;

            if (listOrganizationTreeRequest !== null && listOrganizationTreeRequest !== undefined) {
                if (listOrganizationTreeRequest instanceof ListOrganizationTreeRequest) {
                    region = listOrganizationTreeRequest.region;
                    xSecurityToken = listOrganizationTreeRequest.xSecurityToken;
                    isRefresh = listOrganizationTreeRequest.isRefresh;
                    enterpriseProjectId = listOrganizationTreeRequest.enterpriseProjectId;
                } else {
                    region = listOrganizationTreeRequest['region'];
                    xSecurityToken = listOrganizationTreeRequest['X-Security-Token'];
                    isRefresh = listOrganizationTreeRequest['is_refresh'];
                    enterpriseProjectId = listOrganizationTreeRequest['enterprise_project_id'];
                }
            }

        
            if (isRefresh !== null && isRefresh !== undefined) {
                localVarQueryParameter['is_refresh'] = isRefresh;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询口令复杂度策略检测报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPasswordComplexity(listPasswordComplexityRequest?: ListPasswordComplexityRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/password-complexity",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let hostId;
            
            let resultType;
            
            let limit;
            
            let offset;

            if (listPasswordComplexityRequest !== null && listPasswordComplexityRequest !== undefined) {
                if (listPasswordComplexityRequest instanceof ListPasswordComplexityRequest) {
                    enterpriseProjectId = listPasswordComplexityRequest.enterpriseProjectId;
                    hostName = listPasswordComplexityRequest.hostName;
                    hostIp = listPasswordComplexityRequest.hostIp;
                    hostId = listPasswordComplexityRequest.hostId;
                    resultType = listPasswordComplexityRequest.resultType;
                    limit = listPasswordComplexityRequest.limit;
                    offset = listPasswordComplexityRequest.offset;
                } else {
                    enterpriseProjectId = listPasswordComplexityRequest['enterprise_project_id'];
                    hostName = listPasswordComplexityRequest['host_name'];
                    hostIp = listPasswordComplexityRequest['host_ip'];
                    hostId = listPasswordComplexityRequest['host_id'];
                    resultType = listPasswordComplexityRequest['result_type'];
                    limit = listPasswordComplexityRequest['limit'];
                    offset = listPasswordComplexityRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (resultType !== null && resultType !== undefined) {
                localVarQueryParameter['result_type'] = resultType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主机策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicies(listPoliciesRequest?: ListPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/host-management/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let agentId;
            
            let enterpriseProjectId;

            if (listPoliciesRequest !== null && listPoliciesRequest !== undefined) {
                if (listPoliciesRequest instanceof ListPoliciesRequest) {
                    offset = listPoliciesRequest.offset;
                    limit = listPoliciesRequest.limit;
                    agentId = listPoliciesRequest.agentId;
                    enterpriseProjectId = listPoliciesRequest.enterpriseProjectId;
                } else {
                    offset = listPoliciesRequest['offset'];
                    limit = listPoliciesRequest['limit'];
                    agentId = listPoliciesRequest['agent_id'];
                    enterpriseProjectId = listPoliciesRequest['enterprise_project_id'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPolicies.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPolicies.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (agentId === null || agentId === undefined) {
                throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling listPolicies.');
            }
            if (agentId !== null && agentId !== undefined) {
                localVarQueryParameter['agent_id'] = agentId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询策略组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyGroup(listPolicyGroupRequest?: ListPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/policy/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let groupName;
            
            let offset;
            
            let limit;
            
            let containerMode;
            
            let groupId;

            if (listPolicyGroupRequest !== null && listPolicyGroupRequest !== undefined) {
                if (listPolicyGroupRequest instanceof ListPolicyGroupRequest) {
                    region = listPolicyGroupRequest.region;
                    enterpriseProjectId = listPolicyGroupRequest.enterpriseProjectId;
                    groupName = listPolicyGroupRequest.groupName;
                    offset = listPolicyGroupRequest.offset;
                    limit = listPolicyGroupRequest.limit;
                    containerMode = listPolicyGroupRequest.containerMode;
                    groupId = listPolicyGroupRequest.groupId;
                } else {
                    region = listPolicyGroupRequest['region'];
                    enterpriseProjectId = listPolicyGroupRequest['enterprise_project_id'];
                    groupName = listPolicyGroupRequest['group_name'];
                    offset = listPolicyGroupRequest['offset'];
                    limit = listPolicyGroupRequest['limit'];
                    containerMode = listPolicyGroupRequest['container_mode'];
                    groupId = listPolicyGroupRequest['group_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (containerMode !== null && containerMode !== undefined) {
                localVarQueryParameter['container_mode'] = containerMode;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 具备该端口的主机/容器信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPortHost(listPortHostRequest?: ListPortHostRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/ports/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let port;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let type;
            
            let category;
            
            let limit;
            
            let offset;

            if (listPortHostRequest !== null && listPortHostRequest !== undefined) {
                if (listPortHostRequest instanceof ListPortHostRequest) {
                    port = listPortHostRequest.port;
                    enterpriseProjectId = listPortHostRequest.enterpriseProjectId;
                    hostName = listPortHostRequest.hostName;
                    hostIp = listPortHostRequest.hostIp;
                    type = listPortHostRequest.type;
                    category = listPortHostRequest.category;
                    limit = listPortHostRequest.limit;
                    offset = listPortHostRequest.offset;
                } else {
                    port = listPortHostRequest['port'];
                    enterpriseProjectId = listPortHostRequest['enterprise_project_id'];
                    hostName = listPortHostRequest['host_name'];
                    hostIp = listPortHostRequest['host_ip'];
                    type = listPortHostRequest['type'];
                    category = listPortHostRequest['category'];
                    limit = listPortHostRequest['limit'];
                    offset = listPortHostRequest['offset'];
                }
            }

        
            if (port === null || port === undefined) {
                throw new RequiredError('port','Required parameter port was null or undefined when calling listPortHost.');
            }
            if (port !== null && port !== undefined) {
                localVarQueryParameter['port'] = port;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询开放端口列表，支持通过传入端口或协议类型查询服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPortStatistics(listPortStatisticsRequest?: ListPortStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/port/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let port;
            
            let portString;
            
            let type;
            
            let status;
            
            let enterpriseProjectId;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let category;

            if (listPortStatisticsRequest !== null && listPortStatisticsRequest !== undefined) {
                if (listPortStatisticsRequest instanceof ListPortStatisticsRequest) {
                    port = listPortStatisticsRequest.port;
                    portString = listPortStatisticsRequest.portString;
                    type = listPortStatisticsRequest.type;
                    status = listPortStatisticsRequest.status;
                    enterpriseProjectId = listPortStatisticsRequest.enterpriseProjectId;
                    sortKey = listPortStatisticsRequest.sortKey;
                    sortDir = listPortStatisticsRequest.sortDir;
                    limit = listPortStatisticsRequest.limit;
                    offset = listPortStatisticsRequest.offset;
                    category = listPortStatisticsRequest.category;
                } else {
                    port = listPortStatisticsRequest['port'];
                    portString = listPortStatisticsRequest['port_string'];
                    type = listPortStatisticsRequest['type'];
                    status = listPortStatisticsRequest['status'];
                    enterpriseProjectId = listPortStatisticsRequest['enterprise_project_id'];
                    sortKey = listPortStatisticsRequest['sort_key'];
                    sortDir = listPortStatisticsRequest['sort_dir'];
                    limit = listPortStatisticsRequest['limit'];
                    offset = listPortStatisticsRequest['offset'];
                    category = listPortStatisticsRequest['category'];
                }
            }

        
            if (port !== null && port !== undefined) {
                localVarQueryParameter['port'] = port;
            }
            if (portString !== null && portString !== undefined) {
                localVarQueryParameter['port_string'] = portString;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单服务器的开放端口列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPorts(listPortsRequest?: ListPortsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/ports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostName;
            
            let hostIp;
            
            let port;
            
            let type;
            
            let status;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let category;

            if (listPortsRequest !== null && listPortsRequest !== undefined) {
                if (listPortsRequest instanceof ListPortsRequest) {
                    hostId = listPortsRequest.hostId;
                    hostName = listPortsRequest.hostName;
                    hostIp = listPortsRequest.hostIp;
                    port = listPortsRequest.port;
                    type = listPortsRequest.type;
                    status = listPortsRequest.status;
                    enterpriseProjectId = listPortsRequest.enterpriseProjectId;
                    limit = listPortsRequest.limit;
                    offset = listPortsRequest.offset;
                    category = listPortsRequest.category;
                } else {
                    hostId = listPortsRequest['host_id'];
                    hostName = listPortsRequest['host_name'];
                    hostIp = listPortsRequest['host_ip'];
                    port = listPortsRequest['port'];
                    type = listPortsRequest['type'];
                    status = listPortsRequest['status'];
                    enterpriseProjectId = listPortsRequest['enterprise_project_id'];
                    limit = listPortsRequest['limit'];
                    offset = listPortsRequest['offset'];
                    category = listPortsRequest['category'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
                throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling listPorts.');
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (port !== null && port !== undefined) {
                localVarQueryParameter['port'] = port;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询进程列表，通过传入进程路径参数查询对应的服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProcessStatistics(listProcessStatisticsRequest?: ListProcessStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/process/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let path;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let category;

            if (listProcessStatisticsRequest !== null && listProcessStatisticsRequest !== undefined) {
                if (listProcessStatisticsRequest instanceof ListProcessStatisticsRequest) {
                    path = listProcessStatisticsRequest.path;
                    enterpriseProjectId = listProcessStatisticsRequest.enterpriseProjectId;
                    limit = listProcessStatisticsRequest.limit;
                    offset = listProcessStatisticsRequest.offset;
                    category = listProcessStatisticsRequest.category;
                } else {
                    path = listProcessStatisticsRequest['path'];
                    enterpriseProjectId = listProcessStatisticsRequest['enterprise_project_id'];
                    limit = listProcessStatisticsRequest['limit'];
                    offset = listProcessStatisticsRequest['offset'];
                    category = listProcessStatisticsRequest['category'];
                }
            }

        
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 具备该进程的主机/容器信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProcessesHost(listProcessesHostRequest?: ListProcessesHostRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/processes/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let path;
            
            let category;
            
            let limit;
            
            let offset;

            if (listProcessesHostRequest !== null && listProcessesHostRequest !== undefined) {
                if (listProcessesHostRequest instanceof ListProcessesHostRequest) {
                    enterpriseProjectId = listProcessesHostRequest.enterpriseProjectId;
                    hostName = listProcessesHostRequest.hostName;
                    hostIp = listProcessesHostRequest.hostIp;
                    path = listProcessesHostRequest.path;
                    category = listProcessesHostRequest.category;
                    limit = listProcessesHostRequest.limit;
                    offset = listProcessesHostRequest.offset;
                } else {
                    enterpriseProjectId = listProcessesHostRequest['enterprise_project_id'];
                    hostName = listProcessesHostRequest['host_name'];
                    hostIp = listProcessesHostRequest['host_ip'];
                    path = listProcessesHostRequest['path'];
                    category = listProcessesHostRequest['category'];
                    limit = listProcessesHostRequest['limit'];
                    offset = listProcessesHostRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询勒索病毒的防护策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectionPolicy(listProtectionPolicyRequest?: ListProtectionPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/ransomware/protection/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let policyName;
            
            let protectPolicyId;
            
            let operatingSystem;

            if (listProtectionPolicyRequest !== null && listProtectionPolicyRequest !== undefined) {
                if (listProtectionPolicyRequest instanceof ListProtectionPolicyRequest) {
                    region = listProtectionPolicyRequest.region;
                    enterpriseProjectId = listProtectionPolicyRequest.enterpriseProjectId;
                    offset = listProtectionPolicyRequest.offset;
                    limit = listProtectionPolicyRequest.limit;
                    policyName = listProtectionPolicyRequest.policyName;
                    protectPolicyId = listProtectionPolicyRequest.protectPolicyId;
                    operatingSystem = listProtectionPolicyRequest.operatingSystem;
                } else {
                    region = listProtectionPolicyRequest['region'];
                    enterpriseProjectId = listProtectionPolicyRequest['enterprise_project_id'];
                    offset = listProtectionPolicyRequest['offset'];
                    limit = listProtectionPolicyRequest['limit'];
                    policyName = listProtectionPolicyRequest['policy_name'];
                    protectPolicyId = listProtectionPolicyRequest['protect_policy_id'];
                    operatingSystem = listProtectionPolicyRequest['operating_system'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (policyName !== null && policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }
            if (protectPolicyId !== null && protectPolicyId !== undefined) {
                localVarQueryParameter['protect_policy_id'] = protectPolicyId;
            }
            if (operatingSystem !== null && operatingSystem !== undefined) {
                localVarQueryParameter['operating_system'] = operatingSystem;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询勒索防护服务器列表，与云备份服务配合使用。因此使用勒索相关接口之前确保该局点有云备份服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectionServer(listProtectionServerRequest?: ListProtectionServerRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/ransomware/server",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let hostName;
            
            let osType;
            
            let hostIp;
            
            let hostStatus;
            
            let lastDays;

            if (listProtectionServerRequest !== null && listProtectionServerRequest !== undefined) {
                if (listProtectionServerRequest instanceof ListProtectionServerRequest) {
                    region = listProtectionServerRequest.region;
                    enterpriseProjectId = listProtectionServerRequest.enterpriseProjectId;
                    offset = listProtectionServerRequest.offset;
                    limit = listProtectionServerRequest.limit;
                    hostName = listProtectionServerRequest.hostName;
                    osType = listProtectionServerRequest.osType;
                    hostIp = listProtectionServerRequest.hostIp;
                    hostStatus = listProtectionServerRequest.hostStatus;
                    lastDays = listProtectionServerRequest.lastDays;
                } else {
                    region = listProtectionServerRequest['region'];
                    enterpriseProjectId = listProtectionServerRequest['enterprise_project_id'];
                    offset = listProtectionServerRequest['offset'];
                    limit = listProtectionServerRequest['limit'];
                    hostName = listProtectionServerRequest['host_name'];
                    osType = listProtectionServerRequest['os_type'];
                    hostIp = listProtectionServerRequest['host_ip'];
                    hostStatus = listProtectionServerRequest['host_status'];
                    lastDays = listProtectionServerRequest['last_days'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (hostStatus !== null && hostStatus !== undefined) {
                localVarQueryParameter['host_status'] = hostStatus;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护服务器列表：查询防护服务器相关数据，包含服务器名称、ip地址、操作系统、服务器组名称、防护策略、防护状态、微服务防护状态、RASP防护状态、RASP攻击数量信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectionServers(listProtectionServersRequest?: ListProtectionServersRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/rasp/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let appStatus;
            
            let hostName;
            
            let osType;
            
            let hostIp;
            
            let appType;

            if (listProtectionServersRequest !== null && listProtectionServersRequest !== undefined) {
                if (listProtectionServersRequest instanceof ListProtectionServersRequest) {
                    enterpriseProjectId = listProtectionServersRequest.enterpriseProjectId;
                    offset = listProtectionServersRequest.offset;
                    limit = listProtectionServersRequest.limit;
                    appStatus = listProtectionServersRequest.appStatus;
                    hostName = listProtectionServersRequest.hostName;
                    osType = listProtectionServersRequest.osType;
                    hostIp = listProtectionServersRequest.hostIp;
                    appType = listProtectionServersRequest.appType;
                } else {
                    enterpriseProjectId = listProtectionServersRequest['enterprise_project_id'];
                    offset = listProtectionServersRequest['offset'];
                    limit = listProtectionServersRequest['limit'];
                    appStatus = listProtectionServersRequest['app_status'];
                    hostName = listProtectionServersRequest['host_name'];
                    osType = listProtectionServersRequest['os_type'];
                    hostIp = listProtectionServersRequest['host_ip'];
                    appType = listProtectionServersRequest['app_type'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listProtectionServers.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listProtectionServers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listProtectionServers.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (appStatus === null || appStatus === undefined) {
                throw new RequiredError('appStatus','Required parameter appStatus was null or undefined when calling listProtectionServers.');
            }
            if (appStatus !== null && appStatus !== undefined) {
                localVarQueryParameter['app_status'] = appStatus;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询导出任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueryExportTask(listQueryExportTaskRequest?: ListQueryExportTaskRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/export-task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let region;
            
            let enterpriseProjectId;

            if (listQueryExportTaskRequest !== null && listQueryExportTaskRequest !== undefined) {
                if (listQueryExportTaskRequest instanceof ListQueryExportTaskRequest) {
                    taskId = listQueryExportTaskRequest.taskId;
                    region = listQueryExportTaskRequest.region;
                    enterpriseProjectId = listQueryExportTaskRequest.enterpriseProjectId;
                } else {
                    taskId = listQueryExportTaskRequest['task_id'];
                    region = listQueryExportTaskRequest['region'];
                    enterpriseProjectId = listQueryExportTaskRequest['enterprise_project_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listQueryExportTask.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配额详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotasDetail(listQuotasDetailRequest?: ListQuotasDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/billing/quotas-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let version;
            
            let category;
            
            let quotaStatus;
            
            let usedStatus;
            
            let hostName;
            
            let resourceId;
            
            let chargingMode;
            
            let limit;
            
            let offset;

            if (listQuotasDetailRequest !== null && listQuotasDetailRequest !== undefined) {
                if (listQuotasDetailRequest instanceof ListQuotasDetailRequest) {
                    region = listQuotasDetailRequest.region;
                    enterpriseProjectId = listQuotasDetailRequest.enterpriseProjectId;
                    version = listQuotasDetailRequest.version;
                    category = listQuotasDetailRequest.category;
                    quotaStatus = listQuotasDetailRequest.quotaStatus;
                    usedStatus = listQuotasDetailRequest.usedStatus;
                    hostName = listQuotasDetailRequest.hostName;
                    resourceId = listQuotasDetailRequest.resourceId;
                    chargingMode = listQuotasDetailRequest.chargingMode;
                    limit = listQuotasDetailRequest.limit;
                    offset = listQuotasDetailRequest.offset;
                } else {
                    region = listQuotasDetailRequest['region'];
                    enterpriseProjectId = listQuotasDetailRequest['enterprise_project_id'];
                    version = listQuotasDetailRequest['version'];
                    category = listQuotasDetailRequest['category'];
                    quotaStatus = listQuotasDetailRequest['quota_status'];
                    usedStatus = listQuotasDetailRequest['used_status'];
                    hostName = listQuotasDetailRequest['host_name'];
                    resourceId = listQuotasDetailRequest['resource_id'];
                    chargingMode = listQuotasDetailRequest['charging_mode'];
                    limit = listQuotasDetailRequest['limit'];
                    offset = listQuotasDetailRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (quotaStatus !== null && quotaStatus !== undefined) {
                localVarQueryParameter['quota_status'] = quotaStatus;
            }
            if (usedStatus !== null && usedStatus !== undefined) {
                localVarQueryParameter['used_status'] = usedStatus;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询勒索防护服务器列表，与云备份服务配合使用。因此使用勒索相关接口之前确保该局点有云备份服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRansomwareProtectionNodes(listRansomwareProtectionNodesRequest?: ListRansomwareProtectionNodesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/ransomware/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostId;
            
            let osType;
            
            let hostIp;
            
            let privateIp;
            
            let hostStatus;
            
            let ransomProtectionStatus;
            
            let protectPolicyName;
            
            let policyName;
            
            let policyId;
            
            let agentStatus;
            
            let groupId;
            
            let groupName;
            
            let lastDays;

            if (listRansomwareProtectionNodesRequest !== null && listRansomwareProtectionNodesRequest !== undefined) {
                if (listRansomwareProtectionNodesRequest instanceof ListRansomwareProtectionNodesRequest) {
                    offset = listRansomwareProtectionNodesRequest.offset;
                    limit = listRansomwareProtectionNodesRequest.limit;
                    enterpriseProjectId = listRansomwareProtectionNodesRequest.enterpriseProjectId;
                    hostName = listRansomwareProtectionNodesRequest.hostName;
                    hostId = listRansomwareProtectionNodesRequest.hostId;
                    osType = listRansomwareProtectionNodesRequest.osType;
                    hostIp = listRansomwareProtectionNodesRequest.hostIp;
                    privateIp = listRansomwareProtectionNodesRequest.privateIp;
                    hostStatus = listRansomwareProtectionNodesRequest.hostStatus;
                    ransomProtectionStatus = listRansomwareProtectionNodesRequest.ransomProtectionStatus;
                    protectPolicyName = listRansomwareProtectionNodesRequest.protectPolicyName;
                    policyName = listRansomwareProtectionNodesRequest.policyName;
                    policyId = listRansomwareProtectionNodesRequest.policyId;
                    agentStatus = listRansomwareProtectionNodesRequest.agentStatus;
                    groupId = listRansomwareProtectionNodesRequest.groupId;
                    groupName = listRansomwareProtectionNodesRequest.groupName;
                    lastDays = listRansomwareProtectionNodesRequest.lastDays;
                } else {
                    offset = listRansomwareProtectionNodesRequest['offset'];
                    limit = listRansomwareProtectionNodesRequest['limit'];
                    enterpriseProjectId = listRansomwareProtectionNodesRequest['enterprise_project_id'];
                    hostName = listRansomwareProtectionNodesRequest['host_name'];
                    hostId = listRansomwareProtectionNodesRequest['host_id'];
                    osType = listRansomwareProtectionNodesRequest['os_type'];
                    hostIp = listRansomwareProtectionNodesRequest['host_ip'];
                    privateIp = listRansomwareProtectionNodesRequest['private_ip'];
                    hostStatus = listRansomwareProtectionNodesRequest['host_status'];
                    ransomProtectionStatus = listRansomwareProtectionNodesRequest['ransom_protection_status'];
                    protectPolicyName = listRansomwareProtectionNodesRequest['protect_policy_name'];
                    policyName = listRansomwareProtectionNodesRequest['policy_name'];
                    policyId = listRansomwareProtectionNodesRequest['policy_id'];
                    agentStatus = listRansomwareProtectionNodesRequest['agent_status'];
                    groupId = listRansomwareProtectionNodesRequest['group_id'];
                    groupName = listRansomwareProtectionNodesRequest['group_name'];
                    lastDays = listRansomwareProtectionNodesRequest['last_days'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listRansomwareProtectionNodes.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listRansomwareProtectionNodes.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (hostStatus !== null && hostStatus !== undefined) {
                localVarQueryParameter['host_status'] = hostStatus;
            }
            if (ransomProtectionStatus !== null && ransomProtectionStatus !== undefined) {
                localVarQueryParameter['ransom_protection_status'] = ransomProtectionStatus;
            }
            if (protectPolicyName !== null && protectPolicyName !== undefined) {
                localVarQueryParameter['protect_policy_name'] = protectPolicyName;
            }
            if (policyName !== null && policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }
            if (policyId !== null && policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
            }
            if (agentStatus !== null && agentStatus !== undefined) {
                localVarQueryParameter['agent_status'] = agentStatus;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用防护事件列表：展示防护事件相关信息，包含告警级别、服务器名称、告警名称、告警时间、攻击源ip、攻击源url数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRaspEvents(listRaspEventsRequest?: ListRaspEventsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/rasp/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let appType;
            
            let severity;
            
            let attackTag;
            
            let protectStatus;

            if (listRaspEventsRequest !== null && listRaspEventsRequest !== undefined) {
                if (listRaspEventsRequest instanceof ListRaspEventsRequest) {
                    enterpriseProjectId = listRaspEventsRequest.enterpriseProjectId;
                    hostId = listRaspEventsRequest.hostId;
                    startTime = listRaspEventsRequest.startTime;
                    endTime = listRaspEventsRequest.endTime;
                    limit = listRaspEventsRequest.limit;
                    offset = listRaspEventsRequest.offset;
                    appType = listRaspEventsRequest.appType;
                    severity = listRaspEventsRequest.severity;
                    attackTag = listRaspEventsRequest.attackTag;
                    protectStatus = listRaspEventsRequest.protectStatus;
                } else {
                    enterpriseProjectId = listRaspEventsRequest['enterprise_project_id'];
                    hostId = listRaspEventsRequest['host_id'];
                    startTime = listRaspEventsRequest['start_time'];
                    endTime = listRaspEventsRequest['end_time'];
                    limit = listRaspEventsRequest['limit'];
                    offset = listRaspEventsRequest['offset'];
                    appType = listRaspEventsRequest['app_type'];
                    severity = listRaspEventsRequest['severity'];
                    attackTag = listRaspEventsRequest['attack_tag'];
                    protectStatus = listRaspEventsRequest['protect_status'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listRaspEvents.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId === null || hostId === undefined) {
                throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling listRaspEvents.');
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listRaspEvents.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listRaspEvents.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listRaspEvents.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listRaspEvents.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (attackTag !== null && attackTag !== undefined) {
                localVarQueryParameter['attack_tag'] = attackTag;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护策略列表：查询创建的防护策略信息，包含防护策略名称、检测规则、关联服务器数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRaspPolicies(listRaspPoliciesRequest?: ListRaspPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/rasp/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let osType;
            
            let limit;
            
            let offset;
            
            let policyName;

            if (listRaspPoliciesRequest !== null && listRaspPoliciesRequest !== undefined) {
                if (listRaspPoliciesRequest instanceof ListRaspPoliciesRequest) {
                    region = listRaspPoliciesRequest.region;
                    enterpriseProjectId = listRaspPoliciesRequest.enterpriseProjectId;
                    osType = listRaspPoliciesRequest.osType;
                    limit = listRaspPoliciesRequest.limit;
                    offset = listRaspPoliciesRequest.offset;
                    policyName = listRaspPoliciesRequest.policyName;
                } else {
                    region = listRaspPoliciesRequest['region'];
                    enterpriseProjectId = listRaspPoliciesRequest['enterprise_project_id'];
                    osType = listRaspPoliciesRequest['os_type'];
                    limit = listRaspPoliciesRequest['limit'];
                    offset = listRaspPoliciesRequest['offset'];
                    policyName = listRaspPoliciesRequest['policy_name'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (policyName !== null && policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定安全配置项的检查项列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRiskConfigCheckRules(listRiskConfigCheckRulesRequest?: ListRiskConfigCheckRulesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/risk-config/{check_name}/check-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checkName;
            
            let standard;
            
            let enterpriseProjectId;
            
            let resultType;
            
            let checkRuleName;
            
            let severity;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (listRiskConfigCheckRulesRequest !== null && listRiskConfigCheckRulesRequest !== undefined) {
                if (listRiskConfigCheckRulesRequest instanceof ListRiskConfigCheckRulesRequest) {
                    checkName = listRiskConfigCheckRulesRequest.checkName;
                    standard = listRiskConfigCheckRulesRequest.standard;
                    enterpriseProjectId = listRiskConfigCheckRulesRequest.enterpriseProjectId;
                    resultType = listRiskConfigCheckRulesRequest.resultType;
                    checkRuleName = listRiskConfigCheckRulesRequest.checkRuleName;
                    severity = listRiskConfigCheckRulesRequest.severity;
                    hostId = listRiskConfigCheckRulesRequest.hostId;
                    limit = listRiskConfigCheckRulesRequest.limit;
                    offset = listRiskConfigCheckRulesRequest.offset;
                } else {
                    checkName = listRiskConfigCheckRulesRequest['check_name'];
                    standard = listRiskConfigCheckRulesRequest['standard'];
                    enterpriseProjectId = listRiskConfigCheckRulesRequest['enterprise_project_id'];
                    resultType = listRiskConfigCheckRulesRequest['result_type'];
                    checkRuleName = listRiskConfigCheckRulesRequest['check_rule_name'];
                    severity = listRiskConfigCheckRulesRequest['severity'];
                    hostId = listRiskConfigCheckRulesRequest['host_id'];
                    limit = listRiskConfigCheckRulesRequest['limit'];
                    offset = listRiskConfigCheckRulesRequest['offset'];
                }
            }

        
            if (checkName === null || checkName === undefined) {
            throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling listRiskConfigCheckRules.');
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling listRiskConfigCheckRules.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (resultType !== null && resultType !== undefined) {
                localVarQueryParameter['result_type'] = resultType;
            }
            if (checkRuleName !== null && checkRuleName !== undefined) {
                localVarQueryParameter['check_rule_name'] = checkRuleName;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'check_name': checkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定安全配置项的受影响服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRiskConfigHosts(listRiskConfigHostsRequest?: ListRiskConfigHostsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/risk-config/{check_name}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checkName;
            
            let standard;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let limit;
            
            let offset;

            if (listRiskConfigHostsRequest !== null && listRiskConfigHostsRequest !== undefined) {
                if (listRiskConfigHostsRequest instanceof ListRiskConfigHostsRequest) {
                    checkName = listRiskConfigHostsRequest.checkName;
                    standard = listRiskConfigHostsRequest.standard;
                    enterpriseProjectId = listRiskConfigHostsRequest.enterpriseProjectId;
                    hostName = listRiskConfigHostsRequest.hostName;
                    hostIp = listRiskConfigHostsRequest.hostIp;
                    limit = listRiskConfigHostsRequest.limit;
                    offset = listRiskConfigHostsRequest.offset;
                } else {
                    checkName = listRiskConfigHostsRequest['check_name'];
                    standard = listRiskConfigHostsRequest['standard'];
                    enterpriseProjectId = listRiskConfigHostsRequest['enterprise_project_id'];
                    hostName = listRiskConfigHostsRequest['host_name'];
                    hostIp = listRiskConfigHostsRequest['host_ip'];
                    limit = listRiskConfigHostsRequest['limit'];
                    offset = listRiskConfigHostsRequest['offset'];
                }
            }

        
            if (checkName === null || checkName === undefined) {
            throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling listRiskConfigHosts.');
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling listRiskConfigHosts.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'check_name': checkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的服务器安全配置检测结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRiskConfigs(listRiskConfigsRequest?: ListRiskConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/risk-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let checkName;
            
            let groupId;
            
            let severity;
            
            let standard;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (listRiskConfigsRequest !== null && listRiskConfigsRequest !== undefined) {
                if (listRiskConfigsRequest instanceof ListRiskConfigsRequest) {
                    enterpriseProjectId = listRiskConfigsRequest.enterpriseProjectId;
                    checkName = listRiskConfigsRequest.checkName;
                    groupId = listRiskConfigsRequest.groupId;
                    severity = listRiskConfigsRequest.severity;
                    standard = listRiskConfigsRequest.standard;
                    hostId = listRiskConfigsRequest.hostId;
                    limit = listRiskConfigsRequest.limit;
                    offset = listRiskConfigsRequest.offset;
                } else {
                    enterpriseProjectId = listRiskConfigsRequest['enterprise_project_id'];
                    checkName = listRiskConfigsRequest['check_name'];
                    groupId = listRiskConfigsRequest['group_id'];
                    severity = listRiskConfigsRequest['severity'];
                    standard = listRiskConfigsRequest['standard'];
                    hostId = listRiskConfigsRequest['host_id'];
                    limit = listRiskConfigsRequest['limit'];
                    offset = listRiskConfigsRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (checkName !== null && checkName !== undefined) {
                localVarQueryParameter['check_name'] = checkName;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查入侵事件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityEvents(listSecurityEventsRequest?: ListSecurityEventsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let category;
            
            let region;
            
            let enterpriseProjectId;
            
            let lastDays;
            
            let hostName;
            
            let hostId;
            
            let privateIp;
            
            let publicIp;
            
            let containerName;
            
            let offset;
            
            let limit;
            
            let eventTypes;
            
            let handleStatus;
            
            let severity;
            
            let beginTime;
            
            let endTime;
            
            let eventClassIds;
            
            let severityList;
            
            let attackTag;
            
            let assetValue;
            
            let tagList;
            
            let attCk;
            
            let eventName;
            
            let autoBlock;

            if (listSecurityEventsRequest !== null && listSecurityEventsRequest !== undefined) {
                if (listSecurityEventsRequest instanceof ListSecurityEventsRequest) {
                    category = listSecurityEventsRequest.category;
                    region = listSecurityEventsRequest.region;
                    enterpriseProjectId = listSecurityEventsRequest.enterpriseProjectId;
                    lastDays = listSecurityEventsRequest.lastDays;
                    hostName = listSecurityEventsRequest.hostName;
                    hostId = listSecurityEventsRequest.hostId;
                    privateIp = listSecurityEventsRequest.privateIp;
                    publicIp = listSecurityEventsRequest.publicIp;
                    containerName = listSecurityEventsRequest.containerName;
                    offset = listSecurityEventsRequest.offset;
                    limit = listSecurityEventsRequest.limit;
                    eventTypes = listSecurityEventsRequest.eventTypes;
                    handleStatus = listSecurityEventsRequest.handleStatus;
                    severity = listSecurityEventsRequest.severity;
                    beginTime = listSecurityEventsRequest.beginTime;
                    endTime = listSecurityEventsRequest.endTime;
                    eventClassIds = listSecurityEventsRequest.eventClassIds;
                    severityList = listSecurityEventsRequest.severityList;
                    attackTag = listSecurityEventsRequest.attackTag;
                    assetValue = listSecurityEventsRequest.assetValue;
                    tagList = listSecurityEventsRequest.tagList;
                    attCk = listSecurityEventsRequest.attCk;
                    eventName = listSecurityEventsRequest.eventName;
                    autoBlock = listSecurityEventsRequest.autoBlock;
                } else {
                    category = listSecurityEventsRequest['category'];
                    region = listSecurityEventsRequest['region'];
                    enterpriseProjectId = listSecurityEventsRequest['enterprise_project_id'];
                    lastDays = listSecurityEventsRequest['last_days'];
                    hostName = listSecurityEventsRequest['host_name'];
                    hostId = listSecurityEventsRequest['host_id'];
                    privateIp = listSecurityEventsRequest['private_ip'];
                    publicIp = listSecurityEventsRequest['public_ip'];
                    containerName = listSecurityEventsRequest['container_name'];
                    offset = listSecurityEventsRequest['offset'];
                    limit = listSecurityEventsRequest['limit'];
                    eventTypes = listSecurityEventsRequest['event_types'];
                    handleStatus = listSecurityEventsRequest['handle_status'];
                    severity = listSecurityEventsRequest['severity'];
                    beginTime = listSecurityEventsRequest['begin_time'];
                    endTime = listSecurityEventsRequest['end_time'];
                    eventClassIds = listSecurityEventsRequest['event_class_ids'];
                    severityList = listSecurityEventsRequest['severity_list'];
                    attackTag = listSecurityEventsRequest['attack_tag'];
                    assetValue = listSecurityEventsRequest['asset_value'];
                    tagList = listSecurityEventsRequest['tag_list'];
                    attCk = listSecurityEventsRequest['att_ck'];
                    eventName = listSecurityEventsRequest['event_name'];
                    autoBlock = listSecurityEventsRequest['auto_block'];
                }
            }

        
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling listSecurityEvents.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (containerName !== null && containerName !== undefined) {
                localVarQueryParameter['container_name'] = containerName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (eventTypes !== null && eventTypes !== undefined) {
                localVarQueryParameter['event_types'] = eventTypes;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (eventClassIds !== null && eventClassIds !== undefined) {
                localVarQueryParameter['event_class_ids'] = eventClassIds;
            }
            if (severityList !== null && severityList !== undefined) {
                localVarQueryParameter['severity_list'] = severityList;
            }
            if (attackTag !== null && attackTag !== undefined) {
                localVarQueryParameter['attack_tag'] = attackTag;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (tagList !== null && tagList !== undefined) {
                localVarQueryParameter['tag_list'] = tagList;
            }
            if (attCk !== null && attCk !== undefined) {
                localVarQueryParameter['att_ck'] = attCk;
            }
            if (eventName !== null && eventName !== undefined) {
                localVarQueryParameter['event_name'] = eventName;
            }
            if (autoBlock !== null && autoBlock !== undefined) {
                localVarQueryParameter['auto_block'] = autoBlock;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询swr镜像仓库镜像列表,如果需要从swr同步最新镜像，需要先调用“从swr同步镜像”接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSwrImageRepository(listSwrImageRepositoryRequest?: ListSwrImageRepositoryRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/image/swr-repository",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let imageType;
            
            let enterpriseProjectId;
            
            let namespace;
            
            let imageName;
            
            let imageVersion;
            
            let latestVersion;
            
            let offset;
            
            let limit;
            
            let scanStatus;
            
            let instanceName;
            
            let imageSize;
            
            let startLatestUpdateTime;
            
            let endLatestUpdateTime;
            
            let startLatestScanTime;
            
            let endLatestScanTime;
            
            let hasMaliciousFile;
            
            let hasUnsafeSetting;
            
            let hasVul;
            
            let instanceId;

            if (listSwrImageRepositoryRequest !== null && listSwrImageRepositoryRequest !== undefined) {
                if (listSwrImageRepositoryRequest instanceof ListSwrImageRepositoryRequest) {
                    region = listSwrImageRepositoryRequest.region;
                    imageType = listSwrImageRepositoryRequest.imageType;
                    enterpriseProjectId = listSwrImageRepositoryRequest.enterpriseProjectId;
                    namespace = listSwrImageRepositoryRequest.namespace;
                    imageName = listSwrImageRepositoryRequest.imageName;
                    imageVersion = listSwrImageRepositoryRequest.imageVersion;
                    latestVersion = listSwrImageRepositoryRequest.latestVersion;
                    offset = listSwrImageRepositoryRequest.offset;
                    limit = listSwrImageRepositoryRequest.limit;
                    scanStatus = listSwrImageRepositoryRequest.scanStatus;
                    instanceName = listSwrImageRepositoryRequest.instanceName;
                    imageSize = listSwrImageRepositoryRequest.imageSize;
                    startLatestUpdateTime = listSwrImageRepositoryRequest.startLatestUpdateTime;
                    endLatestUpdateTime = listSwrImageRepositoryRequest.endLatestUpdateTime;
                    startLatestScanTime = listSwrImageRepositoryRequest.startLatestScanTime;
                    endLatestScanTime = listSwrImageRepositoryRequest.endLatestScanTime;
                    hasMaliciousFile = listSwrImageRepositoryRequest.hasMaliciousFile;
                    hasUnsafeSetting = listSwrImageRepositoryRequest.hasUnsafeSetting;
                    hasVul = listSwrImageRepositoryRequest.hasVul;
                    instanceId = listSwrImageRepositoryRequest.instanceId;
                } else {
                    region = listSwrImageRepositoryRequest['region'];
                    imageType = listSwrImageRepositoryRequest['image_type'];
                    enterpriseProjectId = listSwrImageRepositoryRequest['enterprise_project_id'];
                    namespace = listSwrImageRepositoryRequest['namespace'];
                    imageName = listSwrImageRepositoryRequest['image_name'];
                    imageVersion = listSwrImageRepositoryRequest['image_version'];
                    latestVersion = listSwrImageRepositoryRequest['latest_version'];
                    offset = listSwrImageRepositoryRequest['offset'];
                    limit = listSwrImageRepositoryRequest['limit'];
                    scanStatus = listSwrImageRepositoryRequest['scan_status'];
                    instanceName = listSwrImageRepositoryRequest['instance_name'];
                    imageSize = listSwrImageRepositoryRequest['image_size'];
                    startLatestUpdateTime = listSwrImageRepositoryRequest['start_latest_update_time'];
                    endLatestUpdateTime = listSwrImageRepositoryRequest['end_latest_update_time'];
                    startLatestScanTime = listSwrImageRepositoryRequest['start_latest_scan_time'];
                    endLatestScanTime = listSwrImageRepositoryRequest['end_latest_scan_time'];
                    hasMaliciousFile = listSwrImageRepositoryRequest['has_malicious_file'];
                    hasUnsafeSetting = listSwrImageRepositoryRequest['has_unsafe_setting'];
                    hasVul = listSwrImageRepositoryRequest['has_vul'];
                    instanceId = listSwrImageRepositoryRequest['instance_id'];
                }
            }

        
            if (imageType === null || imageType === undefined) {
                throw new RequiredError('imageType','Required parameter imageType was null or undefined when calling listSwrImageRepository.');
            }
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (imageVersion !== null && imageVersion !== undefined) {
                localVarQueryParameter['image_version'] = imageVersion;
            }
            if (latestVersion !== null && latestVersion !== undefined) {
                localVarQueryParameter['latest_version'] = latestVersion;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (scanStatus !== null && scanStatus !== undefined) {
                localVarQueryParameter['scan_status'] = scanStatus;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }
            if (imageSize !== null && imageSize !== undefined) {
                localVarQueryParameter['image_size'] = imageSize;
            }
            if (startLatestUpdateTime !== null && startLatestUpdateTime !== undefined) {
                localVarQueryParameter['start_latest_update_time'] = startLatestUpdateTime;
            }
            if (endLatestUpdateTime !== null && endLatestUpdateTime !== undefined) {
                localVarQueryParameter['end_latest_update_time'] = endLatestUpdateTime;
            }
            if (startLatestScanTime !== null && startLatestScanTime !== undefined) {
                localVarQueryParameter['start_latest_scan_time'] = startLatestScanTime;
            }
            if (endLatestScanTime !== null && endLatestScanTime !== undefined) {
                localVarQueryParameter['end_latest_scan_time'] = endLatestScanTime;
            }
            if (hasMaliciousFile !== null && hasMaliciousFile !== undefined) {
                localVarQueryParameter['has_malicious_file'] = hasMaliciousFile;
            }
            if (hasUnsafeSetting !== null && hasUnsafeSetting !== undefined) {
                localVarQueryParameter['has_unsafe_setting'] = hasUnsafeSetting;
            }
            if (hasVul !== null && hasVul !== undefined) {
                localVarQueryParameter['has_vul'] = hasVul;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询系统用户白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSystemUserWhiteList(listSystemUserWhiteListRequest?: ListSystemUserWhiteListRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/white-list/userlist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let hostName;
            
            let privateIp;
            
            let publicIp;
            
            let systemUserName;

            if (listSystemUserWhiteListRequest !== null && listSystemUserWhiteListRequest !== undefined) {
                if (listSystemUserWhiteListRequest instanceof ListSystemUserWhiteListRequest) {
                    offset = listSystemUserWhiteListRequest.offset;
                    limit = listSystemUserWhiteListRequest.limit;
                    enterpriseProjectId = listSystemUserWhiteListRequest.enterpriseProjectId;
                    hostId = listSystemUserWhiteListRequest.hostId;
                    hostName = listSystemUserWhiteListRequest.hostName;
                    privateIp = listSystemUserWhiteListRequest.privateIp;
                    publicIp = listSystemUserWhiteListRequest.publicIp;
                    systemUserName = listSystemUserWhiteListRequest.systemUserName;
                } else {
                    offset = listSystemUserWhiteListRequest['offset'];
                    limit = listSystemUserWhiteListRequest['limit'];
                    enterpriseProjectId = listSystemUserWhiteListRequest['enterprise_project_id'];
                    hostId = listSystemUserWhiteListRequest['host_id'];
                    hostName = listSystemUserWhiteListRequest['host_name'];
                    privateIp = listSystemUserWhiteListRequest['private_ip'];
                    publicIp = listSystemUserWhiteListRequest['public_ip'];
                    systemUserName = listSystemUserWhiteListRequest['system_user_name'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listSystemUserWhiteList.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listSystemUserWhiteList.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (systemUserName !== null && systemUserName !== undefined) {
                localVarQueryParameter['system_user_name'] = systemUserName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询双因子主机列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTwoFactorLoginHost(listTwoFactorLoginHostRequest?: ListTwoFactorLoginHostRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/setting/two-factor-login/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let displayName;

            if (listTwoFactorLoginHostRequest !== null && listTwoFactorLoginHostRequest !== undefined) {
                if (listTwoFactorLoginHostRequest instanceof ListTwoFactorLoginHostRequest) {
                    limit = listTwoFactorLoginHostRequest.limit;
                    offset = listTwoFactorLoginHostRequest.offset;
                    enterpriseProjectId = listTwoFactorLoginHostRequest.enterpriseProjectId;
                    hostName = listTwoFactorLoginHostRequest.hostName;
                    displayName = listTwoFactorLoginHostRequest.displayName;
                } else {
                    limit = listTwoFactorLoginHostRequest['limit'];
                    offset = listTwoFactorLoginHostRequest['offset'];
                    enterpriseProjectId = listTwoFactorLoginHostRequest['enterprise_project_id'];
                    hostName = listTwoFactorLoginHostRequest['host_name'];
                    displayName = listTwoFactorLoginHostRequest['display_name'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listTwoFactorLoginHost.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listTwoFactorLoginHost.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (displayName !== null && displayName !== undefined) {
                localVarQueryParameter['display_name'] = displayName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取账户变动历史记录信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserChangeHistories(listUserChangeHistoriesRequest?: ListUserChangeHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/user/change-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;
            
            let hostId;
            
            let rootPermission;
            
            let hostName;
            
            let privateIp;
            
            let changeType;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let startTime;
            
            let endTime;

            if (listUserChangeHistoriesRequest !== null && listUserChangeHistoriesRequest !== undefined) {
                if (listUserChangeHistoriesRequest instanceof ListUserChangeHistoriesRequest) {
                    userName = listUserChangeHistoriesRequest.userName;
                    hostId = listUserChangeHistoriesRequest.hostId;
                    rootPermission = listUserChangeHistoriesRequest.rootPermission;
                    hostName = listUserChangeHistoriesRequest.hostName;
                    privateIp = listUserChangeHistoriesRequest.privateIp;
                    changeType = listUserChangeHistoriesRequest.changeType;
                    limit = listUserChangeHistoriesRequest.limit;
                    offset = listUserChangeHistoriesRequest.offset;
                    enterpriseProjectId = listUserChangeHistoriesRequest.enterpriseProjectId;
                    startTime = listUserChangeHistoriesRequest.startTime;
                    endTime = listUserChangeHistoriesRequest.endTime;
                } else {
                    userName = listUserChangeHistoriesRequest['user_name'];
                    hostId = listUserChangeHistoriesRequest['host_id'];
                    rootPermission = listUserChangeHistoriesRequest['root_permission'];
                    hostName = listUserChangeHistoriesRequest['host_name'];
                    privateIp = listUserChangeHistoriesRequest['private_ip'];
                    changeType = listUserChangeHistoriesRequest['change_type'];
                    limit = listUserChangeHistoriesRequest['limit'];
                    offset = listUserChangeHistoriesRequest['offset'];
                    enterpriseProjectId = listUserChangeHistoriesRequest['enterprise_project_id'];
                    startTime = listUserChangeHistoriesRequest['start_time'];
                    endTime = listUserChangeHistoriesRequest['end_time'];
                }
            }

        
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (rootPermission !== null && rootPermission !== undefined) {
                localVarQueryParameter['root_permission'] = rootPermission;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (changeType !== null && changeType !== undefined) {
                localVarQueryParameter['change_type'] = changeType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账号信息列表，支持通过传入账号名称参数查询对应的服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserStatistics(listUserStatisticsRequest?: ListUserStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/user/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let category;

            if (listUserStatisticsRequest !== null && listUserStatisticsRequest !== undefined) {
                if (listUserStatisticsRequest instanceof ListUserStatisticsRequest) {
                    userName = listUserStatisticsRequest.userName;
                    enterpriseProjectId = listUserStatisticsRequest.enterpriseProjectId;
                    limit = listUserStatisticsRequest.limit;
                    offset = listUserStatisticsRequest.offset;
                    category = listUserStatisticsRequest.category;
                } else {
                    userName = listUserStatisticsRequest['user_name'];
                    enterpriseProjectId = listUserStatisticsRequest['enterprise_project_id'];
                    limit = listUserStatisticsRequest['limit'];
                    offset = listUserStatisticsRequest['offset'];
                    category = listUserStatisticsRequest['category'];
                }
            }

        
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账号的服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsers(listUsersRequest?: ListUsersRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let userName;
            
            let hostName;
            
            let privateIp;
            
            let loginPermission;
            
            let rootPermission;
            
            let userGroup;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let category;
            
            let partMatch;

            if (listUsersRequest !== null && listUsersRequest !== undefined) {
                if (listUsersRequest instanceof ListUsersRequest) {
                    hostId = listUsersRequest.hostId;
                    userName = listUsersRequest.userName;
                    hostName = listUsersRequest.hostName;
                    privateIp = listUsersRequest.privateIp;
                    loginPermission = listUsersRequest.loginPermission;
                    rootPermission = listUsersRequest.rootPermission;
                    userGroup = listUsersRequest.userGroup;
                    enterpriseProjectId = listUsersRequest.enterpriseProjectId;
                    limit = listUsersRequest.limit;
                    offset = listUsersRequest.offset;
                    category = listUsersRequest.category;
                    partMatch = listUsersRequest.partMatch;
                } else {
                    hostId = listUsersRequest['host_id'];
                    userName = listUsersRequest['user_name'];
                    hostName = listUsersRequest['host_name'];
                    privateIp = listUsersRequest['private_ip'];
                    loginPermission = listUsersRequest['login_permission'];
                    rootPermission = listUsersRequest['root_permission'];
                    userGroup = listUsersRequest['user_group'];
                    enterpriseProjectId = listUsersRequest['enterprise_project_id'];
                    limit = listUsersRequest['limit'];
                    offset = listUsersRequest['offset'];
                    category = listUsersRequest['category'];
                    partMatch = listUsersRequest['part_match'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (loginPermission !== null && loginPermission !== undefined) {
                localVarQueryParameter['login_permission'] = loginPermission;
            }
            if (rootPermission !== null && rootPermission !== undefined) {
                localVarQueryParameter['root_permission'] = rootPermission;
            }
            if (userGroup !== null && userGroup !== undefined) {
                localVarQueryParameter['user_group'] = userGroup;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (partMatch !== null && partMatch !== undefined) {
                localVarQueryParameter['part_match'] = partMatch;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询漏洞历史处置记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVulHandleHistory(listVulHandleHistoryRequest?: ListVulHandleHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/handle-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let status;
            
            let vulId;
            
            let vulType;
            
            let assetValue;
            
            let groupName;
            
            let hostName;
            
            let hostIp;
            
            let clusterId;
            
            let sortKey;
            
            let sortDir;
            
            let publicIp;
            
            let privateIp;

            if (listVulHandleHistoryRequest !== null && listVulHandleHistoryRequest !== undefined) {
                if (listVulHandleHistoryRequest instanceof ListVulHandleHistoryRequest) {
                    enterpriseProjectId = listVulHandleHistoryRequest.enterpriseProjectId;
                    limit = listVulHandleHistoryRequest.limit;
                    offset = listVulHandleHistoryRequest.offset;
                    status = listVulHandleHistoryRequest.status;
                    vulId = listVulHandleHistoryRequest.vulId;
                    vulType = listVulHandleHistoryRequest.vulType;
                    assetValue = listVulHandleHistoryRequest.assetValue;
                    groupName = listVulHandleHistoryRequest.groupName;
                    hostName = listVulHandleHistoryRequest.hostName;
                    hostIp = listVulHandleHistoryRequest.hostIp;
                    clusterId = listVulHandleHistoryRequest.clusterId;
                    sortKey = listVulHandleHistoryRequest.sortKey;
                    sortDir = listVulHandleHistoryRequest.sortDir;
                    publicIp = listVulHandleHistoryRequest.publicIp;
                    privateIp = listVulHandleHistoryRequest.privateIp;
                } else {
                    enterpriseProjectId = listVulHandleHistoryRequest['enterprise_project_id'];
                    limit = listVulHandleHistoryRequest['limit'];
                    offset = listVulHandleHistoryRequest['offset'];
                    status = listVulHandleHistoryRequest['status'];
                    vulId = listVulHandleHistoryRequest['vul_id'];
                    vulType = listVulHandleHistoryRequest['vul_type'];
                    assetValue = listVulHandleHistoryRequest['asset_value'];
                    groupName = listVulHandleHistoryRequest['group_name'];
                    hostName = listVulHandleHistoryRequest['host_name'];
                    hostIp = listVulHandleHistoryRequest['host_ip'];
                    clusterId = listVulHandleHistoryRequest['cluster_id'];
                    sortKey = listVulHandleHistoryRequest['sort_key'];
                    sortDir = listVulHandleHistoryRequest['sort_dir'];
                    publicIp = listVulHandleHistoryRequest['public_ip'];
                    privateIp = listVulHandleHistoryRequest['private_ip'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listVulHandleHistory.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listVulHandleHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listVulHandleHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (vulId !== null && vulId !== undefined) {
                localVarQueryParameter['vul_id'] = vulId;
            }
            if (vulType !== null && vulType !== undefined) {
                localVarQueryParameter['vul_type'] = vulType;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个漏洞影响的云服务器信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVulHosts(listVulHostsRequest?: ListVulHostsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vulId;
            
            let type;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let status;
            
            let limit;
            
            let offset;
            
            let assetValue;
            
            let groupName;
            
            let handleStatus;
            
            let severityLevel;
            
            let isAffectBusiness;
            
            let repairPriority;

            if (listVulHostsRequest !== null && listVulHostsRequest !== undefined) {
                if (listVulHostsRequest instanceof ListVulHostsRequest) {
                    vulId = listVulHostsRequest.vulId;
                    type = listVulHostsRequest.type;
                    enterpriseProjectId = listVulHostsRequest.enterpriseProjectId;
                    hostName = listVulHostsRequest.hostName;
                    hostIp = listVulHostsRequest.hostIp;
                    status = listVulHostsRequest.status;
                    limit = listVulHostsRequest.limit;
                    offset = listVulHostsRequest.offset;
                    assetValue = listVulHostsRequest.assetValue;
                    groupName = listVulHostsRequest.groupName;
                    handleStatus = listVulHostsRequest.handleStatus;
                    severityLevel = listVulHostsRequest.severityLevel;
                    isAffectBusiness = listVulHostsRequest.isAffectBusiness;
                    repairPriority = listVulHostsRequest.repairPriority;
                } else {
                    vulId = listVulHostsRequest['vul_id'];
                    type = listVulHostsRequest['type'];
                    enterpriseProjectId = listVulHostsRequest['enterprise_project_id'];
                    hostName = listVulHostsRequest['host_name'];
                    hostIp = listVulHostsRequest['host_ip'];
                    status = listVulHostsRequest['status'];
                    limit = listVulHostsRequest['limit'];
                    offset = listVulHostsRequest['offset'];
                    assetValue = listVulHostsRequest['asset_value'];
                    groupName = listVulHostsRequest['group_name'];
                    handleStatus = listVulHostsRequest['handle_status'];
                    severityLevel = listVulHostsRequest['severity_level'];
                    isAffectBusiness = listVulHostsRequest['is_affect_business'];
                    repairPriority = listVulHostsRequest['repair_priority'];
                }
            }

        
            if (vulId === null || vulId === undefined) {
                throw new RequiredError('vulId','Required parameter vulId was null or undefined when calling listVulHosts.');
            }
            if (vulId !== null && vulId !== undefined) {
                localVarQueryParameter['vul_id'] = vulId;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listVulHosts.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (severityLevel !== null && severityLevel !== undefined) {
                localVarQueryParameter['severity_level'] = severityLevel;
            }
            if (isAffectBusiness !== null && isAffectBusiness !== undefined) {
                localVarQueryParameter['is_affect_business'] = isAffectBusiness;
            }
            if (repairPriority !== null && repairPriority !== undefined) {
                localVarQueryParameter['repair_priority'] = repairPriority;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询漏洞扫描任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVulScanTask(listVulScanTaskRequest?: ListVulScanTaskRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/scan-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let scanType;
            
            let taskId;
            
            let minStartTime;
            
            let maxStartTime;

            if (listVulScanTaskRequest !== null && listVulScanTaskRequest !== undefined) {
                if (listVulScanTaskRequest instanceof ListVulScanTaskRequest) {
                    enterpriseProjectId = listVulScanTaskRequest.enterpriseProjectId;
                    limit = listVulScanTaskRequest.limit;
                    offset = listVulScanTaskRequest.offset;
                    scanType = listVulScanTaskRequest.scanType;
                    taskId = listVulScanTaskRequest.taskId;
                    minStartTime = listVulScanTaskRequest.minStartTime;
                    maxStartTime = listVulScanTaskRequest.maxStartTime;
                } else {
                    enterpriseProjectId = listVulScanTaskRequest['enterprise_project_id'];
                    limit = listVulScanTaskRequest['limit'];
                    offset = listVulScanTaskRequest['offset'];
                    scanType = listVulScanTaskRequest['scan_type'];
                    taskId = listVulScanTaskRequest['task_id'];
                    minStartTime = listVulScanTaskRequest['min_start_time'];
                    maxStartTime = listVulScanTaskRequest['max_start_time'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (scanType !== null && scanType !== undefined) {
                localVarQueryParameter['scan_type'] = scanType;
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (minStartTime !== null && minStartTime !== undefined) {
                localVarQueryParameter['min_start_time'] = minStartTime;
            }
            if (maxStartTime !== null && maxStartTime !== undefined) {
                localVarQueryParameter['max_start_time'] = maxStartTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询漏洞扫描任务对应的主机列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVulScanTaskHost(listVulScanTaskHostRequest?: ListVulScanTaskHostRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/scan-task/{task_id}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;
            
            let scanStatus;

            if (listVulScanTaskHostRequest !== null && listVulScanTaskHostRequest !== undefined) {
                if (listVulScanTaskHostRequest instanceof ListVulScanTaskHostRequest) {
                    taskId = listVulScanTaskHostRequest.taskId;
                    enterpriseProjectId = listVulScanTaskHostRequest.enterpriseProjectId;
                    limit = listVulScanTaskHostRequest.limit;
                    offset = listVulScanTaskHostRequest.offset;
                    scanStatus = listVulScanTaskHostRequest.scanStatus;
                } else {
                    taskId = listVulScanTaskHostRequest['task_id'];
                    enterpriseProjectId = listVulScanTaskHostRequest['enterprise_project_id'];
                    limit = listVulScanTaskHostRequest['limit'];
                    offset = listVulScanTaskHostRequest['offset'];
                    scanStatus = listVulScanTaskHostRequest['scan_status'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listVulScanTaskHost.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (scanStatus !== null && scanStatus !== undefined) {
                localVarQueryParameter['scan_status'] = scanStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询漏洞列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVulnerabilities(listVulnerabilitiesRequest?: ListVulnerabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/vulnerabilities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let type;
            
            let vulId;
            
            let vulName;
            
            let limit;
            
            let offset;
            
            let repairPriority;
            
            let handleStatus;
            
            let cveId;
            
            let labelList;
            
            let status;
            
            let assetValue;
            
            let groupName;

            if (listVulnerabilitiesRequest !== null && listVulnerabilitiesRequest !== undefined) {
                if (listVulnerabilitiesRequest instanceof ListVulnerabilitiesRequest) {
                    enterpriseProjectId = listVulnerabilitiesRequest.enterpriseProjectId;
                    type = listVulnerabilitiesRequest.type;
                    vulId = listVulnerabilitiesRequest.vulId;
                    vulName = listVulnerabilitiesRequest.vulName;
                    limit = listVulnerabilitiesRequest.limit;
                    offset = listVulnerabilitiesRequest.offset;
                    repairPriority = listVulnerabilitiesRequest.repairPriority;
                    handleStatus = listVulnerabilitiesRequest.handleStatus;
                    cveId = listVulnerabilitiesRequest.cveId;
                    labelList = listVulnerabilitiesRequest.labelList;
                    status = listVulnerabilitiesRequest.status;
                    assetValue = listVulnerabilitiesRequest.assetValue;
                    groupName = listVulnerabilitiesRequest.groupName;
                } else {
                    enterpriseProjectId = listVulnerabilitiesRequest['enterprise_project_id'];
                    type = listVulnerabilitiesRequest['type'];
                    vulId = listVulnerabilitiesRequest['vul_id'];
                    vulName = listVulnerabilitiesRequest['vul_name'];
                    limit = listVulnerabilitiesRequest['limit'];
                    offset = listVulnerabilitiesRequest['offset'];
                    repairPriority = listVulnerabilitiesRequest['repair_priority'];
                    handleStatus = listVulnerabilitiesRequest['handle_status'];
                    cveId = listVulnerabilitiesRequest['cve_id'];
                    labelList = listVulnerabilitiesRequest['label_list'];
                    status = listVulnerabilitiesRequest['status'];
                    assetValue = listVulnerabilitiesRequest['asset_value'];
                    groupName = listVulnerabilitiesRequest['group_name'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (vulId !== null && vulId !== undefined) {
                localVarQueryParameter['vul_id'] = vulId;
            }
            if (vulName !== null && vulName !== undefined) {
                localVarQueryParameter['vul_name'] = vulName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (repairPriority !== null && repairPriority !== undefined) {
                localVarQueryParameter['repair_priority'] = repairPriority;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (cveId !== null && cveId !== undefined) {
                localVarQueryParameter['cve_id'] = cveId;
            }
            if (labelList !== null && labelList !== undefined) {
                localVarQueryParameter['label_list'] = labelList;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 漏洞对应cve信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVulnerabilityCve(listVulnerabilityCveRequest?: ListVulnerabilityCveRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/image/vulnerability/{vul_id}/cve",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vulId;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;

            if (listVulnerabilityCveRequest !== null && listVulnerabilityCveRequest !== undefined) {
                if (listVulnerabilityCveRequest instanceof ListVulnerabilityCveRequest) {
                    vulId = listVulnerabilityCveRequest.vulId;
                    region = listVulnerabilityCveRequest.region;
                    enterpriseProjectId = listVulnerabilityCveRequest.enterpriseProjectId;
                    offset = listVulnerabilityCveRequest.offset;
                    limit = listVulnerabilityCveRequest.limit;
                } else {
                    vulId = listVulnerabilityCveRequest['vul_id'];
                    region = listVulnerabilityCveRequest['region'];
                    enterpriseProjectId = listVulnerabilityCveRequest['enterprise_project_id'];
                    offset = listVulnerabilityCveRequest['offset'];
                    limit = listVulnerabilityCveRequest['limit'];
                }
            }

        
            if (vulId === null || vulId === undefined) {
            throw new RequiredError('vulId','Required parameter vulId was null or undefined when calling listVulnerabilityCve.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vul_id': vulId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弱口令检测结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWeakPasswordUsers(listWeakPasswordUsersRequest?: ListWeakPasswordUsersRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/weak-password-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let userName;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (listWeakPasswordUsersRequest !== null && listWeakPasswordUsersRequest !== undefined) {
                if (listWeakPasswordUsersRequest instanceof ListWeakPasswordUsersRequest) {
                    enterpriseProjectId = listWeakPasswordUsersRequest.enterpriseProjectId;
                    hostName = listWeakPasswordUsersRequest.hostName;
                    hostIp = listWeakPasswordUsersRequest.hostIp;
                    userName = listWeakPasswordUsersRequest.userName;
                    hostId = listWeakPasswordUsersRequest.hostId;
                    limit = listWeakPasswordUsersRequest.limit;
                    offset = listWeakPasswordUsersRequest.offset;
                } else {
                    enterpriseProjectId = listWeakPasswordUsersRequest['enterprise_project_id'];
                    hostName = listWeakPasswordUsersRequest['host_name'];
                    hostIp = listWeakPasswordUsersRequest['host_ip'];
                    userName = listWeakPasswordUsersRequest['user_name'];
                    hostId = listWeakPasswordUsersRequest['host_id'];
                    limit = listWeakPasswordUsersRequest['limit'];
                    offset = listWeakPasswordUsersRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护列表：查询网页防篡改主机防护状态列表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWtpProtectHost(listWtpProtectHostRequest?: ListWtpProtectHostRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/webtamper/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostId;
            
            let publicIp;
            
            let privateIp;
            
            let groupName;
            
            let osType;
            
            let protectStatus;
            
            let wtpStatus;
            
            let agentStatus;
            
            let limit;
            
            let offset;

            if (listWtpProtectHostRequest !== null && listWtpProtectHostRequest !== undefined) {
                if (listWtpProtectHostRequest instanceof ListWtpProtectHostRequest) {
                    region = listWtpProtectHostRequest.region;
                    enterpriseProjectId = listWtpProtectHostRequest.enterpriseProjectId;
                    hostName = listWtpProtectHostRequest.hostName;
                    hostId = listWtpProtectHostRequest.hostId;
                    publicIp = listWtpProtectHostRequest.publicIp;
                    privateIp = listWtpProtectHostRequest.privateIp;
                    groupName = listWtpProtectHostRequest.groupName;
                    osType = listWtpProtectHostRequest.osType;
                    protectStatus = listWtpProtectHostRequest.protectStatus;
                    wtpStatus = listWtpProtectHostRequest.wtpStatus;
                    agentStatus = listWtpProtectHostRequest.agentStatus;
                    limit = listWtpProtectHostRequest.limit;
                    offset = listWtpProtectHostRequest.offset;
                } else {
                    region = listWtpProtectHostRequest['region'];
                    enterpriseProjectId = listWtpProtectHostRequest['enterprise_project_id'];
                    hostName = listWtpProtectHostRequest['host_name'];
                    hostId = listWtpProtectHostRequest['host_id'];
                    publicIp = listWtpProtectHostRequest['public_ip'];
                    privateIp = listWtpProtectHostRequest['private_ip'];
                    groupName = listWtpProtectHostRequest['group_name'];
                    osType = listWtpProtectHostRequest['os_type'];
                    protectStatus = listWtpProtectHostRequest['protect_status'];
                    wtpStatus = listWtpProtectHostRequest['wtp_status'];
                    agentStatus = listWtpProtectHostRequest['agent_status'];
                    limit = listWtpProtectHostRequest['limit'];
                    offset = listWtpProtectHostRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (wtpStatus !== null && wtpStatus !== undefined) {
                localVarQueryParameter['wtp_status'] = wtpStatus;
            }
            if (agentStatus !== null && agentStatus !== undefined) {
                localVarQueryParameter['agent_status'] = agentStatus;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑动态端口蜜罐策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyDecoyPortPolicy(modifyDecoyPortPolicyRequest?: ModifyDecoyPortPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/honeypot-port/policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let policyId;
            
            let enterpriseProjectId;

            if (modifyDecoyPortPolicyRequest !== null && modifyDecoyPortPolicyRequest !== undefined) {
                if (modifyDecoyPortPolicyRequest instanceof ModifyDecoyPortPolicyRequest) {
                    policyId = modifyDecoyPortPolicyRequest.policyId;
                    body = modifyDecoyPortPolicyRequest.body
                    enterpriseProjectId = modifyDecoyPortPolicyRequest.enterpriseProjectId;
                } else {
                    policyId = modifyDecoyPortPolicyRequest['policy_id'];
                    body = modifyDecoyPortPolicyRequest['body'];
                    enterpriseProjectId = modifyDecoyPortPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling modifyDecoyPortPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除告警白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeAlarmWhiteList(removeAlarmWhiteListRequest?: RemoveAlarmWhiteListRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/event/white-list/alarm",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (removeAlarmWhiteListRequest !== null && removeAlarmWhiteListRequest !== undefined) {
                if (removeAlarmWhiteListRequest instanceof RemoveAlarmWhiteListRequest) {
                    body = removeAlarmWhiteListRequest.body
                    enterpriseProjectId = removeAlarmWhiteListRequest.enterpriseProjectId;
                } else {
                    body = removeAlarmWhiteListRequest['body'];
                    enterpriseProjectId = removeAlarmWhiteListRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除登录白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeLoginWhiteList(removeLoginWhiteListRequest?: RemoveLoginWhiteListRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/event/white-list/login",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (removeLoginWhiteListRequest !== null && removeLoginWhiteListRequest !== undefined) {
                if (removeLoginWhiteListRequest instanceof RemoveLoginWhiteListRequest) {
                    body = removeLoginWhiteListRequest.body
                    enterpriseProjectId = removeLoginWhiteListRequest.enterpriseProjectId;
                } else {
                    body = removeLoginWhiteListRequest['body'];
                    enterpriseProjectId = removeLoginWhiteListRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除系统用户白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeSystemUserWhiteList(removeSystemUserWhiteListRequest?: RemoveSystemUserWhiteListRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/event/white-list/userlist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (removeSystemUserWhiteListRequest !== null && removeSystemUserWhiteListRequest !== undefined) {
                if (removeSystemUserWhiteListRequest instanceof RemoveSystemUserWhiteListRequest) {
                    body = removeSystemUserWhiteListRequest.body
                    enterpriseProjectId = removeSystemUserWhiteListRequest.enterpriseProjectId;
                } else {
                    body = removeSystemUserWhiteListRequest['body'];
                    enterpriseProjectId = removeSystemUserWhiteListRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从SWR服务同步镜像列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runImageSynchronize(runImageSynchronizeRequest?: RunImageSynchronizeRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/image/synchronize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (runImageSynchronizeRequest !== null && runImageSynchronizeRequest !== undefined) {
                if (runImageSynchronizeRequest instanceof RunImageSynchronizeRequest) {
                    body = runImageSynchronizeRequest.body
                    region = runImageSynchronizeRequest.region;
                    enterpriseProjectId = runImageSynchronizeRequest.enterpriseProjectId;
                } else {
                    body = runImageSynchronizeRequest['body'];
                    region = runImageSynchronizeRequest['region'];
                    enterpriseProjectId = runImageSynchronizeRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启/关闭动态网页防篡改防护，下发/清空动态网页防篡改策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRaspSwitch(setRaspSwitchRequest?: SetRaspSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/webtamper/rasp/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let contentType;
            
            let enterpriseProjectId;

            if (setRaspSwitchRequest !== null && setRaspSwitchRequest !== undefined) {
                if (setRaspSwitchRequest instanceof SetRaspSwitchRequest) {
                    region = setRaspSwitchRequest.region;
                    body = setRaspSwitchRequest.body
                    contentType = setRaspSwitchRequest.contentType;
                    enterpriseProjectId = setRaspSwitchRequest.enterpriseProjectId;
                } else {
                    region = setRaspSwitchRequest['region'];
                    body = setRaspSwitchRequest['body'];
                    contentType = setRaspSwitchRequest['Content-Type'];
                    enterpriseProjectId = setRaspSwitchRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置双因子登录配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setTwoFactorLoginConfig(setTwoFactorLoginConfigRequest?: SetTwoFactorLoginConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/setting/two-factor-login/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (setTwoFactorLoginConfigRequest !== null && setTwoFactorLoginConfigRequest !== undefined) {
                if (setTwoFactorLoginConfigRequest instanceof SetTwoFactorLoginConfigRequest) {
                    body = setTwoFactorLoginConfigRequest.body
                    enterpriseProjectId = setTwoFactorLoginConfigRequest.enterpriseProjectId;
                } else {
                    body = setTwoFactorLoginConfigRequest['body'];
                    enterpriseProjectId = setTwoFactorLoginConfigRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启/关闭网页防篡改功能防护，下发/清空网页防篡改策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setWtpProtectionStatusInfo(setWtpProtectionStatusInfoRequest?: SetWtpProtectionStatusInfoRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/webtamper/static/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let contentType;
            
            let enterpriseProjectId;

            if (setWtpProtectionStatusInfoRequest !== null && setWtpProtectionStatusInfoRequest !== undefined) {
                if (setWtpProtectionStatusInfoRequest instanceof SetWtpProtectionStatusInfoRequest) {
                    region = setWtpProtectionStatusInfoRequest.region;
                    body = setWtpProtectionStatusInfoRequest.body
                    contentType = setWtpProtectionStatusInfoRequest.contentType;
                    enterpriseProjectId = setWtpProtectionStatusInfoRequest.enterpriseProjectId;
                } else {
                    region = setWtpProtectionStatusInfoRequest['region'];
                    body = setWtpProtectionStatusInfoRequest['body'];
                    contentType = setWtpProtectionStatusInfoRequest['Content-Type'];
                    enterpriseProjectId = setWtpProtectionStatusInfoRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询病毒查杀统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAntivirusStatistic(showAntivirusStatisticRequest?: ShowAntivirusStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/antivirus/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;

            if (showAntivirusStatisticRequest !== null && showAntivirusStatisticRequest !== undefined) {
                if (showAntivirusStatisticRequest instanceof ShowAntivirusStatisticRequest) {
                    enterpriseProjectId = showAntivirusStatisticRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = showAntivirusStatisticRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用防护开启状态：查询单台服务器的应用防护功能开启状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppRaspSwitchStatus(showAppRaspSwitchStatusRequest?: ShowAppRaspSwitchStatusRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/rasp/{host_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let appType;

            if (showAppRaspSwitchStatusRequest !== null && showAppRaspSwitchStatusRequest !== undefined) {
                if (showAppRaspSwitchStatusRequest instanceof ShowAppRaspSwitchStatusRequest) {
                    enterpriseProjectId = showAppRaspSwitchStatusRequest.enterpriseProjectId;
                    hostId = showAppRaspSwitchStatusRequest.hostId;
                    appType = showAppRaspSwitchStatusRequest.appType;
                } else {
                    enterpriseProjectId = showAppRaspSwitchStatusRequest['enterprise_project_id'];
                    hostId = showAppRaspSwitchStatusRequest['host_id'];
                    appType = showAppRaspSwitchStatusRequest['app_type'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling showAppRaspSwitchStatus.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling showAppRaspSwitchStatus.');
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资产统计信息，账号、端口、进程等
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssetStatistic(showAssetStatisticRequest?: ShowAssetStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let category;

            if (showAssetStatisticRequest !== null && showAssetStatisticRequest !== undefined) {
                if (showAssetStatisticRequest instanceof ShowAssetStatisticRequest) {
                    enterpriseProjectId = showAssetStatisticRequest.enterpriseProjectId;
                    hostId = showAssetStatisticRequest.hostId;
                    category = showAssetStatisticRequest.category;
                } else {
                    enterpriseProjectId = showAssetStatisticRequest['enterprise_project_id'];
                    hostId = showAssetStatisticRequest['host_id'];
                    category = showAssetStatisticRequest['category'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询HSS存储库绑定的备份策略信息,确保已经购买了勒索防护存储库，可以从cbr云备份服务进行验证，确保已经存在HSS_projectid命名的存储库已经购买
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupPolicyInfo(showBackupPolicyInfoRequest?: ShowBackupPolicyInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/backup/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;

            if (showBackupPolicyInfoRequest !== null && showBackupPolicyInfoRequest !== undefined) {
                if (showBackupPolicyInfoRequest instanceof ShowBackupPolicyInfoRequest) {
                    region = showBackupPolicyInfoRequest.region;
                    enterpriseProjectId = showBackupPolicyInfoRequest.enterpriseProjectId;
                } else {
                    region = showBackupPolicyInfoRequest['region'];
                    enterpriseProjectId = showBackupPolicyInfoRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配置检查项检测报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCheckRuleDetail(showCheckRuleDetailRequest?: ShowCheckRuleDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/check-rule/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checkName;
            
            let checkType;
            
            let checkRuleId;
            
            let standard;
            
            let enterpriseProjectId;
            
            let hostId;

            if (showCheckRuleDetailRequest !== null && showCheckRuleDetailRequest !== undefined) {
                if (showCheckRuleDetailRequest instanceof ShowCheckRuleDetailRequest) {
                    checkName = showCheckRuleDetailRequest.checkName;
                    checkType = showCheckRuleDetailRequest.checkType;
                    checkRuleId = showCheckRuleDetailRequest.checkRuleId;
                    standard = showCheckRuleDetailRequest.standard;
                    enterpriseProjectId = showCheckRuleDetailRequest.enterpriseProjectId;
                    hostId = showCheckRuleDetailRequest.hostId;
                } else {
                    checkName = showCheckRuleDetailRequest['check_name'];
                    checkType = showCheckRuleDetailRequest['check_type'];
                    checkRuleId = showCheckRuleDetailRequest['check_rule_id'];
                    standard = showCheckRuleDetailRequest['standard'];
                    enterpriseProjectId = showCheckRuleDetailRequest['enterprise_project_id'];
                    hostId = showCheckRuleDetailRequest['host_id'];
                }
            }

        
            if (checkName === null || checkName === undefined) {
                throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling showCheckRuleDetail.');
            }
            if (checkName !== null && checkName !== undefined) {
                localVarQueryParameter['check_name'] = checkName;
            }
            if (checkType === null || checkType === undefined) {
                throw new RequiredError('checkType','Required parameter checkType was null or undefined when calling showCheckRuleDetail.');
            }
            if (checkType !== null && checkType !== undefined) {
                localVarQueryParameter['check_type'] = checkType;
            }
            if (checkRuleId === null || checkRuleId === undefined) {
                throw new RequiredError('checkRuleId','Required parameter checkRuleId was null or undefined when calling showCheckRuleDetail.');
            }
            if (checkRuleId !== null && checkRuleId !== undefined) {
                localVarQueryParameter['check_rule_id'] = checkRuleId;
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling showCheckRuleDetail.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看动态端口蜜罐策略详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDecoyPortPolicyDetails(showDecoyPortPolicyDetailsRequest?: ShowDecoyPortPolicyDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/honeypot-port/policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyId;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;

            if (showDecoyPortPolicyDetailsRequest !== null && showDecoyPortPolicyDetailsRequest !== undefined) {
                if (showDecoyPortPolicyDetailsRequest instanceof ShowDecoyPortPolicyDetailsRequest) {
                    policyId = showDecoyPortPolicyDetailsRequest.policyId;
                    offset = showDecoyPortPolicyDetailsRequest.offset;
                    limit = showDecoyPortPolicyDetailsRequest.limit;
                    enterpriseProjectId = showDecoyPortPolicyDetailsRequest.enterpriseProjectId;
                } else {
                    policyId = showDecoyPortPolicyDetailsRequest['policy_id'];
                    offset = showDecoyPortPolicyDetailsRequest['offset'];
                    limit = showDecoyPortPolicyDetailsRequest['limit'];
                    enterpriseProjectId = showDecoyPortPolicyDetailsRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showDecoyPortPolicyDetails.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showDecoyPortPolicyDetails.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showDecoyPortPolicyDetails.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像配置检查项检测报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageCheckRuleDetail(showImageCheckRuleDetailRequest?: ShowImageCheckRuleDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/image/baseline/check-rule/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageType;
            
            let checkName;
            
            let checkType;
            
            let checkRuleId;
            
            let standard;
            
            let region;
            
            let enterpriseProjectId;
            
            let namespace;
            
            let imageName;
            
            let imageVersion;
            
            let imageId;
            
            let instanceId;

            if (showImageCheckRuleDetailRequest !== null && showImageCheckRuleDetailRequest !== undefined) {
                if (showImageCheckRuleDetailRequest instanceof ShowImageCheckRuleDetailRequest) {
                    imageType = showImageCheckRuleDetailRequest.imageType;
                    checkName = showImageCheckRuleDetailRequest.checkName;
                    checkType = showImageCheckRuleDetailRequest.checkType;
                    checkRuleId = showImageCheckRuleDetailRequest.checkRuleId;
                    standard = showImageCheckRuleDetailRequest.standard;
                    region = showImageCheckRuleDetailRequest.region;
                    enterpriseProjectId = showImageCheckRuleDetailRequest.enterpriseProjectId;
                    namespace = showImageCheckRuleDetailRequest.namespace;
                    imageName = showImageCheckRuleDetailRequest.imageName;
                    imageVersion = showImageCheckRuleDetailRequest.imageVersion;
                    imageId = showImageCheckRuleDetailRequest.imageId;
                    instanceId = showImageCheckRuleDetailRequest.instanceId;
                } else {
                    imageType = showImageCheckRuleDetailRequest['image_type'];
                    checkName = showImageCheckRuleDetailRequest['check_name'];
                    checkType = showImageCheckRuleDetailRequest['check_type'];
                    checkRuleId = showImageCheckRuleDetailRequest['check_rule_id'];
                    standard = showImageCheckRuleDetailRequest['standard'];
                    region = showImageCheckRuleDetailRequest['region'];
                    enterpriseProjectId = showImageCheckRuleDetailRequest['enterprise_project_id'];
                    namespace = showImageCheckRuleDetailRequest['namespace'];
                    imageName = showImageCheckRuleDetailRequest['image_name'];
                    imageVersion = showImageCheckRuleDetailRequest['image_version'];
                    imageId = showImageCheckRuleDetailRequest['image_id'];
                    instanceId = showImageCheckRuleDetailRequest['instance_id'];
                }
            }

        
            if (imageType === null || imageType === undefined) {
                throw new RequiredError('imageType','Required parameter imageType was null or undefined when calling showImageCheckRuleDetail.');
            }
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }
            if (checkName === null || checkName === undefined) {
                throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling showImageCheckRuleDetail.');
            }
            if (checkName !== null && checkName !== undefined) {
                localVarQueryParameter['check_name'] = checkName;
            }
            if (checkType === null || checkType === undefined) {
                throw new RequiredError('checkType','Required parameter checkType was null or undefined when calling showImageCheckRuleDetail.');
            }
            if (checkType !== null && checkType !== undefined) {
                localVarQueryParameter['check_type'] = checkType;
            }
            if (checkRuleId === null || checkRuleId === undefined) {
                throw new RequiredError('checkRuleId','Required parameter checkRuleId was null or undefined when calling showImageCheckRuleDetail.');
            }
            if (checkRuleId !== null && checkRuleId !== undefined) {
                localVarQueryParameter['check_rule_id'] = checkRuleId;
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling showImageCheckRuleDetail.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (imageVersion !== null && imageVersion !== undefined) {
                localVarQueryParameter['image_version'] = imageVersion;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询产商品信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProductdataOfferingInfos(showProductdataOfferingInfosRequest?: ShowProductdataOfferingInfosRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/product/productdata/offering-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let siteCode;

            if (showProductdataOfferingInfosRequest !== null && showProductdataOfferingInfosRequest !== undefined) {
                if (showProductdataOfferingInfosRequest instanceof ShowProductdataOfferingInfosRequest) {
                    region = showProductdataOfferingInfosRequest.region;
                    enterpriseProjectId = showProductdataOfferingInfosRequest.enterpriseProjectId;
                    siteCode = showProductdataOfferingInfosRequest.siteCode;
                } else {
                    region = showProductdataOfferingInfosRequest['region'];
                    enterpriseProjectId = showProductdataOfferingInfosRequest['enterprise_project_id'];
                    siteCode = showProductdataOfferingInfosRequest['site_code'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (siteCode !== null && siteCode !== undefined) {
                localVarQueryParameter['site_code'] = siteCode;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护策略详情：查询防护策略配置的相关检测规则信息，包含14种检测规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRaspPolicyDetail(showRaspPolicyDetailRequest?: ShowRaspPolicyDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/rasp/policy/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let policyId;

            if (showRaspPolicyDetailRequest !== null && showRaspPolicyDetailRequest !== undefined) {
                if (showRaspPolicyDetailRequest instanceof ShowRaspPolicyDetailRequest) {
                    enterpriseProjectId = showRaspPolicyDetailRequest.enterpriseProjectId;
                    policyId = showRaspPolicyDetailRequest.policyId;
                } else {
                    enterpriseProjectId = showRaspPolicyDetailRequest['enterprise_project_id'];
                    policyId = showRaspPolicyDetailRequest['policy_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling showRaspPolicyDetail.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (policyId === null || policyId === undefined) {
                throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showRaspPolicyDetail.');
            }
            if (policyId !== null && policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 防护数据统计：统计已添加防护服务器的数量以及近七天微服务RASP攻击数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRaspProtectStatistics(showRaspProtectStatisticsRequest?: ShowRaspProtectStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/rasp/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;

            if (showRaspProtectStatisticsRequest !== null && showRaspProtectStatisticsRequest !== undefined) {
                if (showRaspProtectStatisticsRequest instanceof ShowRaspProtectStatisticsRequest) {
                    enterpriseProjectId = showRaspProtectStatisticsRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = showRaspProtectStatisticsRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling showRaspProtectStatistics.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护服务器java应用详情：查询防护服务器的java应用状态列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRaspServerDetail(showRaspServerDetailRequest?: ShowRaspServerDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/rasp/servers/{host_id}/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let hostId;
            
            let enterpriseProjectId;
            
            let keyword;
            
            let appProtectStatus;

            if (showRaspServerDetailRequest !== null && showRaspServerDetailRequest !== undefined) {
                if (showRaspServerDetailRequest instanceof ShowRaspServerDetailRequest) {
                    limit = showRaspServerDetailRequest.limit;
                    offset = showRaspServerDetailRequest.offset;
                    hostId = showRaspServerDetailRequest.hostId;
                    enterpriseProjectId = showRaspServerDetailRequest.enterpriseProjectId;
                    keyword = showRaspServerDetailRequest.keyword;
                    appProtectStatus = showRaspServerDetailRequest.appProtectStatus;
                } else {
                    limit = showRaspServerDetailRequest['limit'];
                    offset = showRaspServerDetailRequest['offset'];
                    hostId = showRaspServerDetailRequest['host_id'];
                    enterpriseProjectId = showRaspServerDetailRequest['enterprise_project_id'];
                    keyword = showRaspServerDetailRequest['keyword'];
                    appProtectStatus = showRaspServerDetailRequest['app_protect_status'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showRaspServerDetail.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showRaspServerDetail.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling showRaspServerDetail.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (appProtectStatus !== null && appProtectStatus !== undefined) {
                localVarQueryParameter['app_protect_status'] = appProtectStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceQuotas(showResourceQuotasRequest?: ShowResourceQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/billing/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let version;
            
            let chargingMode;

            if (showResourceQuotasRequest !== null && showResourceQuotasRequest !== undefined) {
                if (showResourceQuotasRequest instanceof ShowResourceQuotasRequest) {
                    region = showResourceQuotasRequest.region;
                    enterpriseProjectId = showResourceQuotasRequest.enterpriseProjectId;
                    version = showResourceQuotasRequest.version;
                    chargingMode = showResourceQuotasRequest.chargingMode;
                } else {
                    region = showResourceQuotasRequest['region'];
                    enterpriseProjectId = showResourceQuotasRequest['enterprise_project_id'];
                    version = showResourceQuotasRequest['version'];
                    chargingMode = showResourceQuotasRequest['charging_mode'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定安全配置项的检查结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRiskConfigDetail(showRiskConfigDetailRequest?: ShowRiskConfigDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/risk-config/{check_name}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checkName;
            
            let standard;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (showRiskConfigDetailRequest !== null && showRiskConfigDetailRequest !== undefined) {
                if (showRiskConfigDetailRequest instanceof ShowRiskConfigDetailRequest) {
                    checkName = showRiskConfigDetailRequest.checkName;
                    standard = showRiskConfigDetailRequest.standard;
                    enterpriseProjectId = showRiskConfigDetailRequest.enterpriseProjectId;
                    hostId = showRiskConfigDetailRequest.hostId;
                    limit = showRiskConfigDetailRequest.limit;
                    offset = showRiskConfigDetailRequest.offset;
                } else {
                    checkName = showRiskConfigDetailRequest['check_name'];
                    standard = showRiskConfigDetailRequest['standard'];
                    enterpriseProjectId = showRiskConfigDetailRequest['enterprise_project_id'];
                    hostId = showRiskConfigDetailRequest['host_id'];
                    limit = showRiskConfigDetailRequest['limit'];
                    offset = showRiskConfigDetailRequest['offset'];
                }
            }

        
            if (checkName === null || checkName === undefined) {
            throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling showRiskConfigDetail.');
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling showRiskConfigDetail.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'check_name': checkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个备份策略信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSingleBackupPolicyInfo(showSingleBackupPolicyInfoRequest?: ShowSingleBackupPolicyInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/backup/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyId;
            
            let enterpriseProjectId;

            if (showSingleBackupPolicyInfoRequest !== null && showSingleBackupPolicyInfoRequest !== undefined) {
                if (showSingleBackupPolicyInfoRequest instanceof ShowSingleBackupPolicyInfoRequest) {
                    policyId = showSingleBackupPolicyInfoRequest.policyId;
                    enterpriseProjectId = showSingleBackupPolicyInfoRequest.enterpriseProjectId;
                } else {
                    policyId = showSingleBackupPolicyInfoRequest['policy_id'];
                    enterpriseProjectId = showSingleBackupPolicyInfoRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showSingleBackupPolicyInfo.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询漏洞扫描策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVulScanPolicy(showVulScanPolicyRequest?: ShowVulScanPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/scan-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;

            if (showVulScanPolicyRequest !== null && showVulScanPolicyRequest !== undefined) {
                if (showVulScanPolicyRequest instanceof ShowVulScanPolicyRequest) {
                    enterpriseProjectId = showVulScanPolicyRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = showVulScanPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询漏洞管理统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVulStatics(showVulStaticsRequest?: ShowVulStaticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;

            if (showVulStaticsRequest !== null && showVulStaticsRequest !== undefined) {
                if (showVulStaticsRequest instanceof ShowVulStaticsRequest) {
                    enterpriseProjectId = showVulStaticsRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = showVulStaticsRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启勒索病毒防护,请保证该region有cbr云备份服务，勒索服务与云备份服务有关联关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startProtection(startProtectionRequest?: StartProtectionRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/ransomware/protection/open",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (startProtectionRequest !== null && startProtectionRequest !== undefined) {
                if (startProtectionRequest instanceof StartProtectionRequest) {
                    region = startProtectionRequest.region;
                    body = startProtectionRequest.body
                    enterpriseProjectId = startProtectionRequest.enterpriseProjectId;
                } else {
                    region = startProtectionRequest['region'];
                    body = startProtectionRequest['body'];
                    enterpriseProjectId = startProtectionRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭勒索病毒防护
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopProtection(stopProtectionRequest?: StopProtectionRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/ransomware/protection/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (stopProtectionRequest !== null && stopProtectionRequest !== undefined) {
                if (stopProtectionRequest instanceof StopProtectionRequest) {
                    region = stopProtectionRequest.region;
                    body = stopProtectionRequest.body
                    enterpriseProjectId = stopProtectionRequest.enterpriseProjectId;
                } else {
                    region = stopProtectionRequest['region'];
                    body = stopProtectionRequest['body'];
                    enterpriseProjectId = stopProtectionRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换主机动态端口蜜罐策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchDecoyPortHostPolicy(switchDecoyPortHostPolicyRequest?: SwitchDecoyPortHostPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/honeypot-port/host-policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyId;
            
            let hostId;
            
            let enterpriseProjectId;

            if (switchDecoyPortHostPolicyRequest !== null && switchDecoyPortHostPolicyRequest !== undefined) {
                if (switchDecoyPortHostPolicyRequest instanceof SwitchDecoyPortHostPolicyRequest) {
                    policyId = switchDecoyPortHostPolicyRequest.policyId;
                    hostId = switchDecoyPortHostPolicyRequest.hostId;
                    enterpriseProjectId = switchDecoyPortHostPolicyRequest.enterpriseProjectId;
                } else {
                    policyId = switchDecoyPortHostPolicyRequest['policy_id'];
                    hostId = switchDecoyPortHostPolicyRequest['host_id'];
                    enterpriseProjectId = switchDecoyPortHostPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling switchDecoyPortHostPolicy.');
            }
            if (hostId === null || hostId === undefined) {
                throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling switchDecoyPortHostPolicy.');
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换防护状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchHostsProtectStatus(switchHostsProtectStatusRequest?: SwitchHostsProtectStatusRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/host-management/protection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (switchHostsProtectStatusRequest !== null && switchHostsProtectStatusRequest !== undefined) {
                if (switchHostsProtectStatusRequest instanceof SwitchHostsProtectStatusRequest) {
                    region = switchHostsProtectStatusRequest.region;
                    body = switchHostsProtectStatusRequest.body
                    enterpriseProjectId = switchHostsProtectStatusRequest.enterpriseProjectId;
                } else {
                    region = switchHostsProtectStatusRequest['region'];
                    body = switchHostsProtectStatusRequest['body'];
                    enterpriseProjectId = switchHostsProtectStatusRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新集群daemonset
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAgentDaemonset(updateAgentDaemonsetRequest?: UpdateAgentDaemonsetRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/container/kubernetes/clusters/{cluster_id}/daemonsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let clusterId;
            
            let enterpriseProjectId;

            if (updateAgentDaemonsetRequest !== null && updateAgentDaemonsetRequest !== undefined) {
                if (updateAgentDaemonsetRequest instanceof UpdateAgentDaemonsetRequest) {
                    region = updateAgentDaemonsetRequest.region;
                    clusterId = updateAgentDaemonsetRequest.clusterId;
                    enterpriseProjectId = updateAgentDaemonsetRequest.enterpriseProjectId;
                    body = updateAgentDaemonsetRequest.body
                } else {
                    region = updateAgentDaemonsetRequest['region'];
                    clusterId = updateAgentDaemonsetRequest['cluster_id'];
                    enterpriseProjectId = updateAgentDaemonsetRequest['enterprise_project_id'];
                    body = updateAgentDaemonsetRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAgentDaemonset.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改存储库绑定的备份策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBackupPolicyInfo(updateBackupPolicyInfoRequest?: UpdateBackupPolicyInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/backup/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (updateBackupPolicyInfoRequest !== null && updateBackupPolicyInfoRequest !== undefined) {
                if (updateBackupPolicyInfoRequest instanceof UpdateBackupPolicyInfoRequest) {
                    region = updateBackupPolicyInfoRequest.region;
                    body = updateBackupPolicyInfoRequest.body
                    enterpriseProjectId = updateBackupPolicyInfoRequest.enterpriseProjectId;
                } else {
                    region = updateBackupPolicyInfoRequest['region'];
                    body = updateBackupPolicyInfoRequest['body'];
                    enterpriseProjectId = updateBackupPolicyInfoRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改勒索防护策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProtectionPolicy(updateProtectionPolicyRequest?: UpdateProtectionPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/ransomware/protection/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (updateProtectionPolicyRequest !== null && updateProtectionPolicyRequest !== undefined) {
                if (updateProtectionPolicyRequest instanceof UpdateProtectionPolicyRequest) {
                    region = updateProtectionPolicyRequest.region;
                    body = updateProtectionPolicyRequest.body
                    enterpriseProjectId = updateProtectionPolicyRequest.enterpriseProjectId;
                } else {
                    region = updateProtectionPolicyRequest['region'];
                    body = updateProtectionPolicyRequest['body'];
                    enterpriseProjectId = updateProtectionPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改系统用户白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSystemUserWhiteList(updateSystemUserWhiteListRequest?: UpdateSystemUserWhiteListRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/event/white-list/userlist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (updateSystemUserWhiteListRequest !== null && updateSystemUserWhiteListRequest !== undefined) {
                if (updateSystemUserWhiteListRequest instanceof UpdateSystemUserWhiteListRequest) {
                    body = updateSystemUserWhiteListRequest.body
                    enterpriseProjectId = updateSystemUserWhiteListRequest.enterpriseProjectId;
                } else {
                    body = updateSystemUserWhiteListRequest['body'];
                    enterpriseProjectId = updateSystemUserWhiteListRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): HssClient {
    return new HssClient(client);
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