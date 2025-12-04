

export class PhoneModel {
    private 'server_model_name'?: string;
    private 'phone_model_name'?: string;
    public status?: number;
    public cpu?: number;
    public memory?: number;
    public disk?: number;
    public resolution?: string;
    private 'extend_spec'?: string;
    private 'spec_code'?: string;
    private 'phone_capacity'?: number;
    private 'image_label'?: string;
    private 'product_type'?: number;
    private 'phone_model_version'?: number;
    public dpi?: number;
    public fps?: string;
    private 'volume_mode'?: number;
    private 'render_fps'?: number;
    private 'stream_fps'?: number;
    public constructor() { 
    }
    public withServerModelName(serverModelName: string): PhoneModel {
        this['server_model_name'] = serverModelName;
        return this;
    }
    public set serverModelName(serverModelName: string  | undefined) {
        this['server_model_name'] = serverModelName;
    }
    public get serverModelName(): string | undefined {
        return this['server_model_name'];
    }
    public withPhoneModelName(phoneModelName: string): PhoneModel {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withStatus(status: number): PhoneModel {
        this['status'] = status;
        return this;
    }
    public withCpu(cpu: number): PhoneModel {
        this['cpu'] = cpu;
        return this;
    }
    public withMemory(memory: number): PhoneModel {
        this['memory'] = memory;
        return this;
    }
    public withDisk(disk: number): PhoneModel {
        this['disk'] = disk;
        return this;
    }
    public withResolution(resolution: string): PhoneModel {
        this['resolution'] = resolution;
        return this;
    }
    public withExtendSpec(extendSpec: string): PhoneModel {
        this['extend_spec'] = extendSpec;
        return this;
    }
    public set extendSpec(extendSpec: string  | undefined) {
        this['extend_spec'] = extendSpec;
    }
    public get extendSpec(): string | undefined {
        return this['extend_spec'];
    }
    public withSpecCode(specCode: string): PhoneModel {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withPhoneCapacity(phoneCapacity: number): PhoneModel {
        this['phone_capacity'] = phoneCapacity;
        return this;
    }
    public set phoneCapacity(phoneCapacity: number  | undefined) {
        this['phone_capacity'] = phoneCapacity;
    }
    public get phoneCapacity(): number | undefined {
        return this['phone_capacity'];
    }
    public withImageLabel(imageLabel: string): PhoneModel {
        this['image_label'] = imageLabel;
        return this;
    }
    public set imageLabel(imageLabel: string  | undefined) {
        this['image_label'] = imageLabel;
    }
    public get imageLabel(): string | undefined {
        return this['image_label'];
    }
    public withProductType(productType: number): PhoneModel {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: number  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): number | undefined {
        return this['product_type'];
    }
    public withPhoneModelVersion(phoneModelVersion: number): PhoneModel {
        this['phone_model_version'] = phoneModelVersion;
        return this;
    }
    public set phoneModelVersion(phoneModelVersion: number  | undefined) {
        this['phone_model_version'] = phoneModelVersion;
    }
    public get phoneModelVersion(): number | undefined {
        return this['phone_model_version'];
    }
    public withDpi(dpi: number): PhoneModel {
        this['dpi'] = dpi;
        return this;
    }
    public withFps(fps: string): PhoneModel {
        this['fps'] = fps;
        return this;
    }
    public withVolumeMode(volumeMode: number): PhoneModel {
        this['volume_mode'] = volumeMode;
        return this;
    }
    public set volumeMode(volumeMode: number  | undefined) {
        this['volume_mode'] = volumeMode;
    }
    public get volumeMode(): number | undefined {
        return this['volume_mode'];
    }
    public withRenderFps(renderFps: number): PhoneModel {
        this['render_fps'] = renderFps;
        return this;
    }
    public set renderFps(renderFps: number  | undefined) {
        this['render_fps'] = renderFps;
    }
    public get renderFps(): number | undefined {
        return this['render_fps'];
    }
    public withStreamFps(streamFps: number): PhoneModel {
        this['stream_fps'] = streamFps;
        return this;
    }
    public set streamFps(streamFps: number  | undefined) {
        this['stream_fps'] = streamFps;
    }
    public get streamFps(): number | undefined {
        return this['stream_fps'];
    }
}