

export class ListSupportMasksRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<ListSupportMasksRequestFieldsEnum> | Array<string>;
    private 'sort_key'?: Array<ListSupportMasksRequestSortKeyEnum> | Array<string>;
    private 'sort_dir'?: Array<ListSupportMasksRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    private 'ip_version'?: Array<ListSupportMasksRequestIpVersionEnum> | Array<number>;
    public mask?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListSupportMasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSupportMasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListSupportMasksRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListSupportMasksRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<ListSupportMasksRequestFieldsEnum> | Array<string>): ListSupportMasksRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortKey(sortKey: Array<ListSupportMasksRequestSortKeyEnum> | Array<string>): ListSupportMasksRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<ListSupportMasksRequestSortKeyEnum> | Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<ListSupportMasksRequestSortKeyEnum> | Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListSupportMasksRequestSortDirEnum> | Array<string>): ListSupportMasksRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListSupportMasksRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListSupportMasksRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListSupportMasksRequest {
        this['id'] = id;
        return this;
    }
    public withIpVersion(ipVersion: Array<ListSupportMasksRequestIpVersionEnum> | Array<number>): ListSupportMasksRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<ListSupportMasksRequestIpVersionEnum> | Array<number>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<ListSupportMasksRequestIpVersionEnum> | Array<number> | undefined {
        return this['ip_version'];
    }
    public withMask(mask: number): ListSupportMasksRequest {
        this['mask'] = mask;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSupportMasksRequestFieldsEnum {
    ID = 'id',
    IP_VERSION = 'ip_version',
    MASK = 'mask',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupportMasksRequestSortKeyEnum {
    ID = 'id',
    IP_VERSION = 'ip_version',
    MASK = 'mask',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupportMasksRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupportMasksRequestIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
