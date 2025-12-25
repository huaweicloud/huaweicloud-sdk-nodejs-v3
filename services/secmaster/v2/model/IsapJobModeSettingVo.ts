import { IsapJobFieldNotNullPolicy } from './IsapJobFieldNotNullPolicy';
import { IsapJobStartupModeEnum } from './IsapJobStartupModeEnum';
import { IsapTimeUnit } from './IsapTimeUnit';


export class IsapJobModeSettingVo {
    private 'batch_overtime_interval'?: number;
    private 'batch_overtime_unit'?: IsapTimeUnit;
    private 'batch_frequency_interval'?: number;
    private 'batch_frequency_unit'?: IsapTimeUnit;
    private 'streaming_state_ttl_interval'?: number;
    private 'streaming_state_ttl_unit'?: IsapTimeUnit;
    private 'streaming_checkpoint_ttl_interval'?: number;
    private 'streaming_checkpoint_ttl_unit'?: IsapTimeUnit;
    private 'streaming_startup_mode'?: IsapJobStartupModeEnum;
    private 'batch_overtime_strategy_interval'?: number;
    private 'batch_overtime_strategy_unit'?: IsapTimeUnit;
    private 'search_delay_interval'?: number;
    private 'search_delay_unit'?: IsapTimeUnit;
    private 'search_frequency_interval'?: number;
    private 'search_frequency_unit'?: IsapTimeUnit;
    private 'search_overtime_interval'?: number;
    private 'search_overtime_unit'?: IsapTimeUnit;
    private 'search_period_interval'?: number;
    private 'search_period_unit'?: IsapTimeUnit;
    private 'search_table_id'?: string;
    private 'search_table_name'?: string;
    private 'field_not_null_policy'?: IsapJobFieldNotNullPolicy;
    public constructor() { 
    }
    public withBatchOvertimeInterval(batchOvertimeInterval: number): IsapJobModeSettingVo {
        this['batch_overtime_interval'] = batchOvertimeInterval;
        return this;
    }
    public set batchOvertimeInterval(batchOvertimeInterval: number  | undefined) {
        this['batch_overtime_interval'] = batchOvertimeInterval;
    }
    public get batchOvertimeInterval(): number | undefined {
        return this['batch_overtime_interval'];
    }
    public withBatchOvertimeUnit(batchOvertimeUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['batch_overtime_unit'] = batchOvertimeUnit;
        return this;
    }
    public set batchOvertimeUnit(batchOvertimeUnit: IsapTimeUnit  | undefined) {
        this['batch_overtime_unit'] = batchOvertimeUnit;
    }
    public get batchOvertimeUnit(): IsapTimeUnit | undefined {
        return this['batch_overtime_unit'];
    }
    public withBatchFrequencyInterval(batchFrequencyInterval: number): IsapJobModeSettingVo {
        this['batch_frequency_interval'] = batchFrequencyInterval;
        return this;
    }
    public set batchFrequencyInterval(batchFrequencyInterval: number  | undefined) {
        this['batch_frequency_interval'] = batchFrequencyInterval;
    }
    public get batchFrequencyInterval(): number | undefined {
        return this['batch_frequency_interval'];
    }
    public withBatchFrequencyUnit(batchFrequencyUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['batch_frequency_unit'] = batchFrequencyUnit;
        return this;
    }
    public set batchFrequencyUnit(batchFrequencyUnit: IsapTimeUnit  | undefined) {
        this['batch_frequency_unit'] = batchFrequencyUnit;
    }
    public get batchFrequencyUnit(): IsapTimeUnit | undefined {
        return this['batch_frequency_unit'];
    }
    public withStreamingStateTtlInterval(streamingStateTtlInterval: number): IsapJobModeSettingVo {
        this['streaming_state_ttl_interval'] = streamingStateTtlInterval;
        return this;
    }
    public set streamingStateTtlInterval(streamingStateTtlInterval: number  | undefined) {
        this['streaming_state_ttl_interval'] = streamingStateTtlInterval;
    }
    public get streamingStateTtlInterval(): number | undefined {
        return this['streaming_state_ttl_interval'];
    }
    public withStreamingStateTtlUnit(streamingStateTtlUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['streaming_state_ttl_unit'] = streamingStateTtlUnit;
        return this;
    }
    public set streamingStateTtlUnit(streamingStateTtlUnit: IsapTimeUnit  | undefined) {
        this['streaming_state_ttl_unit'] = streamingStateTtlUnit;
    }
    public get streamingStateTtlUnit(): IsapTimeUnit | undefined {
        return this['streaming_state_ttl_unit'];
    }
    public withStreamingCheckpointTtlInterval(streamingCheckpointTtlInterval: number): IsapJobModeSettingVo {
        this['streaming_checkpoint_ttl_interval'] = streamingCheckpointTtlInterval;
        return this;
    }
    public set streamingCheckpointTtlInterval(streamingCheckpointTtlInterval: number  | undefined) {
        this['streaming_checkpoint_ttl_interval'] = streamingCheckpointTtlInterval;
    }
    public get streamingCheckpointTtlInterval(): number | undefined {
        return this['streaming_checkpoint_ttl_interval'];
    }
    public withStreamingCheckpointTtlUnit(streamingCheckpointTtlUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['streaming_checkpoint_ttl_unit'] = streamingCheckpointTtlUnit;
        return this;
    }
    public set streamingCheckpointTtlUnit(streamingCheckpointTtlUnit: IsapTimeUnit  | undefined) {
        this['streaming_checkpoint_ttl_unit'] = streamingCheckpointTtlUnit;
    }
    public get streamingCheckpointTtlUnit(): IsapTimeUnit | undefined {
        return this['streaming_checkpoint_ttl_unit'];
    }
    public withStreamingStartupMode(streamingStartupMode: IsapJobStartupModeEnum): IsapJobModeSettingVo {
        this['streaming_startup_mode'] = streamingStartupMode;
        return this;
    }
    public set streamingStartupMode(streamingStartupMode: IsapJobStartupModeEnum  | undefined) {
        this['streaming_startup_mode'] = streamingStartupMode;
    }
    public get streamingStartupMode(): IsapJobStartupModeEnum | undefined {
        return this['streaming_startup_mode'];
    }
    public withBatchOvertimeStrategyInterval(batchOvertimeStrategyInterval: number): IsapJobModeSettingVo {
        this['batch_overtime_strategy_interval'] = batchOvertimeStrategyInterval;
        return this;
    }
    public set batchOvertimeStrategyInterval(batchOvertimeStrategyInterval: number  | undefined) {
        this['batch_overtime_strategy_interval'] = batchOvertimeStrategyInterval;
    }
    public get batchOvertimeStrategyInterval(): number | undefined {
        return this['batch_overtime_strategy_interval'];
    }
    public withBatchOvertimeStrategyUnit(batchOvertimeStrategyUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['batch_overtime_strategy_unit'] = batchOvertimeStrategyUnit;
        return this;
    }
    public set batchOvertimeStrategyUnit(batchOvertimeStrategyUnit: IsapTimeUnit  | undefined) {
        this['batch_overtime_strategy_unit'] = batchOvertimeStrategyUnit;
    }
    public get batchOvertimeStrategyUnit(): IsapTimeUnit | undefined {
        return this['batch_overtime_strategy_unit'];
    }
    public withSearchDelayInterval(searchDelayInterval: number): IsapJobModeSettingVo {
        this['search_delay_interval'] = searchDelayInterval;
        return this;
    }
    public set searchDelayInterval(searchDelayInterval: number  | undefined) {
        this['search_delay_interval'] = searchDelayInterval;
    }
    public get searchDelayInterval(): number | undefined {
        return this['search_delay_interval'];
    }
    public withSearchDelayUnit(searchDelayUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['search_delay_unit'] = searchDelayUnit;
        return this;
    }
    public set searchDelayUnit(searchDelayUnit: IsapTimeUnit  | undefined) {
        this['search_delay_unit'] = searchDelayUnit;
    }
    public get searchDelayUnit(): IsapTimeUnit | undefined {
        return this['search_delay_unit'];
    }
    public withSearchFrequencyInterval(searchFrequencyInterval: number): IsapJobModeSettingVo {
        this['search_frequency_interval'] = searchFrequencyInterval;
        return this;
    }
    public set searchFrequencyInterval(searchFrequencyInterval: number  | undefined) {
        this['search_frequency_interval'] = searchFrequencyInterval;
    }
    public get searchFrequencyInterval(): number | undefined {
        return this['search_frequency_interval'];
    }
    public withSearchFrequencyUnit(searchFrequencyUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['search_frequency_unit'] = searchFrequencyUnit;
        return this;
    }
    public set searchFrequencyUnit(searchFrequencyUnit: IsapTimeUnit  | undefined) {
        this['search_frequency_unit'] = searchFrequencyUnit;
    }
    public get searchFrequencyUnit(): IsapTimeUnit | undefined {
        return this['search_frequency_unit'];
    }
    public withSearchOvertimeInterval(searchOvertimeInterval: number): IsapJobModeSettingVo {
        this['search_overtime_interval'] = searchOvertimeInterval;
        return this;
    }
    public set searchOvertimeInterval(searchOvertimeInterval: number  | undefined) {
        this['search_overtime_interval'] = searchOvertimeInterval;
    }
    public get searchOvertimeInterval(): number | undefined {
        return this['search_overtime_interval'];
    }
    public withSearchOvertimeUnit(searchOvertimeUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['search_overtime_unit'] = searchOvertimeUnit;
        return this;
    }
    public set searchOvertimeUnit(searchOvertimeUnit: IsapTimeUnit  | undefined) {
        this['search_overtime_unit'] = searchOvertimeUnit;
    }
    public get searchOvertimeUnit(): IsapTimeUnit | undefined {
        return this['search_overtime_unit'];
    }
    public withSearchPeriodInterval(searchPeriodInterval: number): IsapJobModeSettingVo {
        this['search_period_interval'] = searchPeriodInterval;
        return this;
    }
    public set searchPeriodInterval(searchPeriodInterval: number  | undefined) {
        this['search_period_interval'] = searchPeriodInterval;
    }
    public get searchPeriodInterval(): number | undefined {
        return this['search_period_interval'];
    }
    public withSearchPeriodUnit(searchPeriodUnit: IsapTimeUnit): IsapJobModeSettingVo {
        this['search_period_unit'] = searchPeriodUnit;
        return this;
    }
    public set searchPeriodUnit(searchPeriodUnit: IsapTimeUnit  | undefined) {
        this['search_period_unit'] = searchPeriodUnit;
    }
    public get searchPeriodUnit(): IsapTimeUnit | undefined {
        return this['search_period_unit'];
    }
    public withSearchTableId(searchTableId: string): IsapJobModeSettingVo {
        this['search_table_id'] = searchTableId;
        return this;
    }
    public set searchTableId(searchTableId: string  | undefined) {
        this['search_table_id'] = searchTableId;
    }
    public get searchTableId(): string | undefined {
        return this['search_table_id'];
    }
    public withSearchTableName(searchTableName: string): IsapJobModeSettingVo {
        this['search_table_name'] = searchTableName;
        return this;
    }
    public set searchTableName(searchTableName: string  | undefined) {
        this['search_table_name'] = searchTableName;
    }
    public get searchTableName(): string | undefined {
        return this['search_table_name'];
    }
    public withFieldNotNullPolicy(fieldNotNullPolicy: IsapJobFieldNotNullPolicy): IsapJobModeSettingVo {
        this['field_not_null_policy'] = fieldNotNullPolicy;
        return this;
    }
    public set fieldNotNullPolicy(fieldNotNullPolicy: IsapJobFieldNotNullPolicy  | undefined) {
        this['field_not_null_policy'] = fieldNotNullPolicy;
    }
    public get fieldNotNullPolicy(): IsapJobFieldNotNullPolicy | undefined {
        return this['field_not_null_policy'];
    }
}