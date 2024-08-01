

export class UnusedIamUserAccessKeyDetails {
    private 'access_key_id'?: string;
    private 'last_accessed'?: Date;
    public constructor(accessKeyId?: string) { 
        this['access_key_id'] = accessKeyId;
    }
    public withAccessKeyId(accessKeyId: string): UnusedIamUserAccessKeyDetails {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withLastAccessed(lastAccessed: Date): UnusedIamUserAccessKeyDetails {
        this['last_accessed'] = lastAccessed;
        return this;
    }
    public set lastAccessed(lastAccessed: Date  | undefined) {
        this['last_accessed'] = lastAccessed;
    }
    public get lastAccessed(): Date | undefined {
        return this['last_accessed'];
    }
}