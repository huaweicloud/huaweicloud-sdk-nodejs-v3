
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateChannelResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'provider_type'?: CreateChannelResponseProviderTypeEnum | string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'enterprise_project_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateChannelResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateChannelResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateChannelResponse {
        this['description'] = description;
        return this;
    }
    public withProviderType(providerType: CreateChannelResponseProviderTypeEnum | string): CreateChannelResponse {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: CreateChannelResponseProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): CreateChannelResponseProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withCreatedTime(createdTime: string): CreateChannelResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CreateChannelResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateChannelResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withXRequestId(xRequestId: string): CreateChannelResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateChannelResponseProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM',
    PARTNER = 'PARTNER'
}
