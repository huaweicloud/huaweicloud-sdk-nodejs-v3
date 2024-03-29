import { AgencyPolicy } from './AgencyPolicy';


export class AgencyPolicyRoleOption {
    private 'display_name'?: string;
    public type?: string;
    public description?: string;
    private 'description_cn'?: string;
    public policy?: AgencyPolicy;
    public constructor(displayName?: string, type?: string, description?: string, policy?: AgencyPolicy) { 
        this['display_name'] = displayName;
        this['type'] = type;
        this['description'] = description;
        this['policy'] = policy;
    }
    public withDisplayName(displayName: string): AgencyPolicyRoleOption {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withType(type: string): AgencyPolicyRoleOption {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): AgencyPolicyRoleOption {
        this['description'] = description;
        return this;
    }
    public withDescriptionCn(descriptionCn: string): AgencyPolicyRoleOption {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withPolicy(policy: AgencyPolicy): AgencyPolicyRoleOption {
        this['policy'] = policy;
        return this;
    }
}