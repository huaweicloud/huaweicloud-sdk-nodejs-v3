

export class KeypairDetail {
    public name?: string;
    public id?: number;
    public type?: KeypairDetailTypeEnum;
    public scope?: KeypairDetailScopeEnum;
    private 'public_key'?: string | undefined;
    public fingerprint?: string;
    private 'is_key_protection'?: boolean | undefined;
    public deleted?: boolean;
    public description?: string;
    private 'user_id'?: string | undefined;
    private 'create_time'?: number | undefined;
    private 'delete_time'?: number | undefined;
    private 'update_time'?: number | undefined;
    private 'frozen_state'?: number | undefined;
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
    public withType(type: KeypairDetailTypeEnum): KeypairDetail {
        this['type'] = type;
        return this;
    }
    public withScope(scope: KeypairDetailScopeEnum): KeypairDetail {
        this['scope'] = scope;
        return this;
    }
    public withPublicKey(publicKey: string): KeypairDetail {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey() {
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
    public set isKeyProtection(isKeyProtection: boolean | undefined) {
        this['is_key_protection'] = isKeyProtection;
    }
    public get isKeyProtection() {
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
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withCreateTime(createTime: number): KeypairDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withDeleteTime(deleteTime: number): KeypairDetail {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime() {
        return this['delete_time'];
    }
    public withUpdateTime(updateTime: number): KeypairDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withFrozenState(frozenState: number): KeypairDetail {
        this['frozen_state'] = frozenState;
        return this;
    }
    public set frozenState(frozenState: number | undefined) {
        this['frozen_state'] = frozenState;
    }
    public get frozenState() {
        return this['frozen_state'];
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
