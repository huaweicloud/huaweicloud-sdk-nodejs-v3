import { EnterpriseProject } from './EnterpriseProject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnterpriseProjectResponse extends SdkResponse {
    public count?: number;
    private 'enterprise_project_list'?: Array<EnterpriseProject>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowEnterpriseProjectResponse {
        this['count'] = count;
        return this;
    }
    public withEnterpriseProjectList(enterpriseProjectList: Array<EnterpriseProject>): ShowEnterpriseProjectResponse {
        this['enterprise_project_list'] = enterpriseProjectList;
        return this;
    }
    public set enterpriseProjectList(enterpriseProjectList: Array<EnterpriseProject>  | undefined) {
        this['enterprise_project_list'] = enterpriseProjectList;
    }
    public get enterpriseProjectList(): Array<EnterpriseProject> | undefined {
        return this['enterprise_project_list'];
    }
}