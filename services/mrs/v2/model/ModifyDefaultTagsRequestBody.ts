

export class ModifyDefaultTagsRequestBody {
    public action?: ModifyDefaultTagsRequestBodyActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ModifyDefaultTagsRequestBodyActionEnum | string): ModifyDefaultTagsRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyDefaultTagsRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
