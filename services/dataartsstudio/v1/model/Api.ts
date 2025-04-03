import { BackendConfig } from './BackendConfig';
import { DataMaskParas } from './DataMaskParas';
import { DatasourceConfig } from './DatasourceConfig';
import { RequestPara } from './RequestPara';


export class Api {
    private 'catalog_id'?: string;
    public name?: string;
    public description?: string;
    private 'log_flag'?: boolean;
    private 'api_type'?: ApiApiTypeEnum | string;
    private 'auth_type'?: ApiAuthTypeEnum | string;
    private 'retention_period'?: number;
    public manager?: string;
    public path?: string;
    public protocol?: ApiProtocolEnum | string;
    private 'request_type'?: ApiRequestTypeEnum | string;
    public tags?: Array<string>;
    public visibility?: ApiVisibilityEnum | string;
    private 'publish_type'?: ApiPublishTypeEnum | string;
    private 'data_mask_switch'?: boolean;
    private 'data_mask_paras'?: Array<DataMaskParas>;
    public body?: string;
    private 'datasource_config_list'?: Array<DatasourceConfig>;
    private 'groovy_content'?: string;
    private 'request_paras'?: Array<RequestPara>;
    private 'datasource_config'?: DatasourceConfig;
    private 'backend_config'?: BackendConfig;
    public constructor() { 
    }
    public withCatalogId(catalogId: string): Api {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withName(name: string): Api {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Api {
        this['description'] = description;
        return this;
    }
    public withLogFlag(logFlag: boolean): Api {
        this['log_flag'] = logFlag;
        return this;
    }
    public set logFlag(logFlag: boolean  | undefined) {
        this['log_flag'] = logFlag;
    }
    public get logFlag(): boolean | undefined {
        return this['log_flag'];
    }
    public withApiType(apiType: ApiApiTypeEnum | string): Api {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: ApiApiTypeEnum | string  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): ApiApiTypeEnum | string | undefined {
        return this['api_type'];
    }
    public withAuthType(authType: ApiAuthTypeEnum | string): Api {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: ApiAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): ApiAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withRetentionPeriod(retentionPeriod: number): Api {
        this['retention_period'] = retentionPeriod;
        return this;
    }
    public set retentionPeriod(retentionPeriod: number  | undefined) {
        this['retention_period'] = retentionPeriod;
    }
    public get retentionPeriod(): number | undefined {
        return this['retention_period'];
    }
    public withManager(manager: string): Api {
        this['manager'] = manager;
        return this;
    }
    public withPath(path: string): Api {
        this['path'] = path;
        return this;
    }
    public withProtocol(protocol: ApiProtocolEnum | string): Api {
        this['protocol'] = protocol;
        return this;
    }
    public withRequestType(requestType: ApiRequestTypeEnum | string): Api {
        this['request_type'] = requestType;
        return this;
    }
    public set requestType(requestType: ApiRequestTypeEnum | string  | undefined) {
        this['request_type'] = requestType;
    }
    public get requestType(): ApiRequestTypeEnum | string | undefined {
        return this['request_type'];
    }
    public withTags(tags: Array<string>): Api {
        this['tags'] = tags;
        return this;
    }
    public withVisibility(visibility: ApiVisibilityEnum | string): Api {
        this['visibility'] = visibility;
        return this;
    }
    public withPublishType(publishType: ApiPublishTypeEnum | string): Api {
        this['publish_type'] = publishType;
        return this;
    }
    public set publishType(publishType: ApiPublishTypeEnum | string  | undefined) {
        this['publish_type'] = publishType;
    }
    public get publishType(): ApiPublishTypeEnum | string | undefined {
        return this['publish_type'];
    }
    public withDataMaskSwitch(dataMaskSwitch: boolean): Api {
        this['data_mask_switch'] = dataMaskSwitch;
        return this;
    }
    public set dataMaskSwitch(dataMaskSwitch: boolean  | undefined) {
        this['data_mask_switch'] = dataMaskSwitch;
    }
    public get dataMaskSwitch(): boolean | undefined {
        return this['data_mask_switch'];
    }
    public withDataMaskParas(dataMaskParas: Array<DataMaskParas>): Api {
        this['data_mask_paras'] = dataMaskParas;
        return this;
    }
    public set dataMaskParas(dataMaskParas: Array<DataMaskParas>  | undefined) {
        this['data_mask_paras'] = dataMaskParas;
    }
    public get dataMaskParas(): Array<DataMaskParas> | undefined {
        return this['data_mask_paras'];
    }
    public withBody(body: string): Api {
        this['body'] = body;
        return this;
    }
    public withDatasourceConfigList(datasourceConfigList: Array<DatasourceConfig>): Api {
        this['datasource_config_list'] = datasourceConfigList;
        return this;
    }
    public set datasourceConfigList(datasourceConfigList: Array<DatasourceConfig>  | undefined) {
        this['datasource_config_list'] = datasourceConfigList;
    }
    public get datasourceConfigList(): Array<DatasourceConfig> | undefined {
        return this['datasource_config_list'];
    }
    public withGroovyContent(groovyContent: string): Api {
        this['groovy_content'] = groovyContent;
        return this;
    }
    public set groovyContent(groovyContent: string  | undefined) {
        this['groovy_content'] = groovyContent;
    }
    public get groovyContent(): string | undefined {
        return this['groovy_content'];
    }
    public withRequestParas(requestParas: Array<RequestPara>): Api {
        this['request_paras'] = requestParas;
        return this;
    }
    public set requestParas(requestParas: Array<RequestPara>  | undefined) {
        this['request_paras'] = requestParas;
    }
    public get requestParas(): Array<RequestPara> | undefined {
        return this['request_paras'];
    }
    public withDatasourceConfig(datasourceConfig: DatasourceConfig): Api {
        this['datasource_config'] = datasourceConfig;
        return this;
    }
    public set datasourceConfig(datasourceConfig: DatasourceConfig  | undefined) {
        this['datasource_config'] = datasourceConfig;
    }
    public get datasourceConfig(): DatasourceConfig | undefined {
        return this['datasource_config'];
    }
    public withBackendConfig(backendConfig: BackendConfig): Api {
        this['backend_config'] = backendConfig;
        return this;
    }
    public set backendConfig(backendConfig: BackendConfig  | undefined) {
        this['backend_config'] = backendConfig;
    }
    public get backendConfig(): BackendConfig | undefined {
        return this['backend_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiApiTypeEnum {
    API_SPECIFIC_TYPE_CONFIGURATION = 'API_SPECIFIC_TYPE_CONFIGURATION',
    API_SPECIFIC_TYPE_SCRIPT = 'API_SPECIFIC_TYPE_SCRIPT',
    API_SPECIFIC_TYPE_MYBATIS = 'API_SPECIFIC_TYPE_MYBATIS',
    API_SPECIFIC_TYPE_GROOVY = 'API_SPECIFIC_TYPE_GROOVY',
    API_SPECIFIC_TYPE_REGISTER = 'API_SPECIFIC_TYPE_REGISTER',
    API_SPECIFIC_TYPE_ORCHESTRATE = 'API_SPECIFIC_TYPE_ORCHESTRATE',
    API_TYPE_CREATE = 'API_TYPE_CREATE',
    API_TYPE_REGISTER = 'API_TYPE_REGISTER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiAuthTypeEnum {
    APP = 'APP',
    IAM = 'IAM',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiProtocolEnum {
    PROTOCOL_TYPE_HTTP = 'PROTOCOL_TYPE_HTTP',
    PROTOCOL_TYPE_HTTPS = 'PROTOCOL_TYPE_HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiRequestTypeEnum {
    REQUEST_TYPE_POST = 'REQUEST_TYPE_POST',
    REQUEST_TYPE_GET = 'REQUEST_TYPE_GET'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiVisibilityEnum {
    WORKSPACE = 'WORKSPACE',
    PROJECT = 'PROJECT',
    DOMAIN = 'DOMAIN'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiPublishTypeEnum {
    PUBLISH_TYPE_PUBLIC = 'PUBLISH_TYPE_PUBLIC',
    PUBLISH_TYPE_PRIVATE = 'PUBLISH_TYPE_PRIVATE'
}
