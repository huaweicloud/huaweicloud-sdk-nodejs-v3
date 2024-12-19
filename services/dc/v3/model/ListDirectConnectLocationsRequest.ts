

export class ListDirectConnectLocationsRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: Array<ListDirectConnectLocationsRequestSortDirEnum> | Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    public status?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListDirectConnectLocationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDirectConnectLocationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListDirectConnectLocationsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListDirectConnectLocationsRequestSortDirEnum> | Array<string>): ListDirectConnectLocationsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListDirectConnectLocationsRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListDirectConnectLocationsRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListDirectConnectLocationsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListDirectConnectLocationsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: Array<string>): ListDirectConnectLocationsRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDirectConnectLocationsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
