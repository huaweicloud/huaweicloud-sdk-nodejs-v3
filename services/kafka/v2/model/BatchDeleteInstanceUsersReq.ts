

export class BatchDeleteInstanceUsersReq {
    public action?: BatchDeleteInstanceUsersReqActionEnum;
    public users?: Array<string>;
    public constructor() { 
    }
    public withAction(action: BatchDeleteInstanceUsersReqActionEnum): BatchDeleteInstanceUsersReq {
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
