import { ProjectDetailsAndStatusResult } from './ProjectDetailsAndStatusResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectDetailsAndStatusResponse extends SdkResponse {
    public project?: ProjectDetailsAndStatusResult;
    public constructor() { 
        super();
    }
    public withProject(project: ProjectDetailsAndStatusResult): ShowProjectDetailsAndStatusResponse {
        this['project'] = project;
        return this;
    }
}