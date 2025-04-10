

export class ReleaseDisasterReq {
    private 'disaster_type'?: ReleaseDisasterReqDisasterTypeEnum | string;
    public constructor(disasterType?: string) { 
        this['disaster_type'] = disasterType;
    }
    public withDisasterType(disasterType: ReleaseDisasterReqDisasterTypeEnum | string): ReleaseDisasterReq {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: ReleaseDisasterReqDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): ReleaseDisasterReqDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReleaseDisasterReqDisasterTypeEnum {
    STREAM = 'stream',
    DORADO = 'dorado'
}
