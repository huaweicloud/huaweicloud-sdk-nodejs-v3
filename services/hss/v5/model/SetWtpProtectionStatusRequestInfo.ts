

export class SetWtpProtectionStatusRequestInfo {
    public status?: boolean;
    private 'host_id_list'?: Array<string>;
    private 'resource_id'?: string;
    private 'charging_mode'?: string;
    public constructor(status?: boolean, hostIdList?: Array<string>) { 
        this['status'] = status;
        this['host_id_list'] = hostIdList;
    }
    public withStatus(status: boolean): SetWtpProtectionStatusRequestInfo {
        this['status'] = status;
        return this;
    }
    public withHostIdList(hostIdList: Array<string>): SetWtpProtectionStatusRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withResourceId(resourceId: string): SetWtpProtectionStatusRequestInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withChargingMode(chargingMode: string): SetWtpProtectionStatusRequestInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
}