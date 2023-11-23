import { FlinkTemplateList } from './FlinkTemplateList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlinkSqlJobTemplatesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'template_list'?: FlinkTemplateList;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListFlinkSqlJobTemplatesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListFlinkSqlJobTemplatesResponse {
        this['message'] = message;
        return this;
    }
    public withTemplateList(templateList: FlinkTemplateList): ListFlinkSqlJobTemplatesResponse {
        this['template_list'] = templateList;
        return this;
    }
    public set templateList(templateList: FlinkTemplateList  | undefined) {
        this['template_list'] = templateList;
    }
    public get templateList(): FlinkTemplateList | undefined {
        return this['template_list'];
    }
}