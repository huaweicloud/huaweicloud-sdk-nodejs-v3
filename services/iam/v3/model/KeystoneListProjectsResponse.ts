import { Links } from './Links';
import { ProjectResult } from './ProjectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListProjectsResponse extends SdkResponse {
    public links?: Links;
    public projects?: Array<ProjectResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: Links): KeystoneListProjectsResponse {
        this['links'] = links;
        return this;
    }
    public withProjects(projects: Array<ProjectResult>): KeystoneListProjectsResponse {
        this['projects'] = projects;
        return this;
    }
}