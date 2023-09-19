

export class Actions {
    public id?: string;
    public actionType?: string;
    public confContent?: string;
    public status?: string;
    public updateAt?: string;
    public errorMsg?: string;
    public message?: string;
    public constructor() { 
    }
    public withId(id: string): Actions {
        this['id'] = id;
        return this;
    }
    public withActionType(actionType: string): Actions {
        this['actionType'] = actionType;
        return this;
    }
    public withConfContent(confContent: string): Actions {
        this['confContent'] = confContent;
        return this;
    }
    public withStatus(status: string): Actions {
        this['status'] = status;
        return this;
    }
    public withUpdateAt(updateAt: string): Actions {
        this['updateAt'] = updateAt;
        return this;
    }
    public withErrorMsg(errorMsg: string): Actions {
        this['errorMsg'] = errorMsg;
        return this;
    }
    public withMessage(message: string): Actions {
        this['message'] = message;
        return this;
    }
}