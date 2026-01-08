

export class RebuildDesktopPoolReq {
    private 'image_type'?: string;
    private 'image_id'?: string;
    private 'os_type'?: string;
    private 'delay_time'?: number;
    public message?: string;
    private 'is_fix'?: boolean;
    private 'handle_type'?: string;
    private 'desktop_ids'?: Array<string>;
    public constructor(imageId?: string) { 
        this['image_id'] = imageId;
    }
    public withImageType(imageType: string): RebuildDesktopPoolReq {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withImageId(imageId: string): RebuildDesktopPoolReq {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withOsType(osType: string): RebuildDesktopPoolReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withDelayTime(delayTime: number): RebuildDesktopPoolReq {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number  | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime(): number | undefined {
        return this['delay_time'];
    }
    public withMessage(message: string): RebuildDesktopPoolReq {
        this['message'] = message;
        return this;
    }
    public withIsFix(isFix: boolean): RebuildDesktopPoolReq {
        this['is_fix'] = isFix;
        return this;
    }
    public set isFix(isFix: boolean  | undefined) {
        this['is_fix'] = isFix;
    }
    public get isFix(): boolean | undefined {
        return this['is_fix'];
    }
    public withHandleType(handleType: string): RebuildDesktopPoolReq {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): string | undefined {
        return this['handle_type'];
    }
    public withDesktopIds(desktopIds: Array<string>): RebuildDesktopPoolReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
}