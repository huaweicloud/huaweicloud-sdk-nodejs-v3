
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectSuccessRateResponse extends SdkResponse {
    private 'success_rate'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'project_name'?: string | undefined;
    private 'start_date'?: string | undefined;
    private 'end_date'?: string | undefined;
    private 'task_count'?: number | undefined;
    private 'record_count'?: number | undefined;
    private 'success_record_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withSuccessRate(successRate: string): ShowProjectSuccessRateResponse {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: string | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate() {
        return this['success_rate'];
    }
    public withProjectId(projectId: string): ShowProjectSuccessRateResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ShowProjectSuccessRateResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withStartDate(startDate: string): ShowProjectSuccessRateResponse {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ShowProjectSuccessRateResponse {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate() {
        return this['end_date'];
    }
    public withTaskCount(taskCount: number): ShowProjectSuccessRateResponse {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: number | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount() {
        return this['task_count'];
    }
    public withRecordCount(recordCount: number): ShowProjectSuccessRateResponse {
        this['record_count'] = recordCount;
        return this;
    }
    public set recordCount(recordCount: number | undefined) {
        this['record_count'] = recordCount;
    }
    public get recordCount() {
        return this['record_count'];
    }
    public withSuccessRecordCount(successRecordCount: number): ShowProjectSuccessRateResponse {
        this['success_record_count'] = successRecordCount;
        return this;
    }
    public set successRecordCount(successRecordCount: number | undefined) {
        this['success_record_count'] = successRecordCount;
    }
    public get successRecordCount() {
        return this['success_record_count'];
    }
}