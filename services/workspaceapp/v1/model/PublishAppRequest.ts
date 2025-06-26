import { PublishAppReq } from './PublishAppReq';


export class PublishAppRequest {
    private 'app_group_id'?: string;
    public body?: PublishAppReq;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): PublishAppRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withBody(body: PublishAppReq): PublishAppRequest {
        this['body'] = body;
        return this;
    }
}