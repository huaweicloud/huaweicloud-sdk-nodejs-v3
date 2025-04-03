import { MemberItemDto } from './MemberItemDto';


export class CreateGroupReqBody {
    public externalId?: string;
    public displayName?: string;
    public members?: Array<MemberItemDto>;
    public schemas?: Array<string>;
    public constructor(displayName?: string, schemas?: Array<string>) { 
        this['displayName'] = displayName;
        this['schemas'] = schemas;
    }
    public withExternalId(externalId: string): CreateGroupReqBody {
        this['externalId'] = externalId;
        return this;
    }
    public withDisplayName(displayName: string): CreateGroupReqBody {
        this['displayName'] = displayName;
        return this;
    }
    public withMembers(members: Array<MemberItemDto>): CreateGroupReqBody {
        this['members'] = members;
        return this;
    }
    public withSchemas(schemas: Array<string>): CreateGroupReqBody {
        this['schemas'] = schemas;
        return this;
    }
}