import { StageVo } from './StageVo';


export class DeployVo {
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'node_partner_alias'?: string;
    private 'node_type'?: DeployVoNodeTypeEnum | string;
    public stages?: Array<StageVo>;
    public constructor(nodeId?: string, nodeName?: string, nodePartnerAlias?: string) { 
        this['node_id'] = nodeId;
        this['node_name'] = nodeName;
        this['node_partner_alias'] = nodePartnerAlias;
    }
    public withNodeId(nodeId: string): DeployVo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): DeployVo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodePartnerAlias(nodePartnerAlias: string): DeployVo {
        this['node_partner_alias'] = nodePartnerAlias;
        return this;
    }
    public set nodePartnerAlias(nodePartnerAlias: string  | undefined) {
        this['node_partner_alias'] = nodePartnerAlias;
    }
    public get nodePartnerAlias(): string | undefined {
        return this['node_partner_alias'];
    }
    public withNodeType(nodeType: DeployVoNodeTypeEnum | string): DeployVo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: DeployVoNodeTypeEnum | string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): DeployVoNodeTypeEnum | string | undefined {
        return this['node_type'];
    }
    public withStages(stages: Array<StageVo>): DeployVo {
        this['stages'] = stages;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeployVoNodeTypeEnum {
    AGENT = 'AGENT',
    AGG = 'AGG',
    AGG_MANAGER = 'AGG_MANAGER',
    SERVER = 'SERVER'
}
