import { PrepaidOptions } from './PrepaidOptions';


export class UpdateNatGatewayToPeriodRequestBody {
    private 'prepaid_options'?: PrepaidOptions;
    public constructor() { 
    }
    public withPrepaidOptions(prepaidOptions: PrepaidOptions): UpdateNatGatewayToPeriodRequestBody {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: PrepaidOptions  | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions(): PrepaidOptions | undefined {
        return this['prepaid_options'];
    }
}