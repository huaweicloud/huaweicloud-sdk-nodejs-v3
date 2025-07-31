

export class ShowPageNoticesInfo {
    private 'page_location'?: string;
    public type?: string;
    public content?: string;
    public title?: string;
    public url?: string;
    public level?: string;
    public constructor() { 
    }
    public withPageLocation(pageLocation: string): ShowPageNoticesInfo {
        this['page_location'] = pageLocation;
        return this;
    }
    public set pageLocation(pageLocation: string  | undefined) {
        this['page_location'] = pageLocation;
    }
    public get pageLocation(): string | undefined {
        return this['page_location'];
    }
    public withType(type: string): ShowPageNoticesInfo {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): ShowPageNoticesInfo {
        this['content'] = content;
        return this;
    }
    public withTitle(title: string): ShowPageNoticesInfo {
        this['title'] = title;
        return this;
    }
    public withUrl(url: string): ShowPageNoticesInfo {
        this['url'] = url;
        return this;
    }
    public withLevel(level: string): ShowPageNoticesInfo {
        this['level'] = level;
        return this;
    }
}