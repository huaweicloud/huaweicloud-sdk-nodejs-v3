import { AsyncAssociateRGAndTemplatesReq } from './AsyncAssociateRGAndTemplatesReq';


export class UpdateResourceGroupAssociationAlarmTemplateRequest {
    private 'group_id'?: string;
    public body?: AsyncAssociateRGAndTemplatesReq;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): UpdateResourceGroupAssociationAlarmTemplateRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: AsyncAssociateRGAndTemplatesReq): UpdateResourceGroupAssociationAlarmTemplateRequest {
        this['body'] = body;
        return this;
    }
}