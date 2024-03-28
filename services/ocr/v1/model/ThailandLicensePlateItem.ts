

export class ThailandLicensePlateItem {
    private 'plate_number'?: string;
    private 'plate_location'?: Array<Array<number>>;
    public confidence?: number;
    public province?: string;
    public constructor() { 
    }
    public withPlateNumber(plateNumber: string): ThailandLicensePlateItem {
        this['plate_number'] = plateNumber;
        return this;
    }
    public set plateNumber(plateNumber: string  | undefined) {
        this['plate_number'] = plateNumber;
    }
    public get plateNumber(): string | undefined {
        return this['plate_number'];
    }
    public withPlateLocation(plateLocation: Array<Array<number>>): ThailandLicensePlateItem {
        this['plate_location'] = plateLocation;
        return this;
    }
    public set plateLocation(plateLocation: Array<Array<number>>  | undefined) {
        this['plate_location'] = plateLocation;
    }
    public get plateLocation(): Array<Array<number>> | undefined {
        return this['plate_location'];
    }
    public withConfidence(confidence: number): ThailandLicensePlateItem {
        this['confidence'] = confidence;
        return this;
    }
    public withProvince(province: string): ThailandLicensePlateItem {
        this['province'] = province;
        return this;
    }
}