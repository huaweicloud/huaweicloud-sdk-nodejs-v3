import { AgencyAllProjectRole } from './AgencyAllProjectRole';
import { LinksSelf } from './LinksSelf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllProjectsPermissionsForAgencyResponse extends SdkResponse {
    public roles?: Array<AgencyAllProjectRole>;
    public links?: LinksSelf;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<AgencyAllProjectRole>): ListAllProjectsPermissionsForAgencyResponse {
        this['roles'] = roles;
        return this;
    }
    public withLinks(links: LinksSelf): ListAllProjectsPermissionsForAgencyResponse {
        this['links'] = links;
        return this;
    }
}