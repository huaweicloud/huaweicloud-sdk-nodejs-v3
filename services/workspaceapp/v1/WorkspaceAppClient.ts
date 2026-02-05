import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AccountInfo } from './model/AccountInfo';
import { AccountTypeEnum } from './model/AccountTypeEnum';
import { AddAppGroupAuthorizationRequest } from './model/AddAppGroupAuthorizationRequest';
import { AddAppGroupAuthorizationResponse } from './model/AddAppGroupAuthorizationResponse';
import { AddVolumes } from './model/AddVolumes';
import { App } from './model/App';
import { AppCategoryEnum } from './model/AppCategoryEnum';
import { AppConnectionInfo } from './model/AppConnectionInfo';
import { AppExtendedInfo } from './model/AppExtendedInfo';
import { AppGroup } from './model/AppGroup';
import { AppGroupAuthorizeReq } from './model/AppGroupAuthorizeReq';
import { AppServer } from './model/AppServer';
import { AppServerStatus } from './model/AppServerStatus';
import { AppServerTaskStatus } from './model/AppServerTaskStatus';
import { AppSession } from './model/AppSession';
import { AppStateEnum } from './model/AppStateEnum';
import { AppTypeEnum } from './model/AppTypeEnum';
import { AssignShareFolderReq } from './model/AssignShareFolderReq';
import { AssignUserFolderReq } from './model/AssignUserFolderReq';
import { Assignment } from './model/Assignment';
import { AttachImageServerAppRequest } from './model/AttachImageServerAppRequest';
import { AttachImageServerAppResponse } from './model/AttachImageServerAppResponse';
import { AttachServerAppInfo } from './model/AttachServerAppInfo';
import { AttachServerAppReq } from './model/AttachServerAppReq';
import { AttachType } from './model/AttachType';
import { Attachment } from './model/Attachment';
import { Authorization } from './model/Authorization';
import { AuthorizationMail } from './model/AuthorizationMail';
import { AuthorizationTypeEnum } from './model/AuthorizationTypeEnum';
import { AuthorizeObsReq } from './model/AuthorizeObsReq';
import { AuthorizeObsRequest } from './model/AuthorizeObsRequest';
import { AuthorizeObsResponse } from './model/AuthorizeObsResponse';
import { AutoLogoutOptions } from './model/AutoLogoutOptions';
import { AvailabilityZoneInfo } from './model/AvailabilityZoneInfo';
import { Bandwidth } from './model/Bandwidth';
import { BaseAppGroup } from './model/BaseAppGroup';
import { BaseServer } from './model/BaseServer';
import { BaseServerGroup } from './model/BaseServerGroup';
import { BatchChangeMaintainServerReq } from './model/BatchChangeMaintainServerReq';
import { BatchChangeServerImageReq } from './model/BatchChangeServerImageReq';
import { BatchChangeServerImageRequest } from './model/BatchChangeServerImageRequest';
import { BatchChangeServerImageResponse } from './model/BatchChangeServerImageResponse';
import { BatchChangeServerMaintainModeRequest } from './model/BatchChangeServerMaintainModeRequest';
import { BatchChangeServerMaintainModeResponse } from './model/BatchChangeServerMaintainModeResponse';
import { BatchCreateServerGroupTagsReq } from './model/BatchCreateServerGroupTagsReq';
import { BatchCreateServerGroupTagsRequest } from './model/BatchCreateServerGroupTagsRequest';
import { BatchCreateServerGroupTagsResponse } from './model/BatchCreateServerGroupTagsResponse';
import { BatchDeleteAppGroupAuthorizationRequest } from './model/BatchDeleteAppGroupAuthorizationRequest';
import { BatchDeleteAppGroupAuthorizationResponse } from './model/BatchDeleteAppGroupAuthorizationResponse';
import { BatchDeleteAppGroupRequest } from './model/BatchDeleteAppGroupRequest';
import { BatchDeleteAppGroupResponse } from './model/BatchDeleteAppGroupResponse';
import { BatchDeleteAppSubJobsRequest } from './model/BatchDeleteAppSubJobsRequest';
import { BatchDeleteAppSubJobsResponse } from './model/BatchDeleteAppSubJobsResponse';
import { BatchDeleteCloudStorageReq } from './model/BatchDeleteCloudStorageReq';
import { BatchDeleteCloudStorageRequest } from './model/BatchDeleteCloudStorageRequest';
import { BatchDeleteCloudStorageResponse } from './model/BatchDeleteCloudStorageResponse';
import { BatchDeleteImageServerReq } from './model/BatchDeleteImageServerReq';
import { BatchDeleteImageServerRequest } from './model/BatchDeleteImageServerRequest';
import { BatchDeleteImageServerResponse } from './model/BatchDeleteImageServerResponse';
import { BatchDeleteImageSubJobsRequest } from './model/BatchDeleteImageSubJobsRequest';
import { BatchDeleteImageSubJobsResponse } from './model/BatchDeleteImageSubJobsResponse';
import { BatchDeletePersistentStorageReq } from './model/BatchDeletePersistentStorageReq';
import { BatchDeletePersistentStorageRequest } from './model/BatchDeletePersistentStorageRequest';
import { BatchDeletePersistentStorageResponse } from './model/BatchDeletePersistentStorageResponse';
import { BatchDeleteScheduleTaskReq } from './model/BatchDeleteScheduleTaskReq';
import { BatchDeleteScheduleTaskRequest } from './model/BatchDeleteScheduleTaskRequest';
import { BatchDeleteScheduleTaskResponse } from './model/BatchDeleteScheduleTaskResponse';
import { BatchDeleteServerGroupTagsReq } from './model/BatchDeleteServerGroupTagsReq';
import { BatchDeleteServerGroupTagsRequest } from './model/BatchDeleteServerGroupTagsRequest';
import { BatchDeleteServerGroupTagsResponse } from './model/BatchDeleteServerGroupTagsResponse';
import { BatchDeleteServerReq } from './model/BatchDeleteServerReq';
import { BatchDeleteServerRequest } from './model/BatchDeleteServerRequest';
import { BatchDeleteServerResponse } from './model/BatchDeleteServerResponse';
import { BatchDeleteSubJobsReq } from './model/BatchDeleteSubJobsReq';
import { BatchDeleteWarehouseAppReq } from './model/BatchDeleteWarehouseAppReq';
import { BatchDeleteWarehouseAppRequest } from './model/BatchDeleteWarehouseAppRequest';
import { BatchDeleteWarehouseAppResponse } from './model/BatchDeleteWarehouseAppResponse';
import { BatchDisableAppRequest } from './model/BatchDisableAppRequest';
import { BatchDisableAppResponse } from './model/BatchDisableAppResponse';
import { BatchEnableAppRequest } from './model/BatchEnableAppRequest';
import { BatchEnableAppResponse } from './model/BatchEnableAppResponse';
import { BatchMigrateHostsServerRequest } from './model/BatchMigrateHostsServerRequest';
import { BatchMigrateHostsServerResponse } from './model/BatchMigrateHostsServerResponse';
import { BatchMigrateServerReq } from './model/BatchMigrateServerReq';
import { BatchRebootServerRequest } from './model/BatchRebootServerRequest';
import { BatchRebootServerResponse } from './model/BatchRebootServerResponse';
import { BatchReinstallServerReq } from './model/BatchReinstallServerReq';
import { BatchReinstallServerRequest } from './model/BatchReinstallServerRequest';
import { BatchReinstallServerResponse } from './model/BatchReinstallServerResponse';
import { BatchRejoinDomainReq } from './model/BatchRejoinDomainReq';
import { BatchRejoinDomainRequest } from './model/BatchRejoinDomainRequest';
import { BatchRejoinDomainResponse } from './model/BatchRejoinDomainResponse';
import { BatchStartServerReq } from './model/BatchStartServerReq';
import { BatchStartServerRequest } from './model/BatchStartServerRequest';
import { BatchStartServerResponse } from './model/BatchStartServerResponse';
import { BatchStopServerRequest } from './model/BatchStopServerRequest';
import { BatchStopServerResponse } from './model/BatchStopServerResponse';
import { BatchUpdateAppReq } from './model/BatchUpdateAppReq';
import { BatchUpdateTsviRequest } from './model/BatchUpdateTsviRequest';
import { BatchUpdateTsviResponse } from './model/BatchUpdateTsviResponse';
import { BatchUpgradeHdaVersionReq } from './model/BatchUpgradeHdaVersionReq';
import { BatchUpgradeHdaVersionRequest } from './model/BatchUpgradeHdaVersionRequest';
import { BatchUpgradeHdaVersionResponse } from './model/BatchUpgradeHdaVersionResponse';
import { BindAppWarehouseBucketRequest } from './model/BindAppWarehouseBucketRequest';
import { BindAppWarehouseBucketResponse } from './model/BindAppWarehouseBucketResponse';
import { BucketNameReq } from './model/BucketNameReq';
import { CameraBandwidthControlOptions } from './model/CameraBandwidthControlOptions';
import { CameraBandwidthPercentageOptions } from './model/CameraBandwidthPercentageOptions';
import { CameraRedirectionOptions } from './model/CameraRedirectionOptions';
import { CbcFreezeInfo } from './model/CbcFreezeInfo';
import { CbcFreezeScene } from './model/CbcFreezeScene';
import { ChangeCloudStorageAssignmentInfo } from './model/ChangeCloudStorageAssignmentInfo';
import { ChangeClusterReq } from './model/ChangeClusterReq';
import { ChangeClusterRequest } from './model/ChangeClusterRequest';
import { ChangeClusterResponse } from './model/ChangeClusterResponse';
import { ChangeServerImageReq } from './model/ChangeServerImageReq';
import { ChangeServerImageRequest } from './model/ChangeServerImageRequest';
import { ChangeServerImageResponse } from './model/ChangeServerImageResponse';
import { CheckAppGroupReq } from './model/CheckAppGroupReq';
import { CheckAppGroupRequest } from './model/CheckAppGroupRequest';
import { CheckAppGroupResponse } from './model/CheckAppGroupResponse';
import { CheckPublishAppReq } from './model/CheckPublishAppReq';
import { CheckPublishAppRequest } from './model/CheckPublishAppRequest';
import { CheckPublishAppResponse } from './model/CheckPublishAppResponse';
import { CheckQuotaRequest } from './model/CheckQuotaRequest';
import { CheckQuotaResponse } from './model/CheckQuotaResponse';
import { ClaimMode } from './model/ClaimMode';
import { ClipboardBandwidthControlOptions } from './model/ClipboardBandwidthControlOptions';
import { ClipboardBandwidthPercentageOptions } from './model/ClipboardBandwidthPercentageOptions';
import { CloudStorage } from './model/CloudStorage';
import { CloudStorageAssignment } from './model/CloudStorageAssignment';
import { CloudStorageAssignmentCreateInfo } from './model/CloudStorageAssignmentCreateInfo';
import { CloudStorageOptions } from './model/CloudStorageOptions';
import { ComBandwidthControlOptions } from './model/ComBandwidthControlOptions';
import { ComBandwidthPercentageOptions } from './model/ComBandwidthPercentageOptions';
import { ConfigKeyStringSet } from './model/ConfigKeyStringSet';
import { CorpConfigInfo } from './model/CorpConfigInfo';
import { CountImageSubJobsRequest } from './model/CountImageSubJobsRequest';
import { CountImageSubJobsResponse } from './model/CountImageSubJobsResponse';
import { CountSubJobsRequest } from './model/CountSubJobsRequest';
import { CountSubJobsResponse } from './model/CountSubJobsResponse';
import { CreateAppGroupReq } from './model/CreateAppGroupReq';
import { CreateAppGroupRequest } from './model/CreateAppGroupRequest';
import { CreateAppGroupResponse } from './model/CreateAppGroupResponse';
import { CreateAppServerReq } from './model/CreateAppServerReq';
import { CreateAppServersRequest } from './model/CreateAppServersRequest';
import { CreateAppServersResponse } from './model/CreateAppServersResponse';
import { CreateBucketOrAclRequest } from './model/CreateBucketOrAclRequest';
import { CreateBucketOrAclResponse } from './model/CreateBucketOrAclResponse';
import { CreateCloudStorageReq } from './model/CreateCloudStorageReq';
import { CreateCloudStorageRequest } from './model/CreateCloudStorageRequest';
import { CreateCloudStorageResponse } from './model/CreateCloudStorageResponse';
import { CreateHotspotSessionConfigReq } from './model/CreateHotspotSessionConfigReq';
import { CreateHotspotSessionConfigRequest } from './model/CreateHotspotSessionConfigRequest';
import { CreateHotspotSessionConfigResponse } from './model/CreateHotspotSessionConfigResponse';
import { CreateImageServerReq } from './model/CreateImageServerReq';
import { CreateImageServerRequest } from './model/CreateImageServerRequest';
import { CreateImageServerResponse } from './model/CreateImageServerResponse';
import { CreateOrUpdateScalingPolicyReq } from './model/CreateOrUpdateScalingPolicyReq';
import { CreateOrUpdateScalingPolicyRequest } from './model/CreateOrUpdateScalingPolicyRequest';
import { CreateOrUpdateScalingPolicyResponse } from './model/CreateOrUpdateScalingPolicyResponse';
import { CreateOrUpdateStoragePolicyStatementReq } from './model/CreateOrUpdateStoragePolicyStatementReq';
import { CreateOrUpdateStoragePolicyStatementRequest } from './model/CreateOrUpdateStoragePolicyStatementRequest';
import { CreateOrUpdateStoragePolicyStatementResponse } from './model/CreateOrUpdateStoragePolicyStatementResponse';
import { CreateOrderReq } from './model/CreateOrderReq';
import { CreateOrderRequest } from './model/CreateOrderRequest';
import { CreateOrderResponse } from './model/CreateOrderResponse';
import { CreatePersistentStorageReq } from './model/CreatePersistentStorageReq';
import { CreatePersistentStorageRequest } from './model/CreatePersistentStorageRequest';
import { CreatePersistentStorageResponse } from './model/CreatePersistentStorageResponse';
import { CreatePolicyGroupReq } from './model/CreatePolicyGroupReq';
import { CreatePolicyGroupRequest } from './model/CreatePolicyGroupRequest';
import { CreatePolicyGroupResponse } from './model/CreatePolicyGroupResponse';
import { CreatePolicyTemplateReq } from './model/CreatePolicyTemplateReq';
import { CreatePolicyTemplateRequest } from './model/CreatePolicyTemplateRequest';
import { CreatePolicyTemplateResponse } from './model/CreatePolicyTemplateResponse';
import { CreateResourceTagReq } from './model/CreateResourceTagReq';
import { CreateScheduleTaskReq } from './model/CreateScheduleTaskReq';
import { CreateScheduleTaskRequest } from './model/CreateScheduleTaskRequest';
import { CreateScheduleTaskResponse } from './model/CreateScheduleTaskResponse';
import { CreateServerExtendParam } from './model/CreateServerExtendParam';
import { CreateServerGroupReq } from './model/CreateServerGroupReq';
import { CreateServerGroupRequest } from './model/CreateServerGroupRequest';
import { CreateServerGroupResponse } from './model/CreateServerGroupResponse';
import { CreateServerGroupTagsRequest } from './model/CreateServerGroupTagsRequest';
import { CreateServerGroupTagsResponse } from './model/CreateServerGroupTagsResponse';
import { CreateServerImageReq } from './model/CreateServerImageReq';
import { CreateServices } from './model/CreateServices';
import { CreateShareFolderReq } from './model/CreateShareFolderReq';
import { CreateShareFolderRequest } from './model/CreateShareFolderRequest';
import { CreateShareFolderResponse } from './model/CreateShareFolderResponse';
import { CreateUserAssignmentInfo } from './model/CreateUserAssignmentInfo';
import { CreateUserFolderAssignmentRequest } from './model/CreateUserFolderAssignmentRequest';
import { CreateUserFolderAssignmentResponse } from './model/CreateUserFolderAssignmentResponse';
import { CreateUserFolderReq } from './model/CreateUserFolderReq';
import { CreateWarehouseAppReq } from './model/CreateWarehouseAppReq';
import { CreateWarehouseAppRequest } from './model/CreateWarehouseAppRequest';
import { CreateWarehouseAppResponse } from './model/CreateWarehouseAppResponse';
import { CustomOptions } from './model/CustomOptions';
import { DataPoints } from './model/DataPoints';
import { DeleteAppGroupReq } from './model/DeleteAppGroupReq';
import { DeleteAppGroupRequest } from './model/DeleteAppGroupRequest';
import { DeleteAppGroupResponse } from './model/DeleteAppGroupResponse';
import { DeleteAppIconRequest } from './model/DeleteAppIconRequest';
import { DeleteAppIconResponse } from './model/DeleteAppIconResponse';
import { DeleteCloudStorageAttachmentReq } from './model/DeleteCloudStorageAttachmentReq';
import { DeleteCloudStorageAttachmentRequest } from './model/DeleteCloudStorageAttachmentRequest';
import { DeleteCloudStorageAttachmentResponse } from './model/DeleteCloudStorageAttachmentResponse';
import { DeleteCloudStorageRequest } from './model/DeleteCloudStorageRequest';
import { DeleteCloudStorageResponse } from './model/DeleteCloudStorageResponse';
import { DeletePersistentStorageRequest } from './model/DeletePersistentStorageRequest';
import { DeletePersistentStorageResponse } from './model/DeletePersistentStorageResponse';
import { DeletePolicyGroupRequest } from './model/DeletePolicyGroupRequest';
import { DeletePolicyGroupResponse } from './model/DeletePolicyGroupResponse';
import { DeletePolicyTemplateRequest } from './model/DeletePolicyTemplateRequest';
import { DeletePolicyTemplateResponse } from './model/DeletePolicyTemplateResponse';
import { DeleteResourceTagReq } from './model/DeleteResourceTagReq';
import { DeleteScalingPolicyRequest } from './model/DeleteScalingPolicyRequest';
import { DeleteScalingPolicyResponse } from './model/DeleteScalingPolicyResponse';
import { DeleteScheduleTaskRequest } from './model/DeleteScheduleTaskRequest';
import { DeleteScheduleTaskResponse } from './model/DeleteScheduleTaskResponse';
import { DeleteServerGroupTagsRequest } from './model/DeleteServerGroupTagsRequest';
import { DeleteServerGroupTagsResponse } from './model/DeleteServerGroupTagsResponse';
import { DeleteServerGroupsRequest } from './model/DeleteServerGroupsRequest';
import { DeleteServerGroupsResponse } from './model/DeleteServerGroupsResponse';
import { DeleteServerRequest } from './model/DeleteServerRequest';
import { DeleteServerResponse } from './model/DeleteServerResponse';
import { DeleteStorageClaimReq } from './model/DeleteStorageClaimReq';
import { DeleteStorageClaimRequest } from './model/DeleteStorageClaimRequest';
import { DeleteStorageClaimResponse } from './model/DeleteStorageClaimResponse';
import { DeleteUserStorageAttachmentReq } from './model/DeleteUserStorageAttachmentReq';
import { DeleteUserStorageAttachmentRequest } from './model/DeleteUserStorageAttachmentRequest';
import { DeleteUserStorageAttachmentResponse } from './model/DeleteUserStorageAttachmentResponse';
import { DeleteWarehouseAppRequest } from './model/DeleteWarehouseAppRequest';
import { DeleteWarehouseAppResponse } from './model/DeleteWarehouseAppResponse';
import { DisassociateAppGroupRequest } from './model/DisassociateAppGroupRequest';
import { DisassociateAppGroupResponse } from './model/DisassociateAppGroupResponse';
import { DisplayBandwidthControlOptions } from './model/DisplayBandwidthControlOptions';
import { DisplayBandwidthPercentageOptions } from './model/DisplayBandwidthPercentageOptions';
import { DisplayOptions } from './model/DisplayOptions';
import { DisplayOptionsDeepCompressionOptions } from './model/DisplayOptionsDeepCompressionOptions';
import { DisplayOptionsVideoBitRateOptions } from './model/DisplayOptionsVideoBitRateOptions';
import { DisplayOptionsVideoQualityOptions } from './model/DisplayOptionsVideoQualityOptions';
import { EcsNetWork } from './model/EcsNetWork';
import { ExportAppConnectionRequest } from './model/ExportAppConnectionRequest';
import { ExportAppConnectionResponse } from './model/ExportAppConnectionResponse';
import { ExportSessionsReq } from './model/ExportSessionsReq';
import { ExportSessionsRequest } from './model/ExportSessionsRequest';
import { ExportSessionsResponse } from './model/ExportSessionsResponse';
import { ExportUserConnectionRequest } from './model/ExportUserConnectionRequest';
import { ExportUserConnectionResponse } from './model/ExportUserConnectionResponse';
import { ExtraSessionTypeEnum } from './model/ExtraSessionTypeEnum';
import { FileInfo } from './model/FileInfo';
import { FileRedirectionBandwidthControlOptions } from './model/FileRedirectionBandwidthControlOptions';
import { FileRedirectionBandwidthPercentageOptions } from './model/FileRedirectionBandwidthPercentageOptions';
import { FileRedirectionOptions } from './model/FileRedirectionOptions';
import { FileRedirectionOptionsCompressionSwitchOptions } from './model/FileRedirectionOptionsCompressionSwitchOptions';
import { FileRedirectionOptionsFluidControlOptions } from './model/FileRedirectionOptionsFluidControlOptions';
import { FileRedirectionOptionsLinuxFileSizeSupportedOptions } from './model/FileRedirectionOptionsLinuxFileSizeSupportedOptions';
import { Flavor } from './model/Flavor';
import { FlavorLink } from './model/FlavorLink';
import { FolderInfo } from './model/FolderInfo';
import { FolderRedirectionOptions } from './model/FolderRedirectionOptions';
import { HotspotSessionMigrationConfig } from './model/HotspotSessionMigrationConfig';
import { I18n } from './model/I18n';
import { ImageAccountInfo } from './model/ImageAccountInfo';
import { ImageJobDetailInfo } from './model/ImageJobDetailInfo';
import { ImageJobDetailStatus } from './model/ImageJobDetailStatus';
import { ImageJobExecuteInfo } from './model/ImageJobExecuteInfo';
import { ImageJobInfo } from './model/ImageJobInfo';
import { ImageJobResourceInfo } from './model/ImageJobResourceInfo';
import { ImageJobStatus } from './model/ImageJobStatus';
import { ImageJobType } from './model/ImageJobType';
import { ImageRef } from './model/ImageRef';
import { ImageServer } from './model/ImageServer';
import { ImageServerStatus } from './model/ImageServerStatus';
import { ImageTypeEnum } from './model/ImageTypeEnum';
import { InitializeTenantReq } from './model/InitializeTenantReq';
import { InitializeTenantRequest } from './model/InitializeTenantRequest';
import { InitializeTenantResponse } from './model/InitializeTenantResponse';
import { IpVirtual } from './model/IpVirtual';
import { JobDetail } from './model/JobDetail';
import { JobDetailInfo } from './model/JobDetailInfo';
import { JobDetailStatus } from './model/JobDetailStatus';
import { JobIdInfo } from './model/JobIdInfo';
import { JobInfo } from './model/JobInfo';
import { JobResourceInfo } from './model/JobResourceInfo';
import { JobStatus } from './model/JobStatus';
import { JobType } from './model/JobType';
import { LatestVersionInfo } from './model/LatestVersionInfo';
import { ListAccessAgentLatestVersionRequest } from './model/ListAccessAgentLatestVersionRequest';
import { ListAccessAgentLatestVersionResponse } from './model/ListAccessAgentLatestVersionResponse';
import { ListAppConnectionReq } from './model/ListAppConnectionReq';
import { ListAppConnectionRequest } from './model/ListAppConnectionRequest';
import { ListAppConnectionResponse } from './model/ListAppConnectionResponse';
import { ListAppGroupAuthorizationRequest } from './model/ListAppGroupAuthorizationRequest';
import { ListAppGroupAuthorizationResponse } from './model/ListAppGroupAuthorizationResponse';
import { ListAppGroupRequest } from './model/ListAppGroupRequest';
import { ListAppGroupResponse } from './model/ListAppGroupResponse';
import { ListAuthorizationMailRecordRequest } from './model/ListAuthorizationMailRecordRequest';
import { ListAuthorizationMailRecordResponse } from './model/ListAuthorizationMailRecordResponse';
import { ListAvailabilityZoneRequest } from './model/ListAvailabilityZoneRequest';
import { ListAvailabilityZoneResponse } from './model/ListAvailabilityZoneResponse';
import { ListAzRequest } from './model/ListAzRequest';
import { ListAzResponse } from './model/ListAzResponse';
import { ListCloudStorageAssignmentRequest } from './model/ListCloudStorageAssignmentRequest';
import { ListCloudStorageAssignmentResponse } from './model/ListCloudStorageAssignmentResponse';
import { ListCloudStorageRequest } from './model/ListCloudStorageRequest';
import { ListCloudStorageResponse } from './model/ListCloudStorageResponse';
import { ListConfigInfoReq } from './model/ListConfigInfoReq';
import { ListCorpConfigInfoRequest } from './model/ListCorpConfigInfoRequest';
import { ListCorpConfigInfoResponse } from './model/ListCorpConfigInfoResponse';
import { ListFoldersAndFilesRequest } from './model/ListFoldersAndFilesRequest';
import { ListFoldersAndFilesResponse } from './model/ListFoldersAndFilesResponse';
import { ListFutureExecutionsReq } from './model/ListFutureExecutionsReq';
import { ListFutureExecutionsRequest } from './model/ListFutureExecutionsRequest';
import { ListFutureExecutionsResponse } from './model/ListFutureExecutionsResponse';
import { ListHotspotSessionConfigRequest } from './model/ListHotspotSessionConfigRequest';
import { ListHotspotSessionConfigResponse } from './model/ListHotspotSessionConfigResponse';
import { ListImageJobsRequest } from './model/ListImageJobsRequest';
import { ListImageJobsResponse } from './model/ListImageJobsResponse';
import { ListImageServersRequest } from './model/ListImageServersRequest';
import { ListImageServersResponse } from './model/ListImageServersResponse';
import { ListImageSubJobsRequest } from './model/ListImageSubJobsRequest';
import { ListImageSubJobsResponse } from './model/ListImageSubJobsResponse';
import { ListLatestAttachedServerAppRequest } from './model/ListLatestAttachedServerAppRequest';
import { ListLatestAttachedServerAppResponse } from './model/ListLatestAttachedServerAppResponse';
import { ListNonMigrationUsersRequest } from './model/ListNonMigrationUsersRequest';
import { ListNonMigrationUsersResponse } from './model/ListNonMigrationUsersResponse';
import { ListPersistentStorageRequest } from './model/ListPersistentStorageRequest';
import { ListPersistentStorageResponse } from './model/ListPersistentStorageResponse';
import { ListPolicyGroupDetailInfoRequest } from './model/ListPolicyGroupDetailInfoRequest';
import { ListPolicyGroupDetailInfoResponse } from './model/ListPolicyGroupDetailInfoResponse';
import { ListPolicyGroupRequest } from './model/ListPolicyGroupRequest';
import { ListPolicyGroupResponse } from './model/ListPolicyGroupResponse';
import { ListPolicyOfPolicyGroupRequest } from './model/ListPolicyOfPolicyGroupRequest';
import { ListPolicyOfPolicyGroupResponse } from './model/ListPolicyOfPolicyGroupResponse';
import { ListPolicyTemplateRequest } from './model/ListPolicyTemplateRequest';
import { ListPolicyTemplateResponse } from './model/ListPolicyTemplateResponse';
import { ListProductRequest } from './model/ListProductRequest';
import { ListProductResponse } from './model/ListProductResponse';
import { ListProjectConfigsRequest } from './model/ListProjectConfigsRequest';
import { ListProjectConfigsResponse } from './model/ListProjectConfigsResponse';
import { ListPublishedAppRequest } from './model/ListPublishedAppRequest';
import { ListPublishedAppResponse } from './model/ListPublishedAppResponse';
import { ListScheduleTasksRequest } from './model/ListScheduleTasksRequest';
import { ListScheduleTasksResponse } from './model/ListScheduleTasksResponse';
import { ListServerGroupTagRequest } from './model/ListServerGroupTagRequest';
import { ListServerGroupTagResponse } from './model/ListServerGroupTagResponse';
import { ListServerGroupsRequest } from './model/ListServerGroupsRequest';
import { ListServerGroupsResponse } from './model/ListServerGroupsResponse';
import { ListServerHdaDetailsRequest } from './model/ListServerHdaDetailsRequest';
import { ListServerHdaDetailsResponse } from './model/ListServerHdaDetailsResponse';
import { ListServerHdaUpgradeRecordsRequest } from './model/ListServerHdaUpgradeRecordsRequest';
import { ListServerHdaUpgradeRecordsResponse } from './model/ListServerHdaUpgradeRecordsResponse';
import { ListServerMetricDataRequest } from './model/ListServerMetricDataRequest';
import { ListServerMetricDataResponse } from './model/ListServerMetricDataResponse';
import { ListServersRequest } from './model/ListServersRequest';
import { ListServersResponse } from './model/ListServersResponse';
import { ListSessionByUserNameRequest } from './model/ListSessionByUserNameRequest';
import { ListSessionByUserNameResponse } from './model/ListSessionByUserNameResponse';
import { ListSessionTypeRequest } from './model/ListSessionTypeRequest';
import { ListSessionTypeResponse } from './model/ListSessionTypeResponse';
import { ListSessionsRequest } from './model/ListSessionsRequest';
import { ListSessionsResponse } from './model/ListSessionsResponse';
import { ListSfs3StorageRequest } from './model/ListSfs3StorageRequest';
import { ListSfs3StorageResponse } from './model/ListSfs3StorageResponse';
import { ListShareFolderRequest } from './model/ListShareFolderRequest';
import { ListShareFolderResponse } from './model/ListShareFolderResponse';
import { ListStorageAssignmentRequest } from './model/ListStorageAssignmentRequest';
import { ListStorageAssignmentResponse } from './model/ListStorageAssignmentResponse';
import { ListStoragePolicyStatementRequest } from './model/ListStoragePolicyStatementRequest';
import { ListStoragePolicyStatementResponse } from './model/ListStoragePolicyStatementResponse';
import { ListSubJobsRequest } from './model/ListSubJobsRequest';
import { ListSubJobsResponse } from './model/ListSubJobsResponse';
import { ListTargetsOfPolicyGroupRequest } from './model/ListTargetsOfPolicyGroupRequest';
import { ListTargetsOfPolicyGroupResponse } from './model/ListTargetsOfPolicyGroupResponse';
import { ListTaskExecuteDetailRequest } from './model/ListTaskExecuteDetailRequest';
import { ListTaskExecuteDetailResponse } from './model/ListTaskExecuteDetailResponse';
import { ListTaskExecuteHistoryRequest } from './model/ListTaskExecuteHistoryRequest';
import { ListTaskExecuteHistoryResponse } from './model/ListTaskExecuteHistoryResponse';
import { ListTenantProfileRequest } from './model/ListTenantProfileRequest';
import { ListTenantProfileResponse } from './model/ListTenantProfileResponse';
import { ListTenantServerGroupsRequest } from './model/ListTenantServerGroupsRequest';
import { ListTenantServerGroupsResponse } from './model/ListTenantServerGroupsResponse';
import { ListUserConnectionReq } from './model/ListUserConnectionReq';
import { ListUserConnectionRequest } from './model/ListUserConnectionRequest';
import { ListUserConnectionResponse } from './model/ListUserConnectionResponse';
import { ListVolumeTypeRequest } from './model/ListVolumeTypeRequest';
import { ListVolumeTypeResponse } from './model/ListVolumeTypeResponse';
import { ListWarehouseAppsRequest } from './model/ListWarehouseAppsRequest';
import { ListWarehouseAppsResponse } from './model/ListWarehouseAppsResponse';
import { LogoffUserSessionReq } from './model/LogoffUserSessionReq';
import { LogoffUserSessionRequest } from './model/LogoffUserSessionRequest';
import { LogoffUserSessionResponse } from './model/LogoffUserSessionResponse';
import { MultimediaBandwidthControlOptions } from './model/MultimediaBandwidthControlOptions';
import { MultimediaBandwidthPercentageOptions } from './model/MultimediaBandwidthPercentageOptions';
import { Nic } from './model/Nic';
import { OsTypeEnum } from './model/OsTypeEnum';
import { PageResp } from './model/PageResp';
import { PcscBandwidthControlOptions } from './model/PcscBandwidthControlOptions';
import { PcscBandwidthPercentageOptions } from './model/PcscBandwidthPercentageOptions';
import { PersistentStorage } from './model/PersistentStorage';
import { PersistentStorageAssignment } from './model/PersistentStorageAssignment';
import { PersistentStorageClaim } from './model/PersistentStorageClaim';
import { PlatformTypeEnum } from './model/PlatformTypeEnum';
import { Policies } from './model/Policies';
import { PoliciesAudio } from './model/PoliciesAudio';
import { PoliciesClient } from './model/PoliciesClient';
import { PoliciesCloudStorage } from './model/PoliciesCloudStorage';
import { PoliciesCustom } from './model/PoliciesCustom';
import { PoliciesDisplay } from './model/PoliciesDisplay';
import { PoliciesDisplayRenderingAccelerationOptions } from './model/PoliciesDisplayRenderingAccelerationOptions';
import { PoliciesFileAndClipboard } from './model/PoliciesFileAndClipboard';
import { PoliciesFileAndClipboardClipboardRedirectionOptions } from './model/PoliciesFileAndClipboardClipboardRedirectionOptions';
import { PoliciesFileAndClipboardFileRedirection } from './model/PoliciesFileAndClipboardFileRedirection';
import { PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions } from './model/PoliciesFileAndClipboardFileRedirectionRedirectionSendFileOptions';
import { PoliciesFolderRedirection } from './model/PoliciesFolderRedirection';
import { PoliciesKeyboardMouse } from './model/PoliciesKeyboardMouse';
import { PoliciesPeripherals } from './model/PoliciesPeripherals';
import { PoliciesPeripheralsDeviceRedirection } from './model/PoliciesPeripheralsDeviceRedirection';
import { PoliciesPeripheralsDeviceRedirectionCameraRedirection } from './model/PoliciesPeripheralsDeviceRedirectionCameraRedirection';
import { PoliciesPeripheralsDeviceRedirectionPrinterRedirection } from './model/PoliciesPeripheralsDeviceRedirectionPrinterRedirection';
import { PoliciesPeripheralsDeviceRedirectionSessionPrinter } from './model/PoliciesPeripheralsDeviceRedirectionSessionPrinter';
import { PoliciesPeripheralsSerialPortRedirection } from './model/PoliciesPeripheralsSerialPortRedirection';
import { PoliciesPeripheralsUsbDeviceCommon } from './model/PoliciesPeripheralsUsbDeviceCommon';
import { PoliciesPeripheralsUsbDeviceCommonCommonOptions } from './model/PoliciesPeripheralsUsbDeviceCommonCommonOptions';
import { PoliciesPeripheralsUsbPortRedirection } from './model/PoliciesPeripheralsUsbPortRedirection';
import { PoliciesUrlRedirection } from './model/PoliciesUrlRedirection';
import { PoliciesUserProfile } from './model/PoliciesUserProfile';
import { PoliciesUserProfileManagement } from './model/PoliciesUserProfileManagement';
import { Policy } from './model/Policy';
import { PolicyGroup } from './model/PolicyGroup';
import { PolicyGroupForCreate } from './model/PolicyGroupForCreate';
import { PolicyGroupForTemplate } from './model/PolicyGroupForTemplate';
import { PolicyGroupForUpdate } from './model/PolicyGroupForUpdate';
import { PolicyStatement } from './model/PolicyStatement';
import { PolicyTemplate } from './model/PolicyTemplate';
import { PrinterBandwidthControlOptions } from './model/PrinterBandwidthControlOptions';
import { PrinterBandwidthPercentageOptions } from './model/PrinterBandwidthPercentageOptions';
import { PrinterRedirectionOptions } from './model/PrinterRedirectionOptions';
import { ProductInfo } from './model/ProductInfo';
import { ProjectConfig } from './model/ProjectConfig';
import { ProjectConfigClusterGroupIdEntity } from './model/ProjectConfigClusterGroupIdEntity';
import { PublishApp } from './model/PublishApp';
import { PublishAppReq } from './model/PublishAppReq';
import { PublishAppRequest } from './model/PublishAppRequest';
import { PublishAppResponse } from './model/PublishAppResponse';
import { PublishableApp } from './model/PublishableApp';
import { QuerySessionTypesReq } from './model/QuerySessionTypesReq';
import { QuotaRemainderData } from './model/QuotaRemainderData';
import { QuotaResourceTypeEnum } from './model/QuotaResourceTypeEnum';
import { RailTransparentConfig } from './model/RailTransparentConfig';
import { RecreateServerImageRequest } from './model/RecreateServerImageRequest';
import { RecreateServerImageResponse } from './model/RecreateServerImageResponse';
import { ReinstallServerReq } from './model/ReinstallServerReq';
import { ReinstallServerRequest } from './model/ReinstallServerRequest';
import { ReinstallServerResponse } from './model/ReinstallServerResponse';
import { RelativeResource } from './model/RelativeResource';
import { ResendAuthorizationMailReq } from './model/ResendAuthorizationMailReq';
import { ResendAuthorizedMailReq } from './model/ResendAuthorizedMailReq';
import { ResetUserProfileReq } from './model/ResetUserProfileReq';
import { ResetUserProfileRequest } from './model/ResetUserProfileRequest';
import { ResetUserProfileResponse } from './model/ResetUserProfileResponse';
import { Resource } from './model/Resource';
import { RoutePolicy } from './model/RoutePolicy';
import { Sbc } from './model/Sbc';
import { SbcAutomaticDisconnectionOptions } from './model/SbcAutomaticDisconnectionOptions';
import { ScalingPolicy } from './model/ScalingPolicy';
import { ScalingPolicyByResource } from './model/ScalingPolicyByResource';
import { ScalingPolicyBySession } from './model/ScalingPolicyBySession';
import { ScheduleTask } from './model/ScheduleTask';
import { ScheduleTaskExecuteDetail } from './model/ScheduleTaskExecuteDetail';
import { ScheduleTaskExecuteHistory } from './model/ScheduleTaskExecuteHistory';
import { ScheduleTaskPolicy } from './model/ScheduleTaskPolicy';
import { ScheduleTaskStatus } from './model/ScheduleTaskStatus';
import { ScheduleTaskTargetTypeEnum } from './model/ScheduleTaskTargetTypeEnum';
import { ScheduleTaskTypeEnum } from './model/ScheduleTaskTypeEnum';
import { ScheduledTaskConfig } from './model/ScheduledTaskConfig';
import { ScheduledTypeEnum } from './model/ScheduledTypeEnum';
import { SecureChannelBandwidthControlOptions } from './model/SecureChannelBandwidthControlOptions';
import { SecureChannelBandwidthPercentageOptions } from './model/SecureChannelBandwidthPercentageOptions';
import { SecurityGroup } from './model/SecurityGroup';
import { SendAuthorizationMailRequest } from './model/SendAuthorizationMailRequest';
import { SendAuthorizationMailResponse } from './model/SendAuthorizationMailResponse';
import { SendAuthorizedMailRequest } from './model/SendAuthorizedMailRequest';
import { SendAuthorizedMailResponse } from './model/SendAuthorizedMailResponse';
import { SerialPortRedirectionOptions } from './model/SerialPortRedirectionOptions';
import { ServerAddress } from './model/ServerAddress';
import { ServerAddressNetWork } from './model/ServerAddressNetWork';
import { ServerDataPoints } from './model/ServerDataPoints';
import { ServerGroup } from './model/ServerGroup';
import { ServerGroupDto } from './model/ServerGroupDto';
import { ServerGroupStatus } from './model/ServerGroupStatus';
import { ServerGroupTagsInfo } from './model/ServerGroupTagsInfo';
import { ServerHaltReq } from './model/ServerHaltReq';
import { ServerHaltType } from './model/ServerHaltType';
import { ServerHdaDetails } from './model/ServerHdaDetails';
import { ServerHdaUpgradeRecord } from './model/ServerHdaUpgradeRecord';
import { ServerIdSet } from './model/ServerIdSet';
import { ServerJobInfo } from './model/ServerJobInfo';
import { ServerJobInfos } from './model/ServerJobInfos';
import { ServerMetricData } from './model/ServerMetricData';
import { ServerSecurityGroup } from './model/ServerSecurityGroup';
import { ServerStatus } from './model/ServerStatus';
import { Session } from './model/Session';
import { SessionInfo } from './model/SessionInfo';
import { SessionPrinterOptions } from './model/SessionPrinterOptions';
import { SessionTypeEntity } from './model/SessionTypeEntity';
import { Sfs3Storage } from './model/Sfs3Storage';
import { SharePersistentStorageClaim } from './model/SharePersistentStorageClaim';
import { ShowAccessAgentLatestVersionRequest } from './model/ShowAccessAgentLatestVersionRequest';
import { ShowAccessAgentLatestVersionResponse } from './model/ShowAccessAgentLatestVersionResponse';
import { ShowAppDetailRequest } from './model/ShowAppDetailRequest';
import { ShowAppDetailResponse } from './model/ShowAppDetailResponse';
import { ShowAppGroupDetailRequest } from './model/ShowAppGroupDetailRequest';
import { ShowAppGroupDetailResponse } from './model/ShowAppGroupDetailResponse';
import { ShowAppWarehouseBucketRequest } from './model/ShowAppWarehouseBucketRequest';
import { ShowAppWarehouseBucketResponse } from './model/ShowAppWarehouseBucketResponse';
import { ShowHdaUpgradeFlagRequest } from './model/ShowHdaUpgradeFlagRequest';
import { ShowHdaUpgradeFlagResponse } from './model/ShowHdaUpgradeFlagResponse';
import { ShowImageJobRequest } from './model/ShowImageJobRequest';
import { ShowImageJobResponse } from './model/ShowImageJobResponse';
import { ShowImageServerRequest } from './model/ShowImageServerRequest';
import { ShowImageServerResponse } from './model/ShowImageServerResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowOriginalPolicyInfoRequest } from './model/ShowOriginalPolicyInfoRequest';
import { ShowOriginalPolicyInfoResponse } from './model/ShowOriginalPolicyInfoResponse';
import { ShowPolicyGroupRequest } from './model/ShowPolicyGroupRequest';
import { ShowPolicyGroupResponse } from './model/ShowPolicyGroupResponse';
import { ShowProjectConfigRequest } from './model/ShowProjectConfigRequest';
import { ShowProjectConfigResponse } from './model/ShowProjectConfigResponse';
import { ShowPublishableAppRequest } from './model/ShowPublishableAppRequest';
import { ShowPublishableAppResponse } from './model/ShowPublishableAppResponse';
import { ShowScalingPolicyRequest } from './model/ShowScalingPolicyRequest';
import { ShowScalingPolicyResponse } from './model/ShowScalingPolicyResponse';
import { ShowScheduleTaskRequest } from './model/ShowScheduleTaskRequest';
import { ShowScheduleTaskResponse } from './model/ShowScheduleTaskResponse';
import { ShowServerGroupRequest } from './model/ShowServerGroupRequest';
import { ShowServerGroupResponse } from './model/ShowServerGroupResponse';
import { ShowServerGroupRestrictRequest } from './model/ShowServerGroupRestrictRequest';
import { ShowServerGroupRestrictResponse } from './model/ShowServerGroupRestrictResponse';
import { ShowServerGroupStateRequest } from './model/ShowServerGroupStateRequest';
import { ShowServerGroupStateResponse } from './model/ShowServerGroupStateResponse';
import { ShowServerGroupTagRequest } from './model/ShowServerGroupTagRequest';
import { ShowServerGroupTagResponse } from './model/ShowServerGroupTagResponse';
import { ShowServerMetricDataRequest } from './model/ShowServerMetricDataRequest';
import { ShowServerMetricDataResponse } from './model/ShowServerMetricDataResponse';
import { ShowServerRequest } from './model/ShowServerRequest';
import { ShowServerResponse } from './model/ShowServerResponse';
import { ShowServerVncRequest } from './model/ShowServerVncRequest';
import { ShowServerVncResponse } from './model/ShowServerVncResponse';
import { ShowSessionTypesRequest } from './model/ShowSessionTypesRequest';
import { ShowSessionTypesResponse } from './model/ShowSessionTypesResponse';
import { SoldOutInfo } from './model/SoldOutInfo';
import { Storage } from './model/Storage';
import { StorageFolderMountType } from './model/StorageFolderMountType';
import { StorageMetadata } from './model/StorageMetadata';
import { StringSet } from './model/StringSet';
import { SubJobInfo } from './model/SubJobInfo';
import { Target } from './model/Target';
import { TargetInfo } from './model/TargetInfo';
import { TenantProfile } from './model/TenantProfile';
import { TmsTag } from './model/TmsTag';
import { TmsTagValues } from './model/TmsTagValues';
import { TotalBandwidthControlOptions } from './model/TotalBandwidthControlOptions';
import { TransferFilePreReq } from './model/TransferFilePreReq';
import { TransferFilePreRequest } from './model/TransferFilePreRequest';
import { TransferFilePreResponse } from './model/TransferFilePreResponse';
import { TransferFileReq } from './model/TransferFileReq';
import { TransferFileRequest } from './model/TransferFileRequest';
import { TransferFileResponse } from './model/TransferFileResponse';
import { TwainBandwidthControlOptions } from './model/TwainBandwidthControlOptions';
import { TwainBandwidthPercentageOptions } from './model/TwainBandwidthPercentageOptions';
import { UnpublishAppReq } from './model/UnpublishAppReq';
import { UnpublishAppRequest } from './model/UnpublishAppRequest';
import { UnpublishAppResponse } from './model/UnpublishAppResponse';
import { UpdateAppGroupReq } from './model/UpdateAppGroupReq';
import { UpdateAppGroupRequest } from './model/UpdateAppGroupRequest';
import { UpdateAppGroupResponse } from './model/UpdateAppGroupResponse';
import { UpdateAppReq } from './model/UpdateAppReq';
import { UpdateAppRequest } from './model/UpdateAppRequest';
import { UpdateAppResponse } from './model/UpdateAppResponse';
import { UpdateCloudUserFolderAssignmentRequest } from './model/UpdateCloudUserFolderAssignmentRequest';
import { UpdateCloudUserFolderAssignmentResponse } from './model/UpdateCloudUserFolderAssignmentResponse';
import { UpdateHotspotSessionConfigReq } from './model/UpdateHotspotSessionConfigReq';
import { UpdateHotspotSessionConfigRequest } from './model/UpdateHotspotSessionConfigRequest';
import { UpdateHotspotSessionConfigResponse } from './model/UpdateHotspotSessionConfigResponse';
import { UpdateImageServerReq } from './model/UpdateImageServerReq';
import { UpdateImageServerRequest } from './model/UpdateImageServerRequest';
import { UpdateImageServerResponse } from './model/UpdateImageServerResponse';
import { UpdateNonMigrationUsersReq } from './model/UpdateNonMigrationUsersReq';
import { UpdateNonMigrationUsersRequest } from './model/UpdateNonMigrationUsersRequest';
import { UpdateNonMigrationUsersResponse } from './model/UpdateNonMigrationUsersResponse';
import { UpdatePolicyGroupReq } from './model/UpdatePolicyGroupReq';
import { UpdatePolicyGroupRequest } from './model/UpdatePolicyGroupRequest';
import { UpdatePolicyGroupResponse } from './model/UpdatePolicyGroupResponse';
import { UpdatePolicyTemplateReq } from './model/UpdatePolicyTemplateReq';
import { UpdatePolicyTemplateRequest } from './model/UpdatePolicyTemplateRequest';
import { UpdatePolicyTemplateResponse } from './model/UpdatePolicyTemplateResponse';
import { UpdatePreBootPolicyReq } from './model/UpdatePreBootPolicyReq';
import { UpdatePreBootPolicyRequest } from './model/UpdatePreBootPolicyRequest';
import { UpdatePreBootPolicyResponse } from './model/UpdatePreBootPolicyResponse';
import { UpdateScheduleTaskReq } from './model/UpdateScheduleTaskReq';
import { UpdateScheduleTaskRequest } from './model/UpdateScheduleTaskRequest';
import { UpdateScheduleTaskResponse } from './model/UpdateScheduleTaskResponse';
import { UpdateServerGroupReq } from './model/UpdateServerGroupReq';
import { UpdateServerGroupRequest } from './model/UpdateServerGroupRequest';
import { UpdateServerGroupResponse } from './model/UpdateServerGroupResponse';
import { UpdateServerReq } from './model/UpdateServerReq';
import { UpdateServerRequest } from './model/UpdateServerRequest';
import { UpdateServerResponse } from './model/UpdateServerResponse';
import { UpdateShareFolderAssignmentRequest } from './model/UpdateShareFolderAssignmentRequest';
import { UpdateShareFolderAssignmentResponse } from './model/UpdateShareFolderAssignmentResponse';
import { UpdateTsvi } from './model/UpdateTsvi';
import { UpdateTsviReq } from './model/UpdateTsviReq';
import { UpdateUserAssignmentInfo } from './model/UpdateUserAssignmentInfo';
import { UpdateUserEnum } from './model/UpdateUserEnum';
import { UpdateUserFolderAssignmentRequest } from './model/UpdateUserFolderAssignmentRequest';
import { UpdateUserFolderAssignmentResponse } from './model/UpdateUserFolderAssignmentResponse';
import { UpdateUserFolderReq } from './model/UpdateUserFolderReq';
import { UpdateWarehouseAppReq } from './model/UpdateWarehouseAppReq';
import { UpdateWarehouseAppRequest } from './model/UpdateWarehouseAppRequest';
import { UpdateWarehouseAppResponse } from './model/UpdateWarehouseAppResponse';
import { UploadAppIconRequest } from './model/UploadAppIconRequest';
import { UploadAppIconRequestBody } from './model/UploadAppIconRequestBody';
import { UploadAppIconResponse } from './model/UploadAppIconResponse';
import { UploadWarehouseAppIconRequest } from './model/UploadWarehouseAppIconRequest';
import { UploadWarehouseAppIconRequestBody } from './model/UploadWarehouseAppIconRequestBody';
import { UploadWarehouseAppIconResponse } from './model/UploadWarehouseAppIconResponse';
import { UpmOptions } from './model/UpmOptions';
import { UrlRedirectionOptions } from './model/UrlRedirectionOptions';
import { UsbBandwidthControlOptions } from './model/UsbBandwidthControlOptions';
import { UsbBandwidthPercentageOptions } from './model/UsbBandwidthPercentageOptions';
import { UsbPortRedirectionOptions } from './model/UsbPortRedirectionOptions';
import { UserAssignment } from './model/UserAssignment';
import { UserConnectionInfo } from './model/UserConnectionInfo';
import { UserInfo } from './model/UserInfo';
import { UserProfileManagementOptions } from './model/UserProfileManagementOptions';
import { UserProfileManagementProfiles } from './model/UserProfileManagementProfiles';
import { ValidateRuleEnum } from './model/ValidateRuleEnum';
import { ValidateServerGroupRequest } from './model/ValidateServerGroupRequest';
import { ValidateServerGroupResponse } from './model/ValidateServerGroupResponse';
import { ValidateSeverGroupReq } from './model/ValidateSeverGroupReq';
import { VerifyStatusEnum } from './model/VerifyStatusEnum';
import { VirtualChannel } from './model/VirtualChannel';
import { VirtualChannelBandwidthControlOptions } from './model/VirtualChannelBandwidthControlOptions';
import { VirtualChannelBandwidthPercentageOptions } from './model/VirtualChannelBandwidthPercentageOptions';
import { VirtualChannelOptions } from './model/VirtualChannelOptions';
import { Volume } from './model/Volume';
import { VolumeDetail } from './model/VolumeDetail';
import { VolumeType } from './model/VolumeType';
import { VolumeTypeExtraSpecs } from './model/VolumeTypeExtraSpecs';
import { VolumeTypeInfo } from './model/VolumeTypeInfo';
import { WarehouseApp } from './model/WarehouseApp';
import { WdhParam } from './model/WdhParam';

export class WorkspaceAppClient {
    public static newBuilder(): ClientBuilder<WorkspaceAppClient> {
            let client = new ClientBuilder<WorkspaceAppClient>(newClient);
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
     * 获取上传至OBS桶的临时ak/sk。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取上传至OBS桶的临时ak/sk
     * @param {AuthorizeObsReq} authorizeObsRequestBody 授权给应用文件的ak/sk的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public authorizeObs(authorizeObsRequest?: AuthorizeObsRequest): Promise<AuthorizeObsResponse> {
        const options = ParamCreater().authorizeObs(authorizeObsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除应用仓库中的指定应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除应用仓库中的指定应用
     * @param {BatchDeleteWarehouseAppReq} batchDeleteWarehouseAppRequestbody 批量删除应用仓库中的应用请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteWarehouseApp(batchDeleteWarehouseAppRequest?: BatchDeleteWarehouseAppRequest): Promise<BatchDeleteWarehouseAppResponse> {
        const options = ParamCreater().batchDeleteWarehouseApp(batchDeleteWarehouseAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加用户应用仓库桶及桶授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加用户应用仓库桶及桶授权
     * @param {BucketNameReq} [bindAppWarehouseBucketRequestBody] 桶名称结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public bindAppWarehouseBucket(bindAppWarehouseBucketRequest?: BindAppWarehouseBucketRequest): Promise<BindAppWarehouseBucketResponse> {
        const options = ParamCreater().bindAppWarehouseBucket(bindAppWarehouseBucketRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加桶或者桶授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加桶或者桶授权
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBucketOrAcl(createBucketOrAclRequest?: CreateBucketOrAclRequest): Promise<CreateBucketOrAclResponse> {
        const options = ParamCreater().createBucketOrAcl();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在应用仓库中新增应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在应用仓库中新增应用
     * @param {CreateWarehouseAppReq} createWarehouseAppRequestbody 在应用仓库中增加应用的结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWarehouseApp(createWarehouseAppRequest?: CreateWarehouseAppRequest): Promise<CreateWarehouseAppResponse> {
        const options = ParamCreater().createWarehouseApp(createWarehouseAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用仓库中的指定应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用仓库中的指定应用
     * @param {string} id 应用仓库中的应用记录ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWarehouseApp(deleteWarehouseAppRequest?: DeleteWarehouseAppRequest): Promise<DeleteWarehouseAppResponse> {
        const options = ParamCreater().deleteWarehouseApp(deleteWarehouseAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户应用仓库中的应用列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户应用仓库中的应用列表
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {string} [verifyStatus] 审核状态： - VERIFYING：审核中 - VERIFY_PASS：审核通过 - Verify_FAIL：审核不通过
     * @param {string} [appId] 应用仓库中的应用记录ID。
     * @param {string} [appName] 应用名称。
     * @param {string} [appCategory] 应用分类： * &#x60;GAME&#x60;-  &#x60;游戏&#x60;。 * &#x60;BUSSINESS_INTELLIGENCE&#x60;- &#x60;商业智能&#x60;。 * &#x60;SECURE_STORAGE&#x60;-  &#x60;安全与存储&#x60;。 * &#x60;MULTIMEDIA_AND_CODING&#x60;- &#x60;多媒体与编解码&#x60;。 * &#x60;PROJECT_MANAGEMENT&#x60;- &#x60;项目管理&#x60;, * &#x60;PRODUCTIVITY_AND_COLLABORATION&#x60;-  &#x60;生产力与协作&#x60;。 * &#x60;WEB_ADN_APPLICATION&#x60;-  &#x60;网页与应用开发&#x60;。 * &#x60;GRAPHIC_DESIGN&#x60;-  &#x60;图形设计&#x60;。 * &#x60;OTHER&#x60;-  &#x60;其它&#x60;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWarehouseApps(listWarehouseAppsRequest?: ListWarehouseAppsRequest): Promise<ListWarehouseAppsResponse> {
        const options = ParamCreater().listWarehouseApps(listWarehouseAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户应用仓库桶
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户应用仓库桶
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppWarehouseBucket(showAppWarehouseBucketRequest?: ShowAppWarehouseBucketRequest): Promise<ShowAppWarehouseBucketResponse> {
        const options = ParamCreater().showAppWarehouseBucket();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改应用仓库中的指定应用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用仓库中的指定应用信息
     * @param {string} id 应用仓库中的应用记录ID。
     * @param {UpdateWarehouseAppReq} updateWarehouseAppRequestBody 修改应用请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWarehouseApp(updateWarehouseAppRequest?: UpdateWarehouseAppRequest): Promise<UpdateWarehouseAppResponse> {
        const options = ParamCreater().updateWarehouseApp(updateWarehouseAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在应用仓库中上传图标文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在应用仓库中上传图标文件
     * @param {any} [data] 应用图标，png格式，限制大小8KB。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadWarehouseAppIcon(uploadWarehouseAppIconRequest?: UploadWarehouseAppIconRequest): Promise<UploadWarehouseAppIconResponse> {
        const options = ParamCreater().uploadWarehouseAppIcon(uploadWarehouseAppIconRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量禁用应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量禁用应用
     * @param {string} appGroupId 应用组ID。
     * @param {BatchUpdateAppReq} batchDisableAppRequestBody update published app request body。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisableApp(batchDisableAppRequest?: BatchDisableAppRequest): Promise<BatchDisableAppResponse> {
        const options = ParamCreater().batchDisableApp(batchDisableAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量启用应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量启用应用
     * @param {string} appGroupId 应用组ID。
     * @param {BatchUpdateAppReq} batchEnableAppRequestBody update published app request body。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchEnableApp(batchEnableAppRequest?: BatchEnableAppRequest): Promise<BatchEnableAppResponse> {
        const options = ParamCreater().batchEnableApp(batchEnableAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验发布应用,不允许发布同名的应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验应用
     * @param {string} appGroupId 应用组ID。
     * @param {CheckPublishAppReq} checkPublishAppRequestBody publish app request body.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkPublishApp(checkPublishAppRequest?: CheckPublishAppRequest): Promise<CheckPublishAppResponse> {
        const options = ParamCreater().checkPublishApp(checkPublishAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义应用应用图标，恢复使用默认应用图标，重复执行会按照成功处理(响应200)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义应用图标
     * @param {string} appGroupId 应用组ID。
     * @param {string} appId 应用ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppIcon(deleteAppIconRequest?: DeleteAppIconRequest): Promise<DeleteAppIconResponse> {
        const options = ParamCreater().deleteAppIcon(deleteAppIconRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已发布的应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已发布应用
     * @param {string} appGroupId 应用组ID。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {string} [name] 应用名称。
     * @param {string} [state] 应用状态： * &#x60;NORMAL&#x60; - 正常状态。 * &#x60;FORBIDDEN&#x60; - 禁用状态。
     * @param {string} [appId] 应用ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublishedApp(listPublishedAppRequest?: ListPublishedAppRequest): Promise<ListPublishedAppResponse> {
        const options = ParamCreater().listPublishedApp(listPublishedAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量发布应用，不允许发布同名的应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布应用
     * @param {string} appGroupId 应用组ID。
     * @param {PublishAppReq} publishAppRequestBody publish app request body.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishApp(publishAppRequest?: PublishAppRequest): Promise<PublishAppResponse> {
        const options = ParamCreater().publishApp(publishAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用详细信息
     * @param {string} appGroupId 应用组ID。
     * @param {string} appId 应用ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppDetail(showAppDetailRequest?: ShowAppDetailRequest): Promise<ShowAppDetailResponse> {
        const options = ParamCreater().showAppDetail(showAppDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用组下可发布的应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 可发布应用列表
     * @param {string} appGroupId 应用组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublishableApp(showPublishableAppRequest?: ShowPublishableAppRequest): Promise<ShowPublishableAppResponse> {
        const options = ParamCreater().showPublishableApp(showPublishableAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量取消应用发布。
     * &gt; - 批量取消应用组下已经发布的应用，应用对应的授权会一起删除，重复执行会按照成功处理(响应200)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量取消应用发布
     * @param {string} appGroupId 应用组ID。
     * @param {UnpublishAppReq} unpublishAppRequestBody delete published app request。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unpublishApp(unpublishAppRequest?: UnpublishAppRequest): Promise<UnpublishAppResponse> {
        const options = ParamCreater().unpublishApp(unpublishAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑修改应用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用信息
     * @param {string} appGroupId 应用组ID。
     * @param {string} appId 应用ID。
     * @param {UpdateAppReq} updateAppRequestBody update app request body.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApp(updateAppRequest?: UpdateAppRequest): Promise<UpdateAppResponse> {
        const options = ParamCreater().updateApp(updateAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置应用预启动。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置应用预启动
     * @param {string} appGroupId 应用组ID。
     * @param {UpdatePreBootPolicyReq} updatePreBootPolicyRequestBody 批量设置应用预启动请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePreBootPolicy(updatePreBootPolicyRequest?: UpdatePreBootPolicyRequest): Promise<UpdatePreBootPolicyResponse> {
        const options = ParamCreater().updatePreBootPolicy(updatePreBootPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义应用图标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自定义应用图标
     * @param {string} appGroupId 应用组ID。
     * @param {string} appId 应用ID。
     * @param {any} [data] 应用图标，png格式，限制大小8KB。
     * @param {string} [iconUrl] base64编码后的png格式图标。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadAppIcon(uploadAppIconRequest?: UploadAppIconRequest): Promise<UploadAppIconResponse> {
        const options = ParamCreater().uploadAppIcon(uploadAppIconRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户服务激活。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 租户服务激活、初始化
     * @param {InitializeTenantReq} initializeTenantRequestBody 激活租户请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public initializeTenant(initializeTenantRequest?: InitializeTenantRequest): Promise<InitializeTenantResponse> {
        const options = ParamCreater().initializeTenant(initializeTenantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置加载顺序： 查询企业级配置--&gt; 查不到则赋默认阿波罗配置--&gt; 阿波罗没有则不返回。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业系统配置
     * @param {ListConfigInfoReq} listCorpConfigInfoRequestBody 请求的key集合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCorpConfigInfo(listCorpConfigInfoRequest?: ListCorpConfigInfoRequest): Promise<ListCorpConfigInfoResponse> {
        const options = ParamCreater().listCorpConfigInfo(listCorpConfigInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTenantProfile(listTenantProfileRequest?: ListTenantProfileRequest): Promise<ListTenantProfileResponse> {
        const options = ParamCreater().listTenantProfile();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除应用组,重复执行会按照成功处理(响应200)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除应用组
     * @param {DeleteAppGroupReq} batchDeleteAppGroupRequestBody 批量删除应用组的请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAppGroup(batchDeleteAppGroupRequest?: BatchDeleteAppGroupRequest): Promise<BatchDeleteAppGroupResponse> {
        const options = ParamCreater().batchDeleteAppGroup(batchDeleteAppGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验应用组是否符合指定的规则。
     * 1. 校验应用组名称是否符合规则。
     * 2. 校验应用组名称是否重复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验应用组
     * @param {CheckAppGroupReq} checkAppGroupRequestBody check appGroup request body。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkAppGroup(checkAppGroupRequest?: CheckAppGroupRequest): Promise<CheckAppGroupResponse> {
        const options = ParamCreater().checkAppGroup(checkAppGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建应用组。
     * &gt; - 应用服务器中安装了不同的应用，这些应用可以组成不同的应用组，进行集中的管理和维护，向用户(组)发布。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用组
     * @param {CreateAppGroupReq} createAppGroupRequestBody 创建应用组的结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppGroup(createAppGroupRequest?: CreateAppGroupRequest): Promise<CreateAppGroupResponse> {
        const options = ParamCreater().createAppGroup(createAppGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的应用组,重复执行会按照成功处理(响应200)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用组删除
     * @param {string} appGroupId 应用组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppGroup(deleteAppGroupRequest?: DeleteAppGroupRequest): Promise<DeleteAppGroupResponse> {
        const options = ParamCreater().deleteAppGroup(deleteAppGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除服务组关联的所有应用组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除服务组关联的所有应用组
     * @param {string} serverGroupId 服务器组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateAppGroup(disassociateAppGroupRequest?: DisassociateAppGroupRequest): Promise<DisassociateAppGroupResponse> {
        const options = ParamCreater().disassociateAppGroup(disassociateAppGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户创建的应用组，按照名称、授权类型分页查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用组
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {string} [appServerGroupId] 应用服务器组ID。
     * @param {string} [appGroupId] 应用组ID。
     * @param {string} [name] 应用组名称。
     * @param {string} [authorizationType] 授权类型： * &#x60;APP&#x60; - 应用 * &#x60;APP_GROUP&#x60; - 应用组
     * @param {string} [appType] 应用组类型： * &#x60;SESSION_DESKTOP_APP&#x60; - 会话桌面app * &#x60;COMMON_APP&#x60; - 普通app
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppGroup(listAppGroupRequest?: ListAppGroupRequest): Promise<ListAppGroupResponse> {
        const options = ParamCreater().listAppGroup(listAppGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用组详情
     * @param {string} appGroupId 应用组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppGroupDetail(showAppGroupDetailRequest?: ShowAppGroupDetailRequest): Promise<ShowAppGroupDetailResponse> {
        const options = ParamCreater().showAppGroupDetail(showAppGroupDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改应用组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用组
     * @param {string} appGroupId 应用组ID。
     * @param {UpdateAppGroupReq} updateAppGroupRequestBody 修改应用组的属性。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppGroup(updateAppGroupRequest?: UpdateAppGroupRequest): Promise<UpdateAppGroupResponse> {
        const options = ParamCreater().updateAppGroup(updateAppGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建订单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建订单
     * @param {CreateOrderReq} createOrderRequestBody 创建订单请求结构体。
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
     * 查询云应用套餐，按照条件过滤。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云应用套餐
     * @param {string} [productId] 如果不为空，将按产品ID进行过滤后返回。
     * @param {string} [flavorId] 如果不为空，将按规格ID进行过滤后返回。
     * @param {string} [availabilityZone] 可用分区，如果不为空，将按可用分区进行过滤后返回。 - [获取方式详见可用区管理ListAvailabilityZone：\&quot;GET  /v1/{project_id}/availability-zone\&quot;。](tag:HW)[获取方式详见可用区管理ListAvailabilityZone：\&quot;GET  /v1/{project_id}/availability-zone/summary\&quot;。](tag:HCS)
     * @param {string} [osType] 产品套餐的操作系统类型，当前支持：Windows。 - Linux - Windows - Other
     * @param {string} [chargeMode] 套餐标识。 - 1：表示包周期。 - 0：表示按需。
     * @param {string} [architecture] 架构类型，当前支持：x86。 - x86 - arm
     * @param {string} [packageType] 套餐类型： - general：表示产品通用套餐。 - dedicated：表示产品专属主机套餐。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProduct(listProductRequest?: ListProductRequest): Promise<ListProductResponse> {
        const options = ParamCreater().listProduct(listProductRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询会话套餐列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询会话套餐列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSessionType(listSessionTypeRequest?: ListSessionTypeRequest): Promise<ListSessionTypeResponse> {
        const options = ParamCreater().listSessionType();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询会话套餐列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询会话套餐列表（已废弃）
     * @param {QuerySessionTypesReq} showSessionTypesRequestBody 查询会话套餐请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSessionTypes(showSessionTypesRequest?: ShowSessionTypesRequest): Promise<ShowSessionTypesResponse> {
        const options = ParamCreater().showSessionTypes(showSessionTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用组添加用户授权，授权后用户就获得应用组下所有已发布应用的权限访问。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 增加应用组授权
     * @param {AppGroupAuthorizeReq} addAppGroupAuthorizationRequestBody add app authorization.
     * @param {string} [xLanguage] 语言： - zh-cn：中文 - en-us：英文 - fr-fr: 法文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAppGroupAuthorization(addAppGroupAuthorizationRequest?: AddAppGroupAuthorizationRequest): Promise<AddAppGroupAuthorizationResponse> {
        const options = ParamCreater().addAppGroupAuthorization(addAppGroupAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除应用组内的指定用户的授权，用户授权删除后，用户将没有权限访问应用组内的任何应用。注意：重复执行会按照操作成功处理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除应用组授权
     * @param {AppGroupAuthorizeReq} batchDeleteAppGroupAuthorizationRequestBody del app authorization.
     * @param {string} [xLanguage] 语言： - zh-cn：中文 - en-us：英文 - fr-fr: 法文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAppGroupAuthorization(batchDeleteAppGroupAuthorizationRequest?: BatchDeleteAppGroupAuthorizationRequest): Promise<BatchDeleteAppGroupAuthorizationResponse> {
        const options = ParamCreater().batchDeleteAppGroupAuthorization(batchDeleteAppGroupAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用内已授权的用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用组授权记录
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {string} [appGroupId] 应用组ID。
     * @param {string} [accountId] 应用授权的用户(组)ID，精确查询。
     * @param {string} [account] 应用授权的用户(组)名称，精确查询。
     * @param {string} [accountType] 应用授权的用户(组)类型： * \&#39;USER\&#39; - 用户 * \&#39;USER_GROUP\&#39; - 用户组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppGroupAuthorization(listAppGroupAuthorizationRequest?: ListAppGroupAuthorizationRequest): Promise<ListAppGroupAuthorizationResponse> {
        const options = ParamCreater().listAppGroupAuthorization(listAppGroupAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询支持的可用分区列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用分区列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZone(listAvailabilityZoneRequest?: ListAvailabilityZoneRequest): Promise<ListAvailabilityZoneResponse> {
        const options = ParamCreater().listAvailabilityZone();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * [该接口用于查询支持的可用分区列表，按站点分类。](tag:HW)[该接口用于查询支持的可用分区列表。](tag:HCS)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用分区列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAz(listAzRequest?: ListAzRequest): Promise<ListAzResponse> {
        const options = ParamCreater().listAz();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除云存储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除云存储
     * @param {BatchDeleteCloudStorageReq} batchDeleteCloudStorageRequestBody 删除文件夹请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteCloudStorage(batchDeleteCloudStorageRequest?: BatchDeleteCloudStorageRequest): Promise<BatchDeleteCloudStorageResponse> {
        const options = ParamCreater().batchDeleteCloudStorage(batchDeleteCloudStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换文件夹归属集群，文件系统在切换
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换文件夹归属集群
     * @param {string} storageId WKS存储ID。
     * @param {ChangeClusterReq} changeClusterRequestBody 切换文件夹归属集群参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeCluster(changeClusterRequest?: ChangeClusterRequest): Promise<ChangeClusterResponse> {
        const options = ParamCreater().changeCluster(changeClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建项目配置关联，目前仅支持关联项目配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目配置关联
     * @param {CreateCloudStorageReq} createCloudStorageRequestBody WKS存储。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudStorage(createCloudStorageRequest?: CreateCloudStorageRequest): Promise<CreateCloudStorageResponse> {
        const options = ParamCreater().createCloudStorage(createCloudStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建个人文件夹，已存在对应目录时，仅更新策略不会重复创建目录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建个人文件夹
     * @param {string} storageId WKS存储ID。
     * @param {CreateUserFolderReq} createUserFolderAssignmentRequestBody 创建并设置个人目录关联对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUserFolderAssignment(createUserFolderAssignmentRequest?: CreateUserFolderAssignmentRequest): Promise<CreateUserFolderAssignmentResponse> {
        const options = ParamCreater().createUserFolderAssignment(createUserFolderAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除共享存储，只会解除NAS与项目配置之间的关联关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除云存储
     * @param {string} storageId WKS存储ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudStorage(deleteCloudStorageRequest?: DeleteCloudStorageRequest): Promise<DeleteCloudStorageResponse> {
        const options = ParamCreater().deleteCloudStorage(deleteCloudStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除个人存储目录，个人目录中的数据也将永久删除且无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除个人文件夹
     * @param {string} storageId WKS存储ID。
     * @param {DeleteCloudStorageAttachmentReq} deleteCloudStorageAttachmentRequestBody 删除个人存储。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudStorageAttachment(deleteCloudStorageAttachmentRequest?: DeleteCloudStorageAttachmentRequest): Promise<DeleteCloudStorageAttachmentResponse> {
        const options = ParamCreater().deleteCloudStorageAttachment(deleteCloudStorageAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云存储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云存储
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 单次查询的大小[1-100]。
     * @param {string} [storageId] 云存储id。
     * @param {string} [name] 查询名称，模糊匹配。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudStorage(listCloudStorageRequest?: ListCloudStorageRequest): Promise<ListCloudStorageResponse> {
        const options = ParamCreater().listCloudStorage(listCloudStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询个人文件夹列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询个人文件夹列表
     * @param {string} storageId WKS存储ID。
     * @param {string} claimMode 存储声明的类型,目前只支持USER,后面可以拓展。 * &#x60;USER&#x60; -  个人文件夹 * &#x60;SHARE&#x60; -  共享文件夹
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 单次查询的大小[1-100]。
     * @param {string} [attach] 被分配的个体或组的名称，当传attach_names时，本字段不生效。
     * @param {Array<string>} [attachNames] 被分配的个体或组的名称。
     * @param {string} [capacityFilter] 是否查询容量过滤： - true : 是。 - false: 否。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudStorageAssignment(listCloudStorageAssignmentRequest?: ListCloudStorageAssignmentRequest): Promise<ListCloudStorageAssignmentResponse> {
        const options = ParamCreater().listCloudStorageAssignment(listCloudStorageAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定目录下文件夹和文件信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询文件夹和文件信息
     * @param {string} userName 用户名
     * @param {string} folderUrl 查询文件夹路径
     * @param {string} [cloudStorageAssignmentId] 个人文件夹ID。(用户拥有多个文件夹时，如果不传个人文件夹id则选择最早创建的文件系统进行文件查询)
     * @param {string} [marker] 指定一个标识符，从该标识符以后按文件名的字典顺序返回文件列表。
     * @param {number} [limit] 列举文件系统的最大数目，返回的文件系统列表将是按照字典顺序的最多前 limit 个，默认取值为1000。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFoldersAndFiles(listFoldersAndFilesRequest?: ListFoldersAndFilesRequest): Promise<ListFoldersAndFilesResponse> {
        const options = ParamCreater().listFoldersAndFiles(listFoldersAndFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目配置列表
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 单次查询的大小[1-100]。
     * @param {string} [name] 查询名称,模糊匹配。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectConfigs(listProjectConfigsRequest?: ListProjectConfigsRequest): Promise<ListProjectConfigsResponse> {
        const options = ParamCreater().listProjectConfigs(listProjectConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置userprofile，初始化或重置并备份userprofile。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置userprofile
     * @param {ResetUserProfileReq} resetUserProfileRequestBody 重置userprofile。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetUserProfile(resetUserProfileRequest?: ResetUserProfileRequest): Promise<ResetUserProfileResponse> {
        const options = ParamCreater().resetUserProfile(resetUserProfileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目配置信息
     * @param {string} cloudStorageId 云存储ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectConfig(showProjectConfigRequest?: ShowProjectConfigRequest): Promise<ShowProjectConfigResponse> {
        const options = ParamCreater().showProjectConfig(showProjectConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云存储文件流转与分享
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文件流转
     * @param {TransferFileReq} transferFileRequestBody 文件流转参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public transferFile(transferFileRequest?: TransferFileRequest): Promise<TransferFileResponse> {
        const options = ParamCreater().transferFile(transferFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 文件预流转，在接收方接收文件前返回可用的文件路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文件预流转
     * @param {TransferFilePreReq} transferFilePreRequestBody 文件预流转参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public transferFilePre(transferFilePreRequest?: TransferFilePreRequest): Promise<TransferFilePreResponse> {
        const options = ParamCreater().transferFilePre(transferFilePreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建个人文件夹。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改个人文件夹
     * @param {string} storageId WKS存储ID。
     * @param {string} cloudAssignmentId 文件夹id。
     * @param {UpdateUserFolderReq} updateCloudUserFolderAssignmentRequestBody 修改个人文件夹。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCloudUserFolderAssignment(updateCloudUserFolderAssignmentRequest?: UpdateCloudUserFolderAssignmentRequest): Promise<UpdateCloudUserFolderAssignmentResponse> {
        const options = ParamCreater().updateCloudUserFolderAssignment(updateCloudUserFolderAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建热点会话迁移配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建热点会话迁移配置
     * @param {CreateHotspotSessionConfigReq} createHotspotSessionConfigRequestBody 创建热点会话迁移配置请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHotspotSessionConfig(createHotspotSessionConfigRequest?: CreateHotspotSessionConfigRequest): Promise<CreateHotspotSessionConfigResponse> {
        const options = ParamCreater().createHotspotSessionConfig(createHotspotSessionConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询热点会话迁移配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询热点会话迁移配置
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 查询的数量，值区间[1-100]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHotspotSessionConfig(listHotspotSessionConfigRequest?: ListHotspotSessionConfigRequest): Promise<ListHotspotSessionConfigResponse> {
        const options = ParamCreater().listHotspotSessionConfig(listHotspotSessionConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询热点会话不迁移用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询热点会话不迁移用户
     * @param {string} configId 热点会话迁移配置ID。
     * @param {string} [userName] 用户名。
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 查询的数量，值区间[1-100]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNonMigrationUsers(listNonMigrationUsersRequest?: ListNonMigrationUsersRequest): Promise<ListNonMigrationUsersResponse> {
        const options = ParamCreater().listNonMigrationUsers(listNonMigrationUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改热点会话迁移配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改热点会话迁移配置
     * @param {string} configId 热点会话迁移配置ID。
     * @param {UpdateHotspotSessionConfigReq} updateHotspotSessionConfigRequestBody 修改热点会话迁移配置请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHotspotSessionConfig(updateHotspotSessionConfigRequest?: UpdateHotspotSessionConfigRequest): Promise<UpdateHotspotSessionConfigResponse> {
        const options = ParamCreater().updateHotspotSessionConfig(updateHotspotSessionConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改热点会话不迁移用户, 在对热点绘画迁移用户新增时如已存在该用户，则进行覆盖添加，在删除用户时如果不存在用户，则进行忽略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改热点会话不迁移用户
     * @param {string} configId 热点会话迁移配置ID。
     * @param {UpdateNonMigrationUsersReq} updateNonMigrationUsersRequestBody 修改热点会话迁移配置请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNonMigrationUsers(updateNonMigrationUsersRequest?: UpdateNonMigrationUsersRequest): Promise<UpdateNonMigrationUsersResponse> {
        const options = ParamCreater().updateNonMigrationUsers(updateNonMigrationUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分发应用软件信息至镜像实例，管理员可以按需下载并安装应用软件。
     * * 目前只支持来自云应用仓库的软件信息。
     * * 只允许对状态为 &#x60;实例正常运行&#x60;、&#x60;镜像任务结束&#x60; 的实例分发软件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分发软件信息至镜像实例
     * @param {string} serverId 镜像实例唯一标识。
     * @param {AttachServerAppReq} attachImageServerAppRequestBody 软件信息分发至镜像实例的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachImageServerApp(attachImageServerAppRequest?: AttachImageServerAppRequest): Promise<AttachImageServerAppResponse> {
        const options = ParamCreater().attachImageServerApp(attachImageServerAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除镜像实例。
     * * 忽略不存在的镜像实例，响应正常。
     * * 不允许操作状态为 &#x60;创建中&#x60;、&#x60;镜像创建中&#x60;的实例，响应异常。
     * * 不支持资源关联发生变化后，请求删除镜像实例关联资源，任务响应异常。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除镜像实例
     * @param {BatchDeleteImageServerReq} batchDeleteImageServerRequestBody 批量删除镜像实例的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteImageServer(batchDeleteImageServerRequest?: BatchDeleteImageServerRequest): Promise<BatchDeleteImageServerResponse> {
        const options = ParamCreater().batchDeleteImageServer(batchDeleteImageServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像实例
     * @param {CreateImageServerReq} createImageServerRequestBody 创建镜像实例请求内容。
     * @param {string} [serviceTransactionId] CBC接口回调时，请求头里带上的业务ID。
     * @param {string} [xLinkedId] 交易组件调用时下发的关联ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageServer(createImageServerRequest?: CreateImageServerRequest): Promise<CreateImageServerResponse> {
        const options = ParamCreater().createImageServer(createImageServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像实例列表
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {string} [serverName] 镜像实例名称，支持部分匹配。
     * @param {string} [serverId] 镜像实例唯一标识。
     * @param {string} [enterpriseProjectId] 企业项目ID(字段为空或者0表示使用默认default企业项目)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageServers(listImageServersRequest?: ListImageServersRequest): Promise<ListImageServersResponse> {
        const options = ParamCreater().listImageServers(listImageServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询最近一次分发软件信息列表，返回ID列表，不包含具体信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询最近一次分发软件信息列表
     * @param {string} serverId 镜像实例唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLatestAttachedServerApp(listLatestAttachedServerAppRequest?: ListLatestAttachedServerAppRequest): Promise<ListLatestAttachedServerAppResponse> {
        const options = ParamCreater().listLatestAttachedServerApp(listLatestAttachedServerAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 构建云应用镜像。
     * * 只允许对状态为 &#x60;实例正常运行&#x60;、&#x60;镜像任务结束&#x60; 的实例构建云应用镜像。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 构建云应用镜像
     * @param {string} serverId 镜像实例唯一标识。
     * @param {CreateServerImageReq} recreateServerImageRequestBody 构建云应用镜像的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recreateServerImage(recreateServerImageRequest?: RecreateServerImageRequest): Promise<RecreateServerImageResponse> {
        const options = ParamCreater().recreateServerImage(recreateServerImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的镜像实例当前这个接口的查询数据和list查询的一致。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定镜像实例
     * @param {string} serverId 镜像实例唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageServer(showImageServerRequest?: ShowImageServerRequest): Promise<ShowImageServerResponse> {
        const options = ParamCreater().showImageServer(showImageServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改镜像实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改镜像实例
     * @param {string} serverId 镜像实例唯一标识。
     * @param {UpdateImageServerReq} updateImageServerRequestBody 修改镜像实例的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateImageServer(updateImageServerRequest?: UpdateImageServerRequest): Promise<UpdateImageServerResponse> {
        const options = ParamCreater().updateImageServer(updateImageServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除子任务，忽略不存在的服务器并且返回成功响应。
     * 只能删除以下的两种状态：
     * - SUCCESS：成功。
     * - FAILED：失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除子任务
     * @param {BatchDeleteSubJobsReq} batchDeleteSubJobsRequestBody 批量删除子任务请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAppSubJobs(batchDeleteAppSubJobsRequest?: BatchDeleteAppSubJobsRequest): Promise<BatchDeleteAppSubJobsResponse> {
        const options = ParamCreater().batchDeleteAppSubJobs(batchDeleteAppSubJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除子任务，忽略不存在的服务器并且返回成功响应。
     * 只能删除以下的两种状态 SUCCESS：成功。 FAILED：失败
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除镜像子任务
     * @param {BatchDeleteSubJobsReq} batchDeleteImageSubJobsRequestBody 批量删除子任务请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteImageSubJobs(batchDeleteImageSubJobsRequest?: BatchDeleteImageSubJobsRequest): Promise<BatchDeleteImageSubJobsResponse> {
        const options = ParamCreater().batchDeleteImageSubJobs(batchDeleteImageSubJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询异步子任务数量,job_type未传递时,
     * 则查询JobType为CREATE_SERVER|CREATE_SERVER_IMAGE|DELETE_SERVER的子任务总数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 镜像子任务数量查询
     * @param {string} [status] job详情的状态： * &#x60;WAITING&#x60; - 等待 * &#x60;RUNNING&#x60; - 运行中 * &#x60;SUCCESS&#x60; - 成功 * &#x60;FAILED&#x60; - 失败 * &#x60;ABNORMAL&#x60; - 异常 * &#x60;ROLLBACK&#x60; - 回滚中 * &#x60;ABORTING&#x60; - 取消
     * @param {string} [jobType] 任务类型，传入多个任务类型的时候将任务类型用英文逗号(,)进行分隔。
     * @param {string} [jobId] 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countImageSubJobs(countImageSubJobsRequest?: CountImageSubJobsRequest): Promise<CountImageSubJobsResponse> {
        const options = ParamCreater().countImageSubJobs(countImageSubJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询异步子任务数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 子任务数量查询
     * @param {string} [status] job详情的状态： * &#x60;WAITING&#x60; - 等待 * &#x60;RUNNING&#x60; - 运行中 * &#x60;SUCCESS&#x60; - 成功 * &#x60;FAILED&#x60; - 失败 * &#x60;ABNORMAL&#x60; - 异常 * &#x60;ROLLBACK&#x60; - 回滚中 * &#x60;ABORTING&#x60; - 取消
     * @param {string} [jobType] 任务类型，传入多个任务类型的时候将任务类型用英文逗号(,)进行分隔： - CREATE_SERVER 创建服务器 - CREATE_SERVER_IMAGE 创建镜像 - DELETE_SERVER 删除服务器 - UPGRADE_ACCESS_AGENT 升级access agent
     * @param {string} [jobId] 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countSubJobs(countSubJobsRequest?: CountSubJobsRequest): Promise<CountSubJobsResponse> {
        const options = ParamCreater().countSubJobs(countSubJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询租户的异步任务执行情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的镜像任务列表
     * @param {string} jobType job类型： * &#x60;CREATE_SERVER&#x60; - 创建镜像实例 * &#x60;CREATE_SERVER_IMAGE&#x60; - 构建镜像 * &#x60;DELETE_SERVER&#x60; - 删除镜像实例
     * @param {string} [status] job状态： * &#x60;WAITING&#x60; - 等待 * &#x60;RUNNING&#x60; - 运行中 * &#x60;SUCCESS&#x60; - 完成 * &#x60;FAILED&#x60; - 失败
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageJobs(listImageJobsRequest?: ListImageJobsRequest): Promise<ListImageJobsResponse> {
        const options = ParamCreater().listImageJobs(listImageJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询异步子任务执行情况,sub_job_ids非空时offset和limit不会生效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 镜像子任务查询
     * @param {string} jobType job类型： * &#x60;CREATE_SERVER&#x60; - 创建镜像实例 * &#x60;CREATE_SERVER_IMAGE&#x60; - 构建镜像 * &#x60;DELETE_SERVER&#x60; - 删除镜像实例
     * @param {string} [status] job详情的状态： * &#x60;WAITING&#x60; - 等待 * &#x60;RUNNING&#x60; - 运行中 * &#x60;SUCCESS&#x60; - 成功 * &#x60;FAILED&#x60; - 失败 * &#x60;ABNORMAL&#x60; - 异常 * &#x60;ROLLBACK&#x60; - 回滚中 * &#x60;ABORTING&#x60; - 取消
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {string} [jobId] 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageSubJobs(listImageSubJobsRequest?: ListImageSubJobsRequest): Promise<ListImageSubJobsResponse> {
        const options = ParamCreater().listImageSubJobs(listImageSubJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询异步子任务执行情况,sub_job_ids非空时offset和limit不会生效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 子任务查询
     * @param {string} jobType job类型 * &#x60;CREATE_SERVER&#x60; - 创建服务器 * &#x60;DELETE_SERVER&#x60; - 删除服务器 * &#x60;REJOIN_DOMAIN&#x60; - 服务器重新加域 * &#x60;CHANGE_SERVER_IMAGE&#x60; - 修改服务器镜像 * &#x60;REINSTALL_OS&#x60; - 服务器重装操作系统 * &#x60;MIGRATE_SERVER&#x60; - 迁移服务器 * &#x60;UPDATE_SERVER_TSVI&#x60; - 更新虚拟IP配置 * &#x60;UPGRADE_ACCESS_AGENT&#x60; - hda升级 * &#x60;SCHEDULED_TASK&#x60; - 定时任务 * &#x60;UPDATE_FREEZE_STATUS&#x60; - 更新服务器冻结状态
     * @param {string} [status] job详情的状态： * &#x60;WAITING&#x60; - 等待 * &#x60;RUNNING&#x60; - 运行中 * &#x60;SUCCESS&#x60; - 成功 * &#x60;FAILED&#x60; - 失败 * &#x60;ABNORMAL&#x60; - 异常 * &#x60;ROLLBACK&#x60; - 回滚中 * &#x60;ABORTING&#x60; - 取消
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {string} [jobId] 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubJobs(listSubJobsRequest?: ListSubJobsRequest): Promise<ListSubJobsResponse> {
        const options = ParamCreater().listSubJobs(listSubJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询异步任务的执行情况，比如查询创建镜像实例任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像任务详情
     * @param {string} jobId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageJob(showImageJobRequest?: ShowImageJobRequest): Promise<ShowImageJobResponse> {
        const options = ParamCreater().showImageJob(showImageJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job的执行状态。
     * 
     * 对于创建云应用服务器命令下发后会返回job_id，通过job_id可以查询任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务的执行状态（已废弃）
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
     * 查询Job的执行状态。
     * 
     * 对于创建云服务器、删除云服务器、重建镜像等异步API，下发命令后会返回job_id，通过job_id可以查询任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务的执行状态详情
     * @param {string} jobId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobDetail(showJobDetailRequest?: ShowJobDetailRequest): Promise<ShowJobDetailResponse> {
        const options = ParamCreater().showJobDetail(showJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用组授权邮件发送记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用组授权邮件发送记录
     * @param {string} appGroupId 应用组ID。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {string} [account] 用户(组)名称。
     * @param {string} [mailSendType] 授权类型： - ADD_GROUP_AUTHORIZATION 添加组授权 - DEL_GROUP_AUTHORIZATION 删除组授权。
     * @param {string} [mailSendResult] 邮件发送结果(SUCCESS|FAIL)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorizationMailRecord(listAuthorizationMailRecordRequest?: ListAuthorizationMailRecordRequest): Promise<ListAuthorizationMailRecordResponse> {
        const options = ParamCreater().listAuthorizationMailRecord(listAuthorizationMailRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重发应用组授权邮件（根据授权邮件记录）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重发应用组授权邮件（根据授权邮件记录）
     * @param {ResendAuthorizationMailReq} sendAuthorizationMailRequestBody 重发应用组授权邮件（根据授权邮件记录）。
     * @param {string} [xLanguage] 语言： - zh-cn：中文 - en-us：英文 - fr-fr: 法文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendAuthorizationMail(sendAuthorizationMailRequest?: SendAuthorizationMailRequest): Promise<SendAuthorizationMailResponse> {
        const options = ParamCreater().sendAuthorizationMail(sendAuthorizationMailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重发应用组授权邮件（根据授权记录）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重发应用组授权邮件（根据授权记录）
     * @param {ResendAuthorizedMailReq} sendAuthorizedMailRequestBody 重发应用组授权邮件（根据授权记录）。
     * @param {string} [xLanguage] 语言： - zh-cn：中文 - en-us：英文 - fr-fr: 法文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendAuthorizedMail(sendAuthorizedMailRequest?: SendAuthorizedMailRequest): Promise<SendAuthorizedMailResponse> {
        const options = ParamCreater().sendAuthorizedMail(sendAuthorizedMailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除WKS存储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除WKS存储
     * @param {BatchDeletePersistentStorageReq} batchDeletePersistentStorageRequestBody 批量删除WKS存储请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePersistentStorage(batchDeletePersistentStorageRequest?: BatchDeletePersistentStorageRequest): Promise<BatchDeletePersistentStorageResponse> {
        const options = ParamCreater().batchDeletePersistentStorage(batchDeletePersistentStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增或更新存储目录访问权限自定义策略(已存在自定义策略时会对已有策略更新)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增或更新存储目录访问权限自定义策略
     * @param {CreateOrUpdateStoragePolicyStatementReq} createOrUpdateStoragePolicyStatementRequestBody 设置自定义权限策略内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrUpdateStoragePolicyStatement(createOrUpdateStoragePolicyStatementRequest?: CreateOrUpdateStoragePolicyStatementRequest): Promise<CreateOrUpdateStoragePolicyStatementResponse> {
        const options = ParamCreater().createOrUpdateStoragePolicyStatement(createOrUpdateStoragePolicyStatementRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建WKS存储，目前仅支持创建 SFS3.0 容量型文件系统。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建WKS存储
     * @param {CreatePersistentStorageReq} createPersistentStorageRequestBody WKS存储。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPersistentStorage(createPersistentStorageRequest?: CreatePersistentStorageRequest): Promise<CreatePersistentStorageResponse> {
        const options = ParamCreater().createPersistentStorage(createPersistentStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建共享存储目录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建共享存储目录
     * @param {string} storageId WKS存储ID。
     * @param {CreateShareFolderReq} createShareFolderRequestBody 创建共享存储目录请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createShareFolder(createShareFolderRequest?: CreateShareFolderRequest): Promise<CreateShareFolderResponse> {
        const options = ParamCreater().createShareFolder(createShareFolderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除共享存储，只会解除NAS与文件系统之间的关联关系，不会删除文件系统和文件系统中的数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除WKS存储
     * @param {string} storageId WKS存储ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePersistentStorage(deletePersistentStorageRequest?: DeletePersistentStorageRequest): Promise<DeletePersistentStorageResponse> {
        const options = ParamCreater().deletePersistentStorage(deletePersistentStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除共享存储目录。
     * &gt; 需要删除绑定的用户及用户组，才能删除共享文目录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享目录
     * @param {string} storageId WKS存储ID。
     * @param {DeleteStorageClaimReq} deleteStorageClaimRequestBody 删除存储目录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStorageClaim(deleteStorageClaimRequest?: DeleteStorageClaimRequest): Promise<DeleteStorageClaimResponse> {
        const options = ParamCreater().deleteStorageClaim(deleteStorageClaimRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除个人存储目录，个人目录中的数据也将永久删除且无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除个人存储目录
     * @param {string} storageId WKS存储ID。
     * @param {DeleteUserStorageAttachmentReq} deleteUserStorageAttachmentRequestBody 删除个人存储。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUserStorageAttachment(deleteUserStorageAttachmentRequest?: DeleteUserStorageAttachmentRequest): Promise<DeleteUserStorageAttachmentResponse> {
        const options = ParamCreater().deleteUserStorageAttachment(deleteUserStorageAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询WKS存储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询WKS存储
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 单次查询的大小[1-100]。
     * @param {string} [storageId] WKS存储ID。
     * @param {string} [name] 查询名称，模糊匹配。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPersistentStorage(listPersistentStorageRequest?: ListPersistentStorageRequest): Promise<ListPersistentStorageResponse> {
        const options = ParamCreater().listPersistentStorage(listPersistentStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SFS3.0存储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SFS3.0存储
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 单次查询的大小[1-100]。
     * @param {string} [name] 查询名称,模糊匹配。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSfs3Storage(listSfs3StorageRequest?: ListSfs3StorageRequest): Promise<ListSfs3StorageResponse> {
        const options = ParamCreater().listSfs3Storage(listSfs3StorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询共享存储目录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享存储目录
     * @param {string} storageId WKS存储ID。
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 单次查询的大小[1-100]。
     * @param {string} [storageClaimId] WKS存储目录声明ID。
     * @param {string} [path] 查询名称需满足如下规则: 1. 可见字符+空格。 2. 长度0~128个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listShareFolder(listShareFolderRequest?: ListShareFolderRequest): Promise<ListShareFolderResponse> {
        const options = ParamCreater().listShareFolder(listShareFolderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询个人存储目录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询个人存储目录
     * @param {string} storageId WKS存储ID。
     * @param {string} claimMode 存储声明的类型，claim_mode为share时，storage_claim_id必填。 * &#x60;USER&#x60; -  用户目录 * &#x60;SHARE&#x60; - 共享目录
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 单次查询的大小[1-100]。
     * @param {string} [storageClaimId] WKS存储目录声明ID。
     * @param {string} [attach] 成员。
     * @param {string} [attachType] 关联对象类型： * &#x60;USER&#x60; -  用户 * &#x60;USER_GROUP&#x60; - 用户组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStorageAssignment(listStorageAssignmentRequest?: ListStorageAssignmentRequest): Promise<ListStorageAssignmentResponse> {
        const options = ParamCreater().listStorageAssignment(listStorageAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询存储目录访问权限策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储目录访问权限策略
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 单次查询的大小[1-100]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStoragePolicyStatement(listStoragePolicyStatementRequest?: ListStoragePolicyStatementRequest): Promise<ListStoragePolicyStatementResponse> {
        const options = ParamCreater().listStoragePolicyStatement(listStoragePolicyStatementRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加或者移除共享目录成员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改共享目录成员
     * @param {string} storageId WKS存储ID。
     * @param {AssignShareFolderReq} updateShareFolderAssignmentRequestBody 分配共享目录用户。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateShareFolderAssignment(updateShareFolderAssignmentRequest?: UpdateShareFolderAssignmentRequest): Promise<UpdateShareFolderAssignmentResponse> {
        const options = ParamCreater().updateShareFolderAssignment(updateShareFolderAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建个人存储目录，已存在对应目录时，仅更新策略不会重复创建目录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建个人存储目录
     * @param {string} storageId WKS存储ID。
     * @param {AssignUserFolderReq} updateUserFolderAssignmentRequestBody 创建并设置个人目录关联对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserFolderAssignment(updateUserFolderAssignmentRequest?: UpdateUserFolderAssignmentRequest): Promise<UpdateUserFolderAssignmentResponse> {
        const options = ParamCreater().updateUserFolderAssignment(updateUserFolderAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增策略组，通过策略组能灵活地控制客户端访问与接入策略，如：文件、剪切板、会话等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增策略组
     * @param {CreatePolicyGroupReq} createPolicyGroupRequestBody 请求体。
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
     * 新增策略模板。策略模板创建好后，用户在创建策略组的时候，就可以根据已有策略模板按需调整配置，快速完成策略组的创建。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增策略模板
     * @param {CreatePolicyTemplateReq} createPolicyTemplateRequestBody 新增策略模板请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicyTemplate(createPolicyTemplateRequest?: CreatePolicyTemplateRequest): Promise<CreatePolicyTemplateResponse> {
        const options = ParamCreater().createPolicyTemplate(createPolicyTemplateRequest);

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
     * 删除指定策略模板，包含策略模板对应的策略信息以及应用对象信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除策略模板
     * @param {string} policyTemplateId 策略模板id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicyTemplate(deletePolicyTemplateRequest?: DeletePolicyTemplateRequest): Promise<DeletePolicyTemplateResponse> {
        const options = ParamCreater().deletePolicyTemplate(deletePolicyTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询策略组概要信息列表,包括应用对象和详细策略项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组列表
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 查询的数量，值区间[1-100]。
     * @param {string} [policyGroupName] 根据策略组名字过滤结果。
     * @param {number} [policyGroupType] 根据策略组类型名字过滤结果, 0:VM类, 4:策略模板。
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
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 查询的数量，值区间[1-100]。
     * @param {string} [policyGroupName] 根据策略组名字过滤结果。
     * @param {number} [policyGroupType] 根据策略组类型名字过滤结果, 0:VM类, 4:策略模板。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyGroupDetailInfo(listPolicyGroupDetailInfoRequest?: ListPolicyGroupDetailInfoRequest): Promise<ListPolicyGroupDetailInfoResponse> {
        const options = ParamCreater().listPolicyGroupDetailInfo(listPolicyGroupDetailInfoRequest);

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
     * @param {string} [policyType] 根据策略类型过滤结果，不传则查询所有策略。 可选类型: - 外设：Peripherals; - 音频：Audio; - 客户端：Client; - 显示：Display; - 文件与剪切板：FileAndClip; - 接入控制：ClientAccessControl; - 会话：SessionAutoDisconnect; - 虚拟通道：VirtualChannel - 键盘鼠标：KeyboardAndMouse; - 通用音视频旁路：Seamless。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyOfPolicyGroup(listPolicyOfPolicyGroupRequest?: ListPolicyOfPolicyGroupRequest): Promise<ListPolicyOfPolicyGroupResponse> {
        const options = ParamCreater().listPolicyOfPolicyGroup(listPolicyOfPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询策略模板概要信息列表，包含策略信息以及应用对象信息。用户在创建策略组的时候，可以根据已有策略模板按需调整配置，快速完成策略组的创建。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略模板列表
     * @param {number} [offset] 查询的偏移量。
     * @param {number} [limit] 查询的数量，值区间[1-100]。
     * @param {string} [policyGroupName] 根据策略模板名字过滤结果。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyTemplate(listPolicyTemplateRequest?: ListPolicyTemplateRequest): Promise<ListPolicyTemplateResponse> {
        const options = ParamCreater().listPolicyTemplate(listPolicyTemplateRequest);

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
     * @param {string} [targetType] 应用对象的类型： - USER：表示用户。 - USERGROUP：表示用户组。 - APPGROUP：应用组。 - OU：组织单元。 - ALl：所有类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTargetsOfPolicyGroup(listTargetsOfPolicyGroupRequest?: ListTargetsOfPolicyGroupRequest): Promise<ListTargetsOfPolicyGroupResponse> {
        const options = ParamCreater().listTargetsOfPolicyGroup(listTargetsOfPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询初始策略项，初始策略项是所有协议策略配置项的默认配置，用户可以在初始策略项的基础上根据需求修改指定的配置，创建新的策略组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询初始策略项
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOriginalPolicyInfo(showOriginalPolicyInfoRequest?: ShowOriginalPolicyInfoRequest): Promise<ShowOriginalPolicyInfoResponse> {
        const options = ParamCreater().showOriginalPolicyInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据策略组ID查询策略组详细信息，包含策略信息以及应用对象信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组详情
     * @param {string} policyGroupId 策略组id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicyGroup(showPolicyGroupRequest?: ShowPolicyGroupRequest): Promise<ShowPolicyGroupResponse> {
        const options = ParamCreater().showPolicyGroup(showPolicyGroupRequest);

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
     * @param {UpdatePolicyGroupReq} updatePolicyGroupRequestBody 修改指定策略组请求体。
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
     * 修改指定策略模板的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改策略模板
     * @param {string} policyTemplateId 策略模板id。
     * @param {UpdatePolicyTemplateReq} updatePolicyTemplateRequestBody 修改指定策略模板请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyTemplate(updatePolicyTemplateRequest?: UpdatePolicyTemplateRequest): Promise<UpdatePolicyTemplateResponse> {
        const options = ParamCreater().updatePolicyTemplate(updatePolicyTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配额校验，购买服务器前可用调用该接口，校验本次创建服务器资源是否足够。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配额校验
     * @param {string} productId 产品id。
     * @param {number} subscriptionNum 订单需要创建总实例数、订购数量。
     * @param {number} diskSize 单台实例所需的磁盘大小（最大系统盘1块*1024、数据盘10块*32768）。
     * @param {number} diskNum 单台实例所需的磁盘数量（最大系统盘1块、数据盘10块）。
     * @param {string} [flavorId] 规格id。
     * @param {boolean} [isPeriod] 是否包周期。
     * @param {string} [dehId] 主机id。
     * @param {string} [clusterId] 云专属分布式存储池id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkQuota(checkQuotaRequest?: CheckQuotaRequest): Promise<CheckQuotaResponse> {
        const options = ParamCreater().checkQuota(checkQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增/修改弹性伸缩策略,仅按需的服务器支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增/修改弹性伸缩策略
     * @param {CreateOrUpdateScalingPolicyReq} createOrUpdateScalingPolicyRequestBody 批量添加/删除资源tag请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrUpdateScalingPolicy(createOrUpdateScalingPolicyRequest?: CreateOrUpdateScalingPolicyRequest): Promise<CreateOrUpdateScalingPolicyResponse> {
        const options = ParamCreater().createOrUpdateScalingPolicy(createOrUpdateScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除弹性伸缩策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除弹性伸缩策略
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScalingPolicy(deleteScalingPolicyRequest?: DeleteScalingPolicyRequest): Promise<DeleteScalingPolicyResponse> {
        const options = ParamCreater().deleteScalingPolicy(deleteScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器组弹性伸缩策略,如果服务器未配置策略时响应默认策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器组弹性伸缩策略
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScalingPolicy(showScalingPolicyRequest?: ShowScalingPolicyRequest): Promise<ShowScalingPolicyResponse> {
        const options = ParamCreater().showScalingPolicy(showScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除定时任务，忽略不存在的服务器组并且返回成功响应。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除定时任务
     * @param {BatchDeleteScheduleTaskReq} batchDeleteScheduleTaskRequestBody 批量删除服务器组请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteScheduleTask(batchDeleteScheduleTaskRequest?: BatchDeleteScheduleTaskRequest): Promise<BatchDeleteScheduleTaskResponse> {
        const options = ParamCreater().batchDeleteScheduleTask(batchDeleteScheduleTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增定时任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增定时任务
     * @param {CreateScheduleTaskReq} createScheduleTaskRequestBody 新增定时任务请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScheduleTask(createScheduleTaskRequest?: CreateScheduleTaskRequest): Promise<CreateScheduleTaskResponse> {
        const options = ParamCreater().createScheduleTask(createScheduleTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除任务，忽略不存在的任务并且返回成功响应。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除任务
     * @param {string} taskId 定时任务唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScheduleTask(deleteScheduleTaskRequest?: DeleteScheduleTaskRequest): Promise<DeleteScheduleTaskResponse> {
        const options = ParamCreater().deleteScheduleTask(deleteScheduleTaskRequest);

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
     * @param {ListFutureExecutionsReq} listFutureExecutionsRequestBody 未来执行的具体时间列表请求参数。
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
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {string} [taskName] 定时任务名称。
     * @param {string} [taskType] 任务类型： * &#x60;RESTART_SERVER&#x60; - 定时重启服务器 * &#x60;START_SERVER&#x60; - 定时开机 * &#x60;STOP_SERVER&#x60; - 定时关机 * &#x60;REINSTALL_OS&#x60; - 定时重装操作系统
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduleTasks(listScheduleTasksRequest?: ListScheduleTasksRequest): Promise<ListScheduleTasksResponse> {
        const options = ParamCreater().listScheduleTasks(listScheduleTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询定时任务执行子任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时任务执行子任务列表
     * @param {string} executeHistoryId 定时任务唯一标识。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskExecuteDetail(listTaskExecuteDetailRequest?: ListTaskExecuteDetailRequest): Promise<ListTaskExecuteDetailResponse> {
        const options = ParamCreater().listTaskExecuteDetail(listTaskExecuteDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询定时任务执行列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时任务执行列表
     * @param {string} taskId 定时任务唯一标识。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskExecuteHistory(listTaskExecuteHistoryRequest?: ListTaskExecuteHistoryRequest): Promise<ListTaskExecuteHistoryResponse> {
        const options = ParamCreater().listTaskExecuteHistory(listTaskExecuteHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定定时任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定定时任务详情
     * @param {string} taskId 定时任务唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScheduleTask(showScheduleTaskRequest?: ShowScheduleTaskRequest): Promise<ShowScheduleTaskResponse> {
        const options = ParamCreater().showScheduleTask(showScheduleTaskRequest);

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
     * @param {string} taskId 定时任务唯一标识。
     * @param {UpdateScheduleTaskReq} updateScheduleTaskRequestBody 修改定时任务请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScheduleTask(updateScheduleTaskRequest?: UpdateScheduleTaskRequest): Promise<UpdateScheduleTaskResponse> {
        const options = ParamCreater().updateScheduleTask(updateScheduleTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改服务器的镜像。
     * &gt; - 服务器的镜像和服务器组的镜像不一样时，支持服务器的镜像切换为服务器组的镜像，并且仅允许同等镜像进行切换，例如：同操作系统，免费镜像切换，同源同价的付费镜像切换。如果服务器组的镜像和服务器的镜像为非同等镜像，建议您直接购买新的服务器，删除或者退订老的服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改服务器的镜像
     * @param {BatchChangeServerImageReq} batchChangeServerImageRequestBody 批量修改服务器的镜像请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchChangeServerImage(batchChangeServerImageRequest?: BatchChangeServerImageRequest): Promise<BatchChangeServerImageResponse> {
        const options = ParamCreater().batchChangeServerImage(batchChangeServerImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 标记服务器维护状态，处于维护状态中的服务器不再分配流量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 标记服务器维护状态
     * @param {BatchChangeMaintainServerReq} batchChangeServerMaintainModeRequestBody 标记指定的服务器维护状态的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchChangeServerMaintainMode(batchChangeServerMaintainModeRequest?: BatchChangeServerMaintainModeRequest): Promise<BatchChangeServerMaintainModeResponse> {
        const options = ParamCreater().batchChangeServerMaintainMode(batchChangeServerMaintainModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除服务器。
     * &gt; - [仅支持删除按需订购的服务器，包周期订购的服务器需要到Console界面进行退订，订单退订成功后服务器将会自动删除。](tag:HW)[批量删除服务器。](tag:HCS)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除服务器
     * @param {BatchDeleteServerReq} batchDeleteServerRequestBody 批量删除服务器的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteServer(batchDeleteServerRequest?: BatchDeleteServerRequest): Promise<BatchDeleteServerResponse> {
        const options = ParamCreater().batchDeleteServer(batchDeleteServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 迁移云办公主机下面的服务器到目标云办公主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 迁移云办公主机下面的服务器到目标云办公主机
     * @param {BatchMigrateServerReq} batchMigrateHostsServerRequestBody 迁移云办公主机请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchMigrateHostsServer(batchMigrateHostsServerRequest?: BatchMigrateHostsServerRequest): Promise<BatchMigrateHostsServerResponse> {
        const options = ParamCreater().batchMigrateHostsServer(batchMigrateHostsServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启服务器
     * @param {ServerHaltReq} batchRebootServerRequestBody 重启服务器请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRebootServer(batchRebootServerRequest?: BatchRebootServerRequest): Promise<BatchRebootServerResponse> {
        const options = ParamCreater().batchRebootServer(batchRebootServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重装服务器。
     * &gt; - 使用服务器原有的镜像进行重装，当服务器异常无法恢复时或者服务器运行时间久了，性能下降时，可选择重建服务器。注意：重装时系统盘的数据将会被清理掉。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量重装服务器
     * @param {BatchReinstallServerReq} batchReinstallServerRequestBody 批量重装服务器请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchReinstallServer(batchReinstallServerRequest?: BatchReinstallServerRequest): Promise<BatchReinstallServerResponse> {
        const options = ParamCreater().batchReinstallServer(batchReinstallServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量服务器重新加入AD域，一般用于解决服务器脱域的情况使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量服务器重新加域
     * @param {BatchRejoinDomainReq} batchRejoinDomainRequestBody 批量服务器重新加入AD域的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRejoinDomain(batchRejoinDomainRequest?: BatchRejoinDomainRequest): Promise<BatchRejoinDomainResponse> {
        const options = ParamCreater().batchRejoinDomain(batchRejoinDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动服务器
     * @param {BatchStartServerReq} batchStartServerRequestBody 启动服务器请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStartServer(batchStartServerRequest?: BatchStartServerRequest): Promise<BatchStartServerResponse> {
        const options = ParamCreater().batchStartServer(batchStartServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭服务器
     * @param {ServerHaltReq} batchStopServerRequestBody 关闭服务器请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStopServer(batchStopServerRequest?: BatchStopServerRequest): Promise<BatchStopServerResponse> {
        const options = ParamCreater().batchStopServer(batchStopServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新服务器虚拟会话IP配置，按需重启机器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新服务器虚拟会话IP配置
     * @param {UpdateTsviReq} batchUpdateTsviRequestBody 批量更新服务器虚拟会话IP配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateTsvi(batchUpdateTsviRequest?: BatchUpdateTsviRequest): Promise<BatchUpdateTsviResponse> {
        const options = ParamCreater().batchUpdateTsvi(batchUpdateTsviRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量升级服务器HDA版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量升级服务器HDA版本
     * @param {BatchUpgradeHdaVersionReq} batchUpgradeHdaVersionRequestBody 批量升级服务器HDA版本的请求内容，传入需要升级服务器的sid集合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpgradeHdaVersion(batchUpgradeHdaVersionRequest?: BatchUpgradeHdaVersionRequest): Promise<BatchUpgradeHdaVersionResponse> {
        const options = ParamCreater().batchUpgradeHdaVersion(batchUpgradeHdaVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改服务器的镜像。
     * &gt; - 服务器的镜像和服务器组的镜像不一样时，支持服务器的镜像切换为服务器组的镜像，并且仅允许同等镜像进行切换，例如：同操作系统，免费镜像切换，同源同价的付费镜像切换。如果服务器组的镜像和服务器的镜像为非同等镜像，建议您直接购买新的服务器，删除或者退订老的服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改服务器的镜像
     * @param {string} serverId 服务器唯一标识。
     * @param {ChangeServerImageReq} changeServerImageRequestBody 修改服务器的镜像请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeServerImage(changeServerImageRequest?: ChangeServerImageRequest): Promise<ChangeServerImageResponse> {
        const options = ParamCreater().changeServerImage(changeServerImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云服务器接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云服务器
     * @param {CreateAppServerReq} createAppServersRequestBody 创建服务请求体。
     * @param {string} [xLinkedId] 交易组件调用时下发的关联ID。
     * @param {string} [serviceTransactionId] CBC接口回调时，请求头里带上的业务ID 包周期场景必填 按需场景无。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppServers(createAppServersRequest?: CreateAppServersRequest): Promise<CreateAppServersResponse> {
        const options = ParamCreater().createAppServers(createAppServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务器，忽略不存在的服务器并且返回成功响应。订单退订成功后调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务器
     * @param {string} serverId 服务器唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServer(deleteServerRequest?: DeleteServerRequest): Promise<DeleteServerResponse> {
        const options = ParamCreater().deleteServer(deleteServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的所有HDA最新版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的所有HDA最新版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessAgentLatestVersion(listAccessAgentLatestVersionRequest?: ListAccessAgentLatestVersionRequest): Promise<ListAccessAgentLatestVersionResponse> {
        const options = ParamCreater().listAccessAgentLatestVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器的HDA相关信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器的HDA相关信息
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {string} [serverGroupId] 服务器组id。
     * @param {string} [serverName] 服务器名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerHdaDetails(listServerHdaDetailsRequest?: ListServerHdaDetailsRequest): Promise<ListServerHdaDetailsResponse> {
        const options = ParamCreater().listServerHdaDetails(listServerHdaDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器的HDA升级跟踪记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器的HDA升级跟踪记录
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerHdaUpgradeRecords(listServerHdaUpgradeRecordsRequest?: ListServerHdaUpgradeRecordsRequest): Promise<ListServerHdaUpgradeRecordsResponse> {
        const options = ParamCreater().listServerHdaUpgradeRecords(listServerHdaUpgradeRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间范围指定指标的指定粒度的监控数据，可以通过参数指定需要查询的数据维度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定时间范围指定指标的指定粒度的监控数据
     * @param {string} serverId 服务器唯一标识。
     * @param {string} namespace 服务的命名空间：例如 \&quot;SYS.ECS/AGT.ECS\&quot;，当namespace为AGT.ECS，则查询GPU监控指标：  - SYS.ECS：弹性云服务器的基础监控指标。  - AGT.ECS：弹性云服务器操作系统监控的监控指标（GPU指标）。
     * @param {string} metricName 监控查询指标名称:  - SYS.ECS命名空间的指标名称,请参考帮助文档：“[弹性云服务器支持的基础监控指标](https://support.huaweicloud.com/usermanual-ecs/ecs_03_1002.html)”。  - AGT.ECS命名空间的指标名称,请参考帮助文档：“[操作系统监控指标：GPU](https://support.huaweicloud.com/usermanual-ecs/ecs_03_1003.html#section11)”。
     * @param {string} from 查询数据起始时间，UNIX时间戳，单位毫秒。
     * @param {string} to 查询数据截止时间UNIX时间戳，单位毫秒。from必须小于to。
     * @param {number} period 监控数据粒度。 取值范围：  - 1: 实时数据。  - 300: 5分钟粒度。  - 1200: 20分钟粒度。  - 3600: 1小时粒度。  - 14400: 4小时粒度。  - 86400: 1天粒度。
     * @param {string} filter 数据聚合方式，支持的聚合方式如下:  - average：聚合周期内指标数据的平均值。  - max：聚合周期内指标数据的最大值。  - min：聚合周期内指标数据的最小值。  - sum：聚合周期内指标数据的求和值。  - variance：聚合周期内指标数据的方差。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerMetricData(listServerMetricDataRequest?: ListServerMetricDataRequest): Promise<ListServerMetricDataResponse> {
        const options = ParamCreater().listServerMetricData(listServerMetricDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器列表
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {string} [serverGroupId] 服务器组唯一标识。
     * @param {string} [serverName] 服务器名称，支持部分匹配。
     * @param {string} [machineName] 机器名称，支持部分匹配。
     * @param {string} [ipAddr] ip地址，支持部分匹配。
     * @param {string} [serverId] 服务器唯一标识。
     * @param {string} [maintainStatus] 服务器维护状态： - true : 维护态的实例。 - false: 非维护态的实例。
     * @param {string} [scalingAutoCreate] 是否是弹性创建： true : 通过弹性伸缩创建。 false: 不是通过弹性伸缩创建。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServers(listServersRequest?: ListServersRequest): Promise<ListServersResponse> {
        const options = ParamCreater().listServers(listServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重装服务器。
     * &gt; - 使用服务器原有的镜像进行重装，当服务器异常无法恢复时或者服务器运行时间久了，性能下降时，可选择重建服务器。注意：重装时系统盘的数据将会被清理掉。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重装服务器
     * @param {string} serverId 服务器唯一标识。
     * @param {ReinstallServerReq} reinstallServerRequestBody 重装服务器请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public reinstallServer(reinstallServerRequest?: ReinstallServerRequest): Promise<ReinstallServerResponse> {
        const options = ParamCreater().reinstallServer(reinstallServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的HDA最新版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的HDA最新版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccessAgentLatestVersion(showAccessAgentLatestVersionRequest?: ShowAccessAgentLatestVersionRequest): Promise<ShowAccessAgentLatestVersionResponse> {
        const options = ParamCreater().showAccessAgentLatestVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询HDA升级提醒标识(仅内部访问使用)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询HDA升级提醒标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHdaUpgradeFlag(showHdaUpgradeFlagRequest?: ShowHdaUpgradeFlagRequest): Promise<ShowHdaUpgradeFlagResponse> {
        const options = ParamCreater().showHdaUpgradeFlag();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的服务器当前这个接口的查询数据和list查询的一致。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定服务器
     * @param {string} serverId 服务器唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServer(showServerRequest?: ShowServerRequest): Promise<ShowServerResponse> {
        const options = ParamCreater().showServer(showServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可获取某一计算机在一段时间段(范围：1小时到30天)的数据信息（例如CPU占用率、内存占用率、用户的在线时间段等），最长数据保存时间不能超过180天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云应用服务器监控信息
     * @param {string} serverId 服务器唯一标识。
     * @param {Date} startTime 监控开始时间：由日期加时间组成，UTC格式，例如“2021-05-11T11:45:42.000Z”。
     * @param {Date} endTime 监控结束时间：由日期加时间组成，UTC格式，例如“2021-05-11T11:45:42.000Z”。
     * @param {string} [metricName] 监控查询指标：例如 \&quot;cpu_util\&quot;，详情见下表；当metric_name为空时，为批量查询。| 指标                                  | 指标名称          | 测量对象     | 监控周期 || ------------------------------------- | ----------------- | ------------ | -------- || cpu_util                              | CPU使用率         | 弹性云服务器 | 5分钟    || mem_util                              | 内存使用率        | 弹性云服务器 | 5分钟    || disk_util_inband                      | 磁盘使用率        | 弹性云服务器 | 5分钟    || disk_read_bytes_rate                  | 磁盘读带宽        | 弹性云服务器 | 5分钟    || disk_write_bytes_rate                 | 磁盘写带宽        | 弹性云服务器 | 5分钟    || disk_read_requests_rate               | 磁盘读IOPS        | 弹性云服务器 | 5分钟    || disk_write_requests_rate              | 磁盘写IOPS        | 弹性云服务器 | 5分钟    || network_incoming_bytes_rate_inband    | 带内网络流入速率  | 弹性云服务器 | 5分钟    || network_outgoing_bytes_rate_inband    | 带内网络流出速率  | 弹性云服务器 | 5分钟    || network_incoming_bytes_aggregate_rate | 带外网络流入速率  | 弹性云服务器 | 5分钟    || network_outgoing_bytes_aggregate_rate | 带外网络流出速率  | 弹性云服务器 | 5分钟    |
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerMetricData(showServerMetricDataRequest?: ShowServerMetricDataRequest): Promise<ShowServerMetricDataResponse> {
        const options = ParamCreater().showServerMetricData(showServerMetricDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取VNC远程登录地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取VNC远程登录地址
     * @param {string} serverId 服务器唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerVnc(showServerVncRequest?: ShowServerVncRequest): Promise<ShowServerVncResponse> {
        const options = ParamCreater().showServerVnc(showServerVncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改服务器。
     * &gt; - 服务器的状态修改为维护模式后，用户打开应用，选择可用的服务器进行接入的时候，会过滤掉处于维护模式的服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改服务器
     * @param {string} serverId 服务器唯一标识。
     * @param {UpdateServerReq} updateServerRequestBody 修改服务器的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServer(updateServerRequest?: UpdateServerRequest): Promise<UpdateServerResponse> {
        const options = ParamCreater().updateServer(updateServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建服务器组。
     * &gt; - 服务器组是一组相同配置的服务器集合，服务器组内的服务器使用同一镜像创建，配置相同，运行相同的应用程序。用户在打开云应用时，会根据调度规则选取组内的一台可用服务器进行连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务器组
     * @param {CreateServerGroupReq} createServerGroupRequestBody 创建服务器组请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createServerGroup(createServerGroupRequest?: CreateServerGroupRequest): Promise<CreateServerGroupResponse> {
        const options = ParamCreater().createServerGroup(createServerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务器组。
     * - &gt; 删除服务器组之前，需要先删除服务器组内的所有服务器。如果传服务器组已被删除，重复执行删除，则返回成功响应。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务器组
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerGroups(deleteServerGroupsRequest?: DeleteServerGroupsRequest): Promise<DeleteServerGroupsResponse> {
        const options = ParamCreater().deleteServerGroups(deleteServerGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器组列表
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {string} [serverGroupName] 服务器组名称。
     * @param {string} [serverGroupId] 服务器组唯一标识。
     * @param {string} [appType] 应用组类型： * &#x60;SESSION_DESKTOP_APP&#x60; - 会话桌面app * &#x60;COMMON_APP&#x60; - 普通app
     * @param {string} [tags] 查询tag字段中包含该值的服务器组。
     * @param {string} [enterpriseProjectId] 企业项目ID(字段为空或者0表示使用默认default企业项目)。
     * @param {string} [isSecondaryServerGroup] 是否为备服务器组，不传默认查所有： true : 是备服务器组。 false: 主服务器组，默认。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerGroups(listServerGroupsRequest?: ListServerGroupsRequest): Promise<ListServerGroupsResponse> {
        const options = ParamCreater().listServerGroups(listServerGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户服务器组基础信息列表(用于创建应用组时绑定服务器组)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户服务器组基础信息列表
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {number} [limit] 查询的数量，值区间[1-100]，默认值10。
     * @param {string} [severGroupName] 服务器组名称。
     * @param {string} [appType] 应用组类型： * &#x60;SESSION_DESKTOP_APP&#x60; - 会话桌面app * &#x60;COMMON_APP&#x60; - 普通app
     * @param {string} [isSecondaryServerGroup] 是否为备服务器组，不传默认查所有： true : 是备服务器组。 false: 主服务器组，默认。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTenantServerGroups(listTenantServerGroupsRequest?: ListTenantServerGroupsRequest): Promise<ListTenantServerGroupsResponse> {
        const options = ParamCreater().listTenantServerGroups(listTenantServerGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的服务器组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定服务器组
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerGroup(showServerGroupRequest?: ShowServerGroupRequest): Promise<ShowServerGroupResponse> {
        const options = ParamCreater().showServerGroup(showServerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定租户服务器组限制查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 指定租户服务器组限制查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerGroupRestrict(showServerGroupRestrictRequest?: ShowServerGroupRestrictRequest): Promise<ShowServerGroupRestrictResponse> {
        const options = ParamCreater().showServerGroupRestrict();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的服务器组内服务器状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定服务器组内服务器状态
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerGroupState(showServerGroupStateRequest?: ShowServerGroupStateRequest): Promise<ShowServerGroupStateResponse> {
        const options = ParamCreater().showServerGroupState(showServerGroupStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改服务器组。
     * - &gt; 修改服务器组的镜像，系统盘大小，OU信息后，已创建的服务器配置不变，新添加的服务器会使用新的配置创建。修改最大会话数后，用户接入服务器组时，会按照最新的配置进行路由计算。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改服务器组
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {UpdateServerGroupReq} updateServerGroupRequestBody 修改服务器组的请求内容。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerGroup(updateServerGroupRequest?: UpdateServerGroupRequest): Promise<UpdateServerGroupResponse> {
        const options = ParamCreater().updateServerGroup(updateServerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验服务器组是否符合指定的规则。
     * 1. 校验服务器组名称是否符合规则。
     * 2. 校验服务器组名称是否重复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验服务器组
     * @param {ValidateSeverGroupReq} validateServerGroupRequestBody 校验服务器组的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateServerGroup(validateServerGroupRequest?: ValidateServerGroupRequest): Promise<ValidateServerGroupResponse> {
        const options = ParamCreater().validateServerGroup(validateServerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出应用使用记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出应用使用记录
     * @param {ListAppConnectionReq} exportAppConnectionRequestBody 导出应用使用记录请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportAppConnection(exportAppConnectionRequest?: ExportAppConnectionRequest): Promise<ExportAppConnectionResponse> {
        const options = ParamCreater().exportAppConnection(exportAppConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出用户会话列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出用户会话列表
     * @param {ExportSessionsReq} exportSessionsRequestBody 导出用户会话列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportSessions(exportSessionsRequest?: ExportSessionsRequest): Promise<ExportSessionsResponse> {
        const options = ParamCreater().exportSessions(exportSessionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出用户登录记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出用户登录记录
     * @param {ListUserConnectionReq} exportUserConnectionRequestBody 查询用户登录记录请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportUserConnection(exportUserConnectionRequest?: ExportUserConnectionRequest): Promise<ExportUserConnectionResponse> {
        const options = ParamCreater().exportUserConnection(exportUserConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用使用记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用使用记录
     * @param {ListAppConnectionReq} listAppConnectionRequestBody list app connection.
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppConnection(listAppConnectionRequest?: ListAppConnectionRequest): Promise<ListAppConnectionResponse> {
        const options = ParamCreater().listAppConnection(listAppConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户名查询当前会话。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据用户名查询当前会话
     * @param {string} userName 用户名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSessionByUserName(listSessionByUserNameRequest?: ListSessionByUserNameRequest): Promise<ListSessionByUserNameResponse> {
        const options = ParamCreater().listSessionByUserName(listSessionByUserNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户会话列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户会话列表
     * @param {string} queryBeginTime 搜索开始时间，以会话开始时间为条件查询，格式2024-02-27T03:47:51.182Z。
     * @param {string} queryEndTime 搜索结束时间，以会话开始时间为条件查询，格式2024-02-27T03:47:51.182Z。
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {string} [userName] 用户名。
     * @param {string} [appServerGroupId] AppServer组ID。
     * @param {string} [vmIp] 服务器IP。
     * @param {string} [publicIp] 客户端出口IP。
     * @param {string} [machineName] 应用服务器名称。
     * @param {string} [sessionState] 应用状态，支持查询多个，中间用英文逗号分隔： * &#x60;Active&#x60; - 会话当前处于活动状态，有用户登录并且正在使用。 * &#x60;Disconnected&#x60; - 用户已经登录但会话处于断开连接状态。 * &#x60;AppcInit&#x60; - 会话正在初始化。 * &#x60;SignedOut&#x60; - 会话已注销。 * &#x60;InitFail&#x60; - 会话初始化失败。
     * @param {string} [isSuccess] 会话是否创建成功,默认不填则查询全部 * \&#39;true\&#39; - 会话创建成功 * \&#39;false\&#39; - 会话创建失败
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSessions(listSessionsRequest?: ListSessionsRequest): Promise<ListSessionsResponse> {
        const options = ParamCreater().listSessions(listSessionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户登录记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户登录记录
     * @param {ListUserConnectionReq} listUserConnectionRequestBody list user connection.
     * @param {number} [limit] 单次查询的大小[1-100]，默认值10。
     * @param {number} [offset] 查询的偏移量，默认值0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserConnection(listUserConnectionRequest?: ListUserConnectionRequest): Promise<ListUserConnectionResponse> {
        const options = ParamCreater().listUserConnection(listUserConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户会话注销。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用户会话注销
     * @param {LogoffUserSessionReq} logoffUserSessionRequestBody 用户会话注销请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public logoffUserSession(logoffUserSessionRequest?: LogoffUserSessionRequest): Promise<LogoffUserSessionResponse> {
        const options = ParamCreater().logoffUserSession(logoffUserSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口为幂等接口：
     * 同时对多个服务器组批量添加标签，最大支持100个服务器组，每个服务器组最大20个标签
     * 创建时如果请求体中存在重复key则报错。        
     * 创建时，不允许设置重复key数据,如果数据库已存在该key，就覆盖value的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加服务器组标签
     * @param {BatchCreateServerGroupTagsReq} batchCreateServerGroupTagsRequestBody 批量创建标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateServerGroupTags(batchCreateServerGroupTagsRequest?: BatchCreateServerGroupTagsRequest): Promise<BatchCreateServerGroupTagsResponse> {
        const options = ParamCreater().batchCreateServerGroupTags(batchCreateServerGroupTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口为幂等接口：
     * 同时对多个服务器组批量删除标签，最大支持100个服务器组，每个服务器组最大20个标签。
     * 删除时，如果删除的标签不存在，默认处理成功，删除时不对标签字符集范围做校验。
     * 删除时tags结构体不能缺失，key不能为空，或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除服务器组标签
     * @param {BatchDeleteServerGroupTagsReq} batchDeleteServerGroupTagsRequestBody 批量删除标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteServerGroupTags(batchDeleteServerGroupTagsRequest?: BatchDeleteServerGroupTagsRequest): Promise<BatchDeleteServerGroupTagsResponse> {
        const options = ParamCreater().batchDeleteServerGroupTags(batchDeleteServerGroupTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口为幂等接口：
     * 创建时如果请求体中存在重复key则报错。
     * 创建时，不允许设置重复key数据,如果数据库已存在该key，就覆盖value的值。
     * 一个服务器组上最多有20个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加服务器组标签
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {CreateResourceTagReq} createServerGroupTagsRequestBody 创建资源标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createServerGroupTags(createServerGroupTagsRequest?: CreateServerGroupTagsRequest): Promise<CreateServerGroupTagsResponse> {
        const options = ParamCreater().createServerGroupTags(createServerGroupTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口为幂等接口：
     * 删除时，如果删除的标签不存在，默认处理成功,删除时不对标签字符集范围做校验。
     * 删除时tags结构体不能缺失，key不能为空，或者空字符串。
     * 支持最多每次删除20个标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务器组标签
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {DeleteResourceTagReq} deleteServerGroupTagsRequestBody 删除资源标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServerGroupTags(deleteServerGroupTagsRequest?: DeleteServerGroupTagsRequest): Promise<DeleteServerGroupTagsResponse> {
        const options = ParamCreater().deleteServerGroupTags(deleteServerGroupTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在所有服务器组上的资源标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户在所有服务器组上的标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerGroupTag(listServerGroupTagRequest?: ListServerGroupTagRequest): Promise<ListServerGroupTagResponse> {
        const options = ParamCreater().listServerGroupTag();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定服务器组的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器组的标签
     * @param {string} serverGroupId 服务器组唯一标识。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServerGroupTag(showServerGroupTagRequest?: ShowServerGroupTagRequest): Promise<ShowServerGroupTagResponse> {
        const options = ParamCreater().showServerGroupTag(showServerGroupTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询可用磁盘类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用磁盘类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumeType(listVolumeTypeRequest?: ListVolumeTypeRequest): Promise<ListVolumeTypeResponse> {
        const options = ParamCreater().listVolumeType();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 获取上传至OBS桶的临时ak/sk。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        authorizeObs(authorizeObsRequest?: AuthorizeObsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-warehouse/action/authorize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (authorizeObsRequest !== null && authorizeObsRequest !== undefined) {
                if (authorizeObsRequest instanceof AuthorizeObsRequest) {
                    body = authorizeObsRequest.body
                } else {
                    body = authorizeObsRequest['body'];
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
         * 批量删除应用仓库中的指定应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteWarehouseApp(batchDeleteWarehouseAppRequest?: BatchDeleteWarehouseAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-warehouse/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteWarehouseAppRequest !== null && batchDeleteWarehouseAppRequest !== undefined) {
                if (batchDeleteWarehouseAppRequest instanceof BatchDeleteWarehouseAppRequest) {
                    body = batchDeleteWarehouseAppRequest.body
                } else {
                    body = batchDeleteWarehouseAppRequest['body'];
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
         * 添加用户应用仓库桶及桶授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        bindAppWarehouseBucket(bindAppWarehouseBucketRequest?: BindAppWarehouseBucketRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-warehouse/bucket",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (bindAppWarehouseBucketRequest !== null && bindAppWarehouseBucketRequest !== undefined) {
                if (bindAppWarehouseBucketRequest instanceof BindAppWarehouseBucketRequest) {
                    body = bindAppWarehouseBucketRequest.body
                } else {
                    body = bindAppWarehouseBucketRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加桶或者桶授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBucketOrAcl() {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-warehouse/bucket-and-acl/create",
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
         * 在应用仓库中新增应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWarehouseApp(createWarehouseAppRequest?: CreateWarehouseAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-warehouse/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWarehouseAppRequest !== null && createWarehouseAppRequest !== undefined) {
                if (createWarehouseAppRequest instanceof CreateWarehouseAppRequest) {
                    body = createWarehouseAppRequest.body
                } else {
                    body = createWarehouseAppRequest['body'];
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
         * 删除应用仓库中的指定应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWarehouseApp(deleteWarehouseAppRequest?: DeleteWarehouseAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/app-warehouse/apps/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteWarehouseAppRequest !== null && deleteWarehouseAppRequest !== undefined) {
                if (deleteWarehouseAppRequest instanceof DeleteWarehouseAppRequest) {
                    id = deleteWarehouseAppRequest.id;
                } else {
                    id = deleteWarehouseAppRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteWarehouseApp.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户应用仓库中的应用列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWarehouseApps(listWarehouseAppsRequest?: ListWarehouseAppsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-warehouse/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let verifyStatus;
            
            let appId;
            
            let appName;
            
            let appCategory;

            if (listWarehouseAppsRequest !== null && listWarehouseAppsRequest !== undefined) {
                if (listWarehouseAppsRequest instanceof ListWarehouseAppsRequest) {
                    limit = listWarehouseAppsRequest.limit;
                    offset = listWarehouseAppsRequest.offset;
                    verifyStatus = listWarehouseAppsRequest.verifyStatus;
                    appId = listWarehouseAppsRequest.appId;
                    appName = listWarehouseAppsRequest.appName;
                    appCategory = listWarehouseAppsRequest.appCategory;
                } else {
                    limit = listWarehouseAppsRequest['limit'];
                    offset = listWarehouseAppsRequest['offset'];
                    verifyStatus = listWarehouseAppsRequest['verify_status'];
                    appId = listWarehouseAppsRequest['app_id'];
                    appName = listWarehouseAppsRequest['app_name'];
                    appCategory = listWarehouseAppsRequest['app_category'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (verifyStatus !== null && verifyStatus !== undefined) {
                localVarQueryParameter['verify_status'] = verifyStatus;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (appCategory !== null && appCategory !== undefined) {
                localVarQueryParameter['app_category'] = appCategory;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户应用仓库桶
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppWarehouseBucket() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-warehouse/bucket",
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
         * 修改应用仓库中的指定应用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWarehouseApp(updateWarehouseAppRequest?: UpdateWarehouseAppRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-warehouse/apps/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateWarehouseAppRequest !== null && updateWarehouseAppRequest !== undefined) {
                if (updateWarehouseAppRequest instanceof UpdateWarehouseAppRequest) {
                    id = updateWarehouseAppRequest.id;
                    body = updateWarehouseAppRequest.body
                } else {
                    id = updateWarehouseAppRequest['id'];
                    body = updateWarehouseAppRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateWarehouseApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在应用仓库中上传图标文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadWarehouseAppIcon(uploadWarehouseAppIconRequest?: UploadWarehouseAppIconRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-warehouse/apps/icon",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let data;
            

            if (uploadWarehouseAppIconRequest !== null && uploadWarehouseAppIconRequest !== undefined) {
                if (uploadWarehouseAppIconRequest instanceof UploadWarehouseAppIconRequest) {
                    data = uploadWarehouseAppIconRequest.body?.data;
                } else {
                    data = uploadWarehouseAppIconRequest['body']['data'];
                }
            }

        
            if (data !== undefined) { 
                localVarFormParams.append('data', data as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量禁用应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisableApp(batchDisableAppRequest?: BatchDisableAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/actions/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appGroupId;

            if (batchDisableAppRequest !== null && batchDisableAppRequest !== undefined) {
                if (batchDisableAppRequest instanceof BatchDisableAppRequest) {
                    appGroupId = batchDisableAppRequest.appGroupId;
                    body = batchDisableAppRequest.body
                } else {
                    appGroupId = batchDisableAppRequest['app_group_id'];
                    body = batchDisableAppRequest['body'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling batchDisableApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量启用应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchEnableApp(batchEnableAppRequest?: BatchEnableAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/actions/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appGroupId;

            if (batchEnableAppRequest !== null && batchEnableAppRequest !== undefined) {
                if (batchEnableAppRequest instanceof BatchEnableAppRequest) {
                    appGroupId = batchEnableAppRequest.appGroupId;
                    body = batchEnableAppRequest.body
                } else {
                    appGroupId = batchEnableAppRequest['app_group_id'];
                    body = batchEnableAppRequest['body'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling batchEnableApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验发布应用,不允许发布同名的应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkPublishApp(checkPublishAppRequest?: CheckPublishAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/actions/check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appGroupId;

            if (checkPublishAppRequest !== null && checkPublishAppRequest !== undefined) {
                if (checkPublishAppRequest instanceof CheckPublishAppRequest) {
                    appGroupId = checkPublishAppRequest.appGroupId;
                    body = checkPublishAppRequest.body
                } else {
                    appGroupId = checkPublishAppRequest['app_group_id'];
                    body = checkPublishAppRequest['body'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling checkPublishApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义应用应用图标，恢复使用默认应用图标，重复执行会按照成功处理(响应200)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppIcon(deleteAppIconRequest?: DeleteAppIconRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/{app_id}/icon",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appGroupId;
            
            let appId;

            if (deleteAppIconRequest !== null && deleteAppIconRequest !== undefined) {
                if (deleteAppIconRequest instanceof DeleteAppIconRequest) {
                    appGroupId = deleteAppIconRequest.appGroupId;
                    appId = deleteAppIconRequest.appId;
                } else {
                    appGroupId = deleteAppIconRequest['app_group_id'];
                    appId = deleteAppIconRequest['app_id'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling deleteAppIcon.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteAppIcon.');
            }

            options.pathParams = { 'app_group_id': appGroupId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已发布的应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublishedApp(listPublishedAppRequest?: ListPublishedAppRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appGroupId;
            
            let limit;
            
            let offset;
            
            let name;
            
            let state;
            
            let appId;

            if (listPublishedAppRequest !== null && listPublishedAppRequest !== undefined) {
                if (listPublishedAppRequest instanceof ListPublishedAppRequest) {
                    appGroupId = listPublishedAppRequest.appGroupId;
                    limit = listPublishedAppRequest.limit;
                    offset = listPublishedAppRequest.offset;
                    name = listPublishedAppRequest.name;
                    state = listPublishedAppRequest.state;
                    appId = listPublishedAppRequest.appId;
                } else {
                    appGroupId = listPublishedAppRequest['app_group_id'];
                    limit = listPublishedAppRequest['limit'];
                    offset = listPublishedAppRequest['offset'];
                    name = listPublishedAppRequest['name'];
                    state = listPublishedAppRequest['state'];
                    appId = listPublishedAppRequest['app_id'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling listPublishedApp.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量发布应用，不允许发布同名的应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishApp(publishAppRequest?: PublishAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appGroupId;

            if (publishAppRequest !== null && publishAppRequest !== undefined) {
                if (publishAppRequest instanceof PublishAppRequest) {
                    appGroupId = publishAppRequest.appGroupId;
                    body = publishAppRequest.body
                } else {
                    appGroupId = publishAppRequest['app_group_id'];
                    body = publishAppRequest['body'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling publishApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppDetail(showAppDetailRequest?: ShowAppDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appGroupId;
            
            let appId;

            if (showAppDetailRequest !== null && showAppDetailRequest !== undefined) {
                if (showAppDetailRequest instanceof ShowAppDetailRequest) {
                    appGroupId = showAppDetailRequest.appGroupId;
                    appId = showAppDetailRequest.appId;
                } else {
                    appGroupId = showAppDetailRequest['app_group_id'];
                    appId = showAppDetailRequest['app_id'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling showAppDetail.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAppDetail.');
            }

            options.pathParams = { 'app_group_id': appGroupId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用组下可发布的应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublishableApp(showPublishableAppRequest?: ShowPublishableAppRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-groups/{app_group_id}/publishable-app",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appGroupId;

            if (showPublishableAppRequest !== null && showPublishableAppRequest !== undefined) {
                if (showPublishableAppRequest instanceof ShowPublishableAppRequest) {
                    appGroupId = showPublishableAppRequest.appGroupId;
                } else {
                    appGroupId = showPublishableAppRequest['app_group_id'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling showPublishableApp.');
            }

            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量取消应用发布。
         * &gt; - 批量取消应用组下已经发布的应用，应用对应的授权会一起删除，重复执行会按照成功处理(响应200)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unpublishApp(unpublishAppRequest?: UnpublishAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/batch-unpublish",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appGroupId;

            if (unpublishAppRequest !== null && unpublishAppRequest !== undefined) {
                if (unpublishAppRequest instanceof UnpublishAppRequest) {
                    appGroupId = unpublishAppRequest.appGroupId;
                    body = unpublishAppRequest.body
                } else {
                    appGroupId = unpublishAppRequest['app_group_id'];
                    body = unpublishAppRequest['body'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling unpublishApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑修改应用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApp(updateAppRequest?: UpdateAppRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appGroupId;
            
            let appId;

            if (updateAppRequest !== null && updateAppRequest !== undefined) {
                if (updateAppRequest instanceof UpdateAppRequest) {
                    appGroupId = updateAppRequest.appGroupId;
                    appId = updateAppRequest.appId;
                    body = updateAppRequest.body
                } else {
                    appGroupId = updateAppRequest['app_group_id'];
                    appId = updateAppRequest['app_id'];
                    body = updateAppRequest['body'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling updateApp.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_group_id': appGroupId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量设置应用预启动。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePreBootPolicy(updatePreBootPolicyRequest?: UpdatePreBootPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/pre-boot-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appGroupId;

            if (updatePreBootPolicyRequest !== null && updatePreBootPolicyRequest !== undefined) {
                if (updatePreBootPolicyRequest instanceof UpdatePreBootPolicyRequest) {
                    appGroupId = updatePreBootPolicyRequest.appGroupId;
                    body = updatePreBootPolicyRequest.body
                } else {
                    appGroupId = updatePreBootPolicyRequest['app_group_id'];
                    body = updatePreBootPolicyRequest['body'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling updatePreBootPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改自定义应用图标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadAppIcon(uploadAppIconRequest?: UploadAppIconRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/{app_group_id}/apps/{app_id}/icon",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let appGroupId;
            
            let appId;
            let data;
            
            let iconUrl;
            

            if (uploadAppIconRequest !== null && uploadAppIconRequest !== undefined) {
                if (uploadAppIconRequest instanceof UploadAppIconRequest) {
                    appGroupId = uploadAppIconRequest.appGroupId;
                    appId = uploadAppIconRequest.appId;
                    data = uploadAppIconRequest.body?.data;
                    iconUrl = uploadAppIconRequest.body?.iconUrl;
                } else {
                    appGroupId = uploadAppIconRequest['app_group_id'];
                    appId = uploadAppIconRequest['app_id'];
                    data = uploadAppIconRequest['body']['data'];
                    iconUrl = uploadAppIconRequest['body']['iconUrl'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling uploadAppIcon.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling uploadAppIcon.');
            }
            if (iconUrl !== undefined) { 
                localVarFormParams.append('icon_url', iconUrl as any);
            }
            if (data !== undefined) { 
                localVarFormParams.append('data', data as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'app_group_id': appGroupId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 租户服务激活。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        initializeTenant(initializeTenantRequest?: InitializeTenantRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/tenant/action/active",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (initializeTenantRequest !== null && initializeTenantRequest !== undefined) {
                if (initializeTenantRequest instanceof InitializeTenantRequest) {
                    body = initializeTenantRequest.body
                } else {
                    body = initializeTenantRequest['body'];
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
         * 配置加载顺序： 查询企业级配置--&gt; 查不到则赋默认阿波罗配置--&gt; 阿波罗没有则不返回。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCorpConfigInfo(listCorpConfigInfoRequest?: ListCorpConfigInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/bundles/batch-query-config-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listCorpConfigInfoRequest !== null && listCorpConfigInfoRequest !== undefined) {
                if (listCorpConfigInfoRequest instanceof ListCorpConfigInfoRequest) {
                    body = listCorpConfigInfoRequest.body
                } else {
                    body = listCorpConfigInfoRequest['body'];
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
         * 查询租户信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTenantProfile() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/tenant/profile",
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
         * 批量删除应用组,重复执行会按照成功处理(响应200)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAppGroup(batchDeleteAppGroupRequest?: BatchDeleteAppGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteAppGroupRequest !== null && batchDeleteAppGroupRequest !== undefined) {
                if (batchDeleteAppGroupRequest instanceof BatchDeleteAppGroupRequest) {
                    body = batchDeleteAppGroupRequest.body
                } else {
                    body = batchDeleteAppGroupRequest['body'];
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
         * 校验应用组是否符合指定的规则。
         * 1. 校验应用组名称是否符合规则。
         * 2. 校验应用组名称是否重复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkAppGroup(checkAppGroupRequest?: CheckAppGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/rules/validate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkAppGroupRequest !== null && checkAppGroupRequest !== undefined) {
                if (checkAppGroupRequest instanceof CheckAppGroupRequest) {
                    body = checkAppGroupRequest.body
                } else {
                    body = checkAppGroupRequest['body'];
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
         * 该API用于创建应用组。
         * &gt; - 应用服务器中安装了不同的应用，这些应用可以组成不同的应用组，进行集中的管理和维护，向用户(组)发布。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppGroup(createAppGroupRequest?: CreateAppGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAppGroupRequest !== null && createAppGroupRequest !== undefined) {
                if (createAppGroupRequest instanceof CreateAppGroupRequest) {
                    body = createAppGroupRequest.body
                } else {
                    body = createAppGroupRequest['body'];
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
         * 删除指定的应用组,重复执行会按照成功处理(响应200)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppGroup(deleteAppGroupRequest?: DeleteAppGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/app-groups/{app_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appGroupId;

            if (deleteAppGroupRequest !== null && deleteAppGroupRequest !== undefined) {
                if (deleteAppGroupRequest instanceof DeleteAppGroupRequest) {
                    appGroupId = deleteAppGroupRequest.appGroupId;
                } else {
                    appGroupId = deleteAppGroupRequest['app_group_id'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling deleteAppGroup.');
            }

            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除服务组关联的所有应用组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateAppGroup(disassociateAppGroupRequest?: DisassociateAppGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/actions/disassociate-app-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverGroupId;

            if (disassociateAppGroupRequest !== null && disassociateAppGroupRequest !== undefined) {
                if (disassociateAppGroupRequest instanceof DisassociateAppGroupRequest) {
                    serverGroupId = disassociateAppGroupRequest.serverGroupId;
                } else {
                    serverGroupId = disassociateAppGroupRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
                throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling disassociateAppGroup.');
            }
            if (serverGroupId !== null && serverGroupId !== undefined) {
                localVarQueryParameter['server_group_id'] = serverGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户创建的应用组，按照名称、授权类型分页查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppGroup(listAppGroupRequest?: ListAppGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let appServerGroupId;
            
            let appGroupId;
            
            let name;
            
            let authorizationType;
            
            let appType;

            if (listAppGroupRequest !== null && listAppGroupRequest !== undefined) {
                if (listAppGroupRequest instanceof ListAppGroupRequest) {
                    limit = listAppGroupRequest.limit;
                    offset = listAppGroupRequest.offset;
                    appServerGroupId = listAppGroupRequest.appServerGroupId;
                    appGroupId = listAppGroupRequest.appGroupId;
                    name = listAppGroupRequest.name;
                    authorizationType = listAppGroupRequest.authorizationType;
                    appType = listAppGroupRequest.appType;
                } else {
                    limit = listAppGroupRequest['limit'];
                    offset = listAppGroupRequest['offset'];
                    appServerGroupId = listAppGroupRequest['app_server_group_id'];
                    appGroupId = listAppGroupRequest['app_group_id'];
                    name = listAppGroupRequest['name'];
                    authorizationType = listAppGroupRequest['authorization_type'];
                    appType = listAppGroupRequest['app_type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (appServerGroupId !== null && appServerGroupId !== undefined) {
                localVarQueryParameter['app_server_group_id'] = appServerGroupId;
            }
            if (appGroupId !== null && appGroupId !== undefined) {
                localVarQueryParameter['app_group_id'] = appGroupId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (authorizationType !== null && authorizationType !== undefined) {
                localVarQueryParameter['authorization_type'] = authorizationType;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppGroupDetail(showAppGroupDetailRequest?: ShowAppGroupDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-groups/{app_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appGroupId;

            if (showAppGroupDetailRequest !== null && showAppGroupDetailRequest !== undefined) {
                if (showAppGroupDetailRequest instanceof ShowAppGroupDetailRequest) {
                    appGroupId = showAppGroupDetailRequest.appGroupId;
                } else {
                    appGroupId = showAppGroupDetailRequest['app_group_id'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling showAppGroupDetail.');
            }

            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改应用组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppGroup(updateAppGroupRequest?: UpdateAppGroupRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-groups/{app_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appGroupId;

            if (updateAppGroupRequest !== null && updateAppGroupRequest !== undefined) {
                if (updateAppGroupRequest instanceof UpdateAppGroupRequest) {
                    appGroupId = updateAppGroupRequest.appGroupId;
                    body = updateAppGroupRequest.body
                } else {
                    appGroupId = updateAppGroupRequest['app_group_id'];
                    body = updateAppGroupRequest['body'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
            throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling updateAppGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_group_id': appGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建订单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrder(createOrderRequest?: CreateOrderRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/bundles/subscribe/order",
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
         * 查询云应用套餐，按照条件过滤。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProduct(listProductRequest?: ListProductRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/product",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productId;
            
            let flavorId;
            
            let availabilityZone;
            
            let osType;
            
            let chargeMode;
            
            let architecture;
            
            let packageType;

            if (listProductRequest !== null && listProductRequest !== undefined) {
                if (listProductRequest instanceof ListProductRequest) {
                    productId = listProductRequest.productId;
                    flavorId = listProductRequest.flavorId;
                    availabilityZone = listProductRequest.availabilityZone;
                    osType = listProductRequest.osType;
                    chargeMode = listProductRequest.chargeMode;
                    architecture = listProductRequest.architecture;
                    packageType = listProductRequest.packageType;
                } else {
                    productId = listProductRequest['product_id'];
                    flavorId = listProductRequest['flavor_id'];
                    availabilityZone = listProductRequest['availability_zone'];
                    osType = listProductRequest['os_type'];
                    chargeMode = listProductRequest['charge_mode'];
                    architecture = listProductRequest['architecture'];
                    packageType = listProductRequest['package_type'];
                }
            }

        
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (flavorId !== null && flavorId !== undefined) {
                localVarQueryParameter['flavor_id'] = flavorId;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询会话套餐列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSessionType() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/session-type",
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
         * 该接口用于查询会话套餐列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSessionTypes(showSessionTypesRequest?: ShowSessionTypesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/session-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showSessionTypesRequest !== null && showSessionTypesRequest !== undefined) {
                if (showSessionTypesRequest instanceof ShowSessionTypesRequest) {
                    body = showSessionTypesRequest.body
                } else {
                    body = showSessionTypesRequest['body'];
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
         * 应用组添加用户授权，授权后用户就获得应用组下所有已发布应用的权限访问。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAppGroupAuthorization(addAppGroupAuthorizationRequest?: AddAppGroupAuthorizationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/authorizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (addAppGroupAuthorizationRequest !== null && addAppGroupAuthorizationRequest !== undefined) {
                if (addAppGroupAuthorizationRequest instanceof AddAppGroupAuthorizationRequest) {
                    body = addAppGroupAuthorizationRequest.body
                    xLanguage = addAppGroupAuthorizationRequest.xLanguage;
                } else {
                    body = addAppGroupAuthorizationRequest['body'];
                    xLanguage = addAppGroupAuthorizationRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除应用组内的指定用户的授权，用户授权删除后，用户将没有权限访问应用组内的任何应用。注意：重复执行会按照操作成功处理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAppGroupAuthorization(batchDeleteAppGroupAuthorizationRequest?: BatchDeleteAppGroupAuthorizationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-groups/actions/batch-delete-authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchDeleteAppGroupAuthorizationRequest !== null && batchDeleteAppGroupAuthorizationRequest !== undefined) {
                if (batchDeleteAppGroupAuthorizationRequest instanceof BatchDeleteAppGroupAuthorizationRequest) {
                    body = batchDeleteAppGroupAuthorizationRequest.body
                    xLanguage = batchDeleteAppGroupAuthorizationRequest.xLanguage;
                } else {
                    body = batchDeleteAppGroupAuthorizationRequest['body'];
                    xLanguage = batchDeleteAppGroupAuthorizationRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用内已授权的用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppGroupAuthorization(listAppGroupAuthorizationRequest?: ListAppGroupAuthorizationRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-groups/actions/list-authorizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let appGroupId;
            
            let accountId;
            
            let account;
            
            let accountType;

            if (listAppGroupAuthorizationRequest !== null && listAppGroupAuthorizationRequest !== undefined) {
                if (listAppGroupAuthorizationRequest instanceof ListAppGroupAuthorizationRequest) {
                    limit = listAppGroupAuthorizationRequest.limit;
                    offset = listAppGroupAuthorizationRequest.offset;
                    appGroupId = listAppGroupAuthorizationRequest.appGroupId;
                    accountId = listAppGroupAuthorizationRequest.accountId;
                    account = listAppGroupAuthorizationRequest.account;
                    accountType = listAppGroupAuthorizationRequest.accountType;
                } else {
                    limit = listAppGroupAuthorizationRequest['limit'];
                    offset = listAppGroupAuthorizationRequest['offset'];
                    appGroupId = listAppGroupAuthorizationRequest['app_group_id'];
                    accountId = listAppGroupAuthorizationRequest['account_id'];
                    account = listAppGroupAuthorizationRequest['account'];
                    accountType = listAppGroupAuthorizationRequest['account_type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (appGroupId !== null && appGroupId !== undefined) {
                localVarQueryParameter['app_group_id'] = appGroupId;
            }
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
            }
            if (account !== null && account !== undefined) {
                localVarQueryParameter['account'] = account;
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['account_type'] = accountType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询支持的可用分区列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZone() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/availability-zone",
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
         * [该接口用于查询支持的可用分区列表，按站点分类。](tag:HW)[该接口用于查询支持的可用分区列表。](tag:HCS)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAz() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/availability-zone/summary",
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
         * 批量删除云存储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteCloudStorage(batchDeleteCloudStorageRequest?: BatchDeleteCloudStorageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-storages/actions/batch-delete-cloud-storages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteCloudStorageRequest !== null && batchDeleteCloudStorageRequest !== undefined) {
                if (batchDeleteCloudStorageRequest instanceof BatchDeleteCloudStorageRequest) {
                    body = batchDeleteCloudStorageRequest.body
                } else {
                    body = batchDeleteCloudStorageRequest['body'];
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
         * 切换文件夹归属集群，文件系统在切换
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeCluster(changeClusterRequest?: ChangeClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-storages/{storage_id}/actions/change-cluster",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;

            if (changeClusterRequest !== null && changeClusterRequest !== undefined) {
                if (changeClusterRequest instanceof ChangeClusterRequest) {
                    storageId = changeClusterRequest.storageId;
                    body = changeClusterRequest.body
                } else {
                    storageId = changeClusterRequest['storage_id'];
                    body = changeClusterRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling changeCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建项目配置关联，目前仅支持关联项目配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCloudStorage(createCloudStorageRequest?: CreateCloudStorageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-storages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCloudStorageRequest !== null && createCloudStorageRequest !== undefined) {
                if (createCloudStorageRequest instanceof CreateCloudStorageRequest) {
                    body = createCloudStorageRequest.body
                } else {
                    body = createCloudStorageRequest['body'];
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
         * 创建个人文件夹，已存在对应目录时，仅更新策略不会重复创建目录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUserFolderAssignment(createUserFolderAssignmentRequest?: CreateUserFolderAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-storages/{storage_id}/actions/create-folder",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;

            if (createUserFolderAssignmentRequest !== null && createUserFolderAssignmentRequest !== undefined) {
                if (createUserFolderAssignmentRequest instanceof CreateUserFolderAssignmentRequest) {
                    storageId = createUserFolderAssignmentRequest.storageId;
                    body = createUserFolderAssignmentRequest.body
                } else {
                    storageId = createUserFolderAssignmentRequest['storage_id'];
                    body = createUserFolderAssignmentRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling createUserFolderAssignment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除共享存储，只会解除NAS与项目配置之间的关联关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCloudStorage(deleteCloudStorageRequest?: DeleteCloudStorageRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cloud-storages/{storage_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let storageId;

            if (deleteCloudStorageRequest !== null && deleteCloudStorageRequest !== undefined) {
                if (deleteCloudStorageRequest instanceof DeleteCloudStorageRequest) {
                    storageId = deleteCloudStorageRequest.storageId;
                } else {
                    storageId = deleteCloudStorageRequest['storage_id'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling deleteCloudStorage.');
            }

            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除个人存储目录，个人目录中的数据也将永久删除且无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCloudStorageAttachment(deleteCloudStorageAttachmentRequest?: DeleteCloudStorageAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-storages/{storage_id}/actions/delete-folder",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;

            if (deleteCloudStorageAttachmentRequest !== null && deleteCloudStorageAttachmentRequest !== undefined) {
                if (deleteCloudStorageAttachmentRequest instanceof DeleteCloudStorageAttachmentRequest) {
                    storageId = deleteCloudStorageAttachmentRequest.storageId;
                    body = deleteCloudStorageAttachmentRequest.body
                } else {
                    storageId = deleteCloudStorageAttachmentRequest['storage_id'];
                    body = deleteCloudStorageAttachmentRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling deleteCloudStorageAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云存储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudStorage(listCloudStorageRequest?: ListCloudStorageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-storages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let storageId;
            
            let name;

            if (listCloudStorageRequest !== null && listCloudStorageRequest !== undefined) {
                if (listCloudStorageRequest instanceof ListCloudStorageRequest) {
                    offset = listCloudStorageRequest.offset;
                    limit = listCloudStorageRequest.limit;
                    storageId = listCloudStorageRequest.storageId;
                    name = listCloudStorageRequest.name;
                } else {
                    offset = listCloudStorageRequest['offset'];
                    limit = listCloudStorageRequest['limit'];
                    storageId = listCloudStorageRequest['storage_id'];
                    name = listCloudStorageRequest['name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (storageId !== null && storageId !== undefined) {
                localVarQueryParameter['storage_id'] = storageId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询个人文件夹列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudStorageAssignment(listCloudStorageAssignmentRequest?: ListCloudStorageAssignmentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-storages/actions/list-folders",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let storageId;
            
            let claimMode;
            
            let offset;
            
            let limit;
            
            let attach;
            
            let attachNames;
            
            let capacityFilter;

            if (listCloudStorageAssignmentRequest !== null && listCloudStorageAssignmentRequest !== undefined) {
                if (listCloudStorageAssignmentRequest instanceof ListCloudStorageAssignmentRequest) {
                    storageId = listCloudStorageAssignmentRequest.storageId;
                    claimMode = listCloudStorageAssignmentRequest.claimMode;
                    offset = listCloudStorageAssignmentRequest.offset;
                    limit = listCloudStorageAssignmentRequest.limit;
                    attach = listCloudStorageAssignmentRequest.attach;
                    attachNames = listCloudStorageAssignmentRequest.attachNames;
                    capacityFilter = listCloudStorageAssignmentRequest.capacityFilter;
                } else {
                    storageId = listCloudStorageAssignmentRequest['storage_id'];
                    claimMode = listCloudStorageAssignmentRequest['claim_mode'];
                    offset = listCloudStorageAssignmentRequest['offset'];
                    limit = listCloudStorageAssignmentRequest['limit'];
                    attach = listCloudStorageAssignmentRequest['attach'];
                    attachNames = listCloudStorageAssignmentRequest['attach_names'];
                    capacityFilter = listCloudStorageAssignmentRequest['capacity_filter'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
                throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling listCloudStorageAssignment.');
            }
            if (storageId !== null && storageId !== undefined) {
                localVarQueryParameter['storage_id'] = storageId;
            }
            if (claimMode === null || claimMode === undefined) {
                throw new RequiredError('claimMode','Required parameter claimMode was null or undefined when calling listCloudStorageAssignment.');
            }
            if (claimMode !== null && claimMode !== undefined) {
                localVarQueryParameter['claim_mode'] = claimMode;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (attach !== null && attach !== undefined) {
                localVarQueryParameter['attach'] = attach;
            }
            if (attachNames !== null && attachNames !== undefined) {
                localVarQueryParameter['attach_names'] = attachNames;
            }
            if (capacityFilter !== null && capacityFilter !== undefined) {
                localVarQueryParameter['capacity_filter'] = capacityFilter;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定目录下文件夹和文件信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFoldersAndFiles(listFoldersAndFilesRequest?: ListFoldersAndFilesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-storages/actions/list-folder-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;
            
            let folderUrl;
            
            let cloudStorageAssignmentId;
            
            let marker;
            
            let limit;

            if (listFoldersAndFilesRequest !== null && listFoldersAndFilesRequest !== undefined) {
                if (listFoldersAndFilesRequest instanceof ListFoldersAndFilesRequest) {
                    userName = listFoldersAndFilesRequest.userName;
                    folderUrl = listFoldersAndFilesRequest.folderUrl;
                    cloudStorageAssignmentId = listFoldersAndFilesRequest.cloudStorageAssignmentId;
                    marker = listFoldersAndFilesRequest.marker;
                    limit = listFoldersAndFilesRequest.limit;
                } else {
                    userName = listFoldersAndFilesRequest['user_name'];
                    folderUrl = listFoldersAndFilesRequest['folder_url'];
                    cloudStorageAssignmentId = listFoldersAndFilesRequest['cloud_storage_assignment_id'];
                    marker = listFoldersAndFilesRequest['marker'];
                    limit = listFoldersAndFilesRequest['limit'];
                }
            }

        
            if (userName === null || userName === undefined) {
                throw new RequiredError('userName','Required parameter userName was null or undefined when calling listFoldersAndFiles.');
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (folderUrl === null || folderUrl === undefined) {
                throw new RequiredError('folderUrl','Required parameter folderUrl was null or undefined when calling listFoldersAndFiles.');
            }
            if (folderUrl !== null && folderUrl !== undefined) {
                localVarQueryParameter['folder_url'] = folderUrl;
            }
            if (cloudStorageAssignmentId !== null && cloudStorageAssignmentId !== undefined) {
                localVarQueryParameter['cloud_storage_assignment_id'] = cloudStorageAssignmentId;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectConfigs(listProjectConfigsRequest?: ListProjectConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-storages/actions/list-project-configs",
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

            if (listProjectConfigsRequest !== null && listProjectConfigsRequest !== undefined) {
                if (listProjectConfigsRequest instanceof ListProjectConfigsRequest) {
                    offset = listProjectConfigsRequest.offset;
                    limit = listProjectConfigsRequest.limit;
                    name = listProjectConfigsRequest.name;
                } else {
                    offset = listProjectConfigsRequest['offset'];
                    limit = listProjectConfigsRequest['limit'];
                    name = listProjectConfigsRequest['name'];
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
         * 重置userprofile，初始化或重置并备份userprofile。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetUserProfile(resetUserProfileRequest?: ResetUserProfileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-storages/actions/reset-userprofile",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (resetUserProfileRequest !== null && resetUserProfileRequest !== undefined) {
                if (resetUserProfileRequest instanceof ResetUserProfileRequest) {
                    body = resetUserProfileRequest.body
                } else {
                    body = resetUserProfileRequest['body'];
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
         * 查询项目配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectConfig(showProjectConfigRequest?: ShowProjectConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cloud-storages/actions/project-config/{cloud_storage_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let cloudStorageId;

            if (showProjectConfigRequest !== null && showProjectConfigRequest !== undefined) {
                if (showProjectConfigRequest instanceof ShowProjectConfigRequest) {
                    cloudStorageId = showProjectConfigRequest.cloudStorageId;
                } else {
                    cloudStorageId = showProjectConfigRequest['cloud_storage_id'];
                }
            }

        
            if (cloudStorageId === null || cloudStorageId === undefined) {
            throw new RequiredError('cloudStorageId','Required parameter cloudStorageId was null or undefined when calling showProjectConfig.');
            }

            options.pathParams = { 'cloud_storage_id': cloudStorageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 云存储文件流转与分享
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        transferFile(transferFileRequest?: TransferFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-storages/actions/transfer-file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (transferFileRequest !== null && transferFileRequest !== undefined) {
                if (transferFileRequest instanceof TransferFileRequest) {
                    body = transferFileRequest.body
                } else {
                    body = transferFileRequest['body'];
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
         * 文件预流转，在接收方接收文件前返回可用的文件路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        transferFilePre(transferFilePreRequest?: TransferFilePreRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cloud-storages/actions/pre-transfer-file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (transferFilePreRequest !== null && transferFilePreRequest !== undefined) {
                if (transferFilePreRequest instanceof TransferFilePreRequest) {
                    body = transferFilePreRequest.body
                } else {
                    body = transferFilePreRequest['body'];
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
         * 创建个人文件夹。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCloudUserFolderAssignment(updateCloudUserFolderAssignmentRequest?: UpdateCloudUserFolderAssignmentRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/cloud-storages/{storage_id}/actions/update-folder/{cloud_assignment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;
            
            let cloudAssignmentId;

            if (updateCloudUserFolderAssignmentRequest !== null && updateCloudUserFolderAssignmentRequest !== undefined) {
                if (updateCloudUserFolderAssignmentRequest instanceof UpdateCloudUserFolderAssignmentRequest) {
                    storageId = updateCloudUserFolderAssignmentRequest.storageId;
                    cloudAssignmentId = updateCloudUserFolderAssignmentRequest.cloudAssignmentId;
                    body = updateCloudUserFolderAssignmentRequest.body
                } else {
                    storageId = updateCloudUserFolderAssignmentRequest['storage_id'];
                    cloudAssignmentId = updateCloudUserFolderAssignmentRequest['cloud_assignment_id'];
                    body = updateCloudUserFolderAssignmentRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling updateCloudUserFolderAssignment.');
            }
            if (cloudAssignmentId === null || cloudAssignmentId === undefined) {
            throw new RequiredError('cloudAssignmentId','Required parameter cloudAssignmentId was null or undefined when calling updateCloudUserFolderAssignment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId,'cloud_assignment_id': cloudAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建热点会话迁移配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHotspotSessionConfig(createHotspotSessionConfigRequest?: CreateHotspotSessionConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/hotspot-session-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createHotspotSessionConfigRequest !== null && createHotspotSessionConfigRequest !== undefined) {
                if (createHotspotSessionConfigRequest instanceof CreateHotspotSessionConfigRequest) {
                    body = createHotspotSessionConfigRequest.body
                } else {
                    body = createHotspotSessionConfigRequest['body'];
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
         * 查询热点会话迁移配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHotspotSessionConfig(listHotspotSessionConfigRequest?: ListHotspotSessionConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/hotspot-session-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listHotspotSessionConfigRequest !== null && listHotspotSessionConfigRequest !== undefined) {
                if (listHotspotSessionConfigRequest instanceof ListHotspotSessionConfigRequest) {
                    offset = listHotspotSessionConfigRequest.offset;
                    limit = listHotspotSessionConfigRequest.limit;
                } else {
                    offset = listHotspotSessionConfigRequest['offset'];
                    limit = listHotspotSessionConfigRequest['limit'];
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
         * 查询热点会话不迁移用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNonMigrationUsers(listNonMigrationUsersRequest?: ListNonMigrationUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/hotspot-session-config/{config_id}/non-migration-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configId;
            
            let userName;
            
            let offset;
            
            let limit;

            if (listNonMigrationUsersRequest !== null && listNonMigrationUsersRequest !== undefined) {
                if (listNonMigrationUsersRequest instanceof ListNonMigrationUsersRequest) {
                    configId = listNonMigrationUsersRequest.configId;
                    userName = listNonMigrationUsersRequest.userName;
                    offset = listNonMigrationUsersRequest.offset;
                    limit = listNonMigrationUsersRequest.limit;
                } else {
                    configId = listNonMigrationUsersRequest['config_id'];
                    userName = listNonMigrationUsersRequest['user_name'];
                    offset = listNonMigrationUsersRequest['offset'];
                    limit = listNonMigrationUsersRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listNonMigrationUsers.');
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改热点会话迁移配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHotspotSessionConfig(updateHotspotSessionConfigRequest?: UpdateHotspotSessionConfigRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/hotspot-session-config/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;

            if (updateHotspotSessionConfigRequest !== null && updateHotspotSessionConfigRequest !== undefined) {
                if (updateHotspotSessionConfigRequest instanceof UpdateHotspotSessionConfigRequest) {
                    configId = updateHotspotSessionConfigRequest.configId;
                    body = updateHotspotSessionConfigRequest.body
                } else {
                    configId = updateHotspotSessionConfigRequest['config_id'];
                    body = updateHotspotSessionConfigRequest['body'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling updateHotspotSessionConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改热点会话不迁移用户, 在对热点绘画迁移用户新增时如已存在该用户，则进行覆盖添加，在删除用户时如果不存在用户，则进行忽略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNonMigrationUsers(updateNonMigrationUsersRequest?: UpdateNonMigrationUsersRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/hotspot-session-config/{config_id}/non-migration-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;

            if (updateNonMigrationUsersRequest !== null && updateNonMigrationUsersRequest !== undefined) {
                if (updateNonMigrationUsersRequest instanceof UpdateNonMigrationUsersRequest) {
                    configId = updateNonMigrationUsersRequest.configId;
                    body = updateNonMigrationUsersRequest.body
                } else {
                    configId = updateNonMigrationUsersRequest['config_id'];
                    body = updateNonMigrationUsersRequest['body'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling updateNonMigrationUsers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分发应用软件信息至镜像实例，管理员可以按需下载并安装应用软件。
         * * 目前只支持来自云应用仓库的软件信息。
         * * 只允许对状态为 &#x60;实例正常运行&#x60;、&#x60;镜像任务结束&#x60; 的实例分发软件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachImageServerApp(attachImageServerAppRequest?: AttachImageServerAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image-servers/{server_id}/actions/attach-app",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (attachImageServerAppRequest !== null && attachImageServerAppRequest !== undefined) {
                if (attachImageServerAppRequest instanceof AttachImageServerAppRequest) {
                    serverId = attachImageServerAppRequest.serverId;
                    body = attachImageServerAppRequest.body
                } else {
                    serverId = attachImageServerAppRequest['server_id'];
                    body = attachImageServerAppRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling attachImageServerApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除镜像实例。
         * * 忽略不存在的镜像实例，响应正常。
         * * 不允许操作状态为 &#x60;创建中&#x60;、&#x60;镜像创建中&#x60;的实例，响应异常。
         * * 不支持资源关联发生变化后，请求删除镜像实例关联资源，任务响应异常。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteImageServer(batchDeleteImageServerRequest?: BatchDeleteImageServerRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/image-servers/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteImageServerRequest !== null && batchDeleteImageServerRequest !== undefined) {
                if (batchDeleteImageServerRequest instanceof BatchDeleteImageServerRequest) {
                    body = batchDeleteImageServerRequest.body
                } else {
                    body = batchDeleteImageServerRequest['body'];
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
         * 创建镜像实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageServer(createImageServerRequest?: CreateImageServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image-servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceTransactionId;
            
            let xLinkedId;

            if (createImageServerRequest !== null && createImageServerRequest !== undefined) {
                if (createImageServerRequest instanceof CreateImageServerRequest) {
                    body = createImageServerRequest.body
                    serviceTransactionId = createImageServerRequest.serviceTransactionId;
                    xLinkedId = createImageServerRequest.xLinkedId;
                } else {
                    body = createImageServerRequest['body'];
                    serviceTransactionId = createImageServerRequest['Service-Transaction-Id'];
                    xLinkedId = createImageServerRequest['X-Linked-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (serviceTransactionId !== undefined && serviceTransactionId !== null) {
                localVarHeaderParameter['Service-Transaction-Id'] = String(serviceTransactionId);
            }
            if (xLinkedId !== undefined && xLinkedId !== null) {
                localVarHeaderParameter['X-Linked-Id'] = String(xLinkedId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageServers(listImageServersRequest?: ListImageServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/image-servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let serverName;
            
            let serverId;
            
            let enterpriseProjectId;

            if (listImageServersRequest !== null && listImageServersRequest !== undefined) {
                if (listImageServersRequest instanceof ListImageServersRequest) {
                    offset = listImageServersRequest.offset;
                    limit = listImageServersRequest.limit;
                    serverName = listImageServersRequest.serverName;
                    serverId = listImageServersRequest.serverId;
                    enterpriseProjectId = listImageServersRequest.enterpriseProjectId;
                } else {
                    offset = listImageServersRequest['offset'];
                    limit = listImageServersRequest['limit'];
                    serverName = listImageServersRequest['server_name'];
                    serverId = listImageServersRequest['server_id'];
                    enterpriseProjectId = listImageServersRequest['enterprise_project_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (serverName !== null && serverName !== undefined) {
                localVarQueryParameter['server_name'] = serverName;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询最近一次分发软件信息列表，返回ID列表，不包含具体信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLatestAttachedServerApp(listLatestAttachedServerAppRequest?: ListLatestAttachedServerAppRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/image-servers/{server_id}/actions/latest-attached-app",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (listLatestAttachedServerAppRequest !== null && listLatestAttachedServerAppRequest !== undefined) {
                if (listLatestAttachedServerAppRequest instanceof ListLatestAttachedServerAppRequest) {
                    serverId = listLatestAttachedServerAppRequest.serverId;
                } else {
                    serverId = listLatestAttachedServerAppRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling listLatestAttachedServerApp.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 构建云应用镜像。
         * * 只允许对状态为 &#x60;实例正常运行&#x60;、&#x60;镜像任务结束&#x60; 的实例构建云应用镜像。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        recreateServerImage(recreateServerImageRequest?: RecreateServerImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/image-servers/{server_id}/actions/recreate-image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (recreateServerImageRequest !== null && recreateServerImageRequest !== undefined) {
                if (recreateServerImageRequest instanceof RecreateServerImageRequest) {
                    serverId = recreateServerImageRequest.serverId;
                    body = recreateServerImageRequest.body
                } else {
                    serverId = recreateServerImageRequest['server_id'];
                    body = recreateServerImageRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling recreateServerImage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的镜像实例当前这个接口的查询数据和list查询的一致。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageServer(showImageServerRequest?: ShowImageServerRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/image-servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showImageServerRequest !== null && showImageServerRequest !== undefined) {
                if (showImageServerRequest instanceof ShowImageServerRequest) {
                    serverId = showImageServerRequest.serverId;
                } else {
                    serverId = showImageServerRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showImageServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改镜像实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateImageServer(updateImageServerRequest?: UpdateImageServerRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/image-servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateImageServerRequest !== null && updateImageServerRequest !== undefined) {
                if (updateImageServerRequest instanceof UpdateImageServerRequest) {
                    serverId = updateImageServerRequest.serverId;
                    body = updateImageServerRequest.body
                } else {
                    serverId = updateImageServerRequest['server_id'];
                    body = updateImageServerRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateImageServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除子任务，忽略不存在的服务器并且返回成功响应。
         * 只能删除以下的两种状态：
         * - SUCCESS：成功。
         * - FAILED：失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAppSubJobs(batchDeleteAppSubJobsRequest?: BatchDeleteAppSubJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-server-sub-jobs/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteAppSubJobsRequest !== null && batchDeleteAppSubJobsRequest !== undefined) {
                if (batchDeleteAppSubJobsRequest instanceof BatchDeleteAppSubJobsRequest) {
                    body = batchDeleteAppSubJobsRequest.body
                } else {
                    body = batchDeleteAppSubJobsRequest['body'];
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
         * 批量删除子任务，忽略不存在的服务器并且返回成功响应。
         * 只能删除以下的两种状态 SUCCESS：成功。 FAILED：失败
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteImageSubJobs(batchDeleteImageSubJobsRequest?: BatchDeleteImageSubJobsRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/image-server-sub-jobs/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteImageSubJobsRequest !== null && batchDeleteImageSubJobsRequest !== undefined) {
                if (batchDeleteImageSubJobsRequest instanceof BatchDeleteImageSubJobsRequest) {
                    body = batchDeleteImageSubJobsRequest.body
                } else {
                    body = batchDeleteImageSubJobsRequest['body'];
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
         * 该接口用于查询异步子任务数量,job_type未传递时,
         * 则查询JobType为CREATE_SERVER|CREATE_SERVER_IMAGE|DELETE_SERVER的子任务总数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countImageSubJobs(countImageSubJobsRequest?: CountImageSubJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/image-server-sub-jobs/actions/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let status;
            
            let jobType;
            
            let jobId;

            if (countImageSubJobsRequest !== null && countImageSubJobsRequest !== undefined) {
                if (countImageSubJobsRequest instanceof CountImageSubJobsRequest) {
                    status = countImageSubJobsRequest.status;
                    jobType = countImageSubJobsRequest.jobType;
                    jobId = countImageSubJobsRequest.jobId;
                } else {
                    status = countImageSubJobsRequest['status'];
                    jobType = countImageSubJobsRequest['job_type'];
                    jobId = countImageSubJobsRequest['job_id'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询异步子任务数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countSubJobs(countSubJobsRequest?: CountSubJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-server-sub-jobs/actions/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let status;
            
            let jobType;
            
            let jobId;

            if (countSubJobsRequest !== null && countSubJobsRequest !== undefined) {
                if (countSubJobsRequest instanceof CountSubJobsRequest) {
                    status = countSubJobsRequest.status;
                    jobType = countSubJobsRequest.jobType;
                    jobId = countSubJobsRequest.jobId;
                } else {
                    status = countSubJobsRequest['status'];
                    jobType = countSubJobsRequest['job_type'];
                    jobId = countSubJobsRequest['job_id'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询租户的异步任务执行情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageJobs(listImageJobsRequest?: ListImageJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/image-server-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobType;
            
            let status;
            
            let offset;
            
            let limit;

            if (listImageJobsRequest !== null && listImageJobsRequest !== undefined) {
                if (listImageJobsRequest instanceof ListImageJobsRequest) {
                    jobType = listImageJobsRequest.jobType;
                    status = listImageJobsRequest.status;
                    offset = listImageJobsRequest.offset;
                    limit = listImageJobsRequest.limit;
                } else {
                    jobType = listImageJobsRequest['job_type'];
                    status = listImageJobsRequest['status'];
                    offset = listImageJobsRequest['offset'];
                    limit = listImageJobsRequest['limit'];
                }
            }

        
            if (jobType === null || jobType === undefined) {
                throw new RequiredError('jobType','Required parameter jobType was null or undefined when calling listImageJobs.');
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询异步子任务执行情况,sub_job_ids非空时offset和limit不会生效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageSubJobs(listImageSubJobsRequest?: ListImageSubJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/image-server-sub-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobType;
            
            let status;
            
            let offset;
            
            let limit;
            
            let jobId;

            if (listImageSubJobsRequest !== null && listImageSubJobsRequest !== undefined) {
                if (listImageSubJobsRequest instanceof ListImageSubJobsRequest) {
                    jobType = listImageSubJobsRequest.jobType;
                    status = listImageSubJobsRequest.status;
                    offset = listImageSubJobsRequest.offset;
                    limit = listImageSubJobsRequest.limit;
                    jobId = listImageSubJobsRequest.jobId;
                } else {
                    jobType = listImageSubJobsRequest['job_type'];
                    status = listImageSubJobsRequest['status'];
                    offset = listImageSubJobsRequest['offset'];
                    limit = listImageSubJobsRequest['limit'];
                    jobId = listImageSubJobsRequest['job_id'];
                }
            }

        
            if (jobType === null || jobType === undefined) {
                throw new RequiredError('jobType','Required parameter jobType was null or undefined when calling listImageSubJobs.');
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
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
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询异步子任务执行情况,sub_job_ids非空时offset和limit不会生效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubJobs(listSubJobsRequest?: ListSubJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-server-sub-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobType;
            
            let status;
            
            let offset;
            
            let limit;
            
            let jobId;

            if (listSubJobsRequest !== null && listSubJobsRequest !== undefined) {
                if (listSubJobsRequest instanceof ListSubJobsRequest) {
                    jobType = listSubJobsRequest.jobType;
                    status = listSubJobsRequest.status;
                    offset = listSubJobsRequest.offset;
                    limit = listSubJobsRequest.limit;
                    jobId = listSubJobsRequest.jobId;
                } else {
                    jobType = listSubJobsRequest['job_type'];
                    status = listSubJobsRequest['status'];
                    offset = listSubJobsRequest['offset'];
                    limit = listSubJobsRequest['limit'];
                    jobId = listSubJobsRequest['job_id'];
                }
            }

        
            if (jobType === null || jobType === undefined) {
                throw new RequiredError('jobType','Required parameter jobType was null or undefined when calling listSubJobs.');
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
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
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询异步任务的执行情况，比如查询创建镜像实例任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageJob(showImageJobRequest?: ShowImageJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/image-server-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showImageJobRequest !== null && showImageJobRequest !== undefined) {
                if (showImageJobRequest instanceof ShowImageJobRequest) {
                    jobId = showImageJobRequest.jobId;
                } else {
                    jobId = showImageJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showImageJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job的执行状态。
         * 
         * 对于创建云应用服务器命令下发后会返回job_id，通过job_id可以查询任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/job/{job_id}",
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
         * 查询Job的执行状态。
         * 
         * 对于创建云服务器、删除云服务器、重建镜像等异步API，下发命令后会返回job_id，通过job_id可以查询任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobDetail(showJobDetailRequest?: ShowJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/job/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobDetailRequest !== null && showJobDetailRequest !== undefined) {
                if (showJobDetailRequest instanceof ShowJobDetailRequest) {
                    jobId = showJobDetailRequest.jobId;
                } else {
                    jobId = showJobDetailRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobDetail.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用组授权邮件发送记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorizationMailRecord(listAuthorizationMailRecordRequest?: ListAuthorizationMailRecordRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/mails",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appGroupId;
            
            let limit;
            
            let offset;
            
            let account;
            
            let mailSendType;
            
            let mailSendResult;

            if (listAuthorizationMailRecordRequest !== null && listAuthorizationMailRecordRequest !== undefined) {
                if (listAuthorizationMailRecordRequest instanceof ListAuthorizationMailRecordRequest) {
                    appGroupId = listAuthorizationMailRecordRequest.appGroupId;
                    limit = listAuthorizationMailRecordRequest.limit;
                    offset = listAuthorizationMailRecordRequest.offset;
                    account = listAuthorizationMailRecordRequest.account;
                    mailSendType = listAuthorizationMailRecordRequest.mailSendType;
                    mailSendResult = listAuthorizationMailRecordRequest.mailSendResult;
                } else {
                    appGroupId = listAuthorizationMailRecordRequest['app_group_id'];
                    limit = listAuthorizationMailRecordRequest['limit'];
                    offset = listAuthorizationMailRecordRequest['offset'];
                    account = listAuthorizationMailRecordRequest['account'];
                    mailSendType = listAuthorizationMailRecordRequest['mail_send_type'];
                    mailSendResult = listAuthorizationMailRecordRequest['mail_send_result'];
                }
            }

        
            if (appGroupId === null || appGroupId === undefined) {
                throw new RequiredError('appGroupId','Required parameter appGroupId was null or undefined when calling listAuthorizationMailRecord.');
            }
            if (appGroupId !== null && appGroupId !== undefined) {
                localVarQueryParameter['app_group_id'] = appGroupId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (account !== null && account !== undefined) {
                localVarQueryParameter['account'] = account;
            }
            if (mailSendType !== null && mailSendType !== undefined) {
                localVarQueryParameter['mail_send_type'] = mailSendType;
            }
            if (mailSendResult !== null && mailSendResult !== undefined) {
                localVarQueryParameter['mail_send_result'] = mailSendResult;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重发应用组授权邮件（根据授权邮件记录）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendAuthorizationMail(sendAuthorizationMailRequest?: SendAuthorizationMailRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/mails/actions/send",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (sendAuthorizationMailRequest !== null && sendAuthorizationMailRequest !== undefined) {
                if (sendAuthorizationMailRequest instanceof SendAuthorizationMailRequest) {
                    body = sendAuthorizationMailRequest.body
                    xLanguage = sendAuthorizationMailRequest.xLanguage;
                } else {
                    body = sendAuthorizationMailRequest['body'];
                    xLanguage = sendAuthorizationMailRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重发应用组授权邮件（根据授权记录）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendAuthorizedMail(sendAuthorizedMailRequest?: SendAuthorizedMailRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/mails/actions/send-by-authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (sendAuthorizedMailRequest !== null && sendAuthorizedMailRequest !== undefined) {
                if (sendAuthorizedMailRequest instanceof SendAuthorizedMailRequest) {
                    body = sendAuthorizedMailRequest.body
                    xLanguage = sendAuthorizedMailRequest.xLanguage;
                } else {
                    body = sendAuthorizedMailRequest['body'];
                    xLanguage = sendAuthorizedMailRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除WKS存储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePersistentStorage(batchDeletePersistentStorageRequest?: BatchDeletePersistentStorageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/persistent-storages/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeletePersistentStorageRequest !== null && batchDeletePersistentStorageRequest !== undefined) {
                if (batchDeletePersistentStorageRequest instanceof BatchDeletePersistentStorageRequest) {
                    body = batchDeletePersistentStorageRequest.body
                } else {
                    body = batchDeletePersistentStorageRequest['body'];
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
         * 新增或更新存储目录访问权限自定义策略(已存在自定义策略时会对已有策略更新)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrUpdateStoragePolicyStatement(createOrUpdateStoragePolicyStatementRequest?: CreateOrUpdateStoragePolicyStatementRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/storages-policy/actions/create-statements",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createOrUpdateStoragePolicyStatementRequest !== null && createOrUpdateStoragePolicyStatementRequest !== undefined) {
                if (createOrUpdateStoragePolicyStatementRequest instanceof CreateOrUpdateStoragePolicyStatementRequest) {
                    body = createOrUpdateStoragePolicyStatementRequest.body
                } else {
                    body = createOrUpdateStoragePolicyStatementRequest['body'];
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
         * 创建WKS存储，目前仅支持创建 SFS3.0 容量型文件系统。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPersistentStorage(createPersistentStorageRequest?: CreatePersistentStorageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/persistent-storages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPersistentStorageRequest !== null && createPersistentStorageRequest !== undefined) {
                if (createPersistentStorageRequest instanceof CreatePersistentStorageRequest) {
                    body = createPersistentStorageRequest.body
                } else {
                    body = createPersistentStorageRequest['body'];
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
         * 创建共享存储目录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createShareFolder(createShareFolderRequest?: CreateShareFolderRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/persistent-storages/{storage_id}/actions/create-share-folder",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;

            if (createShareFolderRequest !== null && createShareFolderRequest !== undefined) {
                if (createShareFolderRequest instanceof CreateShareFolderRequest) {
                    storageId = createShareFolderRequest.storageId;
                    body = createShareFolderRequest.body
                } else {
                    storageId = createShareFolderRequest['storage_id'];
                    body = createShareFolderRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling createShareFolder.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除共享存储，只会解除NAS与文件系统之间的关联关系，不会删除文件系统和文件系统中的数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePersistentStorage(deletePersistentStorageRequest?: DeletePersistentStorageRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/persistent-storages/{storage_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let storageId;

            if (deletePersistentStorageRequest !== null && deletePersistentStorageRequest !== undefined) {
                if (deletePersistentStorageRequest instanceof DeletePersistentStorageRequest) {
                    storageId = deletePersistentStorageRequest.storageId;
                } else {
                    storageId = deletePersistentStorageRequest['storage_id'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling deletePersistentStorage.');
            }

            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除共享存储目录。
         * &gt; 需要删除绑定的用户及用户组，才能删除共享文目录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStorageClaim(deleteStorageClaimRequest?: DeleteStorageClaimRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/persistent-storages/{storage_id}/actions/delete-storage-claim",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;

            if (deleteStorageClaimRequest !== null && deleteStorageClaimRequest !== undefined) {
                if (deleteStorageClaimRequest instanceof DeleteStorageClaimRequest) {
                    storageId = deleteStorageClaimRequest.storageId;
                    body = deleteStorageClaimRequest.body
                } else {
                    storageId = deleteStorageClaimRequest['storage_id'];
                    body = deleteStorageClaimRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling deleteStorageClaim.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除个人存储目录，个人目录中的数据也将永久删除且无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUserStorageAttachment(deleteUserStorageAttachmentRequest?: DeleteUserStorageAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/persistent-storages/{storage_id}/actions/delete-user-attachment",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;

            if (deleteUserStorageAttachmentRequest !== null && deleteUserStorageAttachmentRequest !== undefined) {
                if (deleteUserStorageAttachmentRequest instanceof DeleteUserStorageAttachmentRequest) {
                    storageId = deleteUserStorageAttachmentRequest.storageId;
                    body = deleteUserStorageAttachmentRequest.body
                } else {
                    storageId = deleteUserStorageAttachmentRequest['storage_id'];
                    body = deleteUserStorageAttachmentRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling deleteUserStorageAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询WKS存储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPersistentStorage(listPersistentStorageRequest?: ListPersistentStorageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/persistent-storages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let storageId;
            
            let name;

            if (listPersistentStorageRequest !== null && listPersistentStorageRequest !== undefined) {
                if (listPersistentStorageRequest instanceof ListPersistentStorageRequest) {
                    offset = listPersistentStorageRequest.offset;
                    limit = listPersistentStorageRequest.limit;
                    storageId = listPersistentStorageRequest.storageId;
                    name = listPersistentStorageRequest.name;
                } else {
                    offset = listPersistentStorageRequest['offset'];
                    limit = listPersistentStorageRequest['limit'];
                    storageId = listPersistentStorageRequest['storage_id'];
                    name = listPersistentStorageRequest['name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (storageId !== null && storageId !== undefined) {
                localVarQueryParameter['storage_id'] = storageId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SFS3.0存储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSfs3Storage(listSfs3StorageRequest?: ListSfs3StorageRequest) {
            const options = {
                method: "GET",
                url: "/v1/persistent-storages/actions/list-sfs-storages",
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

            if (listSfs3StorageRequest !== null && listSfs3StorageRequest !== undefined) {
                if (listSfs3StorageRequest instanceof ListSfs3StorageRequest) {
                    offset = listSfs3StorageRequest.offset;
                    limit = listSfs3StorageRequest.limit;
                    name = listSfs3StorageRequest.name;
                } else {
                    offset = listSfs3StorageRequest['offset'];
                    limit = listSfs3StorageRequest['limit'];
                    name = listSfs3StorageRequest['name'];
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
         * 查询共享存储目录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listShareFolder(listShareFolderRequest?: ListShareFolderRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/persistent-storages/actions/list-share-folders",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let storageId;
            
            let offset;
            
            let limit;
            
            let storageClaimId;
            
            let path;

            if (listShareFolderRequest !== null && listShareFolderRequest !== undefined) {
                if (listShareFolderRequest instanceof ListShareFolderRequest) {
                    storageId = listShareFolderRequest.storageId;
                    offset = listShareFolderRequest.offset;
                    limit = listShareFolderRequest.limit;
                    storageClaimId = listShareFolderRequest.storageClaimId;
                    path = listShareFolderRequest.path;
                } else {
                    storageId = listShareFolderRequest['storage_id'];
                    offset = listShareFolderRequest['offset'];
                    limit = listShareFolderRequest['limit'];
                    storageClaimId = listShareFolderRequest['storage_claim_id'];
                    path = listShareFolderRequest['path'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
                throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling listShareFolder.');
            }
            if (storageId !== null && storageId !== undefined) {
                localVarQueryParameter['storage_id'] = storageId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (storageClaimId !== null && storageClaimId !== undefined) {
                localVarQueryParameter['storage_claim_id'] = storageClaimId;
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询个人存储目录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStorageAssignment(listStorageAssignmentRequest?: ListStorageAssignmentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/persistent-storages/actions/list-attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let storageId;
            
            let claimMode;
            
            let offset;
            
            let limit;
            
            let storageClaimId;
            
            let attach;
            
            let attachType;

            if (listStorageAssignmentRequest !== null && listStorageAssignmentRequest !== undefined) {
                if (listStorageAssignmentRequest instanceof ListStorageAssignmentRequest) {
                    storageId = listStorageAssignmentRequest.storageId;
                    claimMode = listStorageAssignmentRequest.claimMode;
                    offset = listStorageAssignmentRequest.offset;
                    limit = listStorageAssignmentRequest.limit;
                    storageClaimId = listStorageAssignmentRequest.storageClaimId;
                    attach = listStorageAssignmentRequest.attach;
                    attachType = listStorageAssignmentRequest.attachType;
                } else {
                    storageId = listStorageAssignmentRequest['storage_id'];
                    claimMode = listStorageAssignmentRequest['claim_mode'];
                    offset = listStorageAssignmentRequest['offset'];
                    limit = listStorageAssignmentRequest['limit'];
                    storageClaimId = listStorageAssignmentRequest['storage_claim_id'];
                    attach = listStorageAssignmentRequest['attach'];
                    attachType = listStorageAssignmentRequest['attach_type'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
                throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling listStorageAssignment.');
            }
            if (storageId !== null && storageId !== undefined) {
                localVarQueryParameter['storage_id'] = storageId;
            }
            if (claimMode === null || claimMode === undefined) {
                throw new RequiredError('claimMode','Required parameter claimMode was null or undefined when calling listStorageAssignment.');
            }
            if (claimMode !== null && claimMode !== undefined) {
                localVarQueryParameter['claim_mode'] = claimMode;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (storageClaimId !== null && storageClaimId !== undefined) {
                localVarQueryParameter['storage_claim_id'] = storageClaimId;
            }
            if (attach !== null && attach !== undefined) {
                localVarQueryParameter['attach'] = attach;
            }
            if (attachType !== null && attachType !== undefined) {
                localVarQueryParameter['attach_type'] = attachType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询存储目录访问权限策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStoragePolicyStatement(listStoragePolicyStatementRequest?: ListStoragePolicyStatementRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/storages-policy/actions/list-statements",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listStoragePolicyStatementRequest !== null && listStoragePolicyStatementRequest !== undefined) {
                if (listStoragePolicyStatementRequest instanceof ListStoragePolicyStatementRequest) {
                    offset = listStoragePolicyStatementRequest.offset;
                    limit = listStoragePolicyStatementRequest.limit;
                } else {
                    offset = listStoragePolicyStatementRequest['offset'];
                    limit = listStoragePolicyStatementRequest['limit'];
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
         * 批量添加或者移除共享目录成员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateShareFolderAssignment(updateShareFolderAssignmentRequest?: UpdateShareFolderAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/persistent-storages/{storage_id}/actions/assign-share-folder",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;

            if (updateShareFolderAssignmentRequest !== null && updateShareFolderAssignmentRequest !== undefined) {
                if (updateShareFolderAssignmentRequest instanceof UpdateShareFolderAssignmentRequest) {
                    storageId = updateShareFolderAssignmentRequest.storageId;
                    body = updateShareFolderAssignmentRequest.body
                } else {
                    storageId = updateShareFolderAssignmentRequest['storage_id'];
                    body = updateShareFolderAssignmentRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling updateShareFolderAssignment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建个人存储目录，已存在对应目录时，仅更新策略不会重复创建目录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUserFolderAssignment(updateUserFolderAssignmentRequest?: UpdateUserFolderAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/persistent-storages/{storage_id}/actions/assign-folder",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let storageId;

            if (updateUserFolderAssignmentRequest !== null && updateUserFolderAssignmentRequest !== undefined) {
                if (updateUserFolderAssignmentRequest instanceof UpdateUserFolderAssignmentRequest) {
                    storageId = updateUserFolderAssignmentRequest.storageId;
                    body = updateUserFolderAssignmentRequest.body
                } else {
                    storageId = updateUserFolderAssignmentRequest['storage_id'];
                    body = updateUserFolderAssignmentRequest['body'];
                }
            }

        
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling updateUserFolderAssignment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增策略组，通过策略组能灵活地控制客户端访问与接入策略，如：文件、剪切板、会话等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicyGroup(createPolicyGroupRequest?: CreatePolicyGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/policy-groups",
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

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增策略模板。策略模板创建好后，用户在创建策略组的时候，就可以根据已有策略模板按需调整配置，快速完成策略组的创建。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicyTemplate(createPolicyTemplateRequest?: CreatePolicyTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/policy-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPolicyTemplateRequest !== null && createPolicyTemplateRequest !== undefined) {
                if (createPolicyTemplateRequest instanceof CreatePolicyTemplateRequest) {
                    body = createPolicyTemplateRequest.body
                } else {
                    body = createPolicyTemplateRequest['body'];
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
         * 删除指定策略组，包含策略组对应的策略信息以及应用对象信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyGroup(deletePolicyGroupRequest?: DeletePolicyGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/policy-groups/{policy_group_id}",
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
         * 删除指定策略模板，包含策略模板对应的策略信息以及应用对象信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyTemplate(deletePolicyTemplateRequest?: DeletePolicyTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/policy-templates/{policy_template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyTemplateId;

            if (deletePolicyTemplateRequest !== null && deletePolicyTemplateRequest !== undefined) {
                if (deletePolicyTemplateRequest instanceof DeletePolicyTemplateRequest) {
                    policyTemplateId = deletePolicyTemplateRequest.policyTemplateId;
                } else {
                    policyTemplateId = deletePolicyTemplateRequest['policy_template_id'];
                }
            }

        
            if (policyTemplateId === null || policyTemplateId === undefined) {
            throw new RequiredError('policyTemplateId','Required parameter policyTemplateId was null or undefined when calling deletePolicyTemplate.');
            }

            options.pathParams = { 'policy_template_id': policyTemplateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询策略组概要信息列表,包括应用对象和详细策略项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyGroup(listPolicyGroupRequest?: ListPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/policy-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let policyGroupName;
            
            let policyGroupType;

            if (listPolicyGroupRequest !== null && listPolicyGroupRequest !== undefined) {
                if (listPolicyGroupRequest instanceof ListPolicyGroupRequest) {
                    offset = listPolicyGroupRequest.offset;
                    limit = listPolicyGroupRequest.limit;
                    policyGroupName = listPolicyGroupRequest.policyGroupName;
                    policyGroupType = listPolicyGroupRequest.policyGroupType;
                } else {
                    offset = listPolicyGroupRequest['offset'];
                    limit = listPolicyGroupRequest['limit'];
                    policyGroupName = listPolicyGroupRequest['policy_group_name'];
                    policyGroupType = listPolicyGroupRequest['policy_group_type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (policyGroupName !== null && policyGroupName !== undefined) {
                localVarQueryParameter['policy_group_name'] = policyGroupName;
            }
            if (policyGroupType !== null && policyGroupType !== undefined) {
                localVarQueryParameter['policy_group_type'] = policyGroupType;
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
        listPolicyGroupDetailInfo(listPolicyGroupDetailInfoRequest?: ListPolicyGroupDetailInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/policy-groups/show/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let policyGroupName;
            
            let policyGroupType;

            if (listPolicyGroupDetailInfoRequest !== null && listPolicyGroupDetailInfoRequest !== undefined) {
                if (listPolicyGroupDetailInfoRequest instanceof ListPolicyGroupDetailInfoRequest) {
                    offset = listPolicyGroupDetailInfoRequest.offset;
                    limit = listPolicyGroupDetailInfoRequest.limit;
                    policyGroupName = listPolicyGroupDetailInfoRequest.policyGroupName;
                    policyGroupType = listPolicyGroupDetailInfoRequest.policyGroupType;
                } else {
                    offset = listPolicyGroupDetailInfoRequest['offset'];
                    limit = listPolicyGroupDetailInfoRequest['limit'];
                    policyGroupName = listPolicyGroupDetailInfoRequest['policy_group_name'];
                    policyGroupType = listPolicyGroupDetailInfoRequest['policy_group_type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (policyGroupName !== null && policyGroupName !== undefined) {
                localVarQueryParameter['policy_group_name'] = policyGroupName;
            }
            if (policyGroupType !== null && policyGroupType !== undefined) {
                localVarQueryParameter['policy_group_type'] = policyGroupType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定策略组内的策略项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyOfPolicyGroup(listPolicyOfPolicyGroupRequest?: ListPolicyOfPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/policy-groups/{policy_group_id}/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyGroupId;
            
            let policyType;

            if (listPolicyOfPolicyGroupRequest !== null && listPolicyOfPolicyGroupRequest !== undefined) {
                if (listPolicyOfPolicyGroupRequest instanceof ListPolicyOfPolicyGroupRequest) {
                    policyGroupId = listPolicyOfPolicyGroupRequest.policyGroupId;
                    policyType = listPolicyOfPolicyGroupRequest.policyType;
                } else {
                    policyGroupId = listPolicyOfPolicyGroupRequest['policy_group_id'];
                    policyType = listPolicyOfPolicyGroupRequest['policy_type'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling listPolicyOfPolicyGroup.');
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
         * 查询策略模板概要信息列表，包含策略信息以及应用对象信息。用户在创建策略组的时候，可以根据已有策略模板按需调整配置，快速完成策略组的创建。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyTemplate(listPolicyTemplateRequest?: ListPolicyTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/policy-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let policyGroupName;

            if (listPolicyTemplateRequest !== null && listPolicyTemplateRequest !== undefined) {
                if (listPolicyTemplateRequest instanceof ListPolicyTemplateRequest) {
                    offset = listPolicyTemplateRequest.offset;
                    limit = listPolicyTemplateRequest.limit;
                    policyGroupName = listPolicyTemplateRequest.policyGroupName;
                } else {
                    offset = listPolicyTemplateRequest['offset'];
                    limit = listPolicyTemplateRequest['limit'];
                    policyGroupName = listPolicyTemplateRequest['policy_group_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (policyGroupName !== null && policyGroupName !== undefined) {
                localVarQueryParameter['policy_group_name'] = policyGroupName;
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
        listTargetsOfPolicyGroup(listTargetsOfPolicyGroupRequest?: ListTargetsOfPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/policy-groups/{policy_group_id}/target",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyGroupId;
            
            let targetType;

            if (listTargetsOfPolicyGroupRequest !== null && listTargetsOfPolicyGroupRequest !== undefined) {
                if (listTargetsOfPolicyGroupRequest instanceof ListTargetsOfPolicyGroupRequest) {
                    policyGroupId = listTargetsOfPolicyGroupRequest.policyGroupId;
                    targetType = listTargetsOfPolicyGroupRequest.targetType;
                } else {
                    policyGroupId = listTargetsOfPolicyGroupRequest['policy_group_id'];
                    targetType = listTargetsOfPolicyGroupRequest['target_type'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling listTargetsOfPolicyGroup.');
            }
            if (targetType !== null && targetType !== undefined) {
                localVarQueryParameter['target_type'] = targetType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_group_id': policyGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询初始策略项，初始策略项是所有协议策略配置项的默认配置，用户可以在初始策略项的基础上根据需求修改指定的配置，创建新的策略组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOriginalPolicyInfo() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/policy-groups/actions/list-original-policy",
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
         * 根据策略组ID查询策略组详细信息，包含策略信息以及应用对象信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicyGroup(showPolicyGroupRequest?: ShowPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/policy-groups/{policy_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyGroupId;

            if (showPolicyGroupRequest !== null && showPolicyGroupRequest !== undefined) {
                if (showPolicyGroupRequest instanceof ShowPolicyGroupRequest) {
                    policyGroupId = showPolicyGroupRequest.policyGroupId;
                } else {
                    policyGroupId = showPolicyGroupRequest['policy_group_id'];
                }
            }

        
            if (policyGroupId === null || policyGroupId === undefined) {
            throw new RequiredError('policyGroupId','Required parameter policyGroupId was null or undefined when calling showPolicyGroup.');
            }

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
                method: "PATCH",
                url: "/v1/{project_id}/policy-groups/{policy_group_id}",
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
         * 修改指定策略模板的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyTemplate(updatePolicyTemplateRequest?: UpdatePolicyTemplateRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/policy-templates/{policy_template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyTemplateId;

            if (updatePolicyTemplateRequest !== null && updatePolicyTemplateRequest !== undefined) {
                if (updatePolicyTemplateRequest instanceof UpdatePolicyTemplateRequest) {
                    policyTemplateId = updatePolicyTemplateRequest.policyTemplateId;
                    body = updatePolicyTemplateRequest.body
                } else {
                    policyTemplateId = updatePolicyTemplateRequest['policy_template_id'];
                    body = updatePolicyTemplateRequest['body'];
                }
            }

        
            if (policyTemplateId === null || policyTemplateId === undefined) {
            throw new RequiredError('policyTemplateId','Required parameter policyTemplateId was null or undefined when calling updatePolicyTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_template_id': policyTemplateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配额校验，购买服务器前可用调用该接口，校验本次创建服务器资源是否足够。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkQuota(checkQuotaRequest?: CheckQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/check/quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productId;
            
            let subscriptionNum;
            
            let diskSize;
            
            let diskNum;
            
            let flavorId;
            
            let isPeriod;
            
            let dehId;
            
            let clusterId;

            if (checkQuotaRequest !== null && checkQuotaRequest !== undefined) {
                if (checkQuotaRequest instanceof CheckQuotaRequest) {
                    productId = checkQuotaRequest.productId;
                    subscriptionNum = checkQuotaRequest.subscriptionNum;
                    diskSize = checkQuotaRequest.diskSize;
                    diskNum = checkQuotaRequest.diskNum;
                    flavorId = checkQuotaRequest.flavorId;
                    isPeriod = checkQuotaRequest.isPeriod;
                    dehId = checkQuotaRequest.dehId;
                    clusterId = checkQuotaRequest.clusterId;
                } else {
                    productId = checkQuotaRequest['product_id'];
                    subscriptionNum = checkQuotaRequest['subscription_num'];
                    diskSize = checkQuotaRequest['disk_size'];
                    diskNum = checkQuotaRequest['disk_num'];
                    flavorId = checkQuotaRequest['flavor_id'];
                    isPeriod = checkQuotaRequest['is_period'];
                    dehId = checkQuotaRequest['deh_id'];
                    clusterId = checkQuotaRequest['cluster_id'];
                }
            }

        
            if (productId === null || productId === undefined) {
                throw new RequiredError('productId','Required parameter productId was null or undefined when calling checkQuota.');
            }
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (subscriptionNum === null || subscriptionNum === undefined) {
                throw new RequiredError('subscriptionNum','Required parameter subscriptionNum was null or undefined when calling checkQuota.');
            }
            if (subscriptionNum !== null && subscriptionNum !== undefined) {
                localVarQueryParameter['subscription_num'] = subscriptionNum;
            }
            if (diskSize === null || diskSize === undefined) {
                throw new RequiredError('diskSize','Required parameter diskSize was null or undefined when calling checkQuota.');
            }
            if (diskSize !== null && diskSize !== undefined) {
                localVarQueryParameter['disk_size'] = diskSize;
            }
            if (diskNum === null || diskNum === undefined) {
                throw new RequiredError('diskNum','Required parameter diskNum was null or undefined when calling checkQuota.');
            }
            if (diskNum !== null && diskNum !== undefined) {
                localVarQueryParameter['disk_num'] = diskNum;
            }
            if (flavorId !== null && flavorId !== undefined) {
                localVarQueryParameter['flavor_id'] = flavorId;
            }
            if (isPeriod !== null && isPeriod !== undefined) {
                localVarQueryParameter['is_period'] = isPeriod;
            }
            if (dehId !== null && dehId !== undefined) {
                localVarQueryParameter['deh_id'] = dehId;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增/修改弹性伸缩策略,仅按需的服务器支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrUpdateScalingPolicy(createOrUpdateScalingPolicyRequest?: CreateOrUpdateScalingPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/scaling-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createOrUpdateScalingPolicyRequest !== null && createOrUpdateScalingPolicyRequest !== undefined) {
                if (createOrUpdateScalingPolicyRequest instanceof CreateOrUpdateScalingPolicyRequest) {
                    body = createOrUpdateScalingPolicyRequest.body
                } else {
                    body = createOrUpdateScalingPolicyRequest['body'];
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
         * 删除弹性伸缩策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScalingPolicy(deleteScalingPolicyRequest?: DeleteScalingPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/scaling-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverGroupId;

            if (deleteScalingPolicyRequest !== null && deleteScalingPolicyRequest !== undefined) {
                if (deleteScalingPolicyRequest instanceof DeleteScalingPolicyRequest) {
                    serverGroupId = deleteScalingPolicyRequest.serverGroupId;
                } else {
                    serverGroupId = deleteScalingPolicyRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
                throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling deleteScalingPolicy.');
            }
            if (serverGroupId !== null && serverGroupId !== undefined) {
                localVarQueryParameter['server_group_id'] = serverGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务器组弹性伸缩策略,如果服务器未配置策略时响应默认策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScalingPolicy(showScalingPolicyRequest?: ShowScalingPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/scaling-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverGroupId;

            if (showScalingPolicyRequest !== null && showScalingPolicyRequest !== undefined) {
                if (showScalingPolicyRequest instanceof ShowScalingPolicyRequest) {
                    serverGroupId = showScalingPolicyRequest.serverGroupId;
                } else {
                    serverGroupId = showScalingPolicyRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
                throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling showScalingPolicy.');
            }
            if (serverGroupId !== null && serverGroupId !== undefined) {
                localVarQueryParameter['server_group_id'] = serverGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除定时任务，忽略不存在的服务器组并且返回成功响应。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteScheduleTask(batchDeleteScheduleTaskRequest?: BatchDeleteScheduleTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/schedule-task/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteScheduleTaskRequest !== null && batchDeleteScheduleTaskRequest !== undefined) {
                if (batchDeleteScheduleTaskRequest instanceof BatchDeleteScheduleTaskRequest) {
                    body = batchDeleteScheduleTaskRequest.body
                } else {
                    body = batchDeleteScheduleTaskRequest['body'];
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
         * 新增定时任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScheduleTask(createScheduleTaskRequest?: CreateScheduleTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/schedule-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createScheduleTaskRequest !== null && createScheduleTaskRequest !== undefined) {
                if (createScheduleTaskRequest instanceof CreateScheduleTaskRequest) {
                    body = createScheduleTaskRequest.body
                } else {
                    body = createScheduleTaskRequest['body'];
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
         * 删除任务，忽略不存在的任务并且返回成功响应。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScheduleTask(deleteScheduleTaskRequest?: DeleteScheduleTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/schedule-task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (deleteScheduleTaskRequest !== null && deleteScheduleTaskRequest !== undefined) {
                if (deleteScheduleTaskRequest instanceof DeleteScheduleTaskRequest) {
                    taskId = deleteScheduleTaskRequest.taskId;
                } else {
                    taskId = deleteScheduleTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteScheduleTask.');
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
                url: "/v1/{project_id}/schedule-task/future-executions",
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
        listScheduleTasks(listScheduleTasksRequest?: ListScheduleTasksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/schedule-task",
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

            if (listScheduleTasksRequest !== null && listScheduleTasksRequest !== undefined) {
                if (listScheduleTasksRequest instanceof ListScheduleTasksRequest) {
                    offset = listScheduleTasksRequest.offset;
                    limit = listScheduleTasksRequest.limit;
                    taskName = listScheduleTasksRequest.taskName;
                    taskType = listScheduleTasksRequest.taskType;
                } else {
                    offset = listScheduleTasksRequest['offset'];
                    limit = listScheduleTasksRequest['limit'];
                    taskName = listScheduleTasksRequest['task_name'];
                    taskType = listScheduleTasksRequest['task_type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询定时任务执行子任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskExecuteDetail(listTaskExecuteDetailRequest?: ListTaskExecuteDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/schedule-task/{execute_history_id}/execute-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let executeHistoryId;
            
            let offset;
            
            let limit;

            if (listTaskExecuteDetailRequest !== null && listTaskExecuteDetailRequest !== undefined) {
                if (listTaskExecuteDetailRequest instanceof ListTaskExecuteDetailRequest) {
                    executeHistoryId = listTaskExecuteDetailRequest.executeHistoryId;
                    offset = listTaskExecuteDetailRequest.offset;
                    limit = listTaskExecuteDetailRequest.limit;
                } else {
                    executeHistoryId = listTaskExecuteDetailRequest['execute_history_id'];
                    offset = listTaskExecuteDetailRequest['offset'];
                    limit = listTaskExecuteDetailRequest['limit'];
                }
            }

        
            if (executeHistoryId === null || executeHistoryId === undefined) {
            throw new RequiredError('executeHistoryId','Required parameter executeHistoryId was null or undefined when calling listTaskExecuteDetail.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'execute_history_id': executeHistoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询定时任务执行列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskExecuteHistory(listTaskExecuteHistoryRequest?: ListTaskExecuteHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/schedule-task/{task_id}/execute-history",
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

            if (listTaskExecuteHistoryRequest !== null && listTaskExecuteHistoryRequest !== undefined) {
                if (listTaskExecuteHistoryRequest instanceof ListTaskExecuteHistoryRequest) {
                    taskId = listTaskExecuteHistoryRequest.taskId;
                    offset = listTaskExecuteHistoryRequest.offset;
                    limit = listTaskExecuteHistoryRequest.limit;
                } else {
                    taskId = listTaskExecuteHistoryRequest['task_id'];
                    offset = listTaskExecuteHistoryRequest['offset'];
                    limit = listTaskExecuteHistoryRequest['limit'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listTaskExecuteHistory.');
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
         * 查询指定定时任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScheduleTask(showScheduleTaskRequest?: ShowScheduleTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/schedule-task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showScheduleTaskRequest !== null && showScheduleTaskRequest !== undefined) {
                if (showScheduleTaskRequest instanceof ShowScheduleTaskRequest) {
                    taskId = showScheduleTaskRequest.taskId;
                } else {
                    taskId = showScheduleTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showScheduleTask.');
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
        updateScheduleTask(updateScheduleTaskRequest?: UpdateScheduleTaskRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/schedule-task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateScheduleTaskRequest !== null && updateScheduleTaskRequest !== undefined) {
                if (updateScheduleTaskRequest instanceof UpdateScheduleTaskRequest) {
                    taskId = updateScheduleTaskRequest.taskId;
                    body = updateScheduleTaskRequest.body
                } else {
                    taskId = updateScheduleTaskRequest['task_id'];
                    body = updateScheduleTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateScheduleTask.');
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
         * 批量修改服务器的镜像。
         * &gt; - 服务器的镜像和服务器组的镜像不一样时，支持服务器的镜像切换为服务器组的镜像，并且仅允许同等镜像进行切换，例如：同操作系统，免费镜像切换，同源同价的付费镜像切换。如果服务器组的镜像和服务器的镜像为非同等镜像，建议您直接购买新的服务器，删除或者退订老的服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchChangeServerImage(batchChangeServerImageRequest?: BatchChangeServerImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-servers/actions/batch-change-image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchChangeServerImageRequest !== null && batchChangeServerImageRequest !== undefined) {
                if (batchChangeServerImageRequest instanceof BatchChangeServerImageRequest) {
                    body = batchChangeServerImageRequest.body
                } else {
                    body = batchChangeServerImageRequest['body'];
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
         * 标记服务器维护状态，处于维护状态中的服务器不再分配流量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchChangeServerMaintainMode(batchChangeServerMaintainModeRequest?: BatchChangeServerMaintainModeRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/actions/batch-maint",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchChangeServerMaintainModeRequest !== null && batchChangeServerMaintainModeRequest !== undefined) {
                if (batchChangeServerMaintainModeRequest instanceof BatchChangeServerMaintainModeRequest) {
                    body = batchChangeServerMaintainModeRequest.body
                } else {
                    body = batchChangeServerMaintainModeRequest['body'];
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
         * 批量删除服务器。
         * &gt; - [仅支持删除按需订购的服务器，包周期订购的服务器需要到Console界面进行退订，订单退订成功后服务器将会自动删除。](tag:HW)[批量删除服务器。](tag:HCS)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteServer(batchDeleteServerRequest?: BatchDeleteServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-servers/actions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteServerRequest !== null && batchDeleteServerRequest !== undefined) {
                if (batchDeleteServerRequest instanceof BatchDeleteServerRequest) {
                    body = batchDeleteServerRequest.body
                } else {
                    body = batchDeleteServerRequest['body'];
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
         * 迁移云办公主机下面的服务器到目标云办公主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchMigrateHostsServer(batchMigrateHostsServerRequest?: BatchMigrateHostsServerRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/hosts/batch-migrate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchMigrateHostsServerRequest !== null && batchMigrateHostsServerRequest !== undefined) {
                if (batchMigrateHostsServerRequest instanceof BatchMigrateHostsServerRequest) {
                    body = batchMigrateHostsServerRequest.body
                } else {
                    body = batchMigrateHostsServerRequest['body'];
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
         * 重启服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRebootServer(batchRebootServerRequest?: BatchRebootServerRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/actions/batch-reboot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRebootServerRequest !== null && batchRebootServerRequest !== undefined) {
                if (batchRebootServerRequest instanceof BatchRebootServerRequest) {
                    body = batchRebootServerRequest.body
                } else {
                    body = batchRebootServerRequest['body'];
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
         * 批量重装服务器。
         * &gt; - 使用服务器原有的镜像进行重装，当服务器异常无法恢复时或者服务器运行时间久了，性能下降时，可选择重建服务器。注意：重装时系统盘的数据将会被清理掉。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchReinstallServer(batchReinstallServerRequest?: BatchReinstallServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-servers/actions/batch-reinstall",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchReinstallServerRequest !== null && batchReinstallServerRequest !== undefined) {
                if (batchReinstallServerRequest instanceof BatchReinstallServerRequest) {
                    body = batchReinstallServerRequest.body
                } else {
                    body = batchReinstallServerRequest['body'];
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
         * 批量服务器重新加入AD域，一般用于解决服务器脱域的情况使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRejoinDomain(batchRejoinDomainRequest?: BatchRejoinDomainRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/actions/batch-rejoin-domain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRejoinDomainRequest !== null && batchRejoinDomainRequest !== undefined) {
                if (batchRejoinDomainRequest instanceof BatchRejoinDomainRequest) {
                    body = batchRejoinDomainRequest.body
                } else {
                    body = batchRejoinDomainRequest['body'];
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
         * 启动服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStartServer(batchStartServerRequest?: BatchStartServerRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/actions/batch-start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchStartServerRequest !== null && batchStartServerRequest !== undefined) {
                if (batchStartServerRequest instanceof BatchStartServerRequest) {
                    body = batchStartServerRequest.body
                } else {
                    body = batchStartServerRequest['body'];
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
         * 关闭服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStopServer(batchStopServerRequest?: BatchStopServerRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/actions/batch-stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchStopServerRequest !== null && batchStopServerRequest !== undefined) {
                if (batchStopServerRequest instanceof BatchStopServerRequest) {
                    body = batchStopServerRequest.body
                } else {
                    body = batchStopServerRequest['body'];
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
         * 批量更新服务器虚拟会话IP配置，按需重启机器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateTsvi(batchUpdateTsviRequest?: BatchUpdateTsviRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/actions/batch-update-tsvi",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateTsviRequest !== null && batchUpdateTsviRequest !== undefined) {
                if (batchUpdateTsviRequest instanceof BatchUpdateTsviRequest) {
                    body = batchUpdateTsviRequest.body
                } else {
                    body = batchUpdateTsviRequest['body'];
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
         * 批量升级服务器HDA版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpgradeHdaVersion(batchUpgradeHdaVersionRequest?: BatchUpgradeHdaVersionRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/access-agent/actions/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpgradeHdaVersionRequest !== null && batchUpgradeHdaVersionRequest !== undefined) {
                if (batchUpgradeHdaVersionRequest instanceof BatchUpgradeHdaVersionRequest) {
                    body = batchUpgradeHdaVersionRequest.body
                } else {
                    body = batchUpgradeHdaVersionRequest['body'];
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
         * 修改服务器的镜像。
         * &gt; - 服务器的镜像和服务器组的镜像不一样时，支持服务器的镜像切换为服务器组的镜像，并且仅允许同等镜像进行切换，例如：同操作系统，免费镜像切换，同源同价的付费镜像切换。如果服务器组的镜像和服务器的镜像为非同等镜像，建议您直接购买新的服务器，删除或者退订老的服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeServerImage(changeServerImageRequest?: ChangeServerImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-servers/{server_id}/actions/change-image",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (changeServerImageRequest !== null && changeServerImageRequest !== undefined) {
                if (changeServerImageRequest instanceof ChangeServerImageRequest) {
                    serverId = changeServerImageRequest.serverId;
                    body = changeServerImageRequest.body
                } else {
                    serverId = changeServerImageRequest['server_id'];
                    body = changeServerImageRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeServerImage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建云服务器接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppServers(createAppServersRequest?: CreateAppServersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-servers/actions/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLinkedId;
            
            let serviceTransactionId;

            if (createAppServersRequest !== null && createAppServersRequest !== undefined) {
                if (createAppServersRequest instanceof CreateAppServersRequest) {
                    body = createAppServersRequest.body
                    xLinkedId = createAppServersRequest.xLinkedId;
                    serviceTransactionId = createAppServersRequest.serviceTransactionId;
                } else {
                    body = createAppServersRequest['body'];
                    xLinkedId = createAppServersRequest['X-Linked-Id'];
                    serviceTransactionId = createAppServersRequest['Service-Transaction-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLinkedId !== undefined && xLinkedId !== null) {
                localVarHeaderParameter['X-Linked-Id'] = String(xLinkedId);
            }
            if (serviceTransactionId !== undefined && serviceTransactionId !== null) {
                localVarHeaderParameter['Service-Transaction-Id'] = String(serviceTransactionId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除服务器，忽略不存在的服务器并且返回成功响应。订单退订成功后调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServer(deleteServerRequest?: DeleteServerRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/app-servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (deleteServerRequest !== null && deleteServerRequest !== undefined) {
                if (deleteServerRequest instanceof DeleteServerRequest) {
                    serverId = deleteServerRequest.serverId;
                } else {
                    serverId = deleteServerRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling deleteServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的所有HDA最新版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessAgentLatestVersion() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/access-agent/actions/show-latest-version",
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
         * 查询服务器的HDA相关信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerHdaDetails(listServerHdaDetailsRequest?: ListServerHdaDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/access-agent/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let serverGroupId;
            
            let serverName;

            if (listServerHdaDetailsRequest !== null && listServerHdaDetailsRequest !== undefined) {
                if (listServerHdaDetailsRequest instanceof ListServerHdaDetailsRequest) {
                    offset = listServerHdaDetailsRequest.offset;
                    limit = listServerHdaDetailsRequest.limit;
                    serverGroupId = listServerHdaDetailsRequest.serverGroupId;
                    serverName = listServerHdaDetailsRequest.serverName;
                } else {
                    offset = listServerHdaDetailsRequest['offset'];
                    limit = listServerHdaDetailsRequest['limit'];
                    serverGroupId = listServerHdaDetailsRequest['server_group_id'];
                    serverName = listServerHdaDetailsRequest['server_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (serverGroupId !== null && serverGroupId !== undefined) {
                localVarQueryParameter['server_group_id'] = serverGroupId;
            }
            if (serverName !== null && serverName !== undefined) {
                localVarQueryParameter['server_name'] = serverName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务器的HDA升级跟踪记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerHdaUpgradeRecords(listServerHdaUpgradeRecordsRequest?: ListServerHdaUpgradeRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/access-agent/upgrade-record",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listServerHdaUpgradeRecordsRequest !== null && listServerHdaUpgradeRecordsRequest !== undefined) {
                if (listServerHdaUpgradeRecordsRequest instanceof ListServerHdaUpgradeRecordsRequest) {
                    offset = listServerHdaUpgradeRecordsRequest.offset;
                    limit = listServerHdaUpgradeRecordsRequest.limit;
                } else {
                    offset = listServerHdaUpgradeRecordsRequest['offset'];
                    limit = listServerHdaUpgradeRecordsRequest['limit'];
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
         * 查询指定时间范围指定指标的指定粒度的监控数据，可以通过参数指定需要查询的数据维度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerMetricData(listServerMetricDataRequest?: ListServerMetricDataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/server-metric-data/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverId;
            
            let namespace;
            
            let metricName;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;

            if (listServerMetricDataRequest !== null && listServerMetricDataRequest !== undefined) {
                if (listServerMetricDataRequest instanceof ListServerMetricDataRequest) {
                    serverId = listServerMetricDataRequest.serverId;
                    namespace = listServerMetricDataRequest.namespace;
                    metricName = listServerMetricDataRequest.metricName;
                    from = listServerMetricDataRequest.from;
                    to = listServerMetricDataRequest.to;
                    period = listServerMetricDataRequest.period;
                    filter = listServerMetricDataRequest.filter;
                } else {
                    serverId = listServerMetricDataRequest['server_id'];
                    namespace = listServerMetricDataRequest['namespace'];
                    metricName = listServerMetricDataRequest['metric_name'];
                    from = listServerMetricDataRequest['from'];
                    to = listServerMetricDataRequest['to'];
                    period = listServerMetricDataRequest['period'];
                    filter = listServerMetricDataRequest['filter'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling listServerMetricData.');
            }
            if (namespace === null || namespace === undefined) {
                throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listServerMetricData.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (metricName === null || metricName === undefined) {
                throw new RequiredError('metricName','Required parameter metricName was null or undefined when calling listServerMetricData.');
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listServerMetricData.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listServerMetricData.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period === null || period === undefined) {
                throw new RequiredError('period','Required parameter period was null or undefined when calling listServerMetricData.');
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter === null || filter === undefined) {
                throw new RequiredError('filter','Required parameter filter was null or undefined when calling listServerMetricData.');
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServers(listServersRequest?: ListServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let serverGroupId;
            
            let serverName;
            
            let machineName;
            
            let ipAddr;
            
            let serverId;
            
            let maintainStatus;
            
            let scalingAutoCreate;

            if (listServersRequest !== null && listServersRequest !== undefined) {
                if (listServersRequest instanceof ListServersRequest) {
                    offset = listServersRequest.offset;
                    limit = listServersRequest.limit;
                    serverGroupId = listServersRequest.serverGroupId;
                    serverName = listServersRequest.serverName;
                    machineName = listServersRequest.machineName;
                    ipAddr = listServersRequest.ipAddr;
                    serverId = listServersRequest.serverId;
                    maintainStatus = listServersRequest.maintainStatus;
                    scalingAutoCreate = listServersRequest.scalingAutoCreate;
                } else {
                    offset = listServersRequest['offset'];
                    limit = listServersRequest['limit'];
                    serverGroupId = listServersRequest['server_group_id'];
                    serverName = listServersRequest['server_name'];
                    machineName = listServersRequest['machine_name'];
                    ipAddr = listServersRequest['ip_addr'];
                    serverId = listServersRequest['server_id'];
                    maintainStatus = listServersRequest['maintain_status'];
                    scalingAutoCreate = listServersRequest['scaling_auto_create'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (serverGroupId !== null && serverGroupId !== undefined) {
                localVarQueryParameter['server_group_id'] = serverGroupId;
            }
            if (serverName !== null && serverName !== undefined) {
                localVarQueryParameter['server_name'] = serverName;
            }
            if (machineName !== null && machineName !== undefined) {
                localVarQueryParameter['machine_name'] = machineName;
            }
            if (ipAddr !== null && ipAddr !== undefined) {
                localVarQueryParameter['ip_addr'] = ipAddr;
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }
            if (maintainStatus !== null && maintainStatus !== undefined) {
                localVarQueryParameter['maintain_status'] = maintainStatus;
            }
            if (scalingAutoCreate !== null && scalingAutoCreate !== undefined) {
                localVarQueryParameter['scaling_auto_create'] = scalingAutoCreate;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重装服务器。
         * &gt; - 使用服务器原有的镜像进行重装，当服务器异常无法恢复时或者服务器运行时间久了，性能下降时，可选择重建服务器。注意：重装时系统盘的数据将会被清理掉。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        reinstallServer(reinstallServerRequest?: ReinstallServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-servers/{server_id}/actions/reinstall",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (reinstallServerRequest !== null && reinstallServerRequest !== undefined) {
                if (reinstallServerRequest instanceof ReinstallServerRequest) {
                    serverId = reinstallServerRequest.serverId;
                    body = reinstallServerRequest.body
                } else {
                    serverId = reinstallServerRequest['server_id'];
                    body = reinstallServerRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling reinstallServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的HDA最新版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccessAgentLatestVersion() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/access-agent/latest-version",
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
         * 查询HDA升级提醒标识(仅内部访问使用)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHdaUpgradeFlag() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/access-agent/upgrade-flag",
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
         * 查询指定的服务器当前这个接口的查询数据和list查询的一致。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServer(showServerRequest?: ShowServerRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showServerRequest !== null && showServerRequest !== undefined) {
                if (showServerRequest instanceof ShowServerRequest) {
                    serverId = showServerRequest.serverId;
                } else {
                    serverId = showServerRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可获取某一计算机在一段时间段(范围：1小时到30天)的数据信息（例如CPU占用率、内存占用率、用户的在线时间段等），最长数据保存时间不能超过180天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerMetricData(showServerMetricDataRequest?: ShowServerMetricDataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/metric-data/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverId;
            
            let startTime;
            
            let endTime;
            
            let metricName;

            if (showServerMetricDataRequest !== null && showServerMetricDataRequest !== undefined) {
                if (showServerMetricDataRequest instanceof ShowServerMetricDataRequest) {
                    serverId = showServerMetricDataRequest.serverId;
                    startTime = showServerMetricDataRequest.startTime;
                    endTime = showServerMetricDataRequest.endTime;
                    metricName = showServerMetricDataRequest.metricName;
                } else {
                    serverId = showServerMetricDataRequest['server_id'];
                    startTime = showServerMetricDataRequest['start_time'];
                    endTime = showServerMetricDataRequest['end_time'];
                    metricName = showServerMetricDataRequest['metric_name'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerMetricData.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showServerMetricData.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showServerMetricData.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取VNC远程登录地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerVnc(showServerVncRequest?: ShowServerVncRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-servers/{server_id}/actions/vnc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showServerVncRequest !== null && showServerVncRequest !== undefined) {
                if (showServerVncRequest instanceof ShowServerVncRequest) {
                    serverId = showServerVncRequest.serverId;
                } else {
                    serverId = showServerVncRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServerVnc.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改服务器。
         * &gt; - 服务器的状态修改为维护模式后，用户打开应用，选择可用的服务器进行接入的时候，会过滤掉处于维护模式的服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServer(updateServerRequest?: UpdateServerRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateServerRequest !== null && updateServerRequest !== undefined) {
                if (updateServerRequest instanceof UpdateServerRequest) {
                    serverId = updateServerRequest.serverId;
                    body = updateServerRequest.body
                } else {
                    serverId = updateServerRequest['server_id'];
                    body = updateServerRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建服务器组。
         * &gt; - 服务器组是一组相同配置的服务器集合，服务器组内的服务器使用同一镜像创建，配置相同，运行相同的应用程序。用户在打开云应用时，会根据调度规则选取组内的一台可用服务器进行连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createServerGroup(createServerGroupRequest?: CreateServerGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-server-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createServerGroupRequest !== null && createServerGroupRequest !== undefined) {
                if (createServerGroupRequest instanceof CreateServerGroupRequest) {
                    body = createServerGroupRequest.body
                } else {
                    body = createServerGroupRequest['body'];
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
         * 删除服务器组。
         * - &gt; 删除服务器组之前，需要先删除服务器组内的所有服务器。如果传服务器组已被删除，重复执行删除，则返回成功响应。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServerGroups(deleteServerGroupsRequest?: DeleteServerGroupsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/app-server-groups/{server_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverGroupId;

            if (deleteServerGroupsRequest !== null && deleteServerGroupsRequest !== undefined) {
                if (deleteServerGroupsRequest instanceof DeleteServerGroupsRequest) {
                    serverGroupId = deleteServerGroupsRequest.serverGroupId;
                } else {
                    serverGroupId = deleteServerGroupsRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling deleteServerGroups.');
            }

            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务器组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerGroups(listServerGroupsRequest?: ListServerGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-server-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let serverGroupName;
            
            let serverGroupId;
            
            let appType;
            
            let tags;
            
            let enterpriseProjectId;
            
            let isSecondaryServerGroup;

            if (listServerGroupsRequest !== null && listServerGroupsRequest !== undefined) {
                if (listServerGroupsRequest instanceof ListServerGroupsRequest) {
                    offset = listServerGroupsRequest.offset;
                    limit = listServerGroupsRequest.limit;
                    serverGroupName = listServerGroupsRequest.serverGroupName;
                    serverGroupId = listServerGroupsRequest.serverGroupId;
                    appType = listServerGroupsRequest.appType;
                    tags = listServerGroupsRequest.tags;
                    enterpriseProjectId = listServerGroupsRequest.enterpriseProjectId;
                    isSecondaryServerGroup = listServerGroupsRequest.isSecondaryServerGroup;
                } else {
                    offset = listServerGroupsRequest['offset'];
                    limit = listServerGroupsRequest['limit'];
                    serverGroupName = listServerGroupsRequest['server_group_name'];
                    serverGroupId = listServerGroupsRequest['server_group_id'];
                    appType = listServerGroupsRequest['app_type'];
                    tags = listServerGroupsRequest['tags'];
                    enterpriseProjectId = listServerGroupsRequest['enterprise_project_id'];
                    isSecondaryServerGroup = listServerGroupsRequest['is_secondary_server_group'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (serverGroupName !== null && serverGroupName !== undefined) {
                localVarQueryParameter['server_group_name'] = serverGroupName;
            }
            if (serverGroupId !== null && serverGroupId !== undefined) {
                localVarQueryParameter['server_group_id'] = serverGroupId;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (isSecondaryServerGroup !== null && isSecondaryServerGroup !== undefined) {
                localVarQueryParameter['is_secondary_server_group'] = isSecondaryServerGroup;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户服务器组基础信息列表(用于创建应用组时绑定服务器组)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTenantServerGroups(listTenantServerGroupsRequest?: ListTenantServerGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-server-groups/actions/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let severGroupName;
            
            let appType;
            
            let isSecondaryServerGroup;

            if (listTenantServerGroupsRequest !== null && listTenantServerGroupsRequest !== undefined) {
                if (listTenantServerGroupsRequest instanceof ListTenantServerGroupsRequest) {
                    offset = listTenantServerGroupsRequest.offset;
                    limit = listTenantServerGroupsRequest.limit;
                    severGroupName = listTenantServerGroupsRequest.severGroupName;
                    appType = listTenantServerGroupsRequest.appType;
                    isSecondaryServerGroup = listTenantServerGroupsRequest.isSecondaryServerGroup;
                } else {
                    offset = listTenantServerGroupsRequest['offset'];
                    limit = listTenantServerGroupsRequest['limit'];
                    severGroupName = listTenantServerGroupsRequest['sever_group_name'];
                    appType = listTenantServerGroupsRequest['app_type'];
                    isSecondaryServerGroup = listTenantServerGroupsRequest['is_secondary_server_group'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (severGroupName !== null && severGroupName !== undefined) {
                localVarQueryParameter['sever_group_name'] = severGroupName;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (isSecondaryServerGroup !== null && isSecondaryServerGroup !== undefined) {
                localVarQueryParameter['is_secondary_server_group'] = isSecondaryServerGroup;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的服务器组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerGroup(showServerGroupRequest?: ShowServerGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-server-groups/{server_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverGroupId;

            if (showServerGroupRequest !== null && showServerGroupRequest !== undefined) {
                if (showServerGroupRequest instanceof ShowServerGroupRequest) {
                    serverGroupId = showServerGroupRequest.serverGroupId;
                } else {
                    serverGroupId = showServerGroupRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling showServerGroup.');
            }

            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定租户服务器组限制查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerGroupRestrict() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-server-groups/resources/restrict",
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
         * 查询指定的服务器组内服务器状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerGroupState(showServerGroupStateRequest?: ShowServerGroupStateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/app-server-groups/{server_group_id}/state",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverGroupId;

            if (showServerGroupStateRequest !== null && showServerGroupStateRequest !== undefined) {
                if (showServerGroupStateRequest instanceof ShowServerGroupStateRequest) {
                    serverGroupId = showServerGroupStateRequest.serverGroupId;
                } else {
                    serverGroupId = showServerGroupStateRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling showServerGroupState.');
            }

            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改服务器组。
         * - &gt; 修改服务器组的镜像，系统盘大小，OU信息后，已创建的服务器配置不变，新添加的服务器会使用新的配置创建。修改最大会话数后，用户接入服务器组时，会按照最新的配置进行路由计算。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServerGroup(updateServerGroupRequest?: UpdateServerGroupRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/app-server-groups/{server_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverGroupId;

            if (updateServerGroupRequest !== null && updateServerGroupRequest !== undefined) {
                if (updateServerGroupRequest instanceof UpdateServerGroupRequest) {
                    serverGroupId = updateServerGroupRequest.serverGroupId;
                    body = updateServerGroupRequest.body
                } else {
                    serverGroupId = updateServerGroupRequest['server_group_id'];
                    body = updateServerGroupRequest['body'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling updateServerGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验服务器组是否符合指定的规则。
         * 1. 校验服务器组名称是否符合规则。
         * 2. 校验服务器组名称是否重复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateServerGroup(validateServerGroupRequest?: ValidateServerGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/app-server-groups/rules/validate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (validateServerGroupRequest !== null && validateServerGroupRequest !== undefined) {
                if (validateServerGroupRequest instanceof ValidateServerGroupRequest) {
                    body = validateServerGroupRequest.body
                } else {
                    body = validateServerGroupRequest['body'];
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
         * 导出应用使用记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportAppConnection(exportAppConnectionRequest?: ExportAppConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/session/app-connection/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (exportAppConnectionRequest !== null && exportAppConnectionRequest !== undefined) {
                if (exportAppConnectionRequest instanceof ExportAppConnectionRequest) {
                    body = exportAppConnectionRequest.body
                } else {
                    body = exportAppConnectionRequest['body'];
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
         * 导出用户会话列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportSessions(exportSessionsRequest?: ExportSessionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/session/list-sessions/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (exportSessionsRequest !== null && exportSessionsRequest !== undefined) {
                if (exportSessionsRequest instanceof ExportSessionsRequest) {
                    body = exportSessionsRequest.body
                } else {
                    body = exportSessionsRequest['body'];
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
         * 导出用户登录记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportUserConnection(exportUserConnectionRequest?: ExportUserConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/session/user-connection/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (exportUserConnectionRequest !== null && exportUserConnectionRequest !== undefined) {
                if (exportUserConnectionRequest instanceof ExportUserConnectionRequest) {
                    body = exportUserConnectionRequest.body
                } else {
                    body = exportUserConnectionRequest['body'];
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
         * 查询应用使用记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppConnection(listAppConnectionRequest?: ListAppConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/session/app-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listAppConnectionRequest !== null && listAppConnectionRequest !== undefined) {
                if (listAppConnectionRequest instanceof ListAppConnectionRequest) {
                    body = listAppConnectionRequest.body
                    limit = listAppConnectionRequest.limit;
                    offset = listAppConnectionRequest.offset;
                } else {
                    body = listAppConnectionRequest['body'];
                    limit = listAppConnectionRequest['limit'];
                    offset = listAppConnectionRequest['offset'];
                }
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户名查询当前会话。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSessionByUserName(listSessionByUserNameRequest?: ListSessionByUserNameRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/session/user-session-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;

            if (listSessionByUserNameRequest !== null && listSessionByUserNameRequest !== undefined) {
                if (listSessionByUserNameRequest instanceof ListSessionByUserNameRequest) {
                    userName = listSessionByUserNameRequest.userName;
                } else {
                    userName = listSessionByUserNameRequest['user_name'];
                }
            }

        
            if (userName === null || userName === undefined) {
                throw new RequiredError('userName','Required parameter userName was null or undefined when calling listSessionByUserName.');
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户会话列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSessions(listSessionsRequest?: ListSessionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/session/list-sessions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let queryBeginTime;
            
            let queryEndTime;
            
            let limit;
            
            let offset;
            
            let userName;
            
            let appServerGroupId;
            
            let vmIp;
            
            let publicIp;
            
            let machineName;
            
            let sessionState;
            
            let isSuccess;

            if (listSessionsRequest !== null && listSessionsRequest !== undefined) {
                if (listSessionsRequest instanceof ListSessionsRequest) {
                    queryBeginTime = listSessionsRequest.queryBeginTime;
                    queryEndTime = listSessionsRequest.queryEndTime;
                    limit = listSessionsRequest.limit;
                    offset = listSessionsRequest.offset;
                    userName = listSessionsRequest.userName;
                    appServerGroupId = listSessionsRequest.appServerGroupId;
                    vmIp = listSessionsRequest.vmIp;
                    publicIp = listSessionsRequest.publicIp;
                    machineName = listSessionsRequest.machineName;
                    sessionState = listSessionsRequest.sessionState;
                    isSuccess = listSessionsRequest.isSuccess;
                } else {
                    queryBeginTime = listSessionsRequest['query_begin_time'];
                    queryEndTime = listSessionsRequest['query_end_time'];
                    limit = listSessionsRequest['limit'];
                    offset = listSessionsRequest['offset'];
                    userName = listSessionsRequest['user_name'];
                    appServerGroupId = listSessionsRequest['app_server_group_id'];
                    vmIp = listSessionsRequest['vm_ip'];
                    publicIp = listSessionsRequest['public_ip'];
                    machineName = listSessionsRequest['machine_name'];
                    sessionState = listSessionsRequest['session_state'];
                    isSuccess = listSessionsRequest['is_success'];
                }
            }

        
            if (queryBeginTime === null || queryBeginTime === undefined) {
                throw new RequiredError('queryBeginTime','Required parameter queryBeginTime was null or undefined when calling listSessions.');
            }
            if (queryBeginTime !== null && queryBeginTime !== undefined) {
                localVarQueryParameter['query_begin_time'] = queryBeginTime;
            }
            if (queryEndTime === null || queryEndTime === undefined) {
                throw new RequiredError('queryEndTime','Required parameter queryEndTime was null or undefined when calling listSessions.');
            }
            if (queryEndTime !== null && queryEndTime !== undefined) {
                localVarQueryParameter['query_end_time'] = queryEndTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (appServerGroupId !== null && appServerGroupId !== undefined) {
                localVarQueryParameter['app_server_group_id'] = appServerGroupId;
            }
            if (vmIp !== null && vmIp !== undefined) {
                localVarQueryParameter['vm_ip'] = vmIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (machineName !== null && machineName !== undefined) {
                localVarQueryParameter['machine_name'] = machineName;
            }
            if (sessionState !== null && sessionState !== undefined) {
                localVarQueryParameter['session_state'] = sessionState;
            }
            if (isSuccess !== null && isSuccess !== undefined) {
                localVarQueryParameter['is_success'] = isSuccess;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户登录记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserConnection(listUserConnectionRequest?: ListUserConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/session/user-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listUserConnectionRequest !== null && listUserConnectionRequest !== undefined) {
                if (listUserConnectionRequest instanceof ListUserConnectionRequest) {
                    body = listUserConnectionRequest.body
                    limit = listUserConnectionRequest.limit;
                    offset = listUserConnectionRequest.offset;
                } else {
                    body = listUserConnectionRequest['body'];
                    limit = listUserConnectionRequest['limit'];
                    offset = listUserConnectionRequest['offset'];
                }
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户会话注销。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        logoffUserSession(logoffUserSessionRequest?: LogoffUserSessionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/session/logoff",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (logoffUserSessionRequest !== null && logoffUserSessionRequest !== undefined) {
                if (logoffUserSessionRequest instanceof LogoffUserSessionRequest) {
                    body = logoffUserSessionRequest.body
                } else {
                    body = logoffUserSessionRequest['body'];
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
         * 此接口为幂等接口：
         * 同时对多个服务器组批量添加标签，最大支持100个服务器组，每个服务器组最大20个标签
         * 创建时如果请求体中存在重复key则报错。        
         * 创建时，不允许设置重复key数据,如果数据库已存在该key，就覆盖value的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateServerGroupTags(batchCreateServerGroupTagsRequest?: BatchCreateServerGroupTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/server-group/tags/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateServerGroupTagsRequest !== null && batchCreateServerGroupTagsRequest !== undefined) {
                if (batchCreateServerGroupTagsRequest instanceof BatchCreateServerGroupTagsRequest) {
                    body = batchCreateServerGroupTagsRequest.body
                } else {
                    body = batchCreateServerGroupTagsRequest['body'];
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
         * 此接口为幂等接口：
         * 同时对多个服务器组批量删除标签，最大支持100个服务器组，每个服务器组最大20个标签。
         * 删除时，如果删除的标签不存在，默认处理成功，删除时不对标签字符集范围做校验。
         * 删除时tags结构体不能缺失，key不能为空，或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteServerGroupTags(batchDeleteServerGroupTagsRequest?: BatchDeleteServerGroupTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/server-group/tags/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteServerGroupTagsRequest !== null && batchDeleteServerGroupTagsRequest !== undefined) {
                if (batchDeleteServerGroupTagsRequest instanceof BatchDeleteServerGroupTagsRequest) {
                    body = batchDeleteServerGroupTagsRequest.body
                } else {
                    body = batchDeleteServerGroupTagsRequest['body'];
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
         * 此接口为幂等接口：
         * 创建时如果请求体中存在重复key则报错。
         * 创建时，不允许设置重复key数据,如果数据库已存在该key，就覆盖value的值。
         * 一个服务器组上最多有20个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createServerGroupTags(createServerGroupTagsRequest?: CreateServerGroupTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/server-group/{server_group_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverGroupId;

            if (createServerGroupTagsRequest !== null && createServerGroupTagsRequest !== undefined) {
                if (createServerGroupTagsRequest instanceof CreateServerGroupTagsRequest) {
                    serverGroupId = createServerGroupTagsRequest.serverGroupId;
                    body = createServerGroupTagsRequest.body
                } else {
                    serverGroupId = createServerGroupTagsRequest['server_group_id'];
                    body = createServerGroupTagsRequest['body'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling createServerGroupTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口为幂等接口：
         * 删除时，如果删除的标签不存在，默认处理成功,删除时不对标签字符集范围做校验。
         * 删除时tags结构体不能缺失，key不能为空，或者空字符串。
         * 支持最多每次删除20个标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServerGroupTags(deleteServerGroupTagsRequest?: DeleteServerGroupTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/server-group/{server_group_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverGroupId;

            if (deleteServerGroupTagsRequest !== null && deleteServerGroupTagsRequest !== undefined) {
                if (deleteServerGroupTagsRequest instanceof DeleteServerGroupTagsRequest) {
                    serverGroupId = deleteServerGroupTagsRequest.serverGroupId;
                    body = deleteServerGroupTagsRequest.body
                } else {
                    serverGroupId = deleteServerGroupTagsRequest['server_group_id'];
                    body = deleteServerGroupTagsRequest['body'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling deleteServerGroupTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在所有服务器组上的资源标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerGroupTag() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/server-group/tags",
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
         * 查询指定服务器组的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServerGroupTag(showServerGroupTagRequest?: ShowServerGroupTagRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/server-group/{server_group_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverGroupId;

            if (showServerGroupTagRequest !== null && showServerGroupTagRequest !== undefined) {
                if (showServerGroupTagRequest instanceof ShowServerGroupTagRequest) {
                    serverGroupId = showServerGroupTagRequest.serverGroupId;
                } else {
                    serverGroupId = showServerGroupTagRequest['server_group_id'];
                }
            }

        
            if (serverGroupId === null || serverGroupId === undefined) {
            throw new RequiredError('serverGroupId','Required parameter serverGroupId was null or undefined when calling showServerGroupTag.');
            }

            options.pathParams = { 'server_group_id': serverGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询可用磁盘类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVolumeType() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/volume-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): WorkspaceAppClient {
    return new WorkspaceAppClient(client);
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