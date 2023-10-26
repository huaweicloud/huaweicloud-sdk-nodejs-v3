import { Configs } from './Configs';
import { LinksLinkconfigvaluesExtendedconfigs } from './LinksLinkconfigvaluesExtendedconfigs';


export class LinksLinkconfigvalues {
    public configs?: Array<Configs>;
    private 'extended-configs'?: LinksLinkconfigvaluesExtendedconfigs;
    public validators?: Array<string>;
    public constructor(configs?: Array<Configs>) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: Array<Configs>): LinksLinkconfigvalues {
        this['configs'] = configs;
        return this;
    }
    public withExtendedConfigs(extendedConfigs: LinksLinkconfigvaluesExtendedconfigs): LinksLinkconfigvalues {
        this['extended-configs'] = extendedConfigs;
        return this;
    }
    public set extendedConfigs(extendedConfigs: LinksLinkconfigvaluesExtendedconfigs  | undefined) {
        this['extended-configs'] = extendedConfigs;
    }
    public get extendedConfigs(): LinksLinkconfigvaluesExtendedconfigs | undefined {
        return this['extended-configs'];
    }
    public withValidators(validators: Array<string>): LinksLinkconfigvalues {
        this['validators'] = validators;
        return this;
    }
}