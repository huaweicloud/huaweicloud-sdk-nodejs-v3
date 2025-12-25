import { DictionaryCreate } from './DictionaryCreate';


export class CreateDictionaryRequest {
    private 'dict_list'?: Array<DictionaryCreate>;
    private 'is_built_in'?: boolean;
    public constructor() { 
    }
    public withDictList(dictList: Array<DictionaryCreate>): CreateDictionaryRequest {
        this['dict_list'] = dictList;
        return this;
    }
    public set dictList(dictList: Array<DictionaryCreate>  | undefined) {
        this['dict_list'] = dictList;
    }
    public get dictList(): Array<DictionaryCreate> | undefined {
        return this['dict_list'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): CreateDictionaryRequest {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
}