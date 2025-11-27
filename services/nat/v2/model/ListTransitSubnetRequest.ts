

export class ListTransitSubnetRequest {
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'virsubnet_project_id'?: Array<string>;
    private 'vpc_id'?: Array<string>;
    private 'virsubnet_id'?: Array<string>;
    public status?: Array<string>;
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public constructor() { 
    }
    public withId(id: Array<string>): ListTransitSubnetRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListTransitSubnetRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListTransitSubnetRequest {
        this['description'] = description;
        return this;
    }
    public withVirsubnetProjectId(virsubnetProjectId: Array<string>): ListTransitSubnetRequest {
        this['virsubnet_project_id'] = virsubnetProjectId;
        return this;
    }
    public set virsubnetProjectId(virsubnetProjectId: Array<string>  | undefined) {
        this['virsubnet_project_id'] = virsubnetProjectId;
    }
    public get virsubnetProjectId(): Array<string> | undefined {
        return this['virsubnet_project_id'];
    }
    public withVpcId(vpcId: Array<string>): ListTransitSubnetRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: Array<string>): ListTransitSubnetRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string>  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): Array<string> | undefined {
        return this['virsubnet_id'];
    }
    public withStatus(status: Array<string>): ListTransitSubnetRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListTransitSubnetRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTransitSubnetRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListTransitSubnetRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
}