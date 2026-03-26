import { Model } from './Model';


export class ModelList {
    public totalSize?: number;
    public models?: Array<Model>;
    public constructor() { 
    }
    public withTotalSize(totalSize: number): ModelList {
        this['totalSize'] = totalSize;
        return this;
    }
    public withModels(models: Array<Model>): ModelList {
        this['models'] = models;
        return this;
    }
}