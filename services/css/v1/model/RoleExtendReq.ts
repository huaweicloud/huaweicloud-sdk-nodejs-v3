import { RoleExtendGrowReq } from './RoleExtendGrowReq';


export class RoleExtendReq {
    public grow?: Array<RoleExtendGrowReq>;
    public isAutoPay?: number;
    public constructor(grow?: Array<RoleExtendGrowReq>) { 
        this['grow'] = grow;
    }
    public withGrow(grow: Array<RoleExtendGrowReq>): RoleExtendReq {
        this['grow'] = grow;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): RoleExtendReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}