

export class UpdateJobRespJob {
    private 'update_time'?: number;
    public constructor() { 
    }
    public withUpdateTime(updateTime: number): UpdateJobRespJob {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}