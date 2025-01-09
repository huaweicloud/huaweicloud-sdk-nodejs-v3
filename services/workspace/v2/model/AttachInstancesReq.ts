import { AttachInstancesDesktopInfo } from './AttachInstancesDesktopInfo';


export class AttachInstancesReq {
    public desktops?: Array<AttachInstancesDesktopInfo>;
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'os_type'?: string;
    private 'order_id'?: string;
    private 'enterprise_project_id'?: string;
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
    public withOsType(osType: string): AttachInstancesReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOrderId(orderId: string): AttachInstancesReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AttachInstancesReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
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