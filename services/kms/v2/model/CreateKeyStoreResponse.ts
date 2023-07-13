import { KeystoreInfo } from './KeystoreInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKeyStoreResponse extends SdkResponse {
    public keystore?: KeystoreInfo;
    public constructor() { 
        super();
    }
    public withKeystore(keystore: KeystoreInfo): CreateKeyStoreResponse {
        this['keystore'] = keystore;
        return this;
    }
}