import { ClusterSnapshots } from './ClusterSnapshots';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterSnapshotsResponse extends SdkResponse {
    public snapshots?: Array<ClusterSnapshots>;
    private 'project_id'?: string | undefined;
    private 'cluster_id'?: string | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withSnapshots(snapshots: Array<ClusterSnapshots>): ListClusterSnapshotsResponse {
        this['snapshots'] = snapshots;
        return this;
    }
    public withProjectId(projectId: string): ListClusterSnapshotsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withClusterId(clusterId: string): ListClusterSnapshotsResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withCount(count: number): ListClusterSnapshotsResponse {
        this['count'] = count;
        return this;
    }
}