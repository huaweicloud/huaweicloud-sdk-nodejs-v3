import { NodeconfigStatusConfigsStatusImageWarmUp } from './NodeconfigStatusConfigsStatusImageWarmUp';


export class NodeconfigStatusConfigsStatus {
    private 'image_warm_up'?: NodeconfigStatusConfigsStatusImageWarmUp;
    public constructor() { 
    }
    public withImageWarmUp(imageWarmUp: NodeconfigStatusConfigsStatusImageWarmUp): NodeconfigStatusConfigsStatus {
        this['image_warm_up'] = imageWarmUp;
        return this;
    }
    public set imageWarmUp(imageWarmUp: NodeconfigStatusConfigsStatusImageWarmUp  | undefined) {
        this['image_warm_up'] = imageWarmUp;
    }
    public get imageWarmUp(): NodeconfigStatusConfigsStatusImageWarmUp | undefined {
        return this['image_warm_up'];
    }
}