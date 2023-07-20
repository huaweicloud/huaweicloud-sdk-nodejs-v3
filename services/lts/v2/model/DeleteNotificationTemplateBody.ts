

export class DeleteNotificationTemplateBody {
    private 'template_names'?: Array<string>;
    public constructor(templateNames?: Array<string>) { 
        this['template_names'] = templateNames;
    }
    public withTemplateNames(templateNames: Array<string>): DeleteNotificationTemplateBody {
        this['template_names'] = templateNames;
        return this;
    }
    public set templateNames(templateNames: Array<string>  | undefined) {
        this['template_names'] = templateNames;
    }
    public get templateNames(): Array<string> | undefined {
        return this['template_names'];
    }
}