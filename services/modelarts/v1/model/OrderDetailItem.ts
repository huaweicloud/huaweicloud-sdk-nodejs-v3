

export class OrderDetailItem {
    public resourceName?: string;
    public action?: string;
    public status?: string;
    public beginTimestamp?: string;
    public updateTimestamp?: string;
    public message?: string;
    public constructor(action?: string, status?: string) { 
        this['action'] = action;
        this['status'] = status;
    }
    public withResourceName(resourceName: string): OrderDetailItem {
        this['resourceName'] = resourceName;
        return this;
    }
    public withAction(action: string): OrderDetailItem {
        this['action'] = action;
        return this;
    }
    public withStatus(status: string): OrderDetailItem {
        this['status'] = status;
        return this;
    }
    public withBeginTimestamp(beginTimestamp: string): OrderDetailItem {
        this['beginTimestamp'] = beginTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): OrderDetailItem {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withMessage(message: string): OrderDetailItem {
        this['message'] = message;
        return this;
    }
}