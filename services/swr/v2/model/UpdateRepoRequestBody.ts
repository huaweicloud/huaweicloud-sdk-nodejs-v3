

export class UpdateRepoRequestBody {
    private 'is_public'?: boolean;
    public category?: UpdateRepoRequestBodyCategoryEnum | string;
    public description?: string;
    public constructor(isPublic?: boolean) { 
        this['is_public'] = isPublic;
    }
    public withIsPublic(isPublic: boolean): UpdateRepoRequestBody {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withCategory(category: UpdateRepoRequestBodyCategoryEnum | string): UpdateRepoRequestBody {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): UpdateRepoRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRepoRequestBodyCategoryEnum {
    APP_SERVER = 'app_server',
    LINUX = 'linux',
    FRAMEWORK_APP = 'framework_app',
    DATABASE = 'database',
    LANG = 'lang',
    WINDOWS = 'windows',
    ARMS = 'arms',
    OTHER = 'other'
}
