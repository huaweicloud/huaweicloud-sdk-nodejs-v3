import { DisplayOptions } from './DisplayOptions';
import { PoliciesDisplayRenderingAccelerationOptions } from './PoliciesDisplayRenderingAccelerationOptions';


export class PoliciesDisplay {
    private 'display_level'?: PoliciesDisplayDisplayLevelEnum | string;
    public options?: DisplayOptions;
    private 'rendering_acceleration_enable'?: boolean;
    private 'rendering_acceleration_options'?: PoliciesDisplayRenderingAccelerationOptions;
    private 'video_card_memory_size'?: number;
    private 'driver_delegation_mode_enable'?: boolean;
    private 'driver_delegation_latency'?: number;
    private 'video_latency'?: number;
    private 'change_resolution_vm'?: boolean;
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
    public withOptions(options: DisplayOptions): PoliciesDisplay {
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
