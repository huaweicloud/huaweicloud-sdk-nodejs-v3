import { CompareConfigurationRequestBody } from './CompareConfigurationRequestBody';


export class CompareConfigurationRequest {
    public body?: CompareConfigurationRequestBody;
    public constructor() { 
    }
    public withBody(body: CompareConfigurationRequestBody): CompareConfigurationRequest {
        this['body'] = body;
        return this;
    }
}