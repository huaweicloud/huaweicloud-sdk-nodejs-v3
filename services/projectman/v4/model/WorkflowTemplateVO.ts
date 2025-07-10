import { WorkflowTemplateFlowsVO } from './WorkflowTemplateFlowsVO';
import { WorkflowTemplateNodesVO } from './WorkflowTemplateNodesVO';


export class WorkflowTemplateVO {
    public processNodes?: Array<WorkflowTemplateNodesVO>;
    public processFlows?: Array<WorkflowTemplateFlowsVO>;
    public constructor() { 
    }
    public withProcessNodes(processNodes: Array<WorkflowTemplateNodesVO>): WorkflowTemplateVO {
        this['processNodes'] = processNodes;
        return this;
    }
    public withProcessFlows(processFlows: Array<WorkflowTemplateFlowsVO>): WorkflowTemplateVO {
        this['processFlows'] = processFlows;
        return this;
    }
}