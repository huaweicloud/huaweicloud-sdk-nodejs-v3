

export class VehicleLicenseBack {
    private 'number'?: string;
    private 'file_no'?: string;
    private 'approved_passengers'?: string;
    private 'gross_mass'?: string;
    private 'unladen_mass'?: string;
    private 'approved_load'?: string;
    public dimension?: string;
    private 'traction_mass'?: string;
    public remarks?: string;
    private 'inspection_record'?: string;
    private 'code_number'?: string;
    private 'energy_type'?: string;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): VehicleLicenseBack {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withFileNo(fileNo: string): VehicleLicenseBack {
        this['file_no'] = fileNo;
        return this;
    }
    public set fileNo(fileNo: string  | undefined) {
        this['file_no'] = fileNo;
    }
    public get fileNo(): string | undefined {
        return this['file_no'];
    }
    public withApprovedPassengers(approvedPassengers: string): VehicleLicenseBack {
        this['approved_passengers'] = approvedPassengers;
        return this;
    }
    public set approvedPassengers(approvedPassengers: string  | undefined) {
        this['approved_passengers'] = approvedPassengers;
    }
    public get approvedPassengers(): string | undefined {
        return this['approved_passengers'];
    }
    public withGrossMass(grossMass: string): VehicleLicenseBack {
        this['gross_mass'] = grossMass;
        return this;
    }
    public set grossMass(grossMass: string  | undefined) {
        this['gross_mass'] = grossMass;
    }
    public get grossMass(): string | undefined {
        return this['gross_mass'];
    }
    public withUnladenMass(unladenMass: string): VehicleLicenseBack {
        this['unladen_mass'] = unladenMass;
        return this;
    }
    public set unladenMass(unladenMass: string  | undefined) {
        this['unladen_mass'] = unladenMass;
    }
    public get unladenMass(): string | undefined {
        return this['unladen_mass'];
    }
    public withApprovedLoad(approvedLoad: string): VehicleLicenseBack {
        this['approved_load'] = approvedLoad;
        return this;
    }
    public set approvedLoad(approvedLoad: string  | undefined) {
        this['approved_load'] = approvedLoad;
    }
    public get approvedLoad(): string | undefined {
        return this['approved_load'];
    }
    public withDimension(dimension: string): VehicleLicenseBack {
        this['dimension'] = dimension;
        return this;
    }
    public withTractionMass(tractionMass: string): VehicleLicenseBack {
        this['traction_mass'] = tractionMass;
        return this;
    }
    public set tractionMass(tractionMass: string  | undefined) {
        this['traction_mass'] = tractionMass;
    }
    public get tractionMass(): string | undefined {
        return this['traction_mass'];
    }
    public withRemarks(remarks: string): VehicleLicenseBack {
        this['remarks'] = remarks;
        return this;
    }
    public withInspectionRecord(inspectionRecord: string): VehicleLicenseBack {
        this['inspection_record'] = inspectionRecord;
        return this;
    }
    public set inspectionRecord(inspectionRecord: string  | undefined) {
        this['inspection_record'] = inspectionRecord;
    }
    public get inspectionRecord(): string | undefined {
        return this['inspection_record'];
    }
    public withCodeNumber(codeNumber: string): VehicleLicenseBack {
        this['code_number'] = codeNumber;
        return this;
    }
    public set codeNumber(codeNumber: string  | undefined) {
        this['code_number'] = codeNumber;
    }
    public get codeNumber(): string | undefined {
        return this['code_number'];
    }
    public withEnergyType(energyType: string): VehicleLicenseBack {
        this['energy_type'] = energyType;
        return this;
    }
    public set energyType(energyType: string  | undefined) {
        this['energy_type'] = energyType;
    }
    public get energyType(): string | undefined {
        return this['energy_type'];
    }
    public withTextLocation(textLocation: object): VehicleLicenseBack {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
}