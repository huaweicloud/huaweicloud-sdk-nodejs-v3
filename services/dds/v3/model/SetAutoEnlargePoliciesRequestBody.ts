import { DiskSetAutoExpansionPolicy } from './DiskSetAutoExpansionPolicy';


export class SetAutoEnlargePoliciesRequestBody {
    private 'switch_option'?: string;
    public policies?: Array<DiskSetAutoExpansionPolicy>;
    public constructor(policies?: Array<DiskSetAutoExpansionPolicy>) { 
        this['policies'] = policies;
    }
    public withSwitchOption(switchOption: string): SetAutoEnlargePoliciesRequestBody {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: string  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): string | undefined {
        return this['switch_option'];
    }
    public withPolicies(policies: Array<DiskSetAutoExpansionPolicy>): SetAutoEnlargePoliciesRequestBody {
        this['policies'] = policies;
        return this;
    }
}