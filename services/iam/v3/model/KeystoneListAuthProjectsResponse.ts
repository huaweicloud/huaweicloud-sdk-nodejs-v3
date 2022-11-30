import { AuthProjectResult } from './AuthProjectResult';
import { LinksSelf } from './LinksSelf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListAuthProjectsResponse extends SdkResponse {
    public links?: LinksSelf;
    public projects?: Array<AuthProjectResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: LinksSelf): KeystoneListAuthProjectsResponse {
        this['links'] = links;
        return this;
    }
    public withProjects(projects: Array<AuthProjectResult>): KeystoneListAuthProjectsResponse {
        this['projects'] = projects;
        return this;
    }
}