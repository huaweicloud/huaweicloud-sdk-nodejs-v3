import { BusinessCardImageUrl } from './BusinessCardImageUrl';
import { BusinessCardTextConfig } from './BusinessCardTextConfig';
import { DigitalHumanBusinessCardJobInfo } from './DigitalHumanBusinessCardJobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDigitalHumanBusinessCardResponse extends SdkResponse {
    private 'job_info'?: DigitalHumanBusinessCardJobInfo;
    private 'card_templet_asset_id'?: string;
    private 'card_text_config'?: BusinessCardTextConfig;
    private 'card_image_url'?: BusinessCardImageUrl;
    private 'introduction_text'?: string;
    private 'voice_asset_id'?: string;
    public gender?: ShowDigitalHumanBusinessCardResponseGenderEnum | string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobInfo(jobInfo: DigitalHumanBusinessCardJobInfo): ShowDigitalHumanBusinessCardResponse {
        this['job_info'] = jobInfo;
        return this;
    }
    public set jobInfo(jobInfo: DigitalHumanBusinessCardJobInfo  | undefined) {
        this['job_info'] = jobInfo;
    }
    public get jobInfo(): DigitalHumanBusinessCardJobInfo | undefined {
        return this['job_info'];
    }
    public withCardTempletAssetId(cardTempletAssetId: string): ShowDigitalHumanBusinessCardResponse {
        this['card_templet_asset_id'] = cardTempletAssetId;
        return this;
    }
    public set cardTempletAssetId(cardTempletAssetId: string  | undefined) {
        this['card_templet_asset_id'] = cardTempletAssetId;
    }
    public get cardTempletAssetId(): string | undefined {
        return this['card_templet_asset_id'];
    }
    public withCardTextConfig(cardTextConfig: BusinessCardTextConfig): ShowDigitalHumanBusinessCardResponse {
        this['card_text_config'] = cardTextConfig;
        return this;
    }
    public set cardTextConfig(cardTextConfig: BusinessCardTextConfig  | undefined) {
        this['card_text_config'] = cardTextConfig;
    }
    public get cardTextConfig(): BusinessCardTextConfig | undefined {
        return this['card_text_config'];
    }
    public withCardImageUrl(cardImageUrl: BusinessCardImageUrl): ShowDigitalHumanBusinessCardResponse {
        this['card_image_url'] = cardImageUrl;
        return this;
    }
    public set cardImageUrl(cardImageUrl: BusinessCardImageUrl  | undefined) {
        this['card_image_url'] = cardImageUrl;
    }
    public get cardImageUrl(): BusinessCardImageUrl | undefined {
        return this['card_image_url'];
    }
    public withIntroductionText(introductionText: string): ShowDigitalHumanBusinessCardResponse {
        this['introduction_text'] = introductionText;
        return this;
    }
    public set introductionText(introductionText: string  | undefined) {
        this['introduction_text'] = introductionText;
    }
    public get introductionText(): string | undefined {
        return this['introduction_text'];
    }
    public withVoiceAssetId(voiceAssetId: string): ShowDigitalHumanBusinessCardResponse {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
    public withGender(gender: ShowDigitalHumanBusinessCardResponseGenderEnum | string): ShowDigitalHumanBusinessCardResponse {
        this['gender'] = gender;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowDigitalHumanBusinessCardResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDigitalHumanBusinessCardResponseGenderEnum {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
