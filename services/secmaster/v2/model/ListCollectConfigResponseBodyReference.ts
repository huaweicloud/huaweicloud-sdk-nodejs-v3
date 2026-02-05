

export class ListCollectConfigResponseBodyReference {
    private 'csvc_display'?: string;
    private 'csvc_help'?: string;
    public link?: string;
    private 'source_display'?: string;
    private 'source_help'?: string;
    public constructor() { 
    }
    public withCsvcDisplay(csvcDisplay: string): ListCollectConfigResponseBodyReference {
        this['csvc_display'] = csvcDisplay;
        return this;
    }
    public set csvcDisplay(csvcDisplay: string  | undefined) {
        this['csvc_display'] = csvcDisplay;
    }
    public get csvcDisplay(): string | undefined {
        return this['csvc_display'];
    }
    public withCsvcHelp(csvcHelp: string): ListCollectConfigResponseBodyReference {
        this['csvc_help'] = csvcHelp;
        return this;
    }
    public set csvcHelp(csvcHelp: string  | undefined) {
        this['csvc_help'] = csvcHelp;
    }
    public get csvcHelp(): string | undefined {
        return this['csvc_help'];
    }
    public withLink(link: string): ListCollectConfigResponseBodyReference {
        this['link'] = link;
        return this;
    }
    public withSourceDisplay(sourceDisplay: string): ListCollectConfigResponseBodyReference {
        this['source_display'] = sourceDisplay;
        return this;
    }
    public set sourceDisplay(sourceDisplay: string  | undefined) {
        this['source_display'] = sourceDisplay;
    }
    public get sourceDisplay(): string | undefined {
        return this['source_display'];
    }
    public withSourceHelp(sourceHelp: string): ListCollectConfigResponseBodyReference {
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