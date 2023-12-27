

export class SharedConfig {
    private 'shared_type'?: SharedConfigSharedTypeEnum | string;
    private 'shared_state'?: SharedConfigSharedStateEnum | string;
    private 'expire_time'?: string;
    private 'allowed_project_ids'?: Array<string>;
    public constructor() { 
    }
    public withSharedType(sharedType: SharedConfigSharedTypeEnum | string): SharedConfig {
        this['shared_type'] = sharedType;
        return this;
    }
    public set sharedType(sharedType: SharedConfigSharedTypeEnum | string  | undefined) {
        this['shared_type'] = sharedType;
    }
    public get sharedType(): SharedConfigSharedTypeEnum | string | undefined {
        return this['shared_type'];
    }
    public withSharedState(sharedState: SharedConfigSharedStateEnum | string): SharedConfig {
        this['shared_state'] = sharedState;
        return this;
    }
    public set sharedState(sharedState: SharedConfigSharedStateEnum | string  | undefined) {
        this['shared_state'] = sharedState;
    }
    public get sharedState(): SharedConfigSharedStateEnum | string | undefined {
        return this['shared_state'];
    }
    public withExpireTime(expireTime: string): SharedConfig {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withAllowedProjectIds(allowedProjectIds: Array<string>): SharedConfig {
        this['allowed_project_ids'] = allowedProjectIds;
        return this;
    }
    public set allowedProjectIds(allowedProjectIds: Array<string>  | undefined) {
        this['allowed_project_ids'] = allowedProjectIds;
    }
    public get allowedProjectIds(): Array<string> | undefined {
        return this['allowed_project_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SharedConfigSharedTypeEnum {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC',
    SHARED = 'SHARED'
}
/**
    * @export
    * @enum {string}
    */
export enum SharedConfigSharedStateEnum {
    PUBLISHED = 'PUBLISHED',
    DRAFT = 'DRAFT',
    REVIEW = 'REVIEW'
}
