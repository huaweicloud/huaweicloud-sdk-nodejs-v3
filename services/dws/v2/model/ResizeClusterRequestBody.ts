import { ScaleOut } from './ScaleOut';


export class ResizeClusterRequestBody {
    private 'scale_out'?: ScaleOut;
    public constructor() { 
    }
    public withScaleOut(scaleOut: ScaleOut): ResizeClusterRequestBody {
        this['scale_out'] = scaleOut;
        return this;
    }
    public set scaleOut(scaleOut: ScaleOut  | undefined) {
        this['scale_out'] = scaleOut;
    }
    public get scaleOut(): ScaleOut | undefined {
        return this['scale_out'];
    }
}