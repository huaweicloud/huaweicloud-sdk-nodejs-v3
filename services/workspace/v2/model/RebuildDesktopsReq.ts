

export class RebuildDesktopsReq {
    private 'desktop_ids'?: Array<string>;
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'os_type'?: string;
    private 'delay_time'?: number;
    public message?: string;
    private 'order_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(desktopIds?: Array<string>, imageType?: string, imageId?: string) { 
        this['desktop_ids'] = desktopIds;
        this['image_type'] = imageType;
        this['image_id'] = imageId;
    }
    public withDesktopIds(desktopIds: Array<string>): RebuildDesktopsReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withImageType(imageType: string): RebuildDesktopsReq {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): RebuildDesktopsReq {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withOsType(osType: string): RebuildDesktopsReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withDelayTime(delayTime: number): RebuildDesktopsReq {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number  | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime(): number | undefined {
        return this['delay_time'];
    }
    public withMessage(message: string): RebuildDesktopsReq {
        this['message'] = message;
        return this;
    }
    public withOrderId(orderId: string): RebuildDesktopsReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RebuildDesktopsReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}