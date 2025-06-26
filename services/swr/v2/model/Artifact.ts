import { ArtifactTag } from './ArtifactTag';


export class Artifact {
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
    public constructor() { 
    }
    public withDigest(digest: string): Artifact {
        this['digest'] = digest;
        return this;
    }
    public withId(id: number): Artifact {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): Artifact {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRepositoryName(repositoryName: string): Artifact {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withType(type: string): Artifact {
        this['type'] = type;
        return this;
    }
    public withNamespaceId(namespaceId: number): Artifact {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withMediaType(mediaType: string): Artifact {
        this['media_type'] = mediaType;
        return this;
    }
    public set mediaType(mediaType: string  | undefined) {
        this['media_type'] = mediaType;
    }
    public get mediaType(): string | undefined {
        return this['media_type'];
    }
    public withManifestMediaType(manifestMediaType: string): Artifact {
        this['manifest_media_type'] = manifestMediaType;
        return this;
    }
    public set manifestMediaType(manifestMediaType: string  | undefined) {
        this['manifest_media_type'] = manifestMediaType;
    }
    public get manifestMediaType(): string | undefined {
        return this['manifest_media_type'];
    }
    public withPullTime(pullTime: string): Artifact {
        this['pull_time'] = pullTime;
        return this;
    }
    public set pullTime(pullTime: string  | undefined) {
        this['pull_time'] = pullTime;
    }
    public get pullTime(): string | undefined {
        return this['pull_time'];
    }
    public withPushTime(pushTime: string): Artifact {
        this['push_time'] = pushTime;
        return this;
    }
    public set pushTime(pushTime: string  | undefined) {
        this['push_time'] = pushTime;
    }
    public get pushTime(): string | undefined {
        return this['push_time'];
    }
    public withSize(size: number): Artifact {
        this['size'] = size;
        return this;
    }
    public withTags(tags: Array<ArtifactTag>): Artifact {
        this['tags'] = tags;
        return this;
    }
}