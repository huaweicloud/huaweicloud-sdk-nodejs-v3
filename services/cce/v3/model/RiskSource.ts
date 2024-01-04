import { AddonRisks } from './AddonRisks';
import { ConfigurationRisks } from './ConfigurationRisks';
import { DeprecatedAPIRisks } from './DeprecatedAPIRisks';
import { NodeRisks } from './NodeRisks';


export class RiskSource {
    public configurationRisks?: Array<ConfigurationRisks>;
    public deprecatedAPIRisks?: Array<DeprecatedAPIRisks>;
    public nodeRisks?: Array<NodeRisks>;
    public addonRisks?: Array<AddonRisks>;
    public constructor() { 
    }
    public withConfigurationRisks(configurationRisks: Array<ConfigurationRisks>): RiskSource {
        this['configurationRisks'] = configurationRisks;
        return this;
    }
    public withDeprecatedAPIRisks(deprecatedAPIRisks: Array<DeprecatedAPIRisks>): RiskSource {
        this['deprecatedAPIRisks'] = deprecatedAPIRisks;
        return this;
    }
    public withNodeRisks(nodeRisks: Array<NodeRisks>): RiskSource {
        this['nodeRisks'] = nodeRisks;
        return this;
    }
    public withAddonRisks(addonRisks: Array<AddonRisks>): RiskSource {
        this['addonRisks'] = addonRisks;
        return this;
    }
}