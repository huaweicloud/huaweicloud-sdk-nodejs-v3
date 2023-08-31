import { DownlinkVpcOption } from './DownlinkVpcOption';
import { PrivateTag } from './PrivateTag';


export class CreatePrivateNatOption {
    public name?: string;
    public description?: string;
    public spec?: CreatePrivateNatOptionSpecEnum | string;
    private 'downlink_vpcs'?: Array<DownlinkVpcOption>;
    public tags?: Array<PrivateTag>;
    private 'enterprise_project_id'?: string;
    public constructor(name?: string, downlinkVpcs?: Array<DownlinkVpcOption>) { 
        this['name'] = name;
        this['downlink_vpcs'] = downlinkVpcs;
    }
    public withName(name: string): CreatePrivateNatOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePrivateNatOption {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: CreatePrivateNatOptionSpecEnum | string): CreatePrivateNatOption {
        this['spec'] = spec;
        return this;
    }
    public withDownlinkVpcs(downlinkVpcs: Array<DownlinkVpcOption>): CreatePrivateNatOption {
        this['downlink_vpcs'] = downlinkVpcs;
        return this;
    }
    public set downlinkVpcs(downlinkVpcs: Array<DownlinkVpcOption>  | undefined) {
        this['downlink_vpcs'] = downlinkVpcs;
    }
    public get downlinkVpcs(): Array<DownlinkVpcOption> | undefined {
        return this['downlink_vpcs'];
    }
    public withTags(tags: Array<PrivateTag>): CreatePrivateNatOption {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePrivateNatOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePrivateNatOptionSpecEnum {
    SMALL = 'Small',
    MEDIUM = 'Medium',
    LARGE = 'Large',
    EXTRA_LARGE = 'Extra-large'
}
