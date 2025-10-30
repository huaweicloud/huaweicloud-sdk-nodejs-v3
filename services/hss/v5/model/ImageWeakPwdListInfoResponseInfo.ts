

export class ImageWeakPwdListInfoResponseInfo {
    public namespace?: string;
    private 'image_name'?: string;
    private 'image_version'?: string;
    private 'image_id'?: string;
    private 'image_type'?: string;
    private 'latest_scan_time'?: number;
    private 'user_name'?: string;
    private 'service_type'?: string;
    public duration?: number;
    private 'desensitized_weak_passwords'?: string;
    public suggestion?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): ImageWeakPwdListInfoResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withImageName(imageName: string): ImageWeakPwdListInfoResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageVersion(imageVersion: string): ImageWeakPwdListInfoResponseInfo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageId(imageId: string): ImageWeakPwdListInfoResponseInfo {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageType(imageType: string): ImageWeakPwdListInfoResponseInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withLatestScanTime(latestScanTime: number): ImageWeakPwdListInfoResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withUserName(userName: string): ImageWeakPwdListInfoResponseInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withServiceType(serviceType: string): ImageWeakPwdListInfoResponseInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withDuration(duration: number): ImageWeakPwdListInfoResponseInfo {
        this['duration'] = duration;
        return this;
    }
    public withDesensitizedWeakPasswords(desensitizedWeakPasswords: string): ImageWeakPwdListInfoResponseInfo {
        this['desensitized_weak_passwords'] = desensitizedWeakPasswords;
        return this;
    }
    public set desensitizedWeakPasswords(desensitizedWeakPasswords: string  | undefined) {
        this['desensitized_weak_passwords'] = desensitizedWeakPasswords;
    }
    public get desensitizedWeakPasswords(): string | undefined {
        return this['desensitized_weak_passwords'];
    }
    public withSuggestion(suggestion: string): ImageWeakPwdListInfoResponseInfo {
        this['suggestion'] = suggestion;
        return this;
    }
}