

export class ListPrivateNatsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    public spec?: Array<ListPrivateNatsRequestSpecEnum> | Array<string>;
    public status?: Array<ListPrivateNatsRequestStatusEnum> | Array<string>;
    private 'vpc_id'?: Array<string>;
    private 'virsubnet_id'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListPrivateNatsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPrivateNatsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListPrivateNatsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListPrivateNatsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListPrivateNatsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListPrivateNatsRequest {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: Array<ListPrivateNatsRequestSpecEnum> | Array<string>): ListPrivateNatsRequest {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: Array<ListPrivateNatsRequestStatusEnum> | Array<string>): ListPrivateNatsRequest {
        this['status'] = status;
        return this;
    }
    public withVpcId(vpcId: Array<string>): ListPrivateNatsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
    public withVirsubnetId(virsubnetId: Array<string>): ListPrivateNatsRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string>  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): Array<string> | undefined {
        return this['virsubnet_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListPrivateNatsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPrivateNatsRequestSpecEnum {
    SMALL = 'Small',
    MEDIUM = 'Medium',
    LARGE = 'Large',
    EXTRA_LARGE = 'Extra-large',
    EXTRA_XLARGE = 'Extra-xlarge'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPrivateNatsRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    FROZEN = 'FROZEN',
    INACTIVE = 'INACTIVE'
}
