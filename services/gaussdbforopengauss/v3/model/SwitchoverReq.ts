

export class SwitchoverReq {
    private 'post_process_config'?: SwitchoverReqPostProcessConfigEnum | string;
    private 'disaster_type'?: SwitchoverReqDisasterTypeEnum | string;
    public constructor(disasterType?: string) { 
        this['disaster_type'] = disasterType;
    }
    public withPostProcessConfig(postProcessConfig: SwitchoverReqPostProcessConfigEnum | string): SwitchoverReq {
        this['post_process_config'] = postProcessConfig;
        return this;
    }
    public set postProcessConfig(postProcessConfig: SwitchoverReqPostProcessConfigEnum | string  | undefined) {
        this['post_process_config'] = postProcessConfig;
    }
    public get postProcessConfig(): SwitchoverReqPostProcessConfigEnum | string | undefined {
        return this['post_process_config'];
    }
    public withDisasterType(disasterType: SwitchoverReqDisasterTypeEnum | string): SwitchoverReq {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: SwitchoverReqDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): SwitchoverReqDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchoverReqPostProcessConfigEnum {
    AUTO = 'AUTO',
    MANUAL = 'MANUAL'
}
/**
    * @export
    * @enum {string}
    */
export enum SwitchoverReqDisasterTypeEnum {
    STREAM = 'stream',
    DORADO = 'dorado'
}
