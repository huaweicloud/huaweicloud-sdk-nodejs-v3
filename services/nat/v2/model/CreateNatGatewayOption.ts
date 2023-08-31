import { SessionConfiguration } from './SessionConfiguration';


export class CreateNatGatewayOption {
    public name?: string;
    private 'router_id'?: string;
    private 'internal_network_id'?: string;
    public description?: string;
    public spec?: CreateNatGatewayOptionSpecEnum | string;
    private 'enterprise_project_id'?: string;
    private 'session_conf'?: SessionConfiguration;
    public constructor(name?: string, routerId?: string, internalNetworkId?: string, spec?: string) { 
        this['name'] = name;
        this['router_id'] = routerId;
        this['internal_network_id'] = internalNetworkId;
        this['spec'] = spec;
    }
    public withName(name: string): CreateNatGatewayOption {
        this['name'] = name;
        return this;
    }
    public withRouterId(routerId: string): CreateNatGatewayOption {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withInternalNetworkId(internalNetworkId: string): CreateNatGatewayOption {
        this['internal_network_id'] = internalNetworkId;
        return this;
    }
    public set internalNetworkId(internalNetworkId: string  | undefined) {
        this['internal_network_id'] = internalNetworkId;
    }
    public get internalNetworkId(): string | undefined {
        return this['internal_network_id'];
    }
    public withDescription(description: string): CreateNatGatewayOption {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: CreateNatGatewayOptionSpecEnum | string): CreateNatGatewayOption {
        this['spec'] = spec;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateNatGatewayOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSessionConf(sessionConf: SessionConfiguration): CreateNatGatewayOption {
        this['session_conf'] = sessionConf;
        return this;
    }
    public set sessionConf(sessionConf: SessionConfiguration  | undefined) {
        this['session_conf'] = sessionConf;
    }
    public get sessionConf(): SessionConfiguration | undefined {
        return this['session_conf'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNatGatewayOptionSpecEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4'
}
