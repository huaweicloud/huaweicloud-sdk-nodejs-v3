import { DefEntryDto } from './DefEntryDto';


export class SymbolNodeDto {
    public def?: DefEntryDto;
    public children?: Array<SymbolNodeDto>;
    public constructor() { 
    }
    public withDef(def: DefEntryDto): SymbolNodeDto {
        this['def'] = def;
        return this;
    }
    public withChildren(children: Array<SymbolNodeDto>): SymbolNodeDto {
        this['children'] = children;
        return this;
    }
}