

export class TenantVersionInfo {
    public id?: string;
    public version?: string;
    private 'version_type'?: number;
    private 'os_type'?: number;
    private 'release_note'?: string;
    private 'custom_release_note'?: string;
    private 'version_download_url'?: string;
    public description?: string;
    private 'version_status'?: string;
    private 'publish_time'?: string;
    private 'stop_time'?: string;
    public constructor() { 
    }
    public withId(id: string): TenantVersionInfo {
        this['id'] = id;
        return this;
    }
    public withVersion(version: string): TenantVersionInfo {
        this['version'] = version;
        return this;
    }
    public withVersionType(versionType: number): TenantVersionInfo {
        this['version_type'] = versionType;
        return this;
    }
    public set versionType(versionType: number  | undefined) {
        this['version_type'] = versionType;
    }
    public get versionType(): number | undefined {
        return this['version_type'];
    }
    public withOsType(osType: number): TenantVersionInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: number  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): number | undefined {
        return this['os_type'];
    }
    public withReleaseNote(releaseNote: string): TenantVersionInfo {
        this['release_note'] = releaseNote;
        return this;
    }
    public set releaseNote(releaseNote: string  | undefined) {
        this['release_note'] = releaseNote;
    }
    public get releaseNote(): string | undefined {
        return this['release_note'];
    }
    public withCustomReleaseNote(customReleaseNote: string): TenantVersionInfo {
        this['custom_release_note'] = customReleaseNote;
        return this;
    }
    public set customReleaseNote(customReleaseNote: string  | undefined) {
        this['custom_release_note'] = customReleaseNote;
    }
    public get customReleaseNote(): string | undefined {
        return this['custom_release_note'];
    }
    public withVersionDownloadUrl(versionDownloadUrl: string): TenantVersionInfo {
        this['version_download_url'] = versionDownloadUrl;
        return this;
    }
    public set versionDownloadUrl(versionDownloadUrl: string  | undefined) {
        this['version_download_url'] = versionDownloadUrl;
    }
    public get versionDownloadUrl(): string | undefined {
        return this['version_download_url'];
    }
    public withDescription(description: string): TenantVersionInfo {
        this['description'] = description;
        return this;
    }
    public withVersionStatus(versionStatus: string): TenantVersionInfo {
        this['version_status'] = versionStatus;
        return this;
    }
    public set versionStatus(versionStatus: string  | undefined) {
        this['version_status'] = versionStatus;
    }
    public get versionStatus(): string | undefined {
        return this['version_status'];
    }
    public withPublishTime(publishTime: string): TenantVersionInfo {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withStopTime(stopTime: string): TenantVersionInfo {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: string  | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime(): string | undefined {
        return this['stop_time'];
    }
}