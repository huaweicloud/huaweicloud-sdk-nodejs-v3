

export class ListEndpointsRequest {
    private 'Content-Type': string | undefined;
    private 'endpoint_service_name'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    public id?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string | undefined;
    private 'sort_dir'?: string | undefined;
    private 'public_border_group'?: string | undefined;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListEndpointsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEndpointServiceName(endpointServiceName: string): ListEndpointsRequest {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName() {
        return this['endpoint_service_name'];
    }
    public withVpcId(vpcId: string): ListEndpointsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withId(id: string): ListEndpointsRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListEndpointsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEndpointsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListEndpointsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListEndpointsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListEndpointsRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
}