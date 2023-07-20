

export class DeleteDependencyRequest {
    private 'depend_id'?: string;
    public constructor(dependId?: string) { 
        this['depend_id'] = dependId;
    }
    public withDependId(dependId: string): DeleteDependencyRequest {
        this['depend_id'] = dependId;
        return this;
    }
    public set dependId(dependId: string  | undefined) {
        this['depend_id'] = dependId;
    }
    public get dependId(): string | undefined {
        return this['depend_id'];
    }
}