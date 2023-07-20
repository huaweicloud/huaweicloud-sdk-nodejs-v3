import { TemplateGroup } from './TemplateGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateGroupResponse extends SdkResponse {
    private 'template_group_list'?: Array<TemplateGroup>;
    public total?: number;
    private 'error_code'?: string;
    private 'error_msg'?: string;
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
    public withErrorCode(errorCode: string): ListTemplateGroupResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListTemplateGroupResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}