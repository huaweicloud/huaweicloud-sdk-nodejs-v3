import { DiagnosisReq } from './DiagnosisReq';


export class CreateDiagnosisTaskForRocketMqRequest {
    private 'instance_id'?: string;
    public body?: DiagnosisReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDiagnosisTaskForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DiagnosisReq): CreateDiagnosisTaskForRocketMqRequest {
        this['body'] = body;
        return this;
    }
}