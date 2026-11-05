

export class SupabaseMailerItemTemplateReq {
    public subject?: string;
    public url?: string;
    public constructor() { 
    }
    public withSubject(subject: string): SupabaseMailerItemTemplateReq {
        this['subject'] = subject;
        return this;
    }
    public withUrl(url: string): SupabaseMailerItemTemplateReq {
        this['url'] = url;
        return this;
    }
}