

export class InlineResponse200PrivateKeys {
    private 'key_id'?: string;
    public timestamp?: Date;
    public constructor(keyId?: string, timestamp?: Date) { 
        this['key_id'] = keyId;
        this['timestamp'] = timestamp;
    }
    public withKeyId(keyId: string): InlineResponse200PrivateKeys {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withTimestamp(timestamp: Date): InlineResponse200PrivateKeys {
        this['timestamp'] = timestamp;
        return this;
    }
}