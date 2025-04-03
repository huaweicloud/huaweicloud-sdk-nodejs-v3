import { MemberItemDto } from './MemberItemDto';
import { MetaDto } from './MetaDto';


export class GetGroupResp {
    public id?: string;
    public externalId?: string;
    public meta?: MetaDto;
    public schemas?: Array<string>;
    public displayName?: string;
    public members?: Array<MemberItemDto>;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetGroupResp {
        this['id'] = id;
        return this;
    }
    public withExternalId(externalId: string): GetGroupResp {
        this['externalId'] = externalId;
        return this;
    }
    public withMeta(meta: MetaDto): GetGroupResp {
        this['meta'] = meta;
        return this;
    }
    public withSchemas(schemas: Array<string>): GetGroupResp {
        this['schemas'] = schemas;
        return this;
    }
    public withDisplayName(displayName: string): GetGroupResp {
        this['displayName'] = displayName;
        return this;
    }
    public withMembers(members: Array<MemberItemDto>): GetGroupResp {
        this['members'] = members;
        return this;
    }
}