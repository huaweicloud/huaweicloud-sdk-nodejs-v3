import { FlinkTemplate } from './FlinkTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlinkSqlJobTemplateResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public template?: FlinkTemplate;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateFlinkSqlJobTemplateResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateFlinkSqlJobTemplateResponse {
        this['message'] = message;
        return this;
    }
    public withTemplate(template: FlinkTemplate): CreateFlinkSqlJobTemplateResponse {
        this['template'] = template;
        return this;
    }
}