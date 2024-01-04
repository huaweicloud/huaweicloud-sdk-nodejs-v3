import { SnapshotTask } from './SnapshotTask';
import { SnapshotTaskMetadata } from './SnapshotTaskMetadata';
import { SnapshotTaskStatus } from './SnapshotTaskStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterMasterSnapshotTasksResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: SnapshotTaskMetadata;
    public items?: Array<SnapshotTask>;
    public status?: SnapshotTaskStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListClusterMasterSnapshotTasksResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListClusterMasterSnapshotTasksResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: SnapshotTaskMetadata): ListClusterMasterSnapshotTasksResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<SnapshotTask>): ListClusterMasterSnapshotTasksResponse {
        this['items'] = items;
        return this;
    }
    public withStatus(status: SnapshotTaskStatus): ListClusterMasterSnapshotTasksResponse {
        this['status'] = status;
        return this;
    }
}