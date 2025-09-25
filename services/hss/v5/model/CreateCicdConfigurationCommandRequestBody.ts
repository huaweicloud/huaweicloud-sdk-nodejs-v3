import { IacScanRequestInfo } from './IacScanRequestInfo';
import { ImageScanRequestInfo } from './ImageScanRequestInfo';


export class CreateCicdConfigurationCommandRequestBody {
    private 'scan_type'?: string;
    private 'cicd_id'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'is_blocking'?: boolean;
    private 'repository_address'?: string;
    private 'login_user_name'?: string;
    private 'login_password'?: string;
    public namespace?: string;
    private 'is_image_scan'?: boolean;
    private 'image_scan_info'?: ImageScanRequestInfo;
    private 'is_iac_scan'?: boolean;
    private 'iac_scan_info'?: IacScanRequestInfo;
    public constructor(cicdId?: string) { 
        this['cicd_id'] = cicdId;
    }
    public withScanType(scanType: string): CreateCicdConfigurationCommandRequestBody {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withCicdId(cicdId: string): CreateCicdConfigurationCommandRequestBody {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: string  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): string | undefined {
        return this['cicd_id'];
    }
    public withImageName(imageName: string): CreateCicdConfigurationCommandRequestBody {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): CreateCicdConfigurationCommandRequestBody {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withIsBlocking(isBlocking: boolean): CreateCicdConfigurationCommandRequestBody {
        this['is_blocking'] = isBlocking;
        return this;
    }
    public set isBlocking(isBlocking: boolean  | undefined) {
        this['is_blocking'] = isBlocking;
    }
    public get isBlocking(): boolean | undefined {
        return this['is_blocking'];
    }
    public withRepositoryAddress(repositoryAddress: string): CreateCicdConfigurationCommandRequestBody {
        this['repository_address'] = repositoryAddress;
        return this;
    }
    public set repositoryAddress(repositoryAddress: string  | undefined) {
        this['repository_address'] = repositoryAddress;
    }
    public get repositoryAddress(): string | undefined {
        return this['repository_address'];
    }
    public withLoginUserName(loginUserName: string): CreateCicdConfigurationCommandRequestBody {
        this['login_user_name'] = loginUserName;
        return this;
    }
    public set loginUserName(loginUserName: string  | undefined) {
        this['login_user_name'] = loginUserName;
    }
    public get loginUserName(): string | undefined {
        return this['login_user_name'];
    }
    public withLoginPassword(loginPassword: string): CreateCicdConfigurationCommandRequestBody {
        this['login_password'] = loginPassword;
        return this;
    }
    public set loginPassword(loginPassword: string  | undefined) {
        this['login_password'] = loginPassword;
    }
    public get loginPassword(): string | undefined {
        return this['login_password'];
    }
    public withNamespace(namespace: string): CreateCicdConfigurationCommandRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withIsImageScan(isImageScan: boolean): CreateCicdConfigurationCommandRequestBody {
        this['is_image_scan'] = isImageScan;
        return this;
    }
    public set isImageScan(isImageScan: boolean  | undefined) {
        this['is_image_scan'] = isImageScan;
    }
    public get isImageScan(): boolean | undefined {
        return this['is_image_scan'];
    }
    public withImageScanInfo(imageScanInfo: ImageScanRequestInfo): CreateCicdConfigurationCommandRequestBody {
        this['image_scan_info'] = imageScanInfo;
        return this;
    }
    public set imageScanInfo(imageScanInfo: ImageScanRequestInfo  | undefined) {
        this['image_scan_info'] = imageScanInfo;
    }
    public get imageScanInfo(): ImageScanRequestInfo | undefined {
        return this['image_scan_info'];
    }
    public withIsIacScan(isIacScan: boolean): CreateCicdConfigurationCommandRequestBody {
        this['is_iac_scan'] = isIacScan;
        return this;
    }
    public set isIacScan(isIacScan: boolean  | undefined) {
        this['is_iac_scan'] = isIacScan;
    }
    public get isIacScan(): boolean | undefined {
        return this['is_iac_scan'];
    }
    public withIacScanInfo(iacScanInfo: IacScanRequestInfo): CreateCicdConfigurationCommandRequestBody {
        this['iac_scan_info'] = iacScanInfo;
        return this;
    }
    public set iacScanInfo(iacScanInfo: IacScanRequestInfo  | undefined) {
        this['iac_scan_info'] = iacScanInfo;
    }
    public get iacScanInfo(): IacScanRequestInfo | undefined {
        return this['iac_scan_info'];
    }
}