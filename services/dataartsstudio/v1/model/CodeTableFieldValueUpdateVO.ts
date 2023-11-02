import { CodeTableFieldVO } from './CodeTableFieldVO';


export class CodeTableFieldValueUpdateVO {
    private 'to_add'?: Array<CodeTableFieldVO>;
    private 'to_modify'?: Array<CodeTableFieldVO>;
    private 'to_remove'?: Array<CodeTableFieldVO>;
    public constructor() { 
    }
    public withToAdd(toAdd: Array<CodeTableFieldVO>): CodeTableFieldValueUpdateVO {
        this['to_add'] = toAdd;
        return this;
    }
    public set toAdd(toAdd: Array<CodeTableFieldVO>  | undefined) {
        this['to_add'] = toAdd;
    }
    public get toAdd(): Array<CodeTableFieldVO> | undefined {
        return this['to_add'];
    }
    public withToModify(toModify: Array<CodeTableFieldVO>): CodeTableFieldValueUpdateVO {
        this['to_modify'] = toModify;
        return this;
    }
    public set toModify(toModify: Array<CodeTableFieldVO>  | undefined) {
        this['to_modify'] = toModify;
    }
    public get toModify(): Array<CodeTableFieldVO> | undefined {
        return this['to_modify'];
    }
    public withToRemove(toRemove: Array<CodeTableFieldVO>): CodeTableFieldValueUpdateVO {
        this['to_remove'] = toRemove;
        return this;
    }
    public set toRemove(toRemove: Array<CodeTableFieldVO>  | undefined) {
        this['to_remove'] = toRemove;
    }
    public get toRemove(): Array<CodeTableFieldVO> | undefined {
        return this['to_remove'];
    }
}