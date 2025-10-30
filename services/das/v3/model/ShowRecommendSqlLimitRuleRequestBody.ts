

export class ShowRecommendSqlLimitRuleRequestBody {
    private 'engine_type'?: string;
    private 'rds_recommendation_type'?: string;
    private 'taurus_recommendation_type'?: string;
    private 'recommend_count'?: number;
    private 'node_id'?: string;
    public constructor() { 
    }
    public withEngineType(engineType: string): ShowRecommendSqlLimitRuleRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withRdsRecommendationType(rdsRecommendationType: string): ShowRecommendSqlLimitRuleRequestBody {
        this['rds_recommendation_type'] = rdsRecommendationType;
        return this;
    }
    public set rdsRecommendationType(rdsRecommendationType: string  | undefined) {
        this['rds_recommendation_type'] = rdsRecommendationType;
    }
    public get rdsRecommendationType(): string | undefined {
        return this['rds_recommendation_type'];
    }
    public withTaurusRecommendationType(taurusRecommendationType: string): ShowRecommendSqlLimitRuleRequestBody {
        this['taurus_recommendation_type'] = taurusRecommendationType;
        return this;
    }
    public set taurusRecommendationType(taurusRecommendationType: string  | undefined) {
        this['taurus_recommendation_type'] = taurusRecommendationType;
    }
    public get taurusRecommendationType(): string | undefined {
        return this['taurus_recommendation_type'];
    }
    public withRecommendCount(recommendCount: number): ShowRecommendSqlLimitRuleRequestBody {
        this['recommend_count'] = recommendCount;
        return this;
    }
    public set recommendCount(recommendCount: number  | undefined) {
        this['recommend_count'] = recommendCount;
    }
    public get recommendCount(): number | undefined {
        return this['recommend_count'];
    }
    public withNodeId(nodeId: string): ShowRecommendSqlLimitRuleRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}