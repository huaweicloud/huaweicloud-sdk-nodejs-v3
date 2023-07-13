import { TemplateVersion } from './TemplateVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateVersionsResponse extends SdkResponse {
    public versions?: Array<TemplateVersion>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<TemplateVersion>): ListTemplateVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}