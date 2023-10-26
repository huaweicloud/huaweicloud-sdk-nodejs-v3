import { Configs } from './Configs';
import { ExtendedConfigs } from './ExtendedConfigs';


export class ConfigValues {
    public configs?: Array<Configs>;
    private 'extended-configs'?: ExtendedConfigs;
    public constructor(configs?: Array<Configs>) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: Array<Configs>): ConfigValues {
        this['configs'] = configs;
        return this;
    }
    public withExtendedConfigs(extendedConfigs: ExtendedConfigs): ConfigValues {
        this['extended-configs'] = extendedConfigs;
        return this;
    }
    public set extendedConfigs(extendedConfigs: ExtendedConfigs  | undefined) {
        this['extended-configs'] = extendedConfigs;
    }
    public get extendedConfigs(): ExtendedConfigs | undefined {
        return this['extended-configs'];
    }
}