import { CreateConfigurationRequest } from './CreateConfigurationRequest';


export class CreateDdmConfigurationsRequest {
    public body?: CreateConfigurationRequest;
    public constructor() { 
    }
    public withBody(body: CreateConfigurationRequest): CreateDdmConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}