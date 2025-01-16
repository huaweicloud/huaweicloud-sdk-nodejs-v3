import { VehicleLicenseFront } from './VehicleLicenseFront';
import { VehicleLicenseback } from './VehicleLicenseback';


export class VehicleLicenseResult {
    public type?: string;
    private 'number'?: string;
    private 'vehicle_type'?: string;
    public name?: string;
    public address?: string;
    private 'use_character'?: string;
    public model?: string;
    private 'engine_no'?: string;
    public vin?: string;
    private 'register_date'?: string;
    private 'issue_date'?: string;
    private 'issuing_authority'?: string;
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
    private 'text_location'?: object;
    private 'energy_type'?: string;
    public color?: string;
    private 'mandatory_scrapping_date'?: string;
    public status?: Array<string>;
    public front?: VehicleLicenseFront;
    public back?: VehicleLicenseback;
    public constructor() { 
    }
    public withType(type: string): VehicleLicenseResult {
        this['type'] = type;
        return this;
    }
    public withModelNumber(modelNumber: string): VehicleLicenseResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withVehicleType(vehicleType: string): VehicleLicenseResult {
        this['vehicle_type'] = vehicleType;
        return this;
    }
    public set vehicleType(vehicleType: string  | undefined) {
        this['vehicle_type'] = vehicleType;
    }
    public get vehicleType(): string | undefined {
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
    public set useCharacter(useCharacter: string  | undefined) {
        this['use_character'] = useCharacter;
    }
    public get useCharacter(): string | undefined {
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
    public set engineNo(engineNo: string  | undefined) {
        this['engine_no'] = engineNo;
    }
    public get engineNo(): string | undefined {
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
    public set registerDate(registerDate: string  | undefined) {
        this['register_date'] = registerDate;
    }
    public get registerDate(): string | undefined {
        return this['register_date'];
    }
    public withIssueDate(issueDate: string): VehicleLicenseResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withIssuingAuthority(issuingAuthority: string): VehicleLicenseResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): string | undefined {
        return this['issuing_authority'];
    }
    public withFileNo(fileNo: string): VehicleLicenseResult {
        this['file_no'] = fileNo;
        return this;
    }
    public set fileNo(fileNo: string  | undefined) {
        this['file_no'] = fileNo;
    }
    public get fileNo(): string | undefined {
        return this['file_no'];
    }
    public withApprovedPassengers(approvedPassengers: string): VehicleLicenseResult {
        this['approved_passengers'] = approvedPassengers;
        return this;
    }
    public set approvedPassengers(approvedPassengers: string  | undefined) {
        this['approved_passengers'] = approvedPassengers;
    }
    public get approvedPassengers(): string | undefined {
        return this['approved_passengers'];
    }
    public withGrossMass(grossMass: string): VehicleLicenseResult {
        this['gross_mass'] = grossMass;
        return this;
    }
    public set grossMass(grossMass: string  | undefined) {
        this['gross_mass'] = grossMass;
    }
    public get grossMass(): string | undefined {
        return this['gross_mass'];
    }
    public withUnladenMass(unladenMass: string): VehicleLicenseResult {
        this['unladen_mass'] = unladenMass;
        return this;
    }
    public set unladenMass(unladenMass: string  | undefined) {
        this['unladen_mass'] = unladenMass;
    }
    public get unladenMass(): string | undefined {
        return this['unladen_mass'];
    }
    public withApprovedLoad(approvedLoad: string): VehicleLicenseResult {
        this['approved_load'] = approvedLoad;
        return this;
    }
    public set approvedLoad(approvedLoad: string  | undefined) {
        this['approved_load'] = approvedLoad;
    }
    public get approvedLoad(): string | undefined {
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
    public set tractionMass(tractionMass: string  | undefined) {
        this['traction_mass'] = tractionMass;
    }
    public get tractionMass(): string | undefined {
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
    public set inspectionRecord(inspectionRecord: string  | undefined) {
        this['inspection_record'] = inspectionRecord;
    }
    public get inspectionRecord(): string | undefined {
        return this['inspection_record'];
    }
    public withCodeNumber(codeNumber: string): VehicleLicenseResult {
        this['code_number'] = codeNumber;
        return this;
    }
    public set codeNumber(codeNumber: string  | undefined) {
        this['code_number'] = codeNumber;
    }
    public get codeNumber(): string | undefined {
        return this['code_number'];
    }
    public withTextLocation(textLocation: object): VehicleLicenseResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
    public withEnergyType(energyType: string): VehicleLicenseResult {
        this['energy_type'] = energyType;
        return this;
    }
    public set energyType(energyType: string  | undefined) {
        this['energy_type'] = energyType;
    }
    public get energyType(): string | undefined {
        return this['energy_type'];
    }
    public withColor(color: string): VehicleLicenseResult {
        this['color'] = color;
        return this;
    }
    public withMandatoryScrappingDate(mandatoryScrappingDate: string): VehicleLicenseResult {
        this['mandatory_scrapping_date'] = mandatoryScrappingDate;
        return this;
    }
    public set mandatoryScrappingDate(mandatoryScrappingDate: string  | undefined) {
        this['mandatory_scrapping_date'] = mandatoryScrappingDate;
    }
    public get mandatoryScrappingDate(): string | undefined {
        return this['mandatory_scrapping_date'];
    }
    public withStatus(status: Array<string>): VehicleLicenseResult {
        this['status'] = status;
        return this;
    }
    public withFront(front: VehicleLicenseFront): VehicleLicenseResult {
        this['front'] = front;
        return this;
    }
    public withBack(back: VehicleLicenseback): VehicleLicenseResult {
        this['back'] = back;
        return this;
    }
}