

export class ListIpGroupsRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'ip_list'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public constructor() { 
    }
    public withMarker(marker: string): ListIpGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListIpGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListIpGroupsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListIpGroupsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListIpGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListIpGroupsRequest {
        this['description'] = description;
        return this;
    }
    public withIpList(ipList: Array<string>): ListIpGroupsRequest {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<string> | undefined {
        return this['ip_list'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListIpGroupsRequest {
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