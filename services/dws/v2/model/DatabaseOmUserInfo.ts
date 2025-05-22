

export class DatabaseOmUserInfo {
    private 'om_user_status'?: string;
    private 'om_user_expires_time'?: number;
    public constructor() { 
    }
    public withOmUserStatus(omUserStatus: string): DatabaseOmUserInfo {
        this['om_user_status'] = omUserStatus;
        return this;
    }
    public set omUserStatus(omUserStatus: string  | undefined) {
        this['om_user_status'] = omUserStatus;
    }
    public get omUserStatus(): string | undefined {
        return this['om_user_status'];
    }
    public withOmUserExpiresTime(omUserExpiresTime: number): DatabaseOmUserInfo {
        this['om_user_expires_time'] = omUserExpiresTime;
        return this;
    }
    public set omUserExpiresTime(omUserExpiresTime: number  | undefined) {
        this['om_user_expires_time'] = omUserExpiresTime;
    }
    public get omUserExpiresTime(): number | undefined {
        return this['om_user_expires_time'];
    }
}