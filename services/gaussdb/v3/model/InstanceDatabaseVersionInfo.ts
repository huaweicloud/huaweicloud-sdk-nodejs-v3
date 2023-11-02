

export class InstanceDatabaseVersionInfo {
    private 'current_version'?: string;
    private 'current_kernel_version'?: string;
    private 'latest_version'?: string;
    private 'latest_kernel_version'?: string;
    public constructor() { 
    }
    public withCurrentVersion(currentVersion: string): InstanceDatabaseVersionInfo {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withCurrentKernelVersion(currentKernelVersion: string): InstanceDatabaseVersionInfo {
        this['current_kernel_version'] = currentKernelVersion;
        return this;
    }
    public set currentKernelVersion(currentKernelVersion: string  | undefined) {
        this['current_kernel_version'] = currentKernelVersion;
    }
    public get currentKernelVersion(): string | undefined {
        return this['current_kernel_version'];
    }
    public withLatestVersion(latestVersion: string): InstanceDatabaseVersionInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): string | undefined {
        return this['latest_version'];
    }
    public withLatestKernelVersion(latestKernelVersion: string): InstanceDatabaseVersionInfo {
        this['latest_kernel_version'] = latestKernelVersion;
        return this;
    }
    public set latestKernelVersion(latestKernelVersion: string  | undefined) {
        this['latest_kernel_version'] = latestKernelVersion;
    }
    public get latestKernelVersion(): string | undefined {
        return this['latest_kernel_version'];
    }
}