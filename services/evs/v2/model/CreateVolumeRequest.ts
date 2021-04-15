import { CreateVolumeRequestBody } from './CreateVolumeRequestBody';


export class CreateVolumeRequest {
    public body?: CreateVolumeRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVolumeRequestBody): CreateVolumeRequest {
        this['body'] = body;
        return this;
    }
}