import { NodeConstraint } from './NodeConstraint';


export class NodeConstraints {
    public other?: { [key: string]: object; };
    public master?: NodeConstraint;
    public core?: NodeConstraint;
    public task?: NodeConstraint;
    private 'core_separate'?: NodeConstraint;
    private 'core_combine'?: NodeConstraint;
    private 'task_separate'?: NodeConstraint;
    private 'task_combine'?: NodeConstraint;
    private 'node_group_task'?: NodeConstraint;
    public constructor() { 
    }
    public withOther(other: { [key: string]: object; }): NodeConstraints {
        this['other'] = other;
        return this;
    }
    public withMaster(master: NodeConstraint): NodeConstraints {
        this['master'] = master;
        return this;
    }
    public withCore(core: NodeConstraint): NodeConstraints {
        this['core'] = core;
        return this;
    }
    public withTask(task: NodeConstraint): NodeConstraints {
        this['task'] = task;
        return this;
    }
    public withCoreSeparate(coreSeparate: NodeConstraint): NodeConstraints {
        this['core_separate'] = coreSeparate;
        return this;
    }
    public set coreSeparate(coreSeparate: NodeConstraint  | undefined) {
        this['core_separate'] = coreSeparate;
    }
    public get coreSeparate(): NodeConstraint | undefined {
        return this['core_separate'];
    }
    public withCoreCombine(coreCombine: NodeConstraint): NodeConstraints {
        this['core_combine'] = coreCombine;
        return this;
    }
    public set coreCombine(coreCombine: NodeConstraint  | undefined) {
        this['core_combine'] = coreCombine;
    }
    public get coreCombine(): NodeConstraint | undefined {
        return this['core_combine'];
    }
    public withTaskSeparate(taskSeparate: NodeConstraint): NodeConstraints {
        this['task_separate'] = taskSeparate;
        return this;
    }
    public set taskSeparate(taskSeparate: NodeConstraint  | undefined) {
        this['task_separate'] = taskSeparate;
    }
    public get taskSeparate(): NodeConstraint | undefined {
        return this['task_separate'];
    }
    public withTaskCombine(taskCombine: NodeConstraint): NodeConstraints {
        this['task_combine'] = taskCombine;
        return this;
    }
    public set taskCombine(taskCombine: NodeConstraint  | undefined) {
        this['task_combine'] = taskCombine;
    }
    public get taskCombine(): NodeConstraint | undefined {
        return this['task_combine'];
    }
    public withNodeGroupTask(nodeGroupTask: NodeConstraint): NodeConstraints {
        this['node_group_task'] = nodeGroupTask;
        return this;
    }
    public set nodeGroupTask(nodeGroupTask: NodeConstraint  | undefined) {
        this['node_group_task'] = nodeGroupTask;
    }
    public get nodeGroupTask(): NodeConstraint | undefined {
        return this['node_group_task'];
    }
}