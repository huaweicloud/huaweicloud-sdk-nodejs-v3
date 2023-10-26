import { Metadata } from './Metadata';


export class Node {
    private 'parent_node'?: string;
    public category?: string;
    public description?: string;
    public id?: string;
    private 'ignore_error'?: boolean;
    public metadata?: Metadata;
    public name?: string;
    private 'task_name'?: string;
    public constructor() { 
    }
    public withParentNode(parentNode: string): Node {
        this['parent_node'] = parentNode;
        return this;
    }
    public set parentNode(parentNode: string  | undefined) {
        this['parent_node'] = parentNode;
    }
    public get parentNode(): string | undefined {
        return this['parent_node'];
    }
    public withCategory(category: string): Node {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): Node {
        this['description'] = description;
        return this;
    }
    public withId(id: string): Node {
        this['id'] = id;
        return this;
    }
    public withIgnoreError(ignoreError: boolean): Node {
        this['ignore_error'] = ignoreError;
        return this;
    }
    public set ignoreError(ignoreError: boolean  | undefined) {
        this['ignore_error'] = ignoreError;
    }
    public get ignoreError(): boolean | undefined {
        return this['ignore_error'];
    }
    public withMetadata(metadata: Metadata): Node {
        this['metadata'] = metadata;
        return this;
    }
    public withName(name: string): Node {
        this['name'] = name;
        return this;
    }
    public withTaskName(taskName: string): Node {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
}