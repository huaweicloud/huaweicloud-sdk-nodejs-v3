import { ShowWorkspaceResponseBodyWorkspace } from './ShowWorkspaceResponseBodyWorkspace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkspaceResponse extends SdkResponse {
    public workspace?: ShowWorkspaceResponseBodyWorkspace;
    public constructor() { 
        super();
    }
    public withWorkspace(workspace: ShowWorkspaceResponseBodyWorkspace): ShowWorkspaceResponse {
        this['workspace'] = workspace;
        return this;
    }
}