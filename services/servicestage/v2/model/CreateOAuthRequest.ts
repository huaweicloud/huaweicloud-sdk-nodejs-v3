import { OAuth } from './OAuth';


export class CreateOAuthRequest {
    private 'repo_type'?: CreateOAuthRequestRepoTypeEnum | string;
    public tag?: string;
    public body?: OAuth;
    public constructor(repoType?: string) { 
        this['repo_type'] = repoType;
    }
    public withRepoType(repoType: CreateOAuthRequestRepoTypeEnum | string): CreateOAuthRequest {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: CreateOAuthRequestRepoTypeEnum | string  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): CreateOAuthRequestRepoTypeEnum | string | undefined {
        return this['repo_type'];
    }
    public withTag(tag: string): CreateOAuthRequest {
        this['tag'] = tag;
        return this;
    }
    public withBody(body: OAuth): CreateOAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateOAuthRequestRepoTypeEnum {
    GITHUB = 'github',
    GITLAB = 'gitlab',
    GITEE = 'gitee',
    BITBUCKET = 'bitbucket'
}
