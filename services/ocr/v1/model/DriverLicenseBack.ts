

export class DriverLicenseBack {
    public type?: string;
    private 'number'?: string | undefined;
    public name?: string;
    private 'issuing_authority'?: string | undefined;
    public address?: string;
    private 'file_number'?: string | undefined;
    public record?: string;
    private 'text_location'?: object | undefined;
    public constructor() { 
    }
    public withType(type: string): DriverLicenseBack {
        this['type'] = type;
        return this;
    }
    public withModelNumber(modelNumber: string): DriverLicenseBack {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withName(name: string): DriverLicenseBack {
        this['name'] = name;
        return this;
    }
    public withIssuingAuthority(issuingAuthority: string): DriverLicenseBack {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority() {
        return this['issuing_authority'];
    }
    public withAddress(address: string): DriverLicenseBack {
        this['address'] = address;
        return this;
    }
    public withFileNumber(fileNumber: string): DriverLicenseBack {
        this['file_number'] = fileNumber;
        return this;
    }
    public set fileNumber(fileNumber: string | undefined) {
        this['file_number'] = fileNumber;
    }
    public get fileNumber() {
        return this['file_number'];
    }
    public withRecord(record: string): DriverLicenseBack {
        this['record'] = record;
        return this;
    }
    public withTextLocation(textLocation: object): DriverLicenseBack {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation() {
        return this['text_location'];
    }
}