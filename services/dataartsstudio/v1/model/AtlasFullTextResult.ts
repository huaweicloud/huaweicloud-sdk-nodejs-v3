import { AtlasEntityHeader } from './AtlasEntityHeader';


export class AtlasFullTextResult {
    public entity?: AtlasEntityHeader;
    public score?: number;
    public constructor() { 
    }
    public withEntity(entity: AtlasEntityHeader): AtlasFullTextResult {
        this['entity'] = entity;
        return this;
    }
    public withScore(score: number): AtlasFullTextResult {
        this['score'] = score;
        return this;
    }
}