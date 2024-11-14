import { DiskAutoExpansionPolicy } from './DiskAutoExpansionPolicy';


export class SetAutoEnlargePoliciesRequestBody {
    private 'switch_option'?: string;
    public policies?: Array<DiskAutoExpansionPolicy>;
    public constructor(policies?: Array<DiskAutoExpansionPolicy>) { 
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
    public withPolicies(policies: Array<DiskAutoExpansionPolicy>): SetAutoEnlargePoliciesRequestBody {
        this['policies'] = policies;
        return this;
    }
}