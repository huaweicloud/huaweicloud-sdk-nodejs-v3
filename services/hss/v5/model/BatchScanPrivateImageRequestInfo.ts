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
    private 'image_size'?: number;
    private 'start_latest_update_time'?: number;
    private 'end_latest_update_time'?: number;
    private 'start_latest_scan_time'?: number;
    private 'end_latest_scan_time'?: number;
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
    public withImageSize(imageSize: number): BatchScanPrivateImageRequestInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): BatchScanPrivateImageRequestInfo {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): BatchScanPrivateImageRequestInfo {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): BatchScanPrivateImageRequestInfo {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): BatchScanPrivateImageRequestInfo {
        this['end_latest_scan_time'] = endLatestScanTime;
        return this;
    }
    public set endLatestScanTime(endLatestScanTime: number  | undefined) {
        this['end_latest_scan_time'] = endLatestScanTime;
    }
    public get endLatestScanTime(): number | undefined {
        return this['end_latest_scan_time'];
    }
}