

export class KeyStoreStateInfo {
    private 'keystore_id'?: string;
    private 'keystore_state'?: string;
    public constructor() { 
    }
    public withKeystoreId(keystoreId: string): KeyStoreStateInfo {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withKeystoreState(keystoreState: string): KeyStoreStateInfo {
        this['keystore_state'] = keystoreState;
        return this;
    }
    public set keystoreState(keystoreState: string  | undefined) {
        this['keystore_state'] = keystoreState;
    }
    public get keystoreState(): string | undefined {
        return this['keystore_state'];
    }
}