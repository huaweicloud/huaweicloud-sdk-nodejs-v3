

export class LayerPositionConfig {
    public dx?: number;
    public dy?: number;
    private 'layer_index'?: number;
    public constructor(dx?: number, dy?: number, layerIndex?: number) { 
        this['dx'] = dx;
        this['dy'] = dy;
        this['layer_index'] = layerIndex;
    }
    public withDx(dx: number): LayerPositionConfig {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: number): LayerPositionConfig {
        this['dy'] = dy;
        return this;
    }
    public withLayerIndex(layerIndex: number): LayerPositionConfig {
        this['layer_index'] = layerIndex;
        return this;
    }
    public set layerIndex(layerIndex: number  | undefined) {
        this['layer_index'] = layerIndex;
    }
    public get layerIndex(): number | undefined {
        return this['layer_index'];
    }
}