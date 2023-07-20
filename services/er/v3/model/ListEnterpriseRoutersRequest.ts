

export class ListEnterpriseRoutersRequest {
    public limit?: number;
    public marker?: string;
    private 'enterprise_project_id'?: Array<string>;
    public state?: Array<ListEnterpriseRoutersRequestStateEnum> | Array<string>;
    public id?: Array<string>;
    private 'resource_id'?: Array<string>;
    private 'owned_by_self'?: boolean;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<ListEnterpriseRoutersRequestSortDirEnum> | Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListEnterpriseRoutersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEnterpriseRoutersRequest {
        this['marker'] = marker;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListEnterpriseRoutersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withState(state: Array<ListEnterpriseRoutersRequestStateEnum> | Array<string>): ListEnterpriseRoutersRequest {
        this['state'] = state;
        return this;
    }
    public withId(id: Array<string>): ListEnterpriseRoutersRequest {
        this['id'] = id;
        return this;
    }
    public withResourceId(resourceId: Array<string>): ListEnterpriseRoutersRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: Array<string>  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): Array<string> | undefined {
        return this['resource_id'];
    }
    public withOwnedBySelf(ownedBySelf: boolean): ListEnterpriseRoutersRequest {
        this['owned_by_self'] = ownedBySelf;
        return this;
    }
    public set ownedBySelf(ownedBySelf: boolean  | undefined) {
        this['owned_by_self'] = ownedBySelf;
    }
    public get ownedBySelf(): boolean | undefined {
        return this['owned_by_self'];
    }
    public withSortKey(sortKey: Array<string>): ListEnterpriseRoutersRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<ListEnterpriseRoutersRequestSortDirEnum> | Array<string>): ListEnterpriseRoutersRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListEnterpriseRoutersRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListEnterpriseRoutersRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEnterpriseRoutersRequestStateEnum {
    PENDING = 'pending',
    AVAILABLE = 'available',
    MODIFYING = 'modifying',
    DELETING = 'deleting',
    DELETED = 'deleted',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEnterpriseRoutersRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
