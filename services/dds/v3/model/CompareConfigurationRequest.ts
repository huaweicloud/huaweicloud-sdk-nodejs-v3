import { DiffConfigurationRequest } from './DiffConfigurationRequest';


export class CompareConfigurationRequest {
    public body?: DiffConfigurationRequest;
    public constructor() { 
    }
    public withBody(body: DiffConfigurationRequest): CompareConfigurationRequest {
        this['body'] = body;
        return this;
    }
}