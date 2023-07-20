import { CreateDiagnosisTaskBody } from './CreateDiagnosisTaskBody';


export class CreateDiagnosisTaskRequest {
    private 'instance_id'?: string;
    public body?: CreateDiagnosisTaskBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDiagnosisTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateDiagnosisTaskBody): CreateDiagnosisTaskRequest {
        this['body'] = body;
        return this;
    }
}