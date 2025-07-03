import { RoleExtendGrowReq } from './RoleExtendGrowReq';


export class RoleExtendReq {
    public grow?: Array<RoleExtendGrowReq>;
    private 'is_auto_pay'?: number;
    public constructor(grow?: Array<RoleExtendGrowReq>) { 
        this['grow'] = grow;
    }
    public withGrow(grow: Array<RoleExtendGrowReq>): RoleExtendReq {
        this['grow'] = grow;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): RoleExtendReq {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
}