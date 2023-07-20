

export class ApplicationItem {
    public name?: string;
    public platform?: string;
    private 'create_time'?: string;
    private 'application_urn'?: string;
    private 'application_id'?: string;
    public enabled?: string;
    private 'apple_certificate_expiration_date'?: string;
    public constructor(name?: string, platform?: string, createTime?: string, applicationUrn?: string, applicationId?: string, enabled?: string) { 
        this['name'] = name;
        this['platform'] = platform;
        this['create_time'] = createTime;
        this['application_urn'] = applicationUrn;
        this['application_id'] = applicationId;
        this['enabled'] = enabled;
    }
    public withName(name: string): ApplicationItem {
        this['name'] = name;
        return this;
    }
    public withPlatform(platform: string): ApplicationItem {
        this['platform'] = platform;
        return this;
    }
    public withCreateTime(createTime: string): ApplicationItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withApplicationUrn(applicationUrn: string): ApplicationItem {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
    public withApplicationId(applicationId: string): ApplicationItem {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnabled(enabled: string): ApplicationItem {
        this['enabled'] = enabled;
        return this;
    }
    public withAppleCertificateExpirationDate(appleCertificateExpirationDate: string): ApplicationItem {
        this['apple_certificate_expiration_date'] = appleCertificateExpirationDate;
        return this;
    }
    public set appleCertificateExpirationDate(appleCertificateExpirationDate: string  | undefined) {
        this['apple_certificate_expiration_date'] = appleCertificateExpirationDate;
    }
    public get appleCertificateExpirationDate(): string | undefined {
        return this['apple_certificate_expiration_date'];
    }
}