

export class ListProvidersRequest {
    public limit?: number;
    public offset?: number;
    private 'group_id'?: string;
    public status?: ListProvidersRequestStatusEnum | string;
    private 'provider_type'?: string;
    public name?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListProvidersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProvidersRequest {
        this['offset'] = offset;
        return this;
    }
    public withGroupId(groupId: string): ListProvidersRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStatus(status: ListProvidersRequestStatusEnum | string): ListProvidersRequest {
        this['status'] = status;
        return this;
    }
    public withProviderType(providerType: string): ListProvidersRequest {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withName(name: string): ListProvidersRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProvidersRequestStatusEnum {
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    UNVERIFIED = 'unverified'
}
