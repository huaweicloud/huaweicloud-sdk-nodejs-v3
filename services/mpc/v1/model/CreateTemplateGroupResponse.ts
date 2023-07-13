import { TemplateGroup } from './TemplateGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateGroupResponse extends SdkResponse {
    private 'template_group'?: TemplateGroup | undefined;
    public constructor() { 
        super();
    }
    public withTemplateGroup(templateGroup: TemplateGroup): CreateTemplateGroupResponse {
        this['template_group'] = templateGroup;
        return this;
    }
    public set templateGroup(templateGroup: TemplateGroup | undefined) {
        this['template_group'] = templateGroup;
    }
    public get templateGroup() {
        return this['template_group'];
    }
}