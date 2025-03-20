

export class ListVolumesRequest {
    public marker?: string;
    public name?: string;
    public limit?: number;
    private 'sort_key'?: string;
    public offset?: number;
    private 'sort_dir'?: string;
    public status?: string;
    public metadata?: string;
    private 'availability_zone'?: string;
    public multiattach?: boolean;
    private 'service_type'?: string;
    private 'dedicated_storage_id'?: string;
    private 'dedicated_storage_name'?: string;
    private 'volume_type_id'?: string;
    public id?: string;
    public ids?: string;
    private 'enterprise_project_id'?: string;
    private 'server_id'?: string;
    private 'not_metadata'?: ListVolumesRequestNotMetadataEnum | string;
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
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
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
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
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
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
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
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): ListVolumesRequest {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string  | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId(): string | undefined {
        return this['dedicated_storage_id'];
    }
    public withDedicatedStorageName(dedicatedStorageName: string): ListVolumesRequest {
        this['dedicated_storage_name'] = dedicatedStorageName;
        return this;
    }
    public set dedicatedStorageName(dedicatedStorageName: string  | undefined) {
        this['dedicated_storage_name'] = dedicatedStorageName;
    }
    public get dedicatedStorageName(): string | undefined {
        return this['dedicated_storage_name'];
    }
    public withVolumeTypeId(volumeTypeId: string): ListVolumesRequest {
        this['volume_type_id'] = volumeTypeId;
        return this;
    }
    public set volumeTypeId(volumeTypeId: string  | undefined) {
        this['volume_type_id'] = volumeTypeId;
    }
    public get volumeTypeId(): string | undefined {
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
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withServerId(serverId: string): ListVolumesRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNotMetadata(notMetadata: ListVolumesRequestNotMetadataEnum | string): ListVolumesRequest {
        this['not_metadata'] = notMetadata;
        return this;
    }
    public set notMetadata(notMetadata: ListVolumesRequestNotMetadataEnum | string  | undefined) {
        this['not_metadata'] = notMetadata;
    }
    public get notMetadata(): ListVolumesRequestNotMetadataEnum | string | undefined {
        return this['not_metadata'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVolumesRequestNotMetadataEnum {
    HWPASSTHROUGHTRUE = '{\"hw:passthrough\":true}',
    HWPASSTHROUGHFALSE = '{\"hw:passthrough\":false}',
    _SYSTEM__ENCRYPTED1 = '{\"__system__encrypted\":1}',
    _SYSTEM__ENCRYPTED0 = '{\"__system__encrypted\":0}'
}
