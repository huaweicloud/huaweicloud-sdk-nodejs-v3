import { GaussDBforOpenGaussUserForListAttributes } from './GaussDBforOpenGaussUserForListAttributes';


export class GaussDBforOpenGaussUserForList {
    public name?: string;
    public attributes?: GaussDBforOpenGaussUserForListAttributes;
    public memberof?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): GaussDBforOpenGaussUserForList {
        this['name'] = name;
        return this;
    }
    public withAttributes(attributes: GaussDBforOpenGaussUserForListAttributes): GaussDBforOpenGaussUserForList {
        this['attributes'] = attributes;
        return this;
    }
    public withMemberof(memberof: string): GaussDBforOpenGaussUserForList {
        this['memberof'] = memberof;
        return this;
    }
}