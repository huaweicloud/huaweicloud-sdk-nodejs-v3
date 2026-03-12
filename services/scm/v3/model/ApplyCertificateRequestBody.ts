

export class ApplyCertificateRequestBody {
    public domain?: string;
    public sans?: string;
    public csr?: string;
    private 'company_name'?: string;
    private 'company_unit'?: string;
    private 'company_province'?: string;
    private 'company_city'?: string;
    public country?: string;
    private 'applicant_name'?: string;
    private 'applicant_phone'?: string;
    private 'applicant_email'?: string;
    private 'contact_name'?: string;
    private 'contact_phone'?: string;
    private 'contact_email'?: string;
    private 'auto_dns_auth'?: boolean;
    private 'agree_privacy_protection'?: boolean;
    private 'domain_method'?: string;
    private 'key_algorithm'?: string;
    private 'ca_hash_algorithm'?: string;
    public constructor(domain?: string, applicantName?: string, applicantPhone?: string, applicantEmail?: string, agreePrivacyProtection?: boolean, domainMethod?: string) { 
        this['domain'] = domain;
        this['applicant_name'] = applicantName;
        this['applicant_phone'] = applicantPhone;
        this['applicant_email'] = applicantEmail;
        this['agree_privacy_protection'] = agreePrivacyProtection;
        this['domain_method'] = domainMethod;
    }
    public withDomain(domain: string): ApplyCertificateRequestBody {
        this['domain'] = domain;
        return this;
    }
    public withSans(sans: string): ApplyCertificateRequestBody {
        this['sans'] = sans;
        return this;
    }
    public withCsr(csr: string): ApplyCertificateRequestBody {
        this['csr'] = csr;
        return this;
    }
    public withCompanyName(companyName: string): ApplyCertificateRequestBody {
        this['company_name'] = companyName;
        return this;
    }
    public set companyName(companyName: string  | undefined) {
        this['company_name'] = companyName;
    }
    public get companyName(): string | undefined {
        return this['company_name'];
    }
    public withCompanyUnit(companyUnit: string): ApplyCertificateRequestBody {
        this['company_unit'] = companyUnit;
        return this;
    }
    public set companyUnit(companyUnit: string  | undefined) {
        this['company_unit'] = companyUnit;
    }
    public get companyUnit(): string | undefined {
        return this['company_unit'];
    }
    public withCompanyProvince(companyProvince: string): ApplyCertificateRequestBody {
        this['company_province'] = companyProvince;
        return this;
    }
    public set companyProvince(companyProvince: string  | undefined) {
        this['company_province'] = companyProvince;
    }
    public get companyProvince(): string | undefined {
        return this['company_province'];
    }
    public withCompanyCity(companyCity: string): ApplyCertificateRequestBody {
        this['company_city'] = companyCity;
        return this;
    }
    public set companyCity(companyCity: string  | undefined) {
        this['company_city'] = companyCity;
    }
    public get companyCity(): string | undefined {
        return this['company_city'];
    }
    public withCountry(country: string): ApplyCertificateRequestBody {
        this['country'] = country;
        return this;
    }
    public withApplicantName(applicantName: string): ApplyCertificateRequestBody {
        this['applicant_name'] = applicantName;
        return this;
    }
    public set applicantName(applicantName: string  | undefined) {
        this['applicant_name'] = applicantName;
    }
    public get applicantName(): string | undefined {
        return this['applicant_name'];
    }
    public withApplicantPhone(applicantPhone: string): ApplyCertificateRequestBody {
        this['applicant_phone'] = applicantPhone;
        return this;
    }
    public set applicantPhone(applicantPhone: string  | undefined) {
        this['applicant_phone'] = applicantPhone;
    }
    public get applicantPhone(): string | undefined {
        return this['applicant_phone'];
    }
    public withApplicantEmail(applicantEmail: string): ApplyCertificateRequestBody {
        this['applicant_email'] = applicantEmail;
        return this;
    }
    public set applicantEmail(applicantEmail: string  | undefined) {
        this['applicant_email'] = applicantEmail;
    }
    public get applicantEmail(): string | undefined {
        return this['applicant_email'];
    }
    public withContactName(contactName: string): ApplyCertificateRequestBody {
        this['contact_name'] = contactName;
        return this;
    }
    public set contactName(contactName: string  | undefined) {
        this['contact_name'] = contactName;
    }
    public get contactName(): string | undefined {
        return this['contact_name'];
    }
    public withContactPhone(contactPhone: string): ApplyCertificateRequestBody {
        this['contact_phone'] = contactPhone;
        return this;
    }
    public set contactPhone(contactPhone: string  | undefined) {
        this['contact_phone'] = contactPhone;
    }
    public get contactPhone(): string | undefined {
        return this['contact_phone'];
    }
    public withContactEmail(contactEmail: string): ApplyCertificateRequestBody {
        this['contact_email'] = contactEmail;
        return this;
    }
    public set contactEmail(contactEmail: string  | undefined) {
        this['contact_email'] = contactEmail;
    }
    public get contactEmail(): string | undefined {
        return this['contact_email'];
    }
    public withAutoDnsAuth(autoDnsAuth: boolean): ApplyCertificateRequestBody {
        this['auto_dns_auth'] = autoDnsAuth;
        return this;
    }
    public set autoDnsAuth(autoDnsAuth: boolean  | undefined) {
        this['auto_dns_auth'] = autoDnsAuth;
    }
    public get autoDnsAuth(): boolean | undefined {
        return this['auto_dns_auth'];
    }
    public withAgreePrivacyProtection(agreePrivacyProtection: boolean): ApplyCertificateRequestBody {
        this['agree_privacy_protection'] = agreePrivacyProtection;
        return this;
    }
    public set agreePrivacyProtection(agreePrivacyProtection: boolean  | undefined) {
        this['agree_privacy_protection'] = agreePrivacyProtection;
    }
    public get agreePrivacyProtection(): boolean | undefined {
        return this['agree_privacy_protection'];
    }
    public withDomainMethod(domainMethod: string): ApplyCertificateRequestBody {
        this['domain_method'] = domainMethod;
        return this;
    }
    public set domainMethod(domainMethod: string  | undefined) {
        this['domain_method'] = domainMethod;
    }
    public get domainMethod(): string | undefined {
        return this['domain_method'];
    }
    public withKeyAlgorithm(keyAlgorithm: string): ApplyCertificateRequestBody {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withCaHashAlgorithm(caHashAlgorithm: string): ApplyCertificateRequestBody {
        this['ca_hash_algorithm'] = caHashAlgorithm;
        return this;
    }
    public set caHashAlgorithm(caHashAlgorithm: string  | undefined) {
        this['ca_hash_algorithm'] = caHashAlgorithm;
    }
    public get caHashAlgorithm(): string | undefined {
        return this['ca_hash_algorithm'];
    }
}