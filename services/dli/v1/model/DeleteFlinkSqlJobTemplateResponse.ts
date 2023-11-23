import { DeleteTemplateRespTemplate } from './DeleteTemplateRespTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteFlinkSqlJobTemplateResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public template?: DeleteTemplateRespTemplate;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): DeleteFlinkSqlJobTemplateResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): DeleteFlinkSqlJobTemplateResponse {
        this['message'] = message;
        return this;
    }
    public withTemplate(template: DeleteTemplateRespTemplate): DeleteFlinkSqlJobTemplateResponse {
        this['template'] = template;
        return this;
    }
}