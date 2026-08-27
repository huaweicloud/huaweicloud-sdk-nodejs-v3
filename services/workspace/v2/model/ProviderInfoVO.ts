import { ApiType } from './ApiType';


export class ProviderInfoVO {
    public id?: string;
    private 'provider_name'?: string;
    private 'provider_type'?: string;
    private 'provider_id'?: string;
    private 'base_url'?: string;
    private 'connection_status'?: string;
    private 'model_count'?: number;
    private 'group_count'?: number;
    private 'last_verify_time'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'is_builtin'?: boolean;
    private 'api_type'?: ApiType;
    public constructor() { 
    }
    public withId(id: string): ProviderInfoVO {
        this['id'] = id;
        return this;
    }
    public withProviderName(providerName: string): ProviderInfoVO {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withProviderType(providerType: string): ProviderInfoVO {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withProviderId(providerId: string): ProviderInfoVO {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBaseUrl(baseUrl: string): ProviderInfoVO {
        this['base_url'] = baseUrl;
        return this;
    }
    public set baseUrl(baseUrl: string  | undefined) {
        this['base_url'] = baseUrl;
    }
    public get baseUrl(): string | undefined {
        return this['base_url'];
    }
    public withConnectionStatus(connectionStatus: string): ProviderInfoVO {
        this['connection_status'] = connectionStatus;
        return this;
    }
    public set connectionStatus(connectionStatus: string  | undefined) {
        this['connection_status'] = connectionStatus;
    }
    public get connectionStatus(): string | undefined {
        return this['connection_status'];
    }
    public withModelCount(modelCount: number): ProviderInfoVO {
        this['model_count'] = modelCount;
        return this;
    }
    public set modelCount(modelCount: number  | undefined) {
        this['model_count'] = modelCount;
    }
    public get modelCount(): number | undefined {
        return this['model_count'];
    }
    public withGroupCount(groupCount: number): ProviderInfoVO {
        this['group_count'] = groupCount;
        return this;
    }
    public set groupCount(groupCount: number  | undefined) {
        this['group_count'] = groupCount;
    }
    public get groupCount(): number | undefined {
        return this['group_count'];
    }
    public withLastVerifyTime(lastVerifyTime: string): ProviderInfoVO {
        this['last_verify_time'] = lastVerifyTime;
        return this;
    }
    public set lastVerifyTime(lastVerifyTime: string  | undefined) {
        this['last_verify_time'] = lastVerifyTime;
    }
    public get lastVerifyTime(): string | undefined {
        return this['last_verify_time'];
    }
    public withCreateTime(createTime: string): ProviderInfoVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ProviderInfoVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withIsBuiltin(isBuiltin: boolean): ProviderInfoVO {
        this['is_builtin'] = isBuiltin;
        return this;
    }
    public set isBuiltin(isBuiltin: boolean  | undefined) {
        this['is_builtin'] = isBuiltin;
    }
    public get isBuiltin(): boolean | undefined {
        return this['is_builtin'];
    }
    public withApiType(apiType: ApiType): ProviderInfoVO {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: ApiType  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): ApiType | undefined {
        return this['api_type'];
    }
}