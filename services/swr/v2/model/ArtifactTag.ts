

export class ArtifactTag {
    public id?: number;
    private 'repository_id'?: number;
    private 'artifact_id'?: number;
    public name?: string;
    private 'push_time'?: string;
    private 'pull_time'?: string;
    public constructor() { 
    }
    public withId(id: number): ArtifactTag {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): ArtifactTag {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withArtifactId(artifactId: number): ArtifactTag {
        this['artifact_id'] = artifactId;
        return this;
    }
    public set artifactId(artifactId: number  | undefined) {
        this['artifact_id'] = artifactId;
    }
    public get artifactId(): number | undefined {
        return this['artifact_id'];
    }
    public withName(name: string): ArtifactTag {
        this['name'] = name;
        return this;
    }
    public withPushTime(pushTime: string): ArtifactTag {
        this['push_time'] = pushTime;
        return this;
    }
    public set pushTime(pushTime: string  | undefined) {
        this['push_time'] = pushTime;
    }
    public get pushTime(): string | undefined {
        return this['push_time'];
    }
    public withPullTime(pullTime: string): ArtifactTag {
        this['pull_time'] = pullTime;
        return this;
    }
    public set pullTime(pullTime: string  | undefined) {
        this['pull_time'] = pullTime;
    }
    public get pullTime(): string | undefined {
        return this['pull_time'];
    }
}