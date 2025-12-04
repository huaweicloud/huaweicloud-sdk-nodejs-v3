import { Artifact } from './Artifact';
import { ArtifactTag } from './ArtifactTag';
import { NativeReportSummary } from './NativeReportSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceArtifactResponse extends SdkResponse {
    public digest?: string;
    public id?: number;
    private 'repository_id'?: number;
    private 'repository_name'?: string;
    public type?: string;
    private 'namespace_id'?: number;
    private 'media_type'?: string;
    private 'manifest_media_type'?: string;
    private 'pull_time'?: string;
    private 'push_time'?: string;
    public size?: number;
    public tags?: Array<ArtifactTag>;
    private 'scan_overview'?: { [key: string]: NativeReportSummary; };
    public constructor() { 
        super();
    }
    public withDigest(digest: string): ShowInstanceArtifactResponse {
        this['digest'] = digest;
        return this;
    }
    public withId(id: number): ShowInstanceArtifactResponse {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): ShowInstanceArtifactResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRepositoryName(repositoryName: string): ShowInstanceArtifactResponse {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withType(type: string): ShowInstanceArtifactResponse {
        this['type'] = type;
        return this;
    }
    public withNamespaceId(namespaceId: number): ShowInstanceArtifactResponse {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withMediaType(mediaType: string): ShowInstanceArtifactResponse {
        this['media_type'] = mediaType;
        return this;
    }
    public set mediaType(mediaType: string  | undefined) {
        this['media_type'] = mediaType;
    }
    public get mediaType(): string | undefined {
        return this['media_type'];
    }
    public withManifestMediaType(manifestMediaType: string): ShowInstanceArtifactResponse {
        this['manifest_media_type'] = manifestMediaType;
        return this;
    }
    public set manifestMediaType(manifestMediaType: string  | undefined) {
        this['manifest_media_type'] = manifestMediaType;
    }
    public get manifestMediaType(): string | undefined {
        return this['manifest_media_type'];
    }
    public withPullTime(pullTime: string): ShowInstanceArtifactResponse {
        this['pull_time'] = pullTime;
        return this;
    }
    public set pullTime(pullTime: string  | undefined) {
        this['pull_time'] = pullTime;
    }
    public get pullTime(): string | undefined {
        return this['pull_time'];
    }
    public withPushTime(pushTime: string): ShowInstanceArtifactResponse {
        this['push_time'] = pushTime;
        return this;
    }
    public set pushTime(pushTime: string  | undefined) {
        this['push_time'] = pushTime;
    }
    public get pushTime(): string | undefined {
        return this['push_time'];
    }
    public withSize(size: number): ShowInstanceArtifactResponse {
        this['size'] = size;
        return this;
    }
    public withTags(tags: Array<ArtifactTag>): ShowInstanceArtifactResponse {
        this['tags'] = tags;
        return this;
    }
    public withScanOverview(scanOverview: { [key: string]: NativeReportSummary; }): ShowInstanceArtifactResponse {
        this['scan_overview'] = scanOverview;
        return this;
    }
    public set scanOverview(scanOverview: { [key: string]: NativeReportSummary; }  | undefined) {
        this['scan_overview'] = scanOverview;
    }
    public get scanOverview(): { [key: string]: NativeReportSummary; } | undefined {
        return this['scan_overview'];
    }
}