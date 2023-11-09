import { InstanceCreationVariables } from './InstanceCreationVariables';


export class InstanceCreation {
    public name?: string;
    public desc?: string;
    public diagram?: string;
    public image?: string;
    private 'template_id'?: string;
    public variables?: InstanceCreationVariables;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withName(name: string): InstanceCreation {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): InstanceCreation {
        this['desc'] = desc;
        return this;
    }
    public withDiagram(diagram: string): InstanceCreation {
        this['diagram'] = diagram;
        return this;
    }
    public withImage(image: string): InstanceCreation {
        this['image'] = image;
        return this;
    }
    public withTemplateId(templateId: string): InstanceCreation {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withVariables(variables: InstanceCreationVariables): InstanceCreation {
        this['variables'] = variables;
        return this;
    }
    public withInstanceId(instanceId: string): InstanceCreation {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}