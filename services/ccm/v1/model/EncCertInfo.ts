

export class EncCertInfo {
    private 'enc_serial_number'?: string;
    public constructor(encSerialNumber?: string) { 
        this['enc_serial_number'] = encSerialNumber;
    }
    public withEncSerialNumber(encSerialNumber: string): EncCertInfo {
        this['enc_serial_number'] = encSerialNumber;
        return this;
    }
    public set encSerialNumber(encSerialNumber: string  | undefined) {
        this['enc_serial_number'] = encSerialNumber;
    }
    public get encSerialNumber(): string | undefined {
        return this['enc_serial_number'];
    }
}