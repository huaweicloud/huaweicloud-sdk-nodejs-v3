import { UpdateKeyStoreRequestBody } from './UpdateKeyStoreRequestBody';


export class UpdateKeyStoreRequest {
    private 'keystore_id'?: string;
    public body?: UpdateKeyStoreRequestBody;
    public constructor(keystoreId?: string) { 
        this['keystore_id'] = keystoreId;
    }
    public withKeystoreId(keystoreId: string): UpdateKeyStoreRequest {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withBody(body: UpdateKeyStoreRequestBody): UpdateKeyStoreRequest {
        this['body'] = body;
        return this;
    }
}