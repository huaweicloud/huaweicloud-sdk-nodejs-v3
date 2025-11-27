import { OperateUsedJobSchedule } from './OperateUsedJobSchedule';


export class BatchModifyPublicationsRequestBody {
    private 'publication_ids'?: Array<string>;
    private 'job_schedule'?: OperateUsedJobSchedule;
    public constructor(publicationIds?: Array<string>, jobSchedule?: OperateUsedJobSchedule) { 
        this['publication_ids'] = publicationIds;
        this['job_schedule'] = jobSchedule;
    }
    public withPublicationIds(publicationIds: Array<string>): BatchModifyPublicationsRequestBody {
        this['publication_ids'] = publicationIds;
        return this;
    }
    public set publicationIds(publicationIds: Array<string>  | undefined) {
        this['publication_ids'] = publicationIds;
    }
    public get publicationIds(): Array<string> | undefined {
        return this['publication_ids'];
    }
    public withJobSchedule(jobSchedule: OperateUsedJobSchedule): BatchModifyPublicationsRequestBody {
        this['job_schedule'] = jobSchedule;
        return this;
    }
    public set jobSchedule(jobSchedule: OperateUsedJobSchedule  | undefined) {
        this['job_schedule'] = jobSchedule;
    }
    public get jobSchedule(): OperateUsedJobSchedule | undefined {
        return this['job_schedule'];
    }
}