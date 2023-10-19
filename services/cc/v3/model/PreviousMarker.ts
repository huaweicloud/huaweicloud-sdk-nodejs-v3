

export class PreviousMarker {
    private 'previous_marker'?: string;
    public constructor() { 
    }
    public withPreviousMarker(previousMarker: string): PreviousMarker {
        this['previous_marker'] = previousMarker;
        return this;
    }
    public set previousMarker(previousMarker: string  | undefined) {
        this['previous_marker'] = previousMarker;
    }
    public get previousMarker(): string | undefined {
        return this['previous_marker'];
    }
}