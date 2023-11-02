

export class CrossRegionSnapshotConfig {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'source_region'?: string;
    private 'source_project_id'?: string;
    private 'destination_region'?: string;
    private 'destination_project_id'?: string;
    public status?: boolean;
    private 'back_keep_day'?: number;
    private 'total_size'?: number;
    public constructor() { 
    }
    public withClusterId(clusterId: string): CrossRegionSnapshotConfig {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): CrossRegionSnapshotConfig {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withSourceRegion(sourceRegion: string): CrossRegionSnapshotConfig {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string  | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion(): string | undefined {
        return this['source_region'];
    }
    public withSourceProjectId(sourceProjectId: string): CrossRegionSnapshotConfig {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): string | undefined {
        return this['source_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): CrossRegionSnapshotConfig {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationProjectId(destinationProjectId: string): CrossRegionSnapshotConfig {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withStatus(status: boolean): CrossRegionSnapshotConfig {
        this['status'] = status;
        return this;
    }
    public withBackKeepDay(backKeepDay: number): CrossRegionSnapshotConfig {
        this['back_keep_day'] = backKeepDay;
        return this;
    }
    public set backKeepDay(backKeepDay: number  | undefined) {
        this['back_keep_day'] = backKeepDay;
    }
    public get backKeepDay(): number | undefined {
        return this['back_keep_day'];
    }
    public withTotalSize(totalSize: number): CrossRegionSnapshotConfig {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
}