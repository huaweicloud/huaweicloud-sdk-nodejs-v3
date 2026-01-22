import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessPolicyEntity } from './model/AccessPolicyEntity';
import { AccessPolicyTopicEntity } from './model/AccessPolicyTopicEntity';
import { AlterAutoVolumeExpandConfig } from './model/AlterAutoVolumeExpandConfig';
import { AvailableZonesResp } from './model/AvailableZonesResp';
import { BatchCreateOrDeleteKafkaTagRequest } from './model/BatchCreateOrDeleteKafkaTagRequest';
import { BatchCreateOrDeleteKafkaTagResponse } from './model/BatchCreateOrDeleteKafkaTagResponse';
import { BatchCreateOrDeleteTagReq } from './model/BatchCreateOrDeleteTagReq';
import { BatchDeleteGroupReq } from './model/BatchDeleteGroupReq';
import { BatchDeleteGroupRequest } from './model/BatchDeleteGroupRequest';
import { BatchDeleteGroupRespFailedGroups } from './model/BatchDeleteGroupRespFailedGroups';
import { BatchDeleteGroupResponse } from './model/BatchDeleteGroupResponse';
import { BatchDeleteInstanceTopicReq } from './model/BatchDeleteInstanceTopicReq';
import { BatchDeleteInstanceTopicRequest } from './model/BatchDeleteInstanceTopicRequest';
import { BatchDeleteInstanceTopicRespTopics } from './model/BatchDeleteInstanceTopicRespTopics';
import { BatchDeleteInstanceTopicResponse } from './model/BatchDeleteInstanceTopicResponse';
import { BatchDeleteInstanceUsersReq } from './model/BatchDeleteInstanceUsersReq';
import { BatchDeleteInstanceUsersRequest } from './model/BatchDeleteInstanceUsersRequest';
import { BatchDeleteInstanceUsersResponse } from './model/BatchDeleteInstanceUsersResponse';
import { BatchDeleteMessageDiagnosisReportsReq } from './model/BatchDeleteMessageDiagnosisReportsReq';
import { BatchDeleteMessageDiagnosisReportsRequest } from './model/BatchDeleteMessageDiagnosisReportsRequest';
import { BatchDeleteMessageDiagnosisReportsResponse } from './model/BatchDeleteMessageDiagnosisReportsResponse';
import { BatchDeleteMessageDiagnosisRespResults } from './model/BatchDeleteMessageDiagnosisRespResults';
import { BatchModiftGroupDescriptionReq } from './model/BatchModiftGroupDescriptionReq';
import { BatchRestartOrDeleteInstanceReq } from './model/BatchRestartOrDeleteInstanceReq';
import { BatchRestartOrDeleteInstanceRespResults } from './model/BatchRestartOrDeleteInstanceRespResults';
import { BatchRestartOrDeleteInstancesRequest } from './model/BatchRestartOrDeleteInstancesRequest';
import { BatchRestartOrDeleteInstancesResponse } from './model/BatchRestartOrDeleteInstancesResponse';
import { BatchResumeInstanceReq } from './model/BatchResumeInstanceReq';
import { BssParam } from './model/BssParam';
import { CloseKafkaManagerRequest } from './model/CloseKafkaManagerRequest';
import { CloseKafkaManagerResponse } from './model/CloseKafkaManagerResponse';
import { CreateConnectorReq } from './model/CreateConnectorReq';
import { CreateConnectorRequest } from './model/CreateConnectorRequest';
import { CreateConnectorResponse } from './model/CreateConnectorResponse';
import { CreateConnectorTaskRequest } from './model/CreateConnectorTaskRequest';
import { CreateConnectorTaskResponse } from './model/CreateConnectorTaskResponse';
import { CreateGroupReq } from './model/CreateGroupReq';
import { CreateGroupResp } from './model/CreateGroupResp';
import { CreateInstanceByEngineReq } from './model/CreateInstanceByEngineReq';
import { CreateInstanceByEngineRequest } from './model/CreateInstanceByEngineRequest';
import { CreateInstanceByEngineResponse } from './model/CreateInstanceByEngineResponse';
import { CreateInstanceTopicReq } from './model/CreateInstanceTopicReq';
import { CreateInstanceTopicReqTopicOtherConfigs } from './model/CreateInstanceTopicReqTopicOtherConfigs';
import { CreateInstanceTopicRequest } from './model/CreateInstanceTopicRequest';
import { CreateInstanceTopicResponse } from './model/CreateInstanceTopicResponse';
import { CreateInstanceUserReq } from './model/CreateInstanceUserReq';
import { CreateInstanceUserRequest } from './model/CreateInstanceUserRequest';
import { CreateInstanceUserResponse } from './model/CreateInstanceUserResponse';
import { CreateKafkaConsumerGroupRequest } from './model/CreateKafkaConsumerGroupRequest';
import { CreateKafkaConsumerGroupResponse } from './model/CreateKafkaConsumerGroupResponse';
import { CreateKafkaReassignmentTaskRequest } from './model/CreateKafkaReassignmentTaskRequest';
import { CreateKafkaReassignmentTaskResponse } from './model/CreateKafkaReassignmentTaskResponse';
import { CreateKafkaRebalanceLogTaskRequest } from './model/CreateKafkaRebalanceLogTaskRequest';
import { CreateKafkaRebalanceLogTaskResponse } from './model/CreateKafkaRebalanceLogTaskResponse';
import { CreateKafkaTopicQuotaRequest } from './model/CreateKafkaTopicQuotaRequest';
import { CreateKafkaTopicQuotaResponse } from './model/CreateKafkaTopicQuotaResponse';
import { CreateKafkaUserClientQuotaTaskReq } from './model/CreateKafkaUserClientQuotaTaskReq';
import { CreateKafkaUserClientQuotaTaskRequest } from './model/CreateKafkaUserClientQuotaTaskRequest';
import { CreateKafkaUserClientQuotaTaskResponse } from './model/CreateKafkaUserClientQuotaTaskResponse';
import { CreateMessageDiagnosisTaskReq } from './model/CreateMessageDiagnosisTaskReq';
import { CreateMessageDiagnosisTaskRequest } from './model/CreateMessageDiagnosisTaskRequest';
import { CreateMessageDiagnosisTaskResponse } from './model/CreateMessageDiagnosisTaskResponse';
import { CreatePartitionReq } from './model/CreatePartitionReq';
import { CreatePartitionRequest } from './model/CreatePartitionRequest';
import { CreatePartitionResponse } from './model/CreatePartitionResponse';
import { CreatePostPaidInstanceReq } from './model/CreatePostPaidInstanceReq';
import { CreatePostPaidInstanceRequest } from './model/CreatePostPaidInstanceRequest';
import { CreatePostPaidInstanceResponse } from './model/CreatePostPaidInstanceResponse';
import { CreatePostPaidKafkaInstanceRequest } from './model/CreatePostPaidKafkaInstanceRequest';
import { CreatePostPaidKafkaInstanceResponse } from './model/CreatePostPaidKafkaInstanceResponse';
import { CreateReassignmentTaskRequest } from './model/CreateReassignmentTaskRequest';
import { CreateReassignmentTaskResponse } from './model/CreateReassignmentTaskResponse';
import { CreateSmartConnectTaskReq } from './model/CreateSmartConnectTaskReq';
import { DeleteBackgroundTaskRequest } from './model/DeleteBackgroundTaskRequest';
import { DeleteBackgroundTaskResponse } from './model/DeleteBackgroundTaskResponse';
import { DeleteConnectorRequest } from './model/DeleteConnectorRequest';
import { DeleteConnectorResponse } from './model/DeleteConnectorResponse';
import { DeleteConnectorTaskRequest } from './model/DeleteConnectorTaskRequest';
import { DeleteConnectorTaskResponse } from './model/DeleteConnectorTaskResponse';
import { DeleteConsumerGroupOffsetsRequest } from './model/DeleteConsumerGroupOffsetsRequest';
import { DeleteConsumerGroupOffsetsRequestBody } from './model/DeleteConsumerGroupOffsetsRequestBody';
import { DeleteConsumerGroupOffsetsResponse } from './model/DeleteConsumerGroupOffsetsResponse';
import { DeleteConsumerGroupOffsetsResponseEntity } from './model/DeleteConsumerGroupOffsetsResponseEntity';
import { DeleteGroupRequest } from './model/DeleteGroupRequest';
import { DeleteGroupResponse } from './model/DeleteGroupResponse';
import { DeleteInstanceConsumerGroupRequest } from './model/DeleteInstanceConsumerGroupRequest';
import { DeleteInstanceConsumerGroupResponse } from './model/DeleteInstanceConsumerGroupResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteKafkaMessageRequest } from './model/DeleteKafkaMessageRequest';
import { DeleteKafkaMessageRequestBody } from './model/DeleteKafkaMessageRequestBody';
import { DeleteKafkaMessageResponse } from './model/DeleteKafkaMessageResponse';
import { DeleteKafkaTopicMessagesRequest } from './model/DeleteKafkaTopicMessagesRequest';
import { DeleteKafkaTopicMessagesResponse } from './model/DeleteKafkaTopicMessagesResponse';
import { DeleteKafkaTopicQuotaRequest } from './model/DeleteKafkaTopicQuotaRequest';
import { DeleteKafkaTopicQuotaResponse } from './model/DeleteKafkaTopicQuotaResponse';
import { DeleteKafkaUserClientQuotaTaskReq } from './model/DeleteKafkaUserClientQuotaTaskReq';
import { DeleteKafkaUserClientQuotaTaskRequest } from './model/DeleteKafkaUserClientQuotaTaskRequest';
import { DeleteKafkaUserClientQuotaTaskResponse } from './model/DeleteKafkaUserClientQuotaTaskResponse';
import { DeleteScheduledTaskRequest } from './model/DeleteScheduledTaskRequest';
import { DeleteScheduledTaskResponse } from './model/DeleteScheduledTaskResponse';
import { DescribeGroupsRespGroup } from './model/DescribeGroupsRespGroup';
import { DiskusageEntity } from './model/DiskusageEntity';
import { DiskusageTopicEntity } from './model/DiskusageTopicEntity';
import { EnableDnsRequest } from './model/EnableDnsRequest';
import { EnableDnsResponse } from './model/EnableDnsResponse';
import { ExtendProductInfoEntity } from './model/ExtendProductInfoEntity';
import { ExtendProductIosEntity } from './model/ExtendProductIosEntity';
import { ExtendProductPropertiesEntity } from './model/ExtendProductPropertiesEntity';
import { ExtendProductSupportFeaturesEntity } from './model/ExtendProductSupportFeaturesEntity';
import { GroupCreateReq } from './model/GroupCreateReq';
import { GroupInfoSimple } from './model/GroupInfoSimple';
import { GroupMemberEntity } from './model/GroupMemberEntity';
import { GroupMessageOffsetsDetailEntity } from './model/GroupMessageOffsetsDetailEntity';
import { GroupTopicEntity } from './model/GroupTopicEntity';
import { InstanceConfig } from './model/InstanceConfig';
import { InstanceRecycleInfo } from './model/InstanceRecycleInfo';
import { InstanceResumeResult } from './model/InstanceResumeResult';
import { KafkaDiagnosisCheckEntity } from './model/KafkaDiagnosisCheckEntity';
import { KafkaMessageDiagnosisConclusionEntity } from './model/KafkaMessageDiagnosisConclusionEntity';
import { KafkaMessageDiagnosisDimensionEntity } from './model/KafkaMessageDiagnosisDimensionEntity';
import { KafkaMessageDiagnosisItemEntity } from './model/KafkaMessageDiagnosisItemEntity';
import { KafkaMessageDiagnosisReportInfoEntity } from './model/KafkaMessageDiagnosisReportInfoEntity';
import { KafkaTopicPartitionResponsePartitions } from './model/KafkaTopicPartitionResponsePartitions';
import { KafkaTopicProducerResponseProducers } from './model/KafkaTopicProducerResponseProducers';
import { KafkaTopicQuota } from './model/KafkaTopicQuota';
import { ListAvailableZonesRequest } from './model/ListAvailableZonesRequest';
import { ListAvailableZonesResponse } from './model/ListAvailableZonesResponse';
import { ListBackgroundTasksRequest } from './model/ListBackgroundTasksRequest';
import { ListBackgroundTasksRespTasks } from './model/ListBackgroundTasksRespTasks';
import { ListBackgroundTasksResponse } from './model/ListBackgroundTasksResponse';
import { ListConfigFeatures } from './model/ListConfigFeatures';
import { ListConfigFeaturesRequest } from './model/ListConfigFeaturesRequest';
import { ListConfigFeaturesResponse } from './model/ListConfigFeaturesResponse';
import { ListConnectorTasksRequest } from './model/ListConnectorTasksRequest';
import { ListConnectorTasksResponse } from './model/ListConnectorTasksResponse';
import { ListEngineIosEntity } from './model/ListEngineIosEntity';
import { ListEngineProductsEntity } from './model/ListEngineProductsEntity';
import { ListEngineProductsRequest } from './model/ListEngineProductsRequest';
import { ListEngineProductsResponse } from './model/ListEngineProductsResponse';
import { ListEnginePropertiesEntity } from './model/ListEnginePropertiesEntity';
import { ListEngineSupportFeaturesEntity } from './model/ListEngineSupportFeaturesEntity';
import { ListEngineSupportFeaturesPropertiesEntity } from './model/ListEngineSupportFeaturesPropertiesEntity';
import { ListInstanceConsumerGroupMembersRequest } from './model/ListInstanceConsumerGroupMembersRequest';
import { ListInstanceConsumerGroupMembersResponse } from './model/ListInstanceConsumerGroupMembersResponse';
import { ListInstanceConsumerGroupMessageOffsetRequest } from './model/ListInstanceConsumerGroupMessageOffsetRequest';
import { ListInstanceConsumerGroupMessageOffsetResponse } from './model/ListInstanceConsumerGroupMessageOffsetResponse';
import { ListInstanceConsumerGroupRequest } from './model/ListInstanceConsumerGroupRequest';
import { ListInstanceConsumerGroupResponse } from './model/ListInstanceConsumerGroupResponse';
import { ListInstanceConsumerGroupTopicsRequest } from './model/ListInstanceConsumerGroupTopicsRequest';
import { ListInstanceConsumerGroupTopicsResponse } from './model/ListInstanceConsumerGroupTopicsResponse';
import { ListInstanceConsumerGroupsRequest } from './model/ListInstanceConsumerGroupsRequest';
import { ListInstanceConsumerGroupsResponse } from './model/ListInstanceConsumerGroupsResponse';
import { ListInstanceTopicsRequest } from './model/ListInstanceTopicsRequest';
import { ListInstanceTopicsResponse } from './model/ListInstanceTopicsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListMessageDiagnosisReportsRequest } from './model/ListMessageDiagnosisReportsRequest';
import { ListMessageDiagnosisReportsResponse } from './model/ListMessageDiagnosisReportsResponse';
import { ListObsBucketsRequest } from './model/ListObsBucketsRequest';
import { ListObsBucketsResponse } from './model/ListObsBucketsResponse';
import { ListObsBucketsResponseBody } from './model/ListObsBucketsResponseBody';
import { ListProductsRequest } from './model/ListProductsRequest';
import { ListProductsRespDetail } from './model/ListProductsRespDetail';
import { ListProductsRespDetail1 } from './model/ListProductsRespDetail1';
import { ListProductsRespHourly } from './model/ListProductsRespHourly';
import { ListProductsRespIo } from './model/ListProductsRespIo';
import { ListProductsRespIo1 } from './model/ListProductsRespIo1';
import { ListProductsRespMonthly } from './model/ListProductsRespMonthly';
import { ListProductsRespValues } from './model/ListProductsRespValues';
import { ListProductsRespValues1 } from './model/ListProductsRespValues1';
import { ListProductsResponse } from './model/ListProductsResponse';
import { ListScheduledTasksRequest } from './model/ListScheduledTasksRequest';
import { ListScheduledTasksResponse } from './model/ListScheduledTasksResponse';
import { ListTopicPartitionsRequest } from './model/ListTopicPartitionsRequest';
import { ListTopicPartitionsResponse } from './model/ListTopicPartitionsResponse';
import { ListTopicProducersRequest } from './model/ListTopicProducersRequest';
import { ListTopicProducersResponse } from './model/ListTopicProducersResponse';
import { ListUserPoliciesRequest } from './model/ListUserPoliciesRequest';
import { ListUserPoliciesResponse } from './model/ListUserPoliciesResponse';
import { MaintainWindowsEntity } from './model/MaintainWindowsEntity';
import { MessagesEntity } from './model/MessagesEntity';
import { ModifyConnectorTaskRequest } from './model/ModifyConnectorTaskRequest';
import { ModifyConnectorTaskResponse } from './model/ModifyConnectorTaskResponse';
import { ModifyInstanceConfig } from './model/ModifyInstanceConfig';
import { ModifyInstanceConfigsReq } from './model/ModifyInstanceConfigsReq';
import { ModifyInstanceConfigsRequest } from './model/ModifyInstanceConfigsRequest';
import { ModifyInstanceConfigsResponse } from './model/ModifyInstanceConfigsResponse';
import { ModifyKafkaPublicIPAccessSwitchReq } from './model/ModifyKafkaPublicIPAccessSwitchReq';
import { ModifyKafkaPublicIpAccessSwitchRequest } from './model/ModifyKafkaPublicIpAccessSwitchRequest';
import { ModifyKafkaPublicIpAccessSwitchResponse } from './model/ModifyKafkaPublicIpAccessSwitchResponse';
import { ModifyKafkaTopicQuotaRequest } from './model/ModifyKafkaTopicQuotaRequest';
import { ModifyKafkaTopicQuotaResponse } from './model/ModifyKafkaTopicQuotaResponse';
import { ModifyRecyclePolicyReq } from './model/ModifyRecyclePolicyReq';
import { ModifyRecyclePolicyRequest } from './model/ModifyRecyclePolicyRequest';
import { ModifyRecyclePolicyResponse } from './model/ModifyRecyclePolicyResponse';
import { PartitionOffsetEntity } from './model/PartitionOffsetEntity';
import { PartitionReassignEntity } from './model/PartitionReassignEntity';
import { PartitionReassignRequest } from './model/PartitionReassignRequest';
import { PartitionResp } from './model/PartitionResp';
import { PauseConnectorTaskRequest } from './model/PauseConnectorTaskRequest';
import { PauseConnectorTaskResponse } from './model/PauseConnectorTaskResponse';
import { PlainSslEnableRequest } from './model/PlainSslEnableRequest';
import { PolicyEntity } from './model/PolicyEntity';
import { PortProtocol } from './model/PortProtocol';
import { PortProtocolsEntity } from './model/PortProtocolsEntity';
import { Quota } from './model/Quota';
import { QuotaResourceEntity } from './model/QuotaResourceEntity';
import { QuotasRespQuotas } from './model/QuotasRespQuotas';
import { ResetManagerPasswordReq } from './model/ResetManagerPasswordReq';
import { ResetManagerPasswordRequest } from './model/ResetManagerPasswordRequest';
import { ResetManagerPasswordResponse } from './model/ResetManagerPasswordResponse';
import { ResetMessageOffsetReq } from './model/ResetMessageOffsetReq';
import { ResetMessageOffsetRequest } from './model/ResetMessageOffsetRequest';
import { ResetMessageOffsetResponse } from './model/ResetMessageOffsetResponse';
import { ResetMessageOffsetWithEngineRequest } from './model/ResetMessageOffsetWithEngineRequest';
import { ResetMessageOffsetWithEngineResponse } from './model/ResetMessageOffsetWithEngineResponse';
import { ResetPasswordReq } from './model/ResetPasswordReq';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { ResetUserPasswordReq } from './model/ResetUserPasswordReq';
import { ResetUserPasswrodRequest } from './model/ResetUserPasswrodRequest';
import { ResetUserPasswrodResponse } from './model/ResetUserPasswrodResponse';
import { ResizeEngineInstanceReq } from './model/ResizeEngineInstanceReq';
import { ResizeEngineInstanceRequest } from './model/ResizeEngineInstanceRequest';
import { ResizeEngineInstanceResponse } from './model/ResizeEngineInstanceResponse';
import { ResizeInstanceReq } from './model/ResizeInstanceReq';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { ResizeKafkaInstanceRequest } from './model/ResizeKafkaInstanceRequest';
import { ResizeKafkaInstanceResponse } from './model/ResizeKafkaInstanceResponse';
import { RestartConnectorTaskRequest } from './model/RestartConnectorTaskRequest';
import { RestartConnectorTaskResponse } from './model/RestartConnectorTaskResponse';
import { RestartManagerRequest } from './model/RestartManagerRequest';
import { RestartManagerResponse } from './model/RestartManagerResponse';
import { RestartSmartConnectorTaskRequest } from './model/RestartSmartConnectorTaskRequest';
import { RestartSmartConnectorTaskResponse } from './model/RestartSmartConnectorTaskResponse';
import { RestoreRecycleInstanceRequest } from './model/RestoreRecycleInstanceRequest';
import { RestoreRecycleInstanceResponse } from './model/RestoreRecycleInstanceResponse';
import { ResumeConnectorTaskRequest } from './model/ResumeConnectorTaskRequest';
import { ResumeConnectorTaskResponse } from './model/ResumeConnectorTaskResponse';
import { ScheduledTaskEntity } from './model/ScheduledTaskEntity';
import { SendKafkaMessageRequest } from './model/SendKafkaMessageRequest';
import { SendKafkaMessageRequestBody } from './model/SendKafkaMessageRequestBody';
import { SendKafkaMessageRequestBodyPropertyList } from './model/SendKafkaMessageRequestBodyPropertyList';
import { SendKafkaMessageResponse } from './model/SendKafkaMessageResponse';
import { SetUserPoliciesReq } from './model/SetUserPoliciesReq';
import { SetUserPoliciesRequest } from './model/SetUserPoliciesRequest';
import { SetUserPoliciesResponse } from './model/SetUserPoliciesResponse';
import { ShowBackgroundTaskProgressRequest } from './model/ShowBackgroundTaskProgressRequest';
import { ShowBackgroundTaskProgressResponse } from './model/ShowBackgroundTaskProgressResponse';
import { ShowBackgroundTaskRequest } from './model/ShowBackgroundTaskRequest';
import { ShowBackgroundTaskResponse } from './model/ShowBackgroundTaskResponse';
import { ShowCesHierarchyRequest } from './model/ShowCesHierarchyRequest';
import { ShowCesHierarchyResponse } from './model/ShowCesHierarchyResponse';
import { ShowCeshierarchyRespChildren } from './model/ShowCeshierarchyRespChildren';
import { ShowCeshierarchyRespDimensions } from './model/ShowCeshierarchyRespDimensions';
import { ShowCeshierarchyRespGroups } from './model/ShowCeshierarchyRespGroups';
import { ShowCeshierarchyRespInstanceIds } from './model/ShowCeshierarchyRespInstanceIds';
import { ShowCeshierarchyRespNodes } from './model/ShowCeshierarchyRespNodes';
import { ShowCeshierarchyRespPartitions } from './model/ShowCeshierarchyRespPartitions';
import { ShowCeshierarchyRespQueues } from './model/ShowCeshierarchyRespQueues';
import { ShowCeshierarchyRespQueues1 } from './model/ShowCeshierarchyRespQueues1';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterRespCluster } from './model/ShowClusterRespCluster';
import { ShowClusterRespClusterBrokers } from './model/ShowClusterRespClusterBrokers';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { ShowConnectorResourceInfoRequest } from './model/ShowConnectorResourceInfoRequest';
import { ShowConnectorResourceInfoResponse } from './model/ShowConnectorResourceInfoResponse';
import { ShowConnectorTaskRequest } from './model/ShowConnectorTaskRequest';
import { ShowConnectorTaskResponse } from './model/ShowConnectorTaskResponse';
import { ShowCoordinatorsRequest } from './model/ShowCoordinatorsRequest';
import { ShowCoordinatorsRespCoordinators } from './model/ShowCoordinatorsRespCoordinators';
import { ShowCoordinatorsResponse } from './model/ShowCoordinatorsResponse';
import { ShowDiagnosisPreCheckRequest } from './model/ShowDiagnosisPreCheckRequest';
import { ShowDiagnosisPreCheckResponse } from './model/ShowDiagnosisPreCheckResponse';
import { ShowEngineInstanceExtendProductInfoRequest } from './model/ShowEngineInstanceExtendProductInfoRequest';
import { ShowEngineInstanceExtendProductInfoResponse } from './model/ShowEngineInstanceExtendProductInfoResponse';
import { ShowGroupRequest } from './model/ShowGroupRequest';
import { ShowGroupResponse } from './model/ShowGroupResponse';
import { ShowGroupsRequest } from './model/ShowGroupsRequest';
import { ShowGroupsRespGroup } from './model/ShowGroupsRespGroup';
import { ShowGroupsRespGroupAssignment } from './model/ShowGroupsRespGroupAssignment';
import { ShowGroupsRespGroupGroupMessageOffsets } from './model/ShowGroupsRespGroupGroupMessageOffsets';
import { ShowGroupsRespGroupMembers } from './model/ShowGroupsRespGroupMembers';
import { ShowGroupsResponse } from './model/ShowGroupsResponse';
import { ShowInstanceConfigsRequest } from './model/ShowInstanceConfigsRequest';
import { ShowInstanceConfigsResponse } from './model/ShowInstanceConfigsResponse';
import { ShowInstanceExtendProductInfoRequest } from './model/ShowInstanceExtendProductInfoRequest';
import { ShowInstanceExtendProductInfoRespDetail } from './model/ShowInstanceExtendProductInfoRespDetail';
import { ShowInstanceExtendProductInfoRespHourly } from './model/ShowInstanceExtendProductInfoRespHourly';
import { ShowInstanceExtendProductInfoRespIo } from './model/ShowInstanceExtendProductInfoRespIo';
import { ShowInstanceExtendProductInfoRespValues } from './model/ShowInstanceExtendProductInfoRespValues';
import { ShowInstanceExtendProductInfoResponse } from './model/ShowInstanceExtendProductInfoResponse';
import { ShowInstanceMessagesRequest } from './model/ShowInstanceMessagesRequest';
import { ShowInstanceMessagesResponse } from './model/ShowInstanceMessagesResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResp } from './model/ShowInstanceResp';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowInstanceTopicDetailRequest } from './model/ShowInstanceTopicDetailRequest';
import { ShowInstanceTopicDetailRespPartitions } from './model/ShowInstanceTopicDetailRespPartitions';
import { ShowInstanceTopicDetailRespReplicas } from './model/ShowInstanceTopicDetailRespReplicas';
import { ShowInstanceTopicDetailResponse } from './model/ShowInstanceTopicDetailResponse';
import { ShowInstanceUsersEntity } from './model/ShowInstanceUsersEntity';
import { ShowInstanceUsersRequest } from './model/ShowInstanceUsersRequest';
import { ShowInstanceUsersResponse } from './model/ShowInstanceUsersResponse';
import { ShowKafkaClusterRequest } from './model/ShowKafkaClusterRequest';
import { ShowKafkaClusterResponse } from './model/ShowKafkaClusterResponse';
import { ShowKafkaInstanceExtendProductInfoRequest } from './model/ShowKafkaInstanceExtendProductInfoRequest';
import { ShowKafkaInstanceExtendProductInfoResponse } from './model/ShowKafkaInstanceExtendProductInfoResponse';
import { ShowKafkaProductCoresRequest } from './model/ShowKafkaProductCoresRequest';
import { ShowKafkaProductCoresResponse } from './model/ShowKafkaProductCoresResponse';
import { ShowKafkaProjectTagsRequest } from './model/ShowKafkaProjectTagsRequest';
import { ShowKafkaProjectTagsResponse } from './model/ShowKafkaProjectTagsResponse';
import { ShowKafkaRebalanceLogRequest } from './model/ShowKafkaRebalanceLogRequest';
import { ShowKafkaRebalanceLogResponse } from './model/ShowKafkaRebalanceLogResponse';
import { ShowKafkaScalePreCheckInfoRequest } from './model/ShowKafkaScalePreCheckInfoRequest';
import { ShowKafkaScalePreCheckInfoResponse } from './model/ShowKafkaScalePreCheckInfoResponse';
import { ShowKafkaTagsRequest } from './model/ShowKafkaTagsRequest';
import { ShowKafkaTagsResponse } from './model/ShowKafkaTagsResponse';
import { ShowKafkaTopicDetailRequest } from './model/ShowKafkaTopicDetailRequest';
import { ShowKafkaTopicDetailResponse } from './model/ShowKafkaTopicDetailResponse';
import { ShowKafkaTopicDetailResponseBody } from './model/ShowKafkaTopicDetailResponseBody';
import { ShowKafkaTopicDetailResponsePartitions } from './model/ShowKafkaTopicDetailResponsePartitions';
import { ShowKafkaTopicPartitionDiskusageRequest } from './model/ShowKafkaTopicPartitionDiskusageRequest';
import { ShowKafkaTopicPartitionDiskusageResponse } from './model/ShowKafkaTopicPartitionDiskusageResponse';
import { ShowKafkaTopicQuotaRequest } from './model/ShowKafkaTopicQuotaRequest';
import { ShowKafkaTopicQuotaResponse } from './model/ShowKafkaTopicQuotaResponse';
import { ShowKafkaUserClientQuotaRequest } from './model/ShowKafkaUserClientQuotaRequest';
import { ShowKafkaUserClientQuotaResponse } from './model/ShowKafkaUserClientQuotaResponse';
import { ShowKakfaClusterResponseCluster } from './model/ShowKakfaClusterResponseCluster';
import { ShowKakfaClusterResponseClusterBrokers } from './model/ShowKakfaClusterResponseClusterBrokers';
import { ShowMaintainWindowsRequest } from './model/ShowMaintainWindowsRequest';
import { ShowMaintainWindowsResponse } from './model/ShowMaintainWindowsResponse';
import { ShowMessageDiagnosisReportRequest } from './model/ShowMessageDiagnosisReportRequest';
import { ShowMessageDiagnosisReportResponse } from './model/ShowMessageDiagnosisReportResponse';
import { ShowMessagesRequest } from './model/ShowMessagesRequest';
import { ShowMessagesRespMessages } from './model/ShowMessagesRespMessages';
import { ShowMessagesResponse } from './model/ShowMessagesResponse';
import { ShowPartitionBeginningMessageRequest } from './model/ShowPartitionBeginningMessageRequest';
import { ShowPartitionBeginningMessageResponse } from './model/ShowPartitionBeginningMessageResponse';
import { ShowPartitionEndMessageRequest } from './model/ShowPartitionEndMessageRequest';
import { ShowPartitionEndMessageResponse } from './model/ShowPartitionEndMessageResponse';
import { ShowPartitionMessageEntity } from './model/ShowPartitionMessageEntity';
import { ShowPartitionMessageRequest } from './model/ShowPartitionMessageRequest';
import { ShowPartitionMessageResponse } from './model/ShowPartitionMessageResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowRecycleInstancesRequest } from './model/ShowRecycleInstancesRequest';
import { ShowRecycleInstancesResponse } from './model/ShowRecycleInstancesResponse';
import { ShowSpecConvertProductRequest } from './model/ShowSpecConvertProductRequest';
import { ShowSpecConvertProductResponse } from './model/ShowSpecConvertProductResponse';
import { ShowTopicAccessPolicyRequest } from './model/ShowTopicAccessPolicyRequest';
import { ShowTopicAccessPolicyResponse } from './model/ShowTopicAccessPolicyResponse';
import { ShowUpgradeInstanceVersionRequest } from './model/ShowUpgradeInstanceVersionRequest';
import { ShowUpgradeInstanceVersionResponse } from './model/ShowUpgradeInstanceVersionResponse';
import { ShowVolumeExpandConfigRequest } from './model/ShowVolumeExpandConfigRequest';
import { ShowVolumeExpandConfigResponse } from './model/ShowVolumeExpandConfigResponse';
import { SmartConnectTaskEntity } from './model/SmartConnectTaskEntity';
import { SmartConnectTaskReqSinkConfig } from './model/SmartConnectTaskReqSinkConfig';
import { SmartConnectTaskReqSourceConfig } from './model/SmartConnectTaskReqSourceConfig';
import { SmartConnectTaskRespSinkConfig } from './model/SmartConnectTaskRespSinkConfig';
import { SmartConnectTaskRespSourceConfig } from './model/SmartConnectTaskRespSourceConfig';
import { SmartConnectValidateEntity } from './model/SmartConnectValidateEntity';
import { StepDetail } from './model/StepDetail';
import { StopKafkaRebalanceLogTaskRequest } from './model/StopKafkaRebalanceLogTaskRequest';
import { StopKafkaRebalanceLogTaskResponse } from './model/StopKafkaRebalanceLogTaskResponse';
import { TagEntity } from './model/TagEntity';
import { TagMultyValueEntity } from './model/TagMultyValueEntity';
import { TopicAssignment } from './model/TopicAssignment';
import { TopicEntity } from './model/TopicEntity';
import { TopicEntityTopicOtherConfigs } from './model/TopicEntityTopicOtherConfigs';
import { UpdateInstanceAutoCreateTopicReq } from './model/UpdateInstanceAutoCreateTopicReq';
import { UpdateInstanceAutoCreateTopicRequest } from './model/UpdateInstanceAutoCreateTopicRequest';
import { UpdateInstanceAutoCreateTopicResponse } from './model/UpdateInstanceAutoCreateTopicResponse';
import { UpdateInstanceConsumerGroupRequest } from './model/UpdateInstanceConsumerGroupRequest';
import { UpdateInstanceConsumerGroupResponse } from './model/UpdateInstanceConsumerGroupResponse';
import { UpdateInstanceCrossVpcIpReq } from './model/UpdateInstanceCrossVpcIpReq';
import { UpdateInstanceCrossVpcIpRequest } from './model/UpdateInstanceCrossVpcIpRequest';
import { UpdateInstanceCrossVpcIpRespResults } from './model/UpdateInstanceCrossVpcIpRespResults';
import { UpdateInstanceCrossVpcIpResponse } from './model/UpdateInstanceCrossVpcIpResponse';
import { UpdateInstanceGroupRequest } from './model/UpdateInstanceGroupRequest';
import { UpdateInstanceGroupResponse } from './model/UpdateInstanceGroupResponse';
import { UpdateInstanceReq } from './model/UpdateInstanceReq';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { UpdateInstanceTopicReq } from './model/UpdateInstanceTopicReq';
import { UpdateInstanceTopicReqTopicOtherConfigs } from './model/UpdateInstanceTopicReqTopicOtherConfigs';
import { UpdateInstanceTopicReqTopics } from './model/UpdateInstanceTopicReqTopics';
import { UpdateInstanceTopicRequest } from './model/UpdateInstanceTopicRequest';
import { UpdateInstanceTopicResponse } from './model/UpdateInstanceTopicResponse';
import { UpdateInstanceUserRequest } from './model/UpdateInstanceUserRequest';
import { UpdateInstanceUserResponse } from './model/UpdateInstanceUserResponse';
import { UpdateKafkaPortProtocolRequest } from './model/UpdateKafkaPortProtocolRequest';
import { UpdateKafkaPortProtocolResponse } from './model/UpdateKafkaPortProtocolResponse';
import { UpdateKafkaUserClientQuotaTaskReq } from './model/UpdateKafkaUserClientQuotaTaskReq';
import { UpdateKafkaUserClientQuotaTaskRequest } from './model/UpdateKafkaUserClientQuotaTaskRequest';
import { UpdateKafkaUserClientQuotaTaskResponse } from './model/UpdateKafkaUserClientQuotaTaskResponse';
import { UpdateScheduledTaskRequest } from './model/UpdateScheduledTaskRequest';
import { UpdateScheduledTaskResponse } from './model/UpdateScheduledTaskResponse';
import { UpdateTopicAccessPolicyReq } from './model/UpdateTopicAccessPolicyReq';
import { UpdateTopicAccessPolicyRequest } from './model/UpdateTopicAccessPolicyRequest';
import { UpdateTopicAccessPolicyResponse } from './model/UpdateTopicAccessPolicyResponse';
import { UpdateUserReq } from './model/UpdateUserReq';
import { UpdateVolumeExpansionConfigRequest } from './model/UpdateVolumeExpansionConfigRequest';
import { UpdateVolumeExpansionConfigResponse } from './model/UpdateVolumeExpansionConfigResponse';
import { UpgradeInstanceReq } from './model/UpgradeInstanceReq';
import { UpgradeInstanceRequest } from './model/UpgradeInstanceRequest';
import { UpgradeInstanceResp } from './model/UpgradeInstanceResp';
import { UpgradeInstanceResponse } from './model/UpgradeInstanceResponse';
import { UserPolicyEntity } from './model/UserPolicyEntity';
import { UserPolicyResponeEntity } from './model/UserPolicyResponeEntity';
import { ValidateConnectorConnectivityRequest } from './model/ValidateConnectorConnectivityRequest';
import { ValidateConnectorConnectivityResponse } from './model/ValidateConnectorConnectivityResponse';

export class KafkaClient {
    public static newBuilder(): ClientBuilder<KafkaClient> {
            let client = new ClientBuilder<KafkaClient>(newClient);
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
     * 批量添加或删除实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除实例标签
     * @param {string} instanceId 实例ID。
     * @param {BatchCreateOrDeleteTagReq} batchCreateOrDeleteKafkaTagRequestBody 请求信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteKafkaTag(batchCreateOrDeleteKafkaTagRequest?: BatchCreateOrDeleteKafkaTagRequest): Promise<BatchCreateOrDeleteKafkaTagResponse> {
        const options = ParamCreater().batchCreateOrDeleteKafkaTag(batchCreateOrDeleteKafkaTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例批量删除消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例批量删除消费组
     * @param {string} instanceId 实例ID。
     * @param {BatchDeleteGroupReq} batchDeleteGroupRequestBody 待删除的消费组列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteGroup(batchDeleteGroupRequest?: BatchDeleteGroupRequest): Promise<BatchDeleteGroupResponse> {
        const options = ParamCreater().batchDeleteGroup(batchDeleteGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例批量删除Topic。批量删除多个Topic时，部分删除成功，部分失败，此时接口返回删除成功，并在返回中显示删除失败的Topic信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例批量删除Topic
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {BatchDeleteInstanceTopicReq} batchDeleteInstanceTopicRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInstanceTopic(batchDeleteInstanceTopicRequest?: BatchDeleteInstanceTopicRequest): Promise<BatchDeleteInstanceTopicResponse> {
        const options = ParamCreater().batchDeleteInstanceTopic(batchDeleteInstanceTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除Kafka实例的用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除用户
     * @param {string} instanceId 实例ID。
     * @param {BatchDeleteInstanceUsersReq} batchDeleteInstanceUsersRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInstanceUsers(batchDeleteInstanceUsersRequest?: BatchDeleteInstanceUsersRequest): Promise<BatchDeleteInstanceUsersResponse> {
        const options = ParamCreater().batchDeleteInstanceUsers(batchDeleteInstanceUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除消息积压诊断报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除消息积压诊断报告
     * @param {string} instanceId 实例ID
     * @param {BatchDeleteMessageDiagnosisReportsReq} batchDeleteMessageDiagnosisReportsRequestBody 请求消息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteMessageDiagnosisReports(batchDeleteMessageDiagnosisReportsRequest?: BatchDeleteMessageDiagnosisReportsRequest): Promise<BatchDeleteMessageDiagnosisReportsResponse> {
        const options = ParamCreater().batchDeleteMessageDiagnosisReports(batchDeleteMessageDiagnosisReportsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重启或删除实例。
     * 
     * 在实例重启过程中，客户端的生产与消费消息等请求会被拒绝。
     * 
     * 实例删除后，实例中原有的数据将被删除，且没有备份，请谨慎操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量重启或删除实例
     * @param {BatchRestartOrDeleteInstanceReq} batchRestartOrDeleteInstancesRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRestartOrDeleteInstances(batchRestartOrDeleteInstancesRequest?: BatchRestartOrDeleteInstancesRequest): Promise<BatchRestartOrDeleteInstancesResponse> {
        const options = ParamCreater().batchRestartOrDeleteInstances(batchRestartOrDeleteInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭Kafka Manager，相应的原来开放出的management相关接口也将不可用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭Kafka Manager
     * @param {string} instanceId 实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public closeKafkaManager(closeKafkaManagerRequest?: CloseKafkaManagerRequest): Promise<CloseKafkaManagerResponse> {
        const options = ParamCreater().closeKafkaManager(closeKafkaManagerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例。
     * 
     * [该接口支持创建按需和包周期两种计费方式的实例。](tag:hws,hws_eu,hws_hk,ctc)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {'kafka'} engine 消息引擎。
     * @param {CreateInstanceByEngineReq} createInstanceByEngineRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceByEngine(createInstanceByEngineRequest?: CreateInstanceByEngineRequest): Promise<CreateInstanceByEngineResponse> {
        const options = ParamCreater().createInstanceByEngine(createInstanceByEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例创建Topic。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例创建Topic
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {CreateInstanceTopicReq} createInstanceTopicRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceTopic(createInstanceTopicRequest?: CreateInstanceTopicRequest): Promise<CreateInstanceTopicResponse> {
        const options = ParamCreater().createInstanceTopic(createInstanceTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Kafka实例的用户，用户可连接开启SASL的Kafka实例。 [ 2023年7月15日前创建的Kafka实例，一个实例最多创建20个用户。2023年7月15日及以后创建的Kafka实例，一个实例最多创建500个用户。](tag:hws,hws_hk) [一个实例最多创建500个用户。](tag:fcs,ax,hcs)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户
     * @param {string} instanceId 实例ID。
     * @param {CreateInstanceUserReq} createInstanceUserRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceUser(createInstanceUserRequest?: CreateInstanceUserRequest): Promise<CreateInstanceUserResponse> {
        const options = ParamCreater().createInstanceUser(createInstanceUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例创建消费组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建消费组
     * @param {string} instanceId 实例ID。
     * @param {CreateGroupReq} createKafkaConsumerGroupRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKafkaConsumerGroup(createKafkaConsumerGroupRequest?: CreateKafkaConsumerGroupRequest): Promise<CreateKafkaConsumerGroupResponse> {
        const options = ParamCreater().createKafkaConsumerGroup(createKafkaConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例提交分区平衡任务，若成功则返回分区平衡任务的job id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例开始分区平衡任务
     * @param {string} instanceId 实例ID。
     * @param {PartitionReassignRequest} createReassignmentTaskRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKafkaReassignmentTask(createKafkaReassignmentTaskRequest?: CreateKafkaReassignmentTaskRequest): Promise<CreateKafkaReassignmentTaskResponse> {
        const options = ParamCreater().createKafkaReassignmentTask(createKafkaReassignmentTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启Kafka实例重平衡日志功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启Kafka实例重平衡日志功能
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKafkaRebalanceLogTask(createKafkaRebalanceLogTaskRequest?: CreateKafkaRebalanceLogTaskRequest): Promise<CreateKafkaRebalanceLogTaskResponse> {
        const options = ParamCreater().createKafkaRebalanceLogTask(createKafkaRebalanceLogTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例提交创建Topic级别的流控任务，若成功则返回流控任务的job_id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Topic流控配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {KafkaTopicQuota} createKafkaTopicQuotaBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKafkaTopicQuota(createKafkaTopicQuotaRequest?: CreateKafkaTopicQuotaRequest): Promise<CreateKafkaTopicQuotaResponse> {
        const options = ParamCreater().createKafkaTopicQuota(createKafkaTopicQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例提交创建用户、客户端级别的流控任务，若成功则返回流控任务的job_id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户/客户端流控配置
     * @param {string} instanceId 实例ID。
     * @param {CreateKafkaUserClientQuotaTaskReq} creatKafkaUserClientQuotaTaskBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKafkaUserClientQuotaTask(createKafkaUserClientQuotaTaskRequest?: CreateKafkaUserClientQuotaTaskRequest): Promise<CreateKafkaUserClientQuotaTaskResponse> {
        const options = ParamCreater().createKafkaUserClientQuotaTask(createKafkaUserClientQuotaTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建消息积压诊断任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建消息积压诊断任务
     * @param {string} instanceId 实例ID。
     * @param {CreateMessageDiagnosisTaskReq} createMessageDiagnosisTaskRequestBody 请求消息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMessageDiagnosisTask(createMessageDiagnosisTaskRequest?: CreateMessageDiagnosisTaskRequest): Promise<CreateMessageDiagnosisTaskResponse> {
        const options = ParamCreater().createMessageDiagnosisTask(createMessageDiagnosisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增Kafka实例指定Topic分区。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增Kafka实例指定Topic分区
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。
     * @param {CreatePartitionReq} createPartitionRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPartition(createPartitionRequest?: CreatePartitionRequest): Promise<CreatePartitionResponse> {
        const options = ParamCreater().createPartition(createPartitionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建按需计费类型的Kafka实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {CreatePostPaidInstanceReq} createPostPaidInstanceRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidInstance(createPostPaidInstanceRequest?: CreatePostPaidInstanceRequest): Promise<CreatePostPaidInstanceResponse> {
        const options = ParamCreater().createPostPaidInstance(createPostPaidInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例。
     * 
     * [该接口支持创建按需和包周期两种计费方式的实例。](tag:hws,hws_eu,hws_hk,ctc,cmcc,ax)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Kafka实例
     * @param {CreateInstanceByEngineReq} createInstanceByEngineRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidKafkaInstance(createPostPaidKafkaInstanceRequest?: CreatePostPaidKafkaInstanceRequest): Promise<CreatePostPaidKafkaInstanceResponse> {
        const options = ParamCreater().createPostPaidKafkaInstance(createPostPaidKafkaInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例提交分区平衡任务或计算分区平衡预估时间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例开始分区平衡任务
     * @param {string} instanceId 实例ID。
     * @param {PartitionReassignRequest} createReassignmentTaskRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createReassignmentTask(createReassignmentTaskRequest?: CreateReassignmentTaskRequest): Promise<CreateReassignmentTaskResponse> {
        const options = ParamCreater().createReassignmentTask(createReassignmentTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除后台任务管理中的指定记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后台任务管理中的指定记录
     * @param {string} instanceId 实例ID。
     * @param {string} taskId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackgroundTask(deleteBackgroundTaskRequest?: DeleteBackgroundTaskRequest): Promise<DeleteBackgroundTaskResponse> {
        const options = ParamCreater().deleteBackgroundTask(deleteBackgroundTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除消费组在指定Topic的消费位点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除消费组在指定Topic的消费位点
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组ID。
     * @param {DeleteConsumerGroupOffsetsRequestBody} deleteConsumerGroupOffsetsRequestBody 待删除消费位点的主题列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConsumerGroupOffsets(deleteConsumerGroupOffsetsRequest?: DeleteConsumerGroupOffsetsRequest): Promise<DeleteConsumerGroupOffsetsResponse> {
        const options = ParamCreater().deleteConsumerGroupOffsets(deleteConsumerGroupOffsetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * kafka实例删除指定消费组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary kafka实例删除指定消费组
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGroup(deleteGroupRequest?: DeleteGroupRequest): Promise<DeleteGroupResponse> {
        const options = ParamCreater().deleteGroup(deleteGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的实例，释放该实例的所有资源。
     * 
     * [注意：调用本接口删除的实例将被彻底删除，不会进入回收站，且删除后不可恢复。若您需要删除的实例进入回收站，请使用[批量重启或删除实例](BatchRestartOrDeleteInstances.xml)。](tag:hws,hws_hk,cmcc,ctc,sbc,hk_sbc,tm,hk_tm,srg)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定的实例
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
        const options = ParamCreater().deleteInstance(deleteInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定消费组
     * @param {string} engine 引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceConsumerGroup(deleteInstanceConsumerGroupRequest?: DeleteInstanceConsumerGroupRequest): Promise<DeleteInstanceConsumerGroupResponse> {
        const options = ParamCreater().deleteInstanceConsumerGroup(deleteInstanceConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Kafka删除消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka删除消息
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。
     * @param {DeleteKafkaMessageRequestBody} deleteKafkaMessageRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKafkaMessage(deleteKafkaMessageRequest?: DeleteKafkaMessageRequest): Promise<DeleteKafkaMessageResponse> {
        const options = ParamCreater().deleteKafkaMessage(deleteKafkaMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Kafka消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Kafka消息
     * @param {string} instanceId 实例ID。
     * @param {string} topic Topic名称。
     * @param {DeleteKafkaMessageRequestBody} deleteKafkaMessageRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKafkaTopicMessages(deleteKafkaTopicMessagesRequest?: DeleteKafkaTopicMessagesRequest): Promise<DeleteKafkaTopicMessagesResponse> {
        const options = ParamCreater().deleteKafkaTopicMessages(deleteKafkaTopicMessagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例提交删除Topic级别的流控任务，若成功则返回流控任务的job_id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Topic流控配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {KafkaTopicQuota} deleteKafkaTopicQuotaBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKafkaTopicQuota(deleteKafkaTopicQuotaRequest?: DeleteKafkaTopicQuotaRequest): Promise<DeleteKafkaTopicQuotaResponse> {
        const options = ParamCreater().deleteKafkaTopicQuota(deleteKafkaTopicQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例提交删除用户、客户端级别的流控任务，若成功则返回流控任务的job_id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户/客户端流控配置
     * @param {string} instanceId 实例ID。
     * @param {DeleteKafkaUserClientQuotaTaskReq} deleteKafkaUserClientQuotaTaskBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKafkaUserClientQuotaTask(deleteKafkaUserClientQuotaTaskRequest?: DeleteKafkaUserClientQuotaTaskRequest): Promise<DeleteKafkaUserClientQuotaTaskResponse> {
        const options = ParamCreater().deleteKafkaUserClientQuotaTask(deleteKafkaUserClientQuotaTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的定时任务。仅当定时任务处于执行成功或已取消状态时，方可执行删除操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定的定时任务
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 定时任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScheduledTask(deleteScheduledTaskRequest?: DeleteScheduledTaskRequest): Promise<DeleteScheduledTaskResponse> {
        const options = ParamCreater().deleteScheduledTask(deleteScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启Kafka实例域名访问后，客户端可以通过域名连接Kafka实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启Kafka实例域名访问能力
     * @param {string} instanceId 实例ID，从[查询所有实例列表](ListInstances.xml)获取实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableDns(enableDnsRequest?: EnableDnsRequest): Promise<EnableDnsResponse> {
        const options = ParamCreater().enableDns(enableDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在创建实例时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableZones(listAvailableZonesRequest?: ListAvailableZonesRequest): Promise<ListAvailableZonesResponse> {
        const options = ParamCreater().listAvailableZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的后台任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的后台任务列表
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 开启查询的任务编号。
     * @param {number} [limit] 查询的任务个数。
     * @param {string} [beginTime] 查询任务的最小时间，格式为YYYYMMDDHHmmss。
     * @param {string} [endTime] 查询任务的最大时间，格式为YYYYMMDDHHmmss。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackgroundTasks(listBackgroundTasksRequest?: ListBackgroundTasksRequest): Promise<ListBackgroundTasksResponse> {
        const options = ParamCreater().listBackgroundTasks(listBackgroundTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取特性开关列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特性开关列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigFeatures(listConfigFeaturesRequest?: ListConfigFeaturesRequest): Promise<ListConfigFeaturesResponse> {
        const options = ParamCreater().listConfigFeatures();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询产品规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品规格列表
     * @param {'kafka'} engine **参数解释**： 消息引擎的类型。 **约束限制**： 不涉及。 **取值范围**： kafka **默认取值**： 不涉及。
     * @param {string} [productId] **参数解释**： 产品ID。 **约束限制**： 不涉及。 **取值范围**： [- s6.2u4g.single.small：对应规格kafka.2u4g.single.small。](tag:ax,dt,hws,hws_eu,hws_hk,srg) [- c6.2u4g.single：对应规格kafka.2u4g.single。](tag:ax,dt,hws,hws_eu,hws_hk,srg) [- s6.2u4g.cluster.small：对应规格kafka.2u4g.cluster.small。](tag:ax,dt,hws,hws_eu,hws_hk,srg) - c6.2u4g.cluster：对应规格kafka.2u4g.cluster。 - c6.4u8g.cluster：对应规格kafka.4u8g.cluster。 - c6.8u16g.cluster：对应规格kafka.8u16g.cluster。 - c6.12u24g.cluster：对应规格kafka.12u24g.cluster。 - c6.16u32g.cluster：对应规格kafka.16u32g.cluster。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEngineProducts(listEngineProductsRequest?: ListEngineProductsRequest): Promise<ListEngineProductsResponse> {
        const options = ParamCreater().listEngineProducts(listEngineProductsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定消费组
     * @param {string} engine 引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名过滤查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceConsumerGroup(listInstanceConsumerGroupRequest?: ListInstanceConsumerGroupRequest): Promise<ListInstanceConsumerGroupResponse> {
        const options = ParamCreater().listInstanceConsumerGroup(listInstanceConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定消费组的消费成员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定消费组的消费成员
     * @param {string} engine 引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组ID。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {number} [limit] 当次查询返回的最大消费组成员个数，默认值为10，取值范围为1~50。
     * @param {string} [host] 消费者地址。
     * @param {string} [memberId] 消费者ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceConsumerGroupMembers(listInstanceConsumerGroupMembersRequest?: ListInstanceConsumerGroupMembersRequest): Promise<ListInstanceConsumerGroupMembersResponse> {
        const options = ParamCreater().listInstanceConsumerGroupMembers(listInstanceConsumerGroupMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组消息位点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组消息位点
     * @param {string} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
     * @param {string} topic topic名称。查询消费组消息位点时必填项。
     * @param {string} [partition] 分区名称。
     * @param {string} [offset] 偏移值。
     * @param {string} [limit] 最大值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceConsumerGroupMessageOffset(listInstanceConsumerGroupMessageOffsetRequest?: ListInstanceConsumerGroupMessageOffsetRequest): Promise<ListInstanceConsumerGroupMessageOffsetResponse> {
        const options = ParamCreater().listInstanceConsumerGroupMessageOffset(listInstanceConsumerGroupMessageOffsetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定消费组的Topic。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定消费组的Topic
     * @param {string} engine 引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组ID。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
     * @param {number} [limit] 当次查询返回的最大Topic个数，默认值为10，取值范围为1~50。
     * @param {string} [sortKey] 排序规则： - topic：按Topic名称排序。 - partition：按分区数排序。 - messages：按消息数量排序，默认方式。
     * @param {string} [sortDir] 排序方式。 - asc：升序。 - desc：降序，默认方式。
     * @param {string} [topic] Topic名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceConsumerGroupTopics(listInstanceConsumerGroupTopicsRequest?: ListInstanceConsumerGroupTopicsRequest): Promise<ListInstanceConsumerGroupTopicsResponse> {
        const options = ParamCreater().listInstanceConsumerGroupTopics(listInstanceConsumerGroupTopicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有消费组
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [offset] **参数解释**： 偏移量。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {string} [limit] **参数解释**： 当次查询返回的最大消费组ID个数。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 10。
     * @param {string} [group] **参数解释**： 消费组名过滤查询，过滤方式为字段包含过滤。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceConsumerGroups(listInstanceConsumerGroupsRequest?: ListInstanceConsumerGroupsRequest): Promise<ListInstanceConsumerGroupsResponse> {
        const options = ParamCreater().listInstanceConsumerGroups(listInstanceConsumerGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定Kafka实例的Topic详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka实例查询Topic
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {string} [limit] **参数解释**： 当次查询返回的最大实例个数。 **约束限制**： 不涉及。 **取值范围**： 大于等于0，小于等于200。 **默认取值**： 50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceTopics(listInstanceTopicsRequest?: ListInstanceTopicsRequest): Promise<ListInstanceTopicsResponse> {
        const options = ParamCreater().listInstanceTopics(listInstanceTopicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的实例列表，支持按照条件查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有实例列表
     * @param {'kafka'} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： kafka。 **默认取值**： 不涉及。
     * @param {string} [name] **参数解释**： 实例名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [instanceId] **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'CREATING' | 'RUNNING' | 'RESTARTING' | 'DELETING' | 'ERROR' | 'CREATEFAILED' | 'FREEZING' | 'FROZEN' | 'EXTENDING' | 'SHRINKING' | 'EXTENDEDFAILED' | 'CONFIGURING' | 'ROLLBACK' | 'ROLLBACKFAILED' | 'VOLUMETYPECHANGING'} [status] **参数解释**： 实例状态，详细状态说明请参考[实例状态说明](kafka-api-180514012.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {'true' | 'false'} [includeFailure] **参数解释**： 是否返回创建失败的实例数。 **约束限制**： 不涉及。 **取值范围**： - \&#39;true\&#39;：返回创建失败的实例数。 - \&#39;false\&#39;：不返回创建失败的实例数。  **默认取值**： 不涉及。
     * @param {'true' | 'false'} [exactMatchName] **参数解释**： 是否按照实例名称进行精确匹配查询。 **约束限制**： 不涉及。 **取值范围**： - \&#39;true\&#39;：表示按照实例名称进行精确匹配查询。 - \&#39;false\&#39;：表示模糊匹配实例名称查询。  **默认取值**： \&#39;false\&#39;。
     * @param {string} [enterpriseProjectId] **参数解释**： 企业项目ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {string} [limit] **参数解释**： 当次查询返回的实例最大个数。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstances(listInstancesRequest?: ListInstancesRequest): Promise<ListInstancesResponse> {
        const options = ParamCreater().listInstances(listInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消息积压诊断报告列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息积压诊断报告列表
     * @param {string} instanceId 实例ID
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录
     * @param {number} [limit] 查询返回记录的数量限制
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMessageDiagnosisReports(listMessageDiagnosisReportsRequest?: ListMessageDiagnosisReportsRequest): Promise<ListMessageDiagnosisReportsResponse> {
        const options = ParamCreater().listMessageDiagnosisReports(listMessageDiagnosisReportsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在创建kafka实例时，需要配置订购的产品ID（即product_id），可通过该接口查询产品规格。
     * 
     * 例如，要订购按需计费、基准带宽为100MB的kafka实例，可从接口响应消息中，查找Hourly的消息体，然后找到bandwidth为100MB的记录对应的product_id，该product_id的值即是创建上述kafka实例时需要配置的产品ID。
     * 
     * 同时，unavailable_zones字段表示资源不足的可用区列表，如果为空，则表示所有可用区都有资源，如果不为空，则表示字段值的可用区没有资源。所以必须确保您购买的资源所在的可用区有资源，不在该字段列表内。
     * 
     * [例如，响应消息中bandwidth字段为1200MB的记录，unavailable_zones字段包含cn-east-2b、cn-east-2a和cn-east-2d，表示在华东-上海2的可用区1、可用区2、可用区3都没有该资源。](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品规格列表
     * @param {'kafka'} engine **参数解释**： 消息引擎的类型。当前只支持kafka类型。 **约束限制**： 不涉及。 **取值范围**： kafka **默认取值**： 不涉及。
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
     * 查询实例的定时任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的定时任务列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [start] **参数解释**： 开启查询的定时任务编号。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [limit] **参数解释**： 查询的定时任务个数。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [beginTime] **参数解释**： 查询定时任务的最小时间，格式为YYYYMMDDHHmmss。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [endTime] **参数解释**： 查询定时任务的最大时间，格式为YYYYMMDDHHmmss。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 查询Topic的分区列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Topic的分区列表
     * @param {string} instanceId 实例id
     * @param {string} topic 主题
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录
     * @param {number} [limit] 查询返回记录的数量限制
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopicPartitions(listTopicPartitionsRequest?: ListTopicPartitionsRequest): Promise<ListTopicPartitionsResponse> {
        const options = ParamCreater().listTopicPartitions(listTopicPartitionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Topic的当前生产者列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Topic的当前生产者列表
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： 主题。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} [offset] **参数解释**： 偏移量，表示查询该偏移量后面的记录。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {number} [limit] **参数解释**： 查询返回记录的数量限制。 **约束限制**： 不涉及。 **取值范围**： 1~50。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopicProducers(listTopicProducersRequest?: ListTopicProducersRequest): Promise<ListTopicProducersResponse> {
        const options = ParamCreater().listTopicProducers(listTopicProducersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户策略。
     * 
     * Kafka实例开启SASL功能后，才支持查询用户策略功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户策略
     * @param {'kafka'} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： kafka **默认取值**： kafka
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} userName **参数解释**： 用户名。 **约束限制**： 不涉及。 **取值范围**： 已经创建的用户名。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserPolicies(listUserPoliciesRequest?: ListUserPoliciesRequest): Promise<ListUserPoliciesResponse> {
        const options = ParamCreater().listUserPolicies(listUserPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例配置
     * @param {string} instanceId 实例ID。
     * @param {ModifyInstanceConfigsReq} modifyInstanceConfigsRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyInstanceConfigs(modifyInstanceConfigsRequest?: ModifyInstanceConfigsRequest): Promise<ModifyInstanceConfigsResponse> {
        const options = ParamCreater().modifyInstanceConfigs(modifyInstanceConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或者关闭Kafka实例公网访问功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或者关闭Kafka实例公网访问功能
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {ModifyKafkaPublicIPAccessSwitchReq} modifyKafkaPublicIPAccessSwitchBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyKafkaPublicIpAccessSwitch(modifyKafkaPublicIpAccessSwitchRequest?: ModifyKafkaPublicIpAccessSwitchRequest): Promise<ModifyKafkaPublicIpAccessSwitchResponse> {
        const options = ParamCreater().modifyKafkaPublicIpAccessSwitch(modifyKafkaPublicIpAccessSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例提交修改Topic级别的流控任务，若成功则返回流控任务的job_id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Topic流控配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {KafkaTopicQuota} modifyKafkaTopicQuotaBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyKafkaTopicQuota(modifyKafkaTopicQuotaRequest?: ModifyKafkaTopicQuotaRequest): Promise<ModifyKafkaTopicQuotaResponse> {
        const options = ParamCreater().modifyKafkaTopicQuota(modifyKafkaTopicQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新回收站策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新回收站策略
     * @param {ModifyRecyclePolicyReq} [modifyRecyclePolicyReq] **参数解释**： 项目ID，获取方式请参见[获取项目ID](kafka-api-0036212547.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyRecyclePolicy(modifyRecyclePolicyRequest?: ModifyRecyclePolicyRequest): Promise<ModifyRecyclePolicyResponse> {
        const options = ParamCreater().modifyRecyclePolicy(modifyRecyclePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置Manager密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置Manager密码
     * @param {string} instanceId 实例ID。
     * @param {ResetManagerPasswordReq} resetManagerPasswordRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetManagerPassword(resetManagerPasswordRequest?: ResetManagerPasswordRequest): Promise<ResetManagerPasswordResponse> {
        const options = ParamCreater().resetManagerPassword(resetManagerPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Kafka实例不支持在线重置消费进度。在执行重置消费进度之前，必须停止被重置消费组客户端。
     * 
     * 停止待重置消费组客户端，然后等待一段时间（即ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG配置的时间，默认为1000毫秒）后，服务端才认为此消费组客户端已下线。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置消费组消费进度到指定位置
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
     * @param {ResetMessageOffsetReq} resetMessageOffsetRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetMessageOffset(resetMessageOffsetRequest?: ResetMessageOffsetRequest): Promise<ResetMessageOffsetResponse> {
        const options = ParamCreater().resetMessageOffset(resetMessageOffsetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Kafka实例不支持在线重置消费进度。在执行重置消费进度之前，必须停止被重置消费组客户端。
     * 
     * 停止待重置消费组客户端，然后等待一段时间（即ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG配置的时间，默认为1000毫秒）后，服务端才认为此消费组客户端已下线。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置消费组消费进度到指定位置
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组名称。
     * @param {ResetMessageOffsetReq} resetMessageOffsetWithEngineRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetMessageOffsetWithEngine(resetMessageOffsetWithEngineRequest?: ResetMessageOffsetWithEngineRequest): Promise<ResetMessageOffsetWithEngineResponse> {
        const options = ParamCreater().resetMessageOffsetWithEngine(resetMessageOffsetWithEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置密码（只针对开通SSL的实例）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置密码
     * @param {string} instanceId 实例ID。
     * @param {ResetPasswordReq} resetPasswordRequestBody 请求消息。
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
     * 重置用户密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置用户密码
     * @param {string} instanceId 实例ID。
     * @param {string} userName 用户名称。
     * @param {ResetUserPasswordReq} resetUserPasswordRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetUserPasswrod(resetUserPasswrodRequest?: ResetUserPasswrodRequest): Promise<ResetUserPasswrodResponse> {
        const options = ParamCreater().resetUserPasswrod(resetUserPasswrodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例规格变更。[当前通过调用API，只支持按需实例进行实例扩容。](tag:hws,hws_hk,ctc,cmcc,hws_eu)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例扩容
     * @param {'kafka'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {ResizeEngineInstanceReq} resizeEngineInstanceRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeEngineInstance(resizeEngineInstanceRequest?: ResizeEngineInstanceRequest): Promise<ResizeEngineInstanceResponse> {
        const options = ParamCreater().resizeEngineInstance(resizeEngineInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例扩容。[当前通过调用API，只支持按需实例进行实例扩容。](tag:hws,hws_hk,ctc,cmcc,hws_eu)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例扩容
     * @param {string} instanceId 实例ID。
     * @param {ResizeInstanceReq} resizeInstanceRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest): Promise<ResizeInstanceResponse> {
        const options = ParamCreater().resizeInstance(resizeInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例规格变更。[当前通过调用API，只支持按需实例进行实例扩容。](tag:hws,hws_hk,ctc,cmcc,hws_eu,ax)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例扩容
     * @param {string} instanceId 实例ID。
     * @param {ResizeEngineInstanceReq} resizeEngineInstanceRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeKafkaInstance(resizeKafkaInstanceRequest?: ResizeKafkaInstanceRequest): Promise<ResizeKafkaInstanceResponse> {
        const options = ParamCreater().resizeKafkaInstance(resizeKafkaInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启Manager。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启Manager
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartManager(restartManagerRequest?: RestartManagerRequest): Promise<RestartManagerResponse> {
        const options = ParamCreater().restartManager(restartManagerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复回收站实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复回收站实例
     * @param {BatchResumeInstanceReq} [batchResumeInstanceReq] **参数解释**： 项目ID，获取方式请参见[获取项目ID](kafka-api-0036212547.xml)。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreRecycleInstance(restoreRecycleInstanceRequest?: RestoreRecycleInstanceRequest): Promise<RestoreRecycleInstanceResponse> {
        const options = ParamCreater().restoreRecycleInstance(restoreRecycleInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在控制台发送指定消息到Kafka实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Kafka生产消息
     * @param {string} instanceId 实例ID
     * @param {string} actionId 动作ID，生产消息对应的action_id为send。
     * @param {SendKafkaMessageRequestBody} sendKafkaMessageRequestBody 请求消息，请求体内容包括Topic、partition和消息key，详情请参考schema。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sendKafkaMessage(sendKafkaMessageRequest?: SendKafkaMessageRequest): Promise<SendKafkaMessageResponse> {
        const options = ParamCreater().sendKafkaMessage(sendKafkaMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建/删除用户策略。
     * 
     * Kafka实例开启SASL功能后，才支持创建/删除用户策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建/删除用户策略
     * @param {'kafka'} engine **参数解释**： 消息引擎。 **约束限制**： 不涉及。 **取值范围**： kafka **默认取值**： kafka
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} userName **参数解释**： 用户名。 **约束限制**： 不涉及。 **取值范围**： 已经创建的用户名。 **默认取值**： 不涉及。
     * @param {SetUserPoliciesReq} setUserPoliciesRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setUserPolicies(setUserPoliciesRequest?: SetUserPoliciesRequest): Promise<SetUserPoliciesResponse> {
        const options = ParamCreater().setUserPolicies(setUserPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询后台任务管理中的指定记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后台任务管理中的指定记录
     * @param {string} instanceId 实例ID。
     * @param {string} taskId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackgroundTask(showBackgroundTaskRequest?: ShowBackgroundTaskRequest): Promise<ShowBackgroundTaskResponse> {
        const options = ParamCreater().showBackgroundTask(showBackgroundTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询后台任务中的指定实例的变更进度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后台任务中的指定实例的变更进度
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 任务ID。 **约束限制**： 仅Kafka扩容时支持查询进度。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackgroundTaskProgress(showBackgroundTaskProgressRequest?: ShowBackgroundTaskProgressRequest): Promise<ShowBackgroundTaskProgressResponse> {
        const options = ParamCreater().showBackgroundTaskProgress(showBackgroundTaskProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例在CES的监控层级关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例在CES的监控层级关系
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCesHierarchy(showCesHierarchyRequest?: ShowCesHierarchyRequest): Promise<ShowCesHierarchyResponse> {
        const options = ParamCreater().showCesHierarchy(showCesHierarchyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Kafka集群元数据信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka集群元数据信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCluster(showClusterRequest?: ShowClusterRequest): Promise<ShowClusterResponse> {
        const options = ParamCreater().showCluster(showClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Kafka实例的协调器信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka实例的协调器信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCoordinators(showCoordinatorsRequest?: ShowCoordinatorsRequest): Promise<ShowCoordinatorsResponse> {
        const options = ParamCreater().showCoordinators(showCoordinatorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 消息积压诊断预检查
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 消息积压诊断预检查
     * @param {string} instanceId 实例ID
     * @param {string} group 消费组名称
     * @param {string} topic 主题名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisPreCheck(showDiagnosisPreCheckRequest?: ShowDiagnosisPreCheckRequest): Promise<ShowDiagnosisPreCheckResponse> {
        const options = ParamCreater().showDiagnosisPreCheck(showDiagnosisPreCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的扩容规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的扩容规格列表
     * @param {'kafka'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {'advanced'} type 产品的类型。 - advanced: 专享版
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEngineInstanceExtendProductInfo(showEngineInstanceExtendProductInfoRequest?: ShowEngineInstanceExtendProductInfoRequest): Promise<ShowEngineInstanceExtendProductInfoResponse> {
        const options = ParamCreater().showEngineInstanceExtendProductInfo(showEngineInstanceExtendProductInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定消费组信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定消费组信息
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGroup(showGroupRequest?: ShowGroupRequest): Promise<ShowGroupResponse> {
        const options = ParamCreater().showGroup(showGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} group **参数解释**： 消费组名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGroups(showGroupsRequest?: ShowGroupsRequest): Promise<ShowGroupsResponse> {
        const options = ParamCreater().showGroups(showGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定实例
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
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
     * 获取实例配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例配置
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceConfigs(showInstanceConfigsRequest?: ShowInstanceConfigsRequest): Promise<ShowInstanceConfigsResponse> {
        const options = ParamCreater().showInstanceConfigs(showInstanceConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的扩容规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的扩容规格列表
     * @param {string} instanceId 实例ID。
     * @param {'advanced' | 'platinum' | 'dec' | 'exp'} type [产品的类型。 - advanced: 专享版 - platinum: 铂金版 - dec: 专属云版 - exp: 体验版](tag:hws,hws_hk,ctc,sbc,hk_sbc,cmcc,hws_eu)
     * @param {'kafka'} engine 消息引擎的类型。当前支持的类型为kafka。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceExtendProductInfo(showInstanceExtendProductInfoRequest?: ShowInstanceExtendProductInfoRequest): Promise<ShowInstanceExtendProductInfoResponse> {
        const options = ParamCreater().showInstanceExtendProductInfo(showInstanceExtendProductInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Kafka实例支持两种消息查询方式，具体查询范围及结果如下：
     * - 按创建时间查询：若已知消息的创建时间段，可通过该方式查询，将返回消息列表及对应偏移量，但不包含消息具体内容。
     * - 按偏移量查询：若已知目标消息所属Topic的分区及具体偏移量，可通过该方式查询，将返回消息列表及完整的消息内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： Topic名称。 **约束限制**： Topic名称必须以字母开头且只支持大小写字母、中横线、下划线以及数字。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {boolean} [asc] **参数解释**： 是否按照时间排序。 **约束限制**： 不涉及。 **取值范围**： - true：按照时间排序。 - false：不按照时间排序。 **默认取值**： 不涉及。
     * @param {string} [startTime] **参数解释**： 开始时间。  Unix毫秒时间戳。  **约束限制**： 按创建时间查询时，为必选参数。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [endTime] **参数解释**： 结束时间。  Unix毫秒时间戳。  **约束限制**： 按创建时间查询时，为必选参数。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [limit] **参数解释**： 每一页显示的消息数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [offset] **参数解释**： 页数。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {boolean} [download] **参数解释**： 是否下载消息到本地。 **约束限制**： 不涉及。 **取值范围**： - true：下载。 - false：不下载。 **默认取值**： 不涉及。
     * @param {string} [messageOffset] **参数解释**： 消息偏移量。 **约束限制**： 按偏移量查询时，为必选参数。  若start_time、end_time参数不为空，该参数无效。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [partition] **参数解释**： 分区。 **约束限制**： 按偏移量查询时，为必选参数。  若start_time、end_time参数不为空，该参数无效。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [keyword] **参数解释**： 设置查询消息的关键词。 **约束限制**： 不涉及。 **取值范围**： 0~50字符。 **默认取值**： 不涉及。
     * @param {string} [key] **参数解释**： 设置消息的KEY，查询结果为包含KEY的所有消息。 **约束限制**： 由于查询资源和性能限制，最大搜索10000条消息且所有消息总大小不超过200MB，最多返回包含KEY的前10条消息。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [include] **参数解释**： 设置消息正文中包含的关键词，查询结果为包含此关键词的消息。 **约束限制**： 多个关键字用%2C隔开，%2C是“,”的URL编码形式。 **取值范围**： include与exclude的关键词总数不得超过20个。 **默认取值**： 不涉及。
     * @param {string} [exclude] **参数解释**： 设置消息正文中需要排除的关键词，查询结果为不包含此关键词的消息。 **约束限制**： 多个关键字用%2C隔开，%2C是“,”的URL编码形式。 **取值范围**： include与exclude的关键词总数不得超过20个。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceMessages(showInstanceMessagesRequest?: ShowInstanceMessagesRequest): Promise<ShowInstanceMessagesResponse> {
        const options = ParamCreater().showInstanceMessages(showInstanceMessagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Kafka实例Topic详细信息。(单个实例调用不要超过1s一次)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka实例Topic详细信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： Topic名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceTopicDetail(showInstanceTopicDetailRequest?: ShowInstanceTopicDetailRequest): Promise<ShowInstanceTopicDetailResponse> {
        const options = ParamCreater().showInstanceTopicDetail(showInstanceTopicDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户列表。
     * 
     * Kafka实例开启SASL功能时，才支持多用户管理的功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户列表
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceUsers(showInstanceUsersRequest?: ShowInstanceUsersRequest): Promise<ShowInstanceUsersResponse> {
        const options = ParamCreater().showInstanceUsers(showInstanceUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Kafka集群信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka集群信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaCluster(showKafkaClusterRequest?: ShowKafkaClusterRequest): Promise<ShowKafkaClusterResponse> {
        const options = ParamCreater().showKafkaCluster(showKafkaClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的扩容规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的扩容规格列表
     * @param {string} instanceId 实例ID。
     * @param {'advanced'} type 产品的类型。 - advanced: 专享版
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaInstanceExtendProductInfo(showKafkaInstanceExtendProductInfoRequest?: ShowKafkaInstanceExtendProductInfoRequest): Promise<ShowKafkaInstanceExtendProductInfoResponse> {
        const options = ParamCreater().showKafkaInstanceExtendProductInfo(showKafkaInstanceExtendProductInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Kafka产品规格核数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka产品规格核数
     * @param {string} productId **参数解释**： 产品ID。 **约束限制**： 不涉及。 **取值范围**： - s6.2u4g.single.small：规格kafka.2u4g.single.small的产品ID。 - c6.2u4g.single：规格kafka.2u4g.single的产品ID。 [- s6.2u4g.cluster.small：规格kafka.2u4g.cluster.small的产品ID。](tag:hws,hws_hk,hws_eu,dt,ax) - c6.2u4g.cluster：规格kafka.2u4g.cluster的产品ID。 - c6.4u8g.cluster：规格kafka.4u8g.cluster的产品ID。 - c6.8u16g.cluster：规格kafka.8u16g.cluster的产品ID。 - c6.12u24g.cluster：规格kafka.12u24g.cluster的产品ID。 - c6.16u32g.cluster：规格kafka.16u32g.cluster的产品ID。  **默认取值**： 不涉及。
     * @param {string} brokerNum **参数解释**： broker数量。 **约束限制**： 不涉及。 **取值范围**： - Kafka实例规格为kafka.2u4g.single.small时，代理数建议取值范围1。 - Kafka实例规格为kafka.2u4g.single时，代理数建议取值范围1。 [- Kafka实例规格为kafka.2u4g.cluster.small时，代理数取值范围3-30。](tag:hws,hws_hk,hws_eu,dt,ax) - Kafka实例规格为kafka.2u4g.cluster时，代理数取值范围3-30。 - Kafka实例规格为kafka.4u8g.cluster时，代理数取值范围3-30。 - Kafka实例规格为kafka.8u16g.cluster时，代理数取值范围3-50。 - Kafka实例规格为kafka.12u24g.cluster时，代理数取值范围3-50。 - Kafka实例规格为kafka.16u32g.cluster时，代理数取值范围3-50。 **默认取值**： 不涉及。
     * @param {string} [instanceId] **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。实例ID非必填项，只有填写实例ID响应体才会返回total_extend_storage_space。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaProductCores(showKafkaProductCoresRequest?: ShowKafkaProductCoresRequest): Promise<ShowKafkaProductCoresResponse> {
        const options = ParamCreater().showKafkaProductCores(showKafkaProductCoresRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaProjectTags(showKafkaProjectTagsRequest?: ShowKafkaProjectTagsRequest): Promise<ShowKafkaProjectTagsResponse> {
        const options = ParamCreater().showKafkaProjectTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Kafka实例重平衡日志详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka实例重平衡日志详情
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaRebalanceLog(showKafkaRebalanceLogRequest?: ShowKafkaRebalanceLogRequest): Promise<ShowKafkaRebalanceLogResponse> {
        const options = ParamCreater().showKafkaRebalanceLog(showKafkaRebalanceLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Kafka实例扩容前置检查信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Kafka实例扩容前置检查信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaScalePreCheckInfo(showKafkaScalePreCheckInfoRequest?: ShowKafkaScalePreCheckInfoRequest): Promise<ShowKafkaScalePreCheckInfoResponse> {
        const options = ParamCreater().showKafkaScalePreCheckInfo(showKafkaScalePreCheckInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例标签
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaTags(showKafkaTagsRequest?: ShowKafkaTagsRequest): Promise<ShowKafkaTagsResponse> {
        const options = ParamCreater().showKafkaTags(showKafkaTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Kafka Topic详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Kafka Topic详细信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： Topic名称。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaTopicDetail(showKafkaTopicDetailRequest?: ShowKafkaTopicDetailRequest): Promise<ShowKafkaTopicDetailResponse> {
        const options = ParamCreater().showKafkaTopicDetail(showKafkaTopicDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Topic在Broker上磁盘占用情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Topic的磁盘存储情况
     * @param {string} instanceId 实例ID。
     * @param {string} [minSize] 占用磁盘大小，默认值1G (1K，1M，1G)。
     * @param {string} [top] **参数解释**： 占用磁盘大小，查询top N。 **约束限制**： 不涉及。 **取值范围**： 1~1000。 **默认取值**： 不涉及。
     * @param {string} [percentage] 占用磁盘大小，查询大于占比的分区。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaTopicPartitionDiskusage(showKafkaTopicPartitionDiskusageRequest?: ShowKafkaTopicPartitionDiskusageRequest): Promise<ShowKafkaTopicPartitionDiskusageResponse> {
        const options = ParamCreater().showKafkaTopicPartitionDiskusage(showKafkaTopicPartitionDiskusageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询Topic级别的流控任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Topic流控配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [type] **参数解释**： 查询类型。 **约束限制**： 查询类型必须以字母开头且只支持大小写字母、中横线、下划线以及数字。 **取值范围**： 默认为topic **默认取值**： topic
     * @param {string} [limit] **参数解释**： 每一页显示的流控数量。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [offset] **参数解释**： 页数。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [keyword] **参数解释**： 查询关键字。 **约束限制**： 查询关键字必须以字母开头且只支持大小写字母、中横线、下划线以及数字。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaTopicQuota(showKafkaTopicQuotaRequest?: ShowKafkaTopicQuotaRequest): Promise<ShowKafkaTopicQuotaResponse> {
        const options = ParamCreater().showKafkaTopicQuota(showKafkaTopicQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例查询流控的配置，若成功则返回流控配置的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户/客户端流控配置
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。
     * @param {number} [limit] 查询返回记录的数量限制。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKafkaUserClientQuota(showKafkaUserClientQuotaRequest?: ShowKafkaUserClientQuotaRequest): Promise<ShowKafkaUserClientQuotaResponse> {
        const options = ParamCreater().showKafkaUserClientQuota(showKafkaUserClientQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询维护时间窗开始时间和结束时间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询维护时间窗时间段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMaintainWindows(showMaintainWindowsRequest?: ShowMaintainWindowsRequest): Promise<ShowMaintainWindowsResponse> {
        const options = ParamCreater().showMaintainWindows();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询诊断报告详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询诊断报告详情
     * @param {string} instanceId 实例ID
     * @param {string} reportId 消息积压诊断报告ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMessageDiagnosisReport(showMessageDiagnosisReportRequest?: ShowMessageDiagnosisReportRequest): Promise<ShowMessageDiagnosisReportResponse> {
        const options = ParamCreater().showMessageDiagnosisReport(showMessageDiagnosisReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分区指定时间段的消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分区指定时间段的消息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： Topic名称。 **约束限制**： Topic名称必须以字母开头且只支持大小写字母、中横线、下划线以及数字。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [startTime] **参数解释**： 查询起始时间，为Unix时间戳格式。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 0。
     * @param {string} [endTime] **参数解释**： 查询结束时间，为Unix时间戳格式。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 系统当前时间。
     * @param {number} [limit] **参数解释**： 单页返回消息数。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 10。
     * @param {number} [offset] **参数解释**： 偏移量，表示从此偏移量开始查询。 **约束限制**： 不涉及。 **取值范围**： 大于等于0。 **默认取值**： 不涉及。
     * @param {string} [partition] **参数解释**： 分区编号。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 默认值为-1，若传入值为-1，则查询所有分区。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMessages(showMessagesRequest?: ShowMessagesRequest): Promise<ShowMessagesResponse> {
        const options = ParamCreater().showMessages(showMessagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分区最早消息的位置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分区最早消息的位置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： Topic名称。 **约束限制**： Topic名称必须以字母开头且只支持大小写字母、中横线、下划线以及数字。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} partition **参数解释**： 分区编号。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartitionBeginningMessage(showPartitionBeginningMessageRequest?: ShowPartitionBeginningMessageRequest): Promise<ShowPartitionBeginningMessageResponse> {
        const options = ParamCreater().showPartitionBeginningMessage(showPartitionBeginningMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分区最新消息的位置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分区最新消息的位置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： Topic名称。 **约束限制**： Topic名称必须以字母开头且只支持大小写字母、中横线、下划线以及数字。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} partition **参数解释**： 分区编号。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartitionEndMessage(showPartitionEndMessageRequest?: ShowPartitionEndMessageRequest): Promise<ShowPartitionEndMessageResponse> {
        const options = ParamCreater().showPartitionEndMessage(showPartitionEndMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分区指定偏移量的消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分区指定偏移量的消息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} topic **参数解释**： Topic名称。 **约束限制**： Topic名称必须以字母开头且只支持大小写字母、中横线、下划线以及数字。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {number} partition **参数解释**： 分区编号。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} messageOffset **参数解释**： 消息位置。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartitionMessage(showPartitionMessageRequest?: ShowPartitionMessageRequest): Promise<ShowPartitionMessageResponse> {
        const options = ParamCreater().showPartitionMessage(showPartitionMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户最大可以创建的实例个数和已创建的实例个数，以及每个实例最大可以创建标签的个数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看租户配额
     * @param {string} [includeTagsQuota] 是否包含标签配额。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotas(showQuotasRequest?: ShowQuotasRequest): Promise<ShowQuotasResponse> {
        const options = ParamCreater().showQuotas(showQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站实例列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecycleInstances(showRecycleInstancesRequest?: ShowRecycleInstancesRequest): Promise<ShowRecycleInstancesResponse> {
        const options = ParamCreater().showRecycleInstances();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询旧规格实例可升级的新规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询旧规格升级新规格映射
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSpecConvertProduct(showSpecConvertProductRequest?: ShowSpecConvertProductRequest): Promise<ShowSpecConvertProductResponse> {
        const options = ParamCreater().showSpecConvertProduct(showSpecConvertProductRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户权限。
     * 
     * Kafka实例开启SASL功能时，才支持多用户管理的功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户权限
     * @param {string} instanceId 实例ID。
     * @param {string} topicName Topic名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTopicAccessPolicy(showTopicAccessPolicyRequest?: ShowTopicAccessPolicyRequest): Promise<ShowTopicAccessPolicyResponse> {
        const options = ParamCreater().showTopicAccessPolicy(showTopicAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Kafka实例版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Kafka实例版本信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpgradeInstanceVersion(showUpgradeInstanceVersionRequest?: ShowUpgradeInstanceVersionRequest): Promise<ShowUpgradeInstanceVersionResponse> {
        const options = ParamCreater().showUpgradeInstanceVersion(showUpgradeInstanceVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询磁盘自动扩容配置，包括磁盘自动扩容是否开启，以及开启后的扩容阈值、扩容步长、扩容上限信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询磁盘自动扩容配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVolumeExpandConfig(showVolumeExpandConfigRequest?: ShowVolumeExpandConfigRequest): Promise<ShowVolumeExpandConfigResponse> {
        const options = ParamCreater().showVolumeExpandConfig(showVolumeExpandConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭Kafka实例重平衡日志功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭Kafka实例重平衡日志功能
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopKafkaRebalanceLogTask(stopKafkaRebalanceLogTaskRequest?: StopKafkaRebalanceLogTaskRequest): Promise<StopKafkaRebalanceLogTaskResponse> {
        const options = ParamCreater().stopKafkaRebalanceLogTask(stopKafkaRebalanceLogTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例信息
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceReq} updateInstanceRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstance(updateInstanceRequest?: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
        const options = ParamCreater().updateInstance(updateInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或关闭实例自动创建Topic功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或关闭实例自动创建Topic功能
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceAutoCreateTopicReq} updateInstanceAutoCreateTopicRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceAutoCreateTopic(updateInstanceAutoCreateTopicRequest?: UpdateInstanceAutoCreateTopicRequest): Promise<UpdateInstanceAutoCreateTopicResponse> {
        const options = ParamCreater().updateInstanceAutoCreateTopic(updateInstanceAutoCreateTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定消费组
     * @param {string} engine 引擎。
     * @param {string} instanceId 实例ID。
     * @param {string} group 消费组ID。
     * @param {GroupCreateReq} groupCreateRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceConsumerGroup(updateInstanceConsumerGroupRequest?: UpdateInstanceConsumerGroupRequest): Promise<UpdateInstanceConsumerGroupResponse> {
        const options = ParamCreater().updateInstanceConsumerGroup(updateInstanceConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例跨VPC访问的内网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例跨VPC访问的内网IP
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceCrossVpcIpReq} updateInstanceCrossVpcIpRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceCrossVpcIp(updateInstanceCrossVpcIpRequest?: UpdateInstanceCrossVpcIpRequest): Promise<UpdateInstanceCrossVpcIpResponse> {
        const options = ParamCreater().updateInstanceCrossVpcIp(updateInstanceCrossVpcIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改所有消费组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改所有消费组
     * @param {string} engine 引擎。
     * @param {string} instanceId 实例ID。
     * @param {BatchModiftGroupDescriptionReq} batchModiftGroupDescriptionRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceGroup(updateInstanceGroupRequest?: UpdateInstanceGroupRequest): Promise<UpdateInstanceGroupResponse> {
        const options = ParamCreater().updateInstanceGroup(updateInstanceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改Kafka实例Topic
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Kafka实例Topic
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceTopicReq} updateInstanceTopicRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceTopic(updateInstanceTopicRequest?: UpdateInstanceTopicRequest): Promise<UpdateInstanceTopicResponse> {
        const options = ParamCreater().updateInstanceTopic(updateInstanceTopicRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用户参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户参数
     * @param {string} engine 消息引擎的类型。
     * @param {string} instanceId 实例ID。
     * @param {string} userName 用户名称。
     * @param {UpdateUserReq} updateInstanceUserRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceUser(updateInstanceUserRequest?: UpdateInstanceUserRequest): Promise<UpdateInstanceUserResponse> {
        const options = ParamCreater().updateInstanceUser(updateInstanceUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改Kafka的内网或者公网接入方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Kafka的接入方式
     * @param {'kafka'} engine 消息引擎。
     * @param {string} instanceId 实例ID。
     * @param {PlainSslEnableRequest} updateKafkaPortProtocolRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKafkaPortProtocol(updateKafkaPortProtocolRequest?: UpdateKafkaPortProtocolRequest): Promise<UpdateKafkaPortProtocolResponse> {
        const options = ParamCreater().updateKafkaPortProtocol(updateKafkaPortProtocolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向Kafka实例提交修改用户、客户端级别的流控任务，若成功则返回流控任务的job_id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户/客户端流控配置
     * @param {string} instanceId 实例ID。
     * @param {UpdateKafkaUserClientQuotaTaskReq} updateKafkaUserClientQuotaTaskBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKafkaUserClientQuotaTask(updateKafkaUserClientQuotaTaskRequest?: UpdateKafkaUserClientQuotaTaskRequest): Promise<UpdateKafkaUserClientQuotaTaskResponse> {
        const options = ParamCreater().updateKafkaUserClientQuotaTask(updateKafkaUserClientQuotaTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定的定时任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定的定时任务
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 定时任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [executeAt] **参数解释**： 修改定时任务的执行时间。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} [status] **参数解释**： 修改定时任务状态。 **约束限制**： 不涉及。 **取值范围**： - CANCELLED：定时任务被取消。 - null：定时任务待执行。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScheduledTask(updateScheduledTaskRequest?: UpdateScheduledTaskRequest): Promise<UpdateScheduledTaskResponse> {
        const options = ParamCreater().updateScheduledTask(updateScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置用户权限。
     * 
     * Kafka实例开启SASL功能时，才支持多用户管理的功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置用户权限
     * @param {string} instanceId 实例ID。
     * @param {UpdateTopicAccessPolicyReq} updateTopicAccessPolicyRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTopicAccessPolicy(updateTopicAccessPolicyRequest?: UpdateTopicAccessPolicyRequest): Promise<UpdateTopicAccessPolicyResponse> {
        const options = ParamCreater().updateTopicAccessPolicy(updateTopicAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改磁盘自动扩容配置，包含磁盘自动扩容是否开启、扩容阈值、扩容步长，以及扩容上限的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改磁盘自动扩容配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {AlterAutoVolumeExpandConfig} updateVolumeExpansionConfigRequestBody **参数解释**： 自动磁盘扩容配置 **约束限制**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVolumeExpansionConfig(updateVolumeExpansionConfigRequest?: UpdateVolumeExpansionConfigRequest): Promise<UpdateVolumeExpansionConfigResponse> {
        const options = ParamCreater().updateVolumeExpansionConfig(updateVolumeExpansionConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例内核升级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例升级
     * @param {string} instanceId 实例ID。
     * @param {UpgradeInstanceReq} upgradeInstanceRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeInstance(upgradeInstanceRequest?: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse> {
        const options = ParamCreater().upgradeInstance(upgradeInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启Smart Connect，提交创建Smart Connect节点任务。
     * 
     * [**当前通过调用API，只支持按需实例创建Smart Connect节点。**](tag:hws,hws_hk,g42,hk_g42,ctc,cmcc)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启Smart Connect（按需实例）
     * @param {string} instanceId 实例ID。
     * @param {CreateConnectorReq} createConnectorRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnector(createConnectorRequest?: CreateConnectorRequest): Promise<CreateConnectorResponse> {
        const options = ParamCreater().createConnector(createConnectorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Smart Connect任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Smart Connect任务
     * @param {string} instanceId 实例ID。
     * @param {CreateSmartConnectTaskReq} createSmartConnectTaskRequestBody 请求消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnectorTask(createConnectorTaskRequest?: CreateConnectorTaskRequest): Promise<CreateConnectorTaskResponse> {
        const options = ParamCreater().createConnectorTask(createConnectorTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 介绍按需实例如何关闭Smart Connect。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭Smart Connect（按需实例）
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConnector(deleteConnectorRequest?: DeleteConnectorRequest): Promise<DeleteConnectorResponse> {
        const options = ParamCreater().deleteConnector(deleteConnectorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Smart Connect任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Smart Connect任务
     * @param {string} instanceId 实例ID。
     * @param {string} taskId Smart Connect任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConnectorTask(deleteConnectorTaskRequest?: DeleteConnectorTaskRequest): Promise<DeleteConnectorTaskResponse> {
        const options = ParamCreater().deleteConnectorTask(deleteConnectorTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Smart Connect任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Smart Connect任务列表
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
     * @param {number} [limit] 当次查询返回的最大实例个数，默认值为10，取值范围为1~50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConnectorTasks(listConnectorTasksRequest?: ListConnectorTasksRequest): Promise<ListConnectorTasksResponse> {
        const options = ParamCreater().listConnectorTasks(listConnectorTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OBS桶列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OBS桶列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listObsBuckets(listObsBucketsRequest?: ListObsBucketsRequest): Promise<ListObsBucketsResponse> {
        const options = ParamCreater().listObsBuckets();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改Smart Connect任务配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Smart Connect任务配置
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {string} taskId **参数解释**： 任务ID。获取方法如下：调用“查询Smart Connect任务列表”接口，从响应体中获取Smart Connect任务ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {SmartConnectTaskEntity} modifyConnectorTaskBody **参数解释**： 修改Smart Connect任务配置请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyConnectorTask(modifyConnectorTaskRequest?: ModifyConnectorTaskRequest): Promise<ModifyConnectorTaskResponse> {
        const options = ParamCreater().modifyConnectorTask(modifyConnectorTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 暂停Smart Connect任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停Smart Connect任务
     * @param {string} instanceId 实例ID。
     * @param {string} taskId Smart Connect任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pauseConnectorTask(pauseConnectorTaskRequest?: PauseConnectorTaskRequest): Promise<PauseConnectorTaskResponse> {
        const options = ParamCreater().pauseConnectorTask(pauseConnectorTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于**启动未启动的Smart Connect任务**以及**重启已暂停或者运行中的Smart Connect任务**。注意，重启Smart Connect任务将重置同步进度，并重新开始同步任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动未启动的Smart Connect任务/重启已暂停或者运行中的Smart Connect任务
     * @param {string} instanceId 实例ID。
     * @param {string} taskId Smart Connect任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartConnectorTask(restartConnectorTaskRequest?: RestartConnectorTaskRequest): Promise<RestartConnectorTaskResponse> {
        const options = ParamCreater().restartConnectorTask(restartConnectorTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动未启动的Smart Connect任务/重启Smart Connect任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动未启动的Smart Connect任务/重启Smart Connect任务
     * @param {string} instanceId 实例ID。
     * @param {string} taskId Smart Connect任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartSmartConnectorTask(restartSmartConnectorTaskRequest?: RestartSmartConnectorTaskRequest): Promise<RestartSmartConnectorTaskResponse> {
        const options = ParamCreater().restartSmartConnectorTask(restartSmartConnectorTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动已暂停的Smart Connect任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动已暂停的Smart Connect任务
     * @param {string} instanceId 实例ID。
     * @param {string} taskId Smart Connect任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resumeConnectorTask(resumeConnectorTaskRequest?: ResumeConnectorTaskRequest): Promise<ResumeConnectorTaskResponse> {
        const options = ParamCreater().resumeConnectorTask(resumeConnectorTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询开启Smart Connect功能所需要使用的资源的情况
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询开启Smart Connect功能所需资源信息
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConnectorResourceInfo(showConnectorResourceInfoRequest?: ShowConnectorResourceInfoRequest): Promise<ShowConnectorResourceInfoResponse> {
        const options = ParamCreater().showConnectorResourceInfo(showConnectorResourceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Smart Connect任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Smart Connect任务详情
     * @param {string} instanceId 实例ID。
     * @param {string} taskId Smart Connect任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConnectorTask(showConnectorTaskRequest?: ShowConnectorTaskRequest): Promise<ShowConnectorTaskResponse> {
        const options = ParamCreater().showConnectorTask(showConnectorTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验Connector连通性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验Connector连通性
     * @param {string} instanceId **参数解释**： 实例ID。获取方法如下：调用“查询所有实例列表”接口，从响应体中获取实例ID。 **约束限制**： 不涉及。 **取值范围**： 不涉及。 **默认取值**： 不涉及。
     * @param {SmartConnectValidateEntity} validateConnectorConnectivityBody **参数解释**： 校验Connector连通性请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateConnectorConnectivity(validateConnectorConnectivityRequest?: ValidateConnectorConnectivityRequest): Promise<ValidateConnectorConnectivityResponse> {
        const options = ParamCreater().validateConnectorConnectivity(validateConnectorConnectivityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量添加或删除实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateOrDeleteKafkaTag(batchCreateOrDeleteKafkaTagRequest?: BatchCreateOrDeleteKafkaTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/{instance_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchCreateOrDeleteKafkaTagRequest !== null && batchCreateOrDeleteKafkaTagRequest !== undefined) {
                if (batchCreateOrDeleteKafkaTagRequest instanceof BatchCreateOrDeleteKafkaTagRequest) {
                    instanceId = batchCreateOrDeleteKafkaTagRequest.instanceId;
                    body = batchCreateOrDeleteKafkaTagRequest.body
                } else {
                    instanceId = batchCreateOrDeleteKafkaTagRequest['instance_id'];
                    body = batchCreateOrDeleteKafkaTagRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchCreateOrDeleteKafkaTag.');
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
         * 该接口用于向Kafka实例批量删除消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteGroup(batchDeleteGroupRequest?: BatchDeleteGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/groups/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteGroupRequest !== null && batchDeleteGroupRequest !== undefined) {
                if (batchDeleteGroupRequest instanceof BatchDeleteGroupRequest) {
                    instanceId = batchDeleteGroupRequest.instanceId;
                    body = batchDeleteGroupRequest.body
                } else {
                    instanceId = batchDeleteGroupRequest['instance_id'];
                    body = batchDeleteGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteGroup.');
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
         * 该接口用于向Kafka实例批量删除Topic。批量删除多个Topic时，部分删除成功，部分失败，此时接口返回删除成功，并在返回中显示删除失败的Topic信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInstanceTopic(batchDeleteInstanceTopicRequest?: BatchDeleteInstanceTopicRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/topics/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteInstanceTopicRequest !== null && batchDeleteInstanceTopicRequest !== undefined) {
                if (batchDeleteInstanceTopicRequest instanceof BatchDeleteInstanceTopicRequest) {
                    instanceId = batchDeleteInstanceTopicRequest.instanceId;
                    body = batchDeleteInstanceTopicRequest.body
                } else {
                    instanceId = batchDeleteInstanceTopicRequest['instance_id'];
                    body = batchDeleteInstanceTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteInstanceTopic.');
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
         * 批量删除Kafka实例的用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInstanceUsers(batchDeleteInstanceUsersRequest?: BatchDeleteInstanceUsersRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteInstanceUsersRequest !== null && batchDeleteInstanceUsersRequest !== undefined) {
                if (batchDeleteInstanceUsersRequest instanceof BatchDeleteInstanceUsersRequest) {
                    instanceId = batchDeleteInstanceUsersRequest.instanceId;
                    body = batchDeleteInstanceUsersRequest.body
                } else {
                    instanceId = batchDeleteInstanceUsersRequest['instance_id'];
                    body = batchDeleteInstanceUsersRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteInstanceUsers.');
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
         * 批量删除消息积压诊断报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteMessageDiagnosisReports(batchDeleteMessageDiagnosisReportsRequest?: BatchDeleteMessageDiagnosisReportsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/message-diagnosis-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchDeleteMessageDiagnosisReportsRequest !== null && batchDeleteMessageDiagnosisReportsRequest !== undefined) {
                if (batchDeleteMessageDiagnosisReportsRequest instanceof BatchDeleteMessageDiagnosisReportsRequest) {
                    instanceId = batchDeleteMessageDiagnosisReportsRequest.instanceId;
                    body = batchDeleteMessageDiagnosisReportsRequest.body
                } else {
                    instanceId = batchDeleteMessageDiagnosisReportsRequest['instance_id'];
                    body = batchDeleteMessageDiagnosisReportsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteMessageDiagnosisReports.');
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
         * 批量重启或删除实例。
         * 
         * 在实例重启过程中，客户端的生产与消费消息等请求会被拒绝。
         * 
         * 实例删除后，实例中原有的数据将被删除，且没有备份，请谨慎操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRestartOrDeleteInstances(batchRestartOrDeleteInstancesRequest?: BatchRestartOrDeleteInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRestartOrDeleteInstancesRequest !== null && batchRestartOrDeleteInstancesRequest !== undefined) {
                if (batchRestartOrDeleteInstancesRequest instanceof BatchRestartOrDeleteInstancesRequest) {
                    body = batchRestartOrDeleteInstancesRequest.body
                } else {
                    body = batchRestartOrDeleteInstancesRequest['body'];
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
         * 关闭Kafka Manager，相应的原来开放出的management相关接口也将不可用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        closeKafkaManager(closeKafkaManagerRequest?: CloseKafkaManagerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/management",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (closeKafkaManagerRequest !== null && closeKafkaManagerRequest !== undefined) {
                if (closeKafkaManagerRequest instanceof CloseKafkaManagerRequest) {
                    instanceId = closeKafkaManagerRequest.instanceId;
                } else {
                    instanceId = closeKafkaManagerRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling closeKafkaManager.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例。
         * 
         * [该接口支持创建按需和包周期两种计费方式的实例。](tag:hws,hws_eu,hws_hk,ctc)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceByEngine(createInstanceByEngineRequest?: CreateInstanceByEngineRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;

            if (createInstanceByEngineRequest !== null && createInstanceByEngineRequest !== undefined) {
                if (createInstanceByEngineRequest instanceof CreateInstanceByEngineRequest) {
                    engine = createInstanceByEngineRequest.engine;
                    body = createInstanceByEngineRequest.body
                } else {
                    engine = createInstanceByEngineRequest['engine'];
                    body = createInstanceByEngineRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling createInstanceByEngine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于向Kafka实例创建Topic。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceTopic(createInstanceTopicRequest?: CreateInstanceTopicRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createInstanceTopicRequest !== null && createInstanceTopicRequest !== undefined) {
                if (createInstanceTopicRequest instanceof CreateInstanceTopicRequest) {
                    instanceId = createInstanceTopicRequest.instanceId;
                    body = createInstanceTopicRequest.body
                } else {
                    instanceId = createInstanceTopicRequest['instance_id'];
                    body = createInstanceTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceTopic.');
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
         * 创建Kafka实例的用户，用户可连接开启SASL的Kafka实例。 [ 2023年7月15日前创建的Kafka实例，一个实例最多创建20个用户。2023年7月15日及以后创建的Kafka实例，一个实例最多创建500个用户。](tag:hws,hws_hk) [一个实例最多创建500个用户。](tag:fcs,ax,hcs)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceUser(createInstanceUserRequest?: CreateInstanceUserRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createInstanceUserRequest !== null && createInstanceUserRequest !== undefined) {
                if (createInstanceUserRequest instanceof CreateInstanceUserRequest) {
                    instanceId = createInstanceUserRequest.instanceId;
                    body = createInstanceUserRequest.body
                } else {
                    instanceId = createInstanceUserRequest['instance_id'];
                    body = createInstanceUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceUser.');
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
         * 实例创建消费组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKafkaConsumerGroup(createKafkaConsumerGroupRequest?: CreateKafkaConsumerGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createKafkaConsumerGroupRequest !== null && createKafkaConsumerGroupRequest !== undefined) {
                if (createKafkaConsumerGroupRequest instanceof CreateKafkaConsumerGroupRequest) {
                    instanceId = createKafkaConsumerGroupRequest.instanceId;
                    body = createKafkaConsumerGroupRequest.body
                } else {
                    instanceId = createKafkaConsumerGroupRequest['instance_id'];
                    body = createKafkaConsumerGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createKafkaConsumerGroup.');
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
         * 该接口用于向Kafka实例提交分区平衡任务，若成功则返回分区平衡任务的job id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKafkaReassignmentTask(createKafkaReassignmentTaskRequest?: CreateKafkaReassignmentTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/reassign",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createKafkaReassignmentTaskRequest !== null && createKafkaReassignmentTaskRequest !== undefined) {
                if (createKafkaReassignmentTaskRequest instanceof CreateKafkaReassignmentTaskRequest) {
                    instanceId = createKafkaReassignmentTaskRequest.instanceId;
                    body = createKafkaReassignmentTaskRequest.body
                } else {
                    instanceId = createKafkaReassignmentTaskRequest['instance_id'];
                    body = createKafkaReassignmentTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createKafkaReassignmentTask.');
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
         * 开启Kafka实例重平衡日志功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKafkaRebalanceLogTask(createKafkaRebalanceLogTaskRequest?: CreateKafkaRebalanceLogTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/log/rebalance-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (createKafkaRebalanceLogTaskRequest !== null && createKafkaRebalanceLogTaskRequest !== undefined) {
                if (createKafkaRebalanceLogTaskRequest instanceof CreateKafkaRebalanceLogTaskRequest) {
                    instanceId = createKafkaRebalanceLogTaskRequest.instanceId;
                } else {
                    instanceId = createKafkaRebalanceLogTaskRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createKafkaRebalanceLogTask.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于向Kafka实例提交创建Topic级别的流控任务，若成功则返回流控任务的job_id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKafkaTopicQuota(createKafkaTopicQuotaRequest?: CreateKafkaTopicQuotaRequest) {
            const options = {
                method: "POST",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/kafka-topic-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createKafkaTopicQuotaRequest !== null && createKafkaTopicQuotaRequest !== undefined) {
                if (createKafkaTopicQuotaRequest instanceof CreateKafkaTopicQuotaRequest) {
                    instanceId = createKafkaTopicQuotaRequest.instanceId;
                    body = createKafkaTopicQuotaRequest.body
                } else {
                    instanceId = createKafkaTopicQuotaRequest['instance_id'];
                    body = createKafkaTopicQuotaRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createKafkaTopicQuota.');
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
         * 该接口用于向Kafka实例提交创建用户、客户端级别的流控任务，若成功则返回流控任务的job_id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKafkaUserClientQuotaTask(createKafkaUserClientQuotaTaskRequest?: CreateKafkaUserClientQuotaTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/kafka-user-client-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createKafkaUserClientQuotaTaskRequest !== null && createKafkaUserClientQuotaTaskRequest !== undefined) {
                if (createKafkaUserClientQuotaTaskRequest instanceof CreateKafkaUserClientQuotaTaskRequest) {
                    instanceId = createKafkaUserClientQuotaTaskRequest.instanceId;
                    body = createKafkaUserClientQuotaTaskRequest.body
                } else {
                    instanceId = createKafkaUserClientQuotaTaskRequest['instance_id'];
                    body = createKafkaUserClientQuotaTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createKafkaUserClientQuotaTask.');
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
         * 创建消息积压诊断任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMessageDiagnosisTask(createMessageDiagnosisTaskRequest?: CreateMessageDiagnosisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/message-diagnosis-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createMessageDiagnosisTaskRequest !== null && createMessageDiagnosisTaskRequest !== undefined) {
                if (createMessageDiagnosisTaskRequest instanceof CreateMessageDiagnosisTaskRequest) {
                    instanceId = createMessageDiagnosisTaskRequest.instanceId;
                    body = createMessageDiagnosisTaskRequest.body
                } else {
                    instanceId = createMessageDiagnosisTaskRequest['instance_id'];
                    body = createMessageDiagnosisTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createMessageDiagnosisTask.');
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
         * 新增Kafka实例指定Topic分区。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPartition(createPartitionRequest?: CreatePartitionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/partitions-reassignment",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let topic;

            if (createPartitionRequest !== null && createPartitionRequest !== undefined) {
                if (createPartitionRequest instanceof CreatePartitionRequest) {
                    instanceId = createPartitionRequest.instanceId;
                    topic = createPartitionRequest.topic;
                    body = createPartitionRequest.body
                } else {
                    instanceId = createPartitionRequest['instance_id'];
                    topic = createPartitionRequest['topic'];
                    body = createPartitionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPartition.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling createPartition.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建按需计费类型的Kafka实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPaidInstance(createPostPaidInstanceRequest?: CreatePostPaidInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPostPaidInstanceRequest !== null && createPostPaidInstanceRequest !== undefined) {
                if (createPostPaidInstanceRequest instanceof CreatePostPaidInstanceRequest) {
                    body = createPostPaidInstanceRequest.body
                } else {
                    body = createPostPaidInstanceRequest['body'];
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
         * 创建实例。
         * 
         * [该接口支持创建按需和包周期两种计费方式的实例。](tag:hws,hws_eu,hws_hk,ctc,cmcc,ax)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPaidKafkaInstance(createPostPaidKafkaInstanceRequest?: CreatePostPaidKafkaInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPostPaidKafkaInstanceRequest !== null && createPostPaidKafkaInstanceRequest !== undefined) {
                if (createPostPaidKafkaInstanceRequest instanceof CreatePostPaidKafkaInstanceRequest) {
                    body = createPostPaidKafkaInstanceRequest.body
                } else {
                    body = createPostPaidKafkaInstanceRequest['body'];
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
         * 该接口用于向Kafka实例提交分区平衡任务或计算分区平衡预估时间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createReassignmentTask(createReassignmentTaskRequest?: CreateReassignmentTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/reassign",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createReassignmentTaskRequest !== null && createReassignmentTaskRequest !== undefined) {
                if (createReassignmentTaskRequest instanceof CreateReassignmentTaskRequest) {
                    instanceId = createReassignmentTaskRequest.instanceId;
                    body = createReassignmentTaskRequest.body
                } else {
                    instanceId = createReassignmentTaskRequest['instance_id'];
                    body = createReassignmentTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createReassignmentTask.');
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
         * 删除后台任务管理中的指定记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBackgroundTask(deleteBackgroundTaskRequest?: DeleteBackgroundTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (deleteBackgroundTaskRequest !== null && deleteBackgroundTaskRequest !== undefined) {
                if (deleteBackgroundTaskRequest instanceof DeleteBackgroundTaskRequest) {
                    instanceId = deleteBackgroundTaskRequest.instanceId;
                    taskId = deleteBackgroundTaskRequest.taskId;
                } else {
                    instanceId = deleteBackgroundTaskRequest['instance_id'];
                    taskId = deleteBackgroundTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteBackgroundTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteBackgroundTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除消费组在指定Topic的消费位点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConsumerGroupOffsets(deleteConsumerGroupOffsetsRequest?: DeleteConsumerGroupOffsetsRequest) {
            const options = {
                method: "POST",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/groups/{group}/delete-offset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let group;

            if (deleteConsumerGroupOffsetsRequest !== null && deleteConsumerGroupOffsetsRequest !== undefined) {
                if (deleteConsumerGroupOffsetsRequest instanceof DeleteConsumerGroupOffsetsRequest) {
                    instanceId = deleteConsumerGroupOffsetsRequest.instanceId;
                    group = deleteConsumerGroupOffsetsRequest.group;
                    body = deleteConsumerGroupOffsetsRequest.body
                } else {
                    instanceId = deleteConsumerGroupOffsetsRequest['instance_id'];
                    group = deleteConsumerGroupOffsetsRequest['group'];
                    body = deleteConsumerGroupOffsetsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteConsumerGroupOffsets.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling deleteConsumerGroupOffsets.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * kafka实例删除指定消费组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGroup(deleteGroupRequest?: DeleteGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let group;

            if (deleteGroupRequest !== null && deleteGroupRequest !== undefined) {
                if (deleteGroupRequest instanceof DeleteGroupRequest) {
                    instanceId = deleteGroupRequest.instanceId;
                    group = deleteGroupRequest.group;
                } else {
                    instanceId = deleteGroupRequest['instance_id'];
                    group = deleteGroupRequest['group'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling deleteGroup.');
            }

            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的实例，释放该实例的所有资源。
         * 
         * [注意：调用本接口删除的实例将被彻底删除，不会进入回收站，且删除后不可恢复。若您需要删除的实例进入回收站，请使用[批量重启或删除实例](BatchRestartOrDeleteInstances.xml)。](tag:hws,hws_hk,cmcc,ctc,sbc,hk_sbc,tm,hk_tm,srg)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    instanceId = deleteInstanceRequest.instanceId;
                } else {
                    instanceId = deleteInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceConsumerGroup(deleteInstanceConsumerGroupRequest?: DeleteInstanceConsumerGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engine;
            
            let instanceId;
            
            let group;

            if (deleteInstanceConsumerGroupRequest !== null && deleteInstanceConsumerGroupRequest !== undefined) {
                if (deleteInstanceConsumerGroupRequest instanceof DeleteInstanceConsumerGroupRequest) {
                    engine = deleteInstanceConsumerGroupRequest.engine;
                    instanceId = deleteInstanceConsumerGroupRequest.instanceId;
                    group = deleteInstanceConsumerGroupRequest.group;
                } else {
                    engine = deleteInstanceConsumerGroupRequest['engine'];
                    instanceId = deleteInstanceConsumerGroupRequest['instance_id'];
                    group = deleteInstanceConsumerGroupRequest['group'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling deleteInstanceConsumerGroup.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceConsumerGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling deleteInstanceConsumerGroup.');
            }

            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Kafka删除消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKafkaMessage(deleteKafkaMessageRequest?: DeleteKafkaMessageRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/topics/{topic}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let topic;

            if (deleteKafkaMessageRequest !== null && deleteKafkaMessageRequest !== undefined) {
                if (deleteKafkaMessageRequest instanceof DeleteKafkaMessageRequest) {
                    instanceId = deleteKafkaMessageRequest.instanceId;
                    topic = deleteKafkaMessageRequest.topic;
                    body = deleteKafkaMessageRequest.body
                } else {
                    instanceId = deleteKafkaMessageRequest['instance_id'];
                    topic = deleteKafkaMessageRequest['topic'];
                    body = deleteKafkaMessageRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteKafkaMessage.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling deleteKafkaMessage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除Kafka消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKafkaTopicMessages(deleteKafkaTopicMessagesRequest?: DeleteKafkaTopicMessagesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/topics/{topic}/messages/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let topic;

            if (deleteKafkaTopicMessagesRequest !== null && deleteKafkaTopicMessagesRequest !== undefined) {
                if (deleteKafkaTopicMessagesRequest instanceof DeleteKafkaTopicMessagesRequest) {
                    instanceId = deleteKafkaTopicMessagesRequest.instanceId;
                    topic = deleteKafkaTopicMessagesRequest.topic;
                    body = deleteKafkaTopicMessagesRequest.body
                } else {
                    instanceId = deleteKafkaTopicMessagesRequest['instance_id'];
                    topic = deleteKafkaTopicMessagesRequest['topic'];
                    body = deleteKafkaTopicMessagesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteKafkaTopicMessages.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling deleteKafkaTopicMessages.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于向Kafka实例提交删除Topic级别的流控任务，若成功则返回流控任务的job_id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKafkaTopicQuota(deleteKafkaTopicQuotaRequest?: DeleteKafkaTopicQuotaRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/kafka-topic-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteKafkaTopicQuotaRequest !== null && deleteKafkaTopicQuotaRequest !== undefined) {
                if (deleteKafkaTopicQuotaRequest instanceof DeleteKafkaTopicQuotaRequest) {
                    instanceId = deleteKafkaTopicQuotaRequest.instanceId;
                    body = deleteKafkaTopicQuotaRequest.body
                } else {
                    instanceId = deleteKafkaTopicQuotaRequest['instance_id'];
                    body = deleteKafkaTopicQuotaRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteKafkaTopicQuota.');
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
         * 该接口用于向Kafka实例提交删除用户、客户端级别的流控任务，若成功则返回流控任务的job_id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKafkaUserClientQuotaTask(deleteKafkaUserClientQuotaTaskRequest?: DeleteKafkaUserClientQuotaTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/kafka-user-client-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteKafkaUserClientQuotaTaskRequest !== null && deleteKafkaUserClientQuotaTaskRequest !== undefined) {
                if (deleteKafkaUserClientQuotaTaskRequest instanceof DeleteKafkaUserClientQuotaTaskRequest) {
                    instanceId = deleteKafkaUserClientQuotaTaskRequest.instanceId;
                    body = deleteKafkaUserClientQuotaTaskRequest.body
                } else {
                    instanceId = deleteKafkaUserClientQuotaTaskRequest['instance_id'];
                    body = deleteKafkaUserClientQuotaTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteKafkaUserClientQuotaTask.');
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
         * 删除指定的定时任务。仅当定时任务处于执行成功或已取消状态时，方可执行删除操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScheduledTask(deleteScheduledTaskRequest?: DeleteScheduledTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/scheduled-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (deleteScheduledTaskRequest !== null && deleteScheduledTaskRequest !== undefined) {
                if (deleteScheduledTaskRequest instanceof DeleteScheduledTaskRequest) {
                    instanceId = deleteScheduledTaskRequest.instanceId;
                    taskId = deleteScheduledTaskRequest.taskId;
                } else {
                    instanceId = deleteScheduledTaskRequest['instance_id'];
                    taskId = deleteScheduledTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteScheduledTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteScheduledTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启Kafka实例域名访问后，客户端可以通过域名连接Kafka实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableDns(enableDnsRequest?: EnableDnsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/dns",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (enableDnsRequest !== null && enableDnsRequest !== undefined) {
                if (enableDnsRequest instanceof EnableDnsRequest) {
                    instanceId = enableDnsRequest.instanceId;
                } else {
                    instanceId = enableDnsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling enableDns.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在创建实例时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableZones() {
            const options = {
                method: "GET",
                url: "/v2/available-zones",
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
         * 查询实例的后台任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackgroundTasks(listBackgroundTasksRequest?: ListBackgroundTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tasks",
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
            
            let beginTime;
            
            let endTime;

            if (listBackgroundTasksRequest !== null && listBackgroundTasksRequest !== undefined) {
                if (listBackgroundTasksRequest instanceof ListBackgroundTasksRequest) {
                    instanceId = listBackgroundTasksRequest.instanceId;
                    offset = listBackgroundTasksRequest.offset;
                    limit = listBackgroundTasksRequest.limit;
                    beginTime = listBackgroundTasksRequest.beginTime;
                    endTime = listBackgroundTasksRequest.endTime;
                } else {
                    instanceId = listBackgroundTasksRequest['instance_id'];
                    offset = listBackgroundTasksRequest['offset'];
                    limit = listBackgroundTasksRequest['limit'];
                    beginTime = listBackgroundTasksRequest['begin_time'];
                    endTime = listBackgroundTasksRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBackgroundTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取特性开关列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigFeatures() {
            const options = {
                method: "GET",
                url: "/v2/config/features",
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
         * 查询产品规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEngineProducts(listEngineProductsRequest?: ListEngineProductsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let productId;

            if (listEngineProductsRequest !== null && listEngineProductsRequest !== undefined) {
                if (listEngineProductsRequest instanceof ListEngineProductsRequest) {
                    engine = listEngineProductsRequest.engine;
                    productId = listEngineProductsRequest.productId;
                } else {
                    engine = listEngineProductsRequest['engine'];
                    productId = listEngineProductsRequest['product_id'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listEngineProducts.');
            }
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceConsumerGroup(listInstanceConsumerGroupRequest?: ListInstanceConsumerGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engine;
            
            let instanceId;
            
            let group;

            if (listInstanceConsumerGroupRequest !== null && listInstanceConsumerGroupRequest !== undefined) {
                if (listInstanceConsumerGroupRequest instanceof ListInstanceConsumerGroupRequest) {
                    engine = listInstanceConsumerGroupRequest.engine;
                    instanceId = listInstanceConsumerGroupRequest.instanceId;
                    group = listInstanceConsumerGroupRequest.group;
                } else {
                    engine = listInstanceConsumerGroupRequest['engine'];
                    instanceId = listInstanceConsumerGroupRequest['instance_id'];
                    group = listInstanceConsumerGroupRequest['group'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstanceConsumerGroup.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceConsumerGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling listInstanceConsumerGroup.');
            }

            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定消费组的消费成员。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceConsumerGroupMembers(listInstanceConsumerGroupMembersRequest?: ListInstanceConsumerGroupMembersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let group;
            
            let offset;
            
            let limit;
            
            let host;
            
            let memberId;

            if (listInstanceConsumerGroupMembersRequest !== null && listInstanceConsumerGroupMembersRequest !== undefined) {
                if (listInstanceConsumerGroupMembersRequest instanceof ListInstanceConsumerGroupMembersRequest) {
                    engine = listInstanceConsumerGroupMembersRequest.engine;
                    instanceId = listInstanceConsumerGroupMembersRequest.instanceId;
                    group = listInstanceConsumerGroupMembersRequest.group;
                    offset = listInstanceConsumerGroupMembersRequest.offset;
                    limit = listInstanceConsumerGroupMembersRequest.limit;
                    host = listInstanceConsumerGroupMembersRequest.host;
                    memberId = listInstanceConsumerGroupMembersRequest.memberId;
                } else {
                    engine = listInstanceConsumerGroupMembersRequest['engine'];
                    instanceId = listInstanceConsumerGroupMembersRequest['instance_id'];
                    group = listInstanceConsumerGroupMembersRequest['group'];
                    offset = listInstanceConsumerGroupMembersRequest['offset'];
                    limit = listInstanceConsumerGroupMembersRequest['limit'];
                    host = listInstanceConsumerGroupMembersRequest['host'];
                    memberId = listInstanceConsumerGroupMembersRequest['member_id'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstanceConsumerGroupMembers.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceConsumerGroupMembers.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling listInstanceConsumerGroupMembers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (host !== null && host !== undefined) {
                localVarQueryParameter['host'] = host;
            }
            if (memberId !== null && memberId !== undefined) {
                localVarQueryParameter['member_id'] = memberId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组消息位点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceConsumerGroupMessageOffset(listInstanceConsumerGroupMessageOffsetRequest?: ListInstanceConsumerGroupMessageOffsetRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}/message-offset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let group;
            
            let topic;
            
            let partition;
            
            let offset;
            
            let limit;

            if (listInstanceConsumerGroupMessageOffsetRequest !== null && listInstanceConsumerGroupMessageOffsetRequest !== undefined) {
                if (listInstanceConsumerGroupMessageOffsetRequest instanceof ListInstanceConsumerGroupMessageOffsetRequest) {
                    engine = listInstanceConsumerGroupMessageOffsetRequest.engine;
                    instanceId = listInstanceConsumerGroupMessageOffsetRequest.instanceId;
                    group = listInstanceConsumerGroupMessageOffsetRequest.group;
                    topic = listInstanceConsumerGroupMessageOffsetRequest.topic;
                    partition = listInstanceConsumerGroupMessageOffsetRequest.partition;
                    offset = listInstanceConsumerGroupMessageOffsetRequest.offset;
                    limit = listInstanceConsumerGroupMessageOffsetRequest.limit;
                } else {
                    engine = listInstanceConsumerGroupMessageOffsetRequest['engine'];
                    instanceId = listInstanceConsumerGroupMessageOffsetRequest['instance_id'];
                    group = listInstanceConsumerGroupMessageOffsetRequest['group'];
                    topic = listInstanceConsumerGroupMessageOffsetRequest['topic'];
                    partition = listInstanceConsumerGroupMessageOffsetRequest['partition'];
                    offset = listInstanceConsumerGroupMessageOffsetRequest['offset'];
                    limit = listInstanceConsumerGroupMessageOffsetRequest['limit'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstanceConsumerGroupMessageOffset.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceConsumerGroupMessageOffset.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling listInstanceConsumerGroupMessageOffset.');
            }
            if (topic === null || topic === undefined) {
                throw new RequiredError('topic','Required parameter topic was null or undefined when calling listInstanceConsumerGroupMessageOffset.');
            }
            if (topic !== null && topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }
            if (partition !== null && partition !== undefined) {
                localVarQueryParameter['partition'] = partition;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定消费组的Topic。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceConsumerGroupTopics(listInstanceConsumerGroupTopicsRequest?: ListInstanceConsumerGroupTopicsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let group;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;
            
            let topic;

            if (listInstanceConsumerGroupTopicsRequest !== null && listInstanceConsumerGroupTopicsRequest !== undefined) {
                if (listInstanceConsumerGroupTopicsRequest instanceof ListInstanceConsumerGroupTopicsRequest) {
                    engine = listInstanceConsumerGroupTopicsRequest.engine;
                    instanceId = listInstanceConsumerGroupTopicsRequest.instanceId;
                    group = listInstanceConsumerGroupTopicsRequest.group;
                    offset = listInstanceConsumerGroupTopicsRequest.offset;
                    limit = listInstanceConsumerGroupTopicsRequest.limit;
                    sortKey = listInstanceConsumerGroupTopicsRequest.sortKey;
                    sortDir = listInstanceConsumerGroupTopicsRequest.sortDir;
                    topic = listInstanceConsumerGroupTopicsRequest.topic;
                } else {
                    engine = listInstanceConsumerGroupTopicsRequest['engine'];
                    instanceId = listInstanceConsumerGroupTopicsRequest['instance_id'];
                    group = listInstanceConsumerGroupTopicsRequest['group'];
                    offset = listInstanceConsumerGroupTopicsRequest['offset'];
                    limit = listInstanceConsumerGroupTopicsRequest['limit'];
                    sortKey = listInstanceConsumerGroupTopicsRequest['sort_key'];
                    sortDir = listInstanceConsumerGroupTopicsRequest['sort_dir'];
                    topic = listInstanceConsumerGroupTopicsRequest['topic'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstanceConsumerGroupTopics.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceConsumerGroupTopics.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling listInstanceConsumerGroupTopics.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (topic !== null && topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceConsumerGroups(listInstanceConsumerGroupsRequest?: ListInstanceConsumerGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/groups",
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
            
            let group;

            if (listInstanceConsumerGroupsRequest !== null && listInstanceConsumerGroupsRequest !== undefined) {
                if (listInstanceConsumerGroupsRequest instanceof ListInstanceConsumerGroupsRequest) {
                    instanceId = listInstanceConsumerGroupsRequest.instanceId;
                    offset = listInstanceConsumerGroupsRequest.offset;
                    limit = listInstanceConsumerGroupsRequest.limit;
                    group = listInstanceConsumerGroupsRequest.group;
                } else {
                    instanceId = listInstanceConsumerGroupsRequest['instance_id'];
                    offset = listInstanceConsumerGroupsRequest['offset'];
                    limit = listInstanceConsumerGroupsRequest['limit'];
                    group = listInstanceConsumerGroupsRequest['group'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceConsumerGroups.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (group !== null && group !== undefined) {
                localVarQueryParameter['group'] = group;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定Kafka实例的Topic详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceTopics(listInstanceTopicsRequest?: ListInstanceTopicsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics",
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

            if (listInstanceTopicsRequest !== null && listInstanceTopicsRequest !== undefined) {
                if (listInstanceTopicsRequest instanceof ListInstanceTopicsRequest) {
                    instanceId = listInstanceTopicsRequest.instanceId;
                    offset = listInstanceTopicsRequest.offset;
                    limit = listInstanceTopicsRequest.limit;
                } else {
                    instanceId = listInstanceTopicsRequest['instance_id'];
                    offset = listInstanceTopicsRequest['offset'];
                    limit = listInstanceTopicsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTopics.');
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
         * 查询租户的实例列表，支持按照条件查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let name;
            
            let instanceId;
            
            let status;
            
            let includeFailure;
            
            let exactMatchName;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    engine = listInstancesRequest.engine;
                    name = listInstancesRequest.name;
                    instanceId = listInstancesRequest.instanceId;
                    status = listInstancesRequest.status;
                    includeFailure = listInstancesRequest.includeFailure;
                    exactMatchName = listInstancesRequest.exactMatchName;
                    enterpriseProjectId = listInstancesRequest.enterpriseProjectId;
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                } else {
                    engine = listInstancesRequest['engine'];
                    name = listInstancesRequest['name'];
                    instanceId = listInstancesRequest['instance_id'];
                    status = listInstancesRequest['status'];
                    includeFailure = listInstancesRequest['include_failure'];
                    exactMatchName = listInstancesRequest['exact_match_name'];
                    enterpriseProjectId = listInstancesRequest['enterprise_project_id'];
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                }
            }

        
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstances.');
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (includeFailure !== null && includeFailure !== undefined) {
                localVarQueryParameter['include_failure'] = includeFailure;
            }
            if (exactMatchName !== null && exactMatchName !== undefined) {
                localVarQueryParameter['exact_match_name'] = exactMatchName;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消息积压诊断报告列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMessageDiagnosisReports(listMessageDiagnosisReportsRequest?: ListMessageDiagnosisReportsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/message-diagnosis-tasks",
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

            if (listMessageDiagnosisReportsRequest !== null && listMessageDiagnosisReportsRequest !== undefined) {
                if (listMessageDiagnosisReportsRequest instanceof ListMessageDiagnosisReportsRequest) {
                    instanceId = listMessageDiagnosisReportsRequest.instanceId;
                    offset = listMessageDiagnosisReportsRequest.offset;
                    limit = listMessageDiagnosisReportsRequest.limit;
                } else {
                    instanceId = listMessageDiagnosisReportsRequest['instance_id'];
                    offset = listMessageDiagnosisReportsRequest['offset'];
                    limit = listMessageDiagnosisReportsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMessageDiagnosisReports.');
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
         * 在创建kafka实例时，需要配置订购的产品ID（即product_id），可通过该接口查询产品规格。
         * 
         * 例如，要订购按需计费、基准带宽为100MB的kafka实例，可从接口响应消息中，查找Hourly的消息体，然后找到bandwidth为100MB的记录对应的product_id，该product_id的值即是创建上述kafka实例时需要配置的产品ID。
         * 
         * 同时，unavailable_zones字段表示资源不足的可用区列表，如果为空，则表示所有可用区都有资源，如果不为空，则表示字段值的可用区没有资源。所以必须确保您购买的资源所在的可用区有资源，不在该字段列表内。
         * 
         * [例如，响应消息中bandwidth字段为1200MB的记录，unavailable_zones字段包含cn-east-2b、cn-east-2a和cn-east-2d，表示在华东-上海2的可用区1、可用区2、可用区3都没有该资源。](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProducts(listProductsRequest?: ListProductsRequest) {
            const options = {
                method: "GET",
                url: "/v2/products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;

            if (listProductsRequest !== null && listProductsRequest !== undefined) {
                if (listProductsRequest instanceof ListProductsRequest) {
                    engine = listProductsRequest.engine;
                } else {
                    engine = listProductsRequest['engine'];
                }
            }

        
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling listProducts.');
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的定时任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledTasks(listScheduledTasksRequest?: ListScheduledTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/scheduled-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let start;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listScheduledTasksRequest !== null && listScheduledTasksRequest !== undefined) {
                if (listScheduledTasksRequest instanceof ListScheduledTasksRequest) {
                    instanceId = listScheduledTasksRequest.instanceId;
                    start = listScheduledTasksRequest.start;
                    limit = listScheduledTasksRequest.limit;
                    beginTime = listScheduledTasksRequest.beginTime;
                    endTime = listScheduledTasksRequest.endTime;
                } else {
                    instanceId = listScheduledTasksRequest['instance_id'];
                    start = listScheduledTasksRequest['start'];
                    limit = listScheduledTasksRequest['limit'];
                    beginTime = listScheduledTasksRequest['begin_time'];
                    endTime = listScheduledTasksRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listScheduledTasks.');
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Topic的分区列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopicPartitions(listTopicPartitionsRequest?: ListTopicPartitionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/topics/{topic}/partitions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let offset;
            
            let limit;

            if (listTopicPartitionsRequest !== null && listTopicPartitionsRequest !== undefined) {
                if (listTopicPartitionsRequest instanceof ListTopicPartitionsRequest) {
                    instanceId = listTopicPartitionsRequest.instanceId;
                    topic = listTopicPartitionsRequest.topic;
                    offset = listTopicPartitionsRequest.offset;
                    limit = listTopicPartitionsRequest.limit;
                } else {
                    instanceId = listTopicPartitionsRequest['instance_id'];
                    topic = listTopicPartitionsRequest['topic'];
                    offset = listTopicPartitionsRequest['offset'];
                    limit = listTopicPartitionsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listTopicPartitions.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling listTopicPartitions.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Topic的当前生产者列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopicProducers(listTopicProducersRequest?: ListTopicProducersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/topics/{topic}/producers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let offset;
            
            let limit;

            if (listTopicProducersRequest !== null && listTopicProducersRequest !== undefined) {
                if (listTopicProducersRequest instanceof ListTopicProducersRequest) {
                    instanceId = listTopicProducersRequest.instanceId;
                    topic = listTopicProducersRequest.topic;
                    offset = listTopicProducersRequest.offset;
                    limit = listTopicProducersRequest.limit;
                } else {
                    instanceId = listTopicProducersRequest['instance_id'];
                    topic = listTopicProducersRequest['topic'];
                    offset = listTopicProducersRequest['offset'];
                    limit = listTopicProducersRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listTopicProducers.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling listTopicProducers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户策略。
         * 
         * Kafka实例开启SASL功能后，才支持查询用户策略功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserPolicies(listUserPoliciesRequest?: ListUserPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{engine}/instances/{instance_id}/users/{user_name}/access-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engine;
            
            let instanceId;
            
            let userName;

            if (listUserPoliciesRequest !== null && listUserPoliciesRequest !== undefined) {
                if (listUserPoliciesRequest instanceof ListUserPoliciesRequest) {
                    engine = listUserPoliciesRequest.engine;
                    instanceId = listUserPoliciesRequest.instanceId;
                    userName = listUserPoliciesRequest.userName;
                } else {
                    engine = listUserPoliciesRequest['engine'];
                    instanceId = listUserPoliciesRequest['instance_id'];
                    userName = listUserPoliciesRequest['user_name'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listUserPolicies.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listUserPolicies.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling listUserPolicies.');
            }

            options.pathParams = { 'engine': engine,'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyInstanceConfigs(modifyInstanceConfigsRequest?: ModifyInstanceConfigsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyInstanceConfigsRequest !== null && modifyInstanceConfigsRequest !== undefined) {
                if (modifyInstanceConfigsRequest instanceof ModifyInstanceConfigsRequest) {
                    instanceId = modifyInstanceConfigsRequest.instanceId;
                    body = modifyInstanceConfigsRequest.body
                } else {
                    instanceId = modifyInstanceConfigsRequest['instance_id'];
                    body = modifyInstanceConfigsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyInstanceConfigs.');
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
         * 开启或者关闭Kafka实例公网访问功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyKafkaPublicIpAccessSwitch(modifyKafkaPublicIpAccessSwitchRequest?: ModifyKafkaPublicIpAccessSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/{instance_id}/public-boundwidth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyKafkaPublicIpAccessSwitchRequest !== null && modifyKafkaPublicIpAccessSwitchRequest !== undefined) {
                if (modifyKafkaPublicIpAccessSwitchRequest instanceof ModifyKafkaPublicIpAccessSwitchRequest) {
                    instanceId = modifyKafkaPublicIpAccessSwitchRequest.instanceId;
                    body = modifyKafkaPublicIpAccessSwitchRequest.body
                } else {
                    instanceId = modifyKafkaPublicIpAccessSwitchRequest['instance_id'];
                    body = modifyKafkaPublicIpAccessSwitchRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyKafkaPublicIpAccessSwitch.');
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
         * 该接口用于向Kafka实例提交修改Topic级别的流控任务，若成功则返回流控任务的job_id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyKafkaTopicQuota(modifyKafkaTopicQuotaRequest?: ModifyKafkaTopicQuotaRequest) {
            const options = {
                method: "PUT",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/kafka-topic-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyKafkaTopicQuotaRequest !== null && modifyKafkaTopicQuotaRequest !== undefined) {
                if (modifyKafkaTopicQuotaRequest instanceof ModifyKafkaTopicQuotaRequest) {
                    instanceId = modifyKafkaTopicQuotaRequest.instanceId;
                    body = modifyKafkaTopicQuotaRequest.body
                } else {
                    instanceId = modifyKafkaTopicQuotaRequest['instance_id'];
                    body = modifyKafkaTopicQuotaRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyKafkaTopicQuota.');
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
         * 更新回收站策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyRecyclePolicy(modifyRecyclePolicyRequest?: ModifyRecyclePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/recycle",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (modifyRecyclePolicyRequest !== null && modifyRecyclePolicyRequest !== undefined) {
                if (modifyRecyclePolicyRequest instanceof ModifyRecyclePolicyRequest) {
                    body = modifyRecyclePolicyRequest.body
                } else {
                    body = modifyRecyclePolicyRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置Manager密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetManagerPassword(resetManagerPasswordRequest?: ResetManagerPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/kafka-manager-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetManagerPasswordRequest !== null && resetManagerPasswordRequest !== undefined) {
                if (resetManagerPasswordRequest instanceof ResetManagerPasswordRequest) {
                    instanceId = resetManagerPasswordRequest.instanceId;
                    body = resetManagerPasswordRequest.body
                } else {
                    instanceId = resetManagerPasswordRequest['instance_id'];
                    body = resetManagerPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetManagerPassword.');
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
         * Kafka实例不支持在线重置消费进度。在执行重置消费进度之前，必须停止被重置消费组客户端。
         * 
         * 停止待重置消费组客户端，然后等待一段时间（即ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG配置的时间，默认为1000毫秒）后，服务端才认为此消费组客户端已下线。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetMessageOffset(resetMessageOffsetRequest?: ResetMessageOffsetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/management/groups/{group}/reset-message-offset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let group;

            if (resetMessageOffsetRequest !== null && resetMessageOffsetRequest !== undefined) {
                if (resetMessageOffsetRequest instanceof ResetMessageOffsetRequest) {
                    instanceId = resetMessageOffsetRequest.instanceId;
                    group = resetMessageOffsetRequest.group;
                    body = resetMessageOffsetRequest.body
                } else {
                    instanceId = resetMessageOffsetRequest['instance_id'];
                    group = resetMessageOffsetRequest['group'];
                    body = resetMessageOffsetRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetMessageOffset.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling resetMessageOffset.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Kafka实例不支持在线重置消费进度。在执行重置消费进度之前，必须停止被重置消费组客户端。
         * 
         * 停止待重置消费组客户端，然后等待一段时间（即ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG配置的时间，默认为1000毫秒）后，服务端才认为此消费组客户端已下线。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetMessageOffsetWithEngine(resetMessageOffsetWithEngineRequest?: ResetMessageOffsetWithEngineRequest) {
            const options = {
                method: "PUT",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/groups/{group}/reset-message-offset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let group;

            if (resetMessageOffsetWithEngineRequest !== null && resetMessageOffsetWithEngineRequest !== undefined) {
                if (resetMessageOffsetWithEngineRequest instanceof ResetMessageOffsetWithEngineRequest) {
                    instanceId = resetMessageOffsetWithEngineRequest.instanceId;
                    group = resetMessageOffsetWithEngineRequest.group;
                    body = resetMessageOffsetWithEngineRequest.body
                } else {
                    instanceId = resetMessageOffsetWithEngineRequest['instance_id'];
                    group = resetMessageOffsetWithEngineRequest['group'];
                    body = resetMessageOffsetWithEngineRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetMessageOffsetWithEngine.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling resetMessageOffsetWithEngine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置密码（只针对开通SSL的实例）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetPasswordRequest !== null && resetPasswordRequest !== undefined) {
                if (resetPasswordRequest instanceof ResetPasswordRequest) {
                    instanceId = resetPasswordRequest.instanceId;
                    body = resetPasswordRequest.body
                } else {
                    instanceId = resetPasswordRequest['instance_id'];
                    body = resetPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetPassword.');
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
         * 重置用户密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetUserPasswrod(resetUserPasswrodRequest?: ResetUserPasswrodRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/users/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let userName;

            if (resetUserPasswrodRequest !== null && resetUserPasswrodRequest !== undefined) {
                if (resetUserPasswrodRequest instanceof ResetUserPasswrodRequest) {
                    instanceId = resetUserPasswrodRequest.instanceId;
                    userName = resetUserPasswrodRequest.userName;
                    body = resetUserPasswrodRequest.body
                } else {
                    instanceId = resetUserPasswrodRequest['instance_id'];
                    userName = resetUserPasswrodRequest['user_name'];
                    body = resetUserPasswrodRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetUserPasswrod.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling resetUserPasswrod.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例规格变更。[当前通过调用API，只支持按需实例进行实例扩容。](tag:hws,hws_hk,ctc,cmcc,hws_eu)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeEngineInstance(resizeEngineInstanceRequest?: ResizeEngineInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (resizeEngineInstanceRequest !== null && resizeEngineInstanceRequest !== undefined) {
                if (resizeEngineInstanceRequest instanceof ResizeEngineInstanceRequest) {
                    engine = resizeEngineInstanceRequest.engine;
                    instanceId = resizeEngineInstanceRequest.instanceId;
                    body = resizeEngineInstanceRequest.body
                } else {
                    engine = resizeEngineInstanceRequest['engine'];
                    instanceId = resizeEngineInstanceRequest['instance_id'];
                    body = resizeEngineInstanceRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling resizeEngineInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeEngineInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例扩容。[当前通过调用API，只支持按需实例进行实例扩容。](tag:hws,hws_hk,ctc,cmcc,hws_eu)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resizeInstanceRequest !== null && resizeInstanceRequest !== undefined) {
                if (resizeInstanceRequest instanceof ResizeInstanceRequest) {
                    instanceId = resizeInstanceRequest.instanceId;
                    body = resizeInstanceRequest.body
                } else {
                    instanceId = resizeInstanceRequest['instance_id'];
                    body = resizeInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeInstance.');
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
         * 实例规格变更。[当前通过调用API，只支持按需实例进行实例扩容。](tag:hws,hws_hk,ctc,cmcc,hws_eu,ax)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeKafkaInstance(resizeKafkaInstanceRequest?: ResizeKafkaInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resizeKafkaInstanceRequest !== null && resizeKafkaInstanceRequest !== undefined) {
                if (resizeKafkaInstanceRequest instanceof ResizeKafkaInstanceRequest) {
                    instanceId = resizeKafkaInstanceRequest.instanceId;
                    body = resizeKafkaInstanceRequest.body
                } else {
                    instanceId = resizeKafkaInstanceRequest['instance_id'];
                    body = resizeKafkaInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeKafkaInstance.');
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
         * 重启Manager。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartManager(restartManagerRequest?: RestartManagerRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/restart-kafka-manager",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (restartManagerRequest !== null && restartManagerRequest !== undefined) {
                if (restartManagerRequest instanceof RestartManagerRequest) {
                    instanceId = restartManagerRequest.instanceId;
                } else {
                    instanceId = restartManagerRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartManager.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复回收站实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreRecycleInstance(restoreRecycleInstanceRequest?: RestoreRecycleInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/recycle",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (restoreRecycleInstanceRequest !== null && restoreRecycleInstanceRequest !== undefined) {
                if (restoreRecycleInstanceRequest instanceof RestoreRecycleInstanceRequest) {
                    body = restoreRecycleInstanceRequest.body
                } else {
                    body = restoreRecycleInstanceRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在控制台发送指定消息到Kafka实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sendKafkaMessage(sendKafkaMessageRequest?: SendKafkaMessageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/messages/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let actionId;

            if (sendKafkaMessageRequest !== null && sendKafkaMessageRequest !== undefined) {
                if (sendKafkaMessageRequest instanceof SendKafkaMessageRequest) {
                    instanceId = sendKafkaMessageRequest.instanceId;
                    actionId = sendKafkaMessageRequest.actionId;
                    body = sendKafkaMessageRequest.body
                } else {
                    instanceId = sendKafkaMessageRequest['instance_id'];
                    actionId = sendKafkaMessageRequest['action_id'];
                    body = sendKafkaMessageRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling sendKafkaMessage.');
            }
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling sendKafkaMessage.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action_id'] = actionId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建/删除用户策略。
         * 
         * Kafka实例开启SASL功能后，才支持创建/删除用户策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setUserPolicies(setUserPoliciesRequest?: SetUserPoliciesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{engine}/instances/{instance_id}/users/{user_name}/access-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;
            
            let userName;

            if (setUserPoliciesRequest !== null && setUserPoliciesRequest !== undefined) {
                if (setUserPoliciesRequest instanceof SetUserPoliciesRequest) {
                    engine = setUserPoliciesRequest.engine;
                    instanceId = setUserPoliciesRequest.instanceId;
                    userName = setUserPoliciesRequest.userName;
                    body = setUserPoliciesRequest.body
                } else {
                    engine = setUserPoliciesRequest['engine'];
                    instanceId = setUserPoliciesRequest['instance_id'];
                    userName = setUserPoliciesRequest['user_name'];
                    body = setUserPoliciesRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling setUserPolicies.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setUserPolicies.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling setUserPolicies.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询后台任务管理中的指定记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackgroundTask(showBackgroundTaskRequest?: ShowBackgroundTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (showBackgroundTaskRequest !== null && showBackgroundTaskRequest !== undefined) {
                if (showBackgroundTaskRequest instanceof ShowBackgroundTaskRequest) {
                    instanceId = showBackgroundTaskRequest.instanceId;
                    taskId = showBackgroundTaskRequest.taskId;
                } else {
                    instanceId = showBackgroundTaskRequest['instance_id'];
                    taskId = showBackgroundTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackgroundTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showBackgroundTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询后台任务中的指定实例的变更进度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackgroundTaskProgress(showBackgroundTaskProgressRequest?: ShowBackgroundTaskProgressRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tasks/{task_id}/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (showBackgroundTaskProgressRequest !== null && showBackgroundTaskProgressRequest !== undefined) {
                if (showBackgroundTaskProgressRequest instanceof ShowBackgroundTaskProgressRequest) {
                    instanceId = showBackgroundTaskProgressRequest.instanceId;
                    taskId = showBackgroundTaskProgressRequest.taskId;
                } else {
                    instanceId = showBackgroundTaskProgressRequest['instance_id'];
                    taskId = showBackgroundTaskProgressRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackgroundTaskProgress.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showBackgroundTaskProgress.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例在CES的监控层级关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCesHierarchy(showCesHierarchyRequest?: ShowCesHierarchyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/ces-hierarchy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showCesHierarchyRequest !== null && showCesHierarchyRequest !== undefined) {
                if (showCesHierarchyRequest instanceof ShowCesHierarchyRequest) {
                    instanceId = showCesHierarchyRequest.instanceId;
                } else {
                    instanceId = showCesHierarchyRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showCesHierarchy.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Kafka集群元数据信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCluster(showClusterRequest?: ShowClusterRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/cluster",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showClusterRequest !== null && showClusterRequest !== undefined) {
                if (showClusterRequest instanceof ShowClusterRequest) {
                    instanceId = showClusterRequest.instanceId;
                } else {
                    instanceId = showClusterRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showCluster.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Kafka实例的协调器信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCoordinators(showCoordinatorsRequest?: ShowCoordinatorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/coordinators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showCoordinatorsRequest !== null && showCoordinatorsRequest !== undefined) {
                if (showCoordinatorsRequest instanceof ShowCoordinatorsRequest) {
                    instanceId = showCoordinatorsRequest.instanceId;
                } else {
                    instanceId = showCoordinatorsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showCoordinators.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 消息积压诊断预检查
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisPreCheck(showDiagnosisPreCheckRequest?: ShowDiagnosisPreCheckRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/diagnosis-check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let group;
            
            let topic;

            if (showDiagnosisPreCheckRequest !== null && showDiagnosisPreCheckRequest !== undefined) {
                if (showDiagnosisPreCheckRequest instanceof ShowDiagnosisPreCheckRequest) {
                    instanceId = showDiagnosisPreCheckRequest.instanceId;
                    group = showDiagnosisPreCheckRequest.group;
                    topic = showDiagnosisPreCheckRequest.topic;
                } else {
                    instanceId = showDiagnosisPreCheckRequest['instance_id'];
                    group = showDiagnosisPreCheckRequest['group'];
                    topic = showDiagnosisPreCheckRequest['topic'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDiagnosisPreCheck.');
            }
            if (group === null || group === undefined) {
                throw new RequiredError('group','Required parameter group was null or undefined when calling showDiagnosisPreCheck.');
            }
            if (group !== null && group !== undefined) {
                localVarQueryParameter['group'] = group;
            }
            if (topic === null || topic === undefined) {
                throw new RequiredError('topic','Required parameter topic was null or undefined when calling showDiagnosisPreCheck.');
            }
            if (topic !== null && topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的扩容规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEngineInstanceExtendProductInfo(showEngineInstanceExtendProductInfoRequest?: ShowEngineInstanceExtendProductInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let instanceId;
            
            let type;

            if (showEngineInstanceExtendProductInfoRequest !== null && showEngineInstanceExtendProductInfoRequest !== undefined) {
                if (showEngineInstanceExtendProductInfoRequest instanceof ShowEngineInstanceExtendProductInfoRequest) {
                    engine = showEngineInstanceExtendProductInfoRequest.engine;
                    instanceId = showEngineInstanceExtendProductInfoRequest.instanceId;
                    type = showEngineInstanceExtendProductInfoRequest.type;
                } else {
                    engine = showEngineInstanceExtendProductInfoRequest['engine'];
                    instanceId = showEngineInstanceExtendProductInfoRequest['instance_id'];
                    type = showEngineInstanceExtendProductInfoRequest['type'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling showEngineInstanceExtendProductInfo.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showEngineInstanceExtendProductInfo.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showEngineInstanceExtendProductInfo.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定消费组信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGroup(showGroupRequest?: ShowGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let group;

            if (showGroupRequest !== null && showGroupRequest !== undefined) {
                if (showGroupRequest instanceof ShowGroupRequest) {
                    instanceId = showGroupRequest.instanceId;
                    group = showGroupRequest.group;
                } else {
                    instanceId = showGroupRequest['instance_id'];
                    group = showGroupRequest['group'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling showGroup.');
            }

            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGroups(showGroupsRequest?: ShowGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let group;

            if (showGroupsRequest !== null && showGroupsRequest !== undefined) {
                if (showGroupsRequest instanceof ShowGroupsRequest) {
                    instanceId = showGroupsRequest.instanceId;
                    group = showGroupsRequest.group;
                } else {
                    instanceId = showGroupsRequest['instance_id'];
                    group = showGroupsRequest['group'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGroups.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling showGroups.');
            }

            options.pathParams = { 'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的详细信息。
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
         * 获取实例配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceConfigs(showInstanceConfigsRequest?: ShowInstanceConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceConfigsRequest !== null && showInstanceConfigsRequest !== undefined) {
                if (showInstanceConfigsRequest instanceof ShowInstanceConfigsRequest) {
                    instanceId = showInstanceConfigsRequest.instanceId;
                } else {
                    instanceId = showInstanceConfigsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceConfigs.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的扩容规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceExtendProductInfo(showInstanceExtendProductInfoRequest?: ShowInstanceExtendProductInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let type;
            
            let engine;

            if (showInstanceExtendProductInfoRequest !== null && showInstanceExtendProductInfoRequest !== undefined) {
                if (showInstanceExtendProductInfoRequest instanceof ShowInstanceExtendProductInfoRequest) {
                    instanceId = showInstanceExtendProductInfoRequest.instanceId;
                    type = showInstanceExtendProductInfoRequest.type;
                    engine = showInstanceExtendProductInfoRequest.engine;
                } else {
                    instanceId = showInstanceExtendProductInfoRequest['instance_id'];
                    type = showInstanceExtendProductInfoRequest['type'];
                    engine = showInstanceExtendProductInfoRequest['engine'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceExtendProductInfo.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showInstanceExtendProductInfo.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling showInstanceExtendProductInfo.');
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Kafka实例支持两种消息查询方式，具体查询范围及结果如下：
         * - 按创建时间查询：若已知消息的创建时间段，可通过该方式查询，将返回消息列表及对应偏移量，但不包含消息具体内容。
         * - 按偏移量查询：若已知目标消息所属Topic的分区及具体偏移量，可通过该方式查询，将返回消息列表及完整的消息内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceMessages(showInstanceMessagesRequest?: ShowInstanceMessagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let asc;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let download;
            
            let messageOffset;
            
            let partition;
            
            let keyword;
            
            let key;
            
            let include;
            
            let exclude;

            if (showInstanceMessagesRequest !== null && showInstanceMessagesRequest !== undefined) {
                if (showInstanceMessagesRequest instanceof ShowInstanceMessagesRequest) {
                    instanceId = showInstanceMessagesRequest.instanceId;
                    topic = showInstanceMessagesRequest.topic;
                    asc = showInstanceMessagesRequest.asc;
                    startTime = showInstanceMessagesRequest.startTime;
                    endTime = showInstanceMessagesRequest.endTime;
                    limit = showInstanceMessagesRequest.limit;
                    offset = showInstanceMessagesRequest.offset;
                    download = showInstanceMessagesRequest.download;
                    messageOffset = showInstanceMessagesRequest.messageOffset;
                    partition = showInstanceMessagesRequest.partition;
                    keyword = showInstanceMessagesRequest.keyword;
                    key = showInstanceMessagesRequest.key;
                    include = showInstanceMessagesRequest.include;
                    exclude = showInstanceMessagesRequest.exclude;
                } else {
                    instanceId = showInstanceMessagesRequest['instance_id'];
                    topic = showInstanceMessagesRequest['topic'];
                    asc = showInstanceMessagesRequest['asc'];
                    startTime = showInstanceMessagesRequest['start_time'];
                    endTime = showInstanceMessagesRequest['end_time'];
                    limit = showInstanceMessagesRequest['limit'];
                    offset = showInstanceMessagesRequest['offset'];
                    download = showInstanceMessagesRequest['download'];
                    messageOffset = showInstanceMessagesRequest['message_offset'];
                    partition = showInstanceMessagesRequest['partition'];
                    keyword = showInstanceMessagesRequest['keyword'];
                    key = showInstanceMessagesRequest['key'];
                    include = showInstanceMessagesRequest['include'];
                    exclude = showInstanceMessagesRequest['exclude'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceMessages.');
            }
            if (topic === null || topic === undefined) {
                throw new RequiredError('topic','Required parameter topic was null or undefined when calling showInstanceMessages.');
            }
            if (topic !== null && topic !== undefined) {
                localVarQueryParameter['topic'] = topic;
            }
            if (asc !== null && asc !== undefined) {
                localVarQueryParameter['asc'] = asc;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (download !== null && download !== undefined) {
                localVarQueryParameter['download'] = download;
            }
            if (messageOffset !== null && messageOffset !== undefined) {
                localVarQueryParameter['message_offset'] = messageOffset;
            }
            if (partition !== null && partition !== undefined) {
                localVarQueryParameter['partition'] = partition;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (include !== null && include !== undefined) {
                localVarQueryParameter['include'] = include;
            }
            if (exclude !== null && exclude !== undefined) {
                localVarQueryParameter['exclude'] = exclude;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Kafka实例Topic详细信息。(单个实例调用不要超过1s一次)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceTopicDetail(showInstanceTopicDetailRequest?: ShowInstanceTopicDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;

            if (showInstanceTopicDetailRequest !== null && showInstanceTopicDetailRequest !== undefined) {
                if (showInstanceTopicDetailRequest instanceof ShowInstanceTopicDetailRequest) {
                    instanceId = showInstanceTopicDetailRequest.instanceId;
                    topic = showInstanceTopicDetailRequest.topic;
                } else {
                    instanceId = showInstanceTopicDetailRequest['instance_id'];
                    topic = showInstanceTopicDetailRequest['topic'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceTopicDetail.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showInstanceTopicDetail.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户列表。
         * 
         * Kafka实例开启SASL功能时，才支持多用户管理的功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceUsers(showInstanceUsersRequest?: ShowInstanceUsersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceUsersRequest !== null && showInstanceUsersRequest !== undefined) {
                if (showInstanceUsersRequest instanceof ShowInstanceUsersRequest) {
                    instanceId = showInstanceUsersRequest.instanceId;
                } else {
                    instanceId = showInstanceUsersRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceUsers.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Kafka集群信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaCluster(showKafkaClusterRequest?: ShowKafkaClusterRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/manage/cluster",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showKafkaClusterRequest !== null && showKafkaClusterRequest !== undefined) {
                if (showKafkaClusterRequest instanceof ShowKafkaClusterRequest) {
                    instanceId = showKafkaClusterRequest.instanceId;
                } else {
                    instanceId = showKafkaClusterRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaCluster.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的扩容规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaInstanceExtendProductInfo(showKafkaInstanceExtendProductInfoRequest?: ShowKafkaInstanceExtendProductInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/extend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let type;

            if (showKafkaInstanceExtendProductInfoRequest !== null && showKafkaInstanceExtendProductInfoRequest !== undefined) {
                if (showKafkaInstanceExtendProductInfoRequest instanceof ShowKafkaInstanceExtendProductInfoRequest) {
                    instanceId = showKafkaInstanceExtendProductInfoRequest.instanceId;
                    type = showKafkaInstanceExtendProductInfoRequest.type;
                } else {
                    instanceId = showKafkaInstanceExtendProductInfoRequest['instance_id'];
                    type = showKafkaInstanceExtendProductInfoRequest['type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaInstanceExtendProductInfo.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showKafkaInstanceExtendProductInfo.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Kafka产品规格核数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaProductCores(showKafkaProductCoresRequest?: ShowKafkaProductCoresRequest) {
            const options = {
                method: "GET",
                url: "/v2/kafka/products/cores",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productId;
            
            let brokerNum;
            
            let instanceId;

            if (showKafkaProductCoresRequest !== null && showKafkaProductCoresRequest !== undefined) {
                if (showKafkaProductCoresRequest instanceof ShowKafkaProductCoresRequest) {
                    productId = showKafkaProductCoresRequest.productId;
                    brokerNum = showKafkaProductCoresRequest.brokerNum;
                    instanceId = showKafkaProductCoresRequest.instanceId;
                } else {
                    productId = showKafkaProductCoresRequest['product_id'];
                    brokerNum = showKafkaProductCoresRequest['broker_num'];
                    instanceId = showKafkaProductCoresRequest['instance_id'];
                }
            }

        
            if (productId === null || productId === undefined) {
                throw new RequiredError('productId','Required parameter productId was null or undefined when calling showKafkaProductCores.');
            }
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (brokerNum === null || brokerNum === undefined) {
                throw new RequiredError('brokerNum','Required parameter brokerNum was null or undefined when calling showKafkaProductCores.');
            }
            if (brokerNum !== null && brokerNum !== undefined) {
                localVarQueryParameter['broker_num'] = brokerNum;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaProjectTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/tags",
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
         * 查询Kafka实例重平衡日志详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaRebalanceLog(showKafkaRebalanceLogRequest?: ShowKafkaRebalanceLogRequest) {
            const options = {
                method: "GET",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/log/rebalance-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showKafkaRebalanceLogRequest !== null && showKafkaRebalanceLogRequest !== undefined) {
                if (showKafkaRebalanceLogRequest instanceof ShowKafkaRebalanceLogRequest) {
                    instanceId = showKafkaRebalanceLogRequest.instanceId;
                } else {
                    instanceId = showKafkaRebalanceLogRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaRebalanceLog.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Kafka实例扩容前置检查信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaScalePreCheckInfo(showKafkaScalePreCheckInfoRequest?: ShowKafkaScalePreCheckInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/extend-check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showKafkaScalePreCheckInfoRequest !== null && showKafkaScalePreCheckInfoRequest !== undefined) {
                if (showKafkaScalePreCheckInfoRequest instanceof ShowKafkaScalePreCheckInfoRequest) {
                    instanceId = showKafkaScalePreCheckInfoRequest.instanceId;
                } else {
                    instanceId = showKafkaScalePreCheckInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaScalePreCheckInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaTags(showKafkaTagsRequest?: ShowKafkaTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/{instance_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showKafkaTagsRequest !== null && showKafkaTagsRequest !== undefined) {
                if (showKafkaTagsRequest instanceof ShowKafkaTagsRequest) {
                    instanceId = showKafkaTagsRequest.instanceId;
                } else {
                    instanceId = showKafkaTagsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaTags.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Kafka Topic详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaTopicDetail(showKafkaTopicDetailRequest?: ShowKafkaTopicDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/topics-detail/{topic}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;

            if (showKafkaTopicDetailRequest !== null && showKafkaTopicDetailRequest !== undefined) {
                if (showKafkaTopicDetailRequest instanceof ShowKafkaTopicDetailRequest) {
                    instanceId = showKafkaTopicDetailRequest.instanceId;
                    topic = showKafkaTopicDetailRequest.topic;
                } else {
                    instanceId = showKafkaTopicDetailRequest['instance_id'];
                    topic = showKafkaTopicDetailRequest['topic'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaTopicDetail.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showKafkaTopicDetail.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Topic在Broker上磁盘占用情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaTopicPartitionDiskusage(showKafkaTopicPartitionDiskusageRequest?: ShowKafkaTopicPartitionDiskusageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/topics/diskusage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let minSize;
            
            let top;
            
            let percentage;

            if (showKafkaTopicPartitionDiskusageRequest !== null && showKafkaTopicPartitionDiskusageRequest !== undefined) {
                if (showKafkaTopicPartitionDiskusageRequest instanceof ShowKafkaTopicPartitionDiskusageRequest) {
                    instanceId = showKafkaTopicPartitionDiskusageRequest.instanceId;
                    minSize = showKafkaTopicPartitionDiskusageRequest.minSize;
                    top = showKafkaTopicPartitionDiskusageRequest.top;
                    percentage = showKafkaTopicPartitionDiskusageRequest.percentage;
                } else {
                    instanceId = showKafkaTopicPartitionDiskusageRequest['instance_id'];
                    minSize = showKafkaTopicPartitionDiskusageRequest['minSize'];
                    top = showKafkaTopicPartitionDiskusageRequest['top'];
                    percentage = showKafkaTopicPartitionDiskusageRequest['percentage'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaTopicPartitionDiskusage.');
            }
            if (minSize !== null && minSize !== undefined) {
                localVarQueryParameter['minSize'] = minSize;
            }
            if (top !== null && top !== undefined) {
                localVarQueryParameter['top'] = top;
            }
            if (percentage !== null && percentage !== undefined) {
                localVarQueryParameter['percentage'] = percentage;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询Topic级别的流控任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaTopicQuota(showKafkaTopicQuotaRequest?: ShowKafkaTopicQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/kafka-topic-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let type;
            
            let limit;
            
            let offset;
            
            let keyword;

            if (showKafkaTopicQuotaRequest !== null && showKafkaTopicQuotaRequest !== undefined) {
                if (showKafkaTopicQuotaRequest instanceof ShowKafkaTopicQuotaRequest) {
                    instanceId = showKafkaTopicQuotaRequest.instanceId;
                    type = showKafkaTopicQuotaRequest.type;
                    limit = showKafkaTopicQuotaRequest.limit;
                    offset = showKafkaTopicQuotaRequest.offset;
                    keyword = showKafkaTopicQuotaRequest.keyword;
                } else {
                    instanceId = showKafkaTopicQuotaRequest['instance_id'];
                    type = showKafkaTopicQuotaRequest['type'];
                    limit = showKafkaTopicQuotaRequest['limit'];
                    offset = showKafkaTopicQuotaRequest['offset'];
                    keyword = showKafkaTopicQuotaRequest['keyword'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaTopicQuota.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于向Kafka实例查询流控的配置，若成功则返回流控配置的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKafkaUserClientQuota(showKafkaUserClientQuotaRequest?: ShowKafkaUserClientQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/kafka-user-client-quota",
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

            if (showKafkaUserClientQuotaRequest !== null && showKafkaUserClientQuotaRequest !== undefined) {
                if (showKafkaUserClientQuotaRequest instanceof ShowKafkaUserClientQuotaRequest) {
                    instanceId = showKafkaUserClientQuotaRequest.instanceId;
                    offset = showKafkaUserClientQuotaRequest.offset;
                    limit = showKafkaUserClientQuotaRequest.limit;
                } else {
                    instanceId = showKafkaUserClientQuotaRequest['instance_id'];
                    offset = showKafkaUserClientQuotaRequest['offset'];
                    limit = showKafkaUserClientQuotaRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKafkaUserClientQuota.');
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
         * 查询维护时间窗开始时间和结束时间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMaintainWindows() {
            const options = {
                method: "GET",
                url: "/v2/instances/maintain-windows",
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
         * 查询诊断报告详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMessageDiagnosisReport(showMessageDiagnosisReportRequest?: ShowMessageDiagnosisReportRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/message-diagnosis/{report_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let reportId;

            if (showMessageDiagnosisReportRequest !== null && showMessageDiagnosisReportRequest !== undefined) {
                if (showMessageDiagnosisReportRequest instanceof ShowMessageDiagnosisReportRequest) {
                    instanceId = showMessageDiagnosisReportRequest.instanceId;
                    reportId = showMessageDiagnosisReportRequest.reportId;
                } else {
                    instanceId = showMessageDiagnosisReportRequest['instance_id'];
                    reportId = showMessageDiagnosisReportRequest['report_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showMessageDiagnosisReport.');
            }
            if (reportId === null || reportId === undefined) {
            throw new RequiredError('reportId','Required parameter reportId was null or undefined when calling showMessageDiagnosisReport.');
            }

            options.pathParams = { 'instance_id': instanceId,'report_id': reportId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分区指定时间段的消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMessages(showMessagesRequest?: ShowMessagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let partition;

            if (showMessagesRequest !== null && showMessagesRequest !== undefined) {
                if (showMessagesRequest instanceof ShowMessagesRequest) {
                    instanceId = showMessagesRequest.instanceId;
                    topic = showMessagesRequest.topic;
                    startTime = showMessagesRequest.startTime;
                    endTime = showMessagesRequest.endTime;
                    limit = showMessagesRequest.limit;
                    offset = showMessagesRequest.offset;
                    partition = showMessagesRequest.partition;
                } else {
                    instanceId = showMessagesRequest['instance_id'];
                    topic = showMessagesRequest['topic'];
                    startTime = showMessagesRequest['start_time'];
                    endTime = showMessagesRequest['end_time'];
                    limit = showMessagesRequest['limit'];
                    offset = showMessagesRequest['offset'];
                    partition = showMessagesRequest['partition'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showMessages.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showMessages.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (partition !== null && partition !== undefined) {
                localVarQueryParameter['partition'] = partition;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'topic': topic, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分区最早消息的位置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartitionBeginningMessage(showPartitionBeginningMessageRequest?: ShowPartitionBeginningMessageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/partitions/{partition}/beginning-message",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;
            
            let partition;

            if (showPartitionBeginningMessageRequest !== null && showPartitionBeginningMessageRequest !== undefined) {
                if (showPartitionBeginningMessageRequest instanceof ShowPartitionBeginningMessageRequest) {
                    instanceId = showPartitionBeginningMessageRequest.instanceId;
                    topic = showPartitionBeginningMessageRequest.topic;
                    partition = showPartitionBeginningMessageRequest.partition;
                } else {
                    instanceId = showPartitionBeginningMessageRequest['instance_id'];
                    topic = showPartitionBeginningMessageRequest['topic'];
                    partition = showPartitionBeginningMessageRequest['partition'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPartitionBeginningMessage.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showPartitionBeginningMessage.');
            }
            if (partition === null || partition === undefined) {
            throw new RequiredError('partition','Required parameter partition was null or undefined when calling showPartitionBeginningMessage.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic,'partition': partition, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分区最新消息的位置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartitionEndMessage(showPartitionEndMessageRequest?: ShowPartitionEndMessageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/partitions/{partition}/end-message",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topic;
            
            let partition;

            if (showPartitionEndMessageRequest !== null && showPartitionEndMessageRequest !== undefined) {
                if (showPartitionEndMessageRequest instanceof ShowPartitionEndMessageRequest) {
                    instanceId = showPartitionEndMessageRequest.instanceId;
                    topic = showPartitionEndMessageRequest.topic;
                    partition = showPartitionEndMessageRequest.partition;
                } else {
                    instanceId = showPartitionEndMessageRequest['instance_id'];
                    topic = showPartitionEndMessageRequest['topic'];
                    partition = showPartitionEndMessageRequest['partition'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPartitionEndMessage.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showPartitionEndMessage.');
            }
            if (partition === null || partition === undefined) {
            throw new RequiredError('partition','Required parameter partition was null or undefined when calling showPartitionEndMessage.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic': topic,'partition': partition, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分区指定偏移量的消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartitionMessage(showPartitionMessageRequest?: ShowPartitionMessageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/management/topics/{topic}/partitions/{partition}/message",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let topic;
            
            let partition;
            
            let messageOffset;

            if (showPartitionMessageRequest !== null && showPartitionMessageRequest !== undefined) {
                if (showPartitionMessageRequest instanceof ShowPartitionMessageRequest) {
                    instanceId = showPartitionMessageRequest.instanceId;
                    topic = showPartitionMessageRequest.topic;
                    partition = showPartitionMessageRequest.partition;
                    messageOffset = showPartitionMessageRequest.messageOffset;
                } else {
                    instanceId = showPartitionMessageRequest['instance_id'];
                    topic = showPartitionMessageRequest['topic'];
                    partition = showPartitionMessageRequest['partition'];
                    messageOffset = showPartitionMessageRequest['message_offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPartitionMessage.');
            }
            if (topic === null || topic === undefined) {
            throw new RequiredError('topic','Required parameter topic was null or undefined when calling showPartitionMessage.');
            }
            if (partition === null || partition === undefined) {
            throw new RequiredError('partition','Required parameter partition was null or undefined when calling showPartitionMessage.');
            }
            if (messageOffset === null || messageOffset === undefined) {
                throw new RequiredError('messageOffset','Required parameter messageOffset was null or undefined when calling showPartitionMessage.');
            }
            if (messageOffset !== null && messageOffset !== undefined) {
                localVarQueryParameter['message_offset'] = messageOffset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'topic': topic,'partition': partition, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户最大可以创建的实例个数和已创建的实例个数，以及每个实例最大可以创建标签的个数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas(showQuotasRequest?: ShowQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let includeTagsQuota;

            if (showQuotasRequest !== null && showQuotasRequest !== undefined) {
                if (showQuotasRequest instanceof ShowQuotasRequest) {
                    includeTagsQuota = showQuotasRequest.includeTagsQuota;
                } else {
                    includeTagsQuota = showQuotasRequest['includeTagsQuota'];
                }
            }

        
            if (includeTagsQuota !== null && includeTagsQuota !== undefined) {
                localVarQueryParameter['includeTagsQuota'] = includeTagsQuota;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询回收站实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecycleInstances() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/recycle",
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
         * 查询旧规格实例可升级的新规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSpecConvertProduct(showSpecConvertProductRequest?: ShowSpecConvertProductRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/spec-convert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showSpecConvertProductRequest !== null && showSpecConvertProductRequest !== undefined) {
                if (showSpecConvertProductRequest instanceof ShowSpecConvertProductRequest) {
                    instanceId = showSpecConvertProductRequest.instanceId;
                } else {
                    instanceId = showSpecConvertProductRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSpecConvertProduct.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户权限。
         * 
         * Kafka实例开启SASL功能时，才支持多用户管理的功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTopicAccessPolicy(showTopicAccessPolicyRequest?: ShowTopicAccessPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}/topics/{topic_name}/accesspolicy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let topicName;

            if (showTopicAccessPolicyRequest !== null && showTopicAccessPolicyRequest !== undefined) {
                if (showTopicAccessPolicyRequest instanceof ShowTopicAccessPolicyRequest) {
                    instanceId = showTopicAccessPolicyRequest.instanceId;
                    topicName = showTopicAccessPolicyRequest.topicName;
                } else {
                    instanceId = showTopicAccessPolicyRequest['instance_id'];
                    topicName = showTopicAccessPolicyRequest['topic_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showTopicAccessPolicy.');
            }
            if (topicName === null || topicName === undefined) {
            throw new RequiredError('topicName','Required parameter topicName was null or undefined when calling showTopicAccessPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'topic_name': topicName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Kafka实例版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpgradeInstanceVersion(showUpgradeInstanceVersionRequest?: ShowUpgradeInstanceVersionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showUpgradeInstanceVersionRequest !== null && showUpgradeInstanceVersionRequest !== undefined) {
                if (showUpgradeInstanceVersionRequest instanceof ShowUpgradeInstanceVersionRequest) {
                    instanceId = showUpgradeInstanceVersionRequest.instanceId;
                } else {
                    instanceId = showUpgradeInstanceVersionRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showUpgradeInstanceVersion.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询磁盘自动扩容配置，包括磁盘自动扩容是否开启，以及开启后的扩容阈值、扩容步长、扩容上限信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVolumeExpandConfig(showVolumeExpandConfigRequest?: ShowVolumeExpandConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/auto-volume-expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showVolumeExpandConfigRequest !== null && showVolumeExpandConfigRequest !== undefined) {
                if (showVolumeExpandConfigRequest instanceof ShowVolumeExpandConfigRequest) {
                    instanceId = showVolumeExpandConfigRequest.instanceId;
                } else {
                    instanceId = showVolumeExpandConfigRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showVolumeExpandConfig.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭Kafka实例重平衡日志功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopKafkaRebalanceLogTask(stopKafkaRebalanceLogTaskRequest?: StopKafkaRebalanceLogTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/log/rebalance-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (stopKafkaRebalanceLogTaskRequest !== null && stopKafkaRebalanceLogTaskRequest !== undefined) {
                if (stopKafkaRebalanceLogTaskRequest instanceof StopKafkaRebalanceLogTaskRequest) {
                    instanceId = stopKafkaRebalanceLogTaskRequest.instanceId;
                } else {
                    instanceId = stopKafkaRebalanceLogTaskRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling stopKafkaRebalanceLogTask.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstance(updateInstanceRequest?: UpdateInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceRequest !== null && updateInstanceRequest !== undefined) {
                if (updateInstanceRequest instanceof UpdateInstanceRequest) {
                    instanceId = updateInstanceRequest.instanceId;
                    body = updateInstanceRequest.body
                } else {
                    instanceId = updateInstanceRequest['instance_id'];
                    body = updateInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstance.');
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
         * 开启或关闭实例自动创建Topic功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceAutoCreateTopic(updateInstanceAutoCreateTopicRequest?: UpdateInstanceAutoCreateTopicRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/autotopic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceAutoCreateTopicRequest !== null && updateInstanceAutoCreateTopicRequest !== undefined) {
                if (updateInstanceAutoCreateTopicRequest instanceof UpdateInstanceAutoCreateTopicRequest) {
                    instanceId = updateInstanceAutoCreateTopicRequest.instanceId;
                    body = updateInstanceAutoCreateTopicRequest.body
                } else {
                    instanceId = updateInstanceAutoCreateTopicRequest['instance_id'];
                    body = updateInstanceAutoCreateTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceAutoCreateTopic.');
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
         * 修改指定消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceConsumerGroup(updateInstanceConsumerGroupRequest?: UpdateInstanceConsumerGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups/{group}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;
            
            let group;

            if (updateInstanceConsumerGroupRequest !== null && updateInstanceConsumerGroupRequest !== undefined) {
                if (updateInstanceConsumerGroupRequest instanceof UpdateInstanceConsumerGroupRequest) {
                    engine = updateInstanceConsumerGroupRequest.engine;
                    instanceId = updateInstanceConsumerGroupRequest.instanceId;
                    group = updateInstanceConsumerGroupRequest.group;
                    body = updateInstanceConsumerGroupRequest.body
                } else {
                    engine = updateInstanceConsumerGroupRequest['engine'];
                    instanceId = updateInstanceConsumerGroupRequest['instance_id'];
                    group = updateInstanceConsumerGroupRequest['group'];
                    body = updateInstanceConsumerGroupRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling updateInstanceConsumerGroup.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConsumerGroup.');
            }
            if (group === null || group === undefined) {
            throw new RequiredError('group','Required parameter group was null or undefined when calling updateInstanceConsumerGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'group': group, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例跨VPC访问的内网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceCrossVpcIp(updateInstanceCrossVpcIpRequest?: UpdateInstanceCrossVpcIpRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/crossvpc/modify",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceCrossVpcIpRequest !== null && updateInstanceCrossVpcIpRequest !== undefined) {
                if (updateInstanceCrossVpcIpRequest instanceof UpdateInstanceCrossVpcIpRequest) {
                    instanceId = updateInstanceCrossVpcIpRequest.instanceId;
                    body = updateInstanceCrossVpcIpRequest.body
                } else {
                    instanceId = updateInstanceCrossVpcIpRequest['instance_id'];
                    body = updateInstanceCrossVpcIpRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceCrossVpcIp.');
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
         * 修改所有消费组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceGroup(updateInstanceGroupRequest?: UpdateInstanceGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (updateInstanceGroupRequest !== null && updateInstanceGroupRequest !== undefined) {
                if (updateInstanceGroupRequest instanceof UpdateInstanceGroupRequest) {
                    engine = updateInstanceGroupRequest.engine;
                    instanceId = updateInstanceGroupRequest.instanceId;
                    body = updateInstanceGroupRequest.body
                } else {
                    engine = updateInstanceGroupRequest['engine'];
                    instanceId = updateInstanceGroupRequest['instance_id'];
                    body = updateInstanceGroupRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling updateInstanceGroup.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改Kafka实例Topic
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceTopic(updateInstanceTopicRequest?: UpdateInstanceTopicRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceTopicRequest !== null && updateInstanceTopicRequest !== undefined) {
                if (updateInstanceTopicRequest instanceof UpdateInstanceTopicRequest) {
                    instanceId = updateInstanceTopicRequest.instanceId;
                    body = updateInstanceTopicRequest.body
                } else {
                    instanceId = updateInstanceTopicRequest['instance_id'];
                    body = updateInstanceTopicRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceTopic.');
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
         * 修改用户参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceUser(updateInstanceUserRequest?: UpdateInstanceUserRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{engine}/{project_id}/instances/{instance_id}/users/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;
            
            let userName;

            if (updateInstanceUserRequest !== null && updateInstanceUserRequest !== undefined) {
                if (updateInstanceUserRequest instanceof UpdateInstanceUserRequest) {
                    engine = updateInstanceUserRequest.engine;
                    instanceId = updateInstanceUserRequest.instanceId;
                    userName = updateInstanceUserRequest.userName;
                    body = updateInstanceUserRequest.body
                } else {
                    engine = updateInstanceUserRequest['engine'];
                    instanceId = updateInstanceUserRequest['instance_id'];
                    userName = updateInstanceUserRequest['user_name'];
                    body = updateInstanceUserRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling updateInstanceUser.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling updateInstanceUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改Kafka的内网或者公网接入方式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKafkaPortProtocol(updateKafkaPortProtocolRequest?: UpdateKafkaPortProtocolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{engine}/instances/{instance_id}/plain-ssl-switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let instanceId;

            if (updateKafkaPortProtocolRequest !== null && updateKafkaPortProtocolRequest !== undefined) {
                if (updateKafkaPortProtocolRequest instanceof UpdateKafkaPortProtocolRequest) {
                    engine = updateKafkaPortProtocolRequest.engine;
                    instanceId = updateKafkaPortProtocolRequest.instanceId;
                    body = updateKafkaPortProtocolRequest.body
                } else {
                    engine = updateKafkaPortProtocolRequest['engine'];
                    instanceId = updateKafkaPortProtocolRequest['instance_id'];
                    body = updateKafkaPortProtocolRequest['body'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling updateKafkaPortProtocol.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateKafkaPortProtocol.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于向Kafka实例提交修改用户、客户端级别的流控任务，若成功则返回流控任务的job_id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKafkaUserClientQuotaTask(updateKafkaUserClientQuotaTaskRequest?: UpdateKafkaUserClientQuotaTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/kafka/{project_id}/instances/{instance_id}/kafka-user-client-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateKafkaUserClientQuotaTaskRequest !== null && updateKafkaUserClientQuotaTaskRequest !== undefined) {
                if (updateKafkaUserClientQuotaTaskRequest instanceof UpdateKafkaUserClientQuotaTaskRequest) {
                    instanceId = updateKafkaUserClientQuotaTaskRequest.instanceId;
                    body = updateKafkaUserClientQuotaTaskRequest.body
                } else {
                    instanceId = updateKafkaUserClientQuotaTaskRequest['instance_id'];
                    body = updateKafkaUserClientQuotaTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateKafkaUserClientQuotaTask.');
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
         * 修改指定的定时任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScheduledTask(updateScheduledTaskRequest?: UpdateScheduledTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/scheduled-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let taskId;
            
            let executeAt;
            
            let status;

            if (updateScheduledTaskRequest !== null && updateScheduledTaskRequest !== undefined) {
                if (updateScheduledTaskRequest instanceof UpdateScheduledTaskRequest) {
                    instanceId = updateScheduledTaskRequest.instanceId;
                    taskId = updateScheduledTaskRequest.taskId;
                    executeAt = updateScheduledTaskRequest.executeAt;
                    status = updateScheduledTaskRequest.status;
                } else {
                    instanceId = updateScheduledTaskRequest['instance_id'];
                    taskId = updateScheduledTaskRequest['task_id'];
                    executeAt = updateScheduledTaskRequest['execute_at'];
                    status = updateScheduledTaskRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateScheduledTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateScheduledTask.');
            }
            if (executeAt !== null && executeAt !== undefined) {
                localVarQueryParameter['execute_at'] = executeAt;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置用户权限。
         * 
         * Kafka实例开启SASL功能时，才支持多用户管理的功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTopicAccessPolicy(updateTopicAccessPolicyRequest?: UpdateTopicAccessPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/{instance_id}/topics/accesspolicy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateTopicAccessPolicyRequest !== null && updateTopicAccessPolicyRequest !== undefined) {
                if (updateTopicAccessPolicyRequest instanceof UpdateTopicAccessPolicyRequest) {
                    instanceId = updateTopicAccessPolicyRequest.instanceId;
                    body = updateTopicAccessPolicyRequest.body
                } else {
                    instanceId = updateTopicAccessPolicyRequest['instance_id'];
                    body = updateTopicAccessPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateTopicAccessPolicy.');
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
         * 该接口用于修改磁盘自动扩容配置，包含磁盘自动扩容是否开启、扩容阈值、扩容步长，以及扩容上限的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVolumeExpansionConfig(updateVolumeExpansionConfigRequest?: UpdateVolumeExpansionConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/auto-volume-expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateVolumeExpansionConfigRequest !== null && updateVolumeExpansionConfigRequest !== undefined) {
                if (updateVolumeExpansionConfigRequest instanceof UpdateVolumeExpansionConfigRequest) {
                    instanceId = updateVolumeExpansionConfigRequest.instanceId;
                    body = updateVolumeExpansionConfigRequest.body
                } else {
                    instanceId = updateVolumeExpansionConfigRequest['instance_id'];
                    body = updateVolumeExpansionConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateVolumeExpansionConfig.');
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
         * 实例内核升级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeInstance(upgradeInstanceRequest?: UpgradeInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (upgradeInstanceRequest !== null && upgradeInstanceRequest !== undefined) {
                if (upgradeInstanceRequest instanceof UpgradeInstanceRequest) {
                    instanceId = upgradeInstanceRequest.instanceId;
                    body = upgradeInstanceRequest.body
                } else {
                    instanceId = upgradeInstanceRequest['instance_id'];
                    body = upgradeInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeInstance.');
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
         * 开启Smart Connect，提交创建Smart Connect节点任务。
         * 
         * [**当前通过调用API，只支持按需实例创建Smart Connect节点。**](tag:hws,hws_hk,g42,hk_g42,ctc,cmcc)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnector(createConnectorRequest?: CreateConnectorRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/connector",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createConnectorRequest !== null && createConnectorRequest !== undefined) {
                if (createConnectorRequest instanceof CreateConnectorRequest) {
                    instanceId = createConnectorRequest.instanceId;
                    body = createConnectorRequest.body
                } else {
                    instanceId = createConnectorRequest['instance_id'];
                    body = createConnectorRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createConnector.');
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
         * 创建Smart Connect任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnectorTask(createConnectorTaskRequest?: CreateConnectorTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/connector/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createConnectorTaskRequest !== null && createConnectorTaskRequest !== undefined) {
                if (createConnectorTaskRequest instanceof CreateConnectorTaskRequest) {
                    instanceId = createConnectorTaskRequest.instanceId;
                    body = createConnectorTaskRequest.body
                } else {
                    instanceId = createConnectorTaskRequest['instance_id'];
                    body = createConnectorTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createConnectorTask.');
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
         * 介绍按需实例如何关闭Smart Connect。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConnector(deleteConnectorRequest?: DeleteConnectorRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/delete-connector",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteConnectorRequest !== null && deleteConnectorRequest !== undefined) {
                if (deleteConnectorRequest instanceof DeleteConnectorRequest) {
                    instanceId = deleteConnectorRequest.instanceId;
                } else {
                    instanceId = deleteConnectorRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteConnector.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除Smart Connect任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConnectorTask(deleteConnectorTaskRequest?: DeleteConnectorTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/connector/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (deleteConnectorTaskRequest !== null && deleteConnectorTaskRequest !== undefined) {
                if (deleteConnectorTaskRequest instanceof DeleteConnectorTaskRequest) {
                    instanceId = deleteConnectorTaskRequest.instanceId;
                    taskId = deleteConnectorTaskRequest.taskId;
                } else {
                    instanceId = deleteConnectorTaskRequest['instance_id'];
                    taskId = deleteConnectorTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteConnectorTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteConnectorTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Smart Connect任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConnectorTasks(listConnectorTasksRequest?: ListConnectorTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/connector/tasks",
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

            if (listConnectorTasksRequest !== null && listConnectorTasksRequest !== undefined) {
                if (listConnectorTasksRequest instanceof ListConnectorTasksRequest) {
                    instanceId = listConnectorTasksRequest.instanceId;
                    offset = listConnectorTasksRequest.offset;
                    limit = listConnectorTasksRequest.limit;
                } else {
                    instanceId = listConnectorTasksRequest['instance_id'];
                    offset = listConnectorTasksRequest['offset'];
                    limit = listConnectorTasksRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listConnectorTasks.');
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
         * 查询OBS桶列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listObsBuckets() {
            const options = {
                method: "GET",
                url: "/v1.0/dms/obs/buckets",
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
         * 修改Smart Connect任务配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyConnectorTask(modifyConnectorTaskRequest?: ModifyConnectorTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/connector/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let taskId;

            if (modifyConnectorTaskRequest !== null && modifyConnectorTaskRequest !== undefined) {
                if (modifyConnectorTaskRequest instanceof ModifyConnectorTaskRequest) {
                    instanceId = modifyConnectorTaskRequest.instanceId;
                    taskId = modifyConnectorTaskRequest.taskId;
                    body = modifyConnectorTaskRequest.body
                } else {
                    instanceId = modifyConnectorTaskRequest['instance_id'];
                    taskId = modifyConnectorTaskRequest['task_id'];
                    body = modifyConnectorTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyConnectorTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling modifyConnectorTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 暂停Smart Connect任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pauseConnectorTask(pauseConnectorTaskRequest?: PauseConnectorTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/connector/tasks/{task_id}/pause",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (pauseConnectorTaskRequest !== null && pauseConnectorTaskRequest !== undefined) {
                if (pauseConnectorTaskRequest instanceof PauseConnectorTaskRequest) {
                    instanceId = pauseConnectorTaskRequest.instanceId;
                    taskId = pauseConnectorTaskRequest.taskId;
                } else {
                    instanceId = pauseConnectorTaskRequest['instance_id'];
                    taskId = pauseConnectorTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling pauseConnectorTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling pauseConnectorTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于**启动未启动的Smart Connect任务**以及**重启已暂停或者运行中的Smart Connect任务**。注意，重启Smart Connect任务将重置同步进度，并重新开始同步任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartConnectorTask(restartConnectorTaskRequest?: RestartConnectorTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/kafka/instances/{instance_id}/connector/tasks/{task_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (restartConnectorTaskRequest !== null && restartConnectorTaskRequest !== undefined) {
                if (restartConnectorTaskRequest instanceof RestartConnectorTaskRequest) {
                    instanceId = restartConnectorTaskRequest.instanceId;
                    taskId = restartConnectorTaskRequest.taskId;
                } else {
                    instanceId = restartConnectorTaskRequest['instance_id'];
                    taskId = restartConnectorTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartConnectorTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling restartConnectorTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动未启动的Smart Connect任务/重启Smart Connect任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartSmartConnectorTask(restartSmartConnectorTaskRequest?: RestartSmartConnectorTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/connector/tasks/{task_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (restartSmartConnectorTaskRequest !== null && restartSmartConnectorTaskRequest !== undefined) {
                if (restartSmartConnectorTaskRequest instanceof RestartSmartConnectorTaskRequest) {
                    instanceId = restartSmartConnectorTaskRequest.instanceId;
                    taskId = restartSmartConnectorTaskRequest.taskId;
                } else {
                    instanceId = restartSmartConnectorTaskRequest['instance_id'];
                    taskId = restartSmartConnectorTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartSmartConnectorTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling restartSmartConnectorTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动已暂停的Smart Connect任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resumeConnectorTask(resumeConnectorTaskRequest?: ResumeConnectorTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/connector/tasks/{task_id}/resume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (resumeConnectorTaskRequest !== null && resumeConnectorTaskRequest !== undefined) {
                if (resumeConnectorTaskRequest instanceof ResumeConnectorTaskRequest) {
                    instanceId = resumeConnectorTaskRequest.instanceId;
                    taskId = resumeConnectorTaskRequest.taskId;
                } else {
                    instanceId = resumeConnectorTaskRequest['instance_id'];
                    taskId = resumeConnectorTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resumeConnectorTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling resumeConnectorTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询开启Smart Connect功能所需要使用的资源的情况
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConnectorResourceInfo(showConnectorResourceInfoRequest?: ShowConnectorResourceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/connector",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showConnectorResourceInfoRequest !== null && showConnectorResourceInfoRequest !== undefined) {
                if (showConnectorResourceInfoRequest instanceof ShowConnectorResourceInfoRequest) {
                    instanceId = showConnectorResourceInfoRequest.instanceId;
                } else {
                    instanceId = showConnectorResourceInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showConnectorResourceInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Smart Connect任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConnectorTask(showConnectorTaskRequest?: ShowConnectorTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/connector/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (showConnectorTaskRequest !== null && showConnectorTaskRequest !== undefined) {
                if (showConnectorTaskRequest instanceof ShowConnectorTaskRequest) {
                    instanceId = showConnectorTaskRequest.instanceId;
                    taskId = showConnectorTaskRequest.taskId;
                } else {
                    instanceId = showConnectorTaskRequest['instance_id'];
                    taskId = showConnectorTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showConnectorTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showConnectorTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验Connector连通性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateConnectorConnectivity(validateConnectorConnectivityRequest?: ValidateConnectorConnectivityRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/connector/validate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (validateConnectorConnectivityRequest !== null && validateConnectorConnectivityRequest !== undefined) {
                if (validateConnectorConnectivityRequest instanceof ValidateConnectorConnectivityRequest) {
                    instanceId = validateConnectorConnectivityRequest.instanceId;
                    body = validateConnectorConnectivityRequest.body
                } else {
                    instanceId = validateConnectorConnectivityRequest['instance_id'];
                    body = validateConnectorConnectivityRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling validateConnectorConnectivity.');
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
    
    }
};

function newClient(client: HcClient): KafkaClient {
    return new KafkaClient(client);
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