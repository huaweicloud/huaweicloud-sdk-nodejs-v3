import { Attachment } from './Attachment';
import { Link } from './Link';


export class VolumeDetail {
    public id: string;
    public links: Array<Link>;
    public name: string;
    public status: string;
    public attachments: Array<Attachment>;
    private 'availability_zone': string | undefined;
    private 'os-vol-host-attr:host': string | undefined;
    private 'source_volid'?: string | undefined;
    private 'snapshot_id': string | undefined;
    public description: string;
    private 'created_at': string | undefined;
    private 'os-vol-tenant-attr:tenant_id': string | undefined;
    private 'volume_image_metadata': { [key: string]: object; } | undefined;
    private 'volume_type': string | undefined;
    public size: number;
    private 'consistencygroup_id'?: string | undefined;
    public bootable: string;
    public metadata: { [key: string]: object; };
    private 'updated_at': string | undefined;
    public encrypted?: boolean;
    private 'replication_status': string | undefined;
    private 'os-volume-replication:extended_status': string | undefined;
    private 'os-vol-mig-status-attr:migstat': string | undefined;
    private 'os-vol-mig-status-attr:name_id': string | undefined;
    public shareable: string;
    private 'user_id': string | undefined;
    private 'service_type': string | undefined;
    public multiattach: boolean;
    private 'dedicated_storage_id'?: string | undefined;
    private 'dedicated_storage_name'?: string | undefined;
    public tags: { [key: string]: string; };
    public wwn?: string;
    private 'enterprise_project_id'?: string | undefined;
    private 'serial_number'?: string | undefined;
    public constructor(id?: any, links?: any, name?: any, status?: any, attachments?: any, availabilityZone?: any, osVolHostAttrHost?: any, snapshotId?: any, description?: any, createdAt?: any, osVolTenantAttrTenantId?: any, volumeImageMetadata?: any, volumeType?: any, size?: any, bootable?: any, metadata?: any, updatedAt?: any, replicationStatus?: any, osVolumeReplicationExtendedStatus?: any, osVolMigStatusAttrMigstat?: any, osVolMigStatusAttrNameId?: any, shareable?: any, userId?: any, serviceType?: any, multiattach?: any, tags?: any) { 
        this['id'] = id;
        this['links'] = links;
        this['name'] = name;
        this['status'] = status;
        this['attachments'] = attachments;
        this['availability_zone'] = availabilityZone;
        this['os-vol-host-attr:host'] = osVolHostAttrHost;
        this['snapshot_id'] = snapshotId;
        this['description'] = description;
        this['created_at'] = createdAt;
        this['os-vol-tenant-attr:tenant_id'] = osVolTenantAttrTenantId;
        this['volume_image_metadata'] = volumeImageMetadata;
        this['volume_type'] = volumeType;
        this['size'] = size;
        this['bootable'] = bootable;
        this['metadata'] = metadata;
        this['updated_at'] = updatedAt;
        this['replication_status'] = replicationStatus;
        this['os-volume-replication:extended_status'] = osVolumeReplicationExtendedStatus;
        this['os-vol-mig-status-attr:migstat'] = osVolMigStatusAttrMigstat;
        this['os-vol-mig-status-attr:name_id'] = osVolMigStatusAttrNameId;
        this['shareable'] = shareable;
        this['user_id'] = userId;
        this['service_type'] = serviceType;
        this['multiattach'] = multiattach;
        this['tags'] = tags;
    }
    public withId(id: string): VolumeDetail {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): VolumeDetail {
        this['links'] = links;
        return this;
    }
    public withName(name: string): VolumeDetail {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): VolumeDetail {
        this['status'] = status;
        return this;
    }
    public withAttachments(attachments: Array<Attachment>): VolumeDetail {
        this['attachments'] = attachments;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): VolumeDetail {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withOsVolHostAttrHost(osVolHostAttrHost: string): VolumeDetail {
        this['os-vol-host-attr:host'] = osVolHostAttrHost;
        return this;
    }
    public set osVolHostAttrHost(osVolHostAttrHost: string | undefined) {
        this['os-vol-host-attr:host'] = osVolHostAttrHost;
    }
    public get osVolHostAttrHost() {
        return this['os-vol-host-attr:host'];
    }
    public withSourceVolid(sourceVolid: string): VolumeDetail {
        this['source_volid'] = sourceVolid;
        return this;
    }
    public set sourceVolid(sourceVolid: string | undefined) {
        this['source_volid'] = sourceVolid;
    }
    public get sourceVolid() {
        return this['source_volid'];
    }
    public withSnapshotId(snapshotId: string): VolumeDetail {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
    public withDescription(description: string): VolumeDetail {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): VolumeDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withOsVolTenantAttrTenantId(osVolTenantAttrTenantId: string): VolumeDetail {
        this['os-vol-tenant-attr:tenant_id'] = osVolTenantAttrTenantId;
        return this;
    }
    public set osVolTenantAttrTenantId(osVolTenantAttrTenantId: string | undefined) {
        this['os-vol-tenant-attr:tenant_id'] = osVolTenantAttrTenantId;
    }
    public get osVolTenantAttrTenantId() {
        return this['os-vol-tenant-attr:tenant_id'];
    }
    public withVolumeImageMetadata(volumeImageMetadata: { [key: string]: object; }): VolumeDetail {
        this['volume_image_metadata'] = volumeImageMetadata;
        return this;
    }
    public set volumeImageMetadata(volumeImageMetadata: { [key: string]: object; } | undefined) {
        this['volume_image_metadata'] = volumeImageMetadata;
    }
    public get volumeImageMetadata() {
        return this['volume_image_metadata'];
    }
    public withVolumeType(volumeType: string): VolumeDetail {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType() {
        return this['volume_type'];
    }
    public withSize(size: number): VolumeDetail {
        this['size'] = size;
        return this;
    }
    public withConsistencygroupId(consistencygroupId: string): VolumeDetail {
        this['consistencygroup_id'] = consistencygroupId;
        return this;
    }
    public set consistencygroupId(consistencygroupId: string | undefined) {
        this['consistencygroup_id'] = consistencygroupId;
    }
    public get consistencygroupId() {
        return this['consistencygroup_id'];
    }
    public withBootable(bootable: string): VolumeDetail {
        this['bootable'] = bootable;
        return this;
    }
    public withMetadata(metadata: { [key: string]: object; }): VolumeDetail {
        this['metadata'] = metadata;
        return this;
    }
    public withUpdatedAt(updatedAt: string): VolumeDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withEncrypted(encrypted: boolean): VolumeDetail {
        this['encrypted'] = encrypted;
        return this;
    }
    public withReplicationStatus(replicationStatus: string): VolumeDetail {
        this['replication_status'] = replicationStatus;
        return this;
    }
    public set replicationStatus(replicationStatus: string | undefined) {
        this['replication_status'] = replicationStatus;
    }
    public get replicationStatus() {
        return this['replication_status'];
    }
    public withOsVolumeReplicationExtendedStatus(osVolumeReplicationExtendedStatus: string): VolumeDetail {
        this['os-volume-replication:extended_status'] = osVolumeReplicationExtendedStatus;
        return this;
    }
    public set osVolumeReplicationExtendedStatus(osVolumeReplicationExtendedStatus: string | undefined) {
        this['os-volume-replication:extended_status'] = osVolumeReplicationExtendedStatus;
    }
    public get osVolumeReplicationExtendedStatus() {
        return this['os-volume-replication:extended_status'];
    }
    public withOsVolMigStatusAttrMigstat(osVolMigStatusAttrMigstat: string): VolumeDetail {
        this['os-vol-mig-status-attr:migstat'] = osVolMigStatusAttrMigstat;
        return this;
    }
    public set osVolMigStatusAttrMigstat(osVolMigStatusAttrMigstat: string | undefined) {
        this['os-vol-mig-status-attr:migstat'] = osVolMigStatusAttrMigstat;
    }
    public get osVolMigStatusAttrMigstat() {
        return this['os-vol-mig-status-attr:migstat'];
    }
    public withOsVolMigStatusAttrNameId(osVolMigStatusAttrNameId: string): VolumeDetail {
        this['os-vol-mig-status-attr:name_id'] = osVolMigStatusAttrNameId;
        return this;
    }
    public set osVolMigStatusAttrNameId(osVolMigStatusAttrNameId: string | undefined) {
        this['os-vol-mig-status-attr:name_id'] = osVolMigStatusAttrNameId;
    }
    public get osVolMigStatusAttrNameId() {
        return this['os-vol-mig-status-attr:name_id'];
    }
    public withShareable(shareable: string): VolumeDetail {
        this['shareable'] = shareable;
        return this;
    }
    public withUserId(userId: string): VolumeDetail {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withServiceType(serviceType: string): VolumeDetail {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withMultiattach(multiattach: boolean): VolumeDetail {
        this['multiattach'] = multiattach;
        return this;
    }
    public withDedicatedStorageId(dedicatedStorageId: string): VolumeDetail {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId() {
        return this['dedicated_storage_id'];
    }
    public withDedicatedStorageName(dedicatedStorageName: string): VolumeDetail {
        this['dedicated_storage_name'] = dedicatedStorageName;
        return this;
    }
    public set dedicatedStorageName(dedicatedStorageName: string | undefined) {
        this['dedicated_storage_name'] = dedicatedStorageName;
    }
    public get dedicatedStorageName() {
        return this['dedicated_storage_name'];
    }
    public withTags(tags: { [key: string]: string; }): VolumeDetail {
        this['tags'] = tags;
        return this;
    }
    public withWwn(wwn: string): VolumeDetail {
        this['wwn'] = wwn;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VolumeDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withSerialNumber(serialNumber: string): VolumeDetail {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber() {
        return this['serial_number'];
    }
}