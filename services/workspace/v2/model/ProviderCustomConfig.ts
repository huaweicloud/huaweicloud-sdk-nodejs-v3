

export class ProviderCustomConfig {
    private 'model_list_api'?: string;
    private 'auth_header'?: string;
    private 'auth_prefix'?: string;
    private 'model_id_field'?: string;
    private 'model_name_field'?: string;
    public headers?: { [key: string]: string; };
    public constructor() { 
    }
    public withModelListApi(modelListApi: string): ProviderCustomConfig {
        this['model_list_api'] = modelListApi;
        return this;
    }
    public set modelListApi(modelListApi: string  | undefined) {
        this['model_list_api'] = modelListApi;
    }
    public get modelListApi(): string | undefined {
        return this['model_list_api'];
    }
    public withAuthHeader(authHeader: string): ProviderCustomConfig {
        this['auth_header'] = authHeader;
        return this;
    }
    public set authHeader(authHeader: string  | undefined) {
        this['auth_header'] = authHeader;
    }
    public get authHeader(): string | undefined {
        return this['auth_header'];
    }
    public withAuthPrefix(authPrefix: string): ProviderCustomConfig {
        this['auth_prefix'] = authPrefix;
        return this;
    }
    public set authPrefix(authPrefix: string  | undefined) {
        this['auth_prefix'] = authPrefix;
    }
    public get authPrefix(): string | undefined {
        return this['auth_prefix'];
    }
    public withModelIdField(modelIdField: string): ProviderCustomConfig {
        this['model_id_field'] = modelIdField;
        return this;
    }
    public set modelIdField(modelIdField: string  | undefined) {
        this['model_id_field'] = modelIdField;
    }
    public get modelIdField(): string | undefined {
        return this['model_id_field'];
    }
    public withModelNameField(modelNameField: string): ProviderCustomConfig {
        this['model_name_field'] = modelNameField;
        return this;
    }
    public set modelNameField(modelNameField: string  | undefined) {
        this['model_name_field'] = modelNameField;
    }
    public get modelNameField(): string | undefined {
        return this['model_name_field'];
    }
    public withHeaders(headers: { [key: string]: string; }): ProviderCustomConfig {
        this['headers'] = headers;
        return this;
    }
}