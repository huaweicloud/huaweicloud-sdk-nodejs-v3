

export class GrantData {
    public uuid?: string;
    public resourceId?: string;
    public type?: string;
    public granteeUser?: string;
    public createTime?: number;
    public updateTime?: number;
    public validityTime?: number;
    public state?: number;
    public signature?: string;
    public constructor(uuid?: string, resourceId?: string, type?: string, granteeUser?: string) { 
        this['uuid'] = uuid;
        this['resourceId'] = resourceId;
        this['type'] = type;
        this['granteeUser'] = granteeUser;
    }
    public withUuid(uuid: string): GrantData {
        this['uuid'] = uuid;
        return this;
    }
    public withResourceId(resourceId: string): GrantData {
        this['resourceId'] = resourceId;
        return this;
    }
    public withType(type: string): GrantData {
        this['type'] = type;
        return this;
    }
    public withGranteeUser(granteeUser: string): GrantData {
        this['granteeUser'] = granteeUser;
        return this;
    }
    public withCreateTime(createTime: number): GrantData {
        this['createTime'] = createTime;
        return this;
    }
    public withUpdateTime(updateTime: number): GrantData {
        this['updateTime'] = updateTime;
        return this;
    }
    public withValidityTime(validityTime: number): GrantData {
        this['validityTime'] = validityTime;
        return this;
    }
    public withState(state: number): GrantData {
        this['state'] = state;
        return this;
    }
    public withSignature(signature: string): GrantData {
        this['signature'] = signature;
        return this;
    }
}