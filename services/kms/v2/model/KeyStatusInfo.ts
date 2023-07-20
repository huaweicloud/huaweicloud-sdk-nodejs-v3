

export class KeyStatusInfo {
    private 'key_id'?: string;
    private 'key_state'?: string;
    public constructor() { 
    }
    public withKeyId(keyId: string): KeyStatusInfo {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeyState(keyState: string): KeyStatusInfo {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: string  | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState(): string | undefined {
        return this['key_state'];
    }
}