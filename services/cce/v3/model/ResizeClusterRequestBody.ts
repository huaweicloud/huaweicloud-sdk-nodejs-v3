import { ResizeClusterRequestExtendParam } from './ResizeClusterRequestExtendParam';


export class ResizeClusterRequestBody {
    public flavorResize?: string;
    public extendParam?: ResizeClusterRequestExtendParam;
    public constructor(flavorResize?: string) { 
        this['flavorResize'] = flavorResize;
    }
    public withFlavorResize(flavorResize: string): ResizeClusterRequestBody {
        this['flavorResize'] = flavorResize;
        return this;
    }
    public withExtendParam(extendParam: ResizeClusterRequestExtendParam): ResizeClusterRequestBody {
        this['extendParam'] = extendParam;
        return this;
    }
}