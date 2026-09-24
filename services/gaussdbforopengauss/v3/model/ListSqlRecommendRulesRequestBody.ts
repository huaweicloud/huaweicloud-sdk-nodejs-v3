

export class ListSqlRecommendRulesRequestBody {
    private 'recommend_type'?: ListSqlRecommendRulesRequestBodyRecommendTypeEnum | string;
    private 'recommend_count'?: number;
    private 'use_ops_tunnel'?: boolean;
    public constructor() { 
    }
    public withRecommendType(recommendType: ListSqlRecommendRulesRequestBodyRecommendTypeEnum | string): ListSqlRecommendRulesRequestBody {
        this['recommend_type'] = recommendType;
        return this;
    }
    public set recommendType(recommendType: ListSqlRecommendRulesRequestBodyRecommendTypeEnum | string  | undefined) {
        this['recommend_type'] = recommendType;
    }
    public get recommendType(): ListSqlRecommendRulesRequestBodyRecommendTypeEnum | string | undefined {
        return this['recommend_type'];
    }
    public withRecommendCount(recommendCount: number): ListSqlRecommendRulesRequestBody {
        this['recommend_count'] = recommendCount;
        return this;
    }
    public set recommendCount(recommendCount: number  | undefined) {
        this['recommend_count'] = recommendCount;
    }
    public get recommendCount(): number | undefined {
        return this['recommend_count'];
    }
    public withUseOpsTunnel(useOpsTunnel: boolean): ListSqlRecommendRulesRequestBody {
        this['use_ops_tunnel'] = useOpsTunnel;
        return this;
    }
    public set useOpsTunnel(useOpsTunnel: boolean  | undefined) {
        this['use_ops_tunnel'] = useOpsTunnel;
    }
    public get useOpsTunnel(): boolean | undefined {
        return this['use_ops_tunnel'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlRecommendRulesRequestBodyRecommendTypeEnum {
    ALL = 'all',
    EXEC_COUNT = 'exec_count',
    AVG_EXEC_TIME = 'avg_exec_time',
    MAX_EXEC_TIME = 'max_exec_time'
}
