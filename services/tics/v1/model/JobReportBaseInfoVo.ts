

export class JobReportBaseInfoVo {
    private 'exe_time'?: Date;
    public executor?: string;
    private 'hfl_type'?: JobReportBaseInfoVoHflTypeEnum | string;
    private 'job_name'?: string;
    private 'job_type'?: JobReportBaseInfoVoJobTypeEnum | string;
    public status?: JobReportBaseInfoVoStatusEnum | string;
    public constructor(hflType?: string, jobName?: string, jobType?: string, status?: string) { 
        this['hfl_type'] = hflType;
        this['job_name'] = jobName;
        this['job_type'] = jobType;
        this['status'] = status;
    }
    public withExeTime(exeTime: Date): JobReportBaseInfoVo {
        this['exe_time'] = exeTime;
        return this;
    }
    public set exeTime(exeTime: Date  | undefined) {
        this['exe_time'] = exeTime;
    }
    public get exeTime(): Date | undefined {
        return this['exe_time'];
    }
    public withExecutor(executor: string): JobReportBaseInfoVo {
        this['executor'] = executor;
        return this;
    }
    public withHflType(hflType: JobReportBaseInfoVoHflTypeEnum | string): JobReportBaseInfoVo {
        this['hfl_type'] = hflType;
        return this;
    }
    public set hflType(hflType: JobReportBaseInfoVoHflTypeEnum | string  | undefined) {
        this['hfl_type'] = hflType;
    }
    public get hflType(): JobReportBaseInfoVoHflTypeEnum | string | undefined {
        return this['hfl_type'];
    }
    public withJobName(jobName: string): JobReportBaseInfoVo {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobType(jobType: JobReportBaseInfoVoJobTypeEnum | string): JobReportBaseInfoVo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobReportBaseInfoVoJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobReportBaseInfoVoJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withStatus(status: JobReportBaseInfoVoStatusEnum | string): JobReportBaseInfoVo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobReportBaseInfoVoHflTypeEnum {
    EVALUATE = 'EVALUATE',
    TRAIN = 'TRAIN'
}
/**
    * @export
    * @enum {string}
    */
export enum JobReportBaseInfoVoJobTypeEnum {
    HFL = 'HFL',
    SQL = 'SQL',
    VFL_EVALUATE = 'VFL_EVALUATE',
    VFL_FEATURE_SELECTION = 'VFL_FEATURE_SELECTION',
    VFL_ID_TRUNCATION = 'VFL_ID_TRUNCATION',
    VFL_PREDICT = 'VFL_PREDICT',
    VFL_SAMPLE_ALIGNMENT = 'VFL_SAMPLE_ALIGNMENT',
    VFL_TRAIN = 'VFL_TRAIN'
}
/**
    * @export
    * @enum {string}
    */
export enum JobReportBaseInfoVoStatusEnum {
    ACCEPTED = 'ACCEPTED',
    DEPLOYING = 'DEPLOYING',
    FAILED = 'FAILED',
    NEW = 'NEW',
    PENDING = 'PENDING',
    RUNNING = 'RUNNING',
    SUBMITING = 'SUBMITING',
    SUCCEEDED = 'SUCCEEDED',
    TERMINATED = 'TERMINATED',
    TERMINATING = 'TERMINATING'
}
