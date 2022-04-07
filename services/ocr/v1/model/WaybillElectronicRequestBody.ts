

export class WaybillElectronicRequestBody {
    public image?: string;
    public url?: string;
    public constructor() { 
    }
    public withImage(image: string): WaybillElectronicRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): WaybillElectronicRequestBody {
        this['url'] = url;
        return this;
    }
}