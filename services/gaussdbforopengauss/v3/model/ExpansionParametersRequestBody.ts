

export class ExpansionParametersRequestBody {
    public params?: { [key: string]: string; };
    public constructor(params?: { [key: string]: string; }) { 
        this['params'] = params;
    }
    public withParams(params: { [key: string]: string; }): ExpansionParametersRequestBody {
        this['params'] = params;
        return this;
    }
}