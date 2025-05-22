import { ListDomainNotAddedProjectsV4ResponseBodyProjects } from './ListDomainNotAddedProjectsV4ResponseBodyProjects';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainNotAddedProjectsV4Response extends SdkResponse {
    public projects?: Array<ListDomainNotAddedProjectsV4ResponseBodyProjects>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withProjects(projects: Array<ListDomainNotAddedProjectsV4ResponseBodyProjects>): ListDomainNotAddedProjectsV4Response {
        this['projects'] = projects;
        return this;
    }
    public withTotal(total: number): ListDomainNotAddedProjectsV4Response {
        this['total'] = total;
        return this;
    }
}