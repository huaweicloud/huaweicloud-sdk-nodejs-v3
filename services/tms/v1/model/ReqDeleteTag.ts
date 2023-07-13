import { DeleteTagRequest } from './DeleteTagRequest';
import { ResourceTagBody } from './ResourceTagBody';


export class ReqDeleteTag {
    private 'project_id'?: string | undefined;
    public resources: Array<ResourceTagBody>;
    public tags: Array<DeleteTagRequest>;
    public constructor(resources?: any, tags?: any) { 
        this['resources'] = resources;
        this['tags'] = tags;
    }
    public withProjectId(projectId: string): ReqDeleteTag {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withResources(resources: Array<ResourceTagBody>): ReqDeleteTag {
        this['resources'] = resources;
        return this;
    }
    public withTags(tags: Array<DeleteTagRequest>): ReqDeleteTag {
        this['tags'] = tags;
        return this;
    }
}