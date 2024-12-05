import { AuthProjectResult } from './AuthProjectResult';
import { LinksSelf } from './LinksSelf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneListFederationProjectsResponse extends SdkResponse {
    public links?: LinksSelf;
    public projects?: Array<AuthProjectResult>;
    public constructor() { 
        super();
    }
    public withLinks(links: LinksSelf): KeystoneListFederationProjectsResponse {
        this['links'] = links;
        return this;
    }
    public withProjects(projects: Array<AuthProjectResult>): KeystoneListFederationProjectsResponse {
        this['projects'] = projects;
        return this;
    }
}