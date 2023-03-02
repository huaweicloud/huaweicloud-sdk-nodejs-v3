

export class ImageWisedesignColorfilterReq {
    public image?: string;
    public url?: string;
    private 'filter_id': string | undefined;
    public constructor(filterId?: any) { 
        this['filter_id'] = filterId;
    }
    public withImage(image: string): ImageWisedesignColorfilterReq {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): ImageWisedesignColorfilterReq {
        this['url'] = url;
        return this;
    }
    public withFilterId(filterId: string): ImageWisedesignColorfilterReq {
        this['filter_id'] = filterId;
        return this;
    }
    public set filterId(filterId: string | undefined) {
        this['filter_id'] = filterId;
    }
    public get filterId() {
        return this['filter_id'];
    }
}