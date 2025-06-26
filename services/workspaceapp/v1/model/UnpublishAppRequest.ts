import { UnpublishAppReq } from './UnpublishAppReq';


export class UnpublishAppRequest {
    private 'app_group_id'?: string;
    public body?: UnpublishAppReq;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): UnpublishAppRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withBody(body: UnpublishAppReq): UnpublishAppRequest {
        this['body'] = body;
        return this;
    }
}