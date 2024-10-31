

export class AudioStreamCreateRequestData {
    public url?: string;
    public language?: string;
    private 'return_all_results'?: boolean;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): AudioStreamCreateRequestData {
        this['url'] = url;
        return this;
    }
    public withLanguage(language: string): AudioStreamCreateRequestData {
        this['language'] = language;
        return this;
    }
    public withReturnAllResults(returnAllResults: boolean): AudioStreamCreateRequestData {
        this['return_all_results'] = returnAllResults;
        return this;
    }
    public set returnAllResults(returnAllResults: boolean  | undefined) {
        this['return_all_results'] = returnAllResults;
    }
    public get returnAllResults(): boolean | undefined {
        return this['return_all_results'];
    }
}