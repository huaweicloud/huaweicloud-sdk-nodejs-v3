import { UpdateKillOpRuleRequestBody } from './UpdateKillOpRuleRequestBody';


export class UpdateKillOpRuleRequest {
    private 'instance_id'?: string;
    public body?: UpdateKillOpRuleRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateKillOpRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateKillOpRuleRequestBody): UpdateKillOpRuleRequest {
        this['body'] = body;
        return this;
    }
}