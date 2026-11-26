import { PolicyDefinition } from './PolicyDefinition';
import { ValidationMode } from './ValidationMode';


export class UpdatePolicyReqBody {
    public description?: string;
    public definition?: PolicyDefinition;
    private 'validation_mode'?: ValidationMode;
    public constructor() { 
    }
    public withDescription(description: string): UpdatePolicyReqBody {
        this['description'] = description;
        return this;
    }
    public withDefinition(definition: PolicyDefinition): UpdatePolicyReqBody {
        this['definition'] = definition;
        return this;
    }
    public withValidationMode(validationMode: ValidationMode): UpdatePolicyReqBody {
        this['validation_mode'] = validationMode;
        return this;
    }
    public set validationMode(validationMode: ValidationMode  | undefined) {
        this['validation_mode'] = validationMode;
    }
    public get validationMode(): ValidationMode | undefined {
        return this['validation_mode'];
    }
}