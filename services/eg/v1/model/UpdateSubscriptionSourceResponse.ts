
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSubscriptionSourceResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'provider_type'?: string;
    public detail?: object;
    public filter?: object;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateSubscriptionSourceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateSubscriptionSourceResponse {
        this['name'] = name;
        return this;
    }
    public withProviderType(providerType: string): UpdateSubscriptionSourceResponse {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withDetail(detail: object): UpdateSubscriptionSourceResponse {
        this['detail'] = detail;
        return this;
    }
    public withFilter(filter: object): UpdateSubscriptionSourceResponse {
        this['filter'] = filter;
        return this;
    }
    public withCreatedTime(createdTime: string): UpdateSubscriptionSourceResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): UpdateSubscriptionSourceResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withXRequestId(xRequestId: string): UpdateSubscriptionSourceResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}