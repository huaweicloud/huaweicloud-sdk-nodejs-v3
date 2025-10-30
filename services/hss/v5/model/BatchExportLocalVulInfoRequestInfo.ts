

export class BatchExportLocalVulInfoRequestInfo {
    private 'image_id_list'?: Array<string>;
    private 'operate_all'?: boolean;
    private 'vul_type'?: string;
    private 'handle_status'?: string;
    private 'scan_status'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_size'?: number;
    private 'start_latest_update_time'?: number;
    private 'end_latest_update_time'?: number;
    private 'start_latest_scan_time'?: number;
    private 'end_latest_scan_time'?: number;
    private 'has_container'?: boolean;
    private 'vul_id_list'?: Array<string>;
    public constructor() { 
    }
    public withImageIdList(imageIdList: Array<string>): BatchExportLocalVulInfoRequestInfo {
        this['image_id_list'] = imageIdList;
        return this;
    }
    public set imageIdList(imageIdList: Array<string>  | undefined) {
        this['image_id_list'] = imageIdList;
    }
    public get imageIdList(): Array<string> | undefined {
        return this['image_id_list'];
    }
    public withOperateAll(operateAll: boolean): BatchExportLocalVulInfoRequestInfo {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withVulType(vulType: string): BatchExportLocalVulInfoRequestInfo {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withHandleStatus(handleStatus: string): BatchExportLocalVulInfoRequestInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withScanStatus(scanStatus: string): BatchExportLocalVulInfoRequestInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withImageName(imageName: string): BatchExportLocalVulInfoRequestInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): BatchExportLocalVulInfoRequestInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageSize(imageSize: number): BatchExportLocalVulInfoRequestInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withStartLatestUpdateTime(startLatestUpdateTime: number): BatchExportLocalVulInfoRequestInfo {
        this['start_latest_update_time'] = startLatestUpdateTime;
        return this;
    }
    public set startLatestUpdateTime(startLatestUpdateTime: number  | undefined) {
        this['start_latest_update_time'] = startLatestUpdateTime;
    }
    public get startLatestUpdateTime(): number | undefined {
        return this['start_latest_update_time'];
    }
    public withEndLatestUpdateTime(endLatestUpdateTime: number): BatchExportLocalVulInfoRequestInfo {
        this['end_latest_update_time'] = endLatestUpdateTime;
        return this;
    }
    public set endLatestUpdateTime(endLatestUpdateTime: number  | undefined) {
        this['end_latest_update_time'] = endLatestUpdateTime;
    }
    public get endLatestUpdateTime(): number | undefined {
        return this['end_latest_update_time'];
    }
    public withStartLatestScanTime(startLatestScanTime: number): BatchExportLocalVulInfoRequestInfo {
        this['start_latest_scan_time'] = startLatestScanTime;
        return this;
    }
    public set startLatestScanTime(startLatestScanTime: number  | undefined) {
        this['start_latest_scan_time'] = startLatestScanTime;
    }
    public get startLatestScanTime(): number | undefined {
        return this['start_latest_scan_time'];
    }
    public withEndLatestScanTime(endLatestScanTime: number): BatchExportLocalVulInfoRequestInfo {
        this['end_latest_scan_time'] = endLatestScanTime;
        return this;
    }
    public set endLatestScanTime(endLatestScanTime: number  | undefined) {
        this['end_latest_scan_time'] = endLatestScanTime;
    }
    public get endLatestScanTime(): number | undefined {
        return this['end_latest_scan_time'];
    }
    public withHasContainer(hasContainer: boolean): BatchExportLocalVulInfoRequestInfo {
        this['has_container'] = hasContainer;
        return this;
    }
    public set hasContainer(hasContainer: boolean  | undefined) {
        this['has_container'] = hasContainer;
    }
    public get hasContainer(): boolean | undefined {
        return this['has_container'];
    }
    public withVulIdList(vulIdList: Array<string>): BatchExportLocalVulInfoRequestInfo {
        this['vul_id_list'] = vulIdList;
        return this;
    }
    public set vulIdList(vulIdList: Array<string>  | undefined) {
        this['vul_id_list'] = vulIdList;
    }
    public get vulIdList(): Array<string> | undefined {
        return this['vul_id_list'];
    }
}