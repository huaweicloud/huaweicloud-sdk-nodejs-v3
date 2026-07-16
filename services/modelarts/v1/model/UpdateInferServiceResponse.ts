import { FrozenInfo } from './FrozenInfo';
import { PredictUrlResponse } from './PredictUrlResponse';
import { ScheduleConfigResponse } from './ScheduleConfigResponse';
import { ServiceVersionResponse } from './ServiceVersionResponse';
import { TagsResponse } from './TagsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInferServiceResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'workspace_id'?: string;
    public type?: string;
    private 'deploy_type'?: string;
    public status?: string;
    private 'failure_reason'?: string;
    public version?: ServiceVersionResponse;
    private 'predict_url'?: Array<PredictUrlResponse>;
    private 'dispatcher_group_id'?: string;
    public tags?: Array<TagsResponse>;
    private 'deploy_timeout_minutes'?: number;
    public schedule?: Array<ScheduleConfigResponse>;
    private 'create_at'?: string;
    private 'update_at'?: string;
    private 'task_type'?: string;
    public provider?: string;
    private 'frozen_infos'?: Array<FrozenInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateInferServiceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateInferServiceResponse {
        this['name'] = name;
        return this;
    }
    public withWorkspaceId(workspaceId: string): UpdateInferServiceResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withType(type: string): UpdateInferServiceResponse {
        this['type'] = type;
        return this;
    }
    public withDeployType(deployType: string): UpdateInferServiceResponse {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withStatus(status: string): UpdateInferServiceResponse {
        this['status'] = status;
        return this;
    }
    public withFailureReason(failureReason: string): UpdateInferServiceResponse {
        this['failure_reason'] = failureReason;
        return this;
    }
    public set failureReason(failureReason: string  | undefined) {
        this['failure_reason'] = failureReason;
    }
    public get failureReason(): string | undefined {
        return this['failure_reason'];
    }
    public withVersion(version: ServiceVersionResponse): UpdateInferServiceResponse {
        this['version'] = version;
        return this;
    }
    public withPredictUrl(predictUrl: Array<PredictUrlResponse>): UpdateInferServiceResponse {
        this['predict_url'] = predictUrl;
        return this;
    }
    public set predictUrl(predictUrl: Array<PredictUrlResponse>  | undefined) {
        this['predict_url'] = predictUrl;
    }
    public get predictUrl(): Array<PredictUrlResponse> | undefined {
        return this['predict_url'];
    }
    public withDispatcherGroupId(dispatcherGroupId: string): UpdateInferServiceResponse {
        this['dispatcher_group_id'] = dispatcherGroupId;
        return this;
    }
    public set dispatcherGroupId(dispatcherGroupId: string  | undefined) {
        this['dispatcher_group_id'] = dispatcherGroupId;
    }
    public get dispatcherGroupId(): string | undefined {
        return this['dispatcher_group_id'];
    }
    public withTags(tags: Array<TagsResponse>): UpdateInferServiceResponse {
        this['tags'] = tags;
        return this;
    }
    public withDeployTimeoutMinutes(deployTimeoutMinutes: number): UpdateInferServiceResponse {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
        return this;
    }
    public set deployTimeoutMinutes(deployTimeoutMinutes: number  | undefined) {
        this['deploy_timeout_minutes'] = deployTimeoutMinutes;
    }
    public get deployTimeoutMinutes(): number | undefined {
        return this['deploy_timeout_minutes'];
    }
    public withSchedule(schedule: Array<ScheduleConfigResponse>): UpdateInferServiceResponse {
        this['schedule'] = schedule;
        return this;
    }
    public withCreateAt(createAt: string): UpdateInferServiceResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): UpdateInferServiceResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withTaskType(taskType: string): UpdateInferServiceResponse {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withProvider(provider: string): UpdateInferServiceResponse {
        this['provider'] = provider;
        return this;
    }
    public withFrozenInfos(frozenInfos: Array<FrozenInfo>): UpdateInferServiceResponse {
        this['frozen_infos'] = frozenInfos;
        return this;
    }
    public set frozenInfos(frozenInfos: Array<FrozenInfo>  | undefined) {
        this['frozen_infos'] = frozenInfos;
    }
    public get frozenInfos(): Array<FrozenInfo> | undefined {
        return this['frozen_infos'];
    }
}