import { BatchDeleteMessageDiagnosisReportsReq } from './BatchDeleteMessageDiagnosisReportsReq';


export class BatchDeleteMessageDiagnosisReportsRequest {
    private 'instance_id'?: string;
    public body?: BatchDeleteMessageDiagnosisReportsReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteMessageDiagnosisReportsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteMessageDiagnosisReportsReq): BatchDeleteMessageDiagnosisReportsRequest {
        this['body'] = body;
        return this;
    }
}