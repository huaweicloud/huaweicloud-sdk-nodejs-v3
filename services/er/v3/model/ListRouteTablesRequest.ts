

export class ListRouteTablesRequest {
    private 'er_id': string | undefined;
    public limit?: number;
    public marker?: string;
    public state?: Array<ListRouteTablesRequestStateEnum>;
    private 'is_default_propagation_table'?: boolean | undefined;
    private 'is_default_association_table'?: boolean | undefined;
    private 'sort_key'?: Array<string> | undefined;
    private 'sort_dir'?: Array<ListRouteTablesRequestSortDirEnum> | undefined;
    public constructor(erId?: any) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): ListRouteTablesRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withLimit(limit: number): ListRouteTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRouteTablesRequest {
        this['marker'] = marker;
        return this;
    }
    public withState(state: Array<ListRouteTablesRequestStateEnum>): ListRouteTablesRequest {
        this['state'] = state;
        return this;
    }
    public withIsDefaultPropagationTable(isDefaultPropagationTable: boolean): ListRouteTablesRequest {
        this['is_default_propagation_table'] = isDefaultPropagationTable;
        return this;
    }
    public set isDefaultPropagationTable(isDefaultPropagationTable: boolean | undefined) {
        this['is_default_propagation_table'] = isDefaultPropagationTable;
    }
    public get isDefaultPropagationTable() {
        return this['is_default_propagation_table'];
    }
    public withIsDefaultAssociationTable(isDefaultAssociationTable: boolean): ListRouteTablesRequest {
        this['is_default_association_table'] = isDefaultAssociationTable;
        return this;
    }
    public set isDefaultAssociationTable(isDefaultAssociationTable: boolean | undefined) {
        this['is_default_association_table'] = isDefaultAssociationTable;
    }
    public get isDefaultAssociationTable() {
        return this['is_default_association_table'];
    }
    public withSortKey(sortKey: Array<string>): ListRouteTablesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string> | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListRouteTablesRequestSortDirEnum>): ListRouteTablesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListRouteTablesRequestSortDirEnum> | undefined) {
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
export enum ListRouteTablesRequestStateEnum {
    PENDING = 'pending',
    AVAILABLE = 'available',
    DELETING = 'deleting',
    DELETED = 'deleted',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRouteTablesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
