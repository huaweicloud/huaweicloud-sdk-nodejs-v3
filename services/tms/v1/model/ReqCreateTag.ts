import { CreateTagRequest } from './CreateTagRequest';
import { ResourceTagBody } from './ResourceTagBody';


export class ReqCreateTag {
    private 'project_id'?: string | undefined;
    public resources: Array<ResourceTagBody>;
    public tags: Array<CreateTagRequest>;
    public constructor(resources?: any, tags?: any) { 
        this['resources'] = resources;
        this['tags'] = tags;
    }
    public withProjectId(projectId: string): ReqCreateTag {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withResources(resources: Array<ResourceTagBody>): ReqCreateTag {
        this['resources'] = resources;
        return this;
    }
    public withTags(tags: Array<CreateTagRequest>): ReqCreateTag {
        this['tags'] = tags;
        return this;
    }
}