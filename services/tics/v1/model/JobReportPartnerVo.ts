

export class JobReportPartnerVo {
    private 'agent_name'?: string;
    private 'data_output_cnt'?: number;
    private 'dataset_name'?: string;
    private 'partner_domain_alias'?: string;
    private 'partner_domain_name'?: string;
    public constructor() { 
    }
    public withAgentName(agentName: string): JobReportPartnerVo {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withDataOutputCnt(dataOutputCnt: number): JobReportPartnerVo {
        this['data_output_cnt'] = dataOutputCnt;
        return this;
    }
    public set dataOutputCnt(dataOutputCnt: number  | undefined) {
        this['data_output_cnt'] = dataOutputCnt;
    }
    public get dataOutputCnt(): number | undefined {
        return this['data_output_cnt'];
    }
    public withDatasetName(datasetName: string): JobReportPartnerVo {
        this['dataset_name'] = datasetName;
        return this;
    }
    public set datasetName(datasetName: string  | undefined) {
        this['dataset_name'] = datasetName;
    }
    public get datasetName(): string | undefined {
        return this['dataset_name'];
    }
    public withPartnerDomainAlias(partnerDomainAlias: string): JobReportPartnerVo {
        this['partner_domain_alias'] = partnerDomainAlias;
        return this;
    }
    public set partnerDomainAlias(partnerDomainAlias: string  | undefined) {
        this['partner_domain_alias'] = partnerDomainAlias;
    }
    public get partnerDomainAlias(): string | undefined {
        return this['partner_domain_alias'];
    }
    public withPartnerDomainName(partnerDomainName: string): JobReportPartnerVo {
        this['partner_domain_name'] = partnerDomainName;
        return this;
    }
    public set partnerDomainName(partnerDomainName: string  | undefined) {
        this['partner_domain_name'] = partnerDomainName;
    }
    public get partnerDomainName(): string | undefined {
        return this['partner_domain_name'];
    }
}