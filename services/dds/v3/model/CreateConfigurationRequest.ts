import { CreateConfigurationRequestBody } from './CreateConfigurationRequestBody';


export class CreateConfigurationRequest {
    public body?: CreateConfigurationRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateConfigurationRequestBody): CreateConfigurationRequest {
        this['body'] = body;
        return this;
    }
}