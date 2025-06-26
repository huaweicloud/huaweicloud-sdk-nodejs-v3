import { BatchUpdateAppReq } from './BatchUpdateAppReq';


export class BatchEnableAppRequest {
    private 'app_group_id'?: string;
    public body?: BatchUpdateAppReq;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): BatchEnableAppRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withBody(body: BatchUpdateAppReq): BatchEnableAppRequest {
        this['body'] = body;
        return this;
    }
}