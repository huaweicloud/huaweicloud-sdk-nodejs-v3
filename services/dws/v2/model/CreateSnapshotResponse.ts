import { SnapshotResp } from './SnapshotResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSnapshotResponse extends SdkResponse {
    public snapshot?: SnapshotResp;
    public constructor() { 
        super();
    }
    public withSnapshot(snapshot: SnapshotResp): CreateSnapshotResponse {
        this['snapshot'] = snapshot;
        return this;
    }
}