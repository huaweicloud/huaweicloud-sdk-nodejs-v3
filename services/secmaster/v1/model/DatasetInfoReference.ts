

export class DatasetInfoReference {
    private 'csvc_display'?: string;
    private 'source_display'?: string;
    public link?: string;
    private 'csvc_help'?: string;
    private 'source_help'?: string;
    public constructor(csvcDisplay?: string, sourceDisplay?: string) { 
        this['csvc_display'] = csvcDisplay;
        this['source_display'] = sourceDisplay;
    }
    public withCsvcDisplay(csvcDisplay: string): DatasetInfoReference {
        this['csvc_display'] = csvcDisplay;
        return this;
    }
    public set csvcDisplay(csvcDisplay: string  | undefined) {
        this['csvc_display'] = csvcDisplay;
    }
    public get csvcDisplay(): string | undefined {
        return this['csvc_display'];
    }
    public withSourceDisplay(sourceDisplay: string): DatasetInfoReference {
        this['source_display'] = sourceDisplay;
        return this;
    }
    public set sourceDisplay(sourceDisplay: string  | undefined) {
        this['source_display'] = sourceDisplay;
    }
    public get sourceDisplay(): string | undefined {
        return this['source_display'];
    }
    public withLink(link: string): DatasetInfoReference {
        this['link'] = link;
        return this;
    }
    public withCsvcHelp(csvcHelp: string): DatasetInfoReference {
        this['csvc_help'] = csvcHelp;
        return this;
    }
    public set csvcHelp(csvcHelp: string  | undefined) {
        this['csvc_help'] = csvcHelp;
    }
    public get csvcHelp(): string | undefined {
        return this['csvc_help'];
    }
    public withSourceHelp(sourceHelp: string): DatasetInfoReference {
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