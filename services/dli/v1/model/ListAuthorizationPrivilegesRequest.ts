

export class ListAuthorizationPrivilegesRequest {
    private 'object'?: string;
    public constructor(modelObject?: string) { 
        this['object'] = modelObject;
    }
    public withModelObject(modelObject: string): ListAuthorizationPrivilegesRequest {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
}