

export class GeneralImageVulOperationsResponseInfo {
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'user_name'?: string;
    private 'handle_time'?: number;
    private 'handle_type'?: string;
    public status?: string;
    private 'app_name'?: string;
    private 'app_version'?: string;
    private 'app_path'?: string;
    public remark?: string;
    private 'image_digest'?: string;
    private 'image_version'?: string;
    private 'agent_id'?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): GeneralImageVulOperationsResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): GeneralImageVulOperationsResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withUserName(userName: string): GeneralImageVulOperationsResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withHandleTime(handleTime: number): GeneralImageVulOperationsResponseInfo {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
    public withHandleType(handleType: string): GeneralImageVulOperationsResponseInfo {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): string | undefined {
        return this['handle_type'];
    }
    public withStatus(status: string): GeneralImageVulOperationsResponseInfo {
        this['status'] = status;
        return this;
    }
    public withAppName(appName: string): GeneralImageVulOperationsResponseInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppVersion(appVersion: string): GeneralImageVulOperationsResponseInfo {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withAppPath(appPath: string): GeneralImageVulOperationsResponseInfo {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
    public withRemark(remark: string): GeneralImageVulOperationsResponseInfo {
        this['remark'] = remark;
        return this;
    }
    public withImageDigest(imageDigest: string): GeneralImageVulOperationsResponseInfo {
        this['image_digest'] = imageDigest;
        return this;
    }
    public set imageDigest(imageDigest: string  | undefined) {
        this['image_digest'] = imageDigest;
    }
    public get imageDigest(): string | undefined {
        return this['image_digest'];
    }
    public withImageVersion(imageVersion: string): GeneralImageVulOperationsResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withAgentId(agentId: string): GeneralImageVulOperationsResponseInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
}