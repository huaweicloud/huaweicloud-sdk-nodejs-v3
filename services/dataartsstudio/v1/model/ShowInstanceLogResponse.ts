
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceLogResponse extends SdkResponse {
    private 'enable_bridge'?: boolean;
    private 'enable_profile'?: boolean;
    private 'enable_classification'?: boolean;
    private 'bridge_status'?: string;
    private 'profile_status'?: string;
    private 'classification_status'?: string;
    private 'bridge_job_log'?: string;
    private 'profile_job_log'?: string;
    private 'classification_job_log'?: string;
    public constructor() { 
        super();
    }
    public withEnableBridge(enableBridge: boolean): ShowInstanceLogResponse {
        this['enable_bridge'] = enableBridge;
        return this;
    }
    public set enableBridge(enableBridge: boolean  | undefined) {
        this['enable_bridge'] = enableBridge;
    }
    public get enableBridge(): boolean | undefined {
        return this['enable_bridge'];
    }
    public withEnableProfile(enableProfile: boolean): ShowInstanceLogResponse {
        this['enable_profile'] = enableProfile;
        return this;
    }
    public set enableProfile(enableProfile: boolean  | undefined) {
        this['enable_profile'] = enableProfile;
    }
    public get enableProfile(): boolean | undefined {
        return this['enable_profile'];
    }
    public withEnableClassification(enableClassification: boolean): ShowInstanceLogResponse {
        this['enable_classification'] = enableClassification;
        return this;
    }
    public set enableClassification(enableClassification: boolean  | undefined) {
        this['enable_classification'] = enableClassification;
    }
    public get enableClassification(): boolean | undefined {
        return this['enable_classification'];
    }
    public withBridgeStatus(bridgeStatus: string): ShowInstanceLogResponse {
        this['bridge_status'] = bridgeStatus;
        return this;
    }
    public set bridgeStatus(bridgeStatus: string  | undefined) {
        this['bridge_status'] = bridgeStatus;
    }
    public get bridgeStatus(): string | undefined {
        return this['bridge_status'];
    }
    public withProfileStatus(profileStatus: string): ShowInstanceLogResponse {
        this['profile_status'] = profileStatus;
        return this;
    }
    public set profileStatus(profileStatus: string  | undefined) {
        this['profile_status'] = profileStatus;
    }
    public get profileStatus(): string | undefined {
        return this['profile_status'];
    }
    public withClassificationStatus(classificationStatus: string): ShowInstanceLogResponse {
        this['classification_status'] = classificationStatus;
        return this;
    }
    public set classificationStatus(classificationStatus: string  | undefined) {
        this['classification_status'] = classificationStatus;
    }
    public get classificationStatus(): string | undefined {
        return this['classification_status'];
    }
    public withBridgeJobLog(bridgeJobLog: string): ShowInstanceLogResponse {
        this['bridge_job_log'] = bridgeJobLog;
        return this;
    }
    public set bridgeJobLog(bridgeJobLog: string  | undefined) {
        this['bridge_job_log'] = bridgeJobLog;
    }
    public get bridgeJobLog(): string | undefined {
        return this['bridge_job_log'];
    }
    public withProfileJobLog(profileJobLog: string): ShowInstanceLogResponse {
        this['profile_job_log'] = profileJobLog;
        return this;
    }
    public set profileJobLog(profileJobLog: string  | undefined) {
        this['profile_job_log'] = profileJobLog;
    }
    public get profileJobLog(): string | undefined {
        return this['profile_job_log'];
    }
    public withClassificationJobLog(classificationJobLog: string): ShowInstanceLogResponse {
        this['classification_job_log'] = classificationJobLog;
        return this;
    }
    public set classificationJobLog(classificationJobLog: string  | undefined) {
        this['classification_job_log'] = classificationJobLog;
    }
    public get classificationJobLog(): string | undefined {
        return this['classification_job_log'];
    }
}