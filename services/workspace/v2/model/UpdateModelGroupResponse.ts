import { ModelGroupProviderSimpleResp } from './ModelGroupProviderSimpleResp';
import { ShowModelGroupResp } from './ShowModelGroupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateModelGroupResponse extends SdkResponse {
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
    public withId(id: string): UpdateModelGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateModelGroupResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateModelGroupResponse {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): UpdateModelGroupResponse {
        this['priority'] = priority;
        return this;
    }
    public withDefaultModelId(defaultModelId: string): UpdateModelGroupResponse {
        this['default_model_id'] = defaultModelId;
        return this;
    }
    public set defaultModelId(defaultModelId: string  | undefined) {
        this['default_model_id'] = defaultModelId;
    }
    public get defaultModelId(): string | undefined {
        return this['default_model_id'];
    }
    public withProviders(providers: Array<ModelGroupProviderSimpleResp>): UpdateModelGroupResponse {
        this['providers'] = providers;
        return this;
    }
    public withCreateTime(createTime: string): UpdateModelGroupResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateModelGroupResponse {
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