

export class ListModelsRequest {
    private 'provider_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'group_id'?: string;
    public name?: string;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): ListModelsRequest {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withLimit(limit: number): ListModelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListModelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withGroupId(groupId: string): ListModelsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): ListModelsRequest {
        this['name'] = name;
        return this;
    }
}