

export class PartAttendee {
    public name?: string;
    public phone?: string;
    public phone2?: string;
    public phone3?: string;
    public type?: string;
    public role?: number;
    public isMute?: number;
    public constructor() { 
    }
    public withName(name: string): PartAttendee {
        this['name'] = name;
        return this;
    }
    public withPhone(phone: string): PartAttendee {
        this['phone'] = phone;
        return this;
    }
    public withPhone2(phone2: string): PartAttendee {
        this['phone2'] = phone2;
        return this;
    }
    public withPhone3(phone3: string): PartAttendee {
        this['phone3'] = phone3;
        return this;
    }
    public withType(type: string): PartAttendee {
        this['type'] = type;
        return this;
    }
    public withRole(role: number): PartAttendee {
        this['role'] = role;
        return this;
    }
    public withIsMute(isMute: number): PartAttendee {
        this['isMute'] = isMute;
        return this;
    }
}