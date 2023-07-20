

export class ShowHdfsFileListRequest {
    private 'cluster_id'?: string;
    public path?: string;
    public offset?: string;
    public limit?: string;
    private 'sort_key'?: ShowHdfsFileListRequestSortKeyEnum | string;
    public order?: ShowHdfsFileListRequestOrderEnum | string;
    public constructor(clusterId?: string, path?: string) { 
        this['cluster_id'] = clusterId;
        this['path'] = path;
    }
    public withClusterId(clusterId: string): ShowHdfsFileListRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPath(path: string): ShowHdfsFileListRequest {
        this['path'] = path;
        return this;
    }
    public withOffset(offset: string): ShowHdfsFileListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ShowHdfsFileListRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: ShowHdfsFileListRequestSortKeyEnum | string): ShowHdfsFileListRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ShowHdfsFileListRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ShowHdfsFileListRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withOrder(order: ShowHdfsFileListRequestOrderEnum | string): ShowHdfsFileListRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHdfsFileListRequestSortKeyEnum {
    PATH_SUFFIX = 'path_suffix',
    LENGTH = 'length',
    MODIFICATION_TIME = 'modification_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowHdfsFileListRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
