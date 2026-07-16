import { ServerScaleDownRequest } from './ServerScaleDownRequest';


export class ScaleDownHyperinstanceRequest {
    public id?: string;
    public body?: ServerScaleDownRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ScaleDownHyperinstanceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ServerScaleDownRequest): ScaleDownHyperinstanceRequest {
        this['body'] = body;
        return this;
    }
}