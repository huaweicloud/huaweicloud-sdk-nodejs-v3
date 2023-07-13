
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronAddRouterInterfaceResponse extends SdkResponse {
    private 'port_id'?: string | undefined;
    private 'subnet_id'?: NeutronAddRouterInterfaceResponseSubnetIdEnum | undefined;
    private 'tenant_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    public id?: string;
    public constructor() { 
        super();
    }
    public withPortId(portId: string): NeutronAddRouterInterfaceResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withSubnetId(subnetId: NeutronAddRouterInterfaceResponseSubnetIdEnum): NeutronAddRouterInterfaceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: NeutronAddRouterInterfaceResponseSubnetIdEnum | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withTenantId(tenantId: string): NeutronAddRouterInterfaceResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronAddRouterInterfaceResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withId(id: string): NeutronAddRouterInterfaceResponse {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NeutronAddRouterInterfaceResponseSubnetIdEnum {
    E_0_9A_F8__0_9A_F4__0_9A_F4__0_9A_F4__0_9A_F12 = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'
}
