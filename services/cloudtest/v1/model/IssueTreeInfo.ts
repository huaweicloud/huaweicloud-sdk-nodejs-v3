import { IssueListPiFilterInfo } from './IssueListPiFilterInfo';


export class IssueTreeInfo {
    public owner?: string;
    private 'issue_id'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'key_word'?: string;
    private 'iteration_id'?: string;
    private 'severity_id'?: string;
    private 'status_id'?: string;
    private 'module_id'?: string;
    private 'status_ids'?: string;
    private 'module_ids'?: string;
    private 'pi_filter'?: Array<IssueListPiFilterInfo>;
    private 'status_names'?: Array<string>;
    public constructor() { 
    }
    public withOwner(owner: string): IssueTreeInfo {
        this['owner'] = owner;
        return this;
    }
    public withIssueId(issueId: string): IssueTreeInfo {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withPageNo(pageNo: number): IssueTreeInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): IssueTreeInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withKeyWord(keyWord: string): IssueTreeInfo {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withIterationId(iterationId: string): IssueTreeInfo {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: string  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): string | undefined {
        return this['iteration_id'];
    }
    public withSeverityId(severityId: string): IssueTreeInfo {
        this['severity_id'] = severityId;
        return this;
    }
    public set severityId(severityId: string  | undefined) {
        this['severity_id'] = severityId;
    }
    public get severityId(): string | undefined {
        return this['severity_id'];
    }
    public withStatusId(statusId: string): IssueTreeInfo {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
    public withModuleId(moduleId: string): IssueTreeInfo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withStatusIds(statusIds: string): IssueTreeInfo {
        this['status_ids'] = statusIds;
        return this;
    }
    public set statusIds(statusIds: string  | undefined) {
        this['status_ids'] = statusIds;
    }
    public get statusIds(): string | undefined {
        return this['status_ids'];
    }
    public withModuleIds(moduleIds: string): IssueTreeInfo {
        this['module_ids'] = moduleIds;
        return this;
    }
    public set moduleIds(moduleIds: string  | undefined) {
        this['module_ids'] = moduleIds;
    }
    public get moduleIds(): string | undefined {
        return this['module_ids'];
    }
    public withPiFilter(piFilter: Array<IssueListPiFilterInfo>): IssueTreeInfo {
        this['pi_filter'] = piFilter;
        return this;
    }
    public set piFilter(piFilter: Array<IssueListPiFilterInfo>  | undefined) {
        this['pi_filter'] = piFilter;
    }
    public get piFilter(): Array<IssueListPiFilterInfo> | undefined {
        return this['pi_filter'];
    }
    public withStatusNames(statusNames: Array<string>): IssueTreeInfo {
        this['status_names'] = statusNames;
        return this;
    }
    public set statusNames(statusNames: Array<string>  | undefined) {
        this['status_names'] = statusNames;
    }
    public get statusNames(): Array<string> | undefined {
        return this['status_names'];
    }
}