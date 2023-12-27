

export class TTSAJob {
    private 'job_id'?: string;
    public state?: TTSAJobStateEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'content_duration'?: number;
    private 'job_type'?: TTSAJobJobTypeEnum | string;
    public constructor() { 
    }
    public withJobId(jobId: string): TTSAJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: TTSAJobStateEnum | string): TTSAJob {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): TTSAJob {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TTSAJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withContentDuration(contentDuration: number): TTSAJob {
        this['content_duration'] = contentDuration;
        return this;
    }
    public set contentDuration(contentDuration: number  | undefined) {
        this['content_duration'] = contentDuration;
    }
    public get contentDuration(): number | undefined {
        return this['content_duration'];
    }
    public withJobType(jobType: TTSAJobJobTypeEnum | string): TTSAJob {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: TTSAJobJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): TTSAJobJobTypeEnum | string | undefined {
        return this['job_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TTSAJobStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum TTSAJobJobTypeEnum {
    REAL_JOB = 'REAL_JOB',
    UNREAL_JOB = 'UNREAL_JOB'
}
