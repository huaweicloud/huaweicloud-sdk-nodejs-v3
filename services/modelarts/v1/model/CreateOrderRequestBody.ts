

export class CreateOrderRequestBody {
    public actionType?: string;
    public constructor() { 
    }
    public withActionType(actionType: string): CreateOrderRequestBody {
        this['actionType'] = actionType;
        return this;
    }
}