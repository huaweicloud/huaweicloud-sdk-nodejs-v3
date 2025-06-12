import { JobUpdateRecordListVoResultJobUpdateRecords } from './JobUpdateRecordListVoResultJobUpdateRecords';


export class JobUpdateRecordListVoResult {
    private 'job_update_records'?: Array<JobUpdateRecordListVoResultJobUpdateRecords>;
    public total?: number;
    public constructor() { 
    }
    public withJobUpdateRecords(jobUpdateRecords: Array<JobUpdateRecordListVoResultJobUpdateRecords>): JobUpdateRecordListVoResult {
        this['job_update_records'] = jobUpdateRecords;
        return this;
    }
    public set jobUpdateRecords(jobUpdateRecords: Array<JobUpdateRecordListVoResultJobUpdateRecords>  | undefined) {
        this['job_update_records'] = jobUpdateRecords;
    }
    public get jobUpdateRecords(): Array<JobUpdateRecordListVoResultJobUpdateRecords> | undefined {
        return this['job_update_records'];
    }
    public withTotal(total: number): JobUpdateRecordListVoResult {
        this['total'] = total;
        return this;
    }
}