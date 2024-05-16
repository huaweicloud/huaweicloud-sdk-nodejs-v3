

export class ResourceCheckResource {
    private 'enterprise_project_id'?: string;
    private 'instance_num'?: number;
    public mode?: ResourceCheckResourceModeEnum | string;
    private 'availability_zone_mode'?: string;
    private 'fe_node_num'?: number;
    private 'be_node_num'?: number;
    private 'fe_flavor_ref'?: string;
    private 'be_flavor_ref'?: string;
    private 'availability_zone'?: string;
    private 'subnet_id'?: string;
    public constructor(enterpriseProjectId?: string, instanceNum?: number, mode?: string, availabilityZoneMode?: string, feNodeNum?: number, beNodeNum?: number, feFlavorRef?: string, beFlavorRef?: string, subnetId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['instance_num'] = instanceNum;
        this['mode'] = mode;
        this['availability_zone_mode'] = availabilityZoneMode;
        this['fe_node_num'] = feNodeNum;
        this['be_node_num'] = beNodeNum;
        this['fe_flavor_ref'] = feFlavorRef;
        this['be_flavor_ref'] = beFlavorRef;
        this['subnet_id'] = subnetId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ResourceCheckResource {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInstanceNum(instanceNum: number): ResourceCheckResource {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withMode(mode: ResourceCheckResourceModeEnum | string): ResourceCheckResource {
        this['mode'] = mode;
        return this;
    }
    public withAvailabilityZoneMode(availabilityZoneMode: string): ResourceCheckResource {
        this['availability_zone_mode'] = availabilityZoneMode;
        return this;
    }
    public set availabilityZoneMode(availabilityZoneMode: string  | undefined) {
        this['availability_zone_mode'] = availabilityZoneMode;
    }
    public get availabilityZoneMode(): string | undefined {
        return this['availability_zone_mode'];
    }
    public withFeNodeNum(feNodeNum: number): ResourceCheckResource {
        this['fe_node_num'] = feNodeNum;
        return this;
    }
    public set feNodeNum(feNodeNum: number  | undefined) {
        this['fe_node_num'] = feNodeNum;
    }
    public get feNodeNum(): number | undefined {
        return this['fe_node_num'];
    }
    public withBeNodeNum(beNodeNum: number): ResourceCheckResource {
        this['be_node_num'] = beNodeNum;
        return this;
    }
    public set beNodeNum(beNodeNum: number  | undefined) {
        this['be_node_num'] = beNodeNum;
    }
    public get beNodeNum(): number | undefined {
        return this['be_node_num'];
    }
    public withFeFlavorRef(feFlavorRef: string): ResourceCheckResource {
        this['fe_flavor_ref'] = feFlavorRef;
        return this;
    }
    public set feFlavorRef(feFlavorRef: string  | undefined) {
        this['fe_flavor_ref'] = feFlavorRef;
    }
    public get feFlavorRef(): string | undefined {
        return this['fe_flavor_ref'];
    }
    public withBeFlavorRef(beFlavorRef: string): ResourceCheckResource {
        this['be_flavor_ref'] = beFlavorRef;
        return this;
    }
    public set beFlavorRef(beFlavorRef: string  | undefined) {
        this['be_flavor_ref'] = beFlavorRef;
    }
    public get beFlavorRef(): string | undefined {
        return this['be_flavor_ref'];
    }
    public withAvailabilityZone(availabilityZone: string): ResourceCheckResource {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSubnetId(subnetId: string): ResourceCheckResource {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceCheckResourceModeEnum {
    CLUSTER = 'Cluster',
    SINGLE = 'Single'
}
