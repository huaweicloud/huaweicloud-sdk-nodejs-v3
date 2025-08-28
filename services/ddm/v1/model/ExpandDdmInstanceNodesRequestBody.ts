import { EnlargeNodeInfo } from './EnlargeNodeInfo';


export class ExpandDdmInstanceNodesRequestBody {
    private 'group_id'?: string;
    private 'subnet_id'?: string;
    private 'is_auto_pay'?: boolean;
    public nodes?: Array<EnlargeNodeInfo>;
    public constructor(nodes?: Array<EnlargeNodeInfo>) { 
        this['nodes'] = nodes;
    }
    public withGroupId(groupId: string): ExpandDdmInstanceNodesRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withSubnetId(subnetId: string): ExpandDdmInstanceNodesRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIsAutoPay(isAutoPay: boolean): ExpandDdmInstanceNodesRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withNodes(nodes: Array<EnlargeNodeInfo>): ExpandDdmInstanceNodesRequestBody {
        this['nodes'] = nodes;
        return this;
    }
}