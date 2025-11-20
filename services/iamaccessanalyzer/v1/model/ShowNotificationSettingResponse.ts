import { AnalyzerType } from './AnalyzerType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNotificationSettingResponse extends SdkResponse {
    public id?: string;
    public urn?: string;
    private 'analyzer_id'?: string;
    private 'analyzer_name'?: string;
    private 'analyzer_type'?: AnalyzerType;
    private 'mc_switch'?: boolean;
    private 'smn_topic_urns'?: Array<string>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowNotificationSettingResponse {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): ShowNotificationSettingResponse {
        this['urn'] = urn;
        return this;
    }
    public withAnalyzerId(analyzerId: string): ShowNotificationSettingResponse {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withAnalyzerName(analyzerName: string): ShowNotificationSettingResponse {
        this['analyzer_name'] = analyzerName;
        return this;
    }
    public set analyzerName(analyzerName: string  | undefined) {
        this['analyzer_name'] = analyzerName;
    }
    public get analyzerName(): string | undefined {
        return this['analyzer_name'];
    }
    public withAnalyzerType(analyzerType: AnalyzerType): ShowNotificationSettingResponse {
        this['analyzer_type'] = analyzerType;
        return this;
    }
    public set analyzerType(analyzerType: AnalyzerType  | undefined) {
        this['analyzer_type'] = analyzerType;
    }
    public get analyzerType(): AnalyzerType | undefined {
        return this['analyzer_type'];
    }
    public withMcSwitch(mcSwitch: boolean): ShowNotificationSettingResponse {
        this['mc_switch'] = mcSwitch;
        return this;
    }
    public set mcSwitch(mcSwitch: boolean  | undefined) {
        this['mc_switch'] = mcSwitch;
    }
    public get mcSwitch(): boolean | undefined {
        return this['mc_switch'];
    }
    public withSmnTopicUrns(smnTopicUrns: Array<string>): ShowNotificationSettingResponse {
        this['smn_topic_urns'] = smnTopicUrns;
        return this;
    }
    public set smnTopicUrns(smnTopicUrns: Array<string>  | undefined) {
        this['smn_topic_urns'] = smnTopicUrns;
    }
    public get smnTopicUrns(): Array<string> | undefined {
        return this['smn_topic_urns'];
    }
    public withCreatedAt(createdAt: Date): ShowNotificationSettingResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ShowNotificationSettingResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}