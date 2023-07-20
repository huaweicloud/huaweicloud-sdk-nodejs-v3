import { CheckpointCreateSkippedResource } from './CheckpointCreateSkippedResource';
import { CheckpointResourceResp } from './CheckpointResourceResp';


export class CheckpointPlanCreate {
    public id?: string;
    public name?: string;
    public resources?: Array<CheckpointResourceResp>;
    private 'skipped_resources'?: Array<CheckpointCreateSkippedResource>;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): CheckpointPlanCreate {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CheckpointPlanCreate {
        this['name'] = name;
        return this;
    }
    public withResources(resources: Array<CheckpointResourceResp>): CheckpointPlanCreate {
        this['resources'] = resources;
        return this;
    }
    public withSkippedResources(skippedResources: Array<CheckpointCreateSkippedResource>): CheckpointPlanCreate {
        this['skipped_resources'] = skippedResources;
        return this;
    }
    public set skippedResources(skippedResources: Array<CheckpointCreateSkippedResource>  | undefined) {
        this['skipped_resources'] = skippedResources;
    }
    public get skippedResources(): Array<CheckpointCreateSkippedResource> | undefined {
        return this['skipped_resources'];
    }
}