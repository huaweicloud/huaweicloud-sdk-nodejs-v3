

export class SwitchWebTamperProtectStatusRequestBody {
    public type?: SwitchWebTamperProtectStatusRequestBodyTypeEnum | string;
    private 'operate_type'?: SwitchWebTamperProtectStatusRequestBodyOperateTypeEnum | string;
    private 'charging_mode'?: SwitchWebTamperProtectStatusRequestBodyChargingModeEnum | string;
    private 'protection_config_id_list'?: Array<string>;
    private 'resource_id_list'?: Array<string>;
    public constructor(type?: string, operateType?: string, chargingMode?: string, protectionConfigIdList?: Array<string>) { 
        this['type'] = type;
        this['operate_type'] = operateType;
        this['charging_mode'] = chargingMode;
        this['protection_config_id_list'] = protectionConfigIdList;
    }
    public withType(type: SwitchWebTamperProtectStatusRequestBodyTypeEnum | string): SwitchWebTamperProtectStatusRequestBody {
        this['type'] = type;
        return this;
    }
    public withOperateType(operateType: SwitchWebTamperProtectStatusRequestBodyOperateTypeEnum | string): SwitchWebTamperProtectStatusRequestBody {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: SwitchWebTamperProtectStatusRequestBodyOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): SwitchWebTamperProtectStatusRequestBodyOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
    public withChargingMode(chargingMode: SwitchWebTamperProtectStatusRequestBodyChargingModeEnum | string): SwitchWebTamperProtectStatusRequestBody {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: SwitchWebTamperProtectStatusRequestBodyChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): SwitchWebTamperProtectStatusRequestBodyChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withProtectionConfigIdList(protectionConfigIdList: Array<string>): SwitchWebTamperProtectStatusRequestBody {
        this['protection_config_id_list'] = protectionConfigIdList;
        return this;
    }
    public set protectionConfigIdList(protectionConfigIdList: Array<string>  | undefined) {
        this['protection_config_id_list'] = protectionConfigIdList;
    }
    public get protectionConfigIdList(): Array<string> | undefined {
        return this['protection_config_id_list'];
    }
    public withResourceIdList(resourceIdList: Array<string>): SwitchWebTamperProtectStatusRequestBody {
        this['resource_id_list'] = resourceIdList;
        return this;
    }
    public set resourceIdList(resourceIdList: Array<string>  | undefined) {
        this['resource_id_list'] = resourceIdList;
    }
    public get resourceIdList(): Array<string> | undefined {
        return this['resource_id_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchWebTamperProtectStatusRequestBodyTypeEnum {
    CONTAINER_WTP = 'container_wtp'
}
/**
    * @export
    * @enum {string}
    */
export enum SwitchWebTamperProtectStatusRequestBodyOperateTypeEnum {
    CLOSE = 'close',
    OPEN = 'open'
}
/**
    * @export
    * @enum {string}
    */
export enum SwitchWebTamperProtectStatusRequestBodyChargingModeEnum {
    PACKET_CYCLE = 'packet_cycle'
}
