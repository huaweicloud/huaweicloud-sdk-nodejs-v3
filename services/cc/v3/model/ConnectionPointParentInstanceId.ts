

export class ConnectionPointParentInstanceId {
    private 'parent_instance_id'?: string;
    public constructor() { 
    }
    public withParentInstanceId(parentInstanceId: string): ConnectionPointParentInstanceId {
        this['parent_instance_id'] = parentInstanceId;
        return this;
    }
    public set parentInstanceId(parentInstanceId: string  | undefined) {
        this['parent_instance_id'] = parentInstanceId;
    }
    public get parentInstanceId(): string | undefined {
        return this['parent_instance_id'];
    }
}