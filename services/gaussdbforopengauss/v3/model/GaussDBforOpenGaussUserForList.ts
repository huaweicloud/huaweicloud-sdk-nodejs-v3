import { GaussDBforOpenGaussUserForListAttribute } from './GaussDBforOpenGaussUserForListAttribute';


export class GaussDBforOpenGaussUserForList {
    public name?: string;
    public attribute?: GaussDBforOpenGaussUserForListAttribute;
    public memberof?: string;
    private 'lock_status'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): GaussDBforOpenGaussUserForList {
        this['name'] = name;
        return this;
    }
    public withAttribute(attribute: GaussDBforOpenGaussUserForListAttribute): GaussDBforOpenGaussUserForList {
        this['attribute'] = attribute;
        return this;
    }
    public withMemberof(memberof: string): GaussDBforOpenGaussUserForList {
        this['memberof'] = memberof;
        return this;
    }
    public withLockStatus(lockStatus: boolean): GaussDBforOpenGaussUserForList {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: boolean  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): boolean | undefined {
        return this['lock_status'];
    }
}