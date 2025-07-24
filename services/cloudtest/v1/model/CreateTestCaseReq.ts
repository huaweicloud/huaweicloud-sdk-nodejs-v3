import { AwVariable } from './AwVariable';
import { BasicAwCata } from './BasicAwCata';
import { CaseAwInstance } from './CaseAwInstance';
import { TmssTestcase } from './TmssTestcase';


export class CreateTestCaseReq {
    private 'activity_id'?: string;
    public addToPlan?: boolean;
    private 'aw_cata_list'?: Array<BasicAwCata>;
    private 'aw_instance'?: CaseAwInstance;
    private 'case_type'?: number;
    private 'case_variable_list'?: Array<AwVariable>;
    public demoFlag?: string;
    public errorStep?: Array<number>;
    public id?: string;
    private 'import_info_list'?: Array<string>;
    public isKeyWord?: number;
    public isSync?: boolean;
    public issueId?: string;
    public name?: string;
    private 'old_tmss_case_uri'?: string;
    private 'old_tmss_case_uri_list'?: Array<string>;
    private 'package_name'?: string;
    public planId?: string;
    private 'project_id'?: string;
    public releaseDev?: string;
    private 'script_name'?: string;
    private 'script_path'?: string;
    public source?: string;
    public sourceWay?: string;
    private 'src_tmss_case_uri'?: string;
    private 'tmss_case_uri'?: string;
    private 'tmss_feature_uri'?: string;
    private 'tmss_property'?: TmssTestcase;
    public type?: string;
    public variableGroupId?: string;
    public constructor() { 
    }
    public withActivityId(activityId: string): CreateTestCaseReq {
        this['activity_id'] = activityId;
        return this;
    }
    public set activityId(activityId: string  | undefined) {
        this['activity_id'] = activityId;
    }
    public get activityId(): string | undefined {
        return this['activity_id'];
    }
    public withAddToPlan(addToPlan: boolean): CreateTestCaseReq {
        this['addToPlan'] = addToPlan;
        return this;
    }
    public withAwCataList(awCataList: Array<BasicAwCata>): CreateTestCaseReq {
        this['aw_cata_list'] = awCataList;
        return this;
    }
    public set awCataList(awCataList: Array<BasicAwCata>  | undefined) {
        this['aw_cata_list'] = awCataList;
    }
    public get awCataList(): Array<BasicAwCata> | undefined {
        return this['aw_cata_list'];
    }
    public withAwInstance(awInstance: CaseAwInstance): CreateTestCaseReq {
        this['aw_instance'] = awInstance;
        return this;
    }
    public set awInstance(awInstance: CaseAwInstance  | undefined) {
        this['aw_instance'] = awInstance;
    }
    public get awInstance(): CaseAwInstance | undefined {
        return this['aw_instance'];
    }
    public withCaseType(caseType: number): CreateTestCaseReq {
        this['case_type'] = caseType;
        return this;
    }
    public set caseType(caseType: number  | undefined) {
        this['case_type'] = caseType;
    }
    public get caseType(): number | undefined {
        return this['case_type'];
    }
    public withCaseVariableList(caseVariableList: Array<AwVariable>): CreateTestCaseReq {
        this['case_variable_list'] = caseVariableList;
        return this;
    }
    public set caseVariableList(caseVariableList: Array<AwVariable>  | undefined) {
        this['case_variable_list'] = caseVariableList;
    }
    public get caseVariableList(): Array<AwVariable> | undefined {
        return this['case_variable_list'];
    }
    public withDemoFlag(demoFlag: string): CreateTestCaseReq {
        this['demoFlag'] = demoFlag;
        return this;
    }
    public withErrorStep(errorStep: Array<number>): CreateTestCaseReq {
        this['errorStep'] = errorStep;
        return this;
    }
    public withId(id: string): CreateTestCaseReq {
        this['id'] = id;
        return this;
    }
    public withImportInfoList(importInfoList: Array<string>): CreateTestCaseReq {
        this['import_info_list'] = importInfoList;
        return this;
    }
    public set importInfoList(importInfoList: Array<string>  | undefined) {
        this['import_info_list'] = importInfoList;
    }
    public get importInfoList(): Array<string> | undefined {
        return this['import_info_list'];
    }
    public withIsKeyWord(isKeyWord: number): CreateTestCaseReq {
        this['isKeyWord'] = isKeyWord;
        return this;
    }
    public withIsSync(isSync: boolean): CreateTestCaseReq {
        this['isSync'] = isSync;
        return this;
    }
    public withIssueId(issueId: string): CreateTestCaseReq {
        this['issueId'] = issueId;
        return this;
    }
    public withName(name: string): CreateTestCaseReq {
        this['name'] = name;
        return this;
    }
    public withOldTmssCaseUri(oldTmssCaseUri: string): CreateTestCaseReq {
        this['old_tmss_case_uri'] = oldTmssCaseUri;
        return this;
    }
    public set oldTmssCaseUri(oldTmssCaseUri: string  | undefined) {
        this['old_tmss_case_uri'] = oldTmssCaseUri;
    }
    public get oldTmssCaseUri(): string | undefined {
        return this['old_tmss_case_uri'];
    }
    public withOldTmssCaseUriList(oldTmssCaseUriList: Array<string>): CreateTestCaseReq {
        this['old_tmss_case_uri_list'] = oldTmssCaseUriList;
        return this;
    }
    public set oldTmssCaseUriList(oldTmssCaseUriList: Array<string>  | undefined) {
        this['old_tmss_case_uri_list'] = oldTmssCaseUriList;
    }
    public get oldTmssCaseUriList(): Array<string> | undefined {
        return this['old_tmss_case_uri_list'];
    }
    public withPackageName(packageName: string): CreateTestCaseReq {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withPlanId(planId: string): CreateTestCaseReq {
        this['planId'] = planId;
        return this;
    }
    public withProjectId(projectId: string): CreateTestCaseReq {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withReleaseDev(releaseDev: string): CreateTestCaseReq {
        this['releaseDev'] = releaseDev;
        return this;
    }
    public withScriptName(scriptName: string): CreateTestCaseReq {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withScriptPath(scriptPath: string): CreateTestCaseReq {
        this['script_path'] = scriptPath;
        return this;
    }
    public set scriptPath(scriptPath: string  | undefined) {
        this['script_path'] = scriptPath;
    }
    public get scriptPath(): string | undefined {
        return this['script_path'];
    }
    public withSource(source: string): CreateTestCaseReq {
        this['source'] = source;
        return this;
    }
    public withSourceWay(sourceWay: string): CreateTestCaseReq {
        this['sourceWay'] = sourceWay;
        return this;
    }
    public withSrcTmssCaseUri(srcTmssCaseUri: string): CreateTestCaseReq {
        this['src_tmss_case_uri'] = srcTmssCaseUri;
        return this;
    }
    public set srcTmssCaseUri(srcTmssCaseUri: string  | undefined) {
        this['src_tmss_case_uri'] = srcTmssCaseUri;
    }
    public get srcTmssCaseUri(): string | undefined {
        return this['src_tmss_case_uri'];
    }
    public withTmssCaseUri(tmssCaseUri: string): CreateTestCaseReq {
        this['tmss_case_uri'] = tmssCaseUri;
        return this;
    }
    public set tmssCaseUri(tmssCaseUri: string  | undefined) {
        this['tmss_case_uri'] = tmssCaseUri;
    }
    public get tmssCaseUri(): string | undefined {
        return this['tmss_case_uri'];
    }
    public withTmssFeatureUri(tmssFeatureUri: string): CreateTestCaseReq {
        this['tmss_feature_uri'] = tmssFeatureUri;
        return this;
    }
    public set tmssFeatureUri(tmssFeatureUri: string  | undefined) {
        this['tmss_feature_uri'] = tmssFeatureUri;
    }
    public get tmssFeatureUri(): string | undefined {
        return this['tmss_feature_uri'];
    }
    public withTmssProperty(tmssProperty: TmssTestcase): CreateTestCaseReq {
        this['tmss_property'] = tmssProperty;
        return this;
    }
    public set tmssProperty(tmssProperty: TmssTestcase  | undefined) {
        this['tmss_property'] = tmssProperty;
    }
    public get tmssProperty(): TmssTestcase | undefined {
        return this['tmss_property'];
    }
    public withType(type: string): CreateTestCaseReq {
        this['type'] = type;
        return this;
    }
    public withVariableGroupId(variableGroupId: string): CreateTestCaseReq {
        this['variableGroupId'] = variableGroupId;
        return this;
    }
}