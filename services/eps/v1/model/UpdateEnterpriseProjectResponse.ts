import { EpDetail } from './EpDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEnterpriseProjectResponse extends SdkResponse {
    private 'enterprise_project'?: EpDetail;
    public constructor() { 
        super();
    }
    public withEnterpriseProject(enterpriseProject: EpDetail): UpdateEnterpriseProjectResponse {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: EpDetail  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): EpDetail | undefined {
        return this['enterprise_project'];
    }
}