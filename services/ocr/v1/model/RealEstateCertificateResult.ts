

export class RealEstateCertificateResult {
    public issuer?: string;
    private 'issue_date'?: string;
    private 'real_estate_certificate_no'?: string;
    private 'mortgage_seals'?: number;
    private 'canceled_mortgage_seals'?: number;
    private 'estate_location'?: string;
    private 'total_floors'?: string;
    public floor?: string;
    private 'year_built'?: string;
    public structure?: string;
    public area?: string;
    private 'revenue_stamps'?: number;
    private 'ownership_certificate_no'?: string;
    private 'estate_holder'?: string;
    public obligee?: string;
    public ownership?: string;
    private 'property_unit_no'?: string;
    private 'right_type'?: string;
    private 'right_nature'?: string;
    public usage?: string;
    private 'intended_usage'?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withIssuer(issuer: string): RealEstateCertificateResult {
        this['issuer'] = issuer;
        return this;
    }
    public withIssueDate(issueDate: string): RealEstateCertificateResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withRealEstateCertificateNo(realEstateCertificateNo: string): RealEstateCertificateResult {
        this['real_estate_certificate_no'] = realEstateCertificateNo;
        return this;
    }
    public set realEstateCertificateNo(realEstateCertificateNo: string  | undefined) {
        this['real_estate_certificate_no'] = realEstateCertificateNo;
    }
    public get realEstateCertificateNo(): string | undefined {
        return this['real_estate_certificate_no'];
    }
    public withMortgageSeals(mortgageSeals: number): RealEstateCertificateResult {
        this['mortgage_seals'] = mortgageSeals;
        return this;
    }
    public set mortgageSeals(mortgageSeals: number  | undefined) {
        this['mortgage_seals'] = mortgageSeals;
    }
    public get mortgageSeals(): number | undefined {
        return this['mortgage_seals'];
    }
    public withCanceledMortgageSeals(canceledMortgageSeals: number): RealEstateCertificateResult {
        this['canceled_mortgage_seals'] = canceledMortgageSeals;
        return this;
    }
    public set canceledMortgageSeals(canceledMortgageSeals: number  | undefined) {
        this['canceled_mortgage_seals'] = canceledMortgageSeals;
    }
    public get canceledMortgageSeals(): number | undefined {
        return this['canceled_mortgage_seals'];
    }
    public withEstateLocation(estateLocation: string): RealEstateCertificateResult {
        this['estate_location'] = estateLocation;
        return this;
    }
    public set estateLocation(estateLocation: string  | undefined) {
        this['estate_location'] = estateLocation;
    }
    public get estateLocation(): string | undefined {
        return this['estate_location'];
    }
    public withTotalFloors(totalFloors: string): RealEstateCertificateResult {
        this['total_floors'] = totalFloors;
        return this;
    }
    public set totalFloors(totalFloors: string  | undefined) {
        this['total_floors'] = totalFloors;
    }
    public get totalFloors(): string | undefined {
        return this['total_floors'];
    }
    public withFloor(floor: string): RealEstateCertificateResult {
        this['floor'] = floor;
        return this;
    }
    public withYearBuilt(yearBuilt: string): RealEstateCertificateResult {
        this['year_built'] = yearBuilt;
        return this;
    }
    public set yearBuilt(yearBuilt: string  | undefined) {
        this['year_built'] = yearBuilt;
    }
    public get yearBuilt(): string | undefined {
        return this['year_built'];
    }
    public withStructure(structure: string): RealEstateCertificateResult {
        this['structure'] = structure;
        return this;
    }
    public withArea(area: string): RealEstateCertificateResult {
        this['area'] = area;
        return this;
    }
    public withRevenueStamps(revenueStamps: number): RealEstateCertificateResult {
        this['revenue_stamps'] = revenueStamps;
        return this;
    }
    public set revenueStamps(revenueStamps: number  | undefined) {
        this['revenue_stamps'] = revenueStamps;
    }
    public get revenueStamps(): number | undefined {
        return this['revenue_stamps'];
    }
    public withOwnershipCertificateNo(ownershipCertificateNo: string): RealEstateCertificateResult {
        this['ownership_certificate_no'] = ownershipCertificateNo;
        return this;
    }
    public set ownershipCertificateNo(ownershipCertificateNo: string  | undefined) {
        this['ownership_certificate_no'] = ownershipCertificateNo;
    }
    public get ownershipCertificateNo(): string | undefined {
        return this['ownership_certificate_no'];
    }
    public withEstateHolder(estateHolder: string): RealEstateCertificateResult {
        this['estate_holder'] = estateHolder;
        return this;
    }
    public set estateHolder(estateHolder: string  | undefined) {
        this['estate_holder'] = estateHolder;
    }
    public get estateHolder(): string | undefined {
        return this['estate_holder'];
    }
    public withObligee(obligee: string): RealEstateCertificateResult {
        this['obligee'] = obligee;
        return this;
    }
    public withOwnership(ownership: string): RealEstateCertificateResult {
        this['ownership'] = ownership;
        return this;
    }
    public withPropertyUnitNo(propertyUnitNo: string): RealEstateCertificateResult {
        this['property_unit_no'] = propertyUnitNo;
        return this;
    }
    public set propertyUnitNo(propertyUnitNo: string  | undefined) {
        this['property_unit_no'] = propertyUnitNo;
    }
    public get propertyUnitNo(): string | undefined {
        return this['property_unit_no'];
    }
    public withRightType(rightType: string): RealEstateCertificateResult {
        this['right_type'] = rightType;
        return this;
    }
    public set rightType(rightType: string  | undefined) {
        this['right_type'] = rightType;
    }
    public get rightType(): string | undefined {
        return this['right_type'];
    }
    public withRightNature(rightNature: string): RealEstateCertificateResult {
        this['right_nature'] = rightNature;
        return this;
    }
    public set rightNature(rightNature: string  | undefined) {
        this['right_nature'] = rightNature;
    }
    public get rightNature(): string | undefined {
        return this['right_nature'];
    }
    public withUsage(usage: string): RealEstateCertificateResult {
        this['usage'] = usage;
        return this;
    }
    public withIntendedUsage(intendedUsage: string): RealEstateCertificateResult {
        this['intended_usage'] = intendedUsage;
        return this;
    }
    public set intendedUsage(intendedUsage: string  | undefined) {
        this['intended_usage'] = intendedUsage;
    }
    public get intendedUsage(): string | undefined {
        return this['intended_usage'];
    }
    public withConfidence(confidence: object): RealEstateCertificateResult {
        this['confidence'] = confidence;
        return this;
    }
}