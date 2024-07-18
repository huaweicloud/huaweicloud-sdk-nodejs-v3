import { AutopilotEniNetworkUpdate } from './AutopilotEniNetworkUpdate';


export class AutopilotClusterInformationSpec {
    public description?: string;
    public customSan?: Array<string>;
    public eniNetwork?: AutopilotEniNetworkUpdate;
    public constructor() { 
    }
    public withDescription(description: string): AutopilotClusterInformationSpec {
        this['description'] = description;
        return this;
    }
    public withCustomSan(customSan: Array<string>): AutopilotClusterInformationSpec {
        this['customSan'] = customSan;
        return this;
    }
    public withEniNetwork(eniNetwork: AutopilotEniNetworkUpdate): AutopilotClusterInformationSpec {
        this['eniNetwork'] = eniNetwork;
        return this;
    }
}