

export class EngineRbacPwd {
    public pwd?: string;
    public constructor() { 
    }
    public withPwd(pwd: string): EngineRbacPwd {
        this['pwd'] = pwd;
        return this;
    }
}