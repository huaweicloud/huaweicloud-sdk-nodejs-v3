

export class ExportHandledVulnerabilitiesRequestBodySpecificVuls {
    private 'host_id'?: string;
    private 'vul_id'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): ExportHandledVulnerabilitiesRequestBodySpecificVuls {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withVulId(vulId: string): ExportHandledVulnerabilitiesRequestBodySpecificVuls {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
}