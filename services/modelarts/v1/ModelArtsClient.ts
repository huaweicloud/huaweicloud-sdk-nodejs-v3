import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AIServiceInstance } from './model/AIServiceInstance';
import { AcceptScheduledEventRequest } from './model/AcceptScheduledEventRequest';
import { AcceptScheduledEventResponse } from './model/AcceptScheduledEventResponse';
import { AdvancedConfig } from './model/AdvancedConfig';
import { Affinity } from './model/Affinity';
import { AffinityResponse } from './model/AffinityResponse';
import { AffinityRule } from './model/AffinityRule';
import { AffinityType } from './model/AffinityType';
import { AlgoConfigs } from './model/AlgoConfigs';
import { Algorithm } from './model/Algorithm';
import { AlgorithmAdvancedConfig } from './model/AlgorithmAdvancedConfig';
import { AlgorithmCreateEngine } from './model/AlgorithmCreateEngine';
import { AlgorithmCreateInput } from './model/AlgorithmCreateInput';
import { AlgorithmCreateOutput } from './model/AlgorithmCreateOutput';
import { AlgorithmEngine } from './model/AlgorithmEngine';
import { AlgorithmInfo } from './model/AlgorithmInfo';
import { AlgorithmInput } from './model/AlgorithmInput';
import { AlgorithmJobConfig } from './model/AlgorithmJobConfig';
import { AlgorithmMetadata } from './model/AlgorithmMetadata';
import { AlgorithmOutput } from './model/AlgorithmOutput';
import { AlgorithmRemote } from './model/AlgorithmRemote';
import { AlgorithmResponse } from './model/AlgorithmResponse';
import { AlgorithmResponseAdvancedConfig } from './model/AlgorithmResponseAdvancedConfig';
import { AlgorithmResponseAdvancedConfigAutoSearch } from './model/AlgorithmResponseAdvancedConfigAutoSearch';
import { AlgorithmResponseAdvancedConfigAutoSearchSearchParams } from './model/AlgorithmResponseAdvancedConfigAutoSearchSearchParams';
import { AlgorithmResponseJobConfig } from './model/AlgorithmResponseJobConfig';
import { AlgorithmResponseJobConfigEngine } from './model/AlgorithmResponseJobConfigEngine';
import { AlgorithmResponseJobConfigInputs } from './model/AlgorithmResponseJobConfigInputs';
import { AlgorithmResponseJobConfigOutputs } from './model/AlgorithmResponseJobConfigOutputs';
import { AlgorithmResponseJobConfigRemoteConstraints } from './model/AlgorithmResponseJobConfigRemoteConstraints';
import { AlgorithmResponseMetadata } from './model/AlgorithmResponseMetadata';
import { AlgorithmResponseResourceRequirements } from './model/AlgorithmResponseResourceRequirements';
import { Allocated } from './model/Allocated';
import { AllowedAddressPairs } from './model/AllowedAddressPairs';
import { ApiKeyFailureResponse } from './model/ApiKeyFailureResponse';
import { ApiKeyResponseV2 } from './model/ApiKeyResponseV2';
import { AscendInfo } from './model/AscendInfo';
import { AscendResource } from './model/AscendResource';
import { AssetModel } from './model/AssetModel';
import { AssetModelResp } from './model/AssetModelResp';
import { AttachDevServerVolumeRequest } from './model/AttachDevServerVolumeRequest';
import { AttachDevServerVolumeResponse } from './model/AttachDevServerVolumeResponse';
import { AttachDynamicStorageRequest } from './model/AttachDynamicStorageRequest';
import { AttachDynamicStorageResponse } from './model/AttachDynamicStorageResponse';
import { AttachServerVolumeRequest } from './model/AttachServerVolumeRequest';
import { AuthRequests } from './model/AuthRequests';
import { AuthorizationRequest } from './model/AuthorizationRequest';
import { AuthorizationResponse } from './model/AuthorizationResponse';
import { AutoSearch } from './model/AutoSearch';
import { AutoSearchAlgoConfigParameter } from './model/AutoSearchAlgoConfigParameter';
import { AutoStop } from './model/AutoStop';
import { BatchActionDevServerIds } from './model/BatchActionDevServerIds';
import { BatchBindApiKeyRequest } from './model/BatchBindApiKeyRequest';
import { BatchBindApiKeyRequestKeyIds } from './model/BatchBindApiKeyRequestKeyIds';
import { BatchBindInferApiKeysRequest } from './model/BatchBindInferApiKeysRequest';
import { BatchBindInferApiKeysResponse } from './model/BatchBindInferApiKeysResponse';
import { BatchBindPoolNodesReq } from './model/BatchBindPoolNodesReq';
import { BatchBindPoolNodesRequest } from './model/BatchBindPoolNodesRequest';
import { BatchBindPoolNodesResponse } from './model/BatchBindPoolNodesResponse';
import { BatchCreatePoolTagsRequest } from './model/BatchCreatePoolTagsRequest';
import { BatchCreatePoolTagsResponse } from './model/BatchCreatePoolTagsResponse';
import { BatchDeleteInferIntranetConnectionsRequest } from './model/BatchDeleteInferIntranetConnectionsRequest';
import { BatchDeleteInferIntranetConnectionsResponse } from './model/BatchDeleteInferIntranetConnectionsResponse';
import { BatchDeleteInferServicesRequest } from './model/BatchDeleteInferServicesRequest';
import { BatchDeleteInferServicesResponse } from './model/BatchDeleteInferServicesResponse';
import { BatchDeletePoolNodesRequest } from './model/BatchDeletePoolNodesRequest';
import { BatchDeletePoolNodesResponse } from './model/BatchDeletePoolNodesResponse';
import { BatchDeletePoolTagsRequest } from './model/BatchDeletePoolTagsRequest';
import { BatchDeletePoolTagsResponse } from './model/BatchDeletePoolTagsResponse';
import { BatchDevServersActionRequest } from './model/BatchDevServersActionRequest';
import { BatchDevServersActionResponse } from './model/BatchDevServersActionResponse';
import { BatchLockPoolNodesRequest } from './model/BatchLockPoolNodesRequest';
import { BatchLockPoolNodesRequestBody } from './model/BatchLockPoolNodesRequestBody';
import { BatchLockPoolNodesResponse } from './model/BatchLockPoolNodesResponse';
import { BatchMigratePoolNodesRequest } from './model/BatchMigratePoolNodesRequest';
import { BatchMigratePoolNodesResponse } from './model/BatchMigratePoolNodesResponse';
import { BatchRebootPoolNodesRequest } from './model/BatchRebootPoolNodesRequest';
import { BatchRebootPoolNodesRequestBody } from './model/BatchRebootPoolNodesRequestBody';
import { BatchRebootPoolNodesResponse } from './model/BatchRebootPoolNodesResponse';
import { BatchResetPoolNodesRequest } from './model/BatchResetPoolNodesRequest';
import { BatchResetPoolNodesResponse } from './model/BatchResetPoolNodesResponse';
import { BatchResizePoolNodesRequest } from './model/BatchResizePoolNodesRequest';
import { BatchResizePoolNodesResponse } from './model/BatchResizePoolNodesResponse';
import { BatchResizeRequestBody } from './model/BatchResizeRequestBody';
import { BatchUnBindApiKeyRequest } from './model/BatchUnBindApiKeyRequest';
import { BatchUnBindApiKeyRequestKeyIds } from './model/BatchUnBindApiKeyRequestKeyIds';
import { BatchUnbindInferApiKeysRequest } from './model/BatchUnbindInferApiKeysRequest';
import { BatchUnbindInferApiKeysResponse } from './model/BatchUnbindInferApiKeysResponse';
import { BatchUnlockPoolNodesRequest } from './model/BatchUnlockPoolNodesRequest';
import { BatchUnlockPoolNodesResponse } from './model/BatchUnlockPoolNodesResponse';
import { BatchUpdatePoolNodesRequest } from './model/BatchUpdatePoolNodesRequest';
import { BatchUpdatePoolNodesRequestBody } from './model/BatchUpdatePoolNodesRequestBody';
import { BatchUpdatePoolNodesResponse } from './model/BatchUpdatePoolNodesResponse';
import { BillingInfo } from './model/BillingInfo';
import { BillingResource } from './model/BillingResource';
import { BindDevServerPublicIPRequest } from './model/BindDevServerPublicIPRequest';
import { BindDevServerPublicIPResponse } from './model/BindDevServerPublicIPResponse';
import { BindInferApiKeyRequest } from './model/BindInferApiKeyRequest';
import { BindInferApiKeyResponse } from './model/BindInferApiKeyResponse';
import { BindNodeItem } from './model/BindNodeItem';
import { CancelInferDeploymentRequest } from './model/CancelInferDeploymentRequest';
import { CancelInferDeploymentResponse } from './model/CancelInferDeploymentResponse';
import { Capacity } from './model/Capacity';
import { Cause } from './model/Cause';
import { ChangeAlgorithmRequest } from './model/ChangeAlgorithmRequest';
import { ChangeAlgorithmResponse } from './model/ChangeAlgorithmResponse';
import { ChangeDevServerOSRequest } from './model/ChangeDevServerOSRequest';
import { ChangeDevServerOSResponse } from './model/ChangeDevServerOSResponse';
import { ChangeHyperinstanceOSRequest } from './model/ChangeHyperinstanceOSRequest';
import { ChangeHyperinstanceOSResponse } from './model/ChangeHyperinstanceOSResponse';
import { ChangeTrainingExperimentRequest } from './model/ChangeTrainingExperimentRequest';
import { ChangeTrainingExperimentRequestBody } from './model/ChangeTrainingExperimentRequestBody';
import { ChangeTrainingExperimentResponse } from './model/ChangeTrainingExperimentResponse';
import { ChangeTrainingJobDescriptionRequest } from './model/ChangeTrainingJobDescriptionRequest';
import { ChangeTrainingJobDescriptionResponse } from './model/ChangeTrainingJobDescriptionResponse';
import { ChargingInfo } from './model/ChargingInfo';
import { CheckTrainingExperimentRequest } from './model/CheckTrainingExperimentRequest';
import { CheckTrainingExperimentResponse } from './model/CheckTrainingExperimentResponse';
import { CheckpointConf } from './model/CheckpointConf';
import { CloudServer } from './model/CloudServer';
import { ClusterResponse } from './model/ClusterResponse';
import { Code } from './model/Code';
import { CodeResponse } from './model/CodeResponse';
import { CodeTreeNode } from './model/CodeTreeNode';
import { CombineInferTmsTags } from './model/CombineInferTmsTags';
import { CombineTmsTags } from './model/CombineTmsTags';
import { CompareColumns } from './model/CompareColumns';
import { Conditions } from './model/Conditions';
import { Config } from './model/Config';
import { Constraint } from './model/Constraint';
import { ConstraintResp } from './model/ConstraintResp';
import { ContainerHooks } from './model/ContainerHooks';
import { ContentInfo } from './model/ContentInfo';
import { CountInferServicesByTagsRequest } from './model/CountInferServicesByTagsRequest';
import { CountInferServicesByTagsResponse } from './model/CountInferServicesByTagsResponse';
import { Cpu } from './model/Cpu';
import { CreateAlgorithmRequest } from './model/CreateAlgorithmRequest';
import { CreateAlgorithmResponse } from './model/CreateAlgorithmResponse';
import { CreateAlgorithmVersionToGalleryBody } from './model/CreateAlgorithmVersionToGalleryBody';
import { CreateAlgorithmVersionToGalleryRequest } from './model/CreateAlgorithmVersionToGalleryRequest';
import { CreateAlgorithmVersionToGalleryResponse } from './model/CreateAlgorithmVersionToGalleryResponse';
import { CreateApiKeyReq } from './model/CreateApiKeyReq';
import { CreateAuthorizationRequest } from './model/CreateAuthorizationRequest';
import { CreateAuthorizationResponse } from './model/CreateAuthorizationResponse';
import { CreateDevServerJobRequest } from './model/CreateDevServerJobRequest';
import { CreateDevServerJobResponse } from './model/CreateDevServerJobResponse';
import { CreateDevServerRequest } from './model/CreateDevServerRequest';
import { CreateDevServerResponse } from './model/CreateDevServerResponse';
import { CreateHpaRequestBody } from './model/CreateHpaRequestBody';
import { CreateHraRequestBody } from './model/CreateHraRequestBody';
import { CreateHyperClusterRequest } from './model/CreateHyperClusterRequest';
import { CreateHyperClusterResponse } from './model/CreateHyperClusterResponse';
import { CreateHyperinstanceTagsRequest } from './model/CreateHyperinstanceTagsRequest';
import { CreateHyperinstanceTagsResponse } from './model/CreateHyperinstanceTagsResponse';
import { CreateImageRequest } from './model/CreateImageRequest';
import { CreateImageResponse } from './model/CreateImageResponse';
import { CreateInferApiKeyRequest } from './model/CreateInferApiKeyRequest';
import { CreateInferApiKeyResponse } from './model/CreateInferApiKeyResponse';
import { CreateInferDeploymentHpaRequest } from './model/CreateInferDeploymentHpaRequest';
import { CreateInferDeploymentHpaResponse } from './model/CreateInferDeploymentHpaResponse';
import { CreateInferDeploymentRequest } from './model/CreateInferDeploymentRequest';
import { CreateInferDeploymentResponse } from './model/CreateInferDeploymentResponse';
import { CreateInferHraRequest } from './model/CreateInferHraRequest';
import { CreateInferHraResponse } from './model/CreateInferHraResponse';
import { CreateInferIntranetConnectionRequest } from './model/CreateInferIntranetConnectionRequest';
import { CreateInferIntranetConnectionResponse } from './model/CreateInferIntranetConnectionResponse';
import { CreateInferServiceRequest } from './model/CreateInferServiceRequest';
import { CreateInferServiceResponse } from './model/CreateInferServiceResponse';
import { CreateInferServiceTagRequest } from './model/CreateInferServiceTagRequest';
import { CreateInferServiceTagResponse } from './model/CreateInferServiceTagResponse';
import { CreateModelArtsAgencyRequest } from './model/CreateModelArtsAgencyRequest';
import { CreateModelArtsAgencyResponse } from './model/CreateModelArtsAgencyResponse';
import { CreateNetworkRequest } from './model/CreateNetworkRequest';
import { CreateNetworkResponse } from './model/CreateNetworkResponse';
import { CreateNodePoolAnnotations } from './model/CreateNodePoolAnnotations';
import { CreateNodePoolMetaVO } from './model/CreateNodePoolMetaVO';
import { CreateNodePoolRequest } from './model/CreateNodePoolRequest';
import { CreateNodePoolRequestBody } from './model/CreateNodePoolRequestBody';
import { CreateNodePoolResponse } from './model/CreateNodePoolResponse';
import { CreateNotebookRequest } from './model/CreateNotebookRequest';
import { CreateNotebookResponse } from './model/CreateNotebookResponse';
import { CreateNotebookTagsRequest } from './model/CreateNotebookTagsRequest';
import { CreateNotebookTagsResponse } from './model/CreateNotebookTagsResponse';
import { CreateOrderIdRequest } from './model/CreateOrderIdRequest';
import { CreateOrderIdResponse } from './model/CreateOrderIdResponse';
import { CreateOrderRequestBody } from './model/CreateOrderRequestBody';
import { CreatePluginRequestBody } from './model/CreatePluginRequestBody';
import { CreatePoolPluginRequest } from './model/CreatePoolPluginRequest';
import { CreatePoolPluginResponse } from './model/CreatePoolPluginResponse';
import { CreatePoolRequest } from './model/CreatePoolRequest';
import { CreatePoolRequestBody } from './model/CreatePoolRequestBody';
import { CreatePoolResponse } from './model/CreatePoolResponse';
import { CreateRoceNetworkRequest } from './model/CreateRoceNetworkRequest';
import { CreateRoceNetworkResponse } from './model/CreateRoceNetworkResponse';
import { CreateSaveImageJobRequest } from './model/CreateSaveImageJobRequest';
import { CreateSaveImageJobResponse } from './model/CreateSaveImageJobResponse';
import { CreateTagRequest } from './model/CreateTagRequest';
import { CreateTmsTagsRequest } from './model/CreateTmsTagsRequest';
import { CreateTrainJobTagsRequest } from './model/CreateTrainJobTagsRequest';
import { CreateTrainJobTagsResponse } from './model/CreateTrainJobTagsResponse';
import { CreateTrainingExperimentRequest } from './model/CreateTrainingExperimentRequest';
import { CreateTrainingExperimentRequestBody } from './model/CreateTrainingExperimentRequestBody';
import { CreateTrainingExperimentResponse } from './model/CreateTrainingExperimentResponse';
import { CreateTrainingJobRequest } from './model/CreateTrainingJobRequest';
import { CreateTrainingJobResponse } from './model/CreateTrainingJobResponse';
import { CreateWorkflowExecutionRequest } from './model/CreateWorkflowExecutionRequest';
import { CreateWorkflowExecutionResponse } from './model/CreateWorkflowExecutionResponse';
import { CreateWorkflowExecutionsActionsRequest } from './model/CreateWorkflowExecutionsActionsRequest';
import { CreateWorkflowExecutionsActionsResponse } from './model/CreateWorkflowExecutionsActionsResponse';
import { CreateWorkflowPurchasePoolRequest } from './model/CreateWorkflowPurchasePoolRequest';
import { CreateWorkflowPurchasePoolResponse } from './model/CreateWorkflowPurchasePoolResponse';
import { CreateWorkflowRequest } from './model/CreateWorkflowRequest';
import { CreateWorkflowResponse } from './model/CreateWorkflowResponse';
import { CreateWorkflowScheduleRequest } from './model/CreateWorkflowScheduleRequest';
import { CreateWorkflowScheduleResponse } from './model/CreateWorkflowScheduleResponse';
import { CreateWorkflowServiceAuthRequest } from './model/CreateWorkflowServiceAuthRequest';
import { CreateWorkflowServiceAuthResponse } from './model/CreateWorkflowServiceAuthResponse';
import { CreateWorkflowStepExecutionsActionsRequest } from './model/CreateWorkflowStepExecutionsActionsRequest';
import { CreateWorkflowStepExecutionsActionsResponse } from './model/CreateWorkflowStepExecutionsActionsResponse';
import { CreateWorkflowSubscriptionsRequest } from './model/CreateWorkflowSubscriptionsRequest';
import { CreateWorkflowSubscriptionsResponse } from './model/CreateWorkflowSubscriptionsResponse';
import { CreateWorkspaceReq } from './model/CreateWorkspaceReq';
import { CreateWorkspaceReqGrants } from './model/CreateWorkspaceReqGrants';
import { CreateWorkspaceRequest } from './model/CreateWorkspaceRequest';
import { CreateWorkspaceResponse } from './model/CreateWorkspaceResponse';
import { CreateWorkspaceResponseBodyGrants } from './model/CreateWorkspaceResponseBodyGrants';
import { CreatingStep } from './model/CreatingStep';
import { CustomHooks } from './model/CustomHooks';
import { CustomMetrics } from './model/CustomMetrics';
import { CustomResourceSpec } from './model/CustomResourceSpec';
import { Data } from './model/Data';
import { DataRequirement } from './model/DataRequirement';
import { DataRequirementResp } from './model/DataRequirementResp';
import { DataSource } from './model/DataSource';
import { DataSourceResp } from './model/DataSourceResp';
import { DataVolumeItem } from './model/DataVolumeItem';
import { DataVolumesReq } from './model/DataVolumesReq';
import { DataVolumesRes } from './model/DataVolumesRes';
import { DeleteAlgorithmRequest } from './model/DeleteAlgorithmRequest';
import { DeleteAlgorithmResponse } from './model/DeleteAlgorithmResponse';
import { DeleteAuthorizationsRequest } from './model/DeleteAuthorizationsRequest';
import { DeleteAuthorizationsResponse } from './model/DeleteAuthorizationsResponse';
import { DeleteDevServerJobsRequest } from './model/DeleteDevServerJobsRequest';
import { DeleteDevServerJobsResponse } from './model/DeleteDevServerJobsResponse';
import { DeleteDevServerRequest } from './model/DeleteDevServerRequest';
import { DeleteDevServerResponse } from './model/DeleteDevServerResponse';
import { DeleteHyperClusterRequest } from './model/DeleteHyperClusterRequest';
import { DeleteHyperClusterResponse } from './model/DeleteHyperClusterResponse';
import { DeleteHyperinstanceRequest } from './model/DeleteHyperinstanceRequest';
import { DeleteHyperinstanceResponse } from './model/DeleteHyperinstanceResponse';
import { DeleteHyperinstanceTagsRequest } from './model/DeleteHyperinstanceTagsRequest';
import { DeleteHyperinstanceTagsResponse } from './model/DeleteHyperinstanceTagsResponse';
import { DeleteImageGroupRequest } from './model/DeleteImageGroupRequest';
import { DeleteImageGroupRequestBody } from './model/DeleteImageGroupRequestBody';
import { DeleteImageGroupResponse } from './model/DeleteImageGroupResponse';
import { DeleteImageRequest } from './model/DeleteImageRequest';
import { DeleteImageRequestBody } from './model/DeleteImageRequestBody';
import { DeleteImageResponse } from './model/DeleteImageResponse';
import { DeleteInferApiKeyRequest } from './model/DeleteInferApiKeyRequest';
import { DeleteInferApiKeyResponse } from './model/DeleteInferApiKeyResponse';
import { DeleteInferDeploymentHpaRequest } from './model/DeleteInferDeploymentHpaRequest';
import { DeleteInferDeploymentHpaResponse } from './model/DeleteInferDeploymentHpaResponse';
import { DeleteInferDeploymentInstanceRequest } from './model/DeleteInferDeploymentInstanceRequest';
import { DeleteInferDeploymentInstanceResponse } from './model/DeleteInferDeploymentInstanceResponse';
import { DeleteInferDeploymentPodRequest } from './model/DeleteInferDeploymentPodRequest';
import { DeleteInferDeploymentPodResponse } from './model/DeleteInferDeploymentPodResponse';
import { DeleteInferDeploymentRequest } from './model/DeleteInferDeploymentRequest';
import { DeleteInferDeploymentResponse } from './model/DeleteInferDeploymentResponse';
import { DeleteInferDeploymentVersionRequest } from './model/DeleteInferDeploymentVersionRequest';
import { DeleteInferDeploymentVersionResponse } from './model/DeleteInferDeploymentVersionResponse';
import { DeleteInferServiceTagRequest } from './model/DeleteInferServiceTagRequest';
import { DeleteInferServiceTagResponse } from './model/DeleteInferServiceTagResponse';
import { DeleteInferTmsTagsRequest } from './model/DeleteInferTmsTagsRequest';
import { DeleteNetworkRequest } from './model/DeleteNetworkRequest';
import { DeleteNetworkResponse } from './model/DeleteNetworkResponse';
import { DeleteNodePoolRequest } from './model/DeleteNodePoolRequest';
import { DeleteNodePoolResponse } from './model/DeleteNodePoolResponse';
import { DeleteNotebookRequest } from './model/DeleteNotebookRequest';
import { DeleteNotebookResponse } from './model/DeleteNotebookResponse';
import { DeleteNotebookTagsRequest } from './model/DeleteNotebookTagsRequest';
import { DeleteNotebookTagsResponse } from './model/DeleteNotebookTagsResponse';
import { DeletePoolRequest } from './model/DeletePoolRequest';
import { DeletePoolResponse } from './model/DeletePoolResponse';
import { DeleteServicesRequest } from './model/DeleteServicesRequest';
import { DeleteTagItem } from './model/DeleteTagItem';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTmsTagsRequest } from './model/DeleteTmsTagsRequest';
import { DeleteTrainJobTagsRequest } from './model/DeleteTrainJobTagsRequest';
import { DeleteTrainJobTagsResponse } from './model/DeleteTrainJobTagsResponse';
import { DeleteTrainingExperimentRequest } from './model/DeleteTrainingExperimentRequest';
import { DeleteTrainingExperimentResponse } from './model/DeleteTrainingExperimentResponse';
import { DeleteTrainingJobRequest } from './model/DeleteTrainingJobRequest';
import { DeleteTrainingJobResponse } from './model/DeleteTrainingJobResponse';
import { DeleteWorkflowExecutionRequest } from './model/DeleteWorkflowExecutionRequest';
import { DeleteWorkflowExecutionResponse } from './model/DeleteWorkflowExecutionResponse';
import { DeleteWorkflowRequest } from './model/DeleteWorkflowRequest';
import { DeleteWorkflowResponse } from './model/DeleteWorkflowResponse';
import { DeleteWorkflowScheduleIdRequest } from './model/DeleteWorkflowScheduleIdRequest';
import { DeleteWorkflowScheduleIdResponse } from './model/DeleteWorkflowScheduleIdResponse';
import { DeleteWorkflowSubscriptionRequest } from './model/DeleteWorkflowSubscriptionRequest';
import { DeleteWorkflowSubscriptionResponse } from './model/DeleteWorkflowSubscriptionResponse';
import { DeleteWorkspaceRequest } from './model/DeleteWorkspaceRequest';
import { DeleteWorkspaceResponse } from './model/DeleteWorkspaceResponse';
import { DeploymentTaskLimit } from './model/DeploymentTaskLimit';
import { DetachDevServerVolumeRequest } from './model/DetachDevServerVolumeRequest';
import { DetachDevServerVolumeResponse } from './model/DetachDevServerVolumeResponse';
import { DetachDynamicStorageRequest } from './model/DetachDynamicStorageRequest';
import { DetachDynamicStorageResponse } from './model/DetachDynamicStorageResponse';
import { DevServerBatchRequest } from './model/DevServerBatchRequest';
import { DevServerJobCreateRequest } from './model/DevServerJobCreateRequest';
import { DevServerJobItem } from './model/DevServerJobItem';
import { DevServerJobListResponse } from './model/DevServerJobListResponse';
import { DevServerTaskResponse } from './model/DevServerTaskResponse';
import { DevServerTemplateListResponse } from './model/DevServerTemplateListResponse';
import { Disk } from './model/Disk';
import { DiskResponse } from './model/DiskResponse';
import { DockerLvmConfig } from './model/DockerLvmConfig';
import { Domain } from './model/Domain';
import { Dump } from './model/Dump';
import { DumpResponse } from './model/DumpResponse';
import { Endpoints } from './model/Endpoints';
import { EndpointsReq } from './model/EndpointsReq';
import { EndpointsRes } from './model/EndpointsRes';
import { Engine } from './model/Engine';
import { EnvVar } from './model/EnvVar';
import { Event } from './model/Event';
import { EventCategoriesResp } from './model/EventCategoriesResp';
import { EventListMeta } from './model/EventListMeta';
import { EventModel } from './model/EventModel';
import { EventUpdate } from './model/EventUpdate';
import { EvsVolume } from './model/EvsVolume';
import { Exec } from './model/Exec';
import { ExecutionAction } from './model/ExecutionAction';
import { ExecutionActionPolicy } from './model/ExecutionActionPolicy';
import { ExecutionBrief } from './model/ExecutionBrief';
import { FileInfo } from './model/FileInfo';
import { FileResponse } from './model/FileResponse';
import { Filter } from './model/Filter';
import { Flavor } from './model/Flavor';
import { FlavorDetail } from './model/FlavorDetail';
import { FlavorInfo } from './model/FlavorInfo';
import { FlavorInfoResponse } from './model/FlavorInfoResponse';
import { FlavorResponse } from './model/FlavorResponse';
import { FrozenInfo } from './model/FrozenInfo';
import { FuseConfig } from './model/FuseConfig';
import { GPUInfo } from './model/GPUInfo';
import { GPUResource } from './model/GPUResource';
import { GPUsInfo } from './model/GPUsInfo';
import { GetAuthorizationsRequest } from './model/GetAuthorizationsRequest';
import { GetAuthorizationsResponse } from './model/GetAuthorizationsResponse';
import { GetDevServerImageRequest } from './model/GetDevServerImageRequest';
import { GetDevServerImageResponse } from './model/GetDevServerImageResponse';
import { GetDevServerJobRequest } from './model/GetDevServerJobRequest';
import { GetDevServerJobResponse } from './model/GetDevServerJobResponse';
import { GetDevServerJobServiceRequest } from './model/GetDevServerJobServiceRequest';
import { GetDevServerJobServiceResponse } from './model/GetDevServerJobServiceResponse';
import { GetDevServerJobTemplateRequest } from './model/GetDevServerJobTemplateRequest';
import { GetDevServerJobTemplateResponse } from './model/GetDevServerJobTemplateResponse';
import { GetDevServerOperationRequest } from './model/GetDevServerOperationRequest';
import { GetDevServerOperationResponse } from './model/GetDevServerOperationResponse';
import { GetHyperClusterRequest } from './model/GetHyperClusterRequest';
import { GetHyperClusterResponse } from './model/GetHyperClusterResponse';
import { GetHyperinstanceOperationRequest } from './model/GetHyperinstanceOperationRequest';
import { GetHyperinstanceOperationResponse } from './model/GetHyperinstanceOperationResponse';
import { GetHyperinstanceRequest } from './model/GetHyperinstanceRequest';
import { GetHyperinstanceResponse } from './model/GetHyperinstanceResponse';
import { GetScaleEvaluationsDevServerRequest } from './model/GetScaleEvaluationsDevServerRequest';
import { GetScaleEvaluationsDevServerResponse } from './model/GetScaleEvaluationsDevServerResponse';
import { GetTopologiesRequest } from './model/GetTopologiesRequest';
import { GetTopologiesResponse } from './model/GetTopologiesResponse';
import { Gpu } from './model/Gpu';
import { GroupConfig } from './model/GroupConfig';
import { GroupConfigResponse } from './model/GroupConfigResponse';
import { GroupConfigUpdateRequest } from './model/GroupConfigUpdateRequest';
import { GroupModel } from './model/GroupModel';
import { Health } from './model/Health';
import { HealthResponse } from './model/HealthResponse';
import { HpaEventResponse } from './model/HpaEventResponse';
import { HpaRule } from './model/HpaRule';
import { HpaRules } from './model/HpaRules';
import { HraRuleCreateRequest } from './model/HraRuleCreateRequest';
import { HraRuleResponse } from './model/HraRuleResponse';
import { HraRuleUpdateRequest } from './model/HraRuleUpdateRequest';
import { HttpGet } from './model/HttpGet';
import { HyperCluster } from './model/HyperCluster';
import { HyperClusterCreateRequest } from './model/HyperClusterCreateRequest';
import { HyperClusterNetworkInfo } from './model/HyperClusterNetworkInfo';
import { HyperinstanceClustersCapacityRequest } from './model/HyperinstanceClustersCapacityRequest';
import { I18nDescription } from './model/I18nDescription';
import { Image } from './model/Image';
import { ImageCreateReq } from './model/ImageCreateReq';
import { ImageGroup } from './model/ImageGroup';
import { ImageInfo } from './model/ImageInfo';
import { ImageInfoResponse } from './model/ImageInfoResponse';
import { ImageRegRequest } from './model/ImageRegRequest';
import { ImageResponse } from './model/ImageResponse';
import { ImageSaveJob } from './model/ImageSaveJob';
import { InferDeploymentItemResponseData } from './model/InferDeploymentItemResponseData';
import { InferDeploymentVersionItemResp } from './model/InferDeploymentVersionItemResp';
import { InferFlavor } from './model/InferFlavor';
import { InferModelResponse } from './model/InferModelResponse';
import { InferTmsTag } from './model/InferTmsTag';
import { Input } from './model/Input';
import { InputDataInfo } from './model/InputDataInfo';
import { InputDataInfoDataset } from './model/InputDataInfoDataset';
import { InputDataInfoObs } from './model/InputDataInfoObs';
import { InputDataInfoResp } from './model/InputDataInfoResp';
import { InputDataInfoRespDataset } from './model/InputDataInfoRespDataset';
import { InputDataInfoRespObs } from './model/InputDataInfoRespObs';
import { InputRemoteConstraint } from './model/InputRemoteConstraint';
import { InputResp } from './model/InputResp';
import { InputRespRemoteConstraint } from './model/InputRespRemoteConstraint';
import { IntranetConnectionDeleteRequest } from './model/IntranetConnectionDeleteRequest';
import { IntranetConnectionInfo } from './model/IntranetConnectionInfo';
import { IntranetConnectionModifyRequest } from './model/IntranetConnectionModifyRequest';
import { IntranetConnectionRequest } from './model/IntranetConnectionRequest';
import { Job } from './model/Job';
import { JobActionType } from './model/JobActionType';
import { JobAlgorithm } from './model/JobAlgorithm';
import { JobAlgorithmResponse } from './model/JobAlgorithmResponse';
import { JobAlgorithmResponsePolicies } from './model/JobAlgorithmResponsePolicies';
import { JobAlgorithmResponsePoliciesAutoSearch } from './model/JobAlgorithmResponsePoliciesAutoSearch';
import { JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs } from './model/JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs';
import { JobAlgorithmResponsePoliciesAutoSearchRewardAttrs } from './model/JobAlgorithmResponsePoliciesAutoSearchRewardAttrs';
import { JobAlgorithmResponsePoliciesAutoSearchSearchParams } from './model/JobAlgorithmResponsePoliciesAutoSearchSearchParams';
import { JobDescription } from './model/JobDescription';
import { JobEndpointsReq } from './model/JobEndpointsReq';
import { JobEndpointsResp } from './model/JobEndpointsResp';
import { JobEngine } from './model/JobEngine';
import { JobEngineResp } from './model/JobEngineResp';
import { JobInput } from './model/JobInput';
import { JobInputResp } from './model/JobInputResp';
import { JobMetadata } from './model/JobMetadata';
import { JobMetadataResponse } from './model/JobMetadataResponse';
import { JobOutput } from './model/JobOutput';
import { JobOutputResp } from './model/JobOutputResp';
import { JobPolicies } from './model/JobPolicies';
import { JobProgress } from './model/JobProgress';
import { JobResponse } from './model/JobResponse';
import { JobSearches } from './model/JobSearches';
import { JobSummary } from './model/JobSummary';
import { JobSummaryResp } from './model/JobSummaryResp';
import { JobVolumeResp } from './model/JobVolumeResp';
import { JupyterLab } from './model/JupyterLab';
import { Lease } from './model/Lease';
import { LeaseReq } from './model/LeaseReq';
import { ListAlgorithmsRequest } from './model/ListAlgorithmsRequest';
import { ListAlgorithmsResponse } from './model/ListAlgorithmsResponse';
import { ListAllDevServersRequest } from './model/ListAllDevServersRequest';
import { ListAllDevServersResponse } from './model/ListAllDevServersResponse';
import { ListAllHyperinstancesRequest } from './model/ListAllHyperinstancesRequest';
import { ListAllHyperinstancesResponse } from './model/ListAllHyperinstancesResponse';
import { ListAllNotebooksRequest } from './model/ListAllNotebooksRequest';
import { ListAllNotebooksResponse } from './model/ListAllNotebooksResponse';
import { ListAuthoringClustersRequest } from './model/ListAuthoringClustersRequest';
import { ListAuthoringClustersResponse } from './model/ListAuthoringClustersResponse';
import { ListAutoSearchTrialsItems } from './model/ListAutoSearchTrialsItems';
import { ListDevServerFlavorsRequest } from './model/ListDevServerFlavorsRequest';
import { ListDevServerFlavorsResponse } from './model/ListDevServerFlavorsResponse';
import { ListDevServerImagesRequest } from './model/ListDevServerImagesRequest';
import { ListDevServerImagesResponse } from './model/ListDevServerImagesResponse';
import { ListDevServerJobTemplatesRequest } from './model/ListDevServerJobTemplatesRequest';
import { ListDevServerJobTemplatesResponse } from './model/ListDevServerJobTemplatesResponse';
import { ListDevServerJobsRequest } from './model/ListDevServerJobsRequest';
import { ListDevServerJobsResponse } from './model/ListDevServerJobsResponse';
import { ListDevServerPublicIPRequest } from './model/ListDevServerPublicIPRequest';
import { ListDevServerPublicIPResponse } from './model/ListDevServerPublicIPResponse';
import { ListDevServersRequest } from './model/ListDevServersRequest';
import { ListDevServersResponse } from './model/ListDevServersResponse';
import { ListDynamicStoragesRequest } from './model/ListDynamicStoragesRequest';
import { ListDynamicStoragesResponse } from './model/ListDynamicStoragesResponse';
import { ListEnginesImageInfo } from './model/ListEnginesImageInfo';
import { ListEnginesItems } from './model/ListEnginesItems';
import { ListEventCategoriesRequest } from './model/ListEventCategoriesRequest';
import { ListEventCategoriesResponse } from './model/ListEventCategoriesResponse';
import { ListEventsRequest } from './model/ListEventsRequest';
import { ListEventsResponse } from './model/ListEventsResponse';
import { ListExecutionLabelsRequest } from './model/ListExecutionLabelsRequest';
import { ListExecutionLabelsResponse } from './model/ListExecutionLabelsResponse';
import { ListFeaturesRequest } from './model/ListFeaturesRequest';
import { ListFeaturesResponse } from './model/ListFeaturesResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListHyperClusterRequest } from './model/ListHyperClusterRequest';
import { ListHyperClusterResponse } from './model/ListHyperClusterResponse';
import { ListHyperinstanceClustersCapacityRequest } from './model/ListHyperinstanceClustersCapacityRequest';
import { ListHyperinstanceClustersCapacityResponse } from './model/ListHyperinstanceClustersCapacityResponse';
import { ListHyperinstancesRequest } from './model/ListHyperinstancesRequest';
import { ListHyperinstancesResponse } from './model/ListHyperinstancesResponse';
import { ListImageGroupRequest } from './model/ListImageGroupRequest';
import { ListImageGroupResponse } from './model/ListImageGroupResponse';
import { ListImageRequest } from './model/ListImageRequest';
import { ListImageResponse } from './model/ListImageResponse';
import { ListInferApiKeysRequest } from './model/ListInferApiKeysRequest';
import { ListInferApiKeysResponse } from './model/ListInferApiKeysResponse';
import { ListInferClusterFlavorsRequest } from './model/ListInferClusterFlavorsRequest';
import { ListInferClusterFlavorsResponse } from './model/ListInferClusterFlavorsResponse';
import { ListInferDeploymentHpaEventsRequest } from './model/ListInferDeploymentHpaEventsRequest';
import { ListInferDeploymentHpaEventsResponse } from './model/ListInferDeploymentHpaEventsResponse';
import { ListInferDeploymentInstancesRequest } from './model/ListInferDeploymentInstancesRequest';
import { ListInferDeploymentInstancesResponse } from './model/ListInferDeploymentInstancesResponse';
import { ListInferDeploymentPodEventsRequest } from './model/ListInferDeploymentPodEventsRequest';
import { ListInferDeploymentPodEventsResponse } from './model/ListInferDeploymentPodEventsResponse';
import { ListInferDeploymentPodsRequest } from './model/ListInferDeploymentPodsRequest';
import { ListInferDeploymentPodsResponse } from './model/ListInferDeploymentPodsResponse';
import { ListInferDeploymentVersionsRequest } from './model/ListInferDeploymentVersionsRequest';
import { ListInferDeploymentVersionsResponse } from './model/ListInferDeploymentVersionsResponse';
import { ListInferDeploymentsRequest } from './model/ListInferDeploymentsRequest';
import { ListInferDeploymentsResponse } from './model/ListInferDeploymentsResponse';
import { ListInferIntranetConnectionApplicationsRequest } from './model/ListInferIntranetConnectionApplicationsRequest';
import { ListInferIntranetConnectionApplicationsResponse } from './model/ListInferIntranetConnectionApplicationsResponse';
import { ListInferIntranetConnectionReviewsRequest } from './model/ListInferIntranetConnectionReviewsRequest';
import { ListInferIntranetConnectionReviewsResponse } from './model/ListInferIntranetConnectionReviewsResponse';
import { ListInferServiceEventsRequest } from './model/ListInferServiceEventsRequest';
import { ListInferServiceEventsResponse } from './model/ListInferServiceEventsResponse';
import { ListInferServiceTagsRequest } from './model/ListInferServiceTagsRequest';
import { ListInferServiceTagsResponse } from './model/ListInferServiceTagsResponse';
import { ListInferServicesByTagsRequest } from './model/ListInferServicesByTagsRequest';
import { ListInferServicesByTagsResponse } from './model/ListInferServicesByTagsResponse';
import { ListInferServicesRequest } from './model/ListInferServicesRequest';
import { ListInferServicesResponse } from './model/ListInferServicesResponse';
import { ListJobsRequest } from './model/ListJobsRequest';
import { ListJobsResponse } from './model/ListJobsResponse';
import { ListNetworksRequest } from './model/ListNetworksRequest';
import { ListNetworksResponse } from './model/ListNetworksResponse';
import { ListNodePoolNodesRequest } from './model/ListNodePoolNodesRequest';
import { ListNodePoolNodesResponse } from './model/ListNodePoolNodesResponse';
import { ListNodePoolsRequest } from './model/ListNodePoolsRequest';
import { ListNodePoolsResponse } from './model/ListNodePoolsResponse';
import { ListNotebooksRequest } from './model/ListNotebooksRequest';
import { ListNotebooksResponse } from './model/ListNotebooksResponse';
import { ListPluginTemplatesRequest } from './model/ListPluginTemplatesRequest';
import { ListPluginTemplatesResponse } from './model/ListPluginTemplatesResponse';
import { ListPoolNodesRequest } from './model/ListPoolNodesRequest';
import { ListPoolNodesResponse } from './model/ListPoolNodesResponse';
import { ListPoolPluginsRequest } from './model/ListPoolPluginsRequest';
import { ListPoolPluginsResponse } from './model/ListPoolPluginsResponse';
import { ListPoolTagsRequest } from './model/ListPoolTagsRequest';
import { ListPoolTagsResponse } from './model/ListPoolTagsResponse';
import { ListPoolsRequest } from './model/ListPoolsRequest';
import { ListPoolsResponse } from './model/ListPoolsResponse';
import { ListResourceFlavorsRequest } from './model/ListResourceFlavorsRequest';
import { ListResourceFlavorsResponse } from './model/ListResourceFlavorsResponse';
import { ListScheduledEventsRequest } from './model/ListScheduledEventsRequest';
import { ListScheduledEventsResponse } from './model/ListScheduledEventsResponse';
import { ListSearchAlgorithmsParams } from './model/ListSearchAlgorithmsParams';
import { ListSearchAlgorithmsSearchAlgoList } from './model/ListSearchAlgorithmsSearchAlgoList';
import { ListTrainingExperimentsRequest } from './model/ListTrainingExperimentsRequest';
import { ListTrainingExperimentsResponse } from './model/ListTrainingExperimentsResponse';
import { ListTrainingJobEventsRequest } from './model/ListTrainingJobEventsRequest';
import { ListTrainingJobEventsResponse } from './model/ListTrainingJobEventsResponse';
import { ListTrainingJobStagesRequest } from './model/ListTrainingJobStagesRequest';
import { ListTrainingJobStagesResponse } from './model/ListTrainingJobStagesResponse';
import { ListTrainingJobTasksRequest } from './model/ListTrainingJobTasksRequest';
import { ListTrainingJobTasksResponse } from './model/ListTrainingJobTasksResponse';
import { ListTrainingJobsRequest } from './model/ListTrainingJobsRequest';
import { ListTrainingJobsResponse } from './model/ListTrainingJobsResponse';
import { ListWorkflowExecutionsRequest } from './model/ListWorkflowExecutionsRequest';
import { ListWorkflowExecutionsResponse } from './model/ListWorkflowExecutionsResponse';
import { ListWorkflowStepExecutionRequest } from './model/ListWorkflowStepExecutionRequest';
import { ListWorkflowStepExecutionResponse } from './model/ListWorkflowStepExecutionResponse';
import { ListWorkflowsRequest } from './model/ListWorkflowsRequest';
import { ListWorkflowsResponse } from './model/ListWorkflowsResponse';
import { ListWorkloadsRequest } from './model/ListWorkloadsRequest';
import { ListWorkloadsResponse } from './model/ListWorkloadsResponse';
import { ListWorkspaceRequest } from './model/ListWorkspaceRequest';
import { ListWorkspaceResponse } from './model/ListWorkspaceResponse';
import { LogConfigResponse } from './model/LogConfigResponse';
import { LogDir } from './model/LogDir';
import { LogDirResp } from './model/LogDirResp';
import { LogExportConfig } from './model/LogExportConfig';
import { LogExportPath } from './model/LogExportPath';
import { LogExportPathResp } from './model/LogExportPathResp';
import { LtsConfig } from './model/LtsConfig';
import { LvmConfig } from './model/LvmConfig';
import { MainContainerAllocatedResources } from './model/MainContainerAllocatedResources';
import { MainContainerCustomizedFlavor } from './model/MainContainerCustomizedFlavor';
import { MasJobConfig } from './model/MasJobConfig';
import { Memory } from './model/Memory';
import { MetricObject } from './model/MetricObject';
import { MetricTableItem } from './model/MetricTableItem';
import { Metrics } from './model/Metrics';
import { MetricsItem } from './model/MetricsItem';
import { MigrateResourceSpec } from './model/MigrateResourceSpec';
import { MindStudioInsight } from './model/MindStudioInsight';
import { Model } from './model/Model';
import { ModelArtsAgencyRequest } from './model/ModelArtsAgencyRequest';
import { ModelResource } from './model/ModelResource';
import { ModifyInferIntranetConnectionsRequest } from './model/ModifyInferIntranetConnectionsRequest';
import { ModifyInferIntranetConnectionsResponse } from './model/ModifyInferIntranetConnectionsResponse';
import { NFSSummary } from './model/NFSSummary';
import { Network } from './model/Network';
import { NetworkConnection } from './model/NetworkConnection';
import { NetworkConnectionStatus } from './model/NetworkConnectionStatus';
import { NetworkCreationRequest } from './model/NetworkCreationRequest';
import { NetworkListMetadata } from './model/NetworkListMetadata';
import { NetworkMetadata } from './model/NetworkMetadata';
import { NetworkMetadataAnnotations } from './model/NetworkMetadataAnnotations';
import { NetworkMetadataCreation } from './model/NetworkMetadataCreation';
import { NetworkMetadataLabels } from './model/NetworkMetadataLabels';
import { NetworkMetadataUpdate } from './model/NetworkMetadataUpdate';
import { NetworkSpec } from './model/NetworkSpec';
import { NetworkSpecUpdate } from './model/NetworkSpecUpdate';
import { NetworkStatus } from './model/NetworkStatus';
import { NetworkUpdateRequest } from './model/NetworkUpdateRequest';
import { Nfs } from './model/Nfs';
import { NfsResp } from './model/NfsResp';
import { Node } from './model/Node';
import { NodeBatchMigrationRequest } from './model/NodeBatchMigrationRequest';
import { NodeConfigTemplateMeta } from './model/NodeConfigTemplateMeta';
import { NodeConfigTemplateSpec } from './model/NodeConfigTemplateSpec';
import { NodeDriver } from './model/NodeDriver';
import { NodeLabels } from './model/NodeLabels';
import { NodeListMetadata } from './model/NodeListMetadata';
import { NodeMetadata } from './model/NodeMetadata';
import { NodeNetwork } from './model/NodeNetwork';
import { NodePool } from './model/NodePool';
import { NodePoolMetadata } from './model/NodePoolMetadata';
import { NodePoolSpec } from './model/NodePoolSpec';
import { NodePoolStatus } from './model/NodePoolStatus';
import { NodePoolStatusResources } from './model/NodePoolStatusResources';
import { NodeResizeParams } from './model/NodeResizeParams';
import { NodeResource } from './model/NodeResource';
import { NodeSelector } from './model/NodeSelector';
import { NodeSelectorRequirement } from './model/NodeSelectorRequirement';
import { NodeSelectorTerm } from './model/NodeSelectorTerm';
import { NodeSpec } from './model/NodeSpec';
import { NodeStatus } from './model/NodeStatus';
import { NodeTag } from './model/NodeTag';
import { NodeVOAnnotations } from './model/NodeVOAnnotations';
import { NodeconfigMeta } from './model/NodeconfigMeta';
import { NodeconfigSpec } from './model/NodeconfigSpec';
import { NodeconfigStatus } from './model/NodeconfigStatus';
import { NodeconfigTemplateItem } from './model/NodeconfigTemplateItem';
import { NodeconfigtemplateMetaV2 } from './model/NodeconfigtemplateMetaV2';
import { NodeconfigtemplatesSpec } from './model/NodeconfigtemplatesSpec';
import { NodesDeletionRequest } from './model/NodesDeletionRequest';
import { NodesResultMsg } from './model/NodesResultMsg';
import { NotebookCreateRequest } from './model/NotebookCreateRequest';
import { NotebookCustomSpec } from './model/NotebookCustomSpec';
import { NotebookCustomSpecRep } from './model/NotebookCustomSpecRep';
import { NotebookFlavor } from './model/NotebookFlavor';
import { NotebookResp } from './model/NotebookResp';
import { NotebookUpdateRequest } from './model/NotebookUpdateRequest';
import { Notification } from './model/Notification';
import { NotifyTrainingJobInformationRequest } from './model/NotifyTrainingJobInformationRequest';
import { NotifyTrainingJobInformationResponse } from './model/NotifyTrainingJobInformationResponse';
import { Npu } from './model/Npu';
import { ObjectReference } from './model/ObjectReference';
import { Obs } from './model/Obs';
import { ObsModel } from './model/ObsModel';
import { ObsModelResp } from './model/ObsModelResp';
import { OrderDetailItem } from './model/OrderDetailItem';
import { Os } from './model/Os';
import { Output } from './model/Output';
import { OutputModel } from './model/OutputModel';
import { OutputModelResp } from './model/OutputModelResp';
import { OutputResp } from './model/OutputResp';
import { PFSSummary } from './model/PFSSummary';
import { PFSSummaryResp } from './model/PFSSummaryResp';
import { Parameter } from './model/Parameter';
import { ParameterConstraint } from './model/ParameterConstraint';
import { ParameterI18nDescription } from './model/ParameterI18nDescription';
import { Parameters } from './model/Parameters';
import { ParametersConstraint } from './model/ParametersConstraint';
import { PatchNetworkRequest } from './model/PatchNetworkRequest';
import { PatchNetworkResponse } from './model/PatchNetworkResponse';
import { PatchNodePoolAnnotations } from './model/PatchNodePoolAnnotations';
import { PatchNodePoolMetaVO } from './model/PatchNodePoolMetaVO';
import { PatchNodePoolRequest } from './model/PatchNodePoolRequest';
import { PatchNodePoolRequestBody } from './model/PatchNodePoolRequestBody';
import { PatchNodePoolResponse } from './model/PatchNodePoolResponse';
import { PatchPoolRequest } from './model/PatchPoolRequest';
import { PatchPoolResponse } from './model/PatchPoolResponse';
import { PeerConnectionItem } from './model/PeerConnectionItem';
import { PeerConnectionStatus } from './model/PeerConnectionStatus';
import { Pfs } from './model/Pfs';
import { Plugin } from './model/Plugin';
import { PluginMetadata } from './model/PluginMetadata';
import { PluginResources } from './model/PluginResources';
import { PluginSpec } from './model/PluginSpec';
import { PluginStatus } from './model/PluginStatus';
import { PluginTemplateMetadata } from './model/PluginTemplateMetadata';
import { PluginTemplateSpec } from './model/PluginTemplateSpec';
import { PluginTemplateSpecV2 } from './model/PluginTemplateSpecV2';
import { PluginTemplateV2 } from './model/PluginTemplateV2';
import { PluginTemplateVersionV2 } from './model/PluginTemplateVersionV2';
import { Pool } from './model/Pool';
import { PoolAnnotationsCreation } from './model/PoolAnnotationsCreation';
import { PoolDriver } from './model/PoolDriver';
import { PoolDriverStatus } from './model/PoolDriverStatus';
import { PoolJob } from './model/PoolJob';
import { PoolLabelsCreation } from './model/PoolLabelsCreation';
import { PoolMetaAnnotations } from './model/PoolMetaAnnotations';
import { PoolMetaLabels } from './model/PoolMetaLabels';
import { PoolMetadata } from './model/PoolMetadata';
import { PoolMetadataCreation } from './model/PoolMetadataCreation';
import { PoolMetadataDeletion } from './model/PoolMetadataDeletion';
import { PoolMetadataUpdate } from './model/PoolMetadataUpdate';
import { PoolMetadataUpdateAnnotations } from './model/PoolMetadataUpdateAnnotations';
import { PoolModel } from './model/PoolModel';
import { PoolMonitorDataPoints } from './model/PoolMonitorDataPoints';
import { PoolMonitorMetric } from './model/PoolMonitorMetric';
import { PoolMonitorMetricDimensions } from './model/PoolMonitorMetricDimensions';
import { PoolMonitorMetrics } from './model/PoolMonitorMetrics';
import { PoolMonitorStatistics } from './model/PoolMonitorStatistics';
import { PoolNodeAz } from './model/PoolNodeAz';
import { PoolResource } from './model/PoolResource';
import { PoolResourceFlavor } from './model/PoolResourceFlavor';
import { PoolResourceFlavorCount } from './model/PoolResourceFlavorCount';
import { PoolResourceFlavorExtendParams } from './model/PoolResourceFlavorExtendParams';
import { PoolSpecCreation } from './model/PoolSpecCreation';
import { PoolSpecCreationNetwork } from './model/PoolSpecCreationNetwork';
import { PoolSpecModel } from './model/PoolSpecModel';
import { PoolSpecModelContainernetwork } from './model/PoolSpecModelContainernetwork';
import { PoolSpecModelDataVolumes } from './model/PoolSpecModelDataVolumes';
import { PoolSpecModelDataVolumesExtendParams } from './model/PoolSpecModelDataVolumesExtendParams';
import { PoolSpecModelExtendParams } from './model/PoolSpecModelExtendParams';
import { PoolSpecModelNetwork } from './model/PoolSpecModelNetwork';
import { PoolSpecModelResources } from './model/PoolSpecModelResources';
import { PoolSpecModelVolumeGroupConfigs } from './model/PoolSpecModelVolumeGroupConfigs';
import { PoolSpecModelVolumeGroupConfigsLvmConfig } from './model/PoolSpecModelVolumeGroupConfigsLvmConfig';
import { PoolSpecUpdate } from './model/PoolSpecUpdate';
import { PoolSpecUpdateResources } from './model/PoolSpecUpdateResources';
import { PoolStatisticsStatistics } from './model/PoolStatisticsStatistics';
import { PoolStatisticsStatisticsStatus } from './model/PoolStatisticsStatisticsStatus';
import { PoolStatus } from './model/PoolStatus';
import { PoolStatusClusters } from './model/PoolStatusClusters';
import { PoolStatusClustersPlugins } from './model/PoolStatusClustersPlugins';
import { PoolStatusDriver } from './model/PoolStatusDriver';
import { PoolStatusResources } from './model/PoolStatusResources';
import { PoolStatusScope } from './model/PoolStatusScope';
import { PoolTag } from './model/PoolTag';
import { PoolUpdateRequest } from './model/PoolUpdateRequest';
import { PredictUrlResponse } from './model/PredictUrlResponse';
import { PreferredAffinity } from './model/PreferredAffinity';
import { PreferredSchedulingTerm } from './model/PreferredSchedulingTerm';
import { QueryHyperinstanceTagsRequest } from './model/QueryHyperinstanceTagsRequest';
import { QueryHyperinstanceTagsResponse } from './model/QueryHyperinstanceTagsResponse';
import { QueryTmsResourceCountRequest } from './model/QueryTmsResourceCountRequest';
import { QueryTmsResourceRequest } from './model/QueryTmsResourceRequest';
import { Quota } from './model/Quota';
import { RateLimit } from './model/RateLimit';
import { RateLimitResponse } from './model/RateLimitResponse';
import { RebootDevServerRequest } from './model/RebootDevServerRequest';
import { RebootDevServerResponse } from './model/RebootDevServerResponse';
import { RecoverRecord } from './model/RecoverRecord';
import { RegisterImageRequest } from './model/RegisterImageRequest';
import { RegisterImageResponse } from './model/RegisterImageResponse';
import { ReinstallDevServerOSRequest } from './model/ReinstallDevServerOSRequest';
import { ReinstallDevServerOSResponse } from './model/ReinstallDevServerOSResponse';
import { Remote } from './model/Remote';
import { RemoteConstraint } from './model/RemoteConstraint';
import { RemoteObs } from './model/RemoteObs';
import { RemoteObsResp } from './model/RemoteObsResp';
import { RemoteResp } from './model/RemoteResp';
import { RenewLeaseRequest } from './model/RenewLeaseRequest';
import { RenewLeaseResponse } from './model/RenewLeaseResponse';
import { ReportEventBody } from './model/ReportEventBody';
import { RequiredAffinity } from './model/RequiredAffinity';
import { RequiredAffinityResp } from './model/RequiredAffinityResp';
import { ResetNodesRequest } from './model/ResetNodesRequest';
import { ResetNodesRequestNodeConfig } from './model/ResetNodesRequestNodeConfig';
import { ResetNodesRequestRollingConfig } from './model/ResetNodesRequestRollingConfig';
import { ResizeNodeInfo } from './model/ResizeNodeInfo';
import { Resource } from './model/Resource';
import { ResourceExtendParams } from './model/ResourceExtendParams';
import { ResourceFlavor } from './model/ResourceFlavor';
import { ResourceFlavorAnnotation } from './model/ResourceFlavorAnnotation';
import { ResourceFlavorLabel } from './model/ResourceFlavorLabel';
import { ResourceFlavorListMetadata } from './model/ResourceFlavorListMetadata';
import { ResourceFlavorMetadata } from './model/ResourceFlavorMetadata';
import { ResourceFlavorSpec } from './model/ResourceFlavorSpec';
import { ResourceFlavorSpecDataVolume } from './model/ResourceFlavorSpecDataVolume';
import { ResourceFlavorSpecGpu } from './model/ResourceFlavorSpecGpu';
import { ResourceFlavorSpecNpu } from './model/ResourceFlavorSpecNpu';
import { ResourceFlavorStatus } from './model/ResourceFlavorStatus';
import { ResourceMetricsMetadata } from './model/ResourceMetricsMetadata';
import { ResourceQuota } from './model/ResourceQuota';
import { ResourceRequirement } from './model/ResourceRequirement';
import { ResourceRequirementVO } from './model/ResourceRequirementVO';
import { RewardAttrs } from './model/RewardAttrs';
import { RoleReplica } from './model/RoleReplica';
import { RollingUpdate } from './model/RollingUpdate';
import { RollingUpdateResponse } from './model/RollingUpdateResponse';
import { RootVolume } from './model/RootVolume';
import { RunUserInfo } from './model/RunUserInfo';
import { RunUserRequest } from './model/RunUserRequest';
import { RunningRecord } from './model/RunningRecord';
import { RuntimeConfig } from './model/RuntimeConfig';
import { RuntimeConfigResponse } from './model/RuntimeConfigResponse';
import { SSHReq } from './model/SSHReq';
import { SSHResp } from './model/SSHResp';
import { ScaleDownHyperinstanceRequest } from './model/ScaleDownHyperinstanceRequest';
import { ScaleDownHyperinstanceResponse } from './model/ScaleDownHyperinstanceResponse';
import { ScaleUpHyperinstanceRequest } from './model/ScaleUpHyperinstanceRequest';
import { ScaleUpHyperinstanceResponse } from './model/ScaleUpHyperinstanceResponse';
import { Scene } from './model/Scene';
import { ScheduleConfig } from './model/ScheduleConfig';
import { ScheduleConfigResponse } from './model/ScheduleConfigResponse';
import { SchedulePolicy } from './model/SchedulePolicy';
import { SchedulePolicyResp } from './model/SchedulePolicyResp';
import { ScheduledEvent } from './model/ScheduledEvent';
import { SearchParams } from './model/SearchParams';
import { SecretVolume } from './model/SecretVolume';
import { SecretVolumeResponse } from './model/SecretVolumeResponse';
import { ServerBindPublicIPRequest } from './model/ServerBindPublicIPRequest';
import { ServerCreateRequest } from './model/ServerCreateRequest';
import { ServerDataVolume } from './model/ServerDataVolume';
import { ServerFlavorinstanceResponse } from './model/ServerFlavorinstanceResponse';
import { ServerHpsClusterCapacity } from './model/ServerHpsClusterCapacity';
import { ServerHpsInfo } from './model/ServerHpsInfo';
import { ServerHyperScaleUpRequest } from './model/ServerHyperScaleUpRequest';
import { ServerHyperinstanceResponse } from './model/ServerHyperinstanceResponse';
import { ServerImageResponse } from './model/ServerImageResponse';
import { ServerJobDeleteRequest } from './model/ServerJobDeleteRequest';
import { ServerNetwork } from './model/ServerNetwork';
import { ServerNetworkHyperCluster } from './model/ServerNetworkHyperCluster';
import { ServerOperationError } from './model/ServerOperationError';
import { ServerOsRequest } from './model/ServerOsRequest';
import { ServerPhyInfo } from './model/ServerPhyInfo';
import { ServerPublicIp } from './model/ServerPublicIp';
import { ServerResponse } from './model/ServerResponse';
import { ServerRoceNetwork } from './model/ServerRoceNetwork';
import { ServerRoceNetworkRequest } from './model/ServerRoceNetworkRequest';
import { ServerScaleDownRequest } from './model/ServerScaleDownRequest';
import { ServerScaleEvaluation } from './model/ServerScaleEvaluation';
import { ServerStartRequest } from './model/ServerStartRequest';
import { ServerTaskLimit } from './model/ServerTaskLimit';
import { ServerVolume } from './model/ServerVolume';
import { ServiceCreateRequest } from './model/ServiceCreateRequest';
import { ServiceCreateRequestTags } from './model/ServiceCreateRequestTags';
import { ServiceEventResponse } from './model/ServiceEventResponse';
import { ServiceIdName } from './model/ServiceIdName';
import { ServiceInstanceResponse } from './model/ServiceInstanceResponse';
import { ServiceInvoke } from './model/ServiceInvoke';
import { ServiceInvokeResponse } from './model/ServiceInvokeResponse';
import { ServiceItemResponseData } from './model/ServiceItemResponseData';
import { ServiceLimit } from './model/ServiceLimit';
import { ServiceLimitResponse } from './model/ServiceLimitResponse';
import { ServicePodEventResponse } from './model/ServicePodEventResponse';
import { ServicePodResponse } from './model/ServicePodResponse';
import { ServiceResponse } from './model/ServiceResponse';
import { ServiceSecret } from './model/ServiceSecret';
import { ServiceSecretResponse } from './model/ServiceSecretResponse';
import { ServiceSecurityConfig } from './model/ServiceSecurityConfig';
import { ServiceUpdateRequest } from './model/ServiceUpdateRequest';
import { ServiceVersionResponse } from './model/ServiceVersionResponse';
import { SfsTurboConnectionStatus } from './model/SfsTurboConnectionStatus';
import { Shards } from './model/Shards';
import { ShowAlgorithmByUuidRequest } from './model/ShowAlgorithmByUuidRequest';
import { ShowAlgorithmByUuidResponse } from './model/ShowAlgorithmByUuidResponse';
import { ShowAuthmodeDetailRequest } from './model/ShowAuthmodeDetailRequest';
import { ShowAuthmodeDetailResponse } from './model/ShowAuthmodeDetailResponse';
import { ShowAutoSearchParamAnalysisResultPathRequest } from './model/ShowAutoSearchParamAnalysisResultPathRequest';
import { ShowAutoSearchParamAnalysisResultPathResponse } from './model/ShowAutoSearchParamAnalysisResultPathResponse';
import { ShowAutoSearchParamsAnalysisRequest } from './model/ShowAutoSearchParamsAnalysisRequest';
import { ShowAutoSearchParamsAnalysisResponse } from './model/ShowAutoSearchParamsAnalysisResponse';
import { ShowAutoSearchPerTrialRequest } from './model/ShowAutoSearchPerTrialRequest';
import { ShowAutoSearchPerTrialResponse } from './model/ShowAutoSearchPerTrialResponse';
import { ShowAutoSearchTrialEarlyStopRequest } from './model/ShowAutoSearchTrialEarlyStopRequest';
import { ShowAutoSearchTrialEarlyStopResponse } from './model/ShowAutoSearchTrialEarlyStopResponse';
import { ShowAutoSearchTrialsRequest } from './model/ShowAutoSearchTrialsRequest';
import { ShowAutoSearchTrialsResponse } from './model/ShowAutoSearchTrialsResponse';
import { ShowAutoSearchYamlTemplateContentRequest } from './model/ShowAutoSearchYamlTemplateContentRequest';
import { ShowAutoSearchYamlTemplateContentResponse } from './model/ShowAutoSearchYamlTemplateContentResponse';
import { ShowAutoSearchYamlTemplatesInfoRequest } from './model/ShowAutoSearchYamlTemplatesInfoRequest';
import { ShowAutoSearchYamlTemplatesInfoResponse } from './model/ShowAutoSearchYamlTemplatesInfoResponse';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { ShowDevServerRequest } from './model/ShowDevServerRequest';
import { ShowDevServerResponse } from './model/ShowDevServerResponse';
import { ShowDynamicStorageRequest } from './model/ShowDynamicStorageRequest';
import { ShowDynamicStorageResponse } from './model/ShowDynamicStorageResponse';
import { ShowImageRequest } from './model/ShowImageRequest';
import { ShowImageResponse } from './model/ShowImageResponse';
import { ShowInferDeploymentHpaRequest } from './model/ShowInferDeploymentHpaRequest';
import { ShowInferDeploymentHpaResponse } from './model/ShowInferDeploymentHpaResponse';
import { ShowInferDeploymentRequest } from './model/ShowInferDeploymentRequest';
import { ShowInferDeploymentResponse } from './model/ShowInferDeploymentResponse';
import { ShowInferDeploymentVersionRequest } from './model/ShowInferDeploymentVersionRequest';
import { ShowInferDeploymentVersionResponse } from './model/ShowInferDeploymentVersionResponse';
import { ShowInferHraRequest } from './model/ShowInferHraRequest';
import { ShowInferHraResponse } from './model/ShowInferHraResponse';
import { ShowInferServiceClusterRequest } from './model/ShowInferServiceClusterRequest';
import { ShowInferServiceClusterResponse } from './model/ShowInferServiceClusterResponse';
import { ShowInferServiceRequest } from './model/ShowInferServiceRequest';
import { ShowInferServiceResponse } from './model/ShowInferServiceResponse';
import { ShowInferServiceTagsRequest } from './model/ShowInferServiceTagsRequest';
import { ShowInferServiceTagsResponse } from './model/ShowInferServiceTagsResponse';
import { ShowLeaseRequest } from './model/ShowLeaseRequest';
import { ShowLeaseResponse } from './model/ShowLeaseResponse';
import { ShowNetworkAvailableIpRequest } from './model/ShowNetworkAvailableIpRequest';
import { ShowNetworkAvailableIpResponse } from './model/ShowNetworkAvailableIpResponse';
import { ShowNetworkRequest } from './model/ShowNetworkRequest';
import { ShowNetworkResponse } from './model/ShowNetworkResponse';
import { ShowNodeConfigTemplateRequest } from './model/ShowNodeConfigTemplateRequest';
import { ShowNodeConfigTemplateResponse } from './model/ShowNodeConfigTemplateResponse';
import { ShowNodePoolRequest } from './model/ShowNodePoolRequest';
import { ShowNodePoolResponse } from './model/ShowNodePoolResponse';
import { ShowNotebookRequest } from './model/ShowNotebookRequest';
import { ShowNotebookResponse } from './model/ShowNotebookResponse';
import { ShowNotebookTagsRequest } from './model/ShowNotebookTagsRequest';
import { ShowNotebookTagsResponse } from './model/ShowNotebookTagsResponse';
import { ShowObsUrlOfTrainingJobLogsRequest } from './model/ShowObsUrlOfTrainingJobLogsRequest';
import { ShowObsUrlOfTrainingJobLogsResponse } from './model/ShowObsUrlOfTrainingJobLogsResponse';
import { ShowOrderRequest } from './model/ShowOrderRequest';
import { ShowOrderResponse } from './model/ShowOrderResponse';
import { ShowOsConfigRequest } from './model/ShowOsConfigRequest';
import { ShowOsConfigResponse } from './model/ShowOsConfigResponse';
import { ShowOsQuotaRequest } from './model/ShowOsQuotaRequest';
import { ShowOsQuotaResponse } from './model/ShowOsQuotaResponse';
import { ShowPluginTemplateRequest } from './model/ShowPluginTemplateRequest';
import { ShowPluginTemplateResponse } from './model/ShowPluginTemplateResponse';
import { ShowPoolMonitorRequest } from './model/ShowPoolMonitorRequest';
import { ShowPoolMonitorResponse } from './model/ShowPoolMonitorResponse';
import { ShowPoolNodeConfigRequest } from './model/ShowPoolNodeConfigRequest';
import { ShowPoolNodeConfigResponse } from './model/ShowPoolNodeConfigResponse';
import { ShowPoolNodeConfigTemplateRequest } from './model/ShowPoolNodeConfigTemplateRequest';
import { ShowPoolNodeConfigTemplateResponse } from './model/ShowPoolNodeConfigTemplateResponse';
import { ShowPoolNodeRequest } from './model/ShowPoolNodeRequest';
import { ShowPoolNodeResponse } from './model/ShowPoolNodeResponse';
import { ShowPoolRequest } from './model/ShowPoolRequest';
import { ShowPoolResponse } from './model/ShowPoolResponse';
import { ShowPoolRuntimeMetricsRequest } from './model/ShowPoolRuntimeMetricsRequest';
import { ShowPoolRuntimeMetricsResponse } from './model/ShowPoolRuntimeMetricsResponse';
import { ShowPoolStatisticsRequest } from './model/ShowPoolStatisticsRequest';
import { ShowPoolStatisticsResponse } from './model/ShowPoolStatisticsResponse';
import { ShowPoolTagsRequest } from './model/ShowPoolTagsRequest';
import { ShowPoolTagsResponse } from './model/ShowPoolTagsResponse';
import { ShowSaveImageJobRequest } from './model/ShowSaveImageJobRequest';
import { ShowSaveImageJobResponse } from './model/ShowSaveImageJobResponse';
import { ShowSearchAlgorithmsRequest } from './model/ShowSearchAlgorithmsRequest';
import { ShowSearchAlgorithmsResponse } from './model/ShowSearchAlgorithmsResponse';
import { ShowSwitchableFlavorsRequest } from './model/ShowSwitchableFlavorsRequest';
import { ShowSwitchableFlavorsResponse } from './model/ShowSwitchableFlavorsResponse';
import { ShowTrainJobTagsRequest } from './model/ShowTrainJobTagsRequest';
import { ShowTrainJobTagsResponse } from './model/ShowTrainJobTagsResponse';
import { ShowTrainingExperimentDetailsRequest } from './model/ShowTrainingExperimentDetailsRequest';
import { ShowTrainingExperimentDetailsResponse } from './model/ShowTrainingExperimentDetailsResponse';
import { ShowTrainingJobDetailsRequest } from './model/ShowTrainingJobDetailsRequest';
import { ShowTrainingJobDetailsResponse } from './model/ShowTrainingJobDetailsResponse';
import { ShowTrainingJobEnginesRequest } from './model/ShowTrainingJobEnginesRequest';
import { ShowTrainingJobEnginesResponse } from './model/ShowTrainingJobEnginesResponse';
import { ShowTrainingJobFlavorsRequest } from './model/ShowTrainingJobFlavorsRequest';
import { ShowTrainingJobFlavorsResponse } from './model/ShowTrainingJobFlavorsResponse';
import { ShowTrainingJobLogsPreviewRequest } from './model/ShowTrainingJobLogsPreviewRequest';
import { ShowTrainingJobLogsPreviewResponse } from './model/ShowTrainingJobLogsPreviewResponse';
import { ShowTrainingJobMetricsRequest } from './model/ShowTrainingJobMetricsRequest';
import { ShowTrainingJobMetricsResponse } from './model/ShowTrainingJobMetricsResponse';
import { ShowTrainingQuotasRequest } from './model/ShowTrainingQuotasRequest';
import { ShowTrainingQuotasResponse } from './model/ShowTrainingQuotasResponse';
import { ShowWorkflowExecutionRequest } from './model/ShowWorkflowExecutionRequest';
import { ShowWorkflowExecutionResponse } from './model/ShowWorkflowExecutionResponse';
import { ShowWorkflowLabelsRequest } from './model/ShowWorkflowLabelsRequest';
import { ShowWorkflowLabelsResponse } from './model/ShowWorkflowLabelsResponse';
import { ShowWorkflowRequest } from './model/ShowWorkflowRequest';
import { ShowWorkflowResponse } from './model/ShowWorkflowResponse';
import { ShowWorkflowScheduleListRequest } from './model/ShowWorkflowScheduleListRequest';
import { ShowWorkflowScheduleListResponse } from './model/ShowWorkflowScheduleListResponse';
import { ShowWorkflowScheduleRequest } from './model/ShowWorkflowScheduleRequest';
import { ShowWorkflowScheduleResponse } from './model/ShowWorkflowScheduleResponse';
import { ShowWorkflowStepExecutionMetricsRequest } from './model/ShowWorkflowStepExecutionMetricsRequest';
import { ShowWorkflowStepExecutionMetricsResponse } from './model/ShowWorkflowStepExecutionMetricsResponse';
import { ShowWorkflowSubscriptionRequest } from './model/ShowWorkflowSubscriptionRequest';
import { ShowWorkflowSubscriptionResponse } from './model/ShowWorkflowSubscriptionResponse';
import { ShowWorkflowsOverviewRequest } from './model/ShowWorkflowsOverviewRequest';
import { ShowWorkflowsOverviewResponse } from './model/ShowWorkflowsOverviewResponse';
import { ShowWorkflowsTodolistRequest } from './model/ShowWorkflowsTodolistRequest';
import { ShowWorkflowsTodolistResponse } from './model/ShowWorkflowsTodolistResponse';
import { ShowWorkloadStatisticsRequest } from './model/ShowWorkloadStatisticsRequest';
import { ShowWorkloadStatisticsResponse } from './model/ShowWorkloadStatisticsResponse';
import { ShowWorkspaceQuotasRequest } from './model/ShowWorkspaceQuotasRequest';
import { ShowWorkspaceQuotasResponse } from './model/ShowWorkspaceQuotasResponse';
import { ShowWorkspaceRequest } from './model/ShowWorkspaceRequest';
import { ShowWorkspaceResponse } from './model/ShowWorkspaceResponse';
import { SkuInfo } from './model/SkuInfo';
import { SloInfo } from './model/SloInfo';
import { SloObjectives } from './model/SloObjectives';
import { Spec } from './model/Spec';
import { SpecResource } from './model/SpecResource';
import { SpecResponse } from './model/SpecResponse';
import { SpecVolumes } from './model/SpecVolumes';
import { StageInfoWithSub } from './model/StageInfoWithSub';
import { StageRecord } from './model/StageRecord';
import { StartDevServerRequest } from './model/StartDevServerRequest';
import { StartDevServerResponse } from './model/StartDevServerResponse';
import { StartHyperinstanceRequest } from './model/StartHyperinstanceRequest';
import { StartHyperinstanceResponse } from './model/StartHyperinstanceResponse';
import { StartInferDeploymentRequest } from './model/StartInferDeploymentRequest';
import { StartInferDeploymentResponse } from './model/StartInferDeploymentResponse';
import { StartInferServiceRequest } from './model/StartInferServiceRequest';
import { StartInferServiceResponse } from './model/StartInferServiceResponse';
import { StartNotebookRequest } from './model/StartNotebookRequest';
import { StartNotebookResponse } from './model/StartNotebookResponse';
import { Status } from './model/Status';
import { StepCondition } from './model/StepCondition';
import { StepConditionResp } from './model/StepConditionResp';
import { StepExecution } from './model/StepExecution';
import { StepExecutionAction } from './model/StepExecutionAction';
import { StepExecutionResp } from './model/StepExecutionResp';
import { StopDevServerRequest } from './model/StopDevServerRequest';
import { StopDevServerResponse } from './model/StopDevServerResponse';
import { StopHyperinstanceRequest } from './model/StopHyperinstanceRequest';
import { StopHyperinstanceResponse } from './model/StopHyperinstanceResponse';
import { StopInferDeploymentRequest } from './model/StopInferDeploymentRequest';
import { StopInferDeploymentResponse } from './model/StopInferDeploymentResponse';
import { StopInferServiceRequest } from './model/StopInferServiceRequest';
import { StopInferServiceResponse } from './model/StopInferServiceResponse';
import { StopNotebookRequest } from './model/StopNotebookRequest';
import { StopNotebookResponse } from './model/StopNotebookResponse';
import { StopTrainingJobRequest } from './model/StopTrainingJobRequest';
import { StopTrainingJobResponse } from './model/StopTrainingJobResponse';
import { SubStage } from './model/SubStage';
import { SubnetIpAvailability } from './model/SubnetIpAvailability';
import { Subscription } from './model/Subscription';
import { SuccessResponse } from './model/SuccessResponse';
import { Summary } from './model/Summary';
import { SummaryResp } from './model/SummaryResp';
import { SwitchInferDeploymentVersionRequest } from './model/SwitchInferDeploymentVersionRequest';
import { SwitchInferDeploymentVersionRequestBody } from './model/SwitchInferDeploymentVersionRequestBody';
import { SwitchInferDeploymentVersionResponse } from './model/SwitchInferDeploymentVersionResponse';
import { SyncDevServersRequest } from './model/SyncDevServersRequest';
import { SyncDevServersResponse } from './model/SyncDevServersResponse';
import { SyncImageRequest } from './model/SyncImageRequest';
import { SyncImageResponse } from './model/SyncImageResponse';
import { Tag } from './model/Tag';
import { TagRequest } from './model/TagRequest';
import { TagsResponse } from './model/TagsResponse';
import { Taints } from './model/Taints';
import { Task } from './model/Task';
import { TaskAlgorithm } from './model/TaskAlgorithm';
import { TaskAlgorithmEngine } from './model/TaskAlgorithmEngine';
import { TaskAlgorithmInputs } from './model/TaskAlgorithmInputs';
import { TaskAlgorithmJobConfig } from './model/TaskAlgorithmJobConfig';
import { TaskAlgorithmJobConfigEngine } from './model/TaskAlgorithmJobConfigEngine';
import { TaskAlgorithmOutputs } from './model/TaskAlgorithmOutputs';
import { TaskAlgorithmRemote } from './model/TaskAlgorithmRemote';
import { TaskAlgorithmRemoteObs } from './model/TaskAlgorithmRemoteObs';
import { TaskEnv } from './model/TaskEnv';
import { TaskHistory } from './model/TaskHistory';
import { TaskLogExportPath } from './model/TaskLogExportPath';
import { TaskResponse } from './model/TaskResponse';
import { TaskResponseAlgorithm } from './model/TaskResponseAlgorithm';
import { TaskResponseLogExportPath } from './model/TaskResponseLogExportPath';
import { TaskStatuses } from './model/TaskStatuses';
import { TaskTaskResource } from './model/TaskTaskResource';
import { TaskUrls } from './model/TaskUrls';
import { Template } from './model/Template';
import { TemplateParam } from './model/TemplateParam';
import { Tensorboard } from './model/Tensorboard';
import { TerminationGrace } from './model/TerminationGrace';
import { TmsMatch } from './model/TmsMatch';
import { TmsResource } from './model/TmsResource';
import { TmsTag } from './model/TmsTag';
import { TmsTagForDeletion } from './model/TmsTagForDeletion';
import { TmsTagResp } from './model/TmsTagResp';
import { TmsTagResponse } from './model/TmsTagResponse';
import { TrainingExperimentRequest } from './model/TrainingExperimentRequest';
import { TrainingExperimentRequestMetadata } from './model/TrainingExperimentRequestMetadata';
import { TrainingExperimentResp } from './model/TrainingExperimentResp';
import { TrainingExperimentResponse } from './model/TrainingExperimentResponse';
import { TrainingExperimentResponseMetadata } from './model/TrainingExperimentResponseMetadata';
import { TrainingExperimentStatistic } from './model/TrainingExperimentStatistic';
import { TrainingQuotaResponse } from './model/TrainingQuotaResponse';
import { UnbindInferApiKeyRequest } from './model/UnbindInferApiKeyRequest';
import { UnbindInferApiKeyResponse } from './model/UnbindInferApiKeyResponse';
import { UnitConfig } from './model/UnitConfig';
import { UnitConfigResponse } from './model/UnitConfigResponse';
import { UpdateAuthModeRequest } from './model/UpdateAuthModeRequest';
import { UpdateAuthModeRequestBody } from './model/UpdateAuthModeRequestBody';
import { UpdateAuthModeResponse } from './model/UpdateAuthModeResponse';
import { UpdateDevServerRequest } from './model/UpdateDevServerRequest';
import { UpdateDevServerResponse } from './model/UpdateDevServerResponse';
import { UpdateHpaRequestBody } from './model/UpdateHpaRequestBody';
import { UpdateHraRequestBody } from './model/UpdateHraRequestBody';
import { UpdateImageGroupRequest } from './model/UpdateImageGroupRequest';
import { UpdateImageGroupRequestBody } from './model/UpdateImageGroupRequestBody';
import { UpdateImageGroupRequestBodyTags } from './model/UpdateImageGroupRequestBodyTags';
import { UpdateImageGroupResponse } from './model/UpdateImageGroupResponse';
import { UpdateInferDeploymentHpaRequest } from './model/UpdateInferDeploymentHpaRequest';
import { UpdateInferDeploymentHpaResponse } from './model/UpdateInferDeploymentHpaResponse';
import { UpdateInferDeploymentRequest } from './model/UpdateInferDeploymentRequest';
import { UpdateInferDeploymentResponse } from './model/UpdateInferDeploymentResponse';
import { UpdateInferDeploymentScale } from './model/UpdateInferDeploymentScale';
import { UpdateInferDeploymentScaleRequest } from './model/UpdateInferDeploymentScaleRequest';
import { UpdateInferDeploymentScaleResponse } from './model/UpdateInferDeploymentScaleResponse';
import { UpdateInferHraRequest } from './model/UpdateInferHraRequest';
import { UpdateInferHraResponse } from './model/UpdateInferHraResponse';
import { UpdateInferIntranetConnectionRequest } from './model/UpdateInferIntranetConnectionRequest';
import { UpdateInferIntranetConnectionResponse } from './model/UpdateInferIntranetConnectionResponse';
import { UpdateInferServiceRequest } from './model/UpdateInferServiceRequest';
import { UpdateInferServiceResponse } from './model/UpdateInferServiceResponse';
import { UpdateIntranetConnectionRequestBody } from './model/UpdateIntranetConnectionRequestBody';
import { UpdateNotebookRequest } from './model/UpdateNotebookRequest';
import { UpdateNotebookResponse } from './model/UpdateNotebookResponse';
import { UpdateServerRequest } from './model/UpdateServerRequest';
import { UpdateWorkflowExecutionRequest } from './model/UpdateWorkflowExecutionRequest';
import { UpdateWorkflowExecutionResponse } from './model/UpdateWorkflowExecutionResponse';
import { UpdateWorkflowRequest } from './model/UpdateWorkflowRequest';
import { UpdateWorkflowResponse } from './model/UpdateWorkflowResponse';
import { UpdateWorkflowScheduleRequest } from './model/UpdateWorkflowScheduleRequest';
import { UpdateWorkflowScheduleResponse } from './model/UpdateWorkflowScheduleResponse';
import { UpdateWorkflowSubscriptionRequest } from './model/UpdateWorkflowSubscriptionRequest';
import { UpdateWorkflowSubscriptionResponse } from './model/UpdateWorkflowSubscriptionResponse';
import { UpdateWorkspaceQuotasReq } from './model/UpdateWorkspaceQuotasReq';
import { UpdateWorkspaceQuotasReqQuotas } from './model/UpdateWorkspaceQuotasReqQuotas';
import { UpdateWorkspaceQuotasRequest } from './model/UpdateWorkspaceQuotasRequest';
import { UpdateWorkspaceQuotasResponse } from './model/UpdateWorkspaceQuotasResponse';
import { UpdateWorkspaceReq } from './model/UpdateWorkspaceReq';
import { UpdateWorkspaceRequest } from './model/UpdateWorkspaceRequest';
import { UpdateWorkspaceResponse } from './model/UpdateWorkspaceResponse';
import { UpgradeConfig } from './model/UpgradeConfig';
import { UpgradeConfigResponse } from './model/UpgradeConfigResponse';
import { UserResponse } from './model/UserResponse';
import { UserTags } from './model/UserTags';
import { UserVpcRequest } from './model/UserVpcRequest';
import { UserVpcResponse } from './model/UserVpcResponse';
import { ValidateAuthResults } from './model/ValidateAuthResults';
import { ValidateAuthorizationRequest } from './model/ValidateAuthorizationRequest';
import { ValidateAuthorizationRequestBody } from './model/ValidateAuthorizationRequestBody';
import { ValidateAuthorizationResponse } from './model/ValidateAuthorizationResponse';
import { Value } from './model/Value';
import { ViewWorkspaceResponseGrants } from './model/ViewWorkspaceResponseGrants';
import { VolumeExtendParams } from './model/VolumeExtendParams';
import { VolumeGroupConfig } from './model/VolumeGroupConfig';
import { VolumeMountRequest } from './model/VolumeMountRequest';
import { VolumeRes } from './model/VolumeRes';
import { VolumeResponse } from './model/VolumeResponse';
import { VolumeVO } from './model/VolumeVO';
import { Workflow } from './model/Workflow';
import { WorkflowAsset } from './model/WorkflowAsset';
import { WorkflowConditionExecution } from './model/WorkflowConditionExecution';
import { WorkflowConditionExecutionResp } from './model/WorkflowConditionExecutionResp';
import { WorkflowConsume } from './model/WorkflowConsume';
import { WorkflowDagPolicies } from './model/WorkflowDagPolicies';
import { WorkflowDagPoliciesResp } from './model/WorkflowDagPoliciesResp';
import { WorkflowErrorInfo } from './model/WorkflowErrorInfo';
import { WorkflowErrorInfoResp } from './model/WorkflowErrorInfoResp';
import { WorkflowExecution } from './model/WorkflowExecution';
import { WorkflowExecutionResp } from './model/WorkflowExecutionResp';
import { WorkflowGallerySubscription } from './model/WorkflowGallerySubscription';
import { WorkflowMainServiceAuthReq } from './model/WorkflowMainServiceAuthReq';
import { WorkflowMetricPair } from './model/WorkflowMetricPair';
import { WorkflowMetricPairResp } from './model/WorkflowMetricPairResp';
import { WorkflowParam } from './model/WorkflowParam';
import { WorkflowParameter } from './model/WorkflowParameter';
import { WorkflowParameterResp } from './model/WorkflowParameterResp';
import { WorkflowPolicy } from './model/WorkflowPolicy';
import { WorkflowPoolOrder } from './model/WorkflowPoolOrder';
import { WorkflowSchedule } from './model/WorkflowSchedule';
import { WorkflowSchedulePolicies } from './model/WorkflowSchedulePolicies';
import { WorkflowSchedulePoliciesResp } from './model/WorkflowSchedulePoliciesResp';
import { WorkflowScheduleResp } from './model/WorkflowScheduleResp';
import { WorkflowScheduleUpdate } from './model/WorkflowScheduleUpdate';
import { WorkflowServicePackage } from './model/WorkflowServicePackage';
import { WorkflowServicePackege } from './model/WorkflowServicePackege';
import { WorkflowStep } from './model/WorkflowStep';
import { WorkflowStepExecutionPolicy } from './model/WorkflowStepExecutionPolicy';
import { WorkflowStepExecutionPolicyResp } from './model/WorkflowStepExecutionPolicyResp';
import { WorkflowStepMetric } from './model/WorkflowStepMetric';
import { WorkflowStepPolicy } from './model/WorkflowStepPolicy';
import { WorkflowStorage } from './model/WorkflowStorage';
import { WorkflowSubgraph } from './model/WorkflowSubgraph';
import { WorkflowSubgraphResp } from './model/WorkflowSubgraphResp';
import { WorkflowTodo } from './model/WorkflowTodo';
import { WorkflowUpdate } from './model/WorkflowUpdate';
import { Workload } from './model/Workload';
import { WorkloadListStatisticsStatistics } from './model/WorkloadListStatisticsStatistics';
import { WorkloadNodeVO } from './model/WorkloadNodeVO';
import { WorkloadResourceRequirement } from './model/WorkloadResourceRequirement';
import { WorkloadStatistics } from './model/WorkloadStatistics';
import { WorkloadStatisticsStatus } from './model/WorkloadStatisticsStatus';
import { WorkspaceQuotasResponse } from './model/WorkspaceQuotasResponse';
import { WorkspaceQuotasUpdateResponse } from './model/WorkspaceQuotasUpdateResponse';
import { WorkspaceResponse } from './model/WorkspaceResponse';
import { YamlTemplate } from './model/YamlTemplate';

export class ModelArtsClient {
    public static newBuilder(): ClientBuilder<ModelArtsClient> {
            let client = new ClientBuilder<ModelArtsClient>(newClient);
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
     * 计划事件授权接口用于为指定的计划事件分配或调整权限。该接口适用于以下场景：当创建新的计划事件、调整现有计划事件的权限设置或变更权限分配时，用户可通过此接口为指定的计划事件授予或修改权限。使用该接口的前提条件是计划事件已存在且用户具有管理员权限。授权操作完成后，计划事件的权限设置将被更新，相关变更将被记录以便审计。若计划事件不存在、用户无权限操作或授权信息格式不正确，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 计划事件授权
     * @param {string} eventId **参数解释**：计划事件ID，取值查询计划事件列表接口的event_id字段。 **约束限制**：不涉及。 **取值范围**：系统自动生成，只能以小写字母开头，数字、中划线组成，不能以中划线结尾，长度小于63 **默认取值**：不涉及。
     * @param {EventUpdate} acceptScheduledEventRequestBody **参数解释**：计划事件授权请求body参数。 **约束限制**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID，默认值为0，取值于查询workspaces列表的接口的id字段。 **约束限制**：系统自动生成，只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长度小于63个字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [workspaceId2] **参数解释**：工作空间ID，默认值为0，取值于查询workspaces列表的接口的id字段。 **约束限制**：系统自动生成，只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长度小于63个字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptScheduledEvent(acceptScheduledEventRequest?: AcceptScheduledEventRequest): Promise<AcceptScheduledEventResponse> {
        const options = ParamCreater().acceptScheduledEvent(acceptScheduledEventRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 动态挂载Notebook存储接口支持将存储动态挂载到运行中的Notebook实例的指定文件目录。调用该接口后，系统将在Notebook实例中**异步**挂载指定的存储实例，挂载完成后用户可在容器中以文件系统方式读写存储实例中的文件。若用户无权限访问指定实例或Notebook实例未运行，接口将返回相应的错误信息。
     * 
     * 支持的存储类型：
     * - **对象存储 OBS**：适合直接使用OBS桶作为持久化存储进行AI开发和探索场景，但小文件频繁读写性能较差，**模型训练，大文件解压等场景慎用，此类场景可能会导致Notebook文件操作卡顿**。
     * - **并行文件系统 PFS**：高性能对象存储文件系统，存储成本低，吞吐量大，能够快速处理高性能计算（HPC）工作负载，**但小文件频繁读写较弱。小文件频繁读写场景可能会导致Notebook文件操作卡顿**
     * - **高性能弹性文件服务SFS Turbo**：仅支持专属资源池实例挂载，**挂载前需要在资源池网络管理界面中进行网络关联**，支持多个环境使用，可以在多个开发环境、开发环境和训练之间共享。适合探索、实验等非正式生产场景，但不适合重IO读写模型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 动态挂载Notebook存储
     * @param {string} instanceId **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {DataVolumesReq} dynamicMountReqest **参数解释**：动态挂载请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachDynamicStorage(attachDynamicStorageRequest?: AttachDynamicStorageRequest): Promise<AttachDynamicStorageResponse> {
        const options = ParamCreater().attachDynamicStorage(attachDynamicStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于将生成的多个apikey与指定服务进行批量绑定，用于访问特定服务。调用此接口前，确保已成功创建服务实例，并获取到有效的apikey。绑定成功后，apikey将作为服务调用时的身份验证凭证，确保仅授权用户能够访问该服务。如果尝试绑定已失效或已绑定当前服务的apikey将返回相应的异常信息，提示用户检查apikey的有效性和绑定状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量绑定应用密钥
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及 **取值范围：** 服务ID **默认取值：** 不涉及
     * @param {Array<BatchBindApiKeyRequestKeyIds>} keyIds **参数解释：** 请求批量绑定的api-key的id数组。 **约束限制：** 请求批量绑定api-key的id个数不超过10个。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchBindInferApiKeys(batchBindInferApiKeysRequest?: BatchBindInferApiKeysRequest): Promise<BatchBindInferApiKeysResponse> {
        const options = ParamCreater().batchBindInferApiKeys(batchBindInferApiKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量为节点绑定逻辑子池接口用于在物理专属池开启节点绑定功能时，对逻辑子池中的节点进行逻辑子池的换绑操作。该接口适用于以下场景：当需要重新分配资源、调整业务负载或优化资源使用效率时，用户可通过此接口将指定节点从当前逻辑子池迁移到另一个逻辑子池。使用该接口的前提条件是物理专属池已开启节点绑定功能，且目标逻辑子池已存在并具备足够的资源容量。绑定操作完成后，节点将从原逻辑子池解绑并绑定到目标逻辑子池，原逻辑子池的节点数减少，目标逻辑子池的节点数增加。若节点未绑定到任何逻辑子池、目标逻辑子池不存在或资源不足，或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量为节点绑定逻辑子池
     * @param {string} poolName **参数解释**： 资源池ID。取值资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {BatchBindPoolNodesReq} batchBindPoolNodesRequestBody **参数解释**：批量换绑节点的请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchBindPoolNodes(batchBindPoolNodesRequest?: BatchBindPoolNodesRequest): Promise<BatchBindPoolNodesResponse> {
        const options = ParamCreater().batchBindPoolNodes(batchBindPoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建资源池标签接口用于为指定资源池添加或更新多个标签信息。该接口适用于以下场景：当需要对资源池进行统一分类管理（如成本归属、环境标识）、批量配置元数据（如项目归属、负责人信息）或更新已有标签值时，管理员可通过此接口一次性操作多个标签。使用该接口的前提条件是目标资源池必须已存在且处于可管理状态，调用者需具备资源池标签管理权限，且提交的标签数据需符合格式规范（如key非空、value长度限制）。操作完成后，系统将为资源池添加新标签或覆盖同名标签的值，且不会影响资源池的其他配置属性。若资源池不存在、用户权限不足、标签格式错误或系统服务异常，接口将返回对应的错误信息（如\&quot;404 Not Found\&quot;、\&quot;403 Forbidden\&quot;、\&quot;400 Bad Request\&quot;或\&quot;503 Service Unavailable\&quot;）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建资源池标签
     * @param {string} poolName **参数解释**：资源池名称。取自资源池详情的metadata字段中的name的值。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {CreateTagRequest} createTagsRequest **参数解释**：创建标签请求body体。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreatePoolTags(batchCreatePoolTagsRequest?: BatchCreatePoolTagsRequest): Promise<BatchCreatePoolTagsResponse> {
        const options = ParamCreater().batchCreatePoolTags(batchCreatePoolTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于批量删除指定的内网接入点，适用于需要清理多个不再使用的内网接入点的场景。调用此接口前，确保已具备相应的删除权限，并提供一个有效的内网接入点ID列表。删除成功后，所指定的内网接入点将被彻底移除，不再对任何服务生效。如果提供的内网接入点ID列表中包含无效或已删除的ID，将返回相应的异常信息，提示用户检查ID的有效性。此外，如果调用时出现权限不足或其他系统异常，也将返回相应的异常信息，提示用户检查权限或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除内网接入
     * @param {IntranetConnectionDeleteRequest} batchDeleteInferIntranetConnectionsRequestBody **参数解释：** 内网接入id列表。 **约束限制：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInferIntranetConnections(batchDeleteInferIntranetConnectionsRequest?: BatchDeleteInferIntranetConnectionsRequest): Promise<BatchDeleteInferIntranetConnectionsResponse> {
        const options = ParamCreater().batchDeleteInferIntranetConnections(batchDeleteInferIntranetConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定服务列表功能允许用户批量删除多个服务，适用于需要清理资源、释放计算能力或管理多个服务的场景。使用此功能前，请确保您具备删除服务的权限，并提供有效的服务ID列表。成功执行后，指定的服务将被终止运行并释放相关资源。若服务ID无效、权限不足或服务状态不允许删除，将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定服务列表
     * @param {DeleteServicesRequest} batchDeleteInferServicesRequestBody **参数解释：** 待删除的服务id列表。 **约束限制：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInferServices(batchDeleteInferServicesRequest?: BatchDeleteInferServicesRequest): Promise<BatchDeleteInferServicesResponse> {
        const options = ParamCreater().batchDeleteInferServices(batchDeleteInferServicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除节点接口用于批量删除指定资源池中的节点。该接口适用于以下场景：当需要清理资源池中的冗余节点、重新分配资源或移除故障节点时，用户可通过此接口批量删除指定的节点。使用该接口的前提条件是资源池已创建且处于可用状态，用户具有删除节点的权限，且资源池中至少保留一个节点。删除操作完成后，指定的节点将被永久移除，资源池中剩余的节点将继续提供服务。若资源池不存在、节点不存在、用户无权限操作或资源池中节点不足，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除节点
     * @param {string} poolName **参数解释**： 资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {NodesDeletionRequest} deleteNodeNames **参数解释**： 待删除的节点名称列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePoolNodes(batchDeletePoolNodesRequest?: BatchDeletePoolNodesRequest): Promise<BatchDeletePoolNodesResponse> {
        const options = ParamCreater().batchDeletePoolNodes(batchDeletePoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除资源标签接口用于移除指定资源上的多个标签信息。该接口适用于以下场景：当需要清理冗余标签（如过期分类、无效元数据）、统一调整资源分类策略或因权限变更需批量移除标签时，管理员可通过此接口一次性删除多个标签。使用该接口的前提条件是目标资源必须已存在且处于可管理状态，调用者需具备资源标签管理权限，且待删除的标签必须已关联至该资源，系统标签管理服务需正常运行。操作完成后，指定标签将从资源中彻底移除，且不会影响资源的其他配置属性。若资源不存在、用户权限不足、标签未关联或系统服务异常，接口将返回对应的错误信息（如\&quot;404 Not Found\&quot;、\&quot;403 Forbidden\&quot;、\&quot;400 Bad Request\&quot;或\&quot;503 Service Unavailable\&quot;）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除资源池标签
     * @param {string} poolName **参数解释**：资源池名称。取自资源池详情的metadata字段中的name的值。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {DeleteTagRequest} deleteTagsRequest **参数解释**：删除服务标签请求体。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePoolTags(batchDeletePoolTagsRequest?: BatchDeletePoolTagsRequest): Promise<BatchDeletePoolTagsResponse> {
        const options = ParamCreater().batchDeletePoolTags(batchDeletePoolTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量对节点功能上锁接口用于批量对指定节点的功能进行上锁操作，被上锁的功能在控制台将无法正常使用。该接口适用于以下场景：当需要临时禁用某些节点的功能以防止误操作、进行系统维护或测试时，用户可通过此接口批量对节点功能进行上锁。使用该接口的前提条件是节点功能已存在且用户具有管理员权限。上锁操作完成后，指定节点的功能将在控制台被禁用，无法进行相关操作。若节点功能不存在、用户无权限操作或请求参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量对节点功能上锁
     * @param {string} poolName **参数解释**：资源池ID。取值资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {BatchLockPoolNodesRequestBody} batchLockPoolNodesRequestBody **参数解释**：节点加锁请求。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchLockPoolNodes(batchLockPoolNodesRequest?: BatchLockPoolNodesRequest): Promise<BatchLockPoolNodesResponse> {
        const options = ParamCreater().batchLockPoolNodes(batchLockPoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量迁移节点接口用于在资源池之间批量迁移节点，将节点从一个资源池迁移到另一个资源池。该接口适用于以下场景：当资源池的节点分布不均衡、需要进行集群维护或业务扩展时，用户可通过此接口将指定节点从一个资源池迁移到另一个资源池。使用该接口的前提条件是资源池中至少包含两个节点，且目标资源池具备足够的资源容量（如IP地址等）以接收迁移节点。若资源池只有一个节点、目标集群资源不足、节点状态不支持迁移或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量迁移节点
     * @param {string} poolName **参数解释**：资源池名称。该字段取自资源池metadata.name字段的值。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {NodeBatchMigrationRequest} batchMigratePoolNodesRequestBody **参数解释**：节点迁移任务的请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchMigratePoolNodes(batchMigratePoolNodesRequest?: BatchMigratePoolNodesRequest): Promise<BatchMigratePoolNodesResponse> {
        const options = ParamCreater().batchMigratePoolNodes(batchMigratePoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量重启节点接口用于批量重启指定资源池中的节点。该接口适用于以下场景：当需要对资源池中的节点进行系统更新、配置变更、故障恢复或维护操作时，用户可通过此接口批量重启指定的节点。使用该接口的前提条件是资源池已创建且处于可用状态，节点属于该资源池且处于运行状态，且用户具有重启节点的权限。重启操作完成后，指定的节点将被重新启动，资源池中的其他节点将继续正常运行。若资源池不存在、节点不在资源池中、节点未处于运行状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量重启节点
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {BatchRebootPoolNodesRequestBody} batchRebootPoolNodesRequestBody **参数解释**：待重启的节点名称列表。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRebootPoolNodes(batchRebootPoolNodesRequest?: BatchRebootPoolNodesRequest): Promise<BatchRebootPoolNodesResponse> {
        const options = ParamCreater().batchRebootPoolNodes(batchRebootPoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置节点接口用于将指定节点恢复到初始状态，清除节点上的数据和配置。该接口适用于以下场景：当节点出现故障、配置错误、需要重新部署或进行系统恢复时，用户可通过此接口重置节点，使其恢复到出厂或初始状态。使用该接口的前提条件是节点已存在且用户具有管理员权限。重置操作完成后，节点上的所有数据和配置将被清除，节点将被重新启动并恢复到初始状态。若节点不存在、用户无权限操作或节点处于不可重置状态（如正在运行任务），接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置节点
     * @param {string} poolName **参数解释**：资源池ID。取值资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {ResetNodesRequest} batchResetPoolNodesRequestBody **参数解释**：重置节点的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchResetPoolNodes(batchResetPoolNodesRequest?: BatchResetPoolNodesRequest): Promise<BatchResetPoolNodesResponse> {
        const options = ParamCreater().batchResetPoolNodes(batchResetPoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 节点规格变更接口用于调整指定节点的规格（如步长），例如将节点从8节点超节点扩容到16节点超节点。该接口适用于以下场景：当需要根据业务需求调整节点的资源容量、优化资源利用率或进行系统升级时，用户可通过此接口变更节点的规格。使用该接口的前提条件是节点已创建且处于可变更状态，目标规格在支持范围内，且用户具有管理员权限。规格变更完成后，节点的资源容量将按新规格调整，相关服务和配置将重新加载以适应新的规格。若节点不存在、节点状态不允许变更、目标规格不支持或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点规格变更
     * @param {string} poolName **参数解释**：资源池ID。取值资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {BatchResizeRequestBody} batchResizePoolNodesRequestBody **参数解释**： 超节点扩缩容的请求体。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchResizePoolNodes(batchResizePoolNodesRequest?: BatchResizePoolNodesRequest): Promise<BatchResizePoolNodesResponse> {
        const options = ParamCreater().batchResizePoolNodes(batchResizePoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于将已绑定的apikey从指定服务中批量解绑，适用于需要撤销多个apikey对特定服务的访问权限的场景。调用此接口前，确保已获取到需要解绑的多个apikey，并确认这些apikey当前绑定在指定服务上。解绑成功后，这些apikey将不再对指定服务生效，但仍可继续用于其他服务。如果尝试解绑不存在或未绑定到指定服务的apikey，将返回相应的异常信息，提示用户检查apikey的有效性和绑定状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量解绑应用密钥
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {Array<BatchUnBindApiKeyRequestKeyIds>} keyIds **参数解释：** 请求批量解绑的api-key的id数组。 **约束限制：** 请求批量解绑api-key的id个数不超过10个。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUnbindInferApiKeys(batchUnbindInferApiKeysRequest?: BatchUnbindInferApiKeysRequest): Promise<BatchUnbindInferApiKeysResponse> {
        const options = ParamCreater().batchUnbindInferApiKeys(batchUnbindInferApiKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量对节点功能解锁接口用于批量解除指定节点功能的锁定状态，使被上锁的功能在控制台恢复正常可用状态。该接口适用于以下场景：当需要恢复被锁定的节点功能以正常使用、完成系统维护或测试后，用户可通过此接口批量对节点功能进行解锁。使用该接口的前提条件是节点功能已被上锁且用户具有管理员权限。解锁操作完成后，指定节点的功能将在控制台恢复正常，用户可以正常使用相关功能。若节点功能未被锁定、用户无权限操作或请求参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量对节点功能解锁
     * @param {string} poolName **参数解释**：资源池ID。取值资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {BatchLockPoolNodesRequestBody} batchUnlockPoolNodesRequestBody **参数解释**：节点解锁请求。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUnlockPoolNodes(batchUnlockPoolNodesRequest?: BatchUnlockPoolNodesRequest): Promise<BatchUnlockPoolNodesResponse> {
        const options = ParamCreater().batchUnlockPoolNodes(batchUnlockPoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新节点接口用于同时修改多个节点的配置或属性，支持批量操作时各节点独立执行更新流程。该接口适用于以下场景：当用户需统一升级节点软件版本、批量处理选中节点的资源标签、调整资源分配策略、应用安全补丁或同步配置变更时，可通过此接口批量更新目标节点，确保每个节点的更新过程互不影响。使用该接口的前提条件包括：目标节点已存在且用户具备管理员权限，节点需处于可操作状态（如非锁定或维护中），批量操作时需提供有效的节点列表及更新参数（如配置项、版本号等）作为输入。操作完成后，指定节点将应用新配置并更新状态为可用，原有配置将被覆盖。若节点不存在、用户权限不足、节点状态异常（如正在维护）、更新参数不合规或输入参数缺失，接口将返回对应错误信息（如404未找到节点、403权限拒绝、400参数校验失败等）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新节点
     * @param {string} poolName **参数解释**：资源池ID。取值资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {BatchUpdatePoolNodesRequestBody} batchUpdatePoolNodesRequestBody **参数解释**：批量更新节点的请求体 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdatePoolNodes(batchUpdatePoolNodesRequest?: BatchUpdatePoolNodesRequest): Promise<BatchUpdatePoolNodesResponse> {
        const options = ParamCreater().batchUpdatePoolNodes(batchUpdatePoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于将生成的apikey与指定服务进行绑定，适用于应用程序需要调用特定服务的场景。调用此接口前，确保已成功创建服务实例，并获取到有效的apikey。绑定成功后，apikey将作为服务调用时的身份验证凭证，确保仅授权用户能够访问该服务。如果尝试绑定已失效的apikey，将返回相应的异常信息，提示用户检查apikey的有效性和绑定状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定应用密钥
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及 **取值范围：** 服务ID **默认取值：** 不涉及
     * @param {string} keyId **参数解释：** apikey_id，在[创建API_KEY](CreateInferApiKey.xml)时即可在返回体中获取，也可通过[查询api-keys列表](ListInferApiKeys.xml)获取当前用户拥有的apikey，其中key_id字段即为apikey_id。 **约束限制：** 不涉及 **取值范围：** apikey_id只能由英文小写字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public bindInferApiKey(bindInferApiKeyRequest?: BindInferApiKeyRequest): Promise<BindInferApiKeyResponse> {
        const options = ParamCreater().bindInferApiKey(bindInferApiKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 中断服务部署接口用于中断处于“升级中”或“部署中”状态的部署，使其快速停止。该接口适用于以下场景：当部署出现严重故障需要立即修复、资源需要快速释放以部署更高优先级的部署，或在测试环境中需要快速迭代时，用户可通过此接口中断指定部署。使用该接口的前提条件是部署当前状态为“升级中”或“部署中”，且用户具有中断部署的权限。若部署为“部署中”状态，执行中断操作，部署状态将变成“停止”，相关资源将被释放，且终端操作将被记录；若部署为“升级中”状态，执行中断操作，部署状态将变成“运行中”。若部署当前状态不是“升级中”或“部署中”，若用户无权限操作，接口将返回相应的错误信息。若部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 中断服务部署
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelInferDeployment(cancelInferDeploymentRequest?: CancelInferDeploymentRequest): Promise<CancelInferDeploymentResponse> {
        const options = ParamCreater().cancelInferDeployment(cancelInferDeploymentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新算法。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新算法
     * @param {string} algorithmId 算法ID。
     * @param {Algorithm} body 更新算法的请求体，其中metadata中的name为必填字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeAlgorithm(changeAlgorithmRequest?: ChangeAlgorithmRequest): Promise<ChangeAlgorithmResponse> {
        const options = ParamCreater().changeAlgorithm(changeAlgorithmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过实验ID更新训练实验信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新训练实验信息
     * @param {string} experimentId 训练实验ID。在训练作业创建时获取实验ID。
     * @param {ChangeTrainingExperimentRequestBody} [changeTrainingExperimentRequestBody] 训练作业试验信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeTrainingExperiment(changeTrainingExperimentRequest?: ChangeTrainingExperimentRequest): Promise<ChangeTrainingExperimentResponse> {
        const options = ParamCreater().changeTrainingExperiment(changeTrainingExperimentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新训练作业描述。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新训练作业描述
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {JobDescription} body 更新训练作业描述的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeTrainingJobDescription(changeTrainingJobDescriptionRequest?: ChangeTrainingJobDescriptionRequest): Promise<ChangeTrainingJobDescriptionResponse> {
        const options = ParamCreater().changeTrainingJobDescription(changeTrainingJobDescriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验训练实验名称接口用于新增训练实验前校验训练实验名称是否重复。
     * 该接口适用于以下场景：当用户需要创建新的训练实验时，可以通过此接口校验定义的实验名称是否已存在。使用该接口的前提条件是用户具有创建实验的权限。查询操作完成后，将返回实验名称是否重复的结果。若用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验训练实验名称
     * @param {string} experimentName **参数解释**：实验名称。 **约束限制**：最大长度64，不支持特殊字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID。获取方法请参见[查询工作空间列表](ListWorkspace.xml)。 **约束限制**：存在并使用的工作空间。 **取值范围**：不涉及。 **默认取值**：“0”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkTrainingExperiment(checkTrainingExperimentRequest?: CheckTrainingExperimentRequest): Promise<CheckTrainingExperimentResponse> {
        const options = ParamCreater().checkTrainingExperiment(checkTrainingExperimentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要统计和获取符合特定标签或资源名称条件的资源数量的场景，例如在资源管理和监控中，用户可以通过指定标签或资源名称进行精确或模糊查询来统计资源数量。通过调用此接口，用户可以基于多个标签或资源名称进行查询，若不传标签则返回所有资源的总数。用户必须具有足够的权限，且目标资源需存在。查询成功后，返回符合条件的资源总数；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过标签查询资源数量
     * @param {QueryTmsResourceCountRequest} countInferServicesByTagsRequestBody **参数解释：** 通过标签查询资源总量请求体。 **约束限制：** 不涉及。
     * @param {string} [workspaceId] **参数解释：** 工作空间ID，workspaceId将会被设置为null。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countInferServicesByTags(countInferServicesByTagsRequest?: CountInferServicesByTagsRequest): Promise<CountInferServicesByTagsResponse> {
        const options = ParamCreater().countInferServicesByTags(countInferServicesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个算法。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建算法
     * @param {Algorithm} body 创建算法的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlgorithm(createAlgorithmRequest?: CreateAlgorithmRequest): Promise<CreateAlgorithmResponse> {
        const options = ParamCreater().createAlgorithm(createAlgorithmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建发布算法资产接口用于在算法管理中创建并发布新的算法资产。
     * 该接口适用于以下场景：当用户开发完成新的算法并希望将其发布为可复用的算法资产时，可以通过此接口创建并发布算法资产。使用该接口的前提条件是用户已登录且具有创建和发布算法资产的权限。创建发布操作完成后，系统将生成新的算法资产，并将其添加到算法资产列表中，用户可以通过算法ID进行管理和调用。若用户无权限操作、算法资产信息不完整或已存在相同名称的算法资产，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建发布算法资产
     * @param {CreateAlgorithmVersionToGalleryBody} createAlgorithmVersionToGalleryRequestBody **参数解释**：创建发布算法资产请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlgorithmVersionToGallery(createAlgorithmVersionToGalleryRequest?: CreateAlgorithmVersionToGalleryRequest): Promise<CreateAlgorithmVersionToGalleryResponse> {
        const options = ParamCreater().createAlgorithmVersionToGallery(createAlgorithmVersionToGalleryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置授权接口用于配置ModelArts的授权。该接口适用于以下场景：当需要为IAM子用户设置访问ModelArts的权限时，管理员可通过此接口配置授权。使用该接口的前提条件是管理员具备IAM系统的Security Administrator权限，并且需要为子用户设置访问密钥。配置完成后，子用户将被授予访问ModelArts资源的权限，从而能够正常使用训练管理、开发环境、数据管理、在线服务等功能。若管理员无权限操作或子用户不存在，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置授权
     * @param {AuthorizationRequest} createAuthorizationRequestBody **参数解释**：配置授权请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuthorization(createAuthorizationRequest?: CreateAuthorizationRequest): Promise<CreateAuthorizationResponse> {
        const options = ParamCreater().createAuthorization(createAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在系统中创建一个新的API_KEY，适用于需要为用户或应用程序生成访问凭证的场景。调用此接口前，确保已具备相应的创建权限，并提供必要的参数，如用户ID或应用程序ID。创建成功后，系统将生成一个唯一的API_KEY，并返回该API_KEY的详细信息，包括API_KEY值、创建时间等。如果提供的参数无效或系统中已存在相同的API_KEY，将返回相应的异常信息，提示用户检查输入数据的有效性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用密钥
     * @param {CreateApiKeyReq} createInferApiKeyRequestBody **参数解释：** 创建api-key的请求体。 **约束限制：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInferApiKey(createInferApiKeyRequest?: CreateInferApiKeyRequest): Promise<CreateInferApiKeyResponse> {
        const options = ParamCreater().createInferApiKey(createInferApiKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将模型部署为在线服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加部署
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {GroupConfig} createInferDeploymentRequestBody **参数解释：** 创建服务请求体。 **取值范围：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInferDeployment(createInferDeploymentRequest?: CreateInferDeploymentRequest): Promise<CreateInferDeploymentResponse> {
        const options = ParamCreater().createInferDeployment(createInferDeploymentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在指定Region中创建内网接入点，适用于需要为应用程序或服务配置内网连接的场景。调用此接口前，确保已具备相应的创建权限，并提供必要的参数，如Region ID、内网接入点名称和网络配置信息。创建成功后，系统将生成一个内网接入点，并返回该接入点的详细信息，包括接入点ID、创建时间、状态等。如果提供的参数无效或内网接入配置冲突，将返回相应的异常信息，提示用户检查输入数据的有效性和配置冲突情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建内网接入
     * @param {IntranetConnectionRequest} createInferIntranetConnectionRequestBody **参数解释：** 创建内网申请请求体。 **约束限制：** 不涉及。  **取值范围：** 不涉及。  **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInferIntranetConnection(createInferIntranetConnectionRequest?: CreateInferIntranetConnectionRequest): Promise<CreateInferIntranetConnectionResponse> {
        const options = ParamCreater().createInferIntranetConnection(createInferIntranetConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将模型部署为在线服务，适用于用户在开发或运维过程中需要将训练好的模型部署为在线服务，以便通过API或HTTP接口提供预测或处理能力的场景。调用此接口前，用户必须具有创建服务的权限，并提供合法的模型镜像路径和完整的服务配置信息（如服务名称、模型镜像路径、资源配置、升级配置等）。调用成功后，系统将成功创建并部署服务，服务状态变为“部署中”，并生成服务的唯一ID返回给用户。服务的详细信息（如状态、创建时间、更新时间等）也会记录在系统中。如果用户没有创建服务的权限，或提供的模型镜像路径不合法，或服务配置信息不完整，调用将返回相应的错误信息。如果系统在部署过程中遇到资源不足或其他内部错误，也将返回错误信息并记录日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务
     * @param {ServiceCreateRequest} createInferServiceRequestBody **参数解释：** 创建服务请求体。 **取值范围：** 不涉及。
     * @param {string} [xAuthTokenProvider] **参数解释：** 服务提供者的domain级或project级Token，创建服务携带该请求头时，系统将解析该token并将账号id保存为服务的提供者即provider，该服务将被系统保护，仅携带该提供者的domain级或project级Token的更新操作允许执行。[通过调用IAM服务获取用户Token接口获取响应消息头中X-Subject-Token的值。](tag:hws,hws_hk)获取方法请参见[[获取IAM用户Token（使用密码）](modelarts_03_0004.xml)](tag:hws,hws_hk)[[获取Token](modelarts_03_0015.xml)](tag:hcs,hcs_sm)。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInferService(createInferServiceRequest?: CreateInferServiceRequest): Promise<CreateInferServiceResponse> {
        const options = ParamCreater().createInferService(createInferServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要为资源（如模型、数据集、服务等）添加元数据标签的场景，例如在资源管理或分类中，用户可以通过添加标签来标注资源的用途、状态或其他属性。通过调用此接口，用户可以批量添加标签，如果标签key已存在，则更新其value。用户必须具有足够的权限，且目标资源需存在。添加成功后，资源将包含新的标签信息；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加标签
     * @param {string} resourceId **参数解释：** 待创建标签的资源ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [workspaceId] **参数解释：** 工作空间ID，workspaceId将会被设置为null。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInferServiceTag(createInferServiceTagRequest?: CreateInferServiceTagRequest): Promise<CreateInferServiceTagResponse> {
        const options = ParamCreater().createInferServiceTag(createInferServiceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建ModelArts委托接口用于创建包含OBS、SWR、IEF等依赖服务的ModelArts委托。该接口适用于以下场景：当需要配置ModelArts访问OBS、SWR、IEF等服务的权限时，用户可通过此接口创建委托。使用该接口的前提条件是用户具备创建委托的权限，并且需要在IAM系统中具备相应的权限。创建完成后，ModelArts将被授权访问OBS、SWR、IEF等服务，从而能够正常执行数据存储、镜像拉取、模型部署等功能。若用户无权限创建委托或依赖服务未配置，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建ModelArts委托
     * @param {ModelArtsAgencyRequest} createModelArtsAgencyRequestBody **参数解释**：创建委托请求体 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createModelArtsAgency(createModelArtsAgencyRequest?: CreateModelArtsAgencyRequest): Promise<CreateModelArtsAgencyResponse> {
        const options = ParamCreater().createModelArtsAgency(createModelArtsAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建网络资源接口用于在系统中创建新的网络资源。该接口适用于以下场景：当需要为业务扩展、资源规划或网络架构调整时，用户可通过此接口创建新的网络资源，如虚拟网络、子网或路由等。使用该接口的前提条件是用户具有管理员权限，并且系统中具备足够的资源支持新网络资源的创建。创建操作完成后，新的网络资源将被成功添加到系统中，并可用于后续的业务配置。若用户无权限、资源不足或输入参数有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建网络资源
     * @param {NetworkCreationRequest} body 创建网络资源的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNetwork(createNetworkRequest?: CreateNetworkRequest): Promise<CreateNetworkResponse> {
        const options = ParamCreater().createNetwork(createNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建节点池接口用于创建新的节点池。该接口适用于以下场景：当需要扩展计算资源、优化资源分配或部署新的服务时，用户可通过此接口创建指定配置的节点池。使用该接口的前提条件是用户具有管理员权限且节点池的配置参数（如节点数量、规格、网络配置等）已正确设置。创建操作完成后，节点池将被成功创建并处于可用状态，相关节点信息将被记录。若用户无权限操作、配置参数错误或系统资源不足，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建节点池
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {CreateNodePoolRequestBody} createNodePoolRequestBody 创建节点池的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNodePool(createNodePoolRequest?: CreateNodePoolRequest): Promise<CreateNodePoolResponse> {
        const options = ParamCreater().createNodePool(createNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建资源池订单ID接口用于生成资源池申请的订单标识。该接口适用于以下场景：当用户需要申请新资源池时（如业务扩展、资源不足或临时资源需求），可通过此接口提交按需转包周期订单的创建请求。使用该接口的前提条件是用户需具备资源申请权限，提交的资源池配置参数（如资源类型、容量、周期等）需符合系统校验规则，且当前仅支持按需转包周期订单类型。订单创建成功后，系统将生成唯一订单ID并触发后续资源分配流程，同时记录操作日志。若用户权限不足、配置参数缺失/冲突（如容量超出配额）、订单类型不支持或系统资源不足，接口将返回对应错误码及提示信息，且不会生成订单ID或占用资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源池的订单id
     * @param {string} name **参数解释**：资源池ID。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [actionType] **参数解释**：订单操作类型。 **约束限制**：不涉及。 **取值范围**：可选值如下： - toPeriod：按需转包周期，默认值 **默认取值**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID，默认是0。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {CreateOrderRequestBody} [createOrderRequestBody] **参数解释**：创建订单的请求体。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrderId(createOrderIdRequest?: CreateOrderIdRequest): Promise<CreateOrderIdResponse> {
        const options = ParamCreater().createOrderId(createOrderIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建资源池接口用于在系统中创建新的资源池。该接口适用于以下场景：当需要为新业务分配资源、优化资源管理或进行资源隔离时，用户可通过此接口创建新的资源池，用于管理计算、存储、网络等资源。使用该接口的前提条件是用户具有管理员权限，并且系统中具备足够的资源支持新资源池的创建。创建操作完成后，新的资源池将被成功添加到系统中，并处于可用状态，可支持后续的资源分配和管理。若用户无权限、系统资源不足或输入参数有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源池
     * @param {CreatePoolRequestBody} createPoolRequestBody **参数解释**：创建资源池的请求体。
     * @param {string} [xModelArtsUserID] **参数解释**：实际的外部租户ID，如果有的话，工作空间鉴权以该ID为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPool(createPoolRequest?: CreatePoolRequest): Promise<CreatePoolResponse> {
        const options = ParamCreater().createPool(createPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建插件实例接口用于在系统中创建一个新的插件实例。该接口适用于以下场景：当需要扩展系统功能、部署新的插件、更新现有插件配置或测试插件时，用户可通过此接口创建指定插件的实例。使用该接口的前提条件是插件已存在且用户具有管理员权限或插件管理权限。创建操作完成后，插件实例将被成功创建并处于可用状态，相关配置信息将被记录。若插件不存在、用户无权限操作、配置参数错误或系统资源不足，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建插件
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {CreatePluginRequestBody} createPoolPluginRequestBody **参数解释**：创建插件实例的请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPoolPlugin(createPoolPluginRequest?: CreatePoolPluginRequest): Promise<CreatePoolPluginResponse> {
        const options = ParamCreater().createPoolPlugin(createPoolPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建训练作业镜像保存任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建训练作业镜像保存任务
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {string} taskId 训练作业的任务名称。可从训练作业详情中的status.tasks字段中获取。
     * @param {ImageSaveJob} createSaveImageJobRequestBody 镜像保存任务的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSaveImageJob(createSaveImageJobRequest?: CreateSaveImageJobRequest): Promise<CreateSaveImageJobResponse> {
        const options = ParamCreater().createSaveImageJob(createSaveImageJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建训练作业标签，支持批量添加，当添加的标签key已存在，则覆盖该标签的value。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建训练作业标签
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {CreateTmsTagsRequest} tags key不能重复，key已存在时覆盖原有value值。作业最大标签数与环境配置有关，默认20。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrainJobTags(createTrainJobTagsRequest?: CreateTrainJobTagsRequest): Promise<CreateTrainJobTagsResponse> {
        const options = ParamCreater().createTrainJobTags(createTrainJobTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建训练实验接口用于在ModelArts平台上创建新的实验分类。
     * 该接口适用于以下场景：当用户需要将训练作业放入实验中分类，有序地进行管理，可以通过此接口创建训练实验，常用于多任务的版本管理等场景。使用该接口的前提条件是用户已登录ModelArts平台并具有创建训练实验的权限。创建操作完成后，系统将返回训练实验的详细信息，包括实验ID、当前实验下的训练作业总个数等。若用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建训练实验
     * @param {CreateTrainingExperimentRequestBody} [createTrainingExperimentRequestBody] **参数解释**：创建训练作业试验信息。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrainingExperiment(createTrainingExperimentRequest?: CreateTrainingExperimentRequest): Promise<CreateTrainingExperimentResponse> {
        const options = ParamCreater().createTrainingExperiment(createTrainingExperimentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建训练作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建训练作业
     * @param {Job} body 创建训练作业的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrainingJob(createTrainingJobRequest?: CreateTrainingJobRequest): Promise<CreateTrainingJobResponse> {
        const options = ParamCreater().createTrainingJob(createTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建工作空间（\&quot;default\&quot;为系统预留的默认工作空间名称，不能使用）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建工作空间
     * @param {CreateWorkspaceReq} createWorkspaceRequestBody 创建工作空间的请求体参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkspace(createWorkspaceRequest?: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
        const options = ParamCreater().createWorkspace(createWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除算法。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除算法
     * @param {string} algorithmId 算法ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlgorithm(deleteAlgorithmRequest?: DeleteAlgorithmRequest): Promise<DeleteAlgorithmResponse> {
        const options = ParamCreater().deleteAlgorithm(deleteAlgorithmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除授权接口用于删除指定用户的授权或删除全量用户的授权。该接口适用于以下场景：当需要撤销特定用户的访问权限或在系统维护时清理所有用户的授权时，管理员可通过此接口删除指定用户的授权或全量用户的授权。使用该接口的前提条件是管理员具备删除授权的权限，并且需要指定要删除授权的用户或选择删除全量用户的授权。删除操作完成后，指定用户的授权将被移除，或所有用户的授权将被清空，用户将无法再访问相关功能。若用户不存在、管理员无权限操作或删除全量授权时系统检测到无管理员权限，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除授权
     * @param {string} [userId] **参数解释**：用户ID，当user_id为all时，表示删除所有IAM子用户的授权。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuthorizations(deleteAuthorizationsRequest?: DeleteAuthorizationsRequest): Promise<DeleteAuthorizationsResponse> {
        const options = ParamCreater().deleteAuthorizations(deleteAuthorizationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像接口用于删除镜像对象，对于个人私有镜像可以通过参数一并删除SWR镜像内容。该接口适用于以下场景：当镜像不再需要、配置错误或需要清理资源时，用户可通过此接口删除指定的镜像对象。使用该接口的前提条件是镜像已存在且用户具有删除权限。删除操作完成后，镜像对象将被永久移除，相关资源和配置也将被清理。若镜像不存在、用户无权限操作或镜像正在被使用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像
     * @param {string} id **参数解释**：镜像ID，ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {DeleteImageRequestBody} [deleteImageRequestBody] **参数解释**：删除在SWR的镜像内容，仅对于个人私有镜像有效。 **约束限制**：不涉及。 **取值范围**：布尔类型： - true：删除镜像内容。 - false：不删除镜像内容。  **默认取值**：false。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImage(deleteImageRequest?: DeleteImageRequest): Promise<DeleteImageResponse> {
        const options = ParamCreater().deleteImage(deleteImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像组接口用于删除镜像组内所有的版本对象，对于个人私有镜像可以通过参数一并删除SWR镜像内容。该接口适用于以下场景：当镜像不再需要、配置错误或需要清理资源时，用户可通过此接口删除指定的镜像组对象内所有版本。使用该接口的前提条件是镜像组已存在且用户具有删除权限。删除操作完成后，镜像组内所有版本对象将被永久移除，相关资源和配置也将被清理。若镜像组不存在、用户无权限操作或镜像正在被使用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像组
     * @param {string} id **参数解释**：镜像组ID，ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {DeleteImageGroupRequestBody} [deleteImageGroupRequestBody] **参数解释**：删除镜像组请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImageGroup(deleteImageGroupRequest?: DeleteImageGroupRequest): Promise<DeleteImageGroupResponse> {
        const options = ParamCreater().deleteImageGroup(deleteImageGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于删除指定的apikey，适用于管理员需要撤销对某个应用程序或用户的访问权限的场景。调用此接口前，确保已获取到需要删除的apikey，并确认apikey未在其他服务中使用。删除成功后，该apikey将无法再用于访问任何相关服务。如果尝试删除不存在或已删除的apikey，将返回相应的异常信息，提示用户检查apikey的有效性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用密钥
     * @param {string} keyId **参数解释：** apikey_id，在[创建API_KEY](CreateInferApiKey.xml)时即可在返回体中获取，也可通过[查询api-keys列表](ListInferApiKeys.xml)获取当前用户拥有的apikey，其中key_id字段即为apikey_id。 **约束限制：** 不涉及。 **取值范围：** apikey_id只能由英文小写字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInferApiKey(deleteInferApiKeyRequest?: DeleteInferApiKeyRequest): Promise<DeleteInferApiKeyResponse> {
        const options = ParamCreater().deleteInferApiKey(deleteInferApiKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于删除服务的某个部署。若服务ID、部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务部署
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInferDeployment(deleteInferDeploymentRequest?: DeleteInferDeploymentRequest): Promise<DeleteInferDeploymentResponse> {
        const options = ParamCreater().deleteInferDeployment(deleteInferDeploymentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于删除指定的单个部署的实例，适用于需要清理或释放不再使用的部署实例资源的场景。调用此接口前，确保已具备相应的删除权限，并提供有效的服务实例ID、部署ID。删除成功后，指定的服务部署实例将被彻底移除，不再对任何请求生效。如果提供的服务实例ID、部署ID无效、服务实例已删除或权限不足，将返回相应的异常信息，提示用户检查输入数据的有效性和权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务部署的实例
     * @param {string} id **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentName **参数解释：** 部署名称。
     * @param {string} name **参数解释：** 服务实例名字，可以为all，为all时去查询所有的服务实例。 **约束限制：** 不涉及。 **取值范围：** 服务实例名字。 **默认取值：** 不涉及。
     * @param {boolean} [force] **参数解释：** 是否强制删除。 **约束限制：** 不涉及。 **取值范围：** - true：强制删除。 - false：不强制删除。 **默认取值：** false。
     * @param {string} [operation] **参数解释：** 删除操作类型。 **约束限制：** 枚举值。 **取值范围：** - DELETE：直接删除，释放资源。 - RECREATE：删除后重建。 **默认取值：** RECREATE。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInferDeploymentInstance(deleteInferDeploymentInstanceRequest?: DeleteInferDeploymentInstanceRequest): Promise<DeleteInferDeploymentInstanceResponse> {
        const options = ParamCreater().deleteInferDeploymentInstance(deleteInferDeploymentInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于删除指定的单个Pod，适用于需要清理或释放不再使用的Pod资源的场景。调用此接口前，确保已具备相应的删除权限，并提供有效的Pod ID。删除成功后，指定的Pod将被彻底移除，不再对任何服务请求生效。如果提供的Pod ID无效、Pod已删除或权限不足，将返回相应的异常信息，提示用户检查输入数据的有效性和权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Pod
     * @param {string} id **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentName **参数解释：** 部署名称，在创建部署时即可在返回体中获取，也可通过查询服务部署列表获取当前用户拥有的部署，其name字段即为部署名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} instanceName **参数解释：** 服务实例名字，可以为all，为all时去查询所有的服务实例。 **约束限制：** 不涉及。 **取值范围：** 服务实例名字。 **默认取值：** 不涉及。
     * @param {string} name **参数解释：** 服务实例pod名字，可以为all，为all时去查询所有的服务实例。 **约束限制：** 不涉及。 **取值范围：** 服务实例名字。 **默认取值：** 不涉及。
     * @param {boolean} [force] **参数解释：** 是否强制删除。 **约束限制：** 不涉及。 **取值范围：** - true：是，强制删除 - false：否，不强制删除 **默认取值：** false。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInferDeploymentPod(deleteInferDeploymentPodRequest?: DeleteInferDeploymentPodRequest): Promise<DeleteInferDeploymentPodResponse> {
        const options = ParamCreater().deleteInferDeploymentPod(deleteInferDeploymentPodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于删除指定服务部署的某个在线版本，适用于需要清理不再使用的版本或优化资源管理的场景。
     * 请求需包含有效的服务ID、部署ID及版本号。用户必须具有对目标服务部署的管理权限，并且该版本当前未处于活跃状态。
     * 删除成功后，指定版本将从在线服务部署中移除，相关资源将被释放。
     * 若服务ID、部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；若版本处于活跃状态或有其他依赖，则返回400 Bad Request。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除在线服务部署版本
     * @param {string} serviceId **参数解释：** 服务ID，在创建服务时即可在返回体中获取，也可通过查询服务列表接口获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} version **参数解释：** 版本号，可通过查询version列表查询。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} deploymentId 参数解释： 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 约束限制： 不涉及。 取值范围： 部署ID。 默认取值： 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInferDeploymentVersion(deleteInferDeploymentVersionRequest?: DeleteInferDeploymentVersionRequest): Promise<DeleteInferDeploymentVersionResponse> {
        const options = ParamCreater().deleteInferDeploymentVersion(deleteInferDeploymentVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要从资源（如模型、数据集、服务等）中移除特定标签的场景，例如在资源管理或分类中，用户可以通过删除标签来调整或清理资源的元数据。通过调用此接口，用户可以批量删除指定的标签。用户必须具有足够的权限，且目标资源需存在。删除成功后，资源将不再包含指定的标签信息；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceId **参数解释：** 待创建标签的资源ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {DeleteInferTmsTagsRequest} deleteInferServiceTagRequestBody **参数解释：** 删除服务标签请求体。 **约束限制：** 不涉及。
     * @param {string} [workspaceId] **参数解释：** 工作空间ID，workspaceId将会被设置为null。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInferServiceTag(deleteInferServiceTagRequest?: DeleteInferServiceTagRequest): Promise<DeleteInferServiceTagResponse> {
        const options = ParamCreater().deleteInferServiceTag(deleteInferServiceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除网络资源接口用于移除指定的网络资源。该接口适用于以下场景：当网络资源不再需要、配置错误或需要清理资源时，用户可通过此接口删除指定的网络资源。使用该接口的前提条件是网络资源已存在且用户具有管理员权限。删除操作完成后，指定的网络资源将被永久移除，相关配置和关联关系也将被清理。若指定的网络资源不存在、用户无权限操作或资源被其他资源依赖，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除网络资源
     * @param {string} networkName **参数解释**：网络资源名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNetwork(deleteNetworkRequest?: DeleteNetworkRequest): Promise<DeleteNetworkResponse> {
        const options = ParamCreater().deleteNetwork(deleteNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除节点池接口用于移除已创建的节点池，包周期资源池不支持。该接口适用于以下场景：当节点池完成任务、配置错误或需要清理资源时，用户可通过此接口删除指定的节点池。使用该接口的前提条件是节点池已存在且用户具有管理员权限。删除操作完成后，节点池将被永久移除，相关资源和配置也将被清理。若节点池不存在、用户无权限操作或节点池处于不可删除状态（如包周期资源池或节点池正在使用中），接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除节点池
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} nodepoolName **参数解释**：节点池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNodePool(deleteNodePoolRequest?: DeleteNodePoolRequest): Promise<DeleteNodePoolResponse> {
        const options = ParamCreater().deleteNodePool(deleteNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源池接口用于移除指定的资源池。该接口适用于以下场景：当资源池不再需要、配置错误或需要清理资源时，用户可通过此接口删除指定的资源池。使用该接口的前提条件是资源池已存在且用户具有管理员权限。删除操作完成后，指定的资源池将被永久移除，相关资源和配置也将被清理。若资源池不存在、用户无权限操作或资源池被其他资源依赖，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源池
     * @param {string} poolName **参数解释**：系统生成的资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [xModelArtsUserID] **参数解释**：实际的外部租户ID，如果有的话，工作空间鉴权以该ID为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePool(deletePoolRequest?: DeletePoolRequest): Promise<DeletePoolResponse> {
        const options = ParamCreater().deletePool(deletePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除训练作业标签，支持批量删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除训练作业标签
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {DeleteTmsTagsRequest} tags 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrainJobTags(deleteTrainJobTagsRequest?: DeleteTrainJobTagsRequest): Promise<DeleteTrainJobTagsResponse> {
        const options = ParamCreater().deleteTrainJobTags(deleteTrainJobTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除训练实验接口用于移除已创建的训练实验。
     * 该接口适用于以下场景：当训练实验完成、配置错误或需要清理资源时，用户可以通过此接口删除指定的训练实验。使用该接口的前提条件是训练实验已存在且用户具有删除该实验的权限。删除操作完成后，训练实验将被永久移除，相关的配置和资源也将被清理。若训练实验不存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除训练实验
     * @param {string} experimentId **参数解释**：实验ID。创建训练实验时自动生成返回。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrainingExperiment(deleteTrainingExperimentRequest?: DeleteTrainingExperimentRequest): Promise<DeleteTrainingExperimentResponse> {
        const options = ParamCreater().deleteTrainingExperiment(deleteTrainingExperimentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除训练作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除训练作业
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrainingJob(deleteTrainingJobRequest?: DeleteTrainingJobRequest): Promise<DeleteTrainingJobResponse> {
        const options = ParamCreater().deleteTrainingJob(deleteTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除工作空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除工作空间
     * @param {string} workspaceId 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkspace(deleteWorkspaceRequest?: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse> {
        const options = ParamCreater().deleteWorkspace(deleteWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 动态卸载Notebook存储接口用于从运行中的Notebook实例中卸载已挂载的动态存储实例。
     * 
     * 适用场景：用户需要清理或重新组织Notebook实例的挂载资源时，可通过此接口卸载指定的存储实例。使用该接口的前提条件是用户已登录系统并具有访问目标Notebook实例的权限，同时Notebook实例必须处于运行状态且存储实例处于MOUNTED / UNMOUNT_FAILED / MOUNT_FAILED状态。调用该接口后，系统将卸载指定的存储实例，Notebook容器将无法再操作存储中的文件或对象，但存储中的文件或对象保持不变。若用户无权限访问指定实例或Notebook实例未运行，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 动态卸载Notebook存储
     * @param {string} instanceId **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} storageId **参数解释**：存储ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachDynamicStorage(detachDynamicStorageRequest?: DetachDynamicStorageRequest): Promise<DetachDynamicStorageResponse> {
        const options = ParamCreater().detachDynamicStorage(detachDynamicStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看授权列表接口用于查看授权信息。该接口适用于以下场景：当用户需要了解当前的授权情况、审核权限分配或管理权限时，可通过此接口查看授权列表。使用该接口的前提条件是用户具备查看授权的权限。查看操作完成后，将返回授权列表，包括被授权的资源、授权类型以及授权内容等信息。若用户无权限查看或授权列表不存在，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看授权列表
     * @param {'user_name' | 'create_time'} [sortBy] **参数解释**：指定排序字段。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - user_name：IAM用户名称。 - create_time：创建时间。 **默认取值**：user_name。
     * @param {'asc' | 'desc'} [order] **参数解释**：排序方式。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - ASC：递增排序。 - DESC：递减排序。 **默认取值**：ASC。
     * @param {number} [limit] **参数解释**：指定每一页返回的最大条目数。 **约束限制**：不涉及。 **取值范围**：[1,1000]。 **默认取值**：1000。
     * @param {number} [offset] **参数解释**：分页列表的起始页。 **约束限制**：不涉及。 **取值范围**：非负整数。 **默认取值**：0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAuthorizations(getAuthorizationsRequest?: GetAuthorizationsRequest): Promise<GetAuthorizationsResponse> {
        const options = ParamCreater().getAuthorizations(getAuthorizationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Operation详情接口用于获取指定Operation的详细信息。该接口适用于以下场景：当用户需要了解某个Operation的具体执行情况和状态，以便进行故障排查或操作审计时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询Operation详情的权限，且指定的Operation已存在。查询操作完成后，接口将返回指定Operation的详细信息，包括Operation ID、操作类型、执行状态、开始时间、结束时间、操作结果等。若用户无权限操作、指定的Operation不存在或Operation ID无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询超节点Operation详情
     * @param {string} id **参数解释**：Lite Server超节点实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} operationId **参数解释**：Operation ID。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getHyperinstanceOperation(getHyperinstanceOperationRequest?: GetHyperinstanceOperationRequest): Promise<GetHyperinstanceOperationResponse> {
        const options = ParamCreater().getHyperinstanceOperation(getHyperinstanceOperationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询算法列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询算法列表
     * @param {number} [offset] 查询算法的偏移量，最小为0。例如设置为1，则表示从第二条开始查。
     * @param {number} [limit] 查询算法的限制量。最小为1，最大为50。
     * @param {string} [sortBy] 查询算法排列顺序的指标。默认使用create_time排序。
     * @param {string} [order] 查询算法排列顺序，默认为“desc”，降序排序。也可以选择对应的“asc”，升序排序。
     * @param {string} [groupBy] 查询算法要搜索的分组条件。
     * @param {string} [searches] 查询算法所要过滤的条件，如算法名称模糊匹配。
     * @param {string} [workspaceId] 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlgorithms(listAlgorithmsRequest?: ListAlgorithmsRequest): Promise<ListAlgorithmsResponse> {
        const options = ParamCreater().listAlgorithms(listAlgorithmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于获取指定Notebook实例下挂载的动态存储信息列表。
     * 适用场景：用户需要获取指定Notebook实例下挂载的动态存储的存储id、存储类型、挂载路径、挂载状态等信息的场景。若挂载失败，会返回相应错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取动态挂载存储信息列表
     * @param {string} instanceId **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDynamicStorages(listDynamicStoragesRequest?: ListDynamicStoragesRequest): Promise<ListDynamicStoragesResponse> {
        const options = ParamCreater().listDynamicStorages(listDynamicStoragesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取事件类型列表接口用于获取训练管理中支持的事件类型列表。
     * 该接口适用于以下场景：当用户需要了解训练管理中支持的事件类型，以便在创建或管理训练任务时进行相关配置时，可以通过此接口获取事件类型列表。使用该接口的前提条件是用户已登录且具有访问训练管理的权限。获取操作完成后，响应消息体中将包含所有支持的事件类型及其描述。若用户无权限访问或系统中无事件类型信息，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取事件类型列表
     * @param {string} [flavorType] **参数解释**：规格类型 **约束限制**：不涉及。 **取值范围**：可选值如下： - CPU - GPU - Ascend  **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventCategories(listEventCategoriesRequest?: ListEventCategoriesRequest): Promise<ListEventCategoriesResponse> {
        const options = ParamCreater().listEventCategories(listEventCategoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件列表接口用于获取系统中记录的事件信息。该接口适用于以下场景：当用户需要监控系统状态、排查问题或进行审计时，可通过此接口查询系统中发生的事件记录。使用该接口的前提条件是用户具有相应的权限，并且系统中已存在事件记录。查询操作完成后，接口将返回事件列表，包含事件ID、类型、时间、描述等信息。若用户无权限、事件记录不存在或查询参数有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件列表
     * @param {string} resource **参数解释**：事件所属资源类型。可选值为pools，表示资源池。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} name **参数解释**：事件所属资源名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [limit] **参数解释**：单页查询最大数量，该值为空或者0时默认返回500条记录，单页最大允许查询500条记录。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [_continue] **参数解释**：分页查询的上一页标记，内容为UUID字符串，查询第一页时为空。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [since] **参数解释**：事件开始时间戳。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [until] **参数解释**：事件结束时间戳。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [type] **参数解释**：事件类型。 **约束限制**：不涉及。 **取值范围**：可选值如下： - Normal：正常 - Warning：异常 **默认取值**：不涉及。
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
     * 查询支持的镜像列表接口用于根据指定条件分页查询满足条件的所有镜像。该接口适用于以下场景：当用户需要查找特定镜像、管理镜像仓库或选择合适的镜像版本进行部署时，可通过此接口获取符合条件的镜像列表。使用该接口的前提条件是镜像仓库已存在且用户具有访问权限。查询操作完成后，将返回满足条件的镜像列表，包括镜像ID、名称、版本、类型、状态、大小和创建时间等详细信息。若镜像仓库不存在、用户无权限访问或查询条件有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询支持的镜像列表
     * @param {number} [limit] **参数解释**：每一页显示的镜像实例数量。 **约束限制**：不涉及。 **取值范围**：正整数。 **默认取值**：200。
     * @param {string} [name] **参数解释**：镜像名称。 **约束限制**：不涉及。 **取值范围**：长度限制为512个字符，支持小写字母、数字、中划线、下划线和点。 **默认取值**：不涉及。
     * @param {boolean} [nameFuzzyMatch] **参数解释**：镜像名称是否模糊匹配查询。 **约束限制**：不涉及。 **取值范围**：布尔类型： - true：支持模糊匹配查询。 - false：不支持模糊匹配查询。  **默认取值**：true。
     * @param {string} [namespace] **参数解释**：镜像所属组织，可以在SWR控制台“组织管理”创建和查看。 **约束限制**：不涉及。 **取值范围**：长度限制为64个字符，支持大小写字母、数字、中划线、下划线和点号，且必须是小写字母开头。 **默认取值**：不涉及。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：不涉及。 **取值范围**：非负整数。 **默认取值**：0。
     * @param {'COMMON' | 'DEV' | 'INFERENCE' | 'TRAIN' | 'UNKNOWN'} [serviceType] **参数解释**：镜像支持服务类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - COMMON：通用镜像。 - INFERENCE: 建议仅在推理部署场景使用。 - TRAIN: 建议仅在训练任务场景使用。 - DEV: 建议仅在开发调测场景使用。 - UNKNOWN: 未明确设置的镜像支持的服务类型。  **默认取值**：UNKNOWN。
     * @param {'ASC' | 'DESC'} [sortDir] **参数解释**：实例排序方式。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - ASC：升序 - DESC：降序  **默认取值**：DESC。
     * @param {string} [sortKey] **参数解释**：排序的字段，多个字段使用(“,”)逗号分隔。 **约束限制**：不涉及。 **取值范围**：长度限制为128个字符，支持大小写字母、数字、中划线、下划线和逗号。 **默认取值**：不涉及。
     * @param {'BUILD_IN' | 'DEDICATED'} [type] **参数解释**：镜像类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - BUILD_IN：系统内置镜像。 - DEDICATED：用户保存的镜像。  **默认取值**：BUILD_IN。
     * @param {string} [workspaceId] **参数解释**：工作空间ID。未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：0或32位仅包含字符0-9或小写字母a-z的字符串。 **默认取值**：0。
     * @param {string} [showName] **参数解释**：镜像展示name。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [showTag] **参数解释**：镜像展示Tag。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImage(listImageRequest?: ListImageRequest): Promise<ListImageResponse> {
        const options = ParamCreater().listImage(listImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户镜像列表接口用于查询用户镜像信息概览，以镜像名称作为聚合的信息。该接口适用于以下场景：当用户需要管理多个镜像或了解各镜像的基本信息时，可通过此接口获取镜像列表及其概览信息。使用该接口的前提条件是用户具备镜像管理权限，并且镜像已存在。查询操作完成后，将返回用户所有镜像的列表，包括镜像名称、版本、状态等信息。若镜像不存在或用户无权限访问，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户镜像列表
     * @param {string} [name] **参数解释**：镜像名称。 **约束限制**：不涉及。 **取值范围**：长度限制为512个字符，支持小写字母、数字、中划线、下划线和点。 **默认取值**：不涉及。
     * @param {boolean} [nameFuzzyMatch] **参数解释**：镜像名称是否模糊匹配查询。 **约束限制**：不涉及。 **取值范围**：布尔类型： - true：支持模糊匹配查询。 - false：不支持模糊匹配查询。  **默认取值**：true。
     * @param {string} [namespace] **参数解释**：镜像所属组织，可以在SWR控制台“组织管理”创建和查看。 **约束限制**：不涉及。 **取值范围**：长度限制为64个字符，支持大小写字母、数字、中划线、下划线和点号，且必须是小写字母开头。 **默认取值**：不涉及。
     * @param {'BUILD_IN' | 'DEDICATED'} [type] **参数解释**：镜像类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - BUILD_IN：系统内置镜像。 - DEDICATED：用户保存的镜像。  **默认取值**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：0或32位仅包含字符0-9或小写字母a-z的字符串。 **默认取值**：0。
     * @param {number} [limit] **参数解释**：每一页显示的镜像实例数量。 **约束限制**：不涉及。 **取值范围**：正整数。 **默认取值**：200。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：不涉及。 **取值范围**：非负整数。 **默认取值**：0。
     * @param {string} [swrInstanceId] **参数解释**：企业版SWR仓库ID。 **参数约束**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageGroup(listImageGroupRequest?: ListImageGroupRequest): Promise<ListImageGroupResponse> {
        const options = ParamCreater().listImageGroup(listImageGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于查询当前系统中的apikey列表，适用于管理员或用户需要查看和管理apikey的场景。调用此接口前，确保已具备相应的查询权限。返回的列表将包含每个apikey的基本信息，如apikey值、创建时间、绑定的服务等。如果当前系统中没有apikey，将返回空列表或相应的异常信息，提示用户检查查询条件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用密钥
     * @param {string} [scope] **参数解释：** 生效范围，枚举值，可选值为USER、SERVICE。 **约束限制：** 不涉及。 **取值范围：** - USER：表示生效范围为用户级别，可以访问该用户创建的所有在线服务。 - SERVICE：表示生效范围为单个服务，可以访问绑定该api-key的在线服务。 **默认取值：** 不涉及。
     * @param {string} [serviceId] **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** apikey_name，通过[查询api-keys列表](ListInferApiKeys.xml)获取当前用户拥有的apikey，其中name字段即为apikey_name。 **约束限制：** 不涉及。 **取值范围：** apikey_name。 **默认取值：** 不涉及。
     * @param {string} [serviceName] **参数解释：** 服务名，用户在[创建服务](CreateInferService.xml)时自定义。 **约束限制：** 服务名称不能重复。 **取值范围：** 支持1-128个字符，可以包含字母、汉字、数字、连字符和下划线。 **默认取值：** 不涉及。
     * @param {string} [keyId] **参数解释：** apikey_id，在[创建API_KEY](CreateInferApiKey.xml)时即可在返回体中获取，也可通过[查询api-keys列表](ListInferApiKeys.xml)获取当前用户拥有的apikey，其中key_id字段即为apikey_id。 **约束限制：** 不涉及。 **取值范围：** apikey_id只能由英文小写字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 指定返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {number} [offset] **参数解释：** 分页列表查询的偏移量。 **约束限制：** offset必须是limit的整数倍。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {string} [workspaceId] **参数解释：** 工作空间ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {boolean} [withUserScope] **参数解释：** 是否查询鉴权范围为USER类型的API KEY，当同时指定service_id时可查询该服务所有可访问的API KEY。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** false。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferApiKeys(listInferApiKeysRequest?: ListInferApiKeysRequest): Promise<ListInferApiKeysResponse> {
        const options = ParamCreater().listInferApiKeys(listInferApiKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口允许用户查询当前资源实例支持的可切换规格列表，适用于需要调整实例资源配置的场景。使用该接口前，用户需确保已登录并拥有查询权限。执行成功后，用户将获得一个包含各种可切换规格的详细列表，包括规格ID、名称、资源配额等信息，可用于后续的实例规格变更操作。如果用户没有相应的查询权限或资源实例ID无效，接口将返回错误信息，如401 Unauthorized或404 Not Found。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询支持可切换规格列表
     * @param {string} [flavorType] **参数解释：** 规格类型。 **约束限制：** 不涉及。 **取值范围：** - CPU - GPU - ASCEND **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 指定返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {number} [offset] **参数解释：** 分页列表查询的偏移量。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferClusterFlavors(listInferClusterFlavorsRequest?: ListInferClusterFlavorsRequest): Promise<ListInferClusterFlavorsResponse> {
        const options = ParamCreater().listInferClusterFlavors(listInferClusterFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于查询当前[租户](tag:hws,hws_hk,fcs,fcs_super)[资源空间](tag:hcs,hcs_sm)的服务部署实例列表，并支持根据服务部署实例的状态进行筛选，包括运行中和已删除状态，同时支持分页和关键词筛选。适用于需要管理和监控服务实例状态的场景。调用此接口前，确保已具备相应的查询权限，并提供可选的筛选条件和分页参数。返回的列表将包含每个服务部署实例的基本信息，如部署名字、最新更新时间、状态等。如果当前租户没有符合条件的服务实例或提供的参数无效，将返回空列表或相应的异常信息，提示用户检查输入数据的有效性和权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务部署实例列表
     * @param {string} id **参数解释：** 服务唯一id
     * @param {string} name **参数解释：** 服务部署名字，可以为all
     * @param {Array<string>} [status] **参数解释：** 服务实例状态，一次支持多种状态筛选，多种状态以\&quot;,\&quot;连接，不能存在空格。默认不过滤。取值范围有4种RUNNING（运行中）、ERROR（错误）、INIT（初始化）、DELETED（已删除)。 **约束限制：** 不涉及。
     * @param {number} [limit] **参数解释：** 指定每一页返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {string} [offset] **参数解释：** 分页列表的起始页。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {string} [podName] **参数解释：** pod名字。 **取值范围：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferDeploymentInstances(listInferDeploymentInstancesRequest?: ListInferDeploymentInstancesRequest): Promise<ListInferDeploymentInstancesResponse> {
        const options = ParamCreater().listInferDeploymentInstances(listInferDeploymentInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于查询指定Pod的Kubernetes事件，适用于需要监控和排查Pod运行状态的场景。调用此接口前，确保已具备相应的查询权限，并提供有效的Pod ID。返回的事件列表将包含每个事件的详细信息，如事件类型、发生次数、事件名称、事件信息、发生时间等。如果提供的Pod ID无效、Pod不存在或权限不足，将返回相应的异常信息，提示用户检查输入数据的有效性和权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Pod事件
     * @param {string} id **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentName **参数解释：** 部署名称，在创建部署时即可在返回体中获取，也可通过查询服务部署列表获取当前用户拥有的部署，其name字段即为部署名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} instanceName **参数解释：** 服务实例名字，可以为all，为all时去查询所有的服务实例。 **约束限制：** 不涉及。 **取值范围：** 服务实例名字。 **默认取值：** 不涉及。
     * @param {string} name **参数解释：** 服务实例pod名字，可以为all，为all时去查询所有的服务实例。 **约束限制：** 不涉及。 **取值范围：** 服务实例名字。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferDeploymentPodEvents(listInferDeploymentPodEventsRequest?: ListInferDeploymentPodEventsRequest): Promise<ListInferDeploymentPodEventsResponse> {
        const options = ParamCreater().listInferDeploymentPodEvents(listInferDeploymentPodEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于查询指定服务部署的pod列表，并支持选择是否只获取当前运行中的pod。适用于需要管理和监控服务部署pod状态的场景。调用此接口前，确保已具备相应的查询权限，并提供有效的服务ID、部署ID和可选的筛选参数pod status（如是否只获取当前运行中的pod）。返回的列表将包含每个pod的基本信息，如pod名称、pod所在node的IP、pod所在node名字、pod角色、状态、最近更新时间等。如果指定的服务ID无效或当前服务没有pod，将返回空列表或相应的异常信息，提示用户检查输入数据的有效性和权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务部署的pod的列表
     * @param {string} id **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentName **参数解释：** 部署名称，在创建部署时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其name字段即为部署名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} name **参数解释：** 服务实例名字，可以为all，为all时去查询所有的服务实例。 **约束限制：** 不涉及。 **取值范围：** 服务实例名字。 **默认取值：** 不涉及。
     * @param {Array<string>} [status] **参数解释：** pod状态，一次支持多种状态筛选，多种状态以\&quot;,\&quot;连接，不能存在空格。默认不过滤。取值范围有7种RUNNING（运行中）、PENDING（未就绪）、SUCCEEDED（成功）、FAILED（失败）、ABNORMAL（异常）、UNKNOWN（未知）、DELETED（已删除）。 **约束限制：** 不涉及。
     * @param {number} [limit] **参数解释：** 指定每一页返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {string} [offset] **参数解释：** 分页列表的起始页。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {string} [podName] **参数解释：** pod名字。 **取值范围：** 不涉及。
     * @param {string} [podId] **参数解释：** pod ID。 **取值范围：** 不涉及。
     * @param {string} [podNodeIp] **参数解释：** pod节点IP地址。 **取值范围：** 不涉及。
     * @param {string} [podNodeName] **参数解释：** pod节点名称。 **取值范围：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferDeploymentPods(listInferDeploymentPodsRequest?: ListInferDeploymentPodsRequest): Promise<ListInferDeploymentPodsResponse> {
        const options = ParamCreater().listInferDeploymentPods(listInferDeploymentPodsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于获取指定服务部署的版本列表，适用于需要了解当前服务部署可用版本的场景，例如进行版本选择或确认当前版本信息。请求需包含有效的服务ID、部署ID，也可通过排序参数对列表进行排序。用户必须具有对目标服务部署的查看权限。请求成功后，返回该服务部署的所有在线版本信息，包括版本号、发布时间和状态。若服务ID/部署ID无效或用户无权限，则返回400 Bad Request或403 Forbidden；若服务部署无在线版本，则返回空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询在线服务部署版本列表
     * @param {string} serviceId **参数解释：** 服务ID，在创建服务时即可在返回体中获取，也可通过查询服务列表接口获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferDeploymentVersions(listInferDeploymentVersionsRequest?: ListInferDeploymentVersionsRequest): Promise<ListInferDeploymentVersionsResponse> {
        const options = ParamCreater().listInferDeploymentVersions(listInferDeploymentVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持分页和筛选，适用于用户在管理控制台或通过API需要查看特定条件下（如服务状态、名称等）的部署列表的情况。调用此接口前，用户必须具有查询部署列表的权限，并提供合法的分页参数（如页码、每页条数）和筛选条件（如部署状态、名称等）。调用成功后，系统将返回符合筛选条件的部署列表，包含指定页码的数据，并返回总页数和总记录数。如果用户没有查询部署列表的权限，或提供的分页参数和筛选条件不合法，调用将返回相应的错误信息。如果系统在查询过程中遇到内部错误，也将返回错误信息并记录日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务部署列表
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 排序字段，多个字段以\&quot;,\&quot;分隔，支持create_at, update_at，默认值update_at。 **约束限制：** 不涉及。 **取值范围：** - create_at：按创建时间排序。 - update_at：按更新时间排序。 **默认取值：** update_at。
     * @param {string} [status] **参数解释：** 当取值为all时查询包含指定天数内已删除的部署，与delete_after同时使用；当取值为空或非all时进查询未删除的部署。 **约束限制：** 不涉及。 **取值范围：** - all：查询包含已删除。 **默认取值：** 空。
     * @param {string} [sortDir] **参数解释：** 排序方式 **约束限制：** 不涉及。 **取值范围：** - ASC: 递增排序。 - DESC: 递减排序。 **默认取值：** DESC。
     * @param {number} [limit] **参数解释：** 指定返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {number} [offset] **参数解释：** 分页列表查询的偏移量。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {number} [deleteAfter] **参数解释：** 表示查询包含指定天数内已删除的部署，与status同时使用，仅当status取值为all时生效。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 7
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferDeployments(listInferDeploymentsRequest?: ListInferDeploymentsRequest): Promise<ListInferDeploymentsResponse> {
        const options = ParamCreater().listInferDeployments(listInferDeploymentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于查询当前所有的内网接入申请记录，适用于需要管理和监控内网接入申请状态的场景。调用此接口前，确保已具备相应的查询权限。返回的列表将包含每个内网接入申请的基本信息，如申请ID、创建时间、状态、Region ID等。如果当前租户没有内网接入申请记录，将返回空列表。如果调用时出现权限不足或其他系统异常，将返回相应的异常信息，提示用户检查权限或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前的内网接入申请列表
     * @param {string} [scene] **参数解释：** 内网访问场景。 **约束限制：** 不涉及。 **取值范围：** - POOL：用户资源池接入场景 - VPC：用户VPC网络接入场景 **默认取值：** 不涉及。
     * @param {string} [status] **参数解释：** 内网接入状态，支持列表查询。 **约束限制：** 不涉及。 **取值范围：** - APPROVING：审批中 - REJECTED：拒绝 - CONNECTING：接入中 - CONNECTED：已接入 - CANCELED：已取消 - FAILED：失败 - DELETING：删除中 **默认取值：** 不涉及。
     * @param {string} [id] **参数解释：** 内网接入ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [serviceId] **参数解释：** 服务ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [serviceName] **参数解释：** 服务名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [vpcId] **参数解释：** VPC网络的id。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [vpcName] **参数解释：** VPC网络的名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [poolId] **参数解释：** 资源池的id。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [offset] **参数解释：** 分页列表查询的偏移量。 **约束限制：** offset必须是limit的整数倍。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {number} [limit] **参数解释：** 指定返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {string} [workspaceId] **参数解释：** 工作空间ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [sortDir] **参数解释：** 排序方式 **约束限制：** 不涉及。 **取值范围：** - ASC: 递增排序。 - DESC: 递减排序。 **默认取值：** DESC。
     * @param {string} [sortKey] **参数解释：** 排序字段，多个字段以\&quot;,\&quot;分隔，支持create_at, update_at，默认值update_at。 **约束限制：** 不涉及。 **取值范围：** - create_at：按创建时间排序。 - update_at：按更新时间排序。 **默认取值：** update_at。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferIntranetConnectionApplications(listInferIntranetConnectionApplicationsRequest?: ListInferIntranetConnectionApplicationsRequest): Promise<ListInferIntranetConnectionApplicationsResponse> {
        const options = ParamCreater().listInferIntranetConnectionApplications(listInferIntranetConnectionApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于查询当前所有的内网接入审批记录，适用于需要管理和监控内网接入审批状态的场景。调用此接口前，确保已具备相应的查询权限。返回的列表将包含每个内网接入审批的基本信息，如审批ID、申请时间、状态（如待审批、已批准、已拒绝）、申请者信息、Region ID等。如果当前租户没有内网接入审批记录，将返回空列表。如果调用时出现权限不足或其他系统异常，将返回相应的异常信息，提示用户检查权限或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前的内网接入审批列表
     * @param {string} [scene] **参数解释：** 内网访问场景。 **约束限制：** 不涉及。 **取值范围：** - POOL：用户资源池接入场景 - VPC：用户VPC网络接入场景 **默认取值：** 不涉及。
     * @param {string} [id] **参数解释：** 内网接入id。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [applicantDomainId] **参数解释：** 申请方domain ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [serviceId] **参数解释：** 服务ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [applicantUserName] **参数解释：** 申请方用户名。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [serviceName] **参数解释：** 服务名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [vpcName] **参数解释：** VPC名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [vpcId] **参数解释：** VPC ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [poolId] **参数解释：** 资源池ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 排序字段，支持update_at、create_at，默认值update_at。 **约束限制：** 不涉及。 **取值范围：** - update_at：按更新时间排序。 - create_at：按创建时间排序。 **默认取值：** update_at。
     * @param {number} [limit] **参数解释：** 指定返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {number} [offset] **参数解释：** 分页列表查询的偏移量。 **约束限制：** offset必须是limit的整数倍。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {string} [status] **参数解释：** 申请状态。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [type] **参数解释：** 内网申请类型。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferIntranetConnectionReviews(listInferIntranetConnectionReviewsRequest?: ListInferIntranetConnectionReviewsRequest): Promise<ListInferIntranetConnectionReviewsResponse> {
        const options = ParamCreater().listInferIntranetConnectionReviews(listInferIntranetConnectionReviewsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要监控和管理在线服务事件的场景，例如用户或运维人员需要定期检查服务的日志事件，以及时发现和处理问题。通过调用此接口，用户可以获取当前在线服务的所有事件记录，包括事件类型、事件信息、时间、发生次数等信息。用户必须具有查询服务事件列表的权限，才能成功访问该接口。获取成功后，返回事件列表；若失败，返回具体的错误信息。常见异常包括权限验证错误、服务状态错误和参数验证错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取在线服务事件列表
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} [eventType] **参数解释：** 在线服务事件类型。 **约束限制：** 不涉及。 **取值范围：** - NORMAL：正常 - ABNORMAL：异常 - WARNING：警告 **默认取值：** 不涉及。
     * @param {number} [startTime] **参数解释：** 事件开始时间。 **约束限制：** 不涉及。 **取值范围：** 毫秒级时间戳，13位数字。 **默认取值：** 不涉及。
     * @param {number} [endTime] **参数解释：** 事件结束时间。 **约束限制：** 不涉及。 **取值范围：** 毫秒级时间戳，13位数字。 **默认取值：** 不涉及。
     * @param {string} [eventInfoKey] **参数解释：** 事件信息过滤关键字。 **约束限制：** 不支持\&#39;\&quot;;%_*!@#$&amp;\\这些字符的查询。
     * @param {number} [limit] **参数解释：** 指定返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {number} [offset] **参数解释：** 分页列表查询的偏移量。 **约束限制：** offset必须是limit的整数倍。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {string} [sortKey] **参数解释：** 排序字段，多个字段以\&quot;,\&quot;分隔，支持create_at, update_at，默认值update_at。 **约束限制：** 不涉及。 **取值范围：** - create_at：按创建时间排序。 - update_at：按更新时间排序。 **默认取值：** update_at。
     * @param {string} [sortDir] **参数解释：** 排序方式。 **约束限制：** 不涉及。 **取值范围：** - ASC: 递增排序。 - DESC: 递减排序。 **默认取值：** DESC。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferServiceEvents(listInferServiceEventsRequest?: ListInferServiceEventsRequest): Promise<ListInferServiceEventsResponse> {
        const options = ParamCreater().listInferServiceEvents(listInferServiceEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要获取用户当前项目中某一类资源（如指定的Service）的标签信息的场景，例如在资源管理和监控中，用户可以通过查询标签来了解各类资源的分类和属性。通过调用此接口，用户可以获取指定Service在所有工作空间中的标签列表，但无权限的工作空间标签数据将被过滤不返回。用户必须具有足够的权限，且目标资源需存在。查询成功后，返回指定Service的标签列表；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某一类资源下的标签
     * @param {string} [workspaceId] **参数解释：** 工作空间ID，workspaceId将会被设置为null。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferServiceTags(listInferServiceTagsRequest?: ListInferServiceTagsRequest): Promise<ListInferServiceTagsResponse> {
        const options = ParamCreater().listInferServiceTags(listInferServiceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持分页和筛选
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务列表
     * @param {string} [id] **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} [poolId] **参数解释：** 资源池ID，查询指定资源池下的服务，默认不过滤。可通过[查询资源池列表](ShowPool.xml)获取。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [poolName] **参数解释：** 资源池name，查询指定资源池下的服务，默认不过滤。可通过[查询资源池列表](ShowPool.xml)获取。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 排序字段，多个字段以\&quot;,\&quot;分隔，支持create_at, update_at，默认值update_at。 **约束限制：** 不涉及。 **取值范围：** - create_at：按创建时间排序。 - update_at：按更新时间排序。 **默认取值：** update_at。
     * @param {string} [status] **参数解释：** 服务当前状态，查询指定状态的过滤。默认不过滤。 **约束限制：** 不涉及。 **取值范围：** - DEPLOYING：部署中。 - FAILED：失败。 - STOPPED：停止。 - RUNNING：运行中。 - DELETING：删除中。 - STOPPING：停止中。 - CONCERNING：告警。 - UPGRADING：升级中。 - ERROR：异常。 - INTERRUPTING：中断中。 **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** 服务名，用户在[创建服务](CreateInferService.xml)时自定义。 **约束限制：** 服务在删除之前名字不能重复。 **取值范围：** 支持1-128个字符，可以包含字母、汉字、数字、连字符和下划线。 **默认取值：** 不涉及。
     * @param {string} [authType] **参数解释：** 认证类型，默认不过滤。 **约束限制：** 不涉及。 **取值范围：** - TOKEN：IAM Token认证。 - API_KEY：API Key认证。 - NONE：无认证。 **默认取值：** 不涉及。
     * @param {string} [type] **参数解释：** 推理服务类型。 **约束限制：** 不涉及。 **取值范围：** - REAL_TIME：在线服务。 - ASYNC_REAL_TIME：异步服务。 **默认取值：** 不涉及。
     * @param {string} [description] **参数解释：** 服务描述，模糊查询，默认不过滤。由用户[创建服务](CreateInferService.xml)时自行填写。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [workspaceId] **参数解释：** 工作空间ID。 **取值范围：** - 0：默认空间ID - 由数字和小写字母组成的32位字符：其他空间ID，可参考[工作空间创建](CreateWorkspace.xml) **约束限制：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [userName] **参数解释：** 创建者，即创建服务的用户名。 **约束限制：** 不涉及。 **取值范围：** 创建服务的用户名。 **默认取值：** 不涉及。
     * @param {string} [tags] **参数解释：** 标签，查询指定标签的服务，默认不过滤。根据标签过滤service参数，格式：每组tag之间使用英文逗号分隔，每个标签内的key和value使用英文竖划线分隔，例：tag_key1|tag_value1,tag_key2|tag_value2 **约束限制：** 不以逗号，竖划线开头，不以逗号结尾，不出现连续的竖划线和逗号，允许中文、西文、葡文等语言以及空格_.:/&#x3D;+-@特殊字符，且字符间以逗号或者竖划线分隔。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [assetId] **参数解释：** 资产ID，查询使用了指定资产的服务，默认不过滤。可通过[资产管理][模型列表]获取。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [sortDir] **参数解释：** 排序方式 **约束限制：** 不涉及。 **取值范围：** - ASC: 递增排序。 - DESC: 递减排序。 **默认取值：** DESC。
     * @param {number} [limit] **参数解释：** 指定返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {number} [offset] **参数解释：** 分页列表查询的偏移量。 **约束限制：** offset必须是limit的整数倍。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferServices(listInferServicesRequest?: ListInferServicesRequest): Promise<ListInferServicesResponse> {
        const options = ParamCreater().listInferServices(listInferServicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要根据标签或资源名称查找相关资源的场景，例如在资源管理和搜索中，用户可以通过指定标签或进行模糊查询来查找符合特定条件的资源。通过调用此接口，用户可以基于多个标签或资源名称进行精确或模糊查询，若不传标签则返回所有资源。用户必须具有足够的权限，且目标资源需存在。查询成功后，返回符合条件的资源列表；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过标签反查资源列表
     * @param {QueryTmsResourceRequest} listInferServicesByTagsRequestBody **参数解释：** 通过标签查询资源结构体。 **约束限制：** 不涉及。
     * @param {number} [limit] **参数解释：** 指定返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {number} [offset] **参数解释：** 分页列表查询的偏移量。 **约束限制：** offset必须是limit的整数倍。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {string} [workspaceId] **参数解释：** 工作空间ID，workspaceId将会被设置为null。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferServicesByTags(listInferServicesByTagsRequest?: ListInferServicesByTagsRequest): Promise<ListInferServicesByTagsResponse> {
        const options = ParamCreater().listInferServicesByTags(listInferServicesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务列表接口用于获取当前用户下的任务列表。该接口适用于以下场景：当需要查看任务状态、管理任务进度或统计任务数量时，用户可通过此接口获取当前用户下所有任务的详细信息。使用该接口的前提条件是用户已登录系统且具有查看任务的权限。调用接口成功后，系统将返回当前用户下的任务列表，包括任务ID、名称、状态、创建时间等信息。若用户未登录、无权限访问或系统中未配置任务，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表
     * @param {string} [type] **参数解释**：任务类型。 **约束限制**：不涉及。 **取值范围**：可选值如下： - replace-node：故障节点替换任务。 - reboot-node：节点重启任务。 - reset-nodes：节点重置任务。 **默认取值**：不涉及。
     * @param {number} [limit] **参数解释**：单页查询最大数量，该值为空时默认返回100条记录，单页最大允许查询500条记录。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [offset] **参数解释**：分页查询的偏移量，查询第一页时为空。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [since] **参数解释**：查询起始时间，单位毫秒。默认从30天前开始查询。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [until] **参数解释**：查询终止时间，单位毫秒。默认当前时间。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [resource] **参数解释**：任务关联的资源类型。 **约束限制**：不涉及。 **取值范围**：可选值如下： - pools：资源池 **默认取值**：不涉及。
     * @param {string} [name] **参数解释**：关联的资源名称，与resource配合使用。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
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
     * 查询网络资源列表接口用于获取系统中已创建的网络资源信息。该接口适用于以下场景：当用户需要监控网络状态、进行资源规划、排查网络问题或进行审计时，可通过此接口查询系统中现有的网络资源列表。使用该接口的前提条件是用户具有相应的权限，并且系统中已存在网络资源。查询操作完成后，接口将返回网络资源列表，包含资源ID、类型、状态、创建时间等详细信息。若用户无权限、系统中无网络资源或查询参数有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络资源列表
     * @param {string} [labelSelector] **参数解释**：标签筛选。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [limit] **参数解释**：分页单次查询返回的资源数量。 **约束限制**：不涉及。 **取值范围**：0 - 500。 **默认取值**：500。
     * @param {string} [_continue] **参数解释**：分页查询的偏移标志。取值来自用户上一次分页查询响应结果中metadata.continue中的值，值为空默认无偏移。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNetworks(listNetworksRequest?: ListNetworksRequest): Promise<ListNetworksResponse> {
        const options = ParamCreater().listNetworks(listNetworksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询节点池的节点列表接口用于获取指定节点池中所有节点的详细信息。该接口适用于以下场景：当需要查看节点池的节点状态、资源使用情况或管理节点资源时，用户可通过此接口获取节点池中节点的详细信息。使用该接口的前提条件是节点池已存在且用户具有访问该节点池的权限。调用接口成功后，系统将返回节点池中所有节点的列表，包括节点ID、名称、状态、IP地址、资源使用情况等详细信息。若节点池不存在、用户无权限访问或节点池当前不可用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询节点池的节点列表
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} nodepoolName **参数解释**：节点池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [_continue] **参数解释**：分页查询时上一页位置。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [limit] **参数解释**：分页单次查询返回数。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodePoolNodes(listNodePoolNodesRequest?: ListNodePoolNodesRequest): Promise<ListNodePoolNodesResponse> {
        const options = ParamCreater().listNodePoolNodes(listNodePoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询节点池列表接口用于获取指定节点池的列表信息。该接口适用于以下场景：当需要查看节点池的配置、状态或管理节点池资源时，用户可通过此接口获取节点池的详细信息。使用该接口的前提条件是节点池已存在且用户具有管理员权限。调用接口成功后，系统将返回节点池的列表，包括节点池ID、名称、节点数量、状态等详细信息。若节点池不存在、用户无权限操作或节点池当前不可用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询节点池列表
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodePools(listNodePoolsRequest?: ListNodePoolsRequest): Promise<ListNodePoolsResponse> {
        const options = ParamCreater().listNodePools(listNodePoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件模板列表接口用于获取插件模板的基本信息列表。该接口适用于以下场景：当需要浏览或管理插件模板时，用户可通过此接口查询所有可用的插件模板信息，以便选择或进一步操作。使用该接口的前提条件是用户具有访问插件模板的权限，且插件模板服务处于正常运行状态。查询操作完成后，用户将获得插件模板的列表信息，包括模板名称、类型、版本等，便于后续的插件开发或管理。若用户无权限访问、插件模板服务不可用或请求参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件模板列表
     * @param {string} [templateName] **参数解释**：指定的插件名称，填写则查询指定名称的插件。 **约束限制**：不涉及 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [poolName] **参数解释**：指定的资源池名称，填写则查询符合资源池安装条件的插件列表。 **约束限制**：不涉及 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPluginTemplates(listPluginTemplatesRequest?: ListPluginTemplatesRequest): Promise<ListPluginTemplatesResponse> {
        const options = ParamCreater().listPluginTemplates(listPluginTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池节点列表接口用于获取指定资源池中的节点信息列表。该接口适用于以下场景：当需要了解资源池中节点的分布、状态或资源使用情况时，用户可通过此接口查询资源池中的节点列表，以便进行资源监控、分配或管理。使用该接口的前提条件是资源池已创建且处于可用状态，且用户具有访问资源池的权限。查询操作完成后，用户将获得资源池中节点的详细信息，包括节点ID、状态、资源使用情况等，便于后续的资源管理和优化。若资源池不存在、用户无权限访问或请求参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池节点列表
     * @param {string} poolName **参数解释**：资源池的ID，取值自资源池详情的metadata.name字段。 **约束限制**：只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长度为36-63个字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [_continue] **参数解释**：分页查询的偏移标志。 **约束限制**：可选。 **取值范围**：取值来自用户上一次分页查询响应结果中metadata.continue中的值，值为空默认无偏移。 **默认取值**：不涉及。
     * @param {number} [limit] **参数解释**：分页单次查询返回的资源数量。 **约束限制**：不涉及。 **取值范围**：0 - 500。 **默认取值**：500。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPoolNodes(listPoolNodesRequest?: ListPoolNodesRequest): Promise<ListPoolNodesResponse> {
        const options = ParamCreater().listPoolNodes(listPoolNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件实例列表接口用于获取系统中已部署的插件实例信息。该接口适用于以下场景：当用户需要查看系统中已部署的插件实例、监控插件运行状态、管理插件配置或进行故障排查时，可通过此接口获取插件实例的详细信息。使用该接口的前提条件是用户具有查询权限且系统中已部署至少一个插件实例。调用该接口后，系统将返回所有插件实例的列表，包括插件名称、类型、状态、版本及部署环境等信息。若用户无权限访问或系统中未部署任何插件实例，接口将返回相应的错误信息或空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件列表
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPoolPlugins(listPoolPluginsRequest?: ListPoolPluginsRequest): Promise<ListPoolPluginsResponse> {
        const options = ParamCreater().listPoolPlugins(listPoolPluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池所有标签接口用于获取用户当前项目下资源池的所有标签信息，默认查询所有工作空间，但无权限的工作空间不会返回标签数据。该接口适用于以下场景：当需要管理、分类或统计资源池的标签信息时，用户可通过此接口获取资源池的标签数据。使用该接口的前提条件是用户具有访问资源池的权限且资源池已存在。调用接口成功后，系统将返回用户当前项目下所有可访问工作空间的资源池标签信息。若用户无权限访问资源池、资源池不存在或项目未创建，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池的所有标签
     * @param {number} [limit] **参数解释**：指定每一页查询返回的最大条目数，默认为200。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [offset] **参数解释**：分页列表的起始页，默认为0。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPoolTags(listPoolTagsRequest?: ListPoolTagsRequest): Promise<ListPoolTagsResponse> {
        const options = ParamCreater().listPoolTags(listPoolTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池列表接口用于获取系统中已创建的资源池信息。该接口适用于以下场景：当用户需要监控资源池状态、进行资源规划、管理资源分配或进行审计时，可通过此接口查询系统中现有的资源池列表。使用该接口的前提条件是用户具有相应的权限，并且系统中已存在资源池。查询操作完成后，接口将返回资源池列表，包含资源池ID、名称、类型、状态、资源配额等详细信息。若用户无权限、系统中无资源池或查询参数有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池列表
     * @param {string} [workspaceId] **参数解释**：工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc,hk) 未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {string} [labelSelector] **参数解释**：资源池标签筛选。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [status] **参数解释**：资源池状态。 **约束限制**：不涉及。 **取值范围**：可选值如下： - created: 创建成功的资源池。 - failed：创建失败的资源池，创建失败的资源池记录保留3天。 - creating：创建中的资源池 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPools(listPoolsRequest?: ListPoolsRequest): Promise<ListPoolsResponse> {
        const options = ParamCreater().listPools(listPoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源规格列表接口用于获取可用的资源规格信息。该接口适用于以下场景：当需要查看或选择资源规格以创建资源池、分配资源或了解可用资源规格时，用户可通过此接口获取资源规格的详细信息。使用该接口的前提条件是用户具有相应的权限（如管理员权限或资源管理权限）。调用接口成功后，系统将返回资源规格的列表，包括规格ID、名称、CPU核数、内存大小、存储容量等详细信息。若用户无权限访问该接口或系统中未配置资源规格，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源规格列表
     * @param {string} [_continue] **参数解释**：分页查询的偏移标志。 **约束限制**：不涉及。 **取值范围**：取值来自用户上一次分页查询响应结果中metadata.continue中的值，值为空默认无偏移。 **默认取值**：不涉及。
     * @param {number} [limit] **参数解释**：分页单次查询返回的资源数量。 **约束限制**：不涉及。 **取值范围**：0 - 500。 **默认取值**：500。
     * @param {string} [labelSelector] **参数解释**：标签筛选查询。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceFlavors(listResourceFlavorsRequest?: ListResourceFlavorsRequest): Promise<ListResourceFlavorsResponse> {
        const options = ParamCreater().listResourceFlavors(listResourceFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询计划事件列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询计划事件列表
     * @param {string} [workspaceId] **参数解释**：工作空间ID，默认值为0，取值于查询workspaces列表的接口的id字段。 **约束限制**：系统自动生成，只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长小于63个字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {Array<'inquiring' | 'scheduled' | 'executing' | 'completed' | 'failed' | 'canceled'>} [state] **参数解释**：事件状态。 **约束限制**：不涉及。 **取值范围**：可选择值如下： - inquiring: 待授权, - scheduled: 待执行 - executing: 执行中 - completed: 执行成功 - failed: 执行失败 - canceled: 取消 **默认取值**：不涉及。
     * @param {Array<string>} [type] **参数解释**：事件类型。 **约束限制**：不涉及。 **取值范围**：可选择值如下： - system-maintenance：系统维护 - localdisk-recovery：本地盘恢复 - node_reboot：节点重启 - operation-request：运维授权 - node_maintenance：超节点维护 - node_redeploy：超节点重部署 - node_localdisk_recovery 超节点本地盘恢复 **默认取值**：不涉及。
     * @param {string} [id] **参数解释**：计划事件ID，取值查询计划事件列表接口的event_id字段。 **约束限制**：系统自动生成，只能以小写字母开头，数字、中划线组成，不能以中划线结尾，长度小于63。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [nodeName] **参数解释**：节点名称，取值自节点详情的metadata.name字段。 **约束限制**：系统自动生成，只能以小写字母开头，数字、中划线组成，不能以中划线结尾，小于63个字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [poolName] **参数解释**：资源池名称, lite-cluster、standard才具有，取值自资源池详情的metadata.name字段。查询指定standard cluster和lite cluster下节点的计划事件时可传递该参数。 **约束限制**：系统自动生成，只能以小写字母开头，数字、中划线组成，不能以中划线结尾，小于63个字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [publishStartTime] **参数解释**：事件发布开始时间,按照时间范围过滤。 **约束限制**：按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [publishEndTime] **参数解释**：事件发布结束时间,按照时间范围过滤。 **约束限制**：按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [offset] **参数解释**：偏移量,表示从此偏移量开始查询。 **约束限制**：不涉及。 **取值范围**：[0,1000000000]。 **默认取值**：0。
     * @param {number} [limit] **参数解释**：指定每一页返回的最大条目数。 **约束限制**：不涉及。 **取值范围**：[1,100]。 **默认取值**：100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledEvents(listScheduledEventsRequest?: ListScheduledEventsRequest): Promise<ListScheduledEventsResponse> {
        const options = ParamCreater().listScheduledEvents(listScheduledEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练实验列表接口用于获取ModelArts平台上用户已创建的训练实验的列表。
     * 该接口适用于以下场景：当用户需要查看所有或部分训练实验的概要信息，如实验名称、描述、创建时间等时，可以通过此接口查询训练实验列表。使用该接口的前提条件是用户已登录ModelArts平台并具有查看训练实验的权限。查询操作完成后，系统将返回符合条件的训练实验列表。若用户无权限操作或查询条件不合法，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练实验列表
     * @param {string} [workspaceId] 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {number} [limit] 返回的数据条目数。
     * @param {number} [offset] 数据条目偏移量。
     * @param {string} [sortBy] **参数解释**：排序依据字段，例如sort_by&#x3D;update_time，则表示以条目的更新时间进行排序。 **约束限制**：不涉及。 **取值范围**： - update_time：更新时间。 - name：实验名称。 - create_time：创建时间。 **默认取值**：不涉及。
     * @param {'desc' | 'asc'} [order] 排序的方式。该字段必须与sort_by同时使用。 缺省值: desc 枚举值： - asc：表示升序排列， - desc：降序排列。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrainingExperiments(listTrainingExperimentsRequest?: ListTrainingExperimentsRequest): Promise<ListTrainingExperimentsResponse> {
        const options = ParamCreater().listTrainingExperiments(listTrainingExperimentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取训练作业事件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取训练作业事件列表
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {number} [offset] 数据条目偏移量。
     * @param {number} [limit] 指定每一页返回的最大条目数，取值范围[1,100]，默认为50。
     * @param {'asc' | 'desc'} [order] instance order
     * @param {string} [startTime] 开始时间，需要与结束时间一起传入。
     * @param {string} [endTime] 结束时间，需要与开始时间一起传入。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {string} [level] 指定返回的事件级别，取值范围[Info Error Warning]。
     * @param {string} [pattern] 指定事件信息包含的内容，最长256个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrainingJobEvents(listTrainingJobEventsRequest?: ListTrainingJobEventsRequest): Promise<ListTrainingJobEventsResponse> {
        const options = ParamCreater().listTrainingJobEvents(listTrainingJobEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取训练作业流程阶段信息列表接口用于获取ModelArts平台上指定训练作业的流程阶段信息列表。
     * 该接口适用于以下场景：当用户需要查看特定训练作业的流程阶段记录时，可以通过此接口获取阶段信息列表。使用该接口的前提条件是用户已知训练作业ID，并具有查看阶段信息列表的权限。查询操作完成后，平台将返回包含训练作业的阶段信息记录。若训练作业ID不存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取训练作业流程阶段信息列表
     * @param {string} trainingJobId **参数解释**：训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrainingJobStages(listTrainingJobStagesRequest?: ListTrainingJobStagesRequest): Promise<ListTrainingJobStagesResponse> {
        const options = ParamCreater().listTrainingJobStages(listTrainingJobStagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练作业调度的实例IP、节点IP等信息，可通过schedule_count参数查询具体的某一次调度的实例信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练作业的实例历史调度信息
     * @param {string} trainingJobId **参数解释**：训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [scheduleCount] 归属于训练作业的第几次调度
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrainingJobTasks(listTrainingJobTasksRequest?: ListTrainingJobTasksRequest): Promise<ListTrainingJobTasksResponse> {
        const options = ParamCreater().listTrainingJobTasks(listTrainingJobTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定查询条件查询用户创建的训练作业列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练作业列表
     * @param {JobSearches} body 查询条件请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrainingJobs(listTrainingJobsRequest?: ListTrainingJobsRequest): Promise<ListTrainingJobsResponse> {
        const options = ParamCreater().listTrainingJobs(listTrainingJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询专属资源池作业列表接口用于获取指定专属资源池中的作业信息列表。该接口适用于以下场景：当需要监控专属资源池的资源使用情况、查看作业状态或管理资源分配时，用户可通过此接口获取专属资源池中作业的详细信息。使用该接口的前提条件是专属资源池已存在且用户具有相应的权限（如管理员权限或资源管理权限）。调用接口成功后，系统将返回专属资源池中作业的列表，包括作业ID、名称、状态、资源使用情况等详细信息。若专属资源池不存在、用户无权限操作或资源池当前不可用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池作业列表
     * @param {string} poolName **参数解释**：资源池的ID，取值自资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长度为[36-63]个字符。 **默认取值**：不涉及。
     * @param {Array<string>} [hostip] **参数解释**：节点IP地址，用于过滤在该节点上运行的workload。支持多个IP，传递多个参数或用逗号分隔. **约束限制**：指定此参数时，不支持分页（limit/offset会被忽略）。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [type] **参数解释**：根据作业类型查询资源池作业列表。 **约束限制**：不涉及。 **取值范围**：可选值如下： - train：训练作业 - infer：推理服务 - notebook：Notebook作业 - x-infer：新版推理作业 **默认取值**：不涉及。
     * @param {string} [status] **参数解释**：根据作业状态查询资源池作业列表。 **约束限制**：不涉及。 **取值范围**：可选值如下： - Queue：排队中的作业。 - Pending：等待中的作业。 - Abnormal：异常的作业。 - Terminating：中止中的作业。 - Creating：创建中的作业。 - Running：运行中的作业。 - Completed：已完成的作业。 - Terminated：已终止的作业。 - Failed：运行失败的作业。 **默认取值**：不涉及。
     * @param {string} [sort] **参数解释**：查询资源池作业列表的排序条件。 **约束限制**：不涉及。 **取值范围**：可选值如下： - create_time：根据作业创建时间排序。 **默认取值**：不涉及。
     * @param {boolean} [ascend] **参数解释**：指定查询资源池作业列表是否按照升序排序。 **约束限制**：需要配合sort查询参数使用。 **取值范围**：可选值如下： - true：按照升序排序。 - false：按照降序排序。 **默认取值**：false。
     * @param {string} [offset] **参数解释**：分页查询的偏移量。 **约束限制**：不涉及。 **取值范围**：0-2147483647。 **默认取值**：0。
     * @param {number} [limit] **参数解释**：分页单次查询返回的资源数量。 **约束限制**：不涉及。 **取值范围**：0 - 500。 **默认取值**：500。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkloads(listWorkloadsRequest?: ListWorkloadsRequest): Promise<ListWorkloadsResponse> {
        const options = ParamCreater().listWorkloads(listWorkloadsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作空间列表，响应消息体中包含详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作空间列表
     * @param {number} [offset] 分页列表的起始页，默认为\&#39;0\&#39;。
     * @param {number} [limit] 指定每一页返回的最大条目数，默认为\&#39;1000\&#39;。
     * @param {'name' | 'update_time' | 'status'} [sortBy] 指定排序字段，可选\&#39;name\&#39;、\&#39;update_time\&#39;、\&#39;status\&#39;，默认是\&#39;name\&#39;。
     * @param {'asc' | 'desc'} [order] 可选值。\&#39;asc\&#39;为递增排序。\&#39;desc\&#39;为递减排序，默认为\&#39;desc\&#39;。
     * @param {string} [enterpriseProjectId] 企业项目id，指定此参数会只返回该企业项目id下的工作空间。默认显示所有工作空间。
     * @param {string} [name] 工作空间名称查询参数，指定此参数会模糊查询该名称的工作空间。默认显示所有工作空间。
     * @param {boolean} [filterAccessible] 该参数用于筛选可访问的工作空间。指定该参数为true，则会筛选掉当前用户无权限访问的工作空间。该参数默认为false，即为显示所有工作空间。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkspace(listWorkspaceRequest?: ListWorkspaceRequest): Promise<ListWorkspaceResponse> {
        const options = ParamCreater().listWorkspace(listWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于修改添加内网自定义URL请求，适用于需要同时更新或者添加多个内网接入点的场景。调用此接口前，确保调用者具备相应的更新权限，提供需要更新的参数，如IP地址、VPC ID、子网ID等。指定的内网接入点将添加新的配置，新的配置将对相关服务生效。如果提供的内网接入点ID列表中包含无效或不存在的ID，接口将返回相应的异常信息，提示用户检查ID的有效性，如果提供的更新参数不符合格式要求（如IP地址格式不正确），接口将返回相应的异常信息，提示用户检查参数的有效性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改添加自定义URL申请
     * @param {string} id 参数解释： 内网接入id。id可以根据[查询当前租户的内网接入申请列表](ListInferIntranetConnectionApplications.xml)返回body的id字段得到。 约束限制： 不涉及。 取值范围： 不涉及。 默认取值： 不涉及。
     * @param {IntranetConnectionModifyRequest} modifyInferIntranetConnectionsRequestBody **参数解释：** 修改自定义URL请求体。 **约束限制：** 不涉及。  **取值范围：** 不涉及。  **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyInferIntranetConnections(modifyInferIntranetConnectionsRequest?: ModifyInferIntranetConnectionsRequest): Promise<ModifyInferIntranetConnectionsResponse> {
        const options = ParamCreater().modifyInferIntranetConnections(modifyInferIntranetConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 训练事件上报给业务面
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 训练作业事件上报接口
     * @param {string} trainingJobId **参数解释**：训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} taskId **参数解释**：训练作业的任务名称。可从训练作业详情中的status.tasks字段中获取。 **约束限制**：单节点默认为\&quot;worker-0\&quot;，多节点则为\&quot;worker-0\&quot;、\&quot;worker-1\&quot;，依次类推。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} reportType **参数解释**：事件上报类型。 **约束限制**：不涉及。 **取值范围**：取\&quot;training-event\&quot;。 **默认取值**：不涉及。
     * @param {ReportEventBody} [notifyTrainingJobInformationRequestBody] **参数解释**：事件上报请求体。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public notifyTrainingJobInformation(notifyTrainingJobInformationRequest?: NotifyTrainingJobInformationRequest): Promise<NotifyTrainingJobInformationResponse> {
        const options = ParamCreater().notifyTrainingJobInformation(notifyTrainingJobInformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新网络资源接口用于修改指定网络资源的配置信息。该接口适用于以下场景：当需要调整网络资源的属性、修复配置错误或优化资源设置时，用户可通过此接口更新指定网络资源的详细信息。使用该接口的前提条件是网络资源已存在且用户具有管理员权限。更新操作完成后，指定网络资源的配置信息将被成功修改，系统将反映最新的资源状态和属性。若指定的网络资源不存在、用户无权限操作或输入参数有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新网络资源
     * @param {string} networkName **参数解释**：网络资源名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {NetworkUpdateRequest} body 更新网络资源的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public patchNetwork(patchNetworkRequest?: PatchNetworkRequest): Promise<PatchNetworkResponse> {
        const options = ParamCreater().patchNetwork(patchNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新节点池接口用于修改指定节点池的配置信息。该接口适用于以下场景：当需要扩展节点池容量、调整节点规格、优化资源分配或修复节点池配置时，用户可通过此接口更新节点池的相关信息。使用该接口的前提条件是节点池已存在且用户具有管理员权限。更新操作完成后，节点池的配置将被更新，包括节点数量、规格、网络配置等参数。若节点池不存在、用户无权限操作或配置参数错误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新节点池
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} nodepoolName **参数解释**：节点池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {PatchNodePoolRequestBody} patchNodePoolRequestBody **参数解释**：更新节点池的请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public patchNodePool(patchNodePoolRequest?: PatchNodePoolRequest): Promise<PatchNodePoolResponse> {
        const options = ParamCreater().patchNodePool(patchNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新资源池接口用于修改指定资源池的配置和容量。该接口适用于以下场景：当资源池需要扩展容量、调整配置或优化性能时，用户可通过此接口更新资源池的相关信息。使用该接口的前提条件是资源池已存在且用户具有管理员权限。更新操作完成后，资源池的配置和容量将被更新，相关资源和配置也将被调整。若资源池不存在、用户无权限操作或资源池处于不可更新状态，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源池
     * @param {string} poolName **参数解释**：系统生成的资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {PoolUpdateRequest} updatePoolRequestBody **参数解释**：更新资源池的请求体。
     * @param {string} [xModelArtsUserID] **参数解释**：实际的外部租户ID，如果有的话，工作空间鉴权以该ID为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public patchPool(patchPoolRequest?: PatchPoolRequest): Promise<PatchPoolResponse> {
        const options = ParamCreater().patchPool(patchPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 注册自定义镜像接口用于将用户自定义的镜像注册到ModelArts镜像管理。该接口适用于以下场景：当用户需要将自己的自定义镜像（如特定算法环境、工具链或配置）集成到ModelArts平台时，可通过此接口将镜像注册到镜像管理中以便后续使用。使用该接口的前提条件是用户具备ModelArts镜像管理权限，并且需要提供有效的镜像地址和符合要求的镜像格式。注册操作完成后，自定义镜像将被成功添加到ModelArts镜像列表中，用户可以在后续任务中选择使用该镜像。若镜像地址无效、镜像格式不符合要求或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册自定义镜像
     * @param {ImageRegRequest} imageRegRequest **参数解释**：注册镜像请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerImage(registerImageRequest?: RegisterImageRequest): Promise<RegisterImageResponse> {
        const options = ParamCreater().registerImage(registerImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据算法id查询指定算法。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询算法详情
     * @param {string} algorithmId 算法ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlgorithmByUuid(showAlgorithmByUuidRequest?: ShowAlgorithmByUuidRequest): Promise<ShowAlgorithmByUuidResponse> {
        const options = ParamCreater().showAlgorithmByUuid(showAlgorithmByUuidRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询授权模式接口用于获取指定资源或功能的授权方式和权限配置信息。该接口适用于以下场景：当系统管理员需要查看资源的访问权限设置、开发者需要验证授权策略配置是否正确，或安全审计人员需要检查授权配置是否符合安全规范时，可通过此接口查询授权模式的详细信息。使用该接口的前提条件是用户具有查询权限且目标资源或功能的授权模式已配置。调用成功后，接口将返回授权模式的类型、规则及权限范围等详细信息。若用户无权限访问该接口，或目标资源的授权模式未配置，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询授权模式
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuthmodeDetail(showAuthmodeDetailRequest?: ShowAuthmodeDetailRequest): Promise<ShowAuthmodeDetailResponse> {
        const options = ParamCreater().showAuthmodeDetail();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取某个超参敏感度分析图像的保存路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取某个超参敏感度分析图像的路径
     * @param {string} parameterName 搜索参数名称
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoSearchParamAnalysisResultPath(showAutoSearchParamAnalysisResultPathRequest?: ShowAutoSearchParamAnalysisResultPathRequest): Promise<ShowAutoSearchParamAnalysisResultPathResponse> {
        const options = ParamCreater().showAutoSearchParamAnalysisResultPath(showAutoSearchParamAnalysisResultPathRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取超参敏感度分析结果的汇总表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取超参敏感度分析结果
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoSearchParamsAnalysis(showAutoSearchParamsAnalysisRequest?: ShowAutoSearchParamsAnalysisRequest): Promise<ShowAutoSearchParamsAnalysisResponse> {
        const options = ParamCreater().showAutoSearchParamsAnalysis(showAutoSearchParamsAnalysisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据传入的trial_id，查询指定trial的搜索结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询超参搜索某个trial的结果
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {string} trialId 超参搜索的trial_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoSearchPerTrial(showAutoSearchPerTrialRequest?: ShowAutoSearchPerTrialRequest): Promise<ShowAutoSearchPerTrialResponse> {
        const options = ParamCreater().showAutoSearchPerTrial(showAutoSearchPerTrialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提前终止自动化搜索作业的某个trial。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提前终止自动化搜索作业的某个trial
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {string} trialId 超参搜索的trial_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoSearchTrialEarlyStop(showAutoSearchTrialEarlyStopRequest?: ShowAutoSearchTrialEarlyStopRequest): Promise<ShowAutoSearchTrialEarlyStopResponse> {
        const options = ParamCreater().showAutoSearchTrialEarlyStop(showAutoSearchTrialEarlyStopRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询超参搜索所有trial的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询超参搜索所有trial的结果
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {number} [limit] 返回的数据条目数。
     * @param {number} [offset] 数据条目偏移量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoSearchTrials(showAutoSearchTrialsRequest?: ShowAutoSearchTrialsRequest): Promise<ShowAutoSearchTrialsResponse> {
        const options = ParamCreater().showAutoSearchTrials(showAutoSearchTrialsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取自动化搜索作业yaml模板的内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自动化搜索作业yaml模板的内容
     * @param {string} algorithmType 搜索算法类型。
     * @param {string} algorithmName 搜索算法名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoSearchYamlTemplateContent(showAutoSearchYamlTemplateContentRequest?: ShowAutoSearchYamlTemplateContentRequest): Promise<ShowAutoSearchYamlTemplateContentResponse> {
        const options = ParamCreater().showAutoSearchYamlTemplateContent(showAutoSearchYamlTemplateContentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取自动化搜索作业yaml模板的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自动化搜索作业yaml模板的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoSearchYamlTemplatesInfo(showAutoSearchYamlTemplatesInfoRequest?: ShowAutoSearchYamlTemplatesInfoRequest): Promise<ShowAutoSearchYamlTemplatesInfoResponse> {
        const options = ParamCreater().showAutoSearchYamlTemplatesInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取动态挂载OBS实例详情接口用于获取已挂载到运行中Notebook实例中的存储实例的详细信息。
     * 
     * 适用场景：用户需要查看Notebook实例中已挂载的存储实例的详细信息时，可通过此接口获取。使用该接口的前提条件是用户已登录系统并具有访问目标Notebook实例的权限。调用该接口后，系统将返回指定Notebook实例中挂载的存储实例的详细信息。若用户无权限访问指定实例，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取动态挂载存储实例详情
     * @param {string} instanceId **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} storageId **参数解释**：存储ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDynamicStorage(showDynamicStorageRequest?: ShowDynamicStorageRequest): Promise<ShowDynamicStorageResponse> {
        const options = ParamCreater().showDynamicStorage(showDynamicStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像详情接口用于查询镜像的详细信息。该接口适用于以下场景：当用户需要了解特定镜像的详细信息（如镜像名称、版本、创建时间、大小、状态等）或对镜像执行一些操作时，可通过此接口获取镜像的详细信息。使用该接口的前提条件是用户具备镜像管理权限，并且待查询镜像有效且存在。查询操作完成后，将返回镜像的详细信息，包括镜像ID、名称、版本、创建时间、大小以及状态等。若镜像不存在或用户无权限访问，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像详情
     * @param {string} id **参数解释**：镜像ID，ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImage(showImageRequest?: ShowImageRequest): Promise<ShowImageResponse> {
        const options = ParamCreater().showImage(showImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过服务ID、部署ID查询对应的部署详情，调用者可以通过有效的服务ID、部署ID获取部署的名称、状态、服务实例、配置参数等详细信息。调用者需具有足够的权限，且输入的服务ID、部署ID必须有效。查询成功时返回部署详细信息，查询失败时返回特定的错误码和错误信息。若服务ID或者部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务部署详情
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInferDeployment(showInferDeploymentRequest?: ShowInferDeploymentRequest): Promise<ShowInferDeploymentResponse> {
        const options = ParamCreater().showInferDeployment(showInferDeploymentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于获取指定服务部署版本的详细信息，适用于需要查看特定版本的详细配置和状态的场景，例如确认版本的功能、性能参数或发布历史。请求需包含有效的服务ID、部署ID及版本号。用户必须具有对目标服务部署的查看权限。请求成功后，返回该版本的详细信息，包括版本号、发布时间、配置参数和状态。若服务ID、部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；若服务部署无该版本信息，则返回404 Not Found。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询在线服务部署版本详情
     * @param {string} serviceId **参数解释：** 服务ID，在创建服务时即可在返回体中获取，也可通过查询服务列表接口获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} version 版本
     * @param {string} deploymentId 部署id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInferDeploymentVersion(showInferDeploymentVersionRequest?: ShowInferDeploymentVersionRequest): Promise<ShowInferDeploymentVersionResponse> {
        const options = ParamCreater().showInferDeploymentVersion(showInferDeploymentVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过服务ID查询对应的服务详情，调用者可以通过有效的服务ID获取服务的名称、状态、服务实例、配置参数等详细信息。调用者需具有足够的权限，且输入的服务ID必须有效。查询成功时返回服务详细信息，查询失败时返回特定的错误码和错误信息。若服务ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务详情
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInferService(showInferServiceRequest?: ShowInferServiceRequest): Promise<ShowInferServiceResponse> {
        const options = ParamCreater().showInferService(showInferServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口允许用户通过指定资源池的ID来查询纳管资源池的详细信息，包括实例ID、名称、Flavor规格、实例状态和实例可访问的URL。此功能适用于需要监控或管理云资源的用户，使用该接口前，用户需确保已拥有访问权限及正确的资源池ID。执行成功后，用户将获得所需的实例详情，可用于进一步的资源管理和配置。如果资源池ID无效或用户没有相应的访问权限，接口将返回错误信息，如404 Not Found或401 Unauthorized。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询纳管资源池详情
     * @param {string} id **参数解释：** 资源池ID，查询指定资源池下的服务，默认不过滤。可通过[查询资源池列表](ShowPool.xml)获取。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [xUserToken] **参数解释：** 用户Token。[通过调用IAM服务获取用户Token接口获取响应消息头中X-Subject-Token的值。](tag:hws,hws_hk)获取方法请参见[[获取IAM用户Token（使用密码）](modelarts_03_0004.xml)](tag:hws,hws_hk)[[获取Token](modelarts_03_0015.xml)](tag:hcs,hcs_sm)。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInferServiceCluster(showInferServiceClusterRequest?: ShowInferServiceClusterRequest): Promise<ShowInferServiceClusterResponse> {
        const options = ParamCreater().showInferServiceCluster(showInferServiceClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要获取资源（如模型、数据集、服务等）的标签信息的场景，例如在资源管理或分类中，用户可以通过查询标签来了解资源的用途、状态或其他属性。通过调用此接口，用户可以通过资源ID获取指定资源的所有标签列表。用户必须具有足够的权限，且目标资源需存在。查询成功后，返回资源的标签列表；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {string} resourceId **参数解释：** 待创建标签的资源ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [workspaceId] **参数解释：** 工作空间ID，workspaceId将会被设置为null。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInferServiceTags(showInferServiceTagsRequest?: ShowInferServiceTagsRequest): Promise<ShowInferServiceTagsResponse> {
        const options = ParamCreater().showInferServiceTags(showInferServiceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络资源接口用于获取指定网络资源的详情信息。该接口适用于以下场景：当用户需要查看特定网络资源的详细配置、状态或属性时，可通过此接口查询指定网络资源的详细信息。使用该接口的前提条件是用户具有相应的权限，并且指定的网络资源已存在于系统中。查询操作完成后，接口将返回指定网络资源的详细信息，包括资源ID、类型、状态、配置参数等。若指定的网络资源不存在、用户无权限操作或输入参数有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络资源
     * @param {string} networkName **参数解释**：网络的ID，取值自网络详情的metadata.name字段。 **约束限制**：只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长度为[36-63]个字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNetwork(showNetworkRequest?: ShowNetworkRequest): Promise<ShowNetworkResponse> {
        const options = ParamCreater().showNetwork(showNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络可用的IP接口用于查找指定网络中未被占用的IP地址。该接口适用于以下场景：在网络规划、资源分配或故障排查时，用户需要快速获取可用的IP地址信息。使用该接口的前提条件是用户具有访问目标网络的权限，并且需要提供有效的网络范围（如子网掩码或IP段）。查询完成后，接口将返回指定网络中未被占用的IP地址列表，用户可以根据结果进行IP地址的分配或进一步操作。若网络不可达、权限不足或网络范围有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络可用的IP
     * @param {string} networkName **参数解释**：网络ID。取值自网络详情的metadata.name字段。 **约束限制**：1 - 64字符，字母、数字和中划线。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} networkId **参数解释**：子网ID。取值自网络详情status.subnets字段中的networkId字段。 **约束限制**：1 - 64字符，字母、数字和中划线。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNetworkAvailableIp(showNetworkAvailableIpRequest?: ShowNetworkAvailableIpRequest): Promise<ShowNetworkAvailableIpResponse> {
        const options = ParamCreater().showNetworkAvailableIp(showNetworkAvailableIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询节点配置模板接口用于获取指定节点配置模板的详细信息。该接口适用于以下场景：当用户需要查看节点配置模板的内容、管理节点配置或进行相关操作时，可通过此接口获取指定节点配置模板的详细信息。使用该接口的前提条件是节点配置模板已存在且用户具有相应的访问权限。调用该接口后，系统将返回指定节点配置模板的详细信息，包括模板名称、版本、配置参数及描述等。若节点配置模板不存在或用户无权限访问，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询节点配置模板
     * @param {string} nodeconfigtemplateName **参数解释**：节点配置模板的名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodeConfigTemplate(showNodeConfigTemplateRequest?: ShowNodeConfigTemplateRequest): Promise<ShowNodeConfigTemplateResponse> {
        const options = ParamCreater().showNodeConfigTemplate(showNodeConfigTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定节点池详情接口用于获取指定节点池的详细信息。该接口适用于以下场景：当需要查看节点池的配置、状态、资源使用情况或管理节点池时，用户可通过此接口获取节点池的详细信息。使用该接口的前提条件是节点池已存在且用户具有访问该节点池的权限。调用接口成功后，系统将返回节点池的详细信息，包括节点池ID、名称、节点数量、状态、创建时间、配置参数等。若节点池不存在、用户无权限访问或节点池当前不可用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定节点池详情
     * @param {string} poolName **参数解释**：资源池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} nodepoolName **参数解释**：节点池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [_continue] **参数解释**：分页查询时上一页位置。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [limit] **参数解释**：分页单次查询返回数。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodePool(showNodePoolRequest?: ShowNodePoolRequest): Promise<ShowNodePoolResponse> {
        const options = ParamCreater().showNodePool(showNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练作业指定任务的日志（OBS临时链接，有效期5分钟），可全量查看或直接下载。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练作业指定任务的日志（OBS链接）
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {string} taskId 训练作业的任务名称。可从训练作业详情中的status.tasks字段中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showObsUrlOfTrainingJobLogs(showObsUrlOfTrainingJobLogsRequest?: ShowObsUrlOfTrainingJobLogsRequest): Promise<ShowObsUrlOfTrainingJobLogsResponse> {
        const options = ParamCreater().showObsUrlOfTrainingJobLogs(showObsUrlOfTrainingJobLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询订单详情接口用于获取指定订单的详细信息。该接口适用于以下场景：当需要查看订单的状态、金额、商品信息或处理订单相关问题时，用户可通过此接口获取订单的详细数据。使用该接口的前提条件是订单已存在且用户具有访问该订单的权限。调用接口成功后，系统将返回订单的详细信息，包括订单号、商品列表、金额、支付状态、下单时间等。若订单不存在、用户无权限访问或订单信息未正确配置，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询订单详情
     * @param {string} orderName **参数解释**：订单ID。取值自订单列表返回的orderName字段。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrder(showOrderRequest?: ShowOrderRequest): Promise<ShowOrderResponse> {
        const options = ParamCreater().showOrder(showOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OS的配置参数接口用于获取ModelArts OS服务的配置参数，如网络网段、用户资源配额等。该接口适用于以下场景：当需要了解当前ModelArts OS服务的网络配置、资源分配情况或进行系统管理时，用户可通过此接口查询相关的配置参数。使用该接口的前提条件是用户具有访问ModelArts OS服务的权限，且服务处于正常运行状态。查询操作完成后，用户将获得指定的配置参数信息，便于进行后续的资源规划或系统优化。若用户无权限访问、服务不可用或请求参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OS的配置参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOsConfig(showOsConfigRequest?: ShowOsConfigRequest): Promise<ShowOsConfigResponse> {
        const options = ParamCreater().showOsConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OS配额接口用于获取ModelArts OS服务中部分资源的配额信息，如资源池配额、网络配额等。该接口适用于以下场景：当需要了解资源池或网络资源的使用限制、规划资源分配或监控资源使用情况时，用户可通过此接口获取相关配额信息。使用该接口的前提条件是ModelArts OS服务已部署且用户具有相应的权限（如管理员权限或资源管理权限）。调用接口成功后，系统将返回资源池配额、网络配额等详细信息，帮助用户更好地进行资源规划和管理。若用户无权限访问该接口、服务不可用或配额信息未配置，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OS的配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOsQuota(showOsQuotaRequest?: ShowOsQuotaRequest): Promise<ShowOsQuotaResponse> {
        const options = ParamCreater().showOsQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件模板接口用于获取指定插件模板的详细信息。该接口适用于以下场景：当需要了解特定插件模板的配置、功能或使用方式时，用户可通过此接口查询插件模板的详细信息。使用该接口的前提条件是插件模板已存在且用户具有访问权限。查询操作完成后，用户将获得指定插件模板的详细信息，包括模板的配置参数、功能描述等，便于后续的插件开发或配置管理。若插件模板不存在或用户无权限访问，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件模板
     * @param {string} plugintemplateName **参数解释**：插件模板的名称。 **约束限制**：不涉及。 **取值范围**：可选值如下： - gpu-driver：GPU驱动插件模板信息 - npu-driver：NPU驱动插件模板信息 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPluginTemplate(showPluginTemplateRequest?: ShowPluginTemplateRequest): Promise<ShowPluginTemplateResponse> {
        const options = ParamCreater().showPluginTemplate(showPluginTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池信息接口用于获取指定资源池的详细信息。该接口适用于以下场景：当用户需要查看特定资源池的详细配置、状态、资源使用情况或进行资源管理时，可通过此接口查询指定资源池的详细信息。使用该接口的前提条件是用户具有相应的权限，并且指定的资源池已存在于系统中。查询操作完成后，接口将返回资源池的详细信息，包括资源池ID、名称、类型、状态、资源配额、利用率等。若指定的资源池不存在、用户无权限操作或输入参数有误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池
     * @param {string} poolName **参数解释**：资源池的ID，取值自资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长度为36-63。 **默认取值**：不涉及。
     * @param {string} [xModelArtsUserID] **参数解释**：租户ID，传递该参数鉴权以该租户ID为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPool(showPoolRequest?: ShowPoolRequest): Promise<ShowPoolResponse> {
        const options = ParamCreater().showPool(showPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资源池监控接口用于获取指定资源池的实时或历史监控信息。该接口适用于以下场景：当需要实时查看资源池的资源使用情况、性能状态或历史数据时，用户可通过此接口获取资源池的监控数据。使用该接口的前提条件是资源池已存在且用户具有管理员权限。调用接口成功后，系统将返回资源池的监控信息，包括资源使用率、性能指标及历史趋势等数据。若资源池不存在、用户无权限操作或资源池当前不可用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资源池监控
     * @param {string} poolName **参数解释**：资源池的ID，取值自资源池详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长度为[36-63]个字符。 **默认取值**：不涉及。
     * @param {string} [timeRange] **参数解释**：查询资源池监控信息的时间范围，格式为startTimeInMillis.endTimeInMillis.durationInMinutes。其中，startTimeInMillis表示查询的开始时间，格式为UTC毫秒，如果指定为-1，服务端将按(endTimeInMillis - durationInMinutes * 60 * 1000)计算开始时间。endTimeInMillis表示查询的结束时间，格式为UTC毫秒，如果指定为-1，服务端将按(startTimeInMillis + durationInMinutes * 60 * 1000)计算结束时间，如果计算出的结束时间大于当前系统时间，则使用当前系统时间。durationInMinutes表示查询时间的跨度分钟数。 取值范围大于0并且小于等于(endTimeInMillis - startTimeInMillis) / (60 * 1000) - 1。当开始时间与结束时间都设置为-1时，系统会将结束时间设置为当前时间UTC毫秒值，并按(endTimeInMillis - durationInMinutes * 60 * 1000)计算开始时间。如：-1.-1.60(表示最近60分钟)。 **约束限制**：单次请求中，查询时长与周期需要满足以下条件: durationInMinutes * 60 / period &lt;&#x3D; 1440。 **取值范围**：不涉及。 **默认取值**：-1.-1.60。  查询时间范围，默认值“-1.-1.60”。格式为startTimeInMillis.endTimeInMillis.durationInMinutes，参数解释： - startTimeInMillis: 查询的开始时间，格式为UTC毫秒，如果指定为-1，服务端将按(endTimeInMillis - durationInMinutes * 60 * 1000)计算开始时间 - endTimeInMillis: 查询的结束时间，格式为UTC毫秒，如果指定为-1，服务端将按(startTimeInMillis + durationInMinutes * 60 * 1000)计算结束时间，如果计算出的结束时间大于当前系统时间，则使用当前系统时间 - durationInMinutes：查询时间的跨度分钟数。 取值范围大于0并且小于等于(endTimeInMillis - startTimeInMillis) / (60 * 1000) - 1 当开始时间与结束时间都设置为-1时，系统会将结束时间设置为当前时间UTC毫秒值，并按(endTimeInMillis - durationInMinutes * 60 * 1000)计算开始时间。如：-1.-1.60(表示最近60分钟)约束：单次请求中，查询时长与周期需要满足以下条件: durationInMinutes * 60 / period &lt;&#x3D; 1440。
     * @param {string} [statistics] **参数解释**：资源池监控信息在指定时间粒度下的统计方式。 **约束限制**：不涉及。 **取值范围**：可选值如下： - maximum：最大值统计，默认值。 - minimum：最小值统计。 - sum：求和统计。 - average：平均值统计。 - sampleCount：采样统计。 **默认取值**：maximum。
     * @param {string} [period] **参数解释**：查询资源池监控信息的时间粒度，以秒为单位。 **约束限制**：不涉及。 **取值范围**：可选值如下： - 60：粒度为1分钟，默认值。 - 300：粒度为5分钟。 - 900：粒度为15分钟。 - 3600：粒度为1小时。 **默认取值**：60。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPoolMonitor(showPoolMonitorRequest?: ShowPoolMonitorRequest): Promise<ShowPoolMonitorResponse> {
        const options = ParamCreater().showPoolMonitor(showPoolMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池中的单个节点接口用于获取指定资源池内单个节点的详细信息。该接口适用于以下场景：当用户需要了解节点资源分配、详细信息时，可通过此接口获取节点的类型、状态、配置参数及关联服务等信息。使用该接口的前提条件是目标资源池已存在且用户具备查看权限，同时需提供有效的资源池标识符作为输入参数。接口调用后，系统将返回资源池中单个节点数据；若资源池不存在、用户权限不足或输入参数无效，接口将返回对应的错误信息（如404未找到资源池或403权限拒绝）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池单个节点详情
     * @param {string} poolName **参数解释**：资源池的ID，取值自资源池详情的metadata.name字段。 **约束限制**：只能以小写字母开头，数字、中划线组成，不能以中划线结尾，且长度为36-63个字符。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} nodeName **参数解释**：节点名称。取值节点详情的metadata.name字段。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPoolNode(showPoolNodeRequest?: ShowPoolNodeRequest): Promise<ShowPoolNodeResponse> {
        const options = ParamCreater().showPoolNode(showPoolNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池节点自定义配置接口用于获取指定资源池节点的自定义配置信息。该接口适用于以下场景：当需要查看资源池节点的详细配置、优化资源分配或管理节点资源时，用户可通过此接口获取节点的自定义配置数据。使用该接口的前提条件是资源池节点已存在且用户具有访问该节点的权限。调用接口成功后，系统将返回资源池节点的自定义配置信息，包括硬件规格、软件环境、网络设置等详细参数。若资源池节点不存在、用户无权限访问或节点配置信息未正确配置，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池节点自定义配置
     * @param {string} poolName **参数解释**：池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPoolNodeConfig(showPoolNodeConfigRequest?: ShowPoolNodeConfigRequest): Promise<ShowPoolNodeConfigResponse> {
        const options = ParamCreater().showPoolNodeConfig(showPoolNodeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池节点自定义配置模板接口用于获取节点配置模板的结构定义与参数规范。该接口适用于以下场景：当需要了解节点自定义配置的模板结构（如参数字段、校验规则、示例值）、验证配置模板是否符合规范或进行配置模板选型时，用户可通过此接口获取模板的元数据（如参数说明、类型限制、依赖关系等）。使用该接口的前提条件是目标配置模板必须已注册至系统且处于可访问状态，调用者需具备模板查看权限，且系统配置管理服务正常运行。查询操作完成后，系统将返回模板的完整定义信息（如参数列表、版本号、更新时间等），且不会对模板内容或节点配置产生影响。若模板未注册、用户权限不足或系统服务异常，接口将返回对应的错误信息（如\&quot;404 Not Found\&quot;、\&quot;403 Forbidden\&quot;或\&quot;503 Service Unavailable\&quot;）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池节点自定义配置模板
     * @param {string} poolName **参数解释**：池名称。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPoolNodeConfigTemplate(showPoolNodeConfigTemplateRequest?: ShowPoolNodeConfigTemplateRequest): Promise<ShowPoolNodeConfigTemplateResponse> {
        const options = ParamCreater().showPoolNodeConfigTemplate(showPoolNodeConfigTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源实时利用率接口用于获取当前项目下所有资源池的实时利用率信息。该接口适用于以下场景：当用户需要监控资源使用情况、进行资源优化、容量规划或故障排查时，可通过此接口查询资源池的实时利用率，包括CPU、内存、存储等资源的使用情况。使用该接口的前提条件是用户具有访问该项目的权限，并且资源池已存在且处于运行状态。查询操作完成后，接口将返回资源池的实时利用率数据，包含利用率百分比、资源类型、时间戳等详细信息。若用户无权限、资源池不存在或系统无法获取实时数据，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实时利用率
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPoolRuntimeMetrics(showPoolRuntimeMetricsRequest?: ShowPoolRuntimeMetricsRequest): Promise<ShowPoolRuntimeMetricsResponse> {
        const options = ParamCreater().showPoolRuntimeMetrics();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资源池统计接口用于获取指定资源池的统计信息。该接口适用于以下场景：当需要了解资源池的资源使用情况、分配情况或利用率时，用户可通过此接口获取资源池的统计数据。使用该接口的前提条件是资源池已存在且用户具有管理员权限。调用接口成功后，系统将返回资源池的统计信息，包括资源使用总量、已分配量、利用率及资源分配趋势等数据。若资源池不存在、用户无权限操作或资源池当前不可用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资源池统计
     * @param {string} [workspaceId] **参数解释**：工作空间，默认值为0。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPoolStatistics(showPoolStatisticsRequest?: ShowPoolStatisticsRequest): Promise<ShowPoolStatisticsResponse> {
        const options = ParamCreater().showPoolStatistics(showPoolStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源池的标签接口用于获取指定资源池的标签信息。该接口适用于以下场景：当需要查看、管理或统计特定资源池的标签信息时，用户可通过此接口获取资源池的标签数据。使用该接口的前提条件是资源池已存在且用户具有访问该资源池的权限。调用接口成功后，系统将返回指定资源池的标签信息，包括标签键和标签值。若资源池不存在、用户无权限访问或资源池未配置标签，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源池上的标签
     * @param {string} poolName **参数解释**：资源池名称。取自资源池详情的metadata字段中的name的值。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPoolTags(showPoolTagsRequest?: ShowPoolTagsRequest): Promise<ShowPoolTagsResponse> {
        const options = ParamCreater().showPoolTags(showPoolTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练作业镜像保存任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练作业镜像保存任务
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {string} taskId 训练作业的任务名称。可从训练作业详情中的status.tasks字段中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSaveImageJob(showSaveImageJobRequest?: ShowSaveImageJobRequest): Promise<ShowSaveImageJobResponse> {
        const options = ParamCreater().showSaveImageJob(showSaveImageJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取支持的超参搜索算法。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取支持的超参搜索算法
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSearchAlgorithms(showSearchAlgorithmsRequest?: ShowSearchAlgorithmsRequest): Promise<ShowSearchAlgorithmsResponse> {
        const options = ParamCreater().showSearchAlgorithms();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练作业标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练作业标签
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainJobTags(showTrainJobTagsRequest?: ShowTrainJobTagsRequest): Promise<ShowTrainJobTagsResponse> {
        const options = ParamCreater().showTrainJobTags(showTrainJobTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练实验详情接口用于获取指定训练实验的详细信息。
     * 该接口适用于以下场景：当用户需要查看训练实验的实验名称、描述、创建时间等详细信息时，可以通过此接口获取。使用该接口的前提条件是训练实验已存在且用户具有查看该实验的权限。查询操作完成后，将返回训练实验的详细信息，包括但不限于实验ID、名称、描述、创建时间等。若训练实验不存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练实验详情
     * @param {string} experimentId **参数解释**：实验ID。创建训练实验时自动生成返回。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainingExperimentDetails(showTrainingExperimentDetailsRequest?: ShowTrainingExperimentDetailsRequest): Promise<ShowTrainingExperimentDetailsResponse> {
        const options = ParamCreater().showTrainingExperimentDetails(showTrainingExperimentDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练作业详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练作业详情
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainingJobDetails(showTrainingJobDetailsRequest?: ShowTrainingJobDetailsRequest): Promise<ShowTrainingJobDetailsResponse> {
        const options = ParamCreater().showTrainingJobDetails(showTrainingJobDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取训练作业支持的AI预置框架。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取训练作业支持的AI预置框架
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainingJobEngines(showTrainingJobEnginesRequest?: ShowTrainingJobEnginesRequest): Promise<ShowTrainingJobEnginesResponse> {
        const options = ParamCreater().showTrainingJobEngines();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取训练作业支持的公共规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取训练作业支持的公共规格
     * @param {string} [flavorType] 查询训练作业规格的类型，不填为查询所有。枚举值：  - CPU  - GPU  - [Ascend](tag:hc,hk,fcs_super)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainingJobFlavors(showTrainingJobFlavorsRequest?: ShowTrainingJobFlavorsRequest): Promise<ShowTrainingJobFlavorsResponse> {
        const options = ParamCreater().showTrainingJobFlavors(showTrainingJobFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练作业指定任务的日志（预览）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练作业指定任务的日志（预览）
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {string} taskId 训练作业的任务名称。可从训练作业详情中的status.tasks字段中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainingJobLogsPreview(showTrainingJobLogsPreviewRequest?: ShowTrainingJobLogsPreviewRequest): Promise<ShowTrainingJobLogsPreviewResponse> {
        const options = ParamCreater().showTrainingJobLogsPreview(showTrainingJobLogsPreviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询训练作业指定任务的运行指标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询训练作业指定任务的运行指标
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {string} taskId 训练作业的任务名称。可从训练作业详情中的status.tasks字段中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainingJobMetrics(showTrainingJobMetricsRequest?: ShowTrainingJobMetricsRequest): Promise<ShowTrainingJobMetricsResponse> {
        const options = ParamCreater().showTrainingJobMetrics(showTrainingJobMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取训练配额接口用于查询用户在ModelArts服务中的训练资源配额信息。
     * 该接口适用于以下场景：当用户需要了解当前可用的训练资源配额，以便合理规划和管理训练任务时，可以通过此接口获取配额详情。使用该接口的前提条件是用户已登录并具有查看配额的权限。响应消息体中包含用户已创建的训练作业个数、剩余可创建个数等。若用户无权限或配额信息为空，接口将返回相应的错误信息或空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取训练配额
     * @param {string} [userId] **参数解释**：用户ID。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [resource] **参数解释**：配额的资源类型。 **约束限制**：当前支持的传参：job-num（作业个数的配额）。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrainingQuotas(showTrainingQuotasRequest?: ShowTrainingQuotasRequest): Promise<ShowTrainingQuotasResponse> {
        const options = ParamCreater().showTrainingQuotas(showTrainingQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询专属资源池作业统计信息接口用于获取指定专属资源池中作业的统计信息。该接口适用于以下场景：当需要了解专属资源池中作业的整体运行情况、资源使用效率或作业状态分布时，用户可通过此接口获取统计信息。使用该接口的前提条件是专属资源池已存在且用户具有相应的权限（如管理员权限或资源管理权限）。调用接口成功后，系统将返回专属资源池中作业的统计信息，包括作业总数、运行中作业数、完成作业数、资源使用率等数据。若专属资源池不存在、用户无权限操作或资源池当前不可用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属资源池作业统计信息
     * @param {string} poolName **参数解释**：作业所属的资源池。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkloadStatistics(showWorkloadStatisticsRequest?: ShowWorkloadStatisticsRequest): Promise<ShowWorkloadStatisticsResponse> {
        const options = ParamCreater().showWorkloadStatistics(showWorkloadStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作空间详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作空间详情
     * @param {string} workspaceId 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkspace(showWorkspaceRequest?: ShowWorkspaceRequest): Promise<ShowWorkspaceResponse> {
        const options = ParamCreater().showWorkspace(showWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作空间配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作空间配额
     * @param {string} workspaceId 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkspaceQuotas(showWorkspaceQuotasRequest?: ShowWorkspaceQuotasRequest): Promise<ShowWorkspaceQuotasResponse> {
        const options = ParamCreater().showWorkspaceQuotas(showWorkspaceQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使部署从“停止”或“失败”状态进入“部署中”状态，适用于用户需要重新启动已停止或启动失败的部署的情况。调用此接口前，部署状态必须为“停止”或“失败”，且用户需具有启动部署的权限。调用成功后，部署状态将变为“部署中”，系统将开始执行部署流程，包括资源准备、配置加载等。如果部署当前状态不是“停止”或“失败”，或用户没有启动部署的权限，调用将返回错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动服务部署
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInferDeployment(startInferDeploymentRequest?: StartInferDeploymentRequest): Promise<StartInferDeploymentResponse> {
        const options = ParamCreater().startInferDeployment(startInferDeploymentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使服务从\&quot;停止\&quot;或\&quot;失败\&quot;状态进入\&quot;部署中\&quot;状态，适用于用户需要重新启动已停止或启动失败的服务的情况。调用此接口前，服务状态必须为\&quot;停止\&quot;或\&quot;失败\&quot;，且用户需具有启动服务的权限。调用成功后，服务状态将变为\&quot;部署中\&quot;，系统将开始执行部署流程，包括资源准备、配置加载等。如果服务当前状态不是\&quot;停止\&quot;或\&quot;失败\&quot;，或用户没有启动服务的权限，调用将返回错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动服务
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInferService(startInferServiceRequest?: StartInferServiceRequest): Promise<StartInferServiceResponse> {
        const options = ParamCreater().startInferService(startInferServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止在线部署功能允许用户在特定状态下主动终止正在运行或处于其他可操作状态的部署实例。该功能适用于需要维护、升级或检测到异常的服务场景，支持在服务处于\&quot;运行中\&quot;、\&quot;部署中\&quot;、\&quot;失败\&quot;或\&quot;告警\&quot;状态时执行停止操作。使用此功能前，请确保部署实例处于可停止状态，并具备相应的API调用权限。成功执行后，部署将进入停止状态，释放相关资源并停止处理新的请求。若部署不在允许停止的状态、调用权限不足或系统内部出现错误，将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止在线服务部署
     * @param {string} serviceId **参数解释：** 服务ID，在[创建部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferDeployments.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopInferDeployment(stopInferDeploymentRequest?: StopInferDeploymentRequest): Promise<StopInferDeploymentResponse> {
        const options = ParamCreater().stopInferDeployment(stopInferDeploymentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使服务从\&quot;运行中\&quot;状态进入\&quot;停止中\&quot;最终变为\&quot;停止\&quot;状态，适用于用户需要停止正在运行的服务以节省资源成本的场景。用户需具有停止服务的权限。调用成功后，服务状态将变为\&quot;停止中\&quot;，系统将开始执行停止流程，包括释放资源、保存状态等。如果用户没有停止服务的权限，调用将返回错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止服务
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopInferService(stopInferServiceRequest?: StopInferServiceRequest): Promise<StopInferServiceResponse> {
        const options = ParamCreater().stopInferService(stopInferServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 终止训练作业，只可终止创建中、等待中、运行中的作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 终止训练作业
     * @param {string} trainingJobId 训练作业ID。获取方法请参见[查询训练作业列表](ListTrainingJobs.xml)。
     * @param {JobActionType} body 对训练作业的操作请求。参数值设置为terminate时，表示终止训练作业操作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopTrainingJob(stopTrainingJobRequest?: StopTrainingJobRequest): Promise<StopTrainingJobResponse> {
        const options = ParamCreater().stopTrainingJob(stopTrainingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于将部署切换到指定版本，适用于需要在不同版本间进行切换以测试或回滚的场景。请求需包含有效的服务ID、部署ID及目标版本号，版本号必须是已发布的有效版本。用户必须具有对目标服务部署的管理权限，并且部署处于运行状态。切换成功后，部署将立即使用新的版本。若服务ID无效、部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；若部署状态不允许切换，则返回400 Bad Request。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换部署到指定版本
     * @param {string} serviceId **参数解释：** 服务ID，在创建服务时即可在返回体中获取，也可通过查询服务列表接口获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {string} version **参数解释：** 目标版本
     * @param {SwitchInferDeploymentVersionRequestBody} switchInferDeploymentVersionRequestBody **参数解释：** 服务切换请求体。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchInferDeploymentVersion(switchInferDeploymentVersionRequest?: SwitchInferDeploymentVersionRequest): Promise<SwitchInferDeploymentVersionResponse> {
        const options = ParamCreater().switchInferDeploymentVersion(switchInferDeploymentVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步镜像状态接口用于修正镜像状态的异常情况。该接口适用于以下场景：当镜像状态因误操作、网络问题或系统故障等原因出现异常时，用户可通过此接口同步镜像的最新状态。使用该接口的前提条件是镜像已存在且用户具有相应的操作权限。同步操作完成后，镜像的状态将被更新为最新的正确状态，相关资源和配置也将被同步。若镜像不存在、用户无权限操作或同步过程中出现错误，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步镜像状态
     * @param {string} imageId **参数解释**：镜像ID，ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncImage(syncImageRequest?: SyncImageRequest): Promise<SyncImageResponse> {
        const options = ParamCreater().syncImage(syncImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于将已绑定的apikey从指定服务中解绑，适用于需要撤销某个apikey对特定服务的访问权限的场景。调用此接口前，确保已获取到需要解绑的apikey，并确认该apikey当前绑定在指定服务上。解绑成功后，该apikey将不再对指定服务生效，但仍可继续用于其他服务。如果尝试解绑不存在或未绑定到指定服务的apikey，将返回相应的异常信息，提示用户检查apikey的有效性和绑定状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑应用密钥
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} keyId **参数解释：** apikey_id，在[创建API_KEY](CreateInferApiKey.xml)时即可在返回体中获取，也可通过[查询api-keys列表](ListInferApiKeys.xml)获取当前用户拥有的apikey，其中key_id字段即为apikey_id。 **约束限制：** 不涉及。 **取值范围：** apikey_id只能由英文小写字母、数字组成，且长度为32个字符。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unbindInferApiKey(unbindInferApiKeyRequest?: UnbindInferApiKeyRequest): Promise<UnbindInferApiKeyResponse> {
        const options = ParamCreater().unbindInferApiKey(unbindInferApiKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新授权模式接口用于修改指定资源或功能的授权方式和权限配置信息。该接口适用于以下场景：当系统管理员需要调整资源的访问权限、开发者需要更新授权策略以适应新的业务需求，或安全审计人员需要修改授权配置以符合新的安全规范时，可通过此接口更新授权模式的详细信息。使用该接口的前提条件是用户具有更新权限且目标资源或功能的授权模式已存在。调用成功后，接口将更新目标资源的授权模式，并返回更新后的授权模式信息。若用户无权限访问该接口，或目标资源的授权模式不存在，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新授权模式
     * @param {UpdateAuthModeRequestBody} updateAuthModeRequestBody 更新授权模式成功。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuthMode(updateAuthModeRequest?: UpdateAuthModeRequest): Promise<UpdateAuthModeResponse> {
        const options = ParamCreater().updateAuthMode(updateAuthModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新镜像组接口用于更新镜像组的标签及说明信息。该接口适用于以下场景：当镜像说明需要修改，或者镜像的标签需要修改时，用户可通过此接口修改。使用该接口的前提条件是镜像组已存在且用户具有更新权限。更新操作完成后，镜像组对应的配置文件会。若镜像组不存在、用户无权限操作或镜像正在被使用，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新镜像组
     * @param {string} id **参数解释**：镜像组ID，ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {UpdateImageGroupRequestBody} [updateImageGroupRequestBody] **参数解释**：镜像更新请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateImageGroup(updateImageGroupRequest?: UpdateImageGroupRequest): Promise<UpdateImageGroupResponse> {
        const options = ParamCreater().updateImageGroup(updateImageGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要动态调整模型服务部署配置的场景
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新服务部署配置
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {GroupConfigUpdateRequest} updateInferDeploymentRequestBody **参数解释：** 服务更新请求体。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInferDeployment(updateInferDeploymentRequest?: UpdateInferDeploymentRequest): Promise<UpdateInferDeploymentResponse> {
        const options = ParamCreater().updateInferDeployment(updateInferDeploymentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于模型服务实例扩缩容。通过调用此接口，用户可以在原有服务的情况下，对服务进行扩缩容，且不会增加新的版本；包括权限验证错误、服务状态错误和参数验证错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动服务扩缩容
     * @param {string} serviceId **参数解释：** 服务ID
     * @param {string} deploymentName **参数解释：** 部署名称，在创建部署时即可在返回体中获取，也可通过查询服务部署列表获取当前用户拥有的部署，其name字段即为部署名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {UpdateInferDeploymentScale} updateInferDeploymentScaleRequestBody **参数解释：** 服务更新请求体。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInferDeploymentScale(updateInferDeploymentScaleRequest?: UpdateInferDeploymentScaleRequest): Promise<UpdateInferDeploymentScaleResponse> {
        const options = ParamCreater().updateInferDeploymentScale(updateInferDeploymentScaleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于对当前租户的内网接入申请进行状态变更操作，支持通过（APPROVE）、拒绝（REJECT）、取消（CANCEL）和重试（RETRY）等操作。适用于需要管理内网接入申请审批流程的场景。调用此接口前，确保已具备相应的变更权限，并提供有效的内网申请ID和所需的操作类型。变更成功后，内网申请的状态将更新为指定的操作结果，并记录相关日志。如果提供的内网申请ID无效、操作类型不支持或权限不足，将返回相应的异常信息，提示用户检查输入数据的有效性和权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更内网申请
     * @param {string} id **参数解释：** 内网接入id。id可以根据[查询当前租户的内网接入申请列表](ListInferIntranetConnectionApplications.xml)返回body的id字段得到。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {UpdateIntranetConnectionRequestBody} [updateInferIntranetConnectionRequestBody] **参数解释：** 变更内网申请请求体。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInferIntranetConnection(updateInferIntranetConnectionRequest?: UpdateInferIntranetConnectionRequest): Promise<UpdateInferIntranetConnectionResponse> {
        const options = ParamCreater().updateInferIntranetConnection(updateInferIntranetConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口适用于需要动态调整模型服务配置的场景，对模型的性能参数、资源池配置、服务调用配置等进行更新升级。通过调用此接口，用户可以在原有服务的情况下，升级成一个新的服务版本。调用此接口前，服务状态必须为“停止”、“失败”或“运行中”，且用户需具有修改服务的权限。更新成功后，新配置立即生效；若失败，服务保持原有配置并返回错误信息。常见异常包括参数验证错误、权限验证错误和服务状态错误。若服务ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；若服务状态不允许切换，则返回400 Bad Request。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新服务配置
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {ServiceUpdateRequest} updateInferServiceRequestBody **参数解释：** 服务更新请求体。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInferService(updateInferServiceRequest?: UpdateInferServiceRequest): Promise<UpdateInferServiceResponse> {
        const options = ParamCreater().updateInferService(updateInferServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改工作空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改工作空间
     * @param {string} workspaceId 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {UpdateWorkspaceReq} updateWorkspaceRequestBody 修改工作空间的请求体参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkspace(updateWorkspaceRequest?: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
        const options = ParamCreater().updateWorkspace(updateWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改工作空间配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改工作空间配额
     * @param {string} workspaceId 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {UpdateWorkspaceQuotasReq} updateWorkspaceQuotasRequestBody 修改工作空间配额的请求体参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkspaceQuotas(updateWorkspaceQuotasRequest?: UpdateWorkspaceQuotasRequest): Promise<UpdateWorkspaceQuotasResponse> {
        const options = ParamCreater().updateWorkspaceQuotas(updateWorkspaceQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 鉴权能否使用当前工作空间资源接口用于验证用户是否有权限访问和使用当前工作空间中的资源。该接口适用于以下场景：当用户尝试访问或操作工作空间中的资源时，系统需要确认用户是否具有相应的权限。使用该接口的前提条件是用户已登录且工作空间已存在。鉴权成功后，用户可以正常访问和使用工作空间资源；若鉴权失败，接口将返回相应的错误信息，如用户无权限或工作空间不存在等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 鉴权能否使用当前工作空间资源
     * @param {string} workspaceId **参数解释**：工作空间ID。获取方法请参见[[查询工作空间列表](ListWorkspace.xml)](tag:hc,hk)。未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {ValidateAuthorizationRequestBody} validateAuthorizationRequestBody 工作空间鉴权请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateAuthorization(validateAuthorizationRequest?: ValidateAuthorizationRequest): Promise<ValidateAuthorizationResponse> {
        const options = ParamCreater().validateAuthorization(validateAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在已部署的服务上创建定时扩缩容策略，适用于需要根据业务负载或特定时间自动调整服务实例个数的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，并提供详细的扩缩容策略参数，如扩缩容时间、实例个数范围、条件触发器等。创建成功后，系统将根据设定的策略自动调整服务实例个数，确保服务在指定时间内的性能和可用性。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自动扩缩容策略
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {CreateHpaRequestBody} createInferDeploymentHpaRequestBody **参数解释：** 创建自动扩缩容请求体 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInferDeploymentHpa(createInferDeploymentHpaRequest?: CreateInferDeploymentHpaRequest): Promise<CreateInferDeploymentHpaResponse> {
        const options = ParamCreater().createInferDeploymentHpa(createInferDeploymentHpaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在已部署的服务上删除定时扩缩容策略，适用于需要根据业务负载或特定时间自动删除服务的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，部署ID。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。暂时为非开放接口，后端清理服务下的自动扩缩容策略规则使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自动扩缩容策略
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInferDeploymentHpa(deleteInferDeploymentHpaRequest?: DeleteInferDeploymentHpaRequest): Promise<DeleteInferDeploymentHpaResponse> {
        const options = ParamCreater().deleteInferDeploymentHpa(deleteInferDeploymentHpaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在已部署的服务上查看自动扩缩容策略事件，适用于查看自动扩缩容策略变动历史记录。调用此接口前，确保获取了有效的用户项目ID，服务ID，部署ID。调用成功后，会返回策略事件ID，事件状态，规则执行信息，扩缩容前实例数，扩缩容后实例数，预设目标实例数，执行记录时间。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看自动扩缩容策略事件
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 指定每一页返回的最大条目数。 **约束限制：** 不涉及。 **取值范围：** [1,500] **默认取值：** 10。
     * @param {number} [offset] **参数解释：** 分页列表的起始页，从0开始计数。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 0。
     * @param {string} [sortKey] **参数解释：** 排序字段，多个字段以\&quot;,\&quot;分隔，支持create_at, update_at，默认值update_at。 **约束限制：** 不涉及。 **取值范围：** - lastProbeTime：按照执行记录事件排序。 - status：按状态排序。 **默认取值：** update_at。
     * @param {string} [sortDir] **参数解释：** 排序方式。 **约束限制：** 不涉及。 **取值范围：** - ASC: 递增排序。 - DESC: 递减排序。 **默认取值：** DESC。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInferDeploymentHpaEvents(listInferDeploymentHpaEventsRequest?: ListInferDeploymentHpaEventsRequest): Promise<ListInferDeploymentHpaEventsResponse> {
        const options = ParamCreater().listInferDeploymentHpaEvents(listInferDeploymentHpaEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在已部署的服务上查看自动扩缩容策略。调用此接口前，确保服务已成功部署并获取了有效的服务ID。查询成功后，返回服务对应的策略信息，如规则ID，规则名称，扩缩容类型，扩缩容状态，扩缩容cron表达式，目标实例数等。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看自动扩缩容策略
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInferDeploymentHpa(showInferDeploymentHpaRequest?: ShowInferDeploymentHpaRequest): Promise<ShowInferDeploymentHpaResponse> {
        const options = ParamCreater().showInferDeploymentHpa(showInferDeploymentHpaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在已部署的服务上修改定时扩缩容策略，适用于需要根据业务负载或特定时间自动调整服务实例个数的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，部署ID，并提供详细的扩缩容策略参数，如扩缩容时间、实例个数范围、条件触发器等。修改成功后，系统将根据设定的策略自动调整服务实例个数，确保服务在指定时间内的性能和可用性。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自动扩缩容策略
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {UpdateHpaRequestBody} updateInferDeploymentHpaRequestBody **参数解释：** 创建自动扩缩容请求体 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInferDeploymentHpa(updateInferDeploymentHpaRequest?: UpdateInferDeploymentHpaRequest): Promise<UpdateInferDeploymentHpaResponse> {
        const options = ParamCreater().updateInferDeploymentHpa(updateInferDeploymentHpaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在已部署且支持HRA策略的服务上创建HRA策略，适用于需要根据业务负载或特定时间自动调整服务实例个数的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，并提供详细的hra策略参数，如hra时间、实例个数范围、条件触发器等。创建成功后，系统将根据设定的策略自动调整服务实例个数，确保服务在指定时间内的性能和可用性。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建HRA策略
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {CreateHraRequestBody} createInferHraRequestBody **参数解释：** 创建HRA请求体 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInferHra(createInferHraRequest?: CreateInferHraRequest): Promise<CreateInferHraResponse> {
        const options = ParamCreater().createInferHra(createInferHraRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在已部署的服务上查看推理单元配比检测信息。调用此接口前，确保服务已成功部署并获取了有效的服务ID。查询成功后，返回服务对应的策略信息，如规则ID，规则名称，策略状态，HRA结果状态等。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取推理单元配比检测信息
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInferHra(showInferHraRequest?: ShowInferHraRequest): Promise<ShowInferHraResponse> {
        const options = ParamCreater().showInferHra(showInferHraRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口用于在已创建HRA策略的服务上修改指定部署的HRA策略配置，适用于需要根据业务负载或特定时间自动调整服务实例个数的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，部署ID，并提供详细的hra策略参数，如HRA规则列表、HRA结果状态、策略状态等。修改成功后，系统将根据设定的策略自动调整服务实例个数，确保服务在指定时间内的性能和可用性。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定部署的HRA策略配置
     * @param {string} serviceId **参数解释：** 服务ID，在[创建服务](CreateInferService.xml)时即可在返回体中获取，也可通过[查询服务列表](ListInferServices.xml)获取当前用户拥有的服务，其中service_id字段即为服务ID。 **约束限制：** 不涉及。 **取值范围：** 服务ID。 **默认取值：** 不涉及。
     * @param {string} deploymentId **参数解释：** 部署ID，在[添加部署](CreateInferDeployment.xml)时即可在返回体中获取，也可通过[查询服务部署列表](ListInferDeployments.xml)获取当前用户拥有的部署，其中deployment_id字段即为部署ID。 **约束限制：** 不涉及。 **取值范围：** 部署ID。 **默认取值：** 不涉及。
     * @param {UpdateHraRequestBody} updateInferHraRequestBody **参数解释：** 修改HRA请求体 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInferHra(updateInferHraRequest?: UpdateInferHraRequest): Promise<UpdateInferHraResponse> {
        const options = ParamCreater().updateInferHra(updateInferHraRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lite Server服务器挂载磁盘接口用于将额外的磁盘挂载到Lite Server服务器上。该接口适用于以下场景：当用户需要扩展Lite Server服务器的存储空间以满足更大的数据存储需求时，可以通过此接口将指定的磁盘挂载到服务器上。使用该接口的前提条件是Lite Server服务器已创建且处于运行状态、或者停止状态，用户具有挂载磁盘的权限，且指定的磁盘已存在且未被其他服务器使用。挂载操作完成后，磁盘将成功挂载到Lite Server服务器上，用户可以访问和使用新增的存储空间。若Lite Server服务器不存在、指定的磁盘不存在或已被使用，或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Lite Server服务器挂载磁盘
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：不涉及。 **取值范围**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **默认取值**：不涉及。
     * @param {AttachServerVolumeRequest} attachDevServerVolumeRequestBody **参数解释**：DevServer服务器挂载磁盘请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachDevServerVolume(attachDevServerVolumeRequest?: AttachDevServerVolumeRequest): Promise<AttachDevServerVolumeResponse> {
        const options = ParamCreater().attachDevServerVolume(attachDevServerVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量操作Lite Server实例接口用于对多个Lite Server实例进行统一操作，如启动、停止、重启或删除等。该接口适用于以下场景：当需要对多个Lite Server实例进行相同的操作，例如在维护期间批量停止实例、更新配置后批量重启实例或清理不再需要的实例时，用户可通过此接口高效地完成批量操作。使用该接口的前提条件是目标Lite Server实例已存在且用户具有相应的操作权限。操作完成后，所有指定的Lite Server实例将根据请求完成相应的状态变更或被移除，相关资源和配置也将被相应调整或清理。若目标Lite Server实例不存在、用户无权限操作或请求参数不正确，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量操作Lite Server实例
     * @param {DevServerBatchRequest} batchDevServersActionRequestBody **参数解释**：Lite Server实例批量操作请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDevServersAction(batchDevServersActionRequest?: BatchDevServersActionRequest): Promise<BatchDevServersActionResponse> {
        const options = ParamCreater().batchDevServersAction(batchDevServersActionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lite Server服务器绑定的EIP接口用于将弹性公网IP（EIP）绑定到Lite Server服务器上。该接口适用于以下场景：当用户需要为Lite Server服务器分配一个固定的公网IP地址，以便从外部网络访问服务器时，可以通过此接口将指定的EIP绑定到服务器上。使用该接口的前提条件是Lite Server服务器已创建且处于运行状态，用户具有绑定EIP的权限，且指定的EIP已存在且未被其他资源使用。绑定操作完成后，EIP将成功绑定到Lite Server服务器上，服务器可以通过该EIP从外部网络访问。若Lite Server服务器不存在、已处于停止状态、指定的EIP不存在或已被使用，或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Lite Server服务器绑定EIP
     * @param {string} id **参数解释**：Lite Server ID。 **约束限制**：必填。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {ServerBindPublicIPRequest} bindDevServerPublicIPRequestBody **参数解释**：Lite Server服务器挂载EIP请求体。 **约束限制**：必填。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public bindDevServerPublicIP(bindDevServerPublicIPRequest?: BindDevServerPublicIPRequest): Promise<BindDevServerPublicIPResponse> {
        const options = ParamCreater().bindDevServerPublicIP(bindDevServerPublicIPRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换Lite Server服务器操作系统镜像接口用于更换Lite Server服务器当前使用的操作系统镜像。该接口适用于以下场景：当用户需要更换操作系统以适应不同的开发或测试需求时，可以通过此接口切换指定的Lite Server服务器操作系统镜像。使用该接口的前提条件是Lite Server服务器已存在且处于停止状态，用户具有切换操作系统的权限。切换操作完成后，Lite Server服务器将安装新的操作系统镜像，并重新进入运行状态，若Lite Server服务器不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换Lite Server服务器操作系统镜像
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {ServerOsRequest} changeDevServerOSRequestBody **参数解释**：切换Lite Server服务器操作系统镜像请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeDevServerOS(changeDevServerOSRequest?: ChangeDevServerOSRequest): Promise<ChangeDevServerOSResponse> {
        const options = ParamCreater().changeDevServerOS(changeDevServerOSRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换Lite Server超节点服务器操作系统镜像接口用于更换Lite Server超节点服务器当前使用的操作系统镜像。该接口适用于以下场景：当用户需要更换操作系统以适应不同的开发或测试需求时，可以通过此接口切换指定的Lite Server超节点服务器操作系统镜像。使用该接口的前提条件是Lite Server超节点服务器已存在且处于停止状态，用户具有切换操作系统的权限。切换操作完成后，Lite Server超节点服务器将安装新的操作系统镜像，并重新进入运行状态，若Lite Server超节点服务器不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换Lite Server超节点服务器操作系统镜像
     * @param {string} id **参数解释**：Lite Server实例超节点ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {ServerOsRequest} changeHyperinstanceOSRequestBody **参数解释**：切换Lite Server超节点服务器操作系统镜像请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeHyperinstanceOS(changeHyperinstanceOSRequest?: ChangeHyperinstanceOSRequest): Promise<ChangeHyperinstanceOSResponse> {
        const options = ParamCreater().changeHyperinstanceOS(changeHyperinstanceOSRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Lite Server接口用于创建LiteServer弹性云服务器、裸金属服务器及超节点服务器。该接口适用于以下场景：用户需要根据业务需求快速部署和配置不同类型的服务器资源。使用该接口的前提条件是用户已登录且具有创建Lite Server的权限，并且需要提供服务器类型、规格、网络配置等必要参数。创建操作完成后，系统将返回新创建的Lite Server实例信息，包括实例ID、状态等。若用户无权限、参数配置错误或资源不足，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Lite Server
     * @param {ServerCreateRequest} createDevServerRequestBody **参数解释**：创建Lite Server的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDevServer(createDevServerRequest?: CreateDevServerRequest): Promise<CreateDevServerResponse> {
        const options = ParamCreater().createDevServer(createDevServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Lite Server任务接口用于在Lite Server上创建新的任务。该接口适用于以下场景：当用户需要在Lite Server上启动新的开发、测试或部署任务时，可以通过此接口创建并配置任务。使用该接口的前提条件是用户具有创建任务的权限，并且提供的任务配置参数符合要求。创建操作完成后，新的Lite Server任务将被成功创建，并返回任务ID和其他相关信息。若用户无权限操作、提供的参数不正确或系统资源不足，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Lite Server任务
     * @param {DevServerJobCreateRequest} createDevServerJobRequestBody **参数解释**：创建DevServerJob的请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDevServerJob(createDevServerJobRequest?: CreateDevServerJobRequest): Promise<CreateDevServerJobResponse> {
        const options = ParamCreater().createDevServerJob(createDevServerJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Hyper Cluster接口用于在系统中创建一个新的Hyper Cluster。该接口适用于以下场景：当用户需要使用超节点网络时，可以通过此接口创建Hyper Cluster。使用该接口的前提条件是用户已登录并具有创建Hyper Cluster的权限，且系统中已配置了必要的资源。创建操作完成后，将生成一个新的超节点网络，并返回超节点网络的详细信息，包括ID、名称、子网信息等。若用户无权限操作、系统中缺少必要的资源或配置参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Hyper Cluster
     * @param {HyperClusterCreateRequest} createHyperClusterRequestBody **参数解释**：创建Hyper Cluster的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHyperCluster(createHyperClusterRequest?: CreateHyperClusterRequest): Promise<CreateHyperClusterResponse> {
        const options = ParamCreater().createHyperCluster(createHyperClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Lite Server超节点标签接口用于为Lite Server超节点添加自定义标签。该接口适用于以下场景：当用户需要对Lite Server超节点进行分类管理或标记特定信息时，可以通过此接口为指定的超节点创建标签。使用该接口的前提条件是Lite Server超节点已存在，用户具有创建标签的权限。创建操作完成后，标签将被成功添加到指定的超节点上，用户可以通过标签进行快速查找和管理。若Lite Server超节点不存在、标签已存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Lite Server超节点标签
     * @param {string} id **参数解释**：Lite Server 超节点ID。
     * @param {TagRequest} createHyperinstanceTagsRequestBody **参数解释**：创建Lite Server超节点标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHyperinstanceTags(createHyperinstanceTagsRequest?: CreateHyperinstanceTagsRequest): Promise<CreateHyperinstanceTagsResponse> {
        const options = ParamCreater().createHyperinstanceTags(createHyperinstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建RoCE网络接口用于在系统中创建一个新的RoCE网络。该接口适用于以下场景：当用户需要为高性能计算或低延迟应用创建专用的RoCE网络时，可以通过此接口创建并配置RoCE网络。使用该接口的前提条件是用户已登录并具有创建RoCE网络的权限，且系统中已配置了必要的网络资源。创建操作完成后，将生成一个新的RoCE网络，并返回网络的详细信息，包括网络ID、子网信息、配置参数等。若用户无权限操作、系统中缺少必要的网络资源或网络配置参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建RoCE网络
     * @param {ServerRoceNetworkRequest} createRoceNetworkRequestBody **参数解释**：创建RoCE网络请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRoceNetwork(createRoceNetworkRequest?: CreateRoceNetworkRequest): Promise<CreateRoceNetworkResponse> {
        const options = ParamCreater().createRoceNetwork(createRoceNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Lite Server实例接口用于移除已创建的Lite Server实例。该接口适用于以下场景：当Lite Server按需实例不再需要使用时或者创建失败的实例以及处于ERROR状态时，用户可通过此接口删除指定的Lite Server实例。使用该接口的前提条件是Lite Server实例已存在且用户具有管理员权限。删除操作完成后，Lite Server实例将被永久移除，相关资源也将被清理。若Lite Server实例不存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Lite Server实例
     * @param {string} id **参数解释**：Lite Server ID。 **约束限制**：必填。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDevServer(deleteDevServerRequest?: DeleteDevServerRequest): Promise<DeleteDevServerResponse> {
        const options = ParamCreater().deleteDevServer(deleteDevServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除Lite Server Job接口用于批量移除已创建的Lite Server Job。该接口适用于以下场景：当多个Lite Server Job已完成、配置错误或需要清理资源时，用户可以通过此接口批量删除指定的Lite Server Job。使用该接口的前提条件是目标Lite Server Job已存在且用户具有管理员权限。删除操作完成后，指定的Lite Server Job将被永久移除，相关资源和配置也将被清理。若目标Lite Server Job不存在、用户无权限操作或请求参数不正确，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除Lite Server Job
     * @param {ServerJobDeleteRequest} deleteDevServerJobsRequestBody **参数解释**：删除DevServerJob的请求体 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDevServerJobs(deleteDevServerJobsRequest?: DeleteDevServerJobsRequest): Promise<DeleteDevServerJobsResponse> {
        const options = ParamCreater().deleteDevServerJobs(deleteDevServerJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Hyper Cluster实例接口用于移除已创建的Hyper Cluster。该接口适用于以下场景：当超节点网络配置错误或需要清理资源时，用户可通过此接口删除指定的超节点网络。使用该接口的前提条件是Hyper Cluster实例已存在且用户具有管理员权限。删除操作完成后，超节点网络将被永久移除，相关资源和配置也将被清理。若Hyper Cluster实例不存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Hyper Cluster实例
     * @param {string} id **参数解释**：Hyper Cluster ID。 **约束限制**：必填。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {string} [type] **参数解释**：Hyper Cluster的类型。 **约束限制**：可选。 **取值范围**： - HPS：默认值，查询HPS机型的Hyper Cluster。 - ECS：查询ECS机型的Hyper Cluster。  **默认取值**：HPS。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHyperCluster(deleteHyperClusterRequest?: DeleteHyperClusterRequest): Promise<DeleteHyperClusterResponse> {
        const options = ParamCreater().deleteHyperCluster(deleteHyperClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Lite Server超节点实例接口用于删除按需超节点实例同时移除处于ERROR状态的Lite Server超节点实例。该接口适用于以下场景：当超节点实例因创建失败、或其他原因进入ERROR状态；按需超节点实例，用户可以通过此接口删除指定的超节点实例。使用该接口的前提条件是用户已登录并具有删除超节点实例的权限，且指定的超节点实例是按需且处于运行状态、或者处于ERROR状态。删除操作完成后，指定的超节点实例将被永久移除，相关资源也将被清理。若指定的超节点实例不存在、未处于ERROR状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Lite Server超节点实例
     * @param {string} id **参数解释**：Lite Server 超节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHyperinstance(deleteHyperinstanceRequest?: DeleteHyperinstanceRequest): Promise<DeleteHyperinstanceResponse> {
        const options = ParamCreater().deleteHyperinstance(deleteHyperinstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Lite Server超节点标签接口用于移除已创建的Lite Server超节点标签。该接口适用于以下场景：当用户需要清理不再需要的标签或修正标签错误时，可以通过此接口删除指定的超节点标签。使用该接口的前提条件是Lite Server超节点已存在，且该超节点上已存在要删除的标签，用户具有删除标签的权限。删除操作完成后，指定的标签将从超节点上移除，超节点的其他配置和数据保持不变。若Lite Server超节点不存在、标签不存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Lite Server超节点标签
     * @param {string} id **参数解释**：Lite Server 超节点ID。
     * @param {TagRequest} deleteHyperinstanceTagsRequestBody **参数解释**：删除Lite Server超节点标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHyperinstanceTags(deleteHyperinstanceTagsRequest?: DeleteHyperinstanceTagsRequest): Promise<DeleteHyperinstanceTagsResponse> {
        const options = ParamCreater().deleteHyperinstanceTags(deleteHyperinstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lite Server服务器卸载磁盘接口用于从Lite Server服务器上卸载已挂载的磁盘。该接口适用于以下场景：当用户需要释放存储资源或重新分配磁盘时，可以通过此接口卸载指定的磁盘。使用该接口的前提条件是Lite Server服务器已创建且处于运行状态、或者停止状态，用户具有卸载磁盘的权限，且指定的磁盘已挂载到服务器上。卸载操作完成后，磁盘将从Lite Server服务器上成功卸载，用户可以将其挂载到其他服务器或进行其他操作。若Lite Server服务器不存在、指定的磁盘未挂载到服务器上，或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Lite Server服务器卸载磁盘
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} volumeId **参数解释**：要卸载的磁盘ID。 **约束限制**：[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachDevServerVolume(detachDevServerVolumeRequest?: DetachDevServerVolumeRequest): Promise<DetachDevServerVolumeResponse> {
        const options = ParamCreater().detachDevServerVolume(detachDevServerVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Lite Server镜像详情接口用于获取指定Lite Server镜像的详细信息。该接口适用于以下场景：当用户需要了解某个Lite Server镜像的具体配置和属性，以便在创建或调整Lite Server实例时选择合适的镜像时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询镜像详情的权限，且指定的镜像已存在。查询操作完成后，接口将返回指定Lite Server镜像的详细信息，包括镜像ID、名称、操作系统、版本、创建时间等。若用户无权限操作、指定的镜像不存在或镜像ID无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Lite Server镜像详情
     * @param {string} id **参数解释**：镜像ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDevServerImage(getDevServerImageRequest?: GetDevServerImageRequest): Promise<GetDevServerImageResponse> {
        const options = ParamCreater().getDevServerImage(getDevServerImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Lite Server Job详情接口用于获取指定Lite Server Job的详细信息。该接口适用于以下场景：当用户需要查看某个Lite Server Job的执行状态、配置参数、日志信息等详细数据时，可以通过此接口获取相关信息。使用该接口的前提条件是目标Lite Server Job已存在且用户具有查看权限。查询操作完成后，接口将返回指定Lite Server Job的详细信息，包括但不限于Job ID、状态、创建时间、执行时间、配置参数和日志等。若目标Lite Server Job不存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Lite Server Job详情
     * @param {string} id **参数解释**：Lite Server job id。 **约束限制**：必填。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDevServerJob(getDevServerJobRequest?: GetDevServerJobRequest): Promise<GetDevServerJobResponse> {
        const options = ParamCreater().getDevServerJob(getDevServerJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据服务id获取Lite Server部署服务详情。该接口适用于以下场景：当用户需要查看部署服务详情，以便查看已部署服务的状态、api等信息时，可以通过此接口获取服务详情。使用该接口的前提条件是用户具有查看服务的权限。查询操作完成后，接口将返回此部署服务的详细信息，包括名称、状态、描述、所用模型、实例详情等信息。若用户无权限操作或无相应id，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Lite Server 部署服务详情
     * @param {string} id **参数解释**：部署服务的id。 **约束限制**：字母、数字和中划线。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDevServerJobService(getDevServerJobServiceRequest?: GetDevServerJobServiceRequest): Promise<GetDevServerJobServiceResponse> {
        const options = ParamCreater().getDevServerJobService(getDevServerJobServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Lite Server Job模板详情接口用于获取指定Lite Server Job模板的详细信息。该接口适用于以下场景：当用户需要查看某个特定Job模板的详细配置，以便了解其参数设置、使用说明等信息时，可以通过此接口获取模板详情。查询操作完成后，接口将返回指定模板的详细信息，包括模板ID、名称、描述、配置参数等。若目标模板不存在，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Lite Server Job模板详情
     * @param {string} id **参数解释**：Lite Server任务模板id。 **约束限制**：1 - 64字符，字母、数字和中划线。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDevServerJobTemplate(getDevServerJobTemplateRequest?: GetDevServerJobTemplateRequest): Promise<GetDevServerJobTemplateResponse> {
        const options = ParamCreater().getDevServerJobTemplate(getDevServerJobTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Operation详情接口用于获取指定Operation的详细信息。该接口适用于以下场景：当用户需要了解某个Operation的具体执行情况和状态，以便进行故障排查或操作审计时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询Operation详情的权限，且指定的Operation已存在。查询操作完成后，接口将返回指定Operation的详细信息，包括Operation ID、操作类型、执行状态、开始时间、结束时间、操作结果等。若用户无权限操作、指定的Operation不存在或Operation ID无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Operation详情
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} operationId **参数解释**：Operation ID。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDevServerOperation(getDevServerOperationRequest?: GetDevServerOperationRequest): Promise<GetDevServerOperationResponse> {
        const options = ParamCreater().getDevServerOperation(getDevServerOperationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Hyper Cluster实例详情接口用于获取指定Hyper Cluster实例的详细信息。该接口适用于以下场景：当用户需要了解某个超节点网络的具体配置和状态，以便进行管理和监控时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询Hyper Cluster详情的权限，且指定的超节点网络已存在。查询操作完成后，接口将返回指定超节点网络的详细信息，包括ID、名称、子网信息等。若用户无权限操作、指定的超节点网络不存在或ID无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Hyper Cluster实例详情
     * @param {string} id **参数解释**：Hyper Cluster ID。 **约束限制**：必填。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {string} [type] **参数解释**：Hyper Cluster的类型。 **约束限制**：可选。 **取值范围**： - HPS：默认值，查询HPS机型的Hyper Cluster。 - ECS：查询ECS机型的Hyper Cluster。  **默认取值**：HPS。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getHyperCluster(getHyperClusterRequest?: GetHyperClusterRequest): Promise<GetHyperClusterResponse> {
        const options = ParamCreater().getHyperCluster(getHyperClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定超节点实例详情接口用于获取特定Lite Server超节点实例的详细信息。该接口适用于以下场景：当用户需要查看某个具体超节点实例的配置、状态和使用情况时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询超节点实例的权限，且指定的超节点实例已存在。查询操作完成后，接口将返回指定超节点实例的详细信息，包括实例ID、操作系统、运行状态、资源使用情况等。若用户无权限操作、指定的超节点实例不存在或实例ID无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定超节点实例详情
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getHyperinstance(getHyperinstanceRequest?: GetHyperinstanceRequest): Promise<GetHyperinstanceResponse> {
        const options = ParamCreater().getHyperinstance(getHyperinstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Lite Server超节点扩缩容支持规格列表及容量测算接口用于获取Lite Server超节点支持的扩缩容规格列表，并进行容量测算。该接口适用于以下场景：当用户需要了解Lite Server超节点支持的扩缩容选项，以便在调整超节点资源时选择合适的规格，并评估扩缩容后的资源需求时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询超节点扩缩容规格的权限，且指定的超节点已存在。查询操作完成后，接口将返回支持的扩缩容规格列表及容量测算结果，包括规格ID、CPU、内存、存储等详细配置和扩缩容后的资源使用情况。若用户无权限操作、指定的超节点不存在或系统中没有可用的扩缩容规格，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Lite Server超节点扩缩容支持规格列表及容量测算
     * @param {string} id **参数解释**：Lite Server超节点ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getScaleEvaluationsDevServer(getScaleEvaluationsDevServerRequest?: GetScaleEvaluationsDevServerRequest): Promise<GetScaleEvaluationsDevServerResponse> {
        const options = ParamCreater().getScaleEvaluationsDevServer(getScaleEvaluationsDevServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的Tor信息接口用于获取指定实例的Top-of-Rack（Tor）交换机相关信息。该接口适用于以下场景：当用户需要了解实例连接的Tor交换机的详细信息，以便进行网络配置时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询实例Tor信息的权限，且指定的实例已存在。查询操作完成后，接口将返回指定实例的Tor信息。若用户无权限操作、指定的实例不存在或实例未连接到Tor交换机，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的Tor信息
     * @param {string} [id] **参数解释**：Lite Server实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [resourceId] **参数解释**：Lite Server实例对应的资源ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getTopologies(getTopologiesRequest?: GetTopologiesRequest): Promise<GetTopologiesResponse> {
        const options = ParamCreater().getTopologies(getTopologiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户Lite Server列表接口用于获取指定租户的所有Lite Server实例信息。该接口适用于以下场景：当用户需要查看其租户下所有Lite Server实例的详细信息，以便进行管理和监控时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询租户Lite Server列表的权限。查询操作完成后，接口将返回租户下所有Lite Server实例的详细信息，包括实例ID、名称、状态、资源配置等。若用户无权限操作或租户下没有Lite Server实例，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户Lite Server列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllDevServers(listAllDevServersRequest?: ListAllDevServersRequest): Promise<ListAllDevServersResponse> {
        const options = ParamCreater().listAllDevServers();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户Hyperinstance列表接口用于获取指定租户的所有Hyperinstance实例信息。该接口适用于以下场景：当用户需要查看其租户下所有Hyperinstance实例的详细信息，以便进行管理和监控时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询租户Hyperinstance列表的权限。查询操作完成后，接口将返回租户下所有Hyperinstance实例的详细信息，包括实例ID、名称、状态、资源配置等。若用户无权限操作或租户下没有Hyperinstance实例，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户Hyperinstance列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllHyperinstances(listAllHyperinstancesRequest?: ListAllHyperinstancesRequest): Promise<ListAllHyperinstancesResponse> {
        const options = ParamCreater().listAllHyperinstances();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询规格列表接口用于获取系统中所有可用的资源规格信息。该接口适用于以下场景：当用户需要了解可用的资源规格，以便在创建或调整Lite Server实例时选择合适的配置时，可以通过此接口获取规格列表。使用该接口的前提条件是用户已登录并具有查询规格的权限。查询操作完成后，接口将返回所有可用的资源规格信息，包括规格ID、CPU、内存、存储等详细配置。若用户无权限操作或系统中没有可用的资源规格，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规格列表
     * @param {string} [serverType] **参数解释**：服务类型。 **约束限制**：不涉及。 **取值范围**： - BMS：资源类型为裸金属服务器 - ECS：资源类型为弹性云服务器 - HPS：资源类型为超节点服务器  **默认取值**：不涉及。
     * @param {string} [arch] **参数解释**：规格的CPU架构。 **约束限制**：不涉及。 **取值范围**： - X86：CPU架构为X86 - ARM：CPU架构为ARM **默认取值**：不涉及。
     * @param {string} [chargingMode] **参数解释**：计费模式。 **约束限制**：不涉及。 **取值范围**： - PRE_PAID：计费模式为包年/包月 - POST_PAID：计费模式为按需计费 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDevServerFlavors(listDevServerFlavorsRequest?: ListDevServerFlavorsRequest): Promise<ListDevServerFlavorsResponse> {
        const options = ParamCreater().listDevServerFlavors(listDevServerFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Lite Server镜像列表接口用于获取系统中所有可用的Lite Server镜像信息。该接口适用于以下场景：当用户需要了解可用的Lite Server镜像，以便在创建或调整Lite Server实例时选择合适的镜像时，可以通过此接口获取镜像列表。使用该接口的前提条件是用户已登录并具有查询镜像列表的权限。查询操作完成后，接口将返回所有可用的Lite Server镜像信息，包括镜像ID、名称、架构类型等。若用户无权限操作或系统中没有可用的镜像，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Lite Server镜像列表
     * @param {string} [serverType] **参数解释**：server_type。 **约束限制**：不涉及。 **取值范围**：  - BMS  - ECS  - HPS **默认取值**：不涉及。
     * @param {string} [flavorName] **参数解释**：规格名称。 **约束限制**：^.{1,128}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDevServerImages(listDevServerImagesRequest?: ListDevServerImagesRequest): Promise<ListDevServerImagesResponse> {
        const options = ParamCreater().listDevServerImages(listDevServerImagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Lite Server Job模板列表接口用于获取可用的Lite Server Job模板列表。该接口适用于以下场景：当用户需要查看可用的Job模板，以便选择合适的模板来创建新的Lite Server任务时，可以通过此接口获取模板列表。查询操作完成后，接口将返回所有可用的Lite Server Job模板列表，包括模板ID、名称、描述等信息。若系统中无可用模板，接口将返回相应的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Lite Server Job模板列表
     * @param {string} [id] **参数解释**：DevServerJob的模板id。 **约束限制**：1 - 64字符，字母、数字和中划线。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [name] **参数解释**：DevServerJob的模板name。 **约束限制**：字母、数字和中划线。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [type] **参数解释**：DevServerJob的模板类型。 **约束限制**：字母、数字和中划线。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDevServerJobTemplates(listDevServerJobTemplatesRequest?: ListDevServerJobTemplatesRequest): Promise<ListDevServerJobTemplatesResponse> {
        const options = ParamCreater().listDevServerJobTemplates(listDevServerJobTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Lite Server Job列表接口用于获取Lite Server Job的列表信息，并支持按照状态、ID等相关字段进行过滤。该接口适用于以下场景：当用户需要查看多个Lite Server Job的概要信息，例如在监控作业状态、排查问题或进行日常管理时，可以通过此接口获取符合过滤条件的Job列表。使用该接口的前提条件是用户具有查看权限。查询操作完成后，接口将返回符合条件的Lite Server Job列表，包括每个Job的ID、状态、创建时间等基本信息。若用户无权限操作或请求参数不正确，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Lite Server Job列表
     * @param {string} [id] **参数解释**：Lite Server job id。 **约束限制**：无。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {string} [name] **参数解释**：Lite Server job的name。 **约束限制**：无。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [type] **参数解释**：Lite Server job的类型。 **约束限制**：无。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [status] **参数解释**：Lite Server job的状态。 **约束限制**：无。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {boolean} [visible] **参数解释**：是否可见。 **约束限制**：bool。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDevServerJobs(listDevServerJobsRequest?: ListDevServerJobsRequest): Promise<ListDevServerJobsResponse> {
        const options = ParamCreater().listDevServerJobs(listDevServerJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已绑定的EIP接口用于获取已绑定到Lite Server服务器上的弹性公网IP（EIP）信息。该接口适用于以下场景：当用户需要查看Lite Server服务器上已绑定的EIP及其详细信息时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询EIP的权限，且指定的Lite Server服务器已存在。查询操作完成后，接口将返回已绑定到Lite Server服务器上的EIP的详细信息，包括EIP地址、绑定时间、状态等。若Lite Server服务器不存在、未绑定EIP或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已绑定的EIP
     * @param {string} id **参数解释**：Lite Server ID。 **约束限制**：必填。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDevServerPublicIP(listDevServerPublicIPRequest?: ListDevServerPublicIPRequest): Promise<ListDevServerPublicIPResponse> {
        const options = ParamCreater().listDevServerPublicIP(listDevServerPublicIPRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户所有Lite Server实例列表接口用于获取用户名下所有Lite Server实例的详细信息。该接口适用于以下场景：用户需要查看其所有Lite Server实例的状态、配置等信息，以便进行资源管理和监控。使用该接口的前提条件是用户已登录且具有查看Lite Server实例的权限。调用此接口后，系统将返回用户名下所有Lite Server实例的列表，包括实例ID、名称、状态、创建时间等信息。若用户无权限或未登录，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户所有Lite Server实例列表
     * @param {string} [owner] **参数解释**：实例归属的用户ID。 **约束限制**：可选。 **取值范围**：1 - 64字符，小写字母、数字和中划线。在大账号/有admin权限场景下生效，值通常为当前登录用户ID。 **默认取值**：不涉及。
     * @param {'ASC' | 'DESC'} [sortDir] **参数解释**：排序方式。 **约束限制**：可选。 **取值范围**： - ASC：升序 - DESC：降序 **默认取值**：ASC。
     * @param {string} [sortKey] **参数解释**：排序字段。 **约束限制**：可选。 **取值范围**： - createTime：默认值，创建时间。 - updateTime：更新时间。 **默认取值**：createTime。
     * @param {number} [limit] **参数解释**：每一页的数量。 **约束限制**：可选。 **取值范围**：0 - 1024 **默认取值**：10。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：可选。 **取值范围**：0 - 2147483647 **默认取值**：0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDevServers(listDevServersRequest?: ListDevServersRequest): Promise<ListDevServersResponse> {
        const options = ParamCreater().listDevServers(listDevServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Hyper Cluster详情列表接口用于获取所有Hyper Cluster的详细信息。该接口适用于以下场景：当用户需要了解系统中所有超节点网络的配置和状态时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询Hyper Cluster详情的权限。查询操作完成后，接口将返回所有超节点网络的详细信息，包括ID、名称、子网信息等。若用户无权限操作或系统中没有Hyper Cluster，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Hyper Cluster详情列表
     * @param {string} [type] **参数解释**：Hyper Cluster的类型。 **约束限制**：可选。 **取值范围**： - HPS：默认值，查询HPS机型的Hyper Cluster。 - ECS：查询ECS机型的Hyper Cluster。  **默认取值**：HPS。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHyperCluster(listHyperClusterRequest?: ListHyperClusterRequest): Promise<ListHyperClusterResponse> {
        const options = ParamCreater().listHyperCluster(listHyperClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询超节点hyperinstance-clusters逻辑容量测算结果接口用于获取指定超节点集群的逻辑容量测算结果。该接口适用于以下场景：当用户需要了解超节点集群的资源使用情况和容量规划，以便进行资源管理和优化时，可以通过此接口获取逻辑容量测算结果。使用该接口的前提条件是用户已登录并具有查询超节点集群逻辑容量的权限，且指定的超节点集群已存在。查询操作完成后，接口将返回指定超节点集群的逻辑容量测算结果，包括可用容量信息。若用户无权限操作、指定的超节点集群不存在或集群ID无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询超节点hyperinstance-clusters逻辑容量测算结果
     * @param {HyperinstanceClustersCapacityRequest} listHyperinstanceClustersCapacityRequestBody **参数解释**：容量查询请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHyperinstanceClustersCapacity(listHyperinstanceClustersCapacityRequest?: ListHyperinstanceClustersCapacityRequest): Promise<ListHyperinstanceClustersCapacityResponse> {
        const options = ParamCreater().listHyperinstanceClustersCapacity(listHyperinstanceClustersCapacityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户所有超节点实例详情接口用于获取用户所有Lite Server超节点实例的详细信息。该接口适用于以下场景：当用户需要查看其所有超节点实例的配置、状态和使用情况时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询超节点实例的权限。查询操作完成后，接口将返回所有超节点实例的详细信息，包括实例ID、操作系统、运行状态、资源使用情况等。若用户无权限操作或没有超节点实例，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户所有超节点实例详情
     * @param {'ASC' | 'DESC'} [sortDir] **参数解释**：排序方式。 **约束限制**：不涉及。 **取值范围**：枚举值如下：  - ASC升序。  - DESC降序。 **默认取值**：不涉及。
     * @param {string} [sortKey] **参数解释**：排序字段。 **约束限制**：不涉及。 **取值范围**：枚举值如下：  - createTime：默认值，创建时间。  - updateTime：更新时间。 **默认取值**：不涉及。
     * @param {number} [limit] **参数解释**：每一页的数量。 **约束限制**：不涉及。 **取值范围**：[1,1024]。 **默认取值**：10。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：不涉及。 **取值范围**：[0,2147483647]。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHyperinstances(listHyperinstancesRequest?: ListHyperinstancesRequest): Promise<ListHyperinstancesResponse> {
        const options = ParamCreater().listHyperinstances(listHyperinstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Lite Server超节点标签接口用于获取Lite Server超节点上的所有标签信息。该接口适用于以下场景：当用户需要查看或管理Lite Server超节点的标签时，可以通过此接口查询指定超节点上的所有标签。使用该接口的前提条件是Lite Server超节点已存在，用户具有查询标签的权限。查询操作完成后，接口将返回超节点上的所有标签信息，包括标签名称和相关属性。若Lite Server超节点不存在或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Lite Server超节点标签
     * @param {string} id **参数解释**：Lite Server 超节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public queryHyperinstanceTags(queryHyperinstanceTagsRequest?: QueryHyperinstanceTagsRequest): Promise<QueryHyperinstanceTagsResponse> {
        const options = ParamCreater().queryHyperinstanceTags(queryHyperinstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启Lite Server实例接口用于重启正在运行的Lite Server实例。该接口适用于以下场景：当用户需要重启实例以应用配置更改、解决运行问题或进行系统维护时，可以通过此接口重启指定的Lite Server实例。使用该接口的前提条件是Lite Server实例已创建且处于运行状态，用户具有重启实例的权限。重启操作完成后，Lite Server实例将重新启动并进入运行状态，用户可以继续使用实例提供的服务。若Lite Server实例不存在、已处于停止状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启Lite Server实例
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：不涉及。 **取值范围**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebootDevServer(rebootDevServerRequest?: RebootDevServerRequest): Promise<RebootDevServerResponse> {
        const options = ParamCreater().rebootDevServer(rebootDevServerRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重装Lite Server服务器操作系统镜像接口用于重新安装Lite Server服务器的操作系统镜像。该接口适用于以下场景：当用户需要更新操作系统版本、修复系统故障或重新配置系统环境时，可以通过此接口重装指定的Lite Server服务器操作系统镜像。使用该接口的前提条件是Lite Server服务器已存在且处于停止状态，用户具有重装操作系统的权限。重装操作完成后，Lite Server服务器将安装新的操作系统镜像，并重新进入运行状态，若Lite Server服务器不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重装Lite Server服务器操作系统镜像
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {ServerOsRequest} reinstallDevServerOSRequestBody **参数解释**：重装Lite Server服务器操作系统镜像请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public reinstallDevServerOS(reinstallDevServerOSRequest?: ReinstallDevServerOSRequest): Promise<ReinstallDevServerOSResponse> {
        const options = ParamCreater().reinstallDevServerOS(reinstallDevServerOSRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 缩容Lite Server超节点接口用于减少Lite Server超节点的资源容量。该接口适用于以下场景：当用户需要降低Lite Server超节点的资源使用，以节省成本或优化资源分配时，可以通过此接口进行缩容。使用该接口的前提条件是用户已登录并具有缩容超节点的权限，且指定的超节点已存在且处于运行状态。缩容操作完成后，超节点的资源容量将根据指定的规格进行调整，用户可以立即使用减少后的资源。若用户无权限操作、指定的超节点不存在、超节点已处于最小容量或指定的缩容规格无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 缩容Lite Server超节点
     * @param {string} id **参数解释**：Lite Server超节点ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {ServerScaleDownRequest} scaleDownHyperinstanceRequestBody **参数解释**：缩容Lite Server超节点请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public scaleDownHyperinstance(scaleDownHyperinstanceRequest?: ScaleDownHyperinstanceRequest): Promise<ScaleDownHyperinstanceResponse> {
        const options = ParamCreater().scaleDownHyperinstance(scaleDownHyperinstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容Lite Server超节点接口用于增加Lite Server超节点的资源容量。该接口适用于以下场景：当用户需要提升Lite Server超节点的性能，以支持更多的负载或更大的数据处理需求时，可以通过此接口进行扩容。使用该接口的前提条件是用户已登录并具有扩容超节点的权限，且指定的超节点已存在且处于运行状态。扩容操作完成后，超节点的资源容量将根据指定的规格进行调整，用户可以立即使用增加的资源。若用户无权限操作、指定的超节点不存在、超节点已处于最大容量或指定的扩容规格无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容Lite Server超节点
     * @param {string} id **参数解释**：Lite Server超节点ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {ServerHyperScaleUpRequest} scaleUpHyperinstanceRequestBody **参数解释**：扩容Lite Server超节点请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public scaleUpHyperinstance(scaleUpHyperinstanceRequest?: ScaleUpHyperinstanceRequest): Promise<ScaleUpHyperinstanceResponse> {
        const options = ParamCreater().scaleUpHyperinstance(scaleUpHyperinstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Lite Server实例详情接口用于获取指定Lite Server实例的详细信息。该接口适用于以下场景：用户需要查看特定Lite Server实例的配置、状态、网络信息等详细数据，以便进行故障排查、资源管理和监控。使用该接口的前提条件是用户已登录且具有查看Lite Server实例的权限，并且需要提供有效的实例ID。查询操作完成后，系统将返回指定Lite Server实例的详细信息，包括实例ID、名称、状态、配置、网络配置等。若用户无权限、实例ID无效或实例不存在，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Lite Server实例详情
     * @param {string} id **参数解释**：Lite Server ID。 **约束限制**：必填。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDevServer(showDevServerRequest?: ShowDevServerRequest): Promise<ShowDevServerResponse> {
        const options = ParamCreater().showDevServer(showDevServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动Lite Server实例接口用于启动已创建但未运行的Lite Server实例。该接口适用于以下场景：当用户需要开始使用Lite Server实例进行开发或测试时，可以通过此接口启动指定的Lite Server实例。使用该接口的前提条件是Lite Server实例已创建且处于停止状态，用户具有启动实例的权限。若Lite Server实例不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动Lite Server实例
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {ServerStartRequest} [startDevServerRequestBody] **参数解释**：Lite Server服务器启动请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startDevServer(startDevServerRequest?: StartDevServerRequest): Promise<StartDevServerResponse> {
        const options = ParamCreater().startDevServer(startDevServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动Lite Server超节点服务器接口用于启动已创建但未运行的Lite Server超节点服务器。该接口适用于以下场景：当用户需要开始使用Lite Server超节点服务器进行开发或测试时，可以通过此接口启动指定的超节点服务器。使用该接口的前提条件是Lite Server超节点服务器已创建且处于停止状态，用户具有启动超节点服务器的权限。启动操作完成后，超节点服务器将进入运行状态，用户可以访问和使用服务器提供的服务。若Lite Server超节点服务器不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动Lite Server超节点服务器
     * @param {string} id **参数解释**：Lite Server超节点ID。 **约束限制**：不涉及。 **取值范围**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startHyperinstance(startHyperinstanceRequest?: StartHyperinstanceRequest): Promise<StartHyperinstanceResponse> {
        const options = ParamCreater().startHyperinstance(startHyperinstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止Lite Server实例接口用于停止正在运行的Lite Server实例。该接口适用于以下场景：当用户需要停止Lite Server实例，以节省资源或进行维护时，可以通过此接口停止指定的Lite Server实例。使用该接口的前提条件是Lite Server实例已创建且处于运行状态，用户具有停止实例的权限。若Lite Server实例不存在、已处于停止状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止Lite Server实例
     * @param {string} id **参数解释**：Lite Server实例ID。 **约束限制**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopDevServer(stopDevServerRequest?: StopDevServerRequest): Promise<StopDevServerResponse> {
        const options = ParamCreater().stopDevServer(stopDevServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止Lite Server超节点服务器接口用于停止正在运行的Lite Server超节点服务器。该接口适用于以下场景：当用户需要暂停使用Lite Server超节点服务器，以节省资源或进行维护时，可以通过此接口停止指定的超节点服务器。使用该接口的前提条件是Lite Server超节点服务器已创建且处于运行状态或者停止失败状态，用户具有停止超节点服务器的权限。停止操作完成后，超节点服务器将进入停止状态，不再提供服务。若Lite Server超节点服务器不存在、已处于停止状态或用户无权限操作，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止Lite Server超节点服务器
     * @param {string} id **参数解释**：Lite Server超节点ID。 **约束限制**：不涉及。 **取值范围**：^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopHyperinstance(stopHyperinstanceRequest?: StopHyperinstanceRequest): Promise<StopHyperinstanceResponse> {
        const options = ParamCreater().stopHyperinstance(stopHyperinstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实时同步用户Lite Server实例状态接口用于实时获取并同步用户Lite Server实例的当前状态。该接口适用于以下场景：用户需要实时监控其Lite Server实例的运行状态，确保实例正常运行或及时发现并处理异常情况。使用该接口的前提条件是用户已登录并具有相应的权限，且Lite Server实例已创建并处于运行状态。接口调用成功后，将返回Lite Server实例的最新状态信息，包括但不限于实例ID、运行状态、资源使用情况等。若用户无权限操作或Lite Server实例不存在，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实时同步用户指定Lite Server实例状态
     * @param {string} [owner] **参数解释**：实例归属的用户ID。 **约束限制**：可选。 **取值范围**：1 - 64字符，小写字母、数字和中划线。在大账号/有admin权限场景下生效，值通常为当前登录用户ID。 **默认取值**：不涉及。
     * @param {'ASC' | 'DESC'} [sortDir] **参数解释**：排序方式。 **约束限制**：可选。 **取值范围**： - ASC：升序 - DESC：降序 **默认取值**：ASC。
     * @param {string} [sortKey] **参数解释**：排序字段。 **约束限制**：可选。 **取值范围**： - createTime：默认值，创建时间。 - updateTime：更新时间。 **默认取值**：createTime。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：可选。 **取值范围**：0 - 2147483647 **默认取值**：0。
     * @param {number} [limit] **参数解释**：每一页的数量。 **约束限制**：可选。 **取值范围**：0 - 1024 **默认取值**：10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncDevServers(syncDevServersRequest?: SyncDevServersRequest): Promise<SyncDevServersResponse> {
        const options = ParamCreater().syncDevServers(syncDevServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改DevServer实例名称接口用于更改已创建的DevServer实例的名称。该接口适用于以下场景：当用户需要对DevServer实例进行重命名以更好地反映实例的功能或用途时，或者在实例名称不再符合当前项目命名规范时进行更新。使用该接口的前提条件是DevServer实例已存在且用户具有对该实例的管理权限。修改操作完成后，实例的新名称将立即生效，并在所有相关视图和记录中更新。若DevServer实例不存在、用户无权限操作或新名称不符合命名规则，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Lite Server实例名称
     * @param {string} id **参数解释**：DevServer ID。 **约束限制**：必填。 **取值范围**：1 - 64字符。 **默认取值**：不涉及。
     * @param {UpdateServerRequest} updateDevServerRequestBody **参数解释**：更新DevServer名称的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDevServer(updateDevServerRequest?: UpdateDevServerRequest): Promise<UpdateDevServerResponse> {
        const options = ParamCreater().updateDevServer(updateDevServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过运行的实例保存成容器镜像接口用于将正在运行的实例保存为容器镜像。该接口适用于以下场景：用户需要保存当前运行环境以便后续使用或开发时，可通过此接口将实例保存为镜像。使用该接口的前提条件是用户已登录系统并具有访问目标实例的权限，同时实例必须处于运行状态。调用该接口后，系统将保存实例的当前状态为容器镜像，包括安装的依赖包和插件。若用户无权限访问指定实例或实例未运行，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过运行的实例保存成容器镜像
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {ImageCreateReq} [imageCreateReq] **参数解释**：创建镜像请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImage(createImageRequest?: CreateImageRequest): Promise<CreateImageResponse> {
        const options = ParamCreater().createImage(createImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Notebook实例接口用于根据指定的参数创建一个新的Notebook实例。该接口适用于以下场景：用户需要为特定任务或项目创建Notebook实例时，可通过此接口指定实例规格、AI引擎镜像和存储配置。使用该接口的前提条件是用户已登录系统并具有创建Notebook实例的权限，同时需提供有效的创建参数。调用该接口后，系统将异步创建Notebook实例，用户可通过查询接口获取实例状态。创建完成后，用户可通过网页或SSH客户端访问Notebook实例。若用户无权限创建实例或参数无效，接口将返回相应的错误信息。异常情况包括：若系统资源不足，或创建操作失败，接口将返回相应的错误提示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Notebook实例
     * @param {NotebookCreateRequest} notebookReq **参数解释**：创建Notebook请求体。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNotebook(createNotebookRequest?: CreateNotebookRequest): Promise<CreateNotebookResponse> {
        const options = ParamCreater().createNotebook(createNotebookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加资源标签接口用于为指定的Notebook实例添加标签信息。该接口适用于以下场景：用户需要为Notebook实例添加标签信息，可通过此接口添加一个或多个标签。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限。调用该接口后，系统将为指定的Notebook实例添加标签，若标签的key已存在，则覆盖原有的value值。若用户无权限操作指定Notebook实例或输入的参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加资源标签
     * @param {string} resourceId **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {CreateTmsTagsRequest} createTmsTagsRequest **参数解释**：创建标签请求body体。 **约束限制**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID。获取方法请参见[[查询工作空间列表](ListWorkspace.xml)](tag:hc,hk)。未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNotebookTags(createNotebookTagsRequest?: CreateNotebookTagsRequest): Promise<CreateNotebookTagsResponse> {
        const options = ParamCreater().createNotebookTags(createNotebookTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Notebook实例接口用于移除已创建的Notebook实例及其相关资源。该接口适用于以下场景：用户需要清理不再使用的Notebook实例时，可通过此接口删除指定的Notebook实例，包括其容器和所有存储资源。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限。调用该接口后，系统将删除指定的Notebook实例及其相关资源。若用户无权限操作指定实例或Notebook实例未停止，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或删除操作失败，接口将返回相应的错误提示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Notebook实例
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNotebook(deleteNotebookRequest?: DeleteNotebookRequest): Promise<DeleteNotebookResponse> {
        const options = ParamCreater().deleteNotebook(deleteNotebookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源标签接口用于移除指定Notebook实例的标签信息。该接口适用于以下场景：用户需要清理或重新组织Notebook实例的标签时，可通过此接口删除单个或多个标签。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限。调用该接口后，系统将删除指定的标签，若标签不存在则不进行操作。若用户无权限操作指定Notebook实例或输入的参数无效，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceId **参数解释**：资源ID：如Notebook实例ID。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {DeleteTmsTagsRequest} deleteTmsTagsRequest **参数解释**：删除服务标签请求体。 **约束限制**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID。获取方法请参见[[查询工作空间列表](ListWorkspace.xml)](tag:hc,hk)。未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNotebookTags(deleteNotebookTagsRequest?: DeleteNotebookTagsRequest): Promise<DeleteNotebookTagsResponse> {
        const options = ParamCreater().deleteNotebookTags(deleteNotebookTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有Notebook实例列表接口用于获取所有已创建的Notebook实例信息。该接口适用于以下场景：用户需要全面了解当前系统中所有Notebook实例的状态、资源使用情况或管理多个Notebook实例时，可通过此接口获取相关信息。使用该接口的前提条件是用户已创建Notebook实例，并且具有相应的查询权限。调用成功后，系统将返回所有Notebook实例的列表，包含实例ID、状态、创建时间等详细信息。若用户无权限访问，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有Notebook实例列表
     * @param {'DEFAULT' | 'NOTEBOOK'} [feature] **参数解释**：实例类别。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - DEFAULT：CodeLab免费规格实例，每个用户最多只能创建一个。 - NOTEBOOK：计费规格实例。  **默认取值**：NOTEBOOK。
     * @param {number} [limit] **参数解释**：每一页显示实例的数量。 **约束限制**：不涉及。 **取值范围**：[10,20,50]。 **默认取值**：10。
     * @param {string} [name] **参数解释**：实例名称，支持模糊匹配查询。 **约束限制**：不涉及。 **取值范围**：长度限制128个字符，支持大小写字母、数字、中划线和下划线。 **默认取值**：不涉及。
     * @param {string} [poolId] **参数解释**：专属资源池ID，获取方法请参见[查询资源池列表](ListPools.xml)。 **约束限制**：不涉及。 **取值范围**：长度最长为64个字符，最短为4个字符，支持小写字母、数字、中划线，且必须是小写字母开头，小写字母或数字结尾。 **默认取值**：不涉及。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {string} [owner] **参数解释**：实例归属的用户ID，在大账号/有admin权限场景下生效，值通常为当前登录用户ID。 **约束限制**：不涉及。 **取值范围**：长度为32位小写字母、数字。 **默认取值**：不涉及。
     * @param {'ASC' | 'DESC'} [sortDir] **参数解释**：实例排序方式。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - ASC：升序 - DESC：降序  **默认取值**：DESC。
     * @param {string} [sortKey] **参数解释**：排序的字段，多个字段使用(“,”)逗号分隔。 **约束限制**：不涉及。 **取值范围**：长度限制为128个字符，支持大小写字母、数字、中划线、下划线和逗号。 **默认取值**：不涉及。
     * @param {'CREATE_FAILED' | 'CREATING' | 'DELETED' | 'DELETE_FAILED' | 'DELETING' | 'ERROR' | 'FROZEN' | 'INIT' | 'RUNNING' | 'SNAPSHOTTING' | 'STARTING' | 'START_FAILED' | 'STOPPED' | 'STOPPING'} [status] **参数解释**：实例状态。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - INIT：初始化 - CREATING：创建中 - STARTING：启动中 - STOPPING：停止中 - DELETING：删除中 - RUNNING：运行中 - STOPPED：已停止 - SNAPSHOTTING：快照中(保存镜像时的状态) - CREATE_FAILED：创建失败 - START_FAILED：启动失败 - DELETE_FAILED：删除失败 - ERROR：错误 - DELETED：已删除 - FROZEN：冻结  **默认取值**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID。获取方法请参见[[查询工作空间列表](ListWorkspace.xml)](tag:hc,hk)。未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {string} [flavor] **参数解释**：实例的机器规格。如下规格仅供参考，实际支持的规格以具体区域为准。 modelarts.vm.cpu.2u：Intel CPU通用规格，用于快速数据探索和实验。 modelarts.vm.cpu.8u：Intel CPU算力增强型，适用于密集计算场景下运算。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [imageId] **参数解释**：待创建Notebook实例的镜像，需要指定镜像ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。镜像的ID可通过调用[[查询支持的镜像列表](https://support.huaweicloud.com/api-modelarts/ListImage.html)](tag:hc)[[查询支持的镜像列表](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListImage.html)](tag:hk)接口获取。 **约束限制**：不涉及。 **取值范围**：调用[[查询支持的镜像列表](https://support.huaweicloud.com/api-modelarts/ListImage.html)](tag:hc)[[查询支持的镜像列表](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListImage.html)](tag:hk)接口获取的合法镜像ID列表。 **默认取值**：不涉及。
     * @param {string} [id] **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [billing] **参数解释**：实例计费类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - COMPUTE：计算资源计费 - STORAGE：存储资源计费 - ALL：所有计费类型  **默认取值**：不涉及。
     * @param {string} [tags] **参数解释**：实例标签信息。 **约束限制**：不涉及。 **取值范围**：不以逗号，竖划线开头，不以逗号结尾，不出现连续的竖划线和逗号，允许中文、西文、葡文等语言以及空格_.:/&#x3D;+-@特殊字符，且字符间以逗号或者竖划线分割。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllNotebooks(listAllNotebooksRequest?: ListAllNotebooksRequest): Promise<ListAllNotebooksResponse> {
        const options = ParamCreater().listAllNotebooks(listAllNotebooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户所有Notebook资源池实例详情接口用于获取用户关联的所有Notebook资源池实例的详细信息。该接口适用于以下场景：当用户创建Notebook示例需要选择资源池时，可通过此接口获取所有资源池实例列表信息。使用该接口的前提条件是用户已注册并登录系统，且具有查看资源池实例的权限。调用成功后，接口将返回包含所有资源池实例的详细信息列表，包括实例名称、状态、节点规格等。若用户未登录、无权限访问或系统内部出现错误，接口将返回相应的错误信息，如未认证、无权限或服务不可用等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户所有Notebook资源池实例详情
     * @param {string} type **参数解释**：资源池类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - MANAGED： 公共池。 - DEDICATED：专属池。  **默认取值**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc) **约束限制**：存在并使用的工作空间。 **取值范围**：不涉及。 **默认取值**：“0”。
     * @param {number} [limit] **参数解释**：每一页显示实例的数量。 **约束限制**：不涉及。 **取值范围**：大于等于0。 **默认取值**：1000。
     * @param {number} [offset] **参数解释**：数据条目偏移量。 **约束限制**：不涉及。 **取值范围**：大于等于0。 **默认取值**：0。
     * @param {string} [scope] **参数解释**：作业类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - NOTEBOOK：开发环境 - TRAIN：训练作业 - INFER：推理作业  **默认取值**：NOTEBOOK。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthoringClusters(listAuthoringClustersRequest?: ListAuthoringClustersRequest): Promise<ListAuthoringClustersResponse> {
        const options = ParamCreater().listAuthoringClusters(listAuthoringClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户指定特性的开关及配额接口用于获取指定特性在当前用户下的开关状态及配额信息。该接口适用于以下场景：当用户需要了解特定特性是否已开启、查看配额限制或监控已使用的资源情况时，可通过此接口查询相关信息。使用该接口的前提条件是用户已登录且具有查询权限，同时指定的特性必须存在。调用该接口后，系统将返回该特性是否已开启、配额总量及已使用的资源情况等详细信息。若用户无权限查询、特性不存在或系统出现异常，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前用户指定特性的开关及配额
     * @param {string} feature **参数解释**：特性名称。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - NOTEBOOK：用户显式创建的Notebook实例。  **默认取值**：NOTEBOOK。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFeatures(listFeaturesRequest?: ListFeaturesRequest): Promise<ListFeaturesResponse> {
        const options = ParamCreater().listFeatures(listFeaturesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Notebook支持的有效规格列表接口用于获取运行Notebook实例时可使用的规格选项。该接口适用于以下场景：用户需要了解Notebook实例支持的配置选项时，可通过此接口查询可用的规格列表。使用该接口的前提条件是用户已登录系统并具有访问目标Notebook实例的权限。调用该接口后，系统将返回Notebook实例支持的有效规格列表，包括内存、CPU等配置信息。若用户无权限访问指定实例或Notebook实例未运行，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Notebook支持的有效规格列表
     * @param {'ASCEND' | 'CPU' | 'GPU'} [category] **参数解释**：规格处理器类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - CPU - GPU - [ASCEND](tag:hc,hk,fcs_super)  **默认取值**：不涉及。
     * @param {number} [limit] **参数解释**：每一页显示的有效规格数量，默认不限制。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {'DEDICATED' | 'DEDICATED_ROMA' | 'MANAGED' | 'MANAGED_ROMA'} [type] **参数解释**：集群类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - MANAGED：公共集群 - DEDICATED：专属集群  **默认取值**：不涉及。
     * @param {'ASC' | 'DESC'} [sortDir] **参数解释**：排序方式。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - ASC：升序 - DESC：降序  **默认取值**：DESC。
     * @param {string} [sortKey] **参数解释**：排序的字段，多个字段使用(“,”)逗号分隔。 **约束限制**：不涉及。 **取值范围**：长度限制为128个字符，支持大小写字母、数字、中划线、下划线和逗号。 **默认取值**：不涉及。
     * @param {string} [flavorType] **参数解释**：资源类型 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： -ASCEND_SNT9：昇腾910芯片。 -ASCEND_SNT9B：昇腾910B芯片。 -ASCEND_SNT3：昇腾310芯片。  **默认取值**：不涉及。
     * @param {string} [feature] **参数解释**：特性名称。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - NOTEBOOK：用户显式创建的Notebook实例。  **默认取值**：NOTEBOOK。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavors(listFlavorsRequest?: ListFlavorsRequest): Promise<ListFlavorsResponse> {
        const options = ParamCreater().listFlavors(listFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Notebook实例列表接口用于获取满足特定条件的Notebook实例信息。该接口适用于以下场景：用户管理多个Notebook实例或查看特定状态的Notebook实例时，可通过此接口获取相关信息。使用该接口的前提条件是用户已创建Notebook实例，并且具有相应的查询权限。调用成功后，系统将返回符合条件的Notebook实例列表，包含实例ID、状态、创建时间等详细信息。若用户无权限访问或查询条件不明确，接口将返回相应的错误信息或空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Notebook实例列表
     * @param {'DEFAULT' | 'NOTEBOOK'} [feature] **参数解释**：实例类别。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - DEFAULT：CodeLab免费规格实例，每个用户最多只能创建一个。 - NOTEBOOK：计费规格实例。  **默认取值**：NOTEBOOK。
     * @param {number} [limit] **参数解释**：每一页显示实例的数量。 **约束限制**：不涉及。 **取值范围**：[10,20,50]。 **默认取值**：10。
     * @param {string} [name] **参数解释**：实例名称，支持模糊匹配查询。 **约束限制**：不涉及。 **取值范围**：长度限制128个字符，支持大小写字母、数字、中划线和下划线。 **默认取值**：不涉及。
     * @param {string} [poolId] **参数解释**：专属资源池ID。 **约束限制**：不涉及。 **取值范围**：长度最长为64个字符，最短为4个字符，支持小写字母、数字、中划线，且必须是小写字母开头，小写字母或数字结尾。 **默认取值**：不涉及。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {string} [owner] **参数解释**：实例归属的用户ID，在大账号/有admin权限场景下生效，值通常为当前登录用户ID。 **约束限制**：不涉及。 **取值范围**：长度为32位小写字母、数字。 **默认取值**：不涉及。
     * @param {'ASC' | 'DESC'} [sortDir] **参数解释**：实例排序方式。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - ASC：升序 - DESC：降序  **默认取值**：DESC。
     * @param {string} [sortKey] **参数解释**：排序的字段，多个字段使用(“,”)逗号分隔。 **约束限制**：不涉及。 **取值范围**：长度限制为128个字符，支持大小写字母、数字、中划线、下划线和逗号。 **默认取值**：不涉及。
     * @param {'CREATE_FAILED' | 'CREATING' | 'DELETED' | 'DELETE_FAILED' | 'DELETING' | 'ERROR' | 'FROZEN' | 'INIT' | 'RUNNING' | 'SNAPSHOTTING' | 'STARTING' | 'START_FAILED' | 'STOPPED' | 'STOPPING'} [status] **参数解释**：实例状态。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - INIT：初始化 - CREATING：创建中 - STARTING：启动中 - STOPPING：停止中 - DELETING：删除中 - RUNNING：运行中 - STOPPED：已停止 - SNAPSHOTTING：快照中(保存镜像时的状态) - CREATE_FAILED：创建失败 - START_FAILED：启动失败 - DELETE_FAILED：删除失败 - ERROR：错误 - DELETED：已删除 - FROZEN：冻结  **默认取值**：不涉及。
     * @param {string} [workspaceId] **参数解释**：工作空间ID。获取方法请参见[[查询工作空间列表](ListWorkspace.xml)](tag:hc,hk)。未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {string} [flavor] **参数解释**：实例的机器规格。如下规格仅供参考，实际支持的规格以具体区域为准。 modelarts.vm.cpu.2u：Intel CPU通用规格，用于快速数据探索和实验。 modelarts.vm.cpu.8u：Intel CPU算力增强型，适用于密集计算场景下运算。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [imageId] **参数解释**：待创建Notebook实例的镜像，需要指定镜像ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID）。镜像的ID可通过调用[[查询支持的镜像列表](https://support.huaweicloud.com/api-modelarts/ListImage.html)](tag:hc)[[查询支持的镜像列表](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListImage.html)](tag:hk)接口获取。 **约束限制**：不涉及。 **取值范围**：调用[[查询支持的镜像列表](https://support.huaweicloud.com/api-modelarts/ListImage.html)](tag:hc)[[查询支持的镜像列表](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListImage.html)](tag:hk)接口获取的合法镜像ID列表。 **默认取值**：不涉及。
     * @param {string} [id] **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {string} [billing] **参数解释**：实例计费类型。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - COMPUTE：计算资源计费 - STORAGE：存储资源计费 - ALL：所有计费类型  **默认取值**：不涉及。
     * @param {string} [tags] **参数解释**：实例标签信息。 **约束限制**：不涉及。 **取值范围**：不以逗号，竖划线开头，不以逗号结尾，不出现连续的竖划线和逗号，允许中文、西文、葡文等语言以及空格_.:/&#x3D;+-@特殊字符，且字符间以逗号或者竖划线分割。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotebooks(listNotebooksRequest?: ListNotebooksRequest): Promise<ListNotebooksResponse> {
        const options = ParamCreater().listNotebooks(listNotebooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Notebook时长续约接口用于延长运行中的Notebook实例的运行时间。该接口适用于以下场景：用户需要延长Notebook实例的使用时间以完成长时间任务时，可通过此接口延长指定实例的运行时间。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限，同时Notebook实例必须处于运行状态。调用该接口后，系统将延长指定Notebook实例的运行时间，用户可继续使用。若用户无权限操作指定实例或Notebook实例未运行，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Notebook时长续约
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [duration] **参数解释**：续订时长，推荐该参数在leaseReq中配置，若请求参数中包含duration，则忽略leaseReq的值，且实例自动停止类别为定时停止。(单位:毫秒)。 **约束限制**：不涉及。 **取值范围**：3600000-259200000。 **默认取值**：3600000。
     * @param {LeaseReq} [leaseReq] **参数解释**：时长续约参数。 **约束限制**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public renewLease(renewLeaseRequest?: RenewLeaseRequest): Promise<RenewLeaseResponse> {
        const options = ParamCreater().renewLease(renewLeaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Notebook资源池详情接口用于获取资源池的详细信息。该接口适用于以下场景：当用户需要创建Notebook实例作业时，可通过此接口查询指定集群的详细信息。使用该接口的前提条件是集群已成功纳管且用户具有相应的访问权限。调用该接口后，系统将返回集群的实例ID、名称、Flavor规格、实例状态以及实例可打开的URL等详细信息。若集群不存在、未被纳管或用户无权限访问，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Notebook资源池详情
     * @param {string} clusterId **参数解释**：纳管集群ID。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
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
     * 查询运行中的Notebook可用时长接口用于获取正在运行的Notebook实例的剩余可用时间。该接口适用于以下场景：用户需要了解Notebook实例的剩余运行时间以合理安排任务时，可通过此接口查询指定实例的可用时长。使用该接口的前提条件是用户已登录系统并具有访问目标Notebook实例的权限，同时Notebook实例必须处于运行状态。调用该接口后，系统将返回指定Notebook实例的可用时长信息。若用户无权限访问指定实例或Notebook实例未运行，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或查询操作失败，接口将返回相应的错误提示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询运行中的Notebook可用时长
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLease(showLeaseRequest?: ShowLeaseRequest): Promise<ShowLeaseResponse> {
        const options = ParamCreater().showLease(showLeaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Notebook实例详情接口用于获取指定Notebook实例的详细信息。该接口适用于以下场景：用户需要查看特定Notebook实例的详细配置、运行状态或获取访问链接时，可通过此接口获取相关信息。使用该接口的前提条件是Notebook实例已存在且用户具有相应的查询权限。调用成功后，系统将返回实例ID、名称、规格、镜像、实例状态和实例可打开的URL等详细信息。若实例不存在或用户无权限访问，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Notebook实例详情
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNotebook(showNotebookRequest?: ShowNotebookRequest): Promise<ShowNotebookResponse> {
        const options = ParamCreater().showNotebook(showNotebookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Notebook资源类型下的标签接口用于获取用户当前project下Notebook实例的标签信息。该接口适用于以下场景：用户需要管理或统计Notebook资源时，可通过此接口查询特定标签或所有标签的Notebook实例。使用该接口的前提条件是用户已登录系统并具有访问权限，同时可指定工作空间或默认查询所有工作空间。调用该接口后，系统将返回指定Notebook实例的标签列表，包括标签名称、标签值等信息。若用户无权限，则返回相应的异常信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Notebook资源类型下的标签
     * @param {string} [workspaceId] **参数解释**：工作空间ID。获取方法请参见[[查询工作空间列表](ListWorkspace.xml)](tag:hc,hk)。未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNotebookTags(showNotebookTagsRequest?: ShowNotebookTagsRequest): Promise<ShowNotebookTagsResponse> {
        const options = ParamCreater().showNotebookTags(showNotebookTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Notebook支持的可切换规格列表接口用于获取创建Notebook实例时可选择的规格选项。该接口适用于以下场景：用户需要了解Notebook实例支持的配置选项时，可通过此接口查询可用的规格列表。使用该接口的前提条件是用户已登录系统并具有创建Notebook实例的权限。调用该接口后，系统将返回Notebook实例支持的可切换规格列表，包括内存、CPU等配置信息。若用户无权限创建Notebook实例，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Notebook支持的可切换规格列表
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [limit] **参数解释**：每一页显示的有效规格数量，默认不限制。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [offset] **参数解释**：分页记录的起始位置偏移量。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：0。
     * @param {string} [sortKey] **参数解释**：排序的字段，多个字段使用(“,”)逗号分隔。 **约束限制**：不涉及。 **取值范围**：长度限制为128个字符，支持大小写字母、数字、中划线、下划线和逗号。 **默认取值**：不涉及。
     * @param {string} [sortDir] **参数解释**：实例排序方式。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - ASC：升序 - DESC：降序  **默认取值**：DESC。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSwitchableFlavors(showSwitchableFlavorsRequest?: ShowSwitchableFlavorsRequest): Promise<ShowSwitchableFlavorsResponse> {
        const options = ParamCreater().showSwitchableFlavors(showSwitchableFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动Notebook实例接口用于启动已创建的Notebook实例。该接口适用于以下场景：用户需要开始运行Notebook实例以进行数据处理、模型训练或开发时，可通过此接口启动指定的Notebook实例。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限，同时Notebook实例必须处于停止状态且配置正确。调用该接口后，系统将启动指定的Notebook实例，用户可开始使用。若用户无权限操作指定实例或Notebook实例未停止，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或启动操作失败，接口将返回相应的错误提示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动Notebook实例
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {number} [duration] **参数解释**：启动后运行时长（单位:毫秒）。 **约束限制**：不涉及。 **取值范围**：3600000-259200000。 **默认取值**：3600000。
     * @param {'timing' | 'idle'} [type] **参数解释**：自动停止类别。 **约束限制**：不涉及。 **取值范围**：枚举类型，取值如下： - TIMING：自动停止。 - IDLE：空闲停止。  **默认取值**：TIMING。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startNotebook(startNotebookRequest?: StartNotebookRequest): Promise<StartNotebookResponse> {
        const options = ParamCreater().startNotebook(startNotebookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止Notebook实例接口用于停止正在运行的Notebook实例。该接口适用于以下场景：用户需要释放Notebook实例占用的资源或结束当前运行的任务时，可通过此接口停止指定的Notebook实例。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限，同时Notebook实例必须处于运行状态。调用该接口后，系统将停止指定的Notebook实例，释放相关资源。若用户无权限操作指定实例或Notebook实例未运行，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或停止操作失败，接口将返回相应的错误提示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止Notebook实例
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopNotebook(stopNotebookRequest?: StopNotebookRequest): Promise<StopNotebookResponse> {
        const options = ParamCreater().stopNotebook(stopNotebookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新Notebook实例接口用于修改Notebook实例的配置信息，包括名称、描述、规格和镜像等。该接口适用于以下场景：用户需要调整Notebook实例的配置以适应新的需求时，可通过此接口更新实例的详细信息。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限，同时Notebook实例必须处于停止状态。调用该接口后，系统将更新指定Notebook实例的配置信息。若用户无权限操作指定实例或Notebook实例未停止，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或更新参数无效，接口将返回相应的错误提示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Notebook实例
     * @param {string} id **参数解释**：Notebook实例ID。ID格式为通用唯一识别码（Universally Unique Identifier，简称UUID），可通过调用[[查询Notebook实例列表接口](https://support.huaweicloud.com/api-modelarts/ListNotebooks.html#section0)](tag:hc)[[查询Notebook实例列表接口](https://support.huaweicloud.com/intl/zh-cn/api-modelarts/ListNotebooks.html#section0)](tag:hk)获取。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {NotebookUpdateRequest} notebookUpdateReq notebookUpdateReq
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNotebook(updateNotebookRequest?: UpdateNotebookRequest): Promise<UpdateNotebookResponse> {
        const options = ParamCreater().updateNotebook(updateNotebookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Workflow工作流。[可参考[如何开发Workflow](https://support.huaweicloud.com/usermanual-standard-modelarts/modelarts_workflow_0292.html)，创建工作流。](tag:hc)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建Workflow工作流
     * @param {WorkflowParam} body Workflow信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflow(createWorkflowRequest?: CreateWorkflowRequest): Promise<CreateWorkflowResponse> {
        const options = ParamCreater().createWorkflow(createWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 计费工作流购买资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建在线服务包
     * @param {string} workflowId 工作流的ID。
     * @param {WorkflowServicePackage} [body] 资源包相关内容
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflowPurchasePool(createWorkflowPurchasePoolRequest?: CreateWorkflowPurchasePoolRequest): Promise<CreateWorkflowPurchasePoolResponse> {
        const options = ParamCreater().createWorkflowPurchasePool(createWorkflowPurchasePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 计费工作流在线服务鉴权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在线服务鉴权
     * @param {WorkflowMainServiceAuthReq} [body] 在线服务认证信息请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflowServiceAuth(createWorkflowServiceAuthRequest?: CreateWorkflowServiceAuthRequest): Promise<CreateWorkflowServiceAuthResponse> {
        const options = ParamCreater().createWorkflowServiceAuth(createWorkflowServiceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过ID删除Workflow工作流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Workflow工作流
     * @param {string} workflowId 工作流的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkflow(deleteWorkflowRequest?: DeleteWorkflowRequest): Promise<DeleteWorkflowResponse> {
        const options = ParamCreater().deleteWorkflow(deleteWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 展示Workflow工作流列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Workflow工作流列表
     * @param {string} [name] 工作流名称。
     * @param {string} [description] 工作流描述信息。
     * @param {string} [status] 工作流状态。
     * @param {string} [labels] 工作流标签。
     * @param {string} [templateId] 工作流模板ID。
     * @param {string} [limit] 分页参数limit，表示单次查询的条目数上限。假如要查询20~29条记录，offset为20，limit为10。
     * @param {string} [offset] 分页参数offset，表示单次查询的条目偏移数量。假如要查询20~29条记录，offset为20，limit为10。
     * @param {string} [sortBy] 排序依据字段，例如sort_by&#x3D;create_time，则表示以条目的创建时间进行排序。
     * @param {'contain' | 'equal'} [searchType] 过滤方式。可选值如下： - equal表示精确匹配。 - contain表示模糊匹配。  具体过滤的字段，由各个接口额外定义参数。例如Workflow支持按照名称（name）进行过滤，则相应的过滤字段为name。name&#x3D;workflow&amp;search_type&#x3D;contain表示查询名称中含有Workflow字样的所有工作流。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkflows(listWorkflowsRequest?: ListWorkflowsRequest): Promise<ListWorkflowsResponse> {
        const options = ParamCreater().listWorkflows(listWorkflowsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过ID查询Workflow工作流详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Workflow工作流
     * @param {string} workflowId 工作流的ID。
     * @param {string} [workspaceId] 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflow(showWorkflowRequest?: ShowWorkflowRequest): Promise<ShowWorkflowResponse> {
        const options = ParamCreater().showWorkflow(showWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Workflow列表所有标签接口用于获取指定项目下所有工作流的标签信息。
     * 该接口适用于以下场景：当用户需要了解项目中所有工作流的标签配置，以便进行资源管理和筛选时，可以通过此接口获取标签列表。使用该接口的前提条件是用户已登录并具有查看工作流标签的权限。响应消息体中包含每个工作流的标签信息，如标签键和值。若用户无权限或项目下无工作流，接口将返回相应的错误信息或空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Workflow列表所有标签
     * @param {number} [limit] 返回的数据条目数。
     * @param {number} [offset] 数据条目偏移量。
     * @param {'asc' | 'desc'} [order] instance order
     * @param {'user_name' | 'create_time'} [sortBy] 指定排序字段。  可选值： - user_name：IAM用户名称 - create_time：创建时间
     * @param {string} [templateId] **参数解释**：工作流模板ID。 **约束限制**：不涉及。 **取值范围**：不涉及。 **默认取值**：不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowLabels(showWorkflowLabelsRequest?: ShowWorkflowLabelsRequest): Promise<ShowWorkflowLabelsResponse> {
        const options = ParamCreater().showWorkflowLabels(showWorkflowLabelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Workflow工作流统计信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 总览Workflow工作流
     * @param {string} [workspaceId] 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {'contain' | 'equal'} [searchType] 过滤方式。可选值如下： - equal表示精确匹配。 - contain表示模糊匹配。  具体过滤的字段，由各个接口额外定义参数。例如Workflow支持按照名称（name）进行过滤，则相应的过滤字段为name。name&#x3D;workflow&amp;search_type&#x3D;contain表示查询名称中含有Workflow字样的所有工作流。
     * @param {string} [name] 工作流名称。填写1-64位，仅包含英文、数字、下划线（_）和中划线（-），并且以英文开头的名称。
     * @param {string} [description] 工作流描述信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowsOverview(showWorkflowsOverviewRequest?: ShowWorkflowsOverviewRequest): Promise<ShowWorkflowsOverviewResponse> {
        const options = ParamCreater().showWorkflowsOverview(showWorkflowsOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Workflow待办列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Workflow待办事项
     * @param {string} [workspaceId] 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowsTodolist(showWorkflowsTodolistRequest?: ShowWorkflowsTodolistRequest): Promise<ShowWorkflowsTodolistResponse> {
        const options = ParamCreater().showWorkflowsTodolist(showWorkflowsTodolistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新Workflow工作流信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Workflow工作流
     * @param {string} workflowId 工作流的ID。
     * @param {WorkflowUpdate} [body] 工作流更新信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkflow(updateWorkflowRequest?: UpdateWorkflowRequest): Promise<UpdateWorkflowResponse> {
        const options = ParamCreater().updateWorkflow(updateWorkflowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Workflow Execution。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建Workflow Execution
     * @param {string} workflowId 工作流的ID。
     * @param {WorkflowExecution} body 工作流执行信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflowExecution(createWorkflowExecutionRequest?: CreateWorkflowExecutionRequest): Promise<CreateWorkflowExecutionResponse> {
        const options = ParamCreater().createWorkflowExecution(createWorkflowExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口支持对Workflow Execution进行停止或重跑操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理Workflow Execution
     * @param {string} workflowId 工作流的ID。
     * @param {string} executionId 工作流执行ID。
     * @param {ExecutionAction} [body] Execution操作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflowExecutionsActions(createWorkflowExecutionsActionsRequest?: CreateWorkflowExecutionsActionsRequest): Promise<CreateWorkflowExecutionsActionsResponse> {
        const options = ParamCreater().createWorkflowExecutionsActions(createWorkflowExecutionsActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 本接口支持对Workflow StepExecution进行重试、停止和继续操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理Workflow StepExecution
     * @param {string} workflowId 工作流的ID。
     * @param {string} executionId 工作流执行ID。
     * @param {string} stepExecutionId 工作流的一次执行中一个节点的执行ID。
     * @param {StepExecutionAction} [body] step的动作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflowStepExecutionsActions(createWorkflowStepExecutionsActionsRequest?: CreateWorkflowStepExecutionsActionsRequest): Promise<CreateWorkflowStepExecutionsActionsResponse> {
        const options = ParamCreater().createWorkflowStepExecutionsActions(createWorkflowStepExecutionsActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过ID删除Workflow Execution。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Workflow Execution
     * @param {string} workflowId 工作流的ID。
     * @param {string} executionId 工作流执行ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkflowExecution(deleteWorkflowExecutionRequest?: DeleteWorkflowExecutionRequest): Promise<DeleteWorkflowExecutionResponse> {
        const options = ParamCreater().deleteWorkflowExecution(deleteWorkflowExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Workflow Execution列表的所有标签接口用于查询指定工作流执行记录中的所有标签。
     * 该接口适用于以下场景：当用户需要查看工作流执行记录的标签信息，以便进行分类、筛选或统计时，可以通过此接口获取所有标签的列表。使用该接口的前提条件是用户已登录且具有查看工作流执行记录的权限。接口响应消息体中包含每个标签的详细信息，如标签键和标签值。若用户无权限操作或指定的工作流执行记录不存在，接口将返回相应的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Workflow Execution列表的所有标签
     * @param {string} workflowId 工作流的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExecutionLabels(listExecutionLabelsRequest?: ListExecutionLabelsRequest): Promise<ListExecutionLabelsResponse> {
        const options = ParamCreater().listExecutionLabels(listExecutionLabelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Workflow下的执行记录列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Execution列表
     * @param {string} workflowId 工作流的ID。
     * @param {string} [workspaceId] 工作空间ID。[获取方法请参见[查询工作空间列表](ListWorkspace.xml)。](tag:hc)未创建工作空间时默认值为“0”，存在创建并使用的工作空间，以实际取值为准。
     * @param {string} [limit] 分页参数limit，表示单次查询的条目数上限。假如要查询20~29条记录，offset为20，limit为10。
     * @param {string} [sortBy] 排序依据字段，例如sort_by&#x3D;create_time，则表示以条目的创建时间进行排序。
     * @param {string} [offset] 分页参数offset，表示单次查询的条目偏移数量。假如要查询20~29条记录，offset为20，limit为10。
     * @param {string} [labels] 执行记录标签。
     * @param {string} [status] 执行记录状态。
     * @param {string} [sceneId] 场景ID。
     * @param {'desc' | 'asc'} [order] 排序的方式。该字段必须与sort_by同时使用。 缺省值: desc 枚举值： - asc：表示升序排列， - desc：降序排列。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkflowExecutions(listWorkflowExecutionsRequest?: ListWorkflowExecutionsRequest): Promise<ListWorkflowExecutionsResponse> {
        const options = ParamCreater().listWorkflowExecutions(listWorkflowExecutionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定工作流中各步骤的执行情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取StepExecution列表
     * @param {string} workflowId 工作流的ID。
     * @param {number} [limit] 返回的数据条目数。
     * @param {number} [offset] 数据条目偏移量。
     * @param {'asc' | 'desc'} [order] instance order
     * @param {string} [sortBy] 排序依据字段，例如sort_by&#x3D;create_time，则表示以条目的创建时间进行排序。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkflowStepExecution(listWorkflowStepExecutionRequest?: ListWorkflowStepExecutionRequest): Promise<ListWorkflowStepExecutionResponse> {
        const options = ParamCreater().listWorkflowStepExecution(listWorkflowStepExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过ID查询Workflow Execution详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Workflow Execution
     * @param {string} workflowId 工作流的ID。
     * @param {string} executionId 工作流执行ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowExecution(showWorkflowExecutionRequest?: ShowWorkflowExecutionRequest): Promise<ShowWorkflowExecutionResponse> {
        const options = ParamCreater().showWorkflowExecution(showWorkflowExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Workflow工作流节点的度量信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Workflow工作流节点度量信息
     * @param {string} workflowId 工作流的ID。
     * @param {string} executionId 工作流执行ID。
     * @param {string} stepExecutionId 工作流的一次执行中一个节点的执行ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowStepExecutionMetrics(showWorkflowStepExecutionMetricsRequest?: ShowWorkflowStepExecutionMetricsRequest): Promise<ShowWorkflowStepExecutionMetricsResponse> {
        const options = ParamCreater().showWorkflowStepExecutionMetrics(showWorkflowStepExecutionMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过ID更新Workflow Exectuion。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Workflow Execution
     * @param {string} workflowId 工作流的ID。
     * @param {string} executionId 工作流执行ID。
     * @param {WorkflowExecution} [body] 工作流程执行信息更新。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkflowExecution(updateWorkflowExecutionRequest?: UpdateWorkflowExecutionRequest): Promise<UpdateWorkflowExecutionResponse> {
        const options = ParamCreater().updateWorkflowExecution(updateWorkflowExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建Workflow定时调度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建工作流定时调度
     * @param {string} workflowId 工作流的ID。
     * @param {WorkflowSchedule} body 工作流调度信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflowSchedule(createWorkflowScheduleRequest?: CreateWorkflowScheduleRequest): Promise<CreateWorkflowScheduleResponse> {
        const options = ParamCreater().createWorkflowSchedule(createWorkflowScheduleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除工作流调度信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除工作流定时调度信息
     * @param {string} workflowId 工作流的ID。
     * @param {string} scheduleId 工作流调度信息ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkflowScheduleId(deleteWorkflowScheduleIdRequest?: DeleteWorkflowScheduleIdRequest): Promise<DeleteWorkflowScheduleIdResponse> {
        const options = ParamCreater().deleteWorkflowScheduleId(deleteWorkflowScheduleIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作流调度详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作流定时调度详情
     * @param {string} workflowId 工作流的ID。
     * @param {string} scheduleId 工作流调度信息ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowSchedule(showWorkflowScheduleRequest?: ShowWorkflowScheduleRequest): Promise<ShowWorkflowScheduleResponse> {
        const options = ParamCreater().showWorkflowSchedule(showWorkflowScheduleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作流定时调度列表接口用于获取指定项目下所有工作流的定时调度信息。
     * 该接口适用于以下场景：当用户需要查看项目中所有工作流的定时调度配置，以便进行任务管理和调度优化时，可以通过此接口获取定时调度列表。使用该接口的前提条件是用户已登录并具有查看工作流定时调度的权限。响应消息体中包含每个工作流的定时调度信息，如调度ID、调度时间、状态等。若用户无权限或项目下无工作流定时调度，接口将返回相应的错误信息或空列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作流定时调度列表
     * @param {string} workflowId 工作流的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowScheduleList(showWorkflowScheduleListRequest?: ShowWorkflowScheduleListRequest): Promise<ShowWorkflowScheduleListResponse> {
        const options = ParamCreater().showWorkflowScheduleList(showWorkflowScheduleListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新WorkflowSchedule信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新工作流定时调度信息
     * @param {string} workflowId 工作流的ID。
     * @param {string} scheduleId 工作流调度信息ID。
     * @param {WorkflowScheduleUpdate} [body] schedule更新信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkflowSchedule(updateWorkflowScheduleRequest?: UpdateWorkflowScheduleRequest): Promise<UpdateWorkflowScheduleResponse> {
        const options = ParamCreater().updateWorkflowSchedule(updateWorkflowScheduleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为Workflow工作流添加消息订阅功能。工作流已订阅的事件发生时，会产生消息提醒。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建消息订阅Subscription
     * @param {string} workflowId 工作流的ID。
     * @param {Subscription} [body] 订阅消息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkflowSubscriptions(createWorkflowSubscriptionsRequest?: CreateWorkflowSubscriptionsRequest): Promise<CreateWorkflowSubscriptionsResponse> {
        const options = ParamCreater().createWorkflowSubscriptions(createWorkflowSubscriptionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除已订阅的消息订阅Subscription。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除消息订阅Subscription
     * @param {string} workflowId 工作流的ID。
     * @param {string} subscriptionId 工作流的消息订阅ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkflowSubscription(deleteWorkflowSubscriptionRequest?: DeleteWorkflowSubscriptionRequest): Promise<DeleteWorkflowSubscriptionResponse> {
        const options = ParamCreater().deleteWorkflowSubscription(deleteWorkflowSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Workflow工作流已订阅的订阅信息详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息订阅Subscription详情
     * @param {string} workflowId 工作流的ID。
     * @param {string} subscriptionId 工作流的消息订阅ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkflowSubscription(showWorkflowSubscriptionRequest?: ShowWorkflowSubscriptionRequest): Promise<ShowWorkflowSubscriptionResponse> {
        const options = ParamCreater().showWorkflowSubscription(showWorkflowSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新Workflow工作流已订阅的订阅信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新消息订阅Subscription
     * @param {string} subscriptionId 消息订阅ID。
     * @param {string} workflowId 工作流的ID。
     * @param {Subscription} [body] 订阅信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkflowSubscription(updateWorkflowSubscriptionRequest?: UpdateWorkflowSubscriptionRequest): Promise<UpdateWorkflowSubscriptionResponse> {
        const options = ParamCreater().updateWorkflowSubscription(updateWorkflowSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 计划事件授权接口用于为指定的计划事件分配或调整权限。该接口适用于以下场景：当创建新的计划事件、调整现有计划事件的权限设置或变更权限分配时，用户可通过此接口为指定的计划事件授予或修改权限。使用该接口的前提条件是计划事件已存在且用户具有管理员权限。授权操作完成后，计划事件的权限设置将被更新，相关变更将被记录以便审计。若计划事件不存在、用户无权限操作或授权信息格式不正确，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptScheduledEvent(acceptScheduledEventRequest?: AcceptScheduledEventRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/scheduled-events/{event_id}/accept",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let eventId;
            
            let workspaceId;
            
            let workspaceId2;

            if (acceptScheduledEventRequest !== null && acceptScheduledEventRequest !== undefined) {
                if (acceptScheduledEventRequest instanceof AcceptScheduledEventRequest) {
                    eventId = acceptScheduledEventRequest.eventId;
                    body = acceptScheduledEventRequest.body
                    workspaceId = acceptScheduledEventRequest.workspaceId;
                    workspaceId2 = acceptScheduledEventRequest.workspaceId2;
                } else {
                    eventId = acceptScheduledEventRequest['event_id'];
                    body = acceptScheduledEventRequest['body'];
                    workspaceId = acceptScheduledEventRequest['workspaceId'];
                    workspaceId2 = acceptScheduledEventRequest['workspaceId'];
                }
            }

        
            if (eventId === null || eventId === undefined) {
            throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling acceptScheduledEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspaceId'] = workspaceId;
            }
            if (workspaceId2 !== null && workspaceId2 !== undefined) {
                localVarQueryParameter['workspaceId'] = workspaceId2;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'event_id': eventId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 动态挂载Notebook存储接口支持将存储动态挂载到运行中的Notebook实例的指定文件目录。调用该接口后，系统将在Notebook实例中**异步**挂载指定的存储实例，挂载完成后用户可在容器中以文件系统方式读写存储实例中的文件。若用户无权限访问指定实例或Notebook实例未运行，接口将返回相应的错误信息。
         * 
         * 支持的存储类型：
         * - **对象存储 OBS**：适合直接使用OBS桶作为持久化存储进行AI开发和探索场景，但小文件频繁读写性能较差，**模型训练，大文件解压等场景慎用，此类场景可能会导致Notebook文件操作卡顿**。
         * - **并行文件系统 PFS**：高性能对象存储文件系统，存储成本低，吞吐量大，能够快速处理高性能计算（HPC）工作负载，**但小文件频繁读写较弱。小文件频繁读写场景可能会导致Notebook文件操作卡顿**
         * - **高性能弹性文件服务SFS Turbo**：仅支持专属资源池实例挂载，**挂载前需要在资源池网络管理界面中进行网络关联**，支持多个环境使用，可以在多个开发环境、开发环境和训练之间共享。适合探索、实验等非正式生产场景，但不适合重IO读写模型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachDynamicStorage(attachDynamicStorageRequest?: AttachDynamicStorageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/notebooks/{instance_id}/storage",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (attachDynamicStorageRequest !== null && attachDynamicStorageRequest !== undefined) {
                if (attachDynamicStorageRequest instanceof AttachDynamicStorageRequest) {
                    instanceId = attachDynamicStorageRequest.instanceId;
                    body = attachDynamicStorageRequest.body
                } else {
                    instanceId = attachDynamicStorageRequest['instance_id'];
                    body = attachDynamicStorageRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachDynamicStorage.');
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
         * 本接口用于将生成的多个apikey与指定服务进行批量绑定，用于访问特定服务。调用此接口前，确保已成功创建服务实例，并获取到有效的apikey。绑定成功后，apikey将作为服务调用时的身份验证凭证，确保仅授权用户能够访问该服务。如果尝试绑定已失效或已绑定当前服务的apikey将返回相应的异常信息，提示用户检查apikey的有效性和绑定状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchBindInferApiKeys(batchBindInferApiKeysRequest?: BatchBindInferApiKeysRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/api-keys/batch-bind",
                contentType: "application/x-www-form-urlencoded",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new URLSearchParams();
            
            let serviceId;
            let keyIds;
            

            if (batchBindInferApiKeysRequest !== null && batchBindInferApiKeysRequest !== undefined) {
                if (batchBindInferApiKeysRequest instanceof BatchBindInferApiKeysRequest) {
                    serviceId = batchBindInferApiKeysRequest.serviceId;
                    keyIds = batchBindInferApiKeysRequest.body?.keyIds;
                } else {
                    serviceId = batchBindInferApiKeysRequest['service_id'];
                    keyIds = batchBindInferApiKeysRequest['body']['keyIds'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling batchBindInferApiKeys.');
            }
            if (keyIds === null || keyIds === undefined) {
            throw new RequiredError('keyIds','Required parameter keyIds was null or undefined when calling batchBindInferApiKeys.');
            }
            if (keyIds) {
            
                localVarFormParams.set('key_ids', keyIds.join(COLLECTION_FORMATS.csv));
            }
            options.data = localVarFormParams.toString();
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量为节点绑定逻辑子池接口用于在物理专属池开启节点绑定功能时，对逻辑子池中的节点进行逻辑子池的换绑操作。该接口适用于以下场景：当需要重新分配资源、调整业务负载或优化资源使用效率时，用户可通过此接口将指定节点从当前逻辑子池迁移到另一个逻辑子池。使用该接口的前提条件是物理专属池已开启节点绑定功能，且目标逻辑子池已存在并具备足够的资源容量。绑定操作完成后，节点将从原逻辑子池解绑并绑定到目标逻辑子池，原逻辑子池的节点数减少，目标逻辑子池的节点数增加。若节点未绑定到任何逻辑子池、目标逻辑子池不存在或资源不足，或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchBindPoolNodes(batchBindPoolNodesRequest?: BatchBindPoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchBindPoolNodesRequest !== null && batchBindPoolNodesRequest !== undefined) {
                if (batchBindPoolNodesRequest instanceof BatchBindPoolNodesRequest) {
                    poolName = batchBindPoolNodesRequest.poolName;
                    body = batchBindPoolNodesRequest.body
                } else {
                    poolName = batchBindPoolNodesRequest['pool_name'];
                    body = batchBindPoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchBindPoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建资源池标签接口用于为指定资源池添加或更新多个标签信息。该接口适用于以下场景：当需要对资源池进行统一分类管理（如成本归属、环境标识）、批量配置元数据（如项目归属、负责人信息）或更新已有标签值时，管理员可通过此接口一次性操作多个标签。使用该接口的前提条件是目标资源池必须已存在且处于可管理状态，调用者需具备资源池标签管理权限，且提交的标签数据需符合格式规范（如key非空、value长度限制）。操作完成后，系统将为资源池添加新标签或覆盖同名标签的值，且不会影响资源池的其他配置属性。若资源池不存在、用户权限不足、标签格式错误或系统服务异常，接口将返回对应的错误信息（如\&quot;404 Not Found\&quot;、\&quot;403 Forbidden\&quot;、\&quot;400 Bad Request\&quot;或\&quot;503 Service Unavailable\&quot;）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreatePoolTags(batchCreatePoolTagsRequest?: BatchCreatePoolTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/pools/{pool_name}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchCreatePoolTagsRequest !== null && batchCreatePoolTagsRequest !== undefined) {
                if (batchCreatePoolTagsRequest instanceof BatchCreatePoolTagsRequest) {
                    poolName = batchCreatePoolTagsRequest.poolName;
                    body = batchCreatePoolTagsRequest.body
                } else {
                    poolName = batchCreatePoolTagsRequest['pool_name'];
                    body = batchCreatePoolTagsRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchCreatePoolTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于批量删除指定的内网接入点，适用于需要清理多个不再使用的内网接入点的场景。调用此接口前，确保已具备相应的删除权限，并提供一个有效的内网接入点ID列表。删除成功后，所指定的内网接入点将被彻底移除，不再对任何服务生效。如果提供的内网接入点ID列表中包含无效或已删除的ID，将返回相应的异常信息，提示用户检查ID的有效性。此外，如果调用时出现权限不足或其他系统异常，也将返回相应的异常信息，提示用户检查权限或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInferIntranetConnections(batchDeleteInferIntranetConnectionsRequest?: BatchDeleteInferIntranetConnectionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/intranet-connection/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteInferIntranetConnectionsRequest !== null && batchDeleteInferIntranetConnectionsRequest !== undefined) {
                if (batchDeleteInferIntranetConnectionsRequest instanceof BatchDeleteInferIntranetConnectionsRequest) {
                    body = batchDeleteInferIntranetConnectionsRequest.body
                } else {
                    body = batchDeleteInferIntranetConnectionsRequest['body'];
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
         * 删除指定服务列表功能允许用户批量删除多个服务，适用于需要清理资源、释放计算能力或管理多个服务的场景。使用此功能前，请确保您具备删除服务的权限，并提供有效的服务ID列表。成功执行后，指定的服务将被终止运行并释放相关资源。若服务ID无效、权限不足或服务状态不允许删除，将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInferServices(batchDeleteInferServicesRequest?: BatchDeleteInferServicesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteInferServicesRequest !== null && batchDeleteInferServicesRequest !== undefined) {
                if (batchDeleteInferServicesRequest instanceof BatchDeleteInferServicesRequest) {
                    body = batchDeleteInferServicesRequest.body
                } else {
                    body = batchDeleteInferServicesRequest['body'];
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
         * 批量删除节点接口用于批量删除指定资源池中的节点。该接口适用于以下场景：当需要清理资源池中的冗余节点、重新分配资源或移除故障节点时，用户可通过此接口批量删除指定的节点。使用该接口的前提条件是资源池已创建且处于可用状态，用户具有删除节点的权限，且资源池中至少保留一个节点。删除操作完成后，指定的节点将被永久移除，资源池中剩余的节点将继续提供服务。若资源池不存在、节点不存在、用户无权限操作或资源池中节点不足，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePoolNodes(batchDeletePoolNodesRequest?: BatchDeletePoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchDeletePoolNodesRequest !== null && batchDeletePoolNodesRequest !== undefined) {
                if (batchDeletePoolNodesRequest instanceof BatchDeletePoolNodesRequest) {
                    poolName = batchDeletePoolNodesRequest.poolName;
                    body = batchDeletePoolNodesRequest.body
                } else {
                    poolName = batchDeletePoolNodesRequest['pool_name'];
                    body = batchDeletePoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchDeletePoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除资源标签接口用于移除指定资源上的多个标签信息。该接口适用于以下场景：当需要清理冗余标签（如过期分类、无效元数据）、统一调整资源分类策略或因权限变更需批量移除标签时，管理员可通过此接口一次性删除多个标签。使用该接口的前提条件是目标资源必须已存在且处于可管理状态，调用者需具备资源标签管理权限，且待删除的标签必须已关联至该资源，系统标签管理服务需正常运行。操作完成后，指定标签将从资源中彻底移除，且不会影响资源的其他配置属性。若资源不存在、用户权限不足、标签未关联或系统服务异常，接口将返回对应的错误信息（如\&quot;404 Not Found\&quot;、\&quot;403 Forbidden\&quot;、\&quot;400 Bad Request\&quot;或\&quot;503 Service Unavailable\&quot;）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePoolTags(batchDeletePoolTagsRequest?: BatchDeletePoolTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/pools/{pool_name}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchDeletePoolTagsRequest !== null && batchDeletePoolTagsRequest !== undefined) {
                if (batchDeletePoolTagsRequest instanceof BatchDeletePoolTagsRequest) {
                    poolName = batchDeletePoolTagsRequest.poolName;
                    body = batchDeletePoolTagsRequest.body
                } else {
                    poolName = batchDeletePoolTagsRequest['pool_name'];
                    body = batchDeletePoolTagsRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchDeletePoolTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量对节点功能上锁接口用于批量对指定节点的功能进行上锁操作，被上锁的功能在控制台将无法正常使用。该接口适用于以下场景：当需要临时禁用某些节点的功能以防止误操作、进行系统维护或测试时，用户可通过此接口批量对节点功能进行上锁。使用该接口的前提条件是节点功能已存在且用户具有管理员权限。上锁操作完成后，指定节点的功能将在控制台被禁用，无法进行相关操作。若节点功能不存在、用户无权限操作或请求参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchLockPoolNodes(batchLockPoolNodesRequest?: BatchLockPoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-lock",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchLockPoolNodesRequest !== null && batchLockPoolNodesRequest !== undefined) {
                if (batchLockPoolNodesRequest instanceof BatchLockPoolNodesRequest) {
                    poolName = batchLockPoolNodesRequest.poolName;
                    body = batchLockPoolNodesRequest.body
                } else {
                    poolName = batchLockPoolNodesRequest['pool_name'];
                    body = batchLockPoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchLockPoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量迁移节点接口用于在资源池之间批量迁移节点，将节点从一个资源池迁移到另一个资源池。该接口适用于以下场景：当资源池的节点分布不均衡、需要进行集群维护或业务扩展时，用户可通过此接口将指定节点从一个资源池迁移到另一个资源池。使用该接口的前提条件是资源池中至少包含两个节点，且目标资源池具备足够的资源容量（如IP地址等）以接收迁移节点。若资源池只有一个节点、目标集群资源不足、节点状态不支持迁移或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchMigratePoolNodes(batchMigratePoolNodesRequest?: BatchMigratePoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-migrate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchMigratePoolNodesRequest !== null && batchMigratePoolNodesRequest !== undefined) {
                if (batchMigratePoolNodesRequest instanceof BatchMigratePoolNodesRequest) {
                    poolName = batchMigratePoolNodesRequest.poolName;
                    body = batchMigratePoolNodesRequest.body
                } else {
                    poolName = batchMigratePoolNodesRequest['pool_name'];
                    body = batchMigratePoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchMigratePoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量重启节点接口用于批量重启指定资源池中的节点。该接口适用于以下场景：当需要对资源池中的节点进行系统更新、配置变更、故障恢复或维护操作时，用户可通过此接口批量重启指定的节点。使用该接口的前提条件是资源池已创建且处于可用状态，节点属于该资源池且处于运行状态，且用户具有重启节点的权限。重启操作完成后，指定的节点将被重新启动，资源池中的其他节点将继续正常运行。若资源池不存在、节点不在资源池中、节点未处于运行状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRebootPoolNodes(batchRebootPoolNodesRequest?: BatchRebootPoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-reboot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchRebootPoolNodesRequest !== null && batchRebootPoolNodesRequest !== undefined) {
                if (batchRebootPoolNodesRequest instanceof BatchRebootPoolNodesRequest) {
                    poolName = batchRebootPoolNodesRequest.poolName;
                    body = batchRebootPoolNodesRequest.body
                } else {
                    poolName = batchRebootPoolNodesRequest['pool_name'];
                    body = batchRebootPoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchRebootPoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置节点接口用于将指定节点恢复到初始状态，清除节点上的数据和配置。该接口适用于以下场景：当节点出现故障、配置错误、需要重新部署或进行系统恢复时，用户可通过此接口重置节点，使其恢复到出厂或初始状态。使用该接口的前提条件是节点已存在且用户具有管理员权限。重置操作完成后，节点上的所有数据和配置将被清除，节点将被重新启动并恢复到初始状态。若节点不存在、用户无权限操作或节点处于不可重置状态（如正在运行任务），接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchResetPoolNodes(batchResetPoolNodesRequest?: BatchResetPoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchResetPoolNodesRequest !== null && batchResetPoolNodesRequest !== undefined) {
                if (batchResetPoolNodesRequest instanceof BatchResetPoolNodesRequest) {
                    poolName = batchResetPoolNodesRequest.poolName;
                    body = batchResetPoolNodesRequest.body
                } else {
                    poolName = batchResetPoolNodesRequest['pool_name'];
                    body = batchResetPoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchResetPoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 节点规格变更接口用于调整指定节点的规格（如步长），例如将节点从8节点超节点扩容到16节点超节点。该接口适用于以下场景：当需要根据业务需求调整节点的资源容量、优化资源利用率或进行系统升级时，用户可通过此接口变更节点的规格。使用该接口的前提条件是节点已创建且处于可变更状态，目标规格在支持范围内，且用户具有管理员权限。规格变更完成后，节点的资源容量将按新规格调整，相关服务和配置将重新加载以适应新的规格。若节点不存在、节点状态不允许变更、目标规格不支持或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchResizePoolNodes(batchResizePoolNodesRequest?: BatchResizePoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchResizePoolNodesRequest !== null && batchResizePoolNodesRequest !== undefined) {
                if (batchResizePoolNodesRequest instanceof BatchResizePoolNodesRequest) {
                    poolName = batchResizePoolNodesRequest.poolName;
                    body = batchResizePoolNodesRequest.body
                } else {
                    poolName = batchResizePoolNodesRequest['pool_name'];
                    body = batchResizePoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchResizePoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于将已绑定的apikey从指定服务中批量解绑，适用于需要撤销多个apikey对特定服务的访问权限的场景。调用此接口前，确保已获取到需要解绑的多个apikey，并确认这些apikey当前绑定在指定服务上。解绑成功后，这些apikey将不再对指定服务生效，但仍可继续用于其他服务。如果尝试解绑不存在或未绑定到指定服务的apikey，将返回相应的异常信息，提示用户检查apikey的有效性和绑定状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUnbindInferApiKeys(batchUnbindInferApiKeysRequest?: BatchUnbindInferApiKeysRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/api-keys/batch-unbind",
                contentType: "application/x-www-form-urlencoded",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new URLSearchParams();
            
            let serviceId;
            let keyIds;
            

            if (batchUnbindInferApiKeysRequest !== null && batchUnbindInferApiKeysRequest !== undefined) {
                if (batchUnbindInferApiKeysRequest instanceof BatchUnbindInferApiKeysRequest) {
                    serviceId = batchUnbindInferApiKeysRequest.serviceId;
                    keyIds = batchUnbindInferApiKeysRequest.body?.keyIds;
                } else {
                    serviceId = batchUnbindInferApiKeysRequest['service_id'];
                    keyIds = batchUnbindInferApiKeysRequest['body']['keyIds'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling batchUnbindInferApiKeys.');
            }
            if (keyIds === null || keyIds === undefined) {
            throw new RequiredError('keyIds','Required parameter keyIds was null or undefined when calling batchUnbindInferApiKeys.');
            }
            if (keyIds) {
            
                localVarFormParams.set('key_ids', keyIds.join(COLLECTION_FORMATS.csv));
            }
            options.data = localVarFormParams.toString();
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量对节点功能解锁接口用于批量解除指定节点功能的锁定状态，使被上锁的功能在控制台恢复正常可用状态。该接口适用于以下场景：当需要恢复被锁定的节点功能以正常使用、完成系统维护或测试后，用户可通过此接口批量对节点功能进行解锁。使用该接口的前提条件是节点功能已被上锁且用户具有管理员权限。解锁操作完成后，指定节点的功能将在控制台恢复正常，用户可以正常使用相关功能。若节点功能未被锁定、用户无权限操作或请求参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUnlockPoolNodes(batchUnlockPoolNodesRequest?: BatchUnlockPoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-unlock",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchUnlockPoolNodesRequest !== null && batchUnlockPoolNodesRequest !== undefined) {
                if (batchUnlockPoolNodesRequest instanceof BatchUnlockPoolNodesRequest) {
                    poolName = batchUnlockPoolNodesRequest.poolName;
                    body = batchUnlockPoolNodesRequest.body
                } else {
                    poolName = batchUnlockPoolNodesRequest['pool_name'];
                    body = batchUnlockPoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchUnlockPoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量更新节点接口用于同时修改多个节点的配置或属性，支持批量操作时各节点独立执行更新流程。该接口适用于以下场景：当用户需统一升级节点软件版本、批量处理选中节点的资源标签、调整资源分配策略、应用安全补丁或同步配置变更时，可通过此接口批量更新目标节点，确保每个节点的更新过程互不影响。使用该接口的前提条件包括：目标节点已存在且用户具备管理员权限，节点需处于可操作状态（如非锁定或维护中），批量操作时需提供有效的节点列表及更新参数（如配置项、版本号等）作为输入。操作完成后，指定节点将应用新配置并更新状态为可用，原有配置将被覆盖。若节点不存在、用户权限不足、节点状态异常（如正在维护）、更新参数不合规或输入参数缺失，接口将返回对应错误信息（如404未找到节点、403权限拒绝、400参数校验失败等）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdatePoolNodes(batchUpdatePoolNodesRequest?: BatchUpdatePoolNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (batchUpdatePoolNodesRequest !== null && batchUpdatePoolNodesRequest !== undefined) {
                if (batchUpdatePoolNodesRequest instanceof BatchUpdatePoolNodesRequest) {
                    poolName = batchUpdatePoolNodesRequest.poolName;
                    body = batchUpdatePoolNodesRequest.body
                } else {
                    poolName = batchUpdatePoolNodesRequest['pool_name'];
                    body = batchUpdatePoolNodesRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling batchUpdatePoolNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于将生成的apikey与指定服务进行绑定，适用于应用程序需要调用特定服务的场景。调用此接口前，确保已成功创建服务实例，并获取到有效的apikey。绑定成功后，apikey将作为服务调用时的身份验证凭证，确保仅授权用户能够访问该服务。如果尝试绑定已失效的apikey，将返回相应的异常信息，提示用户检查apikey的有效性和绑定状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        bindInferApiKey(bindInferApiKeyRequest?: BindInferApiKeyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/api-keys/{key_id}/bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let keyId;

            if (bindInferApiKeyRequest !== null && bindInferApiKeyRequest !== undefined) {
                if (bindInferApiKeyRequest instanceof BindInferApiKeyRequest) {
                    serviceId = bindInferApiKeyRequest.serviceId;
                    keyId = bindInferApiKeyRequest.keyId;
                } else {
                    serviceId = bindInferApiKeyRequest['service_id'];
                    keyId = bindInferApiKeyRequest['key_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling bindInferApiKey.');
            }
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling bindInferApiKey.');
            }

            options.pathParams = { 'service_id': serviceId,'key_id': keyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 中断服务部署接口用于中断处于“升级中”或“部署中”状态的部署，使其快速停止。该接口适用于以下场景：当部署出现严重故障需要立即修复、资源需要快速释放以部署更高优先级的部署，或在测试环境中需要快速迭代时，用户可通过此接口中断指定部署。使用该接口的前提条件是部署当前状态为“升级中”或“部署中”，且用户具有中断部署的权限。若部署为“部署中”状态，执行中断操作，部署状态将变成“停止”，相关资源将被释放，且终端操作将被记录；若部署为“升级中”状态，执行中断操作，部署状态将变成“运行中”。若部署当前状态不是“升级中”或“部署中”，若用户无权限操作，接口将返回相应的错误信息。若部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelInferDeployment(cancelInferDeploymentRequest?: CancelInferDeploymentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/interrupt",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (cancelInferDeploymentRequest !== null && cancelInferDeploymentRequest !== undefined) {
                if (cancelInferDeploymentRequest instanceof CancelInferDeploymentRequest) {
                    serviceId = cancelInferDeploymentRequest.serviceId;
                    deploymentId = cancelInferDeploymentRequest.deploymentId;
                } else {
                    serviceId = cancelInferDeploymentRequest['service_id'];
                    deploymentId = cancelInferDeploymentRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling cancelInferDeployment.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling cancelInferDeployment.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新算法。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeAlgorithm(changeAlgorithmRequest?: ChangeAlgorithmRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/algorithms/{algorithm_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let algorithmId;

            if (changeAlgorithmRequest !== null && changeAlgorithmRequest !== undefined) {
                if (changeAlgorithmRequest instanceof ChangeAlgorithmRequest) {
                    algorithmId = changeAlgorithmRequest.algorithmId;
                    body = changeAlgorithmRequest.body
                } else {
                    algorithmId = changeAlgorithmRequest['algorithm_id'];
                    body = changeAlgorithmRequest['body'];
                }
            }

        
            if (algorithmId === null || algorithmId === undefined) {
            throw new RequiredError('algorithmId','Required parameter algorithmId was null or undefined when calling changeAlgorithm.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'algorithm_id': algorithmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过实验ID更新训练实验信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeTrainingExperiment(changeTrainingExperimentRequest?: ChangeTrainingExperimentRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/training-experiments/{experiment_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let experimentId;

            if (changeTrainingExperimentRequest !== null && changeTrainingExperimentRequest !== undefined) {
                if (changeTrainingExperimentRequest instanceof ChangeTrainingExperimentRequest) {
                    experimentId = changeTrainingExperimentRequest.experimentId;
                    body = changeTrainingExperimentRequest.body
                } else {
                    experimentId = changeTrainingExperimentRequest['experiment_id'];
                    body = changeTrainingExperimentRequest['body'];
                }
            }

        
            if (experimentId === null || experimentId === undefined) {
            throw new RequiredError('experimentId','Required parameter experimentId was null or undefined when calling changeTrainingExperiment.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'experiment_id': experimentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新训练作业描述。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeTrainingJobDescription(changeTrainingJobDescriptionRequest?: ChangeTrainingJobDescriptionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/training-jobs/{training_job_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trainingJobId;

            if (changeTrainingJobDescriptionRequest !== null && changeTrainingJobDescriptionRequest !== undefined) {
                if (changeTrainingJobDescriptionRequest instanceof ChangeTrainingJobDescriptionRequest) {
                    trainingJobId = changeTrainingJobDescriptionRequest.trainingJobId;
                    body = changeTrainingJobDescriptionRequest.body
                } else {
                    trainingJobId = changeTrainingJobDescriptionRequest['training_job_id'];
                    body = changeTrainingJobDescriptionRequest['body'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling changeTrainingJobDescription.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验训练实验名称接口用于新增训练实验前校验训练实验名称是否重复。
         * 该接口适用于以下场景：当用户需要创建新的训练实验时，可以通过此接口校验定义的实验名称是否已存在。使用该接口的前提条件是用户具有创建实验的权限。查询操作完成后，将返回实验名称是否重复的结果。若用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkTrainingExperiment(checkTrainingExperimentRequest?: CheckTrainingExperimentRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-experiment-names",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let experimentName;
            
            let workspaceId;

            if (checkTrainingExperimentRequest !== null && checkTrainingExperimentRequest !== undefined) {
                if (checkTrainingExperimentRequest instanceof CheckTrainingExperimentRequest) {
                    experimentName = checkTrainingExperimentRequest.experimentName;
                    workspaceId = checkTrainingExperimentRequest.workspaceId;
                } else {
                    experimentName = checkTrainingExperimentRequest['experiment_name'];
                    workspaceId = checkTrainingExperimentRequest['workspace_id'];
                }
            }

        
            if (experimentName === null || experimentName === undefined) {
                throw new RequiredError('experimentName','Required parameter experimentName was null or undefined when calling checkTrainingExperiment.');
            }
            if (experimentName !== null && experimentName !== undefined) {
                localVarQueryParameter['experiment_name'] = experimentName;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要统计和获取符合特定标签或资源名称条件的资源数量的场景，例如在资源管理和监控中，用户可以通过指定标签或资源名称进行精确或模糊查询来统计资源数量。通过调用此接口，用户可以基于多个标签或资源名称进行查询，若不传标签则返回所有资源的总数。用户必须具有足够的权限，且目标资源需存在。查询成功后，返回符合条件的资源总数；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countInferServicesByTags(countInferServicesByTagsRequest?: CountInferServicesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/modelarts-service-v2/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let workspaceId;

            if (countInferServicesByTagsRequest !== null && countInferServicesByTagsRequest !== undefined) {
                if (countInferServicesByTagsRequest instanceof CountInferServicesByTagsRequest) {
                    body = countInferServicesByTagsRequest.body
                    workspaceId = countInferServicesByTagsRequest.workspaceId;
                } else {
                    body = countInferServicesByTagsRequest['body'];
                    workspaceId = countInferServicesByTagsRequest['workspace_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个算法。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlgorithm(createAlgorithmRequest?: CreateAlgorithmRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/algorithms",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAlgorithmRequest !== null && createAlgorithmRequest !== undefined) {
                if (createAlgorithmRequest instanceof CreateAlgorithmRequest) {
                    body = createAlgorithmRequest.body
                } else {
                    body = createAlgorithmRequest['body'];
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
         * 创建发布算法资产接口用于在算法管理中创建并发布新的算法资产。
         * 该接口适用于以下场景：当用户开发完成新的算法并希望将其发布为可复用的算法资产时，可以通过此接口创建并发布算法资产。使用该接口的前提条件是用户已登录且具有创建和发布算法资产的权限。创建发布操作完成后，系统将生成新的算法资产，并将其添加到算法资产列表中，用户可以通过算法ID进行管理和调用。若用户无权限操作、算法资产信息不完整或已存在相同名称的算法资产，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlgorithmVersionToGallery(createAlgorithmVersionToGalleryRequest?: CreateAlgorithmVersionToGalleryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/gallery-algorithm-publication",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAlgorithmVersionToGalleryRequest !== null && createAlgorithmVersionToGalleryRequest !== undefined) {
                if (createAlgorithmVersionToGalleryRequest instanceof CreateAlgorithmVersionToGalleryRequest) {
                    body = createAlgorithmVersionToGalleryRequest.body
                } else {
                    body = createAlgorithmVersionToGalleryRequest['body'];
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
         * 配置授权接口用于配置ModelArts的授权。该接口适用于以下场景：当需要为IAM子用户设置访问ModelArts的权限时，管理员可通过此接口配置授权。使用该接口的前提条件是管理员具备IAM系统的Security Administrator权限，并且需要为子用户设置访问密钥。配置完成后，子用户将被授予访问ModelArts资源的权限，从而能够正常使用训练管理、开发环境、数据管理、在线服务等功能。若管理员无权限操作或子用户不存在，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuthorization(createAuthorizationRequest?: CreateAuthorizationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/authorizations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAuthorizationRequest !== null && createAuthorizationRequest !== undefined) {
                if (createAuthorizationRequest instanceof CreateAuthorizationRequest) {
                    body = createAuthorizationRequest.body
                } else {
                    body = createAuthorizationRequest['body'];
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
         * 本接口用于在系统中创建一个新的API_KEY，适用于需要为用户或应用程序生成访问凭证的场景。调用此接口前，确保已具备相应的创建权限，并提供必要的参数，如用户ID或应用程序ID。创建成功后，系统将生成一个唯一的API_KEY，并返回该API_KEY的详细信息，包括API_KEY值、创建时间等。如果提供的参数无效或系统中已存在相同的API_KEY，将返回相应的异常信息，提示用户检查输入数据的有效性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInferApiKey(createInferApiKeyRequest?: CreateInferApiKeyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/api-keys",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInferApiKeyRequest !== null && createInferApiKeyRequest !== undefined) {
                if (createInferApiKeyRequest instanceof CreateInferApiKeyRequest) {
                    body = createInferApiKeyRequest.body
                } else {
                    body = createInferApiKeyRequest['body'];
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
         * 将模型部署为在线服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInferDeployment(createInferDeploymentRequest?: CreateInferDeploymentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/deployments",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (createInferDeploymentRequest !== null && createInferDeploymentRequest !== undefined) {
                if (createInferDeploymentRequest instanceof CreateInferDeploymentRequest) {
                    serviceId = createInferDeploymentRequest.serviceId;
                    body = createInferDeploymentRequest.body
                } else {
                    serviceId = createInferDeploymentRequest['service_id'];
                    body = createInferDeploymentRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling createInferDeployment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在指定Region中创建内网接入点，适用于需要为应用程序或服务配置内网连接的场景。调用此接口前，确保已具备相应的创建权限，并提供必要的参数，如Region ID、内网接入点名称和网络配置信息。创建成功后，系统将生成一个内网接入点，并返回该接入点的详细信息，包括接入点ID、创建时间、状态等。如果提供的参数无效或内网接入配置冲突，将返回相应的异常信息，提示用户检查输入数据的有效性和配置冲突情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInferIntranetConnection(createInferIntranetConnectionRequest?: CreateInferIntranetConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/intranet-connection",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInferIntranetConnectionRequest !== null && createInferIntranetConnectionRequest !== undefined) {
                if (createInferIntranetConnectionRequest instanceof CreateInferIntranetConnectionRequest) {
                    body = createInferIntranetConnectionRequest.body
                } else {
                    body = createInferIntranetConnectionRequest['body'];
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
         * 将模型部署为在线服务，适用于用户在开发或运维过程中需要将训练好的模型部署为在线服务，以便通过API或HTTP接口提供预测或处理能力的场景。调用此接口前，用户必须具有创建服务的权限，并提供合法的模型镜像路径和完整的服务配置信息（如服务名称、模型镜像路径、资源配置、升级配置等）。调用成功后，系统将成功创建并部署服务，服务状态变为“部署中”，并生成服务的唯一ID返回给用户。服务的详细信息（如状态、创建时间、更新时间等）也会记录在系统中。如果用户没有创建服务的权限，或提供的模型镜像路径不合法，或服务配置信息不完整，调用将返回相应的错误信息。如果系统在部署过程中遇到资源不足或其他内部错误，也将返回错误信息并记录日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInferService(createInferServiceRequest?: CreateInferServiceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xAuthTokenProvider;

            if (createInferServiceRequest !== null && createInferServiceRequest !== undefined) {
                if (createInferServiceRequest instanceof CreateInferServiceRequest) {
                    body = createInferServiceRequest.body
                    xAuthTokenProvider = createInferServiceRequest.xAuthTokenProvider;
                } else {
                    body = createInferServiceRequest['body'];
                    xAuthTokenProvider = createInferServiceRequest['X-Auth-Token-Provider'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xAuthTokenProvider !== undefined && xAuthTokenProvider !== null) {
                localVarHeaderParameter['X-Auth-Token-Provider'] = String(xAuthTokenProvider);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要为资源（如模型、数据集、服务等）添加元数据标签的场景，例如在资源管理或分类中，用户可以通过添加标签来标注资源的用途、状态或其他属性。通过调用此接口，用户可以批量添加标签，如果标签key已存在，则更新其value。用户必须具有足够的权限，且目标资源需存在。添加成功后，资源将包含新的标签信息；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInferServiceTag(createInferServiceTagRequest?: CreateInferServiceTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/modelarts-service-v2/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let workspaceId;

            if (createInferServiceTagRequest !== null && createInferServiceTagRequest !== undefined) {
                if (createInferServiceTagRequest instanceof CreateInferServiceTagRequest) {
                    resourceId = createInferServiceTagRequest.resourceId;
                    workspaceId = createInferServiceTagRequest.workspaceId;
                } else {
                    resourceId = createInferServiceTagRequest['resource_id'];
                    workspaceId = createInferServiceTagRequest['workspace_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createInferServiceTag.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建ModelArts委托接口用于创建包含OBS、SWR、IEF等依赖服务的ModelArts委托。该接口适用于以下场景：当需要配置ModelArts访问OBS、SWR、IEF等服务的权限时，用户可通过此接口创建委托。使用该接口的前提条件是用户具备创建委托的权限，并且需要在IAM系统中具备相应的权限。创建完成后，ModelArts将被授权访问OBS、SWR、IEF等服务，从而能够正常执行数据存储、镜像拉取、模型部署等功能。若用户无权限创建委托或依赖服务未配置，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createModelArtsAgency(createModelArtsAgencyRequest?: CreateModelArtsAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/agency",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createModelArtsAgencyRequest !== null && createModelArtsAgencyRequest !== undefined) {
                if (createModelArtsAgencyRequest instanceof CreateModelArtsAgencyRequest) {
                    body = createModelArtsAgencyRequest.body
                } else {
                    body = createModelArtsAgencyRequest['body'];
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
         * 创建网络资源接口用于在系统中创建新的网络资源。该接口适用于以下场景：当需要为业务扩展、资源规划或网络架构调整时，用户可通过此接口创建新的网络资源，如虚拟网络、子网或路由等。使用该接口的前提条件是用户具有管理员权限，并且系统中具备足够的资源支持新网络资源的创建。创建操作完成后，新的网络资源将被成功添加到系统中，并可用于后续的业务配置。若用户无权限、资源不足或输入参数有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNetwork(createNetworkRequest?: CreateNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNetworkRequest !== null && createNetworkRequest !== undefined) {
                if (createNetworkRequest instanceof CreateNetworkRequest) {
                    body = createNetworkRequest.body
                } else {
                    body = createNetworkRequest['body'];
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
         * 创建节点池接口用于创建新的节点池。该接口适用于以下场景：当需要扩展计算资源、优化资源分配或部署新的服务时，用户可通过此接口创建指定配置的节点池。使用该接口的前提条件是用户具有管理员权限且节点池的配置参数（如节点数量、规格、网络配置等）已正确设置。创建操作完成后，节点池将被成功创建并处于可用状态，相关节点信息将被记录。若用户无权限操作、配置参数错误或系统资源不足，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNodePool(createNodePoolRequest?: CreateNodePoolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/nodepools",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (createNodePoolRequest !== null && createNodePoolRequest !== undefined) {
                if (createNodePoolRequest instanceof CreateNodePoolRequest) {
                    poolName = createNodePoolRequest.poolName;
                    body = createNodePoolRequest.body
                } else {
                    poolName = createNodePoolRequest['pool_name'];
                    body = createNodePoolRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling createNodePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建资源池订单ID接口用于生成资源池申请的订单标识。该接口适用于以下场景：当用户需要申请新资源池时（如业务扩展、资源不足或临时资源需求），可通过此接口提交按需转包周期订单的创建请求。使用该接口的前提条件是用户需具备资源申请权限，提交的资源池配置参数（如资源类型、容量、周期等）需符合系统校验规则，且当前仅支持按需转包周期订单类型。订单创建成功后，系统将生成唯一订单ID并触发后续资源分配流程，同时记录操作日志。若用户权限不足、配置参数缺失/冲突（如容量超出配额）、订单类型不支持或系统资源不足，接口将返回对应错误码及提示信息，且不会生成订单ID或占用资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrderId(createOrderIdRequest?: CreateOrderIdRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{name}/orderid",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let name;
            
            let actionType;
            
            let workspaceId;

            if (createOrderIdRequest !== null && createOrderIdRequest !== undefined) {
                if (createOrderIdRequest instanceof CreateOrderIdRequest) {
                    name = createOrderIdRequest.name;
                    actionType = createOrderIdRequest.actionType;
                    workspaceId = createOrderIdRequest.workspaceId;
                    body = createOrderIdRequest.body
                } else {
                    name = createOrderIdRequest['name'];
                    actionType = createOrderIdRequest['actionType'];
                    workspaceId = createOrderIdRequest['workspaceId'];
                    body = createOrderIdRequest['body'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling createOrderId.');
            }
            if (actionType !== null && actionType !== undefined) {
                localVarQueryParameter['actionType'] = actionType;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspaceId'] = workspaceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建资源池接口用于在系统中创建新的资源池。该接口适用于以下场景：当需要为新业务分配资源、优化资源管理或进行资源隔离时，用户可通过此接口创建新的资源池，用于管理计算、存储、网络等资源。使用该接口的前提条件是用户具有管理员权限，并且系统中具备足够的资源支持新资源池的创建。创建操作完成后，新的资源池将被成功添加到系统中，并处于可用状态，可支持后续的资源分配和管理。若用户无权限、系统资源不足或输入参数有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPool(createPoolRequest?: CreatePoolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xModelArtsUserID;

            if (createPoolRequest !== null && createPoolRequest !== undefined) {
                if (createPoolRequest instanceof CreatePoolRequest) {
                    body = createPoolRequest.body
                    xModelArtsUserID = createPoolRequest.xModelArtsUserID;
                } else {
                    body = createPoolRequest['body'];
                    xModelArtsUserID = createPoolRequest['X-ModelArts-User-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xModelArtsUserID !== undefined && xModelArtsUserID !== null) {
                localVarHeaderParameter['X-ModelArts-User-ID'] = String(xModelArtsUserID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建插件实例接口用于在系统中创建一个新的插件实例。该接口适用于以下场景：当需要扩展系统功能、部署新的插件、更新现有插件配置或测试插件时，用户可通过此接口创建指定插件的实例。使用该接口的前提条件是插件已存在且用户具有管理员权限或插件管理权限。创建操作完成后，插件实例将被成功创建并处于可用状态，相关配置信息将被记录。若插件不存在、用户无权限操作、配置参数错误或系统资源不足，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPoolPlugin(createPoolPluginRequest?: CreatePoolPluginRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/pools/{pool_name}/plugins",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;

            if (createPoolPluginRequest !== null && createPoolPluginRequest !== undefined) {
                if (createPoolPluginRequest instanceof CreatePoolPluginRequest) {
                    poolName = createPoolPluginRequest.poolName;
                    body = createPoolPluginRequest.body
                } else {
                    poolName = createPoolPluginRequest['pool_name'];
                    body = createPoolPluginRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling createPoolPlugin.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建训练作业镜像保存任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSaveImageJob(createSaveImageJobRequest?: CreateSaveImageJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/tasks/{task_id}/save-image-job",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trainingJobId;
            
            let taskId;

            if (createSaveImageJobRequest !== null && createSaveImageJobRequest !== undefined) {
                if (createSaveImageJobRequest instanceof CreateSaveImageJobRequest) {
                    trainingJobId = createSaveImageJobRequest.trainingJobId;
                    taskId = createSaveImageJobRequest.taskId;
                    body = createSaveImageJobRequest.body
                } else {
                    trainingJobId = createSaveImageJobRequest['training_job_id'];
                    taskId = createSaveImageJobRequest['task_id'];
                    body = createSaveImageJobRequest['body'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling createSaveImageJob.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling createSaveImageJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'training_job_id': trainingJobId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建训练作业标签，支持批量添加，当添加的标签key已存在，则覆盖该标签的value。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrainJobTags(createTrainJobTagsRequest?: CreateTrainJobTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/modelarts-training-job/{training_job_id}/tags/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trainingJobId;

            if (createTrainJobTagsRequest !== null && createTrainJobTagsRequest !== undefined) {
                if (createTrainJobTagsRequest instanceof CreateTrainJobTagsRequest) {
                    trainingJobId = createTrainJobTagsRequest.trainingJobId;
                    body = createTrainJobTagsRequest.body
                } else {
                    trainingJobId = createTrainJobTagsRequest['training_job_id'];
                    body = createTrainJobTagsRequest['body'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling createTrainJobTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建训练实验接口用于在ModelArts平台上创建新的实验分类。
         * 该接口适用于以下场景：当用户需要将训练作业放入实验中分类，有序地进行管理，可以通过此接口创建训练实验，常用于多任务的版本管理等场景。使用该接口的前提条件是用户已登录ModelArts平台并具有创建训练实验的权限。创建操作完成后，系统将返回训练实验的详细信息，包括实验ID、当前实验下的训练作业总个数等。若用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrainingExperiment(createTrainingExperimentRequest?: CreateTrainingExperimentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/training-experiments",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTrainingExperimentRequest !== null && createTrainingExperimentRequest !== undefined) {
                if (createTrainingExperimentRequest instanceof CreateTrainingExperimentRequest) {
                    body = createTrainingExperimentRequest.body
                } else {
                    body = createTrainingExperimentRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建训练作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrainingJob(createTrainingJobRequest?: CreateTrainingJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/training-jobs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTrainingJobRequest !== null && createTrainingJobRequest !== undefined) {
                if (createTrainingJobRequest instanceof CreateTrainingJobRequest) {
                    body = createTrainingJobRequest.body
                } else {
                    body = createTrainingJobRequest['body'];
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
         * 创建工作空间（\&quot;default\&quot;为系统预留的默认工作空间名称，不能使用）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkspace(createWorkspaceRequest?: CreateWorkspaceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWorkspaceRequest !== null && createWorkspaceRequest !== undefined) {
                if (createWorkspaceRequest instanceof CreateWorkspaceRequest) {
                    body = createWorkspaceRequest.body
                } else {
                    body = createWorkspaceRequest['body'];
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
         * 删除算法。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlgorithm(deleteAlgorithmRequest?: DeleteAlgorithmRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/algorithms/{algorithm_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let algorithmId;

            if (deleteAlgorithmRequest !== null && deleteAlgorithmRequest !== undefined) {
                if (deleteAlgorithmRequest instanceof DeleteAlgorithmRequest) {
                    algorithmId = deleteAlgorithmRequest.algorithmId;
                } else {
                    algorithmId = deleteAlgorithmRequest['algorithm_id'];
                }
            }

        
            if (algorithmId === null || algorithmId === undefined) {
            throw new RequiredError('algorithmId','Required parameter algorithmId was null or undefined when calling deleteAlgorithm.');
            }

            options.pathParams = { 'algorithm_id': algorithmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除授权接口用于删除指定用户的授权或删除全量用户的授权。该接口适用于以下场景：当需要撤销特定用户的访问权限或在系统维护时清理所有用户的授权时，管理员可通过此接口删除指定用户的授权或全量用户的授权。使用该接口的前提条件是管理员具备删除授权的权限，并且需要指定要删除授权的用户或选择删除全量用户的授权。删除操作完成后，指定用户的授权将被移除，或所有用户的授权将被清空，用户将无法再访问相关功能。若用户不存在、管理员无权限操作或删除全量授权时系统检测到无管理员权限，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuthorizations(deleteAuthorizationsRequest?: DeleteAuthorizationsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/authorizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;

            if (deleteAuthorizationsRequest !== null && deleteAuthorizationsRequest !== undefined) {
                if (deleteAuthorizationsRequest instanceof DeleteAuthorizationsRequest) {
                    userId = deleteAuthorizationsRequest.userId;
                } else {
                    userId = deleteAuthorizationsRequest['user_id'];
                }
            }

        
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像接口用于删除镜像对象，对于个人私有镜像可以通过参数一并删除SWR镜像内容。该接口适用于以下场景：当镜像不再需要、配置错误或需要清理资源时，用户可通过此接口删除指定的镜像对象。使用该接口的前提条件是镜像已存在且用户具有删除权限。删除操作完成后，镜像对象将被永久移除，相关资源和配置也将被清理。若镜像不存在、用户无权限操作或镜像正在被使用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteImage(deleteImageRequest?: DeleteImageRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/images/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (deleteImageRequest !== null && deleteImageRequest !== undefined) {
                if (deleteImageRequest instanceof DeleteImageRequest) {
                    id = deleteImageRequest.id;
                    body = deleteImageRequest.body
                } else {
                    id = deleteImageRequest['id'];
                    body = deleteImageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteImage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像组接口用于删除镜像组内所有的版本对象，对于个人私有镜像可以通过参数一并删除SWR镜像内容。该接口适用于以下场景：当镜像不再需要、配置错误或需要清理资源时，用户可通过此接口删除指定的镜像组对象内所有版本。使用该接口的前提条件是镜像组已存在且用户具有删除权限。删除操作完成后，镜像组内所有版本对象将被永久移除，相关资源和配置也将被清理。若镜像组不存在、用户无权限操作或镜像正在被使用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteImageGroup(deleteImageGroupRequest?: DeleteImageGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/images/group/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (deleteImageGroupRequest !== null && deleteImageGroupRequest !== undefined) {
                if (deleteImageGroupRequest instanceof DeleteImageGroupRequest) {
                    id = deleteImageGroupRequest.id;
                    body = deleteImageGroupRequest.body
                } else {
                    id = deleteImageGroupRequest['id'];
                    body = deleteImageGroupRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteImageGroup.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于删除指定的apikey，适用于管理员需要撤销对某个应用程序或用户的访问权限的场景。调用此接口前，确保已获取到需要删除的apikey，并确认apikey未在其他服务中使用。删除成功后，该apikey将无法再用于访问任何相关服务。如果尝试删除不存在或已删除的apikey，将返回相应的异常信息，提示用户检查apikey的有效性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInferApiKey(deleteInferApiKeyRequest?: DeleteInferApiKeyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/services/api-keys/{key_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keyId;

            if (deleteInferApiKeyRequest !== null && deleteInferApiKeyRequest !== undefined) {
                if (deleteInferApiKeyRequest instanceof DeleteInferApiKeyRequest) {
                    keyId = deleteInferApiKeyRequest.keyId;
                } else {
                    keyId = deleteInferApiKeyRequest['key_id'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling deleteInferApiKey.');
            }

            options.pathParams = { 'key_id': keyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于删除服务的某个部署。若服务ID、部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInferDeployment(deleteInferDeploymentRequest?: DeleteInferDeploymentRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (deleteInferDeploymentRequest !== null && deleteInferDeploymentRequest !== undefined) {
                if (deleteInferDeploymentRequest instanceof DeleteInferDeploymentRequest) {
                    serviceId = deleteInferDeploymentRequest.serviceId;
                    deploymentId = deleteInferDeploymentRequest.deploymentId;
                } else {
                    serviceId = deleteInferDeploymentRequest['service_id'];
                    deploymentId = deleteInferDeploymentRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling deleteInferDeployment.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling deleteInferDeployment.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于删除指定的单个部署的实例，适用于需要清理或释放不再使用的部署实例资源的场景。调用此接口前，确保已具备相应的删除权限，并提供有效的服务实例ID、部署ID。删除成功后，指定的服务部署实例将被彻底移除，不再对任何请求生效。如果提供的服务实例ID、部署ID无效、服务实例已删除或权限不足，将返回相应的异常信息，提示用户检查输入数据的有效性和权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInferDeploymentInstance(deleteInferDeploymentInstanceRequest?: DeleteInferDeploymentInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/services/{id}/deployments/{deployment_name}/instances/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let deploymentName;
            
            let name;
            
            let force;
            
            let operation;

            if (deleteInferDeploymentInstanceRequest !== null && deleteInferDeploymentInstanceRequest !== undefined) {
                if (deleteInferDeploymentInstanceRequest instanceof DeleteInferDeploymentInstanceRequest) {
                    id = deleteInferDeploymentInstanceRequest.id;
                    deploymentName = deleteInferDeploymentInstanceRequest.deploymentName;
                    name = deleteInferDeploymentInstanceRequest.name;
                    force = deleteInferDeploymentInstanceRequest.force;
                    operation = deleteInferDeploymentInstanceRequest.operation;
                } else {
                    id = deleteInferDeploymentInstanceRequest['id'];
                    deploymentName = deleteInferDeploymentInstanceRequest['deployment_name'];
                    name = deleteInferDeploymentInstanceRequest['name'];
                    force = deleteInferDeploymentInstanceRequest['force'];
                    operation = deleteInferDeploymentInstanceRequest['operation'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteInferDeploymentInstance.');
            }
            if (deploymentName === null || deploymentName === undefined) {
            throw new RequiredError('deploymentName','Required parameter deploymentName was null or undefined when calling deleteInferDeploymentInstance.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteInferDeploymentInstance.');
            }
            if (force !== null && force !== undefined) {
                localVarQueryParameter['force'] = force;
            }
            if (operation !== null && operation !== undefined) {
                localVarQueryParameter['operation'] = operation;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id,'deployment_name': deploymentName,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于删除指定的单个Pod，适用于需要清理或释放不再使用的Pod资源的场景。调用此接口前，确保已具备相应的删除权限，并提供有效的Pod ID。删除成功后，指定的Pod将被彻底移除，不再对任何服务请求生效。如果提供的Pod ID无效、Pod已删除或权限不足，将返回相应的异常信息，提示用户检查输入数据的有效性和权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInferDeploymentPod(deleteInferDeploymentPodRequest?: DeleteInferDeploymentPodRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/services/{id}/deployments/{deployment_name}/instances/{instance_name}/pods/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let deploymentName;
            
            let instanceName;
            
            let name;
            
            let force;

            if (deleteInferDeploymentPodRequest !== null && deleteInferDeploymentPodRequest !== undefined) {
                if (deleteInferDeploymentPodRequest instanceof DeleteInferDeploymentPodRequest) {
                    id = deleteInferDeploymentPodRequest.id;
                    deploymentName = deleteInferDeploymentPodRequest.deploymentName;
                    instanceName = deleteInferDeploymentPodRequest.instanceName;
                    name = deleteInferDeploymentPodRequest.name;
                    force = deleteInferDeploymentPodRequest.force;
                } else {
                    id = deleteInferDeploymentPodRequest['id'];
                    deploymentName = deleteInferDeploymentPodRequest['deployment_name'];
                    instanceName = deleteInferDeploymentPodRequest['instance_name'];
                    name = deleteInferDeploymentPodRequest['name'];
                    force = deleteInferDeploymentPodRequest['force'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteInferDeploymentPod.');
            }
            if (deploymentName === null || deploymentName === undefined) {
            throw new RequiredError('deploymentName','Required parameter deploymentName was null or undefined when calling deleteInferDeploymentPod.');
            }
            if (instanceName === null || instanceName === undefined) {
            throw new RequiredError('instanceName','Required parameter instanceName was null or undefined when calling deleteInferDeploymentPod.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteInferDeploymentPod.');
            }
            if (force !== null && force !== undefined) {
                localVarQueryParameter['force'] = force;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id,'deployment_name': deploymentName,'instance_name': instanceName,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于删除指定服务部署的某个在线版本，适用于需要清理不再使用的版本或优化资源管理的场景。
         * 请求需包含有效的服务ID、部署ID及版本号。用户必须具有对目标服务部署的管理权限，并且该版本当前未处于活跃状态。
         * 删除成功后，指定版本将从在线服务部署中移除，相关资源将被释放。
         * 若服务ID、部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；若版本处于活跃状态或有其他依赖，则返回400 Bad Request。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInferDeploymentVersion(deleteInferDeploymentVersionRequest?: DeleteInferDeploymentVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/versions/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let version;
            
            let deploymentId;

            if (deleteInferDeploymentVersionRequest !== null && deleteInferDeploymentVersionRequest !== undefined) {
                if (deleteInferDeploymentVersionRequest instanceof DeleteInferDeploymentVersionRequest) {
                    serviceId = deleteInferDeploymentVersionRequest.serviceId;
                    version = deleteInferDeploymentVersionRequest.version;
                    deploymentId = deleteInferDeploymentVersionRequest.deploymentId;
                } else {
                    serviceId = deleteInferDeploymentVersionRequest['service_id'];
                    version = deleteInferDeploymentVersionRequest['version'];
                    deploymentId = deleteInferDeploymentVersionRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling deleteInferDeploymentVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling deleteInferDeploymentVersion.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling deleteInferDeploymentVersion.');
            }

            options.pathParams = { 'service_id': serviceId,'version': version,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要从资源（如模型、数据集、服务等）中移除特定标签的场景，例如在资源管理或分类中，用户可以通过删除标签来调整或清理资源的元数据。通过调用此接口，用户可以批量删除指定的标签。用户必须具有足够的权限，且目标资源需存在。删除成功后，资源将不再包含指定的标签信息；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInferServiceTag(deleteInferServiceTagRequest?: DeleteInferServiceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/modelarts-service-v2/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceId;
            
            let workspaceId;

            if (deleteInferServiceTagRequest !== null && deleteInferServiceTagRequest !== undefined) {
                if (deleteInferServiceTagRequest instanceof DeleteInferServiceTagRequest) {
                    resourceId = deleteInferServiceTagRequest.resourceId;
                    body = deleteInferServiceTagRequest.body
                    workspaceId = deleteInferServiceTagRequest.workspaceId;
                } else {
                    resourceId = deleteInferServiceTagRequest['resource_id'];
                    body = deleteInferServiceTagRequest['body'];
                    workspaceId = deleteInferServiceTagRequest['workspace_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteInferServiceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除网络资源接口用于移除指定的网络资源。该接口适用于以下场景：当网络资源不再需要、配置错误或需要清理资源时，用户可通过此接口删除指定的网络资源。使用该接口的前提条件是网络资源已存在且用户具有管理员权限。删除操作完成后，指定的网络资源将被永久移除，相关配置和关联关系也将被清理。若指定的网络资源不存在、用户无权限操作或资源被其他资源依赖，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNetwork(deleteNetworkRequest?: DeleteNetworkRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/networks/{network_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let networkName;

            if (deleteNetworkRequest !== null && deleteNetworkRequest !== undefined) {
                if (deleteNetworkRequest instanceof DeleteNetworkRequest) {
                    networkName = deleteNetworkRequest.networkName;
                } else {
                    networkName = deleteNetworkRequest['network_name'];
                }
            }

        
            if (networkName === null || networkName === undefined) {
            throw new RequiredError('networkName','Required parameter networkName was null or undefined when calling deleteNetwork.');
            }

            options.pathParams = { 'network_name': networkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除节点池接口用于移除已创建的节点池，包周期资源池不支持。该接口适用于以下场景：当节点池完成任务、配置错误或需要清理资源时，用户可通过此接口删除指定的节点池。使用该接口的前提条件是节点池已存在且用户具有管理员权限。删除操作完成后，节点池将被永久移除，相关资源和配置也将被清理。若节点池不存在、用户无权限操作或节点池处于不可删除状态（如包周期资源池或节点池正在使用中），接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNodePool(deleteNodePoolRequest?: DeleteNodePoolRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/pools/{pool_name}/nodepools/{nodepool_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;
            
            let nodepoolName;

            if (deleteNodePoolRequest !== null && deleteNodePoolRequest !== undefined) {
                if (deleteNodePoolRequest instanceof DeleteNodePoolRequest) {
                    poolName = deleteNodePoolRequest.poolName;
                    nodepoolName = deleteNodePoolRequest.nodepoolName;
                } else {
                    poolName = deleteNodePoolRequest['pool_name'];
                    nodepoolName = deleteNodePoolRequest['nodepool_name'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling deleteNodePool.');
            }
            if (nodepoolName === null || nodepoolName === undefined) {
            throw new RequiredError('nodepoolName','Required parameter nodepoolName was null or undefined when calling deleteNodePool.');
            }

            options.pathParams = { 'pool_name': poolName,'nodepool_name': nodepoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源池接口用于移除指定的资源池。该接口适用于以下场景：当资源池不再需要、配置错误或需要清理资源时，用户可通过此接口删除指定的资源池。使用该接口的前提条件是资源池已存在且用户具有管理员权限。删除操作完成后，指定的资源池将被永久移除，相关资源和配置也将被清理。若资源池不存在、用户无权限操作或资源池被其他资源依赖，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePool(deletePoolRequest?: DeletePoolRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/pools/{pool_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;
            
            let xModelArtsUserID;

            if (deletePoolRequest !== null && deletePoolRequest !== undefined) {
                if (deletePoolRequest instanceof DeletePoolRequest) {
                    poolName = deletePoolRequest.poolName;
                    xModelArtsUserID = deletePoolRequest.xModelArtsUserID;
                } else {
                    poolName = deletePoolRequest['pool_name'];
                    xModelArtsUserID = deletePoolRequest['X-ModelArts-User-ID'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling deletePool.');
            }
            if (xModelArtsUserID !== undefined && xModelArtsUserID !== null) {
                localVarHeaderParameter['X-ModelArts-User-ID'] = String(xModelArtsUserID);
            }

            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除训练作业标签，支持批量删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrainJobTags(deleteTrainJobTagsRequest?: DeleteTrainJobTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/modelarts-training-job/{training_job_id}/tags/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trainingJobId;

            if (deleteTrainJobTagsRequest !== null && deleteTrainJobTagsRequest !== undefined) {
                if (deleteTrainJobTagsRequest instanceof DeleteTrainJobTagsRequest) {
                    trainingJobId = deleteTrainJobTagsRequest.trainingJobId;
                    body = deleteTrainJobTagsRequest.body
                } else {
                    trainingJobId = deleteTrainJobTagsRequest['training_job_id'];
                    body = deleteTrainJobTagsRequest['body'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling deleteTrainJobTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除训练实验接口用于移除已创建的训练实验。
         * 该接口适用于以下场景：当训练实验完成、配置错误或需要清理资源时，用户可以通过此接口删除指定的训练实验。使用该接口的前提条件是训练实验已存在且用户具有删除该实验的权限。删除操作完成后，训练实验将被永久移除，相关的配置和资源也将被清理。若训练实验不存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrainingExperiment(deleteTrainingExperimentRequest?: DeleteTrainingExperimentRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/training-experiments/{experiment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let experimentId;

            if (deleteTrainingExperimentRequest !== null && deleteTrainingExperimentRequest !== undefined) {
                if (deleteTrainingExperimentRequest instanceof DeleteTrainingExperimentRequest) {
                    experimentId = deleteTrainingExperimentRequest.experimentId;
                } else {
                    experimentId = deleteTrainingExperimentRequest['experiment_id'];
                }
            }

        
            if (experimentId === null || experimentId === undefined) {
            throw new RequiredError('experimentId','Required parameter experimentId was null or undefined when calling deleteTrainingExperiment.');
            }

            options.pathParams = { 'experiment_id': experimentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除训练作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrainingJob(deleteTrainingJobRequest?: DeleteTrainingJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/training-jobs/{training_job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;

            if (deleteTrainingJobRequest !== null && deleteTrainingJobRequest !== undefined) {
                if (deleteTrainingJobRequest instanceof DeleteTrainingJobRequest) {
                    trainingJobId = deleteTrainingJobRequest.trainingJobId;
                } else {
                    trainingJobId = deleteTrainingJobRequest['training_job_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling deleteTrainingJob.');
            }

            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除工作空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkspace(deleteWorkspaceRequest?: DeleteWorkspaceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;

            if (deleteWorkspaceRequest !== null && deleteWorkspaceRequest !== undefined) {
                if (deleteWorkspaceRequest instanceof DeleteWorkspaceRequest) {
                    workspaceId = deleteWorkspaceRequest.workspaceId;
                } else {
                    workspaceId = deleteWorkspaceRequest['workspace_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteWorkspace.');
            }

            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 动态卸载Notebook存储接口用于从运行中的Notebook实例中卸载已挂载的动态存储实例。
         * 
         * 适用场景：用户需要清理或重新组织Notebook实例的挂载资源时，可通过此接口卸载指定的存储实例。使用该接口的前提条件是用户已登录系统并具有访问目标Notebook实例的权限，同时Notebook实例必须处于运行状态且存储实例处于MOUNTED / UNMOUNT_FAILED / MOUNT_FAILED状态。调用该接口后，系统将卸载指定的存储实例，Notebook容器将无法再操作存储中的文件或对象，但存储中的文件或对象保持不变。若用户无权限访问指定实例或Notebook实例未运行，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachDynamicStorage(detachDynamicStorageRequest?: DetachDynamicStorageRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/notebooks/{instance_id}/storage/{storage_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let storageId;

            if (detachDynamicStorageRequest !== null && detachDynamicStorageRequest !== undefined) {
                if (detachDynamicStorageRequest instanceof DetachDynamicStorageRequest) {
                    instanceId = detachDynamicStorageRequest.instanceId;
                    storageId = detachDynamicStorageRequest.storageId;
                } else {
                    instanceId = detachDynamicStorageRequest['instance_id'];
                    storageId = detachDynamicStorageRequest['storage_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling detachDynamicStorage.');
            }
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling detachDynamicStorage.');
            }

            options.pathParams = { 'instance_id': instanceId,'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看授权列表接口用于查看授权信息。该接口适用于以下场景：当用户需要了解当前的授权情况、审核权限分配或管理权限时，可通过此接口查看授权列表。使用该接口的前提条件是用户具备查看授权的权限。查看操作完成后，将返回授权列表，包括被授权的资源、授权类型以及授权内容等信息。若用户无权限查看或授权列表不存在，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAuthorizations(getAuthorizationsRequest?: GetAuthorizationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/authorizations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let sortBy;
            
            let order;
            
            let limit;
            
            let offset;

            if (getAuthorizationsRequest !== null && getAuthorizationsRequest !== undefined) {
                if (getAuthorizationsRequest instanceof GetAuthorizationsRequest) {
                    sortBy = getAuthorizationsRequest.sortBy;
                    order = getAuthorizationsRequest.order;
                    limit = getAuthorizationsRequest.limit;
                    offset = getAuthorizationsRequest.offset;
                } else {
                    sortBy = getAuthorizationsRequest['sort_by'];
                    order = getAuthorizationsRequest['order'];
                    limit = getAuthorizationsRequest['limit'];
                    offset = getAuthorizationsRequest['offset'];
                }
            }

        
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
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
         * 查询Operation详情接口用于获取指定Operation的详细信息。该接口适用于以下场景：当用户需要了解某个Operation的具体执行情况和状态，以便进行故障排查或操作审计时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询Operation详情的权限，且指定的Operation已存在。查询操作完成后，接口将返回指定Operation的详细信息，包括Operation ID、操作类型、执行状态、开始时间、结束时间、操作结果等。若用户无权限操作、指定的Operation不存在或Operation ID无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getHyperinstanceOperation(getHyperinstanceOperationRequest?: GetHyperinstanceOperationRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/operation/{operation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let operationId;

            if (getHyperinstanceOperationRequest !== null && getHyperinstanceOperationRequest !== undefined) {
                if (getHyperinstanceOperationRequest instanceof GetHyperinstanceOperationRequest) {
                    id = getHyperinstanceOperationRequest.id;
                    operationId = getHyperinstanceOperationRequest.operationId;
                } else {
                    id = getHyperinstanceOperationRequest['id'];
                    operationId = getHyperinstanceOperationRequest['operation_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getHyperinstanceOperation.');
            }
            if (operationId === null || operationId === undefined) {
            throw new RequiredError('operationId','Required parameter operationId was null or undefined when calling getHyperinstanceOperation.');
            }

            options.pathParams = { 'id': id,'operation_id': operationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询算法列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlgorithms(listAlgorithmsRequest?: ListAlgorithmsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/algorithms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sortBy;
            
            let order;
            
            let groupBy;
            
            let searches;
            
            let workspaceId;

            if (listAlgorithmsRequest !== null && listAlgorithmsRequest !== undefined) {
                if (listAlgorithmsRequest instanceof ListAlgorithmsRequest) {
                    offset = listAlgorithmsRequest.offset;
                    limit = listAlgorithmsRequest.limit;
                    sortBy = listAlgorithmsRequest.sortBy;
                    order = listAlgorithmsRequest.order;
                    groupBy = listAlgorithmsRequest.groupBy;
                    searches = listAlgorithmsRequest.searches;
                    workspaceId = listAlgorithmsRequest.workspaceId;
                } else {
                    offset = listAlgorithmsRequest['offset'];
                    limit = listAlgorithmsRequest['limit'];
                    sortBy = listAlgorithmsRequest['sort_by'];
                    order = listAlgorithmsRequest['order'];
                    groupBy = listAlgorithmsRequest['group_by'];
                    searches = listAlgorithmsRequest['searches'];
                    workspaceId = listAlgorithmsRequest['workspace_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (searches !== null && searches !== undefined) {
                localVarQueryParameter['searches'] = searches;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于获取指定Notebook实例下挂载的动态存储信息列表。
         * 适用场景：用户需要获取指定Notebook实例下挂载的动态存储的存储id、存储类型、挂载路径、挂载状态等信息的场景。若挂载失败，会返回相应错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDynamicStorages(listDynamicStoragesRequest?: ListDynamicStoragesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks/{instance_id}/storage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listDynamicStoragesRequest !== null && listDynamicStoragesRequest !== undefined) {
                if (listDynamicStoragesRequest instanceof ListDynamicStoragesRequest) {
                    instanceId = listDynamicStoragesRequest.instanceId;
                } else {
                    instanceId = listDynamicStoragesRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDynamicStorages.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取事件类型列表接口用于获取训练管理中支持的事件类型列表。
         * 该接口适用于以下场景：当用户需要了解训练管理中支持的事件类型，以便在创建或管理训练任务时进行相关配置时，可以通过此接口获取事件类型列表。使用该接口的前提条件是用户已登录且具有访问训练管理的权限。获取操作完成后，响应消息体中将包含所有支持的事件类型及其描述。若用户无权限访问或系统中无事件类型信息，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventCategories(listEventCategoriesRequest?: ListEventCategoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-event-categories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavorType;

            if (listEventCategoriesRequest !== null && listEventCategoriesRequest !== undefined) {
                if (listEventCategoriesRequest instanceof ListEventCategoriesRequest) {
                    flavorType = listEventCategoriesRequest.flavorType;
                } else {
                    flavorType = listEventCategoriesRequest['flavor_type'];
                }
            }

        
            if (flavorType !== null && flavorType !== undefined) {
                localVarQueryParameter['flavor_type'] = flavorType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件列表接口用于获取系统中记录的事件信息。该接口适用于以下场景：当用户需要监控系统状态、排查问题或进行审计时，可通过此接口查询系统中发生的事件记录。使用该接口的前提条件是用户具有相应的权限，并且系统中已存在事件记录。查询操作完成后，接口将返回事件列表，包含事件ID、类型、时间、描述等信息。若用户无权限、事件记录不存在或查询参数有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEvents(listEventsRequest?: ListEventsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resource;
            
            let name;
            
            let limit;
            
            let _continue;
            
            let since;
            
            let until;
            
            let type;

            if (listEventsRequest !== null && listEventsRequest !== undefined) {
                if (listEventsRequest instanceof ListEventsRequest) {
                    resource = listEventsRequest.resource;
                    name = listEventsRequest.name;
                    limit = listEventsRequest.limit;
                    _continue = listEventsRequest._continue;
                    since = listEventsRequest.since;
                    until = listEventsRequest.until;
                    type = listEventsRequest.type;
                } else {
                    resource = listEventsRequest['resource'];
                    name = listEventsRequest['name'];
                    limit = listEventsRequest['limit'];
                    _continue = listEventsRequest['continue'];
                    since = listEventsRequest['since'];
                    until = listEventsRequest['until'];
                    type = listEventsRequest['type'];
                }
            }

        
            if (resource === null || resource === undefined) {
                throw new RequiredError('resource','Required parameter resource was null or undefined when calling listEvents.');
            }
            if (resource !== null && resource !== undefined) {
                localVarQueryParameter['resource'] = resource;
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling listEvents.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (_continue !== null && _continue !== undefined) {
                localVarQueryParameter['continue'] = _continue;
            }
            if (since !== null && since !== undefined) {
                localVarQueryParameter['since'] = since;
            }
            if (until !== null && until !== undefined) {
                localVarQueryParameter['until'] = until;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询支持的镜像列表接口用于根据指定条件分页查询满足条件的所有镜像。该接口适用于以下场景：当用户需要查找特定镜像、管理镜像仓库或选择合适的镜像版本进行部署时，可通过此接口获取符合条件的镜像列表。使用该接口的前提条件是镜像仓库已存在且用户具有访问权限。查询操作完成后，将返回满足条件的镜像列表，包括镜像ID、名称、版本、类型、状态、大小和创建时间等详细信息。若镜像仓库不存在、用户无权限访问或查询条件有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImage(listImageRequest?: ListImageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let name;
            
            let nameFuzzyMatch;
            
            let namespace;
            
            let offset;
            
            let serviceType;
            
            let sortDir;
            
            let sortKey;
            
            let type;
            
            let workspaceId;
            
            let showName;
            
            let showTag;

            if (listImageRequest !== null && listImageRequest !== undefined) {
                if (listImageRequest instanceof ListImageRequest) {
                    limit = listImageRequest.limit;
                    name = listImageRequest.name;
                    nameFuzzyMatch = listImageRequest.nameFuzzyMatch;
                    namespace = listImageRequest.namespace;
                    offset = listImageRequest.offset;
                    serviceType = listImageRequest.serviceType;
                    sortDir = listImageRequest.sortDir;
                    sortKey = listImageRequest.sortKey;
                    type = listImageRequest.type;
                    workspaceId = listImageRequest.workspaceId;
                    showName = listImageRequest.showName;
                    showTag = listImageRequest.showTag;
                } else {
                    limit = listImageRequest['limit'];
                    name = listImageRequest['name'];
                    nameFuzzyMatch = listImageRequest['name_fuzzy_match'];
                    namespace = listImageRequest['namespace'];
                    offset = listImageRequest['offset'];
                    serviceType = listImageRequest['service_type'];
                    sortDir = listImageRequest['sort_dir'];
                    sortKey = listImageRequest['sort_key'];
                    type = listImageRequest['type'];
                    workspaceId = listImageRequest['workspace_id'];
                    showName = listImageRequest['show_name'];
                    showTag = listImageRequest['show_tag'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameFuzzyMatch !== null && nameFuzzyMatch !== undefined) {
                localVarQueryParameter['name_fuzzy_match'] = nameFuzzyMatch;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (showName !== null && showName !== undefined) {
                localVarQueryParameter['show_name'] = showName;
            }
            if (showTag !== null && showTag !== undefined) {
                localVarQueryParameter['show_tag'] = showTag;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户镜像列表接口用于查询用户镜像信息概览，以镜像名称作为聚合的信息。该接口适用于以下场景：当用户需要管理多个镜像或了解各镜像的基本信息时，可通过此接口获取镜像列表及其概览信息。使用该接口的前提条件是用户具备镜像管理权限，并且镜像已存在。查询操作完成后，将返回用户所有镜像的列表，包括镜像名称、版本、状态等信息。若镜像不存在或用户无权限访问，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageGroup(listImageGroupRequest?: ListImageGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/images/group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let nameFuzzyMatch;
            
            let namespace;
            
            let type;
            
            let workspaceId;
            
            let limit;
            
            let offset;
            
            let swrInstanceId;

            if (listImageGroupRequest !== null && listImageGroupRequest !== undefined) {
                if (listImageGroupRequest instanceof ListImageGroupRequest) {
                    name = listImageGroupRequest.name;
                    nameFuzzyMatch = listImageGroupRequest.nameFuzzyMatch;
                    namespace = listImageGroupRequest.namespace;
                    type = listImageGroupRequest.type;
                    workspaceId = listImageGroupRequest.workspaceId;
                    limit = listImageGroupRequest.limit;
                    offset = listImageGroupRequest.offset;
                    swrInstanceId = listImageGroupRequest.swrInstanceId;
                } else {
                    name = listImageGroupRequest['name'];
                    nameFuzzyMatch = listImageGroupRequest['name_fuzzy_match'];
                    namespace = listImageGroupRequest['namespace'];
                    type = listImageGroupRequest['type'];
                    workspaceId = listImageGroupRequest['workspace_id'];
                    limit = listImageGroupRequest['limit'];
                    offset = listImageGroupRequest['offset'];
                    swrInstanceId = listImageGroupRequest['swr_instance_id'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameFuzzyMatch !== null && nameFuzzyMatch !== undefined) {
                localVarQueryParameter['name_fuzzy_match'] = nameFuzzyMatch;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (swrInstanceId !== null && swrInstanceId !== undefined) {
                localVarQueryParameter['swr_instance_id'] = swrInstanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于查询当前系统中的apikey列表，适用于管理员或用户需要查看和管理apikey的场景。调用此接口前，确保已具备相应的查询权限。返回的列表将包含每个apikey的基本信息，如apikey值、创建时间、绑定的服务等。如果当前系统中没有apikey，将返回空列表或相应的异常信息，提示用户检查查询条件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferApiKeys(listInferApiKeysRequest?: ListInferApiKeysRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/api-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scope;
            
            let serviceId;
            
            let name;
            
            let serviceName;
            
            let keyId;
            
            let limit;
            
            let offset;
            
            let workspaceId;
            
            let withUserScope;

            if (listInferApiKeysRequest !== null && listInferApiKeysRequest !== undefined) {
                if (listInferApiKeysRequest instanceof ListInferApiKeysRequest) {
                    scope = listInferApiKeysRequest.scope;
                    serviceId = listInferApiKeysRequest.serviceId;
                    name = listInferApiKeysRequest.name;
                    serviceName = listInferApiKeysRequest.serviceName;
                    keyId = listInferApiKeysRequest.keyId;
                    limit = listInferApiKeysRequest.limit;
                    offset = listInferApiKeysRequest.offset;
                    workspaceId = listInferApiKeysRequest.workspaceId;
                    withUserScope = listInferApiKeysRequest.withUserScope;
                } else {
                    scope = listInferApiKeysRequest['scope'];
                    serviceId = listInferApiKeysRequest['service_id'];
                    name = listInferApiKeysRequest['name'];
                    serviceName = listInferApiKeysRequest['service_name'];
                    keyId = listInferApiKeysRequest['key_id'];
                    limit = listInferApiKeysRequest['limit'];
                    offset = listInferApiKeysRequest['offset'];
                    workspaceId = listInferApiKeysRequest['workspace_id'];
                    withUserScope = listInferApiKeysRequest['with_user_scope'];
                }
            }

        
            if (scope !== null && scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }
            if (serviceId !== null && serviceId !== undefined) {
                localVarQueryParameter['service_id'] = serviceId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (serviceName !== null && serviceName !== undefined) {
                localVarQueryParameter['service_name'] = serviceName;
            }
            if (keyId !== null && keyId !== undefined) {
                localVarQueryParameter['key_id'] = keyId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (withUserScope !== null && withUserScope !== undefined) {
                localVarQueryParameter['with_user_scope'] = withUserScope;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口允许用户查询当前资源实例支持的可切换规格列表，适用于需要调整实例资源配置的场景。使用该接口前，用户需确保已登录并拥有查询权限。执行成功后，用户将获得一个包含各种可切换规格的详细列表，包括规格ID、名称、资源配额等信息，可用于后续的实例规格变更操作。如果用户没有相应的查询权限或资源实例ID无效，接口将返回错误信息，如401 Unauthorized或404 Not Found。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferClusterFlavors(listInferClusterFlavorsRequest?: ListInferClusterFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavorType;
            
            let limit;
            
            let offset;

            if (listInferClusterFlavorsRequest !== null && listInferClusterFlavorsRequest !== undefined) {
                if (listInferClusterFlavorsRequest instanceof ListInferClusterFlavorsRequest) {
                    flavorType = listInferClusterFlavorsRequest.flavorType;
                    limit = listInferClusterFlavorsRequest.limit;
                    offset = listInferClusterFlavorsRequest.offset;
                } else {
                    flavorType = listInferClusterFlavorsRequest['flavor_type'];
                    limit = listInferClusterFlavorsRequest['limit'];
                    offset = listInferClusterFlavorsRequest['offset'];
                }
            }

        
            if (flavorType !== null && flavorType !== undefined) {
                localVarQueryParameter['flavor_type'] = flavorType;
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
         * 本接口用于查询当前[租户](tag:hws,hws_hk,fcs,fcs_super)[资源空间](tag:hcs,hcs_sm)的服务部署实例列表，并支持根据服务部署实例的状态进行筛选，包括运行中和已删除状态，同时支持分页和关键词筛选。适用于需要管理和监控服务实例状态的场景。调用此接口前，确保已具备相应的查询权限，并提供可选的筛选条件和分页参数。返回的列表将包含每个服务部署实例的基本信息，如部署名字、最新更新时间、状态等。如果当前租户没有符合条件的服务实例或提供的参数无效，将返回空列表或相应的异常信息，提示用户检查输入数据的有效性和权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferDeploymentInstances(listInferDeploymentInstancesRequest?: ListInferDeploymentInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{id}/deployments/{name}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let status;
            
            let limit;
            
            let offset;
            
            let podName;

            if (listInferDeploymentInstancesRequest !== null && listInferDeploymentInstancesRequest !== undefined) {
                if (listInferDeploymentInstancesRequest instanceof ListInferDeploymentInstancesRequest) {
                    id = listInferDeploymentInstancesRequest.id;
                    name = listInferDeploymentInstancesRequest.name;
                    status = listInferDeploymentInstancesRequest.status;
                    limit = listInferDeploymentInstancesRequest.limit;
                    offset = listInferDeploymentInstancesRequest.offset;
                    podName = listInferDeploymentInstancesRequest.podName;
                } else {
                    id = listInferDeploymentInstancesRequest['id'];
                    name = listInferDeploymentInstancesRequest['name'];
                    status = listInferDeploymentInstancesRequest['status'];
                    limit = listInferDeploymentInstancesRequest['limit'];
                    offset = listInferDeploymentInstancesRequest['offset'];
                    podName = listInferDeploymentInstancesRequest['pod_name'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling listInferDeploymentInstances.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling listInferDeploymentInstances.');
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
            if (podName !== null && podName !== undefined) {
                localVarQueryParameter['pod_name'] = podName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于查询指定Pod的Kubernetes事件，适用于需要监控和排查Pod运行状态的场景。调用此接口前，确保已具备相应的查询权限，并提供有效的Pod ID。返回的事件列表将包含每个事件的详细信息，如事件类型、发生次数、事件名称、事件信息、发生时间等。如果提供的Pod ID无效、Pod不存在或权限不足，将返回相应的异常信息，提示用户检查输入数据的有效性和权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferDeploymentPodEvents(listInferDeploymentPodEventsRequest?: ListInferDeploymentPodEventsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{id}/deployments/{deployment_name}/instances/{instance_name}/pods/{name}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let deploymentName;
            
            let instanceName;
            
            let name;

            if (listInferDeploymentPodEventsRequest !== null && listInferDeploymentPodEventsRequest !== undefined) {
                if (listInferDeploymentPodEventsRequest instanceof ListInferDeploymentPodEventsRequest) {
                    id = listInferDeploymentPodEventsRequest.id;
                    deploymentName = listInferDeploymentPodEventsRequest.deploymentName;
                    instanceName = listInferDeploymentPodEventsRequest.instanceName;
                    name = listInferDeploymentPodEventsRequest.name;
                } else {
                    id = listInferDeploymentPodEventsRequest['id'];
                    deploymentName = listInferDeploymentPodEventsRequest['deployment_name'];
                    instanceName = listInferDeploymentPodEventsRequest['instance_name'];
                    name = listInferDeploymentPodEventsRequest['name'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling listInferDeploymentPodEvents.');
            }
            if (deploymentName === null || deploymentName === undefined) {
            throw new RequiredError('deploymentName','Required parameter deploymentName was null or undefined when calling listInferDeploymentPodEvents.');
            }
            if (instanceName === null || instanceName === undefined) {
            throw new RequiredError('instanceName','Required parameter instanceName was null or undefined when calling listInferDeploymentPodEvents.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling listInferDeploymentPodEvents.');
            }

            options.pathParams = { 'id': id,'deployment_name': deploymentName,'instance_name': instanceName,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于查询指定服务部署的pod列表，并支持选择是否只获取当前运行中的pod。适用于需要管理和监控服务部署pod状态的场景。调用此接口前，确保已具备相应的查询权限，并提供有效的服务ID、部署ID和可选的筛选参数pod status（如是否只获取当前运行中的pod）。返回的列表将包含每个pod的基本信息，如pod名称、pod所在node的IP、pod所在node名字、pod角色、状态、最近更新时间等。如果指定的服务ID无效或当前服务没有pod，将返回空列表或相应的异常信息，提示用户检查输入数据的有效性和权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferDeploymentPods(listInferDeploymentPodsRequest?: ListInferDeploymentPodsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{id}/deployments/{deployment_name}/instances/{name}/pods",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let deploymentName;
            
            let name;
            
            let status;
            
            let limit;
            
            let offset;
            
            let podName;
            
            let podId;
            
            let podNodeIp;
            
            let podNodeName;

            if (listInferDeploymentPodsRequest !== null && listInferDeploymentPodsRequest !== undefined) {
                if (listInferDeploymentPodsRequest instanceof ListInferDeploymentPodsRequest) {
                    id = listInferDeploymentPodsRequest.id;
                    deploymentName = listInferDeploymentPodsRequest.deploymentName;
                    name = listInferDeploymentPodsRequest.name;
                    status = listInferDeploymentPodsRequest.status;
                    limit = listInferDeploymentPodsRequest.limit;
                    offset = listInferDeploymentPodsRequest.offset;
                    podName = listInferDeploymentPodsRequest.podName;
                    podId = listInferDeploymentPodsRequest.podId;
                    podNodeIp = listInferDeploymentPodsRequest.podNodeIp;
                    podNodeName = listInferDeploymentPodsRequest.podNodeName;
                } else {
                    id = listInferDeploymentPodsRequest['id'];
                    deploymentName = listInferDeploymentPodsRequest['deployment_name'];
                    name = listInferDeploymentPodsRequest['name'];
                    status = listInferDeploymentPodsRequest['status'];
                    limit = listInferDeploymentPodsRequest['limit'];
                    offset = listInferDeploymentPodsRequest['offset'];
                    podName = listInferDeploymentPodsRequest['pod_name'];
                    podId = listInferDeploymentPodsRequest['pod_id'];
                    podNodeIp = listInferDeploymentPodsRequest['pod_node_ip'];
                    podNodeName = listInferDeploymentPodsRequest['pod_node_name'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling listInferDeploymentPods.');
            }
            if (deploymentName === null || deploymentName === undefined) {
            throw new RequiredError('deploymentName','Required parameter deploymentName was null or undefined when calling listInferDeploymentPods.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling listInferDeploymentPods.');
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
            if (podName !== null && podName !== undefined) {
                localVarQueryParameter['pod_name'] = podName;
            }
            if (podId !== null && podId !== undefined) {
                localVarQueryParameter['pod_id'] = podId;
            }
            if (podNodeIp !== null && podNodeIp !== undefined) {
                localVarQueryParameter['pod_node_ip'] = podNodeIp;
            }
            if (podNodeName !== null && podNodeName !== undefined) {
                localVarQueryParameter['pod_node_name'] = podNodeName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id,'deployment_name': deploymentName,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于获取指定服务部署的版本列表，适用于需要了解当前服务部署可用版本的场景，例如进行版本选择或确认当前版本信息。请求需包含有效的服务ID、部署ID，也可通过排序参数对列表进行排序。用户必须具有对目标服务部署的查看权限。请求成功后，返回该服务部署的所有在线版本信息，包括版本号、发布时间和状态。若服务ID/部署ID无效或用户无权限，则返回400 Bad Request或403 Forbidden；若服务部署无在线版本，则返回空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferDeploymentVersions(listInferDeploymentVersionsRequest?: ListInferDeploymentVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (listInferDeploymentVersionsRequest !== null && listInferDeploymentVersionsRequest !== undefined) {
                if (listInferDeploymentVersionsRequest instanceof ListInferDeploymentVersionsRequest) {
                    serviceId = listInferDeploymentVersionsRequest.serviceId;
                    deploymentId = listInferDeploymentVersionsRequest.deploymentId;
                } else {
                    serviceId = listInferDeploymentVersionsRequest['service_id'];
                    deploymentId = listInferDeploymentVersionsRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listInferDeploymentVersions.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling listInferDeploymentVersions.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持分页和筛选，适用于用户在管理控制台或通过API需要查看特定条件下（如服务状态、名称等）的部署列表的情况。调用此接口前，用户必须具有查询部署列表的权限，并提供合法的分页参数（如页码、每页条数）和筛选条件（如部署状态、名称等）。调用成功后，系统将返回符合筛选条件的部署列表，包含指定页码的数据，并返回总页数和总记录数。如果用户没有查询部署列表的权限，或提供的分页参数和筛选条件不合法，调用将返回相应的错误信息。如果系统在查询过程中遇到内部错误，也将返回错误信息并记录日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferDeployments(listInferDeploymentsRequest?: ListInferDeploymentsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}/deployments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let sortKey;
            
            let status;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let deleteAfter;

            if (listInferDeploymentsRequest !== null && listInferDeploymentsRequest !== undefined) {
                if (listInferDeploymentsRequest instanceof ListInferDeploymentsRequest) {
                    serviceId = listInferDeploymentsRequest.serviceId;
                    sortKey = listInferDeploymentsRequest.sortKey;
                    status = listInferDeploymentsRequest.status;
                    sortDir = listInferDeploymentsRequest.sortDir;
                    limit = listInferDeploymentsRequest.limit;
                    offset = listInferDeploymentsRequest.offset;
                    deleteAfter = listInferDeploymentsRequest.deleteAfter;
                } else {
                    serviceId = listInferDeploymentsRequest['service_id'];
                    sortKey = listInferDeploymentsRequest['sort_key'];
                    status = listInferDeploymentsRequest['status'];
                    sortDir = listInferDeploymentsRequest['sort_dir'];
                    limit = listInferDeploymentsRequest['limit'];
                    offset = listInferDeploymentsRequest['offset'];
                    deleteAfter = listInferDeploymentsRequest['delete_after'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listInferDeployments.');
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
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
            if (deleteAfter !== null && deleteAfter !== undefined) {
                localVarQueryParameter['delete_after'] = deleteAfter;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于查询当前所有的内网接入申请记录，适用于需要管理和监控内网接入申请状态的场景。调用此接口前，确保已具备相应的查询权限。返回的列表将包含每个内网接入申请的基本信息，如申请ID、创建时间、状态、Region ID等。如果当前租户没有内网接入申请记录，将返回空列表。如果调用时出现权限不足或其他系统异常，将返回相应的异常信息，提示用户检查权限或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferIntranetConnectionApplications(listInferIntranetConnectionApplicationsRequest?: ListInferIntranetConnectionApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/intranet-connection/requests",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scene;
            
            let status;
            
            let id;
            
            let serviceId;
            
            let serviceName;
            
            let vpcId;
            
            let vpcName;
            
            let poolId;
            
            let offset;
            
            let limit;
            
            let workspaceId;
            
            let sortDir;
            
            let sortKey;

            if (listInferIntranetConnectionApplicationsRequest !== null && listInferIntranetConnectionApplicationsRequest !== undefined) {
                if (listInferIntranetConnectionApplicationsRequest instanceof ListInferIntranetConnectionApplicationsRequest) {
                    scene = listInferIntranetConnectionApplicationsRequest.scene;
                    status = listInferIntranetConnectionApplicationsRequest.status;
                    id = listInferIntranetConnectionApplicationsRequest.id;
                    serviceId = listInferIntranetConnectionApplicationsRequest.serviceId;
                    serviceName = listInferIntranetConnectionApplicationsRequest.serviceName;
                    vpcId = listInferIntranetConnectionApplicationsRequest.vpcId;
                    vpcName = listInferIntranetConnectionApplicationsRequest.vpcName;
                    poolId = listInferIntranetConnectionApplicationsRequest.poolId;
                    offset = listInferIntranetConnectionApplicationsRequest.offset;
                    limit = listInferIntranetConnectionApplicationsRequest.limit;
                    workspaceId = listInferIntranetConnectionApplicationsRequest.workspaceId;
                    sortDir = listInferIntranetConnectionApplicationsRequest.sortDir;
                    sortKey = listInferIntranetConnectionApplicationsRequest.sortKey;
                } else {
                    scene = listInferIntranetConnectionApplicationsRequest['scene'];
                    status = listInferIntranetConnectionApplicationsRequest['status'];
                    id = listInferIntranetConnectionApplicationsRequest['id'];
                    serviceId = listInferIntranetConnectionApplicationsRequest['service_id'];
                    serviceName = listInferIntranetConnectionApplicationsRequest['service_name'];
                    vpcId = listInferIntranetConnectionApplicationsRequest['vpc_id'];
                    vpcName = listInferIntranetConnectionApplicationsRequest['vpc_name'];
                    poolId = listInferIntranetConnectionApplicationsRequest['pool_id'];
                    offset = listInferIntranetConnectionApplicationsRequest['offset'];
                    limit = listInferIntranetConnectionApplicationsRequest['limit'];
                    workspaceId = listInferIntranetConnectionApplicationsRequest['workspace_id'];
                    sortDir = listInferIntranetConnectionApplicationsRequest['sort_dir'];
                    sortKey = listInferIntranetConnectionApplicationsRequest['sort_key'];
                }
            }

        
            if (scene !== null && scene !== undefined) {
                localVarQueryParameter['scene'] = scene;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (serviceId !== null && serviceId !== undefined) {
                localVarQueryParameter['service_id'] = serviceId;
            }
            if (serviceName !== null && serviceName !== undefined) {
                localVarQueryParameter['service_name'] = serviceName;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (vpcName !== null && vpcName !== undefined) {
                localVarQueryParameter['vpc_name'] = vpcName;
            }
            if (poolId !== null && poolId !== undefined) {
                localVarQueryParameter['pool_id'] = poolId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
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
         * 本接口用于查询当前所有的内网接入审批记录，适用于需要管理和监控内网接入审批状态的场景。调用此接口前，确保已具备相应的查询权限。返回的列表将包含每个内网接入审批的基本信息，如审批ID、申请时间、状态（如待审批、已批准、已拒绝）、申请者信息、Region ID等。如果当前租户没有内网接入审批记录，将返回空列表。如果调用时出现权限不足或其他系统异常，将返回相应的异常信息，提示用户检查权限或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferIntranetConnectionReviews(listInferIntranetConnectionReviewsRequest?: ListInferIntranetConnectionReviewsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/intranet-connection/reviews",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let scene;
            
            let id;
            
            let applicantDomainId;
            
            let serviceId;
            
            let applicantUserName;
            
            let serviceName;
            
            let vpcName;
            
            let vpcId;
            
            let poolId;
            
            let sortKey;
            
            let limit;
            
            let offset;
            
            let status;
            
            let type;

            if (listInferIntranetConnectionReviewsRequest !== null && listInferIntranetConnectionReviewsRequest !== undefined) {
                if (listInferIntranetConnectionReviewsRequest instanceof ListInferIntranetConnectionReviewsRequest) {
                    scene = listInferIntranetConnectionReviewsRequest.scene;
                    id = listInferIntranetConnectionReviewsRequest.id;
                    applicantDomainId = listInferIntranetConnectionReviewsRequest.applicantDomainId;
                    serviceId = listInferIntranetConnectionReviewsRequest.serviceId;
                    applicantUserName = listInferIntranetConnectionReviewsRequest.applicantUserName;
                    serviceName = listInferIntranetConnectionReviewsRequest.serviceName;
                    vpcName = listInferIntranetConnectionReviewsRequest.vpcName;
                    vpcId = listInferIntranetConnectionReviewsRequest.vpcId;
                    poolId = listInferIntranetConnectionReviewsRequest.poolId;
                    sortKey = listInferIntranetConnectionReviewsRequest.sortKey;
                    limit = listInferIntranetConnectionReviewsRequest.limit;
                    offset = listInferIntranetConnectionReviewsRequest.offset;
                    status = listInferIntranetConnectionReviewsRequest.status;
                    type = listInferIntranetConnectionReviewsRequest.type;
                } else {
                    scene = listInferIntranetConnectionReviewsRequest['scene'];
                    id = listInferIntranetConnectionReviewsRequest['id'];
                    applicantDomainId = listInferIntranetConnectionReviewsRequest['applicant_domain_id'];
                    serviceId = listInferIntranetConnectionReviewsRequest['service_id'];
                    applicantUserName = listInferIntranetConnectionReviewsRequest['applicant_user_name'];
                    serviceName = listInferIntranetConnectionReviewsRequest['service_name'];
                    vpcName = listInferIntranetConnectionReviewsRequest['vpc_name'];
                    vpcId = listInferIntranetConnectionReviewsRequest['vpc_id'];
                    poolId = listInferIntranetConnectionReviewsRequest['pool_id'];
                    sortKey = listInferIntranetConnectionReviewsRequest['sort_key'];
                    limit = listInferIntranetConnectionReviewsRequest['limit'];
                    offset = listInferIntranetConnectionReviewsRequest['offset'];
                    status = listInferIntranetConnectionReviewsRequest['status'];
                    type = listInferIntranetConnectionReviewsRequest['type'];
                }
            }

        
            if (scene !== null && scene !== undefined) {
                localVarQueryParameter['scene'] = scene;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (applicantDomainId !== null && applicantDomainId !== undefined) {
                localVarQueryParameter['applicant_domain_id'] = applicantDomainId;
            }
            if (serviceId !== null && serviceId !== undefined) {
                localVarQueryParameter['service_id'] = serviceId;
            }
            if (applicantUserName !== null && applicantUserName !== undefined) {
                localVarQueryParameter['applicant_user_name'] = applicantUserName;
            }
            if (serviceName !== null && serviceName !== undefined) {
                localVarQueryParameter['service_name'] = serviceName;
            }
            if (vpcName !== null && vpcName !== undefined) {
                localVarQueryParameter['vpc_name'] = vpcName;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (poolId !== null && poolId !== undefined) {
                localVarQueryParameter['pool_id'] = poolId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要监控和管理在线服务事件的场景，例如用户或运维人员需要定期检查服务的日志事件，以及时发现和处理问题。通过调用此接口，用户可以获取当前在线服务的所有事件记录，包括事件类型、事件信息、时间、发生次数等信息。用户必须具有查询服务事件列表的权限，才能成功访问该接口。获取成功后，返回事件列表；若失败，返回具体的错误信息。常见异常包括权限验证错误、服务状态错误和参数验证错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferServiceEvents(listInferServiceEventsRequest?: ListInferServiceEventsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let eventType;
            
            let startTime;
            
            let endTime;
            
            let eventInfoKey;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;

            if (listInferServiceEventsRequest !== null && listInferServiceEventsRequest !== undefined) {
                if (listInferServiceEventsRequest instanceof ListInferServiceEventsRequest) {
                    serviceId = listInferServiceEventsRequest.serviceId;
                    eventType = listInferServiceEventsRequest.eventType;
                    startTime = listInferServiceEventsRequest.startTime;
                    endTime = listInferServiceEventsRequest.endTime;
                    eventInfoKey = listInferServiceEventsRequest.eventInfoKey;
                    limit = listInferServiceEventsRequest.limit;
                    offset = listInferServiceEventsRequest.offset;
                    sortKey = listInferServiceEventsRequest.sortKey;
                    sortDir = listInferServiceEventsRequest.sortDir;
                } else {
                    serviceId = listInferServiceEventsRequest['service_id'];
                    eventType = listInferServiceEventsRequest['event_type'];
                    startTime = listInferServiceEventsRequest['start_time'];
                    endTime = listInferServiceEventsRequest['end_time'];
                    eventInfoKey = listInferServiceEventsRequest['event_info_key'];
                    limit = listInferServiceEventsRequest['limit'];
                    offset = listInferServiceEventsRequest['offset'];
                    sortKey = listInferServiceEventsRequest['sort_key'];
                    sortDir = listInferServiceEventsRequest['sort_dir'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listInferServiceEvents.');
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (eventInfoKey !== null && eventInfoKey !== undefined) {
                localVarQueryParameter['event_info_key'] = eventInfoKey;
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
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要获取用户当前项目中某一类资源（如指定的Service）的标签信息的场景，例如在资源管理和监控中，用户可以通过查询标签来了解各类资源的分类和属性。通过调用此接口，用户可以获取指定Service在所有工作空间中的标签列表，但无权限的工作空间标签数据将被过滤不返回。用户必须具有足够的权限，且目标资源需存在。查询成功后，返回指定Service的标签列表；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferServiceTags(listInferServiceTagsRequest?: ListInferServiceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/modelarts-service-v2/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;

            if (listInferServiceTagsRequest !== null && listInferServiceTagsRequest !== undefined) {
                if (listInferServiceTagsRequest instanceof ListInferServiceTagsRequest) {
                    workspaceId = listInferServiceTagsRequest.workspaceId;
                } else {
                    workspaceId = listInferServiceTagsRequest['workspace_id'];
                }
            }

        
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持分页和筛选
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferServices(listInferServicesRequest?: ListInferServicesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let poolId;
            
            let poolName;
            
            let sortKey;
            
            let status;
            
            let name;
            
            let authType;
            
            let type;
            
            let description;
            
            let workspaceId;
            
            let userName;
            
            let tags;
            
            let assetId;
            
            let sortDir;
            
            let limit;
            
            let offset;

            if (listInferServicesRequest !== null && listInferServicesRequest !== undefined) {
                if (listInferServicesRequest instanceof ListInferServicesRequest) {
                    id = listInferServicesRequest.id;
                    poolId = listInferServicesRequest.poolId;
                    poolName = listInferServicesRequest.poolName;
                    sortKey = listInferServicesRequest.sortKey;
                    status = listInferServicesRequest.status;
                    name = listInferServicesRequest.name;
                    authType = listInferServicesRequest.authType;
                    type = listInferServicesRequest.type;
                    description = listInferServicesRequest.description;
                    workspaceId = listInferServicesRequest.workspaceId;
                    userName = listInferServicesRequest.userName;
                    tags = listInferServicesRequest.tags;
                    assetId = listInferServicesRequest.assetId;
                    sortDir = listInferServicesRequest.sortDir;
                    limit = listInferServicesRequest.limit;
                    offset = listInferServicesRequest.offset;
                } else {
                    id = listInferServicesRequest['id'];
                    poolId = listInferServicesRequest['pool_id'];
                    poolName = listInferServicesRequest['pool_name'];
                    sortKey = listInferServicesRequest['sort_key'];
                    status = listInferServicesRequest['status'];
                    name = listInferServicesRequest['name'];
                    authType = listInferServicesRequest['auth_type'];
                    type = listInferServicesRequest['type'];
                    description = listInferServicesRequest['description'];
                    workspaceId = listInferServicesRequest['workspace_id'];
                    userName = listInferServicesRequest['user_name'];
                    tags = listInferServicesRequest['tags'];
                    assetId = listInferServicesRequest['asset_id'];
                    sortDir = listInferServicesRequest['sort_dir'];
                    limit = listInferServicesRequest['limit'];
                    offset = listInferServicesRequest['offset'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (poolId !== null && poolId !== undefined) {
                localVarQueryParameter['pool_id'] = poolId;
            }
            if (poolName !== null && poolName !== undefined) {
                localVarQueryParameter['pool_name'] = poolName;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (authType !== null && authType !== undefined) {
                localVarQueryParameter['auth_type'] = authType;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (assetId !== null && assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要根据标签或资源名称查找相关资源的场景，例如在资源管理和搜索中，用户可以通过指定标签或进行模糊查询来查找符合特定条件的资源。通过调用此接口，用户可以基于多个标签或资源名称进行精确或模糊查询，若不传标签则返回所有资源。用户必须具有足够的权限，且目标资源需存在。查询成功后，返回符合条件的资源列表；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferServicesByTags(listInferServicesByTagsRequest?: ListInferServicesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/modelarts-service-v2/resource-instances/filter",
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
            
            let workspaceId;

            if (listInferServicesByTagsRequest !== null && listInferServicesByTagsRequest !== undefined) {
                if (listInferServicesByTagsRequest instanceof ListInferServicesByTagsRequest) {
                    body = listInferServicesByTagsRequest.body
                    limit = listInferServicesByTagsRequest.limit;
                    offset = listInferServicesByTagsRequest.offset;
                    workspaceId = listInferServicesByTagsRequest.workspaceId;
                } else {
                    body = listInferServicesByTagsRequest['body'];
                    limit = listInferServicesByTagsRequest['limit'];
                    offset = listInferServicesByTagsRequest['offset'];
                    workspaceId = listInferServicesByTagsRequest['workspace_id'];
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
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务列表接口用于获取当前用户下的任务列表。该接口适用于以下场景：当需要查看任务状态、管理任务进度或统计任务数量时，用户可通过此接口获取当前用户下所有任务的详细信息。使用该接口的前提条件是用户已登录系统且具有查看任务的权限。调用接口成功后，系统将返回当前用户下的任务列表，包括任务ID、名称、状态、创建时间等信息。若用户未登录、无权限访问或系统中未配置任务，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobs(listJobsRequest?: ListJobsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let limit;
            
            let offset;
            
            let since;
            
            let until;
            
            let resource;
            
            let name;

            if (listJobsRequest !== null && listJobsRequest !== undefined) {
                if (listJobsRequest instanceof ListJobsRequest) {
                    type = listJobsRequest.type;
                    limit = listJobsRequest.limit;
                    offset = listJobsRequest.offset;
                    since = listJobsRequest.since;
                    until = listJobsRequest.until;
                    resource = listJobsRequest.resource;
                    name = listJobsRequest.name;
                } else {
                    type = listJobsRequest['type'];
                    limit = listJobsRequest['limit'];
                    offset = listJobsRequest['offset'];
                    since = listJobsRequest['since'];
                    until = listJobsRequest['until'];
                    resource = listJobsRequest['resource'];
                    name = listJobsRequest['name'];
                }
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
            if (since !== null && since !== undefined) {
                localVarQueryParameter['since'] = since;
            }
            if (until !== null && until !== undefined) {
                localVarQueryParameter['until'] = until;
            }
            if (resource !== null && resource !== undefined) {
                localVarQueryParameter['resource'] = resource;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络资源列表接口用于获取系统中已创建的网络资源信息。该接口适用于以下场景：当用户需要监控网络状态、进行资源规划、排查网络问题或进行审计时，可通过此接口查询系统中现有的网络资源列表。使用该接口的前提条件是用户具有相应的权限，并且系统中已存在网络资源。查询操作完成后，接口将返回网络资源列表，包含资源ID、类型、状态、创建时间等详细信息。若用户无权限、系统中无网络资源或查询参数有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNetworks(listNetworksRequest?: ListNetworksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/networks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let labelSelector;
            
            let limit;
            
            let _continue;

            if (listNetworksRequest !== null && listNetworksRequest !== undefined) {
                if (listNetworksRequest instanceof ListNetworksRequest) {
                    labelSelector = listNetworksRequest.labelSelector;
                    limit = listNetworksRequest.limit;
                    _continue = listNetworksRequest._continue;
                } else {
                    labelSelector = listNetworksRequest['labelSelector'];
                    limit = listNetworksRequest['limit'];
                    _continue = listNetworksRequest['continue'];
                }
            }

        
            if (labelSelector !== null && labelSelector !== undefined) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (_continue !== null && _continue !== undefined) {
                localVarQueryParameter['continue'] = _continue;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询节点池的节点列表接口用于获取指定节点池中所有节点的详细信息。该接口适用于以下场景：当需要查看节点池的节点状态、资源使用情况或管理节点资源时，用户可通过此接口获取节点池中节点的详细信息。使用该接口的前提条件是节点池已存在且用户具有访问该节点池的权限。调用接口成功后，系统将返回节点池中所有节点的列表，包括节点ID、名称、状态、IP地址、资源使用情况等详细信息。若节点池不存在、用户无权限访问或节点池当前不可用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodePoolNodes(listNodePoolNodesRequest?: ListNodePoolNodesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/nodepools/{nodepool_name}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolName;
            
            let nodepoolName;
            
            let _continue;
            
            let limit;

            if (listNodePoolNodesRequest !== null && listNodePoolNodesRequest !== undefined) {
                if (listNodePoolNodesRequest instanceof ListNodePoolNodesRequest) {
                    poolName = listNodePoolNodesRequest.poolName;
                    nodepoolName = listNodePoolNodesRequest.nodepoolName;
                    _continue = listNodePoolNodesRequest._continue;
                    limit = listNodePoolNodesRequest.limit;
                } else {
                    poolName = listNodePoolNodesRequest['pool_name'];
                    nodepoolName = listNodePoolNodesRequest['nodepool_name'];
                    _continue = listNodePoolNodesRequest['continue'];
                    limit = listNodePoolNodesRequest['limit'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling listNodePoolNodes.');
            }
            if (nodepoolName === null || nodepoolName === undefined) {
            throw new RequiredError('nodepoolName','Required parameter nodepoolName was null or undefined when calling listNodePoolNodes.');
            }
            if (_continue !== null && _continue !== undefined) {
                localVarQueryParameter['continue'] = _continue;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_name': poolName,'nodepool_name': nodepoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询节点池列表接口用于获取指定节点池的列表信息。该接口适用于以下场景：当需要查看节点池的配置、状态或管理节点池资源时，用户可通过此接口获取节点池的详细信息。使用该接口的前提条件是节点池已存在且用户具有管理员权限。调用接口成功后，系统将返回节点池的列表，包括节点池ID、名称、节点数量、状态等详细信息。若节点池不存在、用户无权限操作或节点池当前不可用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodePools(listNodePoolsRequest?: ListNodePoolsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/nodepools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;

            if (listNodePoolsRequest !== null && listNodePoolsRequest !== undefined) {
                if (listNodePoolsRequest instanceof ListNodePoolsRequest) {
                    poolName = listNodePoolsRequest.poolName;
                } else {
                    poolName = listNodePoolsRequest['pool_name'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling listNodePools.');
            }

            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询插件模板列表接口用于获取插件模板的基本信息列表。该接口适用于以下场景：当需要浏览或管理插件模板时，用户可通过此接口查询所有可用的插件模板信息，以便选择或进一步操作。使用该接口的前提条件是用户具有访问插件模板的权限，且插件模板服务处于正常运行状态。查询操作完成后，用户将获得插件模板的列表信息，包括模板名称、类型、版本等，便于后续的插件开发或管理。若用户无权限访问、插件模板服务不可用或请求参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPluginTemplates(listPluginTemplatesRequest?: ListPluginTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/plugintemplates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateName;
            
            let poolName;

            if (listPluginTemplatesRequest !== null && listPluginTemplatesRequest !== undefined) {
                if (listPluginTemplatesRequest instanceof ListPluginTemplatesRequest) {
                    templateName = listPluginTemplatesRequest.templateName;
                    poolName = listPluginTemplatesRequest.poolName;
                } else {
                    templateName = listPluginTemplatesRequest['templateName'];
                    poolName = listPluginTemplatesRequest['poolName'];
                }
            }

        
            if (templateName !== null && templateName !== undefined) {
                localVarQueryParameter['templateName'] = templateName;
            }
            if (poolName !== null && poolName !== undefined) {
                localVarQueryParameter['poolName'] = poolName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源池节点列表接口用于获取指定资源池中的节点信息列表。该接口适用于以下场景：当需要了解资源池中节点的分布、状态或资源使用情况时，用户可通过此接口查询资源池中的节点列表，以便进行资源监控、分配或管理。使用该接口的前提条件是资源池已创建且处于可用状态，且用户具有访问资源池的权限。查询操作完成后，用户将获得资源池中节点的详细信息，包括节点ID、状态、资源使用情况等，便于后续的资源管理和优化。若资源池不存在、用户无权限访问或请求参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPoolNodes(listPoolNodesRequest?: ListPoolNodesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolName;
            
            let _continue;
            
            let limit;

            if (listPoolNodesRequest !== null && listPoolNodesRequest !== undefined) {
                if (listPoolNodesRequest instanceof ListPoolNodesRequest) {
                    poolName = listPoolNodesRequest.poolName;
                    _continue = listPoolNodesRequest._continue;
                    limit = listPoolNodesRequest.limit;
                } else {
                    poolName = listPoolNodesRequest['pool_name'];
                    _continue = listPoolNodesRequest['continue'];
                    limit = listPoolNodesRequest['limit'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling listPoolNodes.');
            }
            if (_continue !== null && _continue !== undefined) {
                localVarQueryParameter['continue'] = _continue;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询插件实例列表接口用于获取系统中已部署的插件实例信息。该接口适用于以下场景：当用户需要查看系统中已部署的插件实例、监控插件运行状态、管理插件配置或进行故障排查时，可通过此接口获取插件实例的详细信息。使用该接口的前提条件是用户具有查询权限且系统中已部署至少一个插件实例。调用该接口后，系统将返回所有插件实例的列表，包括插件名称、类型、状态、版本及部署环境等信息。若用户无权限访问或系统中未部署任何插件实例，接口将返回相应的错误信息或空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPoolPlugins(listPoolPluginsRequest?: ListPoolPluginsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/plugins",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;

            if (listPoolPluginsRequest !== null && listPoolPluginsRequest !== undefined) {
                if (listPoolPluginsRequest instanceof ListPoolPluginsRequest) {
                    poolName = listPoolPluginsRequest.poolName;
                } else {
                    poolName = listPoolPluginsRequest['pool_name'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling listPoolPlugins.');
            }

            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源池所有标签接口用于获取用户当前项目下资源池的所有标签信息，默认查询所有工作空间，但无权限的工作空间不会返回标签数据。该接口适用于以下场景：当需要管理、分类或统计资源池的标签信息时，用户可通过此接口获取资源池的标签数据。使用该接口的前提条件是用户具有访问资源池的权限且资源池已存在。调用接口成功后，系统将返回用户当前项目下所有可访问工作空间的资源池标签信息。若用户无权限访问资源池、资源池不存在或项目未创建，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPoolTags(listPoolTagsRequest?: ListPoolTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/pools/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listPoolTagsRequest !== null && listPoolTagsRequest !== undefined) {
                if (listPoolTagsRequest instanceof ListPoolTagsRequest) {
                    limit = listPoolTagsRequest.limit;
                    offset = listPoolTagsRequest.offset;
                } else {
                    limit = listPoolTagsRequest['limit'];
                    offset = listPoolTagsRequest['offset'];
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
         * 查询资源池列表接口用于获取系统中已创建的资源池信息。该接口适用于以下场景：当用户需要监控资源池状态、进行资源规划、管理资源分配或进行审计时，可通过此接口查询系统中现有的资源池列表。使用该接口的前提条件是用户具有相应的权限，并且系统中已存在资源池。查询操作完成后，接口将返回资源池列表，包含资源池ID、名称、类型、状态、资源配额等详细信息。若用户无权限、系统中无资源池或查询参数有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPools(listPoolsRequest?: ListPoolsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let labelSelector;
            
            let status;

            if (listPoolsRequest !== null && listPoolsRequest !== undefined) {
                if (listPoolsRequest instanceof ListPoolsRequest) {
                    workspaceId = listPoolsRequest.workspaceId;
                    labelSelector = listPoolsRequest.labelSelector;
                    status = listPoolsRequest.status;
                } else {
                    workspaceId = listPoolsRequest['workspaceId'];
                    labelSelector = listPoolsRequest['labelSelector'];
                    status = listPoolsRequest['status'];
                }
            }

        
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspaceId'] = workspaceId;
            }
            if (labelSelector !== null && labelSelector !== undefined) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源规格列表接口用于获取可用的资源规格信息。该接口适用于以下场景：当需要查看或选择资源规格以创建资源池、分配资源或了解可用资源规格时，用户可通过此接口获取资源规格的详细信息。使用该接口的前提条件是用户具有相应的权限（如管理员权限或资源管理权限）。调用接口成功后，系统将返回资源规格的列表，包括规格ID、名称、CPU核数、内存大小、存储容量等详细信息。若用户无权限访问该接口或系统中未配置资源规格，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceFlavors(listResourceFlavorsRequest?: ListResourceFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/resourceflavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let _continue;
            
            let limit;
            
            let labelSelector;

            if (listResourceFlavorsRequest !== null && listResourceFlavorsRequest !== undefined) {
                if (listResourceFlavorsRequest instanceof ListResourceFlavorsRequest) {
                    _continue = listResourceFlavorsRequest._continue;
                    limit = listResourceFlavorsRequest.limit;
                    labelSelector = listResourceFlavorsRequest.labelSelector;
                } else {
                    _continue = listResourceFlavorsRequest['continue'];
                    limit = listResourceFlavorsRequest['limit'];
                    labelSelector = listResourceFlavorsRequest['labelSelector'];
                }
            }

        
            if (_continue !== null && _continue !== undefined) {
                localVarQueryParameter['continue'] = _continue;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (labelSelector !== null && labelSelector !== undefined) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询计划事件列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledEvents(listScheduledEventsRequest?: ListScheduledEventsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/scheduled-events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let state;
            
            let type;
            
            let id;
            
            let nodeName;
            
            let poolName;
            
            let publishStartTime;
            
            let publishEndTime;
            
            let offset;
            
            let limit;

            if (listScheduledEventsRequest !== null && listScheduledEventsRequest !== undefined) {
                if (listScheduledEventsRequest instanceof ListScheduledEventsRequest) {
                    workspaceId = listScheduledEventsRequest.workspaceId;
                    state = listScheduledEventsRequest.state;
                    type = listScheduledEventsRequest.type;
                    id = listScheduledEventsRequest.id;
                    nodeName = listScheduledEventsRequest.nodeName;
                    poolName = listScheduledEventsRequest.poolName;
                    publishStartTime = listScheduledEventsRequest.publishStartTime;
                    publishEndTime = listScheduledEventsRequest.publishEndTime;
                    offset = listScheduledEventsRequest.offset;
                    limit = listScheduledEventsRequest.limit;
                } else {
                    workspaceId = listScheduledEventsRequest['workspaceId'];
                    state = listScheduledEventsRequest['state'];
                    type = listScheduledEventsRequest['type'];
                    id = listScheduledEventsRequest['id'];
                    nodeName = listScheduledEventsRequest['nodeName'];
                    poolName = listScheduledEventsRequest['poolName'];
                    publishStartTime = listScheduledEventsRequest['publishStartTime'];
                    publishEndTime = listScheduledEventsRequest['publishEndTime'];
                    offset = listScheduledEventsRequest['offset'];
                    limit = listScheduledEventsRequest['limit'];
                }
            }

        
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspaceId'] = workspaceId;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (nodeName !== null && nodeName !== undefined) {
                localVarQueryParameter['nodeName'] = nodeName;
            }
            if (poolName !== null && poolName !== undefined) {
                localVarQueryParameter['poolName'] = poolName;
            }
            if (publishStartTime !== null && publishStartTime !== undefined) {
                localVarQueryParameter['publishStartTime'] = publishStartTime;
            }
            if (publishEndTime !== null && publishEndTime !== undefined) {
                localVarQueryParameter['publishEndTime'] = publishEndTime;
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
         * 查询训练实验列表接口用于获取ModelArts平台上用户已创建的训练实验的列表。
         * 该接口适用于以下场景：当用户需要查看所有或部分训练实验的概要信息，如实验名称、描述、创建时间等时，可以通过此接口查询训练实验列表。使用该接口的前提条件是用户已登录ModelArts平台并具有查看训练实验的权限。查询操作完成后，系统将返回符合条件的训练实验列表。若用户无权限操作或查询条件不合法，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrainingExperiments(listTrainingExperimentsRequest?: ListTrainingExperimentsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-experiments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let limit;
            
            let offset;
            
            let sortBy;
            
            let order;

            if (listTrainingExperimentsRequest !== null && listTrainingExperimentsRequest !== undefined) {
                if (listTrainingExperimentsRequest instanceof ListTrainingExperimentsRequest) {
                    workspaceId = listTrainingExperimentsRequest.workspaceId;
                    limit = listTrainingExperimentsRequest.limit;
                    offset = listTrainingExperimentsRequest.offset;
                    sortBy = listTrainingExperimentsRequest.sortBy;
                    order = listTrainingExperimentsRequest.order;
                } else {
                    workspaceId = listTrainingExperimentsRequest['workspace_id'];
                    limit = listTrainingExperimentsRequest['limit'];
                    offset = listTrainingExperimentsRequest['offset'];
                    sortBy = listTrainingExperimentsRequest['sort_by'];
                    order = listTrainingExperimentsRequest['order'];
                }
            }

        
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取训练作业事件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrainingJobEvents(listTrainingJobEventsRequest?: ListTrainingJobEventsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let trainingJobId;
            
            let offset;
            
            let limit;
            
            let order;
            
            let startTime;
            
            let endTime;
            
            let xLanguage;
            
            let level;
            
            let pattern;

            if (listTrainingJobEventsRequest !== null && listTrainingJobEventsRequest !== undefined) {
                if (listTrainingJobEventsRequest instanceof ListTrainingJobEventsRequest) {
                    trainingJobId = listTrainingJobEventsRequest.trainingJobId;
                    offset = listTrainingJobEventsRequest.offset;
                    limit = listTrainingJobEventsRequest.limit;
                    order = listTrainingJobEventsRequest.order;
                    startTime = listTrainingJobEventsRequest.startTime;
                    endTime = listTrainingJobEventsRequest.endTime;
                    xLanguage = listTrainingJobEventsRequest.xLanguage;
                    level = listTrainingJobEventsRequest.level;
                    pattern = listTrainingJobEventsRequest.pattern;
                } else {
                    trainingJobId = listTrainingJobEventsRequest['training_job_id'];
                    offset = listTrainingJobEventsRequest['offset'];
                    limit = listTrainingJobEventsRequest['limit'];
                    order = listTrainingJobEventsRequest['order'];
                    startTime = listTrainingJobEventsRequest['start_time'];
                    endTime = listTrainingJobEventsRequest['end_time'];
                    xLanguage = listTrainingJobEventsRequest['X-Language'];
                    level = listTrainingJobEventsRequest['level'];
                    pattern = listTrainingJobEventsRequest['pattern'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling listTrainingJobEvents.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
            }
            if (pattern !== null && pattern !== undefined) {
                localVarQueryParameter['pattern'] = pattern;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取训练作业流程阶段信息列表接口用于获取ModelArts平台上指定训练作业的流程阶段信息列表。
         * 该接口适用于以下场景：当用户需要查看特定训练作业的流程阶段记录时，可以通过此接口获取阶段信息列表。使用该接口的前提条件是用户已知训练作业ID，并具有查看阶段信息列表的权限。查询操作完成后，平台将返回包含训练作业的阶段信息记录。若训练作业ID不存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrainingJobStages(listTrainingJobStagesRequest?: ListTrainingJobStagesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/stages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;

            if (listTrainingJobStagesRequest !== null && listTrainingJobStagesRequest !== undefined) {
                if (listTrainingJobStagesRequest instanceof ListTrainingJobStagesRequest) {
                    trainingJobId = listTrainingJobStagesRequest.trainingJobId;
                } else {
                    trainingJobId = listTrainingJobStagesRequest['training_job_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling listTrainingJobStages.');
            }

            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询训练作业调度的实例IP、节点IP等信息，可通过schedule_count参数查询具体的某一次调度的实例信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrainingJobTasks(listTrainingJobTasksRequest?: ListTrainingJobTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let trainingJobId;
            
            let scheduleCount;

            if (listTrainingJobTasksRequest !== null && listTrainingJobTasksRequest !== undefined) {
                if (listTrainingJobTasksRequest instanceof ListTrainingJobTasksRequest) {
                    trainingJobId = listTrainingJobTasksRequest.trainingJobId;
                    scheduleCount = listTrainingJobTasksRequest.scheduleCount;
                } else {
                    trainingJobId = listTrainingJobTasksRequest['training_job_id'];
                    scheduleCount = listTrainingJobTasksRequest['schedule_count'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling listTrainingJobTasks.');
            }
            if (scheduleCount !== null && scheduleCount !== undefined) {
                localVarQueryParameter['schedule_count'] = scheduleCount;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定查询条件查询用户创建的训练作业列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrainingJobs(listTrainingJobsRequest?: ListTrainingJobsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/training-job-searches",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listTrainingJobsRequest !== null && listTrainingJobsRequest !== undefined) {
                if (listTrainingJobsRequest instanceof ListTrainingJobsRequest) {
                    body = listTrainingJobsRequest.body
                } else {
                    body = listTrainingJobsRequest['body'];
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
         * 查询专属资源池作业列表接口用于获取指定专属资源池中的作业信息列表。该接口适用于以下场景：当需要监控专属资源池的资源使用情况、查看作业状态或管理资源分配时，用户可通过此接口获取专属资源池中作业的详细信息。使用该接口的前提条件是专属资源池已存在且用户具有相应的权限（如管理员权限或资源管理权限）。调用接口成功后，系统将返回专属资源池中作业的列表，包括作业ID、名称、状态、资源使用情况等详细信息。若专属资源池不存在、用户无权限操作或资源池当前不可用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkloads(listWorkloadsRequest?: ListWorkloadsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/workloads",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolName;
            
            let hostip;
            
            let type;
            
            let status;
            
            let sort;
            
            let ascend;
            
            let offset;
            
            let limit;

            if (listWorkloadsRequest !== null && listWorkloadsRequest !== undefined) {
                if (listWorkloadsRequest instanceof ListWorkloadsRequest) {
                    poolName = listWorkloadsRequest.poolName;
                    hostip = listWorkloadsRequest.hostip;
                    type = listWorkloadsRequest.type;
                    status = listWorkloadsRequest.status;
                    sort = listWorkloadsRequest.sort;
                    ascend = listWorkloadsRequest.ascend;
                    offset = listWorkloadsRequest.offset;
                    limit = listWorkloadsRequest.limit;
                } else {
                    poolName = listWorkloadsRequest['pool_name'];
                    hostip = listWorkloadsRequest['hostip'];
                    type = listWorkloadsRequest['type'];
                    status = listWorkloadsRequest['status'];
                    sort = listWorkloadsRequest['sort'];
                    ascend = listWorkloadsRequest['ascend'];
                    offset = listWorkloadsRequest['offset'];
                    limit = listWorkloadsRequest['limit'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling listWorkloads.');
            }
            if (hostip !== null && hostip !== undefined) {
                localVarQueryParameter['hostip'] = hostip;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (ascend !== null && ascend !== undefined) {
                localVarQueryParameter['ascend'] = ascend;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作空间列表，响应消息体中包含详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkspace(listWorkspaceRequest?: ListWorkspaceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sortBy;
            
            let order;
            
            let enterpriseProjectId;
            
            let name;
            
            let filterAccessible;

            if (listWorkspaceRequest !== null && listWorkspaceRequest !== undefined) {
                if (listWorkspaceRequest instanceof ListWorkspaceRequest) {
                    offset = listWorkspaceRequest.offset;
                    limit = listWorkspaceRequest.limit;
                    sortBy = listWorkspaceRequest.sortBy;
                    order = listWorkspaceRequest.order;
                    enterpriseProjectId = listWorkspaceRequest.enterpriseProjectId;
                    name = listWorkspaceRequest.name;
                    filterAccessible = listWorkspaceRequest.filterAccessible;
                } else {
                    offset = listWorkspaceRequest['offset'];
                    limit = listWorkspaceRequest['limit'];
                    sortBy = listWorkspaceRequest['sort_by'];
                    order = listWorkspaceRequest['order'];
                    enterpriseProjectId = listWorkspaceRequest['enterprise_project_id'];
                    name = listWorkspaceRequest['name'];
                    filterAccessible = listWorkspaceRequest['filter_accessible'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (filterAccessible !== null && filterAccessible !== undefined) {
                localVarQueryParameter['filter_accessible'] = filterAccessible;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于修改添加内网自定义URL请求，适用于需要同时更新或者添加多个内网接入点的场景。调用此接口前，确保调用者具备相应的更新权限，提供需要更新的参数，如IP地址、VPC ID、子网ID等。指定的内网接入点将添加新的配置，新的配置将对相关服务生效。如果提供的内网接入点ID列表中包含无效或不存在的ID，接口将返回相应的异常信息，提示用户检查ID的有效性，如果提供的更新参数不符合格式要求（如IP地址格式不正确），接口将返回相应的异常信息，提示用户检查参数的有效性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyInferIntranetConnections(modifyInferIntranetConnectionsRequest?: ModifyInferIntranetConnectionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/intranet-connection/{id}/modify",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (modifyInferIntranetConnectionsRequest !== null && modifyInferIntranetConnectionsRequest !== undefined) {
                if (modifyInferIntranetConnectionsRequest instanceof ModifyInferIntranetConnectionsRequest) {
                    id = modifyInferIntranetConnectionsRequest.id;
                    body = modifyInferIntranetConnectionsRequest.body
                } else {
                    id = modifyInferIntranetConnectionsRequest['id'];
                    body = modifyInferIntranetConnectionsRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling modifyInferIntranetConnections.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 训练事件上报给业务面
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        notifyTrainingJobInformation(notifyTrainingJobInformationRequest?: NotifyTrainingJobInformationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/tasks/{task_id}/reports/{report_type}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trainingJobId;
            
            let taskId;
            
            let reportType;

            if (notifyTrainingJobInformationRequest !== null && notifyTrainingJobInformationRequest !== undefined) {
                if (notifyTrainingJobInformationRequest instanceof NotifyTrainingJobInformationRequest) {
                    trainingJobId = notifyTrainingJobInformationRequest.trainingJobId;
                    taskId = notifyTrainingJobInformationRequest.taskId;
                    reportType = notifyTrainingJobInformationRequest.reportType;
                    body = notifyTrainingJobInformationRequest.body
                } else {
                    trainingJobId = notifyTrainingJobInformationRequest['training_job_id'];
                    taskId = notifyTrainingJobInformationRequest['task_id'];
                    reportType = notifyTrainingJobInformationRequest['report_type'];
                    body = notifyTrainingJobInformationRequest['body'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling notifyTrainingJobInformation.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling notifyTrainingJobInformation.');
            }
            if (reportType === null || reportType === undefined) {
            throw new RequiredError('reportType','Required parameter reportType was null or undefined when calling notifyTrainingJobInformation.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'training_job_id': trainingJobId,'task_id': taskId,'report_type': reportType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新网络资源接口用于修改指定网络资源的配置信息。该接口适用于以下场景：当需要调整网络资源的属性、修复配置错误或优化资源设置时，用户可通过此接口更新指定网络资源的详细信息。使用该接口的前提条件是网络资源已存在且用户具有管理员权限。更新操作完成后，指定网络资源的配置信息将被成功修改，系统将反映最新的资源状态和属性。若指定的网络资源不存在、用户无权限操作或输入参数有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        patchNetwork(patchNetworkRequest?: PatchNetworkRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/networks/{network_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let networkName;

            if (patchNetworkRequest !== null && patchNetworkRequest !== undefined) {
                if (patchNetworkRequest instanceof PatchNetworkRequest) {
                    networkName = patchNetworkRequest.networkName;
                    body = patchNetworkRequest.body
                } else {
                    networkName = patchNetworkRequest['network_name'];
                    body = patchNetworkRequest['body'];
                }
            }

        
            if (networkName === null || networkName === undefined) {
            throw new RequiredError('networkName','Required parameter networkName was null or undefined when calling patchNetwork.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'network_name': networkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新节点池接口用于修改指定节点池的配置信息。该接口适用于以下场景：当需要扩展节点池容量、调整节点规格、优化资源分配或修复节点池配置时，用户可通过此接口更新节点池的相关信息。使用该接口的前提条件是节点池已存在且用户具有管理员权限。更新操作完成后，节点池的配置将被更新，包括节点数量、规格、网络配置等参数。若节点池不存在、用户无权限操作或配置参数错误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        patchNodePool(patchNodePoolRequest?: PatchNodePoolRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/{project_id}/pools/{pool_name}/nodepools/{nodepool_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;
            
            let nodepoolName;

            if (patchNodePoolRequest !== null && patchNodePoolRequest !== undefined) {
                if (patchNodePoolRequest instanceof PatchNodePoolRequest) {
                    poolName = patchNodePoolRequest.poolName;
                    nodepoolName = patchNodePoolRequest.nodepoolName;
                    body = patchNodePoolRequest.body
                } else {
                    poolName = patchNodePoolRequest['pool_name'];
                    nodepoolName = patchNodePoolRequest['nodepool_name'];
                    body = patchNodePoolRequest['body'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling patchNodePool.');
            }
            if (nodepoolName === null || nodepoolName === undefined) {
            throw new RequiredError('nodepoolName','Required parameter nodepoolName was null or undefined when calling patchNodePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName,'nodepool_name': nodepoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源池接口用于修改指定资源池的配置和容量。该接口适用于以下场景：当资源池需要扩展容量、调整配置或优化性能时，用户可通过此接口更新资源池的相关信息。使用该接口的前提条件是资源池已存在且用户具有管理员权限。更新操作完成后，资源池的配置和容量将被更新，相关资源和配置也将被调整。若资源池不存在、用户无权限操作或资源池处于不可更新状态，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        patchPool(patchPoolRequest?: PatchPoolRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/{project_id}/pools/{pool_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let poolName;
            
            let xModelArtsUserID;

            if (patchPoolRequest !== null && patchPoolRequest !== undefined) {
                if (patchPoolRequest instanceof PatchPoolRequest) {
                    poolName = patchPoolRequest.poolName;
                    body = patchPoolRequest.body
                    xModelArtsUserID = patchPoolRequest.xModelArtsUserID;
                } else {
                    poolName = patchPoolRequest['pool_name'];
                    body = patchPoolRequest['body'];
                    xModelArtsUserID = patchPoolRequest['X-ModelArts-User-ID'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling patchPool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xModelArtsUserID !== undefined && xModelArtsUserID !== null) {
                localVarHeaderParameter['X-ModelArts-User-ID'] = String(xModelArtsUserID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 注册自定义镜像接口用于将用户自定义的镜像注册到ModelArts镜像管理。该接口适用于以下场景：当用户需要将自己的自定义镜像（如特定算法环境、工具链或配置）集成到ModelArts平台时，可通过此接口将镜像注册到镜像管理中以便后续使用。使用该接口的前提条件是用户具备ModelArts镜像管理权限，并且需要提供有效的镜像地址和符合要求的镜像格式。注册操作完成后，自定义镜像将被成功添加到ModelArts镜像列表中，用户可以在后续任务中选择使用该镜像。若镜像地址无效、镜像格式不符合要求或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerImage(registerImageRequest?: RegisterImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/images",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (registerImageRequest !== null && registerImageRequest !== undefined) {
                if (registerImageRequest instanceof RegisterImageRequest) {
                    body = registerImageRequest.body
                } else {
                    body = registerImageRequest['body'];
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
         * 根据算法id查询指定算法。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlgorithmByUuid(showAlgorithmByUuidRequest?: ShowAlgorithmByUuidRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/algorithms/{algorithm_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let algorithmId;

            if (showAlgorithmByUuidRequest !== null && showAlgorithmByUuidRequest !== undefined) {
                if (showAlgorithmByUuidRequest instanceof ShowAlgorithmByUuidRequest) {
                    algorithmId = showAlgorithmByUuidRequest.algorithmId;
                } else {
                    algorithmId = showAlgorithmByUuidRequest['algorithm_id'];
                }
            }

        
            if (algorithmId === null || algorithmId === undefined) {
            throw new RequiredError('algorithmId','Required parameter algorithmId was null or undefined when calling showAlgorithmByUuid.');
            }

            options.pathParams = { 'algorithm_id': algorithmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询授权模式接口用于获取指定资源或功能的授权方式和权限配置信息。该接口适用于以下场景：当系统管理员需要查看资源的访问权限设置、开发者需要验证授权策略配置是否正确，或安全审计人员需要检查授权配置是否符合安全规范时，可通过此接口查询授权模式的详细信息。使用该接口的前提条件是用户具有查询权限且目标资源或功能的授权模式已配置。调用成功后，接口将返回授权模式的类型、规则及权限范围等详细信息。若用户无权限访问该接口，或目标资源的授权模式未配置，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuthmodeDetail() {
            const options = {
                method: "GET",
                url: "/v1/auth-mode",
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
         * 获取某个超参敏感度分析图像的保存路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoSearchParamAnalysisResultPath(showAutoSearchParamAnalysisResultPathRequest?: ShowAutoSearchParamAnalysisResultPathRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/autosearch-parameter-analysis/{parameter_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let parameterName;
            
            let trainingJobId;

            if (showAutoSearchParamAnalysisResultPathRequest !== null && showAutoSearchParamAnalysisResultPathRequest !== undefined) {
                if (showAutoSearchParamAnalysisResultPathRequest instanceof ShowAutoSearchParamAnalysisResultPathRequest) {
                    parameterName = showAutoSearchParamAnalysisResultPathRequest.parameterName;
                    trainingJobId = showAutoSearchParamAnalysisResultPathRequest.trainingJobId;
                } else {
                    parameterName = showAutoSearchParamAnalysisResultPathRequest['parameter_name'];
                    trainingJobId = showAutoSearchParamAnalysisResultPathRequest['training_job_id'];
                }
            }

        
            if (parameterName === null || parameterName === undefined) {
            throw new RequiredError('parameterName','Required parameter parameterName was null or undefined when calling showAutoSearchParamAnalysisResultPath.');
            }
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showAutoSearchParamAnalysisResultPath.');
            }

            options.pathParams = { 'parameter_name': parameterName,'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取超参敏感度分析结果的汇总表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoSearchParamsAnalysis(showAutoSearchParamsAnalysisRequest?: ShowAutoSearchParamsAnalysisRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/autosearch-parameter-analysis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;

            if (showAutoSearchParamsAnalysisRequest !== null && showAutoSearchParamsAnalysisRequest !== undefined) {
                if (showAutoSearchParamsAnalysisRequest instanceof ShowAutoSearchParamsAnalysisRequest) {
                    trainingJobId = showAutoSearchParamsAnalysisRequest.trainingJobId;
                } else {
                    trainingJobId = showAutoSearchParamsAnalysisRequest['training_job_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showAutoSearchParamsAnalysis.');
            }

            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据传入的trial_id，查询指定trial的搜索结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoSearchPerTrial(showAutoSearchPerTrialRequest?: ShowAutoSearchPerTrialRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/autosearch-trials/{trial_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;
            
            let trialId;

            if (showAutoSearchPerTrialRequest !== null && showAutoSearchPerTrialRequest !== undefined) {
                if (showAutoSearchPerTrialRequest instanceof ShowAutoSearchPerTrialRequest) {
                    trainingJobId = showAutoSearchPerTrialRequest.trainingJobId;
                    trialId = showAutoSearchPerTrialRequest.trialId;
                } else {
                    trainingJobId = showAutoSearchPerTrialRequest['training_job_id'];
                    trialId = showAutoSearchPerTrialRequest['trial_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showAutoSearchPerTrial.');
            }
            if (trialId === null || trialId === undefined) {
            throw new RequiredError('trialId','Required parameter trialId was null or undefined when calling showAutoSearchPerTrial.');
            }

            options.pathParams = { 'training_job_id': trainingJobId,'trial_id': trialId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提前终止自动化搜索作业的某个trial。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoSearchTrialEarlyStop(showAutoSearchTrialEarlyStopRequest?: ShowAutoSearchTrialEarlyStopRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/autosearch-trial-earlystop/{trial_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;
            
            let trialId;

            if (showAutoSearchTrialEarlyStopRequest !== null && showAutoSearchTrialEarlyStopRequest !== undefined) {
                if (showAutoSearchTrialEarlyStopRequest instanceof ShowAutoSearchTrialEarlyStopRequest) {
                    trainingJobId = showAutoSearchTrialEarlyStopRequest.trainingJobId;
                    trialId = showAutoSearchTrialEarlyStopRequest.trialId;
                } else {
                    trainingJobId = showAutoSearchTrialEarlyStopRequest['training_job_id'];
                    trialId = showAutoSearchTrialEarlyStopRequest['trial_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showAutoSearchTrialEarlyStop.');
            }
            if (trialId === null || trialId === undefined) {
            throw new RequiredError('trialId','Required parameter trialId was null or undefined when calling showAutoSearchTrialEarlyStop.');
            }

            options.pathParams = { 'training_job_id': trainingJobId,'trial_id': trialId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询超参搜索所有trial的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoSearchTrials(showAutoSearchTrialsRequest?: ShowAutoSearchTrialsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/autosearch-trials",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let trainingJobId;
            
            let limit;
            
            let offset;

            if (showAutoSearchTrialsRequest !== null && showAutoSearchTrialsRequest !== undefined) {
                if (showAutoSearchTrialsRequest instanceof ShowAutoSearchTrialsRequest) {
                    trainingJobId = showAutoSearchTrialsRequest.trainingJobId;
                    limit = showAutoSearchTrialsRequest.limit;
                    offset = showAutoSearchTrialsRequest.offset;
                } else {
                    trainingJobId = showAutoSearchTrialsRequest['training_job_id'];
                    limit = showAutoSearchTrialsRequest['limit'];
                    offset = showAutoSearchTrialsRequest['offset'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showAutoSearchTrials.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取自动化搜索作业yaml模板的内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoSearchYamlTemplateContent(showAutoSearchYamlTemplateContentRequest?: ShowAutoSearchYamlTemplateContentRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/autosearch/yaml-templates/{algorithm_type}/{algorithm_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let algorithmType;
            
            let algorithmName;

            if (showAutoSearchYamlTemplateContentRequest !== null && showAutoSearchYamlTemplateContentRequest !== undefined) {
                if (showAutoSearchYamlTemplateContentRequest instanceof ShowAutoSearchYamlTemplateContentRequest) {
                    algorithmType = showAutoSearchYamlTemplateContentRequest.algorithmType;
                    algorithmName = showAutoSearchYamlTemplateContentRequest.algorithmName;
                } else {
                    algorithmType = showAutoSearchYamlTemplateContentRequest['algorithm_type'];
                    algorithmName = showAutoSearchYamlTemplateContentRequest['algorithm_name'];
                }
            }

        
            if (algorithmType === null || algorithmType === undefined) {
            throw new RequiredError('algorithmType','Required parameter algorithmType was null or undefined when calling showAutoSearchYamlTemplateContent.');
            }
            if (algorithmName === null || algorithmName === undefined) {
            throw new RequiredError('algorithmName','Required parameter algorithmName was null or undefined when calling showAutoSearchYamlTemplateContent.');
            }

            options.pathParams = { 'algorithm_type': algorithmType,'algorithm_name': algorithmName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取自动化搜索作业yaml模板的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoSearchYamlTemplatesInfo() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/autosearch/yaml-templates",
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
         * 获取动态挂载OBS实例详情接口用于获取已挂载到运行中Notebook实例中的存储实例的详细信息。
         * 
         * 适用场景：用户需要查看Notebook实例中已挂载的存储实例的详细信息时，可通过此接口获取。使用该接口的前提条件是用户已登录系统并具有访问目标Notebook实例的权限。调用该接口后，系统将返回指定Notebook实例中挂载的存储实例的详细信息。若用户无权限访问指定实例，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDynamicStorage(showDynamicStorageRequest?: ShowDynamicStorageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks/{instance_id}/storage/{storage_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let storageId;

            if (showDynamicStorageRequest !== null && showDynamicStorageRequest !== undefined) {
                if (showDynamicStorageRequest instanceof ShowDynamicStorageRequest) {
                    instanceId = showDynamicStorageRequest.instanceId;
                    storageId = showDynamicStorageRequest.storageId;
                } else {
                    instanceId = showDynamicStorageRequest['instance_id'];
                    storageId = showDynamicStorageRequest['storage_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDynamicStorage.');
            }
            if (storageId === null || storageId === undefined) {
            throw new RequiredError('storageId','Required parameter storageId was null or undefined when calling showDynamicStorage.');
            }

            options.pathParams = { 'instance_id': instanceId,'storage_id': storageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像详情接口用于查询镜像的详细信息。该接口适用于以下场景：当用户需要了解特定镜像的详细信息（如镜像名称、版本、创建时间、大小、状态等）或对镜像执行一些操作时，可通过此接口获取镜像的详细信息。使用该接口的前提条件是用户具备镜像管理权限，并且待查询镜像有效且存在。查询操作完成后，将返回镜像的详细信息，包括镜像ID、名称、版本、创建时间、大小以及状态等。若镜像不存在或用户无权限访问，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImage(showImageRequest?: ShowImageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/images/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showImageRequest !== null && showImageRequest !== undefined) {
                if (showImageRequest instanceof ShowImageRequest) {
                    id = showImageRequest.id;
                } else {
                    id = showImageRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showImage.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过服务ID、部署ID查询对应的部署详情，调用者可以通过有效的服务ID、部署ID获取部署的名称、状态、服务实例、配置参数等详细信息。调用者需具有足够的权限，且输入的服务ID、部署ID必须有效。查询成功时返回部署详细信息，查询失败时返回特定的错误码和错误信息。若服务ID或者部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInferDeployment(showInferDeploymentRequest?: ShowInferDeploymentRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (showInferDeploymentRequest !== null && showInferDeploymentRequest !== undefined) {
                if (showInferDeploymentRequest instanceof ShowInferDeploymentRequest) {
                    serviceId = showInferDeploymentRequest.serviceId;
                    deploymentId = showInferDeploymentRequest.deploymentId;
                } else {
                    serviceId = showInferDeploymentRequest['service_id'];
                    deploymentId = showInferDeploymentRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showInferDeployment.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling showInferDeployment.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于获取指定服务部署版本的详细信息，适用于需要查看特定版本的详细配置和状态的场景，例如确认版本的功能、性能参数或发布历史。请求需包含有效的服务ID、部署ID及版本号。用户必须具有对目标服务部署的查看权限。请求成功后，返回该版本的详细信息，包括版本号、发布时间、配置参数和状态。若服务ID、部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；若服务部署无该版本信息，则返回404 Not Found。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInferDeploymentVersion(showInferDeploymentVersionRequest?: ShowInferDeploymentVersionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/versions/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let version;
            
            let deploymentId;

            if (showInferDeploymentVersionRequest !== null && showInferDeploymentVersionRequest !== undefined) {
                if (showInferDeploymentVersionRequest instanceof ShowInferDeploymentVersionRequest) {
                    serviceId = showInferDeploymentVersionRequest.serviceId;
                    version = showInferDeploymentVersionRequest.version;
                    deploymentId = showInferDeploymentVersionRequest.deploymentId;
                } else {
                    serviceId = showInferDeploymentVersionRequest['service_id'];
                    version = showInferDeploymentVersionRequest['version'];
                    deploymentId = showInferDeploymentVersionRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showInferDeploymentVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showInferDeploymentVersion.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling showInferDeploymentVersion.');
            }

            options.pathParams = { 'service_id': serviceId,'version': version,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过服务ID查询对应的服务详情，调用者可以通过有效的服务ID获取服务的名称、状态、服务实例、配置参数等详细信息。调用者需具有足够的权限，且输入的服务ID必须有效。查询成功时返回服务详细信息，查询失败时返回特定的错误码和错误信息。若服务ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInferService(showInferServiceRequest?: ShowInferServiceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;

            if (showInferServiceRequest !== null && showInferServiceRequest !== undefined) {
                if (showInferServiceRequest instanceof ShowInferServiceRequest) {
                    serviceId = showInferServiceRequest.serviceId;
                } else {
                    serviceId = showInferServiceRequest['service_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showInferService.');
            }

            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口允许用户通过指定资源池的ID来查询纳管资源池的详细信息，包括实例ID、名称、Flavor规格、实例状态和实例可访问的URL。此功能适用于需要监控或管理云资源的用户，使用该接口前，用户需确保已拥有访问权限及正确的资源池ID。执行成功后，用户将获得所需的实例详情，可用于进一步的资源管理和配置。如果资源池ID无效或用户没有相应的访问权限，接口将返回错误信息，如404 Not Found或401 Unauthorized。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInferServiceCluster(showInferServiceClusterRequest?: ShowInferServiceClusterRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/clusters/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let xUserToken;

            if (showInferServiceClusterRequest !== null && showInferServiceClusterRequest !== undefined) {
                if (showInferServiceClusterRequest instanceof ShowInferServiceClusterRequest) {
                    id = showInferServiceClusterRequest.id;
                    xUserToken = showInferServiceClusterRequest.xUserToken;
                } else {
                    id = showInferServiceClusterRequest['id'];
                    xUserToken = showInferServiceClusterRequest['X-User-Token'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showInferServiceCluster.');
            }
            if (xUserToken !== undefined && xUserToken !== null) {
                localVarHeaderParameter['X-User-Token'] = String(xUserToken);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要获取资源（如模型、数据集、服务等）的标签信息的场景，例如在资源管理或分类中，用户可以通过查询标签来了解资源的用途、状态或其他属性。通过调用此接口，用户可以通过资源ID获取指定资源的所有标签列表。用户必须具有足够的权限，且目标资源需存在。查询成功后，返回资源的标签列表；若失败，返回具体的错误信息。常见异常包括权限验证错误、资源不存在错误和参数验证错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInferServiceTags(showInferServiceTagsRequest?: ShowInferServiceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/modelarts-service-v2/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let workspaceId;

            if (showInferServiceTagsRequest !== null && showInferServiceTagsRequest !== undefined) {
                if (showInferServiceTagsRequest instanceof ShowInferServiceTagsRequest) {
                    resourceId = showInferServiceTagsRequest.resourceId;
                    workspaceId = showInferServiceTagsRequest.workspaceId;
                } else {
                    resourceId = showInferServiceTagsRequest['resource_id'];
                    workspaceId = showInferServiceTagsRequest['workspace_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showInferServiceTags.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络资源接口用于获取指定网络资源的详情信息。该接口适用于以下场景：当用户需要查看特定网络资源的详细配置、状态或属性时，可通过此接口查询指定网络资源的详细信息。使用该接口的前提条件是用户具有相应的权限，并且指定的网络资源已存在于系统中。查询操作完成后，接口将返回指定网络资源的详细信息，包括资源ID、类型、状态、配置参数等。若指定的网络资源不存在、用户无权限操作或输入参数有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNetwork(showNetworkRequest?: ShowNetworkRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/networks/{network_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let networkName;

            if (showNetworkRequest !== null && showNetworkRequest !== undefined) {
                if (showNetworkRequest instanceof ShowNetworkRequest) {
                    networkName = showNetworkRequest.networkName;
                } else {
                    networkName = showNetworkRequest['network_name'];
                }
            }

        
            if (networkName === null || networkName === undefined) {
            throw new RequiredError('networkName','Required parameter networkName was null or undefined when calling showNetwork.');
            }

            options.pathParams = { 'network_name': networkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络可用的IP接口用于查找指定网络中未被占用的IP地址。该接口适用于以下场景：在网络规划、资源分配或故障排查时，用户需要快速获取可用的IP地址信息。使用该接口的前提条件是用户具有访问目标网络的权限，并且需要提供有效的网络范围（如子网掩码或IP段）。查询完成后，接口将返回指定网络中未被占用的IP地址列表，用户可以根据结果进行IP地址的分配或进一步操作。若网络不可达、权限不足或网络范围有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNetworkAvailableIp(showNetworkAvailableIpRequest?: ShowNetworkAvailableIpRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/networks/{network_name}/network-ip-availabilities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let networkName;
            
            let networkId;

            if (showNetworkAvailableIpRequest !== null && showNetworkAvailableIpRequest !== undefined) {
                if (showNetworkAvailableIpRequest instanceof ShowNetworkAvailableIpRequest) {
                    networkName = showNetworkAvailableIpRequest.networkName;
                    networkId = showNetworkAvailableIpRequest.networkId;
                } else {
                    networkName = showNetworkAvailableIpRequest['network_name'];
                    networkId = showNetworkAvailableIpRequest['network_id'];
                }
            }

        
            if (networkName === null || networkName === undefined) {
            throw new RequiredError('networkName','Required parameter networkName was null or undefined when calling showNetworkAvailableIp.');
            }
            if (networkId === null || networkId === undefined) {
                throw new RequiredError('networkId','Required parameter networkId was null or undefined when calling showNetworkAvailableIp.');
            }
            if (networkId !== null && networkId !== undefined) {
                localVarQueryParameter['network_id'] = networkId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'network_name': networkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询节点配置模板接口用于获取指定节点配置模板的详细信息。该接口适用于以下场景：当用户需要查看节点配置模板的内容、管理节点配置或进行相关操作时，可通过此接口获取指定节点配置模板的详细信息。使用该接口的前提条件是节点配置模板已存在且用户具有相应的访问权限。调用该接口后，系统将返回指定节点配置模板的详细信息，包括模板名称、版本、配置参数及描述等。若节点配置模板不存在或用户无权限访问，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNodeConfigTemplate(showNodeConfigTemplateRequest?: ShowNodeConfigTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/nodeconfigtemplates/{nodeconfigtemplate_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let nodeconfigtemplateName;

            if (showNodeConfigTemplateRequest !== null && showNodeConfigTemplateRequest !== undefined) {
                if (showNodeConfigTemplateRequest instanceof ShowNodeConfigTemplateRequest) {
                    nodeconfigtemplateName = showNodeConfigTemplateRequest.nodeconfigtemplateName;
                } else {
                    nodeconfigtemplateName = showNodeConfigTemplateRequest['nodeconfigtemplate_name'];
                }
            }

        
            if (nodeconfigtemplateName === null || nodeconfigtemplateName === undefined) {
            throw new RequiredError('nodeconfigtemplateName','Required parameter nodeconfigtemplateName was null or undefined when calling showNodeConfigTemplate.');
            }

            options.pathParams = { 'nodeconfigtemplate_name': nodeconfigtemplateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定节点池详情接口用于获取指定节点池的详细信息。该接口适用于以下场景：当需要查看节点池的配置、状态、资源使用情况或管理节点池时，用户可通过此接口获取节点池的详细信息。使用该接口的前提条件是节点池已存在且用户具有访问该节点池的权限。调用接口成功后，系统将返回节点池的详细信息，包括节点池ID、名称、节点数量、状态、创建时间、配置参数等。若节点池不存在、用户无权限访问或节点池当前不可用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNodePool(showNodePoolRequest?: ShowNodePoolRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/nodepools/{nodepool_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolName;
            
            let nodepoolName;
            
            let _continue;
            
            let limit;

            if (showNodePoolRequest !== null && showNodePoolRequest !== undefined) {
                if (showNodePoolRequest instanceof ShowNodePoolRequest) {
                    poolName = showNodePoolRequest.poolName;
                    nodepoolName = showNodePoolRequest.nodepoolName;
                    _continue = showNodePoolRequest._continue;
                    limit = showNodePoolRequest.limit;
                } else {
                    poolName = showNodePoolRequest['pool_name'];
                    nodepoolName = showNodePoolRequest['nodepool_name'];
                    _continue = showNodePoolRequest['continue'];
                    limit = showNodePoolRequest['limit'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling showNodePool.');
            }
            if (nodepoolName === null || nodepoolName === undefined) {
            throw new RequiredError('nodepoolName','Required parameter nodepoolName was null or undefined when calling showNodePool.');
            }
            if (_continue !== null && _continue !== undefined) {
                localVarQueryParameter['continue'] = _continue;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_name': poolName,'nodepool_name': nodepoolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询训练作业指定任务的日志（OBS临时链接，有效期5分钟），可全量查看或直接下载。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showObsUrlOfTrainingJobLogs(showObsUrlOfTrainingJobLogsRequest?: ShowObsUrlOfTrainingJobLogsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/tasks/{task_id}/logs/url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;
            
            let taskId;

            if (showObsUrlOfTrainingJobLogsRequest !== null && showObsUrlOfTrainingJobLogsRequest !== undefined) {
                if (showObsUrlOfTrainingJobLogsRequest instanceof ShowObsUrlOfTrainingJobLogsRequest) {
                    trainingJobId = showObsUrlOfTrainingJobLogsRequest.trainingJobId;
                    taskId = showObsUrlOfTrainingJobLogsRequest.taskId;
                } else {
                    trainingJobId = showObsUrlOfTrainingJobLogsRequest['training_job_id'];
                    taskId = showObsUrlOfTrainingJobLogsRequest['task_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showObsUrlOfTrainingJobLogs.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showObsUrlOfTrainingJobLogs.');
            }

            options.pathParams = { 'training_job_id': trainingJobId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询订单详情接口用于获取指定订单的详细信息。该接口适用于以下场景：当需要查看订单的状态、金额、商品信息或处理订单相关问题时，用户可通过此接口获取订单的详细数据。使用该接口的前提条件是订单已存在且用户具有访问该订单的权限。调用接口成功后，系统将返回订单的详细信息，包括订单号、商品列表、金额、支付状态、下单时间等。若订单不存在、用户无权限访问或订单信息未正确配置，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrder(showOrderRequest?: ShowOrderRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/orders/{order_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let orderName;

            if (showOrderRequest !== null && showOrderRequest !== undefined) {
                if (showOrderRequest instanceof ShowOrderRequest) {
                    orderName = showOrderRequest.orderName;
                } else {
                    orderName = showOrderRequest['order_name'];
                }
            }

        
            if (orderName === null || orderName === undefined) {
            throw new RequiredError('orderName','Required parameter orderName was null or undefined when calling showOrder.');
            }

            options.pathParams = { 'order_name': orderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询OS的配置参数接口用于获取ModelArts OS服务的配置参数，如网络网段、用户资源配额等。该接口适用于以下场景：当需要了解当前ModelArts OS服务的网络配置、资源分配情况或进行系统管理时，用户可通过此接口查询相关的配置参数。使用该接口的前提条件是用户具有访问ModelArts OS服务的权限，且服务处于正常运行状态。查询操作完成后，用户将获得指定的配置参数信息，便于进行后续的资源规划或系统优化。若用户无权限访问、服务不可用或请求参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOsConfig() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/os-user-config",
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
         * 查询OS配额接口用于获取ModelArts OS服务中部分资源的配额信息，如资源池配额、网络配额等。该接口适用于以下场景：当需要了解资源池或网络资源的使用限制、规划资源分配或监控资源使用情况时，用户可通过此接口获取相关配额信息。使用该接口的前提条件是ModelArts OS服务已部署且用户具有相应的权限（如管理员权限或资源管理权限）。调用接口成功后，系统将返回资源池配额、网络配额等详细信息，帮助用户更好地进行资源规划和管理。若用户无权限访问该接口、服务不可用或配额信息未配置，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOsQuota() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/quotas",
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
         * 查询插件模板接口用于获取指定插件模板的详细信息。该接口适用于以下场景：当需要了解特定插件模板的配置、功能或使用方式时，用户可通过此接口查询插件模板的详细信息。使用该接口的前提条件是插件模板已存在且用户具有访问权限。查询操作完成后，用户将获得指定插件模板的详细信息，包括模板的配置参数、功能描述等，便于后续的插件开发或配置管理。若插件模板不存在或用户无权限访问，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPluginTemplate(showPluginTemplateRequest?: ShowPluginTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/plugintemplates/{plugintemplate_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let plugintemplateName;

            if (showPluginTemplateRequest !== null && showPluginTemplateRequest !== undefined) {
                if (showPluginTemplateRequest instanceof ShowPluginTemplateRequest) {
                    plugintemplateName = showPluginTemplateRequest.plugintemplateName;
                } else {
                    plugintemplateName = showPluginTemplateRequest['plugintemplate_name'];
                }
            }

        
            if (plugintemplateName === null || plugintemplateName === undefined) {
            throw new RequiredError('plugintemplateName','Required parameter plugintemplateName was null or undefined when calling showPluginTemplate.');
            }

            options.pathParams = { 'plugintemplate_name': plugintemplateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源池信息接口用于获取指定资源池的详细信息。该接口适用于以下场景：当用户需要查看特定资源池的详细配置、状态、资源使用情况或进行资源管理时，可通过此接口查询指定资源池的详细信息。使用该接口的前提条件是用户具有相应的权限，并且指定的资源池已存在于系统中。查询操作完成后，接口将返回资源池的详细信息，包括资源池ID、名称、类型、状态、资源配额、利用率等。若指定的资源池不存在、用户无权限操作或输入参数有误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPool(showPoolRequest?: ShowPoolRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;
            
            let xModelArtsUserID;

            if (showPoolRequest !== null && showPoolRequest !== undefined) {
                if (showPoolRequest instanceof ShowPoolRequest) {
                    poolName = showPoolRequest.poolName;
                    xModelArtsUserID = showPoolRequest.xModelArtsUserID;
                } else {
                    poolName = showPoolRequest['pool_name'];
                    xModelArtsUserID = showPoolRequest['X-ModelArts-User-ID'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling showPool.');
            }
            if (xModelArtsUserID !== undefined && xModelArtsUserID !== null) {
                localVarHeaderParameter['X-ModelArts-User-ID'] = String(xModelArtsUserID);
            }

            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资源池监控接口用于获取指定资源池的实时或历史监控信息。该接口适用于以下场景：当需要实时查看资源池的资源使用情况、性能状态或历史数据时，用户可通过此接口获取资源池的监控数据。使用该接口的前提条件是资源池已存在且用户具有管理员权限。调用接口成功后，系统将返回资源池的监控信息，包括资源使用率、性能指标及历史趋势等数据。若资源池不存在、用户无权限操作或资源池当前不可用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPoolMonitor(showPoolMonitorRequest?: ShowPoolMonitorRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/monitor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let poolName;
            
            let timeRange;
            
            let statistics;
            
            let period;

            if (showPoolMonitorRequest !== null && showPoolMonitorRequest !== undefined) {
                if (showPoolMonitorRequest instanceof ShowPoolMonitorRequest) {
                    poolName = showPoolMonitorRequest.poolName;
                    timeRange = showPoolMonitorRequest.timeRange;
                    statistics = showPoolMonitorRequest.statistics;
                    period = showPoolMonitorRequest.period;
                } else {
                    poolName = showPoolMonitorRequest['pool_name'];
                    timeRange = showPoolMonitorRequest['time_range'];
                    statistics = showPoolMonitorRequest['statistics'];
                    period = showPoolMonitorRequest['period'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling showPoolMonitor.');
            }
            if (timeRange !== null && timeRange !== undefined) {
                localVarQueryParameter['time_range'] = timeRange;
            }
            if (statistics !== null && statistics !== undefined) {
                localVarQueryParameter['statistics'] = statistics;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源池中的单个节点接口用于获取指定资源池内单个节点的详细信息。该接口适用于以下场景：当用户需要了解节点资源分配、详细信息时，可通过此接口获取节点的类型、状态、配置参数及关联服务等信息。使用该接口的前提条件是目标资源池已存在且用户具备查看权限，同时需提供有效的资源池标识符作为输入参数。接口调用后，系统将返回资源池中单个节点数据；若资源池不存在、用户权限不足或输入参数无效，接口将返回对应的错误信息（如404未找到资源池或403权限拒绝）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPoolNode(showPoolNodeRequest?: ShowPoolNodeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/nodes/{node_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;
            
            let nodeName;

            if (showPoolNodeRequest !== null && showPoolNodeRequest !== undefined) {
                if (showPoolNodeRequest instanceof ShowPoolNodeRequest) {
                    poolName = showPoolNodeRequest.poolName;
                    nodeName = showPoolNodeRequest.nodeName;
                } else {
                    poolName = showPoolNodeRequest['pool_name'];
                    nodeName = showPoolNodeRequest['node_name'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling showPoolNode.');
            }
            if (nodeName === null || nodeName === undefined) {
            throw new RequiredError('nodeName','Required parameter nodeName was null or undefined when calling showPoolNode.');
            }

            options.pathParams = { 'pool_name': poolName,'node_name': nodeName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源池节点自定义配置接口用于获取指定资源池节点的自定义配置信息。该接口适用于以下场景：当需要查看资源池节点的详细配置、优化资源分配或管理节点资源时，用户可通过此接口获取节点的自定义配置数据。使用该接口的前提条件是资源池节点已存在且用户具有访问该节点的权限。调用接口成功后，系统将返回资源池节点的自定义配置信息，包括硬件规格、软件环境、网络设置等详细参数。若资源池节点不存在、用户无权限访问或节点配置信息未正确配置，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPoolNodeConfig(showPoolNodeConfigRequest?: ShowPoolNodeConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/node-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;

            if (showPoolNodeConfigRequest !== null && showPoolNodeConfigRequest !== undefined) {
                if (showPoolNodeConfigRequest instanceof ShowPoolNodeConfigRequest) {
                    poolName = showPoolNodeConfigRequest.poolName;
                } else {
                    poolName = showPoolNodeConfigRequest['pool_name'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling showPoolNodeConfig.');
            }

            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源池节点自定义配置模板接口用于获取节点配置模板的结构定义与参数规范。该接口适用于以下场景：当需要了解节点自定义配置的模板结构（如参数字段、校验规则、示例值）、验证配置模板是否符合规范或进行配置模板选型时，用户可通过此接口获取模板的元数据（如参数说明、类型限制、依赖关系等）。使用该接口的前提条件是目标配置模板必须已注册至系统且处于可访问状态，调用者需具备模板查看权限，且系统配置管理服务正常运行。查询操作完成后，系统将返回模板的完整定义信息（如参数列表、版本号、更新时间等），且不会对模板内容或节点配置产生影响。若模板未注册、用户权限不足或系统服务异常，接口将返回对应的错误信息（如\&quot;404 Not Found\&quot;、\&quot;403 Forbidden\&quot;或\&quot;503 Service Unavailable\&quot;）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPoolNodeConfigTemplate(showPoolNodeConfigTemplateRequest?: ShowPoolNodeConfigTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/pools/{pool_name}/node-config-template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;

            if (showPoolNodeConfigTemplateRequest !== null && showPoolNodeConfigTemplateRequest !== undefined) {
                if (showPoolNodeConfigTemplateRequest instanceof ShowPoolNodeConfigTemplateRequest) {
                    poolName = showPoolNodeConfigTemplateRequest.poolName;
                } else {
                    poolName = showPoolNodeConfigTemplateRequest['pool_name'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling showPoolNodeConfigTemplate.');
            }

            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源实时利用率接口用于获取当前项目下所有资源池的实时利用率信息。该接口适用于以下场景：当用户需要监控资源使用情况、进行资源优化、容量规划或故障排查时，可通过此接口查询资源池的实时利用率，包括CPU、内存、存储等资源的使用情况。使用该接口的前提条件是用户具有访问该项目的权限，并且资源池已存在且处于运行状态。查询操作完成后，接口将返回资源池的实时利用率数据，包含利用率百分比、资源类型、时间戳等详细信息。若用户无权限、资源池不存在或系统无法获取实时数据，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPoolRuntimeMetrics() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/metrics/runtime/pools",
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
         * 资源池统计接口用于获取指定资源池的统计信息。该接口适用于以下场景：当需要了解资源池的资源使用情况、分配情况或利用率时，用户可通过此接口获取资源池的统计数据。使用该接口的前提条件是资源池已存在且用户具有管理员权限。调用接口成功后，系统将返回资源池的统计信息，包括资源使用总量、已分配量、利用率及资源分配趋势等数据。若资源池不存在、用户无权限操作或资源池当前不可用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPoolStatistics(showPoolStatisticsRequest?: ShowPoolStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;

            if (showPoolStatisticsRequest !== null && showPoolStatisticsRequest !== undefined) {
                if (showPoolStatisticsRequest instanceof ShowPoolStatisticsRequest) {
                    workspaceId = showPoolStatisticsRequest.workspaceId;
                } else {
                    workspaceId = showPoolStatisticsRequest['workspaceId'];
                }
            }

        
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspaceId'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源池的标签接口用于获取指定资源池的标签信息。该接口适用于以下场景：当需要查看、管理或统计特定资源池的标签信息时，用户可通过此接口获取资源池的标签数据。使用该接口的前提条件是资源池已存在且用户具有访问该资源池的权限。调用接口成功后，系统将返回指定资源池的标签信息，包括标签键和标签值。若资源池不存在、用户无权限访问或资源池未配置标签，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPoolTags(showPoolTagsRequest?: ShowPoolTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/pools/{pool_name}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;

            if (showPoolTagsRequest !== null && showPoolTagsRequest !== undefined) {
                if (showPoolTagsRequest instanceof ShowPoolTagsRequest) {
                    poolName = showPoolTagsRequest.poolName;
                } else {
                    poolName = showPoolTagsRequest['pool_name'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling showPoolTags.');
            }

            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询训练作业镜像保存任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSaveImageJob(showSaveImageJobRequest?: ShowSaveImageJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/tasks/{task_id}/save-image-job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;
            
            let taskId;

            if (showSaveImageJobRequest !== null && showSaveImageJobRequest !== undefined) {
                if (showSaveImageJobRequest instanceof ShowSaveImageJobRequest) {
                    trainingJobId = showSaveImageJobRequest.trainingJobId;
                    taskId = showSaveImageJobRequest.taskId;
                } else {
                    trainingJobId = showSaveImageJobRequest['training_job_id'];
                    taskId = showSaveImageJobRequest['task_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showSaveImageJob.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showSaveImageJob.');
            }

            options.pathParams = { 'training_job_id': trainingJobId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取支持的超参搜索算法。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSearchAlgorithms() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/search-algorithms",
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
         * 查询训练作业标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainJobTags(showTrainJobTagsRequest?: ShowTrainJobTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/modelarts-training-job/{training_job_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;

            if (showTrainJobTagsRequest !== null && showTrainJobTagsRequest !== undefined) {
                if (showTrainJobTagsRequest instanceof ShowTrainJobTagsRequest) {
                    trainingJobId = showTrainJobTagsRequest.trainingJobId;
                } else {
                    trainingJobId = showTrainJobTagsRequest['training_job_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showTrainJobTags.');
            }

            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询训练实验详情接口用于获取指定训练实验的详细信息。
         * 该接口适用于以下场景：当用户需要查看训练实验的实验名称、描述、创建时间等详细信息时，可以通过此接口获取。使用该接口的前提条件是训练实验已存在且用户具有查看该实验的权限。查询操作完成后，将返回训练实验的详细信息，包括但不限于实验ID、名称、描述、创建时间等。若训练实验不存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainingExperimentDetails(showTrainingExperimentDetailsRequest?: ShowTrainingExperimentDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-experiments/{experiment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let experimentId;

            if (showTrainingExperimentDetailsRequest !== null && showTrainingExperimentDetailsRequest !== undefined) {
                if (showTrainingExperimentDetailsRequest instanceof ShowTrainingExperimentDetailsRequest) {
                    experimentId = showTrainingExperimentDetailsRequest.experimentId;
                } else {
                    experimentId = showTrainingExperimentDetailsRequest['experiment_id'];
                }
            }

        
            if (experimentId === null || experimentId === undefined) {
            throw new RequiredError('experimentId','Required parameter experimentId was null or undefined when calling showTrainingExperimentDetails.');
            }

            options.pathParams = { 'experiment_id': experimentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询训练作业详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainingJobDetails(showTrainingJobDetailsRequest?: ShowTrainingJobDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;

            if (showTrainingJobDetailsRequest !== null && showTrainingJobDetailsRequest !== undefined) {
                if (showTrainingJobDetailsRequest instanceof ShowTrainingJobDetailsRequest) {
                    trainingJobId = showTrainingJobDetailsRequest.trainingJobId;
                } else {
                    trainingJobId = showTrainingJobDetailsRequest['training_job_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showTrainingJobDetails.');
            }

            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取训练作业支持的AI预置框架。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainingJobEngines() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-job-engines",
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
         * 获取训练作业支持的公共规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainingJobFlavors(showTrainingJobFlavorsRequest?: ShowTrainingJobFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-job-flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavorType;

            if (showTrainingJobFlavorsRequest !== null && showTrainingJobFlavorsRequest !== undefined) {
                if (showTrainingJobFlavorsRequest instanceof ShowTrainingJobFlavorsRequest) {
                    flavorType = showTrainingJobFlavorsRequest.flavorType;
                } else {
                    flavorType = showTrainingJobFlavorsRequest['flavor_type'];
                }
            }

        
            if (flavorType !== null && flavorType !== undefined) {
                localVarQueryParameter['flavor_type'] = flavorType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询训练作业指定任务的日志（预览）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainingJobLogsPreview(showTrainingJobLogsPreviewRequest?: ShowTrainingJobLogsPreviewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/tasks/{task_id}/logs/preview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;
            
            let taskId;

            if (showTrainingJobLogsPreviewRequest !== null && showTrainingJobLogsPreviewRequest !== undefined) {
                if (showTrainingJobLogsPreviewRequest instanceof ShowTrainingJobLogsPreviewRequest) {
                    trainingJobId = showTrainingJobLogsPreviewRequest.trainingJobId;
                    taskId = showTrainingJobLogsPreviewRequest.taskId;
                } else {
                    trainingJobId = showTrainingJobLogsPreviewRequest['training_job_id'];
                    taskId = showTrainingJobLogsPreviewRequest['task_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showTrainingJobLogsPreview.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTrainingJobLogsPreview.');
            }

            options.pathParams = { 'training_job_id': trainingJobId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询训练作业指定任务的运行指标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainingJobMetrics(showTrainingJobMetricsRequest?: ShowTrainingJobMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/metrics/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let trainingJobId;
            
            let taskId;

            if (showTrainingJobMetricsRequest !== null && showTrainingJobMetricsRequest !== undefined) {
                if (showTrainingJobMetricsRequest instanceof ShowTrainingJobMetricsRequest) {
                    trainingJobId = showTrainingJobMetricsRequest.trainingJobId;
                    taskId = showTrainingJobMetricsRequest.taskId;
                } else {
                    trainingJobId = showTrainingJobMetricsRequest['training_job_id'];
                    taskId = showTrainingJobMetricsRequest['task_id'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling showTrainingJobMetrics.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTrainingJobMetrics.');
            }

            options.pathParams = { 'training_job_id': trainingJobId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取训练配额接口用于查询用户在ModelArts服务中的训练资源配额信息。
         * 该接口适用于以下场景：当用户需要了解当前可用的训练资源配额，以便合理规划和管理训练任务时，可以通过此接口获取配额详情。使用该接口的前提条件是用户已登录并具有查看配额的权限。响应消息体中包含用户已创建的训练作业个数、剩余可创建个数等。若用户无权限或配额信息为空，接口将返回相应的错误信息或空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrainingQuotas(showTrainingQuotasRequest?: ShowTrainingQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/training-quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;
            
            let resource;

            if (showTrainingQuotasRequest !== null && showTrainingQuotasRequest !== undefined) {
                if (showTrainingQuotasRequest instanceof ShowTrainingQuotasRequest) {
                    userId = showTrainingQuotasRequest.userId;
                    resource = showTrainingQuotasRequest.resource;
                } else {
                    userId = showTrainingQuotasRequest['user_id'];
                    resource = showTrainingQuotasRequest['resource'];
                }
            }

        
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }
            if (resource !== null && resource !== undefined) {
                localVarQueryParameter['resource'] = resource;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询专属资源池作业统计信息接口用于获取指定专属资源池中作业的统计信息。该接口适用于以下场景：当需要了解专属资源池中作业的整体运行情况、资源使用效率或作业状态分布时，用户可通过此接口获取统计信息。使用该接口的前提条件是专属资源池已存在且用户具有相应的权限（如管理员权限或资源管理权限）。调用接口成功后，系统将返回专属资源池中作业的统计信息，包括作业总数、运行中作业数、完成作业数、资源使用率等数据。若专属资源池不存在、用户无权限操作或资源池当前不可用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkloadStatistics(showWorkloadStatisticsRequest?: ShowWorkloadStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/statistics/pools/{pool_name}/workloads",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let poolName;

            if (showWorkloadStatisticsRequest !== null && showWorkloadStatisticsRequest !== undefined) {
                if (showWorkloadStatisticsRequest instanceof ShowWorkloadStatisticsRequest) {
                    poolName = showWorkloadStatisticsRequest.poolName;
                } else {
                    poolName = showWorkloadStatisticsRequest['pool_name'];
                }
            }

        
            if (poolName === null || poolName === undefined) {
            throw new RequiredError('poolName','Required parameter poolName was null or undefined when calling showWorkloadStatistics.');
            }

            options.pathParams = { 'pool_name': poolName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作空间详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkspace(showWorkspaceRequest?: ShowWorkspaceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;

            if (showWorkspaceRequest !== null && showWorkspaceRequest !== undefined) {
                if (showWorkspaceRequest instanceof ShowWorkspaceRequest) {
                    workspaceId = showWorkspaceRequest.workspaceId;
                } else {
                    workspaceId = showWorkspaceRequest['workspace_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showWorkspace.');
            }

            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作空间配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkspaceQuotas(showWorkspaceQuotasRequest?: ShowWorkspaceQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;

            if (showWorkspaceQuotasRequest !== null && showWorkspaceQuotasRequest !== undefined) {
                if (showWorkspaceQuotasRequest instanceof ShowWorkspaceQuotasRequest) {
                    workspaceId = showWorkspaceQuotasRequest.workspaceId;
                } else {
                    workspaceId = showWorkspaceQuotasRequest['workspace_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showWorkspaceQuotas.');
            }

            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使部署从“停止”或“失败”状态进入“部署中”状态，适用于用户需要重新启动已停止或启动失败的部署的情况。调用此接口前，部署状态必须为“停止”或“失败”，且用户需具有启动部署的权限。调用成功后，部署状态将变为“部署中”，系统将开始执行部署流程，包括资源准备、配置加载等。如果部署当前状态不是“停止”或“失败”，或用户没有启动部署的权限，调用将返回错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInferDeployment(startInferDeploymentRequest?: StartInferDeploymentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (startInferDeploymentRequest !== null && startInferDeploymentRequest !== undefined) {
                if (startInferDeploymentRequest instanceof StartInferDeploymentRequest) {
                    serviceId = startInferDeploymentRequest.serviceId;
                    deploymentId = startInferDeploymentRequest.deploymentId;
                } else {
                    serviceId = startInferDeploymentRequest['service_id'];
                    deploymentId = startInferDeploymentRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling startInferDeployment.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling startInferDeployment.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使服务从\&quot;停止\&quot;或\&quot;失败\&quot;状态进入\&quot;部署中\&quot;状态，适用于用户需要重新启动已停止或启动失败的服务的情况。调用此接口前，服务状态必须为\&quot;停止\&quot;或\&quot;失败\&quot;，且用户需具有启动服务的权限。调用成功后，服务状态将变为\&quot;部署中\&quot;，系统将开始执行部署流程，包括资源准备、配置加载等。如果服务当前状态不是\&quot;停止\&quot;或\&quot;失败\&quot;，或用户没有启动服务的权限，调用将返回错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInferService(startInferServiceRequest?: StartInferServiceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;

            if (startInferServiceRequest !== null && startInferServiceRequest !== undefined) {
                if (startInferServiceRequest instanceof StartInferServiceRequest) {
                    serviceId = startInferServiceRequest.serviceId;
                } else {
                    serviceId = startInferServiceRequest['service_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling startInferService.');
            }

            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止在线部署功能允许用户在特定状态下主动终止正在运行或处于其他可操作状态的部署实例。该功能适用于需要维护、升级或检测到异常的服务场景，支持在服务处于\&quot;运行中\&quot;、\&quot;部署中\&quot;、\&quot;失败\&quot;或\&quot;告警\&quot;状态时执行停止操作。使用此功能前，请确保部署实例处于可停止状态，并具备相应的API调用权限。成功执行后，部署将进入停止状态，释放相关资源并停止处理新的请求。若部署不在允许停止的状态、调用权限不足或系统内部出现错误，将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopInferDeployment(stopInferDeploymentRequest?: StopInferDeploymentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (stopInferDeploymentRequest !== null && stopInferDeploymentRequest !== undefined) {
                if (stopInferDeploymentRequest instanceof StopInferDeploymentRequest) {
                    serviceId = stopInferDeploymentRequest.serviceId;
                    deploymentId = stopInferDeploymentRequest.deploymentId;
                } else {
                    serviceId = stopInferDeploymentRequest['service_id'];
                    deploymentId = stopInferDeploymentRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling stopInferDeployment.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling stopInferDeployment.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使服务从\&quot;运行中\&quot;状态进入\&quot;停止中\&quot;最终变为\&quot;停止\&quot;状态，适用于用户需要停止正在运行的服务以节省资源成本的场景。用户需具有停止服务的权限。调用成功后，服务状态将变为\&quot;停止中\&quot;，系统将开始执行停止流程，包括释放资源、保存状态等。如果用户没有停止服务的权限，调用将返回错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopInferService(stopInferServiceRequest?: StopInferServiceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;

            if (stopInferServiceRequest !== null && stopInferServiceRequest !== undefined) {
                if (stopInferServiceRequest instanceof StopInferServiceRequest) {
                    serviceId = stopInferServiceRequest.serviceId;
                } else {
                    serviceId = stopInferServiceRequest['service_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling stopInferService.');
            }

            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 终止训练作业，只可终止创建中、等待中、运行中的作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopTrainingJob(stopTrainingJobRequest?: StopTrainingJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/training-jobs/{training_job_id}/actions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let trainingJobId;

            if (stopTrainingJobRequest !== null && stopTrainingJobRequest !== undefined) {
                if (stopTrainingJobRequest instanceof StopTrainingJobRequest) {
                    trainingJobId = stopTrainingJobRequest.trainingJobId;
                    body = stopTrainingJobRequest.body
                } else {
                    trainingJobId = stopTrainingJobRequest['training_job_id'];
                    body = stopTrainingJobRequest['body'];
                }
            }

        
            if (trainingJobId === null || trainingJobId === undefined) {
            throw new RequiredError('trainingJobId','Required parameter trainingJobId was null or undefined when calling stopTrainingJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'training_job_id': trainingJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于将部署切换到指定版本，适用于需要在不同版本间进行切换以测试或回滚的场景。请求需包含有效的服务ID、部署ID及目标版本号，版本号必须是已发布的有效版本。用户必须具有对目标服务部署的管理权限，并且部署处于运行状态。切换成功后，部署将立即使用新的版本。若服务ID无效、部署ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；若部署状态不允许切换，则返回400 Bad Request。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchInferDeploymentVersion(switchInferDeploymentVersionRequest?: SwitchInferDeploymentVersionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/versions/{version}/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;
            
            let deploymentId;
            
            let version;

            if (switchInferDeploymentVersionRequest !== null && switchInferDeploymentVersionRequest !== undefined) {
                if (switchInferDeploymentVersionRequest instanceof SwitchInferDeploymentVersionRequest) {
                    serviceId = switchInferDeploymentVersionRequest.serviceId;
                    deploymentId = switchInferDeploymentVersionRequest.deploymentId;
                    version = switchInferDeploymentVersionRequest.version;
                    body = switchInferDeploymentVersionRequest.body
                } else {
                    serviceId = switchInferDeploymentVersionRequest['service_id'];
                    deploymentId = switchInferDeploymentVersionRequest['deployment_id'];
                    version = switchInferDeploymentVersionRequest['version'];
                    body = switchInferDeploymentVersionRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling switchInferDeploymentVersion.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling switchInferDeploymentVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling switchInferDeploymentVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步镜像状态接口用于修正镜像状态的异常情况。该接口适用于以下场景：当镜像状态因误操作、网络问题或系统故障等原因出现异常时，用户可通过此接口同步镜像的最新状态。使用该接口的前提条件是镜像已存在且用户具有相应的操作权限。同步操作完成后，镜像的状态将被更新为最新的正确状态，相关资源和配置也将被同步。若镜像不存在、用户无权限操作或同步过程中出现错误，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncImage(syncImageRequest?: SyncImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/images/{image_id}/sync",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let imageId;

            if (syncImageRequest !== null && syncImageRequest !== undefined) {
                if (syncImageRequest instanceof SyncImageRequest) {
                    imageId = syncImageRequest.imageId;
                } else {
                    imageId = syncImageRequest['image_id'];
                }
            }

        
            if (imageId === null || imageId === undefined) {
            throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling syncImage.');
            }

            options.pathParams = { 'image_id': imageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于将已绑定的apikey从指定服务中解绑，适用于需要撤销某个apikey对特定服务的访问权限的场景。调用此接口前，确保已获取到需要解绑的apikey，并确认该apikey当前绑定在指定服务上。解绑成功后，该apikey将不再对指定服务生效，但仍可继续用于其他服务。如果尝试解绑不存在或未绑定到指定服务的apikey，将返回相应的异常信息，提示用户检查apikey的有效性和绑定状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unbindInferApiKey(unbindInferApiKeyRequest?: UnbindInferApiKeyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/api-keys/{key_id}/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let keyId;

            if (unbindInferApiKeyRequest !== null && unbindInferApiKeyRequest !== undefined) {
                if (unbindInferApiKeyRequest instanceof UnbindInferApiKeyRequest) {
                    serviceId = unbindInferApiKeyRequest.serviceId;
                    keyId = unbindInferApiKeyRequest.keyId;
                } else {
                    serviceId = unbindInferApiKeyRequest['service_id'];
                    keyId = unbindInferApiKeyRequest['key_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling unbindInferApiKey.');
            }
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling unbindInferApiKey.');
            }

            options.pathParams = { 'service_id': serviceId,'key_id': keyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新授权模式接口用于修改指定资源或功能的授权方式和权限配置信息。该接口适用于以下场景：当系统管理员需要调整资源的访问权限、开发者需要更新授权策略以适应新的业务需求，或安全审计人员需要修改授权配置以符合新的安全规范时，可通过此接口更新授权模式的详细信息。使用该接口的前提条件是用户具有更新权限且目标资源或功能的授权模式已存在。调用成功后，接口将更新目标资源的授权模式，并返回更新后的授权模式信息。若用户无权限访问该接口，或目标资源的授权模式不存在，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuthMode(updateAuthModeRequest?: UpdateAuthModeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/auth-mode",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAuthModeRequest !== null && updateAuthModeRequest !== undefined) {
                if (updateAuthModeRequest instanceof UpdateAuthModeRequest) {
                    body = updateAuthModeRequest.body
                } else {
                    body = updateAuthModeRequest['body'];
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
         * 更新镜像组接口用于更新镜像组的标签及说明信息。该接口适用于以下场景：当镜像说明需要修改，或者镜像的标签需要修改时，用户可通过此接口修改。使用该接口的前提条件是镜像组已存在且用户具有更新权限。更新操作完成后，镜像组对应的配置文件会。若镜像组不存在、用户无权限操作或镜像正在被使用，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateImageGroup(updateImageGroupRequest?: UpdateImageGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/images/group/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateImageGroupRequest !== null && updateImageGroupRequest !== undefined) {
                if (updateImageGroupRequest instanceof UpdateImageGroupRequest) {
                    id = updateImageGroupRequest.id;
                    body = updateImageGroupRequest.body
                } else {
                    id = updateImageGroupRequest['id'];
                    body = updateImageGroupRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateImageGroup.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要动态调整模型服务部署配置的场景
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInferDeployment(updateInferDeploymentRequest?: UpdateInferDeploymentRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;
            
            let deploymentId;

            if (updateInferDeploymentRequest !== null && updateInferDeploymentRequest !== undefined) {
                if (updateInferDeploymentRequest instanceof UpdateInferDeploymentRequest) {
                    serviceId = updateInferDeploymentRequest.serviceId;
                    deploymentId = updateInferDeploymentRequest.deploymentId;
                    body = updateInferDeploymentRequest.body
                } else {
                    serviceId = updateInferDeploymentRequest['service_id'];
                    deploymentId = updateInferDeploymentRequest['deployment_id'];
                    body = updateInferDeploymentRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling updateInferDeployment.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling updateInferDeployment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于模型服务实例扩缩容。通过调用此接口，用户可以在原有服务的情况下，对服务进行扩缩容，且不会增加新的版本；包括权限验证错误、服务状态错误和参数验证错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInferDeploymentScale(updateInferDeploymentScaleRequest?: UpdateInferDeploymentScaleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_name}/scale",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;
            
            let deploymentName;

            if (updateInferDeploymentScaleRequest !== null && updateInferDeploymentScaleRequest !== undefined) {
                if (updateInferDeploymentScaleRequest instanceof UpdateInferDeploymentScaleRequest) {
                    serviceId = updateInferDeploymentScaleRequest.serviceId;
                    deploymentName = updateInferDeploymentScaleRequest.deploymentName;
                    body = updateInferDeploymentScaleRequest.body
                } else {
                    serviceId = updateInferDeploymentScaleRequest['service_id'];
                    deploymentName = updateInferDeploymentScaleRequest['deployment_name'];
                    body = updateInferDeploymentScaleRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling updateInferDeploymentScale.');
            }
            if (deploymentName === null || deploymentName === undefined) {
            throw new RequiredError('deploymentName','Required parameter deploymentName was null or undefined when calling updateInferDeploymentScale.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId,'deployment_name': deploymentName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于对当前租户的内网接入申请进行状态变更操作，支持通过（APPROVE）、拒绝（REJECT）、取消（CANCEL）和重试（RETRY）等操作。适用于需要管理内网接入申请审批流程的场景。调用此接口前，确保已具备相应的变更权限，并提供有效的内网申请ID和所需的操作类型。变更成功后，内网申请的状态将更新为指定的操作结果，并记录相关日志。如果提供的内网申请ID无效、操作类型不支持或权限不足，将返回相应的异常信息，提示用户检查输入数据的有效性和权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInferIntranetConnection(updateInferIntranetConnectionRequest?: UpdateInferIntranetConnectionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/intranet-connection/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateInferIntranetConnectionRequest !== null && updateInferIntranetConnectionRequest !== undefined) {
                if (updateInferIntranetConnectionRequest instanceof UpdateInferIntranetConnectionRequest) {
                    id = updateInferIntranetConnectionRequest.id;
                    body = updateInferIntranetConnectionRequest.body
                } else {
                    id = updateInferIntranetConnectionRequest['id'];
                    body = updateInferIntranetConnectionRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateInferIntranetConnection.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口适用于需要动态调整模型服务配置的场景，对模型的性能参数、资源池配置、服务调用配置等进行更新升级。通过调用此接口，用户可以在原有服务的情况下，升级成一个新的服务版本。调用此接口前，服务状态必须为“停止”、“失败”或“运行中”，且用户需具有修改服务的权限。更新成功后，新配置立即生效；若失败，服务保持原有配置并返回错误信息。常见异常包括参数验证错误、权限验证错误和服务状态错误。若服务ID无效、版本号不存在或用户无权限，则返回400 Bad Request或403 Forbidden；若服务状态不允许切换，则返回400 Bad Request。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInferService(updateInferServiceRequest?: UpdateInferServiceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/services/{service_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (updateInferServiceRequest !== null && updateInferServiceRequest !== undefined) {
                if (updateInferServiceRequest instanceof UpdateInferServiceRequest) {
                    serviceId = updateInferServiceRequest.serviceId;
                    body = updateInferServiceRequest.body
                } else {
                    serviceId = updateInferServiceRequest['service_id'];
                    body = updateInferServiceRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling updateInferService.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改工作空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkspace(updateWorkspaceRequest?: UpdateWorkspaceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (updateWorkspaceRequest !== null && updateWorkspaceRequest !== undefined) {
                if (updateWorkspaceRequest instanceof UpdateWorkspaceRequest) {
                    workspaceId = updateWorkspaceRequest.workspaceId;
                    body = updateWorkspaceRequest.body
                } else {
                    workspaceId = updateWorkspaceRequest['workspace_id'];
                    body = updateWorkspaceRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateWorkspace.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改工作空间配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkspaceQuotas(updateWorkspaceQuotasRequest?: UpdateWorkspaceQuotasRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/quotas",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (updateWorkspaceQuotasRequest !== null && updateWorkspaceQuotasRequest !== undefined) {
                if (updateWorkspaceQuotasRequest instanceof UpdateWorkspaceQuotasRequest) {
                    workspaceId = updateWorkspaceQuotasRequest.workspaceId;
                    body = updateWorkspaceQuotasRequest.body
                } else {
                    workspaceId = updateWorkspaceQuotasRequest['workspace_id'];
                    body = updateWorkspaceQuotasRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateWorkspaceQuotas.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 鉴权能否使用当前工作空间资源接口用于验证用户是否有权限访问和使用当前工作空间中的资源。该接口适用于以下场景：当用户尝试访问或操作工作空间中的资源时，系统需要确认用户是否具有相应的权限。使用该接口的前提条件是用户已登录且工作空间已存在。鉴权成功后，用户可以正常访问和使用工作空间资源；若鉴权失败，接口将返回相应的错误信息，如用户无权限或工作空间不存在等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateAuthorization(validateAuthorizationRequest?: ValidateAuthorizationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/auth",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (validateAuthorizationRequest !== null && validateAuthorizationRequest !== undefined) {
                if (validateAuthorizationRequest instanceof ValidateAuthorizationRequest) {
                    workspaceId = validateAuthorizationRequest.workspaceId;
                    body = validateAuthorizationRequest.body
                } else {
                    workspaceId = validateAuthorizationRequest['workspace_id'];
                    body = validateAuthorizationRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling validateAuthorization.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在已部署的服务上创建定时扩缩容策略，适用于需要根据业务负载或特定时间自动调整服务实例个数的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，并提供详细的扩缩容策略参数，如扩缩容时间、实例个数范围、条件触发器等。创建成功后，系统将根据设定的策略自动调整服务实例个数，确保服务在指定时间内的性能和可用性。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInferDeploymentHpa(createInferDeploymentHpaRequest?: CreateInferDeploymentHpaRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/hpa",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;
            
            let deploymentId;

            if (createInferDeploymentHpaRequest !== null && createInferDeploymentHpaRequest !== undefined) {
                if (createInferDeploymentHpaRequest instanceof CreateInferDeploymentHpaRequest) {
                    serviceId = createInferDeploymentHpaRequest.serviceId;
                    deploymentId = createInferDeploymentHpaRequest.deploymentId;
                    body = createInferDeploymentHpaRequest.body
                } else {
                    serviceId = createInferDeploymentHpaRequest['service_id'];
                    deploymentId = createInferDeploymentHpaRequest['deployment_id'];
                    body = createInferDeploymentHpaRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling createInferDeploymentHpa.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling createInferDeploymentHpa.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在已部署的服务上删除定时扩缩容策略，适用于需要根据业务负载或特定时间自动删除服务的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，部署ID。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。暂时为非开放接口，后端清理服务下的自动扩缩容策略规则使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInferDeploymentHpa(deleteInferDeploymentHpaRequest?: DeleteInferDeploymentHpaRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/hpa",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (deleteInferDeploymentHpaRequest !== null && deleteInferDeploymentHpaRequest !== undefined) {
                if (deleteInferDeploymentHpaRequest instanceof DeleteInferDeploymentHpaRequest) {
                    serviceId = deleteInferDeploymentHpaRequest.serviceId;
                    deploymentId = deleteInferDeploymentHpaRequest.deploymentId;
                } else {
                    serviceId = deleteInferDeploymentHpaRequest['service_id'];
                    deploymentId = deleteInferDeploymentHpaRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling deleteInferDeploymentHpa.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling deleteInferDeploymentHpa.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在已部署的服务上查看自动扩缩容策略事件，适用于查看自动扩缩容策略变动历史记录。调用此接口前，确保获取了有效的用户项目ID，服务ID，部署ID。调用成功后，会返回策略事件ID，事件状态，规则执行信息，扩缩容前实例数，扩缩容后实例数，预设目标实例数，执行记录时间。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInferDeploymentHpaEvents(listInferDeploymentHpaEventsRequest?: ListInferDeploymentHpaEventsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/hpa/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let deploymentId;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;

            if (listInferDeploymentHpaEventsRequest !== null && listInferDeploymentHpaEventsRequest !== undefined) {
                if (listInferDeploymentHpaEventsRequest instanceof ListInferDeploymentHpaEventsRequest) {
                    serviceId = listInferDeploymentHpaEventsRequest.serviceId;
                    deploymentId = listInferDeploymentHpaEventsRequest.deploymentId;
                    limit = listInferDeploymentHpaEventsRequest.limit;
                    offset = listInferDeploymentHpaEventsRequest.offset;
                    sortKey = listInferDeploymentHpaEventsRequest.sortKey;
                    sortDir = listInferDeploymentHpaEventsRequest.sortDir;
                } else {
                    serviceId = listInferDeploymentHpaEventsRequest['service_id'];
                    deploymentId = listInferDeploymentHpaEventsRequest['deployment_id'];
                    limit = listInferDeploymentHpaEventsRequest['limit'];
                    offset = listInferDeploymentHpaEventsRequest['offset'];
                    sortKey = listInferDeploymentHpaEventsRequest['sort_key'];
                    sortDir = listInferDeploymentHpaEventsRequest['sort_dir'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listInferDeploymentHpaEvents.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling listInferDeploymentHpaEvents.');
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
            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在已部署的服务上查看自动扩缩容策略。调用此接口前，确保服务已成功部署并获取了有效的服务ID。查询成功后，返回服务对应的策略信息，如规则ID，规则名称，扩缩容类型，扩缩容状态，扩缩容cron表达式，目标实例数等。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInferDeploymentHpa(showInferDeploymentHpaRequest?: ShowInferDeploymentHpaRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/hpa",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (showInferDeploymentHpaRequest !== null && showInferDeploymentHpaRequest !== undefined) {
                if (showInferDeploymentHpaRequest instanceof ShowInferDeploymentHpaRequest) {
                    serviceId = showInferDeploymentHpaRequest.serviceId;
                    deploymentId = showInferDeploymentHpaRequest.deploymentId;
                } else {
                    serviceId = showInferDeploymentHpaRequest['service_id'];
                    deploymentId = showInferDeploymentHpaRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showInferDeploymentHpa.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling showInferDeploymentHpa.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在已部署的服务上修改定时扩缩容策略，适用于需要根据业务负载或特定时间自动调整服务实例个数的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，部署ID，并提供详细的扩缩容策略参数，如扩缩容时间、实例个数范围、条件触发器等。修改成功后，系统将根据设定的策略自动调整服务实例个数，确保服务在指定时间内的性能和可用性。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInferDeploymentHpa(updateInferDeploymentHpaRequest?: UpdateInferDeploymentHpaRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/hpa",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;
            
            let deploymentId;

            if (updateInferDeploymentHpaRequest !== null && updateInferDeploymentHpaRequest !== undefined) {
                if (updateInferDeploymentHpaRequest instanceof UpdateInferDeploymentHpaRequest) {
                    serviceId = updateInferDeploymentHpaRequest.serviceId;
                    deploymentId = updateInferDeploymentHpaRequest.deploymentId;
                    body = updateInferDeploymentHpaRequest.body
                } else {
                    serviceId = updateInferDeploymentHpaRequest['service_id'];
                    deploymentId = updateInferDeploymentHpaRequest['deployment_id'];
                    body = updateInferDeploymentHpaRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling updateInferDeploymentHpa.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling updateInferDeploymentHpa.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在已部署且支持HRA策略的服务上创建HRA策略，适用于需要根据业务负载或特定时间自动调整服务实例个数的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，并提供详细的hra策略参数，如hra时间、实例个数范围、条件触发器等。创建成功后，系统将根据设定的策略自动调整服务实例个数，确保服务在指定时间内的性能和可用性。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInferHra(createInferHraRequest?: CreateInferHraRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/hra",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;
            
            let deploymentId;

            if (createInferHraRequest !== null && createInferHraRequest !== undefined) {
                if (createInferHraRequest instanceof CreateInferHraRequest) {
                    serviceId = createInferHraRequest.serviceId;
                    deploymentId = createInferHraRequest.deploymentId;
                    body = createInferHraRequest.body
                } else {
                    serviceId = createInferHraRequest['service_id'];
                    deploymentId = createInferHraRequest['deployment_id'];
                    body = createInferHraRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling createInferHra.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling createInferHra.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在已部署的服务上查看推理单元配比检测信息。调用此接口前，确保服务已成功部署并获取了有效的服务ID。查询成功后，返回服务对应的策略信息，如规则ID，规则名称，策略状态，HRA结果状态等。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInferHra(showInferHraRequest?: ShowInferHraRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/hra",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;
            
            let deploymentId;

            if (showInferHraRequest !== null && showInferHraRequest !== undefined) {
                if (showInferHraRequest instanceof ShowInferHraRequest) {
                    serviceId = showInferHraRequest.serviceId;
                    deploymentId = showInferHraRequest.deploymentId;
                } else {
                    serviceId = showInferHraRequest['service_id'];
                    deploymentId = showInferHraRequest['deployment_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showInferHra.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling showInferHra.');
            }

            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口用于在已创建HRA策略的服务上修改指定部署的HRA策略配置，适用于需要根据业务负载或特定时间自动调整服务实例个数的场景。调用此接口前，确保服务已成功部署并获取了有效的服务ID，部署ID，并提供详细的hra策略参数，如HRA规则列表、HRA结果状态、策略状态等。修改成功后，系统将根据设定的策略自动调整服务实例个数，确保服务在指定时间内的性能和可用性。如果提供的服务ID无效、参数配置错误或系统资源不足，将返回相应的异常信息，提示用户检查输入数据的有效性或联系技术支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInferHra(updateInferHraRequest?: UpdateInferHraRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/services/{service_id}/deployments/{deployment_id}/hra",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;
            
            let deploymentId;

            if (updateInferHraRequest !== null && updateInferHraRequest !== undefined) {
                if (updateInferHraRequest instanceof UpdateInferHraRequest) {
                    serviceId = updateInferHraRequest.serviceId;
                    deploymentId = updateInferHraRequest.deploymentId;
                    body = updateInferHraRequest.body
                } else {
                    serviceId = updateInferHraRequest['service_id'];
                    deploymentId = updateInferHraRequest['deployment_id'];
                    body = updateInferHraRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling updateInferHra.');
            }
            if (deploymentId === null || deploymentId === undefined) {
            throw new RequiredError('deploymentId','Required parameter deploymentId was null or undefined when calling updateInferHra.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId,'deployment_id': deploymentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lite Server服务器挂载磁盘接口用于将额外的磁盘挂载到Lite Server服务器上。该接口适用于以下场景：当用户需要扩展Lite Server服务器的存储空间以满足更大的数据存储需求时，可以通过此接口将指定的磁盘挂载到服务器上。使用该接口的前提条件是Lite Server服务器已创建且处于运行状态、或者停止状态，用户具有挂载磁盘的权限，且指定的磁盘已存在且未被其他服务器使用。挂载操作完成后，磁盘将成功挂载到Lite Server服务器上，用户可以访问和使用新增的存储空间。若Lite Server服务器不存在、指定的磁盘不存在或已被使用，或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachDevServerVolume(attachDevServerVolumeRequest?: AttachDevServerVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/{id}/attachvolume",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (attachDevServerVolumeRequest !== null && attachDevServerVolumeRequest !== undefined) {
                if (attachDevServerVolumeRequest instanceof AttachDevServerVolumeRequest) {
                    id = attachDevServerVolumeRequest.id;
                    body = attachDevServerVolumeRequest.body
                } else {
                    id = attachDevServerVolumeRequest['id'];
                    body = attachDevServerVolumeRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling attachDevServerVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量操作Lite Server实例接口用于对多个Lite Server实例进行统一操作，如启动、停止、重启或删除等。该接口适用于以下场景：当需要对多个Lite Server实例进行相同的操作，例如在维护期间批量停止实例、更新配置后批量重启实例或清理不再需要的实例时，用户可通过此接口高效地完成批量操作。使用该接口的前提条件是目标Lite Server实例已存在且用户具有相应的操作权限。操作完成后，所有指定的Lite Server实例将根据请求完成相应的状态变更或被移除，相关资源和配置也将被相应调整或清理。若目标Lite Server实例不存在、用户无权限操作或请求参数不正确，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDevServersAction(batchDevServersActionRequest?: BatchDevServersActionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDevServersActionRequest !== null && batchDevServersActionRequest !== undefined) {
                if (batchDevServersActionRequest instanceof BatchDevServersActionRequest) {
                    body = batchDevServersActionRequest.body
                } else {
                    body = batchDevServersActionRequest['body'];
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
         * Lite Server服务器绑定的EIP接口用于将弹性公网IP（EIP）绑定到Lite Server服务器上。该接口适用于以下场景：当用户需要为Lite Server服务器分配一个固定的公网IP地址，以便从外部网络访问服务器时，可以通过此接口将指定的EIP绑定到服务器上。使用该接口的前提条件是Lite Server服务器已创建且处于运行状态，用户具有绑定EIP的权限，且指定的EIP已存在且未被其他资源使用。绑定操作完成后，EIP将成功绑定到Lite Server服务器上，服务器可以通过该EIP从外部网络访问。若Lite Server服务器不存在、已处于停止状态、指定的EIP不存在或已被使用，或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        bindDevServerPublicIP(bindDevServerPublicIPRequest?: BindDevServerPublicIPRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/{id}/publicips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (bindDevServerPublicIPRequest !== null && bindDevServerPublicIPRequest !== undefined) {
                if (bindDevServerPublicIPRequest instanceof BindDevServerPublicIPRequest) {
                    id = bindDevServerPublicIPRequest.id;
                    body = bindDevServerPublicIPRequest.body
                } else {
                    id = bindDevServerPublicIPRequest['id'];
                    body = bindDevServerPublicIPRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling bindDevServerPublicIP.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换Lite Server服务器操作系统镜像接口用于更换Lite Server服务器当前使用的操作系统镜像。该接口适用于以下场景：当用户需要更换操作系统以适应不同的开发或测试需求时，可以通过此接口切换指定的Lite Server服务器操作系统镜像。使用该接口的前提条件是Lite Server服务器已存在且处于停止状态，用户具有切换操作系统的权限。切换操作完成后，Lite Server服务器将安装新的操作系统镜像，并重新进入运行状态，若Lite Server服务器不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeDevServerOS(changeDevServerOSRequest?: ChangeDevServerOSRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/{id}/changeos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (changeDevServerOSRequest !== null && changeDevServerOSRequest !== undefined) {
                if (changeDevServerOSRequest instanceof ChangeDevServerOSRequest) {
                    id = changeDevServerOSRequest.id;
                    body = changeDevServerOSRequest.body
                } else {
                    id = changeDevServerOSRequest['id'];
                    body = changeDevServerOSRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling changeDevServerOS.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换Lite Server超节点服务器操作系统镜像接口用于更换Lite Server超节点服务器当前使用的操作系统镜像。该接口适用于以下场景：当用户需要更换操作系统以适应不同的开发或测试需求时，可以通过此接口切换指定的Lite Server超节点服务器操作系统镜像。使用该接口的前提条件是Lite Server超节点服务器已存在且处于停止状态，用户具有切换操作系统的权限。切换操作完成后，Lite Server超节点服务器将安装新的操作系统镜像，并重新进入运行状态，若Lite Server超节点服务器不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeHyperinstanceOS(changeHyperinstanceOSRequest?: ChangeHyperinstanceOSRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/changeos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (changeHyperinstanceOSRequest !== null && changeHyperinstanceOSRequest !== undefined) {
                if (changeHyperinstanceOSRequest instanceof ChangeHyperinstanceOSRequest) {
                    id = changeHyperinstanceOSRequest.id;
                    body = changeHyperinstanceOSRequest.body
                } else {
                    id = changeHyperinstanceOSRequest['id'];
                    body = changeHyperinstanceOSRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling changeHyperinstanceOS.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Lite Server接口用于创建LiteServer弹性云服务器、裸金属服务器及超节点服务器。该接口适用于以下场景：用户需要根据业务需求快速部署和配置不同类型的服务器资源。使用该接口的前提条件是用户已登录且具有创建Lite Server的权限，并且需要提供服务器类型、规格、网络配置等必要参数。创建操作完成后，系统将返回新创建的Lite Server实例信息，包括实例ID、状态等。若用户无权限、参数配置错误或资源不足，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDevServer(createDevServerRequest?: CreateDevServerRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDevServerRequest !== null && createDevServerRequest !== undefined) {
                if (createDevServerRequest instanceof CreateDevServerRequest) {
                    body = createDevServerRequest.body
                } else {
                    body = createDevServerRequest['body'];
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
         * 创建Lite Server任务接口用于在Lite Server上创建新的任务。该接口适用于以下场景：当用户需要在Lite Server上启动新的开发、测试或部署任务时，可以通过此接口创建并配置任务。使用该接口的前提条件是用户具有创建任务的权限，并且提供的任务配置参数符合要求。创建操作完成后，新的Lite Server任务将被成功创建，并返回任务ID和其他相关信息。若用户无权限操作、提供的参数不正确或系统资源不足，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDevServerJob(createDevServerJobRequest?: CreateDevServerJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/jobs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDevServerJobRequest !== null && createDevServerJobRequest !== undefined) {
                if (createDevServerJobRequest instanceof CreateDevServerJobRequest) {
                    body = createDevServerJobRequest.body
                } else {
                    body = createDevServerJobRequest['body'];
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
         * 创建Hyper Cluster接口用于在系统中创建一个新的Hyper Cluster。该接口适用于以下场景：当用户需要使用超节点网络时，可以通过此接口创建Hyper Cluster。使用该接口的前提条件是用户已登录并具有创建Hyper Cluster的权限，且系统中已配置了必要的资源。创建操作完成后，将生成一个新的超节点网络，并返回超节点网络的详细信息，包括ID、名称、子网信息等。若用户无权限操作、系统中缺少必要的资源或配置参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHyperCluster(createHyperClusterRequest?: CreateHyperClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/hyper-clusters",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createHyperClusterRequest !== null && createHyperClusterRequest !== undefined) {
                if (createHyperClusterRequest instanceof CreateHyperClusterRequest) {
                    body = createHyperClusterRequest.body
                } else {
                    body = createHyperClusterRequest['body'];
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
         * 创建Lite Server超节点标签接口用于为Lite Server超节点添加自定义标签。该接口适用于以下场景：当用户需要对Lite Server超节点进行分类管理或标记特定信息时，可以通过此接口为指定的超节点创建标签。使用该接口的前提条件是Lite Server超节点已存在，用户具有创建标签的权限。创建操作完成后，标签将被成功添加到指定的超节点上，用户可以通过标签进行快速查找和管理。若Lite Server超节点不存在、标签已存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHyperinstanceTags(createHyperinstanceTagsRequest?: CreateHyperinstanceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (createHyperinstanceTagsRequest !== null && createHyperinstanceTagsRequest !== undefined) {
                if (createHyperinstanceTagsRequest instanceof CreateHyperinstanceTagsRequest) {
                    id = createHyperinstanceTagsRequest.id;
                    body = createHyperinstanceTagsRequest.body
                } else {
                    id = createHyperinstanceTagsRequest['id'];
                    body = createHyperinstanceTagsRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling createHyperinstanceTags.');
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
         * 创建RoCE网络接口用于在系统中创建一个新的RoCE网络。该接口适用于以下场景：当用户需要为高性能计算或低延迟应用创建专用的RoCE网络时，可以通过此接口创建并配置RoCE网络。使用该接口的前提条件是用户已登录并具有创建RoCE网络的权限，且系统中已配置了必要的网络资源。创建操作完成后，将生成一个新的RoCE网络，并返回网络的详细信息，包括网络ID、子网信息、配置参数等。若用户无权限操作、系统中缺少必要的网络资源或网络配置参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRoceNetwork(createRoceNetworkRequest?: CreateRoceNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/networks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRoceNetworkRequest !== null && createRoceNetworkRequest !== undefined) {
                if (createRoceNetworkRequest instanceof CreateRoceNetworkRequest) {
                    body = createRoceNetworkRequest.body
                } else {
                    body = createRoceNetworkRequest['body'];
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
         * 删除Lite Server实例接口用于移除已创建的Lite Server实例。该接口适用于以下场景：当Lite Server按需实例不再需要使用时或者创建失败的实例以及处于ERROR状态时，用户可通过此接口删除指定的Lite Server实例。使用该接口的前提条件是Lite Server实例已存在且用户具有管理员权限。删除操作完成后，Lite Server实例将被永久移除，相关资源也将被清理。若Lite Server实例不存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDevServer(deleteDevServerRequest?: DeleteDevServerRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dev-servers/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteDevServerRequest !== null && deleteDevServerRequest !== undefined) {
                if (deleteDevServerRequest instanceof DeleteDevServerRequest) {
                    id = deleteDevServerRequest.id;
                } else {
                    id = deleteDevServerRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteDevServer.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除Lite Server Job接口用于批量移除已创建的Lite Server Job。该接口适用于以下场景：当多个Lite Server Job已完成、配置错误或需要清理资源时，用户可以通过此接口批量删除指定的Lite Server Job。使用该接口的前提条件是目标Lite Server Job已存在且用户具有管理员权限。删除操作完成后，指定的Lite Server Job将被永久移除，相关资源和配置也将被清理。若目标Lite Server Job不存在、用户无权限操作或请求参数不正确，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDevServerJobs(deleteDevServerJobsRequest?: DeleteDevServerJobsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dev-servers/jobs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteDevServerJobsRequest !== null && deleteDevServerJobsRequest !== undefined) {
                if (deleteDevServerJobsRequest instanceof DeleteDevServerJobsRequest) {
                    body = deleteDevServerJobsRequest.body
                } else {
                    body = deleteDevServerJobsRequest['body'];
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
         * 删除Hyper Cluster实例接口用于移除已创建的Hyper Cluster。该接口适用于以下场景：当超节点网络配置错误或需要清理资源时，用户可通过此接口删除指定的超节点网络。使用该接口的前提条件是Hyper Cluster实例已存在且用户具有管理员权限。删除操作完成后，超节点网络将被永久移除，相关资源和配置也将被清理。若Hyper Cluster实例不存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHyperCluster(deleteHyperClusterRequest?: DeleteHyperClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dev-servers/hyper-clusters/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let type;

            if (deleteHyperClusterRequest !== null && deleteHyperClusterRequest !== undefined) {
                if (deleteHyperClusterRequest instanceof DeleteHyperClusterRequest) {
                    id = deleteHyperClusterRequest.id;
                    type = deleteHyperClusterRequest.type;
                } else {
                    id = deleteHyperClusterRequest['id'];
                    type = deleteHyperClusterRequest['type'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteHyperCluster.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除Lite Server超节点实例接口用于删除按需超节点实例同时移除处于ERROR状态的Lite Server超节点实例。该接口适用于以下场景：当超节点实例因创建失败、或其他原因进入ERROR状态；按需超节点实例，用户可以通过此接口删除指定的超节点实例。使用该接口的前提条件是用户已登录并具有删除超节点实例的权限，且指定的超节点实例是按需且处于运行状态、或者处于ERROR状态。删除操作完成后，指定的超节点实例将被永久移除，相关资源也将被清理。若指定的超节点实例不存在、未处于ERROR状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHyperinstance(deleteHyperinstanceRequest?: DeleteHyperinstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteHyperinstanceRequest !== null && deleteHyperinstanceRequest !== undefined) {
                if (deleteHyperinstanceRequest instanceof DeleteHyperinstanceRequest) {
                    id = deleteHyperinstanceRequest.id;
                } else {
                    id = deleteHyperinstanceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteHyperinstance.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除Lite Server超节点标签接口用于移除已创建的Lite Server超节点标签。该接口适用于以下场景：当用户需要清理不再需要的标签或修正标签错误时，可以通过此接口删除指定的超节点标签。使用该接口的前提条件是Lite Server超节点已存在，且该超节点上已存在要删除的标签，用户具有删除标签的权限。删除操作完成后，指定的标签将从超节点上移除，超节点的其他配置和数据保持不变。若Lite Server超节点不存在、标签不存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHyperinstanceTags(deleteHyperinstanceTagsRequest?: DeleteHyperinstanceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/tags/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (deleteHyperinstanceTagsRequest !== null && deleteHyperinstanceTagsRequest !== undefined) {
                if (deleteHyperinstanceTagsRequest instanceof DeleteHyperinstanceTagsRequest) {
                    id = deleteHyperinstanceTagsRequest.id;
                    body = deleteHyperinstanceTagsRequest.body
                } else {
                    id = deleteHyperinstanceTagsRequest['id'];
                    body = deleteHyperinstanceTagsRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteHyperinstanceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lite Server服务器卸载磁盘接口用于从Lite Server服务器上卸载已挂载的磁盘。该接口适用于以下场景：当用户需要释放存储资源或重新分配磁盘时，可以通过此接口卸载指定的磁盘。使用该接口的前提条件是Lite Server服务器已创建且处于运行状态、或者停止状态，用户具有卸载磁盘的权限，且指定的磁盘已挂载到服务器上。卸载操作完成后，磁盘将从Lite Server服务器上成功卸载，用户可以将其挂载到其他服务器或进行其他操作。若Lite Server服务器不存在、指定的磁盘未挂载到服务器上，或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachDevServerVolume(detachDevServerVolumeRequest?: DetachDevServerVolumeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dev-servers/{id}/detachvolume/{volume_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let volumeId;

            if (detachDevServerVolumeRequest !== null && detachDevServerVolumeRequest !== undefined) {
                if (detachDevServerVolumeRequest instanceof DetachDevServerVolumeRequest) {
                    id = detachDevServerVolumeRequest.id;
                    volumeId = detachDevServerVolumeRequest.volumeId;
                } else {
                    id = detachDevServerVolumeRequest['id'];
                    volumeId = detachDevServerVolumeRequest['volume_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling detachDevServerVolume.');
            }
            if (volumeId === null || volumeId === undefined) {
            throw new RequiredError('volumeId','Required parameter volumeId was null or undefined when calling detachDevServerVolume.');
            }

            options.pathParams = { 'id': id,'volume_id': volumeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Lite Server镜像详情接口用于获取指定Lite Server镜像的详细信息。该接口适用于以下场景：当用户需要了解某个Lite Server镜像的具体配置和属性，以便在创建或调整Lite Server实例时选择合适的镜像时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询镜像详情的权限，且指定的镜像已存在。查询操作完成后，接口将返回指定Lite Server镜像的详细信息，包括镜像ID、名称、操作系统、版本、创建时间等。若用户无权限操作、指定的镜像不存在或镜像ID无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getDevServerImage(getDevServerImageRequest?: GetDevServerImageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/images/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (getDevServerImageRequest !== null && getDevServerImageRequest !== undefined) {
                if (getDevServerImageRequest instanceof GetDevServerImageRequest) {
                    id = getDevServerImageRequest.id;
                } else {
                    id = getDevServerImageRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getDevServerImage.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Lite Server Job详情接口用于获取指定Lite Server Job的详细信息。该接口适用于以下场景：当用户需要查看某个Lite Server Job的执行状态、配置参数、日志信息等详细数据时，可以通过此接口获取相关信息。使用该接口的前提条件是目标Lite Server Job已存在且用户具有查看权限。查询操作完成后，接口将返回指定Lite Server Job的详细信息，包括但不限于Job ID、状态、创建时间、执行时间、配置参数和日志等。若目标Lite Server Job不存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getDevServerJob(getDevServerJobRequest?: GetDevServerJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/jobs/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (getDevServerJobRequest !== null && getDevServerJobRequest !== undefined) {
                if (getDevServerJobRequest instanceof GetDevServerJobRequest) {
                    id = getDevServerJobRequest.id;
                } else {
                    id = getDevServerJobRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getDevServerJob.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据服务id获取Lite Server部署服务详情。该接口适用于以下场景：当用户需要查看部署服务详情，以便查看已部署服务的状态、api等信息时，可以通过此接口获取服务详情。使用该接口的前提条件是用户具有查看服务的权限。查询操作完成后，接口将返回此部署服务的详细信息，包括名称、状态、描述、所用模型、实例详情等信息。若用户无权限操作或无相应id，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getDevServerJobService(getDevServerJobServiceRequest?: GetDevServerJobServiceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/jobs/services/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (getDevServerJobServiceRequest !== null && getDevServerJobServiceRequest !== undefined) {
                if (getDevServerJobServiceRequest instanceof GetDevServerJobServiceRequest) {
                    id = getDevServerJobServiceRequest.id;
                } else {
                    id = getDevServerJobServiceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getDevServerJobService.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Lite Server Job模板详情接口用于获取指定Lite Server Job模板的详细信息。该接口适用于以下场景：当用户需要查看某个特定Job模板的详细配置，以便了解其参数设置、使用说明等信息时，可以通过此接口获取模板详情。查询操作完成后，接口将返回指定模板的详细信息，包括模板ID、名称、描述、配置参数等。若目标模板不存在，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getDevServerJobTemplate(getDevServerJobTemplateRequest?: GetDevServerJobTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/jobs/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (getDevServerJobTemplateRequest !== null && getDevServerJobTemplateRequest !== undefined) {
                if (getDevServerJobTemplateRequest instanceof GetDevServerJobTemplateRequest) {
                    id = getDevServerJobTemplateRequest.id;
                } else {
                    id = getDevServerJobTemplateRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getDevServerJobTemplate.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Operation详情接口用于获取指定Operation的详细信息。该接口适用于以下场景：当用户需要了解某个Operation的具体执行情况和状态，以便进行故障排查或操作审计时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询Operation详情的权限，且指定的Operation已存在。查询操作完成后，接口将返回指定Operation的详细信息，包括Operation ID、操作类型、执行状态、开始时间、结束时间、操作结果等。若用户无权限操作、指定的Operation不存在或Operation ID无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getDevServerOperation(getDevServerOperationRequest?: GetDevServerOperationRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/{id}/operation/{operation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let operationId;

            if (getDevServerOperationRequest !== null && getDevServerOperationRequest !== undefined) {
                if (getDevServerOperationRequest instanceof GetDevServerOperationRequest) {
                    id = getDevServerOperationRequest.id;
                    operationId = getDevServerOperationRequest.operationId;
                } else {
                    id = getDevServerOperationRequest['id'];
                    operationId = getDevServerOperationRequest['operation_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getDevServerOperation.');
            }
            if (operationId === null || operationId === undefined) {
            throw new RequiredError('operationId','Required parameter operationId was null or undefined when calling getDevServerOperation.');
            }

            options.pathParams = { 'id': id,'operation_id': operationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Hyper Cluster实例详情接口用于获取指定Hyper Cluster实例的详细信息。该接口适用于以下场景：当用户需要了解某个超节点网络的具体配置和状态，以便进行管理和监控时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询Hyper Cluster详情的权限，且指定的超节点网络已存在。查询操作完成后，接口将返回指定超节点网络的详细信息，包括ID、名称、子网信息等。若用户无权限操作、指定的超节点网络不存在或ID无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getHyperCluster(getHyperClusterRequest?: GetHyperClusterRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/hyper-clusters/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let type;

            if (getHyperClusterRequest !== null && getHyperClusterRequest !== undefined) {
                if (getHyperClusterRequest instanceof GetHyperClusterRequest) {
                    id = getHyperClusterRequest.id;
                    type = getHyperClusterRequest.type;
                } else {
                    id = getHyperClusterRequest['id'];
                    type = getHyperClusterRequest['type'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getHyperCluster.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定超节点实例详情接口用于获取特定Lite Server超节点实例的详细信息。该接口适用于以下场景：当用户需要查看某个具体超节点实例的配置、状态和使用情况时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询超节点实例的权限，且指定的超节点实例已存在。查询操作完成后，接口将返回指定超节点实例的详细信息，包括实例ID、操作系统、运行状态、资源使用情况等。若用户无权限操作、指定的超节点实例不存在或实例ID无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getHyperinstance(getHyperinstanceRequest?: GetHyperinstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (getHyperinstanceRequest !== null && getHyperinstanceRequest !== undefined) {
                if (getHyperinstanceRequest instanceof GetHyperinstanceRequest) {
                    id = getHyperinstanceRequest.id;
                } else {
                    id = getHyperinstanceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getHyperinstance.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Lite Server超节点扩缩容支持规格列表及容量测算接口用于获取Lite Server超节点支持的扩缩容规格列表，并进行容量测算。该接口适用于以下场景：当用户需要了解Lite Server超节点支持的扩缩容选项，以便在调整超节点资源时选择合适的规格，并评估扩缩容后的资源需求时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询超节点扩缩容规格的权限，且指定的超节点已存在。查询操作完成后，接口将返回支持的扩缩容规格列表及容量测算结果，包括规格ID、CPU、内存、存储等详细配置和扩缩容后的资源使用情况。若用户无权限操作、指定的超节点不存在或系统中没有可用的扩缩容规格，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getScaleEvaluationsDevServer(getScaleEvaluationsDevServerRequest?: GetScaleEvaluationsDevServerRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/scale-evaluations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (getScaleEvaluationsDevServerRequest !== null && getScaleEvaluationsDevServerRequest !== undefined) {
                if (getScaleEvaluationsDevServerRequest instanceof GetScaleEvaluationsDevServerRequest) {
                    id = getScaleEvaluationsDevServerRequest.id;
                } else {
                    id = getScaleEvaluationsDevServerRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling getScaleEvaluationsDevServer.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的Tor信息接口用于获取指定实例的Top-of-Rack（Tor）交换机相关信息。该接口适用于以下场景：当用户需要了解实例连接的Tor交换机的详细信息，以便进行网络配置时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询实例Tor信息的权限，且指定的实例已存在。查询操作完成后，接口将返回指定实例的Tor信息。若用户无权限操作、指定的实例不存在或实例未连接到Tor交换机，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getTopologies(getTopologiesRequest?: GetTopologiesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/instance-physical-topologies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let resourceId;

            if (getTopologiesRequest !== null && getTopologiesRequest !== undefined) {
                if (getTopologiesRequest instanceof GetTopologiesRequest) {
                    id = getTopologiesRequest.id;
                    resourceId = getTopologiesRequest.resourceId;
                } else {
                    id = getTopologiesRequest['id'];
                    resourceId = getTopologiesRequest['resource_id'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户Lite Server列表接口用于获取指定租户的所有Lite Server实例信息。该接口适用于以下场景：当用户需要查看其租户下所有Lite Server实例的详细信息，以便进行管理和监控时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询租户Lite Server列表的权限。查询操作完成后，接口将返回租户下所有Lite Server实例的详细信息，包括实例ID、名称、状态、资源配置等。若用户无权限操作或租户下没有Lite Server实例，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllDevServers() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/all",
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
         * 查询租户Hyperinstance列表接口用于获取指定租户的所有Hyperinstance实例信息。该接口适用于以下场景：当用户需要查看其租户下所有Hyperinstance实例的详细信息，以便进行管理和监控时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询租户Hyperinstance列表的权限。查询操作完成后，接口将返回租户下所有Hyperinstance实例的详细信息，包括实例ID、名称、状态、资源配置等。若用户无权限操作或租户下没有Hyperinstance实例，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllHyperinstances() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/hyperinstance/all",
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
         * 查询规格列表接口用于获取系统中所有可用的资源规格信息。该接口适用于以下场景：当用户需要了解可用的资源规格，以便在创建或调整Lite Server实例时选择合适的配置时，可以通过此接口获取规格列表。使用该接口的前提条件是用户已登录并具有查询规格的权限。查询操作完成后，接口将返回所有可用的资源规格信息，包括规格ID、CPU、内存、存储等详细配置。若用户无权限操作或系统中没有可用的资源规格，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDevServerFlavors(listDevServerFlavorsRequest?: ListDevServerFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverType;
            
            let arch;
            
            let chargingMode;

            if (listDevServerFlavorsRequest !== null && listDevServerFlavorsRequest !== undefined) {
                if (listDevServerFlavorsRequest instanceof ListDevServerFlavorsRequest) {
                    serverType = listDevServerFlavorsRequest.serverType;
                    arch = listDevServerFlavorsRequest.arch;
                    chargingMode = listDevServerFlavorsRequest.chargingMode;
                } else {
                    serverType = listDevServerFlavorsRequest['server_type'];
                    arch = listDevServerFlavorsRequest['arch'];
                    chargingMode = listDevServerFlavorsRequest['charging_mode'];
                }
            }

        
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }
            if (arch !== null && arch !== undefined) {
                localVarQueryParameter['arch'] = arch;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Lite Server镜像列表接口用于获取系统中所有可用的Lite Server镜像信息。该接口适用于以下场景：当用户需要了解可用的Lite Server镜像，以便在创建或调整Lite Server实例时选择合适的镜像时，可以通过此接口获取镜像列表。使用该接口的前提条件是用户已登录并具有查询镜像列表的权限。查询操作完成后，接口将返回所有可用的Lite Server镜像信息，包括镜像ID、名称、架构类型等。若用户无权限操作或系统中没有可用的镜像，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDevServerImages(listDevServerImagesRequest?: ListDevServerImagesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverType;
            
            let flavorName;

            if (listDevServerImagesRequest !== null && listDevServerImagesRequest !== undefined) {
                if (listDevServerImagesRequest instanceof ListDevServerImagesRequest) {
                    serverType = listDevServerImagesRequest.serverType;
                    flavorName = listDevServerImagesRequest.flavorName;
                } else {
                    serverType = listDevServerImagesRequest['server_type'];
                    flavorName = listDevServerImagesRequest['flavor_name'];
                }
            }

        
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }
            if (flavorName !== null && flavorName !== undefined) {
                localVarQueryParameter['flavor_name'] = flavorName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Lite Server Job模板列表接口用于获取可用的Lite Server Job模板列表。该接口适用于以下场景：当用户需要查看可用的Job模板，以便选择合适的模板来创建新的Lite Server任务时，可以通过此接口获取模板列表。查询操作完成后，接口将返回所有可用的Lite Server Job模板列表，包括模板ID、名称、描述等信息。若系统中无可用模板，接口将返回相应的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDevServerJobTemplates(listDevServerJobTemplatesRequest?: ListDevServerJobTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/jobs/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let type;

            if (listDevServerJobTemplatesRequest !== null && listDevServerJobTemplatesRequest !== undefined) {
                if (listDevServerJobTemplatesRequest instanceof ListDevServerJobTemplatesRequest) {
                    id = listDevServerJobTemplatesRequest.id;
                    name = listDevServerJobTemplatesRequest.name;
                    type = listDevServerJobTemplatesRequest.type;
                } else {
                    id = listDevServerJobTemplatesRequest['id'];
                    name = listDevServerJobTemplatesRequest['name'];
                    type = listDevServerJobTemplatesRequest['type'];
                }
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
         * 查询Lite Server Job列表接口用于获取Lite Server Job的列表信息，并支持按照状态、ID等相关字段进行过滤。该接口适用于以下场景：当用户需要查看多个Lite Server Job的概要信息，例如在监控作业状态、排查问题或进行日常管理时，可以通过此接口获取符合过滤条件的Job列表。使用该接口的前提条件是用户具有查看权限。查询操作完成后，接口将返回符合条件的Lite Server Job列表，包括每个Job的ID、状态、创建时间等基本信息。若用户无权限操作或请求参数不正确，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDevServerJobs(listDevServerJobsRequest?: ListDevServerJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let type;
            
            let status;
            
            let visible;

            if (listDevServerJobsRequest !== null && listDevServerJobsRequest !== undefined) {
                if (listDevServerJobsRequest instanceof ListDevServerJobsRequest) {
                    id = listDevServerJobsRequest.id;
                    name = listDevServerJobsRequest.name;
                    type = listDevServerJobsRequest.type;
                    status = listDevServerJobsRequest.status;
                    visible = listDevServerJobsRequest.visible;
                } else {
                    id = listDevServerJobsRequest['id'];
                    name = listDevServerJobsRequest['name'];
                    type = listDevServerJobsRequest['type'];
                    status = listDevServerJobsRequest['status'];
                    visible = listDevServerJobsRequest['visible'];
                }
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
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (visible !== null && visible !== undefined) {
                localVarQueryParameter['visible'] = visible;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已绑定的EIP接口用于获取已绑定到Lite Server服务器上的弹性公网IP（EIP）信息。该接口适用于以下场景：当用户需要查看Lite Server服务器上已绑定的EIP及其详细信息时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询EIP的权限，且指定的Lite Server服务器已存在。查询操作完成后，接口将返回已绑定到Lite Server服务器上的EIP的详细信息，包括EIP地址、绑定时间、状态等。若Lite Server服务器不存在、未绑定EIP或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDevServerPublicIP(listDevServerPublicIPRequest?: ListDevServerPublicIPRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/{id}/publicips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (listDevServerPublicIPRequest !== null && listDevServerPublicIPRequest !== undefined) {
                if (listDevServerPublicIPRequest instanceof ListDevServerPublicIPRequest) {
                    id = listDevServerPublicIPRequest.id;
                } else {
                    id = listDevServerPublicIPRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling listDevServerPublicIP.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户所有Lite Server实例列表接口用于获取用户名下所有Lite Server实例的详细信息。该接口适用于以下场景：用户需要查看其所有Lite Server实例的状态、配置等信息，以便进行资源管理和监控。使用该接口的前提条件是用户已登录且具有查看Lite Server实例的权限。调用此接口后，系统将返回用户名下所有Lite Server实例的列表，包括实例ID、名称、状态、创建时间等信息。若用户无权限或未登录，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDevServers(listDevServersRequest?: ListDevServersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let owner;
            
            let sortDir;
            
            let sortKey;
            
            let limit;
            
            let offset;

            if (listDevServersRequest !== null && listDevServersRequest !== undefined) {
                if (listDevServersRequest instanceof ListDevServersRequest) {
                    owner = listDevServersRequest.owner;
                    sortDir = listDevServersRequest.sortDir;
                    sortKey = listDevServersRequest.sortKey;
                    limit = listDevServersRequest.limit;
                    offset = listDevServersRequest.offset;
                } else {
                    owner = listDevServersRequest['owner'];
                    sortDir = listDevServersRequest['sort_dir'];
                    sortKey = listDevServersRequest['sort_key'];
                    limit = listDevServersRequest['limit'];
                    offset = listDevServersRequest['offset'];
                }
            }

        
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
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
         * 查询Hyper Cluster详情列表接口用于获取所有Hyper Cluster的详细信息。该接口适用于以下场景：当用户需要了解系统中所有超节点网络的配置和状态时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询Hyper Cluster详情的权限。查询操作完成后，接口将返回所有超节点网络的详细信息，包括ID、名称、子网信息等。若用户无权限操作或系统中没有Hyper Cluster，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHyperCluster(listHyperClusterRequest?: ListHyperClusterRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/hyper-clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (listHyperClusterRequest !== null && listHyperClusterRequest !== undefined) {
                if (listHyperClusterRequest instanceof ListHyperClusterRequest) {
                    type = listHyperClusterRequest.type;
                } else {
                    type = listHyperClusterRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询超节点hyperinstance-clusters逻辑容量测算结果接口用于获取指定超节点集群的逻辑容量测算结果。该接口适用于以下场景：当用户需要了解超节点集群的资源使用情况和容量规划，以便进行资源管理和优化时，可以通过此接口获取逻辑容量测算结果。使用该接口的前提条件是用户已登录并具有查询超节点集群逻辑容量的权限，且指定的超节点集群已存在。查询操作完成后，接口将返回指定超节点集群的逻辑容量测算结果，包括可用容量信息。若用户无权限操作、指定的超节点集群不存在或集群ID无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHyperinstanceClustersCapacity(listHyperinstanceClustersCapacityRequest?: ListHyperinstanceClustersCapacityRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/hyperinstance/cluster-capacity-evaluations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listHyperinstanceClustersCapacityRequest !== null && listHyperinstanceClustersCapacityRequest !== undefined) {
                if (listHyperinstanceClustersCapacityRequest instanceof ListHyperinstanceClustersCapacityRequest) {
                    body = listHyperinstanceClustersCapacityRequest.body
                } else {
                    body = listHyperinstanceClustersCapacityRequest['body'];
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
         * 查询用户所有超节点实例详情接口用于获取用户所有Lite Server超节点实例的详细信息。该接口适用于以下场景：当用户需要查看其所有超节点实例的配置、状态和使用情况时，可以通过此接口获取相关信息。使用该接口的前提条件是用户已登录并具有查询超节点实例的权限。查询操作完成后，接口将返回所有超节点实例的详细信息，包括实例ID、操作系统、运行状态、资源使用情况等。若用户无权限操作或没有超节点实例，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHyperinstances(listHyperinstancesRequest?: ListHyperinstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/hyperinstance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let sortDir;
            
            let sortKey;
            
            let limit;
            
            let offset;

            if (listHyperinstancesRequest !== null && listHyperinstancesRequest !== undefined) {
                if (listHyperinstancesRequest instanceof ListHyperinstancesRequest) {
                    sortDir = listHyperinstancesRequest.sortDir;
                    sortKey = listHyperinstancesRequest.sortKey;
                    limit = listHyperinstancesRequest.limit;
                    offset = listHyperinstancesRequest.offset;
                } else {
                    sortDir = listHyperinstancesRequest['sort_dir'];
                    sortKey = listHyperinstancesRequest['sort_key'];
                    limit = listHyperinstancesRequest['limit'];
                    offset = listHyperinstancesRequest['offset'];
                }
            }

        
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
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
         * 查询Lite Server超节点标签接口用于获取Lite Server超节点上的所有标签信息。该接口适用于以下场景：当用户需要查看或管理Lite Server超节点的标签时，可以通过此接口查询指定超节点上的所有标签。使用该接口的前提条件是Lite Server超节点已存在，用户具有查询标签的权限。查询操作完成后，接口将返回超节点上的所有标签信息，包括标签名称和相关属性。若Lite Server超节点不存在或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        queryHyperinstanceTags(queryHyperinstanceTagsRequest?: QueryHyperinstanceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (queryHyperinstanceTagsRequest !== null && queryHyperinstanceTagsRequest !== undefined) {
                if (queryHyperinstanceTagsRequest instanceof QueryHyperinstanceTagsRequest) {
                    id = queryHyperinstanceTagsRequest.id;
                } else {
                    id = queryHyperinstanceTagsRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling queryHyperinstanceTags.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启Lite Server实例接口用于重启正在运行的Lite Server实例。该接口适用于以下场景：当用户需要重启实例以应用配置更改、解决运行问题或进行系统维护时，可以通过此接口重启指定的Lite Server实例。使用该接口的前提条件是Lite Server实例已创建且处于运行状态，用户具有重启实例的权限。重启操作完成后，Lite Server实例将重新启动并进入运行状态，用户可以继续使用实例提供的服务。若Lite Server实例不存在、已处于停止状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebootDevServer(rebootDevServerRequest?: RebootDevServerRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dev-servers/{id}/reboot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (rebootDevServerRequest !== null && rebootDevServerRequest !== undefined) {
                if (rebootDevServerRequest instanceof RebootDevServerRequest) {
                    id = rebootDevServerRequest.id;
                } else {
                    id = rebootDevServerRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling rebootDevServer.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重装Lite Server服务器操作系统镜像接口用于重新安装Lite Server服务器的操作系统镜像。该接口适用于以下场景：当用户需要更新操作系统版本、修复系统故障或重新配置系统环境时，可以通过此接口重装指定的Lite Server服务器操作系统镜像。使用该接口的前提条件是Lite Server服务器已存在且处于停止状态，用户具有重装操作系统的权限。重装操作完成后，Lite Server服务器将安装新的操作系统镜像，并重新进入运行状态，若Lite Server服务器不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        reinstallDevServerOS(reinstallDevServerOSRequest?: ReinstallDevServerOSRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/{id}/reinstallos",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (reinstallDevServerOSRequest !== null && reinstallDevServerOSRequest !== undefined) {
                if (reinstallDevServerOSRequest instanceof ReinstallDevServerOSRequest) {
                    id = reinstallDevServerOSRequest.id;
                    body = reinstallDevServerOSRequest.body
                } else {
                    id = reinstallDevServerOSRequest['id'];
                    body = reinstallDevServerOSRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling reinstallDevServerOS.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 缩容Lite Server超节点接口用于减少Lite Server超节点的资源容量。该接口适用于以下场景：当用户需要降低Lite Server超节点的资源使用，以节省成本或优化资源分配时，可以通过此接口进行缩容。使用该接口的前提条件是用户已登录并具有缩容超节点的权限，且指定的超节点已存在且处于运行状态。缩容操作完成后，超节点的资源容量将根据指定的规格进行调整，用户可以立即使用减少后的资源。若用户无权限操作、指定的超节点不存在、超节点已处于最小容量或指定的缩容规格无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        scaleDownHyperinstance(scaleDownHyperinstanceRequest?: ScaleDownHyperinstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/live-scale-down",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (scaleDownHyperinstanceRequest !== null && scaleDownHyperinstanceRequest !== undefined) {
                if (scaleDownHyperinstanceRequest instanceof ScaleDownHyperinstanceRequest) {
                    id = scaleDownHyperinstanceRequest.id;
                    body = scaleDownHyperinstanceRequest.body
                } else {
                    id = scaleDownHyperinstanceRequest['id'];
                    body = scaleDownHyperinstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling scaleDownHyperinstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容Lite Server超节点接口用于增加Lite Server超节点的资源容量。该接口适用于以下场景：当用户需要提升Lite Server超节点的性能，以支持更多的负载或更大的数据处理需求时，可以通过此接口进行扩容。使用该接口的前提条件是用户已登录并具有扩容超节点的权限，且指定的超节点已存在且处于运行状态。扩容操作完成后，超节点的资源容量将根据指定的规格进行调整，用户可以立即使用增加的资源。若用户无权限操作、指定的超节点不存在、超节点已处于最大容量或指定的扩容规格无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        scaleUpHyperinstance(scaleUpHyperinstanceRequest?: ScaleUpHyperinstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/live-scale-up",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (scaleUpHyperinstanceRequest !== null && scaleUpHyperinstanceRequest !== undefined) {
                if (scaleUpHyperinstanceRequest instanceof ScaleUpHyperinstanceRequest) {
                    id = scaleUpHyperinstanceRequest.id;
                    body = scaleUpHyperinstanceRequest.body
                } else {
                    id = scaleUpHyperinstanceRequest['id'];
                    body = scaleUpHyperinstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling scaleUpHyperinstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Lite Server实例详情接口用于获取指定Lite Server实例的详细信息。该接口适用于以下场景：用户需要查看特定Lite Server实例的配置、状态、网络信息等详细数据，以便进行故障排查、资源管理和监控。使用该接口的前提条件是用户已登录且具有查看Lite Server实例的权限，并且需要提供有效的实例ID。查询操作完成后，系统将返回指定Lite Server实例的详细信息，包括实例ID、名称、状态、配置、网络配置等。若用户无权限、实例ID无效或实例不存在，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDevServer(showDevServerRequest?: ShowDevServerRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dev-servers/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showDevServerRequest !== null && showDevServerRequest !== undefined) {
                if (showDevServerRequest instanceof ShowDevServerRequest) {
                    id = showDevServerRequest.id;
                } else {
                    id = showDevServerRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showDevServer.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动Lite Server实例接口用于启动已创建但未运行的Lite Server实例。该接口适用于以下场景：当用户需要开始使用Lite Server实例进行开发或测试时，可以通过此接口启动指定的Lite Server实例。使用该接口的前提条件是Lite Server实例已创建且处于停止状态，用户具有启动实例的权限。若Lite Server实例不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startDevServer(startDevServerRequest?: StartDevServerRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dev-servers/{id}/start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (startDevServerRequest !== null && startDevServerRequest !== undefined) {
                if (startDevServerRequest instanceof StartDevServerRequest) {
                    id = startDevServerRequest.id;
                    body = startDevServerRequest.body
                } else {
                    id = startDevServerRequest['id'];
                    body = startDevServerRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling startDevServer.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动Lite Server超节点服务器接口用于启动已创建但未运行的Lite Server超节点服务器。该接口适用于以下场景：当用户需要开始使用Lite Server超节点服务器进行开发或测试时，可以通过此接口启动指定的超节点服务器。使用该接口的前提条件是Lite Server超节点服务器已创建且处于停止状态，用户具有启动超节点服务器的权限。启动操作完成后，超节点服务器将进入运行状态，用户可以访问和使用服务器提供的服务。若Lite Server超节点服务器不存在、已处于运行状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startHyperinstance(startHyperinstanceRequest?: StartHyperinstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (startHyperinstanceRequest !== null && startHyperinstanceRequest !== undefined) {
                if (startHyperinstanceRequest instanceof StartHyperinstanceRequest) {
                    id = startHyperinstanceRequest.id;
                } else {
                    id = startHyperinstanceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling startHyperinstance.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止Lite Server实例接口用于停止正在运行的Lite Server实例。该接口适用于以下场景：当用户需要停止Lite Server实例，以节省资源或进行维护时，可以通过此接口停止指定的Lite Server实例。使用该接口的前提条件是Lite Server实例已创建且处于运行状态，用户具有停止实例的权限。若Lite Server实例不存在、已处于停止状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopDevServer(stopDevServerRequest?: StopDevServerRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dev-servers/{id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (stopDevServerRequest !== null && stopDevServerRequest !== undefined) {
                if (stopDevServerRequest instanceof StopDevServerRequest) {
                    id = stopDevServerRequest.id;
                } else {
                    id = stopDevServerRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling stopDevServer.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止Lite Server超节点服务器接口用于停止正在运行的Lite Server超节点服务器。该接口适用于以下场景：当用户需要暂停使用Lite Server超节点服务器，以节省资源或进行维护时，可以通过此接口停止指定的超节点服务器。使用该接口的前提条件是Lite Server超节点服务器已创建且处于运行状态或者停止失败状态，用户具有停止超节点服务器的权限。停止操作完成后，超节点服务器将进入停止状态，不再提供服务。若Lite Server超节点服务器不存在、已处于停止状态或用户无权限操作，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopHyperinstance(stopHyperinstanceRequest?: StopHyperinstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dev-servers/hyperinstance/{id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (stopHyperinstanceRequest !== null && stopHyperinstanceRequest !== undefined) {
                if (stopHyperinstanceRequest instanceof StopHyperinstanceRequest) {
                    id = stopHyperinstanceRequest.id;
                } else {
                    id = stopHyperinstanceRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling stopHyperinstance.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实时同步用户Lite Server实例状态接口用于实时获取并同步用户Lite Server实例的当前状态。该接口适用于以下场景：用户需要实时监控其Lite Server实例的运行状态，确保实例正常运行或及时发现并处理异常情况。使用该接口的前提条件是用户已登录并具有相应的权限，且Lite Server实例已创建并处于运行状态。接口调用成功后，将返回Lite Server实例的最新状态信息，包括但不限于实例ID、运行状态、资源使用情况等。若用户无权限操作或Lite Server实例不存在，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncDevServers(syncDevServersRequest?: SyncDevServersRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dev-servers/sync",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let owner;
            
            let sortDir;
            
            let sortKey;
            
            let offset;
            
            let limit;

            if (syncDevServersRequest !== null && syncDevServersRequest !== undefined) {
                if (syncDevServersRequest instanceof SyncDevServersRequest) {
                    owner = syncDevServersRequest.owner;
                    sortDir = syncDevServersRequest.sortDir;
                    sortKey = syncDevServersRequest.sortKey;
                    offset = syncDevServersRequest.offset;
                    limit = syncDevServersRequest.limit;
                } else {
                    owner = syncDevServersRequest['owner'];
                    sortDir = syncDevServersRequest['sort_dir'];
                    sortKey = syncDevServersRequest['sort_key'];
                    offset = syncDevServersRequest['offset'];
                    limit = syncDevServersRequest['limit'];
                }
            }

        
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
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
         * 修改DevServer实例名称接口用于更改已创建的DevServer实例的名称。该接口适用于以下场景：当用户需要对DevServer实例进行重命名以更好地反映实例的功能或用途时，或者在实例名称不再符合当前项目命名规范时进行更新。使用该接口的前提条件是DevServer实例已存在且用户具有对该实例的管理权限。修改操作完成后，实例的新名称将立即生效，并在所有相关视图和记录中更新。若DevServer实例不存在、用户无权限操作或新名称不符合命名规则，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDevServer(updateDevServerRequest?: UpdateDevServerRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dev-servers/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateDevServerRequest !== null && updateDevServerRequest !== undefined) {
                if (updateDevServerRequest instanceof UpdateDevServerRequest) {
                    id = updateDevServerRequest.id;
                    body = updateDevServerRequest.body
                } else {
                    id = updateDevServerRequest['id'];
                    body = updateDevServerRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateDevServer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过运行的实例保存成容器镜像接口用于将正在运行的实例保存为容器镜像。该接口适用于以下场景：用户需要保存当前运行环境以便后续使用或开发时，可通过此接口将实例保存为镜像。使用该接口的前提条件是用户已登录系统并具有访问目标实例的权限，同时实例必须处于运行状态。调用该接口后，系统将保存实例的当前状态为容器镜像，包括安装的依赖包和插件。若用户无权限访问指定实例或实例未运行，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImage(createImageRequest?: CreateImageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/notebooks/{id}/create-image",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (createImageRequest !== null && createImageRequest !== undefined) {
                if (createImageRequest instanceof CreateImageRequest) {
                    id = createImageRequest.id;
                    body = createImageRequest.body
                } else {
                    id = createImageRequest['id'];
                    body = createImageRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling createImage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Notebook实例接口用于根据指定的参数创建一个新的Notebook实例。该接口适用于以下场景：用户需要为特定任务或项目创建Notebook实例时，可通过此接口指定实例规格、AI引擎镜像和存储配置。使用该接口的前提条件是用户已登录系统并具有创建Notebook实例的权限，同时需提供有效的创建参数。调用该接口后，系统将异步创建Notebook实例，用户可通过查询接口获取实例状态。创建完成后，用户可通过网页或SSH客户端访问Notebook实例。若用户无权限创建实例或参数无效，接口将返回相应的错误信息。异常情况包括：若系统资源不足，或创建操作失败，接口将返回相应的错误提示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNotebook(createNotebookRequest?: CreateNotebookRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/notebooks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNotebookRequest !== null && createNotebookRequest !== undefined) {
                if (createNotebookRequest instanceof CreateNotebookRequest) {
                    body = createNotebookRequest.body
                } else {
                    body = createNotebookRequest['body'];
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
         * 添加资源标签接口用于为指定的Notebook实例添加标签信息。该接口适用于以下场景：用户需要为Notebook实例添加标签信息，可通过此接口添加一个或多个标签。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限。调用该接口后，系统将为指定的Notebook实例添加标签，若标签的key已存在，则覆盖原有的value值。若用户无权限操作指定Notebook实例或输入的参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNotebookTags(createNotebookTagsRequest?: CreateNotebookTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/notebooks/{resource_id}/tags/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceId;
            
            let workspaceId;

            if (createNotebookTagsRequest !== null && createNotebookTagsRequest !== undefined) {
                if (createNotebookTagsRequest instanceof CreateNotebookTagsRequest) {
                    resourceId = createNotebookTagsRequest.resourceId;
                    body = createNotebookTagsRequest.body
                    workspaceId = createNotebookTagsRequest.workspaceId;
                } else {
                    resourceId = createNotebookTagsRequest['resource_id'];
                    body = createNotebookTagsRequest['body'];
                    workspaceId = createNotebookTagsRequest['workspace_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createNotebookTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除Notebook实例接口用于移除已创建的Notebook实例及其相关资源。该接口适用于以下场景：用户需要清理不再使用的Notebook实例时，可通过此接口删除指定的Notebook实例，包括其容器和所有存储资源。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限。调用该接口后，系统将删除指定的Notebook实例及其相关资源。若用户无权限操作指定实例或Notebook实例未停止，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或删除操作失败，接口将返回相应的错误提示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNotebook(deleteNotebookRequest?: DeleteNotebookRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/notebooks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteNotebookRequest !== null && deleteNotebookRequest !== undefined) {
                if (deleteNotebookRequest instanceof DeleteNotebookRequest) {
                    id = deleteNotebookRequest.id;
                } else {
                    id = deleteNotebookRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteNotebook.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源标签接口用于移除指定Notebook实例的标签信息。该接口适用于以下场景：用户需要清理或重新组织Notebook实例的标签时，可通过此接口删除单个或多个标签。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限。调用该接口后，系统将删除指定的标签，若标签不存在则不进行操作。若用户无权限操作指定Notebook实例或输入的参数无效，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNotebookTags(deleteNotebookTagsRequest?: DeleteNotebookTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/notebooks/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceId;
            
            let workspaceId;

            if (deleteNotebookTagsRequest !== null && deleteNotebookTagsRequest !== undefined) {
                if (deleteNotebookTagsRequest instanceof DeleteNotebookTagsRequest) {
                    resourceId = deleteNotebookTagsRequest.resourceId;
                    body = deleteNotebookTagsRequest.body
                    workspaceId = deleteNotebookTagsRequest.workspaceId;
                } else {
                    resourceId = deleteNotebookTagsRequest['resource_id'];
                    body = deleteNotebookTagsRequest['body'];
                    workspaceId = deleteNotebookTagsRequest['workspace_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteNotebookTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有Notebook实例列表接口用于获取所有已创建的Notebook实例信息。该接口适用于以下场景：用户需要全面了解当前系统中所有Notebook实例的状态、资源使用情况或管理多个Notebook实例时，可通过此接口获取相关信息。使用该接口的前提条件是用户已创建Notebook实例，并且具有相应的查询权限。调用成功后，系统将返回所有Notebook实例的列表，包含实例ID、状态、创建时间等详细信息。若用户无权限访问，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllNotebooks(listAllNotebooksRequest?: ListAllNotebooksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks/all",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let feature;
            
            let limit;
            
            let name;
            
            let poolId;
            
            let offset;
            
            let owner;
            
            let sortDir;
            
            let sortKey;
            
            let status;
            
            let workspaceId;
            
            let flavor;
            
            let imageId;
            
            let id;
            
            let billing;
            
            let tags;

            if (listAllNotebooksRequest !== null && listAllNotebooksRequest !== undefined) {
                if (listAllNotebooksRequest instanceof ListAllNotebooksRequest) {
                    feature = listAllNotebooksRequest.feature;
                    limit = listAllNotebooksRequest.limit;
                    name = listAllNotebooksRequest.name;
                    poolId = listAllNotebooksRequest.poolId;
                    offset = listAllNotebooksRequest.offset;
                    owner = listAllNotebooksRequest.owner;
                    sortDir = listAllNotebooksRequest.sortDir;
                    sortKey = listAllNotebooksRequest.sortKey;
                    status = listAllNotebooksRequest.status;
                    workspaceId = listAllNotebooksRequest.workspaceId;
                    flavor = listAllNotebooksRequest.flavor;
                    imageId = listAllNotebooksRequest.imageId;
                    id = listAllNotebooksRequest.id;
                    billing = listAllNotebooksRequest.billing;
                    tags = listAllNotebooksRequest.tags;
                } else {
                    feature = listAllNotebooksRequest['feature'];
                    limit = listAllNotebooksRequest['limit'];
                    name = listAllNotebooksRequest['name'];
                    poolId = listAllNotebooksRequest['pool_id'];
                    offset = listAllNotebooksRequest['offset'];
                    owner = listAllNotebooksRequest['owner'];
                    sortDir = listAllNotebooksRequest['sort_dir'];
                    sortKey = listAllNotebooksRequest['sort_key'];
                    status = listAllNotebooksRequest['status'];
                    workspaceId = listAllNotebooksRequest['workspace_id'];
                    flavor = listAllNotebooksRequest['flavor'];
                    imageId = listAllNotebooksRequest['image_id'];
                    id = listAllNotebooksRequest['id'];
                    billing = listAllNotebooksRequest['billing'];
                    tags = listAllNotebooksRequest['tags'];
                }
            }

        
            if (feature !== null && feature !== undefined) {
                localVarQueryParameter['feature'] = feature;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (poolId !== null && poolId !== undefined) {
                localVarQueryParameter['pool_id'] = poolId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (billing !== null && billing !== undefined) {
                localVarQueryParameter['billing'] = billing;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户所有Notebook资源池实例详情接口用于获取用户关联的所有Notebook资源池实例的详细信息。该接口适用于以下场景：当用户创建Notebook示例需要选择资源池时，可通过此接口获取所有资源池实例列表信息。使用该接口的前提条件是用户已注册并登录系统，且具有查看资源池实例的权限。调用成功后，接口将返回包含所有资源池实例的详细信息列表，包括实例名称、状态、节点规格等。若用户未登录、无权限访问或系统内部出现错误，接口将返回相应的错误信息，如未认证、无权限或服务不可用等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthoringClusters(listAuthoringClustersRequest?: ListAuthoringClustersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/authoring/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let workspaceId;
            
            let limit;
            
            let offset;
            
            let scope;

            if (listAuthoringClustersRequest !== null && listAuthoringClustersRequest !== undefined) {
                if (listAuthoringClustersRequest instanceof ListAuthoringClustersRequest) {
                    type = listAuthoringClustersRequest.type;
                    workspaceId = listAuthoringClustersRequest.workspaceId;
                    limit = listAuthoringClustersRequest.limit;
                    offset = listAuthoringClustersRequest.offset;
                    scope = listAuthoringClustersRequest.scope;
                } else {
                    type = listAuthoringClustersRequest['type'];
                    workspaceId = listAuthoringClustersRequest['workspace_id'];
                    limit = listAuthoringClustersRequest['limit'];
                    offset = listAuthoringClustersRequest['offset'];
                    scope = listAuthoringClustersRequest['scope'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listAuthoringClusters.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (scope !== null && scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前用户指定特性的开关及配额接口用于获取指定特性在当前用户下的开关状态及配额信息。该接口适用于以下场景：当用户需要了解特定特性是否已开启、查看配额限制或监控已使用的资源情况时，可通过此接口查询相关信息。使用该接口的前提条件是用户已登录且具有查询权限，同时指定的特性必须存在。调用该接口后，系统将返回该特性是否已开启、配额总量及已使用的资源情况等详细信息。若用户无权限查询、特性不存在或系统出现异常，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFeatures(listFeaturesRequest?: ListFeaturesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/authoring/features/{feature}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let feature;

            if (listFeaturesRequest !== null && listFeaturesRequest !== undefined) {
                if (listFeaturesRequest instanceof ListFeaturesRequest) {
                    feature = listFeaturesRequest.feature;
                } else {
                    feature = listFeaturesRequest['feature'];
                }
            }

        
            if (feature === null || feature === undefined) {
            throw new RequiredError('feature','Required parameter feature was null or undefined when calling listFeatures.');
            }

            options.pathParams = { 'feature': feature, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Notebook支持的有效规格列表接口用于获取运行Notebook实例时可使用的规格选项。该接口适用于以下场景：用户需要了解Notebook实例支持的配置选项时，可通过此接口查询可用的规格列表。使用该接口的前提条件是用户已登录系统并具有访问目标Notebook实例的权限。调用该接口后，系统将返回Notebook实例支持的有效规格列表，包括内存、CPU等配置信息。若用户无权限访问指定实例或Notebook实例未运行，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let category;
            
            let limit;
            
            let offset;
            
            let type;
            
            let sortDir;
            
            let sortKey;
            
            let flavorType;
            
            let feature;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    category = listFlavorsRequest.category;
                    limit = listFlavorsRequest.limit;
                    offset = listFlavorsRequest.offset;
                    type = listFlavorsRequest.type;
                    sortDir = listFlavorsRequest.sortDir;
                    sortKey = listFlavorsRequest.sortKey;
                    flavorType = listFlavorsRequest.flavorType;
                    feature = listFlavorsRequest.feature;
                } else {
                    category = listFlavorsRequest['category'];
                    limit = listFlavorsRequest['limit'];
                    offset = listFlavorsRequest['offset'];
                    type = listFlavorsRequest['type'];
                    sortDir = listFlavorsRequest['sort_dir'];
                    sortKey = listFlavorsRequest['sort_key'];
                    flavorType = listFlavorsRequest['flavor_type'];
                    feature = listFlavorsRequest['feature'];
                }
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
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (flavorType !== null && flavorType !== undefined) {
                localVarQueryParameter['flavor_type'] = flavorType;
            }
            if (feature !== null && feature !== undefined) {
                localVarQueryParameter['feature'] = feature;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Notebook实例列表接口用于获取满足特定条件的Notebook实例信息。该接口适用于以下场景：用户管理多个Notebook实例或查看特定状态的Notebook实例时，可通过此接口获取相关信息。使用该接口的前提条件是用户已创建Notebook实例，并且具有相应的查询权限。调用成功后，系统将返回符合条件的Notebook实例列表，包含实例ID、状态、创建时间等详细信息。若用户无权限访问或查询条件不明确，接口将返回相应的错误信息或空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotebooks(listNotebooksRequest?: ListNotebooksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let feature;
            
            let limit;
            
            let name;
            
            let poolId;
            
            let offset;
            
            let owner;
            
            let sortDir;
            
            let sortKey;
            
            let status;
            
            let workspaceId;
            
            let flavor;
            
            let imageId;
            
            let id;
            
            let billing;
            
            let tags;

            if (listNotebooksRequest !== null && listNotebooksRequest !== undefined) {
                if (listNotebooksRequest instanceof ListNotebooksRequest) {
                    feature = listNotebooksRequest.feature;
                    limit = listNotebooksRequest.limit;
                    name = listNotebooksRequest.name;
                    poolId = listNotebooksRequest.poolId;
                    offset = listNotebooksRequest.offset;
                    owner = listNotebooksRequest.owner;
                    sortDir = listNotebooksRequest.sortDir;
                    sortKey = listNotebooksRequest.sortKey;
                    status = listNotebooksRequest.status;
                    workspaceId = listNotebooksRequest.workspaceId;
                    flavor = listNotebooksRequest.flavor;
                    imageId = listNotebooksRequest.imageId;
                    id = listNotebooksRequest.id;
                    billing = listNotebooksRequest.billing;
                    tags = listNotebooksRequest.tags;
                } else {
                    feature = listNotebooksRequest['feature'];
                    limit = listNotebooksRequest['limit'];
                    name = listNotebooksRequest['name'];
                    poolId = listNotebooksRequest['pool_id'];
                    offset = listNotebooksRequest['offset'];
                    owner = listNotebooksRequest['owner'];
                    sortDir = listNotebooksRequest['sort_dir'];
                    sortKey = listNotebooksRequest['sort_key'];
                    status = listNotebooksRequest['status'];
                    workspaceId = listNotebooksRequest['workspace_id'];
                    flavor = listNotebooksRequest['flavor'];
                    imageId = listNotebooksRequest['image_id'];
                    id = listNotebooksRequest['id'];
                    billing = listNotebooksRequest['billing'];
                    tags = listNotebooksRequest['tags'];
                }
            }

        
            if (feature !== null && feature !== undefined) {
                localVarQueryParameter['feature'] = feature;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (poolId !== null && poolId !== undefined) {
                localVarQueryParameter['pool_id'] = poolId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (billing !== null && billing !== undefined) {
                localVarQueryParameter['billing'] = billing;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Notebook时长续约接口用于延长运行中的Notebook实例的运行时间。该接口适用于以下场景：用户需要延长Notebook实例的使用时间以完成长时间任务时，可通过此接口延长指定实例的运行时间。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限，同时Notebook实例必须处于运行状态。调用该接口后，系统将延长指定Notebook实例的运行时间，用户可继续使用。若用户无权限操作指定实例或Notebook实例未运行，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        renewLease(renewLeaseRequest?: RenewLeaseRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/notebooks/{id}/lease",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let id;
            
            let duration;

            if (renewLeaseRequest !== null && renewLeaseRequest !== undefined) {
                if (renewLeaseRequest instanceof RenewLeaseRequest) {
                    id = renewLeaseRequest.id;
                    duration = renewLeaseRequest.duration;
                    body = renewLeaseRequest.body
                } else {
                    id = renewLeaseRequest['id'];
                    duration = renewLeaseRequest['duration'];
                    body = renewLeaseRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling renewLease.');
            }
            if (duration !== null && duration !== undefined) {
                localVarQueryParameter['duration'] = duration;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Notebook资源池详情接口用于获取资源池的详细信息。该接口适用于以下场景：当用户需要创建Notebook实例作业时，可通过此接口查询指定集群的详细信息。使用该接口的前提条件是集群已成功纳管且用户具有相应的访问权限。调用该接口后，系统将返回集群的实例ID、名称、Flavor规格、实例状态以及实例可打开的URL等详细信息。若集群不存在、未被纳管或用户无权限访问，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCluster(showClusterRequest?: ShowClusterRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/authoring/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterRequest !== null && showClusterRequest !== undefined) {
                if (showClusterRequest instanceof ShowClusterRequest) {
                    clusterId = showClusterRequest.clusterId;
                } else {
                    clusterId = showClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询运行中的Notebook可用时长接口用于获取正在运行的Notebook实例的剩余可用时间。该接口适用于以下场景：用户需要了解Notebook实例的剩余运行时间以合理安排任务时，可通过此接口查询指定实例的可用时长。使用该接口的前提条件是用户已登录系统并具有访问目标Notebook实例的权限，同时Notebook实例必须处于运行状态。调用该接口后，系统将返回指定Notebook实例的可用时长信息。若用户无权限访问指定实例或Notebook实例未运行，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或查询操作失败，接口将返回相应的错误提示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLease(showLeaseRequest?: ShowLeaseRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks/{id}/lease",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showLeaseRequest !== null && showLeaseRequest !== undefined) {
                if (showLeaseRequest instanceof ShowLeaseRequest) {
                    id = showLeaseRequest.id;
                } else {
                    id = showLeaseRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showLease.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Notebook实例详情接口用于获取指定Notebook实例的详细信息。该接口适用于以下场景：用户需要查看特定Notebook实例的详细配置、运行状态或获取访问链接时，可通过此接口获取相关信息。使用该接口的前提条件是Notebook实例已存在且用户具有相应的查询权限。调用成功后，系统将返回实例ID、名称、规格、镜像、实例状态和实例可打开的URL等详细信息。若实例不存在或用户无权限访问，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNotebook(showNotebookRequest?: ShowNotebookRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showNotebookRequest !== null && showNotebookRequest !== undefined) {
                if (showNotebookRequest instanceof ShowNotebookRequest) {
                    id = showNotebookRequest.id;
                } else {
                    id = showNotebookRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showNotebook.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Notebook资源类型下的标签接口用于获取用户当前project下Notebook实例的标签信息。该接口适用于以下场景：用户需要管理或统计Notebook资源时，可通过此接口查询特定标签或所有标签的Notebook实例。使用该接口的前提条件是用户已登录系统并具有访问权限，同时可指定工作空间或默认查询所有工作空间。调用该接口后，系统将返回指定Notebook实例的标签列表，包括标签名称、标签值等信息。若用户无权限，则返回相应的异常信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNotebookTags(showNotebookTagsRequest?: ShowNotebookTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;

            if (showNotebookTagsRequest !== null && showNotebookTagsRequest !== undefined) {
                if (showNotebookTagsRequest instanceof ShowNotebookTagsRequest) {
                    workspaceId = showNotebookTagsRequest.workspaceId;
                } else {
                    workspaceId = showNotebookTagsRequest['workspace_id'];
                }
            }

        
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Notebook支持的可切换规格列表接口用于获取创建Notebook实例时可选择的规格选项。该接口适用于以下场景：用户需要了解Notebook实例支持的配置选项时，可通过此接口查询可用的规格列表。使用该接口的前提条件是用户已登录系统并具有创建Notebook实例的权限。调用该接口后，系统将返回Notebook实例支持的可切换规格列表，包括内存、CPU等配置信息。若用户无权限创建Notebook实例，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSwitchableFlavors(showSwitchableFlavorsRequest?: ShowSwitchableFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notebooks/{id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;

            if (showSwitchableFlavorsRequest !== null && showSwitchableFlavorsRequest !== undefined) {
                if (showSwitchableFlavorsRequest instanceof ShowSwitchableFlavorsRequest) {
                    id = showSwitchableFlavorsRequest.id;
                    limit = showSwitchableFlavorsRequest.limit;
                    offset = showSwitchableFlavorsRequest.offset;
                    sortKey = showSwitchableFlavorsRequest.sortKey;
                    sortDir = showSwitchableFlavorsRequest.sortDir;
                } else {
                    id = showSwitchableFlavorsRequest['id'];
                    limit = showSwitchableFlavorsRequest['limit'];
                    offset = showSwitchableFlavorsRequest['offset'];
                    sortKey = showSwitchableFlavorsRequest['sort_key'];
                    sortDir = showSwitchableFlavorsRequest['sort_dir'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showSwitchableFlavors.');
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
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动Notebook实例接口用于启动已创建的Notebook实例。该接口适用于以下场景：用户需要开始运行Notebook实例以进行数据处理、模型训练或开发时，可通过此接口启动指定的Notebook实例。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限，同时Notebook实例必须处于停止状态且配置正确。调用该接口后，系统将启动指定的Notebook实例，用户可开始使用。若用户无权限操作指定实例或Notebook实例未停止，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或启动操作失败，接口将返回相应的错误提示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startNotebook(startNotebookRequest?: StartNotebookRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/notebooks/{id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let duration;
            
            let type;

            if (startNotebookRequest !== null && startNotebookRequest !== undefined) {
                if (startNotebookRequest instanceof StartNotebookRequest) {
                    id = startNotebookRequest.id;
                    duration = startNotebookRequest.duration;
                    type = startNotebookRequest.type;
                } else {
                    id = startNotebookRequest['id'];
                    duration = startNotebookRequest['duration'];
                    type = startNotebookRequest['type'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling startNotebook.');
            }
            if (duration !== null && duration !== undefined) {
                localVarQueryParameter['duration'] = duration;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止Notebook实例接口用于停止正在运行的Notebook实例。该接口适用于以下场景：用户需要释放Notebook实例占用的资源或结束当前运行的任务时，可通过此接口停止指定的Notebook实例。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限，同时Notebook实例必须处于运行状态。调用该接口后，系统将停止指定的Notebook实例，释放相关资源。若用户无权限操作指定实例或Notebook实例未运行，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或停止操作失败，接口将返回相应的错误提示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopNotebook(stopNotebookRequest?: StopNotebookRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/notebooks/{id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (stopNotebookRequest !== null && stopNotebookRequest !== undefined) {
                if (stopNotebookRequest instanceof StopNotebookRequest) {
                    id = stopNotebookRequest.id;
                } else {
                    id = stopNotebookRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling stopNotebook.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新Notebook实例接口用于修改Notebook实例的配置信息，包括名称、描述、规格和镜像等。该接口适用于以下场景：用户需要调整Notebook实例的配置以适应新的需求时，可通过此接口更新实例的详细信息。使用该接口的前提条件是用户已登录系统并具有操作目标Notebook实例的权限，同时Notebook实例必须处于停止状态。调用该接口后，系统将更新指定Notebook实例的配置信息。若用户无权限操作指定实例或Notebook实例未停止，接口将返回相应的错误信息。异常情况包括：若指定的Notebook实例不存在，或更新参数无效，接口将返回相应的错误提示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNotebook(updateNotebookRequest?: UpdateNotebookRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/notebooks/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateNotebookRequest !== null && updateNotebookRequest !== undefined) {
                if (updateNotebookRequest instanceof UpdateNotebookRequest) {
                    id = updateNotebookRequest.id;
                    body = updateNotebookRequest.body
                } else {
                    id = updateNotebookRequest['id'];
                    body = updateNotebookRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateNotebook.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Workflow工作流。[可参考[如何开发Workflow](https://support.huaweicloud.com/usermanual-standard-modelarts/modelarts_workflow_0292.html)，创建工作流。](tag:hc)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflow(createWorkflowRequest?: CreateWorkflowRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workflows",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWorkflowRequest !== null && createWorkflowRequest !== undefined) {
                if (createWorkflowRequest instanceof CreateWorkflowRequest) {
                    body = createWorkflowRequest.body
                } else {
                    body = createWorkflowRequest['body'];
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
         * 计费工作流购买资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflowPurchasePool(createWorkflowPurchasePoolRequest?: CreateWorkflowPurchasePoolRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workflows/{workflow_id}/service/packages",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;

            if (createWorkflowPurchasePoolRequest !== null && createWorkflowPurchasePoolRequest !== undefined) {
                if (createWorkflowPurchasePoolRequest instanceof CreateWorkflowPurchasePoolRequest) {
                    workflowId = createWorkflowPurchasePoolRequest.workflowId;
                    body = createWorkflowPurchasePoolRequest.body
                } else {
                    workflowId = createWorkflowPurchasePoolRequest['workflow_id'];
                    body = createWorkflowPurchasePoolRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling createWorkflowPurchasePool.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 计费工作流在线服务鉴权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflowServiceAuth(createWorkflowServiceAuthRequest?: CreateWorkflowServiceAuthRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workflows/service/auth",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWorkflowServiceAuthRequest !== null && createWorkflowServiceAuthRequest !== undefined) {
                if (createWorkflowServiceAuthRequest instanceof CreateWorkflowServiceAuthRequest) {
                    body = createWorkflowServiceAuthRequest.body
                } else {
                    body = createWorkflowServiceAuthRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过ID删除Workflow工作流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkflow(deleteWorkflowRequest?: DeleteWorkflowRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workflows/{workflow_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;

            if (deleteWorkflowRequest !== null && deleteWorkflowRequest !== undefined) {
                if (deleteWorkflowRequest instanceof DeleteWorkflowRequest) {
                    workflowId = deleteWorkflowRequest.workflowId;
                } else {
                    workflowId = deleteWorkflowRequest['workflow_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling deleteWorkflow.');
            }

            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 展示Workflow工作流列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflows(listWorkflowsRequest?: ListWorkflowsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let description;
            
            let status;
            
            let labels;
            
            let templateId;
            
            let limit;
            
            let offset;
            
            let sortBy;
            
            let searchType;

            if (listWorkflowsRequest !== null && listWorkflowsRequest !== undefined) {
                if (listWorkflowsRequest instanceof ListWorkflowsRequest) {
                    name = listWorkflowsRequest.name;
                    description = listWorkflowsRequest.description;
                    status = listWorkflowsRequest.status;
                    labels = listWorkflowsRequest.labels;
                    templateId = listWorkflowsRequest.templateId;
                    limit = listWorkflowsRequest.limit;
                    offset = listWorkflowsRequest.offset;
                    sortBy = listWorkflowsRequest.sortBy;
                    searchType = listWorkflowsRequest.searchType;
                } else {
                    name = listWorkflowsRequest['name'];
                    description = listWorkflowsRequest['description'];
                    status = listWorkflowsRequest['status'];
                    labels = listWorkflowsRequest['labels'];
                    templateId = listWorkflowsRequest['template_id'];
                    limit = listWorkflowsRequest['limit'];
                    offset = listWorkflowsRequest['offset'];
                    sortBy = listWorkflowsRequest['sort_by'];
                    searchType = listWorkflowsRequest['search_type'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (labels !== null && labels !== undefined) {
                localVarQueryParameter['labels'] = labels;
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (searchType !== null && searchType !== undefined) {
                localVarQueryParameter['search_type'] = searchType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过ID查询Workflow工作流详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflow(showWorkflowRequest?: ShowWorkflowRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let workspaceId;

            if (showWorkflowRequest !== null && showWorkflowRequest !== undefined) {
                if (showWorkflowRequest instanceof ShowWorkflowRequest) {
                    workflowId = showWorkflowRequest.workflowId;
                    workspaceId = showWorkflowRequest.workspaceId;
                } else {
                    workflowId = showWorkflowRequest['workflow_id'];
                    workspaceId = showWorkflowRequest['workspace_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkflow.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Workflow列表所有标签接口用于获取指定项目下所有工作流的标签信息。
         * 该接口适用于以下场景：当用户需要了解项目中所有工作流的标签配置，以便进行资源管理和筛选时，可以通过此接口获取标签列表。使用该接口的前提条件是用户已登录并具有查看工作流标签的权限。响应消息体中包含每个工作流的标签信息，如标签键和值。若用户无权限或项目下无工作流，接口将返回相应的错误信息或空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowLabels(showWorkflowLabelsRequest?: ShowWorkflowLabelsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/labels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let order;
            
            let sortBy;
            
            let templateId;

            if (showWorkflowLabelsRequest !== null && showWorkflowLabelsRequest !== undefined) {
                if (showWorkflowLabelsRequest instanceof ShowWorkflowLabelsRequest) {
                    limit = showWorkflowLabelsRequest.limit;
                    offset = showWorkflowLabelsRequest.offset;
                    order = showWorkflowLabelsRequest.order;
                    sortBy = showWorkflowLabelsRequest.sortBy;
                    templateId = showWorkflowLabelsRequest.templateId;
                } else {
                    limit = showWorkflowLabelsRequest['limit'];
                    offset = showWorkflowLabelsRequest['offset'];
                    order = showWorkflowLabelsRequest['order'];
                    sortBy = showWorkflowLabelsRequest['sort_by'];
                    templateId = showWorkflowLabelsRequest['template_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Workflow工作流统计信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowsOverview(showWorkflowsOverviewRequest?: ShowWorkflowsOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let searchType;
            
            let name;
            
            let description;

            if (showWorkflowsOverviewRequest !== null && showWorkflowsOverviewRequest !== undefined) {
                if (showWorkflowsOverviewRequest instanceof ShowWorkflowsOverviewRequest) {
                    workspaceId = showWorkflowsOverviewRequest.workspaceId;
                    searchType = showWorkflowsOverviewRequest.searchType;
                    name = showWorkflowsOverviewRequest.name;
                    description = showWorkflowsOverviewRequest.description;
                } else {
                    workspaceId = showWorkflowsOverviewRequest['workspace_id'];
                    searchType = showWorkflowsOverviewRequest['search_type'];
                    name = showWorkflowsOverviewRequest['name'];
                    description = showWorkflowsOverviewRequest['description'];
                }
            }

        
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (searchType !== null && searchType !== undefined) {
                localVarQueryParameter['search_type'] = searchType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Workflow待办列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowsTodolist(showWorkflowsTodolistRequest?: ShowWorkflowsTodolistRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/todolist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;

            if (showWorkflowsTodolistRequest !== null && showWorkflowsTodolistRequest !== undefined) {
                if (showWorkflowsTodolistRequest instanceof ShowWorkflowsTodolistRequest) {
                    workspaceId = showWorkflowsTodolistRequest.workspaceId;
                } else {
                    workspaceId = showWorkflowsTodolistRequest['workspace_id'];
                }
            }

        
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新Workflow工作流信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkflow(updateWorkflowRequest?: UpdateWorkflowRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workflows/{workflow_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;

            if (updateWorkflowRequest !== null && updateWorkflowRequest !== undefined) {
                if (updateWorkflowRequest instanceof UpdateWorkflowRequest) {
                    workflowId = updateWorkflowRequest.workflowId;
                    body = updateWorkflowRequest.body
                } else {
                    workflowId = updateWorkflowRequest['workflow_id'];
                    body = updateWorkflowRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling updateWorkflow.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Workflow Execution。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflowExecution(createWorkflowExecutionRequest?: CreateWorkflowExecutionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;

            if (createWorkflowExecutionRequest !== null && createWorkflowExecutionRequest !== undefined) {
                if (createWorkflowExecutionRequest instanceof CreateWorkflowExecutionRequest) {
                    workflowId = createWorkflowExecutionRequest.workflowId;
                    body = createWorkflowExecutionRequest.body
                } else {
                    workflowId = createWorkflowExecutionRequest['workflow_id'];
                    body = createWorkflowExecutionRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling createWorkflowExecution.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口支持对Workflow Execution进行停止或重跑操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflowExecutionsActions(createWorkflowExecutionsActionsRequest?: CreateWorkflowExecutionsActionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions/{execution_id}/actions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;
            
            let executionId;

            if (createWorkflowExecutionsActionsRequest !== null && createWorkflowExecutionsActionsRequest !== undefined) {
                if (createWorkflowExecutionsActionsRequest instanceof CreateWorkflowExecutionsActionsRequest) {
                    workflowId = createWorkflowExecutionsActionsRequest.workflowId;
                    executionId = createWorkflowExecutionsActionsRequest.executionId;
                    body = createWorkflowExecutionsActionsRequest.body
                } else {
                    workflowId = createWorkflowExecutionsActionsRequest['workflow_id'];
                    executionId = createWorkflowExecutionsActionsRequest['execution_id'];
                    body = createWorkflowExecutionsActionsRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling createWorkflowExecutionsActions.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling createWorkflowExecutionsActions.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 本接口支持对Workflow StepExecution进行重试、停止和继续操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflowStepExecutionsActions(createWorkflowStepExecutionsActionsRequest?: CreateWorkflowStepExecutionsActionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions/{execution_id}/step-executions/{step_execution_id}/actions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;
            
            let executionId;
            
            let stepExecutionId;

            if (createWorkflowStepExecutionsActionsRequest !== null && createWorkflowStepExecutionsActionsRequest !== undefined) {
                if (createWorkflowStepExecutionsActionsRequest instanceof CreateWorkflowStepExecutionsActionsRequest) {
                    workflowId = createWorkflowStepExecutionsActionsRequest.workflowId;
                    executionId = createWorkflowStepExecutionsActionsRequest.executionId;
                    stepExecutionId = createWorkflowStepExecutionsActionsRequest.stepExecutionId;
                    body = createWorkflowStepExecutionsActionsRequest.body
                } else {
                    workflowId = createWorkflowStepExecutionsActionsRequest['workflow_id'];
                    executionId = createWorkflowStepExecutionsActionsRequest['execution_id'];
                    stepExecutionId = createWorkflowStepExecutionsActionsRequest['step_execution_id'];
                    body = createWorkflowStepExecutionsActionsRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling createWorkflowStepExecutionsActions.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling createWorkflowStepExecutionsActions.');
            }
            if (stepExecutionId === null || stepExecutionId === undefined) {
            throw new RequiredError('stepExecutionId','Required parameter stepExecutionId was null or undefined when calling createWorkflowStepExecutionsActions.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId,'step_execution_id': stepExecutionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过ID删除Workflow Execution。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkflowExecution(deleteWorkflowExecutionRequest?: DeleteWorkflowExecutionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions/{execution_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let executionId;

            if (deleteWorkflowExecutionRequest !== null && deleteWorkflowExecutionRequest !== undefined) {
                if (deleteWorkflowExecutionRequest instanceof DeleteWorkflowExecutionRequest) {
                    workflowId = deleteWorkflowExecutionRequest.workflowId;
                    executionId = deleteWorkflowExecutionRequest.executionId;
                } else {
                    workflowId = deleteWorkflowExecutionRequest['workflow_id'];
                    executionId = deleteWorkflowExecutionRequest['execution_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling deleteWorkflowExecution.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling deleteWorkflowExecution.');
            }

            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Workflow Execution列表的所有标签接口用于查询指定工作流执行记录中的所有标签。
         * 该接口适用于以下场景：当用户需要查看工作流执行记录的标签信息，以便进行分类、筛选或统计时，可以通过此接口获取所有标签的列表。使用该接口的前提条件是用户已登录且具有查看工作流执行记录的权限。接口响应消息体中包含每个标签的详细信息，如标签键和标签值。若用户无权限操作或指定的工作流执行记录不存在，接口将返回相应的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExecutionLabels(listExecutionLabelsRequest?: ListExecutionLabelsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions/labels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;

            if (listExecutionLabelsRequest !== null && listExecutionLabelsRequest !== undefined) {
                if (listExecutionLabelsRequest instanceof ListExecutionLabelsRequest) {
                    workflowId = listExecutionLabelsRequest.workflowId;
                } else {
                    workflowId = listExecutionLabelsRequest['workflow_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling listExecutionLabels.');
            }

            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Workflow下的执行记录列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflowExecutions(listWorkflowExecutionsRequest?: ListWorkflowExecutionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let workspaceId;
            
            let limit;
            
            let sortBy;
            
            let offset;
            
            let labels;
            
            let status;
            
            let sceneId;
            
            let order;

            if (listWorkflowExecutionsRequest !== null && listWorkflowExecutionsRequest !== undefined) {
                if (listWorkflowExecutionsRequest instanceof ListWorkflowExecutionsRequest) {
                    workflowId = listWorkflowExecutionsRequest.workflowId;
                    workspaceId = listWorkflowExecutionsRequest.workspaceId;
                    limit = listWorkflowExecutionsRequest.limit;
                    sortBy = listWorkflowExecutionsRequest.sortBy;
                    offset = listWorkflowExecutionsRequest.offset;
                    labels = listWorkflowExecutionsRequest.labels;
                    status = listWorkflowExecutionsRequest.status;
                    sceneId = listWorkflowExecutionsRequest.sceneId;
                    order = listWorkflowExecutionsRequest.order;
                } else {
                    workflowId = listWorkflowExecutionsRequest['workflow_id'];
                    workspaceId = listWorkflowExecutionsRequest['workspace_id'];
                    limit = listWorkflowExecutionsRequest['limit'];
                    sortBy = listWorkflowExecutionsRequest['sort_by'];
                    offset = listWorkflowExecutionsRequest['offset'];
                    labels = listWorkflowExecutionsRequest['labels'];
                    status = listWorkflowExecutionsRequest['status'];
                    sceneId = listWorkflowExecutionsRequest['scene_id'];
                    order = listWorkflowExecutionsRequest['order'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling listWorkflowExecutions.');
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (labels !== null && labels !== undefined) {
                localVarQueryParameter['labels'] = labels;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sceneId !== null && sceneId !== undefined) {
                localVarQueryParameter['scene_id'] = sceneId;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定工作流中各步骤的执行情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflowStepExecution(listWorkflowStepExecutionRequest?: ListWorkflowStepExecutionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}/step-executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let limit;
            
            let offset;
            
            let order;
            
            let sortBy;

            if (listWorkflowStepExecutionRequest !== null && listWorkflowStepExecutionRequest !== undefined) {
                if (listWorkflowStepExecutionRequest instanceof ListWorkflowStepExecutionRequest) {
                    workflowId = listWorkflowStepExecutionRequest.workflowId;
                    limit = listWorkflowStepExecutionRequest.limit;
                    offset = listWorkflowStepExecutionRequest.offset;
                    order = listWorkflowStepExecutionRequest.order;
                    sortBy = listWorkflowStepExecutionRequest.sortBy;
                } else {
                    workflowId = listWorkflowStepExecutionRequest['workflow_id'];
                    limit = listWorkflowStepExecutionRequest['limit'];
                    offset = listWorkflowStepExecutionRequest['offset'];
                    order = listWorkflowStepExecutionRequest['order'];
                    sortBy = listWorkflowStepExecutionRequest['sort_by'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling listWorkflowStepExecution.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过ID查询Workflow Execution详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowExecution(showWorkflowExecutionRequest?: ShowWorkflowExecutionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions/{execution_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let executionId;

            if (showWorkflowExecutionRequest !== null && showWorkflowExecutionRequest !== undefined) {
                if (showWorkflowExecutionRequest instanceof ShowWorkflowExecutionRequest) {
                    workflowId = showWorkflowExecutionRequest.workflowId;
                    executionId = showWorkflowExecutionRequest.executionId;
                } else {
                    workflowId = showWorkflowExecutionRequest['workflow_id'];
                    executionId = showWorkflowExecutionRequest['execution_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkflowExecution.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling showWorkflowExecution.');
            }

            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Workflow工作流节点的度量信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowStepExecutionMetrics(showWorkflowStepExecutionMetricsRequest?: ShowWorkflowStepExecutionMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions/{execution_id}/step-executions/{step_execution_id}/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let executionId;
            
            let stepExecutionId;

            if (showWorkflowStepExecutionMetricsRequest !== null && showWorkflowStepExecutionMetricsRequest !== undefined) {
                if (showWorkflowStepExecutionMetricsRequest instanceof ShowWorkflowStepExecutionMetricsRequest) {
                    workflowId = showWorkflowStepExecutionMetricsRequest.workflowId;
                    executionId = showWorkflowStepExecutionMetricsRequest.executionId;
                    stepExecutionId = showWorkflowStepExecutionMetricsRequest.stepExecutionId;
                } else {
                    workflowId = showWorkflowStepExecutionMetricsRequest['workflow_id'];
                    executionId = showWorkflowStepExecutionMetricsRequest['execution_id'];
                    stepExecutionId = showWorkflowStepExecutionMetricsRequest['step_execution_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkflowStepExecutionMetrics.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling showWorkflowStepExecutionMetrics.');
            }
            if (stepExecutionId === null || stepExecutionId === undefined) {
            throw new RequiredError('stepExecutionId','Required parameter stepExecutionId was null or undefined when calling showWorkflowStepExecutionMetrics.');
            }

            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId,'step_execution_id': stepExecutionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过ID更新Workflow Exectuion。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkflowExecution(updateWorkflowExecutionRequest?: UpdateWorkflowExecutionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workflows/{workflow_id}/executions/{execution_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;
            
            let executionId;

            if (updateWorkflowExecutionRequest !== null && updateWorkflowExecutionRequest !== undefined) {
                if (updateWorkflowExecutionRequest instanceof UpdateWorkflowExecutionRequest) {
                    workflowId = updateWorkflowExecutionRequest.workflowId;
                    executionId = updateWorkflowExecutionRequest.executionId;
                    body = updateWorkflowExecutionRequest.body
                } else {
                    workflowId = updateWorkflowExecutionRequest['workflow_id'];
                    executionId = updateWorkflowExecutionRequest['execution_id'];
                    body = updateWorkflowExecutionRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling updateWorkflowExecution.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling updateWorkflowExecution.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建Workflow定时调度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflowSchedule(createWorkflowScheduleRequest?: CreateWorkflowScheduleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workflows/{workflow_id}/schedules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;

            if (createWorkflowScheduleRequest !== null && createWorkflowScheduleRequest !== undefined) {
                if (createWorkflowScheduleRequest instanceof CreateWorkflowScheduleRequest) {
                    workflowId = createWorkflowScheduleRequest.workflowId;
                    body = createWorkflowScheduleRequest.body
                } else {
                    workflowId = createWorkflowScheduleRequest['workflow_id'];
                    body = createWorkflowScheduleRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling createWorkflowSchedule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除工作流调度信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkflowScheduleId(deleteWorkflowScheduleIdRequest?: DeleteWorkflowScheduleIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workflows/{workflow_id}/schedules/{schedule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let scheduleId;

            if (deleteWorkflowScheduleIdRequest !== null && deleteWorkflowScheduleIdRequest !== undefined) {
                if (deleteWorkflowScheduleIdRequest instanceof DeleteWorkflowScheduleIdRequest) {
                    workflowId = deleteWorkflowScheduleIdRequest.workflowId;
                    scheduleId = deleteWorkflowScheduleIdRequest.scheduleId;
                } else {
                    workflowId = deleteWorkflowScheduleIdRequest['workflow_id'];
                    scheduleId = deleteWorkflowScheduleIdRequest['schedule_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling deleteWorkflowScheduleId.');
            }
            if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('scheduleId','Required parameter scheduleId was null or undefined when calling deleteWorkflowScheduleId.');
            }

            options.pathParams = { 'workflow_id': workflowId,'schedule_id': scheduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作流调度详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowSchedule(showWorkflowScheduleRequest?: ShowWorkflowScheduleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}/schedules/{schedule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let scheduleId;

            if (showWorkflowScheduleRequest !== null && showWorkflowScheduleRequest !== undefined) {
                if (showWorkflowScheduleRequest instanceof ShowWorkflowScheduleRequest) {
                    workflowId = showWorkflowScheduleRequest.workflowId;
                    scheduleId = showWorkflowScheduleRequest.scheduleId;
                } else {
                    workflowId = showWorkflowScheduleRequest['workflow_id'];
                    scheduleId = showWorkflowScheduleRequest['schedule_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkflowSchedule.');
            }
            if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('scheduleId','Required parameter scheduleId was null or undefined when calling showWorkflowSchedule.');
            }

            options.pathParams = { 'workflow_id': workflowId,'schedule_id': scheduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作流定时调度列表接口用于获取指定项目下所有工作流的定时调度信息。
         * 该接口适用于以下场景：当用户需要查看项目中所有工作流的定时调度配置，以便进行任务管理和调度优化时，可以通过此接口获取定时调度列表。使用该接口的前提条件是用户已登录并具有查看工作流定时调度的权限。响应消息体中包含每个工作流的定时调度信息，如调度ID、调度时间、状态等。若用户无权限或项目下无工作流定时调度，接口将返回相应的错误信息或空列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowScheduleList(showWorkflowScheduleListRequest?: ShowWorkflowScheduleListRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}/schedules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;

            if (showWorkflowScheduleListRequest !== null && showWorkflowScheduleListRequest !== undefined) {
                if (showWorkflowScheduleListRequest instanceof ShowWorkflowScheduleListRequest) {
                    workflowId = showWorkflowScheduleListRequest.workflowId;
                } else {
                    workflowId = showWorkflowScheduleListRequest['workflow_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkflowScheduleList.');
            }

            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新WorkflowSchedule信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkflowSchedule(updateWorkflowScheduleRequest?: UpdateWorkflowScheduleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workflows/{workflow_id}/schedules/{schedule_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;
            
            let scheduleId;

            if (updateWorkflowScheduleRequest !== null && updateWorkflowScheduleRequest !== undefined) {
                if (updateWorkflowScheduleRequest instanceof UpdateWorkflowScheduleRequest) {
                    workflowId = updateWorkflowScheduleRequest.workflowId;
                    scheduleId = updateWorkflowScheduleRequest.scheduleId;
                    body = updateWorkflowScheduleRequest.body
                } else {
                    workflowId = updateWorkflowScheduleRequest['workflow_id'];
                    scheduleId = updateWorkflowScheduleRequest['schedule_id'];
                    body = updateWorkflowScheduleRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling updateWorkflowSchedule.');
            }
            if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('scheduleId','Required parameter scheduleId was null or undefined when calling updateWorkflowSchedule.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId,'schedule_id': scheduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为Workflow工作流添加消息订阅功能。工作流已订阅的事件发生时，会产生消息提醒。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkflowSubscriptions(createWorkflowSubscriptionsRequest?: CreateWorkflowSubscriptionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workflows/{workflow_id}/subscriptions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workflowId;

            if (createWorkflowSubscriptionsRequest !== null && createWorkflowSubscriptionsRequest !== undefined) {
                if (createWorkflowSubscriptionsRequest instanceof CreateWorkflowSubscriptionsRequest) {
                    workflowId = createWorkflowSubscriptionsRequest.workflowId;
                    body = createWorkflowSubscriptionsRequest.body
                } else {
                    workflowId = createWorkflowSubscriptionsRequest['workflow_id'];
                    body = createWorkflowSubscriptionsRequest['body'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling createWorkflowSubscriptions.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除已订阅的消息订阅Subscription。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkflowSubscription(deleteWorkflowSubscriptionRequest?: DeleteWorkflowSubscriptionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workflows/{workflow_id}/subscriptions/{subscription_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let subscriptionId;

            if (deleteWorkflowSubscriptionRequest !== null && deleteWorkflowSubscriptionRequest !== undefined) {
                if (deleteWorkflowSubscriptionRequest instanceof DeleteWorkflowSubscriptionRequest) {
                    workflowId = deleteWorkflowSubscriptionRequest.workflowId;
                    subscriptionId = deleteWorkflowSubscriptionRequest.subscriptionId;
                } else {
                    workflowId = deleteWorkflowSubscriptionRequest['workflow_id'];
                    subscriptionId = deleteWorkflowSubscriptionRequest['subscription_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling deleteWorkflowSubscription.');
            }
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling deleteWorkflowSubscription.');
            }

            options.pathParams = { 'workflow_id': workflowId,'subscription_id': subscriptionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Workflow工作流已订阅的订阅信息详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkflowSubscription(showWorkflowSubscriptionRequest?: ShowWorkflowSubscriptionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workflows/{workflow_id}/subscriptions/{subscription_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workflowId;
            
            let subscriptionId;

            if (showWorkflowSubscriptionRequest !== null && showWorkflowSubscriptionRequest !== undefined) {
                if (showWorkflowSubscriptionRequest instanceof ShowWorkflowSubscriptionRequest) {
                    workflowId = showWorkflowSubscriptionRequest.workflowId;
                    subscriptionId = showWorkflowSubscriptionRequest.subscriptionId;
                } else {
                    workflowId = showWorkflowSubscriptionRequest['workflow_id'];
                    subscriptionId = showWorkflowSubscriptionRequest['subscription_id'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling showWorkflowSubscription.');
            }
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling showWorkflowSubscription.');
            }

            options.pathParams = { 'workflow_id': workflowId,'subscription_id': subscriptionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新Workflow工作流已订阅的订阅信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkflowSubscription(updateWorkflowSubscriptionRequest?: UpdateWorkflowSubscriptionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workflows/{workflow_id}/subscriptions/{subscription_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let subscriptionId;
            
            let workflowId;

            if (updateWorkflowSubscriptionRequest !== null && updateWorkflowSubscriptionRequest !== undefined) {
                if (updateWorkflowSubscriptionRequest instanceof UpdateWorkflowSubscriptionRequest) {
                    subscriptionId = updateWorkflowSubscriptionRequest.subscriptionId;
                    workflowId = updateWorkflowSubscriptionRequest.workflowId;
                    body = updateWorkflowSubscriptionRequest.body
                } else {
                    subscriptionId = updateWorkflowSubscriptionRequest['subscription_id'];
                    workflowId = updateWorkflowSubscriptionRequest['workflow_id'];
                    body = updateWorkflowSubscriptionRequest['body'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling updateWorkflowSubscription.');
            }
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling updateWorkflowSubscription.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'subscription_id': subscriptionId,'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ModelArtsClient {
    return new ModelArtsClient(client);
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