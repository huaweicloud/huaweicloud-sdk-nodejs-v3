

export class ImageWisedesignInpaintingReq {
    private 'image_base64'?: string | undefined;
    private 'image_url'?: string | undefined;
    private 'polygon_coord'?: Array<Array<Array<number>>> | undefined;
    public constructor() { 
    }
    public withImageBase64(imageBase64: string): ImageWisedesignInpaintingReq {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64() {
        return this['image_base64'];
    }
    public withImageUrl(imageUrl: string): ImageWisedesignInpaintingReq {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl() {
        return this['image_url'];
    }
    public withPolygonCoord(polygonCoord: Array<Array<Array<number>>>): ImageWisedesignInpaintingReq {
        this['polygon_coord'] = polygonCoord;
        return this;
    }
    public set polygonCoord(polygonCoord: Array<Array<Array<number>>> | undefined) {
        this['polygon_coord'] = polygonCoord;
    }
    public get polygonCoord() {
        return this['polygon_coord'];
    }
}