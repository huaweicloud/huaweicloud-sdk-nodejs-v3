import { ProjectsListInfo } from './ProjectsListInfo';
import { SelfLinksInfo } from './SelfLinksInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectsResponse extends SdkResponse {
    public projects?: Array<ProjectsListInfo>;
    public links?: SelfLinksInfo;
    public constructor() { 
        super();
    }
    public withProjects(projects: Array<ProjectsListInfo>): ListProjectsResponse {
        this['projects'] = projects;
        return this;
    }
    public withLinks(links: SelfLinksInfo): ListProjectsResponse {
        this['links'] = links;
        return this;
    }
}