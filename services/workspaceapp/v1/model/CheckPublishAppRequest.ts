import { CheckPublishAppReq } from './CheckPublishAppReq';


export class CheckPublishAppRequest {
    private 'app_group_id'?: string;
    public body?: CheckPublishAppReq;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): CheckPublishAppRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withBody(body: CheckPublishAppReq): CheckPublishAppRequest {
        this['body'] = body;
        return this;
    }
}