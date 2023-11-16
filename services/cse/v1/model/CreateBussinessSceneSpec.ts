import { CreateBussinessSceneSpecMatches } from './CreateBussinessSceneSpecMatches';


export class CreateBussinessSceneSpec {
    public alias?: string;
    public matches?: Array<CreateBussinessSceneSpecMatches>;
    public constructor() { 
    }
    public withAlias(alias: string): CreateBussinessSceneSpec {
        this['alias'] = alias;
        return this;
    }
    public withMatches(matches: Array<CreateBussinessSceneSpecMatches>): CreateBussinessSceneSpec {
        this['matches'] = matches;
        return this;
    }
}