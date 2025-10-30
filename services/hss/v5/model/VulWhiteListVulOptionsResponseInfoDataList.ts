

export class VulWhiteListVulOptionsResponseInfoDataList {
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    public constructor() { 
    }
    public withVulId(vulId: string): VulWhiteListVulOptionsResponseInfoDataList {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): VulWhiteListVulOptionsResponseInfoDataList {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
}