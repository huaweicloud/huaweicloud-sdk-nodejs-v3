import { SupabaseSMTPServerReq } from './SupabaseSMTPServerReq';


export class SupabaseEmailOAuthProviderReq {
    private 'enable_email_sign_up'?: boolean;
    private 'enable_email_auto_confirm'?: boolean;
    private 'smtp_config'?: SupabaseSMTPServerReq;
    public constructor() { 
    }
    public withEnableEmailSignUp(enableEmailSignUp: boolean): SupabaseEmailOAuthProviderReq {
        this['enable_email_sign_up'] = enableEmailSignUp;
        return this;
    }
    public set enableEmailSignUp(enableEmailSignUp: boolean  | undefined) {
        this['enable_email_sign_up'] = enableEmailSignUp;
    }
    public get enableEmailSignUp(): boolean | undefined {
        return this['enable_email_sign_up'];
    }
    public withEnableEmailAutoConfirm(enableEmailAutoConfirm: boolean): SupabaseEmailOAuthProviderReq {
        this['enable_email_auto_confirm'] = enableEmailAutoConfirm;
        return this;
    }
    public set enableEmailAutoConfirm(enableEmailAutoConfirm: boolean  | undefined) {
        this['enable_email_auto_confirm'] = enableEmailAutoConfirm;
    }
    public get enableEmailAutoConfirm(): boolean | undefined {
        return this['enable_email_auto_confirm'];
    }
    public withSmtpConfig(smtpConfig: SupabaseSMTPServerReq): SupabaseEmailOAuthProviderReq {
        this['smtp_config'] = smtpConfig;
        return this;
    }
    public set smtpConfig(smtpConfig: SupabaseSMTPServerReq  | undefined) {
        this['smtp_config'] = smtpConfig;
    }
    public get smtpConfig(): SupabaseSMTPServerReq | undefined {
        return this['smtp_config'];
    }
}