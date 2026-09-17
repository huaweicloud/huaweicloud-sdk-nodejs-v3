import { FlowsInfoVO } from './FlowsInfoVO';
import { WorkItemFlowProcessInstanceVO } from './WorkItemFlowProcessInstanceVO';
import { WorkItemFlowProcessNodeVO } from './WorkItemFlowProcessNodeVO';


export class WorkItemFlowInfoVO {
    private 'process_instance'?: WorkItemFlowProcessInstanceVO;
    private 'process_nodes'?: Array<WorkItemFlowProcessNodeVO>;
    private 'current_process_node'?: WorkItemFlowProcessNodeVO;
    private 'next_flow'?: Array<FlowsInfoVO>;
    private 'fail_result'?: string;
    public constructor() { 
    }
    public withProcessInstance(processInstance: WorkItemFlowProcessInstanceVO): WorkItemFlowInfoVO {
        this['process_instance'] = processInstance;
        return this;
    }
    public set processInstance(processInstance: WorkItemFlowProcessInstanceVO  | undefined) {
        this['process_instance'] = processInstance;
    }
    public get processInstance(): WorkItemFlowProcessInstanceVO | undefined {
        return this['process_instance'];
    }
    public withProcessNodes(processNodes: Array<WorkItemFlowProcessNodeVO>): WorkItemFlowInfoVO {
        this['process_nodes'] = processNodes;
        return this;
    }
    public set processNodes(processNodes: Array<WorkItemFlowProcessNodeVO>  | undefined) {
        this['process_nodes'] = processNodes;
    }
    public get processNodes(): Array<WorkItemFlowProcessNodeVO> | undefined {
        return this['process_nodes'];
    }
    public withCurrentProcessNode(currentProcessNode: WorkItemFlowProcessNodeVO): WorkItemFlowInfoVO {
        this['current_process_node'] = currentProcessNode;
        return this;
    }
    public set currentProcessNode(currentProcessNode: WorkItemFlowProcessNodeVO  | undefined) {
        this['current_process_node'] = currentProcessNode;
    }
    public get currentProcessNode(): WorkItemFlowProcessNodeVO | undefined {
        return this['current_process_node'];
    }
    public withNextFlow(nextFlow: Array<FlowsInfoVO>): WorkItemFlowInfoVO {
        this['next_flow'] = nextFlow;
        return this;
    }
    public set nextFlow(nextFlow: Array<FlowsInfoVO>  | undefined) {
        this['next_flow'] = nextFlow;
    }
    public get nextFlow(): Array<FlowsInfoVO> | undefined {
        return this['next_flow'];
    }
    public withFailResult(failResult: string): WorkItemFlowInfoVO {
        this['fail_result'] = failResult;
        return this;
    }
    public set failResult(failResult: string  | undefined) {
        this['fail_result'] = failResult;
    }
    public get failResult(): string | undefined {
        return this['fail_result'];
    }
}