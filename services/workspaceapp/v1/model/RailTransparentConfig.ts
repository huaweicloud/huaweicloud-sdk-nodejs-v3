

export class RailTransparentConfig {
    private 'select_policy'?: number;
    private 'transparent_list_custom'?: string;
    public constructor() { 
    }
    public withSelectPolicy(selectPolicy: number): RailTransparentConfig {
        this['select_policy'] = selectPolicy;
        return this;
    }
    public set selectPolicy(selectPolicy: number  | undefined) {
        this['select_policy'] = selectPolicy;
    }
    public get selectPolicy(): number | undefined {
        return this['select_policy'];
    }
    public withTransparentListCustom(transparentListCustom: string): RailTransparentConfig {
        this['transparent_list_custom'] = transparentListCustom;
        return this;
    }
    public set transparentListCustom(transparentListCustom: string  | undefined) {
        this['transparent_list_custom'] = transparentListCustom;
    }
    public get transparentListCustom(): string | undefined {
        return this['transparent_list_custom'];
    }
}