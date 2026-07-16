import { ServerHyperScaleUpRequest } from './ServerHyperScaleUpRequest';


export class ScaleUpHyperinstanceRequest {
    public id?: string;
    public body?: ServerHyperScaleUpRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ScaleUpHyperinstanceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ServerHyperScaleUpRequest): ScaleUpHyperinstanceRequest {
        this['body'] = body;
        return this;
    }
}