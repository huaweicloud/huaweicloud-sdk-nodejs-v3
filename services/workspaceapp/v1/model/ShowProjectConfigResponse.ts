import { ProjectConfig } from './ProjectConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectConfigResponse extends SdkResponse {
    private 'project_config'?: ProjectConfig;
    public constructor() { 
        super();
    }
    public withProjectConfig(projectConfig: ProjectConfig): ShowProjectConfigResponse {
        this['project_config'] = projectConfig;
        return this;
    }
    public set projectConfig(projectConfig: ProjectConfig  | undefined) {
        this['project_config'] = projectConfig;
    }
    public get projectConfig(): ProjectConfig | undefined {
        return this['project_config'];
    }
}