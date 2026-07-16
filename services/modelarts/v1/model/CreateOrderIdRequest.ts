import { CreateOrderRequestBody } from './CreateOrderRequestBody';


export class CreateOrderIdRequest {
    public name?: string;
    public actionType?: string;
    public workspaceId?: string;
    public body?: CreateOrderRequestBody;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateOrderIdRequest {
        this['name'] = name;
        return this;
    }
    public withActionType(actionType: string): CreateOrderIdRequest {
        this['actionType'] = actionType;
        return this;
    }
    public withWorkspaceId(workspaceId: string): CreateOrderIdRequest {
        this['workspaceId'] = workspaceId;
        return this;
    }
    public withBody(body: CreateOrderRequestBody): CreateOrderIdRequest {
        this['body'] = body;
        return this;
    }
}