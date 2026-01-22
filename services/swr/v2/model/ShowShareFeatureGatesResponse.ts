
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShareFeatureGatesResponse extends SdkResponse {
    private 'enable_experience'?: boolean;
    private 'enable_hss_service'?: boolean;
    private 'enable_image_scan'?: boolean;
    private 'enable_sm3'?: boolean;
    private 'enable_image_sync'?: boolean;
    private 'enable_cci_service'?: boolean;
    private 'enable_image_label'?: boolean;
    private 'enable_pipeline'?: boolean;
    private 'enable_authorization_token'?: boolean;
    private 'enable_resource'?: boolean;
    private 'enable_list_v3'?: boolean;
    private 'enable_image_quota'?: boolean;
    private 'enable_customize_validity_period'?: boolean;
    public constructor() { 
        super();
    }
    public withEnableExperience(enableExperience: boolean): ShowShareFeatureGatesResponse {
        this['enable_experience'] = enableExperience;
        return this;
    }
    public set enableExperience(enableExperience: boolean  | undefined) {
        this['enable_experience'] = enableExperience;
    }
    public get enableExperience(): boolean | undefined {
        return this['enable_experience'];
    }
    public withEnableHssService(enableHssService: boolean): ShowShareFeatureGatesResponse {
        this['enable_hss_service'] = enableHssService;
        return this;
    }
    public set enableHssService(enableHssService: boolean  | undefined) {
        this['enable_hss_service'] = enableHssService;
    }
    public get enableHssService(): boolean | undefined {
        return this['enable_hss_service'];
    }
    public withEnableImageScan(enableImageScan: boolean): ShowShareFeatureGatesResponse {
        this['enable_image_scan'] = enableImageScan;
        return this;
    }
    public set enableImageScan(enableImageScan: boolean  | undefined) {
        this['enable_image_scan'] = enableImageScan;
    }
    public get enableImageScan(): boolean | undefined {
        return this['enable_image_scan'];
    }
    public withEnableSm3(enableSm3: boolean): ShowShareFeatureGatesResponse {
        this['enable_sm3'] = enableSm3;
        return this;
    }
    public set enableSm3(enableSm3: boolean  | undefined) {
        this['enable_sm3'] = enableSm3;
    }
    public get enableSm3(): boolean | undefined {
        return this['enable_sm3'];
    }
    public withEnableImageSync(enableImageSync: boolean): ShowShareFeatureGatesResponse {
        this['enable_image_sync'] = enableImageSync;
        return this;
    }
    public set enableImageSync(enableImageSync: boolean  | undefined) {
        this['enable_image_sync'] = enableImageSync;
    }
    public get enableImageSync(): boolean | undefined {
        return this['enable_image_sync'];
    }
    public withEnableCciService(enableCciService: boolean): ShowShareFeatureGatesResponse {
        this['enable_cci_service'] = enableCciService;
        return this;
    }
    public set enableCciService(enableCciService: boolean  | undefined) {
        this['enable_cci_service'] = enableCciService;
    }
    public get enableCciService(): boolean | undefined {
        return this['enable_cci_service'];
    }
    public withEnableImageLabel(enableImageLabel: boolean): ShowShareFeatureGatesResponse {
        this['enable_image_label'] = enableImageLabel;
        return this;
    }
    public set enableImageLabel(enableImageLabel: boolean  | undefined) {
        this['enable_image_label'] = enableImageLabel;
    }
    public get enableImageLabel(): boolean | undefined {
        return this['enable_image_label'];
    }
    public withEnablePipeline(enablePipeline: boolean): ShowShareFeatureGatesResponse {
        this['enable_pipeline'] = enablePipeline;
        return this;
    }
    public set enablePipeline(enablePipeline: boolean  | undefined) {
        this['enable_pipeline'] = enablePipeline;
    }
    public get enablePipeline(): boolean | undefined {
        return this['enable_pipeline'];
    }
    public withEnableAuthorizationToken(enableAuthorizationToken: boolean): ShowShareFeatureGatesResponse {
        this['enable_authorization_token'] = enableAuthorizationToken;
        return this;
    }
    public set enableAuthorizationToken(enableAuthorizationToken: boolean  | undefined) {
        this['enable_authorization_token'] = enableAuthorizationToken;
    }
    public get enableAuthorizationToken(): boolean | undefined {
        return this['enable_authorization_token'];
    }
    public withEnableResource(enableResource: boolean): ShowShareFeatureGatesResponse {
        this['enable_resource'] = enableResource;
        return this;
    }
    public set enableResource(enableResource: boolean  | undefined) {
        this['enable_resource'] = enableResource;
    }
    public get enableResource(): boolean | undefined {
        return this['enable_resource'];
    }
    public withEnableListV3(enableListV3: boolean): ShowShareFeatureGatesResponse {
        this['enable_list_v3'] = enableListV3;
        return this;
    }
    public set enableListV3(enableListV3: boolean  | undefined) {
        this['enable_list_v3'] = enableListV3;
    }
    public get enableListV3(): boolean | undefined {
        return this['enable_list_v3'];
    }
    public withEnableImageQuota(enableImageQuota: boolean): ShowShareFeatureGatesResponse {
        this['enable_image_quota'] = enableImageQuota;
        return this;
    }
    public set enableImageQuota(enableImageQuota: boolean  | undefined) {
        this['enable_image_quota'] = enableImageQuota;
    }
    public get enableImageQuota(): boolean | undefined {
        return this['enable_image_quota'];
    }
    public withEnableCustomizeValidityPeriod(enableCustomizeValidityPeriod: boolean): ShowShareFeatureGatesResponse {
        this['enable_customize_validity_period'] = enableCustomizeValidityPeriod;
        return this;
    }
    public set enableCustomizeValidityPeriod(enableCustomizeValidityPeriod: boolean  | undefined) {
        this['enable_customize_validity_period'] = enableCustomizeValidityPeriod;
    }
    public get enableCustomizeValidityPeriod(): boolean | undefined {
        return this['enable_customize_validity_period'];
    }
}