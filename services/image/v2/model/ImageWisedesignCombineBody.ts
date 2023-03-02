import { ImageWisedesignCombineBodyBackgroundattrs } from './ImageWisedesignCombineBodyBackgroundattrs';


export class ImageWisedesignCombineBody {
    public id: number;
    public x?: number;
    public y?: number;
    public w?: number;
    public h?: number;
    public flipx?: boolean;
    public flipy?: boolean;
    public rotate?: number;
    public opacity?: number;
    private 'image_base64'?: string | undefined;
    private 'image_url'?: string | undefined;
    public backgroundattrs?: ImageWisedesignCombineBodyBackgroundattrs;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: number): ImageWisedesignCombineBody {
        this['id'] = id;
        return this;
    }
    public withX(x: number): ImageWisedesignCombineBody {
        this['x'] = x;
        return this;
    }
    public withY(y: number): ImageWisedesignCombineBody {
        this['y'] = y;
        return this;
    }
    public withW(w: number): ImageWisedesignCombineBody {
        this['w'] = w;
        return this;
    }
    public withH(h: number): ImageWisedesignCombineBody {
        this['h'] = h;
        return this;
    }
    public withFlipx(flipx: boolean): ImageWisedesignCombineBody {
        this['flipx'] = flipx;
        return this;
    }
    public withFlipy(flipy: boolean): ImageWisedesignCombineBody {
        this['flipy'] = flipy;
        return this;
    }
    public withRotate(rotate: number): ImageWisedesignCombineBody {
        this['rotate'] = rotate;
        return this;
    }
    public withOpacity(opacity: number): ImageWisedesignCombineBody {
        this['opacity'] = opacity;
        return this;
    }
    public withImageBase64(imageBase64: string): ImageWisedesignCombineBody {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64() {
        return this['image_base64'];
    }
    public withImageUrl(imageUrl: string): ImageWisedesignCombineBody {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl() {
        return this['image_url'];
    }
    public withBackgroundattrs(backgroundattrs: ImageWisedesignCombineBodyBackgroundattrs): ImageWisedesignCombineBody {
        this['backgroundattrs'] = backgroundattrs;
        return this;
    }
}