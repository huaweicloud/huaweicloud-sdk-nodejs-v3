import { ServicePolicy } from './ServicePolicy';


export class ServicePolicyRoleOption {
    private 'display_name'?: string;
    public type?: string;
    public description?: string;
    private 'description_cn'?: string;
    public policy?: ServicePolicy;
    public constructor(displayName?: string, type?: string, description?: string, policy?: ServicePolicy) { 
        this['display_name'] = displayName;
        this['type'] = type;
        this['description'] = description;
        this['policy'] = policy;
    }
    public withDisplayName(displayName: string): ServicePolicyRoleOption {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withType(type: string): ServicePolicyRoleOption {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ServicePolicyRoleOption {
        this['description'] = description;
        return this;
    }
    public withDescriptionCn(descriptionCn: string): ServicePolicyRoleOption {
        this['description_cn'] = descriptionCn;
        return this;
    }
    public set descriptionCn(descriptionCn: string  | undefined) {
        this['description_cn'] = descriptionCn;
    }
    public get descriptionCn(): string | undefined {
        return this['description_cn'];
    }
    public withPolicy(policy: ServicePolicy): ServicePolicyRoleOption {
        this['policy'] = policy;
        return this;
    }
}