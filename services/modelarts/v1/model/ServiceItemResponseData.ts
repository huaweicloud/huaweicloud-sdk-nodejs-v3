import { FrozenInfo } from './FrozenInfo';
import { ScheduleConfigResponse } from './ScheduleConfigResponse';
import { TagsResponse } from './TagsResponse';


export class ServiceItemResponseData {
    public id?: string;
    public name?: string;
    public status?: string;
    public version?: string;
    private 'version_count'?: number;
    public description?: string;
    public type?: string;
    private 'deploy_type'?: string;
    private 'user_name'?: string;
    private 'workspace_id'?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    private 'auth_type'?: string;
    private 'task_type'?: string;
    public tags?: Array<TagsResponse>;
    public schedule?: Array<ScheduleConfigResponse>;
    private 'frozen_infos'?: Array<FrozenInfo>;
    public constructor(taskType?: string) { 
        this['task_type'] = taskType;
    }
    public withId(id: string): ServiceItemResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServiceItemResponseData {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ServiceItemResponseData {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): ServiceItemResponseData {
        this['version'] = version;
        return this;
    }
    public withVersionCount(versionCount: number): ServiceItemResponseData {
        this['version_count'] = versionCount;
        return this;
    }
    public set versionCount(versionCount: number  | undefined) {
        this['version_count'] = versionCount;
    }
    public get versionCount(): number | undefined {
        return this['version_count'];
    }
    public withDescription(description: string): ServiceItemResponseData {
        this['description'] = description;
        return this;
    }
    public withType(type: string): ServiceItemResponseData {
        this['type'] = type;
        return this;
    }
    public withDeployType(deployType: string): ServiceItemResponseData {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withUserName(userName: string): ServiceItemResponseData {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withWorkspaceId(workspaceId: string): ServiceItemResponseData {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCreateAt(createAt: number): ServiceItemResponseData {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): ServiceItemResponseData {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withAuthType(authType: string): ServiceItemResponseData {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withTaskType(taskType: string): ServiceItemResponseData {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTags(tags: Array<TagsResponse>): ServiceItemResponseData {
        this['tags'] = tags;
        return this;
    }
    public withSchedule(schedule: Array<ScheduleConfigResponse>): ServiceItemResponseData {
        this['schedule'] = schedule;
        return this;
    }
    public withFrozenInfos(frozenInfos: Array<FrozenInfo>): ServiceItemResponseData {
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