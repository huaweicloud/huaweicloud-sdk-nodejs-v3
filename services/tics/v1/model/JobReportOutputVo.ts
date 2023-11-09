

export class JobReportOutputVo {
    public ext?: string;
    private 'result_storage_agent_name'?: string;
    private 'result_storage_domain_alias'?: string;
    public constructor() { 
    }
    public withExt(ext: string): JobReportOutputVo {
        this['ext'] = ext;
        return this;
    }
    public withResultStorageAgentName(resultStorageAgentName: string): JobReportOutputVo {
        this['result_storage_agent_name'] = resultStorageAgentName;
        return this;
    }
    public set resultStorageAgentName(resultStorageAgentName: string  | undefined) {
        this['result_storage_agent_name'] = resultStorageAgentName;
    }
    public get resultStorageAgentName(): string | undefined {
        return this['result_storage_agent_name'];
    }
    public withResultStorageDomainAlias(resultStorageDomainAlias: string): JobReportOutputVo {
        this['result_storage_domain_alias'] = resultStorageDomainAlias;
        return this;
    }
    public set resultStorageDomainAlias(resultStorageDomainAlias: string  | undefined) {
        this['result_storage_domain_alias'] = resultStorageDomainAlias;
    }
    public get resultStorageDomainAlias(): string | undefined {
        return this['result_storage_domain_alias'];
    }
}