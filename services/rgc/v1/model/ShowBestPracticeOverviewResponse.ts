import { BestPracticeOverviewItem } from './BestPracticeOverviewItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBestPracticeOverviewResponse extends SdkResponse {
    private 'total_score'?: number;
    private 'detect_time'?: string;
    private 'organization_account'?: BestPracticeOverviewItem;
    private 'identity_permission'?: BestPracticeOverviewItem;
    private 'network_planning'?: BestPracticeOverviewItem;
    private 'compliance_audit'?: BestPracticeOverviewItem;
    private 'financial_governance'?: BestPracticeOverviewItem;
    private 'data_boundary'?: BestPracticeOverviewItem;
    private 'om_monitor'?: BestPracticeOverviewItem;
    private 'security_management'?: BestPracticeOverviewItem;
    public constructor() { 
        super();
    }
    public withTotalScore(totalScore: number): ShowBestPracticeOverviewResponse {
        this['total_score'] = totalScore;
        return this;
    }
    public set totalScore(totalScore: number  | undefined) {
        this['total_score'] = totalScore;
    }
    public get totalScore(): number | undefined {
        return this['total_score'];
    }
    public withDetectTime(detectTime: string): ShowBestPracticeOverviewResponse {
        this['detect_time'] = detectTime;
        return this;
    }
    public set detectTime(detectTime: string  | undefined) {
        this['detect_time'] = detectTime;
    }
    public get detectTime(): string | undefined {
        return this['detect_time'];
    }
    public withOrganizationAccount(organizationAccount: BestPracticeOverviewItem): ShowBestPracticeOverviewResponse {
        this['organization_account'] = organizationAccount;
        return this;
    }
    public set organizationAccount(organizationAccount: BestPracticeOverviewItem  | undefined) {
        this['organization_account'] = organizationAccount;
    }
    public get organizationAccount(): BestPracticeOverviewItem | undefined {
        return this['organization_account'];
    }
    public withIdentityPermission(identityPermission: BestPracticeOverviewItem): ShowBestPracticeOverviewResponse {
        this['identity_permission'] = identityPermission;
        return this;
    }
    public set identityPermission(identityPermission: BestPracticeOverviewItem  | undefined) {
        this['identity_permission'] = identityPermission;
    }
    public get identityPermission(): BestPracticeOverviewItem | undefined {
        return this['identity_permission'];
    }
    public withNetworkPlanning(networkPlanning: BestPracticeOverviewItem): ShowBestPracticeOverviewResponse {
        this['network_planning'] = networkPlanning;
        return this;
    }
    public set networkPlanning(networkPlanning: BestPracticeOverviewItem  | undefined) {
        this['network_planning'] = networkPlanning;
    }
    public get networkPlanning(): BestPracticeOverviewItem | undefined {
        return this['network_planning'];
    }
    public withComplianceAudit(complianceAudit: BestPracticeOverviewItem): ShowBestPracticeOverviewResponse {
        this['compliance_audit'] = complianceAudit;
        return this;
    }
    public set complianceAudit(complianceAudit: BestPracticeOverviewItem  | undefined) {
        this['compliance_audit'] = complianceAudit;
    }
    public get complianceAudit(): BestPracticeOverviewItem | undefined {
        return this['compliance_audit'];
    }
    public withFinancialGovernance(financialGovernance: BestPracticeOverviewItem): ShowBestPracticeOverviewResponse {
        this['financial_governance'] = financialGovernance;
        return this;
    }
    public set financialGovernance(financialGovernance: BestPracticeOverviewItem  | undefined) {
        this['financial_governance'] = financialGovernance;
    }
    public get financialGovernance(): BestPracticeOverviewItem | undefined {
        return this['financial_governance'];
    }
    public withDataBoundary(dataBoundary: BestPracticeOverviewItem): ShowBestPracticeOverviewResponse {
        this['data_boundary'] = dataBoundary;
        return this;
    }
    public set dataBoundary(dataBoundary: BestPracticeOverviewItem  | undefined) {
        this['data_boundary'] = dataBoundary;
    }
    public get dataBoundary(): BestPracticeOverviewItem | undefined {
        return this['data_boundary'];
    }
    public withOmMonitor(omMonitor: BestPracticeOverviewItem): ShowBestPracticeOverviewResponse {
        this['om_monitor'] = omMonitor;
        return this;
    }
    public set omMonitor(omMonitor: BestPracticeOverviewItem  | undefined) {
        this['om_monitor'] = omMonitor;
    }
    public get omMonitor(): BestPracticeOverviewItem | undefined {
        return this['om_monitor'];
    }
    public withSecurityManagement(securityManagement: BestPracticeOverviewItem): ShowBestPracticeOverviewResponse {
        this['security_management'] = securityManagement;
        return this;
    }
    public set securityManagement(securityManagement: BestPracticeOverviewItem  | undefined) {
        this['security_management'] = securityManagement;
    }
    public get securityManagement(): BestPracticeOverviewItem | undefined {
        return this['security_management'];
    }
}