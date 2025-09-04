import { CountdownRequestBody } from './CountdownRequestBody';


export class ShowPackageSpecCountDownRequest {
    public body?: CountdownRequestBody;
    public constructor() { 
    }
    public withBody(body: CountdownRequestBody): ShowPackageSpecCountDownRequest {
        this['body'] = body;
        return this;
    }
}