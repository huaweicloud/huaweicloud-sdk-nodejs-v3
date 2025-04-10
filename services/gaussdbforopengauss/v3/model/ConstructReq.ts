

export class ConstructReq {
    private 'disaster_type'?: ConstructReqDisasterTypeEnum | string;
    private 'dr_ip'?: string;
    private 'dr_user_name'?: string;
    private 'dr_user_password'?: string;
    private 'dr_task_name'?: string;
    private 'lite_dr_mode'?: string;
    public constructor(disasterType?: string, drIp?: string, drUserName?: string, drUserPassword?: string) { 
        this['disaster_type'] = disasterType;
        this['dr_ip'] = drIp;
        this['dr_user_name'] = drUserName;
        this['dr_user_password'] = drUserPassword;
    }
    public withDisasterType(disasterType: ConstructReqDisasterTypeEnum | string): ConstructReq {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: ConstructReqDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): ConstructReqDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
    public withDrIp(drIp: string): ConstructReq {
        this['dr_ip'] = drIp;
        return this;
    }
    public set drIp(drIp: string  | undefined) {
        this['dr_ip'] = drIp;
    }
    public get drIp(): string | undefined {
        return this['dr_ip'];
    }
    public withDrUserName(drUserName: string): ConstructReq {
        this['dr_user_name'] = drUserName;
        return this;
    }
    public set drUserName(drUserName: string  | undefined) {
        this['dr_user_name'] = drUserName;
    }
    public get drUserName(): string | undefined {
        return this['dr_user_name'];
    }
    public withDrUserPassword(drUserPassword: string): ConstructReq {
        this['dr_user_password'] = drUserPassword;
        return this;
    }
    public set drUserPassword(drUserPassword: string  | undefined) {
        this['dr_user_password'] = drUserPassword;
    }
    public get drUserPassword(): string | undefined {
        return this['dr_user_password'];
    }
    public withDrTaskName(drTaskName: string): ConstructReq {
        this['dr_task_name'] = drTaskName;
        return this;
    }
    public set drTaskName(drTaskName: string  | undefined) {
        this['dr_task_name'] = drTaskName;
    }
    public get drTaskName(): string | undefined {
        return this['dr_task_name'];
    }
    public withLiteDrMode(liteDrMode: string): ConstructReq {
        this['lite_dr_mode'] = liteDrMode;
        return this;
    }
    public set liteDrMode(liteDrMode: string  | undefined) {
        this['lite_dr_mode'] = liteDrMode;
    }
    public get liteDrMode(): string | undefined {
        return this['lite_dr_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConstructReqDisasterTypeEnum {
    STREAM = 'stream',
    DORADO = 'dorado'
}
