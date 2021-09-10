

export class VehicleLicenseResult {
    private 'number'?: string | undefined;
    private 'vehicle_type'?: string | undefined;
    public name?: string;
    public address?: string;
    private 'use_character'?: string | undefined;
    public model?: string;
    private 'engine_no'?: string | undefined;
    public vin?: string;
    private 'register_date'?: string | undefined;
    private 'issue_date'?: string | undefined;
    private 'issuing_authority'?: string | undefined;
    private 'file_no'?: string | undefined;
    private 'approved_passengers'?: string | undefined;
    private 'gross_mass'?: string | undefined;
    private 'unladen_mass'?: string | undefined;
    private 'approved_load'?: string | undefined;
    public dimension?: string;
    private 'traction_mass'?: string | undefined;
    public remarks?: string;
    private 'inspection_record'?: string | undefined;
    private 'code_number'?: string | undefined;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): VehicleLicenseResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withVehicleType(vehicleType: string): VehicleLicenseResult {
        this['vehicle_type'] = vehicleType;
        return this;
    }
    public set vehicleType(vehicleType: string | undefined) {
        this['vehicle_type'] = vehicleType;
    }
    public get vehicleType() {
        return this['vehicle_type'];
    }
    public withName(name: string): VehicleLicenseResult {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): VehicleLicenseResult {
        this['address'] = address;
        return this;
    }
    public withUseCharacter(useCharacter: string): VehicleLicenseResult {
        this['use_character'] = useCharacter;
        return this;
    }
    public set useCharacter(useCharacter: string | undefined) {
        this['use_character'] = useCharacter;
    }
    public get useCharacter() {
        return this['use_character'];
    }
    public withModel(model: string): VehicleLicenseResult {
        this['model'] = model;
        return this;
    }
    public withEngineNo(engineNo: string): VehicleLicenseResult {
        this['engine_no'] = engineNo;
        return this;
    }
    public set engineNo(engineNo: string | undefined) {
        this['engine_no'] = engineNo;
    }
    public get engineNo() {
        return this['engine_no'];
    }
    public withVin(vin: string): VehicleLicenseResult {
        this['vin'] = vin;
        return this;
    }
    public withRegisterDate(registerDate: string): VehicleLicenseResult {
        this['register_date'] = registerDate;
        return this;
    }
    public set registerDate(registerDate: string | undefined) {
        this['register_date'] = registerDate;
    }
    public get registerDate() {
        return this['register_date'];
    }
    public withIssueDate(issueDate: string): VehicleLicenseResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withIssuingAuthority(issuingAuthority: string): VehicleLicenseResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority() {
        return this['issuing_authority'];
    }
    public withFileNo(fileNo: string): VehicleLicenseResult {
        this['file_no'] = fileNo;
        return this;
    }
    public set fileNo(fileNo: string | undefined) {
        this['file_no'] = fileNo;
    }
    public get fileNo() {
        return this['file_no'];
    }
    public withApprovedPassengers(approvedPassengers: string): VehicleLicenseResult {
        this['approved_passengers'] = approvedPassengers;
        return this;
    }
    public set approvedPassengers(approvedPassengers: string | undefined) {
        this['approved_passengers'] = approvedPassengers;
    }
    public get approvedPassengers() {
        return this['approved_passengers'];
    }
    public withGrossMass(grossMass: string): VehicleLicenseResult {
        this['gross_mass'] = grossMass;
        return this;
    }
    public set grossMass(grossMass: string | undefined) {
        this['gross_mass'] = grossMass;
    }
    public get grossMass() {
        return this['gross_mass'];
    }
    public withUnladenMass(unladenMass: string): VehicleLicenseResult {
        this['unladen_mass'] = unladenMass;
        return this;
    }
    public set unladenMass(unladenMass: string | undefined) {
        this['unladen_mass'] = unladenMass;
    }
    public get unladenMass() {
        return this['unladen_mass'];
    }
    public withApprovedLoad(approvedLoad: string): VehicleLicenseResult {
        this['approved_load'] = approvedLoad;
        return this;
    }
    public set approvedLoad(approvedLoad: string | undefined) {
        this['approved_load'] = approvedLoad;
    }
    public get approvedLoad() {
        return this['approved_load'];
    }
    public withDimension(dimension: string): VehicleLicenseResult {
        this['dimension'] = dimension;
        return this;
    }
    public withTractionMass(tractionMass: string): VehicleLicenseResult {
        this['traction_mass'] = tractionMass;
        return this;
    }
    public set tractionMass(tractionMass: string | undefined) {
        this['traction_mass'] = tractionMass;
    }
    public get tractionMass() {
        return this['traction_mass'];
    }
    public withRemarks(remarks: string): VehicleLicenseResult {
        this['remarks'] = remarks;
        return this;
    }
    public withInspectionRecord(inspectionRecord: string): VehicleLicenseResult {
        this['inspection_record'] = inspectionRecord;
        return this;
    }
    public set inspectionRecord(inspectionRecord: string | undefined) {
        this['inspection_record'] = inspectionRecord;
    }
    public get inspectionRecord() {
        return this['inspection_record'];
    }
    public withCodeNumber(codeNumber: string): VehicleLicenseResult {
        this['code_number'] = codeNumber;
        return this;
    }
    public set codeNumber(codeNumber: string | undefined) {
        this['code_number'] = codeNumber;
    }
    public get codeNumber() {
        return this['code_number'];
    }
}