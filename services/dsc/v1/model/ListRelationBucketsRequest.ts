

export class ListRelationBucketsRequest {
    private 'job_id'?: string;
    private 'assets_name'?: string;
    private 'risk_start'?: number;
    private 'risk_end'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(jobId?: string, riskStart?: number, riskEnd?: number) { 
        this['job_id'] = jobId;
        this['risk_start'] = riskStart;
        this['risk_end'] = riskEnd;
    }
    public withJobId(jobId: string): ListRelationBucketsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAssetsName(assetsName: string): ListRelationBucketsRequest {
        this['assets_name'] = assetsName;
        return this;
    }
    public set assetsName(assetsName: string  | undefined) {
        this['assets_name'] = assetsName;
    }
    public get assetsName(): string | undefined {
        return this['assets_name'];
    }
    public withRiskStart(riskStart: number): ListRelationBucketsRequest {
        this['risk_start'] = riskStart;
        return this;
    }
    public set riskStart(riskStart: number  | undefined) {
        this['risk_start'] = riskStart;
    }
    public get riskStart(): number | undefined {
        return this['risk_start'];
    }
    public withRiskEnd(riskEnd: number): ListRelationBucketsRequest {
        this['risk_end'] = riskEnd;
        return this;
    }
    public set riskEnd(riskEnd: number  | undefined) {
        this['risk_end'] = riskEnd;
    }
    public get riskEnd(): number | undefined {
        return this['risk_end'];
    }
    public withOffset(offset: number): ListRelationBucketsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRelationBucketsRequest {
        this['limit'] = limit;
        return this;
    }
}