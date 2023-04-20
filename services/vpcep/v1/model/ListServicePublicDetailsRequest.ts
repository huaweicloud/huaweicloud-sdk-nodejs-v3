

export class ListServicePublicDetailsRequest {
    private 'Content-Type'?: string | undefined;
    public limit?: number;
    public offset?: number;
    private 'endpoint_service_name'?: string | undefined;
    public id?: string;
    private 'sort_key'?: ListServicePublicDetailsRequestSortKeyEnum | undefined;
    private 'sort_dir'?: ListServicePublicDetailsRequestSortDirEnum | undefined;
    public constructor() { 
    }
    public withContentType(contentType: string): ListServicePublicDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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
    public set endpointServiceName(endpointServiceName: string | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName() {
        return this['endpoint_service_name'];
    }
    public withId(id: string): ListServicePublicDetailsRequest {
        this['id'] = id;
        return this;
    }
    public withSortKey(sortKey: ListServicePublicDetailsRequestSortKeyEnum): ListServicePublicDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListServicePublicDetailsRequestSortKeyEnum | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListServicePublicDetailsRequestSortDirEnum): ListServicePublicDetailsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListServicePublicDetailsRequestSortDirEnum | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
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
