

export class DeleteDatabaseRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: DeleteDatabaseRequestXLanguageEnum | string;
    private 'database_name'?: string;
    public constructor(instanceId?: string, databaseName?: string) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
    }
    public withInstanceId(instanceId: string): DeleteDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: DeleteDatabaseRequestXLanguageEnum | string): DeleteDatabaseRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteDatabaseRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteDatabaseRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withDatabaseName(databaseName: string): DeleteDatabaseRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDatabaseRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
