

export class AccountResponseInfo {
    private 'account_name'?: string;
    private 'account_id'?: string;
    private 'organization_id'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'host_num'?: number;
    private 'vulnerability_num'?: number;
    private 'baseline_num'?: number;
    private 'intrusion_num'?: number;
    public constructor() { 
    }
    public withAccountName(accountName: string): AccountResponseInfo {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAccountId(accountId: string): AccountResponseInfo {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withOrganizationId(organizationId: string): AccountResponseInfo {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withProjectId(projectId: string): AccountResponseInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): AccountResponseInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withHostNum(hostNum: number): AccountResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withVulnerabilityNum(vulnerabilityNum: number): AccountResponseInfo {
        this['vulnerability_num'] = vulnerabilityNum;
        return this;
    }
    public set vulnerabilityNum(vulnerabilityNum: number  | undefined) {
        this['vulnerability_num'] = vulnerabilityNum;
    }
    public get vulnerabilityNum(): number | undefined {
        return this['vulnerability_num'];
    }
    public withBaselineNum(baselineNum: number): AccountResponseInfo {
        this['baseline_num'] = baselineNum;
        return this;
    }
    public set baselineNum(baselineNum: number  | undefined) {
        this['baseline_num'] = baselineNum;
    }
    public get baselineNum(): number | undefined {
        return this['baseline_num'];
    }
    public withIntrusionNum(intrusionNum: number): AccountResponseInfo {
        this['intrusion_num'] = intrusionNum;
        return this;
    }
    public set intrusionNum(intrusionNum: number  | undefined) {
        this['intrusion_num'] = intrusionNum;
    }
    public get intrusionNum(): number | undefined {
        return this['intrusion_num'];
    }
}