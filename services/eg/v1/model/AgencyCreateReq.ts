

export class AgencyCreateReq {
    public type?: AgencyCreateReqTypeEnum | string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: AgencyCreateReqTypeEnum | string): AgencyCreateReq {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgencyCreateReqTypeEnum {
    TARGET_CONNECTION = 'TARGET_CONNECTION',
    CUSTOM_SOURCE_RABBITMQ = 'CUSTOM_SOURCE_RABBITMQ',
    EG_RESTORE_AGENCY = 'EG_RESTORE_AGENCY'
}
