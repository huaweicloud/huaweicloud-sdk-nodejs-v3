import { LocalImageInfo } from './LocalImageInfo';


export class LocalImageBatchScanRequestBody {
    private 'operate_all'?: boolean;
    private 'image_info_list'?: Array<LocalImageInfo>;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'local_image_type'?: string;
    private 'scan_status'?: string;
    private 'image_size'?: number;
    private 'start_latest_update_time'?: number;
    private 'end_latest_update_time'?: number;
    private 'start_latest_scan_time'?: number;
    private 'end_latest_scan_time'?: number;
    public constructor() { 
    }
    public withOperateAll(operateAll: boolean): LocalImageBatchScanRequestBody {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withImageInfoList(imageInfoList: Array<LocalImageInfo>): LocalImageBatchScanRequestBody {
        this['image_info_list'] = imageInfoList;
        return this;
    }
    public set imageInfoList(imageInfoList: Array<LocalImageInfo>  | undefined) {
        this['image_info_list'] = imageInfoList;
    }
    public get imageInfoList(): Array<LocalImageInfo> | undefined {
        return this['image_info_list'];
    }
    public withImageName(imageName: string): LocalImageBatchScanRequestBody {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): LocalImageBatchScanRequestBody {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withLocalImageType(localImageType: string): LocalImageBatchScanRequestBody {
        this['local_image_type'] = localImageType;
        return this;
    }
    public set localImageType(localImageType: string  | undefined) {
        this['local_image_type'] = localImageType;
    }
    public get localImageType(): string | undefined {
        return this['local_image_type'];
    }
    public withScanStatus(scanStatus: string): LocalImageBatchScanRequestBody {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withImageSize(imageSize: number): LocalImageBatchScanRequestBody {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): LocalImageBatchScanRequestBody {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): LocalImageBatchScanRequestBody {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): LocalImageBatchScanRequestBody {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): LocalImageBatchScanRequestBody {
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