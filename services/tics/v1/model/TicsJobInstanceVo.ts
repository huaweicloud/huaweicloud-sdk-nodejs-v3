

export class TicsJobInstanceVo {
    private 'end_time'?: Date;
    public ext?: string;
    public id?: string;
    private 'is_single_predict'?: boolean;
    private 'job_instance_type'?: TicsJobInstanceVoJobInstanceTypeEnum | string;
    private 'job_name'?: string;
    private 'job_partner'?: string;
    private 'result_ext'?: string;
    private 'round_id'?: number;
    private 'start_time'?: Date;
    public status?: TicsJobInstanceVoStatusEnum | string;
    public constructor(id?: string, jobInstanceType?: string, jobName?: string, status?: string) { 
        this['id'] = id;
        this['job_instance_type'] = jobInstanceType;
        this['job_name'] = jobName;
        this['status'] = status;
    }
    public withEndTime(endTime: Date): TicsJobInstanceVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withExt(ext: string): TicsJobInstanceVo {
        this['ext'] = ext;
        return this;
    }
    public withId(id: string): TicsJobInstanceVo {
        this['id'] = id;
        return this;
    }
    public withIsSinglePredict(isSinglePredict: boolean): TicsJobInstanceVo {
        this['is_single_predict'] = isSinglePredict;
        return this;
    }
    public set isSinglePredict(isSinglePredict: boolean  | undefined) {
        this['is_single_predict'] = isSinglePredict;
    }
    public get isSinglePredict(): boolean | undefined {
        return this['is_single_predict'];
    }
    public withJobInstanceType(jobInstanceType: TicsJobInstanceVoJobInstanceTypeEnum | string): TicsJobInstanceVo {
        this['job_instance_type'] = jobInstanceType;
        return this;
    }
    public set jobInstanceType(jobInstanceType: TicsJobInstanceVoJobInstanceTypeEnum | string  | undefined) {
        this['job_instance_type'] = jobInstanceType;
    }
    public get jobInstanceType(): TicsJobInstanceVoJobInstanceTypeEnum | string | undefined {
        return this['job_instance_type'];
    }
    public withJobName(jobName: string): TicsJobInstanceVo {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobPartner(jobPartner: string): TicsJobInstanceVo {
        this['job_partner'] = jobPartner;
        return this;
    }
    public set jobPartner(jobPartner: string  | undefined) {
        this['job_partner'] = jobPartner;
    }
    public get jobPartner(): string | undefined {
        return this['job_partner'];
    }
    public withResultExt(resultExt: string): TicsJobInstanceVo {
        this['result_ext'] = resultExt;
        return this;
    }
    public set resultExt(resultExt: string  | undefined) {
        this['result_ext'] = resultExt;
    }
    public get resultExt(): string | undefined {
        return this['result_ext'];
    }
    public withRoundId(roundId: number): TicsJobInstanceVo {
        this['round_id'] = roundId;
        return this;
    }
    public set roundId(roundId: number  | undefined) {
        this['round_id'] = roundId;
    }
    public get roundId(): number | undefined {
        return this['round_id'];
    }
    public withStartTime(startTime: Date): TicsJobInstanceVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withStatus(status: TicsJobInstanceVoStatusEnum | string): TicsJobInstanceVo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TicsJobInstanceVoJobInstanceTypeEnum {
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
export enum TicsJobInstanceVoStatusEnum {
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
