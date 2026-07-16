import { DataRequirementResp } from './DataRequirementResp';
import { StepExecutionResp } from './StepExecutionResp';
import { WorkflowDagPoliciesResp } from './WorkflowDagPoliciesResp';
import { WorkflowParameterResp } from './WorkflowParameterResp';
import { WorkflowSubgraphResp } from './WorkflowSubgraphResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkflowExecutionResponse extends SdkResponse {
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
    private 'steps_execution'?: Array<StepExecutionResp>;
    private 'sub_graphs'?: Array<WorkflowSubgraphResp>;
    public duration?: string;
    public events?: Array<string>;
    public labels?: Array<string>;
    private 'data_requirements'?: Array<DataRequirementResp>;
    public parameters?: Array<WorkflowParameterResp>;
    public policies?: WorkflowDagPoliciesResp;
    public constructor() { 
        super();
    }
    public withCreatedAt(createdAt: string): UpdateWorkflowExecutionResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withName(name: string): UpdateWorkflowExecutionResponse {
        this['name'] = name;
        return this;
    }
    public withExecutionId(executionId: string): UpdateWorkflowExecutionResponse {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withDescription(description: string): UpdateWorkflowExecutionResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): UpdateWorkflowExecutionResponse {
        this['status'] = status;
        return this;
    }
    public withWorkspaceId(workspaceId: string): UpdateWorkflowExecutionResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkflowId(workflowId: string): UpdateWorkflowExecutionResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withWorkflowName(workflowName: string): UpdateWorkflowExecutionResponse {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string  | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName(): string | undefined {
        return this['workflow_name'];
    }
    public withSceneId(sceneId: string): UpdateWorkflowExecutionResponse {
        this['scene_id'] = sceneId;
        return this;
    }
    public set sceneId(sceneId: string  | undefined) {
        this['scene_id'] = sceneId;
    }
    public get sceneId(): string | undefined {
        return this['scene_id'];
    }
    public withSceneName(sceneName: string): UpdateWorkflowExecutionResponse {
        this['scene_name'] = sceneName;
        return this;
    }
    public set sceneName(sceneName: string  | undefined) {
        this['scene_name'] = sceneName;
    }
    public get sceneName(): string | undefined {
        return this['scene_name'];
    }
    public withStepsExecution(stepsExecution: Array<StepExecutionResp>): UpdateWorkflowExecutionResponse {
        this['steps_execution'] = stepsExecution;
        return this;
    }
    public set stepsExecution(stepsExecution: Array<StepExecutionResp>  | undefined) {
        this['steps_execution'] = stepsExecution;
    }
    public get stepsExecution(): Array<StepExecutionResp> | undefined {
        return this['steps_execution'];
    }
    public withSubGraphs(subGraphs: Array<WorkflowSubgraphResp>): UpdateWorkflowExecutionResponse {
        this['sub_graphs'] = subGraphs;
        return this;
    }
    public set subGraphs(subGraphs: Array<WorkflowSubgraphResp>  | undefined) {
        this['sub_graphs'] = subGraphs;
    }
    public get subGraphs(): Array<WorkflowSubgraphResp> | undefined {
        return this['sub_graphs'];
    }
    public withDuration(duration: string): UpdateWorkflowExecutionResponse {
        this['duration'] = duration;
        return this;
    }
    public withEvents(events: Array<string>): UpdateWorkflowExecutionResponse {
        this['events'] = events;
        return this;
    }
    public withLabels(labels: Array<string>): UpdateWorkflowExecutionResponse {
        this['labels'] = labels;
        return this;
    }
    public withDataRequirements(dataRequirements: Array<DataRequirementResp>): UpdateWorkflowExecutionResponse {
        this['data_requirements'] = dataRequirements;
        return this;
    }
    public set dataRequirements(dataRequirements: Array<DataRequirementResp>  | undefined) {
        this['data_requirements'] = dataRequirements;
    }
    public get dataRequirements(): Array<DataRequirementResp> | undefined {
        return this['data_requirements'];
    }
    public withParameters(parameters: Array<WorkflowParameterResp>): UpdateWorkflowExecutionResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withPolicies(policies: WorkflowDagPoliciesResp): UpdateWorkflowExecutionResponse {
        this['policies'] = policies;
        return this;
    }
}