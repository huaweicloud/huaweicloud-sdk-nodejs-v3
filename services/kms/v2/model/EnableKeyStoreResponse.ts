import { KeyStoreStateInfo } from './KeyStoreStateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableKeyStoreResponse extends SdkResponse {
    public keystore?: KeyStoreStateInfo;
    public constructor() { 
        super();
    }
    public withKeystore(keystore: KeyStoreStateInfo): EnableKeyStoreResponse {
        this['keystore'] = keystore;
        return this;
    }
}