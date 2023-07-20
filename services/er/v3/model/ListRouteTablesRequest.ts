

export class ListRouteTablesRequest {
    private 'er_id'?: string;
    public limit?: number;
    public marker?: string;
    public state?: Array<ListRouteTablesRequestStateEnum> | Array<string>;
    private 'is_default_propagation_table'?: boolean;
    private 'is_default_association_table'?: boolean;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<ListRouteTablesRequestSortDirEnum> | Array<string>;
    public constructor(erId?: string) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): ListRouteTablesRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
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
    public withState(state: Array<ListRouteTablesRequestStateEnum> | Array<string>): ListRouteTablesRequest {
        this['state'] = state;
        return this;
    }
    public withIsDefaultPropagationTable(isDefaultPropagationTable: boolean): ListRouteTablesRequest {
        this['is_default_propagation_table'] = isDefaultPropagationTable;
        return this;
    }
    public set isDefaultPropagationTable(isDefaultPropagationTable: boolean  | undefined) {
        this['is_default_propagation_table'] = isDefaultPropagationTable;
    }
    public get isDefaultPropagationTable(): boolean | undefined {
        return this['is_default_propagation_table'];
    }
    public withIsDefaultAssociationTable(isDefaultAssociationTable: boolean): ListRouteTablesRequest {
        this['is_default_association_table'] = isDefaultAssociationTable;
        return this;
    }
    public set isDefaultAssociationTable(isDefaultAssociationTable: boolean  | undefined) {
        this['is_default_association_table'] = isDefaultAssociationTable;
    }
    public get isDefaultAssociationTable(): boolean | undefined {
        return this['is_default_association_table'];
    }
    public withSortKey(sortKey: Array<string>): ListRouteTablesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListRouteTablesRequestSortDirEnum> | Array<string>): ListRouteTablesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListRouteTablesRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListRouteTablesRequestSortDirEnum> | Array<string> | undefined {
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
