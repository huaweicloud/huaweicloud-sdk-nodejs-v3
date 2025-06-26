

export class Blueprint {
    private 'blueprint_product_id'?: string;
    private 'blueprint_product_version'?: string;
    public variables?: string;
    private 'is_blueprint_has_multi_account_resource'?: boolean;
    public constructor() { 
    }
    public withBlueprintProductId(blueprintProductId: string): Blueprint {
        this['blueprint_product_id'] = blueprintProductId;
        return this;
    }
    public set blueprintProductId(blueprintProductId: string  | undefined) {
        this['blueprint_product_id'] = blueprintProductId;
    }
    public get blueprintProductId(): string | undefined {
        return this['blueprint_product_id'];
    }
    public withBlueprintProductVersion(blueprintProductVersion: string): Blueprint {
        this['blueprint_product_version'] = blueprintProductVersion;
        return this;
    }
    public set blueprintProductVersion(blueprintProductVersion: string  | undefined) {
        this['blueprint_product_version'] = blueprintProductVersion;
    }
    public get blueprintProductVersion(): string | undefined {
        return this['blueprint_product_version'];
    }
    public withVariables(variables: string): Blueprint {
        this['variables'] = variables;
        return this;
    }
    public withIsBlueprintHasMultiAccountResource(isBlueprintHasMultiAccountResource: boolean): Blueprint {
        this['is_blueprint_has_multi_account_resource'] = isBlueprintHasMultiAccountResource;
        return this;
    }
    public set isBlueprintHasMultiAccountResource(isBlueprintHasMultiAccountResource: boolean  | undefined) {
        this['is_blueprint_has_multi_account_resource'] = isBlueprintHasMultiAccountResource;
    }
    public get isBlueprintHasMultiAccountResource(): boolean | undefined {
        return this['is_blueprint_has_multi_account_resource'];
    }
}