

export class VINResult {
    public vin: string;
    public constructor(vin?: any) { 
        this['vin'] = vin;
    }
    public withVin(vin: string): VINResult {
        this['vin'] = vin;
        return this;
    }
}