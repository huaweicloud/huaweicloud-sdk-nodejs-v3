

export class Review {
    private 'template_id': string | undefined;
    public interval?: number;
    public politics?: number;
    public terrorism?: number;
    public porn?: number;
    public constructor(templateId?: any) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): Review {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withInterval(interval: number): Review {
        this['interval'] = interval;
        return this;
    }
    public withPolitics(politics: number): Review {
        this['politics'] = politics;
        return this;
    }
    public withTerrorism(terrorism: number): Review {
        this['terrorism'] = terrorism;
        return this;
    }
    public withPorn(porn: number): Review {
        this['porn'] = porn;
        return this;
    }
}