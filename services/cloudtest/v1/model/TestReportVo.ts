import { CaseAutomationDetailsVo } from './CaseAutomationDetailsVo';
import { CustomReportListVo } from './CustomReportListVo';
import { DetailTestTypeCasePassRateVo } from './DetailTestTypeCasePassRateVo';
import { IdAndNameAndValueVo } from './IdAndNameAndValueVo';
import { IssuePassDetailsVo } from './IssuePassDetailsVo';
import { NameAndValueVo } from './NameAndValueVo';


export class TestReportVo {
    public uri?: string;
    public name?: string;
    public creator?: string;
    public updator?: string;
    private 'version_uri'?: string;
    private 'branch_uri'?: string;
    private 'version_name'?: string;
    private 'branch_name'?: string;
    private 'test_conclusion'?: string;
    private 'test_conclusion_details'?: string;
    private 'defect_resolution_rate'?: string;
    private 'defect_resolution_score'?: string;
    private 'case_execution_rate'?: string;
    private 'case_execution_score'?: string;
    private 'case_pass_rate'?: string;
    private 'case_pass_score'?: string;
    private 'issue_pass_rate'?: string;
    private 'issue_pass_score'?: string;
    private 'issue_coverage_rate'?: string;
    private 'issue_coverage_score'?: string;
    private 'project_residual_defect_index'?: string;
    private 'iterator_residual_defect_index'?: string;
    private 'case_automation_details'?: CaseAutomationDetailsVo;
    private 'case_validity_ratio'?: string;
    private 'issue_details'?: IssuePassDetailsVo;
    private 'case_details'?: Array<NameAndValueVo>;
    private 'defect_details_by_severity'?: Array<IdAndNameAndValueVo>;
    private 'defect_details_by_module'?: Array<IdAndNameAndValueVo>;
    private 'case_pass_rate_by_test_type'?: Array<DetailTestTypeCasePassRateVo>;
    private 'test_report_custom_report_detail'?: Array<CustomReportListVo>;
    private 'create_time'?: Date;
    private 'create_timestamp'?: number;
    private 'creator_name'?: string;
    private 'update_time'?: Date;
    private 'update_timestamp'?: number;
    private 'updator_name'?: string;
    private 'project_uuid'?: string;
    private 'risk_analysis'?: string;
    public constructor() { 
    }
    public withUri(uri: string): TestReportVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): TestReportVo {
        this['name'] = name;
        return this;
    }
    public withCreator(creator: string): TestReportVo {
        this['creator'] = creator;
        return this;
    }
    public withUpdator(updator: string): TestReportVo {
        this['updator'] = updator;
        return this;
    }
    public withVersionUri(versionUri: string): TestReportVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withBranchUri(branchUri: string): TestReportVo {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withVersionName(versionName: string): TestReportVo {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withBranchName(branchName: string): TestReportVo {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withTestConclusion(testConclusion: string): TestReportVo {
        this['test_conclusion'] = testConclusion;
        return this;
    }
    public set testConclusion(testConclusion: string  | undefined) {
        this['test_conclusion'] = testConclusion;
    }
    public get testConclusion(): string | undefined {
        return this['test_conclusion'];
    }
    public withTestConclusionDetails(testConclusionDetails: string): TestReportVo {
        this['test_conclusion_details'] = testConclusionDetails;
        return this;
    }
    public set testConclusionDetails(testConclusionDetails: string  | undefined) {
        this['test_conclusion_details'] = testConclusionDetails;
    }
    public get testConclusionDetails(): string | undefined {
        return this['test_conclusion_details'];
    }
    public withDefectResolutionRate(defectResolutionRate: string): TestReportVo {
        this['defect_resolution_rate'] = defectResolutionRate;
        return this;
    }
    public set defectResolutionRate(defectResolutionRate: string  | undefined) {
        this['defect_resolution_rate'] = defectResolutionRate;
    }
    public get defectResolutionRate(): string | undefined {
        return this['defect_resolution_rate'];
    }
    public withDefectResolutionScore(defectResolutionScore: string): TestReportVo {
        this['defect_resolution_score'] = defectResolutionScore;
        return this;
    }
    public set defectResolutionScore(defectResolutionScore: string  | undefined) {
        this['defect_resolution_score'] = defectResolutionScore;
    }
    public get defectResolutionScore(): string | undefined {
        return this['defect_resolution_score'];
    }
    public withCaseExecutionRate(caseExecutionRate: string): TestReportVo {
        this['case_execution_rate'] = caseExecutionRate;
        return this;
    }
    public set caseExecutionRate(caseExecutionRate: string  | undefined) {
        this['case_execution_rate'] = caseExecutionRate;
    }
    public get caseExecutionRate(): string | undefined {
        return this['case_execution_rate'];
    }
    public withCaseExecutionScore(caseExecutionScore: string): TestReportVo {
        this['case_execution_score'] = caseExecutionScore;
        return this;
    }
    public set caseExecutionScore(caseExecutionScore: string  | undefined) {
        this['case_execution_score'] = caseExecutionScore;
    }
    public get caseExecutionScore(): string | undefined {
        return this['case_execution_score'];
    }
    public withCasePassRate(casePassRate: string): TestReportVo {
        this['case_pass_rate'] = casePassRate;
        return this;
    }
    public set casePassRate(casePassRate: string  | undefined) {
        this['case_pass_rate'] = casePassRate;
    }
    public get casePassRate(): string | undefined {
        return this['case_pass_rate'];
    }
    public withCasePassScore(casePassScore: string): TestReportVo {
        this['case_pass_score'] = casePassScore;
        return this;
    }
    public set casePassScore(casePassScore: string  | undefined) {
        this['case_pass_score'] = casePassScore;
    }
    public get casePassScore(): string | undefined {
        return this['case_pass_score'];
    }
    public withIssuePassRate(issuePassRate: string): TestReportVo {
        this['issue_pass_rate'] = issuePassRate;
        return this;
    }
    public set issuePassRate(issuePassRate: string  | undefined) {
        this['issue_pass_rate'] = issuePassRate;
    }
    public get issuePassRate(): string | undefined {
        return this['issue_pass_rate'];
    }
    public withIssuePassScore(issuePassScore: string): TestReportVo {
        this['issue_pass_score'] = issuePassScore;
        return this;
    }
    public set issuePassScore(issuePassScore: string  | undefined) {
        this['issue_pass_score'] = issuePassScore;
    }
    public get issuePassScore(): string | undefined {
        return this['issue_pass_score'];
    }
    public withIssueCoverageRate(issueCoverageRate: string): TestReportVo {
        this['issue_coverage_rate'] = issueCoverageRate;
        return this;
    }
    public set issueCoverageRate(issueCoverageRate: string  | undefined) {
        this['issue_coverage_rate'] = issueCoverageRate;
    }
    public get issueCoverageRate(): string | undefined {
        return this['issue_coverage_rate'];
    }
    public withIssueCoverageScore(issueCoverageScore: string): TestReportVo {
        this['issue_coverage_score'] = issueCoverageScore;
        return this;
    }
    public set issueCoverageScore(issueCoverageScore: string  | undefined) {
        this['issue_coverage_score'] = issueCoverageScore;
    }
    public get issueCoverageScore(): string | undefined {
        return this['issue_coverage_score'];
    }
    public withProjectResidualDefectIndex(projectResidualDefectIndex: string): TestReportVo {
        this['project_residual_defect_index'] = projectResidualDefectIndex;
        return this;
    }
    public set projectResidualDefectIndex(projectResidualDefectIndex: string  | undefined) {
        this['project_residual_defect_index'] = projectResidualDefectIndex;
    }
    public get projectResidualDefectIndex(): string | undefined {
        return this['project_residual_defect_index'];
    }
    public withIteratorResidualDefectIndex(iteratorResidualDefectIndex: string): TestReportVo {
        this['iterator_residual_defect_index'] = iteratorResidualDefectIndex;
        return this;
    }
    public set iteratorResidualDefectIndex(iteratorResidualDefectIndex: string  | undefined) {
        this['iterator_residual_defect_index'] = iteratorResidualDefectIndex;
    }
    public get iteratorResidualDefectIndex(): string | undefined {
        return this['iterator_residual_defect_index'];
    }
    public withCaseAutomationDetails(caseAutomationDetails: CaseAutomationDetailsVo): TestReportVo {
        this['case_automation_details'] = caseAutomationDetails;
        return this;
    }
    public set caseAutomationDetails(caseAutomationDetails: CaseAutomationDetailsVo  | undefined) {
        this['case_automation_details'] = caseAutomationDetails;
    }
    public get caseAutomationDetails(): CaseAutomationDetailsVo | undefined {
        return this['case_automation_details'];
    }
    public withCaseValidityRatio(caseValidityRatio: string): TestReportVo {
        this['case_validity_ratio'] = caseValidityRatio;
        return this;
    }
    public set caseValidityRatio(caseValidityRatio: string  | undefined) {
        this['case_validity_ratio'] = caseValidityRatio;
    }
    public get caseValidityRatio(): string | undefined {
        return this['case_validity_ratio'];
    }
    public withIssueDetails(issueDetails: IssuePassDetailsVo): TestReportVo {
        this['issue_details'] = issueDetails;
        return this;
    }
    public set issueDetails(issueDetails: IssuePassDetailsVo  | undefined) {
        this['issue_details'] = issueDetails;
    }
    public get issueDetails(): IssuePassDetailsVo | undefined {
        return this['issue_details'];
    }
    public withCaseDetails(caseDetails: Array<NameAndValueVo>): TestReportVo {
        this['case_details'] = caseDetails;
        return this;
    }
    public set caseDetails(caseDetails: Array<NameAndValueVo>  | undefined) {
        this['case_details'] = caseDetails;
    }
    public get caseDetails(): Array<NameAndValueVo> | undefined {
        return this['case_details'];
    }
    public withDefectDetailsBySeverity(defectDetailsBySeverity: Array<IdAndNameAndValueVo>): TestReportVo {
        this['defect_details_by_severity'] = defectDetailsBySeverity;
        return this;
    }
    public set defectDetailsBySeverity(defectDetailsBySeverity: Array<IdAndNameAndValueVo>  | undefined) {
        this['defect_details_by_severity'] = defectDetailsBySeverity;
    }
    public get defectDetailsBySeverity(): Array<IdAndNameAndValueVo> | undefined {
        return this['defect_details_by_severity'];
    }
    public withDefectDetailsByModule(defectDetailsByModule: Array<IdAndNameAndValueVo>): TestReportVo {
        this['defect_details_by_module'] = defectDetailsByModule;
        return this;
    }
    public set defectDetailsByModule(defectDetailsByModule: Array<IdAndNameAndValueVo>  | undefined) {
        this['defect_details_by_module'] = defectDetailsByModule;
    }
    public get defectDetailsByModule(): Array<IdAndNameAndValueVo> | undefined {
        return this['defect_details_by_module'];
    }
    public withCasePassRateByTestType(casePassRateByTestType: Array<DetailTestTypeCasePassRateVo>): TestReportVo {
        this['case_pass_rate_by_test_type'] = casePassRateByTestType;
        return this;
    }
    public set casePassRateByTestType(casePassRateByTestType: Array<DetailTestTypeCasePassRateVo>  | undefined) {
        this['case_pass_rate_by_test_type'] = casePassRateByTestType;
    }
    public get casePassRateByTestType(): Array<DetailTestTypeCasePassRateVo> | undefined {
        return this['case_pass_rate_by_test_type'];
    }
    public withTestReportCustomReportDetail(testReportCustomReportDetail: Array<CustomReportListVo>): TestReportVo {
        this['test_report_custom_report_detail'] = testReportCustomReportDetail;
        return this;
    }
    public set testReportCustomReportDetail(testReportCustomReportDetail: Array<CustomReportListVo>  | undefined) {
        this['test_report_custom_report_detail'] = testReportCustomReportDetail;
    }
    public get testReportCustomReportDetail(): Array<CustomReportListVo> | undefined {
        return this['test_report_custom_report_detail'];
    }
    public withCreateTime(createTime: Date): TestReportVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateTimestamp(createTimestamp: number): TestReportVo {
        this['create_timestamp'] = createTimestamp;
        return this;
    }
    public set createTimestamp(createTimestamp: number  | undefined) {
        this['create_timestamp'] = createTimestamp;
    }
    public get createTimestamp(): number | undefined {
        return this['create_timestamp'];
    }
    public withCreatorName(creatorName: string): TestReportVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdateTime(updateTime: Date): TestReportVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateTimestamp(updateTimestamp: number): TestReportVo {
        this['update_timestamp'] = updateTimestamp;
        return this;
    }
    public set updateTimestamp(updateTimestamp: number  | undefined) {
        this['update_timestamp'] = updateTimestamp;
    }
    public get updateTimestamp(): number | undefined {
        return this['update_timestamp'];
    }
    public withUpdatorName(updatorName: string): TestReportVo {
        this['updator_name'] = updatorName;
        return this;
    }
    public set updatorName(updatorName: string  | undefined) {
        this['updator_name'] = updatorName;
    }
    public get updatorName(): string | undefined {
        return this['updator_name'];
    }
    public withProjectUuid(projectUuid: string): TestReportVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRiskAnalysis(riskAnalysis: string): TestReportVo {
        this['risk_analysis'] = riskAnalysis;
        return this;
    }
    public set riskAnalysis(riskAnalysis: string  | undefined) {
        this['risk_analysis'] = riskAnalysis;
    }
    public get riskAnalysis(): string | undefined {
        return this['risk_analysis'];
    }
}