import { AssociateDefectInfoVo } from './AssociateDefectInfoVo';
import { AssociateIssueInfoVo } from './AssociateIssueInfoVo';
import { CreateInfoVo } from './CreateInfoVo';
import { CustomFieldVo } from './CustomFieldVo';
import { ExecuteInfoVo } from './ExecuteInfoVo';
import { IntegerIdAndNameVo } from './IntegerIdAndNameVo';
import { LabelVo } from './LabelVo';
import { NameAndIdVo } from './NameAndIdVo';


export class TestCaseListVo {
    public uri?: string;
    public name?: string;
    public owner?: NameAndIdVo;
    public status?: NameAndIdVo;
    public result?: NameAndIdVo;
    public module?: NameAndIdVo;
    public iteration?: NameAndIdVo;
    public exeplatform?: string;
    private 'number'?: string;
    public description?: string;
    private 'rank_id'?: string;
    private 'feature_uri'?: string;
    private 'release_dev'?: string;
    private 'is_keyword'?: boolean;
    private 'script_url'?: string;
    private 'report_url'?: string;
    private 'project_uuid'?: string;
    private 'service_type'?: NameAndIdVo;
    private 'test_type'?: IntegerIdAndNameVo;
    private 'create_info'?: CreateInfoVo;
    private 'execute_info'?: ExecuteInfoVo;
    private 'associate_issue_info'?: AssociateIssueInfoVo;
    private 'associate_defect_info'?: AssociateDefectInfoVo;
    private 'case_type'?: number;
    public labels?: Array<LabelVo>;
    private 'custom_field_info'?: Array<CustomFieldVo>;
    private 'is_test_design'?: boolean;
    private 'last_modified'?: number;
    private 'review_status'?: number;
    public constructor() { 
    }
    public withUri(uri: string): TestCaseListVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): TestCaseListVo {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: NameAndIdVo): TestCaseListVo {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: NameAndIdVo): TestCaseListVo {
        this['status'] = status;
        return this;
    }
    public withResult(result: NameAndIdVo): TestCaseListVo {
        this['result'] = result;
        return this;
    }
    public withModule(module: NameAndIdVo): TestCaseListVo {
        this['module'] = module;
        return this;
    }
    public withIteration(iteration: NameAndIdVo): TestCaseListVo {
        this['iteration'] = iteration;
        return this;
    }
    public withExeplatform(exeplatform: string): TestCaseListVo {
        this['exeplatform'] = exeplatform;
        return this;
    }
    public withModelNumber(modelNumber: string): TestCaseListVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withDescription(description: string): TestCaseListVo {
        this['description'] = description;
        return this;
    }
    public withRankId(rankId: string): TestCaseListVo {
        this['rank_id'] = rankId;
        return this;
    }
    public set rankId(rankId: string  | undefined) {
        this['rank_id'] = rankId;
    }
    public get rankId(): string | undefined {
        return this['rank_id'];
    }
    public withFeatureUri(featureUri: string): TestCaseListVo {
        this['feature_uri'] = featureUri;
        return this;
    }
    public set featureUri(featureUri: string  | undefined) {
        this['feature_uri'] = featureUri;
    }
    public get featureUri(): string | undefined {
        return this['feature_uri'];
    }
    public withReleaseDev(releaseDev: string): TestCaseListVo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withIsKeyword(isKeyword: boolean): TestCaseListVo {
        this['is_keyword'] = isKeyword;
        return this;
    }
    public set isKeyword(isKeyword: boolean  | undefined) {
        this['is_keyword'] = isKeyword;
    }
    public get isKeyword(): boolean | undefined {
        return this['is_keyword'];
    }
    public withScriptUrl(scriptUrl: string): TestCaseListVo {
        this['script_url'] = scriptUrl;
        return this;
    }
    public set scriptUrl(scriptUrl: string  | undefined) {
        this['script_url'] = scriptUrl;
    }
    public get scriptUrl(): string | undefined {
        return this['script_url'];
    }
    public withReportUrl(reportUrl: string): TestCaseListVo {
        this['report_url'] = reportUrl;
        return this;
    }
    public set reportUrl(reportUrl: string  | undefined) {
        this['report_url'] = reportUrl;
    }
    public get reportUrl(): string | undefined {
        return this['report_url'];
    }
    public withProjectUuid(projectUuid: string): TestCaseListVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withServiceType(serviceType: NameAndIdVo): TestCaseListVo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: NameAndIdVo  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): NameAndIdVo | undefined {
        return this['service_type'];
    }
    public withTestType(testType: IntegerIdAndNameVo): TestCaseListVo {
        this['test_type'] = testType;
        return this;
    }
    public set testType(testType: IntegerIdAndNameVo  | undefined) {
        this['test_type'] = testType;
    }
    public get testType(): IntegerIdAndNameVo | undefined {
        return this['test_type'];
    }
    public withCreateInfo(createInfo: CreateInfoVo): TestCaseListVo {
        this['create_info'] = createInfo;
        return this;
    }
    public set createInfo(createInfo: CreateInfoVo  | undefined) {
        this['create_info'] = createInfo;
    }
    public get createInfo(): CreateInfoVo | undefined {
        return this['create_info'];
    }
    public withExecuteInfo(executeInfo: ExecuteInfoVo): TestCaseListVo {
        this['execute_info'] = executeInfo;
        return this;
    }
    public set executeInfo(executeInfo: ExecuteInfoVo  | undefined) {
        this['execute_info'] = executeInfo;
    }
    public get executeInfo(): ExecuteInfoVo | undefined {
        return this['execute_info'];
    }
    public withAssociateIssueInfo(associateIssueInfo: AssociateIssueInfoVo): TestCaseListVo {
        this['associate_issue_info'] = associateIssueInfo;
        return this;
    }
    public set associateIssueInfo(associateIssueInfo: AssociateIssueInfoVo  | undefined) {
        this['associate_issue_info'] = associateIssueInfo;
    }
    public get associateIssueInfo(): AssociateIssueInfoVo | undefined {
        return this['associate_issue_info'];
    }
    public withAssociateDefectInfo(associateDefectInfo: AssociateDefectInfoVo): TestCaseListVo {
        this['associate_defect_info'] = associateDefectInfo;
        return this;
    }
    public set associateDefectInfo(associateDefectInfo: AssociateDefectInfoVo  | undefined) {
        this['associate_defect_info'] = associateDefectInfo;
    }
    public get associateDefectInfo(): AssociateDefectInfoVo | undefined {
        return this['associate_defect_info'];
    }
    public withCaseType(caseType: number): TestCaseListVo {
        this['case_type'] = caseType;
        return this;
    }
    public set caseType(caseType: number  | undefined) {
        this['case_type'] = caseType;
    }
    public get caseType(): number | undefined {
        return this['case_type'];
    }
    public withLabels(labels: Array<LabelVo>): TestCaseListVo {
        this['labels'] = labels;
        return this;
    }
    public withCustomFieldInfo(customFieldInfo: Array<CustomFieldVo>): TestCaseListVo {
        this['custom_field_info'] = customFieldInfo;
        return this;
    }
    public set customFieldInfo(customFieldInfo: Array<CustomFieldVo>  | undefined) {
        this['custom_field_info'] = customFieldInfo;
    }
    public get customFieldInfo(): Array<CustomFieldVo> | undefined {
        return this['custom_field_info'];
    }
    public withIsTestDesign(isTestDesign: boolean): TestCaseListVo {
        this['is_test_design'] = isTestDesign;
        return this;
    }
    public set isTestDesign(isTestDesign: boolean  | undefined) {
        this['is_test_design'] = isTestDesign;
    }
    public get isTestDesign(): boolean | undefined {
        return this['is_test_design'];
    }
    public withLastModified(lastModified: number): TestCaseListVo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: number  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): number | undefined {
        return this['last_modified'];
    }
    public withReviewStatus(reviewStatus: number): TestCaseListVo {
        this['review_status'] = reviewStatus;
        return this;
    }
    public set reviewStatus(reviewStatus: number  | undefined) {
        this['review_status'] = reviewStatus;
    }
    public get reviewStatus(): number | undefined {
        return this['review_status'];
    }
}