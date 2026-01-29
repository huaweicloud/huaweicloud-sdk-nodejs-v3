

export class ShowRepositoryRolesPrivilegeRequest {
    private 'repo_id'?: string;
    private 'x-language'?: ShowRepositoryRolesPrivilegeRequestXLanguageEnum | string;
    public constructor(repoId?: string) { 
        this['repo_id'] = repoId;
    }
    public withRepoId(repoId: string): ShowRepositoryRolesPrivilegeRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withXLanguage(xLanguage: ShowRepositoryRolesPrivilegeRequestXLanguageEnum | string): ShowRepositoryRolesPrivilegeRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowRepositoryRolesPrivilegeRequestXLanguageEnum | string  | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage(): ShowRepositoryRolesPrivilegeRequestXLanguageEnum | string | undefined {
        return this['x-language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryRolesPrivilegeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
