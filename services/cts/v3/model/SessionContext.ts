import { Attributes } from './Attributes';


export class SessionContext {
    public attributes?: Attributes;
    public constructor() { 
    }
    public withAttributes(attributes: Attributes): SessionContext {
        this['attributes'] = attributes;
        return this;
    }
}