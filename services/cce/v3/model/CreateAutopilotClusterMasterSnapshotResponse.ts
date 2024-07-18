import { SnapshotCluserResponseMetadata } from './SnapshotCluserResponseMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutopilotClusterMasterSnapshotResponse extends SdkResponse {
    public uid?: string;
    public metadata?: SnapshotCluserResponseMetadata;
    public constructor() { 
        super();
    }
    public withUid(uid: string): CreateAutopilotClusterMasterSnapshotResponse {
        this['uid'] = uid;
        return this;
    }
    public withMetadata(metadata: SnapshotCluserResponseMetadata): CreateAutopilotClusterMasterSnapshotResponse {
        this['metadata'] = metadata;
        return this;
    }
}