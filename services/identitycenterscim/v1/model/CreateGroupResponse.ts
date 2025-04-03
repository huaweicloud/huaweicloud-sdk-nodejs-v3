import { MemberItemDto } from './MemberItemDto';
import { MetaDto } from './MetaDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGroupResponse extends SdkResponse {
    public id?: string;
    public externalId?: string;
    public meta?: MetaDto;
    public schemas?: Array<string>;
    public displayName?: string;
    public members?: Array<MemberItemDto>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateGroupResponse {
        this['id'] = id;
        return this;
    }
    public withExternalId(externalId: string): CreateGroupResponse {
        this['externalId'] = externalId;
        return this;
    }
    public withMeta(meta: MetaDto): CreateGroupResponse {
        this['meta'] = meta;
        return this;
    }
    public withSchemas(schemas: Array<string>): CreateGroupResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withDisplayName(displayName: string): CreateGroupResponse {
        this['displayName'] = displayName;
        return this;
    }
    public withMembers(members: Array<MemberItemDto>): CreateGroupResponse {
        this['members'] = members;
        return this;
    }
}