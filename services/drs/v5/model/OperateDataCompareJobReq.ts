

export class OperateDataCompareJobReq {
    private 'compare_job_ids'?: Array<string>;
    public constructor(compareJobIds?: Array<string>) { 
        this['compare_job_ids'] = compareJobIds;
    }
    public withCompareJobIds(compareJobIds: Array<string>): OperateDataCompareJobReq {
        this['compare_job_ids'] = compareJobIds;
        return this;
    }
    public set compareJobIds(compareJobIds: Array<string>  | undefined) {
        this['compare_job_ids'] = compareJobIds;
    }
    public get compareJobIds(): Array<string> | undefined {
        return this['compare_job_ids'];
    }
}