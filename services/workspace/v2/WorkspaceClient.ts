import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessConfig } from './model/AccessConfig';
import { AccessConfigInfo } from './model/AccessConfigInfo';
import { AccessConfigReq } from './model/AccessConfigReq';
import { AccessPolicyDetailInfo } from './model/AccessPolicyDetailInfo';
import { AccessPolicyInfo } from './model/AccessPolicyInfo';
import { AccessPolicyObject } from './model/AccessPolicyObject';
import { AccessPolicyObjectInfo } from './model/AccessPolicyObjectInfo';
import { AccountInfo } from './model/AccountInfo';
import { AccountTypeEnum } from './model/AccountTypeEnum';
import { ActionsOfUsersInGroupRequest } from './model/ActionsOfUsersInGroupRequest';
import { AdDomain } from './model/AdDomain';
import { AdDomainInfo } from './model/AdDomainInfo';
import { AdInfo } from './model/AdInfo';
import { AdOuInfo } from './model/AdOuInfo';
import { AdOuUserInfo } from './model/AdOuUserInfo';
import { AddDesktopPoolVolumesReq } from './model/AddDesktopPoolVolumesReq';
import { AddDesktopPoolVolumesRequest } from './model/AddDesktopPoolVolumesRequest';
import { AddDesktopPoolVolumesResponse } from './model/AddDesktopPoolVolumesResponse';
import { AddDesktopSubResourcesReq } from './model/AddDesktopSubResourcesReq';
import { AddDesktopSubResourcesRequest } from './model/AddDesktopSubResourcesRequest';
import { AddDesktopSubResourcesResponse } from './model/AddDesktopSubResourcesResponse';
import { AddDesktopVolumesReq } from './model/AddDesktopVolumesReq';
import { AddDesktopVolumesRequest } from './model/AddDesktopVolumesRequest';
import { AddDesktopVolumesResponse } from './model/AddDesktopVolumesResponse';
import { AddDesktopsVolumesReq } from './model/AddDesktopsVolumesReq';
import { AddMetricNotifyRuleReq } from './model/AddMetricNotifyRuleReq';
import { AddMetricNotifyRuleRequest } from './model/AddMetricNotifyRuleRequest';
import { AddMetricNotifyRuleResponse } from './model/AddMetricNotifyRuleResponse';
import { AddOuNameInfoV2Req } from './model/AddOuNameInfoV2Req';
import { AddOuRequest } from './model/AddOuRequest';
import { AddOuResponse } from './model/AddOuResponse';
import { AddRestrictedRuleRequest } from './model/AddRestrictedRuleRequest';
import { AddRestrictedRuleResponse } from './model/AddRestrictedRuleResponse';
import { AddSiteReq } from './model/AddSiteReq';
import { AddSiteRequest } from './model/AddSiteRequest';
import { AddSiteResponse } from './model/AddSiteResponse';
import { AddVolumes } from './model/AddVolumes';
import { AddVolumesReq } from './model/AddVolumesReq';
import { AddVolumesRequest } from './model/AddVolumesRequest';
import { AddVolumesResponse } from './model/AddVolumesResponse';
import { AdditionalInfo } from './model/AdditionalInfo';
import { AddressInfo } from './model/AddressInfo';
import { AgenciesInfo } from './model/AgenciesInfo';
import { AgenciesPermissionInfo } from './model/AgenciesPermissionInfo';
import { AgentInfo } from './model/AgentInfo';
import { AgentsCondition } from './model/AgentsCondition';
import { AlarmCondition } from './model/AlarmCondition';
import { AlarmHistoryItem } from './model/AlarmHistoryItem';
import { AlarmMetric } from './model/AlarmMetric';
import { AlarmMetricDimension } from './model/AlarmMetricDimension';
import { AppInstallJob } from './model/AppInstallJob';
import { AppRule } from './model/AppRule';
import { AppSourceType } from './model/AppSourceType';
import { AppStatusEnum } from './model/AppStatusEnum';
import { AppUserAccessData } from './model/AppUserAccessData';
import { Application } from './model/Application';
import { ApplyDedicatedStandbyNetworkParam } from './model/ApplyDedicatedStandbyNetworkParam';
import { ApplyDesktopsInternet } from './model/ApplyDesktopsInternet';
import { ApplyDesktopsInternetReq } from './model/ApplyDesktopsInternetReq';
import { ApplyDesktopsInternetRequest } from './model/ApplyDesktopsInternetRequest';
import { ApplyDesktopsInternetResponse } from './model/ApplyDesktopsInternetResponse';
import { ApplyDesktopsInternetRsp } from './model/ApplyDesktopsInternetRsp';
import { ApplyInternetReq } from './model/ApplyInternetReq';
import { ApplyInternetRequest } from './model/ApplyInternetRequest';
import { ApplyInternetResponse } from './model/ApplyInternetResponse';
import { ApplyObject } from './model/ApplyObject';
import { ApplyRuleInfo } from './model/ApplyRuleInfo';
import { ApplySharedVpcDedicatedParam } from './model/ApplySharedVpcDedicatedParam';
import { ApplySubnetBandwidthReq } from './model/ApplySubnetBandwidthReq';
import { ApplySubnetBandwidthRequest } from './model/ApplySubnetBandwidthRequest';
import { ApplySubnetBandwidthResponse } from './model/ApplySubnetBandwidthResponse';
import { ApplyWorkspaceReq } from './model/ApplyWorkspaceReq';
import { ApplyWorkspaceRequest } from './model/ApplyWorkspaceRequest';
import { ApplyWorkspaceResponse } from './model/ApplyWorkspaceResponse';
import { AssignAppAuthorizationsReq } from './model/AssignAppAuthorizationsReq';
import { AssignModelInfo } from './model/AssignModelInfo';
import { AssignType } from './model/AssignType';
import { AssistAuthMethodConfigRequest } from './model/AssistAuthMethodConfigRequest';
import { AssociateDesktopsEipReq } from './model/AssociateDesktopsEipReq';
import { AssociateDesktopsEipRequest } from './model/AssociateDesktopsEipRequest';
import { AssociateDesktopsEipResponse } from './model/AssociateDesktopsEipResponse';
import { AttachInstancesDesktopInfo } from './model/AttachInstancesDesktopInfo';
import { AttachInstancesReq } from './model/AttachInstancesReq';
import { AttachInstancesRequest } from './model/AttachInstancesRequest';
import { AttachInstancesResponse } from './model/AttachInstancesResponse';
import { AttachInstancesUserInfo } from './model/AttachInstancesUserInfo';
import { AttachStatistics } from './model/AttachStatistics';
import { AttachUsersInfo } from './model/AttachUsersInfo';
import { AuthAssistEnum } from './model/AuthAssistEnum';
import { AuthMethodConfigRequest } from './model/AuthMethodConfigRequest';
import { AuthServerAccessMode } from './model/AuthServerAccessMode';
import { AuthTypeEnum } from './model/AuthTypeEnum';
import { AuthorizedObjects } from './model/AuthorizedObjects';
import { AutoDisconnectOrLogoutControlOptions } from './model/AutoDisconnectOrLogoutControlOptions';
import { AutoInstallAppReq } from './model/AutoInstallAppReq';
import { AutoLockOptions } from './model/AutoLockOptions';
import { AutoscalePolicy } from './model/AutoscalePolicy';
import { AvailabilityZone } from './model/AvailabilityZone';
import { AzInfo } from './model/AzInfo';
import { BackupInfo } from './model/BackupInfo';
import { BaseError } from './model/BaseError';
import { BaseResponse } from './model/BaseResponse';
import { BatchActionDesktopsReq } from './model/BatchActionDesktopsReq';
import { BatchAddDesktopsTagsReq } from './model/BatchAddDesktopsTagsReq';
import { BatchAddDesktopsTagsRequest } from './model/BatchAddDesktopsTagsRequest';
import { BatchAddDesktopsTagsResponse } from './model/BatchAddDesktopsTagsResponse';
import { BatchAssignAppAuthorizationsReq } from './model/BatchAssignAppAuthorizationsReq';
import { BatchAssociateInstancesRequest } from './model/BatchAssociateInstancesRequest';
import { BatchAssociateInstancesResponse } from './model/BatchAssociateInstancesResponse';
import { BatchAttachInstancesReq } from './model/BatchAttachInstancesReq';
import { BatchAttachInstancesRequest } from './model/BatchAttachInstancesRequest';
import { BatchAttachInstancesResponse } from './model/BatchAttachInstancesResponse';
import { BatchAutoInstallAppsReq } from './model/BatchAutoInstallAppsReq';
import { BatchChangeDesktopNetworkReq } from './model/BatchChangeDesktopNetworkReq';
import { BatchChangeDesktopNetworkRequest } from './model/BatchChangeDesktopNetworkRequest';
import { BatchChangeDesktopNetworkResponse } from './model/BatchChangeDesktopNetworkResponse';
import { BatchChangeTagsRequest } from './model/BatchChangeTagsRequest';
import { BatchChangeTagsResponse } from './model/BatchChangeTagsResponse';
import { BatchCreateDesktopSnapshotReq } from './model/BatchCreateDesktopSnapshotReq';
import { BatchCreateDesktopSnapshotRequest } from './model/BatchCreateDesktopSnapshotRequest';
import { BatchCreateDesktopSnapshotResponse } from './model/BatchCreateDesktopSnapshotResponse';
import { BatchCreateUsersReq } from './model/BatchCreateUsersReq';
import { BatchCreateUsersRequest } from './model/BatchCreateUsersRequest';
import { BatchCreateUsersResponse } from './model/BatchCreateUsersResponse';
import { BatchDeleteAccessPoliciesReq } from './model/BatchDeleteAccessPoliciesReq';
import { BatchDeleteAccessPoliciesRequest } from './model/BatchDeleteAccessPoliciesRequest';
import { BatchDeleteAccessPoliciesResponse } from './model/BatchDeleteAccessPoliciesResponse';
import { BatchDeleteAppRulesRequest } from './model/BatchDeleteAppRulesRequest';
import { BatchDeleteAppRulesResponse } from './model/BatchDeleteAppRulesResponse';
import { BatchDeleteAppsReq } from './model/BatchDeleteAppsReq';
import { BatchDeleteAppsRequest } from './model/BatchDeleteAppsRequest';
import { BatchDeleteAppsResponse } from './model/BatchDeleteAppsResponse';
import { BatchDeleteDesktopNamePolicyReq } from './model/BatchDeleteDesktopNamePolicyReq';
import { BatchDeleteDesktopNamePolicyRequest } from './model/BatchDeleteDesktopNamePolicyRequest';
import { BatchDeleteDesktopNamePolicyResponse } from './model/BatchDeleteDesktopNamePolicyResponse';
import { BatchDeleteDesktopSnapshotReq } from './model/BatchDeleteDesktopSnapshotReq';
import { BatchDeleteDesktopSnapshotRequest } from './model/BatchDeleteDesktopSnapshotRequest';
import { BatchDeleteDesktopSnapshotResponse } from './model/BatchDeleteDesktopSnapshotResponse';
import { BatchDeleteDesktopsRequest } from './model/BatchDeleteDesktopsRequest';
import { BatchDeleteDesktopsResponse } from './model/BatchDeleteDesktopsResponse';
import { BatchDeleteDesktopsTagsReq } from './model/BatchDeleteDesktopsTagsReq';
import { BatchDeleteDesktopsTagsRequest } from './model/BatchDeleteDesktopsTagsRequest';
import { BatchDeleteDesktopsTagsResponse } from './model/BatchDeleteDesktopsTagsResponse';
import { BatchDeleteJobsRequest } from './model/BatchDeleteJobsRequest';
import { BatchDeleteJobsResponse } from './model/BatchDeleteJobsResponse';
import { BatchDeleteOtpDevicesRequest } from './model/BatchDeleteOtpDevicesRequest';
import { BatchDeleteOtpDevicesResponse } from './model/BatchDeleteOtpDevicesResponse';
import { BatchDeleteScheduledTasksRequest } from './model/BatchDeleteScheduledTasksRequest';
import { BatchDeleteScheduledTasksResponse } from './model/BatchDeleteScheduledTasksResponse';
import { BatchDeleteScreenRecordsRequest } from './model/BatchDeleteScreenRecordsRequest';
import { BatchDeleteScreenRecordsRequestBody } from './model/BatchDeleteScreenRecordsRequestBody';
import { BatchDeleteScreenRecordsRequestBodyScreenRecords } from './model/BatchDeleteScreenRecordsRequestBodyScreenRecords';
import { BatchDeleteScreenRecordsResponse } from './model/BatchDeleteScreenRecordsResponse';
import { BatchDeleteSubJobsRequest } from './model/BatchDeleteSubJobsRequest';
import { BatchDeleteSubJobsResponse } from './model/BatchDeleteSubJobsResponse';
import { BatchDeleteUserGroupsReq } from './model/BatchDeleteUserGroupsReq';
import { BatchDeleteUserGroupsRequest } from './model/BatchDeleteUserGroupsRequest';
import { BatchDeleteUserGroupsResponse } from './model/BatchDeleteUserGroupsResponse';
import { BatchDeleteUserReq } from './model/BatchDeleteUserReq';
import { BatchDeleteUserRequest } from './model/BatchDeleteUserRequest';
import { BatchDeleteUserResponse } from './model/BatchDeleteUserResponse';
import { BatchDetachInstancesReq } from './model/BatchDetachInstancesReq';
import { BatchDetachInstancesRequest } from './model/BatchDetachInstancesRequest';
import { BatchDetachInstancesResponse } from './model/BatchDetachInstancesResponse';
import { BatchDisableAppsRequest } from './model/BatchDisableAppsRequest';
import { BatchDisableAppsResponse } from './model/BatchDisableAppsResponse';
import { BatchDisassociateDesktopsEipReq } from './model/BatchDisassociateDesktopsEipReq';
import { BatchDisassociateDesktopsEipRequest } from './model/BatchDisassociateDesktopsEipRequest';
import { BatchDisassociateDesktopsEipResponse } from './model/BatchDisassociateDesktopsEipResponse';
import { BatchEnableAppsRequest } from './model/BatchEnableAppsRequest';
import { BatchEnableAppsResponse } from './model/BatchEnableAppsResponse';
import { BatchInquiryChangeRsp } from './model/BatchInquiryChangeRsp';
import { BatchInquiryCommonInfo } from './model/BatchInquiryCommonInfo';
import { BatchInstallAgentReq } from './model/BatchInstallAgentReq';
import { BatchInstallAgentRequest } from './model/BatchInstallAgentRequest';
import { BatchInstallAgentResponse } from './model/BatchInstallAgentResponse';
import { BatchInstallAppsRequest } from './model/BatchInstallAppsRequest';
import { BatchInstallAppsResponse } from './model/BatchInstallAppsResponse';
import { BatchLogoffDesktopsRequest } from './model/BatchLogoffDesktopsRequest';
import { BatchLogoffDesktopsResponse } from './model/BatchLogoffDesktopsResponse';
import { BatchOperateAppRulesReq } from './model/BatchOperateAppRulesReq';
import { BatchOperateAppsReq } from './model/BatchOperateAppsReq';
import { BatchOperateJobsReq } from './model/BatchOperateJobsReq';
import { BatchRebuildDesktopsSystemDiskRequest } from './model/BatchRebuildDesktopsSystemDiskRequest';
import { BatchRebuildDesktopsSystemDiskResponse } from './model/BatchRebuildDesktopsSystemDiskResponse';
import { BatchResInquiryResult } from './model/BatchResInquiryResult';
import { BatchRestoreDesktopSnapshotRequest } from './model/BatchRestoreDesktopSnapshotRequest';
import { BatchRestoreDesktopSnapshotResponse } from './model/BatchRestoreDesktopSnapshotResponse';
import { BatchRestoreSnapshotReq } from './model/BatchRestoreSnapshotReq';
import { BatchRunDesktopsRequest } from './model/BatchRunDesktopsRequest';
import { BatchRunDesktopsResponse } from './model/BatchRunDesktopsResponse';
import { BatchSetMaintenanceModeReq } from './model/BatchSetMaintenanceModeReq';
import { BatchUpdateAppAuthorizationsRequest } from './model/BatchUpdateAppAuthorizationsRequest';
import { BatchUpdateAppAuthorizationsResponse } from './model/BatchUpdateAppAuthorizationsResponse';
import { BatchUpdateTargetOfPolicyGroupRequest } from './model/BatchUpdateTargetOfPolicyGroupRequest';
import { BatchUpdateTargetOfPolicyGroupResponse } from './model/BatchUpdateTargetOfPolicyGroupResponse';
import { BillingResult } from './model/BillingResult';
import { BucketStore } from './model/BucketStore';
import { CancelRemoteAssistanceRequest } from './model/CancelRemoteAssistanceRequest';
import { CancelRemoteAssistanceResponse } from './model/CancelRemoteAssistanceResponse';
import { CancelWorkspaceRequest } from './model/CancelWorkspaceRequest';
import { CancelWorkspaceResponse } from './model/CancelWorkspaceResponse';
import { Catalog } from './model/Catalog';
import { CbcCallbackRsp } from './model/CbcCallbackRsp';
import { ChangeDesktopNetworkReq } from './model/ChangeDesktopNetworkReq';
import { ChangeDesktopNetworkRequest } from './model/ChangeDesktopNetworkRequest';
import { ChangeDesktopNetworkResponse } from './model/ChangeDesktopNetworkResponse';
import { ChangeDesktopToImageRequest } from './model/ChangeDesktopToImageRequest';
import { ChangeDesktopToImageResponse } from './model/ChangeDesktopToImageResponse';
import { ChangeUserPrivilegeGroupDesktopInfo } from './model/ChangeUserPrivilegeGroupDesktopInfo';
import { ChangeUserPrivilegeGroupReq } from './model/ChangeUserPrivilegeGroupReq';
import { ChangeUserPrivilegeGroupRequest } from './model/ChangeUserPrivilegeGroupRequest';
import { ChangeUserPrivilegeGroupResponse } from './model/ChangeUserPrivilegeGroupResponse';
import { ChangeUserPrivilegeGroupUserInfo } from './model/ChangeUserPrivilegeGroupUserInfo';
import { ChangeUserStatusRequest } from './model/ChangeUserStatusRequest';
import { ChangeUserStatusResponse } from './model/ChangeUserStatusResponse';
import { CloudServiceRatingResult } from './model/CloudServiceRatingResult';
import { ConnectDesktopsInfo } from './model/ConnectDesktopsInfo';
import { ControlItem } from './model/ControlItem';
import { CouponUnsubscribeResult } from './model/CouponUnsubscribeResult';
import { CreateAccessPolicyReq } from './model/CreateAccessPolicyReq';
import { CreateAccessPolicyRequest } from './model/CreateAccessPolicyRequest';
import { CreateAccessPolicyResponse } from './model/CreateAccessPolicyResponse';
import { CreateAgenciesReq } from './model/CreateAgenciesReq';
import { CreateAgenciesRequest } from './model/CreateAgenciesRequest';
import { CreateAgenciesResponse } from './model/CreateAgenciesResponse';
import { CreateAndAuthorizeBucketRequest } from './model/CreateAndAuthorizeBucketRequest';
import { CreateAndAuthorizeBucketResponse } from './model/CreateAndAuthorizeBucketResponse';
import { CreateAppRuleReq } from './model/CreateAppRuleReq';
import { CreateAppRuleRequest } from './model/CreateAppRuleRequest';
import { CreateAppRuleResponse } from './model/CreateAppRuleResponse';
import { CreateBatchChangeOrderRequestBody } from './model/CreateBatchChangeOrderRequestBody';
import { CreateBucketCredentialReq } from './model/CreateBucketCredentialReq';
import { CreateBucketCredentialRequest } from './model/CreateBucketCredentialRequest';
import { CreateBucketCredentialResponse } from './model/CreateBucketCredentialResponse';
import { CreateChangeImageOrderRequestBody } from './model/CreateChangeImageOrderRequestBody';
import { CreateChangeOrderReq } from './model/CreateChangeOrderReq';
import { CreateChangeOrderRequest } from './model/CreateChangeOrderRequest';
import { CreateChangeOrderResponse } from './model/CreateChangeOrderResponse';
import { CreateDeleteSubResourcesOrderRequestBody } from './model/CreateDeleteSubResourcesOrderRequestBody';
import { CreateDesktopBatchOrderRequest } from './model/CreateDesktopBatchOrderRequest';
import { CreateDesktopBatchOrderResponse } from './model/CreateDesktopBatchOrderResponse';
import { CreateDesktopNamePolicyReq } from './model/CreateDesktopNamePolicyReq';
import { CreateDesktopNamePolicyRequest } from './model/CreateDesktopNamePolicyRequest';
import { CreateDesktopNamePolicyResponse } from './model/CreateDesktopNamePolicyResponse';
import { CreateDesktopOrderRequest } from './model/CreateDesktopOrderRequest';
import { CreateDesktopOrderRequestBody } from './model/CreateDesktopOrderRequestBody';
import { CreateDesktopOrderResponse } from './model/CreateDesktopOrderResponse';
import { CreateDesktopPoolAuthorizedObjectsRequest } from './model/CreateDesktopPoolAuthorizedObjectsRequest';
import { CreateDesktopPoolAuthorizedObjectsRequestBody } from './model/CreateDesktopPoolAuthorizedObjectsRequestBody';
import { CreateDesktopPoolAuthorizedObjectsResponse } from './model/CreateDesktopPoolAuthorizedObjectsResponse';
import { CreateDesktopPoolChangeOrderRequest } from './model/CreateDesktopPoolChangeOrderRequest';
import { CreateDesktopPoolChangeOrderResponse } from './model/CreateDesktopPoolChangeOrderResponse';
import { CreateDesktopPoolReq } from './model/CreateDesktopPoolReq';
import { CreateDesktopPoolRequest } from './model/CreateDesktopPoolRequest';
import { CreateDesktopPoolResponse } from './model/CreateDesktopPoolResponse';
import { CreateDesktopReq } from './model/CreateDesktopReq';
import { CreateDesktopRequest } from './model/CreateDesktopRequest';
import { CreateDesktopResponse } from './model/CreateDesktopResponse';
import { CreateDesktopRsp } from './model/CreateDesktopRsp';
import { CreateDesktopUserRequest } from './model/CreateDesktopUserRequest';
import { CreateDesktopUserResponse } from './model/CreateDesktopUserResponse';
import { CreateExclusiveHostsReq } from './model/CreateExclusiveHostsReq';
import { CreateOrderReq } from './model/CreateOrderReq';
import { CreateOrderRequest } from './model/CreateOrderRequest';
import { CreateOrderResponse } from './model/CreateOrderResponse';
import { CreatePolicyGroupReq } from './model/CreatePolicyGroupReq';
import { CreatePolicyGroupRequest } from './model/CreatePolicyGroupRequest';
import { CreatePolicyGroupResponse } from './model/CreatePolicyGroupResponse';
import { CreateRemoteAssistanceRequest } from './model/CreateRemoteAssistanceRequest';
import { CreateRemoteAssistanceResponse } from './model/CreateRemoteAssistanceResponse';
import { CreateResizeOrderRequestBody } from './model/CreateResizeOrderRequestBody';
import { CreateScheduledTasksReq } from './model/CreateScheduledTasksReq';
import { CreateScheduledTasksRequest } from './model/CreateScheduledTasksRequest';
import { CreateScheduledTasksResponse } from './model/CreateScheduledTasksResponse';
import { CreateScriptReq } from './model/CreateScriptReq';
import { CreateScriptRequest } from './model/CreateScriptRequest';
import { CreateScriptResponse } from './model/CreateScriptResponse';
import { CreateSubnetBandwidthChangeOrderRequest } from './model/CreateSubnetBandwidthChangeOrderRequest';
import { CreateSubnetBandwidthChangeOrderRequestBody } from './model/CreateSubnetBandwidthChangeOrderRequestBody';
import { CreateSubnetBandwidthChangeOrderResponse } from './model/CreateSubnetBandwidthChangeOrderResponse';
import { CreateTagReq } from './model/CreateTagReq';
import { CreateTagRequest } from './model/CreateTagRequest';
import { CreateTagResponse } from './model/CreateTagResponse';
import { CreateTerminalsBindingDesktopsInfo } from './model/CreateTerminalsBindingDesktopsInfo';
import { CreateTerminalsBindingDesktopsRequest } from './model/CreateTerminalsBindingDesktopsRequest';
import { CreateTerminalsBindingDesktopsRequestBody } from './model/CreateTerminalsBindingDesktopsRequestBody';
import { CreateTerminalsBindingDesktopsResponse } from './model/CreateTerminalsBindingDesktopsResponse';
import { CreateUserGroupReq } from './model/CreateUserGroupReq';
import { CreateUserGroupRequest } from './model/CreateUserGroupRequest';
import { CreateUserGroupResponse } from './model/CreateUserGroupResponse';
import { CreateUserRequest } from './model/CreateUserRequest';
import { DataPointInfo } from './model/DataPointInfo';
import { Datapoints } from './model/Datapoints';
import { DelOtpDevicesReq } from './model/DelOtpDevicesReq';
import { DeleteAppRequest } from './model/DeleteAppRequest';
import { DeleteAppResponse } from './model/DeleteAppResponse';
import { DeleteAppRuleRequest } from './model/DeleteAppRuleRequest';
import { DeleteAppRuleResponse } from './model/DeleteAppRuleResponse';
import { DeleteDesktopPoolRequest } from './model/DeleteDesktopPoolRequest';
import { DeleteDesktopPoolResponse } from './model/DeleteDesktopPoolResponse';
import { DeleteDesktopPoolVolumesReq } from './model/DeleteDesktopPoolVolumesReq';
import { DeleteDesktopPoolVolumesRequest } from './model/DeleteDesktopPoolVolumesRequest';
import { DeleteDesktopPoolVolumesResponse } from './model/DeleteDesktopPoolVolumesResponse';
import { DeleteDesktopRequest } from './model/DeleteDesktopRequest';
import { DeleteDesktopResponse } from './model/DeleteDesktopResponse';
import { DeleteDesktopSubResourcesReq } from './model/DeleteDesktopSubResourcesReq';
import { DeleteDesktopSubResourcesRequest } from './model/DeleteDesktopSubResourcesRequest';
import { DeleteDesktopSubResourcesResponse } from './model/DeleteDesktopSubResourcesResponse';
import { DeleteDesktopVolumesRequest } from './model/DeleteDesktopVolumesRequest';
import { DeleteDesktopVolumesResponse } from './model/DeleteDesktopVolumesResponse';
import { DeleteDesktopsReq } from './model/DeleteDesktopsReq';
import { DeleteMetricNotifyRuleRequest } from './model/DeleteMetricNotifyRuleRequest';
import { DeleteMetricNotifyRuleResponse } from './model/DeleteMetricNotifyRuleResponse';
import { DeleteOuRequest } from './model/DeleteOuRequest';
import { DeleteOuResponse } from './model/DeleteOuResponse';
import { DeletePolicyGroupRequest } from './model/DeletePolicyGroupRequest';
import { DeletePolicyGroupResponse } from './model/DeletePolicyGroupResponse';
import { DeleteRestrictedRuleRequest } from './model/DeleteRestrictedRuleRequest';
import { DeleteRestrictedRuleResponse } from './model/DeleteRestrictedRuleResponse';
import { DeleteScheduledTasksReq } from './model/DeleteScheduledTasksReq';
import { DeleteScheduledTasksRequest } from './model/DeleteScheduledTasksRequest';
import { DeleteScheduledTasksResponse } from './model/DeleteScheduledTasksResponse';
import { DeleteScriptRequest } from './model/DeleteScriptRequest';
import { DeleteScriptResponse } from './model/DeleteScriptResponse';
import { DeleteSiteRequest } from './model/DeleteSiteRequest';
import { DeleteSiteResponse } from './model/DeleteSiteResponse';
import { DeleteSubJobsReq } from './model/DeleteSubJobsReq';
import { DeleteSubnetBandwidthRequest } from './model/DeleteSubnetBandwidthRequest';
import { DeleteSubnetBandwidthResponse } from './model/DeleteSubnetBandwidthResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTagResponse } from './model/DeleteTagResponse';
import { DeleteTerminalsBindingDesktopsRequest } from './model/DeleteTerminalsBindingDesktopsRequest';
import { DeleteTerminalsBindingDesktopsRequestBody } from './model/DeleteTerminalsBindingDesktopsRequestBody';
import { DeleteTerminalsBindingDesktopsResponse } from './model/DeleteTerminalsBindingDesktopsResponse';
import { DeleteTerminalsBindingDesktopsResult } from './model/DeleteTerminalsBindingDesktopsResult';
import { DeleteUserGroupRequest } from './model/DeleteUserGroupRequest';
import { DeleteUserGroupResponse } from './model/DeleteUserGroupResponse';
import { DeleteUserRequest } from './model/DeleteUserRequest';
import { DeleteUserResponse } from './model/DeleteUserResponse';
import { DeleteVolumesReq } from './model/DeleteVolumesReq';
import { Desktop } from './model/Desktop';
import { DesktopAction } from './model/DesktopAction';
import { DesktopDetailInfo } from './model/DesktopDetailInfo';
import { DesktopDimensionAttachInfo } from './model/DesktopDimensionAttachInfo';
import { DesktopLoginStatisticsRsp } from './model/DesktopLoginStatisticsRsp';
import { DesktopMetric } from './model/DesktopMetric';
import { DesktopMetricNotifyRecord } from './model/DesktopMetricNotifyRecord';
import { DesktopNamePolicyInfo } from './model/DesktopNamePolicyInfo';
import { DesktopNetworkResult } from './model/DesktopNetworkResult';
import { DesktopPoolActionReq } from './model/DesktopPoolActionReq';
import { DesktopPoolStatistics } from './model/DesktopPoolStatistics';
import { DesktopRunStatisticsRsp } from './model/DesktopRunStatisticsRsp';
import { DesktopSnapshotDetailInfo } from './model/DesktopSnapshotDetailInfo';
import { DesktopSubnet } from './model/DesktopSubnet';
import { DesktopTagsInfo } from './model/DesktopTagsInfo';
import { DesktopToImageReq } from './model/DesktopToImageReq';
import { DesktopUsedHoursInfo } from './model/DesktopUsedHoursInfo';
import { DesktopUsedInfo } from './model/DesktopUsedInfo';
import { DetachInstancesDesktopInfo } from './model/DetachInstancesDesktopInfo';
import { DetachInstancesReq } from './model/DetachInstancesReq';
import { DetachInstancesRequest } from './model/DetachInstancesRequest';
import { DetachInstancesResponse } from './model/DetachInstancesResponse';
import { DisableRuleRestrictionRequest } from './model/DisableRuleRestrictionRequest';
import { DisableRuleRestrictionResponse } from './model/DisableRuleRestrictionResponse';
import { DisconnectLogoutOptions } from './model/DisconnectLogoutOptions';
import { DiskSnapshotInfo } from './model/DiskSnapshotInfo';
import { DownloadAddressForList } from './model/DownloadAddressForList';
import { EditUserGroupRequest } from './model/EditUserGroupRequest';
import { EditUserReq } from './model/EditUserReq';
import { Eip } from './model/Eip';
import { Eips } from './model/Eips';
import { EnableRuleRestrictionRequest } from './model/EnableRuleRestrictionRequest';
import { EnableRuleRestrictionResponse } from './model/EnableRuleRestrictionResponse';
import { EstimateAddResourcesRequest } from './model/EstimateAddResourcesRequest';
import { EstimateAddResourcesResponse } from './model/EstimateAddResourcesResponse';
import { EstimateAddSubResourcesRequestBody } from './model/EstimateAddSubResourcesRequestBody';
import { EstimateAddVolumeRequestBody } from './model/EstimateAddVolumeRequestBody';
import { EstimateChangeImageRequestBody } from './model/EstimateChangeImageRequestBody';
import { EstimateChangeImagesRequest } from './model/EstimateChangeImagesRequest';
import { EstimateChangeImagesResponse } from './model/EstimateChangeImagesResponse';
import { EstimateDesktopPoolAddVolumeRequest } from './model/EstimateDesktopPoolAddVolumeRequest';
import { EstimateDesktopPoolAddVolumeResponse } from './model/EstimateDesktopPoolAddVolumeResponse';
import { EstimateDesktopPoolChangeImageRequest } from './model/EstimateDesktopPoolChangeImageRequest';
import { EstimateDesktopPoolChangeImageResponse } from './model/EstimateDesktopPoolChangeImageResponse';
import { EstimateDesktopPoolExtendVolumeRequest } from './model/EstimateDesktopPoolExtendVolumeRequest';
import { EstimateDesktopPoolExtendVolumeResponse } from './model/EstimateDesktopPoolExtendVolumeResponse';
import { EstimateDesktopPoolResizeRequest } from './model/EstimateDesktopPoolResizeRequest';
import { EstimateDesktopPoolResizeResponse } from './model/EstimateDesktopPoolResizeResponse';
import { EstimateExtendVolumeRequestBody } from './model/EstimateExtendVolumeRequestBody';
import { EstimateResizeRequestBody } from './model/EstimateResizeRequestBody';
import { ExecuteDesktopPoolActionRequest } from './model/ExecuteDesktopPoolActionRequest';
import { ExecuteDesktopPoolActionResponse } from './model/ExecuteDesktopPoolActionResponse';
import { ExecuteDesktopPoolScriptRequest } from './model/ExecuteDesktopPoolScriptRequest';
import { ExecuteDesktopPoolScriptResponse } from './model/ExecuteDesktopPoolScriptResponse';
import { ExecuteDesktopPoolScriptsReq } from './model/ExecuteDesktopPoolScriptsReq';
import { ExecuteScriptOrCommandReq } from './model/ExecuteScriptOrCommandReq';
import { ExecuteScriptOrCommandRequest } from './model/ExecuteScriptOrCommandRequest';
import { ExecuteScriptOrCommandResponse } from './model/ExecuteScriptOrCommandResponse';
import { ExpandDesktopPoolOrderReq } from './model/ExpandDesktopPoolOrderReq';
import { ExpandDesktopPoolReq } from './model/ExpandDesktopPoolReq';
import { ExpandDesktopPoolRequest } from './model/ExpandDesktopPoolRequest';
import { ExpandDesktopPoolResponse } from './model/ExpandDesktopPoolResponse';
import { ExpandDesktopPoolVolumesReq } from './model/ExpandDesktopPoolVolumesReq';
import { ExpandDesktopPoolVolumesRequest } from './model/ExpandDesktopPoolVolumesRequest';
import { ExpandDesktopPoolVolumesResponse } from './model/ExpandDesktopPoolVolumesResponse';
import { ExpandDesktopVolumeRequest } from './model/ExpandDesktopVolumeRequest';
import { ExpandDesktopVolumeResponse } from './model/ExpandDesktopVolumeResponse';
import { ExpandDesktopsVolumesReq } from './model/ExpandDesktopsVolumesReq';
import { ExpandVolumeReq } from './model/ExpandVolumeReq';
import { ExpandVolumesReq } from './model/ExpandVolumesReq';
import { ExpandVolumesRequest } from './model/ExpandVolumesRequest';
import { ExpandVolumesResponse } from './model/ExpandVolumesResponse';
import { ExportUserLoginInfoNewRequest } from './model/ExportUserLoginInfoNewRequest';
import { ExportUserLoginInfoNewResponse } from './model/ExportUserLoginInfoNewResponse';
import { FileStoreLink } from './model/FileStoreLink';
import { FileStoreTypeEnum } from './model/FileStoreTypeEnum';
import { FixedIp } from './model/FixedIp';
import { FlavorInfo } from './model/FlavorInfo';
import { FlavorLinkInfo } from './model/FlavorLinkInfo';
import { FunctionConfig } from './model/FunctionConfig';
import { HourPackage } from './model/HourPackage';
import { HourPackageInfo } from './model/HourPackageInfo';
import { HourPackageResource } from './model/HourPackageResource';
import { I18n } from './model/I18n';
import { I18nLanguage } from './model/I18nLanguage';
import { Image } from './model/Image';
import { ImageInfo } from './model/ImageInfo';
import { InstallAppRequest } from './model/InstallAppRequest';
import { InstallAppResponse } from './model/InstallAppResponse';
import { InstallType } from './model/InstallType';
import { InstanceStatusStatistics } from './model/InstanceStatusStatistics';
import { InterfacesConfig } from './model/InterfacesConfig';
import { InterfacesRequest } from './model/InterfacesRequest';
import { InternetInfo } from './model/InternetInfo';
import { IpInfo } from './model/IpInfo';
import { JobActionsReq } from './model/JobActionsReq';
import { JobDetailInfo } from './model/JobDetailInfo';
import { JobEntities } from './model/JobEntities';
import { JobStatus } from './model/JobStatus';
import { LdapConfig } from './model/LdapConfig';
import { ListAccessAddressBackupConfigRequest } from './model/ListAccessAddressBackupConfigRequest';
import { ListAccessAddressBackupConfigResponse } from './model/ListAccessAddressBackupConfigResponse';
import { ListAccessPoliciesRequest } from './model/ListAccessPoliciesRequest';
import { ListAccessPoliciesResponse } from './model/ListAccessPoliciesResponse';
import { ListAccessPolicyObjectsRequest } from './model/ListAccessPolicyObjectsRequest';
import { ListAccessPolicyObjectsResponse } from './model/ListAccessPolicyObjectsResponse';
import { ListAdOuUsersRequest } from './model/ListAdOuUsersRequest';
import { ListAdOuUsersResponse } from './model/ListAdOuUsersResponse';
import { ListAdOusRequest } from './model/ListAdOusRequest';
import { ListAdOusResponse } from './model/ListAdOusResponse';
import { ListAgenciesRequest } from './model/ListAgenciesRequest';
import { ListAgenciesResponse } from './model/ListAgenciesResponse';
import { ListAgentsInstallConditionRequest } from './model/ListAgentsInstallConditionRequest';
import { ListAgentsInstallConditionResponse } from './model/ListAgentsInstallConditionResponse';
import { ListAlarmStatisticsRequest } from './model/ListAlarmStatisticsRequest';
import { ListAlarmStatisticsResponse } from './model/ListAlarmStatisticsResponse';
import { ListAlarmsRequest } from './model/ListAlarmsRequest';
import { ListAlarmsResponse } from './model/ListAlarmsResponse';
import { ListAppAuthorizationsRequest } from './model/ListAppAuthorizationsRequest';
import { ListAppAuthorizationsResponse } from './model/ListAppAuthorizationsResponse';
import { ListAppCatalogsRequest } from './model/ListAppCatalogsRequest';
import { ListAppCatalogsResponse } from './model/ListAppCatalogsResponse';
import { ListAppRuleRequest } from './model/ListAppRuleRequest';
import { ListAppRuleResponse } from './model/ListAppRuleResponse';
import { ListAppUserAccessDataRequest } from './model/ListAppUserAccessDataRequest';
import { ListAppUserAccessDataResponse } from './model/ListAppUserAccessDataResponse';
import { ListAppsRequest } from './model/ListAppsRequest';
import { ListAppsResponse } from './model/ListAppsResponse';
import { ListAvailabilityZonesRequest } from './model/ListAvailabilityZonesRequest';
import { ListAvailabilityZonesResponse } from './model/ListAvailabilityZonesResponse';
import { ListAzsRequest } from './model/ListAzsRequest';
import { ListAzsResponse } from './model/ListAzsResponse';
import { ListDesktopActionsRequest } from './model/ListDesktopActionsRequest';
import { ListDesktopActionsResponse } from './model/ListDesktopActionsResponse';
import { ListDesktopByTagsRequest } from './model/ListDesktopByTagsRequest';
import { ListDesktopByTagsResponse } from './model/ListDesktopByTagsResponse';
import { ListDesktopNamePolicyRequest } from './model/ListDesktopNamePolicyRequest';
import { ListDesktopNamePolicyResponse } from './model/ListDesktopNamePolicyResponse';
import { ListDesktopOperationsRequest } from './model/ListDesktopOperationsRequest';
import { ListDesktopOperationsResponse } from './model/ListDesktopOperationsResponse';
import { ListDesktopPoolAuthorizedObjectsRequest } from './model/ListDesktopPoolAuthorizedObjectsRequest';
import { ListDesktopPoolAuthorizedObjectsResponse } from './model/ListDesktopPoolAuthorizedObjectsResponse';
import { ListDesktopPoolsRequest } from './model/ListDesktopPoolsRequest';
import { ListDesktopPoolsResponse } from './model/ListDesktopPoolsResponse';
import { ListDesktopSnapshotRequest } from './model/ListDesktopSnapshotRequest';
import { ListDesktopSnapshotResponse } from './model/ListDesktopSnapshotResponse';
import { ListDesktopUsageMetricRequest } from './model/ListDesktopUsageMetricRequest';
import { ListDesktopUsageMetricResponse } from './model/ListDesktopUsageMetricResponse';
import { ListDesktopsConnectStatusRequest } from './model/ListDesktopsConnectStatusRequest';
import { ListDesktopsConnectStatusResponse } from './model/ListDesktopsConnectStatusResponse';
import { ListDesktopsDetailRequest } from './model/ListDesktopsDetailRequest';
import { ListDesktopsDetailResponse } from './model/ListDesktopsDetailResponse';
import { ListDesktopsEipsRequest } from './model/ListDesktopsEipsRequest';
import { ListDesktopsEipsResponse } from './model/ListDesktopsEipsResponse';
import { ListDesktopsRequest } from './model/ListDesktopsRequest';
import { ListDesktopsResponse } from './model/ListDesktopsResponse';
import { ListDesktopsStatisticsRequest } from './model/ListDesktopsStatisticsRequest';
import { ListDesktopsStatisticsResponse } from './model/ListDesktopsStatisticsResponse';
import { ListDownloadAddressRequest } from './model/ListDownloadAddressRequest';
import { ListDownloadAddressRequestBody } from './model/ListDownloadAddressRequestBody';
import { ListDownloadAddressResponse } from './model/ListDownloadAddressResponse';
import { ListFutureExecutionsReq } from './model/ListFutureExecutionsReq';
import { ListFutureExecutionsRequest } from './model/ListFutureExecutionsRequest';
import { ListFutureExecutionsResponse } from './model/ListFutureExecutionsResponse';
import { ListHistoryOnlineInfoNewRequest } from './model/ListHistoryOnlineInfoNewRequest';
import { ListHistoryOnlineInfoNewResponse } from './model/ListHistoryOnlineInfoNewResponse';
import { ListHourPackagesTypeRequest } from './model/ListHourPackagesTypeRequest';
import { ListHourPackagesTypeResponse } from './model/ListHourPackagesTypeResponse';
import { ListImagesRequest } from './model/ListImagesRequest';
import { ListImagesResponse } from './model/ListImagesResponse';
import { ListInstancesStatusRequest } from './model/ListInstancesStatusRequest';
import { ListInstancesStatusResponse } from './model/ListInstancesStatusResponse';
import { ListInternetRequest } from './model/ListInternetRequest';
import { ListInternetResponse } from './model/ListInternetResponse';
import { ListItaSubJobsRequest } from './model/ListItaSubJobsRequest';
import { ListItaSubJobsResponse } from './model/ListItaSubJobsResponse';
import { ListJobsRequest } from './model/ListJobsRequest';
import { ListJobsResponse } from './model/ListJobsResponse';
import { ListLoginRecordsNewRequest } from './model/ListLoginRecordsNewRequest';
import { ListLoginRecordsNewResponse } from './model/ListLoginRecordsNewResponse';
import { ListLoginStateRequest } from './model/ListLoginStateRequest';
import { ListLoginStateResponse } from './model/ListLoginStateResponse';
import { ListMarketImagesRequest } from './model/ListMarketImagesRequest';
import { ListMarketImagesResponse } from './model/ListMarketImagesResponse';
import { ListMetricNotifyRecordRequest } from './model/ListMetricNotifyRecordRequest';
import { ListMetricNotifyRecordResponse } from './model/ListMetricNotifyRecordResponse';
import { ListMetricNotifyRuleRequest } from './model/ListMetricNotifyRuleRequest';
import { ListMetricNotifyRuleResponse } from './model/ListMetricNotifyRuleResponse';
import { ListMetricsRequest } from './model/ListMetricsRequest';
import { ListMetricsResponse } from './model/ListMetricsResponse';
import { ListMetricsTrendRequest } from './model/ListMetricsTrendRequest';
import { ListMetricsTrendResponse } from './model/ListMetricsTrendResponse';
import { ListNatGatewaysRequest } from './model/ListNatGatewaysRequest';
import { ListNatGatewaysResponse } from './model/ListNatGatewaysResponse';
import { ListNatMappingConfigsRequest } from './model/ListNatMappingConfigsRequest';
import { ListNatMappingConfigsResponse } from './model/ListNatMappingConfigsResponse';
import { ListOriginalPolicyInfoRequest } from './model/ListOriginalPolicyInfoRequest';
import { ListOriginalPolicyInfoResponse } from './model/ListOriginalPolicyInfoResponse';
import { ListOtpDevicesByUserIdRequest } from './model/ListOtpDevicesByUserIdRequest';
import { ListOtpDevicesByUserIdResponse } from './model/ListOtpDevicesByUserIdResponse';
import { ListOuDetailsRequest } from './model/ListOuDetailsRequest';
import { ListOuDetailsResponse } from './model/ListOuDetailsResponse';
import { ListPoliciesOfPolicyGroupRequest } from './model/ListPoliciesOfPolicyGroupRequest';
import { ListPoliciesOfPolicyGroupResponse } from './model/ListPoliciesOfPolicyGroupResponse';
import { ListPolicyDetailInfoByIdRequest } from './model/ListPolicyDetailInfoByIdRequest';
import { ListPolicyDetailInfoByIdResponse } from './model/ListPolicyDetailInfoByIdResponse';
import { ListPolicyGroupInfoRequest } from './model/ListPolicyGroupInfoRequest';
import { ListPolicyGroupInfoResponse } from './model/ListPolicyGroupInfoResponse';
import { ListPolicyGroupRequest } from './model/ListPolicyGroupRequest';
import { ListPolicyGroupResponse } from './model/ListPolicyGroupResponse';
import { ListPoolDesktopsDetailRequest } from './model/ListPoolDesktopsDetailRequest';
import { ListPoolDesktopsDetailResponse } from './model/ListPoolDesktopsDetailResponse';
import { ListPortsRequest } from './model/ListPortsRequest';
import { ListPortsResponse } from './model/ListPortsResponse';
import { ListProductsRequest } from './model/ListProductsRequest';
import { ListProductsResponse } from './model/ListProductsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListRestrictedRuleRequest } from './model/ListRestrictedRuleRequest';
import { ListRestrictedRuleResponse } from './model/ListRestrictedRuleResponse';
import { ListRunStateRequest } from './model/ListRunStateRequest';
import { ListRunStateResponse } from './model/ListRunStateResponse';
import { ListScheduledTasksRecordsDetailsRequest } from './model/ListScheduledTasksRecordsDetailsRequest';
import { ListScheduledTasksRecordsDetailsResponse } from './model/ListScheduledTasksRecordsDetailsResponse';
import { ListScheduledTasksRecordsRequest } from './model/ListScheduledTasksRecordsRequest';
import { ListScheduledTasksRecordsResponse } from './model/ListScheduledTasksRecordsResponse';
import { ListScheduledTasksRequest } from './model/ListScheduledTasksRequest';
import { ListScheduledTasksResponse } from './model/ListScheduledTasksResponse';
import { ListScreenRecordsRequest } from './model/ListScreenRecordsRequest';
import { ListScreenRecordsResponse } from './model/ListScreenRecordsResponse';
import { ListScriptRecordsRequest } from './model/ListScriptRecordsRequest';
import { ListScriptRecordsResponse } from './model/ListScriptRecordsResponse';
import { ListScriptTasksRequest } from './model/ListScriptTasksRequest';
import { ListScriptTasksResponse } from './model/ListScriptTasksResponse';
import { ListScriptsRequest } from './model/ListScriptsRequest';
import { ListScriptsResponse } from './model/ListScriptsResponse';
import { ListSharerProductsRequest } from './model/ListSharerProductsRequest';
import { ListSharerProductsResponse } from './model/ListSharerProductsResponse';
import { ListSiteConfigsRequest } from './model/ListSiteConfigsRequest';
import { ListSiteConfigsResponse } from './model/ListSiteConfigsResponse';
import { ListSubnetBandwidthsRequest } from './model/ListSubnetBandwidthsRequest';
import { ListSubnetBandwidthsResponse } from './model/ListSubnetBandwidthsResponse';
import { ListTargetOfPolicyGroupRequest } from './model/ListTargetOfPolicyGroupRequest';
import { ListTargetOfPolicyGroupResponse } from './model/ListTargetOfPolicyGroupResponse';
import { ListTenantConfigsRequest } from './model/ListTenantConfigsRequest';
import { ListTenantConfigsResponse } from './model/ListTenantConfigsResponse';
import { ListTenantProfilesRequest } from './model/ListTenantProfilesRequest';
import { ListTenantProfilesResponse } from './model/ListTenantProfilesResponse';
import { ListTerminalsBindingDesktopsConfigRequest } from './model/ListTerminalsBindingDesktopsConfigRequest';
import { ListTerminalsBindingDesktopsConfigResponse } from './model/ListTerminalsBindingDesktopsConfigResponse';
import { ListTerminalsBindingDesktopsRequest } from './model/ListTerminalsBindingDesktopsRequest';
import { ListTerminalsBindingDesktopsResponse } from './model/ListTerminalsBindingDesktopsResponse';
import { ListTimeZonesRequest } from './model/ListTimeZonesRequest';
import { ListTimeZonesResponse } from './model/ListTimeZonesResponse';
import { ListUnusedDesktopsRequest } from './model/ListUnusedDesktopsRequest';
import { ListUnusedDesktopsResponse } from './model/ListUnusedDesktopsResponse';
import { ListUsedDesktopInfoReq } from './model/ListUsedDesktopInfoReq';
import { ListUsedDesktopInfoRequest } from './model/ListUsedDesktopInfoRequest';
import { ListUsedDesktopInfoResponse } from './model/ListUsedDesktopInfoResponse';
import { ListUserDetailRequest } from './model/ListUserDetailRequest';
import { ListUserDetailResponse } from './model/ListUserDetailResponse';
import { ListUserEventsLtsConfigurationsRequest } from './model/ListUserEventsLtsConfigurationsRequest';
import { ListUserEventsLtsConfigurationsResponse } from './model/ListUserEventsLtsConfigurationsResponse';
import { ListUserEventsRequest } from './model/ListUserEventsRequest';
import { ListUserEventsResponse } from './model/ListUserEventsResponse';
import { ListUserGroupsRequest } from './model/ListUserGroupsRequest';
import { ListUserGroupsResponse } from './model/ListUserGroupsResponse';
import { ListUserUsageMetricRequest } from './model/ListUserUsageMetricRequest';
import { ListUserUsageMetricResponse } from './model/ListUserUsageMetricResponse';
import { ListUsersOfGroupRequest } from './model/ListUsersOfGroupRequest';
import { ListUsersOfGroupResponse } from './model/ListUsersOfGroupResponse';
import { ListUsersRequest } from './model/ListUsersRequest';
import { ListUsersResponse } from './model/ListUsersResponse';
import { ListVolumeProductInfoRequest } from './model/ListVolumeProductInfoRequest';
import { ListVolumeProductInfoResponse } from './model/ListVolumeProductInfoResponse';
import { ListWksEdgeSitesRequest } from './model/ListWksEdgeSitesRequest';
import { ListWksEdgeSitesResponse } from './model/ListWksEdgeSitesResponse';
import { ListWorkspacesRequest } from './model/ListWorkspacesRequest';
import { ListWorkspacesResponse } from './model/ListWorkspacesResponse';
import { LogoffDesktopsReq } from './model/LogoffDesktopsReq';
import { MapObject } from './model/MapObject';
import { Match } from './model/Match';
import { Metric } from './model/Metric';
import { MetricNotifyRule } from './model/MetricNotifyRule';
import { MetricsWithTime } from './model/MetricsWithTime';
import { ModifyDesktopAttributesReq } from './model/ModifyDesktopAttributesReq';
import { ModifyDesktopAttributesReqDesktop } from './model/ModifyDesktopAttributesReqDesktop';
import { ModifyEnterpriseIdReq } from './model/ModifyEnterpriseIdReq';
import { ModifyOuNameInfoV2Req } from './model/ModifyOuNameInfoV2Req';
import { ModifyPolicyGroupRequest } from './model/ModifyPolicyGroupRequest';
import { ModifyPolicyRequest } from './model/ModifyPolicyRequest';
import { ModifyPolicyTargetReq } from './model/ModifyPolicyTargetReq';
import { ModifyWorkspaceAttributesReq } from './model/ModifyWorkspaceAttributesReq';
import { MonitorUserOnlineInfo } from './model/MonitorUserOnlineInfo';
import { NatGateway } from './model/NatGateway';
import { NatMappingConfig } from './model/NatMappingConfig';
import { NetworkConfig } from './model/NetworkConfig';
import { NetworkConfigReq } from './model/NetworkConfigReq';
import { NetworkInfo } from './model/NetworkInfo';
import { NeutronPort } from './model/NeutronPort';
import { Nic } from './model/Nic';
import { ObsCredential } from './model/ObsCredential';
import { ObsPolicy } from './model/ObsPolicy';
import { ObsPolicyStatement } from './model/ObsPolicyStatement';
import { OfficialWebsiteRatingResult } from './model/OfficialWebsiteRatingResult';
import { OperateUserReq } from './model/OperateUserReq';
import { OperationForList } from './model/OperationForList';
import { OptionalDiscountRatingResult } from './model/OptionalDiscountRatingResult';
import { OrderExtendParam } from './model/OrderExtendParam';
import { OrderV5 } from './model/OrderV5';
import { OsTypeEnum } from './model/OsTypeEnum';
import { OtpConfigInfo } from './model/OtpConfigInfo';
import { OtpDevice } from './model/OtpDevice';
import { OuNameInfo } from './model/OuNameInfo';
import { PageResp } from './model/PageResp';
import { PathRule } from './model/PathRule';
import { PeriodBatchUpChangeResourceRsp } from './model/PeriodBatchUpChangeResourceRsp';
import { PlatformTypeEnum } from './model/PlatformTypeEnum';
import { Policies } from './model/Policies';
import { PoliciesAudio } from './model/PoliciesAudio';
import { PoliciesClient } from './model/PoliciesClient';
import { PoliciesClientAutocloseMonitorOptions } from './model/PoliciesClientAutocloseMonitorOptions';
import { PoliciesClientClientType } from './model/PoliciesClientClientType';
import { PoliciesClientClientTypeOptions } from './model/PoliciesClientClientTypeOptions';
import { PoliciesCustom } from './model/PoliciesCustom';
import { PoliciesCustomOptions } from './model/PoliciesCustomOptions';
import { PoliciesDisplay } from './model/PoliciesDisplay';
import { PoliciesDisplayAdaptiveBitrateControlOptions } from './model/PoliciesDisplayAdaptiveBitrateControlOptions';
import { PoliciesDisplayOptions } from './model/PoliciesDisplayOptions';
import { PoliciesDisplayOptionsDeepCompressionOptions } from './model/PoliciesDisplayOptionsDeepCompressionOptions';
import { PoliciesDisplayOptionsVideoBitRateOptions } from './model/PoliciesDisplayOptionsVideoBitRateOptions';
import { PoliciesDisplayOptionsVideoQualityOptions } from './model/PoliciesDisplayOptionsVideoQualityOptions';
import { PoliciesDisplayRenderingAccelerationOptions } from './model/PoliciesDisplayRenderingAccelerationOptions';
import { PoliciesFileAndClipboard } from './model/PoliciesFileAndClipboard';
import { PoliciesFileAndClipboardClipboardRedirectionOptions } from './model/PoliciesFileAndClipboardClipboardRedirectionOptions';
import { PoliciesFileAndClipboardFileRedirection } from './model/PoliciesFileAndClipboardFileRedirection';
import { PoliciesFileAndClipboardFileRedirectionOptions } from './model/PoliciesFileAndClipboardFileRedirectionOptions';
import { PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions } from './model/PoliciesFileAndClipboardFileRedirectionOptionsCompressionSwitchOptions';
import { PoliciesFileAndClipboardFileRedirectionOptionsFluidControlOptions } from './model/PoliciesFileAndClipboardFileRedirectionOptionsFluidControlOptions';
import { PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions } from './model/PoliciesFileAndClipboardFileRedirectionOptionsLinuxFileSizeSupportedOptions';
import { PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions } from './model/PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions';
import { PoliciesKeyboardMouse } from './model/PoliciesKeyboardMouse';
import { PoliciesPeripherals } from './model/PoliciesPeripherals';
import { PoliciesPeripheralsDeviceRedirection } from './model/PoliciesPeripheralsDeviceRedirection';
import { PoliciesPeripheralsDeviceRedirectionCameraRedirection } from './model/PoliciesPeripheralsDeviceRedirectionCameraRedirection';
import { PoliciesPeripheralsDeviceRedirectionCameraRedirectionOptions } from './model/PoliciesPeripheralsDeviceRedirectionCameraRedirectionOptions';
import { PoliciesPeripheralsDeviceRedirectionHidRedirection } from './model/PoliciesPeripheralsDeviceRedirectionHidRedirection';
import { PoliciesPeripheralsDeviceRedirectionHidRedirectionOptions } from './model/PoliciesPeripheralsDeviceRedirectionHidRedirectionOptions';
import { PoliciesPeripheralsDeviceRedirectionPrinterRedirection } from './model/PoliciesPeripheralsDeviceRedirectionPrinterRedirection';
import { PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions } from './model/PoliciesPeripheralsDeviceRedirectionPrinterRedirectionOptions';
import { PoliciesPeripheralsDeviceRedirectionSessionPrinter } from './model/PoliciesPeripheralsDeviceRedirectionSessionPrinter';
import { PoliciesPeripheralsDeviceRedirectionSessionPrinterOptions } from './model/PoliciesPeripheralsDeviceRedirectionSessionPrinterOptions';
import { PoliciesPeripheralsDriverInterfaceRedirection } from './model/PoliciesPeripheralsDriverInterfaceRedirection';
import { PoliciesPeripheralsParallelPortRedirection } from './model/PoliciesPeripheralsParallelPortRedirection';
import { PoliciesPeripheralsSerialPortRedirection } from './model/PoliciesPeripheralsSerialPortRedirection';
import { PoliciesPeripheralsSerialPortRedirectionOptions } from './model/PoliciesPeripheralsSerialPortRedirectionOptions';
import { PoliciesPeripheralsUsbDeviceCommon } from './model/PoliciesPeripheralsUsbDeviceCommon';
import { PoliciesPeripheralsUsbDeviceCommonCommonOptions } from './model/PoliciesPeripheralsUsbDeviceCommonCommonOptions';
import { PoliciesPeripheralsUsbPortRedirection } from './model/PoliciesPeripheralsUsbPortRedirection';
import { PoliciesPeripheralsUsbPortRedirectionOptions } from './model/PoliciesPeripheralsUsbPortRedirectionOptions';
import { PoliciesPersonalizedDataMgmt } from './model/PoliciesPersonalizedDataMgmt';
import { PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions } from './model/PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions';
import { PoliciesPersonalizedDataMgmtUserDataRoamingOptions } from './model/PoliciesPersonalizedDataMgmtUserDataRoamingOptions';
import { PoliciesPersonalizedDataMgmtUserFolderRedirectionOptions } from './model/PoliciesPersonalizedDataMgmtUserFolderRedirectionOptions';
import { PoliciesRecordAudit } from './model/PoliciesRecordAudit';
import { PoliciesRecordAuditRules } from './model/PoliciesRecordAuditRules';
import { PoliciesSeamless } from './model/PoliciesSeamless';
import { PoliciesSeamlessOptions } from './model/PoliciesSeamlessOptions';
import { PolicyGroup } from './model/PolicyGroup';
import { PolicyGroupForCreate } from './model/PolicyGroupForCreate';
import { PolicyGroupForList } from './model/PolicyGroupForList';
import { PolicyGroupForUpdate } from './model/PolicyGroupForUpdate';
import { PoolDesktopsDetailInfo } from './model/PoolDesktopsDetailInfo';
import { Port } from './model/Port';
import { PreBatchAttachInstancesReq } from './model/PreBatchAttachInstancesReq';
import { Product } from './model/Product';
import { ProductInfo } from './model/ProductInfo';
import { ProductResult } from './model/ProductResult';
import { ProductRule } from './model/ProductRule';
import { PublicIp } from './model/PublicIp';
import { QueryDesktopByTagReq } from './model/QueryDesktopByTagReq';
import { QuotaNoLimit } from './model/QuotaNoLimit';
import { RadiusGatewayConfig } from './model/RadiusGatewayConfig';
import { RadiusGatewayConfigInfo } from './model/RadiusGatewayConfigInfo';
import { RebuildDesktopPoolReq } from './model/RebuildDesktopPoolReq';
import { RebuildDesktopPoolRequest } from './model/RebuildDesktopPoolRequest';
import { RebuildDesktopPoolResponse } from './model/RebuildDesktopPoolResponse';
import { RebuildDesktopsReq } from './model/RebuildDesktopsReq';
import { ReceiveModeEnum } from './model/ReceiveModeEnum';
import { Record } from './model/Record';
import { RecordAuditRule } from './model/RecordAuditRule';
import { RegisterDomainRequest } from './model/RegisterDomainRequest';
import { RegisterDomainResponse } from './model/RegisterDomainResponse';
import { ResendEmailReq } from './model/ResendEmailReq';
import { ResetRandomPasswordRequest } from './model/ResetRandomPasswordRequest';
import { ResetRandomPasswordResponse } from './model/ResetRandomPasswordResponse';
import { ResizeDesktopData } from './model/ResizeDesktopData';
import { ResizeDesktopJobResponse } from './model/ResizeDesktopJobResponse';
import { ResizeDesktopPoolJobResponse } from './model/ResizeDesktopPoolJobResponse';
import { ResizeDesktopPoolReq } from './model/ResizeDesktopPoolReq';
import { ResizeDesktopPoolRequest } from './model/ResizeDesktopPoolRequest';
import { ResizeDesktopPoolResponse } from './model/ResizeDesktopPoolResponse';
import { ResizeDesktopReq } from './model/ResizeDesktopReq';
import { ResizeDesktopRequest } from './model/ResizeDesktopRequest';
import { ResizeDesktopResponse } from './model/ResizeDesktopResponse';
import { ResizeExclusiveLitesReq } from './model/ResizeExclusiveLitesReq';
import { Resource } from './model/Resource';
import { ResourceNoLimit } from './model/ResourceNoLimit';
import { ResourcePackageDescription } from './model/ResourcePackageDescription';
import { RetryJobsRequest } from './model/RetryJobsRequest';
import { RetryJobsResponse } from './model/RetryJobsResponse';
import { RetryScriptExecutionReq } from './model/RetryScriptExecutionReq';
import { RetryScriptExecutionRequest } from './model/RetryScriptExecutionRequest';
import { RetryScriptExecutionResponse } from './model/RetryScriptExecutionResponse';
import { Rule } from './model/Rule';
import { RuleScope } from './model/RuleScope';
import { RunActionsOnGroupRequest } from './model/RunActionsOnGroupRequest';
import { RunActionsOnGroupResponse } from './model/RunActionsOnGroupResponse';
import { RunActionsOnWorkspaceJobRequest } from './model/RunActionsOnWorkspaceJobRequest';
import { RunActionsOnWorkspaceJobResponse } from './model/RunActionsOnWorkspaceJobResponse';
import { ScheduledTask } from './model/ScheduledTask';
import { ScheduledTaskConfig } from './model/ScheduledTaskConfig';
import { ScheduledTasksRecords } from './model/ScheduledTasksRecords';
import { ScheduledTasksRecordsDetails } from './model/ScheduledTasksRecordsDetails';
import { ScreenRecordDetail } from './model/ScreenRecordDetail';
import { Script } from './model/Script';
import { ScriptExecutionTask } from './model/ScriptExecutionTask';
import { ScriptRecordSimpleInfo } from './model/ScriptRecordSimpleInfo';
import { ScriptSimpleInfo } from './model/ScriptSimpleInfo';
import { ScriptTaskInfo } from './model/ScriptTaskInfo';
import { ScriptTaskInfoTaskScripts } from './model/ScriptTaskInfoTaskScripts';
import { SecurityGroup } from './model/SecurityGroup';
import { SecurityGroupInfo } from './model/SecurityGroupInfo';
import { SendDesktopPoolNotificationsReq } from './model/SendDesktopPoolNotificationsReq';
import { SendDesktopPoolNotificationsRequest } from './model/SendDesktopPoolNotificationsRequest';
import { SendDesktopPoolNotificationsResponse } from './model/SendDesktopPoolNotificationsResponse';
import { SendEmailRequest } from './model/SendEmailRequest';
import { SendEmailResponse } from './model/SendEmailResponse';
import { SendNotificationsReq } from './model/SendNotificationsReq';
import { SendNotificationsRequest } from './model/SendNotificationsRequest';
import { SendNotificationsResponse } from './model/SendNotificationsResponse';
import { Session } from './model/Session';
import { SetMaintenanceModeRequest } from './model/SetMaintenanceModeRequest';
import { SetMaintenanceModeResponse } from './model/SetMaintenanceModeResponse';
import { SetRuleRestrictionReq } from './model/SetRuleRestrictionReq';
import { SetRuleRestrictionRequest } from './model/SetRuleRestrictionRequest';
import { SetRuleRestrictionResponse } from './model/SetRuleRestrictionResponse';
import { SetUserEventsLtsConfigurationsRequest } from './model/SetUserEventsLtsConfigurationsRequest';
import { SetUserEventsLtsConfigurationsRequestBody } from './model/SetUserEventsLtsConfigurationsRequestBody';
import { SetUserEventsLtsConfigurationsResponse } from './model/SetUserEventsLtsConfigurationsResponse';
import { SharerProductInfo } from './model/SharerProductInfo';
import { ShowAssistAuthConfigRequest } from './model/ShowAssistAuthConfigRequest';
import { ShowAssistAuthConfigResponse } from './model/ShowAssistAuthConfigResponse';
import { ShowAuthConfigRequest } from './model/ShowAuthConfigRequest';
import { ShowAuthConfigResponse } from './model/ShowAuthConfigResponse';
import { ShowAvailableIpRequest } from './model/ShowAvailableIpRequest';
import { ShowAvailableIpResponse } from './model/ShowAvailableIpResponse';
import { ShowAzDetailsRequest } from './model/ShowAzDetailsRequest';
import { ShowAzDetailsResponse } from './model/ShowAzDetailsResponse';
import { ShowDesktopDetailRequest } from './model/ShowDesktopDetailRequest';
import { ShowDesktopDetailResponse } from './model/ShowDesktopDetailResponse';
import { ShowDesktopMonitorDataRequest } from './model/ShowDesktopMonitorDataRequest';
import { ShowDesktopMonitorDataResponse } from './model/ShowDesktopMonitorDataResponse';
import { ShowDesktopNetworkRequest } from './model/ShowDesktopNetworkRequest';
import { ShowDesktopNetworkResponse } from './model/ShowDesktopNetworkResponse';
import { ShowDesktopNetworksRequest } from './model/ShowDesktopNetworksRequest';
import { ShowDesktopNetworksResponse } from './model/ShowDesktopNetworksResponse';
import { ShowDesktopPoolDetailRequest } from './model/ShowDesktopPoolDetailRequest';
import { ShowDesktopPoolDetailResponse } from './model/ShowDesktopPoolDetailResponse';
import { ShowDesktopPoolsScriptExecTasksRequest } from './model/ShowDesktopPoolsScriptExecTasksRequest';
import { ShowDesktopPoolsScriptExecTasksResponse } from './model/ShowDesktopPoolsScriptExecTasksResponse';
import { ShowDesktopRemoteAssistanceInfoRequest } from './model/ShowDesktopRemoteAssistanceInfoRequest';
import { ShowDesktopRemoteAssistanceInfoResponse } from './model/ShowDesktopRemoteAssistanceInfoResponse';
import { ShowGrowthRateRequest } from './model/ShowGrowthRateRequest';
import { ShowGrowthRateResponse } from './model/ShowGrowthRateResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowQuotaDetailsRequest } from './model/ShowQuotaDetailsRequest';
import { ShowQuotaDetailsResponse } from './model/ShowQuotaDetailsResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowRemoteConsoleAddressRequest } from './model/ShowRemoteConsoleAddressRequest';
import { ShowRemoteConsoleAddressResponse } from './model/ShowRemoteConsoleAddressResponse';
import { ShowRuleRestrictionRequest } from './model/ShowRuleRestrictionRequest';
import { ShowRuleRestrictionResponse } from './model/ShowRuleRestrictionResponse';
import { ShowScheduledTasksRequest } from './model/ShowScheduledTasksRequest';
import { ShowScheduledTasksResponse } from './model/ShowScheduledTasksResponse';
import { ShowScreenRecordRequest } from './model/ShowScreenRecordRequest';
import { ShowScreenRecordResponse } from './model/ShowScreenRecordResponse';
import { ShowScriptDetailRequest } from './model/ShowScriptDetailRequest';
import { ShowScriptDetailResponse } from './model/ShowScriptDetailResponse';
import { ShowScriptRecordDetailRequest } from './model/ShowScriptRecordDetailRequest';
import { ShowScriptRecordDetailResponse } from './model/ShowScriptRecordDetailResponse';
import { ShowShareSpaceConfigRequest } from './model/ShowShareSpaceConfigRequest';
import { ShowShareSpaceConfigResponse } from './model/ShowShareSpaceConfigResponse';
import { ShowSubnetBandwidthControlListRequest } from './model/ShowSubnetBandwidthControlListRequest';
import { ShowSubnetBandwidthControlListResponse } from './model/ShowSubnetBandwidthControlListResponse';
import { ShowSysprepInfoRequest } from './model/ShowSysprepInfoRequest';
import { ShowSysprepInfoResponse } from './model/ShowSysprepInfoResponse';
import { ShowTagByDesktopIdRequest } from './model/ShowTagByDesktopIdRequest';
import { ShowTagByDesktopIdResponse } from './model/ShowTagByDesktopIdResponse';
import { ShowUserAccessStagesRequest } from './model/ShowUserAccessStagesRequest';
import { ShowUserAccessStagesResponse } from './model/ShowUserAccessStagesResponse';
import { ShowUsingSubnetsRequest } from './model/ShowUsingSubnetsRequest';
import { ShowUsingSubnetsResponse } from './model/ShowUsingSubnetsResponse';
import { ShowWorkspaceLockRequest } from './model/ShowWorkspaceLockRequest';
import { ShowWorkspaceLockResponse } from './model/ShowWorkspaceLockResponse';
import { SimpleDesktopInfo } from './model/SimpleDesktopInfo';
import { SimpleDesktopPoolInfo } from './model/SimpleDesktopPoolInfo';
import { SimpleProduct } from './model/SimpleProduct';
import { SimpleResource } from './model/SimpleResource';
import { SimpleResourceNoUsed } from './model/SimpleResourceNoUsed';
import { SimpleSiteInfo } from './model/SimpleSiteInfo';
import { SiteConfigsRequest } from './model/SiteConfigsRequest';
import { SiteConfigsResponse } from './model/SiteConfigsResponse';
import { SiteInfo } from './model/SiteInfo';
import { SiteQuotaNoLimit } from './model/SiteQuotaNoLimit';
import { SoldOutInfo } from './model/SoldOutInfo';
import { StopScriptExecutionReq } from './model/StopScriptExecutionReq';
import { StopScriptExecutionRequest } from './model/StopScriptExecutionRequest';
import { StopScriptExecutionResponse } from './model/StopScriptExecutionResponse';
import { StringSet } from './model/StringSet';
import { Subnet } from './model/Subnet';
import { SubnetBandwidthDetail } from './model/SubnetBandwidthDetail';
import { SubnetInfo } from './model/SubnetInfo';
import { SubscribeUserSharerReq } from './model/SubscribeUserSharerReq';
import { Tag } from './model/Tag';
import { TagKeyValue } from './model/TagKeyValue';
import { TagResource } from './model/TagResource';
import { Tags } from './model/Tags';
import { TagsReq } from './model/TagsReq';
import { Target } from './model/Target';
import { TerminalsBindingDesktopsConfig } from './model/TerminalsBindingDesktopsConfig';
import { TerminalsBindingDesktopsInfo } from './model/TerminalsBindingDesktopsInfo';
import { ThirdPartyAuthConfig } from './model/ThirdPartyAuthConfig';
import { Timezones } from './model/Timezones';
import { TlsConfig } from './model/TlsConfig';
import { UnlockWorkspaceRequest } from './model/UnlockWorkspaceRequest';
import { UnlockWorkspaceRequestBody } from './model/UnlockWorkspaceRequestBody';
import { UnlockWorkspaceResponse } from './model/UnlockWorkspaceResponse';
import { UnusedDesktopInfo } from './model/UnusedDesktopInfo';
import { UpdateAccessAddressBackupConfigReq } from './model/UpdateAccessAddressBackupConfigReq';
import { UpdateAccessAddressBackupConfigRequest } from './model/UpdateAccessAddressBackupConfigRequest';
import { UpdateAccessAddressBackupConfigResponse } from './model/UpdateAccessAddressBackupConfigResponse';
import { UpdateAccessModeReq } from './model/UpdateAccessModeReq';
import { UpdateAccessModeRequest } from './model/UpdateAccessModeRequest';
import { UpdateAccessModeResponse } from './model/UpdateAccessModeResponse';
import { UpdateAccessPolicyObjectsReq } from './model/UpdateAccessPolicyObjectsReq';
import { UpdateAccessPolicyObjectsRequest } from './model/UpdateAccessPolicyObjectsRequest';
import { UpdateAccessPolicyObjectsResponse } from './model/UpdateAccessPolicyObjectsResponse';
import { UpdateAccessPolicyReq } from './model/UpdateAccessPolicyReq';
import { UpdateAccessPolicyRequest } from './model/UpdateAccessPolicyRequest';
import { UpdateAccessPolicyResponse } from './model/UpdateAccessPolicyResponse';
import { UpdateAppAuthorizationsRequest } from './model/UpdateAppAuthorizationsRequest';
import { UpdateAppAuthorizationsResponse } from './model/UpdateAppAuthorizationsResponse';
import { UpdateAppReq } from './model/UpdateAppReq';
import { UpdateAppRuleReq } from './model/UpdateAppRuleReq';
import { UpdateAppRuleRequest } from './model/UpdateAppRuleRequest';
import { UpdateAppRuleResponse } from './model/UpdateAppRuleResponse';
import { UpdateAssistAuthMethodConfigRequest } from './model/UpdateAssistAuthMethodConfigRequest';
import { UpdateAssistAuthMethodConfigResponse } from './model/UpdateAssistAuthMethodConfigResponse';
import { UpdateAuthMethodConfigRequest } from './model/UpdateAuthMethodConfigRequest';
import { UpdateAuthMethodConfigResponse } from './model/UpdateAuthMethodConfigResponse';
import { UpdateDesktopNamePolicyReq } from './model/UpdateDesktopNamePolicyReq';
import { UpdateDesktopNamePolicyRequest } from './model/UpdateDesktopNamePolicyRequest';
import { UpdateDesktopNamePolicyResponse } from './model/UpdateDesktopNamePolicyResponse';
import { UpdateDesktopPoolAttributesReq } from './model/UpdateDesktopPoolAttributesReq';
import { UpdateDesktopPoolRequest } from './model/UpdateDesktopPoolRequest';
import { UpdateDesktopPoolResponse } from './model/UpdateDesktopPoolResponse';
import { UpdateDesktopRequest } from './model/UpdateDesktopRequest';
import { UpdateDesktopResponse } from './model/UpdateDesktopResponse';
import { UpdateDesktopSidReq } from './model/UpdateDesktopSidReq';
import { UpdateDesktopSidsRequest } from './model/UpdateDesktopSidsRequest';
import { UpdateDesktopSidsResponse } from './model/UpdateDesktopSidsResponse';
import { UpdateDesktopUsernameReq } from './model/UpdateDesktopUsernameReq';
import { UpdateDesktopUsernameRequest } from './model/UpdateDesktopUsernameRequest';
import { UpdateDesktopUsernameResponse } from './model/UpdateDesktopUsernameResponse';
import { UpdateEnterpriseIdRequest } from './model/UpdateEnterpriseIdRequest';
import { UpdateEnterpriseIdResponse } from './model/UpdateEnterpriseIdResponse';
import { UpdateMetricNotifyRuleReq } from './model/UpdateMetricNotifyRuleReq';
import { UpdateMetricNotifyRuleRequest } from './model/UpdateMetricNotifyRuleRequest';
import { UpdateMetricNotifyRuleResponse } from './model/UpdateMetricNotifyRuleResponse';
import { UpdateNatMappingConfig } from './model/UpdateNatMappingConfig';
import { UpdateNatMappingConfigsReq } from './model/UpdateNatMappingConfigsReq';
import { UpdateNatMappingConfigsRequest } from './model/UpdateNatMappingConfigsRequest';
import { UpdateNatMappingConfigsResponse } from './model/UpdateNatMappingConfigsResponse';
import { UpdateOuInfoRequest } from './model/UpdateOuInfoRequest';
import { UpdateOuInfoResponse } from './model/UpdateOuInfoResponse';
import { UpdatePoliciesOfPolicyGroupRequest } from './model/UpdatePoliciesOfPolicyGroupRequest';
import { UpdatePoliciesOfPolicyGroupResponse } from './model/UpdatePoliciesOfPolicyGroupResponse';
import { UpdatePolicyGroupRequest } from './model/UpdatePolicyGroupRequest';
import { UpdatePolicyGroupResponse } from './model/UpdatePolicyGroupResponse';
import { UpdateScheduledTasksReq } from './model/UpdateScheduledTasksReq';
import { UpdateScheduledTasksRequest } from './model/UpdateScheduledTasksRequest';
import { UpdateScheduledTasksResponse } from './model/UpdateScheduledTasksResponse';
import { UpdateScriptReq } from './model/UpdateScriptReq';
import { UpdateScriptRequest } from './model/UpdateScriptRequest';
import { UpdateScriptResponse } from './model/UpdateScriptResponse';
import { UpdateShareSpaceConfigReq } from './model/UpdateShareSpaceConfigReq';
import { UpdateShareSpaceConfigRequest } from './model/UpdateShareSpaceConfigRequest';
import { UpdateShareSpaceConfigResponse } from './model/UpdateShareSpaceConfigResponse';
import { UpdateSubnetBandwidthControlListReq } from './model/UpdateSubnetBandwidthControlListReq';
import { UpdateSubnetBandwidthControlListRequest } from './model/UpdateSubnetBandwidthControlListRequest';
import { UpdateSubnetBandwidthControlListResponse } from './model/UpdateSubnetBandwidthControlListResponse';
import { UpdateSubnetBandwidthReq } from './model/UpdateSubnetBandwidthReq';
import { UpdateSubnetBandwidthRequest } from './model/UpdateSubnetBandwidthRequest';
import { UpdateSubnetBandwidthResponse } from './model/UpdateSubnetBandwidthResponse';
import { UpdateSubnetIdsRequest } from './model/UpdateSubnetIdsRequest';
import { UpdateSubnetIdsRequestBody } from './model/UpdateSubnetIdsRequestBody';
import { UpdateSubnetIdsResponse } from './model/UpdateSubnetIdsResponse';
import { UpdateTenantConfigReq } from './model/UpdateTenantConfigReq';
import { UpdateTenantConfigRequest } from './model/UpdateTenantConfigRequest';
import { UpdateTenantConfigResponse } from './model/UpdateTenantConfigResponse';
import { UpdateTenantProfileRequest } from './model/UpdateTenantProfileRequest';
import { UpdateTenantProfileResponse } from './model/UpdateTenantProfileResponse';
import { UpdateTerminalsBindingDesktopsConfigRequest } from './model/UpdateTerminalsBindingDesktopsConfigRequest';
import { UpdateTerminalsBindingDesktopsConfigResponse } from './model/UpdateTerminalsBindingDesktopsConfigResponse';
import { UpdateTerminalsBindingDesktopsRequest } from './model/UpdateTerminalsBindingDesktopsRequest';
import { UpdateTerminalsBindingDesktopsRequestBody } from './model/UpdateTerminalsBindingDesktopsRequestBody';
import { UpdateTerminalsBindingDesktopsResponse } from './model/UpdateTerminalsBindingDesktopsResponse';
import { UpdateUploadedAppRequest } from './model/UpdateUploadedAppRequest';
import { UpdateUploadedAppResponse } from './model/UpdateUploadedAppResponse';
import { UpdateUserGroupRequest } from './model/UpdateUserGroupRequest';
import { UpdateUserGroupResponse } from './model/UpdateUserGroupResponse';
import { UpdateUserInfoRequest } from './model/UpdateUserInfoRequest';
import { UpdateUserInfoResponse } from './model/UpdateUserInfoResponse';
import { UpdateWorkspaceRequest } from './model/UpdateWorkspaceRequest';
import { UpdateWorkspaceResponse } from './model/UpdateWorkspaceResponse';
import { UploadAppReq } from './model/UploadAppReq';
import { UploadAppRequest } from './model/UploadAppRequest';
import { UploadAppResponse } from './model/UploadAppResponse';
import { User } from './model/User';
import { UserAccessStage } from './model/UserAccessStage';
import { UserDetail } from './model/UserDetail';
import { UserDimensionAttachInfo } from './model/UserDimensionAttachInfo';
import { UserEventRsp } from './model/UserEventRsp';
import { UserGroupInfo } from './model/UserGroupInfo';
import { UserInGroup } from './model/UserInGroup';
import { UserMetric } from './model/UserMetric';
import { Vdi } from './model/Vdi';
import { VdiDisconnectHibernateOptions } from './model/VdiDisconnectHibernateOptions';
import { VdiNoOperationHibernateOptions } from './model/VdiNoOperationHibernateOptions';
import { VirtualChannel } from './model/VirtualChannel';
import { VirtualChannelOptions } from './model/VirtualChannelOptions';
import { VmOperateResult } from './model/VmOperateResult';
import { Volume } from './model/Volume';
import { VolumeAddInfo } from './model/VolumeAddInfo';
import { VolumeDetail } from './model/VolumeDetail';
import { VolumeInfo } from './model/VolumeInfo';
import { VolumeProductInfo } from './model/VolumeProductInfo';
import { Vpc } from './model/Vpc';
import { VpcConfigInfo } from './model/VpcConfigInfo';
import { Watermark } from './model/Watermark';
import { WatermarkOptions } from './model/WatermarkOptions';
import { WksEdgeSiteDetail } from './model/WksEdgeSiteDetail';

export class WorkspaceClient {
    public static newBuilder(): ClientBuilder<WorkspaceClient> {
            let client = new ClientBuilder<WorkspaceClient>(newClient);
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
     * 该接口用于获取云办公服务接入地址备份配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取云办公服务接入地址备份配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessAddressBackupConfig(listAccessAddressBackupConfigRequest?: ListAccessAddressBackupConfigRequest): Promise<ListAccessAddressBackupConfigResponse> {
        const options = ParamCreater().listAccessAddressBackupConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改云办公服务接入地址备份配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云办公服务接入地址备份配置
     * @param {UpdateAccessAddressBackupConfigReq} updateAccessAddressBackupConfigRequestBody 修改云办公服务接入地址备份配置请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccessAddressBackupConfig(updateAccessAddressBackupConfigRequest?: UpdateAccessAddressBackupConfigRequest): Promise<UpdateAccessAddressBackupConfigResponse> {
        const options = ParamCreater().updateAccessAddressBackupConfig(updateAccessAddressBackupConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除指定接入策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除接入策略
     * @param {BatchDeleteAccessPoliciesReq} batchDeleteAccessPoliciesRequestBody 批量删除策略id列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAccessPolicies(batchDeleteAccessPoliciesRequest?: BatchDeleteAccessPoliciesRequest): Promise<BatchDeleteAccessPoliciesResponse> {
        const options = ParamCreater().batchDeleteAccessPolicies(batchDeleteAccessPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建接入策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建接入策略
     * @param {CreateAccessPolicyReq} createAccessPolicyRequestBody 创建请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessPolicy(createAccessPolicyRequest?: CreateAccessPolicyRequest): Promise<CreateAccessPolicyResponse> {
        const options = ParamCreater().createAccessPolicy(createAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询接入策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询接入策略
     * @param {string} [accessControlType] 接入策略控制类型 * ACCESS_TYPE： 接入类型 * IP_WHITE_LIST： IP白名单
     * @param {number} [limit] 每页数量,范围0-100,默认100。
     * @param {number} [offset] 偏移量,范围0-99,默认0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessPolicies(listAccessPoliciesRequest?: ListAccessPoliciesRequest): Promise<ListAccessPoliciesResponse> {
        const options = ParamCreater().listAccessPolicies(listAccessPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定接入策略的应用对象。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定接入策略的应用对象
     * @param {string} accessPolicyId 接入策略id。
     * @param {number} [limit] 每页数量,范围0-2000,默认10。
     * @param {number} [offset] 偏移量,范围0-1999,默认0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessPolicyObjects(listAccessPolicyObjectsRequest?: ListAccessPolicyObjectsRequest): Promise<ListAccessPolicyObjectsResponse> {
        const options = ParamCreater().listAccessPolicyObjects(listAccessPolicyObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新指定接入策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定接入策略
     * @param {string} accessPolicyId 接入策略id。
     * @param {UpdateAccessPolicyReq} [updateAccessPolicyRequestBody] 创建请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccessPolicy(updateAccessPolicyRequest?: UpdateAccessPolicyRequest): Promise<UpdateAccessPolicyResponse> {
        const options = ParamCreater().updateAccessPolicy(updateAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新指定接入策略的应用对象。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定接入策略的应用对象
     * @param {string} accessPolicyId 接入策略id。
     * @param {UpdateAccessPolicyObjectsReq} [updateAccessPolicyObjectsRequestBody] 创建请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccessPolicyObjects(updateAccessPolicyObjectsRequest?: UpdateAccessPolicyObjectsRequest): Promise<UpdateAccessPolicyObjectsResponse> {
        const options = ParamCreater().updateAccessPolicyObjects(updateAccessPolicyObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开通委托功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通委托功能
     * @param {CreateAgenciesReq} [createAgenciesRequestBody] 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgencies(createAgenciesRequest?: CreateAgenciesRequest): Promise<CreateAgenciesResponse> {
        const options = ParamCreater().createAgencies(createAgenciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询委托功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询委托功能
     * @param {'WORKSPACE' | 'CLOUD_GAME' | 'CLOUD_STORAGE' | 'SCREEN_RECORD'} [scene] 委托场景。 - WORKSPACE：云桌面。 - CLOUD_GAME：云游戏。 - CLOUD_STORAGE 云存储。 - SCREEN_RECORD：录屏审计。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgencies(listAgenciesRequest?: ListAgenciesRequest): Promise<ListAgenciesResponse> {
        const options = ParamCreater().listAgencies(listAgenciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回各级别告警数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警统计
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmStatistics(listAlarmStatisticsRequest?: ListAlarmStatisticsRequest): Promise<ListAlarmStatisticsResponse> {
        const options = ParamCreater().listAlarmStatistics();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从ces查询告警列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警列表
     * @param {number} [level] 告警级别 | 1 - 紧急 2 - 重要 3 - 次要 4 - 提示。
     * @param {number} [offset] 分页偏移量。
     * @param {number} [limit] 分页大小，默认100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarms(listAlarmsRequest?: ListAlarmsRequest): Promise<ListAlarmsResponse> {
        const options = ParamCreater().listAlarms(listAlarmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除应用
     * @param {BatchDeleteAppsReq} batchDeleteAppsRequestBody 批量操作app的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteApps(batchDeleteAppsRequest?: BatchDeleteAppsRequest): Promise<BatchDeleteAppsResponse> {
        const options = ParamCreater().batchDeleteApps(batchDeleteAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除job。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除job
     * @param {BatchOperateJobsReq} batchDeleteJobsRequestBody 批量删除job请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteJobs(batchDeleteJobsRequest?: BatchDeleteJobsRequest): Promise<BatchDeleteJobsResponse> {
        const options = ParamCreater().batchDeleteJobs(batchDeleteJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置不可见。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置不可见
     * @param {BatchOperateAppsReq} batchDisableAppsRequestBody 批量操作app的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisableApps(batchDisableAppsRequest?: BatchDisableAppsRequest): Promise<BatchDisableAppsResponse> {
        const options = ParamCreater().batchDisableApps(batchDisableAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置可见。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置可见
     * @param {BatchOperateAppsReq} batchEnableAppsRequestBody 批量操作app的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchEnableApps(batchEnableAppsRequest?: BatchEnableAppsRequest): Promise<BatchEnableAppsResponse> {
        const options = ParamCreater().batchEnableApps(batchEnableAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量自动安装安装应用 (应用需支持静默安装或者解压安装)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量自动安装安装应用
     * @param {BatchAutoInstallAppsReq} batchInstallAppsRequestBody 批量自动安装。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchInstallApps(batchInstallAppsRequest?: BatchInstallAppsRequest): Promise<BatchInstallAppsResponse> {
        const options = ParamCreater().batchInstallApps(batchInstallAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置应用授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置应用授权
     * @param {BatchAssignAppAuthorizationsReq} batchUpdateAppAuthorizationsRequestBody 批量设置应用授权。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateAppAuthorizations(batchUpdateAppAuthorizationsRequest?: BatchUpdateAppAuthorizationsRequest): Promise<BatchUpdateAppAuthorizationsResponse> {
        const options = ParamCreater().batchUpdateAppAuthorizations(batchUpdateAppAuthorizationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加并授权默认桶,桶不存在时会自动创建OBS桶。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加并授权默认桶
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAndAuthorizeBucket(createAndAuthorizeBucketRequest?: CreateAndAuthorizeBucketRequest): Promise<CreateAndAuthorizeBucketResponse> {
        const options = ParamCreater().createAndAuthorizeBucket();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 生成桶凭证信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成访问凭证信息
     * @param {CreateBucketCredentialReq} createBucketCredentialRequestBody 生成凭证请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBucketCredential(createBucketCredentialRequest?: CreateBucketCredentialRequest): Promise<CreateBucketCredentialResponse> {
        const options = ParamCreater().createBucketCredential(createBucketCredentialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} appId 应用ID。
     * @param {string} [reserveObsFile] 删除应用时是否保留OBS桶文件(默认false) * \&#39;true\&#39; - 保留OBS桶文件,仅删除应用 * \&#39;false\&#39; - 不保留OBS桶文件,删除应用同时删除OBS桶文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApp(deleteAppRequest?: DeleteAppRequest): Promise<DeleteAppResponse> {
        const options = ParamCreater().deleteApp(deleteAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 自动安装应用(应用需支持静默安装或者解压安装)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 自动安装应用
     * @param {string} appId 应用ID。
     * @param {AutoInstallAppReq} installAppRequestBody 自动安装应用请求响应体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public installApp(installAppRequest?: InstallAppRequest): Promise<InstallAppResponse> {
        const options = ParamCreater().installApp(installAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用授权信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用授权信息
     * @param {string} appId 应用ID。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {string} [name] 用户名/用户组名。
     * @param {string} [targetType] 类型： * &#x60;SIMPLE&#x60; - 普通用户 * &#x60;USER_GROUP&#x60; - 用户组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppAuthorizations(listAppAuthorizationsRequest?: ListAppAuthorizationsRequest): Promise<ListAppAuthorizationsResponse> {
        const options = ParamCreater().listAppAuthorizations(listAppAuthorizationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用分类信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用分类信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppCatalogs(listAppCatalogsRequest?: ListAppCatalogsRequest): Promise<ListAppCatalogsResponse> {
        const options = ParamCreater().listAppCatalogs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按照名称分页查询应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按照名称分页查询应用
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {string} [name] 应用名称。
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
     * 查询应用安装job信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用安装job信息
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {string} [instanceId] 实例ID。
     * @param {string} [appId] 应用ID。
     * @param {string} [target] 安装实例的用户。
     * @param {string} [jobStatus] 任务状态： * &#x60;INIT&#x60; - 初始化中 * &#x60;WAITING&#x60; - 等待安装结束 * &#x60;SUCCESS&#x60; - 成功 * &#x60;FAIL&#x60; - 失败任务状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobs(listJobsRequest?: ListJobsRequest): Promise<ListJobsResponse> {
        const options = ParamCreater().listJobs(listJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重试指定失败job(仅支持失败job重试，其他类型job重试会响应错误)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试失败job
     * @param {BatchOperateJobsReq} retryJobsRequestBody 失败job重试。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryJobs(retryJobsRequest?: RetryJobsRequest): Promise<RetryJobsResponse> {
        const options = ParamCreater().retryJobs(retryJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置应用授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置应用授权
     * @param {string} appId 应用ID。
     * @param {AssignAppAuthorizationsReq} updateAppAuthorizationsRequestBody 设置应用授权。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppAuthorizations(updateAppAuthorizationsRequest?: UpdateAppAuthorizationsRequest): Promise<UpdateAppAuthorizationsResponse> {
        const options = ParamCreater().updateAppAuthorizations(updateAppAuthorizationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用
     * @param {string} appId 应用ID。
     * @param {UpdateAppReq} updateUploadedAppRequestBody 更新应用信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUploadedApp(updateUploadedAppRequest?: UpdateUploadedAppRequest): Promise<UpdateUploadedAppResponse> {
        const options = ParamCreater().updateUploadedApp(updateUploadedAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加应用应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加应用
     * @param {UploadAppReq} uploadAppRequestBody 上传应用的结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadApp(uploadAppRequest?: UploadAppRequest): Promise<UploadAppResponse> {
        const options = ParamCreater().uploadApp(uploadAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 增加管控规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 增加管控规则
     * @param {BatchOperateAppRulesReq} addRestrictedRuleRequestBody 增加管控规则请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRestrictedRule(addRestrictedRuleRequest?: AddRestrictedRuleRequest): Promise<AddRestrictedRuleResponse> {
        const options = ParamCreater().addRestrictedRule(addRestrictedRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除规则
     * @param {BatchOperateAppRulesReq} batchDeleteAppRulesRequestBody 批量操作Rule的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAppRules(batchDeleteAppRulesRequest?: BatchDeleteAppRulesRequest): Promise<BatchDeleteAppRulesResponse> {
        const options = ParamCreater().batchDeleteAppRules(batchDeleteAppRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用规则
     * @param {CreateAppRuleReq} createAppRuleRequestBody 创建应用规则请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppRule(createAppRuleRequest?: CreateAppRuleRequest): Promise<CreateAppRuleResponse> {
        const options = ParamCreater().createAppRule(createAppRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用规则
     * @param {string} ruleId 规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppRule(deleteAppRuleRequest?: DeleteAppRuleRequest): Promise<DeleteAppRuleResponse> {
        const options = ParamCreater().deleteAppRule(deleteAppRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除管控规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除管控规则
     * @param {BatchOperateAppRulesReq} deleteRestrictedRuleRequestBody 删除管控规则。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRestrictedRule(deleteRestrictedRuleRequest?: DeleteRestrictedRuleRequest): Promise<DeleteRestrictedRuleResponse> {
        const options = ParamCreater().deleteRestrictedRule(deleteRestrictedRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用规则管控。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用规则管控
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableRuleRestriction(disableRuleRestrictionRequest?: DisableRuleRestrictionRequest): Promise<DisableRuleRestrictionResponse> {
        const options = ParamCreater().disableRuleRestriction();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用规则管控。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用规则管控
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableRuleRestriction(enableRuleRestrictionRequest?: EnableRuleRestrictionRequest): Promise<EnableRuleRestrictionResponse> {
        const options = ParamCreater().enableRuleRestriction();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用规则
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {string} [name] 应用规则名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppRule(listAppRuleRequest?: ListAppRuleRequest): Promise<ListAppRuleResponse> {
        const options = ParamCreater().listAppRule(listAppRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询管控规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询管控规则列表
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {string} [name] 应用规则名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestrictedRule(listRestrictedRuleRequest?: ListRestrictedRuleRequest): Promise<ListRestrictedRuleResponse> {
        const options = ParamCreater().listRestrictedRule(listRestrictedRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置管控规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置管控规则
     * @param {SetRuleRestrictionReq} setRuleRestrictionRequestBody 设置管控规则请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRuleRestriction(setRuleRestrictionRequest?: SetRuleRestrictionRequest): Promise<SetRuleRestrictionResponse> {
        const options = ParamCreater().setRuleRestriction(setRuleRestrictionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询管控规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询管控规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRuleRestriction(showRuleRestrictionRequest?: ShowRuleRestrictionRequest): Promise<ShowRuleRestrictionResponse> {
        const options = ParamCreater().showRuleRestriction();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改应用规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用规则
     * @param {string} ruleId 规则ID。
     * @param {UpdateAppRuleReq} updateAppRuleRequestBody 更新Rule的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppRule(updateAppRuleRequest?: UpdateAppRuleRequest): Promise<UpdateAppRuleResponse> {
        const options = ParamCreater().updateAppRule(updateAppRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询辅助认证的配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询辅助认证配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssistAuthConfig(showAssistAuthConfigRequest?: ShowAssistAuthConfigRequest): Promise<ShowAssistAuthConfigResponse> {
        const options = ParamCreater().showAssistAuthConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询认证登录方式配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询认证登录方式
     * @param {string} [authType] 认证类型。LOCAL_PASSWORD：本地密码认证模式，KERBEROS：Windows AD认证模式，LDAP：第三方LDAP模式，CLIENT_TOKEN：金审UKEY客户端Token认证模式，OAUTH2：第三方单点登录模式。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuthConfig(showAuthConfigRequest?: ShowAuthConfigRequest): Promise<ShowAuthConfigResponse> {
        const options = ParamCreater().showAuthConfig(showAuthConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新辅助认证策略配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新辅助认证策略配置
     * @param {AssistAuthMethodConfigRequest} updateAssistAuthMethodConfigRequestBody 更新认证策略配置请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAssistAuthMethodConfig(updateAssistAuthMethodConfigRequest?: UpdateAssistAuthMethodConfigRequest): Promise<UpdateAssistAuthMethodConfigResponse> {
        const options = ParamCreater().updateAssistAuthMethodConfig(updateAssistAuthMethodConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新认证策略配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新认证策略配置
     * @param {AuthMethodConfigRequest} updateAuthMethodConfigRequestBody 更新认证策略配置请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuthMethodConfig(updateAuthMethodConfigRequest?: UpdateAuthMethodConfigRequest): Promise<UpdateAuthMethodConfigResponse> {
        const options = ParamCreater().updateAuthMethodConfig(updateAuthMethodConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询云桌面支持的可用分区列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用分区列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZones(listAvailabilityZonesRequest?: ListAvailabilityZonesRequest): Promise<ListAvailabilityZonesResponse> {
        const options = ParamCreater().listAvailabilityZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询云桌面支持的可用分区列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用分区列表概要
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAzs(listAzsRequest?: ListAzsRequest): Promise<ListAzsResponse> {
        const options = ParamCreater().listAzs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询云桌面支持的可用分区列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用分区详情
     * @param {string} availabilityZoneId 可用分区ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAzDetails(showAzDetailsRequest?: ShowAzDetailsRequest): Promise<ShowAzDetailsResponse> {
        const options = ParamCreater().showAzDetails(showAzDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于导出连接记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出连接记录
     * @param {string} [startTime] 查询的起始时间。指定该参数后，返回的结果为此时间之后的所有登录记录。时间格式如：“2016-08-20T21:11Z”。终止时间不为空时，起始时间为必填参数。
     * @param {string} [endTime] 查询的终止时间。指定该参数后，返回的结果为此时间之前的所有登录记录。时间格式如：“2016-08-20T21:11Z”。起始时间不为空时，终止时间为必填参数。
     * @param {string} [userName] 登录桌面的用户名。
     * @param {string} [computerName] 计算机名（操作系统信息中可见）。
     * @param {string} [terminalType] 登录桌面的终端系统类型。
     * @param {string} [language] 导出语言，默认英文。 - zh_CN：中文 - en_US：英文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportUserLoginInfoNew(exportUserLoginInfoNewRequest?: ExportUserLoginInfoNewRequest): Promise<ExportUserLoginInfoNewResponse> {
        const options = ParamCreater().exportUserLoginInfoNew(exportUserLoginInfoNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询登录人数，注意查询参数不可全空。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询登录人数
     * @param {string} [startTime] 查询的起始时间。指定该参数后，返回的结果为此时间之后的所有登录记录。时间格式如：“2016-08-20T21:11Z”。终止时间不为空时，起始时间为必填参数。类型查询优先于时间查询。类型查询和时间查询必须有一个存在。
     * @param {string} [endTime] 查询的结束时间。指定该参数后，返回的结果为此时间之前的所有登录记录。时间格式如：“2016-08-20T21:11Z”。起始时间不为空时，终止时间为必填参数。类型查询优先于时间查询。类型查询和时间查询必须有一个存在。
     * @param {string} [queryType] 查询类型，类型查询优先于时间查询。类型查询和时间查询必须有一个存在。 -MONTH：按月查询。 -WEEK：按周查询。 -DAY：按天查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHistoryOnlineInfoNew(listHistoryOnlineInfoNewRequest?: ListHistoryOnlineInfoNewRequest): Promise<ListHistoryOnlineInfoNewResponse> {
        const options = ParamCreater().listHistoryOnlineInfoNew(listHistoryOnlineInfoNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询桌面登录状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面登录状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesStatus(listInstancesStatusRequest?: ListInstancesStatusRequest): Promise<ListInstancesStatusResponse> {
        const options = ParamCreater().listInstancesStatus();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询登录信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询登录信息
     * @param {string} [startTime] 查询的起始时间。指定该参数后，返回的结果为此时间之后的所有登录记录。时间格式如：“2016-08-20T21:11Z”。终止时间不为空时，起始时间为必填参数。
     * @param {string} [endTime] 查询的终止时间。指定该参数后，返回的结果为此时间之前的所有登录记录。时间格式如：“2016-08-20T21:11Z”。起始时间不为空时，终止时间为必填参数。
     * @param {string} [userName] 登录桌面的用户名。
     * @param {string} [computerName] 计算机名（操作系统信息中可见）。
     * @param {string} [terminalType] 登录桌面的终端系统类型，当前支持：WI（云桌面客户端）。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回登录记录数量限制,取值范围0-1000。如果不指定，默认为20。
     * @param {number} [minNetworkRtt] 查询端到端时延的最小值。
     * @param {number} [maxNetworkRtt] 查询端到端时延的最大值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoginRecordsNew(listLoginRecordsNewRequest?: ListLoginRecordsNewRequest): Promise<ListLoginRecordsNewResponse> {
        const options = ParamCreater().listLoginRecordsNew(listLoginRecordsNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将桌面分配给用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分配用户
     * @param {AttachInstancesReq} attachInstancesRequestBody 分配用户的请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachInstances(attachInstancesRequest?: AttachInstancesRequest): Promise<AttachInstancesResponse> {
        const options = ParamCreater().attachInstances(attachInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 预批量将桌面分配给用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预批量分配用户
     * @param {PreBatchAttachInstancesReq} batchAssociateInstancesRequestBody 预批量将桌面分配给用户请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAssociateInstances(batchAssociateInstancesRequest?: BatchAssociateInstancesRequest): Promise<BatchAssociateInstancesResponse> {
        const options = ParamCreater().batchAssociateInstances(batchAssociateInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量分配桌面给用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量分配用户
     * @param {BatchAttachInstancesReq} batchAttachInstancesRequestBody 批量将桌面分配给用户请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAttachInstances(batchAttachInstancesRequest?: BatchAttachInstancesRequest): Promise<BatchAttachInstancesResponse> {
        const options = ParamCreater().batchAttachInstances(batchAttachInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量切换桌面vpc、子网、ip、安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量切换桌面网络
     * @param {BatchChangeDesktopNetworkReq} batchChangeDesktopNetworkRequestBody 切换桌面网络请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchChangeDesktopNetwork(batchChangeDesktopNetworkRequest?: BatchChangeDesktopNetworkRequest): Promise<BatchChangeDesktopNetworkResponse> {
        const options = ParamCreater().batchChangeDesktopNetwork(batchChangeDesktopNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除桌面，删除后无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除桌面
     * @param {DeleteDesktopsReq} batchDeleteDesktopsRequestBody 批量删除计算机请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDesktops(batchDeleteDesktopsRequest?: BatchDeleteDesktopsRequest): Promise<BatchDeleteDesktopsResponse> {
        const options = ParamCreater().batchDeleteDesktops(batchDeleteDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量将桌面和用户解绑。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量解绑用户
     * @param {BatchDetachInstancesReq} batchDetachInstancesRequestBody 解绑用户的请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDetachInstances(batchDetachInstancesRequest?: BatchDetachInstancesRequest): Promise<BatchDetachInstancesResponse> {
        const options = ParamCreater().batchDetachInstances(batchDetachInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量为桌面安装agent。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 安装agent
     * @param {BatchInstallAgentReq} batchInstallAgentRequestBody 桌面云批量操作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchInstallAgent(batchInstallAgentRequest?: BatchInstallAgentRequest): Promise<BatchInstallAgentResponse> {
        const options = ParamCreater().batchInstallAgent(batchInstallAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量注销桌面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量注销桌面
     * @param {LogoffDesktopsReq} batchLogoffDesktopsRequestBody 批量注销计算机请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchLogoffDesktops(batchLogoffDesktopsRequest?: BatchLogoffDesktopsRequest): Promise<BatchLogoffDesktopsResponse> {
        const options = ParamCreater().batchLogoffDesktops(batchLogoffDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重建桌面系统盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重建桌面
     * @param {RebuildDesktopsReq} batchRebuildDesktopsSystemDiskRequestBody 重建系统盘的请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRebuildDesktopsSystemDisk(batchRebuildDesktopsSystemDiskRequest?: BatchRebuildDesktopsSystemDiskRequest): Promise<BatchRebuildDesktopsSystemDiskResponse> {
        const options = ParamCreater().batchRebuildDesktopsSystemDisk(batchRebuildDesktopsSystemDiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量操作桌面，用于批量开机、关机、休眠和重启。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作桌面
     * @param {BatchActionDesktopsReq} batchRunDesktopsRequestBody 桌面云批量操作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRunDesktops(batchRunDesktopsRequest?: BatchRunDesktopsRequest): Promise<BatchRunDesktopsResponse> {
        const options = ParamCreater().batchRunDesktops(batchRunDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消远程协助。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消远程协助
     * @param {string} desktopId 桌面ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelRemoteAssistance(cancelRemoteAssistanceRequest?: CancelRemoteAssistanceRequest): Promise<CancelRemoteAssistanceResponse> {
        const options = ParamCreater().cancelRemoteAssistance(cancelRemoteAssistanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换桌面vpc、子网、ip、安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换桌面网络
     * @param {string} desktopId 桌面ID。
     * @param {ChangeDesktopNetworkReq} changeDesktopNetworkRequestBody 切换桌面网络请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeDesktopNetwork(changeDesktopNetworkRequest?: ChangeDesktopNetworkRequest): Promise<ChangeDesktopNetworkResponse> {
        const options = ParamCreater().changeDesktopNetwork(changeDesktopNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面转镜像。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面转镜像
     * @param {DesktopToImageReq} changeDesktopToImageRequestBody 桌面转镜像请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeDesktopToImage(changeDesktopToImageRequest?: ChangeDesktopToImageRequest): Promise<ChangeDesktopToImageResponse> {
        const options = ParamCreater().changeDesktopToImage(changeDesktopToImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改用户权限组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改用户权限组
     * @param {ChangeUserPrivilegeGroupReq} changeUserPrivilegeGroupRequestBody 批量修改用户权限组的请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeUserPrivilegeGroup(changeUserPrivilegeGroupRequest?: ChangeUserPrivilegeGroupRequest): Promise<ChangeUserPrivilegeGroupResponse> {
        const options = ParamCreater().changeUserPrivilegeGroup(changeUserPrivilegeGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建桌面，并将此桌面分配给用户，当桌面创建成功后用户可以登录使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建桌面
     * @param {CreateDesktopReq} createDesktopRequestBody 创建云桌面请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDesktop(createDesktopRequest?: CreateDesktopRequest): Promise<CreateDesktopResponse> {
        const options = ParamCreater().createDesktop(createDesktopRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建远程协助。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建远程协助
     * @param {string} desktopId 桌面ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRemoteAssistance(createRemoteAssistanceRequest?: CreateRemoteAssistanceRequest): Promise<CreateRemoteAssistanceResponse> {
        const options = ParamCreater().createRemoteAssistance(createRemoteAssistanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除单个桌面，删除后无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个桌面
     * @param {string} desktopId 桌面ID。
     * @param {boolean} [deleteUsers] 删除桌面后，如果当前用户没有其它桌面，可以删除桌面用户。true：删除用户，false：不删除用户，默认为false。
     * @param {boolean} [emailNotification] 删除桌面后，是否给桌面用户发送系统通知邮件。true：发送，false：不发送。默认为true。
     * @param {boolean} [isForceDelete] 是否强制删除。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDesktop(deleteDesktopRequest?: DeleteDesktopRequest): Promise<DeleteDesktopResponse> {
        const options = ParamCreater().deleteDesktop(deleteDesktopRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将桌面和用户解绑。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑用户
     * @param {DetachInstancesReq} detachInstancesRequestBody 解绑用户的请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachInstances(detachInstancesRequest?: DetachInstancesRequest): Promise<DetachInstancesResponse> {
        const options = ParamCreater().detachInstances(detachInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 展示桌面安装agent详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面安装agent详情
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [desktopId] 桌面ID。
     * @param {string} [desktopName] 桌面名称。
     * @param {string} [status] 桌面状态。
     * @param {string} [ipAddress] ip地址。
     * @param {boolean} [isInstalled] 插件是否已安装。
     * @param {string} [desktopPoolId] 桌面池id。
     * @param {number} [limit] 每页显示的数量。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgentsInstallCondition(listAgentsInstallConditionRequest?: ListAgentsInstallConditionRequest): Promise<ListAgentsInstallConditionResponse> {
        const options = ParamCreater().listAgentsInstallCondition(listAgentsInstallConditionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取桌面开关机信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面开关机信息
     * @param {string} desktopId 桌面ID。
     * @param {number} [offset] 每页限制数。
     * @param {number} [limit] 起始位置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopActions(listDesktopActionsRequest?: ListDesktopActionsRequest): Promise<ListDesktopActionsResponse> {
        const options = ParamCreater().listDesktopActions(listDesktopActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询桌面虚拟机列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面列表
     * @param {Array<string>} [userName] 桌面所属用户。
     * @param {string} [computerName] 桌面名。
     * @param {string} [desktopIp] 桌面IP地址。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，取值范围0-1000，默认值1000。
     * @param {string} [poolId] 桌面池ID,多个桌面池ID用逗号隔开。
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [desktopType] 桌面类型，为空时查所有桌面。查询多个类型时用,隔开。 - DEDICATED：普通桌面，包括专享桌面、专属桌面等。 - SHARED: 多用户共享桌面。
     * @param {boolean} [isShareDesktop] 是否为协同桌面。
     * @param {string} [subnetId] 桌面的子网ID。
     * @param {string} [status] 桌面的运行状态。
     * @param {Array<string>} [desktopId] 桌面id，当前最多支持100个桌面id进行查询。
     * @param {string} [tag] 桌面的标签。样例： - key1&#x3D;value1。 - key1&#x3D;value1，key2&#x3D;value2。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktops(listDesktopsRequest?: ListDesktopsRequest): Promise<ListDesktopsResponse> {
        const options = ParamCreater().listDesktops(listDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桌面连接状态列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面连接状态列表
     * @param {Array<string>} [userNames] 桌面所属用户，批量筛选，最多不超过100个用户。
     * @param {string} [connectStatus] 桌面的连接状态。  - UNREGISTER：表示桌面未注册时的状态（桌面启动后，会自动注册）。关机后也会出现未注册的状态。 - REGISTERED：表示桌面注册以后，等待用户连接的状态。 - CONNECTED：表示用户已经成功连接，正在使用桌面。 - DISCONNECTED：表示桌面与客户端断开会话后显示的状态，可能为关闭客户端窗口，或客户端与桌面网络断开引起。
     * @param {number} [offset] 从查询结果中的第几条数据开始返回,用于分页查询，取值范围0-2000，默认从0开始。
     * @param {number} [limit] 查询结果中想要返回的信息条目数量,用于分页查询，取值范围0-2000，默认值100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopsConnectStatus(listDesktopsConnectStatusRequest?: ListDesktopsConnectStatusRequest): Promise<ListDesktopsConnectStatusResponse> {
        const options = ParamCreater().listDesktopsConnectStatus(listDesktopsConnectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桌面详情信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面详情列表
     * @param {string} [status] 桌面状态。  - ACTIVE：运行中。 - SHUTOFF：关机。 - ERROR：异常。 - HIBERNATED：休眠。
     * @param {string} [userName] 桌面所属用户，当传user_names时，本字段不生效。
     * @param {Array<string>} [userNames] 桌面所属用户，批量筛选，最多不超过100个用户。
     * @param {'created' | 'computer_name'} [sortField] 排序字段名称，需要结合sort_type字段一起使用。 - created 创建时间。 - computer_name 桌面名称。
     * @param {'ASC' | 'DESC'} [sortType] 排序类型，默认升序，需要结合sort_field字段一起使用。 - ASC 升序。 - DESC 降序。
     * @param {string} [computerName] 桌面名。
     * @param {string} [desktopIp] 桌面IP地址。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，取值范围0-500，默认值500。
     * @param {Array<string>} [desktopId] 桌面ID。
     * @param {string} [desktopType] 桌面类型，为空时查所有桌面。 - DEDICATED：普通桌面，包括专享桌面、专属桌面等 - POOLED：池桌面，即桌面池里的桌面
     * @param {string} [tag] 桌面的标签。样例：  - key1&#x3D;value1。 - key1&#x3D;value1，key2&#x3D;value2。
     * @param {string} [poolId] 桌面池ID,多个桌面池ID用逗号隔开。
     * @param {boolean} [userAttached] 是否分配了用户。
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [imageId] 镜像ID。
     * @param {string} [chargeMode] 计费模式，0：包周期，1：按需。
     * @param {boolean} [inMaintenanceMode] 按照维护模式过滤。
     * @param {boolean} [isShareDesktop] 是否为协同桌面。
     * @param {string} [subnetId] 桌面的子网ID。
     * @param {boolean} [isSupportInternet] 是否支持上网。
     * @param {string} [availabilityZone] 查询可用区。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopsDetail(listDesktopsDetailRequest?: ListDesktopsDetailRequest): Promise<ListDesktopsDetailResponse> {
        const options = ParamCreater().listDesktopsDetail(listDesktopsDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于Windows桌面重新加入AD域，一般用于解决桌面脱域的情况使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重新加入AD域
     * @param {string} desktopId 桌面ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerDomain(registerDomainRequest?: RegisterDomainRequest): Promise<RegisterDomainResponse> {
        const options = ParamCreater().registerDomain(registerDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更云桌面规格，只支持变更CPU和内存，不支持变更磁盘，不支持同规格互相变更。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更规格
     * @param {ResizeDesktopReq} resizeDesktopRequestBody 变更规格请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeDesktop(resizeDesktopRequest?: ResizeDesktopRequest): Promise<ResizeDesktopResponse> {
        const options = ParamCreater().resizeDesktop(resizeDesktopRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于管理员向桌面发送消息通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送消息通知
     * @param {SendNotificationsReq} sendNotificationsRequestBody 发送桌面消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendNotifications(sendNotificationsRequest?: SendNotificationsRequest): Promise<SendNotificationsResponse> {
        const options = ParamCreater().sendNotifications(sendNotificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置桌面管理员维护模式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置桌面维护模式
     * @param {BatchSetMaintenanceModeReq} [setMaintenanceModeRequestBody] 批量设置维护模式请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setMaintenanceMode(setMaintenanceModeRequest?: SetMaintenanceModeRequest): Promise<SetMaintenanceModeResponse> {
        const options = ParamCreater().setMaintenanceMode(setMaintenanceModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定桌面Id查询详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个桌面详情
     * @param {string} desktopId 桌面ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDesktopDetail(showDesktopDetailRequest?: ShowDesktopDetailRequest): Promise<ShowDesktopDetailResponse> {
        const options = ParamCreater().showDesktopDetail(showDesktopDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可获取某一计算机在一段时间段(范围：1小时到30天)的数据信息（例如CPU占用率、内存占用率、用户的在线时间段等），最长数据保存时间不能超过180天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面监控信息
     * @param {string} desktopId 桌面ID。
     * @param {string} startTime 监控开始时间：由日期加时间组成，UTC格式，例如“2021-05-11T11:45:42Z”。
     * @param {string} endTime 监控结束时间：由日期加时间组成，UTC格式，例如“2021-05-11T11:45:42Z”。
     * @param {string} [metricName] 监控查询指标：例如 \&quot;cpu_util\&quot;，详情见下表；当metric_name为空时，为批量查询| 指标                                  | 指标名称          | 测量对象     | 监控周期 || ------------------------------------- | ----------------- | ------------ | -------- || cpu_util                              | CPU使用率         |    云桌面    | 5分钟    || mem_util                              | 内存使用率        |    云桌面    | 5分钟    || disk_util_inband                      | 磁盘使用率        |    云桌面    | 5分钟    || disk_read_bytes_rate                  | 磁盘读带宽        |    云桌面    | 5分钟    || disk_write_bytes_rate                 | 磁盘写带宽        |    云桌面    | 5分钟    || disk_read_requests_rate               | 磁盘读IOPS        |    云桌面    | 5分钟    || disk_write_requests_rate              | 磁盘写IOPS        |    云桌面    | 5分钟    || network_incoming_bytes_rate_inband    | 带内网络流入速率  |    云桌面    | 5分钟    || network_outgoing_bytes_rate_inband    | 带内网络流出速率  |    云桌面    | 5分钟    || network_incoming_bytes_aggregate_rate | 带外网络流入速率  |    云桌面    | 5分钟    || network_outgoing_bytes_aggregate_rate | 带外网络流出速率  |    云桌面    | 5分钟    || network_vm_connections                | 网络连接数        |    云桌面    | 5分钟    || cpu_credit_usage                      | CPU积分使用量     |    云桌面    | 5分钟    || cpu_credit_balance                    | CPU积分累积量     |    云桌面    | 5分钟    || cpu_surplus_credit_balance            | CPU超额积分累积量 |    云桌面    | 5分钟    || cpu_surplus_credit_charged            | CPU超额积分收费量 |    云桌面    | 5分钟    || user_online_info                      | 用户在线信息      |    云桌面    | -        |
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDesktopMonitorData(showDesktopMonitorDataRequest?: ShowDesktopMonitorDataRequest): Promise<ShowDesktopMonitorDataResponse> {
        const options = ParamCreater().showDesktopMonitorData(showDesktopMonitorDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桌面vpc、子网、privateIp、EIP、安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面网络
     * @param {string} desktopId 桌面ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDesktopNetwork(showDesktopNetworkRequest?: ShowDesktopNetworkRequest): Promise<ShowDesktopNetworkResponse> {
        const options = ParamCreater().showDesktopNetwork(showDesktopNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桌面vpc、子网、privateIp、EIP、安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询桌面网络
     * @param {Array<string>} [desktopIds] 桌面id列表，最小为1，最大为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDesktopNetworks(showDesktopNetworksRequest?: ShowDesktopNetworksRequest): Promise<ShowDesktopNetworksResponse> {
        const options = ParamCreater().showDesktopNetworks(showDesktopNetworksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据桌面id查询远程协助信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据桌面id查询远程协助信息
     * @param {string} desktopId 桌面ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDesktopRemoteAssistanceInfo(showDesktopRemoteAssistanceInfoRequest?: ShowDesktopRemoteAssistanceInfoRequest): Promise<ShowDesktopRemoteAssistanceInfoResponse> {
        const options = ParamCreater().showDesktopRemoteAssistanceInfo(showDesktopRemoteAssistanceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于直接获取远程登录控制台地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 远程登录控制台
     * @param {string} desktopId 桌面ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRemoteConsoleAddress(showRemoteConsoleAddressRequest?: ShowRemoteConsoleAddressRequest): Promise<ShowRemoteConsoleAddressResponse> {
        const options = ParamCreater().showRemoteConsoleAddress(showRemoteConsoleAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询sysprep版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询sysprep版本信息
     * @param {string} desktopId 桌面ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSysprepInfo(showSysprepInfoRequest?: ShowSysprepInfoRequest): Promise<ShowSysprepInfoResponse> {
        const options = ParamCreater().showSysprepInfo(showSysprepInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改桌面属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改桌面属性
     * @param {string} desktopId 桌面ID。
     * @param {ModifyDesktopAttributesReq} updateDesktopRequestBody 修改桌面属性请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDesktop(updateDesktopRequest?: UpdateDesktopRequest): Promise<UpdateDesktopResponse> {
        const options = ParamCreater().updateDesktop(updateDesktopRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于桌面sid和WindowsAD中的SID不同时，更新桌面SID使其与AD中的SID保持一致，一般用于解决桌面脱域的情况使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新桌面SID
     * @param {UpdateDesktopSidReq} updateDesktopSidsRequestBody 更新桌面sid请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDesktopSids(updateDesktopSidsRequest?: UpdateDesktopSidsRequest): Promise<UpdateDesktopSidsResponse> {
        const options = ParamCreater().updateDesktopSids(updateDesktopSidsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * AD场景支持桌面更换关联用户名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary AD场景支持桌面更换关联用户名
     * @param {UpdateDesktopUsernameReq} updateDesktopUsernameRequestBody 更换桌面关联用户名请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDesktopUsername(updateDesktopUsernameRequest?: UpdateDesktopUsernameRequest): Promise<UpdateDesktopUsernameResponse> {
        const options = ParamCreater().updateDesktopUsername(updateDesktopUsernameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除桌面名称策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除桌面名称策略
     * @param {BatchDeleteDesktopNamePolicyReq} batchDeleteDesktopNamePolicyRequestBody 删除桌面名称策略请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDesktopNamePolicy(batchDeleteDesktopNamePolicyRequest?: BatchDeleteDesktopNamePolicyRequest): Promise<BatchDeleteDesktopNamePolicyResponse> {
        const options = ParamCreater().batchDeleteDesktopNamePolicy(batchDeleteDesktopNamePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建桌面名称策略，用于自动生成桌面名称，最多允许50个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建桌面名称策略
     * @param {CreateDesktopNamePolicyReq} createDesktopNamePolicyRequestBody 创建桌面名称策略请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDesktopNamePolicy(createDesktopNamePolicyRequest?: CreateDesktopNamePolicyRequest): Promise<CreateDesktopNamePolicyResponse> {
        const options = ParamCreater().createDesktopNamePolicy(createDesktopNamePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取桌面名称策略，用于自动生成桌面名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取桌面名称策略
     * @param {boolean} [isContainUser] 是否包含用户名的桌面名称策略。 - true 包含 - false 不包含
     * @param {string} [policyName] 策略名称，由数字、字母、中文、下划线组成，必须以字母或下划线开头，长度范围为1~30个字符，支持模糊筛选。
     * @param {string} [policyId] 策略id。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，取值范围0-50，默认值50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopNamePolicy(listDesktopNamePolicyRequest?: ListDesktopNamePolicyRequest): Promise<ListDesktopNamePolicyResponse> {
        const options = ParamCreater().listDesktopNamePolicy(listDesktopNamePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新桌面名称策略，用于自动生成桌面名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新桌面名称策略
     * @param {string} policyId 策略ID。
     * @param {UpdateDesktopNamePolicyReq} updateDesktopNamePolicyRequestBody 更新桌面名称策略请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDesktopNamePolicy(updateDesktopNamePolicyRequest?: UpdateDesktopNamePolicyRequest): Promise<UpdateDesktopNamePolicyResponse> {
        const options = ParamCreater().updateDesktopNamePolicy(updateDesktopNamePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面池批量添加磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面池批量添加磁盘
     * @param {string} poolId 桌面池ID。
     * @param {AddDesktopPoolVolumesReq} addDesktopPoolVolumesRequestBody 桌面池批量添加磁盘。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDesktopPoolVolumes(addDesktopPoolVolumesRequest?: AddDesktopPoolVolumesRequest): Promise<AddDesktopPoolVolumesResponse> {
        const options = ParamCreater().addDesktopPoolVolumes(addDesktopPoolVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建桌面池，可将此桌面池分配给用户、用户组，用户登录时会绑定其中一个桌面。
     * 注:需通过开通委托功能接口先对云服务进行授权才可以使用该功能
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建桌面池
     * @param {CreateDesktopPoolReq} createDesktopPoolRequestBody 创建桌面池请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDesktopPool(createDesktopPoolRequest?: CreateDesktopPoolRequest): Promise<CreateDesktopPoolResponse> {
        const options = ParamCreater().createDesktopPool(createDesktopPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于桌面池授权用户、用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面池授权用户、用户组
     * @param {string} poolId 桌面池ID。
     * @param {CreateDesktopPoolAuthorizedObjectsRequestBody} createDesktopPoolAuthorizedObjectsRequestBody 桌面池授权用户、用户组请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDesktopPoolAuthorizedObjects(createDesktopPoolAuthorizedObjectsRequest?: CreateDesktopPoolAuthorizedObjectsRequest): Promise<CreateDesktopPoolAuthorizedObjectsResponse> {
        const options = ParamCreater().createDesktopPoolAuthorizedObjects(createDesktopPoolAuthorizedObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当桌面池内无桌面时可删除桌面池，桌面池删除后无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除桌面池
     * @param {string} poolId 桌面池ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDesktopPool(deleteDesktopPoolRequest?: DeleteDesktopPoolRequest): Promise<DeleteDesktopPoolResponse> {
        const options = ParamCreater().deleteDesktopPool(deleteDesktopPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面池批量删除磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面池批量删除磁盘
     * @param {string} poolId 桌面池ID。
     * @param {DeleteDesktopPoolVolumesReq} deleteDesktopPoolVolumesRequestBody 桌面池批量删除磁盘。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDesktopPoolVolumes(deleteDesktopPoolVolumesRequest?: DeleteDesktopPoolVolumesRequest): Promise<DeleteDesktopPoolVolumesResponse> {
        const options = ParamCreater().deleteDesktopPoolVolumes(deleteDesktopPoolVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作桌面池，用于桌面池里面的桌面批量开机、关机、重启和休眠。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作桌面池
     * @param {string} poolId 桌面池ID。
     * @param {DesktopPoolActionReq} executeDesktopPoolActionRequestBody 操作桌面池。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeDesktopPoolAction(executeDesktopPoolActionRequest?: ExecuteDesktopPoolActionRequest): Promise<ExecuteDesktopPoolActionResponse> {
        const options = ParamCreater().executeDesktopPoolAction(executeDesktopPoolActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面池批量执行脚本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面池批量执行脚本
     * @param {string} poolId 桌面池ID。
     * @param {ExecuteDesktopPoolScriptsReq} executeDesktopPoolScriptRequestBody 批量执行脚本请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeDesktopPoolScript(executeDesktopPoolScriptRequest?: ExecuteDesktopPoolScriptRequest): Promise<ExecuteDesktopPoolScriptResponse> {
        const options = ParamCreater().executeDesktopPoolScript(executeDesktopPoolScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容桌面池。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容桌面池
     * @param {string} poolId 桌面池ID。
     * @param {ExpandDesktopPoolReq} expandDesktopPoolRequestBody 扩容桌面池。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandDesktopPool(expandDesktopPoolRequest?: ExpandDesktopPoolRequest): Promise<ExpandDesktopPoolResponse> {
        const options = ParamCreater().expandDesktopPool(expandDesktopPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面池批量扩容磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面池批量扩容磁盘
     * @param {string} poolId 桌面池ID。
     * @param {ExpandDesktopPoolVolumesReq} expandDesktopPoolVolumesRequestBody 桌面池批量扩容磁盘。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandDesktopPoolVolumes(expandDesktopPoolVolumesRequest?: ExpandDesktopPoolVolumesRequest): Promise<ExpandDesktopPoolVolumesResponse> {
        const options = ParamCreater().expandDesktopPoolVolumes(expandDesktopPoolVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定桌面池授权的用户、用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面池授权的用户、用户组
     * @param {string} poolId 桌面池ID。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。取值范围0-100，默认值是10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopPoolAuthorizedObjects(listDesktopPoolAuthorizedObjectsRequest?: ListDesktopPoolAuthorizedObjectsRequest): Promise<ListDesktopPoolAuthorizedObjectsResponse> {
        const options = ParamCreater().listDesktopPoolAuthorizedObjects(listDesktopPoolAuthorizedObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询桌面池列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面池列表
     * @param {string} [name] 桌面池名称。
     * @param {string} [type] 桌面池类型，DYNAMIC：动态池，STATIC：静态池。
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，取值范围0-1000，默认值1000。
     * @param {boolean} [inMaintenanceMode] 按照维护状态过滤。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopPools(listDesktopPoolsRequest?: ListDesktopPoolsRequest): Promise<ListDesktopPoolsResponse> {
        const options = ParamCreater().listDesktopPools(listDesktopPoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询桌面池下的桌面信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面池下的桌面信息
     * @param {string} poolId 桌面池ID。
     * @param {string} [inconsistentType] 通过该类型过滤出与桌面池规格类型不一致的桌面 - PRODUCT: 查找productID与桌面池套餐ID不一致的桌面 - IMAGE: 查找imageID与桌面池镜像ID不一致的桌面
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。取值范围0-100，默认值是10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPoolDesktopsDetail(listPoolDesktopsDetailRequest?: ListPoolDesktopsDetailRequest): Promise<ListPoolDesktopsDetailResponse> {
        const options = ParamCreater().listPoolDesktopsDetail(listPoolDesktopsDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面池重建系统盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面池重建系统盘
     * @param {string} poolId 桌面池ID。
     * @param {RebuildDesktopPoolReq} rebuildDesktopPoolRequestBody 桌面池重建系统盘。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebuildDesktopPool(rebuildDesktopPoolRequest?: RebuildDesktopPoolRequest): Promise<RebuildDesktopPoolResponse> {
        const options = ParamCreater().rebuildDesktopPool(rebuildDesktopPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面池变更规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面池变更规格
     * @param {string} poolId 桌面池ID。
     * @param {ResizeDesktopPoolReq} resizeDesktopPoolRequestBody 桌面池变更规格。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeDesktopPool(resizeDesktopPoolRequest?: ResizeDesktopPoolRequest): Promise<ResizeDesktopPoolResponse> {
        const options = ParamCreater().resizeDesktopPool(resizeDesktopPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于管理员向桌面发送消息通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发送消息通知
     * @param {string} poolId 桌面池ID。
     * @param {SendDesktopPoolNotificationsReq} sendDesktopPoolNotificationsRequestBody 分配桌面池桌面。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendDesktopPoolNotifications(sendDesktopPoolNotificationsRequest?: SendDesktopPoolNotificationsRequest): Promise<SendDesktopPoolNotificationsResponse> {
        const options = ParamCreater().sendDesktopPoolNotifications(sendDesktopPoolNotificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定桌面池Id查询详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面池详情
     * @param {string} poolId 桌面池ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDesktopPoolDetail(showDesktopPoolDetailRequest?: ShowDesktopPoolDetailRequest): Promise<ShowDesktopPoolDetailResponse> {
        const options = ParamCreater().showDesktopPoolDetail(showDesktopPoolDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面池的脚本执行任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面池的脚本执行任务列表
     * @param {string} [desktopPoolId] 桌面池id。
     * @param {string} [scriptId] 脚本id。
     * @param {string} [scriptName] 脚本名称。
     * @param {string} [status] 执行情况。SUCCESS：成功，FAILED：失败，RUNNING：执行中，WAITING：等待。
     * @param {string} [taskType] 查询的任务类型。支持SCRIPT、COMMAND。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。取值范围0-100，默认值是10。
     * @param {string} [executeTimeStart] 按执行时间查询的起始时间。指定该参数后，返回的结果为此时间之后的所有任务记录。时间格式如：“2021-10-01T12:00:00Z”。
     * @param {string} [executeTimeEnd] 按执行时间查询的终止时间。指定该参数后，返回的结果为此时间之前的所有任务记录。时间格式如：“2021-10-01T12:00:00Z”。
     * @param {Array<string>} [taskId] 任务id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDesktopPoolsScriptExecTasks(showDesktopPoolsScriptExecTasksRequest?: ShowDesktopPoolsScriptExecTasksRequest): Promise<ShowDesktopPoolsScriptExecTasksResponse> {
        const options = ParamCreater().showDesktopPoolsScriptExecTasks(showDesktopPoolsScriptExecTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改桌面池属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改桌面池属性
     * @param {string} poolId 桌面池ID。
     * @param {UpdateDesktopPoolAttributesReq} updateDesktopPoolRequestBody 修改桌面池属性请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDesktopPool(updateDesktopPoolRequest?: UpdateDesktopPoolRequest): Promise<UpdateDesktopPoolResponse> {
        const options = ParamCreater().updateDesktopPool(updateDesktopPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同时对多个桌面批量添加标签，如果创建的标签已经存在（key相同）则覆，最大支持100个桌面，每个桌面最大20个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加多个桌面标签
     * @param {BatchAddDesktopsTagsReq} batchAddDesktopsTagsRequestBody 批量桌面添加标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddDesktopsTags(batchAddDesktopsTagsRequest?: BatchAddDesktopsTagsRequest): Promise<BatchAddDesktopsTagsResponse> {
        const options = ParamCreater().batchAddDesktopsTags(batchAddDesktopsTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定桌面批量添加或删除标签。创建时，如果创建的标签已经存在（key相同），则覆盖。删除时，如果删除的标签不存在，默认处理成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除标签
     * @param {string} desktopId 桌面id。
     * @param {TagsReq} batchChangeTagsRequestBody 批量添加删除标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchChangeTags(batchChangeTagsRequest?: BatchChangeTagsRequest): Promise<BatchChangeTagsResponse> {
        const options = ParamCreater().batchChangeTags(batchChangeTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同时对多个桌面批量添加标签，删除时，如果删除的标签不存在默认处理成功，最大支持100个桌面，每个桌面最大20个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除多个桌面标签
     * @param {BatchDeleteDesktopsTagsReq} batchDeleteDesktopsTagsRequestBody 批量添加删除标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDesktopsTags(batchDeleteDesktopsTagsRequest?: BatchDeleteDesktopsTagsRequest): Promise<BatchDeleteDesktopsTagsResponse> {
        const options = ParamCreater().batchDeleteDesktopsTags(batchDeleteDesktopsTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于为桌面创建标签，一个桌面上最多有10个标签。创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建桌面标签
     * @param {string} desktopId 桌面id。
     * @param {CreateTagReq} createTagRequestBody 创建桌面标签请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTag(createTagRequest?: CreateTagRequest): Promise<CreateTagResponse> {
        const options = ParamCreater().createTag(createTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除桌面标签。删除时，如果删除的标签不存在，默认处理成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除桌面标签
     * @param {string} desktopId 桌面id。
     * @param {string} key 标签key。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTag(deleteTagRequest?: DeleteTagRequest): Promise<DeleteTagResponse> {
        const options = ParamCreater().deleteTag(deleteTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤桌面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 使用标签过滤桌面
     * @param {QueryDesktopByTagReq} listDesktopByTagsRequestBody 开通云桌面服务请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopByTags(listDesktopByTagsRequest?: ListDesktopByTagsRequest): Promise<ListDesktopByTagsResponse> {
        const options = ParamCreater().listDesktopByTags(listDesktopByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的所有标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，取值范围0-1000，默认值1000。
     * @param {string} [key] 查询指定标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest): Promise<ListProjectTagsResponse> {
        const options = ParamCreater().listProjectTags(listProjectTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定桌面的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面标签
     * @param {string} desktopId 桌面id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTagByDesktopId(showTagByDesktopIdRequest?: ShowTagByDesktopIdRequest): Promise<ShowTagByDesktopIdResponse> {
        const options = ParamCreater().showTagByDesktopId(showTagByDesktopIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于批量删除用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除用户组
     * @param {BatchDeleteUserGroupsReq} batchDeleteUserGroupsRequestBody 批量删除用户组请求类。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteUserGroups(batchDeleteUserGroupsRequest?: BatchDeleteUserGroupsRequest): Promise<BatchDeleteUserGroupsResponse> {
        const options = ParamCreater().batchDeleteUserGroups(batchDeleteUserGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户组
     * @param {CreateUserGroupReq} createUserGroupRequestBody 创建域用户组的请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUserGroup(createUserGroupRequest?: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
        const options = ParamCreater().createUserGroup(createUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户组
     * @param {string} groupId 桌面用户组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUserGroup(deleteUserGroupRequest?: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
        const options = ParamCreater().deleteUserGroup(deleteUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户组列表，支持分页。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组列表
     * @param {string} [limit] 用于分页查询，返回用户组数量限制。如果不指定或为0，则使用默认值100，从1开始，最大100。
     * @param {string} [offset] 用于分页查询，查询的起始记录序号，从0开始，默认值0，必须与limit同时使用。
     * @param {string} [keyword] 用来匹配用户组的搜索关键字。例如根据组名模糊查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserGroups(listUserGroupsRequest?: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
        const options = ParamCreater().listUserGroups(listUserGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询用户组中的用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组中的用户
     * @param {string} groupId 用户组ID。
     * @param {string} [userName] 用户名支持模糊查询。
     * @param {string} [description] 用户描述支持模糊查询。
     * @param {'USER_ACTIVATE' | 'ADMIN_ACTIVATE'} [activeType] 激活类型。 - USER_ACTIVATE：用户激活 - ADMIN_ACTIVATE：管理员激活
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [limit] 用于分页查询，返回桌面数量限制。如果不指定或为0，默认2000，最大2000。
     * @param {string} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsersOfGroup(listUsersOfGroupRequest?: ListUsersOfGroupRequest): Promise<ListUsersOfGroupResponse> {
        const options = ParamCreater().listUsersOfGroup(listUsersOfGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作用户组，如添加用户、删除用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作用户组
     * @param {string} groupId 桌面用户组ID。
     * @param {ActionsOfUsersInGroupRequest} runActionsOnGroupRequestBody 操作域用户组的请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runActionsOnGroup(runActionsOnGroupRequest?: RunActionsOnGroupRequest): Promise<RunActionsOnGroupResponse> {
        const options = ParamCreater().runActionsOnGroup(runActionsOnGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改用户组信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户组信息
     * @param {string} groupId 桌面用户组ID。
     * @param {EditUserGroupRequest} updateUserGroupRequestBody 修改用户组信息请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserGroup(updateUserGroupRequest?: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
        const options = ParamCreater().updateUserGroup(updateUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询云桌面支持的产品镜像列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品镜像列表
     * @param {string} [osType] 产品镜像的操作系统类型，如Windows。
     * @param {string} [imageType] 镜像类型。 -gold  公共镜像 -private  私有镜像
     * @param {string} [platform] 镜像系统类型,如Windows。
     * @param {string} [architecture] 镜像架构：x86。
     * @param {string} [packageType] 套餐系列。
     * @param {string} [imageId] 镜像Id。
     * @param {number} [limit] 每页数量，范围0-100，默认100。
     * @param {number} [offset] 偏移量,默认0。
     * @param {string} [sortField] 用于排序，表示按照哪个字段排序。取值为镜像属性name、created_at字段，默认为name。
     * @param {string} [sortType] 用于排序，表示升序还是降序，取值为asc和desc。与sort_field一起组合使用，默认为升序asc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImages(listImagesRequest?: ListImagesRequest): Promise<ListImagesResponse> {
        const options = ParamCreater().listImages(listImagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取云市场镜像列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取云市场镜像列表
     * @param {Array<string>} imageIds 镜像id，支持传1到100个。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMarketImages(listMarketImagesRequest?: ListMarketImagesRequest): Promise<ListMarketImagesResponse> {
        const options = ParamCreater().listMarketImages(listMarketImagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期桌面增配变更批量询价。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期桌面增配变更批量询价
     * @param {EstimateAddSubResourcesRequestBody} estimateAddResourcesRequestBody 包周期桌面池批量询价请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateAddResources(estimateAddResourcesRequest?: EstimateAddResourcesRequest): Promise<EstimateAddResourcesResponse> {
        const options = ParamCreater().estimateAddResources(estimateAddResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量包周期桌面切换镜像(由不收费镜像变更至收费镜像)询价。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量包周期桌面切换镜像询价
     * @param {EstimateChangeImageRequestBody} estimateChangeImagesRequestBody 包周期桌面池批量询价请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateChangeImages(estimateChangeImagesRequest?: EstimateChangeImagesRequest): Promise<EstimateChangeImagesResponse> {
        const options = ParamCreater().estimateChangeImages(estimateChangeImagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期桌面池添加单个磁盘批量询价。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期桌面池添加单个磁盘批量询价
     * @param {EstimateAddVolumeRequestBody} estimateDesktopPoolAddVolumeRequestBody 包周期桌面池批量询价请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateDesktopPoolAddVolume(estimateDesktopPoolAddVolumeRequest?: EstimateDesktopPoolAddVolumeRequest): Promise<EstimateDesktopPoolAddVolumeResponse> {
        const options = ParamCreater().estimateDesktopPoolAddVolume(estimateDesktopPoolAddVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期桌面池切换镜像(由不收费镜像变更至收费镜像)批量询价。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期桌面池切换镜像批量询价
     * @param {EstimateChangeImageRequestBody} estimateDesktopPoolChangeImageRequestBody 包周期桌面池批量询价请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateDesktopPoolChangeImage(estimateDesktopPoolChangeImageRequest?: EstimateDesktopPoolChangeImageRequest): Promise<EstimateDesktopPoolChangeImageResponse> {
        const options = ParamCreater().estimateDesktopPoolChangeImage(estimateDesktopPoolChangeImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期桌面池扩容磁盘批量询价。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期桌面池扩容磁盘批量询价
     * @param {EstimateExtendVolumeRequestBody} estimateDesktopPoolExtendVolumeRequestBody 包周期桌面池批量询价请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateDesktopPoolExtendVolume(estimateDesktopPoolExtendVolumeRequest?: EstimateDesktopPoolExtendVolumeRequest): Promise<EstimateDesktopPoolExtendVolumeResponse> {
        const options = ParamCreater().estimateDesktopPoolExtendVolume(estimateDesktopPoolExtendVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期桌面池变更规格批量询价。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期桌面池变更规格批量询价
     * @param {EstimateResizeRequestBody} estimateDesktopPoolResizeRequestBody 包周期桌面池批量询价请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateDesktopPoolResize(estimateDesktopPoolResizeRequest?: EstimateDesktopPoolResizeRequest): Promise<EstimateDesktopPoolResizeResponse> {
        const options = ParamCreater().estimateDesktopPoolResize(estimateDesktopPoolResizeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用来对失败的任务进行重试，当前仅支持开户和销户的任务重试。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试任务
     * @param {string} jobId 任务ID。
     * @param {JobActionsReq} runActionsOnWorkspaceJobRequestBody 桌面云任务操作，包括重试、取消、中止请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runActionsOnWorkspaceJob(runActionsOnWorkspaceJobRequest?: RunActionsOnWorkspaceJobRequest): Promise<RunActionsOnWorkspaceJobResponse> {
        const options = ParamCreater().runActionsOnWorkspaceJob(runActionsOnWorkspaceJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除子任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除子任务
     * @param {DeleteSubJobsReq} batchDeleteSubJobsRequestBody 桌面云任务删除。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSubJobs(batchDeleteSubJobsRequest?: BatchDeleteSubJobsRequest): Promise<BatchDeleteSubJobsResponse> {
        const options = ParamCreater().batchDeleteSubJobs(batchDeleteSubJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询异步任务执行情况，比如查询创建桌面的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 子任务查询
     * @param {string} [status] 任务状态 - SUCCESS：成功。 - RUNNING：运行中。 - FAILED：失败。 - WAITING：等待。
     * @param {string} [jobId] 任务ID。 “job_type”与“job_id”建议至少填写一个
     * @param {string} [jobType] 任务类型。 “job_type”与“job_id”建议至少填写一个  - createDesktops：创建桌面任务。  - applyWorkspace：开通云桌面服务。  - cancelWorkspace：注销云桌面服务。  - expandVolumes: 扩容磁盘。  - addVolumes: 添加磁盘。  - rebuildDesktops：重建桌面系统盘。  - createSnapshot：创建磁盘快照。  - deleteSnapshot：删除磁盘快照。  - deleteDesktops：删除桌面。  - desktopRejoinDomain：桌面重新加域。  - operateDesktops：操作桌面。  - restoreDesktopBySnapshot：使用快照恢复桌面。  - desktopToImage：桌面转镜像。  - attachDesktops：分配桌面。  - deleteVolumes：删除桌面磁盘（数据盘）。  - createWksSnapshot：创建快照。  - deleteWksSnapshot：删除快照。    - createDesktopPool：创建桌面池。  - expandDesktopPool：扩容桌面池。   - deleteDesktopPoolVolumes：桌面池删除桌面磁盘（数据盘）。  - rebuildDesktopPool：桌面池重建系统盘。  - addDesktopPoolVolumes：桌面池添加磁盘。  - detachDesktops：解绑桌面池桌面。  - attachDesktopPool：分配桌面池桌面。  - batchDetachDesktops：批量解绑桌面用户。  - executeDesktopsAction：桌面操作。  - changeDesktopNetwork：桌面切换网络。  - batchChangeDesktopNetwork：桌面切换网络。
     * @param {string} [desktopPoolId] 桌面池ID。
     * @param {number} [limit] 用于分页查询，取值范围0~1000，默认1000。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listItaSubJobs(listItaSubJobsRequest?: ListItaSubJobsRequest): Promise<ListItaSubJobsResponse> {
        const options = ParamCreater().listItaSubJobs(listItaSubJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询异步任务的执行情况，比如查询创建桌面任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务详情
     * @param {string} jobId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        const options = ParamCreater().showJob(showJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的NAT映射配置项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的NAT映射配置项
     * @param {string} [siteId] 站点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNatMappingConfigs(listNatMappingConfigsRequest?: ListNatMappingConfigsRequest): Promise<ListNatMappingConfigsResponse> {
        const options = ParamCreater().listNatMappingConfigs(listNatMappingConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改租户的NAT映射配置项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改租户的NAT映射配置项
     * @param {UpdateNatMappingConfigsReq} updateNatMappingConfigsRequestBody 修改租户的NAT映射配置项响应请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNatMappingConfigs(updateNatMappingConfigsRequest?: UpdateNatMappingConfigsRequest): Promise<UpdateNatMappingConfigsResponse> {
        const options = ParamCreater().updateNatMappingConfigs(updateNatMappingConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开通桌面上网功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通桌面上网功能
     * @param {ApplyDesktopsInternetReq} applyDesktopsInternetRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyDesktopsInternet(applyDesktopsInternetRequest?: ApplyDesktopsInternetRequest): Promise<ApplyDesktopsInternetResponse> {
        const options = ParamCreater().applyDesktopsInternet(applyDesktopsInternetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开通上网功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通上网功能
     * @param {ApplyInternetReq} applyInternetRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyInternet(applyInternetRequest?: ApplyInternetRequest): Promise<ApplyInternetResponse> {
        const options = ParamCreater().applyInternet(applyInternetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建按需云办公带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云办公带宽
     * @param {ApplySubnetBandwidthReq} applySubnetBandwidthRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applySubnetBandwidth(applySubnetBandwidthRequest?: ApplySubnetBandwidthRequest): Promise<ApplySubnetBandwidthResponse> {
        const options = ParamCreater().applySubnetBandwidth(applySubnetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面绑定EIP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面绑定EIP
     * @param {AssociateDesktopsEipReq} associateDesktopsEipRequestBody 桌面绑定EIP请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateDesktopsEip(associateDesktopsEipRequest?: AssociateDesktopsEipRequest): Promise<AssociateDesktopsEipResponse> {
        const options = ParamCreater().associateDesktopsEip(associateDesktopsEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量桌面解绑EIP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量桌面解绑EIP
     * @param {BatchDisassociateDesktopsEipReq} batchDisassociateDesktopsEipRequestBody 批量桌面解绑EIP请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisassociateDesktopsEip(batchDisassociateDesktopsEipRequest?: BatchDisassociateDesktopsEipRequest): Promise<BatchDisassociateDesktopsEipResponse> {
        const options = ParamCreater().batchDisassociateDesktopsEip(batchDisassociateDesktopsEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云办公带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云办公带宽
     * @param {string} bandwidthId 云办公带宽id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubnetBandwidth(deleteSubnetBandwidthRequest?: DeleteSubnetBandwidthRequest): Promise<DeleteSubnetBandwidthResponse> {
        const options = ParamCreater().deleteSubnetBandwidth(deleteSubnetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已绑定桌面和未绑定的EIP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已绑定桌面和未绑定的EIP
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [desktopId] 桌面ID。
     * @param {string} [desktopName] 桌面名称。
     * @param {string} [userName] 桌面所属用户。
     * @param {string} [address] EIP地址。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。如果不指定，则返回所有符合条件的记录。
     * @param {string} [state] EIP绑定状态。 - bind：表示已绑定的EIP。 - unbind：表示未绑定的EIP。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopsEips(listDesktopsEipsRequest?: ListDesktopsEipsRequest): Promise<ListDesktopsEipsResponse> {
        const options = ParamCreater().listDesktopsEips(listDesktopsEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询上网功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询上网功能
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [natName] NAT网关名称。
     * @param {string} [eip] EIP地址。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInternet(listInternetRequest?: ListInternetRequest): Promise<ListInternetResponse> {
        const options = ParamCreater().listInternet(listInternetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询NAT网关列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询NAT网关列表
     * @param {string} [id] 公网NAT网关实例的ID。
     * @param {string} [enterpriseProjectId] 企业项目ID。创建公网NAT网关实例时，关联的企业项目ID。
     * @param {string} [description] 公网NAT网关实例的描述，长度限制为255。
     * @param {string} [createdAt] 公网NAT网关实例的创建时间，遵循UTC时间，格式是yyyy-mm-ddThh:mm:ssZ。
     * @param {string} [name] 公网NAT网关实例的名字，长度限制为64。公网NAT网关实例的名字仅支持数字、字母、_（下划线）、-（中划线）、中文。
     * @param {Array<'ACTIVE' | 'INACTIVE' | 'PENDING_CREATE' | 'PENDING_UPDATE' | 'PENDING_DELETE'>} [status] 公网NAT网关实例的状态。 枚举值：  ACTIVE PENDING_CREATE PENDING_UPDATE PENDING_DELETE INACTIVE
     * @param {Array<string>} [spec] 公网NAT网关实例的规格。取值为： \&quot;1\&quot;：小型，SNAT最大连接数10000；\&quot;2\&quot;：中型，SNAT最大连接数50000；\&quot;3\&quot;：大型，SNAT最大连接数200000；\&quot;4\&quot;：超大型，SNAT最大连接数1000000。
     * @param {string} [routerId] VPC的id。
     * @param {number} [limit] 功能说明：每页返回的个数。取值范围：1~2000。默认值：2000。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNatGateways(listNatGatewaysRequest?: ListNatGatewaysRequest): Promise<ListNatGatewaysResponse> {
        const options = ParamCreater().listNatGateways(listNatGatewaysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询端口列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询端口列表
     * @param {string} [marker] 分页查询的起始资源ID。
     * @param {number} [limit] 功能说明：每页返回的个数。取值范围：1~2000。默认值：2000。
     * @param {string} [ipAddress] ip地址。
     * @param {string} [subnetId] 子网ID。
     * @param {boolean} [isUsed] 是否被使用。
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
     * 查询云办公带宽列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云办公带宽列表
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。如果不指定，则返回所有符合条件的记录。
     * @param {string} [vpcId] vpc id。
     * @param {string} [subnetId] 子网id。
     * @param {string} [bandwidthId] 云办公带宽id。
     * @param {string} [bandwidthName] 云办公带宽名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubnetBandwidths(listSubnetBandwidthsRequest?: ListSubnetBandwidthsRequest): Promise<ListSubnetBandwidthsResponse> {
        const options = ParamCreater().listSubnetBandwidths(listSubnetBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云办公带宽的控制配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云办公带宽的控制配置
     * @param {string} bandwidthId 云办公带宽id。
     * @param {string} [desktopId] 桌面id。
     * @param {string} [desktopName] 桌面名称。
     * @param {string} [userName] 桌面分配用户。
     * @param {'BLACK' | 'WHITE'} [controlMode] 控制模式，支持： - BLACK 黑名单 - WHITE 白名单
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。如果不指定，则返回所有符合条件的记录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubnetBandwidthControlList(showSubnetBandwidthControlListRequest?: ShowSubnetBandwidthControlListRequest): Promise<ShowSubnetBandwidthControlListResponse> {
        const options = ParamCreater().showSubnetBandwidthControlList(showSubnetBandwidthControlListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据子网id列表查询正在被桌面使用的子网id，并且返回subnetId列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询正在被使用的子网id列表
     * @param {string} [subnetIds] 子网id列表逗号分隔。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUsingSubnets(showUsingSubnetsRequest?: ShowUsingSubnetsRequest): Promise<ShowUsingSubnetsResponse> {
        const options = ParamCreater().showUsingSubnets(showUsingSubnetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云办公带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云办公带宽
     * @param {string} bandwidthId 云办公带宽id。
     * @param {UpdateSubnetBandwidthReq} updateSubnetBandwidthRequestBody 修改云办公带宽请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubnetBandwidth(updateSubnetBandwidthRequest?: UpdateSubnetBandwidthRequest): Promise<UpdateSubnetBandwidthResponse> {
        const options = ParamCreater().updateSubnetBandwidth(updateSubnetBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云办公带宽的控制配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云办公带宽的控制配置
     * @param {string} bandwidthId 云办公带宽id。
     * @param {UpdateSubnetBandwidthControlListReq} updateSubnetBandwidthControlListRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubnetBandwidthControlList(updateSubnetBandwidthControlListRequest?: UpdateSubnetBandwidthControlListRequest): Promise<UpdateSubnetBandwidthControlListResponse> {
        const options = ParamCreater().updateSubnetBandwidthControlList(updateSubnetBandwidthControlListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更规格、扩容磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建变更订单
     * @param {string} desktopId 桌面id。
     * @param {CreateChangeOrderReq} createChangeOrderRequestBody 创建变更请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createChangeOrder(createChangeOrderRequest?: CreateChangeOrderRequest): Promise<CreateChangeOrderResponse> {
        const options = ParamCreater().createChangeOrder(createChangeOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期桌面批量变更下单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期桌面批量变更下单
     * @param {CreateBatchChangeOrderRequestBody} createDesktopBatchOrderRequestBody 包周期桌面批量下单请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDesktopBatchOrder(createDesktopBatchOrderRequest?: CreateDesktopBatchOrderRequest): Promise<CreateDesktopBatchOrderResponse> {
        const options = ParamCreater().createDesktopBatchOrder(createDesktopBatchOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建桌面订单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建桌面订单
     * @param {CreateDesktopOrderRequestBody} createDesktopOrderRequestBody 创建桌面订单请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDesktopOrder(createDesktopOrderRequest?: CreateDesktopOrderRequest): Promise<CreateDesktopOrderResponse> {
        const options = ParamCreater().createDesktopOrder(createDesktopOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期桌面池批量变更下单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期桌面池批量变更下单
     * @param {CreateBatchChangeOrderRequestBody} createDesktopPoolChangeOrderRequestBody 包周期桌面池批量变更下单请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDesktopPoolChangeOrder(createDesktopPoolChangeOrderRequest?: CreateDesktopPoolChangeOrderRequest): Promise<CreateDesktopPoolChangeOrderResponse> {
        const options = ParamCreater().createDesktopPoolChangeOrder(createDesktopPoolChangeOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期资源（桌面、磁盘）下订单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期下单
     * @param {CreateOrderReq} createOrderRequestBody 创建订单请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrder(createOrderRequest?: CreateOrderRequest): Promise<CreateOrderResponse> {
        const options = ParamCreater().createOrder(createOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期云办公带宽变更下单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期云办公带宽变更下单
     * @param {string} bandwidthId 云办公带宽id。
     * @param {CreateSubnetBandwidthChangeOrderRequestBody} createSubnetBandwidthChangeOrderRequestBody 包周期云办公带宽变更下单请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubnetBandwidthChangeOrder(createSubnetBandwidthChangeOrderRequest?: CreateSubnetBandwidthChangeOrderRequest): Promise<CreateSubnetBandwidthChangeOrderResponse> {
        const options = ParamCreater().createSubnetBandwidthChangeOrder(createSubnetBandwidthChangeOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建OU。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增OU信息
     * @param {AddOuNameInfoV2Req} addOuRequestBody 创建OU信息请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addOu(addOuRequest?: AddOuRequest): Promise<AddOuResponse> {
        const options = ParamCreater().addOu(addOuRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除OU信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除OU信息
     * @param {string} ouId OU的id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOu(deleteOuRequest?: DeleteOuRequest): Promise<DeleteOuResponse> {
        const options = ParamCreater().deleteOu(deleteOuRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OU下用户信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OU下用户信息
     * @param {string} ouDn OU的域名地址。
     * @param {string} [userName] 用户名，支持模糊查询。
     * @param {boolean} [hasExisted] 用户是否已存在。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。如果不指定，则返回所有符合条件的桌面。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAdOuUsers(listAdOuUsersRequest?: ListAdOuUsersRequest): Promise<ListAdOuUsersResponse> {
        const options = ParamCreater().listAdOuUsers(listAdOuUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询AD里的OU列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询AD里的OU列表
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。如果不指定，则返回所有符合条件的桌面。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAdOus(listAdOusRequest?: ListAdOusRequest): Promise<ListAdOusResponse> {
        const options = ParamCreater().listAdOus(listAdOusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OU列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OU列表
     * @param {string} [ouName] OU名称。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。如果不指定，则返回所有符合条件的桌面。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOuDetails(listOuDetailsRequest?: ListOuDetailsRequest): Promise<ListOuDetailsResponse> {
        const options = ParamCreater().listOuDetails(listOuDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新OU信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新OU信息
     * @param {string} ouId OU的id。
     * @param {ModifyOuNameInfoV2Req} updateOuInfoRequestBody 更新OU信息请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOuInfo(updateOuInfoRequest?: UpdateOuInfoRequest): Promise<UpdateOuInfoResponse> {
        const options = ParamCreater().updateOuInfo(updateOuInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量增加、删除应用对象到指定策略组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改策略组应用对象
     * @param {string} policyGroupId 策略组id。
     * @param {ModifyPolicyTargetReq} batchUpdateTargetOfPolicyGroupRequestBody 修改策略组应用请求对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateTargetOfPolicyGroup(batchUpdateTargetOfPolicyGroupRequest?: BatchUpdateTargetOfPolicyGroupRequest): Promise<BatchUpdateTargetOfPolicyGroupResponse> {
        const options = ParamCreater().batchUpdateTargetOfPolicyGroup(batchUpdateTargetOfPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增策略组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增策略组
     * @param {CreatePolicyGroupReq} [createPolicyGroupRequestBody] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicyGroup(createPolicyGroupRequest?: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
        const options = ParamCreater().createPolicyGroup(createPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定策略组，包含策略组对应的策略信息以及应用对象信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除策略组
     * @param {string} policyGroupId 策略组id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicyGroup(deletePolicyGroupRequest?: DeletePolicyGroupRequest): Promise<DeletePolicyGroupResponse> {
        const options = ParamCreater().deletePolicyGroup(deletePolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询初始策略项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询初始策略项
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOriginalPolicyInfo(listOriginalPolicyInfoRequest?: ListOriginalPolicyInfoRequest): Promise<ListOriginalPolicyInfoResponse> {
        const options = ParamCreater().listOriginalPolicyInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定策略组内的策略项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组中的策略项
     * @param {string} policyGroupId 策略组id。
     * @param {string} [policyType] 根据策略类型过滤结果，不传则查询所有策略。 可选类型: - 外设：Peripherals; - 音频：Audio; - 客户端：Client; - 显示：Display; - 文件与剪切板：FileAndClip; - 接入控制：ClientAccessControl; - 会话：SessionAutoDisconnect; - 虚拟通道：VirtualChannel - 水印：Watermark; - 键盘鼠标：KeyboardAndMouse; - 通用音视频旁路：Seamless。 - 录屏审计：RecordAudit。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPoliciesOfPolicyGroup(listPoliciesOfPolicyGroupRequest?: ListPoliciesOfPolicyGroupRequest): Promise<ListPoliciesOfPolicyGroupResponse> {
        const options = ParamCreater().listPoliciesOfPolicyGroup(listPoliciesOfPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据策略组ID查询策略组详细信息，包含策略信息以及应用对象信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组
     * @param {string} policyGroupId 策略组id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyDetailInfoById(listPolicyDetailInfoByIdRequest?: ListPolicyDetailInfoByIdRequest): Promise<ListPolicyDetailInfoByIdResponse> {
        const options = ParamCreater().listPolicyDetailInfoById(listPolicyDetailInfoByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询策略组概要信息列表，不包含策略信息以及应用对象信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组列表
     * @param {number} [limit] 用于分页查询，返回策略组数量的限制。如果不指定，则返回所有符合条件的策略组。范围0~100。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，范围0~1000。
     * @param {string} [policyGroupId] 根据策略组ID过滤结果。
     * @param {string} [policyGroupName] 根据策略组名字过滤结果。
     * @param {number} [priority] 根据优先级过滤结果。所带的值需要满足现有策略组已有最大优先级值。
     * @param {string} [updateTime] 根据更新时间过滤结果。时间格式满足：yyyy-MM-dd HH:mm:ss。
     * @param {string} [description] 策略组描述。
     * @param {boolean} [isGroupNameAccurate] 策略组名字精确查询。
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
     * 包含策略信息以及应用对象的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组详情列表
     * @param {number} [limit] 用于分页查询。范围0-100。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，范围0-10000。
     * @param {string} [policyGroupId] 根据策略组ID过滤结果。
     * @param {string} [policyGroupName] 根据策略组名字过滤结果。
     * @param {number} [priority] 根据优先级过滤结果。所带的值需要满足现有策略组已有最大优先级值。
     * @param {string} [updateTime] 根据更新时间过滤结果。时间格式满足：yyyy-MM-dd HH:mm:ss。
     * @param {string} [description] 策略组描述。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyGroupInfo(listPolicyGroupInfoRequest?: ListPolicyGroupInfoRequest): Promise<ListPolicyGroupInfoResponse> {
        const options = ParamCreater().listPolicyGroupInfo(listPolicyGroupInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定策略组所应用的对象。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组应用对象
     * @param {string} policyGroupId 策略组id。
     * @param {string} [targetType] 应用对象的类型。 - INSTANCE：表示桌面。 - USER：表示用户。 - OU：表示组织单元。 - CLIENTIP：终端IP地址。
     * @param {string} [targetName] 对象名称，支持模糊查询。
     * @param {number} [limit] 每页数量。范围0-1000。
     * @param {string} [offset] 偏移量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTargetOfPolicyGroup(listTargetOfPolicyGroupRequest?: ListTargetOfPolicyGroupRequest): Promise<ListTargetOfPolicyGroupResponse> {
        const options = ParamCreater().listTargetOfPolicyGroup(listTargetOfPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改一个策略组的部分或者所有策略项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改策略组中的策略项
     * @param {string} policyGroupId 策略组id。
     * @param {ModifyPolicyRequest} updatePoliciesOfPolicyGroupRequestBody 修改一个策略组的部分或者所有策略项请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePoliciesOfPolicyGroup(updatePoliciesOfPolicyGroupRequest?: UpdatePoliciesOfPolicyGroupRequest): Promise<UpdatePoliciesOfPolicyGroupResponse> {
        const options = ParamCreater().updatePoliciesOfPolicyGroup(updatePoliciesOfPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定策略组的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改策略组
     * @param {string} policyGroupId 策略组id。
     * @param {ModifyPolicyGroupRequest} updatePolicyGroupRequestBody 修改指定策略组请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyGroup(updatePolicyGroupRequest?: UpdatePolicyGroupRequest): Promise<UpdatePolicyGroupResponse> {
        const options = ParamCreater().updatePolicyGroup(updatePolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询可订购小时包类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可订购小时包类型
     * @param {string} [desktopResourceSpecCode] 小时包对应的按需桌面的资源规格编码。
     * @param {string} [resourceSpecCode] 小时包的资源规格编码。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHourPackagesType(listHourPackagesTypeRequest?: ListHourPackagesTypeRequest): Promise<ListHourPackagesTypeResponse> {
        const options = ParamCreater().listHourPackagesType(listHourPackagesTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询云桌面支持的产品套餐列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品套餐列表
     * @param {string} [productId] 产品ID。
     * @param {string} [availabilityZone] 可用分区。
     * @param {string} [osType] 产品套餐的操作系统类型，当前支持：Windows、Linux。
     * @param {string} [chargeMode] 周期套餐标识。0表示包周期，1表示按需。
     * @param {string} [architecture] 架构类型，当前支持：arm、x86。
     * @param {string} [packageType] 套餐系列。
     * @param {number} [limit] 每页数量，范围0-100，默认100。
     * @param {number} [offset] 偏移量，默认0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProducts(listProductsRequest?: ListProductsRequest): Promise<ListProductsResponse> {
        const options = ParamCreater().listProducts(listProductsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询协同套餐列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询协同套餐列表
     * @param {string} [productId] 产品ID。
     * @param {string} [shareSpaceSize] 协同方数。该套餐支持的最大协同人数。
     * @param {string} [chargeMode] 周期套餐标识。0表示包周期，1表示按需, 6表示一次性计费。
     * @param {number} [isGpu] 是否是GPU套餐。1表示GPU套餐，0表示非GPU套餐，默认null查询所有类型。
     * @param {string} [packageType] 套餐系列。user_sharer表示用户协同套餐，desktop_sharer表示桌面协同套餐。
     * @param {number} [limit] 每页数量，范围0-100，默认100。
     * @param {number} [offset] 偏移量，默认0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSharerProducts(listSharerProductsRequest?: ListSharerProductsRequest): Promise<ListSharerProductsResponse> {
        const options = ParamCreater().listSharerProducts(listSharerProductsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户功能状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户功能状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTenantProfiles(listTenantProfilesRequest?: ListTenantProfilesRequest): Promise<ListTenantProfilesResponse> {
        const options = ParamCreater().listTenantProfiles();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启禁用租户功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启禁用租户功能
     * @param {{ [key: string]: boolean; }} updateTenantProfileRequestBody 启禁用租户功能。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTenantProfile(updateTenantProfileRequest?: UpdateTenantProfileRequest): Promise<UpdateTenantProfileResponse> {
        const options = ParamCreater().updateTenantProfile(updateTenantProfileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户单个站点配额详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户单个站点配额详情
     * @param {string} [siteId] 站点ID。
     * @param {string} [azCode] 可用分区code。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotaDetails(showQuotaDetailsRequest?: ShowQuotaDetailsRequest): Promise<ShowQuotaDetailsResponse> {
        const options = ParamCreater().showQuotaDetails(showQuotaDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Console Framework和WKSDesktopManager调用该接口查询租户配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotas(showQuotasRequest?: ShowQuotasRequest): Promise<ShowQuotasResponse> {
        const options = ParamCreater().showQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除定时任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除定时任务
     * @param {DeleteScheduledTasksReq} [batchDeleteScheduledTasksRequestBody] 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteScheduledTasks(batchDeleteScheduledTasksRequest?: BatchDeleteScheduledTasksRequest): Promise<BatchDeleteScheduledTasksResponse> {
        const options = ParamCreater().batchDeleteScheduledTasks(batchDeleteScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建定时任务。
     * 注:需通过开通委托功能接口先对云服务进行授权才可以使用该功能
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建定时任务
     * @param {CreateScheduledTasksReq} createScheduledTasksRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScheduledTasks(createScheduledTasksRequest?: CreateScheduledTasksRequest): Promise<CreateScheduledTasksResponse> {
        const options = ParamCreater().createScheduledTasks(createScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除定时任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除定时任务
     * @param {string} taskId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScheduledTasks(deleteScheduledTasksRequest?: DeleteScheduledTasksRequest): Promise<DeleteScheduledTasksResponse> {
        const options = ParamCreater().deleteScheduledTasks(deleteScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 未来执行的具体时间列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 未来执行的具体时间列表
     * @param {ListFutureExecutionsReq} listFutureExecutionsRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFutureExecutions(listFutureExecutionsRequest?: ListFutureExecutionsRequest): Promise<ListFutureExecutionsResponse> {
        const options = ParamCreater().listFutureExecutions(listFutureExecutionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询定时任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时任务列表
     * @param {number} offset 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} limit 用于分页查询，每页返回的个数，取值范围0~50。
     * @param {string} [taskName] 任务名称。
     * @param {string} [taskType] 任务类型。START：开机，STOP：关机，REBOOT：重启，HIBERNATE：休眠，REBUILD：重建系统盘，EXECUTE_SCRIPT：执行脚本，CREATE_SNAPSHOT：创建EVS镜像。
     * @param {string} [scheduledType] 执行周期类型。FIXED_TIME：指定时间，DAY：按天，WEEK：按周，MONTH：按月，LIFE_CYCLE：触发式。指定LIFE_CYCLE时，才返回触发式任务。
     * @param {string} [lifeCycleType] 触发场景类型。POST_CREATE_DESKTOP_SUCCESS：创建桌面成功后，POST_REBUILD_DESKTOP_SUCCESS：重建桌面成功后，POST_REATTACH_DESKTOP_SUCCESS：触发重建的分配用户任务成功后，POST_DESKTOP_DISCONNECTED：桌面断开连接后。
     * @param {string} [lastStatus] 最近一次执行状态。SUCCESS：成功，SKIP：跳过，FAIL：失败。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledTasks(listScheduledTasksRequest?: ListScheduledTasksRequest): Promise<ListScheduledTasksResponse> {
        const options = ParamCreater().listScheduledTasks(listScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询定时任务执行记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时任务执行记录
     * @param {string} taskId 任务ID。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回桌面数量限制。取值范围0-100，默认值是10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledTasksRecords(listScheduledTasksRecordsRequest?: ListScheduledTasksRecordsRequest): Promise<ListScheduledTasksRecordsResponse> {
        const options = ParamCreater().listScheduledTasksRecords(listScheduledTasksRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询定时任务执行记录详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时任务执行记录详情
     * @param {string} taskId 任务ID。
     * @param {string} recordId 任务执行记录ID。
     * @param {number} offset 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} limit 用于分页查询，每页返回的个数，取值范围0~100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledTasksRecordsDetails(listScheduledTasksRecordsDetailsRequest?: ListScheduledTasksRecordsDetailsRequest): Promise<ListScheduledTasksRecordsDetailsResponse> {
        const options = ParamCreater().listScheduledTasksRecordsDetails(listScheduledTasksRecordsDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取时区配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取时区配置
     * @param {string} [timeZoneName] 按照时区name过滤。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTimeZones(listTimeZonesRequest?: ListTimeZonesRequest): Promise<ListTimeZonesResponse> {
        const options = ParamCreater().listTimeZones(listTimeZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询定时任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时任务详情
     * @param {string} taskId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScheduledTasks(showScheduledTasksRequest?: ShowScheduledTasksRequest): Promise<ShowScheduledTasksResponse> {
        const options = ParamCreater().showScheduledTasks(showScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改定时任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改定时任务
     * @param {string} taskId 任务ID。
     * @param {UpdateScheduledTasksReq} updateScheduledTasksRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScheduledTasks(updateScheduledTasksRequest?: UpdateScheduledTasksRequest): Promise<UpdateScheduledTasksResponse> {
        const options = ParamCreater().updateScheduledTasks(updateScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除录屏记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除录屏记录
     * @param {BatchDeleteScreenRecordsRequestBody} [batchDeleteScreenRecordsRequestBody] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteScreenRecords(batchDeleteScreenRecordsRequest?: BatchDeleteScreenRecordsRequest): Promise<BatchDeleteScreenRecordsResponse> {
        const options = ParamCreater().batchDeleteScreenRecords(batchDeleteScreenRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桌面关键事件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面关键事件列表
     * @param {string} recordId 录屏记录UUID。
     * @param {string} [eventType] 事件类型。 - APP：应用监控。 - FILE：文件监控。 - REG：注册表监控。 - HDP：协议行为监控。
     * @param {string} [eventId] 事件ID。 - APP_START：应用程序启动 - APP_STOP：应用程序结束 - APP_CRASH：应用程序异常退出 - APP_HANG：应用程序无响应 - APP_INSTALL：应用安装 - APP_UNINSTALL：应用卸裁 - FILE_CREATE：文件创建 - FILE_DELETE：文件删除 - FILE_RENAME：文件改名 - HDP_FILE：文件重定向 - HDP_USB：USB插拔事件 - HDP_CLIPBOARD：剪切板操作 - HDP_INPUTIDLE：空闲无操作 - HDP_PRINT：文件打印
     * @param {string} [eventLevel] 事件级别。 - INFO：提示。 - ALARM：告警。 - ERROR：异常。
     * @param {string} [eventData] 事件内容。
     * @param {number} [limit] 用于分页查询，返回录屏记录数量的限制。默认100。范围0~1000。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopOperations(listDesktopOperationsRequest?: ListDesktopOperationsRequest): Promise<ListDesktopOperationsResponse> {
        const options = ParamCreater().listDesktopOperations(listDesktopOperationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询下载地址列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询下载地址列表
     * @param {ListDownloadAddressRequestBody} [listDownloadAddressRequestBody] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDownloadAddress(listDownloadAddressRequest?: ListDownloadAddressRequest): Promise<ListDownloadAddressResponse> {
        const options = ParamCreater().listDownloadAddress(listDownloadAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询录屏记录列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录屏记录列表
     * @param {number} [limit] 用于分页查询，返回录屏记录数量的限制。默认100。范围0~1000。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {string} [desktopId] 根据桌面ID过滤结果。
     * @param {string} [username] 根据用户名称过滤结果。
     * @param {string} [status] 录屏状态。 - RECORDING：录制中。 - REC_COMPLETED：录制完成。 - UPLOADING：上传中。 - UPLOAD_COMPLETED：上传完成。
     * @param {string} [type] 录屏类型。 - FULL：全程录屏。 - INTERVAL：间隔录屏。 - OPERATION：用户操作录屏。 - SESSION：监听会话生命周期录屏。
     * @param {string} [startTime] 开始时间，格式为yyyy-MM-dd HH:mm:ss（UTC时间，不传查默认最近15天）。
     * @param {string} [endTime] 结束时间，格式为yyyy-MM-dd HH:mm:ss（UTC时间，不传查默认最近15天）。
     * @param {string} [sortField] 用于排序，表示按照哪个字段排序。取值为录屏属性start_time字段。
     * @param {string} [sortType] 用于排序，表示升序还是降序，取值为asc和desc。与sort_field一起组合使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScreenRecords(listScreenRecordsRequest?: ListScreenRecordsRequest): Promise<ListScreenRecordsResponse> {
        const options = ParamCreater().listScreenRecords(listScreenRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询录屏详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询录屏详情
     * @param {string} recordId 录屏记录UUID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScreenRecord(showScreenRecordRequest?: ShowScreenRecordRequest): Promise<ShowScreenRecordResponse> {
        const options = ParamCreater().showScreenRecord(showScreenRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增脚本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增脚本
     * @param {CreateScriptReq} createScriptRequestBody 创建脚本信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScript(createScriptRequest?: CreateScriptRequest): Promise<CreateScriptResponse> {
        const options = ParamCreater().createScript(createScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除脚本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除脚本
     * @param {string} scriptId 脚本ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScript(deleteScriptRequest?: DeleteScriptRequest): Promise<DeleteScriptResponse> {
        const options = ParamCreater().deleteScript(deleteScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量执行脚本或命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量执行脚本或命令
     * @param {ExecuteScriptOrCommandReq} executeScriptOrCommandRequestBody 批量执行脚本请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeScriptOrCommand(executeScriptOrCommandRequest?: ExecuteScriptOrCommandRequest): Promise<ExecuteScriptOrCommandResponse> {
        const options = ParamCreater().executeScriptOrCommand(executeScriptOrCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询脚本执行记录列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询脚本执行记录列表
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {Array<string>} [resourceId] 执行脚本的资源ID列表。
     * @param {Array<string>} [resourceGroupId] 执行脚本的资源组ID。
     * @param {Array<string>} [scriptId] 执行的脚本ID。
     * @param {Array<string>} [scriptName] 执行的脚本名称。
     * @param {string} [status] 执行脚本的执行情况。
     * @param {boolean} [isFirstOrder] 是否首批执行。
     * @param {string} [scriptTaskId] 执行脚本的任务ID。
     * @param {string} [taskType] 执行记录的任务类型(SCRIPT/COMMAND)。
     * @param {boolean} [showHistory] 是否查询历史记录，默认为false，为true时需要同时传入resource_id与script_id。
     * @param {string} [executeTimeStart] 按执行时间查询的起始时间。指定该参数后，返回的结果为此时间之后的所有执行记录。时间格式如：“2021-10-01T12:00:00Z”。
     * @param {string} [executeTimeEnd] 按执行时间查询的终止时间。指定该参数后，返回的结果为此时间之前的所有执行记录。时间格式如：“2021-10-01T12:00:00Z”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScriptRecords(listScriptRecordsRequest?: ListScriptRecordsRequest): Promise<ListScriptRecordsResponse> {
        const options = ParamCreater().listScriptRecords(listScriptRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询脚本任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询脚本任务列表
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {Array<string>} [resourceGroupId] 执行脚本的资源组ID。
     * @param {string} [scriptId] 脚本ID。
     * @param {string} [scriptName] 脚本名。
     * @param {string} [status] 执行情况。
     * @param {string} [resourceGroupType] 资源组类型。
     * @param {Array<string>} [taskId] 执行脚本的任务ID。
     * @param {string} [taskType] 任务类型(SCRIPT/COMMAND)。
     * @param {string} [executeTimeStart] 按执行时间查询的起始时间。指定该参数后，返回的结果为此时间之后的所有任务记录。时间格式如：“2021-10-01T12:00:00Z”。
     * @param {string} [executeTimeEnd] 按执行时间查询的终止时间。指定该参数后，返回的结果为此时间之前的所有任务记录。时间格式如：“2021-10-01T12:00:00Z”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScriptTasks(listScriptTasksRequest?: ListScriptTasksRequest): Promise<ListScriptTasksResponse> {
        const options = ParamCreater().listScriptTasks(listScriptTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询脚本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询脚本列表
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {string} [id] 脚本ID。
     * @param {string} [name] 脚本名称。
     * @param {string} [type] 脚本类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScripts(listScriptsRequest?: ListScriptsRequest): Promise<ListScriptsResponse> {
        const options = ParamCreater().listScripts(listScriptsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重试脚本或执行脚本失败的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试脚本或执行脚本失败的任务
     * @param {RetryScriptExecutionReq} retryScriptExecutionRequestBody 重试脚本请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryScriptExecution(retryScriptExecutionRequest?: RetryScriptExecutionRequest): Promise<RetryScriptExecutionResponse> {
        const options = ParamCreater().retryScriptExecution(retryScriptExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询脚本详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询脚本详情
     * @param {string} scriptId 脚本ID。
     * @param {string} [scriptTaskId] 执行脚本的任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScriptDetail(showScriptDetailRequest?: ShowScriptDetailRequest): Promise<ShowScriptDetailResponse> {
        const options = ParamCreater().showScriptDetail(showScriptDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询脚本执行记录详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询脚本执行记录详情
     * @param {string} recordId 脚本执行记录ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScriptRecordDetail(showScriptRecordDetailRequest?: ShowScriptRecordDetailRequest): Promise<ShowScriptRecordDetailResponse> {
        const options = ParamCreater().showScriptRecordDetail(showScriptRecordDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止脚本或者命令执行任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止脚本或者命令执行任务
     * @param {StopScriptExecutionReq} stopScriptExecutionRequestBody 停止脚本或者命令执行任务请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopScriptExecution(stopScriptExecutionRequest?: StopScriptExecutionRequest): Promise<StopScriptExecutionResponse> {
        const options = ParamCreater().stopScriptExecution(stopScriptExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新脚本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新脚本
     * @param {string} scriptId 脚本ID。
     * @param {UpdateScriptReq} updateScriptRequestBody 更新脚本的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScript(updateScriptRequest?: UpdateScriptRequest): Promise<UpdateScriptResponse> {
        const options = ParamCreater().updateScript(updateScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 存量桌面购买附属资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面购买附属资源
     * @param {AddDesktopSubResourcesReq} addDesktopSubResourcesRequestBody 桌面购买附属资源请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDesktopSubResources(addDesktopSubResourcesRequest?: AddDesktopSubResourcesRequest): Promise<AddDesktopSubResourcesResponse> {
        const options = ParamCreater().addDesktopSubResources(addDesktopSubResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 桌面删除附属资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面删除附属资源
     * @param {DeleteDesktopSubResourcesReq} deleteDesktopSubResourcesRequestBody 桌面删除协同资源请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDesktopSubResources(deleteDesktopSubResourcesRequest?: DeleteDesktopSubResourcesRequest): Promise<DeleteDesktopSubResourcesResponse> {
        const options = ParamCreater().deleteDesktopSubResources(deleteDesktopSubResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询协同桌面默认用户配置（当前功能公测中,需要使用请联系管理员申请使用）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询协同桌面默认用户配置
     * @param {string} name 查询协同桌面默认用户配置, share-space-user-conf。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showShareSpaceConfig(showShareSpaceConfigRequest?: ShowShareSpaceConfigRequest): Promise<ShowShareSpaceConfigResponse> {
        const options = ParamCreater().showShareSpaceConfig(showShareSpaceConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置协同桌面默认用户配置（当前功能公测中，需要使用请联系管理员申请使用）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置协同桌面默认用户配置
     * @param {UpdateShareSpaceConfigReq} updateShareSpaceConfigRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateShareSpaceConfig(updateShareSpaceConfigRequest?: UpdateShareSpaceConfigRequest): Promise<UpdateShareSpaceConfigResponse> {
        const options = ParamCreater().updateShareSpaceConfig(updateShareSpaceConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于查询站点信息的接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增站点
     * @param {AddSiteReq} addSiteRequestBody 开通云办公服务请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addSite(addSiteRequest?: AddSiteRequest): Promise<AddSiteResponse> {
        const options = ParamCreater().addSite(addSiteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于删除站点的接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除站点
     * @param {string} siteId 站点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSite(deleteSiteRequest?: DeleteSiteRequest): Promise<DeleteSiteResponse> {
        const options = ParamCreater().deleteSite(deleteSiteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于查询站点信息的接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询站点信息
     * @param {string} [availabilityZoneId] 可用区。
     * @param {string} [siteType] 站点类型，支持CENTER、IES。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSiteConfigs(listSiteConfigsRequest?: ListSiteConfigsRequest): Promise<ListSiteConfigsResponse> {
        const options = ParamCreater().listSiteConfigs(listSiteConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询边缘小站列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘小站列表
     * @param {string} [name] 根据边缘小站名称查询。
     * @param {string} [availabilityZoneId] 根据边缘可用区ID查询。
     * @param {string} [status] 根据边缘小站部署状态查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWksEdgeSites(listWksEdgeSitesRequest?: ListWksEdgeSitesRequest): Promise<ListWksEdgeSitesResponse> {
        const options = ParamCreater().listWksEdgeSites(listWksEdgeSitesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于修改站点接入方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改站点接入方式
     * @param {string} siteId 站点ID。
     * @param {UpdateAccessModeReq} updateAccessModeRequestBody 修改站点接入方式。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccessMode(updateAccessModeRequest?: UpdateAccessModeRequest): Promise<UpdateAccessModeResponse> {
        const options = ParamCreater().updateAccessMode(updateAccessModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于修改站点业务子网。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改站点业务子网
     * @param {string} siteId 站点ID。
     * @param {UpdateSubnetIdsRequestBody} updateSubnetIdsRequestBody 修改站点业务子网。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubnetIds(updateSubnetIdsRequest?: UpdateSubnetIdsRequest): Promise<UpdateSubnetIdsResponse> {
        const options = ParamCreater().updateSubnetIds(updateSubnetIdsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建快照
     * @param {BatchCreateDesktopSnapshotReq} batchCreateDesktopSnapshotRequestBody 批量创建快照请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateDesktopSnapshot(batchCreateDesktopSnapshotRequest?: BatchCreateDesktopSnapshotRequest): Promise<BatchCreateDesktopSnapshotResponse> {
        const options = ParamCreater().batchCreateDesktopSnapshot(batchCreateDesktopSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除快照
     * @param {BatchDeleteDesktopSnapshotReq} batchDeleteDesktopSnapshotRequestBody 批量删除快照请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDesktopSnapshot(batchDeleteDesktopSnapshotRequest?: BatchDeleteDesktopSnapshotRequest): Promise<BatchDeleteDesktopSnapshotResponse> {
        const options = ParamCreater().batchDeleteDesktopSnapshot(batchDeleteDesktopSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量恢快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量恢复快照
     * @param {BatchRestoreSnapshotReq} batchRestoreDesktopSnapshotRequestBody 批量恢复快照请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRestoreDesktopSnapshot(batchRestoreDesktopSnapshotRequest?: BatchRestoreDesktopSnapshotRequest): Promise<BatchRestoreDesktopSnapshotResponse> {
        const options = ParamCreater().batchRestoreDesktopSnapshot(batchRestoreDesktopSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照列表
     * @param {string} [desktopId] 桌面id。
     * @param {string} [desktopName] 桌面名称。
     * @param {string} [snapshotName] 快照名称。
     * @param {'SYSTEM_DISK' | 'DATA_DISKS' | 'ALL'} [diskType] 快照类型。 - SYSTEM_DISK 系统盘。 - DATA_DISKS 数据盘。 - ALL 系统盘和数据盘。
     * @param {'AUTO' | 'MANUALLY'} [createType] 快照创建类型。 - AUTO 定时任务自动创建。 - MANUALLY 手动创建。
     * @param {string} [status] 快照状态。 - creating：表示创建中。 - restoring：表示恢复中。 - create_success：表示创建成功。 - create_failed：表示创建快照失败。 - restore_success：表示快照恢复成功。 - restore_failed：表示快照恢复失败。
     * @param {'create_time' | 'snapshot_name'} [sortField] 排序字段名称，需要结合sort_type字段一起使用。 - create_time 创建时间。 - snapshot_name 快照名称。
     * @param {'ASC' | 'DESC'} [sortType] 排序类型，默认升序，需要结合sort_field字段一起使用。 - ASC 升序。 - DESC 降序。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询。默认1000,取值范围1-1000。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopSnapshot(listDesktopSnapshotRequest?: ListDesktopSnapshotRequest): Promise<ListDesktopSnapshotResponse> {
        const options = ParamCreater().listDesktopSnapshot(listDesktopSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增对应指标的通知规则;对应指标满足相应的规则条件时发送通知
     * 同一指标的规则不允许重复;
     * 统计指标名称，目前仅支持固定值：desktop_idle_duration
     *   * &#x60;desktop_idle_duration&#x60; -  桌面空闲时长, 仅允许设置 \&#39;&gt;&#x3D;\&#39; 阈值
     * 注：需先为云服务添加委托授权，否则无法正常发送通知到SMN
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增通知规则
     * @param {AddMetricNotifyRuleReq} addMetricNotifyRuleRequestBody 设置通知规则。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addMetricNotifyRule(addMetricNotifyRuleRequest?: AddMetricNotifyRuleRequest): Promise<AddMetricNotifyRuleResponse> {
        const options = ParamCreater().addMetricNotifyRule(addMetricNotifyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除对应指标的通知规则;对应指标满足相应的规则条件时发送通知
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除通知规则
     * @param {string} ruleId 通知规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMetricNotifyRule(deleteMetricNotifyRuleRequest?: DeleteMetricNotifyRuleRequest): Promise<DeleteMetricNotifyRuleResponse> {
        const options = ParamCreater().deleteMetricNotifyRule(deleteMetricNotifyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云应用接入统计数据，一次最多查询30天，支持最近30天的数据查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云应用接入统计数据
     * @param {string} startTime 查询起始时间，格式为：UTC格式，例如\&quot;2022-05-11T11:45:42Z。\&quot;
     * @param {string} endTime 查询截至时间，格式为：UTC格式，例如\&quot;2022-05-11T11:45:42Z。\&quot;
     * @param {string} [username] 用户名(模糊匹配)。
     * @param {string} [sortField] 按照指标进行排序 * &#x60;access_failed_count&#x60; -  按照接入失败数排序 * &#x60;last_access_failed_time&#x60; -  按照最近接入失败时间排序
     * @param {string} [sortType] 按照指标进行排序的方向;需配合sort_field一起使用 * &#x60;DESC&#x60; - 降序返回数据 * &#x60;ASC&#x60; -  升序返回数据
     * @param {number} [offset] 查询的偏移量,默认值0。
     * @param {number} [limit] limit范围[1-100],默认值10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppUserAccessData(listAppUserAccessDataRequest?: ListAppUserAccessDataRequest): Promise<ListAppUserAccessDataResponse> {
        const options = ParamCreater().listAppUserAccessData(listAppUserAccessDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桌面使用统计信息;
     * 云服务每天凌晨02:00进行聚合运算前一天00:00:00~23:59:59的使用时长,并将周期范围内的数据聚合到周期边界上
     * 跨天的记录会按照统计周期进行计算
     * 假设一天内桌面登录多次，09:00~12:00,13:00~21:00,22:00~01:00(次日):
     * 则当天的累计使用时长数据会被汇聚到23:59:59这个点;总使用时长为 3hours(09:00~12:00)+8hours(13:00~21:00)+2hours(22:00~00:00)
     * 仅能查询最近180天已进行汇聚计算的数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桌面使用情况统计数据
     * @param {string} startTime 查询起始时间(0时区) 云服务每天凌晨02:00进行聚合运算前一天00:00:00~23:59:59的使用时长,并将周期范围内的数据聚合到周期边界上 跨天的记录会按照统计周期进行计算 假设一天内桌面登录多次，09:00~12:00,13:00~21:00,22:00~01:00(次日): 则当天的累计使用时长数据会被汇聚到23:59:59这个点;总使用时长为 3hours(09:00~12:00)+8hours(13:00~21:00)+2hours(22:00~00:00) 如果查询的from-to不足一个周期内，可能造成查询到数据为空；
     * @param {string} endTime 查询截至时间(0时区)。
     * @param {string} [resourceName] 资源名称(模糊匹配)。
     * @param {number} [minIdleDays] 最小空闲天数。
     * @param {number} [maxIdleDays] 最大空闲天数 min_idle_days、max_idle_days都非空时,max_idle_days必须大于等于min_idle_days否则可能查询不到数据
     * @param {number} [usageMinHours] 使用时长(hour)最小值。
     * @param {number} [usageMaxHours] 使用时长(hour)最大值(必须大于等于usage_min_hours)。
     * @param {string} [sortField] 按照指标进行排序 * &#x60;desktop_usage&#x60; -  按照桌面使用时长排序 * &#x60;desktop_idle_duration&#x60; -  按照桌面空闲周期排序
     * @param {string} [sortType] 按照指标进行排序的方向;需配合sort_field一起使用 * &#x60;DESC&#x60; - 降序返回数据 * &#x60;ASC&#x60; -  升序返回数据
     * @param {number} [offset] 查询的偏移量,默认值0。
     * @param {number} [limit] limit范围[1-100],默认值0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopUsageMetric(listDesktopUsageMetricRequest?: ListDesktopUsageMetricRequest): Promise<ListDesktopUsageMetricResponse> {
        const options = ParamCreater().listDesktopUsageMetric(listDesktopUsageMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 统计租户下的普通桌面、桌面池状态，默认仅统计总数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 桌面统计
     * @param {Array<string>} [desktopType] 桌面类型，为空时查所有桌面。 - DEDICATED：普通桌面，包括专享桌面、专属桌面等 - POOLED：池桌面，即桌面池里的桌面
     * @param {Array<'attach-state' | 'login-state' | 'run-state'>} [statisticsType] 统计类型，为空时仅统计桌面总数 |- - attach-state 按照分配状态统计 - login-state 按照登录状态统计 - run-state 按照运行状态统计。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDesktopsStatistics(listDesktopsStatisticsRequest?: ListDesktopsStatisticsRequest): Promise<ListDesktopsStatisticsResponse> {
        const options = ParamCreater().listDesktopsStatistics(listDesktopsStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户桌面登录状态统计。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 登录状态统计
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLoginState(listLoginStateRequest?: ListLoginStateRequest): Promise<ListLoginStateResponse> {
        const options = ParamCreater().listLoginState();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对应指标维度是否存在满足通知规则的记录;
     * 查询结果仅表示满足相应指标维度下对应通知规则可产生的通知记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对应指标维度是否存在满足通知规则的记录
     * @param {string} [metricName] 指标名称(精确匹配) (metric_name和rule_id不允许同时为空)
     * @param {string} [ruleId] 通知规则ID (metric_name和rule_id不允许同时为空)
     * @param {number} [offset] 查询的偏移量,默认值0。
     * @param {number} [limit] 单次查询的大小[1-100],默认值10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetricNotifyRecord(listMetricNotifyRecordRequest?: ListMetricNotifyRecordRequest): Promise<ListMetricNotifyRecordResponse> {
        const options = ParamCreater().listMetricNotifyRecord(listMetricNotifyRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对应指标的通知规则;。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询通知规则
     * @param {string} [metricName] 指标名称(精确匹配)。
     * @param {string} [ruleId] 通知规则ID。
     * @param {number} [offset] 查询的偏移量,默认值0。
     * @param {number} [limit] 单次查询的大小[1-100],默认值10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetricNotifyRule(listMetricNotifyRuleRequest?: ListMetricNotifyRuleRequest): Promise<ListMetricNotifyRuleResponse> {
        const options = ParamCreater().listMetricNotifyRule(listMetricNotifyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指标
     * @param {string} startTime 开始时间, UTC时间。
     * @param {string} endTime 结束时间,UTC时间。
     * @param {Array<string>} metricNames 指标名称列表。
     * @param {string} [dim] 指标维度 | 目前最大支持3个维度，必须从0开始；维度格式为dim.{i}&#x3D;key,value，key的最大长度32，value的最大长度为256。 单维度：dim.0&#x3D;instance_id,6f3c6f91-4b24-4e1b-b7d1-a94ac1cb011d 多维度：dim.0&#x3D;key,value&amp;dim.1&#x3D;key,value。
     * @param {'DAY' | 'HOUR'} [period] 数据周期 | DAY - 天级数据 HOUR - 小时级数据。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetrics(listMetricsRequest?: ListMetricsRequest): Promise<ListMetricsResponse> {
        const options = ParamCreater().listMetrics(listMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指标趋势。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指标趋势
     * @param {string} startTime 开始时间。
     * @param {string} endTime 结束时间。
     * @param {Array<string>} metricNames 指标名称列表。
     * @param {string} [dim] 指标维度 | 目前最大支持3个维度，必须从0开始；维度格式为dim.{i}&#x3D;key,value，key的最大长度32，value的最大长度为256。 单维度：dim.0&#x3D;instance_id,6f3c6f91-4b24-4e1b-b7d1-a94ac1cb011d 多维度：dim.0&#x3D;key,value&amp;dim.1&#x3D;key,value。
     * @param {'MIN' | '5MIN' | 'DAY' | 'HOUR'} [period] 数据周期 | MIN - 分钟级 5MIN - 5分钟级 DAY - 天级数据 HOUR - 小时级数据。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetricsTrend(listMetricsTrendRequest?: ListMetricsTrendRequest): Promise<ListMetricsTrendResponse> {
        const options = ParamCreater().listMetricsTrend(listMetricsTrendRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户桌面运行状态统计。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 运行状态统计
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRunState(listRunStateRequest?: ListRunStateRequest): Promise<ListRunStateResponse> {
        const options = ParamCreater().listRunState();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询在指定时间段未使用的桌面。已废弃，不推荐使用。统计数据推荐使用[查询桌面使用情况统计数据接口](https://console.huaweicloud.com/apiexplorer/#/openapi/Workspace/doc?api&#x3D;ListDesktopUsageMetric)和[查询用户使用统计数据接口](https://console.huaweicloud.com/apiexplorer/#/openapi/Workspace/doc?api&#x3D;ListUserUsageMetric)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询在指定时间段未使用的桌面
     * @param {number} [offset] 从查询结果中的第几条数据开始返回,用于分页查询，取值范围0-2000，默认从0开始。
     * @param {number} [limit] 查询结果中想要返回的信息条目数量,用于分页查询，取值范围0-2000，默认值1000。
     * @param {string} [startTime] 开始时间：由日期加时间组成，UTC格式，格式：yyyy-MM-ddTHH:mm:ss.SSSZ，若未输入，则查询现在到前一天的未使用的桌面。
     * @param {string} [endTime] 结束时间：由日期加时间组成，UTC格式，格式：yyyy-MM-ddTHH:mm:ss.SSSZ，若未输入，则查询现在到前一天的未使用的桌面。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUnusedDesktops(listUnusedDesktopsRequest?: ListUnusedDesktopsRequest): Promise<ListUnusedDesktopsResponse> {
        const options = ParamCreater().listUnusedDesktops(listUnusedDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询使用桌面的时长。已废弃，不推荐使用。统计数据推荐使用[查询桌面使用情况统计数据接口](https://console.huaweicloud.com/apiexplorer/#/openapi/Workspace/doc?api&#x3D;ListDesktopUsageMetric)和[查询用户使用统计数据接口](https://console.huaweicloud.com/apiexplorer/#/openapi/Workspace/doc?api&#x3D;ListUserUsageMetric)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询使用桌面的时长
     * @param {ListUsedDesktopInfoReq} [listUsedDesktopInfoRequestBody] 查询使用桌面的时长请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsedDesktopInfo(listUsedDesktopInfoRequest?: ListUsedDesktopInfoRequest): Promise<ListUsedDesktopInfoResponse> {
        const options = ParamCreater().listUsedDesktopInfo(listUsedDesktopInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户使用统计信息;
     * 最多查询30天内的数据;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户使用统计数据
     * @param {string} startTime 查询起始时间(0时区)。
     * @param {string} endTime 查询截至时间(0时区)。
     * @param {string} [username] 用户名(模糊匹配)。
     * @param {number} [usageMinHours] 使用时长最小值。
     * @param {number} [usageMaxHours] 使用时长最大值 usage_min_hours和usage_max_hours同时存在时,usage_max_hours必须大于等于usage_min_hours
     * @param {string} [sortField] 按照指标进行排序 * &#x60;user_usage&#x60; -  按照用户使用时长排序
     * @param {string} [sortType] 按照指标进行排序的方向;需配合sort_field一起使用 * &#x60;DESC&#x60; - 降序返回数据 * &#x60;ASC&#x60; -  升序返回数据
     * @param {number} [offset] 查询的偏移量,默认值0。
     * @param {number} [limit] limit范围[1-100],默认值0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserUsageMetric(listUserUsageMetricRequest?: ListUserUsageMetricRequest): Promise<ListUserUsageMetricResponse> {
        const options = ParamCreater().listUserUsageMetric(listUserUsageMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指标环比值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指标环比值
     * @param {string} metricName 指标名称。
     * @param {'DAY' | 'MONTH'} [growPeriod] 环比周期 | DAY - 天 MONTH - 月。
     * @param {string} [dim] 指标维度 | 目前最大支持3个维度，必须从0开始；维度格式为dim.{i}&#x3D;key,value，key的最大长度32，value的最大长度为256。 单维度：dim.0&#x3D;instance_id,6f3c6f91-4b24-4e1b-b7d1-a94ac1cb011d 多维度：dim.0&#x3D;key,value&amp;dim.1&#x3D;key,value。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGrowthRate(showGrowthRateRequest?: ShowGrowthRateRequest): Promise<ShowGrowthRateResponse> {
        const options = ParamCreater().showGrowthRate(showGrowthRateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询接入云桌面或云应用各阶段时长数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询接入云桌面或云应用各阶段时长数据
     * @param {string} transactionId 事务id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserAccessStages(showUserAccessStagesRequest?: ShowUserAccessStagesRequest): Promise<ShowUserAccessStagesResponse> {
        const options = ParamCreater().showUserAccessStages(showUserAccessStagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新对应指标的通知规则;对应指标满足相应的规则条件时发送通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新通知规则
     * @param {string} ruleId 通知规则ID。
     * @param {UpdateMetricNotifyRuleReq} updateMetricNotifyRuleRequestBody 设置通知规则。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMetricNotifyRule(updateMetricNotifyRuleRequest?: UpdateMetricNotifyRuleRequest): Promise<UpdateMetricNotifyRuleResponse> {
        const options = ParamCreater().updateMetricNotifyRule(updateMetricNotifyRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据子网id查询该子网下可用的ip。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据子网id查询该子网下可用的ip
     * @param {string} subnetId 子网id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAvailableIp(showAvailableIpRequest?: ShowAvailableIpRequest): Promise<ShowAvailableIpResponse> {
        const options = ParamCreater().showAvailableIp(showAvailableIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户个性配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户个性配置列表
     * @param {string} [name] 开关名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTenantConfigs(listTenantConfigsRequest?: ListTenantConfigsRequest): Promise<ListTenantConfigsResponse> {
        const options = ParamCreater().listTenantConfigs(listTenantConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户个性配置修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改租户个性配置
     * @param {UpdateTenantConfigReq} updateTenantConfigRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTenantConfig(updateTenantConfigRequest?: UpdateTenantConfigRequest): Promise<UpdateTenantConfigResponse> {
        const options = ParamCreater().updateTenantConfig(updateTenantConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 增加终端与桌面绑定配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 增加终端与桌面绑定配置
     * @param {CreateTerminalsBindingDesktopsRequestBody} createTerminalsBindingDesktopsRequestBody 增加TC绑定Vm信息请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTerminalsBindingDesktops(createTerminalsBindingDesktopsRequest?: CreateTerminalsBindingDesktopsRequest): Promise<CreateTerminalsBindingDesktopsResponse> {
        const options = ParamCreater().createTerminalsBindingDesktops(createTerminalsBindingDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除终端与桌面绑定配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除终端与桌面绑定配置
     * @param {DeleteTerminalsBindingDesktopsRequestBody} deleteTerminalsBindingDesktopsRequestBody 删除终端与桌面绑定配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTerminalsBindingDesktops(deleteTerminalsBindingDesktopsRequest?: DeleteTerminalsBindingDesktopsRequest): Promise<DeleteTerminalsBindingDesktopsResponse> {
        const options = ParamCreater().deleteTerminalsBindingDesktops(deleteTerminalsBindingDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端与桌面绑定配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端与桌面绑定配置列表
     * @param {number} offset 起始数。
     * @param {number} limit 数量。
     * @param {string} [computerName] 桌面名。
     * @param {string} [mac] mac地址。
     * @param {boolean} [countOnly] 是否只查询结果总条数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTerminalsBindingDesktops(listTerminalsBindingDesktopsRequest?: ListTerminalsBindingDesktopsRequest): Promise<ListTerminalsBindingDesktopsResponse> {
        const options = ParamCreater().listTerminalsBindingDesktops(listTerminalsBindingDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端与桌面绑定的开关配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端与桌面绑定的开关配置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTerminalsBindingDesktopsConfig(listTerminalsBindingDesktopsConfigRequest?: ListTerminalsBindingDesktopsConfigRequest): Promise<ListTerminalsBindingDesktopsConfigResponse> {
        const options = ParamCreater().listTerminalsBindingDesktopsConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改终端与桌面绑定配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改终端与桌面绑定配置
     * @param {UpdateTerminalsBindingDesktopsRequestBody} updateTerminalsBindingDesktopsRequestBody 修改终端与桌面绑定配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTerminalsBindingDesktops(updateTerminalsBindingDesktopsRequest?: UpdateTerminalsBindingDesktopsRequest): Promise<UpdateTerminalsBindingDesktopsResponse> {
        const options = ParamCreater().updateTerminalsBindingDesktops(updateTerminalsBindingDesktopsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置终端与桌面绑定的开关配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置终端与桌面绑定的开关配置
     * @param {TerminalsBindingDesktopsConfig} updateTerminalsBindingDesktopsConfigRequestBody 设置终端与桌面绑定的开关配置请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTerminalsBindingDesktopsConfig(updateTerminalsBindingDesktopsConfigRequest?: UpdateTerminalsBindingDesktopsConfigRequest): Promise<UpdateTerminalsBindingDesktopsConfigResponse> {
        const options = ParamCreater().updateTerminalsBindingDesktopsConfig(updateTerminalsBindingDesktopsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于批量创建用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建用户
     * @param {BatchCreateUsersReq} batchCreateUsersRequestBody 该接口用于批量创建用户请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateUsers(batchCreateUsersRequest?: BatchCreateUsersRequest): Promise<BatchCreateUsersResponse> {
        const options = ParamCreater().batchCreateUsers(batchCreateUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于解绑用户的OTP设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑OTP设备
     * @param {string} userId 用户ID。
     * @param {DelOtpDevicesReq} batchDeleteOtpDevicesRequestBody 解绑OTP设备请求类。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteOtpDevices(batchDeleteOtpDevicesRequest?: BatchDeleteOtpDevicesRequest): Promise<BatchDeleteOtpDevicesResponse> {
        const options = ParamCreater().batchDeleteOtpDevices(batchDeleteOtpDevicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于批量删除桌面用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除用户
     * @param {BatchDeleteUserReq} batchDeleteUserRequestBody 批量删除用户请求类。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteUser(batchDeleteUserRequest?: BatchDeleteUserRequest): Promise<BatchDeleteUserResponse> {
        const options = ParamCreater().batchDeleteUser(batchDeleteUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于操作用户，包含三种操作：锁定、解锁和重置密码（重置密码建议使用/v2/{project_id}/users/{user_id}/random-password接口，在没有通知方式的情况下必须使用/v2/{project_id}/users/{user_id}/random-password接口）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作用户
     * @param {string} userId 用户ID。
     * @param {OperateUserReq} changeUserStatusRequestBody 操作用户请求类。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeUserStatus(changeUserStatusRequest?: ChangeUserStatusRequest): Promise<ChangeUserStatusResponse> {
        const options = ParamCreater().changeUserStatus(changeUserStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建桌面用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户
     * @param {CreateUserRequest} createDesktopUserRequestBody 创建云桌面用户请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDesktopUser(createDesktopUserRequest?: CreateDesktopUserRequest): Promise<CreateDesktopUserResponse> {
        const options = ParamCreater().createDesktopUser(createDesktopUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的桌面用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定用户
     * @param {string} userId 用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUser(deleteUserRequest?: DeleteUserRequest): Promise<DeleteUserResponse> {
        const options = ParamCreater().deleteUser(deleteUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询相应用户下面的OTP设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OTP设备
     * @param {string} userId 用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOtpDevicesByUserId(listOtpDevicesByUserIdRequest?: ListOtpDevicesByUserIdRequest): Promise<ListOtpDevicesByUserIdResponse> {
        const options = ParamCreater().listOtpDevicesByUserId(listOtpDevicesByUserIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定的桌面用户详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户详情信息
     * @param {string} userId 用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserDetail(listUserDetailRequest?: ListUserDetailRequest): Promise<ListUserDetailResponse> {
        const options = ParamCreater().listUserDetail(listUserDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询桌面用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户列表
     * @param {string} [userName] 桌面用户名，长度范围为1-20，不能包含特殊字符，不能以数字开头。
     * @param {string} [limit] 用于分页查询，返回用户数量限制。如果不指定，则返回所有符合条件的用户。
     * @param {string} [offset] 分页查询起始条数。
     * @param {string} [description] 用户描述查询，模糊匹配。
     * @param {string} [activeType] 激活类型，默认为用户激活。 * USER_ACTIVATE： 用户激活 * ADMIN_ACTIVATE： 管理员激活
     * @param {string} [groupName] 桌面用户组名，精确匹配。
     * @param {boolean} [shareSpaceSubscription] 用户是否已订阅协同，true/false。
     * @param {boolean} [shareSpaceDesktops] 用户是否已绑定协同桌面,true/false。
     * @param {boolean} [isQueryTotalDesktops] 是否查询用户绑定的桌面数,true/false,默认true。
     * @param {string} [enterpriseProjectId] 企业项目ID
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
     * 该接口用于给用户重置一个密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 给用户重置随机密码
     * @param {string} userId 用户ID。
     * @param {string} [notificationType] 通知用户类型，现在有“email”和“phone”两种，用\&quot;,\&quot;分开，用户为用户激活模式时必须要带上通知类型，以便接收到密码通知。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetRandomPassword(resetRandomPasswordRequest?: ResetRandomPasswordRequest): Promise<ResetRandomPasswordResponse> {
        const options = ParamCreater().resetRandomPassword(resetRandomPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于重新发送邮件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重新发送邮件
     * @param {string} userId 用户ID。
     * @param {ResendEmailReq} [sendEmailRequestBody] 重新发送邮件请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendEmail(sendEmailRequest?: SendEmailRequest): Promise<SendEmailResponse> {
        const options = ParamCreater().sendEmail(sendEmailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改桌面用户信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户信息
     * @param {string} userId 用户ID。
     * @param {EditUserReq} updateUserInfoRequestBody 修改用户信息请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserInfo(updateUserInfoRequest?: UpdateUserInfoRequest): Promise<UpdateUserInfoResponse> {
        const options = ParamCreater().updateUserInfo(updateUserInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户事件，一次最多查询30天，支持最近30天的数据查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户事件
     * @param {string} startTime 查询起始时间，格式为：UTC时间，例如\&quot;1970-01-01T00:00:00Z\&quot;。
     * @param {string} endTime 查询结束时间，格式为：UTC时间，例如\&quot;1970-01-01T00:00:00Z\&quot;。
     * @param {string} [username] 用户名（精确搜索）。
     * @param {string} [eventType] 事件类型，英文逗号隔开。
     * @param {string} [resourceId] 操作资源ID。
     * @param {string} [resourceName] 操作资源名称。
     * @param {number} [offset] 用于分页查询，查询的起始记录序号，从0开始。
     * @param {number} [limit] 用于分页查询，返回用户事件数量限制，取值范围0-1000。如果不指定，默认为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserEvents(listUserEventsRequest?: ListUserEventsRequest): Promise<ListUserEventsResponse> {
        const options = ParamCreater().listUserEvents(listUserEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户事件LTS配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户事件LTS配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserEventsLtsConfigurations(listUserEventsLtsConfigurationsRequest?: ListUserEventsLtsConfigurationsRequest): Promise<ListUserEventsLtsConfigurationsResponse> {
        const options = ParamCreater().listUserEventsLtsConfigurations();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置用户事件LTS。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置用户事件LTS
     * @param {SetUserEventsLtsConfigurationsRequestBody} setUserEventsLtsConfigurationsRequestBody 创建应用使用记录导出任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setUserEventsLtsConfigurations(setUserEventsLtsConfigurationsRequest?: SetUserEventsLtsConfigurationsRequest): Promise<SetUserEventsLtsConfigurationsResponse> {
        const options = ParamCreater().setUserEventsLtsConfigurations(setUserEventsLtsConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给单个桌面增加磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 增加桌面磁盘
     * @param {string} desktopId 桌面ID。
     * @param {AddVolumesReq} addDesktopVolumesRequestBody 增加桌面磁盘请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDesktopVolumes(addDesktopVolumesRequest?: AddDesktopVolumesRequest): Promise<AddDesktopVolumesResponse> {
        const options = ParamCreater().addDesktopVolumes(addDesktopVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量增加桌面磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量增加桌面磁盘
     * @param {AddDesktopsVolumesReq} addVolumesRequestBody 添加磁盘请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addVolumes(addVolumesRequest?: AddVolumesRequest): Promise<AddVolumesResponse> {
        const options = ParamCreater().addVolumes(addVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除桌面数据盘，删除后无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除桌面数据盘
     * @param {string} desktopId 桌面ID。
     * @param {DeleteVolumesReq} deleteDesktopVolumesRequestBody 删除桌面数据盘请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDesktopVolumes(deleteDesktopVolumesRequest?: DeleteDesktopVolumesRequest): Promise<DeleteDesktopVolumesResponse> {
        const options = ParamCreater().deleteDesktopVolumes(deleteDesktopVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容磁盘
     * @param {string} desktopId 桌面ID。
     * @param {string} volumeId 磁盘ID。
     * @param {ExpandVolumeReq} expandDesktopVolumeRequestBody 扩容磁盘请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandDesktopVolume(expandDesktopVolumeRequest?: ExpandDesktopVolumeRequest): Promise<ExpandDesktopVolumeResponse> {
        const options = ParamCreater().expandDesktopVolume(expandDesktopVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容桌面磁盘。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容桌面磁盘
     * @param {ExpandDesktopsVolumesReq} expandVolumesRequestBody 扩容磁盘请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandVolumes(expandVolumesRequest?: ExpandVolumesRequest): Promise<ExpandVolumesResponse> {
        const options = ParamCreater().expandVolumes(expandVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询磁盘产品信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询磁盘产品信息
     * @param {string} [availabilityZone] 可用分区。
     * @param {string} [volumeType] 磁盘类型（多个磁盘类型用逗号隔开）： - SATA: 普通IO磁盘 - SAS：高IO磁盘 - SSD：超高IO磁盘
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumeProductInfo(listVolumeProductInfoRequest?: ListVolumeProductInfoRequest): Promise<ListVolumeProductInfoResponse> {
        const options = ParamCreater().listVolumeProductInfo(listVolumeProductInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于开通云办公服务。
     * 
     * 作为异步接口，调用成功说明云办公服务后台收到了开通请求，但服务是否开通成功需要通过任务查询接口(GET /v2/{project_id}/workspace-sub-jobs)查询该任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通云办公服务
     * @param {ApplyWorkspaceReq} applyWorkspaceRequestBody 开通云办公服务请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyWorkspace(applyWorkspaceRequest?: ApplyWorkspaceRequest): Promise<ApplyWorkspaceResponse> {
        const options = ParamCreater().applyWorkspace(applyWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于注销云办公服务。注销前请确保当前用户下的云桌面已经删除，注销后无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注销云办公服务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelWorkspace(cancelWorkspaceRequest?: CancelWorkspaceRequest): Promise<CancelWorkspaceResponse> {
        const options = ParamCreater().cancelWorkspace();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询云办公服务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云办公服务详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkspaces(listWorkspacesRequest?: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
        const options = ParamCreater().listWorkspaces();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云办公服务是否被锁定。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云办公服务是否被锁定
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkspaceLock(showWorkspaceLockRequest?: ShowWorkspaceLockRequest): Promise<ShowWorkspaceLockResponse> {
        const options = ParamCreater().showWorkspaceLock();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口目前支持解除云办公服务锁定状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除云办公服务锁定状态
     * @param {UnlockWorkspaceRequestBody} unlockWorkspaceRequestBody 解除云办公服务锁定状态请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unlockWorkspace(unlockWorkspaceRequest?: UnlockWorkspaceRequest): Promise<UnlockWorkspaceResponse> {
        const options = ParamCreater().unlockWorkspace(unlockWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改租户的企业ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改企业ID
     * @param {ModifyEnterpriseIdReq} updateEnterpriseIdRequestBody 修改企业ID请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnterpriseId(updateEnterpriseIdRequest?: UpdateEnterpriseIdRequest): Promise<UpdateEnterpriseIdResponse> {
        const options = ParamCreater().updateEnterpriseId(updateEnterpriseIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口目前支持修改云办公服务属性。单次请求仅支持修改一种属性类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云办公服务属性
     * @param {ModifyWorkspaceAttributesReq} updateWorkspaceRequestBody 修改云办公服务属性请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkspace(updateWorkspaceRequest?: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
        const options = ParamCreater().updateWorkspace(updateWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于获取云办公服务接入地址备份配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessAddressBackupConfig() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/access-config/address-backup",
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
         * 该接口用于修改云办公服务接入地址备份配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccessAddressBackupConfig(updateAccessAddressBackupConfigRequest?: UpdateAccessAddressBackupConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/access-config/address-backup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAccessAddressBackupConfigRequest !== null && updateAccessAddressBackupConfigRequest !== undefined) {
                if (updateAccessAddressBackupConfigRequest instanceof UpdateAccessAddressBackupConfigRequest) {
                    body = updateAccessAddressBackupConfigRequest.body
                } else {
                    body = updateAccessAddressBackupConfigRequest['body'];
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
         * 该接口用于删除指定接入策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAccessPolicies(batchDeleteAccessPoliciesRequest?: BatchDeleteAccessPoliciesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/access-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteAccessPoliciesRequest !== null && batchDeleteAccessPoliciesRequest !== undefined) {
                if (batchDeleteAccessPoliciesRequest instanceof BatchDeleteAccessPoliciesRequest) {
                    body = batchDeleteAccessPoliciesRequest.body
                } else {
                    body = batchDeleteAccessPoliciesRequest['body'];
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
         * 该接口用于创建接入策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccessPolicy(createAccessPolicyRequest?: CreateAccessPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/access-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAccessPolicyRequest !== null && createAccessPolicyRequest !== undefined) {
                if (createAccessPolicyRequest instanceof CreateAccessPolicyRequest) {
                    body = createAccessPolicyRequest.body
                } else {
                    body = createAccessPolicyRequest['body'];
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
         * 该接口用于查询接入策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessPolicies(listAccessPoliciesRequest?: ListAccessPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/access-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accessControlType;
            
            let limit;
            
            let offset;

            if (listAccessPoliciesRequest !== null && listAccessPoliciesRequest !== undefined) {
                if (listAccessPoliciesRequest instanceof ListAccessPoliciesRequest) {
                    accessControlType = listAccessPoliciesRequest.accessControlType;
                    limit = listAccessPoliciesRequest.limit;
                    offset = listAccessPoliciesRequest.offset;
                } else {
                    accessControlType = listAccessPoliciesRequest['access_control_type'];
                    limit = listAccessPoliciesRequest['limit'];
                    offset = listAccessPoliciesRequest['offset'];
                }
            }

        
            if (accessControlType !== null && accessControlType !== undefined) {
                localVarQueryParameter['access_control_type'] = accessControlType;
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
         * 该接口用于查询指定接入策略的应用对象。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessPolicyObjects(listAccessPolicyObjectsRequest?: ListAccessPolicyObjectsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/access-policy/{access_policy_id}/objects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accessPolicyId;
            
            let limit;
            
            let offset;

            if (listAccessPolicyObjectsRequest !== null && listAccessPolicyObjectsRequest !== undefined) {
                if (listAccessPolicyObjectsRequest instanceof ListAccessPolicyObjectsRequest) {
                    accessPolicyId = listAccessPolicyObjectsRequest.accessPolicyId;
                    limit = listAccessPolicyObjectsRequest.limit;
                    offset = listAccessPolicyObjectsRequest.offset;
                } else {
                    accessPolicyId = listAccessPolicyObjectsRequest['access_policy_id'];
                    limit = listAccessPolicyObjectsRequest['limit'];
                    offset = listAccessPolicyObjectsRequest['offset'];
                }
            }

        
            if (accessPolicyId === null || accessPolicyId === undefined) {
            throw new RequiredError('accessPolicyId','Required parameter accessPolicyId was null or undefined when calling listAccessPolicyObjects.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'access_policy_id': accessPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新指定接入策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccessPolicy(updateAccessPolicyRequest?: UpdateAccessPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/access-policy/{access_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let accessPolicyId;

            if (updateAccessPolicyRequest !== null && updateAccessPolicyRequest !== undefined) {
                if (updateAccessPolicyRequest instanceof UpdateAccessPolicyRequest) {
                    accessPolicyId = updateAccessPolicyRequest.accessPolicyId;
                    body = updateAccessPolicyRequest.body
                } else {
                    accessPolicyId = updateAccessPolicyRequest['access_policy_id'];
                    body = updateAccessPolicyRequest['body'];
                }
            }

        
            if (accessPolicyId === null || accessPolicyId === undefined) {
            throw new RequiredError('accessPolicyId','Required parameter accessPolicyId was null or undefined when calling updateAccessPolicy.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'access_policy_id': accessPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新指定接入策略的应用对象。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccessPolicyObjects(updateAccessPolicyObjectsRequest?: UpdateAccessPolicyObjectsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/access-policy/{access_policy_id}/objects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let accessPolicyId;

            if (updateAccessPolicyObjectsRequest !== null && updateAccessPolicyObjectsRequest !== undefined) {
                if (updateAccessPolicyObjectsRequest instanceof UpdateAccessPolicyObjectsRequest) {
                    accessPolicyId = updateAccessPolicyObjectsRequest.accessPolicyId;
                    body = updateAccessPolicyObjectsRequest.body
                } else {
                    accessPolicyId = updateAccessPolicyObjectsRequest['access_policy_id'];
                    body = updateAccessPolicyObjectsRequest['body'];
                }
            }

        
            if (accessPolicyId === null || accessPolicyId === undefined) {
            throw new RequiredError('accessPolicyId','Required parameter accessPolicyId was null or undefined when calling updateAccessPolicyObjects.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'access_policy_id': accessPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开通委托功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgencies(createAgenciesRequest?: CreateAgenciesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAgenciesRequest !== null && createAgenciesRequest !== undefined) {
                if (createAgenciesRequest instanceof CreateAgenciesRequest) {
                    body = createAgenciesRequest.body
                } else {
                    body = createAgenciesRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询委托功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgencies(listAgenciesRequest?: ListAgenciesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scene;

            if (listAgenciesRequest !== null && listAgenciesRequest !== undefined) {
                if (listAgenciesRequest instanceof ListAgenciesRequest) {
                    scene = listAgenciesRequest.scene;
                } else {
                    scene = listAgenciesRequest['scene'];
                }
            }

        
            if (scene !== null && scene !== undefined) {
                localVarQueryParameter['scene'] = scene;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回各级别告警数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmStatistics() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/alarms",
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
         * 从ces查询告警列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarms(listAlarmsRequest?: ListAlarmsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let level;
            
            let offset;
            
            let limit;

            if (listAlarmsRequest !== null && listAlarmsRequest !== undefined) {
                if (listAlarmsRequest instanceof ListAlarmsRequest) {
                    level = listAlarmsRequest.level;
                    offset = listAlarmsRequest.offset;
                    limit = listAlarmsRequest.limit;
                } else {
                    level = listAlarmsRequest['level'];
                    offset = listAlarmsRequest['offset'];
                    limit = listAlarmsRequest['limit'];
                }
            }

        
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
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
         * 批量删除应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteApps(batchDeleteAppsRequest?: BatchDeleteAppsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/apps/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteAppsRequest !== null && batchDeleteAppsRequest !== undefined) {
                if (batchDeleteAppsRequest instanceof BatchDeleteAppsRequest) {
                    body = batchDeleteAppsRequest.body
                } else {
                    body = batchDeleteAppsRequest['body'];
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
         * 批量删除job。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteJobs(batchDeleteJobsRequest?: BatchDeleteJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/jobs/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteJobsRequest !== null && batchDeleteJobsRequest !== undefined) {
                if (batchDeleteJobsRequest instanceof BatchDeleteJobsRequest) {
                    body = batchDeleteJobsRequest.body
                } else {
                    body = batchDeleteJobsRequest['body'];
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
         * 批量设置不可见。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisableApps(batchDisableAppsRequest?: BatchDisableAppsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/apps/actions/batch-disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDisableAppsRequest !== null && batchDisableAppsRequest !== undefined) {
                if (batchDisableAppsRequest instanceof BatchDisableAppsRequest) {
                    body = batchDisableAppsRequest.body
                } else {
                    body = batchDisableAppsRequest['body'];
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
         * 批量设置可见。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchEnableApps(batchEnableAppsRequest?: BatchEnableAppsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/apps/actions/batch-enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchEnableAppsRequest !== null && batchEnableAppsRequest !== undefined) {
                if (batchEnableAppsRequest instanceof BatchEnableAppsRequest) {
                    body = batchEnableAppsRequest.body
                } else {
                    body = batchEnableAppsRequest['body'];
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
         * 批量自动安装安装应用 (应用需支持静默安装或者解压安装)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchInstallApps(batchInstallAppsRequest?: BatchInstallAppsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/apps/actions/batch-auto-install",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchInstallAppsRequest !== null && batchInstallAppsRequest !== undefined) {
                if (batchInstallAppsRequest instanceof BatchInstallAppsRequest) {
                    body = batchInstallAppsRequest.body
                } else {
                    body = batchInstallAppsRequest['body'];
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
         * 批量设置应用授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateAppAuthorizations(batchUpdateAppAuthorizationsRequest?: BatchUpdateAppAuthorizationsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/apps/actions/batch-assign-authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateAppAuthorizationsRequest !== null && batchUpdateAppAuthorizationsRequest !== undefined) {
                if (batchUpdateAppAuthorizationsRequest instanceof BatchUpdateAppAuthorizationsRequest) {
                    body = batchUpdateAppAuthorizationsRequest.body
                } else {
                    body = batchUpdateAppAuthorizationsRequest['body'];
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
         * 添加并授权默认桶,桶不存在时会自动创建OBS桶。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAndAuthorizeBucket() {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/buckets",
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
         * 生成桶凭证信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBucketCredential(createBucketCredentialRequest?: CreateBucketCredentialRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/buckets/actions/create-credential",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createBucketCredentialRequest !== null && createBucketCredentialRequest !== undefined) {
                if (createBucketCredentialRequest instanceof CreateBucketCredentialRequest) {
                    body = createBucketCredentialRequest.body
                } else {
                    body = createBucketCredentialRequest['body'];
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
         * 删除应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApp(deleteAppRequest?: DeleteAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/app-center/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let reserveObsFile;

            if (deleteAppRequest !== null && deleteAppRequest !== undefined) {
                if (deleteAppRequest instanceof DeleteAppRequest) {
                    appId = deleteAppRequest.appId;
                    reserveObsFile = deleteAppRequest.reserveObsFile;
                } else {
                    appId = deleteAppRequest['app_id'];
                    reserveObsFile = deleteAppRequest['reserve_obs_file'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteApp.');
            }
            if (reserveObsFile !== null && reserveObsFile !== undefined) {
                localVarQueryParameter['reserve_obs_file'] = reserveObsFile;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 自动安装应用(应用需支持静默安装或者解压安装)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        installApp(installAppRequest?: InstallAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/apps/{app_id}/actions/auto-install",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;

            if (installAppRequest !== null && installAppRequest !== undefined) {
                if (installAppRequest instanceof InstallAppRequest) {
                    appId = installAppRequest.appId;
                    body = installAppRequest.body
                } else {
                    appId = installAppRequest['app_id'];
                    body = installAppRequest['body'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling installApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用授权信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppAuthorizations(listAppAuthorizationsRequest?: ListAppAuthorizationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-center/apps/{app_id}/authorizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let offset;
            
            let limit;
            
            let name;
            
            let targetType;

            if (listAppAuthorizationsRequest !== null && listAppAuthorizationsRequest !== undefined) {
                if (listAppAuthorizationsRequest instanceof ListAppAuthorizationsRequest) {
                    appId = listAppAuthorizationsRequest.appId;
                    offset = listAppAuthorizationsRequest.offset;
                    limit = listAppAuthorizationsRequest.limit;
                    name = listAppAuthorizationsRequest.name;
                    targetType = listAppAuthorizationsRequest.targetType;
                } else {
                    appId = listAppAuthorizationsRequest['app_id'];
                    offset = listAppAuthorizationsRequest['offset'];
                    limit = listAppAuthorizationsRequest['limit'];
                    name = listAppAuthorizationsRequest['name'];
                    targetType = listAppAuthorizationsRequest['target_type'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling listAppAuthorizations.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (targetType !== null && targetType !== undefined) {
                localVarQueryParameter['target_type'] = targetType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用分类信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppCatalogs() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-center/app-catalogs",
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
         * 按照名称分页查询应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApps(listAppsRequest?: ListAppsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-center/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let name;

            if (listAppsRequest !== null && listAppsRequest !== undefined) {
                if (listAppsRequest instanceof ListAppsRequest) {
                    offset = listAppsRequest.offset;
                    limit = listAppsRequest.limit;
                    name = listAppsRequest.name;
                } else {
                    offset = listAppsRequest['offset'];
                    limit = listAppsRequest['limit'];
                    name = listAppsRequest['name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用安装job信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobs(listJobsRequest?: ListJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-center/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let instanceId;
            
            let appId;
            
            let target;
            
            let jobStatus;

            if (listJobsRequest !== null && listJobsRequest !== undefined) {
                if (listJobsRequest instanceof ListJobsRequest) {
                    offset = listJobsRequest.offset;
                    limit = listJobsRequest.limit;
                    instanceId = listJobsRequest.instanceId;
                    appId = listJobsRequest.appId;
                    target = listJobsRequest.target;
                    jobStatus = listJobsRequest.jobStatus;
                } else {
                    offset = listJobsRequest['offset'];
                    limit = listJobsRequest['limit'];
                    instanceId = listJobsRequest['instance_id'];
                    appId = listJobsRequest['app_id'];
                    target = listJobsRequest['target'];
                    jobStatus = listJobsRequest['job_status'];
                }
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
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (target !== null && target !== undefined) {
                localVarQueryParameter['target'] = target;
            }
            if (jobStatus !== null && jobStatus !== undefined) {
                localVarQueryParameter['job_status'] = jobStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重试指定失败job(仅支持失败job重试，其他类型job重试会响应错误)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryJobs(retryJobsRequest?: RetryJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/jobs/actions/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (retryJobsRequest !== null && retryJobsRequest !== undefined) {
                if (retryJobsRequest instanceof RetryJobsRequest) {
                    body = retryJobsRequest.body
                } else {
                    body = retryJobsRequest['body'];
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
         * 设置应用授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppAuthorizations(updateAppAuthorizationsRequest?: UpdateAppAuthorizationsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/apps/{app_id}/actions/assign-authorizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;

            if (updateAppAuthorizationsRequest !== null && updateAppAuthorizationsRequest !== undefined) {
                if (updateAppAuthorizationsRequest instanceof UpdateAppAuthorizationsRequest) {
                    appId = updateAppAuthorizationsRequest.appId;
                    body = updateAppAuthorizationsRequest.body
                } else {
                    appId = updateAppAuthorizationsRequest['app_id'];
                    body = updateAppAuthorizationsRequest['body'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateAppAuthorizations.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUploadedApp(updateUploadedAppRequest?: UpdateUploadedAppRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-center/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;

            if (updateUploadedAppRequest !== null && updateUploadedAppRequest !== undefined) {
                if (updateUploadedAppRequest instanceof UpdateUploadedAppRequest) {
                    appId = updateUploadedAppRequest.appId;
                    body = updateUploadedAppRequest.body
                } else {
                    appId = updateUploadedAppRequest['app_id'];
                    body = updateUploadedAppRequest['body'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateUploadedApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加应用应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadApp(uploadAppRequest?: UploadAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (uploadAppRequest !== null && uploadAppRequest !== undefined) {
                if (uploadAppRequest instanceof UploadAppRequest) {
                    body = uploadAppRequest.body
                } else {
                    body = uploadAppRequest['body'];
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
         * 增加管控规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRestrictedRule(addRestrictedRuleRequest?: AddRestrictedRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/app-restricted-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addRestrictedRuleRequest !== null && addRestrictedRuleRequest !== undefined) {
                if (addRestrictedRuleRequest instanceof AddRestrictedRuleRequest) {
                    body = addRestrictedRuleRequest.body
                } else {
                    body = addRestrictedRuleRequest['body'];
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
         * 批量删除规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAppRules(batchDeleteAppRulesRequest?: BatchDeleteAppRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/app-rules/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteAppRulesRequest !== null && batchDeleteAppRulesRequest !== undefined) {
                if (batchDeleteAppRulesRequest instanceof BatchDeleteAppRulesRequest) {
                    body = batchDeleteAppRulesRequest.body
                } else {
                    body = batchDeleteAppRulesRequest['body'];
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
         * 创建应用规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppRule(createAppRuleRequest?: CreateAppRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/app-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAppRuleRequest !== null && createAppRuleRequest !== undefined) {
                if (createAppRuleRequest instanceof CreateAppRuleRequest) {
                    body = createAppRuleRequest.body
                } else {
                    body = createAppRuleRequest['body'];
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
         * 删除应用规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppRule(deleteAppRuleRequest?: DeleteAppRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/app-center/app-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;

            if (deleteAppRuleRequest !== null && deleteAppRuleRequest !== undefined) {
                if (deleteAppRuleRequest instanceof DeleteAppRuleRequest) {
                    ruleId = deleteAppRuleRequest.ruleId;
                } else {
                    ruleId = deleteAppRuleRequest['rule_id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteAppRule.');
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除管控规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRestrictedRule(deleteRestrictedRuleRequest?: DeleteRestrictedRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/app-restricted-rules/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteRestrictedRuleRequest !== null && deleteRestrictedRuleRequest !== undefined) {
                if (deleteRestrictedRuleRequest instanceof DeleteRestrictedRuleRequest) {
                    body = deleteRestrictedRuleRequest.body
                } else {
                    body = deleteRestrictedRuleRequest['body'];
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
         * 禁用规则管控。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableRuleRestriction() {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/app-rules/actions/disable-rule-restriction",
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
         * 启用规则管控。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableRuleRestriction() {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/app-rules/actions/enable-rule-restriction",
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
         * 查询应用规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppRule(listAppRuleRequest?: ListAppRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-center/app-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let name;

            if (listAppRuleRequest !== null && listAppRuleRequest !== undefined) {
                if (listAppRuleRequest instanceof ListAppRuleRequest) {
                    offset = listAppRuleRequest.offset;
                    limit = listAppRuleRequest.limit;
                    name = listAppRuleRequest.name;
                } else {
                    offset = listAppRuleRequest['offset'];
                    limit = listAppRuleRequest['limit'];
                    name = listAppRuleRequest['name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询管控规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestrictedRule(listRestrictedRuleRequest?: ListRestrictedRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-center/app-restricted-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let name;

            if (listRestrictedRuleRequest !== null && listRestrictedRuleRequest !== undefined) {
                if (listRestrictedRuleRequest instanceof ListRestrictedRuleRequest) {
                    offset = listRestrictedRuleRequest.offset;
                    limit = listRestrictedRuleRequest.limit;
                    name = listRestrictedRuleRequest.name;
                } else {
                    offset = listRestrictedRuleRequest['offset'];
                    limit = listRestrictedRuleRequest['limit'];
                    name = listRestrictedRuleRequest['name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置管控规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRuleRestriction(setRuleRestrictionRequest?: SetRuleRestrictionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-center/app-rules/actions/set-rule-restriction",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setRuleRestrictionRequest !== null && setRuleRestrictionRequest !== undefined) {
                if (setRuleRestrictionRequest instanceof SetRuleRestrictionRequest) {
                    body = setRuleRestrictionRequest.body
                } else {
                    body = setRuleRestrictionRequest['body'];
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
         * 查询管控规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRuleRestriction() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-center/app-rules/actions/get-rule-restriction",
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
         * 修改应用规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppRule(updateAppRuleRequest?: UpdateAppRuleRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-center/app-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleId;

            if (updateAppRuleRequest !== null && updateAppRuleRequest !== undefined) {
                if (updateAppRuleRequest instanceof UpdateAppRuleRequest) {
                    ruleId = updateAppRuleRequest.ruleId;
                    body = updateAppRuleRequest.body
                } else {
                    ruleId = updateAppRuleRequest['rule_id'];
                    body = updateAppRuleRequest['body'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateAppRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询辅助认证的配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssistAuthConfig() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/assist-auth-config/method-config",
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
         * 查询认证登录方式配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuthConfig(showAuthConfigRequest?: ShowAuthConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/auth-config/method-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let authType;

            if (showAuthConfigRequest !== null && showAuthConfigRequest !== undefined) {
                if (showAuthConfigRequest instanceof ShowAuthConfigRequest) {
                    authType = showAuthConfigRequest.authType;
                } else {
                    authType = showAuthConfigRequest['auth_type'];
                }
            }

        
            if (authType !== null && authType !== undefined) {
                localVarQueryParameter['auth_type'] = authType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新辅助认证策略配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAssistAuthMethodConfig(updateAssistAuthMethodConfigRequest?: UpdateAssistAuthMethodConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/assist-auth-config/method-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAssistAuthMethodConfigRequest !== null && updateAssistAuthMethodConfigRequest !== undefined) {
                if (updateAssistAuthMethodConfigRequest instanceof UpdateAssistAuthMethodConfigRequest) {
                    body = updateAssistAuthMethodConfigRequest.body
                } else {
                    body = updateAssistAuthMethodConfigRequest['body'];
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
         * 更新认证策略配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuthMethodConfig(updateAuthMethodConfigRequest?: UpdateAuthMethodConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/auth-config/method-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAuthMethodConfigRequest !== null && updateAuthMethodConfigRequest !== undefined) {
                if (updateAuthMethodConfigRequest instanceof UpdateAuthMethodConfigRequest) {
                    body = updateAuthMethodConfigRequest.body
                } else {
                    body = updateAuthMethodConfigRequest['body'];
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
         * 该接口用于查询云桌面支持的可用分区列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/availability-zones",
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
         * 该接口用于查询云桌面支持的可用分区列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAzs() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/availability-zones/summary",
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
         * 该接口用于查询云桌面支持的可用分区列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAzDetails(showAzDetailsRequest?: ShowAzDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/availability-zones/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let availabilityZoneId;

            if (showAzDetailsRequest !== null && showAzDetailsRequest !== undefined) {
                if (showAzDetailsRequest instanceof ShowAzDetailsRequest) {
                    availabilityZoneId = showAzDetailsRequest.availabilityZoneId;
                } else {
                    availabilityZoneId = showAzDetailsRequest['availability_zone_id'];
                }
            }

        
            if (availabilityZoneId === null || availabilityZoneId === undefined) {
                throw new RequiredError('availabilityZoneId','Required parameter availabilityZoneId was null or undefined when calling showAzDetails.');
            }
            if (availabilityZoneId !== null && availabilityZoneId !== undefined) {
                localVarQueryParameter['availability_zone_id'] = availabilityZoneId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于导出连接记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportUserLoginInfoNew(exportUserLoginInfoNewRequest?: ExportUserLoginInfoNewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/connections/desktops/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let userName;
            
            let computerName;
            
            let terminalType;
            
            let language;

            if (exportUserLoginInfoNewRequest !== null && exportUserLoginInfoNewRequest !== undefined) {
                if (exportUserLoginInfoNewRequest instanceof ExportUserLoginInfoNewRequest) {
                    startTime = exportUserLoginInfoNewRequest.startTime;
                    endTime = exportUserLoginInfoNewRequest.endTime;
                    userName = exportUserLoginInfoNewRequest.userName;
                    computerName = exportUserLoginInfoNewRequest.computerName;
                    terminalType = exportUserLoginInfoNewRequest.terminalType;
                    language = exportUserLoginInfoNewRequest.language;
                } else {
                    startTime = exportUserLoginInfoNewRequest['start_time'];
                    endTime = exportUserLoginInfoNewRequest['end_time'];
                    userName = exportUserLoginInfoNewRequest['user_name'];
                    computerName = exportUserLoginInfoNewRequest['computer_name'];
                    terminalType = exportUserLoginInfoNewRequest['terminal_type'];
                    language = exportUserLoginInfoNewRequest['language'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (computerName !== null && computerName !== undefined) {
                localVarQueryParameter['computer_name'] = computerName;
            }
            if (terminalType !== null && terminalType !== undefined) {
                localVarQueryParameter['terminal_type'] = terminalType;
            }
            if (language !== null && language !== undefined) {
                localVarQueryParameter['language'] = language;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询登录人数，注意查询参数不可全空。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHistoryOnlineInfoNew(listHistoryOnlineInfoNewRequest?: ListHistoryOnlineInfoNewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/connections/online-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let queryType;

            if (listHistoryOnlineInfoNewRequest !== null && listHistoryOnlineInfoNewRequest !== undefined) {
                if (listHistoryOnlineInfoNewRequest instanceof ListHistoryOnlineInfoNewRequest) {
                    startTime = listHistoryOnlineInfoNewRequest.startTime;
                    endTime = listHistoryOnlineInfoNewRequest.endTime;
                    queryType = listHistoryOnlineInfoNewRequest.queryType;
                } else {
                    startTime = listHistoryOnlineInfoNewRequest['start_time'];
                    endTime = listHistoryOnlineInfoNewRequest['end_time'];
                    queryType = listHistoryOnlineInfoNewRequest['query_type'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (queryType !== null && queryType !== undefined) {
                localVarQueryParameter['query_type'] = queryType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询桌面登录状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesStatus() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/connections/status",
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
         * 该接口用于查询登录信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoginRecordsNew(listLoginRecordsNewRequest?: ListLoginRecordsNewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/connections/desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let userName;
            
            let computerName;
            
            let terminalType;
            
            let offset;
            
            let limit;
            
            let minNetworkRtt;
            
            let maxNetworkRtt;

            if (listLoginRecordsNewRequest !== null && listLoginRecordsNewRequest !== undefined) {
                if (listLoginRecordsNewRequest instanceof ListLoginRecordsNewRequest) {
                    startTime = listLoginRecordsNewRequest.startTime;
                    endTime = listLoginRecordsNewRequest.endTime;
                    userName = listLoginRecordsNewRequest.userName;
                    computerName = listLoginRecordsNewRequest.computerName;
                    terminalType = listLoginRecordsNewRequest.terminalType;
                    offset = listLoginRecordsNewRequest.offset;
                    limit = listLoginRecordsNewRequest.limit;
                    minNetworkRtt = listLoginRecordsNewRequest.minNetworkRtt;
                    maxNetworkRtt = listLoginRecordsNewRequest.maxNetworkRtt;
                } else {
                    startTime = listLoginRecordsNewRequest['start_time'];
                    endTime = listLoginRecordsNewRequest['end_time'];
                    userName = listLoginRecordsNewRequest['user_name'];
                    computerName = listLoginRecordsNewRequest['computer_name'];
                    terminalType = listLoginRecordsNewRequest['terminal_type'];
                    offset = listLoginRecordsNewRequest['offset'];
                    limit = listLoginRecordsNewRequest['limit'];
                    minNetworkRtt = listLoginRecordsNewRequest['min_network_rtt'];
                    maxNetworkRtt = listLoginRecordsNewRequest['max_network_rtt'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (computerName !== null && computerName !== undefined) {
                localVarQueryParameter['computer_name'] = computerName;
            }
            if (terminalType !== null && terminalType !== undefined) {
                localVarQueryParameter['terminal_type'] = terminalType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (minNetworkRtt !== null && minNetworkRtt !== undefined) {
                localVarQueryParameter['min_network_rtt'] = minNetworkRtt;
            }
            if (maxNetworkRtt !== null && maxNetworkRtt !== undefined) {
                localVarQueryParameter['max_network_rtt'] = maxNetworkRtt;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将桌面分配给用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachInstances(attachInstancesRequest?: AttachInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/attach",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (attachInstancesRequest !== null && attachInstancesRequest !== undefined) {
                if (attachInstancesRequest instanceof AttachInstancesRequest) {
                    body = attachInstancesRequest.body
                } else {
                    body = attachInstancesRequest['body'];
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
         * 预批量将桌面分配给用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAssociateInstances(batchAssociateInstancesRequest?: BatchAssociateInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/pre-batch-attach",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchAssociateInstancesRequest !== null && batchAssociateInstancesRequest !== undefined) {
                if (batchAssociateInstancesRequest instanceof BatchAssociateInstancesRequest) {
                    body = batchAssociateInstancesRequest.body
                } else {
                    body = batchAssociateInstancesRequest['body'];
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
         * 批量分配桌面给用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAttachInstances(batchAttachInstancesRequest?: BatchAttachInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/batch-attach",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchAttachInstancesRequest !== null && batchAttachInstancesRequest !== undefined) {
                if (batchAttachInstancesRequest instanceof BatchAttachInstancesRequest) {
                    body = batchAttachInstancesRequest.body
                } else {
                    body = batchAttachInstancesRequest['body'];
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
         * 批量切换桌面vpc、子网、ip、安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchChangeDesktopNetwork(batchChangeDesktopNetworkRequest?: BatchChangeDesktopNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/networks/batch-change",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchChangeDesktopNetworkRequest !== null && batchChangeDesktopNetworkRequest !== undefined) {
                if (batchChangeDesktopNetworkRequest instanceof BatchChangeDesktopNetworkRequest) {
                    body = batchChangeDesktopNetworkRequest.body
                } else {
                    body = batchChangeDesktopNetworkRequest['body'];
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
         * 批量删除桌面，删除后无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDesktops(batchDeleteDesktopsRequest?: BatchDeleteDesktopsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteDesktopsRequest !== null && batchDeleteDesktopsRequest !== undefined) {
                if (batchDeleteDesktopsRequest instanceof BatchDeleteDesktopsRequest) {
                    body = batchDeleteDesktopsRequest.body
                } else {
                    body = batchDeleteDesktopsRequest['body'];
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
         * 批量将桌面和用户解绑。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDetachInstances(batchDetachInstancesRequest?: BatchDetachInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/batch-detach",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDetachInstancesRequest !== null && batchDetachInstancesRequest !== undefined) {
                if (batchDetachInstancesRequest instanceof BatchDetachInstancesRequest) {
                    body = batchDetachInstancesRequest.body
                } else {
                    body = batchDetachInstancesRequest['body'];
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
         * 批量为桌面安装agent。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchInstallAgent(batchInstallAgentRequest?: BatchInstallAgentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/agents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchInstallAgentRequest !== null && batchInstallAgentRequest !== undefined) {
                if (batchInstallAgentRequest instanceof BatchInstallAgentRequest) {
                    body = batchInstallAgentRequest.body
                } else {
                    body = batchInstallAgentRequest['body'];
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
         * 批量注销桌面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchLogoffDesktops(batchLogoffDesktopsRequest?: BatchLogoffDesktopsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/logoff",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchLogoffDesktopsRequest !== null && batchLogoffDesktopsRequest !== undefined) {
                if (batchLogoffDesktopsRequest instanceof BatchLogoffDesktopsRequest) {
                    body = batchLogoffDesktopsRequest.body
                } else {
                    body = batchLogoffDesktopsRequest['body'];
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
         * 批量重建桌面系统盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRebuildDesktopsSystemDisk(batchRebuildDesktopsSystemDiskRequest?: BatchRebuildDesktopsSystemDiskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/rebuild",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRebuildDesktopsSystemDiskRequest !== null && batchRebuildDesktopsSystemDiskRequest !== undefined) {
                if (batchRebuildDesktopsSystemDiskRequest instanceof BatchRebuildDesktopsSystemDiskRequest) {
                    body = batchRebuildDesktopsSystemDiskRequest.body
                } else {
                    body = batchRebuildDesktopsSystemDiskRequest['body'];
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
         * 批量操作桌面，用于批量开机、关机、休眠和重启。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRunDesktops(batchRunDesktopsRequest?: BatchRunDesktopsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRunDesktopsRequest !== null && batchRunDesktopsRequest !== undefined) {
                if (batchRunDesktopsRequest instanceof BatchRunDesktopsRequest) {
                    body = batchRunDesktopsRequest.body
                } else {
                    body = batchRunDesktopsRequest['body'];
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
         * 取消远程协助。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelRemoteAssistance(cancelRemoteAssistanceRequest?: CancelRemoteAssistanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/desktops/{desktop_id}/remote-assistance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (cancelRemoteAssistanceRequest !== null && cancelRemoteAssistanceRequest !== undefined) {
                if (cancelRemoteAssistanceRequest instanceof CancelRemoteAssistanceRequest) {
                    desktopId = cancelRemoteAssistanceRequest.desktopId;
                } else {
                    desktopId = cancelRemoteAssistanceRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling cancelRemoteAssistance.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换桌面vpc、子网、ip、安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeDesktopNetwork(changeDesktopNetworkRequest?: ChangeDesktopNetworkRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/desktops/{desktop_id}/networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let desktopId;

            if (changeDesktopNetworkRequest !== null && changeDesktopNetworkRequest !== undefined) {
                if (changeDesktopNetworkRequest instanceof ChangeDesktopNetworkRequest) {
                    desktopId = changeDesktopNetworkRequest.desktopId;
                    body = changeDesktopNetworkRequest.body
                } else {
                    desktopId = changeDesktopNetworkRequest['desktop_id'];
                    body = changeDesktopNetworkRequest['body'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling changeDesktopNetwork.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 桌面转镜像。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeDesktopToImage(changeDesktopToImageRequest?: ChangeDesktopToImageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/desktop-to-image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeDesktopToImageRequest !== null && changeDesktopToImageRequest !== undefined) {
                if (changeDesktopToImageRequest instanceof ChangeDesktopToImageRequest) {
                    body = changeDesktopToImageRequest.body
                } else {
                    body = changeDesktopToImageRequest['body'];
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
         * 批量修改用户权限组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeUserPrivilegeGroup(changeUserPrivilegeGroupRequest?: ChangeUserPrivilegeGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/change-user-privilege-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeUserPrivilegeGroupRequest !== null && changeUserPrivilegeGroupRequest !== undefined) {
                if (changeUserPrivilegeGroupRequest instanceof ChangeUserPrivilegeGroupRequest) {
                    body = changeUserPrivilegeGroupRequest.body
                } else {
                    body = changeUserPrivilegeGroupRequest['body'];
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
         * 创建桌面，并将此桌面分配给用户，当桌面创建成功后用户可以登录使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDesktop(createDesktopRequest?: CreateDesktopRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDesktopRequest !== null && createDesktopRequest !== undefined) {
                if (createDesktopRequest instanceof CreateDesktopRequest) {
                    body = createDesktopRequest.body
                } else {
                    body = createDesktopRequest['body'];
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
         * 创建远程协助。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRemoteAssistance(createRemoteAssistanceRequest?: CreateRemoteAssistanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/{desktop_id}/remote-assistance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (createRemoteAssistanceRequest !== null && createRemoteAssistanceRequest !== undefined) {
                if (createRemoteAssistanceRequest instanceof CreateRemoteAssistanceRequest) {
                    desktopId = createRemoteAssistanceRequest.desktopId;
                } else {
                    desktopId = createRemoteAssistanceRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling createRemoteAssistance.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除单个桌面，删除后无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDesktop(deleteDesktopRequest?: DeleteDesktopRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/desktops/{desktop_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let desktopId;
            
            let deleteUsers;
            
            let emailNotification;
            
            let isForceDelete;

            if (deleteDesktopRequest !== null && deleteDesktopRequest !== undefined) {
                if (deleteDesktopRequest instanceof DeleteDesktopRequest) {
                    desktopId = deleteDesktopRequest.desktopId;
                    deleteUsers = deleteDesktopRequest.deleteUsers;
                    emailNotification = deleteDesktopRequest.emailNotification;
                    isForceDelete = deleteDesktopRequest.isForceDelete;
                } else {
                    desktopId = deleteDesktopRequest['desktop_id'];
                    deleteUsers = deleteDesktopRequest['delete_users'];
                    emailNotification = deleteDesktopRequest['email_notification'];
                    isForceDelete = deleteDesktopRequest['is_force_delete'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling deleteDesktop.');
            }
            if (deleteUsers !== null && deleteUsers !== undefined) {
                localVarQueryParameter['delete_users'] = deleteUsers;
            }
            if (emailNotification !== null && emailNotification !== undefined) {
                localVarQueryParameter['email_notification'] = emailNotification;
            }
            if (isForceDelete !== null && isForceDelete !== undefined) {
                localVarQueryParameter['is_force_delete'] = isForceDelete;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将桌面和用户解绑。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachInstances(detachInstancesRequest?: DetachInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/detach",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (detachInstancesRequest !== null && detachInstancesRequest !== undefined) {
                if (detachInstancesRequest instanceof DetachInstancesRequest) {
                    body = detachInstancesRequest.body
                } else {
                    body = detachInstancesRequest['body'];
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
         * 展示桌面安装agent详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgentsInstallCondition(listAgentsInstallConditionRequest?: ListAgentsInstallConditionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/agents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let desktopId;
            
            let desktopName;
            
            let status;
            
            let ipAddress;
            
            let isInstalled;
            
            let desktopPoolId;
            
            let limit;
            
            let offset;

            if (listAgentsInstallConditionRequest !== null && listAgentsInstallConditionRequest !== undefined) {
                if (listAgentsInstallConditionRequest instanceof ListAgentsInstallConditionRequest) {
                    enterpriseProjectId = listAgentsInstallConditionRequest.enterpriseProjectId;
                    desktopId = listAgentsInstallConditionRequest.desktopId;
                    desktopName = listAgentsInstallConditionRequest.desktopName;
                    status = listAgentsInstallConditionRequest.status;
                    ipAddress = listAgentsInstallConditionRequest.ipAddress;
                    isInstalled = listAgentsInstallConditionRequest.isInstalled;
                    desktopPoolId = listAgentsInstallConditionRequest.desktopPoolId;
                    limit = listAgentsInstallConditionRequest.limit;
                    offset = listAgentsInstallConditionRequest.offset;
                } else {
                    enterpriseProjectId = listAgentsInstallConditionRequest['enterprise_project_id'];
                    desktopId = listAgentsInstallConditionRequest['desktop_id'];
                    desktopName = listAgentsInstallConditionRequest['desktop_name'];
                    status = listAgentsInstallConditionRequest['status'];
                    ipAddress = listAgentsInstallConditionRequest['ip_address'];
                    isInstalled = listAgentsInstallConditionRequest['is_installed'];
                    desktopPoolId = listAgentsInstallConditionRequest['desktop_pool_id'];
                    limit = listAgentsInstallConditionRequest['limit'];
                    offset = listAgentsInstallConditionRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (desktopId !== null && desktopId !== undefined) {
                localVarQueryParameter['desktop_id'] = desktopId;
            }
            if (desktopName !== null && desktopName !== undefined) {
                localVarQueryParameter['desktop_name'] = desktopName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (ipAddress !== null && ipAddress !== undefined) {
                localVarQueryParameter['ip_address'] = ipAddress;
            }
            if (isInstalled !== null && isInstalled !== undefined) {
                localVarQueryParameter['is_installed'] = isInstalled;
            }
            if (desktopPoolId !== null && desktopPoolId !== undefined) {
                localVarQueryParameter['desktop_pool_id'] = desktopPoolId;
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
         * 获取桌面开关机信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopActions(listDesktopActionsRequest?: ListDesktopActionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/{desktop_id}/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let desktopId;
            
            let offset;
            
            let limit;

            if (listDesktopActionsRequest !== null && listDesktopActionsRequest !== undefined) {
                if (listDesktopActionsRequest instanceof ListDesktopActionsRequest) {
                    desktopId = listDesktopActionsRequest.desktopId;
                    offset = listDesktopActionsRequest.offset;
                    limit = listDesktopActionsRequest.limit;
                } else {
                    desktopId = listDesktopActionsRequest['desktop_id'];
                    offset = listDesktopActionsRequest['offset'];
                    limit = listDesktopActionsRequest['limit'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling listDesktopActions.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询桌面虚拟机列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktops(listDesktopsRequest?: ListDesktopsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;
            
            let computerName;
            
            let desktopIp;
            
            let offset;
            
            let limit;
            
            let poolId;
            
            let enterpriseProjectId;
            
            let desktopType;
            
            let isShareDesktop;
            
            let subnetId;
            
            let status;
            
            let desktopId;
            
            let tag;

            if (listDesktopsRequest !== null && listDesktopsRequest !== undefined) {
                if (listDesktopsRequest instanceof ListDesktopsRequest) {
                    userName = listDesktopsRequest.userName;
                    computerName = listDesktopsRequest.computerName;
                    desktopIp = listDesktopsRequest.desktopIp;
                    offset = listDesktopsRequest.offset;
                    limit = listDesktopsRequest.limit;
                    poolId = listDesktopsRequest.poolId;
                    enterpriseProjectId = listDesktopsRequest.enterpriseProjectId;
                    desktopType = listDesktopsRequest.desktopType;
                    isShareDesktop = listDesktopsRequest.isShareDesktop;
                    subnetId = listDesktopsRequest.subnetId;
                    status = listDesktopsRequest.status;
                    desktopId = listDesktopsRequest.desktopId;
                    tag = listDesktopsRequest.tag;
                } else {
                    userName = listDesktopsRequest['user_name'];
                    computerName = listDesktopsRequest['computer_name'];
                    desktopIp = listDesktopsRequest['desktop_ip'];
                    offset = listDesktopsRequest['offset'];
                    limit = listDesktopsRequest['limit'];
                    poolId = listDesktopsRequest['pool_id'];
                    enterpriseProjectId = listDesktopsRequest['enterprise_project_id'];
                    desktopType = listDesktopsRequest['desktop_type'];
                    isShareDesktop = listDesktopsRequest['is_share_desktop'];
                    subnetId = listDesktopsRequest['subnet_id'];
                    status = listDesktopsRequest['status'];
                    desktopId = listDesktopsRequest['desktop_id'];
                    tag = listDesktopsRequest['tag'];
                }
            }

        
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (computerName !== null && computerName !== undefined) {
                localVarQueryParameter['computer_name'] = computerName;
            }
            if (desktopIp !== null && desktopIp !== undefined) {
                localVarQueryParameter['desktop_ip'] = desktopIp;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (poolId !== null && poolId !== undefined) {
                localVarQueryParameter['pool_id'] = poolId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (desktopType !== null && desktopType !== undefined) {
                localVarQueryParameter['desktop_type'] = desktopType;
            }
            if (isShareDesktop !== null && isShareDesktop !== undefined) {
                localVarQueryParameter['is_share_desktop'] = isShareDesktop;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (desktopId !== null && desktopId !== undefined) {
                localVarQueryParameter['desktop_id'] = desktopId;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询桌面连接状态列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopsConnectStatus(listDesktopsConnectStatusRequest?: ListDesktopsConnectStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/connect-desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userNames;
            
            let connectStatus;
            
            let offset;
            
            let limit;

            if (listDesktopsConnectStatusRequest !== null && listDesktopsConnectStatusRequest !== undefined) {
                if (listDesktopsConnectStatusRequest instanceof ListDesktopsConnectStatusRequest) {
                    userNames = listDesktopsConnectStatusRequest.userNames;
                    connectStatus = listDesktopsConnectStatusRequest.connectStatus;
                    offset = listDesktopsConnectStatusRequest.offset;
                    limit = listDesktopsConnectStatusRequest.limit;
                } else {
                    userNames = listDesktopsConnectStatusRequest['user_names'];
                    connectStatus = listDesktopsConnectStatusRequest['connect_status'];
                    offset = listDesktopsConnectStatusRequest['offset'];
                    limit = listDesktopsConnectStatusRequest['limit'];
                }
            }

        
            if (userNames !== null && userNames !== undefined) {
                localVarQueryParameter['user_names'] = userNames;
            }
            if (connectStatus !== null && connectStatus !== undefined) {
                localVarQueryParameter['connect_status'] = connectStatus;
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
         * 查询桌面详情信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopsDetail(listDesktopsDetailRequest?: ListDesktopsDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let status;
            
            let userName;
            
            let userNames;
            
            let sortField;
            
            let sortType;
            
            let computerName;
            
            let desktopIp;
            
            let offset;
            
            let limit;
            
            let desktopId;
            
            let desktopType;
            
            let tag;
            
            let poolId;
            
            let userAttached;
            
            let enterpriseProjectId;
            
            let imageId;
            
            let chargeMode;
            
            let inMaintenanceMode;
            
            let isShareDesktop;
            
            let subnetId;
            
            let isSupportInternet;
            
            let availabilityZone;

            if (listDesktopsDetailRequest !== null && listDesktopsDetailRequest !== undefined) {
                if (listDesktopsDetailRequest instanceof ListDesktopsDetailRequest) {
                    status = listDesktopsDetailRequest.status;
                    userName = listDesktopsDetailRequest.userName;
                    userNames = listDesktopsDetailRequest.userNames;
                    sortField = listDesktopsDetailRequest.sortField;
                    sortType = listDesktopsDetailRequest.sortType;
                    computerName = listDesktopsDetailRequest.computerName;
                    desktopIp = listDesktopsDetailRequest.desktopIp;
                    offset = listDesktopsDetailRequest.offset;
                    limit = listDesktopsDetailRequest.limit;
                    desktopId = listDesktopsDetailRequest.desktopId;
                    desktopType = listDesktopsDetailRequest.desktopType;
                    tag = listDesktopsDetailRequest.tag;
                    poolId = listDesktopsDetailRequest.poolId;
                    userAttached = listDesktopsDetailRequest.userAttached;
                    enterpriseProjectId = listDesktopsDetailRequest.enterpriseProjectId;
                    imageId = listDesktopsDetailRequest.imageId;
                    chargeMode = listDesktopsDetailRequest.chargeMode;
                    inMaintenanceMode = listDesktopsDetailRequest.inMaintenanceMode;
                    isShareDesktop = listDesktopsDetailRequest.isShareDesktop;
                    subnetId = listDesktopsDetailRequest.subnetId;
                    isSupportInternet = listDesktopsDetailRequest.isSupportInternet;
                    availabilityZone = listDesktopsDetailRequest.availabilityZone;
                } else {
                    status = listDesktopsDetailRequest['status'];
                    userName = listDesktopsDetailRequest['user_name'];
                    userNames = listDesktopsDetailRequest['user_names'];
                    sortField = listDesktopsDetailRequest['sort_field'];
                    sortType = listDesktopsDetailRequest['sort_type'];
                    computerName = listDesktopsDetailRequest['computer_name'];
                    desktopIp = listDesktopsDetailRequest['desktop_ip'];
                    offset = listDesktopsDetailRequest['offset'];
                    limit = listDesktopsDetailRequest['limit'];
                    desktopId = listDesktopsDetailRequest['desktop_id'];
                    desktopType = listDesktopsDetailRequest['desktop_type'];
                    tag = listDesktopsDetailRequest['tag'];
                    poolId = listDesktopsDetailRequest['pool_id'];
                    userAttached = listDesktopsDetailRequest['user_attached'];
                    enterpriseProjectId = listDesktopsDetailRequest['enterprise_project_id'];
                    imageId = listDesktopsDetailRequest['image_id'];
                    chargeMode = listDesktopsDetailRequest['charge_mode'];
                    inMaintenanceMode = listDesktopsDetailRequest['in_maintenance_mode'];
                    isShareDesktop = listDesktopsDetailRequest['is_share_desktop'];
                    subnetId = listDesktopsDetailRequest['subnet_id'];
                    isSupportInternet = listDesktopsDetailRequest['is_support_internet'];
                    availabilityZone = listDesktopsDetailRequest['availability_zone'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (userNames !== null && userNames !== undefined) {
                localVarQueryParameter['user_names'] = userNames;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }
            if (computerName !== null && computerName !== undefined) {
                localVarQueryParameter['computer_name'] = computerName;
            }
            if (desktopIp !== null && desktopIp !== undefined) {
                localVarQueryParameter['desktop_ip'] = desktopIp;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (desktopId !== null && desktopId !== undefined) {
                localVarQueryParameter['desktop_id'] = desktopId;
            }
            if (desktopType !== null && desktopType !== undefined) {
                localVarQueryParameter['desktop_type'] = desktopType;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (poolId !== null && poolId !== undefined) {
                localVarQueryParameter['pool_id'] = poolId;
            }
            if (userAttached !== null && userAttached !== undefined) {
                localVarQueryParameter['user_attached'] = userAttached;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (inMaintenanceMode !== null && inMaintenanceMode !== undefined) {
                localVarQueryParameter['in_maintenance_mode'] = inMaintenanceMode;
            }
            if (isShareDesktop !== null && isShareDesktop !== undefined) {
                localVarQueryParameter['is_share_desktop'] = isShareDesktop;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (isSupportInternet !== null && isSupportInternet !== undefined) {
                localVarQueryParameter['is_support_internet'] = isSupportInternet;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于Windows桌面重新加入AD域，一般用于解决桌面脱域的情况使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerDomain(registerDomainRequest?: RegisterDomainRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/{desktop_id}/rejoin-domain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (registerDomainRequest !== null && registerDomainRequest !== undefined) {
                if (registerDomainRequest instanceof RegisterDomainRequest) {
                    desktopId = registerDomainRequest.desktopId;
                } else {
                    desktopId = registerDomainRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling registerDomain.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更云桌面规格，只支持变更CPU和内存，不支持变更磁盘，不支持同规格互相变更。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeDesktop(resizeDesktopRequest?: ResizeDesktopRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (resizeDesktopRequest !== null && resizeDesktopRequest !== undefined) {
                if (resizeDesktopRequest instanceof ResizeDesktopRequest) {
                    body = resizeDesktopRequest.body
                } else {
                    body = resizeDesktopRequest['body'];
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
         * 用于管理员向桌面发送消息通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendNotifications(sendNotificationsRequest?: SendNotificationsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/notifications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (sendNotificationsRequest !== null && sendNotificationsRequest !== undefined) {
                if (sendNotificationsRequest instanceof SendNotificationsRequest) {
                    body = sendNotificationsRequest.body
                } else {
                    body = sendNotificationsRequest['body'];
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
         * 批量设置桌面管理员维护模式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setMaintenanceMode(setMaintenanceModeRequest?: SetMaintenanceModeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/desktops/maintenance-mode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setMaintenanceModeRequest !== null && setMaintenanceModeRequest !== undefined) {
                if (setMaintenanceModeRequest instanceof SetMaintenanceModeRequest) {
                    body = setMaintenanceModeRequest.body
                } else {
                    body = setMaintenanceModeRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定桌面Id查询详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDesktopDetail(showDesktopDetailRequest?: ShowDesktopDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/{desktop_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (showDesktopDetailRequest !== null && showDesktopDetailRequest !== undefined) {
                if (showDesktopDetailRequest instanceof ShowDesktopDetailRequest) {
                    desktopId = showDesktopDetailRequest.desktopId;
                } else {
                    desktopId = showDesktopDetailRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling showDesktopDetail.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可获取某一计算机在一段时间段(范围：1小时到30天)的数据信息（例如CPU占用率、内存占用率、用户的在线时间段等），最长数据保存时间不能超过180天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDesktopMonitorData(showDesktopMonitorDataRequest?: ShowDesktopMonitorDataRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktop-monitor/{desktop_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let desktopId;
            
            let startTime;
            
            let endTime;
            
            let metricName;

            if (showDesktopMonitorDataRequest !== null && showDesktopMonitorDataRequest !== undefined) {
                if (showDesktopMonitorDataRequest instanceof ShowDesktopMonitorDataRequest) {
                    desktopId = showDesktopMonitorDataRequest.desktopId;
                    startTime = showDesktopMonitorDataRequest.startTime;
                    endTime = showDesktopMonitorDataRequest.endTime;
                    metricName = showDesktopMonitorDataRequest.metricName;
                } else {
                    desktopId = showDesktopMonitorDataRequest['desktop_id'];
                    startTime = showDesktopMonitorDataRequest['start_time'];
                    endTime = showDesktopMonitorDataRequest['end_time'];
                    metricName = showDesktopMonitorDataRequest['metric_name'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling showDesktopMonitorData.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showDesktopMonitorData.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showDesktopMonitorData.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询桌面vpc、子网、privateIp、EIP、安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDesktopNetwork(showDesktopNetworkRequest?: ShowDesktopNetworkRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/{desktop_id}/networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (showDesktopNetworkRequest !== null && showDesktopNetworkRequest !== undefined) {
                if (showDesktopNetworkRequest instanceof ShowDesktopNetworkRequest) {
                    desktopId = showDesktopNetworkRequest.desktopId;
                } else {
                    desktopId = showDesktopNetworkRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling showDesktopNetwork.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询桌面vpc、子网、privateIp、EIP、安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDesktopNetworks(showDesktopNetworksRequest?: ShowDesktopNetworksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let desktopIds;

            if (showDesktopNetworksRequest !== null && showDesktopNetworksRequest !== undefined) {
                if (showDesktopNetworksRequest instanceof ShowDesktopNetworksRequest) {
                    desktopIds = showDesktopNetworksRequest.desktopIds;
                } else {
                    desktopIds = showDesktopNetworksRequest['desktop_ids'];
                }
            }

        
            if (desktopIds !== null && desktopIds !== undefined) {
                localVarQueryParameter['desktop_ids'] = desktopIds;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据桌面id查询远程协助信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDesktopRemoteAssistanceInfo(showDesktopRemoteAssistanceInfoRequest?: ShowDesktopRemoteAssistanceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/{desktop_id}/remote-assistance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (showDesktopRemoteAssistanceInfoRequest !== null && showDesktopRemoteAssistanceInfoRequest !== undefined) {
                if (showDesktopRemoteAssistanceInfoRequest instanceof ShowDesktopRemoteAssistanceInfoRequest) {
                    desktopId = showDesktopRemoteAssistanceInfoRequest.desktopId;
                } else {
                    desktopId = showDesktopRemoteAssistanceInfoRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling showDesktopRemoteAssistanceInfo.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于直接获取远程登录控制台地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRemoteConsoleAddress(showRemoteConsoleAddressRequest?: ShowRemoteConsoleAddressRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/{desktop_id}/remote-consoles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (showRemoteConsoleAddressRequest !== null && showRemoteConsoleAddressRequest !== undefined) {
                if (showRemoteConsoleAddressRequest instanceof ShowRemoteConsoleAddressRequest) {
                    desktopId = showRemoteConsoleAddressRequest.desktopId;
                } else {
                    desktopId = showRemoteConsoleAddressRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling showRemoteConsoleAddress.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询sysprep版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSysprepInfo(showSysprepInfoRequest?: ShowSysprepInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/{desktop_id}/sysprep",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (showSysprepInfoRequest !== null && showSysprepInfoRequest !== undefined) {
                if (showSysprepInfoRequest instanceof ShowSysprepInfoRequest) {
                    desktopId = showSysprepInfoRequest.desktopId;
                } else {
                    desktopId = showSysprepInfoRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling showSysprepInfo.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改桌面属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDesktop(updateDesktopRequest?: UpdateDesktopRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/desktops/{desktop_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let desktopId;

            if (updateDesktopRequest !== null && updateDesktopRequest !== undefined) {
                if (updateDesktopRequest instanceof UpdateDesktopRequest) {
                    desktopId = updateDesktopRequest.desktopId;
                    body = updateDesktopRequest.body
                } else {
                    desktopId = updateDesktopRequest['desktop_id'];
                    body = updateDesktopRequest['body'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling updateDesktop.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于桌面sid和WindowsAD中的SID不同时，更新桌面SID使其与AD中的SID保持一致，一般用于解决桌面脱域的情况使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDesktopSids(updateDesktopSidsRequest?: UpdateDesktopSidsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/desktops/sids",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateDesktopSidsRequest !== null && updateDesktopSidsRequest !== undefined) {
                if (updateDesktopSidsRequest instanceof UpdateDesktopSidsRequest) {
                    body = updateDesktopSidsRequest.body
                } else {
                    body = updateDesktopSidsRequest['body'];
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
         * AD场景支持桌面更换关联用户名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDesktopUsername(updateDesktopUsernameRequest?: UpdateDesktopUsernameRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/desktops/change-username",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateDesktopUsernameRequest !== null && updateDesktopUsernameRequest !== undefined) {
                if (updateDesktopUsernameRequest instanceof UpdateDesktopUsernameRequest) {
                    body = updateDesktopUsernameRequest.body
                } else {
                    body = updateDesktopUsernameRequest['body'];
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
         * 批量删除桌面名称策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDesktopNamePolicy(batchDeleteDesktopNamePolicyRequest?: BatchDeleteDesktopNamePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-name-policies/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteDesktopNamePolicyRequest !== null && batchDeleteDesktopNamePolicyRequest !== undefined) {
                if (batchDeleteDesktopNamePolicyRequest instanceof BatchDeleteDesktopNamePolicyRequest) {
                    body = batchDeleteDesktopNamePolicyRequest.body
                } else {
                    body = batchDeleteDesktopNamePolicyRequest['body'];
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
         * 创建桌面名称策略，用于自动生成桌面名称，最多允许50个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDesktopNamePolicy(createDesktopNamePolicyRequest?: CreateDesktopNamePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-name-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDesktopNamePolicyRequest !== null && createDesktopNamePolicyRequest !== undefined) {
                if (createDesktopNamePolicyRequest instanceof CreateDesktopNamePolicyRequest) {
                    body = createDesktopNamePolicyRequest.body
                } else {
                    body = createDesktopNamePolicyRequest['body'];
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
         * 获取桌面名称策略，用于自动生成桌面名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopNamePolicy(listDesktopNamePolicyRequest?: ListDesktopNamePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktop-name-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let isContainUser;
            
            let policyName;
            
            let policyId;
            
            let offset;
            
            let limit;

            if (listDesktopNamePolicyRequest !== null && listDesktopNamePolicyRequest !== undefined) {
                if (listDesktopNamePolicyRequest instanceof ListDesktopNamePolicyRequest) {
                    isContainUser = listDesktopNamePolicyRequest.isContainUser;
                    policyName = listDesktopNamePolicyRequest.policyName;
                    policyId = listDesktopNamePolicyRequest.policyId;
                    offset = listDesktopNamePolicyRequest.offset;
                    limit = listDesktopNamePolicyRequest.limit;
                } else {
                    isContainUser = listDesktopNamePolicyRequest['is_contain_user'];
                    policyName = listDesktopNamePolicyRequest['policy_name'];
                    policyId = listDesktopNamePolicyRequest['policy_id'];
                    offset = listDesktopNamePolicyRequest['offset'];
                    limit = listDesktopNamePolicyRequest['limit'];
                }
            }

        
            if (isContainUser !== null && isContainUser !== undefined) {
                localVarQueryParameter['is_contain_user'] = isContainUser;
            }
            if (policyName !== null && policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }
            if (policyId !== null && policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
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
         * 更新桌面名称策略，用于自动生成桌面名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDesktopNamePolicy(updateDesktopNamePolicyRequest?: UpdateDesktopNamePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/desktop-name-policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (updateDesktopNamePolicyRequest !== null && updateDesktopNamePolicyRequest !== undefined) {
                if (updateDesktopNamePolicyRequest instanceof UpdateDesktopNamePolicyRequest) {
                    policyId = updateDesktopNamePolicyRequest.policyId;
                    body = updateDesktopNamePolicyRequest.body
                } else {
                    policyId = updateDesktopNamePolicyRequest['policy_id'];
                    body = updateDesktopNamePolicyRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateDesktopNamePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 桌面池批量添加磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDesktopPoolVolumes(addDesktopPoolVolumesRequest?: AddDesktopPoolVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/volumes/batch-add",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (addDesktopPoolVolumesRequest !== null && addDesktopPoolVolumesRequest !== undefined) {
                if (addDesktopPoolVolumesRequest instanceof AddDesktopPoolVolumesRequest) {
                    poolId = addDesktopPoolVolumesRequest.poolId;
                    body = addDesktopPoolVolumesRequest.body
                } else {
                    poolId = addDesktopPoolVolumesRequest['pool_id'];
                    body = addDesktopPoolVolumesRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling addDesktopPoolVolumes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建桌面池，可将此桌面池分配给用户、用户组，用户登录时会绑定其中一个桌面。
         * 注:需通过开通委托功能接口先对云服务进行授权才可以使用该功能
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDesktopPool(createDesktopPoolRequest?: CreateDesktopPoolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDesktopPoolRequest !== null && createDesktopPoolRequest !== undefined) {
                if (createDesktopPoolRequest instanceof CreateDesktopPoolRequest) {
                    body = createDesktopPoolRequest.body
                } else {
                    body = createDesktopPoolRequest['body'];
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
         * 该接口用于桌面池授权用户、用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDesktopPoolAuthorizedObjects(createDesktopPoolAuthorizedObjectsRequest?: CreateDesktopPoolAuthorizedObjectsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (createDesktopPoolAuthorizedObjectsRequest !== null && createDesktopPoolAuthorizedObjectsRequest !== undefined) {
                if (createDesktopPoolAuthorizedObjectsRequest instanceof CreateDesktopPoolAuthorizedObjectsRequest) {
                    poolId = createDesktopPoolAuthorizedObjectsRequest.poolId;
                    body = createDesktopPoolAuthorizedObjectsRequest.body
                } else {
                    poolId = createDesktopPoolAuthorizedObjectsRequest['pool_id'];
                    body = createDesktopPoolAuthorizedObjectsRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling createDesktopPoolAuthorizedObjects.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当桌面池内无桌面时可删除桌面池，桌面池删除后无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDesktopPool(deleteDesktopPoolRequest?: DeleteDesktopPoolRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/desktop-pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolId;

            if (deleteDesktopPoolRequest !== null && deleteDesktopPoolRequest !== undefined) {
                if (deleteDesktopPoolRequest instanceof DeleteDesktopPoolRequest) {
                    poolId = deleteDesktopPoolRequest.poolId;
                } else {
                    poolId = deleteDesktopPoolRequest['pool_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling deleteDesktopPool.');
            }

            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 桌面池批量删除磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDesktopPoolVolumes(deleteDesktopPoolVolumesRequest?: DeleteDesktopPoolVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/volumes/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (deleteDesktopPoolVolumesRequest !== null && deleteDesktopPoolVolumesRequest !== undefined) {
                if (deleteDesktopPoolVolumesRequest instanceof DeleteDesktopPoolVolumesRequest) {
                    poolId = deleteDesktopPoolVolumesRequest.poolId;
                    body = deleteDesktopPoolVolumesRequest.body
                } else {
                    poolId = deleteDesktopPoolVolumesRequest['pool_id'];
                    body = deleteDesktopPoolVolumesRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling deleteDesktopPoolVolumes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作桌面池，用于桌面池里面的桌面批量开机、关机、重启和休眠。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeDesktopPoolAction(executeDesktopPoolActionRequest?: ExecuteDesktopPoolActionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (executeDesktopPoolActionRequest !== null && executeDesktopPoolActionRequest !== undefined) {
                if (executeDesktopPoolActionRequest instanceof ExecuteDesktopPoolActionRequest) {
                    poolId = executeDesktopPoolActionRequest.poolId;
                    body = executeDesktopPoolActionRequest.body
                } else {
                    poolId = executeDesktopPoolActionRequest['pool_id'];
                    body = executeDesktopPoolActionRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling executeDesktopPoolAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 桌面池批量执行脚本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeDesktopPoolScript(executeDesktopPoolScriptRequest?: ExecuteDesktopPoolScriptRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/script-executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (executeDesktopPoolScriptRequest !== null && executeDesktopPoolScriptRequest !== undefined) {
                if (executeDesktopPoolScriptRequest instanceof ExecuteDesktopPoolScriptRequest) {
                    poolId = executeDesktopPoolScriptRequest.poolId;
                    body = executeDesktopPoolScriptRequest.body
                } else {
                    poolId = executeDesktopPoolScriptRequest['pool_id'];
                    body = executeDesktopPoolScriptRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling executeDesktopPoolScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容桌面池。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandDesktopPool(expandDesktopPoolRequest?: ExpandDesktopPoolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (expandDesktopPoolRequest !== null && expandDesktopPoolRequest !== undefined) {
                if (expandDesktopPoolRequest instanceof ExpandDesktopPoolRequest) {
                    poolId = expandDesktopPoolRequest.poolId;
                    body = expandDesktopPoolRequest.body
                } else {
                    poolId = expandDesktopPoolRequest['pool_id'];
                    body = expandDesktopPoolRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling expandDesktopPool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 桌面池批量扩容磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandDesktopPoolVolumes(expandDesktopPoolVolumesRequest?: ExpandDesktopPoolVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/volumes/batch-expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (expandDesktopPoolVolumesRequest !== null && expandDesktopPoolVolumesRequest !== undefined) {
                if (expandDesktopPoolVolumesRequest instanceof ExpandDesktopPoolVolumesRequest) {
                    poolId = expandDesktopPoolVolumesRequest.poolId;
                    body = expandDesktopPoolVolumesRequest.body
                } else {
                    poolId = expandDesktopPoolVolumesRequest['pool_id'];
                    body = expandDesktopPoolVolumesRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling expandDesktopPoolVolumes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定桌面池授权的用户、用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopPoolAuthorizedObjects(listDesktopPoolAuthorizedObjectsRequest?: ListDesktopPoolAuthorizedObjectsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolId;
            
            let offset;
            
            let limit;

            if (listDesktopPoolAuthorizedObjectsRequest !== null && listDesktopPoolAuthorizedObjectsRequest !== undefined) {
                if (listDesktopPoolAuthorizedObjectsRequest instanceof ListDesktopPoolAuthorizedObjectsRequest) {
                    poolId = listDesktopPoolAuthorizedObjectsRequest.poolId;
                    offset = listDesktopPoolAuthorizedObjectsRequest.offset;
                    limit = listDesktopPoolAuthorizedObjectsRequest.limit;
                } else {
                    poolId = listDesktopPoolAuthorizedObjectsRequest['pool_id'];
                    offset = listDesktopPoolAuthorizedObjectsRequest['offset'];
                    limit = listDesktopPoolAuthorizedObjectsRequest['limit'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling listDesktopPoolAuthorizedObjects.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询桌面池列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopPools(listDesktopPoolsRequest?: ListDesktopPoolsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktop-pools",
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
            
            let offset;
            
            let limit;
            
            let inMaintenanceMode;

            if (listDesktopPoolsRequest !== null && listDesktopPoolsRequest !== undefined) {
                if (listDesktopPoolsRequest instanceof ListDesktopPoolsRequest) {
                    name = listDesktopPoolsRequest.name;
                    type = listDesktopPoolsRequest.type;
                    enterpriseProjectId = listDesktopPoolsRequest.enterpriseProjectId;
                    offset = listDesktopPoolsRequest.offset;
                    limit = listDesktopPoolsRequest.limit;
                    inMaintenanceMode = listDesktopPoolsRequest.inMaintenanceMode;
                } else {
                    name = listDesktopPoolsRequest['name'];
                    type = listDesktopPoolsRequest['type'];
                    enterpriseProjectId = listDesktopPoolsRequest['enterprise_project_id'];
                    offset = listDesktopPoolsRequest['offset'];
                    limit = listDesktopPoolsRequest['limit'];
                    inMaintenanceMode = listDesktopPoolsRequest['in_maintenance_mode'];
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
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (inMaintenanceMode !== null && inMaintenanceMode !== undefined) {
                localVarQueryParameter['in_maintenance_mode'] = inMaintenanceMode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询桌面池下的桌面信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPoolDesktopsDetail(listPoolDesktopsDetailRequest?: ListPoolDesktopsDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolId;
            
            let inconsistentType;
            
            let offset;
            
            let limit;

            if (listPoolDesktopsDetailRequest !== null && listPoolDesktopsDetailRequest !== undefined) {
                if (listPoolDesktopsDetailRequest instanceof ListPoolDesktopsDetailRequest) {
                    poolId = listPoolDesktopsDetailRequest.poolId;
                    inconsistentType = listPoolDesktopsDetailRequest.inconsistentType;
                    offset = listPoolDesktopsDetailRequest.offset;
                    limit = listPoolDesktopsDetailRequest.limit;
                } else {
                    poolId = listPoolDesktopsDetailRequest['pool_id'];
                    inconsistentType = listPoolDesktopsDetailRequest['inconsistent_type'];
                    offset = listPoolDesktopsDetailRequest['offset'];
                    limit = listPoolDesktopsDetailRequest['limit'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling listPoolDesktopsDetail.');
            }
            if (inconsistentType !== null && inconsistentType !== undefined) {
                localVarQueryParameter['inconsistent_type'] = inconsistentType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 桌面池重建系统盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebuildDesktopPool(rebuildDesktopPoolRequest?: RebuildDesktopPoolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/rebuild",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (rebuildDesktopPoolRequest !== null && rebuildDesktopPoolRequest !== undefined) {
                if (rebuildDesktopPoolRequest instanceof RebuildDesktopPoolRequest) {
                    poolId = rebuildDesktopPoolRequest.poolId;
                    body = rebuildDesktopPoolRequest.body
                } else {
                    poolId = rebuildDesktopPoolRequest['pool_id'];
                    body = rebuildDesktopPoolRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling rebuildDesktopPool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 桌面池变更规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeDesktopPool(resizeDesktopPoolRequest?: ResizeDesktopPoolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (resizeDesktopPoolRequest !== null && resizeDesktopPoolRequest !== undefined) {
                if (resizeDesktopPoolRequest instanceof ResizeDesktopPoolRequest) {
                    poolId = resizeDesktopPoolRequest.poolId;
                    body = resizeDesktopPoolRequest.body
                } else {
                    poolId = resizeDesktopPoolRequest['pool_id'];
                    body = resizeDesktopPoolRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling resizeDesktopPool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于管理员向桌面发送消息通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendDesktopPoolNotifications(sendDesktopPoolNotificationsRequest?: SendDesktopPoolNotificationsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pools/{pool_id}/notifications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (sendDesktopPoolNotificationsRequest !== null && sendDesktopPoolNotificationsRequest !== undefined) {
                if (sendDesktopPoolNotificationsRequest instanceof SendDesktopPoolNotificationsRequest) {
                    poolId = sendDesktopPoolNotificationsRequest.poolId;
                    body = sendDesktopPoolNotificationsRequest.body
                } else {
                    poolId = sendDesktopPoolNotificationsRequest['pool_id'];
                    body = sendDesktopPoolNotificationsRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling sendDesktopPoolNotifications.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定桌面池Id查询详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDesktopPoolDetail(showDesktopPoolDetailRequest?: ShowDesktopPoolDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktop-pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolId;

            if (showDesktopPoolDetailRequest !== null && showDesktopPoolDetailRequest !== undefined) {
                if (showDesktopPoolDetailRequest instanceof ShowDesktopPoolDetailRequest) {
                    poolId = showDesktopPoolDetailRequest.poolId;
                } else {
                    poolId = showDesktopPoolDetailRequest['pool_id'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling showDesktopPoolDetail.');
            }

            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 桌面池的脚本执行任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDesktopPoolsScriptExecTasks(showDesktopPoolsScriptExecTasksRequest?: ShowDesktopPoolsScriptExecTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktop-pools/script-execution-tasks/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let desktopPoolId;
            
            let scriptId;
            
            let scriptName;
            
            let status;
            
            let taskType;
            
            let offset;
            
            let limit;
            
            let executeTimeStart;
            
            let executeTimeEnd;
            
            let taskId;

            if (showDesktopPoolsScriptExecTasksRequest !== null && showDesktopPoolsScriptExecTasksRequest !== undefined) {
                if (showDesktopPoolsScriptExecTasksRequest instanceof ShowDesktopPoolsScriptExecTasksRequest) {
                    desktopPoolId = showDesktopPoolsScriptExecTasksRequest.desktopPoolId;
                    scriptId = showDesktopPoolsScriptExecTasksRequest.scriptId;
                    scriptName = showDesktopPoolsScriptExecTasksRequest.scriptName;
                    status = showDesktopPoolsScriptExecTasksRequest.status;
                    taskType = showDesktopPoolsScriptExecTasksRequest.taskType;
                    offset = showDesktopPoolsScriptExecTasksRequest.offset;
                    limit = showDesktopPoolsScriptExecTasksRequest.limit;
                    executeTimeStart = showDesktopPoolsScriptExecTasksRequest.executeTimeStart;
                    executeTimeEnd = showDesktopPoolsScriptExecTasksRequest.executeTimeEnd;
                    taskId = showDesktopPoolsScriptExecTasksRequest.taskId;
                } else {
                    desktopPoolId = showDesktopPoolsScriptExecTasksRequest['desktop_pool_id'];
                    scriptId = showDesktopPoolsScriptExecTasksRequest['script_id'];
                    scriptName = showDesktopPoolsScriptExecTasksRequest['script_name'];
                    status = showDesktopPoolsScriptExecTasksRequest['status'];
                    taskType = showDesktopPoolsScriptExecTasksRequest['task_type'];
                    offset = showDesktopPoolsScriptExecTasksRequest['offset'];
                    limit = showDesktopPoolsScriptExecTasksRequest['limit'];
                    executeTimeStart = showDesktopPoolsScriptExecTasksRequest['execute_time_start'];
                    executeTimeEnd = showDesktopPoolsScriptExecTasksRequest['execute_time_end'];
                    taskId = showDesktopPoolsScriptExecTasksRequest['task_id'];
                }
            }

        
            if (desktopPoolId !== null && desktopPoolId !== undefined) {
                localVarQueryParameter['desktop_pool_id'] = desktopPoolId;
            }
            if (scriptId !== null && scriptId !== undefined) {
                localVarQueryParameter['script_id'] = scriptId;
            }
            if (scriptName !== null && scriptName !== undefined) {
                localVarQueryParameter['script_name'] = scriptName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (executeTimeStart !== null && executeTimeStart !== undefined) {
                localVarQueryParameter['execute_time_start'] = executeTimeStart;
            }
            if (executeTimeEnd !== null && executeTimeEnd !== undefined) {
                localVarQueryParameter['execute_time_end'] = executeTimeEnd;
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改桌面池属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDesktopPool(updateDesktopPoolRequest?: UpdateDesktopPoolRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/desktop-pools/{pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolId;

            if (updateDesktopPoolRequest !== null && updateDesktopPoolRequest !== undefined) {
                if (updateDesktopPoolRequest instanceof UpdateDesktopPoolRequest) {
                    poolId = updateDesktopPoolRequest.poolId;
                    body = updateDesktopPoolRequest.body
                } else {
                    poolId = updateDesktopPoolRequest['pool_id'];
                    body = updateDesktopPoolRequest['body'];
                }
            }

        
            if (poolId === null || poolId === undefined) {
            throw new RequiredError('poolId','Required parameter poolId was null or undefined when calling updateDesktopPool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_id': poolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同时对多个桌面批量添加标签，如果创建的标签已经存在（key相同）则覆，最大支持100个桌面，每个桌面最大20个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddDesktopsTags(batchAddDesktopsTagsRequest?: BatchAddDesktopsTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/batch-tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchAddDesktopsTagsRequest !== null && batchAddDesktopsTagsRequest !== undefined) {
                if (batchAddDesktopsTagsRequest instanceof BatchAddDesktopsTagsRequest) {
                    body = batchAddDesktopsTagsRequest.body
                } else {
                    body = batchAddDesktopsTagsRequest['body'];
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
         * 为指定桌面批量添加或删除标签。创建时，如果创建的标签已经存在（key相同），则覆盖。删除时，如果删除的标签不存在，默认处理成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchChangeTags(batchChangeTagsRequest?: BatchChangeTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/{desktop_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let desktopId;

            if (batchChangeTagsRequest !== null && batchChangeTagsRequest !== undefined) {
                if (batchChangeTagsRequest instanceof BatchChangeTagsRequest) {
                    desktopId = batchChangeTagsRequest.desktopId;
                    body = batchChangeTagsRequest.body
                } else {
                    desktopId = batchChangeTagsRequest['desktop_id'];
                    body = batchChangeTagsRequest['body'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling batchChangeTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同时对多个桌面批量添加标签，删除时，如果删除的标签不存在默认处理成功，最大支持100个桌面，每个桌面最大20个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDesktopsTags(batchDeleteDesktopsTagsRequest?: BatchDeleteDesktopsTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/desktops/batch-tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteDesktopsTagsRequest !== null && batchDeleteDesktopsTagsRequest !== undefined) {
                if (batchDeleteDesktopsTagsRequest instanceof BatchDeleteDesktopsTagsRequest) {
                    body = batchDeleteDesktopsTagsRequest.body
                } else {
                    body = batchDeleteDesktopsTagsRequest['body'];
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
         * 该接口用于为桌面创建标签，一个桌面上最多有10个标签。创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTag(createTagRequest?: CreateTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/{desktop_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let desktopId;

            if (createTagRequest !== null && createTagRequest !== undefined) {
                if (createTagRequest instanceof CreateTagRequest) {
                    desktopId = createTagRequest.desktopId;
                    body = createTagRequest.body
                } else {
                    desktopId = createTagRequest['desktop_id'];
                    body = createTagRequest['body'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling createTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除桌面标签。删除时，如果删除的标签不存在，默认处理成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTag(deleteTagRequest?: DeleteTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/desktops/{desktop_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;
            
            let key;

            if (deleteTagRequest !== null && deleteTagRequest !== undefined) {
                if (deleteTagRequest instanceof DeleteTagRequest) {
                    desktopId = deleteTagRequest.desktopId;
                    key = deleteTagRequest.key;
                } else {
                    desktopId = deleteTagRequest['desktop_id'];
                    key = deleteTagRequest['key'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling deleteTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteTag.');
            }

            options.pathParams = { 'desktop_id': desktopId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤桌面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopByTags(listDesktopByTagsRequest?: ListDesktopByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listDesktopByTagsRequest !== null && listDesktopByTagsRequest !== undefined) {
                if (listDesktopByTagsRequest instanceof ListDesktopByTagsRequest) {
                    body = listDesktopByTagsRequest.body
                } else {
                    body = listDesktopByTagsRequest['body'];
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
         * 查询租户的所有标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let key;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    offset = listProjectTagsRequest.offset;
                    limit = listProjectTagsRequest.limit;
                    key = listProjectTagsRequest.key;
                } else {
                    offset = listProjectTagsRequest['offset'];
                    limit = listProjectTagsRequest['limit'];
                    key = listProjectTagsRequest['key'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定桌面的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTagByDesktopId(showTagByDesktopIdRequest?: ShowTagByDesktopIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/{desktop_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let desktopId;

            if (showTagByDesktopIdRequest !== null && showTagByDesktopIdRequest !== undefined) {
                if (showTagByDesktopIdRequest instanceof ShowTagByDesktopIdRequest) {
                    desktopId = showTagByDesktopIdRequest.desktopId;
                } else {
                    desktopId = showTagByDesktopIdRequest['desktop_id'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling showTagByDesktopId.');
            }

            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于批量删除用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteUserGroups(batchDeleteUserGroupsRequest?: BatchDeleteUserGroupsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteUserGroupsRequest !== null && batchDeleteUserGroupsRequest !== undefined) {
                if (batchDeleteUserGroupsRequest instanceof BatchDeleteUserGroupsRequest) {
                    body = batchDeleteUserGroupsRequest.body
                } else {
                    body = batchDeleteUserGroupsRequest['body'];
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
         * 该接口用于创建用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUserGroup(createUserGroupRequest?: CreateUserGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createUserGroupRequest !== null && createUserGroupRequest !== undefined) {
                if (createUserGroupRequest instanceof CreateUserGroupRequest) {
                    body = createUserGroupRequest.body
                } else {
                    body = createUserGroupRequest['body'];
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
         * 删除用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUserGroup(deleteUserGroupRequest?: DeleteUserGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (deleteUserGroupRequest !== null && deleteUserGroupRequest !== undefined) {
                if (deleteUserGroupRequest instanceof DeleteUserGroupRequest) {
                    groupId = deleteUserGroupRequest.groupId;
                } else {
                    groupId = deleteUserGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteUserGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户组列表，支持分页。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserGroups(listUserGroupsRequest?: ListUserGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let keyword;

            if (listUserGroupsRequest !== null && listUserGroupsRequest !== undefined) {
                if (listUserGroupsRequest instanceof ListUserGroupsRequest) {
                    limit = listUserGroupsRequest.limit;
                    offset = listUserGroupsRequest.offset;
                    keyword = listUserGroupsRequest.keyword;
                } else {
                    limit = listUserGroupsRequest['limit'];
                    offset = listUserGroupsRequest['offset'];
                    keyword = listUserGroupsRequest['keyword'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询用户组中的用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsersOfGroup(listUsersOfGroupRequest?: ListUsersOfGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/groups/{group_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let userName;
            
            let description;
            
            let activeType;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listUsersOfGroupRequest !== null && listUsersOfGroupRequest !== undefined) {
                if (listUsersOfGroupRequest instanceof ListUsersOfGroupRequest) {
                    groupId = listUsersOfGroupRequest.groupId;
                    userName = listUsersOfGroupRequest.userName;
                    description = listUsersOfGroupRequest.description;
                    activeType = listUsersOfGroupRequest.activeType;
                    enterpriseProjectId = listUsersOfGroupRequest.enterpriseProjectId;
                    limit = listUsersOfGroupRequest.limit;
                    offset = listUsersOfGroupRequest.offset;
                } else {
                    groupId = listUsersOfGroupRequest['group_id'];
                    userName = listUsersOfGroupRequest['user_name'];
                    description = listUsersOfGroupRequest['description'];
                    activeType = listUsersOfGroupRequest['active_type'];
                    enterpriseProjectId = listUsersOfGroupRequest['enterprise_project_id'];
                    limit = listUsersOfGroupRequest['limit'];
                    offset = listUsersOfGroupRequest['offset'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listUsersOfGroup.');
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (activeType !== null && activeType !== undefined) {
                localVarQueryParameter['active_type'] = activeType;
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
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作用户组，如添加用户、删除用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runActionsOnGroup(runActionsOnGroupRequest?: RunActionsOnGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups/{group_id}/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (runActionsOnGroupRequest !== null && runActionsOnGroupRequest !== undefined) {
                if (runActionsOnGroupRequest instanceof RunActionsOnGroupRequest) {
                    groupId = runActionsOnGroupRequest.groupId;
                    body = runActionsOnGroupRequest.body
                } else {
                    groupId = runActionsOnGroupRequest['group_id'];
                    body = runActionsOnGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling runActionsOnGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改用户组信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUserGroup(updateUserGroupRequest?: UpdateUserGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (updateUserGroupRequest !== null && updateUserGroupRequest !== undefined) {
                if (updateUserGroupRequest instanceof UpdateUserGroupRequest) {
                    groupId = updateUserGroupRequest.groupId;
                    body = updateUserGroupRequest.body
                } else {
                    groupId = updateUserGroupRequest['group_id'];
                    body = updateUserGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateUserGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询云桌面支持的产品镜像列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImages(listImagesRequest?: ListImagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let osType;
            
            let imageType;
            
            let platform;
            
            let architecture;
            
            let packageType;
            
            let imageId;
            
            let limit;
            
            let offset;
            
            let sortField;
            
            let sortType;

            if (listImagesRequest !== null && listImagesRequest !== undefined) {
                if (listImagesRequest instanceof ListImagesRequest) {
                    osType = listImagesRequest.osType;
                    imageType = listImagesRequest.imageType;
                    platform = listImagesRequest.platform;
                    architecture = listImagesRequest.architecture;
                    packageType = listImagesRequest.packageType;
                    imageId = listImagesRequest.imageId;
                    limit = listImagesRequest.limit;
                    offset = listImagesRequest.offset;
                    sortField = listImagesRequest.sortField;
                    sortType = listImagesRequest.sortType;
                } else {
                    osType = listImagesRequest['os_type'];
                    imageType = listImagesRequest['image_type'];
                    platform = listImagesRequest['platform'];
                    architecture = listImagesRequest['architecture'];
                    packageType = listImagesRequest['package_type'];
                    imageId = listImagesRequest['image_id'];
                    limit = listImagesRequest['limit'];
                    offset = listImagesRequest['offset'];
                    sortField = listImagesRequest['sort_field'];
                    sortType = listImagesRequest['sort_type'];
                }
            }

        
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (imageType !== null && imageType !== undefined) {
                localVarQueryParameter['image_type'] = imageType;
            }
            if (platform !== null && platform !== undefined) {
                localVarQueryParameter['platform'] = platform;
            }
            if (architecture !== null && architecture !== undefined) {
                localVarQueryParameter['architecture'] = architecture;
            }
            if (packageType !== null && packageType !== undefined) {
                localVarQueryParameter['package_type'] = packageType;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取云市场镜像列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMarketImages(listMarketImagesRequest?: ListMarketImagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/market-images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageIds;

            if (listMarketImagesRequest !== null && listMarketImagesRequest !== undefined) {
                if (listMarketImagesRequest instanceof ListMarketImagesRequest) {
                    imageIds = listMarketImagesRequest.imageIds;
                } else {
                    imageIds = listMarketImagesRequest['image_ids'];
                }
            }

        
            if (imageIds === null || imageIds === undefined) {
                throw new RequiredError('imageIds','Required parameter imageIds was null or undefined when calling listMarketImages.');
            }
            if (imageIds !== null && imageIds !== undefined) {
                localVarQueryParameter['image_ids'] = imageIds;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 包周期桌面增配变更批量询价。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        estimateAddResources(estimateAddResourcesRequest?: EstimateAddResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/periodic/inquiry/add-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (estimateAddResourcesRequest !== null && estimateAddResourcesRequest !== undefined) {
                if (estimateAddResourcesRequest instanceof EstimateAddResourcesRequest) {
                    body = estimateAddResourcesRequest.body
                } else {
                    body = estimateAddResourcesRequest['body'];
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
         * 批量包周期桌面切换镜像(由不收费镜像变更至收费镜像)询价。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        estimateChangeImages(estimateChangeImagesRequest?: EstimateChangeImagesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/periodic/inquiry/change-image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (estimateChangeImagesRequest !== null && estimateChangeImagesRequest !== undefined) {
                if (estimateChangeImagesRequest instanceof EstimateChangeImagesRequest) {
                    body = estimateChangeImagesRequest.body
                } else {
                    body = estimateChangeImagesRequest['body'];
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
         * 包周期桌面池添加单个磁盘批量询价。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        estimateDesktopPoolAddVolume(estimateDesktopPoolAddVolumeRequest?: EstimateDesktopPoolAddVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pool/periodic/inquiry/add-volume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (estimateDesktopPoolAddVolumeRequest !== null && estimateDesktopPoolAddVolumeRequest !== undefined) {
                if (estimateDesktopPoolAddVolumeRequest instanceof EstimateDesktopPoolAddVolumeRequest) {
                    body = estimateDesktopPoolAddVolumeRequest.body
                } else {
                    body = estimateDesktopPoolAddVolumeRequest['body'];
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
         * 包周期桌面池切换镜像(由不收费镜像变更至收费镜像)批量询价。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        estimateDesktopPoolChangeImage(estimateDesktopPoolChangeImageRequest?: EstimateDesktopPoolChangeImageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pool/periodic/inquiry/change-image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (estimateDesktopPoolChangeImageRequest !== null && estimateDesktopPoolChangeImageRequest !== undefined) {
                if (estimateDesktopPoolChangeImageRequest instanceof EstimateDesktopPoolChangeImageRequest) {
                    body = estimateDesktopPoolChangeImageRequest.body
                } else {
                    body = estimateDesktopPoolChangeImageRequest['body'];
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
         * 包周期桌面池扩容磁盘批量询价。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        estimateDesktopPoolExtendVolume(estimateDesktopPoolExtendVolumeRequest?: EstimateDesktopPoolExtendVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pool/periodic/inquiry/extend-volume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (estimateDesktopPoolExtendVolumeRequest !== null && estimateDesktopPoolExtendVolumeRequest !== undefined) {
                if (estimateDesktopPoolExtendVolumeRequest instanceof EstimateDesktopPoolExtendVolumeRequest) {
                    body = estimateDesktopPoolExtendVolumeRequest.body
                } else {
                    body = estimateDesktopPoolExtendVolumeRequest['body'];
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
         * 包周期桌面池变更规格批量询价。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        estimateDesktopPoolResize(estimateDesktopPoolResizeRequest?: EstimateDesktopPoolResizeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pool/periodic/inquiry/resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (estimateDesktopPoolResizeRequest !== null && estimateDesktopPoolResizeRequest !== undefined) {
                if (estimateDesktopPoolResizeRequest instanceof EstimateDesktopPoolResizeRequest) {
                    body = estimateDesktopPoolResizeRequest.body
                } else {
                    body = estimateDesktopPoolResizeRequest['body'];
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
         * 该接口用来对失败的任务进行重试，当前仅支持开户和销户的任务重试。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runActionsOnWorkspaceJob(runActionsOnWorkspaceJobRequest?: RunActionsOnWorkspaceJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspace-jobs/{job_id}/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (runActionsOnWorkspaceJobRequest !== null && runActionsOnWorkspaceJobRequest !== undefined) {
                if (runActionsOnWorkspaceJobRequest instanceof RunActionsOnWorkspaceJobRequest) {
                    jobId = runActionsOnWorkspaceJobRequest.jobId;
                    body = runActionsOnWorkspaceJobRequest.body
                } else {
                    jobId = runActionsOnWorkspaceJobRequest['job_id'];
                    body = runActionsOnWorkspaceJobRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling runActionsOnWorkspaceJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除子任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSubJobs(batchDeleteSubJobsRequest?: BatchDeleteSubJobsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspace-sub-jobs/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteSubJobsRequest !== null && batchDeleteSubJobsRequest !== undefined) {
                if (batchDeleteSubJobsRequest instanceof BatchDeleteSubJobsRequest) {
                    body = batchDeleteSubJobsRequest.body
                } else {
                    body = batchDeleteSubJobsRequest['body'];
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
         * 该接口用于查询异步任务执行情况，比如查询创建桌面的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listItaSubJobs(listItaSubJobsRequest?: ListItaSubJobsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspace-sub-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let status;
            
            let jobId;
            
            let jobType;
            
            let desktopPoolId;
            
            let limit;
            
            let offset;

            if (listItaSubJobsRequest !== null && listItaSubJobsRequest !== undefined) {
                if (listItaSubJobsRequest instanceof ListItaSubJobsRequest) {
                    status = listItaSubJobsRequest.status;
                    jobId = listItaSubJobsRequest.jobId;
                    jobType = listItaSubJobsRequest.jobType;
                    desktopPoolId = listItaSubJobsRequest.desktopPoolId;
                    limit = listItaSubJobsRequest.limit;
                    offset = listItaSubJobsRequest.offset;
                } else {
                    status = listItaSubJobsRequest['status'];
                    jobId = listItaSubJobsRequest['job_id'];
                    jobType = listItaSubJobsRequest['job_type'];
                    desktopPoolId = listItaSubJobsRequest['desktop_pool_id'];
                    limit = listItaSubJobsRequest['limit'];
                    offset = listItaSubJobsRequest['offset'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
            }
            if (desktopPoolId !== null && desktopPoolId !== undefined) {
                localVarQueryParameter['desktop_pool_id'] = desktopPoolId;
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
         * 该接口用于查询异步任务的执行情况，比如查询创建桌面任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspace-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobRequest !== null && showJobRequest !== undefined) {
                if (showJobRequest instanceof ShowJobRequest) {
                    jobId = showJobRequest.jobId;
                } else {
                    jobId = showJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的NAT映射配置项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNatMappingConfigs(listNatMappingConfigsRequest?: ListNatMappingConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/nat-mapping-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let siteId;

            if (listNatMappingConfigsRequest !== null && listNatMappingConfigsRequest !== undefined) {
                if (listNatMappingConfigsRequest instanceof ListNatMappingConfigsRequest) {
                    siteId = listNatMappingConfigsRequest.siteId;
                } else {
                    siteId = listNatMappingConfigsRequest['site_id'];
                }
            }

        
            if (siteId !== null && siteId !== undefined) {
                localVarQueryParameter['site_id'] = siteId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改租户的NAT映射配置项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNatMappingConfigs(updateNatMappingConfigsRequest?: UpdateNatMappingConfigsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/nat-mapping-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateNatMappingConfigsRequest !== null && updateNatMappingConfigsRequest !== undefined) {
                if (updateNatMappingConfigsRequest instanceof UpdateNatMappingConfigsRequest) {
                    body = updateNatMappingConfigsRequest.body
                } else {
                    body = updateNatMappingConfigsRequest['body'];
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
         * 开通桌面上网功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyDesktopsInternet(applyDesktopsInternetRequest?: ApplyDesktopsInternetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/eips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (applyDesktopsInternetRequest !== null && applyDesktopsInternetRequest !== undefined) {
                if (applyDesktopsInternetRequest instanceof ApplyDesktopsInternetRequest) {
                    body = applyDesktopsInternetRequest.body
                } else {
                    body = applyDesktopsInternetRequest['body'];
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
         * 开通上网功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyInternet(applyInternetRequest?: ApplyInternetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/internet",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (applyInternetRequest !== null && applyInternetRequest !== undefined) {
                if (applyInternetRequest instanceof ApplyInternetRequest) {
                    body = applyInternetRequest.body
                } else {
                    body = applyInternetRequest['body'];
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
         * 创建按需云办公带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applySubnetBandwidth(applySubnetBandwidthRequest?: ApplySubnetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (applySubnetBandwidthRequest !== null && applySubnetBandwidthRequest !== undefined) {
                if (applySubnetBandwidthRequest instanceof ApplySubnetBandwidthRequest) {
                    body = applySubnetBandwidthRequest.body
                } else {
                    body = applySubnetBandwidthRequest['body'];
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
         * 桌面绑定EIP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateDesktopsEip(associateDesktopsEipRequest?: AssociateDesktopsEipRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/eips/binding",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (associateDesktopsEipRequest !== null && associateDesktopsEipRequest !== undefined) {
                if (associateDesktopsEipRequest instanceof AssociateDesktopsEipRequest) {
                    body = associateDesktopsEipRequest.body
                } else {
                    body = associateDesktopsEipRequest['body'];
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
         * 批量桌面解绑EIP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisassociateDesktopsEip(batchDisassociateDesktopsEipRequest?: BatchDisassociateDesktopsEipRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/eips/unbinding",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDisassociateDesktopsEipRequest !== null && batchDisassociateDesktopsEipRequest !== undefined) {
                if (batchDisassociateDesktopsEipRequest instanceof BatchDisassociateDesktopsEipRequest) {
                    body = batchDisassociateDesktopsEipRequest.body
                } else {
                    body = batchDisassociateDesktopsEipRequest['body'];
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
         * 删除云办公带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubnetBandwidth(deleteSubnetBandwidthRequest?: DeleteSubnetBandwidthRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/bandwidths/{bandwidth_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let bandwidthId;

            if (deleteSubnetBandwidthRequest !== null && deleteSubnetBandwidthRequest !== undefined) {
                if (deleteSubnetBandwidthRequest instanceof DeleteSubnetBandwidthRequest) {
                    bandwidthId = deleteSubnetBandwidthRequest.bandwidthId;
                } else {
                    bandwidthId = deleteSubnetBandwidthRequest['bandwidth_id'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling deleteSubnetBandwidth.');
            }

            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已绑定桌面和未绑定的EIP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopsEips(listDesktopsEipsRequest?: ListDesktopsEipsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/eips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let desktopId;
            
            let desktopName;
            
            let userName;
            
            let address;
            
            let offset;
            
            let limit;
            
            let state;

            if (listDesktopsEipsRequest !== null && listDesktopsEipsRequest !== undefined) {
                if (listDesktopsEipsRequest instanceof ListDesktopsEipsRequest) {
                    enterpriseProjectId = listDesktopsEipsRequest.enterpriseProjectId;
                    desktopId = listDesktopsEipsRequest.desktopId;
                    desktopName = listDesktopsEipsRequest.desktopName;
                    userName = listDesktopsEipsRequest.userName;
                    address = listDesktopsEipsRequest.address;
                    offset = listDesktopsEipsRequest.offset;
                    limit = listDesktopsEipsRequest.limit;
                    state = listDesktopsEipsRequest.state;
                } else {
                    enterpriseProjectId = listDesktopsEipsRequest['enterprise_project_id'];
                    desktopId = listDesktopsEipsRequest['desktop_id'];
                    desktopName = listDesktopsEipsRequest['desktop_name'];
                    userName = listDesktopsEipsRequest['user_name'];
                    address = listDesktopsEipsRequest['address'];
                    offset = listDesktopsEipsRequest['offset'];
                    limit = listDesktopsEipsRequest['limit'];
                    state = listDesktopsEipsRequest['state'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (desktopId !== null && desktopId !== undefined) {
                localVarQueryParameter['desktop_id'] = desktopId;
            }
            if (desktopName !== null && desktopName !== undefined) {
                localVarQueryParameter['desktop_name'] = desktopName;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (address !== null && address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询上网功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInternet(listInternetRequest?: ListInternetRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/internet",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let natName;
            
            let eip;

            if (listInternetRequest !== null && listInternetRequest !== undefined) {
                if (listInternetRequest instanceof ListInternetRequest) {
                    enterpriseProjectId = listInternetRequest.enterpriseProjectId;
                    natName = listInternetRequest.natName;
                    eip = listInternetRequest.eip;
                } else {
                    enterpriseProjectId = listInternetRequest['enterprise_project_id'];
                    natName = listInternetRequest['nat_name'];
                    eip = listInternetRequest['eip'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (natName !== null && natName !== undefined) {
                localVarQueryParameter['nat_name'] = natName;
            }
            if (eip !== null && eip !== undefined) {
                localVarQueryParameter['eip'] = eip;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询NAT网关列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNatGateways(listNatGatewaysRequest?: ListNatGatewaysRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/nat-gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let enterpriseProjectId;
            
            let description;
            
            let createdAt;
            
            let name;
            
            let status;
            
            let spec;
            
            let routerId;
            
            let limit;

            if (listNatGatewaysRequest !== null && listNatGatewaysRequest !== undefined) {
                if (listNatGatewaysRequest instanceof ListNatGatewaysRequest) {
                    id = listNatGatewaysRequest.id;
                    enterpriseProjectId = listNatGatewaysRequest.enterpriseProjectId;
                    description = listNatGatewaysRequest.description;
                    createdAt = listNatGatewaysRequest.createdAt;
                    name = listNatGatewaysRequest.name;
                    status = listNatGatewaysRequest.status;
                    spec = listNatGatewaysRequest.spec;
                    routerId = listNatGatewaysRequest.routerId;
                    limit = listNatGatewaysRequest.limit;
                } else {
                    id = listNatGatewaysRequest['id'];
                    enterpriseProjectId = listNatGatewaysRequest['enterprise_project_id'];
                    description = listNatGatewaysRequest['description'];
                    createdAt = listNatGatewaysRequest['created_at'];
                    name = listNatGatewaysRequest['name'];
                    status = listNatGatewaysRequest['status'];
                    spec = listNatGatewaysRequest['spec'];
                    routerId = listNatGatewaysRequest['router_id'];
                    limit = listNatGatewaysRequest['limit'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (spec !== null && spec !== undefined) {
                localVarQueryParameter['spec'] = spec;
            }
            if (routerId !== null && routerId !== undefined) {
                localVarQueryParameter['router_id'] = routerId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询端口列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPorts(listPortsRequest?: ListPortsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/ports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let ipAddress;
            
            let subnetId;
            
            let isUsed;

            if (listPortsRequest !== null && listPortsRequest !== undefined) {
                if (listPortsRequest instanceof ListPortsRequest) {
                    marker = listPortsRequest.marker;
                    limit = listPortsRequest.limit;
                    ipAddress = listPortsRequest.ipAddress;
                    subnetId = listPortsRequest.subnetId;
                    isUsed = listPortsRequest.isUsed;
                } else {
                    marker = listPortsRequest['marker'];
                    limit = listPortsRequest['limit'];
                    ipAddress = listPortsRequest['ip_address'];
                    subnetId = listPortsRequest['subnet_id'];
                    isUsed = listPortsRequest['is_used'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (ipAddress !== null && ipAddress !== undefined) {
                localVarQueryParameter['ip_address'] = ipAddress;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (isUsed !== null && isUsed !== undefined) {
                localVarQueryParameter['is_used'] = isUsed;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云办公带宽列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubnetBandwidths(listSubnetBandwidthsRequest?: ListSubnetBandwidthsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/bandwidths",
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
            
            let vpcId;
            
            let subnetId;
            
            let bandwidthId;
            
            let bandwidthName;

            if (listSubnetBandwidthsRequest !== null && listSubnetBandwidthsRequest !== undefined) {
                if (listSubnetBandwidthsRequest instanceof ListSubnetBandwidthsRequest) {
                    enterpriseProjectId = listSubnetBandwidthsRequest.enterpriseProjectId;
                    offset = listSubnetBandwidthsRequest.offset;
                    limit = listSubnetBandwidthsRequest.limit;
                    vpcId = listSubnetBandwidthsRequest.vpcId;
                    subnetId = listSubnetBandwidthsRequest.subnetId;
                    bandwidthId = listSubnetBandwidthsRequest.bandwidthId;
                    bandwidthName = listSubnetBandwidthsRequest.bandwidthName;
                } else {
                    enterpriseProjectId = listSubnetBandwidthsRequest['enterprise_project_id'];
                    offset = listSubnetBandwidthsRequest['offset'];
                    limit = listSubnetBandwidthsRequest['limit'];
                    vpcId = listSubnetBandwidthsRequest['vpc_id'];
                    subnetId = listSubnetBandwidthsRequest['subnet_id'];
                    bandwidthId = listSubnetBandwidthsRequest['bandwidth_id'];
                    bandwidthName = listSubnetBandwidthsRequest['bandwidth_name'];
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
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (bandwidthId !== null && bandwidthId !== undefined) {
                localVarQueryParameter['bandwidth_id'] = bandwidthId;
            }
            if (bandwidthName !== null && bandwidthName !== undefined) {
                localVarQueryParameter['bandwidth_name'] = bandwidthName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云办公带宽的控制配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubnetBandwidthControlList(showSubnetBandwidthControlListRequest?: ShowSubnetBandwidthControlListRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/bandwidths/{bandwidth_id}/control-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let bandwidthId;
            
            let desktopId;
            
            let desktopName;
            
            let userName;
            
            let controlMode;
            
            let offset;
            
            let limit;

            if (showSubnetBandwidthControlListRequest !== null && showSubnetBandwidthControlListRequest !== undefined) {
                if (showSubnetBandwidthControlListRequest instanceof ShowSubnetBandwidthControlListRequest) {
                    bandwidthId = showSubnetBandwidthControlListRequest.bandwidthId;
                    desktopId = showSubnetBandwidthControlListRequest.desktopId;
                    desktopName = showSubnetBandwidthControlListRequest.desktopName;
                    userName = showSubnetBandwidthControlListRequest.userName;
                    controlMode = showSubnetBandwidthControlListRequest.controlMode;
                    offset = showSubnetBandwidthControlListRequest.offset;
                    limit = showSubnetBandwidthControlListRequest.limit;
                } else {
                    bandwidthId = showSubnetBandwidthControlListRequest['bandwidth_id'];
                    desktopId = showSubnetBandwidthControlListRequest['desktop_id'];
                    desktopName = showSubnetBandwidthControlListRequest['desktop_name'];
                    userName = showSubnetBandwidthControlListRequest['user_name'];
                    controlMode = showSubnetBandwidthControlListRequest['control_mode'];
                    offset = showSubnetBandwidthControlListRequest['offset'];
                    limit = showSubnetBandwidthControlListRequest['limit'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling showSubnetBandwidthControlList.');
            }
            if (desktopId !== null && desktopId !== undefined) {
                localVarQueryParameter['desktop_id'] = desktopId;
            }
            if (desktopName !== null && desktopName !== undefined) {
                localVarQueryParameter['desktop_name'] = desktopName;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (controlMode !== null && controlMode !== undefined) {
                localVarQueryParameter['control_mode'] = controlMode;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据子网id列表查询正在被桌面使用的子网id，并且返回subnetId列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUsingSubnets(showUsingSubnetsRequest?: ShowUsingSubnetsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/subnets/using-subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let subnetIds;

            if (showUsingSubnetsRequest !== null && showUsingSubnetsRequest !== undefined) {
                if (showUsingSubnetsRequest instanceof ShowUsingSubnetsRequest) {
                    subnetIds = showUsingSubnetsRequest.subnetIds;
                } else {
                    subnetIds = showUsingSubnetsRequest['subnet_ids'];
                }
            }

        
            if (subnetIds !== null && subnetIds !== undefined) {
                localVarQueryParameter['subnet_ids'] = subnetIds;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改云办公带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubnetBandwidth(updateSubnetBandwidthRequest?: UpdateSubnetBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/bandwidths/{bandwidth_id}/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let bandwidthId;

            if (updateSubnetBandwidthRequest !== null && updateSubnetBandwidthRequest !== undefined) {
                if (updateSubnetBandwidthRequest instanceof UpdateSubnetBandwidthRequest) {
                    bandwidthId = updateSubnetBandwidthRequest.bandwidthId;
                    body = updateSubnetBandwidthRequest.body
                } else {
                    bandwidthId = updateSubnetBandwidthRequest['bandwidth_id'];
                    body = updateSubnetBandwidthRequest['body'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling updateSubnetBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改云办公带宽的控制配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubnetBandwidthControlList(updateSubnetBandwidthControlListRequest?: UpdateSubnetBandwidthControlListRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/bandwidths/{bandwidth_id}/control-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let bandwidthId;

            if (updateSubnetBandwidthControlListRequest !== null && updateSubnetBandwidthControlListRequest !== undefined) {
                if (updateSubnetBandwidthControlListRequest instanceof UpdateSubnetBandwidthControlListRequest) {
                    bandwidthId = updateSubnetBandwidthControlListRequest.bandwidthId;
                    body = updateSubnetBandwidthControlListRequest.body
                } else {
                    bandwidthId = updateSubnetBandwidthControlListRequest['bandwidth_id'];
                    body = updateSubnetBandwidthControlListRequest['body'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling updateSubnetBandwidthControlList.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更规格、扩容磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createChangeOrder(createChangeOrderRequest?: CreateChangeOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/periodic/{desktop_id}/change/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let desktopId;

            if (createChangeOrderRequest !== null && createChangeOrderRequest !== undefined) {
                if (createChangeOrderRequest instanceof CreateChangeOrderRequest) {
                    desktopId = createChangeOrderRequest.desktopId;
                    body = createChangeOrderRequest.body
                } else {
                    desktopId = createChangeOrderRequest['desktop_id'];
                    body = createChangeOrderRequest['body'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling createChangeOrder.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 包周期桌面批量变更下单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDesktopBatchOrder(createDesktopBatchOrderRequest?: CreateDesktopBatchOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/periodic/change/batch-order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDesktopBatchOrderRequest !== null && createDesktopBatchOrderRequest !== undefined) {
                if (createDesktopBatchOrderRequest instanceof CreateDesktopBatchOrderRequest) {
                    body = createDesktopBatchOrderRequest.body
                } else {
                    body = createDesktopBatchOrderRequest['body'];
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
         * 创建桌面订单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDesktopOrder(createDesktopOrderRequest?: CreateDesktopOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/orders/subscribe",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDesktopOrderRequest !== null && createDesktopOrderRequest !== undefined) {
                if (createDesktopOrderRequest instanceof CreateDesktopOrderRequest) {
                    body = createDesktopOrderRequest.body
                } else {
                    body = createDesktopOrderRequest['body'];
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
         * 包周期桌面池批量变更下单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDesktopPoolChangeOrder(createDesktopPoolChangeOrderRequest?: CreateDesktopPoolChangeOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop-pool/periodic/change/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDesktopPoolChangeOrderRequest !== null && createDesktopPoolChangeOrderRequest !== undefined) {
                if (createDesktopPoolChangeOrderRequest instanceof CreateDesktopPoolChangeOrderRequest) {
                    body = createDesktopPoolChangeOrderRequest.body
                } else {
                    body = createDesktopPoolChangeOrderRequest['body'];
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
         * 包周期资源（桌面、磁盘）下订单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrder(createOrderRequest?: CreateOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/periodic/subscribe/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createOrderRequest !== null && createOrderRequest !== undefined) {
                if (createOrderRequest instanceof CreateOrderRequest) {
                    body = createOrderRequest.body
                } else {
                    body = createOrderRequest['body'];
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
         * 包周期云办公带宽变更下单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubnetBandwidthChangeOrder(createSubnetBandwidthChangeOrderRequest?: CreateSubnetBandwidthChangeOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/bandwidths/{bandwidth_id}/periodic/change/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let bandwidthId;

            if (createSubnetBandwidthChangeOrderRequest !== null && createSubnetBandwidthChangeOrderRequest !== undefined) {
                if (createSubnetBandwidthChangeOrderRequest instanceof CreateSubnetBandwidthChangeOrderRequest) {
                    bandwidthId = createSubnetBandwidthChangeOrderRequest.bandwidthId;
                    body = createSubnetBandwidthChangeOrderRequest.body
                } else {
                    bandwidthId = createSubnetBandwidthChangeOrderRequest['bandwidth_id'];
                    body = createSubnetBandwidthChangeOrderRequest['body'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling createSubnetBandwidthChangeOrder.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建OU。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addOu(addOuRequest?: AddOuRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ous",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addOuRequest !== null && addOuRequest !== undefined) {
                if (addOuRequest instanceof AddOuRequest) {
                    body = addOuRequest.body
                } else {
                    body = addOuRequest['body'];
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
         * 该接口用于删除OU信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOu(deleteOuRequest?: DeleteOuRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/ous/{ou_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ouId;

            if (deleteOuRequest !== null && deleteOuRequest !== undefined) {
                if (deleteOuRequest instanceof DeleteOuRequest) {
                    ouId = deleteOuRequest.ouId;
                } else {
                    ouId = deleteOuRequest['ou_id'];
                }
            }

        
            if (ouId === null || ouId === undefined) {
            throw new RequiredError('ouId','Required parameter ouId was null or undefined when calling deleteOu.');
            }

            options.pathParams = { 'ou_id': ouId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询OU下用户信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAdOuUsers(listAdOuUsersRequest?: ListAdOuUsersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/ou-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let ouDn;
            
            let userName;
            
            let hasExisted;
            
            let limit;
            
            let offset;

            if (listAdOuUsersRequest !== null && listAdOuUsersRequest !== undefined) {
                if (listAdOuUsersRequest instanceof ListAdOuUsersRequest) {
                    ouDn = listAdOuUsersRequest.ouDn;
                    userName = listAdOuUsersRequest.userName;
                    hasExisted = listAdOuUsersRequest.hasExisted;
                    limit = listAdOuUsersRequest.limit;
                    offset = listAdOuUsersRequest.offset;
                } else {
                    ouDn = listAdOuUsersRequest['ou_dn'];
                    userName = listAdOuUsersRequest['user_name'];
                    hasExisted = listAdOuUsersRequest['has_existed'];
                    limit = listAdOuUsersRequest['limit'];
                    offset = listAdOuUsersRequest['offset'];
                }
            }

        
            if (ouDn === null || ouDn === undefined) {
                throw new RequiredError('ouDn','Required parameter ouDn was null or undefined when calling listAdOuUsers.');
            }
            if (ouDn !== null && ouDn !== undefined) {
                localVarQueryParameter['ou_dn'] = ouDn;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (hasExisted !== null && hasExisted !== undefined) {
                localVarQueryParameter['has_existed'] = hasExisted;
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
         * 查询AD里的OU列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAdOus(listAdOusRequest?: ListAdOusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/ad-ous",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listAdOusRequest !== null && listAdOusRequest !== undefined) {
                if (listAdOusRequest instanceof ListAdOusRequest) {
                    limit = listAdOusRequest.limit;
                    offset = listAdOusRequest.offset;
                } else {
                    limit = listAdOusRequest['limit'];
                    offset = listAdOusRequest['offset'];
                }
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
         * 查询OU列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOuDetails(listOuDetailsRequest?: ListOuDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/ous",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let ouName;
            
            let limit;
            
            let offset;

            if (listOuDetailsRequest !== null && listOuDetailsRequest !== undefined) {
                if (listOuDetailsRequest instanceof ListOuDetailsRequest) {
                    ouName = listOuDetailsRequest.ouName;
                    limit = listOuDetailsRequest.limit;
                    offset = listOuDetailsRequest.offset;
                } else {
                    ouName = listOuDetailsRequest['ou_name'];
                    limit = listOuDetailsRequest['limit'];
                    offset = listOuDetailsRequest['offset'];
                }
            }

        
            if (ouName !== null && ouName !== undefined) {
                localVarQueryParameter['ou_name'] = ouName;
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
         * 更新OU信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOuInfo(updateOuInfoRequest?: UpdateOuInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/ous/{ou_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ouId;

            if (updateOuInfoRequest !== null && updateOuInfoRequest !== undefined) {
                if (updateOuInfoRequest instanceof UpdateOuInfoRequest) {
                    ouId = updateOuInfoRequest.ouId;
                    body = updateOuInfoRequest.body
                } else {
                    ouId = updateOuInfoRequest['ou_id'];
                    body = updateOuInfoRequest['body'];
                }
            }

        
            if (ouId === null || ouId === undefined) {
            throw new RequiredError('ouId','Required parameter ouId was null or undefined when calling updateOuInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ou_id': ouId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量增加、删除应用对象到指定策略组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateTargetOfPolicyGroup(batchUpdateTargetOfPolicyGroupRequest?: BatchUpdateTargetOfPolicyGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/policy-groups/{policy_group_id}/targets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyGroupId;

            if (batchUpdateTargetOfPolicyGroupRequest !== null && batchUpdateTargetOfPolicyGroupRequest !== undefined) {
                if (batchUpdateTargetOfPolicyGroupRequest instanceof BatchUpdateTargetOfPolicyGroupRequest) {
                    policyGroupId = batchUpdateTargetOfPolicyGroupRequest.policyGroupId;
                    body = batchUpdateTargetOfPolicyGroupRequest.body
                } else {
                    policyGroupId = batchUpdateTargetOfPolicyGroupRequest['policy_group_id'];
                    body = batchUpdateTargetOfPolicyGroupRequest['body'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling batchUpdateTargetOfPolicyGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_group_id': policyGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增策略组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicyGroup(createPolicyGroupRequest?: CreatePolicyGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/policy-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPolicyGroupRequest !== null && createPolicyGroupRequest !== undefined) {
                if (createPolicyGroupRequest instanceof CreatePolicyGroupRequest) {
                    body = createPolicyGroupRequest.body
                } else {
                    body = createPolicyGroupRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定策略组，包含策略组对应的策略信息以及应用对象信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyGroup(deletePolicyGroupRequest?: DeletePolicyGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/policy-groups/{policy_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyGroupId;

            if (deletePolicyGroupRequest !== null && deletePolicyGroupRequest !== undefined) {
                if (deletePolicyGroupRequest instanceof DeletePolicyGroupRequest) {
                    policyGroupId = deletePolicyGroupRequest.policyGroupId;
                } else {
                    policyGroupId = deletePolicyGroupRequest['policy_group_id'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling deletePolicyGroup.');
            }

            options.pathParams = { 'policy_group_id': policyGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询初始策略项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOriginalPolicyInfo() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/policy-groups/original-policies",
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
         * 查询指定策略组内的策略项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPoliciesOfPolicyGroup(listPoliciesOfPolicyGroupRequest?: ListPoliciesOfPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/policy-groups/{policy_group_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyGroupId;
            
            let policyType;

            if (listPoliciesOfPolicyGroupRequest !== null && listPoliciesOfPolicyGroupRequest !== undefined) {
                if (listPoliciesOfPolicyGroupRequest instanceof ListPoliciesOfPolicyGroupRequest) {
                    policyGroupId = listPoliciesOfPolicyGroupRequest.policyGroupId;
                    policyType = listPoliciesOfPolicyGroupRequest.policyType;
                } else {
                    policyGroupId = listPoliciesOfPolicyGroupRequest['policy_group_id'];
                    policyType = listPoliciesOfPolicyGroupRequest['policy_type'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling listPoliciesOfPolicyGroup.');
            }
            if (policyType !== null && policyType !== undefined) {
                localVarQueryParameter['policy_type'] = policyType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_group_id': policyGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据策略组ID查询策略组详细信息，包含策略信息以及应用对象信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyDetailInfoById(listPolicyDetailInfoByIdRequest?: ListPolicyDetailInfoByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/policy-groups/{policy_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyGroupId;

            if (listPolicyDetailInfoByIdRequest !== null && listPolicyDetailInfoByIdRequest !== undefined) {
                if (listPolicyDetailInfoByIdRequest instanceof ListPolicyDetailInfoByIdRequest) {
                    policyGroupId = listPolicyDetailInfoByIdRequest.policyGroupId;
                } else {
                    policyGroupId = listPolicyDetailInfoByIdRequest['policy_group_id'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling listPolicyDetailInfoById.');
            }

            options.pathParams = { 'policy_group_id': policyGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询策略组概要信息列表，不包含策略信息以及应用对象信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyGroup(listPolicyGroupRequest?: ListPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/policy-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let policyGroupId;
            
            let policyGroupName;
            
            let priority;
            
            let updateTime;
            
            let description;
            
            let isGroupNameAccurate;

            if (listPolicyGroupRequest !== null && listPolicyGroupRequest !== undefined) {
                if (listPolicyGroupRequest instanceof ListPolicyGroupRequest) {
                    limit = listPolicyGroupRequest.limit;
                    offset = listPolicyGroupRequest.offset;
                    policyGroupId = listPolicyGroupRequest.policyGroupId;
                    policyGroupName = listPolicyGroupRequest.policyGroupName;
                    priority = listPolicyGroupRequest.priority;
                    updateTime = listPolicyGroupRequest.updateTime;
                    description = listPolicyGroupRequest.description;
                    isGroupNameAccurate = listPolicyGroupRequest.isGroupNameAccurate;
                } else {
                    limit = listPolicyGroupRequest['limit'];
                    offset = listPolicyGroupRequest['offset'];
                    policyGroupId = listPolicyGroupRequest['policy_group_id'];
                    policyGroupName = listPolicyGroupRequest['policy_group_name'];
                    priority = listPolicyGroupRequest['priority'];
                    updateTime = listPolicyGroupRequest['update_time'];
                    description = listPolicyGroupRequest['description'];
                    isGroupNameAccurate = listPolicyGroupRequest['is_group_name_accurate'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (policyGroupId !== null && policyGroupId !== undefined) {
                localVarQueryParameter['policy_group_id'] = policyGroupId;
            }
            if (policyGroupName !== null && policyGroupName !== undefined) {
                localVarQueryParameter['policy_group_name'] = policyGroupName;
            }
            if (priority !== null && priority !== undefined) {
                localVarQueryParameter['priority'] = priority;
            }
            if (updateTime !== null && updateTime !== undefined) {
                localVarQueryParameter['update_time'] = updateTime;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (isGroupNameAccurate !== null && isGroupNameAccurate !== undefined) {
                localVarQueryParameter['is_group_name_accurate'] = isGroupNameAccurate;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 包含策略信息以及应用对象的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyGroupInfo(listPolicyGroupInfoRequest?: ListPolicyGroupInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/policy-groups/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let policyGroupId;
            
            let policyGroupName;
            
            let priority;
            
            let updateTime;
            
            let description;

            if (listPolicyGroupInfoRequest !== null && listPolicyGroupInfoRequest !== undefined) {
                if (listPolicyGroupInfoRequest instanceof ListPolicyGroupInfoRequest) {
                    limit = listPolicyGroupInfoRequest.limit;
                    offset = listPolicyGroupInfoRequest.offset;
                    policyGroupId = listPolicyGroupInfoRequest.policyGroupId;
                    policyGroupName = listPolicyGroupInfoRequest.policyGroupName;
                    priority = listPolicyGroupInfoRequest.priority;
                    updateTime = listPolicyGroupInfoRequest.updateTime;
                    description = listPolicyGroupInfoRequest.description;
                } else {
                    limit = listPolicyGroupInfoRequest['limit'];
                    offset = listPolicyGroupInfoRequest['offset'];
                    policyGroupId = listPolicyGroupInfoRequest['policy_group_id'];
                    policyGroupName = listPolicyGroupInfoRequest['policy_group_name'];
                    priority = listPolicyGroupInfoRequest['priority'];
                    updateTime = listPolicyGroupInfoRequest['update_time'];
                    description = listPolicyGroupInfoRequest['description'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (policyGroupId !== null && policyGroupId !== undefined) {
                localVarQueryParameter['policy_group_id'] = policyGroupId;
            }
            if (policyGroupName !== null && policyGroupName !== undefined) {
                localVarQueryParameter['policy_group_name'] = policyGroupName;
            }
            if (priority !== null && priority !== undefined) {
                localVarQueryParameter['priority'] = priority;
            }
            if (updateTime !== null && updateTime !== undefined) {
                localVarQueryParameter['update_time'] = updateTime;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定策略组所应用的对象。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTargetOfPolicyGroup(listTargetOfPolicyGroupRequest?: ListTargetOfPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/policy-groups/{policy_group_id}/targets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyGroupId;
            
            let targetType;
            
            let targetName;
            
            let limit;
            
            let offset;

            if (listTargetOfPolicyGroupRequest !== null && listTargetOfPolicyGroupRequest !== undefined) {
                if (listTargetOfPolicyGroupRequest instanceof ListTargetOfPolicyGroupRequest) {
                    policyGroupId = listTargetOfPolicyGroupRequest.policyGroupId;
                    targetType = listTargetOfPolicyGroupRequest.targetType;
                    targetName = listTargetOfPolicyGroupRequest.targetName;
                    limit = listTargetOfPolicyGroupRequest.limit;
                    offset = listTargetOfPolicyGroupRequest.offset;
                } else {
                    policyGroupId = listTargetOfPolicyGroupRequest['policy_group_id'];
                    targetType = listTargetOfPolicyGroupRequest['target_type'];
                    targetName = listTargetOfPolicyGroupRequest['target_name'];
                    limit = listTargetOfPolicyGroupRequest['limit'];
                    offset = listTargetOfPolicyGroupRequest['offset'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling listTargetOfPolicyGroup.');
            }
            if (targetType !== null && targetType !== undefined) {
                localVarQueryParameter['target_type'] = targetType;
            }
            if (targetName !== null && targetName !== undefined) {
                localVarQueryParameter['target_name'] = targetName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_group_id': policyGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改一个策略组的部分或者所有策略项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePoliciesOfPolicyGroup(updatePoliciesOfPolicyGroupRequest?: UpdatePoliciesOfPolicyGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/policy-groups/{policy_group_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyGroupId;

            if (updatePoliciesOfPolicyGroupRequest !== null && updatePoliciesOfPolicyGroupRequest !== undefined) {
                if (updatePoliciesOfPolicyGroupRequest instanceof UpdatePoliciesOfPolicyGroupRequest) {
                    policyGroupId = updatePoliciesOfPolicyGroupRequest.policyGroupId;
                    body = updatePoliciesOfPolicyGroupRequest.body
                } else {
                    policyGroupId = updatePoliciesOfPolicyGroupRequest['policy_group_id'];
                    body = updatePoliciesOfPolicyGroupRequest['body'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling updatePoliciesOfPolicyGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_group_id': policyGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定策略组的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyGroup(updatePolicyGroupRequest?: UpdatePolicyGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/policy-groups/{policy_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyGroupId;

            if (updatePolicyGroupRequest !== null && updatePolicyGroupRequest !== undefined) {
                if (updatePolicyGroupRequest instanceof UpdatePolicyGroupRequest) {
                    policyGroupId = updatePolicyGroupRequest.policyGroupId;
                    body = updatePolicyGroupRequest.body
                } else {
                    policyGroupId = updatePolicyGroupRequest['policy_group_id'];
                    body = updatePolicyGroupRequest['body'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling updatePolicyGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_group_id': policyGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询可订购小时包类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHourPackagesType(listHourPackagesTypeRequest?: ListHourPackagesTypeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/products/hour-packages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let desktopResourceSpecCode;
            
            let resourceSpecCode;

            if (listHourPackagesTypeRequest !== null && listHourPackagesTypeRequest !== undefined) {
                if (listHourPackagesTypeRequest instanceof ListHourPackagesTypeRequest) {
                    desktopResourceSpecCode = listHourPackagesTypeRequest.desktopResourceSpecCode;
                    resourceSpecCode = listHourPackagesTypeRequest.resourceSpecCode;
                } else {
                    desktopResourceSpecCode = listHourPackagesTypeRequest['desktop_resource_spec_code'];
                    resourceSpecCode = listHourPackagesTypeRequest['resource_spec_code'];
                }
            }

        
            if (desktopResourceSpecCode !== null && desktopResourceSpecCode !== undefined) {
                localVarQueryParameter['desktop_resource_spec_code'] = desktopResourceSpecCode;
            }
            if (resourceSpecCode !== null && resourceSpecCode !== undefined) {
                localVarQueryParameter['resource_spec_code'] = resourceSpecCode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询云桌面支持的产品套餐列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProducts(listProductsRequest?: ListProductsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productId;
            
            let availabilityZone;
            
            let osType;
            
            let chargeMode;
            
            let architecture;
            
            let packageType;
            
            let limit;
            
            let offset;

            if (listProductsRequest !== null && listProductsRequest !== undefined) {
                if (listProductsRequest instanceof ListProductsRequest) {
                    productId = listProductsRequest.productId;
                    availabilityZone = listProductsRequest.availabilityZone;
                    osType = listProductsRequest.osType;
                    chargeMode = listProductsRequest.chargeMode;
                    architecture = listProductsRequest.architecture;
                    packageType = listProductsRequest.packageType;
                    limit = listProductsRequest.limit;
                    offset = listProductsRequest.offset;
                } else {
                    productId = listProductsRequest['product_id'];
                    availabilityZone = listProductsRequest['availability_zone'];
                    osType = listProductsRequest['os_type'];
                    chargeMode = listProductsRequest['charge_mode'];
                    architecture = listProductsRequest['architecture'];
                    packageType = listProductsRequest['package_type'];
                    limit = listProductsRequest['limit'];
                    offset = listProductsRequest['offset'];
                }
            }

        
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (architecture !== null && architecture !== undefined) {
                localVarQueryParameter['architecture'] = architecture;
            }
            if (packageType !== null && packageType !== undefined) {
                localVarQueryParameter['package_type'] = packageType;
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
         * 该接口用于查询协同套餐列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSharerProducts(listSharerProductsRequest?: ListSharerProductsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/products/sharer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productId;
            
            let shareSpaceSize;
            
            let chargeMode;
            
            let isGpu;
            
            let packageType;
            
            let limit;
            
            let offset;

            if (listSharerProductsRequest !== null && listSharerProductsRequest !== undefined) {
                if (listSharerProductsRequest instanceof ListSharerProductsRequest) {
                    productId = listSharerProductsRequest.productId;
                    shareSpaceSize = listSharerProductsRequest.shareSpaceSize;
                    chargeMode = listSharerProductsRequest.chargeMode;
                    isGpu = listSharerProductsRequest.isGpu;
                    packageType = listSharerProductsRequest.packageType;
                    limit = listSharerProductsRequest.limit;
                    offset = listSharerProductsRequest.offset;
                } else {
                    productId = listSharerProductsRequest['product_id'];
                    shareSpaceSize = listSharerProductsRequest['share_space_size'];
                    chargeMode = listSharerProductsRequest['charge_mode'];
                    isGpu = listSharerProductsRequest['is_gpu'];
                    packageType = listSharerProductsRequest['package_type'];
                    limit = listSharerProductsRequest['limit'];
                    offset = listSharerProductsRequest['offset'];
                }
            }

        
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (shareSpaceSize !== null && shareSpaceSize !== undefined) {
                localVarQueryParameter['share_space_size'] = shareSpaceSize;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (isGpu !== null && isGpu !== undefined) {
                localVarQueryParameter['is_gpu'] = isGpu;
            }
            if (packageType !== null && packageType !== undefined) {
                localVarQueryParameter['package_type'] = packageType;
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
         * 查询租户功能状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTenantProfiles() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-center/profiles",
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
         * 启禁用租户功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTenantProfile(updateTenantProfileRequest?: UpdateTenantProfileRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-center/profiles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTenantProfileRequest !== null && updateTenantProfileRequest !== undefined) {
                if (updateTenantProfileRequest instanceof UpdateTenantProfileRequest) {
                    body = updateTenantProfileRequest.body
                } else {
                    body = updateTenantProfileRequest['body'];
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
         * 查询租户单个站点配额详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotaDetails(showQuotaDetailsRequest?: ShowQuotaDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quotas/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let siteId;
            
            let azCode;

            if (showQuotaDetailsRequest !== null && showQuotaDetailsRequest !== undefined) {
                if (showQuotaDetailsRequest instanceof ShowQuotaDetailsRequest) {
                    siteId = showQuotaDetailsRequest.siteId;
                    azCode = showQuotaDetailsRequest.azCode;
                } else {
                    siteId = showQuotaDetailsRequest['site_id'];
                    azCode = showQuotaDetailsRequest['az_code'];
                }
            }

        
            if (siteId !== null && siteId !== undefined) {
                localVarQueryParameter['site_id'] = siteId;
            }
            if (azCode !== null && azCode !== undefined) {
                localVarQueryParameter['az_code'] = azCode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Console Framework和WKSDesktopManager调用该接口查询租户配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quotas",
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
         * 批量删除定时任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteScheduledTasks(batchDeleteScheduledTasksRequest?: BatchDeleteScheduledTasksRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/scheduled-tasks/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteScheduledTasksRequest !== null && batchDeleteScheduledTasksRequest !== undefined) {
                if (batchDeleteScheduledTasksRequest instanceof BatchDeleteScheduledTasksRequest) {
                    body = batchDeleteScheduledTasksRequest.body
                } else {
                    body = batchDeleteScheduledTasksRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建定时任务。
         * 注:需通过开通委托功能接口先对云服务进行授权才可以使用该功能
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScheduledTasks(createScheduledTasksRequest?: CreateScheduledTasksRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/scheduled-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createScheduledTasksRequest !== null && createScheduledTasksRequest !== undefined) {
                if (createScheduledTasksRequest instanceof CreateScheduledTasksRequest) {
                    body = createScheduledTasksRequest.body
                } else {
                    body = createScheduledTasksRequest['body'];
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
         * 删除定时任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScheduledTasks(deleteScheduledTasksRequest?: DeleteScheduledTasksRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/scheduled-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (deleteScheduledTasksRequest !== null && deleteScheduledTasksRequest !== undefined) {
                if (deleteScheduledTasksRequest instanceof DeleteScheduledTasksRequest) {
                    taskId = deleteScheduledTasksRequest.taskId;
                } else {
                    taskId = deleteScheduledTasksRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteScheduledTasks.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 未来执行的具体时间列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFutureExecutions(listFutureExecutionsRequest?: ListFutureExecutionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/scheduled-tasks/future-executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listFutureExecutionsRequest !== null && listFutureExecutionsRequest !== undefined) {
                if (listFutureExecutionsRequest instanceof ListFutureExecutionsRequest) {
                    body = listFutureExecutionsRequest.body
                } else {
                    body = listFutureExecutionsRequest['body'];
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
         * 查询定时任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledTasks(listScheduledTasksRequest?: ListScheduledTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/scheduled-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let taskName;
            
            let taskType;
            
            let scheduledType;
            
            let lifeCycleType;
            
            let lastStatus;

            if (listScheduledTasksRequest !== null && listScheduledTasksRequest !== undefined) {
                if (listScheduledTasksRequest instanceof ListScheduledTasksRequest) {
                    offset = listScheduledTasksRequest.offset;
                    limit = listScheduledTasksRequest.limit;
                    taskName = listScheduledTasksRequest.taskName;
                    taskType = listScheduledTasksRequest.taskType;
                    scheduledType = listScheduledTasksRequest.scheduledType;
                    lifeCycleType = listScheduledTasksRequest.lifeCycleType;
                    lastStatus = listScheduledTasksRequest.lastStatus;
                } else {
                    offset = listScheduledTasksRequest['offset'];
                    limit = listScheduledTasksRequest['limit'];
                    taskName = listScheduledTasksRequest['task_name'];
                    taskType = listScheduledTasksRequest['task_type'];
                    scheduledType = listScheduledTasksRequest['scheduled_type'];
                    lifeCycleType = listScheduledTasksRequest['life_cycle_type'];
                    lastStatus = listScheduledTasksRequest['last_status'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listScheduledTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listScheduledTasks.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }
            if (scheduledType !== null && scheduledType !== undefined) {
                localVarQueryParameter['scheduled_type'] = scheduledType;
            }
            if (lifeCycleType !== null && lifeCycleType !== undefined) {
                localVarQueryParameter['life_cycle_type'] = lifeCycleType;
            }
            if (lastStatus !== null && lastStatus !== undefined) {
                localVarQueryParameter['last_status'] = lastStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询定时任务执行记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledTasksRecords(listScheduledTasksRecordsRequest?: ListScheduledTasksRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/scheduled-tasks/{task_id}/records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let offset;
            
            let limit;

            if (listScheduledTasksRecordsRequest !== null && listScheduledTasksRecordsRequest !== undefined) {
                if (listScheduledTasksRecordsRequest instanceof ListScheduledTasksRecordsRequest) {
                    taskId = listScheduledTasksRecordsRequest.taskId;
                    offset = listScheduledTasksRecordsRequest.offset;
                    limit = listScheduledTasksRecordsRequest.limit;
                } else {
                    taskId = listScheduledTasksRecordsRequest['task_id'];
                    offset = listScheduledTasksRecordsRequest['offset'];
                    limit = listScheduledTasksRecordsRequest['limit'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listScheduledTasksRecords.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询定时任务执行记录详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledTasksRecordsDetails(listScheduledTasksRecordsDetailsRequest?: ListScheduledTasksRecordsDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/scheduled-tasks/{task_id}/records/{record_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let recordId;
            
            let offset;
            
            let limit;

            if (listScheduledTasksRecordsDetailsRequest !== null && listScheduledTasksRecordsDetailsRequest !== undefined) {
                if (listScheduledTasksRecordsDetailsRequest instanceof ListScheduledTasksRecordsDetailsRequest) {
                    taskId = listScheduledTasksRecordsDetailsRequest.taskId;
                    recordId = listScheduledTasksRecordsDetailsRequest.recordId;
                    offset = listScheduledTasksRecordsDetailsRequest.offset;
                    limit = listScheduledTasksRecordsDetailsRequest.limit;
                } else {
                    taskId = listScheduledTasksRecordsDetailsRequest['task_id'];
                    recordId = listScheduledTasksRecordsDetailsRequest['record_id'];
                    offset = listScheduledTasksRecordsDetailsRequest['offset'];
                    limit = listScheduledTasksRecordsDetailsRequest['limit'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listScheduledTasksRecordsDetails.');
            }
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling listScheduledTasksRecordsDetails.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listScheduledTasksRecordsDetails.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listScheduledTasksRecordsDetails.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId,'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取时区配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTimeZones(listTimeZonesRequest?: ListTimeZonesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/common/timezones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let timeZoneName;

            if (listTimeZonesRequest !== null && listTimeZonesRequest !== undefined) {
                if (listTimeZonesRequest instanceof ListTimeZonesRequest) {
                    timeZoneName = listTimeZonesRequest.timeZoneName;
                } else {
                    timeZoneName = listTimeZonesRequest['time_zone_name'];
                }
            }

        
            if (timeZoneName !== null && timeZoneName !== undefined) {
                localVarQueryParameter['time_zone_name'] = timeZoneName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询定时任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScheduledTasks(showScheduledTasksRequest?: ShowScheduledTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/scheduled-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showScheduledTasksRequest !== null && showScheduledTasksRequest !== undefined) {
                if (showScheduledTasksRequest instanceof ShowScheduledTasksRequest) {
                    taskId = showScheduledTasksRequest.taskId;
                } else {
                    taskId = showScheduledTasksRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showScheduledTasks.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改定时任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScheduledTasks(updateScheduledTasksRequest?: UpdateScheduledTasksRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/scheduled-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateScheduledTasksRequest !== null && updateScheduledTasksRequest !== undefined) {
                if (updateScheduledTasksRequest instanceof UpdateScheduledTasksRequest) {
                    taskId = updateScheduledTasksRequest.taskId;
                    body = updateScheduledTasksRequest.body
                } else {
                    taskId = updateScheduledTasksRequest['task_id'];
                    body = updateScheduledTasksRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateScheduledTasks.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除录屏记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteScreenRecords(batchDeleteScreenRecordsRequest?: BatchDeleteScreenRecordsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/screen-records/batch-delete",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteScreenRecordsRequest !== null && batchDeleteScreenRecordsRequest !== undefined) {
                if (batchDeleteScreenRecordsRequest instanceof BatchDeleteScreenRecordsRequest) {
                    body = batchDeleteScreenRecordsRequest.body
                } else {
                    body = batchDeleteScreenRecordsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询桌面关键事件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopOperations(listDesktopOperationsRequest?: ListDesktopOperationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/screen-records/{record_id}/os-operations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let recordId;
            
            let eventType;
            
            let eventId;
            
            let eventLevel;
            
            let eventData;
            
            let limit;
            
            let offset;

            if (listDesktopOperationsRequest !== null && listDesktopOperationsRequest !== undefined) {
                if (listDesktopOperationsRequest instanceof ListDesktopOperationsRequest) {
                    recordId = listDesktopOperationsRequest.recordId;
                    eventType = listDesktopOperationsRequest.eventType;
                    eventId = listDesktopOperationsRequest.eventId;
                    eventLevel = listDesktopOperationsRequest.eventLevel;
                    eventData = listDesktopOperationsRequest.eventData;
                    limit = listDesktopOperationsRequest.limit;
                    offset = listDesktopOperationsRequest.offset;
                } else {
                    recordId = listDesktopOperationsRequest['record_id'];
                    eventType = listDesktopOperationsRequest['event_type'];
                    eventId = listDesktopOperationsRequest['event_id'];
                    eventLevel = listDesktopOperationsRequest['event_level'];
                    eventData = listDesktopOperationsRequest['event_data'];
                    limit = listDesktopOperationsRequest['limit'];
                    offset = listDesktopOperationsRequest['offset'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling listDesktopOperations.');
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (eventId !== null && eventId !== undefined) {
                localVarQueryParameter['event_id'] = eventId;
            }
            if (eventLevel !== null && eventLevel !== undefined) {
                localVarQueryParameter['event_level'] = eventLevel;
            }
            if (eventData !== null && eventData !== undefined) {
                localVarQueryParameter['event_data'] = eventData;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询下载地址列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDownloadAddress(listDownloadAddressRequest?: ListDownloadAddressRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/screen-records/download-address",
                contentType: "application/json;charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listDownloadAddressRequest !== null && listDownloadAddressRequest !== undefined) {
                if (listDownloadAddressRequest instanceof ListDownloadAddressRequest) {
                    body = listDownloadAddressRequest.body
                } else {
                    body = listDownloadAddressRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询录屏记录列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScreenRecords(listScreenRecordsRequest?: ListScreenRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/screen-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let desktopId;
            
            let username;
            
            let status;
            
            let type;
            
            let startTime;
            
            let endTime;
            
            let sortField;
            
            let sortType;

            if (listScreenRecordsRequest !== null && listScreenRecordsRequest !== undefined) {
                if (listScreenRecordsRequest instanceof ListScreenRecordsRequest) {
                    limit = listScreenRecordsRequest.limit;
                    offset = listScreenRecordsRequest.offset;
                    desktopId = listScreenRecordsRequest.desktopId;
                    username = listScreenRecordsRequest.username;
                    status = listScreenRecordsRequest.status;
                    type = listScreenRecordsRequest.type;
                    startTime = listScreenRecordsRequest.startTime;
                    endTime = listScreenRecordsRequest.endTime;
                    sortField = listScreenRecordsRequest.sortField;
                    sortType = listScreenRecordsRequest.sortType;
                } else {
                    limit = listScreenRecordsRequest['limit'];
                    offset = listScreenRecordsRequest['offset'];
                    desktopId = listScreenRecordsRequest['desktop_id'];
                    username = listScreenRecordsRequest['username'];
                    status = listScreenRecordsRequest['status'];
                    type = listScreenRecordsRequest['type'];
                    startTime = listScreenRecordsRequest['start_time'];
                    endTime = listScreenRecordsRequest['end_time'];
                    sortField = listScreenRecordsRequest['sort_field'];
                    sortType = listScreenRecordsRequest['sort_type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (desktopId !== null && desktopId !== undefined) {
                localVarQueryParameter['desktop_id'] = desktopId;
            }
            if (username !== null && username !== undefined) {
                localVarQueryParameter['username'] = username;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询录屏详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScreenRecord(showScreenRecordRequest?: ShowScreenRecordRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/screen-records/{record_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let recordId;

            if (showScreenRecordRequest !== null && showScreenRecordRequest !== undefined) {
                if (showScreenRecordRequest instanceof ShowScreenRecordRequest) {
                    recordId = showScreenRecordRequest.recordId;
                } else {
                    recordId = showScreenRecordRequest['record_id'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling showScreenRecord.');
            }

            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增脚本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScript(createScriptRequest?: CreateScriptRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createScriptRequest !== null && createScriptRequest !== undefined) {
                if (createScriptRequest instanceof CreateScriptRequest) {
                    body = createScriptRequest.body
                } else {
                    body = createScriptRequest['body'];
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
         * 删除脚本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScript(deleteScriptRequest?: DeleteScriptRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/scripts/{script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scriptId;

            if (deleteScriptRequest !== null && deleteScriptRequest !== undefined) {
                if (deleteScriptRequest instanceof DeleteScriptRequest) {
                    scriptId = deleteScriptRequest.scriptId;
                } else {
                    scriptId = deleteScriptRequest['script_id'];
                }
            }

        
            if (scriptId === null || scriptId === undefined) {
            throw new RequiredError('scriptId','Required parameter scriptId was null or undefined when calling deleteScript.');
            }

            options.pathParams = { 'script_id': scriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量执行脚本或命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeScriptOrCommand(executeScriptOrCommandRequest?: ExecuteScriptOrCommandRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/script-executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (executeScriptOrCommandRequest !== null && executeScriptOrCommandRequest !== undefined) {
                if (executeScriptOrCommandRequest instanceof ExecuteScriptOrCommandRequest) {
                    body = executeScriptOrCommandRequest.body
                } else {
                    body = executeScriptOrCommandRequest['body'];
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
         * 查询脚本执行记录列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScriptRecords(listScriptRecordsRequest?: ListScriptRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/script-execution-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let resourceId;
            
            let resourceGroupId;
            
            let scriptId;
            
            let scriptName;
            
            let status;
            
            let isFirstOrder;
            
            let scriptTaskId;
            
            let taskType;
            
            let showHistory;
            
            let executeTimeStart;
            
            let executeTimeEnd;

            if (listScriptRecordsRequest !== null && listScriptRecordsRequest !== undefined) {
                if (listScriptRecordsRequest instanceof ListScriptRecordsRequest) {
                    offset = listScriptRecordsRequest.offset;
                    limit = listScriptRecordsRequest.limit;
                    resourceId = listScriptRecordsRequest.resourceId;
                    resourceGroupId = listScriptRecordsRequest.resourceGroupId;
                    scriptId = listScriptRecordsRequest.scriptId;
                    scriptName = listScriptRecordsRequest.scriptName;
                    status = listScriptRecordsRequest.status;
                    isFirstOrder = listScriptRecordsRequest.isFirstOrder;
                    scriptTaskId = listScriptRecordsRequest.scriptTaskId;
                    taskType = listScriptRecordsRequest.taskType;
                    showHistory = listScriptRecordsRequest.showHistory;
                    executeTimeStart = listScriptRecordsRequest.executeTimeStart;
                    executeTimeEnd = listScriptRecordsRequest.executeTimeEnd;
                } else {
                    offset = listScriptRecordsRequest['offset'];
                    limit = listScriptRecordsRequest['limit'];
                    resourceId = listScriptRecordsRequest['resource_id'];
                    resourceGroupId = listScriptRecordsRequest['resource_group_id'];
                    scriptId = listScriptRecordsRequest['script_id'];
                    scriptName = listScriptRecordsRequest['script_name'];
                    status = listScriptRecordsRequest['status'];
                    isFirstOrder = listScriptRecordsRequest['is_first_order'];
                    scriptTaskId = listScriptRecordsRequest['script_task_id'];
                    taskType = listScriptRecordsRequest['task_type'];
                    showHistory = listScriptRecordsRequest['show_history'];
                    executeTimeStart = listScriptRecordsRequest['execute_time_start'];
                    executeTimeEnd = listScriptRecordsRequest['execute_time_end'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (resourceGroupId !== null && resourceGroupId !== undefined) {
                localVarQueryParameter['resource_group_id'] = resourceGroupId;
            }
            if (scriptId !== null && scriptId !== undefined) {
                localVarQueryParameter['script_id'] = scriptId;
            }
            if (scriptName !== null && scriptName !== undefined) {
                localVarQueryParameter['script_name'] = scriptName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (isFirstOrder !== null && isFirstOrder !== undefined) {
                localVarQueryParameter['is_first_order'] = isFirstOrder;
            }
            if (scriptTaskId !== null && scriptTaskId !== undefined) {
                localVarQueryParameter['script_task_id'] = scriptTaskId;
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }
            if (showHistory !== null && showHistory !== undefined) {
                localVarQueryParameter['show_history'] = showHistory;
            }
            if (executeTimeStart !== null && executeTimeStart !== undefined) {
                localVarQueryParameter['execute_time_start'] = executeTimeStart;
            }
            if (executeTimeEnd !== null && executeTimeEnd !== undefined) {
                localVarQueryParameter['execute_time_end'] = executeTimeEnd;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询脚本任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScriptTasks(listScriptTasksRequest?: ListScriptTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/script-execution-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let resourceGroupId;
            
            let scriptId;
            
            let scriptName;
            
            let status;
            
            let resourceGroupType;
            
            let taskId;
            
            let taskType;
            
            let executeTimeStart;
            
            let executeTimeEnd;

            if (listScriptTasksRequest !== null && listScriptTasksRequest !== undefined) {
                if (listScriptTasksRequest instanceof ListScriptTasksRequest) {
                    offset = listScriptTasksRequest.offset;
                    limit = listScriptTasksRequest.limit;
                    resourceGroupId = listScriptTasksRequest.resourceGroupId;
                    scriptId = listScriptTasksRequest.scriptId;
                    scriptName = listScriptTasksRequest.scriptName;
                    status = listScriptTasksRequest.status;
                    resourceGroupType = listScriptTasksRequest.resourceGroupType;
                    taskId = listScriptTasksRequest.taskId;
                    taskType = listScriptTasksRequest.taskType;
                    executeTimeStart = listScriptTasksRequest.executeTimeStart;
                    executeTimeEnd = listScriptTasksRequest.executeTimeEnd;
                } else {
                    offset = listScriptTasksRequest['offset'];
                    limit = listScriptTasksRequest['limit'];
                    resourceGroupId = listScriptTasksRequest['resource_group_id'];
                    scriptId = listScriptTasksRequest['script_id'];
                    scriptName = listScriptTasksRequest['script_name'];
                    status = listScriptTasksRequest['status'];
                    resourceGroupType = listScriptTasksRequest['resource_group_type'];
                    taskId = listScriptTasksRequest['task_id'];
                    taskType = listScriptTasksRequest['task_type'];
                    executeTimeStart = listScriptTasksRequest['execute_time_start'];
                    executeTimeEnd = listScriptTasksRequest['execute_time_end'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (resourceGroupId !== null && resourceGroupId !== undefined) {
                localVarQueryParameter['resource_group_id'] = resourceGroupId;
            }
            if (scriptId !== null && scriptId !== undefined) {
                localVarQueryParameter['script_id'] = scriptId;
            }
            if (scriptName !== null && scriptName !== undefined) {
                localVarQueryParameter['script_name'] = scriptName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (resourceGroupType !== null && resourceGroupType !== undefined) {
                localVarQueryParameter['resource_group_type'] = resourceGroupType;
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }
            if (executeTimeStart !== null && executeTimeStart !== undefined) {
                localVarQueryParameter['execute_time_start'] = executeTimeStart;
            }
            if (executeTimeEnd !== null && executeTimeEnd !== undefined) {
                localVarQueryParameter['execute_time_end'] = executeTimeEnd;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询脚本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScripts(listScriptsRequest?: ListScriptsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let id;
            
            let name;
            
            let type;

            if (listScriptsRequest !== null && listScriptsRequest !== undefined) {
                if (listScriptsRequest instanceof ListScriptsRequest) {
                    offset = listScriptsRequest.offset;
                    limit = listScriptsRequest.limit;
                    id = listScriptsRequest.id;
                    name = listScriptsRequest.name;
                    type = listScriptsRequest.type;
                } else {
                    offset = listScriptsRequest['offset'];
                    limit = listScriptsRequest['limit'];
                    id = listScriptsRequest['id'];
                    name = listScriptsRequest['name'];
                    type = listScriptsRequest['type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重试脚本或执行脚本失败的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryScriptExecution(retryScriptExecutionRequest?: RetryScriptExecutionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/script-executions/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (retryScriptExecutionRequest !== null && retryScriptExecutionRequest !== undefined) {
                if (retryScriptExecutionRequest instanceof RetryScriptExecutionRequest) {
                    body = retryScriptExecutionRequest.body
                } else {
                    body = retryScriptExecutionRequest['body'];
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
         * 查询脚本详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScriptDetail(showScriptDetailRequest?: ShowScriptDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/scripts/{script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scriptId;
            
            let scriptTaskId;

            if (showScriptDetailRequest !== null && showScriptDetailRequest !== undefined) {
                if (showScriptDetailRequest instanceof ShowScriptDetailRequest) {
                    scriptId = showScriptDetailRequest.scriptId;
                    scriptTaskId = showScriptDetailRequest.scriptTaskId;
                } else {
                    scriptId = showScriptDetailRequest['script_id'];
                    scriptTaskId = showScriptDetailRequest['script_task_id'];
                }
            }

        
            if (scriptId === null || scriptId === undefined) {
            throw new RequiredError('scriptId','Required parameter scriptId was null or undefined when calling showScriptDetail.');
            }
            if (scriptTaskId !== null && scriptTaskId !== undefined) {
                localVarQueryParameter['script_task_id'] = scriptTaskId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'script_id': scriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询脚本执行记录详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScriptRecordDetail(showScriptRecordDetailRequest?: ShowScriptRecordDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/script-execution-records/{record_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let recordId;

            if (showScriptRecordDetailRequest !== null && showScriptRecordDetailRequest !== undefined) {
                if (showScriptRecordDetailRequest instanceof ShowScriptRecordDetailRequest) {
                    recordId = showScriptRecordDetailRequest.recordId;
                } else {
                    recordId = showScriptRecordDetailRequest['record_id'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling showScriptRecordDetail.');
            }

            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止脚本或者命令执行任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopScriptExecution(stopScriptExecutionRequest?: StopScriptExecutionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/script-executions/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (stopScriptExecutionRequest !== null && stopScriptExecutionRequest !== undefined) {
                if (stopScriptExecutionRequest instanceof StopScriptExecutionRequest) {
                    body = stopScriptExecutionRequest.body
                } else {
                    body = stopScriptExecutionRequest['body'];
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
         * 更新脚本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScript(updateScriptRequest?: UpdateScriptRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/scripts/{script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scriptId;

            if (updateScriptRequest !== null && updateScriptRequest !== undefined) {
                if (updateScriptRequest instanceof UpdateScriptRequest) {
                    scriptId = updateScriptRequest.scriptId;
                    body = updateScriptRequest.body
                } else {
                    scriptId = updateScriptRequest['script_id'];
                    body = updateScriptRequest['body'];
                }
            }

        
            if (scriptId === null || scriptId === undefined) {
            throw new RequiredError('scriptId','Required parameter scriptId was null or undefined when calling updateScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'script_id': scriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 存量桌面购买附属资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDesktopSubResources(addDesktopSubResourcesRequest?: AddDesktopSubResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop/sub-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addDesktopSubResourcesRequest !== null && addDesktopSubResourcesRequest !== undefined) {
                if (addDesktopSubResourcesRequest instanceof AddDesktopSubResourcesRequest) {
                    body = addDesktopSubResourcesRequest.body
                } else {
                    body = addDesktopSubResourcesRequest['body'];
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
         * 桌面删除附属资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDesktopSubResources(deleteDesktopSubResourcesRequest?: DeleteDesktopSubResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktop/delete-sub-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteDesktopSubResourcesRequest !== null && deleteDesktopSubResourcesRequest !== undefined) {
                if (deleteDesktopSubResourcesRequest instanceof DeleteDesktopSubResourcesRequest) {
                    body = deleteDesktopSubResourcesRequest.body
                } else {
                    body = deleteDesktopSubResourcesRequest['body'];
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
         * 查询协同桌面默认用户配置（当前功能公测中,需要使用请联系管理员申请使用）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showShareSpaceConfig(showShareSpaceConfigRequest?: ShowShareSpaceConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/share-space/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;

            if (showShareSpaceConfigRequest !== null && showShareSpaceConfigRequest !== undefined) {
                if (showShareSpaceConfigRequest instanceof ShowShareSpaceConfigRequest) {
                    name = showShareSpaceConfigRequest.name;
                } else {
                    name = showShareSpaceConfigRequest['name'];
                }
            }

        
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling showShareSpaceConfig.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置协同桌面默认用户配置（当前功能公测中，需要使用请联系管理员申请使用）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateShareSpaceConfig(updateShareSpaceConfigRequest?: UpdateShareSpaceConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/share-space/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateShareSpaceConfigRequest !== null && updateShareSpaceConfigRequest !== undefined) {
                if (updateShareSpaceConfigRequest instanceof UpdateShareSpaceConfigRequest) {
                    body = updateShareSpaceConfigRequest.body
                } else {
                    body = updateShareSpaceConfigRequest['body'];
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
         * 用于查询站点信息的接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addSite(addSiteRequest?: AddSiteRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/sites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addSiteRequest !== null && addSiteRequest !== undefined) {
                if (addSiteRequest instanceof AddSiteRequest) {
                    body = addSiteRequest.body
                } else {
                    body = addSiteRequest['body'];
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
         * 用于删除站点的接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSite(deleteSiteRequest?: DeleteSiteRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/sites/{site_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let siteId;

            if (deleteSiteRequest !== null && deleteSiteRequest !== undefined) {
                if (deleteSiteRequest instanceof DeleteSiteRequest) {
                    siteId = deleteSiteRequest.siteId;
                } else {
                    siteId = deleteSiteRequest['site_id'];
                }
            }

        
            if (siteId === null || siteId === undefined) {
            throw new RequiredError('siteId','Required parameter siteId was null or undefined when calling deleteSite.');
            }

            options.pathParams = { 'site_id': siteId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于查询站点信息的接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSiteConfigs(listSiteConfigsRequest?: ListSiteConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/sites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let availabilityZoneId;
            
            let siteType;

            if (listSiteConfigsRequest !== null && listSiteConfigsRequest !== undefined) {
                if (listSiteConfigsRequest instanceof ListSiteConfigsRequest) {
                    availabilityZoneId = listSiteConfigsRequest.availabilityZoneId;
                    siteType = listSiteConfigsRequest.siteType;
                } else {
                    availabilityZoneId = listSiteConfigsRequest['availability_zone_id'];
                    siteType = listSiteConfigsRequest['site_type'];
                }
            }

        
            if (availabilityZoneId !== null && availabilityZoneId !== undefined) {
                localVarQueryParameter['availability_zone_id'] = availabilityZoneId;
            }
            if (siteType !== null && siteType !== undefined) {
                localVarQueryParameter['site_type'] = siteType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询边缘小站列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWksEdgeSites(listWksEdgeSitesRequest?: ListWksEdgeSitesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/wks-edge-sites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let availabilityZoneId;
            
            let status;

            if (listWksEdgeSitesRequest !== null && listWksEdgeSitesRequest !== undefined) {
                if (listWksEdgeSitesRequest instanceof ListWksEdgeSitesRequest) {
                    name = listWksEdgeSitesRequest.name;
                    availabilityZoneId = listWksEdgeSitesRequest.availabilityZoneId;
                    status = listWksEdgeSitesRequest.status;
                } else {
                    name = listWksEdgeSitesRequest['name'];
                    availabilityZoneId = listWksEdgeSitesRequest['availability_zone_id'];
                    status = listWksEdgeSitesRequest['status'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (availabilityZoneId !== null && availabilityZoneId !== undefined) {
                localVarQueryParameter['availability_zone_id'] = availabilityZoneId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于修改站点接入方式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccessMode(updateAccessModeRequest?: UpdateAccessModeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/sites/{site_id}/access-mode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let siteId;

            if (updateAccessModeRequest !== null && updateAccessModeRequest !== undefined) {
                if (updateAccessModeRequest instanceof UpdateAccessModeRequest) {
                    siteId = updateAccessModeRequest.siteId;
                    body = updateAccessModeRequest.body
                } else {
                    siteId = updateAccessModeRequest['site_id'];
                    body = updateAccessModeRequest['body'];
                }
            }

        
            if (siteId === null || siteId === undefined) {
            throw new RequiredError('siteId','Required parameter siteId was null or undefined when calling updateAccessMode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'site_id': siteId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于修改站点业务子网。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubnetIds(updateSubnetIdsRequest?: UpdateSubnetIdsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/sites/{site_id}/subnet-ids",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let siteId;

            if (updateSubnetIdsRequest !== null && updateSubnetIdsRequest !== undefined) {
                if (updateSubnetIdsRequest instanceof UpdateSubnetIdsRequest) {
                    siteId = updateSubnetIdsRequest.siteId;
                    body = updateSubnetIdsRequest.body
                } else {
                    siteId = updateSubnetIdsRequest['site_id'];
                    body = updateSubnetIdsRequest['body'];
                }
            }

        
            if (siteId === null || siteId === undefined) {
            throw new RequiredError('siteId','Required parameter siteId was null or undefined when calling updateSubnetIds.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'site_id': siteId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateDesktopSnapshot(batchCreateDesktopSnapshotRequest?: BatchCreateDesktopSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/snapshots/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateDesktopSnapshotRequest !== null && batchCreateDesktopSnapshotRequest !== undefined) {
                if (batchCreateDesktopSnapshotRequest instanceof BatchCreateDesktopSnapshotRequest) {
                    body = batchCreateDesktopSnapshotRequest.body
                } else {
                    body = batchCreateDesktopSnapshotRequest['body'];
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
         * 批量删除快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDesktopSnapshot(batchDeleteDesktopSnapshotRequest?: BatchDeleteDesktopSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/snapshots/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteDesktopSnapshotRequest !== null && batchDeleteDesktopSnapshotRequest !== undefined) {
                if (batchDeleteDesktopSnapshotRequest instanceof BatchDeleteDesktopSnapshotRequest) {
                    body = batchDeleteDesktopSnapshotRequest.body
                } else {
                    body = batchDeleteDesktopSnapshotRequest['body'];
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
         * 批量恢快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRestoreDesktopSnapshot(batchRestoreDesktopSnapshotRequest?: BatchRestoreDesktopSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/snapshots/batch-restore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRestoreDesktopSnapshotRequest !== null && batchRestoreDesktopSnapshotRequest !== undefined) {
                if (batchRestoreDesktopSnapshotRequest instanceof BatchRestoreDesktopSnapshotRequest) {
                    body = batchRestoreDesktopSnapshotRequest.body
                } else {
                    body = batchRestoreDesktopSnapshotRequest['body'];
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
         * 查询快照列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopSnapshot(listDesktopSnapshotRequest?: ListDesktopSnapshotRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/snapshots",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let desktopId;
            
            let desktopName;
            
            let snapshotName;
            
            let diskType;
            
            let createType;
            
            let status;
            
            let sortField;
            
            let sortType;
            
            let offset;
            
            let limit;

            if (listDesktopSnapshotRequest !== null && listDesktopSnapshotRequest !== undefined) {
                if (listDesktopSnapshotRequest instanceof ListDesktopSnapshotRequest) {
                    desktopId = listDesktopSnapshotRequest.desktopId;
                    desktopName = listDesktopSnapshotRequest.desktopName;
                    snapshotName = listDesktopSnapshotRequest.snapshotName;
                    diskType = listDesktopSnapshotRequest.diskType;
                    createType = listDesktopSnapshotRequest.createType;
                    status = listDesktopSnapshotRequest.status;
                    sortField = listDesktopSnapshotRequest.sortField;
                    sortType = listDesktopSnapshotRequest.sortType;
                    offset = listDesktopSnapshotRequest.offset;
                    limit = listDesktopSnapshotRequest.limit;
                } else {
                    desktopId = listDesktopSnapshotRequest['desktop_id'];
                    desktopName = listDesktopSnapshotRequest['desktop_name'];
                    snapshotName = listDesktopSnapshotRequest['snapshot_name'];
                    diskType = listDesktopSnapshotRequest['disk_type'];
                    createType = listDesktopSnapshotRequest['create_type'];
                    status = listDesktopSnapshotRequest['status'];
                    sortField = listDesktopSnapshotRequest['sort_field'];
                    sortType = listDesktopSnapshotRequest['sort_type'];
                    offset = listDesktopSnapshotRequest['offset'];
                    limit = listDesktopSnapshotRequest['limit'];
                }
            }

        
            if (desktopId !== null && desktopId !== undefined) {
                localVarQueryParameter['desktop_id'] = desktopId;
            }
            if (desktopName !== null && desktopName !== undefined) {
                localVarQueryParameter['desktop_name'] = desktopName;
            }
            if (snapshotName !== null && snapshotName !== undefined) {
                localVarQueryParameter['snapshot_name'] = snapshotName;
            }
            if (diskType !== null && diskType !== undefined) {
                localVarQueryParameter['disk_type'] = diskType;
            }
            if (createType !== null && createType !== undefined) {
                localVarQueryParameter['create_type'] = createType;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
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
         * 新增对应指标的通知规则;对应指标满足相应的规则条件时发送通知
         * 同一指标的规则不允许重复;
         * 统计指标名称，目前仅支持固定值：desktop_idle_duration
         *   * &#x60;desktop_idle_duration&#x60; -  桌面空闲时长, 仅允许设置 \&#39;&gt;&#x3D;\&#39; 阈值
         * 注：需先为云服务添加委托授权，否则无法正常发送通知到SMN
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addMetricNotifyRule(addMetricNotifyRuleRequest?: AddMetricNotifyRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/statistics/notify-rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addMetricNotifyRuleRequest !== null && addMetricNotifyRuleRequest !== undefined) {
                if (addMetricNotifyRuleRequest instanceof AddMetricNotifyRuleRequest) {
                    body = addMetricNotifyRuleRequest.body
                } else {
                    body = addMetricNotifyRuleRequest['body'];
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
         * 删除对应指标的通知规则;对应指标满足相应的规则条件时发送通知
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMetricNotifyRule(deleteMetricNotifyRuleRequest?: DeleteMetricNotifyRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/statistics/notify-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;

            if (deleteMetricNotifyRuleRequest !== null && deleteMetricNotifyRuleRequest !== undefined) {
                if (deleteMetricNotifyRuleRequest instanceof DeleteMetricNotifyRuleRequest) {
                    ruleId = deleteMetricNotifyRuleRequest.ruleId;
                } else {
                    ruleId = deleteMetricNotifyRuleRequest['rule_id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteMetricNotifyRule.');
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云应用接入统计数据，一次最多查询30天，支持最近30天的数据查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppUserAccessData(listAppUserAccessDataRequest?: ListAppUserAccessDataRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/metrics/app-user-access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let username;
            
            let sortField;
            
            let sortType;
            
            let offset;
            
            let limit;

            if (listAppUserAccessDataRequest !== null && listAppUserAccessDataRequest !== undefined) {
                if (listAppUserAccessDataRequest instanceof ListAppUserAccessDataRequest) {
                    startTime = listAppUserAccessDataRequest.startTime;
                    endTime = listAppUserAccessDataRequest.endTime;
                    username = listAppUserAccessDataRequest.username;
                    sortField = listAppUserAccessDataRequest.sortField;
                    sortType = listAppUserAccessDataRequest.sortType;
                    offset = listAppUserAccessDataRequest.offset;
                    limit = listAppUserAccessDataRequest.limit;
                } else {
                    startTime = listAppUserAccessDataRequest['start_time'];
                    endTime = listAppUserAccessDataRequest['end_time'];
                    username = listAppUserAccessDataRequest['username'];
                    sortField = listAppUserAccessDataRequest['sort_field'];
                    sortType = listAppUserAccessDataRequest['sort_type'];
                    offset = listAppUserAccessDataRequest['offset'];
                    limit = listAppUserAccessDataRequest['limit'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAppUserAccessData.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAppUserAccessData.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (username !== null && username !== undefined) {
                localVarQueryParameter['username'] = username;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
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
         * 查询桌面使用统计信息;
         * 云服务每天凌晨02:00进行聚合运算前一天00:00:00~23:59:59的使用时长,并将周期范围内的数据聚合到周期边界上
         * 跨天的记录会按照统计周期进行计算
         * 假设一天内桌面登录多次，09:00~12:00,13:00~21:00,22:00~01:00(次日):
         * 则当天的累计使用时长数据会被汇聚到23:59:59这个点;总使用时长为 3hours(09:00~12:00)+8hours(13:00~21:00)+2hours(22:00~00:00)
         * 仅能查询最近180天已进行汇聚计算的数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopUsageMetric(listDesktopUsageMetricRequest?: ListDesktopUsageMetricRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/metrics/desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let resourceName;
            
            let minIdleDays;
            
            let maxIdleDays;
            
            let usageMinHours;
            
            let usageMaxHours;
            
            let sortField;
            
            let sortType;
            
            let offset;
            
            let limit;

            if (listDesktopUsageMetricRequest !== null && listDesktopUsageMetricRequest !== undefined) {
                if (listDesktopUsageMetricRequest instanceof ListDesktopUsageMetricRequest) {
                    startTime = listDesktopUsageMetricRequest.startTime;
                    endTime = listDesktopUsageMetricRequest.endTime;
                    resourceName = listDesktopUsageMetricRequest.resourceName;
                    minIdleDays = listDesktopUsageMetricRequest.minIdleDays;
                    maxIdleDays = listDesktopUsageMetricRequest.maxIdleDays;
                    usageMinHours = listDesktopUsageMetricRequest.usageMinHours;
                    usageMaxHours = listDesktopUsageMetricRequest.usageMaxHours;
                    sortField = listDesktopUsageMetricRequest.sortField;
                    sortType = listDesktopUsageMetricRequest.sortType;
                    offset = listDesktopUsageMetricRequest.offset;
                    limit = listDesktopUsageMetricRequest.limit;
                } else {
                    startTime = listDesktopUsageMetricRequest['start_time'];
                    endTime = listDesktopUsageMetricRequest['end_time'];
                    resourceName = listDesktopUsageMetricRequest['resource_name'];
                    minIdleDays = listDesktopUsageMetricRequest['min_idle_days'];
                    maxIdleDays = listDesktopUsageMetricRequest['max_idle_days'];
                    usageMinHours = listDesktopUsageMetricRequest['usage_min_hours'];
                    usageMaxHours = listDesktopUsageMetricRequest['usage_max_hours'];
                    sortField = listDesktopUsageMetricRequest['sort_field'];
                    sortType = listDesktopUsageMetricRequest['sort_type'];
                    offset = listDesktopUsageMetricRequest['offset'];
                    limit = listDesktopUsageMetricRequest['limit'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listDesktopUsageMetric.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listDesktopUsageMetric.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
            }
            if (minIdleDays !== null && minIdleDays !== undefined) {
                localVarQueryParameter['min_idle_days'] = minIdleDays;
            }
            if (maxIdleDays !== null && maxIdleDays !== undefined) {
                localVarQueryParameter['max_idle_days'] = maxIdleDays;
            }
            if (usageMinHours !== null && usageMinHours !== undefined) {
                localVarQueryParameter['usage_min_hours'] = usageMinHours;
            }
            if (usageMaxHours !== null && usageMaxHours !== undefined) {
                localVarQueryParameter['usage_max_hours'] = usageMaxHours;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
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
         * 统计租户下的普通桌面、桌面池状态，默认仅统计总数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDesktopsStatistics(listDesktopsStatisticsRequest?: ListDesktopsStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let desktopType;
            
            let statisticsType;

            if (listDesktopsStatisticsRequest !== null && listDesktopsStatisticsRequest !== undefined) {
                if (listDesktopsStatisticsRequest instanceof ListDesktopsStatisticsRequest) {
                    desktopType = listDesktopsStatisticsRequest.desktopType;
                    statisticsType = listDesktopsStatisticsRequest.statisticsType;
                } else {
                    desktopType = listDesktopsStatisticsRequest['desktop_type'];
                    statisticsType = listDesktopsStatisticsRequest['statistics_type'];
                }
            }

        
            if (desktopType !== null && desktopType !== undefined) {
                localVarQueryParameter['desktop_type'] = desktopType;
            }
            if (statisticsType !== null && statisticsType !== undefined) {
                localVarQueryParameter['statistics_type'] = statisticsType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户桌面登录状态统计。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLoginState() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/statistics/login-state",
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
         * 查询对应指标维度是否存在满足通知规则的记录;
         * 查询结果仅表示满足相应指标维度下对应通知规则可产生的通知记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetricNotifyRecord(listMetricNotifyRecordRequest?: ListMetricNotifyRecordRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/notification-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let metricName;
            
            let ruleId;
            
            let offset;
            
            let limit;

            if (listMetricNotifyRecordRequest !== null && listMetricNotifyRecordRequest !== undefined) {
                if (listMetricNotifyRecordRequest instanceof ListMetricNotifyRecordRequest) {
                    metricName = listMetricNotifyRecordRequest.metricName;
                    ruleId = listMetricNotifyRecordRequest.ruleId;
                    offset = listMetricNotifyRecordRequest.offset;
                    limit = listMetricNotifyRecordRequest.limit;
                } else {
                    metricName = listMetricNotifyRecordRequest['metric_name'];
                    ruleId = listMetricNotifyRecordRequest['rule_id'];
                    offset = listMetricNotifyRecordRequest['offset'];
                    limit = listMetricNotifyRecordRequest['limit'];
                }
            }

        
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (ruleId !== null && ruleId !== undefined) {
                localVarQueryParameter['rule_id'] = ruleId;
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
         * 查询对应指标的通知规则;。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetricNotifyRule(listMetricNotifyRuleRequest?: ListMetricNotifyRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/notify-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let metricName;
            
            let ruleId;
            
            let offset;
            
            let limit;

            if (listMetricNotifyRuleRequest !== null && listMetricNotifyRuleRequest !== undefined) {
                if (listMetricNotifyRuleRequest instanceof ListMetricNotifyRuleRequest) {
                    metricName = listMetricNotifyRuleRequest.metricName;
                    ruleId = listMetricNotifyRuleRequest.ruleId;
                    offset = listMetricNotifyRuleRequest.offset;
                    limit = listMetricNotifyRuleRequest.limit;
                } else {
                    metricName = listMetricNotifyRuleRequest['metric_name'];
                    ruleId = listMetricNotifyRuleRequest['rule_id'];
                    offset = listMetricNotifyRuleRequest['offset'];
                    limit = listMetricNotifyRuleRequest['limit'];
                }
            }

        
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (ruleId !== null && ruleId !== undefined) {
                localVarQueryParameter['rule_id'] = ruleId;
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
         * 查询指标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetrics(listMetricsRequest?: ListMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let metricNames;
            
            let dim;
            
            let period;

            if (listMetricsRequest !== null && listMetricsRequest !== undefined) {
                if (listMetricsRequest instanceof ListMetricsRequest) {
                    startTime = listMetricsRequest.startTime;
                    endTime = listMetricsRequest.endTime;
                    metricNames = listMetricsRequest.metricNames;
                    dim = listMetricsRequest.dim;
                    period = listMetricsRequest.period;
                } else {
                    startTime = listMetricsRequest['start_time'];
                    endTime = listMetricsRequest['end_time'];
                    metricNames = listMetricsRequest['metric_names'];
                    dim = listMetricsRequest['dim'];
                    period = listMetricsRequest['period'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listMetrics.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listMetrics.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (metricNames === null || metricNames === undefined) {
                throw new RequiredError('metricNames','Required parameter metricNames was null or undefined when calling listMetrics.');
            }
            if (metricNames !== null && metricNames !== undefined) {
                localVarQueryParameter['metric_names'] = metricNames;
            }
            if (dim !== null && dim !== undefined) {
                localVarQueryParameter['dim'] = dim;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指标趋势。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetricsTrend(listMetricsTrendRequest?: ListMetricsTrendRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/metrics/trend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let metricNames;
            
            let dim;
            
            let period;

            if (listMetricsTrendRequest !== null && listMetricsTrendRequest !== undefined) {
                if (listMetricsTrendRequest instanceof ListMetricsTrendRequest) {
                    startTime = listMetricsTrendRequest.startTime;
                    endTime = listMetricsTrendRequest.endTime;
                    metricNames = listMetricsTrendRequest.metricNames;
                    dim = listMetricsTrendRequest.dim;
                    period = listMetricsTrendRequest.period;
                } else {
                    startTime = listMetricsTrendRequest['start_time'];
                    endTime = listMetricsTrendRequest['end_time'];
                    metricNames = listMetricsTrendRequest['metric_names'];
                    dim = listMetricsTrendRequest['dim'];
                    period = listMetricsTrendRequest['period'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listMetricsTrend.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listMetricsTrend.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (metricNames === null || metricNames === undefined) {
                throw new RequiredError('metricNames','Required parameter metricNames was null or undefined when calling listMetricsTrend.');
            }
            if (metricNames !== null && metricNames !== undefined) {
                localVarQueryParameter['metric_names'] = metricNames;
            }
            if (dim !== null && dim !== undefined) {
                localVarQueryParameter['dim'] = dim;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 租户桌面运行状态统计。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRunState() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/statistics/run-state",
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
         * 查询在指定时间段未使用的桌面。已废弃，不推荐使用。统计数据推荐使用[查询桌面使用情况统计数据接口](https://console.huaweicloud.com/apiexplorer/#/openapi/Workspace/doc?api&#x3D;ListDesktopUsageMetric)和[查询用户使用统计数据接口](https://console.huaweicloud.com/apiexplorer/#/openapi/Workspace/doc?api&#x3D;ListUserUsageMetric)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUnusedDesktops(listUnusedDesktopsRequest?: ListUnusedDesktopsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/desktops/statistics/unused",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let startTime;
            
            let endTime;

            if (listUnusedDesktopsRequest !== null && listUnusedDesktopsRequest !== undefined) {
                if (listUnusedDesktopsRequest instanceof ListUnusedDesktopsRequest) {
                    offset = listUnusedDesktopsRequest.offset;
                    limit = listUnusedDesktopsRequest.limit;
                    startTime = listUnusedDesktopsRequest.startTime;
                    endTime = listUnusedDesktopsRequest.endTime;
                } else {
                    offset = listUnusedDesktopsRequest['offset'];
                    limit = listUnusedDesktopsRequest['limit'];
                    startTime = listUnusedDesktopsRequest['start_time'];
                    endTime = listUnusedDesktopsRequest['end_time'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
         * 查询使用桌面的时长。已废弃，不推荐使用。统计数据推荐使用[查询桌面使用情况统计数据接口](https://console.huaweicloud.com/apiexplorer/#/openapi/Workspace/doc?api&#x3D;ListDesktopUsageMetric)和[查询用户使用统计数据接口](https://console.huaweicloud.com/apiexplorer/#/openapi/Workspace/doc?api&#x3D;ListUserUsageMetric)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsedDesktopInfo(listUsedDesktopInfoRequest?: ListUsedDesktopInfoRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/statistics/used",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listUsedDesktopInfoRequest !== null && listUsedDesktopInfoRequest !== undefined) {
                if (listUsedDesktopInfoRequest instanceof ListUsedDesktopInfoRequest) {
                    body = listUsedDesktopInfoRequest.body
                } else {
                    body = listUsedDesktopInfoRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户使用统计信息;
         * 最多查询30天内的数据;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserUsageMetric(listUserUsageMetricRequest?: ListUserUsageMetricRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/metrics/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let username;
            
            let usageMinHours;
            
            let usageMaxHours;
            
            let sortField;
            
            let sortType;
            
            let offset;
            
            let limit;

            if (listUserUsageMetricRequest !== null && listUserUsageMetricRequest !== undefined) {
                if (listUserUsageMetricRequest instanceof ListUserUsageMetricRequest) {
                    startTime = listUserUsageMetricRequest.startTime;
                    endTime = listUserUsageMetricRequest.endTime;
                    username = listUserUsageMetricRequest.username;
                    usageMinHours = listUserUsageMetricRequest.usageMinHours;
                    usageMaxHours = listUserUsageMetricRequest.usageMaxHours;
                    sortField = listUserUsageMetricRequest.sortField;
                    sortType = listUserUsageMetricRequest.sortType;
                    offset = listUserUsageMetricRequest.offset;
                    limit = listUserUsageMetricRequest.limit;
                } else {
                    startTime = listUserUsageMetricRequest['start_time'];
                    endTime = listUserUsageMetricRequest['end_time'];
                    username = listUserUsageMetricRequest['username'];
                    usageMinHours = listUserUsageMetricRequest['usage_min_hours'];
                    usageMaxHours = listUserUsageMetricRequest['usage_max_hours'];
                    sortField = listUserUsageMetricRequest['sort_field'];
                    sortType = listUserUsageMetricRequest['sort_type'];
                    offset = listUserUsageMetricRequest['offset'];
                    limit = listUserUsageMetricRequest['limit'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listUserUsageMetric.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listUserUsageMetric.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (username !== null && username !== undefined) {
                localVarQueryParameter['username'] = username;
            }
            if (usageMinHours !== null && usageMinHours !== undefined) {
                localVarQueryParameter['usage_min_hours'] = usageMinHours;
            }
            if (usageMaxHours !== null && usageMaxHours !== undefined) {
                localVarQueryParameter['usage_max_hours'] = usageMaxHours;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
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
         * 查询指标环比值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGrowthRate(showGrowthRateRequest?: ShowGrowthRateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/growth-rate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let metricName;
            
            let growPeriod;
            
            let dim;

            if (showGrowthRateRequest !== null && showGrowthRateRequest !== undefined) {
                if (showGrowthRateRequest instanceof ShowGrowthRateRequest) {
                    metricName = showGrowthRateRequest.metricName;
                    growPeriod = showGrowthRateRequest.growPeriod;
                    dim = showGrowthRateRequest.dim;
                } else {
                    metricName = showGrowthRateRequest['metric_name'];
                    growPeriod = showGrowthRateRequest['grow_period'];
                    dim = showGrowthRateRequest['dim'];
                }
            }

        
            if (metricName === null || metricName === undefined) {
                throw new RequiredError('metricName','Required parameter metricName was null or undefined when calling showGrowthRate.');
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (growPeriod !== null && growPeriod !== undefined) {
                localVarQueryParameter['grow_period'] = growPeriod;
            }
            if (dim !== null && dim !== undefined) {
                localVarQueryParameter['dim'] = dim;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询接入云桌面或云应用各阶段时长数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserAccessStages(showUserAccessStagesRequest?: ShowUserAccessStagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/metrics/access-stages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let transactionId;

            if (showUserAccessStagesRequest !== null && showUserAccessStagesRequest !== undefined) {
                if (showUserAccessStagesRequest instanceof ShowUserAccessStagesRequest) {
                    transactionId = showUserAccessStagesRequest.transactionId;
                } else {
                    transactionId = showUserAccessStagesRequest['transaction_id'];
                }
            }

        
            if (transactionId === null || transactionId === undefined) {
                throw new RequiredError('transactionId','Required parameter transactionId was null or undefined when calling showUserAccessStages.');
            }
            if (transactionId !== null && transactionId !== undefined) {
                localVarQueryParameter['transaction_id'] = transactionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新对应指标的通知规则;对应指标满足相应的规则条件时发送通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMetricNotifyRule(updateMetricNotifyRuleRequest?: UpdateMetricNotifyRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/statistics/notify-rules/{rule_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleId;

            if (updateMetricNotifyRuleRequest !== null && updateMetricNotifyRuleRequest !== undefined) {
                if (updateMetricNotifyRuleRequest instanceof UpdateMetricNotifyRuleRequest) {
                    ruleId = updateMetricNotifyRuleRequest.ruleId;
                    body = updateMetricNotifyRuleRequest.body
                } else {
                    ruleId = updateMetricNotifyRuleRequest['rule_id'];
                    body = updateMetricNotifyRuleRequest['body'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateMetricNotifyRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据子网id查询该子网下可用的ip。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAvailableIp(showAvailableIpRequest?: ShowAvailableIpRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/subnets/{subnet_id}/available-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subnetId;

            if (showAvailableIpRequest !== null && showAvailableIpRequest !== undefined) {
                if (showAvailableIpRequest instanceof ShowAvailableIpRequest) {
                    subnetId = showAvailableIpRequest.subnetId;
                } else {
                    subnetId = showAvailableIpRequest['subnet_id'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling showAvailableIp.');
            }

            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户个性配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTenantConfigs(listTenantConfigsRequest?: ListTenantConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tenant-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;

            if (listTenantConfigsRequest !== null && listTenantConfigsRequest !== undefined) {
                if (listTenantConfigsRequest instanceof ListTenantConfigsRequest) {
                    name = listTenantConfigsRequest.name;
                } else {
                    name = listTenantConfigsRequest['name'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 租户个性配置修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTenantConfig(updateTenantConfigRequest?: UpdateTenantConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/tenant-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTenantConfigRequest !== null && updateTenantConfigRequest !== undefined) {
                if (updateTenantConfigRequest instanceof UpdateTenantConfigRequest) {
                    body = updateTenantConfigRequest.body
                } else {
                    body = updateTenantConfigRequest['body'];
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
         * 增加终端与桌面绑定配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTerminalsBindingDesktops(createTerminalsBindingDesktopsRequest?: CreateTerminalsBindingDesktopsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/terminals/binding-desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTerminalsBindingDesktopsRequest !== null && createTerminalsBindingDesktopsRequest !== undefined) {
                if (createTerminalsBindingDesktopsRequest instanceof CreateTerminalsBindingDesktopsRequest) {
                    body = createTerminalsBindingDesktopsRequest.body
                } else {
                    body = createTerminalsBindingDesktopsRequest['body'];
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
         * 删除终端与桌面绑定配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTerminalsBindingDesktops(deleteTerminalsBindingDesktopsRequest?: DeleteTerminalsBindingDesktopsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/terminals/binding-desktops/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteTerminalsBindingDesktopsRequest !== null && deleteTerminalsBindingDesktopsRequest !== undefined) {
                if (deleteTerminalsBindingDesktopsRequest instanceof DeleteTerminalsBindingDesktopsRequest) {
                    body = deleteTerminalsBindingDesktopsRequest.body
                } else {
                    body = deleteTerminalsBindingDesktopsRequest['body'];
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
         * 查询终端与桌面绑定配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTerminalsBindingDesktops(listTerminalsBindingDesktopsRequest?: ListTerminalsBindingDesktopsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/terminals/binding-desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let computerName;
            
            let mac;
            
            let countOnly;

            if (listTerminalsBindingDesktopsRequest !== null && listTerminalsBindingDesktopsRequest !== undefined) {
                if (listTerminalsBindingDesktopsRequest instanceof ListTerminalsBindingDesktopsRequest) {
                    offset = listTerminalsBindingDesktopsRequest.offset;
                    limit = listTerminalsBindingDesktopsRequest.limit;
                    computerName = listTerminalsBindingDesktopsRequest.computerName;
                    mac = listTerminalsBindingDesktopsRequest.mac;
                    countOnly = listTerminalsBindingDesktopsRequest.countOnly;
                } else {
                    offset = listTerminalsBindingDesktopsRequest['offset'];
                    limit = listTerminalsBindingDesktopsRequest['limit'];
                    computerName = listTerminalsBindingDesktopsRequest['computer_name'];
                    mac = listTerminalsBindingDesktopsRequest['mac'];
                    countOnly = listTerminalsBindingDesktopsRequest['count_only'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listTerminalsBindingDesktops.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listTerminalsBindingDesktops.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (computerName !== null && computerName !== undefined) {
                localVarQueryParameter['computer_name'] = computerName;
            }
            if (mac !== null && mac !== undefined) {
                localVarQueryParameter['mac'] = mac;
            }
            if (countOnly !== null && countOnly !== undefined) {
                localVarQueryParameter['count_only'] = countOnly;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端与桌面绑定的开关配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTerminalsBindingDesktopsConfig() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/terminals/binding-desktops/config",
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
         * 修改终端与桌面绑定配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTerminalsBindingDesktops(updateTerminalsBindingDesktopsRequest?: UpdateTerminalsBindingDesktopsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/terminals/binding-desktops",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTerminalsBindingDesktopsRequest !== null && updateTerminalsBindingDesktopsRequest !== undefined) {
                if (updateTerminalsBindingDesktopsRequest instanceof UpdateTerminalsBindingDesktopsRequest) {
                    body = updateTerminalsBindingDesktopsRequest.body
                } else {
                    body = updateTerminalsBindingDesktopsRequest['body'];
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
         * 设置终端与桌面绑定的开关配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTerminalsBindingDesktopsConfig(updateTerminalsBindingDesktopsConfigRequest?: UpdateTerminalsBindingDesktopsConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/terminals/binding-desktops/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTerminalsBindingDesktopsConfigRequest !== null && updateTerminalsBindingDesktopsConfigRequest !== undefined) {
                if (updateTerminalsBindingDesktopsConfigRequest instanceof UpdateTerminalsBindingDesktopsConfigRequest) {
                    body = updateTerminalsBindingDesktopsConfigRequest.body
                } else {
                    body = updateTerminalsBindingDesktopsConfigRequest['body'];
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
         * 该接口用于批量创建用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateUsers(batchCreateUsersRequest?: BatchCreateUsersRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/users/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateUsersRequest !== null && batchCreateUsersRequest !== undefined) {
                if (batchCreateUsersRequest instanceof BatchCreateUsersRequest) {
                    body = batchCreateUsersRequest.body
                } else {
                    body = batchCreateUsersRequest['body'];
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
         * 该接口用于解绑用户的OTP设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteOtpDevices(batchDeleteOtpDevicesRequest?: BatchDeleteOtpDevicesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/users/{user_id}/otp-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let userId;

            if (batchDeleteOtpDevicesRequest !== null && batchDeleteOtpDevicesRequest !== undefined) {
                if (batchDeleteOtpDevicesRequest instanceof BatchDeleteOtpDevicesRequest) {
                    userId = batchDeleteOtpDevicesRequest.userId;
                    body = batchDeleteOtpDevicesRequest.body
                } else {
                    userId = batchDeleteOtpDevicesRequest['user_id'];
                    body = batchDeleteOtpDevicesRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling batchDeleteOtpDevices.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于批量删除桌面用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteUser(batchDeleteUserRequest?: BatchDeleteUserRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/users/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteUserRequest !== null && batchDeleteUserRequest !== undefined) {
                if (batchDeleteUserRequest instanceof BatchDeleteUserRequest) {
                    body = batchDeleteUserRequest.body
                } else {
                    body = batchDeleteUserRequest['body'];
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
         * 该接口用于操作用户，包含三种操作：锁定、解锁和重置密码（重置密码建议使用/v2/{project_id}/users/{user_id}/random-password接口，在没有通知方式的情况下必须使用/v2/{project_id}/users/{user_id}/random-password接口）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeUserStatus(changeUserStatusRequest?: ChangeUserStatusRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/users/{user_id}/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let userId;

            if (changeUserStatusRequest !== null && changeUserStatusRequest !== undefined) {
                if (changeUserStatusRequest instanceof ChangeUserStatusRequest) {
                    userId = changeUserStatusRequest.userId;
                    body = changeUserStatusRequest.body
                } else {
                    userId = changeUserStatusRequest['user_id'];
                    body = changeUserStatusRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling changeUserStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建桌面用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDesktopUser(createDesktopUserRequest?: CreateDesktopUserRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDesktopUserRequest !== null && createDesktopUserRequest !== undefined) {
                if (createDesktopUserRequest instanceof CreateDesktopUserRequest) {
                    body = createDesktopUserRequest.body
                } else {
                    body = createDesktopUserRequest['body'];
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
         * 删除指定的桌面用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUser(deleteUserRequest?: DeleteUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (deleteUserRequest !== null && deleteUserRequest !== undefined) {
                if (deleteUserRequest instanceof DeleteUserRequest) {
                    userId = deleteUserRequest.userId;
                } else {
                    userId = deleteUserRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteUser.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询相应用户下面的OTP设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOtpDevicesByUserId(listOtpDevicesByUserIdRequest?: ListOtpDevicesByUserIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/users/{user_id}/otp-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (listOtpDevicesByUserIdRequest !== null && listOtpDevicesByUserIdRequest !== undefined) {
                if (listOtpDevicesByUserIdRequest instanceof ListOtpDevicesByUserIdRequest) {
                    userId = listOtpDevicesByUserIdRequest.userId;
                } else {
                    userId = listOtpDevicesByUserIdRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling listOtpDevicesByUserId.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定的桌面用户详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserDetail(listUserDetailRequest?: ListUserDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (listUserDetailRequest !== null && listUserDetailRequest !== undefined) {
                if (listUserDetailRequest instanceof ListUserDetailRequest) {
                    userId = listUserDetailRequest.userId;
                } else {
                    userId = listUserDetailRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling listUserDetail.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询桌面用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsers(listUsersRequest?: ListUsersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;
            
            let limit;
            
            let offset;
            
            let description;
            
            let activeType;
            
            let groupName;
            
            let shareSpaceSubscription;
            
            let shareSpaceDesktops;
            
            let isQueryTotalDesktops;
            
            let enterpriseProjectId;

            if (listUsersRequest !== null && listUsersRequest !== undefined) {
                if (listUsersRequest instanceof ListUsersRequest) {
                    userName = listUsersRequest.userName;
                    limit = listUsersRequest.limit;
                    offset = listUsersRequest.offset;
                    description = listUsersRequest.description;
                    activeType = listUsersRequest.activeType;
                    groupName = listUsersRequest.groupName;
                    shareSpaceSubscription = listUsersRequest.shareSpaceSubscription;
                    shareSpaceDesktops = listUsersRequest.shareSpaceDesktops;
                    isQueryTotalDesktops = listUsersRequest.isQueryTotalDesktops;
                    enterpriseProjectId = listUsersRequest.enterpriseProjectId;
                } else {
                    userName = listUsersRequest['user_name'];
                    limit = listUsersRequest['limit'];
                    offset = listUsersRequest['offset'];
                    description = listUsersRequest['description'];
                    activeType = listUsersRequest['active_type'];
                    groupName = listUsersRequest['group_name'];
                    shareSpaceSubscription = listUsersRequest['share_space_subscription'];
                    shareSpaceDesktops = listUsersRequest['share_space_desktops'];
                    isQueryTotalDesktops = listUsersRequest['is_query_total_desktops'];
                    enterpriseProjectId = listUsersRequest['enterprise_project_id'];
                }
            }

        
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (activeType !== null && activeType !== undefined) {
                localVarQueryParameter['active_type'] = activeType;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (shareSpaceSubscription !== null && shareSpaceSubscription !== undefined) {
                localVarQueryParameter['share_space_subscription'] = shareSpaceSubscription;
            }
            if (shareSpaceDesktops !== null && shareSpaceDesktops !== undefined) {
                localVarQueryParameter['share_space_desktops'] = shareSpaceDesktops;
            }
            if (isQueryTotalDesktops !== null && isQueryTotalDesktops !== undefined) {
                localVarQueryParameter['is_query_total_desktops'] = isQueryTotalDesktops;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于给用户重置一个密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetRandomPassword(resetRandomPasswordRequest?: ResetRandomPasswordRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/users/{user_id}/random-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;
            
            let notificationType;

            if (resetRandomPasswordRequest !== null && resetRandomPasswordRequest !== undefined) {
                if (resetRandomPasswordRequest instanceof ResetRandomPasswordRequest) {
                    userId = resetRandomPasswordRequest.userId;
                    notificationType = resetRandomPasswordRequest.notificationType;
                } else {
                    userId = resetRandomPasswordRequest['user_id'];
                    notificationType = resetRandomPasswordRequest['notification_type'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling resetRandomPassword.');
            }
            if (notificationType !== null && notificationType !== undefined) {
                localVarQueryParameter['notification_type'] = notificationType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于重新发送邮件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendEmail(sendEmailRequest?: SendEmailRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/users/{user_id}/resend-email",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let userId;

            if (sendEmailRequest !== null && sendEmailRequest !== undefined) {
                if (sendEmailRequest instanceof SendEmailRequest) {
                    userId = sendEmailRequest.userId;
                    body = sendEmailRequest.body
                } else {
                    userId = sendEmailRequest['user_id'];
                    body = sendEmailRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling sendEmail.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改桌面用户信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUserInfo(updateUserInfoRequest?: UpdateUserInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let userId;

            if (updateUserInfoRequest !== null && updateUserInfoRequest !== undefined) {
                if (updateUserInfoRequest instanceof UpdateUserInfoRequest) {
                    userId = updateUserInfoRequest.userId;
                    body = updateUserInfoRequest.body
                } else {
                    userId = updateUserInfoRequest['user_id'];
                    body = updateUserInfoRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateUserInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户事件，一次最多查询30天，支持最近30天的数据查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserEvents(listUserEventsRequest?: ListUserEventsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/user-events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let username;
            
            let eventType;
            
            let resourceId;
            
            let resourceName;
            
            let offset;
            
            let limit;

            if (listUserEventsRequest !== null && listUserEventsRequest !== undefined) {
                if (listUserEventsRequest instanceof ListUserEventsRequest) {
                    startTime = listUserEventsRequest.startTime;
                    endTime = listUserEventsRequest.endTime;
                    username = listUserEventsRequest.username;
                    eventType = listUserEventsRequest.eventType;
                    resourceId = listUserEventsRequest.resourceId;
                    resourceName = listUserEventsRequest.resourceName;
                    offset = listUserEventsRequest.offset;
                    limit = listUserEventsRequest.limit;
                } else {
                    startTime = listUserEventsRequest['start_time'];
                    endTime = listUserEventsRequest['end_time'];
                    username = listUserEventsRequest['username'];
                    eventType = listUserEventsRequest['event_type'];
                    resourceId = listUserEventsRequest['resource_id'];
                    resourceName = listUserEventsRequest['resource_name'];
                    offset = listUserEventsRequest['offset'];
                    limit = listUserEventsRequest['limit'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listUserEvents.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listUserEvents.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (username !== null && username !== undefined) {
                localVarQueryParameter['username'] = username;
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
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
         * 查询用户事件LTS配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserEventsLtsConfigurations() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/user-events/lts-configurations",
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
         * 配置用户事件LTS。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setUserEventsLtsConfigurations(setUserEventsLtsConfigurationsRequest?: SetUserEventsLtsConfigurationsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/user-events/lts-configurations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setUserEventsLtsConfigurationsRequest !== null && setUserEventsLtsConfigurationsRequest !== undefined) {
                if (setUserEventsLtsConfigurationsRequest instanceof SetUserEventsLtsConfigurationsRequest) {
                    body = setUserEventsLtsConfigurationsRequest.body
                } else {
                    body = setUserEventsLtsConfigurationsRequest['body'];
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
         * 给单个桌面增加磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDesktopVolumes(addDesktopVolumesRequest?: AddDesktopVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/{desktop_id}/volumes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let desktopId;

            if (addDesktopVolumesRequest !== null && addDesktopVolumesRequest !== undefined) {
                if (addDesktopVolumesRequest instanceof AddDesktopVolumesRequest) {
                    desktopId = addDesktopVolumesRequest.desktopId;
                    body = addDesktopVolumesRequest.body
                } else {
                    desktopId = addDesktopVolumesRequest['desktop_id'];
                    body = addDesktopVolumesRequest['body'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling addDesktopVolumes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量增加桌面磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addVolumes(addVolumesRequest?: AddVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/volumes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addVolumesRequest !== null && addVolumesRequest !== undefined) {
                if (addVolumesRequest instanceof AddVolumesRequest) {
                    body = addVolumesRequest.body
                } else {
                    body = addVolumesRequest['body'];
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
         * 删除桌面数据盘，删除后无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDesktopVolumes(deleteDesktopVolumesRequest?: DeleteDesktopVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/{desktop_id}/volumes/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let desktopId;

            if (deleteDesktopVolumesRequest !== null && deleteDesktopVolumesRequest !== undefined) {
                if (deleteDesktopVolumesRequest instanceof DeleteDesktopVolumesRequest) {
                    desktopId = deleteDesktopVolumesRequest.desktopId;
                    body = deleteDesktopVolumesRequest.body
                } else {
                    desktopId = deleteDesktopVolumesRequest['desktop_id'];
                    body = deleteDesktopVolumesRequest['body'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling deleteDesktopVolumes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'desktop_id': desktopId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandDesktopVolume(expandDesktopVolumeRequest?: ExpandDesktopVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/desktops/{desktop_id}/volumes/{volume_id}/expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let desktopId;
            
            let volumeId;

            if (expandDesktopVolumeRequest !== null && expandDesktopVolumeRequest !== undefined) {
                if (expandDesktopVolumeRequest instanceof ExpandDesktopVolumeRequest) {
                    desktopId = expandDesktopVolumeRequest.desktopId;
                    volumeId = expandDesktopVolumeRequest.volumeId;
                    body = expandDesktopVolumeRequest.body
                } else {
                    desktopId = expandDesktopVolumeRequest['desktop_id'];
                    volumeId = expandDesktopVolumeRequest['volume_id'];
                    body = expandDesktopVolumeRequest['body'];
                }
            }

        
            if (desktopId === null || desktopId === undefined) {
            throw new RequiredError('desktopId','Required parameter desktopId was null or undefined when calling expandDesktopVolume.');
            }
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling expandDesktopVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'desktop_id': desktopId,'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容桌面磁盘。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandVolumes(expandVolumesRequest?: ExpandVolumesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/volumes/expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (expandVolumesRequest !== null && expandVolumesRequest !== undefined) {
                if (expandVolumesRequest instanceof ExpandVolumesRequest) {
                    body = expandVolumesRequest.body
                } else {
                    body = expandVolumesRequest['body'];
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
         * 查询磁盘产品信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVolumeProductInfo(listVolumeProductInfoRequest?: ListVolumeProductInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/volume/products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let availabilityZone;
            
            let volumeType;

            if (listVolumeProductInfoRequest !== null && listVolumeProductInfoRequest !== undefined) {
                if (listVolumeProductInfoRequest instanceof ListVolumeProductInfoRequest) {
                    availabilityZone = listVolumeProductInfoRequest.availabilityZone;
                    volumeType = listVolumeProductInfoRequest.volumeType;
                } else {
                    availabilityZone = listVolumeProductInfoRequest['availability_zone'];
                    volumeType = listVolumeProductInfoRequest['volume_type'];
                }
            }

        
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (volumeType !== null && volumeType !== undefined) {
                localVarQueryParameter['volume_type'] = volumeType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于开通云办公服务。
         * 
         * 作为异步接口，调用成功说明云办公服务后台收到了开通请求，但服务是否开通成功需要通过任务查询接口(GET /v2/{project_id}/workspace-sub-jobs)查询该任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyWorkspace(applyWorkspaceRequest?: ApplyWorkspaceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (applyWorkspaceRequest !== null && applyWorkspaceRequest !== undefined) {
                if (applyWorkspaceRequest instanceof ApplyWorkspaceRequest) {
                    body = applyWorkspaceRequest.body
                } else {
                    body = applyWorkspaceRequest['body'];
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
         * 该接口用于注销云办公服务。注销前请确保当前用户下的云桌面已经删除，注销后无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelWorkspace() {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces",
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
         * 该接口用于查询云办公服务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkspaces() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces",
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
         * 查询云办公服务是否被锁定。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkspaceLock() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/lock-status",
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
         * 该接口目前支持解除云办公服务锁定状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unlockWorkspace(unlockWorkspaceRequest?: UnlockWorkspaceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/lock-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (unlockWorkspaceRequest !== null && unlockWorkspaceRequest !== undefined) {
                if (unlockWorkspaceRequest instanceof UnlockWorkspaceRequest) {
                    body = unlockWorkspaceRequest.body
                } else {
                    body = unlockWorkspaceRequest['body'];
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
         * 修改租户的企业ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnterpriseId(updateEnterpriseIdRequest?: UpdateEnterpriseIdRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/enterprise-id",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateEnterpriseIdRequest !== null && updateEnterpriseIdRequest !== undefined) {
                if (updateEnterpriseIdRequest instanceof UpdateEnterpriseIdRequest) {
                    body = updateEnterpriseIdRequest.body
                } else {
                    body = updateEnterpriseIdRequest['body'];
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
         * 该接口目前支持修改云办公服务属性。单次请求仅支持修改一种属性类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkspace(updateWorkspaceRequest?: UpdateWorkspaceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateWorkspaceRequest !== null && updateWorkspaceRequest !== undefined) {
                if (updateWorkspaceRequest instanceof UpdateWorkspaceRequest) {
                    body = updateWorkspaceRequest.body
                } else {
                    body = updateWorkspaceRequest['body'];
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
    
    }
};

function newClient(client: HcClient): WorkspaceClient {
    return new WorkspaceClient(client);
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