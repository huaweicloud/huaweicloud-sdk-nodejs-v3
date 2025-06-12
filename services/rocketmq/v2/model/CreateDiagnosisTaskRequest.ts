import { DiagnosisRep } from './DiagnosisRep';


export class CreateDiagnosisTaskRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public body?: DiagnosisRep;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): CreateDiagnosisTaskRequest {
        this['engine'] = engine;
        return this;
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
    public withBody(body: DiagnosisRep): CreateDiagnosisTaskRequest {
        this['body'] = body;
        return this;
    }
}