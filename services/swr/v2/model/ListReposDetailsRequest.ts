

export class ListReposDetailsRequest {
    private 'Content-Type': ListReposDetailsRequestContentTypeEnum | undefined;
    public namespace?: string;
    public name?: string;
    public category?: string;
    public filter?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListReposDetailsRequestContentTypeEnum): ListReposDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListReposDetailsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListReposDetailsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ListReposDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withCategory(category: string): ListReposDetailsRequest {
        this['category'] = category;
        return this;
    }
    public withFilter(filter: string): ListReposDetailsRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListReposDetailsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
