

export class ListRepositoryTagRequest {
    private 'Content-Type'?: ListRepositoryTagRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public limit?: number;
    public marker?: string;
    public tag?: string;
    private 'order_column'?: string;
    private 'order_type'?: string;
    private 'with_manifest'?: boolean;
    public constructor(contentType?: string, namespace?: string, repository?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: ListRepositoryTagRequestContentTypeEnum | string): ListRepositoryTagRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListRepositoryTagRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListRepositoryTagRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListRepositoryTagRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListRepositoryTagRequest {
        this['repository'] = repository;
        return this;
    }
    public withLimit(limit: number): ListRepositoryTagRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRepositoryTagRequest {
        this['marker'] = marker;
        return this;
    }
    public withTag(tag: string): ListRepositoryTagRequest {
        this['tag'] = tag;
        return this;
    }
    public withOrderColumn(orderColumn: string): ListRepositoryTagRequest {
        this['order_column'] = orderColumn;
        return this;
    }
    public set orderColumn(orderColumn: string  | undefined) {
        this['order_column'] = orderColumn;
    }
    public get orderColumn(): string | undefined {
        return this['order_column'];
    }
    public withOrderType(orderType: string): ListRepositoryTagRequest {
        this['order_type'] = orderType;
        return this;
    }
    public set orderType(orderType: string  | undefined) {
        this['order_type'] = orderType;
    }
    public get orderType(): string | undefined {
        return this['order_type'];
    }
    public withWithManifest(withManifest: boolean): ListRepositoryTagRequest {
        this['with_manifest'] = withManifest;
        return this;
    }
    public set withManifest(withManifest: boolean  | undefined) {
        this['with_manifest'] = withManifest;
    }
    public get withManifest(): boolean | undefined {
        return this['with_manifest'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryTagRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
