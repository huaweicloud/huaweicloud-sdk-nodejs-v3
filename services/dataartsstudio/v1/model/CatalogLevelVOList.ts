import { CatalogLevelVO } from './CatalogLevelVO';


export class CatalogLevelVOList {
    public levels?: Array<CatalogLevelVO>;
    public constructor() { 
    }
    public withLevels(levels: Array<CatalogLevelVO>): CatalogLevelVOList {
        this['levels'] = levels;
        return this;
    }
}