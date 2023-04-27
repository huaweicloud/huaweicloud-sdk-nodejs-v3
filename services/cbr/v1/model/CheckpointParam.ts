import { Resource } from './Resource';


export class CheckpointParam {
    private 'auto_trigger'?: boolean | undefined;
    public description?: string;
    public incremental?: boolean;
    public name?: string;
    public resources?: Array<string>;
    private 'resource_details'?: Array<Resource> | undefined;
    private 'policy_id'?: string | undefined;
    public constructor() { 
    }
    public withAutoTrigger(autoTrigger: boolean): CheckpointParam {
        this['auto_trigger'] = autoTrigger;
        return this;
    }
    public set autoTrigger(autoTrigger: boolean | undefined) {
        this['auto_trigger'] = autoTrigger;
    }
    public get autoTrigger() {
        return this['auto_trigger'];
    }
    public withDescription(description: string): CheckpointParam {
        this['description'] = description;
        return this;
    }
    public withIncremental(incremental: boolean): CheckpointParam {
        this['incremental'] = incremental;
        return this;
    }
    public withName(name: string): CheckpointParam {
        this['name'] = name;
        return this;
    }
    public withResources(resources: Array<string>): CheckpointParam {
        this['resources'] = resources;
        return this;
    }
    public withResourceDetails(resourceDetails: Array<Resource>): CheckpointParam {
        this['resource_details'] = resourceDetails;
        return this;
    }
    public set resourceDetails(resourceDetails: Array<Resource> | undefined) {
        this['resource_details'] = resourceDetails;
    }
    public get resourceDetails() {
        return this['resource_details'];
    }
    public withPolicyId(policyId: string): CheckpointParam {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
}