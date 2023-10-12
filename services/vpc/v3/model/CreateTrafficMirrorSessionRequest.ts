import { CreateTrafficMirrorSessionRequestBody } from './CreateTrafficMirrorSessionRequestBody';


export class CreateTrafficMirrorSessionRequest {
    public body?: CreateTrafficMirrorSessionRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTrafficMirrorSessionRequestBody): CreateTrafficMirrorSessionRequest {
        this['body'] = body;
        return this;
    }
}