

export class AddMembersReq {
    public members?: Array<string>;
    public domains?: Array<string>;
    public constructor() { 
    }
    public withMembers(members: Array<string>): AddMembersReq {
        this['members'] = members;
        return this;
    }
    public withDomains(domains: Array<string>): AddMembersReq {
        this['domains'] = domains;
        return this;
    }
}