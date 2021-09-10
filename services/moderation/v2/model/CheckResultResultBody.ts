import { CheckResultItemsBody } from './CheckResultItemsBody';


export class CheckResultResultBody {
    private 'job_id'?: string | undefined;
    public status?: string;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public items?: Array<CheckResultItemsBody>;
    public constructor() { 
    }
    public withJobId(jobId: string): CheckResultResultBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withStatus(status: string): CheckResultResultBody {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CheckResultResultBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CheckResultResultBody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withItems(items: Array<CheckResultItemsBody>): CheckResultResultBody {
        this['items'] = items;
        return this;
    }
}