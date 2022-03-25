

export class CreateRepoRequestBody {
    public repository: string;
    private 'is_public': boolean | undefined;
    public category?: CreateRepoRequestBodyCategoryEnum;
    public description?: string;
    public constructor(repository?: any, isPublic?: any) { 
        this['repository'] = repository;
        this['is_public'] = isPublic;
    }
    public withRepository(repository: string): CreateRepoRequestBody {
        this['repository'] = repository;
        return this;
    }
    public withIsPublic(isPublic: boolean): CreateRepoRequestBody {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic() {
        return this['is_public'];
    }
    public withCategory(category: CreateRepoRequestBodyCategoryEnum): CreateRepoRequestBody {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): CreateRepoRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRepoRequestBodyCategoryEnum {
    APP_SERVER = 'app_server',
    LINUX = 'linux',
    FRAMEWORK_APP = 'framework_app',
    DATABASE = 'database',
    LANG = 'lang',
    WINDOWS = 'windows',
    ARMS = 'arms',
    OTHER = 'other'
}
