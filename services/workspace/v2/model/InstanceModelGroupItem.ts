import { InstanceModelProviderConfig } from './InstanceModelProviderConfig';


export class InstanceModelGroupItem {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'default_model_id'?: string;
    public priority?: number;
    private 'update_time'?: string;
    public providers?: Array<InstanceModelProviderConfig>;
    public constructor() { 
    }
    public withGroupId(groupId: string): InstanceModelGroupItem {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): InstanceModelGroupItem {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDefaultModelId(defaultModelId: string): InstanceModelGroupItem {
        this['default_model_id'] = defaultModelId;
        return this;
    }
    public set defaultModelId(defaultModelId: string  | undefined) {
        this['default_model_id'] = defaultModelId;
    }
    public get defaultModelId(): string | undefined {
        return this['default_model_id'];
    }
    public withPriority(priority: number): InstanceModelGroupItem {
        this['priority'] = priority;
        return this;
    }
    public withUpdateTime(updateTime: string): InstanceModelGroupItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withProviders(providers: Array<InstanceModelProviderConfig>): InstanceModelGroupItem {
        this['providers'] = providers;
        return this;
    }
}