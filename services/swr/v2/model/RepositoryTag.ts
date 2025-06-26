

export class RepositoryTag {
    public name?: string;
    private 'artifact_id'?: number;
    public digest?: string;
    public id?: number;
    private 'repository_id'?: number;
    public type?: string;
    private 'namespace_id'?: number;
    private 'media_type'?: string;
    private 'manifest_media_type'?: string;
    private 'pull_time'?: string;
    private 'push_time'?: string;
    public size?: number;
    public constructor() { 
    }
    public withName(name: string): RepositoryTag {
        this['name'] = name;
        return this;
    }
    public withArtifactId(artifactId: number): RepositoryTag {
        this['artifact_id'] = artifactId;
        return this;
    }
    public set artifactId(artifactId: number  | undefined) {
        this['artifact_id'] = artifactId;
    }
    public get artifactId(): number | undefined {
        return this['artifact_id'];
    }
    public withDigest(digest: string): RepositoryTag {
        this['digest'] = digest;
        return this;
    }
    public withId(id: number): RepositoryTag {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): RepositoryTag {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withType(type: string): RepositoryTag {
        this['type'] = type;
        return this;
    }
    public withNamespaceId(namespaceId: number): RepositoryTag {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withMediaType(mediaType: string): RepositoryTag {
        this['media_type'] = mediaType;
        return this;
    }
    public set mediaType(mediaType: string  | undefined) {
        this['media_type'] = mediaType;
    }
    public get mediaType(): string | undefined {
        return this['media_type'];
    }
    public withManifestMediaType(manifestMediaType: string): RepositoryTag {
        this['manifest_media_type'] = manifestMediaType;
        return this;
    }
    public set manifestMediaType(manifestMediaType: string  | undefined) {
        this['manifest_media_type'] = manifestMediaType;
    }
    public get manifestMediaType(): string | undefined {
        return this['manifest_media_type'];
    }
    public withPullTime(pullTime: string): RepositoryTag {
        this['pull_time'] = pullTime;
        return this;
    }
    public set pullTime(pullTime: string  | undefined) {
        this['pull_time'] = pullTime;
    }
    public get pullTime(): string | undefined {
        return this['pull_time'];
    }
    public withPushTime(pushTime: string): RepositoryTag {
        this['push_time'] = pushTime;
        return this;
    }
    public set pushTime(pushTime: string  | undefined) {
        this['push_time'] = pushTime;
    }
    public get pushTime(): string | undefined {
        return this['push_time'];
    }
    public withSize(size: number): RepositoryTag {
        this['size'] = size;
        return this;
    }
}