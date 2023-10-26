import { BatchScanSwrImageInfo } from './BatchScanSwrImageInfo';


export class BatchScanPrivateImageRequestInfo {
    private 'repo_type'?: string;
    private 'image_info_list'?: Array<BatchScanSwrImageInfo>;
    private 'operate_all'?: boolean;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    private 'scan_status'?: string;
    private 'latest_version'?: boolean;
    public constructor(imageType?: string) { 
        this['image_type'] = imageType;
    }
    public withRepoType(repoType: string): BatchScanPrivateImageRequestInfo {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: string  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): string | undefined {
        return this['repo_type'];
    }
    public withImageInfoList(imageInfoList: Array<BatchScanSwrImageInfo>): BatchScanPrivateImageRequestInfo {
        this['image_info_list'] = imageInfoList;
        return this;
    }
    public set imageInfoList(imageInfoList: Array<BatchScanSwrImageInfo>  | undefined) {
        this['image_info_list'] = imageInfoList;
    }
    public get imageInfoList(): Array<BatchScanSwrImageInfo> | undefined {
        return this['image_info_list'];
    }
    public withOperateAll(operateAll: boolean): BatchScanPrivateImageRequestInfo {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withNamespace(namespace: string): BatchScanPrivateImageRequestInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): BatchScanPrivateImageRequestInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): BatchScanPrivateImageRequestInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): BatchScanPrivateImageRequestInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withScanStatus(scanStatus: string): BatchScanPrivateImageRequestInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withLatestVersion(latestVersion: boolean): BatchScanPrivateImageRequestInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: boolean  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): boolean | undefined {
        return this['latest_version'];
    }
}