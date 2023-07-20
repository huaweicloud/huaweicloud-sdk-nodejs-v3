

export class ListEngineSupportFeaturesPropertiesEntity {
    private 'max_task'?: string;
    private 'min_task'?: string;
    private 'max_node'?: string;
    private 'min_node'?: string;
    public constructor() { 
    }
    public withMaxTask(maxTask: string): ListEngineSupportFeaturesPropertiesEntity {
        this['max_task'] = maxTask;
        return this;
    }
    public set maxTask(maxTask: string  | undefined) {
        this['max_task'] = maxTask;
    }
    public get maxTask(): string | undefined {
        return this['max_task'];
    }
    public withMinTask(minTask: string): ListEngineSupportFeaturesPropertiesEntity {
        this['min_task'] = minTask;
        return this;
    }
    public set minTask(minTask: string  | undefined) {
        this['min_task'] = minTask;
    }
    public get minTask(): string | undefined {
        return this['min_task'];
    }
    public withMaxNode(maxNode: string): ListEngineSupportFeaturesPropertiesEntity {
        this['max_node'] = maxNode;
        return this;
    }
    public set maxNode(maxNode: string  | undefined) {
        this['max_node'] = maxNode;
    }
    public get maxNode(): string | undefined {
        return this['max_node'];
    }
    public withMinNode(minNode: string): ListEngineSupportFeaturesPropertiesEntity {
        this['min_node'] = minNode;
        return this;
    }
    public set minNode(minNode: string  | undefined) {
        this['min_node'] = minNode;
    }
    public get minNode(): string | undefined {
        return this['min_node'];
    }
}