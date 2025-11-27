

export class BanUrlList {
    public type?: string;
    public url?: string;
    private 'create_time'?: number;
    private 'modify_time'?: number;
    public constructor() { 
    }
    public withType(type: string): BanUrlList {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): BanUrlList {
        this['url'] = url;
        return this;
    }
    public withCreateTime(createTime: number): BanUrlList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: number): BanUrlList {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): number | undefined {
        return this['modify_time'];
    }
}