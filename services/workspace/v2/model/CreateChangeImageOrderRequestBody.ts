import { EncryptType } from './EncryptType';
import { EstimateChangeImageRequestBody } from './EstimateChangeImageRequestBody';


export class CreateChangeImageOrderRequestBody {
    private 'desktop_pool_id'?: string;
    private 'desktop_ids'?: Array<string>;
    private 'promotion_plan_id'?: string;
    private 'handle_type'?: CreateChangeImageOrderRequestBodyHandleTypeEnum | string;
    private 'image_spec_code'?: string;
    private 'image_id'?: string;
    private 'image_type'?: string;
    private 'delay_time'?: number;
    public message?: string;
    private 'encrypt_type'?: EncryptType;
    private 'kms_id'?: string;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): CreateChangeImageOrderRequestBody {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopIds(desktopIds: Array<string>): CreateChangeImageOrderRequestBody {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withPromotionPlanId(promotionPlanId: string): CreateChangeImageOrderRequestBody {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
    public withHandleType(handleType: CreateChangeImageOrderRequestBodyHandleTypeEnum | string): CreateChangeImageOrderRequestBody {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: CreateChangeImageOrderRequestBodyHandleTypeEnum | string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): CreateChangeImageOrderRequestBodyHandleTypeEnum | string | undefined {
        return this['handle_type'];
    }
    public withImageSpecCode(imageSpecCode: string): CreateChangeImageOrderRequestBody {
        this['image_spec_code'] = imageSpecCode;
        return this;
    }
    public set imageSpecCode(imageSpecCode: string  | undefined) {
        this['image_spec_code'] = imageSpecCode;
    }
    public get imageSpecCode(): string | undefined {
        return this['image_spec_code'];
    }
    public withImageId(imageId: string): CreateChangeImageOrderRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageType(imageType: string): CreateChangeImageOrderRequestBody {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withDelayTime(delayTime: number): CreateChangeImageOrderRequestBody {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number  | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime(): number | undefined {
        return this['delay_time'];
    }
    public withMessage(message: string): CreateChangeImageOrderRequestBody {
        this['message'] = message;
        return this;
    }
    public withEncryptType(encryptType: EncryptType): CreateChangeImageOrderRequestBody {
        this['encrypt_type'] = encryptType;
        return this;
    }
    public set encryptType(encryptType: EncryptType  | undefined) {
        this['encrypt_type'] = encryptType;
    }
    public get encryptType(): EncryptType | undefined {
        return this['encrypt_type'];
    }
    public withKmsId(kmsId: string): CreateChangeImageOrderRequestBody {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string  | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId(): string | undefined {
        return this['kms_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateChangeImageOrderRequestBodyHandleTypeEnum {
    ONLY_FOR_EXPAND = 'ONLY_FOR_EXPAND',
    FOR_EXPAND_AND_IDLE = 'FOR_EXPAND_AND_IDLE',
    FOR_EXPAND_AND_ALL = 'FOR_EXPAND_AND_ALL'
}
