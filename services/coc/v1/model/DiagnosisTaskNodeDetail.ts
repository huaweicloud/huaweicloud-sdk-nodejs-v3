import { DiagnosisTaskNode } from './DiagnosisTaskNode';


export class DiagnosisTaskNodeDetail {
    public id?: string;
    public code?: string;
    public name?: string;
    private 'name_zh'?: string;
    private 'diagnosis_task_id'?: string;
    public status?: string;
    private 'diagnosis_record_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public message?: string;
    public constructor() { 
    }
    public withId(id: string): DiagnosisTaskNodeDetail {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): DiagnosisTaskNodeDetail {
        this['code'] = code;
        return this;
    }
    public withName(name: string): DiagnosisTaskNodeDetail {
        this['name'] = name;
        return this;
    }
    public withNameZh(nameZh: string): DiagnosisTaskNodeDetail {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withDiagnosisTaskId(diagnosisTaskId: string): DiagnosisTaskNodeDetail {
        this['diagnosis_task_id'] = diagnosisTaskId;
        return this;
    }
    public set diagnosisTaskId(diagnosisTaskId: string  | undefined) {
        this['diagnosis_task_id'] = diagnosisTaskId;
    }
    public get diagnosisTaskId(): string | undefined {
        return this['diagnosis_task_id'];
    }
    public withStatus(status: string): DiagnosisTaskNodeDetail {
        this['status'] = status;
        return this;
    }
    public withDiagnosisRecordId(diagnosisRecordId: string): DiagnosisTaskNodeDetail {
        this['diagnosis_record_id'] = diagnosisRecordId;
        return this;
    }
    public set diagnosisRecordId(diagnosisRecordId: string  | undefined) {
        this['diagnosis_record_id'] = diagnosisRecordId;
    }
    public get diagnosisRecordId(): string | undefined {
        return this['diagnosis_record_id'];
    }
    public withStartTime(startTime: string): DiagnosisTaskNodeDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): DiagnosisTaskNodeDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMessage(message: string): DiagnosisTaskNodeDetail {
        this['message'] = message;
        return this;
    }
}