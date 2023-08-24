import { ErrorResponse } from './ErrorResponse';


export class DigitalHumanModelingJobInfo {
    private 'job_id'?: string;
    public state?: DigitalHumanModelingJobInfoStateEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_info'?: ErrorResponse;
    public constructor(jobId?: string, state?: string) { 
        this['job_id'] = jobId;
        this['state'] = state;
    }
    public withJobId(jobId: string): DigitalHumanModelingJobInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: DigitalHumanModelingJobInfoStateEnum | string): DigitalHumanModelingJobInfo {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): DigitalHumanModelingJobInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): DigitalHumanModelingJobInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): DigitalHumanModelingJobInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DigitalHumanModelingJobInfoStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    PARTIAL_SUCCEED = 'PARTIAL_SUCCEED',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
