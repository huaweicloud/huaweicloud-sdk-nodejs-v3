

export class ListRepositoryTemplatesRequest {
    public offset?: number;
    public limit?: number;
    public platform?: string;
    public pipeline?: ListRepositoryTemplatesRequestPipelineEnum | string;
    public type?: ListRepositoryTemplatesRequestTypeEnum | string;
    public search?: string;
    private 'enter_type'?: string;
    private 'date_order'?: ListRepositoryTemplatesRequestDateOrderEnum | string;
    public language?: string;
    private 'project_id'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withOffset(offset: number): ListRepositoryTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withPlatform(platform: string): ListRepositoryTemplatesRequest {
        this['platform'] = platform;
        return this;
    }
    public withPipeline(pipeline: ListRepositoryTemplatesRequestPipelineEnum | string): ListRepositoryTemplatesRequest {
        this['pipeline'] = pipeline;
        return this;
    }
    public withType(type: ListRepositoryTemplatesRequestTypeEnum | string): ListRepositoryTemplatesRequest {
        this['type'] = type;
        return this;
    }
    public withSearch(search: string): ListRepositoryTemplatesRequest {
        this['search'] = search;
        return this;
    }
    public withEnterType(enterType: string): ListRepositoryTemplatesRequest {
        this['enter_type'] = enterType;
        return this;
    }
    public set enterType(enterType: string  | undefined) {
        this['enter_type'] = enterType;
    }
    public get enterType(): string | undefined {
        return this['enter_type'];
    }
    public withDateOrder(dateOrder: ListRepositoryTemplatesRequestDateOrderEnum | string): ListRepositoryTemplatesRequest {
        this['date_order'] = dateOrder;
        return this;
    }
    public set dateOrder(dateOrder: ListRepositoryTemplatesRequestDateOrderEnum | string  | undefined) {
        this['date_order'] = dateOrder;
    }
    public get dateOrder(): ListRepositoryTemplatesRequestDateOrderEnum | string | undefined {
        return this['date_order'];
    }
    public withLanguage(language: string): ListRepositoryTemplatesRequest {
        this['language'] = language;
        return this;
    }
    public withProjectId(projectId: string): ListRepositoryTemplatesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryTemplatesRequestPipelineEnum {
    SUPPORTPIPELINE = 'SupportPipeline',
    UNSUPPORTEDPIPELINE = 'UnsupportedPipeline'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryTemplatesRequestTypeEnum {
    SYSTEMUSER = 'SYSTEM,USER',
    SYSTEM = 'SYSTEM',
    USER = 'USER'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryTemplatesRequestDateOrderEnum {
    UP = 'up',
    DOWN = 'down'
}
