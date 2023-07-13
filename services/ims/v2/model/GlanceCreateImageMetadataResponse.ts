
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceCreateImageMetadataResponse extends SdkResponse {
    public visibility?: string;
    public name?: string;
    private 'protected'?: boolean | undefined;
    private 'container_format'?: string | undefined;
    private 'disk_format'?: GlanceCreateImageMetadataResponseDiskFormatEnum | undefined;
    public tags?: Array<string>;
    private 'min_ram'?: number | undefined;
    private 'min_disk'?: number | undefined;
    public status?: GlanceCreateImageMetadataResponseStatusEnum;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public self?: string;
    public id?: string;
    public file?: string;
    public schema?: string;
    private '__image_source_type'?: string | undefined;
    private '__image_size'?: string | undefined;
    private '__isregistered'?: string | undefined;
    private '__os_version'?: string | undefined;
    private '__os_type'?: GlanceCreateImageMetadataResponseOsTypeEnum | undefined;
    private '__platform'?: string | undefined;
    private '__os_bit'?: GlanceCreateImageMetadataResponseOsBitEnum | undefined;
    private '__imagetype'?: string | undefined;
    private 'virtual_env_type'?: GlanceCreateImageMetadataResponseVirtualEnvTypeEnum | undefined;
    public owner?: string;
    private 'virtual_size'?: number | undefined;
    public properties?: object;
    private '__root_origin'?: string | undefined;
    public checksum?: string;
    public size?: number;
    public constructor() { 
        super();
    }
    public withVisibility(visibility: string): GlanceCreateImageMetadataResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withName(name: string): GlanceCreateImageMetadataResponse {
        this['name'] = name;
        return this;
    }
    public withProtected(_protected: boolean): GlanceCreateImageMetadataResponse {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean | undefined) {
        this['protected'] = _protected;
    }
    public get _protected() {
        return this['protected'];
    }
    public withContainerFormat(containerFormat: string): GlanceCreateImageMetadataResponse {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat() {
        return this['container_format'];
    }
    public withDiskFormat(diskFormat: GlanceCreateImageMetadataResponseDiskFormatEnum): GlanceCreateImageMetadataResponse {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: GlanceCreateImageMetadataResponseDiskFormatEnum | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat() {
        return this['disk_format'];
    }
    public withTags(tags: Array<string>): GlanceCreateImageMetadataResponse {
        this['tags'] = tags;
        return this;
    }
    public withMinRam(minRam: number): GlanceCreateImageMetadataResponse {
        this['min_ram'] = minRam;
        return this;
    }
    public set minRam(minRam: number | undefined) {
        this['min_ram'] = minRam;
    }
    public get minRam() {
        return this['min_ram'];
    }
    public withMinDisk(minDisk: number): GlanceCreateImageMetadataResponse {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk() {
        return this['min_disk'];
    }
    public withStatus(status: GlanceCreateImageMetadataResponseStatusEnum): GlanceCreateImageMetadataResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): GlanceCreateImageMetadataResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): GlanceCreateImageMetadataResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withSelf(self: string): GlanceCreateImageMetadataResponse {
        this['self'] = self;
        return this;
    }
    public withId(id: string): GlanceCreateImageMetadataResponse {
        this['id'] = id;
        return this;
    }
    public withFile(file: string): GlanceCreateImageMetadataResponse {
        this['file'] = file;
        return this;
    }
    public withSchema(schema: string): GlanceCreateImageMetadataResponse {
        this['schema'] = schema;
        return this;
    }
    public withImageSourceType(imageSourceType: string): GlanceCreateImageMetadataResponse {
        this['__image_source_type'] = imageSourceType;
        return this;
    }
    public set imageSourceType(imageSourceType: string | undefined) {
        this['__image_source_type'] = imageSourceType;
    }
    public get imageSourceType() {
        return this['__image_source_type'];
    }
    public withImageSize(imageSize: string): GlanceCreateImageMetadataResponse {
        this['__image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: string | undefined) {
        this['__image_size'] = imageSize;
    }
    public get imageSize() {
        return this['__image_size'];
    }
    public withIsregistered(isregistered: string): GlanceCreateImageMetadataResponse {
        this['__isregistered'] = isregistered;
        return this;
    }
    public set isregistered(isregistered: string | undefined) {
        this['__isregistered'] = isregistered;
    }
    public get isregistered() {
        return this['__isregistered'];
    }
    public withOsVersion(osVersion: string): GlanceCreateImageMetadataResponse {
        this['__os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['__os_version'] = osVersion;
    }
    public get osVersion() {
        return this['__os_version'];
    }
    public withOsType(osType: GlanceCreateImageMetadataResponseOsTypeEnum): GlanceCreateImageMetadataResponse {
        this['__os_type'] = osType;
        return this;
    }
    public set osType(osType: GlanceCreateImageMetadataResponseOsTypeEnum | undefined) {
        this['__os_type'] = osType;
    }
    public get osType() {
        return this['__os_type'];
    }
    public withPlatform(platform: string): GlanceCreateImageMetadataResponse {
        this['__platform'] = platform;
        return this;
    }
    public set platform(platform: string | undefined) {
        this['__platform'] = platform;
    }
    public get platform() {
        return this['__platform'];
    }
    public withOsBit(osBit: GlanceCreateImageMetadataResponseOsBitEnum): GlanceCreateImageMetadataResponse {
        this['__os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: GlanceCreateImageMetadataResponseOsBitEnum | undefined) {
        this['__os_bit'] = osBit;
    }
    public get osBit() {
        return this['__os_bit'];
    }
    public withImagetype(imagetype: string): GlanceCreateImageMetadataResponse {
        this['__imagetype'] = imagetype;
        return this;
    }
    public set imagetype(imagetype: string | undefined) {
        this['__imagetype'] = imagetype;
    }
    public get imagetype() {
        return this['__imagetype'];
    }
    public withVirtualEnvType(virtualEnvType: GlanceCreateImageMetadataResponseVirtualEnvTypeEnum): GlanceCreateImageMetadataResponse {
        this['virtual_env_type'] = virtualEnvType;
        return this;
    }
    public set virtualEnvType(virtualEnvType: GlanceCreateImageMetadataResponseVirtualEnvTypeEnum | undefined) {
        this['virtual_env_type'] = virtualEnvType;
    }
    public get virtualEnvType() {
        return this['virtual_env_type'];
    }
    public withOwner(owner: string): GlanceCreateImageMetadataResponse {
        this['owner'] = owner;
        return this;
    }
    public withVirtualSize(virtualSize: number): GlanceCreateImageMetadataResponse {
        this['virtual_size'] = virtualSize;
        return this;
    }
    public set virtualSize(virtualSize: number | undefined) {
        this['virtual_size'] = virtualSize;
    }
    public get virtualSize() {
        return this['virtual_size'];
    }
    public withProperties(properties: object): GlanceCreateImageMetadataResponse {
        this['properties'] = properties;
        return this;
    }
    public withRootOrigin(rootOrigin: string): GlanceCreateImageMetadataResponse {
        this['__root_origin'] = rootOrigin;
        return this;
    }
    public set rootOrigin(rootOrigin: string | undefined) {
        this['__root_origin'] = rootOrigin;
    }
    public get rootOrigin() {
        return this['__root_origin'];
    }
    public withChecksum(checksum: string): GlanceCreateImageMetadataResponse {
        this['checksum'] = checksum;
        return this;
    }
    public withSize(size: number): GlanceCreateImageMetadataResponse {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlanceCreateImageMetadataResponseDiskFormatEnum {
    VHD = 'vhd',
    ZVHD = 'zvhd',
    RAW = 'raw',
    QCOW2 = 'qcow2'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceCreateImageMetadataResponseStatusEnum {
    QUEUED = 'queued',
    SAVING = 'saving',
    DELETED = 'deleted',
    KILLED = 'killed',
    ACTIVE = 'active'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceCreateImageMetadataResponseOsTypeEnum {
    WINDOWS = 'Windows',
    LINUX = 'Linux',
    OTHER = 'other'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceCreateImageMetadataResponseOsBitEnum {
    E_32 = '32',
    E_64 = '64'
}
/**
    * @export
    * @enum {string}
    */
export enum GlanceCreateImageMetadataResponseVirtualEnvTypeEnum {
    FUSIONCOMPUTE = 'FusionCompute',
    IRONIC = 'Ironic',
    DATAIMAGE = 'DataImage'
}
