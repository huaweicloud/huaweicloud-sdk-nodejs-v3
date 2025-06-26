

export class ArtifactTag {
    public id?: number;
    private 'repository_id'?: number;
    private 'artifact_id'?: number;
    public name?: string;
    private 'push_time'?: Date;
    private 'pull_time'?: Date;
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
    public withPushTime(pushTime: Date): ArtifactTag {
        this['push_time'] = pushTime;
        return this;
    }
    public set pushTime(pushTime: Date  | undefined) {
        this['push_time'] = pushTime;
    }
    public get pushTime(): Date | undefined {
        return this['push_time'];
    }
    public withPullTime(pullTime: Date): ArtifactTag {
        this['pull_time'] = pullTime;
        return this;
    }
    public set pullTime(pullTime: Date  | undefined) {
        this['pull_time'] = pullTime;
    }
    public get pullTime(): Date | undefined {
        return this['pull_time'];
    }
}