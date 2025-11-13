

export class CustomDate {
    public start?: number;
    private 'start_unit'?: string;
    public end?: number;
    private 'end_unit'?: string;
    public constructor(start?: number, startUnit?: string, end?: number, endUnit?: string) { 
        this['start'] = start;
        this['start_unit'] = startUnit;
        this['end'] = end;
        this['end_unit'] = endUnit;
    }
    public withStart(start: number): CustomDate {
        this['start'] = start;
        return this;
    }
    public withStartUnit(startUnit: string): CustomDate {
        this['start_unit'] = startUnit;
        return this;
    }
    public set startUnit(startUnit: string  | undefined) {
        this['start_unit'] = startUnit;
    }
    public get startUnit(): string | undefined {
        return this['start_unit'];
    }
    public withEnd(end: number): CustomDate {
        this['end'] = end;
        return this;
    }
    public withEndUnit(endUnit: string): CustomDate {
        this['end_unit'] = endUnit;
        return this;
    }
    public set endUnit(endUnit: string  | undefined) {
        this['end_unit'] = endUnit;
    }
    public get endUnit(): string | undefined {
        return this['end_unit'];
    }
}