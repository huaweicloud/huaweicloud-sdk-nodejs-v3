import { OrchestrationMappedParam } from './OrchestrationMappedParam';


export class OrchestrationBaseInfo {
    private 'orchestration_name'?: string;
    private 'orchestration_strategy'?: OrchestrationBaseInfoOrchestrationStrategyEnum | string;
    private 'orchestration_mapped_param'?: OrchestrationMappedParam;
    private 'is_preprocessing'?: boolean;
    public constructor(orchestrationName?: string, orchestrationStrategy?: string) { 
        this['orchestration_name'] = orchestrationName;
        this['orchestration_strategy'] = orchestrationStrategy;
    }
    public withOrchestrationName(orchestrationName: string): OrchestrationBaseInfo {
        this['orchestration_name'] = orchestrationName;
        return this;
    }
    public set orchestrationName(orchestrationName: string  | undefined) {
        this['orchestration_name'] = orchestrationName;
    }
    public get orchestrationName(): string | undefined {
        return this['orchestration_name'];
    }
    public withOrchestrationStrategy(orchestrationStrategy: OrchestrationBaseInfoOrchestrationStrategyEnum | string): OrchestrationBaseInfo {
        this['orchestration_strategy'] = orchestrationStrategy;
        return this;
    }
    public set orchestrationStrategy(orchestrationStrategy: OrchestrationBaseInfoOrchestrationStrategyEnum | string  | undefined) {
        this['orchestration_strategy'] = orchestrationStrategy;
    }
    public get orchestrationStrategy(): OrchestrationBaseInfoOrchestrationStrategyEnum | string | undefined {
        return this['orchestration_strategy'];
    }
    public withOrchestrationMappedParam(orchestrationMappedParam: OrchestrationMappedParam): OrchestrationBaseInfo {
        this['orchestration_mapped_param'] = orchestrationMappedParam;
        return this;
    }
    public set orchestrationMappedParam(orchestrationMappedParam: OrchestrationMappedParam  | undefined) {
        this['orchestration_mapped_param'] = orchestrationMappedParam;
    }
    public get orchestrationMappedParam(): OrchestrationMappedParam | undefined {
        return this['orchestration_mapped_param'];
    }
    public withIsPreprocessing(isPreprocessing: boolean): OrchestrationBaseInfo {
        this['is_preprocessing'] = isPreprocessing;
        return this;
    }
    public set isPreprocessing(isPreprocessing: boolean  | undefined) {
        this['is_preprocessing'] = isPreprocessing;
    }
    public get isPreprocessing(): boolean | undefined {
        return this['is_preprocessing'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OrchestrationBaseInfoOrchestrationStrategyEnum {
    LIST = 'list',
    HASH = 'hash',
    RANGE = 'range',
    HASH_RANGE = 'hash_range',
    NONE_VALUE = 'none_value',
    DEFAULT = 'default',
    HEAD_N = 'head_n',
    TAIL_N = 'tail_n'
}
