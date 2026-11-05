

export class ModifySupabaseApplicationPasswordRequestBody {
    private 'application_password'?: string;
    private 'instance_password'?: string;
    public constructor() { 
    }
    public withApplicationPassword(applicationPassword: string): ModifySupabaseApplicationPasswordRequestBody {
        this['application_password'] = applicationPassword;
        return this;
    }
    public set applicationPassword(applicationPassword: string  | undefined) {
        this['application_password'] = applicationPassword;
    }
    public get applicationPassword(): string | undefined {
        return this['application_password'];
    }
    public withInstancePassword(instancePassword: string): ModifySupabaseApplicationPasswordRequestBody {
        this['instance_password'] = instancePassword;
        return this;
    }
    public set instancePassword(instancePassword: string  | undefined) {
        this['instance_password'] = instancePassword;
    }
    public get instancePassword(): string | undefined {
        return this['instance_password'];
    }
}