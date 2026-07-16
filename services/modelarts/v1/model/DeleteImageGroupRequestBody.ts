

export class DeleteImageGroupRequestBody {
    private 'is_force'?: boolean;
    public constructor() { 
    }
    public withIsForce(isForce: boolean): DeleteImageGroupRequestBody {
        this['is_force'] = isForce;
        return this;
    }
    public set isForce(isForce: boolean  | undefined) {
        this['is_force'] = isForce;
    }
    public get isForce(): boolean | undefined {
        return this['is_force'];
    }
}