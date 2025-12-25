import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionInfo } from './model/ActionInfo';
import { ActionItemVo } from './model/ActionItemVo';
import { ActionSubItemVo } from './model/ActionSubItemVo';
import { AddExceptRuleReq } from './model/AddExceptRuleReq';
import { AddQueueUserListRequest } from './model/AddQueueUserListRequest';
import { AddQueueUserListResponse } from './model/AddQueueUserListResponse';
import { AddWorkloadPlanStageRequest } from './model/AddWorkloadPlanStageRequest';
import { AddWorkloadPlanStageResponse } from './model/AddWorkloadPlanStageResponse';
import { AddWorkloadQueueRequest } from './model/AddWorkloadQueueRequest';
import { AddWorkloadQueueResponse } from './model/AddWorkloadQueueResponse';
import { AddWorkloadRuleRequest } from './model/AddWorkloadRuleRequest';
import { AddWorkloadRuleResponse } from './model/AddWorkloadRuleResponse';
import { AlarmConfigResponse } from './model/AlarmConfigResponse';
import { AlarmDetailResponse } from './model/AlarmDetailResponse';
import { AlarmStatisticResponse } from './model/AlarmStatisticResponse';
import { AlarmSubRequest } from './model/AlarmSubRequest';
import { AlarmSubUpdateRequest } from './model/AlarmSubUpdateRequest';
import { AlarmSubscriptionResponse } from './model/AlarmSubscriptionResponse';
import { AssociateEipRequest } from './model/AssociateEipRequest';
import { AssociateEipResponse } from './model/AssociateEipResponse';
import { AssociateElbRequest } from './model/AssociateElbRequest';
import { AssociateElbResponse } from './model/AssociateElbResponse';
import { AuditDumpRecord } from './model/AuditDumpRecord';
import { AvailabilityZone } from './model/AvailabilityZone';
import { BackupStrategyDetail } from './model/BackupStrategyDetail';
import { BackupStrategyRequest } from './model/BackupStrategyRequest';
import { BatchCreateClusterCnRequest } from './model/BatchCreateClusterCnRequest';
import { BatchCreateClusterCnResponse } from './model/BatchCreateClusterCnResponse';
import { BatchCreateCn } from './model/BatchCreateCn';
import { BatchCreateResourceTag } from './model/BatchCreateResourceTag';
import { BatchCreateResourceTagRequest } from './model/BatchCreateResourceTagRequest';
import { BatchCreateResourceTagResponse } from './model/BatchCreateResourceTagResponse';
import { BatchCreateResourceTags } from './model/BatchCreateResourceTags';
import { BatchDeleteClusterCnRequest } from './model/BatchDeleteClusterCnRequest';
import { BatchDeleteClusterCnResponse } from './model/BatchDeleteClusterCnResponse';
import { BatchDeleteCn } from './model/BatchDeleteCn';
import { BatchDeleteResourceTag } from './model/BatchDeleteResourceTag';
import { BatchDeleteResourceTagRequest } from './model/BatchDeleteResourceTagRequest';
import { BatchDeleteResourceTagResponse } from './model/BatchDeleteResourceTagResponse';
import { BatchDeleteResourceTags } from './model/BatchDeleteResourceTags';
import { BucketSplitInfo } from './model/BucketSplitInfo';
import { CancelReadonlyClusterRequest } from './model/CancelReadonlyClusterRequest';
import { CancelReadonlyClusterResponse } from './model/CancelReadonlyClusterResponse';
import { ChangeSecurityGroupRequest } from './model/ChangeSecurityGroupRequest';
import { ChangeSecurityGroupRequestBody } from './model/ChangeSecurityGroupRequestBody';
import { ChangeSecurityGroupResponse } from './model/ChangeSecurityGroupResponse';
import { CheckClusterRequest } from './model/CheckClusterRequest';
import { CheckClusterResponse } from './model/CheckClusterResponse';
import { CheckClusterShrinkRequest } from './model/CheckClusterShrinkRequest';
import { CheckClusterShrinkResponse } from './model/CheckClusterShrinkResponse';
import { CheckDisasterNameRequest } from './model/CheckDisasterNameRequest';
import { CheckDisasterNameResponse } from './model/CheckDisasterNameResponse';
import { CheckGrowClusterRequest } from './model/CheckGrowClusterRequest';
import { CheckGrowClusterResponse } from './model/CheckGrowClusterResponse';
import { CheckTableNameResult } from './model/CheckTableNameResult';
import { CheckTableRestoreRequest } from './model/CheckTableRestoreRequest';
import { CheckTableRestoreRequestBody } from './model/CheckTableRestoreRequestBody';
import { CheckTableRestoreResponse } from './model/CheckTableRestoreResponse';
import { Cluster } from './model/Cluster';
import { ClusterCheckBody } from './model/ClusterCheckBody';
import { ClusterCheckRequestBody } from './model/ClusterCheckRequestBody';
import { ClusterConfiguration } from './model/ClusterConfiguration';
import { ClusterDescriptionInfo } from './model/ClusterDescriptionInfo';
import { ClusterDetail } from './model/ClusterDetail';
import { ClusterDisasterRecovery } from './model/ClusterDisasterRecovery';
import { ClusterElbInfo } from './model/ClusterElbInfo';
import { ClusterFlavorDetailInfo } from './model/ClusterFlavorDetailInfo';
import { ClusterFlavorResp } from './model/ClusterFlavorResp';
import { ClusterInfo } from './model/ClusterInfo';
import { ClusterMetric } from './model/ClusterMetric';
import { ClusterNameReq } from './model/ClusterNameReq';
import { ClusterNodeInfo } from './model/ClusterNodeInfo';
import { ClusterRecoveryProgress } from './model/ClusterRecoveryProgress';
import { ClusterRing } from './model/ClusterRing';
import { ClusterShrinkReq } from './model/ClusterShrinkReq';
import { ClusterSnapshots } from './model/ClusterSnapshots';
import { ClusterTimezoneReq } from './model/ClusterTimezoneReq';
import { ClusterUpdateRecordResp } from './model/ClusterUpdateRecordResp';
import { CompatibleConfigurationResp } from './model/CompatibleConfigurationResp';
import { CompatibleDataStoreResp } from './model/CompatibleDataStoreResp';
import { CompatibleFaultResp } from './model/CompatibleFaultResp';
import { CompatibleInstanceVolumeResp } from './model/CompatibleInstanceVolumeResp';
import { CompatibleReplicasResp } from './model/CompatibleReplicasResp';
import { ConfigurationParameter } from './model/ConfigurationParameter';
import { ConfigurationParameterUnit } from './model/ConfigurationParameterUnit';
import { ConfigurationParameterValue } from './model/ConfigurationParameterValue';
import { ConfigurationParameterValues } from './model/ConfigurationParameterValues';
import { ConfigurationRecordResp } from './model/ConfigurationRecordResp';
import { ConvertToLogicalClusterRequest } from './model/ConvertToLogicalClusterRequest';
import { ConvertToLogicalClusterResponse } from './model/ConvertToLogicalClusterResponse';
import { CoordinatorNode } from './model/CoordinatorNode';
import { CopySnapshotRequest } from './model/CopySnapshotRequest';
import { CopySnapshotResponse } from './model/CopySnapshotResponse';
import { CreateAlarmSubRequest } from './model/CreateAlarmSubRequest';
import { CreateAlarmSubResponse } from './model/CreateAlarmSubResponse';
import { CreateClusterDns } from './model/CreateClusterDns';
import { CreateClusterDnsRequest } from './model/CreateClusterDnsRequest';
import { CreateClusterDnsResponse } from './model/CreateClusterDnsResponse';
import { CreateClusterInfo } from './model/CreateClusterInfo';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterRequestBody } from './model/CreateClusterRequestBody';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateClusterV2Request } from './model/CreateClusterV2Request';
import { CreateClusterV2Response } from './model/CreateClusterV2Response';
import { CreateClusterWorkloadRequest } from './model/CreateClusterWorkloadRequest';
import { CreateClusterWorkloadResponse } from './model/CreateClusterWorkloadResponse';
import { CreateDataSourceRequest } from './model/CreateDataSourceRequest';
import { CreateDataSourceResponse } from './model/CreateDataSourceResponse';
import { CreateDatabaseUserRequest } from './model/CreateDatabaseUserRequest';
import { CreateDatabaseUserResponse } from './model/CreateDatabaseUserResponse';
import { CreateDisasterRecovery } from './model/CreateDisasterRecovery';
import { CreateDisasterRecoveryReq } from './model/CreateDisasterRecoveryReq';
import { CreateDisasterRecoveryRequest } from './model/CreateDisasterRecoveryRequest';
import { CreateDisasterRecoveryResponse } from './model/CreateDisasterRecoveryResponse';
import { CreateDrClusterDto } from './model/CreateDrClusterDto';
import { CreateEventSubRequest } from './model/CreateEventSubRequest';
import { CreateEventSubResponse } from './model/CreateEventSubResponse';
import { CreateLogicalClusterInfo } from './model/CreateLogicalClusterInfo';
import { CreateLogicalClusterPlanRequest } from './model/CreateLogicalClusterPlanRequest';
import { CreateLogicalClusterPlanResponse } from './model/CreateLogicalClusterPlanResponse';
import { CreateLogicalClusterRequest } from './model/CreateLogicalClusterRequest';
import { CreateLogicalClusterRequestBody } from './model/CreateLogicalClusterRequestBody';
import { CreateLogicalClusterResponse } from './model/CreateLogicalClusterResponse';
import { CreateSnapshotPolicyRequest } from './model/CreateSnapshotPolicyRequest';
import { CreateSnapshotPolicyRequestBody } from './model/CreateSnapshotPolicyRequestBody';
import { CreateSnapshotPolicyResponse } from './model/CreateSnapshotPolicyResponse';
import { CreateSnapshotRequest } from './model/CreateSnapshotRequest';
import { CreateSnapshotRequestBody } from './model/CreateSnapshotRequestBody';
import { CreateSnapshotResponse } from './model/CreateSnapshotResponse';
import { CreateWorkloadPlanRequest } from './model/CreateWorkloadPlanRequest';
import { CreateWorkloadPlanResponse } from './model/CreateWorkloadPlanResponse';
import { DatabaseObjectInfo } from './model/DatabaseObjectInfo';
import { DatabaseOmUserActionReq } from './model/DatabaseOmUserActionReq';
import { DatabaseOmUserInfo } from './model/DatabaseOmUserInfo';
import { DatabasePermissionReq } from './model/DatabasePermissionReq';
import { DatabaseUser } from './model/DatabaseUser';
import { DatabaseUserInfoReq } from './model/DatabaseUserInfoReq';
import { Datastore } from './model/Datastore';
import { DeleteAlarmSubRequest } from './model/DeleteAlarmSubRequest';
import { DeleteAlarmSubResponse } from './model/DeleteAlarmSubResponse';
import { DeleteClusterDnsRequest } from './model/DeleteClusterDnsRequest';
import { DeleteClusterDnsResponse } from './model/DeleteClusterDnsResponse';
import { DeleteClusterNodesRequest } from './model/DeleteClusterNodesRequest';
import { DeleteClusterNodesRequestBody } from './model/DeleteClusterNodesRequestBody';
import { DeleteClusterNodesResponse } from './model/DeleteClusterNodesResponse';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterRequestBody } from './model/DeleteClusterRequestBody';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteDataSourceRequest } from './model/DeleteDataSourceRequest';
import { DeleteDataSourceResponse } from './model/DeleteDataSourceResponse';
import { DeleteDatabaseUserRequest } from './model/DeleteDatabaseUserRequest';
import { DeleteDatabaseUserResponse } from './model/DeleteDatabaseUserResponse';
import { DeleteDisasterRecoveryRequest } from './model/DeleteDisasterRecoveryRequest';
import { DeleteDisasterRecoveryResponse } from './model/DeleteDisasterRecoveryResponse';
import { DeleteDwsClusterRequest } from './model/DeleteDwsClusterRequest';
import { DeleteDwsClusterResponse } from './model/DeleteDwsClusterResponse';
import { DeleteEventSubRequest } from './model/DeleteEventSubRequest';
import { DeleteEventSubResponse } from './model/DeleteEventSubResponse';
import { DeleteLogicalClusterPlanRequest } from './model/DeleteLogicalClusterPlanRequest';
import { DeleteLogicalClusterPlanResponse } from './model/DeleteLogicalClusterPlanResponse';
import { DeleteLogicalClusterRequest } from './model/DeleteLogicalClusterRequest';
import { DeleteLogicalClusterResponse } from './model/DeleteLogicalClusterResponse';
import { DeleteQueueUserListRequest } from './model/DeleteQueueUserListRequest';
import { DeleteQueueUserListResponse } from './model/DeleteQueueUserListResponse';
import { DeleteSnapshotPolicyRequest } from './model/DeleteSnapshotPolicyRequest';
import { DeleteSnapshotPolicyResponse } from './model/DeleteSnapshotPolicyResponse';
import { DeleteSnapshotRequest } from './model/DeleteSnapshotRequest';
import { DeleteSnapshotResponse } from './model/DeleteSnapshotResponse';
import { DeleteWorkloadPlanRequest } from './model/DeleteWorkloadPlanRequest';
import { DeleteWorkloadPlanResponse } from './model/DeleteWorkloadPlanResponse';
import { DeleteWorkloadPlanStageRequest } from './model/DeleteWorkloadPlanStageRequest';
import { DeleteWorkloadPlanStageResponse } from './model/DeleteWorkloadPlanStageResponse';
import { DeleteWorkloadQueueRequest } from './model/DeleteWorkloadQueueRequest';
import { DeleteWorkloadQueueResponse } from './model/DeleteWorkloadQueueResponse';
import { DeleteWorkloadRuleRequest } from './model/DeleteWorkloadRuleRequest';
import { DeleteWorkloadRuleResponse } from './model/DeleteWorkloadRuleResponse';
import { Detail } from './model/Detail';
import { DisableLogicalClusterPlanRequest } from './model/DisableLogicalClusterPlanRequest';
import { DisableLogicalClusterPlanResponse } from './model/DisableLogicalClusterPlanResponse';
import { DisableLtsLogsRequest } from './model/DisableLtsLogsRequest';
import { DisableLtsLogsResponse } from './model/DisableLtsLogsResponse';
import { DisassociateEipRequest } from './model/DisassociateEipRequest';
import { DisassociateEipResponse } from './model/DisassociateEipResponse';
import { DisassociateElbRequest } from './model/DisassociateElbRequest';
import { DisassociateElbResponse } from './model/DisassociateElbResponse';
import { DisasterRecovery } from './model/DisasterRecovery';
import { DisasterRecoveryCluster } from './model/DisasterRecoveryCluster';
import { DisasterRecoveryClusterVo } from './model/DisasterRecoveryClusterVo';
import { DisasterRecoveryId } from './model/DisasterRecoveryId';
import { DisasterRecoveryQueryResp } from './model/DisasterRecoveryQueryResp';
import { DiskInfoResponse } from './model/DiskInfoResponse';
import { DiskResp } from './model/DiskResp';
import { DssPool } from './model/DssPool';
import { ElbResp } from './model/ElbResp';
import { EmptyResponse } from './model/EmptyResponse';
import { EnableLogicalClusterPlanRequest } from './model/EnableLogicalClusterPlanRequest';
import { EnableLogicalClusterPlanResponse } from './model/EnableLogicalClusterPlanResponse';
import { EnableLogicalClusterRequest } from './model/EnableLogicalClusterRequest';
import { EnableLogicalClusterRequestBody } from './model/EnableLogicalClusterRequestBody';
import { EnableLogicalClusterResponse } from './model/EnableLogicalClusterResponse';
import { EnableLtsLogsRequest } from './model/EnableLtsLogsRequest';
import { EnableLtsLogsResponse } from './model/EnableLtsLogsResponse';
import { EncryptCluster } from './model/EncryptCluster';
import { EncryptClusterReq } from './model/EncryptClusterReq';
import { EncryptClusterRequest } from './model/EncryptClusterRequest';
import { EncryptClusterResponse } from './model/EncryptClusterResponse';
import { Endpoints } from './model/Endpoints';
import { EventResponse } from './model/EventResponse';
import { EventSpecResponse } from './model/EventSpecResponse';
import { EventSubRequest } from './model/EventSubRequest';
import { EventSubUpdateRequest } from './model/EventSubUpdateRequest';
import { EventSubscriptionResponse } from './model/EventSubscriptionResponse';
import { ExceptRule } from './model/ExceptRule';
import { ExceptRuleBo } from './model/ExceptRuleBo';
import { ExecuteClusterUpgradeActionRequest } from './model/ExecuteClusterUpgradeActionRequest';
import { ExecuteClusterUpgradeActionRequestBody } from './model/ExecuteClusterUpgradeActionRequestBody';
import { ExecuteClusterUpgradeActionResponse } from './model/ExecuteClusterUpgradeActionResponse';
import { ExecuteDatabaseOmUserActionRequest } from './model/ExecuteDatabaseOmUserActionRequest';
import { ExecuteDatabaseOmUserActionResponse } from './model/ExecuteDatabaseOmUserActionResponse';
import { ExecuteFlavorChangeRequest } from './model/ExecuteFlavorChangeRequest';
import { ExecuteFlavorChangeResponse } from './model/ExecuteFlavorChangeResponse';
import { ExecuteRedistributionClusterRequest } from './model/ExecuteRedistributionClusterRequest';
import { ExecuteRedistributionClusterResponse } from './model/ExecuteRedistributionClusterResponse';
import { ExpandInstanceStorage } from './model/ExpandInstanceStorage';
import { ExpandInstanceStorageRequest } from './model/ExpandInstanceStorageRequest';
import { ExpandInstanceStorageResponse } from './model/ExpandInstanceStorageResponse';
import { ExpandPreparationRequestBody } from './model/ExpandPreparationRequestBody';
import { ExportDatabaseUsersRequest } from './model/ExportDatabaseUsersRequest';
import { ExportDatabaseUsersResponse } from './model/ExportDatabaseUsersResponse';
import { ExportUserAuthorityRequest } from './model/ExportUserAuthorityRequest';
import { ExportUserAuthorityResponse } from './model/ExportUserAuthorityResponse';
import { ExtDataSource } from './model/ExtDataSource';
import { ExtDataSourceReq } from './model/ExtDataSourceReq';
import { ExtFineGrainedSnapshotDetail } from './model/ExtFineGrainedSnapshotDetail';
import { FailedReason } from './model/FailedReason';
import { FineGrainedSnapshotDetail } from './model/FineGrainedSnapshotDetail';
import { FlavorAttributeInfo } from './model/FlavorAttributeInfo';
import { FlavorInfoResponse } from './model/FlavorInfoResponse';
import { FlavorVolumeNodeInfo } from './model/FlavorVolumeNodeInfo';
import { Grant } from './model/Grant';
import { GrantAuthority } from './model/GrantAuthority';
import { GrowCheckResult } from './model/GrowCheckResult';
import { HostOverviewResponse } from './model/HostOverviewResponse';
import { IdentitySourceSyncRecordVo } from './model/IdentitySourceSyncRecordVo';
import { IndicatorInfo } from './model/IndicatorInfo';
import { LinkCopyReq } from './model/LinkCopyReq';
import { LinkResp } from './model/LinkResp';
import { ListAlarmConfigsRequest } from './model/ListAlarmConfigsRequest';
import { ListAlarmConfigsResponse } from './model/ListAlarmConfigsResponse';
import { ListAlarmDetailRequest } from './model/ListAlarmDetailRequest';
import { ListAlarmDetailResponse } from './model/ListAlarmDetailResponse';
import { ListAlarmStatisticRequest } from './model/ListAlarmStatisticRequest';
import { ListAlarmStatisticResponse } from './model/ListAlarmStatisticResponse';
import { ListAlarmSubsRequest } from './model/ListAlarmSubsRequest';
import { ListAlarmSubsResponse } from './model/ListAlarmSubsResponse';
import { ListAuditLogRequest } from './model/ListAuditLogRequest';
import { ListAuditLogResponse } from './model/ListAuditLogResponse';
import { ListAvailabilityZonesRequest } from './model/ListAvailabilityZonesRequest';
import { ListAvailabilityZonesResponse } from './model/ListAvailabilityZonesResponse';
import { ListAvailableDisasterClustersRequest } from './model/ListAvailableDisasterClustersRequest';
import { ListAvailableDisasterClustersResponse } from './model/ListAvailableDisasterClustersResponse';
import { ListClusterActionsRequest } from './model/ListClusterActionsRequest';
import { ListClusterActionsResponse } from './model/ListClusterActionsResponse';
import { ListClusterCnRequest } from './model/ListClusterCnRequest';
import { ListClusterCnResponse } from './model/ListClusterCnResponse';
import { ListClusterConfigurationsParameterRequest } from './model/ListClusterConfigurationsParameterRequest';
import { ListClusterConfigurationsParameterResponse } from './model/ListClusterConfigurationsParameterResponse';
import { ListClusterConfigurationsRequest } from './model/ListClusterConfigurationsRequest';
import { ListClusterConfigurationsResponse } from './model/ListClusterConfigurationsResponse';
import { ListClusterDetailsRequest } from './model/ListClusterDetailsRequest';
import { ListClusterDetailsResponse } from './model/ListClusterDetailsResponse';
import { ListClusterEndpointsRequest } from './model/ListClusterEndpointsRequest';
import { ListClusterEndpointsResponse } from './model/ListClusterEndpointsResponse';
import { ListClusterNodesRequest } from './model/ListClusterNodesRequest';
import { ListClusterNodesResponse } from './model/ListClusterNodesResponse';
import { ListClusterScaleInNumbersRequest } from './model/ListClusterScaleInNumbersRequest';
import { ListClusterScaleInNumbersResponse } from './model/ListClusterScaleInNumbersResponse';
import { ListClusterSnapshotsRequest } from './model/ListClusterSnapshotsRequest';
import { ListClusterSnapshotsResponse } from './model/ListClusterSnapshotsResponse';
import { ListClusterTagsRequest } from './model/ListClusterTagsRequest';
import { ListClusterTagsResponse } from './model/ListClusterTagsResponse';
import { ListClusterWorkloadRequest } from './model/ListClusterWorkloadRequest';
import { ListClusterWorkloadResponse } from './model/ListClusterWorkloadResponse';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { ListConfigurationsAuditRecordsRequest } from './model/ListConfigurationsAuditRecordsRequest';
import { ListConfigurationsAuditRecordsResponse } from './model/ListConfigurationsAuditRecordsResponse';
import { ListDataSourceRequest } from './model/ListDataSourceRequest';
import { ListDataSourceResponse } from './model/ListDataSourceResponse';
import { ListDatabaseObjectsRequest } from './model/ListDatabaseObjectsRequest';
import { ListDatabaseObjectsResponse } from './model/ListDatabaseObjectsResponse';
import { ListDatabaseUserAuthoritiesRequest } from './model/ListDatabaseUserAuthoritiesRequest';
import { ListDatabaseUserAuthoritiesResponse } from './model/ListDatabaseUserAuthoritiesResponse';
import { ListDatabaseUsersRequest } from './model/ListDatabaseUsersRequest';
import { ListDatabaseUsersResponse } from './model/ListDatabaseUsersResponse';
import { ListDisasterRecoverRequest } from './model/ListDisasterRecoverRequest';
import { ListDisasterRecoverResponse } from './model/ListDisasterRecoverResponse';
import { ListDssPoolsRequest } from './model/ListDssPoolsRequest';
import { ListDssPoolsResponse } from './model/ListDssPoolsResponse';
import { ListElbsRequest } from './model/ListElbsRequest';
import { ListElbsResponse } from './model/ListElbsResponse';
import { ListEventSpecsRequest } from './model/ListEventSpecsRequest';
import { ListEventSpecsResponse } from './model/ListEventSpecsResponse';
import { ListEventSubsRequest } from './model/ListEventSubsRequest';
import { ListEventSubsResponse } from './model/ListEventSubsResponse';
import { ListEventsRequest } from './model/ListEventsRequest';
import { ListEventsResponse } from './model/ListEventsResponse';
import { ListHostDiskRequest } from './model/ListHostDiskRequest';
import { ListHostDiskResponse } from './model/ListHostDiskResponse';
import { ListHostNetRequest } from './model/ListHostNetRequest';
import { ListHostNetResponse } from './model/ListHostNetResponse';
import { ListHostOverviewRequest } from './model/ListHostOverviewRequest';
import { ListHostOverviewResponse } from './model/ListHostOverviewResponse';
import { ListJobDetailsRequest } from './model/ListJobDetailsRequest';
import { ListJobDetailsResponse } from './model/ListJobDetailsResponse';
import { ListLogicalClusterPlansRequest } from './model/ListLogicalClusterPlansRequest';
import { ListLogicalClusterPlansResponse } from './model/ListLogicalClusterPlansResponse';
import { ListLogicalClusterRingsRequest } from './model/ListLogicalClusterRingsRequest';
import { ListLogicalClusterRingsResponse } from './model/ListLogicalClusterRingsResponse';
import { ListLogicalClusterTasksRequest } from './model/ListLogicalClusterTasksRequest';
import { ListLogicalClusterTasksResponse } from './model/ListLogicalClusterTasksResponse';
import { ListLogicalClusterVolumesRequest } from './model/ListLogicalClusterVolumesRequest';
import { ListLogicalClusterVolumesResponse } from './model/ListLogicalClusterVolumesResponse';
import { ListLogicalClustersRequest } from './model/ListLogicalClustersRequest';
import { ListLogicalClustersResponse } from './model/ListLogicalClustersResponse';
import { ListLtsLogsRequest } from './model/ListLtsLogsRequest';
import { ListLtsLogsResponse } from './model/ListLtsLogsResponse';
import { ListMetricsDataRequest } from './model/ListMetricsDataRequest';
import { ListMetricsDataResponse } from './model/ListMetricsDataResponse';
import { ListMetricsRequest } from './model/ListMetricsRequest';
import { ListMetricsResponse } from './model/ListMetricsResponse';
import { ListMonitorIndicatorDataRequest } from './model/ListMonitorIndicatorDataRequest';
import { ListMonitorIndicatorDataResponse } from './model/ListMonitorIndicatorDataResponse';
import { ListMonitorIndicatorsRequest } from './model/ListMonitorIndicatorsRequest';
import { ListMonitorIndicatorsResponse } from './model/ListMonitorIndicatorsResponse';
import { ListNodeTypesRequest } from './model/ListNodeTypesRequest';
import { ListNodeTypesResponse } from './model/ListNodeTypesResponse';
import { ListPlanExecLogsRequest } from './model/ListPlanExecLogsRequest';
import { ListPlanExecLogsResponse } from './model/ListPlanExecLogsResponse';
import { ListQueriesCondition } from './model/ListQueriesCondition';
import { ListQueriesData } from './model/ListQueriesData';
import { ListQueriesDto } from './model/ListQueriesDto';
import { ListQueriesRequest } from './model/ListQueriesRequest';
import { ListQueriesRequestBody } from './model/ListQueriesRequestBody';
import { ListQueriesResponse } from './model/ListQueriesResponse';
import { ListQueriesStatus } from './model/ListQueriesStatus';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListRedistributionSchemaRequest } from './model/ListRedistributionSchemaRequest';
import { ListRedistributionSchemaResponse } from './model/ListRedistributionSchemaResponse';
import { ListSchemasRequest } from './model/ListSchemasRequest';
import { ListSchemasResponse } from './model/ListSchemasResponse';
import { ListSnapshotDetailsRequest } from './model/ListSnapshotDetailsRequest';
import { ListSnapshotDetailsResponse } from './model/ListSnapshotDetailsResponse';
import { ListSnapshotFlavorInfoRequest } from './model/ListSnapshotFlavorInfoRequest';
import { ListSnapshotFlavorInfoResponse } from './model/ListSnapshotFlavorInfoResponse';
import { ListSnapshotPolicyRequest } from './model/ListSnapshotPolicyRequest';
import { ListSnapshotPolicyResponse } from './model/ListSnapshotPolicyResponse';
import { ListSnapshotStatisticsRequest } from './model/ListSnapshotStatisticsRequest';
import { ListSnapshotStatisticsResponse } from './model/ListSnapshotStatisticsResponse';
import { ListSnapshotsRequest } from './model/ListSnapshotsRequest';
import { ListSnapshotsResponse } from './model/ListSnapshotsResponse';
import { ListStatisticsRequest } from './model/ListStatisticsRequest';
import { ListStatisticsResponse } from './model/ListStatisticsResponse';
import { ListSyncRecordsRequest } from './model/ListSyncRecordsRequest';
import { ListSyncRecordsResponse } from './model/ListSyncRecordsResponse';
import { ListTablesStatisticDto } from './model/ListTablesStatisticDto';
import { ListTablesStatisticRequest } from './model/ListTablesStatisticRequest';
import { ListTablesStatisticResponse } from './model/ListTablesStatisticResponse';
import { ListTagsForResourceRequest } from './model/ListTagsForResourceRequest';
import { ListTagsForResourceResponse } from './model/ListTagsForResourceResponse';
import { ListTagsRequest } from './model/ListTagsRequest';
import { ListTagsResponse } from './model/ListTagsResponse';
import { ListTargetFlavorsRequest } from './model/ListTargetFlavorsRequest';
import { ListTargetFlavorsResponse } from './model/ListTargetFlavorsResponse';
import { ListTopoRingsRequest } from './model/ListTopoRingsRequest';
import { ListTopoRingsResponse } from './model/ListTopoRingsResponse';
import { ListUpdatableVersionRequest } from './model/ListUpdatableVersionRequest';
import { ListUpdatableVersionResponse } from './model/ListUpdatableVersionResponse';
import { ListUpdateRecordRequest } from './model/ListUpdateRecordRequest';
import { ListUpdateRecordResponse } from './model/ListUpdateRecordResponse';
import { ListWorkloadPlansRequest } from './model/ListWorkloadPlansRequest';
import { ListWorkloadPlansResponse } from './model/ListWorkloadPlansResponse';
import { ListWorkloadQueueRequest } from './model/ListWorkloadQueueRequest';
import { ListWorkloadQueueResponse } from './model/ListWorkloadQueueResponse';
import { ListWorkloadQueueUsersRequest } from './model/ListWorkloadQueueUsersRequest';
import { ListWorkloadQueueUsersResponse } from './model/ListWorkloadQueueUsersResponse';
import { ListWorkloadRulesRequest } from './model/ListWorkloadRulesRequest';
import { ListWorkloadRulesResponse } from './model/ListWorkloadRulesResponse';
import { LogicalClusterInfo } from './model/LogicalClusterInfo';
import { LogicalClusterPlanActions } from './model/LogicalClusterPlanActions';
import { LogicalClusterPlanActionsParam } from './model/LogicalClusterPlanActionsParam';
import { LogicalClusterPlanBo } from './model/LogicalClusterPlanBo';
import { LogicalClusterPlanVo } from './model/LogicalClusterPlanVo';
import { LogicalClusterRingInfo } from './model/LogicalClusterRingInfo';
import { LogicalClusterTaskInfo } from './model/LogicalClusterTaskInfo';
import { LogicalClusterVolume } from './model/LogicalClusterVolume';
import { LtslogInfo } from './model/LtslogInfo';
import { MaintainWindow } from './model/MaintainWindow';
import { MaintenanceWindow } from './model/MaintenanceWindow';
import { ModifyClusterDns } from './model/ModifyClusterDns';
import { ModifyClusterNameRequest } from './model/ModifyClusterNameRequest';
import { ModifyClusterNameResponse } from './model/ModifyClusterNameResponse';
import { ModifyClusterTimezoneRequest } from './model/ModifyClusterTimezoneRequest';
import { ModifyClusterTimezoneResponse } from './model/ModifyClusterTimezoneResponse';
import { NetResp } from './model/NetResp';
import { NodeTypeAvailableZones } from './model/NodeTypeAvailableZones';
import { NodeTypeDatastores } from './model/NodeTypeDatastores';
import { NodeTypeDatastoresAttachments } from './model/NodeTypeDatastoresAttachments';
import { NodeTypeElasticVolumeSpecs } from './model/NodeTypeElasticVolumeSpecs';
import { NodeTypes } from './model/NodeTypes';
import { Nodes } from './model/Nodes';
import { NoteInfo } from './model/NoteInfo';
import { ObjectAuthority } from './model/ObjectAuthority';
import { OccupyResource } from './model/OccupyResource';
import { OpenPublicIp } from './model/OpenPublicIp';
import { ParameterGroup } from './model/ParameterGroup';
import { PauseDisasterRecoveryRequest } from './model/PauseDisasterRecoveryRequest';
import { PauseDisasterRecoveryResponse } from './model/PauseDisasterRecoveryResponse';
import { PlanLog } from './model/PlanLog';
import { PlanStage } from './model/PlanStage';
import { PrivateEndpointResponse } from './model/PrivateEndpointResponse';
import { ProductExtendResp } from './model/ProductExtendResp';
import { ProductUnitResp } from './model/ProductUnitResp';
import { ProductVersionResp } from './model/ProductVersionResp';
import { ProductVolumeUsedResp } from './model/ProductVolumeUsedResp';
import { ProjectTag } from './model/ProjectTag';
import { PublicEndpointResponse } from './model/PublicEndpointResponse';
import { PublicEndpoints } from './model/PublicEndpoints';
import { PublicIp } from './model/PublicIp';
import { PublicIpInfoResponse } from './model/PublicIpInfoResponse';
import { QueueResourceItem } from './model/QueueResourceItem';
import { QuotasQuotas } from './model/QuotasQuotas';
import { QuotasResource } from './model/QuotasResource';
import { RdsRedisInfo } from './model/RdsRedisInfo';
import { ReconfigureExtDataSourceAction } from './model/ReconfigureExtDataSourceAction';
import { ReconfigureExtDataSourceActionReq } from './model/ReconfigureExtDataSourceActionReq';
import { RedisConf } from './model/RedisConf';
import { RedisConfReq } from './model/RedisConfReq';
import { RedisPriorityConf } from './model/RedisPriorityConf';
import { RedisPriorityTable } from './model/RedisPriorityTable';
import { RedisProgress } from './model/RedisProgress';
import { RedisSchema } from './model/RedisSchema';
import { RedisTable } from './model/RedisTable';
import { RedisTableDetail } from './model/RedisTableDetail';
import { RedistributionConf } from './model/RedistributionConf';
import { RedistributionReq } from './model/RedistributionReq';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordRequestBody } from './model/ResetPasswordRequestBody';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { ResizeClusterRequest } from './model/ResizeClusterRequest';
import { ResizeClusterRequestBody } from './model/ResizeClusterRequestBody';
import { ResizeClusterResponse } from './model/ResizeClusterResponse';
import { ResizeClusterWithExistedNodesRequest } from './model/ResizeClusterWithExistedNodesRequest';
import { ResizeClusterWithExistedNodesRequestBody } from './model/ResizeClusterWithExistedNodesRequestBody';
import { ResizeClusterWithExistedNodesResponse } from './model/ResizeClusterWithExistedNodesResponse';
import { ResizeInfo } from './model/ResizeInfo';
import { ResizePreparationRequest } from './model/ResizePreparationRequest';
import { ResizePreparationResponse } from './model/ResizePreparationResponse';
import { ResourceTag } from './model/ResourceTag';
import { RestartClusterRequest } from './model/RestartClusterRequest';
import { RestartClusterRequestBody } from './model/RestartClusterRequestBody';
import { RestartClusterResponse } from './model/RestartClusterResponse';
import { RestartLogicalClusterRequest } from './model/RestartLogicalClusterRequest';
import { RestartLogicalClusterResponse } from './model/RestartLogicalClusterResponse';
import { Restore } from './model/Restore';
import { RestoreClusterRequest } from './model/RestoreClusterRequest';
import { RestoreClusterRequestBody } from './model/RestoreClusterRequestBody';
import { RestoreClusterResponse } from './model/RestoreClusterResponse';
import { RestoreDisasterRequest } from './model/RestoreDisasterRequest';
import { RestoreDisasterResponse } from './model/RestoreDisasterResponse';
import { RestorePoint } from './model/RestorePoint';
import { RestoreRedistributionRequest } from './model/RestoreRedistributionRequest';
import { RestoreRedistributionResponse } from './model/RestoreRedistributionResponse';
import { RestoreTableRequest } from './model/RestoreTableRequest';
import { RestoreTableRequestBody } from './model/RestoreTableRequestBody';
import { RestoreTableResponse } from './model/RestoreTableResponse';
import { Revoke } from './model/Revoke';
import { RingHost } from './model/RingHost';
import { RoleAuthority } from './model/RoleAuthority';
import { RotateKeyRequest } from './model/RotateKeyRequest';
import { RotateKeyRequestBody } from './model/RotateKeyRequestBody';
import { RotateKeyResponse } from './model/RotateKeyResponse';
import { SaveClusterDescriptionInfoRequest } from './model/SaveClusterDescriptionInfoRequest';
import { SaveClusterDescriptionInfoResponse } from './model/SaveClusterDescriptionInfoResponse';
import { ScaleOut } from './model/ScaleOut';
import { ScheduleConf } from './model/ScheduleConf';
import { SchemaInfo } from './model/SchemaInfo';
import { SetRedistributionPriorityRequest } from './model/SetRedistributionPriorityRequest';
import { SetRedistributionPriorityResponse } from './model/SetRedistributionPriorityResponse';
import { ShowClusterEncryptInfoRequest } from './model/ShowClusterEncryptInfoRequest';
import { ShowClusterEncryptInfoResponse } from './model/ShowClusterEncryptInfoResponse';
import { ShowClusterFlavorRequest } from './model/ShowClusterFlavorRequest';
import { ShowClusterFlavorResponse } from './model/ShowClusterFlavorResponse';
import { ShowClusterRedistributionRequest } from './model/ShowClusterRedistributionRequest';
import { ShowClusterRedistributionResponse } from './model/ShowClusterRedistributionResponse';
import { ShowClusterStorageExpandRangeRequest } from './model/ShowClusterStorageExpandRangeRequest';
import { ShowClusterStorageExpandRangeResponse } from './model/ShowClusterStorageExpandRangeResponse';
import { ShowClusterVolumeRequest } from './model/ShowClusterVolumeRequest';
import { ShowClusterVolumeResponse } from './model/ShowClusterVolumeResponse';
import { ShowClustersRequest } from './model/ShowClustersRequest';
import { ShowClustersResponse } from './model/ShowClustersResponse';
import { ShowDatabaseAuthorityRequest } from './model/ShowDatabaseAuthorityRequest';
import { ShowDatabaseAuthorityResponse } from './model/ShowDatabaseAuthorityResponse';
import { ShowDatabaseOmUserStatusRequest } from './model/ShowDatabaseOmUserStatusRequest';
import { ShowDatabaseOmUserStatusResponse } from './model/ShowDatabaseOmUserStatusResponse';
import { ShowDatabaseUserRequest } from './model/ShowDatabaseUserRequest';
import { ShowDatabaseUserResponse } from './model/ShowDatabaseUserResponse';
import { ShowDisasterDetailRequest } from './model/ShowDisasterDetailRequest';
import { ShowDisasterDetailResponse } from './model/ShowDisasterDetailResponse';
import { ShowDisasterProgressRequest } from './model/ShowDisasterProgressRequest';
import { ShowDisasterProgressResponse } from './model/ShowDisasterProgressResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowQueryDetailRequest } from './model/ShowQueryDetailRequest';
import { ShowQueryDetailResponse } from './model/ShowQueryDetailResponse';
import { ShowResizePreparationRequest } from './model/ShowResizePreparationRequest';
import { ShowResizePreparationResponse } from './model/ShowResizePreparationResponse';
import { ShowResourceStatisticsRequest } from './model/ShowResourceStatisticsRequest';
import { ShowResourceStatisticsResponse } from './model/ShowResourceStatisticsResponse';
import { ShowWorkloadPlanRequest } from './model/ShowWorkloadPlanRequest';
import { ShowWorkloadPlanResponse } from './model/ShowWorkloadPlanResponse';
import { ShowWorkloadPlanStageRequest } from './model/ShowWorkloadPlanStageRequest';
import { ShowWorkloadPlanStageResponse } from './model/ShowWorkloadPlanStageResponse';
import { ShowWorkloadQueueRequest } from './model/ShowWorkloadQueueRequest';
import { ShowWorkloadQueueResponse } from './model/ShowWorkloadQueueResponse';
import { ShrinkClusterRequest } from './model/ShrinkClusterRequest';
import { ShrinkClusterResponse } from './model/ShrinkClusterResponse';
import { ShrinkLogicalClusterRequest } from './model/ShrinkLogicalClusterRequest';
import { ShrinkLogicalClusterRequestBody } from './model/ShrinkLogicalClusterRequestBody';
import { ShrinkLogicalClusterResponse } from './model/ShrinkLogicalClusterResponse';
import { SimpleFieldDto } from './model/SimpleFieldDto';
import { Snapshot } from './model/Snapshot';
import { SnapshotDetail } from './model/SnapshotDetail';
import { SnapshotResp } from './model/SnapshotResp';
import { Snapshots } from './model/Snapshots';
import { SnapshotsStatistic } from './model/SnapshotsStatistic';
import { SpecResizeRequest } from './model/SpecResizeRequest';
import { StartClusterRequest } from './model/StartClusterRequest';
import { StartClusterResponse } from './model/StartClusterResponse';
import { StartDisasterRecoveryRequest } from './model/StartDisasterRecoveryRequest';
import { StartDisasterRecoveryResponse } from './model/StartDisasterRecoveryResponse';
import { StartWorkloadPlanRequest } from './model/StartWorkloadPlanRequest';
import { StartWorkloadPlanResponse } from './model/StartWorkloadPlanResponse';
import { Statistic } from './model/Statistic';
import { StatusStatistics } from './model/StatusStatistics';
import { StopClusterRequest } from './model/StopClusterRequest';
import { StopClusterResponse } from './model/StopClusterResponse';
import { StopRedistributionRequest } from './model/StopRedistributionRequest';
import { StopRedistributionResponse } from './model/StopRedistributionResponse';
import { StopWorkloadPlanRequest } from './model/StopWorkloadPlanRequest';
import { StopWorkloadPlanResponse } from './model/StopWorkloadPlanResponse';
import { SwitchFailoverDisasterRequest } from './model/SwitchFailoverDisasterRequest';
import { SwitchFailoverDisasterResponse } from './model/SwitchFailoverDisasterResponse';
import { SwitchOverClusterRequest } from './model/SwitchOverClusterRequest';
import { SwitchOverClusterResponse } from './model/SwitchOverClusterResponse';
import { SwitchPlanStageRequest } from './model/SwitchPlanStageRequest';
import { SwitchPlanStageResponse } from './model/SwitchPlanStageResponse';
import { SwitchoverDisasterRecoveryRequest } from './model/SwitchoverDisasterRecoveryRequest';
import { SwitchoverDisasterRecoveryResponse } from './model/SwitchoverDisasterRecoveryResponse';
import { SyncIamUsersRequest } from './model/SyncIamUsersRequest';
import { SyncIamUsersResponse } from './model/SyncIamUsersResponse';
import { TableDetail } from './model/TableDetail';
import { Tag } from './model/Tag';
import { Tags } from './model/Tags';
import { TopoInstanceInfo } from './model/TopoInstanceInfo';
import { TopoRingInfo } from './model/TopoRingInfo';
import { TrendQueryData } from './model/TrendQueryData';
import { TrendQueryDataResp } from './model/TrendQueryDataResp';
import { UpdateAlarmSubRequest } from './model/UpdateAlarmSubRequest';
import { UpdateAlarmSubResponse } from './model/UpdateAlarmSubResponse';
import { UpdateClusterDnsRequest } from './model/UpdateClusterDnsRequest';
import { UpdateClusterDnsResponse } from './model/UpdateClusterDnsResponse';
import { UpdateConfigurationRequest } from './model/UpdateConfigurationRequest';
import { UpdateConfigurationResponse } from './model/UpdateConfigurationResponse';
import { UpdateDataSourceRequest } from './model/UpdateDataSourceRequest';
import { UpdateDataSourceResponse } from './model/UpdateDataSourceResponse';
import { UpdateDatabaseAuthorityRequest } from './model/UpdateDatabaseAuthorityRequest';
import { UpdateDatabaseAuthorityResponse } from './model/UpdateDatabaseAuthorityResponse';
import { UpdateDatabaseUserInfoRequest } from './model/UpdateDatabaseUserInfoRequest';
import { UpdateDatabaseUserInfoResponse } from './model/UpdateDatabaseUserInfoResponse';
import { UpdateDisasterInfoRequest } from './model/UpdateDisasterInfoRequest';
import { UpdateDisasterInfoResponse } from './model/UpdateDisasterInfoResponse';
import { UpdateDisasterRecoveryReq } from './model/UpdateDisasterRecoveryReq';
import { UpdateDisasterRecoveryRequest } from './model/UpdateDisasterRecoveryRequest';
import { UpdateEventSubRequest } from './model/UpdateEventSubRequest';
import { UpdateEventSubResponse } from './model/UpdateEventSubResponse';
import { UpdateItemResp } from './model/UpdateItemResp';
import { UpdateLogicalClusterPlanActions } from './model/UpdateLogicalClusterPlanActions';
import { UpdateLogicalClusterPlanBo } from './model/UpdateLogicalClusterPlanBo';
import { UpdateLogicalClusterPlanRequest } from './model/UpdateLogicalClusterPlanRequest';
import { UpdateLogicalClusterPlanResponse } from './model/UpdateLogicalClusterPlanResponse';
import { UpdateLogicalClusterRequest } from './model/UpdateLogicalClusterRequest';
import { UpdateLogicalClusterRequestBody } from './model/UpdateLogicalClusterRequestBody';
import { UpdateLogicalClusterResponse } from './model/UpdateLogicalClusterResponse';
import { UpdateMaintenanceWindowRequest } from './model/UpdateMaintenanceWindowRequest';
import { UpdateMaintenanceWindowResponse } from './model/UpdateMaintenanceWindowResponse';
import { UpdateQueueResourcesRequest } from './model/UpdateQueueResourcesRequest';
import { UpdateQueueResourcesResponse } from './model/UpdateQueueResourcesResponse';
import { UpdateRedistributionConfigurationsRequest } from './model/UpdateRedistributionConfigurationsRequest';
import { UpdateRedistributionConfigurationsResponse } from './model/UpdateRedistributionConfigurationsResponse';
import { UpdateSchemasRequest } from './model/UpdateSchemasRequest';
import { UpdateSchemasResponse } from './model/UpdateSchemasResponse';
import { UpdateWorkloadPlanStageRequest } from './model/UpdateWorkloadPlanStageRequest';
import { UpdateWorkloadPlanStageResponse } from './model/UpdateWorkloadPlanStageResponse';
import { UpdateWorkloadRuleRequest } from './model/UpdateWorkloadRuleRequest';
import { UpdateWorkloadRuleResponse } from './model/UpdateWorkloadRuleResponse';
import { UserAuthorityReq } from './model/UserAuthorityReq';
import { V2CreateCluster } from './model/V2CreateCluster';
import { V2CreateClusterReq } from './model/V2CreateClusterReq';
import { Volume } from './model/Volume';
import { VolumeResp } from './model/VolumeResp';
import { WorkloadPlanInfo } from './model/WorkloadPlanInfo';
import { WorkloadPlanReq } from './model/WorkloadPlanReq';
import { WorkloadPlanStageIdReq } from './model/WorkloadPlanStageIdReq';
import { WorkloadPlanStageReq } from './model/WorkloadPlanStageReq';
import { WorkloadPlanStageReqWorkloadPlanStage } from './model/WorkloadPlanStageReqWorkloadPlanStage';
import { WorkloadQueue } from './model/WorkloadQueue';
import { WorkloadQueueInfo } from './model/WorkloadQueueInfo';
import { WorkloadQueueItem } from './model/WorkloadQueueItem';
import { WorkloadQueueReq } from './model/WorkloadQueueReq';
import { WorkloadQueueRequest } from './model/WorkloadQueueRequest';
import { WorkloadQueueUser } from './model/WorkloadQueueUser';
import { WorkloadQueueUserReq } from './model/WorkloadQueueUserReq';
import { WorkloadQueueUserReqUserList } from './model/WorkloadQueueUserReqUserList';
import { WorkloadResource } from './model/WorkloadResource';
import { WorkloadResourceItem } from './model/WorkloadResourceItem';
import { WorkloadSchemaReq } from './model/WorkloadSchemaReq';
import { WorkloadStatus } from './model/WorkloadStatus';
import { WorkloadStatusReq } from './model/WorkloadStatusReq';

export class DwsClient {
    public static newBuilder(): ClientBuilder<DwsClient> {
            let client = new ClientBuilder<DwsClient>(newClient);
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
     * 添加资源池的绑定用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源池的绑定用户
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} queueName **参数解释**： 资源池名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {WorkloadQueueUserReq} addQueueUserListRequestBody **参数解释**： 新增资源用户请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addQueueUserList(addQueueUserListRequest?: AddQueueUserListRequest): Promise<AddQueueUserListResponse> {
        const options = ParamCreater().addQueueUserList(addQueueUserListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加资源管理计划阶段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源管理计划阶段
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {WorkloadPlanStageReq} addWorkloadPlanStageRequestBody **参数解释**： 资源管理计划阶段。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addWorkloadPlanStage(addWorkloadPlanStageRequest?: AddWorkloadPlanStageRequest): Promise<AddWorkloadPlanStageResponse> {
        const options = ParamCreater().addWorkloadPlanStage(addWorkloadPlanStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加资源池。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源池
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {WorkloadQueueReq} [workloadQueue] **参数解释**： 资源池请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addWorkloadQueue(addWorkloadQueueRequest?: AddWorkloadQueueRequest): Promise<AddWorkloadQueueResponse> {
        const options = ParamCreater().addWorkloadQueue(addWorkloadQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加异常规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加异常规则
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {AddExceptRuleReq} [addWorkloadRuleRequestBody] **参数解释**： 异常规则配置请求体。 **约束限制**： 名称不能为空。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addWorkloadRule(addWorkloadRuleRequest?: AddWorkloadRuleRequest): Promise<AddWorkloadRuleResponse> {
        const options = ParamCreater().addWorkloadRule(addWorkloadRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群绑定Eip。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群绑定EIP
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} eipId **参数解释**： 未绑定的弹性IP的ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateEip(associateEipRequest?: AssociateEipRequest): Promise<AssociateEipResponse> {
        const options = ParamCreater().associateEip(associateEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群绑定Elb接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群绑定ELB
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} elbId **参数解释**： 未绑定的弹性负载均衡ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateElb(associateElbRequest?: AssociateElbRequest): Promise<AssociateElbResponse> {
        const options = ParamCreater().associateElb(associateElbRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当用户集群创建后，实际需要的CN数量会随着业务需求而发生变化，因此管理CN节点功能的实现使用户可以根据实际需求动态调整集群CN数量。
     * - 增删CN节点过程中不允许执行其他运维操作。
     * - 增删CN节点过程中需要停止业务操作，建议在业务低峰期或业务中断情况下进行操作。
     * - 增删CN节点时发生故障且回滚失败，需要用户登录后台进行处理，处理方案请参见《故障排除》中的“集群使用&gt;增删CN回滚失败”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量增加CN节点
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchCreateCn} payload **参数解释**： 增加CN节点任务完成，集群总CN数量。 **取值范围**： 非null。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateClusterCn(batchCreateClusterCnRequest?: BatchCreateClusterCnRequest): Promise<BatchCreateClusterCnResponse> {
        const options = ParamCreater().batchCreateClusterCn(batchCreateClusterCnRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群批量添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加标签
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchCreateResourceTags} tags **参数解释**： 标签列表请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateResourceTag(batchCreateResourceTagRequest?: BatchCreateResourceTagRequest): Promise<BatchCreateResourceTagResponse> {
        const options = ParamCreater().batchCreateResourceTag(batchCreateResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当用户集群创建后，实际需要的CN数量会随着业务需求而发生变化，因此管理CN节点功能的实现使用户可以根据实际需求动态调整集群CN数量。
     * - 增删CN节点过程中不允许执行其他运维操作。
     * - 增删CN节点过程中需要停止业务操作，建议在业务低峰期或业务中断情况下进行操作。
     * - 增删CN节点时发生故障且回滚失败，需要用户登录后台进行处理，处理方案请参见《故障排除》中的“集群使用&gt;增删CN回滚失败”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除CN节点
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchDeleteCn} instances **参数解释**： 批量删除CN节点列表。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteClusterCn(batchDeleteClusterCnRequest?: BatchDeleteClusterCnRequest): Promise<BatchDeleteClusterCnResponse> {
        const options = ParamCreater().batchDeleteClusterCn(batchDeleteClusterCnRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除标签
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchDeleteResourceTags} tags **参数解释**： 标签列表请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 当集群进入只读状态时，无法进行数据库相关操作，用户可以在管理控制台解除集群的只读状态。触发只读状态可能是由于磁盘使用率过高，因此需要对集群数据进行清理或扩容。 
     *  **约束限制**：
     *  解除只读支持1.7.2及以上版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除只读
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelReadonlyCluster(cancelReadonlyClusterRequest?: CancelReadonlyClusterRequest): Promise<CancelReadonlyClusterResponse> {
        const options = ParamCreater().cancelReadonlyCluster(cancelReadonlyClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改集群安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群安全组
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ChangeSecurityGroupRequestBody} changeSecurityGroupRequestBody **参数解释**： 安全组请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest): Promise<ChangeSecurityGroupResponse> {
        const options = ParamCreater().changeSecurityGroup(changeSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建集群前预检查，提前识别子网不足、配额不足等问题，避免发起创建集群请求后创建失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群前检查
     * @param {ClusterCheckRequestBody} cluster **参数解释**： 创建集群校验请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkCluster(checkClusterRequest?: CheckClusterRequest): Promise<CheckClusterResponse> {
        const options = ParamCreater().checkCluster(checkClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 缩容前检查，确保缩容前、缩容后均满足正常操作要求。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群缩容前检查
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} checkItem **参数解释**： 检查项，取值当前仅包含3种。 **约束限制**： 不涉及。 **取值范围**： - guc：检查当前guc参数是否满足缩容条件。 - schema：检查所有schema下有无影响缩容的表。 - disk：检查缩容后磁盘容量是否满足要求。  **默认取值**： 不涉及。
     * @param {number} shrinkCount **参数解释**： 待缩容节点数。 **约束限制**： 不涉及。 **取值范围**： 最小值为3，最大值为当前节点总数减3。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkClusterShrink(checkClusterShrinkRequest?: CheckClusterShrinkRequest): Promise<CheckClusterShrinkResponse> {
        const options = ParamCreater().checkClusterShrink(checkClusterShrinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询容灾名称是否可用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查容灾名称
     * @param {string} drName **参数解释**： 容灾名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [type] **参数解释**： 容灾类型。 **约束限制**： 不涉及。 **取值范围**： - az，跨az容灾。 - region，跨region容灾。 **默认取值**： 不涉及。
     * @param {string} [standbyRegion] **参数解释**： 备集群所在局点。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [standbyProjectId] **参数解释**： 备集群所在项目ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkDisasterName(checkDisasterNameRequest?: CheckDisasterNameRequest): Promise<CheckDisasterNameResponse> {
        const options = ParamCreater().checkDisasterName(checkDisasterNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群扩容前检查，提前识别子网不足、权限不足等问题导致的扩容失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群扩容前检查
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResizeClusterRequestBody} checkGrowClusterRequestBody **参数解释**： 扩容/添加空闲节点操作请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkGrowCluster(checkGrowClusterRequest?: CheckGrowClusterRequest): Promise<CheckGrowClusterResponse> {
        const options = ParamCreater().checkGrowCluster(checkGrowClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户恢复表名检测。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用户恢复表名检测
     * @param {string} snapshotId **参数解释**： 快照ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {CheckTableRestoreRequestBody} checkTableRestoreRequestBody **参数解释**： 表名请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkTableRestore(checkTableRestoreRequest?: CheckTableRestoreRequest): Promise<CheckTableRestoreResponse> {
        const options = ParamCreater().checkTableRestore(checkTableRestoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 物理集群转换到逻辑集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 物理集群转换到逻辑集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} name **参数解释**： 逻辑集群名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public convertToLogicalCluster(convertToLogicalClusterRequest?: ConvertToLogicalClusterRequest): Promise<ConvertToLogicalClusterResponse> {
        const options = ParamCreater().convertToLogicalCluster(convertToLogicalClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于复制一个自动快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制快照
     * @param {string} snapshotId **参数解释**： 快照ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {LinkCopyReq} linkCopyReq **参数解释**： 快照复制请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copySnapshot(copySnapshotRequest?: CopySnapshotRequest): Promise<CopySnapshotResponse> {
        const options = ParamCreater().copySnapshot(copySnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建告警订阅。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建告警订阅
     * @param {AlarmSubRequest} alarmSubReq **参数解释**： 创建订阅告警请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlarmSub(createAlarmSubRequest?: CreateAlarmSubRequest): Promise<CreateAlarmSubResponse> {
        const options = ParamCreater().createAlarmSub(createAlarmSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建集群。
     * 集群必须要运行在VPC之内，创建集群前，您需要先创建VPC，并获取VPC和子网的id。
     * 该接口为异步接口，创建集群需要10～15分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群
     * @param {CreateClusterRequestBody} createClusterRequestBody **参数解释**： 创建集群对象。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCluster(createClusterRequest?: CreateClusterRequest): Promise<CreateClusterResponse> {
        const options = ParamCreater().createCluster(createClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群申请域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请域名
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {CreateClusterDns} dns **参数解释**： 申请域名参数详情。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterDns(createClusterDnsRequest?: CreateClusterDnsRequest): Promise<CreateClusterDnsResponse> {
        const options = ParamCreater().createClusterDns(createClusterDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建集群。
     * 集群必须要运行在VPC之内，创建集群前，您需要先创建VPC，并获取VPC和子网的id。
     * 该接口为异步接口，创建集群需要10～15分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群V2
     * @param {V2CreateClusterReq} v2CreateClusterReqBody **参数解释**： 创建集群对象。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterV2(createClusterV2Request?: CreateClusterV2Request): Promise<CreateClusterV2Response> {
        const options = ParamCreater().createClusterV2(createClusterV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 打开或关闭资源管理功能，新集群默认是打开状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 打开或关闭资源管理功能
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {WorkloadStatusReq} [workloadStatus] **参数解释**： 资源管理状态请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterWorkload(createClusterWorkloadRequest?: CreateClusterWorkloadRequest): Promise<CreateClusterWorkloadResponse> {
        const options = ParamCreater().createClusterWorkload(createClusterWorkloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建一个数据源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据源
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {ExtDataSourceReq} extDataSourceReq **参数解释**： 数据源请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDataSource(createDataSourceRequest?: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
        const options = ParamCreater().createDataSource(createDataSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库用户/角色。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库用户/角色
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {UserAuthorityReq} createDatabaseUserRequestBody **参数解释**： 创建数据库用户/角色请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabaseUser(createDatabaseUserRequest?: CreateDatabaseUserRequest): Promise<CreateDatabaseUserResponse> {
        const options = ParamCreater().createDatabaseUser(createDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建集群间容灾。
     * 集群处于可用状态或者非均衡状态才可进行创建容灾操作。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建容灾
     * @param {CreateDisasterRecoveryReq} disasterRecovery **参数解释**： 容灾信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDisasterRecovery(createDisasterRecoveryRequest?: CreateDisasterRecoveryRequest): Promise<CreateDisasterRecoveryResponse> {
        const options = ParamCreater().createDisasterRecovery(createDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加订阅的事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建订阅事件
     * @param {EventSubRequest} eventSubReq **参数解释**： 创建事件订阅请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEventSub(createEventSubRequest?: CreateEventSubRequest): Promise<CreateEventSubResponse> {
        const options = ParamCreater().createEventSub(createEventSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建逻辑集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建逻辑集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {CreateLogicalClusterRequestBody} createLogicalClusterRequestBody **参数解释**： 创建逻辑集群对象。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLogicalCluster(createLogicalClusterRequest?: CreateLogicalClusterRequest): Promise<CreateLogicalClusterResponse> {
        const options = ParamCreater().createLogicalCluster(createLogicalClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加逻辑集群定时增删计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加逻辑集群定时增删计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {LogicalClusterPlanBo} createLogicalClusterPlanRequestBody **参数解释**： 创建计划请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLogicalClusterPlan(createLogicalClusterPlanRequest?: CreateLogicalClusterPlanRequest): Promise<CreateLogicalClusterPlanResponse> {
        const options = ParamCreater().createLogicalClusterPlan(createLogicalClusterPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于为指定集群创建快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建快照
     * @param {CreateSnapshotRequestBody} createSnapshotRequestBody **参数解释**： 创建快照请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSnapshot(createSnapshotRequest?: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
        const options = ParamCreater().createSnapshot(createSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置快照策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加快照策略
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {CreateSnapshotPolicyRequestBody} [req] **参数解释**： 备份策略。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSnapshotPolicy(createSnapshotPolicyRequest?: CreateSnapshotPolicyRequest): Promise<CreateSnapshotPolicyResponse> {
        const options = ParamCreater().createSnapshotPolicy(createSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加资源管理计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源管理计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {WorkloadPlanReq} workloadPlan **参数解释**： 资源管理计划请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkloadPlan(createWorkloadPlanRequest?: CreateWorkloadPlanRequest): Promise<CreateWorkloadPlanResponse> {
        const options = ParamCreater().createWorkloadPlan(createWorkloadPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除订阅的告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警订阅
     * @param {string} alarmSubId **参数解释**： 告警订阅ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlarmSub(deleteAlarmSubRequest?: DeleteAlarmSubRequest): Promise<DeleteAlarmSubResponse> {
        const options = ParamCreater().deleteAlarmSub(deleteAlarmSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除集群。集群删除后将释放此集群的所有资源，包括客户数据。为了安全起见，请在删除集群前为这个集群创建快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DeleteClusterRequestBody} deleteClusterRequestBody **参数解释**： 删除集群请求信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCluster(deleteClusterRequest?: DeleteClusterRequest): Promise<DeleteClusterResponse> {
        const options = ParamCreater().deleteCluster(deleteClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定集群域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群域名
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} type **参数解释**： 域名类型。当前仅支持删除公网域名，删除内网域名尚未支持。 **约束限制**： 不涉及。 **取值范围**： public：删除公网域名。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClusterDns(deleteClusterDnsRequest?: DeleteClusterDnsRequest): Promise<DeleteClusterDnsResponse> {
        const options = ParamCreater().deleteClusterDns(deleteClusterDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除空闲节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除空闲节点
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DeleteClusterNodesRequestBody} deleteClusterNodesRequestBody **参数解释**： 删除节点请求信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClusterNodes(deleteClusterNodesRequest?: DeleteClusterNodesRequest): Promise<DeleteClusterNodesResponse> {
        const options = ParamCreater().deleteClusterNodes(deleteClusterNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除一个数据源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据源
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} extDataSourceId **参数解释**： 数据源ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDataSource(deleteDataSourceRequest?: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
        const options = ParamCreater().deleteDataSource(deleteDataSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库用户
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} name **参数解释**： 数据库用户名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {boolean} [cascade] **参数解释**： 是否忽略大小写。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatabaseUser(deleteDatabaseUserRequest?: DeleteDatabaseUserRequest): Promise<DeleteDatabaseUserResponse> {
        const options = ParamCreater().deleteDatabaseUser(deleteDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除容灾操作。
     * 容灾状态为“创建失败”、“未启动”、“启动失败”、“已停止”、“停止失败”和“异常”时可以执行删除容灾操作。
     * 删除后，将无法进行数据同步，且不可恢复，请谨慎操作。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除容灾
     * @param {string} disasterRecoveryId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [needSendRequest] **参数解释**： 跨region时是否需要向另一个集群发请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDisasterRecovery(deleteDisasterRecoveryRequest?: DeleteDisasterRecoveryRequest): Promise<DeleteDisasterRecoveryResponse> {
        const options = ParamCreater().deleteDisasterRecovery(deleteDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除集群。集群删除后将释放此集群的所有资源，包括客户数据。为了安全起见，请在删除集群前为这个集群创建快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群V2
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} [keepLastManualBackup] **参数解释**： 集群需要保留的快照数。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 0
     * @param {string} [releaseEipType] **参数解释**： 集群是否释放弹性公网IP，默认是NO_RELEASE，不释放绑定的弹性公网IP。 **约束限制**： 不涉及。 **取值范围**： - NO_RELEASE：不释放绑定的弹性公网IP； - RELEASE_BINDING：释放绑定的弹性公网IP；  **默认取值**： NO_RELEASE
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDwsCluster(deleteDwsClusterRequest?: DeleteDwsClusterRequest): Promise<DeleteDwsClusterResponse> {
        const options = ParamCreater().deleteDwsCluster(deleteDwsClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除订阅的事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除订阅事件
     * @param {string} eventSubId **参数解释**： 事件订阅ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEventSub(deleteEventSubRequest?: DeleteEventSubRequest): Promise<DeleteEventSubResponse> {
        const options = ParamCreater().deleteEventSub(deleteEventSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除逻辑集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除逻辑集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} logicalClusterId **参数解释**： 指定待删除逻辑集群的ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLogicalCluster(deleteLogicalClusterRequest?: DeleteLogicalClusterRequest): Promise<DeleteLogicalClusterResponse> {
        const options = ParamCreater().deleteLogicalCluster(deleteLogicalClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除逻辑集群定时增删计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除逻辑集群定时增删计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLogicalClusterPlan(deleteLogicalClusterPlanRequest?: DeleteLogicalClusterPlanRequest): Promise<DeleteLogicalClusterPlanResponse> {
        const options = ParamCreater().deleteLogicalClusterPlan(deleteLogicalClusterPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源池的绑定用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源池的绑定用户
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} queueName **参数解释**： 资源池名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {WorkloadQueueUserReq} deleteQueueUserListRequestBody **参数解释**： 删除资源队列用户请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteQueueUserList(deleteQueueUserListRequest?: DeleteQueueUserListRequest): Promise<DeleteQueueUserListResponse> {
        const options = ParamCreater().deleteQueueUserList(deleteQueueUserListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除一个指定手动快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除快照
     * @param {string} snapshotId **参数解释**： 快照ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
        const options = ParamCreater().deleteSnapshot(deleteSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除一个快照策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除快照策略
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} id **参数解释**： 快照策略ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSnapshotPolicy(deleteSnapshotPolicyRequest?: DeleteSnapshotPolicyRequest): Promise<DeleteSnapshotPolicyResponse> {
        const options = ParamCreater().deleteSnapshotPolicy(deleteSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源管理计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源管理计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkloadPlan(deleteWorkloadPlanRequest?: DeleteWorkloadPlanRequest): Promise<DeleteWorkloadPlanResponse> {
        const options = ParamCreater().deleteWorkloadPlan(deleteWorkloadPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源管理计划阶段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源管理计划阶段
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} stageId **参数解释**： 计划阶段ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkloadPlanStage(deleteWorkloadPlanStageRequest?: DeleteWorkloadPlanStageRequest): Promise<DeleteWorkloadPlanStageResponse> {
        const options = ParamCreater().deleteWorkloadPlanStage(deleteWorkloadPlanStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除资源池。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源池
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} workloadQueueName **参数解释**： 资源池名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [logicalClusterName] **参数解释**： 逻辑集群名称。逻辑集群模式下该字段必填。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkloadQueue(deleteWorkloadQueueRequest?: DeleteWorkloadQueueRequest): Promise<DeleteWorkloadQueueResponse> {
        const options = ParamCreater().deleteWorkloadQueue(deleteWorkloadQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除异常规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除异常规则
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} ruleName **参数解释**： 异常规则名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkloadRule(deleteWorkloadRuleRequest?: DeleteWorkloadRuleRequest): Promise<DeleteWorkloadRuleResponse> {
        const options = ParamCreater().deleteWorkloadRule(deleteWorkloadRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停用逻辑集群定时增删计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用逻辑集群定时增删计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 增删计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableLogicalClusterPlan(disableLogicalClusterPlanRequest?: DisableLogicalClusterPlanRequest): Promise<DisableLogicalClusterPlanResponse> {
        const options = ParamCreater().disableLogicalClusterPlan(disableLogicalClusterPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于关闭集群LTS云日志服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭云服务日志
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableLtsLogs(disableLtsLogsRequest?: DisableLtsLogsRequest): Promise<DisableLtsLogsResponse> {
        const options = ParamCreater().disableLtsLogs(disableLtsLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群解绑Eip。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群解绑EIP
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} eipId **参数解释**： 集群绑定的弹性IP。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateEip(disassociateEipRequest?: DisassociateEipRequest): Promise<DisassociateEipResponse> {
        const options = ParamCreater().disassociateEip(disassociateEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群解绑Elb接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群解绑ELB
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} elbId **参数解释**： 集群已绑定的弹性负载均衡ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateElb(disassociateElbRequest?: DisassociateElbRequest): Promise<DisassociateElbResponse> {
        const options = ParamCreater().disassociateElb(disassociateElbRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换逻辑集群开关，仅用于控制逻辑集群相关功能模块是否在页面展示。
     * 在集群已经是逻辑集群的场景下，修改该接口无任何作用及影响。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换逻辑集群开关
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {EnableLogicalClusterRequestBody} enableLogicalClusterRequestBody **参数解释**： 切换开关请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableLogicalCluster(enableLogicalClusterRequest?: EnableLogicalClusterRequest): Promise<EnableLogicalClusterResponse> {
        const options = ParamCreater().enableLogicalCluster(enableLogicalClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用逻辑集群定时增删计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用逻辑集群定时增删计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 增删计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableLogicalClusterPlan(enableLogicalClusterPlanRequest?: EnableLogicalClusterPlanRequest): Promise<EnableLogicalClusterPlanResponse> {
        const options = ParamCreater().enableLogicalClusterPlan(enableLogicalClusterPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于开启集群LTS云日志服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启云服务日志
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableLtsLogs(enableLtsLogsRequest?: EnableLtsLogsRequest): Promise<EnableLtsLogsResponse> {
        const options = ParamCreater().enableLtsLogs(enableLtsLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 转加密集群。
     * **约束限制**：
     * 转加密集群起始支持版本：8.0.0
     * 转加密集群guestAgent起始支持版本：8.3.0.200
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 转加密集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {EncryptClusterReq} encryptClusterRequestBody **参数解释**： 转加密集群请求体。 **约束限制**： 非空。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public encryptCluster(encryptClusterRequest?: EncryptClusterRequest): Promise<EncryptClusterResponse> {
        const options = ParamCreater().encryptCluster(encryptClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下发集群升级相关操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发集群升级相关操作
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {ExecuteClusterUpgradeActionRequestBody} executeClusterUpgradeActionRequestBody **参数解释**： 下发升级请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeClusterUpgradeAction(executeClusterUpgradeActionRequest?: ExecuteClusterUpgradeActionRequest): Promise<ExecuteClusterUpgradeActionResponse> {
        const options = ParamCreater().executeClusterUpgradeAction(executeClusterUpgradeActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 进行数据库运维账户操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行运维用户操作
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {DatabaseOmUserActionReq} executeDatabaseOmUserActionRequestBody **参数解释**： 操作类型。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeDatabaseOmUserAction(executeDatabaseOmUserActionRequest?: ExecuteDatabaseOmUserActionRequest): Promise<ExecuteDatabaseOmUserActionResponse> {
        const options = ParamCreater().executeDatabaseOmUserAction(executeDatabaseOmUserActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行规格变更。
     * **约束限制**：
     * 包周期集群暂不支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行规格变更
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {SpecResizeRequest} executeFlavorChangeRequestBody **参数解释**： 规格变更请求信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeFlavorChange(executeFlavorChangeRequest?: ExecuteFlavorChangeRequest): Promise<ExecuteFlavorChangeResponse> {
        const options = ParamCreater().executeFlavorChange(executeFlavorChangeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于集群扩容后将老节点数据均匀分布到新扩节点的数据重分布操作，数据“重分布”后将大大提升业务响应速率。
     * 重分布功能DWS 2.0 8.1.1.200及以上集群版本支持。
     * 离线调度重分布模式在8.2.0及以上版本将不再支持。
     * 只有在扩容之后，集群任务信息为“待重分布”状态时才能手动使用“重分布”功能，其他时段该功能不可使用。
     * 在扩容阶段也可以选择重分布模式等高级配置，详情参见设置高级配置。
     * 重分布队列的排序依据表的relpage大小进行，为确保relpage大小正确，建议在重分布之前对需要重分布的表执行analyze操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发重分布
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {RedistributionReq} redistributionReq **参数解释**： 重分布请求。 **约束限制**： 重分布模式参数必传，建议offline。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeRedistributionCluster(executeRedistributionClusterRequest?: ExecuteRedistributionClusterRequest): Promise<ExecuteRedistributionClusterResponse> {
        const options = ParamCreater().executeRedistributionCluster(executeRedistributionClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 随着客户业务的发展，磁盘空间往往最先出现资源瓶颈，在其他资源尚且充足的情况下，通过磁盘扩容可快速缓解存储资源瓶颈现象，操作过程中无需暂停业务，并且不会造成CPU、内存等资源浪费。  
     *  **约束限制**：
     * 磁盘扩容功能仅8.1.1.203及以上版本支持，并且创建集群规格需要为云数仓SSD云盘或实时数仓类型。  
     * 按需+折扣套餐包消费模式下，存储扩容后超出折扣套餐包部分将按需收费。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 磁盘扩容
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ExpandInstanceStorage} payload **参数解释**： 磁盘扩容后单节点有效存储容量（GB / 节点）。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandInstanceStorage(expandInstanceStorageRequest?: ExpandInstanceStorageRequest): Promise<ExpandInstanceStorageResponse> {
        const options = ParamCreater().expandInstanceStorage(expandInstanceStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出数据库用户/角色，接口返回的是输出流，xlsx文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出数据库用户/角色
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10000
     * @param {string} [type] **参数解释**： 类型。 **约束限制**： 不涉及。 **取值范围**： ROLE：导出角色 USER：导出用户 **默认取值**： null
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportDatabaseUsers(exportDatabaseUsersRequest?: ExportDatabaseUsersRequest): Promise<ExportDatabaseUsersResponse> {
        const options = ParamCreater().exportDatabaseUsers(exportDatabaseUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出数据库用户/角色的权限列表，接口返回的是输出流，xlsx文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出数据库用户/角色的权限
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} name **参数解释**： 数据库用户/角色名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10000
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportUserAuthority(exportUserAuthorityRequest?: ExportUserAuthorityRequest): Promise<ExportUserAuthorityResponse> {
        const options = ParamCreater().exportUserAuthority(exportUserAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警配置
     * @param {string} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {string} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 不限制。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmConfigs(listAlarmConfigsRequest?: ListAlarmConfigsRequest): Promise<ListAlarmConfigsResponse> {
        const options = ParamCreater().listAlarmConfigs(listAlarmConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警详情列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警详情列表
     * @param {string} [timeZone] **参数解释**： 时区信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： GMT+08:00
     * @param {string} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {string} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmDetail(listAlarmDetailRequest?: ListAlarmDetailRequest): Promise<ListAlarmDetailResponse> {
        const options = ParamCreater().listAlarmDetail(listAlarmDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警统计。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警统计列表
     * @param {string} [timeZone] **参数解释**： 时区信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： GMT+08:00
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmStatistic(listAlarmStatisticRequest?: ListAlarmStatisticRequest): Promise<ListAlarmStatisticResponse> {
        const options = ParamCreater().listAlarmStatistic(listAlarmStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询订阅告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警订阅列表
     * @param {string} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {string} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmSubs(listAlarmSubsRequest?: ListAlarmSubsRequest): Promise<ListAlarmSubsResponse> {
        const options = ParamCreater().listAlarmSubs(listAlarmSubsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计日志记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志记录
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditLog(listAuditLogRequest?: ListAuditLogRequest): Promise<ListAuditLogResponse> {
        const options = ParamCreater().listAuditLog(listAuditLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在创建实例时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区列表
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
     * 该接口用于查询可用的容灾集群列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用容灾集群列表
     * @param {string} primaryClusterId **参数解释**： 主集群ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} standbyAzCode **参数解释**： 备集群所在AZ。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [primarySpecId] **参数解释**： 主集群规格ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [primaryClusterDnNum] **参数解释**： 主集群DN数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [standbyRegion] **参数解释**： 备集群所在局点。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [standbyProjectId] **参数解释**： 备集群项目ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [drType] **参数解释**： 容灾类型。 **约束限制**： 不涉及。 **取值范围**： - az，跨az容灾。 - region，跨region容灾。 **默认取值**： 不涉及。
     * @param {string} [datastoreType] **参数解释**： 数仓类型。 **约束限制**： 不涉及。 **取值范围**： - dws，dws存算一体。 - dws3.0，dws存算分离。 - hybrid，dws实时数仓。 **默认取值**： 不涉及。
     * @param {string} [datastoreVersion] **参数解释**： 数仓版本。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableDisasterClusters(listAvailableDisasterClustersRequest?: ListAvailableDisasterClustersRequest): Promise<ListAvailableDisasterClustersResponse> {
        const options = ParamCreater().listAvailableDisasterClusters(listAvailableDisasterClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群任务详情
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} actionName **参数解释**： 任务名称。当前仅部分任务在操作中阶段支持查看任务详情。 **约束限制**： 不涉及。 **取值范围**： GROWING、RESIZE_FAILURE、RESTORING、RESTORING_FAILED、SNAPSHOTTING、SNAPSHOTTING_FAILED、FINE_GRAINED_RESTORING、FINE_GRAINED_RESTORING_FAILED **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterActions(listClusterActionsRequest?: ListClusterActionsRequest): Promise<ListClusterActionsResponse> {
        const options = ParamCreater().listClusterActions(listClusterActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群的CN节点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群CN节点
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterCn(listClusterCnRequest?: ListClusterCnRequest): Promise<ListClusterCnResponse> {
        const options = ParamCreater().listClusterCn(listClusterCnRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群所关联的参数组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群参数组
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterConfigurations(listClusterConfigurationsRequest?: ListClusterConfigurationsRequest): Promise<ListClusterConfigurationsResponse> {
        const options = ParamCreater().listClusterConfigurations(listClusterConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群所关联的参数组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群参数配置
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} configurationId **参数解释**： 参数组ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterConfigurationsParameter(listClusterConfigurationsParameterRequest?: ListClusterConfigurationsParameterRequest): Promise<ListClusterConfigurationsParameterResponse> {
        const options = ParamCreater().listClusterConfigurationsParameter(listClusterConfigurationsParameterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群详情
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterDetails(listClusterDetailsRequest?: ListClusterDetailsRequest): Promise<ListClusterDetailsResponse> {
        const options = ParamCreater().listClusterDetails(listClusterDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询连接信息。包括公网域名、内网域名等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询连接信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterEndpoints(listClusterEndpointsRequest?: ListClusterEndpointsRequest): Promise<ListClusterEndpointsResponse> {
        const options = ParamCreater().listClusterEndpoints(listClusterEndpointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询节点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询节点列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {Array<string>} [nodeIds] **参数解释**： 节点ID列表。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： null
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页查询，每页显示的条目数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 100
     * @param {string} [filterBy] **参数解释**： 过滤字段。 **约束限制**： 不涉及。 **取值范围**： instCreateType：根据资源状态过滤 status：根据节点状态过滤 **默认取值**： null
     * @param {string} [filter] **参数解释**： 过滤字段内容。 **约束限制**： 不涉及。 **取值范围**： 当根据资源状态过滤时，可选如下值： - ALL：全部 - INST：已使用 - NODE：空虚 当根据节点状态过滤时，可选如下值： - ALL：全部 - CREATING：创建中 - FREE：空闲 - ACTIVE：可用 - FAILED：不可用 - UNKNOWN：未知 - CREATE_FAILED：创建失败 - DELETING：删除中 - DELETE_FAILED：删除失败 **默认取值**： null
     * @param {string} [orderBy] **参数解释**： 排序字段。默认无序返回。 **约束限制**： 不涉及。 **取值范围**： name：根据名称过滤 **默认取值**： null
     * @param {string} [order] **参数解释**： 排序：升序/降序。 **约束限制**： 不涉及。 **取值范围**： asc：升序 desc：降序 **默认取值**： null
     * @param {string} [deleted] **参数解释**： 是否被删除，字段已废弃。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： null
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterNodes(listClusterNodesRequest?: ListClusterNodesRequest): Promise<ListClusterNodesResponse> {
        const options = ParamCreater().listClusterNodes(listClusterNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询合适的缩容数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询合适的缩容数
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterScaleInNumbers(listClusterScaleInNumbersRequest?: ListClusterScaleInNumbersRequest): Promise<ListClusterScaleInNumbersResponse> {
        const options = ParamCreater().listClusterScaleInNumbers(listClusterScaleInNumbersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询集群快照列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群快照列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 不限制。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {string} [sortKey] **参数解释**： 排序字段。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [sortDir] **参数解释**： 排序规则。 **约束限制**： 不涉及。 **取值范围**： asc：升序。 desc：降序。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterSnapshots(listClusterSnapshotsRequest?: ListClusterSnapshotsRequest): Promise<ListClusterSnapshotsResponse> {
        const options = ParamCreater().listClusterSnapshots(listClusterSnapshotsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定集群的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群标签
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterTags(listClusterTagsRequest?: ListClusterTagsRequest): Promise<ListClusterTagsResponse> {
        const options = ParamCreater().listClusterTags(listClusterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源管理开关状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源管理开关状态
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterWorkload(listClusterWorkloadRequest?: ListClusterWorkloadRequest): Promise<ListClusterWorkloadResponse> {
        const options = ParamCreater().listClusterWorkload(listClusterWorkloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群列表
     * @param {string} [enterpriseProjectId] **参数解释**： 企业项目ID。查询所有绑定企业项目的集群，则值为all_granted_eps。 **约束限制**： 不涉及。 **取值范围**： all_granted_eps：所有企业项目。 0：表示默认企业项目“default”的ID。 其它：过滤对应企业项目下的数据。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusters(listClustersRequest?: ListClustersRequest): Promise<ListClustersResponse> {
        const options = ParamCreater().listClusters(listClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数修改审计记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数修改审计记录
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [actionTime] **参数解释**： 任务时间。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [filterBy] **参数解释**： 过滤配置信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [filter] **参数解释**： 过滤内容。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurationsAuditRecords(listConfigurationsAuditRecordsRequest?: ListConfigurationsAuditRecordsRequest): Promise<ListConfigurationsAuditRecordsResponse> {
        const options = ParamCreater().listConfigurationsAuditRecords(listConfigurationsAuditRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询数据源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据源
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataSource(listDataSourceRequest?: ListDataSourceRequest): Promise<ListDataSourceResponse> {
        const options = ParamCreater().listDataSource(listDataSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库对象。
     * **约束限制**：
     * 集群guestAgent插件大于等于8.2.1.1开始支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库对象
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} type **参数解释**： 对象类型。 **约束限制**： 不涉及。 **取值范围**： DATABASE、SCHEMA、TABLE、VIEW、COLUMN、FUNCTION、SEQUENCE、NODEGROUP **默认取值**： null
     * @param {string} [name] **参数解释**： 对象名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [database] **参数解释**： 数据库名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [schema] **参数解释**： 模式名。 **约束限制**： 当对象类型为TABLE、VIEW、COLUMN、FUNCTION、SEQUENCE时必选。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [table] **参数解释**： 表名。 **约束限制**： 对象类型为COLUMN时必选。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页大小。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 1000
     * @param {string} [isFineGrainedDisaster] **参数解释**： 是否细粒度容灾。 **约束限制**： 不涉及。 **取值范围**： true|false **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseObjects(listDatabaseObjectsRequest?: ListDatabaseObjectsRequest): Promise<ListDatabaseObjectsResponse> {
        const options = ParamCreater().listDatabaseObjects(listDatabaseObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户/角色拥有权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户/角色拥有权限
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} name **参数解释**： 用户名、角色名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseUserAuthorities(listDatabaseUserAuthoritiesRequest?: ListDatabaseUserAuthoritiesRequest): Promise<ListDatabaseUserAuthoritiesResponse> {
        const options = ParamCreater().listDatabaseUserAuthorities(listDatabaseUserAuthoritiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有数据库用户/角色。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有数据库用户/角色
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 1000。
     * @param {string} [type] **参数解释**： 查询角色还是用户。 **约束限制**： 不涉及。 **取值范围**： ROLE：表示查询所有角色。  USER：表示查询所有用户。 **默认取值**： 不涉及。
     * @param {string} [userType] **参数解释**： 用户类型，COMMON、IAM或者OneAccess。 **约束限制**： 不涉及。 **取值范围**： COMMON：表示普通数据库用户。  IAM：表示IAM同步的数据库用户。 OneAccess: 表示OneAccess用户。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseUsers(listDatabaseUsersRequest?: ListDatabaseUsersRequest): Promise<ListDatabaseUsersResponse> {
        const options = ParamCreater().listDatabaseUsers(listDatabaseUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询容灾列表。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容灾列表
     * @param {string} [primaryClusterId] **参数解释**： 主集群ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [standbyClusterId] **参数解释**： 备集群ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [id] **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDisasterRecover(listDisasterRecoverRequest?: ListDisasterRecoverRequest): Promise<ListDisasterRecoverResponse> {
        const options = ParamCreater().listDisasterRecover(listDisasterRecoverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取专属分布式存储池列表，只包括用户开通的SSD专属资源池信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属分布式存储池列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDssPools(listDssPoolsRequest?: ListDssPoolsRequest): Promise<ListDssPoolsResponse> {
        const options = ParamCreater().listDssPools();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群可以关联的ELB列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群可绑定的ELB列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listElbs(listElbsRequest?: ListElbsRequest): Promise<ListElbsResponse> {
        const options = ParamCreater().listElbs(listElbsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件配置
     * @param {string} [specName] **参数解释**： 事件配置名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [category] **参数解释**： 事件类别。 **约束限制**： 不涉及。 **取值范围**： - management：管理。 - monitor：监控。 - security：安全。 **默认取值**： 不涉及。
     * @param {string} [severity] **参数解释**： 事件级别。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [sourceType] **参数解释**： 事件源类别。 **约束限制**： 不涉及。 **取值范围**： - cluster：集群。 - backup：快照。 - disaster-recovery：容灾。 - data.migration：数据迁移。 - dws.ingestion：DwsIngestion。 **默认取值**： 不涉及。
     * @param {string} [tag] **参数解释**： 事件标签。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {string} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventSpecs(listEventSpecsRequest?: ListEventSpecsRequest): Promise<ListEventSpecsResponse> {
        const options = ParamCreater().listEventSpecs(listEventSpecsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询订阅的事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询订阅事件
     * @param {string} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {string} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventSubs(listEventSubsRequest?: ListEventSubsRequest): Promise<ListEventSubsResponse> {
        const options = ParamCreater().listEventSubs(listEventSubsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件列表
     * @param {string} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {string} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEvents(listEventsRequest?: ListEventsRequest): Promise<ListEventsResponse> {
        const options = ParamCreater().listEvents(listEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询磁盘信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询磁盘信息
     * @param {string} [clusterId] **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} [instanceId] **参数解释**： 实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [instanceName] **参数解释**： 实例名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 不限制。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostDisk(listHostDiskRequest?: ListHostDiskRequest): Promise<ListHostDiskResponse> {
        const options = ParamCreater().listHostDisk(listHostDiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取网卡状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取网卡状态
     * @param {string} [clusterId] **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} [instanceName] **参数解释**： 实例名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 不限制。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostNet(listHostNetRequest?: ListHostNetRequest): Promise<ListHostNetResponse> {
        const options = ParamCreater().listHostNet(listHostNetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机概览。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机概览
     * @param {number} limit **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 不限制。
     * @param {number} offset **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {string} [clusterId] **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} [instanceName] **参数解释**： 实例名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostOverview(listHostOverviewRequest?: ListHostOverviewRequest): Promise<ListHostOverviewResponse> {
        const options = ParamCreater().listHostOverview(listHostOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务进度信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务进度
     * @param {string} jobId **参数解释**： 任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobDetails(listJobDetailsRequest?: ListJobDetailsRequest): Promise<ListJobDetailsResponse> {
        const options = ParamCreater().listJobDetails(listJobDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询逻辑集群定时增删计划。定时增删计划业务支持最多保存20条数据，接口最大返回20条数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询逻辑集群定时增删计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogicalClusterPlans(listLogicalClusterPlansRequest?: ListLogicalClusterPlansRequest): Promise<ListLogicalClusterPlansResponse> {
        const options = ParamCreater().listLogicalClusterPlans(listLogicalClusterPlansRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询逻辑集群可用环节点信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询逻辑集群可用环节点信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogicalClusterRings(listLogicalClusterRingsRequest?: ListLogicalClusterRingsRequest): Promise<ListLogicalClusterRingsResponse> {
        const options = ParamCreater().listLogicalClusterRings(listLogicalClusterRingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询逻辑集群任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询逻辑集群任务信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {string} [logicalClusterName] **参数解释**： 集群名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [type] **参数解释**： 类型。 **取值范围**： - Switch：物理集群转逻辑集群。 - Create：创建。 - Expand：从弹性池中扩容。 - Restart：重启。 - Delete：删除。 - Shrink：缩容到弹性池中。 - Grow：外部扩容 - Start：开机 - Stop：停机 - ShrinkElasticGroup：从弹性池中缩容。 - elasticExpand：自动弹性扩容。
     * @param {string} [orderBy] **参数解释**： 排序字段。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [order] **参数解释**： 排序：升序/降序。 **约束限制**： 不涉及。 **取值范围**： ASC：表示按升序排序。 DESC：表示按降序排序。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogicalClusterTasks(listLogicalClusterTasksRequest?: ListLogicalClusterTasksRequest): Promise<ListLogicalClusterTasksResponse> {
        const options = ParamCreater().listLogicalClusterTasks(listLogicalClusterTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询逻辑集群磁盘信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询逻辑集群磁盘信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogicalClusterVolumes(listLogicalClusterVolumesRequest?: ListLogicalClusterVolumesRequest): Promise<ListLogicalClusterVolumesResponse> {
        const options = ParamCreater().listLogicalClusterVolumes(listLogicalClusterVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询逻辑集群列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询逻辑集群列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogicalClusters(listLogicalClustersRequest?: ListLogicalClustersRequest): Promise<ListLogicalClustersResponse> {
        const options = ParamCreater().listLogicalClusters(listLogicalClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取LTS日志列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取LTS日志列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 不限制。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLtsLogs(listLtsLogsRequest?: ListLtsLogsRequest): Promise<ListLtsLogsResponse> {
        const options = ParamCreater().listLtsLogs(listLtsLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群使用指标列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群使用指标列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} offset **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} limit **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0，最大1000。 **默认取值**： 不限制。
     * @param {string} [orderBy] **参数解释**： 排序字段，固定取值。 **约束限制**： 不涉及。 **取值范围**： create_time：按创建时间排序。 **默认取值**： 不涉及。
     * @param {string} [sortBy] **参数解释**： 正序还是倒序，固定取值。 **约束限制**： 不涉及。 **取值范围**： asc：正序。 desc：倒序。 **默认取值**： 不涉及。
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
     * 获取指定指标相关采集数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定指标相关采集数据
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} metricName **参数解释**： 指标名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} offset **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} limit **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0，最大1000。 **默认取值**： 不限制。
     * @param {number} from **参数解释**： 采集开始时间，13位时间戳。 **约束限制**： 不涉及。 **取值范围**： 13位时间戳。 **默认取值**： 不涉及。
     * @param {number} to **参数解释**： 采集结束时间，13位时间戳。 **约束限制**： 开始时间到结束时间最多不超过一天。 **取值范围**： 13位时间戳。 **默认取值**： 不涉及。
     * @param {string} [orderBy] **参数解释**： 排序字段，固定取值。 **约束限制**： 不涉及。 **取值范围**： ctime：采集时间。 **默认取值**： 不涉及。
     * @param {string} [sortBy] **参数解释**： 描述信息请求。 **约束限制**： 正序还是倒序，固定取值。 **取值范围**： asc：正序。 desc：倒序。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetricsData(listMetricsDataRequest?: ListMetricsDataRequest): Promise<ListMetricsDataResponse> {
        const options = ParamCreater().listMetricsData(listMetricsDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询历史监控数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史监控数据
     * @param {string} from **参数解释**： 开始时间。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} to **参数解释**： 结束时间。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} indicatorName **参数解释**： 指标名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} dim0 **参数解释**： 第一层级。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [_function] **参数解释**： 取值方法。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [period] **参数解释**： 取值周期。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [dim1] **参数解释**： 第二层级。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMonitorIndicatorData(listMonitorIndicatorDataRequest?: ListMonitorIndicatorDataRequest): Promise<ListMonitorIndicatorDataResponse> {
        const options = ParamCreater().listMonitorIndicatorData(listMonitorIndicatorDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询性能监控指标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询性能监控指标
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMonitorIndicators(listMonitorIndicatorsRequest?: ListMonitorIndicatorsRequest): Promise<ListMonitorIndicatorsResponse> {
        const options = ParamCreater().listMonitorIndicators();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询所有GaussDB(DWS)服务支持的规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规格信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodeTypes(listNodeTypesRequest?: ListNodeTypesRequest): Promise<ListNodeTypesResponse> {
        const options = ParamCreater().listNodeTypes();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看计划执行日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看计划执行日志
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlanExecLogs(listPlanExecLogsRequest?: ListPlanExecLogsRequest): Promise<ListPlanExecLogsResponse> {
        const options = ParamCreater().listPlanExecLogs(listPlanExecLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询实时SQL列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {ListQueriesRequestBody} listQueriesRequestBody **参数解释**： 查询参数请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueries(listQueriesRequest?: ListQueriesRequest): Promise<ListQueriesResponse> {
        const options = ParamCreater().listQueries(listQueriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单租户在GaussDB(DWS)服务下的配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取待重分布表所属模式信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取待重分布表所属模式信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} dbName **参数解释**： 分页偏移量。 **约束限制**： 不涉及。 **取值范围**： ^[a-zA-Z0-9\\u4e00-\\u9fa5_.+&#x3D; :@!#-]{0,255}$ **默认取值**： null
     * @param {number} [limit] **参数解释**： 分页条数。 **约束限制**： 不涉及。 **取值范围**： 有效值：大于等于1。 **默认取值**： 10
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 有效值：大于等于0。 **默认取值**： 0
     * @param {string} [schemaName] **参数解释**： schema名称。 **约束限制**： 不涉及。 **取值范围**： ^[a-zA-Z0-9\\u4e00-\\u9fa5_.+&#x3D; ,:@!#-]{0,2048}$ **默认取值**： null
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRedistributionSchema(listRedistributionSchemaRequest?: ListRedistributionSchemaRequest): Promise<ListRedistributionSchemaResponse> {
        const options = ParamCreater().listRedistributionSchema(listRedistributionSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群模式空间信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群模式空间信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} databaseName **参数解释**： 数据库名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [sortKey] **参数解释**： 排序字段。 **约束限制**： 不涉及。 **取值范围**： schemaName：模式名称排序。 **默认取值**： 不涉及。
     * @param {string} [sortDir] **参数解释**： 排序字段。 **约束限制**： 不涉及。 **取值范围**： ASC：表示按升序排序。  DESC：表示按降序排序。 **默认取值**： 不涉及。
     * @param {string} [keywords] **参数解释**： 查询关键词。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSchemas(listSchemasRequest?: ListSchemasRequest): Promise<ListSchemasResponse> {
        const options = ParamCreater().listSchemas(listSchemasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于使用快照ID查询快照详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照详情
     * @param {string} snapshotId **参数解释**： 快照ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotDetails(listSnapshotDetailsRequest?: ListSnapshotDetailsRequest): Promise<ListSnapshotDetailsResponse> {
        const options = ParamCreater().listSnapshotDetails(listSnapshotDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据快照ID查询规格信息。支持用来查询某个快照的规格信息，或者快照可恢复到的目标规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据快照ID查询规格信息
     * @param {string} snapshotId **参数解释**： 快照ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'snapshot' | 'restore'} [type] **参数解释**： 过滤快照规格类型，用于区分仅查询快照原始规格，还是包含可恢复的规格。 **约束限制**： 不涉及。 **取值范围**： snapshot：仅查询快照的规格信息 restore：同时查询恢复快照可用的规格信息 **默认取值**： snapshot
     * @param {string} [azCode] **参数解释**： 恢复时的目标可用区，用以过滤目标可用区下可恢复的规格。 恢复3az集群时需传递3个可用区编码，英文逗号分割（无空格）。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 快照原始集群所在可用区。
     * @param {boolean} [fineGrainedRestore] **参数解释**： 是否是细粒度备份恢复，用以过滤恢复时的可用规格。 **约束限制**： 不涉及。 **取值范围**： true|false **默认取值**： false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotFlavorInfo(listSnapshotFlavorInfoRequest?: ListSnapshotFlavorInfoRequest): Promise<ListSnapshotFlavorInfoResponse> {
        const options = ParamCreater().listSnapshotFlavorInfo(listSnapshotFlavorInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照策略
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotPolicy(listSnapshotPolicyRequest?: ListSnapshotPolicyRequest): Promise<ListSnapshotPolicyResponse> {
        const options = ParamCreater().listSnapshotPolicy(listSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 快照统计信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 快照统计信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotStatistics(listSnapshotStatisticsRequest?: ListSnapshotStatisticsRequest): Promise<ListSnapshotStatisticsResponse> {
        const options = ParamCreater().listSnapshotStatistics(listSnapshotStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询快照列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshots(listSnapshotsRequest?: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
        const options = ParamCreater().listSnapshots();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前可用资源数量，其中包括“可用集群和总集群（个）”、“可用节点和总节点（个）”、“总容量（GB）”。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源统计信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStatistics(listStatisticsRequest?: ListStatisticsRequest): Promise<ListStatisticsResponse> {
        const options = ParamCreater().listStatistics();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询身份源同步记录。
     * **约束限制**：
     * 该功能在页面默认未开放给所有用户，当特性开启且有同步记录时查询才有结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询身份源同步记录
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSyncRecords(listSyncRecordsRequest?: ListSyncRecordsRequest): Promise<ListSyncRecordsResponse> {
        const options = ParamCreater().listSyncRecords(listSyncRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询表倾斜或脏页率信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询表倾斜或脏页率信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} rateType **参数解释**： 查询类型，固定取值。 **约束限制**： 不涉及。 **取值范围**： skew：表倾斜率。 dirtyPage：表脏页率。 **默认取值**： 不涉及。
     * @param {number} offset **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} limit **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 不限制。
     * @param {string} [orderBy] **参数解释**： 排序字段，固定取值。 **约束限制**： 不涉及。 **取值范围**： table_size：表大小。 rate：表倾斜率或脏页率。 **默认取值**： 不涉及。
     * @param {string} [sortBy] **参数解释**： 正序还是倒序排序，固定取值。 **约束限制**： 不涉及。 **取值范围**： ASC：正序。 DESC：倒序。 **默认取值**： 不涉及。
     * @param {string} [filter] **参数解释**： 查询条件，固定取值。 **约束限制**： 不涉及。 **取值范围**： db_name：数据库名称。 schema_name：schema名称。 table_name：表名。 table_owner：所属用户。 **默认取值**： 不涉及。
     * @param {string} [value] **参数解释**： 过滤条件的值。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTablesStatistic(listTablesStatisticRequest?: ListTablesStatisticRequest): Promise<ListTablesStatisticResponse> {
        const options = ParamCreater().listTablesStatistic(listTablesStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTags(listTagsRequest?: ListTagsRequest): Promise<ListTagsResponse> {
        const options = ParamCreater().listTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定集群的企业项目信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群企业项目信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页大小，默认10。 **约束限制**： 不涉及。 **取值范围**： 有效值大于等于1。 **默认取值**： 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagsForResource(listTagsForResourceRequest?: ListTagsForResourceRequest): Promise<ListTagsForResourceResponse> {
        const options = ParamCreater().listTagsForResource(listTagsForResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询支持变更的目标规格列表。接口返回的规格列表最多为20条。
     * **约束限制**：
     * 无cluster_id时：可查询所有支持转换的目标规格，但是由于配额等原因，部分规格可能存在售罄无法使用。
     * 存在cluster_id时：会自动关联此集群所在可用区下的配额充足的目标规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询支持变更的目标规格列表
     * @param {string} flavorId **参数解释**： 集群当前的规格ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [clusterId] **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 此参数不传时，可查询所有支持转换的目标规格，但是由于配额等原因，部分规格可能存在售罄无法使用。 传递集群ID时会自动关联此集群所在可用区下的配额充足的目标规格。 **取值范围**： 不涉及。 **默认取值**： null
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTargetFlavors(listTargetFlavorsRequest?: ListTargetFlavorsRequest): Promise<ListTargetFlavorsResponse> {
        const options = ParamCreater().listTargetFlavors(listTargetFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群拓扑ring环节点信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群拓扑ring环节点信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopoRings(listTopoRingsRequest?: ListTopoRingsRequest): Promise<ListTopoRingsResponse> {
        const options = ParamCreater().listTopoRings(listTopoRingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群可升级的目标版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群可升级的目标版本
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {'cluster' | 'hotpatch'} [type] **参数解释**： 升级类型。 **约束限制**： 不涉及。 **取值范围**： cluster：集群升级。 hotpatch：热补丁升级。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUpdatableVersion(listUpdatableVersionRequest?: ListUpdatableVersionRequest): Promise<ListUpdatableVersionResponse> {
        const options = ParamCreater().listUpdatableVersion(listUpdatableVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此接口获取当前集群升级记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级记录
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUpdateRecord(listUpdateRecordRequest?: ListUpdateRecordRequest): Promise<ListUpdateRecordResponse> {
        const options = ParamCreater().listUpdateRecord(listUpdateRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群中所有资源管理计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源管理计划列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} [logicalClusterName] **参数解释**： 逻辑集群名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkloadPlans(listWorkloadPlansRequest?: ListWorkloadPlansRequest): Promise<ListWorkloadPlansResponse> {
        const options = ParamCreater().listWorkloadPlans(listWorkloadPlansRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} [logicalClusterName] **参数解释**： 逻辑集群名称。逻辑集群模式下该字段必填。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkloadQueue(listWorkloadQueueRequest?: ListWorkloadQueueRequest): Promise<ListWorkloadQueueResponse> {
        const options = ParamCreater().listWorkloadQueue(listWorkloadQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获得资源池的绑定用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获得资源池的绑定用户列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} queueName **参数解释**： 资源池名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 大于0。 **默认取值**： 10
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkloadQueueUsers(listWorkloadQueueUsersRequest?: ListWorkloadQueueUsersRequest): Promise<ListWorkloadQueueUsersResponse> {
        const options = ParamCreater().listWorkloadQueueUsers(listWorkloadQueueUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前集群的异常规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前集群的异常规则列表
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 0
     * @param {number} [limit] **参数解释**： 分页单页大小。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10
     * @param {string} [ruleName] **参数解释**： 分页单页大小。 **约束限制**： 异常规则名称。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [queueName] **参数解释**： 资源池名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkloadRules(listWorkloadRulesRequest?: ListWorkloadRulesRequest): Promise<ListWorkloadRulesResponse> {
        const options = ParamCreater().listWorkloadRules(listWorkloadRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改集群名称。
     * **约束限制**：
     * guestAgent插件版本8.3.1及以上才支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群名称
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ClusterNameReq} [modifyClusterNameRequestBody] **参数解释**： 修改集群名称请求。 **约束限制**： guestAgent插件版本8.3.1及以上才支持。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyClusterName(modifyClusterNameRequest?: ModifyClusterNameRequest): Promise<ModifyClusterNameResponse> {
        const options = ParamCreater().modifyClusterName(modifyClusterNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改集群时区。该操作会将操作系统及数据库的时区都进行修改。
     * **约束限制**：
     * 修改时区依赖集群安装的guestAgent插件，插件版本在8.3.0.202及以上支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群时区
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ClusterTimezoneReq} modifyClusterTimezoneRequestBody **参数解释**： 修改时区请求体。 **约束限制**： 非空。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyClusterTimezone(modifyClusterTimezoneRequest?: ModifyClusterTimezoneRequest): Promise<ModifyClusterTimezoneResponse> {
        const options = ParamCreater().modifyClusterTimezone(modifyClusterTimezoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于停止容灾操作。
     * 容灾状态为“运行中”和“停止失败”时可以执行停止容灾操作。
     * 停止后，将无法进行数据同步，请谨慎操作。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止容灾
     * @param {string} disasterRecoveryId **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pauseDisasterRecovery(pauseDisasterRecoveryRequest?: PauseDisasterRecoveryRequest): Promise<PauseDisasterRecoveryResponse> {
        const options = ParamCreater().pauseDisasterRecovery(pauseDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置集群管理员密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置密码
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResetPasswordRequestBody} resetPasswordRequestBody **参数解释**： 重置密码的请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPassword(resetPasswordRequest?: ResetPasswordRequest): Promise<ResetPasswordResponse> {
        const options = ParamCreater().resetPassword(resetPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容集群，亦可用于添加空闲节点。默认情况下：表示执行扩容操作。
     * 通过create_node_only字段用以区分当前是**扩容**、**添加空闲节点**：
     * - true：仅添加空闲节点
     * - false：表示执行扩容操作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResizeClusterRequestBody} [resizeClusterRequestBody] **参数解释**： 扩容/添加空闲节点操作请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeCluster(resizeClusterRequest?: ResizeClusterRequest): Promise<ResizeClusterResponse> {
        const options = ParamCreater().resizeCluster(resizeClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从空闲节点扩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从空闲节点扩容
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ResizeClusterWithExistedNodesRequestBody} resizeClusterWithExistedNodesRequestBody **参数解释**： 请求信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeClusterWithExistedNodes(resizeClusterWithExistedNodesRequest?: ResizeClusterWithExistedNodesRequest): Promise<ResizeClusterWithExistedNodesResponse> {
        const options = ParamCreater().resizeClusterWithExistedNodes(resizeClusterWithExistedNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下发扩容配置文件，完成扩容准备工作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群扩容前准备
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ExpandPreparationRequestBody} resizePreparationRequestBody **参数解释**： 扩容/添加空闲节点操作请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizePreparation(resizePreparationRequest?: ResizePreparationRequest): Promise<ResizePreparationResponse> {
        const options = ParamCreater().resizePreparation(resizePreparationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {RestartClusterRequestBody} restartClusterRequestBody **参数解释**： 重启集群的请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartCluster(restartClusterRequest?: RestartClusterRequest): Promise<RestartClusterResponse> {
        const options = ParamCreater().restartCluster(restartClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启逻辑集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启逻辑集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} logicalClusterId **参数解释**： 待重启的逻辑集群的ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartLogicalCluster(restartLogicalClusterRequest?: RestartLogicalClusterRequest): Promise<RestartLogicalClusterResponse> {
        const options = ParamCreater().restartLogicalCluster(restartLogicalClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于使用快照恢复集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复集群
     * @param {string} snapshotId **参数解释**： 待恢复的快照ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {RestoreClusterRequestBody} restoreClusterRequestBody **参数解释**： 恢复集群请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreCluster(restoreClusterRequest?: RestoreClusterRequest): Promise<RestoreClusterResponse> {
        const options = ParamCreater().restoreCluster(restoreClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于主备集群进行异常切换，备集群恢复可用状态后进行的容灾恢复操作。
     * 容灾恢复仅8.1.2及以上集群版本支持。
     * 容灾恢复会删除灾备集群数据与新生产集群重新建立容灾关系。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复容灾
     * @param {string} disasterRecoveryId **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreDisaster(restoreDisasterRequest?: RestoreDisasterRequest): Promise<RestoreDisasterResponse> {
        const options = ParamCreater().restoreDisaster(restoreDisasterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复暂停状态下的重分布操作，仅支持DWS2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复重分布
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreRedistribution(restoreRedistributionRequest?: RestoreRedistributionRequest): Promise<RestoreRedistributionResponse> {
        const options = ParamCreater().restoreRedistribution(restoreRedistributionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于恢复表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复表
     * @param {string} snapshotId **参数解释**： 快照ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {RestoreTableRequestBody} restoreTableRequestBody **参数解释**： 恢复表请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreTable(restoreTableRequest?: RestoreTableRequest): Promise<RestoreTableResponse> {
        const options = ParamCreater().restoreTable(restoreTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 轮转加密集群密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 轮转密钥
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {RotateKeyRequestBody} [rotateKeyRequestBody] **参数解释**： 轮转密钥对象。当不传对象时轮转集群加密密钥;当对象传入KMS密钥ID时，轮转集群主密钥。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rotateKey(rotateKeyRequest?: RotateKeyRequest): Promise<RotateKeyResponse> {
        const options = ParamCreater().rotateKey(rotateKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改集群描述信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群描述信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {ClusterDescriptionInfo} saveClusterDescriptionInfoRequestBody **参数解释**： 描述信息请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [namespace] **参数解释**： 命名空间。 **约束限制**： 固定值DWS，不填也是DWS。 **取值范围**： DWS **默认取值**： DWS
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveClusterDescriptionInfo(saveClusterDescriptionInfoRequest?: SaveClusterDescriptionInfoRequest): Promise<SaveClusterDescriptionInfoResponse> {
        const options = ParamCreater().saveClusterDescriptionInfo(saveClusterDescriptionInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新重分布表优先级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新重分布表优先级
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {RedisPriorityConf} setRedistributionPriorityRequestBody **参数解释**： 更新重分布配置请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRedistributionPriority(setRedistributionPriorityRequest?: SetRedistributionPriorityRequest): Promise<SetRedistributionPriorityResponse> {
        const options = ParamCreater().setRedistributionPriority(setRedistributionPriorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群加密信息。非加密集群不支持该功能，返回信息为空。
     * **约束限制**：
     * 转加密集群起始支持版本：8.0.0
     * 转加密集群guestAgent起始支持版本：8.3.0.200
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群加密信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterEncryptInfo(showClusterEncryptInfoRequest?: ShowClusterEncryptInfoRequest): Promise<ShowClusterEncryptInfoResponse> {
        const options = ParamCreater().showClusterEncryptInfo(showClusterEncryptInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群使用的规格详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群规格详情
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [namespace] **参数解释**： 命名空间，一般只填DWS。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterFlavor(showClusterFlavorRequest?: ShowClusterFlavorRequest): Promise<ShowClusterFlavorResponse> {
        const options = ParamCreater().showClusterFlavor(showClusterFlavorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查看当前集群的重分布模式、重分布进度、数据表重分布详情等监控信息。
     * 查看重分布详情功能DWS 2.0 8.1.1.200及以上集群版本支持，其中数据表重分布进度详情仅DWS 2.0 8.2.1及以上集群版本支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询重分布详情
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 分页查询，每页大小。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10
     * @param {number} [offset] **参数解释**： 分页偏移量，从0开始，页数减1。 **约束限制**： 不涉及。 **取值范围**： 大于等于0 **默认取值**： 0
     * @param {string} [dbName] **参数解释**： 数据库名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： null
     * @param {string} [tableName] **参数解释**： 表名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： null
     * @param {string} [type] **参数解释**： 类型，取值来自public.pgxc_redistb表的redistributed字段。多个可用逗号分割。 **约束限制**： 不涉及。 **取值范围**： i：重分布中； y：已完成； n：未开始； **默认取值**： null，即不过滤。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterRedistribution(showClusterRedistributionRequest?: ShowClusterRedistributionRequest): Promise<ShowClusterRedistributionResponse> {
        const options = ParamCreater().showClusterRedistribution(showClusterRedistributionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口可用于查看磁盘扩容操作时支持的扩容范围。
     * **约束限制**：
     * 磁盘扩容功能仅8.1.1.203及以上版本支持，并且创建集群规格需要为云数仓SSD云盘或实时数仓类型。
     * 按需+折扣套餐包消费模式下，存储扩容后超出折扣套餐包部分将按需收费。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询磁盘扩容范围
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterStorageExpandRange(showClusterStorageExpandRangeRequest?: ShowClusterStorageExpandRangeRequest): Promise<ShowClusterStorageExpandRangeResponse> {
        const options = ParamCreater().showClusterStorageExpandRange(showClusterStorageExpandRangeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户侧节点磁盘使用情况信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询磁盘使用情况
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterVolume(showClusterVolumeRequest?: ShowClusterVolumeRequest): Promise<ShowClusterVolumeResponse> {
        const options = ParamCreater().showClusterVolume(showClusterVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询并显示集群列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群列表V2
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusters(showClustersRequest?: ShowClustersRequest): Promise<ShowClustersResponse> {
        const options = ParamCreater().showClusters();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库对象权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库对象权限
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} type **参数解释**： 对象类型。 **取值范围**： - DATABASE：数据库。 - SCHEMA：模式。 - TABLE：表。 - VIEW：视图。 - COLUMN：列。 - FUNCTION：函数。 - SEQUENCE：序列。 - NODEGROUP：节点组。
     * @param {Array<string>} name **参数解释**： 对象名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} database **参数解释**： 数据库名。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [schema] **参数解释**： 模式名，对象类型为TABLE、VIEW、COLUMN、FUNCTION、SEQUENCE时必选。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [table] **参数解释**： 表名，对象类型为COLUMN时必选。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatabaseAuthority(showDatabaseAuthorityRequest?: ShowDatabaseAuthorityRequest): Promise<ShowDatabaseAuthorityResponse> {
        const options = ParamCreater().showDatabaseAuthority(showDatabaseAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获得数据库运维账户状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获得集群运维账户状态
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatabaseOmUserStatus(showDatabaseOmUserStatusRequest?: ShowDatabaseOmUserStatusRequest): Promise<ShowDatabaseOmUserStatusResponse> {
        const options = ParamCreater().showDatabaseOmUserStatus(showDatabaseOmUserStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定用户信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定用户信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} name **参数解释**： 用户名/角色名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatabaseUser(showDatabaseUserRequest?: ShowDatabaseUserRequest): Promise<ShowDatabaseUserResponse> {
        const options = ParamCreater().showDatabaseUser(showDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询单个容灾详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容灾详情
     * @param {string} disasterRecoveryId **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDisasterDetail(showDisasterDetailRequest?: ShowDisasterDetailRequest): Promise<ShowDisasterDetailResponse> {
        const options = ParamCreater().showDisasterDetail(showDisasterDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询容灾进度详情信息操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容灾进度详情
     * @param {string} disasterRecoveryId **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDisasterProgress(showDisasterProgressRequest?: ShowDisasterProgressRequest): Promise<ShowDisasterProgressResponse> {
        const options = ParamCreater().showDisasterProgress(showDisasterProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个实例信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个实例
     * @param {string} instanceId **参数解释**： 实例ID **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstance(showInstanceRequest?: ShowInstanceRequest): Promise<ShowInstanceResponse> {
        const options = ParamCreater().showInstance(showInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL执行信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL执行信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} queryId **参数解释**： 查询ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [ctime] **参数解释**： 采集时间，时间戳。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQueryDetail(showQueryDetailRequest?: ShowQueryDetailRequest): Promise<ShowQueryDetailResponse> {
        const options = ParamCreater().showQueryDetail(showQueryDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取扩容准备信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取扩容准备信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResizePreparation(showResizePreparationRequest?: ShowResizePreparationRequest): Promise<ShowResizePreparationResponse> {
        const options = ParamCreater().showResizePreparation(showResizePreparationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询资源统计。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源统计
     * @param {string} [namespace] **参数解释**： 命名空间。 **约束限制**： 不涉及。 **取值范围**： 固定值dws。 **默认取值**： dws。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceStatistics(showResourceStatisticsRequest?: ShowResourceStatisticsRequest): Promise<ShowResourceStatisticsResponse> {
        const options = ParamCreater().showResourceStatistics(showResourceStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个资源管理计划详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个资源管理计划详细信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkloadPlan(showWorkloadPlanRequest?: ShowWorkloadPlanRequest): Promise<ShowWorkloadPlanResponse> {
        const options = ParamCreater().showWorkloadPlan(showWorkloadPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源管理计划阶段详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源管理计划阶段详细信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} stageId **参数解释**： 计划阶段ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkloadPlanStage(showWorkloadPlanStageRequest?: ShowWorkloadPlanStageRequest): Promise<ShowWorkloadPlanStageResponse> {
        const options = ParamCreater().showWorkloadPlanStage(showWorkloadPlanStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获得资源池详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获得资源池详细信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} queueName **参数解释**： 资源池名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [logicalClusterName] **参数解释**： 逻辑集群名称。非逻辑集群模式下该字段不填，逻辑集群模式下需指定逻辑集群名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkloadQueue(showWorkloadQueueRequest?: ShowWorkloadQueueRequest): Promise<ShowWorkloadQueueResponse> {
        const options = ParamCreater().showWorkloadQueue(showWorkloadQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于缩容集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群缩容
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {ClusterShrinkReq} clusterShrinkReq **参数解释**：  逻辑集群缩容请求体。  **约束限制**：  该值不能为空。  **取值范围**：  不涉及。  **默认取值**：  不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shrinkCluster(shrinkClusterRequest?: ShrinkClusterRequest): Promise<ShrinkClusterResponse> {
        const options = ParamCreater().shrinkCluster(shrinkClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 逻辑集群缩容，支持从弹性池缩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 逻辑集群缩容
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} logicalClusterId **参数解释**： 逻辑集群id。  **约束限制**： 必须是有效的dws逻辑集群ID。  **取值范围**：  36位UUID。  **默认取值**：  不涉及。
     * @param {ShrinkLogicalClusterRequestBody} shrinkLogicalClusterRequestBody **参数解释**： 缩容逻辑集群请求体。 **约束限制**： 必须是非空值。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shrinkLogicalCluster(shrinkLogicalClusterRequest?: ShrinkLogicalClusterRequest): Promise<ShrinkLogicalClusterResponse> {
        const options = ParamCreater().shrinkLogicalCluster(shrinkLogicalClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startCluster(startClusterRequest?: StartClusterRequest): Promise<StartClusterResponse> {
        const options = ParamCreater().startCluster(startClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于启动容灾操作。
     * 容灾状态为“未启动”、“启动失败”和“已停止”时可以执行启动容灾操作。
     * 启动容灾后，生产集群和灾备集群将无法进行恢复、扩容、升级、重启、节点替换、更新密码等操作，此外，灾备集群将无法进行备份操作，请谨慎操作。
     * 当容灾启动后，如果灾备集群容灾正常运行且容灾处于恢复状态中，此状态的集群会计费。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动容灾
     * @param {string} disasterRecoveryId **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startDisasterRecovery(startDisasterRecoveryRequest?: StartDisasterRecoveryRequest): Promise<StartDisasterRecoveryResponse> {
        const options = ParamCreater().startDisasterRecovery(startDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动资源管理计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动资源管理计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startWorkloadPlan(startWorkloadPlanRequest?: StartWorkloadPlanRequest): Promise<StartWorkloadPlanResponse> {
        const options = ParamCreater().startWorkloadPlan(startWorkloadPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopCluster(stopClusterRequest?: StopClusterRequest): Promise<StopClusterResponse> {
        const options = ParamCreater().stopCluster(stopClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于暂停运行状态下的重分布操作，重分布暂停状态可设置重分布优先级，修改重分布并发数等操作。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停重分布
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopRedistribution(stopRedistributionRequest?: StopRedistributionRequest): Promise<StopRedistributionResponse> {
        const options = ParamCreater().stopRedistribution(stopRedistributionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止资源管理计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止资源管理计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopWorkloadPlan(stopWorkloadPlanRequest?: StopWorkloadPlanRequest): Promise<StopWorkloadPlanResponse> {
        const options = ParamCreater().stopWorkloadPlan(stopWorkloadPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于容灾异常场景下进行主备集群切换操作。
     * “异常切换”按钮用于容灾异常或者生产集群故障情况下主备切换操作。
     * 容灾异常切换仅8.1.2及以上集群版本支持。
     * 异常切换会将灾备集群升为主，若原生产集群故障后存在部分数据未同步到灾备集群，那灾备集群升主后将缺少这些数据，切换时请确认容灾最后同步时间，谨慎操作。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 容灾异常切换
     * @param {string} disasterRecoveryId **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchFailoverDisaster(switchFailoverDisasterRequest?: SwitchFailoverDisasterRequest): Promise<SwitchFailoverDisasterResponse> {
        const options = ParamCreater().switchFailoverDisaster(switchFailoverDisasterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当集群状态为“非均衡”时会出现某些节点主实例增多，从而负载压力较大。这种情况下集群状态是正常的，但整体性能要低于均衡状态。可进行集群主备恢复操作将集群状态切换为“可用”状态。  
     * **约束限制**：
     *  集群主备恢复仅8.1.1.202及以上版本支持。 
     *  集群主备恢复将会短暂中断业务，中断时间根据用户自身业务量所决定，建议用户在业务低峰期执行此操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主备恢复
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchOverCluster(switchOverClusterRequest?: SwitchOverClusterRequest): Promise<SwitchOverClusterResponse> {
        const options = ParamCreater().switchOverCluster(switchOverClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换资源管理计划阶段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换资源管理计划阶段
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {WorkloadPlanStageIdReq} switchPlanStageRequestBody **参数解释**： 资源管理计划阶段ID信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchPlanStage(switchPlanStageRequest?: SwitchPlanStageRequest): Promise<SwitchPlanStageResponse> {
        const options = ParamCreater().switchPlanStage(switchPlanStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于容灾进行灾备切换操作。
     * “灾备切换”按钮用于在容灾正常情况下主备倒换操作。
     * 容灾状态为“运行中”时可以执行灾备切换操作。
     * 灾备切换需要一定时间，在此期间，原生产集群将可不用。
     * 不同场景下进行灾备切换，RPO（Recovery Point Object，灾难发生后，系统和数据必须恢复到的时间点要求。）说明如下：
     *   生产集群在“可用”的状态下，RPO&#x3D;0。
     *   生产集群在“不可用”的状态下，无法保证RPO&#x3D;0，但数据至少可恢复到生产集群“最近容灾成功时间”。
     * 仅支持DWS 2.0集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 灾备切换
     * @param {string} disasterRecoveryId **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchoverDisasterRecovery(switchoverDisasterRecoveryRequest?: SwitchoverDisasterRecoveryRequest): Promise<SwitchoverDisasterRecoveryResponse> {
        const options = ParamCreater().switchoverDisasterRecovery(switchoverDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步IAM用户到数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步IAM用户到数据库
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncIamUsers(syncIamUsersRequest?: SyncIamUsersRequest): Promise<SyncIamUsersResponse> {
        const options = ParamCreater().syncIamUsers(syncIamUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新订阅的告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新告警订阅
     * @param {string} alarmSubId **参数解释**： 告警订阅ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {AlarmSubUpdateRequest} [alarmSubUpdateReq] **参数解释**： 更新告警订阅请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmSub(updateAlarmSubRequest?: UpdateAlarmSubRequest): Promise<UpdateAlarmSubResponse> {
        const options = ParamCreater().updateAlarmSub(updateAlarmSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群修改域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群域名
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ModifyClusterDns} dns **参数解释**： 修改域名参数类型。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterDns(updateClusterDnsRequest?: UpdateClusterDnsRequest): Promise<UpdateClusterDnsResponse> {
        const options = ParamCreater().updateClusterDns(updateClusterDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改集群使用的参数配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群参数配置
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} configurationId **参数解释**： 参数组ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ConfigurationParameterValues} updateConfigurationRequestBody **参数解释**： 修改集群参数配置。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConfiguration(updateConfigurationRequest?: UpdateConfigurationRequest): Promise<UpdateConfigurationResponse> {
        const options = ParamCreater().updateConfiguration(updateConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新一个数据源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新数据源
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} extDataSourceId **参数解释**： 数据源ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ReconfigureExtDataSourceActionReq} reconfigure **参数解释**： 更新数据源配置请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDataSource(updateDataSourceRequest?: UpdateDataSourceRequest): Promise<UpdateDataSourceResponse> {
        const options = ParamCreater().updateDataSource(updateDataSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库对象权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库对象权限
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DatabasePermissionReq} updateDatabaseAuthorityRequestBody **参数解释**： 修改数据库对象权限请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabaseAuthority(updateDatabaseAuthorityRequest?: UpdateDatabaseAuthorityRequest): Promise<UpdateDatabaseAuthorityResponse> {
        const options = ParamCreater().updateDatabaseAuthority(updateDatabaseAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定用户信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定用户信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} name **参数解释**： 用户名/角色名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {DatabaseUserInfoReq} updateDatabaseUserInfoRequestBody **参数解释**： 修改用户权限请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabaseUserInfo(updateDatabaseUserInfoRequest?: UpdateDatabaseUserInfoRequest): Promise<UpdateDatabaseUserInfoResponse> {
        const options = ParamCreater().updateDatabaseUserInfo(updateDatabaseUserInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新容灾配置操作。
     * 容灾状态为“未启动”或“已停止”时，可以执行容灾配置修改操作。
     * 新的配置在容灾重新启动后生效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新容灾配置
     * @param {string} disasterRecoveryId **参数解释**： 容灾ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {UpdateDisasterRecoveryRequest} [updateDisasterInfoRequestBody] **参数解释**： 更新容灾配置请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDisasterInfo(updateDisasterInfoRequest?: UpdateDisasterInfoRequest): Promise<UpdateDisasterInfoResponse> {
        const options = ParamCreater().updateDisasterInfo(updateDisasterInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新订阅事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新订阅事件
     * @param {string} eventSubId **参数解释**： 事件订阅ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {EventSubUpdateRequest} eventSubUpdateReq **参数解释**： 更新订阅事件请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEventSub(updateEventSubRequest?: UpdateEventSubRequest): Promise<UpdateEventSubResponse> {
        const options = ParamCreater().updateEventSub(updateEventSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑修改逻辑集群。接口根据提交的请求体判断当前操作是逻辑集群缩容或者扩容。
     * 场景一：原始的逻辑集群有6个节点（两个环），提交请求时的请求体只有1个环，此时为逻辑集群缩容。
     * 场景二：原始的逻辑集群有6个节点（两个环），提交请求时的请求体中有3个环，此时为逻辑集群扩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑逻辑集群
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} logicalClusterId **参数解释**： 指定待编辑逻辑集群的ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {UpdateLogicalClusterRequestBody} updateLogicalClusterRequestBody **参数解释**： 编辑逻辑集群的请求信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogicalCluster(updateLogicalClusterRequest?: UpdateLogicalClusterRequest): Promise<UpdateLogicalClusterResponse> {
        const options = ParamCreater().updateLogicalCluster(updateLogicalClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑逻辑集群增删计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑逻辑集群增删计划
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 逻辑集群增删计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {UpdateLogicalClusterPlanBo} updateLogicalClusterPlanRequestBody **参数解释**： 逻辑集群增删计划请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogicalClusterPlan(updateLogicalClusterPlanRequest?: UpdateLogicalClusterPlanRequest): Promise<UpdateLogicalClusterPlanResponse> {
        const options = ParamCreater().updateLogicalClusterPlan(updateLogicalClusterPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 您可以根据业务需求，设置可维护时间段。建议将可维护时间段设置在业务低峰期，避免业务在维护过程中异常中断。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改运维时间窗
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {MaintenanceWindow} payload **参数解释**： 设置可维护时间段。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMaintenanceWindow(updateMaintenanceWindowRequest?: UpdateMaintenanceWindowRequest): Promise<UpdateMaintenanceWindowResponse> {
        const options = ParamCreater().updateMaintenanceWindow(updateMaintenanceWindowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新资源池资源配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源池资源配置信息
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} queueName **参数解释**： 资源池名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {WorkloadQueueRequest} updateQueueResourcesRequestBody **参数解释**： 资源池请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateQueueResources(updateQueueResourcesRequest?: UpdateQueueResourcesRequest): Promise<UpdateQueueResourcesResponse> {
        const options = ParamCreater().updateQueueResources(updateQueueResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新重分布配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新重分布配置
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {RedistributionConf} updateRedistributionConfigurationsRequestBody **参数解释**： 更新重分布配置请求体。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRedistributionConfigurations(updateRedistributionConfigurationsRequest?: UpdateRedistributionConfigurationsRequest): Promise<UpdateRedistributionConfigurationsResponse> {
        const options = ParamCreater().updateRedistributionConfigurations(updateRedistributionConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新模式空间限额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新模式空间限额
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} databaseName **参数解释**： 数据库名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {WorkloadSchemaReq} updateSchemasRequestBody **参数解释**： 更新模式空间限额请求。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSchemas(updateSchemasRequest?: UpdateSchemasRequest): Promise<UpdateSchemasResponse> {
        const options = ParamCreater().updateSchemas(updateSchemasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改资源管理计划阶段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改资源管理计划阶段
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} planId **参数解释**： 计划ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} stageId **参数解释**： 计划阶段ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {WorkloadPlanStageReq} [updateWorkloadPlanStageRequestBody] **参数解释**： 计划阶段信息。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkloadPlanStage(updateWorkloadPlanStageRequest?: UpdateWorkloadPlanStageRequest): Promise<UpdateWorkloadPlanStageResponse> {
        const options = ParamCreater().updateWorkloadPlanStage(updateWorkloadPlanStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新异常规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新异常规则
     * @param {string} clusterId **参数解释**： 集群ID。获取方法请参见[获取集群ID](dws_02_00068.xml)。 **约束限制**： 必须是有效的dws集群ID。 **取值范围**： 36位UUID。 **默认取值**： 不涉及。
     * @param {string} ruleName **参数解释**： 异常规则名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {AddExceptRuleReq} [updateWorkloadRuleRequestBody] **参数解释**： 异常规则配置请求体。 **约束限制**： 名称不能为空。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkloadRule(updateWorkloadRuleRequest?: UpdateWorkloadRuleRequest): Promise<UpdateWorkloadRuleResponse> {
        const options = ParamCreater().updateWorkloadRule(updateWorkloadRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加资源池的绑定用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addQueueUserList(addQueueUserListRequest?: AddQueueUserListRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues/{queue_name}/users/batch-create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let queueName;

            if (addQueueUserListRequest !== null && addQueueUserListRequest !== undefined) {
                if (addQueueUserListRequest instanceof AddQueueUserListRequest) {
                    clusterId = addQueueUserListRequest.clusterId;
                    queueName = addQueueUserListRequest.queueName;
                    body = addQueueUserListRequest.body
                } else {
                    clusterId = addQueueUserListRequest['cluster_id'];
                    queueName = addQueueUserListRequest['queue_name'];
                    body = addQueueUserListRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addQueueUserList.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling addQueueUserList.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加资源管理计划阶段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addWorkloadPlanStage(addWorkloadPlanStageRequest?: AddWorkloadPlanStageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}/stages",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let planId;

            if (addWorkloadPlanStageRequest !== null && addWorkloadPlanStageRequest !== undefined) {
                if (addWorkloadPlanStageRequest instanceof AddWorkloadPlanStageRequest) {
                    clusterId = addWorkloadPlanStageRequest.clusterId;
                    planId = addWorkloadPlanStageRequest.planId;
                    body = addWorkloadPlanStageRequest.body
                } else {
                    clusterId = addWorkloadPlanStageRequest['cluster_id'];
                    planId = addWorkloadPlanStageRequest['plan_id'];
                    body = addWorkloadPlanStageRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addWorkloadPlanStage.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling addWorkloadPlanStage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加资源池。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addWorkloadQueue(addWorkloadQueueRequest?: AddWorkloadQueueRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (addWorkloadQueueRequest !== null && addWorkloadQueueRequest !== undefined) {
                if (addWorkloadQueueRequest instanceof AddWorkloadQueueRequest) {
                    clusterId = addWorkloadQueueRequest.clusterId;
                    body = addWorkloadQueueRequest.body
                } else {
                    clusterId = addWorkloadQueueRequest['cluster_id'];
                    body = addWorkloadQueueRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addWorkloadQueue.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加异常规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addWorkloadRule(addWorkloadRuleRequest?: AddWorkloadRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/workload/rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (addWorkloadRuleRequest !== null && addWorkloadRuleRequest !== undefined) {
                if (addWorkloadRuleRequest instanceof AddWorkloadRuleRequest) {
                    clusterId = addWorkloadRuleRequest.clusterId;
                    body = addWorkloadRuleRequest.body
                } else {
                    clusterId = addWorkloadRuleRequest['cluster_id'];
                    body = addWorkloadRuleRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addWorkloadRule.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群绑定Eip。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateEip(associateEipRequest?: AssociateEipRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/eips/{eip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let eipId;

            if (associateEipRequest !== null && associateEipRequest !== undefined) {
                if (associateEipRequest instanceof AssociateEipRequest) {
                    clusterId = associateEipRequest.clusterId;
                    eipId = associateEipRequest.eipId;
                } else {
                    clusterId = associateEipRequest['cluster_id'];
                    eipId = associateEipRequest['eip_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling associateEip.');
            }
            if (eipId === null || eipId === undefined) {
            throw new RequiredError('eipId','Required parameter eipId was null or undefined when calling associateEip.');
            }

            options.pathParams = { 'cluster_id': clusterId,'eip_id': eipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群绑定Elb接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateElb(associateElbRequest?: AssociateElbRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/elbs/{elb_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let elbId;

            if (associateElbRequest !== null && associateElbRequest !== undefined) {
                if (associateElbRequest instanceof AssociateElbRequest) {
                    clusterId = associateElbRequest.clusterId;
                    elbId = associateElbRequest.elbId;
                } else {
                    clusterId = associateElbRequest['cluster_id'];
                    elbId = associateElbRequest['elb_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling associateElb.');
            }
            if (elbId === null || elbId === undefined) {
            throw new RequiredError('elbId','Required parameter elbId was null or undefined when calling associateElb.');
            }

            options.pathParams = { 'cluster_id': clusterId,'elb_id': elbId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当用户集群创建后，实际需要的CN数量会随着业务需求而发生变化，因此管理CN节点功能的实现使用户可以根据实际需求动态调整集群CN数量。
         * - 增删CN节点过程中不允许执行其他运维操作。
         * - 增删CN节点过程中需要停止业务操作，建议在业务低峰期或业务中断情况下进行操作。
         * - 增删CN节点时发生故障且回滚失败，需要用户登录后台进行处理，处理方案请参见《故障排除》中的“集群使用&gt;增删CN回滚失败”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateClusterCn(batchCreateClusterCnRequest?: BatchCreateClusterCnRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cns/batch-create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchCreateClusterCnRequest !== null && batchCreateClusterCnRequest !== undefined) {
                if (batchCreateClusterCnRequest instanceof BatchCreateClusterCnRequest) {
                    clusterId = batchCreateClusterCnRequest.clusterId;
                    body = batchCreateClusterCnRequest.body
                } else {
                    clusterId = batchCreateClusterCnRequest['cluster_id'];
                    body = batchCreateClusterCnRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchCreateClusterCn.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定集群批量添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateResourceTag(batchCreateResourceTagRequest?: BatchCreateResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/tags/batch-create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchCreateResourceTagRequest !== null && batchCreateResourceTagRequest !== undefined) {
                if (batchCreateResourceTagRequest instanceof BatchCreateResourceTagRequest) {
                    clusterId = batchCreateResourceTagRequest.clusterId;
                    body = batchCreateResourceTagRequest.body
                } else {
                    clusterId = batchCreateResourceTagRequest['cluster_id'];
                    body = batchCreateResourceTagRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchCreateResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当用户集群创建后，实际需要的CN数量会随着业务需求而发生变化，因此管理CN节点功能的实现使用户可以根据实际需求动态调整集群CN数量。
         * - 增删CN节点过程中不允许执行其他运维操作。
         * - 增删CN节点过程中需要停止业务操作，建议在业务低峰期或业务中断情况下进行操作。
         * - 增删CN节点时发生故障且回滚失败，需要用户登录后台进行处理，处理方案请参见《故障排除》中的“集群使用&gt;增删CN回滚失败”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteClusterCn(batchDeleteClusterCnRequest?: BatchDeleteClusterCnRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cns/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchDeleteClusterCnRequest !== null && batchDeleteClusterCnRequest !== undefined) {
                if (batchDeleteClusterCnRequest instanceof BatchDeleteClusterCnRequest) {
                    clusterId = batchDeleteClusterCnRequest.clusterId;
                    body = batchDeleteClusterCnRequest.body
                } else {
                    clusterId = batchDeleteClusterCnRequest['cluster_id'];
                    body = batchDeleteClusterCnRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchDeleteClusterCn.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定集群批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteResourceTag(batchDeleteResourceTagRequest?: BatchDeleteResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/tags/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchDeleteResourceTagRequest !== null && batchDeleteResourceTagRequest !== undefined) {
                if (batchDeleteResourceTagRequest instanceof BatchDeleteResourceTagRequest) {
                    clusterId = batchDeleteResourceTagRequest.clusterId;
                    body = batchDeleteResourceTagRequest.body
                } else {
                    clusterId = batchDeleteResourceTagRequest['cluster_id'];
                    body = batchDeleteResourceTagRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchDeleteResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当集群进入只读状态时，无法进行数据库相关操作，用户可以在管理控制台解除集群的只读状态。触发只读状态可能是由于磁盘使用率过高，因此需要对集群数据进行清理或扩容。 
         *  **约束限制**：
         *  解除只读支持1.7.2及以上版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelReadonlyCluster(cancelReadonlyClusterRequest?: CancelReadonlyClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cancel-readonly",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (cancelReadonlyClusterRequest !== null && cancelReadonlyClusterRequest !== undefined) {
                if (cancelReadonlyClusterRequest instanceof CancelReadonlyClusterRequest) {
                    clusterId = cancelReadonlyClusterRequest.clusterId;
                } else {
                    clusterId = cancelReadonlyClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling cancelReadonlyCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改集群安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/clusters/{cluster_id}/security-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (changeSecurityGroupRequest !== null && changeSecurityGroupRequest !== undefined) {
                if (changeSecurityGroupRequest instanceof ChangeSecurityGroupRequest) {
                    clusterId = changeSecurityGroupRequest.clusterId;
                    body = changeSecurityGroupRequest.body
                } else {
                    clusterId = changeSecurityGroupRequest['cluster_id'];
                    body = changeSecurityGroupRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling changeSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建集群前预检查，提前识别子网不足、配额不足等问题，避免发起创建集群请求后创建失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkCluster(checkClusterRequest?: CheckClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cluster-precheck",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkClusterRequest !== null && checkClusterRequest !== undefined) {
                if (checkClusterRequest instanceof CheckClusterRequest) {
                    body = checkClusterRequest.body
                } else {
                    body = checkClusterRequest['body'];
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
         * 缩容前检查，确保缩容前、缩容后均满足正常操作要求。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkClusterShrink(checkClusterShrinkRequest?: CheckClusterShrinkRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/shrink-check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let checkItem;
            
            let shrinkCount;

            if (checkClusterShrinkRequest !== null && checkClusterShrinkRequest !== undefined) {
                if (checkClusterShrinkRequest instanceof CheckClusterShrinkRequest) {
                    clusterId = checkClusterShrinkRequest.clusterId;
                    checkItem = checkClusterShrinkRequest.checkItem;
                    shrinkCount = checkClusterShrinkRequest.shrinkCount;
                } else {
                    clusterId = checkClusterShrinkRequest['cluster_id'];
                    checkItem = checkClusterShrinkRequest['check_item'];
                    shrinkCount = checkClusterShrinkRequest['shrink_count'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling checkClusterShrink.');
            }
            if (checkItem === null || checkItem === undefined) {
                throw new RequiredError('checkItem','Required parameter checkItem was null or undefined when calling checkClusterShrink.');
            }
            if (checkItem !== null && checkItem !== undefined) {
                localVarQueryParameter['check_item'] = checkItem;
            }
            if (shrinkCount === null || shrinkCount === undefined) {
                throw new RequiredError('shrinkCount','Required parameter shrinkCount was null or undefined when calling checkClusterShrink.');
            }
            if (shrinkCount !== null && shrinkCount !== undefined) {
                localVarQueryParameter['shrink_count'] = shrinkCount;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询容灾名称是否可用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkDisasterName(checkDisasterNameRequest?: CheckDisasterNameRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/disaster-recovery/check-name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let drName;
            
            let type;
            
            let standbyRegion;
            
            let standbyProjectId;

            if (checkDisasterNameRequest !== null && checkDisasterNameRequest !== undefined) {
                if (checkDisasterNameRequest instanceof CheckDisasterNameRequest) {
                    drName = checkDisasterNameRequest.drName;
                    type = checkDisasterNameRequest.type;
                    standbyRegion = checkDisasterNameRequest.standbyRegion;
                    standbyProjectId = checkDisasterNameRequest.standbyProjectId;
                } else {
                    drName = checkDisasterNameRequest['dr_name'];
                    type = checkDisasterNameRequest['type'];
                    standbyRegion = checkDisasterNameRequest['standby_region'];
                    standbyProjectId = checkDisasterNameRequest['standby_project_id'];
                }
            }

        
            if (drName === null || drName === undefined) {
                throw new RequiredError('drName','Required parameter drName was null or undefined when calling checkDisasterName.');
            }
            if (drName !== null && drName !== undefined) {
                localVarQueryParameter['dr_name'] = drName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (standbyRegion !== null && standbyRegion !== undefined) {
                localVarQueryParameter['standby_region'] = standbyRegion;
            }
            if (standbyProjectId !== null && standbyProjectId !== undefined) {
                localVarQueryParameter['standby_project_id'] = standbyProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群扩容前检查，提前识别子网不足、权限不足等问题导致的扩容失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkGrowCluster(checkGrowClusterRequest?: CheckGrowClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/grow-check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (checkGrowClusterRequest !== null && checkGrowClusterRequest !== undefined) {
                if (checkGrowClusterRequest instanceof CheckGrowClusterRequest) {
                    clusterId = checkGrowClusterRequest.clusterId;
                    body = checkGrowClusterRequest.body
                } else {
                    clusterId = checkGrowClusterRequest['cluster_id'];
                    body = checkGrowClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling checkGrowCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户恢复表名检测。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkTableRestore(checkTableRestoreRequest?: CheckTableRestoreRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/snapshots/{snapshot_id}/table-restore-check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (checkTableRestoreRequest !== null && checkTableRestoreRequest !== undefined) {
                if (checkTableRestoreRequest instanceof CheckTableRestoreRequest) {
                    snapshotId = checkTableRestoreRequest.snapshotId;
                    body = checkTableRestoreRequest.body
                } else {
                    snapshotId = checkTableRestoreRequest['snapshot_id'];
                    body = checkTableRestoreRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling checkTableRestore.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 物理集群转换到逻辑集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        convertToLogicalCluster(convertToLogicalClusterRequest?: ConvertToLogicalClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/convert-to-logical-cluster/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let name;

            if (convertToLogicalClusterRequest !== null && convertToLogicalClusterRequest !== undefined) {
                if (convertToLogicalClusterRequest instanceof ConvertToLogicalClusterRequest) {
                    clusterId = convertToLogicalClusterRequest.clusterId;
                    name = convertToLogicalClusterRequest.name;
                } else {
                    clusterId = convertToLogicalClusterRequest['cluster_id'];
                    name = convertToLogicalClusterRequest['name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling convertToLogicalCluster.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling convertToLogicalCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于复制一个自动快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copySnapshot(copySnapshotRequest?: CopySnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/snapshots/{snapshot_id}/linked-copy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (copySnapshotRequest !== null && copySnapshotRequest !== undefined) {
                if (copySnapshotRequest instanceof CopySnapshotRequest) {
                    snapshotId = copySnapshotRequest.snapshotId;
                    body = copySnapshotRequest.body
                } else {
                    snapshotId = copySnapshotRequest['snapshot_id'];
                    body = copySnapshotRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling copySnapshot.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建告警订阅。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlarmSub(createAlarmSubRequest?: CreateAlarmSubRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarm-subs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAlarmSubRequest !== null && createAlarmSubRequest !== undefined) {
                if (createAlarmSubRequest instanceof CreateAlarmSubRequest) {
                    body = createAlarmSubRequest.body
                } else {
                    body = createAlarmSubRequest['body'];
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
         * 该接口用于创建集群。
         * 集群必须要运行在VPC之内，创建集群前，您需要先创建VPC，并获取VPC和子网的id。
         * 该接口为异步接口，创建集群需要10～15分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createClusterRequest !== null && createClusterRequest !== undefined) {
                if (createClusterRequest instanceof CreateClusterRequest) {
                    body = createClusterRequest.body
                } else {
                    body = createClusterRequest['body'];
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
         * 为指定集群申请域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterDns(createClusterDnsRequest?: CreateClusterDnsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/dns",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createClusterDnsRequest !== null && createClusterDnsRequest !== undefined) {
                if (createClusterDnsRequest instanceof CreateClusterDnsRequest) {
                    clusterId = createClusterDnsRequest.clusterId;
                    body = createClusterDnsRequest.body
                } else {
                    clusterId = createClusterDnsRequest['cluster_id'];
                    body = createClusterDnsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClusterDns.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建集群。
         * 集群必须要运行在VPC之内，创建集群前，您需要先创建VPC，并获取VPC和子网的id。
         * 该接口为异步接口，创建集群需要10～15分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterV2(createClusterV2Request?: CreateClusterV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createClusterV2Request !== null && createClusterV2Request !== undefined) {
                if (createClusterV2Request instanceof CreateClusterV2Request) {
                    body = createClusterV2Request.body
                } else {
                    body = createClusterV2Request['body'];
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
         * 打开或关闭资源管理功能，新集群默认是打开状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterWorkload(createClusterWorkloadRequest?: CreateClusterWorkloadRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createClusterWorkloadRequest !== null && createClusterWorkloadRequest !== undefined) {
                if (createClusterWorkloadRequest instanceof CreateClusterWorkloadRequest) {
                    clusterId = createClusterWorkloadRequest.clusterId;
                    body = createClusterWorkloadRequest.body
                } else {
                    clusterId = createClusterWorkloadRequest['cluster_id'];
                    body = createClusterWorkloadRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClusterWorkload.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建一个数据源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDataSource(createDataSourceRequest?: CreateDataSourceRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ext-data-sources",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createDataSourceRequest !== null && createDataSourceRequest !== undefined) {
                if (createDataSourceRequest instanceof CreateDataSourceRequest) {
                    clusterId = createDataSourceRequest.clusterId;
                    body = createDataSourceRequest.body
                } else {
                    clusterId = createDataSourceRequest['cluster_id'];
                    body = createDataSourceRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createDataSource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据库用户/角色。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabaseUser(createDatabaseUserRequest?: CreateDatabaseUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createDatabaseUserRequest !== null && createDatabaseUserRequest !== undefined) {
                if (createDatabaseUserRequest instanceof CreateDatabaseUserRequest) {
                    clusterId = createDatabaseUserRequest.clusterId;
                    body = createDatabaseUserRequest.body
                } else {
                    clusterId = createDatabaseUserRequest['cluster_id'];
                    body = createDatabaseUserRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createDatabaseUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建集群间容灾。
         * 集群处于可用状态或者非均衡状态才可进行创建容灾操作。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDisasterRecovery(createDisasterRecoveryRequest?: CreateDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recoveries",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDisasterRecoveryRequest !== null && createDisasterRecoveryRequest !== undefined) {
                if (createDisasterRecoveryRequest instanceof CreateDisasterRecoveryRequest) {
                    body = createDisasterRecoveryRequest.body
                } else {
                    body = createDisasterRecoveryRequest['body'];
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
         * 添加订阅的事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEventSub(createEventSubRequest?: CreateEventSubRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/event-subs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEventSubRequest !== null && createEventSubRequest !== undefined) {
                if (createEventSubRequest instanceof CreateEventSubRequest) {
                    body = createEventSubRequest.body
                } else {
                    body = createEventSubRequest['body'];
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
         * 创建逻辑集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLogicalCluster(createLogicalClusterRequest?: CreateLogicalClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createLogicalClusterRequest !== null && createLogicalClusterRequest !== undefined) {
                if (createLogicalClusterRequest instanceof CreateLogicalClusterRequest) {
                    clusterId = createLogicalClusterRequest.clusterId;
                    body = createLogicalClusterRequest.body
                } else {
                    clusterId = createLogicalClusterRequest['cluster_id'];
                    body = createLogicalClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createLogicalCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加逻辑集群定时增删计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLogicalClusterPlan(createLogicalClusterPlanRequest?: CreateLogicalClusterPlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/logical-cluster-plans",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createLogicalClusterPlanRequest !== null && createLogicalClusterPlanRequest !== undefined) {
                if (createLogicalClusterPlanRequest instanceof CreateLogicalClusterPlanRequest) {
                    clusterId = createLogicalClusterPlanRequest.clusterId;
                    body = createLogicalClusterPlanRequest.body
                } else {
                    clusterId = createLogicalClusterPlanRequest['cluster_id'];
                    body = createLogicalClusterPlanRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createLogicalClusterPlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于为指定集群创建快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSnapshot(createSnapshotRequest?: CreateSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/snapshots",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSnapshotRequest !== null && createSnapshotRequest !== undefined) {
                if (createSnapshotRequest instanceof CreateSnapshotRequest) {
                    body = createSnapshotRequest.body
                } else {
                    body = createSnapshotRequest['body'];
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
         * 该接口用于设置快照策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSnapshotPolicy(createSnapshotPolicyRequest?: CreateSnapshotPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/snapshot-policies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createSnapshotPolicyRequest !== null && createSnapshotPolicyRequest !== undefined) {
                if (createSnapshotPolicyRequest instanceof CreateSnapshotPolicyRequest) {
                    clusterId = createSnapshotPolicyRequest.clusterId;
                    body = createSnapshotPolicyRequest.body
                } else {
                    clusterId = createSnapshotPolicyRequest['cluster_id'];
                    body = createSnapshotPolicyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createSnapshotPolicy.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加资源管理计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkloadPlan(createWorkloadPlanRequest?: CreateWorkloadPlanRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createWorkloadPlanRequest !== null && createWorkloadPlanRequest !== undefined) {
                if (createWorkloadPlanRequest instanceof CreateWorkloadPlanRequest) {
                    clusterId = createWorkloadPlanRequest.clusterId;
                    body = createWorkloadPlanRequest.body
                } else {
                    clusterId = createWorkloadPlanRequest['cluster_id'];
                    body = createWorkloadPlanRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createWorkloadPlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除订阅的告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlarmSub(deleteAlarmSubRequest?: DeleteAlarmSubRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/alarm-subs/{alarm_sub_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let alarmSubId;

            if (deleteAlarmSubRequest !== null && deleteAlarmSubRequest !== undefined) {
                if (deleteAlarmSubRequest instanceof DeleteAlarmSubRequest) {
                    alarmSubId = deleteAlarmSubRequest.alarmSubId;
                } else {
                    alarmSubId = deleteAlarmSubRequest['alarm_sub_id'];
                }
            }

        
            if (alarmSubId === null || alarmSubId === undefined) {
            throw new RequiredError('alarmSubId','Required parameter alarmSubId was null or undefined when calling deleteAlarmSub.');
            }

            options.pathParams = { 'alarm_sub_id': alarmSubId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除集群。集群删除后将释放此集群的所有资源，包括客户数据。为了安全起见，请在删除集群前为这个集群创建快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterId = deleteClusterRequest.clusterId;
                    body = deleteClusterRequest.body
                } else {
                    clusterId = deleteClusterRequest['cluster_id'];
                    body = deleteClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定集群域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClusterDns(deleteClusterDnsRequest?: DeleteClusterDnsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/dns",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let type;

            if (deleteClusterDnsRequest !== null && deleteClusterDnsRequest !== undefined) {
                if (deleteClusterDnsRequest instanceof DeleteClusterDnsRequest) {
                    clusterId = deleteClusterDnsRequest.clusterId;
                    type = deleteClusterDnsRequest.type;
                } else {
                    clusterId = deleteClusterDnsRequest['cluster_id'];
                    type = deleteClusterDnsRequest['type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteClusterDns.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling deleteClusterDns.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除空闲节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClusterNodes(deleteClusterNodesRequest?: DeleteClusterNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/nodes/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (deleteClusterNodesRequest !== null && deleteClusterNodesRequest !== undefined) {
                if (deleteClusterNodesRequest instanceof DeleteClusterNodesRequest) {
                    clusterId = deleteClusterNodesRequest.clusterId;
                    body = deleteClusterNodesRequest.body
                } else {
                    clusterId = deleteClusterNodesRequest['cluster_id'];
                    body = deleteClusterNodesRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteClusterNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除一个数据源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDataSource(deleteDataSourceRequest?: DeleteDataSourceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ext-data-sources/{ext_data_source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let extDataSourceId;

            if (deleteDataSourceRequest !== null && deleteDataSourceRequest !== undefined) {
                if (deleteDataSourceRequest instanceof DeleteDataSourceRequest) {
                    clusterId = deleteDataSourceRequest.clusterId;
                    extDataSourceId = deleteDataSourceRequest.extDataSourceId;
                } else {
                    clusterId = deleteDataSourceRequest['cluster_id'];
                    extDataSourceId = deleteDataSourceRequest['ext_data_source_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteDataSource.');
            }
            if (extDataSourceId === null || extDataSourceId === undefined) {
            throw new RequiredError('extDataSourceId','Required parameter extDataSourceId was null or undefined when calling deleteDataSource.');
            }

            options.pathParams = { 'cluster_id': clusterId,'ext_data_source_id': extDataSourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabaseUser(deleteDatabaseUserRequest?: DeleteDatabaseUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let name;
            
            let cascade;

            if (deleteDatabaseUserRequest !== null && deleteDatabaseUserRequest !== undefined) {
                if (deleteDatabaseUserRequest instanceof DeleteDatabaseUserRequest) {
                    clusterId = deleteDatabaseUserRequest.clusterId;
                    name = deleteDatabaseUserRequest.name;
                    cascade = deleteDatabaseUserRequest.cascade;
                } else {
                    clusterId = deleteDatabaseUserRequest['cluster_id'];
                    name = deleteDatabaseUserRequest['name'];
                    cascade = deleteDatabaseUserRequest['cascade'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteDatabaseUser.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteDatabaseUser.');
            }
            if (cascade !== null && cascade !== undefined) {
                localVarQueryParameter['cascade'] = cascade;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除容灾操作。
         * 容灾状态为“创建失败”、“未启动”、“启动失败”、“已停止”、“停止失败”和“异常”时可以执行删除容灾操作。
         * 删除后，将无法进行数据同步，且不可恢复，请谨慎操作。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDisasterRecovery(deleteDisasterRecoveryRequest?: DeleteDisasterRecoveryRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let disasterRecoveryId;
            
            let needSendRequest;

            if (deleteDisasterRecoveryRequest !== null && deleteDisasterRecoveryRequest !== undefined) {
                if (deleteDisasterRecoveryRequest instanceof DeleteDisasterRecoveryRequest) {
                    disasterRecoveryId = deleteDisasterRecoveryRequest.disasterRecoveryId;
                    needSendRequest = deleteDisasterRecoveryRequest.needSendRequest;
                } else {
                    disasterRecoveryId = deleteDisasterRecoveryRequest['disaster_recovery_id'];
                    needSendRequest = deleteDisasterRecoveryRequest['need_send_request'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling deleteDisasterRecovery.');
            }
            if (needSendRequest !== null && needSendRequest !== undefined) {
                localVarQueryParameter['need_send_request'] = needSendRequest;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除集群。集群删除后将释放此集群的所有资源，包括客户数据。为了安全起见，请在删除集群前为这个集群创建快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDwsCluster(deleteDwsClusterRequest?: DeleteDwsClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let keepLastManualBackup;
            
            let releaseEipType;

            if (deleteDwsClusterRequest !== null && deleteDwsClusterRequest !== undefined) {
                if (deleteDwsClusterRequest instanceof DeleteDwsClusterRequest) {
                    clusterId = deleteDwsClusterRequest.clusterId;
                    keepLastManualBackup = deleteDwsClusterRequest.keepLastManualBackup;
                    releaseEipType = deleteDwsClusterRequest.releaseEipType;
                } else {
                    clusterId = deleteDwsClusterRequest['cluster_id'];
                    keepLastManualBackup = deleteDwsClusterRequest['keep_last_manual_backup'];
                    releaseEipType = deleteDwsClusterRequest['release_eip_type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteDwsCluster.');
            }
            if (keepLastManualBackup !== null && keepLastManualBackup !== undefined) {
                localVarQueryParameter['keep_last_manual_backup'] = keepLastManualBackup;
            }
            if (releaseEipType !== null && releaseEipType !== undefined) {
                localVarQueryParameter['release_eip_type'] = releaseEipType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除订阅的事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEventSub(deleteEventSubRequest?: DeleteEventSubRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/event-subs/{event_sub_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let eventSubId;

            if (deleteEventSubRequest !== null && deleteEventSubRequest !== undefined) {
                if (deleteEventSubRequest instanceof DeleteEventSubRequest) {
                    eventSubId = deleteEventSubRequest.eventSubId;
                } else {
                    eventSubId = deleteEventSubRequest['event_sub_id'];
                }
            }

        
            if (eventSubId === null || eventSubId === undefined) {
            throw new RequiredError('eventSubId','Required parameter eventSubId was null or undefined when calling deleteEventSub.');
            }

            options.pathParams = { 'event_sub_id': eventSubId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除逻辑集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLogicalCluster(deleteLogicalClusterRequest?: DeleteLogicalClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters/{logical_cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let logicalClusterId;

            if (deleteLogicalClusterRequest !== null && deleteLogicalClusterRequest !== undefined) {
                if (deleteLogicalClusterRequest instanceof DeleteLogicalClusterRequest) {
                    clusterId = deleteLogicalClusterRequest.clusterId;
                    logicalClusterId = deleteLogicalClusterRequest.logicalClusterId;
                } else {
                    clusterId = deleteLogicalClusterRequest['cluster_id'];
                    logicalClusterId = deleteLogicalClusterRequest['logical_cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteLogicalCluster.');
            }
            if (logicalClusterId === null || logicalClusterId === undefined) {
            throw new RequiredError('logicalClusterId','Required parameter logicalClusterId was null or undefined when calling deleteLogicalCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId,'logical_cluster_id': logicalClusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除逻辑集群定时增删计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLogicalClusterPlan(deleteLogicalClusterPlanRequest?: DeleteLogicalClusterPlanRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/clusters/{cluster_id}/logical-cluster-plans/{plan_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;

            if (deleteLogicalClusterPlanRequest !== null && deleteLogicalClusterPlanRequest !== undefined) {
                if (deleteLogicalClusterPlanRequest instanceof DeleteLogicalClusterPlanRequest) {
                    clusterId = deleteLogicalClusterPlanRequest.clusterId;
                    planId = deleteLogicalClusterPlanRequest.planId;
                } else {
                    clusterId = deleteLogicalClusterPlanRequest['cluster_id'];
                    planId = deleteLogicalClusterPlanRequest['plan_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteLogicalClusterPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling deleteLogicalClusterPlan.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源池的绑定用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteQueueUserList(deleteQueueUserListRequest?: DeleteQueueUserListRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues/{queue_name}/users/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let queueName;

            if (deleteQueueUserListRequest !== null && deleteQueueUserListRequest !== undefined) {
                if (deleteQueueUserListRequest instanceof DeleteQueueUserListRequest) {
                    clusterId = deleteQueueUserListRequest.clusterId;
                    queueName = deleteQueueUserListRequest.queueName;
                    body = deleteQueueUserListRequest.body
                } else {
                    clusterId = deleteQueueUserListRequest['cluster_id'];
                    queueName = deleteQueueUserListRequest['queue_name'];
                    body = deleteQueueUserListRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteQueueUserList.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling deleteQueueUserList.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除一个指定手动快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/snapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotId;

            if (deleteSnapshotRequest !== null && deleteSnapshotRequest !== undefined) {
                if (deleteSnapshotRequest instanceof DeleteSnapshotRequest) {
                    snapshotId = deleteSnapshotRequest.snapshotId;
                } else {
                    snapshotId = deleteSnapshotRequest['snapshot_id'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling deleteSnapshot.');
            }

            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除一个快照策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSnapshotPolicy(deleteSnapshotPolicyRequest?: DeleteSnapshotPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/snapshot-policies/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let id;

            if (deleteSnapshotPolicyRequest !== null && deleteSnapshotPolicyRequest !== undefined) {
                if (deleteSnapshotPolicyRequest instanceof DeleteSnapshotPolicyRequest) {
                    clusterId = deleteSnapshotPolicyRequest.clusterId;
                    id = deleteSnapshotPolicyRequest.id;
                } else {
                    clusterId = deleteSnapshotPolicyRequest['cluster_id'];
                    id = deleteSnapshotPolicyRequest['id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteSnapshotPolicy.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSnapshotPolicy.');
            }

            options.pathParams = { 'cluster_id': clusterId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源管理计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkloadPlan(deleteWorkloadPlanRequest?: DeleteWorkloadPlanRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;

            if (deleteWorkloadPlanRequest !== null && deleteWorkloadPlanRequest !== undefined) {
                if (deleteWorkloadPlanRequest instanceof DeleteWorkloadPlanRequest) {
                    clusterId = deleteWorkloadPlanRequest.clusterId;
                    planId = deleteWorkloadPlanRequest.planId;
                } else {
                    clusterId = deleteWorkloadPlanRequest['cluster_id'];
                    planId = deleteWorkloadPlanRequest['plan_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteWorkloadPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling deleteWorkloadPlan.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源管理计划阶段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkloadPlanStage(deleteWorkloadPlanStageRequest?: DeleteWorkloadPlanStageRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}/stages/{stage_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;
            
            let stageId;

            if (deleteWorkloadPlanStageRequest !== null && deleteWorkloadPlanStageRequest !== undefined) {
                if (deleteWorkloadPlanStageRequest instanceof DeleteWorkloadPlanStageRequest) {
                    clusterId = deleteWorkloadPlanStageRequest.clusterId;
                    planId = deleteWorkloadPlanStageRequest.planId;
                    stageId = deleteWorkloadPlanStageRequest.stageId;
                } else {
                    clusterId = deleteWorkloadPlanStageRequest['cluster_id'];
                    planId = deleteWorkloadPlanStageRequest['plan_id'];
                    stageId = deleteWorkloadPlanStageRequest['stage_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteWorkloadPlanStage.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling deleteWorkloadPlanStage.');
            }
            if (stageId === null || stageId === undefined) {
            throw new RequiredError('stageId','Required parameter stageId was null or undefined when calling deleteWorkloadPlanStage.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId,'stage_id': stageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除资源池。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkloadQueue(deleteWorkloadQueueRequest?: DeleteWorkloadQueueRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let workloadQueueName;
            
            let logicalClusterName;

            if (deleteWorkloadQueueRequest !== null && deleteWorkloadQueueRequest !== undefined) {
                if (deleteWorkloadQueueRequest instanceof DeleteWorkloadQueueRequest) {
                    clusterId = deleteWorkloadQueueRequest.clusterId;
                    workloadQueueName = deleteWorkloadQueueRequest.workloadQueueName;
                    logicalClusterName = deleteWorkloadQueueRequest.logicalClusterName;
                } else {
                    clusterId = deleteWorkloadQueueRequest['cluster_id'];
                    workloadQueueName = deleteWorkloadQueueRequest['workload_queue_name'];
                    logicalClusterName = deleteWorkloadQueueRequest['logical_cluster_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteWorkloadQueue.');
            }
            if (workloadQueueName === null || workloadQueueName === undefined) {
                throw new RequiredError('workloadQueueName','Required parameter workloadQueueName was null or undefined when calling deleteWorkloadQueue.');
            }
            if (workloadQueueName !== null && workloadQueueName !== undefined) {
                localVarQueryParameter['workload_queue_name'] = workloadQueueName;
            }
            if (logicalClusterName !== null && logicalClusterName !== undefined) {
                localVarQueryParameter['logical_cluster_name'] = logicalClusterName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除异常规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkloadRule(deleteWorkloadRuleRequest?: DeleteWorkloadRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/clusters/{cluster_id}/workload/rules/{rule_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let ruleName;

            if (deleteWorkloadRuleRequest !== null && deleteWorkloadRuleRequest !== undefined) {
                if (deleteWorkloadRuleRequest instanceof DeleteWorkloadRuleRequest) {
                    clusterId = deleteWorkloadRuleRequest.clusterId;
                    ruleName = deleteWorkloadRuleRequest.ruleName;
                } else {
                    clusterId = deleteWorkloadRuleRequest['cluster_id'];
                    ruleName = deleteWorkloadRuleRequest['rule_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteWorkloadRule.');
            }
            if (ruleName === null || ruleName === undefined) {
            throw new RequiredError('ruleName','Required parameter ruleName was null or undefined when calling deleteWorkloadRule.');
            }

            options.pathParams = { 'cluster_id': clusterId,'rule_name': ruleName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停用逻辑集群定时增删计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableLogicalClusterPlan(disableLogicalClusterPlanRequest?: DisableLogicalClusterPlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/logical-cluster-plans/{plan_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;

            if (disableLogicalClusterPlanRequest !== null && disableLogicalClusterPlanRequest !== undefined) {
                if (disableLogicalClusterPlanRequest instanceof DisableLogicalClusterPlanRequest) {
                    clusterId = disableLogicalClusterPlanRequest.clusterId;
                    planId = disableLogicalClusterPlanRequest.planId;
                } else {
                    clusterId = disableLogicalClusterPlanRequest['cluster_id'];
                    planId = disableLogicalClusterPlanRequest['plan_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling disableLogicalClusterPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling disableLogicalClusterPlan.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于关闭集群LTS云日志服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableLtsLogs(disableLtsLogsRequest?: DisableLtsLogsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/lts-logs/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (disableLtsLogsRequest !== null && disableLtsLogsRequest !== undefined) {
                if (disableLtsLogsRequest instanceof DisableLtsLogsRequest) {
                    clusterId = disableLtsLogsRequest.clusterId;
                } else {
                    clusterId = disableLtsLogsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling disableLtsLogs.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群解绑Eip。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateEip(disassociateEipRequest?: DisassociateEipRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/eips/{eip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let eipId;

            if (disassociateEipRequest !== null && disassociateEipRequest !== undefined) {
                if (disassociateEipRequest instanceof DisassociateEipRequest) {
                    clusterId = disassociateEipRequest.clusterId;
                    eipId = disassociateEipRequest.eipId;
                } else {
                    clusterId = disassociateEipRequest['cluster_id'];
                    eipId = disassociateEipRequest['eip_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling disassociateEip.');
            }
            if (eipId === null || eipId === undefined) {
            throw new RequiredError('eipId','Required parameter eipId was null or undefined when calling disassociateEip.');
            }

            options.pathParams = { 'cluster_id': clusterId,'eip_id': eipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群解绑Elb接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateElb(disassociateElbRequest?: DisassociateElbRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/elbs/{elb_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let elbId;

            if (disassociateElbRequest !== null && disassociateElbRequest !== undefined) {
                if (disassociateElbRequest instanceof DisassociateElbRequest) {
                    clusterId = disassociateElbRequest.clusterId;
                    elbId = disassociateElbRequest.elbId;
                } else {
                    clusterId = disassociateElbRequest['cluster_id'];
                    elbId = disassociateElbRequest['elb_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling disassociateElb.');
            }
            if (elbId === null || elbId === undefined) {
            throw new RequiredError('elbId','Required parameter elbId was null or undefined when calling disassociateElb.');
            }

            options.pathParams = { 'cluster_id': clusterId,'elb_id': elbId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换逻辑集群开关，仅用于控制逻辑集群相关功能模块是否在页面展示。
         * 在集群已经是逻辑集群的场景下，修改该接口无任何作用及影响。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableLogicalCluster(enableLogicalClusterRequest?: EnableLogicalClusterRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters/enable",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (enableLogicalClusterRequest !== null && enableLogicalClusterRequest !== undefined) {
                if (enableLogicalClusterRequest instanceof EnableLogicalClusterRequest) {
                    clusterId = enableLogicalClusterRequest.clusterId;
                    body = enableLogicalClusterRequest.body
                } else {
                    clusterId = enableLogicalClusterRequest['cluster_id'];
                    body = enableLogicalClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling enableLogicalCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用逻辑集群定时增删计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableLogicalClusterPlan(enableLogicalClusterPlanRequest?: EnableLogicalClusterPlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/logical-cluster-plans/{plan_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;

            if (enableLogicalClusterPlanRequest !== null && enableLogicalClusterPlanRequest !== undefined) {
                if (enableLogicalClusterPlanRequest instanceof EnableLogicalClusterPlanRequest) {
                    clusterId = enableLogicalClusterPlanRequest.clusterId;
                    planId = enableLogicalClusterPlanRequest.planId;
                } else {
                    clusterId = enableLogicalClusterPlanRequest['cluster_id'];
                    planId = enableLogicalClusterPlanRequest['plan_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling enableLogicalClusterPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling enableLogicalClusterPlan.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于开启集群LTS云日志服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableLtsLogs(enableLtsLogsRequest?: EnableLtsLogsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/lts-logs/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (enableLtsLogsRequest !== null && enableLtsLogsRequest !== undefined) {
                if (enableLtsLogsRequest instanceof EnableLtsLogsRequest) {
                    clusterId = enableLtsLogsRequest.clusterId;
                } else {
                    clusterId = enableLtsLogsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling enableLtsLogs.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 转加密集群。
         * **约束限制**：
         * 转加密集群起始支持版本：8.0.0
         * 转加密集群guestAgent起始支持版本：8.3.0.200
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        encryptCluster(encryptClusterRequest?: EncryptClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/encrypt",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (encryptClusterRequest !== null && encryptClusterRequest !== undefined) {
                if (encryptClusterRequest instanceof EncryptClusterRequest) {
                    clusterId = encryptClusterRequest.clusterId;
                    body = encryptClusterRequest.body
                } else {
                    clusterId = encryptClusterRequest['cluster_id'];
                    body = encryptClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling encryptCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下发集群升级相关操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeClusterUpgradeAction(executeClusterUpgradeActionRequest?: ExecuteClusterUpgradeActionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/upgrade-management/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (executeClusterUpgradeActionRequest !== null && executeClusterUpgradeActionRequest !== undefined) {
                if (executeClusterUpgradeActionRequest instanceof ExecuteClusterUpgradeActionRequest) {
                    clusterId = executeClusterUpgradeActionRequest.clusterId;
                    body = executeClusterUpgradeActionRequest.body
                } else {
                    clusterId = executeClusterUpgradeActionRequest['cluster_id'];
                    body = executeClusterUpgradeActionRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling executeClusterUpgradeAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 进行数据库运维账户操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeDatabaseOmUserAction(executeDatabaseOmUserActionRequest?: ExecuteDatabaseOmUserActionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/om-user/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (executeDatabaseOmUserActionRequest !== null && executeDatabaseOmUserActionRequest !== undefined) {
                if (executeDatabaseOmUserActionRequest instanceof ExecuteDatabaseOmUserActionRequest) {
                    clusterId = executeDatabaseOmUserActionRequest.clusterId;
                    body = executeDatabaseOmUserActionRequest.body
                } else {
                    clusterId = executeDatabaseOmUserActionRequest['cluster_id'];
                    body = executeDatabaseOmUserActionRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling executeDatabaseOmUserAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行规格变更。
         * **约束限制**：
         * 包周期集群暂不支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeFlavorChange(executeFlavorChangeRequest?: ExecuteFlavorChangeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/flavor",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (executeFlavorChangeRequest !== null && executeFlavorChangeRequest !== undefined) {
                if (executeFlavorChangeRequest instanceof ExecuteFlavorChangeRequest) {
                    clusterId = executeFlavorChangeRequest.clusterId;
                    body = executeFlavorChangeRequest.body
                } else {
                    clusterId = executeFlavorChangeRequest['cluster_id'];
                    body = executeFlavorChangeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling executeFlavorChange.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于集群扩容后将老节点数据均匀分布到新扩节点的数据重分布操作，数据“重分布”后将大大提升业务响应速率。
         * 重分布功能DWS 2.0 8.1.1.200及以上集群版本支持。
         * 离线调度重分布模式在8.2.0及以上版本将不再支持。
         * 只有在扩容之后，集群任务信息为“待重分布”状态时才能手动使用“重分布”功能，其他时段该功能不可使用。
         * 在扩容阶段也可以选择重分布模式等高级配置，详情参见设置高级配置。
         * 重分布队列的排序依据表的relpage大小进行，为确保relpage大小正确，建议在重分布之前对需要重分布的表执行analyze操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeRedistributionCluster(executeRedistributionClusterRequest?: ExecuteRedistributionClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/redistribution",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (executeRedistributionClusterRequest !== null && executeRedistributionClusterRequest !== undefined) {
                if (executeRedistributionClusterRequest instanceof ExecuteRedistributionClusterRequest) {
                    clusterId = executeRedistributionClusterRequest.clusterId;
                    body = executeRedistributionClusterRequest.body
                } else {
                    clusterId = executeRedistributionClusterRequest['cluster_id'];
                    body = executeRedistributionClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling executeRedistributionCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 随着客户业务的发展，磁盘空间往往最先出现资源瓶颈，在其他资源尚且充足的情况下，通过磁盘扩容可快速缓解存储资源瓶颈现象，操作过程中无需暂停业务，并且不会造成CPU、内存等资源浪费。  
         *  **约束限制**：
         * 磁盘扩容功能仅8.1.1.203及以上版本支持，并且创建集群规格需要为云数仓SSD云盘或实时数仓类型。  
         * 按需+折扣套餐包消费模式下，存储扩容后超出折扣套餐包部分将按需收费。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandInstanceStorage(expandInstanceStorageRequest?: ExpandInstanceStorageRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/expand-instance-storage",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (expandInstanceStorageRequest !== null && expandInstanceStorageRequest !== undefined) {
                if (expandInstanceStorageRequest instanceof ExpandInstanceStorageRequest) {
                    clusterId = expandInstanceStorageRequest.clusterId;
                    body = expandInstanceStorageRequest.body
                } else {
                    clusterId = expandInstanceStorageRequest['cluster_id'];
                    body = expandInstanceStorageRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling expandInstanceStorage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出数据库用户/角色，接口返回的是输出流，xlsx文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportDatabaseUsers(exportDatabaseUsersRequest?: ExportDatabaseUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;
            
            let type;

            if (exportDatabaseUsersRequest !== null && exportDatabaseUsersRequest !== undefined) {
                if (exportDatabaseUsersRequest instanceof ExportDatabaseUsersRequest) {
                    clusterId = exportDatabaseUsersRequest.clusterId;
                    offset = exportDatabaseUsersRequest.offset;
                    limit = exportDatabaseUsersRequest.limit;
                    type = exportDatabaseUsersRequest.type;
                } else {
                    clusterId = exportDatabaseUsersRequest['cluster_id'];
                    offset = exportDatabaseUsersRequest['offset'];
                    limit = exportDatabaseUsersRequest['limit'];
                    type = exportDatabaseUsersRequest['type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling exportDatabaseUsers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出数据库用户/角色的权限列表，接口返回的是输出流，xlsx文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportUserAuthority(exportUserAuthorityRequest?: ExportUserAuthorityRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users/{name}/authority/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let name;
            
            let offset;
            
            let limit;

            if (exportUserAuthorityRequest !== null && exportUserAuthorityRequest !== undefined) {
                if (exportUserAuthorityRequest instanceof ExportUserAuthorityRequest) {
                    clusterId = exportUserAuthorityRequest.clusterId;
                    name = exportUserAuthorityRequest.name;
                    offset = exportUserAuthorityRequest.offset;
                    limit = exportUserAuthorityRequest.limit;
                } else {
                    clusterId = exportUserAuthorityRequest['cluster_id'];
                    name = exportUserAuthorityRequest['name'];
                    offset = exportUserAuthorityRequest['offset'];
                    limit = exportUserAuthorityRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling exportUserAuthority.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling exportUserAuthority.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmConfigs(listAlarmConfigsRequest?: ListAlarmConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAlarmConfigsRequest !== null && listAlarmConfigsRequest !== undefined) {
                if (listAlarmConfigsRequest instanceof ListAlarmConfigsRequest) {
                    offset = listAlarmConfigsRequest.offset;
                    limit = listAlarmConfigsRequest.limit;
                } else {
                    offset = listAlarmConfigsRequest['offset'];
                    limit = listAlarmConfigsRequest['limit'];
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
         * 查询告警详情列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmDetail(listAlarmDetailRequest?: ListAlarmDetailRequest) {
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
            
            let timeZone;
            
            let offset;
            
            let limit;

            if (listAlarmDetailRequest !== null && listAlarmDetailRequest !== undefined) {
                if (listAlarmDetailRequest instanceof ListAlarmDetailRequest) {
                    timeZone = listAlarmDetailRequest.timeZone;
                    offset = listAlarmDetailRequest.offset;
                    limit = listAlarmDetailRequest.limit;
                } else {
                    timeZone = listAlarmDetailRequest['time_zone'];
                    offset = listAlarmDetailRequest['offset'];
                    limit = listAlarmDetailRequest['limit'];
                }
            }

        
            if (timeZone !== null && timeZone !== undefined) {
                localVarQueryParameter['time_zone'] = timeZone;
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
         * 查询告警统计。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmStatistic(listAlarmStatisticRequest?: ListAlarmStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let timeZone;

            if (listAlarmStatisticRequest !== null && listAlarmStatisticRequest !== undefined) {
                if (listAlarmStatisticRequest instanceof ListAlarmStatisticRequest) {
                    timeZone = listAlarmStatisticRequest.timeZone;
                } else {
                    timeZone = listAlarmStatisticRequest['time_zone'];
                }
            }

        
            if (timeZone !== null && timeZone !== undefined) {
                localVarQueryParameter['time_zone'] = timeZone;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询订阅告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmSubs(listAlarmSubsRequest?: ListAlarmSubsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-subs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAlarmSubsRequest !== null && listAlarmSubsRequest !== undefined) {
                if (listAlarmSubsRequest instanceof ListAlarmSubsRequest) {
                    offset = listAlarmSubsRequest.offset;
                    limit = listAlarmSubsRequest.limit;
                } else {
                    offset = listAlarmSubsRequest['offset'];
                    limit = listAlarmSubsRequest['limit'];
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
         * 查询审计日志记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditLog(listAuditLogRequest?: ListAuditLogRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/audit-log-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listAuditLogRequest !== null && listAuditLogRequest !== undefined) {
                if (listAuditLogRequest instanceof ListAuditLogRequest) {
                    clusterId = listAuditLogRequest.clusterId;
                } else {
                    clusterId = listAuditLogRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAuditLog.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在创建实例时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/availability-zones",
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
         * 该接口用于查询可用的容灾集群列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableDisasterClusters(listAvailableDisasterClustersRequest?: ListAvailableDisasterClustersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/disaster-recovery-clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let primaryClusterId;
            
            let standbyAzCode;
            
            let primarySpecId;
            
            let primaryClusterDnNum;
            
            let standbyRegion;
            
            let standbyProjectId;
            
            let drType;
            
            let datastoreType;
            
            let datastoreVersion;

            if (listAvailableDisasterClustersRequest !== null && listAvailableDisasterClustersRequest !== undefined) {
                if (listAvailableDisasterClustersRequest instanceof ListAvailableDisasterClustersRequest) {
                    primaryClusterId = listAvailableDisasterClustersRequest.primaryClusterId;
                    standbyAzCode = listAvailableDisasterClustersRequest.standbyAzCode;
                    primarySpecId = listAvailableDisasterClustersRequest.primarySpecId;
                    primaryClusterDnNum = listAvailableDisasterClustersRequest.primaryClusterDnNum;
                    standbyRegion = listAvailableDisasterClustersRequest.standbyRegion;
                    standbyProjectId = listAvailableDisasterClustersRequest.standbyProjectId;
                    drType = listAvailableDisasterClustersRequest.drType;
                    datastoreType = listAvailableDisasterClustersRequest.datastoreType;
                    datastoreVersion = listAvailableDisasterClustersRequest.datastoreVersion;
                } else {
                    primaryClusterId = listAvailableDisasterClustersRequest['primary_cluster_id'];
                    standbyAzCode = listAvailableDisasterClustersRequest['standby_az_code'];
                    primarySpecId = listAvailableDisasterClustersRequest['primary_spec_id'];
                    primaryClusterDnNum = listAvailableDisasterClustersRequest['primary_cluster_dn_num'];
                    standbyRegion = listAvailableDisasterClustersRequest['standby_region'];
                    standbyProjectId = listAvailableDisasterClustersRequest['standby_project_id'];
                    drType = listAvailableDisasterClustersRequest['dr_type'];
                    datastoreType = listAvailableDisasterClustersRequest['datastore_type'];
                    datastoreVersion = listAvailableDisasterClustersRequest['datastore_version'];
                }
            }

        
            if (primaryClusterId === null || primaryClusterId === undefined) {
                throw new RequiredError('primaryClusterId','Required parameter primaryClusterId was null or undefined when calling listAvailableDisasterClusters.');
            }
            if (primaryClusterId !== null && primaryClusterId !== undefined) {
                localVarQueryParameter['primary_cluster_id'] = primaryClusterId;
            }
            if (standbyAzCode === null || standbyAzCode === undefined) {
                throw new RequiredError('standbyAzCode','Required parameter standbyAzCode was null or undefined when calling listAvailableDisasterClusters.');
            }
            if (standbyAzCode !== null && standbyAzCode !== undefined) {
                localVarQueryParameter['standby_az_code'] = standbyAzCode;
            }
            if (primarySpecId !== null && primarySpecId !== undefined) {
                localVarQueryParameter['primary_spec_id'] = primarySpecId;
            }
            if (primaryClusterDnNum !== null && primaryClusterDnNum !== undefined) {
                localVarQueryParameter['primary_cluster_dn_num'] = primaryClusterDnNum;
            }
            if (standbyRegion !== null && standbyRegion !== undefined) {
                localVarQueryParameter['standby_region'] = standbyRegion;
            }
            if (standbyProjectId !== null && standbyProjectId !== undefined) {
                localVarQueryParameter['standby_project_id'] = standbyProjectId;
            }
            if (drType !== null && drType !== undefined) {
                localVarQueryParameter['dr_type'] = drType;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (datastoreVersion !== null && datastoreVersion !== undefined) {
                localVarQueryParameter['datastore_version'] = datastoreVersion;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterActions(listClusterActionsRequest?: ListClusterActionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/actions/{action_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let actionName;

            if (listClusterActionsRequest !== null && listClusterActionsRequest !== undefined) {
                if (listClusterActionsRequest instanceof ListClusterActionsRequest) {
                    clusterId = listClusterActionsRequest.clusterId;
                    actionName = listClusterActionsRequest.actionName;
                } else {
                    clusterId = listClusterActionsRequest['cluster_id'];
                    actionName = listClusterActionsRequest['action_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterActions.');
            }
            if (actionName === null || actionName === undefined) {
            throw new RequiredError('actionName','Required parameter actionName was null or undefined when calling listClusterActions.');
            }

            options.pathParams = { 'cluster_id': clusterId,'action_name': actionName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群的CN节点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterCn(listClusterCnRequest?: ListClusterCnRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cns",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterCnRequest !== null && listClusterCnRequest !== undefined) {
                if (listClusterCnRequest instanceof ListClusterCnRequest) {
                    clusterId = listClusterCnRequest.clusterId;
                } else {
                    clusterId = listClusterCnRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterCn.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群所关联的参数组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterConfigurations(listClusterConfigurationsRequest?: ListClusterConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterConfigurationsRequest !== null && listClusterConfigurationsRequest !== undefined) {
                if (listClusterConfigurationsRequest instanceof ListClusterConfigurationsRequest) {
                    clusterId = listClusterConfigurationsRequest.clusterId;
                } else {
                    clusterId = listClusterConfigurationsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterConfigurations.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群所关联的参数组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterConfigurationsParameter(listClusterConfigurationsParameterRequest?: ListClusterConfigurationsParameterRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/configurations/{configuration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let configurationId;

            if (listClusterConfigurationsParameterRequest !== null && listClusterConfigurationsParameterRequest !== undefined) {
                if (listClusterConfigurationsParameterRequest instanceof ListClusterConfigurationsParameterRequest) {
                    clusterId = listClusterConfigurationsParameterRequest.clusterId;
                    configurationId = listClusterConfigurationsParameterRequest.configurationId;
                } else {
                    clusterId = listClusterConfigurationsParameterRequest['cluster_id'];
                    configurationId = listClusterConfigurationsParameterRequest['configuration_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterConfigurationsParameter.');
            }
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling listClusterConfigurationsParameter.');
            }

            options.pathParams = { 'cluster_id': clusterId,'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterDetails(listClusterDetailsRequest?: ListClusterDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterDetailsRequest !== null && listClusterDetailsRequest !== undefined) {
                if (listClusterDetailsRequest instanceof ListClusterDetailsRequest) {
                    clusterId = listClusterDetailsRequest.clusterId;
                } else {
                    clusterId = listClusterDetailsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterDetails.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询连接信息。包括公网域名、内网域名等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterEndpoints(listClusterEndpointsRequest?: ListClusterEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterEndpointsRequest !== null && listClusterEndpointsRequest !== undefined) {
                if (listClusterEndpointsRequest instanceof ListClusterEndpointsRequest) {
                    clusterId = listClusterEndpointsRequest.clusterId;
                } else {
                    clusterId = listClusterEndpointsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterEndpoints.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询节点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterNodes(listClusterNodesRequest?: ListClusterNodesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let nodeIds;
            
            let offset;
            
            let limit;
            
            let filterBy;
            
            let filter;
            
            let orderBy;
            
            let order;
            
            let deleted;

            if (listClusterNodesRequest !== null && listClusterNodesRequest !== undefined) {
                if (listClusterNodesRequest instanceof ListClusterNodesRequest) {
                    clusterId = listClusterNodesRequest.clusterId;
                    nodeIds = listClusterNodesRequest.nodeIds;
                    offset = listClusterNodesRequest.offset;
                    limit = listClusterNodesRequest.limit;
                    filterBy = listClusterNodesRequest.filterBy;
                    filter = listClusterNodesRequest.filter;
                    orderBy = listClusterNodesRequest.orderBy;
                    order = listClusterNodesRequest.order;
                    deleted = listClusterNodesRequest.deleted;
                } else {
                    clusterId = listClusterNodesRequest['cluster_id'];
                    nodeIds = listClusterNodesRequest['node_ids'];
                    offset = listClusterNodesRequest['offset'];
                    limit = listClusterNodesRequest['limit'];
                    filterBy = listClusterNodesRequest['filter_by'];
                    filter = listClusterNodesRequest['filter'];
                    orderBy = listClusterNodesRequest['order_by'];
                    order = listClusterNodesRequest['order'];
                    deleted = listClusterNodesRequest['deleted'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterNodes.');
            }
            if (nodeIds !== null && nodeIds !== undefined) {
                localVarQueryParameter['node_ids'] = nodeIds;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (filterBy !== null && filterBy !== undefined) {
                localVarQueryParameter['filter_by'] = filterBy;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (deleted !== null && deleted !== undefined) {
                localVarQueryParameter['deleted'] = deleted;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询合适的缩容数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterScaleInNumbers(listClusterScaleInNumbersRequest?: ListClusterScaleInNumbersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/shrink-numbers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterScaleInNumbersRequest !== null && listClusterScaleInNumbersRequest !== undefined) {
                if (listClusterScaleInNumbersRequest instanceof ListClusterScaleInNumbersRequest) {
                    clusterId = listClusterScaleInNumbersRequest.clusterId;
                } else {
                    clusterId = listClusterScaleInNumbersRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterScaleInNumbers.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询集群快照列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterSnapshots(listClusterSnapshotsRequest?: ListClusterSnapshotsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/snapshots",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;

            if (listClusterSnapshotsRequest !== null && listClusterSnapshotsRequest !== undefined) {
                if (listClusterSnapshotsRequest instanceof ListClusterSnapshotsRequest) {
                    clusterId = listClusterSnapshotsRequest.clusterId;
                    limit = listClusterSnapshotsRequest.limit;
                    offset = listClusterSnapshotsRequest.offset;
                    sortKey = listClusterSnapshotsRequest.sortKey;
                    sortDir = listClusterSnapshotsRequest.sortDir;
                } else {
                    clusterId = listClusterSnapshotsRequest['cluster_id'];
                    limit = listClusterSnapshotsRequest['limit'];
                    offset = listClusterSnapshotsRequest['offset'];
                    sortKey = listClusterSnapshotsRequest['sort_key'];
                    sortDir = listClusterSnapshotsRequest['sort_dir'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterSnapshots.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定集群的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterTags(listClusterTagsRequest?: ListClusterTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterTagsRequest !== null && listClusterTagsRequest !== undefined) {
                if (listClusterTagsRequest instanceof ListClusterTagsRequest) {
                    clusterId = listClusterTagsRequest.clusterId;
                } else {
                    clusterId = listClusterTagsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterTags.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源管理开关状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterWorkload(listClusterWorkloadRequest?: ListClusterWorkloadRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterWorkloadRequest !== null && listClusterWorkloadRequest !== undefined) {
                if (listClusterWorkloadRequest instanceof ListClusterWorkloadRequest) {
                    clusterId = listClusterWorkloadRequest.clusterId;
                } else {
                    clusterId = listClusterWorkloadRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterWorkload.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusters(listClustersRequest?: ListClustersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;

            if (listClustersRequest !== null && listClustersRequest !== undefined) {
                if (listClustersRequest instanceof ListClustersRequest) {
                    enterpriseProjectId = listClustersRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = listClustersRequest['enterprise_project_id'];
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
         * 查询参数修改审计记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurationsAuditRecords(listConfigurationsAuditRecordsRequest?: ListConfigurationsAuditRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/configurations/audit-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let actionTime;
            
            let filterBy;
            
            let filter;
            
            let limit;
            
            let offset;

            if (listConfigurationsAuditRecordsRequest !== null && listConfigurationsAuditRecordsRequest !== undefined) {
                if (listConfigurationsAuditRecordsRequest instanceof ListConfigurationsAuditRecordsRequest) {
                    clusterId = listConfigurationsAuditRecordsRequest.clusterId;
                    actionTime = listConfigurationsAuditRecordsRequest.actionTime;
                    filterBy = listConfigurationsAuditRecordsRequest.filterBy;
                    filter = listConfigurationsAuditRecordsRequest.filter;
                    limit = listConfigurationsAuditRecordsRequest.limit;
                    offset = listConfigurationsAuditRecordsRequest.offset;
                } else {
                    clusterId = listConfigurationsAuditRecordsRequest['cluster_id'];
                    actionTime = listConfigurationsAuditRecordsRequest['action_time'];
                    filterBy = listConfigurationsAuditRecordsRequest['filter_by'];
                    filter = listConfigurationsAuditRecordsRequest['filter'];
                    limit = listConfigurationsAuditRecordsRequest['limit'];
                    offset = listConfigurationsAuditRecordsRequest['offset'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listConfigurationsAuditRecords.');
            }
            if (actionTime !== null && actionTime !== undefined) {
                localVarQueryParameter['action_time'] = actionTime;
            }
            if (filterBy !== null && filterBy !== undefined) {
                localVarQueryParameter['filter_by'] = filterBy;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询数据源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataSource(listDataSourceRequest?: ListDataSourceRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ext-data-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listDataSourceRequest !== null && listDataSourceRequest !== undefined) {
                if (listDataSourceRequest instanceof ListDataSourceRequest) {
                    clusterId = listDataSourceRequest.clusterId;
                } else {
                    clusterId = listDataSourceRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listDataSource.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库对象。
         * **约束限制**：
         * 集群guestAgent插件大于等于8.2.1.1开始支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseObjects(listDatabaseObjectsRequest?: ListDatabaseObjectsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/objects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let type;
            
            let name;
            
            let database;
            
            let schema;
            
            let table;
            
            let offset;
            
            let limit;
            
            let isFineGrainedDisaster;

            if (listDatabaseObjectsRequest !== null && listDatabaseObjectsRequest !== undefined) {
                if (listDatabaseObjectsRequest instanceof ListDatabaseObjectsRequest) {
                    clusterId = listDatabaseObjectsRequest.clusterId;
                    type = listDatabaseObjectsRequest.type;
                    name = listDatabaseObjectsRequest.name;
                    database = listDatabaseObjectsRequest.database;
                    schema = listDatabaseObjectsRequest.schema;
                    table = listDatabaseObjectsRequest.table;
                    offset = listDatabaseObjectsRequest.offset;
                    limit = listDatabaseObjectsRequest.limit;
                    isFineGrainedDisaster = listDatabaseObjectsRequest.isFineGrainedDisaster;
                } else {
                    clusterId = listDatabaseObjectsRequest['cluster_id'];
                    type = listDatabaseObjectsRequest['type'];
                    name = listDatabaseObjectsRequest['name'];
                    database = listDatabaseObjectsRequest['database'];
                    schema = listDatabaseObjectsRequest['schema'];
                    table = listDatabaseObjectsRequest['table'];
                    offset = listDatabaseObjectsRequest['offset'];
                    limit = listDatabaseObjectsRequest['limit'];
                    isFineGrainedDisaster = listDatabaseObjectsRequest['is_fine_grained_disaster'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listDatabaseObjects.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listDatabaseObjects.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (database !== null && database !== undefined) {
                localVarQueryParameter['database'] = database;
            }
            if (schema !== null && schema !== undefined) {
                localVarQueryParameter['schema'] = schema;
            }
            if (table !== null && table !== undefined) {
                localVarQueryParameter['table'] = table;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (isFineGrainedDisaster !== null && isFineGrainedDisaster !== undefined) {
                localVarQueryParameter['is_fine_grained_disaster'] = isFineGrainedDisaster;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户/角色拥有权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseUserAuthorities(listDatabaseUserAuthoritiesRequest?: ListDatabaseUserAuthoritiesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users/{name}/authority",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let name;
            
            let offset;
            
            let limit;

            if (listDatabaseUserAuthoritiesRequest !== null && listDatabaseUserAuthoritiesRequest !== undefined) {
                if (listDatabaseUserAuthoritiesRequest instanceof ListDatabaseUserAuthoritiesRequest) {
                    clusterId = listDatabaseUserAuthoritiesRequest.clusterId;
                    name = listDatabaseUserAuthoritiesRequest.name;
                    offset = listDatabaseUserAuthoritiesRequest.offset;
                    limit = listDatabaseUserAuthoritiesRequest.limit;
                } else {
                    clusterId = listDatabaseUserAuthoritiesRequest['cluster_id'];
                    name = listDatabaseUserAuthoritiesRequest['name'];
                    offset = listDatabaseUserAuthoritiesRequest['offset'];
                    limit = listDatabaseUserAuthoritiesRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listDatabaseUserAuthorities.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling listDatabaseUserAuthorities.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有数据库用户/角色。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseUsers(listDatabaseUsersRequest?: ListDatabaseUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;
            
            let type;
            
            let userType;

            if (listDatabaseUsersRequest !== null && listDatabaseUsersRequest !== undefined) {
                if (listDatabaseUsersRequest instanceof ListDatabaseUsersRequest) {
                    clusterId = listDatabaseUsersRequest.clusterId;
                    offset = listDatabaseUsersRequest.offset;
                    limit = listDatabaseUsersRequest.limit;
                    type = listDatabaseUsersRequest.type;
                    userType = listDatabaseUsersRequest.userType;
                } else {
                    clusterId = listDatabaseUsersRequest['cluster_id'];
                    offset = listDatabaseUsersRequest['offset'];
                    limit = listDatabaseUsersRequest['limit'];
                    type = listDatabaseUsersRequest['type'];
                    userType = listDatabaseUsersRequest['user_type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listDatabaseUsers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (userType !== null && userType !== undefined) {
                localVarQueryParameter['user_type'] = userType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询容灾列表。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDisasterRecover(listDisasterRecoverRequest?: ListDisasterRecoverRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/disaster-recoveries",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let primaryClusterId;
            
            let standbyClusterId;
            
            let id;

            if (listDisasterRecoverRequest !== null && listDisasterRecoverRequest !== undefined) {
                if (listDisasterRecoverRequest instanceof ListDisasterRecoverRequest) {
                    primaryClusterId = listDisasterRecoverRequest.primaryClusterId;
                    standbyClusterId = listDisasterRecoverRequest.standbyClusterId;
                    id = listDisasterRecoverRequest.id;
                } else {
                    primaryClusterId = listDisasterRecoverRequest['primary_cluster_id'];
                    standbyClusterId = listDisasterRecoverRequest['standby_cluster_id'];
                    id = listDisasterRecoverRequest['id'];
                }
            }

        
            if (primaryClusterId !== null && primaryClusterId !== undefined) {
                localVarQueryParameter['primary_cluster_id'] = primaryClusterId;
            }
            if (standbyClusterId !== null && standbyClusterId !== undefined) {
                localVarQueryParameter['standby_cluster_id'] = standbyClusterId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取专属分布式存储池列表，只包括用户开通的SSD专属资源池信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDssPools() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dss-pools",
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
         * 查询集群可以关联的ELB列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listElbs(listElbsRequest?: ListElbsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/elbs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listElbsRequest !== null && listElbsRequest !== undefined) {
                if (listElbsRequest instanceof ListElbsRequest) {
                    clusterId = listElbsRequest.clusterId;
                } else {
                    clusterId = listElbsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listElbs.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventSpecs(listEventSpecsRequest?: ListEventSpecsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/event-specs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let specName;
            
            let category;
            
            let severity;
            
            let sourceType;
            
            let tag;
            
            let offset;
            
            let limit;

            if (listEventSpecsRequest !== null && listEventSpecsRequest !== undefined) {
                if (listEventSpecsRequest instanceof ListEventSpecsRequest) {
                    specName = listEventSpecsRequest.specName;
                    category = listEventSpecsRequest.category;
                    severity = listEventSpecsRequest.severity;
                    sourceType = listEventSpecsRequest.sourceType;
                    tag = listEventSpecsRequest.tag;
                    offset = listEventSpecsRequest.offset;
                    limit = listEventSpecsRequest.limit;
                } else {
                    specName = listEventSpecsRequest['spec_name'];
                    category = listEventSpecsRequest['category'];
                    severity = listEventSpecsRequest['severity'];
                    sourceType = listEventSpecsRequest['source_type'];
                    tag = listEventSpecsRequest['tag'];
                    offset = listEventSpecsRequest['offset'];
                    limit = listEventSpecsRequest['limit'];
                }
            }

        
            if (specName !== null && specName !== undefined) {
                localVarQueryParameter['spec_name'] = specName;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (sourceType !== null && sourceType !== undefined) {
                localVarQueryParameter['source_type'] = sourceType;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
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
         * 查询订阅的事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventSubs(listEventSubsRequest?: ListEventSubsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/event-subs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listEventSubsRequest !== null && listEventSubsRequest !== undefined) {
                if (listEventSubsRequest instanceof ListEventSubsRequest) {
                    offset = listEventSubsRequest.offset;
                    limit = listEventSubsRequest.limit;
                } else {
                    offset = listEventSubsRequest['offset'];
                    limit = listEventSubsRequest['limit'];
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
         * 查询事件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEvents(listEventsRequest?: ListEventsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listEventsRequest !== null && listEventsRequest !== undefined) {
                if (listEventsRequest instanceof ListEventsRequest) {
                    offset = listEventsRequest.offset;
                    limit = listEventsRequest.limit;
                } else {
                    offset = listEventsRequest['offset'];
                    limit = listEventsRequest['limit'];
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
         * 查询磁盘信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostDisk(listHostDiskRequest?: ListHostDiskRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/disk",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let instanceId;
            
            let instanceName;
            
            let limit;
            
            let offset;

            if (listHostDiskRequest !== null && listHostDiskRequest !== undefined) {
                if (listHostDiskRequest instanceof ListHostDiskRequest) {
                    clusterId = listHostDiskRequest.clusterId;
                    instanceId = listHostDiskRequest.instanceId;
                    instanceName = listHostDiskRequest.instanceName;
                    limit = listHostDiskRequest.limit;
                    offset = listHostDiskRequest.offset;
                } else {
                    clusterId = listHostDiskRequest['cluster_id'];
                    instanceId = listHostDiskRequest['instance_id'];
                    instanceName = listHostDiskRequest['instance_name'];
                    limit = listHostDiskRequest['limit'];
                    offset = listHostDiskRequest['offset'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
         * 获取网卡状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostNet(listHostNetRequest?: ListHostNetRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/net",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let instanceName;
            
            let limit;
            
            let offset;

            if (listHostNetRequest !== null && listHostNetRequest !== undefined) {
                if (listHostNetRequest instanceof ListHostNetRequest) {
                    clusterId = listHostNetRequest.clusterId;
                    instanceName = listHostNetRequest.instanceName;
                    limit = listHostNetRequest.limit;
                    offset = listHostNetRequest.offset;
                } else {
                    clusterId = listHostNetRequest['cluster_id'];
                    instanceName = listHostNetRequest['instance_name'];
                    limit = listHostNetRequest['limit'];
                    offset = listHostNetRequest['offset'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
         * 查询主机概览。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostOverview(listHostOverviewRequest?: ListHostOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/host-overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let clusterId;
            
            let instanceName;

            if (listHostOverviewRequest !== null && listHostOverviewRequest !== undefined) {
                if (listHostOverviewRequest instanceof ListHostOverviewRequest) {
                    limit = listHostOverviewRequest.limit;
                    offset = listHostOverviewRequest.offset;
                    clusterId = listHostOverviewRequest.clusterId;
                    instanceName = listHostOverviewRequest.instanceName;
                } else {
                    limit = listHostOverviewRequest['limit'];
                    offset = listHostOverviewRequest['offset'];
                    clusterId = listHostOverviewRequest['cluster_id'];
                    instanceName = listHostOverviewRequest['instance_name'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listHostOverview.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listHostOverview.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务进度信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobDetails(listJobDetailsRequest?: ListJobDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/job/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (listJobDetailsRequest !== null && listJobDetailsRequest !== undefined) {
                if (listJobDetailsRequest instanceof ListJobDetailsRequest) {
                    jobId = listJobDetailsRequest.jobId;
                } else {
                    jobId = listJobDetailsRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listJobDetails.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询逻辑集群定时增删计划。定时增删计划业务支持最多保存20条数据，接口最大返回20条数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogicalClusterPlans(listLogicalClusterPlansRequest?: ListLogicalClusterPlansRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/logical-cluster-plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listLogicalClusterPlansRequest !== null && listLogicalClusterPlansRequest !== undefined) {
                if (listLogicalClusterPlansRequest instanceof ListLogicalClusterPlansRequest) {
                    clusterId = listLogicalClusterPlansRequest.clusterId;
                } else {
                    clusterId = listLogicalClusterPlansRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listLogicalClusterPlans.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询逻辑集群可用环节点信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogicalClusterRings(listLogicalClusterRingsRequest?: ListLogicalClusterRingsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters/rings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;

            if (listLogicalClusterRingsRequest !== null && listLogicalClusterRingsRequest !== undefined) {
                if (listLogicalClusterRingsRequest instanceof ListLogicalClusterRingsRequest) {
                    clusterId = listLogicalClusterRingsRequest.clusterId;
                    offset = listLogicalClusterRingsRequest.offset;
                    limit = listLogicalClusterRingsRequest.limit;
                } else {
                    clusterId = listLogicalClusterRingsRequest['cluster_id'];
                    offset = listLogicalClusterRingsRequest['offset'];
                    limit = listLogicalClusterRingsRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listLogicalClusterRings.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询逻辑集群任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogicalClusterTasks(listLogicalClusterTasksRequest?: ListLogicalClusterTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;
            
            let logicalClusterName;
            
            let type;
            
            let orderBy;
            
            let order;

            if (listLogicalClusterTasksRequest !== null && listLogicalClusterTasksRequest !== undefined) {
                if (listLogicalClusterTasksRequest instanceof ListLogicalClusterTasksRequest) {
                    clusterId = listLogicalClusterTasksRequest.clusterId;
                    offset = listLogicalClusterTasksRequest.offset;
                    limit = listLogicalClusterTasksRequest.limit;
                    logicalClusterName = listLogicalClusterTasksRequest.logicalClusterName;
                    type = listLogicalClusterTasksRequest.type;
                    orderBy = listLogicalClusterTasksRequest.orderBy;
                    order = listLogicalClusterTasksRequest.order;
                } else {
                    clusterId = listLogicalClusterTasksRequest['cluster_id'];
                    offset = listLogicalClusterTasksRequest['offset'];
                    limit = listLogicalClusterTasksRequest['limit'];
                    logicalClusterName = listLogicalClusterTasksRequest['logical_cluster_name'];
                    type = listLogicalClusterTasksRequest['type'];
                    orderBy = listLogicalClusterTasksRequest['order_by'];
                    order = listLogicalClusterTasksRequest['order'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listLogicalClusterTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (logicalClusterName !== null && logicalClusterName !== undefined) {
                localVarQueryParameter['logical_cluster_name'] = logicalClusterName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询逻辑集群磁盘信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogicalClusterVolumes(listLogicalClusterVolumesRequest?: ListLogicalClusterVolumesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters/volumes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;

            if (listLogicalClusterVolumesRequest !== null && listLogicalClusterVolumesRequest !== undefined) {
                if (listLogicalClusterVolumesRequest instanceof ListLogicalClusterVolumesRequest) {
                    clusterId = listLogicalClusterVolumesRequest.clusterId;
                    offset = listLogicalClusterVolumesRequest.offset;
                    limit = listLogicalClusterVolumesRequest.limit;
                } else {
                    clusterId = listLogicalClusterVolumesRequest['cluster_id'];
                    offset = listLogicalClusterVolumesRequest['offset'];
                    limit = listLogicalClusterVolumesRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listLogicalClusterVolumes.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询逻辑集群列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogicalClusters(listLogicalClustersRequest?: ListLogicalClustersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;

            if (listLogicalClustersRequest !== null && listLogicalClustersRequest !== undefined) {
                if (listLogicalClustersRequest instanceof ListLogicalClustersRequest) {
                    clusterId = listLogicalClustersRequest.clusterId;
                    offset = listLogicalClustersRequest.offset;
                    limit = listLogicalClustersRequest.limit;
                } else {
                    clusterId = listLogicalClustersRequest['cluster_id'];
                    offset = listLogicalClustersRequest['offset'];
                    limit = listLogicalClustersRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listLogicalClusters.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取LTS日志列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLtsLogs(listLtsLogsRequest?: ListLtsLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/lts-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let limit;
            
            let offset;

            if (listLtsLogsRequest !== null && listLtsLogsRequest !== undefined) {
                if (listLtsLogsRequest instanceof ListLtsLogsRequest) {
                    clusterId = listLtsLogsRequest.clusterId;
                    limit = listLtsLogsRequest.limit;
                    offset = listLtsLogsRequest.offset;
                } else {
                    clusterId = listLtsLogsRequest['cluster_id'];
                    limit = listLtsLogsRequest['limit'];
                    offset = listLtsLogsRequest['offset'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listLtsLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群使用指标列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetrics(listMetricsRequest?: ListMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/dms/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;
            
            let orderBy;
            
            let sortBy;

            if (listMetricsRequest !== null && listMetricsRequest !== undefined) {
                if (listMetricsRequest instanceof ListMetricsRequest) {
                    clusterId = listMetricsRequest.clusterId;
                    offset = listMetricsRequest.offset;
                    limit = listMetricsRequest.limit;
                    orderBy = listMetricsRequest.orderBy;
                    sortBy = listMetricsRequest.sortBy;
                } else {
                    clusterId = listMetricsRequest['cluster_id'];
                    offset = listMetricsRequest['offset'];
                    limit = listMetricsRequest['limit'];
                    orderBy = listMetricsRequest['order_by'];
                    sortBy = listMetricsRequest['sort_by'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listMetrics.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listMetrics.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listMetrics.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定指标相关采集数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetricsData(listMetricsDataRequest?: ListMetricsDataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/dms/metrics/{metric_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let metricName;
            
            let offset;
            
            let limit;
            
            let from;
            
            let to;
            
            let orderBy;
            
            let sortBy;

            if (listMetricsDataRequest !== null && listMetricsDataRequest !== undefined) {
                if (listMetricsDataRequest instanceof ListMetricsDataRequest) {
                    clusterId = listMetricsDataRequest.clusterId;
                    metricName = listMetricsDataRequest.metricName;
                    offset = listMetricsDataRequest.offset;
                    limit = listMetricsDataRequest.limit;
                    from = listMetricsDataRequest.from;
                    to = listMetricsDataRequest.to;
                    orderBy = listMetricsDataRequest.orderBy;
                    sortBy = listMetricsDataRequest.sortBy;
                } else {
                    clusterId = listMetricsDataRequest['cluster_id'];
                    metricName = listMetricsDataRequest['metric_name'];
                    offset = listMetricsDataRequest['offset'];
                    limit = listMetricsDataRequest['limit'];
                    from = listMetricsDataRequest['from'];
                    to = listMetricsDataRequest['to'];
                    orderBy = listMetricsDataRequest['order_by'];
                    sortBy = listMetricsDataRequest['sort_by'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listMetricsData.');
            }
            if (metricName === null || metricName === undefined) {
            throw new RequiredError('metricName','Required parameter metricName was null or undefined when calling listMetricsData.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listMetricsData.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listMetricsData.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listMetricsData.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listMetricsData.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'metric_name': metricName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询历史监控数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMonitorIndicatorData(listMonitorIndicatorDataRequest?: ListMonitorIndicatorDataRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/metric-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let from;
            
            let to;
            
            let indicatorName;
            
            let dim0;
            
            let _function;
            
            let period;
            
            let dim1;

            if (listMonitorIndicatorDataRequest !== null && listMonitorIndicatorDataRequest !== undefined) {
                if (listMonitorIndicatorDataRequest instanceof ListMonitorIndicatorDataRequest) {
                    from = listMonitorIndicatorDataRequest.from;
                    to = listMonitorIndicatorDataRequest.to;
                    indicatorName = listMonitorIndicatorDataRequest.indicatorName;
                    dim0 = listMonitorIndicatorDataRequest.dim0;
                    _function = listMonitorIndicatorDataRequest._function;
                    period = listMonitorIndicatorDataRequest.period;
                    dim1 = listMonitorIndicatorDataRequest.dim1;
                } else {
                    from = listMonitorIndicatorDataRequest['from'];
                    to = listMonitorIndicatorDataRequest['to'];
                    indicatorName = listMonitorIndicatorDataRequest['indicator_name'];
                    dim0 = listMonitorIndicatorDataRequest['dim0'];
                    _function = listMonitorIndicatorDataRequest['function'];
                    period = listMonitorIndicatorDataRequest['period'];
                    dim1 = listMonitorIndicatorDataRequest['dim1'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listMonitorIndicatorData.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listMonitorIndicatorData.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (indicatorName === null || indicatorName === undefined) {
                throw new RequiredError('indicatorName','Required parameter indicatorName was null or undefined when calling listMonitorIndicatorData.');
            }
            if (indicatorName !== null && indicatorName !== undefined) {
                localVarQueryParameter['indicator_name'] = indicatorName;
            }
            if (dim0 === null || dim0 === undefined) {
                throw new RequiredError('dim0','Required parameter dim0 was null or undefined when calling listMonitorIndicatorData.');
            }
            if (dim0 !== null && dim0 !== undefined) {
                localVarQueryParameter['dim0'] = dim0;
            }
            if (_function !== null && _function !== undefined) {
                localVarQueryParameter['function'] = _function;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (dim1 !== null && dim1 !== undefined) {
                localVarQueryParameter['dim1'] = dim1;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询性能监控指标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMonitorIndicators() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/metric-data/indicators",
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
         * 该接口用于查询所有GaussDB(DWS)服务支持的规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodeTypes() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/node-types",
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
         * 查看计划执行日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlanExecLogs(listPlanExecLogsRequest?: ListPlanExecLogsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}/logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let planId;
            
            let limit;
            
            let offset;

            if (listPlanExecLogsRequest !== null && listPlanExecLogsRequest !== undefined) {
                if (listPlanExecLogsRequest instanceof ListPlanExecLogsRequest) {
                    clusterId = listPlanExecLogsRequest.clusterId;
                    planId = listPlanExecLogsRequest.planId;
                    limit = listPlanExecLogsRequest.limit;
                    offset = listPlanExecLogsRequest.offset;
                } else {
                    clusterId = listPlanExecLogsRequest['cluster_id'];
                    planId = listPlanExecLogsRequest['plan_id'];
                    limit = listPlanExecLogsRequest['limit'];
                    offset = listPlanExecLogsRequest['offset'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listPlanExecLogs.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling listPlanExecLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询实时SQL列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueries(listQueriesRequest?: ListQueriesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/dms/queries",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (listQueriesRequest !== null && listQueriesRequest !== undefined) {
                if (listQueriesRequest instanceof ListQueriesRequest) {
                    clusterId = listQueriesRequest.clusterId;
                    body = listQueriesRequest.body
                } else {
                    clusterId = listQueriesRequest['cluster_id'];
                    body = listQueriesRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listQueries.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单租户在GaussDB(DWS)服务下的配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/quotas",
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
         * 获取待重分布表所属模式信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRedistributionSchema(listRedistributionSchemaRequest?: ListRedistributionSchemaRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/redistribution/schemas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let dbName;
            
            let limit;
            
            let offset;
            
            let schemaName;

            if (listRedistributionSchemaRequest !== null && listRedistributionSchemaRequest !== undefined) {
                if (listRedistributionSchemaRequest instanceof ListRedistributionSchemaRequest) {
                    clusterId = listRedistributionSchemaRequest.clusterId;
                    dbName = listRedistributionSchemaRequest.dbName;
                    limit = listRedistributionSchemaRequest.limit;
                    offset = listRedistributionSchemaRequest.offset;
                    schemaName = listRedistributionSchemaRequest.schemaName;
                } else {
                    clusterId = listRedistributionSchemaRequest['cluster_id'];
                    dbName = listRedistributionSchemaRequest['db_name'];
                    limit = listRedistributionSchemaRequest['limit'];
                    offset = listRedistributionSchemaRequest['offset'];
                    schemaName = listRedistributionSchemaRequest['schema_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listRedistributionSchema.');
            }
            if (dbName === null || dbName === undefined) {
                throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling listRedistributionSchema.');
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (schemaName !== null && schemaName !== undefined) {
                localVarQueryParameter['schema_name'] = schemaName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群模式空间信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSchemas(listSchemasRequest?: ListSchemasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/databases/{database_name}/schemas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let databaseName;
            
            let sortKey;
            
            let sortDir;
            
            let keywords;
            
            let limit;
            
            let offset;

            if (listSchemasRequest !== null && listSchemasRequest !== undefined) {
                if (listSchemasRequest instanceof ListSchemasRequest) {
                    clusterId = listSchemasRequest.clusterId;
                    databaseName = listSchemasRequest.databaseName;
                    sortKey = listSchemasRequest.sortKey;
                    sortDir = listSchemasRequest.sortDir;
                    keywords = listSchemasRequest.keywords;
                    limit = listSchemasRequest.limit;
                    offset = listSchemasRequest.offset;
                } else {
                    clusterId = listSchemasRequest['cluster_id'];
                    databaseName = listSchemasRequest['database_name'];
                    sortKey = listSchemasRequest['sort_key'];
                    sortDir = listSchemasRequest['sort_dir'];
                    keywords = listSchemasRequest['keywords'];
                    limit = listSchemasRequest['limit'];
                    offset = listSchemasRequest['offset'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSchemas.');
            }
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listSchemas.');
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (keywords !== null && keywords !== undefined) {
                localVarQueryParameter['keywords'] = keywords;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于使用快照ID查询快照详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotDetails(listSnapshotDetailsRequest?: ListSnapshotDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/snapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotId;

            if (listSnapshotDetailsRequest !== null && listSnapshotDetailsRequest !== undefined) {
                if (listSnapshotDetailsRequest instanceof ListSnapshotDetailsRequest) {
                    snapshotId = listSnapshotDetailsRequest.snapshotId;
                } else {
                    snapshotId = listSnapshotDetailsRequest['snapshot_id'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling listSnapshotDetails.');
            }

            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据快照ID查询规格信息。支持用来查询某个快照的规格信息，或者快照可恢复到的目标规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotFlavorInfo(listSnapshotFlavorInfoRequest?: ListSnapshotFlavorInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/snapshots/{snapshot_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let snapshotId;
            
            let type;
            
            let azCode;
            
            let fineGrainedRestore;

            if (listSnapshotFlavorInfoRequest !== null && listSnapshotFlavorInfoRequest !== undefined) {
                if (listSnapshotFlavorInfoRequest instanceof ListSnapshotFlavorInfoRequest) {
                    snapshotId = listSnapshotFlavorInfoRequest.snapshotId;
                    type = listSnapshotFlavorInfoRequest.type;
                    azCode = listSnapshotFlavorInfoRequest.azCode;
                    fineGrainedRestore = listSnapshotFlavorInfoRequest.fineGrainedRestore;
                } else {
                    snapshotId = listSnapshotFlavorInfoRequest['snapshot_id'];
                    type = listSnapshotFlavorInfoRequest['type'];
                    azCode = listSnapshotFlavorInfoRequest['az_code'];
                    fineGrainedRestore = listSnapshotFlavorInfoRequest['fine_grained_restore'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling listSnapshotFlavorInfo.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (azCode !== null && azCode !== undefined) {
                localVarQueryParameter['az_code'] = azCode;
            }
            if (fineGrainedRestore !== null && fineGrainedRestore !== undefined) {
                localVarQueryParameter['fine_grained_restore'] = fineGrainedRestore;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询快照策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotPolicy(listSnapshotPolicyRequest?: ListSnapshotPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/snapshot-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listSnapshotPolicyRequest !== null && listSnapshotPolicyRequest !== undefined) {
                if (listSnapshotPolicyRequest instanceof ListSnapshotPolicyRequest) {
                    clusterId = listSnapshotPolicyRequest.clusterId;
                } else {
                    clusterId = listSnapshotPolicyRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSnapshotPolicy.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 快照统计信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotStatistics(listSnapshotStatisticsRequest?: ListSnapshotStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/snapshots/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listSnapshotStatisticsRequest !== null && listSnapshotStatisticsRequest !== undefined) {
                if (listSnapshotStatisticsRequest instanceof ListSnapshotStatisticsRequest) {
                    clusterId = listSnapshotStatisticsRequest.clusterId;
                } else {
                    clusterId = listSnapshotStatisticsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSnapshotStatistics.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询快照列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshots() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/snapshots",
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
         * 查询当前可用资源数量，其中包括“可用集群和总集群（个）”、“可用节点和总节点（个）”、“总容量（GB）”。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStatistics() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/statistics",
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
         * 查询身份源同步记录。
         * **约束限制**：
         * 该功能在页面默认未开放给所有用户，当特性开启且有同步记录时查询才有结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSyncRecords(listSyncRecordsRequest?: ListSyncRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/sync-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;

            if (listSyncRecordsRequest !== null && listSyncRecordsRequest !== undefined) {
                if (listSyncRecordsRequest instanceof ListSyncRecordsRequest) {
                    clusterId = listSyncRecordsRequest.clusterId;
                    offset = listSyncRecordsRequest.offset;
                    limit = listSyncRecordsRequest.limit;
                } else {
                    clusterId = listSyncRecordsRequest['cluster_id'];
                    offset = listSyncRecordsRequest['offset'];
                    limit = listSyncRecordsRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSyncRecords.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询表倾斜或脏页率信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTablesStatistic(listTablesStatisticRequest?: ListTablesStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/dms/tables/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let rateType;
            
            let offset;
            
            let limit;
            
            let orderBy;
            
            let sortBy;
            
            let filter;
            
            let value;

            if (listTablesStatisticRequest !== null && listTablesStatisticRequest !== undefined) {
                if (listTablesStatisticRequest instanceof ListTablesStatisticRequest) {
                    clusterId = listTablesStatisticRequest.clusterId;
                    rateType = listTablesStatisticRequest.rateType;
                    offset = listTablesStatisticRequest.offset;
                    limit = listTablesStatisticRequest.limit;
                    orderBy = listTablesStatisticRequest.orderBy;
                    sortBy = listTablesStatisticRequest.sortBy;
                    filter = listTablesStatisticRequest.filter;
                    value = listTablesStatisticRequest.value;
                } else {
                    clusterId = listTablesStatisticRequest['cluster_id'];
                    rateType = listTablesStatisticRequest['rate_type'];
                    offset = listTablesStatisticRequest['offset'];
                    limit = listTablesStatisticRequest['limit'];
                    orderBy = listTablesStatisticRequest['order_by'];
                    sortBy = listTablesStatisticRequest['sort_by'];
                    filter = listTablesStatisticRequest['filter'];
                    value = listTablesStatisticRequest['value'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listTablesStatistic.');
            }
            if (rateType === null || rateType === undefined) {
                throw new RequiredError('rateType','Required parameter rateType was null or undefined when calling listTablesStatistic.');
            }
            if (rateType !== null && rateType !== undefined) {
                localVarQueryParameter['rate_type'] = rateType;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listTablesStatistic.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listTablesStatistic.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (value !== null && value !== undefined) {
                localVarQueryParameter['value'] = value;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTags() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/tags",
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
         * 查询指定集群的企业项目信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagsForResource(listTagsForResourceRequest?: ListTagsForResourceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/enterprise-projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;

            if (listTagsForResourceRequest !== null && listTagsForResourceRequest !== undefined) {
                if (listTagsForResourceRequest instanceof ListTagsForResourceRequest) {
                    clusterId = listTagsForResourceRequest.clusterId;
                    offset = listTagsForResourceRequest.offset;
                    limit = listTagsForResourceRequest.limit;
                } else {
                    clusterId = listTagsForResourceRequest['cluster_id'];
                    offset = listTagsForResourceRequest['offset'];
                    limit = listTagsForResourceRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listTagsForResource.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询支持变更的目标规格列表。接口返回的规格列表最多为20条。
         * **约束限制**：
         * 无cluster_id时：可查询所有支持转换的目标规格，但是由于配额等原因，部分规格可能存在售罄无法使用。
         * 存在cluster_id时：会自动关联此集群所在可用区下的配额充足的目标规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTargetFlavors(listTargetFlavorsRequest?: ListTargetFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/flavors/{flavor_id}/target-flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavorId;
            
            let clusterId;

            if (listTargetFlavorsRequest !== null && listTargetFlavorsRequest !== undefined) {
                if (listTargetFlavorsRequest instanceof ListTargetFlavorsRequest) {
                    flavorId = listTargetFlavorsRequest.flavorId;
                    clusterId = listTargetFlavorsRequest.clusterId;
                } else {
                    flavorId = listTargetFlavorsRequest['flavor_id'];
                    clusterId = listTargetFlavorsRequest['cluster_id'];
                }
            }

        
            if (flavorId === null || flavorId === undefined) {
            throw new RequiredError('flavorId','Required parameter flavorId was null or undefined when calling listTargetFlavors.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'flavor_id': flavorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群拓扑ring环节点信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopoRings(listTopoRingsRequest?: ListTopoRingsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/topo/rings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;

            if (listTopoRingsRequest !== null && listTopoRingsRequest !== undefined) {
                if (listTopoRingsRequest instanceof ListTopoRingsRequest) {
                    clusterId = listTopoRingsRequest.clusterId;
                    offset = listTopoRingsRequest.offset;
                    limit = listTopoRingsRequest.limit;
                } else {
                    clusterId = listTopoRingsRequest['cluster_id'];
                    offset = listTopoRingsRequest['offset'];
                    limit = listTopoRingsRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listTopoRings.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群可升级的目标版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUpdatableVersion(listUpdatableVersionRequest?: ListUpdatableVersionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/upgrade-management/avail-versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;
            
            let type;

            if (listUpdatableVersionRequest !== null && listUpdatableVersionRequest !== undefined) {
                if (listUpdatableVersionRequest instanceof ListUpdatableVersionRequest) {
                    clusterId = listUpdatableVersionRequest.clusterId;
                    offset = listUpdatableVersionRequest.offset;
                    limit = listUpdatableVersionRequest.limit;
                    type = listUpdatableVersionRequest.type;
                } else {
                    clusterId = listUpdatableVersionRequest['cluster_id'];
                    offset = listUpdatableVersionRequest['offset'];
                    limit = listUpdatableVersionRequest['limit'];
                    type = listUpdatableVersionRequest['type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listUpdatableVersion.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此接口获取当前集群升级记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUpdateRecord(listUpdateRecordRequest?: ListUpdateRecordRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/upgrade-management/records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;

            if (listUpdateRecordRequest !== null && listUpdateRecordRequest !== undefined) {
                if (listUpdateRecordRequest instanceof ListUpdateRecordRequest) {
                    clusterId = listUpdateRecordRequest.clusterId;
                    offset = listUpdateRecordRequest.offset;
                    limit = listUpdateRecordRequest.limit;
                } else {
                    clusterId = listUpdateRecordRequest['cluster_id'];
                    offset = listUpdateRecordRequest['offset'];
                    limit = listUpdateRecordRequest['limit'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listUpdateRecord.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群中所有资源管理计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkloadPlans(listWorkloadPlansRequest?: ListWorkloadPlansRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let logicalClusterName;
            
            let limit;
            
            let offset;

            if (listWorkloadPlansRequest !== null && listWorkloadPlansRequest !== undefined) {
                if (listWorkloadPlansRequest instanceof ListWorkloadPlansRequest) {
                    clusterId = listWorkloadPlansRequest.clusterId;
                    logicalClusterName = listWorkloadPlansRequest.logicalClusterName;
                    limit = listWorkloadPlansRequest.limit;
                    offset = listWorkloadPlansRequest.offset;
                } else {
                    clusterId = listWorkloadPlansRequest['cluster_id'];
                    logicalClusterName = listWorkloadPlansRequest['logical_cluster_name'];
                    limit = listWorkloadPlansRequest['limit'];
                    offset = listWorkloadPlansRequest['offset'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listWorkloadPlans.');
            }
            if (logicalClusterName !== null && logicalClusterName !== undefined) {
                localVarQueryParameter['logical_cluster_name'] = logicalClusterName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源池。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkloadQueue(listWorkloadQueueRequest?: ListWorkloadQueueRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let logicalClusterName;

            if (listWorkloadQueueRequest !== null && listWorkloadQueueRequest !== undefined) {
                if (listWorkloadQueueRequest instanceof ListWorkloadQueueRequest) {
                    clusterId = listWorkloadQueueRequest.clusterId;
                    logicalClusterName = listWorkloadQueueRequest.logicalClusterName;
                } else {
                    clusterId = listWorkloadQueueRequest['cluster_id'];
                    logicalClusterName = listWorkloadQueueRequest['logical_cluster_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listWorkloadQueue.');
            }
            if (logicalClusterName !== null && logicalClusterName !== undefined) {
                localVarQueryParameter['logical_cluster_name'] = logicalClusterName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获得资源池的绑定用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkloadQueueUsers(listWorkloadQueueUsersRequest?: ListWorkloadQueueUsersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues/{queue_name}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let queueName;
            
            let limit;
            
            let offset;

            if (listWorkloadQueueUsersRequest !== null && listWorkloadQueueUsersRequest !== undefined) {
                if (listWorkloadQueueUsersRequest instanceof ListWorkloadQueueUsersRequest) {
                    clusterId = listWorkloadQueueUsersRequest.clusterId;
                    queueName = listWorkloadQueueUsersRequest.queueName;
                    limit = listWorkloadQueueUsersRequest.limit;
                    offset = listWorkloadQueueUsersRequest.offset;
                } else {
                    clusterId = listWorkloadQueueUsersRequest['cluster_id'];
                    queueName = listWorkloadQueueUsersRequest['queue_name'];
                    limit = listWorkloadQueueUsersRequest['limit'];
                    offset = listWorkloadQueueUsersRequest['offset'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listWorkloadQueueUsers.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling listWorkloadQueueUsers.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前集群的异常规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkloadRules(listWorkloadRulesRequest?: ListWorkloadRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/workload/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let offset;
            
            let limit;
            
            let ruleName;
            
            let queueName;

            if (listWorkloadRulesRequest !== null && listWorkloadRulesRequest !== undefined) {
                if (listWorkloadRulesRequest instanceof ListWorkloadRulesRequest) {
                    clusterId = listWorkloadRulesRequest.clusterId;
                    offset = listWorkloadRulesRequest.offset;
                    limit = listWorkloadRulesRequest.limit;
                    ruleName = listWorkloadRulesRequest.ruleName;
                    queueName = listWorkloadRulesRequest.queueName;
                } else {
                    clusterId = listWorkloadRulesRequest['cluster_id'];
                    offset = listWorkloadRulesRequest['offset'];
                    limit = listWorkloadRulesRequest['limit'];
                    ruleName = listWorkloadRulesRequest['rule_name'];
                    queueName = listWorkloadRulesRequest['queue_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listWorkloadRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (ruleName !== null && ruleName !== undefined) {
                localVarQueryParameter['rule_name'] = ruleName;
            }
            if (queueName !== null && queueName !== undefined) {
                localVarQueryParameter['queue_name'] = queueName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改集群名称。
         * **约束限制**：
         * guestAgent插件版本8.3.1及以上才支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyClusterName(modifyClusterNameRequest?: ModifyClusterNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/clusters/{cluster_id}/cluster-name",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (modifyClusterNameRequest !== null && modifyClusterNameRequest !== undefined) {
                if (modifyClusterNameRequest instanceof ModifyClusterNameRequest) {
                    clusterId = modifyClusterNameRequest.clusterId;
                    body = modifyClusterNameRequest.body
                } else {
                    clusterId = modifyClusterNameRequest['cluster_id'];
                    body = modifyClusterNameRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling modifyClusterName.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改集群时区。该操作会将操作系统及数据库的时区都进行修改。
         * **约束限制**：
         * 修改时区依赖集群安装的guestAgent插件，插件版本在8.3.0.202及以上支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyClusterTimezone(modifyClusterTimezoneRequest?: ModifyClusterTimezoneRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/timezone",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (modifyClusterTimezoneRequest !== null && modifyClusterTimezoneRequest !== undefined) {
                if (modifyClusterTimezoneRequest instanceof ModifyClusterTimezoneRequest) {
                    clusterId = modifyClusterTimezoneRequest.clusterId;
                    body = modifyClusterTimezoneRequest.body
                } else {
                    clusterId = modifyClusterTimezoneRequest['cluster_id'];
                    body = modifyClusterTimezoneRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling modifyClusterTimezone.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于停止容灾操作。
         * 容灾状态为“运行中”和“停止失败”时可以执行停止容灾操作。
         * 停止后，将无法进行数据同步，请谨慎操作。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pauseDisasterRecovery(pauseDisasterRecoveryRequest?: PauseDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/pause",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (pauseDisasterRecoveryRequest !== null && pauseDisasterRecoveryRequest !== undefined) {
                if (pauseDisasterRecoveryRequest instanceof PauseDisasterRecoveryRequest) {
                    disasterRecoveryId = pauseDisasterRecoveryRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = pauseDisasterRecoveryRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling pauseDisasterRecovery.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置集群管理员密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/reset-password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (resetPasswordRequest !== null && resetPasswordRequest !== undefined) {
                if (resetPasswordRequest instanceof ResetPasswordRequest) {
                    clusterId = resetPasswordRequest.clusterId;
                    body = resetPasswordRequest.body
                } else {
                    clusterId = resetPasswordRequest['cluster_id'];
                    body = resetPasswordRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling resetPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容集群，亦可用于添加空闲节点。默认情况下：表示执行扩容操作。
         * 通过create_node_only字段用以区分当前是**扩容**、**添加空闲节点**：
         * - true：仅添加空闲节点
         * - false：表示执行扩容操作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeCluster(resizeClusterRequest?: ResizeClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (resizeClusterRequest !== null && resizeClusterRequest !== undefined) {
                if (resizeClusterRequest instanceof ResizeClusterRequest) {
                    clusterId = resizeClusterRequest.clusterId;
                    body = resizeClusterRequest.body
                } else {
                    clusterId = resizeClusterRequest['cluster_id'];
                    body = resizeClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling resizeCluster.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从空闲节点扩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeClusterWithExistedNodes(resizeClusterWithExistedNodesRequest?: ResizeClusterWithExistedNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/resize-with-existed-nodes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (resizeClusterWithExistedNodesRequest !== null && resizeClusterWithExistedNodesRequest !== undefined) {
                if (resizeClusterWithExistedNodesRequest instanceof ResizeClusterWithExistedNodesRequest) {
                    clusterId = resizeClusterWithExistedNodesRequest.clusterId;
                    body = resizeClusterWithExistedNodesRequest.body
                } else {
                    clusterId = resizeClusterWithExistedNodesRequest['cluster_id'];
                    body = resizeClusterWithExistedNodesRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling resizeClusterWithExistedNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下发扩容配置文件，完成扩容准备工作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizePreparation(resizePreparationRequest?: ResizePreparationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/resize-with-existed-nodes/preparation",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (resizePreparationRequest !== null && resizePreparationRequest !== undefined) {
                if (resizePreparationRequest instanceof ResizePreparationRequest) {
                    clusterId = resizePreparationRequest.clusterId;
                    body = resizePreparationRequest.body
                } else {
                    clusterId = resizePreparationRequest['cluster_id'];
                    body = resizePreparationRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling resizePreparation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartCluster(restartClusterRequest?: RestartClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/restart",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (restartClusterRequest !== null && restartClusterRequest !== undefined) {
                if (restartClusterRequest instanceof RestartClusterRequest) {
                    clusterId = restartClusterRequest.clusterId;
                    body = restartClusterRequest.body
                } else {
                    clusterId = restartClusterRequest['cluster_id'];
                    body = restartClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling restartCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启逻辑集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartLogicalCluster(restartLogicalClusterRequest?: RestartLogicalClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters/{logical_cluster_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let logicalClusterId;

            if (restartLogicalClusterRequest !== null && restartLogicalClusterRequest !== undefined) {
                if (restartLogicalClusterRequest instanceof RestartLogicalClusterRequest) {
                    clusterId = restartLogicalClusterRequest.clusterId;
                    logicalClusterId = restartLogicalClusterRequest.logicalClusterId;
                } else {
                    clusterId = restartLogicalClusterRequest['cluster_id'];
                    logicalClusterId = restartLogicalClusterRequest['logical_cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling restartLogicalCluster.');
            }
            if (logicalClusterId === null || logicalClusterId === undefined) {
            throw new RequiredError('logicalClusterId','Required parameter logicalClusterId was null or undefined when calling restartLogicalCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId,'logical_cluster_id': logicalClusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于使用快照恢复集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreCluster(restoreClusterRequest?: RestoreClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/snapshots/{snapshot_id}/actions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (restoreClusterRequest !== null && restoreClusterRequest !== undefined) {
                if (restoreClusterRequest instanceof RestoreClusterRequest) {
                    snapshotId = restoreClusterRequest.snapshotId;
                    body = restoreClusterRequest.body
                } else {
                    snapshotId = restoreClusterRequest['snapshot_id'];
                    body = restoreClusterRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling restoreCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于主备集群进行异常切换，备集群恢复可用状态后进行的容灾恢复操作。
         * 容灾恢复仅8.1.2及以上集群版本支持。
         * 容灾恢复会删除灾备集群数据与新生产集群重新建立容灾关系。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreDisaster(restoreDisasterRequest?: RestoreDisasterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/recovery",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (restoreDisasterRequest !== null && restoreDisasterRequest !== undefined) {
                if (restoreDisasterRequest instanceof RestoreDisasterRequest) {
                    disasterRecoveryId = restoreDisasterRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = restoreDisasterRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling restoreDisaster.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复暂停状态下的重分布操作，仅支持DWS2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreRedistribution(restoreRedistributionRequest?: RestoreRedistributionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/redistribution/recovery",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (restoreRedistributionRequest !== null && restoreRedistributionRequest !== undefined) {
                if (restoreRedistributionRequest instanceof RestoreRedistributionRequest) {
                    clusterId = restoreRedistributionRequest.clusterId;
                } else {
                    clusterId = restoreRedistributionRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling restoreRedistribution.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于恢复表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreTable(restoreTableRequest?: RestoreTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/snapshots/{snapshot_id}/table-restore",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (restoreTableRequest !== null && restoreTableRequest !== undefined) {
                if (restoreTableRequest instanceof RestoreTableRequest) {
                    snapshotId = restoreTableRequest.snapshotId;
                    body = restoreTableRequest.body
                } else {
                    snapshotId = restoreTableRequest['snapshot_id'];
                    body = restoreTableRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling restoreTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 轮转加密集群密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rotateKey(rotateKeyRequest?: RotateKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/rotate-key",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (rotateKeyRequest !== null && rotateKeyRequest !== undefined) {
                if (rotateKeyRequest instanceof RotateKeyRequest) {
                    clusterId = rotateKeyRequest.clusterId;
                    body = rotateKeyRequest.body
                } else {
                    clusterId = rotateKeyRequest['cluster_id'];
                    body = rotateKeyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling rotateKey.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改集群描述信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveClusterDescriptionInfo(saveClusterDescriptionInfoRequest?: SaveClusterDescriptionInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/description",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let clusterId;
            
            let namespace;

            if (saveClusterDescriptionInfoRequest !== null && saveClusterDescriptionInfoRequest !== undefined) {
                if (saveClusterDescriptionInfoRequest instanceof SaveClusterDescriptionInfoRequest) {
                    clusterId = saveClusterDescriptionInfoRequest.clusterId;
                    body = saveClusterDescriptionInfoRequest.body
                    namespace = saveClusterDescriptionInfoRequest.namespace;
                } else {
                    clusterId = saveClusterDescriptionInfoRequest['cluster_id'];
                    body = saveClusterDescriptionInfoRequest['body'];
                    namespace = saveClusterDescriptionInfoRequest['namespace'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling saveClusterDescriptionInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新重分布表优先级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRedistributionPriority(setRedistributionPriorityRequest?: SetRedistributionPriorityRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/redistribution/priority",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (setRedistributionPriorityRequest !== null && setRedistributionPriorityRequest !== undefined) {
                if (setRedistributionPriorityRequest instanceof SetRedistributionPriorityRequest) {
                    clusterId = setRedistributionPriorityRequest.clusterId;
                    body = setRedistributionPriorityRequest.body
                } else {
                    clusterId = setRedistributionPriorityRequest['cluster_id'];
                    body = setRedistributionPriorityRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling setRedistributionPriority.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群加密信息。非加密集群不支持该功能，返回信息为空。
         * **约束限制**：
         * 转加密集群起始支持版本：8.0.0
         * 转加密集群guestAgent起始支持版本：8.3.0.200
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterEncryptInfo(showClusterEncryptInfoRequest?: ShowClusterEncryptInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/encrypt-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterEncryptInfoRequest !== null && showClusterEncryptInfoRequest !== undefined) {
                if (showClusterEncryptInfoRequest instanceof ShowClusterEncryptInfoRequest) {
                    clusterId = showClusterEncryptInfoRequest.clusterId;
                } else {
                    clusterId = showClusterEncryptInfoRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterEncryptInfo.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群使用的规格详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterFlavor(showClusterFlavorRequest?: ShowClusterFlavorRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/flavor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let namespace;

            if (showClusterFlavorRequest !== null && showClusterFlavorRequest !== undefined) {
                if (showClusterFlavorRequest instanceof ShowClusterFlavorRequest) {
                    clusterId = showClusterFlavorRequest.clusterId;
                    namespace = showClusterFlavorRequest.namespace;
                } else {
                    clusterId = showClusterFlavorRequest['cluster_id'];
                    namespace = showClusterFlavorRequest['namespace'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterFlavor.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查看当前集群的重分布模式、重分布进度、数据表重分布详情等监控信息。
         * 查看重分布详情功能DWS 2.0 8.1.1.200及以上集群版本支持，其中数据表重分布进度详情仅DWS 2.0 8.2.1及以上集群版本支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterRedistribution(showClusterRedistributionRequest?: ShowClusterRedistributionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/redistribution",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let limit;
            
            let offset;
            
            let dbName;
            
            let tableName;
            
            let type;

            if (showClusterRedistributionRequest !== null && showClusterRedistributionRequest !== undefined) {
                if (showClusterRedistributionRequest instanceof ShowClusterRedistributionRequest) {
                    clusterId = showClusterRedistributionRequest.clusterId;
                    limit = showClusterRedistributionRequest.limit;
                    offset = showClusterRedistributionRequest.offset;
                    dbName = showClusterRedistributionRequest.dbName;
                    tableName = showClusterRedistributionRequest.tableName;
                    type = showClusterRedistributionRequest.type;
                } else {
                    clusterId = showClusterRedistributionRequest['cluster_id'];
                    limit = showClusterRedistributionRequest['limit'];
                    offset = showClusterRedistributionRequest['offset'];
                    dbName = showClusterRedistributionRequest['db_name'];
                    tableName = showClusterRedistributionRequest['table_name'];
                    type = showClusterRedistributionRequest['type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterRedistribution.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口可用于查看磁盘扩容操作时支持的扩容范围。
         * **约束限制**：
         * 磁盘扩容功能仅8.1.1.203及以上版本支持，并且创建集群规格需要为云数仓SSD云盘或实时数仓类型。
         * 按需+折扣套餐包消费模式下，存储扩容后超出折扣套餐包部分将按需收费。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterStorageExpandRange(showClusterStorageExpandRangeRequest?: ShowClusterStorageExpandRangeRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/storage-expand-range",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterStorageExpandRangeRequest !== null && showClusterStorageExpandRangeRequest !== undefined) {
                if (showClusterStorageExpandRangeRequest instanceof ShowClusterStorageExpandRangeRequest) {
                    clusterId = showClusterStorageExpandRangeRequest.clusterId;
                } else {
                    clusterId = showClusterStorageExpandRangeRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterStorageExpandRange.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户侧节点磁盘使用情况信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterVolume(showClusterVolumeRequest?: ShowClusterVolumeRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/volume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterVolumeRequest !== null && showClusterVolumeRequest !== undefined) {
                if (showClusterVolumeRequest instanceof ShowClusterVolumeRequest) {
                    clusterId = showClusterVolumeRequest.clusterId;
                } else {
                    clusterId = showClusterVolumeRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterVolume.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询并显示集群列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusters() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters",
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
         * 查询数据库对象权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatabaseAuthority(showDatabaseAuthorityRequest?: ShowDatabaseAuthorityRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/authority",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let type;
            
            let name;
            
            let database;
            
            let schema;
            
            let table;

            if (showDatabaseAuthorityRequest !== null && showDatabaseAuthorityRequest !== undefined) {
                if (showDatabaseAuthorityRequest instanceof ShowDatabaseAuthorityRequest) {
                    clusterId = showDatabaseAuthorityRequest.clusterId;
                    type = showDatabaseAuthorityRequest.type;
                    name = showDatabaseAuthorityRequest.name;
                    database = showDatabaseAuthorityRequest.database;
                    schema = showDatabaseAuthorityRequest.schema;
                    table = showDatabaseAuthorityRequest.table;
                } else {
                    clusterId = showDatabaseAuthorityRequest['cluster_id'];
                    type = showDatabaseAuthorityRequest['type'];
                    name = showDatabaseAuthorityRequest['name'];
                    database = showDatabaseAuthorityRequest['database'];
                    schema = showDatabaseAuthorityRequest['schema'];
                    table = showDatabaseAuthorityRequest['table'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showDatabaseAuthority.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showDatabaseAuthority.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling showDatabaseAuthority.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (database === null || database === undefined) {
                throw new RequiredError('database','Required parameter database was null or undefined when calling showDatabaseAuthority.');
            }
            if (database !== null && database !== undefined) {
                localVarQueryParameter['database'] = database;
            }
            if (schema !== null && schema !== undefined) {
                localVarQueryParameter['schema'] = schema;
            }
            if (table !== null && table !== undefined) {
                localVarQueryParameter['table'] = table;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获得数据库运维账户状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatabaseOmUserStatus(showDatabaseOmUserStatusRequest?: ShowDatabaseOmUserStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/om-user/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showDatabaseOmUserStatusRequest !== null && showDatabaseOmUserStatusRequest !== undefined) {
                if (showDatabaseOmUserStatusRequest instanceof ShowDatabaseOmUserStatusRequest) {
                    clusterId = showDatabaseOmUserStatusRequest.clusterId;
                } else {
                    clusterId = showDatabaseOmUserStatusRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showDatabaseOmUserStatus.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定用户信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatabaseUser(showDatabaseUserRequest?: ShowDatabaseUserRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let name;

            if (showDatabaseUserRequest !== null && showDatabaseUserRequest !== undefined) {
                if (showDatabaseUserRequest instanceof ShowDatabaseUserRequest) {
                    clusterId = showDatabaseUserRequest.clusterId;
                    name = showDatabaseUserRequest.name;
                } else {
                    clusterId = showDatabaseUserRequest['cluster_id'];
                    name = showDatabaseUserRequest['name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showDatabaseUser.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling showDatabaseUser.');
            }

            options.pathParams = { 'cluster_id': clusterId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询单个容灾详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDisasterDetail(showDisasterDetailRequest?: ShowDisasterDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (showDisasterDetailRequest !== null && showDisasterDetailRequest !== undefined) {
                if (showDisasterDetailRequest instanceof ShowDisasterDetailRequest) {
                    disasterRecoveryId = showDisasterDetailRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = showDisasterDetailRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling showDisasterDetail.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询容灾进度详情信息操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDisasterProgress(showDisasterProgressRequest?: ShowDisasterProgressRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/disaster-recovery/{disaster_recovery_id}/show-progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (showDisasterProgressRequest !== null && showDisasterProgressRequest !== undefined) {
                if (showDisasterProgressRequest instanceof ShowDisasterProgressRequest) {
                    disasterRecoveryId = showDisasterProgressRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = showDisasterProgressRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling showDisasterProgress.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个实例信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstance(showInstanceRequest?: ShowInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceRequest !== null && showInstanceRequest !== undefined) {
                if (showInstanceRequest instanceof ShowInstanceRequest) {
                    instanceId = showInstanceRequest.instanceId;
                } else {
                    instanceId = showInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL执行信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQueryDetail(showQueryDetailRequest?: ShowQueryDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/dms/queries/{query_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let queryId;
            
            let ctime;

            if (showQueryDetailRequest !== null && showQueryDetailRequest !== undefined) {
                if (showQueryDetailRequest instanceof ShowQueryDetailRequest) {
                    clusterId = showQueryDetailRequest.clusterId;
                    queryId = showQueryDetailRequest.queryId;
                    ctime = showQueryDetailRequest.ctime;
                } else {
                    clusterId = showQueryDetailRequest['cluster_id'];
                    queryId = showQueryDetailRequest['query_id'];
                    ctime = showQueryDetailRequest['ctime'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showQueryDetail.');
            }
            if (queryId === null || queryId === undefined) {
            throw new RequiredError('queryId','Required parameter queryId was null or undefined when calling showQueryDetail.');
            }
            if (ctime !== null && ctime !== undefined) {
                localVarQueryParameter['ctime'] = ctime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'query_id': queryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取扩容准备信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResizePreparation(showResizePreparationRequest?: ShowResizePreparationRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/resize-with-existed-nodes/preparation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showResizePreparationRequest !== null && showResizePreparationRequest !== undefined) {
                if (showResizePreparationRequest instanceof ShowResizePreparationRequest) {
                    clusterId = showResizePreparationRequest.clusterId;
                } else {
                    clusterId = showResizePreparationRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showResizePreparation.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询资源统计。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceStatistics(showResourceStatisticsRequest?: ShowResourceStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/resource-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let namespace;

            if (showResourceStatisticsRequest !== null && showResourceStatisticsRequest !== undefined) {
                if (showResourceStatisticsRequest instanceof ShowResourceStatisticsRequest) {
                    namespace = showResourceStatisticsRequest.namespace;
                } else {
                    namespace = showResourceStatisticsRequest['namespace'];
                }
            }

        
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个资源管理计划详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkloadPlan(showWorkloadPlanRequest?: ShowWorkloadPlanRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;

            if (showWorkloadPlanRequest !== null && showWorkloadPlanRequest !== undefined) {
                if (showWorkloadPlanRequest instanceof ShowWorkloadPlanRequest) {
                    clusterId = showWorkloadPlanRequest.clusterId;
                    planId = showWorkloadPlanRequest.planId;
                } else {
                    clusterId = showWorkloadPlanRequest['cluster_id'];
                    planId = showWorkloadPlanRequest['plan_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showWorkloadPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling showWorkloadPlan.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源管理计划阶段详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkloadPlanStage(showWorkloadPlanStageRequest?: ShowWorkloadPlanStageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}/stages/{stage_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;
            
            let stageId;

            if (showWorkloadPlanStageRequest !== null && showWorkloadPlanStageRequest !== undefined) {
                if (showWorkloadPlanStageRequest instanceof ShowWorkloadPlanStageRequest) {
                    clusterId = showWorkloadPlanStageRequest.clusterId;
                    planId = showWorkloadPlanStageRequest.planId;
                    stageId = showWorkloadPlanStageRequest.stageId;
                } else {
                    clusterId = showWorkloadPlanStageRequest['cluster_id'];
                    planId = showWorkloadPlanStageRequest['plan_id'];
                    stageId = showWorkloadPlanStageRequest['stage_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showWorkloadPlanStage.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling showWorkloadPlanStage.');
            }
            if (stageId === null || stageId === undefined) {
            throw new RequiredError('stageId','Required parameter stageId was null or undefined when calling showWorkloadPlanStage.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId,'stage_id': stageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获得资源池详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkloadQueue(showWorkloadQueueRequest?: ShowWorkloadQueueRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues/{queue_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let queueName;
            
            let logicalClusterName;

            if (showWorkloadQueueRequest !== null && showWorkloadQueueRequest !== undefined) {
                if (showWorkloadQueueRequest instanceof ShowWorkloadQueueRequest) {
                    clusterId = showWorkloadQueueRequest.clusterId;
                    queueName = showWorkloadQueueRequest.queueName;
                    logicalClusterName = showWorkloadQueueRequest.logicalClusterName;
                } else {
                    clusterId = showWorkloadQueueRequest['cluster_id'];
                    queueName = showWorkloadQueueRequest['queue_name'];
                    logicalClusterName = showWorkloadQueueRequest['logical_cluster_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showWorkloadQueue.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling showWorkloadQueue.');
            }
            if (logicalClusterName !== null && logicalClusterName !== undefined) {
                localVarQueryParameter['logical_cluster_name'] = logicalClusterName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于缩容集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shrinkCluster(shrinkClusterRequest?: ShrinkClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cluster-shrink",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (shrinkClusterRequest !== null && shrinkClusterRequest !== undefined) {
                if (shrinkClusterRequest instanceof ShrinkClusterRequest) {
                    clusterId = shrinkClusterRequest.clusterId;
                    body = shrinkClusterRequest.body
                } else {
                    clusterId = shrinkClusterRequest['cluster_id'];
                    body = shrinkClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling shrinkCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 逻辑集群缩容，支持从弹性池缩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shrinkLogicalCluster(shrinkLogicalClusterRequest?: ShrinkLogicalClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/logical-clusters/{logical_cluster_id}/shrink",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let logicalClusterId;

            if (shrinkLogicalClusterRequest !== null && shrinkLogicalClusterRequest !== undefined) {
                if (shrinkLogicalClusterRequest instanceof ShrinkLogicalClusterRequest) {
                    clusterId = shrinkLogicalClusterRequest.clusterId;
                    logicalClusterId = shrinkLogicalClusterRequest.logicalClusterId;
                    body = shrinkLogicalClusterRequest.body
                } else {
                    clusterId = shrinkLogicalClusterRequest['cluster_id'];
                    logicalClusterId = shrinkLogicalClusterRequest['logical_cluster_id'];
                    body = shrinkLogicalClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling shrinkLogicalCluster.');
            }
            if (logicalClusterId === null || logicalClusterId === undefined) {
            throw new RequiredError('logicalClusterId','Required parameter logicalClusterId was null or undefined when calling shrinkLogicalCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'logical_cluster_id': logicalClusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startCluster(startClusterRequest?: StartClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (startClusterRequest !== null && startClusterRequest !== undefined) {
                if (startClusterRequest instanceof StartClusterRequest) {
                    clusterId = startClusterRequest.clusterId;
                } else {
                    clusterId = startClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于启动容灾操作。
         * 容灾状态为“未启动”、“启动失败”和“已停止”时可以执行启动容灾操作。
         * 启动容灾后，生产集群和灾备集群将无法进行恢复、扩容、升级、重启、节点替换、更新密码等操作，此外，灾备集群将无法进行备份操作，请谨慎操作。
         * 当容灾启动后，如果灾备集群容灾正常运行且容灾处于恢复状态中，此状态的集群会计费。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startDisasterRecovery(startDisasterRecoveryRequest?: StartDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (startDisasterRecoveryRequest !== null && startDisasterRecoveryRequest !== undefined) {
                if (startDisasterRecoveryRequest instanceof StartDisasterRecoveryRequest) {
                    disasterRecoveryId = startDisasterRecoveryRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = startDisasterRecoveryRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling startDisasterRecovery.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动资源管理计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startWorkloadPlan(startWorkloadPlanRequest?: StartWorkloadPlanRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;

            if (startWorkloadPlanRequest !== null && startWorkloadPlanRequest !== undefined) {
                if (startWorkloadPlanRequest instanceof StartWorkloadPlanRequest) {
                    clusterId = startWorkloadPlanRequest.clusterId;
                    planId = startWorkloadPlanRequest.planId;
                } else {
                    clusterId = startWorkloadPlanRequest['cluster_id'];
                    planId = startWorkloadPlanRequest['plan_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startWorkloadPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling startWorkloadPlan.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopCluster(stopClusterRequest?: StopClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopClusterRequest !== null && stopClusterRequest !== undefined) {
                if (stopClusterRequest instanceof StopClusterRequest) {
                    clusterId = stopClusterRequest.clusterId;
                } else {
                    clusterId = stopClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于暂停运行状态下的重分布操作，重分布暂停状态可设置重分布优先级，修改重分布并发数等操作。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopRedistribution(stopRedistributionRequest?: StopRedistributionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/redistribution/suspend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopRedistributionRequest !== null && stopRedistributionRequest !== undefined) {
                if (stopRedistributionRequest instanceof StopRedistributionRequest) {
                    clusterId = stopRedistributionRequest.clusterId;
                } else {
                    clusterId = stopRedistributionRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopRedistribution.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止资源管理计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopWorkloadPlan(stopWorkloadPlanRequest?: StopWorkloadPlanRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let planId;

            if (stopWorkloadPlanRequest !== null && stopWorkloadPlanRequest !== undefined) {
                if (stopWorkloadPlanRequest instanceof StopWorkloadPlanRequest) {
                    clusterId = stopWorkloadPlanRequest.clusterId;
                    planId = stopWorkloadPlanRequest.planId;
                } else {
                    clusterId = stopWorkloadPlanRequest['cluster_id'];
                    planId = stopWorkloadPlanRequest['plan_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopWorkloadPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling stopWorkloadPlan.');
            }

            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于容灾异常场景下进行主备集群切换操作。
         * “异常切换”按钮用于容灾异常或者生产集群故障情况下主备切换操作。
         * 容灾异常切换仅8.1.2及以上集群版本支持。
         * 异常切换会将灾备集群升为主，若原生产集群故障后存在部分数据未同步到灾备集群，那灾备集群升主后将缺少这些数据，切换时请确认容灾最后同步时间，谨慎操作。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchFailoverDisaster(switchFailoverDisasterRequest?: SwitchFailoverDisasterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/failover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (switchFailoverDisasterRequest !== null && switchFailoverDisasterRequest !== undefined) {
                if (switchFailoverDisasterRequest instanceof SwitchFailoverDisasterRequest) {
                    disasterRecoveryId = switchFailoverDisasterRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = switchFailoverDisasterRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling switchFailoverDisaster.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当集群状态为“非均衡”时会出现某些节点主实例增多，从而负载压力较大。这种情况下集群状态是正常的，但整体性能要低于均衡状态。可进行集群主备恢复操作将集群状态切换为“可用”状态。  
         * **约束限制**：
         *  集群主备恢复仅8.1.1.202及以上版本支持。 
         *  集群主备恢复将会短暂中断业务，中断时间根据用户自身业务量所决定，建议用户在业务低峰期执行此操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchOverCluster(switchOverClusterRequest?: SwitchOverClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/switchover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (switchOverClusterRequest !== null && switchOverClusterRequest !== undefined) {
                if (switchOverClusterRequest instanceof SwitchOverClusterRequest) {
                    clusterId = switchOverClusterRequest.clusterId;
                } else {
                    clusterId = switchOverClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling switchOverCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换资源管理计划阶段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchPlanStage(switchPlanStageRequest?: SwitchPlanStageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}/stage-switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let planId;

            if (switchPlanStageRequest !== null && switchPlanStageRequest !== undefined) {
                if (switchPlanStageRequest instanceof SwitchPlanStageRequest) {
                    clusterId = switchPlanStageRequest.clusterId;
                    planId = switchPlanStageRequest.planId;
                    body = switchPlanStageRequest.body
                } else {
                    clusterId = switchPlanStageRequest['cluster_id'];
                    planId = switchPlanStageRequest['plan_id'];
                    body = switchPlanStageRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling switchPlanStage.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling switchPlanStage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于容灾进行灾备切换操作。
         * “灾备切换”按钮用于在容灾正常情况下主备倒换操作。
         * 容灾状态为“运行中”时可以执行灾备切换操作。
         * 灾备切换需要一定时间，在此期间，原生产集群将可不用。
         * 不同场景下进行灾备切换，RPO（Recovery Point Object，灾难发生后，系统和数据必须恢复到的时间点要求。）说明如下：
         *   生产集群在“可用”的状态下，RPO&#x3D;0。
         *   生产集群在“不可用”的状态下，无法保证RPO&#x3D;0，但数据至少可恢复到生产集群“最近容灾成功时间”。
         * 仅支持DWS 2.0集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchoverDisasterRecovery(switchoverDisasterRecoveryRequest?: SwitchoverDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/switchover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (switchoverDisasterRecoveryRequest !== null && switchoverDisasterRecoveryRequest !== undefined) {
                if (switchoverDisasterRecoveryRequest instanceof SwitchoverDisasterRecoveryRequest) {
                    disasterRecoveryId = switchoverDisasterRecoveryRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = switchoverDisasterRecoveryRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling switchoverDisasterRecovery.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步IAM用户到数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncIamUsers(syncIamUsersRequest?: SyncIamUsersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/sync-iam-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (syncIamUsersRequest !== null && syncIamUsersRequest !== undefined) {
                if (syncIamUsersRequest instanceof SyncIamUsersRequest) {
                    clusterId = syncIamUsersRequest.clusterId;
                } else {
                    clusterId = syncIamUsersRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling syncIamUsers.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新订阅的告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmSub(updateAlarmSubRequest?: UpdateAlarmSubRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/alarm-subs/{alarm_sub_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmSubId;

            if (updateAlarmSubRequest !== null && updateAlarmSubRequest !== undefined) {
                if (updateAlarmSubRequest instanceof UpdateAlarmSubRequest) {
                    alarmSubId = updateAlarmSubRequest.alarmSubId;
                    body = updateAlarmSubRequest.body
                } else {
                    alarmSubId = updateAlarmSubRequest['alarm_sub_id'];
                    body = updateAlarmSubRequest['body'];
                }
            }

        
            if (alarmSubId === null || alarmSubId === undefined) {
            throw new RequiredError('alarmSubId','Required parameter alarmSubId was null or undefined when calling updateAlarmSub.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'alarm_sub_id': alarmSubId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定集群修改域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterDns(updateClusterDnsRequest?: UpdateClusterDnsRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/dns",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateClusterDnsRequest !== null && updateClusterDnsRequest !== undefined) {
                if (updateClusterDnsRequest instanceof UpdateClusterDnsRequest) {
                    clusterId = updateClusterDnsRequest.clusterId;
                    body = updateClusterDnsRequest.body
                } else {
                    clusterId = updateClusterDnsRequest['cluster_id'];
                    body = updateClusterDnsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterDns.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改集群使用的参数配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConfiguration(updateConfigurationRequest?: UpdateConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/configurations/{configuration_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let configurationId;

            if (updateConfigurationRequest !== null && updateConfigurationRequest !== undefined) {
                if (updateConfigurationRequest instanceof UpdateConfigurationRequest) {
                    clusterId = updateConfigurationRequest.clusterId;
                    configurationId = updateConfigurationRequest.configurationId;
                    body = updateConfigurationRequest.body
                } else {
                    clusterId = updateConfigurationRequest['cluster_id'];
                    configurationId = updateConfigurationRequest['configuration_id'];
                    body = updateConfigurationRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateConfiguration.');
            }
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling updateConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新一个数据源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDataSource(updateDataSourceRequest?: UpdateDataSourceRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ext-data-sources/{ext_data_source_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let extDataSourceId;

            if (updateDataSourceRequest !== null && updateDataSourceRequest !== undefined) {
                if (updateDataSourceRequest instanceof UpdateDataSourceRequest) {
                    clusterId = updateDataSourceRequest.clusterId;
                    extDataSourceId = updateDataSourceRequest.extDataSourceId;
                    body = updateDataSourceRequest.body
                } else {
                    clusterId = updateDataSourceRequest['cluster_id'];
                    extDataSourceId = updateDataSourceRequest['ext_data_source_id'];
                    body = updateDataSourceRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateDataSource.');
            }
            if (extDataSourceId === null || extDataSourceId === undefined) {
            throw new RequiredError('extDataSourceId','Required parameter extDataSourceId was null or undefined when calling updateDataSource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'ext_data_source_id': extDataSourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据库对象权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabaseAuthority(updateDatabaseAuthorityRequest?: UpdateDatabaseAuthorityRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/authority",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateDatabaseAuthorityRequest !== null && updateDatabaseAuthorityRequest !== undefined) {
                if (updateDatabaseAuthorityRequest instanceof UpdateDatabaseAuthorityRequest) {
                    clusterId = updateDatabaseAuthorityRequest.clusterId;
                    body = updateDatabaseAuthorityRequest.body
                } else {
                    clusterId = updateDatabaseAuthorityRequest['cluster_id'];
                    body = updateDatabaseAuthorityRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateDatabaseAuthority.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定用户信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabaseUserInfo(updateDatabaseUserInfoRequest?: UpdateDatabaseUserInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users/{name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let name;

            if (updateDatabaseUserInfoRequest !== null && updateDatabaseUserInfoRequest !== undefined) {
                if (updateDatabaseUserInfoRequest instanceof UpdateDatabaseUserInfoRequest) {
                    clusterId = updateDatabaseUserInfoRequest.clusterId;
                    name = updateDatabaseUserInfoRequest.name;
                    body = updateDatabaseUserInfoRequest.body
                } else {
                    clusterId = updateDatabaseUserInfoRequest['cluster_id'];
                    name = updateDatabaseUserInfoRequest['name'];
                    body = updateDatabaseUserInfoRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateDatabaseUserInfo.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling updateDatabaseUserInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新容灾配置操作。
         * 容灾状态为“未启动”或“已停止”时，可以执行容灾配置修改操作。
         * 新的配置在容灾重新启动后生效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDisasterInfo(updateDisasterInfoRequest?: UpdateDisasterInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let disasterRecoveryId;

            if (updateDisasterInfoRequest !== null && updateDisasterInfoRequest !== undefined) {
                if (updateDisasterInfoRequest instanceof UpdateDisasterInfoRequest) {
                    disasterRecoveryId = updateDisasterInfoRequest.disasterRecoveryId;
                    body = updateDisasterInfoRequest.body
                } else {
                    disasterRecoveryId = updateDisasterInfoRequest['disaster_recovery_id'];
                    body = updateDisasterInfoRequest['body'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling updateDisasterInfo.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新订阅事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEventSub(updateEventSubRequest?: UpdateEventSubRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/event-subs/{event_sub_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let eventSubId;

            if (updateEventSubRequest !== null && updateEventSubRequest !== undefined) {
                if (updateEventSubRequest instanceof UpdateEventSubRequest) {
                    eventSubId = updateEventSubRequest.eventSubId;
                    body = updateEventSubRequest.body
                } else {
                    eventSubId = updateEventSubRequest['event_sub_id'];
                    body = updateEventSubRequest['body'];
                }
            }

        
            if (eventSubId === null || eventSubId === undefined) {
            throw new RequiredError('eventSubId','Required parameter eventSubId was null or undefined when calling updateEventSub.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'event_sub_id': eventSubId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑修改逻辑集群。接口根据提交的请求体判断当前操作是逻辑集群缩容或者扩容。
         * 场景一：原始的逻辑集群有6个节点（两个环），提交请求时的请求体只有1个环，此时为逻辑集群缩容。
         * 场景二：原始的逻辑集群有6个节点（两个环），提交请求时的请求体中有3个环，此时为逻辑集群扩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogicalCluster(updateLogicalClusterRequest?: UpdateLogicalClusterRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/logical-clusters/{logical_cluster_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let logicalClusterId;

            if (updateLogicalClusterRequest !== null && updateLogicalClusterRequest !== undefined) {
                if (updateLogicalClusterRequest instanceof UpdateLogicalClusterRequest) {
                    clusterId = updateLogicalClusterRequest.clusterId;
                    logicalClusterId = updateLogicalClusterRequest.logicalClusterId;
                    body = updateLogicalClusterRequest.body
                } else {
                    clusterId = updateLogicalClusterRequest['cluster_id'];
                    logicalClusterId = updateLogicalClusterRequest['logical_cluster_id'];
                    body = updateLogicalClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateLogicalCluster.');
            }
            if (logicalClusterId === null || logicalClusterId === undefined) {
            throw new RequiredError('logicalClusterId','Required parameter logicalClusterId was null or undefined when calling updateLogicalCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'logical_cluster_id': logicalClusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑逻辑集群增删计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogicalClusterPlan(updateLogicalClusterPlanRequest?: UpdateLogicalClusterPlanRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/clusters/{cluster_id}/logical-cluster-plans/{plan_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let planId;

            if (updateLogicalClusterPlanRequest !== null && updateLogicalClusterPlanRequest !== undefined) {
                if (updateLogicalClusterPlanRequest instanceof UpdateLogicalClusterPlanRequest) {
                    clusterId = updateLogicalClusterPlanRequest.clusterId;
                    planId = updateLogicalClusterPlanRequest.planId;
                    body = updateLogicalClusterPlanRequest.body
                } else {
                    clusterId = updateLogicalClusterPlanRequest['cluster_id'];
                    planId = updateLogicalClusterPlanRequest['plan_id'];
                    body = updateLogicalClusterPlanRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateLogicalClusterPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling updateLogicalClusterPlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 您可以根据业务需求，设置可维护时间段。建议将可维护时间段设置在业务低峰期，避免业务在维护过程中异常中断。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMaintenanceWindow(updateMaintenanceWindowRequest?: UpdateMaintenanceWindowRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/maintenance-window",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateMaintenanceWindowRequest !== null && updateMaintenanceWindowRequest !== undefined) {
                if (updateMaintenanceWindowRequest instanceof UpdateMaintenanceWindowRequest) {
                    clusterId = updateMaintenanceWindowRequest.clusterId;
                    body = updateMaintenanceWindowRequest.body
                } else {
                    clusterId = updateMaintenanceWindowRequest['cluster_id'];
                    body = updateMaintenanceWindowRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateMaintenanceWindow.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源池资源配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateQueueResources(updateQueueResourcesRequest?: UpdateQueueResourcesRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues/{queue_name}/resources",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let queueName;

            if (updateQueueResourcesRequest !== null && updateQueueResourcesRequest !== undefined) {
                if (updateQueueResourcesRequest instanceof UpdateQueueResourcesRequest) {
                    clusterId = updateQueueResourcesRequest.clusterId;
                    queueName = updateQueueResourcesRequest.queueName;
                    body = updateQueueResourcesRequest.body
                } else {
                    clusterId = updateQueueResourcesRequest['cluster_id'];
                    queueName = updateQueueResourcesRequest['queue_name'];
                    body = updateQueueResourcesRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateQueueResources.');
            }
            if (queueName === null || queueName === undefined) {
            throw new RequiredError('queueName','Required parameter queueName was null or undefined when calling updateQueueResources.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'queue_name': queueName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新重分布配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRedistributionConfigurations(updateRedistributionConfigurationsRequest?: UpdateRedistributionConfigurationsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/redistribution/configurations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateRedistributionConfigurationsRequest !== null && updateRedistributionConfigurationsRequest !== undefined) {
                if (updateRedistributionConfigurationsRequest instanceof UpdateRedistributionConfigurationsRequest) {
                    clusterId = updateRedistributionConfigurationsRequest.clusterId;
                    body = updateRedistributionConfigurationsRequest.body
                } else {
                    clusterId = updateRedistributionConfigurationsRequest['cluster_id'];
                    body = updateRedistributionConfigurationsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateRedistributionConfigurations.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新模式空间限额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSchemas(updateSchemasRequest?: UpdateSchemasRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/databases/{database_name}/schemas",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let databaseName;

            if (updateSchemasRequest !== null && updateSchemasRequest !== undefined) {
                if (updateSchemasRequest instanceof UpdateSchemasRequest) {
                    clusterId = updateSchemasRequest.clusterId;
                    databaseName = updateSchemasRequest.databaseName;
                    body = updateSchemasRequest.body
                } else {
                    clusterId = updateSchemasRequest['cluster_id'];
                    databaseName = updateSchemasRequest['database_name'];
                    body = updateSchemasRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateSchemas.');
            }
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling updateSchemas.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改资源管理计划阶段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkloadPlanStage(updateWorkloadPlanStageRequest?: UpdateWorkloadPlanStageRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans/{plan_id}/stages/{stage_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let planId;
            
            let stageId;

            if (updateWorkloadPlanStageRequest !== null && updateWorkloadPlanStageRequest !== undefined) {
                if (updateWorkloadPlanStageRequest instanceof UpdateWorkloadPlanStageRequest) {
                    clusterId = updateWorkloadPlanStageRequest.clusterId;
                    planId = updateWorkloadPlanStageRequest.planId;
                    stageId = updateWorkloadPlanStageRequest.stageId;
                    body = updateWorkloadPlanStageRequest.body
                } else {
                    clusterId = updateWorkloadPlanStageRequest['cluster_id'];
                    planId = updateWorkloadPlanStageRequest['plan_id'];
                    stageId = updateWorkloadPlanStageRequest['stage_id'];
                    body = updateWorkloadPlanStageRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateWorkloadPlanStage.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling updateWorkloadPlanStage.');
            }
            if (stageId === null || stageId === undefined) {
            throw new RequiredError('stageId','Required parameter stageId was null or undefined when calling updateWorkloadPlanStage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'plan_id': planId,'stage_id': stageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新异常规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkloadRule(updateWorkloadRuleRequest?: UpdateWorkloadRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/clusters/{cluster_id}/workload/rules/{rule_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let ruleName;

            if (updateWorkloadRuleRequest !== null && updateWorkloadRuleRequest !== undefined) {
                if (updateWorkloadRuleRequest instanceof UpdateWorkloadRuleRequest) {
                    clusterId = updateWorkloadRuleRequest.clusterId;
                    ruleName = updateWorkloadRuleRequest.ruleName;
                    body = updateWorkloadRuleRequest.body
                } else {
                    clusterId = updateWorkloadRuleRequest['cluster_id'];
                    ruleName = updateWorkloadRuleRequest['rule_name'];
                    body = updateWorkloadRuleRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateWorkloadRule.');
            }
            if (ruleName === null || ruleName === undefined) {
            throw new RequiredError('ruleName','Required parameter ruleName was null or undefined when calling updateWorkloadRule.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'rule_name': ruleName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DwsClient {
    return new DwsClient(client);
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