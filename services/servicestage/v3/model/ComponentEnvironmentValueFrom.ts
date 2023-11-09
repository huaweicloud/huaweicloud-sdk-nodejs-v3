

export class ComponentEnvironmentValueFrom {
    private 'reference_type'?: ComponentEnvironmentValueFromReferenceTypeEnum | string;
    public name?: string;
    public key?: string;
    public optional?: boolean;
    public constructor(referenceType?: string, name?: string) { 
        this['reference_type'] = referenceType;
        this['name'] = name;
    }
    public withReferenceType(referenceType: ComponentEnvironmentValueFromReferenceTypeEnum | string): ComponentEnvironmentValueFrom {
        this['reference_type'] = referenceType;
        return this;
    }
    public set referenceType(referenceType: ComponentEnvironmentValueFromReferenceTypeEnum | string  | undefined) {
        this['reference_type'] = referenceType;
    }
    public get referenceType(): ComponentEnvironmentValueFromReferenceTypeEnum | string | undefined {
        return this['reference_type'];
    }
    public withName(name: string): ComponentEnvironmentValueFrom {
        this['name'] = name;
        return this;
    }
    public withKey(key: string): ComponentEnvironmentValueFrom {
        this['key'] = key;
        return this;
    }
    public withOptional(optional: boolean): ComponentEnvironmentValueFrom {
        this['optional'] = optional;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentEnvironmentValueFromReferenceTypeEnum {
    CONFIGMAPKEY = 'configMapKey',
    SECRETKEY = 'secretKey'
}
