import { SaleCycleOption } from './SaleCycleOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSaleCyclesResponse extends SdkResponse {
    private 'sale_cycles'?: Array<SaleCycleOption>;
    public constructor() { 
        super();
    }
    public withSaleCycles(saleCycles: Array<SaleCycleOption>): ListSaleCyclesResponse {
        this['sale_cycles'] = saleCycles;
        return this;
    }
    public set saleCycles(saleCycles: Array<SaleCycleOption>  | undefined) {
        this['sale_cycles'] = saleCycles;
    }
    public get saleCycles(): Array<SaleCycleOption> | undefined {
        return this['sale_cycles'];
    }
}