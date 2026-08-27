
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantVersionConfigResponse extends SdkResponse {
    public id?: string;
    private 'project_id'?: string;
    private 'version_config_id'?: string;
    private 'custom_release_note'?: string;
    private 'release_note'?: string;
    private 'version_download_url'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowTenantVersionConfigResponse {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ShowTenantVersionConfigResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVersionConfigId(versionConfigId: string): ShowTenantVersionConfigResponse {
        this['version_config_id'] = versionConfigId;
        return this;
    }
    public set versionConfigId(versionConfigId: string  | undefined) {
        this['version_config_id'] = versionConfigId;
    }
    public get versionConfigId(): string | undefined {
        return this['version_config_id'];
    }
    public withCustomReleaseNote(customReleaseNote: string): ShowTenantVersionConfigResponse {
        this['custom_release_note'] = customReleaseNote;
        return this;
    }
    public set customReleaseNote(customReleaseNote: string  | undefined) {
        this['custom_release_note'] = customReleaseNote;
    }
    public get customReleaseNote(): string | undefined {
        return this['custom_release_note'];
    }
    public withReleaseNote(releaseNote: string): ShowTenantVersionConfigResponse {
        this['release_note'] = releaseNote;
        return this;
    }
    public set releaseNote(releaseNote: string  | undefined) {
        this['release_note'] = releaseNote;
    }
    public get releaseNote(): string | undefined {
        return this['release_note'];
    }
    public withVersionDownloadUrl(versionDownloadUrl: string): ShowTenantVersionConfigResponse {
        this['version_download_url'] = versionDownloadUrl;
        return this;
    }
    public set versionDownloadUrl(versionDownloadUrl: string  | undefined) {
        this['version_download_url'] = versionDownloadUrl;
    }
    public get versionDownloadUrl(): string | undefined {
        return this['version_download_url'];
    }
    public withCreatedAt(createdAt: string): ShowTenantVersionConfigResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowTenantVersionConfigResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}