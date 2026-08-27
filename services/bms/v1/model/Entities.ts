import { SubJobs } from './SubJobs';


export class Entities {
    private 'server_id'?: string;
    private 'nic_id'?: string;
    private 'sub_jobs_total'?: number;
    private 'sub_jobs'?: Array<SubJobs>;
    public constructor() { 
    }
    public withServerId(serverId: string): Entities {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNicId(nicId: string): Entities {
        this['nic_id'] = nicId;
        return this;
    }
    public set nicId(nicId: string  | undefined) {
        this['nic_id'] = nicId;
    }
    public get nicId(): string | undefined {
        return this['nic_id'];
    }
    public withSubJobsTotal(subJobsTotal: number): Entities {
        this['sub_jobs_total'] = subJobsTotal;
        return this;
    }
    public set subJobsTotal(subJobsTotal: number  | undefined) {
        this['sub_jobs_total'] = subJobsTotal;
    }
    public get subJobsTotal(): number | undefined {
        return this['sub_jobs_total'];
    }
    public withSubJobs(subJobs: Array<SubJobs>): Entities {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<SubJobs>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<SubJobs> | undefined {
        return this['sub_jobs'];
    }
}