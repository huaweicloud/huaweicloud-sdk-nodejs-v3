

export class Affinity {
    private 'affinity_type'?: string;
    public required?: boolean;
    private 'selection_mode'?: string;
    public targets?: { [key: string]: string; };
    public constructor(affinityType?: string, required?: boolean, selectionMode?: string, targets?: { [key: string]: string; }) { 
        this['affinity_type'] = affinityType;
        this['required'] = required;
        this['selection_mode'] = selectionMode;
        this['targets'] = targets;
    }
    public withAffinityType(affinityType: string): Affinity {
        this['affinity_type'] = affinityType;
        return this;
    }
    public set affinityType(affinityType: string  | undefined) {
        this['affinity_type'] = affinityType;
    }
    public get affinityType(): string | undefined {
        return this['affinity_type'];
    }
    public withRequired(required: boolean): Affinity {
        this['required'] = required;
        return this;
    }
    public withSelectionMode(selectionMode: string): Affinity {
        this['selection_mode'] = selectionMode;
        return this;
    }
    public set selectionMode(selectionMode: string  | undefined) {
        this['selection_mode'] = selectionMode;
    }
    public get selectionMode(): string | undefined {
        return this['selection_mode'];
    }
    public withTargets(targets: { [key: string]: string; }): Affinity {
        this['targets'] = targets;
        return this;
    }
}