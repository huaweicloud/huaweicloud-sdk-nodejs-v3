import { CreateTrafficMirrorFilterRequestBody } from './CreateTrafficMirrorFilterRequestBody';


export class CreateTrafficMirrorFilterRequest {
    public body?: CreateTrafficMirrorFilterRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTrafficMirrorFilterRequestBody): CreateTrafficMirrorFilterRequest {
        this['body'] = body;
        return this;
    }
}