import { ResourceInstance } from './ResourceInstance';


export class ExectionInstanceModel {
    public id?: number;
    private 'target_instance'?: ResourceInstance;
    private 'gmt_created'?: number;
    private 'gmt_finished'?: number;
    private 'execute_costs'?: number;
    public status?: ExectionInstanceModelStatusEnum | string;
    public message?: string;
    public constructor() { 
    }
    public withId(id: number): ExectionInstanceModel {
        this['id'] = id;
        return this;
    }
    public withTargetInstance(targetInstance: ResourceInstance): ExectionInstanceModel {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: ResourceInstance  | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance(): ResourceInstance | undefined {
        return this['target_instance'];
    }
    public withGmtCreated(gmtCreated: number): ExectionInstanceModel {
        this['gmt_created'] = gmtCreated;
        return this;
    }
    public set gmtCreated(gmtCreated: number  | undefined) {
        this['gmt_created'] = gmtCreated;
    }
    public get gmtCreated(): number | undefined {
        return this['gmt_created'];
    }
    public withGmtFinished(gmtFinished: number): ExectionInstanceModel {
        this['gmt_finished'] = gmtFinished;
        return this;
    }
    public set gmtFinished(gmtFinished: number  | undefined) {
        this['gmt_finished'] = gmtFinished;
    }
    public get gmtFinished(): number | undefined {
        return this['gmt_finished'];
    }
    public withExecuteCosts(executeCosts: number): ExectionInstanceModel {
        this['execute_costs'] = executeCosts;
        return this;
    }
    public set executeCosts(executeCosts: number  | undefined) {
        this['execute_costs'] = executeCosts;
    }
    public get executeCosts(): number | undefined {
        return this['execute_costs'];
    }
    public withStatus(status: ExectionInstanceModelStatusEnum | string): ExectionInstanceModel {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ExectionInstanceModel {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExectionInstanceModelStatusEnum {
    READY = 'READY',
    PROCESSING = 'PROCESSING',
    ABNORMAL = 'ABNORMAL',
    CANCELED = 'CANCELED',
    FINISHED = 'FINISHED',
    ROLLBACKED = 'ROLLBACKED'
}
