

export class ShowSerialConsoleActionsOption {
    public url?: string;
    public constructor() { 
    }
    public withUrl(url: string): ShowSerialConsoleActionsOption {
        this['url'] = url;
        return this;
    }
}