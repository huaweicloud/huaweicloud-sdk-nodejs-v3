import { VarOverridesPrimitiveTypeHolderVarOverrides } from './VarOverridesPrimitiveTypeHolderVarOverrides';


export class VarOverridesPrimitiveTypeHolder {
    private 'var_overrides'?: VarOverridesPrimitiveTypeHolderVarOverrides;
    public constructor() { 
    }
    public withVarOverrides(varOverrides: VarOverridesPrimitiveTypeHolderVarOverrides): VarOverridesPrimitiveTypeHolder {
        this['var_overrides'] = varOverrides;
        return this;
    }
    public set varOverrides(varOverrides: VarOverridesPrimitiveTypeHolderVarOverrides  | undefined) {
        this['var_overrides'] = varOverrides;
    }
    public get varOverrides(): VarOverridesPrimitiveTypeHolderVarOverrides | undefined {
        return this['var_overrides'];
    }
}