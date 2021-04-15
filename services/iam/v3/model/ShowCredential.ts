

export class ShowCredential {
    private 'user_id': string | undefined;
    public access: string;
    public status: string;
    private 'create_time': string | undefined;
    private 'last_use_time': string | undefined;
    public description: string;
    public constructor(userId?: any, access?: any, status?: any, createTime?: any, lastUseTime?: any, description?: any) { 
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
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
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
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withLastUseTime(lastUseTime: string): ShowCredential {
        this['last_use_time'] = lastUseTime;
        return this;
    }
    public set lastUseTime(lastUseTime: string | undefined) {
        this['last_use_time'] = lastUseTime;
    }
    public get lastUseTime() {
        return this['last_use_time'];
    }
    public withDescription(description: string): ShowCredential {
        this['description'] = description;
        return this;
    }
}