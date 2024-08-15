import { JobScriptOrderListProp } from './JobScriptOrderListProp';


export class JobScriptOrderListModel {
    private 'order_id'?: number;
    private 'order_name'?: string;
    private 'execute_uuid'?: string;
    private 'gmt_created'?: number;
    private 'gmt_finished'?: number;
    private 'execute_costs'?: number;
    public creator?: string;
    public status?: JobScriptOrderListModelStatusEnum | string;
    public properties?: JobScriptOrderListProp;
    public constructor(orderId?: number, orderName?: string, executeUuid?: string) { 
        this['order_id'] = orderId;
        this['order_name'] = orderName;
        this['execute_uuid'] = executeUuid;
    }
    public withOrderId(orderId: number): JobScriptOrderListModel {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: number  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): number | undefined {
        return this['order_id'];
    }
    public withOrderName(orderName: string): JobScriptOrderListModel {
        this['order_name'] = orderName;
        return this;
    }
    public set orderName(orderName: string  | undefined) {
        this['order_name'] = orderName;
    }
    public get orderName(): string | undefined {
        return this['order_name'];
    }
    public withExecuteUuid(executeUuid: string): JobScriptOrderListModel {
        this['execute_uuid'] = executeUuid;
        return this;
    }
    public set executeUuid(executeUuid: string  | undefined) {
        this['execute_uuid'] = executeUuid;
    }
    public get executeUuid(): string | undefined {
        return this['execute_uuid'];
    }
    public withGmtCreated(gmtCreated: number): JobScriptOrderListModel {
        this['gmt_created'] = gmtCreated;
        return this;
    }
    public set gmtCreated(gmtCreated: number  | undefined) {
        this['gmt_created'] = gmtCreated;
    }
    public get gmtCreated(): number | undefined {
        return this['gmt_created'];
    }
    public withGmtFinished(gmtFinished: number): JobScriptOrderListModel {
        this['gmt_finished'] = gmtFinished;
        return this;
    }
    public set gmtFinished(gmtFinished: number  | undefined) {
        this['gmt_finished'] = gmtFinished;
    }
    public get gmtFinished(): number | undefined {
        return this['gmt_finished'];
    }
    public withExecuteCosts(executeCosts: number): JobScriptOrderListModel {
        this['execute_costs'] = executeCosts;
        return this;
    }
    public set executeCosts(executeCosts: number  | undefined) {
        this['execute_costs'] = executeCosts;
    }
    public get executeCosts(): number | undefined {
        return this['execute_costs'];
    }
    public withCreator(creator: string): JobScriptOrderListModel {
        this['creator'] = creator;
        return this;
    }
    public withStatus(status: JobScriptOrderListModelStatusEnum | string): JobScriptOrderListModel {
        this['status'] = status;
        return this;
    }
    public withProperties(properties: JobScriptOrderListProp): JobScriptOrderListModel {
        this['properties'] = properties;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobScriptOrderListModelStatusEnum {
    READY = 'READY',
    PROCESSING = 'PROCESSING',
    ABNORMAL = 'ABNORMAL',
    PAUSED = 'PAUSED',
    CANCELED = 'CANCELED',
    FINISHED = 'FINISHED'
}
