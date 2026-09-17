

export class DataDiskCleanUpOption {
    public enable?: boolean;
    public onFailure?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): DataDiskCleanUpOption {
        this['enable'] = enable;
        return this;
    }
    public withOnFailure(onFailure: string): DataDiskCleanUpOption {
        this['onFailure'] = onFailure;
        return this;
    }
}