

export class UserPolicyEntity {
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    private 'pattern_type'?: UserPolicyEntityPatternTypeEnum | string;
    private 'access_policy'?: UserPolicyEntityAccessPolicyEnum | string;
    public constructor() { 
    }
    public withResourceType(resourceType: string): UserPolicyEntity {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): UserPolicyEntity {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withPatternType(patternType: UserPolicyEntityPatternTypeEnum | string): UserPolicyEntity {
        this['pattern_type'] = patternType;
        return this;
    }
    public set patternType(patternType: UserPolicyEntityPatternTypeEnum | string  | undefined) {
        this['pattern_type'] = patternType;
    }
    public get patternType(): UserPolicyEntityPatternTypeEnum | string | undefined {
        return this['pattern_type'];
    }
    public withAccessPolicy(accessPolicy: UserPolicyEntityAccessPolicyEnum | string): UserPolicyEntity {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: UserPolicyEntityAccessPolicyEnum | string  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): UserPolicyEntityAccessPolicyEnum | string | undefined {
        return this['access_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserPolicyEntityPatternTypeEnum {
    LITERAL = 'LITERAL',
    PREFIXED = 'PREFIXED'
}
/**
    * @export
    * @enum {string}
    */
export enum UserPolicyEntityAccessPolicyEnum {
    ALL = 'all',
    PUB = 'pub',
    SUB = 'sub'
}
