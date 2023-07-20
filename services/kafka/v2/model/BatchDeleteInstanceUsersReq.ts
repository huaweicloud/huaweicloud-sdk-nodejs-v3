

export class BatchDeleteInstanceUsersReq {
    public action?: BatchDeleteInstanceUsersReqActionEnum | string;
    public users?: Array<string>;
    public constructor() { 
    }
    public withAction(action: BatchDeleteInstanceUsersReqActionEnum | string): BatchDeleteInstanceUsersReq {
        this['action'] = action;
        return this;
    }
    public withUsers(users: Array<string>): BatchDeleteInstanceUsersReq {
        this['users'] = users;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteInstanceUsersReqActionEnum {
    DELETE = 'delete'
}
