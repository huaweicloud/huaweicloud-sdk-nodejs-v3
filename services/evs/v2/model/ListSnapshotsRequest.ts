

export class ListSnapshotsRequest {
    public offset?: number;
    public limit?: number;
    public name?: string;
    public status?: string;
    private 'volume_id'?: string;
    private 'availability_zone'?: string;
    public id?: string;
    private 'dedicated_storage_name'?: string;
    private 'dedicated_storage_id'?: string;
    private 'service_type'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListSnapshotsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSnapshotsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListSnapshotsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListSnapshotsRequest {
        this['status'] = status;
        return this;
    }
    public withVolumeId(volumeId: string): ListSnapshotsRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withAvailabilityZone(availabilityZone: string): ListSnapshotsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withId(id: string): ListSnapshotsRequest {
        this['id'] = id;
        return this;
    }
    public withDedicatedStorageName(dedicatedStorageName: string): ListSnapshotsRequest {
        this['dedicated_storage_name'] = dedicatedStorageName;
        return this;
    }
    public set dedicatedStorageName(dedicatedStorageName: string  | undefined) {
        this['dedicated_storage_name'] = dedicatedStorageName;
    }
    public get dedicatedStorageName(): string | undefined {
        return this['dedicated_storage_name'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): ListSnapshotsRequest {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string  | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId(): string | undefined {
        return this['dedicated_storage_id'];
    }
    public withServiceType(serviceType: string): ListSnapshotsRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSnapshotsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}