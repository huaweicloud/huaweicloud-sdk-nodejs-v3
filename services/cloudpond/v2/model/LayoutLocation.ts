

export class LayoutLocation {
    private 'rack_id'?: string;
    private 'start_index'?: number;
    public unit?: number;
    public constructor() { 
    }
    public withRackId(rackId: string): LayoutLocation {
        this['rack_id'] = rackId;
        return this;
    }
    public set rackId(rackId: string  | undefined) {
        this['rack_id'] = rackId;
    }
    public get rackId(): string | undefined {
        return this['rack_id'];
    }
    public withStartIndex(startIndex: number): LayoutLocation {
        this['start_index'] = startIndex;
        return this;
    }
    public set startIndex(startIndex: number  | undefined) {
        this['start_index'] = startIndex;
    }
    public get startIndex(): number | undefined {
        return this['start_index'];
    }
    public withUnit(unit: number): LayoutLocation {
        this['unit'] = unit;
        return this;
    }
}