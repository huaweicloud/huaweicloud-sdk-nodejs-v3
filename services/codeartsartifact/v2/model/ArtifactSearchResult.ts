

export class ArtifactSearchResult {
    public name?: string;
    public relativePath?: string;
    public repo?: string;
    public repoName?: string;
    public displayName?: string;
    public repoType?: string;
    public createdBy?: string;
    public createdUserName?: string;
    public created?: string;
    public modified?: string;
    public oldRepoId?: string;
    public constructor() { 
    }
    public withName(name: string): ArtifactSearchResult {
        this['name'] = name;
        return this;
    }
    public withRelativePath(relativePath: string): ArtifactSearchResult {
        this['relativePath'] = relativePath;
        return this;
    }
    public withRepo(repo: string): ArtifactSearchResult {
        this['repo'] = repo;
        return this;
    }
    public withRepoName(repoName: string): ArtifactSearchResult {
        this['repoName'] = repoName;
        return this;
    }
    public withDisplayName(displayName: string): ArtifactSearchResult {
        this['displayName'] = displayName;
        return this;
    }
    public withRepoType(repoType: string): ArtifactSearchResult {
        this['repoType'] = repoType;
        return this;
    }
    public withCreatedBy(createdBy: string): ArtifactSearchResult {
        this['createdBy'] = createdBy;
        return this;
    }
    public withCreatedUserName(createdUserName: string): ArtifactSearchResult {
        this['createdUserName'] = createdUserName;
        return this;
    }
    public withCreated(created: string): ArtifactSearchResult {
        this['created'] = created;
        return this;
    }
    public withModified(modified: string): ArtifactSearchResult {
        this['modified'] = modified;
        return this;
    }
    public withOldRepoId(oldRepoId: string): ArtifactSearchResult {
        this['oldRepoId'] = oldRepoId;
        return this;
    }
}