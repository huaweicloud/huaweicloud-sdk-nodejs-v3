

export class KeystoneUserResultExtra {
    public description?: string;
    private 'pwd_status'?: boolean | undefined;
    private 'last_project_id'?: string | undefined;
    public constructor() { 
    }
    public withDescription(description: string): KeystoneUserResultExtra {
        this['description'] = description;
        return this;
    }
    public withPwdStatus(pwdStatus: boolean): KeystoneUserResultExtra {
        this['pwd_status'] = pwdStatus;
        return this;
    }
    public set pwdStatus(pwdStatus: boolean | undefined) {
        this['pwd_status'] = pwdStatus;
    }
    public get pwdStatus() {
        return this['pwd_status'];
    }
    public withLastProjectId(lastProjectId: string): KeystoneUserResultExtra {
        this['last_project_id'] = lastProjectId;
        return this;
    }
    public set lastProjectId(lastProjectId: string | undefined) {
        this['last_project_id'] = lastProjectId;
    }
    public get lastProjectId() {
        return this['last_project_id'];
    }
}