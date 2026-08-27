

export class ListTenantVersionConfigRequest {
    private 'version_type'?: number;
    public version?: string;
    private 'os_type'?: number;
    private 'version_status'?: string;
    private 'publish_time_begin'?: string;
    private 'publish_time_end'?: string;
    private 'release_note'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(versionType?: number) { 
        this['version_type'] = versionType;
    }
    public withVersionType(versionType: number): ListTenantVersionConfigRequest {
        this['version_type'] = versionType;
        return this;
    }
    public set versionType(versionType: number  | undefined) {
        this['version_type'] = versionType;
    }
    public get versionType(): number | undefined {
        return this['version_type'];
    }
    public withVersion(version: string): ListTenantVersionConfigRequest {
        this['version'] = version;
        return this;
    }
    public withOsType(osType: number): ListTenantVersionConfigRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: number  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): number | undefined {
        return this['os_type'];
    }
    public withVersionStatus(versionStatus: string): ListTenantVersionConfigRequest {
        this['version_status'] = versionStatus;
        return this;
    }
    public set versionStatus(versionStatus: string  | undefined) {
        this['version_status'] = versionStatus;
    }
    public get versionStatus(): string | undefined {
        return this['version_status'];
    }
    public withPublishTimeBegin(publishTimeBegin: string): ListTenantVersionConfigRequest {
        this['publish_time_begin'] = publishTimeBegin;
        return this;
    }
    public set publishTimeBegin(publishTimeBegin: string  | undefined) {
        this['publish_time_begin'] = publishTimeBegin;
    }
    public get publishTimeBegin(): string | undefined {
        return this['publish_time_begin'];
    }
    public withPublishTimeEnd(publishTimeEnd: string): ListTenantVersionConfigRequest {
        this['publish_time_end'] = publishTimeEnd;
        return this;
    }
    public set publishTimeEnd(publishTimeEnd: string  | undefined) {
        this['publish_time_end'] = publishTimeEnd;
    }
    public get publishTimeEnd(): string | undefined {
        return this['publish_time_end'];
    }
    public withReleaseNote(releaseNote: string): ListTenantVersionConfigRequest {
        this['release_note'] = releaseNote;
        return this;
    }
    public set releaseNote(releaseNote: string  | undefined) {
        this['release_note'] = releaseNote;
    }
    public get releaseNote(): string | undefined {
        return this['release_note'];
    }
    public withOffset(offset: number): ListTenantVersionConfigRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTenantVersionConfigRequest {
        this['limit'] = limit;
        return this;
    }
}