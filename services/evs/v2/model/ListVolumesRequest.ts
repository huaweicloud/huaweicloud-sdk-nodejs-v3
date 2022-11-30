

export class ListVolumesRequest {
    public marker?: string;
    public name?: string;
    public limit?: number;
    private 'sort_key'?: string | undefined;
    public offset?: number;
    private 'sort_dir'?: string | undefined;
    public status?: string;
    public metadata?: string;
    private 'availability_zone'?: string | undefined;
    public multiattach?: boolean;
    private 'service_type'?: string | undefined;
    private 'dedicated_storage_id'?: string | undefined;
    private 'dedicated_storage_name'?: string | undefined;
    private 'volume_type_id'?: string | undefined;
    public id?: string;
    public ids?: string;
    private 'enterprise_project_id'?: string | undefined;
    private 'server_id'?: string | undefined;
    public constructor() { 
    }
    public withMarker(marker: string): ListVolumesRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: string): ListVolumesRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: number): ListVolumesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListVolumesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withOffset(offset: number): ListVolumesRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortDir(sortDir: string): ListVolumesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withStatus(status: string): ListVolumesRequest {
        this['status'] = status;
        return this;
    }
    public withMetadata(metadata: string): ListVolumesRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ListVolumesRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withMultiattach(multiattach: boolean): ListVolumesRequest {
        this['multiattach'] = multiattach;
        return this;
    }
    public withServiceType(serviceType: string): ListVolumesRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): ListVolumesRequest {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId() {
        return this['dedicated_storage_id'];
    }
    public withDedicatedStorageName(dedicatedStorageName: string): ListVolumesRequest {
        this['dedicated_storage_name'] = dedicatedStorageName;
        return this;
    }
    public set dedicatedStorageName(dedicatedStorageName: string | undefined) {
        this['dedicated_storage_name'] = dedicatedStorageName;
    }
    public get dedicatedStorageName() {
        return this['dedicated_storage_name'];
    }
    public withVolumeTypeId(volumeTypeId: string): ListVolumesRequest {
        this['volume_type_id'] = volumeTypeId;
        return this;
    }
    public set volumeTypeId(volumeTypeId: string | undefined) {
        this['volume_type_id'] = volumeTypeId;
    }
    public get volumeTypeId() {
        return this['volume_type_id'];
    }
    public withId(id: string): ListVolumesRequest {
        this['id'] = id;
        return this;
    }
    public withIds(ids: string): ListVolumesRequest {
        this['ids'] = ids;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVolumesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withServerId(serverId: string): ListVolumesRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
}