import { NodeconfigUpdateSpecConfigsCpuManager } from './NodeconfigUpdateSpecConfigsCpuManager';
import { NodeconfigUpdateSpecConfigsDropCache } from './NodeconfigUpdateSpecConfigsDropCache';
import { NodeconfigUpdateSpecConfigsImageWarmUp } from './NodeconfigUpdateSpecConfigsImageWarmUp';
import { NodeconfigUpdateSpecConfigsTransparentHugepage } from './NodeconfigUpdateSpecConfigsTransparentHugepage';


export class NodeconfigUpdateSpecConfigs {
    private 'image_warm_up'?: Array<NodeconfigUpdateSpecConfigsImageWarmUp>;
    private 'cpu_manager'?: NodeconfigUpdateSpecConfigsCpuManager;
    private 'drop_cache'?: NodeconfigUpdateSpecConfigsDropCache;
    private 'transparent_hugepage'?: NodeconfigUpdateSpecConfigsTransparentHugepage;
    public constructor() { 
    }
    public withImageWarmUp(imageWarmUp: Array<NodeconfigUpdateSpecConfigsImageWarmUp>): NodeconfigUpdateSpecConfigs {
        this['image_warm_up'] = imageWarmUp;
        return this;
    }
    public set imageWarmUp(imageWarmUp: Array<NodeconfigUpdateSpecConfigsImageWarmUp>  | undefined) {
        this['image_warm_up'] = imageWarmUp;
    }
    public get imageWarmUp(): Array<NodeconfigUpdateSpecConfigsImageWarmUp> | undefined {
        return this['image_warm_up'];
    }
    public withCpuManager(cpuManager: NodeconfigUpdateSpecConfigsCpuManager): NodeconfigUpdateSpecConfigs {
        this['cpu_manager'] = cpuManager;
        return this;
    }
    public set cpuManager(cpuManager: NodeconfigUpdateSpecConfigsCpuManager  | undefined) {
        this['cpu_manager'] = cpuManager;
    }
    public get cpuManager(): NodeconfigUpdateSpecConfigsCpuManager | undefined {
        return this['cpu_manager'];
    }
    public withDropCache(dropCache: NodeconfigUpdateSpecConfigsDropCache): NodeconfigUpdateSpecConfigs {
        this['drop_cache'] = dropCache;
        return this;
    }
    public set dropCache(dropCache: NodeconfigUpdateSpecConfigsDropCache  | undefined) {
        this['drop_cache'] = dropCache;
    }
    public get dropCache(): NodeconfigUpdateSpecConfigsDropCache | undefined {
        return this['drop_cache'];
    }
    public withTransparentHugepage(transparentHugepage: NodeconfigUpdateSpecConfigsTransparentHugepage): NodeconfigUpdateSpecConfigs {
        this['transparent_hugepage'] = transparentHugepage;
        return this;
    }
    public set transparentHugepage(transparentHugepage: NodeconfigUpdateSpecConfigsTransparentHugepage  | undefined) {
        this['transparent_hugepage'] = transparentHugepage;
    }
    public get transparentHugepage(): NodeconfigUpdateSpecConfigsTransparentHugepage | undefined {
        return this['transparent_hugepage'];
    }
}