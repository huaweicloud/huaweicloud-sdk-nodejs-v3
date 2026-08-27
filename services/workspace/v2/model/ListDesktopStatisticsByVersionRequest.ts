

export class ListDesktopStatisticsByVersionRequest {
    public versions?: Array<string>;
    public constructor() { 
    }
    public withVersions(versions: Array<string>): ListDesktopStatisticsByVersionRequest {
        this['versions'] = versions;
        return this;
    }
}