import { JobScriptOrderInfoProp } from './JobScriptOrderInfoProp';


export class JobScriptOrderInfoModel {
    private 'execute_uuid'?: string;
    private 'gmt_created'?: number;
    private 'gmt_finished'?: number;
    private 'execute_costs'?: number;
    public creator?: string;
    public status?: JobScriptOrderInfoModelStatusEnum | string;
    public properties?: JobScriptOrderInfoProp;
    public constructor() { 
    }
    public withExecuteUuid(executeUuid: string): JobScriptOrderInfoModel {
        this['execute_uuid'] = executeUuid;
        return this;
    }
    public set executeUuid(executeUuid: string  | undefined) {
        this['execute_uuid'] = executeUuid;
    }
    public get executeUuid(): string | undefined {
        return this['execute_uuid'];
    }
    public withGmtCreated(gmtCreated: number): JobScriptOrderInfoModel {
        this['gmt_created'] = gmtCreated;
        return this;
    }
    public set gmtCreated(gmtCreated: number  | undefined) {
        this['gmt_created'] = gmtCreated;
    }
    public get gmtCreated(): number | undefined {
        return this['gmt_created'];
    }
    public withGmtFinished(gmtFinished: number): JobScriptOrderInfoModel {
        this['gmt_finished'] = gmtFinished;
        return this;
    }
    public set gmtFinished(gmtFinished: number  | undefined) {
        this['gmt_finished'] = gmtFinished;
    }
    public get gmtFinished(): number | undefined {
        return this['gmt_finished'];
    }
    public withExecuteCosts(executeCosts: number): JobScriptOrderInfoModel {
        this['execute_costs'] = executeCosts;
        return this;
    }
    public set executeCosts(executeCosts: number  | undefined) {
        this['execute_costs'] = executeCosts;
    }
    public get executeCosts(): number | undefined {
        return this['execute_costs'];
    }
    public withCreator(creator: string): JobScriptOrderInfoModel {
        this['creator'] = creator;
        return this;
    }
    public withStatus(status: JobScriptOrderInfoModelStatusEnum | string): JobScriptOrderInfoModel {
        this['status'] = status;
        return this;
    }
    public withProperties(properties: JobScriptOrderInfoProp): JobScriptOrderInfoModel {
        this['properties'] = properties;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobScriptOrderInfoModelStatusEnum {
    READY = 'READY',
    PROCESSING = 'PROCESSING',
    ABNORMAL = 'ABNORMAL',
    PAUSED = 'PAUSED',
    CANCELED = 'CANCELED',
    FINISHED = 'FINISHED'
}
