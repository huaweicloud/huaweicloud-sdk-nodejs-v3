

export class ListCustomerIpsRequest {
    private 'action_type'?: number;
    private 'affected_os'?: number;
    private 'attack_type'?: number;
    private 'ips_name'?: string;
    private 'ips_id'?: string;
    public protocol?: number;
    public severity?: number;
    public software?: number;
    private 'object_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'fw_instance_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'project_id'?: string;
    public constructor(objectId?: string, fwInstanceId?: string, limit?: number, offset?: number, projectId?: string) { 
        this['object_id'] = objectId;
        this['fw_instance_id'] = fwInstanceId;
        this['limit'] = limit;
        this['offset'] = offset;
        this['project_id'] = projectId;
    }
    public withActionType(actionType: number): ListCustomerIpsRequest {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: number  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): number | undefined {
        return this['action_type'];
    }
    public withAffectedOs(affectedOs: number): ListCustomerIpsRequest {
        this['affected_os'] = affectedOs;
        return this;
    }
    public set affectedOs(affectedOs: number  | undefined) {
        this['affected_os'] = affectedOs;
    }
    public get affectedOs(): number | undefined {
        return this['affected_os'];
    }
    public withAttackType(attackType: number): ListCustomerIpsRequest {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: number  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): number | undefined {
        return this['attack_type'];
    }
    public withIpsName(ipsName: string): ListCustomerIpsRequest {
        this['ips_name'] = ipsName;
        return this;
    }
    public set ipsName(ipsName: string  | undefined) {
        this['ips_name'] = ipsName;
    }
    public get ipsName(): string | undefined {
        return this['ips_name'];
    }
    public withIpsId(ipsId: string): ListCustomerIpsRequest {
        this['ips_id'] = ipsId;
        return this;
    }
    public set ipsId(ipsId: string  | undefined) {
        this['ips_id'] = ipsId;
    }
    public get ipsId(): string | undefined {
        return this['ips_id'];
    }
    public withProtocol(protocol: number): ListCustomerIpsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withSeverity(severity: number): ListCustomerIpsRequest {
        this['severity'] = severity;
        return this;
    }
    public withSoftware(software: number): ListCustomerIpsRequest {
        this['software'] = software;
        return this;
    }
    public withObjectId(objectId: string): ListCustomerIpsRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCustomerIpsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListCustomerIpsRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withLimit(limit: number): ListCustomerIpsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCustomerIpsRequest {
        this['offset'] = offset;
        return this;
    }
    public withProjectId(projectId: string): ListCustomerIpsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}