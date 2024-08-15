import { CdmClusterDatastore } from './CdmClusterDatastore';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatastoresResponse extends SdkResponse {
    public datastores?: Array<CdmClusterDatastore>;
    public constructor() { 
        super();
    }
    public withDatastores(datastores: Array<CdmClusterDatastore>): ShowDatastoresResponse {
        this['datastores'] = datastores;
        return this;
    }
}