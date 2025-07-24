import { TmssStep } from './TmssStep';


export class TmssTestcase {
    private 'activity_id'?: string;
    private 'applied_product'?: string;
    public author?: string;
    private 'auto_type'?: string;
    public cataId?: string;
    private 'creation_date'?: string;
    private 'custom_field_1'?: string;
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
    private 'custom_field_2'?: string;
    private 'custom_field_20'?: string;
    private 'custom_field_21'?: string;
    private 'custom_field_22'?: string;
    private 'custom_field_23'?: string;
    private 'custom_field_24'?: string;
    private 'custom_field_25'?: string;
    private 'custom_field_3'?: string;
    private 'custom_field_4'?: string;
    private 'custom_field_5'?: string;
    private 'custom_field_6'?: string;
    private 'custom_field_7'?: string;
    private 'custom_field_8'?: string;
    private 'custom_field_9'?: string;
    public description?: string;
    private 'dr_relationid'?: string;
    private 'env_type'?: string;
    private 'exe_platform'?: string;
    private 'expect_output'?: string;
    private 'feature_path'?: string;
    public isKeyWord?: number;
    private 'is_contract_testcase'?: string;
    private 'is_paraValidator_testcase'?: string;
    public labelId?: Array<string>;
    private 'last_modified'?: string;
    private 'last_modifier'?: string;
    private 'last_result'?: string;
    public level?: number;
    public market?: string;
    public moduleId?: string;
    public name?: string;
    public networkScriptName?: string;
    private 'node_name'?: string;
    private 'number'?: string;
    public originUri?: string;
    public owner?: string;
    public ownerId?: string;
    public preparation?: string;
    public releaseDev?: string;
    public releaseId?: string;
    public remark?: string;
    public stage?: string;
    public steps?: Array<TmssStep>;
    public svnScriptPath?: string;
    public tags?: string;
    private 'test_feature'?: string;
    private 'test_step'?: string;
    private 'test_type'?: number;
    public uri?: string;
    public constructor() { 
    }
    public withActivityId(activityId: string): TmssTestcase {
        this['activity_id'] = activityId;
        return this;
    }
    public set activityId(activityId: string  | undefined) {
        this['activity_id'] = activityId;
    }
    public get activityId(): string | undefined {
        return this['activity_id'];
    }
    public withAppliedProduct(appliedProduct: string): TmssTestcase {
        this['applied_product'] = appliedProduct;
        return this;
    }
    public set appliedProduct(appliedProduct: string  | undefined) {
        this['applied_product'] = appliedProduct;
    }
    public get appliedProduct(): string | undefined {
        return this['applied_product'];
    }
    public withAuthor(author: string): TmssTestcase {
        this['author'] = author;
        return this;
    }
    public withAutoType(autoType: string): TmssTestcase {
        this['auto_type'] = autoType;
        return this;
    }
    public set autoType(autoType: string  | undefined) {
        this['auto_type'] = autoType;
    }
    public get autoType(): string | undefined {
        return this['auto_type'];
    }
    public withCataId(cataId: string): TmssTestcase {
        this['cataId'] = cataId;
        return this;
    }
    public withCreationDate(creationDate: string): TmssTestcase {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): string | undefined {
        return this['creation_date'];
    }
    public withCustomField1(customField1: string): TmssTestcase {
        this['custom_field_1'] = customField1;
        return this;
    }
    public set customField1(customField1: string  | undefined) {
        this['custom_field_1'] = customField1;
    }
    public get customField1(): string | undefined {
        return this['custom_field_1'];
    }
    public withCustomField10(customField10: string): TmssTestcase {
        this['custom_field_10'] = customField10;
        return this;
    }
    public set customField10(customField10: string  | undefined) {
        this['custom_field_10'] = customField10;
    }
    public get customField10(): string | undefined {
        return this['custom_field_10'];
    }
    public withCustomField11(customField11: string): TmssTestcase {
        this['custom_field_11'] = customField11;
        return this;
    }
    public set customField11(customField11: string  | undefined) {
        this['custom_field_11'] = customField11;
    }
    public get customField11(): string | undefined {
        return this['custom_field_11'];
    }
    public withCustomField12(customField12: string): TmssTestcase {
        this['custom_field_12'] = customField12;
        return this;
    }
    public set customField12(customField12: string  | undefined) {
        this['custom_field_12'] = customField12;
    }
    public get customField12(): string | undefined {
        return this['custom_field_12'];
    }
    public withCustomField13(customField13: string): TmssTestcase {
        this['custom_field_13'] = customField13;
        return this;
    }
    public set customField13(customField13: string  | undefined) {
        this['custom_field_13'] = customField13;
    }
    public get customField13(): string | undefined {
        return this['custom_field_13'];
    }
    public withCustomField14(customField14: string): TmssTestcase {
        this['custom_field_14'] = customField14;
        return this;
    }
    public set customField14(customField14: string  | undefined) {
        this['custom_field_14'] = customField14;
    }
    public get customField14(): string | undefined {
        return this['custom_field_14'];
    }
    public withCustomField15(customField15: string): TmssTestcase {
        this['custom_field_15'] = customField15;
        return this;
    }
    public set customField15(customField15: string  | undefined) {
        this['custom_field_15'] = customField15;
    }
    public get customField15(): string | undefined {
        return this['custom_field_15'];
    }
    public withCustomField16(customField16: string): TmssTestcase {
        this['custom_field_16'] = customField16;
        return this;
    }
    public set customField16(customField16: string  | undefined) {
        this['custom_field_16'] = customField16;
    }
    public get customField16(): string | undefined {
        return this['custom_field_16'];
    }
    public withCustomField17(customField17: string): TmssTestcase {
        this['custom_field_17'] = customField17;
        return this;
    }
    public set customField17(customField17: string  | undefined) {
        this['custom_field_17'] = customField17;
    }
    public get customField17(): string | undefined {
        return this['custom_field_17'];
    }
    public withCustomField18(customField18: string): TmssTestcase {
        this['custom_field_18'] = customField18;
        return this;
    }
    public set customField18(customField18: string  | undefined) {
        this['custom_field_18'] = customField18;
    }
    public get customField18(): string | undefined {
        return this['custom_field_18'];
    }
    public withCustomField19(customField19: string): TmssTestcase {
        this['custom_field_19'] = customField19;
        return this;
    }
    public set customField19(customField19: string  | undefined) {
        this['custom_field_19'] = customField19;
    }
    public get customField19(): string | undefined {
        return this['custom_field_19'];
    }
    public withCustomField2(customField2: string): TmssTestcase {
        this['custom_field_2'] = customField2;
        return this;
    }
    public set customField2(customField2: string  | undefined) {
        this['custom_field_2'] = customField2;
    }
    public get customField2(): string | undefined {
        return this['custom_field_2'];
    }
    public withCustomField20(customField20: string): TmssTestcase {
        this['custom_field_20'] = customField20;
        return this;
    }
    public set customField20(customField20: string  | undefined) {
        this['custom_field_20'] = customField20;
    }
    public get customField20(): string | undefined {
        return this['custom_field_20'];
    }
    public withCustomField21(customField21: string): TmssTestcase {
        this['custom_field_21'] = customField21;
        return this;
    }
    public set customField21(customField21: string  | undefined) {
        this['custom_field_21'] = customField21;
    }
    public get customField21(): string | undefined {
        return this['custom_field_21'];
    }
    public withCustomField22(customField22: string): TmssTestcase {
        this['custom_field_22'] = customField22;
        return this;
    }
    public set customField22(customField22: string  | undefined) {
        this['custom_field_22'] = customField22;
    }
    public get customField22(): string | undefined {
        return this['custom_field_22'];
    }
    public withCustomField23(customField23: string): TmssTestcase {
        this['custom_field_23'] = customField23;
        return this;
    }
    public set customField23(customField23: string  | undefined) {
        this['custom_field_23'] = customField23;
    }
    public get customField23(): string | undefined {
        return this['custom_field_23'];
    }
    public withCustomField24(customField24: string): TmssTestcase {
        this['custom_field_24'] = customField24;
        return this;
    }
    public set customField24(customField24: string  | undefined) {
        this['custom_field_24'] = customField24;
    }
    public get customField24(): string | undefined {
        return this['custom_field_24'];
    }
    public withCustomField25(customField25: string): TmssTestcase {
        this['custom_field_25'] = customField25;
        return this;
    }
    public set customField25(customField25: string  | undefined) {
        this['custom_field_25'] = customField25;
    }
    public get customField25(): string | undefined {
        return this['custom_field_25'];
    }
    public withCustomField3(customField3: string): TmssTestcase {
        this['custom_field_3'] = customField3;
        return this;
    }
    public set customField3(customField3: string  | undefined) {
        this['custom_field_3'] = customField3;
    }
    public get customField3(): string | undefined {
        return this['custom_field_3'];
    }
    public withCustomField4(customField4: string): TmssTestcase {
        this['custom_field_4'] = customField4;
        return this;
    }
    public set customField4(customField4: string  | undefined) {
        this['custom_field_4'] = customField4;
    }
    public get customField4(): string | undefined {
        return this['custom_field_4'];
    }
    public withCustomField5(customField5: string): TmssTestcase {
        this['custom_field_5'] = customField5;
        return this;
    }
    public set customField5(customField5: string  | undefined) {
        this['custom_field_5'] = customField5;
    }
    public get customField5(): string | undefined {
        return this['custom_field_5'];
    }
    public withCustomField6(customField6: string): TmssTestcase {
        this['custom_field_6'] = customField6;
        return this;
    }
    public set customField6(customField6: string  | undefined) {
        this['custom_field_6'] = customField6;
    }
    public get customField6(): string | undefined {
        return this['custom_field_6'];
    }
    public withCustomField7(customField7: string): TmssTestcase {
        this['custom_field_7'] = customField7;
        return this;
    }
    public set customField7(customField7: string  | undefined) {
        this['custom_field_7'] = customField7;
    }
    public get customField7(): string | undefined {
        return this['custom_field_7'];
    }
    public withCustomField8(customField8: string): TmssTestcase {
        this['custom_field_8'] = customField8;
        return this;
    }
    public set customField8(customField8: string  | undefined) {
        this['custom_field_8'] = customField8;
    }
    public get customField8(): string | undefined {
        return this['custom_field_8'];
    }
    public withCustomField9(customField9: string): TmssTestcase {
        this['custom_field_9'] = customField9;
        return this;
    }
    public set customField9(customField9: string  | undefined) {
        this['custom_field_9'] = customField9;
    }
    public get customField9(): string | undefined {
        return this['custom_field_9'];
    }
    public withDescription(description: string): TmssTestcase {
        this['description'] = description;
        return this;
    }
    public withDrRelationid(drRelationid: string): TmssTestcase {
        this['dr_relationid'] = drRelationid;
        return this;
    }
    public set drRelationid(drRelationid: string  | undefined) {
        this['dr_relationid'] = drRelationid;
    }
    public get drRelationid(): string | undefined {
        return this['dr_relationid'];
    }
    public withEnvType(envType: string): TmssTestcase {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: string  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): string | undefined {
        return this['env_type'];
    }
    public withExePlatform(exePlatform: string): TmssTestcase {
        this['exe_platform'] = exePlatform;
        return this;
    }
    public set exePlatform(exePlatform: string  | undefined) {
        this['exe_platform'] = exePlatform;
    }
    public get exePlatform(): string | undefined {
        return this['exe_platform'];
    }
    public withExpectOutput(expectOutput: string): TmssTestcase {
        this['expect_output'] = expectOutput;
        return this;
    }
    public set expectOutput(expectOutput: string  | undefined) {
        this['expect_output'] = expectOutput;
    }
    public get expectOutput(): string | undefined {
        return this['expect_output'];
    }
    public withFeaturePath(featurePath: string): TmssTestcase {
        this['feature_path'] = featurePath;
        return this;
    }
    public set featurePath(featurePath: string  | undefined) {
        this['feature_path'] = featurePath;
    }
    public get featurePath(): string | undefined {
        return this['feature_path'];
    }
    public withIsKeyWord(isKeyWord: number): TmssTestcase {
        this['isKeyWord'] = isKeyWord;
        return this;
    }
    public withIsContractTestcase(isContractTestcase: string): TmssTestcase {
        this['is_contract_testcase'] = isContractTestcase;
        return this;
    }
    public set isContractTestcase(isContractTestcase: string  | undefined) {
        this['is_contract_testcase'] = isContractTestcase;
    }
    public get isContractTestcase(): string | undefined {
        return this['is_contract_testcase'];
    }
    public withIsParaValidatorTestcase(isParaValidatorTestcase: string): TmssTestcase {
        this['is_paraValidator_testcase'] = isParaValidatorTestcase;
        return this;
    }
    public set isParaValidatorTestcase(isParaValidatorTestcase: string  | undefined) {
        this['is_paraValidator_testcase'] = isParaValidatorTestcase;
    }
    public get isParaValidatorTestcase(): string | undefined {
        return this['is_paraValidator_testcase'];
    }
    public withLabelId(labelId: Array<string>): TmssTestcase {
        this['labelId'] = labelId;
        return this;
    }
    public withLastModified(lastModified: string): TmssTestcase {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): string | undefined {
        return this['last_modified'];
    }
    public withLastModifier(lastModifier: string): TmssTestcase {
        this['last_modifier'] = lastModifier;
        return this;
    }
    public set lastModifier(lastModifier: string  | undefined) {
        this['last_modifier'] = lastModifier;
    }
    public get lastModifier(): string | undefined {
        return this['last_modifier'];
    }
    public withLastResult(lastResult: string): TmssTestcase {
        this['last_result'] = lastResult;
        return this;
    }
    public set lastResult(lastResult: string  | undefined) {
        this['last_result'] = lastResult;
    }
    public get lastResult(): string | undefined {
        return this['last_result'];
    }
    public withLevel(level: number): TmssTestcase {
        this['level'] = level;
        return this;
    }
    public withMarket(market: string): TmssTestcase {
        this['market'] = market;
        return this;
    }
    public withModuleId(moduleId: string): TmssTestcase {
        this['moduleId'] = moduleId;
        return this;
    }
    public withName(name: string): TmssTestcase {
        this['name'] = name;
        return this;
    }
    public withNetworkScriptName(networkScriptName: string): TmssTestcase {
        this['networkScriptName'] = networkScriptName;
        return this;
    }
    public withNodeName(nodeName: string): TmssTestcase {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withModelNumber(modelNumber: string): TmssTestcase {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withOriginUri(originUri: string): TmssTestcase {
        this['originUri'] = originUri;
        return this;
    }
    public withOwner(owner: string): TmssTestcase {
        this['owner'] = owner;
        return this;
    }
    public withOwnerId(ownerId: string): TmssTestcase {
        this['ownerId'] = ownerId;
        return this;
    }
    public withPreparation(preparation: string): TmssTestcase {
        this['preparation'] = preparation;
        return this;
    }
    public withReleaseDev(releaseDev: string): TmssTestcase {
        this['releaseDev'] = releaseDev;
        return this;
    }
    public withReleaseId(releaseId: string): TmssTestcase {
        this['releaseId'] = releaseId;
        return this;
    }
    public withRemark(remark: string): TmssTestcase {
        this['remark'] = remark;
        return this;
    }
    public withStage(stage: string): TmssTestcase {
        this['stage'] = stage;
        return this;
    }
    public withSteps(steps: Array<TmssStep>): TmssTestcase {
        this['steps'] = steps;
        return this;
    }
    public withSvnScriptPath(svnScriptPath: string): TmssTestcase {
        this['svnScriptPath'] = svnScriptPath;
        return this;
    }
    public withTags(tags: string): TmssTestcase {
        this['tags'] = tags;
        return this;
    }
    public withTestFeature(testFeature: string): TmssTestcase {
        this['test_feature'] = testFeature;
        return this;
    }
    public set testFeature(testFeature: string  | undefined) {
        this['test_feature'] = testFeature;
    }
    public get testFeature(): string | undefined {
        return this['test_feature'];
    }
    public withTestStep(testStep: string): TmssTestcase {
        this['test_step'] = testStep;
        return this;
    }
    public set testStep(testStep: string  | undefined) {
        this['test_step'] = testStep;
    }
    public get testStep(): string | undefined {
        return this['test_step'];
    }
    public withTestType(testType: number): TmssTestcase {
        this['test_type'] = testType;
        return this;
    }
    public set testType(testType: number  | undefined) {
        this['test_type'] = testType;
    }
    public get testType(): number | undefined {
        return this['test_type'];
    }
    public withUri(uri: string): TmssTestcase {
        this['uri'] = uri;
        return this;
    }
}