import { DiagnosisTaskSubmitBody } from './DiagnosisTaskSubmitBody';


export class CreateDiagnosisTaskRequest {
    public body?: DiagnosisTaskSubmitBody;
    public constructor() { 
    }
    public withBody(body: DiagnosisTaskSubmitBody): CreateDiagnosisTaskRequest {
        this['body'] = body;
        return this;
    }
}