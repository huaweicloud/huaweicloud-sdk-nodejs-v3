import { ContinueTask } from './ContinueTask';
import { DatasetConfig } from './DatasetConfig';
import { JobMetadataResponse } from './JobMetadataResponse';
import { SpecResponse } from './SpecResponse';
import { Status } from './Status';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFtDetailResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'task_desc'?: string;
    public metadata?: JobMetadataResponse;
    public spec?: SpecResponse;
    private 'model_asset_id'?: string;
    private 'model_type'?: string;
    private 'model_source'?: string;
    private 'train_type'?: string;
    private 'checkpoint_config'?: string;
    private 'task_parameters'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'train_process'?: number;
    private 'datasets_config'?: Array<DatasetConfig>;
    public status?: Status;
    private 'auto_publish_config'?: string;
    private 'asset_code'?: string;
    private 'asset_name'?: string;
    private 'asset_desc'?: string;
    private 'asset_series'?: string;
    private 'asset_version'?: string;
    private 'asset_type'?: string;
    private 'asset_source'?: string;
    private 'asset_group_id'?: string;
    private 'sub_asset_type'?: string;
    public category?: string;
    private 'api_version'?: string;
    private 'root_asset_id'?: string;
    private 'train_cost_time'?: number;
    private 'workspace_id'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'pool_type'?: string;
    private 'pool_id'?: string;
    private 'pool_node_count'?: string;
    private 'flavor_id'?: string;
    public priority?: number;
    private 'training_info'?: string;
    private 'train_output_path'?: string;
    private 'asset_capabilities'?: Array<string>;
    private 'continue_task'?: ContinueTask;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ShowFtDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): ShowFtDetailResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ShowFtDetailResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskDesc(taskDesc: string): ShowFtDetailResponse {
        this['task_desc'] = taskDesc;
        return this;
    }
    public set taskDesc(taskDesc: string  | undefined) {
        this['task_desc'] = taskDesc;
    }
    public get taskDesc(): string | undefined {
        return this['task_desc'];
    }
    public withMetadata(metadata: JobMetadataResponse): ShowFtDetailResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: SpecResponse): ShowFtDetailResponse {
        this['spec'] = spec;
        return this;
    }
    public withModelAssetId(modelAssetId: string): ShowFtDetailResponse {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withModelType(modelType: string): ShowFtDetailResponse {
        this['model_type'] = modelType;
        return this;
    }
    public set modelType(modelType: string  | undefined) {
        this['model_type'] = modelType;
    }
    public get modelType(): string | undefined {
        return this['model_type'];
    }
    public withModelSource(modelSource: string): ShowFtDetailResponse {
        this['model_source'] = modelSource;
        return this;
    }
    public set modelSource(modelSource: string  | undefined) {
        this['model_source'] = modelSource;
    }
    public get modelSource(): string | undefined {
        return this['model_source'];
    }
    public withTrainType(trainType: string): ShowFtDetailResponse {
        this['train_type'] = trainType;
        return this;
    }
    public set trainType(trainType: string  | undefined) {
        this['train_type'] = trainType;
    }
    public get trainType(): string | undefined {
        return this['train_type'];
    }
    public withCheckpointConfig(checkpointConfig: string): ShowFtDetailResponse {
        this['checkpoint_config'] = checkpointConfig;
        return this;
    }
    public set checkpointConfig(checkpointConfig: string  | undefined) {
        this['checkpoint_config'] = checkpointConfig;
    }
    public get checkpointConfig(): string | undefined {
        return this['checkpoint_config'];
    }
    public withTaskParameters(taskParameters: string): ShowFtDetailResponse {
        this['task_parameters'] = taskParameters;
        return this;
    }
    public set taskParameters(taskParameters: string  | undefined) {
        this['task_parameters'] = taskParameters;
    }
    public get taskParameters(): string | undefined {
        return this['task_parameters'];
    }
    public withCreateTime(createTime: number): ShowFtDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowFtDetailResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTrainProcess(trainProcess: number): ShowFtDetailResponse {
        this['train_process'] = trainProcess;
        return this;
    }
    public set trainProcess(trainProcess: number  | undefined) {
        this['train_process'] = trainProcess;
    }
    public get trainProcess(): number | undefined {
        return this['train_process'];
    }
    public withDatasetsConfig(datasetsConfig: Array<DatasetConfig>): ShowFtDetailResponse {
        this['datasets_config'] = datasetsConfig;
        return this;
    }
    public set datasetsConfig(datasetsConfig: Array<DatasetConfig>  | undefined) {
        this['datasets_config'] = datasetsConfig;
    }
    public get datasetsConfig(): Array<DatasetConfig> | undefined {
        return this['datasets_config'];
    }
    public withStatus(status: Status): ShowFtDetailResponse {
        this['status'] = status;
        return this;
    }
    public withAutoPublishConfig(autoPublishConfig: string): ShowFtDetailResponse {
        this['auto_publish_config'] = autoPublishConfig;
        return this;
    }
    public set autoPublishConfig(autoPublishConfig: string  | undefined) {
        this['auto_publish_config'] = autoPublishConfig;
    }
    public get autoPublishConfig(): string | undefined {
        return this['auto_publish_config'];
    }
    public withAssetCode(assetCode: string): ShowFtDetailResponse {
        this['asset_code'] = assetCode;
        return this;
    }
    public set assetCode(assetCode: string  | undefined) {
        this['asset_code'] = assetCode;
    }
    public get assetCode(): string | undefined {
        return this['asset_code'];
    }
    public withAssetName(assetName: string): ShowFtDetailResponse {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetDesc(assetDesc: string): ShowFtDetailResponse {
        this['asset_desc'] = assetDesc;
        return this;
    }
    public set assetDesc(assetDesc: string  | undefined) {
        this['asset_desc'] = assetDesc;
    }
    public get assetDesc(): string | undefined {
        return this['asset_desc'];
    }
    public withAssetSeries(assetSeries: string): ShowFtDetailResponse {
        this['asset_series'] = assetSeries;
        return this;
    }
    public set assetSeries(assetSeries: string  | undefined) {
        this['asset_series'] = assetSeries;
    }
    public get assetSeries(): string | undefined {
        return this['asset_series'];
    }
    public withAssetVersion(assetVersion: string): ShowFtDetailResponse {
        this['asset_version'] = assetVersion;
        return this;
    }
    public set assetVersion(assetVersion: string  | undefined) {
        this['asset_version'] = assetVersion;
    }
    public get assetVersion(): string | undefined {
        return this['asset_version'];
    }
    public withAssetType(assetType: string): ShowFtDetailResponse {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): string | undefined {
        return this['asset_type'];
    }
    public withAssetSource(assetSource: string): ShowFtDetailResponse {
        this['asset_source'] = assetSource;
        return this;
    }
    public set assetSource(assetSource: string  | undefined) {
        this['asset_source'] = assetSource;
    }
    public get assetSource(): string | undefined {
        return this['asset_source'];
    }
    public withAssetGroupId(assetGroupId: string): ShowFtDetailResponse {
        this['asset_group_id'] = assetGroupId;
        return this;
    }
    public set assetGroupId(assetGroupId: string  | undefined) {
        this['asset_group_id'] = assetGroupId;
    }
    public get assetGroupId(): string | undefined {
        return this['asset_group_id'];
    }
    public withSubAssetType(subAssetType: string): ShowFtDetailResponse {
        this['sub_asset_type'] = subAssetType;
        return this;
    }
    public set subAssetType(subAssetType: string  | undefined) {
        this['sub_asset_type'] = subAssetType;
    }
    public get subAssetType(): string | undefined {
        return this['sub_asset_type'];
    }
    public withCategory(category: string): ShowFtDetailResponse {
        this['category'] = category;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowFtDetailResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withRootAssetId(rootAssetId: string): ShowFtDetailResponse {
        this['root_asset_id'] = rootAssetId;
        return this;
    }
    public set rootAssetId(rootAssetId: string  | undefined) {
        this['root_asset_id'] = rootAssetId;
    }
    public get rootAssetId(): string | undefined {
        return this['root_asset_id'];
    }
    public withTrainCostTime(trainCostTime: number): ShowFtDetailResponse {
        this['train_cost_time'] = trainCostTime;
        return this;
    }
    public set trainCostTime(trainCostTime: number  | undefined) {
        this['train_cost_time'] = trainCostTime;
    }
    public get trainCostTime(): number | undefined {
        return this['train_cost_time'];
    }
    public withWorkspaceId(workspaceId: string): ShowFtDetailResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withUserId(userId: string): ShowFtDetailResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ShowFtDetailResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPoolType(poolType: string): ShowFtDetailResponse {
        this['pool_type'] = poolType;
        return this;
    }
    public set poolType(poolType: string  | undefined) {
        this['pool_type'] = poolType;
    }
    public get poolType(): string | undefined {
        return this['pool_type'];
    }
    public withPoolId(poolId: string): ShowFtDetailResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withPoolNodeCount(poolNodeCount: string): ShowFtDetailResponse {
        this['pool_node_count'] = poolNodeCount;
        return this;
    }
    public set poolNodeCount(poolNodeCount: string  | undefined) {
        this['pool_node_count'] = poolNodeCount;
    }
    public get poolNodeCount(): string | undefined {
        return this['pool_node_count'];
    }
    public withFlavorId(flavorId: string): ShowFtDetailResponse {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withPriority(priority: number): ShowFtDetailResponse {
        this['priority'] = priority;
        return this;
    }
    public withTrainingInfo(trainingInfo: string): ShowFtDetailResponse {
        this['training_info'] = trainingInfo;
        return this;
    }
    public set trainingInfo(trainingInfo: string  | undefined) {
        this['training_info'] = trainingInfo;
    }
    public get trainingInfo(): string | undefined {
        return this['training_info'];
    }
    public withTrainOutputPath(trainOutputPath: string): ShowFtDetailResponse {
        this['train_output_path'] = trainOutputPath;
        return this;
    }
    public set trainOutputPath(trainOutputPath: string  | undefined) {
        this['train_output_path'] = trainOutputPath;
    }
    public get trainOutputPath(): string | undefined {
        return this['train_output_path'];
    }
    public withAssetCapabilities(assetCapabilities: Array<string>): ShowFtDetailResponse {
        this['asset_capabilities'] = assetCapabilities;
        return this;
    }
    public set assetCapabilities(assetCapabilities: Array<string>  | undefined) {
        this['asset_capabilities'] = assetCapabilities;
    }
    public get assetCapabilities(): Array<string> | undefined {
        return this['asset_capabilities'];
    }
    public withContinueTask(continueTask: ContinueTask): ShowFtDetailResponse {
        this['continue_task'] = continueTask;
        return this;
    }
    public set continueTask(continueTask: ContinueTask  | undefined) {
        this['continue_task'] = continueTask;
    }
    public get continueTask(): ContinueTask | undefined {
        return this['continue_task'];
    }
}