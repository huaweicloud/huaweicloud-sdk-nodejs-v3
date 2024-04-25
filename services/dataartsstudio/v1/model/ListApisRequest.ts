

export class ListApisRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApisRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'x-return-publish-messages'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public description?: string;
    private 'create_user'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public tags?: Array<string>;
    private 'api_type'?: ListApisRequestApiTypeEnum | string;
    private 'publish_status'?: ListApisRequestPublishStatusEnum | string;
    private 'table_name'?: string;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ListApisRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApisRequestDlmTypeEnum | string): ListApisRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApisRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApisRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApisRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXReturnPublishMessages(xReturnPublishMessages: string): ListApisRequest {
        this['x-return-publish-messages'] = xReturnPublishMessages;
        return this;
    }
    public set xReturnPublishMessages(xReturnPublishMessages: string  | undefined) {
        this['x-return-publish-messages'] = xReturnPublishMessages;
    }
    public get xReturnPublishMessages(): string | undefined {
        return this['x-return-publish-messages'];
    }
    public withOffset(offset: number): ListApisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApisRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListApisRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListApisRequest {
        this['description'] = description;
        return this;
    }
    public withCreateUser(createUser: string): ListApisRequest {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withStartTime(startTime: string): ListApisRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListApisRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTags(tags: Array<string>): ListApisRequest {
        this['tags'] = tags;
        return this;
    }
    public withApiType(apiType: ListApisRequestApiTypeEnum | string): ListApisRequest {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: ListApisRequestApiTypeEnum | string  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): ListApisRequestApiTypeEnum | string | undefined {
        return this['api_type'];
    }
    public withPublishStatus(publishStatus: ListApisRequestPublishStatusEnum | string): ListApisRequest {
        this['publish_status'] = publishStatus;
        return this;
    }
    public set publishStatus(publishStatus: ListApisRequestPublishStatusEnum | string  | undefined) {
        this['publish_status'] = publishStatus;
    }
    public get publishStatus(): ListApisRequestPublishStatusEnum | string | undefined {
        return this['publish_status'];
    }
    public withTableName(tableName: string): ListApisRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApisRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApisRequestApiTypeEnum {
    API_SPECIFIC_TYPE_CONFIGURATION = 'API_SPECIFIC_TYPE_CONFIGURATION',
    API_SPECIFIC_TYPE_SCRIPT = 'API_SPECIFIC_TYPE_SCRIPT',
    API_SPECIFIC_TYPE_REGISTER = 'API_SPECIFIC_TYPE_REGISTER',
    API_SPECIFIC_TYPE_MYBATIS = 'API_SPECIFIC_TYPE_MYBATIS',
    API_SPECIFIC_TYPE_GROOVY = 'API_SPECIFIC_TYPE_GROOVY'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApisRequestPublishStatusEnum {
    PUBLISHED = 'PUBLISHED',
    NOT_PUBLISHED = 'NOT_PUBLISHED'
}
