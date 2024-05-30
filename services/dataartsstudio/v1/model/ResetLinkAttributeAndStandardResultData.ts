import { LinkAttributeAndElementVO } from './LinkAttributeAndElementVO';


export class ResetLinkAttributeAndStandardResultData {
    public value?: LinkAttributeAndElementVO;
    public constructor() { 
    }
    public withValue(value: LinkAttributeAndElementVO): ResetLinkAttributeAndStandardResultData {
        this['value'] = value;
        return this;
    }
}