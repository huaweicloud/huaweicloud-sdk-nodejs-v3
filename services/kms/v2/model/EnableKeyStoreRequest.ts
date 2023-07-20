

export class EnableKeyStoreRequest {
    private 'keystore_id'?: string;
    public constructor(keystoreId?: string) { 
        this['keystore_id'] = keystoreId;
    }
    public withKeystoreId(keystoreId: string): EnableKeyStoreRequest {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
}