import { PoliciesDisplayAdaptiveBitrateControlOptions } from './PoliciesDisplayAdaptiveBitrateControlOptions';
import { PoliciesDisplayOptions } from './PoliciesDisplayOptions';
import { PoliciesDisplayRenderingAccelerationOptions } from './PoliciesDisplayRenderingAccelerationOptions';


export class PoliciesDisplay {
    private 'display_level'?: PoliciesDisplayDisplayLevelEnum | string;
    public options?: PoliciesDisplayOptions;
    private 'rendering_acceleration_enable'?: boolean;
    private 'rendering_acceleration_options'?: PoliciesDisplayRenderingAccelerationOptions;
    private 'adaptive_bitrate_control_enable'?: boolean;
    private 'adaptive_bitrate_control_options'?: PoliciesDisplayAdaptiveBitrateControlOptions;
    private 'video_card_memory_size'?: number;
    private 'configuration1_enable'?: boolean;
    private 'driver_delegation_mode_enable'?: boolean;
    private 'driver_delegation_latency'?: number;
    private 'video_latency'?: number;
    private 'change_resolution_vm'?: boolean;
    private 'application_recognition'?: string;
    private 'duplicate_display_enable'?: boolean;
    private 'default_mapping_order'?: string;
    private 'duplicate_display_mode'?: string;
    public constructor() { 
    }
    public withDisplayLevel(displayLevel: PoliciesDisplayDisplayLevelEnum | string): PoliciesDisplay {
        this['display_level'] = displayLevel;
        return this;
    }
    public set displayLevel(displayLevel: PoliciesDisplayDisplayLevelEnum | string  | undefined) {
        this['display_level'] = displayLevel;
    }
    public get displayLevel(): PoliciesDisplayDisplayLevelEnum | string | undefined {
        return this['display_level'];
    }
    public withOptions(options: PoliciesDisplayOptions): PoliciesDisplay {
        this['options'] = options;
        return this;
    }
    public withRenderingAccelerationEnable(renderingAccelerationEnable: boolean): PoliciesDisplay {
        this['rendering_acceleration_enable'] = renderingAccelerationEnable;
        return this;
    }
    public set renderingAccelerationEnable(renderingAccelerationEnable: boolean  | undefined) {
        this['rendering_acceleration_enable'] = renderingAccelerationEnable;
    }
    public get renderingAccelerationEnable(): boolean | undefined {
        return this['rendering_acceleration_enable'];
    }
    public withRenderingAccelerationOptions(renderingAccelerationOptions: PoliciesDisplayRenderingAccelerationOptions): PoliciesDisplay {
        this['rendering_acceleration_options'] = renderingAccelerationOptions;
        return this;
    }
    public set renderingAccelerationOptions(renderingAccelerationOptions: PoliciesDisplayRenderingAccelerationOptions  | undefined) {
        this['rendering_acceleration_options'] = renderingAccelerationOptions;
    }
    public get renderingAccelerationOptions(): PoliciesDisplayRenderingAccelerationOptions | undefined {
        return this['rendering_acceleration_options'];
    }
    public withAdaptiveBitrateControlEnable(adaptiveBitrateControlEnable: boolean): PoliciesDisplay {
        this['adaptive_bitrate_control_enable'] = adaptiveBitrateControlEnable;
        return this;
    }
    public set adaptiveBitrateControlEnable(adaptiveBitrateControlEnable: boolean  | undefined) {
        this['adaptive_bitrate_control_enable'] = adaptiveBitrateControlEnable;
    }
    public get adaptiveBitrateControlEnable(): boolean | undefined {
        return this['adaptive_bitrate_control_enable'];
    }
    public withAdaptiveBitrateControlOptions(adaptiveBitrateControlOptions: PoliciesDisplayAdaptiveBitrateControlOptions): PoliciesDisplay {
        this['adaptive_bitrate_control_options'] = adaptiveBitrateControlOptions;
        return this;
    }
    public set adaptiveBitrateControlOptions(adaptiveBitrateControlOptions: PoliciesDisplayAdaptiveBitrateControlOptions  | undefined) {
        this['adaptive_bitrate_control_options'] = adaptiveBitrateControlOptions;
    }
    public get adaptiveBitrateControlOptions(): PoliciesDisplayAdaptiveBitrateControlOptions | undefined {
        return this['adaptive_bitrate_control_options'];
    }
    public withVideoCardMemorySize(videoCardMemorySize: number): PoliciesDisplay {
        this['video_card_memory_size'] = videoCardMemorySize;
        return this;
    }
    public set videoCardMemorySize(videoCardMemorySize: number  | undefined) {
        this['video_card_memory_size'] = videoCardMemorySize;
    }
    public get videoCardMemorySize(): number | undefined {
        return this['video_card_memory_size'];
    }
    public withConfiguration1Enable(configuration1Enable: boolean): PoliciesDisplay {
        this['configuration1_enable'] = configuration1Enable;
        return this;
    }
    public set configuration1Enable(configuration1Enable: boolean  | undefined) {
        this['configuration1_enable'] = configuration1Enable;
    }
    public get configuration1Enable(): boolean | undefined {
        return this['configuration1_enable'];
    }
    public withDriverDelegationModeEnable(driverDelegationModeEnable: boolean): PoliciesDisplay {
        this['driver_delegation_mode_enable'] = driverDelegationModeEnable;
        return this;
    }
    public set driverDelegationModeEnable(driverDelegationModeEnable: boolean  | undefined) {
        this['driver_delegation_mode_enable'] = driverDelegationModeEnable;
    }
    public get driverDelegationModeEnable(): boolean | undefined {
        return this['driver_delegation_mode_enable'];
    }
    public withDriverDelegationLatency(driverDelegationLatency: number): PoliciesDisplay {
        this['driver_delegation_latency'] = driverDelegationLatency;
        return this;
    }
    public set driverDelegationLatency(driverDelegationLatency: number  | undefined) {
        this['driver_delegation_latency'] = driverDelegationLatency;
    }
    public get driverDelegationLatency(): number | undefined {
        return this['driver_delegation_latency'];
    }
    public withVideoLatency(videoLatency: number): PoliciesDisplay {
        this['video_latency'] = videoLatency;
        return this;
    }
    public set videoLatency(videoLatency: number  | undefined) {
        this['video_latency'] = videoLatency;
    }
    public get videoLatency(): number | undefined {
        return this['video_latency'];
    }
    public withChangeResolutionVm(changeResolutionVm: boolean): PoliciesDisplay {
        this['change_resolution_vm'] = changeResolutionVm;
        return this;
    }
    public set changeResolutionVm(changeResolutionVm: boolean  | undefined) {
        this['change_resolution_vm'] = changeResolutionVm;
    }
    public get changeResolutionVm(): boolean | undefined {
        return this['change_resolution_vm'];
    }
    public withApplicationRecognition(applicationRecognition: string): PoliciesDisplay {
        this['application_recognition'] = applicationRecognition;
        return this;
    }
    public set applicationRecognition(applicationRecognition: string  | undefined) {
        this['application_recognition'] = applicationRecognition;
    }
    public get applicationRecognition(): string | undefined {
        return this['application_recognition'];
    }
    public withDuplicateDisplayEnable(duplicateDisplayEnable: boolean): PoliciesDisplay {
        this['duplicate_display_enable'] = duplicateDisplayEnable;
        return this;
    }
    public set duplicateDisplayEnable(duplicateDisplayEnable: boolean  | undefined) {
        this['duplicate_display_enable'] = duplicateDisplayEnable;
    }
    public get duplicateDisplayEnable(): boolean | undefined {
        return this['duplicate_display_enable'];
    }
    public withDefaultMappingOrder(defaultMappingOrder: string): PoliciesDisplay {
        this['default_mapping_order'] = defaultMappingOrder;
        return this;
    }
    public set defaultMappingOrder(defaultMappingOrder: string  | undefined) {
        this['default_mapping_order'] = defaultMappingOrder;
    }
    public get defaultMappingOrder(): string | undefined {
        return this['default_mapping_order'];
    }
    public withDuplicateDisplayMode(duplicateDisplayMode: string): PoliciesDisplay {
        this['duplicate_display_mode'] = duplicateDisplayMode;
        return this;
    }
    public set duplicateDisplayMode(duplicateDisplayMode: string  | undefined) {
        this['duplicate_display_mode'] = duplicateDisplayMode;
    }
    public get duplicateDisplayMode(): string | undefined {
        return this['duplicate_display_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesDisplayDisplayLevelEnum {
    LEVEL1 = 'LEVEL1',
    LEVEL2 = 'LEVEL2',
    LEVEL3 = 'LEVEL3',
    LEVEL4 = 'LEVEL4',
    LEVEL5 = 'LEVEL5'
}
