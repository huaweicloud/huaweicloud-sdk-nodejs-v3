

export class SubTrainingJobInfoDto {
    private 'job_id'?: string;
    private 'sub_job_type'?: string;
    private 'heart_beat_id'?: string;
    public state?: string;
    private 'create_time'?: number;
    private 'last_update_time'?: number;
    public constructor() { 
    }
    public withJobId(jobId: string): SubTrainingJobInfoDto {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withSubJobType(subJobType: string): SubTrainingJobInfoDto {
        this['sub_job_type'] = subJobType;
        return this;
    }
    public set subJobType(subJobType: string  | undefined) {
        this['sub_job_type'] = subJobType;
    }
    public get subJobType(): string | undefined {
        return this['sub_job_type'];
    }
    public withHeartBeatId(heartBeatId: string): SubTrainingJobInfoDto {
        this['heart_beat_id'] = heartBeatId;
        return this;
    }
    public set heartBeatId(heartBeatId: string  | undefined) {
        this['heart_beat_id'] = heartBeatId;
    }
    public get heartBeatId(): string | undefined {
        return this['heart_beat_id'];
    }
    public withState(state: string): SubTrainingJobInfoDto {
        this['state'] = state;
        return this;
    }
    public withCreateTime(createTime: number): SubTrainingJobInfoDto {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastUpdateTime(lastUpdateTime: number): SubTrainingJobInfoDto {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
}