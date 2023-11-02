

export class AddSnapshotCrossRegionPolicyRequestBody {
    private 'cluster_id'?: string;
    private 'destination_project_id'?: string;
    private 'destination_region'?: string;
    public status?: boolean;
    private 'back_keep_day'?: number;
    public constructor(clusterId?: string, destinationProjectId?: string, destinationRegion?: string, status?: boolean, backKeepDay?: number) { 
        this['cluster_id'] = clusterId;
        this['destination_project_id'] = destinationProjectId;
        this['destination_region'] = destinationRegion;
        this['status'] = status;
        this['back_keep_day'] = backKeepDay;
    }
    public withClusterId(clusterId: string): AddSnapshotCrossRegionPolicyRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDestinationProjectId(destinationProjectId: string): AddSnapshotCrossRegionPolicyRequestBody {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): AddSnapshotCrossRegionPolicyRequestBody {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withStatus(status: boolean): AddSnapshotCrossRegionPolicyRequestBody {
        this['status'] = status;
        return this;
    }
    public withBackKeepDay(backKeepDay: number): AddSnapshotCrossRegionPolicyRequestBody {
        this['back_keep_day'] = backKeepDay;
        return this;
    }
    public set backKeepDay(backKeepDay: number  | undefined) {
        this['back_keep_day'] = backKeepDay;
    }
    public get backKeepDay(): number | undefined {
        return this['back_keep_day'];
    }
}