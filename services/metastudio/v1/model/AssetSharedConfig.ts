

export class AssetSharedConfig {
    private 'shared_type'?: AssetSharedConfigSharedTypeEnum | string;
    private 'expire_time'?: string;
    private 'allowed_project_ids'?: Array<string>;
    public constructor() { 
    }
    public withSharedType(sharedType: AssetSharedConfigSharedTypeEnum | string): AssetSharedConfig {
        this['shared_type'] = sharedType;
        return this;
    }
    public set sharedType(sharedType: AssetSharedConfigSharedTypeEnum | string  | undefined) {
        this['shared_type'] = sharedType;
    }
    public get sharedType(): AssetSharedConfigSharedTypeEnum | string | undefined {
        return this['shared_type'];
    }
    public withExpireTime(expireTime: string): AssetSharedConfig {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withAllowedProjectIds(allowedProjectIds: Array<string>): AssetSharedConfig {
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
export enum AssetSharedConfigSharedTypeEnum {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC',
    SHARED = 'SHARED'
}
