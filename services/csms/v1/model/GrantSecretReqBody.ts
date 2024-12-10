

export class GrantSecretReqBody {
    private 'resource_id'?: string;
    public type?: string;
    private 'grantee_type'?: string;
    private 'grantee_target_id'?: string;
    private 'validity_time'?: string;
    public constructor(resourceId?: string, type?: string, granteeType?: string, granteeTargetId?: string) { 
        this['resource_id'] = resourceId;
        this['type'] = type;
        this['grantee_type'] = granteeType;
        this['grantee_target_id'] = granteeTargetId;
    }
    public withResourceId(resourceId: string): GrantSecretReqBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withType(type: string): GrantSecretReqBody {
        this['type'] = type;
        return this;
    }
    public withGranteeType(granteeType: string): GrantSecretReqBody {
        this['grantee_type'] = granteeType;
        return this;
    }
    public set granteeType(granteeType: string  | undefined) {
        this['grantee_type'] = granteeType;
    }
    public get granteeType(): string | undefined {
        return this['grantee_type'];
    }
    public withGranteeTargetId(granteeTargetId: string): GrantSecretReqBody {
        this['grantee_target_id'] = granteeTargetId;
        return this;
    }
    public set granteeTargetId(granteeTargetId: string  | undefined) {
        this['grantee_target_id'] = granteeTargetId;
    }
    public get granteeTargetId(): string | undefined {
        return this['grantee_target_id'];
    }
    public withValidityTime(validityTime: string): GrantSecretReqBody {
        this['validity_time'] = validityTime;
        return this;
    }
    public set validityTime(validityTime: string  | undefined) {
        this['validity_time'] = validityTime;
    }
    public get validityTime(): string | undefined {
        return this['validity_time'];
    }
}