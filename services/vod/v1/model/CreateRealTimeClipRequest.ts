import { CreateRealTimeClipRequestBody } from './CreateRealTimeClipRequestBody';


export class CreateRealTimeClipRequest {
    public body?: CreateRealTimeClipRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateRealTimeClipRequestBody): CreateRealTimeClipRequest {
        this['body'] = body;
        return this;
    }
}