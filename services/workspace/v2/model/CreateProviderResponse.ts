import { ApiType } from './ApiType';
import { ModelItemResp } from './ModelItemResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProviderResponse extends SdkResponse {
    public id?: string;
    private 'provider_type'?: string;
    private 'provider_id'?: string;
    private 'provider_name'?: string;
    private 'base_url'?: string;
    private 'connection_status'?: string;
    private 'is_builtin'?: boolean;
    private 'api_type'?: ApiType;
    private 'custom_config'?: object;
    private 'last_verify_time'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'created_models'?: Array<ModelItemResp>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateProviderResponse {
        this['id'] = id;
        return this;
    }
    public withProviderType(providerType: string): CreateProviderResponse {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withProviderId(providerId: string): CreateProviderResponse {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withProviderName(providerName: string): CreateProviderResponse {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withBaseUrl(baseUrl: string): CreateProviderResponse {
        this['base_url'] = baseUrl;
        return this;
    }
    public set baseUrl(baseUrl: string  | undefined) {
        this['base_url'] = baseUrl;
    }
    public get baseUrl(): string | undefined {
        return this['base_url'];
    }
    public withConnectionStatus(connectionStatus: string): CreateProviderResponse {
        this['connection_status'] = connectionStatus;
        return this;
    }
    public set connectionStatus(connectionStatus: string  | undefined) {
        this['connection_status'] = connectionStatus;
    }
    public get connectionStatus(): string | undefined {
        return this['connection_status'];
    }
    public withIsBuiltin(isBuiltin: boolean): CreateProviderResponse {
        this['is_builtin'] = isBuiltin;
        return this;
    }
    public set isBuiltin(isBuiltin: boolean  | undefined) {
        this['is_builtin'] = isBuiltin;
    }
    public get isBuiltin(): boolean | undefined {
        return this['is_builtin'];
    }
    public withApiType(apiType: ApiType): CreateProviderResponse {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: ApiType  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): ApiType | undefined {
        return this['api_type'];
    }
    public withCustomConfig(customConfig: object): CreateProviderResponse {
        this['custom_config'] = customConfig;
        return this;
    }
    public set customConfig(customConfig: object  | undefined) {
        this['custom_config'] = customConfig;
    }
    public get customConfig(): object | undefined {
        return this['custom_config'];
    }
    public withLastVerifyTime(lastVerifyTime: string): CreateProviderResponse {
        this['last_verify_time'] = lastVerifyTime;
        return this;
    }
    public set lastVerifyTime(lastVerifyTime: string  | undefined) {
        this['last_verify_time'] = lastVerifyTime;
    }
    public get lastVerifyTime(): string | undefined {
        return this['last_verify_time'];
    }
    public withCreateTime(createTime: string): CreateProviderResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateProviderResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCreatedModels(createdModels: Array<ModelItemResp>): CreateProviderResponse {
        this['created_models'] = createdModels;
        return this;
    }
    public set createdModels(createdModels: Array<ModelItemResp>  | undefined) {
        this['created_models'] = createdModels;
    }
    public get createdModels(): Array<ModelItemResp> | undefined {
        return this['created_models'];
    }
}