

export class ApiParam {
    public name?: string;
    private 'create_user'?: string;
    public description?: string;
    public tags?: Array<string>;
    private 'table_name'?: string;
    private 'publish_status_type'?: ApiParamPublishStatusTypeEnum | string;
    private 'api_specific_type_str'?: ApiParamApiSpecificTypeStrEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'authorization_status_type'?: ApiParamAuthorizationStatusTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): ApiParam {
        this['name'] = name;
        return this;
    }
    public withCreateUser(createUser: string): ApiParam {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withDescription(description: string): ApiParam {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): ApiParam {
        this['tags'] = tags;
        return this;
    }
    public withTableName(tableName: string): ApiParam {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withPublishStatusType(publishStatusType: ApiParamPublishStatusTypeEnum | string): ApiParam {
        this['publish_status_type'] = publishStatusType;
        return this;
    }
    public set publishStatusType(publishStatusType: ApiParamPublishStatusTypeEnum | string  | undefined) {
        this['publish_status_type'] = publishStatusType;
    }
    public get publishStatusType(): ApiParamPublishStatusTypeEnum | string | undefined {
        return this['publish_status_type'];
    }
    public withApiSpecificTypeStr(apiSpecificTypeStr: ApiParamApiSpecificTypeStrEnum | string): ApiParam {
        this['api_specific_type_str'] = apiSpecificTypeStr;
        return this;
    }
    public set apiSpecificTypeStr(apiSpecificTypeStr: ApiParamApiSpecificTypeStrEnum | string  | undefined) {
        this['api_specific_type_str'] = apiSpecificTypeStr;
    }
    public get apiSpecificTypeStr(): ApiParamApiSpecificTypeStrEnum | string | undefined {
        return this['api_specific_type_str'];
    }
    public withStartTime(startTime: string): ApiParam {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ApiParam {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withAuthorizationStatusType(authorizationStatusType: ApiParamAuthorizationStatusTypeEnum | string): ApiParam {
        this['authorization_status_type'] = authorizationStatusType;
        return this;
    }
    public set authorizationStatusType(authorizationStatusType: ApiParamAuthorizationStatusTypeEnum | string  | undefined) {
        this['authorization_status_type'] = authorizationStatusType;
    }
    public get authorizationStatusType(): ApiParamAuthorizationStatusTypeEnum | string | undefined {
        return this['authorization_status_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiParamPublishStatusTypeEnum {
    PUBLISHED = 'PUBLISHED',
    NOT_PUBLISHED = 'NOT_PUBLISHED'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiParamApiSpecificTypeStrEnum {
    API_SPECIFIC_TYPE_CONFIGURATION = 'API_SPECIFIC_TYPE_CONFIGURATION',
    API_SPECIFIC_TYPE_SCRIPT = 'API_SPECIFIC_TYPE_SCRIPT',
    API_SPECIFIC_TYPE_MYBATIS = 'API_SPECIFIC_TYPE_MYBATIS',
    API_SPECIFIC_TYPE_GROOVY = 'API_SPECIFIC_TYPE_GROOVY'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiParamAuthorizationStatusTypeEnum {
    NO_AUTHORIZATION_REQUIRED = 'NO_AUTHORIZATION_REQUIRED',
    UNAUTHORIZED = 'UNAUTHORIZED',
    AUTHORIZED = 'AUTHORIZED'
}
