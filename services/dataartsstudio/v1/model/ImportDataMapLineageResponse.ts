import { NodeLineageGuids } from './NodeLineageGuids';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportDataMapLineageResponse extends SdkResponse {
    public guids?: Array<NodeLineageGuids>;
    public constructor() { 
        super();
    }
    public withGuids(guids: Array<NodeLineageGuids>): ImportDataMapLineageResponse {
        this['guids'] = guids;
        return this;
    }
}