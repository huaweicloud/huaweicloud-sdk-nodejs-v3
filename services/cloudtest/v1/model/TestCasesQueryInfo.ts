import { QueryCustomFieldsInfo } from './QueryCustomFieldsInfo';


export class TestCasesQueryInfo {
    public keyword?: string;
    public exeplatforms?: Array<string>;
    public own?: boolean;
    public useOffset?: boolean;
    private 'version_uri'?: string;
    private 'case_uris'?: Array<string>;
    private 'owner_ids'?: Array<string>;
    private 'status_codes'?: Array<string>;
    private 'rank_ids'?: Array<string>;
    private 'module_ids'?: Array<string>;
    private 'issue_id'?: string;
    private 'creator_ids'?: Array<string>;
    private 'result_codes'?: Array<string>;
    private 'iteration_ids'?: Array<string>;
    private 'create_start_time'?: string;
    private 'create_end_time'?: string;
    private 'associated_issue'?: boolean;
    private 'associated_defects'?: boolean;
    private 'include_sub_issue'?: boolean;
    private 'include_sub_feature'?: boolean;
    private 'label_ids'?: Array<string>;
    private 'execute_start_time'?: string;
    private 'execute_end_time'?: string;
    private 'executor_ids'?: Array<string>;
    private 'test_types'?: Array<string>;
    private 'is_keyword'?: boolean;
    private 'issue_tree_search'?: boolean;
    private 'service_type'?: number;
    private 'service_types'?: Array<number>;
    private 'stage_type'?: number;
    private 'feature_uri'?: string;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'case_type'?: number;
    private 'custom_field_info'?: Array<QueryCustomFieldsInfo>;
    private 'task_uri'?: string;
    private 'associate_issue_detail'?: boolean;
    private 'not_assign_task'?: boolean;
    private 'test_designs'?: Array<boolean>;
    private 'review_status'?: number;
    public constructor() { 
    }
    public withKeyword(keyword: string): TestCasesQueryInfo {
        this['keyword'] = keyword;
        return this;
    }
    public withExeplatforms(exeplatforms: Array<string>): TestCasesQueryInfo {
        this['exeplatforms'] = exeplatforms;
        return this;
    }
    public withOwn(own: boolean): TestCasesQueryInfo {
        this['own'] = own;
        return this;
    }
    public withUseOffset(useOffset: boolean): TestCasesQueryInfo {
        this['useOffset'] = useOffset;
        return this;
    }
    public withVersionUri(versionUri: string): TestCasesQueryInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withCaseUris(caseUris: Array<string>): TestCasesQueryInfo {
        this['case_uris'] = caseUris;
        return this;
    }
    public set caseUris(caseUris: Array<string>  | undefined) {
        this['case_uris'] = caseUris;
    }
    public get caseUris(): Array<string> | undefined {
        return this['case_uris'];
    }
    public withOwnerIds(ownerIds: Array<string>): TestCasesQueryInfo {
        this['owner_ids'] = ownerIds;
        return this;
    }
    public set ownerIds(ownerIds: Array<string>  | undefined) {
        this['owner_ids'] = ownerIds;
    }
    public get ownerIds(): Array<string> | undefined {
        return this['owner_ids'];
    }
    public withStatusCodes(statusCodes: Array<string>): TestCasesQueryInfo {
        this['status_codes'] = statusCodes;
        return this;
    }
    public set statusCodes(statusCodes: Array<string>  | undefined) {
        this['status_codes'] = statusCodes;
    }
    public get statusCodes(): Array<string> | undefined {
        return this['status_codes'];
    }
    public withRankIds(rankIds: Array<string>): TestCasesQueryInfo {
        this['rank_ids'] = rankIds;
        return this;
    }
    public set rankIds(rankIds: Array<string>  | undefined) {
        this['rank_ids'] = rankIds;
    }
    public get rankIds(): Array<string> | undefined {
        return this['rank_ids'];
    }
    public withModuleIds(moduleIds: Array<string>): TestCasesQueryInfo {
        this['module_ids'] = moduleIds;
        return this;
    }
    public set moduleIds(moduleIds: Array<string>  | undefined) {
        this['module_ids'] = moduleIds;
    }
    public get moduleIds(): Array<string> | undefined {
        return this['module_ids'];
    }
    public withIssueId(issueId: string): TestCasesQueryInfo {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withCreatorIds(creatorIds: Array<string>): TestCasesQueryInfo {
        this['creator_ids'] = creatorIds;
        return this;
    }
    public set creatorIds(creatorIds: Array<string>  | undefined) {
        this['creator_ids'] = creatorIds;
    }
    public get creatorIds(): Array<string> | undefined {
        return this['creator_ids'];
    }
    public withResultCodes(resultCodes: Array<string>): TestCasesQueryInfo {
        this['result_codes'] = resultCodes;
        return this;
    }
    public set resultCodes(resultCodes: Array<string>  | undefined) {
        this['result_codes'] = resultCodes;
    }
    public get resultCodes(): Array<string> | undefined {
        return this['result_codes'];
    }
    public withIterationIds(iterationIds: Array<string>): TestCasesQueryInfo {
        this['iteration_ids'] = iterationIds;
        return this;
    }
    public set iterationIds(iterationIds: Array<string>  | undefined) {
        this['iteration_ids'] = iterationIds;
    }
    public get iterationIds(): Array<string> | undefined {
        return this['iteration_ids'];
    }
    public withCreateStartTime(createStartTime: string): TestCasesQueryInfo {
        this['create_start_time'] = createStartTime;
        return this;
    }
    public set createStartTime(createStartTime: string  | undefined) {
        this['create_start_time'] = createStartTime;
    }
    public get createStartTime(): string | undefined {
        return this['create_start_time'];
    }
    public withCreateEndTime(createEndTime: string): TestCasesQueryInfo {
        this['create_end_time'] = createEndTime;
        return this;
    }
    public set createEndTime(createEndTime: string  | undefined) {
        this['create_end_time'] = createEndTime;
    }
    public get createEndTime(): string | undefined {
        return this['create_end_time'];
    }
    public withAssociatedIssue(associatedIssue: boolean): TestCasesQueryInfo {
        this['associated_issue'] = associatedIssue;
        return this;
    }
    public set associatedIssue(associatedIssue: boolean  | undefined) {
        this['associated_issue'] = associatedIssue;
    }
    public get associatedIssue(): boolean | undefined {
        return this['associated_issue'];
    }
    public withAssociatedDefects(associatedDefects: boolean): TestCasesQueryInfo {
        this['associated_defects'] = associatedDefects;
        return this;
    }
    public set associatedDefects(associatedDefects: boolean  | undefined) {
        this['associated_defects'] = associatedDefects;
    }
    public get associatedDefects(): boolean | undefined {
        return this['associated_defects'];
    }
    public withIncludeSubIssue(includeSubIssue: boolean): TestCasesQueryInfo {
        this['include_sub_issue'] = includeSubIssue;
        return this;
    }
    public set includeSubIssue(includeSubIssue: boolean  | undefined) {
        this['include_sub_issue'] = includeSubIssue;
    }
    public get includeSubIssue(): boolean | undefined {
        return this['include_sub_issue'];
    }
    public withIncludeSubFeature(includeSubFeature: boolean): TestCasesQueryInfo {
        this['include_sub_feature'] = includeSubFeature;
        return this;
    }
    public set includeSubFeature(includeSubFeature: boolean  | undefined) {
        this['include_sub_feature'] = includeSubFeature;
    }
    public get includeSubFeature(): boolean | undefined {
        return this['include_sub_feature'];
    }
    public withLabelIds(labelIds: Array<string>): TestCasesQueryInfo {
        this['label_ids'] = labelIds;
        return this;
    }
    public set labelIds(labelIds: Array<string>  | undefined) {
        this['label_ids'] = labelIds;
    }
    public get labelIds(): Array<string> | undefined {
        return this['label_ids'];
    }
    public withExecuteStartTime(executeStartTime: string): TestCasesQueryInfo {
        this['execute_start_time'] = executeStartTime;
        return this;
    }
    public set executeStartTime(executeStartTime: string  | undefined) {
        this['execute_start_time'] = executeStartTime;
    }
    public get executeStartTime(): string | undefined {
        return this['execute_start_time'];
    }
    public withExecuteEndTime(executeEndTime: string): TestCasesQueryInfo {
        this['execute_end_time'] = executeEndTime;
        return this;
    }
    public set executeEndTime(executeEndTime: string  | undefined) {
        this['execute_end_time'] = executeEndTime;
    }
    public get executeEndTime(): string | undefined {
        return this['execute_end_time'];
    }
    public withExecutorIds(executorIds: Array<string>): TestCasesQueryInfo {
        this['executor_ids'] = executorIds;
        return this;
    }
    public set executorIds(executorIds: Array<string>  | undefined) {
        this['executor_ids'] = executorIds;
    }
    public get executorIds(): Array<string> | undefined {
        return this['executor_ids'];
    }
    public withTestTypes(testTypes: Array<string>): TestCasesQueryInfo {
        this['test_types'] = testTypes;
        return this;
    }
    public set testTypes(testTypes: Array<string>  | undefined) {
        this['test_types'] = testTypes;
    }
    public get testTypes(): Array<string> | undefined {
        return this['test_types'];
    }
    public withIsKeyword(isKeyword: boolean): TestCasesQueryInfo {
        this['is_keyword'] = isKeyword;
        return this;
    }
    public set isKeyword(isKeyword: boolean  | undefined) {
        this['is_keyword'] = isKeyword;
    }
    public get isKeyword(): boolean | undefined {
        return this['is_keyword'];
    }
    public withIssueTreeSearch(issueTreeSearch: boolean): TestCasesQueryInfo {
        this['issue_tree_search'] = issueTreeSearch;
        return this;
    }
    public set issueTreeSearch(issueTreeSearch: boolean  | undefined) {
        this['issue_tree_search'] = issueTreeSearch;
    }
    public get issueTreeSearch(): boolean | undefined {
        return this['issue_tree_search'];
    }
    public withServiceType(serviceType: number): TestCasesQueryInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withServiceTypes(serviceTypes: Array<number>): TestCasesQueryInfo {
        this['service_types'] = serviceTypes;
        return this;
    }
    public set serviceTypes(serviceTypes: Array<number>  | undefined) {
        this['service_types'] = serviceTypes;
    }
    public get serviceTypes(): Array<number> | undefined {
        return this['service_types'];
    }
    public withStageType(stageType: number): TestCasesQueryInfo {
        this['stage_type'] = stageType;
        return this;
    }
    public set stageType(stageType: number  | undefined) {
        this['stage_type'] = stageType;
    }
    public get stageType(): number | undefined {
        return this['stage_type'];
    }
    public withFeatureUri(featureUri: string): TestCasesQueryInfo {
        this['feature_uri'] = featureUri;
        return this;
    }
    public set featureUri(featureUri: string  | undefined) {
        this['feature_uri'] = featureUri;
    }
    public get featureUri(): string | undefined {
        return this['feature_uri'];
    }
    public withSortField(sortField: string): TestCasesQueryInfo {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): TestCasesQueryInfo {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withPageNo(pageNo: number): TestCasesQueryInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): TestCasesQueryInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withCaseType(caseType: number): TestCasesQueryInfo {
        this['case_type'] = caseType;
        return this;
    }
    public set caseType(caseType: number  | undefined) {
        this['case_type'] = caseType;
    }
    public get caseType(): number | undefined {
        return this['case_type'];
    }
    public withCustomFieldInfo(customFieldInfo: Array<QueryCustomFieldsInfo>): TestCasesQueryInfo {
        this['custom_field_info'] = customFieldInfo;
        return this;
    }
    public set customFieldInfo(customFieldInfo: Array<QueryCustomFieldsInfo>  | undefined) {
        this['custom_field_info'] = customFieldInfo;
    }
    public get customFieldInfo(): Array<QueryCustomFieldsInfo> | undefined {
        return this['custom_field_info'];
    }
    public withTaskUri(taskUri: string): TestCasesQueryInfo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withAssociateIssueDetail(associateIssueDetail: boolean): TestCasesQueryInfo {
        this['associate_issue_detail'] = associateIssueDetail;
        return this;
    }
    public set associateIssueDetail(associateIssueDetail: boolean  | undefined) {
        this['associate_issue_detail'] = associateIssueDetail;
    }
    public get associateIssueDetail(): boolean | undefined {
        return this['associate_issue_detail'];
    }
    public withNotAssignTask(notAssignTask: boolean): TestCasesQueryInfo {
        this['not_assign_task'] = notAssignTask;
        return this;
    }
    public set notAssignTask(notAssignTask: boolean  | undefined) {
        this['not_assign_task'] = notAssignTask;
    }
    public get notAssignTask(): boolean | undefined {
        return this['not_assign_task'];
    }
    public withTestDesigns(testDesigns: Array<boolean>): TestCasesQueryInfo {
        this['test_designs'] = testDesigns;
        return this;
    }
    public set testDesigns(testDesigns: Array<boolean>  | undefined) {
        this['test_designs'] = testDesigns;
    }
    public get testDesigns(): Array<boolean> | undefined {
        return this['test_designs'];
    }
    public withReviewStatus(reviewStatus: number): TestCasesQueryInfo {
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