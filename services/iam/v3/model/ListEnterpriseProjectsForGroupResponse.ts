import { ListEnterpriseProjectsResDetail } from './ListEnterpriseProjectsResDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnterpriseProjectsForGroupResponse extends SdkResponse {
    private 'enterprise-projects'?: Array<ListEnterpriseProjectsResDetail> | undefined;
    public constructor() { 
        super();
    }
    public withEnterpriseProjects(enterpriseProjects: Array<ListEnterpriseProjectsResDetail>): ListEnterpriseProjectsForGroupResponse {
        this['enterprise-projects'] = enterpriseProjects;
        return this;
    }
    public set enterpriseProjects(enterpriseProjects: Array<ListEnterpriseProjectsResDetail> | undefined) {
        this['enterprise-projects'] = enterpriseProjects;
    }
    public get enterpriseProjects() {
        return this['enterprise-projects'];
    }
}