

export class CreateMfaDeviceRespon {
    private 'serial_number': string | undefined;
    private 'base32_string_seed': string | undefined;
    public constructor(serialNumber: any, base32StringSeed: any) { 
        this['serial_number'] = serialNumber;
        this['base32_string_seed'] = base32StringSeed;
    }
    public withSerialNumber(serialNumber: string): CreateMfaDeviceRespon {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber() {
        return this['serial_number'];
    }
    public withBase32StringSeed(base32StringSeed: string): CreateMfaDeviceRespon {
        this['base32_string_seed'] = base32StringSeed;
        return this;
    }
    public set base32StringSeed(base32StringSeed: string | undefined) {
        this['base32_string_seed'] = base32StringSeed;
    }
    public get base32StringSeed() {
        return this['base32_string_seed'];
    }
}