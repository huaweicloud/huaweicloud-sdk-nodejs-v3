import { DeleteTaurusDbNodeProcessesRequestBody } from './DeleteTaurusDbNodeProcessesRequestBody';


export class DeleteTaurusDbNodeProcessesRequest {
    private 'X-Language'?: DeleteTaurusDbNodeProcessesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public body?: DeleteTaurusDbNodeProcessesRequestBody;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withXLanguage(xLanguage: DeleteTaurusDbNodeProcessesRequestXLanguageEnum | string): DeleteTaurusDbNodeProcessesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteTaurusDbNodeProcessesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteTaurusDbNodeProcessesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteTaurusDbNodeProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): DeleteTaurusDbNodeProcessesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: DeleteTaurusDbNodeProcessesRequestBody): DeleteTaurusDbNodeProcessesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTaurusDbNodeProcessesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
