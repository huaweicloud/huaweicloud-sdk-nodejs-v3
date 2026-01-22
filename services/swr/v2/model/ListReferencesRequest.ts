

export class ListReferencesRequest {
    private 'Content-Type'?: ListReferencesRequestContentTypeEnum | string;
    public namespace?: string;
    public repository?: string;
    public tag?: string;
    public limit?: number;
    public marker?: string;
    public constructor(contentType?: string, namespace?: string, repository?: string, tag?: string) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
        this['tag'] = tag;
    }
    public withContentType(contentType: ListReferencesRequestContentTypeEnum | string): ListReferencesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListReferencesRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListReferencesRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListReferencesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ListReferencesRequest {
        this['repository'] = repository;
        return this;
    }
    public withTag(tag: string): ListReferencesRequest {
        this['tag'] = tag;
        return this;
    }
    public withLimit(limit: number): ListReferencesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListReferencesRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListReferencesRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
