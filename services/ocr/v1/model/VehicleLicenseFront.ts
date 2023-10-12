

export class VehicleLicenseFront {
    private 'number'?: string;
    private 'vehicle_type'?: string;
    public name?: string;
    public address?: string;
    private 'use_character'?: string;
    public model?: string;
    public vin?: string;
    private 'engine_no'?: string;
    private 'register_date'?: string;
    private 'issue_date'?: string;
    private 'issuing_authority'?: string;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): VehicleLicenseFront {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withVehicleType(vehicleType: string): VehicleLicenseFront {
        this['vehicle_type'] = vehicleType;
        return this;
    }
    public set vehicleType(vehicleType: string  | undefined) {
        this['vehicle_type'] = vehicleType;
    }
    public get vehicleType(): string | undefined {
        return this['vehicle_type'];
    }
    public withName(name: string): VehicleLicenseFront {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): VehicleLicenseFront {
        this['address'] = address;
        return this;
    }
    public withUseCharacter(useCharacter: string): VehicleLicenseFront {
        this['use_character'] = useCharacter;
        return this;
    }
    public set useCharacter(useCharacter: string  | undefined) {
        this['use_character'] = useCharacter;
    }
    public get useCharacter(): string | undefined {
        return this['use_character'];
    }
    public withModel(model: string): VehicleLicenseFront {
        this['model'] = model;
        return this;
    }
    public withVin(vin: string): VehicleLicenseFront {
        this['vin'] = vin;
        return this;
    }
    public withEngineNo(engineNo: string): VehicleLicenseFront {
        this['engine_no'] = engineNo;
        return this;
    }
    public set engineNo(engineNo: string  | undefined) {
        this['engine_no'] = engineNo;
    }
    public get engineNo(): string | undefined {
        return this['engine_no'];
    }
    public withRegisterDate(registerDate: string): VehicleLicenseFront {
        this['register_date'] = registerDate;
        return this;
    }
    public set registerDate(registerDate: string  | undefined) {
        this['register_date'] = registerDate;
    }
    public get registerDate(): string | undefined {
        return this['register_date'];
    }
    public withIssueDate(issueDate: string): VehicleLicenseFront {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withIssuingAuthority(issuingAuthority: string): VehicleLicenseFront {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): string | undefined {
        return this['issuing_authority'];
    }
    public withTextLocation(textLocation: object): VehicleLicenseFront {
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