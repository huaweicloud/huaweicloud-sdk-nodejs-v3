

export class AccessKeyLastUsed {
    private 'last_used_at'?: Date;
    public constructor() { 
    }
    public withLastUsedAt(lastUsedAt: Date): AccessKeyLastUsed {
        this['last_used_at'] = lastUsedAt;
        return this;
    }
    public set lastUsedAt(lastUsedAt: Date  | undefined) {
        this['last_used_at'] = lastUsedAt;
    }
    public get lastUsedAt(): Date | undefined {
        return this['last_used_at'];
    }
}