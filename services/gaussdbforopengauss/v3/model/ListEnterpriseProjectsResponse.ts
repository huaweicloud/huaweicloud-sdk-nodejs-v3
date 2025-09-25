import { EnterpriseProjectInfoResult } from './EnterpriseProjectInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnterpriseProjectsResponse extends SdkResponse {
    private 'enterprise_projects'?: Array<EnterpriseProjectInfoResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withEnterpriseProjects(enterpriseProjects: Array<EnterpriseProjectInfoResult>): ListEnterpriseProjectsResponse {
        this['enterprise_projects'] = enterpriseProjects;
        return this;
    }
    public set enterpriseProjects(enterpriseProjects: Array<EnterpriseProjectInfoResult>  | undefined) {
        this['enterprise_projects'] = enterpriseProjects;
    }
    public get enterpriseProjects(): Array<EnterpriseProjectInfoResult> | undefined {
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