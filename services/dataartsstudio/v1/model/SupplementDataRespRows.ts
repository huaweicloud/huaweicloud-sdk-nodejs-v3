import { SupplementDataRespSupplementDataInstanceTime } from './SupplementDataRespSupplementDataInstanceTime';
import { SupplementDataRespSupplementDataRunTime } from './SupplementDataRespSupplementDataRunTime';


export class SupplementDataRespRows {
    private 'end_date'?: number;
    private 'job_list'?: Array<string>;
    public name?: string;
    public parallel?: number;
    private 'start_date'?: number;
    public status?: string;
    private 'submitted_date'?: number;
    private 'supplement_data_instance_time'?: SupplementDataRespSupplementDataInstanceTime;
    private 'supplement_data_run_time'?: SupplementDataRespSupplementDataRunTime;
    public type?: number;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withEndDate(endDate: number): SupplementDataRespRows {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: number  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): number | undefined {
        return this['end_date'];
    }
    public withJobList(jobList: Array<string>): SupplementDataRespRows {
        this['job_list'] = jobList;
        return this;
    }
    public set jobList(jobList: Array<string>  | undefined) {
        this['job_list'] = jobList;
    }
    public get jobList(): Array<string> | undefined {
        return this['job_list'];
    }
    public withName(name: string): SupplementDataRespRows {
        this['name'] = name;
        return this;
    }
    public withParallel(parallel: number): SupplementDataRespRows {
        this['parallel'] = parallel;
        return this;
    }
    public withStartDate(startDate: number): SupplementDataRespRows {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withStatus(status: string): SupplementDataRespRows {
        this['status'] = status;
        return this;
    }
    public withSubmittedDate(submittedDate: number): SupplementDataRespRows {
        this['submitted_date'] = submittedDate;
        return this;
    }
    public set submittedDate(submittedDate: number  | undefined) {
        this['submitted_date'] = submittedDate;
    }
    public get submittedDate(): number | undefined {
        return this['submitted_date'];
    }
    public withSupplementDataInstanceTime(supplementDataInstanceTime: SupplementDataRespSupplementDataInstanceTime): SupplementDataRespRows {
        this['supplement_data_instance_time'] = supplementDataInstanceTime;
        return this;
    }
    public set supplementDataInstanceTime(supplementDataInstanceTime: SupplementDataRespSupplementDataInstanceTime  | undefined) {
        this['supplement_data_instance_time'] = supplementDataInstanceTime;
    }
    public get supplementDataInstanceTime(): SupplementDataRespSupplementDataInstanceTime | undefined {
        return this['supplement_data_instance_time'];
    }
    public withSupplementDataRunTime(supplementDataRunTime: SupplementDataRespSupplementDataRunTime): SupplementDataRespRows {
        this['supplement_data_run_time'] = supplementDataRunTime;
        return this;
    }
    public set supplementDataRunTime(supplementDataRunTime: SupplementDataRespSupplementDataRunTime  | undefined) {
        this['supplement_data_run_time'] = supplementDataRunTime;
    }
    public get supplementDataRunTime(): SupplementDataRespSupplementDataRunTime | undefined {
        return this['supplement_data_run_time'];
    }
    public withType(type: number): SupplementDataRespRows {
        this['type'] = type;
        return this;
    }
    public withUserName(userName: string): SupplementDataRespRows {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}