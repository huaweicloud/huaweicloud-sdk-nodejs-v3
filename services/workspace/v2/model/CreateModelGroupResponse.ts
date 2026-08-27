import { ModelGroupProviderItemResp } from './ModelGroupProviderItemResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateModelGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public priority?: number;
    private 'default_model_id'?: string;
    public providers?: Array<ModelGroupProviderItemResp>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateModelGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateModelGroupResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateModelGroupResponse {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): CreateModelGroupResponse {
        this['priority'] = priority;
        return this;
    }
    public withDefaultModelId(defaultModelId: string): CreateModelGroupResponse {
        this['default_model_id'] = defaultModelId;
        return this;
    }
    public set defaultModelId(defaultModelId: string  | undefined) {
        this['default_model_id'] = defaultModelId;
    }
    public get defaultModelId(): string | undefined {
        return this['default_model_id'];
    }
    public withProviders(providers: Array<ModelGroupProviderItemResp>): CreateModelGroupResponse {
        this['providers'] = providers;
        return this;
    }
    public withCreateTime(createTime: string): CreateModelGroupResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateModelGroupResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}