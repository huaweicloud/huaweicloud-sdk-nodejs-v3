

export class VersionInfosResult {
    public version?: string;
    private 'kernel_version'?: string;
    public recommend?: boolean;
    public constructor() { 
    }
    public withVersion(version: string): VersionInfosResult {
        this['version'] = version;
        return this;
    }
    public withKernelVersion(kernelVersion: string): VersionInfosResult {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
    public withRecommend(recommend: boolean): VersionInfosResult {
        this['recommend'] = recommend;
        return this;
    }
}