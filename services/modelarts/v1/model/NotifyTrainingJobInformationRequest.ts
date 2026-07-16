import { ReportEventBody } from './ReportEventBody';


export class NotifyTrainingJobInformationRequest {
    private 'training_job_id'?: string;
    private 'task_id'?: string;
    private 'report_type'?: string;
    public body?: ReportEventBody;
    public constructor(trainingJobId?: string, taskId?: string, reportType?: string) { 
        this['training_job_id'] = trainingJobId;
        this['task_id'] = taskId;
        this['report_type'] = reportType;
    }
    public withTrainingJobId(trainingJobId: string): NotifyTrainingJobInformationRequest {
        this['training_job_id'] = trainingJobId;
        return this;
    }
    public set trainingJobId(trainingJobId: string  | undefined) {
        this['training_job_id'] = trainingJobId;
    }
    public get trainingJobId(): string | undefined {
        return this['training_job_id'];
    }
    public withTaskId(taskId: string): NotifyTrainingJobInformationRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withReportType(reportType: string): NotifyTrainingJobInformationRequest {
        this['report_type'] = reportType;
        return this;
    }
    public set reportType(reportType: string  | undefined) {
        this['report_type'] = reportType;
    }
    public get reportType(): string | undefined {
        return this['report_type'];
    }
    public withBody(body: ReportEventBody): NotifyTrainingJobInformationRequest {
        this['body'] = body;
        return this;
    }
}