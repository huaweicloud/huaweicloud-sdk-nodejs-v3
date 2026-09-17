

export class TestCasesListQueryInfo {
    private 'version_uri'?: string;
    private 'case_uris'?: Array<string>;
    private 'owner_ids'?: Array<string>;
    private 'status_codes'?: Array<string>;
    private 'rank_ids'?: Array<string>;
    private 'module_ids'?: Array<string>;
    public keyword?: string;
    public name?: string;
    private 'number'?: string;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'service_type'?: number;
    private 'stage_type'?: number;
    private 'feature_uri'?: string;
    public constructor() { 
    }
    public withVersionUri(versionUri: string): TestCasesListQueryInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withCaseUris(caseUris: Array<string>): TestCasesListQueryInfo {
        this['case_uris'] = caseUris;
        return this;
    }
    public set caseUris(caseUris: Array<string>  | undefined) {
        this['case_uris'] = caseUris;
    }
    public get caseUris(): Array<string> | undefined {
        return this['case_uris'];
    }
    public withOwnerIds(ownerIds: Array<string>): TestCasesListQueryInfo {
        this['owner_ids'] = ownerIds;
        return this;
    }
    public set ownerIds(ownerIds: Array<string>  | undefined) {
        this['owner_ids'] = ownerIds;
    }
    public get ownerIds(): Array<string> | undefined {
        return this['owner_ids'];
    }
    public withStatusCodes(statusCodes: Array<string>): TestCasesListQueryInfo {
        this['status_codes'] = statusCodes;
        return this;
    }
    public set statusCodes(statusCodes: Array<string>  | undefined) {
        this['status_codes'] = statusCodes;
    }
    public get statusCodes(): Array<string> | undefined {
        return this['status_codes'];
    }
    public withRankIds(rankIds: Array<string>): TestCasesListQueryInfo {
        this['rank_ids'] = rankIds;
        return this;
    }
    public set rankIds(rankIds: Array<string>  | undefined) {
        this['rank_ids'] = rankIds;
    }
    public get rankIds(): Array<string> | undefined {
        return this['rank_ids'];
    }
    public withModuleIds(moduleIds: Array<string>): TestCasesListQueryInfo {
        this['module_ids'] = moduleIds;
        return this;
    }
    public set moduleIds(moduleIds: Array<string>  | undefined) {
        this['module_ids'] = moduleIds;
    }
    public get moduleIds(): Array<string> | undefined {
        return this['module_ids'];
    }
    public withKeyword(keyword: string): TestCasesListQueryInfo {
        this['keyword'] = keyword;
        return this;
    }
    public withName(name: string): TestCasesListQueryInfo {
        this['name'] = name;
        return this;
    }
    public withModelNumber(modelNumber: string): TestCasesListQueryInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withSortField(sortField: string): TestCasesListQueryInfo {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): TestCasesListQueryInfo {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withPageNo(pageNo: number): TestCasesListQueryInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): TestCasesListQueryInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withServiceType(serviceType: number): TestCasesListQueryInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withStageType(stageType: number): TestCasesListQueryInfo {
        this['stage_type'] = stageType;
        return this;
    }
    public set stageType(stageType: number  | undefined) {
        this['stage_type'] = stageType;
    }
    public get stageType(): number | undefined {
        return this['stage_type'];
    }
    public withFeatureUri(featureUri: string): TestCasesListQueryInfo {
        this['feature_uri'] = featureUri;
        return this;
    }
    public set featureUri(featureUri: string  | undefined) {
        this['feature_uri'] = featureUri;
    }
    public get featureUri(): string | undefined {
        return this['feature_uri'];
    }
}