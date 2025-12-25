import { DictionaryDelete } from './DictionaryDelete';


export class DeleteDictionaryRequest {
    private 'dict_list'?: Array<DictionaryDelete>;
    private 'is_built_in'?: boolean;
    public constructor() { 
    }
    public withDictList(dictList: Array<DictionaryDelete>): DeleteDictionaryRequest {
        this['dict_list'] = dictList;
        return this;
    }
    public set dictList(dictList: Array<DictionaryDelete>  | undefined) {
        this['dict_list'] = dictList;
    }
    public get dictList(): Array<DictionaryDelete> | undefined {
        return this['dict_list'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): DeleteDictionaryRequest {
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