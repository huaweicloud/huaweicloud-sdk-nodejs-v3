

export class ListSharedRepoDetailsRequest {
    private 'Content-Type'?: ListSharedRepoDetailsRequestContentTypeEnum | string;
    public namespace?: string;
    public name?: string;
    private 'shared_by'?: ListSharedRepoDetailsRequestSharedByEnum | string;
    public limit?: number;
    public marker?: number;
    public status?: boolean;
    public constructor(contentType?: string, sharedBy?: string) { 
        this['Content-Type'] = contentType;
        this['shared_by'] = sharedBy;
    }
    public withContentType(contentType: ListSharedRepoDetailsRequestContentTypeEnum | string): ListSharedRepoDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ListSharedRepoDetailsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ListSharedRepoDetailsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): ListSharedRepoDetailsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ListSharedRepoDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withSharedBy(sharedBy: ListSharedRepoDetailsRequestSharedByEnum | string): ListSharedRepoDetailsRequest {
        this['shared_by'] = sharedBy;
        return this;
    }
    public set sharedBy(sharedBy: ListSharedRepoDetailsRequestSharedByEnum | string  | undefined) {
        this['shared_by'] = sharedBy;
    }
    public get sharedBy(): ListSharedRepoDetailsRequestSharedByEnum | string | undefined {
        return this['shared_by'];
    }
    public withLimit(limit: number): ListSharedRepoDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: number): ListSharedRepoDetailsRequest {
        this['marker'] = marker;
        return this;
    }
    public withStatus(status: boolean): ListSharedRepoDetailsRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSharedRepoDetailsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSharedRepoDetailsRequestSharedByEnum {
    SELF = 'self',
    THIRDPARTY = 'thirdparty'
}
