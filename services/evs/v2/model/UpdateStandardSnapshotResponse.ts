import { SnapshotDetailV5 } from './SnapshotDetailV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStandardSnapshotResponse extends SdkResponse {
    public snapshot?: SnapshotDetailV5;
    public constructor() { 
        super();
    }
    public withSnapshot(snapshot: SnapshotDetailV5): UpdateStandardSnapshotResponse {
        this['snapshot'] = snapshot;
        return this;
    }
}