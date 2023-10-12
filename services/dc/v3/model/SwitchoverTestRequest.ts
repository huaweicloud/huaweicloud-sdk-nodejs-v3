import { CreateSwitchoverTestRequestBody } from './CreateSwitchoverTestRequestBody';


export class SwitchoverTestRequest {
    public body?: CreateSwitchoverTestRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSwitchoverTestRequestBody): SwitchoverTestRequest {
        this['body'] = body;
        return this;
    }
}