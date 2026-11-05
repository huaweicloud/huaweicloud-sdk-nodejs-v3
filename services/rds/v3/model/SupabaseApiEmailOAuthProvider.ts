import { SupabaseApiSMTPServer } from './SupabaseApiSMTPServer';


export class SupabaseApiEmailOAuthProvider {
    private 'enable_email_sign_up'?: boolean;
    private 'enable_email_auto_confirm'?: boolean;
    private 'smtp_config'?: SupabaseApiSMTPServer;
    public constructor() { 
    }
    public withEnableEmailSignUp(enableEmailSignUp: boolean): SupabaseApiEmailOAuthProvider {
        this['enable_email_sign_up'] = enableEmailSignUp;
        return this;
    }
    public set enableEmailSignUp(enableEmailSignUp: boolean  | undefined) {
        this['enable_email_sign_up'] = enableEmailSignUp;
    }
    public get enableEmailSignUp(): boolean | undefined {
        return this['enable_email_sign_up'];
    }
    public withEnableEmailAutoConfirm(enableEmailAutoConfirm: boolean): SupabaseApiEmailOAuthProvider {
        this['enable_email_auto_confirm'] = enableEmailAutoConfirm;
        return this;
    }
    public set enableEmailAutoConfirm(enableEmailAutoConfirm: boolean  | undefined) {
        this['enable_email_auto_confirm'] = enableEmailAutoConfirm;
    }
    public get enableEmailAutoConfirm(): boolean | undefined {
        return this['enable_email_auto_confirm'];
    }
    public withSmtpConfig(smtpConfig: SupabaseApiSMTPServer): SupabaseApiEmailOAuthProvider {
        this['smtp_config'] = smtpConfig;
        return this;
    }
    public set smtpConfig(smtpConfig: SupabaseApiSMTPServer  | undefined) {
        this['smtp_config'] = smtpConfig;
    }
    public get smtpConfig(): SupabaseApiSMTPServer | undefined {
        return this['smtp_config'];
    }
}