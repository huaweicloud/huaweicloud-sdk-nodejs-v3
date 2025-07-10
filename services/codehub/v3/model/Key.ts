

export class Key {
    private 'can_push'?: boolean;
    private 'created_at'?: string;
    public key?: string;
    private 'key_id'?: string;
    private 'key_title'?: string;
    public constructor() { 
    }
    public withCanPush(canPush: boolean): Key {
        this['can_push'] = canPush;
        return this;
    }
    public set canPush(canPush: boolean  | undefined) {
        this['can_push'] = canPush;
    }
    public get canPush(): boolean | undefined {
        return this['can_push'];
    }
    public withCreatedAt(createdAt: string): Key {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withKey(key: string): Key {
        this['key'] = key;
        return this;
    }
    public withKeyId(keyId: string): Key {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeyTitle(keyTitle: string): Key {
        this['key_title'] = keyTitle;
        return this;
    }
    public set keyTitle(keyTitle: string  | undefined) {
        this['key_title'] = keyTitle;
    }
    public get keyTitle(): string | undefined {
        return this['key_title'];
    }
}