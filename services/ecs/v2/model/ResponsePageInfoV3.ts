

export class ResponsePageInfoV3 {
    private 'next_marker'?: string;
    private 'previous_marker'?: string;
    public constructor() { 
    }
    public withNextMarker(nextMarker: string): ResponsePageInfoV3 {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withPreviousMarker(previousMarker: string): ResponsePageInfoV3 {
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