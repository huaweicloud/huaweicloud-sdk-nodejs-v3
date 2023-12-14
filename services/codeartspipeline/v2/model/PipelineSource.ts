

export class PipelineSource {
    public scmType?: string;
    public hookFlag?: string;
    public defaultBranch?: string;
    public trigger?: string;
    public alias?: string;
    public displayName?: string;
    public repoName?: string;
    public repoId?: string;
    public repoOwner?: string;
    public gitUrl?: string;
    public webUrl?: string;
    public constructor(scmType?: string, hookFlag?: string, defaultBranch?: string, trigger?: string, alias?: string, displayName?: string, repoName?: string, repoId?: string, repoOwner?: string, gitUrl?: string, webUrl?: string) { 
        this['scmType'] = scmType;
        this['hookFlag'] = hookFlag;
        this['defaultBranch'] = defaultBranch;
        this['trigger'] = trigger;
        this['alias'] = alias;
        this['displayName'] = displayName;
        this['repoName'] = repoName;
        this['repoId'] = repoId;
        this['repoOwner'] = repoOwner;
        this['gitUrl'] = gitUrl;
        this['webUrl'] = webUrl;
    }
    public withScmType(scmType: string): PipelineSource {
        this['scmType'] = scmType;
        return this;
    }
    public withHookFlag(hookFlag: string): PipelineSource {
        this['hookFlag'] = hookFlag;
        return this;
    }
    public withDefaultBranch(defaultBranch: string): PipelineSource {
        this['defaultBranch'] = defaultBranch;
        return this;
    }
    public withTrigger(trigger: string): PipelineSource {
        this['trigger'] = trigger;
        return this;
    }
    public withAlias(alias: string): PipelineSource {
        this['alias'] = alias;
        return this;
    }
    public withDisplayName(displayName: string): PipelineSource {
        this['displayName'] = displayName;
        return this;
    }
    public withRepoName(repoName: string): PipelineSource {
        this['repoName'] = repoName;
        return this;
    }
    public withRepoId(repoId: string): PipelineSource {
        this['repoId'] = repoId;
        return this;
    }
    public withRepoOwner(repoOwner: string): PipelineSource {
        this['repoOwner'] = repoOwner;
        return this;
    }
    public withGitUrl(gitUrl: string): PipelineSource {
        this['gitUrl'] = gitUrl;
        return this;
    }
    public withWebUrl(webUrl: string): PipelineSource {
        this['webUrl'] = webUrl;
        return this;
    }
}