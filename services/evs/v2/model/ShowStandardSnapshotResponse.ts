import { SnapshotDetailV5 } from './SnapshotDetailV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStandardSnapshotResponse extends SdkResponse {
    public snapshot?: SnapshotDetailV5;
    public constructor() { 
        super();
    }
    public withSnapshot(snapshot: SnapshotDetailV5): ShowStandardSnapshotResponse {
        this['snapshot'] = snapshot;
        return this;
    }
}