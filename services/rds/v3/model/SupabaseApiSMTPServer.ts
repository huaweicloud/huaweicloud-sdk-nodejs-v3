

export class SupabaseApiSMTPServer {
    private 'smtp_host'?: string;
    private 'smtp_port'?: number;
    private 'smtp_user'?: string;
    private 'smtp_admin_email'?: string;
    private 'smtp_sender_name'?: string;
    private 'smtp_max_frequency'?: number;
    public constructor() { 
    }
    public withSmtpHost(smtpHost: string): SupabaseApiSMTPServer {
        this['smtp_host'] = smtpHost;
        return this;
    }
    public set smtpHost(smtpHost: string  | undefined) {
        this['smtp_host'] = smtpHost;
    }
    public get smtpHost(): string | undefined {
        return this['smtp_host'];
    }
    public withSmtpPort(smtpPort: number): SupabaseApiSMTPServer {
        this['smtp_port'] = smtpPort;
        return this;
    }
    public set smtpPort(smtpPort: number  | undefined) {
        this['smtp_port'] = smtpPort;
    }
    public get smtpPort(): number | undefined {
        return this['smtp_port'];
    }
    public withSmtpUser(smtpUser: string): SupabaseApiSMTPServer {
        this['smtp_user'] = smtpUser;
        return this;
    }
    public set smtpUser(smtpUser: string  | undefined) {
        this['smtp_user'] = smtpUser;
    }
    public get smtpUser(): string | undefined {
        return this['smtp_user'];
    }
    public withSmtpAdminEmail(smtpAdminEmail: string): SupabaseApiSMTPServer {
        this['smtp_admin_email'] = smtpAdminEmail;
        return this;
    }
    public set smtpAdminEmail(smtpAdminEmail: string  | undefined) {
        this['smtp_admin_email'] = smtpAdminEmail;
    }
    public get smtpAdminEmail(): string | undefined {
        return this['smtp_admin_email'];
    }
    public withSmtpSenderName(smtpSenderName: string): SupabaseApiSMTPServer {
        this['smtp_sender_name'] = smtpSenderName;
        return this;
    }
    public set smtpSenderName(smtpSenderName: string  | undefined) {
        this['smtp_sender_name'] = smtpSenderName;
    }
    public get smtpSenderName(): string | undefined {
        return this['smtp_sender_name'];
    }
    public withSmtpMaxFrequency(smtpMaxFrequency: number): SupabaseApiSMTPServer {
        this['smtp_max_frequency'] = smtpMaxFrequency;
        return this;
    }
    public set smtpMaxFrequency(smtpMaxFrequency: number  | undefined) {
        this['smtp_max_frequency'] = smtpMaxFrequency;
    }
    public get smtpMaxFrequency(): number | undefined {
        return this['smtp_max_frequency'];
    }
}