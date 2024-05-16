import { SrDataStoresDatastores } from './SrDataStoresDatastores';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHtapDataStoreResponse extends SdkResponse {
    public datastores?: Array<SrDataStoresDatastores>;
    public constructor() { 
        super();
    }
    public withDatastores(datastores: Array<SrDataStoresDatastores>): ListHtapDataStoreResponse {
        this['datastores'] = datastores;
        return this;
    }
}