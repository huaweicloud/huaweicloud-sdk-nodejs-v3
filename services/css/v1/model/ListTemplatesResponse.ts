import { CustomTemplates } from './CustomTemplates';
import { SystemTemplates } from './SystemTemplates';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public systemTemplates?: Array<SystemTemplates>;
    public customTemplates?: Array<CustomTemplates>;
    public constructor() { 
        super();
    }
    public withSystemTemplates(systemTemplates: Array<SystemTemplates>): ListTemplatesResponse {
        this['systemTemplates'] = systemTemplates;
        return this;
    }
    public withCustomTemplates(customTemplates: Array<CustomTemplates>): ListTemplatesResponse {
        this['customTemplates'] = customTemplates;
        return this;
    }
}