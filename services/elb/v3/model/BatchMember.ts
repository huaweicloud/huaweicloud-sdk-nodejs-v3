import { MemberStatus } from './MemberStatus';


export class BatchMember {
    public id: string;
    public name: string;
    private 'project_id': string | undefined;
    private 'admin_state_up': boolean | undefined;
    private 'subnet_cidr_id'?: string | undefined;
    private 'protocol_port': number | undefined;
    public weight: number;
    public address: string;
    private 'operating_status': string | undefined;
    public status?: Array<MemberStatus>;
    private 'member_type'?: string | undefined;
    private 'instance_id'?: string | undefined;
    private 'port_id': string | undefined;
    private 'ret_status': string | undefined;
    public constructor(id?: any, name?: any, projectId?: any, adminStateUp?: any, protocolPort?: any, weight?: any, address?: any, operatingStatus?: any, portId?: any, retStatus?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['admin_state_up'] = adminStateUp;
        this['protocol_port'] = protocolPort;
        this['weight'] = weight;
        this['address'] = address;
        this['operating_status'] = operatingStatus;
        this['port_id'] = portId;
        this['ret_status'] = retStatus;
    }
    public withId(id: string): BatchMember {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchMember {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): BatchMember {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): BatchMember {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withSubnetCidrId(subnetCidrId: string): BatchMember {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId() {
        return this['subnet_cidr_id'];
    }
    public withProtocolPort(protocolPort: number): BatchMember {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withWeight(weight: number): BatchMember {
        this['weight'] = weight;
        return this;
    }
    public withAddress(address: string): BatchMember {
        this['address'] = address;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): BatchMember {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
    public withStatus(status: Array<MemberStatus>): BatchMember {
        this['status'] = status;
        return this;
    }
    public withMemberType(memberType: string): BatchMember {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: string | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType() {
        return this['member_type'];
    }
    public withInstanceId(instanceId: string): BatchMember {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withPortId(portId: string): BatchMember {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withRetStatus(retStatus: string): BatchMember {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: string | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus() {
        return this['ret_status'];
    }
}