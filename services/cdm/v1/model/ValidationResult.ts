import { ValidationLinkConfig } from './ValidationLinkConfig';


export class ValidationResult {
    public linkConfig?: Array<ValidationLinkConfig>;
    public constructor() { 
    }
    public withLinkConfig(linkConfig: Array<ValidationLinkConfig>): ValidationResult {
        this['linkConfig'] = linkConfig;
        return this;
    }
}