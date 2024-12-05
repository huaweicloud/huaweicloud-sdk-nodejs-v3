

export class OnlineAttendeeRecordInfo {
    private 'participant_id'?: string;
    public name?: string;
    private 'call_number'?: string;
    public role?: number;
    private 'third_account'?: string;
    public account?: string;
    private 'user_id'?: string;
    public constructor() { 
    }
    public withParticipantId(participantId: string): OnlineAttendeeRecordInfo {
        this['participant_id'] = participantId;
        return this;
    }
    public set participantId(participantId: string  | undefined) {
        this['participant_id'] = participantId;
    }
    public get participantId(): string | undefined {
        return this['participant_id'];
    }
    public withName(name: string): OnlineAttendeeRecordInfo {
        this['name'] = name;
        return this;
    }
    public withCallNumber(callNumber: string): OnlineAttendeeRecordInfo {
        this['call_number'] = callNumber;
        return this;
    }
    public set callNumber(callNumber: string  | undefined) {
        this['call_number'] = callNumber;
    }
    public get callNumber(): string | undefined {
        return this['call_number'];
    }
    public withRole(role: number): OnlineAttendeeRecordInfo {
        this['role'] = role;
        return this;
    }
    public withThirdAccount(thirdAccount: string): OnlineAttendeeRecordInfo {
        this['third_account'] = thirdAccount;
        return this;
    }
    public set thirdAccount(thirdAccount: string  | undefined) {
        this['third_account'] = thirdAccount;
    }
    public get thirdAccount(): string | undefined {
        return this['third_account'];
    }
    public withAccount(account: string): OnlineAttendeeRecordInfo {
        this['account'] = account;
        return this;
    }
    public withUserId(userId: string): OnlineAttendeeRecordInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}