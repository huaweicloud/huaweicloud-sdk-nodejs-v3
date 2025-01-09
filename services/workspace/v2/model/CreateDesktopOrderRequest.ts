import { CreateDesktopOrderRequestBody } from './CreateDesktopOrderRequestBody';


export class CreateDesktopOrderRequest {
    public body?: CreateDesktopOrderRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDesktopOrderRequestBody): CreateDesktopOrderRequest {
        this['body'] = body;
        return this;
    }
}