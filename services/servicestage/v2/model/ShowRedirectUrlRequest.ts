

export class ShowRedirectUrlRequest {
    private 'repo_type'?: ShowRedirectUrlRequestRepoTypeEnum | string;
    public tag?: string;
    public constructor(repoType?: string) { 
        this['repo_type'] = repoType;
    }
    public withRepoType(repoType: ShowRedirectUrlRequestRepoTypeEnum | string): ShowRedirectUrlRequest {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: ShowRedirectUrlRequestRepoTypeEnum | string  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): ShowRedirectUrlRequestRepoTypeEnum | string | undefined {
        return this['repo_type'];
    }
    public withTag(tag: string): ShowRedirectUrlRequest {
        this['tag'] = tag;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRedirectUrlRequestRepoTypeEnum {
    GITHUB = 'github',
    GITLAB = 'gitlab',
    GITEE = 'gitee',
    BITBUCKET = 'bitbucket'
}
