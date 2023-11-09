

export class LeagueDatasetStatisticsVo {
    private 'dataset_domain_alias'?: string;
    private 'dataset_domain_name'?: string;
    private 'dataset_id'?: string;
    private 'dataset_intercept_cnt'?: number;
    private 'dataset_name'?: string;
    private 'dataset_use_cnt'?: number;
    public constructor() { 
    }
    public withDatasetDomainAlias(datasetDomainAlias: string): LeagueDatasetStatisticsVo {
        this['dataset_domain_alias'] = datasetDomainAlias;
        return this;
    }
    public set datasetDomainAlias(datasetDomainAlias: string  | undefined) {
        this['dataset_domain_alias'] = datasetDomainAlias;
    }
    public get datasetDomainAlias(): string | undefined {
        return this['dataset_domain_alias'];
    }
    public withDatasetDomainName(datasetDomainName: string): LeagueDatasetStatisticsVo {
        this['dataset_domain_name'] = datasetDomainName;
        return this;
    }
    public set datasetDomainName(datasetDomainName: string  | undefined) {
        this['dataset_domain_name'] = datasetDomainName;
    }
    public get datasetDomainName(): string | undefined {
        return this['dataset_domain_name'];
    }
    public withDatasetId(datasetId: string): LeagueDatasetStatisticsVo {
        this['dataset_id'] = datasetId;
        return this;
    }
    public set datasetId(datasetId: string  | undefined) {
        this['dataset_id'] = datasetId;
    }
    public get datasetId(): string | undefined {
        return this['dataset_id'];
    }
    public withDatasetInterceptCnt(datasetInterceptCnt: number): LeagueDatasetStatisticsVo {
        this['dataset_intercept_cnt'] = datasetInterceptCnt;
        return this;
    }
    public set datasetInterceptCnt(datasetInterceptCnt: number  | undefined) {
        this['dataset_intercept_cnt'] = datasetInterceptCnt;
    }
    public get datasetInterceptCnt(): number | undefined {
        return this['dataset_intercept_cnt'];
    }
    public withDatasetName(datasetName: string): LeagueDatasetStatisticsVo {
        this['dataset_name'] = datasetName;
        return this;
    }
    public set datasetName(datasetName: string  | undefined) {
        this['dataset_name'] = datasetName;
    }
    public get datasetName(): string | undefined {
        return this['dataset_name'];
    }
    public withDatasetUseCnt(datasetUseCnt: number): LeagueDatasetStatisticsVo {
        this['dataset_use_cnt'] = datasetUseCnt;
        return this;
    }
    public set datasetUseCnt(datasetUseCnt: number  | undefined) {
        this['dataset_use_cnt'] = datasetUseCnt;
    }
    public get datasetUseCnt(): number | undefined {
        return this['dataset_use_cnt'];
    }
}