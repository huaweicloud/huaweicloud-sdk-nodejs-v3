

export class AddMembersReq {
    public members: Array<string>;
    public constructor(members?: any) { 
        this['members'] = members;
    }
    public withMembers(members: Array<string>): AddMembersReq {
        this['members'] = members;
        return this;
    }
}