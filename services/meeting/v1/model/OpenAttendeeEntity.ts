

export class OpenAttendeeEntity {
    public appId?: string;
    public userAccount?: string;
    public userName?: string;
    public deptName?: string;
    public phone?: string;
    public email?: string;
    public sms?: string;
    public isHardTerminal?: boolean;
    public constructor(appId?: string) { 
        this['appId'] = appId;
    }
    public withAppId(appId: string): OpenAttendeeEntity {
        this['appId'] = appId;
        return this;
    }
    public withUserAccount(userAccount: string): OpenAttendeeEntity {
        this['userAccount'] = userAccount;
        return this;
    }
    public withUserName(userName: string): OpenAttendeeEntity {
        this['userName'] = userName;
        return this;
    }
    public withDeptName(deptName: string): OpenAttendeeEntity {
        this['deptName'] = deptName;
        return this;
    }
    public withPhone(phone: string): OpenAttendeeEntity {
        this['phone'] = phone;
        return this;
    }
    public withEmail(email: string): OpenAttendeeEntity {
        this['email'] = email;
        return this;
    }
    public withSms(sms: string): OpenAttendeeEntity {
        this['sms'] = sms;
        return this;
    }
    public withIsHardTerminal(isHardTerminal: boolean): OpenAttendeeEntity {
        this['isHardTerminal'] = isHardTerminal;
        return this;
    }
}