

export class Sfs3Storage {
    public name?: string;
    public location?: string;
    public usage?: string;
    private 'create_time'?: Date;
    public constructor() { 
    }
    public withName(name: string): Sfs3Storage {
        this['name'] = name;
        return this;
    }
    public withLocation(location: string): Sfs3Storage {
        this['location'] = location;
        return this;
    }
    public withUsage(usage: string): Sfs3Storage {
        this['usage'] = usage;
        return this;
    }
    public withCreateTime(createTime: Date): Sfs3Storage {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}