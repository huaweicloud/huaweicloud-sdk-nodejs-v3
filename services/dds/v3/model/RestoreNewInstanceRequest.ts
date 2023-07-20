import { RestoreNewInstanceRequestBody } from './RestoreNewInstanceRequestBody';


export class RestoreNewInstanceRequest {
    public body?: RestoreNewInstanceRequestBody;
    public constructor() { 
    }
    public withBody(body: RestoreNewInstanceRequestBody): RestoreNewInstanceRequest {
        this['body'] = body;
        return this;
    }
}