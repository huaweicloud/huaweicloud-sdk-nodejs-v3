import { ListJobResultJobList } from './ListJobResultJobList';


export class ListJobResult {
    public total?: number;
    private 'job_list'?: Array<ListJobResultJobList>;
    public constructor() { 
    }
    public withTotal(total: number): ListJobResult {
        this['total'] = total;
        return this;
    }
    public withJobList(jobList: Array<ListJobResultJobList>): ListJobResult {
        this['job_list'] = jobList;
        return this;
    }
    public set jobList(jobList: Array<ListJobResultJobList>  | undefined) {
        this['job_list'] = jobList;
    }
    public get jobList(): Array<ListJobResultJobList> | undefined {
        return this['job_list'];
    }
}