

export class Privilege {
    private 'object'?: string;
    public privileges?: Array<string>;
    public constructor(modelObject?: string, privileges?: Array<string>) { 
        this['object'] = modelObject;
        this['privileges'] = privileges;
    }
    public withModelObject(modelObject: string): Privilege {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withPrivileges(privileges: Array<string>): Privilege {
        this['privileges'] = privileges;
        return this;
    }
}