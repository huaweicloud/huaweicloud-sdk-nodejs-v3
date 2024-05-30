

export class MallParaDTO {
    private 'auth_type'?: MallParaDTOAuthTypeEnum | string;
    public visibility?: MallParaDTOVisibilityEnum | string;
    private 'market_sort_type'?: MallParaDTOMarketSortTypeEnum | string;
    private 'asc_or_desc'?: MallParaDTOAscOrDescEnum | string;
    public offset?: number;
    public limit?: number;
    private 'is_owner'?: boolean;
    private 'is_authorized'?: boolean;
    private 'is_update_recently'?: boolean;
    private 'is_release_recently'?: boolean;
    private 'is_hot_recently'?: boolean;
    private 'success_and_failure_rate'?: boolean;
    public constructor() { 
    }
    public withAuthType(authType: MallParaDTOAuthTypeEnum | string): MallParaDTO {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: MallParaDTOAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): MallParaDTOAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withVisibility(visibility: MallParaDTOVisibilityEnum | string): MallParaDTO {
        this['visibility'] = visibility;
        return this;
    }
    public withMarketSortType(marketSortType: MallParaDTOMarketSortTypeEnum | string): MallParaDTO {
        this['market_sort_type'] = marketSortType;
        return this;
    }
    public set marketSortType(marketSortType: MallParaDTOMarketSortTypeEnum | string  | undefined) {
        this['market_sort_type'] = marketSortType;
    }
    public get marketSortType(): MallParaDTOMarketSortTypeEnum | string | undefined {
        return this['market_sort_type'];
    }
    public withAscOrDesc(ascOrDesc: MallParaDTOAscOrDescEnum | string): MallParaDTO {
        this['asc_or_desc'] = ascOrDesc;
        return this;
    }
    public set ascOrDesc(ascOrDesc: MallParaDTOAscOrDescEnum | string  | undefined) {
        this['asc_or_desc'] = ascOrDesc;
    }
    public get ascOrDesc(): MallParaDTOAscOrDescEnum | string | undefined {
        return this['asc_or_desc'];
    }
    public withOffset(offset: number): MallParaDTO {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): MallParaDTO {
        this['limit'] = limit;
        return this;
    }
    public withIsOwner(isOwner: boolean): MallParaDTO {
        this['is_owner'] = isOwner;
        return this;
    }
    public set isOwner(isOwner: boolean  | undefined) {
        this['is_owner'] = isOwner;
    }
    public get isOwner(): boolean | undefined {
        return this['is_owner'];
    }
    public withIsAuthorized(isAuthorized: boolean): MallParaDTO {
        this['is_authorized'] = isAuthorized;
        return this;
    }
    public set isAuthorized(isAuthorized: boolean  | undefined) {
        this['is_authorized'] = isAuthorized;
    }
    public get isAuthorized(): boolean | undefined {
        return this['is_authorized'];
    }
    public withIsUpdateRecently(isUpdateRecently: boolean): MallParaDTO {
        this['is_update_recently'] = isUpdateRecently;
        return this;
    }
    public set isUpdateRecently(isUpdateRecently: boolean  | undefined) {
        this['is_update_recently'] = isUpdateRecently;
    }
    public get isUpdateRecently(): boolean | undefined {
        return this['is_update_recently'];
    }
    public withIsReleaseRecently(isReleaseRecently: boolean): MallParaDTO {
        this['is_release_recently'] = isReleaseRecently;
        return this;
    }
    public set isReleaseRecently(isReleaseRecently: boolean  | undefined) {
        this['is_release_recently'] = isReleaseRecently;
    }
    public get isReleaseRecently(): boolean | undefined {
        return this['is_release_recently'];
    }
    public withIsHotRecently(isHotRecently: boolean): MallParaDTO {
        this['is_hot_recently'] = isHotRecently;
        return this;
    }
    public set isHotRecently(isHotRecently: boolean  | undefined) {
        this['is_hot_recently'] = isHotRecently;
    }
    public get isHotRecently(): boolean | undefined {
        return this['is_hot_recently'];
    }
    public withSuccessAndFailureRate(successAndFailureRate: boolean): MallParaDTO {
        this['success_and_failure_rate'] = successAndFailureRate;
        return this;
    }
    public set successAndFailureRate(successAndFailureRate: boolean  | undefined) {
        this['success_and_failure_rate'] = successAndFailureRate;
    }
    public get successAndFailureRate(): boolean | undefined {
        return this['success_and_failure_rate'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MallParaDTOAuthTypeEnum {
    APP = 'APP',
    IAM = 'IAM',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum MallParaDTOVisibilityEnum {
    WORKSPACE = 'WORKSPACE',
    PROJECT = 'PROJECT',
    DOMAIN = 'DOMAIN',
    SPECIFIC_PROJECT = 'SPECIFIC_PROJECT'
}
/**
    * @export
    * @enum {string}
    */
export enum MallParaDTOMarketSortTypeEnum {
    UPDATETIME = 'updateTime',
    CREATETIME = 'createTime'
}
/**
    * @export
    * @enum {string}
    */
export enum MallParaDTOAscOrDescEnum {
    ASC = 'asc',
    DESC = 'desc'
}
