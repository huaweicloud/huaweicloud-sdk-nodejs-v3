

export class CommRequestListString {
    public params?: Array<string>;
    public constructor(params?: Array<string>) { 
        this['params'] = params;
    }
    public withParams(params: Array<string>): CommRequestListString {
        this['params'] = params;
        return this;
    }
}