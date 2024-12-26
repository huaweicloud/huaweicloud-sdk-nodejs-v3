

export class AgentInstallScriptResponseInfo {
    private 'package_type'?: string;
    public cmd?: string;
    private 'package_download_url'?: string;
    public constructor() { 
    }
    public withPackageType(packageType: string): AgentInstallScriptResponseInfo {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withCmd(cmd: string): AgentInstallScriptResponseInfo {
        this['cmd'] = cmd;
        return this;
    }
    public withPackageDownloadUrl(packageDownloadUrl: string): AgentInstallScriptResponseInfo {
        this['package_download_url'] = packageDownloadUrl;
        return this;
    }
    public set packageDownloadUrl(packageDownloadUrl: string  | undefined) {
        this['package_download_url'] = packageDownloadUrl;
    }
    public get packageDownloadUrl(): string | undefined {
        return this['package_download_url'];
    }
}