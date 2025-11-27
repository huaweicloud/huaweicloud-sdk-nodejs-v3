import { EmailTemplate } from './EmailTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEmailTemplateResponse extends SdkResponse {
    public total?: number;
    private 'email_template_list'?: Array<EmailTemplate>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEmailTemplateResponse {
        this['total'] = total;
        return this;
    }
    public withEmailTemplateList(emailTemplateList: Array<EmailTemplate>): ListEmailTemplateResponse {
        this['email_template_list'] = emailTemplateList;
        return this;
    }
    public set emailTemplateList(emailTemplateList: Array<EmailTemplate>  | undefined) {
        this['email_template_list'] = emailTemplateList;
    }
    public get emailTemplateList(): Array<EmailTemplate> | undefined {
        return this['email_template_list'];
    }
}