import { CaseInfo } from './CaseInfo';
import { TestCaseAttachmentInfo } from './TestCaseAttachmentInfo';
import { TestCaseStepInfo } from './TestCaseStepInfo';


export class UpdateTestCaseListInfo {
    public steps?: Array<TestCaseStepInfo>;
    public attachments?: Array<TestCaseAttachmentInfo>;
    public author?: string;
    public name?: string;
    public rank?: number;
    public owner?: string;
    public preparation?: string;
    public remark?: string;
    public stage?: string;
    public activity?: string;
    public keywords?: string;
    public market?: string;
    public designer?: string;
    public tags?: string;
    public region?: string;
    private 'relate_type'?: string;
    private 'service_type'?: number;
    private 'only_change_script'?: string;
    private 'add_to_iterator'?: string;
    private 'need_update_relation'?: string;
    private 'creation_version_uri'?: string;
    private 'number'?: string;
    private 'case_type'?: number;
    private 'platform_type'?: number;
    private 'test_type'?: number;
    private 'design_note'?: string;
    private 'test_step'?: string;
    private 'expect_output'?: string;
    private 'env_type'?: string;
    private 'exe_platform'?: string;
    private 'testcase_project'?: string;
    private 'svn_script_path'?: string;
    private 'map_restrict'?: string;
    private 'network_script_name'?: string;
    private 'auto_type'?: number;
    private 'to_be_auto_exec'?: number;
    private 'last_result'?: string;
    private 'last_result_uri'?: string;
    private 'feature_uri'?: string;
    private 'interface_name'?: string;
    private 'snp_no'?: string;
    private 'dr_relation_id'?: string;
    private 'test_base_num'?: string;
    private 'automatically_executed'?: number;
    private 'first_execute_time'?: Date;
    private 'detect_type'?: string;
    private 'execute_param'?: string;
    private 'test_feature'?: string;
    private 'is_contract_testcase'?: number;
    private 'time_cost'?: number;
    private 'custom_field_1'?: string;
    private 'custom_field_2'?: string;
    private 'custom_field_3'?: string;
    private 'custom_field_4'?: string;
    private 'custom_field_5'?: string;
    private 'custom_field_6'?: string;
    private 'custom_field_7'?: string;
    private 'custom_field_8'?: string;
    private 'custom_field_9'?: string;
    private 'custom_field_10'?: string;
    private 'custom_field_11'?: string;
    private 'custom_field_12'?: string;
    private 'custom_field_13'?: string;
    private 'custom_field_14'?: string;
    private 'custom_field_15'?: string;
    private 'custom_field_16'?: string;
    private 'custom_field_17'?: string;
    private 'custom_field_18'?: string;
    private 'custom_field_19'?: string;
    private 'custom_field_20'?: string;
    private 'custom_field_21'?: string;
    private 'custom_field_22'?: string;
    private 'custom_field_23'?: string;
    private 'custom_field_24'?: string;
    private 'custom_field_25'?: string;
    private 'be_auto_type_time'?: Date;
    private 'compare_number'?: string;
    private 'scene_flag'?: string;
    private 'base_flag'?: string;
    private 'para_validator'?: string;
    private 'knet_node_id'?: string;
    private 'last_exe_author'?: string;
    private 'cloud_carrier'?: string;
    private 'market_place'?: string;
    private 'test_mind_id'?: string;
    private 'test_mind_url'?: string;
    private 'commit_url'?: string;
    private 'test_pattern_number'?: string;
    private 'test_factor_number'?: string;
    private 'status_code'?: string;
    private 'result_code'?: string;
    private 'release_id'?: string;
    private 'label_id'?: string;
    private 'label_names'?: Array<string>;
    private 'module_id'?: string;
    private 'execute_latest_time'?: Date;
    private 'execute_duration'?: string;
    private 'is_keyword'?: number;
    private 'release_dev'?: string;
    private 'new_created'?: number;
    private 'execute_parameter'?: string;
    private 'project_uuid'?: string;
    private 'version_uri'?: string;
    private 'case_list'?: Array<CaseInfo>;
    private 'case_id_list'?: Array<string>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withSteps(steps: Array<TestCaseStepInfo>): UpdateTestCaseListInfo {
        this['steps'] = steps;
        return this;
    }
    public withAttachments(attachments: Array<TestCaseAttachmentInfo>): UpdateTestCaseListInfo {
        this['attachments'] = attachments;
        return this;
    }
    public withAuthor(author: string): UpdateTestCaseListInfo {
        this['author'] = author;
        return this;
    }
    public withName(name: string): UpdateTestCaseListInfo {
        this['name'] = name;
        return this;
    }
    public withRank(rank: number): UpdateTestCaseListInfo {
        this['rank'] = rank;
        return this;
    }
    public withOwner(owner: string): UpdateTestCaseListInfo {
        this['owner'] = owner;
        return this;
    }
    public withPreparation(preparation: string): UpdateTestCaseListInfo {
        this['preparation'] = preparation;
        return this;
    }
    public withRemark(remark: string): UpdateTestCaseListInfo {
        this['remark'] = remark;
        return this;
    }
    public withStage(stage: string): UpdateTestCaseListInfo {
        this['stage'] = stage;
        return this;
    }
    public withActivity(activity: string): UpdateTestCaseListInfo {
        this['activity'] = activity;
        return this;
    }
    public withKeywords(keywords: string): UpdateTestCaseListInfo {
        this['keywords'] = keywords;
        return this;
    }
    public withMarket(market: string): UpdateTestCaseListInfo {
        this['market'] = market;
        return this;
    }
    public withDesigner(designer: string): UpdateTestCaseListInfo {
        this['designer'] = designer;
        return this;
    }
    public withTags(tags: string): UpdateTestCaseListInfo {
        this['tags'] = tags;
        return this;
    }
    public withRegion(region: string): UpdateTestCaseListInfo {
        this['region'] = region;
        return this;
    }
    public withRelateType(relateType: string): UpdateTestCaseListInfo {
        this['relate_type'] = relateType;
        return this;
    }
    public set relateType(relateType: string  | undefined) {
        this['relate_type'] = relateType;
    }
    public get relateType(): string | undefined {
        return this['relate_type'];
    }
    public withServiceType(serviceType: number): UpdateTestCaseListInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withOnlyChangeScript(onlyChangeScript: string): UpdateTestCaseListInfo {
        this['only_change_script'] = onlyChangeScript;
        return this;
    }
    public set onlyChangeScript(onlyChangeScript: string  | undefined) {
        this['only_change_script'] = onlyChangeScript;
    }
    public get onlyChangeScript(): string | undefined {
        return this['only_change_script'];
    }
    public withAddToIterator(addToIterator: string): UpdateTestCaseListInfo {
        this['add_to_iterator'] = addToIterator;
        return this;
    }
    public set addToIterator(addToIterator: string  | undefined) {
        this['add_to_iterator'] = addToIterator;
    }
    public get addToIterator(): string | undefined {
        return this['add_to_iterator'];
    }
    public withNeedUpdateRelation(needUpdateRelation: string): UpdateTestCaseListInfo {
        this['need_update_relation'] = needUpdateRelation;
        return this;
    }
    public set needUpdateRelation(needUpdateRelation: string  | undefined) {
        this['need_update_relation'] = needUpdateRelation;
    }
    public get needUpdateRelation(): string | undefined {
        return this['need_update_relation'];
    }
    public withCreationVersionUri(creationVersionUri: string): UpdateTestCaseListInfo {
        this['creation_version_uri'] = creationVersionUri;
        return this;
    }
    public set creationVersionUri(creationVersionUri: string  | undefined) {
        this['creation_version_uri'] = creationVersionUri;
    }
    public get creationVersionUri(): string | undefined {
        return this['creation_version_uri'];
    }
    public withModelNumber(modelNumber: string): UpdateTestCaseListInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withCaseType(caseType: number): UpdateTestCaseListInfo {
        this['case_type'] = caseType;
        return this;
    }
    public set caseType(caseType: number  | undefined) {
        this['case_type'] = caseType;
    }
    public get caseType(): number | undefined {
        return this['case_type'];
    }
    public withPlatformType(platformType: number): UpdateTestCaseListInfo {
        this['platform_type'] = platformType;
        return this;
    }
    public set platformType(platformType: number  | undefined) {
        this['platform_type'] = platformType;
    }
    public get platformType(): number | undefined {
        return this['platform_type'];
    }
    public withTestType(testType: number): UpdateTestCaseListInfo {
        this['test_type'] = testType;
        return this;
    }
    public set testType(testType: number  | undefined) {
        this['test_type'] = testType;
    }
    public get testType(): number | undefined {
        return this['test_type'];
    }
    public withDesignNote(designNote: string): UpdateTestCaseListInfo {
        this['design_note'] = designNote;
        return this;
    }
    public set designNote(designNote: string  | undefined) {
        this['design_note'] = designNote;
    }
    public get designNote(): string | undefined {
        return this['design_note'];
    }
    public withTestStep(testStep: string): UpdateTestCaseListInfo {
        this['test_step'] = testStep;
        return this;
    }
    public set testStep(testStep: string  | undefined) {
        this['test_step'] = testStep;
    }
    public get testStep(): string | undefined {
        return this['test_step'];
    }
    public withExpectOutput(expectOutput: string): UpdateTestCaseListInfo {
        this['expect_output'] = expectOutput;
        return this;
    }
    public set expectOutput(expectOutput: string  | undefined) {
        this['expect_output'] = expectOutput;
    }
    public get expectOutput(): string | undefined {
        return this['expect_output'];
    }
    public withEnvType(envType: string): UpdateTestCaseListInfo {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: string  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): string | undefined {
        return this['env_type'];
    }
    public withExePlatform(exePlatform: string): UpdateTestCaseListInfo {
        this['exe_platform'] = exePlatform;
        return this;
    }
    public set exePlatform(exePlatform: string  | undefined) {
        this['exe_platform'] = exePlatform;
    }
    public get exePlatform(): string | undefined {
        return this['exe_platform'];
    }
    public withTestcaseProject(testcaseProject: string): UpdateTestCaseListInfo {
        this['testcase_project'] = testcaseProject;
        return this;
    }
    public set testcaseProject(testcaseProject: string  | undefined) {
        this['testcase_project'] = testcaseProject;
    }
    public get testcaseProject(): string | undefined {
        return this['testcase_project'];
    }
    public withSvnScriptPath(svnScriptPath: string): UpdateTestCaseListInfo {
        this['svn_script_path'] = svnScriptPath;
        return this;
    }
    public set svnScriptPath(svnScriptPath: string  | undefined) {
        this['svn_script_path'] = svnScriptPath;
    }
    public get svnScriptPath(): string | undefined {
        return this['svn_script_path'];
    }
    public withMapRestrict(mapRestrict: string): UpdateTestCaseListInfo {
        this['map_restrict'] = mapRestrict;
        return this;
    }
    public set mapRestrict(mapRestrict: string  | undefined) {
        this['map_restrict'] = mapRestrict;
    }
    public get mapRestrict(): string | undefined {
        return this['map_restrict'];
    }
    public withNetworkScriptName(networkScriptName: string): UpdateTestCaseListInfo {
        this['network_script_name'] = networkScriptName;
        return this;
    }
    public set networkScriptName(networkScriptName: string  | undefined) {
        this['network_script_name'] = networkScriptName;
    }
    public get networkScriptName(): string | undefined {
        return this['network_script_name'];
    }
    public withAutoType(autoType: number): UpdateTestCaseListInfo {
        this['auto_type'] = autoType;
        return this;
    }
    public set autoType(autoType: number  | undefined) {
        this['auto_type'] = autoType;
    }
    public get autoType(): number | undefined {
        return this['auto_type'];
    }
    public withToBeAutoExec(toBeAutoExec: number): UpdateTestCaseListInfo {
        this['to_be_auto_exec'] = toBeAutoExec;
        return this;
    }
    public set toBeAutoExec(toBeAutoExec: number  | undefined) {
        this['to_be_auto_exec'] = toBeAutoExec;
    }
    public get toBeAutoExec(): number | undefined {
        return this['to_be_auto_exec'];
    }
    public withLastResult(lastResult: string): UpdateTestCaseListInfo {
        this['last_result'] = lastResult;
        return this;
    }
    public set lastResult(lastResult: string  | undefined) {
        this['last_result'] = lastResult;
    }
    public get lastResult(): string | undefined {
        return this['last_result'];
    }
    public withLastResultUri(lastResultUri: string): UpdateTestCaseListInfo {
        this['last_result_uri'] = lastResultUri;
        return this;
    }
    public set lastResultUri(lastResultUri: string  | undefined) {
        this['last_result_uri'] = lastResultUri;
    }
    public get lastResultUri(): string | undefined {
        return this['last_result_uri'];
    }
    public withFeatureUri(featureUri: string): UpdateTestCaseListInfo {
        this['feature_uri'] = featureUri;
        return this;
    }
    public set featureUri(featureUri: string  | undefined) {
        this['feature_uri'] = featureUri;
    }
    public get featureUri(): string | undefined {
        return this['feature_uri'];
    }
    public withInterfaceName(interfaceName: string): UpdateTestCaseListInfo {
        this['interface_name'] = interfaceName;
        return this;
    }
    public set interfaceName(interfaceName: string  | undefined) {
        this['interface_name'] = interfaceName;
    }
    public get interfaceName(): string | undefined {
        return this['interface_name'];
    }
    public withSnpNo(snpNo: string): UpdateTestCaseListInfo {
        this['snp_no'] = snpNo;
        return this;
    }
    public set snpNo(snpNo: string  | undefined) {
        this['snp_no'] = snpNo;
    }
    public get snpNo(): string | undefined {
        return this['snp_no'];
    }
    public withDrRelationId(drRelationId: string): UpdateTestCaseListInfo {
        this['dr_relation_id'] = drRelationId;
        return this;
    }
    public set drRelationId(drRelationId: string  | undefined) {
        this['dr_relation_id'] = drRelationId;
    }
    public get drRelationId(): string | undefined {
        return this['dr_relation_id'];
    }
    public withTestBaseNum(testBaseNum: string): UpdateTestCaseListInfo {
        this['test_base_num'] = testBaseNum;
        return this;
    }
    public set testBaseNum(testBaseNum: string  | undefined) {
        this['test_base_num'] = testBaseNum;
    }
    public get testBaseNum(): string | undefined {
        return this['test_base_num'];
    }
    public withAutomaticallyExecuted(automaticallyExecuted: number): UpdateTestCaseListInfo {
        this['automatically_executed'] = automaticallyExecuted;
        return this;
    }
    public set automaticallyExecuted(automaticallyExecuted: number  | undefined) {
        this['automatically_executed'] = automaticallyExecuted;
    }
    public get automaticallyExecuted(): number | undefined {
        return this['automatically_executed'];
    }
    public withFirstExecuteTime(firstExecuteTime: Date): UpdateTestCaseListInfo {
        this['first_execute_time'] = firstExecuteTime;
        return this;
    }
    public set firstExecuteTime(firstExecuteTime: Date  | undefined) {
        this['first_execute_time'] = firstExecuteTime;
    }
    public get firstExecuteTime(): Date | undefined {
        return this['first_execute_time'];
    }
    public withDetectType(detectType: string): UpdateTestCaseListInfo {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): string | undefined {
        return this['detect_type'];
    }
    public withExecuteParam(executeParam: string): UpdateTestCaseListInfo {
        this['execute_param'] = executeParam;
        return this;
    }
    public set executeParam(executeParam: string  | undefined) {
        this['execute_param'] = executeParam;
    }
    public get executeParam(): string | undefined {
        return this['execute_param'];
    }
    public withTestFeature(testFeature: string): UpdateTestCaseListInfo {
        this['test_feature'] = testFeature;
        return this;
    }
    public set testFeature(testFeature: string  | undefined) {
        this['test_feature'] = testFeature;
    }
    public get testFeature(): string | undefined {
        return this['test_feature'];
    }
    public withIsContractTestcase(isContractTestcase: number): UpdateTestCaseListInfo {
        this['is_contract_testcase'] = isContractTestcase;
        return this;
    }
    public set isContractTestcase(isContractTestcase: number  | undefined) {
        this['is_contract_testcase'] = isContractTestcase;
    }
    public get isContractTestcase(): number | undefined {
        return this['is_contract_testcase'];
    }
    public withTimeCost(timeCost: number): UpdateTestCaseListInfo {
        this['time_cost'] = timeCost;
        return this;
    }
    public set timeCost(timeCost: number  | undefined) {
        this['time_cost'] = timeCost;
    }
    public get timeCost(): number | undefined {
        return this['time_cost'];
    }
    public withCustomField1(customField1: string): UpdateTestCaseListInfo {
        this['custom_field_1'] = customField1;
        return this;
    }
    public set customField1(customField1: string  | undefined) {
        this['custom_field_1'] = customField1;
    }
    public get customField1(): string | undefined {
        return this['custom_field_1'];
    }
    public withCustomField2(customField2: string): UpdateTestCaseListInfo {
        this['custom_field_2'] = customField2;
        return this;
    }
    public set customField2(customField2: string  | undefined) {
        this['custom_field_2'] = customField2;
    }
    public get customField2(): string | undefined {
        return this['custom_field_2'];
    }
    public withCustomField3(customField3: string): UpdateTestCaseListInfo {
        this['custom_field_3'] = customField3;
        return this;
    }
    public set customField3(customField3: string  | undefined) {
        this['custom_field_3'] = customField3;
    }
    public get customField3(): string | undefined {
        return this['custom_field_3'];
    }
    public withCustomField4(customField4: string): UpdateTestCaseListInfo {
        this['custom_field_4'] = customField4;
        return this;
    }
    public set customField4(customField4: string  | undefined) {
        this['custom_field_4'] = customField4;
    }
    public get customField4(): string | undefined {
        return this['custom_field_4'];
    }
    public withCustomField5(customField5: string): UpdateTestCaseListInfo {
        this['custom_field_5'] = customField5;
        return this;
    }
    public set customField5(customField5: string  | undefined) {
        this['custom_field_5'] = customField5;
    }
    public get customField5(): string | undefined {
        return this['custom_field_5'];
    }
    public withCustomField6(customField6: string): UpdateTestCaseListInfo {
        this['custom_field_6'] = customField6;
        return this;
    }
    public set customField6(customField6: string  | undefined) {
        this['custom_field_6'] = customField6;
    }
    public get customField6(): string | undefined {
        return this['custom_field_6'];
    }
    public withCustomField7(customField7: string): UpdateTestCaseListInfo {
        this['custom_field_7'] = customField7;
        return this;
    }
    public set customField7(customField7: string  | undefined) {
        this['custom_field_7'] = customField7;
    }
    public get customField7(): string | undefined {
        return this['custom_field_7'];
    }
    public withCustomField8(customField8: string): UpdateTestCaseListInfo {
        this['custom_field_8'] = customField8;
        return this;
    }
    public set customField8(customField8: string  | undefined) {
        this['custom_field_8'] = customField8;
    }
    public get customField8(): string | undefined {
        return this['custom_field_8'];
    }
    public withCustomField9(customField9: string): UpdateTestCaseListInfo {
        this['custom_field_9'] = customField9;
        return this;
    }
    public set customField9(customField9: string  | undefined) {
        this['custom_field_9'] = customField9;
    }
    public get customField9(): string | undefined {
        return this['custom_field_9'];
    }
    public withCustomField10(customField10: string): UpdateTestCaseListInfo {
        this['custom_field_10'] = customField10;
        return this;
    }
    public set customField10(customField10: string  | undefined) {
        this['custom_field_10'] = customField10;
    }
    public get customField10(): string | undefined {
        return this['custom_field_10'];
    }
    public withCustomField11(customField11: string): UpdateTestCaseListInfo {
        this['custom_field_11'] = customField11;
        return this;
    }
    public set customField11(customField11: string  | undefined) {
        this['custom_field_11'] = customField11;
    }
    public get customField11(): string | undefined {
        return this['custom_field_11'];
    }
    public withCustomField12(customField12: string): UpdateTestCaseListInfo {
        this['custom_field_12'] = customField12;
        return this;
    }
    public set customField12(customField12: string  | undefined) {
        this['custom_field_12'] = customField12;
    }
    public get customField12(): string | undefined {
        return this['custom_field_12'];
    }
    public withCustomField13(customField13: string): UpdateTestCaseListInfo {
        this['custom_field_13'] = customField13;
        return this;
    }
    public set customField13(customField13: string  | undefined) {
        this['custom_field_13'] = customField13;
    }
    public get customField13(): string | undefined {
        return this['custom_field_13'];
    }
    public withCustomField14(customField14: string): UpdateTestCaseListInfo {
        this['custom_field_14'] = customField14;
        return this;
    }
    public set customField14(customField14: string  | undefined) {
        this['custom_field_14'] = customField14;
    }
    public get customField14(): string | undefined {
        return this['custom_field_14'];
    }
    public withCustomField15(customField15: string): UpdateTestCaseListInfo {
        this['custom_field_15'] = customField15;
        return this;
    }
    public set customField15(customField15: string  | undefined) {
        this['custom_field_15'] = customField15;
    }
    public get customField15(): string | undefined {
        return this['custom_field_15'];
    }
    public withCustomField16(customField16: string): UpdateTestCaseListInfo {
        this['custom_field_16'] = customField16;
        return this;
    }
    public set customField16(customField16: string  | undefined) {
        this['custom_field_16'] = customField16;
    }
    public get customField16(): string | undefined {
        return this['custom_field_16'];
    }
    public withCustomField17(customField17: string): UpdateTestCaseListInfo {
        this['custom_field_17'] = customField17;
        return this;
    }
    public set customField17(customField17: string  | undefined) {
        this['custom_field_17'] = customField17;
    }
    public get customField17(): string | undefined {
        return this['custom_field_17'];
    }
    public withCustomField18(customField18: string): UpdateTestCaseListInfo {
        this['custom_field_18'] = customField18;
        return this;
    }
    public set customField18(customField18: string  | undefined) {
        this['custom_field_18'] = customField18;
    }
    public get customField18(): string | undefined {
        return this['custom_field_18'];
    }
    public withCustomField19(customField19: string): UpdateTestCaseListInfo {
        this['custom_field_19'] = customField19;
        return this;
    }
    public set customField19(customField19: string  | undefined) {
        this['custom_field_19'] = customField19;
    }
    public get customField19(): string | undefined {
        return this['custom_field_19'];
    }
    public withCustomField20(customField20: string): UpdateTestCaseListInfo {
        this['custom_field_20'] = customField20;
        return this;
    }
    public set customField20(customField20: string  | undefined) {
        this['custom_field_20'] = customField20;
    }
    public get customField20(): string | undefined {
        return this['custom_field_20'];
    }
    public withCustomField21(customField21: string): UpdateTestCaseListInfo {
        this['custom_field_21'] = customField21;
        return this;
    }
    public set customField21(customField21: string  | undefined) {
        this['custom_field_21'] = customField21;
    }
    public get customField21(): string | undefined {
        return this['custom_field_21'];
    }
    public withCustomField22(customField22: string): UpdateTestCaseListInfo {
        this['custom_field_22'] = customField22;
        return this;
    }
    public set customField22(customField22: string  | undefined) {
        this['custom_field_22'] = customField22;
    }
    public get customField22(): string | undefined {
        return this['custom_field_22'];
    }
    public withCustomField23(customField23: string): UpdateTestCaseListInfo {
        this['custom_field_23'] = customField23;
        return this;
    }
    public set customField23(customField23: string  | undefined) {
        this['custom_field_23'] = customField23;
    }
    public get customField23(): string | undefined {
        return this['custom_field_23'];
    }
    public withCustomField24(customField24: string): UpdateTestCaseListInfo {
        this['custom_field_24'] = customField24;
        return this;
    }
    public set customField24(customField24: string  | undefined) {
        this['custom_field_24'] = customField24;
    }
    public get customField24(): string | undefined {
        return this['custom_field_24'];
    }
    public withCustomField25(customField25: string): UpdateTestCaseListInfo {
        this['custom_field_25'] = customField25;
        return this;
    }
    public set customField25(customField25: string  | undefined) {
        this['custom_field_25'] = customField25;
    }
    public get customField25(): string | undefined {
        return this['custom_field_25'];
    }
    public withBeAutoTypeTime(beAutoTypeTime: Date): UpdateTestCaseListInfo {
        this['be_auto_type_time'] = beAutoTypeTime;
        return this;
    }
    public set beAutoTypeTime(beAutoTypeTime: Date  | undefined) {
        this['be_auto_type_time'] = beAutoTypeTime;
    }
    public get beAutoTypeTime(): Date | undefined {
        return this['be_auto_type_time'];
    }
    public withCompareNumber(compareNumber: string): UpdateTestCaseListInfo {
        this['compare_number'] = compareNumber;
        return this;
    }
    public set compareNumber(compareNumber: string  | undefined) {
        this['compare_number'] = compareNumber;
    }
    public get compareNumber(): string | undefined {
        return this['compare_number'];
    }
    public withSceneFlag(sceneFlag: string): UpdateTestCaseListInfo {
        this['scene_flag'] = sceneFlag;
        return this;
    }
    public set sceneFlag(sceneFlag: string  | undefined) {
        this['scene_flag'] = sceneFlag;
    }
    public get sceneFlag(): string | undefined {
        return this['scene_flag'];
    }
    public withBaseFlag(baseFlag: string): UpdateTestCaseListInfo {
        this['base_flag'] = baseFlag;
        return this;
    }
    public set baseFlag(baseFlag: string  | undefined) {
        this['base_flag'] = baseFlag;
    }
    public get baseFlag(): string | undefined {
        return this['base_flag'];
    }
    public withParaValidator(paraValidator: string): UpdateTestCaseListInfo {
        this['para_validator'] = paraValidator;
        return this;
    }
    public set paraValidator(paraValidator: string  | undefined) {
        this['para_validator'] = paraValidator;
    }
    public get paraValidator(): string | undefined {
        return this['para_validator'];
    }
    public withKnetNodeId(knetNodeId: string): UpdateTestCaseListInfo {
        this['knet_node_id'] = knetNodeId;
        return this;
    }
    public set knetNodeId(knetNodeId: string  | undefined) {
        this['knet_node_id'] = knetNodeId;
    }
    public get knetNodeId(): string | undefined {
        return this['knet_node_id'];
    }
    public withLastExeAuthor(lastExeAuthor: string): UpdateTestCaseListInfo {
        this['last_exe_author'] = lastExeAuthor;
        return this;
    }
    public set lastExeAuthor(lastExeAuthor: string  | undefined) {
        this['last_exe_author'] = lastExeAuthor;
    }
    public get lastExeAuthor(): string | undefined {
        return this['last_exe_author'];
    }
    public withCloudCarrier(cloudCarrier: string): UpdateTestCaseListInfo {
        this['cloud_carrier'] = cloudCarrier;
        return this;
    }
    public set cloudCarrier(cloudCarrier: string  | undefined) {
        this['cloud_carrier'] = cloudCarrier;
    }
    public get cloudCarrier(): string | undefined {
        return this['cloud_carrier'];
    }
    public withMarketPlace(marketPlace: string): UpdateTestCaseListInfo {
        this['market_place'] = marketPlace;
        return this;
    }
    public set marketPlace(marketPlace: string  | undefined) {
        this['market_place'] = marketPlace;
    }
    public get marketPlace(): string | undefined {
        return this['market_place'];
    }
    public withTestMindId(testMindId: string): UpdateTestCaseListInfo {
        this['test_mind_id'] = testMindId;
        return this;
    }
    public set testMindId(testMindId: string  | undefined) {
        this['test_mind_id'] = testMindId;
    }
    public get testMindId(): string | undefined {
        return this['test_mind_id'];
    }
    public withTestMindUrl(testMindUrl: string): UpdateTestCaseListInfo {
        this['test_mind_url'] = testMindUrl;
        return this;
    }
    public set testMindUrl(testMindUrl: string  | undefined) {
        this['test_mind_url'] = testMindUrl;
    }
    public get testMindUrl(): string | undefined {
        return this['test_mind_url'];
    }
    public withCommitUrl(commitUrl: string): UpdateTestCaseListInfo {
        this['commit_url'] = commitUrl;
        return this;
    }
    public set commitUrl(commitUrl: string  | undefined) {
        this['commit_url'] = commitUrl;
    }
    public get commitUrl(): string | undefined {
        return this['commit_url'];
    }
    public withTestPatternNumber(testPatternNumber: string): UpdateTestCaseListInfo {
        this['test_pattern_number'] = testPatternNumber;
        return this;
    }
    public set testPatternNumber(testPatternNumber: string  | undefined) {
        this['test_pattern_number'] = testPatternNumber;
    }
    public get testPatternNumber(): string | undefined {
        return this['test_pattern_number'];
    }
    public withTestFactorNumber(testFactorNumber: string): UpdateTestCaseListInfo {
        this['test_factor_number'] = testFactorNumber;
        return this;
    }
    public set testFactorNumber(testFactorNumber: string  | undefined) {
        this['test_factor_number'] = testFactorNumber;
    }
    public get testFactorNumber(): string | undefined {
        return this['test_factor_number'];
    }
    public withStatusCode(statusCode: string): UpdateTestCaseListInfo {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withResultCode(resultCode: string): UpdateTestCaseListInfo {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withReleaseId(releaseId: string): UpdateTestCaseListInfo {
        this['release_id'] = releaseId;
        return this;
    }
    public set releaseId(releaseId: string  | undefined) {
        this['release_id'] = releaseId;
    }
    public get releaseId(): string | undefined {
        return this['release_id'];
    }
    public withLabelId(labelId: string): UpdateTestCaseListInfo {
        this['label_id'] = labelId;
        return this;
    }
    public set labelId(labelId: string  | undefined) {
        this['label_id'] = labelId;
    }
    public get labelId(): string | undefined {
        return this['label_id'];
    }
    public withLabelNames(labelNames: Array<string>): UpdateTestCaseListInfo {
        this['label_names'] = labelNames;
        return this;
    }
    public set labelNames(labelNames: Array<string>  | undefined) {
        this['label_names'] = labelNames;
    }
    public get labelNames(): Array<string> | undefined {
        return this['label_names'];
    }
    public withModuleId(moduleId: string): UpdateTestCaseListInfo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withExecuteLatestTime(executeLatestTime: Date): UpdateTestCaseListInfo {
        this['execute_latest_time'] = executeLatestTime;
        return this;
    }
    public set executeLatestTime(executeLatestTime: Date  | undefined) {
        this['execute_latest_time'] = executeLatestTime;
    }
    public get executeLatestTime(): Date | undefined {
        return this['execute_latest_time'];
    }
    public withExecuteDuration(executeDuration: string): UpdateTestCaseListInfo {
        this['execute_duration'] = executeDuration;
        return this;
    }
    public set executeDuration(executeDuration: string  | undefined) {
        this['execute_duration'] = executeDuration;
    }
    public get executeDuration(): string | undefined {
        return this['execute_duration'];
    }
    public withIsKeyword(isKeyword: number): UpdateTestCaseListInfo {
        this['is_keyword'] = isKeyword;
        return this;
    }
    public set isKeyword(isKeyword: number  | undefined) {
        this['is_keyword'] = isKeyword;
    }
    public get isKeyword(): number | undefined {
        return this['is_keyword'];
    }
    public withReleaseDev(releaseDev: string): UpdateTestCaseListInfo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withNewCreated(newCreated: number): UpdateTestCaseListInfo {
        this['new_created'] = newCreated;
        return this;
    }
    public set newCreated(newCreated: number  | undefined) {
        this['new_created'] = newCreated;
    }
    public get newCreated(): number | undefined {
        return this['new_created'];
    }
    public withExecuteParameter(executeParameter: string): UpdateTestCaseListInfo {
        this['execute_parameter'] = executeParameter;
        return this;
    }
    public set executeParameter(executeParameter: string  | undefined) {
        this['execute_parameter'] = executeParameter;
    }
    public get executeParameter(): string | undefined {
        return this['execute_parameter'];
    }
    public withProjectUuid(projectUuid: string): UpdateTestCaseListInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withVersionUri(versionUri: string): UpdateTestCaseListInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withCaseList(caseList: Array<CaseInfo>): UpdateTestCaseListInfo {
        this['case_list'] = caseList;
        return this;
    }
    public set caseList(caseList: Array<CaseInfo>  | undefined) {
        this['case_list'] = caseList;
    }
    public get caseList(): Array<CaseInfo> | undefined {
        return this['case_list'];
    }
    public withCaseIdList(caseIdList: Array<string>): UpdateTestCaseListInfo {
        this['case_id_list'] = caseIdList;
        return this;
    }
    public set caseIdList(caseIdList: Array<string>  | undefined) {
        this['case_id_list'] = caseIdList;
    }
    public get caseIdList(): Array<string> | undefined {
        return this['case_id_list'];
    }
}