

export class KeyStoreStateInfo {
    private 'keystore_id'?: string | undefined;
    private 'keystore_state'?: string | undefined;
    public constructor() { 
    }
    public withKeystoreId(keystoreId: string): KeyStoreStateInfo {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId() {
        return this['keystore_id'];
    }
    public withKeystoreState(keystoreState: string): KeyStoreStateInfo {
        this['keystore_state'] = keystoreState;
        return this;
    }
    public set keystoreState(keystoreState: string | undefined) {
        this['keystore_state'] = keystoreState;
    }
    public get keystoreState() {
        return this['keystore_state'];
    }
}