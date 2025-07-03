

export class TemplateOsProfile {
    private 'key_name'?: string;
    private 'user_data'?: string;
    private 'iam_agency_name'?: string;
    private 'enable_monitoring_service'?: boolean;
    public constructor() { 
    }
    public withKeyName(keyName: string): TemplateOsProfile {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withUserData(userData: string): TemplateOsProfile {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withIamAgencyName(iamAgencyName: string): TemplateOsProfile {
        this['iam_agency_name'] = iamAgencyName;
        return this;
    }
    public set iamAgencyName(iamAgencyName: string  | undefined) {
        this['iam_agency_name'] = iamAgencyName;
    }
    public get iamAgencyName(): string | undefined {
        return this['iam_agency_name'];
    }
    public withEnableMonitoringService(enableMonitoringService: boolean): TemplateOsProfile {
        this['enable_monitoring_service'] = enableMonitoringService;
        return this;
    }
    public set enableMonitoringService(enableMonitoringService: boolean  | undefined) {
        this['enable_monitoring_service'] = enableMonitoringService;
    }
    public get enableMonitoringService(): boolean | undefined {
        return this['enable_monitoring_service'];
    }
}