

export class OpenClassification {
    public name?: string;
    public description?: string;
    private 'create_user'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public guid?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): OpenClassification {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): OpenClassification {
        this['description'] = description;
        return this;
    }
    public withCreateUser(createUser: string): OpenClassification {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: number): OpenClassification {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): OpenClassification {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): OpenClassification {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withGuid(guid: string): OpenClassification {
        this['guid'] = guid;
        return this;
    }
}