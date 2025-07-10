import { AttachInstancesDesktopInfo } from './AttachInstancesDesktopInfo';


export class AttachInstancesReq {
    public desktops?: Array<AttachInstancesDesktopInfo>;
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'desktop_name_policy_id'?: string;
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
}