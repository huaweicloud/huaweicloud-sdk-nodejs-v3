

export class ShowSecurityScoreRequest {
    private 'enterprise_project_id'?: string;
    private 'need_cal_score'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowSecurityScoreRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNeedCalScore(needCalScore: number): ShowSecurityScoreRequest {
        this['need_cal_score'] = needCalScore;
        return this;
    }
    public set needCalScore(needCalScore: number  | undefined) {
        this['need_cal_score'] = needCalScore;
    }
    public get needCalScore(): number | undefined {
        return this['need_cal_score'];
    }
}