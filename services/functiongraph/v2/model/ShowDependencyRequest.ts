

export class ShowDependencyRequest {
    private 'depend_id': string | undefined;
    public constructor(dependId?: any) { 
        this['depend_id'] = dependId;
    }
    public withDependId(dependId: string): ShowDependencyRequest {
        this['depend_id'] = dependId;
        return this;
    }
    public set dependId(dependId: string | undefined) {
        this['depend_id'] = dependId;
    }
    public get dependId() {
        return this['depend_id'];
    }
}