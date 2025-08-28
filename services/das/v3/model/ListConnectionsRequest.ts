

export class ListConnectionsRequest {
    public condition?: string;
    public offset?: number;
    public limit?: number;
    private 'network_type'?: ListConnectionsRequestNetworkTypeEnum | string;
    private 'datastore_type'?: string;
    private 'connection_type'?: ListConnectionsRequestConnectionTypeEnum | string;
    private 'instance_id'?: string;
    private 'X-Language'?: ListConnectionsRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withCondition(condition: string): ListConnectionsRequest {
        this['condition'] = condition;
        return this;
    }
    public withOffset(offset: number): ListConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withNetworkType(networkType: ListConnectionsRequestNetworkTypeEnum | string): ListConnectionsRequest {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: ListConnectionsRequestNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): ListConnectionsRequestNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withDatastoreType(datastoreType: string): ListConnectionsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withConnectionType(connectionType: ListConnectionsRequestConnectionTypeEnum | string): ListConnectionsRequest {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: ListConnectionsRequestConnectionTypeEnum | string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): ListConnectionsRequestConnectionTypeEnum | string | undefined {
        return this['connection_type'];
    }
    public withInstanceId(instanceId: string): ListConnectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ListConnectionsRequestXLanguageEnum | string): ListConnectionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListConnectionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListConnectionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConnectionsRequestNetworkTypeEnum {
    GAUSSDB = 'gaussdb',
    DDS = 'dds',
    RDS = 'rds',
    ECS = 'ecs',
    GEMINI = 'gemini',
    DDM = 'ddm'
}
/**
    * @export
    * @enum {string}
    */
export enum ListConnectionsRequestConnectionTypeEnum {
    NORMAL = 'NORMAL',
    SHARE = 'SHARE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListConnectionsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
