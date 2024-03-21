

export class RunCatalogActionRequestBody {
    public action?: RunCatalogActionRequestBodyActionEnum | string;
    public name?: string;
    public parameters?: { [key: string]: string; };
    public constructor(action?: string, name?: string, parameters?: { [key: string]: string; }) { 
        this['action'] = action;
        this['name'] = name;
        this['parameters'] = parameters;
    }
    public withAction(action: RunCatalogActionRequestBodyActionEnum | string): RunCatalogActionRequestBody {
        this['action'] = action;
        return this;
    }
    public withName(name: string): RunCatalogActionRequestBody {
        this['name'] = name;
        return this;
    }
    public withParameters(parameters: { [key: string]: string; }): RunCatalogActionRequestBody {
        this['parameters'] = parameters;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunCatalogActionRequestBodyActionEnum {
    BIND = 'bind',
    UNBIND = 'unbind'
}
