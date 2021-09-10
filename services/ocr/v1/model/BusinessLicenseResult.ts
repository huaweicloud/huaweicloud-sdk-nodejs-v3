

export class BusinessLicenseResult {
    private 'registration_number'?: string | undefined;
    public name?: string;
    public type?: string;
    public address?: string;
    private 'legal_representative'?: string | undefined;
    private 'registered_capital'?: string | undefined;
    private 'found_date'?: string | undefined;
    private 'business_term'?: string | undefined;
    private 'business_scope'?: string | undefined;
    private 'issue_date'?: string | undefined;
    public confidence?: object;
    public constructor() { 
    }
    public withRegistrationNumber(registrationNumber: string): BusinessLicenseResult {
        this['registration_number'] = registrationNumber;
        return this;
    }
    public set registrationNumber(registrationNumber: string | undefined) {
        this['registration_number'] = registrationNumber;
    }
    public get registrationNumber() {
        return this['registration_number'];
    }
    public withName(name: string): BusinessLicenseResult {
        this['name'] = name;
        return this;
    }
    public withType(type: string): BusinessLicenseResult {
        this['type'] = type;
        return this;
    }
    public withAddress(address: string): BusinessLicenseResult {
        this['address'] = address;
        return this;
    }
    public withLegalRepresentative(legalRepresentative: string): BusinessLicenseResult {
        this['legal_representative'] = legalRepresentative;
        return this;
    }
    public set legalRepresentative(legalRepresentative: string | undefined) {
        this['legal_representative'] = legalRepresentative;
    }
    public get legalRepresentative() {
        return this['legal_representative'];
    }
    public withRegisteredCapital(registeredCapital: string): BusinessLicenseResult {
        this['registered_capital'] = registeredCapital;
        return this;
    }
    public set registeredCapital(registeredCapital: string | undefined) {
        this['registered_capital'] = registeredCapital;
    }
    public get registeredCapital() {
        return this['registered_capital'];
    }
    public withFoundDate(foundDate: string): BusinessLicenseResult {
        this['found_date'] = foundDate;
        return this;
    }
    public set foundDate(foundDate: string | undefined) {
        this['found_date'] = foundDate;
    }
    public get foundDate() {
        return this['found_date'];
    }
    public withBusinessTerm(businessTerm: string): BusinessLicenseResult {
        this['business_term'] = businessTerm;
        return this;
    }
    public set businessTerm(businessTerm: string | undefined) {
        this['business_term'] = businessTerm;
    }
    public get businessTerm() {
        return this['business_term'];
    }
    public withBusinessScope(businessScope: string): BusinessLicenseResult {
        this['business_scope'] = businessScope;
        return this;
    }
    public set businessScope(businessScope: string | undefined) {
        this['business_scope'] = businessScope;
    }
    public get businessScope() {
        return this['business_scope'];
    }
    public withIssueDate(issueDate: string): BusinessLicenseResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withConfidence(confidence: object): BusinessLicenseResult {
        this['confidence'] = confidence;
        return this;
    }
}