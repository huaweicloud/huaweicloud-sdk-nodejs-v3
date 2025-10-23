

export class VehicleLicenseRequestBody {
    public image?: string;
    public url?: string;
    public side?: string;
    private 'return_issuing_authority'?: boolean;
    private 'return_text_location'?: boolean;
    private 'recognize_electronic_license'?: boolean;
    public alarm?: boolean;
    public constructor() { 
    }
    public withImage(image: string): VehicleLicenseRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): VehicleLicenseRequestBody {
        this['url'] = url;
        return this;
    }
    public withSide(side: string): VehicleLicenseRequestBody {
        this['side'] = side;
        return this;
    }
    public withReturnIssuingAuthority(returnIssuingAuthority: boolean): VehicleLicenseRequestBody {
        this['return_issuing_authority'] = returnIssuingAuthority;
        return this;
    }
    public set returnIssuingAuthority(returnIssuingAuthority: boolean  | undefined) {
        this['return_issuing_authority'] = returnIssuingAuthority;
    }
    public get returnIssuingAuthority(): boolean | undefined {
        return this['return_issuing_authority'];
    }
    public withReturnTextLocation(returnTextLocation: boolean): VehicleLicenseRequestBody {
        this['return_text_location'] = returnTextLocation;
        return this;
    }
    public set returnTextLocation(returnTextLocation: boolean  | undefined) {
        this['return_text_location'] = returnTextLocation;
    }
    public get returnTextLocation(): boolean | undefined {
        return this['return_text_location'];
    }
    public withRecognizeElectronicLicense(recognizeElectronicLicense: boolean): VehicleLicenseRequestBody {
        this['recognize_electronic_license'] = recognizeElectronicLicense;
        return this;
    }
    public set recognizeElectronicLicense(recognizeElectronicLicense: boolean  | undefined) {
        this['recognize_electronic_license'] = recognizeElectronicLicense;
    }
    public get recognizeElectronicLicense(): boolean | undefined {
        return this['recognize_electronic_license'];
    }
    public withAlarm(alarm: boolean): VehicleLicenseRequestBody {
        this['alarm'] = alarm;
        return this;
    }
}