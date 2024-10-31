import { DiskAutoExpansionPolicy } from './DiskAutoExpansionPolicy';


export class SetAutoPolicyRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'switch_option'?: string;
    public policy?: Array<DiskAutoExpansionPolicy>;
    public constructor(instanceIds?: Array<string>, policy?: Array<DiskAutoExpansionPolicy>) { 
        this['instance_ids'] = instanceIds;
        this['policy'] = policy;
    }
    public withInstanceIds(instanceIds: Array<string>): SetAutoPolicyRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withSwitchOption(switchOption: string): SetAutoPolicyRequestBody {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: string  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): string | undefined {
        return this['switch_option'];
    }
    public withPolicy(policy: Array<DiskAutoExpansionPolicy>): SetAutoPolicyRequestBody {
        this['policy'] = policy;
        return this;
    }
}