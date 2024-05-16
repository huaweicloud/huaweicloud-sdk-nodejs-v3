import { Tag } from './Tag';


export class CreateResourceShareReqBody {
    public name?: string;
    public description?: string;
    private 'allow_external_principals'?: boolean;
    private 'permission_ids'?: Array<string>;
    public principals?: Array<string>;
    private 'resource_urns'?: Array<string>;
    public tags?: Array<Tag>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateResourceShareReqBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateResourceShareReqBody {
        this['description'] = description;
        return this;
    }
    public withAllowExternalPrincipals(allowExternalPrincipals: boolean): CreateResourceShareReqBody {
        this['allow_external_principals'] = allowExternalPrincipals;
        return this;
    }
    public set allowExternalPrincipals(allowExternalPrincipals: boolean  | undefined) {
        this['allow_external_principals'] = allowExternalPrincipals;
    }
    public get allowExternalPrincipals(): boolean | undefined {
        return this['allow_external_principals'];
    }
    public withPermissionIds(permissionIds: Array<string>): CreateResourceShareReqBody {
        this['permission_ids'] = permissionIds;
        return this;
    }
    public set permissionIds(permissionIds: Array<string>  | undefined) {
        this['permission_ids'] = permissionIds;
    }
    public get permissionIds(): Array<string> | undefined {
        return this['permission_ids'];
    }
    public withPrincipals(principals: Array<string>): CreateResourceShareReqBody {
        this['principals'] = principals;
        return this;
    }
    public withResourceUrns(resourceUrns: Array<string>): CreateResourceShareReqBody {
        this['resource_urns'] = resourceUrns;
        return this;
    }
    public set resourceUrns(resourceUrns: Array<string>  | undefined) {
        this['resource_urns'] = resourceUrns;
    }
    public get resourceUrns(): Array<string> | undefined {
        return this['resource_urns'];
    }
    public withTags(tags: Array<Tag>): CreateResourceShareReqBody {
        this['tags'] = tags;
        return this;
    }
}