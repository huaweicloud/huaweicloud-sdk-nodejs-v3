import { VulRepoImagesTagInfo } from './VulRepoImagesTagInfo';


export class VulRepoImageInfo {
    public namespace?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'app_name'?: string;
    public version?: string;
    private 'tag_count'?: number;
    private 'image_type'?: string;
    private 'data_list'?: Array<VulRepoImagesTagInfo>;
    public constructor() { 
    }
    public withNamespace(namespace: string): VulRepoImageInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageId(imageId: string): VulRepoImageInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): VulRepoImageInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withAppName(appName: string): VulRepoImageInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withVersion(version: string): VulRepoImageInfo {
        this['version'] = version;
        return this;
    }
    public withTagCount(tagCount: number): VulRepoImageInfo {
        this['tag_count'] = tagCount;
        return this;
    }
    public set tagCount(tagCount: number  | undefined) {
        this['tag_count'] = tagCount;
    }
    public get tagCount(): number | undefined {
        return this['tag_count'];
    }
    public withImageType(imageType: string): VulRepoImageInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withDataList(dataList: Array<VulRepoImagesTagInfo>): VulRepoImageInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulRepoImagesTagInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulRepoImagesTagInfo> | undefined {
        return this['data_list'];
    }
}