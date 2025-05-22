import { BuildInfoRecord } from './BuildInfoRecord';


export class ListBuildInfoRecordBodyResult {
    private 'health_score'?: string;
    private 'page_index'?: string;
    private 'total_page'?: string;
    private 'total_record'?: string;
    private 'job_build_states'?: Array<BuildInfoRecord>;
    public constructor() { 
    }
    public withHealthScore(healthScore: string): ListBuildInfoRecordBodyResult {
        this['health_score'] = healthScore;
        return this;
    }
    public set healthScore(healthScore: string  | undefined) {
        this['health_score'] = healthScore;
    }
    public get healthScore(): string | undefined {
        return this['health_score'];
    }
    public withPageIndex(pageIndex: string): ListBuildInfoRecordBodyResult {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: string  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): string | undefined {
        return this['page_index'];
    }
    public withTotalPage(totalPage: string): ListBuildInfoRecordBodyResult {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: string  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): string | undefined {
        return this['total_page'];
    }
    public withTotalRecord(totalRecord: string): ListBuildInfoRecordBodyResult {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: string  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): string | undefined {
        return this['total_record'];
    }
    public withJobBuildStates(jobBuildStates: Array<BuildInfoRecord>): ListBuildInfoRecordBodyResult {
        this['job_build_states'] = jobBuildStates;
        return this;
    }
    public set jobBuildStates(jobBuildStates: Array<BuildInfoRecord>  | undefined) {
        this['job_build_states'] = jobBuildStates;
    }
    public get jobBuildStates(): Array<BuildInfoRecord> | undefined {
        return this['job_build_states'];
    }
}