

export class AppExtendedInfo {
    private 'extended_info'?: { [key: string]: string; };
    public constructor() { 
    }
    public withExtendedInfo(extendedInfo: { [key: string]: string; }): AppExtendedInfo {
        this['extended_info'] = extendedInfo;
        return this;
    }
    public set extendedInfo(extendedInfo: { [key: string]: string; }  | undefined) {
        this['extended_info'] = extendedInfo;
    }
    public get extendedInfo(): { [key: string]: string; } | undefined {
        return this['extended_info'];
    }
}