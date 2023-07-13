

export class EditHlsInfo {
    public interval?: number;
    public constructor() { 
    }
    public withInterval(interval: number): EditHlsInfo {
        this['interval'] = interval;
        return this;
    }
}