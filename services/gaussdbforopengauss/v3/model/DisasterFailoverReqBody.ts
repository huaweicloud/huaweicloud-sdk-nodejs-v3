

export class DisasterFailoverReqBody {
    private 'is_support_restore'?: boolean;
    private 'disaster_type'?: DisasterFailoverReqBodyDisasterTypeEnum | string;
    public constructor(disasterType?: string) { 
        this['disaster_type'] = disasterType;
    }
    public withIsSupportRestore(isSupportRestore: boolean): DisasterFailoverReqBody {
        this['is_support_restore'] = isSupportRestore;
        return this;
    }
    public set isSupportRestore(isSupportRestore: boolean  | undefined) {
        this['is_support_restore'] = isSupportRestore;
    }
    public get isSupportRestore(): boolean | undefined {
        return this['is_support_restore'];
    }
    public withDisasterType(disasterType: DisasterFailoverReqBodyDisasterTypeEnum | string): DisasterFailoverReqBody {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: DisasterFailoverReqBodyDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): DisasterFailoverReqBodyDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisasterFailoverReqBodyDisasterTypeEnum {
    STREAM = 'stream',
    DORADO = 'dorado'
}
