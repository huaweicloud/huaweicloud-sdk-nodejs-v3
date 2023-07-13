

export class ShowKeyStoreRequest {
    private 'keystore_id': string | undefined;
    public constructor(keystoreId?: any) { 
        this['keystore_id'] = keystoreId;
    }
    public withKeystoreId(keystoreId: string): ShowKeyStoreRequest {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId() {
        return this['keystore_id'];
    }
}