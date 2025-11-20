import { BillResources } from './BillResources';


export class TransAcceptResponse {
    private 'is_need_billing'?: boolean;
    private 'required_resources'?: Array<BillResources>;
    public constructor() { 
    }
    public withIsNeedBilling(isNeedBilling: boolean): TransAcceptResponse {
        this['is_need_billing'] = isNeedBilling;
        return this;
    }
    public set isNeedBilling(isNeedBilling: boolean  | undefined) {
        this['is_need_billing'] = isNeedBilling;
    }
    public get isNeedBilling(): boolean | undefined {
        return this['is_need_billing'];
    }
    public withRequiredResources(requiredResources: Array<BillResources>): TransAcceptResponse {
        this['required_resources'] = requiredResources;
        return this;
    }
    public set requiredResources(requiredResources: Array<BillResources>  | undefined) {
        this['required_resources'] = requiredResources;
    }
    public get requiredResources(): Array<BillResources> | undefined {
        return this['required_resources'];
    }
}