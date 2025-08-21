

export class RequiredAttributeDto {
    public name?: RequiredAttributeDtoNameEnum | string;
    private 'is_required'?: boolean;
    public constructor() { 
    }
    public withName(name: RequiredAttributeDtoNameEnum | string): RequiredAttributeDto {
        this['name'] = name;
        return this;
    }
    public withIsRequired(isRequired: boolean): RequiredAttributeDto {
        this['is_required'] = isRequired;
        return this;
    }
    public set isRequired(isRequired: boolean  | undefined) {
        this['is_required'] = isRequired;
    }
    public get isRequired(): boolean | undefined {
        return this['is_required'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RequiredAttributeDtoNameEnum {
    BODY = 'Body',
    SEVERITY = 'Severity',
    ASSIGNEEID = 'AssigneeId',
    REVIEWCATEGORIES = 'ReviewCategories',
    REVIEWMODULES = 'ReviewModules'
}
