

export class DisasterRecoverStartSimulationRequestBody {
    private 'xlog_keep_ratio'?: number;
    private 'disaster_type'?: DisasterRecoverStartSimulationRequestBodyDisasterTypeEnum | string;
    public constructor(disasterType?: string) { 
        this['disaster_type'] = disasterType;
    }
    public withXlogKeepRatio(xlogKeepRatio: number): DisasterRecoverStartSimulationRequestBody {
        this['xlog_keep_ratio'] = xlogKeepRatio;
        return this;
    }
    public set xlogKeepRatio(xlogKeepRatio: number  | undefined) {
        this['xlog_keep_ratio'] = xlogKeepRatio;
    }
    public get xlogKeepRatio(): number | undefined {
        return this['xlog_keep_ratio'];
    }
    public withDisasterType(disasterType: DisasterRecoverStartSimulationRequestBodyDisasterTypeEnum | string): DisasterRecoverStartSimulationRequestBody {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: DisasterRecoverStartSimulationRequestBodyDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): DisasterRecoverStartSimulationRequestBodyDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisasterRecoverStartSimulationRequestBodyDisasterTypeEnum {
    STREAM = 'stream'
}
