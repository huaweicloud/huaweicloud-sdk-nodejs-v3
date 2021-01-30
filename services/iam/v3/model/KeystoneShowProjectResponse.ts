import { ProjectResult } from './ProjectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowProjectResponse extends SdkResponse {
    public project?: ProjectResult;
    public constructor() { 
        super();
    }
    public withProject(project: ProjectResult): KeystoneShowProjectResponse {
        this['project'] = project;
        return this;
    }
}