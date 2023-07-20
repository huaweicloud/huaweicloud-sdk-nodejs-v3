import { DatastoresResult } from './DatastoresResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussDbDatastoresResponse extends SdkResponse {
    public datastores?: Array<DatastoresResult>;
    public constructor() { 
        super();
    }
    public withDatastores(datastores: Array<DatastoresResult>): ListGaussDbDatastoresResponse {
        this['datastores'] = datastores;
        return this;
    }
}