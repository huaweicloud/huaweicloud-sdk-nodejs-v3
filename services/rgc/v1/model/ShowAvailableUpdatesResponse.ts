
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableUpdatesResponse extends SdkResponse {
    private 'baseline_update_available'?: boolean;
    private 'control_update_available'?: boolean;
    private 'landing_zone_update_available'?: boolean;
    private 'service_landing_zone_version'?: string;
    private 'user_landing_zone_version'?: string;
    public constructor() { 
        super();
    }
    public withBaselineUpdateAvailable(baselineUpdateAvailable: boolean): ShowAvailableUpdatesResponse {
        this['baseline_update_available'] = baselineUpdateAvailable;
        return this;
    }
    public set baselineUpdateAvailable(baselineUpdateAvailable: boolean  | undefined) {
        this['baseline_update_available'] = baselineUpdateAvailable;
    }
    public get baselineUpdateAvailable(): boolean | undefined {
        return this['baseline_update_available'];
    }
    public withControlUpdateAvailable(controlUpdateAvailable: boolean): ShowAvailableUpdatesResponse {
        this['control_update_available'] = controlUpdateAvailable;
        return this;
    }
    public set controlUpdateAvailable(controlUpdateAvailable: boolean  | undefined) {
        this['control_update_available'] = controlUpdateAvailable;
    }
    public get controlUpdateAvailable(): boolean | undefined {
        return this['control_update_available'];
    }
    public withLandingZoneUpdateAvailable(landingZoneUpdateAvailable: boolean): ShowAvailableUpdatesResponse {
        this['landing_zone_update_available'] = landingZoneUpdateAvailable;
        return this;
    }
    public set landingZoneUpdateAvailable(landingZoneUpdateAvailable: boolean  | undefined) {
        this['landing_zone_update_available'] = landingZoneUpdateAvailable;
    }
    public get landingZoneUpdateAvailable(): boolean | undefined {
        return this['landing_zone_update_available'];
    }
    public withServiceLandingZoneVersion(serviceLandingZoneVersion: string): ShowAvailableUpdatesResponse {
        this['service_landing_zone_version'] = serviceLandingZoneVersion;
        return this;
    }
    public set serviceLandingZoneVersion(serviceLandingZoneVersion: string  | undefined) {
        this['service_landing_zone_version'] = serviceLandingZoneVersion;
    }
    public get serviceLandingZoneVersion(): string | undefined {
        return this['service_landing_zone_version'];
    }
    public withUserLandingZoneVersion(userLandingZoneVersion: string): ShowAvailableUpdatesResponse {
        this['user_landing_zone_version'] = userLandingZoneVersion;
        return this;
    }
    public set userLandingZoneVersion(userLandingZoneVersion: string  | undefined) {
        this['user_landing_zone_version'] = userLandingZoneVersion;
    }
    public get userLandingZoneVersion(): string | undefined {
        return this['user_landing_zone_version'];
    }
}