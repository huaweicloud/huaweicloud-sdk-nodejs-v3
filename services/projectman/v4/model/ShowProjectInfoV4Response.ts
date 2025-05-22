import { GetProjectInfoV4ResultProject } from './GetProjectInfoV4ResultProject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectInfoV4Response extends SdkResponse {
    public project?: GetProjectInfoV4ResultProject;
    public constructor() { 
        super();
    }
    public withProject(project: GetProjectInfoV4ResultProject): ShowProjectInfoV4Response {
        this['project'] = project;
        return this;
    }
}