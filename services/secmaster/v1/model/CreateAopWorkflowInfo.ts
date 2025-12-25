

export class CreateAopWorkflowInfo {
    public name?: string;
    public description?: string;
    private 'engine_type'?: string;
    private 'aop_type'?: string;
    private 'dataclass_id'?: string;
    public labels?: string;
    public constructor(name?: string, engineType?: string, aopType?: string, dataclassId?: string) { 
        this['name'] = name;
        this['engine_type'] = engineType;
        this['aop_type'] = aopType;
        this['dataclass_id'] = dataclassId;
    }
    public withName(name: string): CreateAopWorkflowInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAopWorkflowInfo {
        this['description'] = description;
        return this;
    }
    public withEngineType(engineType: string): CreateAopWorkflowInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withAopType(aopType: string): CreateAopWorkflowInfo {
        this['aop_type'] = aopType;
        return this;
    }
    public set aopType(aopType: string  | undefined) {
        this['aop_type'] = aopType;
    }
    public get aopType(): string | undefined {
        return this['aop_type'];
    }
    public withDataclassId(dataclassId: string): CreateAopWorkflowInfo {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withLabels(labels: string): CreateAopWorkflowInfo {
        this['labels'] = labels;
        return this;
    }
}