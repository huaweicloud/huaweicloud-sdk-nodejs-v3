

export class ListRepoDetailsRequest {
    private 'Content-Type'?: ListRepoDetailsRequestContentTypeEnum | string;
    public namespace?: string;
    public name?: string;
    public category?: string;
    public limit?: number;
    public marker?: number;
    private 'is_public'?: boolean;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListRepoDetailsRequestContentTypeEnum | string): ListRepoDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListRepoDetailsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListRepoDetailsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListRepoDetailsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ListRepoDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withCategory(category: string): ListRepoDetailsRequest {
        this['category'] = category;
        return this;
    }
    public withLimit(limit: number): ListRepoDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: number): ListRepoDetailsRequest {
        this['marker'] = marker;
        return this;
    }
    public withIsPublic(isPublic: boolean): ListRepoDetailsRequest {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepoDetailsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
