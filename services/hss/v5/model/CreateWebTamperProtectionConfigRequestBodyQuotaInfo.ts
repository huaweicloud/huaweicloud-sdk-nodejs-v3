

export class CreateWebTamperProtectionConfigRequestBodyQuotaInfo {
    private 'charging_mode'?: string;
    private 'resource_id_list'?: Array<string>;
    public constructor(chargingMode?: string) { 
        this['charging_mode'] = chargingMode;
    }
    public withChargingMode(chargingMode: string): CreateWebTamperProtectionConfigRequestBodyQuotaInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceIdList(resourceIdList: Array<string>): CreateWebTamperProtectionConfigRequestBodyQuotaInfo {
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