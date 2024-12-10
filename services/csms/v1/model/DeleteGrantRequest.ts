

export class DeleteGrantRequest {
    private 'grantee_user'?: string;
    private 'resource_id'?: string;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withGranteeUser(granteeUser: string): DeleteGrantRequest {
        this['grantee_user'] = granteeUser;
        return this;
    }
    public set granteeUser(granteeUser: string  | undefined) {
        this['grantee_user'] = granteeUser;
    }
    public get granteeUser(): string | undefined {
        return this['grantee_user'];
    }
    public withResourceId(resourceId: string): DeleteGrantRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}