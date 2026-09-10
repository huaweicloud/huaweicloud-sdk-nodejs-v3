

export class ListShareAppsSnapshotRequest {
    private 'server_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'package_name'?: string;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ListShareAppsSnapshotRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withLimit(limit: number): ListShareAppsSnapshotRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListShareAppsSnapshotRequest {
        this['marker'] = marker;
        return this;
    }
    public withPackageName(packageName: string): ListShareAppsSnapshotRequest {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
}