import { EnterpriseProjectItem } from './EnterpriseProjectItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnterpriseProjectsResponse extends SdkResponse {
    private 'enterprise_projects'?: Array<EnterpriseProjectItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEnterpriseProjects(enterpriseProjects: Array<EnterpriseProjectItem>): ListEnterpriseProjectsResponse {
        this['enterprise_projects'] = enterpriseProjects;
        return this;
    }
    public set enterpriseProjects(enterpriseProjects: Array<EnterpriseProjectItem>  | undefined) {
        this['enterprise_projects'] = enterpriseProjects;
    }
    public get enterpriseProjects(): Array<EnterpriseProjectItem> | undefined {
        return this['enterprise_projects'];
    }
    public withTotalCount(totalCount: number): ListEnterpriseProjectsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}