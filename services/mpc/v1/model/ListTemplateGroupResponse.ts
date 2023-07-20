import { TemplateGroup } from './TemplateGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateGroupResponse extends SdkResponse {
    private 'template_group_list'?: Array<TemplateGroup>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTemplateGroupList(templateGroupList: Array<TemplateGroup>): ListTemplateGroupResponse {
        this['template_group_list'] = templateGroupList;
        return this;
    }
    public set templateGroupList(templateGroupList: Array<TemplateGroup>  | undefined) {
        this['template_group_list'] = templateGroupList;
    }
    public get templateGroupList(): Array<TemplateGroup> | undefined {
        return this['template_group_list'];
    }
    public withTotal(total: number): ListTemplateGroupResponse {
        this['total'] = total;
        return this;
    }
}