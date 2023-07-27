

export class Success {
    public path?: string;
    public method?: string;
    public action?: SuccessActionEnum | string;
    public id?: string;
    public constructor() { 
    }
    public withPath(path: string): Success {
        this['path'] = path;
        return this;
    }
    public withMethod(method: string): Success {
        this['method'] = method;
        return this;
    }
    public withAction(action: SuccessActionEnum | string): Success {
        this['action'] = action;
        return this;
    }
    public withId(id: string): Success {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SuccessActionEnum {
    UPDATE = 'update',
    CREATE = 'create'
}
