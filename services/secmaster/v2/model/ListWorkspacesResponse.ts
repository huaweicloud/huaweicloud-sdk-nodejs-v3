import { CreateWorkspaceResponseBody } from './CreateWorkspaceResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkspacesResponse extends SdkResponse {
    public workspaces?: Array<CreateWorkspaceResponseBody>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withWorkspaces(workspaces: Array<CreateWorkspaceResponseBody>): ListWorkspacesResponse {
        this['workspaces'] = workspaces;
        return this;
    }
    public withCount(count: number): ListWorkspacesResponse {
        this['count'] = count;
        return this;
    }
}