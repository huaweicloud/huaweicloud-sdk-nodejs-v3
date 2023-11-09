import { AccessToken } from './AccessToken';


export class CreatePersonalAuthRequest {
    private 'repo_type'?: CreatePersonalAuthRequestRepoTypeEnum | string;
    public body?: AccessToken;
    public constructor(repoType?: string) { 
        this['repo_type'] = repoType;
    }
    public withRepoType(repoType: CreatePersonalAuthRequestRepoTypeEnum | string): CreatePersonalAuthRequest {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: CreatePersonalAuthRequestRepoTypeEnum | string  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): CreatePersonalAuthRequestRepoTypeEnum | string | undefined {
        return this['repo_type'];
    }
    public withBody(body: AccessToken): CreatePersonalAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePersonalAuthRequestRepoTypeEnum {
    GITHUB = 'github',
    GITLAB = 'gitlab',
    GITEE = 'gitee'
}
