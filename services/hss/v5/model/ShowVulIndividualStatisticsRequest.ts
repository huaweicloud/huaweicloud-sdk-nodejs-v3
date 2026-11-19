

export class ShowVulIndividualStatisticsRequest {
    private 'enterprise_project_id'?: string;
    private 'statistics_types'?: Array<string>;
    public constructor(statisticsTypes?: Array<string>) { 
        this['statistics_types'] = statisticsTypes;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowVulIndividualStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatisticsTypes(statisticsTypes: Array<string>): ShowVulIndividualStatisticsRequest {
        this['statistics_types'] = statisticsTypes;
        return this;
    }
    public set statisticsTypes(statisticsTypes: Array<string>  | undefined) {
        this['statistics_types'] = statisticsTypes;
    }
    public get statisticsTypes(): Array<string> | undefined {
        return this['statistics_types'];
    }
}