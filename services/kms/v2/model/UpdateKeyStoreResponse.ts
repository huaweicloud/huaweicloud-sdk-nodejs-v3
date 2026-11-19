import { KeyStoreStateInfo } from './KeyStoreStateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKeyStoreResponse extends SdkResponse {
    public keystore?: KeyStoreStateInfo;
    public constructor() { 
        super();
    }
    public withKeystore(keystore: KeyStoreStateInfo): UpdateKeyStoreResponse {
        this['keystore'] = keystore;
        return this;
    }
}