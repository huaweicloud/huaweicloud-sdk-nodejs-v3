import { GetJobEntitiesInfoDetail } from './GetJobEntitiesInfoDetail';
import { GetJobInstanceInfoDetail } from './GetJobInstanceInfoDetail';


export class GetJobInfoDetail {
    public id?: string;
    public name?: string;
    public status?: GetJobInfoDetailStatusEnum | string;
    public created?: string;
    public ended?: string;
    public process?: string;
    public instance?: GetJobInstanceInfoDetail;
    public entities?: GetJobEntitiesInfoDetail;
    private 'fail_reason'?: string;
    public constructor(id?: string, name?: string, status?: string, created?: string, instance?: GetJobInstanceInfoDetail) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['created'] = created;
        this['instance'] = instance;
    }
    public withId(id: string): GetJobInfoDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetJobInfoDetail {
        this['name'] = name;
        return this;
    }
    public withStatus(status: GetJobInfoDetailStatusEnum | string): GetJobInfoDetail {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): GetJobInfoDetail {
        this['created'] = created;
        return this;
    }
    public withEnded(ended: string): GetJobInfoDetail {
        this['ended'] = ended;
        return this;
    }
    public withProcess(process: string): GetJobInfoDetail {
        this['process'] = process;
        return this;
    }
    public withInstance(instance: GetJobInstanceInfoDetail): GetJobInfoDetail {
        this['instance'] = instance;
        return this;
    }
    public withEntities(entities: GetJobEntitiesInfoDetail): GetJobInfoDetail {
        this['entities'] = entities;
        return this;
    }
    public withFailReason(failReason: string): GetJobInfoDetail {
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
export enum GetJobInfoDetailStatusEnum {
    PENDING = 'Pending',
    RUNNING = 'Running',
    COMPLETED = 'Completed',
    FAILED = 'Failed'
}
