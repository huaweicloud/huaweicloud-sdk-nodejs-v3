

export class ResourceShareAssociationReqBody {
    public principals?: Array<string>;
    private 'resource_urns'?: Array<string>;
    public constructor() { 
    }
    public withPrincipals(principals: Array<string>): ResourceShareAssociationReqBody {
        this['principals'] = principals;
        return this;
    }
    public withResourceUrns(resourceUrns: Array<string>): ResourceShareAssociationReqBody {
        this['resource_urns'] = resourceUrns;
        return this;
    }
    public set resourceUrns(resourceUrns: Array<string>  | undefined) {
        this['resource_urns'] = resourceUrns;
    }
    public get resourceUrns(): Array<string> | undefined {
        return this['resource_urns'];
    }
}