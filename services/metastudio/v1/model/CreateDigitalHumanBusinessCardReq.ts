import { BusinessCardImageConfig } from './BusinessCardImageConfig';
import { BusinessCardTextConfig } from './BusinessCardTextConfig';
import { ReviewConfig } from './ReviewConfig';


export class CreateDigitalHumanBusinessCardReq {
    private 'business_card_type'?: CreateDigitalHumanBusinessCardReqBusinessCardTypeEnum | string;
    private 'card_templet_asset_id'?: string;
    private 'card_text_config'?: BusinessCardTextConfig;
    private 'card_image_config'?: BusinessCardImageConfig;
    private 'introduction_type'?: CreateDigitalHumanBusinessCardReqIntroductionTypeEnum | string;
    private 'introduction_text'?: string;
    private 'voice_asset_id'?: string;
    private 'introduction_audio_asset_id'?: string;
    private 'video_asset_name'?: string;
    public gender?: CreateDigitalHumanBusinessCardReqGenderEnum | string;
    private 'review_config'?: ReviewConfig;
    public constructor(businessCardType?: string, cardTempletAssetId?: string, cardTextConfig?: BusinessCardTextConfig, cardImageConfig?: BusinessCardImageConfig) { 
        this['business_card_type'] = businessCardType;
        this['card_templet_asset_id'] = cardTempletAssetId;
        this['card_text_config'] = cardTextConfig;
        this['card_image_config'] = cardImageConfig;
    }
    public withBusinessCardType(businessCardType: CreateDigitalHumanBusinessCardReqBusinessCardTypeEnum | string): CreateDigitalHumanBusinessCardReq {
        this['business_card_type'] = businessCardType;
        return this;
    }
    public set businessCardType(businessCardType: CreateDigitalHumanBusinessCardReqBusinessCardTypeEnum | string  | undefined) {
        this['business_card_type'] = businessCardType;
    }
    public get businessCardType(): CreateDigitalHumanBusinessCardReqBusinessCardTypeEnum | string | undefined {
        return this['business_card_type'];
    }
    public withCardTempletAssetId(cardTempletAssetId: string): CreateDigitalHumanBusinessCardReq {
        this['card_templet_asset_id'] = cardTempletAssetId;
        return this;
    }
    public set cardTempletAssetId(cardTempletAssetId: string  | undefined) {
        this['card_templet_asset_id'] = cardTempletAssetId;
    }
    public get cardTempletAssetId(): string | undefined {
        return this['card_templet_asset_id'];
    }
    public withCardTextConfig(cardTextConfig: BusinessCardTextConfig): CreateDigitalHumanBusinessCardReq {
        this['card_text_config'] = cardTextConfig;
        return this;
    }
    public set cardTextConfig(cardTextConfig: BusinessCardTextConfig  | undefined) {
        this['card_text_config'] = cardTextConfig;
    }
    public get cardTextConfig(): BusinessCardTextConfig | undefined {
        return this['card_text_config'];
    }
    public withCardImageConfig(cardImageConfig: BusinessCardImageConfig): CreateDigitalHumanBusinessCardReq {
        this['card_image_config'] = cardImageConfig;
        return this;
    }
    public set cardImageConfig(cardImageConfig: BusinessCardImageConfig  | undefined) {
        this['card_image_config'] = cardImageConfig;
    }
    public get cardImageConfig(): BusinessCardImageConfig | undefined {
        return this['card_image_config'];
    }
    public withIntroductionType(introductionType: CreateDigitalHumanBusinessCardReqIntroductionTypeEnum | string): CreateDigitalHumanBusinessCardReq {
        this['introduction_type'] = introductionType;
        return this;
    }
    public set introductionType(introductionType: CreateDigitalHumanBusinessCardReqIntroductionTypeEnum | string  | undefined) {
        this['introduction_type'] = introductionType;
    }
    public get introductionType(): CreateDigitalHumanBusinessCardReqIntroductionTypeEnum | string | undefined {
        return this['introduction_type'];
    }
    public withIntroductionText(introductionText: string): CreateDigitalHumanBusinessCardReq {
        this['introduction_text'] = introductionText;
        return this;
    }
    public set introductionText(introductionText: string  | undefined) {
        this['introduction_text'] = introductionText;
    }
    public get introductionText(): string | undefined {
        return this['introduction_text'];
    }
    public withVoiceAssetId(voiceAssetId: string): CreateDigitalHumanBusinessCardReq {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
    public withIntroductionAudioAssetId(introductionAudioAssetId: string): CreateDigitalHumanBusinessCardReq {
        this['introduction_audio_asset_id'] = introductionAudioAssetId;
        return this;
    }
    public set introductionAudioAssetId(introductionAudioAssetId: string  | undefined) {
        this['introduction_audio_asset_id'] = introductionAudioAssetId;
    }
    public get introductionAudioAssetId(): string | undefined {
        return this['introduction_audio_asset_id'];
    }
    public withVideoAssetName(videoAssetName: string): CreateDigitalHumanBusinessCardReq {
        this['video_asset_name'] = videoAssetName;
        return this;
    }
    public set videoAssetName(videoAssetName: string  | undefined) {
        this['video_asset_name'] = videoAssetName;
    }
    public get videoAssetName(): string | undefined {
        return this['video_asset_name'];
    }
    public withGender(gender: CreateDigitalHumanBusinessCardReqGenderEnum | string): CreateDigitalHumanBusinessCardReq {
        this['gender'] = gender;
        return this;
    }
    public withReviewConfig(reviewConfig: ReviewConfig): CreateDigitalHumanBusinessCardReq {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDigitalHumanBusinessCardReqBusinessCardTypeEnum {
    E_2D_DIGITAL_HUMAN_CARD = '2D_DIGITAL_HUMAN_CARD'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDigitalHumanBusinessCardReqIntroductionTypeEnum {
    TEXT = 'TEXT',
    AUDIO = 'AUDIO'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDigitalHumanBusinessCardReqGenderEnum {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
