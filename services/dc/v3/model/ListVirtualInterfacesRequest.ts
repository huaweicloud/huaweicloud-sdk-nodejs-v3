

export class ListVirtualInterfacesRequest {
    public limit?: number;
    public marker?: string;
    public fields?: Array<string>;
    private 'sort_dir'?: Array<ListVirtualInterfacesRequestSortDirEnum> | Array<string>;
    private 'sort_key'?: string;
    private 'enterprise_project_id'?: Array<string>;
    public id?: Array<string>;
    public status?: Array<string>;
    private 'direct_connect_id'?: Array<string>;
    private 'vgw_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListVirtualInterfacesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVirtualInterfacesRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ListVirtualInterfacesRequest {
        this['fields'] = fields;
        return this;
    }
    public withSortDir(sortDir: Array<ListVirtualInterfacesRequestSortDirEnum> | Array<string>): ListVirtualInterfacesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<ListVirtualInterfacesRequestSortDirEnum> | Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<ListVirtualInterfacesRequestSortDirEnum> | Array<string> | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListVirtualInterfacesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListVirtualInterfacesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: Array<string>): ListVirtualInterfacesRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: Array<string>): ListVirtualInterfacesRequest {
        this['status'] = status;
        return this;
    }
    public withDirectConnectId(directConnectId: Array<string>): ListVirtualInterfacesRequest {
        this['direct_connect_id'] = directConnectId;
        return this;
    }
    public set directConnectId(directConnectId: Array<string>  | undefined) {
        this['direct_connect_id'] = directConnectId;
    }
    public get directConnectId(): Array<string> | undefined {
        return this['direct_connect_id'];
    }
    public withVgwId(vgwId: Array<string>): ListVirtualInterfacesRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVirtualInterfacesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
