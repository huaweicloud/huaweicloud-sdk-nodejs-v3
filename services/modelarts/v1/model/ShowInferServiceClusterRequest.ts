

export class ShowInferServiceClusterRequest {
    public id?: string;
    private 'X-User-Token'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowInferServiceClusterRequest {
        this['id'] = id;
        return this;
    }
    public withXUserToken(xUserToken: string): ShowInferServiceClusterRequest {
        this['X-User-Token'] = xUserToken;
        return this;
    }
    public set xUserToken(xUserToken: string  | undefined) {
        this['X-User-Token'] = xUserToken;
    }
    public get xUserToken(): string | undefined {
        return this['X-User-Token'];
    }
}