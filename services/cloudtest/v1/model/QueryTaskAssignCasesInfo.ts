

export class QueryTaskAssignCasesInfo {
    public stage?: number;
    public owners?: Array<string>;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public results?: Array<string>;
    public status?: Array<string>;
    private 'version_uri'?: string;
    private 'release_dev'?: string;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    private 'feature_uri'?: string;
    private 'task_result_uri'?: string;
    private 'rank_ids'?: Array<number>;
    private 'key_word'?: string;
    private 'issue_id'?: string;
    private 'associated_issue'?: boolean;
    private 'select_all_pages'?: boolean;
    private 'is_available'?: boolean;
    private 'is_script_exist'?: boolean;
    public constructor() { 
    }
    public withStage(stage: number): QueryTaskAssignCasesInfo {
        this['stage'] = stage;
        return this;
    }
    public withOwners(owners: Array<string>): QueryTaskAssignCasesInfo {
        this['owners'] = owners;
        return this;
    }
    public withPageNo(pageNo: number): QueryTaskAssignCasesInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): QueryTaskAssignCasesInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withResults(results: Array<string>): QueryTaskAssignCasesInfo {
        this['results'] = results;
        return this;
    }
    public withStatus(status: Array<string>): QueryTaskAssignCasesInfo {
        this['status'] = status;
        return this;
    }
    public withVersionUri(versionUri: string): QueryTaskAssignCasesInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withReleaseDev(releaseDev: string): QueryTaskAssignCasesInfo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withSortField(sortField: string): QueryTaskAssignCasesInfo {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): QueryTaskAssignCasesInfo {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withFeatureUri(featureUri: string): QueryTaskAssignCasesInfo {
        this['feature_uri'] = featureUri;
        return this;
    }
    public set featureUri(featureUri: string  | undefined) {
        this['feature_uri'] = featureUri;
    }
    public get featureUri(): string | undefined {
        return this['feature_uri'];
    }
    public withTaskResultUri(taskResultUri: string): QueryTaskAssignCasesInfo {
        this['task_result_uri'] = taskResultUri;
        return this;
    }
    public set taskResultUri(taskResultUri: string  | undefined) {
        this['task_result_uri'] = taskResultUri;
    }
    public get taskResultUri(): string | undefined {
        return this['task_result_uri'];
    }
    public withRankIds(rankIds: Array<number>): QueryTaskAssignCasesInfo {
        this['rank_ids'] = rankIds;
        return this;
    }
    public set rankIds(rankIds: Array<number>  | undefined) {
        this['rank_ids'] = rankIds;
    }
    public get rankIds(): Array<number> | undefined {
        return this['rank_ids'];
    }
    public withKeyWord(keyWord: string): QueryTaskAssignCasesInfo {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withIssueId(issueId: string): QueryTaskAssignCasesInfo {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withAssociatedIssue(associatedIssue: boolean): QueryTaskAssignCasesInfo {
        this['associated_issue'] = associatedIssue;
        return this;
    }
    public set associatedIssue(associatedIssue: boolean  | undefined) {
        this['associated_issue'] = associatedIssue;
    }
    public get associatedIssue(): boolean | undefined {
        return this['associated_issue'];
    }
    public withSelectAllPages(selectAllPages: boolean): QueryTaskAssignCasesInfo {
        this['select_all_pages'] = selectAllPages;
        return this;
    }
    public set selectAllPages(selectAllPages: boolean  | undefined) {
        this['select_all_pages'] = selectAllPages;
    }
    public get selectAllPages(): boolean | undefined {
        return this['select_all_pages'];
    }
    public withIsAvailable(isAvailable: boolean): QueryTaskAssignCasesInfo {
        this['is_available'] = isAvailable;
        return this;
    }
    public set isAvailable(isAvailable: boolean  | undefined) {
        this['is_available'] = isAvailable;
    }
    public get isAvailable(): boolean | undefined {
        return this['is_available'];
    }
    public withIsScriptExist(isScriptExist: boolean): QueryTaskAssignCasesInfo {
        this['is_script_exist'] = isScriptExist;
        return this;
    }
    public set isScriptExist(isScriptExist: boolean  | undefined) {
        this['is_script_exist'] = isScriptExist;
    }
    public get isScriptExist(): boolean | undefined {
        return this['is_script_exist'];
    }
}