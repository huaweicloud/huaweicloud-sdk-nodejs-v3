

export class DisasterRecoverStopSimulationRequestBody {
    private 'disaster_type'?: DisasterRecoverStopSimulationRequestBodyDisasterTypeEnum | string;
    public constructor(disasterType?: string) { 
        this['disaster_type'] = disasterType;
    }
    public withDisasterType(disasterType: DisasterRecoverStopSimulationRequestBodyDisasterTypeEnum | string): DisasterRecoverStopSimulationRequestBody {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: DisasterRecoverStopSimulationRequestBodyDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): DisasterRecoverStopSimulationRequestBodyDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisasterRecoverStopSimulationRequestBodyDisasterTypeEnum {
    STREAM = 'stream'
}
