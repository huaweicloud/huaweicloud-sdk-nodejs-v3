

export class VulOperateInfo {
    private 'vul_id'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(vulId?: string, hostIdList?: Array<string>) { 
        this['vul_id'] = vulId;
        this['host_id_list'] = hostIdList;
    }
    public withVulId(vulId: string): VulOperateInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withHostIdList(hostIdList: Array<string>): VulOperateInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}