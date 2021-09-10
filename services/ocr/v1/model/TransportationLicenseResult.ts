

export class TransportationLicenseResult {
    private 'owner_name'?: string | undefined;
    private 'license_number'?: string | undefined;
    private 'vehicle_number'?: string | undefined;
    private 'vehicle_type'?: string | undefined;
    private 'vehicle_weight'?: string | undefined;
    private 'vehicle_size'?: string | undefined;
    private 'issuing_authority'?: string | undefined;
    private 'issue_date'?: string | undefined;
    private 'owner_address'?: string | undefined;
    private 'economic_type'?: string | undefined;
    private 'business_certificate'?: string | undefined;
    private 'business_scope'?: string | undefined;
    public confidence?: object;
    public constructor() { 
    }
    public withOwnerName(ownerName: string): TransportationLicenseResult {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName() {
        return this['owner_name'];
    }
    public withLicenseNumber(licenseNumber: string): TransportationLicenseResult {
        this['license_number'] = licenseNumber;
        return this;
    }
    public set licenseNumber(licenseNumber: string | undefined) {
        this['license_number'] = licenseNumber;
    }
    public get licenseNumber() {
        return this['license_number'];
    }
    public withVehicleNumber(vehicleNumber: string): TransportationLicenseResult {
        this['vehicle_number'] = vehicleNumber;
        return this;
    }
    public set vehicleNumber(vehicleNumber: string | undefined) {
        this['vehicle_number'] = vehicleNumber;
    }
    public get vehicleNumber() {
        return this['vehicle_number'];
    }
    public withVehicleType(vehicleType: string): TransportationLicenseResult {
        this['vehicle_type'] = vehicleType;
        return this;
    }
    public set vehicleType(vehicleType: string | undefined) {
        this['vehicle_type'] = vehicleType;
    }
    public get vehicleType() {
        return this['vehicle_type'];
    }
    public withVehicleWeight(vehicleWeight: string): TransportationLicenseResult {
        this['vehicle_weight'] = vehicleWeight;
        return this;
    }
    public set vehicleWeight(vehicleWeight: string | undefined) {
        this['vehicle_weight'] = vehicleWeight;
    }
    public get vehicleWeight() {
        return this['vehicle_weight'];
    }
    public withVehicleSize(vehicleSize: string): TransportationLicenseResult {
        this['vehicle_size'] = vehicleSize;
        return this;
    }
    public set vehicleSize(vehicleSize: string | undefined) {
        this['vehicle_size'] = vehicleSize;
    }
    public get vehicleSize() {
        return this['vehicle_size'];
    }
    public withIssuingAuthority(issuingAuthority: string): TransportationLicenseResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority() {
        return this['issuing_authority'];
    }
    public withIssueDate(issueDate: string): TransportationLicenseResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withOwnerAddress(ownerAddress: string): TransportationLicenseResult {
        this['owner_address'] = ownerAddress;
        return this;
    }
    public set ownerAddress(ownerAddress: string | undefined) {
        this['owner_address'] = ownerAddress;
    }
    public get ownerAddress() {
        return this['owner_address'];
    }
    public withEconomicType(economicType: string): TransportationLicenseResult {
        this['economic_type'] = economicType;
        return this;
    }
    public set economicType(economicType: string | undefined) {
        this['economic_type'] = economicType;
    }
    public get economicType() {
        return this['economic_type'];
    }
    public withBusinessCertificate(businessCertificate: string): TransportationLicenseResult {
        this['business_certificate'] = businessCertificate;
        return this;
    }
    public set businessCertificate(businessCertificate: string | undefined) {
        this['business_certificate'] = businessCertificate;
    }
    public get businessCertificate() {
        return this['business_certificate'];
    }
    public withBusinessScope(businessScope: string): TransportationLicenseResult {
        this['business_scope'] = businessScope;
        return this;
    }
    public set businessScope(businessScope: string | undefined) {
        this['business_scope'] = businessScope;
    }
    public get businessScope() {
        return this['business_scope'];
    }
    public withConfidence(confidence: object): TransportationLicenseResult {
        this['confidence'] = confidence;
        return this;
    }
}