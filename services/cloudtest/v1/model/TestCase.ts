

export class TestCase {
    private 'auto_type'?: string;
    private 'case_design_desc'?: string;
    private 'case_name'?: string;
    private 'case_num'?: string;
    private 'create_time'?: Date;
    private 'creator_name'?: string;
    private 'creator_num'?: string;
    public deleted?: string;
    private 'expected_results'?: string;
    private 'extra_param'?: string;
    private 'factor_combination_json'?: string;
    private 'operation_and_expected_result'?: string;
    public id?: string;
    private 'is_archive'?: boolean;
    private 'mindmap_id'?: string;
    private 'node_id'?: string;
    private 'batch_id'?: string;
    private 'branch_id'?: string;
    private 'plan_id'?: string;
    public prerequisite?: string;
    private 'test_case_level'?: string;
    private 'test_procedure'?: string;
    private 'update_name'?: string;
    private 'update_num'?: string;
    private 'update_time'?: Date;
    public url?: string;
    public uri?: string;
    private 'project_id'?: string;
    private 'service_id'?: string;
    public constructor() { 
    }
    public withAutoType(autoType: string): TestCase {
        this['auto_type'] = autoType;
        return this;
    }
    public set autoType(autoType: string  | undefined) {
        this['auto_type'] = autoType;
    }
    public get autoType(): string | undefined {
        return this['auto_type'];
    }
    public withCaseDesignDesc(caseDesignDesc: string): TestCase {
        this['case_design_desc'] = caseDesignDesc;
        return this;
    }
    public set caseDesignDesc(caseDesignDesc: string  | undefined) {
        this['case_design_desc'] = caseDesignDesc;
    }
    public get caseDesignDesc(): string | undefined {
        return this['case_design_desc'];
    }
    public withCaseName(caseName: string): TestCase {
        this['case_name'] = caseName;
        return this;
    }
    public set caseName(caseName: string  | undefined) {
        this['case_name'] = caseName;
    }
    public get caseName(): string | undefined {
        return this['case_name'];
    }
    public withCaseNum(caseNum: string): TestCase {
        this['case_num'] = caseNum;
        return this;
    }
    public set caseNum(caseNum: string  | undefined) {
        this['case_num'] = caseNum;
    }
    public get caseNum(): string | undefined {
        return this['case_num'];
    }
    public withCreateTime(createTime: Date): TestCase {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): TestCase {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorNum(creatorNum: string): TestCase {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withDeleted(deleted: string): TestCase {
        this['deleted'] = deleted;
        return this;
    }
    public withExpectedResults(expectedResults: string): TestCase {
        this['expected_results'] = expectedResults;
        return this;
    }
    public set expectedResults(expectedResults: string  | undefined) {
        this['expected_results'] = expectedResults;
    }
    public get expectedResults(): string | undefined {
        return this['expected_results'];
    }
    public withExtraParam(extraParam: string): TestCase {
        this['extra_param'] = extraParam;
        return this;
    }
    public set extraParam(extraParam: string  | undefined) {
        this['extra_param'] = extraParam;
    }
    public get extraParam(): string | undefined {
        return this['extra_param'];
    }
    public withFactorCombinationJson(factorCombinationJson: string): TestCase {
        this['factor_combination_json'] = factorCombinationJson;
        return this;
    }
    public set factorCombinationJson(factorCombinationJson: string  | undefined) {
        this['factor_combination_json'] = factorCombinationJson;
    }
    public get factorCombinationJson(): string | undefined {
        return this['factor_combination_json'];
    }
    public withOperationAndExpectedResult(operationAndExpectedResult: string): TestCase {
        this['operation_and_expected_result'] = operationAndExpectedResult;
        return this;
    }
    public set operationAndExpectedResult(operationAndExpectedResult: string  | undefined) {
        this['operation_and_expected_result'] = operationAndExpectedResult;
    }
    public get operationAndExpectedResult(): string | undefined {
        return this['operation_and_expected_result'];
    }
    public withId(id: string): TestCase {
        this['id'] = id;
        return this;
    }
    public withIsArchive(isArchive: boolean): TestCase {
        this['is_archive'] = isArchive;
        return this;
    }
    public set isArchive(isArchive: boolean  | undefined) {
        this['is_archive'] = isArchive;
    }
    public get isArchive(): boolean | undefined {
        return this['is_archive'];
    }
    public withMindmapId(mindmapId: string): TestCase {
        this['mindmap_id'] = mindmapId;
        return this;
    }
    public set mindmapId(mindmapId: string  | undefined) {
        this['mindmap_id'] = mindmapId;
    }
    public get mindmapId(): string | undefined {
        return this['mindmap_id'];
    }
    public withNodeId(nodeId: string): TestCase {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBatchId(batchId: string): TestCase {
        this['batch_id'] = batchId;
        return this;
    }
    public set batchId(batchId: string  | undefined) {
        this['batch_id'] = batchId;
    }
    public get batchId(): string | undefined {
        return this['batch_id'];
    }
    public withBranchId(branchId: string): TestCase {
        this['branch_id'] = branchId;
        return this;
    }
    public set branchId(branchId: string  | undefined) {
        this['branch_id'] = branchId;
    }
    public get branchId(): string | undefined {
        return this['branch_id'];
    }
    public withPlanId(planId: string): TestCase {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withPrerequisite(prerequisite: string): TestCase {
        this['prerequisite'] = prerequisite;
        return this;
    }
    public withTestCaseLevel(testCaseLevel: string): TestCase {
        this['test_case_level'] = testCaseLevel;
        return this;
    }
    public set testCaseLevel(testCaseLevel: string  | undefined) {
        this['test_case_level'] = testCaseLevel;
    }
    public get testCaseLevel(): string | undefined {
        return this['test_case_level'];
    }
    public withTestProcedure(testProcedure: string): TestCase {
        this['test_procedure'] = testProcedure;
        return this;
    }
    public set testProcedure(testProcedure: string  | undefined) {
        this['test_procedure'] = testProcedure;
    }
    public get testProcedure(): string | undefined {
        return this['test_procedure'];
    }
    public withUpdateName(updateName: string): TestCase {
        this['update_name'] = updateName;
        return this;
    }
    public set updateName(updateName: string  | undefined) {
        this['update_name'] = updateName;
    }
    public get updateName(): string | undefined {
        return this['update_name'];
    }
    public withUpdateNum(updateNum: string): TestCase {
        this['update_num'] = updateNum;
        return this;
    }
    public set updateNum(updateNum: string  | undefined) {
        this['update_num'] = updateNum;
    }
    public get updateNum(): string | undefined {
        return this['update_num'];
    }
    public withUpdateTime(updateTime: Date): TestCase {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUrl(url: string): TestCase {
        this['url'] = url;
        return this;
    }
    public withUri(uri: string): TestCase {
        this['uri'] = uri;
        return this;
    }
    public withProjectId(projectId: string): TestCase {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withServiceId(serviceId: string): TestCase {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
}