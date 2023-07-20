import { LDatastore } from './LDatastore';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatastoresResponse extends SdkResponse {
    public dataStores?: Array<LDatastore>;
    public constructor() { 
        super();
    }
    public withDataStores(dataStores: Array<LDatastore>): ListDatastoresResponse {
        this['dataStores'] = dataStores;
        return this;
    }
}