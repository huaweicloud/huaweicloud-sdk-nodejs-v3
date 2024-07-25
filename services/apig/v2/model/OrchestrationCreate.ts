import { OrchestrationBaseInfo } from './OrchestrationBaseInfo';
import { OrchestrationMap } from './OrchestrationMap';
import { OrchestrationMappedParam } from './OrchestrationMappedParam';


export class OrchestrationCreate {
    private 'orchestration_name'?: string;
    private 'orchestration_strategy'?: OrchestrationCreateOrchestrationStrategyEnum | string;
    private 'orchestration_mapped_param'?: OrchestrationMappedParam;
    private 'is_preprocessing'?: boolean;
    private 'orchestration_map'?: Array<OrchestrationMap>;
    public constructor(orchestrationName?: string, orchestrationStrategy?: string) { 
        this['orchestration_name'] = orchestrationName;
        this['orchestration_strategy'] = orchestrationStrategy;
    }
    public withOrchestrationName(orchestrationName: string): OrchestrationCreate {
        this['orchestration_name'] = orchestrationName;
        return this;
    }
    public set orchestrationName(orchestrationName: string  | undefined) {
        this['orchestration_name'] = orchestrationName;
    }
    public get orchestrationName(): string | undefined {
        return this['orchestration_name'];
    }
    public withOrchestrationStrategy(orchestrationStrategy: OrchestrationCreateOrchestrationStrategyEnum | string): OrchestrationCreate {
        this['orchestration_strategy'] = orchestrationStrategy;
        return this;
    }
    public set orchestrationStrategy(orchestrationStrategy: OrchestrationCreateOrchestrationStrategyEnum | string  | undefined) {
        this['orchestration_strategy'] = orchestrationStrategy;
    }
    public get orchestrationStrategy(): OrchestrationCreateOrchestrationStrategyEnum | string | undefined {
        return this['orchestration_strategy'];
    }
    public withOrchestrationMappedParam(orchestrationMappedParam: OrchestrationMappedParam): OrchestrationCreate {
        this['orchestration_mapped_param'] = orchestrationMappedParam;
        return this;
    }
    public set orchestrationMappedParam(orchestrationMappedParam: OrchestrationMappedParam  | undefined) {
        this['orchestration_mapped_param'] = orchestrationMappedParam;
    }
    public get orchestrationMappedParam(): OrchestrationMappedParam | undefined {
        return this['orchestration_mapped_param'];
    }
    public withIsPreprocessing(isPreprocessing: boolean): OrchestrationCreate {
        this['is_preprocessing'] = isPreprocessing;
        return this;
    }
    public set isPreprocessing(isPreprocessing: boolean  | undefined) {
        this['is_preprocessing'] = isPreprocessing;
    }
    public get isPreprocessing(): boolean | undefined {
        return this['is_preprocessing'];
    }
    public withOrchestrationMap(orchestrationMap: Array<OrchestrationMap>): OrchestrationCreate {
        this['orchestration_map'] = orchestrationMap;
        return this;
    }
    public set orchestrationMap(orchestrationMap: Array<OrchestrationMap>  | undefined) {
        this['orchestration_map'] = orchestrationMap;
    }
    public get orchestrationMap(): Array<OrchestrationMap> | undefined {
        return this['orchestration_map'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OrchestrationCreateOrchestrationStrategyEnum {
    LIST = 'list',
    HASH = 'hash',
    RANGE = 'range',
    HASH_RANGE = 'hash_range',
    NONE_VALUE = 'none_value',
    DEFAULT = 'default',
    HEAD_N = 'head_n',
    TAIL_N = 'tail_n'
}
