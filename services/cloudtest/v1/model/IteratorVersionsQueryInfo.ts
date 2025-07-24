import { IteratorListFilterInfo } from './IteratorListFilterInfo';


export class IteratorVersionsQueryInfo {
    public name?: string;
    public filter?: IteratorListFilterInfo;
    public own?: boolean;
    private 'branch_uri'?: string;
    private 'iterator_uri'?: string;
    private 'owner_ids'?: Array<string>;
    private 'project_uuid'?: string;
    private 'current_stage'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(projectUuid?: string) { 
        this['project_uuid'] = projectUuid;
    }
    public withName(name: string): IteratorVersionsQueryInfo {
        this['name'] = name;
        return this;
    }
    public withFilter(filter: IteratorListFilterInfo): IteratorVersionsQueryInfo {
        this['filter'] = filter;
        return this;
    }
    public withOwn(own: boolean): IteratorVersionsQueryInfo {
        this['own'] = own;
        return this;
    }
    public withBranchUri(branchUri: string): IteratorVersionsQueryInfo {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withIteratorUri(iteratorUri: string): IteratorVersionsQueryInfo {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withOwnerIds(ownerIds: Array<string>): IteratorVersionsQueryInfo {
        this['owner_ids'] = ownerIds;
        return this;
    }
    public set ownerIds(ownerIds: Array<string>  | undefined) {
        this['owner_ids'] = ownerIds;
    }
    public get ownerIds(): Array<string> | undefined {
        return this['owner_ids'];
    }
    public withProjectUuid(projectUuid: string): IteratorVersionsQueryInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withCurrentStage(currentStage: string): IteratorVersionsQueryInfo {
        this['current_stage'] = currentStage;
        return this;
    }
    public set currentStage(currentStage: string  | undefined) {
        this['current_stage'] = currentStage;
    }
    public get currentStage(): string | undefined {
        return this['current_stage'];
    }
    public withPageNo(pageNo: number): IteratorVersionsQueryInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): IteratorVersionsQueryInfo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}