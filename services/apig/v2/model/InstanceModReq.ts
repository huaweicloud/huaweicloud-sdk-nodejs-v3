import { InstanceAbstractReq } from './InstanceAbstractReq';


export class InstanceModReq {
    public description?: string;
    private 'maintain_begin'?: string;
    private 'maintain_end'?: string;
    private 'instance_name'?: string;
    private 'security_group_id'?: string;
    private 'vpcep_service_name'?: string;
    public constructor() { 
    }
    public withDescription(description: string): InstanceModReq {
        this['description'] = description;
        return this;
    }
    public withMaintainBegin(maintainBegin: string): InstanceModReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string  | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin(): string | undefined {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): InstanceModReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string  | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd(): string | undefined {
        return this['maintain_end'];
    }
    public withInstanceName(instanceName: string): InstanceModReq {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withSecurityGroupId(securityGroupId: string): InstanceModReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withVpcepServiceName(vpcepServiceName: string): InstanceModReq {
        this['vpcep_service_name'] = vpcepServiceName;
        return this;
    }
    public set vpcepServiceName(vpcepServiceName: string  | undefined) {
        this['vpcep_service_name'] = vpcepServiceName;
    }
    public get vpcepServiceName(): string | undefined {
        return this['vpcep_service_name'];
    }
}