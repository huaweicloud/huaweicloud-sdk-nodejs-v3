

export class RelatedCommitVo {
    public id?: string;
    public iamId?: string;
    public userName?: string;
    public repositoryId?: string;
    public type?: string;
    public userId?: string;
    public branchName?: string;
    public commitId?: string;
    public commitShortId?: string;
    public commitMsg?: string;
    public commitUrl?: string;
    public commitType?: string;
    public relatedId?: string;
    public createAt?: string;
    public updateAt?: string;
    public relatedUrl?: string;
    public message?: string;
    public constructor() { 
    }
    public withId(id: string): RelatedCommitVo {
        this['id'] = id;
        return this;
    }
    public withIamId(iamId: string): RelatedCommitVo {
        this['iamId'] = iamId;
        return this;
    }
    public withUserName(userName: string): RelatedCommitVo {
        this['userName'] = userName;
        return this;
    }
    public withRepositoryId(repositoryId: string): RelatedCommitVo {
        this['repositoryId'] = repositoryId;
        return this;
    }
    public withType(type: string): RelatedCommitVo {
        this['type'] = type;
        return this;
    }
    public withUserId(userId: string): RelatedCommitVo {
        this['userId'] = userId;
        return this;
    }
    public withBranchName(branchName: string): RelatedCommitVo {
        this['branchName'] = branchName;
        return this;
    }
    public withCommitId(commitId: string): RelatedCommitVo {
        this['commitId'] = commitId;
        return this;
    }
    public withCommitShortId(commitShortId: string): RelatedCommitVo {
        this['commitShortId'] = commitShortId;
        return this;
    }
    public withCommitMsg(commitMsg: string): RelatedCommitVo {
        this['commitMsg'] = commitMsg;
        return this;
    }
    public withCommitUrl(commitUrl: string): RelatedCommitVo {
        this['commitUrl'] = commitUrl;
        return this;
    }
    public withCommitType(commitType: string): RelatedCommitVo {
        this['commitType'] = commitType;
        return this;
    }
    public withRelatedId(relatedId: string): RelatedCommitVo {
        this['relatedId'] = relatedId;
        return this;
    }
    public withCreateAt(createAt: string): RelatedCommitVo {
        this['createAt'] = createAt;
        return this;
    }
    public withUpdateAt(updateAt: string): RelatedCommitVo {
        this['updateAt'] = updateAt;
        return this;
    }
    public withRelatedUrl(relatedUrl: string): RelatedCommitVo {
        this['relatedUrl'] = relatedUrl;
        return this;
    }
    public withMessage(message: string): RelatedCommitVo {
        this['message'] = message;
        return this;
    }
}