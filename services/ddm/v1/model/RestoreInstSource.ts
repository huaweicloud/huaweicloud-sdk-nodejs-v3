

export class RestoreInstSource {
    private 'restore_time'?: number;
    public constructor(restoreTime?: number) { 
        this['restore_time'] = restoreTime;
    }
    public withRestoreTime(restoreTime: number): RestoreInstSource {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
}