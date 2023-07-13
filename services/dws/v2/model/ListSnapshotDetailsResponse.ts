import { SnapshotDetail } from './SnapshotDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotDetailsResponse extends SdkResponse {
    public snapshot?: SnapshotDetail;
    public constructor() { 
        super();
    }
    public withSnapshot(snapshot: SnapshotDetail): ListSnapshotDetailsResponse {
        this['snapshot'] = snapshot;
        return this;
    }
}