

export class LicensePlateResult {
    private 'plate_number'?: string;
    private 'plate_color'?: string;
    private 'plate_location'?: Array<Array<number>>;
    public confidence?: number;
    public constructor(plateNumber?: string, plateColor?: string, plateLocation?: Array<Array<number>>, confidence?: number) { 
        this['plate_number'] = plateNumber;
        this['plate_color'] = plateColor;
        this['plate_location'] = plateLocation;
        this['confidence'] = confidence;
    }
    public withPlateNumber(plateNumber: string): LicensePlateResult {
        this['plate_number'] = plateNumber;
        return this;
    }
    public set plateNumber(plateNumber: string  | undefined) {
        this['plate_number'] = plateNumber;
    }
    public get plateNumber(): string | undefined {
        return this['plate_number'];
    }
    public withPlateColor(plateColor: string): LicensePlateResult {
        this['plate_color'] = plateColor;
        return this;
    }
    public set plateColor(plateColor: string  | undefined) {
        this['plate_color'] = plateColor;
    }
    public get plateColor(): string | undefined {
        return this['plate_color'];
    }
    public withPlateLocation(plateLocation: Array<Array<number>>): LicensePlateResult {
        this['plate_location'] = plateLocation;
        return this;
    }
    public set plateLocation(plateLocation: Array<Array<number>>  | undefined) {
        this['plate_location'] = plateLocation;
    }
    public get plateLocation(): Array<Array<number>> | undefined {
        return this['plate_location'];
    }
    public withConfidence(confidence: number): LicensePlateResult {
        this['confidence'] = confidence;
        return this;
    }
}