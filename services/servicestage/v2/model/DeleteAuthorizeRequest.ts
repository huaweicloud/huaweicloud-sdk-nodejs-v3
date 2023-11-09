

export class DeleteAuthorizeRequest {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DeleteAuthorizeRequest {
        this['name'] = name;
        return this;
    }
}