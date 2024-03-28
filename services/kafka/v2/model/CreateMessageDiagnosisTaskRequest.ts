import { CreateMessageDiagnosisTaskReq } from './CreateMessageDiagnosisTaskReq';


export class CreateMessageDiagnosisTaskRequest {
    private 'instance_id'?: string;
    public body?: CreateMessageDiagnosisTaskReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateMessageDiagnosisTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateMessageDiagnosisTaskReq): CreateMessageDiagnosisTaskRequest {
        this['body'] = body;
        return this;
    }
}