

export class ListRepoAccessoriesRequest {
    private 'Content-Type'?: ListRepoAccessoriesRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public tag?: string;
    public limit?: number;
    public offset?: number;
    public constructor(contentType?: string, namespace?: string, repository?: string, tag?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['tag'] = tag;
    }
    public withContentType(contentType: ListRepoAccessoriesRequestContentTypeEnum | string): ListRepoAccessoriesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListRepoAccessoriesRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListRepoAccessoriesRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListRepoAccessoriesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListRepoAccessoriesRequest {
        this['repository'] = repository;
        return this;
    }
    public withTag(tag: string): ListRepoAccessoriesRequest {
        this['tag'] = tag;
        return this;
    }
    public withLimit(limit: number): ListRepoAccessoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRepoAccessoriesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepoAccessoriesRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
