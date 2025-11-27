import { Tag } from './Tag';


export class CreateTransitSubnetOption {
    public name?: string;
    public description?: string;
    private 'virsubnet_id'?: string;
    private 'virsubnet_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor(name?: string, virsubnetId?: string, virsubnetProjectId?: string) { 
        this['name'] = name;
        this['virsubnet_id'] = virsubnetId;
        this['virsubnet_project_id'] = virsubnetProjectId;
    }
    public withName(name: string): CreateTransitSubnetOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateTransitSubnetOption {
        this['description'] = description;
        return this;
    }
    public withVirsubnetId(virsubnetId: string): CreateTransitSubnetOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withVirsubnetProjectId(virsubnetProjectId: string): CreateTransitSubnetOption {
        this['virsubnet_project_id'] = virsubnetProjectId;
        return this;
    }
    public set virsubnetProjectId(virsubnetProjectId: string  | undefined) {
        this['virsubnet_project_id'] = virsubnetProjectId;
    }
    public get virsubnetProjectId(): string | undefined {
        return this['virsubnet_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateTransitSubnetOption {
        this['tags'] = tags;
        return this;
    }
}