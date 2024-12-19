import { DatastoresResult } from './DatastoresResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatastoresDetailsResponse extends SdkResponse {
    public datastores?: Array<DatastoresResult>;
    public constructor() { 
        super();
    }
    public withDatastores(datastores: Array<DatastoresResult>): ListDatastoresDetailsResponse {
        this['datastores'] = datastores;
        return this;
    }
}