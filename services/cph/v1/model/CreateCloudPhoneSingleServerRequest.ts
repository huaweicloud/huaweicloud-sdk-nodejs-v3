import { CreateCloudPhoneSingleServerRequestBody } from './CreateCloudPhoneSingleServerRequestBody';


export class CreateCloudPhoneSingleServerRequest {
    public body?: CreateCloudPhoneSingleServerRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCloudPhoneSingleServerRequestBody): CreateCloudPhoneSingleServerRequest {
        this['body'] = body;
        return this;
    }
}