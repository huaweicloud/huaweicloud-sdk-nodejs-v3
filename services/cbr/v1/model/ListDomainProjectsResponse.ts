import { DomainProjectsInfo } from './DomainProjectsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainProjectsResponse extends SdkResponse {
    public projects?: Array<DomainProjectsInfo>;
    public constructor() { 
        super();
    }
    public withProjects(projects: Array<DomainProjectsInfo>): ListDomainProjectsResponse {
        this['projects'] = projects;
        return this;
    }
}