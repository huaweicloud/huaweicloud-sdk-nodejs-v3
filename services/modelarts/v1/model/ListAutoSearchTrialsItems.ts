

export class ListAutoSearchTrialsItems {
    public header?: Array<string>;
    public data?: Array<Array<string>>;
    public constructor() { 
    }
    public withHeader(header: Array<string>): ListAutoSearchTrialsItems {
        this['header'] = header;
        return this;
    }
    public withData(data: Array<Array<string>>): ListAutoSearchTrialsItems {
        this['data'] = data;
        return this;
    }
}