

export class TransportationLicenseResult {
    private 'owner_name'?: string;
    private 'license_number'?: string;
    private 'vehicle_number'?: string;
    private 'vehicle_type'?: string;
    private 'maximum_capacity'?: string;
    private 'vehicle_size'?: string;
    private 'issuing_authority'?: string;
    private 'issue_date'?: string;
    private 'owner_address'?: string;
    private 'economic_type'?: string;
    private 'business_certificate'?: string;
    private 'business_scope'?: string;
    private 'expiry_date'?: string;
    private 'review_expiry_date'?: string;
    private 'assessed_technical_level'?: string;
    private 'image_location'?: Array<Array<number>>;
    private 'adjusted_image'?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withOwnerName(ownerName: string): TransportationLicenseResult {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withLicenseNumber(licenseNumber: string): TransportationLicenseResult {
        this['license_number'] = licenseNumber;
        return this;
    }
    public set licenseNumber(licenseNumber: string  | undefined) {
        this['license_number'] = licenseNumber;
    }
    public get licenseNumber(): string | undefined {
        return this['license_number'];
    }
    public withVehicleNumber(vehicleNumber: string): TransportationLicenseResult {
        this['vehicle_number'] = vehicleNumber;
        return this;
    }
    public set vehicleNumber(vehicleNumber: string  | undefined) {
        this['vehicle_number'] = vehicleNumber;
    }
    public get vehicleNumber(): string | undefined {
        return this['vehicle_number'];
    }
    public withVehicleType(vehicleType: string): TransportationLicenseResult {
        this['vehicle_type'] = vehicleType;
        return this;
    }
    public set vehicleType(vehicleType: string  | undefined) {
        this['vehicle_type'] = vehicleType;
    }
    public get vehicleType(): string | undefined {
        return this['vehicle_type'];
    }
    public withMaximumCapacity(maximumCapacity: string): TransportationLicenseResult {
        this['maximum_capacity'] = maximumCapacity;
        return this;
    }
    public set maximumCapacity(maximumCapacity: string  | undefined) {
        this['maximum_capacity'] = maximumCapacity;
    }
    public get maximumCapacity(): string | undefined {
        return this['maximum_capacity'];
    }
    public withVehicleSize(vehicleSize: string): TransportationLicenseResult {
        this['vehicle_size'] = vehicleSize;
        return this;
    }
    public set vehicleSize(vehicleSize: string  | undefined) {
        this['vehicle_size'] = vehicleSize;
    }
    public get vehicleSize(): string | undefined {
        return this['vehicle_size'];
    }
    public withIssuingAuthority(issuingAuthority: string): TransportationLicenseResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): string | undefined {
        return this['issuing_authority'];
    }
    public withIssueDate(issueDate: string): TransportationLicenseResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withOwnerAddress(ownerAddress: string): TransportationLicenseResult {
        this['owner_address'] = ownerAddress;
        return this;
    }
    public set ownerAddress(ownerAddress: string  | undefined) {
        this['owner_address'] = ownerAddress;
    }
    public get ownerAddress(): string | undefined {
        return this['owner_address'];
    }
    public withEconomicType(economicType: string): TransportationLicenseResult {
        this['economic_type'] = economicType;
        return this;
    }
    public set economicType(economicType: string  | undefined) {
        this['economic_type'] = economicType;
    }
    public get economicType(): string | undefined {
        return this['economic_type'];
    }
    public withBusinessCertificate(businessCertificate: string): TransportationLicenseResult {
        this['business_certificate'] = businessCertificate;
        return this;
    }
    public set businessCertificate(businessCertificate: string  | undefined) {
        this['business_certificate'] = businessCertificate;
    }
    public get businessCertificate(): string | undefined {
        return this['business_certificate'];
    }
    public withBusinessScope(businessScope: string): TransportationLicenseResult {
        this['business_scope'] = businessScope;
        return this;
    }
    public set businessScope(businessScope: string  | undefined) {
        this['business_scope'] = businessScope;
    }
    public get businessScope(): string | undefined {
        return this['business_scope'];
    }
    public withExpiryDate(expiryDate: string): TransportationLicenseResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withReviewExpiryDate(reviewExpiryDate: string): TransportationLicenseResult {
        this['review_expiry_date'] = reviewExpiryDate;
        return this;
    }
    public set reviewExpiryDate(reviewExpiryDate: string  | undefined) {
        this['review_expiry_date'] = reviewExpiryDate;
    }
    public get reviewExpiryDate(): string | undefined {
        return this['review_expiry_date'];
    }
    public withAssessedTechnicalLevel(assessedTechnicalLevel: string): TransportationLicenseResult {
        this['assessed_technical_level'] = assessedTechnicalLevel;
        return this;
    }
    public set assessedTechnicalLevel(assessedTechnicalLevel: string  | undefined) {
        this['assessed_technical_level'] = assessedTechnicalLevel;
    }
    public get assessedTechnicalLevel(): string | undefined {
        return this['assessed_technical_level'];
    }
    public withImageLocation(imageLocation: Array<Array<number>>): TransportationLicenseResult {
        this['image_location'] = imageLocation;
        return this;
    }
    public set imageLocation(imageLocation: Array<Array<number>>  | undefined) {
        this['image_location'] = imageLocation;
    }
    public get imageLocation(): Array<Array<number>> | undefined {
        return this['image_location'];
    }
    public withAdjustedImage(adjustedImage: string): TransportationLicenseResult {
        this['adjusted_image'] = adjustedImage;
        return this;
    }
    public set adjustedImage(adjustedImage: string  | undefined) {
        this['adjusted_image'] = adjustedImage;
    }
    public get adjustedImage(): string | undefined {
        return this['adjusted_image'];
    }
    public withConfidence(confidence: object): TransportationLicenseResult {
        this['confidence'] = confidence;
        return this;
    }
}