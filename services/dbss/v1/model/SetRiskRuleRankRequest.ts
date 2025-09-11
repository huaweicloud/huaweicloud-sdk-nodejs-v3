import { RankRiskRuleNew } from './RankRiskRuleNew';


export class SetRiskRuleRankRequest {
    private 'instance_id'?: string;
    public body?: RankRiskRuleNew;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetRiskRuleRankRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RankRiskRuleNew): SetRiskRuleRankRequest {
        this['body'] = body;
        return this;
    }
}