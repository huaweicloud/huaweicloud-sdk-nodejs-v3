import { ProjectV3 } from './ProjectV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectsV4Response extends SdkResponse {
    public projects?: Array<ProjectV3>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withProjects(projects: Array<ProjectV3>): ListProjectsV4Response {
        this['projects'] = projects;
        return this;
    }
    public withCount(count: number): ListProjectsV4Response {
        this['count'] = count;
        return this;
    }
}