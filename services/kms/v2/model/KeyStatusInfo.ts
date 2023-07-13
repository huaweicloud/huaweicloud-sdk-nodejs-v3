

export class KeyStatusInfo {
    private 'key_id'?: string | undefined;
    private 'key_state'?: string | undefined;
    public constructor() { 
    }
    public withKeyId(keyId: string): KeyStatusInfo {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withKeyState(keyState: string): KeyStatusInfo {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: string | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState() {
        return this['key_state'];
    }
}