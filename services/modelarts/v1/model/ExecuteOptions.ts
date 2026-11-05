

export class ExecuteOptions {
    public serialNumber?: string;
    public constructor() { 
    }
    public withSerialNumber(serialNumber: string): ExecuteOptions {
        this['serialNumber'] = serialNumber;
        return this;
    }
}