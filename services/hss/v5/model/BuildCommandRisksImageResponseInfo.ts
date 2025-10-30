import { BuildCommandRiskDetailListResponseInfo } from './BuildCommandRiskDetailListResponseInfo';


export class BuildCommandRisksImageResponseInfo {
    public namespace?: string;
    private 'image_digest'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    private 'image_size'?: number;
    private 'latest_scan_time'?: number;
    private 'risk_detail_info'?: BuildCommandRiskDetailListResponseInfo;
    public constructor() { 
    }
    public withNamespace(namespace: string): BuildCommandRisksImageResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageDigest(imageDigest: string): BuildCommandRisksImageResponseInfo {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageId(imageId: string): BuildCommandRisksImageResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): BuildCommandRisksImageResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): BuildCommandRisksImageResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): BuildCommandRisksImageResponseInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageSize(imageSize: number): BuildCommandRisksImageResponseInfo {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withLatestScanTime(latestScanTime: number): BuildCommandRisksImageResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withRiskDetailInfo(riskDetailInfo: BuildCommandRiskDetailListResponseInfo): BuildCommandRisksImageResponseInfo {
        this['risk_detail_info'] = riskDetailInfo;
        return this;
    }
    public set riskDetailInfo(riskDetailInfo: BuildCommandRiskDetailListResponseInfo  | undefined) {
        this['risk_detail_info'] = riskDetailInfo;
    }
    public get riskDetailInfo(): BuildCommandRiskDetailListResponseInfo | undefined {
        return this['risk_detail_info'];
    }
}