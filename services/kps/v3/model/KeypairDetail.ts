

export class KeypairDetail {
    public name?: string;
    public id?: number;
    public type?: KeypairDetailTypeEnum | string;
    public scope?: KeypairDetailScopeEnum | string;
    private 'public_key'?: string;
    public fingerprint?: string;
    private 'is_key_protection'?: boolean;
    public deleted?: boolean;
    public description?: string;
    private 'user_id'?: string;
    private 'create_time'?: number;
    private 'delete_time'?: number;
    private 'update_time'?: number;
    private 'frozen_state'?: number;
    private 'key_id'?: string;
    public algorithm?: string;
    public constructor() { 
    }
    public withName(name: string): KeypairDetail {
        this['name'] = name;
        return this;
    }
    public withId(id: number): KeypairDetail {
        this['id'] = id;
        return this;
    }
    public withType(type: KeypairDetailTypeEnum | string): KeypairDetail {
        this['type'] = type;
        return this;
    }
    public withScope(scope: KeypairDetailScopeEnum | string): KeypairDetail {
        this['scope'] = scope;
        return this;
    }
    public withPublicKey(publicKey: string): KeypairDetail {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withFingerprint(fingerprint: string): KeypairDetail {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withIsKeyProtection(isKeyProtection: boolean): KeypairDetail {
        this['is_key_protection'] = isKeyProtection;
        return this;
    }
    public set isKeyProtection(isKeyProtection: boolean  | undefined) {
        this['is_key_protection'] = isKeyProtection;
    }
    public get isKeyProtection(): boolean | undefined {
        return this['is_key_protection'];
    }
    public withDeleted(deleted: boolean): KeypairDetail {
        this['deleted'] = deleted;
        return this;
    }
    public withDescription(description: string): KeypairDetail {
        this['description'] = description;
        return this;
    }
    public withUserId(userId: string): KeypairDetail {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withCreateTime(createTime: number): KeypairDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDeleteTime(deleteTime: number): KeypairDetail {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withUpdateTime(updateTime: number): KeypairDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withFrozenState(frozenState: number): KeypairDetail {
        this['frozen_state'] = frozenState;
        return this;
    }
    public set frozenState(frozenState: number  | undefined) {
        this['frozen_state'] = frozenState;
    }
    public get frozenState(): number | undefined {
        return this['frozen_state'];
    }
    public withKeyId(keyId: string): KeypairDetail {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withAlgorithm(algorithm: string): KeypairDetail {
        this['algorithm'] = algorithm;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeypairDetailTypeEnum {
    SSH = 'ssh',
    X509 = 'x509'
}
/**
    * @export
    * @enum {string}
    */
export enum KeypairDetailScopeEnum {
    DOMAIN = 'domain',
    USER = 'user'
}
