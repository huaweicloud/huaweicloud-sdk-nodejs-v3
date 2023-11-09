

export class LeaguePartnerStatisticsVo {
    private 'partner_access_cnt'?: number;
    private 'partner_domain_alias'?: string;
    private 'partner_domain_name'?: string;
    private 'partner_job_cnt'?: number;
    private 'partner_job_ins_cnt'?: number;
    private 'partner_job_ins_fail_cnt'?: number;
    private 'partner_job_ins_intercept_cnt'?: number;
    private 'partner_job_ins_success_cnt'?: number;
    public constructor() { 
    }
    public withPartnerAccessCnt(partnerAccessCnt: number): LeaguePartnerStatisticsVo {
        this['partner_access_cnt'] = partnerAccessCnt;
        return this;
    }
    public set partnerAccessCnt(partnerAccessCnt: number  | undefined) {
        this['partner_access_cnt'] = partnerAccessCnt;
    }
    public get partnerAccessCnt(): number | undefined {
        return this['partner_access_cnt'];
    }
    public withPartnerDomainAlias(partnerDomainAlias: string): LeaguePartnerStatisticsVo {
        this['partner_domain_alias'] = partnerDomainAlias;
        return this;
    }
    public set partnerDomainAlias(partnerDomainAlias: string  | undefined) {
        this['partner_domain_alias'] = partnerDomainAlias;
    }
    public get partnerDomainAlias(): string | undefined {
        return this['partner_domain_alias'];
    }
    public withPartnerDomainName(partnerDomainName: string): LeaguePartnerStatisticsVo {
        this['partner_domain_name'] = partnerDomainName;
        return this;
    }
    public set partnerDomainName(partnerDomainName: string  | undefined) {
        this['partner_domain_name'] = partnerDomainName;
    }
    public get partnerDomainName(): string | undefined {
        return this['partner_domain_name'];
    }
    public withPartnerJobCnt(partnerJobCnt: number): LeaguePartnerStatisticsVo {
        this['partner_job_cnt'] = partnerJobCnt;
        return this;
    }
    public set partnerJobCnt(partnerJobCnt: number  | undefined) {
        this['partner_job_cnt'] = partnerJobCnt;
    }
    public get partnerJobCnt(): number | undefined {
        return this['partner_job_cnt'];
    }
    public withPartnerJobInsCnt(partnerJobInsCnt: number): LeaguePartnerStatisticsVo {
        this['partner_job_ins_cnt'] = partnerJobInsCnt;
        return this;
    }
    public set partnerJobInsCnt(partnerJobInsCnt: number  | undefined) {
        this['partner_job_ins_cnt'] = partnerJobInsCnt;
    }
    public get partnerJobInsCnt(): number | undefined {
        return this['partner_job_ins_cnt'];
    }
    public withPartnerJobInsFailCnt(partnerJobInsFailCnt: number): LeaguePartnerStatisticsVo {
        this['partner_job_ins_fail_cnt'] = partnerJobInsFailCnt;
        return this;
    }
    public set partnerJobInsFailCnt(partnerJobInsFailCnt: number  | undefined) {
        this['partner_job_ins_fail_cnt'] = partnerJobInsFailCnt;
    }
    public get partnerJobInsFailCnt(): number | undefined {
        return this['partner_job_ins_fail_cnt'];
    }
    public withPartnerJobInsInterceptCnt(partnerJobInsInterceptCnt: number): LeaguePartnerStatisticsVo {
        this['partner_job_ins_intercept_cnt'] = partnerJobInsInterceptCnt;
        return this;
    }
    public set partnerJobInsInterceptCnt(partnerJobInsInterceptCnt: number  | undefined) {
        this['partner_job_ins_intercept_cnt'] = partnerJobInsInterceptCnt;
    }
    public get partnerJobInsInterceptCnt(): number | undefined {
        return this['partner_job_ins_intercept_cnt'];
    }
    public withPartnerJobInsSuccessCnt(partnerJobInsSuccessCnt: number): LeaguePartnerStatisticsVo {
        this['partner_job_ins_success_cnt'] = partnerJobInsSuccessCnt;
        return this;
    }
    public set partnerJobInsSuccessCnt(partnerJobInsSuccessCnt: number  | undefined) {
        this['partner_job_ins_success_cnt'] = partnerJobInsSuccessCnt;
    }
    public get partnerJobInsSuccessCnt(): number | undefined {
        return this['partner_job_ins_success_cnt'];
    }
}