import { Data } from './Data';
import { DataRequirement } from './DataRequirement';
import { ExecutionBrief } from './ExecutionBrief';
import { WorkflowAsset } from './WorkflowAsset';
import { WorkflowGallerySubscription } from './WorkflowGallerySubscription';
import { WorkflowParameter } from './WorkflowParameter';
import { WorkflowPolicy } from './WorkflowPolicy';
import { WorkflowServicePackege } from './WorkflowServicePackege';
import { WorkflowStep } from './WorkflowStep';
import { WorkflowStorage } from './WorkflowStorage';
import { WorkflowSubgraph } from './WorkflowSubgraph';


export class WorkflowParam {
    public name?: string;
    public description?: string;
    public steps?: Array<WorkflowStep>;
    private 'user_name'?: string;
    private 'workspace_id'?: string;
    private 'data_requirements'?: Array<DataRequirement>;
    public data?: Array<Data>;
    public parameters?: Array<WorkflowParameter>;
    private 'source_workflow_id'?: string;
    private 'gallery_subscription'?: WorkflowGallerySubscription;
    private 'latest_execution'?: ExecutionBrief;
    private 'run_count'?: number;
    private 'param_ready'?: boolean;
    public source?: string;
    public storages?: Array<WorkflowStorage>;
    public labels?: Array<string>;
    public assets?: Array<WorkflowAsset>;
    private 'sub_graphs'?: Array<WorkflowSubgraph>;
    public extend?: { [key: string]: object; };
    public policy?: WorkflowPolicy;
    private 'with_subscription'?: boolean;
    private 'smn_switch'?: boolean;
    private 'subscription_id'?: string;
    private 'exeml_template_id'?: string;
    private 'last_modified_at'?: string;
    private 'package'?: WorkflowServicePackege;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): WorkflowParam {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WorkflowParam {
        this['description'] = description;
        return this;
    }
    public withSteps(steps: Array<WorkflowStep>): WorkflowParam {
        this['steps'] = steps;
        return this;
    }
    public withUserName(userName: string): WorkflowParam {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withWorkspaceId(workspaceId: string): WorkflowParam {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataRequirements(dataRequirements: Array<DataRequirement>): WorkflowParam {
        this['data_requirements'] = dataRequirements;
        return this;
    }
    public set dataRequirements(dataRequirements: Array<DataRequirement>  | undefined) {
        this['data_requirements'] = dataRequirements;
    }
    public get dataRequirements(): Array<DataRequirement> | undefined {
        return this['data_requirements'];
    }
    public withData(data: Array<Data>): WorkflowParam {
        this['data'] = data;
        return this;
    }
    public withParameters(parameters: Array<WorkflowParameter>): WorkflowParam {
        this['parameters'] = parameters;
        return this;
    }
    public withSourceWorkflowId(sourceWorkflowId: string): WorkflowParam {
        this['source_workflow_id'] = sourceWorkflowId;
        return this;
    }
    public set sourceWorkflowId(sourceWorkflowId: string  | undefined) {
        this['source_workflow_id'] = sourceWorkflowId;
    }
    public get sourceWorkflowId(): string | undefined {
        return this['source_workflow_id'];
    }
    public withGallerySubscription(gallerySubscription: WorkflowGallerySubscription): WorkflowParam {
        this['gallery_subscription'] = gallerySubscription;
        return this;
    }
    public set gallerySubscription(gallerySubscription: WorkflowGallerySubscription  | undefined) {
        this['gallery_subscription'] = gallerySubscription;
    }
    public get gallerySubscription(): WorkflowGallerySubscription | undefined {
        return this['gallery_subscription'];
    }
    public withLatestExecution(latestExecution: ExecutionBrief): WorkflowParam {
        this['latest_execution'] = latestExecution;
        return this;
    }
    public set latestExecution(latestExecution: ExecutionBrief  | undefined) {
        this['latest_execution'] = latestExecution;
    }
    public get latestExecution(): ExecutionBrief | undefined {
        return this['latest_execution'];
    }
    public withRunCount(runCount: number): WorkflowParam {
        this['run_count'] = runCount;
        return this;
    }
    public set runCount(runCount: number  | undefined) {
        this['run_count'] = runCount;
    }
    public get runCount(): number | undefined {
        return this['run_count'];
    }
    public withParamReady(paramReady: boolean): WorkflowParam {
        this['param_ready'] = paramReady;
        return this;
    }
    public set paramReady(paramReady: boolean  | undefined) {
        this['param_ready'] = paramReady;
    }
    public get paramReady(): boolean | undefined {
        return this['param_ready'];
    }
    public withSource(source: string): WorkflowParam {
        this['source'] = source;
        return this;
    }
    public withStorages(storages: Array<WorkflowStorage>): WorkflowParam {
        this['storages'] = storages;
        return this;
    }
    public withLabels(labels: Array<string>): WorkflowParam {
        this['labels'] = labels;
        return this;
    }
    public withAssets(assets: Array<WorkflowAsset>): WorkflowParam {
        this['assets'] = assets;
        return this;
    }
    public withSubGraphs(subGraphs: Array<WorkflowSubgraph>): WorkflowParam {
        this['sub_graphs'] = subGraphs;
        return this;
    }
    public set subGraphs(subGraphs: Array<WorkflowSubgraph>  | undefined) {
        this['sub_graphs'] = subGraphs;
    }
    public get subGraphs(): Array<WorkflowSubgraph> | undefined {
        return this['sub_graphs'];
    }
    public withExtend(extend: { [key: string]: object; }): WorkflowParam {
        this['extend'] = extend;
        return this;
    }
    public withPolicy(policy: WorkflowPolicy): WorkflowParam {
        this['policy'] = policy;
        return this;
    }
    public withWithSubscription(withSubscription: boolean): WorkflowParam {
        this['with_subscription'] = withSubscription;
        return this;
    }
    public set withSubscription(withSubscription: boolean  | undefined) {
        this['with_subscription'] = withSubscription;
    }
    public get withSubscription(): boolean | undefined {
        return this['with_subscription'];
    }
    public withSmnSwitch(smnSwitch: boolean): WorkflowParam {
        this['smn_switch'] = smnSwitch;
        return this;
    }
    public set smnSwitch(smnSwitch: boolean  | undefined) {
        this['smn_switch'] = smnSwitch;
    }
    public get smnSwitch(): boolean | undefined {
        return this['smn_switch'];
    }
    public withSubscriptionId(subscriptionId: string): WorkflowParam {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withExemlTemplateId(exemlTemplateId: string): WorkflowParam {
        this['exeml_template_id'] = exemlTemplateId;
        return this;
    }
    public set exemlTemplateId(exemlTemplateId: string  | undefined) {
        this['exeml_template_id'] = exemlTemplateId;
    }
    public get exemlTemplateId(): string | undefined {
        return this['exeml_template_id'];
    }
    public withLastModifiedAt(lastModifiedAt: string): WorkflowParam {
        this['last_modified_at'] = lastModifiedAt;
        return this;
    }
    public set lastModifiedAt(lastModifiedAt: string  | undefined) {
        this['last_modified_at'] = lastModifiedAt;
    }
    public get lastModifiedAt(): string | undefined {
        return this['last_modified_at'];
    }
    public withPackage(_package: WorkflowServicePackege): WorkflowParam {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: WorkflowServicePackege  | undefined) {
        this['package'] = _package;
    }
    public get _package(): WorkflowServicePackege | undefined {
        return this['package'];
    }
}