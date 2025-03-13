

export class AvailableSpec {
    public flavor?: string;
    private 'attachment_type'?: string;
    private 'ip_version'?: string;
    public constructor() { 
    }
    public withFlavor(flavor: string): AvailableSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withAttachmentType(attachmentType: string): AvailableSpec {
        this['attachment_type'] = attachmentType;
        return this;
    }
    public set attachmentType(attachmentType: string  | undefined) {
        this['attachment_type'] = attachmentType;
    }
    public get attachmentType(): string | undefined {
        return this['attachment_type'];
    }
    public withIpVersion(ipVersion: string): AvailableSpec {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): string | undefined {
        return this['ip_version'];
    }
}