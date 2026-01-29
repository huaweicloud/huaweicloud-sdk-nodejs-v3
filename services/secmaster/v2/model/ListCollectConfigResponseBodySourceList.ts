

export class ListCollectConfigResponseBodySourceList {
    private 'csvc_display'?: string;
    private 'csvc_hzzelp'?: string;
    public link?: string;
    private 'source_display'?: string;
    private 'source_help'?: string;
    public constructor() { 
    }
    public withCsvcDisplay(csvcDisplay: string): ListCollectConfigResponseBodySourceList {
        this['csvc_display'] = csvcDisplay;
        return this;
    }
    public set csvcDisplay(csvcDisplay: string  | undefined) {
        this['csvc_display'] = csvcDisplay;
    }
    public get csvcDisplay(): string | undefined {
        return this['csvc_display'];
    }
    public withCsvcHzzelp(csvcHzzelp: string): ListCollectConfigResponseBodySourceList {
        this['csvc_hzzelp'] = csvcHzzelp;
        return this;
    }
    public set csvcHzzelp(csvcHzzelp: string  | undefined) {
        this['csvc_hzzelp'] = csvcHzzelp;
    }
    public get csvcHzzelp(): string | undefined {
        return this['csvc_hzzelp'];
    }
    public withLink(link: string): ListCollectConfigResponseBodySourceList {
        this['link'] = link;
        return this;
    }
    public withSourceDisplay(sourceDisplay: string): ListCollectConfigResponseBodySourceList {
        this['source_display'] = sourceDisplay;
        return this;
    }
    public set sourceDisplay(sourceDisplay: string  | undefined) {
        this['source_display'] = sourceDisplay;
    }
    public get sourceDisplay(): string | undefined {
        return this['source_display'];
    }
    public withSourceHelp(sourceHelp: string): ListCollectConfigResponseBodySourceList {
        this['source_help'] = sourceHelp;
        return this;
    }
    public set sourceHelp(sourceHelp: string  | undefined) {
        this['source_help'] = sourceHelp;
    }
    public get sourceHelp(): string | undefined {
        return this['source_help'];
    }
}