

export class BatchSubscribeReportRequestBody {
    public subscribe?: boolean;
    private 'email_template_id_list'?: Array<number>;
    public constructor(subscribe?: boolean, emailTemplateIdList?: Array<number>) { 
        this['subscribe'] = subscribe;
        this['email_template_id_list'] = emailTemplateIdList;
    }
    public withSubscribe(subscribe: boolean): BatchSubscribeReportRequestBody {
        this['subscribe'] = subscribe;
        return this;
    }
    public withEmailTemplateIdList(emailTemplateIdList: Array<number>): BatchSubscribeReportRequestBody {
        this['email_template_id_list'] = emailTemplateIdList;
        return this;
    }
    public set emailTemplateIdList(emailTemplateIdList: Array<number>  | undefined) {
        this['email_template_id_list'] = emailTemplateIdList;
    }
    public get emailTemplateIdList(): Array<number> | undefined {
        return this['email_template_id_list'];
    }
}