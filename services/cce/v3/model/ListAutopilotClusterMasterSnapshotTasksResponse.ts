import { SnapshotTask } from './SnapshotTask';
import { SnapshotTaskMetadata } from './SnapshotTaskMetadata';
import { SnapshotTaskStatus } from './SnapshotTaskStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotClusterMasterSnapshotTasksResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: SnapshotTaskMetadata;
    public items?: Array<SnapshotTask>;
    public status?: SnapshotTaskStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListAutopilotClusterMasterSnapshotTasksResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListAutopilotClusterMasterSnapshotTasksResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: SnapshotTaskMetadata): ListAutopilotClusterMasterSnapshotTasksResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<SnapshotTask>): ListAutopilotClusterMasterSnapshotTasksResponse {
        this['items'] = items;
        return this;
    }
    public withStatus(status: SnapshotTaskStatus): ListAutopilotClusterMasterSnapshotTasksResponse {
        this['status'] = status;
        return this;
    }
}