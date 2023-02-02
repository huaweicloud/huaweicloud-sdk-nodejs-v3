

export class ScheduleKeyDeletionRequestBody {
    private 'key_id': string | undefined;
    private 'pending_days': string | undefined;
    public sequence?: string;
    public constructor(keyId?: any, pendingDays?: any) { 
        this['key_id'] = keyId;
        this['pending_days'] = pendingDays;
    }
    public withKeyId(keyId: string): ScheduleKeyDeletionRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withPendingDays(pendingDays: string): ScheduleKeyDeletionRequestBody {
        this['pending_days'] = pendingDays;
        return this;
    }
    public set pendingDays(pendingDays: string | undefined) {
        this['pending_days'] = pendingDays;
    }
    public get pendingDays() {
        return this['pending_days'];
    }
    public withSequence(sequence: string): ScheduleKeyDeletionRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}