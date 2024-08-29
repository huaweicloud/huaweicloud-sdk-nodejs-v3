

export class ListTenantVpcIgwsRequest {
    public fields?: Array<string>;
    public id?: string;
    private 'vpc_id'?: string;
    public name?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public limit?: number;
    public offset?: number;
    public marker?: string;
    public constructor() { 
    }
    public withFields(fields: Array<string>): ListTenantVpcIgwsRequest {
        this['fields'] = fields;
        return this;
    }
    public withId(id: string): ListTenantVpcIgwsRequest {
        this['id'] = id;
        return this;
    }
    public withVpcId(vpcId: string): ListTenantVpcIgwsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withName(name: string): ListTenantVpcIgwsRequest {
        this['name'] = name;
        return this;
    }
    public withSortKey(sortKey: string): ListTenantVpcIgwsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListTenantVpcIgwsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListTenantVpcIgwsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTenantVpcIgwsRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListTenantVpcIgwsRequest {
        this['marker'] = marker;
        return this;
    }
}