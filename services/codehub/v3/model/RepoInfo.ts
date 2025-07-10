

export class RepoInfo {
    public createAt?: string;
    public groupName?: string;
    public httpUrl?: string;
    public id?: string;
    public name?: string;
    public projectId?: string;
    public projectIsDelete?: string;
    public repoId?: string;
    public sshUrl?: string;
    public visibilityLevel?: number;
    public webUrl?: string;
    public constructor() { 
    }
    public withCreateAt(createAt: string): RepoInfo {
        this['createAt'] = createAt;
        return this;
    }
    public withGroupName(groupName: string): RepoInfo {
        this['groupName'] = groupName;
        return this;
    }
    public withHttpUrl(httpUrl: string): RepoInfo {
        this['httpUrl'] = httpUrl;
        return this;
    }
    public withId(id: string): RepoInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepoInfo {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): RepoInfo {
        this['projectId'] = projectId;
        return this;
    }
    public withProjectIsDelete(projectIsDelete: string): RepoInfo {
        this['projectIsDelete'] = projectIsDelete;
        return this;
    }
    public withRepoId(repoId: string): RepoInfo {
        this['repoId'] = repoId;
        return this;
    }
    public withSshUrl(sshUrl: string): RepoInfo {
        this['sshUrl'] = sshUrl;
        return this;
    }
    public withVisibilityLevel(visibilityLevel: number): RepoInfo {
        this['visibilityLevel'] = visibilityLevel;
        return this;
    }
    public withWebUrl(webUrl: string): RepoInfo {
        this['webUrl'] = webUrl;
        return this;
    }
}