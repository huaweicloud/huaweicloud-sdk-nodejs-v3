import { CreateKillOpRuleRequestBody } from './CreateKillOpRuleRequestBody';


export class CreateKillOpRuleRequest {
    private 'instance_id'?: string;
    public body?: CreateKillOpRuleRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateKillOpRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateKillOpRuleRequestBody): CreateKillOpRuleRequest {
        this['body'] = body;
        return this;
    }
}