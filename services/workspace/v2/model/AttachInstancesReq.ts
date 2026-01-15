import { AttachInstancesDesktopInfo } from './AttachInstancesDesktopInfo';
import { EncryptType } from './EncryptType';


export class AttachInstancesReq {
    public desktops?: Array<AttachInstancesDesktopInfo>;
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'desktop_name_policy_id'?: string;
    private 'encrypt_type'?: EncryptType;
    private 'kms_id'?: string;
    public constructor() { 
    }
    public withDesktops(desktops: Array<AttachInstancesDesktopInfo>): AttachInstancesReq {
        this['desktops'] = desktops;
        return this;
    }
    public withImageType(imageType: string): AttachInstancesReq {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): AttachInstancesReq {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withDesktopNamePolicyId(desktopNamePolicyId: string): AttachInstancesReq {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
        return this;
    }
    public set desktopNamePolicyId(desktopNamePolicyId: string  | undefined) {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
    }
    public get desktopNamePolicyId(): string | undefined {
        return this['desktop_name_policy_id'];
    }
    public withEncryptType(encryptType: EncryptType): AttachInstancesReq {
        this['encrypt_type'] = encryptType;
        return this;
    }
    public set encryptType(encryptType: EncryptType  | undefined) {
        this['encrypt_type'] = encryptType;
    }
    public get encryptType(): EncryptType | undefined {
        return this['encrypt_type'];
    }
    public withKmsId(kmsId: string): AttachInstancesReq {
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