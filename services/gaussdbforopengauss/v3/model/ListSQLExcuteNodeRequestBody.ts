

export class ListSQLExcuteNodeRequestBody {
    public action?: ListSQLExcuteNodeRequestBodyActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ListSQLExcuteNodeRequestBodyActionEnum | string): ListSQLExcuteNodeRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSQLExcuteNodeRequestBodyActionEnum {
    SLOW = 'slow'
}
