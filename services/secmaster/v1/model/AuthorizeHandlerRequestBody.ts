

export class AuthorizeHandlerRequestBody {
    public ids?: Array<string>;
    public type?: number;
    public constructor(ids?: Array<string>, type?: number) { 
        this['ids'] = ids;
        this['type'] = type;
    }
    public withIds(ids: Array<string>): AuthorizeHandlerRequestBody {
        this['ids'] = ids;
        return this;
    }
    public withType(type: number): AuthorizeHandlerRequestBody {
        this['type'] = type;
        return this;
    }
}