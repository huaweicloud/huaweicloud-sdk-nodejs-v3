

export class FlJobListVo {
    private 'algorithm_type'?: FlJobListVoAlgorithmTypeEnum | string;
    private 'approval_status'?: FlJobListVoApprovalStatusEnum | string;
    private 'create_time'?: Date;
    private 'creator_name'?: string;
    public description?: string;
    public ext?: string;
    private 'hfl_platform_type'?: FlJobListVoHflPlatformTypeEnum | string;
    private 'hfl_type'?: FlJobListVoHflTypeEnum | string;
    private 'is_single_predict'?: boolean;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'job_type'?: FlJobListVoJobTypeEnum | string;
    private 'learning_task_type'?: FlJobListVoLearningTaskTypeEnum | string;
    public constructor(createTime?: Date, creatorName?: string, hflPlatformType?: string, hflType?: string, jobId?: string, jobName?: string) { 
        this['create_time'] = createTime;
        this['creator_name'] = creatorName;
        this['hfl_platform_type'] = hflPlatformType;
        this['hfl_type'] = hflType;
        this['job_id'] = jobId;
        this['job_name'] = jobName;
    }
    public withAlgorithmType(algorithmType: FlJobListVoAlgorithmTypeEnum | string): FlJobListVo {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: FlJobListVoAlgorithmTypeEnum | string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): FlJobListVoAlgorithmTypeEnum | string | undefined {
        return this['algorithm_type'];
    }
    public withApprovalStatus(approvalStatus: FlJobListVoApprovalStatusEnum | string): FlJobListVo {
        this['approval_status'] = approvalStatus;
        return this;
    }
    public set approvalStatus(approvalStatus: FlJobListVoApprovalStatusEnum | string  | undefined) {
        this['approval_status'] = approvalStatus;
    }
    public get approvalStatus(): FlJobListVoApprovalStatusEnum | string | undefined {
        return this['approval_status'];
    }
    public withCreateTime(createTime: Date): FlJobListVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): FlJobListVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withDescription(description: string): FlJobListVo {
        this['description'] = description;
        return this;
    }
    public withExt(ext: string): FlJobListVo {
        this['ext'] = ext;
        return this;
    }
    public withHflPlatformType(hflPlatformType: FlJobListVoHflPlatformTypeEnum | string): FlJobListVo {
        this['hfl_platform_type'] = hflPlatformType;
        return this;
    }
    public set hflPlatformType(hflPlatformType: FlJobListVoHflPlatformTypeEnum | string  | undefined) {
        this['hfl_platform_type'] = hflPlatformType;
    }
    public get hflPlatformType(): FlJobListVoHflPlatformTypeEnum | string | undefined {
        return this['hfl_platform_type'];
    }
    public withHflType(hflType: FlJobListVoHflTypeEnum | string): FlJobListVo {
        this['hfl_type'] = hflType;
        return this;
    }
    public set hflType(hflType: FlJobListVoHflTypeEnum | string  | undefined) {
        this['hfl_type'] = hflType;
    }
    public get hflType(): FlJobListVoHflTypeEnum | string | undefined {
        return this['hfl_type'];
    }
    public withIsSinglePredict(isSinglePredict: boolean): FlJobListVo {
        this['is_single_predict'] = isSinglePredict;
        return this;
    }
    public set isSinglePredict(isSinglePredict: boolean  | undefined) {
        this['is_single_predict'] = isSinglePredict;
    }
    public get isSinglePredict(): boolean | undefined {
        return this['is_single_predict'];
    }
    public withJobId(jobId: string): FlJobListVo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): FlJobListVo {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobType(jobType: FlJobListVoJobTypeEnum | string): FlJobListVo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: FlJobListVoJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): FlJobListVoJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withLearningTaskType(learningTaskType: FlJobListVoLearningTaskTypeEnum | string): FlJobListVo {
        this['learning_task_type'] = learningTaskType;
        return this;
    }
    public set learningTaskType(learningTaskType: FlJobListVoLearningTaskTypeEnum | string  | undefined) {
        this['learning_task_type'] = learningTaskType;
    }
    public get learningTaskType(): FlJobListVoLearningTaskTypeEnum | string | undefined {
        return this['learning_task_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlJobListVoAlgorithmTypeEnum {
    FIBINET = 'FIBINET',
    LIGHT_BGM = 'LIGHT_BGM',
    LOGISTIC_REGRESSION = 'LOGISTIC_REGRESSION',
    NEURAL_NETWORK = 'NEURAL_NETWORK',
    XG_BOOST = 'XG_BOOST'
}
/**
    * @export
    * @enum {string}
    */
export enum FlJobListVoApprovalStatusEnum {
    APPROVED = 'APPROVED',
    APPROVING = 'APPROVING',
    NEW = 'NEW',
    REJECTED = 'REJECTED',
    REVOKED = 'REVOKED'
}
/**
    * @export
    * @enum {string}
    */
export enum FlJobListVoHflPlatformTypeEnum {
    LOCAL = 'LOCAL'
}
/**
    * @export
    * @enum {string}
    */
export enum FlJobListVoHflTypeEnum {
    EVALUATE = 'EVALUATE',
    TRAIN = 'TRAIN'
}
/**
    * @export
    * @enum {string}
    */
export enum FlJobListVoJobTypeEnum {
    HFL = 'HFL',
    PREDICT = 'PREDICT',
    SQL = 'SQL',
    VFL = 'VFL',
    DATA_EXCHANGE = 'DATA_EXCHANGE'
}
/**
    * @export
    * @enum {string}
    */
export enum FlJobListVoLearningTaskTypeEnum {
    CLASSIFICATION = 'CLASSIFICATION',
    REGRESSION = 'REGRESSION'
}
