import { Attachment } from './Attachment';
import { Link } from './Link';
import { VolumeMetadata } from './VolumeMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVolumeResponse extends SdkResponse {
    public attachments?: Array<Attachment>;
    private 'availability_zone'?: string | undefined;
    public bootable?: string;
    private 'created_at'?: string | undefined;
    public id?: string;
    public links?: Array<Link>;
    public metadata?: VolumeMetadata;
    public multiattach?: boolean;
    public name?: string;
    private 'os-vol-host-attr:host'?: string | undefined;
    private 'os-vol-tenant-attr:tenant_id'?: string | undefined;
    public shareable?: string;
    public size?: number;
    private 'snapshot_id'?: string | undefined;
    private 'source_volid'?: string | undefined;
    public status?: string;
    private 'volume_image_metadata'?: object | undefined;
    private 'volume_type'?: string | undefined;
    public description?: string;
    private 'os-volume-replication:extended_status'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAttachments(attachments: Array<Attachment>): UpdateVolumeResponse {
        this['attachments'] = attachments;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): UpdateVolumeResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withBootable(bootable: string): UpdateVolumeResponse {
        this['bootable'] = bootable;
        return this;
    }
    public withCreatedAt(createdAt: string): UpdateVolumeResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withId(id: string): UpdateVolumeResponse {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): UpdateVolumeResponse {
        this['links'] = links;
        return this;
    }
    public withMetadata(metadata: VolumeMetadata): UpdateVolumeResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withMultiattach(multiattach: boolean): UpdateVolumeResponse {
        this['multiattach'] = multiattach;
        return this;
    }
    public withName(name: string): UpdateVolumeResponse {
        this['name'] = name;
        return this;
    }
    public withOsVolHostAttrHost(osVolHostAttrHost: string): UpdateVolumeResponse {
        this['os-vol-host-attr:host'] = osVolHostAttrHost;
        return this;
    }
    public set osVolHostAttrHost(osVolHostAttrHost: string | undefined) {
        this['os-vol-host-attr:host'] = osVolHostAttrHost;
    }
    public get osVolHostAttrHost() {
        return this['os-vol-host-attr:host'];
    }
    public withOsVolTenantAttrTenantId(osVolTenantAttrTenantId: string): UpdateVolumeResponse {
        this['os-vol-tenant-attr:tenant_id'] = osVolTenantAttrTenantId;
        return this;
    }
    public set osVolTenantAttrTenantId(osVolTenantAttrTenantId: string | undefined) {
        this['os-vol-tenant-attr:tenant_id'] = osVolTenantAttrTenantId;
    }
    public get osVolTenantAttrTenantId() {
        return this['os-vol-tenant-attr:tenant_id'];
    }
    public withShareable(shareable: string): UpdateVolumeResponse {
        this['shareable'] = shareable;
        return this;
    }
    public withSize(size: number): UpdateVolumeResponse {
        this['size'] = size;
        return this;
    }
    public withSnapshotId(snapshotId: string): UpdateVolumeResponse {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
    public withSourceVolid(sourceVolid: string): UpdateVolumeResponse {
        this['source_volid'] = sourceVolid;
        return this;
    }
    public set sourceVolid(sourceVolid: string | undefined) {
        this['source_volid'] = sourceVolid;
    }
    public get sourceVolid() {
        return this['source_volid'];
    }
    public withStatus(status: string): UpdateVolumeResponse {
        this['status'] = status;
        return this;
    }
    public withVolumeImageMetadata(volumeImageMetadata: object): UpdateVolumeResponse {
        this['volume_image_metadata'] = volumeImageMetadata;
        return this;
    }
    public set volumeImageMetadata(volumeImageMetadata: object | undefined) {
        this['volume_image_metadata'] = volumeImageMetadata;
    }
    public get volumeImageMetadata() {
        return this['volume_image_metadata'];
    }
    public withVolumeType(volumeType: string): UpdateVolumeResponse {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType() {
        return this['volume_type'];
    }
    public withDescription(description: string): UpdateVolumeResponse {
        this['description'] = description;
        return this;
    }
    public withOsVolumeReplicationExtendedStatus(osVolumeReplicationExtendedStatus: string): UpdateVolumeResponse {
        this['os-volume-replication:extended_status'] = osVolumeReplicationExtendedStatus;
        return this;
    }
    public set osVolumeReplicationExtendedStatus(osVolumeReplicationExtendedStatus: string | undefined) {
        this['os-volume-replication:extended_status'] = osVolumeReplicationExtendedStatus;
    }
    public get osVolumeReplicationExtendedStatus() {
        return this['os-volume-replication:extended_status'];
    }
}