import { ImageWisedesignCombineBody } from './ImageWisedesignCombineBody';


export class ImageWisedesignCombineReq {
    private 'canvas_w': number | undefined;
    private 'canvas_h': number | undefined;
    public layers: Array<ImageWisedesignCombineBody>;
    public constructor(canvasW?: any, canvasH?: any, layers?: any) { 
        this['canvas_w'] = canvasW;
        this['canvas_h'] = canvasH;
        this['layers'] = layers;
    }
    public withCanvasW(canvasW: number): ImageWisedesignCombineReq {
        this['canvas_w'] = canvasW;
        return this;
    }
    public set canvasW(canvasW: number | undefined) {
        this['canvas_w'] = canvasW;
    }
    public get canvasW() {
        return this['canvas_w'];
    }
    public withCanvasH(canvasH: number): ImageWisedesignCombineReq {
        this['canvas_h'] = canvasH;
        return this;
    }
    public set canvasH(canvasH: number | undefined) {
        this['canvas_h'] = canvasH;
    }
    public get canvasH() {
        return this['canvas_h'];
    }
    public withLayers(layers: Array<ImageWisedesignCombineBody>): ImageWisedesignCombineReq {
        this['layers'] = layers;
        return this;
    }
}