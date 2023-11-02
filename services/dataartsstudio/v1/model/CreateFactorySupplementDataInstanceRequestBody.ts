import { CreateFactorySupplementDataInstanceRequestBodyDependJobs } from './CreateFactorySupplementDataInstanceRequestBodyDependJobs';
import { CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime } from './CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime';
import { CreateFactorySupplementDataInstanceRequestBodySupplementDataRunTime } from './CreateFactorySupplementDataInstanceRequestBodySupplementDataRunTime';


export class CreateFactorySupplementDataInstanceRequestBody {
    public name?: string;
    private 'job_name'?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public parallel?: number;
    private 'depend_jobs'?: Array<CreateFactorySupplementDataInstanceRequestBodyDependJobs>;
    private 'is_day_granularity'?: boolean;
    public priority?: number;
    private 'is_stop_when_fail'?: boolean;
    private 'reverse_order'?: number;
    private 'supplement_data_run_time'?: CreateFactorySupplementDataInstanceRequestBodySupplementDataRunTime;
    private 'supplement_data_instance_time'?: CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime;
    public force?: string;
    public constructor(name?: string, jobName?: string, startDate?: string, endDate?: string, parallel?: number) { 
        this['name'] = name;
        this['job_name'] = jobName;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
        this['parallel'] = parallel;
    }
    public withName(name: string): CreateFactorySupplementDataInstanceRequestBody {
        this['name'] = name;
        return this;
    }
    public withJobName(jobName: string): CreateFactorySupplementDataInstanceRequestBody {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withStartDate(startDate: string): CreateFactorySupplementDataInstanceRequestBody {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): CreateFactorySupplementDataInstanceRequestBody {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withParallel(parallel: number): CreateFactorySupplementDataInstanceRequestBody {
        this['parallel'] = parallel;
        return this;
    }
    public withDependJobs(dependJobs: Array<CreateFactorySupplementDataInstanceRequestBodyDependJobs>): CreateFactorySupplementDataInstanceRequestBody {
        this['depend_jobs'] = dependJobs;
        return this;
    }
    public set dependJobs(dependJobs: Array<CreateFactorySupplementDataInstanceRequestBodyDependJobs>  | undefined) {
        this['depend_jobs'] = dependJobs;
    }
    public get dependJobs(): Array<CreateFactorySupplementDataInstanceRequestBodyDependJobs> | undefined {
        return this['depend_jobs'];
    }
    public withIsDayGranularity(isDayGranularity: boolean): CreateFactorySupplementDataInstanceRequestBody {
        this['is_day_granularity'] = isDayGranularity;
        return this;
    }
    public set isDayGranularity(isDayGranularity: boolean  | undefined) {
        this['is_day_granularity'] = isDayGranularity;
    }
    public get isDayGranularity(): boolean | undefined {
        return this['is_day_granularity'];
    }
    public withPriority(priority: number): CreateFactorySupplementDataInstanceRequestBody {
        this['priority'] = priority;
        return this;
    }
    public withIsStopWhenFail(isStopWhenFail: boolean): CreateFactorySupplementDataInstanceRequestBody {
        this['is_stop_when_fail'] = isStopWhenFail;
        return this;
    }
    public set isStopWhenFail(isStopWhenFail: boolean  | undefined) {
        this['is_stop_when_fail'] = isStopWhenFail;
    }
    public get isStopWhenFail(): boolean | undefined {
        return this['is_stop_when_fail'];
    }
    public withReverseOrder(reverseOrder: number): CreateFactorySupplementDataInstanceRequestBody {
        this['reverse_order'] = reverseOrder;
        return this;
    }
    public set reverseOrder(reverseOrder: number  | undefined) {
        this['reverse_order'] = reverseOrder;
    }
    public get reverseOrder(): number | undefined {
        return this['reverse_order'];
    }
    public withSupplementDataRunTime(supplementDataRunTime: CreateFactorySupplementDataInstanceRequestBodySupplementDataRunTime): CreateFactorySupplementDataInstanceRequestBody {
        this['supplement_data_run_time'] = supplementDataRunTime;
        return this;
    }
    public set supplementDataRunTime(supplementDataRunTime: CreateFactorySupplementDataInstanceRequestBodySupplementDataRunTime  | undefined) {
        this['supplement_data_run_time'] = supplementDataRunTime;
    }
    public get supplementDataRunTime(): CreateFactorySupplementDataInstanceRequestBodySupplementDataRunTime | undefined {
        return this['supplement_data_run_time'];
    }
    public withSupplementDataInstanceTime(supplementDataInstanceTime: CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime): CreateFactorySupplementDataInstanceRequestBody {
        this['supplement_data_instance_time'] = supplementDataInstanceTime;
        return this;
    }
    public set supplementDataInstanceTime(supplementDataInstanceTime: CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime  | undefined) {
        this['supplement_data_instance_time'] = supplementDataInstanceTime;
    }
    public get supplementDataInstanceTime(): CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime | undefined {
        return this['supplement_data_instance_time'];
    }
    public withForce(force: string): CreateFactorySupplementDataInstanceRequestBody {
        this['force'] = force;
        return this;
    }
}