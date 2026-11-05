import { SupabaseMailerItemTemplateReq } from './SupabaseMailerItemTemplateReq';


export class SupabaseEmailTemplateReq {
    private 'mailer_confirmation'?: SupabaseMailerItemTemplateReq;
    public constructor() { 
    }
    public withMailerConfirmation(mailerConfirmation: SupabaseMailerItemTemplateReq): SupabaseEmailTemplateReq {
        this['mailer_confirmation'] = mailerConfirmation;
        return this;
    }
    public set mailerConfirmation(mailerConfirmation: SupabaseMailerItemTemplateReq  | undefined) {
        this['mailer_confirmation'] = mailerConfirmation;
    }
    public get mailerConfirmation(): SupabaseMailerItemTemplateReq | undefined {
        return this['mailer_confirmation'];
    }
}