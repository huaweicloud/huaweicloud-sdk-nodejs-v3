import { DataRequirement } from './DataRequirement';
import { StepExecution } from './StepExecution';
import { WorkflowDagPolicies } from './WorkflowDagPolicies';
import { WorkflowParameter } from './WorkflowParameter';
import { WorkflowSubgraph } from './WorkflowSubgraph';


export class WorkflowExecution {
    private 'created_at'?: string;
    public name?: string;
    private 'execution_id'?: string;
    public description?: string;
    public status?: string;
    private 'workspace_id'?: string;
    private 'workflow_id'?: string;
    private 'workflow_name'?: string;
    private 'scene_id'?: string;
    private 'scene_name'?: string;
    private 'steps_execution'?: Array<StepExecution>;
    private 'sub_graphs'?: Array<WorkflowSubgraph>;
    public duration?: string;
    public events?: Array<string>;
    public labels?: Array<string>;
    private 'data_requirements'?: Array<DataRequirement>;
    public parameters?: Array<WorkflowParameter>;
    public policies?: WorkflowDagPolicies;
    public constructor() { 
    }
    public withCreatedAt(createdAt: string): WorkflowExecution {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withName(name: string): WorkflowExecution {
        this['name'] = name;
        return this;
    }
    public withExecutionId(executionId: string): WorkflowExecution {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withDescription(description: string): WorkflowExecution {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): WorkflowExecution {
        this['status'] = status;
        return this;
    }
    public withWorkspaceId(workspaceId: string): WorkflowExecution {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkflowId(workflowId: string): WorkflowExecution {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withWorkflowName(workflowName: string): WorkflowExecution {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string  | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName(): string | undefined {
        return this['workflow_name'];
    }
    public withSceneId(sceneId: string): WorkflowExecution {
        this['scene_id'] = sceneId;
        return this;
    }
    public set sceneId(sceneId: string  | undefined) {
        this['scene_id'] = sceneId;
    }
    public get sceneId(): string | undefined {
        return this['scene_id'];
    }
    public withSceneName(sceneName: string): WorkflowExecution {
        this['scene_name'] = sceneName;
        return this;
    }
    public set sceneName(sceneName: string  | undefined) {
        this['scene_name'] = sceneName;
    }
    public get sceneName(): string | undefined {
        return this['scene_name'];
    }
    public withStepsExecution(stepsExecution: Array<StepExecution>): WorkflowExecution {
        this['steps_execution'] = stepsExecution;
        return this;
    }
    public set stepsExecution(stepsExecution: Array<StepExecution>  | undefined) {
        this['steps_execution'] = stepsExecution;
    }
    public get stepsExecution(): Array<StepExecution> | undefined {
        return this['steps_execution'];
    }
    public withSubGraphs(subGraphs: Array<WorkflowSubgraph>): WorkflowExecution {
        this['sub_graphs'] = subGraphs;
        return this;
    }
    public set subGraphs(subGraphs: Array<WorkflowSubgraph>  | undefined) {
        this['sub_graphs'] = subGraphs;
    }
    public get subGraphs(): Array<WorkflowSubgraph> | undefined {
        return this['sub_graphs'];
    }
    public withDuration(duration: string): WorkflowExecution {
        this['duration'] = duration;
        return this;
    }
    public withEvents(events: Array<string>): WorkflowExecution {
        this['events'] = events;
        return this;
    }
    public withLabels(labels: Array<string>): WorkflowExecution {
        this['labels'] = labels;
        return this;
    }
    public withDataRequirements(dataRequirements: Array<DataRequirement>): WorkflowExecution {
        this['data_requirements'] = dataRequirements;
        return this;
    }
    public set dataRequirements(dataRequirements: Array<DataRequirement>  | undefined) {
        this['data_requirements'] = dataRequirements;
    }
    public get dataRequirements(): Array<DataRequirement> | undefined {
        return this['data_requirements'];
    }
    public withParameters(parameters: Array<WorkflowParameter>): WorkflowExecution {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicies(policies: WorkflowDagPolicies): WorkflowExecution {
        this['policies'] = policies;
        return this;
    }
}