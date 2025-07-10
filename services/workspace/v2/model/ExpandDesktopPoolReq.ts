

export class ExpandDesktopPoolReq {
    public size?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): ExpandDesktopPoolReq {
        this['size'] = size;
        return this;
    }
}