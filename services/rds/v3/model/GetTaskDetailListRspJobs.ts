import { GetTaskDetailListRspJobsInstance } from './GetTaskDetailListRspJobsInstance';


export class GetTaskDetailListRspJobs {
    public id?: string;
    public name?: string;
    public status?: GetTaskDetailListRspJobsStatusEnum | string;
    public created?: string;
    public ended?: string;
    public process?: string;
    private 'task_detail'?: string;
    public instance?: GetTaskDetailListRspJobsInstance;
    public entities?: object;
    private 'fail_reason'?: string;
    public constructor(id?: string, name?: string, status?: string, created?: string, instance?: GetTaskDetailListRspJobsInstance) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['created'] = created;
        this['instance'] = instance;
    }
    public withId(id: string): GetTaskDetailListRspJobs {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetTaskDetailListRspJobs {
        this['name'] = name;
        return this;
    }
    public withStatus(status: GetTaskDetailListRspJobsStatusEnum | string): GetTaskDetailListRspJobs {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): GetTaskDetailListRspJobs {
        this['created'] = created;
        return this;
    }
    public withEnded(ended: string): GetTaskDetailListRspJobs {
        this['ended'] = ended;
        return this;
    }
    public withProcess(process: string): GetTaskDetailListRspJobs {
        this['process'] = process;
        return this;
    }
    public withTaskDetail(taskDetail: string): GetTaskDetailListRspJobs {
        this['task_detail'] = taskDetail;
        return this;
    }
    public set taskDetail(taskDetail: string  | undefined) {
        this['task_detail'] = taskDetail;
    }
    public get taskDetail(): string | undefined {
        return this['task_detail'];
    }
    public withInstance(instance: GetTaskDetailListRspJobsInstance): GetTaskDetailListRspJobs {
        this['instance'] = instance;
        return this;
    }
    public withEntities(entities: object): GetTaskDetailListRspJobs {
        this['entities'] = entities;
        return this;
    }
    public withFailReason(failReason: string): GetTaskDetailListRspJobs {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetTaskDetailListRspJobsStatusEnum {
    RUNNING = 'Running',
    COMPLETED = 'Completed',
    FAILED = 'Failed'
}
