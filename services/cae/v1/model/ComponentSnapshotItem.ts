import { ComponentSnapshotContext } from './ComponentSnapshotContext';


export class ComponentSnapshotItem {
    private 'component_id'?: string;
    public index?: number;
    public context?: ComponentSnapshotContext;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withComponentId(componentId: string): ComponentSnapshotItem {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withIndex(index: number): ComponentSnapshotItem {
        this['index'] = index;
        return this;
    }
    public withContext(context: ComponentSnapshotContext): ComponentSnapshotItem {
        this['context'] = context;
        return this;
    }
    public withCreatedAt(createdAt: Date): ComponentSnapshotItem {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ComponentSnapshotItem {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}