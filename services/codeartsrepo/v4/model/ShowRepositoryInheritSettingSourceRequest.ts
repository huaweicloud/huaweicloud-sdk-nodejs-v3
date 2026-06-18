

export class ShowRepositoryInheritSettingSourceRequest {
    private 'repository_id'?: number;
    public name?: ShowRepositoryInheritSettingSourceRequestNameEnum | string;
    public constructor(repositoryId?: number, name?: string) { 
        this['repository_id'] = repositoryId;
        this['name'] = name;
    }
    public withRepositoryId(repositoryId: number): ShowRepositoryInheritSettingSourceRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withName(name: ShowRepositoryInheritSettingSourceRequestNameEnum | string): ShowRepositoryInheritSettingSourceRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryInheritSettingSourceRequestNameEnum {
    PROTECTED_BRANCHES = 'protected_branches',
    PROTECTED_TAGS = 'protected_tags',
    MERGE_REQUESTS = 'merge_requests'
}
