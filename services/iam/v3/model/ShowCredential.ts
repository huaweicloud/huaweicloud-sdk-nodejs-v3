

export class ShowCredential {
    private 'user_id'?: string;
    public access?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'last_use_time'?: string;
    public description?: string;
    public constructor(userId?: string, access?: string, status?: string, createTime?: string, lastUseTime?: string, description?: string) { 
        this['user_id'] = userId;
        this['access'] = access;
        this['status'] = status;
        this['create_time'] = createTime;
        this['last_use_time'] = lastUseTime;
        this['description'] = description;
    }
    public withUserId(userId: string): ShowCredential {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withAccess(access: string): ShowCredential {
        this['access'] = access;
        return this;
    }
    public withStatus(status: string): ShowCredential {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): ShowCredential {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastUseTime(lastUseTime: string): ShowCredential {
        this['last_use_time'] = lastUseTime;
        return this;
    }
    public set lastUseTime(lastUseTime: string  | undefined) {
        this['last_use_time'] = lastUseTime;
    }
    public get lastUseTime(): string | undefined {
        return this['last_use_time'];
    }
    public withDescription(description: string): ShowCredential {
        this['description'] = description;
        return this;
    }
}