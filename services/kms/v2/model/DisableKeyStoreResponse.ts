import { KeyStoreStateInfo } from './KeyStoreStateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableKeyStoreResponse extends SdkResponse {
    public keystore?: KeyStoreStateInfo;
    public constructor() { 
        super();
    }
    public withKeystore(keystore: KeyStoreStateInfo): DisableKeyStoreResponse {
        this['keystore'] = keystore;
        return this;
    }
}