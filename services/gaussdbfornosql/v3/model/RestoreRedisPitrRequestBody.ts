

export class RestoreRedisPitrRequestBody {
    private 'restore_time'?: string;
    public constructor(restoreTime?: string) { 
        this['restore_time'] = restoreTime;
    }
    public withRestoreTime(restoreTime: string): RestoreRedisPitrRequestBody {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
}