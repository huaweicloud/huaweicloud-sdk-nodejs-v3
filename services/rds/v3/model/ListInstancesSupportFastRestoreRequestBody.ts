

export class ListInstancesSupportFastRestoreRequestBody {
    private 'restore_time'?: string;
    private 'instance_ids'?: Array<string>;
    public constructor(restoreTime?: string, instanceIds?: Array<string>) { 
        this['restore_time'] = restoreTime;
        this['instance_ids'] = instanceIds;
    }
    public withRestoreTime(restoreTime: string): ListInstancesSupportFastRestoreRequestBody {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withInstanceIds(instanceIds: Array<string>): ListInstancesSupportFastRestoreRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
}