

export class ListRelationColumnRequest {
    private 'job_id'?: string;
    private 'table_id'?: string;
    private 'assets_name'?: string;
    private 'risk_start'?: number;
    private 'risk_end'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(jobId?: string, tableId?: string, riskStart?: number, riskEnd?: number) { 
        this['job_id'] = jobId;
        this['table_id'] = tableId;
        this['risk_start'] = riskStart;
        this['risk_end'] = riskEnd;
    }
    public withJobId(jobId: string): ListRelationColumnRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withTableId(tableId: string): ListRelationColumnRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withAssetsName(assetsName: string): ListRelationColumnRequest {
        this['assets_name'] = assetsName;
        return this;
    }
    public set assetsName(assetsName: string  | undefined) {
        this['assets_name'] = assetsName;
    }
    public get assetsName(): string | undefined {
        return this['assets_name'];
    }
    public withRiskStart(riskStart: number): ListRelationColumnRequest {
        this['risk_start'] = riskStart;
        return this;
    }
    public set riskStart(riskStart: number  | undefined) {
        this['risk_start'] = riskStart;
    }
    public get riskStart(): number | undefined {
        return this['risk_start'];
    }
    public withRiskEnd(riskEnd: number): ListRelationColumnRequest {
        this['risk_end'] = riskEnd;
        return this;
    }
    public set riskEnd(riskEnd: number  | undefined) {
        this['risk_end'] = riskEnd;
    }
    public get riskEnd(): number | undefined {
        return this['risk_end'];
    }
    public withOffset(offset: number): ListRelationColumnRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRelationColumnRequest {
        this['limit'] = limit;
        return this;
    }
}