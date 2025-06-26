

export class UploadKeystoreResult {
    private 'keystore_id'?: string;
    public constructor() { 
    }
    public withKeystoreId(keystoreId: string): UploadKeystoreResult {
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