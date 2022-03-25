

export class ListSharedReposDetailsRequest {
    private 'Content-Type': ListSharedReposDetailsRequestContentTypeEnum | undefined;
    public filter?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: ListSharedReposDetailsRequestContentTypeEnum): ListSharedReposDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListSharedReposDetailsRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withFilter(filter: string): ListSharedReposDetailsRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSharedReposDetailsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
