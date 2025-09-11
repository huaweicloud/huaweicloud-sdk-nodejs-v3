import { RuleSqlIdsRequestNew } from './RuleSqlIdsRequestNew';


export class SetSqlRuleRankRequest {
    private 'instance_id'?: string;
    public body?: RuleSqlIdsRequestNew;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetSqlRuleRankRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RuleSqlIdsRequestNew): SetSqlRuleRankRequest {
        this['body'] = body;
        return this;
    }
}