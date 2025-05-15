
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateResourceGroupAssociationAlarmTemplateResponse extends SdkResponse {
    private 'group_id'?: string;
    private 'template_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): UpdateResourceGroupAssociationAlarmTemplateResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withTemplateIds(templateIds: Array<string>): UpdateResourceGroupAssociationAlarmTemplateResponse {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<string>  | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds(): Array<string> | undefined {
        return this['template_ids'];
    }
}