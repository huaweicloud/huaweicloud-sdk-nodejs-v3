import { PolicyDefinition } from './PolicyDefinition';
import { ValidationMode } from './ValidationMode';


export class CreatePolicyReqBody {
    public name?: string;
    public description?: string;
    public definition?: PolicyDefinition;
    private 'validation_mode'?: ValidationMode;
    public constructor(name?: string, definition?: PolicyDefinition) { 
        this['name'] = name;
        this['definition'] = definition;
    }
    public withName(name: string): CreatePolicyReqBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePolicyReqBody {
        this['description'] = description;
        return this;
    }
    public withDefinition(definition: PolicyDefinition): CreatePolicyReqBody {
        this['definition'] = definition;
        return this;
    }
    public withValidationMode(validationMode: ValidationMode): CreatePolicyReqBody {
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