import { SnapshotCluserResponseMetadata } from './SnapshotCluserResponseMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterMasterSnapshotResponse extends SdkResponse {
    public uid?: string;
    public metadata?: SnapshotCluserResponseMetadata;
    public constructor() { 
        super();
    }
    public withUid(uid: string): CreateClusterMasterSnapshotResponse {
        this['uid'] = uid;
        return this;
    }
    public withMetadata(metadata: SnapshotCluserResponseMetadata): CreateClusterMasterSnapshotResponse {
        this['metadata'] = metadata;
        return this;
    }
}