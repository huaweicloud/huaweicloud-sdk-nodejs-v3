

export class ListDiagnosisReportsRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): ListDiagnosisReportsRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ListDiagnosisReportsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListDiagnosisReportsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDiagnosisReportsRequest {
        this['limit'] = limit;
        return this;
    }
}