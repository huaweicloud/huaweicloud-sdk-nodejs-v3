import { AccessPassword } from './AccessPassword';


export class CreatePasswordAuthRequest {
    private 'repo_type'?: CreatePasswordAuthRequestRepoTypeEnum | string;
    public body?: AccessPassword;
    public constructor(repoType?: string) { 
        this['repo_type'] = repoType;
    }
    public withRepoType(repoType: CreatePasswordAuthRequestRepoTypeEnum | string): CreatePasswordAuthRequest {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: CreatePasswordAuthRequestRepoTypeEnum | string  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): CreatePasswordAuthRequestRepoTypeEnum | string | undefined {
        return this['repo_type'];
    }
    public withBody(body: AccessPassword): CreatePasswordAuthRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePasswordAuthRequestRepoTypeEnum {
    GITHUB = 'github',
    DEVCLOUD = 'devcloud',
    BITBUCKET = 'bitbucket'
}
