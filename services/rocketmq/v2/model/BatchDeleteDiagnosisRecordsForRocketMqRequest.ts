import { BatchDeleteDiagnosisReportReq } from './BatchDeleteDiagnosisReportReq';


export class BatchDeleteDiagnosisRecordsForRocketMqRequest {
    private 'instance_id'?: string;
    public body?: BatchDeleteDiagnosisReportReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteDiagnosisRecordsForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchDeleteDiagnosisReportReq): BatchDeleteDiagnosisRecordsForRocketMqRequest {
        this['body'] = body;
        return this;
    }
}