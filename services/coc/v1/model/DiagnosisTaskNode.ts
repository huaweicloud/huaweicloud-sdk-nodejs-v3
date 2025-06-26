import { BasicDTO } from './BasicDTO';


export class DiagnosisTaskNode {
    public id?: string;
    public code?: string;
    public name?: string;
    private 'name_zh'?: string;
    private 'diagnosis_task_id'?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): DiagnosisTaskNode {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): DiagnosisTaskNode {
        this['code'] = code;
        return this;
    }
    public withName(name: string): DiagnosisTaskNode {
        this['name'] = name;
        return this;
    }
    public withNameZh(nameZh: string): DiagnosisTaskNode {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withDiagnosisTaskId(diagnosisTaskId: string): DiagnosisTaskNode {
        this['diagnosis_task_id'] = diagnosisTaskId;
        return this;
    }
    public set diagnosisTaskId(diagnosisTaskId: string  | undefined) {
        this['diagnosis_task_id'] = diagnosisTaskId;
    }
    public get diagnosisTaskId(): string | undefined {
        return this['diagnosis_task_id'];
    }
    public withStatus(status: string): DiagnosisTaskNode {
        this['status'] = status;
        return this;
    }
}