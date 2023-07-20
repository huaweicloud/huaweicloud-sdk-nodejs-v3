

export class RevokeGrantRequestBody {
    private 'key_id'?: string;
    private 'grant_id'?: string;
    public sequence?: string;
    public constructor(keyId?: string, grantId?: string) { 
        this['key_id'] = keyId;
        this['grant_id'] = grantId;
    }
    public withKeyId(keyId: string): RevokeGrantRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withGrantId(grantId: string): RevokeGrantRequestBody {
        this['grant_id'] = grantId;
        return this;
    }
    public set grantId(grantId: string  | undefined) {
        this['grant_id'] = grantId;
    }
    public get grantId(): string | undefined {
        return this['grant_id'];
    }
    public withSequence(sequence: string): RevokeGrantRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}