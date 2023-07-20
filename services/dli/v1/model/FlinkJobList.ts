import { FlinkJobInfo } from './FlinkJobInfo';


export class FlinkJobList {
    private 'total_count'?: number;
    public jobs?: Array<FlinkJobInfo>;
    public constructor() { 
    }
    public withTotalCount(totalCount: number): FlinkJobList {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withJobs(jobs: Array<FlinkJobInfo>): FlinkJobList {
        this['jobs'] = jobs;
        return this;
    }
}