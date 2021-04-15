import { SnapshotDetails } from './SnapshotDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSnapshotResponse extends SdkResponse {
    public snapshot?: SnapshotDetails;
    public constructor() { 
        super();
    }
    public withSnapshot(snapshot: SnapshotDetails): ShowSnapshotResponse {
        this['snapshot'] = snapshot;
        return this;
    }
}