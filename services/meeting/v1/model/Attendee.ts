

export class Attendee {
    public userUUID?: string;
    public accountId?: string;
    public name?: string;
    public role?: number;
    public phone?: string;
    public phone2?: string;
    public phone3?: string;
    public email?: string;
    public sms?: string;
    public type?: string;
    public deptUUID?: string;
    public deptName?: string;
    public constructor(name?: string, phone?: string, type?: string) { 
        this['name'] = name;
        this['phone'] = phone;
        this['type'] = type;
    }
    public withUserUUID(userUUID: string): Attendee {
        this['userUUID'] = userUUID;
        return this;
    }
    public withAccountId(accountId: string): Attendee {
        this['accountId'] = accountId;
        return this;
    }
    public withName(name: string): Attendee {
        this['name'] = name;
        return this;
    }
    public withRole(role: number): Attendee {
        this['role'] = role;
        return this;
    }
    public withPhone(phone: string): Attendee {
        this['phone'] = phone;
        return this;
    }
    public withPhone2(phone2: string): Attendee {
        this['phone2'] = phone2;
        return this;
    }
    public withPhone3(phone3: string): Attendee {
        this['phone3'] = phone3;
        return this;
    }
    public withEmail(email: string): Attendee {
        this['email'] = email;
        return this;
    }
    public withSms(sms: string): Attendee {
        this['sms'] = sms;
        return this;
    }
    public withType(type: string): Attendee {
        this['type'] = type;
        return this;
    }
    public withDeptUUID(deptUUID: string): Attendee {
        this['deptUUID'] = deptUUID;
        return this;
    }
    public withDeptName(deptName: string): Attendee {
        this['deptName'] = deptName;
        return this;
    }
}