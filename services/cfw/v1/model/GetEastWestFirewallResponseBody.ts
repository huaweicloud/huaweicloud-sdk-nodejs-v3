import { ErInstance } from './ErInstance';
import { EwProtectResourceInfo } from './EwProtectResourceInfo';
import { SubnetInfo } from './SubnetInfo';
import { VpcDetail } from './VpcDetail';


export class GetEastWestFirewallResponseBody {
    private 'object_id'?: string;
    private 'project_id'?: string;
    public status?: number;
    private 'firewall_associated_subnets'?: Array<SubnetInfo>;
    public er?: ErInstance;
    private 'inspection_vpc'?: VpcDetail;
    private 'protect_infos'?: Array<EwProtectResourceInfo>;
    public total?: number;
    public offset?: number;
    public limit?: number;
    public mode?: string;
    public constructor() { 
    }
    public withObjectId(objectId: string): GetEastWestFirewallResponseBody {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withProjectId(projectId: string): GetEastWestFirewallResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: number): GetEastWestFirewallResponseBody {
        this['status'] = status;
        return this;
    }
    public withFirewallAssociatedSubnets(firewallAssociatedSubnets: Array<SubnetInfo>): GetEastWestFirewallResponseBody {
        this['firewall_associated_subnets'] = firewallAssociatedSubnets;
        return this;
    }
    public set firewallAssociatedSubnets(firewallAssociatedSubnets: Array<SubnetInfo>  | undefined) {
        this['firewall_associated_subnets'] = firewallAssociatedSubnets;
    }
    public get firewallAssociatedSubnets(): Array<SubnetInfo> | undefined {
        return this['firewall_associated_subnets'];
    }
    public withEr(er: ErInstance): GetEastWestFirewallResponseBody {
        this['er'] = er;
        return this;
    }
    public withInspectionVpc(inspectionVpc: VpcDetail): GetEastWestFirewallResponseBody {
        this['inspection_vpc'] = inspectionVpc;
        return this;
    }
    public set inspectionVpc(inspectionVpc: VpcDetail  | undefined) {
        this['inspection_vpc'] = inspectionVpc;
    }
    public get inspectionVpc(): VpcDetail | undefined {
        return this['inspection_vpc'];
    }
    public withProtectInfos(protectInfos: Array<EwProtectResourceInfo>): GetEastWestFirewallResponseBody {
        this['protect_infos'] = protectInfos;
        return this;
    }
    public set protectInfos(protectInfos: Array<EwProtectResourceInfo>  | undefined) {
        this['protect_infos'] = protectInfos;
    }
    public get protectInfos(): Array<EwProtectResourceInfo> | undefined {
        return this['protect_infos'];
    }
    public withTotal(total: number): GetEastWestFirewallResponseBody {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): GetEastWestFirewallResponseBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): GetEastWestFirewallResponseBody {
        this['limit'] = limit;
        return this;
    }
    public withMode(mode: string): GetEastWestFirewallResponseBody {
        this['mode'] = mode;
        return this;
    }
}