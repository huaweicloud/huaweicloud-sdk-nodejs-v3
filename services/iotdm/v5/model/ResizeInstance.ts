import { Flavor } from './Flavor';


export class ResizeInstance {
    public flavor?: Flavor;
    private 'is_auto_pay'?: boolean;
    public delay?: boolean;
    public constructor(flavor?: Flavor) { 
        this['flavor'] = flavor;
    }
    public withFlavor(flavor: Flavor): ResizeInstance {
        this['flavor'] = flavor;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): ResizeInstance {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withDelay(delay: boolean): ResizeInstance {
        this['delay'] = delay;
        return this;
    }
}