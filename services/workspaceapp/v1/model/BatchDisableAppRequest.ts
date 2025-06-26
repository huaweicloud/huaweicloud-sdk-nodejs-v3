import { BatchUpdateAppReq } from './BatchUpdateAppReq';


export class BatchDisableAppRequest {
    private 'app_group_id'?: string;
    public body?: BatchUpdateAppReq;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): BatchDisableAppRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withBody(body: BatchUpdateAppReq): BatchDisableAppRequest {
        this['body'] = body;
        return this;
    }
}