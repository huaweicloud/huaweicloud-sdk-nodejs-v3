import { CreateCloudServiceCustomPolicyRequestBody } from './CreateCloudServiceCustomPolicyRequestBody';


export class CreateCloudServiceCustomPolicyRequest {
    public body?: CreateCloudServiceCustomPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCloudServiceCustomPolicyRequestBody): CreateCloudServiceCustomPolicyRequest {
        this['body'] = body;
        return this;
    }
}