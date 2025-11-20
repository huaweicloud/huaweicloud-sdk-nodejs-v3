

export class IamBpRootUserHasAccessKeyDetails {
    private 'access_key_id'?: string;
    private 'last_accessed'?: Date;
    private 'created_at'?: Date;
    public constructor(accessKeyId?: string, createdAt?: Date) { 
        this['access_key_id'] = accessKeyId;
        this['created_at'] = createdAt;
    }
    public withAccessKeyId(accessKeyId: string): IamBpRootUserHasAccessKeyDetails {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withLastAccessed(lastAccessed: Date): IamBpRootUserHasAccessKeyDetails {
        this['last_accessed'] = lastAccessed;
        return this;
    }
    public set lastAccessed(lastAccessed: Date  | undefined) {
        this['last_accessed'] = lastAccessed;
    }
    public get lastAccessed(): Date | undefined {
        return this['last_accessed'];
    }
    public withCreatedAt(createdAt: Date): IamBpRootUserHasAccessKeyDetails {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}