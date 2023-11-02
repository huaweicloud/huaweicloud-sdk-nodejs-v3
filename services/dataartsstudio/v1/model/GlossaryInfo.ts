

export class GlossaryInfo {
    public name?: string;
    public description?: string;
    public guid?: string;
    private 'create_user'?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withName(name: string): GlossaryInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): GlossaryInfo {
        this['description'] = description;
        return this;
    }
    public withGuid(guid: string): GlossaryInfo {
        this['guid'] = guid;
        return this;
    }
    public withCreateUser(createUser: string): GlossaryInfo {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: number): GlossaryInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}