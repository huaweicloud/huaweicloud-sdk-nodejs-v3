import { UpdatePreBootPolicyReq } from './UpdatePreBootPolicyReq';


export class UpdatePreBootPolicyRequest {
    private 'app_group_id'?: string;
    public body?: UpdatePreBootPolicyReq;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withAppGroupId(appGroupId: string): UpdatePreBootPolicyRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withBody(body: UpdatePreBootPolicyReq): UpdatePreBootPolicyRequest {
        this['body'] = body;
        return this;
    }
}