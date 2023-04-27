

export class DeleteNotificationTemplateBody {
    private 'template_names': Array<string> | undefined;
    public constructor(templateNames?: any) { 
        this['template_names'] = templateNames;
    }
    public withTemplateNames(templateNames: Array<string>): DeleteNotificationTemplateBody {
        this['template_names'] = templateNames;
        return this;
    }
    public set templateNames(templateNames: Array<string> | undefined) {
        this['template_names'] = templateNames;
    }
    public get templateNames() {
        return this['template_names'];
    }
}