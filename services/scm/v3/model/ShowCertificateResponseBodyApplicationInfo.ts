

export class ShowCertificateResponseBodyApplicationInfo {
    public country?: string;
    private 'company_name'?: string;
    private 'company_province'?: string;
    private 'company_city'?: string;
    private 'applicant_name'?: string;
    private 'applicant_phone'?: string;
    private 'applicant_email'?: string;
    private 'contact_name'?: string;
    private 'contact_phone'?: string;
    private 'contact_email'?: string;
    public constructor() { 
    }
    public withCountry(country: string): ShowCertificateResponseBodyApplicationInfo {
        this['country'] = country;
        return this;
    }
    public withCompanyName(companyName: string): ShowCertificateResponseBodyApplicationInfo {
        this['company_name'] = companyName;
        return this;
    }
    public set companyName(companyName: string  | undefined) {
        this['company_name'] = companyName;
    }
    public get companyName(): string | undefined {
        return this['company_name'];
    }
    public withCompanyProvince(companyProvince: string): ShowCertificateResponseBodyApplicationInfo {
        this['company_province'] = companyProvince;
        return this;
    }
    public set companyProvince(companyProvince: string  | undefined) {
        this['company_province'] = companyProvince;
    }
    public get companyProvince(): string | undefined {
        return this['company_province'];
    }
    public withCompanyCity(companyCity: string): ShowCertificateResponseBodyApplicationInfo {
        this['company_city'] = companyCity;
        return this;
    }
    public set companyCity(companyCity: string  | undefined) {
        this['company_city'] = companyCity;
    }
    public get companyCity(): string | undefined {
        return this['company_city'];
    }
    public withApplicantName(applicantName: string): ShowCertificateResponseBodyApplicationInfo {
        this['applicant_name'] = applicantName;
        return this;
    }
    public set applicantName(applicantName: string  | undefined) {
        this['applicant_name'] = applicantName;
    }
    public get applicantName(): string | undefined {
        return this['applicant_name'];
    }
    public withApplicantPhone(applicantPhone: string): ShowCertificateResponseBodyApplicationInfo {
        this['applicant_phone'] = applicantPhone;
        return this;
    }
    public set applicantPhone(applicantPhone: string  | undefined) {
        this['applicant_phone'] = applicantPhone;
    }
    public get applicantPhone(): string | undefined {
        return this['applicant_phone'];
    }
    public withApplicantEmail(applicantEmail: string): ShowCertificateResponseBodyApplicationInfo {
        this['applicant_email'] = applicantEmail;
        return this;
    }
    public set applicantEmail(applicantEmail: string  | undefined) {
        this['applicant_email'] = applicantEmail;
    }
    public get applicantEmail(): string | undefined {
        return this['applicant_email'];
    }
    public withContactName(contactName: string): ShowCertificateResponseBodyApplicationInfo {
        this['contact_name'] = contactName;
        return this;
    }
    public set contactName(contactName: string  | undefined) {
        this['contact_name'] = contactName;
    }
    public get contactName(): string | undefined {
        return this['contact_name'];
    }
    public withContactPhone(contactPhone: string): ShowCertificateResponseBodyApplicationInfo {
        this['contact_phone'] = contactPhone;
        return this;
    }
    public set contactPhone(contactPhone: string  | undefined) {
        this['contact_phone'] = contactPhone;
    }
    public get contactPhone(): string | undefined {
        return this['contact_phone'];
    }
    public withContactEmail(contactEmail: string): ShowCertificateResponseBodyApplicationInfo {
        this['contact_email'] = contactEmail;
        return this;
    }
    public set contactEmail(contactEmail: string  | undefined) {
        this['contact_email'] = contactEmail;
    }
    public get contactEmail(): string | undefined {
        return this['contact_email'];
    }
}