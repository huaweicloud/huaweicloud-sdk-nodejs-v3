import { Attachment } from './Attachment';


export class RecycleBinVolume {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: string;
    public attachments?: Array<Attachment>;
    public multiattach?: boolean;
    public size?: number;
    public metadata?: { [key: string]: object; };
    public bootable?: string;
    public tags?: { [key: string]: string; };
    private 'availability_zone'?: string;
    private 'created_at'?: string;
    private 'service_type'?: string;
    private 'updated_at'?: string;
    private 'volume_type'?: string;
    private 'enterprise_project_id'?: string;
    private 'plan_delete_at'?: string;
    private 'pre_deleted_at'?: string;
    private 'dedicated_storage_id'?: string;
    private 'dedicated_storage_name'?: string;
    private 'volume_image_metadata'?: { [key: string]: object; };
    public wwn?: string;
    public constructor() { 
    }
    public withId(id: string): RecycleBinVolume {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RecycleBinVolume {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): RecycleBinVolume {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): RecycleBinVolume {
        this['status'] = status;
        return this;
    }
    public withAttachments(attachments: Array<Attachment>): RecycleBinVolume {
        this['attachments'] = attachments;
        return this;
    }
    public withMultiattach(multiattach: boolean): RecycleBinVolume {
        this['multiattach'] = multiattach;
        return this;
    }
    public withSize(size: number): RecycleBinVolume {
        this['size'] = size;
        return this;
    }
    public withMetadata(metadata: { [key: string]: object; }): RecycleBinVolume {
        this['metadata'] = metadata;
        return this;
    }
    public withBootable(bootable: string): RecycleBinVolume {
        this['bootable'] = bootable;
        return this;
    }
    public withTags(tags: { [key: string]: string; }): RecycleBinVolume {
        this['tags'] = tags;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): RecycleBinVolume {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withCreatedAt(createdAt: string): RecycleBinVolume {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withServiceType(serviceType: string): RecycleBinVolume {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withUpdatedAt(updatedAt: string): RecycleBinVolume {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withVolumeType(volumeType: string): RecycleBinVolume {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecycleBinVolume {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPlanDeleteAt(planDeleteAt: string): RecycleBinVolume {
        this['plan_delete_at'] = planDeleteAt;
        return this;
    }
    public set planDeleteAt(planDeleteAt: string  | undefined) {
        this['plan_delete_at'] = planDeleteAt;
    }
    public get planDeleteAt(): string | undefined {
        return this['plan_delete_at'];
    }
    public withPreDeletedAt(preDeletedAt: string): RecycleBinVolume {
        this['pre_deleted_at'] = preDeletedAt;
        return this;
    }
    public set preDeletedAt(preDeletedAt: string  | undefined) {
        this['pre_deleted_at'] = preDeletedAt;
    }
    public get preDeletedAt(): string | undefined {
        return this['pre_deleted_at'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): RecycleBinVolume {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string  | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId(): string | undefined {
        return this['dedicated_storage_id'];
    }
    public withDedicatedStorageName(dedicatedStorageName: string): RecycleBinVolume {
        this['dedicated_storage_name'] = dedicatedStorageName;
        return this;
    }
    public set dedicatedStorageName(dedicatedStorageName: string  | undefined) {
        this['dedicated_storage_name'] = dedicatedStorageName;
    }
    public get dedicatedStorageName(): string | undefined {
        return this['dedicated_storage_name'];
    }
    public withVolumeImageMetadata(volumeImageMetadata: { [key: string]: object; }): RecycleBinVolume {
        this['volume_image_metadata'] = volumeImageMetadata;
        return this;
    }
    public set volumeImageMetadata(volumeImageMetadata: { [key: string]: object; }  | undefined) {
        this['volume_image_metadata'] = volumeImageMetadata;
    }
    public get volumeImageMetadata(): { [key: string]: object; } | undefined {
        return this['volume_image_metadata'];
    }
    public withWwn(wwn: string): RecycleBinVolume {
        this['wwn'] = wwn;
        return this;
    }
}