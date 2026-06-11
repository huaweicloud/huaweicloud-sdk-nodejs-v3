

export class UpdateRawIconReq {
    private 'icon_content'?: string;
    public constructor(iconContent?: string) { 
        this['icon_content'] = iconContent;
    }
    public withIconContent(iconContent: string): UpdateRawIconReq {
        this['icon_content'] = iconContent;
        return this;
    }
    public set iconContent(iconContent: string  | undefined) {
        this['icon_content'] = iconContent;
    }
    public get iconContent(): string | undefined {
        return this['icon_content'];
    }
}