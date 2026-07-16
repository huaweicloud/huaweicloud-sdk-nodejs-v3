

export class ContentInfo {
    private 'version_num'?: string;
    public desc?: string;
    public constructor() { 
    }
    public withVersionNum(versionNum: string): ContentInfo {
        this['version_num'] = versionNum;
        return this;
    }
    public set versionNum(versionNum: string  | undefined) {
        this['version_num'] = versionNum;
    }
    public get versionNum(): string | undefined {
        return this['version_num'];
    }
    public withDesc(desc: string): ContentInfo {
        this['desc'] = desc;
        return this;
    }
}