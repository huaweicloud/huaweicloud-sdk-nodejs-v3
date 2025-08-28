

export class ListProcessesRequest {
    private 'instance_id'?: string;
    private 'db_user_id'?: string;
    public user?: string;
    public database?: string;
    private 'node_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: ListProcessesRequestXLanguageEnum | string;
    public constructor(instanceId?: string, dbUserId?: string) { 
        this['instance_id'] = instanceId;
        this['db_user_id'] = dbUserId;
    }
    public withInstanceId(instanceId: string): ListProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbUserId(dbUserId: string): ListProcessesRequest {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withUser(user: string): ListProcessesRequest {
        this['user'] = user;
        return this;
    }
    public withDatabase(database: string): ListProcessesRequest {
        this['database'] = database;
        return this;
    }
    public withNodeId(nodeId: string): ListProcessesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withOffset(offset: number): ListProcessesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProcessesRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: ListProcessesRequestXLanguageEnum | string): ListProcessesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListProcessesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListProcessesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProcessesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
