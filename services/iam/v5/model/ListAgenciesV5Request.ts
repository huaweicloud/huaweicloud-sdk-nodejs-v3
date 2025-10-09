

export class ListAgenciesV5Request {
    public limit?: number;
    public marker?: string;
    private 'path_prefix'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAgenciesV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAgenciesV5Request {
        this['marker'] = marker;
        return this;
    }
    public withPathPrefix(pathPrefix: string): ListAgenciesV5Request {
        this['path_prefix'] = pathPrefix;
        return this;
    }
    public set pathPrefix(pathPrefix: string  | undefined) {
        this['path_prefix'] = pathPrefix;
    }
    public get pathPrefix(): string | undefined {
        return this['path_prefix'];
    }
}