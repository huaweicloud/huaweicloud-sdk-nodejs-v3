

export class ListAttentionResult {
    public id?: string;
    public domainId?: string;
    public repositoryId?: string;
    public repositoryName?: string;
    public format?: string;
    public policy?: string;
    public artifactId?: string;
    public path?: string;
    public modifiedUserName?: string;
    public modifiedUserId?: string;
    public userId?: string;
    public modifiedTime?: string;
    public region?: string;
    public constructor() { 
    }
    public withId(id: string): ListAttentionResult {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): ListAttentionResult {
        this['domainId'] = domainId;
        return this;
    }
    public withRepositoryId(repositoryId: string): ListAttentionResult {
        this['repositoryId'] = repositoryId;
        return this;
    }
    public withRepositoryName(repositoryName: string): ListAttentionResult {
        this['repositoryName'] = repositoryName;
        return this;
    }
    public withFormat(format: string): ListAttentionResult {
        this['format'] = format;
        return this;
    }
    public withPolicy(policy: string): ListAttentionResult {
        this['policy'] = policy;
        return this;
    }
    public withArtifactId(artifactId: string): ListAttentionResult {
        this['artifactId'] = artifactId;
        return this;
    }
    public withPath(path: string): ListAttentionResult {
        this['path'] = path;
        return this;
    }
    public withModifiedUserName(modifiedUserName: string): ListAttentionResult {
        this['modifiedUserName'] = modifiedUserName;
        return this;
    }
    public withModifiedUserId(modifiedUserId: string): ListAttentionResult {
        this['modifiedUserId'] = modifiedUserId;
        return this;
    }
    public withUserId(userId: string): ListAttentionResult {
        this['userId'] = userId;
        return this;
    }
    public withModifiedTime(modifiedTime: string): ListAttentionResult {
        this['modifiedTime'] = modifiedTime;
        return this;
    }
    public withRegion(region: string): ListAttentionResult {
        this['region'] = region;
        return this;
    }
}