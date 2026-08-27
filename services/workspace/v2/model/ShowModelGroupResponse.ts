import { ModelGroupProviderSimpleResp } from './ModelGroupProviderSimpleResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowModelGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public priority?: number;
    private 'default_model_id'?: string;
    public providers?: Array<ModelGroupProviderSimpleResp>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowModelGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowModelGroupResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowModelGroupResponse {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): ShowModelGroupResponse {
        this['priority'] = priority;
        return this;
    }
    public withDefaultModelId(defaultModelId: string): ShowModelGroupResponse {
        this['default_model_id'] = defaultModelId;
        return this;
    }
    public set defaultModelId(defaultModelId: string  | undefined) {
        this['default_model_id'] = defaultModelId;
    }
    public get defaultModelId(): string | undefined {
        return this['default_model_id'];
    }
    public withProviders(providers: Array<ModelGroupProviderSimpleResp>): ShowModelGroupResponse {
        this['providers'] = providers;
        return this;
    }
    public withCreateTime(createTime: string): ShowModelGroupResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowModelGroupResponse {
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