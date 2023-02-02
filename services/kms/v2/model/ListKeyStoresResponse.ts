import { KeystoreDetails } from './KeystoreDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeyStoresResponse extends SdkResponse {
    public total?: number;
    public keystores?: Array<KeystoreDetails>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListKeyStoresResponse {
        this['total'] = total;
        return this;
    }
    public withKeystores(keystores: Array<KeystoreDetails>): ListKeyStoresResponse {
        this['keystores'] = keystores;
        return this;
    }
}