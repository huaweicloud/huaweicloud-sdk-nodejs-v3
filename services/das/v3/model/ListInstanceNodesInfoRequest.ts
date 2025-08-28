

export class ListInstanceNodesInfoRequest {
    private 'X-Language'?: ListInstanceNodesInfoRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'datastore_type'?: string;
    public constructor(instanceId?: string, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['datastore_type'] = datastoreType;
    }
    public withXLanguage(xLanguage: ListInstanceNodesInfoRequestXLanguageEnum | string): ListInstanceNodesInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInstanceNodesInfoRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInstanceNodesInfoRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListInstanceNodesInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatastoreType(datastoreType: string): ListInstanceNodesInfoRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceNodesInfoRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
