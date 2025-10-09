import { ResizeClusterRequestBodyExtendParam } from './ResizeClusterRequestBodyExtendParam';


export class ResizeClusterRequestBody {
    public flavorResize?: string;
    public skippedTasks?: Array<ResizeClusterRequestBodySkippedTasksEnum> | Array<string>;
    public extendParam?: ResizeClusterRequestBodyExtendParam;
    public constructor(flavorResize?: string) { 
        this['flavorResize'] = flavorResize;
    }
    public withFlavorResize(flavorResize: string): ResizeClusterRequestBody {
        this['flavorResize'] = flavorResize;
        return this;
    }
    public withSkippedTasks(skippedTasks: Array<ResizeClusterRequestBodySkippedTasksEnum> | Array<string>): ResizeClusterRequestBody {
        this['skippedTasks'] = skippedTasks;
        return this;
    }
    public withExtendParam(extendParam: ResizeClusterRequestBodyExtendParam): ResizeClusterRequestBody {
        this['extendParam'] = extendParam;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResizeClusterRequestBodySkippedTasksEnum {
    INGRESSCHECKER = 'IngressChecker'
}
