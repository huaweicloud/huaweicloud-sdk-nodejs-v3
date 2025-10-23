import { ProjectSettingsInheritCfgDto } from './ProjectSettingsInheritCfgDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupInheritSettingResponse extends SdkResponse {
    public body?: Array<ProjectSettingsInheritCfgDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProjectSettingsInheritCfgDto>): ShowGroupInheritSettingResponse {
        this['body'] = body;
        return this;
    }
}