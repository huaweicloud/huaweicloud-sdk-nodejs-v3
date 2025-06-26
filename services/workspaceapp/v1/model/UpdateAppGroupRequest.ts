import { UpdateAppGroupReq } from './UpdateAppGroupReq';


export class UpdateAppGroupRequest {
    private 'app_group_id'?: string;
    public body?: UpdateAppGroupReq;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): UpdateAppGroupRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withBody(body: UpdateAppGroupReq): UpdateAppGroupRequest {
        this['body'] = body;
        return this;
    }
}