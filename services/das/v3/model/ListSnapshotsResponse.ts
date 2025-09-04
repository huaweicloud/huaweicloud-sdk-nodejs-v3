import { QuerySnapshotsRespItems } from './QuerySnapshotsRespItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotsResponse extends SdkResponse {
    public items?: Array<QuerySnapshotsRespItems>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<QuerySnapshotsRespItems>): ListSnapshotsResponse {
        this['items'] = items;
        return this;
    }
    public withCount(count: number): ListSnapshotsResponse {
        this['count'] = count;
        return this;
    }
}