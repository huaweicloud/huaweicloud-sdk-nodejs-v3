import { QuerySqlPlanStateRequest } from './QuerySqlPlanStateRequest';


export class ListSqlPlanActionRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'X-Language'?: ListSqlPlanActionRequestXLanguageEnum | string;
    public body?: QuerySqlPlanStateRequest;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withInstanceId(instanceId: string): ListSqlPlanActionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListSqlPlanActionRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withXLanguage(xLanguage: ListSqlPlanActionRequestXLanguageEnum | string): ListSqlPlanActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSqlPlanActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSqlPlanActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QuerySqlPlanStateRequest): ListSqlPlanActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlPlanActionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
