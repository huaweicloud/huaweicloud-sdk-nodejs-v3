import { SessionConfiguration } from './SessionConfiguration';
import { UpdateNatGatewayOptionPrepaidOptions } from './UpdateNatGatewayOptionPrepaidOptions';


export class UpdateNatGatewayOption {
    public name?: string;
    public description?: string;
    public spec?: UpdateNatGatewayOptionSpecEnum | string;
    private 'session_conf'?: SessionConfiguration;
    private 'prepaid_options'?: UpdateNatGatewayOptionPrepaidOptions;
    public constructor() { 
    }
    public withName(name: string): UpdateNatGatewayOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateNatGatewayOption {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: UpdateNatGatewayOptionSpecEnum | string): UpdateNatGatewayOption {
        this['spec'] = spec;
        return this;
    }
    public withSessionConf(sessionConf: SessionConfiguration): UpdateNatGatewayOption {
        this['session_conf'] = sessionConf;
        return this;
    }
    public set sessionConf(sessionConf: SessionConfiguration  | undefined) {
        this['session_conf'] = sessionConf;
    }
    public get sessionConf(): SessionConfiguration | undefined {
        return this['session_conf'];
    }
    public withPrepaidOptions(prepaidOptions: UpdateNatGatewayOptionPrepaidOptions): UpdateNatGatewayOption {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: UpdateNatGatewayOptionPrepaidOptions  | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions(): UpdateNatGatewayOptionPrepaidOptions | undefined {
        return this['prepaid_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNatGatewayOptionSpecEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4',
    E_5 = '5'
}
