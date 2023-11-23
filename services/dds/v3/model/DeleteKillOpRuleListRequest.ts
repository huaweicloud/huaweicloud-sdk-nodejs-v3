import { DeleteKillOpRuleListRequestBody } from './DeleteKillOpRuleListRequestBody';


export class DeleteKillOpRuleListRequest {
    private 'instance_id'?: string;
    public body?: DeleteKillOpRuleListRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteKillOpRuleListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteKillOpRuleListRequestBody): DeleteKillOpRuleListRequest {
        this['body'] = body;
        return this;
    }
}