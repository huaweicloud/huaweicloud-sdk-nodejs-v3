import { TicsAgentDeploy } from './TicsAgentDeploy';
import { TicsAgentDeployBcs } from './TicsAgentDeployBcs';
import { TicsAgentDeployDetail } from './TicsAgentDeployDetail';
import { TicsAgentNatCommonInfo } from './TicsAgentNatCommonInfo';
import { TicsAgentNodeInfo } from './TicsAgentNodeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgentDetailResponse extends SdkResponse {
    private 'agent_deploy'?: TicsAgentDeploy;
    private 'agent_deploy_bcs'?: TicsAgentDeployBcs;
    private 'agent_deploy_detail'?: TicsAgentDeployDetail;
    private 'agent_deploy_nat'?: TicsAgentNatCommonInfo;
    private 'agent_deploy_node'?: TicsAgentNodeInfo;
    public constructor() { 
        super();
    }
    public withAgentDeploy(agentDeploy: TicsAgentDeploy): ShowAgentDetailResponse {
        this['agent_deploy'] = agentDeploy;
        return this;
    }
    public set agentDeploy(agentDeploy: TicsAgentDeploy  | undefined) {
        this['agent_deploy'] = agentDeploy;
    }
    public get agentDeploy(): TicsAgentDeploy | undefined {
        return this['agent_deploy'];
    }
    public withAgentDeployBcs(agentDeployBcs: TicsAgentDeployBcs): ShowAgentDetailResponse {
        this['agent_deploy_bcs'] = agentDeployBcs;
        return this;
    }
    public set agentDeployBcs(agentDeployBcs: TicsAgentDeployBcs  | undefined) {
        this['agent_deploy_bcs'] = agentDeployBcs;
    }
    public get agentDeployBcs(): TicsAgentDeployBcs | undefined {
        return this['agent_deploy_bcs'];
    }
    public withAgentDeployDetail(agentDeployDetail: TicsAgentDeployDetail): ShowAgentDetailResponse {
        this['agent_deploy_detail'] = agentDeployDetail;
        return this;
    }
    public set agentDeployDetail(agentDeployDetail: TicsAgentDeployDetail  | undefined) {
        this['agent_deploy_detail'] = agentDeployDetail;
    }
    public get agentDeployDetail(): TicsAgentDeployDetail | undefined {
        return this['agent_deploy_detail'];
    }
    public withAgentDeployNat(agentDeployNat: TicsAgentNatCommonInfo): ShowAgentDetailResponse {
        this['agent_deploy_nat'] = agentDeployNat;
        return this;
    }
    public set agentDeployNat(agentDeployNat: TicsAgentNatCommonInfo  | undefined) {
        this['agent_deploy_nat'] = agentDeployNat;
    }
    public get agentDeployNat(): TicsAgentNatCommonInfo | undefined {
        return this['agent_deploy_nat'];
    }
    public withAgentDeployNode(agentDeployNode: TicsAgentNodeInfo): ShowAgentDetailResponse {
        this['agent_deploy_node'] = agentDeployNode;
        return this;
    }
    public set agentDeployNode(agentDeployNode: TicsAgentNodeInfo  | undefined) {
        this['agent_deploy_node'] = agentDeployNode;
    }
    public get agentDeployNode(): TicsAgentNodeInfo | undefined {
        return this['agent_deploy_node'];
    }
}