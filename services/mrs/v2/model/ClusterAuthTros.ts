

export class ClusterAuthTros {
    public enable?: boolean;
    private 'auth_type'?: number;
    private 'expire_time'?: number;
    public constructor(enable?: boolean, authType?: number) { 
        this['enable'] = enable;
        this['auth_type'] = authType;
    }
    public withEnable(enable: boolean): ClusterAuthTros {
        this['enable'] = enable;
        return this;
    }
    public withAuthType(authType: number): ClusterAuthTros {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: number  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): number | undefined {
        return this['auth_type'];
    }
    public withExpireTime(expireTime: number): ClusterAuthTros {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
}