

export class DeviceStatusCondition {
    private 'status_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withStatusList(statusList: Array<string>): DeviceStatusCondition {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: Array<string> | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList() {
        return this['status_list'];
    }
}