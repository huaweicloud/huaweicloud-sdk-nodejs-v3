import { BatchDeleteDiagnosisReportReq } from './BatchDeleteDiagnosisReportReq';


export class BatchDeleteDiagnosisReportRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public body?: BatchDeleteDiagnosisReportReq;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): BatchDeleteDiagnosisReportRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): BatchDeleteDiagnosisReportRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteDiagnosisReportReq): BatchDeleteDiagnosisReportRequest {
        this['body'] = body;
        return this;
    }
}