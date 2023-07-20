import { GetTaskDetailListRspJobsInstance } from './GetTaskDetailListRspJobsInstance';


export class GetJobInfoResponseBodyJob {
    public id?: string;
    public name?: string;
    public status?: GetJobInfoResponseBodyJobStatusEnum | string;
    public created?: string;
    public ended?: string;
    public process?: string;
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
    public withId(id: string): GetJobInfoResponseBodyJob {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetJobInfoResponseBodyJob {
        this['name'] = name;
        return this;
    }
    public withStatus(status: GetJobInfoResponseBodyJobStatusEnum | string): GetJobInfoResponseBodyJob {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): GetJobInfoResponseBodyJob {
        this['created'] = created;
        return this;
    }
    public withEnded(ended: string): GetJobInfoResponseBodyJob {
        this['ended'] = ended;
        return this;
    }
    public withProcess(process: string): GetJobInfoResponseBodyJob {
        this['process'] = process;
        return this;
    }
    public withInstance(instance: GetTaskDetailListRspJobsInstance): GetJobInfoResponseBodyJob {
        this['instance'] = instance;
        return this;
    }
    public withEntities(entities: object): GetJobInfoResponseBodyJob {
        this['entities'] = entities;
        return this;
    }
    public withFailReason(failReason: string): GetJobInfoResponseBodyJob {
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
export enum GetJobInfoResponseBodyJobStatusEnum {
    RUNNING = 'Running',
    COMPLETED = 'Completed',
    FAILED = 'Failed'
}
