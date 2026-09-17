
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateResourceGroupResponse extends SdkResponse {
    private 'group_id'?: string;
    private 'domain_id'?: string;
    private 'group_name'?: string;
    public description?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): CreateResourceGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDomainId(domainId: string): CreateResourceGroupResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withGroupName(groupName: string): CreateResourceGroupResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDescription(description: string): CreateResourceGroupResponse {
        this['description'] = description;
        return this;
    }
    public withCreated(created: string): CreateResourceGroupResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): CreateResourceGroupResponse {
        this['updated'] = updated;
        return this;
    }
}