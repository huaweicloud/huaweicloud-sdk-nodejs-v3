
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronRemoveRouterInterfaceResponse extends SdkResponse {
    private 'port_id'?: string;
    private 'subnet_id'?: NeutronRemoveRouterInterfaceResponseSubnetIdEnum | string;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withPortId(portId: string): NeutronRemoveRouterInterfaceResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withSubnetId(subnetId: NeutronRemoveRouterInterfaceResponseSubnetIdEnum | string): NeutronRemoveRouterInterfaceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: NeutronRemoveRouterInterfaceResponseSubnetIdEnum | string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): NeutronRemoveRouterInterfaceResponseSubnetIdEnum | string | undefined {
        return this['subnet_id'];
    }
    public withTenantId(tenantId: string): NeutronRemoveRouterInterfaceResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronRemoveRouterInterfaceResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withId(id: string): NeutronRemoveRouterInterfaceResponse {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NeutronRemoveRouterInterfaceResponseSubnetIdEnum {
    E_0_9A_F8__0_9A_F4__0_9A_F4__0_9A_F4__0_9A_F12 = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'
}
