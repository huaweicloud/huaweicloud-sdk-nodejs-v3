

export class CustomPolicy {
    private 'function_urn'?: string;
    private 'auth_type'?: CustomPolicyAuthTypeEnum | string;
    private 'auth_value'?: { [key: string]: object; };
    public constructor(functionUrn?: string, authType?: string) { 
        this['function_urn'] = functionUrn;
        this['auth_type'] = authType;
    }
    public withFunctionUrn(functionUrn: string): CustomPolicy {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withAuthType(authType: CustomPolicyAuthTypeEnum | string): CustomPolicy {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: CustomPolicyAuthTypeEnum | string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): CustomPolicyAuthTypeEnum | string | undefined {
        return this['auth_type'];
    }
    public withAuthValue(authValue: { [key: string]: object; }): CustomPolicy {
        this['auth_value'] = authValue;
        return this;
    }
    public set authValue(authValue: { [key: string]: object; }  | undefined) {
        this['auth_value'] = authValue;
    }
    public get authValue(): { [key: string]: object; } | undefined {
        return this['auth_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomPolicyAuthTypeEnum {
    AGENCY = 'agency'
}
