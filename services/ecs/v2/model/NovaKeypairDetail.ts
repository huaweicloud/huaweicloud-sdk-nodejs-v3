

export class NovaKeypairDetail {
    private 'public_key'?: string;
    public name?: string;
    public fingerprint?: string;
    private 'created_at'?: Date;
    public deleted?: boolean;
    private 'deleted_at'?: Date;
    public id?: number;
    private 'updated_at'?: Date;
    private 'user_id'?: string;
    public type?: string;
    public constructor(publicKey?: string, name?: string, fingerprint?: string, createdAt?: Date, deleted?: boolean, deletedAt?: Date, id?: number, updatedAt?: Date, userId?: string) { 
        this['public_key'] = publicKey;
        this['name'] = name;
        this['fingerprint'] = fingerprint;
        this['created_at'] = createdAt;
        this['deleted'] = deleted;
        this['deleted_at'] = deletedAt;
        this['id'] = id;
        this['updated_at'] = updatedAt;
        this['user_id'] = userId;
    }
    public withPublicKey(publicKey: string): NovaKeypairDetail {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withName(name: string): NovaKeypairDetail {
        this['name'] = name;
        return this;
    }
    public withFingerprint(fingerprint: string): NovaKeypairDetail {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withCreatedAt(createdAt: Date): NovaKeypairDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withDeleted(deleted: boolean): NovaKeypairDetail {
        this['deleted'] = deleted;
        return this;
    }
    public withDeletedAt(deletedAt: Date): NovaKeypairDetail {
        this['deleted_at'] = deletedAt;
        return this;
    }
    public set deletedAt(deletedAt: Date  | undefined) {
        this['deleted_at'] = deletedAt;
    }
    public get deletedAt(): Date | undefined {
        return this['deleted_at'];
    }
    public withId(id: number): NovaKeypairDetail {
        this['id'] = id;
        return this;
    }
    public withUpdatedAt(updatedAt: Date): NovaKeypairDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withUserId(userId: string): NovaKeypairDetail {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withType(type: string): NovaKeypairDetail {
        this['type'] = type;
        return this;
    }
}