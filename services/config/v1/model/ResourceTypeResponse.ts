

export class ResourceTypeResponse {
    public name?: string;
    private 'display_name'?: string | undefined;
    public global?: boolean;
    public regions?: Array<string>;
    private 'console_endpoint_id'?: string | undefined;
    private 'console_list_url'?: string | undefined;
    private 'console_detail_url'?: string | undefined;
    public track?: string;
    public constructor() { 
    }
    public withName(name: string): ResourceTypeResponse {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): ResourceTypeResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
    public withGlobal(global: boolean): ResourceTypeResponse {
        this['global'] = global;
        return this;
    }
    public withRegions(regions: Array<string>): ResourceTypeResponse {
        this['regions'] = regions;
        return this;
    }
    public withConsoleEndpointId(consoleEndpointId: string): ResourceTypeResponse {
        this['console_endpoint_id'] = consoleEndpointId;
        return this;
    }
    public set consoleEndpointId(consoleEndpointId: string | undefined) {
        this['console_endpoint_id'] = consoleEndpointId;
    }
    public get consoleEndpointId() {
        return this['console_endpoint_id'];
    }
    public withConsoleListUrl(consoleListUrl: string): ResourceTypeResponse {
        this['console_list_url'] = consoleListUrl;
        return this;
    }
    public set consoleListUrl(consoleListUrl: string | undefined) {
        this['console_list_url'] = consoleListUrl;
    }
    public get consoleListUrl() {
        return this['console_list_url'];
    }
    public withConsoleDetailUrl(consoleDetailUrl: string): ResourceTypeResponse {
        this['console_detail_url'] = consoleDetailUrl;
        return this;
    }
    public set consoleDetailUrl(consoleDetailUrl: string | undefined) {
        this['console_detail_url'] = consoleDetailUrl;
    }
    public get consoleDetailUrl() {
        return this['console_detail_url'];
    }
    public withTrack(track: string): ResourceTypeResponse {
        this['track'] = track;
        return this;
    }
}