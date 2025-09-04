

export class CreateInstallCmdRequestDTO {
    private 'host_tag'?: string;
    public constructor() { 
    }
    public withHostTag(hostTag: string): CreateInstallCmdRequestDTO {
        this['host_tag'] = hostTag;
        return this;
    }
    public set hostTag(hostTag: string  | undefined) {
        this['host_tag'] = hostTag;
    }
    public get hostTag(): string | undefined {
        return this['host_tag'];
    }
}