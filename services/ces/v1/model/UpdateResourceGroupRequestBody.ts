import { CreateResourceGroup } from './CreateResourceGroup';


export class UpdateResourceGroupRequestBody {
    private 'group_name'?: string;
    public resources?: Array<CreateResourceGroup>;
    public constructor(groupName?: string, resources?: Array<CreateResourceGroup>) { 
        this['group_name'] = groupName;
        this['resources'] = resources;
    }
    public withGroupName(groupName: string): UpdateResourceGroupRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withResources(resources: Array<CreateResourceGroup>): UpdateResourceGroupRequestBody {
        this['resources'] = resources;
        return this;
    }
}