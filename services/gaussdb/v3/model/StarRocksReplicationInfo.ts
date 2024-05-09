

export class StarRocksReplicationInfo {
    private 'source_database'?: string;
    private 'target_database'?: string;
    private 'task_name'?: string;
    public status?: StarRocksReplicationInfoStatusEnum | string;
    public stage?: StarRocksReplicationInfoStageEnum | string;
    public percentage?: string;
    private 'catchup_stage'?: StarRocksReplicationInfoCatchupStageEnum | string;
    private 'catchup_percentage'?: string;
    public constructor() { 
    }
    public withSourceDatabase(sourceDatabase: string): StarRocksReplicationInfo {
        this['source_database'] = sourceDatabase;
        return this;
    }
    public set sourceDatabase(sourceDatabase: string  | undefined) {
        this['source_database'] = sourceDatabase;
    }
    public get sourceDatabase(): string | undefined {
        return this['source_database'];
    }
    public withTargetDatabase(targetDatabase: string): StarRocksReplicationInfo {
        this['target_database'] = targetDatabase;
        return this;
    }
    public set targetDatabase(targetDatabase: string  | undefined) {
        this['target_database'] = targetDatabase;
    }
    public get targetDatabase(): string | undefined {
        return this['target_database'];
    }
    public withTaskName(taskName: string): StarRocksReplicationInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withStatus(status: StarRocksReplicationInfoStatusEnum | string): StarRocksReplicationInfo {
        this['status'] = status;
        return this;
    }
    public withStage(stage: StarRocksReplicationInfoStageEnum | string): StarRocksReplicationInfo {
        this['stage'] = stage;
        return this;
    }
    public withPercentage(percentage: string): StarRocksReplicationInfo {
        this['percentage'] = percentage;
        return this;
    }
    public withCatchupStage(catchupStage: StarRocksReplicationInfoCatchupStageEnum | string): StarRocksReplicationInfo {
        this['catchup_stage'] = catchupStage;
        return this;
    }
    public set catchupStage(catchupStage: StarRocksReplicationInfoCatchupStageEnum | string  | undefined) {
        this['catchup_stage'] = catchupStage;
    }
    public get catchupStage(): StarRocksReplicationInfoCatchupStageEnum | string | undefined {
        return this['catchup_stage'];
    }
    public withCatchupPercentage(catchupPercentage: string): StarRocksReplicationInfo {
        this['catchup_percentage'] = catchupPercentage;
        return this;
    }
    public set catchupPercentage(catchupPercentage: string  | undefined) {
        this['catchup_percentage'] = catchupPercentage;
    }
    public get catchupPercentage(): string | undefined {
        return this['catchup_percentage'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StarRocksReplicationInfoStatusEnum {
    YES = 'Yes',
    NO = 'No'
}
/**
    * @export
    * @enum {string}
    */
export enum StarRocksReplicationInfoStageEnum {
    WAIT = 'wait',
    INCREMENTAL = 'incremental',
    FULL = 'full',
    CANCELLED = 'cancelled',
    PAUSED = 'paused'
}
/**
    * @export
    * @enum {string}
    */
export enum StarRocksReplicationInfoCatchupStageEnum {
    WAIT = 'wait',
    INCREMENTAL = 'incremental',
    FULL = 'full',
    CANCELLED = 'cancelled',
    PAUSED = 'paused'
}
