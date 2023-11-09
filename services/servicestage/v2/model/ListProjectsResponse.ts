import { Project } from './Project';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectsResponse extends SdkResponse {
    public projects?: Array<Project>;
    public constructor() { 
        super();
    }
    public withProjects(projects: Array<Project>): ListProjectsResponse {
        this['projects'] = projects;
        return this;
    }
}