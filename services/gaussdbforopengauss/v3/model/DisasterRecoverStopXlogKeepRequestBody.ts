

export class DisasterRecoverStopXlogKeepRequestBody {
    private 'disaster_type'?: DisasterRecoverStopXlogKeepRequestBodyDisasterTypeEnum | string;
    public constructor(disasterType?: string) { 
        this['disaster_type'] = disasterType;
    }
    public withDisasterType(disasterType: DisasterRecoverStopXlogKeepRequestBodyDisasterTypeEnum | string): DisasterRecoverStopXlogKeepRequestBody {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: DisasterRecoverStopXlogKeepRequestBodyDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): DisasterRecoverStopXlogKeepRequestBodyDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisasterRecoverStopXlogKeepRequestBodyDisasterTypeEnum {
    STREAM = 'stream'
}
