import { DataStoreList } from './DataStoreList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationDatastoresResponse extends SdkResponse {
    public datastores?: Array<DataStoreList>;
    public constructor() { 
        super();
    }
    public withDatastores(datastores: Array<DataStoreList>): ListConfigurationDatastoresResponse {
        this['datastores'] = datastores;
        return this;
    }
}