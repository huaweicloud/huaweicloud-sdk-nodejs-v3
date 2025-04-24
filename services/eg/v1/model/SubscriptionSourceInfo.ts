

export class SubscriptionSourceInfo {
    public id?: string;
    public name?: string;
    private 'provider_type'?: string;
    public detail?: object;
    public filter?: object;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
    }
    public withId(id: string): SubscriptionSourceInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubscriptionSourceInfo {
        this['name'] = name;
        return this;
    }
    public withProviderType(providerType: string): SubscriptionSourceInfo {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withDetail(detail: object): SubscriptionSourceInfo {
        this['detail'] = detail;
        return this;
    }
    public withFilter(filter: object): SubscriptionSourceInfo {
        this['filter'] = filter;
        return this;
    }
    public withCreatedTime(createdTime: string): SubscriptionSourceInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): SubscriptionSourceInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
}