import { ModelGroupProviderSimpleResp } from './ModelGroupProviderSimpleResp';


export class ShowModelGroupResp {
    public id?: string;
    public name?: string;
    public description?: string;
    public priority?: number;
    private 'default_model_id'?: string;
    public providers?: Array<ModelGroupProviderSimpleResp>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ShowModelGroupResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowModelGroupResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowModelGroupResp {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): ShowModelGroupResp {
        this['priority'] = priority;
        return this;
    }
    public withDefaultModelId(defaultModelId: string): ShowModelGroupResp {
        this['default_model_id'] = defaultModelId;
        return this;
    }
    public set defaultModelId(defaultModelId: string  | undefined) {
        this['default_model_id'] = defaultModelId;
    }
    public get defaultModelId(): string | undefined {
        return this['default_model_id'];
    }
    public withProviders(providers: Array<ModelGroupProviderSimpleResp>): ShowModelGroupResp {
        this['providers'] = providers;
        return this;
    }
    public withCreateTime(createTime: string): ShowModelGroupResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowModelGroupResp {
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