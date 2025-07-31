

export class ShowBaselineDirectoryInfoDataList {
    public name?: string;
    public enable?: boolean;
    public constructor() { 
    }
    public withName(name: string): ShowBaselineDirectoryInfoDataList {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): ShowBaselineDirectoryInfoDataList {
        this['enable'] = enable;
        return this;
    }
}