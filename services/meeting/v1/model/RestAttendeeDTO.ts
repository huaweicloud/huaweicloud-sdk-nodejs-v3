

export class RestAttendeeDTO {
    public userUUID?: string;
    public accountId?: string;
    public name?: string;
    public role?: number;
    public phone?: string;
    public phone2?: string;
    public phone3?: string;
    public email?: string;
    public sms?: string;
    public isMute?: number;
    public isAutoInvite?: number;
    public type?: string;
    public address?: string;
    public deptUUID?: string;
    public deptName?: string;
    public appId?: string;
    public uniqueType?: number;
    public constructor() { 
    }
    public withUserUUID(userUUID: string): RestAttendeeDTO {
        this['userUUID'] = userUUID;
        return this;
    }
    public withAccountId(accountId: string): RestAttendeeDTO {
        this['accountId'] = accountId;
        return this;
    }
    public withName(name: string): RestAttendeeDTO {
        this['name'] = name;
        return this;
    }
    public withRole(role: number): RestAttendeeDTO {
        this['role'] = role;
        return this;
    }
    public withPhone(phone: string): RestAttendeeDTO {
        this['phone'] = phone;
        return this;
    }
    public withPhone2(phone2: string): RestAttendeeDTO {
        this['phone2'] = phone2;
        return this;
    }
    public withPhone3(phone3: string): RestAttendeeDTO {
        this['phone3'] = phone3;
        return this;
    }
    public withEmail(email: string): RestAttendeeDTO {
        this['email'] = email;
        return this;
    }
    public withSms(sms: string): RestAttendeeDTO {
        this['sms'] = sms;
        return this;
    }
    public withIsMute(isMute: number): RestAttendeeDTO {
        this['isMute'] = isMute;
        return this;
    }
    public withIsAutoInvite(isAutoInvite: number): RestAttendeeDTO {
        this['isAutoInvite'] = isAutoInvite;
        return this;
    }
    public withType(type: string): RestAttendeeDTO {
        this['type'] = type;
        return this;
    }
    public withAddress(address: string): RestAttendeeDTO {
        this['address'] = address;
        return this;
    }
    public withDeptUUID(deptUUID: string): RestAttendeeDTO {
        this['deptUUID'] = deptUUID;
        return this;
    }
    public withDeptName(deptName: string): RestAttendeeDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withAppId(appId: string): RestAttendeeDTO {
        this['appId'] = appId;
        return this;
    }
    public withUniqueType(uniqueType: number): RestAttendeeDTO {
        this['uniqueType'] = uniqueType;
        return this;
    }
}