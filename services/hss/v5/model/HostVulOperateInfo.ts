

export class HostVulOperateInfo {
    private 'host_id'?: string;
    private 'vul_id_list'?: Array<string>;
    public constructor(hostId?: string, vulIdList?: Array<string>) { 
        this['host_id'] = hostId;
        this['vul_id_list'] = vulIdList;
    }
    public withHostId(hostId: string): HostVulOperateInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withVulIdList(vulIdList: Array<string>): HostVulOperateInfo {
        this['vul_id_list'] = vulIdList;
        return this;
    }
    public set vulIdList(vulIdList: Array<string>  | undefined) {
        this['vul_id_list'] = vulIdList;
    }
    public get vulIdList(): Array<string> | undefined {
        return this['vul_id_list'];
    }
}