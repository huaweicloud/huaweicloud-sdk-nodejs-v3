

export class ParticipantInfo {
    public participantID?: string;
    public name?: string;
    public subscriberID?: string;
    public role?: number;
    public state?: string;
    public address?: string;
    public attendeeType?: string;
    public accountId?: string;
    public phone2?: string;
    public phone3?: string;
    public email?: string;
    public sms?: string;
    public deptName?: string;
    public userUUID?: string;
    public appId?: string;
    public isAutoInvite?: number;
    public isNotOverlayPidName?: boolean;
    public constructor() { 
    }
    public withParticipantID(participantID: string): ParticipantInfo {
        this['participantID'] = participantID;
        return this;
    }
    public withName(name: string): ParticipantInfo {
        this['name'] = name;
        return this;
    }
    public withSubscriberID(subscriberID: string): ParticipantInfo {
        this['subscriberID'] = subscriberID;
        return this;
    }
    public withRole(role: number): ParticipantInfo {
        this['role'] = role;
        return this;
    }
    public withState(state: string): ParticipantInfo {
        this['state'] = state;
        return this;
    }
    public withAddress(address: string): ParticipantInfo {
        this['address'] = address;
        return this;
    }
    public withAttendeeType(attendeeType: string): ParticipantInfo {
        this['attendeeType'] = attendeeType;
        return this;
    }
    public withAccountId(accountId: string): ParticipantInfo {
        this['accountId'] = accountId;
        return this;
    }
    public withPhone2(phone2: string): ParticipantInfo {
        this['phone2'] = phone2;
        return this;
    }
    public withPhone3(phone3: string): ParticipantInfo {
        this['phone3'] = phone3;
        return this;
    }
    public withEmail(email: string): ParticipantInfo {
        this['email'] = email;
        return this;
    }
    public withSms(sms: string): ParticipantInfo {
        this['sms'] = sms;
        return this;
    }
    public withDeptName(deptName: string): ParticipantInfo {
        this['deptName'] = deptName;
        return this;
    }
    public withUserUUID(userUUID: string): ParticipantInfo {
        this['userUUID'] = userUUID;
        return this;
    }
    public withAppId(appId: string): ParticipantInfo {
        this['appId'] = appId;
        return this;
    }
    public withIsAutoInvite(isAutoInvite: number): ParticipantInfo {
        this['isAutoInvite'] = isAutoInvite;
        return this;
    }
    public withIsNotOverlayPidName(isNotOverlayPidName: boolean): ParticipantInfo {
        this['isNotOverlayPidName'] = isNotOverlayPidName;
        return this;
    }
}