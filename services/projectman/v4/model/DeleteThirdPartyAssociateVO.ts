

export class DeleteThirdPartyAssociateVO {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteThirdPartyAssociateVO {
        this['id'] = id;
        return this;
    }
}