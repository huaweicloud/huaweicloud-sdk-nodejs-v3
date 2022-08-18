import { TransTemplateRsp } from './TransTemplateRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTranscodeTemplateResponse extends SdkResponse {
    private 'template_group_list'?: Array<TransTemplateRsp> | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTemplateGroupList(templateGroupList: Array<TransTemplateRsp>): ListTranscodeTemplateResponse {
        this['template_group_list'] = templateGroupList;
        return this;
    }
    public set templateGroupList(templateGroupList: Array<TransTemplateRsp> | undefined) {
        this['template_group_list'] = templateGroupList;
    }
    public get templateGroupList() {
        return this['template_group_list'];
    }
    public withTotal(total: number): ListTranscodeTemplateResponse {
        this['total'] = total;
        return this;
    }
}