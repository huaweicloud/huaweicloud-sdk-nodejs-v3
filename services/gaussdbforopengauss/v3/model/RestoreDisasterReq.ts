

export class RestoreDisasterReq {
    private 'disaster_type'?: RestoreDisasterReqDisasterTypeEnum | string;
    public constructor(disasterType?: string) { 
        this['disaster_type'] = disasterType;
    }
    public withDisasterType(disasterType: RestoreDisasterReqDisasterTypeEnum | string): RestoreDisasterReq {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: RestoreDisasterReqDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): RestoreDisasterReqDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RestoreDisasterReqDisasterTypeEnum {
    STREAM = 'stream',
    DORADO = 'dorado'
}
