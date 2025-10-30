

export class ImageAppResponseInfo {
    private 'app_name'?: string;
    private 'app_type'?: string;
    private 'app_version'?: string;
    private 'vul_num'?: number;
    private 'app_path'?: string;
    private 'layer_digest'?: string;
    private 'is_compliant'?: boolean;
    private 'latest_scan_time'?: number;
    private 'image_type'?: string;
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_id'?: string;
    public constructor() { 
    }
    public withAppName(appName: string): ImageAppResponseInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppType(appType: string): ImageAppResponseInfo {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withAppVersion(appVersion: string): ImageAppResponseInfo {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withVulNum(vulNum: number): ImageAppResponseInfo {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
    public withAppPath(appPath: string): ImageAppResponseInfo {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
    public withLayerDigest(layerDigest: string): ImageAppResponseInfo {
        this['layer_digest'] = layerDigest;
        return this;
    }
    public set layerDigest(layerDigest: string  | undefined) {
        this['layer_digest'] = layerDigest;
    }
    public get layerDigest(): string | undefined {
        return this['layer_digest'];
    }
    public withIsCompliant(isCompliant: boolean): ImageAppResponseInfo {
        this['is_compliant'] = isCompliant;
        return this;
    }
    public set isCompliant(isCompliant: boolean  | undefined) {
        this['is_compliant'] = isCompliant;
    }
    public get isCompliant(): boolean | undefined {
        return this['is_compliant'];
    }
    public withLatestScanTime(latestScanTime: number): ImageAppResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withImageType(imageType: string): ImageAppResponseInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withNamespace(namespace: string): ImageAppResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ImageAppResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ImageAppResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageId(imageId: string): ImageAppResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
}