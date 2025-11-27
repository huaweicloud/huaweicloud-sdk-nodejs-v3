import { ProtectDirectoryInfo } from './ProtectDirectoryInfo';


export class ProtectImageInfo {
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    private 'protect_directory_info_list'?: Array<ProtectDirectoryInfo>;
    private 'exclude_file_types'?: Array<string>;
    public constructor(imageName?: string, protectDirectoryInfoList?: Array<ProtectDirectoryInfo>) { 
        this['image_name'] = imageName;
        this['protect_directory_info_list'] = protectDirectoryInfoList;
    }
    public withImageName(imageName: string): ProtectImageInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ProtectImageInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): ProtectImageInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withProtectDirectoryInfoList(protectDirectoryInfoList: Array<ProtectDirectoryInfo>): ProtectImageInfo {
        this['protect_directory_info_list'] = protectDirectoryInfoList;
        return this;
    }
    public set protectDirectoryInfoList(protectDirectoryInfoList: Array<ProtectDirectoryInfo>  | undefined) {
        this['protect_directory_info_list'] = protectDirectoryInfoList;
    }
    public get protectDirectoryInfoList(): Array<ProtectDirectoryInfo> | undefined {
        return this['protect_directory_info_list'];
    }
    public withExcludeFileTypes(excludeFileTypes: Array<string>): ProtectImageInfo {
        this['exclude_file_types'] = excludeFileTypes;
        return this;
    }
    public set excludeFileTypes(excludeFileTypes: Array<string>  | undefined) {
        this['exclude_file_types'] = excludeFileTypes;
    }
    public get excludeFileTypes(): Array<string> | undefined {
        return this['exclude_file_types'];
    }
}