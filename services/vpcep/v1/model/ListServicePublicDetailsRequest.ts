

export class ListServicePublicDetailsRequest {
    private 'Content-Type'?: string;
    public limit?: number;
    public offset?: number;
    private 'endpoint_service_name'?: string;
    public id?: string;
    private 'sort_key'?: ListServicePublicDetailsRequestSortKeyEnum | string;
    private 'sort_dir'?: ListServicePublicDetailsRequestSortDirEnum | string;
    public constructor() { 
    }
    public withContentType(contentType: string): ListServicePublicDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLimit(limit: number): ListServicePublicDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServicePublicDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withEndpointServiceName(endpointServiceName: string): ListServicePublicDetailsRequest {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withId(id: string): ListServicePublicDetailsRequest {
        this['id'] = id;
        return this;
    }
    public withSortKey(sortKey: ListServicePublicDetailsRequestSortKeyEnum | string): ListServicePublicDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListServicePublicDetailsRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListServicePublicDetailsRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListServicePublicDetailsRequestSortDirEnum | string): ListServicePublicDetailsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListServicePublicDetailsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListServicePublicDetailsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServicePublicDetailsRequestSortKeyEnum {
    CREATE_AT = 'create_at',
    UPDATE_AT = 'update_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServicePublicDetailsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
