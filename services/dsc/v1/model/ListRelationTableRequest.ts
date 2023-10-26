

export class ListRelationTableRequest {
    private 'job_id'?: string;
    private 'db_id'?: string;
    private 'assets_name'?: string;
    private 'risk_start'?: number;
    private 'risk_end'?: number;
    public offset?: number;
    public size?: number;
    public limit?: number;
    public constructor(jobId?: string, dbId?: string, riskStart?: number, riskEnd?: number, offset?: number, size?: number) { 
        this['job_id'] = jobId;
        this['db_id'] = dbId;
        this['risk_start'] = riskStart;
        this['risk_end'] = riskEnd;
        this['offset'] = offset;
        this['size'] = size;
    }
    public withJobId(jobId: string): ListRelationTableRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDbId(dbId: string): ListRelationTableRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withAssetsName(assetsName: string): ListRelationTableRequest {
        this['assets_name'] = assetsName;
        return this;
    }
    public set assetsName(assetsName: string  | undefined) {
        this['assets_name'] = assetsName;
    }
    public get assetsName(): string | undefined {
        return this['assets_name'];
    }
    public withRiskStart(riskStart: number): ListRelationTableRequest {
        this['risk_start'] = riskStart;
        return this;
    }
    public set riskStart(riskStart: number  | undefined) {
        this['risk_start'] = riskStart;
    }
    public get riskStart(): number | undefined {
        return this['risk_start'];
    }
    public withRiskEnd(riskEnd: number): ListRelationTableRequest {
        this['risk_end'] = riskEnd;
        return this;
    }
    public set riskEnd(riskEnd: number  | undefined) {
        this['risk_end'] = riskEnd;
    }
    public get riskEnd(): number | undefined {
        return this['risk_end'];
    }
    public withOffset(offset: number): ListRelationTableRequest {
        this['offset'] = offset;
        return this;
    }
    public withSize(size: number): ListRelationTableRequest {
        this['size'] = size;
        return this;
    }
    public withLimit(limit: number): ListRelationTableRequest {
        this['limit'] = limit;
        return this;
    }
}