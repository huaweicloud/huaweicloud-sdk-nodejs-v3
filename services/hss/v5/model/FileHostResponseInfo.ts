

export class FileHostResponseInfo {
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'change_total_num'?: number;
    private 'change_file_num'?: number;
    private 'change_registry_num'?: number;
    private 'latest_time'?: number;
    public constructor() { 
    }
    public withHostName(hostName: string): FileHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): FileHostResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withChangeTotalNum(changeTotalNum: number): FileHostResponseInfo {
        this['change_total_num'] = changeTotalNum;
        return this;
    }
    public set changeTotalNum(changeTotalNum: number  | undefined) {
        this['change_total_num'] = changeTotalNum;
    }
    public get changeTotalNum(): number | undefined {
        return this['change_total_num'];
    }
    public withChangeFileNum(changeFileNum: number): FileHostResponseInfo {
        this['change_file_num'] = changeFileNum;
        return this;
    }
    public set changeFileNum(changeFileNum: number  | undefined) {
        this['change_file_num'] = changeFileNum;
    }
    public get changeFileNum(): number | undefined {
        return this['change_file_num'];
    }
    public withChangeRegistryNum(changeRegistryNum: number): FileHostResponseInfo {
        this['change_registry_num'] = changeRegistryNum;
        return this;
    }
    public set changeRegistryNum(changeRegistryNum: number  | undefined) {
        this['change_registry_num'] = changeRegistryNum;
    }
    public get changeRegistryNum(): number | undefined {
        return this['change_registry_num'];
    }
    public withLatestTime(latestTime: number): FileHostResponseInfo {
        this['latest_time'] = latestTime;
        return this;
    }
    public set latestTime(latestTime: number  | undefined) {
        this['latest_time'] = latestTime;
    }
    public get latestTime(): number | undefined {
        return this['latest_time'];
    }
}