import { ListProjectsV4ResponseBodyProjects } from './ListProjectsV4ResponseBodyProjects';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectsV4Response extends SdkResponse {
    public projects?: Array<ListProjectsV4ResponseBodyProjects>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withProjects(projects: Array<ListProjectsV4ResponseBodyProjects>): ListProjectsV4Response {
        this['projects'] = projects;
        return this;
    }
    public withTotal(total: number): ListProjectsV4Response {
        this['total'] = total;
        return this;
    }
}