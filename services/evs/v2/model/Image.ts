import { VolumeType } from './VolumeType';


export class Image {
    private 'container_format'?: string | undefined;
    private 'disk_format'?: string | undefined;
    private 'display_description'?: string | undefined;
    public id: string;
    private 'image_id': string | undefined;
    private 'image_name': string | undefined;
    public size: number;
    public status: string;
    private 'updated_at': string | undefined;
    private 'volume_type'?: VolumeType | undefined;
    public constructor(id?: any, imageId?: any, imageName?: any, size?: any, status?: any, updatedAt?: any) { 
        this['id'] = id;
        this['image_id'] = imageId;
        this['image_name'] = imageName;
        this['size'] = size;
        this['status'] = status;
        this['updated_at'] = updatedAt;
    }
    public withContainerFormat(containerFormat: string): Image {
        this['container_format'] = containerFormat;
        return this;
    }
    public set containerFormat(containerFormat: string | undefined) {
        this['container_format'] = containerFormat;
    }
    public get containerFormat() {
        return this['container_format'];
    }
    public withDiskFormat(diskFormat: string): Image {
        this['disk_format'] = diskFormat;
        return this;
    }
    public set diskFormat(diskFormat: string | undefined) {
        this['disk_format'] = diskFormat;
    }
    public get diskFormat() {
        return this['disk_format'];
    }
    public withDisplayDescription(displayDescription: string): Image {
        this['display_description'] = displayDescription;
        return this;
    }
    public set displayDescription(displayDescription: string | undefined) {
        this['display_description'] = displayDescription;
    }
    public get displayDescription() {
        return this['display_description'];
    }
    public withId(id: string): Image {
        this['id'] = id;
        return this;
    }
    public withImageId(imageId: string): Image {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withImageName(imageName: string): Image {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName() {
        return this['image_name'];
    }
    public withSize(size: number): Image {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): Image {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: string): Image {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withVolumeType(volumeType: VolumeType): Image {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: VolumeType | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType() {
        return this['volume_type'];
    }
}