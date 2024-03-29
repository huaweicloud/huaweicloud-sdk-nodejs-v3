

export class LoginTokenSecurityToken {
    public access?: string;
    public secret?: string;
    public id?: string;
    private 'duration_seconds'?: number;
    public constructor(access?: string, secret?: string, id?: string) { 
        this['access'] = access;
        this['secret'] = secret;
        this['id'] = id;
    }
    public withAccess(access: string): LoginTokenSecurityToken {
        this['access'] = access;
        return this;
    }
    public withSecret(secret: string): LoginTokenSecurityToken {
        this['secret'] = secret;
        return this;
    }
    public withId(id: string): LoginTokenSecurityToken {
        this['id'] = id;
        return this;
    }
    public withDurationSeconds(durationSeconds: number): LoginTokenSecurityToken {
        this['duration_seconds'] = durationSeconds;
        return this;
    }
    public set durationSeconds(durationSeconds: number  | undefined) {
        this['duration_seconds'] = durationSeconds;
    }
    public get durationSeconds(): number | undefined {
        return this['duration_seconds'];
    }
}