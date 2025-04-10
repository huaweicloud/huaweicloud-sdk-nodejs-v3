

export class DisasterRecoverStartXlogKeepRequestBody {
    private 'xlog_keep_ratio'?: number;
    private 'disaster_type'?: DisasterRecoverStartXlogKeepRequestBodyDisasterTypeEnum | string;
    public constructor(disasterType?: string) { 
        this['disaster_type'] = disasterType;
    }
    public withXlogKeepRatio(xlogKeepRatio: number): DisasterRecoverStartXlogKeepRequestBody {
        this['xlog_keep_ratio'] = xlogKeepRatio;
        return this;
    }
    public set xlogKeepRatio(xlogKeepRatio: number  | undefined) {
        this['xlog_keep_ratio'] = xlogKeepRatio;
    }
    public get xlogKeepRatio(): number | undefined {
        return this['xlog_keep_ratio'];
    }
    public withDisasterType(disasterType: DisasterRecoverStartXlogKeepRequestBodyDisasterTypeEnum | string): DisasterRecoverStartXlogKeepRequestBody {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: DisasterRecoverStartXlogKeepRequestBodyDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): DisasterRecoverStartXlogKeepRequestBodyDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisasterRecoverStartXlogKeepRequestBodyDisasterTypeEnum {
    STREAM = 'stream'
}
