import { LandingZoneErrorMessage } from './LandingZoneErrorMessage';
import { PercentageDetail } from './PercentageDetail';
import { RegionConfigurationList } from './RegionConfigurationList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLandingZoneStatusResponse extends SdkResponse {
    private 'deployed_version'?: string;
    private 'landing_zone_status'?: string;
    private 'percentage_complete'?: number;
    private 'percentage_details'?: Array<PercentageDetail>;
    private 'landing_zone_action_type'?: string;
    public message?: Array<LandingZoneErrorMessage>;
    public regions?: Array<RegionConfigurationList>;
    public constructor() { 
        super();
    }
    public withDeployedVersion(deployedVersion: string): ShowLandingZoneStatusResponse {
        this['deployed_version'] = deployedVersion;
        return this;
    }
    public set deployedVersion(deployedVersion: string  | undefined) {
        this['deployed_version'] = deployedVersion;
    }
    public get deployedVersion(): string | undefined {
        return this['deployed_version'];
    }
    public withLandingZoneStatus(landingZoneStatus: string): ShowLandingZoneStatusResponse {
        this['landing_zone_status'] = landingZoneStatus;
        return this;
    }
    public set landingZoneStatus(landingZoneStatus: string  | undefined) {
        this['landing_zone_status'] = landingZoneStatus;
    }
    public get landingZoneStatus(): string | undefined {
        return this['landing_zone_status'];
    }
    public withPercentageComplete(percentageComplete: number): ShowLandingZoneStatusResponse {
        this['percentage_complete'] = percentageComplete;
        return this;
    }
    public set percentageComplete(percentageComplete: number  | undefined) {
        this['percentage_complete'] = percentageComplete;
    }
    public get percentageComplete(): number | undefined {
        return this['percentage_complete'];
    }
    public withPercentageDetails(percentageDetails: Array<PercentageDetail>): ShowLandingZoneStatusResponse {
        this['percentage_details'] = percentageDetails;
        return this;
    }
    public set percentageDetails(percentageDetails: Array<PercentageDetail>  | undefined) {
        this['percentage_details'] = percentageDetails;
    }
    public get percentageDetails(): Array<PercentageDetail> | undefined {
        return this['percentage_details'];
    }
    public withLandingZoneActionType(landingZoneActionType: string): ShowLandingZoneStatusResponse {
        this['landing_zone_action_type'] = landingZoneActionType;
        return this;
    }
    public set landingZoneActionType(landingZoneActionType: string  | undefined) {
        this['landing_zone_action_type'] = landingZoneActionType;
    }
    public get landingZoneActionType(): string | undefined {
        return this['landing_zone_action_type'];
    }
    public withMessage(message: Array<LandingZoneErrorMessage>): ShowLandingZoneStatusResponse {
        this['message'] = message;
        return this;
    }
    public withRegions(regions: Array<RegionConfigurationList>): ShowLandingZoneStatusResponse {
        this['regions'] = regions;
        return this;
    }
}