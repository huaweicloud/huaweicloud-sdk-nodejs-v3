

export class ShowLogsCountRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowLogsCountRequestRangeEnum | number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    public item?: ShowLogsCountRequestItemEnum | string;
    public constructor(projectId?: string, fwInstanceId?: string, item?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['item'] = item;
    }
    public withProjectId(projectId: string): ShowLogsCountRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowLogsCountRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowLogsCountRequestRangeEnum | number): ShowLogsCountRequest {
        this['range'] = range;
        return this;
    }
    public withStartTime(startTime: number): ShowLogsCountRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowLogsCountRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowLogsCountRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withItem(item: ShowLogsCountRequestItemEnum | string): ShowLogsCountRequest {
        this['item'] = item;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLogsCountRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowLogsCountRequestItemEnum {
    RISK_IP = 'risk_ip',
    RISK_HOST = 'risk_host',
    OPEN_PORT = 'open_port'
}
