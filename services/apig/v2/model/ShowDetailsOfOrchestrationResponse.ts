import { OrchestrationCreate } from './OrchestrationCreate';
import { OrchestrationMap } from './OrchestrationMap';
import { OrchestrationMappedParam } from './OrchestrationMappedParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfOrchestrationResponse extends SdkResponse {
    private 'orchestration_name'?: string;
    private 'orchestration_strategy'?: ShowDetailsOfOrchestrationResponseOrchestrationStrategyEnum | string;
    private 'orchestration_mapped_param'?: OrchestrationMappedParam;
    private 'is_preprocessing'?: boolean;
    private 'orchestration_map'?: Array<OrchestrationMap>;
    private 'orchestration_id'?: string;
    private 'orchestration_create_time'?: Date;
    private 'orchestration_update_time'?: Date;
    public constructor(orchestrationName?: string, orchestrationStrategy?: string) { 
        super();
        this['orchestration_name'] = orchestrationName;
        this['orchestration_strategy'] = orchestrationStrategy;
    }
    public withOrchestrationName(orchestrationName: string): ShowDetailsOfOrchestrationResponse {
        this['orchestration_name'] = orchestrationName;
        return this;
    }
    public set orchestrationName(orchestrationName: string  | undefined) {
        this['orchestration_name'] = orchestrationName;
    }
    public get orchestrationName(): string | undefined {
        return this['orchestration_name'];
    }
    public withOrchestrationStrategy(orchestrationStrategy: ShowDetailsOfOrchestrationResponseOrchestrationStrategyEnum | string): ShowDetailsOfOrchestrationResponse {
        this['orchestration_strategy'] = orchestrationStrategy;
        return this;
    }
    public set orchestrationStrategy(orchestrationStrategy: ShowDetailsOfOrchestrationResponseOrchestrationStrategyEnum | string  | undefined) {
        this['orchestration_strategy'] = orchestrationStrategy;
    }
    public get orchestrationStrategy(): ShowDetailsOfOrchestrationResponseOrchestrationStrategyEnum | string | undefined {
        return this['orchestration_strategy'];
    }
    public withOrchestrationMappedParam(orchestrationMappedParam: OrchestrationMappedParam): ShowDetailsOfOrchestrationResponse {
        this['orchestration_mapped_param'] = orchestrationMappedParam;
        return this;
    }
    public set orchestrationMappedParam(orchestrationMappedParam: OrchestrationMappedParam  | undefined) {
        this['orchestration_mapped_param'] = orchestrationMappedParam;
    }
    public get orchestrationMappedParam(): OrchestrationMappedParam | undefined {
        return this['orchestration_mapped_param'];
    }
    public withIsPreprocessing(isPreprocessing: boolean): ShowDetailsOfOrchestrationResponse {
        this['is_preprocessing'] = isPreprocessing;
        return this;
    }
    public set isPreprocessing(isPreprocessing: boolean  | undefined) {
        this['is_preprocessing'] = isPreprocessing;
    }
    public get isPreprocessing(): boolean | undefined {
        return this['is_preprocessing'];
    }
    public withOrchestrationMap(orchestrationMap: Array<OrchestrationMap>): ShowDetailsOfOrchestrationResponse {
        this['orchestration_map'] = orchestrationMap;
        return this;
    }
    public set orchestrationMap(orchestrationMap: Array<OrchestrationMap>  | undefined) {
        this['orchestration_map'] = orchestrationMap;
    }
    public get orchestrationMap(): Array<OrchestrationMap> | undefined {
        return this['orchestration_map'];
    }
    public withOrchestrationId(orchestrationId: string): ShowDetailsOfOrchestrationResponse {
        this['orchestration_id'] = orchestrationId;
        return this;
    }
    public set orchestrationId(orchestrationId: string  | undefined) {
        this['orchestration_id'] = orchestrationId;
    }
    public get orchestrationId(): string | undefined {
        return this['orchestration_id'];
    }
    public withOrchestrationCreateTime(orchestrationCreateTime: Date): ShowDetailsOfOrchestrationResponse {
        this['orchestration_create_time'] = orchestrationCreateTime;
        return this;
    }
    public set orchestrationCreateTime(orchestrationCreateTime: Date  | undefined) {
        this['orchestration_create_time'] = orchestrationCreateTime;
    }
    public get orchestrationCreateTime(): Date | undefined {
        return this['orchestration_create_time'];
    }
    public withOrchestrationUpdateTime(orchestrationUpdateTime: Date): ShowDetailsOfOrchestrationResponse {
        this['orchestration_update_time'] = orchestrationUpdateTime;
        return this;
    }
    public set orchestrationUpdateTime(orchestrationUpdateTime: Date  | undefined) {
        this['orchestration_update_time'] = orchestrationUpdateTime;
    }
    public get orchestrationUpdateTime(): Date | undefined {
        return this['orchestration_update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfOrchestrationResponseOrchestrationStrategyEnum {
    LIST = 'list',
    HASH = 'hash',
    RANGE = 'range',
    HASH_RANGE = 'hash_range',
    NONE_VALUE = 'none_value',
    DEFAULT = 'default',
    HEAD_N = 'head_n',
    TAIL_N = 'tail_n'
}
