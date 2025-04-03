import { MemberItemDto } from './MemberItemDto';
import { MetaDto } from './MetaDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetGroupResponse extends SdkResponse {
    public id?: string;
    public externalId?: string;
    public meta?: MetaDto;
    public schemas?: Array<string>;
    public displayName?: string;
    public members?: Array<MemberItemDto>;
    public constructor() { 
        super();
    }
    public withId(id: string): GetGroupResponse {
        this['id'] = id;
        return this;
    }
    public withExternalId(externalId: string): GetGroupResponse {
        this['externalId'] = externalId;
        return this;
    }
    public withMeta(meta: MetaDto): GetGroupResponse {
        this['meta'] = meta;
        return this;
    }
    public withSchemas(schemas: Array<string>): GetGroupResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withDisplayName(displayName: string): GetGroupResponse {
        this['displayName'] = displayName;
        return this;
    }
    public withMembers(members: Array<MemberItemDto>): GetGroupResponse {
        this['members'] = members;
        return this;
    }
}