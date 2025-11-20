

export class ImageScanRequestInfo {
    private 'scan_type'?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'is_blocking'?: boolean;
    private 'repository_address'?: string;
    private 'login_user_name'?: string;
    private 'login_password'?: string;
    public namespace?: string;
    private 'pipeline_type'?: string;
    public constructor() { 
    }
    public withScanType(scanType: string): ImageScanRequestInfo {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withImageName(imageName: string): ImageScanRequestInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ImageScanRequestInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withIsBlocking(isBlocking: boolean): ImageScanRequestInfo {
        this['is_blocking'] = isBlocking;
        return this;
    }
    public set isBlocking(isBlocking: boolean  | undefined) {
        this['is_blocking'] = isBlocking;
    }
    public get isBlocking(): boolean | undefined {
        return this['is_blocking'];
    }
    public withRepositoryAddress(repositoryAddress: string): ImageScanRequestInfo {
        this['repository_address'] = repositoryAddress;
        return this;
    }
    public set repositoryAddress(repositoryAddress: string  | undefined) {
        this['repository_address'] = repositoryAddress;
    }
    public get repositoryAddress(): string | undefined {
        return this['repository_address'];
    }
    public withLoginUserName(loginUserName: string): ImageScanRequestInfo {
        this['login_user_name'] = loginUserName;
        return this;
    }
    public set loginUserName(loginUserName: string  | undefined) {
        this['login_user_name'] = loginUserName;
    }
    public get loginUserName(): string | undefined {
        return this['login_user_name'];
    }
    public withLoginPassword(loginPassword: string): ImageScanRequestInfo {
        this['login_password'] = loginPassword;
        return this;
    }
    public set loginPassword(loginPassword: string  | undefined) {
        this['login_password'] = loginPassword;
    }
    public get loginPassword(): string | undefined {
        return this['login_password'];
    }
    public withNamespace(namespace: string): ImageScanRequestInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withPipelineType(pipelineType: string): ImageScanRequestInfo {
        this['pipeline_type'] = pipelineType;
        return this;
    }
    public set pipelineType(pipelineType: string  | undefined) {
        this['pipeline_type'] = pipelineType;
    }
    public get pipelineType(): string | undefined {
        return this['pipeline_type'];
    }
}