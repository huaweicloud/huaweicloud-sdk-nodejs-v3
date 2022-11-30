

export class ImageDetectionResultDetailFaceDetail {
    public h?: number;
    public w?: number;
    public x?: number;
    public y?: number;
    public constructor() { 
    }
    public withH(h: number): ImageDetectionResultDetailFaceDetail {
        this['h'] = h;
        return this;
    }
    public withW(w: number): ImageDetectionResultDetailFaceDetail {
        this['w'] = w;
        return this;
    }
    public withX(x: number): ImageDetectionResultDetailFaceDetail {
        this['x'] = x;
        return this;
    }
    public withY(y: number): ImageDetectionResultDetailFaceDetail {
        this['y'] = y;
        return this;
    }
}